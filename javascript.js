var contoh = true;
while (contoh) {
    // menangkap pilihan player
    alert ('Tebak angka : \npilih angka 1-10! \nkamu diberi kesempatan 3x');
    var p = prompt('Masukkan angka : ');
    // menangkap pilihan komputer
    // membangkitkan bilangan random
    var comp = Math.random();

    if ( comp < 0.34) {
        comp = '7';
    } else if ( comp > 0.34 && comp < 0.67) {
        comp = '10';
    } else {
        comp = '9';
    }

    var hasil = '';
    // menentukan rules
    if ( p == comp ) {
        hasil = 'BENAR';
    } 
    // else if ( p == 'gajah' ) {
        // if ( comp == orang ) {
        //     hasil = 'MENANG';
        // } else {
        //     hasil = 'KALAH';
        // }
        // hasil = ( comp == 'orang') ? 'MENANG' : 'KALAH';
    // } else if ( p == 'orang' ) {
        // if ( comp == gajah ) {
        //     hasil = 'KALAH';
        // } else {
        //     hasil = 'MENANG';
        // }
        // hasil = ( comp == 'gajah') ? 'KALAH' : 'MENANG';
    // } else if ( p == 'semut' ) {
        // if ( comp == orang ) {
        //     hasil = 'KALAH';
        // } else {
        //     hasil = 'MENANG';
        // }
        // hasil = ( comp == 'orang') ? 'KALAH' : 'MENANG';
    // } 
    else {
        hasil = 'memasukkan pilihan yang salah';
    }


    // menampilkan hasil 
    alert ( 'Tebakanmu benar \n ' + p + ' adalah pilihan yang tepat' )

    contoh = confirm ('lagi?');
}
alert ( 'Terimakasih sudah bermain' );