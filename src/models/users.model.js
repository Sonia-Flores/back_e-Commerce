const selectAllUsers = () => {
  return db.query("SELECT * FROM users");
};

const selectUserById = (userId) => {
  return db.query("SELECT * FROM users WHERE id = ?", userId);
};

const selectUserByEmail = (email) => {
  return db.query("SELECT * FROM users WHERE email = ?", email);
}

const insertUser = ({
  name,
  last_name,
  address,
  email,
  card_number,
  password,
  role,
}) => {
  return db.query(
    "INSERT INTO users (name, last_name, address, email, card_number, password, role) VALUES (?,?,?,?,?,?,?)",
    [name, last_name, address, email, card_number, password, role]
  );
};

const updateUser = (
  userId,
  { name, last_name, address, email, card_number, password, role }
) => {
  return db.query(
    "UPDATE users SET name = ?, last_name = ?, address = ?, email = ?, card_number = ?, password = ?, role = ? WHERE id = ? ",
    [name, last_name, address, email, card_number, password, role, userId]
  );
};

const deleteUserById = (userId) => {
  return db.query("DELETE FROM users WHERE id = ?", [userId]);
};

module.exports = {
  selectAllUsers,
  selectUserById,
  insertUser,
  updateUser,
  deleteUserById,
  selectUserByEmail
};
