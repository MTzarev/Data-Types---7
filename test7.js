function leapYear(leap) {
    let isLeap = "";
    if (leap % 4 === 0 && leap % 100 !== 0) {
        isLeap = "yes"
    } else if (leap %400 ===0){
        isLeap = "yes"
    }else {
        isLeap = "no"
    }
    console.log(isLeap);
}
leapYear(1984);
leapYear(2003);
leapYear(4);