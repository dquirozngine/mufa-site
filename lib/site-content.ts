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
          { label: "Bio", href: "/bio" },
          { label: "Contact", href: "/#contact" },
        ],
      },
    ],
  },
};
