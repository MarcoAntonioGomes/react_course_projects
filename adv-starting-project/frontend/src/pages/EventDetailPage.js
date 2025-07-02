import { useParams } from "react-router-dom";

export default function EventDetailPage() {
  const params = useParams();
  return (
    <main>
      <h1>Event Detail Page</h1>
      <p>Event ID: {params.id}</p>
    </main>
  );
}
