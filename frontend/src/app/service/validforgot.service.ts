import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ValidforgotService {
  private url  = environment.urldf+'/validjwt';
  constructor(private http:HttpClient) { }
  valid(jwt:string):Observable<any>{
    return this.http.get(`${this.url}/${jwt}`)
  }
}
