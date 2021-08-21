import { Injectable } from '@nestjs/common';
import { EmployeeCreateDto } from './dto/EmployeeCreate';
import { EmployeeUpdateDto } from './dto/EmployeeUpdateDto';
import { Employee } from './employees.model';
import { EmployeeStatus } from './enum/employee.enum';
import {v1 as uuid} from 'uuid';

@Injectable()
export class EmployeesService {

    private employees:Employee[] = [];

    getAllEmployees(){
        return this.employees;
    }

    createEmployee(employeeCreateDto: EmployeeCreateDto){
        //distraction feature 
        const {firstName,lastName,designation,nearestCity,tier} = employeeCreateDto;
        const employee = {
            id:uuid(),
            firstName,
            lastName,
            designation,
            nearestCity,
            tier,
            status: EmployeeStatus.ACTIVE
        }
        this.employees.push(employee);
        return employee;
    }

    getEmployeeById(id: string): Employee{
        return this.employees.find(e => e.id === id);
    }

    updateEmployee(employeeUpdateDto:EmployeeUpdateDto) : Employee{
        const {id,firstName,lastName,designation,nearestCity} = employeeUpdateDto;
        const employee = this.employees.find(e => e.id === id);
        employee.firstName = firstName;
        employee.lastName = lastName;
        employee.designation = designation;
        employee.nearestCity = nearestCity;
        
        return employee;



    }


}
