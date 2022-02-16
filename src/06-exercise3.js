function getTaxiCount(passengersCount) {

    let assign = 0;
    if (passengersCount < 0) assign = -1;
    if (passengersCount <= 4) assign = 1;
    if (passengersCount > 4) assign = 1;
    if (passengersCount > 9) assign = 2;
    if (passengersCount > 19) assign = 3;
    return assign;
}