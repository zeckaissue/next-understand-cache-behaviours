
const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
export default async function Home() {
    const result = await fetch('http://127.0.0.1:3000/api/demo2')
    const json = await result.json()
    await wait(2000);
    const result2 = await fetch('http://127.0.0.1:3000/api/demo2')
    const json2 = await result2.json()

    return (
        <ul>
            <li>{JSON.stringify(json)}</li>
            <li>{JSON.stringify(json2)}</li>
        </ul>
    );
}
