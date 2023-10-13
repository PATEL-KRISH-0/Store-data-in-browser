
const btn = document.querySelector(".btn");
const output = document.querySelector(".output");
const reset = document.querySelector(".reset");

btn.addEventListener("click", () => {
    const key = document.querySelector(".key").value;
    const value = document.querySelector(".value").value;

    if ((!key && !value) || (!key || !value)) {
        alert("Both value required");
        output.innerHTML = "Error!";
        return
    }

    sessionStorage.setItem(key, value);
    output.innerHTML = "done!";
    
    document.querySelector(".key").value = "";
    document.querySelector(".value").value = "";
})
