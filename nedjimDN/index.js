/*     DANIMON NGABA Nedjim  */
/*     Simplon - Promo 6     */

/*----------------Récupération des box---------------- */
var block = document.getElementsByClassName("box");

/*--------------Test des éléments de block------------ */
Array.prototype.forEach.call(block, function(box) {

    /*  
        //Exemple 1 (onclick)
        box.onclick = function() {
            box.style.backgroundColor = "#D32F2F";
        }
    */
    //Exemple 2 (addEventListener)
    function red() {
        box.style.boxShadow = "0.5rem 0.5rem 0.2rem #212121";
        box.style.backgroundColor = "#D32F2F";
    }
    box.addEventListener("click", red);
});