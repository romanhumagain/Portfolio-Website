import { SlightFlip } from "./FlipText";

export function FlipTextDemo() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-[7px] md:gap-0 bg-gradient-to-r from-slate-100 md:from-slate-200 md:via-slate-300 to-slate-300 md:to-slate-400 dark:from-neutral-900 dark:to-neutral-950">
      <SlightFlip
        className="text-4xl font-bold -tracking-widest text-white md:text-8xl md:leading-[4rem]"
        word="Roman"
      />
   
      <SlightFlip
        className="text-xs font-light -tracking-widest text-white md:text-2xl md:leading-[5rem]"
        word="a Software Engineer"
      />
    </div>
  );
}
