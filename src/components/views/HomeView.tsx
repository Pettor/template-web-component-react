import type { ReactElement } from "react";
import type { ExampleCardProps } from "../library/example-card/ExampleCard";
import { ExampleCard } from "../library/example-card/ExampleCard";
import { ThemeSwitch, type ThemeSwitchProps } from "../library/theme-controller/ThemeSwitch";
import { BasicLayout } from "~/components/layout/BasicLayout";

export interface HomeViewProps {
  themeSwitchProps: ThemeSwitchProps;
  exampleCardProps: ExampleCardProps;
}

export function HomeView({ themeSwitchProps, exampleCardProps }: HomeViewProps): ReactElement {
  return (
    <BasicLayout container footer>
      <div className="w-full flex items-center justify-center">
        <div className="flex flex-1" />
        <div className="relative top-5 right-5 sm:top-10 z-20">
          <ThemeSwitch {...themeSwitchProps} />
        </div>
      </div>
      <div className="flex flex-1">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text p-2 text-3xl font-bold text-transparent md:text-2xl lg:text-5xl">
              Simple Web App
            </h1>
            <div className="mt-2">
              <ExampleCard {...exampleCardProps} />
            </div>
          </div>
        </div>
      </div>
    </BasicLayout>
  );
}
