import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditInfoComponent } from './reddit-info.component';

describe('RedditInfoComponent', () => {
  let component: RedditInfoComponent;
  let fixture: ComponentFixture<RedditInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedditInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
