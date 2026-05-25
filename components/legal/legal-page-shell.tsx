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
