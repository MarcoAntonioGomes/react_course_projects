async function fetchAvailablePlaces() {
  const response = await fetch("http://localhost:3000/places");
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch places.");
  }

  return data.places;
}

async function updateUserPlaces(places) {
  const response = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ places }),
  });

  if (!response.ok) {
    throw new Error("Failed to update user places.");
  }
}

export { fetchAvailablePlaces, updateUserPlaces };
