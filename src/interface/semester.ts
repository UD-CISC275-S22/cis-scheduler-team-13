import { course } from "./course";
export interface Semester {
    name: string;
    semesterID: number;
    semesters: course[];
}
