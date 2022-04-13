import { semester } from "./semester";
export interface plan {
    name: string;
    credits: number;
    semesters: semester[];
}
