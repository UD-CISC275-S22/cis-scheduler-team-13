import { semester } from "./semester";
export interface plan {
    name: string;
    credits: number;
    semesters: semester[];
    /*
    engl: boolean;
    multicultural: boolean;
    seminar: boolean;
    dle: boolean;
    CAH: boolean;
    HCC: boolean;
    SBS: boolean;
    MNST: boolean;
    totalCredits: boolean;
    core: boolean;
    relatedWork: boolean;
    technical: boolean;
    capstone: boolean;
    labScience: boolean;
    additionalScience: boolean;
    */
}
