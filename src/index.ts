import express from "express";
import http from "http";
import morgan from "morgan";
import { productRouter } from "./controllers/product";
import {
  Extra,
  ExtraEntry,
  ExtraEntrySection,
  Product,
} from "./domain/models/types";

const app = express();
const server = http.createServer(app);

app.use(morgan("dev"));

// MIDDLEWARES
app.use(express.json({}));
app.use(express.urlencoded({ extended: true }));

// ROUTERS
app.use("/products", productRouter);

server.listen(5001, () => {
  console.log("Server running on port 5001");
});

// The business creates their Extra Items
// Add those extra items to extra groups
// Products have a reference of those

const extraGuisoCochinita: Extra = {
  id: "1",
  addedPriceByUnit: 0,
  description: "",
  displayName: "Cochinita",
  status: "ACTIVE",
};

const extraGuisoSalpicon: Extra = {
  id: "2",
  addedPriceByUnit: 5,
  description: "",
  displayName: "Salpicon",
  status: "ACTIVE",
};

const extraSalsaVerde: Extra = {
  id: "1",
  addedPriceByUnit: 10,
  description: "",
  displayName: "Salsa verde",
  status: "ACTIVE",
};

const extraSalsaRoja: Extra = {
  id: "1",
  addedPriceByUnit: 5,
  description: "",
  displayName: "Salsa roja",
  status: "ACTIVE",
};

const extraEntry_limones: ExtraEntry = {
  id: "1",
  addedPrice: 10,
  extraId: extraGuisoSalpicon.id,
  maxSelection: 15,
  minxSelection: 0,
  status: "DRAFT",
  title: "Limones",
  titlePrefix: "Añada",
};

// Quieres limones?

// Cuantos limones quieres?

const extraSectionOfGuisos: ExtraEntrySection = {
  id: "1",
  createdAt: Date.now().toString(),
  description: "",

  title: "guisos",
  titlePrefix: "tacos de que {title} quiere?",
  extras: [
    {
      extraId: extraGuisoSalpicon.id,
      addedPriceByUnit: 0,
      maxSelection: 20,
      minxSelection: 0,
      status: "ACTIVE",
    },
    {
      extraId: extraGuisoCochinita.id,
      addedPriceByUnit: 0,
      maxSelection: 20,
      minxSelection: 0,
      status: "ACTIVE",
    },
  ],
  maxSelection: 30,
  minSelection: 1,
  releaseDate: "0",
  status: "ACTIVE",
};

// Salsas
// Roja
// Verde +

const extraEntry_salsaVerde: ExtraEntry = {
  id: "1",
  addedPrice: 10,
  extraId: extraSalsaVerde.id,
  minxSelection: 0,
  maxSelection: 1,
  status: "DRAFT",
  title: "Salsa",
  titlePrefix: "Salsa",
};

const extraEntry_salsaRoja: ExtraEntry = {
  id: "1",
  addedPrice: 10,
  extraId: extraSalsaRoja.id,
  minxSelection: 0,
  maxSelection: 1,
  // Possible deprecated
  // Can be computed by the minimun selection
  // If it is one, this item is required
  status: "DRAFT",
  title: "Salsa",
  titlePrefix: "Salsa",
};

const productExample: Product = {
  id: "1",
  createdAt: Date.now().toString(),
  description: "some description",
  displayName: "Orden de tacos",
  extras: [],
  extrasListOrder: [extraSalsaRoja.id, extraSalsaVerde.id],
  extrasSections: [extraSectionOfGuisos.id],
  price: 80,
  releaseDate: "",
  status: "DRAFT",
};
