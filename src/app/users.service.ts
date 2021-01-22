import { Injectable } from '@angular/core';

export interface User {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  password: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users: User[] = [
    {id: 1, nom: 'NIANG', prenom: "Papa Djiby", email: 'padjiby@gmail.com', password: 'password', role: 'ADMIN'},
    {id: 2, nom: 'TALL', prenom: "Aly", email: 'alyniangtall@gmail.com', password: 'password', role: 'CLIENT'}
  ]

  constructor() { }

  findUserById(id: number): User {
    const user: any = this.users.find(
      (u:User) => {
        return u.id == id;
      }
    );
    return user;
  }

  getUserByEmailAndPassword(email: string, password: string): User {
    const user: any = this.users.find(
      (u:User) => {
        return u.email === email && u.password === password;
      }
    );
    return user;
  }
}
