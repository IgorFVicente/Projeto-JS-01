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

string = ""
x = 2156

while (x > 16) {
    string += String(subhex(x % 16))
    x = Math.trunc(x/16)
}
string += String(x)
string = string.split('').reverse().join('')

console.log(string)

