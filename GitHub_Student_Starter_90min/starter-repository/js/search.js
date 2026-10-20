// MEMBER B: Implement the search feature.
// TODO 1: Return true when query is empty or only spaces.
// TODO 2: Otherwise return true only when the event's title OR location
//         contains the query (case-insensitive).
// Hint: .trim(), .toLowerCase(), .includes()
window.matchesSearch = function (event, query) {
  if (query.trim() === "") {
    return true;
  }

  query = query.trim().toLowerCase();

  return (
    event.title.toLowerCase().includes(query) ||
    event.location.toLowerCase().includes(query)
  );
};




