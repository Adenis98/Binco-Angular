import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users = [];
  constructor() { }
  inscription(user:any)
  {
    this.users.push(user);
  }
  connecter(user:any)
  {
    let exist :boolean=false ; 
    for(let i = 0 ; i<this.users.length ; i++)
      if(this.users[i].email == user.email && this.users[i].mdp == user.mdp)
        exist = true ; 
    if(exist)
    {
      localStorage.setItem("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJub20iOiJyYW1leiIsInByZW5vbSI6Inpvcm1hdGkiLCJhZG1pbiI6dHJ1ZX0.x6xw6ByKM54QXZl6HRAeozYyXTvGU3yp9L4PRwTwbu0");
      return true ; 
    }else
      return false ; 
  }
  isLoggedIn()
  {

  }
}
