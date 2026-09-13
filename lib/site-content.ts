// Single source of truth for every string on the site.
//
// Editing the site = editing this file. Components import only the slice they
// need (`const { hero } = siteContent`), so copy changes never touch layout.

export type BookEntry = {
  title: string;
  /** Sub-title as printed on the cover. Empty string when there isn't one. */
  subtitle: string;
  /** Author or editor, exactly as credited on the cover. */
  author: string;
  /** Path under /public/covers/. */
  cover: string;
};

export const siteContent = {
  meta: {
    title: "(u)ⁿ",
    description:
      "Library and biography — experimental architecture, membranes, and life at the limits.",
    // Cloudflare-provided address, used for canonical / OG tags. Swap this for
    // a custom domain if the site ever gets one.
    url: "https://mufa-site.dquiroz-ngine.workers.dev",
  },

  nav: {
    // Root-anchored (`/#library`) rather than bare (`#library`) so the links
    // also work from /bio, where a bare anchor would look for the target on
    // the current page and silently do nothing.
    links: [
      { label: "Library", href: "/#library" },
      { label: "Projects", href: "/projects" },
      { label: "Bio", href: "/bio" },
      { label: "Contact", href: "/#contact" },
    ],
  },

  hero: {
    title: "Library",
    standfirst:
      "The reading behind the work — extremophiles and origins of life, pneumatic and membrane architecture, ecology, and the philosophy of the living.",
  },

  // The epigraph that opens the catalogue. Set hard right, against the
  // left-locked LIBRARY headline, and revealed as you scroll past it.
  //
  // PASTE THE PASSAGE HERE — one string per paragraph. The section renders
  // nothing at all while `paragraphs` is empty, so the site stays intact
  // until the text is in.
  epigraph: {
    // ⚠️ PLACEHOLDER — my own wording, standing in only so the layout and the
    // reveal can be judged at the right length. Replace both strings with the
    // real Maturana & Varela passage.
    paragraphs: [
      "A living system is not a thing but a doing. What holds it together is not the matter passing through it, which is replaced continuously and without ceremony, but the pattern of processes by which that matter is put to work. The components produce the network, and the network produces the components, and neither is prior to the other. Stop the production for long enough and there is no structure left to point at, because the structure was never a structure in the first place — it was an activity that looked like one from the outside. This is the sense in which such a system is closed: not sealed off from the world, which would kill it, but self-specifying, determining its own organisation through its own operation, and answering perturbation with compensation rather than with instruction.",
      "The consequence worth sitting with is that the boundary is produced too. A membrane is not a wall laid down in advance and then filled; it is made by the processes it goes on to contain, and it persists only while they continue to make it. The system therefore has no blueprint and no builder, and it is not assembled so much as maintained. What it conserves is not its parts, and not even its shape, but the relations among its processes — and it will change anything else at all in order to keep those constant. Everything architecture usually takes for granted is here reversed: form is the residue of continuous production, enclosure is an ongoing achievement rather than a given, and permanence, where it appears, is only the visible face of a turnover that never stops.",
    ] as string[],
    // Marginal note, set in the narrow column beside the quote.
    citation: [
      "Maturana, Humberto R., and Francisco J. Varela,",
      "Autopoiesis and Cognition: The Realization of the Living.",
      "Boston Studies in the Philosophy of Science, vol. 42.",
      "Dordrecht: D. Reidel, 1980, pp. 78–79.",
    ],
    isbn: "ISBN 90-277-1015-5",
  },

  books: {
    label: "Index",
    // Alphabetical by title, ignoring a leading article. Renders in the order
    // given; the component does not sort.
    items: [
    {
      title: "Abducting the Outside",
      subtitle: "Collected Writings 2003–2018",
      author: "Reza Negarestani",
      cover: "/covers/abducting-the-outside.jpg",
    },
    {
      title: "Antarctic Microbiology",
      subtitle: "",
      author: "E. Imre Friedmann (ed.)",
      cover: "/covers/antarctic-microbiology.jpg",
    },
    {
      title: "Antarctic Resolution",
      subtitle: "",
      author: "Giulia Foscari / UNLESS (ed.)",
      cover: "/covers/antarctic-resolution.jpg",
    },
    {
      title: "Archaea",
      subtitle: "Evolution, Physiology, and Molecular Biology",
      author: "Roger A. Garrett, Hans-Peter Klenk (eds.)",
      cover: "/covers/archaea.jpg",
    },
    {
      title: "Astrobiology",
      subtitle: "Understanding Life in the Universe",
      author: "Charles S. Cockell",
      cover: "/covers/astrobiology.jpg",
    },
    {
      title: "Biocatalysis",
      subtitle: "Biochemical Fundamentals and Applications",
      author: "Peter Grunwald",
      cover: "/covers/biocatalysis.jpg",
    },
    {
      title: "Biofilms",
      subtitle: "",
      author: "William G. Characklis, Kevin C. Marshall (eds.)",
      cover: "/covers/biofilms.jpg",
    },
    {
      title: "Biopolyesters",
      subtitle: "",
      author: "W. Babel, A. Steinbüchel (eds.)",
      cover: "/covers/biopolyesters.jpg",
    },
    {
      title: "Biotechnology of Biopolymers",
      subtitle: "From Synthesis to Patents",
      author: "Alexander Steinbüchel, Yoshiharu Doi (eds.)",
      cover: "/covers/biotechnology-of-biopolymers.jpg",
    },
    {
      title: "Critical Zones",
      subtitle: "Die Wissenschaft und Politik des Landens auf der Erde",
      author: "Bruno Latour, Peter Weibel (eds.)",
      cover: "/covers/critical-zones.jpg",
    },
    {
      title: "Decolonizing Nature",
      subtitle: "Contemporary Art and the Politics of Ecology",
      author: "T. J. Demos",
      cover: "/covers/decolonizing-nature.jpg",
    },
    {
      title: "The Design and Engineering of Curiosity",
      subtitle: "How the Mars Rover Performs Its Job",
      author: "Emily Lakdawalla",
      cover: "/covers/design-and-engineering-of-curiosity.jpg",
    },
    {
      title: "The Ecological Rift",
      subtitle: "Capitalism's War on the Earth",
      author: "John Bellamy Foster, Brett Clark, Richard York",
      cover: "/covers/the-ecological-rift.jpg",
    },
    {
      title: "Ecosophical Aesthetics",
      subtitle: "Art, Ethics and Ecology with Guattari",
      author: "Patricia MacCormack, Colin Gardner (eds.)",
      cover: "/covers/ecosophical-aesthetics.jpg",
    },
    {
      title: "End Game",
      subtitle: "Tipping Point for Planet Earth?",
      author: "Anthony D. Barnosky, Elizabeth A. Hadly",
      cover: "/covers/end-game.jpg",
    },
    {
      title: "Environmental Microbiology",
      subtitle: "",
      author: "Walter Reineke, Michael Schlömann",
      cover: "/covers/environmental-microbiology.jpg",
    },
    {
      title: "Environmental Microbiology: Fundamentals and Applications",
      subtitle: "Microbial Ecology",
      author: "Jean-Claude Bertrand, Pierre Caumette, Philippe Lebaron, Robert Matheron, Philippe Normand, Télesphore Sime-Ngando (eds.)",
      cover: "/covers/environmental-microbiology-fundamentals.jpg",
    },
    {
      title: "Enzymatic Polymerization towards Green Polymer Chemistry",
      subtitle: "",
      author: "Shiro Kobayashi, Hiroshi Uyama, Jun-ichi Kadokawa (eds.)",
      cover: "/covers/enzymatic-polymerization.jpg",
    },
    {
      title: "Evolutionary Cell Biology",
      subtitle: "The Origins of Cellular Architecture",
      author: "Michael Lynch",
      cover: "/covers/evolutionary-cell-biology.jpg",
    },
    {
      title: "Extremophiles",
      subtitle: "Microbial Life in Extreme Environments",
      author: "Koki Horikoshi, William D. Grant (eds.)",
      cover: "/covers/extremophiles.jpg",
    },
    {
      title: "Extremophiles Handbook",
      subtitle: "",
      author: "Koki Horikoshi (ed.)",
      cover: "/covers/extremophiles-handbook.jpg",
    },
    {
      title: "Frei Otto, Carlfried Mutschler: Multihalle",
      subtitle: "",
      author: "Georg Vrachliotis",
      cover: "/covers/multihalle.jpg",
    },
    {
      title: "Frei Otto: Thinking by Modeling",
      subtitle: "",
      author: "Georg Vrachliotis, Joachim Kleinmanns, Martin Kunz, Philip Kurz (eds.)",
      cover: "/covers/frei-otto-thinking-by-modeling.jpg",
    },
    {
      title: "From Molecules to Materials",
      subtitle: "Pathways to Artificial Photosynthesis",
      author: "Elena A. Rozhkova, Katsuhiko Ariga (eds.)",
      cover: "/covers/from-molecules-to-materials.jpg",
    },
    {
      title: "Hack the Planet",
      subtitle: "Science's Best Hope — or Worst Nightmare — for Averting Climate Catastrophe",
      author: "Eli Kintisch",
      cover: "/covers/hack-the-planet.jpg",
    },
    {
      title: "Handbook of Biopolymers",
      subtitle: "",
      author: "Sabu Thomas, Ajitha AR, Cintil Jose Chirayil, Bejoy Thomas (eds.)",
      cover: "/covers/handbook-of-biopolymers.jpg",
    },
    {
      title: "Hans-Walter Müller und das lebendige Haus",
      subtitle: "",
      author: "Robert Stürzl",
      cover: "/covers/hans-walter-mueller.jpg",
    },
    {
      title: "Haus-Rucker-Co: Atemzonen",
      subtitle: "",
      author: "Lentos Kunstmuseum Linz",
      cover: "/covers/atemzonen.jpg",
    },
    {
      title: "Human Spaceflight",
      subtitle: "Mission Analysis and Design",
      author: "Wiley J. Larson, Linda K. Pranke (eds.)",
      cover: "/covers/human-spaceflight.jpg",
    },
    {
      title: "International Space Station",
      subtitle: "Architecture Beyond Earth",
      author: "David Nixon",
      cover: "/covers/international-space-station.jpg",
    },
    {
      title: "Intraterrestrials",
      subtitle: "Discovering the Strangest Life on Earth",
      author: "Karen G. Lloyd",
      cover: "/covers/intraterrestrials.jpg",
    },
    {
      title: "Inventions",
      subtitle: "The Patented Works of R. Buckminster Fuller",
      author: "R. Buckminster Fuller",
      cover: "/covers/inventions.jpg",
    },
    {
      title: "Life at the Limits",
      subtitle: "Organisms in extreme environments",
      author: "David A. Wharton",
      cover: "/covers/life-at-the-limits.jpg",
    },
    {
      title: "Machine and Sovereignty",
      subtitle: "For a Planetary Thinking",
      author: "Yuk Hui",
      cover: "/covers/machine-and-sovereignty.jpg",
    },
    {
      title: "Metabolic Engineering",
      subtitle: "",
      author: "J. Nielsen (ed.)",
      cover: "/covers/metabolic-engineering.jpg",
    },
    {
      title: "Microbial Bioreactors for Industrial Molecules",
      subtitle: "",
      author: "Sudhir P. Singh, Santosh Kumar Upadhyay (eds.)",
      cover: "/covers/microbial-bioreactors.jpg",
    },
    {
      title: "Microbial Extracellular Polymeric Substances",
      subtitle: "Characterization, Structure and Function",
      author: "J. Wingender, T. R. Neu, H.-C. Flemming (eds.)",
      cover: "/covers/microbial-eps.jpg",
    },
    {
      title: "The Molecular Origins of Life",
      subtitle: "Assembling Pieces of the Puzzle",
      author: "André Brack (ed.)",
      cover: "/covers/molecular-origins-of-life.jpg",
    },
    {
      title: "Nanjing Lectures 2016–2019",
      subtitle: "",
      author: "Bernard Stiegler",
      cover: "/covers/nanjing-lectures.jpg",
    },
    {
      title: "NASA's Moon to Mars Architecture",
      subtitle: "Architecture Definition Document",
      author: "NASA",
      cover: "/covers/moon-to-mars-architecture.jpg",
    },
    {
      title: "The Natural Contract",
      subtitle: "",
      author: "Michel Serres",
      cover: "/covers/the-natural-contract.jpg",
    },
    {
      title: "The Neganthropocene",
      subtitle: "",
      author: "Bernard Stiegler",
      cover: "/covers/the-neganthropocene.jpg",
    },
    {
      title: "Nine Chains to the Moon",
      subtitle: "An Adventure Story of Thought",
      author: "Buckminster Fuller",
      cover: "/covers/nine-chains-to-the-moon.jpg",
    },
    {
      title: "Out of This World",
      subtitle: "The New Field of Space Architecture",
      author: "A. Scott Howe, Brent Sherwood (eds.)",
      cover: "/covers/out-of-this-world.jpg",
    },
    {
      title: "The Physics of Bacteria",
      subtitle: "From Cells to Biofilms",
      author: "Thomas Andrew Waigh",
      cover: "/covers/physics-of-bacteria.jpg",
    },
    {
      title: "Pierre Huyghe",
      subtitle: "",
      author: "Pierre Huyghe",
      cover: "/covers/pierre-huyghe.jpg",
    },
    {
      title: "Plastics from Bacteria",
      subtitle: "Natural Functions and Applications",
      author: "Guo-Qiang Chen (ed.)",
      cover: "/covers/plastics-from-bacteria.jpg",
    },
    {
      title: "Polyextremophiles",
      subtitle: "Life Under Multiple Forms of Stress",
      author: "Joseph Seckbach, Aharon Oren, Helga Stan-Lotter (eds.)",
      cover: "/covers/polyextremophiles.jpg",
    },
    {
      title: "Principles of Biological Autonomy",
      subtitle: "",
      author: "Francisco J. Varela",
      cover: "/covers/principles-of-biological-autonomy.jpg",
    },
    {
      title: "Prospector",
      subtitle: "Casting an eye on Haus-Rucker-Co / post-Haus-Rucker",
      author: "Zamp Kelp",
      cover: "/covers/prospector.jpg",
    },
    {
      title: "Scorched Earth",
      subtitle: "Beyond the Digital Age to a Post-Capitalist World",
      author: "Jonathan Crary",
      cover: "/covers/scorched-earth.jpg",
    },
    {
      title: "Symbiotic Planet",
      subtitle: "A New Look at Evolution",
      author: "Lynn Margulis",
      cover: "/covers/symbiotic-planet.jpg",
    },
    {
      title: "Systems Metabolic Engineering",
      subtitle: "Methods and Protocols",
      author: "Hal S. Alper (ed.)",
      cover: "/covers/systems-metabolic-engineering.jpg",
    },
    {
      title: "Tactical Biopolitics",
      subtitle: "Art, Activism, and Technoscience",
      author: "Beatriz da Costa, Kavita Philip (eds.)",
      cover: "/covers/tactical-biopolitics.jpg",
    },
    {
      title: "Teatro Della Terra Alienata",
      subtitle: "Re-imagining the Fate of the Great Barrier Reef",
      author: "Grandeza / Bajeza",
      cover: "/covers/teatro-della-terra-alienata.jpg",
    },
    {
      title: "Wastewater Microbiology",
      subtitle: "",
      author: "Gabriel Bitton",
      cover: "/covers/wastewater-microbiology.jpg",
    },
    {
      title: "The World as an Architectural Project",
      subtitle: "",
      author: "Hashim Sarkis, Roi Salgueiro Barrio, Gabriel Kozlowski",
      cover: "/covers/world-as-architectural-project.jpg",
    },
    ] satisfies BookEntry[],
  },

  projects: {
    label: "Projects",
    title: "Projects",
    // One entry per project. `images[0]` is the main image; the rest render as
    // thumbnails beneath it and swap into the main slot when clicked.
    items: [
      {
        title: "Old Technologies",
        year: "",
        paragraphs: [
          "The solo exhibition Rhetorical Silence by Mathias Gramoso brings together a new body of work developed through an intensive seven-day experiment, where the artist lived isolated inside the total blackness of an enormous white sphere.",
          "The American sociobiologist E. O. Wilson once observed of our contemporaneous species that we have paleolithic brains, medieval institutions, and godlike technology. Interestingly enough, he began as an ant taxonomist and developed a concept known as the taxon cycle: a theory of how a species changes when encountering a new habitat, like an island; expanding and contracting across time and place, evolving inevitably towards its eventual extinction. It goes something like this: an intrepid ant arrives in a new territory, a kingdom bounded by water that it besets and colonises. Eventually, its population specialises and fractures into smaller, more specialised communities, which, with time, grow so distinct that the original species can be considered extinct.",
          "Likely, the ants are unmoved by this transgression; too busy, in the leaf litter and rock quarries, to care whether the descendants of the original colony could technically be considered the same species as their ancestors. But it is curious, returning to the neolithic hominid and his godlike technology, to think about our own intrepidness as a species and the possible annihilations we accelerate towards. Would the last human in any meaningful way recognise the first?",
          "Not to insinuate that our more primitive and roaming iterations were necessarily more human, somehow, than 21st-century Berliners, but there appears still an observable yearning in our species, a keen and sharp nostalgia for a past. In many cases, what informs that nostalgia is a desire for the absence of technologies which now govern and surveil us. It is a longing for simpler tools.",
          "Arrowheads which do not clandestinely listen to your calls. Compasses that lead you home, rather than to the port of the highest bidder. Not the endless screenworld of black mirrors which seek to demonically possess our every hour; every minute and every second, and whatever fractal that exists between them, ad nauseam. It is ironic, then, as remarked by Arthur C. Clarke, that any sufficiently advanced technology would be indistinguishable from magic, because yes, the tech which now suffuses our lives is magical. It has performed an impressive disappearing act by seemingly erasing temporality altogether. It cast a spell that flung us into an obliterating nowness, occupied by instantaneous apparitions and unhelpful sphinxes, as long as you pay for Go or Pro, that is.",
          "It begs the question, then: when does a tool stop being a tool? At which point are we allowed to call technology a cage? And, once acknowledged as such, how do you free yourself from it? Rhetorical Silence suggests, as an intense and vulnerable proposition: if you cannot get out, then maybe you need to look for escape within. It is an uncompromising and frankly terrifying solution, yet blankly beautiful in the diametric yet dialectic relationship between the visual invasiveness of an attention economy and total sensory deprivation, a chasm where reams of reels, generated images and plastic surfaces give way to nothing: cleaved to pitch black.",
          "By doing so, maybe paradoxically, Rhetorical Silence foregrounds the act of looking. It asks who peers back at you when you stare into the abyss. The answer is simple on the surface (and only there): It’s you. But what part of you are you seeing? You see the senses sensing; the machinery of perception itself: entoptic phenomena, phosphenes, and spontaneous visual patterns generated by the brain and visual system in the absence of external stimuli. But who shepherds these manifestations? A Virgilian spirit guide, descending a private Duat shaped by memory, expectation, attention, and prior experience. But again, why? Why surrender to such a crushing unknown? Why build an enormous fiberglass retina and gestate in it for a week? Why go where no one can follow you?",
          "Because turning inward will allow you to return to the most primordial tool of all: the body. And to test the boundaries of what that body can experience; digging your hands into the unturned soil of the mind to see, even without light, what has been buried there. Because all your electronic devices isolate you from it. Because it is private and therefore non-monetisable; because it cannot be owned. Because it might lead you somewhere both very old and very new. Past the navel of the dream, where Sigmund Freud believed interpretation ran out and reverie touched something unconscious that can never be fully known or articulated.",
          "Maybe we are naturally drawn to that unknown. It is after all one of our defining characteristics: that our species loves to wander, from mountain ridge to grassland, pole to pole. Perhaps that is also why we still utilize one of our oldest technologies: getting high. Tripping is a pastime shared by many otherwise unrelated civilizations, bound by the availability of organic hallucinogens. The reasoning for entering these interior worlds is manifold, from stabilizing cultural bonds through ritual to the countercultural act of breaking away from them, yet it does result in a kind of canon, from Celtic Druids consuming fly agaric and black nightshade to Aldous Huxley inducing sacramental visions with mescaline, itself derived from peyote, the flowering cactus revered and devoured by the Aztecs, and many others.",
          "There are even archaeologists who believe that you can map constellations of societies that ceremonially consumed hallucinogenic plants by way of the symbols carved in tomb passages and etched on cave walls, since the documented geometries of such markings emerge from the brain while under the influence, independent of visual input. Mathias Gramoso would be part of this space-time continuum of psychonauts, albeit the drawings drawn from his visions in the series Phosphenes were produced without drugs. Rather, they were rendered via a physiognomic trial so intense it induced pretty much the same effect. And it delivered the artist to the same destination: the lifeworld of the brain and the eye.",
          "The eye, particularly, remains a recurring visual thread throughout the show, framing it as a veil between worlds; a mediator between the phenomenal and the noumenal, both all-seeing and unreliable. The motif appears in the photo series Internal log, revealing the artist as a white pupil floating in a black cornea, as well as the wall sculpture Great Doubt, built from a panel from the spherical cell itself, where, through a peephole, visitors are invited to witness the isolatory ordeal. Recorded with a security camera from a bird’s eye view, it is a split investigation into the interiority of a private human as well as the broader societal structures which entrap and monitor us, where being seen is simultaneously a social requirement and a control mechanism used to weed out defects and dissent. Rhetorical Silence moves seamlessly between these vantage points; becoming eye-like, a yolky precipice where the artist can be both object and subject; existent on either side of the lens.",
          "While some might be tempted to place the work squarely in performance art, this ultimately isn’t the art historical framework nor the narrative push of Rhetorical Silence. The sphere, named Exuviae in reference to the shed skin of a molting animal, speaks rather to the strange experience of being. What is it to be conscious? What are we when infrastructures peel away? It is back to the ant colony which can no longer recognize itself. Ask the ant: in your progress as a species and in your insistence that you must always go faster and further, what has been lost? Or, more radically and hopefully, where can it again be found?",
          "The ant suggests: looking deep; looking beyond; looking within, invoking Henri Matisse’s observation that there are cathedrals everywhere, but only for those with eyes to see.",
        ],
        images: [
          "/work/mathias-gramoso-0006.jpg",
          "/work/mathias-gramoso-0018.jpg",
          "/work/mathias-gramoso-0032.jpg",
          "/work/mathias-gramoso-0048.jpg",
          "/work/mathias-gramoso-0066.jpg",
          "/work/mathias-gramoso-0077.jpg",
          "/work/mathias-gramoso-0094.jpg",
          "/work/mathias-gramoso-0095.jpg",
          "/work/mathias-gramoso-0142.jpg",
        ],
      },
    ],
  },

  bio: {
    label: "Bio",
    title: "Profil",
    portrait: "/portrait.jpg",
    portraitAlt: "Portrait in the laboratory",
    name: "Miguel Angel Reyes Benz",
    // Art collective "Ari" (ant).
    collective: "アート・コレクティブ「蟻」",
    paragraphs: [
      "Miguel Angel Reyes Benz is a M.Sc. architect, visual artist and researcher. Influenced by Frei Otto and the Institut for lightweight structures and conceptual design (ILEK) he moved to Germany and got his dual degree from TU Berlin and Pontificia Universidad Católica de Chile under the DAAD (German Academic Exchange Service) sponsorship.",
      "His work moves between experimental architecture, sculpture, and exhibition production, always rooted in hands-on material practice, from membrane fabrication and metalworking to site-specific installation. He has been actively exhibiting and participating in architecture and art competitions internationally since 2011. For more than a decade he has carried out para-academic research at the intersection of art, architecture, and frontier sciences.",
      "He is currently enrolled as a PhD student at the University of Innsbruck\u2019s Institute for Experimental Architecture, in the Integrative Design | EXTREMES program, supervised by Univ.-Prof. Dr. Barbara Imhof. His doctoral research, titled \u2018Negentropic Bifurcations Towards an Autopoietic Polyextremophile Transilience\u2019, looks at how PHA (polyhydroxyalkanoate), a biodegradable biopolymer produced by extremophile bacteria, could serve as a membrane building material for pneumatic life support systems in extreme environments on Earth. The project works across three scales (molecular, material, and architectural), connecting systems metabolic engineering, environmental microbiology, materials engineering, and architecture for extreme environments. Aimed to a field tested prototype of a lightweight pneumatic structure, tested in the Icelandic highlands and in Antarctica.",
      "He participated at FALCON Conference, University of Iceland, Reykjav\u00edk 2025, organized by AbGradE (Astrobiology Graduates in Europe), Berlin Early Career Space Research Conference, Freie Universit\u00e4t Berlin 2025 and 15th International Congress on Extremophiles, Yonsei University, Seoul, Republic of Korea 2026.",
    ],
    education: {
      label: "Ausbildung",
      items: [
        {
          year: "2026–",
          title: "PhD Integrative/s Design EXTREMES",
          detail:
            "Universität Innsbruck, Institut für Experimentelle Architektur. Betreuerin: Prof. Dr. Barbara Imhof.",
        },
        {
          year: "2016",
          title: "M.Sc. Doppelabschluss (mit Auszeichnung)",
          detail:
            "TU Berlin / Pontificia Universidad Católica de Chile. DAAD-Stipendiat · Akademische Exzellenzauszeichnung 2016.",
        },
        {
          year: "2012",
          title: "BA.Sc.",
          detail: "Pontificia Universidad Católica de Chile, Santiago, Chile.",
        },
      ],
    },
  },

  contact: {
    label: "Contact",
    title: "Get in touch",
    description:
      "Questions, invitations, collaboration — send a note and it lands in the inbox directly.",
    fields: {
      name: "Name",
      email: "Email",
      subject: "Subject (optional)",
      message: "Message",
    },
    submit: "Send",
    sending: "Sending",
    success: "Thanks — your message is on its way.",
    error: "Something went wrong. Please try again in a few minutes.",
  },

  footer: {
    name: "(u)ⁿ",
    columns: [
      {
        heading: "Index",
        links: [
          { label: "Library", href: "/#library" },
          { label: "Projects", href: "/projects" },
          { label: "Bio", href: "/bio" },
          { label: "Contact", href: "/#contact" },
        ],
      },
    ],
  },
};
