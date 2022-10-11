const form = document.querySelector("form");
const bigger = document.getElementById("bigger");
const input = document.querySelector("input");

const task = document.querySelector(".task");

bigger.addEventListener("click", (eo) => {
  if (eo.target.className == "icon-trash icon") {
    eo.target.parentElement.parentElement.remove();
  } else if (eo.target.className == "icon-angry2 icon") {
    eo.target.classList.add("en");

    const heart = `<span class="icon-heart icon"></span>`;

    eo.target.parentElement.parentElement
      .querySelector(".text")
      .classList.add("finish");

    eo.target.parentElement.innerHTML += heart;
  } else if (eo.target.className == "icon-heart icon") {
    eo.target.classList.add("en");
    const angry = `<span class="icon-angry2 icon"></span>`;

    eo.target.parentElement.parentElement
      .querySelector(".text")
      .classList.remove("finish");
    eo.target.parentElement.innerHTML += angry;
  } else if (eo.target.className == "icon-star icon") {
    eo.preventDefault();
    eo.target.classList.add("color");
    bigger.prepend(eo.target.parentElement);
  } else if (eo.target.className == "icon-star icon color") {
    eo.target.classList.remove("color");
  }
});

form.addEventListener("submit", (eo) => {
  eo.preventDefault();

  const ccc = `
        
        <div class="task">
        <span class="icon-star icon"></span>
  
        <p  lang="ar" class="text"> ${input.value} </p>
  
        <div>
          <span class="icon-trash icon"></span>
          <span class="icon-angry2 icon"></span>
        </div>
      </div>`;

  bigger.innerHTML += ccc;
 

 input.value = ""

});
