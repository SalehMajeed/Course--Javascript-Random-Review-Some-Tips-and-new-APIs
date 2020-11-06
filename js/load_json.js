const xhr = new XMLHttpRequest();

// xhr.onload = function () {
//     console.log(this.responseText);
// };

xhr.addEventListener('load', function () {
    if (this.status == 200) {
        try {
            const res_obj = JSON.parse(this.responseText);
            console.log(res_obj);
            alert(res_obj.status);
        } catch (err) {
            console.log('there was an error in the json could not parse');
        }
    } else {
        console.log('Did not receive 200 of from response!');
    }
});

xhr.open('GET', 'data.json');
xhr.send();
