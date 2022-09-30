const createTestCafe = require('testcafe');
const fs = require('fs');

async function main () {
    fs.rmSync("reports", { recursive: true, force: true });
        const testcafe = await createTestCafe();
    try {
        await testcafe.createRunner()
        .src("src/test/")
        .browsers(`chrome`)
        .reporter(['spec', {
            name: 'json',
            output: 'reports/report.json'
        }])
        .screenshots({
            path: 'reports/screenshots/',
            pathPattern: '${DATE}_${BROWSER}_${TEST_INDEX}.png',
            fullPage: true,
            thumbnails: false,
            takeOnFails: true
        })
        .video('reports/videos/', {
            singleFile: false,
            failedOnly: true,
            pathPattern: '${DATE}_${BROWSER}_${TEST_INDEX}.mp4'
        }, {
            r: 40,
            aspect: '16:9'
        })
        .run({
            skipJsErrors: true,
            quarantineMode: false,
            selectorTimeout: 10000,
            assertionTimeout: 5000,
            pageLoadTimeout: 15000,
            speed: 0.5,
            stopOnFirstFail: true
        });
    }
    finally {
        await testcafe.close();
    }
}

main();
