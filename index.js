const { Client, Pool } = require("pg");

(async function () {
  const config = {
    user: "postgres",
    host: "127.0.0.1",
    port: 5433,
    password: "admin",
    database: "DBA_USUARIOS",
  };

  const pool = new Pool(config);

  const getUser = async () => {
    try {
      const res = await pool.query('select * from public."T_USUARIOS"');
      console.log(res.rows);
      pool.end();
    } catch {}
  };

  const insertUsu = async () => {
    const insUsu =
      'INSERT INTO public."T_USUARIOS"("NOMBRE_APELLIDO", "CEDULA", "TELEFONO")VALUES($1,$2,$3)';
    const value = ["erica ruiz", "156", "15"];
    const res = await pool.query(insUsu, value);
    console.log(res);
    pool.end();
  };
  insertUsu();
  //getUser();

  /* const getUser = async (pool) => {
    const { rows } = await pool.query('select * from public."T_USUARIOS"');
    return rows;
  };

  const pool = new Client(config);
  await pool.connect();
  const users = await getUser(pool);
  console.log(users);
  process.exit(0); */
})();
