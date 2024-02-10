const arr = [];

arr.push('2381826', '865747', '43760', '675', '4673', '21905346', '1254456');

arr.filter(value => {
  if (value[0] === '2' || value[0] === '4') {
    console.log(value);
  }
});
console.log('');

arr.forEach(value => {
  if (value > 5) {
    console.log(value);
  }
});
console.log('');

function func(str) {
  if (typeof str !== 'string') {
    console.log('В качестве аргумента передана не строка');
    return;
  }

  str = str.trim();

  if (str.length > 30) {
    str = str.slice(0, 30) + '…';
  }

  console.log(str);
}

func('   17579401754637945867878385945890385   ');