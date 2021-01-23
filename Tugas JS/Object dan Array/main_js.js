let info = {
    nama: "Dimas",
    alamat: {
        jalan: "GHP",
        nomer: "B3/14"   
    },
    pekerjaan: [
        "Mahasiswa",
        "Pengangguran",
    ],
    universitas: "Brawijaya",
    makanan: [
        "sushi",
        "burger",
        "pizza",
        "mie ayam",
        "steak",
    ]
};

console.log (info.nama)
console.log (info.alamat)
console.log (info.pekerjaan)
console.log (info.universitas)
console.log (info.makanan)

info.makanan.forEach(function(item) {
    console.log(`${item} adalah makanan favorit ${info.nama}`)
})  
