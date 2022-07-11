const { concertFlyerFunc } = require("./concertFlyer");

test("will return true if the flyer words are contained in the magazine", () => {
    var magazine = 'hello world';
    var flyer = 'hello';
    expect(concertFlyerFunc(magazine,flyer)).toBe(true)
})

test("will return true if the flyer words are contained in the magazine", () => {
    var magazine = 'Whats so amazing that keeps us stargazing';
    var flyer = 'stargazing whats keeps us so amazing';
    expect(concertFlyerFunc(magazine,flyer)).toBe(true)
})

test("will return true if the flyer words are contained in the magazine", () => {
    var magazine = 'the grass is green';
    var flyer = 'winter be coming';
    expect(concertFlyerFunc(magazine,flyer)).toBe(false)
})