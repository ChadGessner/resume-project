
export class resume {
    public selectedTemplate:number;
    public headings:{
        work:string ;
        education:string;
        awards:string;
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
        institution:string;
        location:string;
        endDate:string;
        startDate:string;
        studyType:string;
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
            awards:string,
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
            institution:string,
            location:string,
            endDate:string,
            startDate:string,
            studyType:string,
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

}