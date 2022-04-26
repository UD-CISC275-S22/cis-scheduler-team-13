import { semester } from "../interface/semester";
import React, { useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
//import { idText } from "typescript";

export function AddSemester({
    handleClose,
    addSemester,
    show
}: {
    show: boolean;
    handleClose: () => void;
    addSemester: (newOne: semester) => void;
}) {
    const [season, setSeason] = useState<string>("");
    const [year, setYear] = useState<number>(0);
    //const [id, setId] = useState<number>(0);

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
                <Form.Group controlId="picking-a-season">
                    <Form.Check
                        inline
                        value="Winter"
                        type="radio"
                        name="Winter"
                        onChange={updateSeason}
                        id="season-winter"
                        label="Winter"
                        checked={season === "Winter"}
                    ></Form.Check>
                    <Form.Check
                        inline
                        value="Spring"
                        type="radio"
                        name="Spring"
                        onChange={updateSeason}
                        id="season-spring"
                        label="Spring"
                        checked={season === "Spring"}
                    ></Form.Check>
                    <Form.Check
                        inline
                        value="Summer"
                        type="radio"
                        name="Summer"
                        onChange={updateSeason}
                        id="season-summer"
                        label="Summer"
                        checked={season === "Summer"}
                    ></Form.Check>
                    <Form.Check
                        inline
                        value="Fall"
                        type="radio"
                        name="Fall"
                        onChange={updateSeason}
                        id="season-fall"
                        label="Fall"
                        checked={season === "Fall"}
                    ></Form.Check>
                </Form.Group>
                {/* Semester Year */}
                <Form.Group controlId="formSemesterYear" as={Row}>
                    <Form.Label column sm={3}>
                        Semester Year:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={year}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setYear(parseInt(event.target.value) || 0)}
                        />
                    </Col>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={saveChanges}>
                    Save Semester
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
