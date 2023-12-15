let toggles = document.getElementsByClassName("toggle");
let contentText = document.getElementsByClassName("content");
let icons = document.getElementsByClassName("icon");

for(let i = 0; i<toggles.length; i++) {
  toggles[i].addEventListener("click", () => {
    if (parseInt(contentText[i].style.height) != contentText[i].scrollHeight) {
      contentText[i].style.height = contentText[i].scrollHeight + "px";
      toggles[i].style.color = "#0084e9";
      icons[i].classList.remove("fa-plus");
      icons[i].classList.add("fa-minus");
    }
    else{
      contentText[i].style.height = "0px";
      toggles[i].style.color = "#111130";
      icons[i].classList.remove("fa-minus");
      icons[i].classList.add("fa-plus");
    };

    for (let j = 0; j < contentText.length; j++) {
      if (j!==i) {
        contentText[j].style.height = "0px";
        toggles[j].style.color = "#111130";
        icons[j].classList.remove("fa-minus")
        icons[j].classList.add("fa-plus")
      };
    };
  });
};