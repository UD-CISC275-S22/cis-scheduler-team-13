import React from "react";
import { Stack } from "react-bootstrap";
import { course } from "../interface/course";
import { ViewCourses } from "./ViewCourse";

export function CourseList({ courses }: { courses: course[] }): JSX.Element {
    return (
        <Stack gap={3}>
            {courses.map((course: course) => (
                <div key={course.courseID} className="bg-light border m-2 p-2">
                    <ViewCourses course={course}></ViewCourses>
                </div>
            ))}
        </Stack>
    );
}
