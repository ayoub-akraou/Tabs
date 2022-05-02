"use strict";
const infos = document.querySelector(".infos");
const description = document.querySelector(".data");
const btnContainer = document.querySelector(".btn-container");
const images = document.querySelectorAll(".image");
// data
const data = [
  {
    title: "History",
    description:
      "I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up.",
  },
  {
    title: "Vision",
    description:
      "Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal.",
  },
  {
    title: "Goals",
    description:
      "Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa chicharrones.",
  },
];

btnContainer.addEventListener("click", function (e) {
  console.log();
  if (e.target.nodeName === "BUTTON") {
    images.forEach((x) => {
      x.classList.remove("visible");
      x.getAttribute("data-title") === e.target.textContent.toLowerCase()
        ? x.classList.add("visibe")
        : "";
    });
    [...btnContainer.children].forEach((x) => x.classList.remove("btn-active"));
    e.target.classList.add("btn-active");
    data.forEach((x) => {
      if (x.title === e.target.textContent) {
        description.innerHTML = `
        <h3 class="data__title">${x.title}</h3>
        <p class="description">${x.description}</p>`;
      }
    });
  }
});
