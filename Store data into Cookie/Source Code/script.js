
const btn = document.querySelector(".btn");
const output = document.querySelector(".output");
const reset = document.querySelector(".reset");

btn.addEventListener("click", () => {
    const key = document.querySelector(".key").value;
    const value = document.querySelector(".value").value;

    if ((!key && !value) || (!key || !value)) {
        alert("Both value required");
        return
    }

    document.cookie = `${key}=${value}`
    output.innerHTML = document.cookie
    
    document.querySelector(".key").value = "";
    document.querySelector(".value").value = "";
})
