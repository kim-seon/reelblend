import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { FooResolver } from './app.resolver';
import { AppService } from './app.service';
import { PetsModule } from './pets/pets/pets.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'ks8151504',
      database: 'reelblend',
      synchronize: true,
      autoLoadEntities: true,
      entities: [],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      path: '__graphql',
      playground: true,
      autoSchemaFile: true,
    }),
    PetsModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
