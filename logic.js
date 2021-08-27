let i= 0;

function low(){
    i--;
    let lowcount = i;
document.getElementById("count").textContent =  lowcount ;
console.log(lowcount);
}
function up(){
    i++;
    let upcount = i;
    document.getElementById("count").textContent =  upcount ;
    console.log(upcount);

}