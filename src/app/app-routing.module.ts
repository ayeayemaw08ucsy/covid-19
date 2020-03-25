import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackComponent } from './track/track.component';


const routes: Routes = [
  {path:'', redirectTo: '/track', pathMatch: 'full'},
  { path: 'track', component: TrackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
