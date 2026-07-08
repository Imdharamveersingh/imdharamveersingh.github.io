const roles = [
    "E-Commerce Growth Specialist",
    "Shopify Expert",
    "WordPress Developer",
    "Marketplace Expert",
    "AI Automation Enthusiast"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {

    current = roles[i];

    if (!isDeleting) {

        document.getElementById("typing").textContent =
            current.substring(0, j++);

        if (j > current.length) {
            isDeleting = true;
            setTimeout(type, 1200);
            return;
        }

    } else {

        document.getElementById("typing").textContent =
            current.substring(0, j--);

        if (j == 0) {
            isDeleting = false;
            i = (i + 1) % roles.length;
        }

    }

    setTimeout(type, isDeleting ? 35 : 80);

}

type();