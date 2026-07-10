// All About BBQ — Chapter 4 data: the nine beef primals
const BEEF_CUTS = {
  chuck: {
    name: 'Chuck',
    aka: 'the shoulder — neck, shoulder blade & upper arm',
    badge: 'both',
    badgeText: 'Low & slow · a few steak gems',
    color: '#c96f3b',
    overview:
      'The chuck is the cow\'s front shoulder — roughly a quarter of the animal\'s weight and its hardest-working region. All that work means deep beefy flavor and lots of collagen. Most of it wants hours of gentle heat, but hiding inside the shoulder blade are a couple of muscles tender enough to grill as steaks, which butchers kept quiet about for decades.',
    history:
      'For most of American history the chuck was ground or pot-roasted — the Sunday pot roast of the 1950s was almost always a chuck roast. In 2002, university meat scientists "muscle-profiling" the carcass for undervalued cuts rediscovered the infraspinatus and launched it as the flat iron steak — now one of the most popular steaks in the country, carved from a primal that once went almost entirely into hamburger.',
    cook:
      'Roasts and short-rib-style chuck: low & slow at 121°C to an internal of 93°C+ — chuck makes outstanding "poor man\'s brisket" and shreds beautifully for tacos and sandwiches. Flat iron, Denver, and chuck eye: treat as steaks — hot & fast to 54–57°C, rest, slice against the grain. And the best burgers in the world are 80/20 ground chuck, full stop.',
    starCuts: [
      { name: 'Chuck roast', desc: 'The pot roast classic. Smoked instead of braised, it becomes shredded "chuckie" — brisket flavor in half the time.' },
      { name: 'Flat iron', desc: 'Second most tender muscle in the whole animal after the tenderloin, once the center seam of gristle is removed. Grill it like a strip steak.' },
      { name: 'Denver steak', desc: 'From under the shoulder blade — well-marbled, beefy, still fairly unknown, and priced accordingly. Buy it while that lasts.' },
      { name: 'Chuck eye', desc: '"Poor man\'s ribeye" — literally the continuation of the ribeye muscle into the chuck. Only two per cow, so grab them when you see them.' }
    ],
    tip: 'Smoking a chuck roast to 74°C, then braising it in a covered pan with stock until 96°C, gives you brisket-adjacent glory on a weeknight budget.'
  },

  brisket: {
    name: 'Brisket',
    aka: 'the chest — pectoral muscles',
    badge: 'slow',
    badgeText: 'Low & slow — the final exam of BBQ',
    color: '#b5484a',
    overview:
      'The brisket is the cow\'s chest: two overlapping pectoral muscles that carry 60% of the animal\'s standing weight. Cattle have no collarbone — these muscles do that job instead, which makes brisket one of the toughest cuts on the animal, laced end-to-end with collagen. A whole "packer" brisket has two parts: the lean, even flat and the thick, fatty, gloriously marbled point.',
    history:
      'Central Texas barbecue was born in the meat markets of German and Czech immigrants in the late 1800s, who smoked unsold cuts the way they\'d smoked meat back home. Brisket — cheap, abundant, unwanted — became the canon. Meanwhile the same cut, brined instead of smoked, became corned beef and pastrami in Jewish delis; pastrami is essentially brisket\'s city cousin. Today brisket headlines every Texas joint, and Aaron Franklin\'s Austin lines made it a pilgrimage food.',
    cook:
      'The definitive low & slow cook: salt and coarse black pepper (Dalmatian rub), 121–135°C over post oak, 10–14 hours for a full packer. Wrap in butcher paper when the bark is set and the stall hits (~74°C). Pull at 93–96°C in the flat, when a probe slides in like warm butter. Then the step everyone skips and no one should: rest it a minimum of one hour — the best joints rest briskets 8+ hours in warmers.',
    starCuts: [
      { name: 'The flat', desc: 'Lean, uniform, slices like deli meat. The part most likely to dry out — this is why you wrap, and why you slice only what you\'ll eat now.' },
      { name: 'The point', desc: 'Fatty, ropey, intensely rich. Cubed, re-seasoned, sauced and smoked another hour, it becomes burnt ends — Kansas City\'s greatest gift to humanity.' },
      { name: 'Burnt ends', desc: 'Originally scraps handed out free at Arthur Bryant\'s in Kansas City; Calvin Trillin wrote about them in 1972 and turned leftovers into a delicacy.' }
    ],
    tip: 'Slice the flat against the grain, then rotate the point 90° before slicing — the grain changes direction between the two muscles. One brisket, two grains.'
  },

  rib: {
    name: 'Rib',
    aka: 'ribs 6–12 — home of the ribeye',
    badge: 'both',
    badgeText: 'Hot & fast steaks · slow roasts',
    color: '#d9a441',
    overview:
      'The rib primal sits along the upper back, covering ribs six through twelve. These muscles barely move — the longissimus dorsi just holds posture — so the meat is tender, and in a well-fed animal it\'s streaked with the intramuscular fat that makes marbling scores exist. This is the luxury district of the cow.',
    history:
      'Prime rib was the centerpiece of the American steakhouse and the English Sunday roast for over a century — "standing rib roast" because it roasts standing on its own rack of bones. The tomahawk ribeye, with its full frenched rib bone, is a modern Instagram-era invention: same meat, more handle, higher price. Beef back ribs are what\'s left when the ribeyes are cut away — butchers\' leftovers turned BBQ treat.',
    cook:
      'Ribeye steaks: hot & fast, hard sear, pull at 54–57°C for medium-rare — the marbling needs at least that to render. Prime rib: the reverse sear was born for it — 121°C low until 49°C internal, rest, then blast at 260°C for the crust. Beef back ribs: low & slow at 135°C for ~4 hours; there\'s not much meat on top, but the meat between the bones is ribeye by another name.',
    starCuts: [
      { name: 'Ribeye', desc: 'The flavor king. The spinalis cap (see below) wrapped around a tender eye, marbled throughout. If a steakhouse has one signature, it\'s this.' },
      { name: 'Ribeye cap (spinalis)', desc: 'Widely considered the single best bite on the animal — ribeye marbling with tenderloin tenderness. Sold separately if your butcher likes you.' },
      { name: 'Prime rib / standing rib roast', desc: 'The whole primal roasted as one. Holiday royalty. Reverse sear it and never look back.' },
      { name: 'Tomahawk', desc: 'A ribeye with 30+ cm of frenched bone. You\'re paying steak price for bone, but the presentation is undefeated.' }
    ],
    tip: 'For steaks over 4 cm thick, reverse sear: smoke low to 46°C, then sear screaming hot. Edge-to-edge medium-rare with a smoke kiss and a crust.'
  },

  plate: {
    name: 'Short Plate',
    aka: 'the lower ribcage & belly front',
    badge: 'both',
    badgeText: 'Dino ribs slow · skirt steak fast',
    color: '#8c6d46',
    overview:
      'The plate is the cow\'s lower ribcage, below the rib primal. It gives BBQ two legends at opposite ends of the spectrum: beef short ribs — the biggest, richest, most collagen-loaded ribs on the animal — and the skirt steak, a thin, loose-grained diaphragm muscle with maybe the most concentrated beef flavor per gram of any cut.',
    history:
      'Skirt steak is the reason fajitas exist: Mexican vaqueros in the Rio Grande Valley were often paid partly in throwaway cuts, and "faja" (belt/sash) describes the skirt perfectly. Grilled over mesquite and wrapped in tortillas, it went from ranch-hand rations to the sizzling-platter phenomenon of the 1980s — which promptly made the "throwaway" cut expensive. Beef plate short ribs became the modern Texas showpiece: the "dinosaur rib" that every craft BBQ joint now sells by weight.',
    cook:
      'Plate short ribs (dino ribs): pure low & slow — salt and pepper, 135°C, 8–9 hours, no wrap needed thanks to all that fat; pull at 95°C when they jiggle like jello. Skirt steak: the opposite — screaming hot and fast, 2–3 minutes a side to medium-rare at most, then sliced thin against the grain. Against the grain is not optional with skirt; with the grain it\'s chewing gum.',
    starCuts: [
      { name: 'Plate short ribs (dino ribs)', desc: 'Ribs 6–8 with a fist-high cap of meat. The single most impressive-looking thing to come off a smoker.' },
      { name: 'Outside skirt', desc: 'The fajita cut. Thin, fatty, insanely beefy. Takes a marinade in an hour flat thanks to its loose grain.' },
      { name: 'Inside skirt', desc: 'Slightly tougher, slightly cheaper sibling. Same rules: hot, fast, thin slices, against the grain.' }
    ],
    tip: 'Short ribs are brisket point on a handle — same bark, same render, same wobble — but far harder to mess up. Cook these before you attempt your first packer.'
  },

  shortloin: {
    name: 'Short Loin',
    aka: 'the mid-back — T-bones & strips',
    badge: 'fast',
    badgeText: 'Hot & fast — steak country',
    color: '#e8632c',
    overview:
      'The short loin runs along the spine behind the ribs. It\'s where the strip loin (top) and the front of the tenderloin (bottom) run in parallel, separated by the T-shaped vertebra. Cut across the whole section and you get a T-bone or porterhouse — two premium steaks sharing one bone. This muscle does nearly nothing all day, and its tenderness proves it.',
    history:
      'The New York strip took its name from Delmonico\'s in 1830s Manhattan, America\'s first true restaurant, where a boneless short loin steak was the house pride. The porterhouse traces its name to the porter houses — ale-and-chophouse taverns — of the same era. Peter Luger in Brooklyn (est. 1887) built the most famous steakhouse reputation in the world almost entirely on dry-aged porterhouse, broiled and finished in butter.',
    cook:
      'Everything here is hot & fast. Strips and T-bones: hard sear over direct heat, pull at 54–57°C, rest 5–10 minutes. Porterhouse tactics: keep the tenderloin side angled away from the hottest fire — it cooks faster than the strip side and has less fat to protect it. Dry-brine any of these with salt a day ahead, uncovered in the fridge, for a better crust and deeper seasoning.',
    starCuts: [
      { name: 'New York strip', desc: 'The steak-lover\'s steak: firm, beefy chew, a proper fat cap, and no seams or surprises. The benchmark against which grills are judged.' },
      { name: 'T-bone', desc: 'Strip on one side of the bone, a modest slice of tenderloin on the other. Two textures, one steak.' },
      { name: 'Porterhouse', desc: 'A T-bone from the rear of the short loin, where the tenderloin swells — USDA rules require the tenderloin side be at least 3.2 cm wide to earn the name.' }
    ],
    tip: 'Bone-in steaks look majestic but the bone slows cooking around it. If you struggle with even doneness, boneless strip is the honest move.'
  },

  sirloin: {
    name: 'Sirloin',
    aka: 'hip section — tri-tip & picanha country',
    badge: 'both',
    badgeText: 'Steaks & fast roasts',
    color: '#a3803f',
    overview:
      'Behind the short loin, ahead of the round: the sirloin is the cow\'s hip. Less tender than the loin, far more flavorful than the round, and home to two cult cuts with entire barbecue traditions built around them — the tri-tip of California and the picanha of Brazil. If the short loin is old money, the sirloin is where the interesting people hang out.',
    history:
      'Tri-tip is the heart of Santa Maria barbecue, California\'s own style: seasoned with salt, pepper and garlic, grilled over red oak on hand-cranked iron grills, served with pinquito beans and salsa — a tradition running since the rancho era of the 1800s, though the tri-tip cut itself was popularized by a Santa Maria butcher in the 1950s who got tired of grinding it into hamburger. Picanha (the rump cap) is Brazil\'s national treasure, curled onto skewers fat-side out and carved tableside in every churrascaria on earth.',
    cook:
      'Tri-tip: the reverse-sear poster child — smoke at 121°C over oak to 46°C, sear hard, pull at 54°C. Critically, the grain changes direction mid-cut: slice each half against its own grain. Picanha: score the fat cap, skewer into a C, roast fat-side toward the coals; the cap bastes the meat as it renders. Top sirloin steaks: hot & fast, great weeknight value, just don\'t push past medium.',
    starCuts: [
      { name: 'Tri-tip', desc: 'A 1 kg triangular roast that eats like a giant steak. Cooks in an hour. If brisket is a marathon, tri-tip is a victory lap.' },
      { name: 'Picanha (rump cap / coulotte)', desc: 'Top sirloin cap with its fat cap intact. Beefy, tender enough, and the fat is half the point. Ask the butcher to leave the cap on.' },
      { name: 'Top sirloin', desc: 'The affordable everyday steak — leaner and chewier than strip, but honest, beefy, and half the price.' }
    ],
    tip: 'Tri-tip is the best beef cook for a beginner: steak flavor, roast size, one hour of your life, and dramatically forgiving compared to brisket.'
  },

  flank: {
    name: 'Flank',
    aka: 'the abdominal wall',
    badge: 'fast',
    badgeText: 'Hot & fast — slice against the grain',
    color: '#7fa650',
    overview:
      'The flank is a single flat sheet of abdominal muscle below the loin — one steak per side of beef. Long visible grain, very little fat, huge beef flavor. It\'s a two-rule cut: never past medium, and always sliced thin against the grain. Follow both and it\'s fantastic; break either and you\'ll be chewing until Tuesday.',
    history:
      '"London broil" — despite the name, an American invention with no London pedigree — made flank steak famous in mid-century America: marinate, broil, slice thin on the bias. Flank is also the traditional cut of carne asada in northern Mexico and matambre in Argentina, where it\'s stuffed, rolled and grilled. For decades it was a budget cut; the fajita boom and flank\'s marinade-friendly reputation have long since promoted it to premium pricing.',
    cook:
      'Marinate (soy, lime, garlic — anything acidic and salty; its open grain drinks marinade), then grill over the hottest fire you can build: 3–4 minutes per side, pull at 52–54°C, rest, and slice thin at a 45° angle against that big obvious grain. It also makes superb stuffed pinwheels (matambre-style) — butterflied, filled, rolled, and roasted at moderate heat.',
    starCuts: [
      { name: 'Flank steak', desc: 'The whole primal is essentially one cut. Feeds four, takes marinade like a sponge, done in ten minutes.' },
      { name: 'Carne asada', desc: 'Not a cut but a calling: citrus-marinated flank (or skirt), grilled hard, chopped for tacos. The smell of a Sonoran Sunday.' }
    ],
    tip: 'The grain on flank is so visible it\'s a teaching tool: slice a piece with the grain, then against, and taste the difference. You\'ll never forget the rule again.'
  },

  round: {
    name: 'Round',
    aka: 'the rear leg & rump',
    badge: 'slow',
    badgeText: 'Roast low, slice thin — or make jerky',
    color: '#6d8bb0',
    overview:
      'The round is the cow\'s entire rear leg — enormous, ultra-lean, and in constant use, which makes it tough without the internal fat that saves the chuck. It\'s the least glamorous primal and honest cooks admit it: this is roast-beef, jerky, and deli territory, not steak night. Its virtue is price and sheer volume of clean, lean beef.',
    history:
      'The round is why roast beef is a sandwich. Eye of round and top round, roasted rare and shaved paper-thin, built the deli roast beef counter, the Chicago Italian beef (gravy-dunked, giardiniera-topped, invented at 1930s Italian-American weddings to stretch cheap beef across many guests), and the Baltimore pit beef sandwich — charred outside, rare inside, horseradish mandatory. Biltong and jerky traditions worldwide also lean on the round: lean meat dries best.',
    cook:
      'The round rewards exactly one approach: roast at low temperature (107–121°C) only to rare or medium-rare (52–54°C), rest, then slice as thin as your knife allows — thin slicing is what defeats the toughness. Pushed past medium it turns to gray cardboard, and no sauce can bring it back. Top round also makes the best jerky on the animal: lean, uniform, cheap.',
    starCuts: [
      { name: 'Eye of round', desc: 'A lean torpedo that looks like tenderloin and absolutely is not. Roast rare, shave thin, pile on bread.' },
      { name: 'Top round', desc: 'The London-broil-labeled roast at every supermarket, and the jerky maker\'s first choice.' },
      { name: 'Baltimore pit beef', desc: 'Top round grilled hot over charcoal, black outside and pink inside, shaved onto a kaiser roll with raw onion and horseradish. Maryland\'s answer to brisket.' }
    ],
    tip: 'Smoke an eye of round to 52°C, chill it overnight, then shave it thin: you\'ve just made the best roast beef sandwiches of your life for a fraction of deli prices.'
  },

  shank: {
    name: 'Shank',
    aka: 'the legs — fore & hind',
    badge: 'slow',
    badgeText: 'Braise territory — the longest game',
    color: '#946b8c',
    overview:
      'The shanks are the animal\'s actual legs — the most-used, toughest, most collagen-dense meat on the entire cow, wrapped around a bone full of marrow. This is not grilling meat. It isn\'t even really smoking meat. It\'s braising meat: hours submerged in gently bubbling liquid until all that connective tissue dissolves into the richest broth you can make from beef.',
    history:
      'Every cuisine with cattle has a shank monument: osso buco alla milanese (technically veal, crowned with gremolata and prized for the marrow — the name means "bone with a hole"), Vietnamese phở built on shank and marrow bones, Mexican caldo de res. Shank is peasant food in the noblest sense — the cut nobody wanted, transformed by nothing but time into dishes people now book tables for. The modern BBQ world has discovered it too: the smoked "beef shank lollipop," a whole shank smoked then braised, is the new showpiece on competition tables.',
    cook:
      'Braise, full stop: sear hard, then submerge in stock, wine, or chile broth at a bare simmer (or a 135°C oven / smoker with a covered pan) for 4–6 hours until the meat falls off the bone. The BBQ crossover move: smoke the whole shank naked for 3 hours for bark and smoke, then braise it to tenderness in the same smoker. Save every drop of the braising liquid — it\'s liquid gold.',
    starCuts: [
      { name: 'Cross-cut shank (osso buco cut)', desc: 'Sawed into thick disks, bone and marrow in the center. The classic braise, and the marrow is the cook\'s reward.' },
      { name: 'Whole shank ("thor\'s hammer")', desc: 'The full hind shank, frenched. Smoked then braised, it looks mythological on a table and shreds like pot roast.' },
      { name: 'Marrow bones', desc: 'Split, roasted 20 minutes, spread on toast with salt. The original butter.' }
    ],
    tip: 'Whatever you braise the shank in becomes better stock than anything you can buy. Strain it, freeze it, and your next ten dishes are already improved.'
  }
};
