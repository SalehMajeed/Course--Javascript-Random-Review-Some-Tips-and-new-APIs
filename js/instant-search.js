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

    this.elements.input.addEventListener("focus", () => {
      this.elements.result_container.classList.add(
        "instant-search__results-container--visible"
      );
    });

    this.elements.input.addEventListener("blur", () => {
      this.elements.result_container.classList.remove(
        "instant-search__results-container--visible"
      );
    });
  }

  populate_results(results) {
    // clear all existing results
    while (this.elements.result_container.firstChild) {
      this.elements.result_container.removeChild(
        this.elements.result_container.firstChild
      );
    }

    for (const result of results) {
      this.elements.result_container.appendChild(
        this.create_result_element(results)
      );
    }
  }

  create_result_element(result) {
    const anchor_element = document.createElement("a");

    anchor_element.classList.add("instant-search__result");
    anchor_element.insertAdjacentElement(
      "afterbegin",
      this.options.templateFunction(result)
    );

    if ("href" in result) {
      anchor_element.setAttribute("href", result.href);
    }

    return anchor_element;
  }

  perform_search(query) {
    const url = new URL(this.options.searchURL.toString());

    url.searchParams.set(this.options.queryParam, query);

    this.set_loading(true);

    return fetch(url, {
      method: "get",
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Something went wrong with the search");
        }

        return response.json();
      })
      .then((response_data) => {
        console.log(response_data);
        return this.options.responseParser(response_data);
      })
      .catch((error) => {
        console.error(error);
        return [];
      })
      .finally((results) => {
        this.set_loading(false);
        return results;
      });
  }

  set_loading(b) {
    this.elements.main.classList.toggle("instant-search--loading", b);
  }
}

export default Instant_search;
