const connection = require('../infrastructure/connection');

class Atendimento {
  adiciona(atendimento, ) {
    const sql =  `
      INSERT INTO atendimento set ?
    `;

    connection(sql, (err, result) => {
      if (err) {
        console.log(err)
      } else {
        console.log(result)
      }
    })
  }
}

module.exports = new Atendimento();