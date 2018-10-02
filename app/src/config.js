export const server = "https://inspectionreportservice.azurewebsites.net";
// export const server = "http://localhost:62163/api";

const house = [
  {
    name: "Overview",
    features: [
      {
        name: "General",
        comments: [],
      }
    ]
  },{    name: "Kitchen",
    features: [
      {
        name: "General",
        comments: [
          "The kitchen was not clean and tidy",
          "The kitchen was clean and tidy"
        ]
      },{
        name: "Benchtops",
        comments: [
          "Maintained in good condition at the time of inspection",
          "Bench was damaged"
        ]
      },{
        name: "Cabinets and Pantry",
        comments: [
          "Doors and sliding drawers are in good working condition"
        ]
      },{
        name: "Taps",
        comments: [
          "There is good water pressure"
        ]
      }, {
        name: "Rangehood",
        comments: [
          "None",
          "Good working condition at time of inspection",
          "The light wasn't working at time of inspection"
        ]
      },{
        name: "Cooking Appliances",
        comments: [
          "Electric oven, in good working condition at time of inspection",
          "Gas hob and electric oven, in good working condition at time of inspection"
        ]
      },{
        name: "Wastemaster",
        comments: [
          "None",
          "Good working condition at time of inspection",
          "Not working at time of inspection"
        ]
      },{
        name: "Dishwasher",
        comments: [
          "None",
          "The dishwasher is leaking",
          "Good working condition at time of inspection"
        ]
      },{
        name: "Power points",
        comments: [
          "Good working condition at time of inspection"
        ]
      },{
        name: "Lights",
        comments: [
          "Good working condition at time of inspection"
        ]
      },{
        name: "Windows and doors",
        comments: [
          "The windows are double glazed and made of aluminum",
          "None",
          "Made of timber framing and opened and closed correctly",
          "Made of aluminium framing and opened and closed correctly",
          "Framing and opened and closed correctly"
        ]
      },{
        name: "Blinds, curtains or drapes",
        comments: [
          "None",
          "Drapes",
          "White curtains",
          "Drapes, curtains",
          "Roller blinds",
          "Vertical blinds",
          "Venetian blinds",
          "Wooden blinds"
        ]
      },{
        name: "Floor covering",
        comments: [
          "Vinyl flooring",
          "Timber flooring",
          "Tile flooring",
          "Wooden veneer floor"
        ]
      },{
        name: "Moisture readings",
        comments: [
          "Moisture readings were between 0 and 40 on the external walls at time of inspection"
        ]
      }
    ],
  },{
    name: "Dining room",
    features: [
      {
        name: "General",
        comments: [
          "None",
          "Good room space",
          "Good room space which joins onto the lounge and kitchen"
        ]
      }
    ]
  },{
    name: "Lounge",
    features: [
      {
        name: "General",
        comments: [
          "Good room space"
        ]
      },{
        name: "Blinds, curtains or drapes",
        comments: [
          "None",
          "Drapes",
          "Drapes, curtains",
          "Roller blinds",
          "Vertical blinds",
          "Venetian blinds",
          "Wooden blinds"
        ]
      },{
        name: "Windows and doors",
        comments: [
          "The windows are double glazed and made of aluminum",
          "The windows and door are made of timber",
          "The windows and door are made of aluminium",
          "Framing and opened and closed correctly",
          "Interior doors are made of timber"
        ]
      },{
        name: "Power points",
        comments: [
          "Good working condition at time of inspection"
        ]
      },{
        name: "Lights",
        comments: [
          "Good working condition at time of inspection"
        ]
      },{
        name: "Fireplace",
        comments: [
          "Wood burner",
          "Operates by gas",
          "None"
        ]
      },{
        name: "Floor covering",
        comments: [
          "None",
          "Timber flooring",
          "Tile flooring",
          "Carpet floors"
        ]
      },{
        name: "Moisture readings",
        comments: [
          "Moisture readings were between 0 and 40 on the external walls at time of inspection"
        ]
      }
    ]
  },{
    name: "Laundry",
    features: [
      {
        name: "General",
        comments: [
          "None",
          "Located near the kitchen",
          "Located in the bathroom",
          "Good room space",
          "Located in the garage"
        ]
      },{
        name: "Ventilation",
        comments: [
          "None",
          "Window",
          "Exterior door and windows",
          "Exterior door and window",
          "Fan extractor and windows"
        ]
      },{
        name: "Windows and doors",
        comments: [
          "The windows are double glazed and made of aluminum",
          "No windows and steel garage door opened",
          "The window is made of timber framing and opened and closed correctly",
          "The window is made of aluminium framing and opened and closed correctly",
          "The windows and door are made of aluminium framing and opened and closed correctly",
          "The windows and door are made of timber framing and opened and closed correctly",
          "Interior door is made of timber"
        ]
      },{
        name: "Tub",
        comments: [
          "Good size tub",
          "Good size super tub"
        ]
      },{
        name: "Moisture readings",
        comments: [
          "Moisture readings were between 0 and 40 at time of inspection",
        ]
      }
    ]
  },{
    name: "Bathroom and Toilets",
    features: [
      {
        name: "General",
        comments: [
          "Good room space clean and tidy",

        ]
      },{
        name: "Bath tub",
        comments: [
          "None",
          "Good size bath tub"
          ]
      },{
        name: "Shower",
        comments: [
          "Leaking on the side",
          "Glass surrounding",
          "Good water pressure",
          "Shower and bath tub combined"
        ]
      },{
        name: "Taps",
        comments: [
          "In good working condition at time of inspection"
        ]
      },{
        name: "Vanity",
        comments: [
          "Clean and in good condition at time of inspection"
        ]
      },{
        name: "Ventilation",
        comments: [
          "None",
          "Window",
          "Window and fan extractor",
          "Fan extractor"
        ]
      },{
        name: "Lights",
        comments: [
          "Good working condition at time of inspection"
        ]
      },{
        name: "Accessories",
        comments: [
          "None",
          "Heated towel rail"
        ]
      },{
        name: "Windows and doors",
        comments: [
          "No windows and interior door is made of timber",
          "None",
          "The windows and doors are made of timber framing and opened",
          "The windows and door are made of aluminium",
          "The windows are made of aluminium framing and opened",
          "The windows are made of timber framing and opened and closed correctly",
          "The interior door is made of timber"
        ]
      },{
        name: "Toilets",
        comments: [
          "Toilet in good condition at time of inspection",
          "Separate toilet upstairs",
          "Separate toilet downstairs and in the bathroom",
          "Toilets in good condition at time of inspection"
        ]
      },{
        name: "Cisterns",
        comments: [
          "Good water flow and flush correctly"
        ]
      },{
        name: "Moisture readings",
        comments: [
          "Moisture readings were between 0 and 40 at time of inspection"
        ]
      }
    ]
  },{
    name: "Ensuites",
    features: [
      {
        name: "General",
        comments: [
          "Good room space",
          "Clean and tidy",
          "None"
        ]
      },{
        name: "Bath tub",
        comments: [
          "None"
        ]
      },{
        name: "Shower",
        comments: [
          "Good water pressure",
          "None"
        ]
      },{
        name: "Vanity",
        comments: [
          "Clean and tidy",
          "None"
        ]
      },{
        name: "Accessories",
        comments: [
          "Heated towel rail",
          "None"
        ]
      },{
        name: "Moisture readings",
        comments: [
          "None",
          "Moisture readings were between 0 and 40 at time of inspection"
        ]
      }
    ]
  },{
    name: "Bedrooms and Office/Studies",
    features: [
      {
        name: "General",
        comments: [
          "Two bedrooms and all have good room space",
          "Three bedrooms and all have good room space.",
          "Four bedrooms and all have good room space",
          "Five bedrooms and all have good room space"
        ]
      },{
        name: "Windows and doors",
        comments: [
          "The bedroom windows are made of timber framing",
          "The bedroom windows are made of aluminium framing",
          "The interior doors are made of timber"
        ]
      },{
        name: "Lights",
        comments: [
          "Working at the time of inspection"
        ]
      },{
        name: "Wardrobes",
        comments: [
          "Good room space, clean and tidy"
        ]
      },{
        name: "Office/Studies",
        comments: [
          "Good room space",
          "None"
        ]
      },{
        name: "Moisture readings",
        comments: [
          "Moisture readings were between 0 and 40 at time of inspection"
        ]
      }
    ]
  },{
    name: "Hallway",
    features: [
      {
        name: "General",
        comments: [
          "Good room space"
        ]
      },{
        name: "Interior Stairwells/handrails",
        comments: [
          "None",
          "Handrail was secured and good room space",
          "No handrails but good room space",
          "Handrail was not secured",
          "Good room space"
        ]
      }
    ]
  },{
    name: "Family room/extra rooms",
    features: [
      {
        name: "General",
        comments: [
          "Good room space",
          "None"
        ]
      }
    ]
  },{
    name: "Other Interior Features",
    features: [
      {
        name: "DVS or HRV",
        comments: [
          "HRV",
          "DVS",
          "None"
        ]
      },{
        name: "Alarm",
        comments: [
          "None",
          "In good working condition at time of inspection",
          "Was not working at time of inspection"
        ]
      },{
        name: "Smoke alarms",
        comments: [
          "One alarm installed, in good working condition",
          "Two alarms not working at time of inspection",
          "None",
          "Two alarms are installed, in good working condition",
          "Three alarms are installed, in good working condition"
        ]
      },{
        name: "Hot water cylinder",
        comments: [
          "Low pressure 180 litre",
          "Main pressure 135 litre",
          "The hot water is heated by gas",
          "The hot water cylinder is located under the house",
          "Mains pressure 180 litre",
          "None",
          "Hot water cylinder located upstairs"
        ]
      },{
        name: "Insulation",
        comments: [
          "None",
          "Insulation in the roof space and under the house",
          "Insulation in the roof space and nothing under the house",
          "Insulation in the roof space"
        ]
      },{
        name: "Heating inside the house",
        comments: [
          "Hitachi Inverter heat pump",
          "Fire place",
          "Daikin Inverter heat pump",
          "Fujitsu Inverter heat pump",
          "Mitsubishi Electric Inverter heat pump",
          "None"
        ]
      },{
        name: "Interior decorating/wallpaper",
        comments: [
          "Good condition at time of inspection",
          "None"
        ]
      },{
        name: "Interior and exterior painting",
        comments: [
          "Interior paint will need to be painted",
          "Exterior paint will need to be painted",
          "Interior and exterior paint is in good condition"
        ]
      },{
        name: "Electrical internal distribution board",
        comments: [
          "Good condition at time of inspection",
          "Located near the kitchen",
          "Located the garage"
        ]
      },{
        name: "Wiring",
        comments: [
          "Good"
        ]
      },{
        name: "Plumbing pipes and waste",
        comments: [
          "Pipe is leaking under the laundry tub",
          "In good condition at time of inspection"
        ]
      }
    ]
  },{
    name: "Garage",
    features: [
      {
        name: "General",
        comments: [
          "None",
          "Single garage in good condition at time of inspection",
          "Double garage in good condition at time of inspection",
          "Good room space"
        ]
      },{
        name: "Lights",
        comments: [
          "Good working condition at time of inspection",
          "None",
          "Good"
        ]
      },{
        name: "Power points",
        comments: [
          "None",
          "In good conditionx"
        ]
      },{
        name: "Windows and doors",
        comments: [
          "None",
          "Timber window framing in good condition at time of inspection",
          "Aluminium window framing in good condition at time of inspection",
          "Exterior steel door",
          "inspection"
        ]
      },{
        name: "Moisture readings",
        comments: [
          "Moisture readings were between 0 and 40 at time of inspection"
        ]
      }
    ]
  },{
    name: "Site conditions",
    features: [
      {
        name: "General",
        comments: [
          "Good condition"
        ]
      },{
        name: "Drainage",
        comments: [
        ]
      },{
        name: "Site stormwater",
        comments: [
          "Good condition"
        ]
      },{
        name: "House stormwater",
        comments: [
          "Good condition"
        ]
      },{
        name: "Sewer, vents and gullies",
        comments: [
          "Gullie trap in good condition"
        ]
      },{
        name: "Water supply",
        comments: [
          "Water tank",
          "Town water supply"
        ]
      },{
        name: "Septic supply",
        comments: [
          "Septic tank",
          "City septic supply"
        ]
      }
    ]
  },{
    name: "Pests, rot, decay, moisture and mould",
    features: [
      {
        name: "Evidence of pests",
        comments: [
          "Rat or mice dropping in the roof space",
          "Nothing evident"
        ]
      },{
        name: "Evidence of rot and decay",
        comments: [
          "Nothing evident"
        ]
      },{
        name: "Evidence of moisture and mould",
        comments: [
          "Nothing evident"
        ]
      }
    ]
  },{
    name: "Other Exterior Feature",
    features: [
      {
        name: "TV aerial",
        comments: [
          "Sky dish",
          "Sky dish and aerial located on the roof",
          "Aerial located in the roof space",
          "Sky dish and aerial"
        ]
      },{
        name: "Clothesline",
        comments: [
          "None",
          "Located on the side of the house",
          "Located at the back of the house"
        ]
      },{
        name: "Letterbox",
        comments: [
          "In front of the house"
        ]
      },{
        name: "Exterior Roofing",
        comments: [
          "Colour tile steel roofing",
          "Colour steel roofing",
          "Asphalt shingle roofing",
          "Concrete tile roof"
        ]
      },{
        name: "Spouting",
        comments: [
          "PVC in good condition at time of inspection",
          "Long run steel in good condition at time of inspection"
        ]
      },{
        name: "Downpipes",
        comments: [
          "Made of steel in good condition at time of inspection",
          "Made of PVC in good condition at time of inspection"
        ]
      },{
        name: "Flashing above the windows and door",
        comments: [
          "None",
          "Timber flashing in good condition at time of inspection",
          "In good condition at time of inspection"
        ]
      },{
        name: "Soffits boards under the eaves of the house",
        comments: [
          "Soffit boards will need to be painted",
          "The soffits boards were in good condition at time of inspection"
        ]
      },{
        name: "Fascia boards and barges",
        comments: [
          "Fascia boards in good condition at time of inspection"
        ]
      },{
        name: "Cladding",
        comments: [
          "Brick Cladding",
          "Palliside cladding in good condition at time of inspection",
          "James Hardiplank weather boards",
          "Timber weather boards and brick cladding",
          "The cladding is made of Harditex in good condition",
          "The weather boards are in good condition",
          "Timber weather boards cladding",
          "Hardifex plastered and timber cladding"
        ]
      },{
        name: "Base cladding",
        comments: [
          "Concrete blocks",
          "Fibre cement boards in good condition",
          "Timber and concrete foundation",
          "Concrete"
        ]
      },{
        name: "Construction",
        comments: [
          "Very good standard of workmanship"
        ]
      },{
        name: "Exterior windows and doors",
        comments: [
          "Aluminium and timber framing in good condition at time",
          "Timber doors in good condition at time of inspection",
          "Aluminium doors in good condition at time of inspection of inspection"
        ]
      },{
        name: "Foundations and blockwork",
        comments: [
          "Concrete",
          "Concrete and timber",
          "Concrete foundation"
        ]
      },{
        name: "Joist and under the house",
        comments: [
          "No Joist on the bottom floor, concrete foundtion",
          "None",
          "In good condition at time of inspection"
        ]
      },{
        name: "Sub floor ventilation",
        comments: [
          "Vent holes around the house",
          "None"
        ]
      },{
        name: "Decks",
        comments: [
          "In good condition at time of inspection",
          "None"
        ]
      },{
        name: "Exterior handrails",
        comments: [
          "Good condition at time of inspection",
          "None"
        ]
      },{
        name: "Balustrades",
        comments: [
          "In good condition at time of inspection",
          "None"
        ]
      },{
        name: "Pergolas, verandah or conservatory",
        comments: [
          "Veranda in good condition at time of inspection",
          "Conservatory in good condition at time of inspection",
          "None"
        ]
      },{
        name: "Fences, walls",
        comments: [
          "None",
          "Timber fence and in good condition",
          "Fully fenced",
          "Located at the back of the house"
        ]
      },{
        name: "Garden shed",
        comments: [
          "In good condition at time of inspection",
          ""
        ]
      },{
        name: "Sleepouts",
        comments: [
          "None"
        ]
      },{
        name: "Carports",
        comments: [
          "In good condition at time of inspection",
          "None"
        ]
      },{
        name: "Granny flats",
        comments: [
          "None"
        ]
      },{
        name: "Retaining walls",
        comments: [
          "Along the side of the house",
          "None"
        ]
      },{
        name: "Driveway",
        comments: [
          "None",
          "Good condition at time of inspection"
        ]
      },{
        name: "Pool and spa",
        comments: [
          "In good working condition at time of inspection",
          "None"
        ]
      },{
        name: "Exterior taps",
        comments: [
          "Along the side of the house",
          "In good working condition at time of inspection"
        ]
      },{
        name: "Miscellaneous alterations to original house",
        comments: [
          "None"
        ]
      }
    ]
  },{
    name: "Qualities of residential area",
    features: [
      {
        name: "General",
        comments: [
          "None"
        ]
      },{
        name: "Privacy and noise levels",
        comments: [
          "Good"
        ]
      },{
        name: "Workmanship",
        comments: [
          "Good standard of workmanship"
        ]
      },{
        name: "Future construction development",
        comments: [
          "None"
        ]
      }
    ]
  }
]

function generateJson(house) {
  return house.map(category => {
    var categoryToReturn = {};
    categoryToReturn.name = category.name;
    categoryToReturn.count = 0;
    categoryToReturn.features =
    category.features.map(feature => {
      var json = {};
      json.name = feature.name;
      json.grade = 0;
      json.comments = "";
      return json;
    })
    return categoryToReturn;
  })
}

export const jsonHouse = {
  "completed": false,
	"inspectedBy": "",
  "inspectionDate": "",
  "address": "",
  "summonsedBy": "",
  "estimateSummary": "",
  "roomsSummary": "",
  "constructionType": "",
  "comments": "",
  "areasInspected": {
    "site": false,
    "subfloor": false,
    "exterior": false,
    "roofExterior": false,
    "roofSpace": false,
    "services": false,
    "other": false
  },
  "categories": generateJson(house)
};

function generateJsonOptions(house) {
  return house.map(category => {
    var categoryToReturn = {};
    categoryToReturn.name = category.name;
    categoryToReturn.features =
    category.features.map(feature => {
      var json = {};
      json.name = feature.name;
      json.options = feature.comments;
      return json;
    })
    return categoryToReturn;
  })
}

export const commentOptions = {
  categories: generateJsonOptions(house)
}

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
