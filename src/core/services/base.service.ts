import { Injectable, Logger } from '@nestjs/common';
import {
  DeleteResult,
  Repository,
  UpdateResult,
  FindConditions,
} from 'typeorm';

import * as _ from 'lodash';
import { DIMMediatorBaseEntity } from 'src/core/entities/base-entity';
import {
  getSelections,
  getRelations,
} from 'src/core/utilities/get-fields.utility';
import { getWhereConditions } from 'src/core/utilities';
import { Mapper } from 'src/core/resolvers/database.resolver';
import { UIDToIDTransformation } from '@icodebible/utils/resolvers/uid-to-id';
import { ObjectPayloadUpdater } from '@icodebible/utils/resolvers/updater';
import { LabResultQuery } from '../models/lab-res-query.model';

@Injectable()
export class BaseService<T extends DIMMediatorBaseEntity> {
  constructor(
    private readonly modelRepository: Repository<T>,
    private readonly Model,
  ) {}

  async findAll(): Promise<T[]> {
    return await this.modelRepository.find();
  }

  /**
   *
   * @param where
   */
  async findWhere(where: FindConditions<T>): Promise<T[]> {
    return await this.modelRepository.find({ where });
  }

  async findAndCount(
    fields,
    filter,
    size,
    page,
    queryParams?,
  ): Promise<[T[], number]> {
    const metaData = this.modelRepository.manager.connection.getMetadata(
      this.Model,
    );
    return await this.modelRepository.findAndCount({
      select: getSelections(fields, metaData),
      relations: getRelations(fields, metaData),
      where: queryParams ? queryParams : getWhereConditions(filter),
      take: size,
      skip: page * size,
    });
  }

  async findAndCountStatus(
    fields,
    filter,
    size,
    page,
    queryParams,
  ): Promise<[T[], number]> {
    const metaData = this.modelRepository.manager.connection.getMetadata(
      this.Model,
    );

    return await this.modelRepository.findAndCount({
      select: getSelections(fields, metaData),
      relations: getRelations(fields, metaData),
      where: queryParams,
      take: size,
      skip: page * size,
    });
  }

  /**
   *
   * @param entity
   */
  async findOneByUid(param: any): Promise<T> {
    /**
     *
     */
    return await this.modelRepository.findOne({
      where: { uid: _.has(param, 'id') ? param.id : undefined },
    });
  }

  /**
   *
   * @param id
   */
  async findOneById(id: string): Promise<T> {
    return await this.modelRepository.findOne({ where: { id } });
  }

  /**
   *
   * @param name
   */
  async findOneByName(name: string): Promise<T[]> {
    return await this.modelRepository.find({ where: { name } });
  }

  /**
   *
   * @param name
   */
  async findByQueryParams(config: any[]): Promise<T[]> {
    /**
     *
     */
    if (config?.length > 0) {
      return await this.modelRepository.find({
        where: config,
      });
    }
  }

  async findByCustomQueryParams(
    config: LabResultQuery[],
    queryOption?: any,
  ): Promise<T[]> {
    /**
     *
     */
    if (config?.length > 0 && queryOption) {
      /**
       *
       */
      const queryResults = await this.modelRepository.find({
        where: [queryOption],
      });
      const conf: LabResultQuery = _.head(config);
      let results = [];
      if (queryResults && conf) {
        for (const queryResult of await _.clone(queryResults)) {
          if (
            _.has(queryResult, 'dataValues') &&
            queryResult?.dataValues.length > 0
          ) {
            for (const dataValue of await queryResult.dataValues) {
              if (
                _.has(dataValue, 'dataElement') &&
                _.has(dataValue, 'value')
              ) {
                if (
                  dataValue.dataElement === conf.dataElement &&
                  dataValue.value === conf.value
                ) {
                  results = [...results, queryResult];
                }
              } else {
                Logger.warn('Lab Results has no Data Element and Data Value');
              }
            }
          }
        }
        return await results;
      }
    }
  }

  /**
   *
   * @param data
   * @param modelTarget
   */
  saveEntity(data, modelTarget) {
    const model = new modelTarget();
    const metaData = this.modelRepository.manager.connection.getMetadata(
      this.Model,
    );
    const savedEntity = model.save();
    Object.keys(data).forEach((key) => {
      if (
        metaData.relations
          .map((item) => {
            return item.propertyName;
          })
          .indexOf(key) > -1
      ) {
        metaData.relations
          .filter((item) => {
            return item.propertyName === key;
          })
          .forEach((item) => {
            if (item.relationType === 'one-to-many') {
              data[key].forEach((child) => {
                savedEntity[key].push(this.saveEntity(child, item.target));
              });
            }
            // return {
            //   propertyName: item.propertyName,
            //   relationType: item.relationType,
            //   target: item.target,
            // }
          });
      } else {
        model[key] = data[key];
      }
    });
    return savedEntity;
  }

  /**
   *
   * @param entity
   */
  async create(payload: any): Promise<any> {
    /**
     *
     */
    const model = new this.Model();
    /**
     *
     */
    const mergedEntity = _.merge(model, payload);
    /**
     *
     */
    const entityModel = await UIDToIDTransformation(
      this.modelRepository,
      mergedEntity,
      Mapper,
    );
    /**
     *
     */
    const transformedEntity = _.merge(mergedEntity, entityModel);
    /**
     *
     */
    return await this.modelRepository.save(transformedEntity);
  }

  /**
   *
   * @param entity
   * @param updates
   */
  async update(entity: any, updates: any): Promise<UpdateResult> {
    /**
     *
     */
    if (entity && updates) {
      /**
       *
       */
      const resolvedEntityDTO: any = await ObjectPayloadUpdater(
        entity,
        updates,
      );
      /**
       *
       */
      const transformedEntity: any = await UIDToIDTransformation(
        this.modelRepository,
        resolvedEntityDTO,
        Mapper,
      );
      /**
       *
       */
      return await this.modelRepository.save(transformedEntity);
    }
  }

  /**
   *
   * @param id
   */
  async delete(id: string): Promise<DeleteResult> {
    /**
     *
     */
    const condition: any = { id };
    /**
     *
     */
    if (condition) {
      /**
       *
       */
      return this.modelRepository.delete(condition);
    }
  }

  /**
   *
   * @param uid
   * @param model
   */
  async updateByUid(uid: string, model: any): Promise<UpdateResult> {
    /**
     *
     */
    const condition: any = { uid };
    /**
     *
     */
    if (condition) {
      /**
       *
       */
      return await this.modelRepository.update(condition, model);
    }
  }
}
