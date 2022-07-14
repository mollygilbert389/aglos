function validBracketsFunc(str) {
    const noSpaces = str.split(" ").join("").split("");

    function returnModBool(char1, char2){
        const slicedArr = noSpaces.slice(noSpaces.indexOf(char1), noSpaces.indexOf(char2) +1)
        return Boolean(slicedArr.length % 2 === 0)
    }

    const foundOpenParen = noSpaces?.includes("(");
    const foundOpenCurly = noSpaces?.includes("{");
    const foundOpenBracket = noSpaces?.includes("[");

    const foundCorrectPairParen = noSpaces?.includes("(") && noSpaces?.find((item) => item === ")") && (noSpaces.indexOf("(") < noSpaces.indexOf(")"));
    const foundCorrectPairCurly = noSpaces?.includes("{") && noSpaces?.find((item) => item === "}") && (noSpaces.indexOf("{") < noSpaces.indexOf("}"));
    const foundCorrectPairBracket = noSpaces?.includes("[") && noSpaces?.find((item) => item === "]") && (noSpaces.indexOf("[") < noSpaces.indexOf("]"));

    if((!foundOpenParen || foundCorrectPairParen) && (!foundOpenCurly || foundCorrectPairCurly) && (!foundOpenBracket || foundCorrectPairBracket)) {
        if(foundOpenParen || foundOpenCurly || foundOpenBracket) {
            if(foundOpenParen) {
                return returnModBool("(", ")")
            } 
        
            if(foundOpenCurly){
                return returnModBool("{", "}")
            }
        
            if(foundOpenBracket) {
                return returnModBool("[", "]")
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