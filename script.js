var tipo = ""
var erro = false
var dighexa = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]

function binver(x) {
    erro = false
    x = x.split('')
    for (let c = 0; c < x.length; c++) {
        if (x[c] !== "1" && x[c] !== "0") {
            erro = true
        }
    }
}

function hexver(x) {
    erro = false
    x = x.split('')
    for (let c = 0; c < x.length; c++) {
        if (dighexa.indexOf(x[c].toUpperCase()) == -1)
            erro = true
    }
}

function subhex(x) {
    x = Number(x)
    if (x >= 10 && x <= 15) {
        x = dighexa[x]
    }
    return String(x)
}

function decbin(x) {
    let potencia = 0
    let resbin = ""
    while (2 ** potencia < x) {
        potencia += 1
    }
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
        while (x >= 16) {
            reshex += String(subhex(x % 16))
            x = Math.trunc(x / 16)
        }
        reshex += String(subhex(x))
        reshex = reshex.split('').reverse().join('')
    }
    return reshex
}

function bindec(x) {
    res = 0
    x = x.split('').reverse()
    for (c = 0; c < x.length; c++) {
        res += x[c] * (2 ** c)
    }
    return res
}

function hexdec(x) {
    let resdec = 0
    x = x.split('').reverse()
    for (c = 0; c < x.length; c++) {
        let y = dighexa.indexOf(x[c].toUpperCase())
        resdec += y * (16 ** c)
    }
    return resdec
}

function converter() {
    let d = Number(document.getElementById('decimal').value)
    let b = document.getElementById('binario').value
    let h = document.getElementById('hexadecimal').value
    switch (tipo) {
        case 'decimal':
            if (d == "") {
                alert("Por favor, digite um número a ser convertido")
            } else {
                resbin = decbin(d)
                reshex = dechex(d)
                document.getElementById('resdec').disabled = false
                document.getElementById('resbin').disabled = false
                document.getElementById('reshex').disabled = false
                document.getElementById('resdec').value = d
                document.getElementById('resbin').value = resbin
                document.getElementById('reshex').value = reshex
            }
            break
        case 'binario':
            binver(b)
            if (erro == true) {
                alert(`O valor digitado (${b.toUpperCase()}) não é um valor binário válido.`)
            } else if (b == "") {
                alert("Por favor, digite um número a ser convertido")
            } else {
                resdec = bindec(b)
                reshex = dechex(resdec)
                document.getElementById('resdec').disabled = false
                document.getElementById('resbin').disabled = false
                document.getElementById('reshex').disabled = false
                document.getElementById('resdec').value = resdec
                document.getElementById('resbin').value = b
                document.getElementById('reshex').value = reshex
            }
            break
        case 'hexadecimal':
            hexver(h)
            if (erro == true) {
                alert(`O valor digitado (${h.toUpperCase()}) não é um valor hexadecimal válido`)
            } else if (h == "") {
                alert("Por favor, digite um número a ser convertido")
            } else {
                resdec = hexdec(h)
                resbin = decbin(resdec)
                document.getElementById('resdec').disabled = false
                document.getElementById('resbin').disabled = false
                document.getElementById('reshex').disabled = false
                document.getElementById('resdec').value = resdec
                document.getElementById('resbin').value = resbin
                document.getElementById('reshex').value = h
            }
            break
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