type AdSlotProps = {
  label: string;
};

export function AdSlot({ label }: AdSlotProps) {
  return (
    <div
      className="rounded-[1.75rem] border px-6 py-8 text-center text-sm"
      style={{ borderColor: "var(--border)", background: "var(--surface)" }}
    >
      <p className="eyebrow mb-3">Monetization placement</p>
      <p className="font-semibold">{label}</p>
      <p className="mt-2 leading-7" style={{ color: "var(--muted)" }}>
        Replace this placeholder with a policy-compliant Google AdSense, sponsor, or affiliate component after approval.
      </p>
    </div>
  );
}
