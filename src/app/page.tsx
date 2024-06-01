import { classNames } from "./lib/utils";

export default function Home() {
  return (
    <main
      className={classNames(
        "h-[200%] first-letter:max-w-[var(--app-max-width)] mx-auto",
        "lg:space-y-[10rem]"
      )}
    >
      App
    </main>
  );
}
