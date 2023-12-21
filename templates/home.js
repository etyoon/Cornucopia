function addRecipe(name, time, fav, descript, rating, img, pd) {
    var r = {
        name: name,
        time: time,
        fav: fav,
        descript: descript,
        rating: rating,
        img: img
    };
    pd.push(r);
}
function show_recs(recs) {
    for (var i = 0; i < recs.length; i++) {
        console.log(recs[i].name);
    }
}
function display_recs(recs) {
    var rec_container = document.getElementById("recs");
    if (rec_container) {
        recs.forEach(function (r) {
            var divElement = document.createElement("div");
            var ulElement = document.createElement("ul");
            for (var key in r) {
                if (r.hasOwnProperty(key)) {
                    var liElement = document.createElement('li');
                    liElement.textContent = "".concat(key, ": ").concat(r[key]);
                    ulElement.appendChild(liElement);
                }
            }
            divElement.appendChild(ulElement);
            rec_container.appendChild(divElement);
        });
    }
}
var recs = [];
addRecipe("Chicken Parm", 40, false, "lalala", 4.2, "lalala", recs);
addRecipe("Mushroom Stroganoff", 40, false, "lalala", 3.2, "lalala", recs);
addRecipe("Stuff", 30, false, 'lalala', 2.3, 'string', recs);
addRecipe("MoreStuff", 20, false, 'lalala', 3.4, 'strings2', recs);
addRecipe("MoreStuff", 20, false, 'lalala', 3.4, 'strings2', recs);
display_recs(recs);
