import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reddit-detail-block',
  templateUrl: './reddit-detail-block.component.html',
  styleUrls: ['./reddit-detail-block.component.css']
})
export class RedditDetailBlockComponent implements OnInit {

  @Input() reddits: [];
  constructor() { }

  ngOnInit() {
  }

}
