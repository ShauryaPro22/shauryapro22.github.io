console.log("SHAURYA JS LOADED");


// =========================================================
// PROJECT LINKS
// =========================================================

const projectLinks = {
    calculator: "https://github.com/ShauryaPro22/shauryapro22.github.io/blob/main/Python%20calculator.py",

    "tic-tac-toe": "https://github.com/ShauryaPro22/shauryapro22.github.io/blob/main/TIC-TAC-TOE%20by%20Shaurya.py",

    titanic: "https://www.tinkercad.com/things/hjfiAHhJu8r-definitely-not-the-sunken-ship-from-1912?sharecode=GFX2zvMNsWDQmkGhvcTWry6rP6IayU0gEHSU36MkNKc",

    "costa-concordia": "PASTE-COSTA-CONCORDIA-LINK-HERE",

    arduino: "PASTE-ARDUINO-LINK-HERE"
};


// =========================================================
// MAKE PROJECT CARDS CLICKABLE
// =========================================================

document.querySelectorAll(".project").forEach(project => {

    project.addEventListener("click", () => {

        const link = projectLinks[project.id];

        if (link && !link.startsWith("PASTE-")) {

            window.open(link, "_blank");

        }

    });

});


// =========================================================
// LIVE IST CLOCK
// =========================================================

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


// =========================================================
// CLOSING GEOMETRIC BACKGROUND
// =========================================================

const canvas = document.getElementById("geometry-canvas");

if (canvas) {

    const ctx = canvas.getContext("2d");

    let points = [];


    // =====================================================
    // RESIZE CANVAS
    // =====================================================

    function resizeCanvas() {

        const section = document.getElementById("closing");

        if (!section) return;

        canvas.width = section.offsetWidth;
        canvas.height = section.offsetHeight;

        createPoints();
    }


    // =====================================================
    // CREATE MOVING POINTS
    // =====================================================

    function createPoints() {

        points = [];

        const amount = Math.floor(
            (canvas.width * canvas.height) / 18000
        );


        for (let i = 0; i < amount; i++) {

            points.push({

                x: Math.random() * canvas.width,

                y: Math.random() * canvas.height,

                vx: (Math.random() - 0.5) * 0.25,

                vy: (Math.random() - 0.5) * 0.25

            });

        }

    }


    // =====================================================
    // DRAW ANIMATION
    // =====================================================

    function draw() {

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );


        // -------------------------------------------------
        // MOVE AND DRAW POINTS
        // -------------------------------------------------

        points.forEach(point => {

            point.x += point.vx;
            point.y += point.vy;


            // Wrap around horizontal edges

            if (point.x < 0) {

                point.x = canvas.width;

            }

            if (point.x > canvas.width) {

                point.x = 0;

            }


            // Wrap around vertical edges

            if (point.y < 0) {

                point.y = canvas.height;

            }

            if (point.y > canvas.height) {

                point.y = 0;

            }


            // Draw point

            ctx.beginPath();

            ctx.arc(
                point.x,
                point.y,
                1.2,
                0,
                Math.PI * 2
            );

            ctx.fillStyle =
                "rgba(255, 255, 255, 0.35)";

            ctx.fill();

        });


        // -------------------------------------------------
        // CONNECT NEARBY POINTS
        // -------------------------------------------------

        for (
            let i = 0;
            i < points.length;
            i++
        ) {

            for (
                let j = i + 1;
                j < points.length;
                j++
            ) {

                const dx =
                    points[i].x - points[j].x;

                const dy =
                    points[i].y - points[j].y;

                const distance =
                    Math.sqrt(
                        dx * dx +
                        dy * dy
                    );


                if (distance < 130) {

                    const opacity =
                        (1 - distance / 130) * 0.18;


                    ctx.beginPath();

                    ctx.moveTo(
                        points[i].x,
                        points[i].y
                    );

                    ctx.lineTo(
                        points[j].x,
                        points[j].y
                    );


                    ctx.strokeStyle =
                        `rgba(255, 255, 255, ${opacity})`;

                    ctx.lineWidth = 0.7;

                    ctx.stroke();

                }

            }

        }


        // Keep animation running

        requestAnimationFrame(draw);

    }


    // =====================================================
    // HANDLE WINDOW RESIZE
    // =====================================================

    window.addEventListener(
        "resize",
        resizeCanvas
    );


    // Start everything

    resizeCanvas();

    draw();

}
