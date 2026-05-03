"use strict";

const shareButton = document.querySelector(".article__share-button");
const mediaElement = document.querySelector(".article__share-element");
const authorElement = document.querySelector(".article__author");
const detailsElement = document.querySelector(".article__details");

shareButton.addEventListener("click", () => {
  const isOpen = detailsElement.classList.contains("share");

  shareButton.setAttribute("aria-expanded", !isOpen);

  mediaElement.classList.toggle("hidden-share");
  authorElement.classList.toggle("hidden-information");
  detailsElement.classList.toggle("share");
});
