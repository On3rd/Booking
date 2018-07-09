import { Component, OnInit } from '@angular/core';
import { UserPaymentMethod } from '../../classes/user-payment-method';
import { UserPaymentMethodService } from '../../services/user-payment-method.service';

@Component({
  selector: 'app-user-payment-method',
  templateUrl: './user-payment-method.component.html',
  styleUrls: ['./user-payment-method.component.css']
})
export class UserPaymentMethodComponent implements OnInit {

  private userPaymentMethod:UserPaymentMethod;

  constructor(private _userPaymentMethodService:UserPaymentMethodService) { 

  }

  ngOnInit() {
    this.userPaymentMethod = this._userPaymentMethodService.getter();
    
  }

}
