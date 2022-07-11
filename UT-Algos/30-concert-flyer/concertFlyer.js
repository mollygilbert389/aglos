function concertFlyerFunc(magazine, flyer) {
        
    const newMag = magazine.toLowerCase().split(" ");
    const newFly = flyer.toLowerCase().split(" ");

    const found = newFly.filter((word) => {
        return newMag.find((item) => item === word)
    })

    return Boolean(found.length > 0)
}

module.exports = { concertFlyerFunc };