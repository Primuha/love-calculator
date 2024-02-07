function calculateLove() {
    var yourName = document.getElementById('yourName').value.trim();
    var partnerName = document.getElementById('partnerName').value.trim();
    if (yourName.length > 0 && partnerName.length > 0) {
        var loveScore = Math.floor(Math.random() * 100) + 1; // Generates a random score between 1 and 100
        document.getElementById('result').innerHTML = yourName + " and " + partnerName + "'s compatibility score is: " + loveScore + "%";
    } else {
        alert('Please enter both names.');
    }
}
