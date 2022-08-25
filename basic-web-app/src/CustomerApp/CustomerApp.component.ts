import { Component } from '@angular/core';
import { Customer } from './CustomerApp.model';


@Component({
  selector: 'customer-details',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Customer Application';
  CustomerModel:Customer = new Customer();
  CustomerModels:Array<Customer> = new Array<Customer>();
  Add(){
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel=new Customer();
  }
}
