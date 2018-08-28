document.addEventListener('DOMContentLoaded', start, false)

function start() {
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: {
            lat: 52.505387,
            lng: 13.37287,
        },
    })

    axios.get('/coffeespots').then(result => {
        result.data.forEach(data => {
            new google.maps.Marker({
                position: data.location,
                map: map,
                title: data.name,
            })
        })
    })
}