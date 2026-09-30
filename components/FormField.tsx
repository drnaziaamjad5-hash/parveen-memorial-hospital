type Props = {
  id: string;
  label: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  hint?: string;
  className?: string;
  children: (describedBy: string | undefined) => React.ReactNode;
};

/** Label + control + inline error/hint, wired for screen readers. */
export default function FormField({ id, label, required, optional, error, hint, className = "", children }: Props) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className={className}>
      <label htmlFor={id} className="field-label">
        {label}
        {required && (
          <span className="ml-0.5 text-emergency" aria-hidden="true">
            *
          </span>
        )}
        {optional && <span className="ml-1.5 text-xs font-normal text-muted">(optional)</span>}
      </label>
      {children(describedBy)}
      {hint && !error && (
        <p id={hintId} className="mt-1.5 text-sm text-muted">
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} role="alert" className="mt-1.5 text-sm font-medium text-emergency">
          {error}
        </p>
      )}
    </div>
  );
}
