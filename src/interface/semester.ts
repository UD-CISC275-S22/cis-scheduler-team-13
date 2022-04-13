import { course } from "./course";
export interface semester {
    season: string;
    year: number;
    credits: number;
    courses: course[];
}
