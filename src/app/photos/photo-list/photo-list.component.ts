import { PhotoService } from './../photo/photo.service';
import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo/photo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter = '';

  hasMore = true;
  cuurentPage = 1;
  userName = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
  ) { }

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.photos = this.activatedRoute.snapshot.data.photos;
    // this.photos = this.actevatedRoute.snapshot.data['photos'];

  }

  load() {
    this.photoService
      .listFormUserPaginated(this.userName, ++this.cuurentPage)
      .subscribe(photos => {
        this.photos = this.photos.concat(photos);
        if (!photos.length || photos.length < 12) {
          this.hasMore = false;
        }
      })
  }
}
