import { IHomePage } from "../contracts/IHomePage";
import { HomePageLocators } from "../locator/Locators";
import { BasePage } from "./BasePage";
const Logger = require("bunyan");
const log = Logger.createLogger({ name: "Home Page Log" });

export class HomePage extends BasePage implements IHomePage {
    constructor() {
        super("https://www.miro.com");
    }

    public async navigateToSignUpForm(): Promise<void> {
        await this.waitForElementToBeClickableAndClick(
            HomePageLocators.signUpBtn,
        );
        log.info("Sign up button is clicked!");
    }

    public async getSignUpTitle(): Promise<boolean> {
        const getStartedTitle = await this.returnElementValueIfDisplayed(
            HomePageLocators.getStartedTitle,
        );
        if (
            getStartedTitle === null ||
            getStartedTitle === "" ||
            getStartedTitle === undefined
        ) {
            log.error("Get started title is not visible on the screen!");
            return false;
        }
        log.info("Get started title is visible on the screen!");
        return true;
    }
}
