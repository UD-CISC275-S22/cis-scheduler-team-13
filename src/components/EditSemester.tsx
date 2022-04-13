import React, { useState } from "react";
import { Button, Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import { course } from "../interface/course";
import { semester } from "../interface/semester";
import { AddCourse } from "./addCourse";
import { EditCourses } from "./EditCourse";

export function EditSemester({
    changeEditMode,
    semester,
    editSemester,
    deleteSemester,
    setCourses,
    courses
}: {
    changeEditMode: () => void;
    semester: semester;
    editSemester: (season: string, year: number, newSemester: semester) => void;
    deleteSemester: (season: string, year: number) => void;
    setCourses: (courses: course[]) => void;
    courses: course[];
}): JSX.Element {
    const seasons = ["Summer", "Spring", "Fall", "Winter"];
    const [show, setShow] = useState<boolean>(false);
    const CloseAddModal = () => setShow(false);
    const ShowAddModal = () => setShow(true);
    const [season, setSeason] = useState<string>(semester.season);
    const [year, setYear] = useState<number>(semester.year);

    function saveChanges() {
        editSemester(semester.season, semester.year, {
            ...semester,
            season: season,
            year: year,
            courses: courses
        });
        changeEditMode();
    }
    function goBack() {
        changeEditMode();
    }
    function addCourse(newCourse: course) {
        const exists = courses.find(
            (course: course): boolean =>
                course.courseID === newCourse.courseID &&
                course.courseName === newCourse.courseName
        );
        if (exists === undefined) {
            setCourses([...courses, newCourse]);
        }
    }
    function updateSeason(event: React.ChangeEvent<HTMLInputElement>) {
        setSeason(event.target.value);
    }
    return (
        <Container>
            <Row>
                <Col>
                    <Form.Group controlId="formSemesterSeason" as={Row}>
                        <Form.Label column sm={2}>
                            Season:
                        </Form.Label>
                        <Col>
                            <Form.Group controlId="picking-a-season">
                                {seasons.map((option: string) => (
                                    <Form.Check
                                        inline
                                        key={option}
                                        value={option}
                                        type="radio"
                                        name={option}
                                        onChange={updateSeason}
                                        id="season-checker"
                                        label={option}
                                    />
                                ))}
                            </Form.Group>
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="formSemesterYear" as={Row}>
                        <Form.Label column sm={2}>
                            Year:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={year}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setYear(parseInt(event.target.value))}
                            />
                        </Col>
                    </Form.Group>
                    <EditCourses
                        courses={courses}
                        setCourses={setCourses}
                    ></EditCourses>
                    <div>
                        <Button
                            variant="success"
                            className="me-4"
                            onClick={ShowAddModal}
                        >
                            Add a Course
                        </Button>
                        <AddCourse
                            appears={show}
                            close={CloseAddModal}
                            addCourse={addCourse}
                        ></AddCourse>
                    </div>
                    <Button
                        onClick={saveChanges}
                        variant="success"
                        className="me-4"
                    >
                        Save
                    </Button>
                    <Button onClick={goBack} variant="warning" className="me-5">
                        Cancel
                    </Button>
                    <Button
                        onClick={() =>
                            deleteSemester(semester.season, semester.year)
                        }
                        variant="danger"
                        className="me-8"
                    >
                        Delete
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

interface SemesterEdit {
    semester: semester;
    setSemester: (season: string, year: number, newSemester: semester) => void;
}

export function EditSemesterSeason({
    semester,
    setSemester
}: SemesterEdit): JSX.Element {
    return (
        <Form.Control
            value={semester.season}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setSemester(semester.season, semester.year, {
                    ...semester,
                    season: event.target.value
                })
            }
        />
    );
}

export function EditSemesterYear({
    semester,
    setSemester
}: SemesterEdit): JSX.Element {
    return (
        <Form.Control
            value={semester.season}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setSemester(semester.season, semester.year, {
                    ...semester,
                    year: parseInt(event.target.value)
                })
            }
        />
    );
}

export function EditSemesters({
    semesters,
    setSemesters
}: {
    semesters: semester[];
    setSemesters: (semesters: semester[]) => void;
}): JSX.Element {
    function setSemester(season: string, year: number, newSemester: semester) {
        setSemesters(
            semesters.map((semester: semester) =>
                semester.season === season && semester.year === year
                    ? newSemester
                    : semester
            )
        );
    }
    return (
        <ListGroup as="ol" numbered>
            {semesters.map((semester: semester) => (
                <ListGroup.Item
                    as="li"
                    key={semester.season && semester.year}
                    className="d-flex align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <Container>
                            <Row>
                                <Col>
                                    <p>Semester Season</p>
                                </Col>
                                <Col>
                                    <EditSemesterSeason
                                        semester={semester}
                                        setSemester={setSemester}
                                    ></EditSemesterSeason>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>Semester Year</p>
                                </Col>
                                <Col>
                                    <EditSemesterYear
                                        semester={semester}
                                        setSemester={setSemester}
                                    ></EditSemesterYear>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}
