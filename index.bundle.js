"use strict";
(self["webpackChunkto_do_today"] = self["webpackChunkto_do_today"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* Trying mobile first dev */\n\n:root {\n    --primary: #f5b316;\n    --secondary: #8d8d8d;\n    --tertiary: #667292;\n    --quaternary: #d9d9d9;\n}\n\nhtml, body, #overallWrapper {\n    font-family: 'Montserrat', sans-serif;\n    height: 100%;\n    width: 100%;\n}\n\n#backgroundCoverStuff {\n    display: none;\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background: rgba(0,0,0,.8);\n    z-index: 12;\n}\n\n#notBackgroundCover {\n    height: 100%;\n    display: grid;\n    grid-template-rows: 5% 95%;\n    grid-template-columns: 35% 65%;\n}\n\n#header {\n    grid-row: 1 / 2;\n    grid-column: 1 / 3;\n    display: flex;\n    text-align: center;\n    justify-content: center;\n    align-items: center;\n    box-sizing: border-box;\n    background-color: var(--primary);\n    border-bottom: 2px solid var(--tertiary);\n}\n\n#header.dark-mode {\n    background-color: gray;\n}\n\n#headerIconHolder {\n    display: flex;\n    width: 100%;\n    box-sizing: border-box;\n    padding: 5px;\n}\n\n#toggledOn {\n    display: none;\n}\n\n#darkCount {\n    display: none;\n}\n\n#headerIconHolder h3 {\n    font-size: 11px;\n}\n\n#sidebarNamesOnly {\n    grid-row: 2 / 3;\n    grid-column: 1 / 2;\n    text-align: center;\n    /* display: flex;\n    flex-direction: column;\n    gap: 1rem; */\n    padding-left: 8px;\n    background-color: var(--quaternary);\n\n    flex: 1 1 auto;\n    overflow-y: auto;\n    min-height: 100px;\n}\n\n#sidebarNamesOnly > div:nth-of-type(2) {\n    display:none;\n}\n\n[id^=\"_hIdDeN\"] {\n    display: none;\n}\n\n#content {\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n    border-left: 2px solid var(--tertiary);\n    background-color: var(--quaternary);\n}\n\n#content.dark-mode, #sidebarNamesOnly.dark-mode {\n    background-color: black;\n    color: var(--quaternary);\n}\n\n#allTasksBox {\n    display: none;\n    z-index: 5;\n}\n\ndiv.added_projects {\n    text-align: center;\n    color: black;\n    background-color: var(--secondary);\n    font-size: 1.3rem;\n    padding: 0.5rem;\n}\n\ndiv.added_projects.dark-mode {\n    background-color: black;\n    color: var(--quaternary);\n    border-bottom: 1px dashed white;\n}\n\ndiv#stopAllEmpty {\n    padding: 0.5rem;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\ndiv#stopAllEmpty > h2 {\n    text-align: center;\n    font-size: 1.5rem;\n    font-weight: bold;\n}\n\ndiv#stopAllEmpty > button {\n    background-color: var(--primary);\n    box-shadow: 1px 2px 3px rgb(0,0,0,0.6);\n}\n\ndiv#stopAllEmpty > button.dark-mode {\n    background-color: black;\n    color: var(--quaternary);\n}\n\n\n.eachSidebarContainer {\n    display: flex;\n    justify-content: left;\n    align-items: center;\n    font-size: 16px;\n    height: 42px;\n    opacity: 0.8;\n    padding: 5px 10px;\n    position: relative;\n    border: 2px solid var(--tertiary);\n    margin-bottom: 10px;\n    border-right-style: none;\n    background-color: var(--primary);\n    box-shadow: 1px 2px 2px rgb(0,0,0,0.6);\n}\n\n.eachSidebarContainer.dark-mode {\n    background-color: black;\n    color: var(--quaternary);\n    box-shadow: 1px 2px 2px rgba(140, 140, 140, 0.6);\n}\n\ndiv.sidebar_Names {\n    text-align: left;\n    width: 80%;\n}\n\ndiv.sidebar_Name_edit {\n    font-size:  clamp(0.2rem, 1rem, 1.1rem);\n    position: absolute;\n    height: 3vh;\n    width: 3vh;\n    top: 3px;\n    right: 5px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\ndiv.sidebar_Name_remove {\n    font-size: clamp(0.2rem, 1rem, 1.1rem);\n    position: absolute;\n    vertical-align: bottom;\n    height: 3vh;\n    width: 3vh;\n    bottom: 3px;\n    right: 5px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\ndiv[id$=\"High\"], div[id$=\"High_AllPage\"] {\n    border: 2px solid rgb(255, 120, 120);\n}\n\ndiv[id$=\"Medium\"], div[id$=\"Medium_AllPage\"] {\n    border: 2px solid rgb(255, 193, 36);\n}\n\ndiv[id$=\"Low\"], div[id$=\"Low_AllPage\"] {\n    border: 2px solid rgb(129, 250, 30);\n}\n\nh3.added_proj_box.dark-mode, div.added_tasks.dark-mode {\n    background-color: black;\n    color: var(--quaternary);\n}\n\nh3.added_proj_box {\n    background-color: var(--quaternary);\n    min-height: 30px;\n    transition: height 2s;\n}\n\ndiv.added_tasks {\n    box-sizing: border-box;\n    text-align: center;\n    background-color: var(--quaternary);\n    font-size: 12px;\n    padding: 4px;\n    display: grid;\n    grid-template-columns: 60% 40%;\n    grid-template-rows: repeat(2, 5vh) minmax(25%, 1fr);\n}\n\ndiv.added_tasks > h4 {\n    display: none;\n}\n\ndiv.nowYouSeeMe {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 14px;\n    text-align: left;\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n}\n\ndiv.added_due {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n}\n\ndiv.task_button_holder {\n    display: flex;\n    box-sizing: border-box;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n    grid-column: 1 / 3;\n    grid-row: 2 / 3;\n}\n\ndiv.task_button_holder > button {\n    height: 22px;\n}\n\ndiv.theExpandables {\n    grid-column: 1 / 3;\n    grid-row: 3 / 4;\n    max-height: 0vh;\n    opacity: 0;\n    z-index: -1;\n\n    -webkit-transition: all 0.3s ease-out;\n    -moz-transition: all 0.3s ease-out;\n    -ms-transition: all 0.3s ease-out;\n    -o-transition: all 0.3s ease-out;\n    transition: all 0.3s ease-out;\n    \n}\n\ndiv.theExpandables.active {\n    box-sizing: border-box;\n    opacity: 1;\n    min-height: 8vh;\n    max-height: none;\n    z-index: 3;\n    /* background-color:rgb(255, 110, 204); */\n}\n/* Button used to open the forms - fixed at the bottom of the page */\n\n#buttonHolder {\n    position: fixed;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    bottom: 25px;\n    right: 28px;\n    width: 27vw;\n}\n#addnew {\n    background-color: #555;\n    color: white;\n    padding: 4px 2px;\n    border: none;\n    cursor: pointer;\n    opacity: 0.8;\n    width: 27vw;\n}\n  \n#newproj_button {\n    background-color: #555;\n    color: white;\n    padding: 4px 2px;\n    border: none;\n    cursor: pointer;\n    opacity: 0.8;\n    width: 27vw;\n}\n\n/* The popup form - hidden by default */\n#todoFormContainer {\n    display: none;\n    padding: 5px;\n    width: 80%;\n    height: 80%;\n    background: var(--primary);\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    margin: auto;\n    text-align: center;\n    font-size: 1rem;\n    align-content: center;\n    justify-content: center;\n    z-index: 15;\n}\n  \n#projFormContainer {\n    display: none;\n    padding: 5px;\n    width: 60%;\n    height: 60%;\n    background: var(--primary);\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    margin: auto;\n    text-align: center;\n    font-size: 1.3rem;\n    align-content: center;\n    justify-content: center;\n    z-index: 15;\n}\n  \n#editFormContainer {\n    display: none;\n    padding: 5px;\n    width: 80%;\n    height: 80%;\n    background: var(--primary);\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    margin: auto;\n    text-align: center;\n    font-size: 1rem;\n    align-content: center;\n    justify-content: center;\n    z-index: 15;\n}\n\n/* Add styles to the form container */\n#addnewform {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    box-sizing: border-box;\n    padding: 5px;\n    background-color: white;\n}\n\n#addnewform.dark-mode {\n    background-color: var(--secondary);\n    color: black;\n}\n\n#addnewprojform {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    box-sizing: border-box;\n    padding: 25px;\n    background-color: white;\n}\n\n#addnewprojform.dark-mode {\n    background-color: var(--secondary);\n    color: black;\n}\n\n#addnewform > div:nth-child(4), #addnewform > div:nth-child(5) {\n    margin: 5px;\n}\n\n#addnewform > div:nth-child(3) {\n    margin: 3px;\n}\n\n#addnewform > div:nth-child(3) > input, #addnewform > div:nth-child(4) > select {\n    margin-top: 3px;\n}\n  \n#editForm {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    box-sizing: border-box;\n    padding: 5px;\n    background-color: white;\n}\n\n#editForm.dark-mode {\n    background-color: var(--secondary);\n    color: black;\n}\n\n#editForm > div:nth-child(4), #editForm > div:nth-child(5) {\n    margin: 4px;\n}\n\n#editForm > div:nth-child(3) {\n    margin: 2px;\n}\n\n#editForm > div:nth-child(3) > input, #editForm > div:nth-child(4) > select {\n    margin-top: 3px;\n}\n  \n  /* Full-width input fields */\n#addnewform input[type=text], #addnewform textarea, #editForm input[type=text], #editForm textarea {\n    font-family: 'Jost', sans-serif;\n    box-sizing: border-box;\n    width: 100%;\n    padding: 5px;\n    margin: 5px 0 8px 0;\n    border: none;\n    background: #f1f1f1;\n}\n\n#addnewprojform input[type=text], #editForm input[type=text] {\n    font-family: 'Jost', sans-serif;\n    box-sizing: border-box;\n    width: 100%;\n    padding: 5px;\n    margin: 12px 0 12px 0;\n    border: none;\n    background: #f1f1f1;\n}\n\n#addnewform input[type=text]::placeholder, #addnewprojform input[type=text]::placeholder, #addnewform textarea::placeholder, #editForm input[type=text], #editForm textarea::placeholder {\n    font-family: 'Jost', sans-serif;\n}\n  \n/* When the inputs get focus, do something */\n#addnewform input[type=text]:focus, #addnewprojform input[type=text]:focus, #addnewform textarea:focus, #editForm input[type=text]:focus, #editForm textarea:focus {\n    background-color: #ddd;\n    outline: none;\n}\n  \n/* Set a style for the submit/login button */\n#addnewform button, #editForm button {\n    background-color: var(--tertiary);\n    color: black;\n    padding: 12px 15px;\n    border: none;\n    cursor: pointer;\n    width: 70%;\n    margin-bottom: 12px;\n    opacity: 0.8;\n}\n\n#addnewprojform button {\n    background-color: var(--tertiary);\n    color: black;\n    padding: 12px 15px;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n    margin-bottom: 12px;\n    opacity: 0.8; \n}\n  \n/* Add a red background color to the cancel button */\n#addnewform button#cancel_button, #addnewprojform button#newproj_cancel, #editForm button#cancelEditButton {\n    background-color: var(--quaternary);\n}\n  \n/* Add some hover effects to buttons */\n#addnewform  button:hover, #addnew:hover, #addnewprojform button:hover, #newproj_button:hover {\n    opacity: 1;\n}\n\ninput#title.needsFilling, #description.needsFilling {\n    border: 1px solid rgb(219, 54, 54);\n}\n\nselect {\n    width: 100%;\n    padding: 16px 20px;\n    border: none;\n    border-radius: 4px;\n    background-color: #f1f1f1;\n}\n\ninput.dark-mode, textarea.dark-mode, select.dark-mode,\n#addnewform input[type=text].dark-mode, #addnewform textarea.dark-mode, #editForm input[type=text].dark-mode, #editForm textarea.dark-mode {\n    background-color: var(--quaternary);\n}\n\n/* Scrollbar */\n\n/* width */\n::-webkit-scrollbar {\n  width: 7px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: rgb(190, 190, 190);\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: rgb(103, 103, 103);\n}\n\n/* small tablet sizes */\n\n@media screen and (min-width: 620px) {\n\n    div#stopAllEmpty {\n        padding: 15px 25px;\n    }\n    div#stopAllEmpty > button {\n        height: 5.25vh;\n        font-size: 1.1rem;\n    }\n    .eachSidebarContainer {\n        font-size: 18px;\n        height: 48px;\n        opacity: 0.8;\n        padding: 5px 10px;\n        position: relative;\n        border: 2px solid var(--tertiary);\n        margin-bottom: 12px;\n        border-right-style: none;\n        background-color: var(--primary);\n        box-shadow: 1px 2px 2px rgb(0,0,0,0.6);\n    }\n    div.added_projects {\n        font-size: 1.5rem;\n    }\n    div.added_tasks {\n        font-size: 15px;\n    }\n    div.task_button_holder > button {\n        height: 25px;\n    }\n    div.sidebar_Name_edit {\n        font-size: clamp(0.5rem, 1.2rem, 1.4rem);\n    }\n    div.sidebar_Name_remove {\n        font-size: clamp(0.5rem, 1.2rem, 1.4rem);\n    }\n    div.sidebar_Names {\n        width: 92%;\n    }\n    \n}\n\n/* large tablet & laptop sizes */\n\n@media screen and (min-width: 960px) {\n    \n}\n\n/* desktop */\n\n@media screen and (min-width: 1200px) {\n    \n}\n\n/*My initial code below for desktop*/\n\n/* html, body {\n    height: 100%;\n}\n\n#header {\n    position: absolute;\n    height: 5vh;\n    width: 100%;\n    background-color: bisque;\n}\n\nbody {\n    display: flex;\n}\n\n#sidebarNamesOnly {\n    text-align: center;\n    padding-top: 5vh;\n    display: flex;\n    flex-direction: column;\n    gap: 3rem;\n    width: 25vw;\n}\n\n#content {\n    padding-top: 5vh;\n    width: 75vw;\n    border: 2px solid coral;\n}\n\n#allTasksBox {\n    display: none;\n    z-index: 5;\n}\n\ndiv.added_projects {\n    background-color: aqua;\n    font-size: 2rem;\n    padding-left: 2rem;\n}\n\n.eachSidebarContainer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.1rem;\n    height: 2rem;\n    gap: 1rem;\n    opacity: 0.8;\n    border-bottom-left-radius: 12px;\n    border-top-left-radius: 12px;\n    border: 2px solid coral;\n    border-right-style: none;\n    background-color: rgb(255, 225, 126);\n}\n\ndiv[id$=\"High\"], div[id$=\"High_AllPage\"] {\n    border: 2px solid rgb(255, 41, 41);\n}\n\ndiv[id$=\"Medium\"], div[id$=\"Medium_AllPage\"] {\n    border: 2px solid rgb(255, 238, 0);\n}\n\ndiv[id$=\"Low\"], div[id$=\"Low_AllPage\"] {\n    border: 2px solid rgb(43, 233, 0);\n}\n\nh3.added_proj_box {\n    background-color: rgb(255, 159, 242);\n    min-height: 30px;\n    transition: height 2s;\n}\n\ndiv.added_tasks {\n    text-align: center;\n    background-color: rgb(255, 189, 103);\n    display: grid;\n    gap: 0.5rem;\n    grid-template-columns: 70% 30%;\n    grid-template-rows: repeat(2, 5vh) minmax(25%, 1fr);\n}\n\ndiv.added_tasks > h4 {\n    display: none;\n}\n\ndiv.nowYouSeeMe {\n    display: flex;\n    justify-content: center;\n    text-align: left;\n    grid-column: 1 / 2;\n    grid-row: 1 / 3;\n}\n\ndiv.added_due {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n}\n\ndiv.task_button_holder {\n    display: flex;\n    justify-content: center;\n    gap: 1rem;\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n}\n\ndiv.task_button_holder > button {\n    height: 25px;\n}\n\ndiv.theExpandables {\n    grid-column: 1 / 3;\n    grid-row: 3 / 4;\n    max-height: 0vh;\n    opacity: 0;\n    background-color: rgb(255, 189, 103);\n\n    -webkit-transition: all 0.3s ease-out;\n    -moz-transition: all 0.3s ease-out;\n    -ms-transition: all 0.3s ease-out;\n    -o-transition: all 0.3s ease-out;\n    transition: all 0.3s ease-out;\n    \n}\n\ndiv.theExpandables.active {\n    opacity: 1;\n    max-height: 10vh;\n    background-color:rgb(255, 110, 204);\n} */\n\n/* Button used to open the forms - fixed at the bottom of the page */\n/* #addnew {\n  background-color: #555;\n  color: white;\n  padding: 16px 20px;\n  border: none;\n  cursor: pointer;\n  opacity: 0.8;\n  position: fixed;\n  bottom: 23px;\n  right: 28px;\n  width: 10vw;\n}\n\n#newproj_button {\n    background-color: #555;\n    color: white;\n    padding: 16px 20px;\n    border: none;\n    cursor: pointer;\n    opacity: 0.8;\n    position: fixed;\n    bottom: 23px;\n    left: 28px;\n    width: 10vw;\n} */\n\n/* The popup form - hidden by default */\n/* #todoFormContainer {\n  display: none;\n  position: fixed;\n  bottom: 0;\n  right: 15px;\n  border: 3px solid #f1f1f1;\n  width: 13vw;\n  z-index: 9;\n}\n\n#projFormContainer {\n    display: none;\n    position: fixed;\n    bottom: 0;\n    left: 15px;\n    border: 3px solid #f1f1f1;\n    width: 13vw;\n    z-index: 9;\n  }\n\n#editFormContainer {\n    display: none;\n    position: fixed;\n    bottom: 0;\n    right: auto;\n    border: 3px solid #f1f1f1;\n    width: 13vw;\n    z-index: 9;\n  }\n */\n/* Add styles to the form container */\n/* #addnewform, #addnewprojform {\n  max-width: 300px;\n  padding: 10px;\n  background-color: white;\n}\n\n#editForm {\n    max-width: 300px;\n    padding: 10px;\n    background-color: white;\n} */\n\n/* Full-width input fields */\n/* #addnewform input[type=text], #addnewprojform input[type=text] {\n  width: 100%;\n  padding: 15px;\n  margin: 5px 0 22px 0;\n  border: none;\n  background: #f1f1f1;\n}\n\n#editForm input[type=text] {\n    width: 100%;\n    padding: 15px;\n    margin: 5px 0 22px 0;\n    border: none;\n    background: #f1f1f1;\n} */\n\n/* When the inputs get focus, do something */\n/* #addnewform input[type=text]:focus, #addnewprojform input[type=text]:focus {\n  background-color: #ddd;\n  outline: none;\n} */\n\n/* Set a style for the submit/login button */\n/* #addnewform button, #addnewprojform button {\n  background-color: #04AA6D;\n  color: white;\n  padding: 16px 20px;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  margin-bottom:10px;\n  opacity: 0.8;\n} */\n\n/* Add a red background color to the cancel button */\n/* #addnewform button#cancel_button, #addnewprojform button#newproj_cancel {\n  background-color: red;\n} */\n\n/* Add some hover effects to buttons */\n/* #addnewform  button:hover, #addnew:hover, #addnewprojform button:hover, #newproj_button:hover {\n  opacity: 1;\n} */", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* Trying mobile first dev */\n\n:root {\n    --primary: #f5b316;\n    --secondary: #8d8d8d;\n    --tertiary: #667292;\n    --quaternary: #d9d9d9;\n}\n\nhtml, body, #overallWrapper {\n    font-family: 'Montserrat', sans-serif;\n    height: 100%;\n    width: 100%;\n}\n\n#backgroundCoverStuff {\n    display: none;\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background: rgba(0,0,0,.8);\n    z-index: 12;\n}\n\n#notBackgroundCover {\n    height: 100%;\n    display: grid;\n    grid-template-rows: 5% 95%;\n    grid-template-columns: 35% 65%;\n}\n\n#header {\n    grid-row: 1 / 2;\n    grid-column: 1 / 3;\n    display: flex;\n    text-align: center;\n    justify-content: center;\n    align-items: center;\n    box-sizing: border-box;\n    background-color: var(--primary);\n    border-bottom: 2px solid var(--tertiary);\n}\n\n#header.dark-mode {\n    background-color: gray;\n}\n\n#headerIconHolder {\n    display: flex;\n    width: 100%;\n    box-sizing: border-box;\n    padding: 5px;\n}\n\n#toggledOn {\n    display: none;\n}\n\n#darkCount {\n    display: none;\n}\n\n#headerIconHolder h3 {\n    font-size: 11px;\n}\n\n#sidebarNamesOnly {\n    grid-row: 2 / 3;\n    grid-column: 1 / 2;\n    text-align: center;\n    /* display: flex;\n    flex-direction: column;\n    gap: 1rem; */\n    padding-left: 8px;\n    background-color: var(--quaternary);\n\n    flex: 1 1 auto;\n    overflow-y: auto;\n    min-height: 100px;\n}\n\n#sidebarNamesOnly > div:nth-of-type(2) {\n    display:none;\n}\n\n[id^=\"_hIdDeN\"] {\n    display: none;\n}\n\n#content {\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n    border-left: 2px solid var(--tertiary);\n    background-color: var(--quaternary);\n}\n\n#content.dark-mode, #sidebarNamesOnly.dark-mode {\n    background-color: black;\n    color: var(--quaternary);\n}\n\n#allTasksBox {\n    display: none;\n    z-index: 5;\n}\n\ndiv.added_projects {\n    text-align: center;\n    color: black;\n    background-color: var(--secondary);\n    font-size: 1.3rem;\n    padding: 0.5rem;\n}\n\ndiv.added_projects.dark-mode {\n    background-color: black;\n    color: var(--quaternary);\n    border-bottom: 1px dashed white;\n}\n\ndiv#stopAllEmpty {\n    padding: 0.5rem;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\ndiv#stopAllEmpty > h2 {\n    text-align: center;\n    font-size: 1.5rem;\n    font-weight: bold;\n}\n\ndiv#stopAllEmpty > button {\n    background-color: var(--primary);\n    box-shadow: 1px 2px 3px rgb(0,0,0,0.6);\n}\n\ndiv#stopAllEmpty > button.dark-mode {\n    background-color: black;\n    color: var(--quaternary);\n}\n\n\n.eachSidebarContainer {\n    display: flex;\n    justify-content: left;\n    align-items: center;\n    font-size: 16px;\n    height: 42px;\n    opacity: 0.8;\n    padding: 5px 10px;\n    position: relative;\n    border: 2px solid var(--tertiary);\n    margin-bottom: 10px;\n    border-right-style: none;\n    background-color: var(--primary);\n    box-shadow: 1px 2px 2px rgb(0,0,0,0.6);\n}\n\n.eachSidebarContainer.dark-mode {\n    background-color: black;\n    color: var(--quaternary);\n    box-shadow: 1px 2px 2px rgba(140, 140, 140, 0.6);\n}\n\ndiv.sidebar_Names {\n    text-align: left;\n    width: 80%;\n}\n\ndiv.sidebar_Name_edit {\n    font-size:  clamp(0.2rem, 1rem, 1.1rem);\n    position: absolute;\n    height: 3vh;\n    width: 3vh;\n    top: 3px;\n    right: 5px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\ndiv.sidebar_Name_remove {\n    font-size: clamp(0.2rem, 1rem, 1.1rem);\n    position: absolute;\n    vertical-align: bottom;\n    height: 3vh;\n    width: 3vh;\n    bottom: 3px;\n    right: 5px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\ndiv[id$=\"High\"], div[id$=\"High_AllPage\"] {\n    border: 2px solid rgb(255, 120, 120);\n}\n\ndiv[id$=\"Medium\"], div[id$=\"Medium_AllPage\"] {\n    border: 2px solid rgb(255, 193, 36);\n}\n\ndiv[id$=\"Low\"], div[id$=\"Low_AllPage\"] {\n    border: 2px solid rgb(129, 250, 30);\n}\n\nh3.added_proj_box.dark-mode, div.added_tasks.dark-mode {\n    background-color: black;\n    color: var(--quaternary);\n}\n\nh3.added_proj_box {\n    background-color: var(--quaternary);\n    min-height: 30px;\n    transition: height 2s;\n}\n\ndiv.added_tasks {\n    box-sizing: border-box;\n    text-align: center;\n    background-color: var(--quaternary);\n    font-size: 12px;\n    padding: 4px;\n    display: grid;\n    grid-template-columns: 60% 40%;\n    grid-template-rows: repeat(2, 5vh) minmax(25%, 1fr);\n}\n\ndiv.added_tasks > h4 {\n    display: none;\n}\n\ndiv.nowYouSeeMe {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 14px;\n    text-align: left;\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n}\n\ndiv.added_due {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n}\n\ndiv.task_button_holder {\n    display: flex;\n    box-sizing: border-box;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n    grid-column: 1 / 3;\n    grid-row: 2 / 3;\n}\n\ndiv.task_button_holder > button {\n    height: 22px;\n}\n\ndiv.theExpandables {\n    grid-column: 1 / 3;\n    grid-row: 3 / 4;\n    max-height: 0vh;\n    opacity: 0;\n    z-index: -1;\n\n    -webkit-transition: all 0.3s ease-out;\n    -moz-transition: all 0.3s ease-out;\n    -ms-transition: all 0.3s ease-out;\n    -o-transition: all 0.3s ease-out;\n    transition: all 0.3s ease-out;\n    \n}\n\ndiv.theExpandables.active {\n    box-sizing: border-box;\n    opacity: 1;\n    min-height: 8vh;\n    max-height: none;\n    z-index: 3;\n    /* background-color:rgb(255, 110, 204); */\n}\n/* Button used to open the forms - fixed at the bottom of the page */\n\n#buttonHolder {\n    position: fixed;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    bottom: 25px;\n    right: 28px;\n    width: 27vw;\n}\n#addnew {\n    background-color: #555;\n    color: white;\n    padding: 4px 2px;\n    border: none;\n    cursor: pointer;\n    opacity: 0.8;\n    width: 27vw;\n}\n  \n#newproj_button {\n    background-color: #555;\n    color: white;\n    padding: 4px 2px;\n    border: none;\n    cursor: pointer;\n    opacity: 0.8;\n    width: 27vw;\n}\n\n/* The popup form - hidden by default */\n#todoFormContainer {\n    display: none;\n    padding: 5px;\n    width: 80%;\n    height: 80%;\n    background: var(--primary);\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    margin: auto;\n    text-align: center;\n    font-size: 1rem;\n    align-content: center;\n    justify-content: center;\n    z-index: 15;\n}\n  \n#projFormContainer {\n    display: none;\n    padding: 5px;\n    width: 60%;\n    height: 60%;\n    background: var(--primary);\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    margin: auto;\n    text-align: center;\n    font-size: 1.3rem;\n    align-content: center;\n    justify-content: center;\n    z-index: 15;\n}\n  \n#editFormContainer {\n    display: none;\n    padding: 5px;\n    width: 80%;\n    height: 80%;\n    background: var(--primary);\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    margin: auto;\n    text-align: center;\n    font-size: 1rem;\n    align-content: center;\n    justify-content: center;\n    z-index: 15;\n}\n\n/* Add styles to the form container */\n#addnewform {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    box-sizing: border-box;\n    padding: 5px;\n    background-color: white;\n}\n\n#addnewform.dark-mode {\n    background-color: var(--secondary);\n    color: black;\n}\n\n#addnewprojform {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    box-sizing: border-box;\n    padding: 25px;\n    background-color: white;\n}\n\n#addnewprojform.dark-mode {\n    background-color: var(--secondary);\n    color: black;\n}\n\n#addnewform > div:nth-child(4), #addnewform > div:nth-child(5) {\n    margin: 5px;\n}\n\n#addnewform > div:nth-child(3) {\n    margin: 3px;\n}\n\n#addnewform > div:nth-child(3) > input, #addnewform > div:nth-child(4) > select {\n    margin-top: 3px;\n}\n  \n#editForm {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    box-sizing: border-box;\n    padding: 5px;\n    background-color: white;\n}\n\n#editForm.dark-mode {\n    background-color: var(--secondary);\n    color: black;\n}\n\n#editForm > div:nth-child(4), #editForm > div:nth-child(5) {\n    margin: 4px;\n}\n\n#editForm > div:nth-child(3) {\n    margin: 2px;\n}\n\n#editForm > div:nth-child(3) > input, #editForm > div:nth-child(4) > select {\n    margin-top: 3px;\n}\n  \n  /* Full-width input fields */\n#addnewform input[type=text], #addnewform textarea, #editForm input[type=text], #editForm textarea {\n    font-family: 'Jost', sans-serif;\n    box-sizing: border-box;\n    width: 100%;\n    padding: 5px;\n    margin: 5px 0 8px 0;\n    border: none;\n    background: #f1f1f1;\n}\n\n#addnewprojform input[type=text], #editForm input[type=text] {\n    font-family: 'Jost', sans-serif;\n    box-sizing: border-box;\n    width: 100%;\n    padding: 5px;\n    margin: 12px 0 12px 0;\n    border: none;\n    background: #f1f1f1;\n}\n\n#addnewform input[type=text]::placeholder, #addnewprojform input[type=text]::placeholder, #addnewform textarea::placeholder, #editForm input[type=text], #editForm textarea::placeholder {\n    font-family: 'Jost', sans-serif;\n}\n  \n/* When the inputs get focus, do something */\n#addnewform input[type=text]:focus, #addnewprojform input[type=text]:focus, #addnewform textarea:focus, #editForm input[type=text]:focus, #editForm textarea:focus {\n    background-color: #ddd;\n    outline: none;\n}\n  \n/* Set a style for the submit/login button */\n#addnewform button, #editForm button {\n    background-color: var(--tertiary);\n    color: black;\n    padding: 12px 15px;\n    border: none;\n    cursor: pointer;\n    width: 70%;\n    margin-bottom: 12px;\n    opacity: 0.8;\n}\n\n#addnewprojform button {\n    background-color: var(--tertiary);\n    color: black;\n    padding: 12px 15px;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n    margin-bottom: 12px;\n    opacity: 0.8; \n}\n  \n/* Add a red background color to the cancel button */\n#addnewform button#cancel_button, #addnewprojform button#newproj_cancel, #editForm button#cancelEditButton {\n    background-color: var(--quaternary);\n}\n  \n/* Add some hover effects to buttons */\n#addnewform  button:hover, #addnew:hover, #addnewprojform button:hover, #newproj_button:hover {\n    opacity: 1;\n}\n\ninput#title.needsFilling, #description.needsFilling {\n    border: 1px solid rgb(219, 54, 54);\n}\n\nselect {\n    width: 100%;\n    padding: 16px 20px;\n    border: none;\n    border-radius: 4px;\n    background-color: #f1f1f1;\n}\n\ninput.dark-mode, textarea.dark-mode, select.dark-mode,\n#addnewform input[type=text].dark-mode, #addnewform textarea.dark-mode, #editForm input[type=text].dark-mode, #editForm textarea.dark-mode {\n    background-color: var(--quaternary);\n}\n\n/* Scrollbar */\n\n/* width */\n::-webkit-scrollbar {\n  width: 7px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: rgb(190, 190, 190);\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: rgb(103, 103, 103);\n}\n\n/* small tablet sizes */\n\n@media screen and (min-width: 620px) {\n\n    div#stopAllEmpty {\n        padding: 15px 25px;\n    }\n    div#stopAllEmpty > button {\n        height: 5.25vh;\n        font-size: 1.1rem;\n    }\n    .eachSidebarContainer {\n        font-size: 18px;\n        height: 48px;\n        opacity: 0.8;\n        padding: 5px 10px;\n        position: relative;\n        border: 2px solid var(--tertiary);\n        margin-bottom: 12px;\n        border-right-style: none;\n        background-color: var(--primary);\n        box-shadow: 1px 2px 2px rgb(0,0,0,0.6);\n    }\n    div.added_projects {\n        font-size: 1.5rem;\n    }\n    div.added_tasks {\n        font-size: 15px;\n    }\n    div.task_button_holder > button {\n        height: 25px;\n    }\n    div.sidebar_Name_edit {\n        font-size: clamp(0.5rem, 1.2rem, 1.4rem);\n    }\n    div.sidebar_Name_remove {\n        font-size: clamp(0.5rem, 1.2rem, 1.4rem);\n    }\n    div.sidebar_Names {\n        width: 92%;\n    }\n    \n}\n\n/* large tablet & laptop sizes */\n\n@media screen and (min-width: 960px) {\n    \n}\n\n/* desktop */\n\n@media screen and (min-width: 1200px) {\n    \n}\n\n/*My initial code below for desktop*/\n\n/* html, body {\n    height: 100%;\n}\n\n#header {\n    position: absolute;\n    height: 5vh;\n    width: 100%;\n    background-color: bisque;\n}\n\nbody {\n    display: flex;\n}\n\n#sidebarNamesOnly {\n    text-align: center;\n    padding-top: 5vh;\n    display: flex;\n    flex-direction: column;\n    gap: 3rem;\n    width: 25vw;\n}\n\n#content {\n    padding-top: 5vh;\n    width: 75vw;\n    border: 2px solid coral;\n}\n\n#allTasksBox {\n    display: none;\n    z-index: 5;\n}\n\ndiv.added_projects {\n    background-color: aqua;\n    font-size: 2rem;\n    padding-left: 2rem;\n}\n\n.eachSidebarContainer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.1rem;\n    height: 2rem;\n    gap: 1rem;\n    opacity: 0.8;\n    border-bottom-left-radius: 12px;\n    border-top-left-radius: 12px;\n    border: 2px solid coral;\n    border-right-style: none;\n    background-color: rgb(255, 225, 126);\n}\n\ndiv[id$=\"High\"], div[id$=\"High_AllPage\"] {\n    border: 2px solid rgb(255, 41, 41);\n}\n\ndiv[id$=\"Medium\"], div[id$=\"Medium_AllPage\"] {\n    border: 2px solid rgb(255, 238, 0);\n}\n\ndiv[id$=\"Low\"], div[id$=\"Low_AllPage\"] {\n    border: 2px solid rgb(43, 233, 0);\n}\n\nh3.added_proj_box {\n    background-color: rgb(255, 159, 242);\n    min-height: 30px;\n    transition: height 2s;\n}\n\ndiv.added_tasks {\n    text-align: center;\n    background-color: rgb(255, 189, 103);\n    display: grid;\n    gap: 0.5rem;\n    grid-template-columns: 70% 30%;\n    grid-template-rows: repeat(2, 5vh) minmax(25%, 1fr);\n}\n\ndiv.added_tasks > h4 {\n    display: none;\n}\n\ndiv.nowYouSeeMe {\n    display: flex;\n    justify-content: center;\n    text-align: left;\n    grid-column: 1 / 2;\n    grid-row: 1 / 3;\n}\n\ndiv.added_due {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n}\n\ndiv.task_button_holder {\n    display: flex;\n    justify-content: center;\n    gap: 1rem;\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n}\n\ndiv.task_button_holder > button {\n    height: 25px;\n}\n\ndiv.theExpandables {\n    grid-column: 1 / 3;\n    grid-row: 3 / 4;\n    max-height: 0vh;\n    opacity: 0;\n    background-color: rgb(255, 189, 103);\n\n    -webkit-transition: all 0.3s ease-out;\n    -moz-transition: all 0.3s ease-out;\n    -ms-transition: all 0.3s ease-out;\n    -o-transition: all 0.3s ease-out;\n    transition: all 0.3s ease-out;\n    \n}\n\ndiv.theExpandables.active {\n    opacity: 1;\n    max-height: 10vh;\n    background-color:rgb(255, 110, 204);\n} */\n\n/* Button used to open the forms - fixed at the bottom of the page */\n/* #addnew {\n  background-color: #555;\n  color: white;\n  padding: 16px 20px;\n  border: none;\n  cursor: pointer;\n  opacity: 0.8;\n  position: fixed;\n  bottom: 23px;\n  right: 28px;\n  width: 10vw;\n}\n\n#newproj_button {\n    background-color: #555;\n    color: white;\n    padding: 16px 20px;\n    border: none;\n    cursor: pointer;\n    opacity: 0.8;\n    position: fixed;\n    bottom: 23px;\n    left: 28px;\n    width: 10vw;\n} */\n\n/* The popup form - hidden by default */\n/* #todoFormContainer {\n  display: none;\n  position: fixed;\n  bottom: 0;\n  right: 15px;\n  border: 3px solid #f1f1f1;\n  width: 13vw;\n  z-index: 9;\n}\n\n#projFormContainer {\n    display: none;\n    position: fixed;\n    bottom: 0;\n    left: 15px;\n    border: 3px solid #f1f1f1;\n    width: 13vw;\n    z-index: 9;\n  }\n\n#editFormContainer {\n    display: none;\n    position: fixed;\n    bottom: 0;\n    right: auto;\n    border: 3px solid #f1f1f1;\n    width: 13vw;\n    z-index: 9;\n  }\n */\n/* Add styles to the form container */\n/* #addnewform, #addnewprojform {\n  max-width: 300px;\n  padding: 10px;\n  background-color: white;\n}\n\n#editForm {\n    max-width: 300px;\n    padding: 10px;\n    background-color: white;\n} */\n\n/* Full-width input fields */\n/* #addnewform input[type=text], #addnewprojform input[type=text] {\n  width: 100%;\n  padding: 15px;\n  margin: 5px 0 22px 0;\n  border: none;\n  background: #f1f1f1;\n}\n\n#editForm input[type=text] {\n    width: 100%;\n    padding: 15px;\n    margin: 5px 0 22px 0;\n    border: none;\n    background: #f1f1f1;\n} */\n\n/* When the inputs get focus, do something */\n/* #addnewform input[type=text]:focus, #addnewprojform input[type=text]:focus {\n  background-color: #ddd;\n  outline: none;\n} */\n\n/* Set a style for the submit/login button */\n/* #addnewform button, #addnewprojform button {\n  background-color: #04AA6D;\n  color: white;\n  padding: 16px 20px;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  margin-bottom:10px;\n  opacity: 0.8;\n} */\n\n/* Add a red background color to the cancel button */\n/* #addnewform button#cancel_button, #addnewprojform button#newproj_cancel {\n  background-color: red;\n} */\n\n/* Add some hover effects to buttons */\n/* #addnewform  button:hover, #addnew:hover, #addnewprojform button:hover, #newproj_button:hover {\n  opacity: 1;\n} */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/assign/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/assign/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ assign)
/* harmony export */ });
function assign(target, object) {
  if (target == null) {
    throw new TypeError('assign requires that input parameter not be null or undefined');
  }

  for (var property in object) {
    if (Object.prototype.hasOwnProperty.call(object, property)) {
      ;
      target[property] = object[property];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/cloneObject/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/cloneObject/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cloneObject)
/* harmony export */ });
/* harmony import */ var _assign_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assign/index.js */ "./node_modules/date-fns/esm/_lib/assign/index.js");

function cloneObject(object) {
  return (0,_assign_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, object);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultLocale/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/roundingMethods/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/roundingMethods/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRoundingMethod": () => (/* binding */ getRoundingMethod)
/* harmony export */ });
var roundingMap = {
  ceil: Math.ceil,
  round: Math.round,
  floor: Math.floor,
  trunc: function trunc(value) {
    return value < 0 ? Math.ceil(value) : Math.floor(value);
  } // Math.trunc is not supported by IE

};
var defaultRoundingMethod = 'trunc';
function getRoundingMethod(method) {
  return method ? roundingMap[method] : roundingMap[defaultRoundingMethod];
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */

function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarMonths/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarMonths/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInCalendarMonths)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */

function differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
  var monthDiff = dateLeft.getMonth() - dateRight.getMonth();
  return yearDiff * 12 + monthDiff;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInMilliseconds/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMilliseconds/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInMilliseconds)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name differenceInMilliseconds
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of milliseconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * const result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */

function differenceInMilliseconds(dateLeft, dateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateLeft).getTime() - (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateRight).getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInMonths/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMonths/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInMonths)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../differenceInCalendarMonths/index.js */ "./node_modules/date-fns/esm/differenceInCalendarMonths/index.js");
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../compareAsc/index.js */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _isLastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isLastDayOfMonth/index.js */ "./node_modules/date-fns/esm/isLastDayOfMonth/index.js");





/**
 * @name differenceInMonths
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *
 * @description
 * Get the number of full months between the given dates using trunc as a default rounding method.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))
 * //=> 7
 */

function differenceInMonths(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var sign = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight);
  var difference = Math.abs((0,_differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dateLeft, dateRight));
  var result; // Check for the difference of less than month

  if (difference < 1) {
    result = 0;
  } else {
    if (dateLeft.getMonth() === 1 && dateLeft.getDate() > 27) {
      // This will check if the date is end of Feb and assign a higher end of month date
      // to compare it with Jan
      dateLeft.setDate(30);
    }

    dateLeft.setMonth(dateLeft.getMonth() - sign * difference); // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
    // If so, result must be decreased by 1 in absolute value

    var isLastMonthNotFull = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight) === -sign; // Check for cases of one full calendar month

    if ((0,_isLastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft)) && difference === 1 && (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDateLeft, dateRight) === 1) {
      isLastMonthNotFull = false;
    }

    result = sign * (difference - Number(isLastMonthNotFull));
  } // Prevent negative zero


  return result === 0 ? 0 : result;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInSeconds/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInSeconds/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInSeconds)
/* harmony export */ });
/* harmony import */ var _differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../differenceInMilliseconds/index.js */ "./node_modules/date-fns/esm/differenceInMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/roundingMethods/index.js */ "./node_modules/date-fns/esm/_lib/roundingMethods/index.js");



/**
 * @name differenceInSeconds
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @param {Object} [options] - an object with options.
 * @param {String} [options.roundingMethod='trunc'] - a rounding method (`ceil`, `floor`, `round` or `trunc`)
 * @returns {Number} the number of seconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * const result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */

function differenceInSeconds(dateLeft, dateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var diff = (0,_differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateLeft, dateRight) / 1000;
  return (0,_lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_2__.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfDay/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfDay/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name endOfDay
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */

function endOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfMonth/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfMonth/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */

function endOfMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var month = date.getMonth();
  date.setFullYear(date.getFullYear(), month + 1, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/formatDistance/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/formatDistance/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDistance)
/* harmony export */ });
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../compareAsc/index.js */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var _differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../differenceInMonths/index.js */ "./node_modules/date-fns/esm/differenceInMonths/index.js");
/* harmony import */ var _differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../differenceInSeconds/index.js */ "./node_modules/date-fns/esm/differenceInSeconds/index.js");
/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/cloneObject/index.js */ "./node_modules/date-fns/esm/_lib/cloneObject/index.js");
/* harmony import */ var _lib_assign_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_lib/assign/index.js */ "./node_modules/date-fns/esm/_lib/assign/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");










var MINUTES_IN_DAY = 1440;
var MINUTES_IN_ALMOST_TWO_DAYS = 2520;
var MINUTES_IN_MONTH = 43200;
var MINUTES_IN_TWO_MONTHS = 86400;
/**
 * @name formatDistance
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words.
 *
 * | Distance between dates                                            | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance between dates | Result               |
 * |------------------------|----------------------|
 * | 0 secs ... 5 secs      | less than 5 seconds  |
 * | 5 secs ... 10 secs     | less than 10 seconds |
 * | 10 secs ... 20 secs    | less than 20 seconds |
 * | 20 secs ... 40 secs    | half a minute        |
 * | 40 secs ... 60 secs    | less than a minute   |
 * | 60 secs ... 90 secs    | 1 minute             |
 *
 * @param {Date|Number} date - the date
 * @param {Date|Number} baseDate - the date to compare with
 * @param {Object} [options] - an object with options.
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `baseDate` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * const result = formatDistance(new Date(2014, 6, 2), new Date(2015, 0, 1))
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00, including seconds?
 * const result = formatDistance(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0),
 *   { includeSeconds: true }
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * const result = formatDistance(new Date(2015, 0, 1), new Date(2016, 0, 1), {
 *   addSuffix: true
 * })
 * //=> 'about 1 year ago'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = formatDistance(new Date(2016, 7, 1), new Date(2015, 0, 1), {
 *   locale: eoLocale
 * })
 * //=> 'pli ol 1 jaro'
 */

function formatDistance(dirtyDate, dirtyBaseDate, options) {
  var _ref, _options$locale;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];

  if (!locale.formatDistance) {
    throw new RangeError('locale must contain formatDistance property');
  }

  var comparison = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate, dirtyBaseDate);

  if (isNaN(comparison)) {
    throw new RangeError('Invalid time value');
  }

  var localizeOptions = (0,_lib_assign_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(options), {
    addSuffix: Boolean(options === null || options === void 0 ? void 0 : options.addSuffix),
    comparison: comparison
  });
  var dateLeft;
  var dateRight;

  if (comparison > 0) {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyBaseDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyDate);
  } else {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyBaseDate);
  }

  var seconds = (0,_differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(dateRight, dateLeft);
  var offsetInSeconds = ((0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_8__["default"])(dateRight) - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_8__["default"])(dateLeft)) / 1000;
  var minutes = Math.round((seconds - offsetInSeconds) / 60);
  var months; // 0 up to 2 mins

  if (minutes < 2) {
    if (options !== null && options !== void 0 && options.includeSeconds) {
      if (seconds < 5) {
        return locale.formatDistance('lessThanXSeconds', 5, localizeOptions);
      } else if (seconds < 10) {
        return locale.formatDistance('lessThanXSeconds', 10, localizeOptions);
      } else if (seconds < 20) {
        return locale.formatDistance('lessThanXSeconds', 20, localizeOptions);
      } else if (seconds < 40) {
        return locale.formatDistance('halfAMinute', 0, localizeOptions);
      } else if (seconds < 60) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', 1, localizeOptions);
      }
    } else {
      if (minutes === 0) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', minutes, localizeOptions);
      }
    } // 2 mins up to 0.75 hrs

  } else if (minutes < 45) {
    return locale.formatDistance('xMinutes', minutes, localizeOptions); // 0.75 hrs up to 1.5 hrs
  } else if (minutes < 90) {
    return locale.formatDistance('aboutXHours', 1, localizeOptions); // 1.5 hrs up to 24 hrs
  } else if (minutes < MINUTES_IN_DAY) {
    var hours = Math.round(minutes / 60);
    return locale.formatDistance('aboutXHours', hours, localizeOptions); // 1 day up to 1.75 days
  } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {
    return locale.formatDistance('xDays', 1, localizeOptions); // 1.75 days up to 30 days
  } else if (minutes < MINUTES_IN_MONTH) {
    var days = Math.round(minutes / MINUTES_IN_DAY);
    return locale.formatDistance('xDays', days, localizeOptions); // 1 month up to 2 months
  } else if (minutes < MINUTES_IN_TWO_MONTHS) {
    months = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('aboutXMonths', months, localizeOptions);
  }

  months = (0,_differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_9__["default"])(dateRight, dateLeft); // 2 months up to 12 months

  if (months < 12) {
    var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('xMonths', nearestMonth, localizeOptions); // 1 year up to max Date
  } else {
    var monthsSinceStartOfYear = months % 12;
    var years = Math.floor(months / 12); // N years up to 1 years 3 months

    if (monthsSinceStartOfYear < 3) {
      return locale.formatDistance('aboutXYears', years, localizeOptions); // N years 3 months up to N years 9 months
    } else if (monthsSinceStartOfYear < 9) {
      return locale.formatDistance('overXYears', years, localizeOptions); // N years 9 months up to N year 12 months
    } else {
      return locale.formatDistance('almostXYears', years + 1, localizeOptions);
    }
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/formatDistanceToNow/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/formatDistanceToNow/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDistanceToNow)
/* harmony export */ });
/* harmony import */ var _formatDistance_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../formatDistance/index.js */ "./node_modules/date-fns/esm/formatDistance/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name formatDistanceToNow
 * @category Common Helpers
 * @summary Return the distance between the given date and now in words.
 * @pure false
 *
 * @description
 * Return the distance between the given date and now in words.
 *
 * | Distance to now                                                   | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance to now     | Result               |
 * |---------------------|----------------------|
 * | 0 secs ... 5 secs   | less than 5 seconds  |
 * | 5 secs ... 10 secs  | less than 10 seconds |
 * | 10 secs ... 20 secs | less than 20 seconds |
 * | 20 secs ... 40 secs | half a minute        |
 * | 40 secs ... 60 secs | less than a minute   |
 * | 60 secs ... 90 secs | 1 minute             |
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the given date
 * @param {Object} [options] - the object with options
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result specifies if now is earlier or later than the passed date
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // If today is 1 January 2015, what is the distance to 2 July 2014?
 * const result = formatDistanceToNow(
 *   new Date(2014, 6, 2)
 * )
 * //=> '6 months'
 *
 * @example
 * // If now is 1 January 2015 00:00:00,
 * // what is the distance to 1 January 2015 00:00:15, including seconds?
 * const result = formatDistanceToNow(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   {includeSeconds: true}
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 January 2016, with a suffix?
 * const result = formatDistanceToNow(
 *   new Date(2016, 0, 1),
 *   {addSuffix: true}
 * )
 * //=> 'in about 1 year'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 August 2016 in Esperanto?
 * const eoLocale = require('date-fns/locale/eo')
 * const result = formatDistanceToNow(
 *   new Date(2016, 7, 1),
 *   {locale: eoLocale}
 * )
 * //=> 'pli ol 1 jaro'
 */
function formatDistanceToNow(dirtyDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now(), options);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isLastDayOfMonth/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/isLastDayOfMonth/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isLastDayOfMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _endOfDay_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../endOfDay/index.js */ "./node_modules/date-fns/esm/endOfDay/index.js");
/* harmony import */ var _endOfMonth_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../endOfMonth/index.js */ "./node_modules/date-fns/esm/endOfMonth/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




/**
 * @name isLastDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the last day of a month?
 *
 * @description
 * Is the given date the last day of a month?
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is the last day of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 28 February 2014 the last day of a month?
 * const result = isLastDayOfMonth(new Date(2014, 1, 28))
 * //=> true
 */

function isLastDayOfMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  return (0,_endOfDay_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() === (0,_endOfMonth_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOMtodo.js":
/*!************************!*\
  !*** ./src/DOMtodo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProjToSide": () => (/* binding */ addProjToSide),
/* harmony export */   "allEmpty": () => (/* binding */ allEmpty),
/* harmony export */   "refreshCenterDOM": () => (/* binding */ refreshCenterDOM),
/* harmony export */   "seeAll": () => (/* binding */ seeAll),
/* harmony export */   "setNewSideNames": () => (/* binding */ setNewSideNames),
/* harmony export */   "sidebarToggle": () => (/* binding */ sidebarToggle),
/* harmony export */   "toggleDark": () => (/* binding */ toggleDark),
/* harmony export */   "toggleExpand": () => (/* binding */ toggleExpand),
/* harmony export */   "toggleSeeAllBtn": () => (/* binding */ toggleSeeAllBtn)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/formatDistanceToNow/index.js");


function addProjToSide(x) {
    const sidebar = document.getElementById("sidebar");
    const sidebarNames = document.getElementById("sidebarNamesOnly");
    const sidebarHolder = document.createElement("div");
    const toAddName = document.createElement("div");
    const editProjName = document.createElement("div");
    const nameRemoveProj = document.createElement("div");
    const toAddProj = document.createElement("div");
    const newProjBox = document.createElement("h3");
    
    
    if (document.getElementById("darkCount").innerHTML % 2 === 0) {
        sidebarHolder.className = "eachSidebarContainer dark-mode"
    } else {
        sidebarHolder.className = "eachSidebarContainer";
    }   
    

    toAddName.className = "sidebar_Names";
    toAddName.id = x.projName + "sideName";
    toAddName.innerHTML = x.projName;

    nameRemoveProj.className = "sidebar_Name_remove";
    nameRemoveProj.id = x.projName + "removeself";
    nameRemoveProj.innerHTML = "<i class='fa-regular fa-trash-can'></i>";

    editProjName.className = "sidebar_Name_edit";
    editProjName.id = x.projName + "editself";
    editProjName.innerHTML = "<i class='fa-regular fa-pen-to-square'></i>";

    toAddProj.className = "added_projects";
    toAddProj.id = x.projName;
    toAddProj.innerHTML = x.projName;

    newProjBox.className = "added_proj_box";
    newProjBox.id = x.projName + "box";

    sidebarNames.appendChild(sidebarHolder);
    sidebarHolder.appendChild(toAddName);
    sidebarHolder.appendChild(editProjName);
    sidebarHolder.appendChild(nameRemoveProj);
    sidebar.appendChild(toAddProj);
    sidebar.appendChild(newProjBox);
}

function setNewSideNames(oldName, newProjName) {
    //change ID of sidebar name on DOM element & all the respective buttons
    //change display so that you can SEE new project name
    console.log(oldName);
    var toChangeIdArray = document.querySelectorAll(`[id*=${CSS.escape(oldName)}]`);
    console.log(toChangeIdArray);
    toChangeIdArray.forEach(el => {
        if (el.className === "sidebar_Names") {
            el.innerHTML = `${newProjName}`;
        } else if (el.className === "added_projects") {
            el.innerHTML = `${newProjName}`;
        }
        var strHolder = el.id;
        console.log(strHolder);
        el.id = strHolder.replace(`${oldName}`, `${newProjName}`);
        
    });
}

function seeAll(all) {

    const projContents = document.getElementById("sidebar");
    const allItemsBox = document.getElementById("allTasksBox");

    allItemsBox.style.display = "block";
    projContents.style.display = "none";
    
    //remember that date goes by yyyy/mm/dd & Jan is 0!
    function dueIn(g) {
        //change yyyy-mm-dd to yyyymmdd
        var whenItsDue = g.dueDate.replace(/-|\s/g, "");
        var yyyy = whenItsDue.slice(0, 4);
        var mm = Number(whenItsDue.slice(4, 6)) - 1;
        var dd = Number(whenItsDue.slice(6));
        let result = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(
            new Date(yyyy, mm, dd),
            {addSuffix: true}
        );
        console.log("before the alteration " + result);
        if (result.slice(-3) === "ago") {
            result = "Today";
        }
        console.log("after the alteration " + result);
        return result;
    };

    while (allItemsBox.lastElementChild) {
        allItemsBox.removeChild(allItemsBox.lastElementChild);
        console.log("removing the tasks from allItemsBox")
    };
    all.forEach((el) => {
        var dueInResult = dueIn(el);
        const toAddTask = document.createElement("div");
        const buttonHolder = document.createElement("div");
        const removeSelfBtn = document.createElement("button");
        const expandSelfBtn = document.createElement("button");
        const editSelfBtn = document.createElement("button");
        const dueDiv = document.createElement("div");
        const readilySeenContent = document.createElement("div");
        const expandableContent = document.createElement("div");
        const expandBtnCounter = document.createElement("h4");


        if (document.getElementById("darkCount").innerHTML % 2 === 0) {
            toAddTask.className = "added_tasks dark-mode";
        } else {
            toAddTask.className = "added_tasks";
        };
        toAddTask.id = `${el.ID}_${el.priority}_AllPage`;

        readilySeenContent.className = "nowYouSeeMe";
        readilySeenContent.innerHTML = `${el.title}<br><br>Due Date: ${el.dueDate}`;

        expandableContent.className = "theExpandables";
        expandableContent.id = `${el.ID}_expandMe_AllPage`;
        expandableContent.innerHTML = `Description: ${el.description}<br><br>Notes: ${el.notes}`;

        buttonHolder.className = "task_button_holder";

        removeSelfBtn.type = "button";
        removeSelfBtn.className = "removeself_button";
        removeSelfBtn.id = `btn_AllPage_${el.ID}`;
        removeSelfBtn.innerHTML = "<i class='fa-solid fa-trash-can'></i>";

        expandSelfBtn.type = "button";
        expandSelfBtn.className = "expandself_button";
        expandSelfBtn.id = `expandBtn_AllPage_${el.ID}`;
        expandSelfBtn.innerHTML = "<i class='fa-solid fa-angles-down'></i>";

        expandBtnCounter.innerHTML = 1;

        editSelfBtn.type = "button";
        editSelfBtn.className = "editTask_button";
        editSelfBtn.id = `editBtn_AllPage_${el.ID}`;
        editSelfBtn.innerHTML = "<i class='fa-regular fa-pen-to-square'></i>";

        dueDiv.className = "added_due";
        if (el.dueDate !== "") {
            dueDiv.innerHTML = `Due: ${dueInResult}`;
        }

        allItemsBox.appendChild(toAddTask);
        toAddTask.appendChild(readilySeenContent);
        toAddTask.appendChild(dueDiv);
        toAddTask.appendChild(buttonHolder);
        toAddTask.appendChild(expandableContent);
        toAddTask.appendChild(expandBtnCounter);
        buttonHolder.appendChild(expandSelfBtn);
        buttonHolder.appendChild(editSelfBtn);
        buttonHolder.appendChild(removeSelfBtn);

        var div_list = document.querySelectorAll('.added_projects');
        var h3_list = document.querySelectorAll('.added_proj_box');
        var div_array = [...div_list];
        var h3_array = [...h3_list];
        div_array.forEach(div => {
            div.style.display = "none";
        });
        h3_array.forEach(h3 => {
            h3.style.display = "none";
        });   

        allItemsBox.style.display = "block";
    });
}

function refreshCenterDOM(AP, y, z) {

    const sidebar = document.getElementById("sidebar");
    const allItemsBox = document.getElementById("allTasksBox");
    var sidebarChild = sidebar.getElementsByTagName("h3");

    sidebar.style.display = "block";
    allItemsBox.style.display = "none";
    
    //remember that date goes by yyyy/mm/dd & Jan is 0!
    function dueIn(g) {
        //change yyyy-mm-dd to yyyymmdd
        var whenItsDue = g.dueDate.replace(/-|\s/g, "");
        var yyyy = whenItsDue.slice(0, 4);
        var mm = Number(whenItsDue.slice(4, 6)) - 1;
        var dd = Number(whenItsDue.slice(6));
        let result = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(
            new Date(yyyy, mm, dd),
            {addSuffix: true}
        );
        //console.log("before the alteration " + result);
        if (result.slice(-3) === "ago") {
            result = "Today";
        }
        //console.log("after the alteration " + result);
        return result;
    };

    /* console.log(sidebarChild);
    console.log(z);
    console.log(sidebarChild[z]); */

    while (sidebarChild[z].lastElementChild) {
        sidebarChild[z].removeChild(sidebarChild[z].lastElementChild);
        console.log("removing the tasks from specific proj")
    };
    AP[y]["taskList"].forEach((el) => {
        var dueInResult = dueIn(el);
        const toAddTask = document.createElement("div");
        const buttonHolder = document.createElement("div");
        const removeSelfBtn = document.createElement("button");
        const expandSelfBtn = document.createElement("button");
        const editSelfBtn = document.createElement("button");
        const dueDiv = document.createElement("div");
        const readilySeenContent = document.createElement("div");
        const expandableContent = document.createElement("div");
        const expandBtnCounter = document.createElement("h4");

        if (document.getElementById("darkCount").innerHTML % 2 === 0) {
            toAddTask.className = "added_tasks dark-mode";
        } else {
            toAddTask.className = "added_tasks";
        }
        toAddTask.id = `${el.ID}_${el.priority}`;

        readilySeenContent.className = "nowYouSeeMe";
        readilySeenContent.innerHTML = `${el.title}<br>Due Date: ${el.dueDate}`;

        expandableContent.className = "theExpandables";
        expandableContent.id = `${el.ID}_expandMe`;
        expandableContent.innerHTML = `Description: ${el.description}<br><br>Notes: ${el.notes}`;

        buttonHolder.className = "task_button_holder";

        removeSelfBtn.type = "button";
        removeSelfBtn.className = "removeself_button";
        removeSelfBtn.id = `btn_${el.ID}`;
        removeSelfBtn.innerHTML = "<i class='fa-solid fa-trash-can'></i>";

        expandSelfBtn.type = "button";
        expandSelfBtn.className = "expandself_button";
        expandSelfBtn.id = `expandBtn_${el.ID}`;
        expandSelfBtn.innerHTML = "<i class='fa-solid fa-angles-down'></i>";

        expandBtnCounter.innerHTML = 1;

        editSelfBtn.type = "button";
        editSelfBtn.className = "editTask_button";
        editSelfBtn.id = `editBtn_${el.ID}`;
        editSelfBtn.innerHTML = "<i class='fa-regular fa-pen-to-square'></i>";

        dueDiv.className = "added_due";
        if (el.dueDate !== "") {
            dueDiv.innerHTML = `Due: ${dueInResult}`;
        }

        sidebarChild[z].appendChild(toAddTask);
        toAddTask.appendChild(readilySeenContent);
        toAddTask.appendChild(dueDiv);
        toAddTask.appendChild(buttonHolder);
        toAddTask.appendChild(expandableContent);
        toAddTask.appendChild(expandBtnCounter);
        buttonHolder.appendChild(expandSelfBtn);
        buttonHolder.appendChild(editSelfBtn);
        buttonHolder.appendChild(removeSelfBtn);
    });
}

function toggleExpand(q, r) {
    const expanderBtnTog = document.getElementById(`expandBtn_${q}`);
    console.log(expanderBtnTog);
    if (r%2 === 0) {
        expanderBtnTog.innerHTML = "<i class='fa-solid fa-angles-down'></i>";
    } else if (r%2 !== 0) {
        expanderBtnTog.innerHTML = "<i class='fa-solid fa-angles-up'></i>"
    }
}

function toggleSeeAllBtn() {
    const buttonOfInterest = document.getElementById("seeAllToggle");
    const allItemsDisplay = document.getElementById("allTasksBox");

    if (buttonOfInterest.innerHTML == "See All To-Do's") {
        console.log("supposed to show stuff now");
        buttonOfInterest.innerHTML = "Hide All To-Do's";
    } else if (buttonOfInterest.innerHTML == "Hide All To-Do's") {
        console.log("supposed to HIDE now");
        allItemsDisplay.style.display = "none";
        buttonOfInterest.innerHTML = "See All To-Do's";
    }
}

function sidebarToggle(x) {
    document.getElementById("allTasksBox").style.display = "none";
    document.getElementById("seeAllToggle").innerHTML = "See All To-Do's";
    var div_list = document.querySelectorAll('.added_projects');
    var h3_list = document.querySelectorAll('.added_proj_box');
    var div_array = [...div_list];
    var h3_array = [...h3_list];
    div_array.forEach(div => {
        if (div.id === x) {
            div.style.display = "block";
            if (document.getElementById("darkCount").innerHTML % 2 === 0) {
                div.classList.add("dark-mode");
            };
        } else {
        div.style.display = "none";
        }
    });
    h3_array.forEach(h3 => {
        if (h3.id.slice(0, -3) === x) {
            h3.style.display = "block";
            if (document.getElementById("darkCount").innerHTML % 2 === 0) {
                h3.classList.add("dark-mode");
            };
        } else {
        h3.style.display = "none";
        }
    });      
}

function allEmpty() {
    const mainContent = document.getElementById("sidebar");
    const sidebarContent = document.getElementById("sidebarNamesOnly");

    while (mainContent.children.length !== 2) {
        mainContent.removeChild(mainContent.lastElementChild);
    };
    while (sidebarContent.children.length !== 2) {
        sidebarContent.removeChild(sidebarContent.lastElementChild);
    };
}

function toggleDark() {
    var a = document.getElementById("content");
    var b = document.getElementById("sidebarNamesOnly");
    var cAll = document.getElementsByClassName("added_projects");
    var d = document.getElementById("seeAllToggle");
    var eAll = document.getElementsByClassName("eachSidebarContainer");
    var fAll = document.getElementsByClassName("added_proj_box");
    var gAll = document.getElementsByClassName("added_tasks");
    var h = document.getElementById("header");
    var i =  document.getElementById("addnewform");
    var j =  document.getElementById("addnewprojform");
    var k =  document.getElementById("editForm");
    var lAll = document.getElementsByTagName("textarea");
    var mAll = document.getElementsByTagName("input");
    var nAll = document.getElementsByTagName("select");
    
    a.classList.toggle("dark-mode");
    b.classList.toggle("dark-mode");
    d.classList.toggle("dark-mode");
    h.classList.toggle("dark-mode");
    i.classList.toggle("dark-mode");
    j.classList.toggle("dark-mode");
    k.classList.toggle("dark-mode");

    var cAllArray = [...cAll];
    var eAllArray = [...eAll];
    var fAllArray = [...fAll];
    var gAllArray = [...gAll];
    var lAllArray = [...lAll];
    var mAllArray = [...mAll];
    var nAllArray = [...nAll];
    cAllArray.forEach(div => {
        div.classList.toggle("dark-mode");
    });
    eAllArray.forEach(div => {
        div.classList.toggle("dark-mode");
    });
    fAllArray.forEach(h3 => {
        h3.classList.toggle("dark-mode");
    });
    gAllArray.forEach(div => {
        div.classList.toggle("dark-mode");
    });
    lAllArray.forEach(textarea => {
        textarea.classList.toggle("dark-mode");
    });
    mAllArray.forEach(input => {
        input.classList.toggle("dark-mode");
    });
    nAllArray.forEach(select => {
        select.classList.toggle("dark-mode");
    });
    var darkCounter = document.getElementById("darkCount").innerHTML;
    darkCounter++;
    document.getElementById("darkCount").innerHTML = darkCounter;
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _logictodo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logictodo.js */ "./src/logictodo.js");


(0,_logictodo_js__WEBPACK_IMPORTED_MODULE_1__["default"])();


/***/ }),

/***/ "./src/logictodo.js":
/*!**************************!*\
  !*** ./src/logictodo.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ logictodo)
/* harmony export */ });
/* harmony import */ var _DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMtodo.js */ "./src/DOMtodo.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
















function logictodo() {

    let idcounter = 0;
    let allItems = [];
    let currentProjIndex = null;
    let currentProjName = null;
    let lastProjIndex = null;
    let lastProjName = null;

    class Item {
        constructor(title, description, dueDate, priority, notes, project) {
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
            this.notes = notes;
            this.ID = "proj" + currentProjIndex + "." + idcounter++;
            this.project = project; 

            this.giveTitle = () => {
                return `${title}`;
            }
            this.titleSetNew = function(newTitle) {
                this.title = newTitle;
            }
            this.giveDeets = () => {
                return `${description}`;
            }
            this.descriptionSetNew = function(newDeets) {
                this.description = newDeets;
            }
            this.giveDueDate = () => {
                return `${dueDate}`;
            }
            this.dueDateSetNew = function(newDueDate) {
                this.dueDate = newDueDate;
            }
            this.givePriority = () => {
                return `${priority}`;
            }
            this.prioritySetNew = function(newPri) {
                this.priority = newPri;
            }
            this.giveNotez = () => {
                return `${notes}`;
            }
            this.notesSetNew = function(newNotes) {
                this.notes = newNotes;
            }
            this.giveID = () => {
                return `${ID}`;
            }
            this.getProjName = () => {
                return `${project}`;
            }
        }
    }
    
    function addItemToAll(x) {
        allItems.push(x);
    }

    function addItemToCurrent(x) {
        allProjects[currentProjIndex]["taskList"].push(x);
        /* [i++] */
    }

    function removeItemFromCurrent(x, y) {

        console.log(`Current proj index is ${x}, final ID is ${y}`);

        var taskFromBtnIndex = allProjects[`${x}`]["taskList"].findIndex((obj) => obj.ID == y);
        console.log(taskFromBtnIndex);

        allProjects[`${x}`]["taskList"].splice(taskFromBtnIndex, 1);
    }

    function removeItemFromAll(h) {
        var hIndex = allItems.findIndex((obj) => obj.ID === h);
        console.log("(used for allItems array) hIndex is " + hIndex);
        allItems.splice(hIndex, 1);
    }

    //gets proj index & name when trying to delete task from allItems page
    function getProjInfoForAllProj(j) {
        var jIndex = allItems.findIndex((obj) => obj.ID === j);
        currentProjName = allItems[jIndex].getProjName();
        currentProjIndex = allProjects.findIndex((obj) => obj.projName === `${currentProjName}`);
    }

    const openForm = document.getElementById("addnew");
    openForm.addEventListener('click', (e) => {
        document.getElementById("todoFormContainer").style.display = "block";
        document.getElementById("backgroundCoverStuff").style.display = "block";
    })

    const closeForm = document.getElementById("cancel_button");
    closeForm.addEventListener('click', (e) => {
        document.getElementById("todoFormContainer").style.display = "none";
        document.getElementById("backgroundCoverStuff").style.display = "none";
    })

    const openProj = document.getElementById("newproj_button");
    openProj.addEventListener('click', (e) => {
        console.log("click worked");
        document.getElementById("projFormContainer").style.display = "block";
        document.getElementById("backgroundCoverStuff").style.display = "block";
    })

    const closeProj = document.getElementById("newproj_cancel");
    closeProj.addEventListener('click', (e) => {
        document.getElementById("projFormContainer").style.display = "none";
        document.getElementById("backgroundCoverStuff").style.display = "none";
    })

    const addNewBtn = document.getElementById("submit_button");
    addNewBtn.addEventListener('click', (e) => {
        var newTaskForm = document.getElementById("addnewform");
        var formTitle = document.getElementById("title");
        var formDescrip = document.getElementById("description");

        var targetDate = document.getElementById("dueDate").value;
        
        var now = new Date();
        var month = now.getUTCMonth() + 1; //months from 1-12
        var paddedMonth = month.toString().padStart(2, '0');
        var day = now.getUTCDate();
        var paddedDay = day.toString().padStart(2, '0');
        var year = now.getUTCFullYear();
        now =  year + "-" + paddedMonth + "-" + paddedDay;

        if (newTaskForm.checkValidity() === false) {
            console.log(formTitle.checkValidity());
            console.log(formDescrip.checkValidity());
            formTitle.classList.add("needsFilling");
            formDescrip.classList.add("needsFilling");
            if (formTitle.checkValidity()) {
                formTitle.classList.remove("needsFilling");
            } else if (formDescrip.checkValidity()) {
                formDescrip.classList.remove("needsFilling");
            }
            e.preventDefault();
            e.stopPropagation();
        } else if (targetDate !== "" && targetDate < now) {
            // if a date is selected, want to make sure date is NOT in the past
                console.log("targetDate " + targetDate);
                console.log("now " + now); 
                alert("Please select a date that has not already passed.");
                e.preventDefault();
                e.stopPropagation();
        } else if (currentProjName === "_hIdDeN") {

            var a = addnewform.title.value;
            var b = addnewform.description.value;
            var c = addnewform.dueDate.value;
            var d = addnewform.priority.value;
            var e = addnewform.notes.value;
            var f = currentProjName;
            var x = new Item(a, b, c, d, e, f);
    
            addItemToAll(x);
            addItemToCurrent(x);
            (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.seeAll)(allItems);
            console.log("below is allProj");
            console.table(allProjects);
            console.log("below is allItems");
            console.table(allItems);

            document.getElementById("todoFormContainer").style.display = "none";
            document.getElementById("backgroundCoverStuff").style.display = "none";
            formTitle.classList.remove("needsFilling");
            formDescrip.classList.remove("needsFilling");

            (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.storeAllItems)(allItems);

            (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.storeProject)(allProjects[0]);
            //allItems tasks are stored with beginning of "aLlItEmS_"
            //allItems does NOT have a taskList
            //not the same as hidden, which is used for when adding tasks on allItems page
        } else {

            console.log("targetDate " + targetDate);
            console.log("now " + now);

            var a = addnewform.title.value;
            var b = addnewform.description.value;
            var c = addnewform.dueDate.value;
            var d = addnewform.priority.value;
            var e = addnewform.notes.value;
            var f = currentProjName;
            var x = new Item(a, b, c, d, e, f);
    
            var AP = allProjects;
            var y = currentProjIndex;
            var z = `${currentProjName}box`;
            addItemToAll(x);
            addItemToCurrent(x);
            (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.refreshCenterDOM)(AP, y, z);
            //console.table(allProjects);
            console.table(allItems);
            console.table(allProjects);
            document.getElementById("todoFormContainer").style.display = "none";
            document.getElementById("backgroundCoverStuff").style.display = "none";
            formTitle.classList.remove("needsFilling");
            formDescrip.classList.remove("needsFilling");

            console.log(AP[y]);
            (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.storeAllItems)(allItems);
            //allItems tasks are stored with beginning of "aLlItEmS_"
            //allItems does NOT have a taskList
            //not the same as hidden, which is used for when adding tasks on allItems page
            (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.storeProject)(AP[y]); //"refreshes" proj in localStorage to include new added task
            (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.storeProject)(allProjects[0]);
        }
    }) 

    //project tab code

    let projid = 0;
    let allProjects = [];

    class Project {
        constructor(projName) {
            this.projName = projName;
            this.ID = projid++;
            this.taskList = [];

            const displayProj = () => {
                return `${projName}`;
            };
            this.giveProjName = () => {
                return displayProj();
            };
            this.setNewProjName = function(newName) {
                this.projName = newName;
            }
        }
    }

    function addProjToAll(x) {
        allProjects.push(x);
    }

    function findAllIdsRemove(b) {
        const removedIDs = [];
        allProjects[b]["taskList"].forEach((el) => {
            removedIDs.push(el.ID);
        });
        console.log("these are the removed IDs ", removedIDs);//it's an object
        return removedIDs;
    }

    //for each item within the to be removed ID's array, run it against allItems.ID for match
    //if it matches, find that item's current index & remove with splice(x, 1);
    function idToIndexRemove(f) {
        while (f.length !== 0) {
            for (var j = 0, m = allItems.length; j < m; j++) {
                if (f[0] === allItems[j].ID) {
                    console.log("this iteration allItems length was " + m);
                    console.log("allItems task was removed with ID of " + allItems[j].ID);
                    allItems.splice(j, 1);
                    f.splice(0, 1);
                    break;
                }
            }
        }
    }

    const sidebarProjSwitch = document.querySelector('#sidebarNamesOnly');
    sidebarProjSwitch.addEventListener('click', (e) => {
        if (e.target.className === "sidebar_Names") {
            currentProjName = e.target.id.slice(0, -8);
            currentProjIndex = allProjects.findIndex((obj) => obj.projName == currentProjName);
            console.log("currentproj name is " + currentProjName + " and current proj index is " + currentProjIndex);
            if (document.getElementById("seeAllToggle").innerHTML === "Hide All To-Do's") {
                var AP = allProjects;
                var y = currentProjIndex;
                var z = `${currentProjName}box`;

                (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.refreshCenterDOM)(AP, y, z);
            };
            (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.sidebarToggle)(currentProjName);
        } //clicking on sidebar_name trashcan
        else if (e.target.className === "sidebar_Name_remove" || e.target.className === "fa-regular fa-trash-can") {
            if (window.confirm("This will completely erase this list!\nAre you sure?") == true) {
                var toRemoveProjName = e.target.closest("div div").id.slice(0, -10);
                var toRemoveProjIndex = allProjects.findIndex((obj) => obj.projName == toRemoveProjName);
                console.log("to be removed proj index is ", toRemoveProjIndex);
                let allRemovedIds = findAllIdsRemove(toRemoveProjIndex);
                console.log("all these should be removed (allRemovedIds): " + allRemovedIds);
                
                //localStorage removal
                //allRemovedIds is an array; iterate through that to remove from allItems
                console.log("length of object: " + allRemovedIds.length);
                console.log("type: " + typeof allRemovedIds);
                (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.removeFromAllItems)(allRemovedIds);
                (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.removeProject)(toRemoveProjName);

                //removes stuff from allItems
                console.log("checking this list after using it for localStorage: ", allRemovedIds);
                idToIndexRemove(allRemovedIds);

                if (allProjects.length == 2) {

                    toRemoveProjIndex = 1;
                    currentProjIndex = 0; //sets to hidden proj
                    currentProjName = "_hIdDeN";


                    var elToBeRemoved = e.target.closest(".eachSidebarContainer");
                    elToBeRemoved.remove();
                    allProjects.splice(toRemoveProjIndex, 1);
                    console.table(allProjects);

                    console.log(`Current proj index is ${currentProjIndex} and name is ${currentProjName}`);
                    (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.allEmpty)();
                    (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.toggleSeeAllBtn)();
                    (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.seeAll)(allItems);
                } else if (toRemoveProjIndex == 1) {
                    currentProjIndex = 1;
                    
                    //DOM
                    var elToBeRemoved = e.target.closest(".eachSidebarContainer");
                    elToBeRemoved.remove();

                    allProjects.splice(toRemoveProjIndex, 1);
                    console.table(allProjects);
                    currentProjName = allProjects[currentProjIndex].projName;
                    (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.sidebarToggle)(currentProjName);

                    console.log(`Current proj index is ${currentProjIndex} and name is ${currentProjName}`);
                } else {

                    console.log("below is allProj");
                    console.table(allProjects);
                    console.log("below is allItems");
                    console.table(allItems);

                    currentProjIndex = toRemoveProjIndex - 1;
                    currentProjName = allProjects[currentProjIndex].projName;

                    console.log(`Current proj index is ${currentProjIndex} and name is ${currentProjName}`);

                    //DOM
                    var elToBeRemoved = e.target.closest(".eachSidebarContainer");
                    elToBeRemoved.remove();

                    allProjects.splice(toRemoveProjIndex, 1);
                    console.log("This is after the removals");
                    console.table(allProjects);
                    console.table(allItems);
                    (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.sidebarToggle)(currentProjName);
                };
                
            }
        } else if (e.target.className === "sidebar_Name_edit" || e.target.className === "fa-regular fa-pen-to-square") {
            var toEditProjName = e.target.closest("div div").id.slice(0, -8);
            var toEditProjIndex = allProjects.findIndex((obj) => obj.projName == toEditProjName);
            console.log("proj name & index, respectively " + toEditProjName + " " + toEditProjIndex);
            let newName = prompt("What do you want the new name to be?", "");
            if (newName === null) {
                return;
            } else if (newName !== null && allProjects.length == 1) {
                allProjects[toEditProjIndex].setNewProjName(newName);
                (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.setNewSideNames)(toEditProjName, newName);//DOM and id changes 
                currentProjName = newName;
                console.log(currentProjName + " " + currentProjIndex);
            }
        } else if (e.target.id === "seeAllToggle") {
            (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.toggleSeeAllBtn)();
            if (document.getElementById("seeAllToggle").innerHTML == "Hide All To-Do's") {
                (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.seeAll)(allItems);
                lastProjName = currentProjName;
                lastProjIndex = currentProjIndex;
                //holds info of last viewed for if user decides to hide all items
                currentProjName = "_hIdDeN";
                currentProjIndex = 0;
                console.log("name and index: " + currentProjName + " " + currentProjIndex);
            } else {
                currentProjName = lastProjName;
                currentProjIndex = lastProjIndex;
                console.log("NEW name and index: " + currentProjName + " " + currentProjIndex);
                var AP = allProjects;
                var y = currentProjIndex;
                var z = `${currentProjName}box`;

                (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.refreshCenterDOM)(allProjects, y, z);
                (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.sidebarToggle)(currentProjName);
            }
        }
        else if (e.target.id === "sidebarNamesOnly") {
            console.log("only the sidebar empty space!");
            return;
        }  
    })

    /* what is this jank code */
    const allItemBoxListeners = document.querySelector('#allTasksBox');
    allItemBoxListeners.addEventListener('click', (e) => {

        var btnParentProjName = e.target.closest("div.added_tasks").id.split('_')[0]; 
        currentProjName = btnParentProjName;
        var btnParentIndex = allProjects.findIndex((obj) => obj.projName == btnParentProjName);
        currentProjIndex = btnParentIndex;
        var editFormCont = document.getElementById("editFormContainer");
        var editFormMain = document.querySelectorAll("#editForm [id^=edit]");
        var editFormArray = [...editFormMain]

        if (e.target.closest("div").className !== "task_button_holder") {
            console.log("nothing should be happening here...");
        } else if (e.target.parentNode.closest("div").className !== "task_button_holder") {
            console.log("nothing happening here EITHER....");
        } else if (e.target.closest("button").className === "expandself_button" && e.target.closest("button").id.slice(10, 17) === "AllPage") {
            console.log(e.target.closest("button").id);
            var expandID = e.target.closest("button").id.slice(18);
            var toExpand = document.getElementById(`${expandID}_expandMe_AllPage`);
            var expandIdWithAP = e.target.closest("button").id.slice(10);
           
            var toggleHolder = e.target.closest("div.added_tasks").lastElementChild;
            var expandTogCounter = toggleHolder.innerHTML;

            if (expandTogCounter%2 !== 0) {
                toExpand.classList.add("active");
            } else if (expandTogCounter%2 === 0) {
                toExpand.classList.remove("active");
            }
            
            console.log("before fxn " + expandTogCounter);
            (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.toggleExpand)(expandIdWithAP, expandTogCounter);
            expandTogCounter++;
            console.log("after fxn " + expandTogCounter);
            toggleHolder.innerHTML = expandTogCounter;
        } else if (e.target.closest("button").className === "removeself_button" && e.target.closest("button").id.slice(4, 11) === "AllPage") {
            //finds unique ID of task within allItems
            var taskIdInAll = e.target.closest("button").id.slice(12);
            console.log("taskIdINall is " + taskIdInAll);
            getProjInfoForAllProj(taskIdInAll); //sets currentProj Name & Index to specific task
            removeItemFromAll(taskIdInAll);

            console.log("new proj name & index" + currentProjName + " " + currentProjIndex);

            //removes task from respective project within allProjects
            removeItemFromCurrent(currentProjIndex, taskIdInAll);
            console.log("below is allProjects");
            console.table(allProjects);
            (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.seeAll)(allItems);
        } else if (e.target.closest("button").className === "editTask_button" && e.target.closest("button").id.slice(8, 15) === "AllPage") {

            document.getElementById("backgroundCoverStuff").style.display = "block";
            var editID = e.target.closest("button").id.slice(16);
            setCurrentIntoEditor(editID);
            console.log(allProjects);

            const updateTask = document.getElementById("updateEditButton");
            updateTask.addEventListener('click', (e) => {
                setEditIntoCurrentAll(editID);
                editFormCont.style.display = "none";
                document.getElementById("backgroundCoverStuff").style.display = "none";
            })
            const cancelUpdateTask = document.getElementById("cancelEditButton");
            cancelUpdateTask.addEventListener('click', (e) => {
                editFormCont.style.display = "none";
                document.getElementById("backgroundCoverStuff").style.display = "none";
            })
        } 
        /* Figure out how to configure this fxn so that edit goes into allProj and allItem list! */
        function setEditIntoCurrentAll(x) {

            var editedTitle = editForm.editTitle.value;
            var editedDescription = editForm.editDescription.value;
            var editedDueDate = editForm.editDueDate.value;
            var editedPriority = editForm.editPriority.value;
            var editedNotes = editForm.editNotes.value;
    
            var currentTaskIndexAll = allItems.findIndex((obj) => obj.ID === `${x}`);
            allItems.findIndex((obj) => obj.ID === `${x}`);
            var insertTarg = allItems[`${currentTaskIndexAll}`]
            
            insertTarg.titleSetNew(editedTitle);
            insertTarg.descriptionSetNew(editedDescription);
            insertTarg.dueDateSetNew(editedDueDate);
            insertTarg.prioritySetNew(editedPriority);
            insertTarg.notesSetNew(editedNotes);

            console.log("below is allProjects");
            console.table(allProjects);
            console.log("below is allItems");
            console.table(allItems);

            (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.seeAll)(allItems);            
        }

        function setCurrentIntoEditor(someID) {
            editFormCont.style.display = "block";
            var currentInfoArray = [];
            //go within allItems & find specific index
            var currentTaskIndexAll = allItems.findIndex((obj) => obj.ID === `${someID}`);
            allItems.findIndex((obj) => obj.ID === `${someID}`);
            console.log(currentTaskIndexAll);
            //take each ... description? part of constructor and get the values matched to each part
            //push said values/matches into currentInfoArray
            var testobj = allItems[`${currentTaskIndexAll}`];
            console.log(testobj);
    
            //finds key value pairs of tasks's this.info type
            for (const [key, value] of Object.entries(testobj)) {
                if (["description", "dueDate", "notes", "priority", "title"].indexOf(key) > -1) {
                    var x = [key, value];
                    currentInfoArray.push(x);
                }
            }
            console.log(currentInfoArray);

            editFormArray.forEach(input => {
    
                var inputSliced = input.name.slice(0, -5);
    
                for (var j = 0, m = currentInfoArray.length; j < m; j++) {
                    if (inputSliced === "description" && inputSliced === currentInfoArray[j][0]) {
                        document.getElementById("editDescription").innerHTML = `${currentInfoArray[j][1]}`;
                    } else if (inputSliced === currentInfoArray[j][0]) {
                        input.setAttribute("value", `${currentInfoArray[j][1]}`);
                    }
                }
            });
        }
    })


    const projSwitch = document.querySelector('#sidebar');
    projSwitch.addEventListener('click', (e) => {

        var btnParentProjName = e.target.closest("h3").id.slice(0, -3); 
        currentProjName = btnParentProjName;
        var btnParentIndex = allProjects.findIndex((obj) => obj.projName == btnParentProjName);
        currentProjIndex = btnParentIndex;
        var editFormCont = document.getElementById("editFormContainer");
        var editFormMain = document.querySelectorAll("#editForm [id^=edit]");
        var editFormArray = [...editFormMain]

        if (e.target.closest("div").className !== "task_button_holder") {
            console.log("nothing should be happening here...");
        } else if (e.target.parentNode.closest("div").className !== "task_button_holder") {
            console.log(e.target.parentNode.closest("div"));
        } else if (e.target.closest("button").className === "removeself_button") {
            //finds parent box ID; sets currentproj name & respective currentproj index to remove button&task from
          
            console.log("currentProjIndex is " + currentProjIndex);
            //finds unique ID of task within allItems
            var taskIdInAll = e.target.closest("button").id.slice(4);
            console.log("taskIdINall is " + taskIdInAll);

            removeItemFromAll(taskIdInAll);

            var AP = allProjects;
            var y = currentProjIndex;
            var z = `${currentProjName}box`;

            removeItemFromCurrent(currentProjIndex, taskIdInAll);
            console.log("below is allProjects");
            console.table(allProjects);
            console.log("below is allItems");
            console.table(allItems);

            (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.storeProject)(allProjects[currentProjIndex]);
            //refreshes folder to update w/o removed task
            var storageRemovalFromAll = [];
            storageRemovalFromAll.push(taskIdInAll);
            (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.removeFromAllItems)(storageRemovalFromAll);

            (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.refreshCenterDOM)(AP, y, z);
        } else if (e.target.closest("button").className === "expandself_button") {
            var expandID = e.target.closest("button").id.slice(10);
            var toExpand = document.getElementById(`${expandID}_expandMe`);
           
            var toggleHolder = e.target.closest("div.added_tasks").lastElementChild;
            var expandTogCounter = toggleHolder.innerHTML;

            if (expandTogCounter%2 !== 0) {
                toExpand.classList.add("active");
            } else if (expandTogCounter%2 === 0) {
                toExpand.classList.remove("active");
            }
            
            console.log("before fxn " + expandTogCounter);
            (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.toggleExpand)(expandID, expandTogCounter);
            expandTogCounter++;
            console.log("after fxn " + expandTogCounter);
            toggleHolder.innerHTML = expandTogCounter;
        } else if (e.target.closest("button").className === "editTask_button") {

            document.getElementById("backgroundCoverStuff").style.display = "block";
            var editID = e.target.closest("button").id.slice(8);
            setCurrentIntoEditor(editID);

            const updateTask = document.getElementById("updateEditButton");
            updateTask.addEventListener('click', (e) => {
                setEditIntoCurrent(editID);
                setEditIntoAll(editID);
                editFormCont.style.display = "none";
                document.getElementById("backgroundCoverStuff").style.display = "none";
                /*for some reason, the METHODS of the tasks won't work here if they're from localStorage...*/
                (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.storeProject)(allProjects[currentProjIndex]);
                (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.storeAllItems)(allItems);
            })
            const cancelUpdateTask = document.getElementById("cancelEditButton");
            cancelUpdateTask.addEventListener('click', (e) => {
                editFormCont.style.display = "none";
                document.getElementById("backgroundCoverStuff").style.display = "none";
            })

            
        } 

        function setEditIntoCurrent(x) {

            var editedTitle = editForm.editTitle.value;
            var editedDescription = editForm.editDescription.value;
            var editedDueDate = editForm.editDueDate.value;
            var editedPriority = editForm.editPriority.value;
            var editedNotes = editForm.editNotes.value;
    
            var currentTaskIndex = allProjects[currentProjIndex]["taskList"].findIndex((obj) => obj.ID === `${x}`);
            var insertTarg = allProjects[currentProjIndex]["taskList"][`${currentTaskIndex}`];

            insertTarg.title = editedTitle;
            insertTarg.description = editedDescription;
            insertTarg.dueDate = editedDueDate;
            insertTarg.priority = editedPriority;
            insertTarg.notes = editedNotes;

            /* insertTarg.titleSetNew(editedTitle);
            insertTarg.descriptionSetNew(editedDescription);
            insertTarg.dueDateSetNew(editedDueDate);
            insertTarg.prioritySetNew(editedPriority);
            insertTarg.notesSetNew(editedNotes); */

            console.log("below is allProjects");
            console.table(allProjects);
            console.log("below is allItems");
            console.table(allItems);
        }

        function setEditIntoAll(x) {

            var editedTitle = editForm.editTitle.value;
            var editedDescription = editForm.editDescription.value;
            var editedDueDate = editForm.editDueDate.value;
            var editedPriority = editForm.editPriority.value;
            var editedNotes = editForm.editNotes.value;
    
            var currentTaskIndexAll = allItems.findIndex((obj) => obj.ID === `${x}`);
            allItems.findIndex((obj) => obj.ID === `${x}`);
            var insertTarg = allItems[`${currentTaskIndexAll}`]
            
            insertTarg.titleSetNew(editedTitle);
            insertTarg.descriptionSetNew(editedDescription);
            insertTarg.dueDateSetNew(editedDueDate);
            insertTarg.prioritySetNew(editedPriority);
            insertTarg.notesSetNew(editedNotes);

            console.log("below is allProjects");
            console.table(allProjects);
            console.log("below is allItems");
            console.table(allItems);

            (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.seeAll)(allItems);            
        }

        function setCurrentIntoEditor(someID) {
            editFormCont.style.display = "block";
            console.log("editFormArray " + editFormArray);
            var currentInfoArray = [];
            //go within allProjects, to current project index, to tasklist, to specific index within tasklist
            var currentTaskIndex = allProjects[currentProjIndex]["taskList"].findIndex((obj) => obj.ID === `${someID}`);
            //take each ... description? part of constructor and get the values matched to each part
            //push said values/matches into currentInfoArray
            var testobj = allProjects[currentProjIndex]["taskList"][`${currentTaskIndex}`];
            console.log(testobj);
    
            //finds key value pairs of tasks's this.info type
            for (const [key, value] of Object.entries(testobj)) {
                if (["description", "dueDate", "notes", "priority", "title"].indexOf(key) > -1) {
                    var x = [key, value];
                    currentInfoArray.push(x);
                }
            }
            console.log(currentInfoArray);

            editFormArray.forEach(input => {
    
                var inputSliced = input.name.slice(0, -5);
    
                for (var j = 0, m = currentInfoArray.length; j < m; j++) {
                    if (inputSliced === "description" && inputSliced === currentInfoArray[j][0]) {
                        document.getElementById("editDescription").innerHTML = `${currentInfoArray[j][1]}`;
                    } else if (inputSliced === currentInfoArray[j][0]) {
                        input.setAttribute("value", `${currentInfoArray[j][1]}`);
                    }
                }
            });
        }
    }) 

    const addNewProjBtn = document.getElementById("newproj_add");
    addNewProjBtn.addEventListener('click', (e) => {
        var stopFromAddingNew = 0;
        var takenProjNames = [];
        allProjects.forEach(el => {
            takenProjNames.push(el.projName);
        });
        takenProjNames.forEach(ek => {
            if (ek === addnewprojform.newproj_name.value) {
                alert("Please enter a unique project name.");
                stopFromAddingNew = 1;
            }
        });
        if (!/\S/.test(addnewprojform.newproj_name.value)) {
            alert("Please enter a valid project name.");
        } else if (stopFromAddingNew == 0) {
            var a = addnewprojform.newproj_name.value;
            var x = new Project(a);
            addProjToAll(x);
            console.table(allProjects);
            (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.addProjToSide)(x); //DOM
            currentProjName = x.projName 
            currentProjIndex = allProjects.findIndex((obj) => obj.projName === `${currentProjName}`);//switch newly made proj to currentProjName and currentProjIndex
            (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.sidebarToggle)(currentProjName);

            //localstorage here

            (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.storeProject)(allProjects[currentProjIndex]); //"refreshes" proj in localStorage to include new added task
            (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.storeProject)(allProjects[0]);
            //also adds hidden proj so that the "space" is taken when localstorage is accessed and DOM displayed

            document.getElementById("addnewprojform").reset();
            console.log("currentproj name is " + currentProjName + " and current proj index is " + currentProjIndex);
            document.getElementById("projFormContainer").style.display = "none";
            document.getElementById("backgroundCoverStuff").style.display = "none";
        }
        console.log(allProjects);
    });

    const darkLightToggle = document.getElementById("toggleHolder");
    darkLightToggle.addEventListener('click', (e) => {
        if (document.getElementById("sidebarNamesOnly").className !== "dark-mode") {
            document.getElementById("toggledOff").style.display = "none";
            document.getElementById("toggledOn").style.display = "block";
        } else if (document.getElementById("sidebarNamesOnly").className === "dark-mode") {
            document.getElementById("toggledOff").style.display = "block";
            document.getElementById("toggledOn").style.display = "none";
        };
        (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.toggleDark)();
    })

    // localStorage code under here

    let retrievedProjData = [];
    let retrievedAllData = [];

    if ((0,_storage_js__WEBPACK_IMPORTED_MODULE_1__["default"])()) {
        (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.retrieveProjects)(retrievedProjData, retrievedAllData);
        console.log(retrievedProjData);
        console.log(retrievedAllData);
        let retrievedCurrentProjName = null;
        let index = 0;

        ////////need to check IF there is something besides hidden
        retrievedCurrentProjName = retrievedProjData[1].projName;
        currentProjName = retrievedCurrentProjName;
        currentProjIndex = 1;

        //will need to write if/else to check that there ARE projects and not just allItems, and vice versa
        retrievedProjData.forEach(el => {
            var projToBeConstructed = new Project(`${el.projName}`);
            (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.addProjToSide)(projToBeConstructed);
            console.log(el.taskList);
            if (el.taskList !== 0) {
                el.taskList.forEach(em => {
                    console.log("testing the id...." + em.ID);

                    var a = em.title;
                    var b = em.description;
                    var c = em.dueDate;
                    var d = em.priority;
                    var e = em.notes;
                    var f = em.project;

                    var remadeTask = new Item(a, b, c, d, e, f)
                    remadeTask.ID = em.ID;
                    console.log(remadeTask.giveDeets());

                    projToBeConstructed.taskList.push(em);
                }); 
                //adds each taskList item into remade Project
            }
            console.log(projToBeConstructed);
            allProjects.push(projToBeConstructed);

            var AP = allProjects;
            var y = index++;
            var z = `${el.projName}box`;

            (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.refreshCenterDOM)(AP, y, z);
            console.log(`allProjects below`);
            console.log(allProjects);
            /////////////////////////
        });
        retrievedAllData.forEach(en => {

            var a = en.title;
            var b = en.description;
            var c = en.dueDate;
            var d = en.priority;
            var e = en.notes;
            var f = en.project;
            
            var taskToBeMade = new Item(a, b, c, d, e, f)
            taskToBeMade.ID = en.ID;
            console.log(taskToBeMade);
            allItems.push(taskToBeMade);
            console.log(`allItems below`);
            console.log(allItems);
        });

        /* var AP = allProjects;
        var y = 0;
        var z = `${retrievedCurrentProjName}box`;
        refreshCenterDOM(AP, y, z); */

        (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.sidebarToggle)(retrievedCurrentProjName);

        //console.log(retrievedData[1].taskList[0]);
        //can go into each proj folder >> taskList >> each task
    } else {
        var hiddenProj = new Project ("_hIdDeN");
        addProjToAll(hiddenProj); 
        (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.addProjToSide)(hiddenProj);
        //"holder" for tasks added in allItems page; currentProjIndex of 0
        var initProj = new Project("My First List");
        addProjToAll(initProj);
        currentProjIndex = allProjects.findIndex((obj) => obj.projName === "My First List");
        currentProjName = allProjects[currentProjIndex].projName;
        console.log(currentProjIndex + currentProjName);
        (0,_DOMtodo_js__WEBPACK_IMPORTED_MODULE_0__.addProjToSide)(initProj);
        console.log(allProjects);
    }

    

    //don't break if nothing is found in localStorage
    //store each project and it's name (no overwriting! unique)
    //retrieve name

    //storeProject(hiddenProj); testing a stored project
    
    

    //storeProject(initProj);

    //storageTest(); will probably want to add this before storing hidden/initProj to check IF person has already visited
    
}


/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ storageTest),
/* harmony export */   "removeFromAllItems": () => (/* binding */ removeFromAllItems),
/* harmony export */   "removeProject": () => (/* binding */ removeProject),
/* harmony export */   "retrieveProject": () => (/* binding */ retrieveProject),
/* harmony export */   "retrieveProjects": () => (/* binding */ retrieveProjects),
/* harmony export */   "storeAllItems": () => (/* binding */ storeAllItems),
/* harmony export */   "storeProject": () => (/* binding */ storeProject)
/* harmony export */ });
function storageTest() {
    if (localStorage.length === 0) {
        console.log("No booty to be found");
        //populateStorage();??
        return false;
      } else {
        console.log("There's stuff in here!");
        //localStorage is NOT array, just object
        
        return true;

        /* var retrievedProj = retrieveProject("_hIdDeN");
        var testRetrievalName = retrievedProj.projName;
        console.log('retrievedProject projName: ', testRetrievalName); */
      }
}

function storeAllItems(x) {
  x.forEach(el => {
    localStorage.setItem(`aLlItEmS_${el.ID}`, JSON.stringify(el));
    console.log(`Storing allItems ID of: ${el.ID}`)
  })
}

function storeProject(x) {
  console.log(`what in the world is X? HERE: ${x.projName}`);
  localStorage.setItem(`${x.projName}`, JSON.stringify(x));
}

function removeFromAllItems(originalIdArray) {
  var newIdArray = originalIdArray.slice();
  while (newIdArray.length !== 0) {
    for (var s = 0; s < localStorage.length; s++) {
      if (localStorage.key(s) === `aLlItEmS_${newIdArray[0]}`) {
          console.log("This is what is being removed in removeFromAll: " + newIdArray[0]);
          localStorage.removeItem(`aLlItEmS_${newIdArray[0]}`);
          newIdArray.splice(0, 1);
          break;
      }
    }
  };
  console.log(originalIdArray);
}

function removeProject(x) {
  console.log("This is what is being removed in removeProj: " + x)
  localStorage.removeItem(x);
}
/* export function storeTask(x) {
  console.log(`ID for task: ${x.ID}`);
  localStorage.setItem(`${x.ID}`, JSON.stringify(x));
} */

function retrieveProjects(someArray, anotherArray) {

  //iterates through localStorage for hidden and all projects
  //these projects do NOT have methods yet
  for (var i = 0; i < localStorage.length; i++) {
    var projRetrieval = localStorage.getItem(localStorage.key(i));
    var parsedProjRetriev = JSON.parse(projRetrieval);

    if (parsedProjRetriev.projName) {
      console.log("projName + ID: " + parsedProjRetriev.projName + " " + parsedProjRetriev.ID);
      someArray.push(parsedProjRetriev);
    } else if (parsedProjRetriev.ID.slice(0,4) === "proj") {
      console.log("ALLITEMS title, deets & ID: " + parsedProjRetriev.title + " " + parsedProjRetriev.description + " " + parsedProjRetriev.ID);
      anotherArray.push(parsedProjRetriev);
    }
  }  
}

function retrieveProject(x) {

    var retrievedProject = localStorage.getItem(`${x}`);
    var parsedProject = JSON.parse(retrievedProject);
    return parsedProject;
    //add renaming function back by using constructor again


    /* console.log('retrievedProject AFTER adding: ' +  parsedProject);
    parsedProject.setNewProjName("TestingChange");
    console.log(parsedProject.displayProj());
    console.log("using the fxn: " + parsedProject.giveProjName()); */
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksY0FBYyxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVks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OztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0M7QUFDaEM7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUI7QUFDckI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOTJCZTtBQUNmO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVFQUF1RTtBQUN2RTtBQUNBOztBQUVPO0FBQ1A7QUFDQSxxQ0FBcUMsTUFBTTtBQUMzQywyQ0FBMkMsTUFBTTtBQUNqRCxHQUFHO0FBQ0g7O0FBRU87QUFDUCwrQ0FBK0MsV0FBVztBQUMxRCwwQkFBMEIsV0FBVztBQUNyQzs7QUFFTztBQUNQO0FBQ0E7QUFDQSxvQkFBb0IseUJBQXlCO0FBQzdDLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixLQUFLO0FBQ25DLDBCQUEwQixLQUFLO0FBQy9CLEVBQUU7O0FBRUs7O0FBRVA7QUFDQTtBQUNBLGtCQUFrQix5QkFBeUI7QUFDM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTzs7QUFFUCxtREFBbUQsRUFBRTtBQUNyRDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRTtBQUNuRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLXRvZGF5Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby10b2RheS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tdG9kYXkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby10b2RheS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tdG9kYXkvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvY2xvbmVPYmplY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tdG9kYXkvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdExvY2FsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby10b2RheS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby10b2RheS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLXRvZGF5Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby10b2RheS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yb3VuZGluZ01ldGhvZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tdG9kYXkvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbXBhcmVBc2MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tdG9kYXkvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLXRvZGF5Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tdG9kYXkvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbk1vbnRocy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby10b2RheS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluU2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby10b2RheS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZW5kT2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tdG9kYXkvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2VuZE9mTW9udGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tdG9kYXkvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLXRvZGF5Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXREaXN0YW5jZVRvTm93L2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLXRvZGF5Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0xhc3REYXlPZk1vbnRoL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLXRvZGF5Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby10b2RheS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLXRvZGF5Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tdG9kYXkvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tdG9kYXkvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLXRvZGF5Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLXRvZGF5Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby10b2RheS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbG9jYWxpemUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tdG9kYXkvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL21hdGNoL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLXRvZGF5Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tdG9kYXkvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby10b2RheS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby10b2RheS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby10b2RheS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tdG9kYXkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tdG9kYXkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tdG9kYXkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby10b2RheS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLXRvZGF5Ly4vc3JjL0RPTXRvZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tdG9kYXkvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tdG9kYXkvLi9zcmMvbG9naWN0b2RvLmpzIiwid2VicGFjazovL3RvLWRvLXRvZGF5Ly4vc3JjL3N0b3JhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuLyogVHJ5aW5nIG1vYmlsZSBmaXJzdCBkZXYgKi9cXG5cXG46cm9vdCB7XFxuICAgIC0tcHJpbWFyeTogI2Y1YjMxNjtcXG4gICAgLS1zZWNvbmRhcnk6ICM4ZDhkOGQ7XFxuICAgIC0tdGVydGlhcnk6ICM2NjcyOTI7XFxuICAgIC0tcXVhdGVybmFyeTogI2Q5ZDlkOTtcXG59XFxuXFxuaHRtbCwgYm9keSwgI292ZXJhbGxXcmFwcGVyIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2JhY2tncm91bmRDb3ZlclN0dWZmIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjgpO1xcbiAgICB6LWluZGV4OiAxMjtcXG59XFxuXFxuI25vdEJhY2tncm91bmRDb3ZlciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1JSA5NSU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzUlIDY1JTtcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXRlcnRpYXJ5KTtcXG59XFxuXFxuI2hlYWRlci5kYXJrLW1vZGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4jaGVhZGVySWNvbkhvbGRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbiN0b2dnbGVkT24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jZGFya0NvdW50IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2hlYWRlckljb25Ib2xkZXIgaDMge1xcbiAgICBmb250LXNpemU6IDExcHg7XFxufVxcblxcbiNzaWRlYmFyTmFtZXNPbmx5IHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgLyogZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtOyAqL1xcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcXVhdGVybmFyeSk7XFxuXFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuI3NpZGViYXJOYW1lc09ubHkgPiBkaXY6bnRoLW9mLXR5cGUoMikge1xcbiAgICBkaXNwbGF5Om5vbmU7XFxufVxcblxcbltpZF49XFxcIl9oSWREZU5cXFwiXSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tdGVydGlhcnkpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1xdWF0ZXJuYXJ5KTtcXG59XFxuXFxuI2NvbnRlbnQuZGFyay1tb2RlLCAjc2lkZWJhck5hbWVzT25seS5kYXJrLW1vZGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHZhcigtLXF1YXRlcm5hcnkpO1xcbn1cXG5cXG4jYWxsVGFza3NCb3gge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB6LWluZGV4OiA1O1xcbn1cXG5cXG5kaXYuYWRkZWRfcHJvamVjdHMge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuZGl2LmFkZGVkX3Byb2plY3RzLmRhcmstbW9kZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogdmFyKC0tcXVhdGVybmFyeSk7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgd2hpdGU7XFxufVxcblxcbmRpdiNzdG9wQWxsRW1wdHkge1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuZGl2I3N0b3BBbGxFbXB0eSA+IGgyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmRpdiNzdG9wQWxsRW1wdHkgPiBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCAzcHggcmdiKDAsMCwwLDAuNik7XFxufVxcblxcbmRpdiNzdG9wQWxsRW1wdHkgPiBidXR0b24uZGFyay1tb2RlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB2YXIoLS1xdWF0ZXJuYXJ5KTtcXG59XFxuXFxuXFxuLmVhY2hTaWRlYmFyQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGhlaWdodDogNDJweDtcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10ZXJ0aWFyeSk7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICAgIGJveC1zaGFkb3c6IDFweCAycHggMnB4IHJnYigwLDAsMCwwLjYpO1xcbn1cXG5cXG4uZWFjaFNpZGViYXJDb250YWluZXIuZGFyay1tb2RlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB2YXIoLS1xdWF0ZXJuYXJ5KTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCAycHggcmdiYSgxNDAsIDE0MCwgMTQwLCAwLjYpO1xcbn1cXG5cXG5kaXYuc2lkZWJhcl9OYW1lcyB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcblxcbmRpdi5zaWRlYmFyX05hbWVfZWRpdCB7XFxuICAgIGZvbnQtc2l6ZTogIGNsYW1wKDAuMnJlbSwgMXJlbSwgMS4xcmVtKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDN2aDtcXG4gICAgd2lkdGg6IDN2aDtcXG4gICAgdG9wOiAzcHg7XFxuICAgIHJpZ2h0OiA1cHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5kaXYuc2lkZWJhcl9OYW1lX3JlbW92ZSB7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMC4ycmVtLCAxcmVtLCAxLjFyZW0pO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuICAgIGhlaWdodDogM3ZoO1xcbiAgICB3aWR0aDogM3ZoO1xcbiAgICBib3R0b206IDNweDtcXG4gICAgcmlnaHQ6IDVweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmRpdltpZCQ9XFxcIkhpZ2hcXFwiXSwgZGl2W2lkJD1cXFwiSGlnaF9BbGxQYWdlXFxcIl0ge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjU1LCAxMjAsIDEyMCk7XFxufVxcblxcbmRpdltpZCQ9XFxcIk1lZGl1bVxcXCJdLCBkaXZbaWQkPVxcXCJNZWRpdW1fQWxsUGFnZVxcXCJdIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDI1NSwgMTkzLCAzNik7XFxufVxcblxcbmRpdltpZCQ9XFxcIkxvd1xcXCJdLCBkaXZbaWQkPVxcXCJMb3dfQWxsUGFnZVxcXCJdIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDEyOSwgMjUwLCAzMCk7XFxufVxcblxcbmgzLmFkZGVkX3Byb2pfYm94LmRhcmstbW9kZSwgZGl2LmFkZGVkX3Rhc2tzLmRhcmstbW9kZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogdmFyKC0tcXVhdGVybmFyeSk7XFxufVxcblxcbmgzLmFkZGVkX3Byb2pfYm94IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcXVhdGVybmFyeSk7XFxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XFxuICAgIHRyYW5zaXRpb246IGhlaWdodCAycztcXG59XFxuXFxuZGl2LmFkZGVkX3Rhc2tzIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1xdWF0ZXJuYXJ5KTtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjAlIDQwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgNXZoKSBtaW5tYXgoMjUlLCAxZnIpO1xcbn1cXG5cXG5kaXYuYWRkZWRfdGFza3MgPiBoNCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmRpdi5ub3dZb3VTZWVNZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG5kaXYuYWRkZWRfZHVlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG5kaXYudGFza19idXR0b25faG9sZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbmRpdi50YXNrX2J1dHRvbl9ob2xkZXIgPiBidXR0b24ge1xcbiAgICBoZWlnaHQ6IDIycHg7XFxufVxcblxcbmRpdi50aGVFeHBhbmRhYmxlcyB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICBtYXgtaGVpZ2h0OiAwdmg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHotaW5kZXg6IC0xO1xcblxcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgXFxufVxcblxcbmRpdi50aGVFeHBhbmRhYmxlcy5hY3RpdmUge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBtaW4taGVpZ2h0OiA4dmg7XFxuICAgIG1heC1oZWlnaHQ6IG5vbmU7XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6cmdiKDI1NSwgMTEwLCAyMDQpOyAqL1xcbn1cXG4vKiBCdXR0b24gdXNlZCB0byBvcGVuIHRoZSBmb3JtcyAtIGZpeGVkIGF0IHRoZSBib3R0b20gb2YgdGhlIHBhZ2UgKi9cXG5cXG4jYnV0dG9uSG9sZGVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGJvdHRvbTogMjVweDtcXG4gICAgcmlnaHQ6IDI4cHg7XFxuICAgIHdpZHRoOiAyN3Z3O1xcbn1cXG4jYWRkbmV3IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiA0cHggMnB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgICB3aWR0aDogMjd2dztcXG59XFxuICBcXG4jbmV3cHJval9idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDRweCAycHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBvcGFjaXR5OiAwLjg7XFxuICAgIHdpZHRoOiAyN3Z3O1xcbn1cXG5cXG4vKiBUaGUgcG9wdXAgZm9ybSAtIGhpZGRlbiBieSBkZWZhdWx0ICovXFxuI3RvZG9Gb3JtQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB6LWluZGV4OiAxNTtcXG59XFxuICBcXG4jcHJvakZvcm1Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGhlaWdodDogNjAlO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgei1pbmRleDogMTU7XFxufVxcbiAgXFxuI2VkaXRGb3JtQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB6LWluZGV4OiAxNTtcXG59XFxuXFxuLyogQWRkIHN0eWxlcyB0byB0aGUgZm9ybSBjb250YWluZXIgKi9cXG4jYWRkbmV3Zm9ybSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbiNhZGRuZXdmb3JtLmRhcmstbW9kZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuI2FkZG5ld3Byb2pmb3JtIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMjVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbiNhZGRuZXdwcm9qZm9ybS5kYXJrLW1vZGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbiNhZGRuZXdmb3JtID4gZGl2Om50aC1jaGlsZCg0KSwgI2FkZG5ld2Zvcm0gPiBkaXY6bnRoLWNoaWxkKDUpIHtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcblxcbiNhZGRuZXdmb3JtID4gZGl2Om50aC1jaGlsZCgzKSB7XFxuICAgIG1hcmdpbjogM3B4O1xcbn1cXG5cXG4jYWRkbmV3Zm9ybSA+IGRpdjpudGgtY2hpbGQoMykgPiBpbnB1dCwgI2FkZG5ld2Zvcm0gPiBkaXY6bnRoLWNoaWxkKDQpID4gc2VsZWN0IHtcXG4gICAgbWFyZ2luLXRvcDogM3B4O1xcbn1cXG4gIFxcbiNlZGl0Rm9ybSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbiNlZGl0Rm9ybS5kYXJrLW1vZGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbiNlZGl0Rm9ybSA+IGRpdjpudGgtY2hpbGQoNCksICNlZGl0Rm9ybSA+IGRpdjpudGgtY2hpbGQoNSkge1xcbiAgICBtYXJnaW46IDRweDtcXG59XFxuXFxuI2VkaXRGb3JtID4gZGl2Om50aC1jaGlsZCgzKSB7XFxuICAgIG1hcmdpbjogMnB4O1xcbn1cXG5cXG4jZWRpdEZvcm0gPiBkaXY6bnRoLWNoaWxkKDMpID4gaW5wdXQsICNlZGl0Rm9ybSA+IGRpdjpudGgtY2hpbGQoNCkgPiBzZWxlY3Qge1xcbiAgICBtYXJnaW4tdG9wOiAzcHg7XFxufVxcbiAgXFxuICAvKiBGdWxsLXdpZHRoIGlucHV0IGZpZWxkcyAqL1xcbiNhZGRuZXdmb3JtIGlucHV0W3R5cGU9dGV4dF0sICNhZGRuZXdmb3JtIHRleHRhcmVhLCAjZWRpdEZvcm0gaW5wdXRbdHlwZT10ZXh0XSwgI2VkaXRGb3JtIHRleHRhcmVhIHtcXG4gICAgZm9udC1mYW1pbHk6ICdKb3N0Jywgc2Fucy1zZXJpZjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgbWFyZ2luOiA1cHggMCA4cHggMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xcbn1cXG5cXG4jYWRkbmV3cHJvamZvcm0gaW5wdXRbdHlwZT10ZXh0XSwgI2VkaXRGb3JtIGlucHV0W3R5cGU9dGV4dF0ge1xcbiAgICBmb250LWZhbWlseTogJ0pvc3QnLCBzYW5zLXNlcmlmO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBtYXJnaW46IDEycHggMCAxMnB4IDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcXG59XFxuXFxuI2FkZG5ld2Zvcm0gaW5wdXRbdHlwZT10ZXh0XTo6cGxhY2Vob2xkZXIsICNhZGRuZXdwcm9qZm9ybSBpbnB1dFt0eXBlPXRleHRdOjpwbGFjZWhvbGRlciwgI2FkZG5ld2Zvcm0gdGV4dGFyZWE6OnBsYWNlaG9sZGVyLCAjZWRpdEZvcm0gaW5wdXRbdHlwZT10ZXh0XSwgI2VkaXRGb3JtIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSm9zdCcsIHNhbnMtc2VyaWY7XFxufVxcbiAgXFxuLyogV2hlbiB0aGUgaW5wdXRzIGdldCBmb2N1cywgZG8gc29tZXRoaW5nICovXFxuI2FkZG5ld2Zvcm0gaW5wdXRbdHlwZT10ZXh0XTpmb2N1cywgI2FkZG5ld3Byb2pmb3JtIGlucHV0W3R5cGU9dGV4dF06Zm9jdXMsICNhZGRuZXdmb3JtIHRleHRhcmVhOmZvY3VzLCAjZWRpdEZvcm0gaW5wdXRbdHlwZT10ZXh0XTpmb2N1cywgI2VkaXRGb3JtIHRleHRhcmVhOmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuICBcXG4vKiBTZXQgYSBzdHlsZSBmb3IgdGhlIHN1Ym1pdC9sb2dpbiBidXR0b24gKi9cXG4jYWRkbmV3Zm9ybSBidXR0b24sICNlZGl0Rm9ybSBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeSk7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgcGFkZGluZzogMTJweCAxNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG4gICAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4jYWRkbmV3cHJvamZvcm0gYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnkpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHBhZGRpbmc6IDEycHggMTVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbiAgICBvcGFjaXR5OiAwLjg7IFxcbn1cXG4gIFxcbi8qIEFkZCBhIHJlZCBiYWNrZ3JvdW5kIGNvbG9yIHRvIHRoZSBjYW5jZWwgYnV0dG9uICovXFxuI2FkZG5ld2Zvcm0gYnV0dG9uI2NhbmNlbF9idXR0b24sICNhZGRuZXdwcm9qZm9ybSBidXR0b24jbmV3cHJval9jYW5jZWwsICNlZGl0Rm9ybSBidXR0b24jY2FuY2VsRWRpdEJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXF1YXRlcm5hcnkpO1xcbn1cXG4gIFxcbi8qIEFkZCBzb21lIGhvdmVyIGVmZmVjdHMgdG8gYnV0dG9ucyAqL1xcbiNhZGRuZXdmb3JtICBidXR0b246aG92ZXIsICNhZGRuZXc6aG92ZXIsICNhZGRuZXdwcm9qZm9ybSBidXR0b246aG92ZXIsICNuZXdwcm9qX2J1dHRvbjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbmlucHV0I3RpdGxlLm5lZWRzRmlsbGluZywgI2Rlc2NyaXB0aW9uLm5lZWRzRmlsbGluZyB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTksIDU0LCA1NCk7XFxufVxcblxcbnNlbGVjdCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxNnB4IDIwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbn1cXG5cXG5pbnB1dC5kYXJrLW1vZGUsIHRleHRhcmVhLmRhcmstbW9kZSwgc2VsZWN0LmRhcmstbW9kZSxcXG4jYWRkbmV3Zm9ybSBpbnB1dFt0eXBlPXRleHRdLmRhcmstbW9kZSwgI2FkZG5ld2Zvcm0gdGV4dGFyZWEuZGFyay1tb2RlLCAjZWRpdEZvcm0gaW5wdXRbdHlwZT10ZXh0XS5kYXJrLW1vZGUsICNlZGl0Rm9ybSB0ZXh0YXJlYS5kYXJrLW1vZGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1xdWF0ZXJuYXJ5KTtcXG59XFxuXFxuLyogU2Nyb2xsYmFyICovXFxuXFxuLyogd2lkdGggKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA3cHg7XFxufVxcblxcbi8qIFRyYWNrICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xcbn1cXG5cXG4vKiBIYW5kbGUgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQ6IHJnYigxOTAsIDE5MCwgMTkwKTtcXG59XFxuXFxuLyogSGFuZGxlIG9uIGhvdmVyICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTAzLCAxMDMsIDEwMyk7XFxufVxcblxcbi8qIHNtYWxsIHRhYmxldCBzaXplcyAqL1xcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYyMHB4KSB7XFxuXFxuICAgIGRpdiNzdG9wQWxsRW1wdHkge1xcbiAgICAgICAgcGFkZGluZzogMTVweCAyNXB4O1xcbiAgICB9XFxuICAgIGRpdiNzdG9wQWxsRW1wdHkgPiBidXR0b24ge1xcbiAgICAgICAgaGVpZ2h0OiA1LjI1dmg7XFxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgfVxcbiAgICAuZWFjaFNpZGViYXJDb250YWluZXIge1xcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xcbiAgICAgICAgb3BhY2l0eTogMC44O1xcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10ZXJ0aWFyeSk7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICAgICAgICBib3gtc2hhZG93OiAxcHggMnB4IDJweCByZ2IoMCwwLDAsMC42KTtcXG4gICAgfVxcbiAgICBkaXYuYWRkZWRfcHJvamVjdHMge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIH1cXG4gICAgZGl2LmFkZGVkX3Rhc2tzIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgfVxcbiAgICBkaXYudGFza19idXR0b25faG9sZGVyID4gYnV0dG9uIHtcXG4gICAgICAgIGhlaWdodDogMjVweDtcXG4gICAgfVxcbiAgICBkaXYuc2lkZWJhcl9OYW1lX2VkaXQge1xcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgwLjVyZW0sIDEuMnJlbSwgMS40cmVtKTtcXG4gICAgfVxcbiAgICBkaXYuc2lkZWJhcl9OYW1lX3JlbW92ZSB7XFxuICAgICAgICBmb250LXNpemU6IGNsYW1wKDAuNXJlbSwgMS4ycmVtLCAxLjRyZW0pO1xcbiAgICB9XFxuICAgIGRpdi5zaWRlYmFyX05hbWVzIHtcXG4gICAgICAgIHdpZHRoOiA5MiU7XFxuICAgIH1cXG4gICAgXFxufVxcblxcbi8qIGxhcmdlIHRhYmxldCAmIGxhcHRvcCBzaXplcyAqL1xcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSB7XFxuICAgIFxcbn1cXG5cXG4vKiBkZXNrdG9wICovXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxuICAgIFxcbn1cXG5cXG4vKk15IGluaXRpYWwgY29kZSBiZWxvdyBmb3IgZGVza3RvcCovXFxuXFxuLyogaHRtbCwgYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jc2lkZWJhck5hbWVzT25seSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDV2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAzcmVtO1xcbiAgICB3aWR0aDogMjV2dztcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBwYWRkaW5nLXRvcDogNXZoO1xcbiAgICB3aWR0aDogNzV2dztcXG4gICAgYm9yZGVyOiAycHggc29saWQgY29yYWw7XFxufVxcblxcbiNhbGxUYXNrc0JveCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHotaW5kZXg6IDU7XFxufVxcblxcbmRpdi5hZGRlZF9wcm9qZWN0cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbn1cXG5cXG4uZWFjaFNpZGViYXJDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBvcGFjaXR5OiAwLjg7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEycHg7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEycHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGNvcmFsO1xcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIyNSwgMTI2KTtcXG59XFxuXFxuZGl2W2lkJD1cXFwiSGlnaFxcXCJdLCBkaXZbaWQkPVxcXCJIaWdoX0FsbFBhZ2VcXFwiXSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNTUsIDQxLCA0MSk7XFxufVxcblxcbmRpdltpZCQ9XFxcIk1lZGl1bVxcXCJdLCBkaXZbaWQkPVxcXCJNZWRpdW1fQWxsUGFnZVxcXCJdIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDI1NSwgMjM4LCAwKTtcXG59XFxuXFxuZGl2W2lkJD1cXFwiTG93XFxcIl0sIGRpdltpZCQ9XFxcIkxvd19BbGxQYWdlXFxcIl0ge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoNDMsIDIzMywgMCk7XFxufVxcblxcbmgzLmFkZGVkX3Byb2pfYm94IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTU5LCAyNDIpO1xcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMnM7XFxufVxcblxcbmRpdi5hZGRlZF90YXNrcyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTg5LCAxMDMpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3MCUgMzAlO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCA1dmgpIG1pbm1heCgyNSUsIDFmcik7XFxufVxcblxcbmRpdi5hZGRlZF90YXNrcyA+IGg0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuZGl2Lm5vd1lvdVNlZU1lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xcbn1cXG5cXG5kaXYuYWRkZWRfZHVlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG5kaXYudGFza19idXR0b25faG9sZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbmRpdi50YXNrX2J1dHRvbl9ob2xkZXIgPiBidXR0b24ge1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxufVxcblxcbmRpdi50aGVFeHBhbmRhYmxlcyB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICBtYXgtaGVpZ2h0OiAwdmg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE4OSwgMTAzKTtcXG5cXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIFxcbn1cXG5cXG5kaXYudGhlRXhwYW5kYWJsZXMuYWN0aXZlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgbWF4LWhlaWdodDogMTB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjU1LCAxMTAsIDIwNCk7XFxufSAqL1xcblxcbi8qIEJ1dHRvbiB1c2VkIHRvIG9wZW4gdGhlIGZvcm1zIC0gZml4ZWQgYXQgdGhlIGJvdHRvbSBvZiB0aGUgcGFnZSAqL1xcbi8qICNhZGRuZXcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDE2cHggMjBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG9wYWNpdHk6IDAuODtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMjNweDtcXG4gIHJpZ2h0OiAyOHB4O1xcbiAgd2lkdGg6IDEwdnc7XFxufVxcblxcbiNuZXdwcm9qX2J1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTZweCAyMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogMjNweDtcXG4gICAgbGVmdDogMjhweDtcXG4gICAgd2lkdGg6IDEwdnc7XFxufSAqL1xcblxcbi8qIFRoZSBwb3B1cCBmb3JtIC0gaGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4vKiAjdG9kb0Zvcm1Db250YWluZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAxNXB4O1xcbiAgYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTtcXG4gIHdpZHRoOiAxM3Z3O1xcbiAgei1pbmRleDogOTtcXG59XFxuXFxuI3Byb2pGb3JtQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDE1cHg7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmMWYxZjE7XFxuICAgIHdpZHRoOiAxM3Z3O1xcbiAgICB6LWluZGV4OiA5O1xcbiAgfVxcblxcbiNlZGl0Rm9ybUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICByaWdodDogYXV0bztcXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTtcXG4gICAgd2lkdGg6IDEzdnc7XFxuICAgIHotaW5kZXg6IDk7XFxuICB9XFxuICovXFxuLyogQWRkIHN0eWxlcyB0byB0aGUgZm9ybSBjb250YWluZXIgKi9cXG4vKiAjYWRkbmV3Zm9ybSwgI2FkZG5ld3Byb2pmb3JtIHtcXG4gIG1heC13aWR0aDogMzAwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbiNlZGl0Rm9ybSB7XFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn0gKi9cXG5cXG4vKiBGdWxsLXdpZHRoIGlucHV0IGZpZWxkcyAqL1xcbi8qICNhZGRuZXdmb3JtIGlucHV0W3R5cGU9dGV4dF0sICNhZGRuZXdwcm9qZm9ybSBpbnB1dFt0eXBlPXRleHRdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIG1hcmdpbjogNXB4IDAgMjJweCAwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcXG59XFxuXFxuI2VkaXRGb3JtIGlucHV0W3R5cGU9dGV4dF0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgbWFyZ2luOiA1cHggMCAyMnB4IDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcXG59ICovXFxuXFxuLyogV2hlbiB0aGUgaW5wdXRzIGdldCBmb2N1cywgZG8gc29tZXRoaW5nICovXFxuLyogI2FkZG5ld2Zvcm0gaW5wdXRbdHlwZT10ZXh0XTpmb2N1cywgI2FkZG5ld3Byb2pmb3JtIGlucHV0W3R5cGU9dGV4dF06Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufSAqL1xcblxcbi8qIFNldCBhIHN0eWxlIGZvciB0aGUgc3VibWl0L2xvZ2luIGJ1dHRvbiAqL1xcbi8qICNhZGRuZXdmb3JtIGJ1dHRvbiwgI2FkZG5ld3Byb2pmb3JtIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDRBQTZEO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMTZweCAyMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOjEwcHg7XFxuICBvcGFjaXR5OiAwLjg7XFxufSAqL1xcblxcbi8qIEFkZCBhIHJlZCBiYWNrZ3JvdW5kIGNvbG9yIHRvIHRoZSBjYW5jZWwgYnV0dG9uICovXFxuLyogI2FkZG5ld2Zvcm0gYnV0dG9uI2NhbmNlbF9idXR0b24sICNhZGRuZXdwcm9qZm9ybSBidXR0b24jbmV3cHJval9jYW5jZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn0gKi9cXG5cXG4vKiBBZGQgc29tZSBob3ZlciBlZmZlY3RzIHRvIGJ1dHRvbnMgKi9cXG4vKiAjYWRkbmV3Zm9ybSAgYnV0dG9uOmhvdmVyLCAjYWRkbmV3OmhvdmVyLCAjYWRkbmV3cHJvamZvcm0gYnV0dG9uOmhvdmVyLCAjbmV3cHJval9idXR0b246aG92ZXIge1xcbiAgb3BhY2l0eTogMTtcXG59ICovXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2Vi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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNJRzs7QUFFSCxvRUFBb0U7QUFDcEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRzs7QUFFSCx1Q0FBdUM7QUFDdkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBNkJFO0FBQ0YscUNBQXFDO0FBQ3JDOzs7Ozs7Ozs7O0dBVUc7O0FBRUgsNEJBQTRCO0FBQzVCOzs7Ozs7Ozs7Ozs7OztHQWNHOztBQUVILDRDQUE0QztBQUM1Qzs7O0dBR0c7O0FBRUgsNENBQTRDO0FBQzVDOzs7Ozs7Ozs7R0FTRzs7QUFFSCxvREFBb0Q7QUFDcEQ7O0dBRUc7O0FBRUgsc0NBQXNDO0FBQ3RDOztHQUVHXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4vKiBUcnlpbmcgbW9iaWxlIGZpcnN0IGRldiAqL1xcblxcbjpyb290IHtcXG4gICAgLS1wcmltYXJ5OiAjZjViMzE2O1xcbiAgICAtLXNlY29uZGFyeTogIzhkOGQ4ZDtcXG4gICAgLS10ZXJ0aWFyeTogIzY2NzI5MjtcXG4gICAgLS1xdWF0ZXJuYXJ5OiAjZDlkOWQ5O1xcbn1cXG5cXG5odG1sLCBib2R5LCAjb3ZlcmFsbFdyYXBwZXIge1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jYmFja2dyb3VuZENvdmVyU3R1ZmYge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuOCk7XFxuICAgIHotaW5kZXg6IDEyO1xcbn1cXG5cXG4jbm90QmFja2dyb3VuZENvdmVyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUlIDk1JTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNSUgNjUlO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tdGVydGlhcnkpO1xcbn1cXG5cXG4jaGVhZGVyLmRhcmstbW9kZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbiNoZWFkZXJJY29uSG9sZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuI3RvZ2dsZWRPbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNkYXJrQ291bnQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jaGVhZGVySWNvbkhvbGRlciBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMTFweDtcXG59XFxuXFxuI3NpZGViYXJOYW1lc09ubHkge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07ICovXFxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1xdWF0ZXJuYXJ5KTtcXG5cXG4gICAgZmxleDogMSAxIGF1dG87XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4jc2lkZWJhck5hbWVzT25seSA+IGRpdjpudGgtb2YtdHlwZSgyKSB7XFxuICAgIGRpc3BsYXk6bm9uZTtcXG59XFxuXFxuW2lkXj1cXFwiX2hJZERlTlxcXCJdIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS10ZXJ0aWFyeSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXF1YXRlcm5hcnkpO1xcbn1cXG5cXG4jY29udGVudC5kYXJrLW1vZGUsICNzaWRlYmFyTmFtZXNPbmx5LmRhcmstbW9kZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogdmFyKC0tcXVhdGVybmFyeSk7XFxufVxcblxcbiNhbGxUYXNrc0JveCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHotaW5kZXg6IDU7XFxufVxcblxcbmRpdi5hZGRlZF9wcm9qZWN0cyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG5kaXYuYWRkZWRfcHJvamVjdHMuZGFyay1tb2RlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB2YXIoLS1xdWF0ZXJuYXJ5KTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCB3aGl0ZTtcXG59XFxuXFxuZGl2I3N0b3BBbGxFbXB0eSB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5kaXYjc3RvcEFsbEVtcHR5ID4gaDIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuZGl2I3N0b3BBbGxFbXB0eSA+IGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDNweCByZ2IoMCwwLDAsMC42KTtcXG59XFxuXFxuZGl2I3N0b3BBbGxFbXB0eSA+IGJ1dHRvbi5kYXJrLW1vZGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHZhcigtLXF1YXRlcm5hcnkpO1xcbn1cXG5cXG5cXG4uZWFjaFNpZGViYXJDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgaGVpZ2h0OiA0MnB4O1xcbiAgICBvcGFjaXR5OiAwLjg7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRlcnRpYXJ5KTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCAycHggcmdiKDAsMCwwLDAuNik7XFxufVxcblxcbi5lYWNoU2lkZWJhckNvbnRhaW5lci5kYXJrLW1vZGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHZhcigtLXF1YXRlcm5hcnkpO1xcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDJweCByZ2JhKDE0MCwgMTQwLCAxNDAsIDAuNik7XFxufVxcblxcbmRpdi5zaWRlYmFyX05hbWVzIHtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgd2lkdGg6IDgwJTtcXG59XFxuXFxuZGl2LnNpZGViYXJfTmFtZV9lZGl0IHtcXG4gICAgZm9udC1zaXplOiAgY2xhbXAoMC4ycmVtLCAxcmVtLCAxLjFyZW0pO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogM3ZoO1xcbiAgICB3aWR0aDogM3ZoO1xcbiAgICB0b3A6IDNweDtcXG4gICAgcmlnaHQ6IDVweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmRpdi5zaWRlYmFyX05hbWVfcmVtb3ZlIHtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgwLjJyZW0sIDFyZW0sIDEuMXJlbSk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG4gICAgaGVpZ2h0OiAzdmg7XFxuICAgIHdpZHRoOiAzdmg7XFxuICAgIGJvdHRvbTogM3B4O1xcbiAgICByaWdodDogNXB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuZGl2W2lkJD1cXFwiSGlnaFxcXCJdLCBkaXZbaWQkPVxcXCJIaWdoX0FsbFBhZ2VcXFwiXSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNTUsIDEyMCwgMTIwKTtcXG59XFxuXFxuZGl2W2lkJD1cXFwiTWVkaXVtXFxcIl0sIGRpdltpZCQ9XFxcIk1lZGl1bV9BbGxQYWdlXFxcIl0ge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjU1LCAxOTMsIDM2KTtcXG59XFxuXFxuZGl2W2lkJD1cXFwiTG93XFxcIl0sIGRpdltpZCQ9XFxcIkxvd19BbGxQYWdlXFxcIl0ge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTI5LCAyNTAsIDMwKTtcXG59XFxuXFxuaDMuYWRkZWRfcHJval9ib3guZGFyay1tb2RlLCBkaXYuYWRkZWRfdGFza3MuZGFyay1tb2RlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB2YXIoLS1xdWF0ZXJuYXJ5KTtcXG59XFxuXFxuaDMuYWRkZWRfcHJval9ib3gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1xdWF0ZXJuYXJ5KTtcXG4gICAgbWluLWhlaWdodDogMzBweDtcXG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDJzO1xcbn1cXG5cXG5kaXYuYWRkZWRfdGFza3Mge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXF1YXRlcm5hcnkpO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MCUgNDAlO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCA1dmgpIG1pbm1heCgyNSUsIDFmcik7XFxufVxcblxcbmRpdi5hZGRlZF90YXNrcyA+IGg0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuZGl2Lm5vd1lvdVNlZU1lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbmRpdi5hZGRlZF9kdWUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbmRpdi50YXNrX2J1dHRvbl9ob2xkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuZGl2LnRhc2tfYnV0dG9uX2hvbGRlciA+IGJ1dHRvbiB7XFxuICAgIGhlaWdodDogMjJweDtcXG59XFxuXFxuZGl2LnRoZUV4cGFuZGFibGVzIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIG1heC1oZWlnaHQ6IDB2aDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgei1pbmRleDogLTE7XFxuXFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbiAgICBcXG59XFxuXFxuZGl2LnRoZUV4cGFuZGFibGVzLmFjdGl2ZSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIG1pbi1oZWlnaHQ6IDh2aDtcXG4gICAgbWF4LWhlaWdodDogbm9uZTtcXG4gICAgei1pbmRleDogMztcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjU1LCAxMTAsIDIwNCk7ICovXFxufVxcbi8qIEJ1dHRvbiB1c2VkIHRvIG9wZW4gdGhlIGZvcm1zIC0gZml4ZWQgYXQgdGhlIGJvdHRvbSBvZiB0aGUgcGFnZSAqL1xcblxcbiNidXR0b25Ib2xkZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG4gICAgYm90dG9tOiAyNXB4O1xcbiAgICByaWdodDogMjhweDtcXG4gICAgd2lkdGg6IDI3dnc7XFxufVxcbiNhZGRuZXcge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDRweCAycHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBvcGFjaXR5OiAwLjg7XFxuICAgIHdpZHRoOiAyN3Z3O1xcbn1cXG4gIFxcbiNuZXdwcm9qX2J1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogNHB4IDJweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgd2lkdGg6IDI3dnc7XFxufVxcblxcbi8qIFRoZSBwb3B1cCBmb3JtIC0gaGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4jdG9kb0Zvcm1Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDE1O1xcbn1cXG4gIFxcbiNwcm9qRm9ybUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgaGVpZ2h0OiA2MCU7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB6LWluZGV4OiAxNTtcXG59XFxuICBcXG4jZWRpdEZvcm1Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDE1O1xcbn1cXG5cXG4vKiBBZGQgc3R5bGVzIHRvIHRoZSBmb3JtIGNvbnRhaW5lciAqL1xcbiNhZGRuZXdmb3JtIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2FkZG5ld2Zvcm0uZGFyay1tb2RlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4jYWRkbmV3cHJvamZvcm0ge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2FkZG5ld3Byb2pmb3JtLmRhcmstbW9kZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuI2FkZG5ld2Zvcm0gPiBkaXY6bnRoLWNoaWxkKDQpLCAjYWRkbmV3Zm9ybSA+IGRpdjpudGgtY2hpbGQoNSkge1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuXFxuI2FkZG5ld2Zvcm0gPiBkaXY6bnRoLWNoaWxkKDMpIHtcXG4gICAgbWFyZ2luOiAzcHg7XFxufVxcblxcbiNhZGRuZXdmb3JtID4gZGl2Om50aC1jaGlsZCgzKSA+IGlucHV0LCAjYWRkbmV3Zm9ybSA+IGRpdjpudGgtY2hpbGQoNCkgPiBzZWxlY3Qge1xcbiAgICBtYXJnaW4tdG9wOiAzcHg7XFxufVxcbiAgXFxuI2VkaXRGb3JtIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2VkaXRGb3JtLmRhcmstbW9kZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuI2VkaXRGb3JtID4gZGl2Om50aC1jaGlsZCg0KSwgI2VkaXRGb3JtID4gZGl2Om50aC1jaGlsZCg1KSB7XFxuICAgIG1hcmdpbjogNHB4O1xcbn1cXG5cXG4jZWRpdEZvcm0gPiBkaXY6bnRoLWNoaWxkKDMpIHtcXG4gICAgbWFyZ2luOiAycHg7XFxufVxcblxcbiNlZGl0Rm9ybSA+IGRpdjpudGgtY2hpbGQoMykgPiBpbnB1dCwgI2VkaXRGb3JtID4gZGl2Om50aC1jaGlsZCg0KSA+IHNlbGVjdCB7XFxuICAgIG1hcmdpbi10b3A6IDNweDtcXG59XFxuICBcXG4gIC8qIEZ1bGwtd2lkdGggaW5wdXQgZmllbGRzICovXFxuI2FkZG5ld2Zvcm0gaW5wdXRbdHlwZT10ZXh0XSwgI2FkZG5ld2Zvcm0gdGV4dGFyZWEsICNlZGl0Rm9ybSBpbnB1dFt0eXBlPXRleHRdLCAjZWRpdEZvcm0gdGV4dGFyZWEge1xcbiAgICBmb250LWZhbWlseTogJ0pvc3QnLCBzYW5zLXNlcmlmO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBtYXJnaW46IDVweCAwIDhweCAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XFxufVxcblxcbiNhZGRuZXdwcm9qZm9ybSBpbnB1dFt0eXBlPXRleHRdLCAjZWRpdEZvcm0gaW5wdXRbdHlwZT10ZXh0XSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSm9zdCcsIHNhbnMtc2VyaWY7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIG1hcmdpbjogMTJweCAwIDEycHggMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xcbn1cXG5cXG4jYWRkbmV3Zm9ybSBpbnB1dFt0eXBlPXRleHRdOjpwbGFjZWhvbGRlciwgI2FkZG5ld3Byb2pmb3JtIGlucHV0W3R5cGU9dGV4dF06OnBsYWNlaG9sZGVyLCAjYWRkbmV3Zm9ybSB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIsICNlZGl0Rm9ybSBpbnB1dFt0eXBlPXRleHRdLCAjZWRpdEZvcm0gdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gICAgZm9udC1mYW1pbHk6ICdKb3N0Jywgc2Fucy1zZXJpZjtcXG59XFxuICBcXG4vKiBXaGVuIHRoZSBpbnB1dHMgZ2V0IGZvY3VzLCBkbyBzb21ldGhpbmcgKi9cXG4jYWRkbmV3Zm9ybSBpbnB1dFt0eXBlPXRleHRdOmZvY3VzLCAjYWRkbmV3cHJvamZvcm0gaW5wdXRbdHlwZT10ZXh0XTpmb2N1cywgI2FkZG5ld2Zvcm0gdGV4dGFyZWE6Zm9jdXMsICNlZGl0Rm9ybSBpbnB1dFt0eXBlPXRleHRdOmZvY3VzLCAjZWRpdEZvcm0gdGV4dGFyZWE6Zm9jdXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG4gIFxcbi8qIFNldCBhIHN0eWxlIGZvciB0aGUgc3VibWl0L2xvZ2luIGJ1dHRvbiAqL1xcbiNhZGRuZXdmb3JtIGJ1dHRvbiwgI2VkaXRGb3JtIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5KTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBwYWRkaW5nOiAxMnB4IDE1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbiAgICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbiNhZGRuZXdwcm9qZm9ybSBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeSk7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgcGFkZGluZzogMTJweCAxNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XFxuICAgIG9wYWNpdHk6IDAuODsgXFxufVxcbiAgXFxuLyogQWRkIGEgcmVkIGJhY2tncm91bmQgY29sb3IgdG8gdGhlIGNhbmNlbCBidXR0b24gKi9cXG4jYWRkbmV3Zm9ybSBidXR0b24jY2FuY2VsX2J1dHRvbiwgI2FkZG5ld3Byb2pmb3JtIGJ1dHRvbiNuZXdwcm9qX2NhbmNlbCwgI2VkaXRGb3JtIGJ1dHRvbiNjYW5jZWxFZGl0QnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcXVhdGVybmFyeSk7XFxufVxcbiAgXFxuLyogQWRkIHNvbWUgaG92ZXIgZWZmZWN0cyB0byBidXR0b25zICovXFxuI2FkZG5ld2Zvcm0gIGJ1dHRvbjpob3ZlciwgI2FkZG5ldzpob3ZlciwgI2FkZG5ld3Byb2pmb3JtIGJ1dHRvbjpob3ZlciwgI25ld3Byb2pfYnV0dG9uOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuaW5wdXQjdGl0bGUubmVlZHNGaWxsaW5nLCAjZGVzY3JpcHRpb24ubmVlZHNGaWxsaW5nIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxOSwgNTQsIDU0KTtcXG59XFxuXFxuc2VsZWN0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDE2cHggMjBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxufVxcblxcbmlucHV0LmRhcmstbW9kZSwgdGV4dGFyZWEuZGFyay1tb2RlLCBzZWxlY3QuZGFyay1tb2RlLFxcbiNhZGRuZXdmb3JtIGlucHV0W3R5cGU9dGV4dF0uZGFyay1tb2RlLCAjYWRkbmV3Zm9ybSB0ZXh0YXJlYS5kYXJrLW1vZGUsICNlZGl0Rm9ybSBpbnB1dFt0eXBlPXRleHRdLmRhcmstbW9kZSwgI2VkaXRGb3JtIHRleHRhcmVhLmRhcmstbW9kZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXF1YXRlcm5hcnkpO1xcbn1cXG5cXG4vKiBTY3JvbGxiYXIgKi9cXG5cXG4vKiB3aWR0aCAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDdweDtcXG59XFxuXFxuLyogVHJhY2sgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XFxufVxcblxcbi8qIEhhbmRsZSAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZDogcmdiKDE5MCwgMTkwLCAxOTApO1xcbn1cXG5cXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYigxMDMsIDEwMywgMTAzKTtcXG59XFxuXFxuLyogc21hbGwgdGFibGV0IHNpemVzICovXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjIwcHgpIHtcXG5cXG4gICAgZGl2I3N0b3BBbGxFbXB0eSB7XFxuICAgICAgICBwYWRkaW5nOiAxNXB4IDI1cHg7XFxuICAgIH1cXG4gICAgZGl2I3N0b3BBbGxFbXB0eSA+IGJ1dHRvbiB7XFxuICAgICAgICBoZWlnaHQ6IDUuMjV2aDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICB9XFxuICAgIC5lYWNoU2lkZWJhckNvbnRhaW5lciB7XFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XFxuICAgICAgICBvcGFjaXR5OiAwLjg7XFxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRlcnRpYXJ5KTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XFxuICAgICAgICBib3JkZXItcmlnaHQtc3R5bGU6IG5vbmU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAycHggMnB4IHJnYigwLDAsMCwwLjYpO1xcbiAgICB9XFxuICAgIGRpdi5hZGRlZF9wcm9qZWN0cyB7XFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgfVxcbiAgICBkaXYuYWRkZWRfdGFza3Mge1xcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICB9XFxuICAgIGRpdi50YXNrX2J1dHRvbl9ob2xkZXIgPiBidXR0b24ge1xcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB9XFxuICAgIGRpdi5zaWRlYmFyX05hbWVfZWRpdCB7XFxuICAgICAgICBmb250LXNpemU6IGNsYW1wKDAuNXJlbSwgMS4ycmVtLCAxLjRyZW0pO1xcbiAgICB9XFxuICAgIGRpdi5zaWRlYmFyX05hbWVfcmVtb3ZlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMC41cmVtLCAxLjJyZW0sIDEuNHJlbSk7XFxuICAgIH1cXG4gICAgZGl2LnNpZGViYXJfTmFtZXMge1xcbiAgICAgICAgd2lkdGg6IDkyJTtcXG4gICAgfVxcbiAgICBcXG59XFxuXFxuLyogbGFyZ2UgdGFibGV0ICYgbGFwdG9wIHNpemVzICovXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcXG4gICAgXFxufVxcblxcbi8qIGRlc2t0b3AgKi9cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gICAgXFxufVxcblxcbi8qTXkgaW5pdGlhbCBjb2RlIGJlbG93IGZvciBkZXNrdG9wKi9cXG5cXG4vKiBodG1sLCBib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNzaWRlYmFyTmFtZXNPbmx5IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogNXZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDNyZW07XFxuICAgIHdpZHRoOiAyNXZ3O1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIHBhZGRpbmctdG9wOiA1dmg7XFxuICAgIHdpZHRoOiA3NXZ3O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBjb3JhbDtcXG59XFxuXFxuI2FsbFRhc2tzQm94IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgei1pbmRleDogNTtcXG59XFxuXFxuZGl2LmFkZGVkX3Byb2plY3RzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxufVxcblxcbi5lYWNoU2lkZWJhckNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTJweDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTJweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgY29yYWw7XFxuICAgIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjI1LCAxMjYpO1xcbn1cXG5cXG5kaXZbaWQkPVxcXCJIaWdoXFxcIl0sIGRpdltpZCQ9XFxcIkhpZ2hfQWxsUGFnZVxcXCJdIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDI1NSwgNDEsIDQxKTtcXG59XFxuXFxuZGl2W2lkJD1cXFwiTWVkaXVtXFxcIl0sIGRpdltpZCQ9XFxcIk1lZGl1bV9BbGxQYWdlXFxcIl0ge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjU1LCAyMzgsIDApO1xcbn1cXG5cXG5kaXZbaWQkPVxcXCJMb3dcXFwiXSwgZGl2W2lkJD1cXFwiTG93X0FsbFBhZ2VcXFwiXSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig0MywgMjMzLCAwKTtcXG59XFxuXFxuaDMuYWRkZWRfcHJval9ib3gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxNTksIDI0Mik7XFxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XFxuICAgIHRyYW5zaXRpb246IGhlaWdodCAycztcXG59XFxuXFxuZGl2LmFkZGVkX3Rhc2tzIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxODksIDEwMyk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDcwJSAzMCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDV2aCkgbWlubWF4KDI1JSwgMWZyKTtcXG59XFxuXFxuZGl2LmFkZGVkX3Rhc2tzID4gaDQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5kaXYubm93WW91U2VlTWUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMSAvIDM7XFxufVxcblxcbmRpdi5hZGRlZF9kdWUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbmRpdi50YXNrX2J1dHRvbl9ob2xkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuZGl2LnRhc2tfYnV0dG9uX2hvbGRlciA+IGJ1dHRvbiB7XFxuICAgIGhlaWdodDogMjVweDtcXG59XFxuXFxuZGl2LnRoZUV4cGFuZGFibGVzIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIG1heC1oZWlnaHQ6IDB2aDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTg5LCAxMDMpO1xcblxcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgXFxufVxcblxcbmRpdi50aGVFeHBhbmRhYmxlcy5hY3RpdmUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBtYXgtaGVpZ2h0OiAxMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNTUsIDExMCwgMjA0KTtcXG59ICovXFxuXFxuLyogQnV0dG9uIHVzZWQgdG8gb3BlbiB0aGUgZm9ybXMgLSBmaXhlZCBhdCB0aGUgYm90dG9tIG9mIHRoZSBwYWdlICovXFxuLyogI2FkZG5ldyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMTZweCAyMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3BhY2l0eTogMC44O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAyM3B4O1xcbiAgcmlnaHQ6IDI4cHg7XFxuICB3aWR0aDogMTB2dztcXG59XFxuXFxuI25ld3Byb2pfYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxNnB4IDIwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBvcGFjaXR5OiAwLjg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiAyM3B4O1xcbiAgICBsZWZ0OiAyOHB4O1xcbiAgICB3aWR0aDogMTB2dztcXG59ICovXFxuXFxuLyogVGhlIHBvcHVwIGZvcm0gLSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xcbi8qICN0b2RvRm9ybUNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDE1cHg7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxO1xcbiAgd2lkdGg6IDEzdnc7XFxuICB6LWluZGV4OiA5O1xcbn1cXG5cXG4jcHJvakZvcm1Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMTVweDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTtcXG4gICAgd2lkdGg6IDEzdnc7XFxuICAgIHotaW5kZXg6IDk7XFxuICB9XFxuXFxuI2VkaXRGb3JtQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDA7XFxuICAgIHJpZ2h0OiBhdXRvO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxO1xcbiAgICB3aWR0aDogMTN2dztcXG4gICAgei1pbmRleDogOTtcXG4gIH1cXG4gKi9cXG4vKiBBZGQgc3R5bGVzIHRvIHRoZSBmb3JtIGNvbnRhaW5lciAqL1xcbi8qICNhZGRuZXdmb3JtLCAjYWRkbmV3cHJvamZvcm0ge1xcbiAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2VkaXRGb3JtIHtcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufSAqL1xcblxcbi8qIEZ1bGwtd2lkdGggaW5wdXQgZmllbGRzICovXFxuLyogI2FkZG5ld2Zvcm0gaW5wdXRbdHlwZT10ZXh0XSwgI2FkZG5ld3Byb2pmb3JtIGlucHV0W3R5cGU9dGV4dF0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgbWFyZ2luOiA1cHggMCAyMnB4IDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xcbn1cXG5cXG4jZWRpdEZvcm0gaW5wdXRbdHlwZT10ZXh0XSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBtYXJnaW46IDVweCAwIDIycHggMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xcbn0gKi9cXG5cXG4vKiBXaGVuIHRoZSBpbnB1dHMgZ2V0IGZvY3VzLCBkbyBzb21ldGhpbmcgKi9cXG4vKiAjYWRkbmV3Zm9ybSBpbnB1dFt0eXBlPXRleHRdOmZvY3VzLCAjYWRkbmV3cHJvamZvcm0gaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcbiAgb3V0bGluZTogbm9uZTtcXG59ICovXFxuXFxuLyogU2V0IGEgc3R5bGUgZm9yIHRoZSBzdWJtaXQvbG9naW4gYnV0dG9uICovXFxuLyogI2FkZG5ld2Zvcm0gYnV0dG9uLCAjYWRkbmV3cHJvamZvcm0gYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNEFBNkQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxNnB4IDIwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206MTBweDtcXG4gIG9wYWNpdHk6IDAuODtcXG59ICovXFxuXFxuLyogQWRkIGEgcmVkIGJhY2tncm91bmQgY29sb3IgdG8gdGhlIGNhbmNlbCBidXR0b24gKi9cXG4vKiAjYWRkbmV3Zm9ybSBidXR0b24jY2FuY2VsX2J1dHRvbiwgI2FkZG5ld3Byb2pmb3JtIGJ1dHRvbiNuZXdwcm9qX2NhbmNlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufSAqL1xcblxcbi8qIEFkZCBzb21lIGhvdmVyIGVmZmVjdHMgdG8gYnV0dG9ucyAqL1xcbi8qICNhZGRuZXdmb3JtICBidXR0b246aG92ZXIsICNhZGRuZXc6aG92ZXIsICNhZGRuZXdwcm9qZm9ybSBidXR0b246aG92ZXIsICNuZXdwcm9qX2J1dHRvbjpob3ZlciB7XFxuICBvcGFjaXR5OiAxO1xcbn0gKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIG9iamVjdCkge1xuICBpZiAodGFyZ2V0ID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhc3NpZ24gcmVxdWlyZXMgdGhhdCBpbnB1dCBwYXJhbWV0ZXIgbm90IGJlIG51bGwgb3IgdW5kZWZpbmVkJyk7XG4gIH1cblxuICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBvYmplY3QpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgICA7XG4gICAgICB0YXJnZXRbcHJvcGVydHldID0gb2JqZWN0W3Byb3BlcnR5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImltcG9ydCBhc3NpZ24gZnJvbSBcIi4uL2Fzc2lnbi9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xvbmVPYmplY3Qob2JqZWN0KSB7XG4gIHJldHVybiBhc3NpZ24oe30sIG9iamVjdCk7XG59IiwiaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uLy4uL2xvY2FsZS9lbi1VUy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdExvY2FsZTsiLCJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufSIsIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIHZhciB1dGNEYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsInZhciByb3VuZGluZ01hcCA9IHtcbiAgY2VpbDogTWF0aC5jZWlsLFxuICByb3VuZDogTWF0aC5yb3VuZCxcbiAgZmxvb3I6IE1hdGguZmxvb3IsXG4gIHRydW5jOiBmdW5jdGlvbiB0cnVuYyh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA8IDAgPyBNYXRoLmNlaWwodmFsdWUpIDogTWF0aC5mbG9vcih2YWx1ZSk7XG4gIH0gLy8gTWF0aC50cnVuYyBpcyBub3Qgc3VwcG9ydGVkIGJ5IElFXG5cbn07XG52YXIgZGVmYXVsdFJvdW5kaW5nTWV0aG9kID0gJ3RydW5jJztcbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3VuZGluZ01ldGhvZChtZXRob2QpIHtcbiAgcmV0dXJuIG1ldGhvZCA/IHJvdW5kaW5nTWFwW21ldGhvZF0gOiByb3VuZGluZ01hcFtkZWZhdWx0Um91bmRpbmdNZXRob2RdO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgY29tcGFyZUFzY1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAtMSwgMCBvciAxLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBhZnRlciB0aGUgc2Vjb25kLFxuICogLTEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYmVmb3JlIHRoZSBzZWNvbmQgb3IgMCBpZiBkYXRlcyBhcmUgZXF1YWwuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjb21wYXJlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY29tcGFyZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIHJlc3VsdCBvZiB0aGUgY29tcGFyaXNvblxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb21wYXJlIDExIEZlYnJ1YXJ5IDE5ODcgYW5kIDEwIEp1bHkgMTk4OTpcbiAqIGNvbnN0IHJlc3VsdCA9IGNvbXBhcmVBc2MobmV3IERhdGUoMTk4NywgMSwgMTEpLCBuZXcgRGF0ZSgxOTg5LCA2LCAxMCkpXG4gKiAvLz0+IC0xXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFNvcnQgdGhlIGFycmF5IG9mIGRhdGVzOlxuICogY29uc3QgcmVzdWx0ID0gW1xuICogICBuZXcgRGF0ZSgxOTk1LCA2LCAyKSxcbiAqICAgbmV3IERhdGUoMTk4NywgMSwgMTEpLFxuICogICBuZXcgRGF0ZSgxOTg5LCA2LCAxMClcbiAqIF0uc29ydChjb21wYXJlQXNjKVxuICogLy89PiBbXG4gKiAvLyAgIFdlZCBGZWIgMTEgMTk4NyAwMDowMDowMCxcbiAqIC8vICAgTW9uIEp1bCAxMCAxOTg5IDAwOjAwOjAwLFxuICogLy8gICBTdW4gSnVsIDAyIDE5OTUgMDA6MDA6MDBcbiAqIC8vIF1cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wYXJlQXNjKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgZGlmZiA9IGRhdGVMZWZ0LmdldFRpbWUoKSAtIGRhdGVSaWdodC5nZXRUaW1lKCk7XG5cbiAgaWYgKGRpZmYgPCAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2UgaWYgKGRpZmYgPiAwKSB7XG4gICAgcmV0dXJuIDE7IC8vIFJldHVybiAwIGlmIGRpZmYgaXMgMDsgcmV0dXJuIE5hTiBpZiBkaWZmIGlzIE5hTlxuICB9IGVsc2Uge1xuICAgIHJldHVybiBkaWZmO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRoc1xuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIG1vbnRocyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIG1vbnRocyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIG1vbnRoc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBtb250aHMgYXJlIGJldHdlZW4gMzEgSmFudWFyeSAyMDE0IGFuZCAxIFNlcHRlbWJlciAyMDE0P1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDgsIDEpLFxuICogICBuZXcgRGF0ZSgyMDE0LCAwLCAzMSlcbiAqIClcbiAqIC8vPT4gOFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgeWVhckRpZmYgPSBkYXRlTGVmdC5nZXRGdWxsWWVhcigpIC0gZGF0ZVJpZ2h0LmdldEZ1bGxZZWFyKCk7XG4gIHZhciBtb250aERpZmYgPSBkYXRlTGVmdC5nZXRNb250aCgpIC0gZGF0ZVJpZ2h0LmdldE1vbnRoKCk7XG4gIHJldHVybiB5ZWFyRGlmZiAqIDEyICsgbW9udGhEaWZmO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IG1pbGxpc2Vjb25kcyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTQgMTI6MzA6MjAuNjAwIGFuZCAyIEp1bHkgMjAxNCAxMjozMDoyMS43MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgMjEsIDcwMCksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgMjAsIDYwMClcbiAqIClcbiAqIC8vPT4gMTEwMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdG9EYXRlKGRhdGVMZWZ0KS5nZXRUaW1lKCkgLSB0b0RhdGUoZGF0ZVJpZ2h0KS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzL2luZGV4LmpzXCI7XG5pbXBvcnQgY29tcGFyZUFzYyBmcm9tIFwiLi4vY29tcGFyZUFzYy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBpc0xhc3REYXlPZk1vbnRoIGZyb20gXCIuLi9pc0xhc3REYXlPZk1vbnRoL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbk1vbnRoc1xuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGZ1bGwgbW9udGhzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgZnVsbCBtb250aHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMgdXNpbmcgdHJ1bmMgYXMgYSBkZWZhdWx0IHJvdW5kaW5nIG1ldGhvZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIGZ1bGwgbW9udGhzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGZ1bGwgbW9udGhzIGFyZSBiZXR3ZWVuIDMxIEphbnVhcnkgMjAxNCBhbmQgMSBTZXB0ZW1iZXIgMjAxND9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbk1vbnRocyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgbmV3IERhdGUoMjAxNCwgMCwgMzEpKVxuICogLy89PiA3XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluTW9udGhzKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgc2lnbiA9IGNvbXBhcmVBc2MoZGF0ZUxlZnQsIGRhdGVSaWdodCk7XG4gIHZhciBkaWZmZXJlbmNlID0gTWF0aC5hYnMoZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMoZGF0ZUxlZnQsIGRhdGVSaWdodCkpO1xuICB2YXIgcmVzdWx0OyAvLyBDaGVjayBmb3IgdGhlIGRpZmZlcmVuY2Ugb2YgbGVzcyB0aGFuIG1vbnRoXG5cbiAgaWYgKGRpZmZlcmVuY2UgPCAxKSB7XG4gICAgcmVzdWx0ID0gMDtcbiAgfSBlbHNlIHtcbiAgICBpZiAoZGF0ZUxlZnQuZ2V0TW9udGgoKSA9PT0gMSAmJiBkYXRlTGVmdC5nZXREYXRlKCkgPiAyNykge1xuICAgICAgLy8gVGhpcyB3aWxsIGNoZWNrIGlmIHRoZSBkYXRlIGlzIGVuZCBvZiBGZWIgYW5kIGFzc2lnbiBhIGhpZ2hlciBlbmQgb2YgbW9udGggZGF0ZVxuICAgICAgLy8gdG8gY29tcGFyZSBpdCB3aXRoIEphblxuICAgICAgZGF0ZUxlZnQuc2V0RGF0ZSgzMCk7XG4gICAgfVxuXG4gICAgZGF0ZUxlZnQuc2V0TW9udGgoZGF0ZUxlZnQuZ2V0TW9udGgoKSAtIHNpZ24gKiBkaWZmZXJlbmNlKTsgLy8gTWF0aC5hYnMoZGlmZiBpbiBmdWxsIG1vbnRocyAtIGRpZmYgaW4gY2FsZW5kYXIgbW9udGhzKSA9PT0gMSBpZiBsYXN0IGNhbGVuZGFyIG1vbnRoIGlzIG5vdCBmdWxsXG4gICAgLy8gSWYgc28sIHJlc3VsdCBtdXN0IGJlIGRlY3JlYXNlZCBieSAxIGluIGFic29sdXRlIHZhbHVlXG5cbiAgICB2YXIgaXNMYXN0TW9udGhOb3RGdWxsID0gY29tcGFyZUFzYyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSA9PT0gLXNpZ247IC8vIENoZWNrIGZvciBjYXNlcyBvZiBvbmUgZnVsbCBjYWxlbmRhciBtb250aFxuXG4gICAgaWYgKGlzTGFzdERheU9mTW9udGgodG9EYXRlKGRpcnR5RGF0ZUxlZnQpKSAmJiBkaWZmZXJlbmNlID09PSAxICYmIGNvbXBhcmVBc2MoZGlydHlEYXRlTGVmdCwgZGF0ZVJpZ2h0KSA9PT0gMSkge1xuICAgICAgaXNMYXN0TW9udGhOb3RGdWxsID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmVzdWx0ID0gc2lnbiAqIChkaWZmZXJlbmNlIC0gTnVtYmVyKGlzTGFzdE1vbnRoTm90RnVsbCkpO1xuICB9IC8vIFByZXZlbnQgbmVnYXRpdmUgemVyb1xuXG5cbiAgcmV0dXJuIHJlc3VsdCA9PT0gMCA/IDAgOiByZXN1bHQ7XG59IiwiaW1wb3J0IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0Um91bmRpbmdNZXRob2QgfSBmcm9tIFwiLi4vX2xpYi9yb3VuZGluZ01ldGhvZHMvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluU2Vjb25kc1xuICogQGNhdGVnb3J5IFNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2Ygc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5yb3VuZGluZ01ldGhvZD0ndHJ1bmMnXSAtIGEgcm91bmRpbmcgbWV0aG9kIChgY2VpbGAsIGBmbG9vcmAsIGByb3VuZGAgb3IgYHRydW5jYClcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2Ygc2Vjb25kc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBzZWNvbmRzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxNCAxMjozMDowNy45OTkgYW5kIDIgSnVseSAyMDE0IDEyOjMwOjIwLjAwMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJblNlY29uZHMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgMjAsIDApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDcsIDk5OSlcbiAqIClcbiAqIC8vPT4gMTJcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5TZWNvbmRzKGRhdGVMZWZ0LCBkYXRlUmlnaHQsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkaWZmID0gZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIC8gMTAwMDtcbiAgcmV0dXJuIGdldFJvdW5kaW5nTWV0aG9kKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5yb3VuZGluZ01ldGhvZCkoZGlmZik7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBlbmRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGVuZCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGVuZCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBlbmQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgZW5kIG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gZW5kT2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDIzOjU5OjU5Ljk5OVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVuZE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGVuZE9mTW9udGhcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGVuZCBvZiBhIG1vbnRoIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZW5kIG9mIGEgbW9udGggZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgZW5kIG9mIGEgbW9udGhcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgZW5kIG9mIGEgbW9udGggZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBlbmRPZk1vbnRoKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMzAgMjAxNCAyMzo1OTo1OS45OTlcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbmRPZk1vbnRoKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICBkYXRlLnNldEZ1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSwgbW9udGggKyAxLCAwKTtcbiAgZGF0ZS5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5pbXBvcnQgY29tcGFyZUFzYyBmcm9tIFwiLi4vY29tcGFyZUFzYy9pbmRleC5qc1wiO1xuaW1wb3J0IGRpZmZlcmVuY2VJbk1vbnRocyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluTW9udGhzL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlmZmVyZW5jZUluU2Vjb25kcyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluU2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uL19saWIvZGVmYXVsdExvY2FsZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgY2xvbmVPYmplY3QgZnJvbSBcIi4uL19saWIvY2xvbmVPYmplY3QvaW5kZXguanNcIjtcbmltcG9ydCBhc3NpZ24gZnJvbSBcIi4uL19saWIvYXNzaWduL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTlVURVNfSU5fREFZID0gMTQ0MDtcbnZhciBNSU5VVEVTX0lOX0FMTU9TVF9UV09fREFZUyA9IDI1MjA7XG52YXIgTUlOVVRFU19JTl9NT05USCA9IDQzMjAwO1xudmFyIE1JTlVURVNfSU5fVFdPX01PTlRIUyA9IDg2NDAwO1xuLyoqXG4gKiBAbmFtZSBmb3JtYXREaXN0YW5jZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzIGluIHdvcmRzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcyBpbiB3b3Jkcy5cbiAqXG4gKiB8IERpc3RhbmNlIGJldHdlZW4gZGF0ZXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUmVzdWx0ICAgICAgICAgICAgICB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8IDAgLi4uIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbGVzcyB0aGFuIGEgbWludXRlICB8XG4gKiB8IDMwIHNlY3MgLi4uIDEgbWluIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMSBtaW51dGUgICAgICAgICAgICB8XG4gKiB8IDEgbWluIDMwIHNlY3MgLi4uIDQ0IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWzIuLjQ0XSBtaW51dGVzICAgICB8XG4gKiB8IDQ0IG1pbnMgLi4uIDMwIHNlY3MgLi4uIDg5IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgMSBob3VyICAgICAgICB8XG4gKiB8IDg5IG1pbnMgMzAgc2VjcyAuLi4gMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgWzIuLjI0XSBob3VycyB8XG4gKiB8IDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDQxIGhycyA1OSBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgIHwgMSBkYXkgICAgICAgICAgICAgICB8XG4gKiB8IDQxIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDI5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAgICAgICAgIHwgWzIuLjMwXSBkYXlzICAgICAgICB8XG4gKiB8IDI5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gNDQgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIHwgYWJvdXQgMSBtb250aCAgICAgICB8XG4gKiB8IDQ0IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gNTkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIHwgYWJvdXQgMiBtb250aHMgICAgICB8XG4gKiB8IDU5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gMSB5ciAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWzIuLjEyXSBtb250aHMgICAgICB8XG4gKiB8IDEgeXIgLi4uIDEgeXIgMyBtb250aHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgMSB5ZWFyICAgICAgICB8XG4gKiB8IDEgeXIgMyBtb250aHMgLi4uIDEgeXIgOSBtb250aCBzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgb3ZlciAxIHllYXIgICAgICAgICB8XG4gKiB8IDEgeXIgOSBtb250aHMgLi4uIDIgeXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWxtb3N0IDIgeWVhcnMgICAgICB8XG4gKiB8IE4geXJzIC4uLiBOIHlycyAzIG1vbnRocyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgTiB5ZWFycyAgICAgICB8XG4gKiB8IE4geXJzIDMgbW9udGhzIC4uLiBOIHlycyA5IG1vbnRocyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgb3ZlciBOIHllYXJzICAgICAgICB8XG4gKiB8IE4geXJzIDkgbW9udGhzIC4uLiBOKzEgeXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWxtb3N0IE4rMSB5ZWFycyAgICB8XG4gKlxuICogV2l0aCBgb3B0aW9ucy5pbmNsdWRlU2Vjb25kcyA9PSB0cnVlYDpcbiAqIHwgRGlzdGFuY2UgYmV0d2VlbiBkYXRlcyB8IFJlc3VsdCAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgMCBzZWNzIC4uLiA1IHNlY3MgICAgICB8IGxlc3MgdGhhbiA1IHNlY29uZHMgIHxcbiAqIHwgNSBzZWNzIC4uLiAxMCBzZWNzICAgICB8IGxlc3MgdGhhbiAxMCBzZWNvbmRzIHxcbiAqIHwgMTAgc2VjcyAuLi4gMjAgc2VjcyAgICB8IGxlc3MgdGhhbiAyMCBzZWNvbmRzIHxcbiAqIHwgMjAgc2VjcyAuLi4gNDAgc2VjcyAgICB8IGhhbGYgYSBtaW51dGUgICAgICAgIHxcbiAqIHwgNDAgc2VjcyAuLi4gNjAgc2VjcyAgICB8IGxlc3MgdGhhbiBhIG1pbnV0ZSAgIHxcbiAqIHwgNjAgc2VjcyAuLi4gOTAgc2VjcyAgICB8IDEgbWludXRlICAgICAgICAgICAgIHxcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGJhc2VEYXRlIC0gdGhlIGRhdGUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuaW5jbHVkZVNlY29uZHM9ZmFsc2VdIC0gZGlzdGFuY2VzIGxlc3MgdGhhbiBhIG1pbnV0ZSBhcmUgbW9yZSBkZXRhaWxlZFxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5hZGRTdWZmaXg9ZmFsc2VdIC0gcmVzdWx0IGluZGljYXRlcyBpZiB0aGUgc2Vjb25kIGRhdGUgaXMgZWFybGllciBvciBsYXRlciB0aGFuIHRoZSBmaXJzdFxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZGlzdGFuY2UgaW4gd29yZHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBiYXNlRGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0RGlzdGFuY2VgIHByb3BlcnR5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gMiBKdWx5IDIwMTQgYW5kIDEgSmFudWFyeSAyMDE1P1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2UobmV3IERhdGUoMjAxNCwgNiwgMiksIG5ldyBEYXRlKDIwMTUsIDAsIDEpKVxuICogLy89PiAnNiBtb250aHMnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gMSBKYW51YXJ5IDIwMTUgMDA6MDA6MTVcbiAqIC8vIGFuZCAxIEphbnVhcnkgMjAxNSAwMDowMDowMCwgaW5jbHVkaW5nIHNlY29uZHM/XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZShcbiAqICAgbmV3IERhdGUoMjAxNSwgMCwgMSwgMCwgMCwgMTUpLFxuICogICBuZXcgRGF0ZSgyMDE1LCAwLCAxLCAwLCAwLCAwKSxcbiAqICAgeyBpbmNsdWRlU2Vjb25kczogdHJ1ZSB9XG4gKiApXG4gKiAvLz0+ICdsZXNzIHRoYW4gMjAgc2Vjb25kcydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgZnJvbSAxIEphbnVhcnkgMjAxNlxuICogLy8gdG8gMSBKYW51YXJ5IDIwMTUsIHdpdGggYSBzdWZmaXg/XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZShuZXcgRGF0ZSgyMDE1LCAwLCAxKSwgbmV3IERhdGUoMjAxNiwgMCwgMSksIHtcbiAqICAgYWRkU3VmZml4OiB0cnVlXG4gKiB9KVxuICogLy89PiAnYWJvdXQgMSB5ZWFyIGFnbydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAxIEF1Z3VzdCAyMDE2IGFuZCAxIEphbnVhcnkgMjAxNSBpbiBFc3BlcmFudG8/XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlKG5ldyBEYXRlKDIwMTYsIDcsIDEpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSwge1xuICogICBsb2NhbGU6IGVvTG9jYWxlXG4gKiB9KVxuICogLy89PiAncGxpIG9sIDEgamFybydcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZShkaXJ0eURhdGUsIGRpcnR5QmFzZURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9vcHRpb25zJGxvY2FsZTtcblxuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGxvY2FsZSA9IChfcmVmID0gKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5sb2NhbGUpICE9PSBudWxsICYmIF9vcHRpb25zJGxvY2FsZSAhPT0gdm9pZCAwID8gX29wdGlvbnMkbG9jYWxlIDogZGVmYXVsdE9wdGlvbnMubG9jYWxlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogZGVmYXVsdExvY2FsZTtcblxuICBpZiAoIWxvY2FsZS5mb3JtYXREaXN0YW5jZSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGZvcm1hdERpc3RhbmNlIHByb3BlcnR5Jyk7XG4gIH1cblxuICB2YXIgY29tcGFyaXNvbiA9IGNvbXBhcmVBc2MoZGlydHlEYXRlLCBkaXJ0eUJhc2VEYXRlKTtcblxuICBpZiAoaXNOYU4oY29tcGFyaXNvbikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0aW1lIHZhbHVlJyk7XG4gIH1cblxuICB2YXIgbG9jYWxpemVPcHRpb25zID0gYXNzaWduKGNsb25lT2JqZWN0KG9wdGlvbnMpLCB7XG4gICAgYWRkU3VmZml4OiBCb29sZWFuKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5hZGRTdWZmaXgpLFxuICAgIGNvbXBhcmlzb246IGNvbXBhcmlzb25cbiAgfSk7XG4gIHZhciBkYXRlTGVmdDtcbiAgdmFyIGRhdGVSaWdodDtcblxuICBpZiAoY29tcGFyaXNvbiA+IDApIHtcbiAgICBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eUJhc2VEYXRlKTtcbiAgICBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICAgIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eUJhc2VEYXRlKTtcbiAgfVxuXG4gIHZhciBzZWNvbmRzID0gZGlmZmVyZW5jZUluU2Vjb25kcyhkYXRlUmlnaHQsIGRhdGVMZWZ0KTtcbiAgdmFyIG9mZnNldEluU2Vjb25kcyA9IChnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGVSaWdodCkgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGVMZWZ0KSkgLyAxMDAwO1xuICB2YXIgbWludXRlcyA9IE1hdGgucm91bmQoKHNlY29uZHMgLSBvZmZzZXRJblNlY29uZHMpIC8gNjApO1xuICB2YXIgbW9udGhzOyAvLyAwIHVwIHRvIDIgbWluc1xuXG4gIGlmIChtaW51dGVzIDwgMikge1xuICAgIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmluY2x1ZGVTZWNvbmRzKSB7XG4gICAgICBpZiAoc2Vjb25kcyA8IDUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnbGVzc1RoYW5YU2Vjb25kcycsIDUsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKHNlY29uZHMgPCAxMCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdsZXNzVGhhblhTZWNvbmRzJywgMTAsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKHNlY29uZHMgPCAyMCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdsZXNzVGhhblhTZWNvbmRzJywgMjAsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKHNlY29uZHMgPCA0MCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdoYWxmQU1pbnV0ZScsIDAsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKHNlY29uZHMgPCA2MCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdsZXNzVGhhblhNaW51dGVzJywgMSwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hNaW51dGVzJywgMSwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG1pbnV0ZXMgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnbGVzc1RoYW5YTWludXRlcycsIDEsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4TWludXRlcycsIG1pbnV0ZXMsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9XG4gICAgfSAvLyAyIG1pbnMgdXAgdG8gMC43NSBocnNcblxuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCA0NSkge1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hNaW51dGVzJywgbWludXRlcywgbG9jYWxpemVPcHRpb25zKTsgLy8gMC43NSBocnMgdXAgdG8gMS41IGhyc1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCA5MCkge1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2Fib3V0WEhvdXJzJywgMSwgbG9jYWxpemVPcHRpb25zKTsgLy8gMS41IGhycyB1cCB0byAyNCBocnNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgTUlOVVRFU19JTl9EQVkpIHtcbiAgICB2YXIgaG91cnMgPSBNYXRoLnJvdW5kKG1pbnV0ZXMgLyA2MCk7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnYWJvdXRYSG91cnMnLCBob3VycywgbG9jYWxpemVPcHRpb25zKTsgLy8gMSBkYXkgdXAgdG8gMS43NSBkYXlzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IE1JTlVURVNfSU5fQUxNT1NUX1RXT19EQVlTKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneERheXMnLCAxLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAxLjc1IGRheXMgdXAgdG8gMzAgZGF5c1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCBNSU5VVEVTX0lOX01PTlRIKSB7XG4gICAgdmFyIGRheXMgPSBNYXRoLnJvdW5kKG1pbnV0ZXMgLyBNSU5VVEVTX0lOX0RBWSk7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneERheXMnLCBkYXlzLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAxIG1vbnRoIHVwIHRvIDIgbW9udGhzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IE1JTlVURVNfSU5fVFdPX01PTlRIUykge1xuICAgIG1vbnRocyA9IE1hdGgucm91bmQobWludXRlcyAvIE1JTlVURVNfSU5fTU9OVEgpO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2Fib3V0WE1vbnRocycsIG1vbnRocywgbG9jYWxpemVPcHRpb25zKTtcbiAgfVxuXG4gIG1vbnRocyA9IGRpZmZlcmVuY2VJbk1vbnRocyhkYXRlUmlnaHQsIGRhdGVMZWZ0KTsgLy8gMiBtb250aHMgdXAgdG8gMTIgbW9udGhzXG5cbiAgaWYgKG1vbnRocyA8IDEyKSB7XG4gICAgdmFyIG5lYXJlc3RNb250aCA9IE1hdGgucm91bmQobWludXRlcyAvIE1JTlVURVNfSU5fTU9OVEgpO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hNb250aHMnLCBuZWFyZXN0TW9udGgsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDEgeWVhciB1cCB0byBtYXggRGF0ZVxuICB9IGVsc2Uge1xuICAgIHZhciBtb250aHNTaW5jZVN0YXJ0T2ZZZWFyID0gbW9udGhzICUgMTI7XG4gICAgdmFyIHllYXJzID0gTWF0aC5mbG9vcihtb250aHMgLyAxMik7IC8vIE4geWVhcnMgdXAgdG8gMSB5ZWFycyAzIG1vbnRoc1xuXG4gICAgaWYgKG1vbnRoc1NpbmNlU3RhcnRPZlllYXIgPCAzKSB7XG4gICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdhYm91dFhZZWFycycsIHllYXJzLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyBOIHllYXJzIDMgbW9udGhzIHVwIHRvIE4geWVhcnMgOSBtb250aHNcbiAgICB9IGVsc2UgaWYgKG1vbnRoc1NpbmNlU3RhcnRPZlllYXIgPCA5KSB7XG4gICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdvdmVyWFllYXJzJywgeWVhcnMsIGxvY2FsaXplT3B0aW9ucyk7IC8vIE4geWVhcnMgOSBtb250aHMgdXAgdG8gTiB5ZWFyIDEyIG1vbnRoc1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdhbG1vc3RYWWVhcnMnLCB5ZWFycyArIDEsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IGRpc3RhbmNlSW5Xb3JkcyBmcm9tIFwiLi4vZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgZm9ybWF0RGlzdGFuY2VUb05vd1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGdpdmVuIGRhdGUgYW5kIG5vdyBpbiB3b3Jkcy5cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGdpdmVuIGRhdGUgYW5kIG5vdyBpbiB3b3Jkcy5cbiAqXG4gKiB8IERpc3RhbmNlIHRvIG5vdyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUmVzdWx0ICAgICAgICAgICAgICB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8IDAgLi4uIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbGVzcyB0aGFuIGEgbWludXRlICB8XG4gKiB8IDMwIHNlY3MgLi4uIDEgbWluIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMSBtaW51dGUgICAgICAgICAgICB8XG4gKiB8IDEgbWluIDMwIHNlY3MgLi4uIDQ0IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWzIuLjQ0XSBtaW51dGVzICAgICB8XG4gKiB8IDQ0IG1pbnMgLi4uIDMwIHNlY3MgLi4uIDg5IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgMSBob3VyICAgICAgICB8XG4gKiB8IDg5IG1pbnMgMzAgc2VjcyAuLi4gMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgWzIuLjI0XSBob3VycyB8XG4gKiB8IDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDQxIGhycyA1OSBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgIHwgMSBkYXkgICAgICAgICAgICAgICB8XG4gKiB8IDQxIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDI5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAgICAgICAgIHwgWzIuLjMwXSBkYXlzICAgICAgICB8XG4gKiB8IDI5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gNDQgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIHwgYWJvdXQgMSBtb250aCAgICAgICB8XG4gKiB8IDQ0IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gNTkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIHwgYWJvdXQgMiBtb250aHMgICAgICB8XG4gKiB8IDU5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gMSB5ciAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWzIuLjEyXSBtb250aHMgICAgICB8XG4gKiB8IDEgeXIgLi4uIDEgeXIgMyBtb250aHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgMSB5ZWFyICAgICAgICB8XG4gKiB8IDEgeXIgMyBtb250aHMgLi4uIDEgeXIgOSBtb250aCBzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgb3ZlciAxIHllYXIgICAgICAgICB8XG4gKiB8IDEgeXIgOSBtb250aHMgLi4uIDIgeXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWxtb3N0IDIgeWVhcnMgICAgICB8XG4gKiB8IE4geXJzIC4uLiBOIHlycyAzIG1vbnRocyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgTiB5ZWFycyAgICAgICB8XG4gKiB8IE4geXJzIDMgbW9udGhzIC4uLiBOIHlycyA5IG1vbnRocyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgb3ZlciBOIHllYXJzICAgICAgICB8XG4gKiB8IE4geXJzIDkgbW9udGhzIC4uLiBOKzEgeXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWxtb3N0IE4rMSB5ZWFycyAgICB8XG4gKlxuICogV2l0aCBgb3B0aW9ucy5pbmNsdWRlU2Vjb25kcyA9PSB0cnVlYDpcbiAqIHwgRGlzdGFuY2UgdG8gbm93ICAgICB8IFJlc3VsdCAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgMCBzZWNzIC4uLiA1IHNlY3MgICB8IGxlc3MgdGhhbiA1IHNlY29uZHMgIHxcbiAqIHwgNSBzZWNzIC4uLiAxMCBzZWNzICB8IGxlc3MgdGhhbiAxMCBzZWNvbmRzIHxcbiAqIHwgMTAgc2VjcyAuLi4gMjAgc2VjcyB8IGxlc3MgdGhhbiAyMCBzZWNvbmRzIHxcbiAqIHwgMjAgc2VjcyAuLi4gNDAgc2VjcyB8IGhhbGYgYSBtaW51dGUgICAgICAgIHxcbiAqIHwgNDAgc2VjcyAuLi4gNjAgc2VjcyB8IGxlc3MgdGhhbiBhIG1pbnV0ZSAgIHxcbiAqIHwgNjAgc2VjcyAuLi4gOTAgc2VjcyB8IDEgbWludXRlICAgICAgICAgICAgIHxcbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBnaXZlbiBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gdGhlIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuaW5jbHVkZVNlY29uZHM9ZmFsc2VdIC0gZGlzdGFuY2VzIGxlc3MgdGhhbiBhIG1pbnV0ZSBhcmUgbW9yZSBkZXRhaWxlZFxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5hZGRTdWZmaXg9ZmFsc2VdIC0gcmVzdWx0IHNwZWNpZmllcyBpZiBub3cgaXMgZWFybGllciBvciBsYXRlciB0aGFuIHRoZSBwYXNzZWQgZGF0ZVxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZGlzdGFuY2UgaW4gd29yZHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdERpc3RhbmNlYCBwcm9wZXJ0eVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAxIEphbnVhcnkgMjAxNSwgd2hhdCBpcyB0aGUgZGlzdGFuY2UgdG8gMiBKdWx5IDIwMTQ/XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZVRvTm93KFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyKVxuICogKVxuICogLy89PiAnNiBtb250aHMnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIG5vdyBpcyAxIEphbnVhcnkgMjAxNSAwMDowMDowMCxcbiAqIC8vIHdoYXQgaXMgdGhlIGRpc3RhbmNlIHRvIDEgSmFudWFyeSAyMDE1IDAwOjAwOjE1LCBpbmNsdWRpbmcgc2Vjb25kcz9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlVG9Ob3coXG4gKiAgIG5ldyBEYXRlKDIwMTUsIDAsIDEsIDAsIDAsIDE1KSxcbiAqICAge2luY2x1ZGVTZWNvbmRzOiB0cnVlfVxuICogKVxuICogLy89PiAnbGVzcyB0aGFuIDIwIHNlY29uZHMnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDEgSmFudWFyeSAyMDE1LFxuICogLy8gd2hhdCBpcyB0aGUgZGlzdGFuY2UgdG8gMSBKYW51YXJ5IDIwMTYsIHdpdGggYSBzdWZmaXg/XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZVRvTm93KFxuICogICBuZXcgRGF0ZSgyMDE2LCAwLCAxKSxcbiAqICAge2FkZFN1ZmZpeDogdHJ1ZX1cbiAqIClcbiAqIC8vPT4gJ2luIGFib3V0IDEgeWVhcidcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMSBKYW51YXJ5IDIwMTUsXG4gKiAvLyB3aGF0IGlzIHRoZSBkaXN0YW5jZSB0byAxIEF1Z3VzdCAyMDE2IGluIEVzcGVyYW50bz9cbiAqIGNvbnN0IGVvTG9jYWxlID0gcmVxdWlyZSgnZGF0ZS1mbnMvbG9jYWxlL2VvJylcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlVG9Ob3coXG4gKiAgIG5ldyBEYXRlKDIwMTYsIDcsIDEpLFxuICogICB7bG9jYWxlOiBlb0xvY2FsZX1cbiAqIClcbiAqIC8vPT4gJ3BsaSBvbCAxIGphcm8nXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlVG9Ob3coZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gZGlzdGFuY2VJbldvcmRzKGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSwgb3B0aW9ucyk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgZW5kT2ZEYXkgZnJvbSBcIi4uL2VuZE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgZW5kT2ZNb250aCBmcm9tIFwiLi4vZW5kT2ZNb250aC9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNMYXN0RGF5T2ZNb250aFxuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRoZSBsYXN0IGRheSBvZiBhIG1vbnRoP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdGhlIGxhc3QgZGF5IG9mIGEgbW9udGg/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdGhlIGxhc3QgZGF5IG9mIGEgbW9udGhcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJcyAyOCBGZWJydWFyeSAyMDE0IHRoZSBsYXN0IGRheSBvZiBhIG1vbnRoP1xuICogY29uc3QgcmVzdWx0ID0gaXNMYXN0RGF5T2ZNb250aChuZXcgRGF0ZSgyMDE0LCAxLCAyOCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0xhc3REYXlPZk1vbnRoKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgcmV0dXJuIGVuZE9mRGF5KGRhdGUpLmdldFRpbWUoKSA9PT0gZW5kT2ZNb250aChkYXRlKS5nZXRUaW1lKCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAvLyBUT0RPOiBSZW1vdmUgU3RyaW5nKClcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgdmFyIGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlJbmRleCwgb3B0aW9ucykge1xuICAgIHZhciBjb250ZXh0ID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5jb250ZXh0ID8gU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgOiAnc3RhbmRhbG9uZSc7XG4gICAgdmFyIHZhbHVlc0FycmF5O1xuXG4gICAgaWYgKGNvbnRleHQgPT09ICdmb3JtYXR0aW5nJyAmJiBhcmdzLmZvcm1hdHRpbmdWYWx1ZXMpIHtcbiAgICAgIHZhciBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRGb3JtYXR0aW5nV2lkdGggfHwgYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YXIgd2lkdGggPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogZGVmYXVsdFdpZHRoO1xuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2RlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YXIgX3dpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MudmFsdWVzW193aWR0aF0gfHwgYXJncy52YWx1ZXNbX2RlZmF1bHRXaWR0aF07XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gYXJncy5hcmd1bWVudENhbGxiYWNrID8gYXJncy5hcmd1bWVudENhbGxiYWNrKGRpcnR5SW5kZXgpIDogZGlydHlJbmRleDsgLy8gQHRzLWlnbm9yZTogRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsZW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcblxuICAgIHJldHVybiB2YWx1ZXNBcnJheVtpbmRleF07XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaEZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICB2YXIgbWF0Y2hQYXR0ZXJuID0gd2lkdGggJiYgYXJncy5tYXRjaFBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKG1hdGNoUGF0dGVybik7XG5cbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVBhdHRlcm5zID0gd2lkdGggJiYgYXJncy5wYXJzZVBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLnBhcnNlUGF0dGVybnNbYXJncy5kZWZhdWx0UGFyc2VXaWR0aF07XG4gICAgdmFyIGtleSA9IEFycmF5LmlzQXJyYXkocGFyc2VQYXR0ZXJucykgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSkgOiBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pO1xuICAgIHZhciB2YWx1ZTtcbiAgICB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhrZXkpIDoga2V5O1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwcmVkaWNhdGUob2JqZWN0W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSA9IDA7IGtleSA8IGFycmF5Lmxlbmd0aDsga2V5KyspIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuICAgIGlmICghcGFyc2VSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhwYXJzZVJlc3VsdFswXSkgOiBwYXJzZVJlc3VsdFswXTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufSIsInZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIHNlY29uZCcsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMSBzZWNvbmQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnaGFsZiBhIG1pbnV0ZScsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBtaW51dGUnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEgbWludXRlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgaG91cicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEgaG91cicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSBkYXknLFxuICAgIG90aGVyOiAne3tjb3VudH19IGRheXMnXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB3ZWVrJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSB3ZWVrJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBtb250aCcsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiAnMSBtb250aCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEgeWVhcicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICdvdmVyIDEgeWVhcicsXG4gICAgb3RoZXI6ICdvdmVyIHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnYWxtb3N0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhbG1vc3Qge3tjb3VudH19IHllYXJzJ1xuICB9XG59O1xuXG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG5cbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIGNvdW50LnRvU3RyaW5nKCkpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ2luICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAnIGFnbyc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdERpc3RhbmNlOyIsImltcG9ydCBidWlsZEZvcm1hdExvbmdGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qc1wiO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiAnRUVFRSwgTU1NTSBkbywgeScsXG4gIGxvbmc6ICdNTU1NIGRvLCB5JyxcbiAgbWVkaXVtOiAnTU1NIGQsIHknLFxuICBzaG9ydDogJ01NL2RkL3l5eXknXG59O1xudmFyIHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiAnaDptbTpzcyBhIHp6enonLFxuICBsb25nOiAnaDptbTpzcyBhIHonLFxuICBtZWRpdW06ICdoOm1tOnNzIGEnLFxuICBzaG9ydDogJ2g6bW0gYSdcbn07XG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogJ3t7ZGF0ZX19LCB7e3RpbWV9fScsXG4gIHNob3J0OiAne3tkYXRlfX0sIHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRMb25nOyIsInZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6ICdQJ1xufTtcblxudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gZm9ybWF0UmVsYXRpdmUodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSB7XG4gIHJldHVybiBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXRSZWxhdGl2ZTsiLCJpbXBvcnQgYnVpbGRMb2NhbGl6ZUZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0InLCAnQSddLFxuICBhYmJyZXZpYXRlZDogWydCQycsICdBRCddLFxuICB3aWRlOiBbJ0JlZm9yZSBDaHJpc3QnLCAnQW5ubyBEb21pbmknXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydRMScsICdRMicsICdRMycsICdRNCddLFxuICB3aWRlOiBbJzFzdCBxdWFydGVyJywgJzJuZCBxdWFydGVyJywgJzNyZCBxdWFydGVyJywgJzR0aCBxdWFydGVyJ11cbn07IC8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cblxudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcbiAgd2lkZTogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddLFxuICBzaG9ydDogWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddLFxuICBhYmJyZXZpYXRlZDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAgd2lkZTogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfVxufTtcblxudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTsgLy8gSWYgb3JkaW5hbCBudW1iZXJzIGRlcGVuZCBvbiBjb250ZXh0LCBmb3IgZXhhbXBsZSxcbiAgLy8gaWYgdGhleSBhcmUgZGlmZmVyZW50IGZvciBkaWZmZXJlbnQgZ3JhbW1hdGljYWwgZ2VuZGVycyxcbiAgLy8gdXNlIGBvcHRpb25zLnVuaXRgLlxuICAvL1xuICAvLyBgdW5pdGAgY2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXRlJywgJ2RheU9mWWVhcicsXG4gIC8vICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJy5cblxuICB2YXIgcmVtMTAwID0gbnVtYmVyICUgMTAwO1xuXG4gIGlmIChyZW0xMDAgPiAyMCB8fCByZW0xMDAgPCAxMCkge1xuICAgIHN3aXRjaCAocmVtMTAwICUgMTApIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdzdCc7XG5cbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICduZCc7XG5cbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdyZCc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bWJlciArICd0aCc7XG59O1xuXG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gYXJndW1lbnRDYWxsYmFjayhxdWFydGVyKSB7XG4gICAgICByZXR1cm4gcXVhcnRlciAtIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGl6ZTsiLCJpbXBvcnQgYnVpbGRNYXRjaEZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qc1wiO1xuaW1wb3J0IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2k7XG52YXIgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG52YXIgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihifGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihiXFwuP1xccz9jXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuPykvaSxcbiAgd2lkZTogL14oYmVmb3JlIGNocmlzdHxiZWZvcmUgY29tbW9uIGVyYXxhbm5vIGRvbWluaXxjb21tb24gZXJhKS9pXG59O1xudmFyIHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9eYi9pLCAvXihhfGMpL2ldXG59O1xudmFyIG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXnFbMTIzNF0vaSxcbiAgd2lkZTogL15bMTIzNF0odGh8c3R8bmR8cmQpPyBxdWFydGVyL2lcbn07XG52YXIgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldXG59O1xudmFyIG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15qL2ksIC9eZi9pLCAvXm0vaSwgL15hL2ksIC9ebS9pLCAvXmovaSwgL15qL2ksIC9eYS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV0sXG4gIGFueTogWy9eamEvaSwgL15mL2ksIC9ebWFyL2ksIC9eYXAvaSwgL15tYXkvaSwgL15qdW4vaSwgL15qdWwvaSwgL15hdS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV1cbn07XG52YXIgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltzbXR3Zl0vaSxcbiAgc2hvcnQ6IC9eKHN1fG1vfHR1fHdlfHRofGZyfHNhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oc3VufG1vbnx0dWV8d2VkfHRodXxmcml8c2F0KS9pLFxuICB3aWRlOiAvXihzdW5kYXl8bW9uZGF5fHR1ZXNkYXl8d2VkbmVzZGF5fHRodXJzZGF5fGZyaWRheXxzYXR1cmRheSkvaVxufTtcbnZhciBwYXJzZURheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXnMvaSwgL15tL2ksIC9edC9pLCAvXncvaSwgL150L2ksIC9eZi9pLCAvXnMvaV0sXG4gIGFueTogWy9ec3UvaSwgL15tL2ksIC9edHUvaSwgL153L2ksIC9edGgvaSwgL15mL2ksIC9ec2EvaV1cbn07XG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2lcbn07XG52YXIgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pXG4gIH1cbn07XG52YXIgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnYW55JyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IG1hdGNoOyIsImltcG9ydCBmb3JtYXREaXN0YW5jZSBmcm9tIFwiLi9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0TG9uZyBmcm9tIFwiLi9fbGliL2Zvcm1hdExvbmcvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRSZWxhdGl2ZSBmcm9tIFwiLi9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9jYWxpemUgZnJvbSBcIi4vX2xpYi9sb2NhbGl6ZS9pbmRleC5qc1wiO1xuaW1wb3J0IG1hdGNoIGZyb20gXCIuL19saWIvbWF0Y2gvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAdHlwZSB7TG9jYWxlfVxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlIChVbml0ZWQgU3RhdGVzKS5cbiAqIEBsYW5ndWFnZSBFbmdsaXNoXG4gKiBAaXNvLTYzOS0yIGVuZ1xuICogQGF1dGhvciBTYXNoYSBLb3NzIFtAa29zc25vY29ycF17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2tvc3Nub2NvcnB9XG4gKiBAYXV0aG9yIExlc2hhIEtvc3MgW0BsZXNoYWtvc3Nde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9sZXNoYWtvc3N9XG4gKi9cbnZhciBsb2NhbGUgPSB7XG4gIGNvZGU6ICdlbi1VUycsXG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogbG9jYWxpemUsXG4gIG1hdGNoOiBtYXRjaCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMFxuICAgIC8qIFN1bmRheSAqL1xuICAgICxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDFcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGZvcm1hdERpc3RhbmNlVG9Ob3cgfSBmcm9tICdkYXRlLWZucyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qVG9TaWRlKHgpIHtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyXCIpO1xuICAgIGNvbnN0IHNpZGViYXJOYW1lcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhck5hbWVzT25seVwiKTtcbiAgICBjb25zdCBzaWRlYmFySG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0b0FkZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGVkaXRQcm9qTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbmFtZVJlbW92ZVByb2ogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRvQWRkUHJvaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbmV3UHJvakJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBcbiAgICBcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXJrQ291bnRcIikuaW5uZXJIVE1MICUgMiA9PT0gMCkge1xuICAgICAgICBzaWRlYmFySG9sZGVyLmNsYXNzTmFtZSA9IFwiZWFjaFNpZGViYXJDb250YWluZXIgZGFyay1tb2RlXCJcbiAgICB9IGVsc2Uge1xuICAgICAgICBzaWRlYmFySG9sZGVyLmNsYXNzTmFtZSA9IFwiZWFjaFNpZGViYXJDb250YWluZXJcIjtcbiAgICB9ICAgXG4gICAgXG5cbiAgICB0b0FkZE5hbWUuY2xhc3NOYW1lID0gXCJzaWRlYmFyX05hbWVzXCI7XG4gICAgdG9BZGROYW1lLmlkID0geC5wcm9qTmFtZSArIFwic2lkZU5hbWVcIjtcbiAgICB0b0FkZE5hbWUuaW5uZXJIVE1MID0geC5wcm9qTmFtZTtcblxuICAgIG5hbWVSZW1vdmVQcm9qLmNsYXNzTmFtZSA9IFwic2lkZWJhcl9OYW1lX3JlbW92ZVwiO1xuICAgIG5hbWVSZW1vdmVQcm9qLmlkID0geC5wcm9qTmFtZSArIFwicmVtb3Zlc2VsZlwiO1xuICAgIG5hbWVSZW1vdmVQcm9qLmlubmVySFRNTCA9IFwiPGkgY2xhc3M9J2ZhLXJlZ3VsYXIgZmEtdHJhc2gtY2FuJz48L2k+XCI7XG5cbiAgICBlZGl0UHJvak5hbWUuY2xhc3NOYW1lID0gXCJzaWRlYmFyX05hbWVfZWRpdFwiO1xuICAgIGVkaXRQcm9qTmFtZS5pZCA9IHgucHJvak5hbWUgKyBcImVkaXRzZWxmXCI7XG4gICAgZWRpdFByb2pOYW1lLmlubmVySFRNTCA9IFwiPGkgY2xhc3M9J2ZhLXJlZ3VsYXIgZmEtcGVuLXRvLXNxdWFyZSc+PC9pPlwiO1xuXG4gICAgdG9BZGRQcm9qLmNsYXNzTmFtZSA9IFwiYWRkZWRfcHJvamVjdHNcIjtcbiAgICB0b0FkZFByb2ouaWQgPSB4LnByb2pOYW1lO1xuICAgIHRvQWRkUHJvai5pbm5lckhUTUwgPSB4LnByb2pOYW1lO1xuXG4gICAgbmV3UHJvakJveC5jbGFzc05hbWUgPSBcImFkZGVkX3Byb2pfYm94XCI7XG4gICAgbmV3UHJvakJveC5pZCA9IHgucHJvak5hbWUgKyBcImJveFwiO1xuXG4gICAgc2lkZWJhck5hbWVzLmFwcGVuZENoaWxkKHNpZGViYXJIb2xkZXIpO1xuICAgIHNpZGViYXJIb2xkZXIuYXBwZW5kQ2hpbGQodG9BZGROYW1lKTtcbiAgICBzaWRlYmFySG9sZGVyLmFwcGVuZENoaWxkKGVkaXRQcm9qTmFtZSk7XG4gICAgc2lkZWJhckhvbGRlci5hcHBlbmRDaGlsZChuYW1lUmVtb3ZlUHJvaik7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZCh0b0FkZFByb2opO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQobmV3UHJvakJveCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXROZXdTaWRlTmFtZXMob2xkTmFtZSwgbmV3UHJvak5hbWUpIHtcbiAgICAvL2NoYW5nZSBJRCBvZiBzaWRlYmFyIG5hbWUgb24gRE9NIGVsZW1lbnQgJiBhbGwgdGhlIHJlc3BlY3RpdmUgYnV0dG9uc1xuICAgIC8vY2hhbmdlIGRpc3BsYXkgc28gdGhhdCB5b3UgY2FuIFNFRSBuZXcgcHJvamVjdCBuYW1lXG4gICAgY29uc29sZS5sb2cob2xkTmFtZSk7XG4gICAgdmFyIHRvQ2hhbmdlSWRBcnJheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtpZCo9JHtDU1MuZXNjYXBlKG9sZE5hbWUpfV1gKTtcbiAgICBjb25zb2xlLmxvZyh0b0NoYW5nZUlkQXJyYXkpO1xuICAgIHRvQ2hhbmdlSWRBcnJheS5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgaWYgKGVsLmNsYXNzTmFtZSA9PT0gXCJzaWRlYmFyX05hbWVzXCIpIHtcbiAgICAgICAgICAgIGVsLmlubmVySFRNTCA9IGAke25ld1Byb2pOYW1lfWA7XG4gICAgICAgIH0gZWxzZSBpZiAoZWwuY2xhc3NOYW1lID09PSBcImFkZGVkX3Byb2plY3RzXCIpIHtcbiAgICAgICAgICAgIGVsLmlubmVySFRNTCA9IGAke25ld1Byb2pOYW1lfWA7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN0ckhvbGRlciA9IGVsLmlkO1xuICAgICAgICBjb25zb2xlLmxvZyhzdHJIb2xkZXIpO1xuICAgICAgICBlbC5pZCA9IHN0ckhvbGRlci5yZXBsYWNlKGAke29sZE5hbWV9YCwgYCR7bmV3UHJvak5hbWV9YCk7XG4gICAgICAgIFxuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VlQWxsKGFsbCkge1xuXG4gICAgY29uc3QgcHJvakNvbnRlbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyXCIpO1xuICAgIGNvbnN0IGFsbEl0ZW1zQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGxUYXNrc0JveFwiKTtcblxuICAgIGFsbEl0ZW1zQm94LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgcHJvakNvbnRlbnRzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBcbiAgICAvL3JlbWVtYmVyIHRoYXQgZGF0ZSBnb2VzIGJ5IHl5eXkvbW0vZGQgJiBKYW4gaXMgMCFcbiAgICBmdW5jdGlvbiBkdWVJbihnKSB7XG4gICAgICAgIC8vY2hhbmdlIHl5eXktbW0tZGQgdG8geXl5eW1tZGRcbiAgICAgICAgdmFyIHdoZW5JdHNEdWUgPSBnLmR1ZURhdGUucmVwbGFjZSgvLXxcXHMvZywgXCJcIik7XG4gICAgICAgIHZhciB5eXl5ID0gd2hlbkl0c0R1ZS5zbGljZSgwLCA0KTtcbiAgICAgICAgdmFyIG1tID0gTnVtYmVyKHdoZW5JdHNEdWUuc2xpY2UoNCwgNikpIC0gMTtcbiAgICAgICAgdmFyIGRkID0gTnVtYmVyKHdoZW5JdHNEdWUuc2xpY2UoNikpO1xuICAgICAgICBsZXQgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VUb05vdyhcbiAgICAgICAgICAgIG5ldyBEYXRlKHl5eXksIG1tLCBkZCksXG4gICAgICAgICAgICB7YWRkU3VmZml4OiB0cnVlfVxuICAgICAgICApO1xuICAgICAgICBjb25zb2xlLmxvZyhcImJlZm9yZSB0aGUgYWx0ZXJhdGlvbiBcIiArIHJlc3VsdCk7XG4gICAgICAgIGlmIChyZXN1bHQuc2xpY2UoLTMpID09PSBcImFnb1wiKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBcIlRvZGF5XCI7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJhZnRlciB0aGUgYWx0ZXJhdGlvbiBcIiArIHJlc3VsdCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIHdoaWxlIChhbGxJdGVtc0JveC5sYXN0RWxlbWVudENoaWxkKSB7XG4gICAgICAgIGFsbEl0ZW1zQm94LnJlbW92ZUNoaWxkKGFsbEl0ZW1zQm94Lmxhc3RFbGVtZW50Q2hpbGQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInJlbW92aW5nIHRoZSB0YXNrcyBmcm9tIGFsbEl0ZW1zQm94XCIpXG4gICAgfTtcbiAgICBhbGwuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgdmFyIGR1ZUluUmVzdWx0ID0gZHVlSW4oZWwpO1xuICAgICAgICBjb25zdCB0b0FkZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBidXR0b25Ib2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCByZW1vdmVTZWxmQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgY29uc3QgZXhwYW5kU2VsZkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNvbnN0IGVkaXRTZWxmQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgY29uc3QgZHVlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgcmVhZGlseVNlZW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgZXhwYW5kYWJsZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBleHBhbmRCdG5Db3VudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuXG5cbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGFya0NvdW50XCIpLmlubmVySFRNTCAlIDIgPT09IDApIHtcbiAgICAgICAgICAgIHRvQWRkVGFzay5jbGFzc05hbWUgPSBcImFkZGVkX3Rhc2tzIGRhcmstbW9kZVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9BZGRUYXNrLmNsYXNzTmFtZSA9IFwiYWRkZWRfdGFza3NcIjtcbiAgICAgICAgfTtcbiAgICAgICAgdG9BZGRUYXNrLmlkID0gYCR7ZWwuSUR9XyR7ZWwucHJpb3JpdHl9X0FsbFBhZ2VgO1xuXG4gICAgICAgIHJlYWRpbHlTZWVuQ29udGVudC5jbGFzc05hbWUgPSBcIm5vd1lvdVNlZU1lXCI7XG4gICAgICAgIHJlYWRpbHlTZWVuQ29udGVudC5pbm5lckhUTUwgPSBgJHtlbC50aXRsZX08YnI+PGJyPkR1ZSBEYXRlOiAke2VsLmR1ZURhdGV9YDtcblxuICAgICAgICBleHBhbmRhYmxlQ29udGVudC5jbGFzc05hbWUgPSBcInRoZUV4cGFuZGFibGVzXCI7XG4gICAgICAgIGV4cGFuZGFibGVDb250ZW50LmlkID0gYCR7ZWwuSUR9X2V4cGFuZE1lX0FsbFBhZ2VgO1xuICAgICAgICBleHBhbmRhYmxlQ29udGVudC5pbm5lckhUTUwgPSBgRGVzY3JpcHRpb246ICR7ZWwuZGVzY3JpcHRpb259PGJyPjxicj5Ob3RlczogJHtlbC5ub3Rlc31gO1xuXG4gICAgICAgIGJ1dHRvbkhvbGRlci5jbGFzc05hbWUgPSBcInRhc2tfYnV0dG9uX2hvbGRlclwiO1xuXG4gICAgICAgIHJlbW92ZVNlbGZCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgICAgIHJlbW92ZVNlbGZCdG4uY2xhc3NOYW1lID0gXCJyZW1vdmVzZWxmX2J1dHRvblwiO1xuICAgICAgICByZW1vdmVTZWxmQnRuLmlkID0gYGJ0bl9BbGxQYWdlXyR7ZWwuSUR9YDtcbiAgICAgICAgcmVtb3ZlU2VsZkJ0bi5pbm5lckhUTUwgPSBcIjxpIGNsYXNzPSdmYS1zb2xpZCBmYS10cmFzaC1jYW4nPjwvaT5cIjtcblxuICAgICAgICBleHBhbmRTZWxmQnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgICAgICBleHBhbmRTZWxmQnRuLmNsYXNzTmFtZSA9IFwiZXhwYW5kc2VsZl9idXR0b25cIjtcbiAgICAgICAgZXhwYW5kU2VsZkJ0bi5pZCA9IGBleHBhbmRCdG5fQWxsUGFnZV8ke2VsLklEfWA7XG4gICAgICAgIGV4cGFuZFNlbGZCdG4uaW5uZXJIVE1MID0gXCI8aSBjbGFzcz0nZmEtc29saWQgZmEtYW5nbGVzLWRvd24nPjwvaT5cIjtcblxuICAgICAgICBleHBhbmRCdG5Db3VudGVyLmlubmVySFRNTCA9IDE7XG5cbiAgICAgICAgZWRpdFNlbGZCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgICAgIGVkaXRTZWxmQnRuLmNsYXNzTmFtZSA9IFwiZWRpdFRhc2tfYnV0dG9uXCI7XG4gICAgICAgIGVkaXRTZWxmQnRuLmlkID0gYGVkaXRCdG5fQWxsUGFnZV8ke2VsLklEfWA7XG4gICAgICAgIGVkaXRTZWxmQnRuLmlubmVySFRNTCA9IFwiPGkgY2xhc3M9J2ZhLXJlZ3VsYXIgZmEtcGVuLXRvLXNxdWFyZSc+PC9pPlwiO1xuXG4gICAgICAgIGR1ZURpdi5jbGFzc05hbWUgPSBcImFkZGVkX2R1ZVwiO1xuICAgICAgICBpZiAoZWwuZHVlRGF0ZSAhPT0gXCJcIikge1xuICAgICAgICAgICAgZHVlRGl2LmlubmVySFRNTCA9IGBEdWU6ICR7ZHVlSW5SZXN1bHR9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIGFsbEl0ZW1zQm94LmFwcGVuZENoaWxkKHRvQWRkVGFzayk7XG4gICAgICAgIHRvQWRkVGFzay5hcHBlbmRDaGlsZChyZWFkaWx5U2VlbkNvbnRlbnQpO1xuICAgICAgICB0b0FkZFRhc2suYXBwZW5kQ2hpbGQoZHVlRGl2KTtcbiAgICAgICAgdG9BZGRUYXNrLmFwcGVuZENoaWxkKGJ1dHRvbkhvbGRlcik7XG4gICAgICAgIHRvQWRkVGFzay5hcHBlbmRDaGlsZChleHBhbmRhYmxlQ29udGVudCk7XG4gICAgICAgIHRvQWRkVGFzay5hcHBlbmRDaGlsZChleHBhbmRCdG5Db3VudGVyKTtcbiAgICAgICAgYnV0dG9uSG9sZGVyLmFwcGVuZENoaWxkKGV4cGFuZFNlbGZCdG4pO1xuICAgICAgICBidXR0b25Ib2xkZXIuYXBwZW5kQ2hpbGQoZWRpdFNlbGZCdG4pO1xuICAgICAgICBidXR0b25Ib2xkZXIuYXBwZW5kQ2hpbGQocmVtb3ZlU2VsZkJ0bik7XG5cbiAgICAgICAgdmFyIGRpdl9saXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFkZGVkX3Byb2plY3RzJyk7XG4gICAgICAgIHZhciBoM19saXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFkZGVkX3Byb2pfYm94Jyk7XG4gICAgICAgIHZhciBkaXZfYXJyYXkgPSBbLi4uZGl2X2xpc3RdO1xuICAgICAgICB2YXIgaDNfYXJyYXkgPSBbLi4uaDNfbGlzdF07XG4gICAgICAgIGRpdl9hcnJheS5mb3JFYWNoKGRpdiA9PiB7XG4gICAgICAgICAgICBkaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9KTtcbiAgICAgICAgaDNfYXJyYXkuZm9yRWFjaChoMyA9PiB7XG4gICAgICAgICAgICBoMy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH0pOyAgIFxuXG4gICAgICAgIGFsbEl0ZW1zQm94LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZyZXNoQ2VudGVyRE9NKEFQLCB5LCB6KSB7XG5cbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyXCIpO1xuICAgIGNvbnN0IGFsbEl0ZW1zQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGxUYXNrc0JveFwiKTtcbiAgICB2YXIgc2lkZWJhckNoaWxkID0gc2lkZWJhci5nZXRFbGVtZW50c0J5VGFnTmFtZShcImgzXCIpO1xuXG4gICAgc2lkZWJhci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIGFsbEl0ZW1zQm94LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBcbiAgICAvL3JlbWVtYmVyIHRoYXQgZGF0ZSBnb2VzIGJ5IHl5eXkvbW0vZGQgJiBKYW4gaXMgMCFcbiAgICBmdW5jdGlvbiBkdWVJbihnKSB7XG4gICAgICAgIC8vY2hhbmdlIHl5eXktbW0tZGQgdG8geXl5eW1tZGRcbiAgICAgICAgdmFyIHdoZW5JdHNEdWUgPSBnLmR1ZURhdGUucmVwbGFjZSgvLXxcXHMvZywgXCJcIik7XG4gICAgICAgIHZhciB5eXl5ID0gd2hlbkl0c0R1ZS5zbGljZSgwLCA0KTtcbiAgICAgICAgdmFyIG1tID0gTnVtYmVyKHdoZW5JdHNEdWUuc2xpY2UoNCwgNikpIC0gMTtcbiAgICAgICAgdmFyIGRkID0gTnVtYmVyKHdoZW5JdHNEdWUuc2xpY2UoNikpO1xuICAgICAgICBsZXQgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VUb05vdyhcbiAgICAgICAgICAgIG5ldyBEYXRlKHl5eXksIG1tLCBkZCksXG4gICAgICAgICAgICB7YWRkU3VmZml4OiB0cnVlfVxuICAgICAgICApO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiYmVmb3JlIHRoZSBhbHRlcmF0aW9uIFwiICsgcmVzdWx0KTtcbiAgICAgICAgaWYgKHJlc3VsdC5zbGljZSgtMykgPT09IFwiYWdvXCIpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IFwiVG9kYXlcIjtcbiAgICAgICAgfVxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiYWZ0ZXIgdGhlIGFsdGVyYXRpb24gXCIgKyByZXN1bHQpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICAvKiBjb25zb2xlLmxvZyhzaWRlYmFyQ2hpbGQpO1xuICAgIGNvbnNvbGUubG9nKHopO1xuICAgIGNvbnNvbGUubG9nKHNpZGViYXJDaGlsZFt6XSk7ICovXG5cbiAgICB3aGlsZSAoc2lkZWJhckNoaWxkW3pdLmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgICAgc2lkZWJhckNoaWxkW3pdLnJlbW92ZUNoaWxkKHNpZGViYXJDaGlsZFt6XS5sYXN0RWxlbWVudENoaWxkKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJyZW1vdmluZyB0aGUgdGFza3MgZnJvbSBzcGVjaWZpYyBwcm9qXCIpXG4gICAgfTtcbiAgICBBUFt5XVtcInRhc2tMaXN0XCJdLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIHZhciBkdWVJblJlc3VsdCA9IGR1ZUluKGVsKTtcbiAgICAgICAgY29uc3QgdG9BZGRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgYnV0dG9uSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgcmVtb3ZlU2VsZkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNvbnN0IGV4cGFuZFNlbGZCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBjb25zdCBlZGl0U2VsZkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNvbnN0IGR1ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHJlYWRpbHlTZWVuQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGV4cGFuZGFibGVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgZXhwYW5kQnRuQ291bnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcblxuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXJrQ291bnRcIikuaW5uZXJIVE1MICUgMiA9PT0gMCkge1xuICAgICAgICAgICAgdG9BZGRUYXNrLmNsYXNzTmFtZSA9IFwiYWRkZWRfdGFza3MgZGFyay1tb2RlXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b0FkZFRhc2suY2xhc3NOYW1lID0gXCJhZGRlZF90YXNrc1wiO1xuICAgICAgICB9XG4gICAgICAgIHRvQWRkVGFzay5pZCA9IGAke2VsLklEfV8ke2VsLnByaW9yaXR5fWA7XG5cbiAgICAgICAgcmVhZGlseVNlZW5Db250ZW50LmNsYXNzTmFtZSA9IFwibm93WW91U2VlTWVcIjtcbiAgICAgICAgcmVhZGlseVNlZW5Db250ZW50LmlubmVySFRNTCA9IGAke2VsLnRpdGxlfTxicj5EdWUgRGF0ZTogJHtlbC5kdWVEYXRlfWA7XG5cbiAgICAgICAgZXhwYW5kYWJsZUNvbnRlbnQuY2xhc3NOYW1lID0gXCJ0aGVFeHBhbmRhYmxlc1wiO1xuICAgICAgICBleHBhbmRhYmxlQ29udGVudC5pZCA9IGAke2VsLklEfV9leHBhbmRNZWA7XG4gICAgICAgIGV4cGFuZGFibGVDb250ZW50LmlubmVySFRNTCA9IGBEZXNjcmlwdGlvbjogJHtlbC5kZXNjcmlwdGlvbn08YnI+PGJyPk5vdGVzOiAke2VsLm5vdGVzfWA7XG5cbiAgICAgICAgYnV0dG9uSG9sZGVyLmNsYXNzTmFtZSA9IFwidGFza19idXR0b25faG9sZGVyXCI7XG5cbiAgICAgICAgcmVtb3ZlU2VsZkJ0bi50eXBlID0gXCJidXR0b25cIjtcbiAgICAgICAgcmVtb3ZlU2VsZkJ0bi5jbGFzc05hbWUgPSBcInJlbW92ZXNlbGZfYnV0dG9uXCI7XG4gICAgICAgIHJlbW92ZVNlbGZCdG4uaWQgPSBgYnRuXyR7ZWwuSUR9YDtcbiAgICAgICAgcmVtb3ZlU2VsZkJ0bi5pbm5lckhUTUwgPSBcIjxpIGNsYXNzPSdmYS1zb2xpZCBmYS10cmFzaC1jYW4nPjwvaT5cIjtcblxuICAgICAgICBleHBhbmRTZWxmQnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgICAgICBleHBhbmRTZWxmQnRuLmNsYXNzTmFtZSA9IFwiZXhwYW5kc2VsZl9idXR0b25cIjtcbiAgICAgICAgZXhwYW5kU2VsZkJ0bi5pZCA9IGBleHBhbmRCdG5fJHtlbC5JRH1gO1xuICAgICAgICBleHBhbmRTZWxmQnRuLmlubmVySFRNTCA9IFwiPGkgY2xhc3M9J2ZhLXNvbGlkIGZhLWFuZ2xlcy1kb3duJz48L2k+XCI7XG5cbiAgICAgICAgZXhwYW5kQnRuQ291bnRlci5pbm5lckhUTUwgPSAxO1xuXG4gICAgICAgIGVkaXRTZWxmQnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgICAgICBlZGl0U2VsZkJ0bi5jbGFzc05hbWUgPSBcImVkaXRUYXNrX2J1dHRvblwiO1xuICAgICAgICBlZGl0U2VsZkJ0bi5pZCA9IGBlZGl0QnRuXyR7ZWwuSUR9YDtcbiAgICAgICAgZWRpdFNlbGZCdG4uaW5uZXJIVE1MID0gXCI8aSBjbGFzcz0nZmEtcmVndWxhciBmYS1wZW4tdG8tc3F1YXJlJz48L2k+XCI7XG5cbiAgICAgICAgZHVlRGl2LmNsYXNzTmFtZSA9IFwiYWRkZWRfZHVlXCI7XG4gICAgICAgIGlmIChlbC5kdWVEYXRlICE9PSBcIlwiKSB7XG4gICAgICAgICAgICBkdWVEaXYuaW5uZXJIVE1MID0gYER1ZTogJHtkdWVJblJlc3VsdH1gO1xuICAgICAgICB9XG5cbiAgICAgICAgc2lkZWJhckNoaWxkW3pdLmFwcGVuZENoaWxkKHRvQWRkVGFzayk7XG4gICAgICAgIHRvQWRkVGFzay5hcHBlbmRDaGlsZChyZWFkaWx5U2VlbkNvbnRlbnQpO1xuICAgICAgICB0b0FkZFRhc2suYXBwZW5kQ2hpbGQoZHVlRGl2KTtcbiAgICAgICAgdG9BZGRUYXNrLmFwcGVuZENoaWxkKGJ1dHRvbkhvbGRlcik7XG4gICAgICAgIHRvQWRkVGFzay5hcHBlbmRDaGlsZChleHBhbmRhYmxlQ29udGVudCk7XG4gICAgICAgIHRvQWRkVGFzay5hcHBlbmRDaGlsZChleHBhbmRCdG5Db3VudGVyKTtcbiAgICAgICAgYnV0dG9uSG9sZGVyLmFwcGVuZENoaWxkKGV4cGFuZFNlbGZCdG4pO1xuICAgICAgICBidXR0b25Ib2xkZXIuYXBwZW5kQ2hpbGQoZWRpdFNlbGZCdG4pO1xuICAgICAgICBidXR0b25Ib2xkZXIuYXBwZW5kQ2hpbGQocmVtb3ZlU2VsZkJ0bik7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVFeHBhbmQocSwgcikge1xuICAgIGNvbnN0IGV4cGFuZGVyQnRuVG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGV4cGFuZEJ0bl8ke3F9YCk7XG4gICAgY29uc29sZS5sb2coZXhwYW5kZXJCdG5Ub2cpO1xuICAgIGlmIChyJTIgPT09IDApIHtcbiAgICAgICAgZXhwYW5kZXJCdG5Ub2cuaW5uZXJIVE1MID0gXCI8aSBjbGFzcz0nZmEtc29saWQgZmEtYW5nbGVzLWRvd24nPjwvaT5cIjtcbiAgICB9IGVsc2UgaWYgKHIlMiAhPT0gMCkge1xuICAgICAgICBleHBhbmRlckJ0blRvZy5pbm5lckhUTUwgPSBcIjxpIGNsYXNzPSdmYS1zb2xpZCBmYS1hbmdsZXMtdXAnPjwvaT5cIlxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVNlZUFsbEJ0bigpIHtcbiAgICBjb25zdCBidXR0b25PZkludGVyZXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWVBbGxUb2dnbGVcIik7XG4gICAgY29uc3QgYWxsSXRlbXNEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGxUYXNrc0JveFwiKTtcblxuICAgIGlmIChidXR0b25PZkludGVyZXN0LmlubmVySFRNTCA9PSBcIlNlZSBBbGwgVG8tRG8nc1wiKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic3VwcG9zZWQgdG8gc2hvdyBzdHVmZiBub3dcIik7XG4gICAgICAgIGJ1dHRvbk9mSW50ZXJlc3QuaW5uZXJIVE1MID0gXCJIaWRlIEFsbCBUby1EbydzXCI7XG4gICAgfSBlbHNlIGlmIChidXR0b25PZkludGVyZXN0LmlubmVySFRNTCA9PSBcIkhpZGUgQWxsIFRvLURvJ3NcIikge1xuICAgICAgICBjb25zb2xlLmxvZyhcInN1cHBvc2VkIHRvIEhJREUgbm93XCIpO1xuICAgICAgICBhbGxJdGVtc0Rpc3BsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBidXR0b25PZkludGVyZXN0LmlubmVySFRNTCA9IFwiU2VlIEFsbCBUby1EbydzXCI7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lkZWJhclRvZ2dsZSh4KSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGxUYXNrc0JveFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWVBbGxUb2dnbGVcIikuaW5uZXJIVE1MID0gXCJTZWUgQWxsIFRvLURvJ3NcIjtcbiAgICB2YXIgZGl2X2xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWRkZWRfcHJvamVjdHMnKTtcbiAgICB2YXIgaDNfbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZGRlZF9wcm9qX2JveCcpO1xuICAgIHZhciBkaXZfYXJyYXkgPSBbLi4uZGl2X2xpc3RdO1xuICAgIHZhciBoM19hcnJheSA9IFsuLi5oM19saXN0XTtcbiAgICBkaXZfYXJyYXkuZm9yRWFjaChkaXYgPT4ge1xuICAgICAgICBpZiAoZGl2LmlkID09PSB4KSB7XG4gICAgICAgICAgICBkaXYuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhcmtDb3VudFwiKS5pbm5lckhUTUwgJSAyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJkYXJrLW1vZGVcIik7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICBkaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaDNfYXJyYXkuZm9yRWFjaChoMyA9PiB7XG4gICAgICAgIGlmIChoMy5pZC5zbGljZSgwLCAtMykgPT09IHgpIHtcbiAgICAgICAgICAgIGgzLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXJrQ291bnRcIikuaW5uZXJIVE1MICUgMiA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGgzLmNsYXNzTGlzdC5hZGQoXCJkYXJrLW1vZGVcIik7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICBoMy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICB9KTsgICAgICBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFsbEVtcHR5KCkge1xuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyXCIpO1xuICAgIGNvbnN0IHNpZGViYXJDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyTmFtZXNPbmx5XCIpO1xuXG4gICAgd2hpbGUgKG1haW5Db250ZW50LmNoaWxkcmVuLmxlbmd0aCAhPT0gMikge1xuICAgICAgICBtYWluQ29udGVudC5yZW1vdmVDaGlsZChtYWluQ29udGVudC5sYXN0RWxlbWVudENoaWxkKTtcbiAgICB9O1xuICAgIHdoaWxlIChzaWRlYmFyQ29udGVudC5jaGlsZHJlbi5sZW5ndGggIT09IDIpIHtcbiAgICAgICAgc2lkZWJhckNvbnRlbnQucmVtb3ZlQ2hpbGQoc2lkZWJhckNvbnRlbnQubGFzdEVsZW1lbnRDaGlsZCk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZURhcmsoKSB7XG4gICAgdmFyIGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgdmFyIGIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXJOYW1lc09ubHlcIik7XG4gICAgdmFyIGNBbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWRkZWRfcHJvamVjdHNcIik7XG4gICAgdmFyIGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlZUFsbFRvZ2dsZVwiKTtcbiAgICB2YXIgZUFsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJlYWNoU2lkZWJhckNvbnRhaW5lclwiKTtcbiAgICB2YXIgZkFsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhZGRlZF9wcm9qX2JveFwiKTtcbiAgICB2YXIgZ0FsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhZGRlZF90YXNrc1wiKTtcbiAgICB2YXIgaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyXCIpO1xuICAgIHZhciBpID0gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkbmV3Zm9ybVwiKTtcbiAgICB2YXIgaiA9ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZG5ld3Byb2pmb3JtXCIpO1xuICAgIHZhciBrID0gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdEZvcm1cIik7XG4gICAgdmFyIGxBbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRleHRhcmVhXCIpO1xuICAgIHZhciBtQWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKTtcbiAgICB2YXIgbkFsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2VsZWN0XCIpO1xuICAgIFxuICAgIGEuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmstbW9kZVwiKTtcbiAgICBiLmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrLW1vZGVcIik7XG4gICAgZC5jbGFzc0xpc3QudG9nZ2xlKFwiZGFyay1tb2RlXCIpO1xuICAgIGguY2xhc3NMaXN0LnRvZ2dsZShcImRhcmstbW9kZVwiKTtcbiAgICBpLmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrLW1vZGVcIik7XG4gICAgai5jbGFzc0xpc3QudG9nZ2xlKFwiZGFyay1tb2RlXCIpO1xuICAgIGsuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmstbW9kZVwiKTtcblxuICAgIHZhciBjQWxsQXJyYXkgPSBbLi4uY0FsbF07XG4gICAgdmFyIGVBbGxBcnJheSA9IFsuLi5lQWxsXTtcbiAgICB2YXIgZkFsbEFycmF5ID0gWy4uLmZBbGxdO1xuICAgIHZhciBnQWxsQXJyYXkgPSBbLi4uZ0FsbF07XG4gICAgdmFyIGxBbGxBcnJheSA9IFsuLi5sQWxsXTtcbiAgICB2YXIgbUFsbEFycmF5ID0gWy4uLm1BbGxdO1xuICAgIHZhciBuQWxsQXJyYXkgPSBbLi4ubkFsbF07XG4gICAgY0FsbEFycmF5LmZvckVhY2goZGl2ID0+IHtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrLW1vZGVcIik7XG4gICAgfSk7XG4gICAgZUFsbEFycmF5LmZvckVhY2goZGl2ID0+IHtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrLW1vZGVcIik7XG4gICAgfSk7XG4gICAgZkFsbEFycmF5LmZvckVhY2goaDMgPT4ge1xuICAgICAgICBoMy5jbGFzc0xpc3QudG9nZ2xlKFwiZGFyay1tb2RlXCIpO1xuICAgIH0pO1xuICAgIGdBbGxBcnJheS5mb3JFYWNoKGRpdiA9PiB7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QudG9nZ2xlKFwiZGFyay1tb2RlXCIpO1xuICAgIH0pO1xuICAgIGxBbGxBcnJheS5mb3JFYWNoKHRleHRhcmVhID0+IHtcbiAgICAgICAgdGV4dGFyZWEuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmstbW9kZVwiKTtcbiAgICB9KTtcbiAgICBtQWxsQXJyYXkuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrLW1vZGVcIik7XG4gICAgfSk7XG4gICAgbkFsbEFycmF5LmZvckVhY2goc2VsZWN0ID0+IHtcbiAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrLW1vZGVcIik7XG4gICAgfSk7XG4gICAgdmFyIGRhcmtDb3VudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXJrQ291bnRcIikuaW5uZXJIVE1MO1xuICAgIGRhcmtDb3VudGVyKys7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXJrQ291bnRcIikuaW5uZXJIVE1MID0gZGFya0NvdW50ZXI7XG59XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBsb2dpY3RvZG8gZnJvbSAnLi9sb2dpY3RvZG8uanMnO1xubG9naWN0b2RvKCk7XG4iLCJpbXBvcnQgeyBhZGRQcm9qVG9TaWRlIH0gZnJvbSAnLi9ET010b2RvLmpzJztcbmltcG9ydCB7IHJlZnJlc2hDZW50ZXJET00gfSBmcm9tICcuL0RPTXRvZG8uanMnO1xuaW1wb3J0IHsgc2lkZWJhclRvZ2dsZSB9IGZyb20gJy4vRE9NdG9kby5qcyc7XG5pbXBvcnQgeyBhbGxFbXB0eSB9IGZyb20gJy4vRE9NdG9kby5qcyc7XG5pbXBvcnQgeyBzZXROZXdTaWRlTmFtZXMgfSBmcm9tICcuL0RPTXRvZG8uanMnO1xuaW1wb3J0IHsgdG9nZ2xlRXhwYW5kIH0gZnJvbSAnLi9ET010b2RvLmpzJztcbmltcG9ydCB7IHNlZUFsbCB9IGZyb20gJy4vRE9NdG9kby5qcyc7XG5pbXBvcnQgeyB0b2dnbGVTZWVBbGxCdG4gfSBmcm9tICcuL0RPTXRvZG8uanMnO1xuaW1wb3J0IHsgdG9nZ2xlRGFyayB9IGZyb20gJy4vRE9NdG9kby5qcyc7XG5pbXBvcnQgc3RvcmFnZVRlc3QsIHsgcmVtb3ZlUHJvamVjdCB9IGZyb20gJy4vc3RvcmFnZS5qcyc7XG5pbXBvcnQgeyBzdG9yZVByb2plY3QgfSBmcm9tICcuL3N0b3JhZ2UuanMnO1xuaW1wb3J0IHsgcmV0cmlldmVQcm9qZWN0IH0gZnJvbSAnLi9zdG9yYWdlLmpzJztcbmltcG9ydCB7IHJldHJpZXZlUHJvamVjdHMgfSBmcm9tICcuL3N0b3JhZ2UuanMnO1xuaW1wb3J0IHsgc3RvcmVBbGxJdGVtcyB9IGZyb20gJy4vc3RvcmFnZS5qcyc7XG5pbXBvcnQgeyByZW1vdmVGcm9tQWxsSXRlbXMgfSBmcm9tICcuL3N0b3JhZ2UuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2dpY3RvZG8oKSB7XG5cbiAgICBsZXQgaWRjb3VudGVyID0gMDtcbiAgICBsZXQgYWxsSXRlbXMgPSBbXTtcbiAgICBsZXQgY3VycmVudFByb2pJbmRleCA9IG51bGw7XG4gICAgbGV0IGN1cnJlbnRQcm9qTmFtZSA9IG51bGw7XG4gICAgbGV0IGxhc3RQcm9qSW5kZXggPSBudWxsO1xuICAgIGxldCBsYXN0UHJvak5hbWUgPSBudWxsO1xuXG4gICAgY2xhc3MgSXRlbSB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBwcm9qZWN0KSB7XG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgICAgICAgICAgdGhpcy5JRCA9IFwicHJvalwiICsgY3VycmVudFByb2pJbmRleCArIFwiLlwiICsgaWRjb3VudGVyKys7XG4gICAgICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0OyBcblxuICAgICAgICAgICAgdGhpcy5naXZlVGl0bGUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke3RpdGxlfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRpdGxlU2V0TmV3ID0gZnVuY3Rpb24obmV3VGl0bGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpdGxlID0gbmV3VGl0bGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmdpdmVEZWV0cyA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7ZGVzY3JpcHRpb259YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb25TZXROZXcgPSBmdW5jdGlvbihuZXdEZWV0cykge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBuZXdEZWV0cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZ2l2ZUR1ZURhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke2R1ZURhdGV9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZHVlRGF0ZVNldE5ldyA9IGZ1bmN0aW9uKG5ld0R1ZURhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmR1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5naXZlUHJpb3JpdHkgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke3ByaW9yaXR5fWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByaW9yaXR5U2V0TmV3ID0gZnVuY3Rpb24obmV3UHJpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmlvcml0eSA9IG5ld1ByaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZ2l2ZU5vdGV6ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHtub3Rlc31gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ub3Rlc1NldE5ldyA9IGZ1bmN0aW9uKG5ld05vdGVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3RlcyA9IG5ld05vdGVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5naXZlSUQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke0lEfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmdldFByb2pOYW1lID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHtwcm9qZWN0fWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gYWRkSXRlbVRvQWxsKHgpIHtcbiAgICAgICAgYWxsSXRlbXMucHVzaCh4KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRJdGVtVG9DdXJyZW50KHgpIHtcbiAgICAgICAgYWxsUHJvamVjdHNbY3VycmVudFByb2pJbmRleF1bXCJ0YXNrTGlzdFwiXS5wdXNoKHgpO1xuICAgICAgICAvKiBbaSsrXSAqL1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUl0ZW1Gcm9tQ3VycmVudCh4LCB5KSB7XG5cbiAgICAgICAgY29uc29sZS5sb2coYEN1cnJlbnQgcHJvaiBpbmRleCBpcyAke3h9LCBmaW5hbCBJRCBpcyAke3l9YCk7XG5cbiAgICAgICAgdmFyIHRhc2tGcm9tQnRuSW5kZXggPSBhbGxQcm9qZWN0c1tgJHt4fWBdW1widGFza0xpc3RcIl0uZmluZEluZGV4KChvYmopID0+IG9iai5JRCA9PSB5KTtcbiAgICAgICAgY29uc29sZS5sb2codGFza0Zyb21CdG5JbmRleCk7XG5cbiAgICAgICAgYWxsUHJvamVjdHNbYCR7eH1gXVtcInRhc2tMaXN0XCJdLnNwbGljZSh0YXNrRnJvbUJ0bkluZGV4LCAxKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVJdGVtRnJvbUFsbChoKSB7XG4gICAgICAgIHZhciBoSW5kZXggPSBhbGxJdGVtcy5maW5kSW5kZXgoKG9iaikgPT4gb2JqLklEID09PSBoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCIodXNlZCBmb3IgYWxsSXRlbXMgYXJyYXkpIGhJbmRleCBpcyBcIiArIGhJbmRleCk7XG4gICAgICAgIGFsbEl0ZW1zLnNwbGljZShoSW5kZXgsIDEpO1xuICAgIH1cblxuICAgIC8vZ2V0cyBwcm9qIGluZGV4ICYgbmFtZSB3aGVuIHRyeWluZyB0byBkZWxldGUgdGFzayBmcm9tIGFsbEl0ZW1zIHBhZ2VcbiAgICBmdW5jdGlvbiBnZXRQcm9qSW5mb0ZvckFsbFByb2ooaikge1xuICAgICAgICB2YXIgakluZGV4ID0gYWxsSXRlbXMuZmluZEluZGV4KChvYmopID0+IG9iai5JRCA9PT0gaik7XG4gICAgICAgIGN1cnJlbnRQcm9qTmFtZSA9IGFsbEl0ZW1zW2pJbmRleF0uZ2V0UHJvak5hbWUoKTtcbiAgICAgICAgY3VycmVudFByb2pJbmRleCA9IGFsbFByb2plY3RzLmZpbmRJbmRleCgob2JqKSA9PiBvYmoucHJvak5hbWUgPT09IGAke2N1cnJlbnRQcm9qTmFtZX1gKTtcbiAgICB9XG5cbiAgICBjb25zdCBvcGVuRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkbmV3XCIpO1xuICAgIG9wZW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvRm9ybUNvbnRhaW5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmRDb3ZlclN0dWZmXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfSlcblxuICAgIGNvbnN0IGNsb3NlRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FuY2VsX2J1dHRvblwiKTtcbiAgICBjbG9zZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9Gb3JtQ29udGFpbmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrZ3JvdW5kQ292ZXJTdHVmZlwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSlcblxuICAgIGNvbnN0IG9wZW5Qcm9qID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdwcm9qX2J1dHRvblwiKTtcbiAgICBvcGVuUHJvai5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2sgd29ya2VkXCIpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2pGb3JtQ29udGFpbmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dyb3VuZENvdmVyU3R1ZmZcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9KVxuXG4gICAgY29uc3QgY2xvc2VQcm9qID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdwcm9qX2NhbmNlbFwiKTtcbiAgICBjbG9zZVByb2ouYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2pGb3JtQ29udGFpbmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrZ3JvdW5kQ292ZXJTdHVmZlwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSlcblxuICAgIGNvbnN0IGFkZE5ld0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0X2J1dHRvblwiKTtcbiAgICBhZGROZXdCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICB2YXIgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZG5ld2Zvcm1cIik7XG4gICAgICAgIHZhciBmb3JtVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpO1xuICAgICAgICB2YXIgZm9ybURlc2NyaXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpO1xuXG4gICAgICAgIHZhciB0YXJnZXREYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVEYXRlXCIpLnZhbHVlO1xuICAgICAgICBcbiAgICAgICAgdmFyIG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHZhciBtb250aCA9IG5vdy5nZXRVVENNb250aCgpICsgMTsgLy9tb250aHMgZnJvbSAxLTEyXG4gICAgICAgIHZhciBwYWRkZWRNb250aCA9IG1vbnRoLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgdmFyIGRheSA9IG5vdy5nZXRVVENEYXRlKCk7XG4gICAgICAgIHZhciBwYWRkZWREYXkgPSBkYXkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICB2YXIgeWVhciA9IG5vdy5nZXRVVENGdWxsWWVhcigpO1xuICAgICAgICBub3cgPSAgeWVhciArIFwiLVwiICsgcGFkZGVkTW9udGggKyBcIi1cIiArIHBhZGRlZERheTtcblxuICAgICAgICBpZiAobmV3VGFza0Zvcm0uY2hlY2tWYWxpZGl0eSgpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZm9ybVRpdGxlLmNoZWNrVmFsaWRpdHkoKSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmb3JtRGVzY3JpcC5jaGVja1ZhbGlkaXR5KCkpO1xuICAgICAgICAgICAgZm9ybVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJuZWVkc0ZpbGxpbmdcIik7XG4gICAgICAgICAgICBmb3JtRGVzY3JpcC5jbGFzc0xpc3QuYWRkKFwibmVlZHNGaWxsaW5nXCIpO1xuICAgICAgICAgICAgaWYgKGZvcm1UaXRsZS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgICAgICAgICBmb3JtVGl0bGUuY2xhc3NMaXN0LnJlbW92ZShcIm5lZWRzRmlsbGluZ1wiKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZm9ybURlc2NyaXAuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgICAgICAgICAgZm9ybURlc2NyaXAuY2xhc3NMaXN0LnJlbW92ZShcIm5lZWRzRmlsbGluZ1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0RGF0ZSAhPT0gXCJcIiAmJiB0YXJnZXREYXRlIDwgbm93KSB7XG4gICAgICAgICAgICAvLyBpZiBhIGRhdGUgaXMgc2VsZWN0ZWQsIHdhbnQgdG8gbWFrZSBzdXJlIGRhdGUgaXMgTk9UIGluIHRoZSBwYXN0XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0YXJnZXREYXRlIFwiICsgdGFyZ2V0RGF0ZSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJub3cgXCIgKyBub3cpOyBcbiAgICAgICAgICAgICAgICBhbGVydChcIlBsZWFzZSBzZWxlY3QgYSBkYXRlIHRoYXQgaGFzIG5vdCBhbHJlYWR5IHBhc3NlZC5cIik7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFByb2pOYW1lID09PSBcIl9oSWREZU5cIikge1xuXG4gICAgICAgICAgICB2YXIgYSA9IGFkZG5ld2Zvcm0udGl0bGUudmFsdWU7XG4gICAgICAgICAgICB2YXIgYiA9IGFkZG5ld2Zvcm0uZGVzY3JpcHRpb24udmFsdWU7XG4gICAgICAgICAgICB2YXIgYyA9IGFkZG5ld2Zvcm0uZHVlRGF0ZS52YWx1ZTtcbiAgICAgICAgICAgIHZhciBkID0gYWRkbmV3Zm9ybS5wcmlvcml0eS52YWx1ZTtcbiAgICAgICAgICAgIHZhciBlID0gYWRkbmV3Zm9ybS5ub3Rlcy52YWx1ZTtcbiAgICAgICAgICAgIHZhciBmID0gY3VycmVudFByb2pOYW1lO1xuICAgICAgICAgICAgdmFyIHggPSBuZXcgSXRlbShhLCBiLCBjLCBkLCBlLCBmKTtcbiAgICBcbiAgICAgICAgICAgIGFkZEl0ZW1Ub0FsbCh4KTtcbiAgICAgICAgICAgIGFkZEl0ZW1Ub0N1cnJlbnQoeCk7XG4gICAgICAgICAgICBzZWVBbGwoYWxsSXRlbXMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJiZWxvdyBpcyBhbGxQcm9qXCIpO1xuICAgICAgICAgICAgY29uc29sZS50YWJsZShhbGxQcm9qZWN0cyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImJlbG93IGlzIGFsbEl0ZW1zXCIpO1xuICAgICAgICAgICAgY29uc29sZS50YWJsZShhbGxJdGVtcyk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb0Zvcm1Db250YWluZXJcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrZ3JvdW5kQ292ZXJTdHVmZlwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBmb3JtVGl0bGUuY2xhc3NMaXN0LnJlbW92ZShcIm5lZWRzRmlsbGluZ1wiKTtcbiAgICAgICAgICAgIGZvcm1EZXNjcmlwLmNsYXNzTGlzdC5yZW1vdmUoXCJuZWVkc0ZpbGxpbmdcIik7XG5cbiAgICAgICAgICAgIHN0b3JlQWxsSXRlbXMoYWxsSXRlbXMpO1xuXG4gICAgICAgICAgICBzdG9yZVByb2plY3QoYWxsUHJvamVjdHNbMF0pO1xuICAgICAgICAgICAgLy9hbGxJdGVtcyB0YXNrcyBhcmUgc3RvcmVkIHdpdGggYmVnaW5uaW5nIG9mIFwiYUxsSXRFbVNfXCJcbiAgICAgICAgICAgIC8vYWxsSXRlbXMgZG9lcyBOT1QgaGF2ZSBhIHRhc2tMaXN0XG4gICAgICAgICAgICAvL25vdCB0aGUgc2FtZSBhcyBoaWRkZW4sIHdoaWNoIGlzIHVzZWQgZm9yIHdoZW4gYWRkaW5nIHRhc2tzIG9uIGFsbEl0ZW1zIHBhZ2VcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0YXJnZXREYXRlIFwiICsgdGFyZ2V0RGF0ZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vdyBcIiArIG5vdyk7XG5cbiAgICAgICAgICAgIHZhciBhID0gYWRkbmV3Zm9ybS50aXRsZS52YWx1ZTtcbiAgICAgICAgICAgIHZhciBiID0gYWRkbmV3Zm9ybS5kZXNjcmlwdGlvbi52YWx1ZTtcbiAgICAgICAgICAgIHZhciBjID0gYWRkbmV3Zm9ybS5kdWVEYXRlLnZhbHVlO1xuICAgICAgICAgICAgdmFyIGQgPSBhZGRuZXdmb3JtLnByaW9yaXR5LnZhbHVlO1xuICAgICAgICAgICAgdmFyIGUgPSBhZGRuZXdmb3JtLm5vdGVzLnZhbHVlO1xuICAgICAgICAgICAgdmFyIGYgPSBjdXJyZW50UHJvak5hbWU7XG4gICAgICAgICAgICB2YXIgeCA9IG5ldyBJdGVtKGEsIGIsIGMsIGQsIGUsIGYpO1xuICAgIFxuICAgICAgICAgICAgdmFyIEFQID0gYWxsUHJvamVjdHM7XG4gICAgICAgICAgICB2YXIgeSA9IGN1cnJlbnRQcm9qSW5kZXg7XG4gICAgICAgICAgICB2YXIgeiA9IGAke2N1cnJlbnRQcm9qTmFtZX1ib3hgO1xuICAgICAgICAgICAgYWRkSXRlbVRvQWxsKHgpO1xuICAgICAgICAgICAgYWRkSXRlbVRvQ3VycmVudCh4KTtcbiAgICAgICAgICAgIHJlZnJlc2hDZW50ZXJET00oQVAsIHksIHopO1xuICAgICAgICAgICAgLy9jb25zb2xlLnRhYmxlKGFsbFByb2plY3RzKTtcbiAgICAgICAgICAgIGNvbnNvbGUudGFibGUoYWxsSXRlbXMpO1xuICAgICAgICAgICAgY29uc29sZS50YWJsZShhbGxQcm9qZWN0cyk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9Gb3JtQ29udGFpbmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dyb3VuZENvdmVyU3R1ZmZcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgZm9ybVRpdGxlLmNsYXNzTGlzdC5yZW1vdmUoXCJuZWVkc0ZpbGxpbmdcIik7XG4gICAgICAgICAgICBmb3JtRGVzY3JpcC5jbGFzc0xpc3QucmVtb3ZlKFwibmVlZHNGaWxsaW5nXCIpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhBUFt5XSk7XG4gICAgICAgICAgICBzdG9yZUFsbEl0ZW1zKGFsbEl0ZW1zKTtcbiAgICAgICAgICAgIC8vYWxsSXRlbXMgdGFza3MgYXJlIHN0b3JlZCB3aXRoIGJlZ2lubmluZyBvZiBcImFMbEl0RW1TX1wiXG4gICAgICAgICAgICAvL2FsbEl0ZW1zIGRvZXMgTk9UIGhhdmUgYSB0YXNrTGlzdFxuICAgICAgICAgICAgLy9ub3QgdGhlIHNhbWUgYXMgaGlkZGVuLCB3aGljaCBpcyB1c2VkIGZvciB3aGVuIGFkZGluZyB0YXNrcyBvbiBhbGxJdGVtcyBwYWdlXG4gICAgICAgICAgICBzdG9yZVByb2plY3QoQVBbeV0pOyAvL1wicmVmcmVzaGVzXCIgcHJvaiBpbiBsb2NhbFN0b3JhZ2UgdG8gaW5jbHVkZSBuZXcgYWRkZWQgdGFza1xuICAgICAgICAgICAgc3RvcmVQcm9qZWN0KGFsbFByb2plY3RzWzBdKTtcbiAgICAgICAgfVxuICAgIH0pIFxuXG4gICAgLy9wcm9qZWN0IHRhYiBjb2RlXG5cbiAgICBsZXQgcHJvamlkID0gMDtcbiAgICBsZXQgYWxsUHJvamVjdHMgPSBbXTtcblxuICAgIGNsYXNzIFByb2plY3Qge1xuICAgICAgICBjb25zdHJ1Y3Rvcihwcm9qTmFtZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9qTmFtZSA9IHByb2pOYW1lO1xuICAgICAgICAgICAgdGhpcy5JRCA9IHByb2ppZCsrO1xuICAgICAgICAgICAgdGhpcy50YXNrTGlzdCA9IFtdO1xuXG4gICAgICAgICAgICBjb25zdCBkaXNwbGF5UHJvaiA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7cHJvak5hbWV9YDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmdpdmVQcm9qTmFtZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGlzcGxheVByb2ooKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLnNldE5ld1Byb2pOYW1lID0gZnVuY3Rpb24obmV3TmFtZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvak5hbWUgPSBuZXdOYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkUHJvalRvQWxsKHgpIHtcbiAgICAgICAgYWxsUHJvamVjdHMucHVzaCh4KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaW5kQWxsSWRzUmVtb3ZlKGIpIHtcbiAgICAgICAgY29uc3QgcmVtb3ZlZElEcyA9IFtdO1xuICAgICAgICBhbGxQcm9qZWN0c1tiXVtcInRhc2tMaXN0XCJdLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgICByZW1vdmVkSURzLnB1c2goZWwuSUQpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGVzZSBhcmUgdGhlIHJlbW92ZWQgSURzIFwiLCByZW1vdmVkSURzKTsvL2l0J3MgYW4gb2JqZWN0XG4gICAgICAgIHJldHVybiByZW1vdmVkSURzO1xuICAgIH1cblxuICAgIC8vZm9yIGVhY2ggaXRlbSB3aXRoaW4gdGhlIHRvIGJlIHJlbW92ZWQgSUQncyBhcnJheSwgcnVuIGl0IGFnYWluc3QgYWxsSXRlbXMuSUQgZm9yIG1hdGNoXG4gICAgLy9pZiBpdCBtYXRjaGVzLCBmaW5kIHRoYXQgaXRlbSdzIGN1cnJlbnQgaW5kZXggJiByZW1vdmUgd2l0aCBzcGxpY2UoeCwgMSk7XG4gICAgZnVuY3Rpb24gaWRUb0luZGV4UmVtb3ZlKGYpIHtcbiAgICAgICAgd2hpbGUgKGYubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMCwgbSA9IGFsbEl0ZW1zLmxlbmd0aDsgaiA8IG07IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChmWzBdID09PSBhbGxJdGVtc1tqXS5JRCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMgaXRlcmF0aW9uIGFsbEl0ZW1zIGxlbmd0aCB3YXMgXCIgKyBtKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhbGxJdGVtcyB0YXNrIHdhcyByZW1vdmVkIHdpdGggSUQgb2YgXCIgKyBhbGxJdGVtc1tqXS5JRCk7XG4gICAgICAgICAgICAgICAgICAgIGFsbEl0ZW1zLnNwbGljZShqLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgZi5zcGxpY2UoMCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNpZGViYXJQcm9qU3dpdGNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGViYXJOYW1lc09ubHknKTtcbiAgICBzaWRlYmFyUHJvalN3aXRjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwic2lkZWJhcl9OYW1lc1wiKSB7XG4gICAgICAgICAgICBjdXJyZW50UHJvak5hbWUgPSBlLnRhcmdldC5pZC5zbGljZSgwLCAtOCk7XG4gICAgICAgICAgICBjdXJyZW50UHJvakluZGV4ID0gYWxsUHJvamVjdHMuZmluZEluZGV4KChvYmopID0+IG9iai5wcm9qTmFtZSA9PSBjdXJyZW50UHJvak5hbWUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjdXJyZW50cHJvaiBuYW1lIGlzIFwiICsgY3VycmVudFByb2pOYW1lICsgXCIgYW5kIGN1cnJlbnQgcHJvaiBpbmRleCBpcyBcIiArIGN1cnJlbnRQcm9qSW5kZXgpO1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VlQWxsVG9nZ2xlXCIpLmlubmVySFRNTCA9PT0gXCJIaWRlIEFsbCBUby1EbydzXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgQVAgPSBhbGxQcm9qZWN0cztcbiAgICAgICAgICAgICAgICB2YXIgeSA9IGN1cnJlbnRQcm9qSW5kZXg7XG4gICAgICAgICAgICAgICAgdmFyIHogPSBgJHtjdXJyZW50UHJvak5hbWV9Ym94YDtcblxuICAgICAgICAgICAgICAgIHJlZnJlc2hDZW50ZXJET00oQVAsIHksIHopO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNpZGViYXJUb2dnbGUoY3VycmVudFByb2pOYW1lKTtcbiAgICAgICAgfSAvL2NsaWNraW5nIG9uIHNpZGViYXJfbmFtZSB0cmFzaGNhblxuICAgICAgICBlbHNlIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwic2lkZWJhcl9OYW1lX3JlbW92ZVwiIHx8IGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJmYS1yZWd1bGFyIGZhLXRyYXNoLWNhblwiKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LmNvbmZpcm0oXCJUaGlzIHdpbGwgY29tcGxldGVseSBlcmFzZSB0aGlzIGxpc3QhXFxuQXJlIHlvdSBzdXJlP1wiKSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRvUmVtb3ZlUHJvak5hbWUgPSBlLnRhcmdldC5jbG9zZXN0KFwiZGl2IGRpdlwiKS5pZC5zbGljZSgwLCAtMTApO1xuICAgICAgICAgICAgICAgIHZhciB0b1JlbW92ZVByb2pJbmRleCA9IGFsbFByb2plY3RzLmZpbmRJbmRleCgob2JqKSA9PiBvYmoucHJvak5hbWUgPT0gdG9SZW1vdmVQcm9qTmFtZSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0byBiZSByZW1vdmVkIHByb2ogaW5kZXggaXMgXCIsIHRvUmVtb3ZlUHJvakluZGV4KTtcbiAgICAgICAgICAgICAgICBsZXQgYWxsUmVtb3ZlZElkcyA9IGZpbmRBbGxJZHNSZW1vdmUodG9SZW1vdmVQcm9qSW5kZXgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWxsIHRoZXNlIHNob3VsZCBiZSByZW1vdmVkIChhbGxSZW1vdmVkSWRzKTogXCIgKyBhbGxSZW1vdmVkSWRzKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvL2xvY2FsU3RvcmFnZSByZW1vdmFsXG4gICAgICAgICAgICAgICAgLy9hbGxSZW1vdmVkSWRzIGlzIGFuIGFycmF5OyBpdGVyYXRlIHRocm91Z2ggdGhhdCB0byByZW1vdmUgZnJvbSBhbGxJdGVtc1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibGVuZ3RoIG9mIG9iamVjdDogXCIgKyBhbGxSZW1vdmVkSWRzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0eXBlOiBcIiArIHR5cGVvZiBhbGxSZW1vdmVkSWRzKTtcbiAgICAgICAgICAgICAgICByZW1vdmVGcm9tQWxsSXRlbXMoYWxsUmVtb3ZlZElkcyk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlUHJvamVjdCh0b1JlbW92ZVByb2pOYW1lKTtcblxuICAgICAgICAgICAgICAgIC8vcmVtb3ZlcyBzdHVmZiBmcm9tIGFsbEl0ZW1zXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGVja2luZyB0aGlzIGxpc3QgYWZ0ZXIgdXNpbmcgaXQgZm9yIGxvY2FsU3RvcmFnZTogXCIsIGFsbFJlbW92ZWRJZHMpO1xuICAgICAgICAgICAgICAgIGlkVG9JbmRleFJlbW92ZShhbGxSZW1vdmVkSWRzKTtcblxuICAgICAgICAgICAgICAgIGlmIChhbGxQcm9qZWN0cy5sZW5ndGggPT0gMikge1xuXG4gICAgICAgICAgICAgICAgICAgIHRvUmVtb3ZlUHJvakluZGV4ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFByb2pJbmRleCA9IDA7IC8vc2V0cyB0byBoaWRkZW4gcHJvalxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UHJvak5hbWUgPSBcIl9oSWREZU5cIjtcblxuXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbFRvQmVSZW1vdmVkID0gZS50YXJnZXQuY2xvc2VzdChcIi5lYWNoU2lkZWJhckNvbnRhaW5lclwiKTtcbiAgICAgICAgICAgICAgICAgICAgZWxUb0JlUmVtb3ZlZC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgYWxsUHJvamVjdHMuc3BsaWNlKHRvUmVtb3ZlUHJvakluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS50YWJsZShhbGxQcm9qZWN0cyk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEN1cnJlbnQgcHJvaiBpbmRleCBpcyAke2N1cnJlbnRQcm9qSW5kZXh9IGFuZCBuYW1lIGlzICR7Y3VycmVudFByb2pOYW1lfWApO1xuICAgICAgICAgICAgICAgICAgICBhbGxFbXB0eSgpO1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVTZWVBbGxCdG4oKTtcbiAgICAgICAgICAgICAgICAgICAgc2VlQWxsKGFsbEl0ZW1zKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRvUmVtb3ZlUHJvakluZGV4ID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFByb2pJbmRleCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvL0RPTVxuICAgICAgICAgICAgICAgICAgICB2YXIgZWxUb0JlUmVtb3ZlZCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIuZWFjaFNpZGViYXJDb250YWluZXJcIik7XG4gICAgICAgICAgICAgICAgICAgIGVsVG9CZVJlbW92ZWQucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgYWxsUHJvamVjdHMuc3BsaWNlKHRvUmVtb3ZlUHJvakluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS50YWJsZShhbGxQcm9qZWN0cyk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qTmFtZSA9IGFsbFByb2plY3RzW2N1cnJlbnRQcm9qSW5kZXhdLnByb2pOYW1lO1xuICAgICAgICAgICAgICAgICAgICBzaWRlYmFyVG9nZ2xlKGN1cnJlbnRQcm9qTmFtZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEN1cnJlbnQgcHJvaiBpbmRleCBpcyAke2N1cnJlbnRQcm9qSW5kZXh9IGFuZCBuYW1lIGlzICR7Y3VycmVudFByb2pOYW1lfWApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJiZWxvdyBpcyBhbGxQcm9qXCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLnRhYmxlKGFsbFByb2plY3RzKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJiZWxvdyBpcyBhbGxJdGVtc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS50YWJsZShhbGxJdGVtcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFByb2pJbmRleCA9IHRvUmVtb3ZlUHJvakluZGV4IC0gMTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFByb2pOYW1lID0gYWxsUHJvamVjdHNbY3VycmVudFByb2pJbmRleF0ucHJvak5hbWU7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEN1cnJlbnQgcHJvaiBpbmRleCBpcyAke2N1cnJlbnRQcm9qSW5kZXh9IGFuZCBuYW1lIGlzICR7Y3VycmVudFByb2pOYW1lfWApO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vRE9NXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbFRvQmVSZW1vdmVkID0gZS50YXJnZXQuY2xvc2VzdChcIi5lYWNoU2lkZWJhckNvbnRhaW5lclwiKTtcbiAgICAgICAgICAgICAgICAgICAgZWxUb0JlUmVtb3ZlZC5yZW1vdmUoKTtcblxuICAgICAgICAgICAgICAgICAgICBhbGxQcm9qZWN0cy5zcGxpY2UodG9SZW1vdmVQcm9qSW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoaXMgaXMgYWZ0ZXIgdGhlIHJlbW92YWxzXCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLnRhYmxlKGFsbFByb2plY3RzKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS50YWJsZShhbGxJdGVtcyk7XG4gICAgICAgICAgICAgICAgICAgIHNpZGViYXJUb2dnbGUoY3VycmVudFByb2pOYW1lKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJzaWRlYmFyX05hbWVfZWRpdFwiIHx8IGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJmYS1yZWd1bGFyIGZhLXBlbi10by1zcXVhcmVcIikge1xuICAgICAgICAgICAgdmFyIHRvRWRpdFByb2pOYW1lID0gZS50YXJnZXQuY2xvc2VzdChcImRpdiBkaXZcIikuaWQuc2xpY2UoMCwgLTgpO1xuICAgICAgICAgICAgdmFyIHRvRWRpdFByb2pJbmRleCA9IGFsbFByb2plY3RzLmZpbmRJbmRleCgob2JqKSA9PiBvYmoucHJvak5hbWUgPT0gdG9FZGl0UHJvak5hbWUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwcm9qIG5hbWUgJiBpbmRleCwgcmVzcGVjdGl2ZWx5IFwiICsgdG9FZGl0UHJvak5hbWUgKyBcIiBcIiArIHRvRWRpdFByb2pJbmRleCk7XG4gICAgICAgICAgICBsZXQgbmV3TmFtZSA9IHByb21wdChcIldoYXQgZG8geW91IHdhbnQgdGhlIG5ldyBuYW1lIHRvIGJlP1wiLCBcIlwiKTtcbiAgICAgICAgICAgIGlmIChuZXdOYW1lID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdOYW1lICE9PSBudWxsICYmIGFsbFByb2plY3RzLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgYWxsUHJvamVjdHNbdG9FZGl0UHJvakluZGV4XS5zZXROZXdQcm9qTmFtZShuZXdOYW1lKTtcbiAgICAgICAgICAgICAgICBzZXROZXdTaWRlTmFtZXModG9FZGl0UHJvak5hbWUsIG5ld05hbWUpOy8vRE9NIGFuZCBpZCBjaGFuZ2VzIFxuICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qTmFtZSA9IG5ld05hbWU7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFByb2pOYW1lICsgXCIgXCIgKyBjdXJyZW50UHJvakluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5pZCA9PT0gXCJzZWVBbGxUb2dnbGVcIikge1xuICAgICAgICAgICAgdG9nZ2xlU2VlQWxsQnRuKCk7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWVBbGxUb2dnbGVcIikuaW5uZXJIVE1MID09IFwiSGlkZSBBbGwgVG8tRG8nc1wiKSB7XG4gICAgICAgICAgICAgICAgc2VlQWxsKGFsbEl0ZW1zKTtcbiAgICAgICAgICAgICAgICBsYXN0UHJvak5hbWUgPSBjdXJyZW50UHJvak5hbWU7XG4gICAgICAgICAgICAgICAgbGFzdFByb2pJbmRleCA9IGN1cnJlbnRQcm9qSW5kZXg7XG4gICAgICAgICAgICAgICAgLy9ob2xkcyBpbmZvIG9mIGxhc3Qgdmlld2VkIGZvciBpZiB1c2VyIGRlY2lkZXMgdG8gaGlkZSBhbGwgaXRlbXNcbiAgICAgICAgICAgICAgICBjdXJyZW50UHJvak5hbWUgPSBcIl9oSWREZU5cIjtcbiAgICAgICAgICAgICAgICBjdXJyZW50UHJvakluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5hbWUgYW5kIGluZGV4OiBcIiArIGN1cnJlbnRQcm9qTmFtZSArIFwiIFwiICsgY3VycmVudFByb2pJbmRleCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qTmFtZSA9IGxhc3RQcm9qTmFtZTtcbiAgICAgICAgICAgICAgICBjdXJyZW50UHJvakluZGV4ID0gbGFzdFByb2pJbmRleDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5FVyBuYW1lIGFuZCBpbmRleDogXCIgKyBjdXJyZW50UHJvak5hbWUgKyBcIiBcIiArIGN1cnJlbnRQcm9qSW5kZXgpO1xuICAgICAgICAgICAgICAgIHZhciBBUCA9IGFsbFByb2plY3RzO1xuICAgICAgICAgICAgICAgIHZhciB5ID0gY3VycmVudFByb2pJbmRleDtcbiAgICAgICAgICAgICAgICB2YXIgeiA9IGAke2N1cnJlbnRQcm9qTmFtZX1ib3hgO1xuXG4gICAgICAgICAgICAgICAgcmVmcmVzaENlbnRlckRPTShhbGxQcm9qZWN0cywgeSwgeik7XG4gICAgICAgICAgICAgICAgc2lkZWJhclRvZ2dsZShjdXJyZW50UHJvak5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGUudGFyZ2V0LmlkID09PSBcInNpZGViYXJOYW1lc09ubHlcIikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJvbmx5IHRoZSBzaWRlYmFyIGVtcHR5IHNwYWNlIVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSAgXG4gICAgfSlcblxuICAgIC8qIHdoYXQgaXMgdGhpcyBqYW5rIGNvZGUgKi9cbiAgICBjb25zdCBhbGxJdGVtQm94TGlzdGVuZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FsbFRhc2tzQm94Jyk7XG4gICAgYWxsSXRlbUJveExpc3RlbmVycy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cbiAgICAgICAgdmFyIGJ0blBhcmVudFByb2pOYW1lID0gZS50YXJnZXQuY2xvc2VzdChcImRpdi5hZGRlZF90YXNrc1wiKS5pZC5zcGxpdCgnXycpWzBdOyBcbiAgICAgICAgY3VycmVudFByb2pOYW1lID0gYnRuUGFyZW50UHJvak5hbWU7XG4gICAgICAgIHZhciBidG5QYXJlbnRJbmRleCA9IGFsbFByb2plY3RzLmZpbmRJbmRleCgob2JqKSA9PiBvYmoucHJvak5hbWUgPT0gYnRuUGFyZW50UHJvak5hbWUpO1xuICAgICAgICBjdXJyZW50UHJvakluZGV4ID0gYnRuUGFyZW50SW5kZXg7XG4gICAgICAgIHZhciBlZGl0Rm9ybUNvbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRGb3JtQ29udGFpbmVyXCIpO1xuICAgICAgICB2YXIgZWRpdEZvcm1NYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNlZGl0Rm9ybSBbaWRePWVkaXRdXCIpO1xuICAgICAgICB2YXIgZWRpdEZvcm1BcnJheSA9IFsuLi5lZGl0Rm9ybU1haW5dXG5cbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoXCJkaXZcIikuY2xhc3NOYW1lICE9PSBcInRhc2tfYnV0dG9uX2hvbGRlclwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vdGhpbmcgc2hvdWxkIGJlIGhhcHBlbmluZyBoZXJlLi4uXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LnBhcmVudE5vZGUuY2xvc2VzdChcImRpdlwiKS5jbGFzc05hbWUgIT09IFwidGFza19idXR0b25faG9sZGVyXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm90aGluZyBoYXBwZW5pbmcgaGVyZSBFSVRIRVIuLi4uXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoXCJidXR0b25cIikuY2xhc3NOYW1lID09PSBcImV4cGFuZHNlbGZfYnV0dG9uXCIgJiYgZS50YXJnZXQuY2xvc2VzdChcImJ1dHRvblwiKS5pZC5zbGljZSgxMCwgMTcpID09PSBcIkFsbFBhZ2VcIikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuY2xvc2VzdChcImJ1dHRvblwiKS5pZCk7XG4gICAgICAgICAgICB2YXIgZXhwYW5kSUQgPSBlLnRhcmdldC5jbG9zZXN0KFwiYnV0dG9uXCIpLmlkLnNsaWNlKDE4KTtcbiAgICAgICAgICAgIHZhciB0b0V4cGFuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2V4cGFuZElEfV9leHBhbmRNZV9BbGxQYWdlYCk7XG4gICAgICAgICAgICB2YXIgZXhwYW5kSWRXaXRoQVAgPSBlLnRhcmdldC5jbG9zZXN0KFwiYnV0dG9uXCIpLmlkLnNsaWNlKDEwKTtcbiAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgdG9nZ2xlSG9sZGVyID0gZS50YXJnZXQuY2xvc2VzdChcImRpdi5hZGRlZF90YXNrc1wiKS5sYXN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgdmFyIGV4cGFuZFRvZ0NvdW50ZXIgPSB0b2dnbGVIb2xkZXIuaW5uZXJIVE1MO1xuXG4gICAgICAgICAgICBpZiAoZXhwYW5kVG9nQ291bnRlciUyICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgdG9FeHBhbmQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXhwYW5kVG9nQ291bnRlciUyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdG9FeHBhbmQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJiZWZvcmUgZnhuIFwiICsgZXhwYW5kVG9nQ291bnRlcik7XG4gICAgICAgICAgICB0b2dnbGVFeHBhbmQoZXhwYW5kSWRXaXRoQVAsIGV4cGFuZFRvZ0NvdW50ZXIpO1xuICAgICAgICAgICAgZXhwYW5kVG9nQ291bnRlcisrO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZnRlciBmeG4gXCIgKyBleHBhbmRUb2dDb3VudGVyKTtcbiAgICAgICAgICAgIHRvZ2dsZUhvbGRlci5pbm5lckhUTUwgPSBleHBhbmRUb2dDb3VudGVyO1xuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoXCJidXR0b25cIikuY2xhc3NOYW1lID09PSBcInJlbW92ZXNlbGZfYnV0dG9uXCIgJiYgZS50YXJnZXQuY2xvc2VzdChcImJ1dHRvblwiKS5pZC5zbGljZSg0LCAxMSkgPT09IFwiQWxsUGFnZVwiKSB7XG4gICAgICAgICAgICAvL2ZpbmRzIHVuaXF1ZSBJRCBvZiB0YXNrIHdpdGhpbiBhbGxJdGVtc1xuICAgICAgICAgICAgdmFyIHRhc2tJZEluQWxsID0gZS50YXJnZXQuY2xvc2VzdChcImJ1dHRvblwiKS5pZC5zbGljZSgxMik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRhc2tJZElOYWxsIGlzIFwiICsgdGFza0lkSW5BbGwpO1xuICAgICAgICAgICAgZ2V0UHJvakluZm9Gb3JBbGxQcm9qKHRhc2tJZEluQWxsKTsgLy9zZXRzIGN1cnJlbnRQcm9qIE5hbWUgJiBJbmRleCB0byBzcGVjaWZpYyB0YXNrXG4gICAgICAgICAgICByZW1vdmVJdGVtRnJvbUFsbCh0YXNrSWRJbkFsbCk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibmV3IHByb2ogbmFtZSAmIGluZGV4XCIgKyBjdXJyZW50UHJvak5hbWUgKyBcIiBcIiArIGN1cnJlbnRQcm9qSW5kZXgpO1xuXG4gICAgICAgICAgICAvL3JlbW92ZXMgdGFzayBmcm9tIHJlc3BlY3RpdmUgcHJvamVjdCB3aXRoaW4gYWxsUHJvamVjdHNcbiAgICAgICAgICAgIHJlbW92ZUl0ZW1Gcm9tQ3VycmVudChjdXJyZW50UHJvakluZGV4LCB0YXNrSWRJbkFsbCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImJlbG93IGlzIGFsbFByb2plY3RzXCIpO1xuICAgICAgICAgICAgY29uc29sZS50YWJsZShhbGxQcm9qZWN0cyk7XG4gICAgICAgICAgICBzZWVBbGwoYWxsSXRlbXMpO1xuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoXCJidXR0b25cIikuY2xhc3NOYW1lID09PSBcImVkaXRUYXNrX2J1dHRvblwiICYmIGUudGFyZ2V0LmNsb3Nlc3QoXCJidXR0b25cIikuaWQuc2xpY2UoOCwgMTUpID09PSBcIkFsbFBhZ2VcIikge1xuXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmRDb3ZlclN0dWZmXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICB2YXIgZWRpdElEID0gZS50YXJnZXQuY2xvc2VzdChcImJ1dHRvblwiKS5pZC5zbGljZSgxNik7XG4gICAgICAgICAgICBzZXRDdXJyZW50SW50b0VkaXRvcihlZGl0SUQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYWxsUHJvamVjdHMpO1xuXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1cGRhdGVFZGl0QnV0dG9uXCIpO1xuICAgICAgICAgICAgdXBkYXRlVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0RWRpdEludG9DdXJyZW50QWxsKGVkaXRJRCk7XG4gICAgICAgICAgICAgICAgZWRpdEZvcm1Db250LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmRDb3ZlclN0dWZmXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zdCBjYW5jZWxVcGRhdGVUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW5jZWxFZGl0QnV0dG9uXCIpO1xuICAgICAgICAgICAgY2FuY2VsVXBkYXRlVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZWRpdEZvcm1Db250LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmRDb3ZlclN0dWZmXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gXG4gICAgICAgIC8qIEZpZ3VyZSBvdXQgaG93IHRvIGNvbmZpZ3VyZSB0aGlzIGZ4biBzbyB0aGF0IGVkaXQgZ29lcyBpbnRvIGFsbFByb2ogYW5kIGFsbEl0ZW0gbGlzdCEgKi9cbiAgICAgICAgZnVuY3Rpb24gc2V0RWRpdEludG9DdXJyZW50QWxsKHgpIHtcblxuICAgICAgICAgICAgdmFyIGVkaXRlZFRpdGxlID0gZWRpdEZvcm0uZWRpdFRpdGxlLnZhbHVlO1xuICAgICAgICAgICAgdmFyIGVkaXRlZERlc2NyaXB0aW9uID0gZWRpdEZvcm0uZWRpdERlc2NyaXB0aW9uLnZhbHVlO1xuICAgICAgICAgICAgdmFyIGVkaXRlZER1ZURhdGUgPSBlZGl0Rm9ybS5lZGl0RHVlRGF0ZS52YWx1ZTtcbiAgICAgICAgICAgIHZhciBlZGl0ZWRQcmlvcml0eSA9IGVkaXRGb3JtLmVkaXRQcmlvcml0eS52YWx1ZTtcbiAgICAgICAgICAgIHZhciBlZGl0ZWROb3RlcyA9IGVkaXRGb3JtLmVkaXROb3Rlcy52YWx1ZTtcbiAgICBcbiAgICAgICAgICAgIHZhciBjdXJyZW50VGFza0luZGV4QWxsID0gYWxsSXRlbXMuZmluZEluZGV4KChvYmopID0+IG9iai5JRCA9PT0gYCR7eH1gKTtcbiAgICAgICAgICAgIGFsbEl0ZW1zLmZpbmRJbmRleCgob2JqKSA9PiBvYmouSUQgPT09IGAke3h9YCk7XG4gICAgICAgICAgICB2YXIgaW5zZXJ0VGFyZyA9IGFsbEl0ZW1zW2Ake2N1cnJlbnRUYXNrSW5kZXhBbGx9YF1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaW5zZXJ0VGFyZy50aXRsZVNldE5ldyhlZGl0ZWRUaXRsZSk7XG4gICAgICAgICAgICBpbnNlcnRUYXJnLmRlc2NyaXB0aW9uU2V0TmV3KGVkaXRlZERlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgIGluc2VydFRhcmcuZHVlRGF0ZVNldE5ldyhlZGl0ZWREdWVEYXRlKTtcbiAgICAgICAgICAgIGluc2VydFRhcmcucHJpb3JpdHlTZXROZXcoZWRpdGVkUHJpb3JpdHkpO1xuICAgICAgICAgICAgaW5zZXJ0VGFyZy5ub3Rlc1NldE5ldyhlZGl0ZWROb3Rlcyk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmVsb3cgaXMgYWxsUHJvamVjdHNcIik7XG4gICAgICAgICAgICBjb25zb2xlLnRhYmxlKGFsbFByb2plY3RzKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmVsb3cgaXMgYWxsSXRlbXNcIik7XG4gICAgICAgICAgICBjb25zb2xlLnRhYmxlKGFsbEl0ZW1zKTtcblxuICAgICAgICAgICAgc2VlQWxsKGFsbEl0ZW1zKTsgICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHNldEN1cnJlbnRJbnRvRWRpdG9yKHNvbWVJRCkge1xuICAgICAgICAgICAgZWRpdEZvcm1Db250LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICB2YXIgY3VycmVudEluZm9BcnJheSA9IFtdO1xuICAgICAgICAgICAgLy9nbyB3aXRoaW4gYWxsSXRlbXMgJiBmaW5kIHNwZWNpZmljIGluZGV4XG4gICAgICAgICAgICB2YXIgY3VycmVudFRhc2tJbmRleEFsbCA9IGFsbEl0ZW1zLmZpbmRJbmRleCgob2JqKSA9PiBvYmouSUQgPT09IGAke3NvbWVJRH1gKTtcbiAgICAgICAgICAgIGFsbEl0ZW1zLmZpbmRJbmRleCgob2JqKSA9PiBvYmouSUQgPT09IGAke3NvbWVJRH1gKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRUYXNrSW5kZXhBbGwpO1xuICAgICAgICAgICAgLy90YWtlIGVhY2ggLi4uIGRlc2NyaXB0aW9uPyBwYXJ0IG9mIGNvbnN0cnVjdG9yIGFuZCBnZXQgdGhlIHZhbHVlcyBtYXRjaGVkIHRvIGVhY2ggcGFydFxuICAgICAgICAgICAgLy9wdXNoIHNhaWQgdmFsdWVzL21hdGNoZXMgaW50byBjdXJyZW50SW5mb0FycmF5XG4gICAgICAgICAgICB2YXIgdGVzdG9iaiA9IGFsbEl0ZW1zW2Ake2N1cnJlbnRUYXNrSW5kZXhBbGx9YF07XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0ZXN0b2JqKTtcbiAgICBcbiAgICAgICAgICAgIC8vZmluZHMga2V5IHZhbHVlIHBhaXJzIG9mIHRhc2tzJ3MgdGhpcy5pbmZvIHR5cGVcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHRlc3RvYmopKSB7XG4gICAgICAgICAgICAgICAgaWYgKFtcImRlc2NyaXB0aW9uXCIsIFwiZHVlRGF0ZVwiLCBcIm5vdGVzXCIsIFwicHJpb3JpdHlcIiwgXCJ0aXRsZVwiXS5pbmRleE9mKGtleSkgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgeCA9IFtrZXksIHZhbHVlXTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEluZm9BcnJheS5wdXNoKHgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRJbmZvQXJyYXkpO1xuXG4gICAgICAgICAgICBlZGl0Rm9ybUFycmF5LmZvckVhY2goaW5wdXQgPT4ge1xuICAgIFxuICAgICAgICAgICAgICAgIHZhciBpbnB1dFNsaWNlZCA9IGlucHV0Lm5hbWUuc2xpY2UoMCwgLTUpO1xuICAgIFxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwLCBtID0gY3VycmVudEluZm9BcnJheS5sZW5ndGg7IGogPCBtOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0U2xpY2VkID09PSBcImRlc2NyaXB0aW9uXCIgJiYgaW5wdXRTbGljZWQgPT09IGN1cnJlbnRJbmZvQXJyYXlbal1bMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdERlc2NyaXB0aW9uXCIpLmlubmVySFRNTCA9IGAke2N1cnJlbnRJbmZvQXJyYXlbal1bMV19YDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbnB1dFNsaWNlZCA9PT0gY3VycmVudEluZm9BcnJheVtqXVswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgYCR7Y3VycmVudEluZm9BcnJheVtqXVsxXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSlcblxuXG4gICAgY29uc3QgcHJvalN3aXRjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlYmFyJyk7XG4gICAgcHJvalN3aXRjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cbiAgICAgICAgdmFyIGJ0blBhcmVudFByb2pOYW1lID0gZS50YXJnZXQuY2xvc2VzdChcImgzXCIpLmlkLnNsaWNlKDAsIC0zKTsgXG4gICAgICAgIGN1cnJlbnRQcm9qTmFtZSA9IGJ0blBhcmVudFByb2pOYW1lO1xuICAgICAgICB2YXIgYnRuUGFyZW50SW5kZXggPSBhbGxQcm9qZWN0cy5maW5kSW5kZXgoKG9iaikgPT4gb2JqLnByb2pOYW1lID09IGJ0blBhcmVudFByb2pOYW1lKTtcbiAgICAgICAgY3VycmVudFByb2pJbmRleCA9IGJ0blBhcmVudEluZGV4O1xuICAgICAgICB2YXIgZWRpdEZvcm1Db250ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0Rm9ybUNvbnRhaW5lclwiKTtcbiAgICAgICAgdmFyIGVkaXRGb3JtTWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjZWRpdEZvcm0gW2lkXj1lZGl0XVwiKTtcbiAgICAgICAgdmFyIGVkaXRGb3JtQXJyYXkgPSBbLi4uZWRpdEZvcm1NYWluXVxuXG4gICAgICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KFwiZGl2XCIpLmNsYXNzTmFtZSAhPT0gXCJ0YXNrX2J1dHRvbl9ob2xkZXJcIikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJub3RoaW5nIHNob3VsZCBiZSBoYXBwZW5pbmcgaGVyZS4uLlwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5wYXJlbnROb2RlLmNsb3Nlc3QoXCJkaXZcIikuY2xhc3NOYW1lICE9PSBcInRhc2tfYnV0dG9uX2hvbGRlclwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5wYXJlbnROb2RlLmNsb3Nlc3QoXCJkaXZcIikpO1xuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoXCJidXR0b25cIikuY2xhc3NOYW1lID09PSBcInJlbW92ZXNlbGZfYnV0dG9uXCIpIHtcbiAgICAgICAgICAgIC8vZmluZHMgcGFyZW50IGJveCBJRDsgc2V0cyBjdXJyZW50cHJvaiBuYW1lICYgcmVzcGVjdGl2ZSBjdXJyZW50cHJvaiBpbmRleCB0byByZW1vdmUgYnV0dG9uJnRhc2sgZnJvbVxuICAgICAgICAgIFxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjdXJyZW50UHJvakluZGV4IGlzIFwiICsgY3VycmVudFByb2pJbmRleCk7XG4gICAgICAgICAgICAvL2ZpbmRzIHVuaXF1ZSBJRCBvZiB0YXNrIHdpdGhpbiBhbGxJdGVtc1xuICAgICAgICAgICAgdmFyIHRhc2tJZEluQWxsID0gZS50YXJnZXQuY2xvc2VzdChcImJ1dHRvblwiKS5pZC5zbGljZSg0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGFza0lkSU5hbGwgaXMgXCIgKyB0YXNrSWRJbkFsbCk7XG5cbiAgICAgICAgICAgIHJlbW92ZUl0ZW1Gcm9tQWxsKHRhc2tJZEluQWxsKTtcblxuICAgICAgICAgICAgdmFyIEFQID0gYWxsUHJvamVjdHM7XG4gICAgICAgICAgICB2YXIgeSA9IGN1cnJlbnRQcm9qSW5kZXg7XG4gICAgICAgICAgICB2YXIgeiA9IGAke2N1cnJlbnRQcm9qTmFtZX1ib3hgO1xuXG4gICAgICAgICAgICByZW1vdmVJdGVtRnJvbUN1cnJlbnQoY3VycmVudFByb2pJbmRleCwgdGFza0lkSW5BbGwpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJiZWxvdyBpcyBhbGxQcm9qZWN0c1wiKTtcbiAgICAgICAgICAgIGNvbnNvbGUudGFibGUoYWxsUHJvamVjdHMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJiZWxvdyBpcyBhbGxJdGVtc1wiKTtcbiAgICAgICAgICAgIGNvbnNvbGUudGFibGUoYWxsSXRlbXMpO1xuXG4gICAgICAgICAgICBzdG9yZVByb2plY3QoYWxsUHJvamVjdHNbY3VycmVudFByb2pJbmRleF0pO1xuICAgICAgICAgICAgLy9yZWZyZXNoZXMgZm9sZGVyIHRvIHVwZGF0ZSB3L28gcmVtb3ZlZCB0YXNrXG4gICAgICAgICAgICB2YXIgc3RvcmFnZVJlbW92YWxGcm9tQWxsID0gW107XG4gICAgICAgICAgICBzdG9yYWdlUmVtb3ZhbEZyb21BbGwucHVzaCh0YXNrSWRJbkFsbCk7XG4gICAgICAgICAgICByZW1vdmVGcm9tQWxsSXRlbXMoc3RvcmFnZVJlbW92YWxGcm9tQWxsKTtcblxuICAgICAgICAgICAgcmVmcmVzaENlbnRlckRPTShBUCwgeSwgeik7XG4gICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xvc2VzdChcImJ1dHRvblwiKS5jbGFzc05hbWUgPT09IFwiZXhwYW5kc2VsZl9idXR0b25cIikge1xuICAgICAgICAgICAgdmFyIGV4cGFuZElEID0gZS50YXJnZXQuY2xvc2VzdChcImJ1dHRvblwiKS5pZC5zbGljZSgxMCk7XG4gICAgICAgICAgICB2YXIgdG9FeHBhbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtleHBhbmRJRH1fZXhwYW5kTWVgKTtcbiAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgdG9nZ2xlSG9sZGVyID0gZS50YXJnZXQuY2xvc2VzdChcImRpdi5hZGRlZF90YXNrc1wiKS5sYXN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgdmFyIGV4cGFuZFRvZ0NvdW50ZXIgPSB0b2dnbGVIb2xkZXIuaW5uZXJIVE1MO1xuXG4gICAgICAgICAgICBpZiAoZXhwYW5kVG9nQ291bnRlciUyICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgdG9FeHBhbmQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXhwYW5kVG9nQ291bnRlciUyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdG9FeHBhbmQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJiZWZvcmUgZnhuIFwiICsgZXhwYW5kVG9nQ291bnRlcik7XG4gICAgICAgICAgICB0b2dnbGVFeHBhbmQoZXhwYW5kSUQsIGV4cGFuZFRvZ0NvdW50ZXIpO1xuICAgICAgICAgICAgZXhwYW5kVG9nQ291bnRlcisrO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZnRlciBmeG4gXCIgKyBleHBhbmRUb2dDb3VudGVyKTtcbiAgICAgICAgICAgIHRvZ2dsZUhvbGRlci5pbm5lckhUTUwgPSBleHBhbmRUb2dDb3VudGVyO1xuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoXCJidXR0b25cIikuY2xhc3NOYW1lID09PSBcImVkaXRUYXNrX2J1dHRvblwiKSB7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dyb3VuZENvdmVyU3R1ZmZcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIHZhciBlZGl0SUQgPSBlLnRhcmdldC5jbG9zZXN0KFwiYnV0dG9uXCIpLmlkLnNsaWNlKDgpO1xuICAgICAgICAgICAgc2V0Q3VycmVudEludG9FZGl0b3IoZWRpdElEKTtcblxuICAgICAgICAgICAgY29uc3QgdXBkYXRlVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXBkYXRlRWRpdEJ1dHRvblwiKTtcbiAgICAgICAgICAgIHVwZGF0ZVRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHNldEVkaXRJbnRvQ3VycmVudChlZGl0SUQpO1xuICAgICAgICAgICAgICAgIHNldEVkaXRJbnRvQWxsKGVkaXRJRCk7XG4gICAgICAgICAgICAgICAgZWRpdEZvcm1Db250LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmRDb3ZlclN0dWZmXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICAvKmZvciBzb21lIHJlYXNvbiwgdGhlIE1FVEhPRFMgb2YgdGhlIHRhc2tzIHdvbid0IHdvcmsgaGVyZSBpZiB0aGV5J3JlIGZyb20gbG9jYWxTdG9yYWdlLi4uKi9cbiAgICAgICAgICAgICAgICBzdG9yZVByb2plY3QoYWxsUHJvamVjdHNbY3VycmVudFByb2pJbmRleF0pO1xuICAgICAgICAgICAgICAgIHN0b3JlQWxsSXRlbXMoYWxsSXRlbXMpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnN0IGNhbmNlbFVwZGF0ZVRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbmNlbEVkaXRCdXR0b25cIik7XG4gICAgICAgICAgICBjYW5jZWxVcGRhdGVUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlZGl0Rm9ybUNvbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dyb3VuZENvdmVyU3R1ZmZcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgXG4gICAgICAgIH0gXG5cbiAgICAgICAgZnVuY3Rpb24gc2V0RWRpdEludG9DdXJyZW50KHgpIHtcblxuICAgICAgICAgICAgdmFyIGVkaXRlZFRpdGxlID0gZWRpdEZvcm0uZWRpdFRpdGxlLnZhbHVlO1xuICAgICAgICAgICAgdmFyIGVkaXRlZERlc2NyaXB0aW9uID0gZWRpdEZvcm0uZWRpdERlc2NyaXB0aW9uLnZhbHVlO1xuICAgICAgICAgICAgdmFyIGVkaXRlZER1ZURhdGUgPSBlZGl0Rm9ybS5lZGl0RHVlRGF0ZS52YWx1ZTtcbiAgICAgICAgICAgIHZhciBlZGl0ZWRQcmlvcml0eSA9IGVkaXRGb3JtLmVkaXRQcmlvcml0eS52YWx1ZTtcbiAgICAgICAgICAgIHZhciBlZGl0ZWROb3RlcyA9IGVkaXRGb3JtLmVkaXROb3Rlcy52YWx1ZTtcbiAgICBcbiAgICAgICAgICAgIHZhciBjdXJyZW50VGFza0luZGV4ID0gYWxsUHJvamVjdHNbY3VycmVudFByb2pJbmRleF1bXCJ0YXNrTGlzdFwiXS5maW5kSW5kZXgoKG9iaikgPT4gb2JqLklEID09PSBgJHt4fWApO1xuICAgICAgICAgICAgdmFyIGluc2VydFRhcmcgPSBhbGxQcm9qZWN0c1tjdXJyZW50UHJvakluZGV4XVtcInRhc2tMaXN0XCJdW2Ake2N1cnJlbnRUYXNrSW5kZXh9YF07XG5cbiAgICAgICAgICAgIGluc2VydFRhcmcudGl0bGUgPSBlZGl0ZWRUaXRsZTtcbiAgICAgICAgICAgIGluc2VydFRhcmcuZGVzY3JpcHRpb24gPSBlZGl0ZWREZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIGluc2VydFRhcmcuZHVlRGF0ZSA9IGVkaXRlZER1ZURhdGU7XG4gICAgICAgICAgICBpbnNlcnRUYXJnLnByaW9yaXR5ID0gZWRpdGVkUHJpb3JpdHk7XG4gICAgICAgICAgICBpbnNlcnRUYXJnLm5vdGVzID0gZWRpdGVkTm90ZXM7XG5cbiAgICAgICAgICAgIC8qIGluc2VydFRhcmcudGl0bGVTZXROZXcoZWRpdGVkVGl0bGUpO1xuICAgICAgICAgICAgaW5zZXJ0VGFyZy5kZXNjcmlwdGlvblNldE5ldyhlZGl0ZWREZXNjcmlwdGlvbik7XG4gICAgICAgICAgICBpbnNlcnRUYXJnLmR1ZURhdGVTZXROZXcoZWRpdGVkRHVlRGF0ZSk7XG4gICAgICAgICAgICBpbnNlcnRUYXJnLnByaW9yaXR5U2V0TmV3KGVkaXRlZFByaW9yaXR5KTtcbiAgICAgICAgICAgIGluc2VydFRhcmcubm90ZXNTZXROZXcoZWRpdGVkTm90ZXMpOyAqL1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImJlbG93IGlzIGFsbFByb2plY3RzXCIpO1xuICAgICAgICAgICAgY29uc29sZS50YWJsZShhbGxQcm9qZWN0cyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImJlbG93IGlzIGFsbEl0ZW1zXCIpO1xuICAgICAgICAgICAgY29uc29sZS50YWJsZShhbGxJdGVtcyk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzZXRFZGl0SW50b0FsbCh4KSB7XG5cbiAgICAgICAgICAgIHZhciBlZGl0ZWRUaXRsZSA9IGVkaXRGb3JtLmVkaXRUaXRsZS52YWx1ZTtcbiAgICAgICAgICAgIHZhciBlZGl0ZWREZXNjcmlwdGlvbiA9IGVkaXRGb3JtLmVkaXREZXNjcmlwdGlvbi52YWx1ZTtcbiAgICAgICAgICAgIHZhciBlZGl0ZWREdWVEYXRlID0gZWRpdEZvcm0uZWRpdER1ZURhdGUudmFsdWU7XG4gICAgICAgICAgICB2YXIgZWRpdGVkUHJpb3JpdHkgPSBlZGl0Rm9ybS5lZGl0UHJpb3JpdHkudmFsdWU7XG4gICAgICAgICAgICB2YXIgZWRpdGVkTm90ZXMgPSBlZGl0Rm9ybS5lZGl0Tm90ZXMudmFsdWU7XG4gICAgXG4gICAgICAgICAgICB2YXIgY3VycmVudFRhc2tJbmRleEFsbCA9IGFsbEl0ZW1zLmZpbmRJbmRleCgob2JqKSA9PiBvYmouSUQgPT09IGAke3h9YCk7XG4gICAgICAgICAgICBhbGxJdGVtcy5maW5kSW5kZXgoKG9iaikgPT4gb2JqLklEID09PSBgJHt4fWApO1xuICAgICAgICAgICAgdmFyIGluc2VydFRhcmcgPSBhbGxJdGVtc1tgJHtjdXJyZW50VGFza0luZGV4QWxsfWBdXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGluc2VydFRhcmcudGl0bGVTZXROZXcoZWRpdGVkVGl0bGUpO1xuICAgICAgICAgICAgaW5zZXJ0VGFyZy5kZXNjcmlwdGlvblNldE5ldyhlZGl0ZWREZXNjcmlwdGlvbik7XG4gICAgICAgICAgICBpbnNlcnRUYXJnLmR1ZURhdGVTZXROZXcoZWRpdGVkRHVlRGF0ZSk7XG4gICAgICAgICAgICBpbnNlcnRUYXJnLnByaW9yaXR5U2V0TmV3KGVkaXRlZFByaW9yaXR5KTtcbiAgICAgICAgICAgIGluc2VydFRhcmcubm90ZXNTZXROZXcoZWRpdGVkTm90ZXMpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImJlbG93IGlzIGFsbFByb2plY3RzXCIpO1xuICAgICAgICAgICAgY29uc29sZS50YWJsZShhbGxQcm9qZWN0cyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImJlbG93IGlzIGFsbEl0ZW1zXCIpO1xuICAgICAgICAgICAgY29uc29sZS50YWJsZShhbGxJdGVtcyk7XG5cbiAgICAgICAgICAgIHNlZUFsbChhbGxJdGVtcyk7ICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzZXRDdXJyZW50SW50b0VkaXRvcihzb21lSUQpIHtcbiAgICAgICAgICAgIGVkaXRGb3JtQ29udC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlZGl0Rm9ybUFycmF5IFwiICsgZWRpdEZvcm1BcnJheSk7XG4gICAgICAgICAgICB2YXIgY3VycmVudEluZm9BcnJheSA9IFtdO1xuICAgICAgICAgICAgLy9nbyB3aXRoaW4gYWxsUHJvamVjdHMsIHRvIGN1cnJlbnQgcHJvamVjdCBpbmRleCwgdG8gdGFza2xpc3QsIHRvIHNwZWNpZmljIGluZGV4IHdpdGhpbiB0YXNrbGlzdFxuICAgICAgICAgICAgdmFyIGN1cnJlbnRUYXNrSW5kZXggPSBhbGxQcm9qZWN0c1tjdXJyZW50UHJvakluZGV4XVtcInRhc2tMaXN0XCJdLmZpbmRJbmRleCgob2JqKSA9PiBvYmouSUQgPT09IGAke3NvbWVJRH1gKTtcbiAgICAgICAgICAgIC8vdGFrZSBlYWNoIC4uLiBkZXNjcmlwdGlvbj8gcGFydCBvZiBjb25zdHJ1Y3RvciBhbmQgZ2V0IHRoZSB2YWx1ZXMgbWF0Y2hlZCB0byBlYWNoIHBhcnRcbiAgICAgICAgICAgIC8vcHVzaCBzYWlkIHZhbHVlcy9tYXRjaGVzIGludG8gY3VycmVudEluZm9BcnJheVxuICAgICAgICAgICAgdmFyIHRlc3RvYmogPSBhbGxQcm9qZWN0c1tjdXJyZW50UHJvakluZGV4XVtcInRhc2tMaXN0XCJdW2Ake2N1cnJlbnRUYXNrSW5kZXh9YF07XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0ZXN0b2JqKTtcbiAgICBcbiAgICAgICAgICAgIC8vZmluZHMga2V5IHZhbHVlIHBhaXJzIG9mIHRhc2tzJ3MgdGhpcy5pbmZvIHR5cGVcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHRlc3RvYmopKSB7XG4gICAgICAgICAgICAgICAgaWYgKFtcImRlc2NyaXB0aW9uXCIsIFwiZHVlRGF0ZVwiLCBcIm5vdGVzXCIsIFwicHJpb3JpdHlcIiwgXCJ0aXRsZVwiXS5pbmRleE9mKGtleSkgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgeCA9IFtrZXksIHZhbHVlXTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEluZm9BcnJheS5wdXNoKHgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRJbmZvQXJyYXkpO1xuXG4gICAgICAgICAgICBlZGl0Rm9ybUFycmF5LmZvckVhY2goaW5wdXQgPT4ge1xuICAgIFxuICAgICAgICAgICAgICAgIHZhciBpbnB1dFNsaWNlZCA9IGlucHV0Lm5hbWUuc2xpY2UoMCwgLTUpO1xuICAgIFxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwLCBtID0gY3VycmVudEluZm9BcnJheS5sZW5ndGg7IGogPCBtOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0U2xpY2VkID09PSBcImRlc2NyaXB0aW9uXCIgJiYgaW5wdXRTbGljZWQgPT09IGN1cnJlbnRJbmZvQXJyYXlbal1bMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdERlc2NyaXB0aW9uXCIpLmlubmVySFRNTCA9IGAke2N1cnJlbnRJbmZvQXJyYXlbal1bMV19YDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbnB1dFNsaWNlZCA9PT0gY3VycmVudEluZm9BcnJheVtqXVswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgYCR7Y3VycmVudEluZm9BcnJheVtqXVsxXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSkgXG5cbiAgICBjb25zdCBhZGROZXdQcm9qQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdwcm9qX2FkZFwiKTtcbiAgICBhZGROZXdQcm9qQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgdmFyIHN0b3BGcm9tQWRkaW5nTmV3ID0gMDtcbiAgICAgICAgdmFyIHRha2VuUHJvak5hbWVzID0gW107XG4gICAgICAgIGFsbFByb2plY3RzLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgdGFrZW5Qcm9qTmFtZXMucHVzaChlbC5wcm9qTmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0YWtlblByb2pOYW1lcy5mb3JFYWNoKGVrID0+IHtcbiAgICAgICAgICAgIGlmIChlayA9PT0gYWRkbmV3cHJvamZvcm0ubmV3cHJval9uYW1lLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2UgZW50ZXIgYSB1bmlxdWUgcHJvamVjdCBuYW1lLlwiKTtcbiAgICAgICAgICAgICAgICBzdG9wRnJvbUFkZGluZ05ldyA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIS9cXFMvLnRlc3QoYWRkbmV3cHJvamZvcm0ubmV3cHJval9uYW1lLnZhbHVlKSkge1xuICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBwcm9qZWN0IG5hbWUuXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHN0b3BGcm9tQWRkaW5nTmV3ID09IDApIHtcbiAgICAgICAgICAgIHZhciBhID0gYWRkbmV3cHJvamZvcm0ubmV3cHJval9uYW1lLnZhbHVlO1xuICAgICAgICAgICAgdmFyIHggPSBuZXcgUHJvamVjdChhKTtcbiAgICAgICAgICAgIGFkZFByb2pUb0FsbCh4KTtcbiAgICAgICAgICAgIGNvbnNvbGUudGFibGUoYWxsUHJvamVjdHMpO1xuICAgICAgICAgICAgYWRkUHJvalRvU2lkZSh4KTsgLy9ET01cbiAgICAgICAgICAgIGN1cnJlbnRQcm9qTmFtZSA9IHgucHJvak5hbWUgXG4gICAgICAgICAgICBjdXJyZW50UHJvakluZGV4ID0gYWxsUHJvamVjdHMuZmluZEluZGV4KChvYmopID0+IG9iai5wcm9qTmFtZSA9PT0gYCR7Y3VycmVudFByb2pOYW1lfWApOy8vc3dpdGNoIG5ld2x5IG1hZGUgcHJvaiB0byBjdXJyZW50UHJvak5hbWUgYW5kIGN1cnJlbnRQcm9qSW5kZXhcbiAgICAgICAgICAgIHNpZGViYXJUb2dnbGUoY3VycmVudFByb2pOYW1lKTtcblxuICAgICAgICAgICAgLy9sb2NhbHN0b3JhZ2UgaGVyZVxuXG4gICAgICAgICAgICBzdG9yZVByb2plY3QoYWxsUHJvamVjdHNbY3VycmVudFByb2pJbmRleF0pOyAvL1wicmVmcmVzaGVzXCIgcHJvaiBpbiBsb2NhbFN0b3JhZ2UgdG8gaW5jbHVkZSBuZXcgYWRkZWQgdGFza1xuICAgICAgICAgICAgc3RvcmVQcm9qZWN0KGFsbFByb2plY3RzWzBdKTtcbiAgICAgICAgICAgIC8vYWxzbyBhZGRzIGhpZGRlbiBwcm9qIHNvIHRoYXQgdGhlIFwic3BhY2VcIiBpcyB0YWtlbiB3aGVuIGxvY2Fsc3RvcmFnZSBpcyBhY2Nlc3NlZCBhbmQgRE9NIGRpc3BsYXllZFxuXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZG5ld3Byb2pmb3JtXCIpLnJlc2V0KCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImN1cnJlbnRwcm9qIG5hbWUgaXMgXCIgKyBjdXJyZW50UHJvak5hbWUgKyBcIiBhbmQgY3VycmVudCBwcm9qIGluZGV4IGlzIFwiICsgY3VycmVudFByb2pJbmRleCk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2pGb3JtQ29udGFpbmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dyb3VuZENvdmVyU3R1ZmZcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGRhcmtMaWdodFRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9nZ2xlSG9sZGVyXCIpO1xuICAgIGRhcmtMaWdodFRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXJOYW1lc09ubHlcIikuY2xhc3NOYW1lICE9PSBcImRhcmstbW9kZVwiKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZ2dsZWRPZmZcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2dnbGVkT25cIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXJOYW1lc09ubHlcIikuY2xhc3NOYW1lID09PSBcImRhcmstbW9kZVwiKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZ2dsZWRPZmZcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9nZ2xlZE9uXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfTtcbiAgICAgICAgdG9nZ2xlRGFyaygpO1xuICAgIH0pXG5cbiAgICAvLyBsb2NhbFN0b3JhZ2UgY29kZSB1bmRlciBoZXJlXG5cbiAgICBsZXQgcmV0cmlldmVkUHJvakRhdGEgPSBbXTtcbiAgICBsZXQgcmV0cmlldmVkQWxsRGF0YSA9IFtdO1xuXG4gICAgaWYgKHN0b3JhZ2VUZXN0KCkpIHtcbiAgICAgICAgcmV0cmlldmVQcm9qZWN0cyhyZXRyaWV2ZWRQcm9qRGF0YSwgcmV0cmlldmVkQWxsRGF0YSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJldHJpZXZlZFByb2pEYXRhKTtcbiAgICAgICAgY29uc29sZS5sb2cocmV0cmlldmVkQWxsRGF0YSk7XG4gICAgICAgIGxldCByZXRyaWV2ZWRDdXJyZW50UHJvak5hbWUgPSBudWxsO1xuICAgICAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgICAgIC8vLy8vLy8vbmVlZCB0byBjaGVjayBJRiB0aGVyZSBpcyBzb21ldGhpbmcgYmVzaWRlcyBoaWRkZW5cbiAgICAgICAgcmV0cmlldmVkQ3VycmVudFByb2pOYW1lID0gcmV0cmlldmVkUHJvakRhdGFbMV0ucHJvak5hbWU7XG4gICAgICAgIGN1cnJlbnRQcm9qTmFtZSA9IHJldHJpZXZlZEN1cnJlbnRQcm9qTmFtZTtcbiAgICAgICAgY3VycmVudFByb2pJbmRleCA9IDE7XG5cbiAgICAgICAgLy93aWxsIG5lZWQgdG8gd3JpdGUgaWYvZWxzZSB0byBjaGVjayB0aGF0IHRoZXJlIEFSRSBwcm9qZWN0cyBhbmQgbm90IGp1c3QgYWxsSXRlbXMsIGFuZCB2aWNlIHZlcnNhXG4gICAgICAgIHJldHJpZXZlZFByb2pEYXRhLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgdmFyIHByb2pUb0JlQ29uc3RydWN0ZWQgPSBuZXcgUHJvamVjdChgJHtlbC5wcm9qTmFtZX1gKTtcbiAgICAgICAgICAgIGFkZFByb2pUb1NpZGUocHJvalRvQmVDb25zdHJ1Y3RlZCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlbC50YXNrTGlzdCk7XG4gICAgICAgICAgICBpZiAoZWwudGFza0xpc3QgIT09IDApIHtcbiAgICAgICAgICAgICAgICBlbC50YXNrTGlzdC5mb3JFYWNoKGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0aW5nIHRoZSBpZC4uLi5cIiArIGVtLklEKTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IGVtLnRpdGxlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYiA9IGVtLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IGVtLmR1ZURhdGU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkID0gZW0ucHJpb3JpdHk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gZW0ubm90ZXM7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmID0gZW0ucHJvamVjdDtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVtYWRlVGFzayA9IG5ldyBJdGVtKGEsIGIsIGMsIGQsIGUsIGYpXG4gICAgICAgICAgICAgICAgICAgIHJlbWFkZVRhc2suSUQgPSBlbS5JRDtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVtYWRlVGFzay5naXZlRGVldHMoKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcHJvalRvQmVDb25zdHJ1Y3RlZC50YXNrTGlzdC5wdXNoKGVtKTtcbiAgICAgICAgICAgICAgICB9KTsgXG4gICAgICAgICAgICAgICAgLy9hZGRzIGVhY2ggdGFza0xpc3QgaXRlbSBpbnRvIHJlbWFkZSBQcm9qZWN0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qVG9CZUNvbnN0cnVjdGVkKTtcbiAgICAgICAgICAgIGFsbFByb2plY3RzLnB1c2gocHJvalRvQmVDb25zdHJ1Y3RlZCk7XG5cbiAgICAgICAgICAgIHZhciBBUCA9IGFsbFByb2plY3RzO1xuICAgICAgICAgICAgdmFyIHkgPSBpbmRleCsrO1xuICAgICAgICAgICAgdmFyIHogPSBgJHtlbC5wcm9qTmFtZX1ib3hgO1xuXG4gICAgICAgICAgICByZWZyZXNoQ2VudGVyRE9NKEFQLCB5LCB6KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBhbGxQcm9qZWN0cyBiZWxvd2ApO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYWxsUHJvamVjdHMpO1xuICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0cmlldmVkQWxsRGF0YS5mb3JFYWNoKGVuID0+IHtcblxuICAgICAgICAgICAgdmFyIGEgPSBlbi50aXRsZTtcbiAgICAgICAgICAgIHZhciBiID0gZW4uZGVzY3JpcHRpb247XG4gICAgICAgICAgICB2YXIgYyA9IGVuLmR1ZURhdGU7XG4gICAgICAgICAgICB2YXIgZCA9IGVuLnByaW9yaXR5O1xuICAgICAgICAgICAgdmFyIGUgPSBlbi5ub3RlcztcbiAgICAgICAgICAgIHZhciBmID0gZW4ucHJvamVjdDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIHRhc2tUb0JlTWFkZSA9IG5ldyBJdGVtKGEsIGIsIGMsIGQsIGUsIGYpXG4gICAgICAgICAgICB0YXNrVG9CZU1hZGUuSUQgPSBlbi5JRDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2tUb0JlTWFkZSk7XG4gICAgICAgICAgICBhbGxJdGVtcy5wdXNoKHRhc2tUb0JlTWFkZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgYWxsSXRlbXMgYmVsb3dgKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFsbEl0ZW1zKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLyogdmFyIEFQID0gYWxsUHJvamVjdHM7XG4gICAgICAgIHZhciB5ID0gMDtcbiAgICAgICAgdmFyIHogPSBgJHtyZXRyaWV2ZWRDdXJyZW50UHJvak5hbWV9Ym94YDtcbiAgICAgICAgcmVmcmVzaENlbnRlckRPTShBUCwgeSwgeik7ICovXG5cbiAgICAgICAgc2lkZWJhclRvZ2dsZShyZXRyaWV2ZWRDdXJyZW50UHJvak5hbWUpO1xuXG4gICAgICAgIC8vY29uc29sZS5sb2cocmV0cmlldmVkRGF0YVsxXS50YXNrTGlzdFswXSk7XG4gICAgICAgIC8vY2FuIGdvIGludG8gZWFjaCBwcm9qIGZvbGRlciA+PiB0YXNrTGlzdCA+PiBlYWNoIHRhc2tcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgaGlkZGVuUHJvaiA9IG5ldyBQcm9qZWN0IChcIl9oSWREZU5cIik7XG4gICAgICAgIGFkZFByb2pUb0FsbChoaWRkZW5Qcm9qKTsgXG4gICAgICAgIGFkZFByb2pUb1NpZGUoaGlkZGVuUHJvaik7XG4gICAgICAgIC8vXCJob2xkZXJcIiBmb3IgdGFza3MgYWRkZWQgaW4gYWxsSXRlbXMgcGFnZTsgY3VycmVudFByb2pJbmRleCBvZiAwXG4gICAgICAgIHZhciBpbml0UHJvaiA9IG5ldyBQcm9qZWN0KFwiTXkgRmlyc3QgTGlzdFwiKTtcbiAgICAgICAgYWRkUHJvalRvQWxsKGluaXRQcm9qKTtcbiAgICAgICAgY3VycmVudFByb2pJbmRleCA9IGFsbFByb2plY3RzLmZpbmRJbmRleCgob2JqKSA9PiBvYmoucHJvak5hbWUgPT09IFwiTXkgRmlyc3QgTGlzdFwiKTtcbiAgICAgICAgY3VycmVudFByb2pOYW1lID0gYWxsUHJvamVjdHNbY3VycmVudFByb2pJbmRleF0ucHJvak5hbWU7XG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qSW5kZXggKyBjdXJyZW50UHJvak5hbWUpO1xuICAgICAgICBhZGRQcm9qVG9TaWRlKGluaXRQcm9qKTtcbiAgICAgICAgY29uc29sZS5sb2coYWxsUHJvamVjdHMpO1xuICAgIH1cblxuICAgIFxuXG4gICAgLy9kb24ndCBicmVhayBpZiBub3RoaW5nIGlzIGZvdW5kIGluIGxvY2FsU3RvcmFnZVxuICAgIC8vc3RvcmUgZWFjaCBwcm9qZWN0IGFuZCBpdCdzIG5hbWUgKG5vIG92ZXJ3cml0aW5nISB1bmlxdWUpXG4gICAgLy9yZXRyaWV2ZSBuYW1lXG5cbiAgICAvL3N0b3JlUHJvamVjdChoaWRkZW5Qcm9qKTsgdGVzdGluZyBhIHN0b3JlZCBwcm9qZWN0XG4gICAgXG4gICAgXG5cbiAgICAvL3N0b3JlUHJvamVjdChpbml0UHJvaik7XG5cbiAgICAvL3N0b3JhZ2VUZXN0KCk7IHdpbGwgcHJvYmFibHkgd2FudCB0byBhZGQgdGhpcyBiZWZvcmUgc3RvcmluZyBoaWRkZW4vaW5pdFByb2ogdG8gY2hlY2sgSUYgcGVyc29uIGhhcyBhbHJlYWR5IHZpc2l0ZWRcbiAgICBcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0b3JhZ2VUZXN0KCkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm8gYm9vdHkgdG8gYmUgZm91bmRcIik7XG4gICAgICAgIC8vcG9wdWxhdGVTdG9yYWdlKCk7Pz9cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGVyZSdzIHN0dWZmIGluIGhlcmUhXCIpO1xuICAgICAgICAvL2xvY2FsU3RvcmFnZSBpcyBOT1QgYXJyYXksIGp1c3Qgb2JqZWN0XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgICAgICAvKiB2YXIgcmV0cmlldmVkUHJvaiA9IHJldHJpZXZlUHJvamVjdChcIl9oSWREZU5cIik7XG4gICAgICAgIHZhciB0ZXN0UmV0cmlldmFsTmFtZSA9IHJldHJpZXZlZFByb2oucHJvak5hbWU7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXRyaWV2ZWRQcm9qZWN0IHByb2pOYW1lOiAnLCB0ZXN0UmV0cmlldmFsTmFtZSk7ICovXG4gICAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdG9yZUFsbEl0ZW1zKHgpIHtcbiAgeC5mb3JFYWNoKGVsID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgYUxsSXRFbVNfJHtlbC5JRH1gLCBKU09OLnN0cmluZ2lmeShlbCkpO1xuICAgIGNvbnNvbGUubG9nKGBTdG9yaW5nIGFsbEl0ZW1zIElEIG9mOiAke2VsLklEfWApXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdG9yZVByb2plY3QoeCkge1xuICBjb25zb2xlLmxvZyhgd2hhdCBpbiB0aGUgd29ybGQgaXMgWD8gSEVSRTogJHt4LnByb2pOYW1lfWApO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHt4LnByb2pOYW1lfWAsIEpTT04uc3RyaW5naWZ5KHgpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUZyb21BbGxJdGVtcyhvcmlnaW5hbElkQXJyYXkpIHtcbiAgdmFyIG5ld0lkQXJyYXkgPSBvcmlnaW5hbElkQXJyYXkuc2xpY2UoKTtcbiAgd2hpbGUgKG5ld0lkQXJyYXkubGVuZ3RoICE9PSAwKSB7XG4gICAgZm9yICh2YXIgcyA9IDA7IHMgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBzKyspIHtcbiAgICAgIGlmIChsb2NhbFN0b3JhZ2Uua2V5KHMpID09PSBgYUxsSXRFbVNfJHtuZXdJZEFycmF5WzBdfWApIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoaXMgaXMgd2hhdCBpcyBiZWluZyByZW1vdmVkIGluIHJlbW92ZUZyb21BbGw6IFwiICsgbmV3SWRBcnJheVswXSk7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYGFMbEl0RW1TXyR7bmV3SWRBcnJheVswXX1gKTtcbiAgICAgICAgICBuZXdJZEFycmF5LnNwbGljZSgwLCAxKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGNvbnNvbGUubG9nKG9yaWdpbmFsSWRBcnJheSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQcm9qZWN0KHgpIHtcbiAgY29uc29sZS5sb2coXCJUaGlzIGlzIHdoYXQgaXMgYmVpbmcgcmVtb3ZlZCBpbiByZW1vdmVQcm9qOiBcIiArIHgpXG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xufVxuLyogZXhwb3J0IGZ1bmN0aW9uIHN0b3JlVGFzayh4KSB7XG4gIGNvbnNvbGUubG9nKGBJRCBmb3IgdGFzazogJHt4LklEfWApO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHt4LklEfWAsIEpTT04uc3RyaW5naWZ5KHgpKTtcbn0gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHJpZXZlUHJvamVjdHMoc29tZUFycmF5LCBhbm90aGVyQXJyYXkpIHtcblxuICAvL2l0ZXJhdGVzIHRocm91Z2ggbG9jYWxTdG9yYWdlIGZvciBoaWRkZW4gYW5kIGFsbCBwcm9qZWN0c1xuICAvL3RoZXNlIHByb2plY3RzIGRvIE5PVCBoYXZlIG1ldGhvZHMgeWV0XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHByb2pSZXRyaWV2YWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbFN0b3JhZ2Uua2V5KGkpKTtcbiAgICB2YXIgcGFyc2VkUHJvalJldHJpZXYgPSBKU09OLnBhcnNlKHByb2pSZXRyaWV2YWwpO1xuXG4gICAgaWYgKHBhcnNlZFByb2pSZXRyaWV2LnByb2pOYW1lKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInByb2pOYW1lICsgSUQ6IFwiICsgcGFyc2VkUHJvalJldHJpZXYucHJvak5hbWUgKyBcIiBcIiArIHBhcnNlZFByb2pSZXRyaWV2LklEKTtcbiAgICAgIHNvbWVBcnJheS5wdXNoKHBhcnNlZFByb2pSZXRyaWV2KTtcbiAgICB9IGVsc2UgaWYgKHBhcnNlZFByb2pSZXRyaWV2LklELnNsaWNlKDAsNCkgPT09IFwicHJvalwiKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkFMTElURU1TIHRpdGxlLCBkZWV0cyAmIElEOiBcIiArIHBhcnNlZFByb2pSZXRyaWV2LnRpdGxlICsgXCIgXCIgKyBwYXJzZWRQcm9qUmV0cmlldi5kZXNjcmlwdGlvbiArIFwiIFwiICsgcGFyc2VkUHJvalJldHJpZXYuSUQpO1xuICAgICAgYW5vdGhlckFycmF5LnB1c2gocGFyc2VkUHJvalJldHJpZXYpO1xuICAgIH1cbiAgfSAgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXRyaWV2ZVByb2plY3QoeCkge1xuXG4gICAgdmFyIHJldHJpZXZlZFByb2plY3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHt4fWApO1xuICAgIHZhciBwYXJzZWRQcm9qZWN0ID0gSlNPTi5wYXJzZShyZXRyaWV2ZWRQcm9qZWN0KTtcbiAgICByZXR1cm4gcGFyc2VkUHJvamVjdDtcbiAgICAvL2FkZCByZW5hbWluZyBmdW5jdGlvbiBiYWNrIGJ5IHVzaW5nIGNvbnN0cnVjdG9yIGFnYWluXG5cblxuICAgIC8qIGNvbnNvbGUubG9nKCdyZXRyaWV2ZWRQcm9qZWN0IEFGVEVSIGFkZGluZzogJyArICBwYXJzZWRQcm9qZWN0KTtcbiAgICBwYXJzZWRQcm9qZWN0LnNldE5ld1Byb2pOYW1lKFwiVGVzdGluZ0NoYW5nZVwiKTtcbiAgICBjb25zb2xlLmxvZyhwYXJzZWRQcm9qZWN0LmRpc3BsYXlQcm9qKCkpO1xuICAgIGNvbnNvbGUubG9nKFwidXNpbmcgdGhlIGZ4bjogXCIgKyBwYXJzZWRQcm9qZWN0LmdpdmVQcm9qTmFtZSgpKTsgKi9cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=