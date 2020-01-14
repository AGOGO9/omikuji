let canvas = document.getElementById("cv");
var ran = Math.floor( Math.random() * 22 ) ;
ran = ran + 2

var gazon = new Array("dodai.jpg","tibi.png","0.png","1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png","11.png","12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png","20.png","21.png","22.png")
var n = 0
var i = 0
function change(){
  if(n == 0 && i == 0){
  n ++
  document.getElementById("gazo").src=gazon[n];
  document.getElementById("bt").innerHTML="結果を見る";
  console.log("n:",n);
}else if(n == 1 && i == 0){
  n = ran
  i ++
  document.getElementById("kekka").play();
  document.getElementById("gazo").src=gazon[n];
  document.getElementById("bt").innerHTML="もう一度する";
  console.log("n:",n);
}
else if( i == 1){
  document.getElementById("bt").innerHTML="おみくじを開く！";

  i = 0
  n = 0
  document.getElementById("gazo").src=gazon[n];
  console.log("n:",n);
  ran = Math.floor( Math.random() * 23 ) ;
  ran = ran + 2
}


}
