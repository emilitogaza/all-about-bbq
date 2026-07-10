// All About BBQ — certification exam
(function () {
  const QUESTIONS = [
    {
      q: 'The single most important rule of matching meat to method:',
      opts: [
        'Expensive cuts get smoked, cheap cuts get grilled',
        'Hard-working, collagen-heavy muscles go low & slow; lazy tender muscles go hot & fast',
        'Beef is always smoked, pork is always grilled',
        'Bone-in cuts always cook faster'
      ],
      a: 1, why: 'Collagen needs hours of gentle heat to melt into gelatin; tender muscle just needs a sear. (Ch. 1)'
    },
    {
      q: 'Chicken on the smoker should generally run at:',
      opts: ['107°C, as low and slow as possible', '121°C with a 3-2-1 wrap', '150–175°C for crisp skin — it has no collagen to render', 'Direct heat only, never smoke'],
      a: 2, why: 'No collagen to render means low & slow buys nothing but rubbery skin. (Ch. 2)'
    },
    {
      q: 'The "Boston butt" is actually the pig\'s:',
      opts: ['Rear end', 'Belly', 'Upper shoulder', 'Loin'],
      a: 2, why: 'Named for the colonial barrels ("butts") pork shipped in — it\'s the upper shoulder. (Ch. 3)'
    },
    {
      q: 'The flat iron steak — the tender secret rediscovered by meat scientists in 2002 — comes from which primal?',
      opts: ['Short loin', 'Round', 'Chuck', 'Plate'],
      a: 2, why: 'It hides in the shoulder blade of the chuck — second most tender muscle on the animal. (Ch. 4)'
    },
    {
      q: '"Dino ribs," the giant beef short ribs of modern Texas joints, come from the:',
      opts: ['Rib primal', 'Short plate', 'Chuck', 'Round'],
      a: 1, why: 'Plate short ribs — ribs 6–8 of the lower ribcage with a fist of meat on top. (Ch. 4)'
    },
    {
      q: 'Picanha, the star of Brazilian churrasco, is:',
      opts: ['The tenderloin tip', 'The rump cap of the sirloin, fat cap intact', 'A trimmed flank steak', 'The ribeye cap'],
      a: 1, why: 'Top sirloin cap (coulotte), curled onto skewers fat-side out. (Ch. 4)'
    },
    {
      q: 'A porterhouse differs from a T-bone because:',
      opts: [
        'It comes from the rib section',
        'It has no tenderloin at all',
        'It\'s cut from the rear of the short loin, where the tenderloin side must be at least 1.25" wide',
        'It\'s always boneless'
      ],
      a: 2, why: 'Same bone, same muscles — the porterhouse just carries the big end of the tenderloin. (Ch. 4)'
    },
    {
      q: 'Central Texas barbecue was born in:',
      opts: [
        'Cowboy chuckwagons on cattle drives',
        'German and Czech immigrant meat markets smoking unsold cuts',
        'Plantation kitchens of East Texas',
        'Mexican vaquero camps'
      ],
      a: 1, why: 'Butcher shops of the 1880s — which is why service is still butcher paper, no forks. (Ch. 5)'
    },
    {
      q: 'Snow\'s BBQ in Lexington is famous for all of these EXCEPT:',
      opts: [
        'Opening only on Saturday mornings',
        'Pitmaster Tootsie Tomanetz tending pits into her 80s',
        'Being named #1 in Texas by Texas Monthly',
        'Inventing the jalapeño-cheddar sausage'
      ],
      a: 3, why: 'Jalapeño-cheddar is a broader craft-era invention — Snow\'s fame is Tootsie, Saturdays, and the 2008 crown. (Ch. 5)'
    },
    {
      q: 'The smoke you want coming off your pit looks like:',
      opts: ['Thick, billowing white', 'Steady gray', 'Nearly invisible — thin and blue', 'Black at first, then white'],
      a: 2, why: 'Thin blue smoke = hot, complete combustion. White smoke = smoldering fire depositing creosote. (Ch. 6)'
    },
    {
      q: 'The stall — where a brisket sits at ~71°C for hours — is caused by:',
      opts: [
        'Collagen absorbing all the heat as it melts',
        'Evaporative cooling: the meat sweats and air-conditions itself',
        'Fat blocking heat transfer',
        'The smoke ring forming'
      ],
      a: 1, why: 'Greg Blonder\'s swamp-cooler finding: evaporation removes heat as fast as the pit adds it. (Ch. 6)'
    },
    {
      q: 'Butcher paper beats foil for wrapping brisket because it:',
      opts: [
        'Reflects more heat back into the meat',
        'Breathes just enough to preserve bark while blunting evaporation',
        'Adds a paper-smoke flavor',
        'Is required by Texas law'
      ],
      a: 1, why: 'Foil steams bark soft; paper is the compromise between speed and crust. (Ch. 6)'
    },
    {
      q: 'The only rub ingredient that actually penetrates the meat is:',
      opts: ['Coarse black pepper', 'Paprika', 'Garlic powder', 'Salt'],
      a: 3, why: 'Salt migrates inward by diffusion (~1 cm/day) — everything else stays on the surface as bark. (Ch. 6)'
    },
    {
      q: 'A brisket is done when:',
      opts: [
        'It hits exactly 95°C, no matter what',
        'It has been on for 1 hour per pound',
        'A probe slides into the flat like warm butter, typically somewhere around 93–96°C',
        'The point wiggles'
      ],
      a: 2, why: 'Temperature is where you start checking; probe-tender in the flat is when you stop cooking. (Ch. 6–7)'
    },
    {
      q: 'The brisket comes off the pit perfect. Guests are hungry. You:',
      opts: [
        'Slice immediately while it\'s hottest',
        'Rest it 10 minutes like a steak, then slice it all',
        'Rest at least an hour — ideally hold at ~65°C for several — then slice only what\'s being eaten',
        'Cube the whole thing for burnt ends'
      ],
      a: 2, why: 'The hold is where good becomes great — and pre-slicing dries the flat in minutes. (Ch. 6–7)'
    }
  ];

  const PASS_MARK = 12;
  const form = document.getElementById('examForm');
  const resultBox = document.getElementById('resultBox');
  const scoreLine = document.getElementById('scoreLine');
  const verdictLine = document.getElementById('verdictLine');
  const certClaim = document.getElementById('certClaim');
  const certificate = document.getElementById('certificate');
  const printBtn = document.getElementById('printBtn');

  function esc(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  form.innerHTML = QUESTIONS.map(function (item, i) {
    const opts = item.opts.map(function (opt, j) {
      return '<label><input type="radio" name="q' + i + '" value="' + j + '"> <span>' + esc(opt) + '</span></label>';
    }).join('');
    return '<div class="q-card" id="qc' + i + '">' +
      '<div class="q-num">Question ' + (i + 1) + ' of ' + QUESTIONS.length + '</div>' +
      '<div class="q-text">' + esc(item.q) + '</div>' +
      '<div class="q-options">' + opts + '</div>' +
      '<div class="verdict ok">✓ Correct. ' + esc(item.why) + '</div>' +
      '<div class="verdict no">✗ Not quite. ' + esc(item.why) + '</div>' +
      '</div>';
  }).join('');

  document.getElementById('gradeBtn').addEventListener('click', function () {
    let score = 0;
    let unanswered = 0;

    QUESTIONS.forEach(function (item, i) {
      const card = document.getElementById('qc' + i);
      const picked = document.querySelector('input[name="q' + i + '"]:checked');
      card.classList.remove('correct', 'wrong');
      if (!picked) { unanswered++; return; }
      if (parseInt(picked.value, 10) === item.a) {
        score++;
        card.classList.add('correct');
      } else {
        card.classList.add('wrong');
      }
    });

    if (unanswered > 0) {
      resultBox.className = 'exam-result fail';
      scoreLine.textContent = unanswered + ' unanswered';
      verdictLine.textContent = 'Answer every question — a pitmaster never walks away from the pit mid-cook.';
      resultBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    const passed = score >= PASS_MARK;
    resultBox.className = 'exam-result ' + (passed ? 'pass' : 'fail');
    scoreLine.textContent = score + ' / ' + QUESTIONS.length;
    verdictLine.textContent = passed
      ? 'Passed. The smoke has accepted you — claim your certificate below. 🔥'
      : 'Not yet — you need ' + PASS_MARK + ' to pass. Review the marked questions (each shows the chapter to revisit), reset, and come back hungry.';

    certClaim.classList.toggle('show', passed);
    document.getElementById('retryBtn').style.display = 'inline-block';
    if (!passed) {
      certificate.classList.remove('show');
      printBtn.style.display = 'none';
    }
    resultBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  document.getElementById('retryBtn').addEventListener('click', function () {
    QUESTIONS.forEach(function (_, i) {
      const card = document.getElementById('qc' + i);
      card.classList.remove('correct', 'wrong');
      const picked = document.querySelector('input[name="q' + i + '"]:checked');
      if (picked) picked.checked = false;
    });
    resultBox.className = 'exam-result';
    certClaim.classList.remove('show');
    certificate.classList.remove('show');
    printBtn.style.display = 'none';
    this.style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  document.getElementById('claimBtn').addEventListener('click', function () {
    const name = document.getElementById('certName').value.trim();
    if (!name) {
      document.getElementById('certName').focus();
      return;
    }
    document.getElementById('certNameOut').textContent = name;
    document.getElementById('certDate').textContent = new Date().toLocaleDateString(undefined, {
      year: 'numeric', month: 'long', day: 'numeric'
    });
    certificate.classList.add('show');
    printBtn.style.display = 'inline-block';
    certificate.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  printBtn.addEventListener('click', function () {
    window.print();
  });
})();
