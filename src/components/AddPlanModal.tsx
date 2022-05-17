import { plan } from "../interface/plan";
import React, { useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";

export function AddPlan({
    handleClose,
    addPlan,
    show
}: {
    show: boolean;
    handleClose: () => void;
    addPlan: (newOne: plan) => void;
}) {
    const [name, setName] = useState<string>("");

    function saveChanges() {
        addPlan({
            name: name,
            credits: 0,
            semesters: [],
            engl: false,
            multicultural: false,
            seminar: false,
            dle: false,
            CAH: false,
            HCC: false,
            SBS: false,
            MNST: false,
            totalCredits: false,
            core: false,
            capstone: false
        });
        handleClose();
    }

    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Plan</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* Plan Name */}
                <Form.Group
                    data-testid="planNameInputBox"
                    controlId="formPlanName"
                    as={Row}
                >
                    <Form.Label column sm={3}>
                        Plan Name:
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
            </Modal.Body>
            <Modal.Footer>
                <Button
                    data-testid="addPlanCancelButton"
                    variant="secondary"
                    onClick={handleClose}
                >
                    Close
                </Button>
                <Button
                    data-testid="savePlanButton"
                    variant="primary"
                    onClick={saveChanges}
                >
                    Save Plan
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
