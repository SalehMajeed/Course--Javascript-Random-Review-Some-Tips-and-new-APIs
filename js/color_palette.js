/**
 *
 * @param {string} tag_name The tag name of the element
 * @param {string} string Classes Sets the class attribute.
 *
 * @returns (HTMLElement)
 */
function create_element_with_class(tag_name, classes) {
  const el = document.createElement(tag_name);

  el.setAttribute("class", classes);

  return el;
}

/**
 * Creates a Palette Item Based on the given information.
 *
 * @param {string} color The value of the color
 * @param {string} desc The Description of the color.
 */

function create_item(color, desc) {
  const el_item = create_element_with_class("div", "palette__item");
  const el_color = create_element_with_class("div", "palette_color");
  const el_desc = create_element_with_class("div", "palette__desc");
  const el_input = create_element_with_class("input", "palette__input");

  el_color.style.backgroundColor = color;
  el_input.value = color;
  el_desc.textContent = desc;

  el_item.appendChild(el_color);
  el_item.appendChild(el_input);
  el_color.appendChild(el_desc);

  el_input.onfocus = () => el_input.select();

  return el_item;
}

const palette_container = document.querySelector(".palette");

fetch("palette.json")
  .then((response) => response.json())
  .then((color_list) => {
    for (const { desc, color } of color_list) {
      palette_container.appendChild(create_item(color, desc));
    }
  });
