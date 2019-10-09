## Custom filters

Create new filters by registering a class with the VueEaseljs library at
runtime.

Learn more about writing filters from the
<a href="https://www.createjs.com/docs/easeljs/classes/Filter.html">EaselJS
docs</a>.

The class should extend `VueEaseljs.easeljs.Filter`. Any extra values in the
`filters` array will be passed as parameters to the constructor.

When applying the filter, a `usesContext` property is checked to determine
how it should be applied.

### applyFilter

If `filter.usesContext` is true, this method is used.

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

This method should make changes to the data in `ctx` and write them to `targetCtx` if present, or else `ctx`.

### \_applyFilter

If `filter.usesContext` is false, this method is used.

| Parameter |                                                                                                                                                     |
| --------- | ---                                                                                                                                                 |
| imageData | an <a href="https://developer.mozilla.org/en-US/docs/Web/API/ImageData">ImageData</a> object                                                        |

This method should make changes directly to the `imageData` object.

Example:
```
const VueEaseljs = require('vue-easeljs');

class MyFilter extends VueEaseljs.easeljs.Filter {

    constructor(value1, value2) {
        ...
    }

    applyFilter(ctx, x, y, width, height, targetCtx, targetX, targetY) {
        ...
    }

    _applyFilter(imageData) {
        ...
    }
}

VueEaseljs.registerFilter('MyFilter', MyFilter);
```
