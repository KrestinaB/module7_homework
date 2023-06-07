const userBoloshova = function(a) {
    a = {Имя: 'Кристина',
    Фамилия: 'Болошова',
    Возраст: '33'}
  for (let key in a) {
    console.log(key+ ': ' + a[key]);
  }
    
   }
  userBoloshova();
