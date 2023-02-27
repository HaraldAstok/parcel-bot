import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Parcel } from './entities/parcel.entity';
import { ParcelService } from './parcel/parcel.service';
import { ParcelController } from './parcel/parcel.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Parcel]),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   // url: process.env.DATABASE_URL,
    //   // autoLoadEntities: true,
    //   username: 'root',
    //   password: 'YOUR_DATABASE_PASSWORD',
    //   synchronize: true
    // }),
  ],
  controllers: [AppController, ParcelController],
  providers: [AppService, ParcelService],
})
export class AppModule {}
