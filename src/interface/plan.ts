import { semester } from "./semester";
export interface plan {
    name: string;
    planID: number;
    credits: number;
    semesters: semester[];
}
