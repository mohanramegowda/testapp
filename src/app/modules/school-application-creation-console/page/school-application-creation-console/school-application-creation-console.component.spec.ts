import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolApplicationCreationConsoleComponent } from './school-application-creation-console.component';

describe('SchoolApplicationCreationConsoleComponent', () => {
  let component: SchoolApplicationCreationConsoleComponent;
  let fixture: ComponentFixture<SchoolApplicationCreationConsoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolApplicationCreationConsoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolApplicationCreationConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
