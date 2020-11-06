const rankings_body = document.querySelector('#rankings-table > tbody');

function load_ranking() {
    const request = new XMLHttpRequest();

    request.open('GET', 'rankings.json');
    request.onload = () => {
        try {
            const json = JSON.parse(request.responseText);
            populate_rankings(json);
        } catch (e) {
            console.log('Could not load Rankings!');
        }
    };

    request.send();
}

function populate_rankings(json) {
    // clear existing data
    while (rankings_body.firstChild) {
        rankings_body.removeChild(rankings_body.firstChild);
    }

    json.forEach((row) => {
        const tr = document.createElement('tr');
        row.forEach((cell) => {
            const td = document.createElement('td');
            td.textContent = cell;
            tr.append(td);
        });
        rankings_body.append(tr);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    load_ranking();
});
