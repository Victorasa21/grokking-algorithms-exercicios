lista = [3, 12, 23, 34, 45, 56, 67, 78, 89, 99, 109];

const chuteCerto = (list, palpite) => {
    low = 0;
    high = list.length - 1;

    while (low <= high) {

        mid = Math.round((low + high) / 2);
        chuteMedia = list[mid];
        console.log(chuteMedia,palpite)
        if (palpite == chuteMedia) {

            return mid;
        }
        if (chuteMedia > palpite) {

            high = mid - 1;

        } else {
            low = mid + 1
        }

    }
    return mid

}


CHUTE = chuteCerto(lista, 34)
console.log(CHUTE)
console.log(lista[CHUTE])

