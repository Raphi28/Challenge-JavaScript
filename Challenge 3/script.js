let distanceTrajet = Number(prompt("Quelle est la distance du trajet en kilomètres ?"))
let vitesseMoyenne = Number(prompt("Quelle est la vitesse moyenne en km/h ?"))

let temps_en_heures = distanceTrajet / vitesseMoyenne

// console.log(distanceTrajet)
// console.log(vitesseMoyenne)
// console.log(temps_en_heures)

// conversion
let jour = Math.floor(temps_en_heures / 24) // Calcul des jours
let heuresRestantes = Math.floor(temps_en_heures % 24) // les heures restantes
let heures = Math.floor(temps_en_heures) // Pour afficher la partie entière
let minutes = (temps_en_heures - Math.floor(temps_en_heures)) * 60 // Pour afficher la partie décimale
let minutes2 = Math.ceil(minutes) // Pour arrondir la partie décimale au chiffre supérieur

console.log("Pour un trajet de " + distanceTrajet + "km à une vitesse moyenne de " + vitesseMoyenne + "km/h :")
console.log("Temps de trajet estimé : " + jour + " jour " + heuresRestantes + " heures " + minutes2 + " minutes")