/**
 * config.js — Site identity and accent color configuration
 * independentdefender.com
 *
 * accent:     #C0392B  (red)
 * accentDim:  #992d22  (~15% darker)
 * accentPale: #fdf0ee  (very light tint, used for callout backgrounds)
 */

window.SITE_CONFIG = {
  name:      "The Independent Defender",
  nameHtml:  "The Independent <span>Defender</span>",
  domain:    "independentdefender.com",
  tagline:   "Cybersecurity software intelligence for CISO-track practitioners",
  accent:    "#C0392B",
  accentDim: "#992d22",
  accentPale:"#fdf0ee"
};

(function() {
  var r = document.documentElement;
  r.style.setProperty('--accent',      window.SITE_CONFIG.accent);
  r.style.setProperty('--accent-dim',  window.SITE_CONFIG.accentDim);
  r.style.setProperty('--accent-pale', window.SITE_CONFIG.accentPale);
})();