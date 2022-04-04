# Table of contents
- [Utils](#utils)
  - [formatMoney](#formatMoney)
  - [unformatMoney](#unformatMoney)
  - [formatCep](#formatCep)
  - [formatCnpj](#formatCnpj)
  - [isCpf](#isCpf)
  - [isCnpj](#isCnpj)
  - [isCep](#isCep)
  - [isEmail](#isEmail)
  - [isMobile](#isMobile)
  - [isAndroid](#isAndroid)
  - [isIOS](#isIOS)
  - [isIE](#isIE)
  - [isIE9](#isIE9)
  - [isAfterDate](#isAfterDate)
  - [isBeforeDate](#isBeforeDate)
  - [textEllipsis](#textEllipsis)
  - [capitalizeFirstLetter](#capitalizeFirstLetter)
  - [countdownToDate](#countdownToDate)
  - [insert](#insert)
  - [bytesToSize](#bytesToSize)
  - [cleanAccents](#cleanAccents)
  - [removeSpecialCharacters](#removeSpecialCharacters)
  - [getUrlParam](#getUrlParam)

# Utils

## formatMoney
since `0.0.2`

Format number to money.

### Returns
*String* - Formatted string.

### Params

 - `amount` [*Number*] - Number to be formatted.
 - `base` [*Number*] - (Optional) Base for unit value. Representation of R$ 1,00 in number. (default: 100)

### Example

```js
formatNumber(100)
// R$ 1,00

formatNumber(1)
// R$ 00,01

formatNumber(9890)
// R$ 98,90

formatNumber(9890, 1)
// R$ 9890,00 
```


## unformatMoney
since `0.0.2`

Unformat money to number.

### Returns
*Number* - Money value.

### Params

 - `money` [*String*] - String to be unformatted.
 - `base` [*Number*] - (Optional) Base for unit value. Representation of R$ 1,00 in number. (default: 100)

### Example

```js
unformatMoney('R$ 1,00')
// 100

unformatMoney('R$ 00,01')
// 1

unformatMoney('R$ 98,90') 
// 9890

unformatMoney('R$ 98,90', 1) 
// 98.90
```


## formatCep
since `0.2.0`

Format string to CEP.

### Returns
*String* - Formatted string.

### Params

 - `cep` [*String*] - String to be formatted.

### Example

```js
formatCep('11740000') 
// '11740-000'
```

## formatCnpj
since `0.6.0`

Formats a string to CNPJ.

### Returns
*String* - Formatted CNPJ.

### Params

 - `cnpj` [*String*] - String to be formatted.

### Example

```js
formatCnpj('90742025000153')
// '90.742.025/0001-53'
```


## isCpf
since `0.4.0`

Validates wheather a string is a valid CPF or not.

### Returns
*Boolean* - Is CPF valid.

### Params

 - `value` [*String*] - String to be validated.

### Example

```js
isCpf('340.004.230-70') 
// true

isCpf('111.111.111-11') 
// false
```

## isCnpj
since `0.4.0`

Validates wheather a string is a valid CNPJ or not.

### Returns
*Boolean* - Is CNPJ valid.

### Params

 - `value` [*String*] - String to be validated.

### Example

```js
isCnpj('50.812.421/0001-95') 
// true

isCnpj('50812421000195') 
// true

isCnpj('11.111.111/1111-11') 
// false
```


## isCep
since `0.6.0`

Validates wheather a string is a valid CEP or not. However, it does not validate wheather the CEP exists.

### Returns
*Boolean* - Is CEP valid.

### Params

 - `value` [*String*] - String to be validated.

### Example

```js
isCep('1174000') 
// true

isCep('11740-000') 
// true

isCep('114') 
// false
```


## isEmail
since `0.6.0`

Validates wheather a string is a valid email or not.

### Returns
*Boolean* - Is email valid.

### Params

 - `value` [*String*] - String to be checked.

### Example

```js
isEmail('test@email.com')
// true

isEmail('testemail.com')
// false
```


## isMobile
since `0.7.0`

Checks if the user is using a mobile screen.

### Returns
*Boolean* - If it is a mobile screen

### Params

 - `window` [*Window*] - Window object.
 - `mobileWidth` [*Number*] - (Optional) Mobile screen width. Default is 768.


## isAndroid
since `0.7.0`

Checks if the user is using an Android device.

### Returns
*Boolean* - If the device is an Android.

### Params

 - `window` [*Window*] - Window object.


## isIOS
since `0.7.0`

Checks if the user is using an iOS device.

### Returns
*Boolean* - If the device is an iOS.

### Params

 - `window` [*Window*] - Window object.


## isIE
since `0.7.0`

Checks if the user is using Internet Explorer.

### Returns
*Boolean* - If the browser is Internet Explorer.

### Params

 - `window` [*Window*] - Window object.


## isIE9
since `0.7.0`

Checks if the user is using Internet Explorer 9.

### Returns
*Boolean* - If the browser is Internet Explorer 9.

### Params

 - `window` [*Window*] - Window object.


## isAfterDate
since `0.6.0`

Checks wheather the current ddate is after the given date or not.

### Returns
*Boolean* - If the current date is after the given date or not.

### Params

 - `date` [*Number*] - Date of the month (1-31).
 - `month` [*Number*] - Month of the year (0-11).
 - `year` [*Number*] - Year (4 digits).

### Example

```js
isAfterDate(31, 11, 2019);
// true
```


## isBeforeDate
since `0.6.0`

Checks wheather the current ddate is before the given date or not.

### Returns
*Boolean* - If the current date is before the given date or not.

### Params

 - `date` [*Number*] - Date of the month (1-31).
 - `month` [*Number*] - Month of the year (0-11).
 - `year` [*Number*] - Year (4 digits).

### Example

```js
isBeforeDate(31, 11, 3999);
// true
```


## textEllipsis
since `0.1.0`

Insert ellipsis (...) to input text.

### Returns
*String* - Ellipsed input.

### Params

 - `input` [*String*] - Text to be ellipsed.
 - `limit` [*Number*] - Limit of characters before ellipsed.
 - `trail` [*String*] - (Optional) Custom trail to be inserted.

### Example

```js
textEllipsis('Lorem ipsum', 4) 
// 'Lore...'

textEllipsis('Lorem ipsum', 4, '-') 
// 'Lore-'
```


## capitalizeFirstLetter
since `0.2.0`

Capitalizes the first letter of word(s).

### Returns
*String* - Capitalized string.

### Params

 - `input` [*String*] - The string to be capitalized.
 - `allWords` [*Boolean*] - Whether to capitalize all words or just the first. (default: false)

### Example

```js
capitalizeFirstLetter('hello world') 
// 'Hello world'

capitalizeFirstLetter('hello world', true) 
// 'Hello World'
```


## countdownToDate
since `0.7.0`

Countdown to given date.

### Returns
*Object* - Countdown to date (days, hours, minutes and seconds).

### Params

 - `date` [*Date*] - Date to countdown to.


## insert
since `0.6.0`

Inserts an element at the given index. If the index is too large, element is inserted at the end of the list.

### Returns
*Any[]* - List of items with new item inserted.

### Params

 - `index` [*Number*] - The string to be capitalized.
 - `newItem` [*Any*] - Element to insert.
 - `list` [*Any[]*] - List of items.

### Example

```js
insert(1, 'Batman', [1, 2, 3]);
// [1, 'Batman', 2, 3]

insert(10, ['Batman'], [1, 2, 3])
// [1, 2, 3, ['Batman']]
```


## bytesToSize
since `0.7.0`

Formats bytes as a human readable string.

### Returns
*String* - Formatted string.

### Params

 - `bytes` [*Number*] - Number of bytes.

### Example

```js
bytesToSize(1024);
// 1.0 KB
```


## cleanAccents
since `0.6.0`

Replace accents for its equivalent non-accents characters.

### Returns
*String* - Cleaned string.

### Params

 - `value` [*String*] - Text to be cleaned.

### Example

```js
cleanAccents('açaí')
// 'acai'
```


## removeSpecialCharacters
since `0.6.0`

Removes special characters from a string.

### Returns
*String* - Cleaned string.

### Params

 - `value` [*String*] - Text to be cleaned.
 - `keepEmptySpace` [*Boolean*] - (Optional) Wheather to keep empty space after removing special characters.

### Example

```js
removeSpecialCharacters('@açaí')
// 'aa'

removeSpecialCharacters('@açaí', true)
// ' a a'
```


## getUrlParam
since `0.6.0`

Gets a parameter from the url.

### Returns
*String* - Parameter value.

### Params

 - `url` [*String*] - Url to be parsed.
 - `param` [*String*] - Parameter to be searched for.

### Example

```js
getUrlParam('http://localhost:8080/?param=value', 'param');
// returns 'value'
```