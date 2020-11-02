let f = 140;

Number.prototype.to_celcius = function () {
    return ((this - 32) * 5) / 9;
};

alert(f.to_celcius());
