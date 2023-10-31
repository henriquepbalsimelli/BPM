export function validateCPF(strCPF) {
    if (strCPF === '' || strCPF === undefined || strCPF === null) return false

    strCPF = strCPF.replace(/[^\d]+/g, '')
    if (strCPF == '') return false
    // Elimina CPFs invalidos conhecidos	
    if (strCPF.length != 11 ||
        strCPF == "00000000000" ||
        strCPF == "11111111111" ||
        strCPF == "22222222222" ||
        strCPF == "33333333333" ||
        strCPF == "44444444444" ||
        strCPF == "55555555555" ||
        strCPF == "66666666666" ||
        strCPF == "77777777777" ||
        strCPF == "88888888888" ||
        strCPF == "99999999999")
        return false
    // Valida 1o digito	
    let add = 0
    for (let i = 0; i < 9; i++)
        add += parseInt(strCPF.charAt(i)) * (10 - i)
    let rev = 11 - (add % 11)
    if (rev == 10 || rev == 11)
        rev = 0
    if (rev != parseInt(strCPF.charAt(9)))
        return false
    // Valida 2o digito	
    add = 0
    for (let i = 0; i < 10; i++)
        add += parseInt(strCPF.charAt(i)) * (11 - i)
    rev = 11 - (add % 11)
    if (rev == 10 || rev == 11)
        rev = 0
    if (rev != parseInt(strCPF.charAt(10)))
        return false
    return true
}