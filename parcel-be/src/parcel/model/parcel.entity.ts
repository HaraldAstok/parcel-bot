import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ParcelEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column({ unique: true })
  sku: string;

  @Column()
  description: string;

  @Column()
  street_address: string;

  @Column()
  town: string;

  @Column()
  country: string;

  @BeforeInsert()
  descriptionToLowerCase() {
    this.description = this.description.toLowerCase();
  }
}
