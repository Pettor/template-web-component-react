import { useCallback, type ReactElement } from "react";
import { ExampleCard } from "~/components/ExampleCard";

export function App(): ReactElement {
  const handleShare = useCallback(() => {
    console.log("Share button clicked!");
  }, []);

  return (
    <div className="container flex h-screen w-full items-center justify-center">
      <ExampleCard label="Hello World" onShare={handleShare} />
    </div>
  );
}
