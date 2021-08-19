import { EmployeeTier } from '../employees.model';

export interface EmployeeCreateDto{
    firstName: string
    lastName: string
    designation: string
    nearestCity: string
    tire: EmployeeTier
}