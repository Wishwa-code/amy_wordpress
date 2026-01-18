import axios from 'axios';

// Replace with your actual WordPress URL
const WP_API_URL = 'https://bobey.pixandco.lk/wp-json/wp/v2';

const wpClient = axios.create({
    baseURL: WP_API_URL,
});

export const wordpressService = {
    async getProducts() {
        try {
            const response = await wpClient.get('/product?_embed=1');
            return response.data.map(item => {
                // Handle class_list as either array or object
                const classes = Array.isArray(item.class_list)
                    ? item.class_list
                    : Object.values(item.class_list || {});

                return {
                    id: item.id,
                    name: item.title?.rendered || 'Unnamed Product',
                    price: item._price || item.meta?._price || '0.00',
                    image: item._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/assets/prod-serum.png',
                    category: item._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized',
                    isNew: classes.some(cls => cls.includes('product_cat-new-arrivals')),
                    slug: item.slug
                };
            });
        } catch (error) {
            console.error('Error fetching products:', error);
            return [];
        }
    },

    async getPosts() {
        try {
            const response = await wpClient.get('/posts?_embed=1');
            return response.data.map(item => ({
                id: item.id,
                title: item.title?.rendered || 'Untitled',
                excerpt: item.excerpt?.rendered?.replace(/<[^>]+>/g, '').substring(0, 120) + '...',
                image: item._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                date: new Date(item.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                }),
                link: item.link
            }));
        } catch (error) {
            console.error('Error fetching posts:', error);
            return [];
        }
    }
};
