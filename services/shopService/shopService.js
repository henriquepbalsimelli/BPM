export async function getProducts() {
    return {
        data: [
            {
                id: 1,
                category: 'Vestuário',
                title: 'The Catalyzer',
                price: 100,
            },
            {
                id: 2,
                category: 'Vestuário',
                title: 'Shooting Stars',
                price: 50,
            },
            {
                id: 3,
                category: 'Vestuário',
                title: 'Neptune',
                price: 100,
            },
            {
                id: 4,
                category: 'Vestuário',
                title: 'The 400 Blows',
                price: 100,
            },
            {
                id: 5,
                category: 'Vestuário',
                title: 'The Shubirubies',
                price: 100,
            },
            {
                id: 6,
                category: 'Vestuário',
                title: 'The Amantic',
                price: 100,
            },
            {
                id: 7,
                category: 'Vestuário',
                title: 'The James',
                price: 100,
            },
            {
                id: 8,
                category: 'Vestuário',
                title: 'The Freaky',
                price: 100,
            },            
        ]
    }
}

export async function getProductDetail(id) {
    console.log('id', id)
    const data = [
        {
            id: 1,
            name: 'The Catalyzer',
            price: 100,
            sizes: ['SM', 'M', 'L', 'XL'],
            colors: ['#fdd938', '#c1795f', '#5883b4'],
            description: 'Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.'

        },
        {
            id: 2,
            name: 'The Catalyzer',
            price: 100,
            sizes: ['SM', 'M', 'L', 'XL'],
            colors: ['#fdd938', '#c1795f', '#5883b4'],

        },
        {
            id: 3,
            name: 'The Catalyzer',
            price: 100,
            sizes: ['SM', 'M', 'L', 'XL'],
            colors: ['#fdd938', '#c1795f', '#5883b4'],

        },
        {
            id: 4,
            name: 'The Catalyzer',
            price: 100,
            sizes: ['SM', 'M', 'L', 'XL'],
            colors: ['#fdd938', '#c1795f', '#5883b4'],

        },
        {
            id: 5,
            name: 'The Catalyzer',
            price: 100,
            sizes: ['SM', 'M', 'L', 'XL'],
            colors: ['#fdd938', '#c1795f', '#5883b4'],

        },
        {
            id: 6,
            name: 'The Catalyzer',
            price: 100,
            sizes: ['SM', 'M', 'L', 'XL'],
            colors: ['#fdd938', '#c1795f', '#5883b4'],

        },
        {
            id: 7,
            name: 'The Catalyzer',
            price: 100,
            sizes: ['SM', 'M', 'L', 'XL'],
            colors: ['#fdd938', '#c1795f', '#5883b4'],

        },
        {
            id: 8,
            name: 'The Catalyzer',
            price: 100,
            sizes: ['SM', 'M', 'L', 'XL'],
            colors: ['#fdd938', '#c1795f', '#5883b4'],

        },
    ]

    const product = data.find((product) => product.id == id)

    console.log('product', product)
    
    return {
        product
    }

}