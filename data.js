/* =========================
DEFAULT CLIPS
========================= */

const defaultClips = [

{
id:1,
title:"Cristiano Ronaldo Amazing Goal",
category:"Goals",
thumb:"https://img.youtube.com/vi/OUKGsb8CpF8/hqdefault.jpg",
video:"https://www.youtube.com/watch?v=OUKGsb8CpF8",
description:"Amazing Cristiano Ronaldo goal."
},

{
id:2,
title:"Lionel Messi Magic Skills",
category:"Skills",
thumb:"https://img.youtube.com/vi/8F9jXYOH2c0/hqdefault.jpg",
video:"https://www.youtube.com/watch?v=8F9jXYOH2c0",
description:"Best Messi dribbling skills."
},

{
id:3,
title:"Goalkeeper Incredible Saves",
category:"Goalkeepers",
thumb:"https://img.youtube.com/vi/oRdxUFDoQe0/hqdefault.jpg",
video:"https://www.youtube.com/watch?v=oRdxUFDoQe0",
description:"Top goalkeeper saves."
},

{
id:4,
title:"Funny Football Moments",
category:"Funny",
thumb:"https://img.youtube.com/vi/rM8N0fKQ0sA/hqdefault.jpg",
video:"https://www.youtube.com/watch?v=rM8N0fKQ0sA",
description:"Funny moments in football."
},

{
id:5,
title:"Classic Football Match",
category:"Matches",
thumb:"https://img.youtube.com/vi/8wm8Z8R4q5M/hqdefault.jpg",
video:"https://www.youtube.com/watch?v=8wm8Z8R4q5M",
description:"Historic football match."
},

{
id:6,
title:"Football Short Clip",
category:"Shorts",
thumb:"https://img.youtube.com/vi/6v2L2UGZJAM/hqdefault.jpg",
video:"https://www.youtube.com/watch?v=6v2L2UGZJAM",
description:"Short football clip."
}

];

/* =========================
LOCAL STORAGE INIT
========================= */

if(!localStorage.getItem("footballClips")){

localStorage.setItem(
"footballClips",
JSON.stringify(defaultClips)
);

}

/* =========================
LOAD CLIPS
========================= */

function getClips(){

return JSON.parse(
localStorage.getItem("footballClips")
) || [];

}

/* =========================
SAVE CLIPS
========================= */

function saveClips(data){

localStorage.setItem(
"footballClips",
JSON.stringify(data)
);

}

/* =========================
FAVORITES
========================= */

function getFavorites(){

return JSON.parse(
localStorage.getItem("favorites")
) || [];

}

function saveFavorites(data){

localStorage.setItem(
"favorites",
JSON.stringify(data)
);

}

/* =========================
LAST WATCHED
========================= */

function getLastWatched(){

return JSON.parse(
localStorage.getItem("lastWatched")
) || null;

}

function saveLastWatched(data){

localStorage.setItem(
"lastWatched",
JSON.stringify(data)
);

}

/* =========================
VIEWS
========================= */

function getViews(){

return Number(
localStorage.getItem("totalViews")
) || 0;

}

function saveViews(num){

localStorage.setItem(
"totalViews",
num
);

}
