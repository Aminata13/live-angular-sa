import { Injectable } from '@angular/core';
import { User, UsersService } from './users.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn: boolean = false;
  connectedUser!: User | null;

  constructor(private usersService: UsersService) {
  }

  isAuthenticated() {
    const promise  = new Promise(
      (resolve, reject) => {
        setTimeout( () => {
          resolve(this.loggedIn);
        },1000)
      }
    );
    return promise;
  }

  login(email: string, password: string) {
    this.connectedUser = this.usersService.getUserByEmailAndPassword(email, password);
    this.loggedIn = this.connectedUser?true:false;
  }

  logout() {
    this.loggedIn = false;
    this.connectedUser = null;
  }
}
