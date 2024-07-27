import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProfileTestComponent } from './new-profile-test.component';

describe('NewProfileTestComponent', () => {
  let component: NewProfileTestComponent;
  let fixture: ComponentFixture<NewProfileTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewProfileTestComponent]
    });
    fixture = TestBed.createComponent(NewProfileTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
