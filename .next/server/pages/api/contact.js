"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/contact";
exports.ids = ["pages/api/contact"];
exports.modules = {

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "(api)/./pages/api/contact.js":
/*!******************************!*\
  !*** ./pages/api/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Librairie\nfunction handler(req, res) {\n    if (req.method !== \"POST\") {\n        res.status(405).json({\n            message: \"INVALID_METHOD\"\n        });\n        return;\n    }\n    // Variables\n    var name = req.body.name.toString();\n    var email = req.body.email.toString();\n    if (req.body.subject == null || req.body.subject == \"\") {\n        var form_subject = \"sans objet\";\n    } else {\n        var form_subject = req.body.subject.toString();\n    }\n    var content = req.body.content.toString();\n    if (!name || !email || !form_subject || !content) {\n        res.status(400).json({\n            message: \"INVALID_PARAMETER\"\n        });\n        return;\n    }\n    // Syntaxe adresse email\n    const pattern = /^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n    if (!pattern.test(email)) {\n        res.status(400).send({\n            message: \"EMAIL_SYNTAX_INCORRECT\"\n        });\n        return;\n    }\n    // Transformer les retours à la ligne pour le HTML\n    const message = content.replace(/\\n/g, \"<br>\").replace(/\\r/g, \"<br>\").replace(/\\t/g, \"<br>\").replace(/<(?!br\\s*\\/?)[^>]+>/g, \"\"); // supprime tout le html en autorisant uniquement les balises <br>\n    //INITIALISATION DE NODEMAILER\n    const back_email = \"arotiana4612@gmail.com\";\n    const back_pass = \"rrvpantoxzhjmpsk\";\n    var nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n    const transporter = nodemailer.createTransport({\n        service: \"gmail\",\n        host: \"smtp.gmail.com\",\n        port: 587,\n        secure: false,\n        auth: {\n            user: back_email,\n            pass: back_pass\n        }\n    });\n    (async ()=>{\n        try {\n            await transporter.sendMail({\n                from: back_email,\n                to: back_email,\n                subject: form_subject,\n                text: email,\n                html: `    <!DOCTYPE html>\r\n\t\t<html>\r\n\t\t  <head>\r\n\t\t\t<meta charset=\"utf-8\">\r\n\t\t\t<title>NodeMailer Email Template</title>\r\n\t\t\t<style>\r\n\t\t\t  .container {\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: 100%;\r\n\t\t\t\tpadding: 20px;\r\n\t\t\t\tbackground-color: #f4f4f4;\r\n\t\t\t  }\r\n\t\t\t  .email {\r\n\t\t\t\twidth: 80%;\r\n\t\t\t\tmargin: 0 auto;\r\n\t\t\t\tbackground-color: #fff;\r\n\t\t\t\tpadding: 20px;\r\n\t\t\t  }\r\n\t\t\t  .email-header {\r\n\t\t\t\tbackground-color: #333;\r\n\t\t\t\tcolor: #fff;\r\n\t\t\t\tpadding: 20px;\r\n\t\t\t\ttext-align: center;\r\n\t\t\t  }\r\n\t\t\t  .email-body {\r\n\t\t\t\tpadding: 20px;\r\n\t\t\t  }\r\n\t\t\t  .email-footer {\r\n\t\t\t\tbackground-color: #333;\r\n\t\t\t\tcolor: #fff;\r\n\t\t\t\tpadding: 20px;\r\n\t\t\t\ttext-align: center;\r\n\t\t\t  }\r\n\t\t\t</style>\r\n\t\t  </head>\r\n\t\t  <body>\r\n\t\t\t<div class=\"container\">\r\n\t\t\t  <div class=\"email\">\r\n\t\t\t\t<div class=\"email-header\">\r\n\t\t\t\t  <h1>MESSAGE DU PORTFOLIO</h1>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"email-body\">\r\n\t\t\t\t  <p>${message}</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"email-footer\">\r\n\t\t\t\t  <p>Expediteur:       ${name}<br>Email de l'expediteur :       ${email}</p>\r\n\t\t\t\t</div>\r\n\t\t\t  </div>\r\n\t\t\t</div>\r\n\t\t  </body>\r\n\t\t</html>`\n            });\n            res.status(202).json({\n                message: \"TOKONY TONGA NY MAIL\"\n            });\n        } catch (err) {\n            console.error(err);\n            res.status(500).json({\n                error: JSON.stringify(err)\n            });\n        }\n    })();\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29udGFjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsWUFBWTtBQUVHLFNBQVNBLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDeEMsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3pCRCxHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLE9BQU8sRUFBRSxnQkFBZ0I7U0FBRSxDQUFDLENBQUM7UUFDcEQsT0FBTztLQUNSO0lBRUQsWUFBWTtJQUVaLElBQUlDLElBQUksR0FBR04sR0FBRyxDQUFDTyxJQUFJLENBQUNELElBQUksQ0FBQ0UsUUFBUSxFQUFFO0lBQ25DLElBQUlDLEtBQUssR0FBR1QsR0FBRyxDQUFDTyxJQUFJLENBQUNFLEtBQUssQ0FBQ0QsUUFBUSxFQUFFO0lBRXJDLElBQUlSLEdBQUcsQ0FBQ08sSUFBSSxDQUFDRyxPQUFPLElBQUksSUFBSSxJQUFJVixHQUFHLENBQUNPLElBQUksQ0FBQ0csT0FBTyxJQUFJLEVBQUUsRUFBRTtRQUN0RCxJQUFJQyxZQUFZLEdBQUcsWUFBWTtLQUNoQyxNQUFNO1FBQ0wsSUFBSUEsWUFBWSxHQUFHWCxHQUFHLENBQUNPLElBQUksQ0FBQ0csT0FBTyxDQUFDRixRQUFRLEVBQUU7S0FDL0M7SUFFRCxJQUFJSSxPQUFPLEdBQUdaLEdBQUcsQ0FBQ08sSUFBSSxDQUFDSyxPQUFPLENBQUNKLFFBQVEsRUFBRTtJQUV6QyxJQUFJLENBQUNGLElBQUksSUFBSSxDQUFDRyxLQUFLLElBQUksQ0FBQ0UsWUFBWSxJQUFJLENBQUNDLE9BQU8sRUFBRTtRQUNoRFgsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxPQUFPLEVBQUUsbUJBQW1CO1NBQUUsQ0FBQyxDQUFDO1FBQ3ZELE9BQU87S0FDUjtJQUVELHdCQUF3QjtJQUN4QixNQUFNUSxPQUFPLDJKQUM2STtJQUMxSixJQUFJLENBQUNBLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDTCxLQUFLLENBQUMsRUFBRTtRQUN4QlIsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNZLElBQUksQ0FBQztZQUNuQlYsT0FBTyxFQUFFLHdCQUF3QjtTQUNsQyxDQUFDLENBQUM7UUFDSCxPQUFPO0tBQ1I7SUFFRDtJQUNBLE1BQU1BLE9BQU8sR0FBR08sT0FBTyxDQUNwQkksT0FBTyxRQUFRLE1BQU0sQ0FBQyxDQUN0QkEsT0FBTyxRQUFRLE1BQU0sQ0FBQyxDQUN0QkEsT0FBTyxRQUFRLE1BQU0sQ0FBQyxDQUN0QkEsT0FBTyx5QkFBeUIsRUFBRSxDQUFDLEVBQUUsa0VBQWtFO0lBRTFHLDhCQUE4QjtJQUM5QixNQUFNQyxVQUFVLEdBQUdDLHdCQUFpQjtJQUNwQyxNQUFNRyxTQUFTLEdBQUdILGtCQUFzQjtJQUd4QyxJQUFJSyxVQUFVLEdBQUdDLG1CQUFPLENBQUMsOEJBQVksQ0FBQztJQUV0QyxNQUFNQyxXQUFXLEdBQUdGLFVBQVUsQ0FBQ0csZUFBZSxDQUFDO1FBQzdDQyxPQUFPLEVBQUUsT0FBTztRQUNoQkMsSUFBSSxFQUFFLGdCQUFnQjtRQUN0QkMsSUFBSSxFQUFFLEdBQUc7UUFDVEMsTUFBTSxFQUFFLEtBQUs7UUFDYkMsSUFBSSxFQUFFO1lBQ0pDLElBQUksRUFBRWYsVUFBVTtZQUNoQmdCLElBQUksRUFBRVosU0FBUztTQUNoQjtLQUNGLENBQUM7SUFFRixDQUFDLFVBQVk7UUFDWCxJQUFJO1lBQ0YsTUFBTUksV0FBVyxDQUFDUyxRQUFRLENBQUM7Z0JBQ3pCQyxJQUFJLEVBQUVsQixVQUFVO2dCQUNoQm1CLEVBQUUsRUFBRW5CLFVBQVU7Z0JBQ2RQLE9BQU8sRUFBRUMsWUFBWTtnQkFDckIwQixJQUFJLEVBQUU1QixLQUFLO2dCQUNYNkIsSUFBSSxFQUFFLENBQUM7OztnQkFxRFBqQyxPQUFPLEVBQUU7YUFDVixDQUFDLENBQUM7U0FDSixDQUFDO1lBQ0FtQztZQUNBdkMsR0FBRyxDQUFDRTtnQkFDRnNDO2FBQ0QsQ0FBQyxDQUFDO1NBQ0o7S0FDRixDQUFDO0NBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8tcmVhY3QvLi9wYWdlcy9hcGkvY29udGFjdC5qcz8zNDkzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIExpYnJhaXJpZVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGlmIChyZXEubWV0aG9kICE9PSBcIlBPU1RcIikge1xyXG4gICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBtZXNzYWdlOiBcIklOVkFMSURfTUVUSE9EXCIgfSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBWYXJpYWJsZXNcclxuXHJcbiAgdmFyIG5hbWUgPSByZXEuYm9keS5uYW1lLnRvU3RyaW5nKCk7XHJcbiAgdmFyIGVtYWlsID0gcmVxLmJvZHkuZW1haWwudG9TdHJpbmcoKTtcclxuXHJcbiAgaWYgKHJlcS5ib2R5LnN1YmplY3QgPT0gbnVsbCB8fCByZXEuYm9keS5zdWJqZWN0ID09IFwiXCIpIHtcclxuICAgIHZhciBmb3JtX3N1YmplY3QgPSBcInNhbnMgb2JqZXRcIjtcclxuICB9IGVsc2Uge1xyXG4gICAgdmFyIGZvcm1fc3ViamVjdCA9IHJlcS5ib2R5LnN1YmplY3QudG9TdHJpbmcoKTtcclxuICB9XHJcblxyXG4gIHZhciBjb250ZW50ID0gcmVxLmJvZHkuY29udGVudC50b1N0cmluZygpO1xyXG5cclxuICBpZiAoIW5hbWUgfHwgIWVtYWlsIHx8ICFmb3JtX3N1YmplY3QgfHwgIWNvbnRlbnQpIHtcclxuICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogXCJJTlZBTElEX1BBUkFNRVRFUlwiIH0pO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gU3ludGF4ZSBhZHJlc3NlIGVtYWlsXHJcbiAgY29uc3QgcGF0dGVybiA9XHJcbiAgICAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcclxuICBpZiAoIXBhdHRlcm4udGVzdChlbWFpbCkpIHtcclxuICAgIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHtcclxuICAgICAgbWVzc2FnZTogXCJFTUFJTF9TWU5UQVhfSU5DT1JSRUNUXCIsXHJcbiAgICB9KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vIFRyYW5zZm9ybWVyIGxlcyByZXRvdXJzIMOgIGxhIGxpZ25lIHBvdXIgbGUgSFRNTFxyXG4gIGNvbnN0IG1lc3NhZ2UgPSBjb250ZW50XHJcbiAgICAucmVwbGFjZSgvXFxuL2csIFwiPGJyPlwiKVxyXG4gICAgLnJlcGxhY2UoL1xcci9nLCBcIjxicj5cIilcclxuICAgIC5yZXBsYWNlKC9cXHQvZywgXCI8YnI+XCIpXHJcbiAgICAucmVwbGFjZSgvPCg/IWJyXFxzKlxcLz8pW14+XSs+L2csIFwiXCIpOyAvLyBzdXBwcmltZSB0b3V0IGxlIGh0bWwgZW4gYXV0b3Jpc2FudCB1bmlxdWVtZW50IGxlcyBiYWxpc2VzIDxicj5cclxuXHJcbiAgLy9JTklUSUFMSVNBVElPTiBERSBOT0RFTUFJTEVSXHJcbiAgY29uc3QgYmFja19lbWFpbCA9IHByb2Nlc3MuZW52LkVNQUlMO1xyXG4gIGNvbnN0IGJhY2tfcGFzcyA9IHByb2Nlc3MuZW52LkVNQUlMX1BBU1M7XHJcbiAgXHJcblxyXG4gIHZhciBub2RlbWFpbGVyID0gcmVxdWlyZShcIm5vZGVtYWlsZXJcIik7XHJcblxyXG4gIGNvbnN0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xyXG4gICAgc2VydmljZTogXCJnbWFpbFwiLFxyXG4gICAgaG9zdDogXCJzbXRwLmdtYWlsLmNvbVwiLFxyXG4gICAgcG9ydDogNTg3LFxyXG4gICAgc2VjdXJlOiBmYWxzZSxcclxuICAgIGF1dGg6IHtcclxuICAgICAgdXNlcjogYmFja19lbWFpbCxcclxuICAgICAgcGFzczogYmFja19wYXNzLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgKGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IHRyYW5zcG9ydGVyLnNlbmRNYWlsKHtcclxuICAgICAgICBmcm9tOiBiYWNrX2VtYWlsLFxyXG4gICAgICAgIHRvOiBiYWNrX2VtYWlsLFxyXG4gICAgICAgIHN1YmplY3Q6IGZvcm1fc3ViamVjdCxcclxuICAgICAgICB0ZXh0OiBlbWFpbCxcclxuICAgICAgICBodG1sOiBgICAgIDwhRE9DVFlQRSBodG1sPlxyXG5cdFx0PGh0bWw+XHJcblx0XHQgIDxoZWFkPlxyXG5cdFx0XHQ8bWV0YSBjaGFyc2V0PVwidXRmLThcIj5cclxuXHRcdFx0PHRpdGxlPk5vZGVNYWlsZXIgRW1haWwgVGVtcGxhdGU8L3RpdGxlPlxyXG5cdFx0XHQ8c3R5bGU+XHJcblx0XHRcdCAgLmNvbnRhaW5lciB7XHJcblx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHRcdHBhZGRpbmc6IDIwcHg7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcclxuXHRcdFx0ICB9XHJcblx0XHRcdCAgLmVtYWlsIHtcclxuXHRcdFx0XHR3aWR0aDogODAlO1xyXG5cdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0XHRcdFx0cGFkZGluZzogMjBweDtcclxuXHRcdFx0ICB9XHJcblx0XHRcdCAgLmVtYWlsLWhlYWRlciB7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuXHRcdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdFx0XHRwYWRkaW5nOiAyMHB4O1xyXG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0ICB9XHJcblx0XHRcdCAgLmVtYWlsLWJvZHkge1xyXG5cdFx0XHRcdHBhZGRpbmc6IDIwcHg7XHJcblx0XHRcdCAgfVxyXG5cdFx0XHQgIC5lbWFpbC1mb290ZXIge1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcblx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdFx0cGFkZGluZzogMjBweDtcclxuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdCAgfVxyXG5cdFx0XHQ8L3N0eWxlPlxyXG5cdFx0ICA8L2hlYWQ+XHJcblx0XHQgIDxib2R5PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcblx0XHRcdCAgPGRpdiBjbGFzcz1cImVtYWlsXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImVtYWlsLWhlYWRlclwiPlxyXG5cdFx0XHRcdCAgPGgxPk1FU1NBR0UgRFUgUE9SVEZPTElPPC9oMT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZW1haWwtYm9keVwiPlxyXG5cdFx0XHRcdCAgPHA+JHttZXNzYWdlfTwvcD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZW1haWwtZm9vdGVyXCI+XHJcblx0XHRcdFx0ICA8cD5FeHBlZGl0ZXVyOiAgICAgICAke25hbWV9PGJyPkVtYWlsIGRlIGwnZXhwZWRpdGV1ciA6ICAgICAgICR7ZW1haWx9PC9wPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQgIDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCAgPC9ib2R5PlxyXG5cdFx0PC9odG1sPmAsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXMuc3RhdHVzKDIwMikuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTogXCJUT0tPTlkgVE9OR0EgTlkgTUFJTFwiLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcclxuICAgICAgICBlcnJvcjogSlNPTi5zdHJpbmdpZnkoZXJyKSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSkoKTtcclxufVxyXG4iXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwibmFtZSIsImJvZHkiLCJ0b1N0cmluZyIsImVtYWlsIiwic3ViamVjdCIsImZvcm1fc3ViamVjdCIsImNvbnRlbnQiLCJwYXR0ZXJuIiwidGVzdCIsInNlbmQiLCJyZXBsYWNlIiwiYmFja19lbWFpbCIsInByb2Nlc3MiLCJlbnYiLCJFTUFJTCIsImJhY2tfcGFzcyIsIkVNQUlMX1BBU1MiLCJub2RlbWFpbGVyIiwicmVxdWlyZSIsInRyYW5zcG9ydGVyIiwiY3JlYXRlVHJhbnNwb3J0Iiwic2VydmljZSIsImhvc3QiLCJwb3J0Iiwic2VjdXJlIiwiYXV0aCIsInVzZXIiLCJwYXNzIiwic2VuZE1haWwiLCJmcm9tIiwidG8iLCJ0ZXh0IiwiaHRtbCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIkpTT04iLCJzdHJpbmdpZnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/contact.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/contact.js"));
module.exports = __webpack_exports__;

})();