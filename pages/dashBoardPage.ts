import { Locator, Page } from "@playwright/test";

export class dashBoardPage {
  public readonly page: Page;
  public readonly searchInput: Locator;
  public readonly searchResults: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = this.page.getByPlaceholder("Search");
    this.searchResults = this.page.locator("li.oxd-main-menu-item-wrapper");
  }

  async searchAndSelectTheItem(item: string): Promise<void> {
    await this.searchInput.fill(item);
    await this.searchResults.first().waitFor();
    await this.searchResults.first().click();
  }
}
