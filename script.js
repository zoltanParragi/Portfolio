
const mobileMenuItemsStyle = document.querySelector('nav>#mobile-menu>#mobile-menu-items').style

document.querySelector('#mobile-menu>img').onclick = () => {
    if(mobileMenuItemsStyle.display !== "block") {
        mobileMenuItemsStyle.display = "block"
    } else {
        mobileMenuItemsStyle.display = "none"
    }
}

document.querySelectorAll('#mobile-menu-items>div').forEach((e) => {
    e.onclick = () => {
        mobileMenuItemsStyle.display = "none"
    }
})

const langObj = {
    "hu": {
        "LOGO": "&lt PZ &gt",
        "HOME_NAV": "Kezdőlap",
        "ABOUT_NAV": "Rólam",
        "WORKS_NAV": "Munkáim",
        "CONTACT_NAV": "Kapcsolat",
        "HEADER_GREETING": "Üdvözlöm!",
        "HEADER_TEXT1": "Parragi Zoltán vagyok, full-stack web fejlesztő.",
        "HEADER_TEXT2": "Bagodban, Zalaegerszeg mellett lakom.",
        "HEADER_BUTTON": "A legfontosabbak rólam",
        "LANG": "Nyelvek",
        "ABOUT_ABOUT": "Rólam",
        "ABOUT_SKILLS": "Web fejlesztő készségek",
        "ABOUT_WORKS": "A <a href='#portfolio'>munkáimban</a> látható hogyan használom a készségeimet a gyakorlatban.",
        "ABOUT_3THINGS": "3 random dolog rólam",
        "ABOUT_THING1": "Matematika tanárként dolgoztam több mint 20 évig. Nem ijedek meg a megoldandó problémáktól.",
        "ABOUT_THING2": "Szívesen tanulok és szívesen segítek másokat az előre haladásban.",
        "ABOUT_THING3": "Kedvenc dolgaim: család, gitározás, ... , a programozás is gyönyörködtet.",
        "ABOUT_CVBUTTON_HU": "Önéletrajzom (HU)",
        "ABOUT_CVBUTTON_EN": "Önéletrajzom (EN)",
        "PORTFOLIO_TITLE": "Munkáim",
        "PORTFOLIO_SITE_TITLE": "Portfólió oldal",
        "PORTFOLIO_SITE_DESCRIPTION": "Az oldal célja egy rövid bemutatkozás. HTML, CSS és JavaScript használatával készült.",
        "PROJECT_DETAILS_LINK": "további részletek ...",
        "FAMILY_SHOPPINGLIST_TITLE": "Családi bevásárló lista",
        "FAMILY_SHOPPINGLIST_DESCRIPTION": "Natív PHP segítségével készült egyszerű bevásárló lista alklamazás.",
        "PROJECT_VISIT_BUTTON": "Meglátogatom",
        "BEEKEEPER_TITLE": "Egy méhészet bemutató oldala",
        "BEEKEEPER_DESCRIPTION": "Itt egy képzeletbeli méhész család mutatja be a termékeit. Bootstrap, jQuery, Typed.js használatával készült.",
        "RECIPES_DESCRIPTION": "Mindenkivel előfordul, hogy kifogy az ötletekből. Receptek keresése React, Redux, Redux Thunk használatával.",
        "ADMIN_PANEL_DESCRIPTION": "Felhasználók kezelése (regisztráció, bejelentkezés, adatok módosítása, ...) Laravel és React segítségével.",
        "CONTACT_TITLE": 'Kapcsolat',
        "FORM_NAME": "Név",
        "FORM_MESSAGE": "Üzenet",
        "FORM_BUTTON": "Elküld",
        "FOOTER_TITLE": "Itt vagyok még megtalálható"

    },
    "en": {
        "LOGO": "&lt ZP &gt",
        "HOME_NAV": "Home",
        "ABOUT_NAV": "About",
        "WORKS_NAV": "My works",
        "CONTACT_NAV": "Contact",
        "HEADER_GREETING": "Hi!",
        "HEADER_TEXT1": "I'm Zoltán Parragi, a full-stack web developer.",
        "HEADER_TEXT2": "I live in Bagodban, Hungary.",
        "HEADER_BUTTON": "About me",
        "LANG": "Languages",
        "ABOUT_ABOUT": "About",
        "ABOUT_SKILLS": "Web developer skills",
        "ABOUT_WORKS": "You can see how I use my skills in <a href='#portfolio'>my works</a>.",
        "ABOUT_3THINGS": "3 random facts about me",
        "ABOUT_THING1": "I worked as a maths teacher for more than 20 years. I am not afraid of the problems I have to solve.",
        "ABOUT_THING2": "I enjoy learning and helping others to move forward.",
        "ABOUT_THING3": "My favourite things: family, playing guitar, ... , I also enjoy programming.",
        "ABOUT_CVBUTTON_HU": "My CV (HU)",
        "ABOUT_CVBUTTON_EN": "My CV (EN)",
        "PORTFOLIO_TITLE": "My works",
        "PORTFOLIO_SITE_TITLE": "Portfolio webpage",
        "PORTFOLIO_SITE_DESCRIPTION": "The purpose of this page is to give you a brief introduction. It was created using HTML, CSS and JavaScript.",
        "PROJECT_DETAILS_LINK": "more details ...",
        "FAMILY_SHOPPINGLIST_TITLE": "Family shopping list",
        "FAMILY_SHOPPINGLIST_DESCRIPTION": "A simple shopping list for family use created with native PHP.",
        "PROJECT_VISIT_BUTTON": "Visit",
        "BEEKEEPER_TITLE": "Presentation page of an apiary",
        "BEEKEEPER_DESCRIPTION": "Here, an imaginary family of beekeepers presents their products. Created with Bootstrap, jQuery, Typed.js .",
        "RECIPES_DESCRIPTION": "Sometimes, everyone runs out of ideas. Find recipes using React, Redux, Redux Thunk.",
        "ADMIN_PANEL_DESCRIPTION": "User management (registration, login, user data modification, ...) using Laravel and React.",
        "CONTACT_TITLE": 'Contact',
        "FORM_NAME": "Name",
        "FORM_MESSAGE": "Message",
        "FORM_BUTTON": "Send",
        "FOOTER_TITLE": "You can find me here too"
    }
}

let lang = "hu"
const languageChoice = document.querySelector("#languageChoice")
languageChoice.addEventListener('click', function() { 
    lang === "hu" ? changeLanguage("en") : changeLanguage("hu")
    lang === "hu" ? lang = "en" : lang ="hu"
});
//console.log(document.querySelector("#languageChoice"))
//document.querySelector("#languageChoice").onclick = () => alert("ok")

//document.querySelector("#languageChoice").onclick() = alert("ok")


/* languageChoice.addEventListener("click", function() {
    console.log("ok")
    lang === "hu" ? changeLanguage("en") : changeLanguage("hu")
}); */

function changeLanguage(lang) {
    document.querySelectorAll('.lang').forEach(e => {
        e.innerHTML = langObj[lang][e.getAttribute("key")]
        //console.log(langObj[lang][e.getAttribute("key")])
        lang == "hu" ? document.title = 'Parragi Zoltán' : document.title = 'Zoltán Parragi'
        lang == "hu" ? languageChoice.innerHTML = "English" : languageChoice.innerHTML = "Hungarian"
    })
}

/* 
function changeTitle() {
 document.title = 'LinuxHint';
}
*/



