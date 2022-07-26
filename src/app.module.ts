import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { environment } from './enviroments';

@Module({
  imports: [
    UsersModule,
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: environment[process.env.NODE_ENV] || '.env',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
