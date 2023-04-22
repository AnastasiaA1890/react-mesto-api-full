import {Page, Locator} from "@playwright/test";
export default class SignOut {
  readonly page: Page
  readonly signOutLink: Locator;
  constructor(page: Page) {
    this.page = page;
    this.signOutLink = page.getByText('SignOut');
  }
}
