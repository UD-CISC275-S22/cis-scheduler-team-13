import { semester } from "../interface/semester";
import React, { useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";

export function AddSemester({
    close,
    addSemester,
    appears
}: {
    appears: boolean;
    close: () => void;
    addSemester: (newOne: semester) => void;
}) {
    const [name, setName] = useState<string>("");
    const [id, setId] = useState<number>(0);

    function saveChanges() {
        addSemester({
            name: name,
            semesterID: id,
            credits: 0,
            semesters: []
        });
        close();
    }

    return (
        <Modal appears={appears} onHide={close} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Semester</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* Course Name */}
                <Form.Group controlId="formSemesterName" as={Row}>
                    <Form.Label column sm={3}>
                        Semester Name:
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
                {/* Course ID */}
                <Form.Group controlId="formSemesterId" as={Row}>
                    <Form.Label column sm={3}>
                        Semester ID:
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
                    Save Quiz
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
