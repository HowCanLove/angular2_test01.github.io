import { Component, OnInit } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';

import { Detail } from '../detail';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers:[ Detail ]
})
export class DetailComponent implements OnInit {

  constructor(
  	private http: Http,
    private detail: Detail) { }

  result = {msg:"asd"};
  ngOnInit() {
    this.result['thing'] = this.detail.show(123123);
    // console.log(this.detail.show(123123));
 //  	let url = "http://localhost:8080/test.php";
 //  	let params = new URLSearchParams();
	// params.set('username', 'huge');
	// this.http.get(url+"?username=xinkai", params).map(res => res.json() ).subscribe(
 //        data => { console.log(data); },
 //        err => { console.log(err); }
 //      );
	// this.http.post(url, params).map(res => res.json()).subscribe(
 //        data => { console.log(data); this.result = data},
 //        err => { console.log(err); }
 //      );
  }
}
