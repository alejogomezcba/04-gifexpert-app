import { getGifs } from "../../helpers/getGifs";


describe("getGifs function", () => {
  test("If the function getGifs is working fine", async () => {
    const gifs = await getGifs('hunter x hunter');
    expect(gifs.length).toBe(10);
  });

  test("If the function getGifs dont received a category", async () => {
      const gifs = await getGifs('');
      expect(gifs.length).toBe(0);
  });
});
