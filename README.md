# surfacecurve-color

A JavaScript color parsing and manipulation library designed for convenience and flexibility (rather than runtime performance).

## Usage

``surfacecurve-color`` is based off of ``pusher.color``.  See [pusher.color's homepage](http://tech.pusherhq.com/libraries/color) for full documentation until the fork is complete.

## Examples

TBD.

## Benchmarks

TBD.

## Unit Tests

	$ npm test

## License

Released under the [MIT License](http://opensource.org/licenses/MIT).

## Development

### Acknowledgments

* Michael Weichselgartner for the [luminance implementation](http://dev.w3.org/csswg/css-color/#luminance) recommendation 
* Nir Dobovizki for the [contrastText() implementation](http://www.nbdtech.com/Blog/archive/2008/04/27/Calculating-the-Perceived-Brightness-of-a-Color.aspx)  
* Asbjørn Andersen for adding bower compatibility. (And for nudging me towards making the library easier for others to contribute to!)
* Matt Haynes for the [original HSV/RGB code](http://matthaynes.net/blog/2008/08/07/javascript-colour-functions/).
* Michael Jackson for the [HSL conversion code](http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript).


### Change Log

##### Todo

* browserify / require() support

##### 0.3.0

* Renamed to ``surfacecurve-color`` 

##### 0.2.5

* Released 2013.10.09
* Download [pusher.color.js](https://bitbucket.org/pusherhq/pusher.color/raw/v0.2.5/lib/pusher.color.js)
* -- Code Changes --        
* Add contrastText() method
* Updated luminance() to account for non-linear sRGB gamut
* Added luminanceFast() for the "old" calculation

#####  0.2.4

* Released 2013.03.29
* Unit tests: 543/543
* Download [pusher.color.js](https://bitbucket.org/pusherhq/pusher.color/raw/v0.2.4/lib/pusher.color.js)
* -- Code Changes --
* Add inc() and dec() methods
* Added new unit tests

##### 0.2.3

* Released 2013.03.26
* Unit tests: 461/461
* Download [pusher.color.js](https://bitbucket.org/pusherhq/pusher.color/raw/v0.2.3/lib/pusher.color.js)
* -- Code Changes --
* Converted project to NPM & bower compatible package
* Added new unit tests

##### 0.2.2

* Released 2013.03.24
* Unit tests: 244/244
* -- Code Changes --
* Fix for HSL parsing code. Improperly setting value to floor.

##### 0.2.1

* Released 2012.10.08
* Production size: 13.0k/4.5k Unit tests: 241/241
* -- Code Changes --
* Fix Firefox-specific defect with regular expression.  Thanks Thomas Hoppe for reporting the error.  Thanks
  to [mrrena's blog](http://mrrena.blogspot.com/2009/02/invalid-range-in-character-class.html) helping 
  elucidate the issue and fix.

##### 0.2.0

* Released 2012.09.08
* Download [production](/pusher/js/pusher.color-0.2.0.min.js) / [development](/pusher/js/pusher.color-0.2.0.js)
* Production size: 12.9k/4.5k Unit tests: 241/241
* -- Code Changes --
* Changed internal format to floating-point
* Added luminance8(), grayvalue8()
* Changed lumninance(), and grayvalue() to return a 0.0-1.0 ranged value
* Added add() method
* Added subtract() method
* Added multiply() method
* Added xor() method
* Added clamp() method


##### 0.1.4

* Released 2012.09.08
* Download [production](/pusher/js/pusher.color-0.1.4.min.js) / [development](/pusher/js/pusher.color-0.1.4.js)
* Production size: 12.7k/4.4k Unit tests: 229/229
* -- Code Changes --
* Minor internal changes for better performance

##### 0.1.3 

* Released 2012.08.09
* Download [production](/pusher/js/pusher.color-0.1.3.min.js) / [development](/pusher/js/pusher.color-0.1.3.js)
* Production size: 12.2k/4.2k Unit tests: 229/229
* -- Code Changes --
* Add support for packed_rgba format
* Add support for packed_argb format


##### 0.1.2

* Released 2012.07.03
* -- Code Changes --        
* Fix defect in float4 parsing
* Add support for HSVA '[op] [value]' syntax, where op is '=,+,+=,-,-=,*,*='
* Add method grayvalue to return strict average of RGB
* Add method luminance to return weighted average of RGB
* Fix defect in blend where alpha values were clamped to 0 or 1
* Add method hueRange
* Add methods rgb8 and rgba8


##### 0.1.1

* Released 2012.06.09
* Production size 10.6k/3.4k
* Add support for ``html(format)`` including format 'keyword'
* Add initial unit tests
* Consolidate parsing code into more structured form
* Add percentage support to more color specifications


##### 0.1.0

* Released 2012.06.07
* Initial release with known limitations
* Development size 10.6k
* Support for all standard CSS3, HSV, and float formats

