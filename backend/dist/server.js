"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const api_1 = __importDefault(require("./routes/api"));
const sequelize_config_1 = require("./config/sequelize-config"); // Import Sequelize instance
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api', api_1.default);
// Sync models with the database
(async () => {
    try {
        await sequelize_config_1.sequelize.sync();
        console.log('Database synchronized');
    }
    catch (error) {
        console.error('Error synchronizing database:', error);
    }
})();
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
