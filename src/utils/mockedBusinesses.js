const searchBusinesses = (business, location, sortOption) => {
    let result = mockedBusinesses;
    if (business !== "") {
        result = result.filter(item =>
            item.name.toLowerCase() === business.toLowerCase() ||
            item.category.toLowerCase() === business.toLowerCase()
        );
    }
    if (location !== "") {
        result = result.filter(item =>
            item.address.toLowerCase() === location.toLowerCase() ||
            item.city.toLowerCase() === location.toLowerCase() ||
            item.state.toLowerCase() === location.toLowerCase() ||
            item.zipcode.toLowerCase() === location.toLowerCase()
        )
    }
    if (sortOption !== "") {
        switch (sortOption) {
            case "Best Match":
                break;
            case "Highest Rated":
                result = result.slice().sort((a,b) => b.rating - a.rating);
                break;
            case "Most Reviewed":
                result = result.slice().sort((a,b) => parseInt(b.reviewCount) - parseInt(a.reviewCount));
                break;
        }
    }
    return result;
};

// Function to dynamically import images
const importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '').replace(/\.[^/.]+$/, "")] = r(item); });
    return images;
};

// Import all images from the images folder
const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

const mockedBusinesses = [
    {
        image: images['business0'],
        name: 'MarginOTTO Pizzeria',
        address: '1010 Paddington Way',
        city: 'Bordertown',
        state: 'NY',
        zipcode: '10101',
        category: 'ITALIAN',
        rating: 4.5,
        reviewCount: 90
    },
    {
        image: images['business1'],
        name: 'Sushi Zen',
        address: '2020 Tokyo St',
        city: 'San Francisco',
        state: 'CA',
        zipcode: '94101',
        category: 'JAPANESE',
        rating: 4.8,
        reviewCount: 120
    },
    {
        image: images['business2'],
        name: 'Café Bonjour',
        address: '3030 Paris Blvd',
        city: 'Bordertown',
        state: 'NY',
        zipcode: '10102',
        category: 'FRENCH',
        rating: 4.3,
        reviewCount: 75
    },
    {
        image: images['business3'],
        name: 'Taco Fiesta',
        address: '4040 Siesta Lane',
        city: 'Austin',
        state: 'TX',
        zipcode: '73301',
        category: 'MEXICAN',
        rating: 4.7,
        reviewCount: 140
    },
    {
        image: images['business4'],
        name: 'Dragon Garden',
        address: '5050 Chinatown Dr',
        city: 'San Francisco',
        state: 'CA',
        zipcode: '94102',
        category: 'CHINESE',
        rating: 4.6,
        reviewCount: 130
    },
    {
        image: images['business5'],
        name: 'The Vegan Spot',
        address: '6060 Green Valley Rd',
        city: 'Portland',
        state: 'OR',
        zipcode: '97201',
        category: 'VEGAN',
        rating: 4.6,
        reviewCount: 110
    },
    {
        image: images['business6'],
        name: 'Steakhouse Prime',
        address: '7070 Carnivore Ave',
        city: 'Dallas',
        state: 'TX',
        zipcode: '75201',
        category: 'AMERICAN',
        rating: 4.4,
        reviewCount: 95
    },
    {
        image: images['business7'],
        name: 'Bagel Brothers',
        address: '8080 Brooklyn Rd',
        city: 'New York',
        state: 'NY',
        zipcode: '10001',
        category: 'BAKERY',
        rating: 4.3,
        reviewCount: 85
    },
    {
        image: images['business8'],
        name: 'Curry Kingdom',
        address: '9090 Spice Route',
        city: 'Chicago',
        state: 'IL',
        zipcode: '60601',
        category: 'INDIAN',
        rating: 4.6,
        reviewCount: 100
    },
    {
        image: images['business9'],
        name: 'Greek Restaurant',
        address: '1011 Athens Dr',
        city: 'Los Angeles',
        state: 'CA',
        zipcode: '90001',
        category: 'GREEK',
        rating: 4.5,
        reviewCount: 105
    },
    {
        image: images['business10'],
        name: 'Paella Palace',
        address: '1111 Valencia St',
        city: 'Miami',
        state: 'FL',
        zipcode: '33101',
        category: 'SPANISH',
        rating: 4.8,
        reviewCount: 125
    },
    {
        image: images['business11'],
        name: 'Burger Town',
        address: '1212 Grill Ln',
        city: 'Seattle',
        state: 'WA',
        zipcode: '98101',
        category: 'AMERICAN',
        rating: 4.2,
        reviewCount: 70
    },
    {
        image: images['business12'],
        name: 'Pho Haven',
        address: '1313 Saigon St',
        city: 'Houston',
        state: 'TX',
        zipcode: '77001',
        category: 'VIETNAMESE',
        rating: 4.7,
        reviewCount: 90
    },
    {
        image: images['business13'],
        name: 'BBQ Bliss',
        address: '1414 Smokehouse Ave',
        city: 'Memphis',
        state: 'TN',
        zipcode: '38101',
        category: 'BBQ',
        rating: 4.6,
        reviewCount: 135
    },
    {
        image: images['business14'],
        name: 'Pizza Paradise',
        address: '1515 Marinara Way',
        city: 'Chicago',
        state: 'IL',
        zipcode: '60602',
        category: 'ITALIAN',
        rating: 4.9,
        reviewCount: 110
    },
    {
        image: images['business15'],
        name: 'Gelato Heaven',
        address: '1616 Ice Cream Ln',
        city: 'San Diego',
        state: 'CA',
        zipcode: '92101',
        category: 'DESSERT',
        rating: 4.9,
        reviewCount: 90
    },
    {
        image: images['business16'],
        name: 'Noodle Nest',
        address: '1717 Ramen Rd',
        city: 'Los Angeles',
        state: 'CA',
        zipcode: '90002',
        category: 'JAPANESE',
        rating: 4.5,
        reviewCount: 125
    },
    {
        image: images['business17'],
        name: 'Falafel Corner',
        address: '1818 Middle East Blvd',
        city: 'Detroit',
        state: 'MI',
        zipcode: '48201',
        category: 'MEDITERRANEAN',
        rating: 4.7,
        reviewCount: 100
    },
    {
        image: images['business18'],
        name: 'Buffalo Spice',
        address: '1919 Phoenix St',
        city: 'Phoenix',
        state: 'AZ',
        zipcode: '85001',
        category: 'AMERICAN',
        rating: 4.6,
        reviewCount: 120
    },
    {
        image: images['business19'],
        name: 'Pain Au Chocolat Brothers',
        address: '2020 Brooklyn Rd',
        city: 'New York',
        state: 'NY',
        zipcode: '10002',
        category: 'BAKERY',
        rating: 4.3,
        reviewCount: 85
    },
    {
        image: images['business20'],
        name: 'Grecian Delights',
        address: '2121 Athens Dr',
        city: 'Los Angeles',
        state: 'CA',
        zipcode: '90003',
        category: 'GREEK',
        rating: 4.5,
        reviewCount: 105
    },
    {
        image: images['business21'],
        name: 'Casa da Feijoada',
        address: '2222 Samba St',
        city: 'Orlando',
        state: 'FL',
        zipcode: '32801',
        category: 'BRAZILIAN',
        rating: 4.8,
        reviewCount: 150
    }
];

export default searchBusinesses;