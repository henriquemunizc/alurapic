import { HeaderComponent } from './core/header/header.component';
import { ErrorsModule } from './errors/errors.module';
import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { PhotosModule } from './photos/photos.module';
import { HomeModule } from './home/home.module';
import { AuthService } from './core/auth/auth.service';
import { PlataformDetectorService } from './core/auth/plataform-detector/plataform-detector-service';
import { TokenService } from './core/token/token.service';
import { CoreModule } from './core/core.module';
import { UserServiceService } from './core/user/user.service';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    PhotosModule,
    AppRoutingModule,
    ErrorsModule,
    CoreModule,
    HomeModule
  ],
  providers: [
    AuthService,
    PlataformDetectorService,
    TokenService,
    UserServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
