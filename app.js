function total() {
    let goombaValue = 5
    let bombValue = 7
    let cheepValue = 11

    return (
        document.getElementById("goombaInput").value * goombaValue + document.getElementById("bombInput").value * bombValue + document.getElementById("cheepInput").value * cheepValue
    );
}
document.getElementById("pestBtn").addEventListener("click", function (e) {
    e.preventDefault();
    let result = (document.getElementById("price").textContent= total() + " Coins")
    console.log(result)

});
total();


