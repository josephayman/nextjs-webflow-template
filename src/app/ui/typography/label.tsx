import clsx from "clsx";

type LabelProps = {
  children: string;
  spacing?: boolean;
  opacity?: "de-emphasized";
};

const Label = ({ children, spacing = false, opacity }: LabelProps) => (
  <div
    className={clsx(
      "uppercase mt-0 font-medium text-p-xs leading-p-xs tracking-1px",
      spacing ? "mb-25px" : "mb-10px",
      opacity === "de-emphasized" && "opacity-60"
    )}
  >
    {children}
  </div>
);

export default Label;
