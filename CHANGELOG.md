# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- [utils] Added `getCep` method.

### Changed

- Updated VTEX modules inline documentation.

## [0.8.1] - 05-04-2022

### Changed

- Fixed broken VTEX build.


## [0.8.0] - 05-04-2022

### Added

- Added types declaration.

### Changed

- Changed distributions files for easily importing folders.


## [0.7.3] - 04-04-2022

### Changed

- Removed unnecessary files from npm package.


## [0.7.2] - 04-04-2022

### Changed

- Changed **dist** folder for **lib**.


## [0.7.1] - 04-04-2022

### Changed

- [vtex] Fixed `MasterData.get` request typo.
- [vtex] Changed `MasterData.get` request method to use version param to avoid cache.

## [0.7.0] - 04-04-2022

### Added

- [utils] Added `countdownToDate` method.
- [utils] Added `bytesToSize` method.
- [utils] Added `isIE9` method.
- [utils] Added `isIE` method.
- [utils] Added `isIOS` method.
- [utils] Added `isAndroid` method.
- [utils] Added `isMobile` method.
- [vtex] Added `getProductSuggestions` method.
- [vtex] Added `getProductVariations` method.
- [vtex] Added `getCollectionShelf` method.
- [vtex] Added `getProfile` method.

## [0.6.0] - 02-04-2022

### Added

- [utils] Added `getUrlParam` method.
- [utils] Added `isAfterDate` method.
- [utils] Added `isBeforeDate` method.
- [utils] Added `isEmail` method.
- [utils] Added `isCep` method.
- [utils] Added `formatCnpj` method.
- [utils] Added `removeSpecialCharacters` method.
- [utils] Added `cleanAccents` method.
- [utils] Added `insert` method.

### Changed

- [utils] Fixed `capitalizeFirstLetter` not being exported.
- Removed rollup from Gulp task.

## [0.5.0] - 01-04-2022

### Changed

- Changed the way `dist` is built (using Gulp now).

## [0.4.1] - 31-03-2022

### Changed

- Changed the way CHANGELOG informations are presented.
- Removed *Github workflow* shield from README.

## [0.4.0] - 31-03-2022

### Added

- [utils] Added `isCpf` method.
- [utils] Added `isCnpj` method.

## [0.3.0] - 31-03-2022

### Added

- Added CHANGELOG file.
- [utils] Added `capitalizeFirstLetter` method.
- [vtex] Added `MasterData` module.
- [vtex] Added `getProductById` method.

## [0.3.0] - 31-03-2022

### Added

- Added CHANGELOG file.
- [utils] Added `capitalizeFirstLetter` method.
- [vtex] Added `MasterData` module.
- [vtex] Added `getProductById` method.

## [0.2.0] - 29-03-2022

### Added

- [utils] Added `formatCep` method.

## [0.1.0] - 29-03-2022

### Added

- [utils] Added `textEllipsis` method.

## [0.0.2] - 29-03-2022

### Added

- [utils] Added `formatMoney` method.
- [utils] Added `unformatMoney` method.