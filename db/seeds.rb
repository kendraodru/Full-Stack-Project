# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

user1 = User.create(first_name:"Kim", last_name:"Tsui", 
email:"kim234@gmail.com", password: "password")
user2 = User.create(first_name:"Jonothan", last_name:"Smith", 
email:"jonjon@yahoo.com", password: "password")
user3 = User.create(first_name:"Ryan", last_name:"Leung", 
email:"ryry@gmail.com", password: "password")
user4 = User.create(first_name:"Vincent", last_name:"Tsui", 
email:"vince@gmail.com", password: "password")

Product.destroy_all

product1 = Product.create(name:"Superfood Cleanser",
description:"high natural moisture content and cooling properties.",
ingredients: "Proprietary Superfoods Blend: Kale, Spinach, Green Tea, Alfalfa, Vitamins C, E, K",
instructions: "Wet face first. Put 1-2 pumps on wet hands, rub together into a light lather and massage into face and neck for 30 seconds to activate the cold-pressed antioxidants. Rinse thoroughly.",
price: 35, size: "8.0oz")

product2 = Product.create(name:"Kombucha + 11% AHA Exfoliation Power Toner",
description:"The newest addition to your nightly routine. This triple-action power toner blends 8% lactic acid and 3% glycolic acid to smooth skin texture and minimize the appearance of pores. The two ferments, kombucha black tea, and tree bark work as prebiotics to enhance the skin’s natural microbiome.",
instructions: "Wet face first. Put 1-2 pumps on wet hands, rub together into a light lather and massage into face and neck for 30 seconds to activate the cold-pressed antioxidants. Rinse thoroughly.",
ingredients: "Proprietary Super Tea Blend: Kombucha Black Tea Ferment, Tree Bark Ferment, Ginger, Lactic Acid + Glycolic Acid, Citrus Bioflavonoids, and Lemon Water Extract",
price: 35, size: "4.0oz")

product2 = Product.create(name:"Superberry Hydrate + Glow Dream Mask",
description:"The ultimate hydrating radiance boost. This overnight mask deeply hydrates, plumps and brightens with powerful, antioxidant-rich superberries and THD ascorbate, the latest clinically-proven form of stable Vitamin C. This formula helps to target dullness and uneven skin tone for brighter, more radiant skin.",
ingredients: "Proprietary Superberry Blend: Maqui, acai, prickly pear, goji berry, sunflower, moringa, squalane.",
instructions: "At night, apply an even layer to freshly cleansed skin before heading to bed. Follow your regular cleansing routine in the morning. Use nightly for best results.",
price: 48, size: "2.0oz")
