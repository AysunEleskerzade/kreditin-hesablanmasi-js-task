let KreditinHesablanmasi = (emekhaqqi, istenilenmebleg, istenilenmuddet) => {
    const MAXMUDDET = 36
    const MAXMEBLEG = emekhaqqi * 10
    const MAXODENIS = emekhaqqi * 0.45

    let faiz;
    if (istenilenmuddet <= 12) {
        faiz = 0.13;
    } else if (istenilenmuddet <= 24) {
        faiz = 0.15;
    } else if (istenilenmuddet <= 36) {
        faiz = 0.17;
    }


    let ayligOdenish = (istenilenmebleg + istenilenmebleg * faiz) / istenilenmuddet;
    if (istenilenmuddet > MAXVAXT || istenilenmuddet > MAXMEBLEG || ayligOdenish > MAXODENIS) {
        return "Size bu shertlerle kredit dusmur";
    } else {
        return ` ${ istenilenmebleg } Azn mebleg size ${ faiz * 100 } % li ${ istenilenmuddet } ay muddetine aylig  ${ ayligOdenish } manat odenish verilir`;
    }
}

console.log(KreditinHesablanmasi(200, 600, 15));
