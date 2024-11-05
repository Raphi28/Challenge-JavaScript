// On stocke le prix des 3 produits dans 3 variables
let cafe = 2
let croissant = 1.5
let jusOrange = 2.5

// On demande à Sarah combien de cafés, croissants et jus d'orange à t elle vendue et on stocke dans 3 variables
let cafeVendus = Number(prompt("Sarah, combien de cafés as-tu vendus aujourd'hui ?"))
let croissantsVendus = Number(prompt("Sarah, combien de croissants as-tu vendus aujourd'hui ?"))
let jusOrangeVendus = Number(prompt("Sarah, combien de jus d'orange as-tu vendus aujourd'hui ?"))

// On multiplie le prix des produits avec le nombres de produits vendus pour obtenir le total des ventes pour chaque produit
let totalVentesCafés = cafe * cafeVendus
let totalVentesCroissants = croissant * croissantsVendus
let totalVentesJusOrange = jusOrange * jusOrangeVendus

// On additionne le total des ventes des 3 produits pour obtenir le total général des ventes
let totalGeneralVentes = totalVentesCafés + totalVentesCroissants + totalVentesJusOrange
let nombreTotalArticlesVendus = cafeVendus + croissantsVendus + jusOrangeVendus

// On affiche un récapitulatif
console.log("Récapitulatif des ventes du jour :")
console.log("Cafés vendus : " + cafeVendus + " (" + (totalVentesCafés) + "€)")
console.log("Croissants vendus : " + croissantsVendus + " (" + (totalVentesCroissants) + "€)")
console.log("Jus d'orange vendus : " + jusOrangeVendus + " (" + (totalVentesJusOrange) + "€)")
console.log("Total des ventes : " + totalGeneralVentes + "€")
console.log("Nombre total d'articles vendus : " + nombreTotalArticlesVendus)