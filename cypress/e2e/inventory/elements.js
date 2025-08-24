export const elements = {
  addToCart: (itenName) => "[data-test=add-to-cart-${transform(itenName)}]",
};

function transform(texto) {
  return texto.replaceAll(" ", "-").toLowerCase();
}
