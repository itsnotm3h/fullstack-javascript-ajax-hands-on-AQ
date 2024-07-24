// Follow the setup steps below:

// 1. Add axios to `index.html` : be sure to include `<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.7.2/axios.js" integrity="sha512-vHNHepeQWwAggJlhEk932jRS5sNdn/Nn4F+w4TpXW5dA+04qnd3e7YpfXo6auWhFG6z3FVhmScG4ovtF+qYeZw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>` in your `index.html`

// 2. Using `axios.get()`, load in the content of the file from: 

// ```
// https://4geeksacademy.github.io/exercise-assets/txt/hello.txt
// ```

// 4. Display the content of the file inside your website (you can set the innerHTML of the `<body>` element)

let url = ("https://4geeksacademy.github.io/exercise-assets/txt/hello.txt");

// async function getData(){

//     // is a promise with an await. 
//     //const cannot reassign. 
//     // following industry standard. 
//     // will pause at line 4 in this scope, it will still continue to run any function that is outside of this scope. 
//     const response = await axios.get(url);
//     document.querySelector("#output").innerHTML = response.data;

// }

// getData();


//more complex solution.
// one function responsible for different part. SIEPO
// u should follow the sequence.  ^^ 
// modular programming ^^ is the concept. 
// it helpes in debugging,one fail but not all will fail. 

async function loadData(){
    // must have await to return a promise. it is a delayed function.
    // awaiit a promise 
    const response = await axios.get(url);
    return response.data;
}

function renderData(data)
{
    const outputElement = document.querySelector("#output");
    outputElement.innerHTML = data;

}

//means HTML is processed, it will first fire the an event when its loaded. 
document.addEventListener("DOMContentLoaded", async function(){

    const data = await loadData();
    renderData(data);

});