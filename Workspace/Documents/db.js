const mysql = require('mysql2/promise');

async function main() {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'root1234',
      database: 'cts'
    });

    const [rows] = await connection.execute('SELECT * FROM emp');
    console.log(rows);

    await connection.end();
  } catch (err) {
    console.error(err);
  }
}

main();