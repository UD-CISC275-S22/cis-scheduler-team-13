import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { course } from "../interface/course";
import { plan } from "../interface/plan";
import { semester } from "../interface/semester";
import { cahCourses } from "../lists/cahCourses";
import { capstoneCourses } from "../lists/capstoneCourses";
import { ciscCoursesForReq } from "../lists/ciscCourses";
import { dleCourses } from "../lists/dleCourses";
import { fyeCourses } from "../lists/fyeCourses";
import { hccCourses } from "../lists/hccCourses";
import { mnstCourses } from "../lists/mnstCourses";
import { multicultCourses } from "../lists/multicultCourses";
import { sbsCourses } from "../lists/sbsCourses";
import { EditPlan } from "./EditPlan";
import { SeeRequirements } from "./SeeRequirementsModal";
import { SemesterList } from "./SemesterList";

export function ViewPlans({
    plan,
    editPlan,
    deletePlan
}: {
    plan: plan;
    editPlan: (name: string, newPlan: plan) => void;
    deletePlan: (name: string) => void;
}): JSX.Element {
    const [semesters, setSemesters] = useState<semester[]>(plan.semesters);
    const [editMode, setEditMode] = useState<boolean>(false);
    const [visible, setVisible] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);
    const showReqModal = () => setShow(true);
    const closeReqModal = () => setShow(false);
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
    const [capstone, setCapstone] = useState<boolean>(plan.capstone);

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
        showReqModal();
        checkAllRequirements();
        editPlan(plan.name, {
            ...plan,
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
            capstone: capstone
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
                    totalRequirementCredits + parseInt(course.credits))
        );
        if (totalRequirementCredits >= 124) {
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
                      totalRequirementCredits + parseInt(course.credits))
                : totalRequirementCredits
        );
        if (totalRequirementCredits >= 3) {
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
                      totalRequirementCredits + parseInt(course.credits))
                : totalRequirementCredits
        );
        if (totalRequirementCredits >= 3) {
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
                      totalRequirementCredits + parseInt(course.credits))
                : totalRequirementCredits
        );
        if (totalRequirementCredits >= 3) {
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
                      totalRequirementCredits + parseInt(course.credits))
                : totalRequirementCredits
        );
        if (totalRequirementCredits >= 3) {
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
                      totalRequirementCredits + parseInt(course.credits))
                : totalRequirementCredits
        );
        if (totalRequirementCredits >= 30) {
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
                      totalRequirementCredits + parseInt(course.credits))
                : totalRequirementCredits
        );
        if (totalRequirementCredits >= 3) {
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
                      totalRequirementCredits + parseInt(course.credits))
                : totalRequirementCredits
        );
        if (totalRequirementCredits >= 3) {
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
                      totalRequirementCredits + parseInt(course.credits))
                : totalRequirementCredits
        );
        if (totalRequirementCredits >= 3) {
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
                      totalRequirementCredits + parseInt(course.credits))
                : totalRequirementCredits
        );
        if (totalRequirementCredits >= 3) {
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
                      totalRequirementCredits + parseInt(course.credits))
                : totalRequirementCredits
        );
        if (totalRequirementCredits >= 3) {
            setSeminar(true);
        } else {
            setSeminar(false);
        }
    }

    function changeVisible(): void {
        setVisible(!visible);
    }

    function changeEditMode() {
        setEditMode(!editMode);
    }

    function editSemester(season: string, year: number, newSemester: semester) {
        setSemesters(
            semesters.map(
                (semester: semester): semester =>
                    semester.season === season && semester.year === year
                        ? newSemester
                        : semester
            )
        );
    }

    function deleteSemester(season: string, year: number) {
        setSemesters(
            semesters.filter(
                (semester: semester): boolean =>
                    semester.season !== season && semester.year !== year
            )
        );
    }

    return editMode ? (
        <EditPlan
            changeEditMode={changeEditMode}
            plan={plan}
            editPlan={editPlan}
            deletePlan={deletePlan}
            setSemesters={setSemesters}
            semesters={semesters}
        ></EditPlan>
    ) : (
        <Container>
            <Row>
                <Col>
                    <h3>{plan.name}</h3>
                </Col>
            </Row>
            <Row>
                <p>{plan.credits} Total Credits</p>
            </Row>
            <Row>
                <Button data-testid="planView" onClick={changeVisible}>
                    Open/Close Plan
                </Button>
                <Button data-testid="planEdit" onClick={changeEditMode}>
                    Edit Plan
                </Button>
                <Button
                    data-testid="editPlanViewRequirements"
                    onClick={updateRequirements}
                >
                    View Degree Requirements
                </Button>
                <SeeRequirements
                    show={show}
                    handleClose={closeReqModal}
                    plan={plan}
                ></SeeRequirements>
            </Row>
            {visible && (
                <Row>
                    <SemesterList
                        semesters={semesters}
                        editSemester={editSemester}
                        deleteSemester={deleteSemester}
                    ></SemesterList>
                </Row>
            )}
        </Container>
    );
}
