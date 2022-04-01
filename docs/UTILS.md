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

 - `cep` [*String*] - String to be formatted.

### Example

```js
formatCep('11740000') 
// '11740-000'
```

## formatCnpj
since `0.6.0`

Formats a string to CNPJ.

### Return
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

## insert
since `0.6.0`

Inserts an element at the given index. If the index is too large, element is inserted at the end of the list.

### Return
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


## cleanAccents
since `0.6.0`

Replace accents for its equivalent non-accents characters.

### Return
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

### Return
*String* - Cleaned string.

### Params

 - `value` [*String*] - Text to be cleaned.
 - `value` [*Boolean*] - (Optional) Wheather to keep empty space after removing special characters.

### Example

```js
removeSpecialCharacters('@açaí')
// 'aa'

removeSpecialCharacters('@açaí', true)
// ' a a'
```