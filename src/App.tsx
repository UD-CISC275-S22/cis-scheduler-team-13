import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import { AddPlan } from "./components/AddPlanModal";
import { PlanList } from "./components/PlanList";
import { course } from "./interface/course";
import { plan } from "./interface/plan";
import { Form } from "react-bootstrap";
import { ciscCourses } from "./lists/ciscCourses";
//import { multicultCourses } from "./lists/multicultCourses";
//import { dleCourses } from "./lists/dleCourses";
//import { fyeCourses } from "./lists/fyeCourses";
//import { capstoneCourses } from "./lists/capstoneCourses";
//import { cahCourses } from "./lists/cahCourses";
//import { hccCourses } from "./lists/hccCourses";
//import { sbsCourses } from "./lists/sbsCourses";
//import { mnstCourses } from "./lists/mnstCourses";

export function App(): JSX.Element {
    const [plans, setPlans] = useState<plan[]>([]);
    const [show, setShow] = useState<boolean>(false);
    const CloseAddModal = () => setShow(false);
    const ShowAddModal = () => setShow(true);
    const ciscCourse = [...ciscCourses()];
    //const multicultCourse = [...multicultCourses()];
    //const dleCourses = [...dleCourses()];
    //const fyeCourses = [...fyeCourses()];
    //const cahCourses = [...cahCourses()];
    //const hccCourses = [...hccCourses()];
    //const sbsCourses = [...sbsCourses()];
    //const mnstCourses = [...mnstCourses()];
    //const capstoneCourses = [...capstoneCourses()];
    //stuff belowe needs to be edited but im in a rush so o well
    const [emotion, setEmotion] = useState<string>("CISC181");
    //const [courseCS, setCourse] = useState<course>(ciscCourses[0]);
    function findObject(code: string) {
        const csCourse = ciscCourse.find(
            (course: course): boolean => course.code == code
        );
        return csCourse;
    }
    function updateEmotion(event: React.ChangeEvent<HTMLSelectElement>) {
        setEmotion(event.target.value);
    }
    /*function changeCourse(code: string) {
        const oneCourse = ciscCourses.find(
            (cscourse: course): boolean => cscourse.code !== code
        );
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        setCourse(oneCourse!);
    }
    */
    /*
    function addSemester(newSemester: semester) {
        const existing = semesters.find(
            (semester: semester): boolean =>
                semester.season === newSemester.season &&
                semester.year === newSemester.year
        );
        if (existing === undefined) {
            setSemesters([...semesters, newSemester]);
        }
    }
*/
    function editPlan(name: string, newPlan: plan) {
        setPlans(
            plans.map(
                (plan: plan): plan => (plan.name === name ? newPlan : plan)
            )
        );
    }

    function deletePlan(name: string) {
        setPlans(plans.filter((plan: plan): boolean => plan.name !== name));
    }
    /*
    function deleteExistingSemesters(plan: plan) {
        setSemesters([]);
    }
    */
    function addPlan(newPlan: plan) {
        const existing = plans.find(
            (plan: plan): boolean => plan.name === newPlan.name
        );
        if (existing === undefined) {
            setPlans([...plans, newPlan]);
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                Degree Planner by Clay Wilfong, Mathias Heider, and Brandon
                Grier
            </header>
            <p>WELCOME!</p>
            <p>
                We Understand That Degrees Are Complicated, We Are Here To Help.
            </p>
            <p>
                If you are new here, start by creating a new degree plan. Press
                Edit on the degree plan to begin adding your semesters and
                courses.
            </p>
            <div>
                <div>
                    <PlanList
                        plans={plans}
                        editPlan={editPlan}
                        deletePlan={deletePlan}
                    ></PlanList>
                </div>
                <div>
                    <Button
                        data-testid="addNewPlanButton"
                        variant="success"
                        className="m-4"
                        onClick={ShowAddModal}
                    >
                        Add New Plan
                    </Button>
                    <AddPlan
                        show={show}
                        handleClose={CloseAddModal}
                        addPlan={addPlan}
                    ></AddPlan>
                </div>
                <div>
                    <Form.Group
                        controlId="courseList"
                        data-testid="courseCatalog"
                    >
                        <Form.Label>Course List</Form.Label>
                        <Form.Select
                            data-testid="courseCatalogForm"
                            value={emotion}
                            onChange={updateEmotion}
                        >
                            {ciscCourse.map((ciscCourse: course) => (
                                <option
                                    key={ciscCourse.code}
                                    value={ciscCourse.code}
                                >
                                    {ciscCourse.code}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    Code: {findObject(emotion)?.code} Name:{" "}
                    {findObject(emotion)?.name} Credits:{" "}
                    {findObject(emotion)?.credits}
                </div>
            </div>
        </div>
    );
}

export default App;
