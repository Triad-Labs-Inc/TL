'use client';

import { useEffect } from 'react';
import './globals.css';

export default function Home() {
  useEffect(() => {
    document.querySelectorAll('.reveal').forEach((el) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('vis');
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
    });
  }, []);

  return (
    <>
      {/* NAV */}
      <nav>
        <a className="nav-logo" href="#">
          <div className="logo-mark">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <polygon points="12,2 6.5,11 17.5,11" fill="#1a6b47"/>
              <polygon points="7,12.5 2,21.5 11.5,21.5" fill="#1a6b47"/>
              <polygon points="17,12.5 12.5,21.5 22,21.5" fill="#1a6b47"/>
            </svg>
          </div>
          Triad Labs
        </a>
        <ul className="nav-links">
          <li><a href="#how">How we work</a></li>
          <li><a href="#what-you-get">What you get</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#contact" className="nav-cta">Work with us</a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div>
            <div className="hero-eyebrow">AI-Native Studio</div>
            <h1 className="hero-head">
              <span className="ln"><span className="wd">We make</span></span>
              <span className="ln"><span className="wd">companies</span></span>
              <span className="ln"><span className="wd"><em>AI native.</em></span></span>
            </h1>
            <p className="hero-sub">
              Triad Labs embeds autonomous AI systems across your organisation — so your team moves faster, thinks bigger, and operates at a level that wasn&apos;t possible before.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn-primary">Start the conversation</a>
              <a href="#how" className="btn-text">How it works <span className="arr">→</span></a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hv-card">
              <div className="hv-top">
                <span className="hv-label">Organisation — Agent Network</span>
                <span className="hv-status"><span className="hv-dot"></span>Active</span>
              </div>
              <div className="agent-nodes">
                <div className="an-row">
                  <div className="an-icon orch">ORC</div>
                  <div className="an-body">
                    <div className="an-name">Orchestrator</div>
                    <div className="an-task">Routing tasks across team</div>
                  </div>
                  <div className="an-bar"><div className="an-fill"></div></div>
                </div>
                <div className="an-row">
                  <div className="an-icon plan">PLN</div>
                  <div className="an-body">
                    <div className="an-name">Planner</div>
                    <div className="an-task">BD digest · proposal queue</div>
                  </div>
                  <div className="an-bar"><div className="an-fill"></div></div>
                </div>
                <div className="an-row">
                  <div className="an-icon exec">EXE</div>
                  <div className="an-body">
                    <div className="an-name">Executor × 4</div>
                    <div className="an-task">Research · drafts · CRM sync</div>
                  </div>
                  <div className="an-bar"><div className="an-fill"></div></div>
                </div>
                <div className="an-row">
                  <div className="an-icon mem">MEM</div>
                  <div className="an-body">
                    <div className="an-name">Memory Layer</div>
                    <div className="an-task">Context · brand · SOPs</div>
                  </div>
                  <div className="an-bar"><div className="an-fill"></div></div>
                </div>
              </div>
              <div className="hv-footer">
                <div className="hv-stat"><span className="hv-stat-n">24/7</span><span className="hv-stat-l">Always on</span></div>
                <div className="hv-stat"><span className="hv-stat-n">~15h</span><span className="hv-stat-l">Saved / person / wk</span></div>
                <div className="hv-stat"><span className="hv-stat-n">Flat</span><span className="hv-stat-l">Per-org pricing</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="strip">
        <div className="strip-track">
          <span className="strip-item">Autonomous Agents</span>
          <span className="strip-item">AI Native Transformation</span>
          <span className="strip-item">Multi-Agent Systems</span>
          <span className="strip-item">Shared Agent Libraries</span>
          <span className="strip-item">Workflow Automation</span>
          <span className="strip-item">Future Ready</span>
          <span className="strip-item">Autonomous Agents</span>
          <span className="strip-item">AI Native Transformation</span>
          <span className="strip-item">Multi-Agent Systems</span>
          <span className="strip-item">Shared Agent Libraries</span>
          <span className="strip-item">Workflow Automation</span>
          <span className="strip-item">Future Ready</span>
        </div>
      </div>

      {/* POSITIONING */}
      <section className="sec pos-sec" id="about">
        <div className="sec-inner">
          <div className="pos-grid reveal">
            <div className="pos-copy">
              <div className="s-label">Why it matters</div>
              <h2 className="s-head">Most companies are using AI.<br />Few are <em>built on it.</em></h2>
              <div style={{ marginTop: '2rem' }}>
                <p>There&apos;s a difference between having a ChatGPT subscription and having AI woven into how your organisation actually operates — how it thinks, moves, and makes decisions.</p>
                <p>We close that gap. Triad Labs designs and deploys <strong>autonomous agent systems</strong> that become the connective tissue of your company — handling the cognitive overhead so your people can focus on the work that matters.</p>
                <p>The result isn&apos;t just efficiency. It&apos;s a <strong>fundamentally different way of operating</strong> — one your competitors won&apos;t catch up to easily.</p>
              </div>
            </div>
            <div className="pos-right">
              <div className="pos-item">
                <div className="pi-num">01</div>
                <div className="pi-title">From tool users to AI-native teams</div>
                <div className="pi-desc">Every person gets their own orchestrator and a library of agents built for their role — not generic, not off-the-shelf.</div>
              </div>
              <div className="pos-item">
                <div className="pi-num">02</div>
                <div className="pi-title">Shared intelligence across the org</div>
                <div className="pi-desc">Brand, legal, ops, and revenue agents live in a shared library — built once, available to everyone, improving over time.</div>
              </div>
              <div className="pos-item">
                <div className="pi-num">03</div>
                <div className="pi-title">Systems that compound</div>
                <div className="pi-desc">Agents learn from every run. The longer they operate, the more context they accumulate — and the more useful they become.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="sec how-sec" id="how">
        <div className="sec-inner">
          <div className="reveal">
            <div className="s-label">How we work</div>
            <h2 className="s-head">Three months.<br />Permanently transformed.</h2>
          </div>
          <div className="how-grid reveal">
            <div className="how-card">
              <span className="hc-num">Month 01 — Build</span>
              <h3 className="hc-title">Map, configure,<br />go live.</h3>
              <p className="hc-desc">We map your workflows, configure machines remotely, and get your first agents live within the first week. Shared library deployed. Key roles up and running.</p>
              <div className="hc-tags">
                <span className="hc-tag">Workflow mapping</span>
                <span className="hc-tag">Machine config</span>
                <span className="hc-tag">Agent library</span>
                <span className="hc-tag">Live in week 1</span>
              </div>
            </div>
            <div className="how-card">
              <span className="hc-num">Month 02 — Scale</span>
              <h3 className="hc-title">Full team.<br />Full coverage.</h3>
              <p className="hc-desc">Every team member onboarded with their own orchestrator. Revenue agents — BD pipeline, lead prep, proposals — running autonomously. Observability layer added so you can see exactly what&apos;s working.</p>
              <div className="hc-tags">
                <span className="hc-tag">Full onboarding</span>
                <span className="hc-tag">Revenue agents</span>
                <span className="hc-tag">Usage dashboard</span>
                <span className="hc-tag">Performance data</span>
              </div>
            </div>
            <div className="how-card">
              <span className="hc-num">Month 03 — Expand</span>
              <h3 className="hc-title">Studios, portfolio,<br />beyond.</h3>
              <p className="hc-desc">Extend the system to subsidiary teams, venture studios, or portfolio companies. We deliver a playbook so you can roll it out independently at scale.</p>
              <div className="hc-tags">
                <span className="hc-tag">Studio rollout</span>
                <span className="hc-tag">Portfolio ready</span>
                <span className="hc-tag">Expansion playbook</span>
                <span className="hc-tag">100+ company scale</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="sec proof-sec">
        <div className="sec-inner">
          <div className="proof-inner reveal">
            <div>
              <div className="s-label">Results</div>
              <h2 className="s-head">The numbers<br />speak clearly.</h2>
              <div className="proof-quote" style={{ marginTop: '2.5rem' }}>
                <p className="pq-text">&ldquo;Triad built a 300+ agent system across our studio. We got back <em>36 hours a week</em> — time that used to disappear into admin and manual pipeline work.&rdquo;</p>
                <div className="pq-attr"><span>Studio Head</span> — Venture Studio, 2024</div>
              </div>
            </div>
            <div className="proof-stats">
              <div className="ps-cell"><span className="ps-n">300+</span><span className="ps-l">Agents deployed</span></div>
              <div className="ps-cell"><span className="ps-n">36h</span><span className="ps-l">Saved per week</span></div>
              <div className="ps-cell"><span className="ps-n">~$1.8M</span><span className="ps-l">Estimated yr 1 value</span></div>
              <div className="ps-cell"><span className="ps-n">4 wks</span><span className="ps-l">To full deployment</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="sec get-sec" id="what-you-get">
        <div className="sec-inner">
          <div className="reveal">
            <div className="s-label">What you get</div>
            <h2 className="s-head">Everything your org<br />needs to run on AI.</h2>
          </div>
          <div className="get-grid reveal">
            <div className="get-card">
              <div className="gc-icon">◈</div>
              <h3 className="gc-title">Personal Orchestrators</h3>
              <p className="gc-desc">Every person gets their own AI orchestrator — configured for their role, their tools, their workflow.</p>
              <ul className="gc-list">
                <li>Role-specific configuration</li>
                <li>3–6 specialised task agents</li>
                <li>Remote setup included</li>
                <li>Onboarding per team member</li>
              </ul>
            </div>
            <div className="get-card">
              <div className="gc-icon">⬡</div>
              <h3 className="gc-title">Shared Agent Library</h3>
              <p className="gc-desc">A cross-org library of agents anyone can use — built once, maintained by us, improving over time.</p>
              <ul className="gc-list">
                <li>Brand voice agent</li>
                <li>SOW &amp; legal review</li>
                <li>BD pipeline + CRM sync</li>
                <li>Proposal drafter</li>
                <li>Daily intelligence digest</li>
              </ul>
            </div>
            <div className="get-card">
              <div className="gc-icon">▣</div>
              <h3 className="gc-title">Observability Layer</h3>
              <p className="gc-desc">See exactly where time is being saved, which agents are being used, and where to go next.</p>
              <ul className="gc-list">
                <li>Usage dashboard</li>
                <li>Adoption tracking</li>
                <li>Monthly performance reports</li>
                <li>48-hour issue SLA</li>
                <li>Expansion roadmap</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="sec pricing-sec" id="pricing">
        <div className="sec-inner">
          <div className="reveal">
            <div className="s-label">Pricing</div>
            <h2 className="s-head">Simple. Flat.<br />Org-wide.</h2>
          </div>
          <div className="pricing-layout reveal">
            <div className="pricing-card">
              <div className="pc-price">
                <span className="pc-num">$5k</span>
                <span className="pc-per">/ week · flat rate</span>
              </div>
              <div className="pc-note">
                <strong>$20,000 / month</strong> · 3-month retainer<br />
                Covers your entire organisation. API costs run through your own keys — you stay in control of your data and spend.
              </div>
              <div className="pc-includes">
                <div className="pc-inc">Personal orchestrator per team member</div>
                <div className="pc-inc">Shared agent library, org-wide</div>
                <div className="pc-inc">Machine setup &amp; remote configuration</div>
                <div className="pc-inc">SOW, brand, legal &amp; BD agents</div>
                <div className="pc-inc">Observability dashboard &amp; reporting</div>
                <div className="pc-inc">48-hour SLA on bugs and issues</div>
                <div className="pc-inc">Studio / portfolio expansion playbook</div>
                <div className="pc-inc">All design, build, and maintenance</div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' as const }}>
                <a href="#contact" className="btn-primary">Talk to us →</a>
                
              </div>
            </div>
            <div className="pricing-right">
              <h3 className="pr-title">Not per user.<br />Not per machine.</h3>
              <p className="pr-text">One flat rate covers your entire organisation — 10 people or 100. We&apos;ve structured it this way because it <strong>aligns our incentives with yours</strong>: we want every single person using it.</p>
              <hr className="pr-rule" />
              <h3 className="pr-title">The return.</h3>
              <p className="pr-text">At ~15 hours saved per person per week, a 23-person team recovers <strong>$34,500 of productive time weekly</strong>. That&apos;s a 6.9× return in week one — before compounding.</p>
              <hr className="pr-rule" />
              <h3 className="pr-title">What happens after.</h3>
              <p className="pr-text">You own everything we build. Most clients continue on a lighter retainer for maintenance and expansion — rolling out to studios and portfolio companies.</p>
              <a href="mailto:founders@triadlabs.ai" className="btn-secondary">Need a custom quote? Talk to us <span className="arr">→</span></a>
            </div>
            
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-sec" id="contact">
        <div className="cta-inner">
          <div className="cta-left reveal">
            <div className="s-label">Get started</div>
            <h2 className="cta-head">Ready to become<br /><em>AI native?</em></h2>
            <p className="cta-sub">Drop your email and we&apos;ll set up a workflow mapping call — usually within 48 hours. No decks. Just a conversation about what your organisation needs.</p>
            <div className="cta-form">
              <input className="cta-input" type="email" placeholder="your@company.com" />
              <button className="cta-btn">Let&apos;s talk →</button>
            </div>
            <div className="cta-or">or</div>
            <div className="cta-email">Reach us directly at <a href="mailto:founders@triadlabs.ai">founders@triadlabs.ai</a></div>
          </div>

          <div className="cta-visual reveal">
            <div className="cv-row">
              <span className="cvr-label">Engagement</span>
              <span className="cvr-val green">3-month retainer</span>
            </div>
            <div className="cv-row">
              <span className="cvr-label">First agents live</span>
              <span className="cvr-val green">Week 1</span>
            </div>
            <div className="cv-row">
              <span className="cvr-label">Full team onboarded</span>
              <span className="cvr-val dim">Month 2</span>
            </div>
            <div className="cv-row">
              <span className="cvr-label">Studios expanded</span>
              <span className="cvr-val dim">Month 3</span>
            </div>
            <div className="cv-row">
              <span className="cvr-label">SLA</span>
              <span className="cvr-val dim">48-hour response</span>
            </div>
            <div className="cv-row">
              <span className="cvr-label">Pricing model</span>
              <span className="cvr-val dim">Flat rate · org-wide</span>
            </div>
            <div className="cv-row">
              <span className="cvr-label">Your data</span>
              <span className="cvr-val dim">Your keys · your control</span>
            </div>
            <div className="cv-row">
              <span className="cvr-label">Estimated yr 1 value</span>
              <span className="cvr-val green">~$1.8M recovered</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="ft-inner">
          <div className="ft-top">
            <div className="ft-brand">
              <a className="nav-logo" href="#">
                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="12,2 6.5,11 17.5,11" fill="#1a6b47"/>
                  <polygon points="7,12.5 2,21.5 11.5,21.5" fill="#1a6b47"/>
                  <polygon points="17,12.5 12.5,21.5 22,21.5" fill="#1a6b47"/>
                </svg>
                Triad Labs
              </a>
              <p className="ft-desc">AI-native studio. We make companies future ready. triadlabs.ai</p>
            </div>
            <div className="ft-col">
              <span className="ft-col-head">Services</span>
              <ul>
                <li><a href="#how">How we work</a></li>
                <li><a href="#what-you-get">What you get</a></li>
                <li><a href="#pricing">Pricing</a></li>
              </ul>
            </div>
            <div className="ft-col">
              <span className="ft-col-head">Company</span>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
            <div className="ft-col">
              <span className="ft-col-head">Contact</span>
              <ul>
                <li><a href="mailto:founders@triadlabs.ai">founders@triadlabs.ai</a></li>
              </ul>
            </div>
          </div>
          <div className="ft-bottom">
            <span>© 2026 Triad Labs</span>
            <span>triadlabs.ai</span>
          </div>
        </div>
      </footer>
    </>
  );
}
