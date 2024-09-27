function loopNumbers() {
    const start = parseInt(document.getElementById('start').value);
    const end = parseInt(document.getElementById('txt-last-num').value);
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    if (start <= end) {
        for (let i = start; i <= end; i++) {
            const li = document.createElement('li');
            li.textContent = i;
            outputDiv.appendChild(li);
        }
    } else {
        for (let i = start; i >= end; i--) {
            const li = document.createElement('li');
            li.textContent = i;
            outputDiv.appendChild(li);
        }
    }

    let counter = 0;
    let updateCount;

    document.getElementById("btn-count").onclick = (e) => {
        if (e.target.innerHTML === "Start") {
            e.target.innerHTML = "Stop";
            updateCount = setInterval(() => {
                counter++;
                document.getElementById("counter").innerHTML = counter;
            }, 1000);
        } else {
            e.target.innerHTML = "Start";
            clearInterval(updateCount);
        }
    };
}

let toys = ["drum", "ball", "rope", "balloon", "tire"];

toys.forEach((toy) => {
    const p = document.createElement('p');
    p.innerHTML = toy;
    document.getElementById("list").append(p);
});

let toyPrices = [];
toyPrices["barbie"] = 7.54;
toyPrices["doll house"] = 86.23;
toyPrices["slide"] = 34.23;
toyPrices["ken"] = 12.54;
toyPrices["bike"] = 7.4;

const table = document.getElementById('toy-table');

for (let toy in toyPrices) {
    let tr = document.createElement('tr');
    const toyNameTd = document.createElement('td');
    const toyPriceTd = document.createElement('td');
    const actionTd = document.createElement('td');

    toyNameTd.textContent = toy;
    toyPriceTd.textContent = `$${toyPrices[toy].toFixed(2)}`;
    actionTd.innerHTML = '<button onclick="alertToyPrice(\'' + toy + '\')">Show Price</button>';

    tr.appendChild(toyNameTd);
    tr.appendChild(toyPriceTd);
    tr.appendChild(actionTd);

    table.appendChild(tr);
}

function alertToyPrice(toyName) {
    alert('The price of ' + toyName + ' is $' + toyPrices[toyName].toFixed(2));
}
