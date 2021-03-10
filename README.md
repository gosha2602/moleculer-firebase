![Moleculer logo](http://moleculer.services/images/banner.png)

[![Build Status](https://travis-ci.org/gosha2602/moleculer-firebase.svg?branch=master)](https://travis-ci.org/gosha2602/moleculer-firebase)
[![Coverage Status](https://coveralls.io/repos/github/gosha2602/moleculer-firebase/badge.svg?branch=master)](https://coveralls.io/github/gosha2602/moleculer-firebase?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/gosha2602/moleculer-firebase/badge.svg)](https://snyk.io/test/github/gosha2602/moleculer-firebase)

# moleculer-firebase [![NPM version](https://img.shields.io/npm/v/moleculer-firebase.svg)](https://www.npmjs.com/package/moleculer-firebase)

moleculer wrapper for firebase

## Features

## Install

```
npm install moleculer-firebase --save
```

## Usage

## Test

```
$ npm test
```

In development with watching

```
$ npm run ci
```

# Settings

<!-- AUTO-CONTENT-START:SETTINGS -->

| Property      | Type | Default      | Description |
| ------------- | ---- | ------------ | ----------- |
| `databaseURL` | any  | **required** |             |
| `account`     | any  | `null`       |             |

<!-- AUTO-CONTENT-END:SETTINGS -->

<!-- AUTO-CONTENT-TEMPLATE:SETTINGS
| Property | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
{{#each this}}
| `{{name}}` | {{type}} | {{defaultValue}} | {{description}} |
{{/each}}
{{^this}}
*No settings.*
{{/this}}

-->

# Actions

<!-- AUTO-CONTENT-START:ACTIONS -->

## `getUser`

get user by uid

### Parameters

| Property | Type     | Default      | Description  |
| -------- | -------- | ------------ | ------------ |
| `uid`    | `String` | **required** | firebase uid |

### Results

**Type:** `UserRecord`

record of firebase user

## `getUserByEmail`

get user by email

### Parameters

| Property | Type     | Default      | Description   |
| -------- | -------- | ------------ | ------------- |
| `email`  | `String` | **required** | user email \* |

### Results

**Type:** `UserRecord`

record of firebase user

## `getUserByPhoneNumber`

get user by phone

### Parameters

| Property | Type     | Default      | Description   |
| -------- | -------- | ------------ | ------------- |
| `phone`  | `String` | **required** | user phone \* |

### Results

**Type:** `UserRecord`

record of firebase user

<!-- AUTO-CONTENT-END:ACTIONS -->

<!-- AUTO-CONTENT-TEMPLATE:ACTIONS
{{#each this}}
## `{{name}}` {{#each badges}}{{this}} {{/each}}
{{#since}}
_<sup>Since: {{this}}</sup>_
{{/since}}

{{description}}

### Parameters
| Property | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
{{#each params}}
| `{{name}}` | {{type}} | {{defaultValue}} | {{description}} |
{{/each}}
{{^params}}
*No input parameters.*
{{/params}}

{{#returns}}
### Results
**Type:** {{type}}

{{description}}
{{/returns}}

{{#hasExamples}}
### Examples
{{#each examples}}
{{this}}
{{/each}}
{{/hasExamples}}

{{/each}}
-->

# Methods

<!-- AUTO-CONTENT-START:METHODS -->

<!-- AUTO-CONTENT-END:METHODS -->

<!-- AUTO-CONTENT-TEMPLATE:METHODS
{{#each this}}
## `{{name}}` {{#each badges}}{{this}} {{/each}}
{{#since}}
_<sup>Since: {{this}}</sup>_
{{/since}}

{{description}}

### Parameters
| Property | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
{{#each params}}
| `{{name}}` | {{type}} | {{defaultValue}} | {{description}} |
{{/each}}
{{^params}}
*No input parameters.*
{{/params}}

{{#returns}}
### Results
**Type:** {{type}}

{{description}}
{{/returns}}

{{#hasExamples}}
### Examples
{{#each examples}}
{{this}}
{{/each}}
{{/hasExamples}}

{{/each}}
-->

## Contribution

Please send pull requests improving the usage and fixing bugs, improving documentation and providing better examples, or providing some testing, because these things are important.

## License

The project is available under the [MIT license](https://tldrlegal.com/license/mit-license).

## Contact

Copyright (c) 2021 Giorgi

[![@MoleculerJS](https://img.shields.io/badge/github-moleculerjs-green.svg)](https://github.com/moleculerjs) [![@MoleculerJS](https://img.shields.io/badge/twitter-MoleculerJS-blue.svg)](https://twitter.com/MoleculerJS)
