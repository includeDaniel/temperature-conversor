import { temperatureConversor } from "../index";

describe("temperatureConversor", () => {
    test("should convert 30 degrees to 86 fahrenheit", () => {
        expect(temperatureConversor("C", "F", 30)).toBe(86);
    });
    test("should convert 30 fahrenheit to 10 degrees", () => {
        expect(temperatureConversor("F", "C", 50)).toBe(10);
    });
    test("should convert 30 degrees to 303.15 kelvin", () => {
        expect(temperatureConversor("C", "K", 30)).toBe(303.15);
    });
    test("should convert 303.15 degrees to 30 kelvin", () => {
        expect(temperatureConversor("K", "C", 303.15)).toBe(30);
    });
    test("should convert 303.15 degrees to 30 kelvin", () => {
        expect(temperatureConversor("K", "C", 303.15)).toBe(30);
    });
    test("should convert 30 fahrenheit to 272.039 kelvin", () => {
        expect(temperatureConversor("F", "K", 30)).toBe(272.039);
    });
    test("should convert 272.039 kelvin to 30 fahrenheit", () => {
        expect(temperatureConversor("K", "F", 272)).toBe(29.93);
    });
});
