const { getUserInfo, getUsersIds } = db;

function getUsersInfo(callback) {
  getUsersIds((ids) => {
    const users = new Array(ids.length);
    let counter = 0;

    function processUser(index, userInfo) {
      users[index] = userInfo;
      counter++;

      if (counter === ids.length) {
        callback(users);
      };
    };

    ids.forEach((id, index) => {
      getUserInfo(id, (userInfo) => processUser(index, userInfo));
    });
  });
};

