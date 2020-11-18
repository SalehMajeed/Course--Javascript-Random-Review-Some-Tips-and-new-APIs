/**
 * @typedef {Object} InstantSearchOption
 * @property {URL} searchURL The url which the search bar will query to retrieve results
 * @property {string} queryParam The name of the query parameter to be used in each request
 * @property {Function} responseParser Takes the response from the instant search and return an array of results.
 * @property {Function} templateFunction Takes an instant search result and produces the HTML for it.
 */
class Instant_search {
  /**
   *Initialises the instant search bar. retrieve and create elements.
   *
   * @param {HTMLElement} instant_search The container for the instant search
   * @param {InstantSearchOption} options a list of options for configuration
   */
  constructor(instant_search, options) {
    this.options = options;

    this.elements = {
      main: instant_search,
      input: instant_search.querySelector(".instant-search__input"),
      result_container: document.createElement("div"),
    };

    this.elements.result_container.classList.add(
      "instant-search__results-container"
    );

    this.elements.main.appendChild(this.elements.result_container);
    this.add_listners();
  }

  add_listners() {
    let delay;
    this.elements.input.addEventListener("input", () => {
      clearTimeout(delay);
      const query = this.elements.input.value;

      delay = setTimeout(() => {
        if (query.length < 3) {
          this.populate_results([]);
          return;
        }

        this.perform_search(query).then((results) => {
          this.populate_results(results);
        });
      }, 500);
    });
  }

  populate_results(results) {
    console.log(results);
  }

  perform_search(query) {
    const url = new URL(this.options.searchURL.toString());

    url.searchParams.set(this.options.queryParam, query);

    this.set_loading(true);

    return fetch(url, {
      method: "get",
    })
      .then((response) => response.json())
      .then((response_data) => console.log(response_data));
  }

  set_loading(b) {
    this.elements.main.classList.toggle("instant-search--loading", b);
  }
}

export default Instant_search;
