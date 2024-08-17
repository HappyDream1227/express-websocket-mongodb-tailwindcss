import express from "express"
import commentsCtrl from "../controllers/comments.controller.js"

const router = express.Router()
router.route("/").get(commentsCtrl.getAll)
router.route("/:id").get(commentsCtrl.getOneByID)
router.route("/insert").post(commentsCtrl.insertOne)
router.route("/update").post(commentsCtrl.updateOne)
router.route("/updatemany").post(commentsCtrl.updateMany)
router.route("/delete").post(commentsCtrl.deleteOne)
router.route("/deletemany").post(commentsCtrl.deleteMany)

// router
//   .route("/review")
//   .post(ReviewsCtrl.apiPostReview)
//   .put(ReviewsCtrl.apiUpdateReview)
//   .delete(ReviewsCtrl.apiDeleteReview)

export default router