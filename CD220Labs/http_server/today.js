module.exports.getDate = function getDate() {
    var aestTime = new Date().toLocaleString("en-US", {timeZone: "Australia/Brisbane"});
    var greeting = 'Good Morning';
    return [new Date(aestTime), greeting];
}
