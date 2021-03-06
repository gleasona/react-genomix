# Change Log

## [v0.3.0](https://github.com/chopdgd/react-genomix/tree/v0.3.0) (2018-01-10)
- First release

## [v0.3.1](https://github.com/chopdgd/react-genomix/tree/v0.3.1) (2018-01-13)
[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.3.0...v0.3.1)

- Fixed issues with css
- Added minified css to be imported in other projects in `dist/`

## [v0.3.2](https://github.com/chopdgd/react-genomix/tree/v0.3.2) (2018-01-13)
[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.3.1...v0.3.2)

- Removed font completely from css

## [v0.3.3](https://github.com/chopdgd/react-genomix/tree/v0.3.3) (2018-01-13)
[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.3.2...v0.3.3)

- Added missing updated minified css files

## [v0.3.4](https://github.com/chopdgd/react-genomix/tree/v0.3.4) (2018-01-18)
[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.3.3...v0.3.4)

- Upgraded dependencies
- Fixed issues with SaveForm and SaveFormModal dealing with handleChange
- Fixed issue with AutoCompleteDropdown

## [v0.3.5](https://github.com/chopdgd/react-genomix/tree/v0.3.5) (2018-01-24)
[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.3.4...v0.3.5)

- Added `idKey` prop LinkFixedCell to help build URL [#138](https://github.com/chopdgd/react-genomix/issues/138)
- Fixed issues with FixedDataTable state [#142](https://github.com/chopdgd/react-genomix/issues/142)
- Fixed issues with AutoCompleteDropdown state [#144](https://github.com/chopdgd/react-genomix/issues/144)
- Dropped support for package-lock.json

## [v0.4.0](https://github.com/chopdgd/react-genomix/tree/v0.4.0) (2018-02-09)
[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.3.5...v0.4.0)

- Updated Semantic React UI to 0.78.2
- Updated many dependencies to the latest versions (Fixed-data-table, etc)
- Converted all simple components to stateless pure components
- Removed target as required prop in TurnAroundTimeProgress [#146](https://github.com/chopdgd/react-genomix/issues/146)
- Fixed issues with ExportButton handling state [#158](https://github.com/chopdgd/react-genomix/issues/158)
- Fixed issues with NavMenu handling state [#162](https://github.com/chopdgd/react-genomix/issues/162)

## [v0.4.1](https://github.com/chopdgd/react-genomix/tree/v0.4.1) (2018-02-09)
[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.4.0...v0.4.1)

- Build may have contained different versions of dependencies. Created a new build

## [v0.4.3](https://github.com/chopdgd/react-genomix/tree/v0.4.3) (2018-02-12)
[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.4.1...v0.4.3)

- Fixed issue with ExportButton.  It was not exporting correctly.

## [v0.4.4](https://github.com/chopdgd/react-genomix/tree/v0.4.4) (2018-02-26)
[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.4.3...v0.4.4)

- Add Menu Icon that can be used to pass callback via props [#190](https://github.com/chopdgd/react-genomix/issues/190)
- Race condition with FixedDataTable not having height/maxHeight as a defaultProp [#183](https://github.com/chopdgd/react-genomix/issues/183)
- Updated numerous dependencies

## [v0.4.5](https://github.com/chopdgd/react-genomix/tree/v0.4.5) (2018-02-26)
[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.4.4...v0.4.5)

- Had to downgrade Semantic UI CSS.  It was causing modals to render incorrectly. [#204](https://github.com/chopdgd/react-genomix/issues/204)

## [v0.4.6](https://github.com/chopdgd/react-genomix/tree/v0.4.6) (2018-03-26)
[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.4.5...v0.4.6)

- Updated logout path in Navbar User component [#223](https://github.com/chopdgd/react-genomix/issues/223)

## [v0.4.7](https://github.com/chopdgd/react-genomix/tree/v0.4.7) (2018-04-18)
[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.4.6...v0.4.7)

- Upgraded all stable 3rd party libs

## [v0.5.0](https://github.com/chopdgd/react-genomix/tree/v0.5.0) (2018-04-27)
[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.4.7...v0.5.0)

- Upgraded all stable 3rd party libs
- Export button was causing a new pop up window with AdBlockers [#236](https://github.com/chopdgd/react-genomix/issues/236)
- Updated Progress Bars [#254](https://github.com/chopdgd/react-genomix/issues/254)

- Upgraded all stable 3rd party libs

## [v0.6.0](https://github.com/chopdgd/react-genomix/tree/v0.6.0) (2018-06-11)
[Full Changelog](https://github.com/chopdgd/react-genomix/compare/v0.5.0...v0.6.0)

- Upgraded all stable 3rd party libs

- Updated genomics urlBuilders [#290](https://github.com/chopdgd/react-genomix/pull/290)
- Updated Gene Cells to have uniform link outs [#291](https://github.com/chopdgd/react-genomix/pull/291)
- Resolved [#140](https://github.com/chopdgd/react-genomix/issues/140) and [#184](https://github.com/chopdgd/react-genomix/issues/184) - dealing with state management of Checkbox cells [#292](https://github.com/chopdgd/react-genomix/pull/292)
- Added ability for ExportButton to have custom onClick methods [#272](https://github.com/chopdgd/react-genomix/pull/272) 
