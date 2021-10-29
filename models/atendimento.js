const moment = require('moment');
const connection = require('../infrastructure/connection');

class Atendimento {
  adiciona(atendimento, ) {
    const dataCriacao = moment().format("YYYY-MM-DD HH:MM:SS");
    const date = moment(atendimento.atendimentoData, "DD/MM/YYYY").format("YYYY-MM-DD HH:MM:SS");
    const atendimentoData = { ...atendimento, dataCriacao };
    const sql =  `
      INSERT INTO atendimento set ?
    `;

    connection(sql, atendimentoData, (err, result) => {
      if (err) {
        console.log(err)
      } else {
        console.log(result)
      }
    })
  }
}

module.exports = new Atendimento();