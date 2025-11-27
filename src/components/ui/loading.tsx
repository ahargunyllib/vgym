export function Loading() {
  return (
    <div className="fixed inset-0 z-20 flex flex-col items-center justify-center bg-background text-foreground">
      <div className="flex flex-col items-center gap-6">
        {/* Spinner */}
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-4 border-border" />
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        </div>

        {/* Loading text */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="font-semibold text-xl">Loading Virtual Gym</h2>
          <p className="text-muted-foreground text-sm">
            Preparing your workout space...
          </p>
        </div>
      </div>
    </div>
  );
}
