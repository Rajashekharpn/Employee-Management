import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentListComponent } from './student-list/student-list.component';



@NgModule({
  declarations: [
    StudentComponent,
    StudentDetailsComponent,
    StudentListComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StudentComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StudentModule { }
