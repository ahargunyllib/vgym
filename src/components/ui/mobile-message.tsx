export function MobileMessage() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background p-6 sm:hidden">
      <div className="flex max-w-md flex-col items-center gap-6 text-center">
        {/* Icon */}
        <div className="rounded-full border-4 border-primary bg-primary/10 p-6">
          <svg
            className="h-16 w-16 text-primary"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Warning icon indicating desktop only experience</title>
            <path
              d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Message */}
        <div className="space-y-3">
          <h1 className="font-bold text-3xl text-primary tracking-wider">
            VGYM
          </h1>
          <h2 className="font-semibold text-foreground text-xl">
            Desktop Only
          </h2>
          <p className="text-muted-foreground">
            This virtual gym experience is optimized for desktop browsers with
            keyboard and mouse controls.
          </p>
          <p className="text-muted-foreground text-sm">
            Please open this page on a desktop computer to explore the 3D
            virtual gym.
          </p>
        </div>

        {/* Requirements */}
        <div className="w-full rounded-lg border border-border bg-card/50 p-4">
          <h3 className="mb-2 font-medium text-foreground text-sm">
            Requirements:
          </h3>
          <ul className="space-y-1 text-left text-muted-foreground text-xs">
            <li className="flex items-center gap-2">
              <span className="text-primary">•</span>
              <span>Desktop or laptop computer</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">•</span>
              <span>Keyboard (WASD movement)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">•</span>
              <span>Mouse (camera control)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">•</span>
              <span>WebGL-enabled browser</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
