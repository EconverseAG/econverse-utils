## Functions

<dl>
<dt><a href="#getCollectionShelf">getCollectionShelf(store, params)</a> ⇒ <code>Promise.&lt;any&gt;</code></dt>
<dd><p>Gets shelf HTML for a given collection.</p></dd>
<dt><a href="#getProductById">getProductById(store, productId)</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Gets a list of a product suggestions.</p></dd>
<dt><a href="#getProductSimilars">getProductSimilars(store, productId)</a> ⇒ <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code></dt>
<dd><p>Gets a list of a product similars.</p></dd>
<dt><a href="#getProductSuggestions">getProductSuggestions(store, productId)</a> ⇒ <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code></dt>
<dd><p>Gets a list of a product suggestions.</p></dd>
<dt><a href="#getProductVariations">getProductVariations(store, productId)</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Gets product variations (SKUs).</p></dd>
<dt><a href="#getProfile">getProfile(store)</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Gets current user's profile.</p></dd>
<dt><a href="#getShelfBySku">getShelfBySku(store, params)</a> ⇒ <code>Promise.&lt;any&gt;</code></dt>
<dd><p>Gets product shelf for given SKUs.</p></dd>
</dl>

<a name="getCollectionShelf"></a>

## getCollectionShelf(store, params) ⇒ <code>Promise.&lt;any&gt;</code>
<p>Gets shelf HTML for a given collection.</p>

**Kind**: global function  
**Returns**: <code>Promise.&lt;any&gt;</code> - <p>Promise for search result in HTML.</p>  
**Since**: 0.7.0  

| Param | Type | Description |
| --- | --- | --- |
| store | <code>string</code> | <p>VTEX store name (account name).</p> |
| params | <code>ISearchParams</code> | <p>Params object.</p> |

<a name="getProductById"></a>

## getProductById(store, productId) ⇒ <code>Promise.&lt;Object&gt;</code>
<p>Gets a list of a product suggestions.</p>

**Kind**: global function  
**Returns**: <code>Promise.&lt;Object&gt;</code> - <p>Promise for list of product suggestions.</p>  
**Since**: 0.3.0  

| Param | Type | Description |
| --- | --- | --- |
| store | <code>string</code> | <p>VTEX store name (account name).</p> |
| productId | <code>string</code> \| <code>number</code> | <p>Product ID.</p> |

<a name="getProductSimilars"></a>

## getProductSimilars(store, productId) ⇒ <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code>
<p>Gets a list of a product similars.</p>

**Kind**: global function  
**Returns**: <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code> - <p>Promise for list of product similars.</p>  
**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| store | <code>string</code> | <p>VTEX store name (account name).</p> |
| productId | <code>string</code> \| <code>number</code> | <p>Product ID.</p> |

<a name="getProductSuggestions"></a>

## getProductSuggestions(store, productId) ⇒ <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code>
<p>Gets a list of a product suggestions.</p>

**Kind**: global function  
**Returns**: <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code> - <p>Promise for list of product suggestions.</p>  
**Since**: 0.7.0  

| Param | Type | Description |
| --- | --- | --- |
| store | <code>string</code> | <p>VTEX store name (account name).</p> |
| productId | <code>string</code> \| <code>number</code> | <p>Product ID.</p> |

<a name="getProductVariations"></a>

## getProductVariations(store, productId) ⇒ <code>Promise.&lt;Object&gt;</code>
<p>Gets product variations (SKUs).</p>

**Kind**: global function  
**Returns**: <code>Promise.&lt;Object&gt;</code> - <p>Promise for product informations and its variations.</p>  
**Since**: 0.7.0  

| Param | Type | Description |
| --- | --- | --- |
| store | <code>string</code> | <p>VTEX store name (account name).</p> |
| productId | <code>string</code> \| <code>number</code> | <p>Product ID.</p> |

<a name="getProfile"></a>

## getProfile(store) ⇒ <code>Promise.&lt;Object&gt;</code>
<p>Gets current user's profile.</p>

**Kind**: global function  
**Returns**: <code>Promise.&lt;Object&gt;</code> - <p>Promise for profile object.</p>  
**Since**: 0.7.0  

| Param | Type | Description |
| --- | --- | --- |
| store | <code>string</code> | <p>Store's account name.</p> |

<a name="getShelfBySku"></a>

## getShelfBySku(store, params) ⇒ <code>Promise.&lt;any&gt;</code>
<p>Gets product shelf for given SKUs.</p>

**Kind**: global function  
**Returns**: <code>Promise.&lt;any&gt;</code> - <p>Promise for shelf HTML string.</p>  
**Category**: VTEX  
**Since**: 1.1.0  

| Param | Type | Description |
| --- | --- | --- |
| store | <code>string</code> | <p>VTEX store name (account name).</p> |
| params | <code>ISearchParams</code> | <p>Params object.</p> |

