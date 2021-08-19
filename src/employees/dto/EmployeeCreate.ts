import { EmployeeTier } from '../employees.model';

export class EmployeeCreateDto{
    firstName: string
    lastName: string
    designation: string
    nearestCity: string
    tire: EmployeeTier
}