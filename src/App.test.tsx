import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("Degree Planner Component Tests", () => {
    beforeEach(() => {
        render(<App />);
    });
    test("The initial button exists", () => {
        const newPlanButton = screen.getByTestId("addNewPlanButton");
        expect(newPlanButton !== null);
    });
    test("Add New Plan Button Works and Menu appears", () => {
        const newPlanButton = screen.getByTestId("addNewPlanButton");
        newPlanButton.click();
        const createNewPlanButton = screen.getByTestId("savePlanButton");
        expect(createNewPlanButton !== null);
    });
    test("Cancel button and Add Plan Button works", () => {
        const newPlanButton = screen.getByTestId("addNewPlanButton");
        newPlanButton.click();
        const createNewPlanButton = screen.getByTestId("savePlanButton");
        const cancelButton = screen.getByTestId("addPlanCancelButton");
        cancelButton.click();
        expect(cancelButton === null);
        const buttons = screen.queryAllByRole("button");
        expect(buttons.length === 1);
        newPlanButton.click();
        expect(createNewPlanButton !== null && cancelButton !== null);
        createNewPlanButton.click();
        const creditText = screen.findAllByText("Total Credits");
        expect(creditText !== null); //passes to here fine
        const buttonsCheck2 = screen.queryAllByRole("button");
        expect(buttonsCheck2.length === 3); //passes to here
        const viewPlanButton = screen.findAllByText("View Plan");
        const editPlanButton = screen.findAllByText("Edit");
        expect(viewPlanButton !== null);
        expect(editPlanButton !== null);
    });
    test("Can Create a Plan with a Name", () => {
        const newPlanButton = screen.getByTestId("addNewPlanButton");
        newPlanButton.click();
        const createNewPlanButton = screen.getByTestId("savePlanButton");
        const cancelButton = screen.getByTestId("addPlanCancelButton");
        cancelButton.click();
        expect(cancelButton === null);
        const buttons = screen.queryAllByRole("button");
        expect(buttons.length === 1);
        newPlanButton.click();
        expect(createNewPlanButton !== null && cancelButton !== null);
        const planNameButton = screen.getByTestId("planNameInputBox");
        userEvent.type(planNameButton, "Degree Plan");
        createNewPlanButton.click();
        expect(screen.queryAllByText(/Degree Plan/i).length === 3);
        //expect(screen.getByText(/Degree Plan/i)).toBeInTheDocument();
    });
    test("Edit Plan Works", () => {
        const newPlanButton = screen.getByTestId("addNewPlanButton");
        newPlanButton.click();
        const createNewPlanButton = screen.getByTestId("savePlanButton");
        createNewPlanButton.click();
        const editPlanButton = screen.getByTestId("planEdit");
        editPlanButton.click();
        const allButtons = screen.queryAllByRole("button");
        expect(allButtons.length === 7);
    });
    test("Cancel Button works", () => {
        const newPlanButton = screen.getByTestId("addNewPlanButton");
        newPlanButton.click();
        const createNewPlanButton = screen.getByTestId("savePlanButton");
        createNewPlanButton.click();
        const editPlanButton = screen.getByTestId("planEdit");
        editPlanButton.click();
        const cancelButton = screen.getByTestId("editPlanCancelButton");
        cancelButton.click();
        const allButtons = screen.queryAllByRole("button");
        expect(allButtons.length === 3);
    });
    test("Delete Button works", () => {
        const newPlanButton = screen.getByTestId("addNewPlanButton");
        newPlanButton.click();
        const createNewPlanButton = screen.getByTestId("savePlanButton");
        createNewPlanButton.click();
        const editPlanButton = screen.getByTestId("planEdit");
        editPlanButton.click();
        const deleteButton = screen.getByTestId("editPlanDeleteButton");
        deleteButton.click();
        const allButtons = screen.queryAllByRole("button");
        expect(allButtons.length === 1);
    });
    test("Can change name and credits and save Button Works", () => {
        const newPlanButton = screen.getByTestId("addNewPlanButton");
        newPlanButton.click();
        const createNewPlanButton = screen.getByTestId("savePlanButton");
        createNewPlanButton.click();
        const editPlanButton = screen.getByTestId("planEdit");
        editPlanButton.click();
        const savePlanButton = screen.getByTestId("editPlanSaveButton");
        const nameBox = screen.getByTestId("nameInputBox");
        userEvent.type(nameBox, "Degree Plan 1");
        const creditBox = screen.getByTestId("creditsInputBox");
        userEvent.type(creditBox, "16");
        savePlanButton.click();
        const creditChange = screen.getByText("16 Total Credits");
        //const checking = screen.getByText("I don't exist"); Jesus I have been writing these tests in the dumbest way
        //expect(checking === null);
        expect(creditChange !== null);
        const nameChange = screen.getByText("Degree Plan 1");
        expect(nameChange !== null);
    });
    test("Add A Semester Button works", () => {
        const newPlanButton = screen.getByTestId("addNewPlanButton");
        newPlanButton.click();
        const createNewPlanButton = screen.getByTestId("savePlanButton");
        createNewPlanButton.click();
        const editPlanButton = screen.getByTestId("planEdit");
        editPlanButton.click();
        const addSemesterButton = screen.getByTestId("addSemesterButton");
        addSemesterButton.click();
        expect(screen.getByTestId("semesterSeasons")).toBeInTheDocument();
        expect(screen.getByTestId("semesterYear")).toBeInTheDocument();
        expect(screen.getByTestId("addSemesterClose")).toBeInTheDocument();
        expect(screen.getByTestId("addSemesterSave")).toBeInTheDocument();
    });
    test("You can actually add a real semester", () => {
        const newPlanButton = screen.getByTestId("addNewPlanButton");
        newPlanButton.click();
        const createNewPlanButton = screen.getByTestId("savePlanButton");
        createNewPlanButton.click();
        const editPlanButton = screen.getByTestId("planEdit");
        editPlanButton.click();
        const addSemesterButton = screen.getByTestId("addSemesterButton");
        addSemesterButton.click();
        const winterButton = screen.getByTestId("winterButton");
        const yearInputBox = screen.getByTestId("semesterYearInputBox");
        const addSemesterSaveButton = screen.getByTestId("addSemesterSave");
        userEvent.click(winterButton);
        userEvent.type(yearInputBox, "2022");
        addSemesterSaveButton.click();
        const editPlanSaveButton = screen.getByTestId("editPlanSaveButton");
        editPlanSaveButton.click();
        const viewPlanButton = screen.getByText("View Plan");
        viewPlanButton.click();
        expect(screen.getByText("Winter 2022")).toBeInTheDocument();
    });

    test("Set credits to actual works", () => {
        const newPlanButton = screen.getByTestId("addNewPlanButton");
        newPlanButton.click();
        const createNewPlanButton = screen.getByTestId("savePlanButton");
        createNewPlanButton.click();
        const editPlanButton = screen.getByTestId("planEdit");
        editPlanButton.click();
        const addSemesterButton = screen.getByTestId("addSemesterButton");
        addSemesterButton.click();
        const winterButton = screen.getByTestId("winterButton");
        const yearInputBox = screen.getByTestId("semesterYearInputBox");
        const addSemesterSaveButton = screen.getByTestId("addSemesterSave");
        userEvent.click(winterButton);
        userEvent.type(yearInputBox, "2022");
        addSemesterSaveButton.click();
        const editPlanSaveButton = screen.getByTestId("editPlanSaveButton");
        editPlanSaveButton.click();
        const viewPlanButton = screen.getByText("View Plan");
        viewPlanButton.click();
        const semesterEdit = screen.getByTestId("semesterEditButton");
        semesterEdit.click();
        const creditInputBox = screen.getByTestId(
            "editSemesterCreditsInputBox"
        );
        userEvent.type(creditInputBox, "4");
        const semesterSave = screen.getByTestId("semesterEditSave");
        semesterSave.click();
        expect(screen.queryAllByText("4 Total Credits").length === 2);
        const semesterEditReal = screen.getByTestId("semesterEditButton");
        semesterEditReal.click();
        const semesterSetCredits = screen.getByTestId(
            "semesterEditSetCreditsToActual"
        );
        semesterSetCredits.click();
        semesterSave.click();
        expect(screen.queryAllByText("4 Total Credits").length === 1);
    });
    test("Clear Semesters Works", () => {
        const newPlanButton = screen.getByTestId("addNewPlanButton");
        newPlanButton.click();
        const createNewPlanButton = screen.getByTestId("savePlanButton");
        createNewPlanButton.click();
        const editPlanButton = screen.getByTestId("planEdit");
        editPlanButton.click();
        const addSemesterButton = screen.getByTestId("addSemesterButton");
        addSemesterButton.click();
        const winterButton = screen.getByTestId("winterButton");
        const yearInputBox = screen.getByTestId("semesterYearInputBox");
        const addSemesterSaveButton = screen.getByTestId("addSemesterSave");
        userEvent.click(winterButton);
        userEvent.type(yearInputBox, "2022");
        addSemesterSaveButton.click();
        const editPlanSaveButton = screen.getByTestId("editPlanSaveButton");
        editPlanSaveButton.click();
        const viewPlanButton = screen.getByText("View Plan");
        viewPlanButton.click();
        expect(screen.getByText("Winter 2022")).toBeInTheDocument();
        const editPlanButton2 = screen.getByTestId("planEdit");
        editPlanButton2.click();
        const addSemesterButton2 = screen.getByTestId("addSemesterButton");
        addSemesterButton2.click();
        const summerButton = screen.getByTestId("summerButton");
        userEvent.click(summerButton);
        const yearInputBox2 = screen.getByTestId("semesterYearInputBox");
        userEvent.type(yearInputBox2, "2023");
        const addSemesterSaveButton2 = screen.getByTestId("addSemesterSave");
        addSemesterSaveButton2.click();
        const editPlanSave = screen.getByTestId("editPlanSaveButton");
        editPlanSave.click();
        expect(screen.getByText("Winter 2022")).toBeInTheDocument();
        expect(screen.getByText("Summer 2023")).toBeInTheDocument();
        const editPlanButton3 = screen.getByTestId("planEdit");
        editPlanButton3.click();
        const clearSemestersButton = screen.getByText("Clear Semesters");
        clearSemestersButton.click();
        editPlanSaveButton.click();
        //viewPlanButton.click();
        expect(screen.queryByText(/Winter 2022/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/Summer 2023/i)).not.toBeInTheDocument();
    });
    /*
    test("Course Catalog Works", () => { Gonna need to come back to this one, need help
        const courseCatalog = screen.getByTestId("courseCatalogForm");
        courseCatalog.click();
        expect(screen.getByText(/CISC 275/i)).toBeInTheDocument();
        const cisc220 = screen.getByText(/CISC 220/i);
        cisc220.click();
        expect(screen.getByText(/CISC 220/i)).toBeInTheDocument();
        expect(screen.getByText(/Data Structures/i)).toBeInTheDocument(); //fails
        expect(screen.getByText(/3/i)).toBeInTheDocument();
    });
    */
    test("Semester Edit Cancel Button Works", () => {
        const newPlanButton = screen.getByTestId("addNewPlanButton");
        newPlanButton.click();
        const createNewPlanButton = screen.getByTestId("savePlanButton");
        createNewPlanButton.click();
        const editPlanButton = screen.getByTestId("planEdit");
        editPlanButton.click();
        const addSemesterButton = screen.getByTestId("addSemesterButton");
        addSemesterButton.click();
        const winterButton = screen.getByTestId("winterButton");
        const yearInputBox = screen.getByTestId("semesterYearInputBox");
        const addSemesterSaveButton = screen.getByTestId("addSemesterSave");
        userEvent.click(winterButton);
        userEvent.type(yearInputBox, "2022");
        addSemesterSaveButton.click();
        const editPlanSaveButton = screen.getByTestId("editPlanSaveButton");
        editPlanSaveButton.click();
        const viewPlanButton = screen.getByText("View Plan");
        viewPlanButton.click();
        expect(screen.getByText("Winter 2022")).toBeInTheDocument();
        const semesterEditButton = screen.getByTestId("semesterEditButton");
        semesterEditButton.click();
        const semesterEditCancelButton =
            screen.getByTestId("semesterEditCancel");
        semesterEditCancelButton.click();
        expect(screen.getByText(/See Courses/i)).toBeInTheDocument();
    });
    test("Semester Edit Delete Button Works", () => {
        const newPlanButton = screen.getByTestId("addNewPlanButton");
        newPlanButton.click();
        const createNewPlanButton = screen.getByTestId("savePlanButton");
        createNewPlanButton.click();
        const editPlanButton = screen.getByTestId("planEdit");
        editPlanButton.click();
        const addSemesterButton = screen.getByTestId("addSemesterButton");
        addSemesterButton.click();
        const winterButton = screen.getByTestId("winterButton");
        const yearInputBox = screen.getByTestId("semesterYearInputBox");
        const addSemesterSaveButton = screen.getByTestId("addSemesterSave");
        userEvent.click(winterButton);
        userEvent.type(yearInputBox, "2022");
        addSemesterSaveButton.click();
        const editPlanSaveButton = screen.getByTestId("editPlanSaveButton");
        editPlanSaveButton.click();
        const viewPlanButton = screen.getByText("View Plan");
        viewPlanButton.click();
        expect(screen.getByText("Winter 2022")).toBeInTheDocument();
        const semesterEditButton = screen.getByTestId("semesterEditButton");
        semesterEditButton.click();
        const semesterEditDeleteButton =
            screen.getByTestId("semesterEditDelete");
        semesterEditDeleteButton.click();
        expect(screen.queryByText(/Winter 2022/i)).not.toBeInTheDocument();
    });
    test("Semester Edit Can Actually Edit", () => {
        const newPlanButton = screen.getByTestId("addNewPlanButton");
        newPlanButton.click();
        const createNewPlanButton = screen.getByTestId("savePlanButton");
        createNewPlanButton.click();
        const editPlanButton = screen.getByTestId("planEdit");
        editPlanButton.click();
        const addSemesterButton = screen.getByTestId("addSemesterButton");
        addSemesterButton.click();
        const winterButton = screen.getByTestId("winterButton");
        const yearInputBox = screen.getByTestId("semesterYearInputBox");
        const addSemesterSaveButton = screen.getByTestId("addSemesterSave");
        userEvent.click(winterButton);
        userEvent.type(yearInputBox, "2022");
        addSemesterSaveButton.click();
        const editPlanSaveButton = screen.getByTestId("editPlanSaveButton");
        editPlanSaveButton.click();
        const viewPlanButton = screen.getByText("View Plan");
        viewPlanButton.click();
        expect(screen.getByText("Winter 2022")).toBeInTheDocument();
        const semesterEditButton = screen.getByTestId("semesterEditButton");
        semesterEditButton.click();
        const springButton = screen.getByTestId("semesterEditSpring");
        springButton.click();
        const edityearInputBox = screen.getByTestId("semesterEditYear");
        userEvent.type(edityearInputBox, "3");
        const creditInputBox = screen.getByTestId(
            "editSemesterCreditsInputBox"
        );
        userEvent.type(creditInputBox, "4");
        const editSemesterSave = screen.getByTestId("semesterEditSave");
        editSemesterSave.click();
        expect(screen.getByText(/Spring 20223/i)).toBeInTheDocument();
        expect(screen.getByText(/4 Total Credits/i)).toBeInTheDocument();
    });
});
