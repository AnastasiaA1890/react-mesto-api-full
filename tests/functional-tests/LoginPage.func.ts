import { test, expect } from '@playwright/test';
import {TEST_USERS} from "../test-data";
import {LoginPage, MainPage} from "../pageObject";

test.describe('Login Page', () => {
  let loginPage: LoginPage;
  let mainPage: MainPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    mainPage = new MainPage(page);
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Verify user is able to sign in', async () => {
    await test.step('Setup', async () => {
      await loginPage.goto();
      await loginPage.fillEmailAndPasswordInputs(TEST_USERS.email, TEST_USERS.password);
      await loginPage.clickSignInButton();
    });
    await test.step('Assert user is logged in', async () => {
      await expect(loginPage.signOut.signOutLink).toBeVisible();
      await expect(mainPage.userEmail).toContainText(TEST_USERS.email);
    });
  });
});

