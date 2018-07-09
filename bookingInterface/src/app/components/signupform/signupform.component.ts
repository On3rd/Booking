import { Component, OnInit } from '@angular/core';
import { UserService} from '../../services/user.service';
import {Router} from '@angular/router'; 
import {User} from '../../classes/user';
import {Navigate} from '../../classes/navigate';
import {JwtuserDetails} from '../../classes/jwtuser-details';
import {LoginService} from '../../services/login.service';
import {LocalStorageService,SessionStorageService} from 'ngx-webstorage';
import { forEach } from '@angular/router/src/utils/collection';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent implements OnInit {
 signUpform;
  private user:User;
  private users:User[];
  formType:string; 
  private reg:Boolean;

  private _navigate = new Navigate()
  constructor(private _userService:UserService, private _router:Router,private _login:LoginService,private _localStorage:LocalStorageService) {

   }

  ngOnInit() {
    this.user = this._userService.getter();
    this._userService.getUsers().subscribe((user)=>{console.log(user);
      this.users = user;
    })
    
  }

  processForm(name:string,surname:string,email:string,phonenumber:string,pword:string)
  {
    var counters=0;
    var counter=0;
    var id = 0;
    var rag = true;

    if(this.user != null){
      this.users.forEach(function(value){
      if(value.email == email)
        {
         
       
          counters++;
          
      }
      });
    }

    if(name== null||surname== null||email== null||phonenumber== null||pword == null )
    {
      alert("Enter values");
    }else{
    if(counters>=1)
  { 
    
    // console.log("Enter Values");
     //this.formType = "modal"; 
    // console.log(rag);
     alert("This Email Already Exists, Please Enter A New Email");
   } else{
    
    if(this.user.user_Id == undefined )
    {
      this._userService.createUser(this.user).subscribe((user)=>
      {
        id = user.user_Id;
        console.log(id);
        counter++;
        console.log(counter);
        
        alert("Registration Successfull");
        
        if(counter>=1)
    {
       this._login.setLogin(id,name,surname,email,phonenumber);
       this._router.navigate(['/home']);
       counter =0;
      console.log(counter);
    }
      }
      
      ,
      (error)=>
      {
          console.log(error);
      }
      
      );
    
     return false;
    }
    else
    {
      this._userService.updateUser(this.user).subscribe((user)=>
      {
        console.log(user);
        //this._router.navigate(['/home']);
      },
      (error)=>
      {
          console.log(error);
      }
      
      );
    }
  }

} 
  }
  

}



