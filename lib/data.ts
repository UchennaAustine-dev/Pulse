import type { Post, Tag, Category } from "@/lib/types";

// Sample authors
const authors = [
  {
    id: "author-1",
    name: "Alex Johnson",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop",
  },
  {
    id: "author-2",
    name: "Samantha Lee",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
  },
  {
    id: "author-3",
    name: "Marcus Chen",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
  },
];

// Sample gallery images for posts
const galleryImages = {
  music: [
    {
      src: "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=1200&auto=format&fit=crop",
      alt: "Concert crowd with hands in the air",
      caption: "Fans enjoying the live performance",
    },
    {
      src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
      alt: "Music studio with equipment",
      caption: "Behind the scenes in the recording studio",
    },
    {
      src: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=1200&auto=format&fit=crop",
      alt: "DJ performing at a club",
      caption: "DJ set at the album release party",
    },
    {
      src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop",
      alt: "Music festival stage",
      caption: "The main stage setup before the show",
    },
  ],
  movies: [
    {
      src: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1200&auto=format&fit=crop",
      alt: "Movie theater",
      caption: "Premiere night at the theater",
    },
    {
      src: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Film set with camera equipment",
      caption: "Behind the scenes on set",
    },
    {
      src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop",
      alt: "Film crew working",
      caption: "The crew setting up for the next shot",
    },
    {
      src: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=1200&auto=format&fit=crop",
      alt: "Movie props",
      caption: "Props used in the film",
    },
  ],
  celebrities: [
    {
      src: "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Celebrity event",
      caption: "At the annual charity gala",
    },
    {
      src: "https://images.unsplash.com/photo-1551845728-6820a30c64e2?q=80&w=1200&auto=format&fit=crop",
      alt: "Red carpet",
      caption: "Walking the red carpet at the premiere",
    },
    {
      src: "https://images.pexels.com/photos/5325599/pexels-photo-5325599.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Fashion photoshoot",
      caption: "From the latest magazine cover shoot",
    },
    {
      src: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=1200&auto=format&fit=crop",
      alt: "Backstage",
      caption: "Backstage before the awards ceremony",
    },
  ],
  viral: [
    {
      src: "https://images.unsplash.com/photo-1601288496920-b6154fe3626a?q=80&w=1200&auto=format&fit=crop",
      alt: "Social media on phone",
      caption: "The viral post that started it all",
    },
    {
      src: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200&auto=format&fit=crop",
      alt: "People recording with phones",
      caption: "Fans capturing the moment",
    },
    {
      src: "https://images.pexels.com/photos/935979/pexels-photo-935979.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Viral challenge participants",
      caption: "Participants in the challenge from around the world",
    },
    {
      src: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?q=80&w=1200&auto=format&fit=crop",
      alt: "Trending hashtags",
      caption: "The hashtag trended for 48 hours straight",
    },
  ],
  news: [
    {
      src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop",
      alt: "Press conference",
      caption: "The announcement that changed everything",
    },
    {
      src: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200&auto=format&fit=crop",
      alt: "News studio",
      caption: "Live from the studio",
    },
    {
      src: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?q=80&w=1200&auto=format&fit=crop",
      alt: "Environmental project",
      caption: "The cleanup project in action",
    },
    {
      src: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?q=80&w=1200&auto=format&fit=crop",
      alt: "Headlines on newspaper",
      caption: "How the story broke in print",
    },
  ],
};

// Sample posts data
const posts: Post[] = [
  {
    id: "post-1",
    title: "Taylor Swift Announces Surprise Album Release Date",
    slug: "taylor-swift-announces-surprise-album",
    excerpt:
      "The pop superstar has shocked fans with a surprise announcement of her next studio album, set to release next month.",
    content:
      "Taylor Swift has once again surprised her fans by announcing a brand new album, just months after her last release. The pop superstar took to social media to reveal the news, sending Swifties into a frenzy.\n\nThe album, titled 'Midnight Memories,' will be released on June 15th and is described by Swift as 'a collection of songs written in the middle of the night, a journey through terrors and sweet dreams.'\n\nThis will be Swift's 11th studio album and comes just 10 months after her previous release. Music industry analysts are calling this one of the most prolific periods of any major artist's career.\n\n'I couldn't wait to share these songs with you,' Swift wrote on Instagram. 'They've been keeping me up at night, and now they can keep you up too.'\n\nFans are already speculating about potential collaborations and hidden messages in the announcement post, as is tradition with any Swift release.\n\nThe first single from the album is expected to drop next week, according to sources close to the artist.",
    coverImage:
      "https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=1200&auto=format&fit=crop",
    date: "2023-05-15",
    category: "Music",
    tags: ["Taylor Swift", "New Album", "Pop Music"],
    author: authors[0],
    views: 4582,
    gallery: galleryImages.music,
  },
  {
    id: "post-2",
    title: "Breaking: Marvel Reveals Next Phase of Superhero Films",
    slug: "marvel-reveals-next-phase-superhero-films",
    excerpt:
      "Marvel Studios has unveiled its ambitious slate of upcoming superhero films and TV shows for the next three years.",
    content:
      "In a star-studded event at San Diego Comic-Con, Marvel Studios president Kevin Feige revealed the company's ambitious plans for the next phase of the Marvel Cinematic Universe.\n\nThe announcement included release dates for five new films and details about four Disney+ series that will expand the interconnected superhero universe.\n\n'We're entering a new era for Marvel storytelling,' Feige told the packed hall. 'These projects will introduce audiences to new heroes, bring back some familiar faces, and take our existing characters in directions fans won't expect.'\n\nHighlights from the announcement include a new Fantastic Four film directed by an Oscar-winning filmmaker, the return of Daredevil in his own feature film, and a series focusing on the supernatural side of the Marvel universe.\n\nActors from the announced projects made surprise appearances on stage, including several new additions to the Marvel family who will be playing iconic characters from the comics.\n\nThe first of these new projects is scheduled to hit theaters in May of next year, with content rolling out continuously through 2026.",
    coverImage:
      "https://images.pexels.com/photos/2507025/pexels-photo-2507025.jpeg?auto=compress&cs=tinysrgb&w=1200",
    date: "2023-07-22",
    category: "Movies",
    tags: ["Marvel", "Superheroes", "Comic-Con"],
    author: authors[1],
    views: 3876,
    gallery: galleryImages.movies,
  },
  {
    id: "post-3",
    title: "Viral TikTok Dance Becomes Global Phenomenon",
    slug: "viral-tiktok-dance-global-phenomenon",
    excerpt:
      "A simple dance created by a college student has exploded into a worldwide trend, with celebrities and millions of users joining in.",
    content:
      "What started as a simple 15-second video posted by 19-year-old college student Mia Rodriguez has evolved into a global dance phenomenon that's crossing generational and cultural boundaries.\n\nThe dance, dubbed the 'Butterfly Effect,' features a series of hand movements and steps that are easy to learn but difficult to master perfectly. This accessibility, combined with the catchy song it's set to, has helped it spread rapidly across TikTok and beyond.\n\n'I created it in my dorm room when I was procrastinating studying for finals,' Rodriguez told us in an exclusive interview. 'I never expected it to go beyond my few hundred followers.'\n\nBut go beyond it did. Within days, the dance was being performed by thousands, then millions of TikTok users. When celebrities like Lizzo, BTS members, and even Jennifer Lopez posted their versions, the trend exploded further.\n\nThe original video now has over 50 million views, and the hashtag #ButterflyEffectDance has accumulated more than 7 billion views across all videos.\n\nSociologists are studying the dance as an example of how digital culture spreads in the modern age, while Rodriguez has signed with a talent agency and is launching a dance instruction series online.",
    coverImage:
      "https://images.unsplash.com/photo-1601288496920-b6154fe3626a?q=80&w=1200&auto=format&fit=crop",
    date: "2023-06-10",
    category: "Viral",
    tags: ["TikTok", "Dance Trend", "Social Media"],
    author: authors[2],
    views: 5243,
    gallery: galleryImages.viral,
  },
  {
    id: "post-4",
    title: "Beyoncé and Jay-Z Announce World Stadium Tour",
    slug: "beyonce-jay-z-announce-world-stadium-tour",
    excerpt:
      "The power couple will hit the road together again for their second joint tour, covering 30 cities across five continents.",
    content:
      "Music's most powerful couple, Beyoncé and Jay-Z, have announced they will be embarking on their second joint world tour, titled 'Power Moves.'\n\nThe stadium tour will visit 30 cities across North America, Europe, Asia, Australia, and for the first time, Africa. It comes six years after their highly successful 'On The Run II' tour.\n\n'We're bringing our biggest show yet to fans around the world,' the couple said in a joint statement. 'This tour represents our evolution as artists and as a family.'\n\nThe tour will feature both individual performances of their solo hits and collaborative segments. Industry insiders report that the stage design will be revolutionary, with production costs estimated to exceed $100 million.\n\nTickets go on sale next Friday, with presales for fan club members starting Wednesday. Based on their previous tour, which grossed over $250 million, tickets are expected to sell out within minutes.\n\nThe tour kicks off in Chicago on March 12 next year and concludes in Johannesburg on September 28. Several surprise guest performers are rumored to join the couple at various stops along the tour.",
    coverImage:
      "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1200",
    date: "2023-08-05",
    category: "Music",
    tags: ["Beyoncé", "Jay-Z", "Concert Tour"],
    author: authors[0],
    views: 3129,
    gallery: galleryImages.music,
  },
  {
    id: "post-5",
    title: "Hollywood Writers Strike Ends After Historic Agreement",
    slug: "hollywood-writers-strike-ends-historic-agreement",
    excerpt:
      "After months of negotiations, the Writers Guild of America has reached a landmark deal with major studios addressing AI concerns and streaming compensation.",
    content:
      "The three-month Hollywood writers strike that halted production on numerous films and television shows has officially ended after the Writers Guild of America (WGA) reached a historic agreement with the Alliance of Motion Picture and Television Producers (AMPTP).\n\nThe deal, which was approved by 98% of voting WGA members, addresses key concerns that prompted the strike, including compensation for streaming content, residual payments, and protections against the use of artificial intelligence in scriptwriting.\n\n'This is a watershed moment for writers in the digital age,' said the WGA president in a statement. 'The agreement ensures that writers will receive fair compensation for their work regardless of how it's distributed, and establishes crucial guardrails around the use of AI in the creative process.'\n\nUnder the new three-year contract, writers will receive higher minimum payments for streaming shows, improved residuals based on viewership metrics, and guarantees that AI cannot be used to write or rewrite literary material, nor can it be used as source material.\n\nProduction is expected to resume on most affected shows within two weeks, though the concurrent SAG-AFTRA actors strike continues to impact the industry.\n\nAnalysts estimate the strike cost the California economy approximately $3 billion, but call the agreement a necessary evolution of entertainment industry labor practices in the streaming era.",
    coverImage:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop",
    date: "2023-09-27",
    category: "News",
    tags: ["Hollywood", "Writers Strike", "Entertainment Industry"],
    author: authors[1],
    views: 2876,
    gallery: galleryImages.news,
  },
  {
    id: "post-6",
    title: "Rising Star Actress Lands Lead Role in Spielberg's Next Film",
    slug: "rising-star-actress-lands-lead-spielberg-film",
    excerpt:
      "After breaking out in an indie hit last year, the 22-year-old actress has been cast as the protagonist in Steven Spielberg's upcoming sci-fi epic.",
    content:
      "In a move that has surprised Hollywood insiders, 22-year-old actress Zoe Ramirez has been cast as the lead in Steven Spielberg's highly anticipated science fiction film 'Beyond the Stars.'\n\nRamirez, who gained critical acclaim for her role in last year's independent drama 'Whispers in the Dark,' beat out several established A-list actresses for the coveted role after what sources describe as 'an audition that left everyone in the room speechless.'\n\n'Working with Steven Spielberg is quite literally a dream come true,' Ramirez said in a statement. 'I grew up watching his films, and they're a big reason why I wanted to become an actress.'\n\nThe film, which has been shrouded in secrecy, is described as an epic science fiction adventure set 200 years in the future. Ramirez will play a young scientist who discovers a way to communicate across dimensions.\n\nSpielberg praised Ramirez's 'extraordinary range and emotional intelligence' in a press release announcing the casting. 'Sometimes you encounter a talent that feels both brand new and timeless. Zoe has that quality.'\n\nProduction is set to begin in January with a planned release date in summer 2025. Industry analysts are already predicting this could be the breakout role that catapults Ramirez to superstardom.",
    coverImage:
      "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1200",
    date: "2023-10-12",
    category: "Movies",
    tags: ["Steven Spielberg", "Casting News", "Sci-Fi Films"],
    author: authors[2],
    views: 1987,
    gallery: galleryImages.movies,
  },
  {
    id: "post-7",
    title: "Grammy Nominations Announced: Newcomers Dominate Major Categories",
    slug: "grammy-nominations-announced-newcomers-dominate",
    excerpt:
      "This year's Grammy nominations see fresh faces in all four major categories, signaling a generational shift in the music industry.",
    content:
      "The Recording Academy has announced the nominations for the 66th Annual Grammy Awards, with newcomers dominating the major categories in what industry observers are calling a significant generational shift.\n\nFirst-time nominees account for over 60% of the nominations in the 'Big Four' categories: Record of the Year, Album of the Year, Song of the Year, and Best New Artist.\n\n'This year's nominations reflect the vibrant, diverse, and ever-evolving nature of music today,' said the Recording Academy CEO in a statement. 'We're seeing new voices and fresh perspectives across all genres.'\n\nR&B singer-songwriter Lila Monroe leads with nine nominations, including all four major categories, despite releasing her debut album just eight months ago. Rock band Emerald Skies and rapper Kenzo each received seven nominations.\n\nSeveral established artists were notably absent from the major categories, though they received nominations in genre-specific fields.\n\nThe ceremony will be held on February 4th at the Crypto.com Arena in Los Angeles and broadcast live on CBS. Performers will be announced in the coming weeks, with speculation that the show will heavily feature the nominated newcomers.\n\nMusic critics are calling this nominations list a 'reset' for the Grammys, which has faced criticism in recent years for favoring established artists over emerging talent.",
    coverImage:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
    date: "2023-11-15",
    category: "Music",
    tags: ["Grammy Awards", "Music Industry", "Award Shows"],
    author: authors[0],
    views: 2543,
    gallery: galleryImages.music,
  },
  {
    id: "post-8",
    title: "Celebrity Chef Opens Restaurant Inspired by Childhood Memories",
    slug: "celebrity-chef-opens-restaurant-childhood-memories",
    excerpt:
      "The Michelin-starred chef's new restaurant concept draws from family recipes and nostalgic dishes from their upbringing.",
    content:
      "Acclaimed chef Jordan Martinez, known for his three Michelin-starred restaurant 'Elevation,' has opened a new dining establishment that represents a significant departure from his usual fine dining approach.\n\nThe new restaurant, named 'Abuela's Kitchen,' draws inspiration from Martinez's childhood growing up in his grandmother's home in New Mexico. The menu features elevated versions of the family recipes he learned as a child, alongside other nostalgic American and Mexican comfort foods.\n\n'This is the most personal project of my career,' Martinez told us during an exclusive tour of the space. 'Every dish has a story behind it, a memory attached to it. I wanted to create a place that feels like coming home.'\n\nThe restaurant's design reinforces this concept, with decor elements inspired by his grandmother's home, including vintage photographs, hand-embroidered textiles, and a collection of cast iron cookware similar to what his grandmother used.\n\nDespite the homey concept, Martinez's technical expertise is evident in the execution. Critics who attended preview dinners have praised the balance between nostalgia and culinary innovation.\n\n'The food may be inspired by home cooking, but the techniques and presentation are unmistakably from a chef at the top of their game,' wrote one prominent food critic.\n\nAbuela's Kitchen opens to the public next week, with reservations already booked solid for the first three months.",
    coverImage:
      "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1200",
    date: "2023-09-05",
    category: "Celebrities",
    tags: ["Celebrity Chefs", "Restaurants", "Food"],
    author: authors[1],
    views: 1876,
    gallery: galleryImages.celebrities,
  },
  {
    id: "post-9",
    title: "Tech Billionaire Funds Controversial Ocean Cleanup Project",
    slug: "tech-billionaire-funds-ocean-cleanup-project",
    excerpt:
      "The founder of a major tech company has pledged $300 million to an experimental project aimed at removing plastic from the Pacific Ocean.",
    content:
      "Tech billionaire and founder of CloudStream, Nathan Park, has announced a $300 million commitment to fund an experimental ocean cleanup initiative that has divided environmental experts.\n\nThe project, called OceanPurge, aims to deploy a fleet of autonomous vessels equipped with advanced filtration systems to collect plastic waste from the Great Pacific Garbage Patch, a massive collection of marine debris in the North Pacific Ocean.\n\n'We have the technology and resources to address this crisis,' Park said at a press conference held on his private yacht. 'While governments debate, the oceans continue to fill with plastic. It's time for private innovation to solve this global problem.'\n\nThe announcement has received mixed reactions from environmental scientists and conservation organizations. Supporters praise the scale of the investment and the project's innovative approach, while critics express concerns about potential unintended consequences for marine ecosystems.\n\n'Any filtration system that can remove plastic will inevitably impact marine life,' said Dr. Elena Morales, a marine biologist at the Oceanic Research Institute. 'We need more peer-reviewed research before deploying such technologies at scale.'\n\nOthers have questioned whether the funds would be better directed toward preventing plastic pollution at its source rather than cleaning up existing waste.\n\nPark, whose net worth is estimated at $78 billion, has dismissed these concerns, stating that the project will include extensive environmental monitoring and will be adjusted based on scientific feedback.",
    coverImage:
      "https://images.unsplash.com/photo-1621451537084-482c73073a0f?q=80&w=1200&auto=format&fit=crop",
    date: "2023-08-18",
    category: "News",
    tags: ["Environment", "Technology", "Philanthropy"],
    author: authors[2],
    views: 3421,
    gallery: galleryImages.news,
  },
  {
    id: "post-10",
    title: "Reality TV Star Launches Sustainable Fashion Line",
    slug: "reality-tv-star-launches-sustainable-fashion-line",
    excerpt:
      "The popular television personality is entering the fashion industry with a collection focused on environmental sustainability and ethical production.",
    content:
      "Reality television star and social media influencer Jade Williams has announced the launch of her sustainable fashion brand, 'Conscious Collective,' marking her first major business venture outside of entertainment.\n\nThe brand focuses on environmentally friendly materials and ethical manufacturing processes, with all garments produced in factories that provide fair wages and safe working conditions.\n\n'Fashion has always been my passion, but I couldn't ignore the environmental impact of the industry,' Williams said in a video announcement to her 45 million social media followers. 'I wanted to create clothes that people can feel good about wearing in every way.'\n\nThe debut collection includes 35 pieces ranging from casual wear to evening attire, all made from organic, recycled, or innovative sustainable materials such as fabric derived from pineapple leaves and mushroom leather alternatives.\n\nWilliams, who rose to fame on the reality show 'Coastal Elite' before building a massive social media following, has been working on the line for two years, according to her representatives.\n\nFashion industry analysts note that Williams' entry into the market comes at a time when consumer interest in sustainable fashion is at an all-time high, particularly among her core demographic of women aged 18-34.\n\n'Her influence could significantly accelerate the adoption of sustainable fashion practices,' said fashion market analyst Sophia Chen. 'When someone with her platform champions these values, it has a ripple effect throughout the industry.'",
    coverImage:
      "https://images.pexels.com/photos/5325599/pexels-photo-5325599.jpeg?auto=compress&cs=tinysrgb&w=1200",
    date: "2023-10-30",
    category: "Celebrities",
    tags: ["Fashion", "Sustainability", "Reality TV"],
    author: authors[0],
    views: 2198,
    gallery: galleryImages.celebrities,
  },
];

// Sample trending tags
const trendingTags: Tag[] = [
  { id: "tag-1", name: "TaylorSwift", count: 4582 },
  { id: "tag-2", name: "MarvelStudios", count: 3876 },
  { id: "tag-3", name: "TikTokDance", count: 5243 },
  { id: "tag-4", name: "Beyonce", count: 3129 },
  { id: "tag-5", name: "WritersStrike", count: 2876 },
  { id: "tag-6", name: "Spielberg", count: 1987 },
  { id: "tag-7", name: "GrammyAwards", count: 2543 },
  { id: "tag-8", name: "CelebrityChef", count: 1876 },
];

// Sample categories
const categories: Category[] = [
  { id: "category-1", name: "News", slug: "news" },
  { id: "category-2", name: "Music", slug: "music" },
  { id: "category-3", name: "Celebrities", slug: "celebrities" },
  { id: "category-4", name: "Viral", slug: "viral" },
  { id: "category-5", name: "Movies", slug: "movies" },
];

// Data fetching functions
export async function getPosts(): Promise<Post[]> {
  // In a real app, this would fetch from an API or database
  return posts;
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  return posts.find((post) => post.slug === slug);
}

export async function getPostsByCategory(category: string): Promise<Post[]> {
  const categoryName = categories.find((c) => c.slug === category)?.name;

  if (!categoryName) return [];

  return posts.filter(
    (post) => post.category.toLowerCase() === categoryName.toLowerCase()
  );
}

export async function searchPosts(query: string): Promise<Post[]> {
  const searchTerms = query.toLowerCase().split(" ");

  return posts.filter((post) => {
    const searchableText = `${post.title} ${post.excerpt} ${post.content} ${
      post.category
    } ${post.tags.join(" ")}`.toLowerCase();

    return searchTerms.some((term) => searchableText.includes(term));
  });
}

export async function getTrendingTags(): Promise<Tag[]> {
  return trendingTags;
}

export async function getPopularPosts(): Promise<Post[]> {
  return [...posts].sort((a, b) => (b.views || 0) - (a.views || 0)).slice(0, 5);
}

export async function getCategories(): Promise<Category[]> {
  return categories;
}

export async function getRelatedPosts(
  postId: string,
  category: string,
  tags: string[]
): Promise<Post[]> {
  // Find posts with the same category or tags, excluding the current post
  const relatedByCategory = posts.filter(
    (post) => post.id !== postId && post.category === category
  );

  const relatedByTags = posts.filter(
    (post) =>
      post.id !== postId &&
      post.category !== category &&
      post.tags.some((tag) => tags.includes(tag))
  );

  // Combine and sort by relevance (category matches first, then tag matches)
  const combined = [...relatedByCategory, ...relatedByTags];

  // Remove duplicates and limit to 3 posts
  const uniqueRelated = Array.from(new Set(combined.map((post) => post.id)))
    .map((id) => combined.find((post) => post.id === id)!)
    .slice(0, 3);

  return uniqueRelated;
}
