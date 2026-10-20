
 // MEMBER C: Implement the category filter.
window.matchesCategory = function (event, category) {
  if (category === "All") {
    return true;
  }

  return event.category === category;
};
