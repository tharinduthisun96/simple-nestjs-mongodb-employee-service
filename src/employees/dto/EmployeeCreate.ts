import { IsNotEmpty } from 'class-validator';
import { EmployeeTier } from '../employees.model';

export class EmployeeCreateDto{
    @IsNotEmpty()
    firstName: string

    @IsNotEmpty()
    lastName: string

    @IsNotEmpty()
    designation: string

    @IsNotEmpty()
    nearestCity: string

    @IsNotEmpty()
    tier: EmployeeTier
}