/**
 * All guest-facing welcome book content lives here.
 * Anything in [SQUARE BRACKETS] is a placeholder — replace it with the real details.
 */

export const property = {
  name: "[PROPERTY NAME]",
  tagline: "Your home away from home.",
  intro:
    "We're happy to have you! We've created this guide to make your stay as comfortable and enjoyable as possible. Here you'll find everything you need to know about the property, along with recommendations to help you enjoy your time here.",
  address: "[PROPERTY ADDRESS]",
  checkIn: "[CHECK-IN TIME]",
  checkOut: "[CHECK-OUT TIME]",
  maxGuests: "[MAXIMUM NUMBER OF GUESTS]",
};

export const host = {
  name: "[HOST NAME]",
  phone: "[HOST PHONE NUMBER]",
  email: "[HOST EMAIL]",
  availability: "[HOURS WHEN THE HOST CAN BE REACHED]",
  airbnbMessagesUrl: "https://www.airbnb.com/guest/messages",
};

export const wifi = {
  network: "[WI-FI NETWORK NAME]",
  password: "[WI-FI PASSWORD]",
  routerLocation: "[WHERE THE ROUTER IS LOCATED]",
};

export const arrival = {
  quickFacts: [
    { label: "Check-in", value: property.checkIn, icon: "clock" },
    { label: "Address", value: property.address, icon: "map-pin" },
    { label: "Parking", value: "[PARKING INFORMATION]", icon: "car" },
  ],
  directions: "[DIRECTIONS FROM THE NEAREST AIRPORT, STATION OR MAIN ROAD]",
  parking: [
    "[WHERE TO PARK]",
    "[PARKING COST OR PERMIT INFORMATION]",
    "[ANY PARKING RESTRICTIONS]",
  ],
  steps: [
    { title: "Find the entrance", text: "[HOW TO FIND THE FRONT DOOR OR BUILDING ENTRANCE]" },
    { title: "Locate the keybox", text: "[WHERE THE KEYBOX IS — e.g. to the left of the door]" },
    { title: "Enter the code", text: "Your code is [KEYBOX CODE]. Turn the dials, then slide the button down." },
    { title: "Take the key & lock the box", text: "[KEY COLLECTION INSTRUCTIONS]. Please scramble the code again afterwards." },
    { title: "Open the door", text: "[DOOR INSTRUCTIONS — e.g. turn the key twice to the right]" },
  ],
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
    summary: "[WHAT IS AVAILABLE IN THE KITCHEN]",
    steps: ["[HOW TO USE THE HOB / OVEN]", "[COFFEE MACHINE INSTRUCTIONS]", "[WHAT IS PROVIDED — e.g. oil, salt, coffee]"],
  },
  {
    id: "bathroom",
    title: "Bathroom",
    icon: "bath",
    summary: "[BATHROOM INFORMATION]",
    steps: ["[HOW TO GET HOT WATER]", "[WHERE TO FIND EXTRA TOWELS]", "[HAIRDRYER LOCATION]"],
  },
  {
    id: "heating",
    title: "Heating & cooling",
    icon: "thermometer",
    summary: "[HEATING TYPE]",
    steps: ["[HOW TO TURN THE HEATING ON]", "[HOW TO CHANGE THE TEMPERATURE]", "[AIR CONDITIONING INSTRUCTIONS, IF ANY]"],
  },
  {
    id: "electricity",
    title: "Electricity",
    icon: "zap",
    summary: "[FUSE BOX LOCATION]",
    steps: ["[WHAT TO DO IF THE POWER GOES OUT]", "[SOCKET TYPE / VOLTAGE]"],
  },
  {
    id: "washing-machine",
    title: "Washing machine",
    icon: "washing-machine",
    summary: "[WASHING MACHINE LOCATION]",
    steps: ["[WHERE THE DETERGENT GOES]", "[RECOMMENDED PROGRAMME]", "[WHERE TO DRY CLOTHES]"],
  },
  {
    id: "dishwasher",
    title: "Dishwasher",
    icon: "utensils",
    summary: "[DISHWASHER INFORMATION]",
    steps: ["[WHERE TO FIND DISHWASHER TABLETS]", "[HOW TO START A PROGRAMME]"],
  },
  {
    id: "other",
    title: "Other appliances & facilities",
    icon: "tv",
    summary: "[TV, SPEAKERS, BALCONY, GARDEN, ETC.]",
    steps: ["[HOW TO USE THE TV]", "[OTHER FACILITIES]"],
  },
];

export const houseRules = [
  { title: "No smoking", text: "[SMOKING POLICY]", icon: "cigarette-off" },
  { title: "Quiet hours", text: "[QUIET HOURS — e.g. 22:00 to 08:00]", icon: "moon" },
  { title: "Guests", text: `Maximum ${property.maxGuests} guests.`, icon: "users" },
  { title: "No parties", text: "[PARTIES AND EVENTS POLICY]", icon: "party-popper" },
];

export const extraRules = ["[PETS POLICY]", "[SHOES / INDOOR RULES]", "[ANY OTHER HOUSE RULES]"];

export type ExploreCategory =
  | "Restaurants"
  | "Attractions"
  | "Shopping"
  | "Supermarkets"
  | "Activities"
  | "Transportation";

export type Recommendation = {
  category: ExploreCategory;
  name: string;
  description: string;
  address: string;
  distance?: string;
  image?: "restaurant" | "attraction" | "shopping" | "market" | "activity";
};

export const exploreCategories: ExploreCategory[] = [
  "Restaurants",
  "Attractions",
  "Shopping",
  "Supermarkets",
  "Activities",
  "Transportation",
];

export const recommendations: Recommendation[] = [
  { category: "Restaurants", name: "[RESTAURANT NAME]", description: "[SHORT DESCRIPTION]", address: "[RESTAURANT ADDRESS]", distance: "[DISTANCE]", image: "restaurant" },
  { category: "Restaurants", name: "[CAFÉ OR BAKERY NAME]", description: "[SHORT DESCRIPTION]", address: "[CAFÉ ADDRESS]", distance: "[DISTANCE]", image: "restaurant" },
  { category: "Attractions", name: "[ATTRACTION NAME]", description: "[SHORT DESCRIPTION]", address: "[ATTRACTION ADDRESS]", distance: "[DISTANCE]", image: "attraction" },
  { category: "Attractions", name: "[VIEWPOINT OR MUSEUM NAME]", description: "[SHORT DESCRIPTION]", address: "[ADDRESS]", distance: "[DISTANCE]", image: "attraction" },
  { category: "Shopping", name: "[SHOP NAME]", description: "[SHORT DESCRIPTION]", address: "[SHOP ADDRESS]", distance: "[DISTANCE]", image: "shopping" },
  { category: "Supermarkets", name: "[SUPERMARKET NAME]", description: "[SHORT DESCRIPTION]", address: "[SUPERMARKET ADDRESS]", distance: "[DISTANCE]", image: "market" },
  { category: "Activities", name: "[ACTIVITY NAME]", description: "[SHORT DESCRIPTION]", address: "[ACTIVITY ADDRESS]", distance: "[DISTANCE]", image: "activity" },
  { category: "Transportation", name: "[NEAREST BUS OR TRAIN STOP]", description: "[LINES AND WHERE THEY GO]", address: "[STOP ADDRESS]", distance: "[DISTANCE]" },
  { category: "Transportation", name: "[TAXI COMPANY]", description: "[PHONE NUMBER OR APP]", address: "[TAXI RANK LOCATION]" },
];

export const localFavourites = [
  { title: "[FAVOURITE PLACE FOR BREAKFAST]", note: "[A PERSONAL TIP FROM THE HOST]" },
  { title: "[BEST SUNSET SPOT]", note: "[A PERSONAL TIP FROM THE HOST]" },
  { title: "[HIDDEN GEM]", note: "[A PERSONAL TIP FROM THE HOST]" },
];

export const checkout = {
  time: property.checkOut,
  checklist: [
    "Load and start the dishwasher",
    "Take out the rubbish",
    "Turn off lights, heating and appliances",
    "Close all windows and lock the doors",
    "Return the key — [KEY RETURN INSTRUCTIONS]",
  ],
  details: [
    { title: "Cleaning", text: "[CLEANING INSTRUCTIONS]", icon: "sparkles" },
    { title: "Rubbish & recycling", text: "[WHERE AND HOW TO DISPOSE OF RUBBISH]", icon: "trash" },
    { title: "Key return", text: "[KEY RETURN INSTRUCTIONS]", icon: "key" },
  ],
};

export const emergency = {
  number: "[EMERGENCY NUMBER]",
  hospital: { name: "[NEAREST HOSPITAL]", address: "[HOSPITAL ADDRESS]", phone: "[HOSPITAL PHONE]" },
  pharmacy: { name: "[NEAREST PHARMACY]", address: "[PHARMACY ADDRESS]", phone: "[PHARMACY PHONE]" },
  firstAid: "[LOCATION OF FIRST-AID KIT]",
  safety: ["[FIRE EXTINGUISHER LOCATION]", "[SMOKE ALARM INFORMATION]", "[EMERGENCY EXIT INFORMATION]"],
};

export const problemSteps = [
  "Check this guide and the FAQ below — the answer may be here.",
  "Send us a message through Airbnb or call us on the number below.",
  "Tell us what happened and, if you can, send a photo.",
  "In an emergency, call the emergency number first.",
];

export const faqs = [
  { q: "What time is check-out?", a: `Check-out is at ${property.checkOut}. Please see the checklist in the Essentials section.` },
  { q: "Where do I dispose of rubbish?", a: "[WHERE AND HOW TO DISPOSE OF RUBBISH]" },
  { q: "How do I adjust the heating?", a: "[HOW TO CHANGE THE TEMPERATURE]" },
  { q: "Where can I find extra towels?", a: "[WHERE TO FIND EXTRA TOWELS]" },
  { q: "What should I do if something stops working?", a: "Don't worry — send us a message through Airbnb or call us. If it's an emergency, call the emergency number first." },
  { q: "Can I check in early or check out late?", a: "[EARLY CHECK-IN / LATE CHECK-OUT POLICY]" },
  { q: "Is there a hairdryer / iron?", a: "[HAIRDRYER AND IRON LOCATION]" },
];
