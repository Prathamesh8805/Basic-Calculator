
const firstnumber = document.querySelector("#firstnumber");
const secondnumber = document.querySelector("#secondnumber");

function add(){
    const c = firstnumber.value;
    const d = secondnumber.value;
    const e = c + d;
    document.getElementById("anwser").innerHTML = "Addtion is " + e;    

}
function sub(){
    let c = firstnumber.value;
    let d = secondnumber.value;
    var e = c - d;
    document.getElementById("anwser").innerHTML = "Subtraction is " + e;    

}
function mult(){
    let c = firstnumber.value;
    let d = secondnumber.value;
    var e = c * d;
    document.getElementById("anwser").innerHTML = "Multiplication is " + e;    

}
function div(){
    let c = firstnumber.value;
    let d = secondnumber.value;
    var e = c/d;
    document.getElementById("anwser").innerHTML = "Division is " + e;    

}
function mod(){
    let c = firstnumber.value;
    let d = secondnumber.value;
    var e = c%d;
    document.getElementById("anwser").innerHTML = "Modulus is " + e;    

}
function reset(){
    location.reload();
}


document.getElementById("add").addEventListener("click", add);
document.getElementById("sub").addEventListener("click", sub);
document.getElementById("mult").addEventListener("click", mult);
document.getElementById("div").addEventListener("click", div);
document.getElementById("mod").addEventListener("click", mod);
document.getElementById("reset").addEventListener("click",reset)