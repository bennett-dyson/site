/* =========================================================================
   BRAND CONFIG — the single place to swap name / tagline / links / pricing.
   The HTML carries placeholder fallbacks so the page still reads with JS off;
   editing this file is what actually rebrands the live site.

   To rebrand: change the values below. Nothing else to touch.
   ========================================================================= */

const BRAND = {
  name:        "Bennett & Dyson",        // full name (header logo, footer)
  nameShort:   "B&D",                    // compact monogram
  tagline:     "Streamlined. Secure. Still editable.",
  ctaPrimary:  "Get your free site scorecard",

  // --- contact / destinations (wire these up when live) ---
  email:       "hello@bennettdyson.co",  // becomes the mailto: target
  scorecard:   "#scorecard",             // lead-magnet CTA target (form/scheduler URL)
  booking:     "#book",                  // "Book a call" target (Cal.com / Calendly URL)

  // --- pricing (placeholder until set with the principal) ---
  priceHeadline: "$X,XXX",
  priceSub:      "Placeholder pricing — final numbers set with the principal.",
};

/* -------------------------------------------------------------------------
   Hydration — small, dependency-free. Fills three slot types:
     data-brand="key"        -> text content
     data-brand-href="key"   -> href (special keys: mailto, scorecard, booking)
   ------------------------------------------------------------------------- */
(function hydrate() {
  const setText = (key, val) => {
    document.querySelectorAll('[data-brand="' + key + '"]').forEach((el) => {
      el.textContent = val;
    });
  };

  // text slots
  Object.keys(BRAND).forEach((k) => setText(k, BRAND[k]));
  setText("year", String(new Date().getFullYear()));

  // href slots
  const hrefFor = {
    mailto:    "mailto:" + BRAND.email,
    scorecard: BRAND.scorecard,
    booking:   BRAND.booking,
  };
  document.querySelectorAll("[data-brand-href]").forEach((el) => {
    const key = el.getAttribute("data-brand-href");
    if (hrefFor[key]) el.setAttribute("href", hrefFor[key]);
  });

  // document metadata
  document.title = BRAND.name + " — " + BRAND.tagline;
})();
