import React from "react";

type RichTextProps = {
  children: React.ReactNode;
};

export default function RichText({ children }: RichTextProps) {
  return (
    <div className="mobile-landscape:max-w-none mobile-landscape:w-70% mb-100px mx-auto mobile:w-90% mobile:max-w-470px w-full max-w-none">
      {children}
    </div>
  );
}
