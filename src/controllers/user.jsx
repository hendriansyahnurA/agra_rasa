import Users from '../models/userModel';
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';

const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll({
      attributes: ['name', 'email'],
    });

    console.log(JSON.stringify(users));

    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

getUsers();

const admin = async (req, res) => {
  const { email, password } = req.body;

  if (password !== configuration_password) return res.status(400).json({ msg: 'Password tidak cocok dengan konfirmasi password' });

  const salt = await bcrypt.getSalt();

  const hashPassword = await bcrypt.hash(password, salt);

  try {
    await Users.create({
      email: email,
      password: hashPassword,
    });
    res.json({ msg: 'Registrasi Berhasil' });
  } catch (error) {
    console.log(error);
  }
};
const AdminPage = async (req, res) => {
  try {
    const user = await Users.findAll({
      where: {
        email: req.body.email,
      },
    });
    const match = await bcrypt.compare(req.body.password, user[0].password);

    if (!match) return res.status(400).json({ msg: 'Password Salah' });

    const email = user[0].email;
    const password = user[0].password;

    const accessToken = jsonwebtoken.sign({ email, password }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '20s' });
    const refreshToken = jsonwebtoken.sign({ email, password }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1s' });

    await Users.update(
      { refresh_Token: refreshToken },
      {
        where: { email: email },
      }
    );

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.json({ accessToken });
  } catch (error) {
    res.status(404).json({ msg: 'Email tidak ditemukan' });
  }
};

export { getUsers, AdminPage };
