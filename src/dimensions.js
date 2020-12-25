export default function dimensions() {
    let docElem = document.documentElement,
    body = document.getElementsByTagName('body')[0],
    x = window.innerWidth || docElem.clientWidth || body.clientWidth,
    y = window.innerHeight || docElem.clientHeight || body.clientHeight;
    return (y*(0.3));
}
