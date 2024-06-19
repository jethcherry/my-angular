import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../Models/Product';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(value: Product[], searchItem:string):Product[] {
    if(searchItem.trim() === ''){
      return value
    }
    let filterArray = []
    for (let product of value)
      {
        if(product.Name.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase()) || 
        product.Description .toLocaleLowerCase().includes(searchItem.toLocaleLowerCase())){
          filterArray.push(product)
        }
      }
      return filterArray

  }

}
