const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime, durationMinutes) {
    const [startHour, startMin] = dayStart.split(":").map((i) => +i);
    const [endHour, endMinute] = dayEnd.split(":").map((i) => +i);
    let [hour, min] = startTime.split(":").map((i) => +i);
    if (hour >= startHour && hour <= endHour) {
        if (hour === startHour) {
            if (min < startMin) return false;
        } else if (hour === endHour) {
            if (min > endMinute) return false;
        }

        if (min + durationMinutes >= 60) {
            hour += 1;
            min = durationMinutes + min - 60;
        } else {
            min += durationMinutes;
        }

        if (hour <= endHour) {
            if (hour === endHour) {
                if (min <= endMinute) return true;
                else return false;
            } else return true;
        } else return true;
    } else {
        return false;
    }
}

console.log(scheduleMeeting("7:00", 15)); // false
console.log(scheduleMeeting("07:15", 30)); // false
console.log(scheduleMeeting("7:30", 30)); // true
console.log(scheduleMeeting("11:30", 60)); // true
console.log(scheduleMeeting("17:00", 45)); // true
console.log(scheduleMeeting("17:30", 30)); // false
console.log(scheduleMeeting("18:00", 15)); // false
