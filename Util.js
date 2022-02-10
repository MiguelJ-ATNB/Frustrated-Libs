document.getElementById("btn").addEventListener("click", angryLIB)
function angryLIB() {
    
let pluNoun= document.getElementById("pluNoun").value;
let famMember= document.getElementById("famMember").value;
let action= document.getElementById("action").value;

let mdString= "My "+ famMember +" loves to eat "+ pluNoun + " and then "+ action +".";

document.getElementById("mdLIB").innerHTML=mdString

}
