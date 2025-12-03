function addToFav(id) {
  let fav = JSON.parse(localStorage.getItem("fav")) || [];
  if (!fav.includes(id)) fav.push(id);
  localStorage.setItem("fav", JSON.stringify(fav));
  updateFavBadge();
}

function updateFavBadge() {
  const fav = JSON.parse(localStorage.getItem("fav")) || [];
  document.getElementById("favCount").textContent = fav.length;
}

updateFavBadge();