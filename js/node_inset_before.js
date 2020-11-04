const my_list = document.getElementById('my_list');
const bananas_item = document.getElementById('bananas');
const kivi_item = document.createElement('li');

kivi_item.innerText = 'kivi';

add_to_begining(my_list, kivi_item);

function add_to_begining(parent, to_insert) {
    const position = parent.firstChild;
    parent.insertBefore(to_insert, position);
}
