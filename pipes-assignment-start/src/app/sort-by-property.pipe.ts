import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByProperty',
  pure: false
})
export class SortByPropertyPipe implements PipeTransform {

  transform(value: any, property: string, sortOrder: boolean): any {
    if (!property || !value.length) {
      return value;
    }

    return value.sort((a, b) => {
      if (a[property] >= b[property]) {
        return sortOrder ? 0 : 1;
      } else {
        return sortOrder ? 1 : 0;
      }
    });
  }

}
