/*
 * Tout le contenu du site est ici : textes en trois langues, carte, horaires,
 * coordonnées. Le client peut modifier ce fichier sans toucher au reste —
 * c'est ce que demandent la plupart des annonces (« modifier moi-même les
 * textes et les prix »).
 *
 * Établissement FICTIF : site de démonstration d'un portfolio. Aucune
 * coordonnée ci-dessous n'est réelle.
 */
window.SITE = {
  config: {
    name: "Dar Zellige",
    // Laisser vide en démonstration : le bouton ouvre WhatsApp sans
    // destinataire. Pour un vrai client : indicatif sans « + », ex. "2126XXXXXXXX".
    whatsapp: "",
    phone: "05 35 00 00 00",
    email: "contact@dar-zellige.example",
    mapsQuery: "",
    // Photos du client : chemin relatif, ex. "assets/photos/salle.webp".
    // Une case vide affiche le motif de zellige à la place.
    photos: {
      hero: "assets/photos/hero.webp",
      histoire: "assets/photos/histoire.webp",
      // Chaque case : une photo (src), une légende, et le ton du motif affiché
      // tant que la photo manque (zellige, terracotta, safran, sable).
      galerie: [
        { src: "assets/photos/patio.webp", tone: "zellige", caption: { fr: "Le patio", en: "The courtyard", ar: "الصحن" } },
        { src: "assets/photos/tajine.webp", tone: "terracotta", caption: { fr: "Le tajine, à la sortie du feu", en: "Tagine, straight off the fire", ar: "الطاجين حين يُرفع عن النار" } },
        { src: "assets/photos/the.webp", tone: "saffron", caption: { fr: "Le thé de l'après-midi", en: "Afternoon tea", ar: "أتاي العصر" } },
        { src: "assets/photos/terrasse.webp", tone: "sand", caption: { fr: "La terrasse sur les toits", en: "The rooftop terrace", ar: "السطح" } },
        { src: "assets/photos/epices.webp", tone: "terracotta", caption: { fr: "Les épices du marché", en: "Spices from the market", ar: "توابل السوق" } },
        { src: "assets/photos/pastilla.webp", tone: "zellige", caption: { fr: "La pastilla de Fès", en: "Fez pastilla", ar: "بسطيلة فاس" } }
      ]
    },
    currency: { fr: "DH", en: "MAD", ar: "درهم" }
  },

  hours: [
    { days: { fr: "Mardi – Jeudi", en: "Tuesday – Thursday", ar: "الثلاثاء – الخميس" }, time: ["12:00 – 15:00", "19:00 – 23:00"] },
    { days: { fr: "Vendredi – Dimanche", en: "Friday – Sunday", ar: "الجمعة – الأحد" }, time: "12:00 – 23:30" },
    { days: { fr: "Lundi", en: "Monday", ar: "الاثنين" }, time: { fr: "Fermé", en: "Closed", ar: "مغلق" } }
  ],

  menu: [
    {
      id: "entrees",
      title: { fr: "Entrées", en: "Starters", ar: "المقبلات" },
      items: [
        { name: { fr: "Harira de la maison", en: "House harira", ar: "حريرة الدار" },
          desc: { fr: "Tomate, lentilles, pois chiches, coriandre fraîche, dattes à côté.", en: "Tomato, lentils, chickpeas, fresh coriander, dates on the side.", ar: "طماطم، عدس، حمص، كزبرة طرية، مع التمر." },
          price: 45, tags: ["veg"] },
        { name: { fr: "Zaalouk & taktouka", en: "Zaalouk & taktouka", ar: "زعلوك وتكتوكة" },
          desc: { fr: "Aubergine fumée, poivrons grillés, pain khobz du four.", en: "Smoked aubergine, grilled peppers, oven-baked khobz.", ar: "باذنجان مدخن، فلفل مشوي، خبز الفرن." },
          price: 55, tags: ["veg"] },
        { name: { fr: "Briouates au fromage frais", en: "Fresh cheese briouates", ar: "بريوات بالجبن الطري" },
          desc: { fr: "Feuille de warqa, menthe, miel d'oranger.", en: "Warqa pastry, mint, orange-blossom honey.", ar: "ورقة، نعناع، عسل زهر الليمون." },
          price: 60, tags: ["veg"] }
      ]
    },
    {
      id: "tajines",
      title: { fr: "Tajines", en: "Tagines", ar: "الطواجن" },
      items: [
        { name: { fr: "Poulet, citron confit & olives", en: "Chicken, preserved lemon & olives", ar: "دجاج بالليمون المصبّر والزيتون" },
          desc: { fr: "Gingembre, safran de Taliouine, olives violettes.", en: "Ginger, Taliouine saffron, purple olives.", ar: "زنجبيل، زعفران تالوين، زيتون بنفسجي." },
          price: 120 },
        { name: { fr: "Agneau aux pruneaux & amandes", en: "Lamb with prunes & almonds", ar: "لحم الغنم بالبرقوق واللوز" },
          desc: { fr: "Cuisson lente, cannelle, sésame grillé.", en: "Slow-cooked, cinnamon, toasted sesame.", ar: "طهي بطيء، قرفة، سمسم محمص." },
          price: 150 },
        { name: { fr: "Kefta, tomate & œuf", en: "Kefta, tomato & egg", ar: "كفتة بالطماطم والبيض" },
          desc: { fr: "Bœuf haché aux herbes, cumin, piment doux.", en: "Herbed minced beef, cumin, mild chilli.", ar: "لحم بقري مفروم بالأعشاب، كمون، فلفل حلو." },
          price: 110 },
        { name: { fr: "Tajine de légumes du marché", en: "Market vegetable tagine", ar: "طاجين خضر السوق" },
          desc: { fr: "Selon l'arrivage, ras el-hanout de la maison.", en: "Depending on the day's market, house ras el-hanout.", ar: "حسب ما يصل من السوق، مع راس الحانوت الخاص بالدار." },
          price: 95, tags: ["veg"] }
      ]
    },
    {
      id: "couscous",
      title: { fr: "Couscous & pastilla", en: "Couscous & pastilla", ar: "الكسكس والبسطيلة" },
      items: [
        { name: { fr: "Couscous aux sept légumes", en: "Seven-vegetable couscous", ar: "كسكس بالخضر السبع" },
          desc: { fr: "Le vendredi, comme à la maison. Semoule roulée à la main.", en: "On Fridays, as at home. Hand-rolled semolina.", ar: "يوم الجمعة، كما في البيت. سميد مفتول باليد." },
          price: 130, tags: ["veg"] },
        { name: { fr: "Pastilla au pigeon", en: "Pigeon pastilla", ar: "بسطيلة الحمام" },
          desc: { fr: "Amandes, cannelle, sucre glace — la recette de Fès.", en: "Almonds, cinnamon, icing sugar — the Fez recipe.", ar: "لوز، قرفة، سكر ناعم — وصفة فاس." },
          price: 160 },
        { name: { fr: "Pastilla aux fruits de mer", en: "Seafood pastilla", ar: "بسطيلة السمك" },
          desc: { fr: "Crevettes, calamar, vermicelle, chermoula.", en: "Prawns, squid, vermicelli, chermoula.", ar: "روبيان، حبار، شعرية، شرمولة." },
          price: 170 }
      ]
    },
    {
      id: "douceurs",
      title: { fr: "Douceurs & thé", en: "Sweets & tea", ar: "الحلويات والأتاي" },
      items: [
        { name: { fr: "Pastilla au lait", en: "Milk pastilla", ar: "بسطيلة بالحليب" },
          desc: { fr: "Feuilles croustillantes, crème à la fleur d'oranger.", en: "Crisp pastry sheets, orange-blossom cream.", ar: "أوراق مقرمشة، كريمة بماء الزهر." },
          price: 50, tags: ["veg"] },
        { name: { fr: "Assortiment de cornes de gazelle", en: "Gazelle horns assortment", ar: "تشكيلة كعب غزال" },
          desc: { fr: "Pâte d'amande, eau de fleur d'oranger.", en: "Almond paste, orange-blossom water.", ar: "معجون اللوز، ماء الزهر." },
          price: 45, tags: ["veg"] },
        { name: { fr: "Thé à la menthe", en: "Mint tea", ar: "أتاي بالنعناع" },
          desc: { fr: "Servi en théière, versé de haut, à volonté.", en: "Served in a teapot, poured from high, refilled at will.", ar: "في البرّاد، يُصبّ من الأعلى، بلا حساب." },
          price: 25, tags: ["veg"] }
      ]
    }
  ],

  // Facultatif : avis RÉELS du client, avec son accord. Vide par défaut :
  // un site de démonstration n'invente pas d'avis. La section est masquée
  // tant que la liste est vide.
  reviews: [],

  // Photos de démonstration : Wikimedia Commons. Les licences CC BY et CC BY-SA
  // exigent de créditer l'auteur — fait dans le pied de page. Pour un vrai
  // client, remplacer par ses propres photos et vider cette liste.
  credits: [
    {"author": "Dahbi fatima zahrae", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0", "source": "https://commons.wikimedia.org/wiki/File:Traditional_Moroccan_Riad_Courtyard_with_Pool_in_Fez,_Morocco.jpg"},
    {"author": "Dahbi fatima zahrae", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0", "source": "https://commons.wikimedia.org/wiki/File:Traditional_Moroccan_Riad_Courtyard_with_Ornate_Architecture_in_Fez.jpg"},
    {"author": "Arnaud 25", "license": "CC BY-SA 3.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0", "source": "https://commons.wikimedia.org/wiki/File:Riad_Maroc_034.JPG"},
    {"author": "Michal Osmenda from Brussels, Belgium", "license": "CC BY-SA 2.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0", "source": "https://commons.wikimedia.org/wiki/File:Moroccan_food_and_drink_-_tajine_(5368126576).jpg"},
    {"author": "Adam Harangozó", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0", "source": "https://commons.wikimedia.org/wiki/File:Mint_tea,_Marrakesh.jpg"},
    {"author": "Arnaud 25", "license": "CC BY-SA 3.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0", "source": "https://commons.wikimedia.org/wiki/File:Riad_Maroc_022.JPG"},
    {"author": "Weetjesman", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0", "source": "https://commons.wikimedia.org/wiki/File:Moroccan_Pastilla.jpg"},
    {"author": "Donar Reiskoffer", "license": "CC BY 3.0", "licenseUrl": "https://creativecommons.org/licenses/by/3.0", "source": "https://commons.wikimedia.org/wiki/File:Morocco,_Spices.JPG"}
  ],

  i18n: {
    fr: {
      "meta.title": "Dar Zellige — Cuisine marocaine dans la médina",
      "meta.desc": "Restaurant marocain : tajines, couscous du vendredi, pastilla de Fès. Réservation par WhatsApp.",
      "skip": "Aller au contenu",
      "nav.histoire": "La maison",
      "nav.carte": "La carte",
      "nav.experience": "L'expérience",
      "nav.infos": "Infos pratiques",
      "nav.reserver": "Réserver",
      "nav.menuToggle": "Ouvrir le menu",
      "hero.title": "La table d'une maison de la médina",
      "hero.lead": "Des recettes de famille, le marché du matin et le thé versé de haut. Sous un plafond de cèdre, autour d'un patio de zellige.",
      "hero.ctaReserve": "Réserver par WhatsApp",
      "hero.ctaMenu": "Voir la carte",
      "histoire.title": "Une cuisine qui prend son temps",
      "histoire.p1": "Dar Zellige est une ancienne demeure de la médina, rendue à sa fonction première : recevoir. On y cuisine comme on le fait chez soi, avec les produits du jour et les épices moulues sur place.",
      "histoire.p2": "Les tajines mijotent des heures, la semoule est roulée à la main, et la pastilla suit la recette de Fès. Rien n'est pressé, et c'est voulu.",
      "histoire.f1t": "Fait maison",
      "histoire.f1d": "Pain, pâtisseries et mélanges d'épices préparés chaque jour.",
      "histoire.f2t": "Le marché du matin",
      "histoire.f2d": "La carte suit l'arrivage : certains plats changent selon la saison.",
      "histoire.f3t": "Pour tous",
      "histoire.f3d": "Plats végétariens signalés sur la carte, menus pour les groupes.",
      "carte.title": "Ce que la cuisine prépare",
      "carte.note": "Prix en dirhams, service compris. Demandez-nous les allergènes : nous connaissons chaque plat.",
      "carte.veg": "Végétarien",
      "experience.title": "Le patio, la terrasse, le thé",
      "experience.lead": "Le patio pour les dîners, la terrasse sur les toits pour le thé de fin d'après-midi, un salon privé pour les groupes jusqu'à vingt personnes.",
      "avis.title": "Ce qu'en disent nos hôtes",
      "infos.title": "Nous trouver",
      "infos.hours": "Horaires",
      "infos.address": "Adresse",
      "infos.addressText": "Derb Zellige, Médina — établissement fictif",
      "infos.contact": "Contact",
      "infos.access": "Accès",
      "infos.accessText": "À dix minutes à pied de la porte principale. Un membre de l'équipe peut venir vous chercher : écrivez-nous.",
      "reserver.title": "Réservez une table",
      "reserver.lead": "Remplissez ces quelques lignes : votre demande s'ouvre dans WhatsApp, prête à envoyer. Nous confirmons dans l'heure pendant les horaires d'ouverture.",
      "form.name": "Votre nom",
      "form.date": "Date",
      "form.time": "Heure",
      "form.guests": "Nombre de personnes",
      "form.note": "Une précision ? (allergie, occasion, poussette…)",
      "form.optional": "facultatif",
      "form.submit": "Envoyer la demande sur WhatsApp",
      "form.errName": "Indiquez votre nom.",
      "form.errDate": "Choisissez une date à partir d'aujourd'hui.",
      "form.errTime": "Choisissez une heure.",
      "form.errGuests": "Entre 1 et 20 personnes. Au-delà, écrivez-nous directement.",
      "form.msg": "Bonjour Dar Zellige, je souhaite réserver une table.\nNom : {name}\nDate : {date}\nHeure : {time}\nPersonnes : {guests}{note}",
      "form.msgNote": "\nPrécision : {note}",
      "wa.float": "WhatsApp",
      "wa.floatLabel": "Écrire à Dar Zellige sur WhatsApp",
      "footer.demo": "Site de démonstration réalisé pour un portfolio. Dar Zellige est un établissement fictif : adresse, téléphone et carte sont des exemples.",
      "footer.rights": "Tous droits réservés.",
      "footer.credits": "Photos de démonstration (Wikimedia Commons) :",
      "lang.label": "Langue"
    },
    en: {
      "meta.title": "Dar Zellige — Moroccan cuisine in the medina",
      "meta.desc": "Moroccan restaurant: tagines, Friday couscous, Fez pastilla. Book on WhatsApp.",
      "skip": "Skip to content",
      "nav.histoire": "The house",
      "nav.carte": "Menu",
      "nav.experience": "Experience",
      "nav.infos": "Visit",
      "nav.reserver": "Book",
      "nav.menuToggle": "Open menu",
      "hero.title": "The table of a medina house",
      "hero.lead": "Family recipes, the morning market and tea poured from high. Under a cedar ceiling, around a zellige courtyard.",
      "hero.ctaReserve": "Book on WhatsApp",
      "hero.ctaMenu": "See the menu",
      "histoire.title": "A kitchen that takes its time",
      "histoire.p1": "Dar Zellige is an old medina home returned to its first purpose: hosting. We cook the way people do at home, with the day's produce and spices ground on site.",
      "histoire.p2": "Tagines simmer for hours, couscous is rolled by hand, and the pastilla follows the Fez recipe. Nothing is rushed, on purpose.",
      "histoire.f1t": "Made in house",
      "histoire.f1d": "Bread, pastries and spice blends prepared every day.",
      "histoire.f2t": "The morning market",
      "histoire.f2d": "The menu follows what arrives: some dishes change with the season.",
      "histoire.f3t": "For everyone",
      "histoire.f3d": "Vegetarian dishes marked on the menu, set menus for groups.",
      "carte.title": "What the kitchen prepares",
      "carte.note": "Prices in Moroccan dirhams, service included. Ask us about allergens: we know every dish.",
      "carte.veg": "Vegetarian",
      "experience.title": "The courtyard, the terrace, the tea",
      "experience.lead": "The courtyard for dinner, the rooftop terrace for late-afternoon tea, a private salon for groups of up to twenty.",
      "avis.title": "What our guests say",
      "infos.title": "Find us",
      "infos.hours": "Opening hours",
      "infos.address": "Address",
      "infos.addressText": "Derb Zellige, Medina — fictional venue",
      "infos.contact": "Contact",
      "infos.access": "Getting here",
      "infos.accessText": "Ten minutes on foot from the main gate. Someone from the team can come and meet you: just message us.",
      "reserver.title": "Book a table",
      "reserver.lead": "Fill in these few lines: your request opens in WhatsApp, ready to send. We confirm within the hour during opening times.",
      "form.name": "Your name",
      "form.date": "Date",
      "form.time": "Time",
      "form.guests": "Number of guests",
      "form.note": "Anything we should know? (allergy, occasion, pushchair…)",
      "form.optional": "optional",
      "form.submit": "Send the request on WhatsApp",
      "form.errName": "Please enter your name.",
      "form.errDate": "Choose a date from today onwards.",
      "form.errTime": "Choose a time.",
      "form.errGuests": "Between 1 and 20 guests. For more, message us directly.",
      "form.msg": "Hello Dar Zellige, I would like to book a table.\nName: {name}\nDate: {date}\nTime: {time}\nGuests: {guests}{note}",
      "form.msgNote": "\nNote: {note}",
      "wa.float": "WhatsApp",
      "wa.floatLabel": "Message Dar Zellige on WhatsApp",
      "footer.demo": "Demonstration site built for a portfolio. Dar Zellige is a fictional venue: address, phone number and menu are examples.",
      "footer.rights": "All rights reserved.",
      "footer.credits": "Demonstration photos (Wikimedia Commons):",
      "lang.label": "Language"
    },
    ar: {
      "meta.title": "دار الزليج — مطبخ مغربي في المدينة العتيقة",
      "meta.desc": "مطعم مغربي: طواجن، كسكس الجمعة، بسطيلة فاس. الحجز عبر واتساب.",
      "skip": "الانتقال إلى المحتوى",
      "nav.histoire": "الدار",
      "nav.carte": "قائمة الطعام",
      "nav.experience": "الأجواء",
      "nav.infos": "معلومات عملية",
      "nav.reserver": "احجز",
      "nav.menuToggle": "فتح القائمة",
      "hero.title": "مائدة دار من دور المدينة العتيقة",
      "hero.lead": "وصفات عائلية، سوق الصباح، وأتاي يُصبّ من الأعلى. تحت سقف من خشب الأرز، حول صحن مزيّن بالزليج.",
      "hero.ctaReserve": "احجز عبر واتساب",
      "hero.ctaMenu": "اطّلع على القائمة",
      "histoire.title": "مطبخ لا يستعجل",
      "histoire.p1": "دار الزليج بيت قديم في المدينة العتيقة عاد إلى وظيفته الأولى: الضيافة. نطبخ كما يُطبخ في البيت، بمنتجات اليوم وتوابل تُطحن في عين المكان.",
      "histoire.p2": "تُطهى الطواجن لساعات، ويُفتل الكسكس باليد، وتتبع البسطيلة وصفة فاس. لا شيء على عجل، وهذا مقصود.",
      "histoire.f1t": "صنع الدار",
      "histoire.f1d": "الخبز والحلويات وخلطات التوابل تُحضَّر كل يوم.",
      "histoire.f2t": "سوق الصباح",
      "histoire.f2d": "القائمة تتبع ما يصل من السوق: بعض الأطباق تتغير حسب الفصل.",
      "histoire.f3t": "للجميع",
      "histoire.f3d": "أطباق نباتية مُشار إليها في القائمة، وقوائم خاصة بالمجموعات.",
      "carte.title": "ما يحضّره المطبخ",
      "carte.note": "الأسعار بالدرهم، الخدمة مشمولة. اسألونا عن مسببات الحساسية: نعرف كل طبق.",
      "carte.veg": "نباتي",
      "experience.title": "الصحن، السطح، والأتاي",
      "experience.lead": "الصحن لوجبات العشاء، السطح لأتاي آخر العصر، وصالون خاص للمجموعات حتى عشرين شخصاً.",
      "avis.title": "ماذا يقول ضيوفنا",
      "infos.title": "كيف تصل إلينا",
      "infos.hours": "أوقات العمل",
      "infos.address": "العنوان",
      "infos.addressText": "درب الزليج، المدينة العتيقة — مكان خيالي",
      "infos.contact": "التواصل",
      "infos.access": "الوصول",
      "infos.accessText": "على بعد عشر دقائق مشياً من الباب الرئيسي. يمكن لأحد أفراد الفريق أن يرافقك: راسلنا فقط.",
      "reserver.title": "احجز طاولة",
      "reserver.lead": "املأ هذه الأسطر القليلة: يُفتح طلبك في واتساب جاهزاً للإرسال. نؤكد الحجز خلال ساعة في أوقات العمل.",
      "form.name": "اسمك",
      "form.date": "التاريخ",
      "form.time": "الساعة",
      "form.guests": "عدد الأشخاص",
      "form.note": "ملاحظة؟ (حساسية، مناسبة، عربة أطفال…)",
      "form.optional": "اختياري",
      "form.submit": "أرسل الطلب عبر واتساب",
      "form.errName": "اكتب اسمك من فضلك.",
      "form.errDate": "اختر تاريخاً ابتداءً من اليوم.",
      "form.errTime": "اختر ساعة.",
      "form.errGuests": "من شخص واحد إلى عشرين. لأكثر من ذلك، راسلنا مباشرة.",
      "form.msg": "السلام عليكم دار الزليج، أريد حجز طاولة.\nالاسم: {name}\nالتاريخ: {date}\nالساعة: {time}\nعدد الأشخاص: {guests}{note}",
      "form.msgNote": "\nملاحظة: {note}",
      "wa.float": "واتساب",
      "wa.floatLabel": "راسل دار الزليج عبر واتساب",
      "footer.demo": "موقع تجريبي أُنجز لملف أعمال. دار الزليج مكان خيالي: العنوان والهاتف والقائمة مجرد أمثلة.",
      "footer.rights": "جميع الحقوق محفوظة.",
      "footer.credits": "صور تجريبية (ويكيميديا كومنز):",
      "lang.label": "اللغة"
    }
  }
};
