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
    } catch (e) {
      console.log(e);
    }
  };

  const insertUsu = async () => {
    try {
      const insUsu =
        'INSERT INTO public."T_USUARIOS"("NOMBRE_APELLIDO", "CEDULA", "TELEFONO")VALUES($1,$2,$3)';
      const value = ["yessica ramirez", "123", "169"];
      const res = await pool.query(insUsu, value);
      console.log(res);
      pool.end();
    } catch (e) {
      console.log(e);
    }
  };

  const delUsu = async () => {
    try {
      const deleUsu = 'DELETE FROM public."T_USUARIOS" WHERE "NOMBRE_APELLIDO" = $1;';
      const value = ["erica ruiz"];
      const res = await pool.query(deleUsu, value);
      console.log(res);      
    } catch {}
  };

  delUsu();
  //
  // insertUsu();
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
