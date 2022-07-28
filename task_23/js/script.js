// Создать калькулятор просчёта стоимости услуг
let inputWeight = document.getElementById('weight');                     // вес
let select = document.getElementById('select');                          // тип груза
let loading = document.getElementById('loading');                        // погрузка
let delivery = document.getElementById('delivery');                      // доставка                      
let inputRange = document.getElementById('inputRange');                  // расстояние
let distance = document.getElementById('distance');                      // вывод расстояния на экран
let button = document.getElementById('button');                          // кнопка
let blockForResult = document.getElementById('result');                  // блок для вывода результата

// способы оплаты
let nal = document.getElementById('nal');                                // наличка
let withoutNal = document.getElementById('withoutNal');                  // безнал
let byCard = document.getElementById('byCard');                          // на карту

// вспомогательные переменные
let cargoWeight = 500;
let cargoType = 200;
let needLoading = 0;
let deliveryToThePlaceOfDispatch = 0;
let priceDependingOnDistance = 0;
let distanceValue = 2500;
let cashPayment = false;
let cashlessPayment = false;
let transferFromCardToCard = false;
// ...способы оплаты и проценты
let cashPaymentVal = 0;
const percentageForCashlessPayments = 3;
const percentageForTransferToTheCard = 1.5;
const divider = 100;
let defaultAmount = cargoWeight + cargoType + needLoading + deliveryToThePlaceOfDispatch + priceDependingOnDistance;
let cashlessPayments = defaultAmount / divider * percentageForCashlessPayments;
let cardPayment = defaultAmount / divider * percentageForTransferToTheCard;

inputWeight.addEventListener('change', (e) => {                            // вес
  cargoWeight = Number(e.target.value);
});

select.addEventListener('change', (e) => {                                 // тип груза
  cargoType = Number(e.target.value);
});

loading.addEventListener('change', (e) => {                                // погрузка
  needLoading = Number(e.target.value);
  // e.target.value = "";
});

delivery.addEventListener('change', (e) => {                               // доставка
  deliveryToThePlaceOfDispatch = Number(e.target.value);
});

inputRange.addEventListener('input', (e) => {                              // расстояние 
  distanceValue = Number(e.target.value);                     
  distance.innerText = e.target.value + " км";
  priceDependingOnDistance = getPriceDistance(Number(e.target.value));
});

nal.addEventListener('input', (e) => {                                     // наличка
  cashPayment = e.target.checked;
  cashlessPayment = false;
  transferFromCardToCard = false;
});

withoutNal.addEventListener('input', (e) => {                              // безнал
  cashlessPayment = e.target.checked;
  cashPayment = false;
  transferFromCardToCard = false;
});

byCard.addEventListener('input', (e) => {                                  // на карту
  transferFromCardToCard = e.target.checked;
  cashlessPayment = false;
  cashPayment = false;

});

button.addEventListener('click', (e) => {                                  // кнопка
  if (e.target.value) {
    if ((cashPayment) || (cashlessPayment) || (transferFromCardToCard)) {
      let result = 0;

      if (distanceValue) {
        if (cargoWeight) result += cargoWeight;
        if (cargoType) result += cargoType;
        if (needLoading) result += needLoading;
        if (deliveryToThePlaceOfDispatch) result += deliveryToThePlaceOfDispatch;
        if (cashPayment) result += cashPaymentVal;
        if (cashlessPayment) result += cashlessPayments;
        if (transferFromCardToCard) result += cardPayment;
        if (priceDependingOnDistance) result += priceDependingOnDistance;

        blockForResult.innerHTML = result;
      } else {
        let sms = "Минимальное расстояние 50 км";
        blockForResult.innerHTML = sms;
      }
    } else {
      let sms = "Выберите способ оплаты";
      blockForResult.innerHTML = sms;
    }
  }
});

const priceFor50Km = 10;

function getPriceDistance(arg) {
  if (arg === 50) {
    return priceFor50Km;
  } else if (arg < 50) {
    return priceFor50Km - priceFor50Km;
  } else {
    return arg / priceFor50Km * 2;
  }
}

