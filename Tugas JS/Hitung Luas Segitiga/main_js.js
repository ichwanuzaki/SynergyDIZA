function hitungLuas(){
    let alas = document.forms['hitungLs3']['alasS3'].value;
    alas = parseInt(alas);
    let tinggi = document.forms['hitungLs3']['tinggiS3'].value;
    tinggi = parseInt(tinggi);
    let luas = (alas*tinggi)/2;
    document.forms['hitungLs3']['luasS3'].value = luas;
    }