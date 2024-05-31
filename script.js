const doc = document;
const main = doc.getElementById("main");
const sub = doc.getElementById("sub");
const les = doc.getElementById("lessons");
const exit = doc.getElementById("exit");
curwords = [], choosenL = [], correct = 0, wrong = 0;

for (let i = 0;i < lessons.length;i++) {
    choosenL.push(false);
}

for(let i = 0;i < 13;i++) doc.getElementById("animation").innerHTML += "<li></li>";

for(let i = 0;i < lessons.length;i++) { // lessons button
    les.innerHTML += "<button class = \"l notchoosen\" id = \"" + i.toString() + "\" >" + lessons[i] + "</button><br><br>";
}
for(let i = 0;i < lessons.length;i++) {
    doc.getElementById(i.toString()).addEventListener("click", function() {
        if (choosenL[i]) {
            choosenL[i] = false;
            doc.getElementById(i.toString()).classList.remove("choosen");
            doc.getElementById(i.toString()).classList.add("notchoosen");
        } else {
            choosenL[i] = true;
            doc.getElementById(i.toString()).classList.remove("notchoosen");
            doc.getElementById(i.toString()).classList.add("choosen");
        }
    });
}

function random(max) {
    arr = [];
    while(arr.length < 4) {
        tmpR = Math.floor(Math.random() * (max + 1));
        if (!arr.includes(tmpR)) arr.push(tmpR);
    }
    arr.push(Math.floor(Math.random() * (4)))
    return arr;
}


function newWords() {
    rand = random(curwords.length-1);
    doc.getElementById("content").innerHTML = curwords[rand[rand[4]]][0];
    for(let i = 0;i < 4;i++) {
        doc.getElementById("option" + String.fromCharCode(65+i)).innerHTML = "<strong>" + curwords[rand[i]][1] + "</strong>";
    }
}

function choose(op) { //option
    if (curwords[op][0] == curwords[rand[rand[4]]][0]) {
        correct++;
    } else wrong++;

    console.log(correct, wrong);
    newWords();
}

main.querySelector("#start").addEventListener("click", function() { //start button
    for(let i = 0;i < choosenL.length;i++) {
        if (!choosenL[i]) continue;
        for(let j = 0;j < words[i].length;j++) curwords.push(words[i][j]);
    }
    if (curwords.length < 4) {
        window.alert("請至少選擇一課")
        return;
    }
    sub.innerHTML = subHTML;
    sub.classList.remove("hidden");
    sub.classList.add("visible");
    exit.classList.remove("hidden");
    exit.classList.add("visible");
    exit.disabled = false;
    for(let i = 0;i < 4;i++) { //option button
        doc.getElementById("option" + String.fromCharCode(65+i)).addEventListener("click", function() {choose(rand[i])})
    }
    newWords();
    main.remove();
});

exit.addEventListener("click", function() {location.reload();});
