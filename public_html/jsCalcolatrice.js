/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var num1 = 0;
var num2 = 0;
var risultato;
var operazione = "";
var visual = "";
var dati;
var operatore = "";
var m = "";

function isVuota(testo) {
    if (testo.length === 0)
        return true;
    else
        return false;

}

function checkDati() {
    //verifico num1 e num2

    if (isNaN(num1) || isNaN(num2) || isVuota(num1) || isVuota(num2)) {
        return false;
    } else {
        return true;
    }
}

function faseInput() {
    tasto = document.getElementById("in_num1").value;
    num2 = document.getElementById("in_num2").value;

    dati = checkDati();


    //verifico dati e poi vedo se trasformare in numeri

    if (dati === true) {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
    } else {
        alert("dati non corretti!!!");
    }


}

function faseOutput() {
    document.getElementById("div_visual").innerHTML = visual * 1;
    //document.getElementById("div_ris").innerHTML = operazione;
    //document.getElementById("div_totale").innerHTML = totale;

}

function scriviNumeri(op) {
    visual += op;
    faseOutput();
}
function calcola(op) {
    //faseInput();

    dati = isVuota(document.getElementById("div_visual").innerHTML);
    if (!dati) {

        if (op === "+") {
            visual = parseFloat(document.getElementById("div_visual").innerHTML);
            operazione += visual + " +<br/>";
            num1 = visual;
            if (num2 === 0) {
                num2 = num1;
                num1 = 0;
            } else {
                num2 = num2 + num1;
                num1 = 0;
            }
            visual = "";
            operatore = "+";
        }

        if (op === "-") {
            visual = parseFloat(document.getElementById("div_visual").innerHTML);
            operazione += visual + " -<br/>";
            num1 = visual;
            if (num2 === 0) {
                num2 = num1;
                num1 = 0;
            } else {
                num2 = num2 - num1;
                num1 = 0;
            }
            visual = "";
            operatore = "-";
        }

        if (op === "*") {
            visual = parseFloat(document.getElementById("div_visual").innerHTML);
            operazione += visual + " *<br/>";
            num1 = visual;
            if (num2 === 0) {
                num2 = num1;
                num1 = 0;
            } else {
                num2 = num2 * num1;
                num1 = 0;
            }
            visual = "";
            operatore = "*";
        }

        if (op === "/") {
            visual = parseFloat(document.getElementById("div_visual").innerHTML);
            operazione += visual + " /<br/>";
            num1 = visual;
            if (num2 === 0) {
                num2 = num1;
                num1 = 0;
            } else {
                num2 = num2 / num1;
                num1 = 0;
            }
            visual = "";
            operatore = "/";
        }

        if (op === "=") {
            num1 = parseFloat(document.getElementById("div_visual").innerHTML);
            switch (operatore) {
                case "+":
                    visual = num1 + num2;
                    break;
                case "-":
                    visual = num2 - num1;
                    break;
                case "*":
                    visual = num2 * num1;
                    break;
                case "/":
                    visual = num2 / num1;
                    break;
            }

            operazione += num1 + " =<br/>" + visual + "<br/>";
            num2 = 0, num1 = 0;
            //visore = "";
        }

    }
    if (op === "C") {
        visual = "";
        operatore = "";
        operazione = "";
        num1 = 0, num2 = 0;
    }
    faseOutput();
}

function memoriaInput() {
    m = visual;
    visual="";
    faseOutput();
}


function memoriaOutput() {
    visual += m;
    faseOutput();
}

