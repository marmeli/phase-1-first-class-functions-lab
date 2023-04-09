// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = (drivers) => {
   return drivers.slice(0,2);
} 

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(2,5);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (a) => {
    return (fare) => a*a
}

function fareDoubler(createFareMultiplier){
    return createFareMultiplier * 2;
}
function fareTripler(createFareMultiplier){
    return createFareMultiplier * 3;
}

const selectDifferentDrivers = function(drivers, selectingDrivers){
    return selectingDrivers(drivers);
}