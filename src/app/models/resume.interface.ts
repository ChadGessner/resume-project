

export interface iresume {
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
}