import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-add-property-navigation',
  templateUrl: './add-property-navigation.component.html',
  styleUrls: ['./add-property-navigation.component.css']
})
export class AddPropertyNavigationComponent implements OnInit {

  private username :string;
  private UID;
  constructor(private _login:LoginService,private _router:Router) { }

  ngOnInit() {
    this.UID = this._login.getAdmin()
    this.username = this._login.getLoggedInUser();
    localStorage.removeItem('propertyID');
    
  }
  home()
  {
    this._router.navigate(['home']);
  }

}
