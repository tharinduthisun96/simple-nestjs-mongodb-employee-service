import { Injectable } from '@nestjs/common';
import { EmployeeCreateDto } from './dto/EmployeeCreate';
import { EmployeeUpdateDto } from './dto/EmployeeUpdateDto';
import { Employee } from './schemas/employees.model';
import { EmployeeStatus } from './enum/employee.enum';
import { EmployeeRepository } from './repository/Employee.repository';

@Injectable()
export class EmployeesService {

    private employees:Employee[] = [];

    constructor(private employeeRepository: EmployeeRepository){}

    async getAllEmployees(): Promise<Employee[]>{
        return await this.employeeRepository.findAll();
    }

    async createEmployee(employeeCreateDto: EmployeeCreateDto): Promise<Employee>{
        //distraction feature 
        const {firstName,lastName,designation,nearestCity,tier} = employeeCreateDto;
        const employee = {
            firstName,
            lastName,
            designation,
            nearestCity,
            tier,
            status: EmployeeStatus.ACTIVE
        }
        
        return await this.employeeRepository.create(employee);
    }

    async getEmployeeById(id: string): Promise<Employee>{
        return await this.employeeRepository.findById(id);
    }

    async updateEmployee(employeeUpdateDto:EmployeeUpdateDto) : Promise<Employee>{
        return await this.employeeRepository.update(employeeUpdateDto);
    }


}
