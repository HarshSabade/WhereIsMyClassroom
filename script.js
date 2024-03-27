let CLec = document.querySelector(".clecture")
let CFac = document.querySelector(".cfaculty")
let CLoc = document.querySelector(".clocation")
let NLec = document.querySelector(".nlecture")
let NFac = document.querySelector(".nfaculty")
let NLoc = document.querySelector(".nlocation")
let next = document.querySelector(".next")
let current = document.querySelector(".current")
let sel = document.getElementById("f").selected;
function day() {
    if (sel === true) {
        function give() {
            let interval = setInterval(function () {
                var currentDate = new Date();
                // For Monday
                if (currentDate.getDay() === 1 && currentDate.getHours() < 9) {
                    current.innerHTML = "Upcoming"
                    next.innerHTML = "Lectures today"
                    CLec.innerHTML = "Subject - Digital Systems"
                    CFac.innerHTML = "Faculty - Samruddhi Shaha Mam"
                    CLoc.innerHTML = "Location - Classroom 6502"
                    NLec.innerHTML = `<pre>
DS, NT, Chem,
Chem lab(F1) / DS lab(F2) / PSPP lab(F3),
German / Japanese</pre>`
                    NFac.innerHTML = ""
                    NLoc.innerHTML = ""
                    document.querySelector("good error").write("Fix bug")
                }
                else if (currentDate.getDay() === 1 && currentDate.getHours() === 9) {
                    current.innerHTML = "Ongoing"
                    next.innerHTML = "Next"
                    CLec.innerHTML = "Subject - Digital Systems"
                    CFac.innerHTML = "Faculty - Samruddhi Shaha Mam"
                    CLoc.innerHTML = "Location - Classroom 6502"
                    NLec.innerHTML = "Subject - Network Theory"
                    NFac.innerHTML = "Faculty - Suwarna Shete Mam"
                    NLoc.innerHTML = "Location - Classroom 6502"
                    document.querySelector("good error").write("Fix bug")
                }
                else if (currentDate.getDay() === 1 && currentDate.getHours() === 10) {
                    current.innerHTML = "Ongoing"
                    next.innerHTML = "Next"
                    CLec.innerHTML = "Subject - Network Theory"
                    CFac.innerHTML = "Faculty - Suwarna Shete Mam"
                    CLoc.innerHTML = "Location - Classroom 6502"
                    NLec.innerHTML = "Short Break"
                    NFac.innerHTML = ""
                    NLoc.innerHTML = ""
                    document.querySelector("good error").write("Fix bug")
                }
                else if (currentDate.getDay() === 1 && currentDate.getHours() === 11 && currentDate.getMinutes() < 11) {
                    current.innerHTML = "Ongoing"
                    next.innerHTML = "Next"
                    CLec.innerHTML = "Short Break"
                    CFac.innerHTML = ""
                    CLoc.innerHTML = ""
                    NLec.innerHTML = "Subject - Chemistry"
                    NFac.innerHTML = "Faculty - Priya Joshi Mam"
                    NLoc.innerHTML = "Location - Classroom 6502"
                    document.querySelector("good error").write("Fix bug")
                }
                else if (currentDate.getDay() === 1 && currentDate.getHours() === 11 && currentDate.getMinutes() >= 10 || currentDate.getDay() === 1 && currentDate.getHours() === 12 && currentDate.getMinutes() < 11) {
                    current.innerHTML = "Ongoing"
                    next.innerHTML = "Next"
                    CLec.innerHTML = "Subject - Chemistry"
                    CFac.innerHTML = "Faculty - Priya Joshi Mam"
                    CLoc.innerHTML = "Location - Classroom 6502"
                    NLec.innerHTML = "Lunch Break"
                    NFac.innerHTML = ""
                    NLoc.innerHTML = ""
                    document.querySelector("good error").write("Fix bug")
                }
                else if (currentDate.getDay() === 1 && currentDate.getHours() === 12 && currentDate.getMinutes() >= 10) {
                    current.innerHTML = "Ongoing"
                    next.innerHTML = "Next"
                    CLec.innerHTML = "Lunch Break"
                    CFac.innerHTML = ""
                    CLoc.innerHTML = ""
                    NLec.innerHTML = `<pre>
<u>Subject</u>:
Chem lab(F1) / DS lab(F2) / PSPP lab(F3)
<u>Faculty:</u>
PPJ(F1) / SamS(F2) / SuS(F3)
<u>Location:</u>
Lab 6408(F1) / Lab 6507(F2) / Lab 6506(F3)</pre>`
                    NFac.innerHTML = ""
                    NLoc.innerHTML = ""
                    document.querySelector("good error").write("Fix bug")
                }
                else if (currentDate.getDay() === 1 && currentDate.getHours() === 13 || currentDate.getDay() === 1 && currentDate.getHours() === 14) {
                    current.innerHTML = "Ongoing"
                    next.innerHTML = "Next"
                    CLec.innerHTML = `<pre>
<u>Subject</u>:
Chem lab(F1) / DS lab(F2) / PSPP lab(F3)
<u>Faculty:</u>
PPJ(F1) / SamS(F2) / SuS(F3)
<u>Location:</u>
Lab 6408(F1) / Lab 6507(F2) / Lab 6506(F3)</pre>`
                    CFac.innerHTML = ""
                    CLoc.innerHTML = ""
                    NLec.innerHTML = "N5 Japanese / A-1 German"
                    NFac.innerHTML = ""
                    NLoc.innerHTML = "Classroom 6501 / Classroom 6406"
                    document.querySelector("good error").write("Fix bug")
                }
                else if (currentDate.getDay() === 1 && currentDate.getHours() === 15 || currentDate.getDay() === 1 && currentDate.getHours() === 16) {
                    current.innerHTML = "Ongoing"
                    next.innerHTML = "Next"
                    CLec.innerHTML = "N5 Japanese / A-1 German"
                    CFac.innerHTML = ""
                    CLoc.innerHTML = "Classroom 6501 / Classroom 6406"
                    NLec.innerHTML = "No Lectures"
                    NFac.innerHTML = ""
                    NLoc.innerHTML = ""
                    document.querySelector("good error").write("Fix bug")
                }
                // For Tuesday
                else if (currentDate.getDay() === 2 && currentDate.getHours() < 9) {
                    current.innerHTML = "Upcoming"
                    next.innerHTML = "Lectures today"
                    CLec.innerHTML = `<pre>
<u>Subject</u>:
MC tutorial(F1) / DS lab(F2) / PSPP lab(F3)
<u>Faculty:</u>
RJT(F1) / SamS(F2) / SuS(F3)
<u>Location:</u>
Lab 6408(F1) / Lab 6507(F2) / Lab 6506(F3)</pre>`
                    CFac.innerHTML = ""
                    CLoc.innerHTML = ""
                    NLec.innerHTML = `<pre>
MC tutorial(F1) / DS lab(F2) / PSPP lab(F3),
IKS, DS, Chem, Japanese</pre>`
                    NFac.innerHTML = ""
                    NLoc.innerHTML = ""
                    document.querySelector("good error").write("Fix bug")
                }
                else if (currentDate.getDay() === 2 && currentDate.getHours() === 9 || currentDate.getDay() === 2 && currentDate.getHours() === 10) {
                    current.innerHTML = "Ongoing"
                    next.innerHTML = "Next"
                    CLec.innerHTML = `<pre>
<u>Subject</u>:
MC tutorial(F1) / DS lab(F2) / PSPP lab(F3)
<u>Faculty:</u>
RJT(F1) / SamS(F2) / SuS(F3)
<u>Location:</u>
Lab 6408(F1) / Lab 6507(F2) / Lab 6506(F3)</pre>`
                    CFac.innerHTML = ""
                    CLoc.innerHTML = ""
                    NLec.innerHTML = "Short Break"
                    NFac.innerHTML = ""
                    NLoc.innerHTML = ""
                    document.querySelector("good error").write("Fix bug")
                }
                else if (currentDate.getDay() === 2 && currentDate.getHours() === 11 && currentDate.getMinutes() < 11) {
                    current.innerHTML = "Ongoing"
                    next.innerHTML = "Next"
                    CLec.innerHTML = "Short Break"
                    CFac.innerHTML = ""
                    CLoc.innerHTML = ""
                    NLec.innerHTML = "Subject - IKS"
                    NFac.innerHTML = ""
                    NLoc.innerHTML = "LRDC hall"
                    document.querySelector("good error").write("Fix bug")
                }
                else if (currentDate.getDay() === 2 && currentDate.getHours() === 11 && currentDate.getMinutes() >= 10 || currentDate.getDay() === 2 && currentDate.getHours() === 12 || currentDate.getDay() === 2 && currentDate.getHours() === 13 && currentDate.getMinutes() < 11) {
                    current.innerHTML = "Ongoing"
                    next.innerHTML = "Next"
                    CLec.innerHTML = "Subject - IKS"
                    CFac.innerHTML = ""
                    CLoc.innerHTML = "LRDC hall"
                    NLec.innerHTML = "Lunch Break"
                    NFac.innerHTML = ""
                    NLoc.innerHTML = ""
                    document.querySelector("good error").write("Fix bug")
                }
                else if (currentDate.getDay() === 2 && currentDate.getHours() === 13 && currentDate.getMinutes() >= 10) {
                    current.innerHTML = "Ongoing"
                    next.innerHTML = "Next"
                    CLec.innerHTML = "Lunch Break"
                    CFac.innerHTML = ""
                    CLoc.innerHTML = ""
                    NLec.innerHTML = "Subject - Digital Systems"
                    NFac.innerHTML = "Faculty - Samruddhi Shaha Mam"
                    NLoc.innerHTML = "Location - Classroom 6406"
                    document.querySelector("good error").write("Fix bug")
                }
                else if (currentDate.getDay() === 2 && currentDate.getHours() === 14) {
                    current.innerHTML = "Ongoing"
                    next.innerHTML = "Next"
                    CLec.innerHTML = "Subject - Digital Systems"
                    CFac.innerHTML = "Faculty - Samruddhi Shaha Mam"
                    CLoc.innerHTML = "Location - Classroom 6406"
                    NLec.innerHTML = "Subject - Chemistry"
                    NFac.innerHTML = "Faculty - Priya Joshi Mam"
                    NLoc.innerHTML = "Location - Classroom 6406"
                    document.querySelector("good error").write("Fix bug")
                }
                else if (currentDate.getDay() === 2 && currentDate.getHours() === 15) {
                    current.innerHTML = "Ongoing"
                    next.innerHTML = "Next"
                    CLec.innerHTML = "Subject - Chemistry"
                    CFac.innerHTML = "Faculty - Priya Joshi Mam"
                    CLoc.innerHTML = "Location - Classroom 6406"
                    NLec.innerHTML = "N5 Japanese"
                    NFac.innerHTML = ""
                    NLoc.innerHTML = "Classroom 6504"
                    document.querySelector("good error").write("Fix bug")
                }
                else if (currentDate.getDay() === 2 && currentDate.getHours() === 16) {
                    current.innerHTML = "Ongoing"
                    next.innerHTML = "Next"
                    CLec.innerHTML = "N5 Japanese"
                    CFac.innerHTML = ""
                    CLoc.innerHTML = "Classroom 6504"
                    NLec.innerHTML = "No Lectures"
                    NFac.innerHTML = ""
                    NLoc.innerHTML = ""
                    document.querySelector("good error").write("Fix bug")
                }
                // For Wednesday
                else if (currentDate.getDay() === 3 && currentDate.getHours() < 9) {
                    current.innerHTML = "Upcoming"
                    next.innerHTML = "Lectures today"
                    CLec.innerHTML = "Subject - Multivariate Calculus"
                    CFac.innerHTML = "Faculty - Rajesh Talekar Sir"
                    CLoc.innerHTML = "Location - Classroom 6406"
                    NLec.innerHTML = `<pre>
MC, Chem, NT
PSPP lab(F1) / MC tutorial(F2) / DS lab(F3),
Life skills</pre>`
                    NFac.innerHTML = ""
                    NLoc.innerHTML = ""
                    document.querySelector("good error").write("Fix bug")
                }
                else if (currentDate.getDay() === 3 && currentDate.getHours() === 9) {
                    current.innerHTML = "Ongoing"
                    next.innerHTML = "Next"
                    CLec.innerHTML = "Subject - Multivariate Calculus"
                    CFac.innerHTML = "Faculty - Rajesh Talekar Sir"
                    CLoc.innerHTML = "Location - Classroom 6406"
                    NLec.innerHTML = "Subject - Chemistry"
                    NFac.innerHTML = "Faculty - Priya Joshi Mam"
                    NLoc.innerHTML = "Location - Classroom 6406"
                    document.querySelector("good error").write("Fix bug")
                }
                else if (currentDate.getDay() === 3 && currentDate.getHours() === 10) {
                    current.innerHTML = "Ongoing"
                    next.innerHTML = "Next"
                    CLec.innerHTML = "Subject - Chemistry"
                    CFac.innerHTML = "Faculty - Priya Joshi Mam"
                    CLoc.innerHTML = "Location - Classroom 6406"
                    NLec.innerHTML = "Short Break"
                    NFac.innerHTML = ""
                    NLoc.innerHTML = ""
                    document.querySelector("good error").write("Fix bug")
                }
                else if (currentDate.getDay() === 3 && currentDate.getHours() === 11 && currentDate.getMinutes() < 11) {
                    current.innerHTML = "Ongoing"
                    next.innerHTML = "Next"
                    CLec.innerHTML = "Short Break"
                    CFac.innerHTML = ""
                    CLoc.innerHTML = ""
                    NLec.innerHTML = "Subject - Network Theory"
                    NFac.innerHTML = "Faculty - Suwarna Shete Mam"
                    NLoc.innerHTML = "Location - Classroom 6406"
                    document.querySelector("good error").write("Fix bug")
                }
                else if (currentDate.getDay() === 3 && currentDate.getHours() === 11 && currentDate.getMinutes() >= 10 || currentDate.getDay() === 3 && currentDate.getHours() === 12 && currentDate.getMinutes() < 11) {
                    current.innerHTML = "Ongoing"
                    next.innerHTML = "Next"
                    CLec.innerHTML = "Subject - Network Theory"
                    CFac.innerHTML = "Faculty - Suwarna Shete Mam"
                    CLoc.innerHTML = "Location - Classroom 6406"
                    NLec.innerHTML = "Lunch Break"
                    NFac.innerHTML = ""
                    NLoc.innerHTML = ""
                    document.querySelector("good error").write("Fix bug")
                }
                else if (currentDate.getDay() === 3 && currentDate.getHours() === 12 && currentDate.getMinutes() >= 10) {
                    current.innerHTML = "Ongoing"
                    next.innerHTML = "Next"
                    CLec.innerHTML = "Lunch Break"
                    CFac.innerHTML = ""
                    CLoc.innerHTML = ""
                    NLec.innerHTML = `<pre>
<u>Subject</u>:
PSPP lab(F1) / MC tutorial(F2) / DS lab(F3)
<u>Faculty:</u>
SuS(F1) / RJT(F2) / SamS(F3)
<u>Location:</u>
Lab 6506(F1) / Lab 6417(F2) / Lab 6507(F3)</pre>`
                    NFac.innerHTML = ""
                    NLoc.innerHTML = ""
                    document.querySelector("good error").write("Fix bug")
                }
                else if (currentDate.getDay() === 3 && currentDate.getHours() === 13 || currentDate.getDay() === 3 && currentDate.getHours() === 14) {
                    current.innerHTML = "Ongoing"
                    next.innerHTML = "Next"
                    CLec.innerHTML = `<pre>
<u>Subject</u>:
PSPP lab(F1) / MC tutorial(F2) / DS lab(F3)
<u>Faculty:</u>
SuS(F1) / RJT(F2) / SamS(F3)
<u>Location:</u>
Lab 6506(F1) / Lab 6417(F2) / Lab 6507(F3)</pre>`
                    CFac.innerHTML = ""
                    CLoc.innerHTML = ""
                    NLec.innerHTML = `<pre>
<u>Subject</u>:
Life skills 
<u>Faculty:</u>
Sandip Kisave Sir(F1)/Pooja Potdar Mam(F2)
<u>Location:</u>
Classroom 6401(F1) / Classroom 6402(F2)</pre>`
                    NFac.innerHTML = ""
                    NLoc.innerHTML = ""
                    document.querySelector("good error").write("Fix bug")
                }
                else if (currentDate.getDay() === 3 && currentDate.getHours() === 15 || currentDate.getDay() === 3 && currentDate.getHours() === 16) {
                    current.innerHTML = "Ongoing"
                    next.innerHTML = "Next"
                    CLec.innerHTML = `<pre>
<u>Subject</u>:
Life skills 
<u>Faculty:</u>
Sandip Kisave Sir(F1)/Pooja Potdar Mam(F2)
<u>Location:</u>
Classroom 6401(F1) / Classroom 6402(F2)</pre>`
                    CFac.innerHTML = ""
                    CLoc.innerHTML = ""
                    NLec.innerHTML = "No lectures"
                    NFac.innerHTML = ""
                    NLoc.innerHTML = ""
                    document.querySelector("good error").write("Fix bug")
                }
                // For Thursday
                else if (currentDate.getDay() === 4 && currentDate.getHours() < 11 || currentDate.getDay() === 4 && currentDate.getHours() === 11 && currentDate.getMinutes() < 11) {
                    current.innerHTML = "Upcoming"
                    next.innerHTML = "Lectures today"
                    CLec.innerHTML = "Subject - Multivariate Calculus"
                    CFac.innerHTML = "Faculty - Rajesh Talekar Sir"
                    CLoc.innerHTML = "Location - Classroom 6515"
                    NLec.innerHTML = `<pre>
DS, Life Skills,
PSPP lab(F1) / Chem lab(F2) / DS lab(F3)</pre>`
                    NFac.innerHTML = ""
                    NLoc.innerHTML = ""
                    document.querySelector("good error").write("Fix bug")
                }
                else if (currentDate.getDay() === 4 && currentDate.getHours() === 11 && currentDate.getMinutes() >= 10 || currentDate.getDay() === 4 && currentDate.getHours() === 12 && currentDate.getMinutes() < 11) {
                    current.innerHTML = "Ongoing"
                    next.innerHTML = "Next"
                    CLec.innerHTML = "Subject - Multivariate Calculus"
                    CFac.innerHTML = "Faculty - Rajesh Talekar Sir"
                    CLoc.innerHTML = "Location - Classroom 6515"
                    NLec.innerHTML = "Lunch Break"
                    NFac.innerHTML = ""
                    NLoc.innerHTML = ""
                    document.querySelector("good error").write("Fix bug")
                }
                else if (currentDate.getDay() === 4 && currentDate.getHours() === 12 && currentDate.getMinutes() >= 10) {
                    current.innerHTML = "Ongoing"
                    next.innerHTML = "Next"
                    CLec.innerHTML = "Lunch Break"
                    CFac.innerHTML = ""
                    CLoc.innerHTML = ""
                    NLec.innerHTML = `<pre>
<u>Subject</u>:
Life skills 
<u>Faculty:</u>
Sandip Kisave Sir(F1)/Pooja Potdar Mam(F2)
<u>Location:</u>
Classroom 6401(F1) / Classroom 6406(F2)</pre>`
                    NFac.innerHTML = ""
                    NLoc.innerHTML = ""
                    document.querySelector("good error").write("Fix bug")
                }
                else if (currentDate.getDay() === 4 && currentDate.getHours() === 13 || currentDate.getDay() === 4 && currentDate.getHours() === 14) {
                    current.innerHTML = "Ongoing"
                    next.innerHTML = "Next"
                    CLec.innerHTML = `<pre>
<u>Subject</u>:
Life skills 
<u>Faculty:</u>
Sandip Kisave Sir(F1)/Pooja Potdar Mam(F2)
<u>Location:</u>
Classroom 6401(F1) / Classroom 6406(F2)</pre>`
                    CFac.innerHTML = ""
                    CLoc.innerHTML = ""
                    NLec.innerHTML = `<pre>
<u>Subject</u>:
PSPP lab(F1) / Chem lab(F2) / DS lab(F3)
<u>Faculty:</u>
SuS(F1) / PPJ(F2) / SamS(F3)
<u>Location:</u>
Lab 6506(F1) / Lab 6407(F2) / Lab 6507(F3)</pre>`
                    NFac.innerHTML = ""
                    NLoc.innerHTML = ""
                    document.querySelector("good error").write("Fix bug")
                }
                else if (currentDate.getDay() === 4 && currentDate.getHours() === 15 || currentDate.getDay() === 4 && currentDate.getHours() === 16) {
                    current.innerHTML = "Ongoing"
                    next.innerHTML = "Next"
                    CLec.innerHTML = `<pre>
<u>Subject</u>:
PSPP lab(F1) / Chem lab(F2) / DS lab(F3)
<u>Faculty:</u>
SuS(F1) / PPJ(F2) / SamS(F3)
<u>Location:</u>
Lab 6506(F1) / Lab 6407(F2) / Lab 6507(F3)</pre>`
                    CFac.innerHTML = ""
                    CLoc.innerHTML = ""
                    NLec.innerHTML = "No Lectures"
                    NFac.innerHTML = ""
                    NLoc.innerHTML = ""
                    document.querySelector("good error").write("Fix bug")
                }
                // For Friday
                else if (currentDate.getDay() === 5 && currentDate.getHours() < 9) {
                    current.innerHTML = "Upcoming"
                    next.innerHTML = "Lectures today"
                    CLec.innerHTML = `<pre>
<u>Subject</u>:
German(New B-2) / Japanese(New)
<u>Location:</u>
Classroom 6402 / Classroom 6406</pre>`
                    CFac.innerHTML = ""
                    CLoc.innerHTML = ""
                    NLec.innerHTML = `<pre>
German(New B-2) / Japanese(New),
DS lab(F1) / PSPP lab(F2) / MC tutorial(F3)</pre>`
                    NFac.innerHTML = ""
                    NLoc.innerHTML = ""
                    document.querySelector("good error").write("Fix bug")
                }
                else if (currentDate.getDay() === 5 && currentDate.getHours() === 9 || currentDate.getDay() === 5 && currentDate.getHours() === 10) {
                    current.innerHTML = "Ongoing"
                    next.innerHTML = "Next"
                    CLec.innerHTML = `<pre>
<u>Subject</u>:
German(New B-2) / Japanese(New)
<u>Location:</u>
Classroom 6402 / Classroom 6406</pre>`
                    CFac.innerHTML = ""
                    CLoc.innerHTML = ""
                    NLec.innerHTML = "Short Break"
                    NFac.innerHTML = ""
                    NLoc.innerHTML = ""
                    document.querySelector("good error").write("Fix bug")
                }
                else if (currentDate.getDay() === 5 && currentDate.getHours() === 11 && currentDate.getMinutes() < 11) {
                    current.innerHTML = "Ongoing"
                    next.innerHTML = "Next"
                    CLec.innerHTML = "Short Break"
                    CFac.innerHTML = ""
                    CLoc.innerHTML = ""
                    NLec.innerHTML = `<pre>
<u>Subject</u>:
DS lab(F1) / PSPP lab(F2) / MC tutorial(F3)
<u>Faculty:</u>
SamS(F1) / SuS(F2) / RJT(F3)
<u>Location:</u>
Lab 6507(F1) / Lab 6506(F2) / Lab 6508(F3)</pre>`
                    NFac.innerHTML = ""
                    NLoc.innerHTML = ""
                    document.querySelector("good error").write("Fix bug")
                }
                else if (currentDate.getDay() === 5 && currentDate.getHours() === 11 && currentDate.getMinutes() >= 10 || currentDate.getDay() === 5 && currentDate.getHours() === 12 || currentDate.getDay() === 5 && currentDate.getHours() === 13 && currentDate.getMinutes() < 11) {
                    current.innerHTML = "Ongoing"
                    next.innerHTML = "Next"
                    CLec.innerHTML = `<pre>
<u>Subject</u>:
DS lab(F1) / PSPP lab(F2) / MC tutorial(F3)
<u>Faculty:</u>
SamS(F1) / SuS(F2) / RJT(F3)
<u>Location:</u>
Lab 6507(F1) / Lab 6506(F2) / Lab 6508(F3)</pre>`
                    CFac.innerHTML = ""
                    CLoc.innerHTML = ""
                    NLec.innerHTML = "Lunch Break"
                    NFac.innerHTML = ""
                    NLoc.innerHTML = ""
                    document.querySelector("good error").write("Fix bug")
                }
                else if (currentDate.getDay() === 5 && currentDate.getHours() === 13 && currentDate.getMinutes() >= 10) {
                    current.innerHTML = "Ongoing"
                    next.innerHTML = "Next"
                    CLec.innerHTML = "Lunch Break"
                    CFac.innerHTML = ""
                    CLoc.innerHTML = ""
                    NLec.innerHTML = "Subject - Digital Systems"
                    NFac.innerHTML = "Faculty - Samruddhi Shaha Mam"
                    NLoc.innerHTML = "Location - Classroom 6510"
                    document.querySelector("good error").write("Fix bug")
                }
                else if (currentDate.getDay() === 5 && currentDate.getHours() === 14) {
                    current.innerHTML = "Ongoing"
                    next.innerHTML = "Next"
                    CLec.innerHTML = "Subject - Digital Systems"
                    CFac.innerHTML = "Faculty - Samruddhi Shaha Mam"
                    CLoc.innerHTML = "Location - Classroom 6510"
                    NLec.innerHTML = `<pre>
<u>Subject</u>:
DS lab(F1) / PSPP lab(F2) / Chem lab(F3)
<u>Faculty:</u>
SamS(F1) / SuS(F2) / RJT(F3)
<u>Location:</u>
Lab 6507(F1) / Lab 6506(F2) / Lab 6408(F3)</pre>`
                    NFac.innerHTML = ""
                    NLoc.innerHTML = ""
                    document.querySelector("good error").write("Fix bug")
                }
                else if (currentDate.getDay() === 5 && currentDate.getHours() === 15 || currentDate.getDay() === 5 && currentDate.getHours() === 16) {
                    current.innerHTML = "Ongoing"
                    next.innerHTML = "Next"
                    CLec.innerHTML = `<pre>
<u>Subject</u>:
DS lab(F1) / PSPP lab(F2) / Chem lab(F3)
<u>Faculty:</u>
SamS(F1) / SuS(F2) / RJT(F3)
<u>Location:</u>
Lab 6507(F1) / Lab 6506(F2) / Lab 6408(F3)</pre>`
                    CFac.innerHTML = ""
                    CLoc.innerHTML = ""
                    NLec.innerHTML = "No Lectures"
                    NFac.innerHTML = ""
                    NLoc.innerHTML = ""
                    document.querySelector("good error").write("Fix bug")
                }
                else {
                    CLec.innerHTML = "No upcoming lectures today"
                    current.innerHTML = ""
                    next.innerHTML = ""
                    CLoc.innerHTML = ""
                    CFac.innerHTML = ""
                    NLec.innerHTML = ""
                    NLoc.innerHTML = ""
                    NFac.innerHTML = ""
                }
            }, 2000);
            today1.addEventListener("click", function () {
                clearInterval(interval)
            })
            back1.addEventListener("click", function () {
                give()
            })
        }
        give()
    }
    else {
        console.log("Not my division")
    }
    console.log("hi");
}
let today1 = document.querySelector(".today")
let back1 = document.querySelector(".back")
function today() {
    let interval1 = setInterval(() => {
        var currentDate = new Date();
        today1.style.display = "none"
        back1.style.display = "block"
        next.innerHTML = ""
        current.innerHTML = ""
        CLec.innerHTML = ""
        CFac.innerHTML = ""
        CLoc.innerHTML = ""
        NLec.innerHTML = ""
        NFac.innerHTML = ""
        NLoc.innerHTML = ""
        let todayfull = document.createElement("div")
        todayfull.className = "tflex"
        CLec.appendChild(todayfull)
        let t1 = document.createElement("div")
        t1.className = "t1"
        let t2 = document.createElement("div")
        t1.className = "t2"
        let t3 = document.createElement("div")
        t1.className = "t3"
        let t4 = document.createElement("div")
        t1.className = "t4"
        let t5 = document.createElement("div")
        t1.className = "t5"
        let t6 = document.createElement("div")
        t1.className = "t6"
        let t7 = document.createElement("div")
        t1.className = "t7"
        let t8 = document.createElement("div")
        t1.className = "t8"
        let t9 = document.createElement("div")
        t1.className = "t9"
        todayfull.appendChild(t1)
        todayfull.appendChild(t2)
        todayfull.appendChild(t3)
        todayfull.appendChild(t4)
        todayfull.appendChild(t5)
        todayfull.appendChild(t6)
        todayfull.appendChild(t7)
        todayfull.appendChild(t8)
        todayfull.appendChild(t9)
        // For Monday
        if (currentDate.getDay() === 1) {
            t1.innerHTML = "Today's Schedule"
            t2.innerHTML = "DS - 09:00 to 10:00"
            t3.innerHTML = "NT - 10:00 to 11:00"
            t4.innerHTML = "Chem - 11:10 to 12:10"
            t5.innerHTML = "Lunch Break - 12:10 to 13:00"
            t6.innerHTML = "Chem(F1)/DS(F2)/PSPP(F3)"
            t7.innerHTML = "- 13:00 to 15:00"
            t8.innerHTML = "German / Japanese - 15:00 to 17:00"
            t9.innerHTML = "Lecture ends at 17:00"
        } 
        else if(currentDate.getDay() === 2) {
            t1.innerHTML = "Today's Schedule"
            t2.innerHTML = "MC(F1) / DS(F2) / PSPP(F3)"
            t3.innerHTML = "- 09:00 to 11:00"
            t4.innerHTML = "IKS - 11:10 to 13:00"
            t5.innerHTML = "Lunch Break - 13:00 to 14:00"
            t6.innerHTML = "DS - 14:00 to 15:00"
            t7.innerHTML = "Chem - 15:00 to 16:00"
            t8.innerHTML = "N5 Japanese - 16:00 to 17:00"
            t9.innerHTML = "Lecture ends at 17:00"
        }
        else if(currentDate.getDay() === 3) {
            t1.innerHTML = "Today's Schedule"
            t2.innerHTML = "MC - 09:00 to 10:00"
            t3.innerHTML = "Chem - 10:00 to 11:00"
            t4.innerHTML = "NT - 11:10 to 12:10"
            t5.innerHTML = "Lunch Break - 12:10 to 13:00"
            t6.innerHTML = "PSPP(F1) / MC(F2) / DS(F3)"
            t7.innerHTML = "- 13:00 to 15:00"
            t8.innerHTML = "Life Skills - 15:00 to 17:00"
            t9.innerHTML = "Lecture ends at 17:00"
        }
        else if(currentDate.getDay() === 4) {
            t1.innerHTML = "Today's Schedule"
            t2.innerHTML = "MC - 11:10 to 12:10"
            t3.innerHTML = "Lunch Break - 12:10 to 13:00"
            t4.innerHTML = "Life Skills - 13:00 to 15:00"
            t5.innerHTML = "PSPP(F1)/Chem(F2)/DS(F3)"
            t6.innerHTML = "- 15:00 to 17:00"
            t7.innerHTML = "Lecture ends at 17:00"
        }
        else if(currentDate.getDay() === 5) {
            t1.innerHTML = "German / Japanese - 09:00 to 11:00"
            t2.innerHTML = "DS(F1) / PSPP(F2) / MC(F3)"
            t3.innerHTML = "- 11:10 to 13:10"
            t4.innerHTML = "Lunch Break - 13:10 to 14:00"
            t5.innerHTML = "DS - 14:00 to 15:00"
            t6.innerHTML = "DS(F1) / PSPP(F2) / Chem(F3)"
            t7.innerHTML = "- 15:00 to 17:00"
            t8.innerHTML = "Lecture ends at 17:00"
        }
        else {
            t1.innerHTML = "No lectures today"
        }
    }, 100);
    back1.addEventListener("click", function () {
        clearInterval(interval1)
    })
}
function back() {
    back1.style.display = "none"
    today1.style.display = "block"
}
today1.addEventListener("click", today)
back1.addEventListener("click", back)