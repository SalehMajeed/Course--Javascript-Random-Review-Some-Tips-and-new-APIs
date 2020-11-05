const btn_copy = document.getElementById('btn_copy');

const name_list = {
    name: [],
    on_new_name: null,
    init(on_new_name_callback) {
        this.on_new_name = on_new_name_callback;
    },
    add_name(name) {
        this.name.push(name);
        this.on_new_name(name);
    },
};

name_list.init(function (new_name) {
    console.log(new_name);
});

name_list.add_name('anony');
