# Utils

## formatMoney
since `0.0.2`

Format number to money.

### Return
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

### Return
*Number* - Money value.

### Params

 - `money` [*String*] - String to be unformatted.
 - `base` [*Number*] - (Optional) Base for unit value. Representation of R$ 1,00 in number. (default: 100)

### Example

```js
formatNumber('R$ 1,00')
// 100

formatNumber('R$ 00,01')
// 1

unformatMoney('R$ 98,90') 
// 9890

unformatMoney('R$ 98,90', 1) 
// 98.90
```


## formatCep
since `0.2.0`

Format string to CEP.

### Return
*String* - Formatted string.

### Params

 - `cep` [*String*] - String to be unformatted.

### Example

```js
formatCep('11740000') 
// '11740-000'
```


## isCpf
since `0.4.0`

Validates wheather a string is a valid CPF or not.

### Return
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

### Return
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


## textEllipsis
since `0.1.0`

Insert ellipsis (...) to input text.

### Return
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

### Return
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