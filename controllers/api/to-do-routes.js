const router = require('express').Router();
const req = require('express/lib/request');
const {
    User,
    Person,
    UserRole,
    PropertyType,
    Property,
    PropertyTenant,
    Request,
    RequestType,
    WorkOrderType,
} = require("../../models");
const {
    create
} = require('../../models/PropertyType');

//Get Routes

router.get("/", (req, res) => {
    WorkOrderType.findAll({
            include: [{
                model: WorkOrderType,
                attributes: ['category', 'description']
            }]
        })
        .then(dbWorkOrderTypeData => res.json(dbWorkOrderTypeData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get("/:id", (req, res) => {
            WorkOrderType.findOne({
                    where: {
                        id: req.params.id
                    },
                    include: [{

                            model: WorkOrderType,
                            attributes: ['category', 'description']

                    }]
                    })
                .then(dbWorkOrderTypeData => res.json(dbWorkOrderTypeData))
                .catch(err => {
                    console.log(err);
                    res.status(500).json(err);
                });
            });

        //Post routes
        router.post('/', (req, res) => {
            WorkOrderType.create({
                    id: req.body.id,
                    category: req.body.category,
                    description: req.body.description,
                })
                .then(dbWorkOrderTypeData => res.json(dbWorkOrderTypeData))
                .catch(err => {
                    console.log(err);
                    res.json(500).json(err);
                });
        });

        //Put Routes

        router.put('/:id', (req, res) => {
            WorkOrderType.update(req.body, {
                    where: {
                        id: req.params.id
                    },
                })

                .then(dbWorkOrderTypeData => {
                    if (!dbWorkOrderTypeData[0]) {
                        res.status(404).json({
                            message: 'no workorder found with that id'
                        })
                        return;
                    }
                    res.json(dbWorkOrderTypeData);
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json(err);
                });
        });

        //Delete Routes

        router.delete('/:id', (req, res) => {
            WorkOrderType.destroy({
                    where: {
                        id: req.params.id,
                    }
                })
                .then(dbWorkOrderTypeData => {
                    if (!dbWorkOrderTypeData) {
                        res.status(404).json({
                            message: 'no workorder found with this id'
                        })
                        return;
                    }
                    res.json(dbWorkOrderTypeData);
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json(err);
                });
        });

        module.exports = router;