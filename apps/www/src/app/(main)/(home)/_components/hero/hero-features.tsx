import { StartIcon } from "@/components/icons";
import { JAMSR_UI_GITHUB_URL } from "@/config";
import { Suspense } from "react";
import { GithubStarsCount, ReactPackageVersion } from "./github";

export const HeroFeatures = () => {
  return (
    <ul className="flex items-center gap-4">
      <li className="text-sm text-foreground-tertiary">
        <a
          href={JAMSR_UI_GITHUB_URL}
          target="_blank"
          className="flex items-start gap-2 hover:text-foreground"
          rel="noreferrer"
        >
          <StartIcon className="size-4" />
          <Suspense>
            <GithubStarsCount />
          </Suspense>{" "}
          stars on GitHub
        </a>
      </li>
      <div className="size-1 rounded-full bg-foreground-tertiary" />
      <li className="text-sm text-foreground-tertiary">MIT License</li>
      <div className="size-1 rounded-full bg-foreground-tertiary" />
      <li className="text-sm text-foreground-tertiary">
        v
        <Suspense>
          <ReactPackageVersion />
        </Suspense>
      </li>
    </ul>
  );
};
