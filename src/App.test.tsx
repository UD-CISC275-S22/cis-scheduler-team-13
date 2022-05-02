//import React from "react";
import { screen } from "@testing-library/react";
//import App from "./App";

test("The Start Button Appears", () => {
    const startButton = screen.getAllByRole("button", {
        name: /Add New Plan/i
    })[0];
    startButton.click();
    expect(screen.getByText("Plan Name:"));
    expect(screen.getByText("Add New Plan"));
});

test("Close Button Works", () => {
    const cancelButton = screen.getAllByRole("button", {
        name: /Cancel/i
    })[0];
    cancelButton.click();
    expect(screen.getByText("Course List"));
});

test("Save Plan Works", () => {
    const savePlan = screen.getAllByRole("button", {
        name: /Save Plan/i
    })[0];
    savePlan.click();
    expect(screen.getByTestId("plan-edit"));
    expect(screen.getByTestId("plan-view"));
});

test("Edit Plan Button Works", () => {
    const editPlan = screen.getAllByRole("button", {
        name: /Edit/i
    })[0];
    editPlan.click();
    expect(screen.getByTestId("formPlanName"));
    expect(screen.getByTestId("edit-plan-add-semester"));
    expect(screen.getByTestId("edit-plan-save"));
    expect(screen.getByTestId("edit-plan-cancel"));
    expect(screen.getByTestId("edit-plan-delete"));
});
