<script lang="ts">
    const api_url="http://quotes.stormconsultancy.co.uk/random.json";
    async function getQuote() {
        const response = await fetch(api_url);
        const data = await response.json();
        let name = data.quote;
    }
</script>

<h1>Hello {name}!</h1>