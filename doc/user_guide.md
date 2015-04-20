# User Guide

The ``surfacecurve-color`` library is a Javascript library for parsing, manipulating, and formatting colors and color variations. This includes parsing all [standard CSS3 color formats](http://www.w3.org/TR/css3-color/) such as ``rgba(54, 128, 255, .8)`` and ``"Blue"``, parsing common non-web color formats such as HSV, converting betweeen formats, generating complementary colors, generating alternate tones and shades, and other generally useful functionality in any application that is using color in a dynamic fashion.

*Note*: The library currently has not yet been given a [v1.x.x semantic version](http://semver.org/). The API should no tbe considered fully stable. Suggestions, issues, pull requestions, and general questions on the code are welcome.


## Table of Contents
<!-- MarkdownTOC -->

- Installation
- CSS3 Formats
- Extended Formats

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