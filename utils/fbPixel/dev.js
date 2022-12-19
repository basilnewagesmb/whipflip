const log = console.log;

export function init(code) {
    log(`FB Pixel init triggered for ${code}`);
}


export function pageView() {
    log(`FB Pixel page tracking`);
}

export function customEvent(event = "", data = {}) {
    if (event) {
        log(
            `FB Pixel custome event ${event} with data ${data} triggered`
        );
    }
}

export function event(event = "", data = {}) {
    log(
        `FB Pixel event ${event} with data ${data} triggered`
    );
}