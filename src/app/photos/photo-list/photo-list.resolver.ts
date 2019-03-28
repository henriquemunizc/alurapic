import { Injectable } from '@angular/core';
import { PhotoService } from '../photo/photo.service';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Photo } from '../photo/photo';

@Injectable()
export class PhotoListResolver implements Resolve<Observable<Photo[]>> {

    constructor(
        private service: PhotoService
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> {
        const userName = route.params.userName;
        // return this.service.listFormUser(userName);
        return this.service.listFormUserPaginated(userName,1);
    }
}
