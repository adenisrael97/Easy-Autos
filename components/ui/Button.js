"use client";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  icon,
  className = "",
  type = "button",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-page cursor-pointer";

  const variants = {
    primary:
      "bg-accent text-on-accent hover:bg-accent-hover focus-visible:ring-accent border border-accent shadow-soft hover:scale-105 active:scale-100",
    secondary:
      "bg-elevated text-fg hover:bg-strong focus-visible:ring-line border border-line hover:scale-105 active:scale-100",
    outline:
      "bg-transparent text-accent border border-accent hover:bg-accent hover:text-on-accent focus-visible:ring-accent hover:scale-105 active:scale-100",
    ghost:
      "bg-transparent text-soft hover:text-fg hover:bg-elevated focus-visible:ring-line active:scale-100",
    surface:
      "bg-surface text-fg hover:bg-elevated focus-visible:ring-line border border-line shadow-soft hover:scale-105 active:scale-100",
    danger:
      "bg-bad text-white hover:opacity-90 focus-visible:ring-bad hover:scale-105 active:scale-100",
    success:
      "bg-ok text-white hover:opacity-90 focus-visible:ring-ok border border-ok hover:scale-105 active:scale-100",
  };

  const sizes = {
    xs: "px-3 py-1 text-xs",
    sm: "px-4 py-1.5 text-sm",
    md: "px-5 py-2 text-sm",
    lg: "px-7 py-3 text-base",
    xl: "px-9 py-4 text-lg",
  };

  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      className={`${base} ${variants[variant]} ${sizes[size]} ${
        isDisabled ? "opacity-60 cursor-not-allowed pointer-events-none" : ""
      } ${className}`}
      disabled={isDisabled}
      {...props}
    >
      {loading ? (
        <svg
          className="animate-spin h-4 w-4 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
          />
        </svg>
      ) : (
        icon && <span className="shrink-0">{icon}</span>
      )}
      {children}
    </button>
  );
}
