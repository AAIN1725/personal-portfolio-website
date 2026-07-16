import portfolio from '../../data/portfolio';

export function Contact() {
  return (
    <section id="contact" className="bg-blue-900 py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-white">Contact</h2>
        <p className="mt-3 max-w-2xl text-blue-100">
          I am open to Java backend, Python development, REST API, and microservices roles.
        </p>
        <div className="mt-6">
          <a
            href={`mailto:${portfolio.email}`}
            className="inline-flex rounded-md bg-white px-5 py-3 text-sm font-semibold text-blue-900 transition hover:bg-blue-100"
          >
            {portfolio.email}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
