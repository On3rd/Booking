import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserContactDetailsFormComponent } from './user-contact-details-form.component';

describe('UserContactDetailsFormComponent', () => {
  let component: UserContactDetailsFormComponent;
  let fixture: ComponentFixture<UserContactDetailsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserContactDetailsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserContactDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
