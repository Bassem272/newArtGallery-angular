import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { UserModule } from './user/user.module';
import { ReactiveFormsModule } from '@angular/forms';
// import { MatCarouselModule } from '@nomodule/material-carousel'; // Import
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UserModule,
    SharedModule,
    AuthenticationModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // MatCarouselModule.forRoot(),NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  // constructor(
  //   private matIconRegistry: MatIconRegistry,
  //   private domSanitizer: DomSanitizer
  // ) {}
}
