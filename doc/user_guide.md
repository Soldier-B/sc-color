# User Guide

The ``surfacecurve-color`` library is a Javascript library for parsing, manipulating, and formatting colors and color variations. This includes parsing all [standard CSS3 color formats](http://www.w3.org/TR/css3-color/) such as ``rgba(54, 128, 255, .8)`` and ``"Blue"``, parsing common non-web color formats such as HSV, converting betweeen formats, generating complementary colors, generating alternate tones and shades, and other generally useful functionality in any application that is using color in a dynamic fashion.

*Note*: The library currently has not yet been given a [v1.x.x semantic version](http://semver.org/). The API should no tbe considered fully stable. Suggestions, issues, pull requestions, and general questions on the code are welcome.


## Table of Contents

<!-- MarkdownTOC -->

- [Installation][installation]
- [CSS3 Formats][css3-formats]
    - [Parsing][parsing]
    - [Named Colors][named-colors]
    - [Hexadecimal Format][hexadecimal-format]
    - [Numeric RGB Format][numeric-rgb-format]
    - [Numeric HSL Format][numeric-hsl-format]
- [Extended Formats][extended-formats]
    - [HSV Format][hsv-format]
    - [RGBA8 Formats][rgba8-formats]
    - [FLOAT3, FLOAT4 Formats][float3-float4-formats]
    - [Packed Integer Formats][packed-integer-formats]
- [Manipulation][manipulation]
    - [Components][components]
    - [Contrast Colors][contrast-colors]

<!-- /MarkdownTOC -->


## Installation

##### Browser

```html
<script type="text/javascript" src="surfacecurve-color.js"></script>
<script type="text/javascript">
<!--
    // In the browser, the library is globally namespaced under the surfacecurve
    // symbol
    var color = surfacecurve.color;
    console.log(color("#F73").html());
-->
</script>
```
##### Server

```js
var color = require("sc-color");
console.log(color("#F73").html());
```

## CSS3 Formats

### Parsing

The Color object is created by passing in the color to parse. In some cases, the function can determine the color format implicitly but in others requires an explicit format argument to tell color how to parse the color data.

#### Implicit Formats

In the case of implicit formats, a single argument containing the string representing the color suffices. All standard [CSS3 color formats](http://www.w3.org/TR/css3-color/) are parsable as implicit color formats.

```js
var white;
white = color('white');             
white = color('#FFF');              
white = color('#FFFFFF');           
white = color('rgba(255,255,255,1)');
```

#### Explicit Formats

Explicit format parsing interprets the first argument as a the format to use and the following arguments represent the color description.

```js
var red;
red = color('rgb', 255, 0, 0);
red = color('rgb', [ 255, 0, 0 ]);
red = color('hsv', 0, 100, 100);
```

### Named Colors

All [CSS3 basic color keywords](http://www.w3.org/TR/css3-color/#html4) and all [CSS3 extended color keywords](http://www.w3.org/TR/css3-color/#svg-color) are supported.

#### Basic Colors

See the [CSS3 basic color keywords](http://www.w3.org/TR/css3-color/#html4) for an official reference of all supported colors.

```js
color('red').html();                //=> rgba(255,0,0,1) 
color('green').html();              //=> rgba(0,128,0,1) 
color('blue').html();               //=> rgba(0,0,255,1) 
```

#### Extended Colors

See the [CSS3 extended color keywords](http://www.w3.org/TR/css3-color/#svg-color) for an official reference of all supported colors.

color('crimson').html();            //=> rgba(220,20,60,1) 
color('lightskyblue').html();       //=> rgba(135,206,250,1) 
color('darkslategray').html();      //=> rgba(47,79,79,1) 

#### Case Insensitive Parsing

As the library is designed for convenience, colors are parsed without case-sensitivity by default:

```js
color('blue').html();               //=> rgba(0,0,255,1) 
color('BLUE').html();               //=> rgba(0,0,255,1) 
color('bLUe').html();               //=> rgba(0,0,255,1) 
```

### Hexadecimal Format

#### Hex 3 Format

```js
color('#FFF').html();               //=> rgba(255,255,255,1) 
color('#0CF').html();               //=> rgba(0,204,255,1) 
```

#### Hex 6 Format

```js
color('#000000').html();            //=> rgba(0,0,0,1) 
color('#314257').html();            //=> rgba(49,66,87,1) 
color('#aFfa10').html();            //=> rgba(175,250,16,1)
```


### Numeric RGB Format

#### RGB

```js
color('rgb(128,128,128)');
color('rgb(64,128,192)');
color('rgb(12,190,255)');
```

#### RGBA

```js
color('rgba(128,255,89,1)');
color('rgba(128,255,89,.5)');
color('rgba(128,255,89,.25)');
```


### Numeric HSL Format

#### HSL

```js
color('hsl(0, 100%, 100%)');
color('hsl(0, 100%, 75%)');
color('hsl(0, 100%, 50%)');
color('hsl(0, 50%, 50%)');

color('hsl(30, 100, 50)');
color('hsl(30, 50, 50)');
color('hsl(30, 25,  50)');
```

#### HSLA

```js
color('hsla(170, 100%, 50%, 1.0)');
color('hsla(170, 100%, 50%, 0.8)');
color('hsla(170, 100%, 50%, 0.6)');
color('hsla(170, 100%, 50%, 0.4)');
color('hsla(170, 100%, 50%, 0.2)');
color('hsla(170, 100%, 50%, 0.01)');
```

## Extended Formats

The library supports numerous color formats that are **not part of the CSS3 specification**.

### HSV Format

#### HSV

The percent sign is optional on the saturation and value specification.

```js
color('hsv(64,100,100)');           
color('hsv', 64, 100, 100);         
color('hsv(64,100%,100%)');         
color('hsv', 64,'100%','100%');     
```

#### HSVA

```js
color('hsva(64,100,100,1)');        
color('hsva(64,100%,100%,1)');      
color('hsva', 64, 100, 100, 1);     
color('hsva', 64, 100, 100, .5);    
color('hsva', 64, 100, 100, .25);  
```

### RGBA8 Formats

The `rgba8` format is identical to the `rgba` format with the exception that the alpha value (i.e. the fourth component) is specified in a 0-255 range as opposed to as a 0.0-1.0 floating point value. The `rgb8` format is also provided and is completely identical to the `rgb` format; it is provided solely for symmetry.

#### RGB8

```js
// The rgb8 and rgb formats are equivalent            
color('rgb8(224,200,100)');         
color('rgb(224,200,100)');          
```

#### RGBA8

The `rgba8` format interprets the alpha value as in the range of 0-255. For example, this is the format of the pixel data returned from a call to `getImageData()` on an HTML CANVAS element.

```js
color('rgba8', 224,200,100,255);    
color('rgba8', [224,200,100,255]);  
color('rgba8(224,200,100,255)');    
color('rgba8(224,200,100,128)');    
color('rgba8(224,200,100,64)');     
color('rgba8(224,200,100,8)');      
```

### FLOAT3, FLOAT4 Formats

The `float3` and `float4` formats are identical to the 'rgb' and 'rgba' formats with the exception that the color values (i.e. the first through third components) are specified in a 0.0-1.0 floating point range as opposed to a 0-255 value.

#### Float3

```js
color('float3', 1.0,0,0);           
color('float3', [1.0,0,0]);         
color('float3', .8,.6,.1);          
```

#### Float4

```js
color('float4', 1.0,0,0,1.0);       
color('float4', [1.0,0,0,1]);       
color('float4', .8,.6,.1,1);        
color('float4', .8,.6,.1,.5);       
color('float4', .8,.6,.1,.1);       
```

### Packed Integer Formats

Handles 32-bit colors packed into a single Javascript integer. Note that both signed and unsigned integers are handled correctly by color.

#### packed_rgba

```js
// Call formats
color('packed_rgba(4287155455)');   
color('packed_rgba(0xFF88CCFF)');   
color('packed_rgba',4287155455);    
color('packed_rgba',0xFF88CCFF);    

// Alpha channel
color('packed_rgba',0xFF88CCCC);    
color('packed_rgba',0xFF88CC77);    
color('packed_rgba',0xFF88CC33);    

// Signed integers are also valid
color('packed_rgba(0xFF88CCFF)');   
color('packed_rgba(-7811841)');     
color('packed_rgba', -7811841);     
```

#### packed_argb

```js
// Call formats
color('packed_argb(4285091971)');   
color('packed_argb(0xFF695083)');   
color('packed_argb',4285091971);    
color('packed_argb',0xFF695083);    

// Alpha channel
color('packed_argb',0xCC695083);    
color('packed_argb',0x77695083);    
color('packed_argb',0x33695083);    

// Signed integers are also valid
color('packed_argb(0xFF695083)');   
color('packed_argb(-9875325)');     
color('packed_argb', -9875325);     
```

## Manipulation

### Components

#### Red, Green, Blue

``red(), green(), blue()``

Returns the red, green, or blue component of the color as a 0-255 value.

```js
var color = color('#07FF10');
color.red();                               //=> 7
color.green();                             //=> 255
color.blue();                              //=> 16
```

``red(value), green(value), blue(value)``

Sets the red, green, or blue component of the color. Expects a value in the range 0-255.

```js
var color = color('#000000');
color.html();                              //=> rgba(0,0,0,1) 
color.red(255);                            
color.green(255);                          
color.blue(255);                           

// Note these methods return a new object; the original color is unmodified
color.html();                              //=> rgba(0,0,0,1) 
```

``red('op value'), green('op value'), blue('op value')``

Modifies the red, green, or blue components of the color. Valid ops are +, -, *, +=, -=, *=. In the case of the operands with an = the color is modified in place; otherwise, a copy of the color is made and a new modified color is returned.

```js
var color = color('gray');
color.html();                              //=> rgba(128,128,128,1) 

// Add to individual components
color.red('+127').html();                  //=> rgba(255,128,128,1) 
color.green('+127').html();                //=> rgba(128,255,128,1) 
color.blue('+127').html();                 //=> rgba(128,128,255,1) 

// Subtract and scale
color.red('-64').html();                   //=> rgba(64,128,128,1) 
color.red('*.1').html();                   //=> rgba(13,128,128,1) 

// Modify the object itself, rather than creating a copy
color.red('+=72').html();                  //=> rgba(200,128,128,1) 
color.red('*=.125').html();                //=> rgba(25,128,128,1)
```

#### Hue, Saturation, Value

``hsv(), hsva()``

``hue(), saturation(), value()``

```js
var c = color('#07FF10');
c.hsv();                                   //=> 122, 97, 100
c.hsva();                                  //=> 122, 97, 100, 1
c.hue();                                   //=> 122
c.saturation();                            //=> 97
c.value();                                 //=> 100

// Note that HSV conversions are imprecise as all colors are internally
// stored as RGBA
var c = color('hsv', 200, 90, 10);
c.hsv();                                   //=> 200, 90, 10


``hue('op value'), saturation('op value'), value('op value')``

``hue('op', value), saturation('op', value), value('op', value)``

```js
var red = color('red');

red.hue('+0');                             
red.hue('+30');                            
red.hue('+60');                            
red.hue('+90');                            
red.hue('+120');                           
red.hue('+150');                           
red.hue('+180');                           
red.hue('-120');                           
```

#### Alpha

``alpha(), alpha8()``

The alpha() method returns the alpha value of the color in the standard CSS3 0.0-1.0 range. The alpha8() method returns the alpha value in the 0-255 range (note: the "8" comes from the 'rgba8' format, where the 8 is the number of bits used per channel to store the color).

```js
color('rgba', 255, 0, 0, .5).alpha(); //=> 0.5
color('rgba8', 255, 0, 0, 128).alpha(); //=> 0.5019

color('rgba', 255, 0, 0, .5).alpha8(); //=> 127
color('rgba8', 255, 0, 0, 128).alpha8(); //=> 128
var c = color('blueviolet');
c.alpha(1);                                
c.alpha(.6);                               
c.alpha('30%');                            

c.alpha8(255);                             
c.alpha8(153);                             
c.alpha8('30%');                           
```

#### Luminance

``luminance(), luminance8(), luminanceFast(), luminanceFast8()``

The luminance() method returns the luminance of the RGB color based on a non-linear scaling as based on the W3C CSS color definition.

The luminanceFast() method returns the luminance of the RGB color based on simple biased weighting of 0.2126, 0.7152, 0.0722.

```js
color('rgb', 255, 0, 0).luminance(); //=> 0.2126
color('rgb', 0, 255, 0).luminance(); //=> 0.7151

color('white').luminance();         //=> 1
color('gray').luminance();          //=> 0.2158
color('black').luminance();         //=> 0
color('yellow').luminance();        //=> 0.9278

color('white').luminance8();        //=> 255
color('gray').luminance8();         //=> 55
color('black').luminance8();        //=> 0
color('yellow').luminance8();       //=> 237

color('white').luminanceFast();     //=> 1
color('gray').luminanceFast();      //=> 0.5019
color('black').luminanceFast();     //=> 0
color('yellow').luminanceFast();    //=> 0.9278

color('white').luminanceFast8();    //=> 255
color('gray').luminanceFast8();     //=> 128
color('black').luminanceFast8();    //=> 0
color('yellow').luminanceFast8();   //=> 237
```

#### Grayvalue

``grayvalue(), grayvalue8()``

The grayvalue() method returns the unweighted average of the RGB color.

```js
color('rgb', 255, 0, 0).grayvalue(); //=> 0.3333
color('rgb', 0, 255, 0).grayvalue(); //=> 0.3333

color('white').grayvalue();         //=> 1
color('gray').grayvalue();          //=> 0.5019
color('black').grayvalue();         //=> 0
color('yellow').grayvalue();        //=> 0.6666

color('white').grayvalue8();        //=> 255
color('gray').grayvalue8();         //=> 128
color('black').grayvalue8();        //=> 0
color('yellow').grayvalue8();       //=> 170
```

## Operations

``tint(amount)``

A tint is a color with white mixed into it.

```js
var c = color('orange'); 
           
c.tint(.1);                                
c.tint(.2);                                
c.tint(.3);                                
c.tint(.4);                                
c.tint(.5);                                
c.tint(.6);                                
c.tint(.7);                                
c.tint(.8);                                
c.tint(.9);                                
```

Amounts may be specified as a floating point value, a parseable floating-point string, or as percentages.

```js
var c = color('orange');

c.tint(.4).html();                         //=> rgba(255,201,102,1) 
c.tint('.4').html();                       //=> rgba(255,201,102,1) 
c.tint('40%').html();                      //=> rgba(255,201,102,1) 
```


``shade(amount)``

A shade is a color with black mixed into it.

```js
var c = color('orange');
            
c.shade(.1);                               
c.shade(.2);                               
c.shade(.3);                               
c.shade(.4);                               
c.shade(.5);                               
c.shade(.6);                               
c.shade(.7);                               
c.shade(.8);                               
c.shade(.9);                               
```

``tone(amount)``

Tone is a color with gray mixed into it.

```js
var c = color('orange');

c.tone(.1);                                
c.tone(.2);                                
c.tone(.3);                                
c.tone(.4);                                
c.tone(.5);                                
c.tone(.6);                                
c.tone(.7);                                
c.tone(.8);                                
c.tone(.9);                                
```

``blend(color, amount)``

The blend operation linearly mixes two colors by their RGBA component values. An input of 0 will result in an unmodified copy of the first color whereas an input of 1 will result in a unmodified copy of the second color.

```js

color('orange');                    
color('orange').blend('red', .1);   
color('orange').blend('red', .5);   
color('orange').blend('red', .8);   


color('blue');                      
color('blue').blend('orange', .1);  
color('blue').blend('orange', .5);  
color('blue').blend('orange', .8);  
```

In keeping with much of the API, the blend can be specified as a percentage as well. Also note the first color argument will be parsed as a color object if it is not already one.

```js
color('orange').blend('darkkhaki', '10%'); 
color('orange').blend('darkkhaki', '50%'); 
color('orange').blend('darkkhaki', '90%'); 
```

``add(), subtract(), multiply()``

Component-wise operations on the colors. The operations use a floating point color component representation that, for example, would mean a red multipied by a grey becomes darker, not brighter.

```js
color('gray').add('orange');        
color('orange').subtract('maroon'); 
color('#CC7').multiply('white');    
color('#CC7').multiply('gray');     
color('#CC7').multiply('yellow');   
```

The aliases sub and mul are also available.

```js
color('orange').sub('maroon');      
color('#CC7').mul('white');         
color('#CC7').mul('gray');          
color('#CC7').mul('yellow');        
```

``inc(), dec()``

These methods work just like add() and subtract() except that they modify the calling object.

```js
var base = color('white');
base.html();                               //=> rgba(255,255,255,1) 
base.dec("red").html();                    //=> rgba(0,255,255,1) 
base.dec("#777").html();                   //=> rgba(0,136,136,1) 
base.inc("orange").html();                 //=> rgba(136,255,136,1) 
```

``scale(factor)``

Multiplies each color component by a uniform scale factor.

The scale factor does not apply to the alpha channel.

```js
color('orange').scale(1);           
color('orange').scale(.5);          
color('orange').scale(.1);          
color('orange').scale(1.4);         
```

``xor(color)``

Treats the two colors as bitfields and applies an XOR operation to the red, green, and blue components.

Note: the XOR is not applied to the alpha component and the source color's alpha is copied directly to the resulting color.

```js
color('orange').xor('white');       
color('orange').xor('black');       
color('orange').xor('maroon');      
color('orange').xor('olive');       
```

``clamp()``

Clamps the internal representation of the color to a displayable range. This method is not often necessary to call explicitly, but may be desired as an intermediate operation when values are known to exceed displayable range and the excess range is not desired for subsequent operations.

```js
var hdr = color('float3', 2.0, 1.0, 0.5)
hdr.float3();                              //=> 2, 1, 0.5
hdr.clamp().float3();                      //=> 1, 1, 0.5
```

``complement()``

Returns the color opposite in hue on the color wheel. This is effectively equivalent to color.hue('+180').

```js
color('maroon').complement();       
color('lawngreen').complement();    
color('lightseagreen').complement(); 
```

The compliment of a color's complement is always the original color.

```js
//
// The complement of the complement is always the original color
//
color('red').complement().complement(); 
color('green').complement().complement(); 
color('blue').complement().complement(); 
```

``triad()``

Returns a set of three colors including the color itself and the two colors to 120 degrees to the left and right of it on the color wheel. Effectively equivalent to [ color, color.hue('-120'), color.hue('+120') ].

```js
color('red').triad();               //=> , , 

color('yellow').triad();            //=> , , 
```

``hueSet()``

Returns a set of nine colors of varying saturation and value all with the source color's hue. Useful for generating a set of distinguishable, but similar colors.

```js
color('red').hueSet();              //=> , , , , , , , , 


**Example: hueSet #08C**

*EXAMPLE MISSING*


``hueRange(range, count)``

Returns a set of count colors evenly spaced along a range in hue. The range determines how many degrees to vary from the hue in both directions, resulting in a total span of 2 * range.

```js
color('gold').hueRange(10, 10);     //=> , , , , , , , , , 
color('gold').hueRange(20, 10);     //=> , , , , , , , , , 
color('gold').hueRange(60, 10);     //=> , , , , , , , , , 


color('teal').hueRange(120, 4);     //=> , , , 
color('teal').hueRange(120, 6);     //=> , , , , , 
color('teal').hueRange(120, 8);     //=> , , , , , , , 
color('teal').hueRange(120, 10);    //=> , , , , , , , , , 
```

**Example: hueRange orange 20°**

*EXAMPLE MISSING*

### Contrast Colors

``contrastWhiteBlack()``

For dark colors, returns white and for bright colors, returns black. This can be useful for choosing a background color for an arbitrary color.

```js
color('white').contrastWhiteBlack(); 
color('black').contrastWhiteBlack(); 

color('float3', .80, .80, .80).contrastWhiteBlack(); 
color('float3', .10, .10, .10).contrastWhiteBlack(); 
color('float3', .50, .50, .50).contrastWhiteBlack(); 
color('float3', .51, .51, .51).contrastWhiteBlack(); 
color('float3', .49, .49, .49).contrastWhiteBlack(); 
```

``contrastGray()``

Returns a grayscale equivalent of the color that differs in value by 30% in order to make it clearly distinguishable from the source color. This can be useful for border colors or other subtly different contrast colors.

```js
color('#fff').contrastGray();       
color('#ccc').contrastGray();       
color('#777').contrastGray();       
color('#333').contrastGray();       
color('#111').contrastGray();       
color('#000').contrastGray();       

color('#0ff').contrastGray();       
color('#0cc').contrastGray();       
color('#077').contrastGray();       
color('#033').contrastGray();       
color('#011').contrastGray();       
``

### Conversions

#### HTML Format

``html()``

Converts the color to a string format parsable by a CSS3-compliant web browser.

Note: the implementation does not guarentee which format will be used for output by html(). If a specific format is required, use an explicit call for that particular format.

```js
var c = color('tomato');
c.tone(.2).html();                         //=> rgba(230,105,82,1) 
c.tint(.2).html();                         //=> rgba(255,130,108,1) 
c.shade(.2).html();                        //=> rgba(204,79,57,1) 
c.complement().html();                     //=> rgba(71,227,255,1) 
c.saturation(5).html();                    //=> rgba(255,244,242,1) 
c.value(5).html();                         //=> rgba(13,5,4,1) 
```

``html(format)``

Converts the color to a string format parsable by a CSS3-compliant web browser. Note that only CSS3 format types as available (e.g. html('hsv') is not a supported format type). The resulting color is always the nearest match in case of inexact matches and the alpha value is dropped from formats not supporting alpha.

```js
var c = color('steelblue').alpha(.4);
c.html('hex3');                            //=> #48b 
c.html('hex6');                            //=> #4682b4 
c.html('rgb');                             //=> rgb(70,130,180) 
c.html('rgba');                            //=> rgba(70,130,180,0.4) 
c.html('hsl');                             //=> hsl(207,44,49) 
c.html('hsla');                            //=> hsla(207,44,49,0.4) 
c.html('keyword');                         //=> steelblue 
```

``html('keyword')``

The 'keyword' will find the nearest match for the color in RGB space. This is implemented with as an O(N) algorithm; and thus is not very efficient.

```js
var c = color('steelblue');
c.tint(.0).html('keyword');                //=> steelblue 
c.tint(.3).html('keyword');                //=> cornflowerblue 
c.tint(.5).html('keyword');                //=> lightsteelblue 
c.tint(.9).html('keyword');                //=> whitesmoke 
``

#### Hexidecimal Format

``hex3(), hex6()``

```js
var c = color('peru');
c.tone(.4).hex3();                         //=> #b86 
c.tint(.4).hex3();                         //=> #eb9 
c.shade(.4).hex3();                        //=> #852 
```

```js
var c = color('seagreen');
c.tone(.4).hex6();                         //=> #4f8767 
c.tint(.4).hex6();                         //=> #82b99a 
c.shade(.4).hex6();                        //=> #1c5334 
```

Alpha values are not supported by this format and are implicitly dropped during the conversion.

```js
// Alpha is ignored in conversion to hex
color('rgba(200,100,50,.25)').hex3(); //=> #d63 
color('rgba(200,100,50,.75)').hex6(); //=> #c86432 
```

#### RGBA8 Format

``rgb8(), rgba8()``

These methods return the color as an array of 0-255 ranged color components. The rgba8() format is the format used internally for pixels in CANVAS elements and can be useful for manipulating canvas pixel colors.

```js
var c = color('peru');
c.hue('+30').rgb8();                       //=> 204, 204, 63
c.hue('+40').rgb8();                       //=> 181, 204, 63
c.hue('+50').rgb8();                       //=> 157, 204, 63
```

```js
var c = color('seagreen');
c.hue('+30').rgba8();                      //=> 46, 140, 134, 255
c.hue('+40').alpha(.5).rgba8();            //=> 46, 131, 140, 127
c.hue('+50').alpha(.25).rgba8();           //=> 46, 115, 140, 63
```


#### FLOAT3, FLOAT4 Formats

``float3(), float4()``

```js
color('green').float3();            //=> 0, 0.5019, 0
color('goldenrod').float3();        //=> 0.8549, 0.647, 0.1254
color('#33713b').float3();          //=> 0.2, 0.4431, 0.2313
color('red').float4();              //=> 1, 0, 0, 1
color('olivedrab').float4();        //=> 0.4196, 0.5568, 0.1372, 1
color('#751').float4();             //=> 0.4666, 0.3333, 0.0666, 1
color('#153').alpha8(0x70).float4(); //=> 0.0666, 0.3333, 0.2, 0.4392
```


#### Packed Formats

``packed_rgba(), packed_argb()``

These methods return the color as a single packed, unsigned integer. (The demo below displays the results as a hexidecimal string as well simply for the convenience of the reader.)

```js
var c = color('#2288CC');
c.packed_rgba();                           //=> 579390719
'0x' + c.packed_rgba().toString(16);       //=> 0x2288ccff
c.packed_argb();                           //=> 4280453324
'0x' + c.packed_argb().toString(16);       //=> 0xff2288cc
```
