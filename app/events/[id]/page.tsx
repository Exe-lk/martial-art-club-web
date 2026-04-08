import { redirect } from "next/navigation";

export default function EventDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return params.then(({ id }) => redirect(`/en/events/${id}`));
}

