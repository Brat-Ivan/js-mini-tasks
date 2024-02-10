const books = document.querySelectorAll('.book');

(function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j].childNodes[1].innerText > arr[j + 1].childNodes[1].innerText) {
       let temp = arr[j + 1].innerHTML;
       arr[j + 1].innerHTML = arr[j].innerHTML;
       arr[j].innerHTML = temp;
      }
    }
  }
}(books));

const body = document.querySelector('body');
body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

books[2].childNodes[1].childNodes[1].innerText = 'Книга 3. this и Прототипы Объектов';

const adv = document.querySelector('.adv');
adv.remove();

const book2List = books[1].querySelector('ul');
const book5List = books[4].querySelector('ul');

function sortList(list) {
  const arr = list.children;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (
        !arr[j].textContent.includes('Предисловие') &&
        arr[j].textContent > arr[j + 1].textContent
      ) {
        let temp = arr[j + 1].textContent;
        arr[j + 1].textContent = arr[j].textContent;
        arr[j].textContent = temp;
      }
    }
  }
}

sortList(book2List);
sortList(book5List);

const book6List = books[5].querySelector('ul');
const newChapter = document.createElement('li');

newChapter.textContent = 'Глава 8: За пределами ES6';
book6List.insertAdjacentElement('afterbegin', newChapter);

(function (list) {
  const arr = list.children;
  for (let i = 0; i < arr.length - 1; i++) {
    if (
      arr[i].textContent > arr[i + 1].textContent ||
      arr[i + 1].textContent.includes('Предисловие')
    ) {
      let temp = arr[i + 1].textContent;
      arr[i + 1].textContent = arr[i].textContent;
      arr[i].textContent = temp;
    }
  }
}(book6List));