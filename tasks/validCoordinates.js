function isValidCoordinates(coordinates) {
    coordinates = coordinates.split(`, `)
    let regexp = /^-?\d*\.?\d*$/;
    let coord1 = coordinates[0];
    let coord2 = coordinates[1];

    if (regexp.test(coord1) && regexp.test(coord2)) {
        coord1 = Math.abs(Number(coordinates[0]));
        coord2 = Math.abs(Number(coordinates[1]));
        coord1 = Math.round(coord1);
        coord2 = Math.round(coord2);
        if (coord1 > 0 && coord1 <= 90 && coord2 > 0 && coord2 <= 180) {

            return true;
        }
    }
    return false;
}
console.log(isValidCoordinates(`-24.53525235, 11`));