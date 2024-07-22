// Follow the setup steps below:

// 1. Add axios to `index.html` : be sure to include `<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.7.2/axios.js" integrity="sha512-vHNHepeQWwAggJlhEk932jRS5sNdn/Nn4F+w4TpXW5dA+04qnd3e7YpfXo6auWhFG6z3FVhmScG4ovtF+qYeZw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>` in your `index.html`

// 2. Using `axios.get()`, load in the content of the file from: 

// ```
// https://4geeksacademy.github.io/exercise-assets/txt/hello.txt
// ```

// 4. Display the content of the file inside your website (you can set the innerHTML of the `<body>` element)

let url = ("https://4geeksacademy.github.io/exercise-assets/txt/hello.txt");

async function getData(){

    let response = await axios.get(url);
    document.querySelector("body").innerHTML = response.data;

}

getData();
