const dateOfBirth = document.querySelector("#date-of-birth")
const luckyNumber = document.querySelector("#lucky-number")
const checkBtn = document.querySelector("#check-number")
const output = document.querySelector("#output")


function addDobDigit(date) {
    let sum = 0;
    date = date.replaceAll("-", "")

    for (let digits of date) {
        sum = sum + Number(digits)
    }
    return sum
}

function checkNumberIsLucky(sumOfno, numberToCheck) {
    if (sumOfno % numberToCheck === 0) {
        outputMessage("Your birthday is lucky")
    } else {
        outputMessage("You can make your own luck")
    }
}

function outputMessage(message) {
    output.innerText = message
    setTimeout(() => {
        output.innerText = ""
        dateOfBirth.value = ""
        luckyNumber.value = ""
    }, 5000);
}


checkBtn.addEventListener("click", function () {
    const dob = dateOfBirth.value
    const numberToCheck = Number(luckyNumber.value)

    if (dob && numberToCheck) {
        const sumOfno = addDobDigit(dob)
        checkNumberIsLucky(sumOfno, numberToCheck)
    } else {
        outputMessage("Please fill both fields")
    }
})