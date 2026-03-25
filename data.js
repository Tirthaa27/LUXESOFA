// =====================================
// Products data source (standalone file)
// - Each product object includes fields for the storefront and cart features.
// - Categories grouped with comments for readability and maintenance.
// =====================================
const products = [
    // L-Shaped Sofas
    {
        id: 1,
        name: "Evergreen Velvet L-Shape",
        category: "L-Shaped Sofas",
        price: 1299,
        oldPrice: 1599,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800",
        material: "Premium Velvet",
        colors: ["Charcoal", "Emerald", "Navy"],
        size: "280cm x 180cm",
        description: "The Evergreen L-Shape is designed for those who value both style and relaxation. Its deep cushions and soft velvet finish make it the centerpiece of any modern living room."
    },
    {
        id: 2,
        name: "Hygge Corner Sofa",
        category: "L-Shaped Sofas",
        price: 899,
        oldPrice: 1100,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=80&w=800",
        material: "Organic Linen",
        colors: ["Sand Beige", "Soft Grey"],
        size: "240cm x 160cm",
        description: "Inspired by Danish comfort, the Hygge Corner sofa brings a warm, minimalist aesthetic to your home. It features a sturdy birch frame and linen-blend upholstery."
    },
    {
        id: 3,
        name: "Majestic Sectional L",
        category: "L-Shaped Sofas",
        price: 2100,
        oldPrice: 2500,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=800",
        material: "Full Grain Leather",
        colors: ["Cognac", "Deep Black"],
        size: "300cm x 200cm",
        description: "Crafted from hand-selected Italian leather, the Majestic L-Shape ages beautifully over time. It offers firm support and a sophisticated look for executive homes."
    },

    // Sectional Sofas
    {
        id: 4,
        name: "Modular Infinity Sectional",
        category: "Sectional Sofas",
        price: 3200,
        oldPrice: 3800,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1567016432779-094069958ad5?auto=format&fit=crop&q=80&w=800",
        material: "Stain-Resistant Fabric",
        colors: ["Cloud White", "Urban Slate"],
        size: "Configurable",
        description: "The Infinity Sectional adapts to your life. Its modular blocks can be rearranged to fit any room layout, providing endless possibilities for comfort."
    },
    {
        id: 5,
        name: "Urban Loft Modular Set",
        category: "Sectional Sofas",
        price: 1500,
        oldPrice: 1800,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1550254478-ead40cd82477?auto=format&fit=crop&q=80&w=800",
        material: "Textured Weave",
        colors: ["Pebble", "Olive"],
        size: "260cm x 260cm",
        description: "Perfect for active lifestyles, the Urban Loft set features high-resilience foam and a durable weave that resists wear and tear while maintaining its shape."
    },

    // Recliner Sofas
    {
        id: 6,
        name: "Zenith Power Recliner",
        category: "Recliner Sofas",
        price: 1100,
        oldPrice: 1400,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1512212621149-107ffe572d2f?auto=format&fit=crop&q=80&w=800",
        material: "Leatherette",
        colors: ["Java Brown", "Onyx"],
        size: "210cm x 95cm",
        description: "The Zenith brings the cinema experience home. With motorized reclining, adjustable headrests, and integrated USB ports, it's the peak of leisure technology."
    },
    {
        id: 7,
        name: "Nesta manual Recliner",
        category: "Recliner Sofas",
        price: 950,
        oldPrice: 1200,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800",
        material: "Breathable Microfiber",
        colors: ["Mocca", "Shadow Grey"],
        size: "200cm x 100cm",
        description: "Simple, reliable, and incredibly soft. The Nesta features a manual reclining mechanism that lets you find your perfect angle of repose."
    },

    // Wooden Sofas
    {
        id: 8,
        name: "Solid Oak Heritage",
        category: "Wooden Sofas",
        price: 750,
        oldPrice: 900,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1583847268964-b28dc2f51f92?auto=format&fit=crop&q=80&w=800",
        material: "FSC Oak Wood",
        colors: ["Honey Oak", "Dark Walnut"],
        size: "180cm x 80cm",
        description: "Celebrate natural beauty with our Heritage collection. Each frame is carved from solid oak and paired with high-density cotton cushions for a timeless feel."
    },

    // Fabric Sofas
    {
        id: 9,
        name: "Velvet Serenity Settee",
        category: "Fabric Sofas",
        price: 600,
        oldPrice: 800,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&q=80&w=800",
        material: "Matte Velvet",
        colors: ["Blush Pink", "Turquoise", "Ochre"],
        size: "160cm x 85cm",
        description: "Compact yet bold, the Serenity Settee fits beautifully in entryways or small apartments, adding a touch of mid-century elegance to your space."
    },

    // Leather Sofas
    {
        id: 10,
        name: "Classic Oxford Chesterfield",
        category: "Leather Sofas",
        price: 2500,
        oldPrice: 3000,
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1631679017462-8b81274a270d?auto=format&fit=crop&q=80&w=800",
        material: "Distressed Leather",
        colors: ["Oxblood Red", "Vintage Brown"],
        size: "220cm x 90cm",
        description: "The Oxford is the definitive Chesterfield. Featuring deep button tufting and nailhead trim, it's a statement piece that exudes authority and class."
    },

    // Sofa Cum Beds
    {
        id: 11,
        name: "Duo-Function Sleeper",
        category: "Sofa Cum Beds",
        price: 550,
        oldPrice: 750,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1512212621149-107ffe572d2f?auto=format&fit=crop&q=80&w=800",
        material: "Polyester Drill",
        colors: ["Ash Grey", "Midnight Blue"],
        size: "190cm x 140cm",
        description: "Maximize your square footage with the Duo-Function. It transitions seamlessly from a comfortable three-seater to a queen-size guest bed."
    },

    // Luxury Designer Sofas
    {
        id: 12,
        name: "Lumina Curved Designer",
        category: "Luxury Designer Sofas",
        price: 4500,
        oldPrice: 5500,
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800",
        material: "Premium Bouclé",
        colors: ["Ivory", "Soft Sand"],
        size: "250cm x 110cm",
        description: "A sculptural masterpiece, the Lumina features sweeping curves and a tactile bouclé finish that makes it feel like sitting on a cloud."
    },
    {
        id: 13,
        name: "Prestige Wingback Velvet",
        category: "Luxury Designer Sofas",
        price: 3800,
        oldPrice: 4500,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&q=80&w=800",
        material: "Royal Velvet",
        colors: ["Emerald", "Bordeaux"],
        size: "220cm x 110cm",
        description: "The Prestige Wingback merges traditional craftsmanship with contemporary flair, offering a high-back design that ensures privacy and comfort."
    }
];

export default products;
