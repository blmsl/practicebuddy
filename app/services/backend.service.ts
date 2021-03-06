import { Injectable } from "@angular/core";
import { getString, setString } from "application-settings";

const tokenKey = "token";

export class BackendService {

  static isLoggedIn(): boolean {
    return !!getString("token");
  }

  static get token(): string {
    return getString("token");
  }

  static set token(theToken: string) {
    setString("token", theToken);
  }

  static get email(): string {
    return getString("email");
  }

  static set email(theEmail: string) {
    setString("email", theEmail);
  }


  static invalidateToken() {
    BackendService.token = "";
    BackendService.email = "";
  }

}
