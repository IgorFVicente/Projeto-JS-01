var tipo = ""

function subhex(x) {
    if (Number(x) >= 10) {
        switch (x) {
            case 10:
                x = "A"
                break
            case 11:
                x = "B"
                break
            case 12:
                x = "C"
                break
            case 13:
                x = "D"
                break
            case 14:
                x = "E"
                break
            case 15:
                x = "F"
                break
        }
    }
    return x
}

function decbin(x) {
    let potencia = 0
    let resbin = ""
    while (2 ** potencia < x){
        potencia += 1
    }
    potencia -= 1
    while (potencia !== -1) {
        if (x >= 2 ** potencia) {
            resbin += "1"
            x -= 2 ** potencia
        } else {
            resbin += "0"
        }
        potencia -= 1
    }
    return resbin
}

function dechex(x) {
    let reshex = ""
    if (x < 16) {
        reshex = String(subhex(x))
    } else {
    while (x >= 16){
        reshex += String(subhex(x % 16))
        x = Math.trunc(x / 16)
    }
    reshex += String(x)
    reshex = reshex.split('').reverse().join('')
    }
    return reshex
}

function converter() {
    if (tipo == "") {
        alert("Por favor, selecione uma base numérica e digite um número.")
    } else {
    let d = Number(document.getElementById('decimal').value)
    let b = document.getElementById('binario').value
    let h = document.getElementById('hexadecimal').value
    switch(tipo)  {
        case 'decimal':
            resbin = decbin(d)
            reshex = dechex(d)
            document.getElementById('resdec').disabled = false
            document.getElementById('resbin').disabled = false
            document.getElementById('reshex').disabled = false
            document.getElementById('resdec').value = d
            document.getElementById('resbin').value = resbin
            document.getElementById('reshex').value = reshex
        break
        case 'binario':
        break
        case 'hexadecimal':
        break

        let dparabin
        let dparahex

    }
    }
}

function decimal() {
    document.getElementById('decimal').disabled = false
    document.getElementById('binario').disabled = true
    document.getElementById('hexadecimal').disabled = true
    document.getElementById('binario').value = ""
    document.getElementById('hexadecimal').value = "" 
    tipo = "decimal"
}

function binario() {
    document.getElementById('decimal').disabled = true
    document.getElementById('binario').disabled = false
    document.getElementById('hexadecimal').disabled = true
    document.getElementById('decimal').value = ""
    document.getElementById('hexadecimal').value = "" 
    tipo = "binario"
}

function hexadecimal() {
    document.getElementById('decimal').disabled = true
    document.getElementById('binario').disabled = true
    document.getElementById('hexadecimal').disabled = false
    document.getElementById('binario').value = ""
    document.getElementById('decimal').value = "" 
    tipo = "hexadecimal"
}