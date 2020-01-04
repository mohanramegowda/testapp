import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSectionTitleDialogComponent } from './edit-section-title-dialog.component';

describe('EditSectionTitleDialogComponent', () => {
  let component: EditSectionTitleDialogComponent;
  let fixture: ComponentFixture<EditSectionTitleDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSectionTitleDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSectionTitleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
