const fs = require('fs');

fs.readFile('data.json', (err, data) => {
  if (err === null) {
    // Знаходження максимального курсу
    const json = JSON.parse(data);
    let maxRate = 0;
    for (const currency of json) {
      if (currency.rate > maxRate) {
        maxRate = currency.rate;
      }
    }
    // Запис у файл
    fs.writeFile('output.txt', `Максимальний курс: ${maxRate}`, (err) => {
      if (err) {
        console.error('Помилка запису в файл output.txt:', err);
      } else {
        console.log("Максимальний курс:", maxRate);
      }
    });
  } else {
    console.error('Помилка зчитування файлу data.json:', err);
    return;
  } 
});
