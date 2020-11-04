const my_list = document.getElementById('my_list');
const bananas_item = document.getElementById('bananas');
const kivi_item = document.createElement('li');

kivi_item.innerText = 'kivi';

my_list.insertBefore(kivi_item, bananas_item);
