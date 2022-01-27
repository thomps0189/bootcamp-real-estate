const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const propertyRoutes = require("./property-routes");
const requestRoutes = require("./request-routes");
const tenantRoutes = require("./tenant-routes");
const workOrderRoutes = require("./work-order-routes");

router.use("/properties", propertyRoutes);
router.use("/requests", requestRoutes);
router.use("/tenants", tenantRoutes);
router.use("/users", userRoutes);
router.use("/workOrders", workOrderRoutes);

module.exports = router;
