# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
demo_user = User.create(first_name:"Demo", last_name:"User", 
email:"demo_user@gmail.com", password: "password")
user1 = User.create(first_name:"Kim", last_name:"Tsui", 
email:"kim234@gmail.com", password: "password")
user2 = User.create(first_name:"Jonothan", last_name:"Smith", 
email:"jonjon@yahoo.com", password: "password")
user3 = User.create(first_name:"Ryan", last_name:"Leung", 
email:"ryry@gmail.com", password: "password")
user4 = User.create(first_name:"Vincent", last_name:"Tsui", 
email:"vince@gmail.com", password: "password")
user4 = User.create(first_name:"Try", last_name:"Knov", 
email:"justry@gmail.com", password: "password")

Product.destroy_all

product1 = Product.create(name:"Superfood Cleanser",
description:"Our powerful, but gentle daily face wash is formulated with cold-pressed antioxidants - kale, spinach, and green tea - to give your skin the ultimate cleanse.",
ingredients: "Proprietary Superfoods Blend: Kale, Spinach, Green Tea, Alfalfa, Vitamins C, E, K",
instructions: "Wet face first. Put 1-2 pumps on wet hands, rub together into a light lather and massage into face and neck for 30 seconds to activate the cold-pressed antioxidants. Rinse thoroughly.",
price: 35, size: "8.0oz")

product2 = Product.create(name:"Kombucha + AHA Exfoliation Power Toner",
description:"The newest addition to your nightly routine. This triple-action power toner blends 8% lactic acid and 3% glycolic acid to smooth skin texture and minimize the appearance of pores. The two ferments, kombucha black tea, and tree bark work as prebiotics to enhance the skin’s natural microbiome.",
instructions: "Wet face first. Put 1-2 pumps on wet hands, rub together into a light lather and massage into face and neck for 30 seconds to activate the cold-pressed antioxidants. Rinse thoroughly.",
ingredients: "Proprietary Super Tea Blend: Kombucha Black Tea Ferment, Tree Bark Ferment, Ginger, Lactic Acid + Glycolic Acid, Citrus Bioflavonoids, and Lemon Water Extract",
price: 35, size: "4.0oz")

product3 = Product.create(name:"Superberry Hydrate + Glow Dream Mask",
description:"The ultimate hydrating radiance boost. This overnight mask deeply hydrates, plumps and brightens with powerful, antioxidant-rich superberries and THD ascorbate, the latest clinically-proven form of stable Vitamin C. This formula helps to target dullness and uneven skin tone for brighter, more radiant skin.",
ingredients: "Proprietary Superberry Blend: Maqui, acai, prickly pear, goji berry, sunflower, moringa, squalane.",
instructions: "At night, apply an even layer to freshly cleansed skin before heading to bed. Follow your regular cleansing routine in the morning. Use nightly for best results.",
price: 48, size: "2.0oz")

product4 = Product.create(name:"Superfood Air-Whip Moisture Cream",
description:"Get ready for some leafy green moisture with this lightweight, air-whipped moisture cream. All the antioxidant-packed superfoods you love combine forces with Hyaluronic Acid, creating a moisturizer that instantly restores, balances and conditions. Friendly for all skin types, best for combo/oily.",
ingredients: "Proprietary Superfoods Blend: Kale, spinach, green tea, alfalfa, vitamins C, E, K.",
instructions: "Smooth a dime-sized amount of cream into the skin until it is fully absorbed. Use morning and night.",
price: 48, size: "2.0oz")

product5 = Product.create(name:"Adaptogen Deep Moisture Cream",
description:"A deeply hydrating moisturizer with superior plant extracts and a pro-grade peptide complex formulated for dry, reactive, and sensitive skin. ",
ingredients: "Proprietary Adaptogen Blend: Ashwagandha, Rhodiola, and Reishi. The use of adaptogens as medicine, taken internally and applied topically, has been championed by Eastern medicine and Ayurveda for 5,000 years.",
instructions: "Apply to cleansed skin morning and evening after Superberry Hydrate Oil and Superfood Serum.",
price: 58, size: "2.0oz")

product6 = Product.create(name:"Adaptogen Soothe + Hydrate Activated Mist",
description:"An ultra-fine mist that hydrates, calms visible redness, and evens the look of skin tone with antioxidant-rich adaptogens, hyaluronic acid, and soothing peptides—like a serum in a mist.",
ingredients: "Proprietary Adaptogen Blend: Ashwagandha, Rhodiola, and Reishi. The use of adaptogens as medicine, taken internally and applied topically, has been championed by Eastern medicine and Ayurveda for 5,000 years.",
instructions: "Use morning, night, and throughout the day to keep skin calm and hydrated with a healthy glow. Use pre and post-makeup to refresh skin. Shake well. Avoid eye contact.",
price: 42, size: "4.0oz")


product6 = Product.create(name:"Adaptogen Soothe Mist",
description:"An ultra-fine mist that hydrates, calms visible redness, and evens the look of skin tone with antioxidant-rich adaptogens, hyaluronic acid, and soothing peptides—like a serum in a mist.",
ingredients: "Proprietary Adaptogen Blend: Ashwagandha, Rhodiola, and Reishi. The use of adaptogens as medicine, taken internally and applied topically, has been championed by Eastern medicine and Ayurveda for 5,000 years.",
instructions: "Use morning, night, and throughout the day to keep skin calm and hydrated with a healthy glow. Use pre and post-makeup to refresh skin. Shake well. Avoid eye contact.",
price: 42, size: "4.0oz")

Cart.destroy_all

cart1 = Cart.create(user_id: demo_user.id)
cart2 = Cart.create(user_id: user4.id)

cart_items1 = CartItem.create(cart_id: cart1.id, product_id: product3.id,quantity:2)
cart_items2 = CartItem.create(cart_id: cart2.id, product_id: product2.id, quantity:3)
cart_items3 = CartItem.create(cart_id: cart1.id, product_id: product1.id,quantity:2)
