const {Cliente: ClienteModel} = require('../models/Cliente')

const clienteController = {

    create: async(req, res)=>{
        try{
           const clientes = {
            name: req.body.name,
            email: req.body.email,
            data_nascimento: req.body.data_nascimento,
            sexo: req.body.sexo,
            raca: req.body.raca
           };

           const response = await ClienteModel.create(clientes);
           res.status(201).json({response, msg: "Cliente criado com sucesso"})
        }catch(error){
          console.log("Erro: " + error)
        }
    },
    getAll: async (req, res)=>{
      try{
        const clientes = await ClienteModel.find();
        res.json(clientes)
      } catch(error){
        console.log("Erro: " + error)
      }
    },
    get: async(req, res)=>{
       try{
        const id = req.params.id
        const cliente = await ClienteModel.findById(id);
        if(!cliente){
          res.status(404).json({msg: "Serviço não encontrado"})
          return;
        }
        res.json(cliente)        
       }catch(error){
        console.log("Erro: " + error)
       }
    },
    delete: async (req, res)=>{
      try{
        const id = req.params.id
        const cliente = await ClienteModel.findById(id);
        if(!cliente){
          res.status(404).json({msg: "Serviço não encontrado"})
          return;
        }
        const deleteClient = await ClienteModel.findByIdAndDelete(id)
        res.status(200).json({deleteClient, msg: "Cliente excluído com sucesso"})
      } catch(error){
        console.log("Erro: " + error)
       }
    },
    updateClient: async (req, res)=>{
      try{
          const id = req.params.id
          const cliente = {
            name: req.body.name,
            email: req.body.email,
            data_nascimento: req.body.data_nascimento,
            sexo: req.body.sexo,
            raca: req.body.raca
          };
         const updatedClient = await ClienteModel.findByIdAndUpdate(id, cliente);
          if(!updatedClient){
            res.status(404).json({msg: "Serviço não encontrado"})
            return;
          }
          res.status(200).json({cliente, msg: "Cliente alterado com sucesso"})
        }
        catch(error){
        console.log("Erro: " + error)
        }
    }
}

module.exports = clienteController;