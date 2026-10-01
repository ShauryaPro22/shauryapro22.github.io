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

    });

});
