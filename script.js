
async function searchLocation() {

    const input = document.getElementById("location").value;
    const results = document.getElementById("results");

    results.innerHTML = "";

    if (input.length < 2) return;

    const response = await fetch(
        "https://travel-api.cyashika805.workers.dev/search?q=" +
        encodeURIComponent(input)
    );

    const data = await response.json();

    data.forEach(place => {

        const div = document.createElement("div");

        div.textContent =
            place.name + " - " + place.countryName;

        div.onclick = () => selectLocation(place);

        results.appendChild(div);

    });
}

function selectLocation(place) {

    document.getElementById("location").value = place.name;

    document.getElementById("location_id").value = place.id;

    document.getElementById("results").innerHTML = "";

    console.log("Selected location ID:", place.id);
}
