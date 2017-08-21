# vue-easeljs
A Vue.js plugin to control an HTML5 canvas using EaselJS

# Thanks

Thanks go to:

* gskinner - creator of <a href="http://www.createjs.com/easeljs">EaselJS</a>
* Joshua Bemenderfer - writer of <a href="https://alligator.io/vuejs/custom-component-renderers/">this helpful tutorial</a>
* JPhilipp - creator of <a href="https://opengameart.org/content/700-sprites">these sprites</a> used for testing and demos, and
* jez s - who photographed <a href="https://commons.wikimedia.org/wiki/File:Entrance_to_Gulfstream_Park,_at_Hallandale,_Florida,_the_%27track_by_the_sea.%27_One_of_the_nation%27s_most_scenic_race_courses..jpg">this old postcard</a> used for testing and demos

# Getting Started

## Install vue-easeljs

On the command line:

```
npm install vue-easeljs --save
```

In app.js:

```
require('vue-easeljs');
```

In your Vue.js code all vue-easeljs components need to reside in an `easel-canvas` 
component.

```
<easel-canvas width="400" height="300">
    <easel-shape
        :x="200"
        :y="150"
        form="circle"
        fill="blue"
        :align="['center','center']"
    >
    </easel-shape>
</easel-canvas>
```

# Components

## easel-bitmap

Show static images.

Attributes:
* align - array, controls what corner of the image the x and y refer to. Default: ['center', 'center'].
* alpha - 0 to 1, controls the opacity of the image. Default: 1, completely opaque.
* flip - 'horizontal'|'vertical'|'both'|'', flips the image.
* image - relative or absolute path to an image file.
* rotation - degrees, rotates the image. Default: 0.
* scale - number, resizes the image. Default: 1.
* shadow - array, cast an image-shaped shadow. Format: [color, xOffset, yOffset, amountOfBluriness]. Default: null.
* x - number, horizontal position based on the origin of the parent component. Required.
* y - number, vertical position based on the origin of the parent component. Required.

Example:

```
<easel-bitmap
    :image="/images/awesome-background.jpg"
    :x="0"
    :y="0"
>
</easel-bitmap>
```

## easel-canvas

Give the vue-easeljs components a place to live.

Attributes:
* anti-alias: boolean, whether or not edges should be smoothed on scaled images. Default: true.
* height: number, the pixel height of the canvas on the page. Default: 300.
* width: number, the pixel width of the canvas on the page. Default 150.

Example:

```
<easel-canvas>
    <easel-text 
        :text="This is so easy!"
        :x="10"
        :y="10"
    >
    </easel-text>
</easel-canvas>
```

## easel-container

Group other vue-easel components together and manipulate them as one.

Attributes:
* alpha - 0 to 1, controls the opacity of the container. Default: 1, completely opaque.
* flip - 'horizontal'|'vertical'|'both'|'', flips the container.
* rotation - degrees, rotates the container. Default: 0.
* scale - number, resizes the container. Default: 1.
* shadow - array, cast a shadow of all contained components. Format: [color, xOffset, yOffset, amountOfBluriness]. Default: null.
* x - number, horizontal position based on the origin of the parent component. Required.
* y - number, vertical position based on the origin of the parent component. Required.

Example:

```
<easel-container>
    <easel-bitmap
        :x="0"
        :y="0"
        :image="/images/wooden-sign-texture.png"
    >
    </easel-bitmap>
    <easel-text 
        :text="Dan's Left Shoe Emporium"
        :x="0"
        :y="0"
    >
    </easel-text>
</easel-container>
```

## easel-shape

Show a shape.

Attributes:
* alpha - 0 to 1, controls the opacity of the shape. Default: 1, completely opaque.
* dimensions - Depends on the form. See below.
* fill - color, the inside of the shape
* flip - 'horizontal'|'vertical'|'both'|'', flips the shape.
* form - 'circle'|'ellipse'|'rect'|'star'
* rotation - degrees, rotates the shape. Default: 0.
* scale - number, resizes the shape. Default: 1.
* shadow - array, cast a same-shape shadow. Format: [color, xOffset, yOffset, amountOfBluriness]. Default: null.
* stroke - color, the outline of the shape.
* x - number, horizontal position based on the origin of the parent component. Required.
* y - number, vertical position based on the origin of the parent component. Required.

Dimensions for:
* circle - number, the radius of the circle
* ellipse - array, the width and height of the ellipse. Format: [width, height].
* rect - array, the width and height of the rectangle. Optionally include the radius of rounded corners. Format: [width, height], or [width, height, allRadiuses], or [width, height, topLeftRadius, topRightRadius, bottomRightRadius, bottomLeftRadius].
* star - array, the radius, sides count, and point size of a "star". Use point size 0 to draw a simple polygon. Max point size is 1.

Example, to draw a blue triangle with yellow stroke:
```
<easel-shape
    shape="star"
    :dimensions="[10, 3, 0]"
    fill="blue"
    stroke="yellow"
    :x="10"
    :y="10"
>
</easel-shape>
```

... more to come

# Implemented

This library provides Vue.js component access to:

* Canvas
* Container
* Shape
* Sprite
* Bitmap
* Text

And all of these support the attributes:

* x: number
* y: number
* flip: horizontal, vertical, or both
* rotation: number of degrees
* scale: number
* alpha: number
* shadow: array
* align: array

# Pending

These plans are in motion:

* The demo should be a separate branch, on ghpages

These plans are merely dreams:

* Allow constant value attributes to use percentage values, too
* Caching shapes

There are no plans to implement these features:

* Filters
* BitmapText
* Buttons
* Complex Vector Paths
* MovieClip
