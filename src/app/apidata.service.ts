import {HttpClient} from '@angular/common/http'
import {Component, Injectable, OnInit} from '@angular/core'
import { Observable, forkJoin, of } from 'rxjs'
import { delay, map } from 'rxjs/operators'
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
    url:string = "https://localhost:7250/Resume"
    constructor(private http:HttpClient) {}


    ngOnInit(): void {
        
    }
    
    // public getResumeTypes<T>(obj:T){
    //     let obs : Observable<void>[] = []
    //     for(let [key, value] of Object.entries(obj)) {
    //         if(typeof value === 'object'){
    //             let o = this.getResumeTypes(value).pipe(map(v=>{obj[key] = v}))
    //             obs.push(o);
    //         }else if(typeof value === "string"){
    //             let o = this.getResumeTypes()
    //         }
    //     }
    //     return forkJoin(obs).pipe(map(v=> obj));
    // }
    // translateAll<T>(obj:{T:T}).subscribe(v=>{
    //     console.log(v);
        
    // })
    // public getObj<T>(val:any, value:any){

    // }
    // public translate = {
    //     get(value: string) {
    //         return of("translated" + value).pipe(delay(1000));
    //     }
    // }
    // public readonly translatePrevix = "translate:";
    // public translateAll<T>(obj:T){
    //     let obs: Observable<void>[] = [];
        
    //         for(let [key, value] of Object.entries(obj)){
    //             if(typeof value === "object"){
    //                 let o = this.translateAll(value).pipe(map(v => {obj[key] = v}))
    //             }
    //         }
        
        
    //}
    // public* stuff(...array:(null|string|object)[]){
    //     yield; 
         
    // }
    public fetchResume() {
        return this.http
        .get<{}>(this.url)
        .pipe(map(
            (responseData:{
                [key:string]:object
            })=>{
                //console.log(responseData);
                let r:iresume;
                let array:(string|number|object)[] = []
                let justValues:(
                    selectedTemplate|
                    basics|
                    education[]|
                    headings|
                    work[]|
                    skills[]|
                    projects[]|
                    awards[]|
                    string[])[] = []
                //let obj:object = {}
                let obj:{
                    selectedTemplate:number;
                    headings:{
                        work:string;
                        education:string;
                        skills:string;
                        projects:string;
                    }
                    basics:{
                        name:string;
                        email:string;
                        phone:string;
                        location:{
                            address:string;
                        }
                        website:string;
                    }
                    education:{
                        level:string;
                        keywords:(string|null)[];
                        name:string;
                    }[];
                    work:{
                        company:string;
                        location:string;
                        position:string;
                        website:string | null;
                        endDate:string;
                        highlights:string[];
                        startDate:string;
                    }[];
                    skills:{
                        level:string | null;
                        keywords:(string|null)[];
                        name:string;
                    }[];
                    projects:{
                        name:string;
                        keywords:string[];
                        description:string;
                
                    }[];
                    awards:{
                        title:string;
                        awarder:string;
                        date:string;
                    }[];
                    sections:string[];
                };
                // for(const key in Object.keys(resume)){
                //     console.log(key);
                    
                // }
                let count  = 0;
                let someObject = {};
                let selectedTemplate:selectedTemplate;
                let headings:headings;
                let basics:basics;
                let education:education[];
                let work:work[];
                let skills:skills[];
                let projects:projects[];
                let awards:awards[];
                let sections:string[];
                for(const key in responseData)
                    if(responseData.hasOwnProperty(key)){
                        let c = responseData[key];
                        switch(count){
                            case 0:
                                selectedTemplate = c as selectedTemplate;
                                justValues.push(selectedTemplate)
                                break;
                            case 1:
                                headings =  c as headings ;
                                justValues.push(headings)
                                break;
                            case 2:
                                basics = c as basics ;
                                justValues.push(basics)
                                break;
                            case 3: 
                                education = c as education[] ;
                                justValues.push(education)
                                break;
                            case 4:
                                work = c as work[] ;
                                justValues.push(work)
                                break;
                            case 5:
                                skills = c as skills[] ;
                                justValues.push(skills)
                                break;
                            case 6:
                                projects =  c as projects[] ;
                                justValues.push(projects)
                                break;
                            case 7:
                                awards = c as awards[];
                                justValues.push(awards)
                                break;
                            case 8:
                                sections = c as string[] ;
                                justValues.push(sections)
                                break;
                            default:
                                count++;
                                break; 
                        }
                        let object = {[key] : responseData[key]};
                        let v = responseData[key];
                        array.push(object)
                        
                    }()=>{
                    r = new resume(
                        selectedTemplate.value,
                        headings,
                        basics,
                        education,
                        work,
                        skills,
                        projects,
                        awards,
                        sections
                    )
                        return r;
                }
                    
                    

                    //console.log(object)
                    //array.push(object)
                    //console.log(Object.keys(r as resume));
                    //obj[Symbol(key)] = responseData[key];
                    
        
                }
                
                // [...justValues].forEach((c,i)=>{
                //     console.log(c);
                //     switch(i){
                //         case 0:
                //             selectedTemplate = c as selectedTemplate ? c as selectedTemplate : selectedTemplate;
                //             break;
                //         case 1:
                //             headings = c as headings ? c as headings : headings;
                //             break;
                //         case 2:
                //             basics = c as basics ? c as basics : basics;
                //             break;
                //         case 3: 
                //             education = c as education[] ? c as education[] : education;
                //             break;
                //         case 4:
                //             work = c as work[] ? c as work[] : work;
                //             break;
                //         case 5:
                //             skills = c as skills[] ? c as skills[] : skills;
                //             break;
                //         case 6:
                //             projects = c as projects[] ? c as projects[] : projects;
                //             break;
                //         case 7:
                //             awards = c as awards[] ? c as awards[] : awards;
                //             break;
                //         case 8:
                //             sections = c as string[] ? c as string[] : sections;
                //             break;
                //         default:
                //             break; 
                //     }
                // }, 

                //)
                //console.log(resume.prototype);
                
                
            //}
            
        ))
        
    }
}
    
    
    // public static getRes<T>(...args:(number|string|null|[]|{})[]):resume{
    //     let resumeKeys = Object.keys(resume);
    //     return new resume(forkJoin(...args).pipe(map((v,i)=> resumeKeys[i]=v)));
    // }
