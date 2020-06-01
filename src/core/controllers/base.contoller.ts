import {
  Body,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import * as _ from 'lodash';
import { DIMMediatorBaseEntity } from 'src/core/entities/base-entity';
import { ApiResult, Pager } from 'src/core/interfaces';
import { DeleteResponse } from 'src/core/interfaces/response/delete.interface';
import { getPagerDetails } from 'src/core/utilities';
import { sanitizeResponseObject } from 'src/core/utilities/sanitize-response-object';
import { ObjectPropsResolver } from '@icodebible/utils/resolvers';
import { BaseService } from '../services/base.service';
import { PayloadConfig } from 'src/core/config/payload.config';
import {
  getSuccessResponse,
  genericFailureResponse,
  entityExistResponse,
  postSuccessResponse,
  deleteSuccessResponse,
} from 'src/core/helpers/response.helper';
import { SessionGuard } from 'src/modules/user/guards/session.guard';
import { createQueryBuilder } from 'typeorm';

export class BaseController<T extends DIMMediatorBaseEntity> {
  /**
   *
   * @param baseService
   * @param Model
   */
  constructor(
    private readonly baseService: BaseService<T>,
    private readonly Model: typeof DIMMediatorBaseEntity,
  ) {}

  /**
   *
   * @param query
   */
  @Get()
  @UseGuards(SessionGuard)
  async findAll(@Query() query): Promise<ApiResult> {
    if (_.has(query, 'paging') && query.paging === 'false') {
      const allContents: T[] = await this.baseService.findAll();
      return {
        [this.Model.APIEndPoint]: _.map(allContents, sanitizeResponseObject),
      };
    } else if (_.has(query, 'name')) {
      const foundName = await this.baseService.findOneByName(query.name);
      return { [this.Model.APIEndPoint]: foundName };
    } else if (
      _.has(query, 'system') &&
      _.has(query, 'orgUnit') &&
      _.has(query, 'period')
    ) {
      const res = await this.baseService.findByQueryParams(query);
    }

    const pagerDetails: Pager = getPagerDetails(query);

    const [entityRes, totalCount]: [
      T[],
      number,
    ] = await this.baseService.findAndCount(
      query.fields,
      query.filter,
      pagerDetails.pageSize,
      pagerDetails.page - 1,
    );

    return {
      pager: {
        ...pagerDetails,
        pageCount: entityRes.length,
        total: totalCount,
        nextPage: `/api/${this.Model.APIEndPoint}?page=${
          pagerDetails.page + 1
        }`,
      },
      [this.Model.APIEndPoint]: _.map(entityRes, sanitizeResponseObject),
    };
  }

  /**
   *
   * @param req
   * @param res
   * @param params
   */
  @Get(':id')
  @UseGuards(SessionGuard)
  async findOne(
    @Req() req: Request,
    @Res() res: Response,
    @Param() param,
  ): Promise<ApiResult> {
    try {
      const isEntityExist = await this.baseService.findOneByUid(param);
      const getResponse = isEntityExist;
      if (isEntityExist !== undefined) {
        return getSuccessResponse(res, sanitizeResponseObject(getResponse));
      } else {
        return genericFailureResponse(res, param);
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  /**
   *
   * @param req
   * @param res
   * @param params
   */
  @Get(':id/:relation')
  @UseGuards(SessionGuard)
  async findOneRelation(
    @Req() req: Request,
    @Res() res: Response,
    @Param() params,
  ): Promise<ApiResult> {
    try {
      const isEntityExist = await this.baseService.findOneByUid(params.id);
      const getResponse = isEntityExist;
      if (isEntityExist !== undefined) {
        return { [params.relation]: getResponse[params.relation] };
      } else {
        return genericFailureResponse(res, params);
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  /**
   *
   * @param req
   * @param res
   * @param createEntityDto
   */
  @Post()
  @UseGuards(SessionGuard)
  async create(
    @Req() req: Request,
    @Res() res: Response,
    @Body() entityDTO,
  ): Promise<ApiResult> {
    try {
      const isIDExist = await this.baseService.findOneByUid(entityDTO);
      if (isIDExist !== undefined) {
        return entityExistResponse(res, isIDExist);
      } else {
        const resolvedDTO = await ObjectPropsResolver(entityDTO, PayloadConfig);
        const createdEntity = await this.baseService.create(resolvedDTO);
        if (createdEntity !== undefined) {
          const entityOmittedId = await _.omit(createdEntity, ['id']);
          const sanitizedCreatedEntity = _.mapKeys(
            entityOmittedId,
            (value, key) => {
              return key === 'uid' ? 'id' : key;
            },
          );

          return postSuccessResponse(res, sanitizedCreatedEntity);
        } else {
          return genericFailureResponse(res);
        }
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  /**
   *
   * @param params
   * @param updateEntityDto
   */
  @Put(':id')
  @UseGuards(SessionGuard)
  async update(
    @Res() res: Response,
    @Param() param,
    @Body() payload,
  ): Promise<ApiResult> {
    const updateEntity = await this.baseService.findOneByUid(param);
    if (updateEntity !== undefined) {
      const resolvedPayload = await ObjectPropsResolver(payload, PayloadConfig);
      // ! Removed Update Based By UID params and update automatically
      // ! By following the criteria if the uid exist the it will update
      // ! The item but if it is new then it will create new item
      const response = await this.baseService.update(
        updateEntity,
        resolvedPayload,
      );
      if (response) {
        const omitId = _.omit(response, ['id']);
        const entityResponse = _.mapKeys(omitId, (value, key) => {
          return key === 'uid' ? 'id' : key;
        });
        return res.status(res.statusCode).json({
          message: `Item with id ${param.id} updated successfully.`,
          payload: entityResponse,
        });
      } else {
        return res.status(res.statusCode).json({
          message: `No payload`,
        });
      }
    } else {
      return genericFailureResponse(res, param);
    }
    return null;
  }

  /**
   *
   * @param params
   * @param req
   * @param res
   */
  @Delete(':id')
  @UseGuards(SessionGuard)
  async delete(
    @Param() params,
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<ApiResult> {
    try {
      const isEntityExist: any = await this.baseService.findOneByUid(params);
      if (isEntityExist !== undefined) {
        const deleteResponse: DeleteResponse = await this.baseService.delete(
          isEntityExist.id,
        );
        const omittedId = await _.omit(isEntityExist, ['id']);
        const sanitizedDeletedEntity = _.mapKeys(omittedId, (value, key) => {
          return key === 'uid' ? 'id' : key;
        });
        return deleteSuccessResponse(
          req,
          res,
          params,
          deleteResponse,
          sanitizedDeletedEntity,
        );
      } else {
        return genericFailureResponse(res, params);
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // TODO: give descriptive name for this method
  get APIEndPoint() {
    throw Error('Plural Not set');
    return 'undefined';
  }
}
