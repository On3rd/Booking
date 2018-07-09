import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Property} from '../../app/classes/property';

@Injectable()
export class PropertyService {

  private baseUrl : string = 'http://localhost:8080/api';
  private header = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.header});
  private property = new Property();

  constructor(private _http:Http) {

   }

   getProperties()
   {
     return this._http.get(this.baseUrl+'/property',this.options).map((response:Response)=>response.json())
     .catch(this.errorHandler);
   }

   getProperty(id:number)
   {
     return this._http.get(this.baseUrl+'/property/'+id,this.options).map((response:Response)=>response.json())
     .catch(this.errorHandler);
   }

   deleteProperty(id:number)
   {
     return this._http.delete(this.baseUrl+'/property/'+id,this.options).map((response:Response)=>response.json())
     .catch(this.errorHandler);
   }
   createProperty(property:Property)
   {
     return this._http.post(this.baseUrl+'/property',JSON.stringify(property),this.options).map((response:Response)=>response.json())
     .catch(this.errorHandler);
   }
   updateProperty(property:Property)
   {
     return this._http.put(this.baseUrl+'/property',JSON.stringify(property),this.options).map((response:Response)=>response.json())
     .catch(this.errorHandler);
   }


   errorHandler(error:Response)
   {
    return Observable.throw(error||"SERVER ERROR");
   }

   setter(property:Property)
   {
    this.property=property;
   }
   getter()
   {
     return this.property;
   }
}
