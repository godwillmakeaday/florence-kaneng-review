export type BodyBlock = {
  heading?: string;
  paragraphs: string[];
  pullQuote?: string;
};

export type Article = {
  slug: string;
  title: string;
  category: string;
  issue: string;
  excerpt: string;
  readingTime: string;
  author: string;
  date: string;
  deck: string;
  medicalDisclaimer?: boolean;
  body: BodyBlock[];
};

export const articles: Article[] = [
  {
    slug: "she-was-my-mother-she-was-a-mother",
    title: "She Was My Mother. She Was a Mother.",
    category: "Founding Essay",
    issue: "Issue One",
    excerpt:
      "A personal and public meditation on one woman whose care becomes a continuing institution of memory, dignity, and service.",
    readingTime: "7 min read",
    author: "Florence Kaneng Review Editorial Desk",
    date: "2026-06-21",
    deck:
      "The founding essay of Florence Kaneng Review: a meditation on one mother, and on motherhood as a public memory that continues to care.",
    body: [
      {
        paragraphs: [
          "There are lives that do not end at the boundary of biography. They continue as atmosphere, instruction, memory, correction, courage, and tenderness. A mother can leave the room and still remain the shape of the room. She can be absent from the day and still guide the habits by which the day is survived.",
          "Florence Kaneng Review begins from a sentence that is both private and public: she was my mother. She was a mother. That second sentence opens the door. It refuses to imprison her legacy inside one family alone. It recognizes motherhood as a form of public meaning, a quiet institution, a civic force that often works without title, salary, applause, or official recognition."
        ],
        pullQuote:
          "A mother can leave the room and still remain the shape of the room."
      },
      {
        heading: "From memory to institution",
        paragraphs: [
          "The purpose of this magazine is not to make grief decorative. It is to let memory become service. A life of care should not be reduced to nostalgia when it can become a school of attention for others: mothers, nurses, students, children, families, churches, schools, and communities.",
          "To remember a mother properly is not only to say that she suffered, worked, loved, endured, fed, corrected, prayed, and carried. It is also to ask what kind of society depends on those acts and then forgets to honour them."
        ]
      },
      {
        heading: "A mother beyond one household",
        paragraphs: [
          "A mother is not only the woman who gave birth. In many communities, motherhood is also performed by nurses, aunties, teachers, neighbours, widows, older sisters, church women, caregivers, and people who stand between vulnerability and abandonment. This magazine will make room for that wider field of care.",
          "Florence Kaneng Review exists to hold that field with reverence. Its first work is to see care clearly, name it seriously, and refuse to treat it as soft background work."
        ]
      }
    ]
  },
  {
    slug: "motherhood-as-public-infrastructure",
    title: "Motherhood as Public Infrastructure",
    category: "Doctrine",
    issue: "Issue One",
    excerpt:
      "Why mothers are not only private family figures, but hidden systems by which schools, economies, and nations survive.",
    readingTime: "6 min read",
    author: "Florence Kaneng Review Editorial Desk",
    date: "2026-06-21",
    deck:
      "A doctrine for seeing motherhood not as sentimental background, but as one of the first systems by which society becomes possible.",
    body: [
      {
        paragraphs: [
          "A mother is not only a private family figure. Motherhood is one of the hidden systems by which society survives. Before the school forms the child, somebody fed the child. Before the law protects the citizen, somebody preserved the child. Before the economy receives the worker, somebody raised the person. Before the nation counts population, mothers carried life.",
          "This is what Florence Kaneng Review means by motherhood as public infrastructure. It is the claim that societies are built on care long before they are built on concrete. The home is not outside civilization. In many ways, it is civilization's first workshop."
        ],
        pullQuote:
          "Societies are built on care long before they are built on concrete."
      },
      {
        heading: "The hidden systems of survival",
        paragraphs: [
          "Infrastructure is usually imagined as roads, bridges, power lines, institutions, records, courts, hospitals, and schools. But every one of those systems presumes that someone has kept human beings alive long enough to enter them. The child who walks to school has already been watched, washed, fed, corrected, and encouraged.",
          "When care collapses, public life eventually feels it. Schools struggle. Hospitals receive what homes could not hold. Communities become harsher. Children become less protected. The economy receives wounded adults and then wonders why productivity is fragile."
        ]
      },
      {
        heading: "A public language for private labour",
        paragraphs: [
          "The doctrine does not romanticize mothers. It does not pretend mothers are perfect or that families are simple. It simply insists that the labour of care deserves serious language. Care should not be praised only after loss. It should be understood while it is still carrying society."
        ]
      }
    ]
  },
  {
    slug: "the-nurse-mother-when-care-becomes-a-profession",
    title: "The Nurse-Mother: When Care Becomes a Profession",
    category: "Nursing",
    issue: "Issue One",
    excerpt:
      "A reflection on nurses, caregivers, and women whose professional care becomes a public form of motherhood.",
    readingTime: "5 min read",
    author: "Florence Kaneng Review Editorial Desk",
    date: "2026-06-21",
    deck:
      "Nursing is not merely a job title. At its best, it is disciplined attention to human fragility.",
    medicalDisclaimer: true,
    body: [
      {
        paragraphs: [
          "The nurse stands at a border most people prefer not to imagine. On one side is ordinary life. On the other side is fear, pain, uncertainty, birth, recovery, weakness, waiting, and sometimes grief. The nurse does not abolish human fragility. She attends to it with discipline.",
          "Florence Kaneng Review uses the phrase nurse-mother carefully. It does not mean every nurse is a mother in the same way, nor does it reduce professional skill to sentiment. It means that nursing often carries a public form of care that resembles motherhood in attention, watchfulness, patience, and nearness to vulnerability."
        ],
        pullQuote:
          "The nurse does not abolish human fragility. She attends to it with discipline."
      },
      {
        heading: "Care with training",
        paragraphs: [
          "The difference between vague kindness and professional care matters. Nursing belongs to knowledge, procedure, observation, hygiene, records, teamwork, and responsibility. Its tenderness is strengthened by training. Its compassion is not careless; it is structured.",
          "This magazine will honour nurses without pretending to be a medical textbook. It will tell stories of care, dignity, and service while reminding readers that health concerns require qualified professional guidance."
        ]
      },
      {
        heading: "The public memory of nurses",
        paragraphs: [
          "Many communities remember the doctor whose name is on the signboard, but forget the nurses who stayed in the room. A serious culture of care must remember both expertise and presence. Nurses often witness the ordinary courage of families and the quiet endurance of patients before anyone else does."
        ]
      }
    ]
  },
  {
    slug: "the-hidden-economy-of-mothers",
    title: "The Hidden Economy of Mothers",
    category: "Home Life",
    issue: "Issue One",
    excerpt:
      "The unpaid architecture of feeding, teaching, watching, guiding, correcting, praying, and holding families together.",
    readingTime: "5 min read",
    author: "Florence Kaneng Review Editorial Desk",
    date: "2026-06-21",
    deck:
      "A reflection on the unseen labour through which homes become stable enough for public life to function.",
    body: [
      {
        paragraphs: [
          "Every household contains an economy that may never appear in formal accounts. Someone remembers food. Someone notices fever. Someone asks about school. Someone stretches money, manages moods, receives complaints, repairs dignity, and keeps the day from falling apart.",
          "This is the hidden economy of mothers. It is not hidden because it is small. It is hidden because society often counts the wrong things first."
        ],
        pullQuote:
          "It is not hidden because it is small. It is hidden because society often counts the wrong things first."
      },
      {
        heading: "Labour without invoice",
        paragraphs: [
          "The home produces confidence, habits, language, discipline, food routines, emotional recovery, and moral instruction. Much of this labour is unpaid, informal, and taken for granted. Yet when it is absent, every other institution receives the cost.",
          "The mother who holds a family together may not call herself an administrator, counsellor, nutrition planner, negotiator, teacher, historian, or chaplain. But the functions are there."
        ]
      },
      {
        heading: "Why dignity matters",
        paragraphs: [
          "To honour the hidden economy of mothers is not to trap women inside unpaid labour. It is to dignify what has been ignored while also asking how families, communities, and institutions can support the people who carry care."
        ]
      }
    ]
  },
  {
    slug: "the-house-as-the-first-hospital",
    title: "The House as the First Hospital",
    category: "Child & Care",
    issue: "Issue One",
    excerpt:
      "Before a child reaches the clinic, the home has already become the first place of observation, tenderness, and response.",
    readingTime: "4 min read",
    author: "Florence Kaneng Review Editorial Desk",
    date: "2026-06-21",
    deck:
      "A public-interest reflection on the home as the first place where vulnerability is noticed and dignity is protected.",
    medicalDisclaimer: true,
    body: [
      {
        paragraphs: [
          "Before a child reaches a clinic, the house has already become the first place of observation. Someone noticed the change in appetite. Someone touched the forehead. Someone watched the breathing, the mood, the silence, the crying, the weakness, or the unusual quiet.",
          "This does not make the home a substitute for professional healthcare. It means the home is often the first witness. In many families, the earliest form of care is attention."
        ],
        pullQuote:
          "The home is not a substitute for professional healthcare. It is often the first witness."
      },
      {
        heading: "Attention before diagnosis",
        paragraphs: [
          "There is a kind of knowledge that begins with closeness. A caregiver may not have clinical authority, but they may know the child's ordinary pattern. They may sense that something is different. Responsible care then becomes the bridge between noticing and seeking qualified help where needed.",
          "Florence Kaneng Review will speak about this bridge carefully. Its role is not to issue medical instructions. Its role is to deepen public respect for everyday care, child dignity, and responsible referral to qualified professionals."
        ]
      },
      {
        heading: "The dignity of response",
        paragraphs: [
          "A house becomes humane when vulnerability is not ignored. Whether the issue is illness, fear, hunger, school pressure, or sadness, the first act of care is often the same: to notice, to take seriously, and to respond without contempt."
        ]
      }
    ]
  },
  {
    slug: "care-is-not-soft-it-is-the-first-form-of-civilization",
    title: "Care Is Not Soft: It Is the First Form of Civilization",
    category: "Manifesto",
    issue: "Issue One",
    excerpt:
      "Care is structure, memory, discipline, protection, and the first architecture of human becoming.",
    readingTime: "4 min read",
    author: "Florence Kaneng Review Editorial Desk",
    date: "2026-06-21",
    deck:
      "A manifesto for refusing to treat care as weak, marginal, or merely emotional.",
    body: [
      {
        paragraphs: [
          "Care is often described with soft language, as if softness means weakness. But care is not soft. Care is structure. Care is memory. Care is discipline. Care is the first architecture of civilization.",
          "A society that cannot care for its children, mothers, sick, elderly, grieving, students, and vulnerable people may still build roads, offices, slogans, and ceremonies. But something fundamental has already failed."
        ],
        pullQuote:
          "Care is not soft. Care is structure, memory, discipline, and protection."
      },
      {
        heading: "Care as discipline",
        paragraphs: [
          "Real care is not indulgence. It includes correction, patience, boundaries, routine, sacrifice, and sometimes difficult truth. The person who cares must often do invisible planning and emotional labour before anyone else realizes there was a crisis to prevent.",
          "This is why care belongs to public thought. It is a discipline of human preservation."
        ]
      },
      {
        heading: "A civilization test",
        paragraphs: [
          "One way to judge a culture is to ask what it dismisses as small. If it dismisses mothers, nurses, caregivers, children, homes, students, and grief, then it dismisses the places where human beings are first made able to live."
        ]
      }
    ]
  }
];

export const issueOneArticles = articles.filter((article) => article.issue === "Issue One");

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getRelatedArticles(slug: string, limit = 3) {
  const current = getArticleBySlug(slug);
  return articles
    .filter((article) => article.slug !== slug)
    .sort((a, b) => {
      if (!current) return 0;
      const aScore = a.category === current.category ? 0 : 1;
      const bScore = b.category === current.category ? 0 : 1;
      return aScore - bScore;
    })
    .slice(0, limit);
}
