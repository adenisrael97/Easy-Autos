export default function SkeletonCard() {
  return (
    <div className="bg-surface rounded-2xl border border-line overflow-hidden">
      <div className="h-48 shimmer" />
      <div className="p-4 space-y-3">
        <div className="h-3 w-16 shimmer rounded" />
        <div className="h-5 w-3/4 shimmer rounded" />
        <div className="h-3 w-1/4 shimmer rounded" />
        <div className="flex gap-2 pt-2 border-t border-line mt-3">
          <div className="h-4 w-14 shimmer rounded" />
          <div className="h-4 w-18 shimmer rounded" />
          <div className="h-4 w-16 shimmer rounded" />
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-line">
          <div className="space-y-1">
            <div className="h-3 w-10 shimmer rounded" />
            <div className="h-6 w-24 shimmer rounded" />
          </div>
          <div className="h-8 w-20 shimmer rounded-full" />
        </div>
      </div>
    </div>
  );
}
