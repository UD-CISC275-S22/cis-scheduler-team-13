import React, { useState } from "react";
import "./App.css";
import { course } from "./interface/course";

export function App(): JSX.Element {
    {
        /*
    const [courses, setCourses] = useState<course[]>([]);
    */
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
