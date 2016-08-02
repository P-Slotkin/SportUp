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
      success,
      error: function() {
        console.log("Logout error in SessionAPI#logout");
      }
    });
  },

  signUp(user, success, error) {
    console.log(user);
    $.ajax({
      url: `/api/user`,
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
      error: function (resp) {
        console.log("Error in SessionAPI#fetchCurrentUser");
      },
      complete: function() {
        complete();
      }
    });
  }
};

module.exports = SessionApi;
