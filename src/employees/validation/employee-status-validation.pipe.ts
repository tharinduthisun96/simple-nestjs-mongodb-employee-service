import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { EmployeeStatus } from '../enum/employee.enum';

@Injectable()
export class EmployeeStatusValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if(!(value.status in EmployeeStatus)){
      throw new BadRequestException(`${value.status} is not a valid tier`);
    }
    return value;

  }
}
