import { HttpClient } from '@angular/common/http'
import { Injectable, OnInit} from '@angular/core'

import { map } from 'rxjs/operators'
import { resume } from './models/resume.models'
import { awards } from './models/awards.models'
import { basics } from './models/basics.models'
import { education } from './models/education.models'
import { headings } from './models/headings.model'
import { projects } from './models/projects.models'
import { selectedTemplate } from './models/selectedTemplate.model'
import { skills } from './models/skills.models'
import {work} from './models/work.models'
import { iresume } from './models/resume.interface'
@Injectable()
export class ApiService implements OnInit{
    url:string = "https://localhost:7250/Resume";
    justValues:(selectedTemplate|
        basics|
        education[]|
        headings|
        work[]|
        skills[]|
        projects[]|
        awards[]|
        string[])[] = [];
    constructor(private http:HttpClient) {}


    ngOnInit(): void {
        
    }

    public getResumeFFS(array:(selectedTemplate|
        basics|
        education[]|
        headings|
        work[]|
        skills[]|
        projects[]|
        awards[]|
        string[])[]){
        
    }
    public fetchResume() {
        return this.http
        .get<{}>(this.url)
        .pipe(map(
            (responseData:{
                [key:string]:object
            })=>{
                let r:iresume;
                let count  = 0;
                let selectedTemplate:selectedTemplate;
                let headings:headings;
                let basics:basics;
                let education:education[];
                let work:work[];
                let skills:skills[];
                let projects:projects[];
                let awards:awards[];
                let sections:string[];
                for(const key in responseData){
                    if(responseData.hasOwnProperty(key)){
                        let c = responseData[key];
                        switch(count){
                            case 0:
                                
                                selectedTemplate = c as selectedTemplate;
                                this.justValues.push(selectedTemplate)
                                break;
                            case 1:
                                headings =  c as headings ;
                                this.justValues.push(headings)
                                break;
                            case 2:
                                basics = c as basics ;
                                this.justValues.push(basics)
                                break;
                            case 3: 
                                education = c as education[] ;
                                console.log(education)
                                this.justValues.push(education)
                                break;
                            case 4:
                                work = c as work[] ;
                                this.justValues.push(work)
                                break;
                            case 5:
                                skills = c as skills[] ;
                                this.justValues.push(skills)
                                break;
                            case 6:
                                projects =  c as projects[] ;
                                this.justValues.push(projects)
                                break;
                            case 7:
                                awards = c as awards[];
                                this.justValues.push(awards)
                                break;
                            case 8:
                                sections = c as string[] ;
                                this.justValues.push(sections)
                                break;
                            default:
                                break; 
                        }
                        count++;
                    }
                }
                
                const durp:selectedTemplate = this.justValues[0] as selectedTemplate
                const hur:headings = this.justValues[1] as headings
                const dur:basics = this.justValues[2] as basics
                const bahDurp:education[] = this.justValues[3] as education[]
                const durpDeeDoo:work[] = this.justValues[4] as work[]
                const heeDeeHee:skills[] = this.justValues[5] as skills[]
                const hiDeeHi:projects[] = this.justValues[6] as projects[]
                const hoDeeHo:awards[] = this.justValues[7] as awards[]
                const heyDeeHay:string[] = this.justValues[8] as string[]
                r = new resume(
                    2,
                    hur,
                    dur,
                    bahDurp,
                    durpDeeDoo,
                    heeDeeHee,
                    hiDeeHi,
                    hoDeeHo,
                    heyDeeHay
                )
                    return r;
            }
        ))
    }
}
