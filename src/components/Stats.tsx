type StatCardProps = {
  label: string;
  value: string;
  trend?: "up" | "down" | "flat";
};

function StatCard({ label, value, trend = "flat" }: StatCardProps) {
  const trendColor = trend === "up" ? "text-emerald-600" : trend === "down" ? "text-rose-600" : "text-gray-500";
  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-4 bg-white/60 dark:bg-gray-900/50">
      <p className="text-xs uppercase tracking-wide text-gray-500">{label}</p>
      <div className="mt-2 flex items-end justify-between">
        <p className="text-2xl font-semibold text-gray-900 dark:text-white">{value}</p>
        <span className={`text-xs ${trendColor}`}>{trend === "up" ? "▲" : trend === "down" ? "▼" : "•"}</span>
      </div>
      <div className="mt-3 flex items-end gap-1 h-8">
        {[4, 8, 12, 6, 14, 10, 16, 9, 18, 12].map((h, i) => (
          <div key={i} className="w-1.5 rounded-sm bg-sky-500/70" style={{ height: `${h * 2}px` }} />
        ))}
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="mx-auto max-w-6xl px-4 mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Dashboards Built" value="12 +" trend="up" />
        <StatCard label="Datasets Cleaned" value="14 +" trend="up" />
        <StatCard label="ETL Pipelines" value="8 +" trend="up" />
        <StatCard label="Stakeholders" value="5 +" trend="up" />
      </div>
    </section>
  );
} 