// cookbook-snippets.js
// Structured cookbook knowledge based on the "Gordon Ramsay Quick and Delicious" summary PDF.
// Each entry is intentionally concise and paraphrased to avoid copying the book verbatim.

const COOKBOOK_SNIPPETS = [
  /* ----------------- Chapter 4: Soups and Salads ----------------- */
  {
    chapter: "Soups and Salads",
    title: "Cauliflower Soup with Brown Butter and Cheesy Toasts",
    serves: 4,
    tags: ["soup", "vegetarian", "starter", "comfort"],
    keyIngredients: [
      "cauliflower",
      "vegetable stock",
      "sage or similar herb",
      "cheese mix for toasts",
      "butter"
    ],
    summary:
      "Creamy cauliflower soup enriched with nutty brown butter, served with cheese-topped toasts. Designed as a fast, warming bowl that you can pull together in about half an hour."
  },
  {
    chapter: "Soups and Salads",
    title: "Chicken and Shiitake Noodle Soup",
    serves: 4,
    tags: ["soup", "chicken", "noodles", "Asian-inspired"],
    keyIngredients: [
      "chicken thighs",
      "dried shiitake mushrooms",
      "ginger",
      "egg noodles",
      "choi sum or similar greens",
      "chicken stock"
    ],
    summary:
      "Brothy noodle soup inspired by Asian flavours, using dried shiitakes for depth. Chicken is simmered with aromatics then finished with noodles and greens for a quick, soothing bowl."
  },
  {
    chapter: "Soups and Salads",
    title: "Celeriac and Apple Soup with Crushed Walnuts",
    serves: "4–6",
    tags: ["soup", "vegan-friendly", "nutty"],
    keyIngredients: [
      "celeriac",
      "apples",
      "onion",
      "thyme",
      "walnuts",
      "stock"
    ],
    summary:
      "Smooth soup that balances earthy celeriac with sweet apple, finished with a crunchy walnut topping. A lighter, plant-focused option that still feels indulgent."
  },
  {
    chapter: "Soups and Salads",
    title: "Spiced Squash and Lentil Soup",
    serves: 4,
    tags: ["soup", "vegan", "spiced", "lentils"],
    keyIngredients: [
      "butternut squash",
      "red or green lentils",
      "onion",
      "spice blend",
      "coconut cream or coconut milk",
      "stock"
    ],
    summary:
      "Hearty, quick-cooking soup made with squash and lentils, spiced and finished with coconut for richness. Built to be ready in about 30 minutes."
  },
  {
    chapter: "Soups and Salads",
    title: "Soba Noodle, Courgette and Brown Shrimp Salad with Tamari Dressing",
    serves: 4,
    tags: ["salad", "noodles", "seafood", "Japanese-inspired"],
    keyIngredients: [
      "soba noodles",
      "courgettes",
      "brown shrimps or small prawns",
      "tamari or soy sauce",
      "citrus",
      "fresh herbs"
    ],
    summary:
      "A light Japanese-style salad built around soba noodles, shaved courgette and brown shrimps, all tied together with a tamari-based dressing."
  },
  {
    chapter: "Soups and Salads",
    title: "Kale Caesar Salad with Garlic Croutons",
    serves: 4,
    tags: ["salad", "kale", "bacon", "Caesar"],
    keyIngredients: [
      "kale",
      "smoked bacon or lardons",
      "garlic",
      "bread for croutons",
      "Parmesan or similar hard cheese",
      "Caesar-style dressing ingredients"
    ],
    summary:
      "A twist on classic Caesar, swapping the usual lettuce for kale and adding garlic croutons plus crispy smoked bacon for crunch and savoury depth."
  },
  {
    chapter: "Soups and Salads",
    title: "Warm Aubergine, Tomato and Burrata",
    serves: 4,
    tags: ["salad", "aubergine", "burrata", "sharing"],
    keyIngredients: [
      "aubergines",
      "ripe tomatoes",
      "burrata",
      "olive oil",
      "basil or similar herbs"
    ],
    summary:
      "Warm, grilled aubergine paired with fresh tomatoes and creamy burrata. A simple salad where produce quality and gentle seasoning do most of the work."
  },
  {
    chapter: "Soups and Salads",
    title: "Halloumi, Asparagus and Green Bean Salad",
    serves: 2,
    tags: ["salad", "halloumi", "grilled", "vegetarian"],
    keyIngredients: [
      "halloumi",
      "green beans",
      "asparagus",
      "olive oil",
      "herby dressing components"
    ],
    summary:
      "Quick grilled halloumi with asparagus and green beans, finished with a bright herb dressing. Built as a fast, satisfying salad for two."
  },
  {
    chapter: "Soups and Salads",
    title: "Beetroot Salad with Whipped Goat’s Cheese",
    serves: 2,
    tags: ["salad", "beetroot", "goat’s cheese", "vegetarian"],
    keyIngredients: [
      "raw and cooked beetroots",
      "goat’s cheese",
      "cream or similar to whip",
      "leafy greens",
      "simple dressing"
    ],
    summary:
      "Visually striking salad combining raw and cooked beetroot with a whipped goat’s cheese element. Uses neat shapes and contrasting textures for impact."
  },
  {
    chapter: "Soups and Salads",
    title: "Vietnamese Meatball Noodle Salad",
    serves: 2,
    tags: ["salad", "meatballs", "Vietnamese-inspired"],
    keyIngredients: [
      "minced meat (often pork or beef)",
      "noodles",
      "fresh herbs",
      "crunchy vegetables",
      "fish sauce–based dressing"
    ],
    summary:
      "Fresh, colourful noodle salad topped with punchy Vietnamese-style meatballs and a zesty, herb-heavy dressing. Built to be bright and textural."
  },

  /* ----------------- Chapter 5: Fish and Shellfish ----------------- */
  {
    chapter: "Fish and Shellfish",
    title: "Fish Finger Sandwiches",
    serves: 2,
    tags: ["fish", "sandwich", "comfort"],
    keyIngredients: [
      "haddock or cod fillets",
      "flour",
      "egg and milk",
      "panko breadcrumbs",
      "dill",
      "soft rolls (ciabatta or brioche)",
      "tartare sauce ingredients",
      "watercress"
    ],
    summary:
      "Homemade fish fingers coated in panko, fried until crisp and packed into toasted rolls with tartare sauce and watercress – a grown-up fish finger sandwich."
  },
  {
    chapter: "Fish and Shellfish",
    title: "Garlic and Chilli Prawns",
    serves: 2,
    tags: ["prawns", "garlic", "chilli", "quick"],
    keyIngredients: [
      "raw prawns",
      "garlic",
      "chilli",
      "tomatoes",
      "olive oil",
      "bread for serving"
    ],
    summary:
      "Fast skillet prawns cooked with garlic, chilli and tomatoes, served with crusty bread to mop up the spicy cooking juices."
  },
  {
    chapter: "Fish and Shellfish",
    title: "Pan-fried Salmon with Warm Potato Salad",
    serves: 4,
    tags: ["salmon", "potatoes", "weeknight"],
    keyIngredients: [
      "salmon fillets",
      "new potatoes",
      "crème fraîche or similar",
      "capers",
      "herbs"
    ],
    summary:
      "Crisp-skinned salmon served with a warm potato salad bound with a creamy, caper-studded dressing. Simple and fast to assemble."
  },
  {
    chapter: "Fish and Shellfish",
    title: "Chinese-style Baked Sea Bass",
    serves: 2,
    tags: ["fish", "Asian-inspired", "oven"],
    keyIngredients: [
      "whole or filleted sea bass",
      "pak choi",
      "green beans or similar veg",
      "soy-based sauces",
      "aromatics (garlic, ginger etc.)"
    ],
    summary:
      "Sea bass baked in a paper or foil parcel with Asian aromatics and greens, so the fish steams gently in its own fragrant juices."
  },
  {
    chapter: "Fish and Shellfish",
    title: "Salt and Pink Pepper Prawns with Lime Mayonnaise",
    serves: 4,
    tags: ["prawns", "starter", "lime"],
    keyIngredients: [
      "king prawns",
      "lime",
      "pink peppercorns",
      "mayonnaise",
      "oil for frying"
    ],
    summary:
      "Prawns quickly cooked with pink pepper and lime, served with a simple lime-spiked mayonnaise for dipping."
  },
  {
    chapter: "Fish and Shellfish",
    title: "Roast Hake with Saffron Mayonnaise",
    serves: 4,
    tags: ["fish", "oven", "saffron"],
    keyIngredients: [
      "hake fillets",
      "broccoli",
      "orange or citrus",
      "saffron",
      "mayonnaise base"
    ],
    summary:
      "Oven-roasted hake with broccoli, accompanied by a saffron and citrus mayonnaise that lifts the dish into something restaurant-level."
  },
  {
    chapter: "Fish and Shellfish",
    title: "Baked Sea Bream with Fennel, Carrot and Lemon",
    serves: 2,
    tags: ["fish", "baked", "Mediterranean"],
    keyIngredients: [
      "sea bream",
      "fennel",
      "carrot",
      "lemon",
      "olive oil",
      "herbs"
    ],
    summary:
      "Whole or portioned sea bream baked in parcels on a bed of fennel and carrot with lemon, so the vegetables and fish flavour each other."
  },

  /* ----------------- Chapter 6: Poultry ----------------- */
  {
    chapter: "Poultry",
    title: "Saffron Chicken Flatbreads with Minted Yoghurt",
    serves: null,
    tags: ["chicken", "flatbreads", "BBQ"],
    keyIngredients: [
      "chicken thighs",
      "saffron",
      "garlic",
      "thyme",
      "lemon zest",
      "red onion",
      "Greek yoghurt",
      "flatbreads",
      "salad leaves",
      "cherry tomatoes",
      "optional crispy onions"
    ],
    summary:
      "Skewers of saffron-marinated chicken grilled until golden and served on warm flatbreads with salad and a minted yoghurt sauce."
  },
  {
    chapter: "Poultry",
    title: "Asian Duck Salad",
    serves: null,
    tags: ["duck", "salad", "Asian-inspired"],
    keyIngredients: [
      "duck breasts",
      "Chinese five-spice",
      "radishes",
      "cucumber",
      "watercress",
      "beansprouts",
      "spring onions",
      "sesame seeds",
      "hoisin-style dressing"
    ],
    summary:
      "Crisp-skinned duck, scented with five-spice, sliced over a crunchy salad of radish, cucumber and greens with an Asian dressing."
  },
  {
    chapter: "Poultry",
    title: "Moroccan Chicken Traybake",
    serves: null,
    tags: ["chicken", "traybake", "spiced"],
    keyIngredients: [
      "chicken breasts or thighs",
      "ras-el-hanout spice mix",
      "baby carrots",
      "red onions",
      "chickpeas",
      "courgettes",
      "couscous"
    ],
    summary:
      "All-in-one traybake where chicken, vegetables and chickpeas roast with Moroccan spices, served alongside or over quick couscous."
  },
  {
    chapter: "Poultry",
    title: "Buffalo Chicken and Blue Cheese Dressing",
    serves: null,
    tags: ["chicken", "fried", "buffalo"],
    keyIngredients: [
      "chicken mini fillets",
      "buttermilk",
      "flour",
      "cayenne or hot sauce",
      "butter",
      "blue cheese",
      "yoghurt or mayo"
    ],
    summary:
      "Mini chicken fillets marinated then coated and fried, tossed in a buffalo-style sauce and paired with a creamy blue cheese dressing."
  },
  {
    chapter: "Poultry",
    title: "Wild Garlic Turkey Kievs",
    serves: null,
    tags: ["turkey", "stuffed", "garlic butter"],
    keyIngredients: [
      "turkey breasts",
      "wild garlic or garlic plus herbs",
      "butter",
      "breadcrumbs",
      "egg and flour for coating"
    ],
    summary:
      "Turkey breasts stuffed with wild garlic butter, crumbed and fried or baked so the butter melts into the meat when cut."
  },

  /* ----------------- Chapter 7: Meat ----------------- */
  {
    chapter: "Meat",
    title: "Steak Tacos with Pink Pickled Onion and Pico de Gallo",
    serves: null,
    tags: ["tacos", "steak", "Mexican-inspired"],
    keyIngredients: [
      "bavette or similar steak",
      "cumin",
      "chilli powder",
      "soft tortillas",
      "red onions for pickling",
      "tomatoes, onions, coriander for pico",
      "chipotle crema ingredients"
    ],
    summary:
      "Street-food style tacos using quickly seared, spiced steak, topped with pink pickled onions, pico de gallo and a chipotle cream."
  },
  {
    chapter: "Meat",
    title: "Pork Schnitzel with Celeriac Remoulade",
    serves: null,
    tags: ["pork", "schnitzel", "crispy"],
    keyIngredients: [
      "pork escalopes",
      "flour, egg and breadcrumbs",
      "celeriac",
      "mayonnaise",
      "mustard",
      "lemon",
      "herbs"
    ],
    summary:
      "Thin pork schnitzels crumbed and fried until crisp, served with a fast celeriac remoulade dressed with mayo, mustard and lemon."
  },
  {
    chapter: "Meat",
    title: "Bacon Cheeseburgers with Pickled Cucumber Burger Sauce",
    serves: null,
    tags: ["burgers", "beef", "bacon"],
    keyIngredients: [
      "minced beef",
      "bacon",
      "cheese slices",
      "burger buns",
      "cucumbers",
      "pickling mix",
      "mayonnaise and condiments"
    ],
    summary:
      "Homemade bacon cheeseburgers with a tangy sauce built from quick-pickled cucumbers, served in soft buns with classic toppings."
  },
  {
    chapter: "Meat",
    title: "Veal Scallopini with Mushroom Sauce",
    serves: null,
    tags: ["veal", "mushroom", "quick"],
    keyIngredients: [
      "thin veal escalopes",
      "porcini or mixed mushrooms",
      "shallots",
      "cream",
      "stock or wine",
      "herbs"
    ],
    summary:
      "Fast-cooking veal scallopini paired with a rich mushroom sauce. The key is not to overcook the veal so it stays tender."
  },
  {
    chapter: "Meat",
    title: "Sticky Pork with Asian Greens",
    serves: null,
    tags: ["pork", "Asian", "stir-fry"],
    keyIngredients: [
      "pork chops or slices",
      "garlic",
      "hoisin or similar sticky sauce",
      "soy",
      "Asian greens (pak choi etc.)"
    ],
    summary:
      "Pork cooked in a sticky, garlicky Asian-style glaze, served with quickly stir-fried greens for a colourful, glossy plate."
  },
  {
    chapter: "Meat",
    title: "Juniper Venison Steaks with Quick-braised Red Cabbage",
    serves: null,
    tags: ["venison", "autumn", "braise"],
    keyIngredients: [
      "venison steaks",
      "juniper berries",
      "red cabbage",
      "red wine or similar",
      "aromatics"
    ],
    summary:
      "Pan-seared venison served with a quick-braised red cabbage scented with juniper and wine, giving a gamey yet elegant feel."
  },
  {
    chapter: "Meat",
    title: "Korean-style Lamb with Sesame Cucumber",
    serves: null,
    tags: ["lamb", "Korean-inspired", "grilled"],
    keyIngredients: [
      "lamb rack cutlets",
      "Korean-style marinade (gochujang/soy etc.)",
      "cucumber",
      "sesame oil",
      "sesame seeds"
    ],
    summary:
      "Grilled Korean-style lamb cutlets served with a refreshing sesame cucumber salad to balance the richness."
  },
  {
    chapter: "Meat",
    title: "Mexican Beef and Jalapeño Quesadillas",
    serves: null,
    tags: ["beef", "quesadillas", "cheesy"],
    keyIngredients: [
      "minced or shredded beef",
      "jalapeños",
      "tortillas",
      "cheese",
      "salsa ingredients"
    ],
    summary:
      "Cheesy quesadillas filled with spiced beef and jalapeños, cooked until crisp on the outside and served with fresh salsa."
  },
  {
    chapter: "Meat",
    title: "Minced Lamb Curry",
    serves: null,
    tags: ["lamb", "curry", "quick"],
    keyIngredients: [
      "minced lamb",
      "onion",
      "garlic and ginger",
      "spice mix",
      "tomato",
      "chapattis or naan"
    ],
    summary:
      "Speedy lamb curry built with minced lamb and aromatic spices, served with flatbreads as a quicker alternative to slow-cooked curries."
  },
  {
    chapter: "Meat",
    title: "Pork Larb with Sticky Coconut Rice",
    serves: null,
    tags: ["pork", "Thai/Laotian-inspired", "salad"],
    keyIngredients: [
      "minced pork",
      "lime",
      "fish sauce",
      "chilli",
      "sticky rice with coconut",
      "lettuce leaves",
      "fresh herbs"
    ],
    summary:
      "A Laotian-style pork larb with chilli, lime and herbs, served with coconut sticky rice and wrapped in lettuce leaves for a lighter bowl."
  },
  {
    chapter: "Meat",
    title: "Veal Saltimbocca with Marsala Sauce",
    serves: null,
    tags: ["veal", "Italian", "Marsala"],
    keyIngredients: [
      "veal escalopes",
      "prosciutto",
      "sage",
      "Marsala wine",
      "butter",
      "stock"
    ],
    summary:
      "Thin veal slices wrapped with prosciutto and sage, cooked quickly and finished in a sweet, savoury Marsala pan sauce."
  },
  {
    chapter: "Meat",
    title: "Mustard and Herb Meatballs with Balsamic Glaze",
    serves: null,
    tags: ["meatballs", "balsamic", "salad"],
    keyIngredients: [
      "minced meat (often beef or pork)",
      "mustard",
      "mixed herbs",
      "balsamic vinegar",
      "rocket or salad leaves"
    ],
    summary:
      "Herb and mustard meatballs glazed with a tangy balsamic reduction, served with a fresh rocket salad."
  },
  {
    chapter: "Meat",
    title: "Rib-eye Steaks with Peppercorn Sauce",
    serves: null,
    tags: ["steak", "peppercorn", "classics"],
    keyIngredients: [
      "rib-eye steaks",
      "green or mixed peppercorns",
      "cream",
      "stock",
      "brandy (optional)"
    ],
    summary:
      "Classic pan-seared rib-eye with a creamy peppercorn sauce. Focus is on getting a good crust and proper resting."
  },
  {
    chapter: "Meat",
    title:
      "Roast Pork Chops with Crushed Charlotte Potatoes and Lettuce and Apple Salad",
    serves: null,
    tags: ["pork", "tray", "potatoes"],
    keyIngredients: [
      "thick-cut pork chops",
      "Charlotte or new potatoes",
      "lettuce",
      "apples",
      "simple dressing"
    ],
    summary:
      "Roasted pork chops served with crushed potatoes that soak up the pan juices, plus a fresh lettuce and apple salad on the side."
  },
  {
    chapter: "Meat",
    title: "Lamb Rump with Creamed Cannellini Beans",
    serves: null,
    tags: ["lamb", "beans", "comfort"],
    keyIngredients: [
      "lamb rumps",
      "cannellini beans",
      "rosemary or similar herb",
      "cream or olive oil",
      "garlic"
    ],
    summary:
      "Seared lamb rumps served on a bed of rosemary-scented creamed cannellini beans – simple but restaurant-style."
  },

  /* ----------------- Chapter 8: Meat-free Mains ----------------- */
  {
    chapter: "Meat-free Mains",
    title: "Lentil Burgers",
    serves: null,
    tags: ["vegan", "burgers", "lentils"],
    keyIngredients: [
      "olive oil",
      "onion",
      "garlic",
      "jalapeño",
      "red pepper",
      "ground cumin",
      "smoked paprika",
      "chickpeas",
      "cooked Puy lentils",
      "breadcrumbs"
    ],
    summary:
      "Vegan burgers made from lentils and chickpeas, flavoured with spiced peppers and onions. Patties are pan-cooked and optionally baked with cheese for non-vegans."
  },
  {
    chapter: "Meat-free Mains",
    title: "Quick Butternut and Chickpea Curry",
    serves: null,
    tags: ["vegan", "curry", "butternut"],
    keyIngredients: [
      "butternut squash",
      "chickpeas",
      "onion",
      "garlic and ginger",
      "spice mix",
      "coconut milk"
    ],
    summary:
      "Fast, warming curry built from butternut squash and chickpeas. The flavour improves if it sits a little, so it’s great for leftovers too."
  },
  {
    chapter: "Meat-free Mains",
    title: "Vegetable Stir-fry",
    serves: null,
    tags: ["stir-fry", "vegetarian", "fast"],
    keyIngredients: [
      "mixed vegetables",
      "oil",
      "soy sauce",
      "honey or sweetener",
      "garlic and ginger"
    ],
    summary:
      "Very quick wok stir-fry using whatever veg you have, glazed with a simple soy-and-sweetness combo. A proper fridge-raid dish."
  },
  {
    chapter: "Meat-free Mains",
    title: "Corn and Courgette Fritters with Tomato, Avocado and Rocket Salad",
    serves: null,
    tags: ["fritters", "vegetarian", "brunch"],
    keyIngredients: [
      "sweetcorn",
      "courgettes",
      "eggs",
      "cheese",
      "salad leaves",
      "tomato",
      "avocado"
    ],
    summary:
      "Light, golden fritters made from corn and courgette, served with a fresh salad of tomato, avocado and rocket. Ideal brunch-style plate."
  },
  {
    chapter: "Meat-free Mains",
    title: "Spicy Smoked Tofu Lettuce Cups",
    serves: null,
    tags: ["tofu", "lettuce cups", "vegan"],
    keyIngredients: [
      "smoked tofu",
      "mixed vegetables",
      "soy or similar sauce",
      "lettuce leaves",
      "fresh toppings"
    ],
    summary:
      "Smoky tofu stir-fried with vegetables, spooned into crisp lettuce cups with toppings for a light, hand-held main."
  },
  {
    chapter: "Meat-free Mains",
    title: "Tofu and Vegetable Laksa",
    serves: null,
    tags: ["laksa", "tofu", "noodles"],
    keyIngredients: [
      "laksa paste",
      "vegetable stock",
      "noodles",
      "tofu puffs or cubes",
      "assorted vegetables",
      "coconut milk"
    ],
    summary:
      "A fragrant noodle soup in a spicy coconut broth, loaded with tofu puffs and vegetables – a meat-free take on laksa."
  },
  {
    chapter: "Meat-free Mains",
    title:
      "Pea, Basil and Goat’s Cheese Omelette with Shaved Asparagus and Rocket Salad",
    serves: null,
    tags: ["omelette", "goat’s cheese", "vegetarian"],
    keyIngredients: [
      "peas",
      "eggs",
      "goat’s cheese",
      "asparagus",
      "rocket",
      "herbs"
    ],
    summary:
      "Soft omelette flecked with peas and topped with grilled goat’s cheese, served with shaved asparagus and rocket as a quick main."
  },
  {
    chapter: "Meat-free Mains",
    title: "Beetroot, Thyme and Goat’s Cheese Tart",
    serves: null,
    tags: ["tart", "beetroot", "goat’s cheese", "vegetarian"],
    keyIngredients: [
      "ready-made puff pastry",
      "cream cheese",
      "beetroot",
      "goat’s cheese",
      "salad ingredients"
    ],
    summary:
      "Simple pastry tart filled with beetroot and cheeses, baked until crisp and served with a fresh salad on the side."
  },

  /* ----------------- Chapter 9: Pasta, Rice and Grains ----------------- */
  {
    chapter: "Pasta, Rice and Grains",
    title: "Cacio e Pepe with Parmesan Crisps",
    serves: 2,
    tags: ["pasta", "Italian", "cheese"],
    keyIngredients: [
      "Parmesan",
      "bucatini or spaghetti",
      "black peppercorns",
      "butter",
      "pecorino"
    ],
    summary:
      "Classic cacio e pepe with a glossy cheese and pepper sauce emulsified using starchy pasta water, plus extra Parmesan crisps for crunch."
  },
  {
    chapter: "Pasta, Rice and Grains",
    title: "Tomato, Mascarpone and Pancetta Rigatoni",
    serves: 4,
    tags: ["pasta", "tomato", "pancetta"],
    keyIngredients: [
      "olive oil",
      "pancetta",
      "onion",
      "garlic",
      "tinned tomatoes",
      "mascarpone",
      "rigatoni",
      "basil"
    ],
    summary:
      "Midweek pasta built from pantry staples: a tomato and pancetta sauce enriched with mascarpone, tossed with rigatoni. Easy to adapt for vegetarians by skipping the pancetta."
  },
  {
    chapter: "Pasta, Rice and Grains",
    title: "Linguine Vongole with Nduja and Cherry Tomatoes",
    serves: 4,
    tags: ["pasta", "clams", "nduja"],
    keyIngredients: [
      "dry white wine",
      "clams",
      "olive oil",
      "nduja",
      "linguine",
      "parsley",
      "cherry tomatoes"
    ],
    summary:
      "Spicy clam linguine where nduja and cherry tomatoes make a rich, sweet-hot sauce around briny clams and pasta."
  },
  {
    chapter: "Pasta, Rice and Grains",
    title: "Crab and Courgette Spaghetti",
    serves: null,
    tags: ["pasta", "crab", "summer"],
    keyIngredients: [
      "ready-picked crab meat",
      "courgettes",
      "spaghetti",
      "lemon",
      "herbs"
    ],
    summary:
      "Light spaghetti dish using sweet crab meat and courgette, built to be cooked and on the table in under half an hour."
  },
  {
    chapter: "Pasta, Rice and Grains",
    title: "Korean-style Prawn Fried Rice",
    serves: null,
    tags: ["rice", "prawns", "Korean-inspired"],
    keyIngredients: [
      "cooked rice",
      "prawns",
      "kimchi",
      "soy sauce",
      "aromatics"
    ],
    summary:
      "Quick fried rice with prawns and kimchi, giving a sour-spicy, umami punch in minutes."
  },
  {
    chapter: "Pasta, Rice and Grains",
    title: "Sichuan Sesame Noodles",
    serves: null,
    tags: ["noodles", "Sichuan", "sesame"],
    keyIngredients: [
      "noodles (often wheat noodles or spaghetti)",
      "chilli oil",
      "Sichuan pepper",
      "sesame paste",
      "soy sauce"
    ],
    summary:
      "Noodles tossed in a sesame-rich, spicy Sichuan-style sauce, with tingling heat from chilli and Sichuan pepper."
  },

  /* ----------------- Chapter 10: Dips and Sides ----------------- */
  {
    chapter: "Dips and Sides",
    title: "Pea and Mint Guacamole",
    serves: null,
    tags: ["dip", "peas", "avocado"],
    keyIngredients: [
      "frozen peas",
      "olive oil",
      "onion",
      "ripe avocados",
      "lime juice",
      "mint leaves",
      "salt and pepper"
    ],
    summary:
      "A bright green dip that blends peas, avocado, onion, lime and mint into a chunky guacamole-style spread, served with veg sticks or tortilla chips."
  },
  {
    chapter: "Dips and Sides",
    title: "Black Houmous with Pitta Crisps",
    serves: null,
    tags: ["dip", "houmous", "sesame"],
    keyIngredients: [
      "pitta breads",
      "olive oil",
      "tinned chickpeas",
      "black sesame paste",
      "garlic",
      "rosemary",
      "lemon juice"
    ],
    summary:
      "A black sesame twist on classic hummus, served with homemade pitta crisps baked until crunchy."
  },
  {
    chapter: "Dips and Sides",
    title: "Aromatic Saffron Pilaf",
    serves: null,
    tags: ["rice", "pilaf", "spiced"],
    keyIngredients: [
      "basmati rice",
      "ghee or butter",
      "onions",
      "spices",
      "chicken stock"
    ],
    summary:
      "Fragrant saffron rice pilaf cooked with onions, spices and stock, working as a versatile side for many mains."
  },
  {
    chapter: "Dips and Sides",
    title: "Decadent Mashed Potatoes with Three Variations",
    serves: null,
    tags: ["potatoes", "mash", "sides"],
    keyIngredients: [
      "potatoes",
      "cream and/or butter",
      "mustard",
      "truffle paste and oil",
      "garlic and herbs"
    ],
    summary:
      "Rich, creamy mash with three twist options: mustard mash, truffle mash, and garlic-herb mash, all built on the same base method."
  },
  {
    chapter: "Dips and Sides",
    title: "Green Beans with Pine Nuts and Tarragon",
    serves: null,
    tags: ["green beans", "side"],
    keyIngredients: [
      "green beans",
      "pine nuts",
      "butter",
      "tarragon",
      "salt"
    ],
    summary:
      "Simple side of boiled beans tossed with toasted pine nuts, butter and tarragon for a luxe finish."
  },
  {
    chapter: "Dips and Sides",
    title: "Courgette Fries",
    serves: null,
    tags: ["courgette", "fried", "side"],
    keyIngredients: [
      "courgettes",
      "semolina",
      "‘00’ flour",
      "salt",
      "oil for frying"
    ],
    summary:
      "Julienned courgettes salted to draw out moisture, coated in a flour/semolina mix and fried until crisp."
  },

  /* ----------------- Chapter 11: Puddings ----------------- */
  {
    chapter: "Puddings",
    title: "Burnt Meringue with Poached Rhubarb",
    serves: 4,
    tags: ["meringue", "rhubarb", "dessert"],
    keyIngredients: [
      "egg whites and sugar for meringue",
      "rhubarb",
      "sugar or syrup for poaching",
      "pistachios for crumble"
    ],
    summary:
      "Soft meringue topped with poached rhubarb and a pistachio crumble, finished with a blowtorch to give a caramelised surface."
  },
  {
    chapter: "Puddings",
    title: "Mango, White Chocolate and Passion Fruit Parfaits",
    serves: 4,
    tags: ["parfait", "tropical", "layered dessert"],
    keyIngredients: [
      "coconut-based mousse mixture",
      "mango",
      "passion fruit",
      "toasted coconut",
      "white chocolate"
    ],
    summary:
      "Layered glasses of coconut mousse, fruit and chocolate, building a tropical parfait that’s very prep-friendly."
  },
  {
    chapter: "Puddings",
    title: "Spiced Peach, Apple and Almond Crumble",
    serves: 6,
    tags: ["crumble", "peach", "apple"],
    keyIngredients: [
      "canned peaches",
      "apples",
      "spice mix",
      "almonds",
      "crumble topping ingredients"
    ],
    summary:
      "Fruit crumble using spiced apples and canned peaches under an almond-dotted crumble topping. Can be assembled ahead and baked later."
  },
  {
    chapter: "Puddings",
    title: "Pain Perdu with Summer Fruit Compote",
    serves: 4,
    tags: ["French toast", "fruit", "brunch dessert"],
    keyIngredients: [
      "bread",
      "egg and milk mixture",
      "mixed summer fruits",
      "sugar",
      "citrus"
    ],
    summary:
      "A restaurant-style French toast served with a quick compote of mixed summer fruits – elegant but fast."
  },
  {
    chapter: "Puddings",
    title: "Banana Split with Salted Caramel Chocolate Sauce",
    serves: 2,
    tags: ["banana", "caramel", "nostalgic"],
    keyIngredients: [
      "bananas",
      "sugar for caramel",
      "cream or milk",
      "chocolate",
      "salt"
    ],
    summary:
      "Nostalgic banana split upgraded with caramelised bananas and a salted caramel chocolate sauce."
  },
  {
    chapter: "Puddings",
    title: "Cheat’s Cheesecake with Macerated Strawberries",
    serves: 4,
    tags: ["cheesecake", "no-bake", "strawberries"],
    keyIngredients: [
      "soft cheese mixture",
      "biscuits or crumble base components",
      "strawberries",
      "sugar",
      "wine or liqueur"
    ],
    summary:
      "Upside-down, no-bake cheesecake: creamy topping served over a crumble base, finished with strawberries that have been macerated in sugar and wine."
  },
  {
    chapter: "Puddings",
    title: "Fig Tarts with Vanilla and Honey Mascarpone",
    serves: 4,
    tags: ["fig", "tarts", "puff pastry"],
    keyIngredients: [
      "ready-made puff pastry",
      "figs",
      "mascarpone",
      "vanilla",
      "honey"
    ],
    summary:
      "Quick tarts made from puff pastry topped with figs and a vanilla-honey mascarpone mix."
  },
  {
    chapter: "Puddings",
    title: "Rhubarb and Ginger Cheesecake Pots",
    serves: 4,
    tags: ["cheesecake", "rhubarb", "no-bake"],
    keyIngredients: [
      "ginger biscuits",
      "soft cheese mix",
      "rhubarb",
      "sugar"
    ],
    summary:
      "Individual no-bake cheesecake pots with a ginger biscuit base and rhubarb topping. Can be served straight away or chilled."
  },
  {
    chapter: "Puddings",
    title: "Cinnamon Ice Cream Sandwiches with Winter Fruit Compote",
    serves: 4,
    tags: ["ice cream", "sandwiches", "winter fruits"],
    keyIngredients: [
      "vanilla ice cream",
      "pastry or biscuit for sandwiches",
      "cinnamon",
      "mixed winter fruit",
      "sugar"
    ],
    summary:
      "Transforms vanilla ice cream into spiced sandwiches served with a warm winter fruit compote. Parts can be made in advance."
  },
  {
    chapter: "Puddings",
    title: "Calvados Toffee Apple Pancakes",
    serves: 4,
    tags: ["pancakes", "apple", "Calvados"],
    keyIngredients: [
      "apples",
      "sugar and butter for toffee",
      "Calvados",
      "pancake batter"
    ],
    summary:
      "Adult spin on toffee apples: caramelised apples in a Calvados sauce served over fluffy pancakes."
  },
  {
    chapter: "Puddings",
    title: "Choc Nut Vegan Mousse",
    serves: "4–6",
    tags: ["vegan", "chocolate", "mousse"],
    keyIngredients: [
      "avocados",
      "cocoa or dark chocolate",
      "sweetener",
      "nuts (for topping)"
    ],
    summary:
      "Rich-tasting chocolate mousse made with avocado as the base, giving a vegan dessert that still feels indulgent."
  },
  {
    chapter: "Puddings",
    title: "Flourless Chocolate and Raspberry Pots",
    serves: 4,
    tags: ["gluten-free", "chocolate", "pots"],
    keyIngredients: [
      "dark chocolate",
      "eggs",
      "sugar",
      "raspberries",
      "cream or butter"
    ],
    summary:
      "Individual flourless chocolate puddings hiding raspberries inside – naturally gluten-free and quick to assemble."
  },
  {
    chapter: "Puddings",
    title: "Dark Chocolate and Coffee Mousse",
    serves: "4–6",
    tags: ["chocolate", "coffee", "mousse"],
    keyIngredients: [
      "dark chocolate",
      "coffee",
      "eggs or cream (depending on method)",
      "sugar"
    ],
    summary:
      "Luxurious mousse that leans on dark chocolate and coffee flavours, good both warm and chilled."
  },
  {
    chapter: "Puddings",
    title: "Tiramisu Pots",
    serves: null,
    tags: ["tiramisu", "coffee", "dessert pots"],
    keyIngredients: [
      "espresso",
      "condensed milk",
      "biscuits or sponge",
      "cocoa powder",
      "soft cheese or cream component"
    ],
    summary:
      "Simplified tiramisu made as individual pots, using condensed milk instead of eggs to keep things quick and silky."
  }
];

module.exports = { COOKBOOK_SNIPPETS };
