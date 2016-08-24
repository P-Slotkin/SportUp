const SessionApi = {

  logIn(user, success, error){
    $.ajax({
      url: `/api/session`,
      type: `POST`,
      data: { user },
      success,
      error(resp) {
        const errors = resp.responseJSON;
        error("login", errors);
      }
    });
  },

  logOut(success) {
    $.ajax({
      url: `/api/session`,
      method: `delete`,
      success
    });
  },

  signUp(user, success, error) {
    $.ajax({
      url: `/api/users`,
      type: `POST`,
      dataType: `json`,
      data: { user },
      success,
      error(resp) {
        const errors = resp.responseJSON;
        error("signup", errors);
      }
    });
  },

  fetchCurrentUser(success, complete) {
    $.ajax({
      url: `api/session`,
      method: `GET`,
      success,
      complete: function() {
        complete();
      }
    });
  }
};

module.exports = SessionApi;
