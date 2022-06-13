const locurl = "https://zomatoajulypi.herokuapp.com/location";
const resturl = "https://zomatoajulypi.herokuapp.com/restaurant?stateId="

const getCity = async() => {
    let response = await fetch(locurl);
    let data = await response.json();
    data.map((item) => {
        let element = document.createElement('option'); // <option></option>
        let data = document.createTextNode(item.state) // Delhi
        element.appendChild(data) // <option>Delhi</option>
        element.value = item.state_id  // <option value="1">Delhi</option>
        document.getElementById('city').appendChild(element);
        //<select><option value="1">Delhi</option></select>
    })
}

const getRest = async() => {
    let cityId = document.getElementById('city').value;
    let hotel = document.getElementsByClassName('restSelect')[0]
    while(hotel.length > 0){
        hotel.remove(0)
    }
    let response = await fetch(`${resturl}${cityId}`);
    let data = await response.json();
    data.map((item) => {
        let element = document.createElement('option');
        let data = document.createTextNode(`${item.restaurant_name} | ${item.address}`)
        element.appendChild(data)
        hotel.appendChild(element);
    })

}