const twoDigits = (x) => {
    let z = new String(x);
    (z.length == 1)?(z = '0' + x):(z=new String(x));
    return z
}

const printTime = () => {
    const myWatch = document.querySelector("#clock")

    const thisMoment = new Date()

    let seconds = twoDigits(thisMoment.getSeconds())

    let minutes = twoDigits(thisMoment.getMinutes())

    let hours = twoDigits(thisMoment.getHours())

    const clockContent = `${hours}:${minutes}:${seconds}`

    myWatch.innerHTML = clockContent

    setTimeout("printTime()", 1000)
}