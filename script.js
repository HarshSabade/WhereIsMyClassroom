function day() {
    let CLec = document.querySelector(".clecture")
    let CFac = document.querySelector(".cfaculty")
    let CLoc = document.querySelector(".clocation")
    let NLec = document.querySelector(".nlecture")
    let NFac = document.querySelector(".nfaculty")
    let NLoc = document.querySelector(".nlocation")
    let next = document.querySelector(".next")
    let current = document.querySelector(".current")
    let sel = document.getElementById("f").selected;
    if (sel === true) {
        function give() {
            var interval = setInterval(function () {
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
                    NFac.innerHTML=""
                    NLoc.innerHTML=""
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
                else
                    CLec.innerHTML = "No upcoming lectures today"
                current.innerHTML = ""
                next.innerHTML = ""
                CLoc.innerHTML = ""
                CFac.innerHTML = ""
                NLec.innerHTML = ""
                NLoc.innerHTML = ""
                NFac.innerHTML = ""
            }, 2000);
        }
        give()
    }
    else {
        console.log("Not my division")
    }
    console.log("hi");
}