import Link from "next/link";

type LegalPageShellProps = {
  title: string;
  lead?: string;
  children: React.ReactNode;
};

export function LegalPageShell({ title, lead, children }: LegalPageShellProps) {
  return (
    <main className="legal-page">
      <div className="legal-container">
        <p className="legal-back-row">
          <Link href="/" className="legal-back-link">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M10 12L6 8L10 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            На главную
          </Link>
        </p>
        <h1 className="legal-title">{title}</h1>
        {lead ? <p className="legal-lead">{lead}</p> : null}
        {children}
      </div>
    </main>
  );
}
