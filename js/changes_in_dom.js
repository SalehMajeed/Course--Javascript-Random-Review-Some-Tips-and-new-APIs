const my_list = document.querySelector(".summary");

/**
 * 1. making a new MutationObserver Object.
 * 2. Tell it what to observe.
 * 3. What you gonna do to the changes/mutations.
 */

const observer = new MutationObserver((mutations) => {
  mutations.forEach((record) => {
    if (record.type == "attributes") {
      const changed_attriute_name = record.attributeName;
      const new_val = record.target.getAttribute(changed_attriute_name);

      console.log(changed_attriute_name, new_val);
    }
  });
});

observer.observe(my_list, {
  attributes: true,
  attributeFilter: ["class", "id"],
  attributeOldValue: true,
});

setTimeout(() => my_list.setAttribute("id", "some-random-id"), 1000);

const observer1 = new MutationObserver((mutations) => {
  mutations.forEach((record) => {
    console.log(record);
    if (record.addedNodes.length > 0) {
      console.log(record.addedNodes);
    }
  });
});

observer1.observe(my_list, {
  childList: true,
});

setTimeout(() => {
  my_list.removeChild(my_list.firstElementChild);

  const new_li = document.createElement("li");
  new_li.textContent = "Hew how are you";
  my_list.appendChild(new_li);
}, 1000);

const observer2 = new MutationObserver((mutations) => {
  mutations.forEach((record) => {
    console.log(record);

    if (
      record.addedNodes.length == 1 &&
      record.addedNodes[0].nodeType == Node.TEXT_NODE &&
      record.removedNodes.length == 1 &&
      record.removedNodes[0].nodeType == Node.TEXT_NODE
    ) {
      console.log(
        record.removedNodes[0].nodeValue,
        record.addedNodes[0].nodeValue
      );
    }
  });
});

observer2.observe(my_list.firstElementChild, {
  childList: true,
});

setTimeout(() => {
  my_list.firstElementChild.textContent = "something else";
}, 1000);

const observer3 = new MutationObserver((mutations) => {
  mutations.forEach((record) => {
    console.log(record);

    console.log(record.target.nodeValue, record.oldValue);
  });
});

observer3.observe(my_list.firstElementChild.firstChild, {
  characterData: true,
  characterDataOldValue: true,
});

setTimeout(() => {
  my_list.firstElementChild.firstChild.nodeValue = "how is it going.";
}, 1000);

const observer4 = new MutationObserver((mutations) => {
  mutations.forEach((record) => {
    console.log(record);
  });
});

observer4.observe(my_list, {
  subtree: true,
  attributes: true,
});

setTimeout(() => {
  my_list.setAttribute("id", "someRandomID");
  my_list.firstElementChild.setAttribute("id", "anotherID");
}, 1000);
