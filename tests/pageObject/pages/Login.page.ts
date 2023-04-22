import { Page, Locator } from "@playwright/test";
import BasePage from "./Base.page";
import { SignOut } from "../components";

export default class LoginPage extends BasePage {
  readonly path: string;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly signInBtn: Locator;
  readonly signOut: SignOut;

  constructor(page: Page) {
    super(page)
    this.path = '/'
    this.emailInput = page.locator('#email');
    this.passwordInput = page.locator('#password');
    this.signInBtn = page.getByRole('button', { name: 'Sign in'});
    this.signOut = new SignOut(this.page)
  }

  async goto() {
    await this.page.goto(this.path);
    await this.waitUntilPageLoad();
  }

  async fillEmailAndPasswordInputs(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
  }

  async clickSignInButton() {
    await this.signInBtn.click();
  }
}
