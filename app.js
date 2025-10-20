
const D = (id, name, city, country, budget, rating, season, acts, img, desc) =>
  ({ id, name, city, country, budget, rating, season, activities: acts, img, desc });

const DESTINATIONS = [
  // ===== USA (Original Links - All Correct) =====
  D(101, "New York City & Manhattan", "New York", "USA", 180, 4.8, "year-round",
    ["cityscape","museums","food","theatre"],
    "https://cdn.surfingtheplanet.com/wp-content/uploads/2017/10/vista-manhattan-isla-staten-nueva-york.jpg?strip=all&lossy=1&ssl=1",
    "Skyscrapers, world-class museums & Lady Liberty."),
  D(102, "Chicago", "Illinois", "USA", 150, 4.6, "summer",
    ["architecture","museums","lakes","food"],
    "https://i.etsystatic.com/10331920/r/il/5c6528/1014801906/il_1588xN.1014801906_sxx7.jpg",
    "Windy city vibes with iconic lakefront trail and unique skyline."),
  D(103, "Los Angeles", "California", "USA", 170, 4.5, "spring",
    ["beach","film","shopping","food"],
    "https://cdn.vox-cdn.com/thumbor/vuYdtK7fWwY7qdGBbwrCXhHapR0=/0x0:5869x3902/1220x813/filters:focal(2466x1482:3404x2420):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65936136/shutterstock_1309273237.0.jpg",
    "Sun, beaches, and Hollywood culture."),
  D(104, "San Francisco", "California", "USA", 190, 4.6, "autumn",
    ["bridges","museums","food","views"],
    "https://media.cnn.com/api/v1/images/stellar/prod/181002113456-01-golden-gate-bridge-restricted.jpg?q=w_1160,c_fill/f_webp",
    "Golden Gate, cable cars, and bay views."),

  D(107, "Washington D.C.", "DC", "USA", 150, 4.5, "spring",
    ["museums","monuments","history"],
    "https://www.arlingtontours.com/wp-content/uploads/2015/10/washington-dc-night-tours.jpg",
    "Free Smithsonian museums and monuments."),
  D(108, "Seattle", "Washington", "USA", 160, 4.4, "summer",
    ["coffee","mountains","markets"],
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Seattle_Center_as_night_falls.jpg/1280px-Seattle_Center_as_night_falls.jpg",
    "Space Needle, Pike Place, and nearby peaks."),

  // ===== Thailand (New Links) =====
  D(201, "Bangkok", "Bangkok", "Thailand", 70, 4.7, "winter",
    ["temples","street food","markets"],
    "https://cdn.craft.cloud/101e4579-0e19-46b6-95c6-7eb27e4afc41/assets/uploads/pois/Bangkok.jpg",
    "Grand Palace, bustling markets, and boat canals."),
  D(202, "Phuket", "Phuket", "Thailand", 75, 4.6, "summer",
    ["beach","snorkeling","nightlife"],
    "https://res.klook.com/image/upload/fl_lossy.progressive,q_60/Mobile/City/p2pfj38lzjf7wsd6gobn.jpg",
    "Turquoise bays and island hopping."),
  D(203, "Chiang Mai", "Chiang Mai", "Thailand", 55, 4.8, "winter",
    ["temples","mountains","night markets"],
    "https://content.r9cdn.net/rimg/dimg/d7/a3/11b8ae51-city-6042-1638dab0fe6.jpg?width=1200&height=630&xhint=1542&yhint=1041&crop=true",
    "Northern temples and lantern-lit streets."),
  D(204, "Krabi", "Krabi", "Thailand", 70, 4.7, "summer",
    ["beach","cliffs","kayaking"],
    "https://res.klook.com/image/upload/fl_lossy.progressive,q_60/Mobile/City/prqmkd8ev05bpf8jeqon.jpg",
    "Limestone cliffs and emerald water."),
  D(205, "Pattaya", "Pattaya", "Thailand", 65, 4.2, "winter",
    ["beach","nightlife","water sports"],
    "https://assets.bucketlistly.blog/sites/5adf778b6eabcc00190b75b1/content_entry5adf77af6eabcc00190b75b6/6590e0f85ff4180002a02e80/files/pattaya-city-best-things-to-do-main-image-hd-op.jpg",
    "Fast coastal city with shows and sports."),
  D(206, "Ayutthaya", "Ayutthaya", "Thailand", 50, 4.5, "winter",
    ["ruins","temples","heritage"],
    "https://www.civitatis.com/f/tailandia/bangkok/guia/ayutthaya-m.jpg",
    "Ancient ruins a short trip from Bangkok."),
 

  // ===== Australia (Aus) (New Links) =====
  D(301, "Sydney", "Sydney", "Aus", 160, 4.7, "summer",
    ["harbour","beach","cityscape"],
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/cf/69/07/sydney-harbour.jpg?w=900&h=500&s=1",
    "Opera House, Harbour Bridge, Bondi."),
  D(302, "Melbourne", "Melbourne", "Aus", 150, 4.7, "autumn",
    ["coffee","laneways","art"],
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Melbourne_skyline_sor.jpg/500px-Melbourne_skyline_sor.jpg",
    "Café culture and street art."),
  D(303, "Brisbane", "Brisbane", "Aus", 140, 4.4, "spring",
    ["river","parks","markets"],
    "https://images.zenu.com.au/1200-min/jskr4zypunonsgrrf005m4nbznia3efp.jpg",
    "Sunny river city near the Gold Coast."),
  D(304, "Perth", "Perth", "Aus", 145, 4.3, "spring",
    ["beaches","wildflowers","cityscape"],
    "https://content.r9cdn.net/rimg/dimg/ba/de/deacb4c5-city-11563-17e9cf1f24e.jpg?crop=true&width=1020&height=498",
    "Indian Ocean sunsets and parks."),
  D(305, "Adelaide", "Adelaide", "Aus", 130, 4.2, "autumn",
    ["wineries","markets","festivals"],
    "https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/depositphotos72249791xl-1727060347596.jpg",
    "Gateway to Barossa Valley."),
  D(306, "Cairns", "Cairns", "Aus", 150, 4.6, "winter",
    ["reef","rainforest","diving"],
    "https://greatbarrierreef.org/wp-content/uploads/2022/06/Cairns-Australia.jpg",
    "Jump-off to the Great Barrier Reef."),


  // ===== New Zealand (NZ) (New Links) =====
  D(401, "Auckland", "Auckland", "NZ", 150, 4.5, "summer",
    ["harbour","volcanoes","food"],
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Auckland_skyline_-_May_2024_%282%29.jpg/330px-Auckland_skyline_-_May_2024_%282%29.jpg",
    "Sky Tower views and island ferries."),
  D(402, "Wellington", "Wellington", "NZ", 140, 4.6, "summer",
    ["museums","coffee","film"],
    "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/179000/179180-Wellington.jpg",
    "Compact capital with harbour hills."),
  D(403, "Queenstown", "Queenstown", "NZ", 160, 4.9, "winter",
    ["adventure","hiking","lakes"],
    "https://upload.wikimedia.org/wikipedia/commons/c/c9/Queenstown_1_%288168013172%29.jpg",
    "Adventure capital by Lake Wakatipu."),
  D(404, "Christchurch", "Christchurch", "NZ", 140, 4.3, "spring",
    ["gardens","architecture","tram"],
    "https://res.cloudinary.com/activeadventures/image/upload/c_scale,w_736/f_auto/q_auto/v1744257935/iiiaanp64cmru9utcpb3?_a=BAAAV6DQ",
    "Garden city rebuilding with style."),
  D(405, "Rotorua", "Rotorua", "NZ", 130, 4.6, "autumn",
    ["geysers","maori culture","lakes"],
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQopiREV70qNnHAF9YzqX_lORHrPqYwA8hFaA&s",
    "Thermal wonders and Māori shows."),
  D(406, "Dunedin", "Dunedin", "NZ", 130, 4.2, "summer",
    ["wildlife","coast","heritage"],
    "https://ychef.files.bbci.co.uk/624x351/p0g2rnk0.jpg",
    "Otago Peninsula wildlife and bays."),


  // ===== Spain (New Links) =====
  D(501, "Madrid", "Madrid", "Spain", 120, 4.7, "spring",
    ["museums","plazas","food"],
    "https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/bltdb42d0af0dddb0dd/65006732539fa162b64ae755/0_-_BCC-2023-MADRID-LANDMARKS-0.webp?fit=crop&disable=upscale&auto=webp&quality=60&crop=smart",
    "Royal palace, Prado, and tapas."),
  D(502, "Barcelona", "Barcelona", "Spain", 130, 4.8, "summer",
    ["architecture","beach","food"],
    "https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/16013556/shutterstock_785442694.jpg?quality=90&strip=all&crop=16.243224932249%2C0%2C67.513550135501%2C100&w=2400",
    "Gaudí icons and Mediterranean vibe."),
  D(503, "Seville", "Seville", "Spain", 100, 4.7, "spring",
    ["flamenco","palaces","gardens"],
    "https://lp-cms-production.imgix.net/2025-06/GettyImages-2197733609.jpg?auto=format,compress&q=72&w=1440&h=810&fit=crop",
    "Alcázar courtyards and flamenco."),
  D(504, "Granada", "Granada", "Spain", 95, 4.8, "spring",
    ["palaces","mountain views","history"],
    "https://lp-cms-production.imgix.net/2025-07/GettyImages-452680217.jpg?auto=compress&format=auto&fit=crop&q=50&w=1200&h=800",
    "The Alhambra and Sierra Nevada."),
  D(505, "Valencia", "Valencia", "Spain", 105, 4.6, "summer",
    ["beach","architecture","food"],
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ7uLlNBLQ04brSliuArLY9c1CBtFWqaLq5g&s",
    "Paella, beaches, and the City of Arts."),
  D(506, "Bilbao", "Bilbao", "Spain", 110, 4.4, "autumn",
    ["museums","food","architecture"],
    "https://static01.nyt.com/images/2015/05/24/travel/24HOURS1/24HOURS1-superJumbo.jpg",
    "Guggenheim and pintxos bars."),
 

  // ===== India (New Links) =====
  D(601, "Mumbai", "Maharashtra", "India", 80, 4.5, "winter",
    ["cityscape","street food","iconic skyline"],
    "https://cdn.serc.carleton.edu/images/integrate/teaching_materials/coastlines/student_materials/bandra-worli_sealink_skyline_mumbai_14732640231605846288_650.webp",
    "Financial capital  of India and Skyline view from Marine Drive ."),
  D(602, "Akshardham Temple", "New Delhi", "India", 55, 4.7, "autumn",
    ["temples","culture","architecture"],
    "https://cdn.travelersuniverse.com/media/from-delhi-akshardham-tour-with-light-water-show-t744017-1.jpg",
    "Grand temple complex in Delhi."),
  D(603, "Goa", "Goa", "India", 70, 4.6, "winter",
    ["beach","nightlife","seafood"],
    "https://www.stayz.com.au/holiday-ideas/wp-content/uploads/77hqaJ8SLZH41m6zSIX5Eh/edbb47e0127aee0e3e5e6101545a9d47/top_goa_beaches_-_Anjuna_Beach__Goa_-_HomeAway.jpg",
    "Golden beaches and shacks."),
  D(604, "Jaipur", "Rajasthan", "India", 50, 4.6, "winter",
    ["forts","palaces","heritage"],
    "https://www.andbeyond.com/wp-content/uploads/sites/5/Amber-fort-jaipur-Rajasthan-India.jpg",
    "Pink City with Amber Fort."),

  D(606, "Statue of Unity", "Gujarat", "India", 65, 4.7, "winter",
    ["backwaters","houseboat","nature"],
    "https://artincontext.org/wp-content/uploads/2022/04/Biggest-Statue-in-the-World.jpg",
    "Tallest statue in the world."),
  D(607, "Ladakh", "State of Jammu Kashmir", "India", 85, 4.8, "summer",
    ["mountains","monasteries","lakes"],
    "https://cdn.shortpixel.ai/spai/q_lossy+ret_img+to_auto/www.alpineascents.com/wp-content/uploads/2017/09/ladakh-trek-e1635267234139.jpg",
    "High-altitude moonscapes and passes."),
  

  // ===== Japan (New Links) =====
  D(701, "Tokyo", "Tokyo", "Japan", 140, 4.9, "spring",
    ["cityscape","food","tech"],
    "https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_3840,h_1920,g_auto/dpr_auto/f_auto/q_auto:eco/v1/gettyimages-1390815938?_a=BAVAZGID0",
    "Neon streets, sushi bars, shrines."),
  D(702, "Kyoto", "Kyoto", "Japan", 120, 4.9, "autumn",
    ["temples","gardens","culture"],
    "https://andershusa.com/wp-content/uploads/2024/09/feature-where-to-eat-in-kyoto-japan-city-guide-and-map-of-the-best-restaurants-review-food-foodie-eat-eating-out-dine-dining-top-spots-places-tips-recommendation-travel-1-2023.jpg",
    "Torii gates and tea houses."),
  D(703, "Osaka", "Osaka", "Japan", 120, 4.6, "spring",
    ["food","castles","markets"],
    "https://cdn.cheapoguides.com/wp-content/uploads/sites/3/2020/06/osaka-dotonbori-iStock-1138049211-1024x683.jpg",
    "Street food heaven and lively Dotonbori."),
  D(704, "Hiroshima", "Hiroshima", "Japan", 115, 4.6, "spring",
    ["history","memorials","islands"],
    "https://japanspecialist.com/documents/d/japanspecialist/thumbnail-1-hiroshima-day-trip",
    "Peace Park and Miyajima torii."),
  D(705, "Sapporo", "Sapporo", "Japan", 110, 4.5, "winter",
    ["snow","beer","parks"],
    "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/499000/499996-sapporo-and-vicinity.jpg",
    "Snow festival and Hokkaido cuisine."),
  D(706, "Nara", "Nara", "Japan", 100, 4.6, "autumn",
    ["temples","deer park","heritage"],
    "https://lp-cms-production.imgix.net/image_browser/shutterstockRF_168163925.jpg?auto=compress&format=auto&fit=crop&q=50&w=1200&h=800",
    "Friendly deer and giant Buddha."),


  // ===== Germany (New Links) =====
  D(801, "Berlin", "Berlin", "Germany", 130, 4.7, "summer",
    ["museums","history","nightlife"],
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Museumsinsel_Berlin_Juli_2021_1_%28cropped%29_b.jpg/330px-Museumsinsel_Berlin_Juli_2021_1_%28cropped%29_b.jpg",
    "Street art and storied landmarks."),
  D(802, "Munich", "Munich", "Germany", 140, 4.7, "autumn",
    ["beer","palaces","parks"],
    "https://images.goway.com/production/featured_images/germany_munich_marienplatz_AdobeStock_114463007.jpeg?VersionId=OizjIJHh5SYa7urFj0oumvSJdPmBFCXg",
    "Oktoberfest and Bavarian charm."),
  D(803, "Hamburg", "Hamburg", "Germany", 130, 4.5, "summer",
    ["harbour","music","canals"],
    "https://www.royalcaribbean.com/media-assets/pmc/content/dam/excalibur/digital-destinations/port-destinations/ports-of-call/hamburg-germany-ham/stock-photo-HAM-hamburg-germany-port-view-speicherstadt-mid-day-748801591.jpg?w=1024",
    "Elbphilharmonie and Speicherstadt."),
  D(804, "Frankfurt", "Frankfurt", "Germany", 135, 4.3, "spring",
    ["finance","museums","skyline"],
    "https://www.travelcenter.uk/blog/wp-content/uploads/2018/03/trip-to-Frankfurt.jpg",
    "Riverside museums and towers."),
  D(805, "Cologne", "Cologne", "Germany", 120, 4.5, "spring",
    ["cathedral","river","museums"],
    "https://i0.wp.com/roamandthrive.com/wp-content/uploads/2022/12/DSC01840.jpg",
    "Gothic cathedral on the Rhine."),
  D(806, "Stuttgart", "Stuttgart", "Germany", 125, 4.3, "summer",
    ["cars","museums","parks"],
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Neues_Schloss_Schlossplatzspringbrunnen_Schlossplatz_Stuttgart_2015_01.jpg/330px-Neues_Schloss_Schlossplatzspringbrunnen_Schlossplatz_Stuttgart_2015_01.jpg",
    "Mercedes and Porsche museums."),
  

  // ===== France (New Links) =====
  D(901, "Paris", "Paris", "France", 150, 4.9, "spring",
    ["museums","cafés","architecture"],
    "https://cdn.pixabay.com/photo/2018/04/25/09/26/eiffel-tower-3349075_1280.jpg",
    "Eiffel Tower, Louvre, and Seine."),
  D(902, "Lyon", "Lyon", "France", 130, 4.6, "autumn",
    ["food","old town","rivers"],
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/da/01/47/vieux-lyon.jpg?w=900&h=500&s=1",
    "Gastronomy capital with traboules."),
  D(903, "Nice", "Nice", "France", 140, 4.6, "summer",
    ["beach","promenade","museums"],
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkU7n_RGlmhSg-g4LRnziwyKyzFRY3grhmSA&s",
    "Azure coast and old town lanes."),
  D(904, "Marseille", "Marseille", "France", 120, 4.3, "summer",
    ["harbour","calanques","food"],
    "https://cdn.britannica.com/73/256373-050-DBD8718C/marseille-france-port.jpg",
    "Mediterranean port with cliffs nearby."),
  D(905, "Bordeaux", "Bordeaux", "France", 125, 4.5, "autumn",
    ["wine","architecture","river"],
    "https://passportmagazine.com/wp-content/uploads/2021/03/Opening-Spread-Place-de-la-Bourse-by-Alexander-Demyanenko-585x390.jpg",
    "Vineyards and elegant boulevards."),
  D(906, "Toulouse", "Toulouse", "France", 120, 4.4, "spring",
    ["aerospace","brick","canals"],
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Toulouse_-_vue_du_Vieux_Toulouse_depuis_St_Sernin_06.jpg/250px-Toulouse_-_vue_du_Vieux_Toulouse_depuis_St_Sernin_06.jpg",
    "Pink city on the Garonne."),
  

  // ===== Brazil (New Links) =====
  D(1001, "Rio de Janeiro", "Rio", "Brazil", 100, 4.7, "summer",
    ["beach","viewpoints","nightlife"],
    "https://www.planetware.com/photos-large/BRA/brazil-rio-cristo-redentor.jpg",
    "Sugarloaf, Christ, and Copacabana."),
  D(1002, "São Paulo", "Sao Paulo", "Brazil", 95, 4.5, "autumn",
    ["museums","food","nightlife"],
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/88/aa/37/caption.jpg?w=1400&h=1400&s=1",
    "Megacity energy and gastronomy."),
  D(1003, "Salvador", "Salvador", "Brazil", 90, 4.6, "summer",
    ["heritage","beach","music"],
    "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/11/08/11/salvador-city-scape.jpg?width=1200&height=630&fit=crop",
    "Pelourinho colors and rhythms."),
  D(1004, "Brasília", "Brasilia", "Brazil", 90, 4.2, "winter",
    ["architecture","modernism","monuments"],
    "https://upload.wikimedia.org/wikipedia/commons/2/2d/Planalto_Central_%28cropped%29.jpg",
    "Oscar Niemeyer’s modernist capital."),
  D(1005, "Florianópolis", "Florianopolis", "Brazil", 95, 4.5, "summer",
    ["beach","surf","nature"],
    "https://upload.wikimedia.org/wikipedia/commons/0/09/Morro_da_Cruz%2C_Florian%C3%B3polis_-_SC%2C_Brazil_-_panoramio_%28cropped%29.jpg",
    "Island city with lagoons and dunes."),
  D(1006, "Manaus", "Manaus", "Brazil", 85, 4.3, "autumn",
    ["rainforest","river","theatre"],
    "https://ca-times.brightspotcdn.com/dims4/default/87a827e/2147483647/strip/false/crop/2048x1253+0+0/resize/1486x909!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F70%2F3a%2Fe66b17abb43b2472e85b0c7e0b62%2Flat-tr-worldcupbrazil-wre0016194654-20131127",
    "Amazon gateway with opera house."),


  // ===== China (New Links) =====
  D(1101, "Beijing", "Beijing", "China", 120, 4.7, "autumn",
    ["palaces","heritage","food"],
    "https://images.goway.com/production/styles/hero_s1_2xl/s3/hero/iStock-1489389904.jpg.webp?VersionId=DoiJjBc5SYIlBSSdHnsgEXcQ3F46RlEV&itok=zz4QV4OD",
    "Forbidden City and Great Wall."),
  D(1102, "Shanghai", "Shanghai", "China", 130, 4.6, "autumn",
    ["cityscape","museums","food"],
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Huangpu_Park_20124-Shanghai_%2832208802494%29.jpg/330px-Huangpu_Park_20124-Shanghai_%2832208802494%29.jpg",
    "Bund skyline and lanes of the past."),
  D(1103, "Wuhan", "Wuhan", "China", 100, 4.6, "spring",
    ["terracotta","walls","noodles"],
    "https://i.guim.co.uk/img/media/8c752bf967920afa9e9f4887f2cb52bf430fa3d1/0_177_4631_2778/master/4631.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=c19c037c0ce0e648eca17c1aaeda6f3b",
    "Terracotta Army and city walls."),
  D(1104, "Chengdu", "Chengdu", "China", 100, 4.6, "autumn",
    ["pandas","spicy food","teahouses"],
    "https://media.cntraveler.com/photos/5b1a9b8408618014c567f2f2/16:9/w_4000,h_2250,c_limit/Chengdu%20China_GettyImages-510901343.jpg",
    "Panda bases and hotpot capital."),
  D(1105, "Guilin", "Guilin", "China", 95, 4.7, "spring",
    ["karst","river","views"],
    "https://cdn.audleytravel.com/1050/750/79/15996504-guilin-landscape.webp",
    "Li River among karst peaks."),
  D(1106, "Hangzhou", "Hangzhou", "China", 105, 4.5, "spring",
    ["lakes","tea","pagodas"],
    "https://assets.executivecentre.com/assets/2018_10_4_Blog-Header.jpg",
    "West Lake gardens and tea hills."),
 

  
];

/* ---------- Element refs (some only on index) ---------- */
const els = {
  results: document.getElementById("results"),
  resultsCount: document.getElementById("resultsCount"),
  regionBox: document.getElementById("regionCheckboxes"), // static list on index
  activityBox: document.getElementById("activityCheckboxes"),
  search: document.getElementById("search"),
  budgetMax: document.getElementById("budgetMax"),
  budgetMaxOutput: document.getElementById("budgetMaxOutput"),
  season: document.getElementById("season"),
  favoritesOnly: document.getElementById("favoritesOnly"),
  sortBy: document.getElementById("sortBy"),
  clearFilters: document.getElementById("clearFilters"),
  shareLink: document.getElementById("shareLink"),
  form: document.getElementById("filtersForm"),
};

/* ---------- State ---------- */
const STATE = {
  search: "",
  selectedCountries: new Set(),   // matches Region checkbox values
  selectedActivities: new Set(),
  budgetMax: Number(els.budgetMax?.value ?? 500),
  season: "any",
  favoritesOnly: false,
  sortBy: "name-asc",
  favorites: new Set(readFavorites())
};

function readFavorites(){ try { return JSON.parse(localStorage.getItem("favorites:travel")||"[]"); } catch { return []; } }
function writeFavorites(){ localStorage.setItem("favorites:travel", JSON.stringify([...STATE.favorites])); }

const by = k => (a,b)=>(a[k]>b[k])-(a[k]<b[k]);
const cap = s => s ? s[0].toUpperCase()+s.slice(1) : s;
const uniq = a => [...new Set(a)];

/* ---------- Activities facet (build from dataset) ---------- */
function buildActivities(){ return uniq(DESTINATIONS.flatMap(d=>d.activities)).sort(); }
function renderActivities(){
  if (!els.activityBox) return;
  els.activityBox.innerHTML = "";
  buildActivities().forEach(act=>{
    const id = `activity-${act}`.replace(/\s+/g,"-");
    const label = document.createElement("label");
    label.className = "checkbox-pill";
    label.setAttribute("for", id);

    const input = document.createElement("input");
    input.type="checkbox"; input.id=id; input.name="activity"; input.value=act;

    const span=document.createElement("span"); span.textContent=act;
    const count=document.createElement("span"); count.className="checkbox-count";
    count.textContent = DESTINATIONS.filter(d=>d.activities.includes(act)).length;

    label.append(input, span, count);
    els.activityBox.appendChild(label);

    input.addEventListener("change", ()=>{
      input.checked ? STATE.selectedActivities.add(act) : STATE.selectedActivities.delete(act);
      update();
    });
  });
}

/* ---------- Fill counts on static Region pills (index) ---------- */
function fillCountryCounts(){
  if (!els.regionBox) return;
  const counts = {};
  DESTINATIONS.forEach(d => counts[d.country] = (counts[d.country]||0)+1);
  els.regionBox.querySelectorAll('label.checkbox-pill').forEach(lbl=>{
    const input = lbl.querySelector('input[name="region"]');
    const counter = lbl.querySelector('.checkbox-count');
    const c = counts[input.value] || 0;
    if (counter) counter.textContent = c ? String(c) : "";
  });
}

/* ---------- Filtering & Sorting ---------- */
function passFilters(d){
  if (STATE.search){
    const q = STATE.search.toLowerCase();
    if (!(`${d.name} ${d.city} ${d.country}`.toLowerCase().includes(q))) return false;
  }
  if (STATE.selectedCountries.size>0 && !STATE.selectedCountries.has(d.country)) return false;
  if (STATE.selectedActivities.size>0){
    for (const a of STATE.selectedActivities) if (!d.activities.includes(a)) return false;
  }
  if (d.budget > STATE.budgetMax) return false;
  if (STATE.season !== "any" && d.season !== STATE.season && d.season !== "year-round") return false;
  if (STATE.favoritesOnly && !STATE.favorites.has(d.id)) return false;
  return true;
}
function applySort(list){
  const [k,dir] = STATE.sortBy.split("-");
  const arr=[...list];
  if (k==="name") arr.sort((a,b)=>a.name.localeCompare(b.name));
  if (k==="budget") arr.sort(by("budget"));
  if (k==="rating") arr.sort(by("rating"));
  if (dir==="desc") arr.reverse();
  return arr;
}

/* ---------- Rendering (card boxes) ---------- */
function renderResults(items){
  if (!els.results) return;
  els.results.setAttribute("aria-busy","true");
  els.results.innerHTML = "";

  if (items.length===0){
    els.results.innerHTML = `
      <article class="card">
        <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1600&auto=format&fit=crop" alt="">
        <div class="body">
          <h3>No matches</h3>
          <p class="meta">Try widening your budget, removing activities, or clearing filters.</p>
        </div>
      </article>`;
    if (els.resultsCount) els.resultsCount.textContent = "0 results";
    els.results.setAttribute("aria-busy","false");
    return;
  }

  const frag = document.createDocumentFragment();
  items.forEach(d=>{
    const card=document.createElement("article");
    card.className="card";
    card.innerHTML=`
      <img src="${d.img}" alt="${d.name}">
      <div class="body">
        <h3>${d.name}</h3>
        <p class="meta">${d.city} • ${d.country}</p>
        <p class="desc">${d.desc}</p>
        <div class="badges">${d.activities.map(a=>`<span class="badge">${a}</span>`).join("")}</div>
        <p class="meta">Budget: <span class="price">$${d.budget}/day</span> • Rating: ${d.rating.toFixed(1)}⭐ · Best: ${cap(d.season)}</p>
        <div class="actions">
          <button type="button" class="fav" aria-pressed="${STATE.favorites.has(d.id)}" data-id="${d.id}">
            ${STATE.favorites.has(d.id) ? "★ Favorited" : "☆ Favorite"}
          </button>
          <button type="button" class="copy" data-name="${d.name}">Copy name</button>
        </div>
      </div>`;
    frag.appendChild(card);
  });
  els.results.appendChild(frag);
  if (els.resultsCount) els.resultsCount.textContent = `${items.length} result${items.length===1?"":"s"}`;
  els.results.setAttribute("aria-busy","false");

  // actions
  els.results.querySelectorAll("button.fav").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const id=Number(btn.dataset.id);
      if (STATE.favorites.has(id)){ STATE.favorites.delete(id); btn.setAttribute("aria-pressed","false"); btn.textContent="☆ Favorite"; }
      else { STATE.favorites.add(id); btn.setAttribute("aria-pressed","true"); btn.textContent="★ Favorited"; }
      writeFavorites();
    });
  });
  els.results.querySelectorAll("button.copy").forEach(btn=>{
    btn.addEventListener("click", async ()=>{
      try{ await navigator.clipboard.writeText(btn.dataset.name); btn.textContent="Copied!"; setTimeout(()=>btn.textContent="Copy name",900); }
      catch{ alert("Copy failed"); }
    });
  });
}

/* ---------- URL sync ---------- */
function stateToQuery(){
  const p=new URLSearchParams();
  if (STATE.search) p.set("q", STATE.search);
  if (STATE.selectedCountries.size) p.set("countries", [...STATE.selectedCountries].join(","));
  if (STATE.selectedActivities.size) p.set("acts", [...STATE.selectedActivities].join(","));
  const maxDefault = Number(els.budgetMax?.max ?? 500);
  if (STATE.budgetMax !== maxDefault) p.set("max", String(STATE.budgetMax));
  if (STATE.season !== "any") p.set("season", STATE.season);
  if (STATE.favoritesOnly) p.set("fav","1");
  if (STATE.sortBy !== "name-asc") p.set("sort", STATE.sortBy);
  return p.toString();
}
function applyQueryToState(url=location.href){
  const p=new URL(url, location.href).searchParams;
  STATE.search = p.get("q") || "";
  (p.get("countries")||"").split(",").filter(Boolean).forEach(c=>STATE.selectedCountries.add(c));
  (p.get("acts")||"").split(",").filter(Boolean).forEach(a=>STATE.selectedActivities.add(a));
  const max=Number(p.get("max")); if(!Number.isNaN(max)&&max>0) STATE.budgetMax=max;
  STATE.season = p.get("season") || "any";
  STATE.favoritesOnly = p.get("fav")==="1";
  STATE.sortBy = p.get("sort") || "name-asc";
}

/* ---------- Events ---------- */
function wireRegionEvents(){
  if (!els.regionBox) return;
  els.regionBox.querySelectorAll('input[name="region"]').forEach(input=>{
    input.addEventListener("change", ()=>{
      input.checked ? STATE.selectedCountries.add(input.value) : STATE.selectedCountries.delete(input.value);
      update();
    });
  });
}
function wireOtherEvents(){
  els.search && els.search.addEventListener("input", ()=>{ STATE.search = els.search.value.trim(); update(); });
  els.budgetMax && els.budgetMax.addEventListener("input", ()=>{
    STATE.budgetMax = Number(els.budgetMax.value);
    if (els.budgetMaxOutput) els.budgetMaxOutput.textContent = `$${STATE.budgetMax}`;
    update();
  });
  els.season && els.season.addEventListener("change", ()=>{ STATE.season = els.season.value; update(); });
  els.favoritesOnly && els.favoritesOnly.addEventListener("change", ()=>{ STATE.favoritesOnly = els.favoritesOnly.checked; update(); });
  els.sortBy && els.sortBy.addEventListener("change", ()=>{ STATE.sortBy = els.sortBy.value; update(); });

  els.clearFilters && els.clearFilters.addEventListener("click", ()=>{
    els.form?.reset();
    STATE.search=""; STATE.selectedCountries.clear(); STATE.selectedActivities.clear();
    STATE.budgetMax = Number(els.budgetMax?.max ?? 500);
    if (els.budgetMax) els.budgetMax.value = String(STATE.budgetMax);
    if (els.budgetMaxOutput) els.budgetMaxOutput.textContent = `$${STATE.budgetMax}`;
    STATE.season="any"; STATE.favoritesOnly=false; STATE.sortBy="name-asc";
    update();
  });

  els.shareLink && els.shareLink.addEventListener("click", async ()=>{
    const q=stateToQuery();
    const url=q?`${location.origin}${location.pathname}?${q}`:`${location.origin}${location.pathname}`;
    try{ await navigator.clipboard.writeText(url); els.shareLink.textContent="Link copied!"; setTimeout(()=>els.shareLink.textContent="Copy link",1000); }
    catch{ alert("Copy failed"); }
  });

  els.form && els.form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const q=stateToQuery();
    location.assign(`results.html${q?`?${q}`:""}`);
  });
}

/* ---------- Update & Init ---------- */
function update(){
  if (els.budgetMaxOutput) els.budgetMaxOutput.textContent = `$${STATE.budgetMax}`;
  const filtered = DESTINATIONS.filter(passFilters);
  const sorted = applySort(filtered);
  renderResults(sorted);
}
function init(){
  renderActivities();
  fillCountryCounts();
  applyQueryToState();

  // Reflect pre-selected filters (if landing directly on results.html with query)
  els.regionBox?.querySelectorAll('input[name="region"]').forEach(i=>{ i.checked = STATE.selectedCountries.has(i.value); });
  els.activityBox?.querySelectorAll('input[name="activity"]').forEach(i=>{ i.checked = STATE.selectedActivities.has(i.value); });

  wireRegionEvents();
  wireOtherEvents();
  update();
}
document.addEventListener("DOMContentLoaded", init);
