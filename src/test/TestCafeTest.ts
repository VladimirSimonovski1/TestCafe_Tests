import { Selector, test } from 'testcafe';

fixture`QAMIND`
    .page`https://qamind.com/`

    test("Navigate to QAMIND home page", async test => {
        await test
        .maximizeWindow()
        .typeText(".search-field", "protractor")
        .click(".search-submit");

        const numOfDearResults = await Selector(".post-title").innerText;
        await test.expect(numOfDearResults).eql(`13 search results fowr “protractor”`);
    })

