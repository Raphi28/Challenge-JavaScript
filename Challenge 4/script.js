let montantPret = Number(prompt("Quel est le montant du prêt"))
let dureePret = Number(prompt("Quel est la durée du prêt"))
let tauxInteretAnnuel = Number(prompt("Quel est le taux d'intérêt annuel du prêt"))

let tauxInteretMensuel = tauxInteretAnnuel / 12 / 100
let nombreMensualités = dureePret * 12
let mensualité = (montant * tauxInteretMensuel * (1 + tauxInteretMensuel)^nombreMensualités) / ((1 + tauxInteretMensuel)^nombreMensualités - 1)
let coutTotalCredit = mensualité * nombreMensualités
let montantTotalInteretsPayes = coutTotalCredit - montantPret
let ratioPretInterets = montantTotalInteretsPayes / montantPret
let valeurBien = ratioPretInterets * 2

console.log(mensualité)
console.log(coutTotalCredit)
console.log(montantTotalInteretsPayes)
console.log(ratioPretInterets)
console.log(valeurBien)

console.log(`Pour un prêt de ${montantPret} sur ${dureePret} ans à ${tauxInteretAnnuel}% d'intérêt annuel :`)
console.log(`Mensualité : ${mensualité}€`)
console.log(`Coût total du crédit : ${coutTotalCredit}€`)
console.log(`Montant total des intérêts : ${montantTotalInteretsPayes}€`)
console.log(`Ratio prêt/intérêts : ${ratioPretInterets}%`)
console.log(`Valeur estimée du bien après ${dureePret} ans : ${valeurBien}€`)