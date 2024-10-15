var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// import axios from "axios";
// import { load as cheerioLoad } from "cheerio";
import { getJson } from "serpapi";
// async function scrapeAmazonImage(amazonLink: string) {
//   try {
//     const response = await axios.get(amazonLink);
//     const $ = cheerioLoad(response.data);
//     const imageUrl =
//       $("#imgBlkFront").attr("src") ||
//       $("#landingImage").attr("src") ||
//       $("[data-a-dynamic-image]").attr("src");
//     return imageUrl || "not available";
//   } catch (error) {
//     console.error("Error scraping image:", error);
//     return "not available";
//   }
// }
export function scrapeBookData(title, author) {
    return __awaiter(this, void 0, void 0, function () {
        var params, response, amazon_link, image, audible_link, bookData, error_1;
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
        return __generator(this, function (_v) {
            switch (_v.label) {
                case 0:
                    params = {
                        api_key: process.env.SERPAPI_KEY,
                        engine: "google",
                        q: "".concat(title, " ").concat(author, " book and audible"),
                        google_domain: "google.com",
                        // hl: "en",
                        // gl: "us",
                        num: "20",
                        device: "desktop",
                    };
                    _v.label = 1;
                case 1:
                    _v.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, getJson(params)];
                case 2:
                    response = _v.sent();
                    amazon_link = 
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    ((_b = (_a = response === null || response === void 0 ? void 0 : response.organic_results) === null || _a === void 0 ? void 0 : _a.find(function (result) { var _a; return (_a = result === null || result === void 0 ? void 0 : result.link) === null || _a === void 0 ? void 0 : _a.includes("amazon.com"); })) === null || _b === void 0 ? void 0 : _b.link) || "not available";
                    image = ((_d = (_c = response === null || response === void 0 ? void 0 : response.shopping_results) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.thumbnail) || // Shopping results thumbnail
                        ((_g = (_f = (_e = response === null || response === void 0 ? void 0 : response.shopping_results) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.images) === null || _g === void 0 ? void 0 : _g[0]) || // Shopping results images
                        ((_j = (_h = response === null || response === void 0 ? void 0 : response.organic_results) === null || _h === void 0 ? void 0 : _h[0]) === null || _j === void 0 ? void 0 : _j.thumbnail) || // Organic results thumbnail
                        ((_o = (_m = (_l = (_k = response === null || response === void 0 ? void 0 : response.organic_results) === null || _k === void 0 ? void 0 : _k[0]) === null || _l === void 0 ? void 0 : _l.images) === null || _m === void 0 ? void 0 : _m[0]) === null || _o === void 0 ? void 0 : _o.link) || // Organic results images
                        ((_q = (_p = response === null || response === void 0 ? void 0 : response.images_results) === null || _p === void 0 ? void 0 : _p[0]) === null || _q === void 0 ? void 0 : _q.thumbnail) || // General image results thumbnail
                        ((_s = (_r = response === null || response === void 0 ? void 0 : response.images_results) === null || _r === void 0 ? void 0 : _r[0]) === null || _s === void 0 ? void 0 : _s.original) || // General image results original
                        "not available";
                    audible_link = 
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    ((_u = (_t = response === null || response === void 0 ? void 0 : response.organic_results) === null || _t === void 0 ? void 0 : _t.find(function (result) { var _a; return (_a = result === null || result === void 0 ? void 0 : result.link) === null || _a === void 0 ? void 0 : _a.includes("audible.com"); })) === null || _u === void 0 ? void 0 : _u.link) || "not available";
                    bookData = {
                        image: image,
                        amazon_link: amazon_link,
                        audible_link: audible_link,
                    };
                    return [2 /*return*/, bookData];
                case 3:
                    error_1 = _v.sent();
                    console.error("Error scraping data for ".concat(title, ":"), error_1);
                    return [2 /*return*/, null];
                case 4: return [2 /*return*/];
            }
        });
    });
}
