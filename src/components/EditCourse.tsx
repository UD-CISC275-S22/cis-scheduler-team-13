import React from "react";
import { Button, Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import { course } from "../interface/course";

interface CourseEdit {
    course: course;
    setCourse: (code: string, name: string, newCourse: course) => void;
}

export function EditCourseName({ course, setCourse }: CourseEdit): JSX.Element {
    return (
        <Form.Control
            value={course.code}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setCourse(course.code, course.name, {
                    ...course,
                    name: event.target.value || ""
                })
            }
        />
    );
}

export function EditCourseID({ course, setCourse }: CourseEdit): JSX.Element {
    return (
        <Form.Control
            value={course.name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setCourse(course.code, course.name, {
                    ...course,
                    code: event.target.value || ""
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
                setCourse(course.code, course.name, {
                    ...course,
                    credits: event.target.value || ""
                })
            }
        />
    );
}

export function EditCoursePrereqs({
    course,
    setCourse
}: CourseEdit): JSX.Element {
    return (
        <Form.Control
            value={course.preReq}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setCourse(course.code, course.name, {
                    ...course,
                    preReq: event.target.value || ""
                })
            }
        />
    );
}

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
                            courseF.name !== course.name &&
                            courseF.code !== course.code
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
    function setCourse(code: string, name: string, newCourse: course) {
        setCourses(
            courses.map((course: course) =>
                course.code === code && course.name === name
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
                    key={course.code}
                    className="d-flex align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <Container>
                            <Row>
                                <Col>
                                    <p>Course Code</p>
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
                                    <p>Course Name</p>
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
                                    {
                                        <EditCoursePrereqs
                                            course={course}
                                            setCourse={setCourse}
                                        ></EditCoursePrereqs>
                                    }
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>Delete</p>
                                </Col>
                                <Col>
                                    <EditCourseDelete
                                        course={course}
                                        setCourses={setCourses}
                                        courses={courses}
                                    ></EditCourseDelete>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}
