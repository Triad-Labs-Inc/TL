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
          <li><a href="#how">How it works</a></li>
          <li><a href="#what-you-get">What you get</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#pricing" className="nav-cta">Get started</a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div>
            <div className="hero-eyebrow">Personal AI — Built for Knowledge Workers</div>
            <h1 className="hero-head">
              <span className="ln"><span className="wd">Your own AI.</span></span>
              <span className="ln"><span className="wd">Set up right.</span></span>
              <span className="ln"><span className="wd"><em>From day one.</em></span></span>
            </h1>
            <p className="hero-sub">
              Triad Labs gives every person on your team a fully configured personal AI — custom agents, role-specific workflows, and the setup done for them. Expert support available when you need to go deeper.
            </p>
            <div className="hero-actions">
              <a href="#pricing" className="btn-primary">See pricing</a>
              <a href="#how" className="btn-text">How it works <span className="arr">→</span></a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hv-card">
              <div className="hv-top">
                <span className="hv-label">Your Personal AI Setup</span>
                <span className="hv-status"><span className="hv-dot"></span>Active</span>
              </div>
              <div className="agent-nodes">
                <div className="an-row">
                  <div className="an-icon orch">ORC</div>
                  <div className="an-body">
                    <div className="an-name">Orchestrator</div>
                    <div className="an-task">Routing tasks — built for your role</div>
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
                    <div className="an-name">Task Agents × 4</div>
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
                <div className="hv-stat"><span className="hv-stat-n">$500</span><span className="hv-stat-l">Per seat / mo</span></div>
                <div className="hv-stat"><span className="hv-stat-n">~15h</span><span className="hv-stat-l">Saved / person / wk</span></div>
                <div className="hv-stat"><span className="hv-stat-n">Live</span><span className="hv-stat-l">Week one</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="strip">
        <div className="strip-track">
          <span className="strip-item">Personal Orchestrators</span>
          <span className="strip-item">Role-Specific Agents</span>
          <span className="strip-item">Shared Agent Libraries</span>
          <span className="strip-item">Workflow Automation</span>
          <span className="strip-item">Expert Implementation</span>
          <span className="strip-item">AI Native Teams</span>
          <span className="strip-item">Personal Orchestrators</span>
          <span className="strip-item">Role-Specific Agents</span>
          <span className="strip-item">Shared Agent Libraries</span>
          <span className="strip-item">Workflow Automation</span>
          <span className="strip-item">Expert Implementation</span>
          <span className="strip-item">AI Native Teams</span>
        </div>
      </div>

      {/* POSITIONING */}
      <section className="sec pos-sec" id="about">
        <div className="sec-inner">
          <div className="pos-grid reveal">
            <div className="pos-copy">
              <div className="s-label">Why it matters</div>
              <h2 className="s-head">Most people have AI access.<br />Few are actually <em>set up to use it.</em></h2>
              <div style={{ marginTop: '2rem' }}>
                <p>There&apos;s a difference between having a ChatGPT subscription and having AI configured for <strong>how you actually work</strong> — your tools, your role, your priorities.</p>
                <p>Triad Labs delivers a <strong>personal AI setup</strong> for every person on your team — a configured orchestrator, role-specific agents, and a shared library that compounds over time. Out of the box, ready to use.</p>
                <p>For teams that want to go further — deeper integrations, custom workflows, org-wide rollout — our <em>implementation hours</em> are available as an add-on. You get as much or as little support as you need.</p>
              </div>
            </div>
            <div className="pos-right">
              <div className="pos-item">
                <div className="pi-num">01</div>
                <div className="pi-title">Ready to use, not ready to configure</div>
                <div className="pi-desc">Every seat comes fully set up — orchestrator, task agents, memory layer. No weeks of onboarding. You&apos;re live in week one.</div>
              </div>
              <div className="pos-item">
                <div className="pi-num">02</div>
                <div className="pi-title">Shared intelligence across the team</div>
                <div className="pi-desc">Brand, ops, and revenue agents live in a shared library — built once, available to everyone, improving with use.</div>
              </div>
              <div className="pos-item">
                <div className="pi-num">03</div>
                <div className="pi-title">Expert support when you need it</div>
                <div className="pi-desc">Implementation hours available as an add-on — for deeper integrations, custom agent builds, or org-wide expansion.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="sec how-sec" id="how">
        <div className="sec-inner">
          <div className="reveal">
            <div className="s-label">How it works</div>
            <h2 className="s-head">Set up in days.<br /><em>Running for good.</em></h2>
          </div>
          <div className="how-grid reveal">
            <div className="how-card">
              <span className="hc-num">Step 01 — Onboard</span>
              <h3 className="hc-title">We configure<br />your setup.</h3>
              <p className="hc-desc">We map your role and workflows, configure your machine remotely, and get your personal orchestrator and agents live. Shared library deployed. Running within the first week.</p>
              <div className="hc-tags">
                <span className="hc-tag">Workflow intake</span>
                <span className="hc-tag">Remote config</span>
                <span className="hc-tag">Agent library</span>
                <span className="hc-tag">Live in week 1</span>
              </div>
            </div>
            <div className="how-card">
              <span className="hc-num">Step 02 — Use</span>
              <h3 className="hc-title">It works.<br />You move faster.</h3>
              <p className="hc-desc">Your orchestrator handles the cognitive overhead — research, drafts, pipeline updates, daily digests. Everything runs through your existing tools. No new interfaces to learn.</p>
              <div className="hc-tags">
                <span className="hc-tag">Works immediately</span>
                <span className="hc-tag">No new tools</span>
                <span className="hc-tag">Role-specific</span>
                <span className="hc-tag">~15h saved / wk</span>
              </div>
            </div>
            <div className="how-card">
              <span className="hc-num">Step 03 — Expand</span>
              <h3 className="hc-title">Go deeper<br />when ready.</h3>
              <p className="hc-desc">Add implementation hours for custom integrations, advanced agent builds, or rolling the system out to your full team, studio, or portfolio companies. As much or as little as you need.</p>
              <div className="hc-tags">
                <span className="hc-tag">Custom builds</span>
                <span className="hc-tag">Team rollout</span>
                <span className="hc-tag">Portfolio ready</span>
                <span className="hc-tag">Hourly add-on</span>
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
                <p className="pq-text">&ldquo;Triad built out our studio&apos;s agent system and got it running fast. We recovered <em>36 hours a week</em> — time that used to disappear into admin and manual pipeline work.&rdquo;</p>
                <div className="pq-attr"><span>Studio Head</span> — Venture Studio, 2024</div>
              </div>
            </div>
            <div className="proof-stats">
              <div className="ps-cell"><span className="ps-n">300+</span><span className="ps-l">Agents deployed</span></div>
              <div className="ps-cell"><span className="ps-n">36h</span><span className="ps-l">Saved per week</span></div>
              <div className="ps-cell"><span className="ps-n">~$1.8M</span><span className="ps-l">Estimated yr 1 value</span></div>
              <div className="ps-cell"><span className="ps-n">1 wk</span><span className="ps-l">To first agents live</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="sec get-sec" id="what-you-get">
        <div className="sec-inner">
          <div className="reveal">
            <div className="s-label">What&apos;s included</div>
            <h2 className="s-head">Everything in<br />every seat.</h2>
          </div>
          <div className="get-grid reveal">
            <div className="get-card">
              <div className="gc-icon">◈</div>
              <h3 className="gc-title">Personal Orchestrator</h3>
              <p className="gc-desc">Every seat includes a fully configured AI orchestrator — built for your role, your tools, your workflow.</p>
              <ul className="gc-list">
                <li>Role-specific configuration</li>
                <li>3–6 specialised task agents</li>
                <li>Remote setup by us</li>
                <li>Works in your existing tools</li>
              </ul>
            </div>
            <div className="get-card">
              <div className="gc-icon">⬡</div>
              <h3 className="gc-title">Shared Agent Library</h3>
              <p className="gc-desc">A cross-team library of agents anyone can use — built once, maintained, improving over time.</p>
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
              <p className="gc-desc">See exactly where time is being saved, which agents are in use, and where to go next.</p>
              <ul className="gc-list">
                <li>Usage dashboard</li>
                <li>Adoption tracking</li>
                <li>Monthly performance reports</li>
                <li>48-hour issue SLA</li>
                <li>Expansion guidance</li>
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
            <h2 className="s-head">Start your journey<br /><em>towards an AI-native company.</em></h2>
          </div>
          <div className="pricing-cards-wrap reveal">
            {/* Run */}
            <div className="pricing-card run-card">
              <div className="pc-tier-name">Run</div>
              <div className="pc-tier-sub">Get your team set up and running on AI</div>
              <div className="pc-price">
                <span className="pc-num">$500</span>
                <span className="pc-per">/ seat / month</span>
              </div>
              <div className="pc-note">
                Per person. API costs run through your own keys — you stay in control of your data and spend. No org-wide minimums.
              </div>
              <div className="pc-includes">
                <div className="pc-inc">Personal orchestrator — configured for your role</div>
                <div className="pc-inc">3–6 task agents, built and ready</div>
                <div className="pc-inc">Shared agent library access</div>
                <div className="pc-inc">Remote machine setup by us</div>
                <div className="pc-inc">Observability dashboard &amp; reporting</div>
                <div className="pc-inc">48-hour SLA on bugs and issues</div>
              </div>
              <a href="#contact" className="btn-secondary">Get started →</a>
            </div>

            {/* Build */}
            <div className="pricing-card" id="build-card">
              <div className="pc-tier-name">Build</div>
              <div className="pc-tier-sub">For companies ready to transform</div>
              <div className="pc-price">
                <span className="pc-num" style={{ fontSize: '2.4rem' }}>Custom</span>
              </div>
              <div className="pc-note">
                Implementation &amp; consultation hours — for deeper integrations, custom agent builds, or rolling out to your full team or portfolio.
              </div>
              <div className="pc-includes">
                <div className="pc-inc">Custom workflow integrations</div>
                <div className="pc-inc">Advanced agent builds</div>
                <div className="pc-inc">Full team or studio rollout</div>
                <div className="pc-inc">Portfolio company expansion</div>
              </div>
              <a href="mailto:founders@triadlabs.ai" className="btn-primary">Talk to us about implementation →</a>
              <div className="pc-upgrade-note">Includes Run for the duration of the engagement.</div>
            </div>

            <p className="pricing-journey-note">Many clients start with Build. Run works on its own too.</p>
          </div>

          <div className="pricing-right reveal">
            <h3 className="pr-title">Start with one. Scale freely.</h3>
            <p className="pr-text">Run starts at a single seat. Roll it out to your whole team at whatever pace works. Each seat is fully configured — there&apos;s no minimum footprint to make it worth it. <strong>One seat delivers real value from day one.</strong></p>
            <hr className="pr-rule" />
            <h3 className="pr-title">The return.</h3>
            <p className="pr-text">At ~15 hours saved per person per week, each Run seat pays for itself many times over. At $500/seat, you&apos;re recovering <strong>dozens of hours of productive time</strong> for the cost of a few hours of salary.</p>
            <hr className="pr-rule" />
            <h3 className="pr-title">The Build engagement.</h3>
            <p className="pr-text">Build is a custom scoped engagement — deeper integrations, agent builds, and org-wide rollout. Priced to the scope of the work. <strong>Run is included for the duration.</strong></p>
            <hr className="pr-rule" />
            <h3 className="pr-title">You own it.</h3>
            <p className="pr-text">Everything we build is yours. Your keys, your data, your agents. We set it up — you own the system.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-sec" id="contact">
        <div className="cta-inner">
          <div className="cta-left reveal">
            <div className="s-label">Get started</div>
            <h2 className="cta-head">Ready to run<br />on <em>your own AI?</em></h2>
            <p className="cta-sub">Drop your email and we&apos;ll get your first seat configured — usually within a week. No decks. No long proposals. Just your personal AI, set up and running.</p>
            <div className="cta-form">
              <input className="cta-input" type="email" placeholder="your@company.com" />
              <button className="cta-btn">Get started →</button>
            </div>
            <div className="cta-or">or</div>
            <div className="cta-email">
              Need implementation support? <a href="mailto:founders@triadlabs.ai">founders@triadlabs.ai</a>
            </div>
          </div>

          <div className="cta-visual reveal">
            <div className="cv-row">
              <span className="cvr-label">Pricing model</span>
              <span className="cvr-val green">$500 / seat / month</span>
            </div>
            <div className="cv-row">
              <span className="cvr-label">First agents live</span>
              <span className="cvr-val green">Week 1</span>
            </div>
            <div className="cv-row">
              <span className="cvr-label">Minimum seats</span>
              <span className="cvr-val dim">None — start with 1</span>
            </div>
            <div className="cv-row">
              <span className="cvr-label">Remote setup</span>
              <span className="cvr-val dim">Included</span>
            </div>
            <div className="cv-row">
              <span className="cvr-label">SLA</span>
              <span className="cvr-val dim">48-hour response</span>
            </div>
            <div className="cv-row">
              <span className="cvr-label">Implementation hours</span>
              <span className="cvr-val dim">Available as add-on</span>
            </div>
            <div className="cv-row">
              <span className="cvr-label">Your data</span>
              <span className="cvr-val dim">Your keys · your control</span>
            </div>
            <div className="cv-row">
              <span className="cvr-label">ROI per seat</span>
              <span className="cvr-val green">~15h recovered / wk</span>
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
              <p className="ft-desc">Personal AI for knowledge workers. Set up right, from day one. triadlabs.ai</p>
            </div>
            <div className="ft-col">
              <span className="ft-col-head">Product</span>
              <ul>
                <li><a href="#how">How it works</a></li>
                <li><a href="#what-you-get">What&apos;s included</a></li>
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
