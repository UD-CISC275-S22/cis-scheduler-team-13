import React from "react";
import { Button, Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import { course } from "../interface/course";
//import { AddCourse } from "./addCourse";

interface CourseEdit {
    course: course;
    setCourse: (
        courseID: number,
        courseName: string,
        newCourse: course
    ) => void;
}

export function EditCourseName({ course, setCourse }: CourseEdit): JSX.Element {
    return (
        <Form.Control
            value={course.courseName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setCourse(course.courseID, course.courseName, {
                    ...course,
                    courseName: event.target.value
                })
            }
        />
    );
}

export function EditCourseID({ course, setCourse }: CourseEdit): JSX.Element {
    return (
        <Form.Control
            value={course.courseID}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setCourse(course.courseID, course.courseName, {
                    ...course,
                    courseID: parseInt(event.target.value)
                })
            }
        />
    );
}

export function EditCourseCredits({
    course,
    setCourse
}: CourseEdit): JSX.Element {
    return (
        <Form.Control
            value={course.credits}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setCourse(course.courseID, course.courseName, {
                    ...course,
                    credits: parseInt(event.target.value)
                })
            }
        />
    );
}

/*
Don't really know what I was going for here, prerqs need to be in the form of course[] but with this method they are string[],
need to figure out how to make that conversion, possibly need office hours
export function blankCourse(name: string, id: number): course{
    const course: course = {courseName: name, courseID: id, credits: 0, prerequisites: []};
    return course;
}

export function EditCoursePrereqs({
    course,
    setCourse
}: CourseEdit): JSX.Element {
    return (
        <Form.Control
            value={course.prerequisites.toString()}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setCourse(course.courseID, course.courseName, {
                    ...course,
                    prerequisites: blankCourse(
                        event.target.value.substring(0, 3),
                        parseInt(event.target.value.substring(4, 6)))
                    )
                })
            }
        />
    );
}
*/

export function EditCourseDelete({
    course,
    setCourses,
    courses
}: {
    course: course;
    setCourses: (courses: course[]) => void;
    courses: course[];
}): JSX.Element {
    return (
        <Button
            onClick={() =>
                setCourses(
                    courses.filter(
                        (courseF: course): boolean =>
                            courseF.courseName !== course.courseName &&
                            courseF.courseID !== course.courseID
                    )
                )
            }
        >
            Delete Course
        </Button>
    );
}

export function EditCourses({
    courses,
    setCourses
}: {
    courses: course[];
    setCourses: (courses: course[]) => void;
}): JSX.Element {
    function setCourse(id: number, name: string, newCourse: course) {
        setCourses(
            courses.map((course: course) =>
                course.courseID === id && course.courseName === name
                    ? newCourse
                    : course
            )
        );
    }
    return (
        <ListGroup as="ol" numbered>
            {courses.map((course: course) => (
                <ListGroup.Item
                    as="li"
                    key={course.courseID}
                    className="d-flex align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <Container>
                            <Row>
                                <Col>
                                    <p>Course Name</p>
                                </Col>
                                <Col>
                                    <EditCourseName
                                        course={course}
                                        setCourse={setCourse}
                                    ></EditCourseName>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>Course ID</p>
                                </Col>
                                <Col>
                                    <EditCourseID
                                        course={course}
                                        setCourse={setCourse}
                                    ></EditCourseID>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>Credits</p>
                                </Col>
                                <Col>
                                    <EditCourseCredits
                                        course={course}
                                        setCourse={setCourse}
                                    ></EditCourseCredits>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>Prerequisities</p>
                                </Col>
                                <Col>
                                    {/*
                                    <EditCoursePrereqs
                                        course={course}
                                        setCourse={setCourse}
                                    ></EditCoursePrereqs>
                                     */}
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}
