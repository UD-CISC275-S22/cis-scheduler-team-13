export interface course {
    courseName: string;
    courseID: number;
    credits: number;
    prerequisites: course[];
}
