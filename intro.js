// alert("hola desde forma externa")
//tipos de ventanas
//aler() -> sirve para mostrar un mensaje en el navegador
// alert("la suma de 4 + 5 = " + (4+5));
// confirm("¿?")   
// var num1=5;
// var num2=7;
// var nombreApellido = "Juan Velez";
// alert( "la suma "+num1+"+"+num2+" = "+(num1+num2))
// alert("su nombre es " + nombreApellido)
// var num1 = parseFloat(prompt("digite un numero"))
// var num2 = parseFloat(prompt("digite otro numero"))
// alert("el resultado es " + (num1+num2))

//datos de entrada
var salario = parseInt (prompt("digite salario del empleado"))
// calculos
var salud = salario * 8/100; // salario * 0.08;
var pension = salario * 10/100 // salario * 0.1
var sueldoneto = salario - salud - pension // salario - (salud + pension)
// datos de salida 
document.write("el salario es : " +salario+"<br>");
document.write("el dto en salud es : " +salud+"<br>");
document.write("el dto en pension es : " +pension+"<br>");
document.write("el sueldo a pagar es : " +sueldoneto+"<br>");