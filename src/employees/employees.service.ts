import { Injectable } from '@nestjs/common';
import { EmployeeCreateDto } from './dto/EmployeeCreate'
import { Employee, EmployeeStatus, EmployeeTier } from './employees.model';
import {v1 as uuid} from 'uuid';

@Injectable()
export class EmployeesService {

    private employees:Employee[] = [];

    getAllEmployees(){
        return this.employees;
    }

    createEmployee(employeeCreateDto: EmployeeCreateDto){
        //distraction feature 
        const {firstName,lastName,designation,nearestCity,tire} = employeeCreateDto;
        const employee = {
            id:uuid(),
            firstName,
            lastName,
            designation,
            nearestCity,
            tire,
            status: EmployeeStatus.ACTIVE
        }
        this.employees.push(employee);
        return employee;
    }


}
