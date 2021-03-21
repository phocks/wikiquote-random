import "regenerator-runtime/runtime.js";
import to from "await-to-js";
import wikiquote from "wikiquote-web";

const main = async () => {
  const [pageError, page] = await to(wikiquote.searchPeople("Carl Sagan"));
  console.log(page);

  // const [quoteError, quote] = await to(wikiquote.getRandomQuote("Carl Sagan"));
  // if (quoteError) console.error(quoteError);
  // console.log(quote);

  const [quoteByIdError, quoteById] = await to(
    wikiquote.getRandomQuoteById("800")
  ); //212672

  console.log(quoteById);
};

main();
