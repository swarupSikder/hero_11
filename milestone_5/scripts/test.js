let headings = document.getElementsByTagName('h1');
//console.log(headings);

for(let heading of headings){
    //console.log(heading.innerText);

    if(heading.innerText === "Tour Report"){
        heading.innerText = "Tour Report (v2)";
        heading.style.color = "red";
        heading.style.fontSize = "40px";
        heading.style.border = "2px solid gray"
        heading.style.width = "fit-content"
        heading.style.padding = "3%";
        heading.style.backgroundColor = "#DDDDDD";
    }
}

let specialSection = document.getElementById('sp');
console.log(specialSection.childNodes);