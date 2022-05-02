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
}: //deleteExistingSemesters
{
    changeEditMode: () => void;
    plan: plan;
    editPlan: (name: string, newPlan: plan) => void;
    deletePlan: (name: string) => void;
    setSemesters: (semesters: semester[]) => void;
    semesters: semester[];
    //deleteExistingSemesters: (plan: plan) => void;
}): JSX.Element {
    const [show, setShow] = useState<boolean>(false);
    const CloseAddModal = () => setShow(false);
    const ShowAddModal = () => setShow(true);
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
        editPlan(plan.name, {
            ...plan,
            name: name,
            credits: credits, //possibly edit this for credits later on
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
                            id="edit-plan-add-semester"
                            variant="success"
                            className="me-4"
                            onClick={ShowAddModal}
                        >
                            Add a Semester
                        </Button>
                        <AddSemester
                            show={show}
                            handleClose={CloseAddModal}
                            addSemester={addSemester}
                        ></AddSemester>
                        <Button onClick={() => setSemesters([])}>
                            Clear Semesters
                        </Button>
                    </div>
                    <Button
                        onClick={naturalCreditsPlan}
                        variant="warning"
                        className="me-4"
                    >
                        Set Credits to Actual
                    </Button>
                    <Button
                        id="edit-plan-save"
                        onClick={saveChanges}
                        variant="success"
                        className="me-4"
                    >
                        Save
                    </Button>
                    <Button
                        id="edit-plan-cancel"
                        onClick={goBack}
                        variant="warning"
                        className="me-5"
                    >
                        Cancel
                    </Button>
                    <Button
                        id="edit-plan-delete"
                        onClick={() => deletePlan(plan.name)}
                        variant="danger"
                        className="me-8"
                    >
                        Delete
                    </Button>
                    {/*
                    <Button
                        onClick={() => deleteExistingSemesters(plan)}
                        variant="success"
                        className="me-4"
                    >
                        Clear Existing Semesters
                    </Button>
                    */}
                </Col>
            </Row>
        </Container>
    );
}
