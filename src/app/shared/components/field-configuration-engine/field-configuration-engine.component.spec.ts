import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldConfigurationEngineComponent } from './field-configuration-engine.component';

describe('FieldConfigurationEngineComponent', () => {
  let component: FieldConfigurationEngineComponent;
  let fixture: ComponentFixture<FieldConfigurationEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldConfigurationEngineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldConfigurationEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
