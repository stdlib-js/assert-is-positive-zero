<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# isPositiveZero

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Test if a value is a number equal to positive zero.

<section class="installation">

## Installation

```bash
npm install @stdlib/assert-is-positive-zero
```

</section>

<section class="usage">

## Usage

```javascript
var isPositiveZero = require( '@stdlib/assert-is-positive-zero' );
```

#### isPositiveZero( value )

Tests if a `value` is a `number` having a value equal to positive zero.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number-ctor' );

var bool = isPositiveZero( 0.0 );
// returns true

bool = isPositiveZero( new Number( 0.0 ) );
// returns true

bool = isPositiveZero( -3.14 );
// returns false

bool = isPositiveZero( -0.0 );
// returns false

bool = isPositiveZero( null );
// returns false
```

#### isPositiveZero.isPrimitive( value )

Tests if a `value` is a primitive `number` equal to positive zero.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number-ctor' );

var bool = isPositiveZero.isPrimitive( 0.0 );
// returns true

bool = isPositiveZero.isPrimitive( new Number( 0.0 ) );
// returns false
```

#### isPositiveZero.isObject( value )

Tests if a `value` is a `Number` object having a value equal to positive zero.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number-ctor' );

var bool = isPositiveZero.isObject( 0.0 );
// returns false

bool = isPositiveZero.isObject( new Number( 0.0 ) );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-new-wrappers -->

<!-- eslint no-undef: "error" -->

```javascript
var Number = require( '@stdlib/number-ctor' );
var isPositiveZero = require( '@stdlib/assert-is-positive-zero' );

var bool = isPositiveZero( 0.0 );
// returns true

bool = isPositiveZero( new Number( 0.0 ) );
// returns true

bool = isPositiveZero( -3.14 );
// returns false

bool = isPositiveZero( -0.0 );
// returns false

bool = isPositiveZero( 5.0 );
// returns false

bool = isPositiveZero( '0' );
// returns false

bool = isPositiveZero( null );
// returns false
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-positive-zero.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-positive-zero

[test-image]: https://github.com/stdlib-js/assert-is-positive-zero/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/assert-is-positive-zero/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-positive-zero/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-positive-zero?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-positive-zero
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-positive-zero/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-positive-zero/main/LICENSE

</section>

<!-- /.links -->
