function compras(trabalho1, trabalho2) {
    const comprartSorvete = trabalho1 || trabalho2
    const comprarTV50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^trabalho2) // bitwisae xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprartSorvete

    return { comprartSorvete, comprarTV50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))