class Tables {
  init(connection) {
    this.connection = connection;
    this.criarAtendimento();
  }

  criarAtendimento() {
    const sql = `
      create table IF NOT EXISTS atendimentos (
        id int not null AUTO_INCREMENT,
        client varchar(50) NOT NULL,
        pet varchar(20),
        service varchar(20) NOT NULL,
        status varchar(20) NOT NULL,
        observations text,
        date datetime not null, 
        dataCriacao datetime not null
        PRIMARY KEY (id)
      )
    `
    this.connection.query(sql, err => {
      if (err) {
        console.log(err)
      } else {
        console.log("Tabela atendimentos criada com sucesso");
      }
    });
  }
}

module.exports = Tables;