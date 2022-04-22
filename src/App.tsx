import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import { AddPlan } from "./components/AddPlanModal";
//import { AddSemester } from "./components/AddSemesterModal";
//import { EditSemester } from "./components/EditSemester";
import { PlanList } from "./components/PlanList";
//import { SemesterList } from "./components/SemesterList";
//import { course } from "./interface/course";
import { plan } from "./interface/plan";
import { semester } from "./interface/semester";
import { Form } from "react-bootstrap";

export function App(): JSX.Element {
    //const [courses, setCourses] = useState<course[]>([]);
    const [semesters, setSemesters] = useState<semester[]>([]);
    const [plans, setPlans] = useState<plan[]>([]);
    const [show, setShow] = useState<boolean>(false);
    const CloseAddModal = () => setShow(false);
    const ShowAddModal = () => setShow(true);
    //stuff belowe needs to be edited but im in a rush so o well
    const [emotion, setEmotion] = useState<string>("CISC181");
    function updateEmotion(event: React.ChangeEvent<HTMLSelectElement>) {
        setEmotion(event.target.value);
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
                        editSemester={editSemester}
                        deleteSemester={deleteSemester}
                        //deleteExistingSemesters={deleteExistingSemesters}
                    ></PlanList>
                </div>
                <div>
                    <Button
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
                    <Form.Group controlId="courseList">
                        <Form.Label>Course List</Form.Label>
                        <Form.Select value={emotion} onChange={updateEmotion}>
                            <option value="CISC181">CISC181</option>
                            <option value="CISC210">CISC210</option>
                            <option value="CISC220">CISC220</option>
                        </Form.Select>
                    </Form.Group>
                    This information: Code: CISC 181 Name: Introduction to
                    Computer Science II. Credits: 3
                </div>
            </div>
        </div>
    );
}

export default App;
