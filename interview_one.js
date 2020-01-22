const https = require('https');

// generate initial request
function getCountriesPromise(s, page) {
    return new Promise((resolve, reject) => {
        const firstRequest = https.request({
            hostname: 'jsonmock.hackerrank.com',
            port: 443,
            path: '/api/countries/search?name=' + s + "&page=" + page,
            method: 'GET'
        }, (res) => {
            res.on('data', data => {
                const jsonData = JSON.parse(data);
                resolve(jsonData)
            })
        });

        firstRequest.on('error', error => {
            console.error(error);
            reject(error)
        });

        firstRequest.end()
    })
}

async function getCountriesSync(s, p) {
    let currentPage = 0;
    let countries = [];
    while (true) {
        currentPage++;
        // sync fetch all countries in all pages
        let resolve = await getCountriesPromise(s, currentPage);
        if (resolve['data'].length === 0) {
            break
        }
        countries = [...countries, ...resolve['data']];
    }

    // iterate over countries and retrieve count
    let result = 0;
    countries.forEach((country) => {
        if (country['population'] > p) {
            result++
        }
    });

    return result
}

function getCountries(s, p) {
    let result = 0;

    getCountriesSync(s, p).then((resolve) => {
        result = resolve;
        console.log(resolve)
    });

    return result
}

getCountries('un', 100090);
