module.exports = {
    async home(req, res) {
        res.render('admin/index', {
            title: 'Home pagee',
            layout: '../admin/layouts/main'
        })
    }
}