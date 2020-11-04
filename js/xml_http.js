const xhr = new XMLHttpRequest();
/**
            0. => unset.
            1. => open.
            2. => header Received.
            3. => loading.
            4. => done.
         */

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            console.log(xhr.responseText);
            document.getElementById('title').textContent = xhr.responseText;
        }

        if (xhr.status == 404) {
            console.log('File or resource not found');
        }
    }
};

xhr.open('get', 'js/xml_http.js', true);
xhr.send();
