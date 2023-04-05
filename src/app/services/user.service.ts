import { Injectable } from '@angular/core';
import { User } from '../models/user';
const dataJson = require('../../resources/users.json');

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUsers(): User[] {
    const users: User[] = dataJson;
    return users;
  }
}
