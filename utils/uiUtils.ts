import { homePage } from '../pages/homePage';

export class LoginUtils {
    static async loginSuccessfully(homePageInstance: homePage, username?: string, password?: string): Promise<void> {

        // Navigate to the login page
        await homePageInstance.navigateToLoginPage();

        // Fill in the login form with valid credentials
        await homePageInstance.fillLoginForm(username!, password!);

        // Verify that the login was successful
        const isLoggedIn = await homePageInstance.verifyLoginSuccess();
        if (!isLoggedIn) {
            throw new Error('Login failed');
        }
    }

    static async loginWithInvalidCredentials(homePageInstance: homePage, username?: string, password?: string): Promise<void> {

        // Navigate to the login page
        await homePageInstance.navigateToLoginPage();

        // Fill in the login form with invalid credentials
        await homePageInstance.fillLoginForm(username!, password!);

        // Verify that the login was unsuccessful
        const hasError = await homePageInstance.verifyLoginFailureMessage();
        if (!hasError) {
            throw new Error('Expected login failure message not shown');
        }
    }
}