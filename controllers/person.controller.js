const peopleData = require('./mockup/people-data.json')

const personController = {
    list: (req, res) => {
        const data = { 
            people : peopleData.map((person) => ({
                firstname: person.firstname,
                lastname: person.lastname,
                url: `person/${person.id}`,
            }))
        };
        res.render('person/person-list', data);
    },
    detail: (req, res) => {
        const id = parseInt(req.params.id);
        const person = peopleData.find(p => p.id === id);
        if(!person) {
            res.render('person/person-not-found')
        }
        const data = { 
            person
        };
        res.render('person/person-detail', data);
    },
};

module.exports = personController;


