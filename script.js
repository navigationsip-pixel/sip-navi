// === LOCATIONS ===
// 📋 INSTRUCTIONS FOR INPUTTER.HTML
// 1. Open Inputter.html in a text editor
// 2. Find the "const locations = [" line (around line 250)
// 3. Replace the entire locations array with the one below
// 4. Find the "const connections = [" line (around line 400)
// 5. Replace the entire connections array with the one below
// 6. Save and reload Inputter.html

// ═══════════════════════════════════════════════════════

// === LOCATIONS ===
const locations = [
  {
    id: 'registrar',
    name: 'Registrar',
    type: 'office',
    x: 492,
    y: 615,
    floor: 'mainjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'accounting',
    name: 'Accounting',
    type: 'office',
    x: 490,
    y: 577,
    floor: 'mainjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'office1',
    name: 'Unknown Office',
    type: 'office',
    x: 859,
    y: 594,
    floor: 'mainjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'g1',
    name: 'G1',
    type: 'classroom',
    x: 482,
    y: 384,
    floor: 'mainjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'g2',
    name: 'G2',
    type: 'classroom',
    x: 490,
    y: 203,
    floor: 'mainjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'g4',
    name: 'G4',
    type: 'classroom',
    x: 806,
    y: 210,
    floor: 'mainjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'uniform',
    name: 'School Uniform',
    type: 'office',
    x: 622,
    y: 175,
    floor: 'mainjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'g3',
    name: 'G3',
    type: 'classroom',
    x: 629,
    y: 389,
    floor: 'mainjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'rest',
    name: 'Restroom',
    type: 'restroom',
    x: 935,
    y: 407,
    floor: 'mainjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'node-1',
    name: 'node-1',
    type: 'waypoint',
    x: 550,
    y: 699,
    floor: 'mainjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'node-2',
    name: 'node-2',
    type: 'waypoint',
    x: 550,
    y: 615,
    floor: 'mainjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'node-4',
    name: 'node-4',
    type: 'waypoint',
    x: 549,
    y: 348,
    floor: 'mainjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'node-5',
    name: 'node-5',
    type: 'waypoint',
    x: 547,
    y: 206,
    floor: 'mainjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'node-6',
    name: 'node-6',
    type: 'waypoint',
    x: 620,
    y: 208,
    floor: 'mainjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'node-7',
    name: 'node-7',
    type: 'waypoint',
    x: 629,
    y: 349,
    floor: 'mainjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'node-8',
    name: 'node-8',
    type: 'waypoint',
    x: 935,
    y: 349,
    floor: 'mainjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'node-9',
    name: 'node-9',
    type: 'waypoint',
    x: 546,
    y: 75,
    floor: 'mainjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'node-10',
    name: 'node-10',
    type: 'waypoint',
    x: 550,
    y: 575,
    floor: 'mainjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'node-11',
    name: 'node-11',
    type: 'waypoint',
    x: 549,
    y: 384,
    floor: 'mainjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'backstairs-1-pair',
    name: 'Back Stairs L1 (from mainjhs)',
    type: 'stairs',
    x: 602,
    y: 52,
    floor: 'groundjhsMap',
    view: 'groundjhs',
    connectsToFloor: 'mainjhsMap',
    connectsToView: 'mainjhs',
    floorDirection: 'both'
  },
  {
    id: 'backstairs-1',
    name: 'Back Stairs L1',
    type: 'stairs',
    x: 627,
    y: 75,
    floor: 'mainjhsMap',
    view: 'mainjhs',
    connectsToFloor: 'groundjhsMap',
    connectsToView: 'groundjhs',
    floorDirection: 'both'
  },
  {
    id: 'node-12',
    name: 'node-12',
    type: 'waypoint',
    x: 550,
    y: 700,
    floor: 'groundjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'library',
    name: 'Library',
    type: 'classroom',
    x: 490,
    y: 618,
    floor: 'groundjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'b1',
    name: 'Room B1',
    type: 'classroom',
    x: 492,
    y: 569,
    floor: 'groundjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'b2',
    name: 'Room B2',
    type: 'classroom',
    x: 493,
    y: 393,
    floor: 'groundjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'b3',
    name: 'Room B3',
    type: 'classroom',
    x: 494,
    y: 211,
    floor: 'groundjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'clinic',
    name: 'Clinic',
    type: 'classroom',
    x: 618,
    y: 177,
    floor: 'groundjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'b4',
    name: 'Room B4',
    type: 'classroom',
    x: 801,
    y: 210,
    floor: 'groundjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'jhscanteen',
    name: 'Ground Canteen',
    type: 'classroom',
    x: 623,
    y: 391,
    floor: 'groundjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'groundrest',
    name: 'Ground Restroom',
    type: 'restroom',
    x: 937,
    y: 405,
    floor: 'groundjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'hele',
    name: 'Hele Room',
    type: 'office',
    x: 865,
    y: 595,
    floor: 'groundjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'node-14',
    name: 'node-14',
    type: 'waypoint',
    x: 549,
    y: 619,
    floor: 'groundjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'node-15',
    name: 'node-15',
    type: 'waypoint',
    x: 549,
    y: 595,
    floor: 'groundjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'node-16',
    name: 'node-16',
    type: 'waypoint',
    x: 548,
    y: 568,
    floor: 'groundjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'node-17',
    name: 'node-17',
    type: 'waypoint',
    x: 548,
    y: 393,
    floor: 'groundjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'node-18',
    name: 'node-18',
    type: 'waypoint',
    x: 548,
    y: 354,
    floor: 'groundjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'node-19',
    name: 'node-19',
    type: 'waypoint',
    x: 623,
    y: 353,
    floor: 'groundjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'node-20',
    name: 'node-20',
    type: 'waypoint',
    x: 938,
    y: 354,
    floor: 'groundjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'node-21',
    name: 'node-21',
    type: 'waypoint',
    x: 547,
    y: 213,
    floor: 'groundjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'node-22',
    name: 'node-22',
    type: 'waypoint',
    x: 618,
    y: 212,
    floor: 'groundjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'node-23',
    name: 'node-23',
    type: 'waypoint',
    x: 547,
    y: 52,
    floor: 'groundjhsMap',
    view: 'mainjhs'
  },
  {
    id: '201',
    name: 'Room 201',
    type: 'classroom',
    x: 870,
    y: 602,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second'
  },
  {
    id: '202',
    name: 'Room 202',
    type: 'classroom',
    x: 490,
    y: 623,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second'
  },
  {
    id: '203',
    name: 'Room 203',
    type: 'classroom',
    x: 489,
    y: 570,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second'
  },
  {
    id: '204',
    name: 'Room 204',
    type: 'classroom',
    x: 493,
    y: 385,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second'
  },
  {
    id: '205',
    name: 'Room 205',
    type: 'classroom',
    x: 493,
    y: 206,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second'
  },
  {
    id: 'guidance-office',
    name: 'Guidance Office',
    type: 'classroom',
    x: 748,
    y: 177,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second'
  },
  {
    id: 'jhslab',
    name: 'Laboratory (JHS)',
    type: 'classroom',
    x: 802,
    y: 213,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second'
  },
  {
    id: 'comlab',
    name: 'Computer Laboratory',
    type: 'classroom',
    x: 627,
    y: 393,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second'
  },
  {
    id: 'secondrest',
    name: 'Restroom Second Floor',
    type: 'restroom',
    x: 936,
    y: 410,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second'
  },
  {
    id: 'node-85',
    name: 'Back Stairs L2',
    type: 'stairs',
    x: 602,
    y: 52,
    floor: 'mainjhsMap',
    view: 'mainjhs',
    connectsToFloor: 'mainjhs-secondMap',
    connectsToView: 'mainjhs-second'
  },
  {
    id: 'node-85-pair',
    name: 'Back Stairs L2 (from mainjhs)',
    type: 'stairs',
    x: 637,
    y: 72,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second',
    connectsToFloor: 'mainjhsMap',
    connectsToView: 'mainjhs',
    floorDirection: 'both'
  },
  {
    id: 'node-90',
    name: 'node-90',
    type: 'waypoint',
    x: 546,
    y: 623,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second',
    connectsToFloor: 'mainjhs-secondMap',
    connectsToView: 'mainjhs-second'
  },
  {
    id: 'node-91',
    name: 'node-91',
    type: 'waypoint',
    x: 546,
    y: 599,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second',
    connectsToFloor: 'mainjhs-secondMap',
    connectsToView: 'mainjhs-second'
  },
  {
    id: 'node-92',
    name: 'node-92',
    type: 'waypoint',
    x: 546,
    y: 570,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second',
    connectsToFloor: 'mainjhs-secondMap',
    connectsToView: 'mainjhs-second'
  },
  {
    id: 'node-93',
    name: 'node-93',
    type: 'waypoint',
    x: 547,
    y: 385,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second',
    connectsToFloor: 'mainjhs-secondMap',
    connectsToView: 'mainjhs-second'
  },
  {
    id: 'node-94',
    name: 'node-94',
    type: 'waypoint',
    x: 547,
    y: 349,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second',
    connectsToFloor: 'mainjhs-secondMap',
    connectsToView: 'mainjhs-second'
  },
  {
    id: 'node-95',
    name: 'node-95',
    type: 'waypoint',
    x: 627,
    y: 351,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second',
    connectsToFloor: 'mainjhs-secondMap',
    connectsToView: 'mainjhs-second'
  },
  {
    id: 'node-96',
    name: 'node-96',
    type: 'waypoint',
    x: 937,
    y: 349,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second',
    connectsToFloor: 'mainjhs-secondMap',
    connectsToView: 'mainjhs-second'
  },
  {
    id: 'node-97',
    name: 'node-97',
    type: 'waypoint',
    x: 547,
    y: 210,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second',
    connectsToFloor: 'mainjhs-secondMap',
    connectsToView: 'mainjhs-second'
  },
  {
    id: 'node-98',
    name: 'node-98',
    type: 'waypoint',
    x: 744,
    y: 214,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second',
    connectsToFloor: 'mainjhs-secondMap',
    connectsToView: 'mainjhs-second'
  },
  {
    id: 'node-99',
    name: 'node-99',
    type: 'waypoint',
    x: 542,
    y: 74,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second',
    connectsToFloor: 'mainjhs-secondMap',
    connectsToView: 'mainjhs-second'
  },
  {
    id: 'node-100',
    name: 'node-100',
    type: 'waypoint',
    x: 547,
    y: 704,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second',
    connectsToFloor: 'mainjhs-secondMap',
    connectsToView: 'mainjhs-second'
  },
  {
    id: 'node-101',
    name: 'node-101',
    type: 'waypoint',
    x: 573,
    y: 74,
    floor: 'mainjhsMap',
    view: 'mainjhs',
    connectsToFloor: 'mainjhs-secondMap',
    connectsToView: 'mainjhs-second'
  },
  {
    id: 'node-102',
    name: 'node-102',
    type: 'waypoint',
    x: 573,
    y: 50,
    floor: 'mainjhsMap',
    view: 'mainjhs',
    connectsToFloor: 'mainjhs-secondMap',
    connectsToView: 'mainjhs-second'
  },
  {
    id: 'node-103',
    name: 'Ground Stairs',
    type: 'stairs',
    x: 590,
    y: 700,
    floor: 'groundjhsMap',
    view: 'groundjhs',
    connectsToFloor: 'mainjhsMap',
    connectsToView: 'mainjhs'
  },
  {
    id: 'node-103-pair',
    name: 'Ground Stairs (from groundjhs)',
    type: 'stairs',
    x: 797,
    y: 673,
    floor: 'mainjhsMap',
    view: 'mainjhs',
    connectsToFloor: 'groundjhsMap',
    connectsToView: 'groundjhs',
    floorDirection: 'both'
  },
  {
    id: 'node-104',
    name: 'node-104',
    type: 'waypoint',
    x: 796,
    y: 595,
    floor: 'mainjhsMap',
    view: 'mainjhs',
    connectsToFloor: 'mainjhsMap',
    connectsToView: 'mainjhs'
  },
  {
    id: 'node-105',
    name: 'node-105',
    type: 'waypoint',
    x: 551,
    y: 594,
    floor: 'mainjhsMap',
    view: 'mainjhs',
    connectsToFloor: 'mainjhsMap',
    connectsToView: 'mainjhs'
  },
  {
    id: 'node-106',
    name: 'Ground Stairs (from groundjhs)',
    type: 'stairs',
    x: 601,
    y: 699,
    floor: 'mainjhsMap',
    view: 'mainjhs',
    connectsToFloor: 'mainjhs-secondMap',
    connectsToView: 'mainjhs-second'
  },
  {
    id: 'node-106-pair',
    name: 'Ground Stairs (from groundjhs) (from mainjhs)',
    type: 'stairs',
    x: 802,
    y: 667,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second',
    connectsToFloor: 'mainjhsMap',
    connectsToView: 'mainjhs',
    floorDirection: 'both'
  },
  {
    id: 'node-107',
    name: 'node-107',
    type: 'waypoint',
    x: 801,
    y: 604,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second',
    connectsToFloor: 'mainjhs-secondMap',
    connectsToView: 'mainjhs-second'
  },
  {
    id: '301',
    name: 'Room 301',
    type: 'classroom',
    x: 865,
    y: 604,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third',
    connectsToFloor: 'mainjhs-secondMap',
    connectsToView: 'mainjhs-second'
  },
  {
    id: '302',
    name: 'Room 302',
    type: 'classroom',
    x: 485,
    y: 623,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third',
    connectsToFloor: 'mainjhs-secondMap',
    connectsToView: 'mainjhs-second'
  },
  {
    id: '303',
    name: 'Room 303',
    type: 'classroom',
    x: 485,
    y: 570,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third',
    connectsToFloor: 'mainjhs-secondMap',
    connectsToView: 'mainjhs-second'
  },
  {
    id: '304',
    name: 'Room 304',
    type: 'classroom',
    x: 482,
    y: 392,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third',
    connectsToFloor: 'mainjhs-secondMap',
    connectsToView: 'mainjhs-second'
  },
  {
    id: '305',
    name: 'Room 305',
    type: 'classroom',
    x: 488,
    y: 207,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third',
    connectsToFloor: 'mainjhs-secondMap',
    connectsToView: 'mainjhs-second'
  },
  {
    id: 'principal-office',
    name: 'Principals Office',
    type: 'office',
    x: 750,
    y: 179,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third',
    connectsToFloor: 'mainjhs-secondMap',
    connectsToView: 'mainjhs-second'
  },
  {
    id: '307',
    name: 'Room 307',
    type: 'classroom',
    x: 810,
    y: 206,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third',
    connectsToFloor: 'mainjhs-secondMap',
    connectsToView: 'mainjhs-second'
  },
  {
    id: '306',
    name: 'Room 306',
    type: 'classroom',
    x: 633,
    y: 392,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third',
    connectsToFloor: 'mainjhs-secondMap',
    connectsToView: 'mainjhs-second'
  },
  {
    id: 'thirdrest',
    name: 'Restroom Third Floor',
    type: 'restroom',
    x: 936,
    y: 429,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third'
  },
  {
    id: 'node-109',
    name: 'node-109',
    type: 'waypoint',
    x: 548,
    y: 699,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third'
  },
  {
    id: 'node-110',
    name: 'node-110',
    type: 'waypoint',
    x: 549,
    y: 625,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third'
  },
  {
    id: 'node-111',
    name: 'node-111',
    type: 'waypoint',
    x: 548,
    y: 601,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third'
  },
  {
    id: 'node-112',
    name: 'node-112',
    type: 'waypoint',
    x: 549,
    y: 570,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third'
  },
  {
    id: 'node-113',
    name: 'node-113',
    type: 'waypoint',
    x: 800,
    y: 603,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third'
  },
  {
    id: 'node-114',
    name: 'node-114',
    type: 'waypoint',
    x: 550,
    y: 393,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third'
  },
  {
    id: 'node-115',
    name: 'node-115',
    type: 'waypoint',
    x: 549,
    y: 357,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third'
  },
  {
    id: 'node-116',
    name: 'node-116',
    type: 'waypoint',
    x: 634,
    y: 358,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third'
  },
  {
    id: 'node-117',
    name: 'node-117',
    type: 'waypoint',
    x: 936,
    y: 361,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third'
  },
  {
    id: 'node-118',
    name: 'node-118',
    type: 'waypoint',
    x: 550,
    y: 208,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third'
  },
  {
    id: 'node-119',
    name: 'node-119',
    type: 'waypoint',
    x: 749,
    y: 206,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third'
  },
  {
    id: 'node-120',
    name: 'node-120',
    type: 'waypoint',
    x: 548,
    y: 72,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third'
  },
  {
    id: 'stairs-3',
    name: 'Third Stair',
    type: 'stairs',
    x: 597,
    y: 705,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second',
    connectsToFloor: 'mainjhs-thirdMap',
    connectsToView: 'mainjhs-third'
  },
  {
    id: 'stairs-3-pair',
    name: 'Third Stair (from mainjhs-second)',
    type: 'stairs',
    x: 800,
    y: 673,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third',
    connectsToFloor: 'mainjhs-secondMap',
    connectsToView: 'mainjhs-second',
    floorDirection: 'both'
  },
  {
    id: 'node-121',
    name: 'node-121',
    type: 'waypoint',
    x: 576,
    y: 74,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third'
  },
  {
    id: 'node-122',
    name: 'node-122',
    type: 'waypoint',
    x: 575,
    y: 47,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third'
  },
  {
    id: 'backstairs-2',
    name: 'Back Stairs L2',
    type: 'stairs',
    x: 606,
    y: 50,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second',
    connectsToFloor: 'mainjhs-thirdMap',
    connectsToView: 'mainjhs-third'
  },
  {
    id: 'backstairs-2-pair',
    name: 'Back Stairs L2 (from mainjhs-second)',
    type: 'stairs',
    x: 631,
    y: 74,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third',
    connectsToFloor: 'mainjhs-secondMap',
    connectsToView: 'mainjhs-second',
    floorDirection: 'both'
  },
  {
    id: 'node-126',
    name: 'node-126',
    type: 'waypoint',
    x: 574,
    y: 50,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second',
    connectsToFloor: 'mainjhs-thirdMap',
    connectsToView: 'mainjhs-third'
  },
  {
    id: 'node-127',
    name: 'node-127',
    type: 'waypoint',
    x: 575,
    y: 72,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second',
    connectsToFloor: 'mainjhs-thirdMap',
    connectsToView: 'mainjhs-third'
  },
  {
    id: 'stairs-4',
    name: 'Fourth Stair',
    type: 'stairs',
    x: 598,
    y: 698,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third',
    connectsToFloor: 'mainjhs-fourthMap',
    connectsToView: 'mainjhs-fourth'
  },
  {
    id: '402',
    name: 'Room 402',
    type: 'classroom',
    x: 492,
    y: 615,
    floor: 'mainjhs-fourthMap',
    view: 'mainjhs-fourth'
  },
  {
    id: '403',
    name: 'Room 403',
    type: 'classroom',
    x: 490,
    y: 577,
    floor: 'mainjhs-fourthMap',
    view: 'mainjhs-fourth'
  },
  {
    id: '401',
    name: 'Room 401',
    type: 'classroom',
    x: 859,
    y: 594,
    floor: 'mainjhs-fourthMap',
    view: 'mainjhs-fourth'
  },
  {
    id: '404',
    name: 'Room 404',
    type: 'classroom',
    x: 482,
    y: 384,
    floor: 'mainjhs-fourthMap',
    view: 'mainjhs-fourth'
  },
  {
    id: '405',
    name: 'Room 405',
    type: 'classroom',
    x: 490,
    y: 203,
    floor: 'mainjhs-fourthMap',
    view: 'mainjhs-fourth'
  },
  {
    id: '407',
    name: 'Room 407',
    type: 'classroom',
    x: 806,
    y: 210,
    floor: 'mainjhs-fourthMap',
    view: 'mainjhs-fourth'
  },
  {
    id: 'faculty-4',
    name: 'School Faculty 4',
    type: 'office',
    x: 747,
    y: 178,
    floor: 'mainjhs-fourthMap',
    view: 'mainjhs-fourth'
  },
  {
    id: '406',
    name: 'Room 406',
    type: 'classroom',
    x: 629,
    y: 389,
    floor: 'mainjhs-fourthMap',
    view: 'mainjhs-fourth'
  },
  {
    id: 'node-1-mainjhsfourth',
    name: 'node-1',
    type: 'waypoint',
    x: 551,
    y: 700,
    floor: 'mainjhs-fourthMap',
    view: 'mainjhs-fourth'
  },
  {
    id: 'node-2-mainjhsfourth',
    name: 'node-2',
    type: 'waypoint',
    x: 550,
    y: 615,
    floor: 'mainjhs-fourthMap',
    view: 'mainjhs-fourth'
  },
  {
    id: 'node-4-mainjhsfourth',
    name: 'node-4',
    type: 'waypoint',
    x: 549,
    y: 348,
    floor: 'mainjhs-fourthMap',
    view: 'mainjhs-fourth'
  },
  {
    id: 'node-5-mainjhsfourth',
    name: 'node-5',
    type: 'waypoint',
    x: 547,
    y: 206,
    floor: 'mainjhs-fourthMap',
    view: 'mainjhs-fourth'
  },
  {
    id: 'node-6-mainjhsfourth',
    name: 'node-6',
    type: 'waypoint',
    x: 745,
    y: 210,
    floor: 'mainjhs-fourthMap',
    view: 'mainjhs-fourth'
  },
  {
    id: 'node-7-mainjhsfourth',
    name: 'node-7',
    type: 'waypoint',
    x: 629,
    y: 349,
    floor: 'mainjhs-fourthMap',
    view: 'mainjhs-fourth'
  },
  {
    id: 'node-8-mainjhsfourth',
    name: 'node-8',
    type: 'waypoint',
    x: 935,
    y: 349,
    floor: 'mainjhs-fourthMap',
    view: 'mainjhs-fourth'
  },
  {
    id: 'node-9-mainjhsfourth',
    name: 'node-9',
    type: 'waypoint',
    x: 546,
    y: 75,
    floor: 'mainjhs-fourthMap',
    view: 'mainjhs-fourth'
  },
  {
    id: 'node-10-mainjhsfourth',
    name: 'node-10',
    type: 'waypoint',
    x: 550,
    y: 575,
    floor: 'mainjhs-fourthMap',
    view: 'mainjhs-fourth'
  },
  {
    id: 'node-11-mainjhsfourth',
    name: 'node-11',
    type: 'waypoint',
    x: 549,
    y: 384,
    floor: 'mainjhs-fourthMap',
    view: 'mainjhs-fourth'
  },
  {
    id: 'node-101-mainjhsfourth',
    name: 'node-101',
    type: 'waypoint',
    x: 573,
    y: 74,
    floor: 'mainjhs-fourthMap',
    view: 'mainjhs-fourth'
  },
  {
    id: 'node-102-mainjhsfourth',
    name: 'node-102',
    type: 'waypoint',
    x: 573,
    y: 50,
    floor: 'mainjhs-fourthMap',
    view: 'mainjhs-fourth'
  },
  {
    id: 'node-104-mainjhsfourth',
    name: 'node-104',
    type: 'waypoint',
    x: 796,
    y: 595,
    floor: 'mainjhs-fourthMap',
    view: 'mainjhs-fourth'
  },
  {
    id: 'node-105-mainjhsfourth',
    name: 'node-105',
    type: 'waypoint',
    x: 551,
    y: 594,
    floor: 'mainjhs-fourthMap',
    view: 'mainjhs-fourth'
  },
  {
    id: 'fourthrest',
    name: 'Restroom Fourth Floor',
    type: 'restroom',
    x: 938,
    y: 414,
    floor: 'mainjhs-fourthMap',
    view: 'mainjhs-fourth'
  },
  {
    id: 'backstairs-3',
    name: 'Back Stairs L3',
    type: 'stairs',
    x: 607,
    y: 49,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third',
    connectsToFloor: 'mainjhs-fourthMap',
    connectsToView: 'mainjhs-fourth'
  },
  {
    id: 'backstairs-3-pair',
    name: 'Back Stairs L3 (from mainjhs-third)',
    type: 'stairs',
    x: 630,
    y: 74,
    floor: 'mainjhs-fourthMap',
    view: 'mainjhs-fourth',
    connectsToFloor: 'mainjhs-thirdMap',
    connectsToView: 'mainjhs-third',
    floorDirection: 'both'
  },
  {
    id: 'backstairs-4',
    name: 'Back Stairs L4',
    type: 'stairs',
    x: 613,
    y: 49,
    floor: 'mainjhs-fourthMap',
    view: 'mainjhs-fourth',
    connectsToFloor: 'mainjhs-fifthMap',
    connectsToView: 'mainjhs-fifth'
  },
  {
    id: 'backstairs-4-pair',
    name: 'Back Stairs L4 (from mainjhs-fourth)',
    type: 'stairs',
    x: 627,
    y: 70,
    floor: 'mainjhs-fifthMap',
    view: 'mainjhs-fifth',
    connectsToFloor: 'mainjhs-fourthMap',
    connectsToView: 'mainjhs-fourth',
    floorDirection: 'both'
  },
  {
    id: 'stairs-5',
    name: 'Fifth Stair',
    type: 'stairs',
    x: 597,
    y: 697,
    floor: 'mainjhs-fourthMap',
    view: 'mainjhs-fourth',
    connectsToFloor: 'mainjhs-fifthMap',
    connectsToView: 'mainjhs-fifth'
  },
  {
    id: 'stairs-5-pair',
    name: 'Fifth Stair (from mainjhs-fourth)',
    type: 'stairs',
    x: 797,
    y: 676,
    floor: 'mainjhs-fifthMap',
    view: 'mainjhs-fifth',
    connectsToFloor: 'mainjhs-fourthMap',
    connectsToView: 'mainjhs-fourth',
    floorDirection: 'both'
  },
  {
    id: 'node-129',
    name: 'node-129',
    type: 'waypoint',
    x: 795,
    y: 592,
    floor: 'mainjhs-fifthMap',
    view: 'mainjhs-fifth',
    connectsToFloor: 'mainjhs-fifthMap',
    connectsToView: 'mainjhs-fifth'
  },
  {
    id: 'node-130',
    name: 'node-130',
    type: 'waypoint',
    x: 551,
    y: 590,
    floor: 'mainjhs-fifthMap',
    view: 'mainjhs-fifth',
    connectsToFloor: 'mainjhs-fifthMap',
    connectsToView: 'mainjhs-fifth'
  },
  {
    id: 'node-131',
    name: 'node-131',
    type: 'waypoint',
    x: 551,
    y: 644,
    floor: 'mainjhs-fifthMap',
    view: 'mainjhs-fifth',
    connectsToFloor: 'mainjhs-fifthMap',
    connectsToView: 'mainjhs-fifth'
  },
  {
    id: 'node-132',
    name: 'node-132',
    type: 'waypoint',
    x: 549,
    y: 284,
    floor: 'mainjhs-fifthMap',
    view: 'mainjhs-fifth',
    connectsToFloor: 'mainjhs-fifthMap',
    connectsToView: 'mainjhs-fifth'
  },
  {
    id: '501',
    name: 'Room 501',
    type: 'classroom',
    x: 861,
    y: 592,
    floor: 'mainjhs-fifthMap',
    view: 'mainjhs-fifth'
  },
  {
    id: '502',
    name: 'Room 502',
    type: 'classroom',
    x: 489,
    y: 643,
    floor: 'mainjhs-fifthMap',
    view: 'mainjhs-fifth'
  },
  {
    id: '503',
    name: 'Room 503',
    type: 'classroom',
    x: 481,
    y: 285,
    floor: 'mainjhs-fifthMap',
    view: 'mainjhs-fifth'
  },
  {
    id: '504',
    name: 'Room 504',
    type: 'classroom',
    x: 484,
    y: 54,
    floor: 'mainjhs-fifthMap',
    view: 'mainjhs-fifth'
  },
  {
    id: 'jhs-faculty',
    name: 'Faculty (JHS)',
    type: 'classroom',
    x: 821,
    y: 209,
    floor: 'mainjhs-fifthMap',
    view: 'mainjhs-fifth'
  },
  {
    id: 'fifthrest',
    name: 'Restroom Fourth Floor',
    type: 'restroom',
    x: 826,
    y: 113,
    floor: 'mainjhs-fifthMap',
    view: 'mainjhs-fifth'
  },
  {
    id: 'node-133',
    name: 'node-133',
    type: 'waypoint',
    x: 547,
    y: 209,
    floor: 'mainjhs-fifthMap',
    view: 'mainjhs-fifth'
  },
  {
    id: 'node-134',
    name: 'node-134',
    type: 'waypoint',
    x: 546,
    y: 112,
    floor: 'mainjhs-fifthMap',
    view: 'mainjhs-fifth'
  },
  {
    id: 'node-135',
    name: 'node-135',
    type: 'waypoint',
    x: 545,
    y: 71,
    floor: 'mainjhs-fifthMap',
    view: 'mainjhs-fifth'
  },
  {
    id: 'node-136',
    name: 'node-136',
    type: 'waypoint',
    x: 545,
    y: 54,
    floor: 'mainjhs-fifthMap',
    view: 'mainjhs-fifth'
  },
  {
    id: 'tle-room',
    name: 'TLE Room',
    type: 'classroom',
    x: 609,
    y: 496,
    floor: 'mainjhs-fifthMap',
    view: 'mainjhs-fifth'
  },
  {
    id: 'node-137',
    name: 'node-137',
    type: 'waypoint',
    x: 551,
    y: 394,
    floor: 'mainjhs-fifthMap',
    view: 'mainjhs-fifth'
  },
  {
    id: 'node-138',
    name: 'node-138',
    type: 'waypoint',
    x: 609,
    y: 394,
    floor: 'mainjhs-fifthMap',
    view: 'mainjhs-fifth'
  },
  {
    id: 'shs-canteen',
    name: 'SHS Canteen',
    type: 'classroom',
    x: 813,
    y: 428,
    floor: 'shsbldgMap',
    view: 'shsbldg'
  },
  {
    id: 'node-140',
    name: 'node-140',
    type: 'waypoint',
    x: 677,
    y: 706,
    floor: 'shsbldgMap',
    view: 'shsbldg'
  },
  {
    id: 'node-141',
    name: 'node-141',
    type: 'waypoint',
    x: 811,
    y: 705,
    floor: 'shsbldgMap',
    view: 'shsbldg'
  },
  {
    id: 'shs-stairent',
    name: 'SHS Building Entrance',
    type: 'entrance',
    x: 558,
    y: 706,
    floor: 'shsbldgMap',
    view: 'shsbldg'
  },
  {
    id: 'node-144',
    name: 'node-144',
    type: 'waypoint',
    x: 558,
    y: 630,
    floor: 'shsbldgMap',
    view: 'shsbldg'
  },
  {
    id: 'shs-stairs2',
    name: 'shs stair 2',
    type: 'stairs',
    x: 697,
    y: 707,
    floor: 'second-shsbldgMap',
    view: 'second-shsbldg',
    connectsToFloor: 'third-shsbldgMap',
    connectsToView: 'third-shsbldg'
  },
  {
    id: 'shs-stairs2-pair',
    name: 'shs stair 2 (from second-shsbldg)',
    type: 'stairs',
    x: 693,
    y: 707,
    floor: 'third-shsbldgMap',
    view: 'third-shsbldg',
    connectsToFloor: 'second-shsbldgMap',
    connectsToView: 'second-shsbldg',
    floorDirection: 'both'
  },
  {
    id: 'A6',
    name: 'Room A6',
    type: 'classroom',
    x: 773,
    y: 461,
    floor: 'second-shsbldgMap',
    view: 'second-shsbldg',
    connectsToFloor: 'third-shsbldgMap',
    connectsToView: 'third-shsbldg'
  },
  {
    id: 'A7',
    name: 'Room A7',
    type: 'classroom',
    x: 825,
    y: 461,
    floor: 'second-shsbldgMap',
    view: 'second-shsbldg',
    connectsToFloor: 'third-shsbldgMap',
    connectsToView: 'third-shsbldg'
  },
  {
    id: 'shsrestG1',
    name: 'Women Restroom SHS (Floor 2)',
    type: 'restroom',
    x: 1038,
    y: 605,
    floor: 'second-shsbldgMap',
    view: 'second-shsbldg'
  },
  {
    id: 'shsrestB1',
    name: 'Men Restroom SHS (Floor 2)',
    type: 'restroom',
    x: 904,
    y: 604,
    floor: 'second-shsbldgMap',
    view: 'second-shsbldg'
  },
  {
    id: 'A8',
    name: 'Room A8',
    type: 'classroom',
    x: 774,
    y: 464,
    floor: 'third-shsbldgMap',
    view: 'third-shsbldg'
  },
  {
    id: 'A9',
    name: 'Room A9',
    type: 'classroom',
    x: 825,
    y: 464,
    floor: 'third-shsbldgMap',
    view: 'third-shsbldg'
  },
  {
    id: 'node-157',
    name: 'node-157',
    type: 'waypoint',
    x: 775,
    y: 707,
    floor: 'third-shsbldgMap',
    view: 'third-shsbldg'
  },
  {
    id: 'node-158',
    name: 'node-158',
    type: 'waypoint',
    x: 773,
    y: 624,
    floor: 'third-shsbldgMap',
    view: 'third-shsbldg'
  },
  {
    id: 'node-159',
    name: 'node-159',
    type: 'waypoint',
    x: 774,
    y: 523,
    floor: 'third-shsbldgMap',
    view: 'third-shsbldg'
  },
  {
    id: 'node-160',
    name: 'node-160',
    type: 'waypoint',
    x: 824,
    y: 522,
    floor: 'third-shsbldgMap',
    view: 'third-shsbldg'
  },
  {
    id: 'node-161',
    name: 'node-161',
    type: 'waypoint',
    x: 828,
    y: 624,
    floor: 'third-shsbldgMap',
    view: 'third-shsbldg'
  },
  {
    id: 'shs-stairs3',
    name: 'shs stair 3',
    type: 'stairs',
    x: 725,
    y: 625,
    floor: 'third-shsbldgMap',
    view: 'third-shsbldg',
    connectsToFloor: 'fourth-shsbldgMap',
    connectsToView: 'fourth-shsbldg'
  },
  {
    id: 'shs-stairs3-pair',
    name: 'shs stair 3 (from third-shsbldg)',
    type: 'stairs',
    x: 694,
    y: 706,
    floor: 'fourth-shsbldgMap',
    view: 'fourth-shsbldg',
    connectsToFloor: 'third-shsbldgMap',
    connectsToView: 'third-shsbldg',
    floorDirection: 'both'
  },
  {
    id: 'A10',
    name: 'Room A10',
    type: 'classroom',
    x: 773,
    y: 458,
    floor: 'fourth-shsbldgMap',
    view: 'fourth-shsbldg'
  },
  {
    id: 'A11',
    name: 'Room A11',
    type: 'classroom',
    x: 824,
    y: 458,
    floor: 'fourth-shsbldgMap',
    view: 'fourth-shsbldg'
  },
  {
    id: 'shsrestB2',
    name: 'Men Restroom SHS (Floor 4)',
    type: 'restroom',
    x: 910,
    y: 604,
    floor: 'fourth-shsbldgMap',
    view: 'fourth-shsbldg'
  },
  {
    id: 'shsrestG2',
    name: 'Women Restroom SHS (Floor 4)',
    type: 'restroom',
    x: 1037,
    y: 602,
    floor: 'fourth-shsbldgMap',
    view: 'fourth-shsbldg'
  },
  {
    id: 'node-162',
    name: 'node-162',
    type: 'waypoint',
    x: 774,
    y: 705,
    floor: 'fourth-shsbldgMap',
    view: 'fourth-shsbldg'
  },
  {
    id: 'node-163',
    name: 'node-163',
    type: 'waypoint',
    x: 773,
    y: 529,
    floor: 'fourth-shsbldgMap',
    view: 'fourth-shsbldg'
  },
  {
    id: 'node-164',
    name: 'node-164',
    type: 'waypoint',
    x: 910,
    y: 527,
    floor: 'fourth-shsbldgMap',
    view: 'fourth-shsbldg'
  },
  {
    id: 'node-165',
    name: 'node-165',
    type: 'waypoint',
    x: 1036,
    y: 526,
    floor: 'fourth-shsbldgMap',
    view: 'fourth-shsbldg'
  },
  {
    id: 'node-166',
    name: 'node-166',
    type: 'waypoint',
    x: 827,
    y: 528,
    floor: 'fourth-shsbldgMap',
    view: 'fourth-shsbldg'
  },
  {
    id: 'node-175',
    name: 'node-175',
    type: 'waypoint',
    x: 774,
    y: 708,
    floor: 'second-shsbldgMap',
    view: 'second-shsbldg'
  },
  {
    id: 'node-177',
    name: 'node-177',
    type: 'waypoint',
    x: 774,
    y: 619,
    floor: 'second-shsbldgMap',
    view: 'second-shsbldg'
  },
  {
    id: 'node-178',
    name: 'node-178',
    type: 'waypoint',
    x: 774,
    y: 513,
    floor: 'second-shsbldgMap',
    view: 'second-shsbldg'
  },
  {
    id: 'node-179',
    name: 'node-179',
    type: 'waypoint',
    x: 826,
    y: 514,
    floor: 'second-shsbldgMap',
    view: 'second-shsbldg'
  },
  {
    id: 'node-180',
    name: 'node-180',
    type: 'waypoint',
    x: 902,
    y: 514,
    floor: 'second-shsbldgMap',
    view: 'second-shsbldg'
  },
  {
    id: 'node-181',
    name: 'node-181',
    type: 'waypoint',
    x: 1038,
    y: 514,
    floor: 'second-shsbldgMap',
    view: 'second-shsbldg'
  },
  {
    id: 'shs-stairs1',
    name: 'shs stair 1 (from shsbldg)',
    type: 'stairs',
    x: 706,
    y: 629,
    floor: 'shsbldgMap',
    view: 'shsbldg',
    connectsToFloor: 'second-shsbldgMap',
    connectsToView: 'second-shsbldg'
  },
  {
    id: 'shs-stairs1-pair',
    name: 'shs stair 1 (from shsbldg) (from shsbldg)',
    type: 'stairs',
    x: 724,
    y: 619,
    floor: 'second-shsbldgMap',
    view: 'second-shsbldg',
    connectsToFloor: 'shsbldgMap',
    connectsToView: 'shsbldg',
    floorDirection: 'both'
  },
  {
    id: 'subshs-restroom',
    name: 'Restroom (Sub-SHS)',
    type: 'restroom',
    x: 557,
    y: 184,
    floor: 'subshsMap',
    view: 'subshs'
  },
  {
    id: 'A1',
    name: 'Room A1',
    type: 'classroom',
    x: 960,
    y: 582,
    floor: 'subshsMap',
    view: 'subshs'
  },
  {
    id: 'node-200',
    name: 'node-200',
    type: 'waypoint',
    x: 960,
    y: 640,
    floor: 'subshsMap',
    view: 'subshs'
  },
  {
    id: 'node-201',
    name: 'node-201',
    type: 'waypoint',
    x: 557,
    y: 639,
    floor: 'subshsMap',
    view: 'subshs'
  },
  {
    id: 'node-202',
    name: 'node-202',
    type: 'waypoint',
    x: 1113,
    y: 641,
    floor: 'subshsMap',
    view: 'subshs'
  },
  {
    id: 'node-203',
    name: 'node-203',
    type: 'waypoint',
    x: 1113,
    y: 550,
    floor: 'subshsMap',
    view: 'subshs'
  },
  {
    id: 'subshs-stairs1',
    name: 'subshs-stairs1',
    type: 'stairs',
    x: 1035,
    y: 578,
    floor: 'subshsMap',
    view: 'subshs',
    connectsToFloor: 'second-subshsMap',
    connectsToView: 'second-subshs'
  },
  {
    id: 'subshs-stairs1-pair',
    name: 'subshs-stairs1 (from subshs)',
    type: 'stairs',
    x: 1045,
    y: 677,
    floor: 'second-subshsMap',
    view: 'second-subshs',
    connectsToFloor: 'subshsMap',
    connectsToView: 'subshs',
    floorDirection: 'both'
  },
  {
    id: 'subshs-stairs2',
    name: 'subshs-stairs2',
    type: 'stairs',
    x: 1117,
    y: 621,
    floor: 'second-subshsMap',
    view: 'second-subshs',
    connectsToFloor: 'third-subshsMap',
    connectsToView: 'third-subshs'
  },
  {
    id: 'subshs-stairs2-pair',
    name: 'subshs-stairs2 (from second-subshs)',
    type: 'stairs',
    x: 1042,
    y: 671,
    floor: 'third-subshsMap',
    view: 'third-subshs',
    connectsToFloor: 'second-subshsMap',
    connectsToView: 'second-subshs',
    floorDirection: 'both'
  },
  {
    id: 'A3',
    name: 'Room A3',
    type: 'classroom',
    x: 964,
    y: 589,
    floor: 'second-subshsMap',
    view: 'second-subshs',
    connectsToFloor: 'third-subshsMap',
    connectsToView: 'third-subshs'
  },
  {
    id: 'A2',
    name: 'Room A2',
    type: 'classroom',
    x: 689,
    y: 590,
    floor: 'second-subshsMap',
    view: 'second-subshs',
    connectsToFloor: 'third-subshsMap',
    connectsToView: 'third-subshs'
  },
  {
    id: 'node-204',
    name: 'node-204',
    type: 'waypoint',
    x: 689,
    y: 677,
    floor: 'second-subshsMap',
    view: 'second-subshs',
    connectsToFloor: 'third-subshsMap',
    connectsToView: 'third-subshs'
  },
  {
    id: 'node-205',
    name: 'node-205',
    type: 'waypoint',
    x: 964,
    y: 676,
    floor: 'second-subshsMap',
    view: 'second-subshs',
    connectsToFloor: 'third-subshsMap',
    connectsToView: 'third-subshs'
  },
  {
    id: 'node-206',
    name: 'node-206',
    type: 'waypoint',
    x: 1118,
    y: 678,
    floor: 'second-subshsMap',
    view: 'second-subshs',
    connectsToFloor: 'third-subshsMap',
    connectsToView: 'third-subshs'
  },
  {
    id: 'A4',
    name: 'Room A4',
    type: 'classroom',
    x: 689,
    y: 587,
    floor: 'third-subshsMap',
    view: 'third-subshs',
    connectsToFloor: 'third-subshsMap',
    connectsToView: 'third-subshs'
  },
  {
    id: 'A5',
    name: 'Room A5',
    type: 'classroom',
    x: 960,
    y: 586,
    floor: 'third-subshsMap',
    view: 'third-subshs',
    connectsToFloor: 'third-subshsMap',
    connectsToView: 'third-subshs'
  },
  {
    id: 'node-207',
    name: 'node-207',
    type: 'waypoint',
    x: 689,
    y: 670,
    floor: 'third-subshsMap',
    view: 'third-subshs',
    connectsToFloor: 'third-subshsMap',
    connectsToView: 'third-subshs'
  },
  {
    id: 'node-208',
    name: 'node-208',
    type: 'waypoint',
    x: 960,
    y: 670,
    floor: 'third-subshsMap',
    view: 'third-subshs',
    connectsToFloor: 'third-subshsMap',
    connectsToView: 'third-subshs'
  },
  {
    id: 'node-209',
    name: 'node-209',
    type: 'waypoint',
    x: 1122,
    y: 671,
    floor: 'third-subshsMap',
    view: 'third-subshs',
    connectsToFloor: 'third-subshsMap',
    connectsToView: 'third-subshs'
  },
  {
    id: 'subshs-stairs3',
    name: 'subshs-stairs3',
    type: 'stairs',
    x: 1122,
    y: 603,
    floor: 'third-subshsMap',
    view: 'third-subshs',
    connectsToFloor: 'fourth-subshsMap',
    connectsToView: 'fourth-subshs'
  },
  {
    id: 'subshs-stairs3-pair',
    name: 'subshs-stairs3 (from third-subshs)',
    type: 'stairs',
    x: 1044,
    y: 675,
    floor: 'fourth-subshsMap',
    view: 'fourth-subshs',
    connectsToFloor: 'third-subshsMap',
    connectsToView: 'third-subshs',
    floorDirection: 'both'
  },
  {
    id: 'science-lab',
    name: 'Science Laboratory (Sub-SHS)',
    type: 'classroom',
    x: 941,
    y: 577,
    floor: 'fourth-subshsMap',
    view: 'fourth-subshs',
    connectsToFloor: 'fourth-subshsMap',
    connectsToView: 'fourth-subshs'
  },
  {
    id: 'node-210',
    name: 'node-210',
    type: 'waypoint',
    x: 941,
    y: 676,
    floor: 'fourth-subshsMap',
    view: 'fourth-subshs',
    connectsToFloor: 'fourth-subshsMap',
    connectsToView: 'fourth-subshs'
  },
  {
    id: 'node-211',
    name: 'node-211',
    type: 'waypoint',
    x: 1112,
    y: 423,
    floor: 'subshsMap',
    view: 'subshs'
  },
  {
    id: 'node-212',
    name: 'node-212',
    type: 'waypoint',
    x: 1034,
    y: 423,
    floor: 'subshsMap',
    view: 'subshs'
  },
  {
    id: 'shsfaculty',
    name: 'SHS Facilty',
    type: 'classroom',
    x: 971,
    y: 148,
    floor: 'preschoolMap',
    view: 'preschool'
  },
  {
    id: 'ps1',
    name: 'Room PS-1',
    type: 'classroom',
    x: 918,
    y: 462,
    floor: 'preschoolMap',
    view: 'preschool'
  },
  {
    id: 'ps2',
    name: 'Room PS-2',
    type: 'classroom',
    x: 870,
    y: 462,
    floor: 'preschoolMap',
    view: 'preschool'
  },
  {
    id: 'preschool-stair1',
    name: 'preschool-stair1',
    type: 'stairs',
    x: 982,
    y: 373,
    floor: 'preschoolMap',
    view: 'preschool',
    connectsToFloor: 'second-preschoolMap',
    connectsToView: 'second-preschool'
  },
  {
    id: 'preschool-stair1-pair',
    name: 'preschool-stair1 (from preschool)',
    type: 'stairs',
    x: 924,
    y: 356,
    floor: 'second-preschoolMap',
    view: 'second-preschool',
    connectsToFloor: 'preschoolMap',
    connectsToView: 'preschool',
    floorDirection: 'both'
  },
  {
    id: 'node-230',
    name: 'node-230',
    type: 'waypoint',
    x: 1019,
    y: 148,
    floor: 'preschoolMap',
    view: 'preschool',
    connectsToFloor: 'second-preschoolMap',
    connectsToView: 'second-preschool'
  },
  {
    id: 'node-231',
    name: 'node-231',
    type: 'waypoint',
    x: 1021,
    y: 374,
    floor: 'preschoolMap',
    view: 'preschool',
    connectsToFloor: 'second-preschoolMap',
    connectsToView: 'second-preschool'
  },
  {
    id: 'node-232',
    name: 'node-232',
    type: 'waypoint',
    x: 1021,
    y: 428,
    floor: 'preschoolMap',
    view: 'preschool',
    connectsToFloor: 'second-preschoolMap',
    connectsToView: 'second-preschool'
  },
  {
    id: 'node-233',
    name: 'node-233',
    type: 'waypoint',
    x: 917,
    y: 427,
    floor: 'preschoolMap',
    view: 'preschool',
    connectsToFloor: 'second-preschoolMap',
    connectsToView: 'second-preschool'
  },
  {
    id: 'node-234',
    name: 'node-234',
    type: 'waypoint',
    x: 870,
    y: 426,
    floor: 'preschoolMap',
    view: 'preschool',
    connectsToFloor: 'second-preschoolMap',
    connectsToView: 'second-preschool'
  },
  {
    id: 'playroom',
    name: 'Playroom',
    type: 'classroom',
    x: 924,
    y: 311,
    floor: 'second-preschoolMap',
    view: 'second-preschool',
    connectsToFloor: 'second-preschoolMap',
    connectsToView: 'second-preschool'
  },
  {
    id: 'ps3',
    name: 'Room PS-3',
    type: 'classroom',
    x: 883,
    y: 353,
    floor: 'second-preschoolMap',
    view: 'second-preschool',
    connectsToFloor: 'second-preschoolMap',
    connectsToView: 'second-preschool'
  },
  {
    id: 'preschool-stair2',
    name: 'preschool-stair2',
    type: 'stairs',
    x: 926,
    y: 434,
    floor: 'second-preschoolMap',
    view: 'second-preschool',
    connectsToFloor: 'third-preschoolMap',
    connectsToView: 'third-preschool'
  },
  {
    id: 'preschool-stair2-pair',
    name: 'preschool-stair2 (from second-preschool)',
    type: 'stairs',
    x: 924,
    y: 473,
    floor: 'third-preschoolMap',
    view: 'third-preschool',
    connectsToFloor: 'second-preschoolMap',
    connectsToView: 'second-preschool',
    floorDirection: 'both'
  },
  {
    id: 'preschool-stair3',
    name: 'preschool-stair3',
    type: 'stairs',
    x: 1073,
    y: 393,
    floor: 'third-preschoolMap',
    view: 'third-preschool',
    connectsToFloor: 'fourth-preschoolMap',
    connectsToView: 'fourth-preschool'
  },
  {
    id: 'preschool-stair3-pair',
    name: 'preschool-stair3 (from third-preschool)',
    type: 'stairs',
    x: 1074,
    y: 367,
    floor: 'fourth-preschoolMap',
    view: 'fourth-preschool',
    connectsToFloor: 'third-preschoolMap',
    connectsToView: 'third-preschool',
    floorDirection: 'both'
  },
  {
    id: 'tutorial-room',
    name: 'Tutorial Room',
    type: 'classroom',
    x: 882,
    y: 392,
    floor: 'third-preschoolMap',
    view: 'third-preschool',
    connectsToFloor: 'fourth-preschoolMap',
    connectsToView: 'fourth-preschool'
  },
  {
    id: 'sportsroom',
    name: 'Sports Room',
    type: 'classroom',
    x: 1023,
    y: 335,
    floor: 'third-preschoolMap',
    view: 'third-preschool',
    connectsToFloor: 'fourth-preschoolMap',
    connectsToView: 'fourth-preschool'
  },
  {
    id: 'ps4',
    name: 'Room PS-4',
    type: 'classroom',
    x: 879,
    y: 580,
    floor: 'third-preschoolMap',
    view: 'third-preschool',
    connectsToFloor: 'fourth-preschoolMap',
    connectsToView: 'fourth-preschool'
  },
  {
    id: 'ps5',
    name: 'Room PS-5',
    type: 'classroom',
    x: 1025,
    y: 581,
    floor: 'third-preschoolMap',
    view: 'third-preschool',
    connectsToFloor: 'fourth-preschoolMap',
    connectsToView: 'fourth-preschool'
  },
  {
    id: 'node-235',
    name: 'node-235',
    type: 'waypoint',
    x: 925,
    y: 581,
    floor: 'third-preschoolMap',
    view: 'third-preschool',
    connectsToFloor: 'fourth-preschoolMap',
    connectsToView: 'fourth-preschool'
  },
  {
    id: 'node-236',
    name: 'node-236',
    type: 'waypoint',
    x: 976,
    y: 581,
    floor: 'third-preschoolMap',
    view: 'third-preschool',
    connectsToFloor: 'fourth-preschoolMap',
    connectsToView: 'fourth-preschool'
  },
  {
    id: 'node-237',
    name: 'node-237',
    type: 'waypoint',
    x: 975,
    y: 393,
    floor: 'third-preschoolMap',
    view: 'third-preschool',
    connectsToFloor: 'fourth-preschoolMap',
    connectsToView: 'fourth-preschool'
  },
  {
    id: 'node-238',
    name: 'node-238',
    type: 'waypoint',
    x: 1023,
    y: 393,
    floor: 'third-preschoolMap',
    view: 'third-preschool',
    connectsToFloor: 'fourth-preschoolMap',
    connectsToView: 'fourth-preschool'
  },
  {
    id: 'rooftop',
    name: 'Rooftop',
    type: 'classroom',
    x: 929,
    y: 367,
    floor: 'fourth-preschoolMap',
    view: 'fourth-preschool',
    connectsToFloor: 'fourth-preschoolMap',
    connectsToView: 'fourth-preschool'
  },
  {
    id: 'ent-to-mainjhs',
    name: 'Main to JHS',
    type: 'stairs',
    x: 640,
    y: 161,
    floor: 'mainentMap',
    view: 'mainent',
    connectsToFloor: 'mainjhsMap',
    connectsToView: 'mainjhs'
  },
  {
    id: 'ent-to-mainjhs-pair',
    name: 'Main to JHS (from mainent)',
    type: 'stairs',
    x: 551,
    y: 750,
    floor: 'mainjhsMap',
    view: 'mainjhs',
    connectsToFloor: 'mainentMap',
    connectsToView: 'mainent',
    floorDirection: 'both'
  },
  {
    id: 'node-300',
    name: 'node-300',
    type: 'waypoint',
    x: 640,
    y: 270,
    floor: 'mainentMap',
    view: 'mainent',
    connectsToFloor: 'mainjhsMap',
    connectsToView: 'mainjhs'
  },
  {
    id: 'node-301',
    name: 'node-301',
    type: 'waypoint',
    x: 257,
    y: 271,
    floor: 'mainentMap',
    view: 'mainent',
    connectsToFloor: 'mainjhsMap',
    connectsToView: 'mainjhs'
  },
  {
    id: 'node-302',
    name: 'node-302',
    type: 'waypoint',
    x: 258,
    y: 555,
    floor: 'mainentMap',
    view: 'mainent',
    connectsToFloor: 'mainjhsMap',
    connectsToView: 'mainjhs'
  },
  {
    id: 'node-303',
    name: 'node-303',
    type: 'waypoint',
    x: 162,
    y: 555,
    floor: 'mainentMap',
    view: 'mainent',
    connectsToFloor: 'mainjhsMap',
    connectsToView: 'mainjhs'
  },
  {
    id: 'node-304',
    name: 'node-304',
    type: 'waypoint',
    x: 116,
    y: 269,
    floor: 'mainentMap',
    view: 'mainent',
    connectsToFloor: 'mainjhsMap',
    connectsToView: 'mainjhs'
  },
  {
    id: 'mainent-rect',
    name: 'Main Entrance',
    type: 'classroom',
    x: 163,
    y: 637,
    floor: 'mainentMap',
    view: 'mainent',
    connectsToFloor: 'mainjhsMap',
    connectsToView: 'mainjhs'
  },
  {
    id: 'ent-to-shed',
    name: 'Main to Shed',
    type: 'stairs',
    x: 74,
    y: 269,
    floor: 'mainentMap',
    view: 'mainent',
    connectsToFloor: 'shedMap',
    connectsToView: 'shed'
  },
  {
    id: 'ent-to-shed-pair',
    name: 'Main to Shed (from mainent)',
    type: 'stairs',
    x: 1262,
    y: 199,
    floor: 'shedMap',
    view: 'shed',
    connectsToFloor: 'mainentMap',
    connectsToView: 'mainent',
    floorDirection: 'both'
  },
  {
    id: 'node-305',
    name: 'node-305',
    type: 'waypoint',
    x: 1119,
    y: 199,
    floor: 'shedMap',
    view: 'shed',
    connectsToFloor: 'shedMap',
    connectsToView: 'shed'
  },
  {
    id: 'node-306',
    name: 'node-306',
    type: 'waypoint',
    x: 1119,
    y: 470,
    floor: 'shedMap',
    view: 'shed',
    connectsToFloor: 'shedMap',
    connectsToView: 'shed'
  },
  {
    id: 'node-307',
    name: 'node-307',
    type: 'waypoint',
    x: 434,
    y: 198,
    floor: 'shedMap',
    view: 'shed',
    connectsToFloor: 'shedMap',
    connectsToView: 'shed'
  },
  {
    id: 'shed-shs',
    name: 'shed-to-subshs',
    type: 'stairs',
    x: 434,
    y: 60,
    floor: 'shedMap',
    view: 'shed',
    connectsToFloor: 'second-subshsMap',
    connectsToView: 'second-subshs'
  },
  {
    id: 'shed-shs-pair',
    name: 'shed-to-subshs (from shed)',
    type: 'stairs',
    x: 1045,
    y: 721,
    floor: 'second-subshsMap',
    view: 'second-subshs',
    connectsToFloor: 'shedMap',
    connectsToView: 'shed',
    floorDirection: 'both'
  },
  {
    id: 'subshs-to-shsbldg',
    name: 'subshs-to-shsbldg',
    type: 'stairs',
    x: 1111,
    y: 95,
    floor: 'subshsMap',
    view: 'subshs',
    connectsToFloor: 'shsbldgMap',
    connectsToView: 'shsbldg'
  },
  {
    id: 'subshs-to-shsbldg-pair',
    name: 'subshs-to-shsbldg (from subshs)',
    type: 'stairs',
    x: 558,
    y: 730,
    floor: 'shsbldgMap',
    view: 'shsbldg',
    connectsToFloor: 'subshsMap',
    connectsToView: 'subshs',
    floorDirection: 'both'
  },
  {
    id: 'node-308',
    name: 'node-308',
    type: 'waypoint',
    x: 1020,
    y: 92,
    floor: 'preschoolMap',
    view: 'preschool',
    connectsToFloor: 'preschoolMap',
    connectsToView: 'preschool'
  },
  {
    id: 'preschool-to-quadrangle',
    name: 'groundjhs-to-preschool (from groundjhs)',
    type: 'stairs',
    x: 816,
    y: 94,
    floor: 'preschoolMap',
    view: 'preschool',
    connectsToFloor: 'quadrangleMap',
    connectsToView: 'quadrangle'
  },
  {
    id: 'preschool-to-quadrangle-pair',
    name: 'groundjhs-to-preschool (from groundjhs) (from preschool)',
    type: 'stairs',
    x: 932,
    y: 647,
    floor: 'quadrangleMap',
    view: 'quadrangle',
    connectsToFloor: 'preschoolMap',
    connectsToView: 'preschool',
    floorDirection: 'both'
  },
  {
    id: 'firepump',
    name: 'Fire Pump',
    type: 'classroom',
    x: 727,
    y: 636,
    floor: 'quadrangleMap',
    view: 'quadrangle',
    connectsToFloor: 'quadrangleMap',
    connectsToView: 'quadrangle'
  },
  {
    id: 'audio',
    name: 'Audio Room',
    type: 'classroom',
    x: 524,
    y: 639,
    floor: 'quadrangleMap',
    view: 'quadrangle',
    connectsToFloor: 'quadrangleMap',
    connectsToView: 'quadrangle'
  },
  {
    id: 'node-309',
    name: 'node-309',
    type: 'waypoint',
    x: 931,
    y: 582,
    floor: 'quadrangleMap',
    view: 'quadrangle',
    connectsToFloor: 'quadrangleMap',
    connectsToView: 'quadrangle'
  },
  {
    id: 'node-310',
    name: 'node-310',
    type: 'waypoint',
    x: 726,
    y: 583,
    floor: 'quadrangleMap',
    view: 'quadrangle',
    connectsToFloor: 'quadrangleMap',
    connectsToView: 'quadrangle'
  },
  {
    id: 'node-311',
    name: 'node-311',
    type: 'waypoint',
    x: 523,
    y: 583,
    floor: 'quadrangleMap',
    view: 'quadrangle',
    connectsToFloor: 'quadrangleMap',
    connectsToView: 'quadrangle'
  },
  {
    id: 'node-312',
    name: 'node-312',
    type: 'waypoint',
    x: 519,
    y: 467,
    floor: 'quadrangleMap',
    view: 'quadrangle',
    connectsToFloor: 'quadrangleMap',
    connectsToView: 'quadrangle'
  },
  {
    id: 'node-313',
    name: 'node-313',
    type: 'waypoint',
    x: 347,
    y: 469,
    floor: 'quadrangleMap',
    view: 'quadrangle',
    connectsToFloor: 'quadrangleMap',
    connectsToView: 'quadrangle'
  },
  {
    id: 'node-314',
    name: 'node-314',
    type: 'waypoint',
    x: 347,
    y: 706,
    floor: 'quadrangleMap',
    view: 'quadrangle',
    connectsToFloor: 'quadrangleMap',
    connectsToView: 'quadrangle'
  },
  {
    id: 'node-315',
    name: 'node-315',
    type: 'waypoint',
    x: 346,
    y: 130,
    floor: 'quadrangleMap',
    view: 'quadrangle',
    connectsToFloor: 'quadrangleMap',
    connectsToView: 'quadrangle'
  },
  {
    id: 'quadexit',
    name: 'Quadrangle Exit',
    type: 'classroom',
    x: 346,
    y: 79,
    floor: 'quadrangleMap',
    view: 'quadrangle',
    connectsToFloor: 'quadrangleMap',
    connectsToView: 'quadrangle'
  },
  {
    id: 'node-317',
    name: 'node-317',
    type: 'waypoint',
    x: 938,
    y: 285,
    floor: 'groundjhsMap',
    view: 'groundjhs',
    connectsToFloor: 'groundjhsMap',
    connectsToView: 'groundjhs'
  },
  {
    id: 'groundjhs-to-quadrangle',
    name: 'groundjhs-to-quadrangle',
    type: 'stairs',
    x: 985,
    y: 285,
    floor: 'groundjhsMap',
    view: 'groundjhs',
    connectsToFloor: 'quadrangleMap',
    connectsToView: 'quadrangle'
  },
  {
    id: 'groundjhs-to-quadrangle-pair',
    name: 'groundjhs-to-quadrangle (from groundjhs)',
    type: 'stairs',
    x: 305,
    y: 469,
    floor: 'quadrangleMap',
    view: 'quadrangle',
    connectsToFloor: 'groundjhsMap',
    connectsToView: 'groundjhs',
    floorDirection: 'both'
  },
  {
    id: 'mainjhs-to-preschool',
    name: 'mainjhs-to-preschool',
    type: 'stairs',
    x: 1462,
    y: 349,
    floor: 'mainjhsMap',
    view: 'mainjhs',
    connectsToFloor: 'preschoolMap',
    connectsToView: 'preschool'
  },
  {
    id: 'mainjhs-to-preschool-pair',
    name: 'mainjhs-to-preschool (from mainjhs)',
    type: 'stairs',
    x: 1088,
    y: 92,
    floor: 'preschoolMap',
    view: 'preschool',
    connectsToFloor: 'mainjhsMap',
    connectsToView: 'mainjhs',
    floorDirection: 'both'
  }
];
// === CONNECTIONS ===
const connections = [
  ['node-2', 'node-1'],
  ['node-2', 'registrar'],
  ['accounting', 'node-10'],
  ['node-4', 'node-7'],
  ['node-10', 'node-11'],
  ['g1', 'node-11'],
  ['node-11', 'node-4'],
  ['node-7', 'node-8'],
  ['node-8', 'rest'],
  ['node-4', 'node-5'],
  ['node-5', 'node-6'],
  ['node-5', 'g2'],
  ['node-6', 'uniform'],
  ['node-5', 'node-9'],
  ['backstairs-1', 'backstairs-1-pair'],
  ['node-9', 'backstairs-1'],
  ['node-12', 'node-14'],
  ['node-15', 'node-16'],
  ['node-14', 'node-15'],
  ['node-14', 'library'],
  ['node-16', 'b1'],
  ['node-15', 'hele'],
  ['node-16', 'node-17'],
  ['node-17', 'b2'],
  ['node-17', 'node-18'],
  ['node-18', 'node-19'],
  ['node-19', 'jhscanteen'],
  ['node-19', 'node-20'],
  ['node-20', 'groundrest'],
  ['node-18', 'node-21'],
  ['node-21', 'b3'],
  ['node-21', 'node-22'],
  ['node-22', 'clinic'],
  ['node-22', 'b4'],
  ['node-21', 'node-23'],
  ['node-23', 'backstairs-1-pair'],
  ['node-6', 'g4'],
  ['node-7', 'g3'],
  ['node-72', 'node-72-pair'],
  ['backstairs-1', 'node-72'],
  ['node-85', 'node-85-pair'],
  ['node-100', 'node-90'],
  ['node-90', '202'],
  ['node-90', 'node-91'],
  ['node-91', 'node-92'],
  ['203', 'node-92'],
  ['node-92', 'node-93'],
  ['node-93', 'node-94'],
  ['node-94', 'node-95'],
  ['node-93', '204'],
  ['node-95', 'comlab'],
  ['node-95', 'node-96'],
  ['node-96', 'secondrest'],
  ['node-97', '205'],
  ['node-97', 'node-98'],
  ['node-98', 'guidance-office'],
  ['node-94', 'node-97'],
  ['jhslab', 'node-98'],
  ['node-97', 'node-99'],
  ['backstairs-1', 'node-101'],
  ['node-102', 'node-85'],
  ['node-101', 'node-102'],
  ['node-103', 'node-103-pair'],
  ['node-12', 'node-103'],
  ['node-105', 'node-2'],
  ['node-105', 'node-10'],
  ['node-105', 'node-104'],
  ['node-104', 'office1'],
  ['node-104', 'node-103-pair'],
  ['node-106', 'node-106-pair'],
  ['node-1', 'node-106'],
  ['node-107', '201'],
  ['node-107', 'node-91'],
  ['node-107', 'node-106-pair'],
  ['node-110', 'node-109'],
  ['302', 'node-110'],
  ['node-111', 'node-112'],
  ['node-111', 'node-110'],
  ['303', 'node-112'],
  ['node-111', 'node-113'],
  ['node-113', '301'],
  ['node-114', 'node-112'],
  ['node-114', '304'],
  ['node-114', 'node-115'],
  ['node-115', 'node-116'],
  ['node-116', '306'],
  ['node-116', 'node-117'],
  ['node-117', 'thirdrest'],
  ['node-115', 'node-118'],
  ['node-118', 'node-119'],
  ['node-118', '305'],
  ['node-119', 'principal-office'],
  ['principal-office', 'node-119'],
  ['307', 'node-119'],
  ['node-120', 'node-118'],
  ['stairs-3', 'stairs-3-pair'],
  ['stairs-3-pair', 'node-113'],
  ['node-100', 'stairs-3'],
  ['node-121', 'node-122'],
  ['backstairs-2', 'backstairs-2-pair'],
  ['backstairs-2-pair', 'node-121'],
  ['node-120', 'node-121'],
  ['node-99', 'node-127'],
  ['node-127', 'node-85-pair'],
  ['node-126', 'node-127'],
  ['node-126', 'backstairs-2'],
  ['node-109', 'stairs-4'],
  ['node-2-mainjhsfourth', 'node-1-mainjhsfourth'],
  ['node-2-mainjhsfourth', '402'],
  ['403', 'node-10-mainjhsfourth'],
  ['node-4-mainjhsfourth', 'node-7-mainjhsfourth'],
  ['node-10-mainjhsfourth', 'node-11-mainjhsfourth'],
  ['404', 'node-11-mainjhsfourth'],
  ['node-11-mainjhsfourth', 'node-4-mainjhsfourth'],
  ['node-7-mainjhsfourth', 'node-8-mainjhsfourth'],
  ['node-4-mainjhsfourth', 'node-5-mainjhsfourth'],
  ['node-5-mainjhsfourth', 'node-6-mainjhsfourth'],
  ['node-5-mainjhsfourth', '405'],
  ['node-6-mainjhsfourth', 'faculty-4'],
  ['node-5-mainjhsfourth', 'node-9-mainjhsfourth'],
  ['node-6-mainjhsfourth', '407'],
  ['node-7-mainjhsfourth', '406'],
  ['node-101-mainjhsfourth', 'node-102-mainjhsfourth'],
  ['node-105-mainjhsfourth', 'node-2-mainjhsfourth'],
  ['node-105-mainjhsfourth', 'node-10-mainjhsfourth'],
  ['node-105-mainjhsfourth', 'node-104-mainjhsfourth'],
  ['node-104-mainjhsfourth', '401'],
  ['fourthrest', 'node-8-mainjhsfourth'],
  ['backstairs-3', 'backstairs-3-pair'],
  ['backstairs-3-pair', 'node-101-mainjhsfourth'],
  ['node-101-mainjhsfourth', 'node-9-mainjhsfourth'],
  ['node-122', 'backstairs-3'],
  ['backstairs-4', 'backstairs-4-pair'],
  ['node-102-mainjhsfourth', 'backstairs-4'],
  ['stairs-5', 'stairs-5-pair'],
  ['node-131', 'node-130'],
  ['502', 'node-131'],
  ['node-129', 'stairs-5-pair'],
  ['node-129', '501'],
  ['node-129', 'node-130'],
  ['504', 'node-136'],
  ['node-135', 'node-136'],
  ['node-135', 'backstairs-4-pair'],
  ['node-134', 'node-135'],
  ['node-133', 'node-134'],
  ['node-132', 'node-133'],
  ['node-133', 'jhs-faculty'],
  ['node-134', 'fifthrest'],
  ['node-132', '503'],
  ['tle-room', 'node-138'],
  ['node-137', 'node-138'],
  ['node-137', 'node-132'],
  ['node-137', 'node-130'],
  ['node-140', 'node-141'],
  ['node-141', 'shs-canteen'],
  ['shs-stairent', 'node-140'],
  ['shs-stairent', 'node-144'],
  ['shs-stairs2', 'shs-stairs2-pair'],
  ['node-159', 'A8'],
  ['node-160', 'node-159'],
  ['node-160', 'A9'],
  ['node-159', 'node-158'],
  ['node-161', 'node-160'],
  ['node-158', 'node-161'],
  ['node-158', 'node-157'],
  ['shs-stairs2-pair', 'node-157'],
  ['shs-stairs3', 'shs-stairs3-pair'],
  ['node-158', 'shs-stairs3'],
  ['A10', 'node-163'],
  ['A11', 'node-166'],
  ['node-166', 'node-164'],
  ['node-164', 'node-165'],
  ['node-165', 'shsrestG2'],
  ['shsrestB2', 'node-164'],
  ['node-163', 'node-166'],
  ['node-163', 'node-162'],
  ['node-162', 'shs-stairs3-pair'],
  ['node-177', 'node-175'],
  ['node-177', 'node-178'],
  ['shs-stairs2', 'node-175'],
  ['node-178', 'A6'],
  ['node-179', 'A7'],
  ['node-178', 'node-179'],
  ['node-180', 'node-179'],
  ['node-180', 'node-181'],
  ['node-181', 'shsrestG1'],
  ['node-180', 'shsrestB1'],
  ['shs-stairs1', 'shs-stairs1-pair'],
  ['node-177', 'shs-stairs1-pair'],
  ['node-144', 'shs-stairs1'],
  ['subshs-stairs1', 'subshs-stairs1-pair'],
  ['subshs-stairs2', 'subshs-stairs2-pair'],
  ['subshs-stairs3', 'subshs-stairs3-pair'],
  ['subshs-restroom', 'node-201'],
  ['node-201', 'node-200'],
  ['node-200', 'A1'],
  ['node-200', 'node-202'],
  ['node-202', 'node-203'],
  ['subshs-stairs1', 'node-212'],
  ['node-212', 'node-211'],
  ['node-211', 'node-203'],
  ['subshs-stairs1-pair', 'node-205'],
  ['node-205', 'A3'],
  ['node-205', 'node-204'],
  ['A2', 'node-204'],
  ['subshs-stairs1-pair', 'node-206'],
  ['subshs-stairs2', 'node-206'],
  ['subshs-stairs2-pair', 'node-209'],
  ['subshs-stairs3', 'node-209'],
  ['node-208', 'subshs-stairs2-pair'],
  ['A5', 'node-208'],
  ['node-208', 'node-207'],
  ['node-207', 'A4'],
  ['science-lab', 'node-210'],
  ['subshs-stairs3-pair', 'node-210'],
  ['preschool-stair1', 'preschool-stair1-pair'],
  ['preschool-stair1-pair', 'playroom'],
  ['preschool-stair1-pair', 'ps3'],
  ['preschool-stair2', 'preschool-stair2-pair'],
  ['preschool-stair1-pair', 'preschool-stair2'],
  ['preschool-stair3', 'preschool-stair3-pair'],
  ['preschool-stair2-pair', 'node-235'],
  ['node-235', 'ps4'],
  ['node-235', 'node-236'],
  ['ps5', 'node-236'],
  ['node-236', 'node-237'],
  ['node-237', 'tutorial-room'],
  ['node-237', 'node-238'],
  ['node-238', 'sportsroom'],
  ['node-238', 'preschool-stair3'],
  ['rooftop', 'preschool-stair3-pair'],
  ['node-232', 'node-233'],
  ['node-233', 'node-234'],
  ['ps2', 'node-234'],
  ['ps1', 'node-233'],
  ['preschool-stair1', 'node-231'],
  ['node-232', 'node-231'],
  ['node-230', 'node-231'],
  ['shsfaculty', 'node-230'],
  ['ent-to-mainjhs', 'ent-to-mainjhs-pair'],
  ['ent-to-mainjhs-pair', 'node-1'],
  ['node-300', 'ent-to-mainjhs'],
  ['node-300', 'node-301'],
  ['node-301', 'node-302'],
  ['node-302', 'node-303'],
  ['node-304', 'node-301'],
  ['node-303', 'mainent-rect'],
  ['ent-to-shed', 'ent-to-shed-pair'],
  ['node-304', 'ent-to-shed'],
  ['node-307', 'node-305'],
  ['node-305', 'ent-to-shed-pair'],
  ['node-306', 'node-305'],
  ['shed-shs', 'shed-shs-pair'],
  ['node-307', 'shed-shs'],
  ['shed-shs-pair', 'subshs-stairs1-pair'],
  ['subshs-to-shsbldg', 'subshs-to-shsbldg-pair'],
  ['node-211', 'subshs-to-shsbldg'],
  ['shs-stairent', 'subshs-to-shsbldg-pair'],
  ['node-230', 'node-308'],
  ['preschool-to-quadrangle', 'preschool-to-quadrangle-pair'],
  ['node-308', 'preschool-to-quadrangle'],
  ['node-315', 'node-313'],
  ['node-313', 'node-312'],
  ['node-314', 'node-313'],
  ['node-312', 'node-311'],
  ['node-311', 'audio'],
  ['node-310', 'firepump'],
  ['node-309', 'preschool-to-quadrangle-pair'],
  ['node-310', 'node-309'],
  ['node-310', 'node-311'],
  ['node-315', 'quadexit'],
  ['node-317', 'node-20'],
  ['groundjhs-to-quadrangle', 'groundjhs-to-quadrangle-pair'],
  ['groundjhs-to-quadrangle', 'node-317'],
  ['groundjhs-to-quadrangle-pair', 'node-313'],
  ['mainjhs-to-preschool', 'mainjhs-to-preschool-pair'],
  ['node-8', 'mainjhs-to-preschool'],
  ['node-308', 'mainjhs-to-preschool-pair']
];

/*************************************************
 * GLOBAL STATE
 *************************************************/
let selectedStart = '';
let selectedDestination = '';
let currentView = 'overall';
let currentFloor = '';
let currentPath = [];

// Mobile detection - used for better default zoom
const isMobileOrTablet = () => {
    const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints && navigator.maxTouchPoints > 0);
    const isCoarsePointer = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
    const isMobileUA = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const isNarrowScreen = window.innerWidth <= 1024;
    return isTouch && (isCoarsePointer || isMobileUA || isNarrowScreen);
};

let zoomLevel = isMobileOrTablet() ? 1.5 : 1; // Better default zoom for mobile
let isDragging = false;
let dragStartX = 0;
let dragStartY = 0;
let translateX = 0;
let translateY = 0;

// last known pointer/touch (client coords). Used so zoom buttons can zoom at cursor/tap when available.
let lastHoverClientX = null;
let lastHoverClientY = null;

// Pointer / inertia and rendering helpers
let isPointerDown = false;
let pointerId = null;
let lastPositions = []; // recent {x,y,t} samples for velocity
let velocityX = 0;
let velocityY = 0;
let inertiaRaf = null;
let rafScheduled = false;
let pathAnimCounter = 0; // unique id for animated paths
// Navigation helpers for multi-floor directions
let currentRouteFloors = [];
let currentRouteFloorIndex = 0;
let currentRouteSegments = []; // { floorId, view, label } per map segment
let emergencyMode = false; // when true, emergency exits are included in routing

// Build graph for pathfinding
const graph = {};
locations.forEach(loc => graph[loc.id] = []);
connections.forEach(([a, b]) => {
    if (graph[a] && graph[b]) {
        graph[a].push(b);
        graph[b].push(a);
    }
});

/*************************************************
 * PATHFINDING ALGORITHM (BFS)
 *************************************************/
function findPath(startId, endId) {
    if (startId === endId) return [startId];

    // Build a filtered neighbor lookup: exclude emergency nodes unless emergencyMode is on
    function getNeighbors(nodeId) {
        return (graph[nodeId] || []).filter(neighborId => {
            const neighbor = locations.find(l => l.id === neighborId);
            if (!neighbor) return false;
            // Block emergency nodes when emergency mode is OFF
            if (neighbor.type === 'emergency' && !emergencyMode) return false;
            return true;
        });
    }

    const queue = [[startId]];
    const visited = new Set([startId]);

    while (queue.length > 0) {
        const path = queue.shift();
        const node = path[path.length - 1];

        if (node === endId) return path;

        for (const neighbor of getNeighbors(node)) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push([...path, neighbor]);
            }
        }
    }

    return null;
}

/*************************************************
 * PATH VISUALIZATION
 *************************************************/
function drawPathOnMap(path) {
    clearPathFromMaps();
    
    if (!path || path.length < 2) return;
    
    // Group path segments by floor
    const segmentsByFloor = {};
    
    for (let i = 0; i < path.length - 1; i++) {
        const fromLoc = locations.find(l => l.id === path[i]);
        const toLoc = locations.find(l => l.id === path[i + 1]);
        
        if (!fromLoc || !toLoc) continue;
        
        // Same floor - collect segments
        if (fromLoc.floor === toLoc.floor) {
            if (!segmentsByFloor[fromLoc.floor]) {
                segmentsByFloor[fromLoc.floor] = [];
            }
            segmentsByFloor[fromLoc.floor].push([fromLoc, toLoc]);
        } else {
            // Different floors (stairs connection) - mark with transition indicator
            drawFloorTransitionMarker(fromLoc, fromLoc.floor, toLoc);
            drawFloorTransitionMarker(toLoc, toLoc.floor, fromLoc);
        }
    }
    
    // Draw smooth continuous path for each floor
    Object.keys(segmentsByFloor).forEach(floorId => {
        drawSmoothPath(segmentsByFloor[floorId], floorId);
    });
    
    // Draw start and end markers only
    const startLoc = locations.find(l => l.id === path[0]);
    const endLoc = locations.find(l => l.id === path[path.length - 1]);
    if (startLoc) drawPathMarker(startLoc, startLoc.floor, true, false);
    if (endLoc) drawPathMarker(endLoc, endLoc.floor, false, true);
}

/**
 * Draws a simple continuous path through multiple segments on the same floor
 * Creates a single SVG path with mall-style appearance (clean, no unnecessary curves)
 */
function drawSmoothPath(segments, floorId) {
    const floorMap = document.getElementById(floorId);
    if (!floorMap || segments.length === 0) return;

    let pathLayer = floorMap.querySelector('.path-layer');
    if (!pathLayer) {
        pathLayer = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        pathLayer.classList.add('path-layer');
        floorMap.appendChild(pathLayer);
    }

    // Collect all waypoints in order
    const points = [segments[0][0]]; // Start with first point
    segments.forEach(seg => {
        points.push(seg[1]); // Add end point of each segment
    });

    // Create SVG path string with straight lines
    let pathData = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
        pathData += ` L ${points[i].x} ${points[i].y}`;
    }

    // Draw the main path
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const pathId = `animated-path-${++pathAnimCounter}`;
    path.setAttribute('id', pathId);
    path.setAttribute('d', pathData);
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke', '#0066CC'); // Mall-style blue
    path.setAttribute('stroke-width', '5');
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('stroke-linejoin', 'round');

    // make a moving dashed look and animate dash offset
    const length = Math.max(1, Math.round(path.getTotalLength ? path.getTotalLength() : 1000));
    path.setAttribute('stroke-dasharray', '14 10');
    path.style.strokeDashoffset = '0';
    const animDuration = Math.max(3, Math.round(length / 180));
    path.style.animation = `dash ${animDuration}s linear infinite`;

    pathLayer.appendChild(path);

    // Small moving dot that traverses the path to show "movement"
    try {
        const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        dot.setAttribute('r', '6');
        dot.setAttribute('fill', '#00aaff');
        dot.setAttribute('class', 'moving-dot');

        const animateMotion = document.createElementNS('http://www.w3.org/2000/svg', 'animateMotion');
        animateMotion.setAttribute('dur', `${animDuration}s`);
        animateMotion.setAttribute('repeatCount', 'indefinite');
        animateMotion.setAttribute('rotate', 'auto');

        const mpath = document.createElementNS('http://www.w3.org/2000/svg', 'mpath');
        // use xlink:href attribute (legacy and supported in browsers for SVG animateMotion)
        mpath.setAttributeNS('http://www.w3.org/1999/xlink', 'href', `#${pathId}`);
        animateMotion.appendChild(mpath);
        dot.appendChild(animateMotion);
        pathLayer.appendChild(dot);
    } catch (err) {
        // Fallback: keep the static arrow marker
        console.warn('animateMotion unsupported in this browser, skipping moving dot', err);
    }

    // Add single direction arrow near the end (static)
    addArrowMarker(points, pathLayer);
}

/**
 * Adds a single arrow at the end of the path showing direction
 */
function addArrowMarker(points, pathLayer) {
    if (points.length < 2) return;
    
    // Use the last segment to determine direction
    const lastIdx = points.length - 1;
    const beforeLast = points[lastIdx - 1];
    const last = points[lastIdx];
    
    // Calculate direction angle from second-to-last point to last point
    const dx = last.x - beforeLast.x;
    const dy = last.y - beforeLast.y;
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);
    
    // Position arrow at the destination (last point)
    const arrowGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    arrowGroup.setAttribute('transform', `translate(${last.x}, ${last.y}) rotate(${angle})`);
    
    // Arrow shape pointing right (will be rotated)
    const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    arrow.setAttribute('d', 'M 0,0 L -10,-5 L -5,0 L -10,5 Z');
    arrow.setAttribute('fill', '#0066CC');
    arrowGroup.appendChild(arrow);
    
    pathLayer.appendChild(arrowGroup);
}

function drawPathSegment(fromLoc, toLoc, floorId, color, width) {
    const floorMap = document.getElementById(floorId);
    if (!floorMap) return;
    
    let pathLayer = floorMap.querySelector('.path-layer');
    if (!pathLayer) {
        pathLayer = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        pathLayer.classList.add('path-layer');
        floorMap.appendChild(pathLayer);
    }
    
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', fromLoc.x);
    line.setAttribute('y1', fromLoc.y);
    line.setAttribute('x2', toLoc.x);
    line.setAttribute('y2', toLoc.y);
    line.setAttribute('stroke', color);
    line.setAttribute('stroke-width', width);
    line.setAttribute('stroke-linecap', 'round');
    line.setAttribute('opacity', '0.8');
    pathLayer.appendChild(line);
}

function drawFloorTransitionMarker(loc, floorId, pairedLoc) {
    const floorMap = document.getElementById(floorId);
    if (!floorMap) return;
    
    const container = floorMap.querySelector('.svg-root') || floorMap;
    // Ensure there's a dedicated path layer for routes and a topmost marker-layer for interactive markers
    let pathLayer = container.querySelector('.path-layer');
    if (!pathLayer) {
        pathLayer = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        pathLayer.classList.add('path-layer');
        container.appendChild(pathLayer);
    }

    // Marker layer should be appended after path layer so markers are on top and receive pointer events
    let markerLayer = container.querySelector('.marker-layer');
    if (!markerLayer) {
        markerLayer = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        markerLayer.classList.add('marker-layer');
        container.appendChild(markerLayer);
    }
    
    // Create clickable group for floor transition
    const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    group.classList.add('transition-marker');
    group.style.cursor = 'pointer';
    group.setAttribute('pointer-events', 'auto');
    group.setAttribute('data-paired-id', pairedLoc ? pairedLoc.id : 'none');
    
    // Pulsing circle for floor transition
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', loc.x);
    circle.setAttribute('cy', loc.y);
    circle.setAttribute('r', '15');
    circle.setAttribute('fill', '#f59e0b');
    circle.setAttribute('stroke', 'white');
    circle.setAttribute('stroke-width', '3');
    circle.setAttribute('opacity', '0.95');
    circle.setAttribute('pointer-events', 'auto');
    
    // Add animation
    const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
    animate.setAttribute('attributeName', 'r');
    animate.setAttribute('values', '15;20;15');
    animate.setAttribute('dur', '1.5s');
    animate.setAttribute('repeatCount', 'indefinite');
    circle.appendChild(animate);
    
    group.appendChild(circle);
    
    // Add floor change icon
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', loc.x);
    text.setAttribute('y', loc.y + 5);
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('font-size', '16');
    text.setAttribute('font-weight', 'bold');
    text.setAttribute('fill', 'white');
    text.setAttribute('pointer-events', 'none');
    text.textContent = '↕';
    group.appendChild(text);
    
    // Prevent parent pointer handling and record a candidate tap for small-move detection
    group.addEventListener('pointerdown', (e) => {
        e.stopPropagation();
        e.preventDefault();
        try { group.setPointerCapture && group.setPointerCapture(e.pointerId); } catch (err) {}
        group.__down = { x: e.clientX, y: e.clientY, t: performance.now() };
    });

    // Click handler - navigate to paired location
    group.addEventListener('click', (e) => {
        e.stopPropagation();
        // If pointerup already handled this tap, skip duplicate click handling
        if (group.__handled) { group.__handled = false; return; }
        console.log('Clicked transition marker - pairedId:', pairedLoc ? pairedLoc.id : 'none');
        if (pairedLoc) {
            console.log('Switching to floor (via transition marker):', pairedLoc.floor);
            // Stop any inertia so we don't get unexpected motion
            if (inertiaRaf) { cancelAnimationFrame(inertiaRaf); inertiaRaf = null; velocityX = velocityY = 0; }

            // Switch floor but preserve the current transform so view remains stable
            currentFloor = pairedLoc.floor;
            switchFloor(pairedLoc.floor, { preserveTransform: true });

            // Small debounce to ensure DOM updates have taken effect; do NOT change zoom/translate to avoid jumps
            setTimeout(() => {
                try {
                    // Keep current zoom/translate as-is and only mark the destination so UI highlights it
                    selectedDestination = pairedLoc.id;
                    updateMapHighlights();
                    scheduleUpdate();
                    document.getElementById('zoomLevel').textContent = `${Math.round(zoomLevel * 100)}%`;
                    console.log('Preserved view and marked destination', selectedDestination, 'zoom', zoomLevel);
                } catch (err) { console.warn('Post-switch update failed', err); }
            }, 80);

            // Show destination info
            const info = document.querySelector('.info-panel');
            if (info) {
                info.innerHTML = `<strong>${pairedLoc.name}</strong><br>Floor: ${pairedLoc.floor.replace(/Map$/, '').toUpperCase()}`;
            }
        }
    });

    // Also handle pointerup directly to ensure taps on touch/pointer devices fire reliably
    group.addEventListener('pointerup', (e) => {
        e.stopPropagation();
        e.preventDefault();
        console.log('Pointerup on transition marker - pairedId:', pairedLoc ? pairedLoc.id : 'none');

        // If the pointerdown/ pointerup are within a small distance, treat as a tap
        const down = group.__down;
        let treatedAsTap = false;
        if (down) {
            const dx = e.clientX - down.x;
            const dy = e.clientY - down.y;
            const dist = Math.hypot(dx, dy);
            if (dist < 12) treatedAsTap = true;
        }

        if (pairedLoc && treatedAsTap) {
            // Stop any inertia so we don't get unexpected motion
            if (inertiaRaf) { cancelAnimationFrame(inertiaRaf); inertiaRaf = null; velocityX = velocityY = 0; }

            // Switch floor but preserve the current transform so view remains stable
            currentFloor = pairedLoc.floor;
            switchFloor(pairedLoc.floor, { preserveTransform: true });

            // Mark handled to prevent duplicate click handling
            group.__handled = true;

            setTimeout(() => {
                try {
                    // Only mark destination and reapply highlights; do NOT change zoom/translate
                    selectedDestination = pairedLoc.id;
                    updateMapHighlights();
                    scheduleUpdate();
                    document.getElementById('zoomLevel').textContent = `${Math.round(zoomLevel * 100)}%`;
                    console.log('Preserved view and marked destination', selectedDestination, 'zoom', zoomLevel);
                } catch (err) { console.warn('Post-switch update failed', err); }
            }, 60);

            const info = document.querySelector('.info-panel');
            if (info) {
                info.innerHTML = `<strong>${pairedLoc.name}</strong><br>Floor: ${pairedLoc.floor.replace(/Map$/, '').toUpperCase()}`;
            }
        }
        group.__down = null;
    });
    
    // Hover effect - adjust radius to avoid filters causing rasterization
    group.addEventListener('mouseenter', () => {
        circle.setAttribute('r', '17');
    });
    group.addEventListener('mouseleave', () => {
        circle.setAttribute('r', '15');
    });
    
    // Append to the marker layer (topmost) so the marker is clickable and not occluded by other drawn elements
    markerLayer.appendChild(group);
}

function drawPathMarker(loc, floorId, isStart, isEnd) {
    const floorMap = document.getElementById(floorId);
    if (!floorMap) return;
    
    let pathLayer = floorMap.querySelector('.path-layer');
    if (!pathLayer) {
        pathLayer = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        pathLayer.classList.add('path-layer');
        floorMap.appendChild(pathLayer);
    }
    
    // Only draw start and end markers (no intermediate waypoints)
    if (!isStart && !isEnd) return;
    
    // Start: green circle, End: red circle
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', loc.x);
    circle.setAttribute('cy', loc.y);
    circle.setAttribute('r', '8');
    circle.setAttribute('fill', isStart ? '#22c55e' : '#ef4444');
    circle.setAttribute('stroke', 'white');
    circle.setAttribute('stroke-width', '2');
    
    pathLayer.appendChild(circle);
}

/*************************************************
 * EMERGENCY MODE
 *************************************************/
function toggleEmergencyMode() {
    emergencyMode = !emergencyMode;

    const btn = document.getElementById('emergencyModeBtn');
    const banner = document.getElementById('emergencyBanner');

    if (emergencyMode) {
        btn.classList.add('emergency-active');
        btn.setAttribute('aria-pressed', 'true');
        if (banner) {
            banner.classList.remove('hidden');
            banner.setAttribute('aria-hidden', 'false');
        }
        // Filter location dropdowns to only show emergency exits as destination options
        // (pathfinding will automatically route through them)
    } else {
        btn.classList.remove('emergency-active');
        btn.setAttribute('aria-pressed', 'false');
        if (banner) {
            banner.classList.add('hidden');
            banner.setAttribute('aria-hidden', 'true');
        }
    }

    // Clear any existing route since the routing graph has changed
    clearSelections();
    // Refresh dropdown to show/hide emergency exits
    refreshDropdowns();
}

function clearSelections() {
    selectedStart = '';
    selectedDestination = '';
    const startEl = document.getElementById('startLocation');
    const destEl = document.getElementById('destination');
    if (startEl) { startEl.value = ''; startEl.dataset.id = ''; }
    if (destEl) { destEl.value = ''; destEl.dataset.id = ''; }
    clearPathFromMaps();
    hideDirectionsFloorNav();
    document.getElementById('infoPanel').classList.add('hidden');
    updateMapHighlights();
}

function clearPathFromMaps() {
    // Remove path drawings
    document.querySelectorAll('.path-layer').forEach(layer => layer.remove());

    // Also remove floor transition markers so they don't persist after a route or when clearing
    document.querySelectorAll('.transition-marker').forEach(m => m.remove());

    // Clear selected destination flag if the marker referenced it
    // (This prevents a stale 'destination' selection from persisting until refresh)
    const destInput = document.getElementById('destination');
    const destId = destInput ? destInput.dataset.id : '';
    if (selectedDestination && (!destId || selectedDestination === destId)) {
        // If the destination input doesn't match, keep selectedDestination; otherwise clear it
        selectedDestination = '';
    }

    updateMapHighlights();
}

/*************************************************
 * GENERATE DIRECTIONS
 *************************************************/
function generateDirections(path) {
    if (!path || path.length < 2) return [];
    
    const directions = [];
    const pathLocs = path.map(id => locations.find(l => l.id === id)).filter(Boolean);
    
    for (let i = 0; i < pathLocs.length; i++) {
        const current = pathLocs[i];
        
        if (i === 0) {
            directions.push(`Start at ${current.name}`);
        } else if (i === pathLocs.length - 1) {
            directions.push(`Arrive at ${current.name}`);
        } else {
            if (current.type === 'stairs') {
                const prev = pathLocs[i - 1];
                const next = pathLocs[i + 1];
                if (prev.floor !== next.floor) {
                    directions.push(`Take ${current.name} to change floors`);
                }
            } else if (!current.hidden) {
                directions.push(`Pass by ${current.name}`);
            }
        }
    }
    
    return directions;
}

/*************************************************
 * FLOOR MAPPING
 *************************************************/
const floorMap = {
    'mainjhs': [
        { id: 'groundjhsMap', name: 'Ground Level' },
        { id: 'mainjhsMap', name: 'Main Floor' },
        { id: 'mainjhs-secondMap', name: 'Second Floor' },
        { id: 'mainjhs-thirdMap', name: 'Third Floor' },
        { id: 'mainjhs-fourthMap', name: 'Fourth Floor' },
        { id: 'mainjhs-fifthMap', name: 'Fifth Floor' },
    ],
    'mainjhs-second': [
        { id: 'groundjhsMap', name: 'Ground Level' },
        { id: 'mainjhsMap', name: 'Main Floor' },
        { id: 'mainjhs-secondMap', name: 'Second Floor' },
        { id: 'mainjhs-thirdMap', name: 'Third Floor' },
        { id: 'mainjhs-fourthMap', name: 'Fourth Floor' },
        { id: 'mainjhs-fifthMap', name: 'Fifth Floor' },
    ],
    'mainjhs-third': [
        { id: 'groundjhsMap', name: 'Ground Level' },
        { id: 'mainjhsMap', name: 'Main Floor' },
        { id: 'mainjhs-secondMap', name: 'Second Floor' },
        { id: 'mainjhs-thirdMap', name: 'Third Floor' },
        { id: 'mainjhs-fourthMap', name: 'Fourth Floor' },
        { id: 'mainjhs-fifthMap', name: 'Fifth Floor' },
    ],
    'mainjhs-fourth': [
        { id: 'groundjhsMap', name: 'Ground Level' },
        { id: 'mainjhsMap', name: 'Main Floor' },
        { id: 'mainjhs-secondMap', name: 'Second Floor' },
        { id: 'mainjhs-thirdMap', name: 'Third Floor' },
        { id: 'mainjhs-fourthMap', name: 'Fourth Floor' },
        { id: 'mainjhs-fifthMap', name: 'Fifth Floor' },
    ],
    'mainjhs-fifth': [
        { id: 'groundjhsMap', name: 'Ground Level' },
        { id: 'mainjhsMap', name: 'Main Floor' },
        { id: 'mainjhs-secondMap', name: 'Second Floor' },
        { id: 'mainjhs-thirdMap', name: 'Third Floor' },
        { id: 'mainjhs-fourthMap', name: 'Fourth Floor' },
        { id: 'mainjhs-fifthMap', name: 'Fifth Floor' },
    ],
    'groundjhs': [
        { id: 'groundjhsMap', name: 'Ground Level' }
    ],



    // senior high building uses compact "shsbldg" view name (matching SVG ids)
    'shsbldg': [
        { id: 'shsbldgMap', name: 'Canteen' },
        { id: 'second-shsbldgMap', name: 'Second Floor' },
        { id: 'third-shsbldgMap', name: 'Third Floor' },
        { id: 'fourth-shsbldgMap', name: 'Fourth Floor' }
    ],
    // support deep‑linking to a particular floor (e.g. when a location points directly at it)
    'second-shsbldg': [
        { id: 'shsbldgMap', name: 'Canteen' },
        { id: 'second-shsbldgMap', name: 'Second Floor' },
        { id: 'third-shsbldgMap', name: 'Third Floor' },
        { id: 'fourth-shsbldgMap', name: 'Fourth Floor' }
    ],
    'third-shsbldg': [
        { id: 'shsbldgMap', name: 'Canteen' },
        { id: 'second-shsbldgMap', name: 'Second Floor' },
        { id: 'third-shsbldgMap', name: 'Third Floor' },
        { id: 'fourth-shsbldgMap', name: 'Fourth Floor' }
    ],
    'fourth-shsbldg': [
        { id: 'shsbldgMap', name: 'Canteen' },
        { id: 'second-shsbldgMap', name: 'Second Floor' },
        { id: 'third-shsbldgMap', name: 'Third Floor' },
        { id: 'fourth-shsbldgMap', name: 'Fourth Floor' }
    ],

    // Sub SHS

    'subshs': [
        { id: 'subshsMap', name: 'Ground Level' },
        { id: 'second-subshsMap', name: 'Second Floor' },
        { id: 'third-subshsMap', name: 'Third Floor' },
        { id: 'fourth-subshsMap', name: 'Fourth Floor' }
    ],
    'second-subshs': [
        { id: 'subshsMap', name: 'Ground Level' },
        { id: 'second-subshsMap', name: 'Second Floor' },
        { id: 'third-subshsMap', name: 'Third Floor' },
        { id: 'fourth-subshsMap', name: 'Fourth Floor' }
    ],
    'third-subshs': [
        { id: 'subshsMap', name: 'Ground Level' },
        { id: 'second-subshsMap', name: 'Second Floor' },
        { id: 'third-subshsMap', name: 'Third Floor' },
        { id: 'fourth-subshsMap', name: 'Fourth Floor' }
    ],
    'fourth-subshs': [
        { id: 'subshsMap', name: 'Ground Level' },
        { id: 'second-subshsMap', name: 'Second Floor' },
        { id: 'third-subshsMap', name: 'Third Floor' },
        { id: 'fourth-subshsMap', name: 'Fourth Floor' }
    ],


    // Pre-School

    'preschool': [
        { id: 'preschoolMap', name: 'Pre-School' },
        { id: 'second-preschoolMap', name: 'Pre-School Second Floor' },
        { id: 'third-preschoolMap', name: 'Pre-School Third Floor' },
        { id: 'fourth-preschoolMap', name: 'Pre-School Fourth Floor' }
    ],
    'second-preschool': [
        { id: 'preschoolMap', name: 'Pre-School' },
        { id: 'second-preschoolMap', name: 'Pre-School Second Floor' },
        { id: 'third-preschoolMap', name: 'Pre-School Third Floor' },
        { id: 'fourth-preschoolMap', name: 'Pre-School Fourth Floor' }
    ],
    'third-preschool': [
        { id: 'preschoolMap', name: 'Pre-School' },
        { id: 'second-preschoolMap', name: 'Pre-School Second Floor' },
        { id: 'third-preschoolMap', name: 'Pre-School Third Floor' },
        { id: 'fourth-preschoolMap', name: 'Pre-School Fourth Floor' }
    ],
    'fourth-preschool': [
        { id: 'preschoolMap', name: 'Pre-School' },
        { id: 'second-preschoolMap', name: 'Pre-School Second Floor' },
        { id: 'third-preschoolMap', name: 'Pre-School Third Floor' },
        { id: 'fourth-preschoolMap', name: 'Pre-School Fourth Floor' }
    ],

    'overall': [
        { id: 'overallMap', name: 'Overall Campus' }
    ]
};

/*************************************************
 * INITIALIZATION
 *************************************************/
function init() {
    populateDropdowns();
    attachUIEvents();
    setupMapInteractions();
    initMobilePicker();
    initDirectionsFloorNav();
}

/* Mobile map picker: allows mobile users to choose which map view to open first and provides an in-map 'Get Directions' button */
function initMobilePicker() {
    const bar = document.getElementById('mobileMapBar');
    initFloorNav();
    const picker = document.getElementById('mobileMapPicker');
    const optionsContainer = document.getElementById('mobileMapOptions');
    const mobileSelectBtn = document.getElementById('mobileMapSelect');
    const mobileGetBtn = document.getElementById('mobileGetDirectionsBtn');
    const closeBtn = document.getElementById('mobilePickerClose');

    if (!bar || !picker || !optionsContainer || !mobileSelectBtn || !mobileGetBtn || !closeBtn) return;

    // Populate options from existing view buttons
    const views = Array.from(document.querySelectorAll('.view-btn'))
        .map(btn => ({ id: btn.dataset.view, name: btn.textContent.trim() }));

    views.forEach(view => {
        const btn = document.createElement('button');
        btn.textContent = view.name;
        btn.className = 'mobile-map-option';
        btn.addEventListener('click', () => {
            switchView(view.id);
            updateMobileMapLabel(view.id);
            picker.classList.add('hidden');
            localStorage.setItem('preferredMapView', view.id);
        });
        optionsContainer.appendChild(btn);
    });

    // Show/hide logic
    mobileSelectBtn.addEventListener('click', () => {
        picker.classList.remove('hidden');
    });
    closeBtn.addEventListener('click', () => picker.classList.add('hidden'));

    // Desktop: provide a visible trigger for choosing map (useful for testing and desktop UX)
    const desktopSelectBtn = document.getElementById('desktopMapSelect');
    if (desktopSelectBtn) desktopSelectBtn.addEventListener('click', () => picker.classList.remove('hidden'));

    // Close picker with Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') picker.classList.add('hidden');
    });

    // Close when clicking on backdrop
    picker.addEventListener('click', (e) => {
        if (e.target === picker) picker.classList.add('hidden');
    });

    // In-map get directions button
    mobileGetBtn.addEventListener('click', () => {
        // trigger the same handler as the main UI
        document.getElementById('getDirections').click();
    });

    const mobileClear = document.getElementById('mobileClearRouteBtn');
    if (mobileClear) mobileClear.addEventListener('click', clearSelections);

    // Show mobile UI only for touch-capable small devices
    const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints && navigator.maxTouchPoints > 0) || /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const isHoverable = window.matchMedia && window.matchMedia('(hover: hover)').matches;
    const isCoarsePointer = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
    const isMobileUA = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    function shouldShowMobileBar() {
        // Only show the mobile bar on narrow screens and devices that are clearly mobile (coarse pointer or mobile UA) or lack hover
        return window.innerWidth <= 768 && isTouch && (isCoarsePointer || isMobileUA || !isHoverable);
    }

    function updateMobileBarLayout() {
        const barEl = document.getElementById('mobileMapBar');
        if (!barEl) return;

        if (!shouldShowMobileBar()) {
            barEl.classList.add('hidden');
            barEl.classList.remove('vertical', 'compact');
            barEl.setAttribute('aria-hidden', 'true');
            picker.classList.add('hidden');
            return;
        }

        // show bar
        barEl.classList.remove('hidden');
        barEl.setAttribute('aria-hidden', 'false');
        // vertical layout for narrow widths
        if (window.innerWidth < 420) {
            barEl.classList.add('vertical');
            barEl.classList.remove('compact');
        } else {
            barEl.classList.remove('vertical');
            // compact (floating) for very small devices
            if (window.innerWidth < 360) {
                barEl.classList.add('compact');
            } else {
                barEl.classList.remove('compact');
            }
        }
    }

    // wire layout updates
    updateMobileBarLayout();
    window.addEventListener('resize', updateMobileBarLayout);
    window.addEventListener('orientationchange', updateMobileBarLayout);
    // keep it hidden if the user scrolls on desktop
    window.addEventListener('scroll', () => {
        const barEl = document.getElementById('mobileMapBar');
        if (!barEl) return;
        if (!shouldShowMobileBar()) {
            barEl.classList.add('hidden');
            barEl.setAttribute('aria-hidden', 'true');
            picker.classList.add('hidden');
        }
    }, { passive: true });

    // hide mobile bar when inputs are focused to avoid covering the keyboard
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(inp => {
        inp.addEventListener('focus', () => {
            const barEl = document.getElementById('mobileMapBar');
            if (barEl) barEl.classList.add('hidden');
        });
        inp.addEventListener('blur', () => {
            const barEl = document.getElementById('mobileMapBar');
            if (barEl && shouldShowMobileBar()) barEl.classList.remove('hidden');
        });
    });

    if (shouldShowMobileBar()) {
        const saved = localStorage.getItem('preferredMapView');
        if (saved) {
            switchView(saved);
            updateMobileMapLabel(saved);
        } else {
            // show picker on first use
            picker.classList.remove('hidden');
        }
    } else {
        // Ensure desktop / non-touch devices always keep mobile UI hidden
        bar.classList.add('hidden');
        picker.classList.add('hidden');
    }
}

function updateMobileMapLabel(viewId) {
    const mobileSelectBtn = document.getElementById('mobileMapSelect');
    if (!mobileSelectBtn) return;
    const viewBtn = document.querySelector(`.view-btn[data-view="${viewId}"]`);
    if (viewBtn) {
        mobileSelectBtn.textContent = viewBtn.textContent.trim();
    } else {
        mobileSelectBtn.textContent = 'Map';
    }
}

function populateDropdowns() {
    const startSelect = document.getElementById('startLocation');
    const destSelect = document.getElementById('destination');
    
    // Only show non-hidden locations, exclude waypoints, stairs, and backstairs
    // Emergency exits are also hidden unless emergency mode is on
    const visibleLocations = locations.filter(loc =>
        !loc.hidden &&
        loc.type !== 'waypoint' &&
        loc.type !== 'stairs' &&
        !loc.id.includes('backstairs') &&
        (loc.type !== 'emergency' || emergencyMode)
    );
    
    // Store all visible locations for search functionality
    window.allVisibleLocations = visibleLocations;
    
    visibleLocations.forEach(location => {
        startSelect.appendChild(createOption(location));
        destSelect.appendChild(createOption(location));
    });
}

// Refresh dropdowns after emergency mode toggle
function refreshDropdowns() {
    populateDropdowns();
    const startList = document.getElementById('startLocationList');
    const destList = document.getElementById('destinationList');
    if (startList) populateDropdownList(document.getElementById('startLocation'), startList);
    if (destList) populateDropdownList(document.getElementById('destination'), destList);
}

function createOption(location) {
    const option = document.createElement('option');
    option.value = location.id;
    option.textContent = location.name;
    return option;
}

/*************************************************
 * SEARCHABLE DROPDOWN FUNCTIONALITY
 *************************************************/
function setupSearchableDropdowns() {
    const startInput = document.getElementById('startLocation');
    const startList = document.getElementById('startLocationList');
    const destInput = document.getElementById('destination');
    const destList = document.getElementById('destinationList');

    if (!startInput || !destInput || !startList || !destList) return;

    // Initialize both dropdowns
    populateDropdownList(startInput, startList);
    populateDropdownList(destInput, destList);

    // Handle start location input
    startInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        filterDropdownList(startList, searchTerm);
        if (startList.children.length > 0) {
            startList.classList.remove('hidden');
        }
    });

    startInput.addEventListener('focus', () => {
        startList.classList.remove('hidden');
    });

    // Handle destination input
    destInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        filterDropdownList(destList, searchTerm);
        if (destList.children.length > 0) {
            destList.classList.remove('hidden');
        }
    });

    destInput.addEventListener('focus', () => {
        destList.classList.remove('hidden');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.searchable-dropdown')) {
            startList.classList.add('hidden');
            destList.classList.add('hidden');
        }
    });
}

function populateDropdownList(inputElement, listElement) {
    listElement.innerHTML = '';
    
    window.allVisibleLocations.forEach(location => {
        const li = document.createElement('li');
        li.textContent = location.name;
        li.dataset.id = location.id;
        li.addEventListener('click', () => {
            inputElement.value = location.name;
            inputElement.dataset.id = location.id;
            listElement.classList.add('hidden');
            updateMapHighlights();
        });
        listElement.appendChild(li);
    });
}

function filterDropdownList(listElement, searchTerm) {
    const items = listElement.querySelectorAll('li');
    
    if (searchTerm === '') {
        items.forEach(item => item.style.display = 'block');
        return;
    }

    let visibleCount = 0;
    items.forEach(item => {
        if (item.textContent.toLowerCase().includes(searchTerm)) {
            item.style.display = 'block';
            visibleCount++;
        } else {
            item.style.display = 'none';
        }
    });

    // Hide dropdown if no items match
    if (visibleCount === 0) {
        listElement.classList.add('hidden');
    }
}

function getSelectedLocationId(fieldName) {
    const input = document.getElementById(fieldName);
    return input.dataset.id || '';
}

/*************************************************
 * EVENT LISTENERS
 *************************************************/
function attachUIEvents() {
    // Note: searchable dropdown change handlers are now in setupSearchableDropdowns
    
    document.getElementById('getDirections').addEventListener('click', handleGetDirections);
    const clearBtn = document.getElementById('clearRoute');
    if (clearBtn) clearBtn.addEventListener('click', clearSelections);

    // (toolbar Clear removed) sidebar Clear is primary for desktop too — no duplicate toolbar control needed.
    
    document.querySelectorAll('.quick-btn').forEach(btn =>
        btn.addEventListener('click', handleQuickAccess)
    );
    
    document.querySelectorAll('.view-btn').forEach(btn =>
        btn.addEventListener('click', () => switchView(btn.dataset.view))
    );
    
    document.getElementById('zoomIn').addEventListener('click', () => {
        const mapWrapper = document.getElementById('mapWrapper');
        const rect = mapWrapper.getBoundingClientRect();
        const hoverInside = lastHoverClientX !== null && lastHoverClientY !== null &&
            lastHoverClientX >= rect.left && lastHoverClientX <= rect.right &&
            lastHoverClientY >= rect.top && lastHoverClientY <= rect.bottom;
        const cx = hoverInside ? lastHoverClientX : (rect.left + rect.width/2);
        const cy = hoverInside ? lastHoverClientY : (rect.top + rect.height/2);
        changeZoom(0.1, cx, cy);
    });
    document.getElementById('zoomOut').addEventListener('click', () => {
        const mapWrapper = document.getElementById('mapWrapper');
        const rect = mapWrapper.getBoundingClientRect();
        const hoverInside = lastHoverClientX !== null && lastHoverClientY !== null &&
            lastHoverClientX >= rect.left && lastHoverClientX <= rect.right &&
            lastHoverClientY >= rect.top && lastHoverClientY <= rect.bottom;
        const cx = hoverInside ? lastHoverClientX : (rect.left + rect.width/2);
        const cy = hoverInside ? lastHoverClientY : (rect.top + rect.height/2);
        changeZoom(-0.1, cx, cy);
    });
    document.getElementById('resetView').addEventListener('click', () => {
        resetMapTransform();
        // Also clear start/destination selections
        clearSelections();
    });

    // Emergency mode toggle
    const emergencyBtn = document.getElementById('emergencyModeBtn');
    if (emergencyBtn) {
        emergencyBtn.addEventListener('click', toggleEmergencyMode);
    }
}

/*************************************************
 * MAP INTERACTION (pointer + inertia + pinch)
 * Rewritten for reliable mobile UX:
 *   - Multi-pointer tracking (no single pointerId limit)
 *   - Proper pinch-to-zoom: ratio-based, zooms toward midpoint
 *   - Single-finger pan cleanly separated from 2-finger pinch
 *   - Inertia on pan release
 *   - Double-tap to zoom (toggles 1x ↔ 2.5x at tap point)
 *   - transform: translate3d(tx,ty,0) scale(Z), origin 0 0
 *     → screen_pos = local_pos * Z + (tx, ty)  [clean math]
 *************************************************/
function setupMapInteractions() {
    const mapWrapper = document.getElementById('mapWrapper');

    // ── Click / tap on location elements ──────────────────────────────
    // NOTE: tap-on-location is handled in endPointer via tap detection.
    // This click handler is kept only as a fallback for mouse clicks (desktop).
    mapWrapper.addEventListener('click', (e) => {
        // Skip if pointer event system already handled it (touch)
        if (e.pointerType === 'touch') return;
        const clickable = e.target.closest('.location-rect, .campus-path, .location-path, .location-pathz');
        if (clickable) {
            e.stopPropagation();
            e.preventDefault();
            const id = clickable.id;
            if (id) handleLocationClick(id);
        }
    });

    // ── Multi-pointer state ───────────────────────────────────────────
    // Track all active pointers so we can distinguish pan (1 finger) from pinch (2 fingers)
    const activePointers = new Map(); // pointerId → {x, y}

    let panActive = false;     // true when panning with exactly 1 pointer
    let pinchActive = false;   // true when pinching with exactly 2 pointers
    let panStartX = 0;         // clientX at pan start minus translateX
    let panStartY = 0;
    let pinchStartTranslateX = 0;  // translateX at pinch start
    let pinchStartTranslateY = 0;  // translateY at pinch start
    let pinchStartDist = 0;        // pixel distance between two fingers at pinch start
    let pinchStartZoom = 0;    // zoomLevel at pinch start
    let pinchStartMidX = 0;    // midpoint of two fingers at pinch start (client coords)
    let pinchStartMidY = 0;

    // ── Helpers ───────────────────────────────────────────────────────
    function getPointerPair() {
        const ids = [...activePointers.keys()];
        const p1 = activePointers.get(ids[0]);
        const p2 = activePointers.get(ids[1]);
        return { p1, p2 };
    }

    function beginPinch() {
        panActive = false;
        if (inertiaRaf) { cancelAnimationFrame(inertiaRaf); inertiaRaf = null; velocityX = velocityY = 0; }
        const { p1, p2 } = getPointerPair();
        pinchStartDist = Math.hypot(p2.x - p1.x, p2.y - p1.y) || 1;
        pinchStartZoom = zoomLevel;
        pinchStartMidX = (p1.x + p2.x) / 2;
        pinchStartMidY = (p1.y + p2.y) / 2;
        pinchStartTranslateX = translateX;
        pinchStartTranslateY = translateY;
        pinchActive = true;
    }

    function beginPan(px, py) {
        pinchActive = false;
        if (inertiaRaf) { cancelAnimationFrame(inertiaRaf); inertiaRaf = null; velocityX = velocityY = 0; }
        panStartX = px - translateX;
        panStartY = py - translateY;
        lastPositions = [{ x: px, y: py, t: performance.now() }];
        panActive = true;
    }

    // Track tap start position per pointer so we can distinguish tap vs drag
    const pointerDownPos = new Map(); // pointerId → {x, y, target}
    const TAP_MOVE_THRESHOLD = 8; // px — moves smaller than this are treated as taps

    // ── Pointer events ────────────────────────────────────────────────
    mapWrapper.addEventListener('pointerdown', e => {
        // Don't intercept taps on UI controls
        const uiControl = e.target.closest('button, .floor-nav, .directions-floor-nav, .mobile-map-bar, .mobile-map-btn, .mobile-get-btn, .mobile-clear-btn, .floor-btn, .dir-nav-btn, .floor-nav-btn, .view-btn');
        if (uiControl) return;

        // Always capture pointer — even over clickable map elements — so pinch/pan works everywhere
        try { mapWrapper.setPointerCapture(e.pointerId); } catch (_) {}
        activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
        pointerDownPos.set(e.pointerId, { x: e.clientX, y: e.clientY, target: e.target });
        document.body.classList.add('no-select');

        if (activePointers.size === 1) {
            beginPan(e.clientX, e.clientY);
            mapWrapper.classList.add('dragging');
        } else if (activePointers.size === 2) {
            mapWrapper.classList.remove('dragging');
            beginPinch();
        }
        // 3+ fingers: ignore
    });

    mapWrapper.addEventListener('pointermove', e => {
        if (!activePointers.has(e.pointerId)) return;

        // Update stored position
        activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
        lastHoverClientX = e.clientX;
        lastHoverClientY = e.clientY;

        if (activePointers.size === 1 && panActive) {
            // Single-finger pan
            const now = performance.now();
            translateX = e.clientX - panStartX;
            translateY = e.clientY - panStartY;
            lastPositions.push({ x: e.clientX, y: e.clientY, t: now });
            if (lastPositions.length > 8) lastPositions.shift();
            scheduleUpdate();

        } else if (activePointers.size === 2 && pinchActive) {
            // Two-finger pinch-to-zoom
            const { p1, p2 } = getPointerPair();
            const currentDist = Math.hypot(p2.x - p1.x, p2.y - p1.y) || 1;
            const currentMidX = (p1.x + p2.x) / 2;
            const currentMidY = (p1.y + p2.y) / 2;

            // New zoom: ratio-based from start zoom, clamped
            const newZoom = Math.min(Math.max(pinchStartZoom * (currentDist / pinchStartDist), 0.5), 4);

            const rect = mapWrapper.getBoundingClientRect();

            // The map-local point that was under the START midpoint (in start transform space)
            const startMidLocalX = (pinchStartMidX - rect.left - pinchStartTranslateX) / pinchStartZoom;
            const startMidLocalY = (pinchStartMidY - rect.top  - pinchStartTranslateY) / pinchStartZoom;

            // Pan delta: how much the midpoint has moved since pinch start
            const dmx = currentMidX - pinchStartMidX;
            const dmy = currentMidY - pinchStartMidY;

            // New translate: keep start-focal-point under current midpoint, plus pan
            translateX = (currentMidX - rect.left) - startMidLocalX * newZoom;
            translateY = (currentMidY - rect.top)  - startMidLocalY * newZoom;

            zoomLevel = newZoom;
            document.getElementById('zoomLevel').textContent = `${Math.round(zoomLevel * 100)}%`;
            scheduleUpdate();
        }
    });

    function endPointer(e) {
        if (!activePointers.has(e.pointerId)) return;

        // Tap detection: check if this finger moved less than threshold
        const downPos = pointerDownPos.get(e.pointerId);
        const wasTap = downPos && activePointers.size === 1 &&
            Math.hypot(e.clientX - downPos.x, e.clientY - downPos.y) < TAP_MOVE_THRESHOLD;

        activePointers.delete(e.pointerId);
        pointerDownPos.delete(e.pointerId);

        if (activePointers.size === 0) {
            mapWrapper.classList.remove('dragging');
            document.body.classList.remove('no-select');
            panActive = false;
            pinchActive = false;
            // Cancel any leftover inertia animation
            if (inertiaRaf) { cancelAnimationFrame(inertiaRaf); inertiaRaf = null; }
            velocityX = velocityY = 0;

            // Fire location click only if it was a real tap (not a drag)
            if (wasTap && downPos) {
                const clickable = downPos.target.closest('.location-rect, .campus-path, .location-path, .location-pathz');
                if (clickable && clickable.id) {
                    handleLocationClick(clickable.id);
                }
            }
        } else if (activePointers.size === 1) {
            // Went from pinch to single finger — resume panning from current position
            pinchActive = false;
            const [remainingId] = activePointers.keys();
            const rem = activePointers.get(remainingId);
            beginPan(rem.x, rem.y);
            mapWrapper.classList.add('dragging');
        }
    }

    mapWrapper.addEventListener('pointerup', endPointer);
    mapWrapper.addEventListener('pointercancel', endPointer);

    // ── Wheel zoom (desktop) ──────────────────────────────────────────
    mapWrapper.addEventListener('wheel', e => {
        e.preventDefault();
        const factor = e.deltaY < 0 ? 1.1 : 0.9;
        setZoom(zoomLevel * factor, e.clientX, e.clientY);
    }, { passive: false });

    // ── Double-tap to zoom (mobile) ────────────────────────────────────
    let lastTap = 0;
    let lastTapX = 0;
    let lastTapY = 0;
    mapWrapper.addEventListener('pointerdown', e => {
        // Only track taps (single finger, quick)
        if (activePointers.size > 1) return;
        const now = Date.now();
        const gap = now - lastTap;
        if (gap > 0 && gap < 300 && Math.hypot(e.clientX - lastTapX, e.clientY - lastTapY) < 40) {
            // Double-tap: toggle between fitted and 2.5× zoom
            e.preventDefault();
            const target = zoomLevel < 1.8 ? 2.5 : 1;
            setZoom(target, e.clientX, e.clientY);
            lastTap = 0; // reset to avoid triple-tap firing again
            return;
        }
        lastTap = now;
        lastTapX = e.clientX;
        lastTapY = e.clientY;
    });
}

// Schedule an rAF update (coalesces frequent events)
function scheduleUpdate() {
    if (rafScheduled) return;
    rafScheduled = true;
    requestAnimationFrame(() => {
        applyTransform();
        rafScheduled = false;
    });
}

// Apply current transform: translate(tx,ty) scale(Z) with transform-origin:0 0
// This means: screen_pos = local_pos * Z + (tx, ty)
// So: tx/ty are screen-space offsets of the map origin. Math is clean and consistent.
function applyTransform() {
    const map = document.querySelector('.floor-map.active');
    if (map) {
        map.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) scale(${zoomLevel})`;
    }
}

// Smooth inertia after user releases pointer
function startInertia() {
    const friction = 0.92;
    const step = () => {
        velocityX *= friction;
        velocityY *= friction;
        translateX += velocityX * (1 / 60);
        translateY += velocityY * (1 / 60);
        applyTransform();
        if (Math.abs(velocityX) > 0.5 || Math.abs(velocityY) > 0.5) {
            inertiaRaf = requestAnimationFrame(step);
        } else {
            inertiaRaf = null;
            velocityX = velocityY = 0;
        }
    };
    if (inertiaRaf) cancelAnimationFrame(inertiaRaf);
    inertiaRaf = requestAnimationFrame(step);
} 

function handleLocationClick(id) {
    const name = getLocationName(id);
    if (!selectedStart) {
        selectedStart = id;
        const startEl = document.getElementById('startLocation');
        if (startEl) {
            startEl.value = name;
            startEl.dataset.id = id;
        }
    } else {
        selectedDestination = id;
        const destEl = document.getElementById('destination');
        if (destEl) {
            destEl.value = name;
            destEl.dataset.id = id;
        }
    }
    updateMapHighlights();
}

function updateMapHighlights() {
    document.querySelectorAll('.location-rect, .campus-path, .location-path, .location-pathz').forEach(el => {
        el.classList.toggle('start', el.id === selectedStart);
        el.classList.toggle('destination', el.id === selectedDestination);
    });
}

/*************************************************
 * DIRECTIONS HANDLING
 *************************************************/
function handleGetDirections() {
    // Get selected location IDs from the new searchable dropdowns
    selectedStart = getSelectedLocationId('startLocation');
    selectedDestination = getSelectedLocationId('destination');
    
    if (!selectedStart || !selectedDestination) {
        alert('Please select both start and destination.');
        return;
    }
    
    if (selectedStart === selectedDestination) {
        alert('Start and destination cannot be the same.');
        return;
    }
    
    const path = findPath(selectedStart, selectedDestination);
    
    if (path) {
        currentPath = path;
        const directions = generateDirections(path);
        
        // Auto-switch to appropriate view
        const startLoc = locations.find(l => l.id === selectedStart);
        const destLoc = locations.find(l => l.id === selectedDestination);
        
        if (startLoc && startLoc.view !== currentView) {
            switchView(startLoc.view);
            // Switch to the start floor after view switch
            if (startLoc && startLoc.floor) {
                currentFloor = startLoc.floor;
                switchFloor(currentFloor);
            }
            setTimeout(() => {
                drawPathOnMap(path);
                displayRouteInfo(getLocationName(selectedStart), getLocationName(selectedDestination), directions);
                // Always show directions nav so user can see map count
                const routeFloors = getRouteFloorsFromPath(path);
                const routeSegments = getRouteSegmentsFromPath(path);
                const startIdx = Math.max(0, routeFloors.indexOf(startLoc ? startLoc.floor : ''));
                showDirectionsFloorNav(routeFloors, startIdx, routeSegments);
            }, 100);
        } else {
            // Switch to the start floor
            if (startLoc && startLoc.floor) {
                currentFloor = startLoc.floor;
                updateFloorSelector(currentView);
                switchFloor(currentFloor);
            }
            drawPathOnMap(path);
            displayRouteInfo(getLocationName(selectedStart), getLocationName(selectedDestination), directions);
            // Always show directions nav
            const routeFloors = getRouteFloorsFromPath(path);
            const routeSegments = getRouteSegmentsFromPath(path);
            const startIdx = Math.max(0, routeFloors.indexOf(startLoc ? startLoc.floor : ''));
            showDirectionsFloorNav(routeFloors, startIdx, routeSegments);
        }
    } else {
        alert('No route found between these locations.');
    }
}

function displayRouteInfo(start, end, directions) {
    let html = `
        <p><strong>From:</strong> ${start}</p>
        <p><strong>To:</strong> ${end}</p>
        <div class="steps" style="margin-top: 15px;">
            <strong>Directions:</strong>
            <ol style="margin-top: 8px; padding-left: 20px;">
    `;
    
    directions.forEach(step => {
        html += `<li style="margin: 5px 0;">${step}</li>`;
    });
    
    html += `
            </ol>
        </div>
    `;
    
    displayInfo(html);
}

function displayInfo(html) {
    document.getElementById('infoContent').innerHTML = html;
    document.getElementById('infoPanel').classList.remove('hidden');
}

/*************************************************
 * VIEW & ZOOM
 *************************************************/
function switchView(view) {
    document.querySelectorAll('.floor-map').forEach(map => {
        map.style.transform = '';
        map.classList.remove('active');
    });
    
    const newMap = document.getElementById(view + 'Map');
    if (newMap) {
        newMap.classList.add('active');
    }
    
    document.querySelectorAll('.view-btn').forEach(btn =>
        btn.classList.toggle('active', btn.dataset.view === view)
    );
    
    currentView = view;
    updateFloorSelector(view);
    // Do NOT reset zoom/pan when switching views — preserve the user's zoom level
    // keep mobile UI in sync
    updateMobileMapLabel(view);
    
    // Redraw path if exists
    if (currentPath.length > 0) {
        setTimeout(() => drawPathOnMap(currentPath), 50);
    }
}

function updateFloorSelector(view) {
    const floorSelector = document.getElementById('floorSelector');
    const floorButtonsContainer = document.getElementById('floorButtonsContainer');
    // keep floor nav label in sync if present
    updateFloorNavState();
    
    if (floorMap[view] && floorMap[view].length > 1) {
        floorSelector.classList.remove('hidden');
        floorButtonsContainer.innerHTML = '';
        
        floorMap[view].forEach(floor => {
            const button = document.createElement('button');
            button.className = 'floor-btn';
            button.textContent = floor.name;
            button.dataset.floorId = floor.id;
            
            if (currentFloor === floor.id) {
                button.classList.add('active');
            }
            
            button.addEventListener('click', () => {
                document.querySelectorAll('.floor-btn').forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                switchFloor(floor.id);
            });
            
            floorButtonsContainer.appendChild(button);
        });
        
        if (!currentFloor && floorMap[view].length > 0) {
            currentFloor = floorMap[view][0].id;
            document.querySelector(`[data-floor-id="${currentFloor}"]`)?.classList.add('active');
            switchFloor(currentFloor);
        }
    } else if (floorMap[view] && floorMap[view].length === 1) {
        floorSelector.classList.add('hidden');
        currentFloor = floorMap[view][0].id;
        switchFloor(currentFloor);
    } else {
        floorSelector.classList.add('hidden');
        currentFloor = '';
    }

    // Then update visibility of the floating floor navigation UI
    updateFloorNavVisibility();
}

/**
 * Floor navigation UI in the map wrapper (previous / next)
 */
function initFloorNav() {
    const prevBtn = document.getElementById('prevFloorBtn');
    const nextBtn = document.getElementById('nextFloorBtn');
    const label = document.getElementById('floorNavLabel');

    if (!prevBtn || !nextBtn || !label) return;

    prevBtn.addEventListener('click', () => {
        navigateFloor(-1);
    });
    nextBtn.addEventListener('click', () => {
        navigateFloor(1);
    });

    updateFloorNavState();
}

function getFloorsForCurrentView() {
    return floorMap[currentView] || [];
}

function navigateFloor(delta) {
    const floors = getFloorsForCurrentView();
    if (!floors || floors.length === 0) return;

    const idx = floors.findIndex(f => f.id === currentFloor);
    if (idx === -1) return;

    let nextIdx = idx + delta;
    if (nextIdx < 0) nextIdx = 0;
    if (nextIdx >= floors.length) nextIdx = floors.length - 1;

    const nextFloor = floors[nextIdx];
    if (!nextFloor) return;

    currentFloor = nextFloor.id;
    switchFloor(currentFloor, { preserveTransform: true });
    updateFloorSelector(currentView);
    updateFloorNavState();
}

function updateFloorNavState() {
    const label = document.getElementById('floorNavLabel');
    const prevBtn = document.getElementById('prevFloorBtn');
    const nextBtn = document.getElementById('nextFloorBtn');

    if (!label || !prevBtn || !nextBtn) return;

    const floors = getFloorsForCurrentView();
    if (!floors || floors.length === 0) {
        label.textContent = '';
        prevBtn.disabled = true;
        nextBtn.disabled = true;
        return;
    }

    const idx = floors.findIndex(f => f.id === currentFloor);
    if (idx === -1) {
        label.textContent = '';
        prevBtn.disabled = true;
        nextBtn.disabled = true;
        return;
    }

    label.textContent = `${floors[idx].name} (${idx + 1}/${floors.length})`;
    prevBtn.disabled = idx === 0;
    nextBtn.disabled = idx === floors.length - 1;

    // Also ensure the nav is visible if it should be
    updateFloorNavVisibility();
}

/* --- Directions-specific floor nav: visible only when a route spans multiple floors --- */
function initDirectionsFloorNav() {
    const prev = document.getElementById('dirPrevBtn');
    const next = document.getElementById('dirNextBtn');
    const label = document.getElementById('dirFloorLabel');
    if (!prev || !next || !label) return;
    prev.addEventListener('click', () => navigateRouteFloor(-1));
    next.addEventListener('click', () => navigateRouteFloor(1));
    hideDirectionsFloorNav();
}

// Show/hide the floating floor nav depending on whether the current view has multiple floors
function updateFloorNavVisibility() {
    const nav = document.getElementById('floorNav');
    if (!nav) return;

    const floors = floorMap[currentView] || [];
    if (floors.length > 1) {
        nav.classList.remove('hidden');
        nav.setAttribute('aria-hidden', 'false');
        // NOTE: don't call updateFloorNavState() here — it also calls
        // updateFloorNavVisibility(), which would create recursion.
        // Callers which need both visibility and state should call
        // updateFloorNavState() explicitly after changing view/floor.
    } else {
        nav.classList.add('hidden');
        nav.setAttribute('aria-hidden', 'true');
    }
}

function getRouteFloorsFromPath(path) {
    const floors = [];
    path.forEach(id => {
        const loc = locations.find(l => l.id === id);
        if (!loc || !loc.floor) return;
        if (floors.length === 0 || floors[floors.length - 1] !== loc.floor) floors.push(loc.floor);
    });
    return floors;
}

// Returns array of { floorId, view, label } segments for the direction nav
function getRouteSegmentsFromPath(path) {
    const segments = [];
    path.forEach(id => {
        const loc = locations.find(l => l.id === id);
        if (!loc || !loc.floor) return;
        const last = segments[segments.length - 1];
        if (!last || last.floorId !== loc.floor) {
            // Build a readable label
            const viewFloors = floorMap[loc.view] || [];
            const floorInfo = viewFloors.find(f => f.id === loc.floor);
            const floorName = floorInfo ? floorInfo.name : '';
            // View label from button text
            const viewBtn = document.querySelector(`.view-btn[data-view="${loc.view}"]`);
            const viewLabel = viewBtn ? viewBtn.textContent.trim() : loc.view;
            const label = viewFloors.length > 1 && floorName
                ? `${viewLabel} — ${floorName}`
                : viewLabel;
            segments.push({ floorId: loc.floor, view: loc.view, label });
        }
    });
    return segments;
}

function showDirectionsFloorNav(floors, initialIndex = 0, segments = null) {
    currentRouteFloors = floors.slice();
    currentRouteFloorIndex = Math.min(Math.max(initialIndex, 0), currentRouteFloors.length - 1);
    currentRouteSegments = segments ? segments.slice() : [];
    const nav = document.getElementById('directionsFloorNav');
    if (!nav) return;

    // If the mobile map bar is visible, nudge the directions nav up so they don't overlap
    const mobileBar = document.getElementById('mobileMapBar');
    if (mobileBar && !mobileBar.classList.contains('hidden')) {
        const h = Math.round(mobileBar.getBoundingClientRect().height);
        nav.style.bottom = `${h + 24}px`;
    } else {
        nav.style.bottom = '16px';
    }

    nav.classList.remove('hidden');
    nav.setAttribute('aria-hidden', 'false');
    updateDirectionsFloorNavState();
}

function hideDirectionsFloorNav() {
    currentRouteFloors = [];
    currentRouteFloorIndex = 0;
    currentRouteSegments = [];
    const nav = document.getElementById('directionsFloorNav');
    if (!nav) return;
    nav.classList.add('hidden');
    nav.setAttribute('aria-hidden', 'true');
    nav.style.bottom = '';
}

function updateDirectionsFloorNavState() {
    const prev = document.getElementById('dirPrevBtn');
    const next = document.getElementById('dirNextBtn');
    const label = document.getElementById('dirFloorLabel');
    if (!label || !prev || !next) return;
    if (!currentRouteFloors || currentRouteFloors.length === 0) {
        label.textContent = '';
        prev.disabled = true;
        next.disabled = true;
        return;
    }

    // Sync index with current floor
    const foundIdx = currentRouteFloors.indexOf(currentFloor);
    if (foundIdx !== -1) currentRouteFloorIndex = foundIdx;

    const idx = currentRouteFloorIndex;
    const total = currentRouteFloors.length;

    // Use segment label if available, otherwise fall back to floor name
    let name = '';
    if (currentRouteSegments && currentRouteSegments[idx]) {
        name = currentRouteSegments[idx].label;
    } else {
        const floorId = currentRouteFloors[idx];
        const floor = (floorMap[currentView] || []).find(f => f.id === floorId);
        name = floor ? floor.name : floorId;
    }

    label.innerHTML = `<span class="dir-nav-map-label">Map ${idx + 1}/${total}</span><span class="dir-nav-map-name">${name}</span>`;
    prev.disabled = idx === 0;
    next.disabled = idx === total - 1;
}

function navigateRouteFloor(delta) {
    if (!currentRouteFloors || currentRouteFloors.length === 0) return;
    let idx = currentRouteFloorIndex + delta;
    if (idx < 0) idx = 0;
    if (idx >= currentRouteFloors.length) idx = currentRouteFloors.length - 1;
    currentRouteFloorIndex = idx;

    const floorId = currentRouteFloors[currentRouteFloorIndex];
    if (!floorId) return;

    // Also switch view if the segment has a different view
    const seg = currentRouteSegments && currentRouteSegments[idx];
    if (seg && seg.view && seg.view !== currentView) {
        // Switch view without resetting zoom
        document.querySelectorAll('.floor-map').forEach(map => {
            map.style.transform = '';
            map.classList.remove('active');
        });
        const newMap = document.getElementById(seg.view + 'Map');
        if (newMap) newMap.classList.add('active');
        document.querySelectorAll('.view-btn').forEach(btn =>
            btn.classList.toggle('active', btn.dataset.view === seg.view)
        );
        currentView = seg.view;
        updateMobileMapLabel(seg.view);
        // Redraw path on the new view
        setTimeout(() => {
            if (currentPath.length > 0) drawPathOnMap(currentPath);
        }, 50);
    }

    currentFloor = floorId;
    switchFloor(currentFloor, { preserveTransform: true });
    updateDirectionsFloorNavState();
    updateFloorNavVisibility();
}

function switchFloor(floorMapId, options = {}) {
    // options: { preserveTransform: boolean }
    // Default is now to preserve transform (zoom persists when changing floors)
    if (!floorMapId) return;
    
    document.querySelectorAll('.floor-map').forEach(map => {
        map.classList.remove('active');
    });
    
    // Update floor button highlighting
    document.querySelectorAll('.floor-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.floorId === floorMapId);
    });
    
    const selectedFloor = document.getElementById(floorMapId);
    if (selectedFloor) {
        selectedFloor.classList.add('active');
        currentFloor = floorMapId;
        // Preserve transform by default - only reset if explicitly told not to
        if (options.preserveTransform === false) {
            resetMapTransform();
        }
        updateMapHighlights();
        
        // Redraw path on floor switch
        if (currentPath.length > 0) {
            setTimeout(() => drawPathOnMap(currentPath), 50);
        }
        // ensure directions nav (if visible) reflects the new floor
        updateDirectionsFloorNavState();
        // ensure the floating floor nav visibility is correct after switching as well
        updateFloorNavVisibility();
    }
}

function setZoom(newZoom, clientX, clientY) {
    const mapWrapper = document.getElementById('mapWrapper');
    const rect = mapWrapper ? mapWrapper.getBoundingClientRect() : { left: 0, top: 0, width: window.innerWidth, height: window.innerHeight };

    // Default to center of wrapper if no point provided
    if (clientX === undefined || clientY === undefined) {
        clientX = rect.left + rect.width / 2;
        clientY = rect.top + rect.height / 2;
    }

    const oldZoom = zoomLevel;
    newZoom = Math.min(Math.max(newZoom, 0.5), 4);

    if (oldZoom === 0) {
        zoomLevel = newZoom;
        scheduleUpdate();
        document.getElementById('zoomLevel').textContent = `${Math.round(zoomLevel * 100)}%`;
        return;
    }

    // With transform: translate3d(tx,ty,0) scale(Z), transform-origin:0 0:
    //   screen_pos = local_pos * Z + (tx, ty)
    //   local_focal = (client - rect.offset - tx) / oldZ
    //   newTx = (client - rect.offset) - local_focal * newZ
    const cx = clientX - rect.left;
    const cy = clientY - rect.top;

    const localX = (cx - translateX) / oldZoom;
    const localY = (cy - translateY) / oldZoom;

    // new translate so focal screen point stays fixed
    translateX = cx - newZoom * localX;
    translateY = cy - newZoom * localY;

    zoomLevel = newZoom;
    scheduleUpdate();
    document.getElementById('zoomLevel').textContent = `${Math.round(zoomLevel * 100)}%`;
}

function changeZoom(amount, clientX, clientY) {
    setZoom(zoomLevel + amount, clientX, clientY);
}

function updateMapTransform() {
    // Backwards compatible alias: schedule an rAF update
    scheduleUpdate();
}

function resetMapTransform() {
    // Reset zoom based on device type
    zoomLevel = isMobileOrTablet() ? 2.0 : 1;
    translateX = 0;
    translateY = 0;

    document.querySelectorAll('.floor-map').forEach(map => {
        map.style.transform = '';
    });

    const activeMap = document.querySelector('.floor-map.active');
    if (activeMap) {
        // Keep same transform order as applyTransform: translate then scale
        activeMap.style.transform = `translate3d(0px, 0px, 0) scale(${zoomLevel})`;
    }

    document.getElementById('zoomLevel').textContent = `${Math.round(zoomLevel * 100)}%`;
} 

/*************************************************
 * HELPERS
 *************************************************/
function getLocationName(id) {
    const loc = locations.find(l => l.id === id);
    return loc ? loc.name : 'Unknown';
}

function handleQuickAccess(e) {
    const type = e.target.dataset.type;
    const location = locations.filter(loc => !loc.hidden).find(loc => loc.type === type);
    
    if (!location) return;
    
    switchView(location.view);
    selectedDestination = location.id;
    document.getElementById('destination').value = location.id;
    updateMapHighlights();
}

/*************************************************
 * MOBILE MENU FUNCTIONALITY
 *************************************************/
function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarClose = document.getElementById('sidebarClose');

    if (!mobileMenuToggle || !sidebar || !sidebarClose) return;

    // Toggle menu on hamburger click
    mobileMenuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });

    // Close menu on close button click
    sidebarClose.addEventListener('click', () => {
        sidebar.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            sidebar.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });

    // Close menu when a selection is made (auto-dismiss on mobile)
    const buttons = sidebar.querySelectorAll('.quick-btn, .view-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });
}

/*************************************************
 * START APP
 *************************************************/
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    init();
    setupSearchableDropdowns();
});