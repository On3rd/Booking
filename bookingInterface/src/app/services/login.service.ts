import { Injectable } from '@angular/core';
import {Navigate} from '../../app/classes/navigate';
import {Router} from '@angular/router';

@Injectable()
export class LoginService {

 
  private _navigate=new Navigate();
  //private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');
  private username:any = null;
  private username_id:number = null;
  private admin:any;
  private admin_id:any;
 
  constructor(private _login:Router) { }

  setLogin(user_id:number,uname:string,usurname:string,uemail:string,phoneNo:string)
  {
   
 //   this.loggedInStatus = login;
   localStorage.setItem('currentUser',JSON.stringify({id:user_id,name:uname,surname:usurname,email:uemail,phonenumber:phoneNo,status:true}));
  }
  logOut()
  {
    this._navigate.setLoggedUserButton(false);
    localStorage.setItem('currentUser',JSON.stringify({status:false}));
    localStorage.setItem('Admin',JSON.stringify({status:false}));
   localStorage.removeItem('propertyID');
    this._login.navigate(['/']);
  }
  setAdmin(admin_id:number,uname:string,usurname:string,uemail:string,phoneNo:string,stuffNo:string)
  {
   
    localStorage.setItem('Admin',JSON.stringify({status:true}));
    localStorage.setItem('currentUser',JSON.stringify({id:admin_id,name:uname,surname:usurname,email:uemail,phonenumber:phoneNo,stuff_no:stuffNo,status:true}));
  
  }
  
  getAdmin()
  {
    var admin= JSON.parse(localStorage.getItem('Admin'))
    if(admin == null)
    {
      return null;
    }
    else{
     this._navigate.setLoggedUserButton(admin.status);
    return this.admin = admin.status;
  // return this._navigate.loggedUserButton;
    }
  }
  getAdminID()
  {
    var admin= JSON.parse(localStorage.getItem('Admin'))
    if(admin == null)
    {
      return null;
    }
    else{
    return this.admin_id = admin.id;
  // return this._navigate.loggedUserButton;
    }
  }
  getLoggin()
  {
     //return JSON.parse(localStorage.getItem('currentUser'));
    
    return this._navigate.loggedUserButton;
  }
  getLoggedInUser()
  {
     var username= JSON.parse(localStorage.getItem('currentUser'))
     if(username == null)
     {
       return null;
     }
     else{
      this._navigate.setLoggedUserButton(username.status);
     return this.username = username.name;
   // return this._navigate.loggedUserButton;
     }
  }
  getLoggedInUserID()
  {
     var username= JSON.parse(localStorage.getItem('currentUser'))
     if(username == null)
     {
       return null;
     }
     else{
     return this.username_id = username.id;
   // return this._navigate.loggedUserButton;
     }
  }
}
