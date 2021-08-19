import { EmployeeStatus, EmployeeTier } from '../employees.model';

export class EmployeeUpdateDto{
    id: string
    firstName: string
    lastName: string
    designation: string
    nearestCity: string
}