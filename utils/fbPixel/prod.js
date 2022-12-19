export function init(code) {
    if (code) {
        import('react-facebook-pixel')
            .then(module => module.default)
            .then(ReactPixel => {
                ReactPixel.init(code)
                ReactPixel.pageView();
            })
    }
}

export function pageView() {
    import('react-facebook-pixel')
        .then(module => module.default)
        .then(ReactPixel => {
            ReactPixel.pageView();
        });
}

export function event(event = "", data = {}) {
    if (event) {
        import('react-facebook-pixel')
            .then(module => module.default)
            .then(ReactPixel => {
                ReactPixel.track(event, data);
            })
    }
}

export function customEvent(event = "", data = {}) {
    if (event) {
        import('react-facebook-pixel')
            .then(module => module.default)
            .then(ReactPixel => {
                ReactPixel.trackCustom(event, data);
            })
    }
}

