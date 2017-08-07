import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
@Injectable()
export class ListComponent implements OnInit {
	test;
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
	    "id": 2,
	    "name": "李想",
	    "telNum": "18900001002",
	    "address": "广东省深圳市",
	    "email": "123@qq.com",
	    "birthday": "1990/10/10",
	    "collection": 0
	  },
	  {
	    "id": 3,
	    "name": "大Q",
	    "telNum": "18900001003",
	    "address":" 广东省深圳市",
	    "email": "123@qq.com",
	    "birthday": "1990/10/10",
	    "collection": 0
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
	    "id": 5,
	    "name": "胡巴",
	    "telNum": "18900001005",
	    "address": "广东省深圳市",
	    "email": "123@qq.com",
	    "birthday": "1990/10/10",
	    "collection": 0
	  },
	  {
	    "id": 6,
	    "name": "老豆腐",
	    "telNum": "18900001006",
	    "address": "广东省深圳市",
	    "email": "123@qq.com",
	    "birthday": "1990/10/10",
	    "collection": 0
	  },
	  {
	    "id": 7,
	    "name": "小明",
	    "telNum": "18900001007",
	    "address": "广东省深圳市",
	    "email": "123@qq.com",
	    "birthday": "1990/10/10",
	    "collection": 0
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
	  {
	    "id": 9,
	    "name": "大爷",
	    "telNum": "18900001009",
	    "address": "广东省深圳市",
	    "email": "123@qq.com",
	    "birthday": "1990/10/10",
	    "collection": 0
	  },
	  {
	    "id": 10,
	    "name": "大叔",
	    "telNum": "18900001010",
	    "address": "广东省深圳市",
	    "email": "123@qq.com",
	    "birthday": "1990/10/10",
	    "collection": 0
	  }
	];
  constructor() { }

  ngOnInit() {
  }

  getClick(thing){
  	this.test = thing;
  }
}
