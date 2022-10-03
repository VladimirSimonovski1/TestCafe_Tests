import { Selector, t } from "testcafe";

class HomePage {
  public t: TestController;
  private searchField: Selector;
  private searchResults: Selector;
  private searchSubmit: Selector;
  private archives: Selector;
  private newsletterField: Selector;
  private newsletterSubmit: Selector;
  private newsletterSuccess: Selector;

  constructor() {
    this.searchField = Selector(".search-field");
    this.searchResults = Selector(".post-title");
    this.searchSubmit = Selector(".search-submit");
    this.archives = Selector("[id=archives-14] ul li");
    this.newsletterField = Selector("[type=email]");
    this.newsletterSubmit = Selector("[value='SUBSCRIBE']");
    this.newsletterSuccess = Selector(".mc4wp-success");
  }

  async getNumOfArchives(): Promise<number> {
    return this.archives.count;
  }

  async getSearchResults(): Promise<string> {
    return this.searchResults.innerText;
  }

  async searchBlog(searchCriteria: string): Promise<void> {
    await t.typeText(this.searchField, searchCriteria);
  }

  async submitSearch(): Promise<void> {
    await t.click(this.searchSubmit);
  }

  async subscribeToNewsletter(): Promise<string> {
    await t.typeText(
      this.newsletterField,
      (Math.random() + 1).toString(36).substring(7) + "@gmail.com"
    );
    await t.click(this.newsletterSubmit);
    const successMsg = await this.newsletterSuccess.innerText;
    return successMsg;
  }
}

export default new HomePage();
