const api_url="http://quotes.stormconsultancy.co.uk/random.json";
async function getQuote() {
    const response = await fetch(api_url);
    const data = await response.json();
    document.getElementById("moto").innerHTML = data.quote;
}
getQuote();