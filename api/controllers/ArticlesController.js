/**
 * ArticlesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */



module.exports = {
    list: async function (req, res) {
        const getAllArticles = await Articles.find({})
        try {
            res.view('pages/list', { articles: getAllArticles })
        } catch (err) {
            res.send(500, { error: err })
        }
    },
    add: async function (req, res) {
        res.view('pages/add')
    },
    create: async function (req, res) {

        const title = req.body.title
        const body = req.body.body

        const addArticles = await Articles.create({ title: title, body: body })
        try {
            res.redirect('/add')
        } catch (err) {
            res.send(500, { error: err })
        }
    },
    delete: async function(req,res){
        const deletedArticle = await Articles.destroy({id : req.params.articlesId,})
        try{
            res.redirect('/articles/list')
        }catch(err){
            res.send(500, {error : err})
        }
        return false
    },
    edit: async function(req,res){
        const oneArticle = await Articles.findOne({id : req.params.articlesId})
        try{
            res.view('pages/edit', {article : oneArticle})
        }catch(err){
            res.send(500, {error : err})
        } 
    },
    update: async function(req,res){
        const title = req.body.title
        const body = req.body.body

        const updatedArticles = await Articles.update({id : req.params.articlesId}, { title : title, body : body})
        try{
            res.redirect('/articles/lisr')
        }catch(err){
            res.rend(500, {error : err})
        }
    }
};

