const dataUrl = "https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/users.json";

async function loadData(url){

    const response = await axios.get(url);
    return response.data;

}

function renderList(userData){

    console.log(userData);

    for (let d of userData)
    {
        let createUL = document.createElement("ul");
        
    }
    
    
}



document.addEventListener("DOMContentLoaded", async function(){
    const userData = await loadData(dataUrl);
    renderList(userData);
    // console.log(userData);
})