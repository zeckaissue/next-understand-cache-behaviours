let ready = false;
// Fetch localhost:3000/isr-page and check that response headers have cache-control value to 60 seconds
const check = async () => {
    try {
        const response = await fetch('http://localhost:3000/en/demo');
        const responseHome = await fetch('http://localhost:3000/en/demo2');
        const headers = response.headers;
        const headersHome = responseHome.headers;
        const cacheControl = headers.get('cache-control');
        const cacheControlHome = headersHome.get('cache-control');
        if (!cacheControl) {
            console.error("missing cache controle");
        }
        if (!cacheControlHome) {
            console.error("missing cache controle from home");
        }
        if (!ready) {
            console.log("Ready");
            ready = true;
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
        ready = false;
        console.error("Not ready yet")
    }
}
check();

setInterval(check, 10);

