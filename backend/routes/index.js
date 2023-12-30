import express from "express";
import { getContacts, addContact, getSingleContact, updateContact, deleteContact} from "../controller/index.js"

const router = express.Router();

router.route("/get").get(getContacts)

router.route("/add").post(addContact);

router.route("/single/:id").get(getSingleContact);

router.route("/update/:id").put(updateContact);

router.route("/delete/:id").delete(deleteContact);

export default router;