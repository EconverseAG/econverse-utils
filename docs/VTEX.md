# VTEX utilities

## getProductById
since `0.3.0`

Gets a product from catalog by its ID.

### Returns
*Object* - Product object.

### Params

 - `store` [*String*] - Store's account name.
 - `productId` [*Number* or *String*] - Product ID to search for.


## getProductVariations
since `0.7.0`

Gets product variations (SKUs).

### Returns
*Object* - Product informations and its variations.

### Params

 - `store` [*String*] - Store's account name.
 - `productId` [*Number* or *String*] - Product ID to search for.


## getProductSuggestions
since `0.7.0`

Gets a list of a product suggestions.

### Returns
*Object[]* - List of product suggestions.

### Params

 - `store` [*String*] - Store's account name.
 - `productId` [*Number* or *String*] - Product ID to search for.


## getCollectionShelf
since `0.7.0`

Gets shelf HTML for a given collection.

### Returns
*String* - Search result in HTML.

### Params

- `store` [*String*] - Store's account name.
- `params` [*Object*] - Params object.
  - collectionId (`fq=H:${collectionId}`) 
  - pageSize (`PS=${pageSize}`)
  - pageNumber (`PageNumber=${pageNumber}`) 
  - shelfTemplateId (`sl=${shelfTemplateId}`) 
  - order (`O=${order}`) 


## getProfile
since `0.7.0`

Gets current user's profile.

### Returns
*Promise<Object>* - Promise for user profile.

### Params

- `store` [*String*] - Store's account name.

## MasterData.get
since `0.3.0`

Gets data from Master Data.

### Returns
*Promise<Object>* - Promise for requested data.

### Params
- `params` [*Object*] - Params object.
  - store [*String*] - Store's account name.
  - acronym [*String*] - Data entity's acronym. (e.g. 'NL')
  - fields [*String[]*] - List of fields to retrieve.
  - where [*String*] - Condition to match against. (e.g. 'email=test@email.com')
  - useSafeData [*Boolean*] - Wheather to use 'io/safedata' path or not.


## MasterData.post
since `0.3.0`

Posts data to Master Data.

### Returns
*Promise<Object>* - Promise for posted data.

### Params
- `params` [*Object*] - Params object.
  - store [*String*] - Store's account name.
  - acronym [*String*] - Data entity's acronym. (e.g. 'NL')
  - data [*Object*] - Data to post.