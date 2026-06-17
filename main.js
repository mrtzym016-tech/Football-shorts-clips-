/* =========================
GLOBAL
========================= */

let currentCategory = "All";

/* =========================
ADMIN SYSTEM
========================= */

const params =
new URLSearchParams(window.location.search);

const isAdmin =
params.get("admin") === "1234";

document.addEventListener(
"DOMContentLoaded",
() => {

if(isAdmin){

const adminPanel =
document.getElementById("adminPanel");

if(adminPanel){
adminPanel.style.display="block";
}

}

initTheme();

renderClips();

updateStats();

showContinueWatching();

setupFilters();

}
);

/* =========================
RENDER CLIPS
========================= */

function renderClips(){

const container =
document.getElementById("clipContainer");

if(!container) return;

container.innerHTML="";

const search =
document.getElementById("searchInput")
?.value
?.toLowerCase() || "";

const category =
document.getElementById("categoryFilter")
?.value || "All";

const clips = getClips();

clips
.filter(clip => {

const titleMatch =
clip.title.toLowerCase()
.includes(search);

const categoryMatch =
category === "All"
||
clip.category === category;

return titleMatch && categoryMatch;

})
.forEach(clip => {

const favorites =
getFavorites();

const isFav =
favorites.includes(clip.id);

container.innerHTML += `

<div class="card ${clip.category==="Shorts" ? "shortCard" : ""}">

<img
class="thumb"
src="${clip.thumb}"
alt="${clip.title}"
>

<div class="cardBody">

<h3>${clip.title}</h3>

<div class="category">
${clip.category}
</div>

<div class="cardBtns">

<a
class="watchBtn"
href="clip.html?id=${clip.id}">
▶ Watch
</a>

<button
class="favBtn"
onclick="toggleFavorite(${clip.id})">

${isFav ? "❤️" : "🤍"}

</button>

</div>

</div>

</div>

`;

});

}

/* =========================
ADD CLIP
========================= */

function openAddModal(){

const modal =
document.getElementById("addModal");

if(modal){
modal.style.display="flex";
}

}

function closeAddModal(){

const modal =
document.getElementById("addModal");

if(modal){
modal.style.display="none";
}

}

function addClip(){

const title =
document.getElementById("titleInput").value;

const category =
document.getElementById("categoryInput").value;

const video =
document.getElementById("videoInput").value;

const thumb =
document.getElementById("thumbInput").value;

const description =
document.getElementById("descInput").value;

if(!title || !video){

alert("Please fill required fields");

return;

}

const clips = getClips();

clips.push({

id: Date.now(),

title,

category,

video,

thumb,

description

});

saveClips(clips);

closeAddModal();

renderClips();

updateStats();

}

/* =========================
DELETE CLIP
========================= */

function deleteClip(id){

if(!confirm("Delete clip?")) return;

let clips = getClips();

clips = clips.filter(
c => c.id !== id
);

saveClips(clips);

renderClips();

updateStats();

}

/* =========================
FAVORITES
========================= */

function toggleFavorite(id){

let favorites =
getFavorites();

if(favorites.includes(id)){

favorites =
favorites.filter(
f => f !== id
);

}else{

favorites.push(id);

}

saveFavorites(favorites);

renderClips();

updateStats();

}

/* =========================
STATS
========================= */

function updateStats(){

const clips = getClips();

const favorites =
getFavorites();

const views =
getViews();

const clipCount =
document.getElementById("clipCount");

const favoriteCount =
document.getElementById("favoriteCount");

const viewCount =
document.getElementById("viewCount");

if(clipCount)
clipCount.innerText =
clips.length;

if(favoriteCount)
favoriteCount.innerText =
favorites.length;

if(viewCount)
viewCount.innerText =
views;

}

/* =========================
FILTERS
========================= */

function setupFilters(){

const search =
document.getElementById("searchInput");

if(search){

search.addEventListener(
"input",
renderClips
);

}

const category =
document.getElementById("categoryFilter");

if(category){

category.addEventListener(
"change",
renderClips
);

}

}

/* =========================
THEME
========================= */

function toggleTheme(){

document.body.classList.toggle(
"light-mode"
);

const isLight =
document.body.classList.contains(
"light-mode"
);

localStorage.setItem(
"theme",
isLight ? "light" : "dark"
);

}

function initTheme(){

const theme =
localStorage.getItem("theme");

if(theme==="light"){

document.body.classList.add(
"light-mode"
);

}

}

/* =========================
CONTINUE WATCHING
========================= */

function showContinueWatching(){

const box =
document.getElementById(
"continueWatching"
);

if(!box) return;

const clip =
getLastWatched();

if(!clip){

box.innerHTML="";

return;

}

box.innerHTML = `

<div class="continueCard">

<h3>
Continue Watching
</h3>

<p>
${clip.title}
</p>

<a
class="watchBtn"
href="clip.html?id=${clip.id}">
Resume
</a>

</div>

`;

}
