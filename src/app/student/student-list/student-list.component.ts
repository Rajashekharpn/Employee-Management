import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../../student';
import { Students } from '../../studentmock';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';

const urlserver = environment.apiUrl;
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  student: any;
  // employee = Students;
  onselect: Student;

  constructor(
    private router: Router,
    private httpclient: HttpClient
  ) { }

  ngOnInit() {
  }
test(name, age) {
this.router.navigate(['student-details', name, age]);
}
getStudentList(): any{
  this.httpclient.get(urlserver).subscribe((result) => {
    console.log(result);
    this.student = result;
  });
}
}
