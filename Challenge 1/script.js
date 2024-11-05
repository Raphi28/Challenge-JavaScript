let montantTotal = prompt("Quel est le montant total de l'addition ?");
// console.log(Number(montantTotal))
let pourcentage = prompt("Saisir le pourcentage du pourboire souhaité : \n 1. 15% pour un service correct \n 2. 20% pour un bon service \n 3. 25% pour un excellent sercice")
// console.log(Number(pourcentage))

let pourboire = montantTotal * (pourcentage / 100)
console.log("Le montant du pourboire s'élève à : " + pourboire + " €")
console.log("Le montant total s'élève à : " + (pourboire + Number(montantTotal)) + " €")