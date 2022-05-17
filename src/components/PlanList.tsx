import React from "react";
import { Stack } from "react-bootstrap";
import { plan } from "../interface/plan";
import { ViewPlans } from "./ViewPlans";

export function PlanList({
    plans,
    editPlan,
    deletePlan
}: {
    plans: plan[];
    editPlan: (name: string, newPlan: plan) => void;
    deletePlan: (name: string) => void;
}): JSX.Element {
    return (
        <Stack gap={3}>
            {plans.map((plan: plan) => (
                <div key={plan.name} className="bg-light border m-2 p-2">
                    <ViewPlans
                        plan={plan}
                        editPlan={editPlan}
                        deletePlan={deletePlan}
                    ></ViewPlans>
                </div>
            ))}
        </Stack>
    );
}
