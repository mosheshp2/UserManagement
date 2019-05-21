"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router_1 = require("./Router");
const UserService_1 = require("./Model/UserService");
const port = process.env.PORT || 3000;
Router_1.default.listen(port, (err) => {
    if (err) {
        return console.log(err);
    }
    return console.log(`server is listening on ${port}`);
});
UserService_1.default.init();
//# sourceMappingURL=index.js.map