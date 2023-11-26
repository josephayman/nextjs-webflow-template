import clsx from "clsx";

type LabelProps = {
  children: string;
  spacing?: boolean;
};

const Label = ({ children, spacing = false }: LabelProps) => (
    <div className={clsx("uppercase mt-0 font-medium text-p-xs leading-p-xs tracking-1px", spacing ? "mb-25px" : "mb-10px")}>
      {children}
    </div>
);

export default Label;