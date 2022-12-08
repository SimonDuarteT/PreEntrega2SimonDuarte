const products = [
  {
      id: 30,
      name: "Women Whey Protein",
      stock: 0,
      cost: 35000,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 200,
      image: [
          "https://res.cloudinary.com/dfq1vszr3/image/upload/v1670533085/16369634_1_hdx9kq.jpg"            
      ],
      sales: 0,
    createdAt: "2022-12-18T05:11:04.952Z",
    updatedAt: "2022-12-18T19:39:05.347Z",
    categoryId: 9,
    brandId: 95,
    packingId: null,
    category: {
      name: "Proteinas",
      id: 9
    },
    brand: {
      id: 95,
      name: "Proteinas Whey"
    },
    reviews: []
  },
  {
      id: 29,
      name: "Premiun Line Protein",
      stock: 0,
      cost: 38000,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 120,
      image: [
          "https://res.cloudinary.com/dfq1vszr3/image/upload/v1670533093/16369638_1_xgcxxw.jpg"            
      ],
      sales: 0,
    createdAt: "2022-12-18T05:11:04.952Z",
    updatedAt: "2022-12-18T19:39:05.347Z",
    categoryId: 9,
    brandId: 95,
    packingId: null,
    category: {
      name: "Proteinas",
      id: 9
    },
    brand: {
      id: 95,
      name: "Proteinas Whey"
    },
    reviews: []
  },
  {
      id: 76,
      name: "Premiun Line Blue",
      stock: 0,
      cost: 38000,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 163,
      image: [
          "https://res.cloudinary.com/dfq1vszr3/image/upload/v1670533105/16369640_1_tv1fmz.jpg"            
      ],
      sales: 0,
    createdAt: "2022-12-18T05:11:04.952Z",
    updatedAt: "2022-12-18T19:39:05.347Z",
    categoryId: 9,
    brandId: 95,
    packingId: null,
    category: {
      name: "Proteinas",
      id: 9
    },
    brand: {
      id: 95,
      name: "Proteinas Whey"
    },
    reviews: []
  },
  {
      id: 170,
      name: "Premiun line Brown",
      stock: 0,
      cost: 38000,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 170,
      image: [
          "https://res.cloudinary.com/dfq1vszr3/image/upload/v1670533120/16369642_1_jxbbmn.jpg"            
      ],
      sales: 0,
    createdAt: "2022-12-18T05:11:04.952Z",
    updatedAt: "2022-12-18T19:39:05.347Z",
    categoryId: 9,
    brandId: 95,
    packingId: null,
    category: {
      name: "Proteinas",
      id: 9
    },
    brand: {
      id: 95,
      name: "Proteinas Whey"
    },
    reviews: []
  },
  {
      id: 233,
      name: "Women Whey Protein+",
      stock: 54,
      cost: 39990,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 200,
      image: [
          "https://res.cloudinary.com/dfq1vszr3/image/upload/v1670533130/16518401_1_r3vkhl.jpg"            
      ],
      sales: 0,
    createdAt: "2022-12-18T05:11:04.952Z",
    updatedAt: "2022-12-18T19:39:05.347Z",
    categoryId: 9,
    brandId: 95,
    packingId: null,
    category: {
      name: "Proteinas",
      id: 9
    },
    brand: {
      id: 95,
      name: "Proteinas Whey"
    },
    reviews: []
  },
  {
      id: 139,
      name: "Carnitech Mass",
      stock: 25,
      cost: 52990,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 65,
      image: [
          "https://res.cloudinary.com/dfq1vszr3/image/upload/v1670533175/L_atlh-carnitech-mass6196_hood8b.jpg"            
      ],
      sales: 0,
    createdAt: "2022-12-18T05:11:04.952Z",
    updatedAt: "2022-12-18T19:39:05.347Z",
    categoryId: 1,
    brandId: 10,
    packingId: null,
    category: {
      name: "Ganador de Masa",
      id: 1
    },
    brand: {
      id: 10,
      name: "Ganadores"
    },
    reviews: []
  },
  {
      id: 68,
      name: "Super Mass Gainer",
      stock: 0,
      cost: 49990,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 140,
      image: [
          "https://res.cloudinary.com/dfq1vszr3/image/upload/v1670533162/D_NQ_NP_874095-MLC52332555519_112022-O_hihcpx.jpg"            
      ],
      sales: 0,
    createdAt: "2022-12-18T05:11:04.952Z",
    updatedAt: "2022-12-18T19:39:05.347Z",
    categoryId: 1,
    brandId: 10,
    packingId: null,
    category: {
      name: "Ganador de Masa",
      id: 1
    },
    brand: {
      id: 10,
      name: "Ganadores"
    },
    reviews: []
  },
  {
      id: 69,
      name: "Serious Mass",
      stock: 0,
      cost: 48990,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 200,
      image: [
          "https://res.cloudinary.com/dfq1vszr3/image/upload/v1670532878/L_on-mass-6lb-vainilla3027_oooerr.jpg"            
      ],
      sales: 0,
    createdAt: "2022-12-18T05:11:04.952Z",
    updatedAt: "2022-12-18T19:39:05.347Z",
    categoryId: 1,
    brandId: 10,
    packingId: null,
    category: {
      name: "Proteinas",
      id: 1
    },
    brand: {
      id: 10,
      name: "Proteinas Whey"
    },
    reviews: []
  },
  {
      id: 58,
      name: "Platinum Creatine",
      stock: 0,
      cost: 28000,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 200,
      image: [
          "https://res.cloudinary.com/dfq1vszr3/image/upload/v1670533145/D_NQ_NP_728673-MLC44353880587_122020-O_bfeb9n.jpg"            
      ],
      sales: 0,
    createdAt: "2022-12-18T05:11:04.952Z",
    updatedAt: "2022-12-18T19:39:05.347Z",
    categoryId: 5,
    brandId: 17,
    packingId: null,
    category: {
      name: "Creatina",
      id: 5
    },
    brand: {
      id: 17,
      name: "Creatinas"
    },
    reviews: []
  },
  {
      id: 57,
      name: "Universal Creatine",
      stock: 0,
      cost: 25000,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 200,
      image: [
          "https://res.cloudinary.com/dfq1vszr3/image/upload/v1670533077/21801_front2020good_qcpo2m.jpg"            
      ],
      sales: 0,
    createdAt: "2022-12-18T05:11:04.952Z",
    updatedAt: "2022-12-18T19:39:05.347Z",
    categoryId: 5,
    brandId: 17,
    packingId: null,
    category: {
      name: "Creatina",
      id: 5
    },
    brand: {
      id: 17,
      name: "Creatinas"
    },
    reviews: []
  },    
];
module.exports = {
  products,
}