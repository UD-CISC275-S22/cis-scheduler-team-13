import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { course } from "../interface/course";

export function ViewCourses({ course }: { course: course }): JSX.Element {
    return (
        <Container>
            <Row>
                <Col>
                    <h3>{course.courseName + course.courseID}</h3>
                </Col>
            </Row>
            <Row>
                <p>Credits: </p>
                <h4>{course.credits}</h4>
            </Row>
            {/*
            <Row>
                <p>Prerequisites: </p>
                <h5>{course.prerequisites.toString()}</h5>
            </Row>
            */}
        </Container>
    );
}
