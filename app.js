// =============================================================
// Caruso's Restaurant - Interactive Logic Engine (Bilingual)
// =============================================================

// --- Translation Dictionary ---
const TRANSLATIONS = {
    en: {
        logoText: "CARUSO<span>S</span>",
        navMenu: "Menu",
        navStory: "Our Story",
        navBranches: "Branches",
        navBook: "Book Table",
        heroTag: "Food that hits different",
        heroTitle: "Peace, Love <span>& Pizza.</span>",
        heroDesc: "Experience artisanal wood-fired pizzas, gourmet smash burgers, and fresh handmade pastas cooked with premium ingredients and cozy vibes in Assiut.",
        btnOrder: "Order Online",
        btnBook: "Book Table",
        stat1Num: "72h",
        stat1Text: "Dough Ferment",
        stat2Num: "2",
        stat2Text: "Cozy Branches",
        stat3Num: "4.9★",
        stat3Text: "Customer Rating",
        floatingTitle: "Fast Delivery",
        floatingDesc: "Assiut & New Assiut",
        promoTag: "EXCLUSIVE OFFERS",
        promoTitle: "Happiness Made To Share",
        promo3PizzaHead: "The Famous Triple Pizza Offer!",
        promo3PizzaDesc: "Get any 3 Pizzas of the same size for a massive discount. Perfect for family gatherings, friends, or big appetites!",
        promo3PizzaPrice: "Starts at EGP 240",
        btnBuildOffer: "Build Your Offer",
        promoMealHead: "Happiness Burger Combo",
        promoMealDesc: "Your choice of Caruso's gourmet burger served with golden seasoned french fries and a refreshing cold drink.",
        promoMealPrice: "EGP 115",
        btnAddToCart: "Add To Cart",
        menuTag: "OUR FRESH KITCHEN",
        menuTitle: "Explore Our Menu",
        tabAll: "All Dishes",
        tabPizza: "Pizzas",
        tabBurger: "Gourmet Burgers",
        tabPasta: "Pastas",
        tabSandwich: "Sandwiches",
        tabAppetizer: "Sides & Extras",
        btnAddToOrder: "Add to Order",
        sizeS: "Small",
        sizeM: "Medium",
        sizeL: "Large",
        sizeSingle: "Single",
        sizeDouble: "Double",
        sizeTriple: "Triple",
        bookingTag: "RESERVE A TABLE",
        bookingTitle: "Book A Premium Table",
        bookingDesc: "Skip the waiting queue. Reserve your physical table at either our Assiut or New Assiut branches and enjoy a VIP dining experience.",
        bookingF1Head: "Zero Booking Fees",
        bookingF1Desc: "Completely free reservation with live confirmation.",
        bookingF2Head: "Select Your Atmosphere",
        bookingF2Desc: "Choose indoor dining, greenhouse patio, or chef's counter.",
        bookingFormTitle: "Table Reservation Form",
        lblBranch: "Select Branch",
        branchOption1: "Assiut (Ard El-Malaeb - Governorate)",
        branchOption2: "New Assiut (Wadi Degla Club)",
        lblGuests: "Number of Guests",
        lblDate: "Reservation Date",
        lblTime: "Preferred Time",
        lblZone: "Preferred Seating Zone",
        zoneOption1: "Cozy Indoor Hall",
        zoneOption2: "Glasshouse Terrace / Patio",
        zoneOption3: "Chef's Counter (Live Kitchen View)",
        lblSpecial: "Special Requests / Notes",
        btnSubmitBooking: "Confirm Booking",
        bookingChecking: "Checking table availability...",
        aboutTag: "BEHIND THE TASTE",
        aboutTitle: "The Craftsmanship of Caruso's",
        aboutDesc: "Caruso's was born out of a deep passion for comfort food done right. We don't believe in cutting corners. From fermenting our artisanal pizza dough for 72 hours to select imported Italian tomatoes and local fresh herbs, every single detail matters.",
        pillar1Head: "72h Slow Rise",
        pillar1Desc: "Unbelievably airy, light crust with authentic leopard-spot char.",
        pillar2Head: "Premium Ingredients",
        pillar2Desc: "Pure mozzarella, San Marzano tomatoes, and fresh local organic herbs.",
        pillar3Head: "Smash Experts",
        pillar3Desc: "Burgers made from 100% premium beef, smashed to perfect crispy crusts.",
        pillar4Head: "Handcrafted Pasta",
        pillar4Desc: "Pastas made fresh daily and tossed in rich, simmered gourmet sauces.",
        branchesTag: "OUR STORES",
        branchesTitle: "Visit Our Branches",
        btnCallBranch: "Call Branch",
        btnViewMap: "View Map",
        branch1Address: "Ard El-Malaeb, in front of Assiut Governorate",
        branch2Address: "New Assiut City, inside Wadi Degla Club Area",
        hours24: "Open 24 Hours / 7 Days",
        cartTitle: "Your Order Cart",
        cartEmpty: "Your cart is feeling a bit empty...",
        cartBtnShop: "Explore Menu",
        cartSubtotal: "Subtotal",
        cartVat: "VAT (14%)",
        cartDelivery: "Delivery Fee",
        cartTotal: "Grand Total",
        btnCheckout: "Proceed to Checkout",
        checkoutTitle: "Complete Your Order",
        lblFullName: "Full Name",
        lblPhone: "Phone Number (Active for SMS)",
        lblAddress: "Full Delivery Address Details",
        btnConfirmOrder: "Place Cash on Delivery Order",
        orderSuccessHead: "Order Placed Successfully!",
        orderSuccessDesc: "Thank you for choosing Caruso's! Your order has been registered and is being prepared in our kitchen. You will receive an SMS shortly.",
        orderTicketCode: "ORDER ID",
        orderBranch: "Preparing Branch",
        orderTotalText: "Amount on Delivery",
        btnDone: "Excellent",
        bookSuccessHead: "Reservation Confirmed!",
        bookSuccessDesc: "Your premium table has been reserved. Please show this digital ticket upon arrival at the host desk.",
        bookTicketCode: "RESERVATION CODE",
        bookTicketGuests: "Party Size",
        bookTicketZone: "Seating Zone",
        toastAdded: "Added to your order basket!",
        toastRemoved: "Removed from order basket",
        toastBooked: "Reservation completed!",
        toastEmptyCart: "Please add some delicious food to your cart first!",
        offerModalTitle: "Build Your Triple Pizza Offer",
        offerStep1: "1. Choose First Pizza",
        offerStep2: "2. Choose Second Pizza",
        offerStep3: "3. Choose Third Pizza",
        btnConfirmOffer: "Add Triple Pizza Pack to Cart",
        toastOfferIncomplete: "Please select one pizza for each of the three choices!"
    },
    ar: {
        logoText: "كاروسو<span>ز</span>",
        navMenu: "قائمة الطعام",
        navStory: "قصتنا",
        navBranches: "فروعنا",
        navBook: "حجز طاولة",
        heroTag: "أكل يلمس قلبك 🥰",
        heroTitle: "سلام، حب <span>وبيتزا.</span>",
        heroDesc: "استمتع بمذاق البيتزا الإيطالية الفاخرة المخبوزة في فرن الحطب، والبرجر المشوي بعناية، والباستا الطازجة المصنوعة يدوياً بأجود المكونات في أسيوط.",
        btnOrder: "اطلب أونلاين",
        btnBook: "احجز طاولة",
        stat1Num: "72 ساعة",
        stat1Text: "تخمير العجين",
        stat2Num: "فرعين",
        stat2Text: "أجواء دافئة",
        stat3Num: "4.9★",
        stat3Text: "تقييم العملاء",
        floatingTitle: "توصيل سريع",
        floatingDesc: "أسيوط وأسيوط الجديدة",
        promoTag: "العروض الحصرية",
        promoTitle: "السعادة صُنعت لتُشارك",
        promo3PizzaHead: "عرض الـ 3 بيتزا الشهير!",
        promo3PizzaDesc: "احصل على أي 3 بيتزات من نفس الحجم بخصم ضخم جداً. مثالي للتجمعات العائلية، الأصدقاء، أو العزومات الكبيرة!",
        promo3PizzaPrice: "يبدأ من 240 جنيه فقط",
        btnBuildOffer: "ركّب عرضك الآن",
        promoMealHead: "وجبة برجر السعادة",
        promoMealDesc: "اختر برجر كاروسوز المفضل لديك مع البطاطس المقلية الذهبية والمتبلة ومشروب بارد ومنعش.",
        promoMealPrice: "115 جنيه",
        btnAddToCart: "أضف للسلة",
        menuTag: "مطبخنا الطازج",
        menuTitle: "قائمة طعام كاروسوز",
        tabAll: "كل الأطباق",
        tabPizza: "البيتزا",
        tabBurger: "برجر فاخر",
        tabPasta: "مكرونات",
        tabSandwich: "سندوتشات",
        tabAppetizer: "المقبلات والإضافات",
        btnAddToOrder: "أضف للطلب",
        sizeS: "صغير",
        sizeM: "وسط",
        sizeL: "كبير",
        sizeSingle: "سنجل",
        sizeDouble: "دبل",
        sizeTriple: "تريبل",
        bookingTag: "حجز طاولة",
        bookingTitle: "احجز طاولتك الفاخرة",
        bookingDesc: "تخطى طوابير الانتظار. احجز طاولتك الفعلية في فرع أسيوط أو أسيوط الجديدة واستمتع بتجربة طعام متميزة وراقية.",
        bookingF1Head: "بدون رسوم حجز",
        bookingF1Desc: "الحجز مجاني تماماً مع تأكيد فوري لحظي.",
        bookingF2Head: "اختر الأجواء المناسبة",
        bookingF2Desc: "اختر الصالة الداخلية، التراس الزجاجي، أو طاولة الشيف.",
        bookingFormTitle: "نموذج حجز طاولة",
        lblBranch: "اختر الفرع",
        branchOption1: "أسيوط (أرض الملاعب - أمام المحافظة)",
        branchOption2: "أسيوط الجديدة (منطقة نادي وادي دجلة)",
        lblGuests: "عدد الأفراد",
        lblDate: "تاريخ الحجز",
        lblTime: "توقيت الحجز",
        lblZone: "منطقة الجلوس المفضلة",
        zoneOption1: "الصالة الداخلية الدافئة",
        zoneOption2: "التراس الزجاجي / الهواء الطلق",
        zoneOption3: "منضدة الشيف (مشاهدة المطبخ مباشرة)",
        lblSpecial: "طلبات خاصة / ملاحظات",
        btnSubmitBooking: "تأكيد الحجز الآن",
        bookingChecking: "جاري التحقق من الطاولات الشاغرة...",
        aboutTag: "سر الصنعة والمذاق",
        aboutTitle: "الشغف والحرفية في مطبخ كاروسوز",
        aboutDesc: "تأسس كاروسوز بشغف كبير لتقديم أكل الشارع بطريقة راقية واحترافية. نحن لا نقبل بالحلول السهلة؛ فبدءاً من تخمير العجينة لمدة 72 ساعة لراحة معدتك، وحتى اختيار الطماطم الإيطالية الفاخرة والأعشاب الطازجة، كل تفصيل يصنع فرقاً.",
        pillar1Head: "تخمير بطيء 72 ساعة",
        pillar1Desc: "عجينة خفيفة للغاية، هشة، ومحمرة بحرفية على أطراف الفرن.",
        pillar2Head: "مكونات ممتازة ونقية",
        pillar2Desc: "موتزاريلا طبيعية 100%، طماطم سان مارزانو، وأعشاب طازجة.",
        pillar3Head: "خبراء البرجر المشوي",
        pillar3Desc: "برجر مصنوع من لحم بقري صافي بلدي 100%، مشوي بقشرة مقرمشة مثالية.",
        pillar4Head: "باستا يدوية طازجة",
        pillar4Desc: "نعد المكرونة طازجة يومياً ونطهوها بصلصات غنية ومطهية ببطء.",
        branchesTag: "فروعنا",
        branchesTitle: "تفضل بزيارتنا في الفروع",
        btnCallBranch: "اتصل بالفرع",
        btnViewMap: "عرض الخريطة",
        branch1Address: "أرض الملاعب، أمام محافظة أسيوط",
        branch2Address: "مدينة أسيوط الجديدة، داخل منطقة نادي وادي دجلة",
        hours24: "مفتوح على مدار 24 ساعة / 7 أيام",
        cartTitle: "سلة مشترياتك",
        cartEmpty: "سلتك تبدو فارغة حالياً...",
        cartBtnShop: "تصفح المنيو",
        cartSubtotal: "المجموع الفرعي",
        cartVat: "ضريبة القيمة المضافة (14%)",
        cartDelivery: "رسوم التوصيل",
        cartTotal: "الإجمالي الكلي",
        btnCheckout: "الانتقال للدفع وتأكيد الطلب",
        checkoutTitle: "إتمام تفاصيل الطلب",
        lblFullName: "الاسم الكامل",
        lblPhone: "رقم الهاتف (نشط لاستلام رسائل التأكيد)",
        lblAddress: "العنوان التفصيلي للتوصيل",
        btnConfirmOrder: "تأكيد الطلب والدفع عند الاستلام",
        orderSuccessHead: "تم تسجيل طلبك بنجاح!",
        orderSuccessDesc: "شكراً لاختيارك كاروسوز! تم تسجيل طلبك وهو الآن قيد التحضير في المطبخ بكل حب. ستصلك رسالة تأكيد نصية قصيرة قريباً.",
        orderTicketCode: "رقم الطلب",
        orderBranch: "الفرع المحضر للطلب",
        orderTotalText: "المبلغ المطلوب عند الاستلام",
        btnDone: "ممتاز جداً",
        bookSuccessHead: "تم تأكيد حجز الطاولة بنجاح!",
        bookSuccessDesc: "تم حجز طاولتك الفاخرة بنجاح. يرجى إظهار هذه التذكرة الرقمية عند وصولك لموظف الاستقبال بالفروع.",
        bookTicketCode: "رمز الحجز الرقمي",
        bookTicketGuests: "عدد الأفراد",
        bookTicketZone: "منطقة الجلوس",
        toastAdded: "تمت إضافة الطبق لسلة مشترياتك!",
        toastRemoved: "تم حذف الطبق من السلة",
        toastBooked: "تم تسجيل الحجز بنجاح!",
        toastEmptyCart: "يرجى إضافة بعض المأكولات اللذيذة للسلة أولاً!",
        offerModalTitle: "ركّب عرض الـ 3 بيتزا التفاعلي",
        offerStep1: "1. اختر البيتزا الأولى",
        offerStep2: "2. اختر البيتزا الثانية",
        offerStep3: "3. اختر البيتزا الثالثة",
        btnConfirmOffer: "إضافة باقة الـ 3 بيتزا للسلة",
        toastOfferIncomplete: "يرجى اختيار بيتزا واحدة لكل خيار من الخيارات الثلاثة!"
    }
};

let currentLang = 'ar'; // Default to Arabic as requested since the user speaks Arabic

// --- Menu Database ---
const MENU_ITEMS = [
    // --- Pizzas ---
    {
        id: 'pizza-margherita',
        category: 'pizza',
        nameEN: 'Margherita Pizza',
        nameAR: 'بيتزا مارجريتا',
        descEN: 'Classic rich tomato sauce, premium mozzarella cheese, and fresh oregano leaves.',
        descAR: 'صلصة طماطم كلاسيكية، جبنة موتزاريلا فاخرة، وأوراق الزعتر البري الطازجة.',
        image: 'pizza_hero.png',
        badgeEN: 'Classic',
        badgeAR: 'كلاسيك',
        prices: { s: 95, m: 130, l: 175 },
        sizes: ['s', 'm', 'l']
    },
    {
        id: 'pizza-ranch',
        category: 'pizza',
        nameEN: 'Chicken Ranch Pizza',
        nameAR: 'بيتزا تشيكن رانش',
        descEN: 'Tender grilled chicken, fresh mushroom pieces, mozzarella, and creamy ranch drizzle.',
        descAR: 'قطع الدجاج المشوي المتبل، شرائح المشروم الطازج، جبنة موتزاريلا، وصوص الرانش الغني.',
        image: 'pizza_hero.png',
        badgeEN: 'Best Seller',
        badgeAR: 'الأكثر مبيعاً',
        prices: { s: 130, m: 175, l: 225 },
        sizes: ['s', 'm', 'l']
    },
    {
        id: 'pizza-carusos',
        category: 'pizza',
        nameEN: "Caruso's Signature Pizza",
        nameAR: 'بيتزا كاروسوز الخاصة',
        descEN: 'Gourmet minced beef, pepperoni slices, bell peppers, fresh mushroom, and mozzarella.',
        descAR: 'لحم بقري مفروم فاخر، شرائح الببروني، فلفل ألوان، مشروم طازج، وجبنة موتزاريلا كاروسو الخاصة.',
        image: 'pizza_hero.png',
        badgeEN: 'Signature',
        badgeAR: 'توقيع كاروسو',
        prices: { s: 140, m: 185, l: 235 },
        sizes: ['s', 'm', 'l']
    },
    {
        id: 'pizza-pepperoni',
        category: 'pizza',
        nameEN: 'Pepperoni Supreme Pizza',
        nameAR: 'بيتزا ببروني سوبريم',
        descEN: 'Loaded with premium cured beef pepperoni slices and bubbly melted mozzarella.',
        descAR: 'مليئة بشرائح ببروني اللحم البقري الفاخر والمجفف مع الموتزاريلا الذائبة المتألقة.',
        image: 'pizza_hero.png',
        badgeEN: 'Classic',
        badgeAR: 'كلاسيك',
        prices: { s: 120, m: 160, l: 210 },
        sizes: ['s', 'm', 'l']
    },
    {
        id: 'pizza-fourcheese',
        category: 'pizza',
        nameEN: 'Four Cheese Feast',
        nameAR: 'بيتزا فور تشيز (الأجبان الأربعة)',
        descEN: 'A rich blend of premium blue cheese, parmesan, cheddar, and traditional mozzarella.',
        descAR: 'مزيج غني ولذيذ من الجبنة الريكفورد، البارميزان، الشيدر، والموتزاريلا التقليدية الفاخرة.',
        image: 'pizza_hero.png',
        badgeEN: 'Cheese Lovers',
        badgeAR: 'لعشاق الأجبان',
        prices: { s: 125, m: 170, l: 215 },
        sizes: ['s', 'm', 'l']
    },
    // --- Burgers ---
    {
        id: 'burger-classic',
        category: 'burger',
        nameEN: 'Classic Beef Smash Burger',
        nameAR: 'كلاسيك برجر لحم مشوي',
        descEN: '100% premium fresh beef smash patty, cheddar cheese, fresh lettuce, tomato, and house sauce.',
        descAR: 'شريحة لحم بلدي صافي 100% مشوية على الجريل، جبنة شيدر، خس طازج، طماطم، وصوص كاروسو السري.',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60',
        badgeEN: 'Classic Smash',
        badgeAR: 'سماش كلاسيك',
        prices: { s: 100, m: 130, l: 160 }, // s: Single, m: Double, l: Triple
        sizes: ['s', 'm', 'l']
    },
    {
        id: 'burger-carusos',
        category: 'burger',
        nameEN: "Caruso's Signature Burger",
        nameAR: 'برجر كاروسوز المميز',
        descEN: 'Gourmet double smash patty, golden onion rings, beef bacon, smoked cheddar, and BBQ glaze.',
        descAR: 'شريحة برجر دبل مشوية، حلقات بصل ذهبية مقرمشة، بيف بيكون، جبنة شيدر مدخنة، وصوص الباربيكيو الغني.',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60',
        badgeEN: 'Signature',
        badgeAR: 'توقيع كاروسو',
        prices: { s: 130, m: 160, l: 190 },
        sizes: ['s', 'm', 'l']
    },
    // --- Pastas ---
    {
        id: 'pasta-alfredo',
        category: 'pasta',
        nameEN: 'Chicken Fettuccine Alfredo',
        nameAR: 'مكرونة تشيكن الفريدو',
        descEN: 'Fettuccine pasta swimming in buttery parmesan garlic white sauce with tender chicken pieces.',
        descAR: 'باستا فوتشيني غارقة في صوص الفريدو الأبيض بالزبدة والبارميزان مع قطع الدجاج الطرية والمشوية.',
        image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=500&auto=format&fit=crop&q=60',
        badgeEN: 'Creamy',
        badgeAR: 'وايت صوص كريمي',
        prices: { single: 110 },
        sizes: ['single']
    },
    {
        id: 'pasta-chicken-mush',
        category: 'pasta',
        nameEN: 'Penne Chicken Mushroom',
        nameAR: 'بنا تشيكن مشروم وايت صوص',
        descEN: 'Penne pasta tossed in rich savory white sauce with grilled chicken and fresh mushrooms.',
        descAR: 'مكرونة بنا غارقة في الصوص الأبيض الكريمي الغني بالدجاج المشوي وقطع المشروم الطازجة.',
        image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=500&auto=format&fit=crop&q=60',
        badgeEN: 'Chef Special',
        badgeAR: 'مميز لدى الشيف',
        prices: { single: 100 },
        sizes: ['single']
    },
    // --- Sandwiches ---
    {
        id: 'sandwich-crispy',
        category: 'sandwich',
        nameEN: 'Crispy Chicken Sandwich',
        nameAR: 'سندوتش تشيكن كريسبي مقرمش',
        descEN: 'Golden crispy chicken breast, smoked turkey slice, cheddar sauce, pickled cucumbers, and lettuce.',
        descAR: 'صدر دجاج كريسبي مقرمش ذهبي، شريحة تركي مدخن، صوص الجبنة الشيدر، خيار مخلل، وخس طازج.',
        image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=500&auto=format&fit=crop&q=60',
        badgeEN: 'Crunchy',
        badgeAR: 'مقرمش حار',
        prices: { s: 105, m: 140 }, // s: Single, m: Double
        sizes: ['s', 'm']
    },
    {
        id: 'sandwich-sausage',
        category: 'sandwich',
        nameEN: "Caruso's Sausage Sandwich",
        nameAR: 'سندوتش سجق كاروسوز البلدي',
        descEN: 'Oriental spiced local beef sausage cooked with fresh peppers, onions, tomatoes, and tahini drizzle.',
        descAR: 'سجق بلدي متبل بالبهارات الشرقية المطبوخة بالفلفل الملون، البصل، الطماطم، وصوص الطحينة الرائع.',
        image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=500&auto=format&fit=crop&q=60',
        badgeEN: 'Oriental Spice',
        badgeAR: 'شرقي بلدي',
        prices: { s: 90, m: 115 },
        sizes: ['s', 'm']
    },
    // --- Sides/Extras ---
    {
        id: 'side-fries-cheese',
        category: 'appetizer',
        nameEN: 'Cheesy Golden Fries',
        nameAR: 'بطاطس مقلية ذهبية بالجبنة',
        descEN: 'Golden crispy french fries drenched in rich melted warm cheddar cheese sauce.',
        descAR: 'أصابع البطاطس الذهبية المقرمشة والمغطاة بطبقة غنية وساخنة من صوص الجبنة الشيدر الذائبة.',
        image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&auto=format&fit=crop&q=60',
        badgeEN: 'Extra Value',
        badgeAR: 'قيمة إضافية',
        prices: { single: 50 },
        sizes: ['single']
    },
    {
        id: 'side-mozzarella-sticks',
        category: 'appetizer',
        nameEN: 'Mozzarella Sticks (4 pcs)',
        nameAR: 'أصابع الموزاريلا المقلية (4 قطع)',
        descEN: 'Golden breaded Italian mozzarella cheese sticks fried to perfect melt, served with marinara dip.',
        descAR: 'أصابع جبنة موتزاريلا إيطالية مغطاة بالبقسماط المقرمش، مقلية ومطاطية، تقدم مع صوص المارينارا.',
        image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&auto=format&fit=crop&q=60',
        badgeEN: 'Crispy',
        badgeAR: 'مقرمشة ولذيذة',
        prices: { single: 50 },
        sizes: ['single']
    }
];

// --- Order State ---
let cart = [];

// --- Dynamic Settings and API variables ---
let VAT_RATE = 0.14;
let DELIVERY_FEE = 30;
let WHATSAPP_PHONE = "201229746767";
let WHATSAPP_MSG = "لدي طلب جديد من الموقع";
let IS_ORDERS_OPEN = true;

// Helper to determine if we are running in server mode
function isServerMode() {
    return window.location.protocol.startsWith('http');
}

// --- Firebase imports (loaded as ES module via index.html) ---
// fetchSettings, fetchPrices, addOrder are imported in index.html <script type="module">

// Apply admin-set prices to MENU_ITEMS array
function applyAdminPrices(saved) {
    if (!saved || !Object.keys(saved).length) return;
    MENU_ITEMS.forEach(item => {
        if (saved[item.id]) {
            Object.assign(item.prices, saved[item.id]);
        }
    });
}

async function syncWithServer() {
    // 1. Fetch from Firebase (cloud)
    try {
        if (window._fbFetchSettings && window._fbFetchPrices) {
            const [settings, prices] = await Promise.all([
                window._fbFetchSettings(),
                window._fbFetchPrices()
            ]);

            if (settings) {
                VAT_RATE = (settings.vatRate !== undefined ? parseFloat(settings.vatRate) : 14) / 100;
                DELIVERY_FEE = settings.deliveryFee !== undefined ? parseFloat(settings.deliveryFee) : 30;
                WHATSAPP_PHONE = settings.waPhone || "201229746767";
                WHATSAPP_MSG = settings.waMsg || "لدي طلب جديد من الموقع";
                IS_ORDERS_OPEN = (settings.ordersOpen === '0' || settings.ordersOpen === false || settings.ordersOpen === 0) ? false : true;
                // cache locally as fallback
                try { localStorage.setItem('carusos_settings', JSON.stringify(settings)); } catch(e) {}
            }

            if (prices) {
                applyAdminPrices(prices);
                try { localStorage.setItem('carusos_prices', JSON.stringify(prices)); } catch(e) {}
            }
            return; // Firebase succeeded, no need for fallback
        }
    } catch (e) {
        console.warn('[Firebase] syncWithServer failed, using cache fallback:', e);
    }

    // 2. Fallback: use localStorage cache
    try {
        const _settings = JSON.parse(localStorage.getItem('carusos_settings') || '{}');
        VAT_RATE = (_settings.vatRate !== undefined ? parseFloat(_settings.vatRate) : 14) / 100;
        DELIVERY_FEE = _settings.deliveryFee !== undefined ? parseFloat(_settings.deliveryFee) : 30;
        WHATSAPP_PHONE = _settings.waPhone || "201229746767";
        WHATSAPP_MSG = _settings.waMsg || "لدي طلب جديد من الموقع";
        IS_ORDERS_OPEN = (_settings.ordersOpen === '0' || _settings.ordersOpen === false) ? false : true;
        const _prices = JSON.parse(localStorage.getItem('carusos_prices') || '{}');
        applyAdminPrices(_prices);
    } catch(e) { /* use defaults */ }
}

// --- Selected options for Menu Item Cards ---
let cardSelectedSizes = {}; // format: { itemId: 's' | 'm' | 'l' }

// --- Selected choices for the Triple Pizza Offer ---
let selectedOfferPizzas = [null, null, null];
let selectedOfferSize = 's'; // Default size for flat pricing

// --- Setup App On Load ---
document.addEventListener("DOMContentLoaded", async () => {
    // Wait for Firebase to be ready (module loads async)
    const waitForFirebase = () => new Promise(resolve => {
        if (window._firebaseReady) return resolve();
        window.addEventListener('firebase-ready', resolve, { once: true });
        setTimeout(resolve, 3000); // fallback timeout
    });
    await waitForFirebase();

    await syncWithServer();
    initLanguage();
    initMenu();
    initEventListeners();
    updateCartUI();
});

// -------------------------------------------------------------
// Language Translation Logic
// -------------------------------------------------------------
function initLanguage() {
    // Check saved language or default to Arabic
    const savedLang = localStorage.getItem("carusos_lang");
    if (savedLang) {
        currentLang = savedLang;
    } else {
        currentLang = 'ar'; // Default to Arabic
    }
    
    applyLanguage(currentLang);
}

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem("carusos_lang", currentLang);
    applyLanguage(currentLang);
    initMenu(); // Re-render menu to show correct text
    showToast(TRANSLATIONS[currentLang] === 'ar' ? 'تم تغيير اللغة للعربية' : 'Language changed to English!');
}

function applyLanguage(lang) {
    const dict = TRANSLATIONS[lang];
    
    // Toggle body classes, page directions for RTL/LTR and fonts
    if (lang === 'ar') {
        document.documentElement.setAttribute("dir", "rtl");
        document.documentElement.setAttribute("lang", "ar");
        document.body.classList.add("rtl");
        document.getElementById("langSwitchBtn").textContent = "English 🌐";
    } else {
        document.documentElement.setAttribute("dir", "ltr");
        document.documentElement.setAttribute("lang", "en");
        document.body.classList.remove("rtl");
        document.getElementById("langSwitchBtn").textContent = "العربية 🌐";
    }
    
    // Apply texts dynamically using data-i18n attributes
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (dict[key]) {
            element.innerHTML = dict[key];
        }
    });

    // Apply place holders
    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
        const key = element.getAttribute("data-i18n-placeholder");
        if (dict[key]) {
            element.setAttribute("placeholder", dict[key]);
        }
    });
}

// -------------------------------------------------------------
// Menu Render & Tab Switching Logic
// -------------------------------------------------------------
function initMenu() {
    const menuGrid = document.getElementById("menuGrid");
    if (!menuGrid) return;
    
    menuGrid.innerHTML = "";
    
    // Find active category
    const activeTab = document.querySelector(".menu-tab.active");
    const activeCategory = activeTab ? activeTab.getAttribute("data-category") : "all";
    
    // Filter items
    const filteredItems = activeCategory === "all" 
        ? MENU_ITEMS 
        : MENU_ITEMS.filter(item => item.category === activeCategory);
        
    filteredItems.forEach(item => {
        // Set default selected size if not set
        if (!cardSelectedSizes[item.id]) {
            cardSelectedSizes[item.id] = item.sizes[0];
        }
        
        const currentSize = cardSelectedSizes[item.id];
        const currentPrice = item.prices[currentSize];
        
        const nameText = currentLang === 'ar' ? item.nameAR : item.nameEN;
        const descText = currentLang === 'ar' ? item.descAR : item.descEN;
        const badgeText = currentLang === 'ar' ? item.badgeAR : item.badgeEN;
        
        // Generate size button selectors if item has multiple sizes
        let sizeSelectorsHtml = "";
        if (item.sizes.length > 1) {
            sizeSelectorsHtml = `<div class="size-selector">`;
            item.sizes.forEach(sz => {
                const isActive = sz === currentSize ? "active" : "";
                let label = "";
                if (item.category === 'pizza') {
                    label = TRANSLATIONS[currentLang][`size${sz.toUpperCase()}`];
                } else if (item.category === 'burger' || item.category === 'sandwich') {
                    label = TRANSLATIONS[currentLang][`size${sz === 's' ? 'Single' : sz === 'm' ? 'Double' : 'Triple'}`];
                }
                sizeSelectorsHtml += `
                    <button class="size-btn ${isActive}" onclick="selectItemSize('${item.id}', '${sz}')">${label}</button>
                `;
            });
            sizeSelectorsHtml += `</div>`;
        }
        
        const cardHtml = `
            <div class="menu-card glass-panel" data-id="${item.id}">
                <div class="menu-card-img-wrapper">
                    <img class="menu-card-img" src="${item.image}" alt="${nameText}" loading="lazy">
                    <div class="menu-card-badges">
                        <span class="badge badge-primary">${badgeText}</span>
                    </div>
                </div>
                <div class="menu-card-content">
                    <div class="menu-card-header">
                        <h4 class="menu-card-title">${nameText}</h4>
                    </div>
                    <p class="menu-card-desc">${descText}</p>
                    
                    <div class="menu-card-options">
                        ${sizeSelectorsHtml}
                    </div>
                    
                    <div class="menu-card-footer">
                        <span class="menu-card-price">${currentPrice} EGP</span>
                        <button class="btn btn-primary btn-sm" onclick="addItemToOrder('${item.id}')">
                            <i class="fas fa-shopping-basket"></i> ${TRANSLATIONS[currentLang].btnAddToOrder}
                        </button>
                    </div>
                </div>
            </div>
        `;
        menuGrid.insertAdjacentHTML("beforeend", cardHtml);
    });
}

function handleTabClick(event) {
    const clickedTab = event.currentTarget;
    document.querySelectorAll(".menu-tab").forEach(tab => tab.classList.remove("active"));
    clickedTab.classList.add("active");
    initMenu();
}

function selectItemSize(itemId, size) {
    cardSelectedSizes[itemId] = size;
    initMenu(); // Re-render to update selected states and prices
}

// -------------------------------------------------------------
// Live Ordering / Shopping Cart Engine
// -------------------------------------------------------------
function addItemToOrder(itemId) {
    if (!IS_ORDERS_OPEN) {
        showToast(currentLang === 'ar' ? 'عذراً، المطعم لا يستقبل طلبات حالياً 🔴' : 'Sorry, the restaurant is not accepting orders currently 🔴');
        return;
    }

    const item = MENU_ITEMS.find(i => i.id === itemId);
    if (!item) return;
    
    const size = cardSelectedSizes[itemId];
    const price = item.prices[size];
    
    // Check if item with exact same size is already in the cart
    const existingIndex = cart.findIndex(c => c.id === itemId && c.size === size);
    
    if (existingIndex > -1) {
        cart[existingIndex].quantity += 1;
    } else {
        cart.push({
            id: itemId,
            nameEN: item.nameEN,
            nameAR: item.nameAR,
            size: size,
            category: item.category,
            price: price,
            image: item.image,
            quantity: 1
        });
    }
    
    updateCartUI();
    showToast(TRANSLATIONS[currentLang].toastAdded);
}

function changeCartQty(index, amount) {
    cart[index].quantity += amount;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
        showToast(TRANSLATIONS[currentLang].toastRemoved);
    }
    updateCartUI();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    showToast(TRANSLATIONS[currentLang].toastRemoved);
    updateCartUI();
}

function updateCartUI() {
    const cartCount = document.getElementById("cartCount");
    const cartBadge = document.getElementById("cartBadge");
    const cartItems = document.getElementById("cartItems");
    const subtotalEl = document.getElementById("cartSubtotalVal");
    const vatEl = document.getElementById("cartVatVal");
    const deliveryEl = document.getElementById("cartDeliveryVal");
    const totalEl = document.getElementById("cartTotalVal");
    
    // Total quantity
    const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) cartCount.textContent = totalQty;
    if (cartBadge) cartBadge.textContent = totalQty;
    
    if (!cartItems) return;
    
    cartItems.innerHTML = "";
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart-message">
                <i class="fas fa-shopping-basket"></i>
                <p data-i18n="cartEmpty">${TRANSLATIONS[currentLang].cartEmpty}</p>
                <button class="btn btn-secondary btn-sm" onclick="toggleCartSidebar()" data-i18n="cartBtnShop">${TRANSLATIONS[currentLang].cartBtnShop}</button>
            </div>
        `;
        
        subtotalEl.textContent = "0.00 EGP";
        vatEl.textContent = "0.00 EGP";
        deliveryEl.textContent = "0.00 EGP";
        totalEl.textContent = "0.00 EGP";
        return;
    }
    
    // Render items
    cart.forEach((item, index) => {
        const nameText = currentLang === 'ar' ? item.nameAR : item.nameEN;
        
        let sizeLabel = "";
        if (item.size && item.size !== 'single') {
            if (item.category === 'pizza' || item.category === 'offer') {
                sizeLabel = `(${TRANSLATIONS[currentLang][`size${item.size.toUpperCase()}`]})`;
            } else {
                sizeLabel = `(${TRANSLATIONS[currentLang][item.size === 's' ? 'sizeSingle' : item.size === 'm' ? 'sizeDouble' : 'sizeTriple']})`;
            }
        }
        
        const itemHtml = `
            <div class="cart-item">
                <img class="cart-item-img" src="${item.image}" alt="${nameText}">
                <div class="cart-item-details">
                    <div class="cart-item-name">
                        <h4>${nameText} <span class="cart-item-meta">${sizeLabel}</span></h4>
                    </div>
                    <span class="cart-item-price">${item.price} EGP</span>
                </div>
                <div class="cart-item-quantity">
                    <button class="qty-btn" onclick="changeCartQty(${index}, -1)"><i class="fas fa-minus"></i></button>
                    <span class="qty-val">${item.quantity}</span>
                    <button class="qty-btn" onclick="changeCartQty(${index}, 1)"><i class="fas fa-plus"></i></button>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${index})"><i class="fas fa-trash-alt"></i></button>
            </div>
        `;
        cartItems.insertAdjacentHTML("beforeend", itemHtml);
    });
    
    // Calculations
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const vat = subtotal * VAT_RATE;
    const total = subtotal + vat + DELIVERY_FEE;
    
    subtotalEl.textContent = `${subtotal.toFixed(2)} EGP`;
    vatEl.textContent = `${vat.toFixed(2)} EGP`;
    deliveryEl.textContent = `${DELIVERY_FEE.toFixed(2)} EGP`;
    totalEl.textContent = `${total.toFixed(2)} EGP`;
}

// -------------------------------------------------------------
// Interactive Sidebar & Modals Toggle Controls
// -------------------------------------------------------------
function toggleCartSidebar() {
    const sidebar = document.getElementById("cartSidebar");
    const overlay = document.getElementById("cartOverlay");
    if (sidebar && overlay) {
        sidebar.classList.toggle("open");
        overlay.classList.toggle("open");
    }
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add("open");
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove("open");
    }
}

// -------------------------------------------------------------
// Checkout Modal Processing
// -------------------------------------------------------------
function handleCheckoutBtn() {
    if (cart.length === 0) {
        showToast(TRANSLATIONS[currentLang].toastEmptyCart);
        return;
    }
    
    toggleCartSidebar(); // Close cart sidebar
    openModal("checkoutModal"); // Open checkout details form
}

function processCheckoutOrder(event) {
    event.preventDefault();
    
    const fullName = document.getElementById("chkFullName").value;
    const phone = document.getElementById("chkPhone").value;
    const branch = document.getElementById("chkBranch").value;
    const address = document.getElementById("chkAddress").value;
    
    if (!fullName || !phone || !address) {
        return;
    }
    
    // Generate simulated order
    const orderId = "CR-" + Math.floor(100000 + Math.random() * 900000);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalPayable = subtotal + (subtotal * VAT_RATE) + DELIVERY_FEE;
    
    // Populating receipt modal ticket
    document.getElementById("ticketOrderId").textContent = orderId;
    document.getElementById("ticketCustName").textContent = fullName;
    document.getElementById("ticketCustPhone").textContent = phone;
    document.getElementById("ticketBranch").textContent = branch === "assiut" 
        ? TRANSLATIONS[currentLang].branchOption1 
        : TRANSLATIONS[currentLang].branchOption2;
    document.getElementById("ticketAddress").textContent = address;
    document.getElementById("ticketTotalAmount").textContent = `${totalPayable.toFixed(2)} EGP`;
    
    const cartSnapshot = cart.map(item => ({
        id: item.id,
        nameEN: item.nameEN || item.name || '',
        nameAR: item.nameAR || item.name || '',
        size: item.size || null,
        price: item.price,
        quantity: item.quantity
    }));

    const orderData = {
        id: orderId,
        customerName: fullName,
        phone: phone,
        branch: branch,
        address: address,
        items: cartSnapshot,
        subtotal: subtotal,
        total: totalPayable,
        date: new Date().toISOString(),
        status: 'pending'
    };

    // 1. Save order to Firebase (primary cloud storage)
    try {
        if (window._fbAddOrder) {
            window._fbAddOrder(orderData)
                .then(() => console.log('[Firebase] Order saved successfully:', orderId))
                .catch(err => console.error('[Firebase] Error saving order:', err));
        }
    } catch (err) {
        console.warn('[Firebase] Could not save order to cloud:', err);
    }

    // 2. Also cache locally as offline backup
    try {
        const ordersKey = 'carusos_orders';
        const existing = JSON.parse(localStorage.getItem(ordersKey) || '[]');
        existing.unshift(orderData);
        localStorage.setItem(ordersKey, JSON.stringify(existing));
    } catch (err) {
        console.warn('Could not cache order locally', err);
    }

    // 3. Format beautiful WhatsApp Receipt and Redirect Customer
    try {
        const branchName = branch === "assiut" ? "أسيوط (أرض الملاعب - أمام المحافظة)" : "أسيوط الجديدة (منطقة نادي وادي دجلة)";
        
        let waText = `*${WHATSAPP_MSG}*\n\n`;
        waText += `🍕 *طلب جديد من مطعم كاروسوز* 🍕\n\n`;
        waText += `*رقم الطلب:* \`${orderId}\`\n`;
        waText += `*الاسم:* ${fullName}\n`;
        waText += `*الهاتف:* ${phone}\n`;
        waText += `*الفرع:* ${branchName}\n`;
        waText += `*العنوان:* ${address}\n\n`;
        waText += `*🍽️ الأصناف المطلوبة:*\n`;
        
        cartSnapshot.forEach(item => {
            let sizeLabel = "";
            if (item.size && item.size !== 'single') {
                if (item.category === 'pizza' || item.category === 'offer') {
                    sizeLabel = ` (${TRANSLATIONS['ar'][`size${item.size.toUpperCase()}`]})`;
                } else {
                    sizeLabel = ` (${TRANSLATIONS['ar'][item.size === 's' ? 'sizeSingle' : item.size === 'm' ? 'sizeDouble' : 'sizeTriple']})`;
                }
            }
            waText += `- ${item.nameAR || item.nameEN}${sizeLabel} × ${item.quantity} [${item.price} ج]\n`;
        });
        
        waText += `\n*المجموع الفرعي:* ${subtotal.toFixed(2)} ج\n`;
        waText += `*ضريبة القيمة المضافة (${(VAT_RATE * 100).toFixed(0)}%):* ${(subtotal * VAT_RATE).toFixed(2)} ج\n`;
        waText += `*رسوم التوصيل:* ${DELIVERY_FEE.toFixed(2)} ج\n`;
        waText += `*الإجمالي المطلوب عند الاستلام:* *${totalPayable.toFixed(2)} ج*\n\n`;
        waText += `📬 _تم إرسال الطلب عبر موقع كاروسوز أونلاين_`;
        
        const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(waText)}`;
        window.open(waUrl, '_blank');
    } catch (e) {
        console.error('Error launching WhatsApp redirection:', e);
    }

    // Reset order cart state
    cart = [];
    updateCartUI();
    
    // Close checkout details and open success receipt ticket modal
    closeModal("checkoutModal");
    openModal("successOrderModal");
    showToast(TRANSLATIONS[currentLang].toastBooked);
    
    // Reset form
    document.getElementById("checkoutForm").reset();
}

// -------------------------------------------------------------
// Table Reservation Processing Engine
// -------------------------------------------------------------
function processTableBooking(event) {
    event.preventDefault();
    
    const branch = document.getElementById("bookBranch").value;
    const guests = document.getElementById("bookGuests").value;
    const date = document.getElementById("bookDate").value;
    const time = document.getElementById("bookTime").value;
    const zone = document.getElementById("bookZone").value;
    
    if (!guests || !date || !time) {
        return;
    }
    
    const submitBtn = document.getElementById("bookSubmitBtn");
    const originalText = submitBtn.innerHTML;
    
    // Simulated live checking animations
    submitBtn.setAttribute("disabled", "true");
    submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${TRANSLATIONS[currentLang].bookingChecking}`;
    
    setTimeout(() => {
        submitBtn.removeAttribute("disabled");
        submitBtn.innerHTML = originalText;
        
        // Generate reservation ticket
        const bookCode = "RES-" + Math.floor(1000 + Math.random() * 9000);
        
        document.getElementById("resCodeTicket").textContent = bookCode;
        document.getElementById("resBranchTicket").textContent = branch === "assiut" 
            ? TRANSLATIONS[currentLang].branchOption1 
            : TRANSLATIONS[currentLang].branchOption2;
        document.getElementById("resGuestsTicket").textContent = guests;
        document.getElementById("resDateTicket").textContent = `${date} | ${time}`;
        document.getElementById("resZoneTicket").textContent = document.getElementById("bookZone").options[document.getElementById("bookZone").selectedIndex].text;
        
        openModal("successBookingModal");
        showToast(TRANSLATIONS[currentLang].toastBooked);
        
        // Reset reservation form
        document.getElementById("bookingForm").reset();
    }, 2000);
}

// -------------------------------------------------------------
// Interactive Triple Pizza Offer Builder
// -------------------------------------------------------------
function openTripleOfferBuilder(size) {
    selectedOfferSize = size;
    selectedOfferPizzas = [null, null, null];
    
    // Filter only pizza items
    const pizzas = MENU_ITEMS.filter(i => i.category === 'pizza');
    
    // Render lists for step 1, 2, and 3
    for (let step = 1; step <= 3; step++) {
        const stepContainer = document.getElementById(`offerStep${step}Pizzas`);
        if (stepContainer) {
            stepContainer.innerHTML = "";
            pizzas.forEach(p => {
                const pizzaName = currentLang === 'ar' ? p.nameAR : p.nameEN;
                const card = `
                    <div class="op-card" data-pizza-id="${p.id}" onclick="selectOfferPizza(${step}, '${p.id}', this)">
                        ${pizzaName}
                    </div>
                `;
                stepContainer.insertAdjacentHTML("beforeend", card);
            });
        }
    }
    
    // Update offer size label in modal header
    const sizeName = TRANSLATIONS[currentLang][`size${size.toUpperCase()}`];
    document.getElementById("offerModalSizeLabel").textContent = `(${sizeName})`;
    
    openModal("tripleOfferModal");
}

function selectOfferPizza(step, pizzaId, element) {
    // Deselect other cards in same step
    const container = document.getElementById(`offerStep${step}Pizzas`);
    container.querySelectorAll(".op-card").forEach(c => c.classList.remove("selected"));
    
    // Select this card
    element.classList.add("selected");
    selectedOfferPizzas[step - 1] = pizzaId;
}

function confirmTripleOffer() {
    if (!IS_ORDERS_OPEN) {
        showToast(currentLang === 'ar' ? 'عذراً، المطعم لا يستقبل طلبات حالياً 🔴' : 'Sorry, the restaurant is not accepting orders currently 🔴');
        return;
    }

    // Verify all 3 choices are made
    if (selectedOfferPizzas.some(p => p === null)) {
        showToast(TRANSLATIONS[currentLang].toastOfferIncomplete);
        return;
    }
    
    // Flat Promo Pricing
    let flatPrice = 240;
    if (selectedOfferSize === 'm') flatPrice = 360;
    if (selectedOfferSize === 'l') flatPrice = 480;
    
    // Compile pizza names
    const pizzaDetails = selectedOfferPizzas.map(id => {
        const p = MENU_ITEMS.find(item => item.id === id);
        return currentLang === 'ar' ? p.nameAR : p.nameEN;
    });
    
    const offerItemNameEN = `Triple Pizza Bundle: ${pizzaDetails.join(', ')}`;
    const offerItemNameAR = `باقة الثلاث بيتزات: ${pizzaDetails.join(' + ')}`;
    
    // Add to cart
    cart.push({
        id: `offer-triple-${Date.now()}`,
        nameEN: offerItemNameEN,
        nameAR: offerItemNameAR,
        size: selectedOfferSize,
        category: 'offer',
        price: flatPrice,
        image: 'pizza_hero.png', // Fallback to hero pizza image
        quantity: 1
    });
    
    updateCartUI();
    closeModal("tripleOfferModal");
    showToast(TRANSLATIONS[currentLang].toastAdded);
}

// -------------------------------------------------------------
// Floating Notifications Toast Mechanism
// -------------------------------------------------------------
function showToast(message) {
    const container = document.getElementById("toastContainer");
    if (!container) return;
    
    const toastId = "toast-" + Date.now();
    const toastHtml = `
        <div id="${toastId}" class="toast">
            <i class="fas fa-check-circle toast-icon"></i>
            <span class="toast-msg">${message}</span>
        </div>
    `;
    
    container.insertAdjacentHTML("beforeend", toastHtml);
    const toastElement = document.getElementById(toastId);
    
    // Animating introduction
    setTimeout(() => {
        toastElement.classList.add("show");
    }, 100);
    
    // Automatical dismissal
    setTimeout(() => {
        toastElement.classList.remove("show");
        setTimeout(() => {
            toastElement.remove();
        }, 400);
    }, 3000);
}

// -------------------------------------------------------------
// Scrolling Navbar Transitions & Mobile Menu Hooks
// -------------------------------------------------------------
function initEventListeners() {
    // Scrolling header hook (debounced & rAF for performance)
    function debounce(fn, wait = 80) {
        let t;
        return function(...args) {
            clearTimeout(t);
            t = setTimeout(() => fn.apply(this, args), wait);
        };
    }

    const header = document.querySelector("header");
    const handleScroll = () => {
        if (!header) return;
        const add = window.scrollY > 50;
        // use rAF to avoid layout thrashing
        window.requestAnimationFrame(() => {
            header.classList.toggle('scrolled', add);
        });
    };
    window.addEventListener('scroll', debounce(handleScroll, 60), { passive: true });

    // Mobile responsive menu toggle with height animation
    const menuToggle = document.getElementById("menuToggleBtn");
    const navLinks = document.getElementById("navLinksMenu");
    if (menuToggle && navLinks) {
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.addEventListener("click", () => {
            const isOpen = navLinks.classList.toggle("open");
            menuToggle.setAttribute('aria-expanded', String(isOpen));
            // smooth height auto -> use scrollHeight
            if (isOpen) {
                navLinks.style.maxHeight = navLinks.scrollHeight + 'px';
            } else {
                navLinks.style.maxHeight = '0px';
            }
        });

        // Auto closing nav drawer on clicking anchor links
        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("open");
                navLinks.style.maxHeight = '0px';
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }
}
