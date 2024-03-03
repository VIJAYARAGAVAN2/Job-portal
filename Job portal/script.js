const search = () => {
  const card = document.querySelectorAll(".card");
  const skill = document.getElementsByTagName("p");
  const searchbox = document.getElementById("search-item").value.toUpperCase();

  for (var i = 0; i < skill.length; i++) {
    let match = card[i].getElementsByTagName("p")[0];
    if (match) {
      let textvalue = match.textContent || match.innerHTML;

      if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
        card[i].style.display = "";
      } else {
        card[i].style.display = "none";
      }
    }
  }
};
