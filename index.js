const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
function returnFirstTwoDrivers(drivers){
    return drivers.slice(0, 2);
}
const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(drivers.length-2,drivers.length)
}
const selectingDrivers=[returnFirstTwoDrivers, returnLastTwoDrivers];

console.log(selectingDrivers[0])
function createFareMultiplier(num){
    return function fareMultiplier(fare){
        fare = fare*num;
        return fare;
    };
}
const fareDoubler = function(fare){
    fare = fare*2;
    return fare;
};
const  fareTripler = function(fare){
    fare = fare*3;
};
function selectDifferentDrivers(drivers, firstTwoDrivers){
    returnFirstTwoDrivers(drivers);
}

console.log(selectDifferentDrivers(function(drivers){
    let firstTwo = [];
    firstTwo.push("Antonia", "Nuru");
    return firstTwo;
}))