// All About BBQ — shared navigation (top nav + prev/next footer)
(function () {
  const CHAPTERS = [
    { file: 'index.html',       num: 1,  short: 'Meat 101',    title: 'Meat 101' },
    { file: 'chicken.html',     num: 2,  short: 'Chicken',     title: 'Chicken' },
    { file: 'pork.html',        num: 3,  short: 'Pork',        title: 'Pork' },
    { file: 'beef.html',        num: 4,  short: 'Beef',        title: 'Beef' },
    { file: 'texas.html',       num: 5,  short: 'Texas',       title: 'Texas BBQ' },
    { file: 'pit-science.html', num: 6,  short: 'Pit Science', title: 'Pit Science' },
    { file: 'brisket.html',     num: 7,  short: 'Brisket',     title: 'The Brisket Masterclass' },
    { file: 'world.html',       num: 8,  short: 'World',       title: 'World of Smoke' },
    { file: 'sauces.html',      num: 9,  short: 'Sauces',      title: 'Sauces & Sides' },
    { file: 'planner.html',     num: 10, short: 'Planner',     title: 'The Cook Planner' },
    { file: 'myths.html',       num: 11, short: 'Myths',       title: 'Myths & Misconceptions' },
    { file: 'exam.html',        num: 12, short: 'Exam',        title: 'The Certification Exam' }
  ];

  let current = window.location.pathname.split('/').pop();
  if (!current) current = 'index.html';
  const idx = CHAPTERS.findIndex(function (c) { return c.file === current; });

  // top nav
  const nav = document.querySelector('nav.nav');
  if (nav) {
    nav.innerHTML =
      '<div class="nav-inner">' +
      '<a class="nav-brand" href="index.html">🔥 All About BBQ</a>' +
      CHAPTERS.map(function (c, i) {
        return '<a class="chapter' + (i === idx ? ' active' : '') + '" href="' + c.file + '">' +
          c.num + ' · ' + c.short + '</a>';
      }).join('') +
      '</div>';
  }

  // footer prev/next
  const foot = document.querySelector('.chapter-nav');
  if (foot && idx !== -1) {
    const prev = CHAPTERS[idx - 1];
    const next = CHAPTERS[idx + 1];
    foot.innerHTML =
      (prev
        ? '<a href="' + prev.file + '">← Chapter ' + prev.num + ' — ' + prev.title + '</a>'
        : '<span class="spacer"></span>') +
      (next
        ? '<a href="' + next.file + '">Next: Chapter ' + next.num + ' — ' + next.title + ' →</a>'
        : '<span class="spacer"></span>');
  }
})();
