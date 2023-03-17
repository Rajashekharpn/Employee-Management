import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  http: any;

  constructor() { }
  list = [
    { id: 1, name: 'raj' },
    { id: 2, name: 'chetan' },
    { id: 3, name: 'raj' },
    { id: 4, name: 'chetan' },
  ];

  ngOnInit() {
  }
  log(name) {
    console.log(name);
  }
  test():any{
    var fullUri = 'https://localhost:7298/v1/firstapp';
   
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/xml'
      })
    };

    return this.http.post(fullUri,httpOptions).pipe(
   
      
      );
  }
}
