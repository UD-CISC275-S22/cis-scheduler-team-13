import { course } from "../interface/course";
export function capstoneCourses(): course[] {
    const capstoneCourses: course[] = [
        {
            code: "ACCT 425",
            name: "Strategic Information Systems and Accounting",
            descr: "Explores the role of accounting and information systems in accomplishing thestrategic goals of the corporation.  Students exposed to accountinginformation from large data bases, enterprise-wide computing environments andcases and projects related to strategic problem solving across functionalareas of business.",
            credits: " 3",
            preReq: "ACCT 302 and ACCT 316.",
            restrict: "Accounting majors only.",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "AFRA 480",
            name: "Africana Studies Capstone for Student Teaching",
            descr: "This course works in conjunction with the student teaching of AFRA Social Studies Education Concentration students. It fulfills an important role in training student teachers. This course prepares student-teachers to teach from an Africana Studies focus, one which includes contributions and perspectives of people of African origin. Through student teaching and field experience, students will have an opportunity to express the totality of their growth, development, and learning as an undergraduate.",
            credits: " 3",
            preReq: "",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "AFRA 490",
            name: "Senior Colloquium",
            descr: "A required research/methodological component to the AFRA major. Students will integrate the knowledge they have developed throughout their undergraduate academic careers into a final research project.",
            credits: " 3",
            preReq: "AFRA 391.",
            restrict: "Juniors and Seniors Only.",
            breadth: "University: ; A&S: ",
            typ: "Spring"
        },
        {
            code: "AGRI 400",
            name: "Senior Capstone in Agriculture and Natural Resources",
            descr: "Capstone experience for students in the Agriculture and Natural Resources interdisciplinary major.  A culminating and integrative experience that examines issues facing the agriculture and natural resource fields.",
            credits: " 1",
            preReq: "",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: ""
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
        },
        {
            code: "ANFS 417",
            name: "Beef Cattle and Sheep Production",
            descr: "Principles of modern beef cattle and sheep production; nutrition, reproduction, housing, health and management.",
            credits: " 4",
            preReq: "ANFS 101 and ANFS 251.",
            restrict:
                "Laboratory requires some out-of-class time for hands-on experience in animal production.",
            breadth: "University: ; A&S: ",
            typ: "Spring"
        },
        {
            code: "ANFS 418",
            name: "Swine Production",
            descr: "Principles of modern swine production: nutrition, reproduction, housing, health and management.",
            credits: " 4",
            preReq: "ANFS 101 and ANFS 251.",
            restrict:
                "Laboratory requires some out-of-class time for hands-on experience in animal production.",
            breadth: "University: ; A&S: ",
            typ: "Fall"
        },
        {
            code: "ANFS 421",
            name: "Poultry Production",
            descr: "Application of the fundamental principles of incubation, feeding, brooding, growing, disease control, processing and marketing as applied to broilers,heavy breeders and commercial egg producers.",
            credits: " 3",
            preReq: "ANFS 101  or permission of instructor.",
            restrict:
                "In order to obtain DLE credit student must also successfully complete ANFS 422 (Poultry lab, 1 credit). Requires additional hands-on experience outside of class.",
            breadth: "University: ; A&S: ",
            typ: "Fall"
        },
        {
            code: "ANFS 422",
            name: "Poultry Production Laboratory",
            descr: "Fundamental principles of incubation, feeding, brooding, growing, disease control, processing and marketing as applied to broilers, heavy breeders and commercial egg producers. Requires additional hands-on experience outside of class.",
            credits: " 1",
            preReq: "ANFS 101  or permission of instructor.",
            restrict:
                "In order to obtain DLE credit students must also successfully complete ANFS 421 (Poultry Production, 3 credit).",
            breadth: "University: ; A&S: ",
            typ: "Fall"
        },
        {
            code: "ANFS 426",
            name: "Equine Management",
            descr: "Application of scientific principles of nutrition, health care, behavior, reproduction, and farm management to the discipline of horse management. Laboratory provides hands-on experience. Intended for students interested in the horse industry. ANFS 220 or previous equine experience is recommended. Laboratory may require some out-of-class time for hands-on experience.",
            credits: " 4",
            preReq: "ANFS 101 or ANFS 220, and ANFS 251 or ANFS 241, or permission of instructor.",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Spring"
        },
        {
            code: "ANTH 486",
            name: "Tutorial in Social and Cultural Anthropology",
            descr: "History, theory and method in the field of social and cultural anthropology.",
            credits: " 3",
            preReq: "",
            restrict: "Open to majors only. Requires permission of instructor.",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "ANTH 487",
            name: "Tutorial in Archaeology",
            descr: "History, theory and method in the field of archaeology.",
            credits: " 3",
            preReq: "",
            restrict: "Open to majors only. Requires permission of instructor.",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "ANTH 488",
            name: "Tutorial in Physical Anthropology",
            descr: "History, theory and method in the field of physical anthropology.",
            credits: " 3",
            preReq: "",
            restrict: "Open to majors only. Requires permission of instructor.",
            breadth: "University: ; A&S: ",
            typ: "Spring"
        },
        {
            code: "ANTH 489",
            name: "Tutorial in Applied Anthropology",
            descr: "Provides an advanced, in depth synthesis of subfield of applied anthropology.  Examines history of the subfield, current debates regarding applied and public anthropology, and applicability of anthropological methods to the world beyond the academy.  Divided into three sections:  history of applied anthropology, ethnographic methods (theoretical and applied implications, qualitative and quantitative methodology) and supervised original research.",
            credits: " 3",
            preReq: "",
            restrict: "Open to anthropology majors only.",
            breadth: "University: ; A&S: ",
            typ: "Fall"
        },
        {
            code: "APEC 409",
            name: "Surveys and Economic Experiments",
            descr: "Research methods for the social sciences from surveys to lab and field experiments with a focus on consumer behavior and resource management issues. Emphasis on designing, conducting and reporting results from research and learning to critically read results from other studies.  Data issues and data analysis and modeling techniques will be discussed including graphical methods, inference, and multiple regression.",
            credits: " 3",
            preReq: "STAT 200 or equivalent.",
            restrict: "",
            breadth:
                "University: Social and Behavioral Sciences; A&S: GROUP C: A&S Social & Behavioral Sci",
            typ: "Spring"
        },
        {
            code: "APEC 450",
            name: "Topics in Environmental Law",
            descr: "Overview of the legal process and environmental laws in order to understand policy issues and learn action processes in the environmental field.",
            credits: " 3",
            preReq: "",
            restrict: "",
            breadth:
                "University: Social and Behavioral Sciences; A&S: GROUP C: A&S Social & Behavioral Sci",
            typ: "Verify offering with Dept"
        },
        {
            code: "ART 403",
            name: "Degree Project",
            descr: "Independent project within Visual Communications disciplines that serves as an in-depth inquiry into a subject of the student\u2019s choice, and directly relates to their intended career pathway. Projects are vetted and reviewed by a committee of faculty who serve as advisors.",
            credits: " 3",
            preReq: "C- or better in ART 402 and ART 409.",
            restrict: "Visual Communications Majors only.",
            breadth: "University: Creative Arts and Humanities; A&S: ",
            typ: ""
        },
        {
            code: "ART 419",
            name: "Senior Studio",
            descr: "Students work independently to develop a body of art for BFA exhibition and portfolio. The approach is inter-disciplinary and students are encouraged to experiment with a variety of media and collaborate with other artists; critique and discussion emphasize concept and content.",
            credits: " 3",
            preReq: "ART 416.",
            restrict: "Art Majors only.",
            breadth: "University: ; A&S: ",
            typ: "Verify offering with Dept"
        },
        {
            code: "ARTC 495",
            name: "Preservation Capstone",
            descr: "Summarize and synthesize the previous three years of a student\u2019s undergraduate career in Material Culture Preservation major. Faculty complete the undergraduate experience and prepare students for their next step (job market or graduate school). Career advisement and assessment of learning using exams, the creation of portfolios, oral presentations of internship or research experiences.",
            credits: " 3",
            preReq: "",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Fall"
        }
    ];
    return capstoneCourses;
}
