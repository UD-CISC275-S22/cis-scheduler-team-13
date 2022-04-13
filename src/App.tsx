import { stringify } from "querystring";
import React, { useState } from "react";
import "./App.css";
import { EditSemester } from "./components/EditSemester";
import { course } from "./interface/course";
import { plan } from "./interface/plan";
import { semester } from "./interface/semester";

export function App(): JSX.Element {
    const [courses, setCourses] = useState<course[]>([]);
    const [semesters, setSemesters] = useState<semester[]>([]);
    const [plans, setPlans] = useState<plan[]>([]);
    const [show, setShow] = useState<boolean>(false);
    const CloseAddModal = () => setShow(false);
    const ShowAddModal = () => setShow(true);

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

    return (
        <div className="App">
            <header className="App-header">
                Names of Group 13: Clay Wilfong, Mathias Heider, and Brandon
                Grier
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
