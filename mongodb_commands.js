 db.students.deleteMany({})
db.students.insertMany([
  {
|         rollNo: 101,
|         name: "Vasanth",
|         age: 21,
|         department: "CSE",
|         marks: 85,
|         skills: ["Java", "Python", "MongoDB"],
|         address: {
|             city: "Chennai",
|             state: "Tamil Nadu"
|         },
|         scholarship: true
|     },
| 
|     {
|         rollNo: 102,
|         name: "Rahul",
|         age: 22,
|         department: "ECE",
|         marks: 72,
|         skills: ["C", "Python", "Arduino"],
|         address: {
|             city: "Bangalore",
|             state: "Karnataka"
|         },
|         scholarship: false
|     },
| 
|     {
|         rollNo: 103,
|         name: "Priya",
|         age: 20,
|         department: "CSE",
|         marks: 91,
|         skills: ["Java", "Python", "AI"],
|         address: {
|             city: "Chennai",
|             state: "Tamil Nadu"
|         },
|         scholarship: true
|     },
| 
|     {
|         rollNo: 104,
|         name: "Arjun",
|         age: 23,
|         department: "MECH",
|         marks: 68,
|         skills: ["AutoCAD", "C", "Java"],
|         address: {
|             city: "Hyderabad",
|             state: "Telangana"
|         }
|     },
| 
|     {
|         rollNo: 105,
|         name: "Sneha",
|         age: 21,
|         department: "IT",
|         marks: 88,
|         skills: ["Python", "MongoDB", "HTML"],
|         address: {
|             city: "Chennai",
|             state: "Tamil Nadu"
|         },
|         scholarship: true
|     },
| 
|     {
|         rollNo: 106,
|         name: "Kiran",
|         age: 24,
|         department: "EEE",
|         marks: 65,
|         skills: ["C", "Arduino", "MATLAB"],
|         address: {
|             city: "Pune",
|             state: "Maharashtra"
|         },
|         scholarship: false
|     },
| 
|     {
|         rollNo: 107,
|         name: "Anjali",
|         age: 20,
|         department: "CSE",
|         marks: 95,
|         skills: ["Java", "Python", "AI", "MongoDB"],
|         address: {
|             city: "Bangalore",
|             state: "Karnataka"
|         },
|         scholarship: true
|     },
| 
|     {
|         rollNo: 108,
|         name: "Rohit",
|         age: 22,
|         department: "IT",
|         marks: 76,
|         skills: ["JavaScript", "HTML", "CSS"],
|         address: {
|             city: "Hyderabad",
|             state: "Telangana"
|         },
|         scholarship: false
|     },
| 
|     {
|         rollNo: 109,
|         name: "Divya",
|         age: 21,
|         department: "CSE",
|         marks: 89,
|         skills: ["Python", "MongoDB", "Java"],
|         address: {
|             city: "Chennai",
|             state: "Tamil Nadu"
|         },
|         scholarship: true
|     },
| 
|     {
|         rollNo: 110,
|         name: "Suresh",
|         age: 23,
|         department: "CIVIL",
|         marks: 70,
|         skills: ["AutoCAD", "C", "STAAD"],
|         address: {
|             city: "Vijayawada",
|             state: "Andhra Pradesh"
|         },
|         scholarship: false
|     },
| 
|     {
|         rollNo: 111,
|         name: "Meena",
|         age: 22,
|         department: "ECE",
|         marks: 82,
|         skills: ["Python", "Arduino", "IoT"],
|         address: {
|             city: "Bangalore",
|             state: "Karnataka"
|         },
|         scholarship: true
|     },
| 
|     {
|         rollNo: 112,
|         name: "Akash",
|         age: 25,
|         department: "CSE",
|         marks: 60,
|         skills: ["C", "Java"],
|         address: {
|             city: "Hyderabad",
|             state: "Telangana"
|         },
|         scholarship: false
|     }
| ])
  {
|         rollNo: 101,
|         name: "Vasanth",
|         age: 21,
|         department: "CSE",
|         marks: 85,
|         skills: ["Java", "Python", "MongoDB"],
|         address: {
|             city: "Chennai",
|             state: "Tamil Nadu"
|         },
|         scholarship: true
|     },
| 
|     {
|         rollNo: 102,
|         name: "Rahul",
|         age: 22,
|         department: "ECE",
|         marks: 72,
|         skills: ["C", "Python", "Arduino"],
|         address: {
|             city: "Bangalore",
|             state: "Karnataka"
|         },
|         scholarship: false
|     },
| 
|     {
|         rollNo: 103,
|         name: "Priya",
|         age: 20,
|         department: "CSE",
|         marks: 91,
|         skills: ["Java", "Python", "AI"],
|         address: {
|             city: "Chennai",
|             state: "Tamil Nadu"
|         },
|         scholarship: true
|     },
| 
|     {
|         rollNo: 104,
|         name: "Arjun",
|         age: 23,
|         department: "MECH",
|         marks: 68,
|         skills: ["AutoCAD", "C", "Java"],
|         address: {
|             city: "Hyderabad",
|             state: "Telangana"
|         }
|     },
| 
|     {
|         rollNo: 105,
|         name: "Sneha",
|         age: 21,
|         department: "IT",
|         marks: 88,
|         skills: ["Python", "MongoDB", "HTML"],
|         address: {
|             city: "Chennai",
|             state: "Tamil Nadu"
|         },
|         scholarship: true
|     },
| 
|     {
|         rollNo: 106,
|         name: "Kiran",
|         age: 24,
|         department: "EEE",
|         marks: 65,
|         skills: ["C", "Arduino", "MATLAB"],
|         address: {
|             city: "Pune",
|             state: "Maharashtra"
|         },
|         scholarship: false
|     },
| 
|     {
|         rollNo: 107,
|         name: "Anjali",
|         age: 20,
|         department: "CSE",
|         marks: 95,
|         skills: ["Java", "Python", "AI", "MongoDB"],
|         address: {
|             city: "Bangalore",
|             state: "Karnataka"
|         },
|         scholarship: true
|     },
| 
|     {
|         rollNo: 108,
|         name: "Rohit",
|         age: 22,
|         department: "IT",
|         marks: 76,
|         skills: ["JavaScript", "HTML", "CSS"],
|         address: {
|             city: "Hyderabad",
|             state: "Telangana"
|         },
|         scholarship: false
|     },
| 
|     {
|         rollNo: 109,
|         name: "Divya",
|         age: 21,
|         department: "CSE",
|         marks: 89,
|         skills: ["Python", "MongoDB", "Java"],
|         address: {
|             city: "Chennai",
|             state: "Tamil Nadu"
|         },
|         scholarship: true
|     },
| 
|     {
|         rollNo: 110,
|         name: "Suresh",
|         age: 23,
|         department: "CIVIL",
|         marks: 70,
|         skills: ["AutoCAD", "C", "STAAD"],
|         address: {
|             city: "Vijayawada",
|             state: "Andhra Pradesh"
|         },
|         scholarship: false
|     },
| 
|     {
|         rollNo: 111,
|         name: "Meena",
|         age: 22,
|         department: "ECE",
|         marks: 82,
|         skills: ["Python", "Arduino", "IoT"],
|         address: {
|             city: "Bangalore",
|             state: "Karnataka"
|         },
|         scholarship: true
|     },
| 
|     {
|         rollNo: 112,
|         name: "Akash",
|         age: 25,
|         department: "CSE",
|         marks: 60,
|         skills: ["C", "Java"],
|         address: {
|             city: "Hyderabad",
|             state: "Telangana"
|         },
|         scholarship: false
|     }
| ])
  {
|         rollNo: 101,
|         name: "Vasanth",
|         age: 21,
|         department: "CSE",
|         marks: 85,
|         skills: ["Java", "Python", "MongoDB"],
|         address: {
|             city: "Chennai",
|             state: "Tamil Nadu"
|         },
|         scholarship: true
|     },
| 
|     {
|         rollNo: 102,
|         name: "Rahul",
|         age: 22,
|         department: "ECE",
|         marks: 72,
|         skills: ["C", "Python", "Arduino"],
|         address: {
|             city: "Bangalore",
|             state: "Karnataka"
|         },
|         scholarship: false
|     },
| 
|     {
|         rollNo: 103,
|         name: "Priya",
|         age: 20,
|         department: "CSE",
|         marks: 91,
|         skills: ["Java", "Python", "AI"],
|         address: {
|             city: "Chennai",
|             state: "Tamil Nadu"
|         },
|         scholarship: true
|     },
| 
|     {
|         rollNo: 104,
|         name: "Arjun",
|         age: 23,
|         department: "MECH",
|         marks: 68,
|         skills: ["AutoCAD", "C", "Java"],
|         address: {
|             city: "Hyderabad",
|             state: "Telangana"
|         }
|     },
| 
|     {
|         rollNo: 105,
|         name: "Sneha",
|         age: 21,
|         department: "IT",
|         marks: 88,
|         skills: ["Python", "MongoDB", "HTML"],
|         address: {
|             city: "Chennai",
|             state: "Tamil Nadu"
|         },
|         scholarship: true
|     },
| 
|     {
|         rollNo: 106,
|         name: "Kiran",
|         age: 24,
|         department: "EEE",
|         marks: 65,
|         skills: ["C", "Arduino", "MATLAB"],
|         address: {
|             city: "Pune",
|             state: "Maharashtra"
|         },
|         scholarship: false
|     },
| 
|     {
|         rollNo: 107,
|         name: "Anjali",
|         age: 20,
|         department: "CSE",
|         marks: 95,
|         skills: ["Java", "Python", "AI", "MongoDB"],
|         address: {
|             city: "Bangalore",
|             state: "Karnataka"
|         },
|         scholarship: true
|     },
| 
|     {
|         rollNo: 108,
|         name: "Rohit",
|         age: 22,
|         department: "IT",
|         marks: 76,
|         skills: ["JavaScript", "HTML", "CSS"],
|         address: {
|             city: "Hyderabad",
|             state: "Telangana"
|         },
|         scholarship: false
|     },
| 
|     {
|         rollNo: 109,
|         name: "Divya",
|         age: 21,
|         department: "CSE",
|         marks: 89,
|         skills: ["Python", "MongoDB", "Java"],
|         address: {
|             city: "Chennai",
|             state: "Tamil Nadu"
|         },
|         scholarship: true
|     },
| 
|     {
|         rollNo: 110,
|         name: "Suresh",
|         age: 23,
|         department: "CIVIL",
|         marks: 70,
|         skills: ["AutoCAD", "C", "STAAD"],
|         address: {
|             city: "Vijayawada",
|             state: "Andhra Pradesh"
|         },
|         scholarship: false
|     },
| 
|     {
|         rollNo: 111,
|         name: "Meena",
|         age: 22,
|         department: "ECE",
|         marks: 82,
|         skills: ["Python", "Arduino", "IoT"],
|         address: {
|             city: "Bangalore",
|             state: "Karnataka"
|         },
|         scholarship: true
|     },
| 
|     {
|         rollNo: 112,
|         name: "Akash",
|         age: 25,
|         department: "CSE",
|         marks: 60,
|         skills: ["C", "Java"],
|         address: {
|             city: "Hyderabad",
|             state: "Telangana"
|         },
|         scholarship: false
|     }
| ])
  {
|         rollNo: 101,
|         name: "Vasanth",
|         age: 21,
|         department: "CSE",
|         marks: 85,
|         skills: ["Java", "Python", "MongoDB"],
|         address: {
|             city: "Chennai",
|             state: "Tamil Nadu"
|         },
|         scholarship: true
|     },
| 
|     {
|         rollNo: 102,
|         name: "Rahul",
|         age: 22,
|         department: "ECE",
|         marks: 72,
|         skills: ["C", "Python", "Arduino"],
|         address: {
|             city: "Bangalore",
|             state: "Karnataka"
|         },
|         scholarship: false
|     },
| 
|     {
|         rollNo: 103,
|         name: "Priya",
|         age: 20,
|         department: "CSE",
|         marks: 91,
|         skills: ["Java", "Python", "AI"],
|         address: {
|             city: "Chennai",
|             state: "Tamil Nadu"
|         },
|         scholarship: true
|     },
| 
|     {
|         rollNo: 104,
|         name: "Arjun",
|         age: 23,
|         department: "MECH",
|         marks: 68,
|         skills: ["AutoCAD", "C", "Java"],
|         address: {
|             city: "Hyderabad",
|             state: "Telangana"
|         }
|     },
| 
|     {
|         rollNo: 105,
|         name: "Sneha",
|         age: 21,
|         department: "IT",
|         marks: 88,
|         skills: ["Python", "MongoDB", "HTML"],
|         address: {
|             city: "Chennai",
|             state: "Tamil Nadu"
|         },
|         scholarship: true
|     },
| 
|     {
|         rollNo: 106,
|         name: "Kiran",
|         age: 24,
|         department: "EEE",
|         marks: 65,
|         skills: ["C", "Arduino", "MATLAB"],
|         address: {
|             city: "Pune",
|             state: "Maharashtra"
|         },
|         scholarship: false
|     },
| 
|     {
|         rollNo: 107,
|         name: "Anjali",
|         age: 20,
|         department: "CSE",
|         marks: 95,
|         skills: ["Java", "Python", "AI", "MongoDB"],
|         address: {
|             city: "Bangalore",
|             state: "Karnataka"
|         },
|         scholarship: true
|     },
| 
|     {
|         rollNo: 108,
|         name: "Rohit",
|         age: 22,
|         department: "IT",
|         marks: 76,
|         skills: ["JavaScript", "HTML", "CSS"],
|         address: {
|             city: "Hyderabad",
|             state: "Telangana"
|         },
|         scholarship: false
|     },
| 
|     {
|         rollNo: 109,
|         name: "Divya",
|         age: 21,
|         department: "CSE",
|         marks: 89,
|         skills: ["Python", "MongoDB", "Java"],
|         address: {
|             city: "Chennai",
|             state: "Tamil Nadu"
|         },
|         scholarship: true
|     },
| 
|     {
|         rollNo: 110,
|         name: "Suresh",
|         age: 23,
|         department: "CIVIL",
|         marks: 70,
|         skills: ["AutoCAD", "C", "STAAD"],
|         address: {
|             city: "Vijayawada",
|             state: "Andhra Pradesh"
|         },
|         scholarship: false
|     },
| 
|     {
|         rollNo: 111,
|         name: "Meena",
|         age: 22,
|         department: "ECE",
|         marks: 82,
|         skills: ["Python", "Arduino", "IoT"],
|         address: {
|             city: "Bangalore",
|             state: "Karnataka"
|         },
|         scholarship: true
|     },
| 
|     {
|         rollNo: 112,
|         name: "Akash",
|         age: 25,
|         department: "CSE",
|         marks: 60,
|         skills: ["C", "Java"],
|         address: {
|             city: "Hyderabad",
|             state: "Telangana"
|         },
|         scholarship: false
|     }
| ])
  {
|         rollNo: 101,
|         name: "Vasanth",
|         age: 21,
|         department: "CSE",
|         marks: 85,
|         skills: ["Java", "Python", "MongoDB"],
|         address: {
|             city: "Chennai",
|             state: "Tamil Nadu"
|         },
|         scholarship: true
|     },
| 
|     {
|         rollNo: 102,
|         name: "Rahul",
|         age: 22,
|         department: "ECE",
|         marks: 72,
|         skills: ["C", "Python", "Arduino"],
|         address: {
|             city: "Bangalore",
|             state: "Karnataka"
|         },
|         scholarship: false
|     },
| 
|     {
|         rollNo: 103,
|         name: "Priya",
|         age: 20,
|         department: "CSE",
|         marks: 91,
|         skills: ["Java", "Python", "AI"],
|         address: {
|             city: "Chennai",
|             state: "Tamil Nadu"
|         },
|         scholarship: true
|     },
| 
|     {
|         rollNo: 104,
|         name: "Arjun",
|         age: 23,
|         department: "MECH",
|         marks: 68,
|         skills: ["AutoCAD", "C", "Java"],
|         address: {
|             city: "Hyderabad",
|             state: "Telangana"
|         }
|     },
| 
|     {
|         rollNo: 105,
|         name: "Sneha",
|         age: 21,
|         department: "IT",
|         marks: 88,
|         skills: ["Python", "MongoDB", "HTML"],
|         address: {
|             city: "Chennai",
|             state: "Tamil Nadu"
|         },
|         scholarship: true
|     },
| 
|     {
|         rollNo: 106,
|         name: "Kiran",
|         age: 24,
|         department: "EEE",
|         marks: 65,
|         skills: ["C", "Arduino", "MATLAB"],
|         address: {
|             city: "Pune",
|             state: "Maharashtra"
|         },
|         scholarship: false
|     },
| 
|     {
|         rollNo: 107,
|         name: "Anjali",
|         age: 20,
|         department: "CSE",
|         marks: 95,
|         skills: ["Java", "Python", "AI", "MongoDB"],
|         address: {
|             city: "Bangalore",
|             state: "Karnataka"
|         },
|         scholarship: true
|     },
| 
|     {
|         rollNo: 108,
|         name: "Rohit",
|         age: 22,
|         department: "IT",
|         marks: 76,
|         skills: ["JavaScript", "HTML", "CSS"],
|         address: {
|             city: "Hyderabad",
|             state: "Telangana"
|         },
|         scholarship: false
|     },
| 
|     {
|         rollNo: 109,
|         name: "Divya",
|         age: 21,
|         department: "CSE",
|         marks: 89,
|         skills: ["Python", "MongoDB", "Java"],
|         address: {
|             city: "Chennai",
|             state: "Tamil Nadu"
|         },
|         scholarship: true
|     },
| 
|     {
|         rollNo: 110,
|         name: "Suresh",
|         age: 23,
|         department: "CIVIL",
|         marks: 70,
|         skills: ["AutoCAD", "C", "STAAD"],
|         address: {
|             city: "Vijayawada",
|             state: "Andhra Pradesh"
|         },
|         scholarship: false
|     },
| 
|     {
|         rollNo: 111,
|         name: "Meena",
|         age: 22,
|         department: "ECE",
|         marks: 82,
|         skills: ["Python", "Arduino", "IoT"],
|         address: {
|             city: "Bangalore",
|             state: "Karnataka"
|         },
|         scholarship: true
|     },
| 
|     {
|         rollNo: 112,
|         name: "Akash",
|         age: 25,
|         department: "CSE",
|         marks: 60,
|         skills: ["C", "Java"],
|         address: {
|             city: "Hyderabad",
|             state: "Telangana"
|         },
|         scholarship: false
|     }
| ])
db.students.find({rollNo : 102})

 db.students.find({department: {$eq : "CSE"}})

db.students.find({department: {$eq : "ECE"}})
db.students.find({marks: {$gt :90}})

db.students.find({marks: {$lt :90}})

db.students.find({marks: {$gte :90}})
db.students.find({marks: {$lte :90}})
[
db.students.find({marks: {$ne :90}})
db.students.find({ $and : [ {marks : {$gt : 85}} , {department : "CSE"}]})
db.students.find[{marks : {$not :{$gt: 80}}}]
db.students.find({
|     department: {
|         $in: ["CSE", "IT"]
|     }})
db.students.find({
|     skills: {
|         $all: ["Python", "MongoDB"]
|     }
| })
const categories = [
    "Electronics",
    "Mobiles",
    "Laptops",
    "Clothing",
    "Books",
    "Furniture",
    "Shoes",
    "Accessories",
    "Home Appliances",
    "Sports"
];

const brands = [
    "Apple",
    "Samsung",
    "Dell",
    "HP",
    "Lenovo",
    "Sony",
    "Nike",
    "Adidas",
    "Puma",
    "OnePlus"
];

const cities = [
    "Chennai",
    "Bangalore",
    "Hyderabad",
    "Coimbatore",
    "Salem",
    "Erode",
    "Tiruchengode",
    "Madurai",
    "Trichy",
    "Pondicherry"
];

const tags = [
    "new",
    "popular",
    "discount",
    "premium",
    "bestseller",
    "trending",
    "featured",
    "budget"
];

const paymentMethods = [
    "UPI",
    "Credit Card",
    "Debit Card",
    "Cash",
    "Net Banking"
];


// Temporary array to store products
let products = [];


// Generate 5000 documents
for (let i = 1; i <= 5000; i++) {

    let category = categories[i % categories.length];

    let brand = brands[i % brands.length];

    let city = cities[i % cities.length];

    let price = Math.floor(Math.random() * 90000) + 1000;

    let quantity = Math.floor(Math.random() * 10) + 1;

    let rating = Number(
        (Math.random() * 4 + 1).toFixed(1)
    );


    let productTags = [
        tags[i % tags.length],
        tags[(i + 2) % tags.length]
    ];


    let product = {

        productId: i,

        name: brand + " Product " + i,

        category: category,

        brand: brand,

        price: price,

        quantity: quantity,

        rating: rating,

        description:
            "This is a high quality " +
            category +
            " product from " +
            brand +
            " with excellent features and performance.",

        tags: productTags,


        seller: {

            sellerId: 1000 + (i % 100),

            name: "Seller " + (i % 100),

            city: city
        },


        location: {

            type: "Point",

            coordinates: [
                76.95 + (Math.random() * 0.5),
                11.00 + (Math.random() * 0.5)
            ]
        },


        paymentMethods: paymentMethods,

        isActive: i % 5 !== 0,

        createdAt: new Date(
            2024,
            i % 12,
            (i % 28) + 1
        )
    };


    // Add email to some documents
    // Useful for Sparse Index
    if (i % 3 === 0) {

        product.email =
            "customer" + i + "@example.com";
    }


    // Add discount to some documents
    // Useful for Partial Index
    if (i % 4 === 0) {

        product.discount =
            Math.floor(Math.random() * 40) + 5;
    }


    // Add product to temporary array
    products.push(product);


    // Insert every 500 documents
    if (products.length === 500) {

        db.products.insertMany(products);

        products = [];
    }
}


// Insert remaining documents
if (products.length > 0) {

    db.products.insertMany(products);
}


print("5000 documents inserted successfully into 'products' collection!");


db.products.countDocuments()

  db.products.find()

  db.products.find({price : {$gt : 10000} })

  db.products.createIndex({price:1})

 db.products.find({price: {$gt : 20000}}).explain("executionStats")


  db.products.getIndexes()

  db.products.aggregate([{$group : {_id : "$category"}}])

  db.products.find( { category : "Laptops" , price : {$gt : 40000} } )

  db.products.dropIndex("price_1")

 db.products.find( { category : "Laptops" , price : {$gt : 40000} } ).explain("executionStats")

 db.products.createIndex({category : 1 , price : 1})