'use strict';

const translations = {
  English: {
    "data-tab-title": "Israel Díaz - Personal Portfolio",
    "data-info-title": "Computer Science Engineer - Developer",
    "data-contacts": "Show Contacts",
    "data-contact-phone": "Phone",
    "data-contact-location": "Location",
    "data-navbar-about": "About me",
    "data-navbar-resume": "Resume",
    "data-navbar-portfolio": "Portfolio",
    "data-about-title": "About me",
    "data-navbar-resume": "Curriculum",
    "data-navbar-portfolio": "Portfolio",
    "data-about-title": "About me",
    "data-about-text": "<p> I am a Software Developer originally from Valdivia, Chile. \
            I love exploring different areas and problems and then contributing ideas to solve and improve\
            people's experiences.\
          </p>\
          <p>\
            My work mainly focuses on the integration of technologies and communication in the electronic world\
            with the computer scientist, generating solutions adapted to the needs. Personally, I like to wear the\
            computer solutions to the tangible world and new environments.\
          </p>\
          <p>\
            On the other hand, I love video games and the different universes to which they can transport you, which\
            which has led me to level design for video games, building worlds to host stories\
            incredible and creating experiences from surprising worlds\
          </p>",
    "data-working-on": "What am I doing?",
    "data-vg-design-title": "Video Game Design",
    "data-vg-design-text": "Level design for video games",
    "data-sw-dev-title": "Software Development",
    "data-sw-dev-text": "Web platform development",
    "data-iot-title": "Internet of Things",
    "data-iot-text": "IoT device integration",
    "data-docker-title": "Containerization",
    "data-docker-text": "Developing scalable solutions using containers",
    "data-resume-title": "Curriculum Vitae",
    "data-resume-download": "Download Curriculum",
    "data-resume-timeline-studies": "Education",
    "data-resume-timeline-cyber-linkedin": "Professional Fundamentals in Cybersecurity Course",
    "data-resume-timeline-cyber-telefonica": "Cybersecurity course in digital learning environments",
    "data-resume-timeline-programming-telefonica": "Diploma in Fundamentals of Web Programming and Development",
    "data-resume-timeline-uach": "Civil Engineering in IT",
    "data-timeline-working-experience": "Work Experience",
    "data-resume-level-design": "Level Designer",
    "data-resume-level-design-text": "Main level designer in Ibis Interactive",
    "data-resume-developer": "Developer",
    "data-resume-developer-siga": "developer within the SiGA UACh project",
    "data-resume-developer-po": "developer within the ProactiveOffice.com team",
    "data-resume-developer-sysadmin": "Developer & Systems Administrator",
    "data-resume-developer-sysadmin-text": "Survey of computer systems, database administration and network management. Public good project 16BPE-62326",
    "data-skills": "My Skills",
    "data-skills-microcontrollers": "Arduino / Microcontrollers",
    "data-skills-webdev": "Web Development",
    "data-skills-lvl-design": "Game Design / Level Design"


  },
  Español: {
    "data-tab-title": "Israel Díaz - Portafolio Personal",
    "data-info-title": "Ing. Informático - Desarrollador",
    "data-contacts": "Mostrar Contactos",
    "data-contact-email": "Correo electrónico",
    "data-contact-phone": "Teléfono",
    "data-contact-location": "Ubicación",
    "data-navbar-about": "Acerca de mi",
    "data-navbar-resume": "Curriculum",
    "data-navbar-portfolio": "Portafolio",
    "data-about-title": "Acerca de mí",
    "data-about-text": "<p> Soy un Desarrollador de Software originario de Valdivia, Chile. \
            Me encanta explorar distintas áreas y problemáticas para luego aportar con ideas para solucionar y mejorar\
            las experiencias de las personas.\
          </p>\
          <p>\
            Mi trabajo principalmente se enfoca en la integración de tecnologías y la comunicación del mundo electrónico\
            con el informático, generando soluciones adaptadas a las necesidades. En lo personal me gusta llevar las\
            soluciones informáticas al mundo tangible y ambientes nuevos.\
          </p>\
          <p>\
            Por otra parte, me encantan los videojuegos y los distintos universos a los que te pueden transportar, lo\
            que me ha llevado al diseño de niveles para videojuegos, construyendo mundos para alojar historias\
            increibles y creando experiencias a partir de mundos sorprendentes\
          </p>",
    "data-working-on": "¿Qué estoy haciendo?",
    "data-vg-design-title": "Diseño de Video Juegos",
    "data-vg-design-text": "Diseño de niveles para videojuegos",
    "data-sw-dev-title": "Desarrollo de Software",
    "data-sw-dev-text": "Desarrollo de plataformas web",
    "data-iot-title": "Internet de las cosas",
    "data-iot-text": "Integración de dispositivos IoT",
    "data-docker-title": "Containerización",
    "data-docker-text": "Desarrollo de soluciones escalables mediante contenedores",
    "data-resume-title": "Curriculum Vitae",
    "data-resume-download": "Descargar Curriculum",
    "data-resume-timeline-studies": "Educación",
    "data-resume-timeline-cyber-linkedin": "Curso de Fundamentos profesionales en ciberseguridad",
    "data-resume-timeline-cyber-telefonica": "Curso de Ciberseguridad en entornos de aprendizajes digitales",
    "data-resume-timeline-programming-telefonica": "Diplomado en Fundamentos de la Programación y Desarrollo Web",
    "data-resume-timeline-uach": "Ingeniería Civil en informática",
    "data-timeline-working-experience": "Experiencia Laboral",
    "data-resume-level-design": "Level Designer",
    "data-resume-level-design-text": "Principal diseñador de niveles en Ibis Interactive",
    "data-resume-developer": "Desarrollador",
    "data-resume-developer-siga": "desarrollador dentro del proyecto SiGA UACh",
    "data-resume-developer-po": "desarrollador dentro del equipo de ProactiveOffice.com",
    "data-resume-developer-sysadmin": "Desarrollador & Administrador de Sistemas",
    "data-resume-developer-sysadmin-text": "Levantamiento de sistemas informáticos, administración de bases de datos y gestión de redes. Proyecto de bien público 16BPE-62326",
    "data-skills": "Mis habilidades",
    "data-skills-microcontrollers": "Arduino / Microcontroladores",
    "data-skills-webdev": "Desarrollo Web",
    "data-skills-lvl-design": "Diseño de videojuegos / Diseño de niveles"
  }
};



const updateContent = (language) => {
  Object.keys(translations[language]).forEach((translation) => {
    document.querySelector("[" + translation + "]").innerText = translations[language][translation];
  });
  document.querySelector("[data-about-text]").innerHTML = translations[language]["data-about-text"];
};

const languageSelect = document.getElementById("language-select");
// Detecta el cambio de idioma
languageSelect.addEventListener("change", function () {
  const selectedLanguage = this.value;
  updateContent(selectedLanguage);
});

updateContent("Español");

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}


const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.getAttribute("data-article") === pages[i].id) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}