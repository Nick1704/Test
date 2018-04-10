let userSurname,
    userName, nameFather,
    yearBirth, ageDays,
    result, gender, retirement;
while (true) {
    userSurname = prompt('Введите вашу фамилию');
    if (Number(userSurname) !== 0) break;
}
while (true) {
    userName = prompt('Введите имя');
    if (Number(userName) !== 0) break;
}
while (true) {
    nameFather = prompt('Введите отчество');
    if (Number(nameFather) !== 0) break;
}
while (true) {
    yearBirth = prompt('Введите ваш возраст');
    if (Number(yearBirth) !== 0) break;
}
ageDays = yearBirth * 365;

result = confirm('Ваш пол - мужской?');
if (result === true) {
    gender = 1;
}
else {
    gender = 2;
}

if (Number(gender) === 1) {
    if (Number(yearBirth) >= 63) {
        retirement = 'Да';
    }
    else {
        retirement = 'Нет';
    }
}
if (Number(gender) === 2) {
    if (Number(yearBirth) >= 58) {
        retirement = 'Да';
    }
    else {
        retirement = 'Нет';
    }
}

if (Number(gender) === 1) {
    gender = 'мужской';
}
if (Number(gender) === 2) {
    gender = 'женский';
}
alert(`
ФИО: ${userSurname} ${userName} ${nameFather}
возраст, лет:  ${yearBirth}
возраст, дней: ${ageDays}
Пол: ${gender}
пенсионный возраст: ${retirement}
`);
