import { TokenService } from './../token/token.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UserServiceService {

    constructor(private tokenService: TokenService) {
    }

    setToken(token: string) {
        this.tokenService.setToken(token);
    }
}
