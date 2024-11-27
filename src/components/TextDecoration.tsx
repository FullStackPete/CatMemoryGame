import { ReactNode } from "react";

type TextDecorationProps = {
  children: ReactNode;
  customClassName?: string;
};
export default function TextDecoration({ children, customClassName }: TextDecorationProps) {
  return (
    <div
      className={`border-text-color border-0 md:border-4 lg:border-8 md:bg-[#242038] rounded-3xl mt-4 ${customClassName}`}
    >
      {children}
    </div>
  );
}
