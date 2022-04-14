import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { course } from "../interface/course";
import { semester } from "../interface/semester";
import { CourseList } from "./CourseList";
import { EditSemester } from "./EditSemester";

export function ViewSemesters({
    semester,
    editSemester,
    deleteSemester
}: {
    semester: semester;
    editSemester: (season: string, year: number, newSemester: semester) => void;
    deleteSemester: (season: string, year: number) => void;
}): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);
    const [courses, setCourses] = useState<course[]>(semester.courses);
    const [visible, setVisible] = useState<boolean>(false);

    function changeEditMode(): void {
        setEditing(!editing);
    }

    function changeVisible(): void {
        setVisible(!visible);
    }

    return editing ? (
        <EditSemester
            changeEditMode={changeEditMode}
            semester={semester}
            editSemester={editSemester}
            deleteSemester={deleteSemester}
            setCourses={setCourses}
            courses={courses}
        ></EditSemester>
    ) : (
        <Container>
            <Row>
                <Col>
                    <h3>{semester.season}</h3>
                </Col>
            </Row>
            <Row>
                <p>{semester.year}</p>
                <p>{semester.credits} Total Credits</p>
            </Row>
            <Row>
                <Button onClick={changeVisible}> See Courses</Button>
                <Button onClick={changeEditMode}>Edit</Button>
            </Row>
            {visible && (
                <Row>
                    <CourseList courses={courses}></CourseList>
                </Row>
            )}
        </Container>
    );
}