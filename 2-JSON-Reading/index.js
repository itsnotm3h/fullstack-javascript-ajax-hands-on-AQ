let url = "https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/json-simple.json";

// async function getJson (){
//     let response = await axios.get(url);
//     console.log(response);
// }


// Make a request for a user with a given ID

async function getJson (){

axios.get(url)
  .then(function (response) {
    // handle success
    console.log(response);

    // let addUL = document.createElement("ul");
    //         const thisLi = addUL.createElement("li");
    //             thisLi.innerHTML = response.data;


    let fullUrl = `
    <ul>
    <li>Name: ${response.data.Name}</li>  
    <li>Mobile Number: ${response.data.mobile}</li>
    <li>Current Address: ${response.data.Address["current Address"]}</li>
    <li>Permanent Address: ${response.data.Address["Permanent address"]}</li>
    </ul>
    `

    document.querySelector("body").innerHTML = fullUrl;




    // for (let thisArray of response)
    // {
    //     let thisLi = addUL.createElement("li");

    //     thisLi.innerHTML = thisArray.data;
    // }


  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

};

getJson();

