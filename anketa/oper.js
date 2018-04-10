let userSurname,
    userName, nameFather,
    yearBirth, ageDays,
    result, gender, nextGender, retirement;

userSurname = prompt('Введите вашу фамилию');


userName = prompt('Введите имя');


nameFather = prompt('Введите отчество');


yearBirth = prompt('Введите ваш возраст');

ageDays = yearBirth * 365;

result = confirm('Ваш пол - мужской?');
(result === true) ? gender = 1 : gender = 2;

(Number(yearBirth) >= 63 && gender === 1) ? nextGender = 1 : (Number(yearBirth) >= 58 && gender === 2) ? nextGender = 2 :
(Number(yearBirth) <= 63 && gender === 1) ? nextGender = 3 : (Number(yearBirth) <= 58 && gender === 2) ? nextGender = 4 : false;


(nextGender === 1) ? retirement = 'Да' : (nextGender === 2) ? retirement = 'Да' : (nextGender === 3) ? retirement = 'Нет' : (nextGender === 4) ? retirement = 'Нет' : false;

(Number(gender) === 1) ? gender = 'мужской' : (Number(gender) === 2) ? gender = 'женский' : false;


alert(`
ФИО: ${userSurname} ${userName} ${nameFather}
возраст, лет:  ${yearBirth}
возраст, дней: ${ageDays}
Пол: ${gender}
пенсионный возраст: ${retirement}
`);
