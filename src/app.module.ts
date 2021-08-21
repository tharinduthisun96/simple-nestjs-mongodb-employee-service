import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { MONGO_CONNCETION } from './app.properties';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [EmployeesModule, MongooseModule.forRoot(MONGO_CONNCETION)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
