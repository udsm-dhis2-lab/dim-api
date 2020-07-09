import { BeforeInsert, Column, PrimaryGeneratedColumn } from 'typeorm';
import { uuid } from '@icodebible/utils/uuid'
import { TransactionTimestamp } from './timestamp.entity';

export class EntityCoreProps extends TransactionTimestamp {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 256 })
  uid: string;

  @BeforeInsert()
  beforeInsertEntityCoreProps() {
    /**
     *  You can generate UUID in different ways
     *  1. You can generate uuid of any length: i.e uuid('', 20)
     *      Example of UUID::: 8aydSxYBrrP
     *  2. You can generat UUID by prepending a context specific keyword i.e uuid('DIMMediator', 20)
     *      Example of UUID::: DIMMediator_8aydSxYBrrP
     */
    this.uid = this.uid  || uuid('', 11);
  }
}
