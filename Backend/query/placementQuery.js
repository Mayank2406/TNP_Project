const Placement = require('../models/placements')

const findPlacements = () => {    
    return Placement.find();
}

module.exports = {findPlacements}