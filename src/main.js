import './styles.css'
import { APP_DISPLAY_VERSION } from './version.js'

const artifacts = [
  {
    title: 'Investor one-pager',
    href: '/artifacts/flooring-quote-system-one-pager.md',
    type: 'Business concept',
    description: 'The concise product narrative: problem, users, value proposition, monetisation, and positioning.',
  },
  {
    title: 'Technical architecture',
    href: '/artifacts/technical-architecture.md',
    type: 'System overview',
    description: 'The connected system model covering customer intake, project records, spatial processing, quoting, ordering, and AWS deployment.',
  },
  {
    title: 'Competitive scan',
    href: '/artifacts/competitive-scan.md',
    type: 'Market research',
    description: 'Why the wedge is not another generic flooring visualizer, and where local installer quote automation could win.',
  },
  {
    title: 'Interconnected architecture map',
    href: '/artifacts/flooring-quote-architecture.html',
    type: 'Visual diagram',
    description: 'A system map showing the project record as the source of truth between customer, installer, spatial AI, catalogue, quote, and ordering workflows.',
  },
  {
    title: 'Desktop product mockups',
    href: '/artifacts/flooring-quote-app-mockups.html',
    type: 'Screen concepts',
    description: 'A wider product board for customer intake, product selection, installer review, and approved quote order pack.',
  },
  {
    title: 'Mobile product mockups',
    href: '/artifacts/flooring-quote-mobile-mockups.html',
    type: 'Phone concepts',
    description: 'Cleaner phone-first screens for the same customer-to-installer quote workflow.',
  },
  {
    title: 'Original document export',
    href: '/artifacts/Flooring%20Quote%20Automation%20System.docx',
    type: 'Document',
    description: 'The original Word document export for sharing or further editing outside the web page.',
  },
]

document.querySelector('#app').innerHTML = `
  <main>
    <section class="hero">
      <nav class="nav" aria-label="Project navigation">
        <a class="brand" href="#top" aria-label="Floor Quotes home">
          <span class="mark"></span>
          <span>Floor Quotes</span>
        </a>
        <div class="nav-links">
          <a href="#motivation">Motivation</a>
          <a href="#artifacts">Artifacts</a>
          <a href="#mvp">MVP</a>
        </div>
      </nav>

      <div class="hero-grid" id="top">
        <div class="hero-copy">
          <p class="eyebrow">Quote-ready spatial commerce for flooring installers</p>
          <h1>Help flooring businesses turn vague enquiries into quote-ready jobs.</h1>
          <p class="lead">
            Floor Quotes explores a practical sales and operations system for independent flooring installers:
            customers share room evidence and product preferences, while installers receive structured leads,
            quote assumptions, order packs, and job-planning context.
          </p>
          <div class="hero-actions">
            <a class="button primary" href="#artifacts">View artifacts</a>
            <a class="button secondary" href="/artifacts/flooring-quote-mobile-mockups.html">Open mobile mockups</a>
          </div>
        </div>

        <aside class="hero-panel" aria-label="Product workflow summary">
          <div class="workflow-row active">
            <span>01</span>
            <div>
              <strong>Customer intake</strong>
              <p>Room details, photos, budget, product intent.</p>
            </div>
          </div>
          <div class="workflow-row">
            <span>02</span>
            <div>
              <strong>Structured project record</strong>
              <p>Measurements, confidence, selected products, assumptions.</p>
            </div>
          </div>
          <div class="workflow-row">
            <span>03</span>
            <div>
              <strong>Installer review</strong>
              <p>Manual checks, quote range, exclusions, follow-up notes.</p>
            </div>
          </div>
          <div class="workflow-row">
            <span>04</span>
            <div>
              <strong>Order and job plan</strong>
              <p>Approved quote becomes materials, deposit, schedule.</p>
            </div>
          </div>
        </aside>
      </div>
    </section>

    <section class="motivation" id="motivation">
      <div class="section-heading">
        <p class="eyebrow">Motivation</p>
        <h2>The opportunity is not another flooring visualizer.</h2>
      </div>
      <div class="motivation-grid">
        <article>
          <h3>Customers need confidence before they call.</h3>
          <p>
            Flooring is expensive, visual, and hard to estimate. Customers often delay because they cannot picture
            the result, compare products clearly, or understand whether a rough price is realistic.
          </p>
        </article>
        <article>
          <h3>Installers need better qualified leads.</h3>
          <p>
            Small flooring businesses spend time on incomplete enquiries, manual estimates, and site visits that
            could have been qualified earlier with better room evidence and product intent.
          </p>
        </article>
        <article>
          <h3>The wedge is quoting and operations.</h3>
          <p>
            The product becomes useful when visual confidence connects to measurement confidence, pricing rules,
            installer approval, supplier ordering, and job planning.
          </p>
        </article>
      </div>
    </section>

    <section class="artifacts" id="artifacts">
      <div class="section-heading">
        <p class="eyebrow">Written and visual artifacts</p>
        <h2>Project materials</h2>
      </div>
      <div class="artifact-grid">
        ${artifacts.map((artifact) => `
          <a class="artifact-card" href="${artifact.href}">
            <span>${artifact.type}</span>
            <strong>${artifact.title}</strong>
            <p>${artifact.description}</p>
          </a>
        `).join('')}
      </div>
    </section>

    <section class="mvp" id="mvp">
      <div>
        <p class="eyebrow">MVP shape</p>
        <h2>Start web-first, prove the workflow, add richer spatial capture later.</h2>
      </div>
      <div class="mvp-list">
        <div><strong>Now</strong><span>Room photo upload, manual dimensions, catalogue selection, indicative quote range.</span></div>
        <div><strong>Next</strong><span>Installer dashboard, quote approval, material order pack, PDF/email output.</span></div>
        <div><strong>Later</strong><span>RoomPlan capture, AI-assisted measurements, floor-plan parsing, supplier integrations.</span></div>
      </div>
    </section>

    <footer>
      <span>Parnell Systems</span>
      <span>${APP_DISPLAY_VERSION}</span>
    </footer>
  </main>
`
