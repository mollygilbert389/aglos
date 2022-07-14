function validBracketsFunc(str) {
    const noSpaces = str.split(" ").join("").split("");

    function returnNestedBool(char1, char2){
        const slicedArrBool = Boolean(noSpaces.slice(noSpaces.indexOf(char1), noSpaces.indexOf(char2) +1).length % 2 === 0);
        const findEvensBool = Boolean((noSpaces.filter((item) => item === char1).length) === (noSpaces.filter((item) => item === char2).length))
        return Boolean(slicedArrBool && findEvensBool)
    }

    const foundCorrectPair = (char1, char2) => {
        return noSpaces?.includes(char1) && noSpaces?.find((item) => item === char2) && (noSpaces.indexOf(char1) < noSpaces.indexOf(char2));
    }

    const foundOpenParen = noSpaces?.includes("(");
    const foundOpenCurly = noSpaces?.includes("{");
    const foundOpenBracket = noSpaces?.includes("[");

    if((!foundOpenParen || foundCorrectPair("(", ")")) && (!foundOpenCurly || foundCorrectPair("{", "}")) && (!foundOpenBracket || foundCorrectPair("[", "]"))) {
        if(foundOpenParen || foundOpenCurly || foundOpenBracket) {
            if(foundOpenParen) {
                if(foundOpenCurly){
                    if(foundOpenBracket) {
                        return returnNestedBool("[", "]")
                    }
                    return returnNestedBool("{", "}")
                }
                return returnNestedBool("(", ")")
            } 
        }
    } else {
        return false
    }
}

function altValidBracketsFunc(str) {
    const finalArr = [];

    [...str].forEach((char) => {
        if(char === "(" || char === "{" || char === "[") {
            finalArr.push(char)
        }

        if (char === ")") {
            if (finalArr.pop() !== "(") {
                finalArr.push(char)
            }
          }
        
        if (char === "}") {
            if (finalArr.pop() !== "{") {
                finalArr.push(char)
            }
        }
          
        if (char === "]") {
            if (finalArr.pop() !== "[") {
                finalArr.push(char)
            }
        }
    })

    return Boolean(finalArr.length === 0)
}

module.exports = { validBracketsFunc, altValidBracketsFunc }