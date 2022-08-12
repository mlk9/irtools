# IrTools
Iranian useful tools ; Bank validation, Convert Numbers, ...

## Installation
```
npm i --dev mlk9-irtools
```

## Bank Tools
- Get bank name
```getNameBank(card or iban number: number | string) :string //Bank Name```
- IBan validation
```isIBan(iban number: string) :boolean //true|false```
- Card validation
```isCard(card number: number | string) :boolean //true|false```

## Nation Tools
- National Number validation
```isNationalNumber(text : string) :boolean //true|false```
- Postal code validation
```isPostCode(text : number | string) :boolean //true|false```
- Phone number validation
```isPhoneNumber(text : number | string) :boolean //true|false```
- Jalali Date validation
```isJalaliDate(text : number | string) :boolean //true|false```

## Convert Tools
- Convert All Numbers to Fa Numbers
```toFaNumbers(text : string) :string```
- Convert All Numbers to En Numbers
```toEnNumbers(text : string) :string```
- Convert All Numbers to Ar Numbers
```toArNumbers(text : string) :string```
- Convert Rial to Thoman
```toToman(value : number) :number```
- Convert Thoman to Rial
```toRial(value : number) :number```
