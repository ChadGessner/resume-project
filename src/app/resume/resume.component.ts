import { Component, OnInit } from '@angular/core';
import { from, Observable, Observer } from 'rxjs';
import { ApiService } from '../apidata.service';
import { resume } from '../models/resume.models';
import {iresume} from '../models/resume.interface'
import { Type } from '@angular/compiler';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  resume:resume|null = null;
  anArray:(string|number|{})[] = []
  resumeSubscription:Observer<typeof resume|resume> = {
    next: x => x,
    error: err => console.log(err),
    complete: ()=> {}
  };
  constructor(private api:ApiService) { 
    
  }
    
  ngOnInit(): void {
    this.api.fetchResume().subscribe(x => {
      this.resume = x
    })
  }
  fetch(sub:Observer<typeof resume|resume>){
    // let re:Observer<typeof resume|resume> = {
    //   next: x => console.log(x),
    //   error: err => console.log(err),
    //   complete: ()=> {}
    // };
    return this.api.fetchResume().subscribe(x => x);
  }
  getResumeHopefully(){
    const isCanHasNotEqualNull = this.resume !== null;
    console.log(isCanHasNotEqualNull)
    return isCanHasNotEqualNull;
  }
  tryGetValues(){
    if(this.resume){
      this.anArray.forEach(v => {
        //console.log(v + 'ultra gay');
        
      })
      return this.resume.awards
    }
    //console.log(this.resume)
    return 'null';
  }

}
