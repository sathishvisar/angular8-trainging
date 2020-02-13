import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  transform(items: any, searchTerm:any): any {
    if (!searchTerm) return items;

    return items.filter(function(item) {

      if(item['name'].toString().toLowerCase().includes(searchTerm.toLowerCase())){
        return true;
      }

      if(item['email'].toString().toLowerCase().includes(searchTerm.toLowerCase())){
        return true;
      }

    });

 

    return null;
  }

}
