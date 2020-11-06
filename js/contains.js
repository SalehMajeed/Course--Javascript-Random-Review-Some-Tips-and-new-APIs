const my_list = document.getElementById('list1');
const listItem2 = document.querySelector('li:nth-child(2');
const strong = document.createElement('strong');

strong.innerText = ' some strong text';
strong.setAttribute('id', 'strong-text');
listItem2.append(strong);
strong.style.color = 'blue';

const result = listItem2.contains(strong);
console.log(result);

console.log(my_list.querySelector('li:first-child').contains(strong));
console.log(my_list.contains(strong));
