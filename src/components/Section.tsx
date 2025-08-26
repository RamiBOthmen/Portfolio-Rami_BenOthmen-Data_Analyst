type SectionProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function Section({ title, subtitle, children }: SectionProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 mt-12">
      <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h2>
      {subtitle && (
        <p className="mt-1 text-gray-600 dark:text-gray-300">{subtitle}</p>
      )}
      <div className="mt-6">{children}</div>
    </section>
  );
} 