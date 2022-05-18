import { course } from "../interface/course";
import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { multicultCourses } from "../lists/multicultCourses";
import { dleCourses } from "../lists/dleCourses";
import { fyeCourses } from "../lists/fyeCourses";
import { cahCourses } from "../lists/cahCourses";
import { hccCourses } from "../lists/hccCourses";
import { mnstCourses } from "../lists/mnstCourses";
import { ciscCoursesForReq } from "../lists/ciscCourses";
import { sbsCourses } from "../lists/sbsCourses";
import { capstoneCourses } from "../lists/capstoneCourses";

export function AddCourse({
    handleClose,
    addCourse,
    show
}: {
    show: boolean;
    handleClose: () => void;
    addCourse: (newOne: course) => void;
}) {
    const [emotion, setEmotion] = useState<string>("    ");
    function updateEmotion(event: React.ChangeEvent<HTMLSelectElement>) {
        setEmotion(event.target.value);
    }
    const allCourses = ciscCoursesForReq.concat(
        multicultCourses,
        dleCourses,
        fyeCourses,
        cahCourses,
        hccCourses,
        mnstCourses,
        sbsCourses,
        capstoneCourses
    );
    const uniqueCode: string[] = [];

    const unique = allCourses.filter((element) => {
        const isDuplicate = uniqueCode.includes(element.code);

        if (!isDuplicate) {
            uniqueCode.push(element.code);

            return true;
        }

        return false;
    });

    function findObject(code: string) {
        const selectedCourse = unique.find(
            (course: course): boolean => course.code == code
        );
        if (selectedCourse == undefined) {
            return {
                code: "CISC 101",
                name: "Principles of Computing",
                descr: "Introduces students to the central ideas of computing and computer science including programs, algorithms, abstraction, the internet, and information systems. Instills ideas and practices of computational thinking and engages students in activities that show how computing and computer science change the world. Explores computing as a creative activity and empowers students to apply computational thinking to all disciplines including the arts, humanities, business, social and physical sciences, health, and entertainment.",
                credits: " 3",
                preReq: "",
                restrict: "",
                breadth:
                    "University: Mathematics, Natural Sciences and Technology; A&S: GROUP D: A&S Math, Nat Sci & Technology",
                typ: "Fall, Winter and Spring"
            };
        } else {
            return selectedCourse;
        }
    }

    function saveChanges() {
        addCourse(findObject(emotion));
        handleClose();
    }

    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Course</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* Course Name */}
                <Form.Group controlId="courseList">
                    <Form.Label>Course List</Form.Label>
                    <Form.Select value={emotion} onChange={updateEmotion}>
                        {unique.map((ciscCourse: course) => (
                            <option
                                key={ciscCourse.code}
                                value={ciscCourse.code}
                            >
                                {ciscCourse.code}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                {/* Course ID */}
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
