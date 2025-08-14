function strongPasswords(passwords) {
  return passwords.filter(function(ele){
    return ele.length>=8;
  })
return result;
}

console.log(strongPasswords(['secret', 'secret123', 'secret@123', 'pass123']));
