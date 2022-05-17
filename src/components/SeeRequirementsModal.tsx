import { plan } from "../interface/plan";
import React from "react";
import { Button, Modal } from "react-bootstrap";

export function SeeRequirements({
    plan,
    handleClose,
    show
}: {
    show: boolean;
    plan: plan;
    handleClose: () => void;
}) {
    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Degree Requirements</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* Requirments Here */}
                <h3>
                    Fulfills ENGL 110 Requirement: {plan.engl ? "✔️" : "❌"}
                </h3>
                <h3>
                    Fulfills Total Credit Requirement:{" "}
                    {plan.totalCredits ? "✔️" : "❌"}
                </h3>
                <h3>
                    Fulfills Multicultural Requirement:{" "}
                    {plan.multicultural ? "✔️" : "❌"}
                </h3>
                <h3>
                    Fulfills First Year Seminar Requirement:{" "}
                    {plan.seminar ? "✔️" : "❌"}
                </h3>
                <h3>
                    Fulfills Discovery Learning Experience Requirement:{" "}
                    {plan.dle ? "✔️" : "❌"}
                </h3>
                <h3>
                    Fulfills Capstone Requirement: {plan.capstone ? "✔️" : "❌"}
                </h3>
                <h3>
                    Fulfills Creative Arts and Humanities Requirement:{" "}
                    {plan.CAH ? "✔️" : "❌"}
                </h3>
                <h3>
                    Fulfills History and Cultural Change Requirement:{" "}
                    {plan.HCC ? "✔️" : "❌"}
                </h3>
                <h3>
                    Fulfills Math, Natural Science and Tech Requirement:{" "}
                    {plan.MNST ? "✔️" : "❌"}
                </h3>
                <h3>
                    Fulfills Social and Behavioral Sciences Requirement:{" "}
                    {plan.SBS ? "✔️" : "❌"}
                </h3>
                <h3>
                    Fulfills Computer Science Core Requirements:{" "}
                    {plan.core ? "✔️" : "❌"}
                </h3>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    data-testid="addPlanCancelButton"
                    variant="secondary"
                    onClick={handleClose}
                >
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
