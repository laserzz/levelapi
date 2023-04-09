const body = {username: 'rain'};

const get = async () => {
    const r = await fetch('http://localhost:3000/api/level', {
        method: 'POST',
        body: JSON.stringify(body)
    });

    console.log(await r.json());
}

get();