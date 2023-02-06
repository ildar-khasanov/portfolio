const btnDark = document.querySelector(".button");

function addClassHtml() {
    btnDark.classList.add("button-dark--active");
    document.body.classList.add("dark");
}

function removeClassHtml() {
    btnDark.classList.remove("button-dark--active");
    document.body.classList.remove("dark");
}

window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
        const colorScheme = e.matches ? "dark" : "false";

        if (colorScheme === "dark") {
            addClassHtml();
        } else {
            removeClassHtml();
        }
    });

if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
) {
    addClassHtml();
}

// Проверка темной темы localStorage
if (localStorage.getItem("darkMode") === "dark") {
    addClassHtml();
} else {
    removeClassHtml();
}

// Включение ночного режима по кнопке
btnDark.onclick = function () {
    btnDark.classList.toggle("button-dark--active");

    const isDark = document.body.classList.toggle("dark");
    if (isDark) {
        localStorage.setItem("darkMode", "dark");
    } else {
        localStorage.setItem("darkMode", "light");
    }
};
