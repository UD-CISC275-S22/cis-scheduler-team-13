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
                <h1>
                    Fulfills ENGL 110 Requirement: {plan.engl ? "✔️" : "❌"}
                </h1>
                <h2>
                    Fulfills Total Credit Requirement:{" "}
                    {plan.totalCredits ? "✔️" : "❌"}
                </h2>
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
