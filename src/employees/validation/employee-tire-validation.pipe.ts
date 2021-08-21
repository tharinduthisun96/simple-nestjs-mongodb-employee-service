import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { EmployeeTier } from '../enum/employee.enum';

@Injectable()
export class EmployeeTireValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if(!(value.tier in EmployeeTier)){
      throw new BadRequestException(`${value.tier} is not a valid tier`);
    }
    return value;
  }
}
