let my_obj = {
    name: 'anony',
    age: 56,
};

let my_obj_serialized = JSON.stringify(my_obj);

localStorage.setItem('my_obj', my_obj_serialized);

let my_obj_deserialized = JSON.parse(localStorage.getItem('my_obj'));

console.log(my_obj_deserialized);
