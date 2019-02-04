const Shop = require('./shop');

class FakeDB {

    constructor() {
        this.shops = [{
            title: "Abbey St",
            city: "Ennis",
            street: "Abbey St",
            location: "Ennis",
            category: "street store",
            established: "1960",
            image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
            description: "Shop #1",
          },
          {
            title: "Roslevan",
            city: "Barefield",
            street: "Tulla Road",
            location: "Roslevan",
            category: "shopping complex store",
            established: "2004",
            image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
            description: "Shop #2",
          }]
    }

    async cleanDb() {
        await Shop.remove({});
    }

    pushShopsToDb() {
        this.shops.forEach((shop) => {
            const newShop = new Shop(shop);

            newShop.save();
        })
    }    

    seedDb() {
        this.cleanDb();
        this.pushShopsToDb();
    }
}

module.exports = FakeDB;