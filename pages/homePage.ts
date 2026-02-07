import { expect, Locator, Page } from "@playwright/test";

export class homePage {
  public readonly page: Page;
  public readonly userNameInput: Locator;
  public readonly passwordInput: Locator;
  public readonly loginButton: Locator;
  public readonly userProfileName: Locator;
  public readonly invalidLoginError: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userNameInput = this.page.getByPlaceholder("Username");
    this.passwordInput = this.page.getByPlaceholder("Password");
    this.loginButton = this.page.getByRole("button", { name: "Login" });
    this.userProfileName = this.page.locator("p.oxd-userdropdown-name");
    this.invalidLoginError = this.page.getByText("Invalid credentials");
  }

  async navigateToLoginPage() {
    await this.page.goto(process.env.URL!);
  }
  async fillLoginForm(username: string, password: string): Promise<void> {
    await this.userNameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async verifyLoginSuccess(): Promise<boolean> {
    await this.userProfileName.waitFor();
    return await this.userProfileName.isVisible();
  }

  async verifyLoginFailureMessage(): Promise<boolean> {
    await this.invalidLoginError.waitFor();
    return await this.invalidLoginError.isVisible();
  }
}
