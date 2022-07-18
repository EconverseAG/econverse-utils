## Functions

<dl>
<dt><a href="#bytesToSize">bytesToSize(bytes)</a> ⇒ <code>string</code></dt>
<dd><p>Formats bytes as a human readable string.</p></dd>
<dt><a href="#capitalizeFirstLetter">capitalizeFirstLetter(input, allWords)</a> ⇒ <code>string</code></dt>
<dd><p>Capitalizes the first letter of (each) word(s).</p></dd>
<dt><a href="#cleanAccents">cleanAccents(value)</a> ⇒ <code>string</code></dt>
<dd><p>Replace accents for its equivalent non-accents characters.</p></dd>
<dt><a href="#countdownToDate">countdownToDate(date)</a> ⇒ <code>Object</code></dt>
<dd><p>Countdown to given date.</p></dd>
<dt><a href="#formatCep">formatCep(cep)</a> ⇒ <code>string</code></dt>
<dd><p>Format string to CEP.</p></dd>
<dt><a href="#formatCnpj">formatCnpj(cnpj)</a> ⇒ <code>string</code></dt>
<dd><p>Formats a string into CNPJ.</p></dd>
<dt><a href="#formatMoney">formatMoney(amount, base)</a> ⇒ <code>string</code></dt>
<dd><p>Format number to money.</p></dd>
<dt><a href="#getCep">getCep(cep)</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Gets CEP informations from ViaCEP API.</p></dd>
<dt><a href="#getCnpj">getCnpj(cnpj)</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Gets CNPJ informations from Receita WS API.</p></dd>
<dt><a href="#getUrlParam">getUrlParam(url, param)</a> ⇒ <code>string</code></dt>
<dd><p>Gets a parameter from the url.</p></dd>
<dt><a href="#insert">insert(index, newItem, list)</a> ⇒ <code>Array.&lt;any&gt;</code></dt>
<dd><p>Inserts an element at the given index. If the index is too large, element is inserted at the end of the list.</p></dd>
<dt><a href="#isAfterDate">isAfterDate(date, month, year)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks wheather the current date is after the given date or not.</p></dd>
<dt><a href="#isAndroid">isAndroid(window)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if the user is using an Android device.</p></dd>
<dt><a href="#isBeforeDate">isBeforeDate(date, month, year)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks wheather the current date is before the given date or not.</p></dd>
<dt><a href="#isCnpj">isCnpj(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if the given value is a valid CNPJ or not.</p></dd>
<dt><a href="#isCpf">isCpf(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if the given value is a valid CPF or not.</p></dd>
<dt><a href="#isEmail">isEmail(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if the given value is a valid email or not.</p></dd>
<dt><a href="#isIE9">isIE9(window)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if the user is using Internet Explorer 9.</p></dd>
<dt><a href="#isIE">isIE(window)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if the user is using Internet Explorer.</p></dd>
<dt><a href="#isIOS">isIOS(window)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if the user is using an iOS device.</p></dd>
<dt><a href="#isMobile">isMobile(window, mobileWidth)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if the user is using a mobile screen.</p></dd>
<dt><a href="#removeSpecialCharacters">removeSpecialCharacters(value, keepEmptySpace)</a> ⇒ <code>string</code></dt>
<dd><p>Removes special characters from a string.</p></dd>
<dt><a href="#textEllipsis">textEllipsis(input, limit, trail)</a> ⇒ <code>string</code></dt>
<dd><p>Insert ellipsis (...) to input text.</p></dd>
<dt><a href="#unformatMoney">unformatMoney(money, base)</a> ⇒ <code>number</code></dt>
<dd><p>Unformat money to number.</p></dd>
</dl>

<a name="bytesToSize"></a>

## bytesToSize(bytes) ⇒ <code>string</code>
<p>Formats bytes as a human readable string.</p>

**Kind**: global function  
**Returns**: <code>string</code> - <p>Formatted string.</p>  
**Since**: 0.7.0  

| Param | Type | Description |
| --- | --- | --- |
| bytes | <code>number</code> | <p>Number of bytes.</p> |

**Example**  
```js
bytesToSize(1024)
// 1.0 KB
```
<a name="capitalizeFirstLetter"></a>

## capitalizeFirstLetter(input, allWords) ⇒ <code>string</code>
<p>Capitalizes the first letter of (each) word(s).</p>

**Kind**: global function  
**Returns**: <code>string</code> - <p>String with first letter capitalized.</p>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| input | <code>string</code> |  | <p>The string to be capitalized.</p> |
| allWords | <code>boolean</code> | <code>false</code> | <p>(Optional) Whether to capitalize all words or just the first.</p> |

<a name="cleanAccents"></a>

## cleanAccents(value) ⇒ <code>string</code>
<p>Replace accents for its equivalent non-accents characters.</p>

**Kind**: global function  
**Returns**: <code>string</code> - <p>Cleaned string.</p>  
**Since**: 0.6.0  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>Text to be cleaned.</p> |

**Example**  
```js
cleanAccents('açaí')
// 'acai'
```
<a name="countdownToDate"></a>

## countdownToDate(date) ⇒ <code>Object</code>
<p>Countdown to given date.</p>

**Kind**: global function  
**Returns**: <code>Object</code> - <p>Countdown to date object.</p>  
**Since**: 0.7.0  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | <p>Date to countdown to.</p> |

<a name="formatCep"></a>

## formatCep(cep) ⇒ <code>string</code>
<p>Format string to CEP.</p>

**Kind**: global function  
**Returns**: <code>string</code> - <p>Formatted string.</p>  
**Since**: 0.2.0  

| Param | Type | Description |
| --- | --- | --- |
| cep | <code>string</code> | <p>String to be formatted.</p> |

**Example**  
```js
formatCep('11740000')
// '11740-000'
```
<a name="formatCnpj"></a>

## formatCnpj(cnpj) ⇒ <code>string</code>
<p>Formats a string into CNPJ.</p>

**Kind**: global function  
**Returns**: <code>string</code> - <p>Formatted CNPJ.</p>  
**Since**: 0.6.0  

| Param | Type | Description |
| --- | --- | --- |
| cnpj | <code>string</code> | <p>String to be formatted.</p> |

**Example**  
```js
formatCnpj('90742025000153')
// '90.742.025/0001-53'
```
<a name="formatMoney"></a>

## formatMoney(amount, base) ⇒ <code>string</code>
<p>Format number to money.</p>

**Kind**: global function  
**Returns**: <code>string</code> - <p>Formatted string.</p>  
**Since**: 0.0.2  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| amount | <code>number</code> |  | <p>Number to be formatted.</p> |
| base | <code>number</code> | <code>100</code> | <p>(Optional) Base for unit value. Representation of R$ 1,00 in number. (default: 100)</p> |

**Example**  
```js
formatNumber(9890)
// R$ 98,90

formatNumber(9890, 1)
// R$ 9890,00
```
<a name="getCep"></a>

## getCep(cep) ⇒ <code>Promise.&lt;Object&gt;</code>
<p>Gets CEP informations from ViaCEP API.</p>

**Kind**: global function  
**Returns**: <code>Promise.&lt;Object&gt;</code> - <p>Promise for CEP informations.</p>  
**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| cep | <code>string</code> | <p>CEP.</p> |

<a name="getCnpj"></a>

## getCnpj(cnpj) ⇒ <code>Promise.&lt;Object&gt;</code>
<p>Gets CNPJ informations from Receita WS API.</p>

**Kind**: global function  
**Returns**: <code>Promise.&lt;Object&gt;</code> - <p>Promise for CNPJ informations.</p>  
**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| cnpj | <code>string</code> | <p>CNPJ.</p> |

<a name="getUrlParam"></a>

## getUrlParam(url, param) ⇒ <code>string</code>
<p>Gets a parameter from the url.</p>

**Kind**: global function  
**Returns**: <code>string</code> - <p>Parameter value.</p>  
**Since**: 0.6.0  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | <p>Url to be parsed.</p> |
| param | <code>string</code> | <p>Parameter to be searched for.</p> |

**Example**  
```js
getUrlParam('http://localhost:8080/?param=value', 'param');
// returns 'value'
```
<a name="insert"></a>

## insert(index, newItem, list) ⇒ <code>Array.&lt;any&gt;</code>
<p>Inserts an element at the given index. If the index is too large, element is inserted at the end of the list.</p>

**Kind**: global function  
**Returns**: <code>Array.&lt;any&gt;</code> - <p>List of items with new item inserted.</p>  
**Since**: 0.6.0  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | <p>Index to insert element at.</p> |
| newItem | <code>any</code> | <p>Element to insert.</p> |
| list | <code>Array.&lt;any&gt;</code> | <p>List of items.</p> |

**Example**  
```js
insert(1, 'Batman', [1, 2, 3]);
// [1, 'Batman', 2, 3]

insert(10, ['Batman'], [1, 2, 3]);
// [1, 2, 3, ['Batman']]
```
<a name="isAfterDate"></a>

## isAfterDate(date, month, year) ⇒ <code>boolean</code>
<p>Checks wheather the current date is after the given date or not.</p>

**Kind**: global function  
**Returns**: <code>boolean</code> - <p>True if the current date is after the given date</p>  
**Since**: 0.6.0  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>number</code> | <p>Date of the month (1-31).</p> |
| month | <code>number</code> | <p>Month of the year (0-11).</p> |
| year | <code>number</code> | <p>Year (4 digits).</p> |

**Example**  
```js
isAfterDate(31, 11, 2019);
// true
```
<a name="isAndroid"></a>

## isAndroid(window) ⇒ <code>boolean</code>
<p>Checks if the user is using an Android device.</p>

**Kind**: global function  
**Returns**: <code>boolean</code> - <p>If the device is an Android.</p>  

| Param | Type | Description |
| --- | --- | --- |
| window | <code>Window</code> | <p>Window object.</p> |

<a name="isBeforeDate"></a>

## isBeforeDate(date, month, year) ⇒ <code>boolean</code>
<p>Checks wheather the current date is before the given date or not.</p>

**Kind**: global function  
**Returns**: <code>boolean</code> - <p>True if the current date is before the given date</p>  
**Since**: 0.6.0  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>number</code> | <p>Date of the month (1-31).</p> |
| month | <code>number</code> | <p>Month of the year (0-11).</p> |
| year | <code>number</code> | <p>Year (4 digits).</p> |

**Example**  
```js
isBeforeDate(31, 11, 3999);
// true
```
<a name="isCnpj"></a>

## isCnpj(value) ⇒ <code>boolean</code>
<p>Checks if the given value is a valid CNPJ or not.</p>

**Kind**: global function  
**Returns**: <code>boolean</code> - <p>Whether the value is a valid CNPJ or not.</p>  
**Since**: 0.4.0  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>Value to be checked.</p> |

**Example**  
```js
isCnpj('95.890.661/0001-46');
// true

isCnpj('95890661000146');
// true

isCnpj('11.111.111/1111-11')
// false
```
<a name="isCpf"></a>

## isCpf(value) ⇒ <code>boolean</code>
<p>Checks if the given value is a valid CPF or not.</p>

**Kind**: global function  
**Returns**: <code>boolean</code> - <p>Whether the value is a valid CPF or not.</p>  
**Since**: 0.4.0  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>Value to be checked.</p> |

**Example**  
```js
isCpf('223.101.020-83');
// true

isCpf('22310102083');
// true

isCpf('111.111.111-11')
// false
```
<a name="isEmail"></a>

## isEmail(value) ⇒ <code>boolean</code>
<p>Checks if the given value is a valid email or not.</p>

**Kind**: global function  
**Returns**: <code>boolean</code> - <p>Whether the value is a valid email or not.</p>  
**Since**: 0.6.0  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>Value to be checked.</p> |

**Example**  
```js
isEmail('test@email.com')
// true

isEmail('testemail.com')
// false
```
<a name="isIE9"></a>

## isIE9(window) ⇒ <code>boolean</code>
<p>Checks if the user is using Internet Explorer 9.</p>

**Kind**: global function  
**Returns**: <code>boolean</code> - <p>If the browser is Internet Explorer 9.</p>  

| Param | Type | Description |
| --- | --- | --- |
| window | <code>Window</code> | <p>Window object.</p> |

<a name="isIE"></a>

## isIE(window) ⇒ <code>boolean</code>
<p>Checks if the user is using Internet Explorer.</p>

**Kind**: global function  
**Returns**: <code>boolean</code> - <p>If the browser is Internet Explorer.</p>  

| Param | Type | Description |
| --- | --- | --- |
| window | <code>Window</code> | <p>Window object.</p> |

<a name="isIOS"></a>

## isIOS(window) ⇒ <code>boolean</code>
<p>Checks if the user is using an iOS device.</p>

**Kind**: global function  
**Returns**: <code>boolean</code> - <p>If the device is an iOS.</p>  

| Param | Type | Description |
| --- | --- | --- |
| window | <code>Window</code> | <p>Window object.</p> |

<a name="isMobile"></a>

## isMobile(window, mobileWidth) ⇒ <code>boolean</code>
<p>Checks if the user is using a mobile screen.</p>

**Kind**: global function  
**Returns**: <code>boolean</code> - <p>If it is a mobile screen.</p>  
**Since**: 0.7.0  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| window | <code>Window</code> |  | <p>Window object.</p> |
| mobileWidth | <code>number</code> | <code>768</code> | <p>(Optional) Mobile screen width. Default is 768.</p> |

<a name="removeSpecialCharacters"></a>

## removeSpecialCharacters(value, keepEmptySpace) ⇒ <code>string</code>
<p>Removes special characters from a string.</p>

**Kind**: global function  
**Returns**: <code>string</code> - <p>Cleaned string.</p>  
**Since**: 0.6.0  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | <p>Text to be cleaned.</p> |
| keepEmptySpace | <code>boolean</code> | <p>(Optional) Wheather to keep empty space after removing special characters.</p> |

**Example**  
```js
removeSpecialCharacters('@açaí')
// 'aa'

removeSpecialCharacters('@açaí', true)
// ' a a'
```
<a name="textEllipsis"></a>

## textEllipsis(input, limit, trail) ⇒ <code>string</code>
<p>Insert ellipsis (...) to input text.</p>

**Kind**: global function  
**Returns**: <code>string</code> - <p>Ellipsed input.</p>  
**Since**: 0.1.0  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| input | <code>string</code> |  | <p>Text to be ellipsed.</p> |
| limit | <code>number</code> |  | <p>Limit of characters before ellipsed.</p> |
| trail | <code>string</code> | <code>&quot;...&quot;</code> | <p>(Optional) Custom trail to be inserted.</p> |

**Example**  
```js
textEllipsis('Lorem ipsum', 4)
// 'Lore...'

textEllipsis('Lorem ipsum', 4, '-')
// 'Lore-'
```
<a name="unformatMoney"></a>

## unformatMoney(money, base) ⇒ <code>number</code>
<p>Unformat money to number.</p>

**Kind**: global function  
**Returns**: <code>number</code> - <p>Money value.</p>  
**Since**: 0.0.2  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| money | <code>string</code> |  | <p>String to be formatted.</p> |
| base | <code>number</code> | <code>100</code> | <p>(Optional) Base for unit value. Representation of R$ 1,00 in number. (default: 100)</p> |

**Example**  
```js
unformatMoney('R$ 98,90')
// 9890

unformatMoney('R$ 98,90', 1)
// 98.90
```
