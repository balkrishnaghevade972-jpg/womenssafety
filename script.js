function triggerSOS() {
    alert("SOS Triggered! Stay alert and contact someone immediately.");
    playAlarm();
}

function playAlarm() {
    let audio = new Audio("assets/alarm.mp3");
    audio.play();
}

function shareLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
            let lat = pos.coords.latitude;
            let lon = pos.coords.longitude;

            let msg = `I need help. My location: https://maps.google.com/?q=${lat},${lon}`;

            window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`);
        });
    } else {
        alert("Location not supported!");
    }
}
