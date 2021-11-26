function ripleyopção() {
    alert ('O que Ripley deve fazer');
var x;
var idade=prompt("Digite sua idade:");

if (idade!=null)
  {
  x="Idade: " + idade + " anos.";
  document.getElementById("demo").innerHTML=x;
  }
}
<button onclick="ripleyopção()">Clique aqui</button>