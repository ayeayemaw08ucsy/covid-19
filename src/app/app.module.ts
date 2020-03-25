import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TrackComponent } from './track/track.component';
import { LayoutComponent } from './layout/layout.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TrackComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyBynvPBrc_MTmayQullEFbWlLr18IcIhiw'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
