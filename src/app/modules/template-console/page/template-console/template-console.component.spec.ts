import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateConsoleComponent } from './template-console.component';

describe('TemplateConsoleComponent', () => {
  let component: TemplateConsoleComponent;
  let fixture: ComponentFixture<TemplateConsoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateConsoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
