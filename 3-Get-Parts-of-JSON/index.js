let url = "https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/sample-json-2.json";


// load data

async function loadData(){

    let response = await axios.get(url);
    // console.log(response.data);

    return response.data;





}


let selectBtn = document.querySelector(".getDataBtn");

selectBtn.addEventListener("click", function(){
    
    let userData = loadData();

    const listUL = document.createElement("ul");
    listUL.innerHTML="hello";


})