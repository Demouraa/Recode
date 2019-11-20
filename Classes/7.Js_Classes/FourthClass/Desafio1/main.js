
let iAuthor  = document.getElementById("author").value;
let iTitle  = document.getElementById("title").value;
let iEdition  = document.getElementById("edition").value;
let iSite  = document.getElementById("site").value;
let pName  = document.getElementById("pname").value;
let yPublication  = document.getElementById("author").value;

let form = document.getElementById("myForm");
let fAuthor;
let format;

function outside(e) {
    e.preventDefault();
    
    var fAuthor = iAuthor.split(" ");
    iAuthor = fAuthor[1].toUpperCase() + "," + " " + fAuthor[0][0] + ".";
    format = `${iAuthor} ${iTitle}: ${iEdition}, ed. ${iSite}: ${pName}, ${yPublication}`;
    document.getElementById("format").innerHTML = format;

    //iTitle = iTitle.split(" ");
    //    for(i = 0; i <= iTitle.length; i++){
    //}
    //iTitle = iTitle[0][0].toUpperCase 
    //aLastName = fAuthor[1];
    //fLetter = fAuthor[0][0];

    console.log(iAuthor);
    console.log(iTitle);
    console.log(iEdition);
    console.log(iSite);
    console.log(pName);
    console.log(yPublication);

    //document.writeln(fAuthor);


}

form.addEventListener("submit", outside);
