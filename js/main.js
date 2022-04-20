//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
    const dateChoice = '&date=' + document.querySelector('input').value
    const apiKey = 'bC7hogdtc6ObOqWVIR0hsYfdoctYz54gIelmMHTq'
    const url = 'https://api.nasa.gov/planetary/apod?api_key=' + apiKey + dateChoice

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            document.querySelector('h2').innerText = data.title
            document.querySelector('img').src = data.url
            document.querySelector('h3').innerText = data.explanation
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}