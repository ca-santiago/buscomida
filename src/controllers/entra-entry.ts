import express from "express";
import Joi from "joi";
import extraEntryUseCases from "../domain/use-cases/entraEntry";

export const extraEntriesRouter = express();

const extraEntryPortRequest = Joi.object().keys({
  addedPrice: Joi.number().min(0).max(999999).required(),
  extraId: Joi.string().guid().required(),
  maxSelection: Joi.number().min(0).max(100).required(),
  minSelection: Joi.number().min(0).max(100).required(),
  title: Joi.string().min(1).max(120).required(),
  titlePrefix: Joi.string().min(0).max(240).required(),
  price: Joi.number().min(0).required(),
});

extraEntriesRouter.post("/", async (req, res) => {
  const { value, error } = extraEntryPortRequest.validate(req.body);
  if (error) {
    return res.status(400).send(error.message);
  }

  const {
    addedPrice,
    extraId,
    maxSelection,
    minSelection,
    title,
    titlePrefix,
  } = value;

  try {
    const extraEntry = await extraEntryUseCases.createNewExtraEntry({
      title,
      titlePrefix,
      extraId,
      addedPrice,
      maxSelection,
      minSelection,
    });
    res.status(200).json({ extraEntry });
    return;
  } catch (error: any) {
    return res.status(500).send(error['message']).end();
  }
});

// const extraEntryListQuery = Joi.object().keys({
//   page: Joi.number(),
//   count: Joi.number(),
// });

// extraEntryRouter.get("/", async (req, res) => {
//   let count;
//   let page;
//   if (req.query.page || req.query.count) {
//     const { error, value } = extraEntryListQuery.validate(req.query);
//     if (error) {
//       return res.status(400).json(error.message);
//     }
//     page = value.page;
//     count = value.count;
//   }

//   const extraEntrys = await extraEntryUseCases.getExtraEntryList(page, count);
//   res.status(200).json(extraEntrys);
// });

// extraEntryRouter.get("/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     const extraEntry = await extraEntryUseCases.getExtraEntryById(id);

//     if (extraEntry) {
//       res.status(200).json({ extraEntry });
//     } else {
//       res.status(404).end();
//     }
//   } catch (err) {
//     return res.status(500);
//   }
// });
