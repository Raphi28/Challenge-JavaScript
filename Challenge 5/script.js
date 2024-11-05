let chiffreAffairesAnnuel = Number(prompt("Quel est le chiffre d'affaires annuel de l'entreprise ?"))
let coutOperationnels = Number(prompt("Quel sont les coûts opérationnels de l'entreprise ?"))
let tauxImposition = Number(prompt("Quel est le taux d'imposition de l'entreprise ?"))
let actionsEnCirculation = Number(prompt("Quel est le nombre d'actions en circulation ?"))
let dividendesVersés = Number(prompt("Quels sont les dividendes versés ?"))

let beneficeBrut = chiffreAffairesAnnuel - coutOperationnels
let beneficeNet = beneficeBrut - tauxImposition
let beneficeParAction = beneficeNet / actionsEnCirculation
let ratioDistributionDividendes = dividendesVersés / chiffreAffairesAnnuel
let margeBeneficiaireNet = beneficeBrut - beneficeNet

let rendementDividendes = dividendesVersés / 50
let ratioCoursBenefice = beneficeParAction / 50
let croissancePotentielle = beneficeNet % 20
let chiffreAffairesAnneePro = croissancePotentielle * 1.5

console.log("Analyse Financière de l'Entreprise :")
console.log("Indicateurs de Base :")
console.log(`Chiffre d'affaires : ${chiffreAffairesAnnuel} millions €`)
console.log(`Bénéfice brut : ${beneficeBrut} millions €`)
console.log(`Bénéfice net : ${beneficeNet} millions €`)
console.log(`Bénéfice par action : ${beneficeParAction} €`)
console.log("Ratios :")
console.log(`Marge bénéficiaire nette : ${margeBeneficiaireNet}%`)
console.log(`Ratio de distribution des dividendes : ${ratioDistributionDividendes}%`)
console.log(`Rendement des dividendes : ${rendementDividendes}%`)
console.log(`Ratio cours/bénéfice (P/E) : ${ratioCoursBenefice}`)
console.log("Projection de Croissance :")
console.log(`Montant réinvesti : ${croissancePotentielle} millions €`)
console.log(`Chiffre d'affaires estimé pour l'année prochaine : ${chiffreAffairesAnneePro} millions €`)
console.log(`Taux de croissance estimé : ${ratioCoursBenefice}%`)