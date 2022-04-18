export function randomColor() {
    let rgb =  Array(3).fill().map(i=>Math.random() * 256)
    return `rgb(${rgb})`
}