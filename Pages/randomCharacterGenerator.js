import { options } from "./options.js";

const generate = () => {
  const form = options.form[Math.floor(Math.random() * options.form.length)];

  const weapon =
    options.weapon[Math.floor(Math.random() * options.weapon.length)];

  const element =
    options.element[Math.floor(Math.random() * options.element.length)];

  const animal =
    options.animal[Math.floor(Math.random() * options.animal.length)];

  const specialBodyPart =
    options.specialBodyPart[
      Math.floor(Math.random() * options.specialBodyPart.length)
    ];

  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
  const randomColor2 = Math.floor(Math.random() * 16777215).toString(16);

  const occupation =
    options.occupation[Math.floor(Math.random() * options.occupation.length)];

  const location =
    options.location[Math.floor(Math.random() * options.location.length)];

  const misc = options.misc[Math.floor(Math.random() * options.misc.length)];

  const posPersonality =
    options.posPersonality[
      Math.floor(Math.random() * options.posPersonality.length)
    ];
  
  const posPersonality2 =
    options.posPersonality[
      Math.floor(Math.random() * options.posPersonality.length)
    ];

  const nuePersonality =
    options.nuePersonality[
      Math.floor(Math.random() * options.nuePersonality.length)
    ];

  const negPersonality =
    options.negPersonality[
      Math.floor(Math.random() * options.negPersonality.length)
    ];
  
    const nuePersonality2 =
    options.nuePersonality[
      Math.floor(Math.random() * options.nuePersonality.length)
    ];

  const negPersonality2 =
    options.negPersonality[
      Math.floor(Math.random() * options.negPersonality.length)
    ];

    const likes =
    options.likes[
      Math.floor(Math.random() * options.likes.length)
    ];
    const likes2 =
    options.likes[
      Math.floor(Math.random() * options.likes.length)
    ];
    const likes3 =
    options.likes[
      Math.floor(Math.random() * options.likes.length)
    ];
    const likes4 =
    options.likes[
      Math.floor(Math.random() * options.likes.length)
    ];
    const likes5 =
    options.likes[
      Math.floor(Math.random() * options.likes.length)
    ];
    const likes6 =
    options.likes[
      Math.floor(Math.random() * options.likes.length)
    ];

  const trope = options.trope[Math.floor(Math.random() * options.trope.length)];

  document.querySelectorAll(".formResult").forEach(el => el.innerHTML = form);
  document.querySelectorAll(".weaponResult").forEach(el => el.innerHTML = weapon);
  document.querySelectorAll(".elementResult").forEach(el => el.innerHTML = element);
  document.querySelectorAll(".animalResult").forEach(el => el.innerHTML = animal);
  document.querySelectorAll(".specialBodyPartResult").forEach(el => el.innerHTML = specialBodyPart);
  document.querySelectorAll(".occupationResult").forEach(el => el.innerHTML = occupation);
  document.querySelectorAll(".locationResult").forEach(el => el.innerHTML = location);
  document.querySelectorAll(".miscResult").forEach(el => el.innerHTML = misc);
  document.querySelectorAll(".posPersonalityResult").forEach(el => el.innerHTML = posPersonality);
  document.querySelectorAll(".posPersonalityResult2").forEach(el => el.innerHTML = posPersonality2);
  document.querySelectorAll(".nuePersonalityResult").forEach(el => el.innerHTML = nuePersonality);
  document.querySelectorAll(".nuePersonalityResult2").forEach(el => el.innerHTML = nuePersonality2);
  document.querySelectorAll(".negPersonalityResult").forEach(el => el.innerHTML = negPersonality);
  document.querySelectorAll(".negPersonalityResult2").forEach(el => el.innerHTML = negPersonality2);
  document.querySelectorAll(".tropeResult").forEach(el => el.innerHTML = trope);
  

  document.querySelectorAll(".colorResult").forEach(el => el.style.backgroundColor = "#" + randomColor);
  document.querySelectorAll(".colorResult").forEach(el => el.innerHTML = "#" + randomColor);

  document.querySelectorAll(".colorResult1").forEach(el => el.style.backgroundColor = "#" + randomColor1);
  document.querySelectorAll(".colorResult1").forEach(el => el.innerHTML = "#" + randomColor1);

  document.querySelectorAll(".colorResult2").forEach(el => el.style.backgroundColor = "#" + randomColor2);
  document.querySelectorAll(".colorResult2").forEach(el => el.innerHTML = "#" + randomColor2);


  document.querySelectorAll(".likesResult").forEach(el => el.innerHTML = likes);
  document.querySelectorAll(".likesResult2").forEach(el => el.innerHTML = likes2);
  document.querySelectorAll(".likesResult3").forEach(el => el.innerHTML = likes3);
  document.querySelectorAll(".likesResult4").forEach(el => el.innerHTML = likes4);
  document.querySelectorAll(".likesResult5").forEach(el => el.innerHTML = likes5);
  document.querySelectorAll(".likesResult6").forEach(el => el.innerHTML = likes6);
};

document.querySelector("button").addEventListener("click", generate);