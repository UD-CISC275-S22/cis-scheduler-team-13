import { course } from "./course";
export interface Semester {
    name: string;
    semesterID: number;
    credits: number;
    semesters: course[];
}
