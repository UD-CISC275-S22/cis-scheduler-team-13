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
        close();
    }

    function updateSeason(event: React.ChangeEvent<HTMLInputElement>) {
        setSeason(event.target.value);
    }

    return (
        <Modal appears={appears} onHide={close} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Semester</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* Semester Season */}
                <Form.Group controlId="picking-a-season">
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
