import { detailsCall } from "../../api/detailsCall.js";
import { errorMessage } from "../../ui/errorMessage.js";
import { createDetails } from "../../ui/createDetails.js";
import { getQueryParam } from "../../utils/getQueryParam.js";
import { handleCartIconClick } from "../cart/handleCartIconClick.js";
export async function displayDetails() {

  const id = getQueryParam("movie");

  if (!id) {
    window.location.href = "/";
    return;
  }

  const container = document.querySelector(".details-container");
  try {
    const movie = await detailsCall(id);
    createDetails(movie, container);
    handleCartIconClick();
  } catch (error) {
    errorMessage(container, "error", error.message);
  }
}
