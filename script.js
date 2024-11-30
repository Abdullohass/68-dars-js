const input = document.getElementById("name-input");
const btn = document.getElementById("btn");
const ul = document.getElementById("result-list");
const div = document.getElementById("div");

async function getUser(ism) {
    const javob = await fetch(`https://api.nationalize.io/?name=${ism}`);
    const data = await javob.json();
    ul.innerHTML = ``;
    data.country.forEach(e => {
        const li = document.createElement("li");
        const img = document.createElement("img");
        const div = document.createElement("div");

         
        img.src=`https://flagcdn.com/16x12/${e.country_id.toLowerCase()}.png`
        li.textContent = e.country_id + "  " + (e.probability * 100).toFixed(1)+ " %" ;

        div.style="display:flex;align-items:center;text-align:center;margin-left:110px;"

        div.appendChild(img)
        div.appendChild(li)
        ul.appendChild(div)
    });
}
btn.addEventListener("click", () => {
    if (input.value.trim().length < 1) {
        alert("Iltimos biror narsa yozing!!!")
    } else {
        getUser(input.value.trim())
    }
})
