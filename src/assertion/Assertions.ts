import { t } from "testcafe";

type Default = string | number | number[] | boolean | undefined;

export class Assertions {
  public static async checkIfActualValueIsTrue(actual: boolean): Promise<void> {
    t.expect(actual).ok;
  }

  public static async checkIfActualEqualsExpected(
    actual: Default,
    expected: Default
  ): Promise<void> {
    await t.expect(actual).eql(expected);
  }
}
