function calculateDaysToReachTop() {
    const hillHeight = 100;
    const climbPerDay = 50;
    const slipPerNight = 30;

    let distanceClimbed = 0;
    let days = 0;

    while (distanceClimbed < hillHeight) {
        days++;
        distanceClimbed += climbPerDay;

        if (distanceClimbed < hillHeight) {
            distanceClimbed -= slipPerNight;
        }
    }

    return days;
}
console.log(calculateDaysToReachTop());  