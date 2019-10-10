## Custom filters

Create new filters by registering a class with the VueEaseljs library at
runtime using the `VueEaseljs.registerFilter` method.

| Parameter |                         |
| -----     | ----                    |
| name      | the name for the filter |
| Filter    | the class that filters  |

When the filter is used in an element's `filters` prop, the extra values are
passed to the filter's constructor method.

The filter should have one of two methods: either `adjustContext` or
`adjustImageData`.

### adjustContext

| Parameter |                                                                                                                                                     |
| --------- | ---                                                                                                                                                 |
| ctx       | a <a href="https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D">CanvasRenderingContext2D</a> that contains the visual element |
| x         | the x coordinate of the element on ctx                                                                                                              |
| y         | the y coordinate of the element on ctx                                                                                                              |
| width     | the width of the element on ctx                                                                                                                     |
| height    | the height of the element on ctx                                                                                                                    |
| targetCtx | the CanvasRenderingContext2D to draw to, if absent, use ctx                                                                                         |
| targetX   | the x coordinate to draw to, if absent, use x                                                                                                       |
| targetY   | the y coordinate to draw to, if absent, use y                                                                                                       |

This method should make changes to the data in `ctx` and write them to
`targetCtx` if present, or else back to `ctx`.

### adjustImageData

| Parameter |                                                                                                                                                     |
| --------- | ---                                                                                                                                                 |
| imageData | an <a href="https://developer.mozilla.org/en-US/docs/Web/API/ImageData">ImageData</a> object                                                        |

This method should make changes directly to the `imageData` object.

Example:
```
const VueEaseljs = require('vue-easeljs');

class MyFilter {

    constructor(value1, value2) {
        ...
    }

    adjustContext(ctx, x, y, width, height, targetCtx, targetX, targetY) {
        ...
    }
}

VueEaseljs.registerFilter('MyFilter', MyFilter);
```
