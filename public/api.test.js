const BASE_URL = "http://localhost:3000";

//테스트 커버리지
test('"안녕"이라고 작성할 경우 한국어로 감지된다.', async () => {
    const expected = "ko";
    const text = "안녕";
    const url = `${BASE_URL}/detectLangs`;
    expect(await detectLanguage(url, text)).toBe(expected); //promist를 반환할 때는 await
  });
  
  test('"hello"라고 작성할 경우 영어로 감지된다.', () => {
      // const text = "hello";
      // const expected = "en";
      // expect(await detectLanguage()).toBe(expected);
  });
  
  test('"안녕"을 번역할 경우 "Hi"로 번역된다.', async () => {
    const sourceLanguage = "ko";
    const targetLanguage = "en";
    const text = "안녕";
    const url = `${BASE_URL}/translate`;
    const result = await translateLanguage(
      url,
      sourceLanguage,
      targetLanguage,
      text
    );
    console.log(result.translatedText);
    expect(result.translatedText).toBe("Hi.");
  });