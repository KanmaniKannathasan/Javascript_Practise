strongPasswords = (passwords) => {
  return passwords.filter((ele) => ele.length > 0);
  return passwords;
};

console.log(strongPasswords(["secret", "secret123", "secret@123", "pass123"]));
