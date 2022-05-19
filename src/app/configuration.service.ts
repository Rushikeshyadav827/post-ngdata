import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor(private myhttp: HttpClient) {



  }

  createUser(userConfig) {
    let myObec = {
      "name": userConfig.username,
      "job": userConfig.password
    };

    return this.myhttp.post('https://reqres.in/api/users', myObec)
  }
}
