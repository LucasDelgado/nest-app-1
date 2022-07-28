import { MongooseModule } from '@nestjs/mongoose';
import { Global, Module } from '@nestjs/common';

@Global()
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => {
        const {
          MONGO_INITDB_ROOT_USERNAME,
          MONGO_INITDB_ROOT_PASSWORD,
          MONGO_DB,
          MONGO_PORT,
          MONGO_HOST,
          MONGO_CONNECTION,
        } = process.env;
        return {
          uri: `${MONGO_CONNECTION}://${MONGO_HOST}:${MONGO_PORT}`,
          user: MONGO_INITDB_ROOT_USERNAME,
          pass: MONGO_INITDB_ROOT_PASSWORD,
          dbName: MONGO_DB,
        };
      },
    }),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}
