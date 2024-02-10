async function app() {
  const response = await fetch('https://reqres.in/api/users?per_page=12');
  const obj = await response.json();

  console.log('-----------');
  console.log('Пункт №1:');
  console.log('-----------');

  const data = obj.data;
  for (let user of data) {
    console.log(user.last_name);
  }

  console.log('-----------');
  console.log('Пункт №2:');
  console.log('-----------');

  for (let user of data) {
    if (user['last_name'][0] === 'F') {
      for (let key in user) {
        console.log(`${key}: ${user[key]}`);
      }
      console.log('')
    }
  }

  console.log('-----------');
  console.log('Пункт №3:');
  console.log('-----------');

  let result = data.reduce((acc, value) => {
    acc = acc + ' ' + value.first_name + ' ' + value.last_name;
    if (value === data[data.length - 1]) {
      acc = acc + '.'
    } else { acc = acc + ',' }
    return acc;
  }, 'Наша база содержит данные следующих пользователей:')
  console.log(result);

  console.log('-----------');
  console.log('Пункт №4:');
  console.log('-----------');

  for (let user of data) {
    for (let key in user) {
      console.log(key);
    }
    break;
  }
}

app();