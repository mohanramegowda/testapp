import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EcommerceManagementConsoleComponent } from './ecommerce-management-console.component';



describe('EcommerceManagementConsoleComponent', () => {
  let component: EcommerceManagementConsoleComponent;
  let fixture: ComponentFixture<EcommerceManagementConsoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcommerceManagementConsoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommerceManagementConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
