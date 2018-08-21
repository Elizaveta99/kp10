import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/User';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  /*getAll() {
    return this.http.get<User[]>('/home/users');
  }

  getById(id: number) {
    return this.http.get('/home/users/' + id);
  }*/

  getTest(s: String) {
    return this.http.get('http://localhost:8080/home/users');
}

  create(user: User) {
    console.log('POST');
    return this.http.post('http://localhost:8080/home/users', JSON.stringify(user), httpOptions);
  }

  /*update(user: User) {
    return this.http.put('/home/users/' + user.id, user);
  }

  delete(id: number) {
    return this.http.delete('/home/users/' + id);
  }*/
}
