export interface Employee{
    firstName: string
    lastName: string
    designation: string
    nearestCity: string
    tire: EmployeeTier
    status: EmployeeStatus
}


export enum  EmployeeTier{
    TIER_ONE = 'TIER_ONE',
    TIER_TWO = 'TIER_TWO', 
    TIER_THREE = 'TIER_THREE'  
}

export enum EmployeeStatus {
    ACTIVE = 'ACTIVE',
    SUSPENDED = 'SUSPENDED',
    RESIGNED = 'RESIGNED'
}