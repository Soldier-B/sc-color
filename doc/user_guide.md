# Overview

The ``surfacecurve-color`` library is a Javascript library for parsing, manipulating, and formatting colors and color variations. This includes parsing all [standard CSS3 color formats](http://www.w3.org/TR/css3-color/) such as ``rgba(54, 128, 255, .8)`` and ``"Blue"``, parsing common non-web color formats such as HSV, converting betweeen formats, generating complementary colors, generating alternate tones and shades, and other generally useful functionality in dynamic, graphics intensive Javascript applications.

—

*Note*: The library uses a [semantic versioning](http://semver.org/) scheme and is still considered an in-development API. Please feel free to use the library and report suggestions, errors, or questions.

**Table of Contents**
<div class="table-of-contents-list"></div>

## Usage

### Parsing

The library aims to conveniently support many different forms of color specification, so that it will work well within many host applications. See the full documentation for all support color and number formats.

<pre class="runnable-by-line">
color('orange');                  
color('#FC3');                    
color('rgb(128,64,200)');         
color('hsl', 200, 90, 90);        
color('hsv', [200, 90, 90]);      
</pre>

### Output Formats

To use a color value in an HTML page, simply specify the desired format:

<pre class="runnable-by-line">
var orange = color('orange');
orange.html();                          
orange.hex6();                          
orange.hex3();                          
orange.html('keyword');                 
orange.complement().html('keyword');    
</pre>

### Manipulation

The library supports many operations for manipulating a given color. Change the color saturation, reduce the amount of green, blend with another color, find the color's complement, find a different tone of the same base color, etc.

<pre class="runnable-by-line">
var c = color('#F00');
c = c.blend('yellow', .25);                
c.hue('-30');                              
c.hue('+=30');                             
c = c.saturation(50).shade(.5).tint(.3);   
c.complement();                            
c.complement().hueSet();                   
c.blend('lawngreen','55%').hueRange(60,9); 
</pre>

#### clamp()
Clamps the internal representation of the color to a displayable range. This method is not often necessary to call explicitly, but may be desired as an intermediate operation when values are known to exceed displayable range and the excess range is not desired for subsequent operations.

<pre class="runnable-by-line">
var hdr = color('float3', 2.0, 1.0, 0.5);
hdr.float3();                              
hdr.clamp().float3();                      
</pre>

#### complement()
Returns the color opposite in hue on the color wheel. This is effectively equivalent to color.hue('+180').

<pre class="runnable-by-line">
color('maroon').complement();       
color('lawngreen').complement();    
color('lightseagreen').complement();
</pre>


The compliment of a color's complement is always the original color.

<pre class="runnable-by-line">
//
// The complement of the complement is always the original color
//
color('red').complement().complement();
color('green').complement().complement();
color('blue').complement().complement();
</pre>


#### triad()

Returns a set of three colors including the color itself and the two colors to 120 degrees to the left and right of it on the color wheel. Effectively equivalent to ``[ color, color.hue('-120'), color.hue('+120') ]``.

<pre class="runnable-by-line">
color('red').triad();
color('#08C').triad();
color('#A7C').triad();
color('float3', .3, .6, .4).triad();
color('yellow').triad();
</pre>


#### hueSet()

Returns a set of nine colors of varying saturation and value all with the source color's hue. Useful for generating a set of distinguishable, but similar colors.

<pre class="runnable-by-line">
color('red').hueSet();
color('orange').hueSet();
color('blue').hueSet();
color('#37C').hueSet();
color('float3', .3, .6, .4).hueSet();
</pre>