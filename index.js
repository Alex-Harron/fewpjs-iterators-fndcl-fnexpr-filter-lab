// Code your solution here
function findMatching(drivers, string) {
    return drivers.filter( possibleMatch => possibleMatch.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(drivers, string) {
    return drivers.filter( possibleMatch => possibleMatch.toLowerCase().indexOf(string.toLowerCase()) === 0 
    )
}

function matchName(drivers, stringName) {
    return drivers.filter( record => record.name === stringName)
}