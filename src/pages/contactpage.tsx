import { contactMethods } from '../data/contact';

// ContactPage presents the available contact channels and a future custom message section.
export function ContactPage() {
  return (
    <div className="bg-slate-950 min-h-screen px-6 py-20 text-slate-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-emerald-400 uppercase tracking-[0.3em] text-sm font-semibold mb-3">
            Contact
          </p>
          <h1 className="text-5xl md:text-6xl font-bold">Let's Build Together</h1>
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
            Choose the best way to reach me and start your next project with confidence.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {contactMethods.map((method) => (
            <a
              key={method.id}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-3xl bg-slate-900 border border-slate-800 p-8 transition duration-300 ease-out hover:-translate-y-1 hover:border-emerald-500 hover:bg-slate-800 hover:shadow-lg hover:shadow-emerald-500/15"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-400 font-semibold mb-3">
                {method.subtitle}
              </p>
              <h2 className="text-2xl font-bold text-white mb-4">{method.title}</h2>
              <p className="text-slate-300 mb-6">{method.description}</p>
              <p className="text-emerald-300 font-medium">{method.label}</p>
            </a>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-slate-900 border border-slate-800 p-10 text-slate-300 transition duration-300 hover:border-emerald-500 hover:bg-slate-800 hover:shadow-lg hover:shadow-emerald-500/10">
          <h2 className="text-2xl font-bold text-white mb-4">Want to add a custom message?</h2>
          <p className="mb-6">
            You can update this section with a contact form, a scheduling link, or more detailed instructions in the future.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-slate-800 p-6 transition duration-300 hover:bg-slate-700">
              <p className="text-slate-300">Email</p>
              <p className="text-emerald-300 font-semibold">hello@yourdomain.com</p>
            </div>
            <div className="rounded-2xl bg-slate-800 p-6 transition duration-300 hover:bg-slate-700">
              <p className="text-slate-300">Response Time</p>
              <p className="text-emerald-300 font-semibold">Typically 24-48 hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
