import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondSidebarComponent } from './second-sidebar.component';

describe('SecondSidebarComponent', () => {
  let component: SecondSidebarComponent;
  let fixture: ComponentFixture<SecondSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
