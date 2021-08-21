import { Body, Controller, Get, NotFoundException, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { Employee } from './schemas/employees.model';
import { EmployeesService } from './employees.service';
import { EmployeeCreateDto } from './dto/EmployeeCreate';
import { EmployeeUpdateDto } from './dto/EmployeeUpdateDto'
import { EmployeeTireValidationPipe } from 'src/employees/validation/employee-tire-validation.pipe';

@Controller('employees')
export class EmployeesController {

    constructor(private employeeService:EmployeesService){}

    @Get()
    async getAllEmployees(){
        return await this.employeeService.getAllEmployees();
    }

    @Post()
    @UsePipes(ValidationPipe)
    @UsePipes(new EmployeeTireValidationPipe)
    async createEmployee(@Body() employeeCreateDto:EmployeeCreateDto): Promise<Employee>{
        return await this.employeeService.createEmployee(employeeCreateDto);
    }

    @Get('/:id')
    async getEmployeeById(@Param('id') id: string): Promise<Employee>{
        try {
            const employee = await this.employeeService.getEmployeeById(id);
            return await employee;
        }catch(e){
            throw new NotFoundException(`${id} is not exist`);
        }
    }

    @Put()
    async updateEmployee(@Body() employeeUpdateDto:EmployeeUpdateDto): Promise<Employee>{
        return await this.employeeService.updateEmployee(employeeUpdateDto);
    }
}
