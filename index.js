import "regenerator-runtime/runtime.js";
import wikiquote from "wikiquote";

wikiquote
  .searchPeople('steve jobs')
  .then(page => wikiquote.getRandomQuote(page.title))
  .then(quote => console.log(quote))
