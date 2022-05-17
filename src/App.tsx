import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import { AddPlan } from "./components/AddPlanModal";
import { PlanList } from "./components/PlanList";
import { course } from "./interface/course";
import { plan } from "./interface/plan";
import { Form } from "react-bootstrap";
import { multicultCourses } from "./lists/multicultCourses";
import { dleCourses } from "./lists/dleCourses";
import { fyeCourses } from "./lists/fyeCourses";
import { cahCourses } from "./lists/cahCourses";
import { hccCourses } from "./lists/hccCourses";
import { mnstCourses } from "./lists/mnstCourses";
import { ciscCoursesForReq } from "./lists/ciscCourses";
import { sbsCourses } from "./lists/sbsCourses";
import { capstoneCourses } from "./lists/capstoneCourses";

export function App(): JSX.Element {
    const [plans, setPlans] = useState<plan[]>([]);
    const [show, setShow] = useState<boolean>(false);
    const closeAddModal = () => setShow(false);
    const showAddModal = () => setShow(true);

    const [emotion, setEmotion] = useState<string>("");
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

    function findObject(code: string) {
        const selectedCourse = allCourses.find(
            (course: course): boolean => course.code == code
        );
        return selectedCourse;
    }
    function updateEmotion(event: React.ChangeEvent<HTMLSelectElement>) {
        setEmotion(event.target.value);
    }

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
            <h1>WELCOME!</h1>
            <h3>
                We Understand That Degrees Are Complicated, We Are Here To Help.
            </h3>
            <h6>
                If you are new here, start by creating a new degree plan.
                Opening/Closing the degree plan or semester may not seem like
                its working at first. That would be because that plan/semester
                is empty! Press Edit on the degree plan to start adding your
                semesters and courses. Pressing Edit also allows you to see the
                other features available to you as part of this degree planner!
            </h6>
            <h6>
                (Be sure to click Edit Plan, then Save, then View Degree
                Requirements to accurately see what requirements you have
                left!!)
            </h6>
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
                        onClick={showAddModal}
                    >
                        Add New Plan
                    </Button>
                    <AddPlan
                        show={show}
                        handleClose={closeAddModal}
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
                            {allCourses.map((ciscCourse: course) => (
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
