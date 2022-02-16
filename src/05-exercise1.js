export function getTicketPrice(age) {
    if (typeof age !== 'number') return -1;
    if (age < 6 || age >= 70) return 0;
    if (age > 12) return 50000;
    return 20000;
}