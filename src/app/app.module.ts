import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { VideoComponent } from './components/video/video.component';
import { EditieComponent } from './components/editie/editie.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    EditieComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
