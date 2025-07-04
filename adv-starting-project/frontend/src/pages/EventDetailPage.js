import { useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";
import { redirect } from "react-router-dom";

export default function EventDetailPage() {
  const data = useRouteLoaderData("event-detail");

  return (
    <main>
      <EventItem event={data.event} />
    </main>
  );
}

export async function loader({ params }) {
  const eventId = params.eventId;

  const response = await fetch(`http://localhost:8080/events/${eventId}`);

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Failed to fetch event." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  } else {
    return response;
  }
}

export async function action({ params }) {
  const eventId = params.eventId;

  const response = await fetch(`http://localhost:8080/events/${eventId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Failed to delete event." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  return redirect("/events");
}
