/**
 * All guest-facing welcome book content lives here.
 * Anything in [SQUARE BRACKETS] is a placeholder — replace it with the real details.
 */

export const property = {
  name: "Villa Apartment Close to the Harbor and the Forest",
  shortName: "Villa Apartment – Skælskør",
  tagline: "Your home away from home.",
  intro:
    "We're happy to have you! We've created this guide to make your stay as comfortable and enjoyable as possible. Here you'll find everything you need to know about the property, along with recommendations to help you enjoy your time here.",
  address: "Slagelsevej 1, 4230 Skælskør, Denmark",
  checkIn: "After 15:00",
  checkOut: "Before 11:00",
};

export const host = {
  name: "Monika Tarasewicz",
  phone: "+45 53 54 29 81",
  email: "monika.tarasewicz2024@gmail.com",
  availability: "Available 08:00–22:00",
  contactNote:
    "Please send a message through Airbnb — Monika usually replies quickly. For urgent matters, you can also call her directly.",
  airbnbMessagesUrl: "https://www.airbnb.com/guest/messages",
};

export const wifi = {
  network: "Telenor5643alv",
  password: "udc4Dxts8",
};

export const arrival = {
  quickFacts: [
    { label: "Check-in", value: property.checkIn, icon: "clock" },
    { label: "Address", value: property.address, icon: "map-pin" },
    { label: "Parking", value: "Free, in front of the building", icon: "car" },
  ],
  directions: "Tap the button below to open the route in Google Maps.",
  parking: [
    "Free parking is available directly in front of the building, on the property.",
    "There are no time restrictions.",
    "Please park considerately and leave enough space for the other guests staying in the property above.",
  ],
  steps: [
    { title: "Find the entrance", text: "Look for the glass door next to the metal stairs. This is the correct entrance." },
    { title: "Locate the keybox", text: "The keybox is just to the left of the glass entrance door." },
    { title: "Enter the code", text: "Enter the code you received privately through Airbnb before your arrival." },
    { title: "Take the key", text: "Take the key and make sure the keybox is securely closed again." },
    {
      title: "Open & lock the door",
      text: "To open: insert the key and turn it to the right until you hear a click. To lock: lift the door handle upwards, then turn the key fully to the left.",
    },
  ],
  keyboxCaption: "The keybox, just to the left of the glass entrance door.",
};

export type InfoItem = {
  id: string;
  title: string;
  icon: string;
  summary: string;
  steps: string[];
};

export const houseInfo: InfoItem[] = [
  {
    id: "kitchen",
    title: "Kitchen",
    icon: "chef-hat",
    summary: "The kitchen is well equipped with almost everything you might need.",
    steps: [
      "Appliances: fridge, freezer, oven, stove, microwave, kettle, coffee machine and dishwasher.",
      "Coffee machine: simply select and press the button for the type of coffee you would like.",
      "Provided for you: spices, cooking oil, tea, coffee, sugar and salt.",
      "Don't forget the hidden double drawers — you'll find more kitchen equipment and supplies there.",
    ],
  },
  {
    id: "bathroom",
    title: "Bathroom & bedding",
    icon: "bath",
    summary: "There is one bathroom with a shower.",
    steps: [
      "Hot water is always on — there's no need to switch anything on. Just adjust the shower controls to the temperature you like.",
      "Clean towels are waiting on the bed for each guest. Extra towels are not available.",
      "Under the bathroom sink: hairdryer, hair straightener, extra toilet paper and feminine hygiene products.",
      "All bedding, pillows and blankets are already provided. There is no extra bedding.",
    ],
  },
  {
    id: "heating",
    title: "Heating",
    icon: "thermometer",
    summary: "The apartment is heated by gas radiators. Each radiator has a thermostat on the side.",
    steps: [
      "Turn the thermostat anticlockwise (to the left) to make the radiator warmer.",
      "The scale goes from 0 to 5: 0 = off, 1 = low, 2 = about 22°C, 3–4 = warmer, 5 = maximum.",
      "Adjust it until you feel comfortable. There is no air conditioning or fan.",
    ],
  },
  {
    id: "electricity",
    title: "Electricity",
    icon: "zap",
    summary: "There are no special electrical instructions.",
    steps: ["If the power goes out or something electrical stops working, please contact the host through Airbnb."],
  },
  {
    id: "dishwasher",
    title: "Dishwasher",
    icon: "utensils",
    summary: "The dishwasher is built into the kitchen. Dishwasher tablets are under the kitchen sink, in the hidden double drawer.",
    steps: [
      "Open the dishwasher.",
      "Place your dishes inside.",
      "Add a dishwasher tablet.",
      "Find the start button on the top edge of the door.",
      "Press the start button.",
      "Close the door — the dishwasher starts automatically.",
    ],
  },
  {
    id: "other",
    title: "TV, garden & games",
    icon: "tv",
    summary: "The TV has regular channels, Netflix and YouTube, with built-in speakers.",
    steps: [
      "The separate speakers are not connected — you won't need them, as the TV has built-in speakers.",
      "Outside: terrace, garden, outdoor furniture and a grill.",
      "Games: a PlayStation 4 with games, plus various other games.",
      "Trampoline (in good weather, mainly in the warmer months) and footballs (availability may vary).",
      "More outdoor activities may be available in summer.",
    ],
  },
];

export const houseRules = [
  { title: "Smoking", text: "Allowed on the terrace and in the garden. Smoking inside is strictly prohibited.", icon: "cigarette-off" },
  { title: "Quiet hours", text: "Please keep noise to a minimum between 22:00 and 07:00.", icon: "moon" },
  {
    title: "Overnight guests",
    text: "Overnight guests who are not on the reservation need the host's approval first. Daytime visitors are welcome.",
    icon: "users",
  },
  {
    title: "No parties",
    text: "Parties are not allowed. Small, quiet gatherings are fine if they don't disturb others or risk damage to the property.",
    icon: "party-popper",
  },
];

export const extraRules = [
  "Pets are welcome, as long as they are included in your reservation.",
  "Please take off your shoes when you come inside.",
];

export type ExploreCategory =
  | "Restaurants"
  | "Attractions"
  | "Nature & views"
  | "Shopping"
  | "Supermarkets"
  | "Activities";

export type Recommendation = {
  category: ExploreCategory;
  /** Optional label shown on the card instead of the category name. */
  label?: string;
  name: string;
  description: string;
  address: string;
  distance: string;
  image: "restaurant" | "attraction" | "nature" | "shopping" | "market" | "activity";
};

export const neighbourhood = {
  name: "Skælskør",
  description: "A charming harbour town between the sea and the forest.",
};

export const exploreCategories: ExploreCategory[] = [
  "Restaurants",
  "Attractions",
  "Nature & views",
  "Shopping",
  "Supermarkets",
  "Activities",
];

export const recommendations: Recommendation[] = [
  {
    category: "Restaurants",
    name: "Omy Sushi",
    description: "A popular local sushi restaurant known for fresh ingredients, delicious sushi rolls and friendly service in a cosy setting.",
    address: "Bakkenborgvej 2A, 4230 Skælskør",
    distance: "About 1 km · 12 min on foot or 3 min by car",
    image: "restaurant",
  },
  {
    category: "Restaurants",
    name: "Restaurant Kobæk",
    description: "A scenic waterfront restaurant near Kobæk Strand, serving classic dishes and freshly prepared seafood.",
    address: "Kobækvej 90, 4230 Skælskør",
    distance: "About 2 km · 25 min on foot or 4 min by car",
    image: "restaurant",
  },
  {
    category: "Restaurants",
    name: "Restaurant Solsikken",
    description: "Right by Skælskør Harbour, with à la carte dining, beautiful water views and a large outdoor terrace.",
    address: "Havnevej 6, 4230 Skælskør",
    distance: "About 700 m · 9 min on foot or 2 min by car",
    image: "restaurant",
  },
  {
    category: "Restaurants",
    label: "Café & bakery",
    name: "Nytorvs Konditori",
    description: "A popular local bakery and café at Nytorv. Enjoy freshly baked sourdough bread, traditional Danish pastries, cakes and coffee.",
    address: "Nytorv 8, 4230 Skælskør",
    distance: "About 1.1 km · 14 min on foot or 3 min by car",
    image: "restaurant",
  },
  {
    category: "Attractions",
    name: "Viking Fortress Trelleborg",
    description: "A UNESCO World Heritage Site with a well-preserved 10th-century Viking ring fortress, interactive exhibitions and a reconstructed Viking longhouse.",
    address: "Trelleborg Allé 4, Hejninge, 4200 Slagelse",
    distance: "About 18 km · 20 min by car",
    image: "attraction",
  },
  {
    category: "Attractions",
    name: "Panzermuseum East",
    description: "One of Denmark's largest exhibitions of Cold War military equipment, with tanks, armoured vehicles and indoor exhibitions. Please check opening days before visiting.",
    address: "Fladholtevej 18, 4200 Slagelse",
    distance: "About 21 km · 22 min by car",
    image: "attraction",
  },
  {
    category: "Attractions",
    name: "Slagelse Museum",
    description: "A historic museum in an old trading yard, with a recreated 19th-century street, a traditional grocery shop and exhibitions about local history.",
    address: "Bredegade 11, 4200 Slagelse",
    distance: "About 14.5 km · 16 min by car",
    image: "attraction",
  },
  {
    category: "Nature & views",
    name: "Kobæk Strand",
    description: "A beautiful, family-friendly beach with wide sandy areas and shallow water — one of the best places nearby to watch the sunset over the water.",
    address: "Kobæk Strand, 4230 Skælskør",
    distance: "About 2 km · 25 min on foot or 4 min by car",
    image: "nature",
  },
  {
    category: "Nature & views",
    name: "Skælskør Lystskov",
    description: "A peaceful forest along the coast of Agersø Sund, with lovely walking paths, beech trees and views of the water.",
    address: "Lystskovvej, 4230 Skælskør",
    distance: "About 900 m · 12 min on foot or 3 min by car",
    image: "nature",
  },
  {
    category: "Nature & views",
    name: "Skælskør Harbour",
    description: "A charming harbour with historic half-timbered buildings, a lovely maritime atmosphere and beautiful waterfront walks.",
    address: "Havnevej 20, 4230 Skælskør",
    distance: "About 770 m · 10 min on foot or 2 min by car",
    image: "nature",
  },
  {
    category: "Shopping",
    name: "Vestsjællandscentret",
    description: "A modern shopping centre in Slagelse with more than 50 shops, including fashion, electronics and lifestyle stores.",
    address: "Vestsjællandscentret 10A, 4200 Slagelse",
    distance: "About 14.5 km · 16 min by car",
    image: "shopping",
  },
  {
    category: "Shopping",
    name: "Vestegnens Bazar Slagelse",
    description: "A large international market with products from around the world, fresh produce, spices and unique groceries.",
    address: "Jernbanegade 7, 4200 Slagelse",
    distance: "About 14.3 km · 15 min by car",
    image: "shopping",
  },
  {
    category: "Supermarkets",
    name: "SPAR",
    description: "A nearby grocery store for everyday shopping and essentials.",
    address: "Konge-åsen 2A, 4230 Skælskør",
    distance: "About 340 m · 4 min on foot or 1 min by car",
    image: "market",
  },
  {
    category: "Supermarkets",
    name: "Netto",
    description: "A budget-friendly supermarket with a wide selection of groceries and everyday essentials.",
    address: "Brænderigården 21, 4230 Skælskør",
    distance: "About 930 m · 12 min on foot or 3 min by car",
    image: "market",
  },
  {
    category: "Supermarkets",
    name: "SuperBrugsen",
    description: "A well-stocked local supermarket with a wide range of groceries, fresh products and organic options.",
    address: "Carl Medingsvej 22, 4230 Skælskør",
    distance: "About 1 km · 13 min on foot or 3 min by car",
    image: "market",
  },
  {
    category: "Activities",
    name: "Cecilie's Slagelse",
    description: "An indoor entertainment centre with bowling, adventure mini-golf, pool tables, darts and a grill restaurant.",
    address: "Bredegade 50–56, 4200 Slagelse",
    distance: "About 14.5 km · 16 min by car",
    image: "activity",
  },
  {
    category: "Activities",
    name: "Arena Cirkusland",
    description: "A family-friendly activity park inspired by the circus, with indoor and outdoor activities, shows and the chance to meet animals.",
    address: "Årslevvej 6, 4200 Slagelse",
    distance: "About 17 km · 18 min by car",
    image: "activity",
  },
];

export type LocalFavourite = {
  label: string;
  title: string;
  note: string;
  address: string;
  distance?: string;
};

export const localFavourites: LocalFavourite[] = [
  {
    label: "Favourite restaurant",
    title: "Omy Sushi",
    note: "Our personal restaurant tip — a great local choice for fresh sushi, delicious rolls and friendly service.",
    address: "Bakkenborgvej 2A, 4230 Skælskør",
  },
  {
    label: "Best sunset spot",
    title: "Kobæk Strand",
    note: "The best place to watch the sunset. Enjoy the coastal views and relaxing atmosphere as the sun goes down over the water.",
    address: "Kobæk Strand, 4230 Skælskør",
  },
  {
    label: "Hidden gem",
    title: "Isbådsmuseet & Halsskov Odde",
    note: "A fascinating museum where you can see the Great Belt Bridge up close. Park nearby and take the scenic walk along the shore, right underneath the bridge — it's also a fantastic sunset spot.",
    address: "Halsskov Odde 11, 4220 Korsør",
    distance: "About 18 km · 20 min by car",
  },
];

export const stayPhotoBand = {
  eyebrow: "Towels & bedding",
  text: "Clean towels are waiting on the bed for each guest.",
};

export const checkout = {
  time: property.checkOut,
  checklist: [
    "Load and start the dishwasher",
    "Take out the rubbish",
    "Turn off all lights, heating and appliances",
    "Close all windows and lock the doors",
    "Return the key to the keybox",
  ],
  details: [
    {
      title: "Cleaning",
      text: "No full cleaning is needed — just complete the checklist before you leave.",
      icon: "sparkles",
    },
    {
      title: "Rubbish",
      text: "Please take your rubbish to the large shared container at the beginning of the driveway, near the entrance to the parking area. You'll pass it as you drive in and out.",
      icon: "trash",
    },
    {
      title: "Key return",
      text: "Put the key back in the same keybox, just to the left of the glass entrance door, and make sure it is securely closed.",
      icon: "key",
    },
  ],
};

export const problemSteps = [
  "Check this guide and the FAQ below — the answer may be here.",
  "Send us a message through Airbnb or call us on the number above.",
  "Tell us what happened and, if you can, send a photo.",
];

export const faqs = [
  { q: "What time is check-out?", a: "Check-out is before 11:00. Please see the checklist in the Essentials section." },
  {
    q: "Where do I dispose of rubbish?",
    a: "In the large shared container at the beginning of the driveway, near the entrance to the parking area.",
  },
  {
    q: "How do I adjust the heating?",
    a: "Turn the thermostat on the side of the radiator anticlockwise (to the left) to make it warmer. Setting 2 is about 22°C and 5 is maximum.",
  },
  {
    q: "Where can I find extra towels?",
    a: "Clean towels are waiting on the bed for each guest. Extra towels are not available at the moment.",
  },
  { q: "What should I do if something stops working?", a: "Don't worry — send us a message through Airbnb or call us." },
  {
    q: "Can I check in early or check out late?",
    a: "It may be possible, depending on availability. Please ask the host through Airbnb in advance.",
  },
  {
    q: "Is there a hairdryer / iron?",
    a: "Yes, there is a hairdryer (and a hair straightener) under the bathroom sink. There is no iron at the moment.",
  },
];
