import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Employee } from './employees.model';
import { EmployeesService } from './employees.service';
import { EmployeeCreateDto } from './dto/EmployeeCreate';
import { EmployeeUpdateDto } from './dto/EmployeeUpdateDto'

@Controller('employees')
export class EmployeesController {

    constructor(private employeeService:EmployeesService){}

    @Get()
    getAllEmployees(){
        return this.employeeService.getAllEmployees();
    }

    @Post()
    createEmployee(@Body() employeeCreateDto:EmployeeCreateDto): Employee{
        return this.employeeService.createEmployee(employeeCreateDto);
    }

    @Get('/:id')
    getEmployeeById(@Param('id') id: string){
        return this.employeeService.getEmployeeById(id);
    }

    @Put()
    updateEmployee(@Body() employeeUpdateDto:EmployeeUpdateDto): Employee{
        return this.employeeService.updateEmployee(employeeUpdateDto);
    }
}
