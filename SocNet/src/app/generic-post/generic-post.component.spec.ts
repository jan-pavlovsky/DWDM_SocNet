import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericPostComponent } from './generic-post.component';

describe('GenericPostComponent', () => {
  let component: GenericPostComponent;
  let fixture: ComponentFixture<GenericPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
