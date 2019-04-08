import { PhotoListResolver } from './photo-list/photo-list.resolver';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PhotoService } from './photo/photo.service';
import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';

@NgModule({
    declarations: [],
    imports: [
        HttpClientModule,
        PhotoModule,
        PhotoFormModule,
        PhotoListModule,
        CommonModule
    ],
    exports: [

    ],
    providers: [
        PhotoService,
        PhotoListResolver
    ],
})
export class PhotosModule { }