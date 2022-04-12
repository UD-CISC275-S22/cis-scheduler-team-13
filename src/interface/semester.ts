import { course } from "./course";
export interface semester {
    name: string;
    semesterID: number;
    credits: number;
    semesters: course[];
}
