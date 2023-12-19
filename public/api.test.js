import { test, expect, describe } from "vitest";
import { listByPartCode } from "./api.js";

const URL = "http://localhost:3000";

/**
 * 기존 소스코드에서 detailByPartCodeAndContentNum의 파라미터 중 URL을
 * /detail -> http://localhost:3000/detail로 바꿔야 테스트 코드 동작
 */
describe("분야코드마다 list의 갯수가 5인지 검증", () => {
  test("PC01일때의 list의 갯수가 5개인지 검증", async () => {
    const api = "/list";
    const expected = 5;
    const partCode = "PC01";

    const result = await listByPartCode(URL + api, partCode);
    expect(result).toHaveLength(expected);
  });

  test("PC02일때의 list의 갯수가 5개인지 검증", async () => {
    const api = "/list";
    const expected = 5;
    const partCode = "PC02";

    const result = await listByPartCode(URL + api, partCode);
    expect(result).toHaveLength(expected);
  });

  test("PC03일때의 list의 갯수가 5개인지 검증", async () => {
    const api = "/list";
    const expected = 5;
    const partCode = "PC03";

    const result = await listByPartCode(URL + api, partCode);
    expect(result).toHaveLength(expected);
  });

  test("PC04일때의 list의 갯수가 5개인지 검증", async () => {
    const api = "/list";
    const expected = 5;
    const partCode = "PC04";

    const result = await listByPartCode(URL + api, partCode);
    expect(result).toHaveLength(expected);
  });

  test("PC05일때의 list의 갯수가 5개인지 검증", async () => {
    const api = "/list";
    const expected = 5;
    const partCode = "PC05";

    const result = await listByPartCode(URL + api, partCode);
    expect(result).toHaveLength(expected);
  });
});
