# sc-color

A JavaScript color **parsing** and **manipulation** library designed for convenience and flexibility (rather than runtime performance).  

## Usage

See the [User Guide](doc/user_guide.md) for examples and full documentation.

```js
var color = require("sc-color");

var c0 = color("#0c7").hue("+30").hex6(); // returns "#00bbcc"
var c1 = color("red")
    .saturation(20)
    .tone(.35)
    .alpha(.5)
    .html();  // returns "rgba(211,177,177,0.5)"

```

### Parsing

The library is intended to support many color formats.  See the full documentation for all formats.

```js
color('orange');                  
color('#FC3');                    
color('rgb(128,64,200)');         
color('hsl', 200, 90, 90);        
color('hsv', [200, 90, 90]);    
```

### Output Formats

The parsing formats are also available as output formats:

```js
var orange = color('orange');
orange.html();                          
orange.hex6();                          
orange.hex3();                          
orange.html('keyword');                 
orange.complement().html('keyword');    
```

### Color Manipulation

The library supports many operations for manipulating a given color. Change the color saturation, reduce the amount of green, blend with another color, find the color's complement, find a different tone of the same base color, etc.

```js
var c = color('#F00');
c = c.blend('yellow', .25);                
c.hue('-30');                              
c.hue('+=30');                             
c = c.saturation(50).shade(.5).tint(.3);   
c.complement();                            
c.complement().hueSet();                   
c.blend('lawngreen','55%').hueRange(60,9); 
```

## Development

* `npm test` - run the unit tests

Pull requests and issues are welcome. If you want proactively contribute, see the [TODO](doc/todo.md) file for ways to contribute.


## License

The source code is under the [MIT License](http://opensource.org/licenses/MIT).

### References / Acknowledgments

* Michael Weichselgartner for the [luminance implementation](http://dev.w3.org/csswg/css-color/#luminance) recommendation 
* Nir Dobovizki for the [contrastText() implementation](http://www.nbdtech.com/Blog/archive/2008/04/27/Calculating-the-Perceived-Brightness-of-a-Color.aspx)  
* Asbjørn Andersen for adding bower compatibility. (And for nudging me towards making the library easier for others to contribute to!)
* Matt Haynes for the [original HSV/RGB code](http://matthaynes.net/blog/2008/08/07/javascript-colour-functions/).
* Michael Jackson for the [HSL conversion code](http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript).


