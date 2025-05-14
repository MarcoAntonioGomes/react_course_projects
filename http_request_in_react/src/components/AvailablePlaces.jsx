import { useState } from "react";
import Places from "./Places.jsx";
import { useEffect } from "react";
import ErrorPage from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      try {
        const places = await fetchAvailablePlaces();

        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            places,
            position.coords.latitude,
            position.coords.longitude
          );
          setAvailablePlaces(sortedPlaces);
          setIsFetching(false);
        });
      } catch (error) {
        console.error("Error fetching places:", error);
        setError({
          message: error.message || "An error occurred while fetching places.",
        });
        setIsFetching(false);
      }
    }
    fetchPlaces();
  }, []);

  if (error) {
    return (
      <ErrorPage
        title="An error occuried"
        message={error.message}
        onConfirm={() => setError(null)}
      />
    );
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching places data ..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
