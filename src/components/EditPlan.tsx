import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
//import { course } from "../interface/course";
import { plan } from "../interface/plan";
import { semester } from "../interface/semester";
//import { cahCourses } from "../lists/cahCourses";
//import { capstoneCourses } from "../lists/capstoneCourses";
//import { ciscCoursesForReq } from "../lists/ciscCourses";
//import { ciscCourses } from "../lists/ciscCoursesForSearch";
//import { dleCourses } from "../lists/dleCourses";
//import { fyeCourses } from "../lists/fyeCourses";
//import { hccCourses } from "../lists/hccCourses";
//import { mnstCourses } from "../lists/mnstCourses";
//import { multicultCourses } from "../lists/multicultCourses";
//import { sbsCourses } from "../lists/sbsCourses";
import { AddSemester } from "./AddSemesterModal";
import { EditSemesters } from "./EditSemester";
//import { SeeRequirements } from "./SeeRequirementsModal";

export function EditPlan({
    changeEditMode,
    plan,
    editPlan,
    deletePlan,
    setSemesters,
    semesters
}: {
    changeEditMode: () => void;
    plan: plan;
    editPlan: (name: string, newPlan: plan) => void;
    deletePlan: (name: string) => void;
    setSemesters: (semesters: semester[]) => void;
    semesters: semester[];
}): JSX.Element {
    const [show, setShow] = useState<boolean>(false);
    const CloseAddModal = () => setShow(false);
    const ShowAddModal = () => setShow(true);
    //const [showReq, setShowReq] = useState<boolean>(false);
    //const ShowReqModal = () => setShowReq(true);
    //const CloseReqModal = () => setShowReq(false);
    const [name, setName] = useState<string>(plan.name);
    const [credits, setCredits] = useState<number>(plan.credits);
    /*
    const [engl, setEngl] = useState<boolean>(plan.engl);
    const [multicultural, setMulticultural] = useState<boolean>(
        plan.multicultural
    );
    const [seminar, setSeminar] = useState<boolean>(plan.seminar);
    const [dle, setDle] = useState<boolean>(plan.dle);
    const [CAH, setCAH] = useState<boolean>(plan.CAH);
    const [HCC, setHCC] = useState<boolean>(plan.HCC);
    const [SBS, setSBS] = useState<boolean>(plan.SBS);
    const [MNST, setMNST] = useState<boolean>(plan.MNST);
    const [totalCredits, setTotalCredits] = useState<boolean>(
        plan.totalCredits
    );
    const [core, setCore] = useState<boolean>(plan.core);
    //const [relatedWork, setRelatedWork] = useState<boolean>(plan.relatedWork);
    //const [technical, setTechnical] = useState<boolean>(plan.technical);
    const [capstone, setCapstone] = useState<boolean>(plan.capstone);
    //const [labScience, setLabScience] = useState<boolean>(plan.labScience);
    //const [additionalScience, setAdditionalScience] = useState<boolean>(
    //    plan.additionalScience
    //);
*/
    function naturalCreditsPlan() {
        const creditList = semesters.map(
            (semester: semester): number => semester.credits
        );
        const sum = creditList.reduce(
            (currentTotal: number, credits: number) => currentTotal + credits,
            0
        );
        setCredits(sum);
    }
    /*
    function checkAllRequirements() {
        checkForMulticultural();
        checkForCAH();
        checkForCapstone();
        checkForCiscCourses();
        checkForHCC();
        checkForSBS();
        checkForDLE();
        checkForMNST();
        checkForSeminar();
        checkForEngl();
        checkForTotalCredits();
    }

    function updateRequirements() {
        checkAllRequirements();
        editPlan(plan.name, {
            ...plan,
            name: name,
            credits: credits,
            semesters: semesters,
            engl: engl,
            multicultural: multicultural,
            seminar: seminar,
            dle: dle,
            CAH: CAH,
            HCC: HCC,
            SBS: SBS,
            MNST: MNST,
            totalCredits: totalCredits,
            core: core,
            //relatedWork: relatedWork,
            //technical: technical,
            capstone: capstone
            //labScience: labScience,
            //additionalScience: additionalScience
        });
    }

    function checkForTotalCredits() {
        let courseListSingleArray: course[] = [];
        semesters.map(
            (semester: semester): course[] =>
                (courseListSingleArray = [
                    ...courseListSingleArray,
                    ...semester.courses
                ])
        );
        let totalRequirementCredits = 0;
        courseListSingleArray.map(
            (course: course): number =>
                (totalRequirementCredits =
                    Number(totalRequirementCredits) + Number(course.credits))
        );
        if (totalRequirementCredits > 2) {
            setTotalCredits(true);
        } else {
            setTotalCredits(false);
        }
    }

    function checkForEngl() {
        let courseListSingleArray: course[] = [];
        semesters.map(
            (semester: semester): course[] =>
                (courseListSingleArray = [
                    ...courseListSingleArray,
                    ...semester.courses
                ])
        );
        let totalRequirementCredits = 0;
        courseListSingleArray.map((course: course): number =>
            course.code === "ENGL 110"
                ? (totalRequirementCredits =
                      Number(totalRequirementCredits) + Number(course.credits))
                : totalRequirementCredits
        );
        if (totalRequirementCredits > 2) {
            setEngl(true);
        } else {
            setEngl(false);
        }
    }
    function checkForMulticultural() {
        let courseListSingleArray: course[] = [];
        semesters.map(
            (semester: semester): course[] =>
                (courseListSingleArray = [
                    ...courseListSingleArray,
                    ...semester.courses
                ])
        );
        let totalRequirementCredits = 0;
        courseListSingleArray.map((course: course): number =>
            multicultCourses.includes(course)
                ? (totalRequirementCredits =
                      Number(totalRequirementCredits) + Number(course.credits))
                : totalRequirementCredits
        );
        if (totalRequirementCredits > 2) {
            setMulticultural(true);
        } else {
            setMulticultural(false);
        }
    }

    function checkForCAH() {
        let courseListSingleArray: course[] = [];
        semesters.map(
            (semester: semester): course[] =>
                (courseListSingleArray = [
                    ...courseListSingleArray,
                    ...semester.courses
                ])
        );
        let totalRequirementCredits = 0;
        courseListSingleArray.map((course: course): number =>
            cahCourses.includes(course)
                ? (totalRequirementCredits =
                      Number(totalRequirementCredits) + Number(course.credits))
                : totalRequirementCredits
        );
        if (totalRequirementCredits > 2) {
            setCAH(true);
        } else {
            setCAH(false);
        }
    }

    function checkForCapstone() {
        let courseListSingleArray: course[] = [];
        semesters.map(
            (semester: semester): course[] =>
                (courseListSingleArray = [
                    ...courseListSingleArray,
                    ...semester.courses
                ])
        );
        let totalRequirementCredits = 0;
        courseListSingleArray.map((course: course): number =>
            capstoneCourses.includes(course)
                ? (totalRequirementCredits =
                      Number(totalRequirementCredits) + Number(course.credits))
                : totalRequirementCredits
        );
        if (totalRequirementCredits > 2) {
            setCapstone(true);
        } else {
            setCapstone(false);
        }
    }

    function checkForCiscCourses() {
        let courseListSingleArray: course[] = [];
        semesters.map(
            (semester: semester): course[] =>
                (courseListSingleArray = [
                    ...courseListSingleArray,
                    ...semester.courses
                ])
        );
        let totalRequirementCredits = 0;
        courseListSingleArray.map((course: course): number =>
            ciscCoursesForReq.includes(course)
                ? (totalRequirementCredits =
                      Number(totalRequirementCredits) + Number(course.credits))
                : totalRequirementCredits
        );
        if (totalRequirementCredits > 2) {
            setCore(true);
        } else {
            setCore(false);
        }
    }

    function checkForDLE() {
        let courseListSingleArray: course[] = [];
        semesters.map(
            (semester: semester): course[] =>
                (courseListSingleArray = [
                    ...courseListSingleArray,
                    ...semester.courses
                ])
        );
        let totalRequirementCredits = 0;
        courseListSingleArray.map((course: course): number =>
            dleCourses.includes(course)
                ? (totalRequirementCredits =
                      Number(totalRequirementCredits) + Number(course.credits))
                : totalRequirementCredits
        );
        if (totalRequirementCredits > 2) {
            setDle(true);
        } else {
            setDle(false);
        }
    }

    function checkForSBS() {
        let courseListSingleArray: course[] = [];
        semesters.map(
            (semester: semester): course[] =>
                (courseListSingleArray = [
                    ...courseListSingleArray,
                    ...semester.courses
                ])
        );
        let totalRequirementCredits = 0;
        courseListSingleArray.map((course: course): number =>
            sbsCourses.includes(course)
                ? (totalRequirementCredits =
                      Number(totalRequirementCredits) + Number(course.credits))
                : totalRequirementCredits
        );
        if (totalRequirementCredits > 2) {
            setSBS(true);
        } else {
            setSBS(false);
        }
    }

    function checkForHCC() {
        let courseListSingleArray: course[] = [];
        semesters.map(
            (semester: semester): course[] =>
                (courseListSingleArray = [
                    ...courseListSingleArray,
                    ...semester.courses
                ])
        );
        let totalRequirementCredits = 0;
        courseListSingleArray.map((course: course): number =>
            hccCourses.includes(course)
                ? (totalRequirementCredits =
                      Number(totalRequirementCredits) + Number(course.credits))
                : totalRequirementCredits
        );
        if (totalRequirementCredits > 2) {
            setHCC(true);
        } else {
            setHCC(false);
        }
    }

    function checkForMNST() {
        let courseListSingleArray: course[] = [];
        semesters.map(
            (semester: semester): course[] =>
                (courseListSingleArray = [
                    ...courseListSingleArray,
                    ...semester.courses
                ])
        );
        let totalRequirementCredits = 0;
        courseListSingleArray.map((course: course): number =>
            mnstCourses.includes(course)
                ? (totalRequirementCredits =
                      Number(totalRequirementCredits) + Number(course.credits))
                : totalRequirementCredits
        );
        if (totalRequirementCredits > 2) {
            setMNST(true);
        } else {
            setMNST(false);
        }
    }
    function checkForSeminar() {
        let courseListSingleArray: course[] = [];
        semesters.map(
            (semester: semester): course[] =>
                (courseListSingleArray = [
                    ...courseListSingleArray,
                    ...semester.courses
                ])
        );
        let totalRequirementCredits = 0;
        courseListSingleArray.map((course: course): number =>
            fyeCourses.includes(course)
                ? (totalRequirementCredits =
                      Number(totalRequirementCredits) + Number(course.credits))
                : totalRequirementCredits
        );
        if (totalRequirementCredits > 2) {
            setSeminar(true);
        } else {
            setSeminar(false);
        }
    }
*/
    function saveChanges() {
        editPlan(plan.name, {
            ...plan,
            name: name,
            credits: credits, //possibly edit this for credits later on
            semesters: semesters
        });
        naturalCreditsPlan();
        editPlan(plan.name, {
            ...plan,
            name: name,
            credits: credits,
            semesters: semesters
        });
        changeEditMode();
    }
    function goBack() {
        changeEditMode();
    }
    function addSemester(newSemester: semester) {
        const exists = semesters.find(
            (semester: semester): boolean =>
                semester.season === newSemester.season &&
                semester.year === newSemester.year
        );
        if (exists === undefined) {
            setSemesters([...semesters, newSemester]);
        }
    }
    return (
        <Container>
            <Row>
                <Col>
                    <Form.Group controlId="formPlanName" as={Row}>
                        <Form.Label column sm={2}>
                            Name:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                data-testid="nameInputBox"
                                value={name}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setName(event.target.value || "")}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="formPlanCredits" as={Row}>
                        <Form.Label column sm={2}>
                            Total Credits:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                data-testid="creditsInputBox"
                                value={credits}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) =>
                                    setCredits(
                                        parseInt(event.target.value) || 0
                                    )
                                }
                            />
                        </Col>
                    </Form.Group>
                    <EditSemesters
                        semesters={semesters}
                        setSemesters={setSemesters}
                    ></EditSemesters>
                    <div>
                        <Button
                            data-testid="addSemesterButton"
                            variant="success"
                            className="me-4"
                            onClick={ShowAddModal}
                        >
                            Add a Semester
                        </Button>
                        <AddSemester
                            show={show}
                            handleClose={CloseAddModal}
                            addSemester={addSemester}
                        ></AddSemester>
                        <Button
                            data-testid="clearSemestersButton"
                            onClick={() => setSemesters([])}
                        >
                            Clear Semesters
                        </Button>
                    </div>
                    <Button
                        data-testid="editPlanSetCreditsToActual"
                        onClick={naturalCreditsPlan}
                        variant="warning"
                        className="me-4"
                    >
                        Set Credits to Actual
                    </Button>
                    <Button
                        data-testid="editPlanSaveButton"
                        onClick={saveChanges}
                        variant="success"
                        className="me-4"
                    >
                        Save
                    </Button>
                    <Button
                        data-testid="editPlanCancelButton"
                        onClick={goBack}
                        variant="warning"
                        className="me-5"
                    >
                        Cancel
                    </Button>
                    <Button
                        data-testid="editPlanDeleteButton"
                        onClick={() => deletePlan(plan.name)}
                        variant="danger"
                        className="me-8"
                    >
                        Delete
                    </Button>
                    {/*
                    <Button
                        data-testid="editPlanViewRequirements"
                        onClick={() => {
                            updateRequirements;
                            ShowReqModal;
                        }}
                    >
                        View Requirements
                    </Button>
                    <SeeRequirements
                        showReq={showReq}
                        handleClose={CloseReqModal}
                        plan={plan}
                    ></SeeRequirements>
                    */}
                </Col>
            </Row>
        </Container>
    );
}
