import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { EmployeeCreateDto } from "../dto/EmployeeCreate";
import { EmployeeUpdateDto } from "../dto/EmployeeUpdateDto";
import { Employee, EmployeeDocument } from "../schemas/employees.model";

@Injectable()
export class EmployeeRepository{
    constructor(@InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>){}

    async create(createEmployeeDto:EmployeeCreateDto): Promise<Employee>{
        let employee = new this.employeeModel(createEmployeeDto);
        return await employee.save();
    }

    async findAll(): Promise<Employee[]>{
        return await this.employeeModel.find();
    }
    async findById(id): Promise<Employee>{
        return await this.employeeModel.findById(id);
    }
    async update(employeeUpdateDto:EmployeeUpdateDto): Promise<Employee>{
        const {id,firstName,lastName,designation,nearestCity} = employeeUpdateDto;
        const employee = await this.employeeModel.findById(id);
        employee.firstName = firstName;
        employee.lastName = lastName;
        employee.designation = designation;
        employee.nearestCity = nearestCity;
        return await employee.save();
    }
}