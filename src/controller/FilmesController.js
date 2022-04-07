import { variados } from '../model/variados.js'

export const getIndex = async (req, res) => {
   try{
    const FILMES = await variados.findAll({
        order:[["nome", "ASC"]]
    })
    res.render('index.ejs', {
        FILMES,
    })
} catch(err) {
    res.send(err.message)
}
}

//

export const getDetails = async (req, res) => {
try{
const filme = await variados.findByPk(req.params.id)
res.render('details.ejs',{ 
    filme,
})
}
 catch(err){
res.send(err.message)
}

    
}

//

 export const getDeletar = async (req, res) => {
    try{
        await variados.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/')
    }
    catch(err){
        res.send(err.message)

    }

}

//

 export const getCriar = (req, res) => {
     res.status(200).render("criar.ejs")
    
}

//

export const postCriar = async (req, res) => {
    try{

        const {nome, ano, img, diretores, iframe, descricao } =  req.body
        await variados.create({
            nome, ano, img, diretores, iframe, descricao
        })
        res.status(200).redirect('/')

    }
    catch(err){
        res.send(err.messame)
    }
       
}

//

export const getEditar = async (req, res) => {
const filme = await variados.findByPk(req.params.id)
    res.status(200).render('editar.ejs',{
        filme
    })

}

//

export const postEditar = async (req, res) => {
const { nome, ano, img, diretores, iframe, descricao } = req.body
try{
await variados.update({
    nome: nome,
     ano: ano,
      img: img,
       diretores: diretores,
        iframe: iframe,
         descricao:descricao
},{
    where: {
    id: req.params.id
    }
})
res.redirect('/')

}
catch(err) {
    res.status(500).send(err.message)
}
}

