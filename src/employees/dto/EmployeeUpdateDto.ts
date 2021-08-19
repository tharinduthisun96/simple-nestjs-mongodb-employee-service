import { EmployeeStatus, EmployeeTier } from '../employees.model';

export interface EmployeeUpdateDto{
    id: string
    firstName: string
    lastName: string
    designation: string
    nearestCity: string
}