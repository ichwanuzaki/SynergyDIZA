/*function hitungLuas(){
    let jari2 = document.forms['hitungLuasLingkaran']['jari2Lingkaran'].value;
    jari2 = parseInt(jari2);
    let tinggi = document.forms['hitungLs3']['tinggiS3'].value;
    tinggi = parseInt(tinggi);
    let luas = (alas*tinggi)/2;
    document.forms['hitungLs3']['luasS3'].value = luas;
    }*/

/*function luaslingkaran() { 
    var jari2 = parseFloat(document.funday.nilai_jari2.value);
     if(isNaN(jari2)){ 
    jari2=0.0;} 
    var luas = 3.14*jari2*jari2; 
    alert("Jadi, luas lingkaran adalah : "+ hasil); 
}*/

function hitungLuas(){
    let jari2 = document.forms[`hitungLuasLingkaran`][`jari2Lingkaran`].value;
    if(isNaN(jari2)){
        jari2=0.0;
    } let luas = (3.14*jari2*jari2);
    document.forms[`hitungLuasLingkaran`][`luasLingkaran`].value = luas;
    alert("Jadi, luas lingkaran adalah : "+ hasil);

}