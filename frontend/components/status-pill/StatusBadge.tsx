interface Props {
  status: string;
}

export default function StatusBadge({ status }: Props) {
  const color =
    status === "New"
      ? "bg-blue-100 text-blue-600"
      : status === "In Progress"
      ? "bg-orange-100 text-orange-600"
      : "bg-green-100 text-green-600";

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${color}`}>
      {status}
    </span>
  );
}