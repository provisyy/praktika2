const sec = 3605;
const min = (sec - 5) / 60;
const hour = min / 60;
console.log(hour, 'ч', (min / 60), 'мин', (sec % (min * hour)), 'сек');