var el1=document.getElementById("element1");
var el2=document.getElementById("element2");
var el3=document.getElementById("element3");

//methode 1 qui fonctionne bien, mais à simplifier

/*el1.onclick=function(){
		el1.style.background= "red";
}
el2.onclick=function(){
		el2.style.background= "red";
}
el3.onclick=function(){
		el3.style.background= "red";
}*/

//methode 2 qui fonctionne bien

var tab=[el1,el2,el3];

tab.forEach(function (el) {
    el.onclick = function (){
    el.style.background= "red";
  };
});