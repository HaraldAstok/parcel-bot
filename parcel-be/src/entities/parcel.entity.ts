import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Parcel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true})
  sku: string;

  @Column()
  description: string;

  @Column()
  street_address: string;

  @Column()
  town: string;

  @Column()
  country: string;

  @Column()
  delivery_date: string
}

@Entity()
export class Error {
  error: string;
}