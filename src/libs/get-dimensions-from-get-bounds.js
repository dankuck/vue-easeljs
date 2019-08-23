
export default function getDimensionsFromGetBounds(component) {
    return new Promise((resolve, error) => {
        const getBounds = () => {
            try {
                if (!component.component) {
                    // Component is uninitialized or went away, abandon.
                    clearInterval(waiting);
                } else if (component.component.getBounds()) {
                    // Got the bounds, resolve with them
                    clearInterval(waiting);
                    const {width, height} = component.component.getBounds();
                    resolve({width, height});
                }
                // else keep waiting...
            } catch (e) {
                // trouble! quit trying
                clearInterval(waiting);
                throw e;
            }
        }
        const waiting = setInterval(getBounds, 100);
        getBounds();
    });
};
