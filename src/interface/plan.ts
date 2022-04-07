import { Semester } from "./semester";
export interface plan {
    name: string;
    planID: number;
    semesters: Semester[];
}
