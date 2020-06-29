var data = new Date();
var dia     = data.getDate();           
var dia_sem = data.getDay();            
var mes     = data.getMonth();          
var ano2    = data.getYear();           
var ano4    = data.getFullYear();       
var hora    = data.getHours();          
var min     = data.getMinutes();        
var seg     = data.getSeconds();        
var mseg    = data.getMilliseconds();   
var tz      = data.getTimezoneOffset(); 
var str_data = dia + '/' + (mes+1) + '/' + ano4;
var str_hora = hora + ':' + min + ':' + seg;

var user = prompt("Digite seu nome");
var inicio=confirm('Bem-Vindo ao Simulado de Matemática '+ user);
var sair = "<html><head><title>Voce nao quis participar</title></head><body>Que pena, você não quis participar... Recarregue a página para iniciar novamente!<br></body></html>";
if(inicio==false){document.write(sair);}
else{ window.alert('Começou o simulado! Dificuldade: Básica');
document.write("Usuário: " + user)
var certo = "<b>Correto!</b>"; var errado = "<b style='color:red;'>Errado!</b>";var o = new Array();
var acertos=0; var erros=0; var respostas = new Array(); var p = new Array();var r = new Array();
var t=5; 

p[1] = "Resolva a equação: 10 + 3 = ?";
r[1] = 13;
p[2] = "Resolva a equação: 5 +  3 = ?";
r[2] = 8;
p[3] = "Qual o primeiro número primo ?";
r[3] = 2;
p[4] = "Resolva a equação: 23 + 12 = ?";
r[4] = 35;
p[5] = "Qual é o número anterior a -1 ?";
r[5] = 0;

 for(var i=1;i<=t;i++){o[i] = i;} 
 for(var i=1;i<=5;i++)          
 {
  n=Math.round(t*(Math.random())); 
  m=Math.round(t*(Math.random()));
  if(m==0){m++;}
  if(n==0){n++;}
  var temp = o[n];
  o[n]=o[m];
  o[m]=temp;
 } 
for(var i=1;i<=t;i++)
{
  respostas[o[i]] = prompt(p[o[i]],"");
   if(respostas[o[i]]==r[o[i]]){respostas[o[i]]=certo;acertos++;}else{respostas[o[i]]=errado;erros++;}
 }
document.write("<br><br>Simulado de Matemática:<br><br>Suas respostas:<br><br>");
document.write("<ol>");
for(var i=1;i<=t;i++)
{
document.write("<li>"+respostas[o[i]]);}
document.write("</ol>");
document.write("<br>Total de acertos: "+acertos);
document.write("<br>Total de erros: "+erros);
if(acertos <= 2){document.write('<br><br>Você não obteve a quantidade de acertos mínimas para avançar para a proxima fase! Tente novamente recarregando a página.');}
else { document.write('<br><br>Parabéns! Você obteve a quantidade de acertos necessários para avançar para a próxima fase, clique no botão "Prosseguir" para iniciar o nível intermediário')
document.write('<br><br><a href="questionário2.html"><button>Prosseguir</button></a>')
document.write("<br><br><input type=button value='Respostas' Onclick=javascript:if(document.getElementById('rp').style.display=='none'){document.getElementById('rp').style.display='block';}else{document.getElementById('rp').style.display='none';}>");
document.write("<br><div id='rp' class='rp' style='display:none;'><ol>");
for(var i=1;i<=t;i++) 
document.write("<li>"+p[o[i]]+"<br>R:"+r[o[i]]);}
document.write("</ol></div>");
}
document.write('<br><br>Hoje é ' + str_data + ' às ' + str_hora);
