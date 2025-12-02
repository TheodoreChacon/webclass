const projects = [
  {
    image: "images/logos/tcwhite.png",
    caption: "Product Development Portfolio",
    link: "about.html"
  },
  {
    image: "images/cannabigel.png",
    caption: "Cannabigel™ - Gel Relajante Natural",
    link: "Cannabigel.html"
  },
  {
    image: "images/franklin's.png",
    caption: "Set de Gafas Franklin's™ - Edición Limitada",
    link: "franklin's.html"
  },
  {
    image: "images/ezy-fit.png",
    caption: "Ezy-Fit™ - Cálzate Sin Utilizar las Manos",
    link: "ezy-fit.html"
  },
  {
    image: "images/body.png",
    caption: "Soft Touch Body™ - Cuchilla de Afeitar Mujer",
    link: "softtouchbody.html"
  },
  {
    image: "images/compressionshocks.png",
    caption: "Active Energy™ - Compression Socks ",
    link: "compressionshocks.html"
  },
  {
    image: "images/yaoigo.png",
    caption: "YAOIGO™ - Dispositivo de Audio Personal Recargable",
    link: "yaoigo.html"
  },
  {
    image: "images/confortrelax.png",
    caption: "ConfortRelax Premium™ - Zapatillas de Gel Antifatiga",
    link: "confortrelax.html"
  },
  {
    image: "images/oasis.png",
    caption: "Set de Toallas de Baño - Oasis™",
    link: "toallasoasis.html"
  }
];

let currentIndex = 0;

function getNextIndex() {
  return (currentIndex + 1) % projects.length;
}

function getPrevIndex() {
  return (currentIndex - 1 + projects.length) % projects.length;
}

function render() {
  const mainImg = document.getElementById("main-image");
  const nextImg = document.getElementById("next-image");
  const captionEl = document.getElementById("project-caption");

  const current = projects[currentIndex];
  const next = projects[getNextIndex()];

  mainImg.src = current.image;
  mainImg.alt = current.caption;

  nextImg.src = next.image;
  nextImg.alt = next.caption;

  captionEl.textContent = current.caption;
}

function goNext() {
  currentIndex = getNextIndex();
  render();
}

function goPrev() {
  currentIndex = getPrevIndex();
  render();
}

document.addEventListener("DOMContentLoaded", () => {
  const mainFigure = document.getElementById("project-main");
  const nextFigure = document.getElementById("project-next");
  const prevZone = document.getElementById("prev-zone");


  render();

  
  mainFigure.addEventListener("click", () => {
    const current = projects[currentIndex];
    if (current.link) {
      window.location.href = current.link;
    }
  });


  nextFigure.addEventListener("click", (e) => {
    e.stopPropagation();
    goNext();
  });

 
  prevZone.addEventListener("click", (e) => {
    e.stopPropagation();
    goPrev();
  });


  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") goNext();
    if (e.key === "ArrowLeft") goPrev();
  });
});