const { getAllCharacter, getNameLocation, getNameEpisode } = require("./FunctionController");

const getAllNames = async (req, res) => { 
    const todos = await getAllCharacter()

    try{
        if(todos.length === 0) return res.status(400).json({msg: `Error 404`});
        return res.status(200).json(todos);
    }catch (e){
        return res.status(400).json({msg: `Error 404 - ${e}`});
    };  
};

const getAllLocation = async (req, res) => { 
    const locations = await getNameLocation()

    try{
        if(locations.length === 0) return res.status(400).json({msg: `Error 404`});
        return res.status(200).json(locations);
    }catch (e){
        return res.status(400).json({msg: `Error 404 - ${e}`});
    }  
}

const getAllEpisodes = async (req, res) => { 
    const Episodes = await getNameEpisode()
    
    try{
        if(Episodes.length === 0) return res.status(400).json({msg: `Error 404`});
        return res.status(200).json(Episodes);
    }catch (e){
        return res.status(400).json({msg: `Error 404 - ${e}`});
    }  
}

module.exports = {getAllLocation, getAllNames, getAllEpisodes};