const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const propertyRoutes = require("./property-routes");
const requestRoutes = require("./request-routes");
const tenantRoutes = require("./tenant-routes");
const workOrderTypeRoutes = require("./work-order-type-routes");
const propertyTypeRoutes = require("./property-type-routes");
const requestTypeRoutes = require("./request-type-routes");
const roleTypeRoutes = require("./role-type-routes");
const statusTypeRoutes = require("./status-type-routes");

router.use("/properties", propertyRoutes);
router.use("/propertyTypes", propertyTypeRoutes);
router.use("/requests", requestRoutes);
router.use("/requestTypes", requestTypeRoutes);
router.use("/roleTypes", roleTypeRoutes);
router.use("/statusTypes", statusTypeRoutes);
router.use("/tenants", tenantRoutes);
router.use("/users", userRoutes);
router.use("/workOrders", workOrderTypeRoutes);

module.exports = router;
