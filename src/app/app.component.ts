import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  
  ngOnInit(){
  	document.getElementById("loading").style.display = "none";
  }

  birthday = new Date(1992,11,9);
  toggle = true;
  get format(){
  	return this.toggle ? 'shortDate' : 'fullDate';
  }
  toggleFormat (){
  	this.toggle = !this.toggle;
  }
  
}
