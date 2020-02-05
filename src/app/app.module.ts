import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RedditInfoComponent } from './reddit-info/reddit-info.component';
import { RedditDetailComponent } from './reddit-detail/reddit-detail.component';
import { RedditDetailBlockComponent } from './reddit-detail-block/reddit-detail-block.component';

@NgModule({
  declarations: [
    AppComponent,
    RedditInfoComponent,
    RedditDetailComponent,
    RedditDetailBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
