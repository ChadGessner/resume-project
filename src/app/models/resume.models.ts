import { Type } from "@angular/core";
import { forkJoin } from "rxjs";
import { iresume } from "./resume.interface";

export class resume {
    public selectedTemplate:number;
    public headings:{
        work:string ;
        education:string;
        skills:string;
        projects:string;
    }
    public basics:{
        name:string;
        email:string;
        phone:string;
        location:{
            address:string;
        }
        website:string;
    }
    public education:{
        level:string;
        keywords:(string|null)[];
        name:string;
    }[];
    public work:{
        company:string;
        location:string;
        position:string;
        website:string | null;
        endDate:string;
        highlights:string[];
        startDate:string;
    }[];
    public skills:{
        level:string | null;
        keywords:(string|null)[];
        name:string;
    }[];
    public projects:{
        name:string;
        keywords:string[];
        description:string;

    }[];
    public awards:{
        title:string;
        awarder:string;
        date:string;
    }[];
    public sections:string[];
    
     constructor(
        selectedTemplate:number,
        headings:{
            work:string,
            education:string,
            skills:string,
            projects:string
        }, basics:{
            name:string,
            email:string,
            phone:string,
            location:{
                address:string
            },
            website:string
        },
        education:{
            level:string,
            keywords:(string|null)[],
            name:string
        }[],
        work:{
            company:string,
            location:string,
            position:string,
            website:string|null,
            endDate:string,
            highlights:string[],
            startDate:string
        }[],
        skills:{
            level:string | null,
            keywords:(string|null)[],
            name:string
        }[],
        projects:{
            name:string,
            keywords:string[],
            description:string
        }[],
        awards:{
            title:string,
            awarder:string,
            date:string
        }[],
        sections:string[]
        )
        {
        this.selectedTemplate = selectedTemplate
        this.headings = headings;
        this.basics = basics;
        this.education = education;
        this.work = work;
        this.skills = skills;
        this.projects = projects;
        this.awards = awards;
        this.sections = sections;
    }
    // public get selectedTemplate():number{ 
    //     return this._selectedTemplate;
    // }
    // public set selectedTemplate(val:number){
    //     this._selectedTemplate = val;
    // }
    
    // public* getValues(kv:(number|string|string[]|{})[]) {
    //     const keys = Object.keys(resume);
    //     for(let i = 0; i < keys.length;i++ ){
    //         yield kv[i];
    //     }
        
    // }
    // public getInstance(generator:()=>){
    //     return new resume(generator);
    // }

}