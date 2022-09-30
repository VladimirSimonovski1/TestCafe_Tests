import { expect } from "chai";

type Default = string | number | number[] | boolean | undefined;

export class ChaiAssertions {
    public static checkIfActualValueIsTrue(
        actual: boolean,
        message?: string,
    ): void {
        expect(actual, message).to.be.true;
    }

    public static checkIfActualEqualsExpected(
        actual: Default,
        expected: Default,
        message?: string,
    ): void {
        if (!message) {
            message = `Expected <${actual}> to be <${expect}>`;
        }
        expect(actual, message).equals(expected);
    }
}
