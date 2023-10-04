import Flight from "../models/Flight.js";

export const createFlight = async (req, res, next) => {
    const newFlight = new Flight(req.body)
    try{
        const savedFlight = await newFlight.save()
        res.status(200).json(savedFlight)
    }catch(err){
        next(err)
    }
}

export const updateFlight = async (req, res, next)=>{
    try{
        const updetedFlight = await Flight.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true})
        res.status(200).json(updetedFlight)
    }catch(error){
        next(error)
    }
}

export const deleteFlight = async (req, res, next)=>{
    try{
        const deletedFlight = await Flight.findByIdAndDelete(req.params.id)
        res.status(200).json("deleted")
    }catch(error){
        next(error)
    }
}

export const getFlight =  async (req, res, next)=>{
    try{
        const flight = await Flight.findById(req.params.id)
        res.status(200).json(flight)
    }catch(error){
        res.status(500).json
    }
}


export const getFlights = async (req, res, next)=>{
        try{
            const flights = await Flight.find()
            res.status(200).json(flights)
        }catch(error){
            next(error)
        }
    }

    export const countByCity = async (req, res, next) => {
        const cities = req.query.cities.split(",");
        try {
          const list = await Promise.all(
            cities.map((city) => {
              return Flight.countDocuments({ city: city });
            })
          );
          console.log("im here")
          res.status(200).json(list);
        } catch (err) {  
            next(err);
        }
      };


      export const countByType = async (req, res, next) => {
        const cities = req.query.cities.split(",");
        try {
          const list = await Promise.all(
            cities.map((city) => {
              return Flight.countDocuments({ city: city });
            })
          );
          console.log("im here")
          res.status(200).json(list);
        } catch (err) {  
            next(err);
        }
      };

