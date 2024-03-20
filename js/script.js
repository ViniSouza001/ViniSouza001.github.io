const body = document.querySelector("body");
const cobrirSegundaAnimacao = document.querySelector(".cobrirSegundaAnimacao");
const todasLetras = document.querySelectorAll(".letra");
const nomePrateado = document.querySelectorAll(".nomePrateado");
const skipAnimation = document.querySelector("#btn-skip");
// div da animacao ira aparecer depois de 3s
const containerAnimation = document.querySelector(".container-animation");

const animation = () => {
  setTimeout(() => {
    containerAnimation.classList.remove("hidden");
  }, 2000);

  const i1 = document.querySelector(".i1");
  const cobrindoI1 = document.querySelector(".cobrindoI1");
  const pingoI1 = document.querySelector(".pingoI1");

  const letraN = document.querySelector(".n");
  const cobrindoN = document.querySelector(".cobrindoN");

  const i2 = document.querySelector(".i2");
  const cobrindoI2 = document.querySelector(".cobrindoI2");
  const pingoI2 = document.querySelector(".pingoI2");

  const i3 = document.querySelector(".i3");
  const cobrindoI3 = document.querySelector(".cobrindoi3");
  const pingoI3 = document.querySelector(".pingoI3");

  const letraU1 = document.querySelector(".u1");
  const cobrindoU1 = document.querySelector(".cobrindoU1");

  const letraS1 = document.querySelector(".s1");
  const cobrindoS1 = document.querySelector(".cobrindoS1");

  const letraS2 = document.querySelector(".s2");
  const cobrindoS2 = document.querySelector(".cobrindoS2");

  const letraO = document.querySelector(".o");
  const cobrindoO = document.querySelector(".cobrindoO");

  const conjuntoZ = document.querySelectorAll(".animationZ");

  const letraA = document.querySelector(".a");
  const cobrindoA = document.querySelector(".cobrindoA");

  // Script para letras que irão ter um delay para aparecerem
  letraN.style.display = "none";
  cobrindoN.style.display = "none";

  letraU1.style.display = "none";
  cobrindoU1.style.display = "none";

  letraS1.style.display = "none";
  cobrindoS1.style.display = "none";

  letraS2.style.display = "none";
  cobrindoS2.style.display = "none";

  letraO.style.display = "none";
  cobrindoO.style.display = "none";

  i1.style.display = "none";
  cobrindoI1.style.display = "none";
  pingoI1.style.display = "none";

  i2.style.display = "none";
  cobrindoI2.style.display = "none";
  pingoI2.style.display = "none";

  i3.style.display = "none";
  cobrindoI3.style.display = "none";
  pingoI3.style.display = "none";

  conjuntoZ.forEach((element) => {
    element.style.display = "none";
  });

  letraA.style.display = "none";
  cobrindoA.style.display = "none";

  setTimeout(() => {
    letraU1.style.display = "block";
    cobrindoU1.style.display = "block";

    letraS2.style.display = "flex";
    cobrindoS2.style.display = "flex";
  }, 4000);

  setTimeout(() => {
    letraN.style.display = "block";
    cobrindoN.style.display = "block";
    conjuntoZ.forEach((element) => {
      element.style.display = "block";
    });
  }, 5000);

  setTimeout(() => {
    letraO.style.display = "block";
    cobrindoO.style.display = "block";

    letraA.style.display = "block";
    cobrindoA.style.display = "block";

    letraS1.style.display = "block";
    cobrindoS1.style.display = "block";
  }, 7500);

  setTimeout(() => {
    // letras I's
    cobrindoN.style.display = "none";

    i1.style.display = "block";
    cobrindoI1.style.display = "block";

    i2.style.display = "block";
    cobrindoI2.style.display = "block";

    i3.style.display = "block";
    cobrindoI3.style.display = "block";
  }, 8000);

  setTimeout(() => {
    pingoI1.style.display = "block";
    pingoI2.style.display = "block";
    pingoI3.style.display = "block";
  }, 10000);

  setTimeout(() => {
    // letras I's
    cobrindoI1.style.display = "none";
    pingoI1.style.display = "none";

    cobrindoI2.style.display = "none";
    pingoI2.style.display = "none";

    cobrindoI3.style.display = "none";
    pingoI3.style.display = "none";
  }, 13000);

  setTimeout(() => {
    skipAnimation.classList.add("fadeout");
  }, 13500);

  setTimeout(() => {
    cobrirSegundaAnimacao.classList.add("animationSegundaAnimacao");
  }, 13000);

  setTimeout(() => {
    todasLetras.forEach((letra) => {
      letra.classList.add("hidden");
    });

    // remover div da animacao
    containerAnimation.remove();
    skipAnimation.remove();

    nomePrateado.forEach((name) => {
      name.classList.remove("hidden");
    });
  }, 14100);

  setTimeout(() => {
    nomePrateado.forEach((name) => {
      name.classList.add("animatioNomePrateadoII");
    });
  }, 14600);

  setTimeout(() => {
    homeMain.classList.remove("hidden");
    homeMain.classList.add("fadein");
  }, 16200);
};

animation();

skipAnimation.addEventListener("click", () => {
  containerAnimation.classList.add("fadeout");
  skipAnimation.classList.add("fadeout");
  cobrirSegundaAnimacao.style.display = "none";
  setTimeout(() => {
    containerAnimation.remove();
    nomePrateado.forEach((name) => {
      name.classList.remove("hidden");
      name.classList.add("fadein");
    });
  }, 1100);

  setTimeout(() => {
    nomePrateado.forEach((name) => {
      name.classList.remove("fadein");
      name.classList.add("animatioNomePrateadoII");
    });
  }, 2100);

  setTimeout(() => {
    homeMain.classList.remove("hidden");
    homeMain.classList.add("fadein");
  }, 3100);
});

// mains
const homeMain = document.querySelector("#homeMain");
const aboutMeMain = document.querySelector("#aboutMeMain");
const projMain = document.querySelector("#projMain");
const curriculumMain = document.querySelector("#curriculumMain");

// buttons
const btnAboutMe = document.querySelector("#about-me");
const btnProjects = document.querySelector("#projects");
const btnCurriculum = document.querySelector("#curriculum");

const header = document.querySelector(".limit");
const arrow1 = document.querySelectorAll(".back")[0];
const arrow2 = document.querySelectorAll(".back")[1];
const arrow3 = document.querySelectorAll(".back")[2];

// projects
const projs = document.querySelector(".projects").querySelector("section");
const projVideos = document.querySelector(".videos").querySelector("section");

const carregarProjetos = () => {
  projetos.forEach((projeto) => {
    const div = document.createElement("div");
    div.classList.add("projeto");
    div.innerHTML = `
    <a href="${projeto.linkProj}" target="_blank">
      <h3>${projeto.titulo}</h3>
      <img src="${projeto.imagem}" alt="img proj" />
      <p>${projeto.descricao}</p>
      <a href="${projeto.linkGit}" target="_blank">
        <p>
          See on GitHub
          <img src="./assets/github.png" alt="github img" id="github_logo"/>
        </p>
      </a>
    </a>
    `;
    projs.appendChild(div);
  });

  videos.forEach((video) => {
    const div = document.createElement("div");
    div.classList.add("projeto");
    div.innerHTML = `
      <a href="${video.link}">
        <h3>${video.titulo}</h3>
        <img src="${video.imagem}" alt="thumb video" />
        <p>${video.descricao}</p>
      </a>
    
    `;
    projVideos.appendChild(div);
  });
};

carregarProjetos();

const clearClasses = (element) => {
  element.forEach((eachElement) => {
    eachElement.classList.remove("hidden");
    eachElement.classList.remove("fadein-to-left");
    eachElement.classList.remove("fadein-to-right");
    eachElement.classList.remove("fadeout-to-left");
    eachElement.classList.remove("fadeout-to-right");
    eachElement.classList.remove("fadeout");
    eachElement.classList.remove("fadein");
  });
};

const fadeTimed = (elm, clss, time, add) => {
  setTimeout(() => {
    if (add) {
      elm.classList.add(clss);
    } else {
      elm.classList.remove(clss);
    }
  }, time);
};

const backAboutMe = () => {
  clearClasses([aboutMeMain, arrow1]);
  aboutMeMain.classList.add("fadeout-to-right");

  fadeTimed(homeMain, "fadeout-to-left", 700, false);
  fadeTimed(homeMain, "fadein-to-right", 700, true);
  fadeTimed(arrow1, "fadeout", 500, true);
};

const backProjects = () => {
  clearClasses([projMain]);
  projMain.classList.add("fadeout-to-left");

  fadeTimed(homeMain, "fadeout-to-right", 700, false);
  fadeTimed(homeMain, "fadein-to-left", 700, true);
  fadeTimed(arrow2, "fadeout", 500, true);
};

const backCurriculum = () => {
  clearClasses([curriculumMain]);
  curriculumMain.classList.add("fadeout-to-right");

  fadeTimed(homeMain, "fadeout-to-left", 700, false);
  fadeTimed(homeMain, "fadein-to-right", 700, true);
  fadeTimed(arrow3, "fadeout", 500, true);
};

const removeClass = (element, className) => {
  element.classList.remove(`${className}`);
};

btnAboutMe.addEventListener("click", () => {
  clearClasses([aboutMeMain, homeMain]);

  homeMain.classList.add("fadeout-to-left");
  arrow1.classList.add("hidden");

  setTimeout(() => {
    clearClasses([arrow1]);
    aboutMeMain.classList.add("fadein-to-left");
    arrow1.classList.add("fadein");
    arrow1.addEventListener("click", () => backAboutMe());
  }, 700);
});

btnProjects.addEventListener("click", () => {
  clearClasses([homeMain, projMain]);
  arrow2.classList.add("hidden");
  homeMain.classList.add("fadeout-to-right");

  setTimeout(() => {
    clearClasses([arrow2]);
    arrow2.classList.add("fadein");
    arrow2.addEventListener("click", () => backProjects());

    projMain.classList.add("fadein-to-right");
  }, 700);
});

btnCurriculum.addEventListener("click", () => {
  clearClasses([homeMain, curriculumMain]);

  homeMain.classList.add("fadeout-to-left");

  setTimeout(() => {
    clearClasses([arrow3]);
    arrow3.classList.add("fadein");
    arrow3.addEventListener("click", () => backCurriculum());

    curriculumMain.classList.add("fadein-to-left");
  }, 700);
});

const contactArea = document.querySelector("#contacts-area-p");
const github = document.querySelector("#github-icon");
const whatsapp = document.querySelector("#whatsapp-icon");
const instagram = document.querySelector("#instagram-icon");
const linkedin = document.querySelector("#linkedin-icon");

github.addEventListener("mouseover", () => {
  contactArea.innerHTML = "Contacts area: GitHub";
});

whatsapp.addEventListener("mouseover", () => {
  contactArea.innerHTML = "Contacts area: WhatsApp";
});

instagram.addEventListener("mouseover", () => {
  contactArea.innerHTML = "Contacts area: Instagram";
});

linkedin.addEventListener("mouseover", () => {
  contactArea.innerHTML = "Contacts area: LinkedIn";
});
