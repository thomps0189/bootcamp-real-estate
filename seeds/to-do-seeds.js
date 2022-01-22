const { ToDo } = require('../models');

const toDoData = [
    {
        property: '2303 A Knowles Ave, Nashville, TN 37204',
        todo_type: 'meet serviceman',
        todo_text: 'meet bug guy at house to spray for spring',
        tenet_name: 'Meryl Streep',
        tenet_phone: '615-555-3333'
    },
    {
        property: '906 A Gale Ln, Nashville, TN 37204',
        todo_type: 'delivery',
        todo_text: 'new dishwasher delivered at noon',
        tenet_name: 'Audrey Hepburn',
        tenet_phone: '615-555-5555'
    }
]

const seedToDo = () => ToDo.bulkCreate(toDoData);

module.exports = seedToDo;