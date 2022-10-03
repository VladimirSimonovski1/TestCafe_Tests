import { ChaiAssertions } from "../assertion/Assertions";
import home from "../page-object/HomePage";


fixture`QAMIND`.page("https://qamind.com/").beforeEach(async (test) => {
  await test.deleteCookies().maximizeWindow();
});

test("Verify search results title", async () => {
  await home.searchBlog("protractor");
  await home.submitSearch();
  const numOfDearResults = await home.getSearchResults();
  await ChaiAssertions.checkIfActualEqualsExpected(
    numOfDearResults,
    `13 search results for “protractor”`
  );
});

test("Count the number of archives", async () => {
  const numOfArchives = await home.getNumOfArchives();
  await ChaiAssertions.checkIfActualEqualsExpected(numOfArchives, 20);
});

test.skip("Subscribe to the newsletter", async () => {
});