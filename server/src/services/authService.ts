import authRepository from "../repositories/authRepository";
import passwordHash from "../utils/passwordHash";

async function signUp(
  name: string,
  email: string,
  password: string,
  accountType: string
) {
  const user = await authRepository.findUserByEmail(email);

  if (!user) {
    const passwordHashed = await passwordHash.generatePassword(password);

    if (passwordHashed) {
      const newUser = authRepository.createUser(
        name,
        email,
        passwordHashed,
        accountType
      );

      return newUser;
    }
  }
}

export default { signUp };
