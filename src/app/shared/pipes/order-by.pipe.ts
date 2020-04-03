import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {

  transform(sortArr: any[], field: string, desc: boolean = true): any[] {
    if (!sortArr || !field) {
      return sortArr;
    }

    if (desc) {
      sortArr.sort((a, b) => {
       return b[field] > a[field] ? 1 : -1;
      });
    } else {
      sortArr.sort((a, b) => {
        return a[field] > b[field] ? 1 : -1;
      });
    }

    console.log('sort by ' + field);

    return sortArr;
  }

}
