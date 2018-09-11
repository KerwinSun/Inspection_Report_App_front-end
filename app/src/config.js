export const server = "https://inspection-report-app-server.azurewebsites.net/api";

const CategoriesAndFeatures = [
  {
    "name": "Kitchen",
    "features": [
      "General",
      "Benchtops",
      "Cabinets and Pantry",
      "Taps",
      "Rangehood",
      "Cooking Appliances",
      "Wastemaster",
      "Dishwasher",
      "Power points",
      "Lights",
      "Windows and doors",
      "Blinds, curtains or drapes",
      "Floor covering",
      "Moisture readings"
    ]
  },
  {
    "name": "Dining room",
    "features": [
      "General"
    ]
  },
  {
    "name": "Lounge",
    "features": [
      "General",
      "Blinds, curtains or drapes",
      "Windows and doors",
      "Power points",
      "Lights",
      "Fireplace",
      "Floor covering",
      "Moisture readings"
    ]
  },
  {
    "name": "Laundry",
    "features": [
      "Ventilation",
      "Windows and doors",
      "Tub",
      "Moisture readings"
    ]  
  },
  {
    "name": "Bathroom and Toilets",
    "features": [
      "Gemeral",
      "Bath tub",
      "Shower",
      "Taps",
      "Vanity",
      "Ventilation",
      "Lights",
      "Accessories",
      "Windows and doors",
      "Toilets",
      "Cisterns",
      "Moisture readings",
    ],  
  },
  {
    "name": "Ensuites",
    "features": [
      "General",
      "Bath tub",
      "Shower",
      "Vanity",
      "Accessories",
      "Moisture readings"
    ]
  },
  {
    "name": "Bedrooms and Office/Studies",
    "features": [
      "General",
      "Windows and doors",
      "Lights",
      "Wardrobes",
      "Office/Studies",
      "Moisture readings",
    ],
  },
  {
    "name": "Hallway",
    "features": [
      "General",
      "Interior Stairwells/handrails"
    ]  
  },
  {
    "name": "Family room/extra rooms",
    "features": [
      "General"
    ]
  },
  {
    "name": "Other Interior Features",
    "features": [
      "DVS or HRV",
      "Alarm",
      "Smoke alarms",
      "Hot water cylinder",
      "Insulation",
      "Heating inside the house",
      "Interior decorating/wallpaper",
      "interior and exterior painting",
      "Electrical internal distribution board",
      "Wiring",
      "Plumbing pipes and waste"
    ]
  },
  {
    "name": "Garage",
    "features": [
      "General",
      "Lights",
      "Power points",
      "Windows and doors",
      "Moisture readings"
    ] 
  },
  {
    "name": "Site conditions",
    "features": [
      "Drainage",
      "Site stormwater",
      "House stormwater",
      "Sewer, vents and gullies",
      "Water supply",
      "Septic supply"
    ]
  },
  {
    "name": "Pests, rot, decay, moisture and mould",
    "features": [
      "Evidence of pests",
      "Evidence of rot and decay",
      "Evidence of moisture and mould"
    ]
  },
  {
    "name": "Other Exterior Feature",
    "features": [
      "TV aerial",
      "Clothesline",
      "Letterbox",
      "Exterior Roofing",
      "Spouting",
      "Downpipes",
      "Flashing above the windows and door",
      "Soffits boards under the eaves of the house",
      "Fascia boards and barges",
      "Cladding",
      "Base cladding",
      "Construction",
      "Exterior windows and doors",
      "Foundations and blockwork",
      "Joist and under the house",
      "Sub floor ventilation",
      "Decks",
      "Exterior handrails",
      "Balustrades",
      "Pergolas, verandah or conservatory",
      "Fences, walls",
      "Garden shed",
      "Sleepouts",
      "Carports",
      "Granny flats",
      "Retaining walls",
      "Driveway",
      "Pool and spa",
      "Exterior taps",
      "Miscellaneous alterations to original house",
    ]
  },
  {
    "name": "Qualities of residential area",
    "features": [
      "General",
      "Privacy and noise levels",
      "Workmanship",
      "Future construction development",
    ]
  }
]

function generateJson(categoriesAndFeatures) {
  return categoriesAndFeatures.map(category => {
    var categoryToReturn = {};
    categoryToReturn.name = category.name;
    categoryToReturn.features = 
    category.features.map(feature => {
      var json = {};
      json.name = feature;
      json.grade = 0;
      json.comments = "";
      return json;
    })
    return categoryToReturn;
  })
}

export const jsonCatAndFeats = generateJson(CategoriesAndFeatures);

export const jsonHouse = {
  "completed": false,
	"inspectedBy": "",
	"address": "",
	"date": "",
  "constructionType": "",
  "categories": generateJson(CategoriesAndFeatures)
};

export const realEstateOptions = [
  "Iron Bridge",
  "Barfoot and Thompson",
  "Mike Pero",
  "Ray White",
  "Harcourts",
  "Bayleys",
  "Prestige Realty",
  "L J Hooker"
];