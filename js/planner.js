// All About BBQ — the cook planner
(function () {
  const CUTS = {
    brisket: {
      name: 'Brisket (full packer)', weighted: true, defKg: 6, styleable: true,
      base: 2, perKg: 1.6, holdH: 3, wrapFrac: 0.5, stall: true, trimNight: true,
      pull: 'probe-tender in the flat, ~93–96°C', pit: { low: '107°C', classic: '121°C', hot: '135°C' },
      wrapNote: 'Wrap in tallow-brushed butcher paper when the bark passes the scratch test (~74°C internal).'
    },
    porkbutt: {
      name: 'Pork butt (pulled pork)', weighted: true, defKg: 4, styleable: true,
      base: 1.5, perKg: 2.0, holdH: 1.5, wrapFrac: 0.55, stall: true, trimNight: true,
      pull: 'bone slides out clean, ~95°C', pit: { low: '107°C', classic: '121°C', hot: '135°C' },
      wrapNote: 'Wrap in butcher paper or foil at the stall (~74°C internal).'
    },
    spareribs: {
      name: 'Spare ribs / St. Louis rack', weighted: false, styleable: true,
      fixed: 5.75, holdH: 0.25, wrapFrac: 0.5, stall: false, trimNight: false,
      pull: 'bend test — rack cracks at the surface, ~93°C', pit: { low: '107°C', classic: '121°C', hot: '135°C' },
      wrapNote: 'Optional foil/paper wrap mid-cook for softer ribs — or ride naked for maximum bark.'
    },
    babybacks: {
      name: 'Baby back ribs', weighted: false, styleable: true,
      fixed: 4.5, holdH: 0.25, wrapFrac: 0.5, stall: false, trimNight: false,
      pull: 'bend test, ~90–93°C', pit: { low: '107°C', classic: '121°C', hot: '135°C' },
      wrapNote: 'Skip the 3-2-1 timings — baby backs overcook on them. Wrap briefly or not at all.'
    },
    shortribs: {
      name: 'Plate short ribs (dino ribs)', weighted: false, styleable: true,
      fixed: 8.5, holdH: 1, wrapFrac: null, stall: true, trimNight: false,
      pull: 'jiggle like jello, ~95°C', pit: { low: '121°C', classic: '135°C', hot: '135°C' },
      wrapNote: null
    },
    chuck: {
      name: 'Chuck roast (poor man\'s brisket)', weighted: true, defKg: 2, styleable: true,
      base: 3, perKg: 2.0, holdH: 1, wrapFrac: 0.55, stall: true, trimNight: false,
      pull: 'probe-tender, ~96°C', pit: { low: '107°C', classic: '121°C', hot: '135°C' },
      wrapNote: 'Wrap at the stall — or move to a covered pan with stock for the braise finish.'
    },
    tritip: {
      name: 'Tri-tip (reverse sear)', weighted: false, styleable: false,
      fixed: 1.5, holdH: 0.3, wrapFrac: null, stall: false, trimNight: false,
      pull: 'smoke to 46°C, sear hard, pull at 54°C', pit: { any: '121°C, then screaming-hot sear' },
      wrapNote: null
    },
    chicken: {
      name: 'Spatchcock chicken', weighted: false, styleable: false,
      fixed: 1.25, holdH: 0.2, wrapFrac: null, stall: false, trimNight: true,
      pull: '71°C breast / 79°C thigh', pit: { any: '165°C — chicken runs hot, always' },
      wrapNote: null
    },
    bellyends: {
      name: 'Pork belly burnt ends', weighted: false, styleable: true,
      fixed: 5, holdH: 0, wrapFrac: 0.6, stall: false, trimNight: false,
      pull: 'glazed cubes probe soft, ~93°C', pit: { low: '107°C', classic: '121°C', hot: '135°C' },
      wrapNote: 'At the wrap point: cube, sauce, butter, covered pan back on the pit.'
    }
  };

  const STYLE_MULT = { low: 1.2, classic: 1.0, hot: 0.85 };

  const cutSel = document.getElementById('cutSel');
  const weightIn = document.getElementById('weightIn');
  const weightControl = document.getElementById('weightControl');
  const styleSel = document.getElementById('styleSel');
  const styleControl = document.getElementById('styleControl');
  const serveIn = document.getElementById('serveIn');
  const summary = document.getElementById('planSummary');
  const warning = document.getElementById('planWarning');
  const timeline = document.getElementById('planTimeline');

  Object.keys(CUTS).forEach(function (id) {
    const o = document.createElement('option');
    o.value = id;
    o.textContent = CUTS[id].name;
    cutSel.appendChild(o);
  });

  // default serve time: next occurrence of 18:00
  (function () {
    const d = new Date();
    if (d.getHours() >= 17) d.setDate(d.getDate() + 1);
    d.setHours(18, 0, 0, 0);
    serveIn.value = d.getFullYear() + '-' +
      String(d.getMonth() + 1).padStart(2, '0') + '-' +
      String(d.getDate()).padStart(2, '0') + 'T18:00';
  })();

  function fmt(d) {
    return d.toLocaleString([], { weekday: 'short', hour: '2-digit', minute: '2-digit' });
  }
  function hrs(h) {
    const whole = Math.floor(h);
    const mins = Math.round((h - whole) * 60);
    if (whole === 0) return mins + ' min';
    return whole + (mins >= 30 ? '½' : '') + ' h';
  }
  function step(time, title, body, milestone) {
    return '<div class="t-step' + (milestone ? ' milestone' : '') + '">' +
      '<span class="t-time">' + time + '</span>' +
      '<h3>' + title + '</h3><p>' + body + '</p></div>';
  }

  function plan() {
    const cut = CUTS[cutSel.value];
    weightControl.style.display = cut.weighted ? '' : 'none';
    styleControl.style.display = cut.styleable ? '' : 'none';

    const kg = cut.weighted ? Math.max(0.5, parseFloat(weightIn.value) || cut.defKg) : 0;
    const mult = cut.styleable ? STYLE_MULT[styleSel.value] : 1;
    const cookH = (cut.weighted ? cut.base + cut.perKg * kg : cut.fixed) * mult;

    const serve = new Date(serveIn.value);
    if (isNaN(serve.getTime())) return;

    const slice = new Date(serve.getTime() - 15 * 60000);
    const done = new Date(slice.getTime() - cut.holdH * 3600000);
    const meatOn = new Date(done.getTime() - cookH * 3600000);
    const fire = new Date(meatOn.getTime() - 45 * 60000);

    const pitTemp = cut.styleable ? cut.pit[styleSel.value] : cut.pit.any;

    summary.innerHTML =
      '<span class="badge slow">Cook ≈ ' + hrs(cookH) + '</span>' +
      '<span class="badge fast">Pit: ' + pitTemp + '</span>' +
      '<span class="badge both">Hold: ' + (cut.holdH ? hrs(cut.holdH) : 'serve straight away') + '</span>';

    // warnings
    const now = new Date();
    let warn = '';
    if (fire < now) {
      const lateBy = (now - fire) / 3600000;
      warn = '<span class="label">Houston, we have a schedule problem</span><p>To serve at ' + fmt(serve) +
        ', the fire needed lighting <strong>' + hrs(lateBy) + ' ago</strong>. Push the serve time later, choose a faster cut, or embrace the ancient tradition of ordering pizza while the pit runs overnight for tomorrow.</p>';
    } else if (fire.getHours() >= 0 && fire.getHours() < 5) {
      warn = '<span class="label">Set an alarm</span><p>Your fire lights at <strong>' + fmt(fire) +
        '</strong>. This is normal for big cuts — it\'s also why pitmasters own coffee machines and why chapter 6\'s overnight hold exists: cook a day ahead and hold instead.</p>';
    }
    warning.style.display = warn ? '' : 'none';
    warning.innerHTML = warn;

    // timeline
    let html = '';
    if (cut.trimNight) {
      const trim = new Date(meatOn.getTime() - 12 * 3600000);
      html += step(fmt(trim) + ' · the night before', 'Trim & dry brine',
        'Trim, salt (and rub), back in the fridge uncovered — salt diffusing, surface drying for bark. Chapter 6.5.', true);
    } else {
      html += step(fmt(new Date(meatOn.getTime() - 1.5 * 3600000)), 'Trim & season',
        'Trim and rub while the fire gets going — this cut doesn\'t need an overnight brine (though salt never hurts).', false);
    }
    html += step(fmt(fire), 'Light the fire',
      'Build the coal bed, stabilize at ' + pitTemp + ' with thin blue smoke before the meat goes anywhere near it. Chapter 6.1.', false);
    html += step(fmt(meatOn), 'Meat on — cold from the fridge', 'Close the lid. Leave it. The first hours belong to the smoke.', true);

    if (cut.stall) {
      const stallT = new Date(meatOn.getTime() + cookH * 0.4 * 3600000);
      html += step('≈ ' + fmt(stallT), 'Expect the stall',
        'The internal parks around 65–74°C and refuses to move. Physics, not failure (chapter 6.4). Beverage recommended.', false);
    }
    if (cut.wrapFrac) {
      const wrapT = new Date(meatOn.getTime() + cookH * cut.wrapFrac * 3600000);
      html += step('≈ ' + fmt(wrapT), 'The wrap window', cut.wrapNote, true);
    }
    const probeT = new Date(meatOn.getTime() + cookH * 0.85 * 3600000);
    html += step('≈ ' + fmt(probeT), 'Start checking for done',
      'Done means: ' + cut.pull + '. Feel beats numbers, every time.', false);
    html += step(fmt(done), 'Off the pit', cut.holdH
      ? 'Into the hold: wrapped, towels, dry cooler (or a 65°C oven). The flavor is still improving — this is part of the cook.'
      : 'Rest briefly and serve — this one doesn\'t need a long hold.', true);
    html += step(fmt(slice), 'Slice', 'Slice only what\'s being eaten, against the grain. Juices back over the top.', false);
    html += step(fmt(serve), 'Serve 🔥', 'Butcher paper, white bread, pickles, onions. Accept applause modestly.', true);

    timeline.innerHTML = html;
  }

  [cutSel, weightIn, styleSel, serveIn].forEach(function (el) {
    el.addEventListener('input', plan);
    el.addEventListener('change', plan);
  });

  cutSel.addEventListener('change', function () {
    const cut = CUTS[cutSel.value];
    if (cut.weighted) weightIn.value = cut.defKg;
  });

  plan();
})();
