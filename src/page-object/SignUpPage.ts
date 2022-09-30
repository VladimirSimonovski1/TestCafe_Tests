import { ISignUpPage } from "../contracts/ISignUpPage";
import { SignUpPageLocators } from "../locator/Locators";
import { BasePage } from "./BasePage";
import { formValues } from "../../util/Util";
const Logger = require("bunyan");
const log = Logger.createLogger({ name: "Sign Up Page Log" });

export class SignUpPage extends BasePage implements ISignUpPage {
    constructor() {
        super("/");
    }

    public async signUpToMiro(): Promise<void> {
        await this.fillOutForm();
        await this.agreeToTerms();
        await this.getStarted();
    }

    public async fillOutForm(): Promise<void> {
        for (let index = 0; index < 3; index++) {
            await this.clearInputFieldAndEnterText(
                SignUpPageLocators.fields[index],
                formValues[index],
            );
        }
        log.info("Sign up form successfully filled out!");
    }

    public async agreeToTerms(): Promise<void> {
        await this.waitForElementToBeClickableAndClick(
            SignUpPageLocators.agreeTermsCheck,
        );
        log.info("Agreed to terms!");
    }

    public async getStarted(): Promise<void> {
        await this.waitForElementToBeClickableAndClick(
            SignUpPageLocators.submit,
        );
        log.info("Successfully signed up to Miro!");
    }

    public async getEmailCheckTitle(): Promise<string> {
        const confirmationTitle = await this.returnElementValueIfDisplayed(
            SignUpPageLocators.confirmSignUpTitle,
        );
        if (confirmationTitle === "") {
            throw new Error("Title text is empty");
        }
        log.info(`Title text is ${confirmationTitle}`);
        return confirmationTitle;
    }

    public async getAlertMessage(field: string): Promise<string> {
        let alertMsg = "";
        try {
            if (field === "password") {
                alertMsg = await this.returnElementValueIfDisplayed(
                    SignUpPageLocators.pwdError,
                );
            } else {
                alertMsg = await this.returnElementValueIfDisplayed(
                    SignUpPageLocators.errors(field),
                );
            }
            log.info(`Alert message for ${field} field is ${alertMsg}`);
        } catch (Error) {
            log.info(`Error while fetching the alert message: ${Error}`);
            throw new Error(Error);
        }
        return alertMsg;
    }

    public async fillOutPwdField(value: string): Promise<void> {
        await this.clearInputFieldAndEnterText(
            SignUpPageLocators.fields[2],
            value,
        );
        log.info("Password field is filled out!");
    }

    public async getPwdNotSecureAlertMsg(): Promise<string> {
        const alertMessage = await this.returnElementValueIfDisplayed(
            SignUpPageLocators.pwdNotSecureError,
        );
        if (alertMessage === "") {
            throw new Error("Alert message text is empty");
        }
        log.info(`Alert message text is ${alertMessage}`);
        return alertMessage;
    }
}
