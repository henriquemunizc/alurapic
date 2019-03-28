import { Photo } from './photo';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

const API = 'http://localhost:3000/';
@Injectable()
export class PhotoService {

    constructor(private http: HttpClient) {
    }

    listFormUser(userName: string) {

        return this.http
            .get<Photo[]>(API + userName + '/photos');

    }

    listFormUserPaginated(userName: string, pagina: number) {
        const params = new HttpParams()
            .append('page', pagina.toString());
        return this.http
            .get<Photo[]>(API + userName + '/photos', {params});

    }
}