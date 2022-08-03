module.exports = app => {
    const { existsOrError, notExistsOrError } = app.api.validation

    const save = (req, res) => {
        const category = {...req.body }
        if (req.params.id) category.id = req.params.id

        try {
            existsOrError(category.name, 'Name not informed')
        } catch (msg) {
            return res.status(400).send(msg)
        }

        if (category.id) {
            app.db('categories')
                .update(category)
                .where({ id: category.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('categories')
                .insert(Category)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const remove = async(req, res) => {
        try {
            existsOrError(req.params.id, 'Category code not informed')

            const subcategory = await app.db('categories')
                .where({ parentId: req.params.id })

            notExistsOrError(subcategory, 'Category has subcategories')

            const articles = await app.db('articles')
                .where({ categoryId: req.params.id })
            notExistsOrError(articles, 'Category has articles')

            const rowsDeleted = await app.db('categories')
                .where({ id: req.params.id }).del()
            existsOrError(rowsDeleted, 'Category not found')

            res.status(204).send()
        } catch (msg) {
            res.status(400).send(msg)
        }
    }
}