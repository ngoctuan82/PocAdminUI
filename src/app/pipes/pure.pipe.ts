import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pure',
  standalone: true
})
/**
 * Using a pure pipe can be beneficial for performance optimization. 
 * Pure pipes are only re-evaluated when their input values change.
 * It's a good practice to use pure pipes for data transformations in Angular applications 
 * to enhance performance and maintain clean, efficient code.
 */
export class PurePipe implements PipeTransform {
  transform(value: any): any {
    // Implement your pure pipe logic here
    return value;
  }
}