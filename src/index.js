
module.exports = function toReadable (number) {
    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const bigNumbers = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundrThous=[' hundred', ' thousand'];

    let rank = number%10;
    let d = number/10;
    let h = number/100;
    let t = number/1000;
    let mod = number%100;
    let modt = number%1000;

    if (number < 20) return numbers[number];
    
    if (number < 100) {
        let a = bigNumbers[Math.trunc(d)-2];
        let b = '';
        if(rank > 0){
            b = ' ' + numbers[rank];
        }

        return a + b;
    }

    if (number < 1000) {
        let a = numbers[Math.trunc(h)];
        let b = '';
        if(mod != 0){
            b = ' ' + toReadable(mod);
        }

        return a + hundrThous[0] + b;
    }

    let a = numbers[Math.trunc(t)];
    let b = '';

    if(modt != 0){
        b = ' ' + toReadable(mod);
    }
    
    return a + hundrThous[1] + b;
  }
  
