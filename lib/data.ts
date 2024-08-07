export const configs = {
  contact: {
    phone: "+61740009111",
    email: "admin@icsconferences.org",
    address: "Seaford Entrance, Kewarra Beach QLD 4879",
  },
  forms: {
    submitPaper:
      "https://docs.google.com/forms/d/e/1FAIpQLScR8xcw0IrdVy60HHTD2ECZijXKWtyQyq3S3oEuYRw8m33XWA/viewform",
    exhibitor:
      "https://docs.google.com/forms/d/e/1FAIpQLScRpsjKM0uqOmpJjurxMQZbz2o37_F_Gm9aR7PAXS9J-9U3tw/viewform",
    sponsor:
      "https://docs.google.com/forms/d/e/1FAIpQLSfxgCZqk-OtuZvo8sx_cY65ccKg74-FZrGCLLfavJwIEp9n_A/viewform",
  },
} as const;

export const cta = [
  {
    title: "Keynotes",
    description:
      "Empower others with your stories, insights, and wisdom, inspiring a world where Indigenous culture is celebrated and respected.",
    button: "Become a Speaker",
    image: "/assets/images/calltoaction/pamphlet_one.webp",
    form: configs.forms.submitPaper,
  },
  {
    title: "Exhibitions",
    description:
      "Use your platform to create awareness about vital Indigenous causes and issues, inspiring attendees to become advocates for positive change.",
    button: "Become an Exhibitor",
    image: "/assets/images/calltoaction/pamphlet_two.webp",
    form: configs.forms.exhibitor,
  },
  {
    title: "Sponsorship",
    description:
      "Associate your brand with a cause that matters, gaining valuable exposure to a diverse and engaged audience, both locally and globally.",
    button: "Become a Sponsor",
    image: "/assets/images/calltoaction/pamphlet_three.webp",
    form: configs.forms.sponsor,
  },
] as const;

export const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Conferences",
    path: "/#conferences",
  },
  {
    name: "Contact",
    path: "/contact",
  },
] as const;

export const referralOptions = [
  "Manager, Family, Friend or Colleague",
  "Email newsletter",
  "Social media (Facebook, Twitter, etc)",
  "Our website",
  "Koori Mail",
  "Other",
] as const;

export const accomodationOption = [
  {
    label: "No, Thank you",
    value: 0,
  },
  {
    label: "Yes, one (1) night",
    value: 1,
  },
  {
    label: "Yes, two (2) nights",
    value: 2,
  },
  {
    label: "Yes, three (3) nights",
    value: 3,
  },
  {
    label: "Yes, four (4) nights",
    value: 4,
  },
] as const;

export const dietaryOptions = [
  "Normal",
  "Diabetic",
  "Vegetarian",
  "Gluten Free",
  "Other",
] as const;

export const testimonials = [
  "I loved this conference and I can’t wait to come to the next one!",
  "I felt culturally safe - I am not Aboriginal, but I am not Anglo either. It felt warm, friendly and humble, don’t often get that it in conferences. I met some beautiful people and great networks. Thank you for the opportunity to present.",
  "Really enjoyed myself listening to everyone's story.",
  "Fantastic speakers again! Very informative and impactful for me!",
  "Food was great, organisers did a great job kept us informed and on time, great venue, lovely to see aboriginal wears on sale, IT was spot on and extremely helpful, helped with each presentation.",
  "Thank you for this opportunity to connect & learn from Indigenous people who have such similar struggles as the native population of our lands.",
] as const;
