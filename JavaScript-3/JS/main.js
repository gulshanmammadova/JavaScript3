function Odenis(){
    var x=document.getElementById("mebleg").value;
    var mblg=Number(x);
  var ay=document.getElementById("muddet").value;
  var y=document.getElementById("Faiz").value;
   var faiz=Number(y);
 var umumimblg=mblg+(mblg*faiz/100);
 var ayliqmblg=umumimblg/ay;
 document.getElementById("umumi-mebleg").innerHTML=`Umumi Mebleg;${umumimblg}`;
 document.getElementById("ayliq-odenis").innerHTML=`Ayliq Mebleg;${ayliqmblg}`;
 
}