import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditDetailBlockComponent } from './reddit-detail-block.component';

describe('RedditDetailBlockComponent', () => {
  let component: RedditDetailBlockComponent;
  let fixture: ComponentFixture<RedditDetailBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedditDetailBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditDetailBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
