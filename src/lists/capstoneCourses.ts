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
        },
        {
            code: "ARTH 402",
            name: "Undergraduate Seminar in the History of Art",
            descr: "Emphasis on art historical reading and research. Student oral reports. Recent seminar topics include; Art and Religion in Latin America; Caravaggio; Art of the African Diaspora; Renaissance Rome.",
            credits: " 1-4",
            preReq: "",
            restrict:
                "For undergraduates only. May be repeated for credit when topics vary.",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "ARTH 403",
            name: "Seminar in Art of African Diaspora",
            descr: "Seminar in Art of the African Diaspora explores ways in which African art and culture has influenced across world regions, from the Atlantic and Indian oceans to the Pacific oceans and beyond.  Topics may vary but with an emphasis on close examinations of what connects (and separate) the art and people of African Heritage in different world regions and time-periods. Example topics include: \u201cWhat is the Art of the African Diaspora,\u201d \u201cGlobal Memory and African Heritage,\u201d and \u201cBlack Art Across Oceans,\u201d among others.",
            credits: " 3",
            preReq: "",
            restrict: "",
            breadth:
                "University: Creative Arts and Humanities; A&S: GROUP A: A&S Creative Arts & Humanities",
            typ: "Fall and Spring"
        },
        {
            code: "ARTH 405",
            name: "Seminar in Greek and Roman Art",
            descr: "The art and architecture of antiquity from the origins of Greek civilizationto the fall of Rome. Recent topics include Art in the Everyday Life ofAncient Romans, Hellenistic Greek Sculpture, Late Roman Portraiture and RomanArchitecture.",
            credits: " 3",
            preReq: "",
            restrict:
                "May be repeated for a total of 9 credits when topics vary.",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "ARTH 406",
            name: "Seminar in Medieval Art",
            descr: "The art of Europe from the fall of Rome to the late Gothic period. Recent topics include The Court of Charlemagne, Early Irish and Anglo-Saxon Art, and Saint Denis and the Origins of Gothic Architecture.",
            credits: " 3-12",
            preReq: "",
            restrict:
                "May be repeated for a total of 12 credits when topics vary.",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "ARTH 413",
            name: "Seminar in Renaissance Art & Architecture",
            descr: "Renaissance art from 1300 to 1600. Recent topics include The Renaissance Villa and Art in the Age of Exploration.",
            credits: " 3",
            preReq: "",
            restrict: "May be repeated once for credit when topics vary.",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "ARTH 414",
            name: "Seminar in Italian Renaissance Architecture",
            descr: "Italian architecture from 1300 to 1600. Recent topics include RenaissanceVillas and Gardens, Brunelleschi and Alberti, Roman Architecture in the Age ofMichelangelo, and Palladio.",
            credits: " 3",
            preReq: "",
            restrict: "May be repeated for credit when topics vary.",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "ARTH 415",
            name: "Seminar in Italian Baroque Art",
            descr: "Painting, sculpture and architecture in Italy in the 17th century. Recent topics include Bernini and Roman Baroque Sculpture, Seicento Poetics and Imagery, Caravaggio.",
            credits: " 3-12",
            preReq: "",
            restrict:
                "May be repeated for a total of 12 credits when topics vary.",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "ARTH 417",
            name: "Seminar in Northern Baroque Art",
            descr: "Seventeenth century art in northern Europe. Topics change with each time of offering.",
            credits: " 3-12",
            preReq: "",
            restrict:
                "May be repeated for a total of 12 credits when topics vary.",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "ARTH 419",
            name: "Seminar in Art of the Iberian World, 1400-1800",
            descr: "Explore the arts of the Iberian Peninsula and the Spanish and Portuguese colonies from 1400-1800. Topics vary. Seminars may focus on particular artists, or on broader historical and/or methodological issues dealing with artistic production, reception, and circulation within the Spanish empire.",
            credits: " 3",
            preReq: "",
            restrict: "May be repeated for credit once when topics vary.",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "ARTH 421",
            name: "Seminar in Nineteenth Century Art",
            descr: "History and theory of art 1789-1900.  Recent topics include Modern Art and Literature, Modern Portraiture, Comic Modern.",
            credits: " 3",
            preReq: "",
            restrict:
                "May be repeated for a total of 12 credits when topics vary.",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "ARTH 422",
            name: "Folk and Outsider Art",
            descr: "Focuses on the traditional and popular arts of the United States. Topicscovered include colonial Pennsylvania-German decorative arts, Victorian Welshgravestones, African-American textile and basketry crafts, and contemporaryInuit graphic arts. Discussions and research will focus on the relationshipof folk arts to questions of ethnicity, class, popular culture, and communityaesthetics.",
            credits: " 3",
            preReq: "",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Verify offering with Dept"
        },
        {
            code: "ARTH 423",
            name: "Seminar in Modern Art Since 1900",
            descr: "Aspects of the history, aesthetics, and theories of Modern Art from 1900 to the present. Topics may include the Avant-Garde, Abstract Art, Art and Politics, High vs. Low Art, and Folk and Outsider Art.",
            credits: " 3",
            preReq: "ARTH 227 or ARTH 228 or permission of instructor.",
            restrict:
                "May be repeated for credit three times when topics vary.",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "ARTH 424",
            name: "Seminar in Film",
            descr: "Aspects of the history and aesthetics of film since the invention of synchronized sound. Topics change with each time of offering. Topics may include Classic Hollywood Film, Gender and Film, Film Noir, Independent Film, Global Cinema.",
            credits: " 3",
            preReq: "ARTH 227 or ARTH 318.",
            restrict:
                "May be repeated for credit three times when topics vary.",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "ARTH 425",
            name: "Seminar in Silent Cinema",
            descr: "Examination of the invention, emergence, and development of silent cinema inEurope, the former USSR, and the United States. Includes study of significant films and filmmakers; social, cultural and artistic contexts; and the critical literature.",
            credits: " 3",
            preReq: "A minimum of 200-level ARTH course.",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "ARTH 427",
            name: "Seminar in the History of Photography",
            descr: "Aspects of the history and aesthetics of photography. Topics change with each time of offering. Topics may include Photography and Art, Documentary Photography, Photography and Criticism, Photography and Race, and Vernacular Photography.",
            credits: " 3",
            preReq: "ARTH 227 or ARTH 228 or ARTH 230 or ARTH 231 or ARTH 318.",
            restrict:
                "May be repeated for credit three times when topics vary.",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "ARTH 429",
            name: "Seminar in Modern Architecture",
            descr: "Architecture in Europe and/or America from 1750 to the present. Recent topics include the Architecture of Neoclassicism; and Sullivan, Wright and the Prairie School.",
            credits: " 3-12",
            preReq: "",
            restrict: "May be repeated for credit when topics vary.",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "ARTH 431",
            name: "Seminar in American Architecture",
            descr: "American architecture from the Colonies to the present. Recent topics include Architecture of the Colonial and Federal Periods, Nineteenth Century American Architecture, and Philadelphia Architecture.",
            credits: " 3-12",
            preReq: "",
            restrict:
                "May be repeated for a total of 12 credits when topics vary.",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "ARTH 433",
            name: "Seminar in Orientalism and Postcolonial Art History",
            descr: "This is a topic course seminar in which students examine Orientalism and postcolonial discourse in history of art, architecture, archaeology or material culture.  Possible Topics include: \u201cThe Orient and Its Representation,\u201d \u201cJaponism and Impressionism,\u201d \u201cArt after Orientalism,\u201d \u201dPostcolonial Art History and Contemporary Aesthetics,\u201d among others. The seminar allows students to engage with theoretical discourse, while allowing rooms for students to add new perspectives differing from preestablished arguments that have emerged after the publication of Edward Said\u2019s Orientalism.",
            credits: " 3",
            preReq: "",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Spring"
        },
        {
            code: "ARTH 435",
            name: "Seminar in American Art",
            descr: "American art from the Colonies to the present. Recent topics include Art and Revolution in Early America; Early American Modernism, and American Painting and Sculpture after World War II.",
            credits: " 3-12",
            preReq: "",
            restrict:
                "May be repeated for a total of 12 credits when topics vary.",
            breadth: "University: ; A&S: ",
            typ: "Verify offering with Dept"
        },
        {
            code: "ARTH 440",
            name: "Seminar in Latin American Art",
            descr: "The arts of Latin America from pre-Hispanic times to the 21st century. Topic schange with each time of offering. Recent topics include Art and Religion in Latin America, and Art and Conquest in the New World.",
            credits: " 3",
            preReq: "",
            restrict: "May be repeated once for credit when topics vary.",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "ARTH 445",
            name: "Seminar in East Asian Art and Architecture",
            descr: "Art, architecture and archaeology of China, Japan, and/or Korea. Materials from nearby regions may also be included. Possible topics include Chinese Art and Collecting, Modern Architecture in East Asia, Meiji Art and architecture, East Asian Archaeology and Nationalism.",
            credits: " 3",
            preReq: "",
            restrict:
                "May be repeated for a total of 12 credits when topics vary.",
            breadth:
                "University: Creative Arts and Humanities; A&S: GROUP A: A&S Creative Arts & Humanities",
            typ: "Fall and Spring"
        },
        {
            code: "ARTH 456",
            name: "Seminar in Contemporary Architecture",
            descr: "Contemporary architecture from around the world. Topics include Contemporary Architecture, Cross-cultural Dialogues, Transnational Practices. Discover theories of postcolonialism and postmodernism to discuss aesthetic forms and concepts in the most recent architectural design projects.",
            credits: " 3",
            preReq: "",
            restrict: "",
            breadth:
                "University: Creative Arts and Humanities; A&S: GROUP A: A&S Creative Arts & Humanities",
            typ: "Fall and Spring"
        },
        {
            code: "ARSC 480",
            name: "Issues in Healthcare for Children and Families",
            descr: "Students accepted into the Medical/Dental Scholars Program are required to perform 2 of 4 designated practica within a structured medical/dental community setting. This practicum involves a unique one-on-one interaction with medical/dental preceptors, usually performed at Christiana Care Health Services (CCHS). Students work a minimum of 135 hours within the field of primary care or general dentistry.  Weekly seminars are required with the faculty coordinator and healthcare preceptor.  Students are responsible for a reflective daily journal, preceptor/self evaluations, written papers, and MDSP oral presentations.",
            credits: " 3",
            preReq: "",
            restrict:
                "BALS M/DSP majors holding junior/senior status and/or permission of instructor.",
            breadth: "University: ; A&S: ",
            typ: "Winter and Summer"
        },
        {
            code: "ARSC 482",
            name: "Issues in Public Healthcare - Economics",
            descr: "Students in the Medical Scholars Program are required to perform 2 of 3 designated practica options within  structured institutional medical/dental community settings. This practica involves  unique interactions with healthcare specialists, usually performed at Christiana Care Health Services (CCHS), that may focus upon the economic, quality, and/or service administration aspects of the healthcare professions. Students typically perform a minimum of 135 hours of direct shadowing experience within a Public Health related field. Seminars, preceptor/self evaluations, reflective journals, and a written paper are required.",
            credits: " 3",
            preReq: "",
            restrict:
                "BALS MDSP majors only holding junior/senior status with consent of instructor.",
            breadth: "University: ; A&S: ",
            typ: "Winter and Summer"
        },
        {
            code: "BHAN 464",
            name: "Health Behavior Science Internship",
            descr: "Practical learning experiences in health promotion, wellness, and related areas of public health. Working in a content area related setting, students complete a pre-determined number of hours with faculty advisement throughout the semester.",
            credits: " 6-9",
            preReq: "KAAP 220 or KAAP 309 and all BHAN, HLPR and NTDT major requirements must be completed before BHAN464 (9 credit internship) hours can be initiated.",
            restrict: "Requires permission of instructor.",
            breadth: "University: ; A&S: ",
            typ: "Fall, Winter, Spring, Summer"
        },
        {
            code: "BISC 315",
            name: "Experimental Cell Biology",
            descr: "Starts with a series of inquiry-based laboratory experiences in cell biology, centered on microscopy and using several protist model organisms. In second half of semester, students conduct a 5-6 week hypothesis-driven independent study project. Project proposals are peer-critiqued. Group presentations at end of semester detail the experiments they carried out and discuss how the results fit with previously published data and with original hypotheses.",
            credits: " 3",
            preReq: "BISC 208, BISC 305, and CHEM 321 or CHEM 213.",
            restrict: "BISC 305 must be completed before taking this course.",
            breadth: "University: ; A&S: ",
            typ: "Spring"
        },
        {
            code: "BISC 316",
            name: "Experimental Physiology",
            descr: "Short-term experimental research course in animal physiology. Conduct, in a group, an independent research project based on primary literature. Beginning with practicing basic skills on background information research, data collection and quantitative analysis, students construct a research question based on previous findings in the literature, conduct a series of experiment, and communicate the discoveries in formal writings and oral presentation.",
            credits: " 3",
            preReq: "BISC 208, CHEM 104 and CHEM 134, and BISC 306.",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "BISC 411",
            name: "Experimental Molecular Biology",
            descr: "Introduction to the process of scientific inquiry as it relates to cellular molecular biology. Learn the theory behind experimental procedures in the field and perform a series of laboratory exercises emphasizing experimental design and data analysis. Pose related scientific questions, design experiments and present results in written, poster or oral format.",
            credits: " 4",
            preReq: "BISC 208, BISC 401, CHEM 321 or CHEM 213.",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Spring"
        },
        {
            code: "BISC 412",
            name: "Developmental & Molecular Lab",
            descr: "Students will engage in the scientific process, develop new experimental skills, and collaborate with others through discussion and lab work. This is a student driven, inquiry-based lab where students will take ownership of their project and directly contribute to the cutting-edge research in the field of developmental biology.",
            credits: " 3",
            preReq: "BISC 401 or BISC 403 or BISC 415.",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: ""
        },
        {
            code: "BISC 413",
            name: "Advanced Genetics Laboratory",
            descr: "Students conduct laboratory investigations in Mendelian genetics, population and evolutionary genetics, and molecular genetics; learn to use several common bioinformatics tools; and design, perform and analyze original experiments.",
            credits: " 3",
            preReq: "BISC 208, BISC 403.",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Fall"
        },
        {
            code: "BISC 484",
            name: "Computer Based Genetics Laboratory",
            descr: "Explore the use of genome databases and the tools of bioinformatics, then and apply those skills to design and carry out wet lab experiments, which will involve the isolation and manipulation of DNA and RNA from human and animal subjects.",
            credits: " 3",
            preReq: "BISC 401 or BISC 403.",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Spring"
        },
        {
            code: "BISC 639",
            name: "Developmental Neurobiology",
            descr: "Developmental biology of the nervous system, including cellular components, neural induction, neurogenesis and neuronal migration, cellular determination, axon outgrowth and pathfinding, synapse formation, programmed cell death, neurotrophic factors, neurodevelopmental disorders, and early critical periods.",
            credits: " 4",
            preReq: "BISC305 or BISC401.",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: ""
        },
        {
            code: "BMEG 450",
            name: "Biomedical Engineering Design",
            descr: "Open-ended team-based design projects in the medical devices or research arena.  Systems approach requiring design strategy and concepts, including reliability, safety, ethics, economic analysis, marketing, FDA regulations, and patents.",
            credits: " 6",
            preReq: "BMEG 360.",
            restrict: "Open to BMEG seniors only.",
            breadth: "University: ; A&S: ",
            typ: "Fall"
        },
        {
            code: "BUAD 441",
            name: "Strategic Management",
            descr: "Case studies and concepts in the determination of top-level company policy andthe solution of problems that cross major functional areas in business.",
            credits: " 3",
            preReq: "BUAD 301, BUAD 306, BUAD 309 and FINC 311.",
            restrict:
                "Requires senior standing in business administration, finance or accounting.",
            breadth: "University: ; A&S: ",
            typ: "Fall, Winter, Spring, Summer"
        },
        {
            code: "BUAD 445",
            name: "Business Analytics Capstone",
            descr: "Analytics leverages both the proliferation of data and the advancement of computational tools to bring a new level of sophistication to business decision making. As a capstone experience, this course places students in the role of \u2018Business Data Analyst.\u2019 Students will work on large real-world datasets to recommend courses of action to businesses. All phases of the analytics process from data capture to creation of an analytics-driven recommendation or prototype solution will be practiced.",
            credits: " 3",
            preReq: "BUAD 345 and MISY 408.",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Spring"
        },
        {
            code: "BUAD 479",
            name: "Marketing Strategy for the Firm",
            descr: "Focuses on applying management decision processes and strategies to the integration of the firm\u2019s total marketing mix. Multifaceted problems are studied in firms of various sizes. Students analyze cases, simulations, and other real marketing problems.",
            credits: " 3",
            preReq: "BUAD 302.",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "CHEG 432",
            name: "Chemical Process Analysis",
            descr: "A study of the economic/energy utilization/environmental principles ofconceptual process design.  The optimization of a design along with thesafety and ethics issues are taught by several case process synthesis studies. Aspen software is used.",
            credits: " 3",
            preReq: "A minimum grade of C- in CHEG 332, CHEG 401, and CHEG 431.",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Spring"
        },
        {
            code: "CHEM 402",
            name: "Teaching Experience",
            descr: "Teaching experience in an undergraduate laboratory (as a teaching assistant), in tutorial/grading sessions (as a teacher\u2019s assistant) or as a problem-based learning workshop mentor. Evaluation based on performance.",
            credits: " 1-3",
            preReq: "",
            restrict: "Requires permission of Associate Chair and instructor.",
            breadth: "University: ; A&S: ",
            typ: "Fall, Winter and Spring"
        },
        {
            code: "CHEM 465",
            name: "Senior Seminar",
            descr: "Offers the opportunity to integrate the many chemical concepts students have learned and apply them to practical, real-world issues.",
            credits: " 1",
            preReq: "",
            restrict: "Requires senior status.",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "CHEM 468",
            name: "Undergraduate Research",
            descr: "Chemistry research on an assigned subject under the supervision of a member ofthe faculty.",
            credits: " 1-6",
            preReq: "",
            restrict:
                "Requires permission of instructor. (Letter grade upon completion of written report).",
            breadth: "University: ; A&S: ",
            typ: "Fall, Winter, Spring, Summer"
        },
        {
            code: "CIEG 461",
            name: "Senior Design Project",
            descr: "Work with advisors from engineering firms and faculty on design projects requiring knowledge and skills acquired in previous courses.",
            credits: " 2",
            preReq: "CIEG 302, CIEG 321, CIEG 331, and CIEG 351.",
            restrict: "Requires senior status in engineering.",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "CIEG 491",
            name: "Senior Design - Construction Engineering",
            descr: "",
            credits: " 4",
            preReq: "CIEG 391, CIEG 392, CIEG 393 and CIEG 394.",
            restrict: "CEM majors only. Senior status.",
            breadth: "University: ; A&S: ",
            typ: ""
        },
        {
            code: "CGSC 380",
            name: "Clinical Principles and Procedures in Speech Pathology",
            descr: "Focuses on clinical principles and procedures in assessment, planning and intervention in speech pathology. Assessment issues related to measurement concepts and descriptive statistics including the use of norm- referenced tests, defining target behaviors and developing observation skills are covered. Treatment planning and intervention include developing a treatment program, getting target behavior baselines and documenting treatment effectiveness.",
            credits: " 3",
            preReq: "Grade of C or better in CGSC 375; CGSC 376; LING 101.",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "CGSC 451",
            name: "Topics in Cognitive Science",
            descr: "Current topics in cognitive science.",
            credits: " 3",
            preReq: "CGSC 170.",
            restrict: "May be repeated for credit when topics vary.",
            breadth: "University: ; A&S: ",
            typ: ""
        },
        {
            code: "CGSC 470",
            name: "Elements of Cognitive Science",
            descr: "Introduction to the interdisciplinary study of the mind. Concentrates on the symbolic view of mind, and illustrates linguistic, psychological, anthropological, philosophical and computational approaches to language, thought, visual perception and other areas of cognition. Examines the role of representation and algorithm in theories of processing and development.",
            credits: " 3",
            preReq: "",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Verify offering with Dept"
        },
        {
            code: "CGSC 485",
            name: "Seminar in Cognitive Science",
            descr: "Intensive interdisciplinary study of topics in linguistics &amp; cognitive science. Allows students to synthesize what they have learned in previous coursework by bringing together divergent methodologies and applying them to topics in cognitive psychology, speech-language pathology, mind &amp; language, science of language, and philosphical aspects of cognitive science.&amp;nbsp;",
            credits: " 3",
            preReq: "",
            restrict: "May be repeated for credit as topic changes.",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "COMM 408",
            name: "New Media Project Development",
            descr: "Application of communication research processes to designing new media (e.g.,web sites, streaming video, electronic communication, interactive media) for aclient.  Involves conducting research for planning, developing strategies,designing prototypes, and making recommendations for implementation andevaluation.",
            credits: " 3",
            preReq: "ART 307 and CISC 103 or CISC 181.",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Spring"
        },
        {
            code: "COMM 409",
            name: "Public Relations Campaign Planning",
            descr: "Comprehensive recap of the Integrated Marketing Communication function, with anemphasis on public relations research, objectives, strategies, integratedtactics, and campaign evaluation.  Utilizes a small team \u201cservice learning\u201dsetup, wherein the teams adopt a community non-profit organization and workclosely with Board and staff members to produce and present a comprehensivepublic relations campaign plan.",
            credits: " 3",
            preReq: "COMM 309",
            restrict: "Not open to COMI majors.",
            breadth: "University: ; A&S: ",
            typ: "Spring"
        },
        {
            code: "COMM 413",
            name: "Public Relations Management",
            descr: "Focuses on case studies and tactics that public relations practitioners need to know in corporate, non-profit, government, education, agency, entertainment, or media settings.  Includes a strong emphasis on social media and e-portfolio development.",
            credits: " 3",
            preReq: "COMM 309.",
            restrict: "Not open to COMI majors.",
            breadth: "University: ; A&S: ",
            typ: "Fall"
        },
        {
            code: "COMM 417",
            name: "Communication and the Management of Conflict",
            descr: "An overview of communication and the conflict process in face-to-faceinteraction.  Emphasis on theories concerning the structure, analysis, andmanagement of conflict situations.",
            credits: " 3",
            preReq: "",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "COMM 421",
            name: "Intercultural Communication",
            descr: "Enhances students\u2019 understanding of cultures, communication and intercultural communication processes. In addition, communicative strategies for improving intercultural communication is discussed.",
            credits: " 3",
            preReq: "",
            restrict: "Some sections offered in Madrid, Spain and Costa Rica.",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "COMM 423",
            name: "Communication, Advertising, and the Consumer",
            descr: "Introduction to the content of advertising, including portrayals of gender, race and sexuality. Investigate the relationship between advertising and the individual consumer, particularly what advertising cognitive effects can be and how they may result in behavioral effects.",
            credits: " 3",
            preReq: "",
            restrict: "Not open to COMI majors.",
            breadth: "University: ; A&S: ",
            typ: "Spring"
        },
        {
            code: "COMM 424",
            name: "Media Message Analysis",
            descr: "Examination of methodology used to study media content and effects.  Focus on past and ongoing research in broadcast, nonbroadcast and print media.  Method of how to conduct and assess research relating to mass media.",
            credits: " 3",
            preReq: "",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Fall"
        },
        {
            code: "COMM 426",
            name: "Broadcast News Documentary",
            descr: "Use the format of a news documentary to explore current issues and topics affecting society. Select a topic and spend the semester producing a documentary. Understand and perfect TV production skills, including writing, interviewing, shooting and editing.",
            credits: " 3",
            preReq: "COMM 324",
            restrict: "May be repeated once for credit.",
            breadth: "University: ; A&S: ",
            typ: ""
        },
        {
            code: "COMM 427",
            name: "Broadcast News",
            descr: "Communication students learn the pressures and standards of broadcast newswhile writing and producing a scheduled studio TV program.  Emphasis on writingnews for broadcast, program story-selection issues, video selection,interviewing techniques, professionalism. Students produce a weekly newsprogram in the lab.",
            credits: " 3",
            preReq: "",
            restrict: "Not open to COMI majors.",
            breadth: "University: ; A&S: ",
            typ: "Verify offering with Dept"
        },
        {
            code: "COMM 431",
            name: "Politics and Entertainment",
            descr: "",
            credits: " 3",
            preReq: "",
            restrict: "Not open to COMI.",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "COMM 443",
            name: "Communication and Emotion",
            descr: "Introduces students to the role emotion plays in interpersonal communication and how communication influences our feelings. The course presents students with skill building exercises and writing assignments that are designed to put what they learn in the classroom into action in the real world.",
            credits: " 3",
            preReq: "",
            restrict: "COMM majors only.",
            breadth: "University: ; A&S: ",
            typ: ""
        },
        {
            code: "COMM 450",
            name: "Media Effects",
            descr: "Examines history and nature of research on effects of mass media, particularly television, in such areas as attitude change, socialization, role modeling and sex and violence.",
            credits: " 3",
            preReq: "COMM 370.",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Fall"
        },
        {
            code: "COMM 452",
            name: "Communication and Persuasion",
            descr: "An examination of how influence is created and resisted through communication in various settings, including personal relationships, public relations, advertising and political campaigns. Emphasis on contemporary theories of persuasion and attitude change, with applications to the various content areas studied.",
            credits: " 3",
            preReq: "",
            restrict: "Not open to COMI majors.",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "COMM 453",
            name: "Health Communication",
            descr: "This course examines theories and methods for studying relationships between media and health. Topics include media portrayals of health issues; public engagements with health information and technologies; and the role of media in health promotion.",
            credits: " 3",
            preReq: "",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Verify offering with Dept"
        },
        {
            code: "COMM 456",
            name: "Communication in Organizations",
            descr: "Introduction to concepts and research related to communication processes in organizational settings. Both traditional and interpretive approaches are emphasized.",
            credits: " 3",
            preReq: "",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Verify offering with Dept"
        },
        {
            code: "COMM 458",
            name: "Science Communication",
            descr: "This course examines how scientists communicate with journalists and citizens; how news and entertainment media present science and scientists; how messages about science shape public perceptions; and how citizens engage with scientific issues.",
            credits: " 3",
            preReq: "",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Verify offering with Dept"
        },
        {
            code: "COMM 468",
            name: "Undergraduate Research in Communication",
            descr: "Undergraduate research in area of communication conducted on or off campus, out of class, and under supervision of faculty member.",
            credits: " 1-6",
            preReq: "",
            restrict:
                "Open to junior and senior communication majors only. Requires permission of instructor.",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "COMM 476",
            name: "Social Media and Communication",
            descr: "Focus on how and why people use social media.  Various social media platforms will be explored and their effect on communicative processes will be examined.",
            credits: " 3",
            preReq: "",
            restrict: "COMM majors only.",
            breadth: "University: ; A&S: ",
            typ: "Fall"
        },
        {
            code: "COMM 485",
            name: "Analysis of Face-to-Face Communication",
            descr: "An examination of methods for analyzing face-to-face interaction, messageconstruction, and message interpretation.",
            credits: " 3",
            preReq: "",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Verify offering with Dept"
        },
        {
            code: "COMM 490",
            name: "Honors Capstone",
            descr: "A capstone experience for Communication Honors majors.",
            credits: " 3",
            preReq: "",
            restrict: "Restricted to Communication Honors majors.",
            breadth: "University: ; A&S: ",
            typ: "Spring"
        },
        {
            code: "CISC 475",
            name: "Advanced Software Engineering",
            descr: "Understand and apply a complete modern software engineering process. Topics include requirements analysis, specification, design, implementation, verification, and project management. Real-life team projects cover all aspects of the software development lifecycle, from the requirements to acceptance testing.",
            credits: " 3",
            preReq: "CISC 275. CISC 361 is recommended.",
            restrict:
                "Students who received credit in CISC675 are not eligible to take this course without permission.",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "CISC 499",
            name: "Computer Science Senior Design Project II",
            descr: "",
            credits: " 3",
            preReq: "CISC 498.",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Spring"
        },
        {
            code: "CRJU 357",
            name: "Seminar on the Police",
            descr: "",
            credits: " 3",
            preReq: "",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Verify offering with Dept"
        },
        {
            code: "CRJU 417",
            name: "Sex Crimes and Punishments",
            descr: "Discuss controversial topics surrounding sex crimes and punishments to develop students\u2019 abilities to think critically about connections between three areas: how we as a society respond to crime through our criminal justice systems; what we believe about crime and punishment; and what empirical research tells us.",
            credits: " 3",
            preReq: "",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Spring"
        },
        {
            code: "CRJU 420",
            name: "Criminal Justice Administration",
            descr: "",
            credits: " 3",
            preReq: "CRJU 110",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: ""
        },
        {
            code: "CRJU 424",
            name: "Women in Literature and Society",
            descr: "This INSIDE/OUT class focuses on deep reading of several form of literature. The class investigates the role of women in literature as authors, readers and central characters, and uses literature as a window into social views of gender.   Assigned material explores the particular themes of voice, agency, cultural difference and social structure.",
            credits: " 3",
            preReq: "",
            restrict: "Permission of instructor.",
            breadth: "University: ; A&S: ",
            typ: ""
        },
        {
            code: "CRJU 425",
            name: "Criminal Law and Social Policy",
            descr: "",
            credits: " 3",
            preReq: "",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Verify offering with Dept"
        },
        {
            code: "CRJU 431",
            name: "Research on Violence",
            descr: "Violence is a very common part of modern life.  It pervades many aspects of our social interactions, and dominates political discourse and policy issues. The purpose of this course is to critically examine the nature and patterns of violence. A key element of the course that distinguishes it from other courses is that there is a statistical lab component that will be devoted to examining the epidemiology and etiology of violence using read data sets.  Therefore, this class is not just lecture based, but places equal emphasis on statistical techniques to answer empirical questions about violent offending and victimization.",
            credits: " 3",
            preReq: "SOCI 301.",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "CRJU 435",
            name: "Punishing Speech",
            descr: "Examines the use of the criminal law and other regulatory sanctions to punish certain types of speech and the efforts of courts to determine which speech is deserving of constitutional protection and therefore beyond governmental control.",
            credits: " 3",
            preReq: "",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Spring"
        },
        {
            code: "CRJU 437",
            name: "Seminar on Corrections",
            descr: "",
            credits: " 3",
            preReq: "",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: ""
        },
        {
            code: "CRJU 451",
            name: "Topics in Crime, Law and Society: Inside/Out",
            descr: "Examination of current issues, scholarship, and debates related to crime, law, and social policy. Topics will vary. Taught in the Inside-Out format, in which traditional UD students and incarcerated persons take the class together at a local correctional facility.",
            credits: " 3",
            preReq: "",
            restrict:
                "Permission of instructor. May be taken twice for credit when topics vary.",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "CRJU 452",
            name: "Drugs and the Criminal Justice System",
            descr: "Covers both drug and criminal justice issues, focusing on the drugs-crime nexus and the criminal justice system response. Examines issues of race, gender, victimization, international policy, and new policy responses including drug treatment, harm reduction, and restorative justice. Class is held at a local correctional facility, and half the students are inmates.",
            credits: " 3",
            preReq: "",
            restrict: "Permission of instructor.",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "CRJU 456",
            name: "Surveillance and Society",
            descr: "Explores taken for granted systems of surveillance sociologically. Going beyond media constructed understandings, the class is designed to explore multiple forms of surveillant practices and technologies from at both personal and public levels of engagement.",
            credits: " 3",
            preReq: "",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: ""
        },
        {
            code: "CRJU 460",
            name: "Criminal Justice Policy",
            descr: "",
            credits: " 3",
            preReq: "",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Verify offering with Dept"
        },
        {
            code: "CRJU 475",
            name: "Social Science and the Law",
            descr: "",
            credits: " 3",
            preReq: "",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: ""
        },
        {
            code: "CRJU 489",
            name: "Crime Victims and Victims\u2019 Rights",
            descr: "",
            credits: " 3",
            preReq: "",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Verify offering with Dept"
        },
        {
            code: "CRJU 495",
            name: "Field Experience in Criminal Justice",
            descr: "",
            credits: " 4",
            preReq: "",
            restrict:
                "Requires permission of instructor. Not for major credit.",
            breadth: "University: ; A&S: ",
            typ: "Fall, Winter, Spring, Summer"
        },
        {
            code: "ECON 422",
            name: "Econometric Methods and Models I",
            descr: "This course includes advanced topics in econometrics and policy evaluation. The course focuses on causal reasoning: evaluating the causal effects of policies or other economic variables on outcomes of interest. It will demonstrate how causal reasoning and econometrics are applied in microeconomics research. Econometric techniques will be put into practice through data analysis using statistical software.",
            credits: " 3",
            preReq: "Must earn a C- or better in ECON 300 or ECON 301; and ECON 306 or MATH 202.",
            restrict:
                "Students who received credit in ECON415 are not eligible to take this course without permission.",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "ECON 433",
            name: "Economics of the Public Sector",
            descr: "",
            credits: " 3",
            preReq: "One of ECON 251, ECON 255, ECON 300 or ECON 301.",
            restrict:
                "Students who received credit in ECON 332 are not eligible to take this course without permission.",
            breadth: "University: ; A&S: ",
            typ: "Spring"
        },
        {
            code: "ECON 435",
            name: "Contemporary Macroeconomic Policy",
            descr: "The course analyzes a variety of important economic policies affecting the macro economy. Topics may change from semester to semester. Past topics included assessing policies for: (1) preventing and combating recessions; (2) dealing with international trade, offshoring of jobs, and immigration; (3) reducing global warming; (4) reducing gender disparities in the economy; (5) comparing your generation\u2019s standard of living with your parents\u2019 generation; (6) reducing inequality.",
            credits: " 3",
            preReq: "ECON 303 or ECON304.",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "ECON 436",
            name: "Seminar in Public Policy Economics",
            descr: "Investigates current topics in economics, such as healthcare reform, privatizing social security, international trade restrictions and energy policy.  Recent books and journal articles serve as basis for investigating these topics.  Student papers and class discussion form the essences of class sessions.",
            credits: " 3",
            preReq: "One of ECON 251, ECON 255, ECON 300 or ECON 301; and ECON 303 or ECON304.",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Spring"
        },
        {
            code: "EDUC 400",
            name: "Student Teaching",
            descr: "A capstone course for all education majors. This is a full-time extended student teaching experience in pre-kindergarten through 12th grade schools. Teacher candidates are under the guidance and supervision of clinical educators(s) and supervisor. This experience allows teacher to demonstrate their knowledge acquired in their undergraduate courses and apply it to their teaching.",
            credits: " 3-12",
            preReq: "",
            restrict:
                "Students must show evidence of passing a basic competency test and must show evidence of taking content knowledge test(s) in their area(s) of certification as required by the University Council on Teacher Education. In addition, students must submit a complete State/Federal Criminal Background History check and a Child Protection Registry check to the Office of Clinical Studies prior to the beginning of the student teaching placement.",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "EDUC 422",
            name: "Teaching Reading in Secondary English",
            descr: "Focuses on reading comprehension issues and differentiated reading instruction for secondary English teachers. Students learn how to determine the reading level of adolescents and the readability of texts, integrate contextualized vocabulary instruction and word study, develop adolescents? orality, and use strategies that develop independent reading.",
            credits: " 3",
            preReq: "ENGL 110.",
            restrict: "Enrollment limited to English Education students.",
            breadth: "University: ; A&S: ",
            typ: "Fall"
        },
        {
            code: "EDUC 433",
            name: "Student Teaching Seminar: Elementary Ed",
            descr: "Provides student teachers with the knowledge and tools to support student learning. Addresses educational issues to prepare student teachers for future professional learning and self-development.",
            credits: " 1-2",
            preReq: "",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "ELEG 498",
            name: "Senior Design I",
            descr: "Students apply their accumulated classroom knowledge to an electrical and computer engineering design problem.  Students work in small teams and must present their finished designs at the end of the term.",
            credits: " 3",
            preReq: "",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Fall"
        },
        {
            code: "ENEP 364",
            name: "Research Internship",
            descr: "",
            credits: " 3",
            preReq: "",
            restrict: "Open to energy and environmental policy majors.",
            breadth: "University: ; A&S: ",
            typ: "Summer and Fall"
        },
        {
            code: "ENEP 472",
            name: "Senior Thesis",
            descr: "Advanced senior research in the areas of energy and environmental policy under the direction and subject to approval of a program faculty advisor. Requires original research and application of energy and environmental theory and policy analysis on an energy and environmental problem.  Students will be asked to reflect on what they have learned through this process.",
            credits: " 2-6",
            preReq: "",
            restrict:
                "Open to Senior Majors only. Seniors must complete 6 credits for Graduation.",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "ENEP 485",
            name: "Senior Seminar in Energy and Environmental Policy",
            descr: "Expose ENEP students to the wide range of work that is being done on local, national and global levels related to Energy and Environment as well as to make students aware of the work and events that are happening on the UD campus in this area. Invited speakers will cover a vast range of topics including presentations on soft energy pathways, the conscious and unconscious effects on the environment and their mitigation strategies, Anthropocene to anthropocentricity, Buddhist Physics and Buddhist Economics, etc.  Students will demonstrate their accumulated knowledge of the fields of energy and environmental policy via a research paper and a presentation during the seminar.",
            credits: " 3",
            preReq: "",
            restrict: "ENEP Majors only.",
            breadth: "University: ; A&S: ",
            typ: "Spring"
        },
        {
            code: "ENGL 462",
            name: "Experiential Learning",
            descr: "Learning experience, on or off campus, under supervision of faculty member. Instructional learning both in and out of class and beyond existing department courses. Discovery learning experiences such as research, service learning, and fieldwork.",
            credits: " 3",
            preReq: "ENGL 110 and six ENGL credits at the 300-level or higher or by instructor consent.",
            restrict: "May be repeated twice for credit.",
            breadth: "University: ; A&S: ",
            typ: ""
        },
        {
            code: "ENGL 464",
            name: "Internship in Professional Writing",
            descr: "",
            credits: " 3",
            preReq: "Permission of instructor.",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Fall, Summer and Spring"
        },
        {
            code: "ENGL 480",
            name: "Literary Studies Seminar",
            descr: "Intensive capstone seminar employs research presentations as the occasion for students to consolidate skills acquired in 100-, 200-, and 300-level coursework. Content varies by expertise of instructor.",
            credits: " 3",
            preReq: "ENGL 110 and six ENGL credits at the 300 level or higher or by instructor consent.",
            restrict:
                "Can be repeated once when topics vary. Only counts toward major if taken as senior (after completing 90 credits). [Non-seniors are not excluded, but a student who completes the course before senior year must re-take the course as a senior for major credit.]",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "ENWC 465",
            name: "Senior Capstone Experience",
            descr: "Preparation, presentation, and discussion, both oral and written, of an issue based topic in entomology, wildlife conservation, natural resource management, or a related area for peers in a manner similar to that in scientific communication. Preparation includes reading and assessment of research articles.",
            credits: " 1",
            preReq: "",
            restrict: "Must be taken as senior in last fall term. .",
            breadth: "University: ; A&S: ",
            typ: "Fall"
        },
        {
            code: "ENTR 455",
            name: "Startup Experience I",
            descr: "Students work together in interdisciplinary teams to learn and utilize a repeatable method for developing viable business concepts. Core topics include: customer development, lean startup, types of businesses, opportunity recognition, ideation, validation of business model hypotheses, intellectual property, business strategy, team building, and venture capital.",
            credits: " 3",
            preReq: "ENTR 156 or ENTR 157 or ENTR 350.",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Verify offering with Dept"
        },
        {
            code: "ENSC 450",
            name: "Proseminar in the Environment",
            descr: "Discussion of the history and state of environmental science as through detailed exploration of a current environmental problem. Survey of research topics and methodologies in the current scientific literature related to the topic of interest.",
            credits: " 3",
            preReq: "",
            restrict:
                "Open to meteorology, and environmental science and studies majors only, or requires permission of instructor.",
            breadth: "University: ; A&S: ",
            typ: "Spring"
        },
        {
            code: "FASH 484",
            name: "Design Expressions",
            descr: "Integrates advanced apparel design techniques and experiences as students design a collection of ensembles based on a theme incorporating social, cultural, and environmental sustainability. Articulating the design process through oral, written, and visual methods is emphasized.",
            credits: " 3",
            preReq: "FASH 220, FASH 324, FASH 333.",
            restrict: "Apparel Design Seniors only.",
            breadth: "University: ; A&S: ",
            typ: "Fall"
        },
        {
            code: "FASH 490",
            name: "Strategic Fashion Management",
            descr: "A capstone course that integrates product planning and development, distribution, marketing, sourcing, and sustainability. Students will work on case studies and industry projects that require analysis, synthesis, and application of knowledge and skills within the global apparel industry.",
            credits: " 3",
            preReq: "Senior status.",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Verify offering with Dept"
        },
        {
            code: "FINC 425",
            name: "Financial Plan Development",
            descr: "The capstone experience engages students in critical thinking and decision making about personal financial management topics, integrating the knowledge gained in previous courses into a cohesive, inclusive understanding of the financial planning process. A key component of this module will be to develop a comprehensive financial plan.",
            credits: " 3",
            preReq: "FINC 320, FINC 321, FINC 322, ACCT 313 or ACCT 413, and FINC 314.",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Spring"
        },
        {
            code: "FINC 426",
            name: "Trust Management Symposium",
            descr: "Go through the process of managing a trust, addressing corpus and income management, the needs of income and residual beneficiaries, and the legal obligations imposed on a fiduciary for multi-participant trusts and traditional trusts. Utilize a combination of case studies, presentations, and project work to achieve the learning objectives.",
            credits: " 3",
            preReq: "ACCT 416, ACCT 418, and ACCT 450.",
            restrict:
                "Open only to students in the Trust Management Minor program",
            breadth: "University: ; A&S: ",
            typ: "Fall"
        },
        {
            code: "GAME 490",
            name: "Capstone Seminar in Game Studies and eSports",
            descr: "This Capstone Seminar focuses on the multifaceted process of video game development, distribution and reception. Each week\u2019s discussion will focus on one facet of a typical game development workflow (i.e., Writing, Programming, Sound), or a specific aspect of game reception (i.e., Game Analysis, eSports, Community Outreach). Likewise, the course highlights the fundamental role of diversity and inclusion for understanding game culture and the game industry, examining the intersections of gender, race, sexual identity and nationality on video game production and consumption. Ultimately, this Capstone Seminar will give GAME majors the interdisciplinary tools to understand the many steps involved in game development, as well as the many perspectives that inform the reception of video games by critics and audiences. It will also provide the structure to allow senior GAME majors to complete a final Capstone Project, as the culmination to their studies in the major.",
            credits: " 3",
            preReq: "",
            restrict:
                "For senior-level GAME majors and students with advisor approval only",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "GEOG 445",
            name: "Capstone in Geography",
            descr: "The nature of geography, its history, methodology and applications in research and societal problems. A pre-professional course.",
            credits: " 3",
            preReq: "",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Verify offering with Dept"
        },
        {
            code: "GEOG 479",
            name: "CAPSTONE: GIScience and Environmental Data Analytics",
            descr: "",
            credits: " 3",
            preReq: "",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: ""
        },
        {
            code: "GEOL 306",
            name: "Geoscience Field Methods",
            descr: "This is a 30-day-long field course in the western USA focused on advanced training and experience in geological field methods. Key topics include rock descriptions, stratigraphic analysis and correlation, structural methods, and geologic map construction and interpretation.",
            credits: " 4",
            preReq: "GEOL 105 and GEOL 115, or GEOL 107, or GEOL 113; GEOL 305",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Verify offering with Dept"
        },
        {
            code: "GEOL 401",
            name: "Senior Seminar: Topics in Geoscience",
            descr: "Integrated examination of topics and concepts of current interest and importance in geoscience. Topics may vary.",
            credits: " 3",
            preReq: "Senior geology majors only, within 30 credits of graduation.",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: ""
        },
        {
            code: "GEOL 405",
            name: "Introduction to Research",
            descr: "Undergraduate research carried out under the supervision of the staff. Writtenreport required.",
            credits: " 1-3",
            preReq: "",
            restrict: "May be repeated once if project warrants it.",
            breadth: "University: ; A&S: ",
            typ: "Verify offering with Dept"
        },
        {
            code: "HIST 400",
            name: "History Capstone Seminar",
            descr: "Topics vary. Students will synthesize and deploy the research, writing, and communication skills they have developed over their previous years as History majors. Under the guidance of the instructor, students will develop a plan for a historical research project, conduct original research, and write a substantial paper and/or create a website or museum exhibit.",
            credits: " 3",
            preReq: "HIST 268.",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "HLTH 492",
            name: "International Healthcare Practicum",
            descr: "Supervised practicum providing students the opportunity to work in an international patient care setting focusing on family practice/primary care issues from multiple perspectives. Well-defined, discipline-specific responsibilities at the site under the direction of medical/healthcare preceptors. Minimum 115 practicum hours required as well as regular seminars/debriefings.",
            credits: " 3",
            preReq: "",
            restrict: "Permission of instructor.",
            breadth: "University: ; A&S: ",
            typ: ""
        },
        {
            code: "HLTH 495",
            name: "Health Sciences Practicum",
            descr: "Directed service learning experience in a health services setting.",
            credits: " 6",
            preReq: "",
            restrict: "Restricted to senior health sciences majors.",
            breadth: "University: ; A&S: ",
            typ: "Spring"
        },
        {
            code: "HOSP 450",
            name: "Capstone: Strategic Hospitality Management",
            descr: "This capstone hospitality business course examines management issues surrounding the implementation of sound strategic management tools, theories and techniques in supporting hospitality operations from a guest service perspective and strategic decision making from the viewpoint of management.",
            credits: " 3",
            preReq: "FINC 311, BUAD 301, BUAD 309, HOSP 380, and HOSP 481.",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "HOSP 489",
            name: "Management of Restaurant Operations Practicum",
            descr: "Focuses on a hands-on application of commercial food production and delivery of superior experience in fine dining.  All lab hours will be conducted in the student managed Vita Nova Restaurant.  Topics to be covered include preparation techniques, presentation and delivery, dining room operations and kitchen management.  Focuses on execution of rotational assignments on a consistent day to day basis.",
            credits: " 7",
            preReq: "HOSP 321, HOSP 325 and HOSP 488.",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "HOSP 495",
            name: "Hospitality Feasibility Studies",
            descr: "This capstone hospitality business course examines feasibility methods for hospitality business using a franchise business model. Students are assigned a market in which they review market data, evaluate franchise options, develop facility and design requirements, identify review streams and cash flow projections, and complete an analysis of it economic viability.",
            credits: " 3",
            preReq: "ACCT 207, ACCT 208, HOSP 380, HOSP 481, HOSP 381, HOSP 382, BUAD301 and FINC 311.",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Fall"
        },
        {
            code: "HDFS 422",
            name: "Capstone in Family Relationships",
            descr: "An integrative analysis of interpersonal relationships and problems in courtship, marriage and the family in contemporary society.",
            credits: " 3",
            preReq: "HDFS 202, HDFS 235, and HDFS 334 or permission of instructor.",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "HDFS 428",
            name: "Diversity and Inclusion in Human Relations",
            descr: "Examination of diversity and inclusion practices and related legal issues in human relations and industry; focus on historical foundations and designing and assessing inclusive policies to address personnel and business needs.",
            credits: " 3",
            preReq: "",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Verify offering with Dept"
        },
        {
            code: "HDFS 449",
            name: "Internship",
            descr: "Practical, on-the-job experience at a site consistent with the student\u2019s career interests and goals.",
            credits: " 3-10",
            preReq: "",
            restrict: "Requires permission of instructor.",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "JAPN 490",
            name: "Research Thesis in Japanese",
            descr: "Allows students to conduct research and write a thesis on a topic of their choosing related to Japanese culture. The thesis is written in Japanese and class discussion is also in Japanese. Students use research sources in both English and Japanese. This is a challenging course aimed at seniors in the Japanese Studies Major in their last semester at UD.",
            credits: " 3",
            preReq: "",
            restrict:
                "Japanese Studies Major and permission of instructor only.",
            breadth: "University: ; A&S: ",
            typ: "Spring"
        },
        {
            code: "KAAP 400",
            name: "Research Methods",
            descr: "Introduction to research on health and physical activity, including types of research, research design, matching appropriate statistical tools with researchdesigns, research writing style and format and ethical issues related to research.",
            credits: " 3",
            preReq: "STAT 200 or MATH 201 or PSYC 209.",
            restrict:
                "Open only to majors in Athletic Training, Exercise Science and the Health Sciences Occupational Therapy Track.",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "KAAP 441",
            name: "Readings in Biomechanics and Motor Control",
            descr: "Involves in-depth student-led discussions of the scientific research literature in biomechanics and motor control.  The success of the course is dependent on each student reading the articles, posting online comments/questions as instructed, leading the article discussion when assigned, engaging in the classroom discussion, and being respectful of others\u2019 views and comments.  Students will learn about a variety of current and classical research topics and synthesize concepts learned in previous courses when critically evaluating the research literature each week.",
            credits: " 1",
            preReq: "KAAP 400 and either KAAP 426 or KAAP 428.",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Verify offering with Dept"
        },
        {
            code: "KAAP 442",
            name: "Readings in Applied Physiology",
            descr: "Involves in-depth student-led discussions of the scientific research literature in applied physiology.  The success of the course is dependent on each student reading the articles, posting online comments/questions as instructed, leading the article discussion when assigned, engaging in the classroom discussion, and being respectful of others\u2019 views and comments.  Students will learn about a variety of current and classical research topics and synthesize concepts learned in previous courses when critically evaluating the research literature each week.",
            credits: " 1",
            preReq: "KAAP 400 and KAAP 430.",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Verify offering with Dept"
        },
        {
            code: "KAAP 485",
            name: "Research in Exercise Science",
            descr: "Undergraduate laboratory research experience in biomechanics, exercise physiology, or motor control. Satisfies Capstone Requirement when taken senior year.",
            credits: " 1-3",
            preReq: "",
            restrict:
                "Requires permission of instructor. May be repeated for up to six credits.",
            breadth: "University: ; A&S: ",
            typ: "Spring"
        },
        {
            code: "KAAP 487",
            name: "Research in Sports Medicine",
            descr: "Undergraduate laboratory research experience in sports medicine.  Satisfies Capstone Requirement when taken senior year.",
            credits: " 1-3",
            preReq: "",
            restrict:
                "Consent of instructor required. May be repeated for up to six credits.",
            breadth: "University: ; A&S: ",
            typ: ""
        },
        {
            code: "LARC 456",
            name: "Studio 6: Senior Design",
            descr: "Prepares students for an entry-level landscape architect position or for graduate school.  Students initiate a project, define the program, conduct site and user analysis, generate schematic designs, and produce grading, layout and planting plans. Projects are tailored to individual interest areas.  Industry partners are consulted for project ideas and critiques. Course has a studio fee.",
            credits: " 6",
            preReq: "LARC 433 and LARC 450.",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: ""
        },
        {
            code: "LLCU 499",
            name: "Skills Assessment, Career Planning and Portfolio Development",
            descr: "Provides the tools to assess the expertise developed in a chosen major, quantify and describe the skills developed and present to a dynamic, changing professional environment. Use digital media to a create well-designed, value-oriented self-presentation (portfolio, resume, writing sample); explore relevant professional options; prepare for graduate/professional study; classify proficiency in chosen language(s) through approved testing methods.",
            credits: " 1",
            preReq: "",
            restrict: "Seniors only.",
            breadth: "University: ; A&S: ",
            typ: ""
        },
        {
            code: "LEAD 490",
            name: "Senior Capstone",
            descr: "Engage in a project addressing \u201creal world\u201d leadership challenges. Successful project completion requires integration, synthesis and reflection upon knowledge and skills acquired in previous courses. Specific projects vary by semester.",
            credits: " 3",
            preReq: "LEAD 100, LEAD 341.",
            restrict: "Open to senior OCL majors only.",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "LEST 450",
            name: "Topics in Environmental Law",
            descr: "Overview of the legal process and environmental laws in order to understandpolicy issues and learn action processes in the environmental field.",
            credits: " 3",
            preReq: "",
            restrict: "",
            breadth:
                "University: Social and Behavioral Sciences; A&S: GROUP C: A&S Social & Behavioral Sci",
            typ: ""
        },
        {
            code: "LING 401",
            name: "Historical Linguistics",
            descr: "Examines how languages evolve over time and how present and past languages are related to each other. Students learn techniques of historical analysis, such as the comparative method, and what is known about the historical development of major linguistic families like the Indo-European family of languages.",
            credits: " 3",
            preReq: "LING 101.",
            restrict: "",
            breadth:
                "University: History and Cultural Change; A&S: GROUP B: A&S History & Cultural Change",
            typ: "Fall"
        },
        {
            code: "LING 471",
            name: "Discovering Human Language",
            descr: "Introduction to field linguistics. Examines how languages are put together through a face-to-face encounter with an unknown language. Determine how this language - and human language in general - is constructed. Explores culture, people and even the food where the language is spoken.",
            credits: " 3",
            preReq: "LING 101.",
            restrict: "",
            breadth:
                "University: Social and Behavioral Sciences; A&S: GROUP C: A&S Social & Behavioral Sci",
            typ: "Verify offering with Dept"
        },
        {
            code: "LING 480",
            name: "Sociolinguistics",
            descr: "Interface between language and contemporary society: theories, research and analytical methods. Topics include: regional dialects; language contact; languages of underrepresented populations, such as ethnic minorities and people with language disabilities; social biases in language assessment; language and culture; language and mass media; language planning and policy development in education and the Official English movement; technology and communication; language attitudes, among others.",
            credits: " 3",
            preReq: "LING 101 and LING 202.",
            restrict:
                "Restricted to Junior and Senior CGSC Majors/Minors and LING Minors.",
            breadth: "University: ; A&S: ",
            typ: "Spring"
        },
        {
            code: "MISY 432",
            name: "MIS Projects",
            descr: "MISY 431 and MISY 432 serve as the MIS program capstone. Students learn design, implementation and client management techniques, and working in teams, apply this knowledge by developing technology-based business solutions for various regional enterprises.",
            credits: " 3",
            preReq: "MISY 430.",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Spring"
        },
        {
            code: "MAST 309",
            name: "Science through Storybooks",
            descr: "SMSP students will work in groups with ART and EDU students to transform one scientific paper into a children\u2019s storybook.  SMSP students will be responsible for understanding the scientific literature, communicating it to the group and helping to develop the concept behind the story.",
            credits: " 3",
            preReq: "",
            restrict: "Capstone course so must be in Junior or Senior Year",
            breadth: "University: ; A&S: ",
            typ: ""
        },
        {
            code: "MAST 476",
            name: "Marine Conservation",
            descr: "",
            credits: " 3",
            preReq: "",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Spring"
        },
        {
            code: "MAST 492",
            name: "Marine Environmental Studies",
            descr: "Examines the science behind contemporary issues in coastal and marine systems, with emphasis placed on environmental problem solving. Explore how science is practiced to address regional and global topics of concern, including marine pollution, managing shorelines, sustaining ecosystems, and living with climate change. Practical skills in synthesizing scientific literature, data analysis, and public speaking.",
            credits: " 3",
            preReq: "MAST 382.",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Fall"
        },
        {
            code: "MSEG 401",
            name: "Design of Materials and Their Application",
            descr: "",
            credits: " 6",
            preReq: "MSEG 305 and MSEG 315.",
            restrict: "Only for MSEG majors.",
            breadth: "University: ; A&S: ",
            typ: ""
        },
        {
            code: "MATH 420",
            name: "Introduction to Mathematical Finance",
            descr: "Terminology of mathematical finance. Asset pricing and interest rate models. Discrete and continuous models for option pricing and fixed-income products. Discussion of various payoff structures, including path-dependent options. May include use of technology to simulate trading and pricing research.",
            credits: " 3",
            preReq: "MATH 302, MATH 349, and either MATH 350 or STAT 470.",
            restrict:
                "Students who received credit in MATH620 are not eligible to take this course without permission.",
            breadth: "University: ; A&S: ",
            typ: "Spring"
        },
        {
            code: "MATH 460",
            name: "Introduction to Systems Biology",
            descr: "Systems biology approach, mathematical modeling of biological systems; examples from biomedical and agricultural research areas, biotechnology, industrial processes, and others. Differential equations, stochastic, feedback and control, or network models are discussed. Hands-on work via PBL modules.",
            credits: " 3",
            preReq: "One of BISC 302, BISC 305, BISC 306, BISC 401 or BISC 403.",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Verify offering with Dept"
        },
        {
            code: "MATH 512",
            name: "Contemporary Applications of Mathematics",
            descr: "Provides hands-on learning experience in contemporary applicationsof mathematics.  Involves work with investigators from industry, nationallaboratories and other departments.  Mathematical topics may include ordinaryand partial differential equations, systems of differential equations,transform, asymptotic and numerical methods.",
            credits: " 3",
            preReq: "A 300 or higher level course on differential equations.",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Fall"
        },
        {
            code: "MATH 530",
            name: "Application of Mathematics in Economics",
            descr: "Provides students with experience in the application of mathematics in economics. Applications may vary from semester to semester.  Mathematical topics may include applications of ordinary and partial differential equations, game theory, linear programming, dynamic programming, stochastic programming and calculus of variations.",
            credits: " 3",
            preReq: "MATH302, MATH 349, ECON301 and ECON303.",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Fall"
        },
        {
            code: "MATH 549",
            name: "Coding Theory and Cryptography",
            descr: "Basic coding theory including correcting and detecting error patterns.Cryptography, including symmetric key encryption, DES, RSA and cryptographicprotocols.",
            credits: " 3",
            preReq: "MATH341 or MATH349 or MATH351.",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Spring"
        },
        {
            code: "MEEG 401",
            name: "Engineering Senior Design",
            descr: "Open-ended, team-based, capstone engineering design projects. Systems approach process involving defining requirements, benchmarking, concept generation and selection, prototype fabrication, and testing. Includes safety, ethics, economic analysis, regulatory and industry standards, and intellectual property.",
            credits: " 6",
            preReq: "MEEG 304 or BMEG 360.",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Fall"
        },
        {
            code: "MEEG 402",
            name: "Senior Design - FSAE",
            descr: "Capstone engineering practice where teams develop real engineering system designs; discover customer requirements; benchmark best practices; develop engineering specifications; generate concepts; and justify aspecific concept. Design, fabricate, assemble, test and improve an actual prototype. Focus is upon successful competition at the annual spring FSAE competition.",
            credits: " 6",
            preReq: "MEEG 304.",
            restrict: "Open to majors only.",
            breadth: "University: ; A&S: ",
            typ: "Fall"
        },
        {
            code: "MMSC 441",
            name: "Biotechnology Practicum I",
            descr: "Practical internships in a variety of biotechnology laboratory settings. Students participate in all phases of laboratory functions.",
            credits: " 3",
            preReq: "Successful completion of pre-practicum Applied Molecular Biology and Biotechnology coursework.",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: ""
        },
        {
            code: "MMSC 442",
            name: "Biotechnology Practicum II",
            descr: "Practical internships in a variety of biotechnology laboratory settings. Students participate in all phases of laboratory functions.",
            credits: " 3",
            preReq: "Successful completion of pre-practicum Applied Molecular Biology and Biotechnology coursework.",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "MMSC 443",
            name: "Biotechnology Practicum III",
            descr: "Practical internships in a variety of biotechnology laboratory settings. Students participate in all phases of laboratory functions.",
            credits: " 3",
            preReq: "Successful completion of pre-practicum Applied Molecular Biology and Biotechnology coursework.",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "MMSC 444",
            name: "Biotechnology Practicum IV",
            descr: "Practical internships in a variety of biotechnology laboratory settings. Students participate in all phases of laboratory functions.",
            credits: " 3",
            preReq: "Successful completion of pre-practicum Applied Molecular Biology and Biotechnology coursework.",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Fall, Summer and Spring"
        },
        {
            code: "MMSC 462",
            name: "Interdisciplinary Healthcare Perspectives",
            descr: "Final reflective component of the volunteer experiences accumulated throughout the student\u2019s undergraduate years in preparation for a graduate program in a healthcare field. Evidence of critical thinking and knowledge of healthcare concepts will be demonstrated through various assignments.",
            credits: " 3",
            preReq: "",
            restrict:
                "Open to Medical Diagnostics senior majors only or with permission of the department.",
            breadth: "University: ; A&S: ",
            typ: "Spring"
        },
        {
            code: "MMSC 473",
            name: "Clinical Chemistry Practicum",
            descr: "Supervised experience in the application of laboratory theory and techniquesin clinical chemistry.",
            credits: " 3",
            preReq: "A grade of C- or better in MMSC 436 and MMSC 437",
            restrict: "Open to Medical Laboratory Science majors only.",
            breadth: "University: ; A&S: ",
            typ: "Spring"
        },
        {
            code: "MMSC 474",
            name: "Honors Clinical Chemistry Practicum",
            descr: "Supervised experience in the application of laboratory theory and techniques in clinical chemistry.",
            credits: " 3",
            preReq: "A grade of C- or better in MMSC 436 and  MMSC 437",
            restrict:
                "Open to Honors students only \u2013 min. 3.0- GPA required. See www.udel.edu/honors for enrollment policies. Requires permission from the instructor. Open to Medical Laboratory Science majors only.",
            breadth: "University: ; A&S: ",
            typ: "Spring"
        },
        {
            code: "MMSC 475",
            name: "Clinical Hematology Practicum",
            descr: "Supervised experience in the application of laboratory procedures inhematology.",
            credits: " 3",
            preReq: "A grade of C- or better in MMSC 433 and MMSC 434",
            restrict: "Open to Medical Laboratory Science majors only.",
            breadth: "University: ; A&S: ",
            typ: "Spring"
        },
        {
            code: "MMSC 476",
            name: "Honors Clinical Hematology Practicum",
            descr: "Supervised experience in the application of laboratory procedures in hematology.",
            credits: " 3",
            preReq: "A grade of C- or better in MMSC 433 and MMSC 434",
            restrict:
                "Open to Honors students only \u2013 min. 3.0- GPA required. See www.udel.edu/honors for enrollment policies. Requires permission from the instructor. Open to Medical Laboratory Science majors only.",
            breadth: "University: ; A&S: ",
            typ: "Spring"
        },
        {
            code: "MMSC 477",
            name: "Clinical Microbiology and Immunology Practicum",
            descr: "Supervised experience in the application of laboratory procedures in diagnostic microbiology.",
            credits: " 3",
            preReq: "A grade of C- or better in MMSC 438 and MMSC 439.",
            restrict: "Open to Medical Laboratory Science majors only.",
            breadth: "University: ; A&S: ",
            typ: "Spring"
        },
        {
            code: "MMSC 478",
            name: "Honors Clinical Microbiology and Immunology Practicum",
            descr: "Supervised experience in the application of laboratory procedures in diagnostic microbiology.",
            credits: " 3",
            preReq: "A grade of C- or better in MMSC 438 and MMSC 439.",
            restrict:
                "Open to Honors students only. Minimum 3.0 GPA required. See www.udel.edu/honors for enrollment policies. Requires permission from the instructor. Open to Medical Laboratory Science majors only.",
            breadth: "University: ; A&S: ",
            typ: "Spring"
        },
        {
            code: "MMSC 479",
            name: "Clinical Immunohematology Practicum",
            descr: "Supervised experience in the application of laboratory procedures inimmunohematology.",
            credits: " 3",
            preReq: "A grade of C- or better in MMSC 420 and MMSC 421",
            restrict: "Open to Medical Laboratory Science majors only.",
            breadth: "University: ; A&S: ",
            typ: "Spring"
        },
        {
            code: "MMSC 481",
            name: "HNRS Clinical Immunohematology Practicum",
            descr: "Supervised experience in the application of laboratory procedures in immunohematology.",
            credits: " 3",
            preReq: "A grade of C- or better in MMSC 420 and MMSC 421",
            restrict:
                "Open to Honors students only \u2013 min. 3.0- GPA required. See www.udel.edu/honors for enrollment policies. Requires permission from the instructor. Open to Medical Laboratory Science majors only.",
            breadth: "University: ; A&S: ",
            typ: "Spring"
        },
        {
            code: "MUSC 420",
            name: "Private Study for Advanced Composition",
            descr: "Creative writing in vocal and instrumental media.",
            credits: " 3",
            preReq: "MUSC 298 with a grade of C- or better.",
            restrict:
                "May be repeated for up to 12 credit hours. Offered in fall and spring semesters.",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "MUSC 423",
            name: "Private Study Capstone for Advanced Composition",
            descr: "",
            credits: " 3",
            preReq: "Nine credits of MUSC 420.",
            restrict: "Must be taken in the senior year.",
            breadth: "University: ; A&S: ",
            typ: ""
        },
        {
            code: "MUSC 458",
            name: "Private Study for Applied Music VIII",
            descr: "Continuing private study for senior applied music majors, including preparation for Senior Recital. The student adds to the course title the branch of study elected: piano, organ, voice, or an orchestral instrument. Includes a one-hour studio class.",
            credits: " 4",
            preReq: "MUSC 457 with a grade of C- or higher.",
            restrict: "Offered in fall and spring semesters.",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "MUSC 464",
            name: "Internship",
            descr: "Field experience with nonprofit performing arts organizations or commercial music businesses relevant to the student\u2019s area of interest.",
            credits: " 1-3",
            preReq: "",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Fall, Winter, Spring, Summer"
        },
        {
            code: "MUSC 483",
            name: "Private Study in Jazz and Improvisation IV",
            descr: "Private study in jazz and improvisation on the student\u2019s primary instrument for Jazz and Improvisation majors. Includes a one-hour studio class.",
            credits: " 4",
            preReq: "MUSC 482.",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Spring"
        },
        {
            code: "MUSC 499",
            name: "Music Portfolio Capstone Project",
            descr: "",
            credits: " 1-3",
            preReq: "",
            restrict:
                "Students can only take the course in their senior year, with permission of the instructor.",
            breadth: "University: ; A&S: ",
            typ: "Verify offering with Dept"
        },
        {
            code: "NSCI 407",
            name: "Hands-on Neuroscience",
            descr: "The goal of this course is to integrate students\u2019 previous undergraduate textbook-based neuroscience lecture courses into an applied, hands-on laboratory experience. This lab course explores aspects of neuroanatomy, neurophysiology, animal behavior, surgical techniques, and neuroscience methods.",
            credits: " 3",
            preReq: "NSCI 320.",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Spring"
        },
        {
            code: "NSCI 429",
            name: "Integrative Neuroscience I",
            descr: "Integrates current views on various systems of the brain with the functions they support.",
            credits: " 3",
            preReq: "NSCI 320.",
            restrict: "Restricted to NSCI majors and minors.",
            breadth: "University: ; A&S: ",
            typ: ""
        },
        {
            code: "NSCI 430",
            name: "Integrative Neuroscience II",
            descr: "Surveys select topics in behavioral neuroscience, including nervous system development, and brain systems underlying arousal, emotion, physiological regulation, and cognitive functioning.",
            credits: " 3",
            preReq: "NSCI 320.",
            restrict: "Restricted to NSCI majors and minors.",
            breadth: "University: ; A&S: ",
            typ: ""
        },
        {
            code: "NSCI 468",
            name: "Advanced Research",
            descr: "Participation in research program of a faculty member. Expected to contribute to conceptualization of research problems, design, and methdolological discussions.",
            credits: " 1-6",
            preReq: "NSCI 368.",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: ""
        },
        {
            code: "NURS 443",
            name: "BRN Role Practicum",
            descr: "A preceptored clinical experience focused upon the integration of conceptslearned in baccalaureate nursing education.",
            credits: " 4",
            preReq: "",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "NURS 477",
            name: "Clinical Applications: Care of Populations",
            descr: "Clinical application of science and nursing theories in community healthsettings. Local, national, and global issues are addressed.",
            credits: " 3",
            preReq: "NURS 453, NURS 457, NURS 459, NURS 460.",
            restrict: "Open to nursing majors only.",
            breadth: "University: ; A&S: ",
            typ: "Fall, Winter and Spring"
        },
        {
            code: "NURS 478",
            name: "Honors: Care of Populations",
            descr: "Clinical application of science and nursing theories in community health settings.  Local, national, and global issues are addressed.  Focus is synthesis of knowledge, application of evidence based practice and reflection on their nursing care provided to families, aggregates, in the community.",
            credits: " 3",
            preReq: "NURS 453, NURS 457, NURS 459, NURS 460.",
            restrict: "Open to honors nursing majors only.",
            breadth: "University: ; A&S: ",
            typ: "Spring"
        },
        {
            code: "NURS 479",
            name: "Clinical Preceptorship",
            descr: "Clinical application of science and nursing theories in student-selectedclinical settings. Provides a transition from student-faculty relationships tomentor-new graduate relationships. Students are mentored by a nurse preceptor.",
            credits: " 3",
            preReq: "NURS 453, NURS 460. For accelerated students, NURS 473 must precede NURS 479.",
            restrict: "Open to nursing majors only.",
            breadth: "University: ; A&S: ",
            typ: "Fall and Spring"
        },
        {
            code: "NURS 485",
            name: "Integrative Practicum - Capstone Preceptorship",
            descr: "",
            credits: " 3",
            preReq: "NURS 429 and NURS475.",
            restrict: "Nursing Majors only.",
            breadth: "University: ; A&S: ",
            typ: "Spring"
        },
        {
            code: "NTDT 403",
            name: "Senior Nutrition Seminar",
            descr: "Provides direction for career decisions, including self-assessment, resumedevelopment, and interview preparation. Focuses on the post-baccalaureatecareer pathways of employment, graduate study, and the supervised practiceexperience. Explores registration, specialty certification and licensure fordietitians.",
            credits: " 1",
            preReq: "",
            restrict: "Open to APN, DIET and NMS seniors.",
            breadth: "University: ; A&S: ",
            typ: "Fall"
        },
        {
            code: "PHIL 465",
            name: "Senior Seminar",
            descr: "Various authors and themes; e.g., Plato, Kant, epistemology, philosophy of mind.",
            credits: " 3",
            preReq: "",
            restrict:
                "Open only to Philosophy Majors and by permission of instructor. May be repeated once for credit when topics vary.",
            breadth: "University: ; A&S: ",
            typ: "Fall"
        },
        {
            code: "PHYS 460",
            name: "Computational Methods of Physics",
            descr: "Introduction to basic computational techniques in science with application to anumber of disciplines of current research interest, such as quantum physics, biophysics, statistical mechanics and chaos.",
            credits: " 3",
            preReq: "MATH 302 or MATH 341 or MATH 351, CISC 106, PHYS 208 and PHYS 228, or PHYS 245.",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Spring"
        },
        {
            code: "PHYS 468",
            name: "Introduction to Research",
            descr: "Undergraduate research on an assigned problem carried out under supervision of the faculty.",
            credits: " 1-6",
            preReq: "",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Fall, Summer and Spring"
        },
        {
            code: "PLSC 455",
            name: "Issues in Plant and Soil Sciences",
            descr: "An introduction to current and emerging issues facing the plant and soil sciences professions. Ethics, professionalism, environment, politics,technology and practices will be the foci of discussion groups, student oral and written presentations, case studies, guest lecturers and field trips.",
            credits: " 3",
            preReq: "",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Fall"
        },
        {
            code: "POSC 468",
            name: "Undergraduate Research",
            descr: "Research conducted under the direction of or in conjunction with a faculty member. May result in a major research paper or be incorporated into a faculty project.",
            credits: " 1-6",
            preReq: "",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Fall, Winter, Spring, Summer"
        },
        {
            code: "POSC 497",
            name: "Experiential Learning in Political Science & International Relations",
            descr: "This is an experiential course, meaning students will engage in either work or research-related coursework outside of the classroom. It requires students to apply their degree and skills to a work or research project that is overseen by a faculty member. Students will be required to contribute to the project as well as reflect on how this work may shape their future endeavors.",
            credits: " 1-3",
            preReq: "",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Spring"
        },
        {
            code: "POSC 498",
            name: "Capstone Internship",
            descr: "Capstone internship is an indepdent capstone experience defined by the enrolling student in consultation with a POSC department advisor. The 1-6 credit internship will meet the requirements of a capstone course.",
            credits: " 1-6",
            preReq: "",
            restrict: "By permission of the POSC department only.",
            breadth: "University: ; A&S: ",
            typ: "Fall, Winter, Spring, Summer"
        },
        {
            code: "POSC 499",
            name: "Capstone",
            descr: "Capstone topic will vary by offering.",
            credits: " 1",
            preReq: "",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: "Verify offering with Dept"
        },
        {
            code: "PSYC 405",
            name: "Advanced Research Methods",
            descr: "An advanced course in correlational and experimental research in the behavioral sciences. Work in teams to critically read empirical research and formulate novel hypotheses. Design, carry out, analyze, and present results of studies orally and in writing. Discuss replication, questionable research practices, and advanced statistical inference.",
            credits: " 3",
            preReq: "PSYC 100, PSYC 207, PSYC 209, and at least one course in PSYC or NSCI at the 300 level or above.",
            restrict: "",
            breadth: "University: ; A&S: ",
            typ: ""
        }
    ];
    return capstoneCourses;
}
