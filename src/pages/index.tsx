import Head from 'next/head';

export default function HomePage() {
  return (
    <div className="bg-white">
      <Head>
        <title>Betonstaal E-commerce</title>
        <meta
          name="description"
          content="The largest assortment of reinforcement steel in the Netherlands."
        />
      </Head>

      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">Betonstaal</div>
          <nav>
            <a href="/producten" className="px-3">
              Producten
            </a>
            <a href="/calculator" className="px-3">
              Calculator
            </a>
            <a href="/over-ons" className="px-3">
              Over Ons
            </a>
            <a href="/nieuws" className="px-3">
              Nieuws
            </a>
            <a href="/contact" className="px-3">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-gray-200 h-96 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800">
              Het grootste assortiment betonstaal van Nederland
            </h1>
            <p className="text-lg text-gray-600 mt-2">
              Korte levertijden | Op maat geleverd | Volgens KOMO/Kiwa en
              Eurocode
            </p>
            <div className="mt-4">
              <a
                href="/producten"
                className="bg-blue-500 text-white px-6 py-2 rounded-md"
              >
                Bekijk onze producten
              </a>
              <a
                href="/offerte"
                className="border border-blue-500 text-blue-500 px-6 py-2 rounded-md ml-4"
              >
                Vraag een offerte aan
              </a>
            </div>
          </div>
        </section>

        {/* Featured Product Categories */}
        <section className="py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold">Product Categorieën</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="border p-4">Bouwstaalmatten</div>
              <div className="border p-4">Betonijzer</div>
              <div className="border p-4">Supportliggers</div>
            </div>
          </div>
        </section>

        {/* Calculator Snippet */}
        <section className="bg-blue-500 text-white py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold">Calculator</h2>
            <p className="mt-2">
              Bereken handig hoeveel bouwstaalmatten nodig zijn.
            </p>
          </div>
        </section>

        {/* Latest News */}
        <section className="py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold">Laatste Nieuws</h2>
            {/* Placeholder for news items */}
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold">Klantbeoordelingen</h2>
            {/* Placeholder for testimonials */}
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Betonstaal. Alle rechten voorbehouden.</p>
        </div>
      </footer>
    </div>
  );
}
