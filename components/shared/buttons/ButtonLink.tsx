import Link from "next/link";

const VARIANTS = {
  primary: "btn-primary",
  "primary-empty": "btn-primary-empty",
  "primary-rounded": "btn-primary-rounded text-white",
  ghost: "",
};

type Props = {
  icon?: React.ReactNode;
  message?: string;
  link: string;
  target?: string;
  rel?: string;
  className?: string;
  variant?: "primary" | "primary-empty" | "primary-rounded" | "ghost";
  ariaLabel?: string;
  ariaCurrent?: "page";
};

export default function ButtonLink({
  icon,
  message,
  link,
  target,
  rel,
  className,
  variant = "ghost",
  ariaLabel,
  ariaCurrent,
}: Props) {
  return (
    <Link
      href={link}
      target={target}
      rel={target === "_blank" ? (rel ?? "noopener noreferrer") : rel}
      aria-label={ariaLabel}
      aria-current={ariaCurrent}
      className={`flex gap-4 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${VARIANTS[variant]} ${className ?? ""} `}
    >
      {message} {icon}
    </Link>
  );
}
