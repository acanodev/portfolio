export function imageErrorHandler (ev: any) {
    ev.target.src = "/placeholder.png";
}

export function imageLoadHandler (ev: any) {
    if (ev.target.naturalWidth === 0) {
        ev.target.src = "/placeholder.png";
    }
}
