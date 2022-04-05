# Table of contents

- [VTEX utilities](#vtex-utilities)
  - [getProductById](#getProductById)
  - [getProductVariations](#getProductVariations)
  - [getProductSuggestions](#getProductSuggestions)
  - [getCollectionShelf](#getCollectionShelf)
  - [getProfile](#getProfile)
  - [MasterData.get](#masterdataget)
  - [MasterData.post](#masterdatapost)

# VTEX utilities

## getProductById
since `0.3.0`

Gets a product from catalog by its ID.

### Returns
*Promise* - Promise for product object.

### Params

 - `store` [*String*] - Store's account name.
 - `productId` [*Number* or *String*] - Product ID to search for.


## getProductVariations
since `0.7.0`

Gets product variations (SKUs).

### Returns
*Promise* - Promise for product informations and its variations.

### Params

 - `store` [*String*] - Store's account name.
 - `productId` [*Number* or *String*] - Product ID to search for.


## getProductSuggestions
since `0.7.0`

Gets a list of a product suggestions.

### Returns
*Promise<Object[]>* - Promise for list of product suggestions.

### Params

 - `store` [*String*] - Store's account name.
 - `productId` [*Number* or *String*] - Product ID to search for.


## getProductSimilars
since `0.7.0`

Gets a list of a product similars.

### Returns
*Promise<Object[]>* - Promise for list of product similars.

### Params

 - `store` [*String*] - Store's account name.
 - `productId` [*Number* or *String*] - Product ID to search for.


## getCollectionShelf
since `0.7.0`

Gets shelf HTML for a given collection.

### Returns
*Promise<String>* - Promise for search result in HTML.

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
*Promise* - Promise for user profile.

### Params

- `store` [*String*] - Store's account name.

## MasterData.get
since `0.3.0`

Gets data from Master Data.

### Returns
*Promise* - Promise for requested data.

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
*Promise* - Promise for posted data.

### Params
- `params` [*Object*] - Params object.
  - store [*String*] - Store's account name.
  - acronym [*String*] - Data entity's acronym. (e.g. 'NL')
  - data [*Object*] - Data to post.