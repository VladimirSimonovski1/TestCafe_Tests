import { Selector } from 'testcafe';

export class HomePageLocators {
    public static signUpBtn = Selector("ul li [href='/signup/']");
    public static getStartedTitle = Selector("h1");
}

export class SignUpPageLocators {
    public static fields = [Selector("#name"), Selector("#email"), Selector("#password")];
    public static agreeTermsCheck = Selector("[for='signup-terms']");
    public static confirmSignUpTitle = Selector("h1.signup__title-form");
    public static submit = Selector("[type='submit']");
    public static pwdError = Selector(
        "[data-autotest-id='please-enter-your-password-1']",
    );
    public static errors(field: string): Selector {
        return Selector(`#${field}Error`);
    }
    public static pwdNotSecureError = Selector("#signup-form-password");
}
