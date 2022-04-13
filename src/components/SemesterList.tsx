import React from "react";
import { Stack } from "react-bootstrap";
import { semester } from "../interface/semester";
import { ViewSemesters } from "./ViewSemesters";

export function SemesterList({
    semesters,
    editSemester
}: /*eleteSemester*/
{
    semesters: semester[];
    editSemester: (season: string, year: number, newSemester: semester) => void;
    deleteSemester: (season: string, year: number) => void;
}): JSX.Element {
    return (
        <Stack gap={3}>
            {semesters.map((semester: semester) => (
                <div
                    key={semester.season && semester.year}
                    className="bg-light border m-2 p-2"
                >
                    <ViewSemesters
                        semester={semester}
                        editSemester={editSemester}
                        /*deleteSemester={deleteSemester}*/
                    ></ViewSemesters>
                </div>
            ))}
        </Stack>
    );
}
