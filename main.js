const th = document.querySelectorAll("th"),
tdData = document.querySelectorAll("td span");

async function getAndSetData() {
    let data = await fetch("data.json")
    let dataJson = await data.json()
    for(let i= 0; i<th.length; i++) {
        th[i].innerHTML = dataJson[i].day
    }

    for(let i= 0; i<tdData.length; i++) {
        tdData[i].innerHTML = `$${dataJson[i].amount}`
    }
}

getAndSetData()