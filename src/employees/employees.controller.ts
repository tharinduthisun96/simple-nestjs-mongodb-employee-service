import { Body, Controller, Get, NotFoundException, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { Employee } from './employees.model';
import { EmployeesService } from './employees.service';
import { EmployeeCreateDto } from './dto/EmployeeCreate';
import { EmployeeUpdateDto } from './dto/EmployeeUpdateDto'
import { EmployeeTireValidationPipe } from 'src/employees/validation/employee-tire-validation.pipe';

@Controller('employees')
export class EmployeesController {

    constructor(private employeeService:EmployeesService){}

    @Get()
    getAllEmployees(){
        return this.employeeService.getAllEmployees();
    }

    @Post()
    @UsePipes(ValidationPipe)
    @UsePipes(new EmployeeTireValidationPipe)
    createEmployee(@Body() employeeCreateDto:EmployeeCreateDto): Employee{
        return this.employeeService.createEmployee(employeeCreateDto);
    }

    @Get('/:id')
    getEmployeeById(@Param('id') id: string){
        const employee = this.employeeService.getEmployeeById(id);
        if(!employee){
            throw new NotFoundException(`${id} is not exist`);
        }
        return employee;
    }

    @Put()
    updateEmployee(@Body() employeeUpdateDto:EmployeeUpdateDto): Employee{
        return this.employeeService.updateEmployee(employeeUpdateDto);
    }
}
