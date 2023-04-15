import { GlassmorphicEffect } from "@/components/atoms/GlassmorphicEffect";

type Props = {
  children: React.ReactNode;
};

export default async function Page({ children }: Props) {
  return (
    <div className="py-24 h-full">
      <div className="mx-auto h-full max-w-7xl sm:px-6 lg:px-8">
        <div className="mx-auto min-h-[80%] flex bg-white/5 p-6  ring-1 ring-white/10 sm:rounded-3xl items-start	">
          {children}
        </div>
      </div>
      <GlassmorphicEffect />
    </div>
  );
}
