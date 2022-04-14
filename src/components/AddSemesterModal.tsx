import { semester } from "../interface/semester";
import React, { useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";

export function AddSemester({
    handleClose,
    addSemester,
    show
}: {
    show: boolean;
    handleClose: () => void;
    addSemester: (newOne: semester) => void;
}) {
    const seasons = ["Summer", "Spring", "Fall", "Winter"];
    const [season, setSeason] = useState<string>("");
    const [year, setYear] = useState<number>(0);

    function saveChanges() {
        addSemester({
            season: season,
            year: year,
            credits: 0,
            courses: []
        });
        handleClose();
    }

    function updateSeason(event: React.ChangeEvent<HTMLInputElement>) {
        setSeason(event.target.value);
    }

    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Semester</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* Semester Season */}
                <Form.Group controlId="picking-a-season" as={Row}>
                    {seasons.map((option: string) => (
                        <Form.Check
                            inline
                            key={option}
                            value={option}
                            type="radio"
                            name={option}
                            onChange={updateSeason}
                            id="season-checker"
                            label={option}
                        />
                    ))}
                </Form.Group>
                {/* Semester Year */}
                <Form.Group controlId="formSemesterId" as={Row}>
                    <Form.Label column sm={3}>
                        Semester ID:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={year}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setYear(parseInt(event.target.value))}
                        />
                    </Col>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={saveChanges}>
                    Save Quiz
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
