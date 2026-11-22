function applySettings() {

    const language =
        localStorage.getItem("wethaqLanguage") || "ar";

    const theme =
        localStorage.getItem("wethaqTheme") || "normal";

    document.documentElement.lang = language;

    document.documentElement.dir =
        language === "ar" ? "rtl" : "ltr";

    document.body.classList.toggle(
        "heritage",
        theme === "heritage"
    );

    document.querySelectorAll("[data-ar][data-en]").forEach(element => {

        element.textContent =
            element.getAttribute(
                language === "ar" ? "data-ar" : "data-en"
            );

    });
}

function changeLanguage() {

    const current =
        localStorage.getItem("wethaqLanguage") || "ar";

    localStorage.setItem(
        "wethaqLanguage",
        current === "ar" ? "en" : "ar"
    );

    applySettings();
}

function changeTheme() {

    const current =
        localStorage.getItem("wethaqTheme") || "normal";

    localStorage.setItem(
        "wethaqTheme",
        current === "normal" ? "heritage" : "normal"
    );

    applySettings();
}

applySettings();