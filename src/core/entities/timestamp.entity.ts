import { BeforeInsert, CreateDateColumn, UpdateDateColumn, BeforeUpdate } from 'typeorm';

import { DIMMediatorBaseEntity } from './base-entity';

export class TransactionTimestamp extends DIMMediatorBaseEntity {
  @CreateDateColumn({ type: 'timestamp', default: () => 'LOCALTIMESTAMP' })
  created: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    name: 'lastupdated',
    default: () => 'LOCALTIMESTAMP',
  })
  lastUpdated: Date;

  @BeforeInsert()
  beforeInsertTransaction() {
    this.created = new Date();
    this.lastUpdated = new Date();
  }

  @BeforeUpdate()
  beforeUpdateTransaction() {
    this.lastUpdated = new Date();
  }
}
