import { course } from "../interface/course";
import React, { useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";

export function AddCourse({
    handleClose,
    addCourse,
    show
}: {
    show: boolean;
    handleClose: () => void;
    addCourse: (newOne: course) => void;
}) {
    const [name, setName] = useState<string>("");
    const [id, setId] = useState<number>(0);
    const [credits, setCredits] = useState<number>(0);

    function saveChanges() {
        addCourse({
            courseName: name,
            courseID: id,
            credits: credits,
            prerequisites: []
        });
        handleClose();
    }

    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Course</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* Course Name */}
                <Form.Group controlId="formCourseName" as={Row}>
                    <Form.Label column sm={3}>
                        Course Name:
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
                {/* Course ID */}
                <Form.Group controlId="formCourseId" as={Row}>
                    <Form.Label column sm={3}>
                        Course ID:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={id}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setId(parseInt(event.target.value) || 0)}
                        />
                    </Col>
                </Form.Group>
                <Form.Group controlId="formCourseCredits" as={Row}>
                    <Form.Label column sm={3}>
                        Course Credits:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={credits}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setCredits(parseInt(event.target.value) || 0)}
                        />
                    </Col>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={saveChanges}>
                    Save Course
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
