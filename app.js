const url = location.hash.slice(1)

if (url.length > 0) {
    document.getElementById("detected-url").innerText = decodeURIComponent(url)
} else {
    document.getElementById("detected-url").innerText = "no url detected."
}

document.getElementById("random").innerText = Math.random()