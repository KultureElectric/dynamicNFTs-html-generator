import fetch from "node-fetch";

const test = () => {
    console.log('test');
    const response = fetch('https://github.com/KultureElectric/NFTMakerPatch/blob/main/build/index.js', {
                    method : "GET",
                    cache: 'no-cache'
                    }).then(response => response.json());
    console.log();
}

test();