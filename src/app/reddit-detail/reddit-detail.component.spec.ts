import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditDetailComponent } from './reddit-detail.component';

describe('RedditDetailComponent', () => {
  let component: RedditDetailComponent;
  let fixture: ComponentFixture<RedditDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedditDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
