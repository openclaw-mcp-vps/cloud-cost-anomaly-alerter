export default function Home() {
  const faqs = [
    {
      q: "Which cloud providers are supported?",
      a: "AWS, Google Cloud Platform, and Microsoft Azure are all supported out of the box."
    },
    {
      q: "How quickly will I be alerted?",
      a: "Our background jobs poll billing APIs every hour, so you'll know about anomalies within hours — not at the end of the month."
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes. Cancel anytime from your billing portal with no questions asked and no hidden fees."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Cloud Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Instant alerts for unexpected{" "}
          <span className="text-[#58a6ff]">cloud bill spikes</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Real-time monitoring that catches cloud cost anomalies within hours, not weeks.
          Connect AWS, GCP, or Azure and sleep soundly knowing your bill won&apos;t surprise you.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Start Monitoring — $39/mo
        </a>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-[#8b949e]">
          {[
            ["⚡", "Hourly anomaly checks"],
            ["🔔", "Email, Slack & webhooks"],
            ["☁️", "AWS · GCP · Azure"]
          ].map(([icon, label]) => (
            <div key={label} className="flex items-center justify-center gap-2 bg-[#161b22] border border-[#30363d] rounded-lg px-4 py-3">
              <span>{icon}</span>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center">
          <p className="text-xs uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$39</p>
          <p className="text-[#8b949e] text-sm mb-6">per month · cancel anytime</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Connect up to 5 cloud accounts",
              "Hourly cost anomaly detection",
              "Email, Slack & webhook alerts",
              "Cost dashboard & trend charts",
              "Custom alert thresholds",
              "Priority email support"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#484f58]">
        © {new Date().getFullYear()} Cloud Cost Anomaly Alerter. All rights reserved.
      </footer>
    </main>
  );
}
