import BasePage from "./Base.page";
import {Page, Locator} from "@playwright/test";

export default class MainPage extends BasePage{
  readonly userEmail: Locator;

  constructor(page: Page) {
    super(page);
    this.userEmail = page.locator('.header__user-email');
  }
}
