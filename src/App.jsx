import { Phone, Mail, MapPin } from "lucide-react";

function App() {
  return (
    <main className="p-6 max-w-4xl mx-auto space-y-10">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Vishal Paul and Associates</h1>
        <p className="text-lg">Chartered Accountancy Services in Shillong</p>
        <p className="text-sm text-gray-600">
          C/o Kankan Deb, Lower Mawprem, Opposite Persara School, Shillong – 793002
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {["Income Tax Filing", "GST Registration & Filing", "Audit Services", "Business Consultancy", "Accounting & Bookkeeping"].map((service, i) => (
            <div key={i} className="rounded-2xl shadow p-4 text-center font-medium bg-white">{service}</div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <div className="space-y-2 text-sm">
          <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> <a href="tel:6033297957">6033297957</a></p>
          <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> <a href="mailto:vishalpaul534@gmail.com">vishalpaul534@gmail.com</a></p>
          <p className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Shillong – 793002</p>
        </div>
        <div className="mt-4 space-x-4">
          <a className="bg-green-500 text-white px-4 py-2 rounded-xl" href="https://wa.me/916033297957" target="_blank">WhatsApp Us</a>
          <a className="bg-gray-500 text-white px-4 py-2 rounded-xl" href="mailto:vishalpaul534@gmail.com">Email Us</a>
        </div>
      </section>
      <section className="pt-6">
        <iframe
          title="Map"
          src="https://www.google.com/maps?q=Lower+Mawprem,+Shillong,+793002&output=embed"
          width="100%"
          height="300"
          className="rounded-2xl border"
          loading="lazy"
        ></iframe>
      </section>
    </main>
  );
}

export default App;
