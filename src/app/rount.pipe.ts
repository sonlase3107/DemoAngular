import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'roundNum' })
export class RoundPipe implements PipeTransform {
  transform(value: number, isUper: boolean): number {
    if (isUper) {
      return Math.ceil(value);
    }
    return Math.floor(value);
  }
}
