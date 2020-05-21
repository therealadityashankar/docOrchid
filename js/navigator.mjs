import elements from "./elements.mjs"
import getDocs from "./docs.mjs"

elements.navigator.getDocs.addEventListener("click", event => getDocs(elements.navigator.input.value))
