import { address } from './../../address.model';
import { Component, OnInit, Pipe } from '@angular/core';





@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.css'],
  

})
export class AddressBookComponent implements OnInit {
  name: string ;
  phone: number ;
  email: string ;
  nickname: string ;
  gender : string ;
  searchText :string;

  private   address: address[] = [
    { name: 'Islam elsayed', 
      phone: 0, 
      email: "islam@outlook.com",
      nickname: "islam",
      gender: 'male' },
    
  ];

 

  constructor() { 
    //Retrive stored data
    this.address = JSON.parse(localStorage.getItem("quentinTarantino"));
  }

  //Get Element from array
  getAddressbook() {  
    return this.address;
  }

  

  ngOnInit() {}


  // Add new Address
   addAddressbook({value,valid}:{value:address,valid:boolean}){
       this.address.push(value);
       //set item local storage
       localStorage.setItem("quentinTarantino", JSON.stringify(this.address));

      
  }

 

  //remove item 
  onDelete(index) {
    this.address.splice(index, 1);
    // remove item from local storage
    localStorage.setItem('quentinTarantino', JSON.stringify(this.address));
  }
}



