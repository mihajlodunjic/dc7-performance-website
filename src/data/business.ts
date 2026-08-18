export const business = {
  brand: "DC7 Performance",
  wordmark: "DC7",
  coachName: "Dejan Nikolić",
  role: "Performance Coach",
  specialty: "Sports Performance",
  instagramHandle: "@de.coach7",
  instagramUrl: "https://www.instagram.com/de.coach7/",
  city: "Beograd",
  country: "Srbija",
  currentConsultationCopy: "Pošalji DM za konsultaciju",
  affiliation: "Player Zone Tennis Academy",
  navigation: [
    { label: "Početna", href: "/" },
    { label: "Metod rada", href: "/metod-rada/" },
    { label: "Testiranje", href: "/testiranje-sportista/" },
    { label: "Rezultati", href: "/rezultati/" },
    { label: "O Dejanu", href: "/o-dejanu/" },
    { label: "Kontakt", href: "/kontakt/" }
  ]
} as const;

export const instagramCta = {
  label: "Pošalji DM",
  consultation: "Pošalji DM za konsultaciju",
  testing: "Pitaj za testiranje",
  goal: "Razgovaraj o svom cilju",
  sport: "Razgovaraj o svom sportu"
} as const;
