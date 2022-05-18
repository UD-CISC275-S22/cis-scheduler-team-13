import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { plan } from "../interface/plan";
import { semester } from "../interface/semester";
import { AddSemester } from "./AddSemesterModal";
import { EditSemesters } from "./EditSemester";

export function EditPlan({
    changeEditMode,
    plan,
    editPlan,
    deletePlan,
    setSemesters,
    semesters
}: {
    changeEditMode: () => void;
    plan: plan;
    editPlan: (name: string, newPlan: plan) => void;
    deletePlan: (name: string) => void;
    setSemesters: (semesters: semester[]) => void;
    semesters: semester[];
}): JSX.Element {
    const [show, setShow] = useState<boolean>(false);
    const closeAddModal = () => setShow(false);
    const showAddModal = () => setShow(true);
    const [name, setName] = useState<string>(plan.name);
    const [credits, setCredits] = useState<number>(plan.credits);

    function naturalCreditsPlan() {
        const creditList = semesters.map(
            (semester: semester): number => semester.credits
        );
        const sum = creditList.reduce(
            (currentTotal: number, credits: number) => currentTotal + credits,
            0
        );
        setCredits(sum);
    }

    function saveChanges() {
        semesters.sort((a, b) =>
            a.year.toString() + a.season > b.year.toString() + b.season
                ? 1
                : b.year.toString() + b.season > a.year.toString() + a.season
                ? -1
                : 0
        );

        editPlan(plan.name, {
            ...plan,
            name: name,
            credits: credits,
            semesters: semesters
        });
        changeEditMode();
    }
    function goBack() {
        changeEditMode();
    }
    function addSemester(newSemester: semester) {
        const exists = semesters.find(
            (semester: semester): boolean =>
                semester.season === newSemester.season &&
                semester.year === newSemester.year
        );
        if (exists === undefined) {
            setSemesters([...semesters, newSemester]);
        }
    }
    return (
        <Container>
            <Row>
                <Col>
                    <Form.Group controlId="formPlanName" as={Row}>
                        <Form.Label column sm={2}>
                            Name:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                data-testid="nameInputBox"
                                value={name}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setName(event.target.value || "")}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="formPlanCredits" as={Row}>
                        <Form.Label column sm={2}>
                            Total Credits:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                data-testid="creditsInputBox"
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
                    <EditSemesters
                        semesters={semesters}
                        setSemesters={setSemesters}
                    ></EditSemesters>
                    <div>
                        <Button
                            data-testid="addSemesterButton"
                            variant="success"
                            className="me-4"
                            onClick={showAddModal}
                        >
                            Add a Semester
                        </Button>
                        <AddSemester
                            show={show}
                            handleClose={closeAddModal}
                            addSemester={addSemester}
                        ></AddSemester>
                        <Button
                            data-testid="clearSemestersButton"
                            onClick={() => setSemesters([])}
                        >
                            Clear Semesters
                        </Button>
                    </div>
                    <Button
                        data-testid="editPlanSetCreditsToActual"
                        onClick={naturalCreditsPlan}
                        variant="warning"
                        className="me-4"
                    >
                        Set Credits to Actual
                    </Button>
                    <Button
                        data-testid="editPlanSaveButton"
                        onClick={saveChanges}
                        variant="success"
                        className="me-4"
                    >
                        Save
                    </Button>
                    <Button
                        data-testid="editPlanCancelButton"
                        onClick={goBack}
                        variant="warning"
                        className="me-5"
                    >
                        Cancel
                    </Button>
                    <Button
                        data-testid="editPlanDeleteButton"
                        onClick={() => deletePlan(plan.name)}
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
