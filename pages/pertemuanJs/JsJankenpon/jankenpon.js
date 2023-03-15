function Jankenpon(){
alert('Selamat Datang di Permainan Batu Gunting Kertas');
var wajibAngka = /^[0-9]+$/;
var hasil;
var pilihanComputer;
var pilihanUser;
var user;
var nama = prompt('Masukkan Nama Anda');
    function pilihan() {
    user = prompt('Masukkan Pilihan Anda \n 1. Batu \n 2. Gunting \n 3. Kertas \n Pilih Dengan Memasukkan Angka');
    }
    pilihan();
    //validasi pilihan user
    if (user == 1)
    {
        pilihanUser = "Batu";
    } 
    else if (user == 2)
    {
        pilihanUser = "Gunting";
    } 
    else if (user == 3)
    {
        pilihanUser = "Kertas";
    }
    else if(!user.match(wajibAngka) || user > 3 || user == 0) {
        while (!user.match(wajibAngka) || user > 3 || user == 0) {
        alert ('Input Yang Sesuai')
            if (pilihan() === undefined){
                if (user == 1)
                {
                    pilihanUser = "Batu";
                } 
                else if (user == 2)
                {
                    pilihanUser = "Gunting";
                } 
                else if (user == 3)
                {
                    pilihanUser = "Kertas";
                }
        }
        }
    }

    //Pilihan komputer
    var computer = Math.floor(Math.random() * 3);
    if (computer == 1)
    {
        pilihanComputer = "Batu";
    } 
    else if (computer == 2)
    {
        pilihanComputer = "Gunting";
    } 
    else
    {
        pilihanComputer = "Kertas";
    } 

    //validasi hasil
    if (pilihanUser == "Batu" && pilihanComputer == "Batu"){
        hasil = "Seri"
    }
    if (pilihanUser == "Batu" && pilihanComputer == "Gunting"){
        hasil = "User Menang"
    }
    if (pilihanUser == "Batu" && pilihanComputer == "Kertas"){
        hasil = "User Kalah"
    }
    if (pilihanUser == "Gunting" && pilihanComputer == "Batu"){
        hasil = "User Kalah"
    }
    if (pilihanUser == "Gunting" && pilihanComputer == "Gunting"){
        hasil = "Seri"
    }
    if (pilihanUser == "Gunting" && pilihanComputer == "Kertas"){
        hasil = "User Menang"
    }
    if (pilihanUser == "Kertas" && pilihanComputer == "Batu"){
        hasil = "User Menang"
    }
    if (pilihanUser == "Kertas" && pilihanComputer == "Gunting"){
        hasil = "User Kalah"
    }
    if (pilihanUser == "Kertas" && pilihanComputer == "Kertas"){
        hasil = "Seri"
    }

    //pop up
    alert (' Nama : ' +nama+ '\n Pilihan User : ' +pilihanUser+ '\n Pilihan Computer : ' +pilihanComputer
    + '\n Hasil : ' +hasil );
    console.log(' Nama : ' +nama+ '\n Pilihan User : ' +pilihanUser+ '\n Pilihan Computer : ' +pilihanComputer
    + '\n Hasil : ' +hasil );
}

Jankenpon();
    var ulangi;
    while (ulangi = confirm('Ingin Bermain Lagi')){
        Jankenpon();
}
