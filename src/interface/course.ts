export interface course {
    courseName: string;
    courseID: number;
    credits: number;
    prerequisite: course[];
}
