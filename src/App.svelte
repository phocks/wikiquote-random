<script>
  import { onMount } from "svelte";
  // import wikiquote from "wikiquote";
  // import wikiquote from 'https://cdn.skypack.dev/wikiquote';

  onMount(async () => {
    // const apiEndpoint = "https://en.wikiquote.org/w/api.php";
    // const params = "action=query&list=allimages&ailimit=3&format=json";

    // fetch(
    //   apiEndpoint +
    //     "?origin=*&" +
    //     new URLSearchParams({
    //       format: "json",
    //       action: "opensearch",
    //       namespace: 0,
    //       suggest: "",
    //       search: "Carl Sagan",
    //     })
    // )
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((response) => {
    //     console.log(response);
    //   });

    // wikiquote
    //   .searchPeople("steve jobs")
    //   .then((page) => wikiquote.getRandomQuote(page.title))
    //   .then((quote) => console.log(quote));
  });
</script>

<div class="App">
  <header class="App-header">
    <a
      class="App-link"
      href="https://svelte.dev"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn Svelte
    </a>
  </header>
</div>

<style>
  /* css will go here */
</style>
