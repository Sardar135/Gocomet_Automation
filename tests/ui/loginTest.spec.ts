import { expect, test } from "../../fixtures";
import { LoginUtils } from "../../utils/uiUtils";

test.describe("Login Test", () => {
  test("should login successfully @smoke", async ({ homePage }) => {
    await LoginUtils.loginSuccessfully(
      homePage,
      process.env.USERNAME,
      process.env.PASSWORD,
    );
  });

  test("User should not login with invalid credentials @smoke", async ({
    homePage,
  }) => {
    await LoginUtils.loginWithInvalidCredentials(
      homePage,
      process.env.INVALID_USERNAME!,
      process.env.INVALID_PASSWORD!,
    );
  });
});
