type recipe = {
    name: string;
    time: number;
    fav: boolean;
    descript: string;
    rating: number;
    img: string; //string of the path to the image
}

function addRecipe(name: string, time: number, fav: boolean, descript: string, rating: number, img: string, pd: recipe[]) {
    let r: recipe = {
        name: name,
        time: time,
        fav: fav,
        descript: descript,
        rating: rating,
        img: img
    }
    pd.push(r);
}

function show_recs(recs: recipe[]) {
    for (let i = 0; i < recs.length; i++) {
        console.log(recs[i].name)
    }
}

function display_recs(recs: recipe[]) {
    const rec_container = document.getElementById("recs");
    if (rec_container) {
        recs.forEach((r) => {
            const divElement = document.createElement("div");
            const ulElement = document.createElement("ul");
            for (const key in r) {
                if (r.hasOwnProperty(key)) {
                    const liElement = document.createElement('li');
                    liElement.textContent = `${key}: ${r[key]}`;
                    ulElement.appendChild(liElement);
                }
            }
            divElement.appendChild(ulElement);
            rec_container.appendChild(divElement)
        })
    }
}

let recs: recipe[] = [];
addRecipe("Chicken Parm", 40, false, "lalala", 4.2, "lalala", recs);
addRecipe("Mushroom Stroganoff", 40, false, "lalala", 3.2, "lalala", recs);
addRecipe("Stuff", 30, false, 'lalala', 2.3, 'string', recs);
addRecipe("MoreStuff", 20, false, 'lalala', 3.4, 'strings2', recs);
addRecipe("MoreStuff", 20, false, 'lalala', 3.4, 'strings2', recs);
display_recs(recs);

