import jsonwebtoken from 'jsonwebtoken'
let tokenKey = 'weiew2018wyjyw';
export default tokenKey;
export let webToken = {
  create: (users) =>{
    console.log(users)
    var expiresIn = 60 * 60 * 1000;
    var payload = {};
    payload.loginAccount = users.loginAccount;
    payload.password = users.password;
    var options = {
      "expiresIn": expiresIn
    };
    var token = jsonwebtoken.sign(payload, tokenKey, options);
    users.token = token;
    users.tokenTime = expiresIn;
    return token;
  },
  verify: async(token) => {
    try {
      let back =jsonwebtoken.verify(token, tokenKey);
      debugger
      return back;
    } catch (error) {
      throw new Error(error)
    }
  }
}
