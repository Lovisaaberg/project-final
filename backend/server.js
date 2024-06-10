import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import expressListEndpoints from "express-list-endpoints";
import PlanetModel from "./models/PlanetModel";
import SpaceFeed from "./models/SpaceFeed";
import spaceData from "./data/SpaceFeed.json";
import planetsData from "./data/Planets.json";
import celestialData from "./data/Celestial.json";
import CelestialModel from "./models/CelestialModel";

//Load environment variables
dotenv.config();

const mongoUrl =
  process.env.MONGO_URL || "mongodb://localhost/project-solar-system";
mongoose.connect(mongoUrl);
mongoose.Promise = Promise;

// Defines the port the app will run on.
const port = process.env.PORT || 8080;
const app = express();

// Middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

//Seed database
const seedDatabase = async () => {
  await SpaceFeed.deleteMany();
  await PlanetModel.deleteMany();
  await CelestialModel.deleteMany();

  spaceData.forEach(async (feed) => {
    await new SpaceFeed(feed).save();
  });

  planetsData.forEach(async (planet) => {
    await new PlanetModel(planet).save();
  });

  celestialData.forEach(async (celestial) => {
    await new CelestialModel(celestial).save();
  });
};

if (process.env.RESET_DATABASE === "true") {
  seedDatabase()
    .then(() => {})
    .catch((error) => {
      console.error("Error seeding the database:", error);
    });
}

// Route handler for the root
app.get("/", async (req, res) => {
  try {
    const endpoints = expressListEndpoints(app);

    if (endpoints.length > 0) {
      res.json(endpoints);
    } else {
      res.status(404).send("Site not availeble at the moment.");
    }
  } catch (error) {
    res.status(500).send(`An error occurred, can't load site.`);
  }
});

// GET all planets
app.get("/planets", async (req, res) => {
  try {
    const allPlanets = await PlanetModel.find();

    if (allPlanets.length > 0) {
      res.json(allPlanets);
    } else {
      res.status(404).send("No planets can be found at the moment.");
    }
  } catch (error) {
    res.status(500).send(`An error occured while fetching the planets`);
  }
});

// GET a specific planet
app.get("/planets/:planet", async (req, res) => {
  const planet = req.params.planet;
  try {
    const onePlanet = await PlanetModel.findOne({
      name: { $regex: planet, $options: "i" },
    }).exec();

    if (onePlanet) {
      res.json(onePlanet);
    } else {
      res
        .status(404)
        .send(
          "Couldn't find the specific planet you're looking for. Please try again"
        );
    }
  } catch (error) {
    res
      .status(500)
      .send(`An error occured while fetching the planet you search for`);
  }
});

// GET all celestial bodies
app.get("/celestial", async (req, res) => {
  const allCelestials = await CelestialModel.find();
  try {
    if (allCelestials) {
      res.json(allCelestials);
    } else {
      res.status(404).send("No celestial bodies can be found at the moment.");
    }
  } catch (error) {
    res.status(500).send(`An error occured while fetching the ${name}.`);
  }
});

//GET Sun, Moon and potentially other celestial bodies
app.get("/celestial/:name", async (req, res) => {
  const celestial = req.params.name;
  try {
    const getCelestial = await CelestialModel.findOne({
      name: { $regex: celestial, $options: "i" },
    });
    if (getCelestial) {
      res.json(getCelestial);
    } else {
      res.status(404).send(`Couldn't find the ${name} right now. Try again!`);
    }
  } catch (error) {
    res.status(500).send(`An error occurred while fetching the ${name}.`);
  }
});

//Route handler to show space messages in descending order from when created, limit to 10 messages
app.get("/space-feed", async (req, res) => {
  const spaceFeed = await SpaceFeed.find()
    .sort({ createdAt: "desc" })
    .limit(10)
    .exec();

  try {
    res.status(201).json({
      success: true,
      response: spaceFeed,
      message: "Space messages successfully retrieved",
    });
    if (spaceFeed) {
      res.json(spaceFeed);
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      response: error,
      message: "Could not retrieve any space messages",
    });
  }
});

//Route handler to post messages in space feed
app.post("/space-feed", async (req, res) => {
  const { message } = req.body; //Retrieve users message to our API endpoint

  //Use the mongoose model to create the database entry
  const spaceFeed = new SpaceFeed({ message });

  try {
    const newSpaceFeed = await spaceFeed.save();
    res.status(201).json({
      success: true,
      response: newSpaceFeed,
      message: "Space message was successfully posted",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      response: error,
      message: "Could not post space message",
    });
  }
});

//Route handler to like space messages
app.post("/space-feed/:messageId/like", async (req, res) => {
  const { messageId } = req.params;

  try {
    const likeMessage = await SpaceFeed.findByIdAndUpdate(
      messageId,
      { $inc: { likes: 1 } },
      { new: true, runValidators: true }
    );

    if (!likeMessage) {
      return res.status(404).json({
        success: false,
        message: "Space message with the specified ID was not found",
      });
    }
    res.status(200).json({
      sucess: true,
      response: likeMessage,
      message: "Space message was successfully liked",
    });
  } catch (error) {
    res.status(500).json({
      sucess: false,
      response: error,
      message: "Internal server error occurred",
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

/*// Middlewares to enable cors and json body parsing
app.use(
  cors({
    origin: function (origin, callback) {
      const allowedOrigins = [
        "http://localhost:5173",
        "https://project-final-45vw.onrender.com",
      ];
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);
app.use(express.json());
*/
