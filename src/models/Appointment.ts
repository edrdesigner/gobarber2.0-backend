import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinColumn,
} from 'typeorm';

import User from './User';

/**
 * Um para um (OneToOne)
 * Um para muitos (OneToMany)
 * Muitos pra Muitos (ManyToMany)
 */

@Entity('appointments')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  provider_id: string;

  @ManyToMany(() => User)
  @JoinColumn({ name: 'provider_id' })
  provider: User;

  @Column('timestamp with time zone')
  date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Appointment;
