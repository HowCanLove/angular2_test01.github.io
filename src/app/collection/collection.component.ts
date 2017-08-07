import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
	contacts = [
	  {
	    "id": 1,
	    "name": "张三",
	    "telNum": "18900001001",
	    "address": "广东省深圳市",
	    "email": "123@qq.com",
	    "birthday": "1990/10/10",
	    "collection": 1
	  },  
	  {
	    "id": 4,
	    "name": "旺旺",
	    "telNum": "18900001004",
	    "address": "广东省深圳市福田区车公庙泰然6路ccc小区1栋5A",
	    "email": "123@qq.com",
	    "birthday": "1990/10/10",
	    "collection": 1
	  },   
	  {
	    "id": 8,
	    "name": "东东动",
	    "telNum": "18900001008",
	    "address": "广东省深圳市",
	    "email": "123@qq.com",
	    "birthday": "1990/10/10",
	    "collection": 1
	  },  
	];
  constructor() { }

  ngOnInit() {
  }

}
