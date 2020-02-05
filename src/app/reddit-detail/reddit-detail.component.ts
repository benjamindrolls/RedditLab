import { Component, OnInit, Input } from '@angular/core';
import {SubRedditService} from '../sub-reddit.service'

@Component({
  selector: 'app-reddit-detail',
  templateUrl: './reddit-detail.component.html',
  styleUrls: ['./reddit-detail.component.css']
})
export class RedditDetailComponent implements OnInit {
  @Input() reddit: any;

  constructor(private _service : SubRedditService) { }

  ngOnInit() {
  }


}
