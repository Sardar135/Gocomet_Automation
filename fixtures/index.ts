import {test as base} from '@playwright/test';
import { homePage } from '../pages/homePage';
import { dashBoardPage } from '../pages/dashboardPage';

type TestFixtures = {
    homePage: homePage;
    dashBoardPage: dashBoardPage
}

export const test = base.extend<TestFixtures>({
    homePage: async ({ page }, use) => {
        const basehomePage = new homePage(page);
        await use(basehomePage);
    },

    dashBoardPage: async ({page}, use) => {
        const dashBoard = new dashBoardPage(page);
        await use(dashBoard);
    }
});

export { expect } from '@playwright/test';