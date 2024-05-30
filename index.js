let nomeHeroi = "Super Alegria"


let forcaXp = 2403

let nivel

if (forcaXp < 1000 ) {
    nivel = "Ferro"
}
else if (forcaXp >1001 && forcaXp < 2000) {
    nivel = "Bronze"
}
else if (forcaXp >2001 && forcaXp < 5000) {
    nivel = "Prata"
}
else if (forcaXp >5001 && forcaXp < 7000) {
    nivel = "Ouro"
}
else if (forcaXp >7001 && forcaXp <8000) {
    nivel = "Platina"
}
else if (forcaXp >8001 && forcaXp <9000) {
    nivel = "Ascendente"
}
else if (forcaXp >9001 && forcaXp <10000) {
    nivel = "Imortal"
}
else { (forcaXp >= 10001)
    nivel = "Radiante"
}
console.log("")

console.log (" O heroi " +nomeHeroi + " está no nivel " +nivel+ " .")
console.log("")





