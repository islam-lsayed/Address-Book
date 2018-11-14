import { address } from './address.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(address: address[], searchText: string): address[] {
    //check if search term is undefined

    if(!address || !searchText) {
      return address ;

    }
    
    
    
    return address.filter( address => address.phone && address.phone.toString().indexOf(searchText.toLowerCase())  !== -1 || address.name && address.name.toString().indexOf(searchText.toLowerCase())  !== -1 )
  

  } 

}



