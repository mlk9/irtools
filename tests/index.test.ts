import { Convertor, IrBank, National } from "../src";

describe('Convert Module Test', () => {
  test('Rial to Toman', () => {
    expect(Convertor.toToman(9000)).toBe(900)
    expect(Convertor.toToman(9873)).toBe(987.3)
  });
  test('Persian And Arabic Numbers To English', () => {
    expect(Convertor.toEnNumbers('۰۱۲۳۴۵۶۷۸۹')).toBe('0123456789')
  });
  test('English Numbers To Persian', () => {
    expect(Convertor.toFaNumbers('0123456789')).toBe('۰۱۲۳۴۵۶۷۸۹')
  });
});

describe('IrBank Module Test', () => {
  test('Card Validation', () => {
    // expect(IrBank.isCard(YOUR CORRECT CARD NUMBER)).toBe(true)
    expect(IrBank.isCard(6037697551517241)).toBe(false)
    expect(IrBank.isCard('6037647551517243')).toBe(false)
  });
  test('IBan Validation', () => {
    expect(IrBank.isIBan('')).toBe(false)
    expect(IrBank.isIBan('IR123456789123456789123456')).toBe(false)
  });
  test('Get Bank Name', () => {
    // expect(IrBank.getBankName(YOUR CORRECT CARD NUMBER)).toBe(BANK NAME)
    expect(() => {IrBank.getBankName('3322')}).toThrow('Input most be card number or IBan Serial')
  });
});

describe('National Module Test', () => {
  test('National Number Validation', () => {
    expect(National.isNationalNumber('0924914321')).toBe(false)
    expect(National.isNationalNumber('')).toBe(false)
  });
  test('Post Code Validation', () => {
    expect(National.isPostCode('8324234')).toBe(false)
  });
  test('Jalali Date Validation', () => {
    
    expect(National.isJalaliDate(14010411)).toBe(true)
    expect(National.isJalaliDate(4010411)).toBe(true)
    expect(National.isJalaliDate('010411')).toBe(true)
    expect(National.isJalaliDate('1401/04/12')).toBe(true)
    expect(National.isJalaliDate('1401-04-12')).toBe(true)
    expect(National.isJalaliDate('1401.04.12')).toBe(true)
    expect(National.isJalaliDate('12/04/1401')).toBe(true)
    expect(National.isJalaliDate('۱۲/13/۱۴۰۱')).toBe(false)
  });
  test('Phone Validation', () => {
    expect(National.isPhoneNumber(9123456789)).toBe(true)
    expect(National.isPhoneNumber(989123456789)).toBe(true)
    expect(National.isPhoneNumber('+989123456789')).toBe(true)
  });
});