// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(intNum) {
    return (fare) => fare * intNum;
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

// function selectDifferentDrivers(drivers, eitherFirstOrLast) {
//     if (eitherFirstOrLast === returnFirstTwoDrivers) {
//         return drivers.slice(0,2)
//     } else if (eitherFirstOrLast === returnLastTwoDrivers) {
//         return drivers.slice(-2)
//     }
// }

//Cleaner version
function selectDifferentDrivers(drivers, eitherFirstOrLast) {
    return eitherFirstOrLast(drivers);
}