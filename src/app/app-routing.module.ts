import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RedditInfoComponent} from './reddit-info/reddit-info.component'
import { RedditDetailComponent } from './reddit-detail/reddit-detail.component';

const routes: Routes = [
  {
    path: "",
    component: RedditDetailComponent
  },
  {
    path: '**',
    component: RedditInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
