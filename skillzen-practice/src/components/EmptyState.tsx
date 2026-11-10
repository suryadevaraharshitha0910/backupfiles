interface EmptyStateProps {
  title: string;
  message: string;
}

export function EmptyState({
  title,
  message,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h2 className="text-2xl font-bold text-gray-700 mb-2">
        {title}
      </h2>

      <p className="text-gray-500">
        {message}
      </p>
    </div>
  );
}