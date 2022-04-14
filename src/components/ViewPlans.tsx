import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { plan } from "../interface/plan";
import { semester } from "../interface/semester";
import { EditPlan } from "./EditPlan";
import { SemesterList } from "./SemesterList";

export function ViewPlans({
    plan,
    editPlan,
    deletePlan,
    //semester,
    editSemester,
    deleteExistingSemesters,
    deleteSemester
}: {
    plan: plan;
    editPlan: (name: string, newPlan: plan) => void;
    deletePlan: (name: string) => void;
    //semester: semester;
    editSemester: (season: string, year: number, newSemester: semester) => void;
    deleteSemester: (season: string, year: number) => void;
    deleteExistingSemesters: (plan: plan) => void;
}): JSX.Element {
    const [semesters, setSemesters] = useState<semester[]>(plan.semesters);
    const [editMode, setEditMode] = useState<boolean>(false);
    const [visible, setVisible] = useState<boolean>(false);

    function changeVisible(): void {
        setVisible(!visible);
    }

    function changeEditMode() {
        setEditMode(!editMode);
    }

    return editMode ? (
        <EditPlan
            changeEditMode={changeEditMode}
            plan={plan}
            editPlan={editPlan}
            deletePlan={deletePlan}
            setSemesters={setSemesters}
            semesters={semesters}
            deleteExistingSemesters={deleteExistingSemesters}
        ></EditPlan>
    ) : (
        <Container>
            <Row>
                <Col>
                    <h3>{plan.name}</h3>
                </Col>
            </Row>
            <Row>
                <p>{plan.credits} Total Credits</p>
            </Row>
            <Row>
                <Button onClick={changeVisible}>View Plan</Button>
                <Button onClick={changeEditMode}>Edit</Button>
            </Row>
            {visible && (
                <Row>
                    <SemesterList
                        semesters={semesters}
                        editSemester={editSemester}
                        deleteSemester={deleteSemester}
                    ></SemesterList>
                </Row>
            )}
        </Container>
    );
}
