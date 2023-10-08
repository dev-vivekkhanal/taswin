import yellow_corn_1 from '../../assets/products/grains/YellowCorn/yellow_corn_1.png'
import wheat_1 from '../../assets/products/grains/Wheat/wheat_1.png'
import barlay_1 from '../../assets/products/grains/Barley/barley_1.png'
import sorghum_2 from '../../assets/products/grains/Sorghum/sorghum_2.png'
import millet_1 from '../../assets/products/grains/Millet/millet_1.png'
import sorghum_1 from '../../assets/products/grains/Chickpeas/sorghum_1.png'

import wheat_flour_1 from '../../assets/products/flour/WheatFlour/wheat_flour_1.png'
import rice_flour_1 from '../../assets/products/flour/RiceFlour/rice_flour_1.png'
import maida_flour_1 from '../../assets/products/flour/Maida/maida_flour_1.png'

import peanuts_brown from '../../assets/products/pulses/PeanutsBROWN/peanuts_brown.jpg'
import peanuts_red from '../../assets/products/pulses/PeanutsRED/peanuts_red.jpg'

import black_pepper_1 from '../../assets/products/spices/BlackPepper/black_pepper_1.png'
import black_sesame_seed_1 from '../../assets/products/spices/BlackSesameSeed/black_sesame_seed_1.png'
import cardamon_1 from '../../assets/products/spices/Cardamonn/cardamon_1.png'
import cumin_seeds_1 from '../../assets/products/spices/CuminSeeds/cumin_seeds_1.png'
import fenugreek_1 from '../../assets/products/spices/Fenugreek/fenugreek_1.png'
import hulled_regular_1 from '../../assets/products/spices/HulledRegular/hulled_regular_1.png'
import red_chilli from '../../assets/products/spices/RedChilli/red_chilli.png'
import sesame_1 from '../../assets/products/spices/SesameSeed/sesame_1.jpg'
import turmeric_fingers_1 from '../../assets/products/spices/TurmericFingers/turmeric_fingers_1.png'
import turmeric_powder_1 from '../../assets/products/spices/TurmericPowder/turmeric_powder_1.png'

import banana_1 from '../../assets/products/veggies-fruits/Banana/banana_1.png'
import cauliflower_1 from '../../assets/products/veggies-fruits/Cauliflower/cauliflower_1.png'
import fenugreek_veg_1 from '../../assets/products/veggies-fruits/Fenugreek/fenugreek_1.png'
import garlic_dice from '../../assets/products/veggies-fruits/GarlicDice/garlic_dice.png'
import green_french_beans_1 from '../../assets/products/veggies-fruits/GreenFrenchBeans/green_french_beans_1.png'
import onion_red from '../../assets/products/veggies-fruits/OnionRed/onion_red.png'
import onion_white_1 from '../../assets/products/veggies-fruits/OnionWhite/onion_white_1.png'
import papaya_1 from '../../assets/products/veggies-fruits/Papaya/papaya_1.png'
import peach_1 from '../../assets/products/veggies-fruits/Peach/peach_1.png'
import spinach_1 from '../../assets/products/veggies-fruits/Spinach/spinach_1.png'


import rice_1121_basmati_rice from '../../assets/products/rice/1121_basmati_rice.png'
import rice_1509_basmati_rice from '../../assets/products/rice/1509_basmati_rice.png'
import ir_and_other_rice from '../../assets/products/rice/ir_and_other_rice.png'
import pussa_basmati_rice from '../../assets/products/rice/pussa_basmati_rice.png'
import sharbati_rice from '../../assets/products/rice/sharbati_rice.png'
import sigandha_rice from '../../assets/products/rice/sigandha_rice.png'




export const allProducts = [
    {
        category_name: "ALL PRODUCTS",
        status: "active",
        category_id: 'cat-all',
        totalProducts: null,
        products: [
            {
                product_name: "1121 Basmati Rice",
                product_id: "65aw04z-rice",
                product_image: rice_1121_basmati_rice,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science.",
                variants: [
                    { v_id: "1121-RR-1", v_title: "Raw Rice", v_image: null },
                    { v_id: "1121-SR-2", v_title: "Steam Rice", v_image: null },
                    { v_id: "1121-GSR-3", v_title: "Golden Sella Rice", v_image: null },
                    { v_id: "1121-WSR-4", v_title: "White Sella Rice", v_image: null }
                ]
            },
            {
                product_name: "Pusa Basmati Rice",
                product_id: "8kjw31q-rice",
                product_image: pussa_basmati_rice,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science.",
                variants: [
                    { v_id: "Pusa-RR-1", v_title: "Raw Rice", v_image: null },
                    { v_id: "Pusa-SR-2", v_title: "Steam Rice", v_image: null },
                    { v_id: "Pusa-GSR-3", v_title: "Golden Sella Rice", v_image: null },
                    { v_id: "Pusa-CSR-4", v_title: "Creamy Sella Rice", v_image: null }
                ]
            },
            {
                product_name: "1509 Basmati Rice",
                product_id: "6m5d9x3-rice",
                product_image: rice_1509_basmati_rice,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science.",
                variants: [
                    { v_id: "1509-RR-1", v_title: "Raw Rice", v_image: null },
                    { v_id: "1509-SR-2", v_title: "Steam Rice", v_image: null },
                    { v_id: "1509-GSR-3", v_title: "Golden Sella Rice", v_image: null },
                    { v_id: "1509-CSR-4", v_title: "Creamy Sella Rice", v_image: null }
                ]
            },
            {
                product_name: "Sugandha Rice",
                product_id: "2rh96t5-rice",
                product_image: sigandha_rice,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science.",
                variants: [
                    { v_id: "Sugandha-RR-1", v_title: "Raw Rice", v_image: null },
                    { v_id: "Sugandha-SR-2", v_title: "Steam Rice", v_image: null },
                    { v_id: "Sugandha-GSR-3", v_title: "Golden Sella Rice", v_image: null },
                    { v_id: "Sugandha-WSR-4", v_title: "White Sella Rice", v_image: null }
                ]
            },
            {
                product_name: "Sharbati Rice",
                product_id: "9fl1z7g-rice",
                product_image: sharbati_rice,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science.",
                variants: [
                    { v_id: "Sharbati-RR-1", v_title: "Raw Rice", v_image: null },
                    { v_id: "Sharbati-SR-2", v_title: "Steam Rice", v_image: null },
                    { v_id: "Sharbati-GSR-3", v_title: "Golden Sella Rice", v_image: null },
                    { v_id: "Sharbati-WSR-4", v_title: "White Sella Rice", v_image: null }
                ]
            },
            {
                product_name: "PR 11",
                product_id: "7q2x8p9-rice",
                product_image: null,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science.",
                variants: [
                    { v_id: "PR11-RR-1", v_title: "Raw Rice", v_image: null },
                    { v_id: "PR11-SR-2", v_title: "Steam Rice", v_image: null },
                    { v_id: "PR11-GSR-3", v_title: "Golden Sella Rice", v_image: null },
                    { v_id: "PR11-WSR-4", v_title: "White Sella Rice", v_image: null }
                ]
            },
            {
                product_name: "Others",
                product_id: "5h4k1d7-rice",
                product_image: ir_and_other_rice,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science.",
                variants: [
                    { v_id: "Sona-Masuri-RR-1", v_title: "Sona Masuri Rice", v_image: null },
                    { v_id: "IR64-PR-2", v_title: "IR 64 Parboiled Rice", v_image: null },
                    { v_id: "IR64-RR-3", v_title: "IR 64 Raw Rice", v_image: null },
                    { v_id: "Swarna-PR-4", v_title: "Swarna Raw and Parboiled", v_image: null }
                ]
            },
            {
                product_name: "Yellow Corn",
                product_id: "yq3b1r9-grains",
                product_image: yellow_corn_1,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Wheat",
                product_id: "s7g9r2-grains",
                product_image: wheat_1,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Barley",
                product_id: "v6w4k7-grains",
                product_image: barlay_1,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Sorghum",
                product_id: "t5j8h9-grains",
                product_image: sorghum_2,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Millet",
                product_id: "l9f3o6-grains",
                product_image: millet_1,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Chickpeas",
                product_id: "m8c1g6-grains",
                product_image: sorghum_1,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Wheat Flour",
                product_id: "p8q2k6-flours",
                product_image: wheat_flour_1,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Rice Flour",
                product_id: "m5a2i9-flours",
                product_image: rice_flour_1,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Maida Flour",
                product_id: "n7h3u6-flours",
                product_image: maida_flour_1,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            // {
            //     product_name: "Rapeseed Meal",
            //     product_id: "x9z4g1-poultry",
            //     product_image: null,
            //     value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            // },
            // {
            //     product_name: "De-oiled Rice Bran",
            //     product_id: "y7a3h6-poultry",
            //     product_image: null,
            //     value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            // },
            // {
            //     product_name: "Cottonseed Meal",
            //     product_id: "j8f9m3-poultry",
            //     product_image: null,
            //     value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            // },
            // {
            //     product_name: "Soybean Meal",
            //     product_id: "z7s8d2-poultry",
            //     product_image: null,
            //     value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            // },
            // {
            //     product_name: "Gua Meal",
            //     product_id: "q3m7c1-poultry",
            //     product_image: null,
            //     value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            // },
            // {
            //     product_name: "Castor Meal",
            //     product_id: "k1s9e2-poultry",
            //     product_image: null,
            //     value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            // },
            {
                product_name: "Onion Red",
                product_id: "d4i7g9-vegetables-fruits",
                product_image: onion_red,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Onion White",
                product_id: "g5c2o6-vegetables-fruits",
                product_image: onion_white_1,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Garlic Dice",
                product_id: "e2g3m7-vegetables-fruits",
                product_image: garlic_dice,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Cauliflower",
                product_id: "r9e8d2-vegetables-fruits",
                product_image: cauliflower_1,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Fenugreek",
                product_id: "l6f3o6-vegetables-fruits",
                product_image: fenugreek_veg_1,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Green French Beans",
                product_id: "v6w4k7-vegetables-fruits",
                product_image: green_french_beans_1,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Spinach",
                product_id: "u7r2n5-vegetables-fruits",
                product_image: spinach_1,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Papaya",
                product_id: "m3p1a9-vegetables-fruits",
                product_image: papaya_1,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Peach",
                product_id: "a4b3c6-vegetables-fruits",
                product_image: peach_1,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Banana",
                product_id: "t5j8h9-vegetables-fruits",
                product_image: banana_1,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Red Chilies",
                product_id: "o2p7h8-spices",
                product_image: red_chilli,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Cumin Seeds",
                product_id: "s4p5i6-spices",
                product_image: cumin_seeds_1,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Black Pepper",
                product_id: "f3e6n9-spices",
                product_image: black_pepper_1,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Fenugreek",
                product_id: "m6b5s2-spices",
                product_image: fenugreek_1,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Black Sesame Seed",
                product_id: "w5e2s8-spices",
                product_image: black_sesame_seed_1,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Sesame Seed",
                product_id: "d9r4c1-spices",
                product_image: sesame_1,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Hulled Regular",
                product_id: "g5f3s6-spices",
                product_image: hulled_regular_1,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Turmeric Fingers",
                product_id: "p4n7s8-spices",
                product_image: turmeric_fingers_1,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Turmeric Powder",
                product_id: "r2m6f3-spices",
                product_image: turmeric_powder_1,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Peanuts Brown",
                product_id: "o4b3d6-pulses",
                product_image: peanuts_brown,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Peanuts Red",
                product_id: "p1r7b2-pulses",
                product_image: peanuts_red,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
        ]
    },
    {
        category_name: "RICE",
        category_id: 'cat-001',
        status: "active",
        comments: "Images not yet decided",
        totalProducts: 28,
        products: [
            {
                product_name: "1121 Basmati Rice",
                product_id: "65aw04z-rice",
                product_image: rice_1121_basmati_rice,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science.",
                variants: [
                    { v_id: "1121-RR-1", v_title: "Raw Rice", v_image: null },
                    { v_id: "1121-SR-2", v_title: "Steam Rice", v_image: null },
                    { v_id: "1121-GSR-3", v_title: "Golden Sella Rice", v_image: null },
                    { v_id: "1121-WSR-4", v_title: "White Sella Rice", v_image: null }
                ]
            },
            {
                product_name: "Pusa Basmati Rice",
                product_id: "8kjw31q-rice",
                product_image: pussa_basmati_rice,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science.",
                variants: [
                    { v_id: "Pusa-RR-1", v_title: "Raw Rice", v_image: null },
                    { v_id: "Pusa-SR-2", v_title: "Steam Rice", v_image: null },
                    { v_id: "Pusa-GSR-3", v_title: "Golden Sella Rice", v_image: null },
                    { v_id: "Pusa-CSR-4", v_title: "Creamy Sella Rice", v_image: null }
                ]
            },
            {
                product_name: "1509 Basmati Rice",
                product_id: "6m5d9x3-rice",
                product_image: rice_1509_basmati_rice,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science.",
                variants: [
                    { v_id: "1509-RR-1", v_title: "Raw Rice", v_image: null },
                    { v_id: "1509-SR-2", v_title: "Steam Rice", v_image: null },
                    { v_id: "1509-GSR-3", v_title: "Golden Sella Rice", v_image: null },
                    { v_id: "1509-CSR-4", v_title: "Creamy Sella Rice", v_image: null }
                ]
            },
            {
                product_name: "Sugandha Rice",
                product_id: "2rh96t5-rice",
                product_image: sigandha_rice,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science.",
                variants: [
                    { v_id: "Sugandha-RR-1", v_title: "Raw Rice", v_image: null },
                    { v_id: "Sugandha-SR-2", v_title: "Steam Rice", v_image: null },
                    { v_id: "Sugandha-GSR-3", v_title: "Golden Sella Rice", v_image: null },
                    { v_id: "Sugandha-WSR-4", v_title: "White Sella Rice", v_image: null }
                ]
            },
            {
                product_name: "Sharbati Rice",
                product_id: "9fl1z7g-rice",
                product_image: sharbati_rice,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science.",
                variants: [
                    { v_id: "Sharbati-RR-1", v_title: "Raw Rice", v_image: null },
                    { v_id: "Sharbati-SR-2", v_title: "Steam Rice", v_image: null },
                    { v_id: "Sharbati-GSR-3", v_title: "Golden Sella Rice", v_image: null },
                    { v_id: "Sharbati-WSR-4", v_title: "White Sella Rice", v_image: null }
                ]
            },
            {
                product_name: "PR 11",
                product_id: "7q2x8p9-rice",
                product_image: null,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science.",
                variants: [
                    { v_id: "PR11-RR-1", v_title: "Raw Rice", v_image: null },
                    { v_id: "PR11-SR-2", v_title: "Steam Rice", v_image: null },
                    { v_id: "PR11-GSR-3", v_title: "Golden Sella Rice", v_image: null },
                    { v_id: "PR11-WSR-4", v_title: "White Sella Rice", v_image: null }
                ]
            },
            {
                product_name: "Others",
                product_id: "5h4k1d7-rice",
                product_image: ir_and_other_rice,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science.",
                variants: [
                    { v_id: "Sona-Masuri-RR-1", v_title: "Sona Masuri Rice", v_image: null },
                    { v_id: "IR64-PR-2", v_title: "IR 64 Parboiled Rice", v_image: null },
                    { v_id: "IR64-RR-3", v_title: "IR 64 Raw Rice", v_image: null },
                    { v_id: "Swarna-PR-4", v_title: "Swarna Raw and Parboiled", v_image: null }
                ]
            },
        ]
    },
    {
        category_name: "GRAINS",
        category_id: 'cat-002',
        status: "active",
        comments: null,
        totalProducts: 6,
        products: [
            {
                product_name: "Yellow Corn",
                product_id: "yq3b1r9-grains",
                product_image: yellow_corn_1,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Wheat",
                product_id: "s7g9r2-grains",
                product_image: wheat_1,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Barley",
                product_id: "v6w4k7-grains",
                product_image: barlay_1,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Sorghum",
                product_id: "t5j8h9-grains",
                product_image: sorghum_2,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Millet",
                product_id: "l9f3o6-grains",
                product_image: millet_1,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Chickpeas",
                product_id: "m8c1g6-grains",
                product_image: sorghum_1,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            }
        ]
    },
    {
        category_name: "FLOURS",
        category_id: 'cat-003',
        status: "active",
        comments: null,
        totalProducts: 3,
        products: [
            {
                product_name: "Wheat Flour",
                product_id: "p8q2k6-flours",
                product_image: wheat_flour_1,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Rice Flour",
                product_id: "m5a2i9-flours",
                product_image: rice_flour_1,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Maida Flour",
                product_id: "n7h3u6-flours",
                product_image: maida_flour_1,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
        ]
    },
    {
        category_name: "POULTRY",
        category_id: 'cat-004',
        status: "deactive",
        comments: null,
        totalProducts: 6,
        products: [
            // {
            //     product_name: "Rapeseed Meal",
            //     product_id: "x9z4g1-poultry",
            //     product_image: null,
            //     value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            // },
            // {
            //     product_name: "De-oiled Rice Bran",
            //     product_id: "y7a3h6-poultry",
            //     product_image: null,
            //     value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            // },
            // {
            //     product_name: "Cottonseed Meal",
            //     product_id: "j8f9m3-poultry",
            //     product_image: null,
            //     value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            // },
            // {
            //     product_name: "Soybean Meal",
            //     product_id: "z7s8d2-poultry",
            //     product_image: null,
            //     value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            // },
            // {
            //     product_name: "Gua Meal",
            //     product_id: "q3m7c1-poultry",
            //     product_image: null,
            //     value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            // },
            // {
            //     product_name: "Castor Meal",
            //     product_id: "k1s9e2-poultry",
            //     product_image: null,
            //     value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            // }
        ]
    },
    {
        category_name: "VEGETABLES / FRUITS",
        category_id: 'cat-005',
        status: "active",
        comments: null,
        totalProducts: 10,
        products: [
            {
                product_name: "Onion Red",
                product_id: "d4i7g9-vegetables-fruits",
                product_image: onion_red,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Onion White",
                product_id: "g5c2o6-vegetables-fruits",
                product_image: onion_white_1,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Garlic Dice",
                product_id: "e2g3m7-vegetables-fruits",
                product_image: garlic_dice,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Cauliflower",
                product_id: "r9e8d2-vegetables-fruits",
                product_image: cauliflower_1,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Fenugreek",
                product_id: "l6f3o6-vegetables-fruits",
                product_image: fenugreek_veg_1,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Green French Beans",
                product_id: "v6w4k7-vegetables-fruits",
                product_image: green_french_beans_1,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Spinach",
                product_id: "u7r2n5-vegetables-fruits",
                product_image: spinach_1,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Papaya",
                product_id: "m3p1a9-vegetables-fruits",
                product_image: papaya_1,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Peach",
                product_id: "a4b3c6-vegetables-fruits",
                product_image: peach_1,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Banana",
                product_id: "t5j8h9-vegetables-fruits",
                product_image: banana_1,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            }
        ]
    },
    {
        category_name: "SPICES",
        category_id: 'cat-006',
        status: "active",
        comments: null,
        totalProducts: 10,
        products: [
            {
                product_name: "Red Chilies",
                product_id: "o2p7h8-spices",
                product_image: red_chilli,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Cumin Seeds",
                product_id: "s4p5i6-spices",
                product_image: cumin_seeds_1,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Black Pepper",
                product_id: "f3e6n9-spices",
                product_image: black_pepper_1,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Fenugreek",
                product_id: "m6b5s2-spices",
                product_image: fenugreek_1,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Black Sesame Seed",
                product_id: "w5e2s8-spices",
                product_image: black_sesame_seed_1,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Sesame Seed",
                product_id: "d9r4c1-spices",
                product_image: sesame_1,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Hulled Regular",
                product_id: "g5f3s6-spices",
                product_image: hulled_regular_1,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Turmeric Fingers",
                product_id: "p4n7s8-spices",
                product_image: turmeric_fingers_1,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Turmeric Powder",
                product_id: "r2m6f3-spices",
                product_image: turmeric_powder_1,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            }
        ]
    },
    {
        category_name: "OIL",
        category_id: 'cat-007',
        status: "active",
        comments: null,
        totalProducts: null,
        products: []
    },
    {
        category_name: "PULSES",
        category_id: 'cat-008',
        status: "active",
        comments: null,
        totalProducts: 2,
        products: [
            {
                product_name: "Peanuts Brown",
                product_id: "o4b3d6-pulses",
                product_image: peanuts_brown,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
            {
                product_name: "Peanuts Red",
                product_id: "p1r7b2-pulses",
                product_image: peanuts_red,
                value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            },
        ]
    },
    {
        category_name: "SUGAR",
        category_id: 'cat-009',
        status: "active",
        comments: null,
        totalProducts: null,
        products: []
    },
    {
        category_name: "TOBACCO",
        category_id: 'cat-010',
        status: "active",
        comments: null,
        totalProducts: 1,
        products: [
            //   {
            //     product_name: "Tobacco Product 1",
            //     product_id: "r1t2o3-tobacco",
            //     product_image: null,
            //     value_desc: "This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. Here, we drive research in Science."
            //   },
        ]
    },
    {
        category_name: "ADDITIONAL",
        category_id: 'cat-011',
        status: "active",
        comments: null,
        totalProducts: null,
        products: []
    }
];