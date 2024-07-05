// BURDA 2 CUR YAZILIB 
let totalRub; 
function calc(rub, usd, usdToRub){
    // return rub + (usd * usdToRub);
    totalRub =  rub + (usd * usdToRub);
}
calc(1200, 20, 75)
// let rub = 1200;
// let usd = 20;
// let usdToRub = 75;
// let totalRub = calc(rub, usd, usdToRub)
console.log("Bütün depozitlər üzrə məbləğ: " + totalRub);
// TASK 2
function numberToText() {
    let num = prompt("1 ilə 99 arasında tam ədəd daxil edin:");
    if (num < 1 || num > 99 || num % 1 !== 0) {
        console.log("Yalnış daxiletmə. Zəhmət olmasa 1 ilə 99 arasında tam ədəd daxil edin.");
    } else {
        num = Number(num);
        let tens = Math.floor(num / 10);
        let units = num % 10;
        let result = "";
        function translateTens(tens){
            switch (tens) {
                case 1:
                    result += "on ";
                    break;
                case 2:
                    result += "iyirmi ";
                    break;
                case 3:
                    result += "otuz ";
                    break;
                case 4:
                    result += "qırx ";
                    break;
                case 5:
                    result += "elli ";
                    break;
                case 6:
                    result += "altmış ";
                    break;
                case 7:
                    result += "yetmiş ";
                    break;
                case 8:
                    result += "seksen ";
                    break;
                case 9:
                    result += "doxsan ";
                    break;
                default:
                    break;
            }
        }
        function translateUnits(units){
            switch (units) {
                case 1:
                    result += "bir";
                    break;
                case 2:
                    result += "iki";
                    break;
                case 3:
                    result += "üç";
                    break;
                case 4:
                    result += "dörd";
                    break;
                case 5:
                    result += "beş";
                    break;
                case 6:
                    result += "altı";
                    break;
                case 7:
                    result += "yeddi";
                    break;
                case 8:
                    result += "səkkiz";
                    break;
                case 9:
                    result += "doqquz";
                    break;
                default:
                    break;
            }
        }
        if (tens > 0) {
            translateTens(tens);
            if (units > 0) {
                translateUnits(units);
            }
        } else {
            translateUnits(units);
        }
        console.log(result);
    }
}
numberToText();