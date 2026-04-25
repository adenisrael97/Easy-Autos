export default function Badge({ children, variant = "default", className = "" }) {
  const variants = {
    default: "bg-elevated text-soft border border-line",
    primary: "bg-accent-soft text-accent border border-accent/30",
    success: "bg-ok/15 text-ok border border-ok/30",
    danger: "bg-bad/15 text-bad border border-bad/30",
    info: "bg-note/15 text-note border border-note/30",
    neutral: "bg-strong text-fg border border-line-strong",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium tracking-wide ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
