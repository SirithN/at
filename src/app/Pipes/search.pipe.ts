import { Pipe, PipeTransform } from '@angular/core';
import { Airline } from '../Models/airline';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(inputData: Airline[], args: string): Airline[] {

    if (args == "")

      return inputData;

    else

      return inputData.filter((a) => a.name.includes(args));


  }

}
