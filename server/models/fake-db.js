const Shop = require('./shop');

class FakeDB {

    constructor() {
        this.shops = [{
            title: "Abbey St",
            city: "Ennis",
            street: "Abbey St",
            location: "Ennis",
            established: "1960",
            image: "http://via.placeholder.com/350x250",
            description: "Shop #1",
          },
          {
            title: "Roslevan",
            city: "Barefield",
            street: "Tulla Road",
            location: "Roslevan",
            established: "2004",
            image: "http://via.placeholder.com/350x250",
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