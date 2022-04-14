import { plan } from "../interface/plan";
import React, { useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";

export function addPlan({
    close,
    addPlan,
    appears
}: {
    appears: boolean;
    close: () => void;
    addPlan: (newOne: plan) => void;
}) {
    const [name, setName] = useState<string>("");
    const [id, setId] = useState<number>(0);

    function saveChanges() {
        addPlan({
            name: name,
            credits: 0,
            semesters: []
        });
        close();
    }

    return (
        <Modal appears={appears} onHide={close} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Plan</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* Plan Name */}
                <Form.Group controlId="formPlanName" as={Row}>
                    <Form.Label column sm={3}>
                        Plan Name:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={name}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setName(event.target.value)}
                        />
                    </Col>
                </Form.Group>
                {/* Plan ID */}
                <Form.Group controlId="formSemesterId" as={Row}>
                    <Form.Label column sm={3}>
                        Plan ID:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={id}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setId(parseInt(event.target.value))}
                        />
                    </Col>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={close}>
                    Close
                </Button>
                <Button variant="primary" onClick={saveChanges}>
                    Save Plan
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
