console.log("SHAURYA JS LOADED");


// Project links

const projectLinks = {
    calculator: "https://github.com/ShauryaPro22/shauryapro22.github.io/blob/main/Python%20calculator.py",
    "tic-tac-toe": "https://github.com/ShauryaPro22/shauryapro22.github.io/blob/main/TIC-TAC-TOE%20by%20Shaurya.py",
    titanic: "https://www.tinkercad.com/things/hjfiAHhJu8r-definitely-not-the-sunken-ship-from-1912",
    "costa-concordia": "PASTE-COSTA-CONCORDIA-LINK-HERE",
    arduino: "PASTE-ARDUINO-LINK-HERE"
};


// Make project cards clickable

document.querySelectorAll(".project").forEach(project => {

    project.addEventListener("click", () => {

        const link = projectLinks[project.id];

        if (link && !link.startsWith("PASTE-")) {
            window.open(link, "_blank");
        }



        // Live IST clock

function updateIST() {
    const timeElement = document.getElementById("ist-time");

    if (!timeElement) return;

    const now = new Date();

    const istTime = now.toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    });

    timeElement.textContent = istTime + " IST";
}

updateIST();
setInterval(updateIST, 1000);

    });

});
