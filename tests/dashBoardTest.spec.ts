import { expect, test } from "../fixtures"
import { LoginUtils } from "../utils/loginUtils";

test.describe('dashBoard test', () => {
    test('search bar functionality @regression', async({ homePage, dashBoardPage }) => {
        await LoginUtils.loginSuccessfully(homePage, process.env.USERNAME, process.env.PASSWORD);
        await dashBoardPage.searchAndSelectTheItem('leave');
    })
})