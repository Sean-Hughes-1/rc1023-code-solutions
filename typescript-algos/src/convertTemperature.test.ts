import { convertTemperature } from './convertTemperature';

// Your code goes here
describe('convertTemperature', () => {
  describe('succesfully converts to Kelvin', () => {
    it('succesfully converts to Kelvin', () => {
      const celsius = 36.5;
      const result = convertTemperature(celsius);
      expect(result[0]).toEqual(309.65);
    });
    it('succesfully converts to Kelvin', () => {
      const celsius = 122.11;
      const result = convertTemperature(celsius);
      expect(result[0]).toEqual(395.26);
    });
  });
  describe('succesfully converts to Fahrenheit', () => {
    it('succesfully converts to Fahrenheit', () => {
      const celsius = 36.5;
      const result = convertTemperature(celsius);
      expect(result[1]).toEqual(97.7);
    });
    it('succesfully converts to Fahrenheit', () => {
      const celsius = 122.11;
      const result = convertTemperature(celsius);
      expect(result[1]).toEqual(251.798);
    });
  });
  it('succesfully calculates both F and C when input is 0', () => {
    const celsius = 0;
    const result = convertTemperature(celsius);
    expect(result).toEqual([273.15, 32]);
  });
});
