import { Body, Controller, Get, Post } from '@nestjs/common';
import { Employee } from './employees.model';
import { EmployeesService } from './employees.service';
import { EmployeeCreateDto } from './dto/EmployeeCreate';

@Controller('employees')
export class EmployeesController {

    constructor(private employeeService:EmployeesService){}

    @Get()
    getAllEmployees(){
        return this.employeeService.getAllEmployees();
    }

    @Post()
    createEmployee(@Body() employeeCreateDto:EmployeeCreateDto): Employee{
        console.log(employeeCreateDto);
        return this.employeeService.createEmployee(employeeCreateDto);
    }
}
