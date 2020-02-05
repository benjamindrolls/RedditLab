import { Component, OnInit, Input } from '@angular/core';
import { SubRedditService } from '../sub-reddit.service'
import { IReddit } from '../reddit';

@Component({
  selector: 'app-reddit-info',
  templateUrl: './reddit-info.component.html',
  styleUrls: ['./reddit-info.component.css']
})
export class RedditInfoComponent implements OnInit, IReddit {

  constructor(private _service : SubRedditService) { }

  reddits : [];
  @Input() title : string;
  @Input() thumbnail: any;
  @Input() link: any;

  ngOnInit() {
    this._service.getSubReddits().subscribe((data : any) => this.reddits = data.data.children)

  }

  logReddits() {
    console.log(this.reddits);
  
  }
}
