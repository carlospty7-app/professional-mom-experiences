import { IconAudience, IconHeart, IconUsers } from "./icons";

const STATS = [
  {
    icon: IconUsers,
    value: "3",
    label: "EXPERIENCIAS",
  },
  {
    icon: IconAudience,
    value: "HASTA 100",
    label: "PARTICIPANTES",
  },
  {
    icon: IconHeart,
    value: "ENFOQUE PRÁCTICO",
    label: "+ BIENESTAR",
  },
];

export default function StatsBar() {
  return (
    <section className="relative z-10 mx-auto -mt-8 max-w-6xl px-5 sm:-mt-10 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-4 rounded-3xl bg-white p-5 shadow-xl shadow-pme-blue-dark/10 sm:grid-cols-3 sm:gap-3 sm:p-6">
        {STATS.map(({ icon: Icon, value, label }) => (
          <div
            key={label}
            className="flex items-center gap-4 rounded-2xl px-3 py-3 sm:flex-col sm:text-center sm:gap-2 sm:px-2"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pme-lavender text-pme-magenta">
              <Icon className="h-6 w-6" />
            </span>
            <div>
              <p className="font-heading text-lg font-extrabold leading-tight text-pme-blue-dark sm:text-xl">
                {value}
              </p>
              <p className="text-xs font-semibold tracking-wide text-pme-text/70">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
