/*
fiexd: per item wood requirements
1. chair --> 3 cft
2. table --> 10 cft
3. bed --.> 50 cft
vary; quantity
*/ 
function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;
  const chairWood = chairQuantity * perChairWood;
  const tableWood = tableQuantity * perTableWood;
  const bedWood = bedQuantity  * perBedWood;

  const totalWoods = chairWood + tableWood + bedWood;
  return totalWoods;
}
const totalWoods = woodCalculator(0, 2, 0,);
console.log('Total Wood need:', totalWoods);

// Books Price 
function bookCalculator(Math, Bangla, English, Quran, History){
  const matPrices = 45;
  const banglaPrices = 100;
  const englishPrices = 150;
  const quranPrices = 200;
  const historyPrices = 300;
  const matPrice = matPrices * Math;
  const banglaPrice = banglaPrices * Bangla;
  const englishPrice = englishPrices * English;
  const quranPrice = quranPrices * Quran;
  const historyPrice = historyPrices * History;

  const totalBook = matPrice + banglaPrice + englishPrice + quranPrice + historyPrice;

  return totalBook;

}
const totalBook = bookCalculator(7, 5, 2, 10, 20,);
console.log(totalBook);