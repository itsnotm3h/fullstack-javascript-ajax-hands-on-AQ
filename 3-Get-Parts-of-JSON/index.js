let url = "https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/sample-json-2.json";


// load data

async function loadData(){

    let response = await axios.get(url);
    return response.data;
}


let selectBtn = document.querySelector(".getDataBtn");

selectBtn.addEventListener("click", async function(){
    
    let userData = await loadData();

    // const listUL = document.createElement("ul");
    // listUL.innerHTML="hello";

    let displayItem = `
    <ul>
  <li>First Name: ${userData.firstName}</li>
  <li>Last Name: ${userData.lastName}</li>
  <li>Street Address: ${userData.address["streetAddress"]}</li>
  <li>City: ${userData.address["city"]}</li>
  <li>State: ${userData.address["state"]}</li>
  <li>Postal Code: ${userData.address["postalCode"]}</li>
</ul>`;

 
document.querySelector(".displayItems").innerHTML = displayItem;

})