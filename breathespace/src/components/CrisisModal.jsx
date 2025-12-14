

export default function CrisisModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const crisisResources = [
    {
      name: "988 Suicide & Crisis Lifeline",
      phone: "988",
      description: "24/7 free and confidential support",
      action: "tel:988"
    },
    {
      name: "Crisis Text Line",
      phone: "Text HOME to 741741",
      description: "Free 24/7 text support",
      action: "sms:741741&body=HOME"
    },
    {
      name: "SAMHSA National Helpline",
      phone: "1-800-662-4357",
      description: "Treatment referral and information",
      action: "tel:18006624357"
    },
    {
      name: "The Trevor Project (LGBTQ+)",
      phone: "1-866-488-7386",
      description: "Crisis support for LGBTQ+ youth",
      action: "tel:18664887386"
    }
  ];

  const internationalResources = [
    {
      country: "UK",
      name: "Samaritans",
      phone: "116 123",
      action: "tel:116123"
    },
    {
      country: "UK",
      name: "Shout",
      phone: "Text SHOUT to 85258",
      action: "sms:85258&body=SHOUT"
    },
    {
      country: "Canada",
      name: "Talk Suicide Canada",
      phone: "1-833-456-4566",
      action: "tel:18334564566"
    },
    {
      country: "Australia",
      name: "Lifeline",
      phone: "13 11 14",
      action: "tel:131114"
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-base border-4 border-[#dc2626] rounded-none">

        {/* Header */}
        <div className="sticky top-0 bg-[#dc2626] p-6 flex justify-between items-center">
          <h2 className="text-3xl font-black text-white text-toon">
            🆘 Crisis Resources
          </h2>
          <button
            onClick={onClose}
            className="text-white hover:scale-110 transition-transform"
            aria-label="Close"
          >
            <h1>X</h1>
          </button>
        </div>

        {/* Emergency Banner */}
        <div className="bg-[#7f1d1d] p-6 text-white">
          <p className="text-lg font-bold mb-2">
            If you're in immediate danger, call emergency services:
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="tel:911" className="px-6 py-3 bg-white text-[#dc2626] font-black rounded-lg hover:scale-105 transition">
              🚨 US: 911
            </a>
            <a href="tel:999" className="px-6 py-3 bg-white text-[#dc2626] font-black rounded-lg hover:scale-105 transition">
              🚨 UK: 999
            </a>
            <a href="tel:000" className="px-6 py-3 bg-white text-[#dc2626] font-black rounded-lg hover:scale-105 transition">
              🚨 AU: 000
            </a>
          </div>
        </div>

        {/* Main Crisis Lines */}
        <div className="p-6 space-y-4">
          <h3 className="text-2xl font-bold text-primary mb-4 text-toon">
            24/7 Crisis Support (US)
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {crisisResources.map((resource, index) => (
              <div
                key={index}
                className="bg-light p-6 border-l-4 border-[#dc2626] hover:bg-base transition"
              >
                <h4 className="text-xl font-bold text-primary mb-2">
                  {resource.name}
                </h4>
                <p className="text-muted text-sm mb-3">
                  {resource.description}
                </p>
                <a
                  href={resource.action}
                  className="inline-block px-6 py-3 bg-primary hover:bg-primary-hover text-white font-bold rounded-lg transition border-2 border-black"
                >
                  {resource.phone}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* International Resources */}
        <div className="p-6 bg-light space-y-4">
          <h3 className="text-2xl font-bold text-primary mb-4 text-toon">
            International Support
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {internationalResources.map((resource, index) => (
              <div
                key={index}
                className="bg-base p-4 border-l-4 border-primary hover:bg-dark transition"
              >
                <div className="text-sm text-muted mb-1">{resource.country}</div>
                <h4 className="text-lg font-bold text-primary mb-2">
                  {resource.name}
                </h4>
                <a
                  href={resource.action}
                  className="inline-block px-4 py-2 bg-primary hover:bg-primary-hover text-white font-bold rounded-lg transition text-sm"
                >
                  {resource.phone}
                </a>
              </div>
            ))}
          </div>

          <a
            href="https://findahelpline.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-primary hover:text-primary-hover underline mt-4"
          >
            Find more international helplines →
          </a>
        </div>

        {/* Additional Resources */}
        <div className="p-6 space-y-4">
          <h3 className="text-2xl font-bold text-primary mb-4 text-toon">
            Additional Support
          </h3>
          <div className="space-y-3">
            <a
              href="https://www.nami.org/help"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-light border-l-4 border-primary hover:bg-base transition"
            >
              <h4 className="font-bold text-primary mb-1">
                NAMI (National Alliance on Mental Illness)
              </h4>
              <p className="text-sm text-muted">
                Education, support groups, and resources
              </p>
            </a>

            <a
              href="https://www.mentalhealth.gov/get-help/immediate-help"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-light border-l-4 border-primary hover:bg-base transition"
            >
              <h4 className="font-bold text-primary mb-1">MentalHealth.gov</h4>
              <p className="text-sm text-muted">
                Government mental health resources
              </p>
            </a>

            <a
              href="https://www.crisistextline.org"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-light border-l-4 border-primary hover:bg-base transition"
            >
              <h4 className="font-bold text-primary mb-1">
                Crisis Text Line Resources
              </h4>
              <p className="text-sm text-muted">
                Learn about crisis support and mental health
              </p>
            </a>
          </div>
        </div>

        {/* Safety Message */}
        <div className="p-6 bg-base border-t-2 border-border">
          <p className="text-muted text-center">
            <strong className="text-primary">You are not alone.</strong> These
            services are free, confidential, and available 24/7. Reaching out is
            a sign of strength.
          </p>
        </div>

      </div>
    </div>
  );
}