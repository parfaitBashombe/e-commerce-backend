import { pbkdf2Sync, randomBytes } from "crypto";

export default class PasswordUtils {
  private ITERATIONS = 100000;
  private KEYLENGTH = 64;
  private DIGEST = "sha512";
  private ENCODING: BufferEncoding = "hex";
  private SALT_LENGTH = 32;

  salt(): string {
    return randomBytes(this.SALT_LENGTH).toString(this.ENCODING);
  }

  hash(password: string, salt: string): string {
    return pbkdf2Sync(
      password,
      salt,
      this.ITERATIONS,
      this.KEYLENGTH,
      this.DIGEST
    ).toString(this.ENCODING);
  }

  compare(password: string, hashedPassword: string, salt: string): boolean {
    const hash = this.hash(password, salt);
    return hash === hashedPassword;
  }
}
