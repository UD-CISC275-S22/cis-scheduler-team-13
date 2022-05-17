import React, { useState } from "react";
import { Button, Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import { course } from "../interface/course";
import { semester } from "../interface/semester";
import { AddCourse } from "./AddCourseModal";
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
    const [show, setShow] = useState<boolean>(false);
    const closeAddModal = () => setShow(false);
    const showAddModal = () => setShow(true);
    const [season, setSeason] = useState<string>(semester.season);
    const [year, setYear] = useState<number>(semester.year);
    const [credits, setCredits] = useState<number>(semester.credits);

    function naturalCredits() {
        const creditList = courses.map((course: course): number =>
            parseInt(course.credits)
        );
        const sum = creditList.reduce(
            (currentTotal: number, credits: number) => currentTotal + credits,
            0
        );
        setCredits(sum);
    }

    function autoCreditUpdate() {
        naturalCredits();
        saveChanges();
    }

    function saveChanges() {
        editSemester(semester.season, semester.year, {
            ...semester,
            season: season,
            year: year,
            credits: credits,
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
                course.code === newCourse.code && course.name === newCourse.name
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
                                <Form.Check
                                    data-testid="semesterEditWinter"
                                    inline
                                    value="Winter"
                                    type="radio"
                                    name="Winter"
                                    onChange={updateSeason}
                                    id="season-winter"
                                    label="Winter"
                                    checked={season === "Winter"}
                                ></Form.Check>
                                <Form.Check
                                    data-testid="semesterEditSpring"
                                    inline
                                    value="Spring"
                                    type="radio"
                                    name="Spring"
                                    onChange={updateSeason}
                                    id="season-spring"
                                    label="Spring"
                                    checked={season === "Spring"}
                                ></Form.Check>
                                <Form.Check
                                    data-testid="semesterEditSummer"
                                    inline
                                    value="Summer"
                                    type="radio"
                                    name="Summer"
                                    onChange={updateSeason}
                                    id="season-summer"
                                    label="Summer"
                                    checked={season === "Summer"}
                                ></Form.Check>
                                <Form.Check
                                    data-testid="semesterEditFall"
                                    inline
                                    value="Fall"
                                    type="radio"
                                    name="Fall"
                                    onChange={updateSeason}
                                    id="season-fall"
                                    label="Fall"
                                    checked={season === "Fall"}
                                ></Form.Check>
                            </Form.Group>
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="formSemesterYear" as={Row}>
                        <Form.Label column sm={2}>
                            Year:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                data-testid="semesterEditYear"
                                as="textarea"
                                rows={3}
                                value={year}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setYear(parseInt(event.target.value) || 0)}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="formSemesterCredits" as={Row}>
                        <Form.Label column sm={2}>
                            Credits:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                data-testid="editSemesterCreditsInputBox"
                                as="textarea"
                                rows={3}
                                value={credits}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) =>
                                    setCredits(
                                        parseInt(event.target.value) || 0
                                    )
                                }
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
                            onClick={showAddModal}
                        >
                            Add a Course
                        </Button>
                        <AddCourse
                            show={show}
                            handleClose={closeAddModal}
                            addCourse={addCourse}
                        ></AddCourse>
                    </div>
                    <Button
                        data-testid="semesterEditSetCreditsToActual"
                        onClick={naturalCredits}
                        variant="warning"
                        className="me-4"
                    >
                        Set Credits to Actual
                    </Button>
                    <Button
                        data-testid="semesterEditSave"
                        onClick={autoCreditUpdate} //does not work for some reason
                        variant="success"
                        className="me-4"
                    >
                        Save
                    </Button>
                    <Button
                        data-testid="semesterEditCancel"
                        onClick={goBack}
                        variant="warning"
                        className="me-5"
                    >
                        Cancel
                    </Button>
                    <Button
                        data-testid="semesterEditDelete"
                        onClick={() =>
                            deleteSemester(semester.season, semester.year)
                        }
                        variant="danger"
                        className="me-8"
                    >
                        Delete
                    </Button>
                    <Button onClick={() => setCourses([])}>
                        Clear Courses
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
            data-testid="editPlanSemesterSeason"
            value={semester.season}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setSemester(semester.season, semester.year, {
                    ...semester,
                    season: event.target.value || ""
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
            value={semester.year}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setSemester(semester.season, semester.year, {
                    ...semester,
                    year: parseInt(event.target.value) || 0
                })
            }
        />
    );
}

export function EditSemesterCredits({
    semester,
    setSemester
}: SemesterEdit): JSX.Element {
    return (
        <Form.Control
            data-testid="editPlanSemesterCredits"
            value={semester.credits}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setSemester(semester.season, semester.year, {
                    ...semester,
                    credits: parseInt(event.target.value) || 0
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
                            <Row>
                                <Col>
                                    <p>Semester Credits</p>
                                </Col>
                                <Col>
                                    <EditSemesterCredits
                                        data-testid="creditInputBox"
                                        semester={semester}
                                        setSemester={setSemester}
                                    ></EditSemesterCredits>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}
