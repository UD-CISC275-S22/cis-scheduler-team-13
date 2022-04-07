export interface course {
    courseName: string;
    courseID: number;
    prerequisite: course[];
}
