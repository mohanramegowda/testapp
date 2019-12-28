import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddFieldDialogComponent } from '@shared/components/add-field-dialog/add-field-dialog.component';

@Component({
  selector: 'app-school-applocation-form',
  templateUrl: './school-applocation-form.component.html',
  styleUrls: ['./school-applocation-form.component.scss']
})
export class SchoolApplocationFormComponent implements OnInit {

  //fields = [];
  sections: Array<any> = [];
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  OnAddNewSection() {
    this.sections.push({
      title: 'test',
      fields: []
    });
  }


  // Todo move below code to common place
  OnAddNewField(section) {
    const dialogRef = this.dialog.open(AddFieldDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        section.fields.push(result);
      }
    });
  }

  OnActions(event, section) {
    if (event) {
      switch (event.mode) {
        case 'Edit':
          this.editTemplate(event.field, section);
          break;
        case 'Delete':
          section.fields.splice(section.fields.indexOf(event.field), 1);
          break;
      }
    }
  }

  private editTemplate(data, section) {
    const i = section.fields.indexOf(data);
    const dialogRef = this.dialog.open(AddFieldDialogComponent, {
      data: data
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        section.fields[i] = result;
      }
    });
  }

  // Todo move above code to common place

}
