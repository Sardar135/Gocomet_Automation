import { test as base } from "@playwright/test";
import { homePage } from "../pages/homePage";
import { dashBoardPage } from "../pages/dashBoardPage";
import { APIUtils } from "../utils/apiUtils";

type TestFixtures = {
  homePage: homePage;
  dashBoardPage: dashBoardPage;
  apiUtils: APIUtils;
};

export const test = base.extend<TestFixtures>({
  homePage: async ({ page }, use) => {
    const basehomePage = new homePage(page);
    await use(basehomePage);
  },

  dashBoardPage: async ({ page }, use) => {
    const dashBoard = new dashBoardPage(page);
    await use(dashBoard);
  },

  apiUtils: async ({ request }, use) => {
    const apiUtils = new APIUtils(process.env.BASE_URL_API || "", request);
    await use(apiUtils);
  },
});

export { expect } from "@playwright/test";
