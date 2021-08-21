import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
import { EmployeeRepository } from './repository/Employee.repository';
import { Employee, EmployeeSchema } from './schemas/employees.model';

@Module({
  imports: [MongooseModule.forFeature([{name:Employee.name, schema:EmployeeSchema}])],
  controllers: [EmployeesController],
  providers: [EmployeesService, EmployeeRepository]
})
export class EmployeesModule {}
