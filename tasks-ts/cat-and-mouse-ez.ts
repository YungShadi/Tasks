export function catMouse(x: string): string {
    return x.length > 5 ? 'Escaped!' : 'Caught!'
}

console.log(catMouse("C...m"));
