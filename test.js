import fetch from "node-fetch";

const test = () => {
    console.log('test');
    const response = fetch('https://github.com/KultureElectric/dynamicNFTs-html-generator/blob/main/metadata.js', {
                    method : "GET",
                    cache: 'no-cache'
                    }).then(response => response.json());
    console.log();
}

test();