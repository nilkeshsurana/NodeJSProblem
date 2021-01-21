var data = require('../data-store');
var projects = data.getProjects();
var router = require('express').Router();

router.get("/active", (req, res) => {
    let array = data.getProjects();
    
    let filteredArray = array.filter(obj => obj.isActive);
    res.status(200).json(filteredArray);   
  });

router.get("/:id", (req, res) => {
    let array = data.getProjects();
    let isFound = false;
	for(let obj in array) {
        if(array[obj].id == req.params.id){
            isFound = true
			res.status(200).json(array[obj]);
        }
     }
	 if(!isFound) res.status(404).json({"message" : "No Project Found"});   
  });

router.get("/", (req, res) => {
    data.getProjects();
    res.status(200).json(data.getProjects());
  });
module.exports = router;
