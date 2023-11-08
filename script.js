let resultDiv = document.getElementById('result');

function fetchData() {
    fetch('https://tri-m.app/glas/data.php')
        .then(response => response.json())
        .then(data => {
            resultDiv.innerHTML = 'UKUPNO: ' + data[0].glasovi;
        });
}

// Fetch data every 5 seconds
setInterval(fetchData, 5000);
