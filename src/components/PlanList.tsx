import React from "react";
import { Stack } from "react-bootstrap";
import { plan } from "../interface/plan";
import { ViewPlans } from "./ViewPlans";
import { semester } from "../interface/semester";

export function PlanList({
    plans,
    editPlan,
    deletePlan,
    editSemester,
    deleteSemester
}: //deleteExistingSemesters
{
    plans: plan[];
    editPlan: (name: string, newPlan: plan) => void;
    deletePlan: (name: string) => void;
    editSemester: (season: string, year: number, newSemester: semester) => void;
    deleteSemester: (season: string, year: number) => void;
    //deleteExistingSemesters: (plan: plan) => void;
}): JSX.Element {
    return (
        <Stack gap={3}>
            {plans.map((plan: plan) => (
                <div key={plan.name} className="bg-light border m-2 p-2">
                    <ViewPlans
                        plan={plan}
                        editPlan={editPlan}
                        deletePlan={deletePlan}
                        editSemester={editSemester}
                        deleteSemester={deleteSemester}
                        //deleteExistingSemesters={deleteExistingSemesters}
                    ></ViewPlans>
                </div>
            ))}
        </Stack>
    );
}
