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

            insertTarg.titleSetNew(editedTitle);
            insertTarg.descriptionSetNew(editedDescription);
            insertTarg.dueDateSetNew(editedDueDate);
            insertTarg.prioritySetNew(editedPriority);
            insertTarg.notesSetNew(editedNotes);

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

                    projToBeConstructed.taskList.push(remadeTask);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksY0FBYyxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVks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Q0E7O0FBRUE7O0FBRUEscUJBQXFCO0FBQ3JCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3QyQmU7QUFDZjtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1RUFBdUU7QUFDdkU7QUFDQTs7QUFFTztBQUNQO0FBQ0EscUNBQXFDLE1BQU07QUFDM0MsMkNBQTJDLE1BQU07QUFDakQsR0FBRztBQUNIOztBQUVPO0FBQ1AsK0NBQStDLFdBQVc7QUFDMUQsMEJBQTBCLFdBQVc7QUFDckM7O0FBRU87QUFDUDtBQUNBO0FBQ0Esb0JBQW9CLHlCQUF5QjtBQUM3Qyw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsS0FBSztBQUNuQywwQkFBMEIsS0FBSztBQUMvQixFQUFFOztBQUVLOztBQUVQO0FBQ0E7QUFDQSxrQkFBa0IseUJBQXlCO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87O0FBRVAsbURBQW1ELEVBQUU7QUFDckQ7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUU7QUFDbkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby10b2RheS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tdG9kYXkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLXRvZGF5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tdG9kYXkvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLXRvZGF5Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Nsb25lT2JqZWN0L2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLXRvZGF5Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRMb2NhbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tdG9kYXkvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tdG9kYXkvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby10b2RheS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tdG9kYXkvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcm91bmRpbmdNZXRob2RzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLXRvZGF5Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9jb21wYXJlQXNjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLXRvZGF5Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby10b2RheS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLXRvZGF5Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5Nb250aHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tdG9kYXkvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJblNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tdG9kYXkvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2VuZE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLXRvZGF5Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9lbmRPZk1vbnRoL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLXRvZGF5Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby10b2RheS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZm9ybWF0RGlzdGFuY2VUb05vdy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby10b2RheS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNMYXN0RGF5T2ZNb250aC9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby10b2RheS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tdG9kYXkvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby10b2RheS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLXRvZGF5Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLXRvZGF5Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby10b2RheS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0TG9uZy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby10b2RheS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tdG9kYXkvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2xvY2FsaXplL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLXRvZGF5Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9tYXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby10b2RheS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLXRvZGF5Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tdG9kYXkvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tdG9kYXkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tdG9kYXkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLXRvZGF5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLXRvZGF5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLXRvZGF5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tdG9kYXkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby10b2RheS8uL3NyYy9ET010b2RvLmpzIiwid2VicGFjazovL3RvLWRvLXRvZGF5Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLXRvZGF5Ly4vc3JjL2xvZ2ljdG9kby5qcyIsIndlYnBhY2s6Ly90by1kby10b2RheS8uL3NyYy9zdG9yYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qIFRyeWluZyBtb2JpbGUgZmlyc3QgZGV2ICovXFxuXFxuOnJvb3Qge1xcbiAgICAtLXByaW1hcnk6ICNmNWIzMTY7XFxuICAgIC0tc2Vjb25kYXJ5OiAjOGQ4ZDhkO1xcbiAgICAtLXRlcnRpYXJ5OiAjNjY3MjkyO1xcbiAgICAtLXF1YXRlcm5hcnk6ICNkOWQ5ZDk7XFxufVxcblxcbmh0bWwsIGJvZHksICNvdmVyYWxsV3JhcHBlciB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNiYWNrZ3JvdW5kQ292ZXJTdHVmZiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC44KTtcXG4gICAgei1pbmRleDogMTI7XFxufVxcblxcbiNub3RCYWNrZ3JvdW5kQ292ZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNSUgOTUlO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM1JSA2NSU7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS10ZXJ0aWFyeSk7XFxufVxcblxcbiNoZWFkZXIuZGFyay1tb2RlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXFxuI2hlYWRlckljb25Ib2xkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4jdG9nZ2xlZE9uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2RhcmtDb3VudCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNoZWFkZXJJY29uSG9sZGVyIGgzIHtcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcbn1cXG5cXG4jc2lkZWJhck5hbWVzT25seSB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTsgKi9cXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXF1YXRlcm5hcnkpO1xcblxcbiAgICBmbGV4OiAxIDEgYXV0bztcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgbWluLWhlaWdodDogMTAwcHg7XFxufVxcblxcbiNzaWRlYmFyTmFtZXNPbmx5ID4gZGl2Om50aC1vZi10eXBlKDIpIHtcXG4gICAgZGlzcGxheTpub25lO1xcbn1cXG5cXG5baWRePVxcXCJfaElkRGVOXFxcIl0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHZhcigtLXRlcnRpYXJ5KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcXVhdGVybmFyeSk7XFxufVxcblxcbiNjb250ZW50LmRhcmstbW9kZSwgI3NpZGViYXJOYW1lc09ubHkuZGFyay1tb2RlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB2YXIoLS1xdWF0ZXJuYXJ5KTtcXG59XFxuXFxuI2FsbFRhc2tzQm94IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgei1pbmRleDogNTtcXG59XFxuXFxuZGl2LmFkZGVkX3Byb2plY3RzIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbmRpdi5hZGRlZF9wcm9qZWN0cy5kYXJrLW1vZGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHZhcigtLXF1YXRlcm5hcnkpO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIHdoaXRlO1xcbn1cXG5cXG5kaXYjc3RvcEFsbEVtcHR5IHtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbmRpdiNzdG9wQWxsRW1wdHkgPiBoMiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5kaXYjc3RvcEFsbEVtcHR5ID4gYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICAgIGJveC1zaGFkb3c6IDFweCAycHggM3B4IHJnYigwLDAsMCwwLjYpO1xcbn1cXG5cXG5kaXYjc3RvcEFsbEVtcHR5ID4gYnV0dG9uLmRhcmstbW9kZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogdmFyKC0tcXVhdGVybmFyeSk7XFxufVxcblxcblxcbi5lYWNoU2lkZWJhckNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBoZWlnaHQ6IDQycHg7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdGVydGlhcnkpO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDJweCByZ2IoMCwwLDAsMC42KTtcXG59XFxuXFxuLmVhY2hTaWRlYmFyQ29udGFpbmVyLmRhcmstbW9kZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogdmFyKC0tcXVhdGVybmFyeSk7XFxuICAgIGJveC1zaGFkb3c6IDFweCAycHggMnB4IHJnYmEoMTQwLCAxNDAsIDE0MCwgMC42KTtcXG59XFxuXFxuZGl2LnNpZGViYXJfTmFtZXMge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG5cXG5kaXYuc2lkZWJhcl9OYW1lX2VkaXQge1xcbiAgICBmb250LXNpemU6ICBjbGFtcCgwLjJyZW0sIDFyZW0sIDEuMXJlbSk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAzdmg7XFxuICAgIHdpZHRoOiAzdmg7XFxuICAgIHRvcDogM3B4O1xcbiAgICByaWdodDogNXB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuZGl2LnNpZGViYXJfTmFtZV9yZW1vdmUge1xcbiAgICBmb250LXNpemU6IGNsYW1wKDAuMnJlbSwgMXJlbSwgMS4xcmVtKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcbiAgICBoZWlnaHQ6IDN2aDtcXG4gICAgd2lkdGg6IDN2aDtcXG4gICAgYm90dG9tOiAzcHg7XFxuICAgIHJpZ2h0OiA1cHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5kaXZbaWQkPVxcXCJIaWdoXFxcIl0sIGRpdltpZCQ9XFxcIkhpZ2hfQWxsUGFnZVxcXCJdIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDI1NSwgMTIwLCAxMjApO1xcbn1cXG5cXG5kaXZbaWQkPVxcXCJNZWRpdW1cXFwiXSwgZGl2W2lkJD1cXFwiTWVkaXVtX0FsbFBhZ2VcXFwiXSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNTUsIDE5MywgMzYpO1xcbn1cXG5cXG5kaXZbaWQkPVxcXCJMb3dcXFwiXSwgZGl2W2lkJD1cXFwiTG93X0FsbFBhZ2VcXFwiXSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxMjksIDI1MCwgMzApO1xcbn1cXG5cXG5oMy5hZGRlZF9wcm9qX2JveC5kYXJrLW1vZGUsIGRpdi5hZGRlZF90YXNrcy5kYXJrLW1vZGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHZhcigtLXF1YXRlcm5hcnkpO1xcbn1cXG5cXG5oMy5hZGRlZF9wcm9qX2JveCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXF1YXRlcm5hcnkpO1xcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMnM7XFxufVxcblxcbmRpdi5hZGRlZF90YXNrcyB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcXVhdGVybmFyeSk7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwJSA0MCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDV2aCkgbWlubWF4KDI1JSwgMWZyKTtcXG59XFxuXFxuZGl2LmFkZGVkX3Rhc2tzID4gaDQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5kaXYubm93WW91U2VlTWUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuZGl2LmFkZGVkX2R1ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuZGl2LnRhc2tfYnV0dG9uX2hvbGRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG5kaXYudGFza19idXR0b25faG9sZGVyID4gYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAyMnB4O1xcbn1cXG5cXG5kaXYudGhlRXhwYW5kYWJsZXMge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgbWF4LWhlaWdodDogMHZoO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB6LWluZGV4OiAtMTtcXG5cXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIFxcbn1cXG5cXG5kaXYudGhlRXhwYW5kYWJsZXMuYWN0aXZlIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgbWluLWhlaWdodDogOHZoO1xcbiAgICBtYXgtaGVpZ2h0OiBub25lO1xcbiAgICB6LWluZGV4OiAzO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNTUsIDExMCwgMjA0KTsgKi9cXG59XFxuLyogQnV0dG9uIHVzZWQgdG8gb3BlbiB0aGUgZm9ybXMgLSBmaXhlZCBhdCB0aGUgYm90dG9tIG9mIHRoZSBwYWdlICovXFxuXFxuI2J1dHRvbkhvbGRlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBib3R0b206IDI1cHg7XFxuICAgIHJpZ2h0OiAyOHB4O1xcbiAgICB3aWR0aDogMjd2dztcXG59XFxuI2FkZG5ldyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogNHB4IDJweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgd2lkdGg6IDI3dnc7XFxufVxcbiAgXFxuI25ld3Byb2pfYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiA0cHggMnB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgICB3aWR0aDogMjd2dztcXG59XFxuXFxuLyogVGhlIHBvcHVwIGZvcm0gLSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xcbiN0b2RvRm9ybUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgei1pbmRleDogMTU7XFxufVxcbiAgXFxuI3Byb2pGb3JtQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBoZWlnaHQ6IDYwJTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDE1O1xcbn1cXG4gIFxcbiNlZGl0Rm9ybUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgei1pbmRleDogMTU7XFxufVxcblxcbi8qIEFkZCBzdHlsZXMgdG8gdGhlIGZvcm0gY29udGFpbmVyICovXFxuI2FkZG5ld2Zvcm0ge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jYWRkbmV3Zm9ybS5kYXJrLW1vZGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbiNhZGRuZXdwcm9qZm9ybSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jYWRkbmV3cHJvamZvcm0uZGFyay1tb2RlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4jYWRkbmV3Zm9ybSA+IGRpdjpudGgtY2hpbGQoNCksICNhZGRuZXdmb3JtID4gZGl2Om50aC1jaGlsZCg1KSB7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4jYWRkbmV3Zm9ybSA+IGRpdjpudGgtY2hpbGQoMykge1xcbiAgICBtYXJnaW46IDNweDtcXG59XFxuXFxuI2FkZG5ld2Zvcm0gPiBkaXY6bnRoLWNoaWxkKDMpID4gaW5wdXQsICNhZGRuZXdmb3JtID4gZGl2Om50aC1jaGlsZCg0KSA+IHNlbGVjdCB7XFxuICAgIG1hcmdpbi10b3A6IDNweDtcXG59XFxuICBcXG4jZWRpdEZvcm0ge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jZWRpdEZvcm0uZGFyay1tb2RlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4jZWRpdEZvcm0gPiBkaXY6bnRoLWNoaWxkKDQpLCAjZWRpdEZvcm0gPiBkaXY6bnRoLWNoaWxkKDUpIHtcXG4gICAgbWFyZ2luOiA0cHg7XFxufVxcblxcbiNlZGl0Rm9ybSA+IGRpdjpudGgtY2hpbGQoMykge1xcbiAgICBtYXJnaW46IDJweDtcXG59XFxuXFxuI2VkaXRGb3JtID4gZGl2Om50aC1jaGlsZCgzKSA+IGlucHV0LCAjZWRpdEZvcm0gPiBkaXY6bnRoLWNoaWxkKDQpID4gc2VsZWN0IHtcXG4gICAgbWFyZ2luLXRvcDogM3B4O1xcbn1cXG4gIFxcbiAgLyogRnVsbC13aWR0aCBpbnB1dCBmaWVsZHMgKi9cXG4jYWRkbmV3Zm9ybSBpbnB1dFt0eXBlPXRleHRdLCAjYWRkbmV3Zm9ybSB0ZXh0YXJlYSwgI2VkaXRGb3JtIGlucHV0W3R5cGU9dGV4dF0sICNlZGl0Rm9ybSB0ZXh0YXJlYSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSm9zdCcsIHNhbnMtc2VyaWY7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIG1hcmdpbjogNXB4IDAgOHB4IDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcXG59XFxuXFxuI2FkZG5ld3Byb2pmb3JtIGlucHV0W3R5cGU9dGV4dF0sICNlZGl0Rm9ybSBpbnB1dFt0eXBlPXRleHRdIHtcXG4gICAgZm9udC1mYW1pbHk6ICdKb3N0Jywgc2Fucy1zZXJpZjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgbWFyZ2luOiAxMnB4IDAgMTJweCAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XFxufVxcblxcbiNhZGRuZXdmb3JtIGlucHV0W3R5cGU9dGV4dF06OnBsYWNlaG9sZGVyLCAjYWRkbmV3cHJvamZvcm0gaW5wdXRbdHlwZT10ZXh0XTo6cGxhY2Vob2xkZXIsICNhZGRuZXdmb3JtIHRleHRhcmVhOjpwbGFjZWhvbGRlciwgI2VkaXRGb3JtIGlucHV0W3R5cGU9dGV4dF0sICNlZGl0Rm9ybSB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgICBmb250LWZhbWlseTogJ0pvc3QnLCBzYW5zLXNlcmlmO1xcbn1cXG4gIFxcbi8qIFdoZW4gdGhlIGlucHV0cyBnZXQgZm9jdXMsIGRvIHNvbWV0aGluZyAqL1xcbiNhZGRuZXdmb3JtIGlucHV0W3R5cGU9dGV4dF06Zm9jdXMsICNhZGRuZXdwcm9qZm9ybSBpbnB1dFt0eXBlPXRleHRdOmZvY3VzLCAjYWRkbmV3Zm9ybSB0ZXh0YXJlYTpmb2N1cywgI2VkaXRGb3JtIGlucHV0W3R5cGU9dGV4dF06Zm9jdXMsICNlZGl0Rm9ybSB0ZXh0YXJlYTpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcbiAgXFxuLyogU2V0IGEgc3R5bGUgZm9yIHRoZSBzdWJtaXQvbG9naW4gYnV0dG9uICovXFxuI2FkZG5ld2Zvcm0gYnV0dG9uLCAjZWRpdEZvcm0gYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnkpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHBhZGRpbmc6IDEycHggMTVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XFxuICAgIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuI2FkZG5ld3Byb2pmb3JtIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5KTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBwYWRkaW5nOiAxMnB4IDE1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG4gICAgb3BhY2l0eTogMC44OyBcXG59XFxuICBcXG4vKiBBZGQgYSByZWQgYmFja2dyb3VuZCBjb2xvciB0byB0aGUgY2FuY2VsIGJ1dHRvbiAqL1xcbiNhZGRuZXdmb3JtIGJ1dHRvbiNjYW5jZWxfYnV0dG9uLCAjYWRkbmV3cHJvamZvcm0gYnV0dG9uI25ld3Byb2pfY2FuY2VsLCAjZWRpdEZvcm0gYnV0dG9uI2NhbmNlbEVkaXRCdXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1xdWF0ZXJuYXJ5KTtcXG59XFxuICBcXG4vKiBBZGQgc29tZSBob3ZlciBlZmZlY3RzIHRvIGJ1dHRvbnMgKi9cXG4jYWRkbmV3Zm9ybSAgYnV0dG9uOmhvdmVyLCAjYWRkbmV3OmhvdmVyLCAjYWRkbmV3cHJvamZvcm0gYnV0dG9uOmhvdmVyLCAjbmV3cHJval9idXR0b246aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5pbnB1dCN0aXRsZS5uZWVkc0ZpbGxpbmcsICNkZXNjcmlwdGlvbi5uZWVkc0ZpbGxpbmcge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjE5LCA1NCwgNTQpO1xcbn1cXG5cXG5zZWxlY3Qge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMTZweCAyMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXG59XFxuXFxuaW5wdXQuZGFyay1tb2RlLCB0ZXh0YXJlYS5kYXJrLW1vZGUsIHNlbGVjdC5kYXJrLW1vZGUsXFxuI2FkZG5ld2Zvcm0gaW5wdXRbdHlwZT10ZXh0XS5kYXJrLW1vZGUsICNhZGRuZXdmb3JtIHRleHRhcmVhLmRhcmstbW9kZSwgI2VkaXRGb3JtIGlucHV0W3R5cGU9dGV4dF0uZGFyay1tb2RlLCAjZWRpdEZvcm0gdGV4dGFyZWEuZGFyay1tb2RlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcXVhdGVybmFyeSk7XFxufVxcblxcbi8qIFNjcm9sbGJhciAqL1xcblxcbi8qIHdpZHRoICovXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogN3B4O1xcbn1cXG5cXG4vKiBUcmFjayAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcXG59XFxuXFxuLyogSGFuZGxlICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTkwLCAxOTAsIDE5MCk7XFxufVxcblxcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiKDEwMywgMTAzLCAxMDMpO1xcbn1cXG5cXG4vKiBzbWFsbCB0YWJsZXQgc2l6ZXMgKi9cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MjBweCkge1xcblxcbiAgICBkaXYjc3RvcEFsbEVtcHR5IHtcXG4gICAgICAgIHBhZGRpbmc6IDE1cHggMjVweDtcXG4gICAgfVxcbiAgICBkaXYjc3RvcEFsbEVtcHR5ID4gYnV0dG9uIHtcXG4gICAgICAgIGhlaWdodDogNS4yNXZoO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIH1cXG4gICAgLmVhY2hTaWRlYmFyQ29udGFpbmVyIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgIGhlaWdodDogNDhweDtcXG4gICAgICAgIG9wYWNpdHk6IDAuODtcXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdGVydGlhcnkpO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG4gICAgICAgIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDJweCAycHggcmdiKDAsMCwwLDAuNik7XFxuICAgIH1cXG4gICAgZGl2LmFkZGVkX3Byb2plY3RzIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB9XFxuICAgIGRpdi5hZGRlZF90YXNrcyB7XFxuICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIH1cXG4gICAgZGl2LnRhc2tfYnV0dG9uX2hvbGRlciA+IGJ1dHRvbiB7XFxuICAgICAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIH1cXG4gICAgZGl2LnNpZGViYXJfTmFtZV9lZGl0IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMC41cmVtLCAxLjJyZW0sIDEuNHJlbSk7XFxuICAgIH1cXG4gICAgZGl2LnNpZGViYXJfTmFtZV9yZW1vdmUge1xcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgwLjVyZW0sIDEuMnJlbSwgMS40cmVtKTtcXG4gICAgfVxcbiAgICBkaXYuc2lkZWJhcl9OYW1lcyB7XFxuICAgICAgICB3aWR0aDogOTIlO1xcbiAgICB9XFxuICAgIFxcbn1cXG5cXG4vKiBsYXJnZSB0YWJsZXQgJiBsYXB0b3Agc2l6ZXMgKi9cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkge1xcbiAgICBcXG59XFxuXFxuLyogZGVza3RvcCAqL1xcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xcbiAgICBcXG59XFxuXFxuLypNeSBpbml0aWFsIGNvZGUgYmVsb3cgZm9yIGRlc2t0b3AqL1xcblxcbi8qIGh0bWwsIGJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogNXZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3NpZGViYXJOYW1lc09ubHkge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctdG9wOiA1dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogM3JlbTtcXG4gICAgd2lkdGg6IDI1dnc7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgcGFkZGluZy10b3A6IDV2aDtcXG4gICAgd2lkdGg6IDc1dnc7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGNvcmFsO1xcbn1cXG5cXG4jYWxsVGFza3NCb3gge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB6LWluZGV4OiA1O1xcbn1cXG5cXG5kaXYuYWRkZWRfcHJvamVjdHMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcXG59XFxuXFxuLmVhY2hTaWRlYmFyQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIGdhcDogMXJlbTtcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMnB4O1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMnB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBjb3JhbDtcXG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMjUsIDEyNik7XFxufVxcblxcbmRpdltpZCQ9XFxcIkhpZ2hcXFwiXSwgZGl2W2lkJD1cXFwiSGlnaF9BbGxQYWdlXFxcIl0ge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjU1LCA0MSwgNDEpO1xcbn1cXG5cXG5kaXZbaWQkPVxcXCJNZWRpdW1cXFwiXSwgZGl2W2lkJD1cXFwiTWVkaXVtX0FsbFBhZ2VcXFwiXSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNTUsIDIzOCwgMCk7XFxufVxcblxcbmRpdltpZCQ9XFxcIkxvd1xcXCJdLCBkaXZbaWQkPVxcXCJMb3dfQWxsUGFnZVxcXCJdIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDQzLCAyMzMsIDApO1xcbn1cXG5cXG5oMy5hZGRlZF9wcm9qX2JveCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE1OSwgMjQyKTtcXG4gICAgbWluLWhlaWdodDogMzBweDtcXG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDJzO1xcbn1cXG5cXG5kaXYuYWRkZWRfdGFza3Mge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE4OSwgMTAzKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzAlIDMwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgNXZoKSBtaW5tYXgoMjUlLCAxZnIpO1xcbn1cXG5cXG5kaXYuYWRkZWRfdGFza3MgPiBoNCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmRpdi5ub3dZb3VTZWVNZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAxIC8gMztcXG59XFxuXFxuZGl2LmFkZGVkX2R1ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuZGl2LnRhc2tfYnV0dG9uX2hvbGRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG5kaXYudGFza19idXR0b25faG9sZGVyID4gYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG5kaXYudGhlRXhwYW5kYWJsZXMge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgbWF4LWhlaWdodDogMHZoO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxODksIDEwMyk7XFxuXFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbiAgICBcXG59XFxuXFxuZGl2LnRoZUV4cGFuZGFibGVzLmFjdGl2ZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIG1heC1oZWlnaHQ6IDEwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI1NSwgMTEwLCAyMDQpO1xcbn0gKi9cXG5cXG4vKiBCdXR0b24gdXNlZCB0byBvcGVuIHRoZSBmb3JtcyAtIGZpeGVkIGF0IHRoZSBib3R0b20gb2YgdGhlIHBhZ2UgKi9cXG4vKiAjYWRkbmV3IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxNnB4IDIwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvcGFjaXR5OiAwLjg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDIzcHg7XFxuICByaWdodDogMjhweDtcXG4gIHdpZHRoOiAxMHZ3O1xcbn1cXG5cXG4jbmV3cHJval9idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDE2cHggMjBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDIzcHg7XFxuICAgIGxlZnQ6IDI4cHg7XFxuICAgIHdpZHRoOiAxMHZ3O1xcbn0gKi9cXG5cXG4vKiBUaGUgcG9wdXAgZm9ybSAtIGhpZGRlbiBieSBkZWZhdWx0ICovXFxuLyogI3RvZG9Gb3JtQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMTVweDtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICNmMWYxZjE7XFxuICB3aWR0aDogMTN2dztcXG4gIHotaW5kZXg6IDk7XFxufVxcblxcbiNwcm9qRm9ybUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAxNXB4O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxO1xcbiAgICB3aWR0aDogMTN2dztcXG4gICAgei1pbmRleDogOTtcXG4gIH1cXG5cXG4jZWRpdEZvcm1Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcmlnaHQ6IGF1dG87XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmMWYxZjE7XFxuICAgIHdpZHRoOiAxM3Z3O1xcbiAgICB6LWluZGV4OiA5O1xcbiAgfVxcbiAqL1xcbi8qIEFkZCBzdHlsZXMgdG8gdGhlIGZvcm0gY29udGFpbmVyICovXFxuLyogI2FkZG5ld2Zvcm0sICNhZGRuZXdwcm9qZm9ybSB7XFxuICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jZWRpdEZvcm0ge1xcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59ICovXFxuXFxuLyogRnVsbC13aWR0aCBpbnB1dCBmaWVsZHMgKi9cXG4vKiAjYWRkbmV3Zm9ybSBpbnB1dFt0eXBlPXRleHRdLCAjYWRkbmV3cHJvamZvcm0gaW5wdXRbdHlwZT10ZXh0XSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBtYXJnaW46IDVweCAwIDIycHggMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XFxufVxcblxcbiNlZGl0Rm9ybSBpbnB1dFt0eXBlPXRleHRdIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIG1hcmdpbjogNXB4IDAgMjJweCAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XFxufSAqL1xcblxcbi8qIFdoZW4gdGhlIGlucHV0cyBnZXQgZm9jdXMsIGRvIHNvbWV0aGluZyAqL1xcbi8qICNhZGRuZXdmb3JtIGlucHV0W3R5cGU9dGV4dF06Zm9jdXMsICNhZGRuZXdwcm9qZm9ybSBpbnB1dFt0eXBlPXRleHRdOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxuICBvdXRsaW5lOiBub25lO1xcbn0gKi9cXG5cXG4vKiBTZXQgYSBzdHlsZSBmb3IgdGhlIHN1Ym1pdC9sb2dpbiBidXR0b24gKi9cXG4vKiAjYWRkbmV3Zm9ybSBidXR0b24sICNhZGRuZXdwcm9qZm9ybSBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0QUE2RDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDE2cHggMjBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbToxMHB4O1xcbiAgb3BhY2l0eTogMC44O1xcbn0gKi9cXG5cXG4vKiBBZGQgYSByZWQgYmFja2dyb3VuZCBjb2xvciB0byB0aGUgY2FuY2VsIGJ1dHRvbiAqL1xcbi8qICNhZGRuZXdmb3JtIGJ1dHRvbiNjYW5jZWxfYnV0dG9uLCAjYWRkbmV3cHJvamZvcm0gYnV0dG9uI25ld3Byb2pfY2FuY2VsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59ICovXFxuXFxuLyogQWRkIHNvbWUgaG92ZXIgZWZmZWN0cyB0byBidXR0b25zICovXFxuLyogI2FkZG5ld2Zvcm0gIGJ1dHRvbjpob3ZlciwgI2FkZG5ldzpob3ZlciwgI2FkZG5ld3Byb2pmb3JtIGJ1dHRvbjpob3ZlciwgI25ld3Byb2pfYnV0dG9uOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDE7XFxufSAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCOztBQUVBLDRCQUE0Qjs7QUFFNUI7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsTUFBTTtJQUNOLFFBQVE7SUFDUixTQUFTO0lBQ1QsT0FBTztJQUNQLDBCQUEwQjtJQUMxQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLDBCQUEwQjtJQUMxQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsZ0NBQWdDO0lBQ2hDLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQjs7Z0JBRVk7SUFDWixpQkFBaUI7SUFDakIsbUNBQW1DOztJQUVuQyxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixzQ0FBc0M7SUFDdEMsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtDQUFrQztJQUNsQyxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHdCQUF3QjtBQUM1Qjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlDQUFpQztJQUNqQyxtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLGdDQUFnQztJQUNoQyxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLGdEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsUUFBUTtJQUNSLFVBQVU7O0lBRVYsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsVUFBVTtJQUNWLFdBQVc7SUFDWCxVQUFVOztJQUVWLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixtQ0FBbUM7SUFDbkMsZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1EQUFtRDtBQUN2RDs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZUFBZTtJQUNmLFVBQVU7SUFDVixXQUFXOztJQUVYLHFDQUFxQztJQUNyQyxrQ0FBa0M7SUFDbEMsaUNBQWlDO0lBQ2pDLGdDQUFnQztJQUNoQyw2QkFBNkI7O0FBRWpDOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVix5Q0FBeUM7QUFDN0M7QUFDQSxvRUFBb0U7O0FBRXBFO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztBQUNmO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUEsdUNBQXVDO0FBQ3ZDO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixVQUFVO0lBQ1YsV0FBVztJQUNYLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFFBQVE7SUFDUixTQUFTO0lBQ1QsT0FBTztJQUNQLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixVQUFVO0lBQ1YsV0FBVztJQUNYLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFFBQVE7SUFDUixTQUFTO0lBQ1QsT0FBTztJQUNQLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixVQUFVO0lBQ1YsV0FBVztJQUNYLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFFBQVE7SUFDUixTQUFTO0lBQ1QsT0FBTztJQUNQLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsV0FBVztBQUNmOztBQUVBLHFDQUFxQztBQUNyQztJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztFQUVFLDRCQUE0QjtBQUM5QjtJQUNJLCtCQUErQjtJQUMvQixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQSw0Q0FBNEM7QUFDNUM7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQjs7QUFFQSw0Q0FBNEM7QUFDNUM7SUFDSSxpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtJQUNmLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0lBQ2YsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBLG9EQUFvRDtBQUNwRDtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQSxzQ0FBc0M7QUFDdEM7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCOztBQUVBOztJQUVJLG1DQUFtQztBQUN2Qzs7QUFFQSxjQUFjOztBQUVkLFVBQVU7QUFDVjtFQUNFLFVBQVU7QUFDWjs7QUFFQSxVQUFVO0FBQ1Y7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUEsV0FBVztBQUNYO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBLG9CQUFvQjtBQUNwQjtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQSx1QkFBdUI7O0FBRXZCOztJQUVJO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxjQUFjO1FBQ2QsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsWUFBWTtRQUNaLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGlDQUFpQztRQUNqQyxtQkFBbUI7UUFDbkIsd0JBQXdCO1FBQ3hCLGdDQUFnQztRQUNoQyxzQ0FBc0M7SUFDMUM7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksd0NBQXdDO0lBQzVDO0lBQ0E7UUFDSSx3Q0FBd0M7SUFDNUM7SUFDQTtRQUNJLFVBQVU7SUFDZDs7QUFFSjs7QUFFQSxnQ0FBZ0M7O0FBRWhDOztBQUVBOztBQUVBLFlBQVk7O0FBRVo7O0FBRUE7O0FBRUEsb0NBQW9DOztBQUVwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FzSUc7O0FBRUgsb0VBQW9FO0FBQ3BFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7O0FBRUgsdUNBQXVDO0FBQ3ZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTZCRTtBQUNGLHFDQUFxQztBQUNyQzs7Ozs7Ozs7OztHQVVHOztBQUVILDRCQUE0QjtBQUM1Qjs7Ozs7Ozs7Ozs7Ozs7R0FjRzs7QUFFSCw0Q0FBNEM7QUFDNUM7OztHQUdHOztBQUVILDRDQUE0QztBQUM1Qzs7Ozs7Ozs7O0dBU0c7O0FBRUgsb0RBQW9EO0FBQ3BEOztHQUVHOztBQUVILHNDQUFzQztBQUN0Qzs7R0FFR1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuLyogVHJ5aW5nIG1vYmlsZSBmaXJzdCBkZXYgKi9cXG5cXG46cm9vdCB7XFxuICAgIC0tcHJpbWFyeTogI2Y1YjMxNjtcXG4gICAgLS1zZWNvbmRhcnk6ICM4ZDhkOGQ7XFxuICAgIC0tdGVydGlhcnk6ICM2NjcyOTI7XFxuICAgIC0tcXVhdGVybmFyeTogI2Q5ZDlkOTtcXG59XFxuXFxuaHRtbCwgYm9keSwgI292ZXJhbGxXcmFwcGVyIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2JhY2tncm91bmRDb3ZlclN0dWZmIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjgpO1xcbiAgICB6LWluZGV4OiAxMjtcXG59XFxuXFxuI25vdEJhY2tncm91bmRDb3ZlciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1JSA5NSU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzUlIDY1JTtcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXRlcnRpYXJ5KTtcXG59XFxuXFxuI2hlYWRlci5kYXJrLW1vZGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4jaGVhZGVySWNvbkhvbGRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbiN0b2dnbGVkT24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jZGFya0NvdW50IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2hlYWRlckljb25Ib2xkZXIgaDMge1xcbiAgICBmb250LXNpemU6IDExcHg7XFxufVxcblxcbiNzaWRlYmFyTmFtZXNPbmx5IHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgLyogZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtOyAqL1xcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcXVhdGVybmFyeSk7XFxuXFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuI3NpZGViYXJOYW1lc09ubHkgPiBkaXY6bnRoLW9mLXR5cGUoMikge1xcbiAgICBkaXNwbGF5Om5vbmU7XFxufVxcblxcbltpZF49XFxcIl9oSWREZU5cXFwiXSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tdGVydGlhcnkpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1xdWF0ZXJuYXJ5KTtcXG59XFxuXFxuI2NvbnRlbnQuZGFyay1tb2RlLCAjc2lkZWJhck5hbWVzT25seS5kYXJrLW1vZGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHZhcigtLXF1YXRlcm5hcnkpO1xcbn1cXG5cXG4jYWxsVGFza3NCb3gge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB6LWluZGV4OiA1O1xcbn1cXG5cXG5kaXYuYWRkZWRfcHJvamVjdHMge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuZGl2LmFkZGVkX3Byb2plY3RzLmRhcmstbW9kZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogdmFyKC0tcXVhdGVybmFyeSk7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgd2hpdGU7XFxufVxcblxcbmRpdiNzdG9wQWxsRW1wdHkge1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuZGl2I3N0b3BBbGxFbXB0eSA+IGgyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmRpdiNzdG9wQWxsRW1wdHkgPiBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCAzcHggcmdiKDAsMCwwLDAuNik7XFxufVxcblxcbmRpdiNzdG9wQWxsRW1wdHkgPiBidXR0b24uZGFyay1tb2RlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB2YXIoLS1xdWF0ZXJuYXJ5KTtcXG59XFxuXFxuXFxuLmVhY2hTaWRlYmFyQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGhlaWdodDogNDJweDtcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10ZXJ0aWFyeSk7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICAgIGJveC1zaGFkb3c6IDFweCAycHggMnB4IHJnYigwLDAsMCwwLjYpO1xcbn1cXG5cXG4uZWFjaFNpZGViYXJDb250YWluZXIuZGFyay1tb2RlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB2YXIoLS1xdWF0ZXJuYXJ5KTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCAycHggcmdiYSgxNDAsIDE0MCwgMTQwLCAwLjYpO1xcbn1cXG5cXG5kaXYuc2lkZWJhcl9OYW1lcyB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcblxcbmRpdi5zaWRlYmFyX05hbWVfZWRpdCB7XFxuICAgIGZvbnQtc2l6ZTogIGNsYW1wKDAuMnJlbSwgMXJlbSwgMS4xcmVtKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDN2aDtcXG4gICAgd2lkdGg6IDN2aDtcXG4gICAgdG9wOiAzcHg7XFxuICAgIHJpZ2h0OiA1cHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5kaXYuc2lkZWJhcl9OYW1lX3JlbW92ZSB7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMC4ycmVtLCAxcmVtLCAxLjFyZW0pO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuICAgIGhlaWdodDogM3ZoO1xcbiAgICB3aWR0aDogM3ZoO1xcbiAgICBib3R0b206IDNweDtcXG4gICAgcmlnaHQ6IDVweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmRpdltpZCQ9XFxcIkhpZ2hcXFwiXSwgZGl2W2lkJD1cXFwiSGlnaF9BbGxQYWdlXFxcIl0ge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjU1LCAxMjAsIDEyMCk7XFxufVxcblxcbmRpdltpZCQ9XFxcIk1lZGl1bVxcXCJdLCBkaXZbaWQkPVxcXCJNZWRpdW1fQWxsUGFnZVxcXCJdIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDI1NSwgMTkzLCAzNik7XFxufVxcblxcbmRpdltpZCQ9XFxcIkxvd1xcXCJdLCBkaXZbaWQkPVxcXCJMb3dfQWxsUGFnZVxcXCJdIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDEyOSwgMjUwLCAzMCk7XFxufVxcblxcbmgzLmFkZGVkX3Byb2pfYm94LmRhcmstbW9kZSwgZGl2LmFkZGVkX3Rhc2tzLmRhcmstbW9kZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogdmFyKC0tcXVhdGVybmFyeSk7XFxufVxcblxcbmgzLmFkZGVkX3Byb2pfYm94IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcXVhdGVybmFyeSk7XFxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XFxuICAgIHRyYW5zaXRpb246IGhlaWdodCAycztcXG59XFxuXFxuZGl2LmFkZGVkX3Rhc2tzIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1xdWF0ZXJuYXJ5KTtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjAlIDQwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgNXZoKSBtaW5tYXgoMjUlLCAxZnIpO1xcbn1cXG5cXG5kaXYuYWRkZWRfdGFza3MgPiBoNCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmRpdi5ub3dZb3VTZWVNZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG5kaXYuYWRkZWRfZHVlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG5kaXYudGFza19idXR0b25faG9sZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbmRpdi50YXNrX2J1dHRvbl9ob2xkZXIgPiBidXR0b24ge1xcbiAgICBoZWlnaHQ6IDIycHg7XFxufVxcblxcbmRpdi50aGVFeHBhbmRhYmxlcyB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICBtYXgtaGVpZ2h0OiAwdmg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHotaW5kZXg6IC0xO1xcblxcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgXFxufVxcblxcbmRpdi50aGVFeHBhbmRhYmxlcy5hY3RpdmUge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBtaW4taGVpZ2h0OiA4dmg7XFxuICAgIG1heC1oZWlnaHQ6IG5vbmU7XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6cmdiKDI1NSwgMTEwLCAyMDQpOyAqL1xcbn1cXG4vKiBCdXR0b24gdXNlZCB0byBvcGVuIHRoZSBmb3JtcyAtIGZpeGVkIGF0IHRoZSBib3R0b20gb2YgdGhlIHBhZ2UgKi9cXG5cXG4jYnV0dG9uSG9sZGVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGJvdHRvbTogMjVweDtcXG4gICAgcmlnaHQ6IDI4cHg7XFxuICAgIHdpZHRoOiAyN3Z3O1xcbn1cXG4jYWRkbmV3IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiA0cHggMnB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgICB3aWR0aDogMjd2dztcXG59XFxuICBcXG4jbmV3cHJval9idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDRweCAycHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBvcGFjaXR5OiAwLjg7XFxuICAgIHdpZHRoOiAyN3Z3O1xcbn1cXG5cXG4vKiBUaGUgcG9wdXAgZm9ybSAtIGhpZGRlbiBieSBkZWZhdWx0ICovXFxuI3RvZG9Gb3JtQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB6LWluZGV4OiAxNTtcXG59XFxuICBcXG4jcHJvakZvcm1Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGhlaWdodDogNjAlO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgei1pbmRleDogMTU7XFxufVxcbiAgXFxuI2VkaXRGb3JtQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB6LWluZGV4OiAxNTtcXG59XFxuXFxuLyogQWRkIHN0eWxlcyB0byB0aGUgZm9ybSBjb250YWluZXIgKi9cXG4jYWRkbmV3Zm9ybSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbiNhZGRuZXdmb3JtLmRhcmstbW9kZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuI2FkZG5ld3Byb2pmb3JtIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMjVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbiNhZGRuZXdwcm9qZm9ybS5kYXJrLW1vZGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbiNhZGRuZXdmb3JtID4gZGl2Om50aC1jaGlsZCg0KSwgI2FkZG5ld2Zvcm0gPiBkaXY6bnRoLWNoaWxkKDUpIHtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcblxcbiNhZGRuZXdmb3JtID4gZGl2Om50aC1jaGlsZCgzKSB7XFxuICAgIG1hcmdpbjogM3B4O1xcbn1cXG5cXG4jYWRkbmV3Zm9ybSA+IGRpdjpudGgtY2hpbGQoMykgPiBpbnB1dCwgI2FkZG5ld2Zvcm0gPiBkaXY6bnRoLWNoaWxkKDQpID4gc2VsZWN0IHtcXG4gICAgbWFyZ2luLXRvcDogM3B4O1xcbn1cXG4gIFxcbiNlZGl0Rm9ybSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbiNlZGl0Rm9ybS5kYXJrLW1vZGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbiNlZGl0Rm9ybSA+IGRpdjpudGgtY2hpbGQoNCksICNlZGl0Rm9ybSA+IGRpdjpudGgtY2hpbGQoNSkge1xcbiAgICBtYXJnaW46IDRweDtcXG59XFxuXFxuI2VkaXRGb3JtID4gZGl2Om50aC1jaGlsZCgzKSB7XFxuICAgIG1hcmdpbjogMnB4O1xcbn1cXG5cXG4jZWRpdEZvcm0gPiBkaXY6bnRoLWNoaWxkKDMpID4gaW5wdXQsICNlZGl0Rm9ybSA+IGRpdjpudGgtY2hpbGQoNCkgPiBzZWxlY3Qge1xcbiAgICBtYXJnaW4tdG9wOiAzcHg7XFxufVxcbiAgXFxuICAvKiBGdWxsLXdpZHRoIGlucHV0IGZpZWxkcyAqL1xcbiNhZGRuZXdmb3JtIGlucHV0W3R5cGU9dGV4dF0sICNhZGRuZXdmb3JtIHRleHRhcmVhLCAjZWRpdEZvcm0gaW5wdXRbdHlwZT10ZXh0XSwgI2VkaXRGb3JtIHRleHRhcmVhIHtcXG4gICAgZm9udC1mYW1pbHk6ICdKb3N0Jywgc2Fucy1zZXJpZjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgbWFyZ2luOiA1cHggMCA4cHggMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xcbn1cXG5cXG4jYWRkbmV3cHJvamZvcm0gaW5wdXRbdHlwZT10ZXh0XSwgI2VkaXRGb3JtIGlucHV0W3R5cGU9dGV4dF0ge1xcbiAgICBmb250LWZhbWlseTogJ0pvc3QnLCBzYW5zLXNlcmlmO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBtYXJnaW46IDEycHggMCAxMnB4IDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcXG59XFxuXFxuI2FkZG5ld2Zvcm0gaW5wdXRbdHlwZT10ZXh0XTo6cGxhY2Vob2xkZXIsICNhZGRuZXdwcm9qZm9ybSBpbnB1dFt0eXBlPXRleHRdOjpwbGFjZWhvbGRlciwgI2FkZG5ld2Zvcm0gdGV4dGFyZWE6OnBsYWNlaG9sZGVyLCAjZWRpdEZvcm0gaW5wdXRbdHlwZT10ZXh0XSwgI2VkaXRGb3JtIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSm9zdCcsIHNhbnMtc2VyaWY7XFxufVxcbiAgXFxuLyogV2hlbiB0aGUgaW5wdXRzIGdldCBmb2N1cywgZG8gc29tZXRoaW5nICovXFxuI2FkZG5ld2Zvcm0gaW5wdXRbdHlwZT10ZXh0XTpmb2N1cywgI2FkZG5ld3Byb2pmb3JtIGlucHV0W3R5cGU9dGV4dF06Zm9jdXMsICNhZGRuZXdmb3JtIHRleHRhcmVhOmZvY3VzLCAjZWRpdEZvcm0gaW5wdXRbdHlwZT10ZXh0XTpmb2N1cywgI2VkaXRGb3JtIHRleHRhcmVhOmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuICBcXG4vKiBTZXQgYSBzdHlsZSBmb3IgdGhlIHN1Ym1pdC9sb2dpbiBidXR0b24gKi9cXG4jYWRkbmV3Zm9ybSBidXR0b24sICNlZGl0Rm9ybSBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeSk7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgcGFkZGluZzogMTJweCAxNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG4gICAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4jYWRkbmV3cHJvamZvcm0gYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnkpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHBhZGRpbmc6IDEycHggMTVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbiAgICBvcGFjaXR5OiAwLjg7IFxcbn1cXG4gIFxcbi8qIEFkZCBhIHJlZCBiYWNrZ3JvdW5kIGNvbG9yIHRvIHRoZSBjYW5jZWwgYnV0dG9uICovXFxuI2FkZG5ld2Zvcm0gYnV0dG9uI2NhbmNlbF9idXR0b24sICNhZGRuZXdwcm9qZm9ybSBidXR0b24jbmV3cHJval9jYW5jZWwsICNlZGl0Rm9ybSBidXR0b24jY2FuY2VsRWRpdEJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXF1YXRlcm5hcnkpO1xcbn1cXG4gIFxcbi8qIEFkZCBzb21lIGhvdmVyIGVmZmVjdHMgdG8gYnV0dG9ucyAqL1xcbiNhZGRuZXdmb3JtICBidXR0b246aG92ZXIsICNhZGRuZXc6aG92ZXIsICNhZGRuZXdwcm9qZm9ybSBidXR0b246aG92ZXIsICNuZXdwcm9qX2J1dHRvbjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbmlucHV0I3RpdGxlLm5lZWRzRmlsbGluZywgI2Rlc2NyaXB0aW9uLm5lZWRzRmlsbGluZyB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTksIDU0LCA1NCk7XFxufVxcblxcbnNlbGVjdCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxNnB4IDIwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbn1cXG5cXG5pbnB1dC5kYXJrLW1vZGUsIHRleHRhcmVhLmRhcmstbW9kZSwgc2VsZWN0LmRhcmstbW9kZSxcXG4jYWRkbmV3Zm9ybSBpbnB1dFt0eXBlPXRleHRdLmRhcmstbW9kZSwgI2FkZG5ld2Zvcm0gdGV4dGFyZWEuZGFyay1tb2RlLCAjZWRpdEZvcm0gaW5wdXRbdHlwZT10ZXh0XS5kYXJrLW1vZGUsICNlZGl0Rm9ybSB0ZXh0YXJlYS5kYXJrLW1vZGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1xdWF0ZXJuYXJ5KTtcXG59XFxuXFxuLyogU2Nyb2xsYmFyICovXFxuXFxuLyogd2lkdGggKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA3cHg7XFxufVxcblxcbi8qIFRyYWNrICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xcbn1cXG5cXG4vKiBIYW5kbGUgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQ6IHJnYigxOTAsIDE5MCwgMTkwKTtcXG59XFxuXFxuLyogSGFuZGxlIG9uIGhvdmVyICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTAzLCAxMDMsIDEwMyk7XFxufVxcblxcbi8qIHNtYWxsIHRhYmxldCBzaXplcyAqL1xcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYyMHB4KSB7XFxuXFxuICAgIGRpdiNzdG9wQWxsRW1wdHkge1xcbiAgICAgICAgcGFkZGluZzogMTVweCAyNXB4O1xcbiAgICB9XFxuICAgIGRpdiNzdG9wQWxsRW1wdHkgPiBidXR0b24ge1xcbiAgICAgICAgaGVpZ2h0OiA1LjI1dmg7XFxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgfVxcbiAgICAuZWFjaFNpZGViYXJDb250YWluZXIge1xcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xcbiAgICAgICAgb3BhY2l0eTogMC44O1xcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10ZXJ0aWFyeSk7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICAgICAgICBib3gtc2hhZG93OiAxcHggMnB4IDJweCByZ2IoMCwwLDAsMC42KTtcXG4gICAgfVxcbiAgICBkaXYuYWRkZWRfcHJvamVjdHMge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIH1cXG4gICAgZGl2LmFkZGVkX3Rhc2tzIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgfVxcbiAgICBkaXYudGFza19idXR0b25faG9sZGVyID4gYnV0dG9uIHtcXG4gICAgICAgIGhlaWdodDogMjVweDtcXG4gICAgfVxcbiAgICBkaXYuc2lkZWJhcl9OYW1lX2VkaXQge1xcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgwLjVyZW0sIDEuMnJlbSwgMS40cmVtKTtcXG4gICAgfVxcbiAgICBkaXYuc2lkZWJhcl9OYW1lX3JlbW92ZSB7XFxuICAgICAgICBmb250LXNpemU6IGNsYW1wKDAuNXJlbSwgMS4ycmVtLCAxLjRyZW0pO1xcbiAgICB9XFxuICAgIGRpdi5zaWRlYmFyX05hbWVzIHtcXG4gICAgICAgIHdpZHRoOiA5MiU7XFxuICAgIH1cXG4gICAgXFxufVxcblxcbi8qIGxhcmdlIHRhYmxldCAmIGxhcHRvcCBzaXplcyAqL1xcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSB7XFxuICAgIFxcbn1cXG5cXG4vKiBkZXNrdG9wICovXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxuICAgIFxcbn1cXG5cXG4vKk15IGluaXRpYWwgY29kZSBiZWxvdyBmb3IgZGVza3RvcCovXFxuXFxuLyogaHRtbCwgYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jc2lkZWJhck5hbWVzT25seSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDV2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAzcmVtO1xcbiAgICB3aWR0aDogMjV2dztcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBwYWRkaW5nLXRvcDogNXZoO1xcbiAgICB3aWR0aDogNzV2dztcXG4gICAgYm9yZGVyOiAycHggc29saWQgY29yYWw7XFxufVxcblxcbiNhbGxUYXNrc0JveCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHotaW5kZXg6IDU7XFxufVxcblxcbmRpdi5hZGRlZF9wcm9qZWN0cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbn1cXG5cXG4uZWFjaFNpZGViYXJDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBvcGFjaXR5OiAwLjg7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEycHg7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEycHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGNvcmFsO1xcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIyNSwgMTI2KTtcXG59XFxuXFxuZGl2W2lkJD1cXFwiSGlnaFxcXCJdLCBkaXZbaWQkPVxcXCJIaWdoX0FsbFBhZ2VcXFwiXSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNTUsIDQxLCA0MSk7XFxufVxcblxcbmRpdltpZCQ9XFxcIk1lZGl1bVxcXCJdLCBkaXZbaWQkPVxcXCJNZWRpdW1fQWxsUGFnZVxcXCJdIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDI1NSwgMjM4LCAwKTtcXG59XFxuXFxuZGl2W2lkJD1cXFwiTG93XFxcIl0sIGRpdltpZCQ9XFxcIkxvd19BbGxQYWdlXFxcIl0ge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoNDMsIDIzMywgMCk7XFxufVxcblxcbmgzLmFkZGVkX3Byb2pfYm94IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTU5LCAyNDIpO1xcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMnM7XFxufVxcblxcbmRpdi5hZGRlZF90YXNrcyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTg5LCAxMDMpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3MCUgMzAlO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCA1dmgpIG1pbm1heCgyNSUsIDFmcik7XFxufVxcblxcbmRpdi5hZGRlZF90YXNrcyA+IGg0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuZGl2Lm5vd1lvdVNlZU1lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xcbn1cXG5cXG5kaXYuYWRkZWRfZHVlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG5kaXYudGFza19idXR0b25faG9sZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbmRpdi50YXNrX2J1dHRvbl9ob2xkZXIgPiBidXR0b24ge1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxufVxcblxcbmRpdi50aGVFeHBhbmRhYmxlcyB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICBtYXgtaGVpZ2h0OiAwdmg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE4OSwgMTAzKTtcXG5cXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuICAgIFxcbn1cXG5cXG5kaXYudGhlRXhwYW5kYWJsZXMuYWN0aXZlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgbWF4LWhlaWdodDogMTB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjU1LCAxMTAsIDIwNCk7XFxufSAqL1xcblxcbi8qIEJ1dHRvbiB1c2VkIHRvIG9wZW4gdGhlIGZvcm1zIC0gZml4ZWQgYXQgdGhlIGJvdHRvbSBvZiB0aGUgcGFnZSAqL1xcbi8qICNhZGRuZXcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDE2cHggMjBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG9wYWNpdHk6IDAuODtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMjNweDtcXG4gIHJpZ2h0OiAyOHB4O1xcbiAgd2lkdGg6IDEwdnc7XFxufVxcblxcbiNuZXdwcm9qX2J1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTZweCAyMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogMjNweDtcXG4gICAgbGVmdDogMjhweDtcXG4gICAgd2lkdGg6IDEwdnc7XFxufSAqL1xcblxcbi8qIFRoZSBwb3B1cCBmb3JtIC0gaGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4vKiAjdG9kb0Zvcm1Db250YWluZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAxNXB4O1xcbiAgYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTtcXG4gIHdpZHRoOiAxM3Z3O1xcbiAgei1pbmRleDogOTtcXG59XFxuXFxuI3Byb2pGb3JtQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDE1cHg7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmMWYxZjE7XFxuICAgIHdpZHRoOiAxM3Z3O1xcbiAgICB6LWluZGV4OiA5O1xcbiAgfVxcblxcbiNlZGl0Rm9ybUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICByaWdodDogYXV0bztcXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTtcXG4gICAgd2lkdGg6IDEzdnc7XFxuICAgIHotaW5kZXg6IDk7XFxuICB9XFxuICovXFxuLyogQWRkIHN0eWxlcyB0byB0aGUgZm9ybSBjb250YWluZXIgKi9cXG4vKiAjYWRkbmV3Zm9ybSwgI2FkZG5ld3Byb2pmb3JtIHtcXG4gIG1heC13aWR0aDogMzAwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbiNlZGl0Rm9ybSB7XFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn0gKi9cXG5cXG4vKiBGdWxsLXdpZHRoIGlucHV0IGZpZWxkcyAqL1xcbi8qICNhZGRuZXdmb3JtIGlucHV0W3R5cGU9dGV4dF0sICNhZGRuZXdwcm9qZm9ybSBpbnB1dFt0eXBlPXRleHRdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIG1hcmdpbjogNXB4IDAgMjJweCAwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcXG59XFxuXFxuI2VkaXRGb3JtIGlucHV0W3R5cGU9dGV4dF0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgbWFyZ2luOiA1cHggMCAyMnB4IDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcXG59ICovXFxuXFxuLyogV2hlbiB0aGUgaW5wdXRzIGdldCBmb2N1cywgZG8gc29tZXRoaW5nICovXFxuLyogI2FkZG5ld2Zvcm0gaW5wdXRbdHlwZT10ZXh0XTpmb2N1cywgI2FkZG5ld3Byb2pmb3JtIGlucHV0W3R5cGU9dGV4dF06Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufSAqL1xcblxcbi8qIFNldCBhIHN0eWxlIGZvciB0aGUgc3VibWl0L2xvZ2luIGJ1dHRvbiAqL1xcbi8qICNhZGRuZXdmb3JtIGJ1dHRvbiwgI2FkZG5ld3Byb2pmb3JtIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDRBQTZEO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMTZweCAyMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOjEwcHg7XFxuICBvcGFjaXR5OiAwLjg7XFxufSAqL1xcblxcbi8qIEFkZCBhIHJlZCBiYWNrZ3JvdW5kIGNvbG9yIHRvIHRoZSBjYW5jZWwgYnV0dG9uICovXFxuLyogI2FkZG5ld2Zvcm0gYnV0dG9uI2NhbmNlbF9idXR0b24sICNhZGRuZXdwcm9qZm9ybSBidXR0b24jbmV3cHJval9jYW5jZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn0gKi9cXG5cXG4vKiBBZGQgc29tZSBob3ZlciBlZmZlY3RzIHRvIGJ1dHRvbnMgKi9cXG4vKiAjYWRkbmV3Zm9ybSAgYnV0dG9uOmhvdmVyLCAjYWRkbmV3OmhvdmVyLCAjYWRkbmV3cHJvamZvcm0gYnV0dG9uOmhvdmVyLCAjbmV3cHJval9idXR0b246aG92ZXIge1xcbiAgb3BhY2l0eTogMTtcXG59ICovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBvYmplY3QpIHtcbiAgaWYgKHRhcmdldCA9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXNzaWduIHJlcXVpcmVzIHRoYXQgaW5wdXQgcGFyYW1ldGVyIG5vdCBiZSBudWxsIG9yIHVuZGVmaW5lZCcpO1xuICB9XG5cbiAgZm9yICh2YXIgcHJvcGVydHkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgICAgO1xuICAgICAgdGFyZ2V0W3Byb3BlcnR5XSA9IG9iamVjdFtwcm9wZXJ0eV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJpbXBvcnQgYXNzaWduIGZyb20gXCIuLi9hc3NpZ24vaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNsb25lT2JqZWN0KG9iamVjdCkge1xuICByZXR1cm4gYXNzaWduKHt9LCBvYmplY3QpO1xufSIsImltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi8uLi9sb2NhbGUvZW4tVVMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRMb2NhbGU7IiwidmFyIGRlZmF1bHRPcHRpb25zID0ge307XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn0iLCIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJ2YXIgcm91bmRpbmdNYXAgPSB7XG4gIGNlaWw6IE1hdGguY2VpbCxcbiAgcm91bmQ6IE1hdGgucm91bmQsXG4gIGZsb29yOiBNYXRoLmZsb29yLFxuICB0cnVuYzogZnVuY3Rpb24gdHJ1bmModmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPCAwID8gTWF0aC5jZWlsKHZhbHVlKSA6IE1hdGguZmxvb3IodmFsdWUpO1xuICB9IC8vIE1hdGgudHJ1bmMgaXMgbm90IHN1cHBvcnRlZCBieSBJRVxuXG59O1xudmFyIGRlZmF1bHRSb3VuZGluZ01ldGhvZCA9ICd0cnVuYyc7XG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91bmRpbmdNZXRob2QobWV0aG9kKSB7XG4gIHJldHVybiBtZXRob2QgPyByb3VuZGluZ01hcFttZXRob2RdIDogcm91bmRpbmdNYXBbZGVmYXVsdFJvdW5kaW5nTWV0aG9kXTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGNvbXBhcmVBc2NcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gLTEsIDAgb3IgMS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIDEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZCxcbiAqIC0xIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGJlZm9yZSB0aGUgc2Vjb25kIG9yIDAgaWYgZGF0ZXMgYXJlIGVxdWFsLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY29tcGFyZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNvbXBhcmVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSByZXN1bHQgb2YgdGhlIGNvbXBhcmlzb25cbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29tcGFyZSAxMSBGZWJydWFyeSAxOTg3IGFuZCAxMCBKdWx5IDE5ODk6XG4gKiBjb25zdCByZXN1bHQgPSBjb21wYXJlQXNjKG5ldyBEYXRlKDE5ODcsIDEsIDExKSwgbmV3IERhdGUoMTk4OSwgNiwgMTApKVxuICogLy89PiAtMVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTb3J0IHRoZSBhcnJheSBvZiBkYXRlczpcbiAqIGNvbnN0IHJlc3VsdCA9IFtcbiAqICAgbmV3IERhdGUoMTk5NSwgNiwgMiksXG4gKiAgIG5ldyBEYXRlKDE5ODcsIDEsIDExKSxcbiAqICAgbmV3IERhdGUoMTk4OSwgNiwgMTApXG4gKiBdLnNvcnQoY29tcGFyZUFzYylcbiAqIC8vPT4gW1xuICogLy8gICBXZWQgRmViIDExIDE5ODcgMDA6MDA6MDAsXG4gKiAvLyAgIE1vbiBKdWwgMTAgMTk4OSAwMDowMDowMCxcbiAqIC8vICAgU3VuIEp1bCAwMiAxOTk1IDAwOjAwOjAwXG4gKiAvLyBdXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcGFyZUFzYyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIGRpZmYgPSBkYXRlTGVmdC5nZXRUaW1lKCkgLSBkYXRlUmlnaHQuZ2V0VGltZSgpO1xuXG4gIGlmIChkaWZmIDwgMCkge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIGlmIChkaWZmID4gMCkge1xuICAgIHJldHVybiAxOyAvLyBSZXR1cm4gMCBpZiBkaWZmIGlzIDA7IHJldHVybiBOYU4gaWYgZGlmZiBpcyBOYU5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZGlmZjtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHNcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBtb250aHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBtb250aHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBjYWxlbmRhciBtb250aHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgbW9udGhzIGFyZSBiZXR3ZWVuIDMxIEphbnVhcnkgMjAxNCBhbmQgMSBTZXB0ZW1iZXIgMjAxND9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA4LCAxKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgMCwgMzEpXG4gKiApXG4gKiAvLz0+IDhcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIHllYXJEaWZmID0gZGF0ZUxlZnQuZ2V0RnVsbFllYXIoKSAtIGRhdGVSaWdodC5nZXRGdWxsWWVhcigpO1xuICB2YXIgbW9udGhEaWZmID0gZGF0ZUxlZnQuZ2V0TW9udGgoKSAtIGRhdGVSaWdodC5nZXRNb250aCgpO1xuICByZXR1cm4geWVhckRpZmYgKiAxMiArIG1vbnRoRGlmZjtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBtaWxsaXNlY29uZHMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDE0IDEyOjMwOjIwLjYwMCBhbmQgMiBKdWx5IDIwMTQgMTI6MzA6MjEuNzAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDIxLCA3MDApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDIwLCA2MDApXG4gKiApXG4gKiAvLz0+IDExMDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHRvRGF0ZShkYXRlTGVmdCkuZ2V0VGltZSgpIC0gdG9EYXRlKGRhdGVSaWdodCkuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocy9pbmRleC5qc1wiO1xuaW1wb3J0IGNvbXBhcmVBc2MgZnJvbSBcIi4uL2NvbXBhcmVBc2MvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgaXNMYXN0RGF5T2ZNb250aCBmcm9tIFwiLi4vaXNMYXN0RGF5T2ZNb250aC9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5Nb250aHNcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBmdWxsIG1vbnRocyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGZ1bGwgbW9udGhzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzIHVzaW5nIHRydW5jIGFzIGEgZGVmYXVsdCByb3VuZGluZyBtZXRob2QuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBmdWxsIG1vbnRoc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBmdWxsIG1vbnRocyBhcmUgYmV0d2VlbiAzMSBKYW51YXJ5IDIwMTQgYW5kIDEgU2VwdGVtYmVyIDIwMTQ/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5Nb250aHMobmV3IERhdGUoMjAxNCwgOCwgMSksIG5ldyBEYXRlKDIwMTQsIDAsIDMxKSlcbiAqIC8vPT4gN1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbk1vbnRocyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIHNpZ24gPSBjb21wYXJlQXNjKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICB2YXIgZGlmZmVyZW5jZSA9IE1hdGguYWJzKGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpKTtcbiAgdmFyIHJlc3VsdDsgLy8gQ2hlY2sgZm9yIHRoZSBkaWZmZXJlbmNlIG9mIGxlc3MgdGhhbiBtb250aFxuXG4gIGlmIChkaWZmZXJlbmNlIDwgMSkge1xuICAgIHJlc3VsdCA9IDA7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGRhdGVMZWZ0LmdldE1vbnRoKCkgPT09IDEgJiYgZGF0ZUxlZnQuZ2V0RGF0ZSgpID4gMjcpIHtcbiAgICAgIC8vIFRoaXMgd2lsbCBjaGVjayBpZiB0aGUgZGF0ZSBpcyBlbmQgb2YgRmViIGFuZCBhc3NpZ24gYSBoaWdoZXIgZW5kIG9mIG1vbnRoIGRhdGVcbiAgICAgIC8vIHRvIGNvbXBhcmUgaXQgd2l0aCBKYW5cbiAgICAgIGRhdGVMZWZ0LnNldERhdGUoMzApO1xuICAgIH1cblxuICAgIGRhdGVMZWZ0LnNldE1vbnRoKGRhdGVMZWZ0LmdldE1vbnRoKCkgLSBzaWduICogZGlmZmVyZW5jZSk7IC8vIE1hdGguYWJzKGRpZmYgaW4gZnVsbCBtb250aHMgLSBkaWZmIGluIGNhbGVuZGFyIG1vbnRocykgPT09IDEgaWYgbGFzdCBjYWxlbmRhciBtb250aCBpcyBub3QgZnVsbFxuICAgIC8vIElmIHNvLCByZXN1bHQgbXVzdCBiZSBkZWNyZWFzZWQgYnkgMSBpbiBhYnNvbHV0ZSB2YWx1ZVxuXG4gICAgdmFyIGlzTGFzdE1vbnRoTm90RnVsbCA9IGNvbXBhcmVBc2MoZGF0ZUxlZnQsIGRhdGVSaWdodCkgPT09IC1zaWduOyAvLyBDaGVjayBmb3IgY2FzZXMgb2Ygb25lIGZ1bGwgY2FsZW5kYXIgbW9udGhcblxuICAgIGlmIChpc0xhc3REYXlPZk1vbnRoKHRvRGF0ZShkaXJ0eURhdGVMZWZ0KSkgJiYgZGlmZmVyZW5jZSA9PT0gMSAmJiBjb21wYXJlQXNjKGRpcnR5RGF0ZUxlZnQsIGRhdGVSaWdodCkgPT09IDEpIHtcbiAgICAgIGlzTGFzdE1vbnRoTm90RnVsbCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJlc3VsdCA9IHNpZ24gKiAoZGlmZmVyZW5jZSAtIE51bWJlcihpc0xhc3RNb250aE5vdEZ1bGwpKTtcbiAgfSAvLyBQcmV2ZW50IG5lZ2F0aXZlIHplcm9cblxuXG4gIHJldHVybiByZXN1bHQgPT09IDAgPyAwIDogcmVzdWx0O1xufSIsImltcG9ydCBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldFJvdW5kaW5nTWV0aG9kIH0gZnJvbSBcIi4uL19saWIvcm91bmRpbmdNZXRob2RzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJblNlY29uZHNcbiAqIEBjYXRlZ29yeSBTZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2Ygc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIHNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMucm91bmRpbmdNZXRob2Q9J3RydW5jJ10gLSBhIHJvdW5kaW5nIG1ldGhvZCAoYGNlaWxgLCBgZmxvb3JgLCBgcm91bmRgIG9yIGB0cnVuY2ApXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIHNlY29uZHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgc2Vjb25kcyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTQgMTI6MzA6MDcuOTk5IGFuZCAyIEp1bHkgMjAxNCAxMjozMDoyMC4wMDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5TZWNvbmRzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDIwLCAwKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDMwLCA3LCA5OTkpXG4gKiApXG4gKiAvLz0+IDEyXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluU2Vjb25kcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0LCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGlmZiA9IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSAvIDEwMDA7XG4gIHJldHVybiBnZXRSb3VuZGluZ01ldGhvZChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucm91bmRpbmdNZXRob2QpKGRpZmYpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZW5kT2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBlbmQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBlbmQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgZW5kIG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIGVuZCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGVuZE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAyMzo1OTo1OS45OTlcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbmRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBlbmRPZk1vbnRoXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBlbmQgb2YgYSBtb250aCBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGVuZCBvZiBhIG1vbnRoIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIGVuZCBvZiBhIG1vbnRoXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIGVuZCBvZiBhIG1vbnRoIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gZW5kT2ZNb250aChuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDMwIDIwMTQgMjM6NTk6NTkuOTk5XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZW5kT2ZNb250aChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgZGF0ZS5zZXRGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCksIG1vbnRoICsgMSwgMCk7XG4gIGRhdGUuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuaW1wb3J0IGNvbXBhcmVBc2MgZnJvbSBcIi4uL2NvbXBhcmVBc2MvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5Nb250aHMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJbk1vbnRocy9pbmRleC5qc1wiO1xuaW1wb3J0IGRpZmZlcmVuY2VJblNlY29uZHMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJblNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi9fbGliL2RlZmF1bHRMb2NhbGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGNsb25lT2JqZWN0IGZyb20gXCIuLi9fbGliL2Nsb25lT2JqZWN0L2luZGV4LmpzXCI7XG5pbXBvcnQgYXNzaWduIGZyb20gXCIuLi9fbGliL2Fzc2lnbi9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSU5VVEVTX0lOX0RBWSA9IDE0NDA7XG52YXIgTUlOVVRFU19JTl9BTE1PU1RfVFdPX0RBWVMgPSAyNTIwO1xudmFyIE1JTlVURVNfSU5fTU9OVEggPSA0MzIwMDtcbnZhciBNSU5VVEVTX0lOX1RXT19NT05USFMgPSA4NjQwMDtcbi8qKlxuICogQG5hbWUgZm9ybWF0RGlzdGFuY2VcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcyBpbiB3b3Jkcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMgaW4gd29yZHMuXG4gKlxuICogfCBEaXN0YW5jZSBiZXR3ZWVuIGRhdGVzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJlc3VsdCAgICAgICAgICAgICAgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAwIC4uLiAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGxlc3MgdGhhbiBhIG1pbnV0ZSAgfFxuICogfCAzMCBzZWNzIC4uLiAxIG1pbiAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDEgbWludXRlICAgICAgICAgICAgfFxuICogfCAxIG1pbiAzMCBzZWNzIC4uLiA0NCBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFsyLi40NF0gbWludXRlcyAgICAgfFxuICogfCA0NCBtaW5zIC4uLiAzMCBzZWNzIC4uLiA4OSBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IDEgaG91ciAgICAgICAgfFxuICogfCA4OSBtaW5zIDMwIHNlY3MgLi4uIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IFsyLi4yNF0gaG91cnMgfFxuICogfCAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiA0MSBocnMgNTkgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICB8IDEgZGF5ICAgICAgICAgICAgICAgfFxuICogfCA0MSBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiAyOSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgICAgICAgICB8IFsyLi4zMF0gZGF5cyAgICAgICAgfFxuICogfCAyOSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDQ0IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyB8IGFib3V0IDEgbW9udGggICAgICAgfFxuICogfCA0NCBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDU5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyB8IGFib3V0IDIgbW9udGhzICAgICAgfFxuICogfCA1OSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDEgeXIgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFsyLi4xMl0gbW9udGhzICAgICAgfFxuICogfCAxIHlyIC4uLiAxIHlyIDMgbW9udGhzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IDEgeWVhciAgICAgICAgfFxuICogfCAxIHlyIDMgbW9udGhzIC4uLiAxIHlyIDkgbW9udGggcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG92ZXIgMSB5ZWFyICAgICAgICAgfFxuICogfCAxIHlyIDkgbW9udGhzIC4uLiAyIHlycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFsbW9zdCAyIHllYXJzICAgICAgfFxuICogfCBOIHlycyAuLi4gTiB5cnMgMyBtb250aHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IE4geWVhcnMgICAgICAgfFxuICogfCBOIHlycyAzIG1vbnRocyAuLi4gTiB5cnMgOSBtb250aHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG92ZXIgTiB5ZWFycyAgICAgICAgfFxuICogfCBOIHlycyA5IG1vbnRocyAuLi4gTisxIHlycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFsbW9zdCBOKzEgeWVhcnMgICAgfFxuICpcbiAqIFdpdGggYG9wdGlvbnMuaW5jbHVkZVNlY29uZHMgPT0gdHJ1ZWA6XG4gKiB8IERpc3RhbmNlIGJldHdlZW4gZGF0ZXMgfCBSZXN1bHQgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8IDAgc2VjcyAuLi4gNSBzZWNzICAgICAgfCBsZXNzIHRoYW4gNSBzZWNvbmRzICB8XG4gKiB8IDUgc2VjcyAuLi4gMTAgc2VjcyAgICAgfCBsZXNzIHRoYW4gMTAgc2Vjb25kcyB8XG4gKiB8IDEwIHNlY3MgLi4uIDIwIHNlY3MgICAgfCBsZXNzIHRoYW4gMjAgc2Vjb25kcyB8XG4gKiB8IDIwIHNlY3MgLi4uIDQwIHNlY3MgICAgfCBoYWxmIGEgbWludXRlICAgICAgICB8XG4gKiB8IDQwIHNlY3MgLi4uIDYwIHNlY3MgICAgfCBsZXNzIHRoYW4gYSBtaW51dGUgICB8XG4gKiB8IDYwIHNlY3MgLi4uIDkwIHNlY3MgICAgfCAxIG1pbnV0ZSAgICAgICAgICAgICB8XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBiYXNlRGF0ZSAtIHRoZSBkYXRlIHRvIGNvbXBhcmUgd2l0aFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmluY2x1ZGVTZWNvbmRzPWZhbHNlXSAtIGRpc3RhbmNlcyBsZXNzIHRoYW4gYSBtaW51dGUgYXJlIG1vcmUgZGV0YWlsZWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuYWRkU3VmZml4PWZhbHNlXSAtIHJlc3VsdCBpbmRpY2F0ZXMgaWYgdGhlIHNlY29uZCBkYXRlIGlzIGVhcmxpZXIgb3IgbGF0ZXIgdGhhbiB0aGUgZmlyc3RcbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGRpc3RhbmNlIGluIHdvcmRzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgYmFzZURhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdERpc3RhbmNlYCBwcm9wZXJ0eVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIDIgSnVseSAyMDE0IGFuZCAxIEphbnVhcnkgMjAxNT9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlKG5ldyBEYXRlKDIwMTQsIDYsIDIpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSlcbiAqIC8vPT4gJzYgbW9udGhzJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIDEgSmFudWFyeSAyMDE1IDAwOjAwOjE1XG4gKiAvLyBhbmQgMSBKYW51YXJ5IDIwMTUgMDA6MDA6MDAsIGluY2x1ZGluZyBzZWNvbmRzP1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2UoXG4gKiAgIG5ldyBEYXRlKDIwMTUsIDAsIDEsIDAsIDAsIDE1KSxcbiAqICAgbmV3IERhdGUoMjAxNSwgMCwgMSwgMCwgMCwgMCksXG4gKiAgIHsgaW5jbHVkZVNlY29uZHM6IHRydWUgfVxuICogKVxuICogLy89PiAnbGVzcyB0aGFuIDIwIHNlY29uZHMnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGZyb20gMSBKYW51YXJ5IDIwMTZcbiAqIC8vIHRvIDEgSmFudWFyeSAyMDE1LCB3aXRoIGEgc3VmZml4P1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2UobmV3IERhdGUoMjAxNSwgMCwgMSksIG5ldyBEYXRlKDIwMTYsIDAsIDEpLCB7XG4gKiAgIGFkZFN1ZmZpeDogdHJ1ZVxuICogfSlcbiAqIC8vPT4gJ2Fib3V0IDEgeWVhciBhZ28nXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gMSBBdWd1c3QgMjAxNiBhbmQgMSBKYW51YXJ5IDIwMTUgaW4gRXNwZXJhbnRvP1xuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZShuZXcgRGF0ZSgyMDE2LCA3LCAxKSwgbmV3IERhdGUoMjAxNSwgMCwgMSksIHtcbiAqICAgbG9jYWxlOiBlb0xvY2FsZVxuICogfSlcbiAqIC8vPT4gJ3BsaSBvbCAxIGphcm8nXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UoZGlydHlEYXRlLCBkaXJ0eUJhc2VEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfb3B0aW9ucyRsb2NhbGU7XG5cbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBsb2NhbGUgPSAoX3JlZiA9IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubG9jYWxlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRsb2NhbGUgIT09IHZvaWQgMCA/IF9vcHRpb25zJGxvY2FsZSA6IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IGRlZmF1bHRMb2NhbGU7XG5cbiAgaWYgKCFsb2NhbGUuZm9ybWF0RGlzdGFuY2UpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBmb3JtYXREaXN0YW5jZSBwcm9wZXJ0eScpO1xuICB9XG5cbiAgdmFyIGNvbXBhcmlzb24gPSBjb21wYXJlQXNjKGRpcnR5RGF0ZSwgZGlydHlCYXNlRGF0ZSk7XG5cbiAgaWYgKGlzTmFOKGNvbXBhcmlzb24pKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICB9XG5cbiAgdmFyIGxvY2FsaXplT3B0aW9ucyA9IGFzc2lnbihjbG9uZU9iamVjdChvcHRpb25zKSwge1xuICAgIGFkZFN1ZmZpeDogQm9vbGVhbihvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuYWRkU3VmZml4KSxcbiAgICBjb21wYXJpc29uOiBjb21wYXJpc29uXG4gIH0pO1xuICB2YXIgZGF0ZUxlZnQ7XG4gIHZhciBkYXRlUmlnaHQ7XG5cbiAgaWYgKGNvbXBhcmlzb24gPiAwKSB7XG4gICAgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlCYXNlRGF0ZSk7XG4gICAgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgICBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlCYXNlRGF0ZSk7XG4gIH1cblxuICB2YXIgc2Vjb25kcyA9IGRpZmZlcmVuY2VJblNlY29uZHMoZGF0ZVJpZ2h0LCBkYXRlTGVmdCk7XG4gIHZhciBvZmZzZXRJblNlY29uZHMgPSAoZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlUmlnaHQpIC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlTGVmdCkpIC8gMTAwMDtcbiAgdmFyIG1pbnV0ZXMgPSBNYXRoLnJvdW5kKChzZWNvbmRzIC0gb2Zmc2V0SW5TZWNvbmRzKSAvIDYwKTtcbiAgdmFyIG1vbnRoczsgLy8gMCB1cCB0byAyIG1pbnNcblxuICBpZiAobWludXRlcyA8IDIpIHtcbiAgICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5pbmNsdWRlU2Vjb25kcykge1xuICAgICAgaWYgKHNlY29uZHMgPCA1KSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2xlc3NUaGFuWFNlY29uZHMnLCA1LCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgMTApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnbGVzc1RoYW5YU2Vjb25kcycsIDEwLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgMjApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnbGVzc1RoYW5YU2Vjb25kcycsIDIwLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgNDApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnaGFsZkFNaW51dGUnLCAwLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgNjApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnbGVzc1RoYW5YTWludXRlcycsIDEsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4TWludXRlcycsIDEsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChtaW51dGVzID09PSAwKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2xlc3NUaGFuWE1pbnV0ZXMnLCAxLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneE1pbnV0ZXMnLCBtaW51dGVzLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfVxuICAgIH0gLy8gMiBtaW5zIHVwIHRvIDAuNzUgaHJzXG5cbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgNDUpIHtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4TWludXRlcycsIG1pbnV0ZXMsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDAuNzUgaHJzIHVwIHRvIDEuNSBocnNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgOTApIHtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdhYm91dFhIb3VycycsIDEsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDEuNSBocnMgdXAgdG8gMjQgaHJzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IE1JTlVURVNfSU5fREFZKSB7XG4gICAgdmFyIGhvdXJzID0gTWF0aC5yb3VuZChtaW51dGVzIC8gNjApO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2Fib3V0WEhvdXJzJywgaG91cnMsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDEgZGF5IHVwIHRvIDEuNzUgZGF5c1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCBNSU5VVEVTX0lOX0FMTU9TVF9UV09fREFZUykge1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hEYXlzJywgMSwgbG9jYWxpemVPcHRpb25zKTsgLy8gMS43NSBkYXlzIHVwIHRvIDMwIGRheXNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgTUlOVVRFU19JTl9NT05USCkge1xuICAgIHZhciBkYXlzID0gTWF0aC5yb3VuZChtaW51dGVzIC8gTUlOVVRFU19JTl9EQVkpO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hEYXlzJywgZGF5cywgbG9jYWxpemVPcHRpb25zKTsgLy8gMSBtb250aCB1cCB0byAyIG1vbnRoc1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCBNSU5VVEVTX0lOX1RXT19NT05USFMpIHtcbiAgICBtb250aHMgPSBNYXRoLnJvdW5kKG1pbnV0ZXMgLyBNSU5VVEVTX0lOX01PTlRIKTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdhYm91dFhNb250aHMnLCBtb250aHMsIGxvY2FsaXplT3B0aW9ucyk7XG4gIH1cblxuICBtb250aHMgPSBkaWZmZXJlbmNlSW5Nb250aHMoZGF0ZVJpZ2h0LCBkYXRlTGVmdCk7IC8vIDIgbW9udGhzIHVwIHRvIDEyIG1vbnRoc1xuXG4gIGlmIChtb250aHMgPCAxMikge1xuICAgIHZhciBuZWFyZXN0TW9udGggPSBNYXRoLnJvdW5kKG1pbnV0ZXMgLyBNSU5VVEVTX0lOX01PTlRIKTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4TW9udGhzJywgbmVhcmVzdE1vbnRoLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAxIHllYXIgdXAgdG8gbWF4IERhdGVcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9udGhzU2luY2VTdGFydE9mWWVhciA9IG1vbnRocyAlIDEyO1xuICAgIHZhciB5ZWFycyA9IE1hdGguZmxvb3IobW9udGhzIC8gMTIpOyAvLyBOIHllYXJzIHVwIHRvIDEgeWVhcnMgMyBtb250aHNcblxuICAgIGlmIChtb250aHNTaW5jZVN0YXJ0T2ZZZWFyIDwgMykge1xuICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnYWJvdXRYWWVhcnMnLCB5ZWFycywgbG9jYWxpemVPcHRpb25zKTsgLy8gTiB5ZWFycyAzIG1vbnRocyB1cCB0byBOIHllYXJzIDkgbW9udGhzXG4gICAgfSBlbHNlIGlmIChtb250aHNTaW5jZVN0YXJ0T2ZZZWFyIDwgOSkge1xuICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnb3ZlclhZZWFycycsIHllYXJzLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyBOIHllYXJzIDkgbW9udGhzIHVwIHRvIE4geWVhciAxMiBtb250aHNcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnYWxtb3N0WFllYXJzJywgeWVhcnMgKyAxLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgIH1cbiAgfVxufSIsImltcG9ydCBkaXN0YW5jZUluV29yZHMgZnJvbSBcIi4uL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGZvcm1hdERpc3RhbmNlVG9Ob3dcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlIGFuZCBub3cgaW4gd29yZHMuXG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlIGFuZCBub3cgaW4gd29yZHMuXG4gKlxuICogfCBEaXN0YW5jZSB0byBub3cgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJlc3VsdCAgICAgICAgICAgICAgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAwIC4uLiAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGxlc3MgdGhhbiBhIG1pbnV0ZSAgfFxuICogfCAzMCBzZWNzIC4uLiAxIG1pbiAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDEgbWludXRlICAgICAgICAgICAgfFxuICogfCAxIG1pbiAzMCBzZWNzIC4uLiA0NCBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFsyLi40NF0gbWludXRlcyAgICAgfFxuICogfCA0NCBtaW5zIC4uLiAzMCBzZWNzIC4uLiA4OSBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IDEgaG91ciAgICAgICAgfFxuICogfCA4OSBtaW5zIDMwIHNlY3MgLi4uIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IFsyLi4yNF0gaG91cnMgfFxuICogfCAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiA0MSBocnMgNTkgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICB8IDEgZGF5ICAgICAgICAgICAgICAgfFxuICogfCA0MSBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiAyOSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgICAgICAgICB8IFsyLi4zMF0gZGF5cyAgICAgICAgfFxuICogfCAyOSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDQ0IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyB8IGFib3V0IDEgbW9udGggICAgICAgfFxuICogfCA0NCBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDU5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyB8IGFib3V0IDIgbW9udGhzICAgICAgfFxuICogfCA1OSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDEgeXIgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFsyLi4xMl0gbW9udGhzICAgICAgfFxuICogfCAxIHlyIC4uLiAxIHlyIDMgbW9udGhzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IDEgeWVhciAgICAgICAgfFxuICogfCAxIHlyIDMgbW9udGhzIC4uLiAxIHlyIDkgbW9udGggcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG92ZXIgMSB5ZWFyICAgICAgICAgfFxuICogfCAxIHlyIDkgbW9udGhzIC4uLiAyIHlycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFsbW9zdCAyIHllYXJzICAgICAgfFxuICogfCBOIHlycyAuLi4gTiB5cnMgMyBtb250aHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IE4geWVhcnMgICAgICAgfFxuICogfCBOIHlycyAzIG1vbnRocyAuLi4gTiB5cnMgOSBtb250aHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG92ZXIgTiB5ZWFycyAgICAgICAgfFxuICogfCBOIHlycyA5IG1vbnRocyAuLi4gTisxIHlycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFsbW9zdCBOKzEgeWVhcnMgICAgfFxuICpcbiAqIFdpdGggYG9wdGlvbnMuaW5jbHVkZVNlY29uZHMgPT0gdHJ1ZWA6XG4gKiB8IERpc3RhbmNlIHRvIG5vdyAgICAgfCBSZXN1bHQgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8IDAgc2VjcyAuLi4gNSBzZWNzICAgfCBsZXNzIHRoYW4gNSBzZWNvbmRzICB8XG4gKiB8IDUgc2VjcyAuLi4gMTAgc2VjcyAgfCBsZXNzIHRoYW4gMTAgc2Vjb25kcyB8XG4gKiB8IDEwIHNlY3MgLi4uIDIwIHNlY3MgfCBsZXNzIHRoYW4gMjAgc2Vjb25kcyB8XG4gKiB8IDIwIHNlY3MgLi4uIDQwIHNlY3MgfCBoYWxmIGEgbWludXRlICAgICAgICB8XG4gKiB8IDQwIHNlY3MgLi4uIDYwIHNlY3MgfCBsZXNzIHRoYW4gYSBtaW51dGUgICB8XG4gKiB8IDYwIHNlY3MgLi4uIDkwIHNlY3MgfCAxIG1pbnV0ZSAgICAgICAgICAgICB8XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZ2l2ZW4gZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmluY2x1ZGVTZWNvbmRzPWZhbHNlXSAtIGRpc3RhbmNlcyBsZXNzIHRoYW4gYSBtaW51dGUgYXJlIG1vcmUgZGV0YWlsZWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuYWRkU3VmZml4PWZhbHNlXSAtIHJlc3VsdCBzcGVjaWZpZXMgaWYgbm93IGlzIGVhcmxpZXIgb3IgbGF0ZXIgdGhhbiB0aGUgcGFzc2VkIGRhdGVcbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGRpc3RhbmNlIGluIHdvcmRzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXREaXN0YW5jZWAgcHJvcGVydHlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMSBKYW51YXJ5IDIwMTUsIHdoYXQgaXMgdGhlIGRpc3RhbmNlIHRvIDIgSnVseSAyMDE0P1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VUb05vdyhcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMilcbiAqIClcbiAqIC8vPT4gJzYgbW9udGhzJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiBub3cgaXMgMSBKYW51YXJ5IDIwMTUgMDA6MDA6MDAsXG4gKiAvLyB3aGF0IGlzIHRoZSBkaXN0YW5jZSB0byAxIEphbnVhcnkgMjAxNSAwMDowMDoxNSwgaW5jbHVkaW5nIHNlY29uZHM/XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZVRvTm93KFxuICogICBuZXcgRGF0ZSgyMDE1LCAwLCAxLCAwLCAwLCAxNSksXG4gKiAgIHtpbmNsdWRlU2Vjb25kczogdHJ1ZX1cbiAqIClcbiAqIC8vPT4gJ2xlc3MgdGhhbiAyMCBzZWNvbmRzJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAxIEphbnVhcnkgMjAxNSxcbiAqIC8vIHdoYXQgaXMgdGhlIGRpc3RhbmNlIHRvIDEgSmFudWFyeSAyMDE2LCB3aXRoIGEgc3VmZml4P1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VUb05vdyhcbiAqICAgbmV3IERhdGUoMjAxNiwgMCwgMSksXG4gKiAgIHthZGRTdWZmaXg6IHRydWV9XG4gKiApXG4gKiAvLz0+ICdpbiBhYm91dCAxIHllYXInXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDEgSmFudWFyeSAyMDE1LFxuICogLy8gd2hhdCBpcyB0aGUgZGlzdGFuY2UgdG8gMSBBdWd1c3QgMjAxNiBpbiBFc3BlcmFudG8/XG4gKiBjb25zdCBlb0xvY2FsZSA9IHJlcXVpcmUoJ2RhdGUtZm5zL2xvY2FsZS9lbycpXG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZVRvTm93KFxuICogICBuZXcgRGF0ZSgyMDE2LCA3LCAxKSxcbiAqICAge2xvY2FsZTogZW9Mb2NhbGV9XG4gKiApXG4gKiAvLz0+ICdwbGkgb2wgMSBqYXJvJ1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZVRvTm93KGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGRpc3RhbmNlSW5Xb3JkcyhkaXJ0eURhdGUsIERhdGUubm93KCksIG9wdGlvbnMpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGVuZE9mRGF5IGZyb20gXCIuLi9lbmRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IGVuZE9mTW9udGggZnJvbSBcIi4uL2VuZE9mTW9udGgvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzTGFzdERheU9mTW9udGhcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0aGUgbGFzdCBkYXkgb2YgYSBtb250aD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRoZSBsYXN0IGRheSBvZiBhIG1vbnRoP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRoZSBsYXN0IGRheSBvZiBhIG1vbnRoXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSXMgMjggRmVicnVhcnkgMjAxNCB0aGUgbGFzdCBkYXkgb2YgYSBtb250aD9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzTGFzdERheU9mTW9udGgobmV3IERhdGUoMjAxNCwgMSwgMjgpKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNMYXN0RGF5T2ZNb250aChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHJldHVybiBlbmRPZkRheShkYXRlKS5nZXRUaW1lKCkgPT09IGVuZE9mTW9udGgoZGF0ZSkuZ2V0VGltZSgpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkRm9ybWF0TG9uZ0ZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgIHZhciBmb3JtYXQgPSBhcmdzLmZvcm1hdHNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0c1thcmdzLmRlZmF1bHRXaWR0aF07XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5SW5kZXgsIG9wdGlvbnMpIHtcbiAgICB2YXIgY29udGV4dCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogJ3N0YW5kYWxvbmUnO1xuICAgIHZhciB2YWx1ZXNBcnJheTtcblxuICAgIGlmIChjb250ZXh0ID09PSAnZm9ybWF0dGluZycgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICB2YXIgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFyIHdpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9kZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFyIF93aWR0aCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1tfd2lkdGhdIHx8IGFyZ3MudmFsdWVzW19kZWZhdWx0V2lkdGhdO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayhkaXJ0eUluZGV4KSA6IGRpcnR5SW5kZXg7IC8vIEB0cy1pZ25vcmU6IEZvciBzb21lIHJlYXNvbiBUeXBlU2NyaXB0IGp1c3QgZG9uJ3Qgd2FudCB0byBtYXRjaCBpdCwgbm8gbWF0dGVyIGhvdyBoYXJkIHdlIHRyeS4gSSBjaGFsbGVuZ2UgeW91IHRvIHRyeSB0byByZW1vdmUgaXQhXG5cbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdmFyIG1hdGNoUGF0dGVybiA9IHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5tYXRjaFBhdHRlcm5zW2FyZ3MuZGVmYXVsdE1hdGNoV2lkdGhdO1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xuXG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VQYXR0ZXJucyA9IHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuICAgIHZhciBrZXkgPSBBcnJheS5pc0FycmF5KHBhcnNlUGF0dGVybnMpID8gZmluZEluZGV4KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pIDogZmluZEtleShwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KTtcbiAgICB2YXIgdmFsdWU7XG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkgJiYgcHJlZGljYXRlKG9iamVjdFtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcbiAgICBpZiAoIXBhcnNlUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pIDogcGFyc2VSZXN1bHRbMF07XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn0iLCJ2YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBzZWNvbmQnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ2hhbGYgYSBtaW51dGUnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgbWludXRlJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICcxIG1pbnV0ZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIGhvdXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxIGhvdXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEgZGF5JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBkYXlzJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ2Fib3V0IDEgd2VlaycsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEgd2VlaycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ2Fib3V0IDEgbW9udGgnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEgbW9udGgnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIHllYXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIHllYXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnb3ZlciAxIHllYXInLFxuICAgIG90aGVyOiAnb3ZlciB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ2FsbW9zdCAxIHllYXInLFxuICAgIG90aGVyOiAnYWxtb3N0IHt7Y291bnR9fSB5ZWFycydcbiAgfVxufTtcblxudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuXG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBjb3VudC50b1N0cmluZygpKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICdpbiAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJyBhZ28nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXREaXN0YW5jZTsiLCJpbXBvcnQgYnVpbGRGb3JtYXRMb25nRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanNcIjtcbnZhciBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0VFRUUsIE1NTU0gZG8sIHknLFxuICBsb25nOiAnTU1NTSBkbywgeScsXG4gIG1lZGl1bTogJ01NTSBkLCB5JyxcbiAgc2hvcnQ6ICdNTS9kZC95eXl5J1xufTtcbnZhciB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ2g6bW06c3MgYSB6enp6JyxcbiAgbG9uZzogJ2g6bW06c3MgYSB6JyxcbiAgbWVkaXVtOiAnaDptbTpzcyBhJyxcbiAgc2hvcnQ6ICdoOm1tIGEnXG59O1xudmFyIGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIGxvbmc6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBtZWRpdW06ICd7e2RhdGV9fSwge3t0aW1lfX0nLFxuICBzaG9ydDogJ3t7ZGF0ZX19LCB7e3RpbWV9fSdcbn07XG52YXIgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICB0aW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIGRhdGVUaW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZVRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0TG9uZzsiLCJ2YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidsYXN0JyBlZWVlICdhdCcgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ3llc3RlcmRheSBhdCcgcFwiLFxuICB0b2RheTogXCIndG9kYXkgYXQnIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ3RvbW9ycm93IGF0JyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2F0JyBwXCIsXG4gIG90aGVyOiAnUCdcbn07XG5cbnZhciBmb3JtYXRSZWxhdGl2ZSA9IGZ1bmN0aW9uIGZvcm1hdFJlbGF0aXZlKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykge1xuICByZXR1cm4gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0UmVsYXRpdmU7IiwiaW1wb3J0IGJ1aWxkTG9jYWxpemVGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIjtcbnZhciBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydCJywgJ0EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnQkMnLCAnQUQnXSxcbiAgd2lkZTogWydCZWZvcmUgQ2hyaXN0JywgJ0Fubm8gRG9taW5pJ11cbn07XG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnUTEnLCAnUTInLCAnUTMnLCAnUTQnXSxcbiAgd2lkZTogWycxc3QgcXVhcnRlcicsICcybmQgcXVhcnRlcicsICczcmQgcXVhcnRlcicsICc0dGggcXVhcnRlciddXG59OyAvLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cbi8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuLy8gR2VuZXJhbGx5LCBmb3JtYXR0ZWQgZGF0ZXMgc2hvdWxkIGxvb2sgbGlrZSB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgc2VudGVuY2UsXG4vLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXG5cbnZhciBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0onLCAnRicsICdNJywgJ0EnLCAnTScsICdKJywgJ0onLCAnQScsICdTJywgJ08nLCAnTicsICdEJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ10sXG4gIHdpZGU6IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ1MnLCAnTScsICdUJywgJ1cnLCAnVCcsICdGJywgJ1MnXSxcbiAgc2hvcnQ6IFsnU3UnLCAnTW8nLCAnVHUnLCAnV2UnLCAnVGgnLCAnRnInLCAnU2EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXG4gIHdpZGU6IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfVxufTtcbnZhciBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH1cbn07XG5cbnZhciBvcmRpbmFsTnVtYmVyID0gZnVuY3Rpb24gb3JkaW5hbE51bWJlcihkaXJ0eU51bWJlciwgX29wdGlvbnMpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7IC8vIElmIG9yZGluYWwgbnVtYmVycyBkZXBlbmQgb24gY29udGV4dCwgZm9yIGV4YW1wbGUsXG4gIC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBmb3IgZGlmZmVyZW50IGdyYW1tYXRpY2FsIGdlbmRlcnMsXG4gIC8vIHVzZSBgb3B0aW9ucy51bml0YC5cbiAgLy9cbiAgLy8gYHVuaXRgIGNhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF0ZScsICdkYXlPZlllYXInLFxuICAvLyAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcuXG5cbiAgdmFyIHJlbTEwMCA9IG51bWJlciAlIDEwMDtcblxuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnc3QnO1xuXG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnbmQnO1xuXG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAncmQnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudW1iZXIgKyAndGgnO1xufTtcblxudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIGFyZ3VtZW50Q2FsbGJhY2socXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxpemU7IiwiaW1wb3J0IGJ1aWxkTWF0Y2hGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIjtcbmltcG9ydCBidWlsZE1hdGNoUGF0dGVybkZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIjtcbnZhciBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKykodGh8c3R8bmR8cmQpPy9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYnxhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYlxcLj9cXHM/Y1xcLj98YlxcLj9cXHM/Y1xcLj9cXHM/ZVxcLj98YVxcLj9cXHM/ZFxcLj98Y1xcLj9cXHM/ZVxcLj8pL2ksXG4gIHdpZGU6IC9eKGJlZm9yZSBjaHJpc3R8YmVmb3JlIGNvbW1vbiBlcmF8YW5ubyBkb21pbml8Y29tbW9uIGVyYSkvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXmIvaSwgL14oYXxjKS9pXVxufTtcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9eai9pLCAvXmYvaSwgL15tL2ksIC9eYS9pLCAvXm0vaSwgL15qL2ksIC9eai9pLCAvXmEvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldLFxuICBhbnk6IFsvXmphL2ksIC9eZi9pLCAvXm1hci9pLCAvXmFwL2ksIC9ebWF5L2ksIC9eanVuL2ksIC9eanVsL2ksIC9eYXUvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaVxuICB9XG59O1xudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2sodmFsdWUpIHtcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH1cbiAgfSksXG4gIGVyYTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueScsXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayhpbmRleCkge1xuICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXk6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ2FueScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBtYXRjaDsiLCJpbXBvcnQgZm9ybWF0RGlzdGFuY2UgZnJvbSBcIi4vX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdExvbmcgZnJvbSBcIi4vX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0UmVsYXRpdmUgZnJvbSBcIi4vX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGxvY2FsaXplIGZyb20gXCIuL19saWIvbG9jYWxpemUvaW5kZXguanNcIjtcbmltcG9ydCBtYXRjaCBmcm9tIFwiLi9fbGliL21hdGNoL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQHR5cGUge0xvY2FsZX1cbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBFbmdsaXNoIGxvY2FsZSAoVW5pdGVkIFN0YXRlcykuXG4gKiBAbGFuZ3VhZ2UgRW5nbGlzaFxuICogQGlzby02MzktMiBlbmdcbiAqIEBhdXRob3IgU2FzaGEgS29zcyBbQGtvc3Nub2NvcnBde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9rb3Nzbm9jb3JwfVxuICogQGF1dGhvciBMZXNoYSBLb3NzIFtAbGVzaGFrb3NzXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbGVzaGFrb3NzfVxuICovXG52YXIgbG9jYWxlID0ge1xuICBjb2RlOiAnZW4tVVMnLFxuICBmb3JtYXREaXN0YW5jZTogZm9ybWF0RGlzdGFuY2UsXG4gIGZvcm1hdExvbmc6IGZvcm1hdExvbmcsXG4gIGZvcm1hdFJlbGF0aXZlOiBmb3JtYXRSZWxhdGl2ZSxcbiAgbG9jYWxpemU6IGxvY2FsaXplLFxuICBtYXRjaDogbWF0Y2gsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDBcbiAgICAvKiBTdW5kYXkgKi9cbiAgICAsXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiAxXG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBmb3JtYXREaXN0YW5jZVRvTm93IH0gZnJvbSAnZGF0ZS1mbnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvalRvU2lkZSh4KSB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhclwiKTtcbiAgICBjb25zdCBzaWRlYmFyTmFtZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXJOYW1lc09ubHlcIik7XG4gICAgY29uc3Qgc2lkZWJhckhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdG9BZGROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBlZGl0UHJvak5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG5hbWVSZW1vdmVQcm9qID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0b0FkZFByb2ogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG5ld1Byb2pCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgXG4gICAgXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGFya0NvdW50XCIpLmlubmVySFRNTCAlIDIgPT09IDApIHtcbiAgICAgICAgc2lkZWJhckhvbGRlci5jbGFzc05hbWUgPSBcImVhY2hTaWRlYmFyQ29udGFpbmVyIGRhcmstbW9kZVwiXG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2lkZWJhckhvbGRlci5jbGFzc05hbWUgPSBcImVhY2hTaWRlYmFyQ29udGFpbmVyXCI7XG4gICAgfSAgIFxuICAgIFxuXG4gICAgdG9BZGROYW1lLmNsYXNzTmFtZSA9IFwic2lkZWJhcl9OYW1lc1wiO1xuICAgIHRvQWRkTmFtZS5pZCA9IHgucHJvak5hbWUgKyBcInNpZGVOYW1lXCI7XG4gICAgdG9BZGROYW1lLmlubmVySFRNTCA9IHgucHJvak5hbWU7XG5cbiAgICBuYW1lUmVtb3ZlUHJvai5jbGFzc05hbWUgPSBcInNpZGViYXJfTmFtZV9yZW1vdmVcIjtcbiAgICBuYW1lUmVtb3ZlUHJvai5pZCA9IHgucHJvak5hbWUgKyBcInJlbW92ZXNlbGZcIjtcbiAgICBuYW1lUmVtb3ZlUHJvai5pbm5lckhUTUwgPSBcIjxpIGNsYXNzPSdmYS1yZWd1bGFyIGZhLXRyYXNoLWNhbic+PC9pPlwiO1xuXG4gICAgZWRpdFByb2pOYW1lLmNsYXNzTmFtZSA9IFwic2lkZWJhcl9OYW1lX2VkaXRcIjtcbiAgICBlZGl0UHJvak5hbWUuaWQgPSB4LnByb2pOYW1lICsgXCJlZGl0c2VsZlwiO1xuICAgIGVkaXRQcm9qTmFtZS5pbm5lckhUTUwgPSBcIjxpIGNsYXNzPSdmYS1yZWd1bGFyIGZhLXBlbi10by1zcXVhcmUnPjwvaT5cIjtcblxuICAgIHRvQWRkUHJvai5jbGFzc05hbWUgPSBcImFkZGVkX3Byb2plY3RzXCI7XG4gICAgdG9BZGRQcm9qLmlkID0geC5wcm9qTmFtZTtcbiAgICB0b0FkZFByb2ouaW5uZXJIVE1MID0geC5wcm9qTmFtZTtcblxuICAgIG5ld1Byb2pCb3guY2xhc3NOYW1lID0gXCJhZGRlZF9wcm9qX2JveFwiO1xuICAgIG5ld1Byb2pCb3guaWQgPSB4LnByb2pOYW1lICsgXCJib3hcIjtcblxuICAgIHNpZGViYXJOYW1lcy5hcHBlbmRDaGlsZChzaWRlYmFySG9sZGVyKTtcbiAgICBzaWRlYmFySG9sZGVyLmFwcGVuZENoaWxkKHRvQWRkTmFtZSk7XG4gICAgc2lkZWJhckhvbGRlci5hcHBlbmRDaGlsZChlZGl0UHJvak5hbWUpO1xuICAgIHNpZGViYXJIb2xkZXIuYXBwZW5kQ2hpbGQobmFtZVJlbW92ZVByb2opO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQodG9BZGRQcm9qKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKG5ld1Byb2pCb3gpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0TmV3U2lkZU5hbWVzKG9sZE5hbWUsIG5ld1Byb2pOYW1lKSB7XG4gICAgLy9jaGFuZ2UgSUQgb2Ygc2lkZWJhciBuYW1lIG9uIERPTSBlbGVtZW50ICYgYWxsIHRoZSByZXNwZWN0aXZlIGJ1dHRvbnNcbiAgICAvL2NoYW5nZSBkaXNwbGF5IHNvIHRoYXQgeW91IGNhbiBTRUUgbmV3IHByb2plY3QgbmFtZVxuICAgIGNvbnNvbGUubG9nKG9sZE5hbWUpO1xuICAgIHZhciB0b0NoYW5nZUlkQXJyYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbaWQqPSR7Q1NTLmVzY2FwZShvbGROYW1lKX1dYCk7XG4gICAgY29uc29sZS5sb2codG9DaGFuZ2VJZEFycmF5KTtcbiAgICB0b0NoYW5nZUlkQXJyYXkuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIGlmIChlbC5jbGFzc05hbWUgPT09IFwic2lkZWJhcl9OYW1lc1wiKSB7XG4gICAgICAgICAgICBlbC5pbm5lckhUTUwgPSBgJHtuZXdQcm9qTmFtZX1gO1xuICAgICAgICB9IGVsc2UgaWYgKGVsLmNsYXNzTmFtZSA9PT0gXCJhZGRlZF9wcm9qZWN0c1wiKSB7XG4gICAgICAgICAgICBlbC5pbm5lckhUTUwgPSBgJHtuZXdQcm9qTmFtZX1gO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdHJIb2xkZXIgPSBlbC5pZDtcbiAgICAgICAgY29uc29sZS5sb2coc3RySG9sZGVyKTtcbiAgICAgICAgZWwuaWQgPSBzdHJIb2xkZXIucmVwbGFjZShgJHtvbGROYW1lfWAsIGAke25ld1Byb2pOYW1lfWApO1xuICAgICAgICBcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlZUFsbChhbGwpIHtcblxuICAgIGNvbnN0IHByb2pDb250ZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhclwiKTtcbiAgICBjb25zdCBhbGxJdGVtc0JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxsVGFza3NCb3hcIik7XG5cbiAgICBhbGxJdGVtc0JveC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIHByb2pDb250ZW50cy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgXG4gICAgLy9yZW1lbWJlciB0aGF0IGRhdGUgZ29lcyBieSB5eXl5L21tL2RkICYgSmFuIGlzIDAhXG4gICAgZnVuY3Rpb24gZHVlSW4oZykge1xuICAgICAgICAvL2NoYW5nZSB5eXl5LW1tLWRkIHRvIHl5eXltbWRkXG4gICAgICAgIHZhciB3aGVuSXRzRHVlID0gZy5kdWVEYXRlLnJlcGxhY2UoLy18XFxzL2csIFwiXCIpO1xuICAgICAgICB2YXIgeXl5eSA9IHdoZW5JdHNEdWUuc2xpY2UoMCwgNCk7XG4gICAgICAgIHZhciBtbSA9IE51bWJlcih3aGVuSXRzRHVlLnNsaWNlKDQsIDYpKSAtIDE7XG4gICAgICAgIHZhciBkZCA9IE51bWJlcih3aGVuSXRzRHVlLnNsaWNlKDYpKTtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlVG9Ob3coXG4gICAgICAgICAgICBuZXcgRGF0ZSh5eXl5LCBtbSwgZGQpLFxuICAgICAgICAgICAge2FkZFN1ZmZpeDogdHJ1ZX1cbiAgICAgICAgKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJiZWZvcmUgdGhlIGFsdGVyYXRpb24gXCIgKyByZXN1bHQpO1xuICAgICAgICBpZiAocmVzdWx0LnNsaWNlKC0zKSA9PT0gXCJhZ29cIikge1xuICAgICAgICAgICAgcmVzdWx0ID0gXCJUb2RheVwiO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWZ0ZXIgdGhlIGFsdGVyYXRpb24gXCIgKyByZXN1bHQpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICB3aGlsZSAoYWxsSXRlbXNCb3gubGFzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgICBhbGxJdGVtc0JveC5yZW1vdmVDaGlsZChhbGxJdGVtc0JveC5sYXN0RWxlbWVudENoaWxkKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJyZW1vdmluZyB0aGUgdGFza3MgZnJvbSBhbGxJdGVtc0JveFwiKVxuICAgIH07XG4gICAgYWxsLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIHZhciBkdWVJblJlc3VsdCA9IGR1ZUluKGVsKTtcbiAgICAgICAgY29uc3QgdG9BZGRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgYnV0dG9uSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgcmVtb3ZlU2VsZkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNvbnN0IGV4cGFuZFNlbGZCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBjb25zdCBlZGl0U2VsZkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNvbnN0IGR1ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHJlYWRpbHlTZWVuQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGV4cGFuZGFibGVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgZXhwYW5kQnRuQ291bnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcblxuXG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhcmtDb3VudFwiKS5pbm5lckhUTUwgJSAyID09PSAwKSB7XG4gICAgICAgICAgICB0b0FkZFRhc2suY2xhc3NOYW1lID0gXCJhZGRlZF90YXNrcyBkYXJrLW1vZGVcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvQWRkVGFzay5jbGFzc05hbWUgPSBcImFkZGVkX3Rhc2tzXCI7XG4gICAgICAgIH07XG4gICAgICAgIHRvQWRkVGFzay5pZCA9IGAke2VsLklEfV8ke2VsLnByaW9yaXR5fV9BbGxQYWdlYDtcblxuICAgICAgICByZWFkaWx5U2VlbkNvbnRlbnQuY2xhc3NOYW1lID0gXCJub3dZb3VTZWVNZVwiO1xuICAgICAgICByZWFkaWx5U2VlbkNvbnRlbnQuaW5uZXJIVE1MID0gYCR7ZWwudGl0bGV9PGJyPjxicj5EdWUgRGF0ZTogJHtlbC5kdWVEYXRlfWA7XG5cbiAgICAgICAgZXhwYW5kYWJsZUNvbnRlbnQuY2xhc3NOYW1lID0gXCJ0aGVFeHBhbmRhYmxlc1wiO1xuICAgICAgICBleHBhbmRhYmxlQ29udGVudC5pZCA9IGAke2VsLklEfV9leHBhbmRNZV9BbGxQYWdlYDtcbiAgICAgICAgZXhwYW5kYWJsZUNvbnRlbnQuaW5uZXJIVE1MID0gYERlc2NyaXB0aW9uOiAke2VsLmRlc2NyaXB0aW9ufTxicj48YnI+Tm90ZXM6ICR7ZWwubm90ZXN9YDtcblxuICAgICAgICBidXR0b25Ib2xkZXIuY2xhc3NOYW1lID0gXCJ0YXNrX2J1dHRvbl9ob2xkZXJcIjtcblxuICAgICAgICByZW1vdmVTZWxmQnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgICAgICByZW1vdmVTZWxmQnRuLmNsYXNzTmFtZSA9IFwicmVtb3Zlc2VsZl9idXR0b25cIjtcbiAgICAgICAgcmVtb3ZlU2VsZkJ0bi5pZCA9IGBidG5fQWxsUGFnZV8ke2VsLklEfWA7XG4gICAgICAgIHJlbW92ZVNlbGZCdG4uaW5uZXJIVE1MID0gXCI8aSBjbGFzcz0nZmEtc29saWQgZmEtdHJhc2gtY2FuJz48L2k+XCI7XG5cbiAgICAgICAgZXhwYW5kU2VsZkJ0bi50eXBlID0gXCJidXR0b25cIjtcbiAgICAgICAgZXhwYW5kU2VsZkJ0bi5jbGFzc05hbWUgPSBcImV4cGFuZHNlbGZfYnV0dG9uXCI7XG4gICAgICAgIGV4cGFuZFNlbGZCdG4uaWQgPSBgZXhwYW5kQnRuX0FsbFBhZ2VfJHtlbC5JRH1gO1xuICAgICAgICBleHBhbmRTZWxmQnRuLmlubmVySFRNTCA9IFwiPGkgY2xhc3M9J2ZhLXNvbGlkIGZhLWFuZ2xlcy1kb3duJz48L2k+XCI7XG5cbiAgICAgICAgZXhwYW5kQnRuQ291bnRlci5pbm5lckhUTUwgPSAxO1xuXG4gICAgICAgIGVkaXRTZWxmQnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgICAgICBlZGl0U2VsZkJ0bi5jbGFzc05hbWUgPSBcImVkaXRUYXNrX2J1dHRvblwiO1xuICAgICAgICBlZGl0U2VsZkJ0bi5pZCA9IGBlZGl0QnRuX0FsbFBhZ2VfJHtlbC5JRH1gO1xuICAgICAgICBlZGl0U2VsZkJ0bi5pbm5lckhUTUwgPSBcIjxpIGNsYXNzPSdmYS1yZWd1bGFyIGZhLXBlbi10by1zcXVhcmUnPjwvaT5cIjtcblxuICAgICAgICBkdWVEaXYuY2xhc3NOYW1lID0gXCJhZGRlZF9kdWVcIjtcbiAgICAgICAgaWYgKGVsLmR1ZURhdGUgIT09IFwiXCIpIHtcbiAgICAgICAgICAgIGR1ZURpdi5pbm5lckhUTUwgPSBgRHVlOiAke2R1ZUluUmVzdWx0fWA7XG4gICAgICAgIH1cblxuICAgICAgICBhbGxJdGVtc0JveC5hcHBlbmRDaGlsZCh0b0FkZFRhc2spO1xuICAgICAgICB0b0FkZFRhc2suYXBwZW5kQ2hpbGQocmVhZGlseVNlZW5Db250ZW50KTtcbiAgICAgICAgdG9BZGRUYXNrLmFwcGVuZENoaWxkKGR1ZURpdik7XG4gICAgICAgIHRvQWRkVGFzay5hcHBlbmRDaGlsZChidXR0b25Ib2xkZXIpO1xuICAgICAgICB0b0FkZFRhc2suYXBwZW5kQ2hpbGQoZXhwYW5kYWJsZUNvbnRlbnQpO1xuICAgICAgICB0b0FkZFRhc2suYXBwZW5kQ2hpbGQoZXhwYW5kQnRuQ291bnRlcik7XG4gICAgICAgIGJ1dHRvbkhvbGRlci5hcHBlbmRDaGlsZChleHBhbmRTZWxmQnRuKTtcbiAgICAgICAgYnV0dG9uSG9sZGVyLmFwcGVuZENoaWxkKGVkaXRTZWxmQnRuKTtcbiAgICAgICAgYnV0dG9uSG9sZGVyLmFwcGVuZENoaWxkKHJlbW92ZVNlbGZCdG4pO1xuXG4gICAgICAgIHZhciBkaXZfbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZGRlZF9wcm9qZWN0cycpO1xuICAgICAgICB2YXIgaDNfbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZGRlZF9wcm9qX2JveCcpO1xuICAgICAgICB2YXIgZGl2X2FycmF5ID0gWy4uLmRpdl9saXN0XTtcbiAgICAgICAgdmFyIGgzX2FycmF5ID0gWy4uLmgzX2xpc3RdO1xuICAgICAgICBkaXZfYXJyYXkuZm9yRWFjaChkaXYgPT4ge1xuICAgICAgICAgICAgZGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSk7XG4gICAgICAgIGgzX2FycmF5LmZvckVhY2goaDMgPT4ge1xuICAgICAgICAgICAgaDMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9KTsgICBcblxuICAgICAgICBhbGxJdGVtc0JveC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmcmVzaENlbnRlckRPTShBUCwgeSwgeikge1xuXG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhclwiKTtcbiAgICBjb25zdCBhbGxJdGVtc0JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxsVGFza3NCb3hcIik7XG4gICAgdmFyIHNpZGViYXJDaGlsZCA9IHNpZGViYXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoM1wiKTtcblxuICAgIHNpZGViYXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBhbGxJdGVtc0JveC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgXG4gICAgLy9yZW1lbWJlciB0aGF0IGRhdGUgZ29lcyBieSB5eXl5L21tL2RkICYgSmFuIGlzIDAhXG4gICAgZnVuY3Rpb24gZHVlSW4oZykge1xuICAgICAgICAvL2NoYW5nZSB5eXl5LW1tLWRkIHRvIHl5eXltbWRkXG4gICAgICAgIHZhciB3aGVuSXRzRHVlID0gZy5kdWVEYXRlLnJlcGxhY2UoLy18XFxzL2csIFwiXCIpO1xuICAgICAgICB2YXIgeXl5eSA9IHdoZW5JdHNEdWUuc2xpY2UoMCwgNCk7XG4gICAgICAgIHZhciBtbSA9IE51bWJlcih3aGVuSXRzRHVlLnNsaWNlKDQsIDYpKSAtIDE7XG4gICAgICAgIHZhciBkZCA9IE51bWJlcih3aGVuSXRzRHVlLnNsaWNlKDYpKTtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlVG9Ob3coXG4gICAgICAgICAgICBuZXcgRGF0ZSh5eXl5LCBtbSwgZGQpLFxuICAgICAgICAgICAge2FkZFN1ZmZpeDogdHJ1ZX1cbiAgICAgICAgKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImJlZm9yZSB0aGUgYWx0ZXJhdGlvbiBcIiArIHJlc3VsdCk7XG4gICAgICAgIGlmIChyZXN1bHQuc2xpY2UoLTMpID09PSBcImFnb1wiKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBcIlRvZGF5XCI7XG4gICAgICAgIH1cbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImFmdGVyIHRoZSBhbHRlcmF0aW9uIFwiICsgcmVzdWx0KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgLyogY29uc29sZS5sb2coc2lkZWJhckNoaWxkKTtcbiAgICBjb25zb2xlLmxvZyh6KTtcbiAgICBjb25zb2xlLmxvZyhzaWRlYmFyQ2hpbGRbel0pOyAqL1xuXG4gICAgd2hpbGUgKHNpZGViYXJDaGlsZFt6XS5sYXN0RWxlbWVudENoaWxkKSB7XG4gICAgICAgIHNpZGViYXJDaGlsZFt6XS5yZW1vdmVDaGlsZChzaWRlYmFyQ2hpbGRbel0ubGFzdEVsZW1lbnRDaGlsZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVtb3ZpbmcgdGhlIHRhc2tzIGZyb20gc3BlY2lmaWMgcHJvalwiKVxuICAgIH07XG4gICAgQVBbeV1bXCJ0YXNrTGlzdFwiXS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICB2YXIgZHVlSW5SZXN1bHQgPSBkdWVJbihlbCk7XG4gICAgICAgIGNvbnN0IHRvQWRkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGJ1dHRvbkhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHJlbW92ZVNlbGZCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBjb25zdCBleHBhbmRTZWxmQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgY29uc3QgZWRpdFNlbGZCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBjb25zdCBkdWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCByZWFkaWx5U2VlbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBleHBhbmRhYmxlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGV4cGFuZEJ0bkNvdW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG5cbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGFya0NvdW50XCIpLmlubmVySFRNTCAlIDIgPT09IDApIHtcbiAgICAgICAgICAgIHRvQWRkVGFzay5jbGFzc05hbWUgPSBcImFkZGVkX3Rhc2tzIGRhcmstbW9kZVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9BZGRUYXNrLmNsYXNzTmFtZSA9IFwiYWRkZWRfdGFza3NcIjtcbiAgICAgICAgfVxuICAgICAgICB0b0FkZFRhc2suaWQgPSBgJHtlbC5JRH1fJHtlbC5wcmlvcml0eX1gO1xuXG4gICAgICAgIHJlYWRpbHlTZWVuQ29udGVudC5jbGFzc05hbWUgPSBcIm5vd1lvdVNlZU1lXCI7XG4gICAgICAgIHJlYWRpbHlTZWVuQ29udGVudC5pbm5lckhUTUwgPSBgJHtlbC50aXRsZX08YnI+RHVlIERhdGU6ICR7ZWwuZHVlRGF0ZX1gO1xuXG4gICAgICAgIGV4cGFuZGFibGVDb250ZW50LmNsYXNzTmFtZSA9IFwidGhlRXhwYW5kYWJsZXNcIjtcbiAgICAgICAgZXhwYW5kYWJsZUNvbnRlbnQuaWQgPSBgJHtlbC5JRH1fZXhwYW5kTWVgO1xuICAgICAgICBleHBhbmRhYmxlQ29udGVudC5pbm5lckhUTUwgPSBgRGVzY3JpcHRpb246ICR7ZWwuZGVzY3JpcHRpb259PGJyPjxicj5Ob3RlczogJHtlbC5ub3Rlc31gO1xuXG4gICAgICAgIGJ1dHRvbkhvbGRlci5jbGFzc05hbWUgPSBcInRhc2tfYnV0dG9uX2hvbGRlclwiO1xuXG4gICAgICAgIHJlbW92ZVNlbGZCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgICAgIHJlbW92ZVNlbGZCdG4uY2xhc3NOYW1lID0gXCJyZW1vdmVzZWxmX2J1dHRvblwiO1xuICAgICAgICByZW1vdmVTZWxmQnRuLmlkID0gYGJ0bl8ke2VsLklEfWA7XG4gICAgICAgIHJlbW92ZVNlbGZCdG4uaW5uZXJIVE1MID0gXCI8aSBjbGFzcz0nZmEtc29saWQgZmEtdHJhc2gtY2FuJz48L2k+XCI7XG5cbiAgICAgICAgZXhwYW5kU2VsZkJ0bi50eXBlID0gXCJidXR0b25cIjtcbiAgICAgICAgZXhwYW5kU2VsZkJ0bi5jbGFzc05hbWUgPSBcImV4cGFuZHNlbGZfYnV0dG9uXCI7XG4gICAgICAgIGV4cGFuZFNlbGZCdG4uaWQgPSBgZXhwYW5kQnRuXyR7ZWwuSUR9YDtcbiAgICAgICAgZXhwYW5kU2VsZkJ0bi5pbm5lckhUTUwgPSBcIjxpIGNsYXNzPSdmYS1zb2xpZCBmYS1hbmdsZXMtZG93bic+PC9pPlwiO1xuXG4gICAgICAgIGV4cGFuZEJ0bkNvdW50ZXIuaW5uZXJIVE1MID0gMTtcblxuICAgICAgICBlZGl0U2VsZkJ0bi50eXBlID0gXCJidXR0b25cIjtcbiAgICAgICAgZWRpdFNlbGZCdG4uY2xhc3NOYW1lID0gXCJlZGl0VGFza19idXR0b25cIjtcbiAgICAgICAgZWRpdFNlbGZCdG4uaWQgPSBgZWRpdEJ0bl8ke2VsLklEfWA7XG4gICAgICAgIGVkaXRTZWxmQnRuLmlubmVySFRNTCA9IFwiPGkgY2xhc3M9J2ZhLXJlZ3VsYXIgZmEtcGVuLXRvLXNxdWFyZSc+PC9pPlwiO1xuXG4gICAgICAgIGR1ZURpdi5jbGFzc05hbWUgPSBcImFkZGVkX2R1ZVwiO1xuICAgICAgICBpZiAoZWwuZHVlRGF0ZSAhPT0gXCJcIikge1xuICAgICAgICAgICAgZHVlRGl2LmlubmVySFRNTCA9IGBEdWU6ICR7ZHVlSW5SZXN1bHR9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIHNpZGViYXJDaGlsZFt6XS5hcHBlbmRDaGlsZCh0b0FkZFRhc2spO1xuICAgICAgICB0b0FkZFRhc2suYXBwZW5kQ2hpbGQocmVhZGlseVNlZW5Db250ZW50KTtcbiAgICAgICAgdG9BZGRUYXNrLmFwcGVuZENoaWxkKGR1ZURpdik7XG4gICAgICAgIHRvQWRkVGFzay5hcHBlbmRDaGlsZChidXR0b25Ib2xkZXIpO1xuICAgICAgICB0b0FkZFRhc2suYXBwZW5kQ2hpbGQoZXhwYW5kYWJsZUNvbnRlbnQpO1xuICAgICAgICB0b0FkZFRhc2suYXBwZW5kQ2hpbGQoZXhwYW5kQnRuQ291bnRlcik7XG4gICAgICAgIGJ1dHRvbkhvbGRlci5hcHBlbmRDaGlsZChleHBhbmRTZWxmQnRuKTtcbiAgICAgICAgYnV0dG9uSG9sZGVyLmFwcGVuZENoaWxkKGVkaXRTZWxmQnRuKTtcbiAgICAgICAgYnV0dG9uSG9sZGVyLmFwcGVuZENoaWxkKHJlbW92ZVNlbGZCdG4pO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlRXhwYW5kKHEsIHIpIHtcbiAgICBjb25zdCBleHBhbmRlckJ0blRvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBleHBhbmRCdG5fJHtxfWApO1xuICAgIGNvbnNvbGUubG9nKGV4cGFuZGVyQnRuVG9nKTtcbiAgICBpZiAociUyID09PSAwKSB7XG4gICAgICAgIGV4cGFuZGVyQnRuVG9nLmlubmVySFRNTCA9IFwiPGkgY2xhc3M9J2ZhLXNvbGlkIGZhLWFuZ2xlcy1kb3duJz48L2k+XCI7XG4gICAgfSBlbHNlIGlmIChyJTIgIT09IDApIHtcbiAgICAgICAgZXhwYW5kZXJCdG5Ub2cuaW5uZXJIVE1MID0gXCI8aSBjbGFzcz0nZmEtc29saWQgZmEtYW5nbGVzLXVwJz48L2k+XCJcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVTZWVBbGxCdG4oKSB7XG4gICAgY29uc3QgYnV0dG9uT2ZJbnRlcmVzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VlQWxsVG9nZ2xlXCIpO1xuICAgIGNvbnN0IGFsbEl0ZW1zRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxsVGFza3NCb3hcIik7XG5cbiAgICBpZiAoYnV0dG9uT2ZJbnRlcmVzdC5pbm5lckhUTUwgPT0gXCJTZWUgQWxsIFRvLURvJ3NcIikge1xuICAgICAgICBjb25zb2xlLmxvZyhcInN1cHBvc2VkIHRvIHNob3cgc3R1ZmYgbm93XCIpO1xuICAgICAgICBidXR0b25PZkludGVyZXN0LmlubmVySFRNTCA9IFwiSGlkZSBBbGwgVG8tRG8nc1wiO1xuICAgIH0gZWxzZSBpZiAoYnV0dG9uT2ZJbnRlcmVzdC5pbm5lckhUTUwgPT0gXCJIaWRlIEFsbCBUby1EbydzXCIpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzdXBwb3NlZCB0byBISURFIG5vd1wiKTtcbiAgICAgICAgYWxsSXRlbXNEaXNwbGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgYnV0dG9uT2ZJbnRlcmVzdC5pbm5lckhUTUwgPSBcIlNlZSBBbGwgVG8tRG8nc1wiO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpZGViYXJUb2dnbGUoeCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxsVGFza3NCb3hcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VlQWxsVG9nZ2xlXCIpLmlubmVySFRNTCA9IFwiU2VlIEFsbCBUby1EbydzXCI7XG4gICAgdmFyIGRpdl9saXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFkZGVkX3Byb2plY3RzJyk7XG4gICAgdmFyIGgzX2xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWRkZWRfcHJval9ib3gnKTtcbiAgICB2YXIgZGl2X2FycmF5ID0gWy4uLmRpdl9saXN0XTtcbiAgICB2YXIgaDNfYXJyYXkgPSBbLi4uaDNfbGlzdF07XG4gICAgZGl2X2FycmF5LmZvckVhY2goZGl2ID0+IHtcbiAgICAgICAgaWYgKGRpdi5pZCA9PT0geCkge1xuICAgICAgICAgICAgZGl2LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXJrQ291bnRcIikuaW5uZXJIVE1MICUgMiA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiZGFyay1tb2RlXCIpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGgzX2FycmF5LmZvckVhY2goaDMgPT4ge1xuICAgICAgICBpZiAoaDMuaWQuc2xpY2UoMCwgLTMpID09PSB4KSB7XG4gICAgICAgICAgICBoMy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGFya0NvdW50XCIpLmlubmVySFRNTCAlIDIgPT09IDApIHtcbiAgICAgICAgICAgICAgICBoMy5jbGFzc0xpc3QuYWRkKFwiZGFyay1tb2RlXCIpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgaDMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgfSk7ICAgICAgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbGxFbXB0eSgpIHtcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhclwiKTtcbiAgICBjb25zdCBzaWRlYmFyQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhck5hbWVzT25seVwiKTtcblxuICAgIHdoaWxlIChtYWluQ29udGVudC5jaGlsZHJlbi5sZW5ndGggIT09IDIpIHtcbiAgICAgICAgbWFpbkNvbnRlbnQucmVtb3ZlQ2hpbGQobWFpbkNvbnRlbnQubGFzdEVsZW1lbnRDaGlsZCk7XG4gICAgfTtcbiAgICB3aGlsZSAoc2lkZWJhckNvbnRlbnQuY2hpbGRyZW4ubGVuZ3RoICE9PSAyKSB7XG4gICAgICAgIHNpZGViYXJDb250ZW50LnJlbW92ZUNoaWxkKHNpZGViYXJDb250ZW50Lmxhc3RFbGVtZW50Q2hpbGQpO1xuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVEYXJrKCkge1xuICAgIHZhciBhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIHZhciBiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyTmFtZXNPbmx5XCIpO1xuICAgIHZhciBjQWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFkZGVkX3Byb2plY3RzXCIpO1xuICAgIHZhciBkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWVBbGxUb2dnbGVcIik7XG4gICAgdmFyIGVBbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZWFjaFNpZGViYXJDb250YWluZXJcIik7XG4gICAgdmFyIGZBbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWRkZWRfcHJval9ib3hcIik7XG4gICAgdmFyIGdBbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWRkZWRfdGFza3NcIik7XG4gICAgdmFyIGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlclwiKTtcbiAgICB2YXIgaSA9ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZG5ld2Zvcm1cIik7XG4gICAgdmFyIGogPSAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRuZXdwcm9qZm9ybVwiKTtcbiAgICB2YXIgayA9ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRGb3JtXCIpO1xuICAgIHZhciBsQWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0ZXh0YXJlYVwiKTtcbiAgICB2YXIgbUFsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW5wdXRcIik7XG4gICAgdmFyIG5BbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNlbGVjdFwiKTtcbiAgICBcbiAgICBhLmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrLW1vZGVcIik7XG4gICAgYi5jbGFzc0xpc3QudG9nZ2xlKFwiZGFyay1tb2RlXCIpO1xuICAgIGQuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmstbW9kZVwiKTtcbiAgICBoLmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrLW1vZGVcIik7XG4gICAgaS5jbGFzc0xpc3QudG9nZ2xlKFwiZGFyay1tb2RlXCIpO1xuICAgIGouY2xhc3NMaXN0LnRvZ2dsZShcImRhcmstbW9kZVwiKTtcbiAgICBrLmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrLW1vZGVcIik7XG5cbiAgICB2YXIgY0FsbEFycmF5ID0gWy4uLmNBbGxdO1xuICAgIHZhciBlQWxsQXJyYXkgPSBbLi4uZUFsbF07XG4gICAgdmFyIGZBbGxBcnJheSA9IFsuLi5mQWxsXTtcbiAgICB2YXIgZ0FsbEFycmF5ID0gWy4uLmdBbGxdO1xuICAgIHZhciBsQWxsQXJyYXkgPSBbLi4ubEFsbF07XG4gICAgdmFyIG1BbGxBcnJheSA9IFsuLi5tQWxsXTtcbiAgICB2YXIgbkFsbEFycmF5ID0gWy4uLm5BbGxdO1xuICAgIGNBbGxBcnJheS5mb3JFYWNoKGRpdiA9PiB7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QudG9nZ2xlKFwiZGFyay1tb2RlXCIpO1xuICAgIH0pO1xuICAgIGVBbGxBcnJheS5mb3JFYWNoKGRpdiA9PiB7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QudG9nZ2xlKFwiZGFyay1tb2RlXCIpO1xuICAgIH0pO1xuICAgIGZBbGxBcnJheS5mb3JFYWNoKGgzID0+IHtcbiAgICAgICAgaDMuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmstbW9kZVwiKTtcbiAgICB9KTtcbiAgICBnQWxsQXJyYXkuZm9yRWFjaChkaXYgPT4ge1xuICAgICAgICBkaXYuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmstbW9kZVwiKTtcbiAgICB9KTtcbiAgICBsQWxsQXJyYXkuZm9yRWFjaCh0ZXh0YXJlYSA9PiB7XG4gICAgICAgIHRleHRhcmVhLmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrLW1vZGVcIik7XG4gICAgfSk7XG4gICAgbUFsbEFycmF5LmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICBpbnB1dC5jbGFzc0xpc3QudG9nZ2xlKFwiZGFyay1tb2RlXCIpO1xuICAgIH0pO1xuICAgIG5BbGxBcnJheS5mb3JFYWNoKHNlbGVjdCA9PiB7XG4gICAgICAgIHNlbGVjdC5jbGFzc0xpc3QudG9nZ2xlKFwiZGFyay1tb2RlXCIpO1xuICAgIH0pO1xuICAgIHZhciBkYXJrQ291bnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGFya0NvdW50XCIpLmlubmVySFRNTDtcbiAgICBkYXJrQ291bnRlcisrO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGFya0NvdW50XCIpLmlubmVySFRNTCA9IGRhcmtDb3VudGVyO1xufVxuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgbG9naWN0b2RvIGZyb20gJy4vbG9naWN0b2RvLmpzJztcbmxvZ2ljdG9kbygpO1xuIiwiaW1wb3J0IHsgYWRkUHJvalRvU2lkZSB9IGZyb20gJy4vRE9NdG9kby5qcyc7XG5pbXBvcnQgeyByZWZyZXNoQ2VudGVyRE9NIH0gZnJvbSAnLi9ET010b2RvLmpzJztcbmltcG9ydCB7IHNpZGViYXJUb2dnbGUgfSBmcm9tICcuL0RPTXRvZG8uanMnO1xuaW1wb3J0IHsgYWxsRW1wdHkgfSBmcm9tICcuL0RPTXRvZG8uanMnO1xuaW1wb3J0IHsgc2V0TmV3U2lkZU5hbWVzIH0gZnJvbSAnLi9ET010b2RvLmpzJztcbmltcG9ydCB7IHRvZ2dsZUV4cGFuZCB9IGZyb20gJy4vRE9NdG9kby5qcyc7XG5pbXBvcnQgeyBzZWVBbGwgfSBmcm9tICcuL0RPTXRvZG8uanMnO1xuaW1wb3J0IHsgdG9nZ2xlU2VlQWxsQnRuIH0gZnJvbSAnLi9ET010b2RvLmpzJztcbmltcG9ydCB7IHRvZ2dsZURhcmsgfSBmcm9tICcuL0RPTXRvZG8uanMnO1xuaW1wb3J0IHN0b3JhZ2VUZXN0LCB7IHJlbW92ZVByb2plY3QgfSBmcm9tICcuL3N0b3JhZ2UuanMnO1xuaW1wb3J0IHsgc3RvcmVQcm9qZWN0IH0gZnJvbSAnLi9zdG9yYWdlLmpzJztcbmltcG9ydCB7IHJldHJpZXZlUHJvamVjdCB9IGZyb20gJy4vc3RvcmFnZS5qcyc7XG5pbXBvcnQgeyByZXRyaWV2ZVByb2plY3RzIH0gZnJvbSAnLi9zdG9yYWdlLmpzJztcbmltcG9ydCB7IHN0b3JlQWxsSXRlbXMgfSBmcm9tICcuL3N0b3JhZ2UuanMnO1xuaW1wb3J0IHsgcmVtb3ZlRnJvbUFsbEl0ZW1zIH0gZnJvbSAnLi9zdG9yYWdlLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9naWN0b2RvKCkge1xuXG4gICAgbGV0IGlkY291bnRlciA9IDA7XG4gICAgbGV0IGFsbEl0ZW1zID0gW107XG4gICAgbGV0IGN1cnJlbnRQcm9qSW5kZXggPSBudWxsO1xuICAgIGxldCBjdXJyZW50UHJvak5hbWUgPSBudWxsO1xuICAgIGxldCBsYXN0UHJvakluZGV4ID0gbnVsbDtcbiAgICBsZXQgbGFzdFByb2pOYW1lID0gbnVsbDtcblxuICAgIGNsYXNzIEl0ZW0ge1xuICAgICAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcywgcHJvamVjdCkge1xuICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgICAgICAgICAgIHRoaXMuSUQgPSBcInByb2pcIiArIGN1cnJlbnRQcm9qSW5kZXggKyBcIi5cIiArIGlkY291bnRlcisrO1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDsgXG5cbiAgICAgICAgICAgIHRoaXMuZ2l2ZVRpdGxlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHt0aXRsZX1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50aXRsZVNldE5ldyA9IGZ1bmN0aW9uKG5ld1RpdGxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aXRsZSA9IG5ld1RpdGxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5naXZlRGVldHMgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke2Rlc2NyaXB0aW9ufWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uU2V0TmV3ID0gZnVuY3Rpb24obmV3RGVldHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gbmV3RGVldHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmdpdmVEdWVEYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHtkdWVEYXRlfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmR1ZURhdGVTZXROZXcgPSBmdW5jdGlvbihuZXdEdWVEYXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kdWVEYXRlID0gbmV3RHVlRGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZ2l2ZVByaW9yaXR5ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHtwcmlvcml0eX1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcmlvcml0eVNldE5ldyA9IGZ1bmN0aW9uKG5ld1ByaSkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJpb3JpdHkgPSBuZXdQcmk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmdpdmVOb3RleiA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7bm90ZXN9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubm90ZXNTZXROZXcgPSBmdW5jdGlvbihuZXdOb3Rlcykge1xuICAgICAgICAgICAgICAgIHRoaXMubm90ZXMgPSBuZXdOb3RlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZ2l2ZUlEID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHtJRH1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5nZXRQcm9qTmFtZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7cHJvamVjdH1gO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGFkZEl0ZW1Ub0FsbCh4KSB7XG4gICAgICAgIGFsbEl0ZW1zLnB1c2goeCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkSXRlbVRvQ3VycmVudCh4KSB7XG4gICAgICAgIGFsbFByb2plY3RzW2N1cnJlbnRQcm9qSW5kZXhdW1widGFza0xpc3RcIl0ucHVzaCh4KTtcbiAgICAgICAgLyogW2krK10gKi9cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVJdGVtRnJvbUN1cnJlbnQoeCwgeSkge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGBDdXJyZW50IHByb2ogaW5kZXggaXMgJHt4fSwgZmluYWwgSUQgaXMgJHt5fWApO1xuXG4gICAgICAgIHZhciB0YXNrRnJvbUJ0bkluZGV4ID0gYWxsUHJvamVjdHNbYCR7eH1gXVtcInRhc2tMaXN0XCJdLmZpbmRJbmRleCgob2JqKSA9PiBvYmouSUQgPT0geSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tGcm9tQnRuSW5kZXgpO1xuXG4gICAgICAgIGFsbFByb2plY3RzW2Ake3h9YF1bXCJ0YXNrTGlzdFwiXS5zcGxpY2UodGFza0Zyb21CdG5JbmRleCwgMSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlSXRlbUZyb21BbGwoaCkge1xuICAgICAgICB2YXIgaEluZGV4ID0gYWxsSXRlbXMuZmluZEluZGV4KChvYmopID0+IG9iai5JRCA9PT0gaCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiKHVzZWQgZm9yIGFsbEl0ZW1zIGFycmF5KSBoSW5kZXggaXMgXCIgKyBoSW5kZXgpO1xuICAgICAgICBhbGxJdGVtcy5zcGxpY2UoaEluZGV4LCAxKTtcbiAgICB9XG5cbiAgICAvL2dldHMgcHJvaiBpbmRleCAmIG5hbWUgd2hlbiB0cnlpbmcgdG8gZGVsZXRlIHRhc2sgZnJvbSBhbGxJdGVtcyBwYWdlXG4gICAgZnVuY3Rpb24gZ2V0UHJvakluZm9Gb3JBbGxQcm9qKGopIHtcbiAgICAgICAgdmFyIGpJbmRleCA9IGFsbEl0ZW1zLmZpbmRJbmRleCgob2JqKSA9PiBvYmouSUQgPT09IGopO1xuICAgICAgICBjdXJyZW50UHJvak5hbWUgPSBhbGxJdGVtc1tqSW5kZXhdLmdldFByb2pOYW1lKCk7XG4gICAgICAgIGN1cnJlbnRQcm9qSW5kZXggPSBhbGxQcm9qZWN0cy5maW5kSW5kZXgoKG9iaikgPT4gb2JqLnByb2pOYW1lID09PSBgJHtjdXJyZW50UHJvak5hbWV9YCk7XG4gICAgfVxuXG4gICAgY29uc3Qgb3BlbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZG5ld1wiKTtcbiAgICBvcGVuRm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb0Zvcm1Db250YWluZXJcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrZ3JvdW5kQ292ZXJTdHVmZlwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH0pXG5cbiAgICBjb25zdCBjbG9zZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbmNlbF9idXR0b25cIik7XG4gICAgY2xvc2VGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvRm9ybUNvbnRhaW5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dyb3VuZENvdmVyU3R1ZmZcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0pXG5cbiAgICBjb25zdCBvcGVuUHJvaiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3cHJval9idXR0b25cIik7XG4gICAgb3BlblByb2ouYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrIHdvcmtlZFwiKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qRm9ybUNvbnRhaW5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmRDb3ZlclN0dWZmXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfSlcblxuICAgIGNvbnN0IGNsb3NlUHJvaiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3cHJval9jYW5jZWxcIik7XG4gICAgY2xvc2VQcm9qLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qRm9ybUNvbnRhaW5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dyb3VuZENvdmVyU3R1ZmZcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0pXG5cbiAgICBjb25zdCBhZGROZXdCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdF9idXR0b25cIik7XG4gICAgYWRkTmV3QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgdmFyIG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRuZXdmb3JtXCIpO1xuICAgICAgICB2YXIgZm9ybVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKTtcbiAgICAgICAgdmFyIGZvcm1EZXNjcmlwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKTtcblxuICAgICAgICB2YXIgdGFyZ2V0RGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlRGF0ZVwiKS52YWx1ZTtcbiAgICAgICAgXG4gICAgICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB2YXIgbW9udGggPSBub3cuZ2V0VVRDTW9udGgoKSArIDE7IC8vbW9udGhzIGZyb20gMS0xMlxuICAgICAgICB2YXIgcGFkZGVkTW9udGggPSBtb250aC50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIHZhciBkYXkgPSBub3cuZ2V0VVRDRGF0ZSgpO1xuICAgICAgICB2YXIgcGFkZGVkRGF5ID0gZGF5LnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgdmFyIHllYXIgPSBub3cuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICAgICAgbm93ID0gIHllYXIgKyBcIi1cIiArIHBhZGRlZE1vbnRoICsgXCItXCIgKyBwYWRkZWREYXk7XG5cbiAgICAgICAgaWYgKG5ld1Rhc2tGb3JtLmNoZWNrVmFsaWRpdHkoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZvcm1UaXRsZS5jaGVja1ZhbGlkaXR5KCkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZm9ybURlc2NyaXAuY2hlY2tWYWxpZGl0eSgpKTtcbiAgICAgICAgICAgIGZvcm1UaXRsZS5jbGFzc0xpc3QuYWRkKFwibmVlZHNGaWxsaW5nXCIpO1xuICAgICAgICAgICAgZm9ybURlc2NyaXAuY2xhc3NMaXN0LmFkZChcIm5lZWRzRmlsbGluZ1wiKTtcbiAgICAgICAgICAgIGlmIChmb3JtVGl0bGUuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgICAgICAgICAgZm9ybVRpdGxlLmNsYXNzTGlzdC5yZW1vdmUoXCJuZWVkc0ZpbGxpbmdcIik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZvcm1EZXNjcmlwLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICAgICAgICAgIGZvcm1EZXNjcmlwLmNsYXNzTGlzdC5yZW1vdmUoXCJuZWVkc0ZpbGxpbmdcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldERhdGUgIT09IFwiXCIgJiYgdGFyZ2V0RGF0ZSA8IG5vdykge1xuICAgICAgICAgICAgLy8gaWYgYSBkYXRlIGlzIHNlbGVjdGVkLCB3YW50IHRvIG1ha2Ugc3VyZSBkYXRlIGlzIE5PVCBpbiB0aGUgcGFzdFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGFyZ2V0RGF0ZSBcIiArIHRhcmdldERhdGUpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm93IFwiICsgbm93KTsgXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2Ugc2VsZWN0IGEgZGF0ZSB0aGF0IGhhcyBub3QgYWxyZWFkeSBwYXNzZWQuXCIpO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRQcm9qTmFtZSA9PT0gXCJfaElkRGVOXCIpIHtcblxuICAgICAgICAgICAgdmFyIGEgPSBhZGRuZXdmb3JtLnRpdGxlLnZhbHVlO1xuICAgICAgICAgICAgdmFyIGIgPSBhZGRuZXdmb3JtLmRlc2NyaXB0aW9uLnZhbHVlO1xuICAgICAgICAgICAgdmFyIGMgPSBhZGRuZXdmb3JtLmR1ZURhdGUudmFsdWU7XG4gICAgICAgICAgICB2YXIgZCA9IGFkZG5ld2Zvcm0ucHJpb3JpdHkudmFsdWU7XG4gICAgICAgICAgICB2YXIgZSA9IGFkZG5ld2Zvcm0ubm90ZXMudmFsdWU7XG4gICAgICAgICAgICB2YXIgZiA9IGN1cnJlbnRQcm9qTmFtZTtcbiAgICAgICAgICAgIHZhciB4ID0gbmV3IEl0ZW0oYSwgYiwgYywgZCwgZSwgZik7XG4gICAgXG4gICAgICAgICAgICBhZGRJdGVtVG9BbGwoeCk7XG4gICAgICAgICAgICBhZGRJdGVtVG9DdXJyZW50KHgpO1xuICAgICAgICAgICAgc2VlQWxsKGFsbEl0ZW1zKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmVsb3cgaXMgYWxsUHJvalwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUudGFibGUoYWxsUHJvamVjdHMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJiZWxvdyBpcyBhbGxJdGVtc1wiKTtcbiAgICAgICAgICAgIGNvbnNvbGUudGFibGUoYWxsSXRlbXMpO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9Gb3JtQ29udGFpbmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dyb3VuZENvdmVyU3R1ZmZcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgZm9ybVRpdGxlLmNsYXNzTGlzdC5yZW1vdmUoXCJuZWVkc0ZpbGxpbmdcIik7XG4gICAgICAgICAgICBmb3JtRGVzY3JpcC5jbGFzc0xpc3QucmVtb3ZlKFwibmVlZHNGaWxsaW5nXCIpO1xuXG4gICAgICAgICAgICBzdG9yZUFsbEl0ZW1zKGFsbEl0ZW1zKTtcblxuICAgICAgICAgICAgc3RvcmVQcm9qZWN0KGFsbFByb2plY3RzWzBdKTtcbiAgICAgICAgICAgIC8vYWxsSXRlbXMgdGFza3MgYXJlIHN0b3JlZCB3aXRoIGJlZ2lubmluZyBvZiBcImFMbEl0RW1TX1wiXG4gICAgICAgICAgICAvL2FsbEl0ZW1zIGRvZXMgTk9UIGhhdmUgYSB0YXNrTGlzdFxuICAgICAgICAgICAgLy9ub3QgdGhlIHNhbWUgYXMgaGlkZGVuLCB3aGljaCBpcyB1c2VkIGZvciB3aGVuIGFkZGluZyB0YXNrcyBvbiBhbGxJdGVtcyBwYWdlXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGFyZ2V0RGF0ZSBcIiArIHRhcmdldERhdGUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJub3cgXCIgKyBub3cpO1xuXG4gICAgICAgICAgICB2YXIgYSA9IGFkZG5ld2Zvcm0udGl0bGUudmFsdWU7XG4gICAgICAgICAgICB2YXIgYiA9IGFkZG5ld2Zvcm0uZGVzY3JpcHRpb24udmFsdWU7XG4gICAgICAgICAgICB2YXIgYyA9IGFkZG5ld2Zvcm0uZHVlRGF0ZS52YWx1ZTtcbiAgICAgICAgICAgIHZhciBkID0gYWRkbmV3Zm9ybS5wcmlvcml0eS52YWx1ZTtcbiAgICAgICAgICAgIHZhciBlID0gYWRkbmV3Zm9ybS5ub3Rlcy52YWx1ZTtcbiAgICAgICAgICAgIHZhciBmID0gY3VycmVudFByb2pOYW1lO1xuICAgICAgICAgICAgdmFyIHggPSBuZXcgSXRlbShhLCBiLCBjLCBkLCBlLCBmKTtcbiAgICBcbiAgICAgICAgICAgIHZhciBBUCA9IGFsbFByb2plY3RzO1xuICAgICAgICAgICAgdmFyIHkgPSBjdXJyZW50UHJvakluZGV4O1xuICAgICAgICAgICAgdmFyIHogPSBgJHtjdXJyZW50UHJvak5hbWV9Ym94YDtcbiAgICAgICAgICAgIGFkZEl0ZW1Ub0FsbCh4KTtcbiAgICAgICAgICAgIGFkZEl0ZW1Ub0N1cnJlbnQoeCk7XG4gICAgICAgICAgICByZWZyZXNoQ2VudGVyRE9NKEFQLCB5LCB6KTtcbiAgICAgICAgICAgIC8vY29uc29sZS50YWJsZShhbGxQcm9qZWN0cyk7XG4gICAgICAgICAgICBjb25zb2xlLnRhYmxlKGFsbEl0ZW1zKTtcbiAgICAgICAgICAgIGNvbnNvbGUudGFibGUoYWxsUHJvamVjdHMpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvRm9ybUNvbnRhaW5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmRDb3ZlclN0dWZmXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGZvcm1UaXRsZS5jbGFzc0xpc3QucmVtb3ZlKFwibmVlZHNGaWxsaW5nXCIpO1xuICAgICAgICAgICAgZm9ybURlc2NyaXAuY2xhc3NMaXN0LnJlbW92ZShcIm5lZWRzRmlsbGluZ1wiKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coQVBbeV0pO1xuICAgICAgICAgICAgc3RvcmVBbGxJdGVtcyhhbGxJdGVtcyk7XG4gICAgICAgICAgICAvL2FsbEl0ZW1zIHRhc2tzIGFyZSBzdG9yZWQgd2l0aCBiZWdpbm5pbmcgb2YgXCJhTGxJdEVtU19cIlxuICAgICAgICAgICAgLy9hbGxJdGVtcyBkb2VzIE5PVCBoYXZlIGEgdGFza0xpc3RcbiAgICAgICAgICAgIC8vbm90IHRoZSBzYW1lIGFzIGhpZGRlbiwgd2hpY2ggaXMgdXNlZCBmb3Igd2hlbiBhZGRpbmcgdGFza3Mgb24gYWxsSXRlbXMgcGFnZVxuICAgICAgICAgICAgc3RvcmVQcm9qZWN0KEFQW3ldKTsgLy9cInJlZnJlc2hlc1wiIHByb2ogaW4gbG9jYWxTdG9yYWdlIHRvIGluY2x1ZGUgbmV3IGFkZGVkIHRhc2tcbiAgICAgICAgICAgIHN0b3JlUHJvamVjdChhbGxQcm9qZWN0c1swXSk7XG4gICAgICAgIH1cbiAgICB9KSBcblxuICAgIC8vcHJvamVjdCB0YWIgY29kZVxuXG4gICAgbGV0IHByb2ppZCA9IDA7XG4gICAgbGV0IGFsbFByb2plY3RzID0gW107XG5cbiAgICBjbGFzcyBQcm9qZWN0IHtcbiAgICAgICAgY29uc3RydWN0b3IocHJvak5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvak5hbWUgPSBwcm9qTmFtZTtcbiAgICAgICAgICAgIHRoaXMuSUQgPSBwcm9qaWQrKztcbiAgICAgICAgICAgIHRoaXMudGFza0xpc3QgPSBbXTtcblxuICAgICAgICAgICAgY29uc3QgZGlzcGxheVByb2ogPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke3Byb2pOYW1lfWA7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5naXZlUHJvak5hbWUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRpc3BsYXlQcm9qKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5zZXROZXdQcm9qTmFtZSA9IGZ1bmN0aW9uKG5ld05hbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2pOYW1lID0gbmV3TmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFByb2pUb0FsbCh4KSB7XG4gICAgICAgIGFsbFByb2plY3RzLnB1c2goeCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmluZEFsbElkc1JlbW92ZShiKSB7XG4gICAgICAgIGNvbnN0IHJlbW92ZWRJRHMgPSBbXTtcbiAgICAgICAgYWxsUHJvamVjdHNbYl1bXCJ0YXNrTGlzdFwiXS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgICAgcmVtb3ZlZElEcy5wdXNoKGVsLklEKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhlc2UgYXJlIHRoZSByZW1vdmVkIElEcyBcIiwgcmVtb3ZlZElEcyk7Ly9pdCdzIGFuIG9iamVjdFxuICAgICAgICByZXR1cm4gcmVtb3ZlZElEcztcbiAgICB9XG5cbiAgICAvL2ZvciBlYWNoIGl0ZW0gd2l0aGluIHRoZSB0byBiZSByZW1vdmVkIElEJ3MgYXJyYXksIHJ1biBpdCBhZ2FpbnN0IGFsbEl0ZW1zLklEIGZvciBtYXRjaFxuICAgIC8vaWYgaXQgbWF0Y2hlcywgZmluZCB0aGF0IGl0ZW0ncyBjdXJyZW50IGluZGV4ICYgcmVtb3ZlIHdpdGggc3BsaWNlKHgsIDEpO1xuICAgIGZ1bmN0aW9uIGlkVG9JbmRleFJlbW92ZShmKSB7XG4gICAgICAgIHdoaWxlIChmLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDAsIG0gPSBhbGxJdGVtcy5sZW5ndGg7IGogPCBtOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoZlswXSA9PT0gYWxsSXRlbXNbal0uSUQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzIGl0ZXJhdGlvbiBhbGxJdGVtcyBsZW5ndGggd2FzIFwiICsgbSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWxsSXRlbXMgdGFzayB3YXMgcmVtb3ZlZCB3aXRoIElEIG9mIFwiICsgYWxsSXRlbXNbal0uSUQpO1xuICAgICAgICAgICAgICAgICAgICBhbGxJdGVtcy5zcGxpY2UoaiwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGYuc3BsaWNlKDAsIDEpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzaWRlYmFyUHJvalN3aXRjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlYmFyTmFtZXNPbmx5Jyk7XG4gICAgc2lkZWJhclByb2pTd2l0Y2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcInNpZGViYXJfTmFtZXNcIikge1xuICAgICAgICAgICAgY3VycmVudFByb2pOYW1lID0gZS50YXJnZXQuaWQuc2xpY2UoMCwgLTgpO1xuICAgICAgICAgICAgY3VycmVudFByb2pJbmRleCA9IGFsbFByb2plY3RzLmZpbmRJbmRleCgob2JqKSA9PiBvYmoucHJvak5hbWUgPT0gY3VycmVudFByb2pOYW1lKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY3VycmVudHByb2ogbmFtZSBpcyBcIiArIGN1cnJlbnRQcm9qTmFtZSArIFwiIGFuZCBjdXJyZW50IHByb2ogaW5kZXggaXMgXCIgKyBjdXJyZW50UHJvakluZGV4KTtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlZUFsbFRvZ2dsZVwiKS5pbm5lckhUTUwgPT09IFwiSGlkZSBBbGwgVG8tRG8nc1wiKSB7XG4gICAgICAgICAgICAgICAgdmFyIEFQID0gYWxsUHJvamVjdHM7XG4gICAgICAgICAgICAgICAgdmFyIHkgPSBjdXJyZW50UHJvakluZGV4O1xuICAgICAgICAgICAgICAgIHZhciB6ID0gYCR7Y3VycmVudFByb2pOYW1lfWJveGA7XG5cbiAgICAgICAgICAgICAgICByZWZyZXNoQ2VudGVyRE9NKEFQLCB5LCB6KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaWRlYmFyVG9nZ2xlKGN1cnJlbnRQcm9qTmFtZSk7XG4gICAgICAgIH0gLy9jbGlja2luZyBvbiBzaWRlYmFyX25hbWUgdHJhc2hjYW5cbiAgICAgICAgZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcInNpZGViYXJfTmFtZV9yZW1vdmVcIiB8fCBlLnRhcmdldC5jbGFzc05hbWUgPT09IFwiZmEtcmVndWxhciBmYS10cmFzaC1jYW5cIikge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5jb25maXJtKFwiVGhpcyB3aWxsIGNvbXBsZXRlbHkgZXJhc2UgdGhpcyBsaXN0IVxcbkFyZSB5b3Ugc3VyZT9cIikgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHZhciB0b1JlbW92ZVByb2pOYW1lID0gZS50YXJnZXQuY2xvc2VzdChcImRpdiBkaXZcIikuaWQuc2xpY2UoMCwgLTEwKTtcbiAgICAgICAgICAgICAgICB2YXIgdG9SZW1vdmVQcm9qSW5kZXggPSBhbGxQcm9qZWN0cy5maW5kSW5kZXgoKG9iaikgPT4gb2JqLnByb2pOYW1lID09IHRvUmVtb3ZlUHJvak5hbWUpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidG8gYmUgcmVtb3ZlZCBwcm9qIGluZGV4IGlzIFwiLCB0b1JlbW92ZVByb2pJbmRleCk7XG4gICAgICAgICAgICAgICAgbGV0IGFsbFJlbW92ZWRJZHMgPSBmaW5kQWxsSWRzUmVtb3ZlKHRvUmVtb3ZlUHJvakluZGV4KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFsbCB0aGVzZSBzaG91bGQgYmUgcmVtb3ZlZCAoYWxsUmVtb3ZlZElkcyk6IFwiICsgYWxsUmVtb3ZlZElkcyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy9sb2NhbFN0b3JhZ2UgcmVtb3ZhbFxuICAgICAgICAgICAgICAgIC8vYWxsUmVtb3ZlZElkcyBpcyBhbiBhcnJheTsgaXRlcmF0ZSB0aHJvdWdoIHRoYXQgdG8gcmVtb3ZlIGZyb20gYWxsSXRlbXNcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxlbmd0aCBvZiBvYmplY3Q6IFwiICsgYWxsUmVtb3ZlZElkcy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHlwZTogXCIgKyB0eXBlb2YgYWxsUmVtb3ZlZElkcyk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlRnJvbUFsbEl0ZW1zKGFsbFJlbW92ZWRJZHMpO1xuICAgICAgICAgICAgICAgIHJlbW92ZVByb2plY3QodG9SZW1vdmVQcm9qTmFtZSk7XG5cbiAgICAgICAgICAgICAgICAvL3JlbW92ZXMgc3R1ZmYgZnJvbSBhbGxJdGVtc1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hlY2tpbmcgdGhpcyBsaXN0IGFmdGVyIHVzaW5nIGl0IGZvciBsb2NhbFN0b3JhZ2U6IFwiLCBhbGxSZW1vdmVkSWRzKTtcbiAgICAgICAgICAgICAgICBpZFRvSW5kZXhSZW1vdmUoYWxsUmVtb3ZlZElkcyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYWxsUHJvamVjdHMubGVuZ3RoID09IDIpIHtcblxuICAgICAgICAgICAgICAgICAgICB0b1JlbW92ZVByb2pJbmRleCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qSW5kZXggPSAwOyAvL3NldHMgdG8gaGlkZGVuIHByb2pcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFByb2pOYW1lID0gXCJfaElkRGVOXCI7XG5cblxuICAgICAgICAgICAgICAgICAgICB2YXIgZWxUb0JlUmVtb3ZlZCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIuZWFjaFNpZGViYXJDb250YWluZXJcIik7XG4gICAgICAgICAgICAgICAgICAgIGVsVG9CZVJlbW92ZWQucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIGFsbFByb2plY3RzLnNwbGljZSh0b1JlbW92ZVByb2pJbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUudGFibGUoYWxsUHJvamVjdHMpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDdXJyZW50IHByb2ogaW5kZXggaXMgJHtjdXJyZW50UHJvakluZGV4fSBhbmQgbmFtZSBpcyAke2N1cnJlbnRQcm9qTmFtZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgYWxsRW1wdHkoKTtcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlU2VlQWxsQnRuKCk7XG4gICAgICAgICAgICAgICAgICAgIHNlZUFsbChhbGxJdGVtcyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0b1JlbW92ZVByb2pJbmRleCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qSW5kZXggPSAxO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy9ET01cbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsVG9CZVJlbW92ZWQgPSBlLnRhcmdldC5jbG9zZXN0KFwiLmVhY2hTaWRlYmFyQ29udGFpbmVyXCIpO1xuICAgICAgICAgICAgICAgICAgICBlbFRvQmVSZW1vdmVkLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGFsbFByb2plY3RzLnNwbGljZSh0b1JlbW92ZVByb2pJbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUudGFibGUoYWxsUHJvamVjdHMpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UHJvak5hbWUgPSBhbGxQcm9qZWN0c1tjdXJyZW50UHJvakluZGV4XS5wcm9qTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgc2lkZWJhclRvZ2dsZShjdXJyZW50UHJvak5hbWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDdXJyZW50IHByb2ogaW5kZXggaXMgJHtjdXJyZW50UHJvakluZGV4fSBhbmQgbmFtZSBpcyAke2N1cnJlbnRQcm9qTmFtZX1gKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmVsb3cgaXMgYWxsUHJvalwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS50YWJsZShhbGxQcm9qZWN0cyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmVsb3cgaXMgYWxsSXRlbXNcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUudGFibGUoYWxsSXRlbXMpO1xuXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qSW5kZXggPSB0b1JlbW92ZVByb2pJbmRleCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qTmFtZSA9IGFsbFByb2plY3RzW2N1cnJlbnRQcm9qSW5kZXhdLnByb2pOYW1lO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDdXJyZW50IHByb2ogaW5kZXggaXMgJHtjdXJyZW50UHJvakluZGV4fSBhbmQgbmFtZSBpcyAke2N1cnJlbnRQcm9qTmFtZX1gKTtcblxuICAgICAgICAgICAgICAgICAgICAvL0RPTVxuICAgICAgICAgICAgICAgICAgICB2YXIgZWxUb0JlUmVtb3ZlZCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIuZWFjaFNpZGViYXJDb250YWluZXJcIik7XG4gICAgICAgICAgICAgICAgICAgIGVsVG9CZVJlbW92ZWQucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgYWxsUHJvamVjdHMuc3BsaWNlKHRvUmVtb3ZlUHJvakluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGlzIGlzIGFmdGVyIHRoZSByZW1vdmFsc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS50YWJsZShhbGxQcm9qZWN0cyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUudGFibGUoYWxsSXRlbXMpO1xuICAgICAgICAgICAgICAgICAgICBzaWRlYmFyVG9nZ2xlKGN1cnJlbnRQcm9qTmFtZSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwic2lkZWJhcl9OYW1lX2VkaXRcIiB8fCBlLnRhcmdldC5jbGFzc05hbWUgPT09IFwiZmEtcmVndWxhciBmYS1wZW4tdG8tc3F1YXJlXCIpIHtcbiAgICAgICAgICAgIHZhciB0b0VkaXRQcm9qTmFtZSA9IGUudGFyZ2V0LmNsb3Nlc3QoXCJkaXYgZGl2XCIpLmlkLnNsaWNlKDAsIC04KTtcbiAgICAgICAgICAgIHZhciB0b0VkaXRQcm9qSW5kZXggPSBhbGxQcm9qZWN0cy5maW5kSW5kZXgoKG9iaikgPT4gb2JqLnByb2pOYW1lID09IHRvRWRpdFByb2pOYW1lKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicHJvaiBuYW1lICYgaW5kZXgsIHJlc3BlY3RpdmVseSBcIiArIHRvRWRpdFByb2pOYW1lICsgXCIgXCIgKyB0b0VkaXRQcm9qSW5kZXgpO1xuICAgICAgICAgICAgbGV0IG5ld05hbWUgPSBwcm9tcHQoXCJXaGF0IGRvIHlvdSB3YW50IHRoZSBuZXcgbmFtZSB0byBiZT9cIiwgXCJcIik7XG4gICAgICAgICAgICBpZiAobmV3TmFtZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3TmFtZSAhPT0gbnVsbCAmJiBhbGxQcm9qZWN0cy5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgICAgIGFsbFByb2plY3RzW3RvRWRpdFByb2pJbmRleF0uc2V0TmV3UHJvak5hbWUobmV3TmFtZSk7XG4gICAgICAgICAgICAgICAgc2V0TmV3U2lkZU5hbWVzKHRvRWRpdFByb2pOYW1lLCBuZXdOYW1lKTsvL0RPTSBhbmQgaWQgY2hhbmdlcyBcbiAgICAgICAgICAgICAgICBjdXJyZW50UHJvak5hbWUgPSBuZXdOYW1lO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qTmFtZSArIFwiIFwiICsgY3VycmVudFByb2pJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuaWQgPT09IFwic2VlQWxsVG9nZ2xlXCIpIHtcbiAgICAgICAgICAgIHRvZ2dsZVNlZUFsbEJ0bigpO1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VlQWxsVG9nZ2xlXCIpLmlubmVySFRNTCA9PSBcIkhpZGUgQWxsIFRvLURvJ3NcIikge1xuICAgICAgICAgICAgICAgIHNlZUFsbChhbGxJdGVtcyk7XG4gICAgICAgICAgICAgICAgbGFzdFByb2pOYW1lID0gY3VycmVudFByb2pOYW1lO1xuICAgICAgICAgICAgICAgIGxhc3RQcm9qSW5kZXggPSBjdXJyZW50UHJvakluZGV4O1xuICAgICAgICAgICAgICAgIC8vaG9sZHMgaW5mbyBvZiBsYXN0IHZpZXdlZCBmb3IgaWYgdXNlciBkZWNpZGVzIHRvIGhpZGUgYWxsIGl0ZW1zXG4gICAgICAgICAgICAgICAgY3VycmVudFByb2pOYW1lID0gXCJfaElkRGVOXCI7XG4gICAgICAgICAgICAgICAgY3VycmVudFByb2pJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJuYW1lIGFuZCBpbmRleDogXCIgKyBjdXJyZW50UHJvak5hbWUgKyBcIiBcIiArIGN1cnJlbnRQcm9qSW5kZXgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UHJvak5hbWUgPSBsYXN0UHJvak5hbWU7XG4gICAgICAgICAgICAgICAgY3VycmVudFByb2pJbmRleCA9IGxhc3RQcm9qSW5kZXg7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJORVcgbmFtZSBhbmQgaW5kZXg6IFwiICsgY3VycmVudFByb2pOYW1lICsgXCIgXCIgKyBjdXJyZW50UHJvakluZGV4KTtcbiAgICAgICAgICAgICAgICB2YXIgQVAgPSBhbGxQcm9qZWN0cztcbiAgICAgICAgICAgICAgICB2YXIgeSA9IGN1cnJlbnRQcm9qSW5kZXg7XG4gICAgICAgICAgICAgICAgdmFyIHogPSBgJHtjdXJyZW50UHJvak5hbWV9Ym94YDtcblxuICAgICAgICAgICAgICAgIHJlZnJlc2hDZW50ZXJET00oYWxsUHJvamVjdHMsIHksIHopO1xuICAgICAgICAgICAgICAgIHNpZGViYXJUb2dnbGUoY3VycmVudFByb2pOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlLnRhcmdldC5pZCA9PT0gXCJzaWRlYmFyTmFtZXNPbmx5XCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib25seSB0aGUgc2lkZWJhciBlbXB0eSBzcGFjZSFcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gIFxuICAgIH0pXG5cbiAgICBjb25zdCBhbGxJdGVtQm94TGlzdGVuZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FsbFRhc2tzQm94Jyk7XG4gICAgYWxsSXRlbUJveExpc3RlbmVycy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cbiAgICAgICAgdmFyIGJ0blBhcmVudFByb2pOYW1lID0gZS50YXJnZXQuY2xvc2VzdChcImRpdi5hZGRlZF90YXNrc1wiKS5pZC5zcGxpdCgnXycpWzBdOyBcbiAgICAgICAgY3VycmVudFByb2pOYW1lID0gYnRuUGFyZW50UHJvak5hbWU7XG4gICAgICAgIHZhciBidG5QYXJlbnRJbmRleCA9IGFsbFByb2plY3RzLmZpbmRJbmRleCgob2JqKSA9PiBvYmoucHJvak5hbWUgPT0gYnRuUGFyZW50UHJvak5hbWUpO1xuICAgICAgICBjdXJyZW50UHJvakluZGV4ID0gYnRuUGFyZW50SW5kZXg7XG4gICAgICAgIHZhciBlZGl0Rm9ybUNvbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRGb3JtQ29udGFpbmVyXCIpO1xuICAgICAgICB2YXIgZWRpdEZvcm1NYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNlZGl0Rm9ybSBbaWRePWVkaXRdXCIpO1xuICAgICAgICB2YXIgZWRpdEZvcm1BcnJheSA9IFsuLi5lZGl0Rm9ybU1haW5dXG5cbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoXCJkaXZcIikuY2xhc3NOYW1lICE9PSBcInRhc2tfYnV0dG9uX2hvbGRlclwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vdGhpbmcgc2hvdWxkIGJlIGhhcHBlbmluZyBoZXJlLi4uXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LnBhcmVudE5vZGUuY2xvc2VzdChcImRpdlwiKS5jbGFzc05hbWUgIT09IFwidGFza19idXR0b25faG9sZGVyXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm90aGluZyBoYXBwZW5pbmcgaGVyZSBFSVRIRVIuLi4uXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoXCJidXR0b25cIikuY2xhc3NOYW1lID09PSBcImV4cGFuZHNlbGZfYnV0dG9uXCIgJiYgZS50YXJnZXQuY2xvc2VzdChcImJ1dHRvblwiKS5pZC5zbGljZSgxMCwgMTcpID09PSBcIkFsbFBhZ2VcIikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuY2xvc2VzdChcImJ1dHRvblwiKS5pZCk7XG4gICAgICAgICAgICB2YXIgZXhwYW5kSUQgPSBlLnRhcmdldC5jbG9zZXN0KFwiYnV0dG9uXCIpLmlkLnNsaWNlKDE4KTtcbiAgICAgICAgICAgIHZhciB0b0V4cGFuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2V4cGFuZElEfV9leHBhbmRNZV9BbGxQYWdlYCk7XG4gICAgICAgICAgICB2YXIgZXhwYW5kSWRXaXRoQVAgPSBlLnRhcmdldC5jbG9zZXN0KFwiYnV0dG9uXCIpLmlkLnNsaWNlKDEwKTtcbiAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgdG9nZ2xlSG9sZGVyID0gZS50YXJnZXQuY2xvc2VzdChcImRpdi5hZGRlZF90YXNrc1wiKS5sYXN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgdmFyIGV4cGFuZFRvZ0NvdW50ZXIgPSB0b2dnbGVIb2xkZXIuaW5uZXJIVE1MO1xuXG4gICAgICAgICAgICBpZiAoZXhwYW5kVG9nQ291bnRlciUyICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgdG9FeHBhbmQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXhwYW5kVG9nQ291bnRlciUyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdG9FeHBhbmQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJiZWZvcmUgZnhuIFwiICsgZXhwYW5kVG9nQ291bnRlcik7XG4gICAgICAgICAgICB0b2dnbGVFeHBhbmQoZXhwYW5kSWRXaXRoQVAsIGV4cGFuZFRvZ0NvdW50ZXIpO1xuICAgICAgICAgICAgZXhwYW5kVG9nQ291bnRlcisrO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZnRlciBmeG4gXCIgKyBleHBhbmRUb2dDb3VudGVyKTtcbiAgICAgICAgICAgIHRvZ2dsZUhvbGRlci5pbm5lckhUTUwgPSBleHBhbmRUb2dDb3VudGVyO1xuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoXCJidXR0b25cIikuY2xhc3NOYW1lID09PSBcInJlbW92ZXNlbGZfYnV0dG9uXCIgJiYgZS50YXJnZXQuY2xvc2VzdChcImJ1dHRvblwiKS5pZC5zbGljZSg0LCAxMSkgPT09IFwiQWxsUGFnZVwiKSB7XG4gICAgICAgICAgICAvL2ZpbmRzIHVuaXF1ZSBJRCBvZiB0YXNrIHdpdGhpbiBhbGxJdGVtc1xuICAgICAgICAgICAgdmFyIHRhc2tJZEluQWxsID0gZS50YXJnZXQuY2xvc2VzdChcImJ1dHRvblwiKS5pZC5zbGljZSgxMik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRhc2tJZElOYWxsIGlzIFwiICsgdGFza0lkSW5BbGwpO1xuICAgICAgICAgICAgZ2V0UHJvakluZm9Gb3JBbGxQcm9qKHRhc2tJZEluQWxsKTsgLy9zZXRzIGN1cnJlbnRQcm9qIE5hbWUgJiBJbmRleCB0byBzcGVjaWZpYyB0YXNrXG4gICAgICAgICAgICByZW1vdmVJdGVtRnJvbUFsbCh0YXNrSWRJbkFsbCk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibmV3IHByb2ogbmFtZSAmIGluZGV4XCIgKyBjdXJyZW50UHJvak5hbWUgKyBcIiBcIiArIGN1cnJlbnRQcm9qSW5kZXgpO1xuXG4gICAgICAgICAgICAvL3JlbW92ZXMgdGFzayBmcm9tIHJlc3BlY3RpdmUgcHJvamVjdCB3aXRoaW4gYWxsUHJvamVjdHNcbiAgICAgICAgICAgIHJlbW92ZUl0ZW1Gcm9tQ3VycmVudChjdXJyZW50UHJvakluZGV4LCB0YXNrSWRJbkFsbCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImJlbG93IGlzIGFsbFByb2plY3RzXCIpO1xuICAgICAgICAgICAgY29uc29sZS50YWJsZShhbGxQcm9qZWN0cyk7XG4gICAgICAgICAgICBzZWVBbGwoYWxsSXRlbXMpO1xuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoXCJidXR0b25cIikuY2xhc3NOYW1lID09PSBcImVkaXRUYXNrX2J1dHRvblwiICYmIGUudGFyZ2V0LmNsb3Nlc3QoXCJidXR0b25cIikuaWQuc2xpY2UoOCwgMTUpID09PSBcIkFsbFBhZ2VcIikge1xuXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmRDb3ZlclN0dWZmXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICB2YXIgZWRpdElEID0gZS50YXJnZXQuY2xvc2VzdChcImJ1dHRvblwiKS5pZC5zbGljZSgxNik7XG4gICAgICAgICAgICBzZXRDdXJyZW50SW50b0VkaXRvcihlZGl0SUQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYWxsUHJvamVjdHMpO1xuXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1cGRhdGVFZGl0QnV0dG9uXCIpO1xuICAgICAgICAgICAgdXBkYXRlVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0RWRpdEludG9DdXJyZW50QWxsKGVkaXRJRCk7XG4gICAgICAgICAgICAgICAgZWRpdEZvcm1Db250LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmRDb3ZlclN0dWZmXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zdCBjYW5jZWxVcGRhdGVUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW5jZWxFZGl0QnV0dG9uXCIpO1xuICAgICAgICAgICAgY2FuY2VsVXBkYXRlVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZWRpdEZvcm1Db250LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmRDb3ZlclN0dWZmXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gXG4gICAgICAgIC8qIEZpZ3VyZSBvdXQgaG93IHRvIGNvbmZpZ3VyZSB0aGlzIGZ4biBzbyB0aGF0IGVkaXQgZ29lcyBpbnRvIGFsbFByb2ogYW5kIGFsbEl0ZW0gbGlzdCEgKi9cbiAgICAgICAgZnVuY3Rpb24gc2V0RWRpdEludG9DdXJyZW50QWxsKHgpIHtcblxuICAgICAgICAgICAgdmFyIGVkaXRlZFRpdGxlID0gZWRpdEZvcm0uZWRpdFRpdGxlLnZhbHVlO1xuICAgICAgICAgICAgdmFyIGVkaXRlZERlc2NyaXB0aW9uID0gZWRpdEZvcm0uZWRpdERlc2NyaXB0aW9uLnZhbHVlO1xuICAgICAgICAgICAgdmFyIGVkaXRlZER1ZURhdGUgPSBlZGl0Rm9ybS5lZGl0RHVlRGF0ZS52YWx1ZTtcbiAgICAgICAgICAgIHZhciBlZGl0ZWRQcmlvcml0eSA9IGVkaXRGb3JtLmVkaXRQcmlvcml0eS52YWx1ZTtcbiAgICAgICAgICAgIHZhciBlZGl0ZWROb3RlcyA9IGVkaXRGb3JtLmVkaXROb3Rlcy52YWx1ZTtcbiAgICBcbiAgICAgICAgICAgIHZhciBjdXJyZW50VGFza0luZGV4QWxsID0gYWxsSXRlbXMuZmluZEluZGV4KChvYmopID0+IG9iai5JRCA9PT0gYCR7eH1gKTtcbiAgICAgICAgICAgIGFsbEl0ZW1zLmZpbmRJbmRleCgob2JqKSA9PiBvYmouSUQgPT09IGAke3h9YCk7XG4gICAgICAgICAgICB2YXIgaW5zZXJ0VGFyZyA9IGFsbEl0ZW1zW2Ake2N1cnJlbnRUYXNrSW5kZXhBbGx9YF1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaW5zZXJ0VGFyZy50aXRsZVNldE5ldyhlZGl0ZWRUaXRsZSk7XG4gICAgICAgICAgICBpbnNlcnRUYXJnLmRlc2NyaXB0aW9uU2V0TmV3KGVkaXRlZERlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgIGluc2VydFRhcmcuZHVlRGF0ZVNldE5ldyhlZGl0ZWREdWVEYXRlKTtcbiAgICAgICAgICAgIGluc2VydFRhcmcucHJpb3JpdHlTZXROZXcoZWRpdGVkUHJpb3JpdHkpO1xuICAgICAgICAgICAgaW5zZXJ0VGFyZy5ub3Rlc1NldE5ldyhlZGl0ZWROb3Rlcyk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmVsb3cgaXMgYWxsUHJvamVjdHNcIik7XG4gICAgICAgICAgICBjb25zb2xlLnRhYmxlKGFsbFByb2plY3RzKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmVsb3cgaXMgYWxsSXRlbXNcIik7XG4gICAgICAgICAgICBjb25zb2xlLnRhYmxlKGFsbEl0ZW1zKTtcblxuICAgICAgICAgICAgc2VlQWxsKGFsbEl0ZW1zKTsgICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHNldEN1cnJlbnRJbnRvRWRpdG9yKHNvbWVJRCkge1xuICAgICAgICAgICAgZWRpdEZvcm1Db250LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICB2YXIgY3VycmVudEluZm9BcnJheSA9IFtdO1xuICAgICAgICAgICAgLy9nbyB3aXRoaW4gYWxsSXRlbXMgJiBmaW5kIHNwZWNpZmljIGluZGV4XG4gICAgICAgICAgICB2YXIgY3VycmVudFRhc2tJbmRleEFsbCA9IGFsbEl0ZW1zLmZpbmRJbmRleCgob2JqKSA9PiBvYmouSUQgPT09IGAke3NvbWVJRH1gKTtcbiAgICAgICAgICAgIGFsbEl0ZW1zLmZpbmRJbmRleCgob2JqKSA9PiBvYmouSUQgPT09IGAke3NvbWVJRH1gKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRUYXNrSW5kZXhBbGwpO1xuICAgICAgICAgICAgLy90YWtlIGVhY2ggLi4uIGRlc2NyaXB0aW9uPyBwYXJ0IG9mIGNvbnN0cnVjdG9yIGFuZCBnZXQgdGhlIHZhbHVlcyBtYXRjaGVkIHRvIGVhY2ggcGFydFxuICAgICAgICAgICAgLy9wdXNoIHNhaWQgdmFsdWVzL21hdGNoZXMgaW50byBjdXJyZW50SW5mb0FycmF5XG4gICAgICAgICAgICB2YXIgdGVzdG9iaiA9IGFsbEl0ZW1zW2Ake2N1cnJlbnRUYXNrSW5kZXhBbGx9YF07XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0ZXN0b2JqKTtcbiAgICBcbiAgICAgICAgICAgIC8vZmluZHMga2V5IHZhbHVlIHBhaXJzIG9mIHRhc2tzJ3MgdGhpcy5pbmZvIHR5cGVcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHRlc3RvYmopKSB7XG4gICAgICAgICAgICAgICAgaWYgKFtcImRlc2NyaXB0aW9uXCIsIFwiZHVlRGF0ZVwiLCBcIm5vdGVzXCIsIFwicHJpb3JpdHlcIiwgXCJ0aXRsZVwiXS5pbmRleE9mKGtleSkgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgeCA9IFtrZXksIHZhbHVlXTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEluZm9BcnJheS5wdXNoKHgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRJbmZvQXJyYXkpO1xuXG4gICAgICAgICAgICBlZGl0Rm9ybUFycmF5LmZvckVhY2goaW5wdXQgPT4ge1xuICAgIFxuICAgICAgICAgICAgICAgIHZhciBpbnB1dFNsaWNlZCA9IGlucHV0Lm5hbWUuc2xpY2UoMCwgLTUpO1xuICAgIFxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwLCBtID0gY3VycmVudEluZm9BcnJheS5sZW5ndGg7IGogPCBtOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0U2xpY2VkID09PSBcImRlc2NyaXB0aW9uXCIgJiYgaW5wdXRTbGljZWQgPT09IGN1cnJlbnRJbmZvQXJyYXlbal1bMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdERlc2NyaXB0aW9uXCIpLmlubmVySFRNTCA9IGAke2N1cnJlbnRJbmZvQXJyYXlbal1bMV19YDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbnB1dFNsaWNlZCA9PT0gY3VycmVudEluZm9BcnJheVtqXVswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgYCR7Y3VycmVudEluZm9BcnJheVtqXVsxXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSlcblxuXG4gICAgY29uc3QgcHJvalN3aXRjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlYmFyJyk7XG4gICAgcHJvalN3aXRjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cbiAgICAgICAgdmFyIGJ0blBhcmVudFByb2pOYW1lID0gZS50YXJnZXQuY2xvc2VzdChcImgzXCIpLmlkLnNsaWNlKDAsIC0zKTsgXG4gICAgICAgIGN1cnJlbnRQcm9qTmFtZSA9IGJ0blBhcmVudFByb2pOYW1lO1xuICAgICAgICB2YXIgYnRuUGFyZW50SW5kZXggPSBhbGxQcm9qZWN0cy5maW5kSW5kZXgoKG9iaikgPT4gb2JqLnByb2pOYW1lID09IGJ0blBhcmVudFByb2pOYW1lKTtcbiAgICAgICAgY3VycmVudFByb2pJbmRleCA9IGJ0blBhcmVudEluZGV4O1xuICAgICAgICB2YXIgZWRpdEZvcm1Db250ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0Rm9ybUNvbnRhaW5lclwiKTtcbiAgICAgICAgdmFyIGVkaXRGb3JtTWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjZWRpdEZvcm0gW2lkXj1lZGl0XVwiKTtcbiAgICAgICAgdmFyIGVkaXRGb3JtQXJyYXkgPSBbLi4uZWRpdEZvcm1NYWluXVxuXG4gICAgICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KFwiZGl2XCIpLmNsYXNzTmFtZSAhPT0gXCJ0YXNrX2J1dHRvbl9ob2xkZXJcIikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJub3RoaW5nIHNob3VsZCBiZSBoYXBwZW5pbmcgaGVyZS4uLlwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5wYXJlbnROb2RlLmNsb3Nlc3QoXCJkaXZcIikuY2xhc3NOYW1lICE9PSBcInRhc2tfYnV0dG9uX2hvbGRlclwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5wYXJlbnROb2RlLmNsb3Nlc3QoXCJkaXZcIikpO1xuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoXCJidXR0b25cIikuY2xhc3NOYW1lID09PSBcInJlbW92ZXNlbGZfYnV0dG9uXCIpIHtcbiAgICAgICAgICAgIC8vZmluZHMgcGFyZW50IGJveCBJRDsgc2V0cyBjdXJyZW50cHJvaiBuYW1lICYgcmVzcGVjdGl2ZSBjdXJyZW50cHJvaiBpbmRleCB0byByZW1vdmUgYnV0dG9uJnRhc2sgZnJvbVxuICAgICAgICAgIFxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjdXJyZW50UHJvakluZGV4IGlzIFwiICsgY3VycmVudFByb2pJbmRleCk7XG4gICAgICAgICAgICAvL2ZpbmRzIHVuaXF1ZSBJRCBvZiB0YXNrIHdpdGhpbiBhbGxJdGVtc1xuICAgICAgICAgICAgdmFyIHRhc2tJZEluQWxsID0gZS50YXJnZXQuY2xvc2VzdChcImJ1dHRvblwiKS5pZC5zbGljZSg0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGFza0lkSU5hbGwgaXMgXCIgKyB0YXNrSWRJbkFsbCk7XG5cbiAgICAgICAgICAgIHJlbW92ZUl0ZW1Gcm9tQWxsKHRhc2tJZEluQWxsKTtcblxuICAgICAgICAgICAgdmFyIEFQID0gYWxsUHJvamVjdHM7XG4gICAgICAgICAgICB2YXIgeSA9IGN1cnJlbnRQcm9qSW5kZXg7XG4gICAgICAgICAgICB2YXIgeiA9IGAke2N1cnJlbnRQcm9qTmFtZX1ib3hgO1xuXG4gICAgICAgICAgICByZW1vdmVJdGVtRnJvbUN1cnJlbnQoY3VycmVudFByb2pJbmRleCwgdGFza0lkSW5BbGwpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJiZWxvdyBpcyBhbGxQcm9qZWN0c1wiKTtcbiAgICAgICAgICAgIGNvbnNvbGUudGFibGUoYWxsUHJvamVjdHMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJiZWxvdyBpcyBhbGxJdGVtc1wiKTtcbiAgICAgICAgICAgIGNvbnNvbGUudGFibGUoYWxsSXRlbXMpO1xuXG4gICAgICAgICAgICBzdG9yZVByb2plY3QoYWxsUHJvamVjdHNbY3VycmVudFByb2pJbmRleF0pO1xuICAgICAgICAgICAgLy9yZWZyZXNoZXMgZm9sZGVyIHRvIHVwZGF0ZSB3L28gcmVtb3ZlZCB0YXNrXG4gICAgICAgICAgICB2YXIgc3RvcmFnZVJlbW92YWxGcm9tQWxsID0gW107XG4gICAgICAgICAgICBzdG9yYWdlUmVtb3ZhbEZyb21BbGwucHVzaCh0YXNrSWRJbkFsbCk7XG4gICAgICAgICAgICByZW1vdmVGcm9tQWxsSXRlbXMoc3RvcmFnZVJlbW92YWxGcm9tQWxsKTtcblxuICAgICAgICAgICAgcmVmcmVzaENlbnRlckRPTShBUCwgeSwgeik7XG4gICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xvc2VzdChcImJ1dHRvblwiKS5jbGFzc05hbWUgPT09IFwiZXhwYW5kc2VsZl9idXR0b25cIikge1xuICAgICAgICAgICAgdmFyIGV4cGFuZElEID0gZS50YXJnZXQuY2xvc2VzdChcImJ1dHRvblwiKS5pZC5zbGljZSgxMCk7XG4gICAgICAgICAgICB2YXIgdG9FeHBhbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtleHBhbmRJRH1fZXhwYW5kTWVgKTtcbiAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgdG9nZ2xlSG9sZGVyID0gZS50YXJnZXQuY2xvc2VzdChcImRpdi5hZGRlZF90YXNrc1wiKS5sYXN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgdmFyIGV4cGFuZFRvZ0NvdW50ZXIgPSB0b2dnbGVIb2xkZXIuaW5uZXJIVE1MO1xuXG4gICAgICAgICAgICBpZiAoZXhwYW5kVG9nQ291bnRlciUyICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgdG9FeHBhbmQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXhwYW5kVG9nQ291bnRlciUyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdG9FeHBhbmQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJiZWZvcmUgZnhuIFwiICsgZXhwYW5kVG9nQ291bnRlcik7XG4gICAgICAgICAgICB0b2dnbGVFeHBhbmQoZXhwYW5kSUQsIGV4cGFuZFRvZ0NvdW50ZXIpO1xuICAgICAgICAgICAgZXhwYW5kVG9nQ291bnRlcisrO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZnRlciBmeG4gXCIgKyBleHBhbmRUb2dDb3VudGVyKTtcbiAgICAgICAgICAgIHRvZ2dsZUhvbGRlci5pbm5lckhUTUwgPSBleHBhbmRUb2dDb3VudGVyO1xuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoXCJidXR0b25cIikuY2xhc3NOYW1lID09PSBcImVkaXRUYXNrX2J1dHRvblwiKSB7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dyb3VuZENvdmVyU3R1ZmZcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIHZhciBlZGl0SUQgPSBlLnRhcmdldC5jbG9zZXN0KFwiYnV0dG9uXCIpLmlkLnNsaWNlKDgpO1xuICAgICAgICAgICAgc2V0Q3VycmVudEludG9FZGl0b3IoZWRpdElEKTtcblxuICAgICAgICAgICAgY29uc3QgdXBkYXRlVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXBkYXRlRWRpdEJ1dHRvblwiKTtcbiAgICAgICAgICAgIHVwZGF0ZVRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHNldEVkaXRJbnRvQ3VycmVudChlZGl0SUQpO1xuICAgICAgICAgICAgICAgIHNldEVkaXRJbnRvQWxsKGVkaXRJRCk7XG4gICAgICAgICAgICAgICAgZWRpdEZvcm1Db250LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmRDb3ZlclN0dWZmXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICBzdG9yZVByb2plY3QoYWxsUHJvamVjdHNbY3VycmVudFByb2pJbmRleF0pO1xuICAgICAgICAgICAgICAgIHN0b3JlQWxsSXRlbXMoYWxsSXRlbXMpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnN0IGNhbmNlbFVwZGF0ZVRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbmNlbEVkaXRCdXR0b25cIik7XG4gICAgICAgICAgICBjYW5jZWxVcGRhdGVUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlZGl0Rm9ybUNvbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dyb3VuZENvdmVyU3R1ZmZcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgXG4gICAgICAgIH0gXG5cbiAgICAgICAgZnVuY3Rpb24gc2V0RWRpdEludG9DdXJyZW50KHgpIHtcblxuICAgICAgICAgICAgdmFyIGVkaXRlZFRpdGxlID0gZWRpdEZvcm0uZWRpdFRpdGxlLnZhbHVlO1xuICAgICAgICAgICAgdmFyIGVkaXRlZERlc2NyaXB0aW9uID0gZWRpdEZvcm0uZWRpdERlc2NyaXB0aW9uLnZhbHVlO1xuICAgICAgICAgICAgdmFyIGVkaXRlZER1ZURhdGUgPSBlZGl0Rm9ybS5lZGl0RHVlRGF0ZS52YWx1ZTtcbiAgICAgICAgICAgIHZhciBlZGl0ZWRQcmlvcml0eSA9IGVkaXRGb3JtLmVkaXRQcmlvcml0eS52YWx1ZTtcbiAgICAgICAgICAgIHZhciBlZGl0ZWROb3RlcyA9IGVkaXRGb3JtLmVkaXROb3Rlcy52YWx1ZTtcbiAgICBcbiAgICAgICAgICAgIHZhciBjdXJyZW50VGFza0luZGV4ID0gYWxsUHJvamVjdHNbY3VycmVudFByb2pJbmRleF1bXCJ0YXNrTGlzdFwiXS5maW5kSW5kZXgoKG9iaikgPT4gb2JqLklEID09PSBgJHt4fWApO1xuICAgICAgICAgICAgdmFyIGluc2VydFRhcmcgPSBhbGxQcm9qZWN0c1tjdXJyZW50UHJvakluZGV4XVtcInRhc2tMaXN0XCJdW2Ake2N1cnJlbnRUYXNrSW5kZXh9YF07XG5cbiAgICAgICAgICAgIGluc2VydFRhcmcudGl0bGVTZXROZXcoZWRpdGVkVGl0bGUpO1xuICAgICAgICAgICAgaW5zZXJ0VGFyZy5kZXNjcmlwdGlvblNldE5ldyhlZGl0ZWREZXNjcmlwdGlvbik7XG4gICAgICAgICAgICBpbnNlcnRUYXJnLmR1ZURhdGVTZXROZXcoZWRpdGVkRHVlRGF0ZSk7XG4gICAgICAgICAgICBpbnNlcnRUYXJnLnByaW9yaXR5U2V0TmV3KGVkaXRlZFByaW9yaXR5KTtcbiAgICAgICAgICAgIGluc2VydFRhcmcubm90ZXNTZXROZXcoZWRpdGVkTm90ZXMpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImJlbG93IGlzIGFsbFByb2plY3RzXCIpO1xuICAgICAgICAgICAgY29uc29sZS50YWJsZShhbGxQcm9qZWN0cyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImJlbG93IGlzIGFsbEl0ZW1zXCIpO1xuICAgICAgICAgICAgY29uc29sZS50YWJsZShhbGxJdGVtcyk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzZXRFZGl0SW50b0FsbCh4KSB7XG5cbiAgICAgICAgICAgIHZhciBlZGl0ZWRUaXRsZSA9IGVkaXRGb3JtLmVkaXRUaXRsZS52YWx1ZTtcbiAgICAgICAgICAgIHZhciBlZGl0ZWREZXNjcmlwdGlvbiA9IGVkaXRGb3JtLmVkaXREZXNjcmlwdGlvbi52YWx1ZTtcbiAgICAgICAgICAgIHZhciBlZGl0ZWREdWVEYXRlID0gZWRpdEZvcm0uZWRpdER1ZURhdGUudmFsdWU7XG4gICAgICAgICAgICB2YXIgZWRpdGVkUHJpb3JpdHkgPSBlZGl0Rm9ybS5lZGl0UHJpb3JpdHkudmFsdWU7XG4gICAgICAgICAgICB2YXIgZWRpdGVkTm90ZXMgPSBlZGl0Rm9ybS5lZGl0Tm90ZXMudmFsdWU7XG4gICAgXG4gICAgICAgICAgICB2YXIgY3VycmVudFRhc2tJbmRleEFsbCA9IGFsbEl0ZW1zLmZpbmRJbmRleCgob2JqKSA9PiBvYmouSUQgPT09IGAke3h9YCk7XG4gICAgICAgICAgICBhbGxJdGVtcy5maW5kSW5kZXgoKG9iaikgPT4gb2JqLklEID09PSBgJHt4fWApO1xuICAgICAgICAgICAgdmFyIGluc2VydFRhcmcgPSBhbGxJdGVtc1tgJHtjdXJyZW50VGFza0luZGV4QWxsfWBdXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGluc2VydFRhcmcudGl0bGVTZXROZXcoZWRpdGVkVGl0bGUpO1xuICAgICAgICAgICAgaW5zZXJ0VGFyZy5kZXNjcmlwdGlvblNldE5ldyhlZGl0ZWREZXNjcmlwdGlvbik7XG4gICAgICAgICAgICBpbnNlcnRUYXJnLmR1ZURhdGVTZXROZXcoZWRpdGVkRHVlRGF0ZSk7XG4gICAgICAgICAgICBpbnNlcnRUYXJnLnByaW9yaXR5U2V0TmV3KGVkaXRlZFByaW9yaXR5KTtcbiAgICAgICAgICAgIGluc2VydFRhcmcubm90ZXNTZXROZXcoZWRpdGVkTm90ZXMpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImJlbG93IGlzIGFsbFByb2plY3RzXCIpO1xuICAgICAgICAgICAgY29uc29sZS50YWJsZShhbGxQcm9qZWN0cyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImJlbG93IGlzIGFsbEl0ZW1zXCIpO1xuICAgICAgICAgICAgY29uc29sZS50YWJsZShhbGxJdGVtcyk7XG5cbiAgICAgICAgICAgIHNlZUFsbChhbGxJdGVtcyk7ICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzZXRDdXJyZW50SW50b0VkaXRvcihzb21lSUQpIHtcbiAgICAgICAgICAgIGVkaXRGb3JtQ29udC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlZGl0Rm9ybUFycmF5IFwiICsgZWRpdEZvcm1BcnJheSk7XG4gICAgICAgICAgICB2YXIgY3VycmVudEluZm9BcnJheSA9IFtdO1xuICAgICAgICAgICAgLy9nbyB3aXRoaW4gYWxsUHJvamVjdHMsIHRvIGN1cnJlbnQgcHJvamVjdCBpbmRleCwgdG8gdGFza2xpc3QsIHRvIHNwZWNpZmljIGluZGV4IHdpdGhpbiB0YXNrbGlzdFxuICAgICAgICAgICAgdmFyIGN1cnJlbnRUYXNrSW5kZXggPSBhbGxQcm9qZWN0c1tjdXJyZW50UHJvakluZGV4XVtcInRhc2tMaXN0XCJdLmZpbmRJbmRleCgob2JqKSA9PiBvYmouSUQgPT09IGAke3NvbWVJRH1gKTtcbiAgICAgICAgICAgIC8vdGFrZSBlYWNoIC4uLiBkZXNjcmlwdGlvbj8gcGFydCBvZiBjb25zdHJ1Y3RvciBhbmQgZ2V0IHRoZSB2YWx1ZXMgbWF0Y2hlZCB0byBlYWNoIHBhcnRcbiAgICAgICAgICAgIC8vcHVzaCBzYWlkIHZhbHVlcy9tYXRjaGVzIGludG8gY3VycmVudEluZm9BcnJheVxuICAgICAgICAgICAgdmFyIHRlc3RvYmogPSBhbGxQcm9qZWN0c1tjdXJyZW50UHJvakluZGV4XVtcInRhc2tMaXN0XCJdW2Ake2N1cnJlbnRUYXNrSW5kZXh9YF07XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0ZXN0b2JqKTtcbiAgICBcbiAgICAgICAgICAgIC8vZmluZHMga2V5IHZhbHVlIHBhaXJzIG9mIHRhc2tzJ3MgdGhpcy5pbmZvIHR5cGVcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHRlc3RvYmopKSB7XG4gICAgICAgICAgICAgICAgaWYgKFtcImRlc2NyaXB0aW9uXCIsIFwiZHVlRGF0ZVwiLCBcIm5vdGVzXCIsIFwicHJpb3JpdHlcIiwgXCJ0aXRsZVwiXS5pbmRleE9mKGtleSkgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgeCA9IFtrZXksIHZhbHVlXTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEluZm9BcnJheS5wdXNoKHgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRJbmZvQXJyYXkpO1xuXG4gICAgICAgICAgICBlZGl0Rm9ybUFycmF5LmZvckVhY2goaW5wdXQgPT4ge1xuICAgIFxuICAgICAgICAgICAgICAgIHZhciBpbnB1dFNsaWNlZCA9IGlucHV0Lm5hbWUuc2xpY2UoMCwgLTUpO1xuICAgIFxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwLCBtID0gY3VycmVudEluZm9BcnJheS5sZW5ndGg7IGogPCBtOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0U2xpY2VkID09PSBcImRlc2NyaXB0aW9uXCIgJiYgaW5wdXRTbGljZWQgPT09IGN1cnJlbnRJbmZvQXJyYXlbal1bMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdERlc2NyaXB0aW9uXCIpLmlubmVySFRNTCA9IGAke2N1cnJlbnRJbmZvQXJyYXlbal1bMV19YDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbnB1dFNsaWNlZCA9PT0gY3VycmVudEluZm9BcnJheVtqXVswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgYCR7Y3VycmVudEluZm9BcnJheVtqXVsxXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSkgXG5cbiAgICBjb25zdCBhZGROZXdQcm9qQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdwcm9qX2FkZFwiKTtcbiAgICBhZGROZXdQcm9qQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgdmFyIHN0b3BGcm9tQWRkaW5nTmV3ID0gMDtcbiAgICAgICAgdmFyIHRha2VuUHJvak5hbWVzID0gW107XG4gICAgICAgIGFsbFByb2plY3RzLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgdGFrZW5Qcm9qTmFtZXMucHVzaChlbC5wcm9qTmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0YWtlblByb2pOYW1lcy5mb3JFYWNoKGVrID0+IHtcbiAgICAgICAgICAgIGlmIChlayA9PT0gYWRkbmV3cHJvamZvcm0ubmV3cHJval9uYW1lLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2UgZW50ZXIgYSB1bmlxdWUgcHJvamVjdCBuYW1lLlwiKTtcbiAgICAgICAgICAgICAgICBzdG9wRnJvbUFkZGluZ05ldyA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIS9cXFMvLnRlc3QoYWRkbmV3cHJvamZvcm0ubmV3cHJval9uYW1lLnZhbHVlKSkge1xuICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBwcm9qZWN0IG5hbWUuXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHN0b3BGcm9tQWRkaW5nTmV3ID09IDApIHtcbiAgICAgICAgICAgIHZhciBhID0gYWRkbmV3cHJvamZvcm0ubmV3cHJval9uYW1lLnZhbHVlO1xuICAgICAgICAgICAgdmFyIHggPSBuZXcgUHJvamVjdChhKTtcbiAgICAgICAgICAgIGFkZFByb2pUb0FsbCh4KTtcbiAgICAgICAgICAgIGNvbnNvbGUudGFibGUoYWxsUHJvamVjdHMpO1xuICAgICAgICAgICAgYWRkUHJvalRvU2lkZSh4KTsgLy9ET01cbiAgICAgICAgICAgIGN1cnJlbnRQcm9qTmFtZSA9IHgucHJvak5hbWUgXG4gICAgICAgICAgICBjdXJyZW50UHJvakluZGV4ID0gYWxsUHJvamVjdHMuZmluZEluZGV4KChvYmopID0+IG9iai5wcm9qTmFtZSA9PT0gYCR7Y3VycmVudFByb2pOYW1lfWApOy8vc3dpdGNoIG5ld2x5IG1hZGUgcHJvaiB0byBjdXJyZW50UHJvak5hbWUgYW5kIGN1cnJlbnRQcm9qSW5kZXhcbiAgICAgICAgICAgIHNpZGViYXJUb2dnbGUoY3VycmVudFByb2pOYW1lKTtcblxuICAgICAgICAgICAgLy9sb2NhbHN0b3JhZ2UgaGVyZVxuXG4gICAgICAgICAgICBzdG9yZVByb2plY3QoYWxsUHJvamVjdHNbY3VycmVudFByb2pJbmRleF0pOyAvL1wicmVmcmVzaGVzXCIgcHJvaiBpbiBsb2NhbFN0b3JhZ2UgdG8gaW5jbHVkZSBuZXcgYWRkZWQgdGFza1xuICAgICAgICAgICAgc3RvcmVQcm9qZWN0KGFsbFByb2plY3RzWzBdKTtcbiAgICAgICAgICAgIC8vYWxzbyBhZGRzIGhpZGRlbiBwcm9qIHNvIHRoYXQgdGhlIFwic3BhY2VcIiBpcyB0YWtlbiB3aGVuIGxvY2Fsc3RvcmFnZSBpcyBhY2Nlc3NlZCBhbmQgRE9NIGRpc3BsYXllZFxuXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZG5ld3Byb2pmb3JtXCIpLnJlc2V0KCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImN1cnJlbnRwcm9qIG5hbWUgaXMgXCIgKyBjdXJyZW50UHJvak5hbWUgKyBcIiBhbmQgY3VycmVudCBwcm9qIGluZGV4IGlzIFwiICsgY3VycmVudFByb2pJbmRleCk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2pGb3JtQ29udGFpbmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dyb3VuZENvdmVyU3R1ZmZcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGRhcmtMaWdodFRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9nZ2xlSG9sZGVyXCIpO1xuICAgIGRhcmtMaWdodFRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXJOYW1lc09ubHlcIikuY2xhc3NOYW1lICE9PSBcImRhcmstbW9kZVwiKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZ2dsZWRPZmZcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2dnbGVkT25cIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXJOYW1lc09ubHlcIikuY2xhc3NOYW1lID09PSBcImRhcmstbW9kZVwiKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZ2dsZWRPZmZcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9nZ2xlZE9uXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfTtcbiAgICAgICAgdG9nZ2xlRGFyaygpO1xuICAgIH0pXG5cbiAgICAvLyBsb2NhbFN0b3JhZ2UgY29kZSB1bmRlciBoZXJlXG5cbiAgICBsZXQgcmV0cmlldmVkUHJvakRhdGEgPSBbXTtcbiAgICBsZXQgcmV0cmlldmVkQWxsRGF0YSA9IFtdO1xuXG4gICAgaWYgKHN0b3JhZ2VUZXN0KCkpIHtcbiAgICAgICAgcmV0cmlldmVQcm9qZWN0cyhyZXRyaWV2ZWRQcm9qRGF0YSwgcmV0cmlldmVkQWxsRGF0YSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJldHJpZXZlZFByb2pEYXRhKTtcbiAgICAgICAgY29uc29sZS5sb2cocmV0cmlldmVkQWxsRGF0YSk7XG4gICAgICAgIGxldCByZXRyaWV2ZWRDdXJyZW50UHJvak5hbWUgPSBudWxsO1xuICAgICAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgICAgIC8vLy8vLy8vbmVlZCB0byBjaGVjayBJRiB0aGVyZSBpcyBzb21ldGhpbmcgYmVzaWRlcyBoaWRkZW5cbiAgICAgICAgcmV0cmlldmVkQ3VycmVudFByb2pOYW1lID0gcmV0cmlldmVkUHJvakRhdGFbMV0ucHJvak5hbWU7XG4gICAgICAgIGN1cnJlbnRQcm9qTmFtZSA9IHJldHJpZXZlZEN1cnJlbnRQcm9qTmFtZTtcbiAgICAgICAgY3VycmVudFByb2pJbmRleCA9IDE7XG5cbiAgICAgICAgLy93aWxsIG5lZWQgdG8gd3JpdGUgaWYvZWxzZSB0byBjaGVjayB0aGF0IHRoZXJlIEFSRSBwcm9qZWN0cyBhbmQgbm90IGp1c3QgYWxsSXRlbXMsIGFuZCB2aWNlIHZlcnNhXG4gICAgICAgIHJldHJpZXZlZFByb2pEYXRhLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgdmFyIHByb2pUb0JlQ29uc3RydWN0ZWQgPSBuZXcgUHJvamVjdChgJHtlbC5wcm9qTmFtZX1gKTtcbiAgICAgICAgICAgIGFkZFByb2pUb1NpZGUocHJvalRvQmVDb25zdHJ1Y3RlZCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlbC50YXNrTGlzdCk7XG4gICAgICAgICAgICBpZiAoZWwudGFza0xpc3QgIT09IDApIHtcbiAgICAgICAgICAgICAgICBlbC50YXNrTGlzdC5mb3JFYWNoKGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0aW5nIHRoZSBpZC4uLi5cIiArIGVtLklEKTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IGVtLnRpdGxlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYiA9IGVtLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IGVtLmR1ZURhdGU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkID0gZW0ucHJpb3JpdHk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gZW0ubm90ZXM7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmID0gZW0ucHJvamVjdDtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVtYWRlVGFzayA9IG5ldyBJdGVtKGEsIGIsIGMsIGQsIGUsIGYpXG4gICAgICAgICAgICAgICAgICAgIHJlbWFkZVRhc2suSUQgPSBlbS5JRDtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVtYWRlVGFzay5naXZlRGVldHMoKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcHJvalRvQmVDb25zdHJ1Y3RlZC50YXNrTGlzdC5wdXNoKHJlbWFkZVRhc2spO1xuICAgICAgICAgICAgICAgIH0pOyBcbiAgICAgICAgICAgICAgICAvL2FkZHMgZWFjaCB0YXNrTGlzdCBpdGVtIGludG8gcmVtYWRlIFByb2plY3RcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2pUb0JlQ29uc3RydWN0ZWQpO1xuICAgICAgICAgICAgYWxsUHJvamVjdHMucHVzaChwcm9qVG9CZUNvbnN0cnVjdGVkKTtcblxuICAgICAgICAgICAgdmFyIEFQID0gYWxsUHJvamVjdHM7XG4gICAgICAgICAgICB2YXIgeSA9IGluZGV4Kys7XG4gICAgICAgICAgICB2YXIgeiA9IGAke2VsLnByb2pOYW1lfWJveGA7XG5cbiAgICAgICAgICAgIHJlZnJlc2hDZW50ZXJET00oQVAsIHksIHopO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYGFsbFByb2plY3RzIGJlbG93YCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhbGxQcm9qZWN0cyk7XG4gICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgIH0pO1xuICAgICAgICByZXRyaWV2ZWRBbGxEYXRhLmZvckVhY2goZW4gPT4ge1xuXG4gICAgICAgICAgICB2YXIgYSA9IGVuLnRpdGxlO1xuICAgICAgICAgICAgdmFyIGIgPSBlbi5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIHZhciBjID0gZW4uZHVlRGF0ZTtcbiAgICAgICAgICAgIHZhciBkID0gZW4ucHJpb3JpdHk7XG4gICAgICAgICAgICB2YXIgZSA9IGVuLm5vdGVzO1xuICAgICAgICAgICAgdmFyIGYgPSBlbi5wcm9qZWN0O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgdGFza1RvQmVNYWRlID0gbmV3IEl0ZW0oYSwgYiwgYywgZCwgZSwgZilcbiAgICAgICAgICAgIHRhc2tUb0JlTWFkZS5JRCA9IGVuLklEO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGFza1RvQmVNYWRlKTtcbiAgICAgICAgICAgIGFsbEl0ZW1zLnB1c2godGFza1RvQmVNYWRlKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBhbGxJdGVtcyBiZWxvd2ApO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYWxsSXRlbXMpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvKiB2YXIgQVAgPSBhbGxQcm9qZWN0cztcbiAgICAgICAgdmFyIHkgPSAwO1xuICAgICAgICB2YXIgeiA9IGAke3JldHJpZXZlZEN1cnJlbnRQcm9qTmFtZX1ib3hgO1xuICAgICAgICByZWZyZXNoQ2VudGVyRE9NKEFQLCB5LCB6KTsgKi9cblxuICAgICAgICBzaWRlYmFyVG9nZ2xlKHJldHJpZXZlZEN1cnJlbnRQcm9qTmFtZSk7XG5cbiAgICAgICAgLy9jb25zb2xlLmxvZyhyZXRyaWV2ZWREYXRhWzFdLnRhc2tMaXN0WzBdKTtcbiAgICAgICAgLy9jYW4gZ28gaW50byBlYWNoIHByb2ogZm9sZGVyID4+IHRhc2tMaXN0ID4+IGVhY2ggdGFza1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBoaWRkZW5Qcm9qID0gbmV3IFByb2plY3QgKFwiX2hJZERlTlwiKTtcbiAgICAgICAgYWRkUHJvalRvQWxsKGhpZGRlblByb2opOyBcbiAgICAgICAgYWRkUHJvalRvU2lkZShoaWRkZW5Qcm9qKTtcbiAgICAgICAgLy9cImhvbGRlclwiIGZvciB0YXNrcyBhZGRlZCBpbiBhbGxJdGVtcyBwYWdlOyBjdXJyZW50UHJvakluZGV4IG9mIDBcbiAgICAgICAgdmFyIGluaXRQcm9qID0gbmV3IFByb2plY3QoXCJNeSBGaXJzdCBMaXN0XCIpO1xuICAgICAgICBhZGRQcm9qVG9BbGwoaW5pdFByb2opO1xuICAgICAgICBjdXJyZW50UHJvakluZGV4ID0gYWxsUHJvamVjdHMuZmluZEluZGV4KChvYmopID0+IG9iai5wcm9qTmFtZSA9PT0gXCJNeSBGaXJzdCBMaXN0XCIpO1xuICAgICAgICBjdXJyZW50UHJvak5hbWUgPSBhbGxQcm9qZWN0c1tjdXJyZW50UHJvakluZGV4XS5wcm9qTmFtZTtcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudFByb2pJbmRleCArIGN1cnJlbnRQcm9qTmFtZSk7XG4gICAgICAgIGFkZFByb2pUb1NpZGUoaW5pdFByb2opO1xuICAgICAgICBjb25zb2xlLmxvZyhhbGxQcm9qZWN0cyk7XG4gICAgfVxuXG4gICAgXG5cbiAgICAvL2Rvbid0IGJyZWFrIGlmIG5vdGhpbmcgaXMgZm91bmQgaW4gbG9jYWxTdG9yYWdlXG4gICAgLy9zdG9yZSBlYWNoIHByb2plY3QgYW5kIGl0J3MgbmFtZSAobm8gb3ZlcndyaXRpbmchIHVuaXF1ZSlcbiAgICAvL3JldHJpZXZlIG5hbWVcblxuICAgIC8vc3RvcmVQcm9qZWN0KGhpZGRlblByb2opOyB0ZXN0aW5nIGEgc3RvcmVkIHByb2plY3RcbiAgICBcbiAgICBcblxuICAgIC8vc3RvcmVQcm9qZWN0KGluaXRQcm9qKTtcblxuICAgIC8vc3RvcmFnZVRlc3QoKTsgd2lsbCBwcm9iYWJseSB3YW50IHRvIGFkZCB0aGlzIGJlZm9yZSBzdG9yaW5nIGhpZGRlbi9pbml0UHJvaiB0byBjaGVjayBJRiBwZXJzb24gaGFzIGFscmVhZHkgdmlzaXRlZFxuICAgIFxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RvcmFnZVRlc3QoKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJObyBib290eSB0byBiZSBmb3VuZFwiKTtcbiAgICAgICAgLy9wb3B1bGF0ZVN0b3JhZ2UoKTs/P1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRoZXJlJ3Mgc3R1ZmYgaW4gaGVyZSFcIik7XG4gICAgICAgIC8vbG9jYWxTdG9yYWdlIGlzIE5PVCBhcnJheSwganVzdCBvYmplY3RcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgICAgIC8qIHZhciByZXRyaWV2ZWRQcm9qID0gcmV0cmlldmVQcm9qZWN0KFwiX2hJZERlTlwiKTtcbiAgICAgICAgdmFyIHRlc3RSZXRyaWV2YWxOYW1lID0gcmV0cmlldmVkUHJvai5wcm9qTmFtZTtcbiAgICAgICAgY29uc29sZS5sb2coJ3JldHJpZXZlZFByb2plY3QgcHJvak5hbWU6ICcsIHRlc3RSZXRyaWV2YWxOYW1lKTsgKi9cbiAgICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JlQWxsSXRlbXMoeCkge1xuICB4LmZvckVhY2goZWwgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGBhTGxJdEVtU18ke2VsLklEfWAsIEpTT04uc3RyaW5naWZ5KGVsKSk7XG4gICAgY29uc29sZS5sb2coYFN0b3JpbmcgYWxsSXRlbXMgSUQgb2Y6ICR7ZWwuSUR9YClcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JlUHJvamVjdCh4KSB7XG4gIGNvbnNvbGUubG9nKGB3aGF0IGluIHRoZSB3b3JsZCBpcyBYPyBIRVJFOiAke3gucHJvak5hbWV9YCk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3gucHJvak5hbWV9YCwgSlNPTi5zdHJpbmdpZnkoeCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRnJvbUFsbEl0ZW1zKG9yaWdpbmFsSWRBcnJheSkge1xuICB2YXIgbmV3SWRBcnJheSA9IG9yaWdpbmFsSWRBcnJheS5zbGljZSgpO1xuICB3aGlsZSAobmV3SWRBcnJheS5sZW5ndGggIT09IDApIHtcbiAgICBmb3IgKHZhciBzID0gMDsgcyA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IHMrKykge1xuICAgICAgaWYgKGxvY2FsU3RvcmFnZS5rZXkocykgPT09IGBhTGxJdEVtU18ke25ld0lkQXJyYXlbMF19YCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhpcyBpcyB3aGF0IGlzIGJlaW5nIHJlbW92ZWQgaW4gcmVtb3ZlRnJvbUFsbDogXCIgKyBuZXdJZEFycmF5WzBdKTtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgYUxsSXRFbVNfJHtuZXdJZEFycmF5WzBdfWApO1xuICAgICAgICAgIG5ld0lkQXJyYXkuc3BsaWNlKDAsIDEpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgY29uc29sZS5sb2cob3JpZ2luYWxJZEFycmF5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVByb2plY3QoeCkge1xuICBjb25zb2xlLmxvZyhcIlRoaXMgaXMgd2hhdCBpcyBiZWluZyByZW1vdmVkIGluIHJlbW92ZVByb2o6IFwiICsgeClcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG59XG4vKiBleHBvcnQgZnVuY3Rpb24gc3RvcmVUYXNrKHgpIHtcbiAgY29uc29sZS5sb2coYElEIGZvciB0YXNrOiAke3guSUR9YCk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3guSUR9YCwgSlNPTi5zdHJpbmdpZnkoeCkpO1xufSAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcmV0cmlldmVQcm9qZWN0cyhzb21lQXJyYXksIGFub3RoZXJBcnJheSkge1xuXG4gIC8vaXRlcmF0ZXMgdGhyb3VnaCBsb2NhbFN0b3JhZ2UgZm9yIGhpZGRlbiBhbmQgYWxsIHByb2plY3RzXG4gIC8vdGhlc2UgcHJvamVjdHMgZG8gTk9UIGhhdmUgbWV0aG9kcyB5ZXRcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcHJvalJldHJpZXZhbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsU3RvcmFnZS5rZXkoaSkpO1xuICAgIHZhciBwYXJzZWRQcm9qUmV0cmlldiA9IEpTT04ucGFyc2UocHJvalJldHJpZXZhbCk7XG5cbiAgICBpZiAocGFyc2VkUHJvalJldHJpZXYucHJvak5hbWUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwicHJvak5hbWUgKyBJRDogXCIgKyBwYXJzZWRQcm9qUmV0cmlldi5wcm9qTmFtZSArIFwiIFwiICsgcGFyc2VkUHJvalJldHJpZXYuSUQpO1xuICAgICAgc29tZUFycmF5LnB1c2gocGFyc2VkUHJvalJldHJpZXYpO1xuICAgIH0gZWxzZSBpZiAocGFyc2VkUHJvalJldHJpZXYuSUQuc2xpY2UoMCw0KSA9PT0gXCJwcm9qXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQUxMSVRFTVMgdGl0bGUsIGRlZXRzICYgSUQ6IFwiICsgcGFyc2VkUHJvalJldHJpZXYudGl0bGUgKyBcIiBcIiArIHBhcnNlZFByb2pSZXRyaWV2LmRlc2NyaXB0aW9uICsgXCIgXCIgKyBwYXJzZWRQcm9qUmV0cmlldi5JRCk7XG4gICAgICBhbm90aGVyQXJyYXkucHVzaChwYXJzZWRQcm9qUmV0cmlldik7XG4gICAgfVxuICB9ICBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHJpZXZlUHJvamVjdCh4KSB7XG5cbiAgICB2YXIgcmV0cmlldmVkUHJvamVjdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke3h9YCk7XG4gICAgdmFyIHBhcnNlZFByb2plY3QgPSBKU09OLnBhcnNlKHJldHJpZXZlZFByb2plY3QpO1xuICAgIHJldHVybiBwYXJzZWRQcm9qZWN0O1xuICAgIC8vYWRkIHJlbmFtaW5nIGZ1bmN0aW9uIGJhY2sgYnkgdXNpbmcgY29uc3RydWN0b3IgYWdhaW5cblxuXG4gICAgLyogY29uc29sZS5sb2coJ3JldHJpZXZlZFByb2plY3QgQUZURVIgYWRkaW5nOiAnICsgIHBhcnNlZFByb2plY3QpO1xuICAgIHBhcnNlZFByb2plY3Quc2V0TmV3UHJvak5hbWUoXCJUZXN0aW5nQ2hhbmdlXCIpO1xuICAgIGNvbnNvbGUubG9nKHBhcnNlZFByb2plY3QuZGlzcGxheVByb2ooKSk7XG4gICAgY29uc29sZS5sb2coXCJ1c2luZyB0aGUgZnhuOiBcIiArIHBhcnNlZFByb2plY3QuZ2l2ZVByb2pOYW1lKCkpOyAqL1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==