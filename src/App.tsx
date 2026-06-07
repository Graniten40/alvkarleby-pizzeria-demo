import "./App.css";

type MenuItem = {
  name: string;
  description: string;
  price: string;
};

type MenuCategory = {
  title: string;
  items: MenuItem[];
};

const menuCategories: MenuCategory[] = [
  {
    title: "Pizza",
    items: [
      {
        name: "Margherita",
        description: "Tomatsås, ost och oregano",
        price: "95 kr",
      },
      {
        name: "Vesuvio",
        description: "Tomatsås, ost och skinka",
        price: "105 kr",
      },
      {
        name: "Kebabpizza",
        description: "Tomatsås, ost, kebabkött, lök, feferoni och sås",
        price: "125 kr",
      },
      {
        name: "Älvkarleby Special",
        description: "Oxfilé, champinjoner, bearnaisesås och färska tomater",
        price: "139 kr",
      },
    ],
  },
  {
    title: "Kebab",
    items: [
      {
        name: "Kebab med bröd",
        description: "Kebabkött, sallad, tomat, lök och valfri sås",
        price: "95 kr",
      },
      {
        name: "Kebabrulle",
        description: "Kebabkött, grönsaker och sås i hembakat bröd",
        price: "115 kr",
      },
      {
        name: "Kebabtallrik",
        description: "Kebabkött, pommes, sallad och valfri sås",
        price: "125 kr",
      },
    ],
  },
  {
    title: "Sallad",
    items: [
      {
        name: "Kycklingsallad",
        description: "Kyckling, sallad, gurka, tomat, majs och dressing",
        price: "115 kr",
      },
      {
        name: "Kebabsallad",
        description: "Kebabkött, sallad, tomat, lök, feferoni och sås",
        price: "115 kr",
      },
      {
        name: "Grekisk sallad",
        description: "Fetaost, oliver, rödlök, tomat, gurka och dressing",
        price: "109 kr",
      },
    ],
  },
  {
    title: "Dryck",
    items: [
      {
        name: "Läsk 33 cl",
        description: "Coca-Cola, Fanta, Sprite eller liknande",
        price: "20 kr",
      },
      {
        name: "Läsk 50 cl",
        description: "Coca-Cola, Fanta, Sprite eller liknande",
        price: "30 kr",
      },
      {
        name: "Mineralvatten",
        description: "Naturell eller citron",
        price: "25 kr",
      },
    ],
  },
];

function App() {
  return (
    <main>
      <section className="hero">
        <nav className="navbar">
          <div className="logo">Älvkarleby Pizzeria</div>

          <div className="nav-links">
            <a href="#menu">Meny</a>
            <a href="#hours">Öppettider</a>
            <a href="#contact">Kontakt</a>
          </div>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">Demo för restaurang / pizzeria</p>

          <h1>Modern digital meny för Älvkarleby Pizzeria</h1>

          <p className="hero-text">
            En enkel, snabb och mobilanpassad landningssida där kunder enkelt
            kan se menyn, öppettiderna och kontaktuppgifter direkt i mobilen.
          </p>

          <div className="hero-buttons">
            <a href="#menu" className="primary-button">
              Se meny
            </a>

            <a href="#contact" className="secondary-button">
              Kontakta oss
            </a>
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div>
          <p className="section-label">Enkel demo</p>
          <h2>En snygg pizzeriasida utan ordersystem</h2>
        </div>

        <p>
          Den här demon visar hur en enkel hemsida kan se ut innan man bygger
          vidare med onlinebeställning, betalning eller app-notiser.
        </p>
      </section>

      <section id="menu" className="menu-section">
        <div className="section-header">
          <p className="section-label">Digital meny</p>
          <h2>Vår meny</h2>
          <p>
            Kategorierna gör det enkelt för kunden att snabbt hitta pizza,
            kebab, sallad eller dryck.
          </p>
        </div>

        <div className="menu-grid">
          {menuCategories.map((category) => (
            <article className="menu-card" key={category.title}>
              <h3>{category.title}</h3>

              <div className="menu-items">
                {category.items.map((item) => (
                  <div className="menu-item" key={item.name}>
                    <div>
                      <h4>{item.name}</h4>
                      <p>{item.description}</p>
                    </div>

                    <strong>{item.price}</strong>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="info-section">
        <article id="hours" className="info-card">
          <p className="section-label">Öppettider</p>
          <h2>Välkommen in</h2>

          <ul className="hours-list">
            <li>
              <span>Måndag - Torsdag</span>
              <strong>11:00 - 21:00</strong>
            </li>
            <li>
              <span>Fredag</span>
              <strong>11:00 - 22:00</strong>
            </li>
            <li>
              <span>Lördag</span>
              <strong>12:00 - 22:00</strong>
            </li>
            <li>
              <span>Söndag</span>
              <strong>12:00 - 21:00</strong>
            </li>
          </ul>
        </article>

        <article id="contact" className="info-card dark-card">
          <p className="section-label">Kontakt</p>
          <h2>Älvkarleby Pizzeria</h2>

          <div className="contact-list">
            <p>
              <span>Telefon</span>
              <strong>026-123 456</strong>
            </p>

            <p>
              <span>E-post</span>
              <strong>info@alvkarlebypizzeria.se</strong>
            </p>

            <p>
              <span>Adress</span>
              <strong>Centralvägen 1, 814 30 Älvkarleby</strong>
            </p>
          </div>
        </article>
      </section>

      <footer>
        <p>Demo skapad av Graniten Studio</p>
        <p>Endast visning — inget ordersystem är aktivt.</p>
      </footer>
    </main>
  );
}

export default App;