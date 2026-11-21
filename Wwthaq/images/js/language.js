// نظام اللغتين العربية والإنجليزية لمنصة وثاق
const translations = {
    ar: {
        // الصفحة الرئيسي(Home)
        home: "الرئيسية",
        about: "من نحن",
        archaeologicalSites: "المواقع الأثرية",
        tangibleHeritage: "التراث المادي",
        intangibleHeritage: "التراث غير المادي",
        archaeologicalCollections: "المقتنيات الأثرية",
        sonsOfMajan: "أبناء مجان",
        tourism: "السياحة",
        hotels: "الفنادق",
        contact: "تواصل معنا",

        // التراث المادي
        tangibleTitle: "التراث المادي العُماني",
        tangibleDescription: "اكتشف التراث المادي في سلطنة عُمان",
        tangibleSubtitle: "إرثٌ تاريخي يحكي أصالة الماضي",
        tangibleSectionTitle: "أقسام التراث المادي",
        fortressesTitle: "الحصون والقلاع",
        fortressesDescription: "تتميز سلطنة عُمان بالحصون والقلاع التاريخية التي تعكس عراقة التاريخ العُماني.",
        housesTitle: "البيوت العُمانية القديمة",
        housesDescription: "تمثل البيوت القديمة نمط الحياة العُمانية التقليدية والعمارة التراثية الأصيلة.",
        craftsTitle: "الحرف التقليدية",
        craftsDescription: "تشمل صناعة الفخار والنسيج والسعفيات وغيرها من الحرف المتوارثة.",
        clothingTitle: "الأزياء والحُلي العُمانية",
        clothingDescription: "تعبر الأزياء والحُلي التقليدية عن الهوية العُمانية والأصالة والجمال.",
        objectsTitle: "الأدوات والمقتنيات التراثية",
        objectsDescription: "تشمل الأدوات المنزلية والزراعية والمقتنيات التي استخدمها العُمانيون قديماً.",
        doorsTitle: "الأبواب والنقوش التراثية",
        doorsDescription: "تتميز العمارة العُمانية بالأبواب الخشبية والزخارف والنقوش التقليدية.",

        // المقتنيات الأثرية
        collectionsTitle: "المقتنيات الأثرية والتراثية",
        collectionsSubtitle: "كنوز تحفظ ذاكرة الوطن وتحكي تاريخ الأجداد",
        collectionsDescription: "وتوثّق الموروث العُماني للأجيال القادمة",
        ownersTitle: "أصحاب المقتنيات التراثية",
        ownersDescription: "نأخذكم في رحلة للتعرف على أصحاب المتاحف وهواة جمع المقتنيات الأثرية والتراثية في سلطنة عُمان، وما تحتفظ به مجموعاتهم من شواهد تاريخية تحكي أصالة الماضي العُماني.",

        allGovernorates: "جميع المحافظات",
        northBatinah: "شمال الباطنة",
        southBatinah: "جنوب الباطنة",
        dakhiliya: "الداخلية",
        muscat: "مسقط",
        dhofar: "ظفار",

        governorate: "المحافظة",
        wilayat: "الولاية",
        museum: "المتحف",
        type: "النوع",
        location: "الموقع",

        showMap: "عرض الموقع على الخريطة",
        pressSource: "المصدر الصحفي",
        officialSource: "المصدر الرسمي",
        officialMuseum: "الموقع الرسمي للمتحف",

        northGovernorate: "محافظة شمال الباطنة",
        southGovernorate: "محافظة جنوب الباطنة",
        dakhiliyaGovernorate: "محافظة الداخلية",
        muscatGovernorate: "محافظة مسقط",
        dhofarGovernorate: "محافظة ظفار",

        sohar: "صحار",
        rustaq: "الرستاق",
        wadiMaawil: "وادي المعاول",
        nizwa: "نزوى",
        taqa: "طاقة",
        salalah: "صلالة",

        amjadOwner: "حمود بن عبدالله العمراني",
        amjadDescription: "مدير متحف أمجاد عُمان بولاية صحار، الذي يضم أكثر من 15 ألف قطعة أثرية وتراثية، تشمل الأسلحة والخناجر والعملات والمخطوطات والمقتنيات البحرية.",
        sonsMuseum: "متحف أبناء مجان",
        sonsDescription: "يعرض مجموعة من المقتنيات التراثية التي توثق تاريخ صحار، ومنها الأسلحة والعملات وأدوات الملاحة والزراعة والمشغولات الحرفية وقارب الصيد القديم.",

        salihOwner: "صالح بن عبدالله بن سيف المعمري",
        salihDescription: "صاحب متحف مصغر بقرية حاجر بني عمر بوادي الحاجر، يضم أدوات الطهي والزراعة والخناجر والبنادق التقليدية والمشغولات اليدوية والمعادن القديمة.",
        baitGhasham: "متحف بيت الغشام",
        baitDescription: "متحف تراثي يعرض الأواني النحاسية والفخارية والمشغولات السعفية والعملات والحلي والمناديس والأسلحة والأدوات المرتبطة بالحرف العُمانية التقليدية.",

        nizwaOwner: "محمد بن أحمد أمبوسعيدي",
        nizwaDescription: "صاحب ومدير متحف نزوى، الذي يضم قرابة ألفي قطعة تراثية موزعة على قاعات تشمل المخطوطات والأسلحة والنحاس والفخار والحرف اليدوية.",
        pastGate: "متحف بوابة الماضي",
        pastGateDescription: "متحف خاص بولاية نزوى يعرض مقتنيات تراثية متنوعة، ويجسد تفاصيل الحياة العُمانية القديمة من خلال الأدوات والمقتنيات التقليدية.",

        zobairFamily: "عائلة الزبير",
        zobairDescription: "تضم مجموعة عائلة الزبير مقتنيات عُمانية متنوعة تشمل الأسلحة التقليدية والمجوهرات والملابس والأدوات المنزلية القديمة التي تعكس تاريخ المجتمع العُماني.",

        salimOwner: "سالم بن أحمد العمري",
        salimDescription: "صاحب متحف تواصل الأجيال بولاية طاقة، بدأ جمع المقتنيات الأثرية منذ عام 1983م، ويضم المتحف العملات والأزياء التقليدية والأدوات البحرية والحرف التراثية.",

        dhofarOwner: "الشيخ محمد بن عبدالمحسن السيل الغساني",
        dhofarDescription: "صاحب متحف ظفار الخاص، الذي يضم مجموعة من المقتنيات التاريخية والتراثية التي توثق أنماط الحياة والثقافة في محافظة ظفار.",
        
        
        //اصحاب المقتنيات
        amjadMuseum: "أمجاد عُمان",
        heritageMuseum: "متحف تراثي",
        baitMuseum: "بيت الغشام",
        nizwaMuseum: "متحف نزوى",
        pastMuseum: "بوابة الماضي",
        baitAlZubair: "بيت الزبير",
        generationsMuseum: "تواصل الأجيال",
        dhofarMuseum: "متحف ظفار",

        brandName: "وِثــــاق",
        pageTitle: "المقتنيات الأثرية والتراثية | وِثاق",
        filterLabel: "اختيار المحافظة",
        northIntro: "مقتنيات تحكي تاريخ الساحل العُماني",
        southIntro: "مقتنيات تجسد الحياة العُمانية القديمة",
        dakhiliyaIntro: "ذاكرة تاريخية تحفظ تفاصيل الحياة العُمانية",
        muscatIntro: "مجموعات تراثية تعكس الهوية العُمانية",
        dhofarIntro: "مقتنيات توثق تاريخ وثقافة أرض اللبان",
        emptyMessage: "لا توجد مقتنيات في هذه المحافظة حاليًا.",

      backHome: "العودة إلى الصفحة الرئيسية",
footerSlogan: "وِثاق | نحفظ الماضي ونصنع المستقبل",
omanVision: "رؤية عُمان 2040",

// التراث غير المادي
intangibleTitle: "التراث غير المادي العُماني",
intangibleDescription: "نحتفي بالعادات والتقاليد والفنون العُمانية",
intangibleSubtitle: "تراث حي ينتقل من جيل إلى جيل",
intangibleSectionTitle: "أقسام التراث غير المادي",
folkArtsTitle: "الفنون الشعبية",
folkArtsDescription: "اكتشف الفنون العُمانية مثل الرزحة والعازي والبرعة.",
customsTitle: "العادات والتقاليد",
customsDescription: "تعرّف على العادات الاجتماعية والمناسبات التقليدية في عُمان.",
songsTitle: "الأهازيج والأغاني الشعبية",
songsDescription: "استكشف الأغاني والأهازيج التي تعبر عن حياة المجتمع العُماني.",
cuisineTitle: "المأكولات العُمانية",
cuisineDescription: "تعرّف على الأطباق التقليدية وطرق إعدادها المتوارثة.",
hospitalityTitle: "الضيافة العُمانية",
hospitalityDescription: "اكتشف تقاليد القهوة العُمانية وتقديم التمور للضيوف.",
storiesTitle: "الحكايات والروايات الشعبية",
storiesDescription: "تعرّف على الحكايات والأمثال والقصص المتوارثة عبر الأجيال.",
knowledgeTitle: "المعارف والممارسات التقليدية",
knowledgeDescription: "تعرّف على المعارف المرتبطة بالزراعة والبحر والحياة اليومية.",

// أماكن الاقامة الاسياحية
accommodationTitle: "أماكن الإقامة السياحية",
accommodationIntro: "اكتشف أماكن الإقامة القريبة من المواقع الأثرية في سلطنة عُمان",
touristGovernorates: "المحافظات السياحية",
northBatinah: "شمال الباطنة",
northBatinahDesc: "فنادق وأماكن إقامة بالقرب من المواقع الأثرية والتراثية.",
southBatinah: "جنوب الباطنة",
southBatinahDesc: "اكتشف خيارات الإقامة القريبة من المعالم التاريخية.",
adDakhiliyah: "محافظة الداخلية",
adDakhiliyahDesc: "أماكن إقامة بالقرب من القلاع والحصون التاريخية.",
muscatGovernorate: "محافظة مسقط",
muscatDesc: "فنادق وخيارات إقامة قريبة من المواقع التراثية.",
dhofarGovernorate: "محافظة ظفار",
dhofarDesc: "أماكن إقامة مناسبة للزوار والسياح.",


//  الصفحة الرئيسية(Home) 
siteName: "وِثــــاق",
homeDescription: "منصة رقمية لتوثيق التراث العُماني",
homeSlogan: "نحفظ الماضي ونصنع المستقبل",

archaeologicalSites: "المواقع الأثرية",
archaeologicalSitesDesc: "اكتشف المواقع التاريخية والأثرية في سلطنة عُمان.",

archaeologicalCollections: "المقتنيات الأثرية",
archaeologicalCollectionsDesc: "تعرّف على المقتنيات والتحف التي تحكي تاريخ عُمان.",

tangibleHeritage: "التراث المادي",
tangibleHeritageDesc: "استكشف المباني والحصون والحرف والموروثات المادية.",

intangibleHeritage: "التراث غير المادي",
intangibleHeritageDesc: "اكتشف العادات والتقاليد والفنون الشعبية والروايات.",

accommodationDesc: "اكتشف الفنادق وأماكن الإقامة القريبة من المواقع الأثرية في عُمان.",

aboutUs: "من نحن",
aboutUsDesc: "تعرّف على منصة وِثاق ورسالتها وأهدافها.",

backToLogin: "العودة إلى صفحة الدخول",


// صفحة من نحن
aboutPlatformTitle: "نبذة عن المنصة",
aboutPlatformText: "وِثاق منصة رقمية تهدف إلى توثيق التراث العُماني والتعريف به من خلال جمع المعلومات وتنظيمها وعرضها بطريقة رقمية تسهّل الوصول إليها.",
aboutVisionTitle: "رؤيتنا",
aboutVisionText: "أن تكون منصة وِثاق مرجعاً رقمياً للتعريف بالتراث العُماني والمحافظة عليه ونقله إلى الأجيال القادمة.",
aboutMissionTitle: "رسالتنا",
aboutMissionText: "المساهمة في حفظ التراث العُماني وتوثيقه ونشر الوعي بأهميته باستخدام التقنيات الرقمية الحديثة.",
aboutGoalsTitle: "أهدافنا",
aboutGoalsText: "توثيق التراث المادي وغير المادي، والتعريف بالمواقع الأثرية والمقتنيات التراثية، وتشجيع الاهتمام بالهوية الثقافية العُمانية.",
aboutImportanceTitle: "أهمية توثيق التراث العُماني",
aboutImportanceText: "يُعد التراث العُماني جزءاً أصيلاً من الهوية الوطنية، ويسهم توثيقه في حفظ الذاكرة التاريخية والثقافية وتعريف الأجيال القادمة بإرث وطنهم.",

alMiraniDescription: "تقع في مسقط القديمة وتُعرف تاريخياً باسم الكوت الغربي. شُيّدت بصيغتها الحديثة عام 1587م على أنقاض برج قديم لحماية الميناء من الجهة الغربية، وتضم اليوم مرافق للزوار وإطلالات بانورامية.",
alKutSharqiDescription: "تقابل قلعة الميراني من الجهة الشرقية لخليج مسقط وتُعرف بالكوت الشرقي. اكتمل بناؤها عام 1588م فوق صخرة شاهقة، وشهدت توسعات مهمة في عهد الدولة البوسعيدية.",
ainHamranDescription: "تُعد عين حمران من أشهر وأجمل عيون المياه الطبيعية في ولاية طاقة بمحافظة ظفار، وليست في محافظة مسقط. تقع العين في سهل حمران غرب مدينة طاقة، وتبعد حوالي 16 إلى 17 كيلومتراً شرق مركز مدينة صلالة.",
alKhoudhFortDescription: "تُعد قلعة الخوض واحدة من أبرز المعالم التاريخية والأثرية في قرية الخوض القديمة بولاية السيب في محافظة مسقط. تقع القلعة في موقع استراتيجي على ضفة وادي الخوض، وقد لعبت قديماً دوراً حيوياً في حماية القرية ومراقبة الطرق المؤدية إليها وتأمين مواردها المائية من الأفلاج والآبار.",
alQuriyatFortDescription: "يقع في ولاية قريات الساحلية ويعود بناؤه إلى القرن التاسع عشر الميلادي. استُخدم مقراً للوالي ومركزاً لحماية الولاية الساحلية ومراقبة حركة الملاحة.",
alMutrahFortDescription: "تعلو هضبة صخرية تشرف مباشرة على كورنيش مطرح والسوق القديم. بُنيت عام 1579م لحماية الميناء الطبيعي ومراقبة الطرق المؤدية إلى الداخل، وتُعد وجهة مفتوحة للزوار توفر إطلالة شاملة على الخليج.",

alJalaliFortName: "قلعة الجلالي",
alMiraniFortName: "قلعة الميراني",
filterLabel: "اختيار المحافظة",
chooseGovernorate: "اختر المحافظة",
chooseGovernorate: "اختر المحافظة",
northIntro: "مقتنيات تحكي تاريخ الساحل العُماني",
tripPlannerTitle: "خطط رحلتك بالذكاء الاصطناعي",
tripPlannerDesc: "أنشئ برنامجك السياحي في سلطنة عُمان حسب اهتماماتك وميزانيتك.",

// صفحة تخطيط الرحلة
tripPlannerPageTitle: "خطط رحلتك بالذكاء الاصطناعي | وِثاق",
tripPlannerTitle: "خطط رحلتك بالذكاء الاصطناعي",
tripPlannerDesc: "أنشئ برنامجك السياحي في سلطنة عُمان حسب اهتماماتك وميزانيتك.",
selectGovernorate: "اختر المحافظة",
northBatinahOption: "شمال الباطنة",
southBatinahOption: "جنوب الباطنة",
muscatOption: "مسقط",
dakhiliyahOption: "الداخلية",
dhofarOption: "ظفار",
tripDays: "عدد أيام الرحلة",
daysPlaceholder: "مثلاً: 3",
tripBudget: "الميزانية بالريال العُماني",
budgetPlaceholder: "مثلاً: 100",
tripType: "نوع الرحلة",
familyTrip: "عائلية",
heritageTrip: "تراثية وتاريخية",
adventureTrip: "مغامرات",
relaxationTrip: "استرخاء وترفيه",
natureTrip: "طبيعية",
createTrip: "إنشاء البرنامج السياحي",
tripDays: "عدد أيام الرحلة",
tripBudget: "الميزانية بالريال العُماني",
tripType: "نوع الرحلة",
northBatinahOption: "شمال الباطنة",
southBatinahOption: "جنوب الباطنة",
muscatOption: "مسقط",
dakhiliyahOption: "الداخلية",
dhofarOption: "ظفار",
daysPlaceholder: "مثلاً: 3",
budgetPlaceholder: "مثلاً: 100",
familyTrip: "عائلية",
heritageTrip: "تراثية وتاريخية",
adventureTrip: "مغامرات",
relaxationTrip: "استرخاء وترفيه",
natureTrip: "طبيعية",
createTrip: "إنشاء البرنامج السياحي",

tripSelectGovernorates: "اختر المحافظة أو المحافظات",
tripChooseGovernorates: "اختر المحافظات",
tripMusandam: "مسندم",
tripBuraimi: "البريمي",
tripNorth: "شمال الباطنة",
tripSouth: "جنوب الباطنة",
tripMuscat: "مسقط",
tripDakhiliyah: "الداخلية",
tripDhahirah: "الظاهرة",
tripNorthSharqiyah: "شمال الشرقية",
tripSouthSharqiyah: "جنوب الشرقية",
tripWusta: "الوسطى",
tripDhofar: "ظفار",

}, 



    en: {
        home: "Home",
        about: "About Us",
        archaeologicalSites: "Archaeological Sites",
        tangibleHeritage: "Tangible Heritage",
        intangibleHeritage: "Intangible Heritage",
        archaeologicalCollections: "Archaeological Collections",
        sonsOfMajan: "Sons of Majan",
        tourism: "Tourism",
        hotels: "Hotels",
        contact: "Contact Us",

        // Tangible Heritage
        tangibleTitle: "Omani Tangible Heritage",
        tangibleDescription: "Discover the tangible heritage of the Sultanate of Oman",
        tangibleSubtitle: "A historical legacy that tells the story of the past",
        tangibleSectionTitle: "Tangible Heritage Categories",
        fortressesTitle: "Forts and Castles",
        fortressesDescription: "Oman is distinguished by its historic forts and castles, reflecting the richness of Omani history.",
        housesTitle: "Traditional Omani Houses",
        housesDescription: "Traditional houses represent the Omani way of life and authentic architectural heritage.",
        craftsTitle: "Traditional Crafts",
        craftsDescription: "These include pottery, weaving, palm-leaf crafts, and other inherited skills.",
        clothingTitle: "Omani Clothing and Jewelry",
        clothingDescription: "Traditional clothing and jewelry express Omani identity, authenticity, and beauty.",
        objectsTitle: "Traditional Tools and Artifacts",
        objectsDescription: "These include household and agricultural tools, as well as objects used by Omanis in the past.",
        doorsTitle: "Traditional Doors and Carvings",
        doorsDescription: "Omani architecture is distinguished by wooden doors, decorations, and traditional carvings.",

        // Archaeological Collections
        collectionsTitle: "Archaeological and Heritage Collections",
        collectionsSubtitle: "Treasures preserving the nation's memory and telling the story of its ancestors",
        collectionsDescription: "Documenting Omani heritage for future generations",
        ownersTitle: "Heritage Collection Owners",
        ownersDescription: "Join us on a journey to discover museum owners and collectors of archaeological and heritage artifacts in the Sultanate of Oman, and the historical treasures preserved in their collections.",

        allGovernorates: "All Governorates",
        northBatinah: "North Al Batinah",
        southBatinah: "South Al Batinah",
        dakhiliya: "Al Dakhiliyah",
        muscat: "Muscat",
        dhofar: "Dhofar",

        governorate: "Governorate",
        wilayat: "Wilayat",
        museum: "Museum",
        type: "Type",
        location: "Location",

        showMap: "View on Map",
        pressSource: "Press Source",
        officialSource: "Official Source",
        officialMuseum: "Official Museum Website",

        northGovernorate: "North Al Batinah Governorate",
        southGovernorate: "South Al Batinah Governorate",
        dakhiliyaGovernorate: "Al Dakhiliyah Governorate",
        muscatGovernorate: "Muscat Governorate",
        dhofarGovernorate: "Dhofar Governorate",

        sohar: "Sohar",
        rustaq: "Al Rustaq",
        wadiMaawil: "Wadi Al Maawil",
        nizwa: "Nizwa",
        taqa: "Taqah",
        salalah: "Salalah",

        amjadOwner: "Hamoud bin Abdullah Al Omrani",
        amjadDescription: "Director of Amjad Oman Museum in Sohar, which houses more than 15,000 archaeological and heritage items, including weapons, daggers, coins, manuscripts, and maritime artifacts.",
        sonsMuseum: "Sons of Majan Museum",
        sonsDescription: "Displays heritage collections documenting Sohar's history, including weapons, coins, navigation and agricultural tools, handicrafts, and an old fishing boat.",

        salihOwner: "Saleh bin Abdullah bin Saif Al Maamari",
        salihDescription: "Owner of a small museum in Hajar Bani Omar village in Wadi Al Hajar, featuring cooking and agricultural tools, daggers, traditional rifles, handicrafts, and old metal objects.",
        baitGhasham: "Bait Al Ghasham Museum",
        baitDescription: "A heritage museum displaying copper and pottery vessels, palm-leaf crafts, coins, jewellery, traditional chests, weapons, and tools associated with Omani handicrafts.",

        nizwaOwner: "Mohammed bin Ahmed Al Amboosaidi",
        nizwaDescription: "Owner and director of Nizwa Museum, which houses approximately 2,000 heritage items displayed in galleries featuring manuscripts, weapons, copperware, pottery, and handicrafts.",
        pastGate: "Gateway to the Past Museum",
        pastGateDescription: "A private museum in Nizwa displaying diverse heritage collections that reflect traditional Omani life through historical tools and artifacts.",

        zobairFamily: "Al Zubair Family",
        zobairDescription: "The Al Zubair collection includes Omani artifacts such as traditional weapons, jewellery, clothing, and household items reflecting the history of Omani society.",

        salimOwner: "Salim bin Ahmed Al Omri",
        salimDescription: "Owner of Tawasul Al Ajyal Museum in Taqah. He began collecting archaeological artifacts in 1983. The museum includes coins, traditional clothing, maritime tools, and heritage crafts.",

        dhofarOwner: "Sheikh Mohammed bin Abdulmohsin Al Sail Al Ghasani",
        dhofarDescription: "Owner of the private Dhofar Museum, which houses historical and heritage collections documenting the lifestyle and culture of Dhofar Governorate.",

        amjadMuseum: "Amjad Oman",
        heritageMuseum: "Heritage Museum",
        baitMuseum: "Bait Al Ghasham",
        nizwaMuseum: "Nizwa Museum",
        pastMuseum: "Gateway to the Past",
        baitAlZubair: "Bait Al Zubair",
        generationsMuseum: "Tawasul Al Ajyal",
        dhofarMuseum: "Dhofar Museum",
        
        brandName: "WITHAQ",
        pageTitle: "Archaeological and Heritage Collections | WITHAQ",
        filterLabel: "Select Governorate",
        chooseGovernorate: "Choose a governorate",
        northIntro: "Collections telling the story of the Omani coast",
        southIntro: "Collections reflecting traditional Omani life",
        dakhiliyaIntro: "A historical memory preserving details of Omani life",
        muscatIntro: "Heritage collections reflecting Omani identity",
        dhofarIntro: "Collections documenting the history and culture of the Land of Frankincense",
        emptyMessage: "There are currently no collections in this governorate.",
        
        backHome: "Back to Home Page",
        footerSlogan: "Withaq | Preserving the Past, Building the Future",
        omanVision: "Oman Vision 2040",


        // Intangible Heritage
intangibleTitle: "Omani Intangible Heritage",
intangibleDescription: "Celebrating Omani customs, traditions and arts",
intangibleSubtitle: "A living heritage passed down from generation to generation",
intangibleSectionTitle: "Intangible Heritage Categories",
folkArtsTitle: "Folk Arts",
folkArtsDescription: "Discover Omani arts such as Al Razha, Al Azi and Al Bar'ah.",
customsTitle: "Customs and Traditions",
customsDescription: "Explore Omani social customs and traditional celebrations.",
songsTitle: "Folk Songs and Chants",
songsDescription: "Explore songs and chants that reflect Omani community life.",
cuisineTitle: "Omani Cuisine",
cuisineDescription: "Discover traditional dishes and recipes passed down through generations.",
hospitalityTitle: "Omani Hospitality",
hospitalityDescription: "Discover Omani coffee traditions and the serving of dates to guests.",
storiesTitle: "Folk Tales and Stories",
storiesDescription: "Explore traditional tales, proverbs and stories passed down through generations.",
knowledgeTitle: "Traditional Knowledge and Practices",
knowledgeDescription: "Discover traditional knowledge related to agriculture, the sea and daily life.",
backHome: "Back to Home Page",

accommodationTitle: "Tourist Accommodation",
accommodationIntro: "Discover accommodation near archaeological sites in the Sultanate of Oman",
touristGovernorates: "Tourist Governorates",
northBatinah: "North Al Batinah",
northBatinahDesc: "Hotels and accommodation near archaeological and heritage sites.",
southBatinah: "South Al Batinah",
southBatinahDesc: "Discover accommodation options near historical landmarks.",
adDakhiliyah: "Al Dakhiliyah Governorate",
adDakhiliyahDesc: "Accommodation near historical castles and forts.",
muscatGovernorate: "Muscat Governorate",
muscatDesc: "Hotels and accommodation near heritage sites.",
dhofarGovernorate: "Dhofar Governorate",
dhofarDesc: "Accommodation suitable for visitors and tourists.",

siteName: "WITHAQ",
homeDescription: "A Digital Platform for Documenting Omani Heritage",
homeSlogan: "Preserving the Past, Building the Future",

archaeologicalSites: "Archaeological Sites",
archaeologicalSitesDesc: "Discover historical and archaeological sites in the Sultanate of Oman.",

archaeologicalCollections: "Archaeological Collections",
archaeologicalCollectionsDesc: "Explore artefacts and collections that tell the story of Oman's history.",

tangibleHeritage: "Tangible Heritage",
tangibleHeritageDesc: "Explore historical buildings, forts, crafts and tangible traditions.",

intangibleHeritage: "Intangible Heritage",
intangibleHeritageDesc: "Discover customs, traditions, folk arts and oral narratives.",

accommodationDesc: "Discover hotels and accommodation near archaeological sites in Oman.",

aboutUs: "About Us",
aboutUsDesc: "Learn about Withaq platform, its mission and objectives.",

backToLogin: "Return to Login Page",


// About Us Page
aboutPlatformTitle: "About the Platform",
aboutPlatformText: "WITHAQ is a digital platform dedicated to documenting Omani heritage and introducing it to the public by collecting, organizing and presenting information in an accessible digital format.",
aboutVisionTitle: "Our Vision",
aboutVisionText: "To make WITHAQ a digital reference for showcasing, preserving and passing Omani heritage on to future generations.",
aboutMissionTitle: "Our Mission",
aboutMissionText: "To contribute to preserving and documenting Omani heritage and raising awareness of its importance through modern digital technologies.",
aboutGoalsTitle: "Our Goals",
aboutGoalsText: "To document tangible and intangible heritage, showcase archaeological sites and heritage collections, and encourage appreciation of Omani cultural identity.",
aboutImportanceTitle: "The Importance of Documenting Omani Heritage",
aboutImportanceText: "Omani heritage is an essential part of national identity. Documenting it helps preserve historical and cultural memory and introduces future generations to their country's legacy.",
   
alMiraniDescription: "Located in Old Muscat, it was historically known as Al-Kut Al-Gharbi. It was rebuilt in its present form in 1587 AD on the ruins of an old tower to protect the harbour from the western side. Today, it features visitor facilities and panoramic views.",
alKutSharqiDescription: "Located opposite Al Mirani Fort on the eastern side of Muscat Bay, it is historically known as Al Kut Al Sharqi. Its construction was completed in 1588 AD on a towering rock, and it underwent significant expansions during the Al Busaidi dynasty.",
ainHamranDescription: "Ain Hamran is one of the most famous and beautiful natural springs in the Wilayat of Taqah, Dhofar Governorate. It is located in the Hamran Plain, west of Taqah city, approximately 16 to 17 kilometres east of Salalah city centre.",
alKhoudhFortDescription: "Al Khoudh Fort is one of the most prominent historical and archaeological landmarks in the old village of Al Khoudh, in the Wilayat of Seeb, Muscat Governorate. Strategically located on the banks of Wadi Al Khoudh, the fort played a vital role in protecting the village, monitoring the roads leading to it, and safeguarding its water resources from aflaj and wells.",
alQuriyatFortDescription: "Located in the coastal wilayat of Quriyat, the fort dates back to the 19th century AD. It was used as the governor's residence and as a centre for protecting the coastal wilayat and monitoring maritime traffic.",
alMutrahFortDescription: "It stands on a rocky hill overlooking Mutrah Corniche and the Old Souq. Built in 1579 AD to protect the natural harbour and monitor the routes leading inland, it is now an open destination for visitors, offering panoramic views of the bay.",
alJalaliFortName: "Al Jalali Fort",
alMiraniFortName: "Al Mirani Fort",

filterLabel: "Select Governorate",
chooseGovernorate: "Choose a governorate",
northIntro: "Collections telling the story of the Omani coast",
tripPlannerTitle: "Plan Your Trip with AI",
tripPlannerDesc: "Create your Oman travel itinerary based on your interests and budget.",

planTrip: "Plan Your Trip with AI",
tripTitle: "AI Travel Planner",
selectGovernorate: "Select a Governorate",
selectDestination: "Choose Your Destination",
tripDuration: "Trip Duration",
numberOfPeople: "Number of People",
tripInterests: "Your Travel Interests",
startPlanning: "Start Planning Your Trip",
tripResult: "Your Suggested Itinerary",

// Trip Planner Page
tripPlannerPageTitle: "Plan Your Trip with AI | WITHAQ",
tripPlannerTitle: "Plan Your Trip with AI",
tripPlannerDesc: "Create your Oman travel itinerary based on your interests and budget.",
selectGovernorate: "Choose a Governorate",
northBatinahOption: "North Al Batinah",
southBatinahOption: "South Al Batinah",
muscatOption: "Muscat",
dakhiliyahOption: "Al Dakhiliyah",
dhofarOption: "Dhofar",
tripDays: "Number of Trip Days",
daysPlaceholder: "Example: 3",
tripBudget: "Budget in Omani Rials",
budgetPlaceholder: "Example: 100",
tripType: "Trip Type",
familyTrip: "Family",
heritageTrip: "Heritage and Historical",
adventureTrip: "Adventure",
relaxationTrip: "Relaxation and Entertainment",
natureTrip: "Nature",
createTrip: "Create Travel Itinerary",
tripDays: "Number of Trip Days",
tripBudget: "Budget in Omani Rials",
tripType: "Trip Type",
northBatinahOption: "North Al Batinah",
southBatinahOption: "South Al Batinah",
muscatOption: "Muscat",
dakhiliyahOption: "Al Dakhiliyah",
dhofarOption: "Dhofar",
daysPlaceholder: "Example: 3",
budgetPlaceholder: "Example: 100",
familyTrip: "Family",
heritageTrip: "Heritage and Historical",
adventureTrip: "Adventure",
relaxationTrip: "Relaxation and Entertainment",
natureTrip: "Nature",
createTrip: "Create Travel Itinerary",

tripSelectGovernorates: "Select governorate or governorates",
tripChooseGovernorates: "Choose governorates",
tripMusandam: "Musandam",
tripBuraimi: "Al Buraimi",
tripNorth: "North Al Batinah",
tripSouth: "South Al Batinah",
tripMuscat: "Muscat",
tripDakhiliyah: "Al Dakhiliyah",
tripDhahirah: "Al Dhahirah",
tripNorthSharqiyah: "North Al Sharqiyah",
tripSouthSharqiyah: "South Al Sharqiyah",
tripWusta: "Al Wusta",
tripDhofar: "Dhofar",

}
};

// تغيير اللغة وحفظ الاختيار
function setLanguage(lang) {
    if (!translations[lang]) return;

    localStorage.setItem("withaqLanguage", lang);
    applyLanguage(lang);
}

// تطبيق اللغة على الصفحة
function applyLanguage(lang) {

    // تحديد اللغة أولاً
    const selectedLanguage = translations[lang] ? lang : "ar";

    // تحديد اتجاه الصفحة
    document.documentElement.lang = selectedLanguage;
    document.documentElement.dir =
        selectedLanguage === "ar" ? "rtl" : "ltr";

    // ترجمة الخانات التوضيحية
    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
        const key = element.dataset.i18nPlaceholder;

        if (translations[selectedLanguage][key] !== undefined) {
            element.setAttribute(
                "placeholder",
                translations[selectedLanguage][key]
            );
        }
    });

    // ترجمة النصوص
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");

        if (translations[selectedLanguage][key] !== undefined) {
            element.textContent = translations[selectedLanguage][key];
        }
    });

    // ربط صفحة المواقع الأثرية بنظام اللغة المركزي
    if (typeof applyPageLanguage === "function") {
        applyPageLanguage(selectedLanguage);
    }

    // ترجمة عنوان الصفحة
    const pageTitle = document.querySelector("title[data-i18n]");

    if (pageTitle) {
        const titleKey = pageTitle.dataset.i18n;

        if (translations[selectedLanguage][titleKey] !== undefined) {
            document.title = translations[selectedLanguage][titleKey];
        }
    }

    // ترجمة aria-label
    document.querySelectorAll("[data-i18n-aria]").forEach(element => {
        const key = element.dataset.i18nAria;

        if (translations[selectedLanguage][key] !== undefined) {
            element.setAttribute(
                "aria-label",
                translations[selectedLanguage][key]
            );
        }
    });
}

// استعادة اللغة المحفوظة عند فتح أي صفحة
document.addEventListener("DOMContentLoaded", function () {
    const savedLanguage =
        localStorage.getItem("withaqLanguage") || "ar";

    applyLanguage(savedLanguage);
});