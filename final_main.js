const { createApp } = Vue;

createApp({
    data() {
        return {
            product: 'Шкарпетки',
            brand: 'Vue Mastery',
            description: 'Пара теплих пухнастих шкарпеток',
            altText: 'Пара шкарпеток',
            link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks',
            details: ['80% cotton', '20% polyester', 'Gender-neutral'],
            sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
            selectedSize: 'M',
            onSale: true,
            cart: 0,
            variants: [
                {
                    id: 2234,
                    color: 'green',
                    image: './Socks-green.jpg',
                    inventory: 10
                },
                {
                    id: 2235,
                    color: 'blue',
                    image: './Socks-grey.png',
                    inventory: 0
                }
            ],
            selectedVariantIndex: 0
        };
    },
    computed: {
        selectedVariant() {
            return this.variants[this.selectedVariantIndex];
        },
        image() {
            return this.selectedVariant.image;
        },
        inStock() {
            return this.selectedVariant.inventory > 0;
        },
        title() {
            return `${this.product} ${this.brand}`;
        },
        sale() {
            return this.onSale
                ? `${this.product} від ${this.brand} зараз на розпродажі!`
                : `${this.product} від ${this.brand} зараз не на розпродажі.`;
        }
    },
    methods: {
        updateVariant(index) {
            this.selectedVariantIndex = index;
        },
        addToCart() {
            if (this.inStock) {
                this.cart++;
                this.selectedVariant.inventory--;
            }
        }
    }
}).mount('#app');
