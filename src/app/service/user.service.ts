import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  public user: any; 

  setUser(user: any) {
    this.user = user;
  }
}
