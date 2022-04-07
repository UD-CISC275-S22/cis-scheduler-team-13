import { Semester } from "./semester";
export interface plan {
    name: string;
    planID: number;
    credits: number;
    semesters: Semester[];
}
