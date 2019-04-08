import { Injectable } from '@angular/core';

const tokenName = 'authToken';
@Injectable()
export class TokenService {

    hasToken() {
        return !!this.getToken();
    }
    setToken(token) {
        window.localStorage.setItem(tokenName, token);
    }
    getToken() {
        return window.localStorage.getItem(tokenName);
    }
    removeToken() {
        window.localStorage.removeItem(tokenName);
    }
}