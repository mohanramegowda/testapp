import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolApplocationFormComponent } from './school-applocation-form.component';

describe('SchoolApplocationFormComponent', () => {
  let component: SchoolApplocationFormComponent;
  let fixture: ComponentFixture<SchoolApplocationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolApplocationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolApplocationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
