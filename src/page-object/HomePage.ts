import { Selector, t } from "testcafe";

class HomePage {
  public t: TestController;
  private searchField: Selector;
  private searchResults: Selector;
  private searchSubmit: Selector;
  private archives: Selector;

  constructor() {
    this.searchField = Selector(".search-field");
    this.searchResults = Selector(".post-title");
    this.searchSubmit = Selector(".search-submit");
    this.archives = Selector("[id=archives-14] ul li");
  }

  async getNumOfArchives(): Promise<number> {
    return this.archives.count;
  }

  async getSearchResults(): Promise<string> {
    return this.searchResults.innerText;
  }

  async searchBlog(searchCriteria: string): Promise<void> {
    await t.typeText(this.searchField, searchCriteria)
  }

  async submitSearch(): Promise<void> {
    await t.click(this.searchSubmit)
  }
}

export default new HomePage();
