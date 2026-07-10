// All About BBQ — interactive cow behavior
(function () {
  const regions = document.querySelectorAll('.cut-region');
  const panel = document.getElementById('cutPanel');
  const hoverName = document.getElementById('hoverName');

  // paint each region with its cut color from the data
  regions.forEach(function (region) {
    const cut = BEEF_CUTS[region.dataset.cut];
    if (cut) region.style.fill = cut.color;
  });

  function esc(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function render(id) {
    const cut = BEEF_CUTS[id];
    if (!cut) return;

    const stars = cut.starCuts.map(function (s) {
      return '<div class="star-cut"><span class="name">' + esc(s.name) + '</span><p>' + esc(s.desc) + '</p></div>';
    }).join('');

    panel.innerHTML =
      '<div class="cut-panel-head">' +
        '<h3><span style="display:inline-block;width:0.85em;height:0.85em;border-radius:4px;background:' + cut.color + ';margin-right:0.45rem;"></span>' + esc(cut.name) + '</h3>' +
        '<span class="aka">' + esc(cut.aka) + '</span>' +
      '</div>' +
      '<div class="method-row"><span class="badge ' + cut.badge + '">' + esc(cut.badgeText) + '</span></div>' +
      '<div class="cut-section"><span class="label">What it is</span><p>' + esc(cut.overview) + '</p></div>' +
      '<div class="cut-section"><span class="label">History &amp; lore</span><p>' + esc(cut.history) + '</p></div>' +
      '<div class="cut-section"><span class="label">How to cook it</span><p>' + esc(cut.cook) + '</p></div>' +
      '<div class="cut-section"><span class="label">Star cuts</span><div class="star-cuts">' + stars + '</div></div>' +
      '<div class="callout" style="margin-bottom:0;"><span class="label">Pit tip</span><p>' + esc(cut.tip) + '</p></div>';
  }

  regions.forEach(function (region) {
    region.addEventListener('click', function () {
      const id = region.dataset.cut;
      regions.forEach(function (r) {
        r.classList.toggle('selected', r.dataset.cut === id);
      });
      render(id);
      // keep the panel in view without yanking the page around
      const rect = panel.getBoundingClientRect();
      if (rect.top > window.innerHeight * 0.6) {
        panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });

    region.addEventListener('mouseenter', function () {
      const cut = BEEF_CUTS[region.dataset.cut];
      if (cut) hoverName.textContent = cut.name;
    });
    region.addEventListener('mouseleave', function () {
      hoverName.textContent = '';
    });
  });
})();
