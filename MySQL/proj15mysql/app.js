app.use(express.json());
app.use(express.urlencoded({extends:false}));

const QUERY_SELECT = 'SELECT * FROM USERS ORDER BY ID DESC';
const QUERY_UPDATE = 'UPDATE USERS SET NAME=?, EMAIL=?, PASSWORD=? WHERE ID=?;';