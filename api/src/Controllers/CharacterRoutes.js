const getAllType = require("./FunctionController");

const getAll = async (req, res) => {
    const { buscador } = req.body;

    try {
        if (buscador !== "character" && buscador !== "episode" && buscador !== "location") return res.status(400).json({ msg: `Error 404 - ${e}` });
        
        var letra = "";

        switch(buscador){
            case "character": {
                letra = "c"
                break;
            };
            case "episode": {
                letra = "e"
                break;
            };
            case "location": {
                letra = "l"
                break;
            };
            default: console.log("Error")
        }

        const getAllTypes = await getAllType(buscador)

        const Charcounter = getAllTypes.map(item => {
            let count = 0;
            for (let i = 0; i < item.name.length; i++) {
                if (item.name.charAt(i) === letra.toLowerCase() || item.name.charAt(i) === letra.toUpperCase()) {
                    count++
                }
            }
            return count;
        })
        const result = Charcounter.reduce((acc, item) => acc + item, 0);

        return res.status(200).json(result);
    } catch (e) {
        return res.status(400).json({ msg: `Error 404 - ${e}` });
    };
};

module.exports = getAll;