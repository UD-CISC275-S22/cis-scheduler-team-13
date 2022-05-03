import { course } from "../interface/course";
export function dleCourses(): course[] {
    const dleCourses: course[] = [
        {
            code: "ACCT 363",
            name: "Service Learning and Earned Income Tax Credit",
            descr: "Requires 8-12 hours of training in tax preparation for people with incomes low enough to qualify for the EITC (Earned Income Tax Credit). In addition, at least 34 hours of service preparing returns for this type of taxpayer is expected.",
            credits: " 1-3",
            preReq: "",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "ACCT 364",
            name: "Accounting in Practice",
            descr: "Requires at least 120 hours of an accounting-related internship with verification by the hiring company. Term paper relating the real-world duties and experiences of the internship to principles learned in traditional accounting classes also required.",
            credits: " 1-3",
            preReq: "ACCT 315, ACCT 327.",
            restrict: "Requires permission of instructor.",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "AFRA 446",
            name: "On the Run: Slavery and Fugitivity in Delaware",
            descr: "This seminar course examines the histories of enslaved flight, truancy, resistance, and refusal in the First State. While this course does center slavery and fugitive movement in and through Delaware, we will also necessarily examine the interconnected histories of Delaware\u2019s neighboring states - Virginia, Maryland, and Pennsylvania - in an effort to best understand enslaved life in Delaware and the larger mid-Atlantic world of the Upper South. We will assess a wide range of historical sources including periodicals, state mandates, runaway slave advertisements, and slave narratives, in addition to assigned secondary literature.",
            credits: " 3",
            preReq: "AFRA 304 or HIST 268.",
            restrict: "",
            breadth:
                "University: History and Cultural Change; A&S: GROUP B: A&S History & Cultural Change",
            typ: "Spring"
        },
        {
            code: "AFRA 464",
            name: "Internship",
            descr: "This internship is intended to provide students with an opportunity to make connections between the theory and practice of academic study and the practical application of that study in a professional work environment.",
            credits: " 1-3",
            preReq: "AFRA 110.",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Fall, Summer and Spring"
        },
        {
            code: "AFRA 468",
            name: "Undergraduate Research in Africana Studies",
            descr: "Students will be guided by a faculty member and will also be guided on various research approaches in Africana Studies. The outcome will be a high quality research paper that will be assessed by a faculty member as well as public delivery.",
            credits: " 1-3",
            preReq: "",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: ""
        },
        {
            code: "AFSC 310",
            name: "Leadership Studies I",
            descr: "This course is a study in the anatomy of leadership, the need for quality and management leadership, the role of discipline in leadership situations and the variables affecting leadership. Case studies are used to examine Air Force leadership and management situations as a means of demonstrating and exercising practical application of the concepts. Deal with actual problems and complete projects associated with planning and managing the Leadership Laboratory.",
            credits: " 3",
            preReq: "",
            restrict:
                "Students must complete Air Force Field Training the summer prior to enrolling in AFSC310. This training is an initial component of the coursework contained in the class.",
            breadth: "University: ; A&S: ",
            typ: "Fall"
        },
        {
            code: "ANFS 404",
            name: "Dairy Production",
            descr: "A study of nutrition, reproduction, physiology, health, and management as they relate to modern dairy production.",
            credits: " 4",
            preReq: "ANFS 101.",
            restrict:
                "Laboratory requires some out of class time for hands-on experience in animal production facilities.",
            breadth: "University: ; A&S: ",
            typ: "Spring"
        },
        {
            code: "ANFS 411",
            name: "Food Science Capstone",
            descr: "A capstone course for seniors to complete food science learningexperience by participating in a food product development team that simulatesthe real-world operation and requires integrated knowledge in areas of generalfood science, food chemistry, food analysis, food microbiology and foodprocessing.",
            credits: " 4",
            preReq: "",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Spring"
        }
    ];
    return dleCourses;
}
