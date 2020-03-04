var select = false

function converter() {
    if (select == false) {
        alert("Por favor, selecione uma base numérica e digite um número.")
    } else {
    let d = Number(document.getElementById("decimal").value)
    let b = document.getElementById('binario').value
    let h = document.getElementById('hexadecimal').value
    }
}

function decimal() {
    let dec = document.getElementById('decimal').disabled = false
    let bin = document.getElementById('binario').disabled = true
    let hex = document.getElementById('hexadecimal').disabled = true
    select = true
}

function binario() {
    let dec = document.getElementById('decimal').disabled = true
    let bin = document.getElementById('binario').disabled = false
    let hex = document.getElementById('hexadecimal').disabled = true
    select = true
}

function hexadecimal() {
    let dec = document.getElementById('decimal').disabled = true
    let bin = document.getElementById('binario').disabled = true
    let hex = document.getElementById('hexadecimal').disabled = false
    select = true
}