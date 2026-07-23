const VARIANTS = {
  primary: "btn-primary",
  "primary-empty": "btn-primary-empty",
  "primary-empty-dark": "btn-primary-empty-dark",
  ghost: "",
};

type Props = {
  variant?: "primary" | "primary-empty" | "primary-empty-dark" | "ghost";
  message?: string;
  icon?: React.ReactNode;
  onClickAction?: (...args: any[]) => void | Promise<void>;
  className?: string;
  ariaLabel?: string;
  "aria-expanded"?: boolean;
};

const Button = (props: Props) => {
  return (
    <button
      onClick={props.onClickAction}
      aria-label={props.ariaLabel}
      aria-expanded={props["aria-expanded"]}
      className={`relative block cursor-pointer select-none rounded-sm bg-transparent text-white transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 active:scale-[0.98] active:brightness-90 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 ${VARIANTS[props.variant || "primary"]} ${props.className ? props.className : ""} `}
    >
      <span className={` flex items-center justify-center gap-2`}>
        {props.message}
        {props.icon}
      </span>
    </button>
  );
};

export default Button;
