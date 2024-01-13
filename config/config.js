require("dotenv").config(); //instatiate environment variables

let CONFIG = {}; //Make this global to use all over the application

CONFIG.app = process.env.APP || "dev";
CONFIG.port = process.env.PORT || "8003";

// local

CONFIG.db_dialect = process.env.DB_DIALECT || "mysql";
CONFIG.db_host = process.env.DB_HOST || "localhost";
CONFIG.db_port = process.env.DB_PORT || "3306";
CONFIG.db_name = process.env.DB_NAME || "NEWHOSPITAL";
CONFIG.db_user = process.env.DB_USER || "root";
CONFIG.db_password = process.env.DB_PASSWORD || "";

CONFIG.secret = process.env.JWTTOKEN || "NEWLIFEHOSPITAL";

// dev

// CONFIG.db_dialect = process.env.DB_DIALECT || "mysql";
// CONFIG.db_host =
//   process.env.DB_HOST || "cmcuprds.ctamdt30eyel.ap-south-1.rds.amazonaws.com";
// CONFIG.db_port = process.env.DB_PORT || "3306";
// CONFIG.db_name = process.env.DB_NAME || "tncdev";
// CONFIG.db_user = process.env.DB_USER || "root";
// CONFIG.db_password = process.env.DB_PASSWORD || "rooT!123";
CONFIG.url = "http://localhost:8008/";

CONFIG.jwt_encryption = process.env.JWT_ENCRYPTION || "jwt_please_change";
CONFIG.jwt_expiration = process.env.JWT_EXPIRATION || "10000";

CONFIG.AWS_ACCESS_KEY_ID = "AKIAIRJLCXOBELK4NP7A";
CONFIG.AWS_SECRET_ACCESS_KEY = "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";
CONFIG.AWS_BUCKET_NAME = "manyulogistics";

module.exports = CONFIG;
