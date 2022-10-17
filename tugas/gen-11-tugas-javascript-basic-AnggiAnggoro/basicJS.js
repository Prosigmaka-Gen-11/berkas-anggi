let perkalian = (nilai1,nilai2) => {
    return nilai1*nilai2
} 
let identitas = {
    nama: "Anggi",
    umur: 23,
    skill : {
        softskill:"public speaking",
        hardkill:"java",
        nim:102117018,
    },
    perkenalan : function() {
        return "Hi namaku " + this.nama +  " umurku "+ this.umur;
    },
    tesFungsi : perkalian(2,5),


 }

console.log(identitas.tesFungsi)
let tes = identitas.perkenalan()
console.log(tes)


