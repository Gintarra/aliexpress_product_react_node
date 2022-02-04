const scrape = require('aliexpress-product-scraper');
const { original } = require('parseurl');



module.exports = {
    data: (req, res) => {
        const { id } = req.body
        console.log(id);
        const product = scrape(id)
        scrape(id).then(data => {
            const item = {
                title: data.title,
                description: data.description,
                quantity: data.totalAvailableQuantity,
                feedback: data.feedback,
                price: data.originalPrice.max,
                variants: data.variants,
                images: data.images
            }
            res.send({ data: item })
        })
    }
}

