export function Skeleton() {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="border rounded-lg p-4 animate-pulse"
        >
          <div className="h-5 w-48 bg-gray-300 rounded mb-3"></div>

          <div className="h-4 w-64 bg-gray-200 rounded"></div>
        </div>
      ))}
    </div>
  );
}