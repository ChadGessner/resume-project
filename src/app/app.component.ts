import { Component, OnInit } from '@angular/core';
import { ApiService } from './apidata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'resume-project';
  
  constructor(private api:ApiService){

  }
  ngOnInit(): void {
    //this.api.fetchResume();
  }
  fetch(){
    console.log("something");
    
    // this.api.fetchResume().subscribe((sub)=>{
      
    // });
  }
}
