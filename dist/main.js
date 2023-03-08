/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/displayController.js":
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n\n\nconst displayController = () => {\n  //properties\n  const sideBar = document.querySelector('.sidebar-projectList')\n  let projectListItem = document.querySelectorAll('.sidebar__project')\n  const projectTitle = document.querySelector('#projectTitle')\n\n  //   console.log(document.querySelectorAll('.sidebar__project'))\n\n  // functions\n  const addToSideBar = (value) => {\n\n    // create list element and append to sidebar\n    let listItem = document.createElement('li')\n    listItem.classList.add('sidebar__project')\n    listItem.textContent = `${value}`\n\n    listItem.addEventListener('click', () => {\n      setProjectTitle(listItem.innerText)\n    })\n\n    sideBar.appendChild(listItem)\n\n    // sideBar.addEventListener('click', (elem) => {\n    //   setProjectTitle(elem.target.textContent)\n    //   console.log(elem.target.textContent)\n    // })\n  }\n\n  const getProjectItems = () => {\n    projectListItem = document.querySelectorAll('.sidebar__project')\n    return projectListItem\n  }\n\n  //   const applyProjectItemEventListener = (item) => {\n  //     item.addEventListener('click', () => {\n  //     setProjectTitle(item.textContent)\n  //     })\n  //   }\n\n  const updateProjectHTML = (elem) => {\n    setProjectTitle(elem.target.textContent)\n  }\n\n  const removeFromSideBar = (value) => {}\n\n  const setProjectTitle = (value) => {\n    projectTitle.textContent = value\n  }\n\n  return {\n    addToSideBar,\n    setProjectTitle,\n    getProjectItems,\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayController);\n\n\n//# sourceURL=webpack://to-do-list/./src/displayController.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ \"./src/projects.js\");\n/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks.js */ \"./src/tasks.js\");\n/* harmony import */ var _displayController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayController.js */ \"./src/displayController.js\");\n\n\n\n\nconst newProj = (0,_projects_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Big Project')\nconst newTask = (0,_tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\nconst displayController = (0,_displayController_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n\n// Test, delete later ---------------------------------\nnewTask.name = 'Check the pantry'\nnewTask.notes = 'dont forget to check the cabinet too'\nnewTask.priority = 1\nnewProj.addToTaskList(newTask)\n\ndisplayController.addToSideBar(newProj.getProjectName())\ndisplayController.addToSideBar('swag')\nconsole.log(displayController.getProjectItems())\n// ----------------------------------------------------\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst project = (name) => {\n\n  // properties\n  const projectName = name\n  const taskList = [] // all tasks in this project will be stored here\n\n  // functions\n  const getProjectName = () => {\n    return projectName\n  }\n\n  const getTaskList = () => {\n    return taskList\n  }\n\n  const addToTaskList = (taskObj) => {\n    taskList.push(taskObj)\n  }\n\n  const removeFromTaskList = (taskObj) => {\n    if (taskList.indexOf(taskObj) !== undefined) {\n      taskList.splice(taskList.indexOf, 1)\n    }\n  }\n\n  return {\n    getProjectName,\n    getTaskList,\n    addToTaskList,\n    removeFromTaskList,\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (project);\n\n\n//# sourceURL=webpack://to-do-list/./src/projects.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst task = () => {\n  // properties\n  let taskName = ''\n  let taskDescription = ''\n  let status\n  let dueDate\n  let priority\n  let notes\n\n  return {\n    set name(value) {\n      taskName = value\n    },\n    get name() {\n      return taskName\n    },\n\n    set taskDescription(value) {\n      taskDescription = value\n    },\n    get taskDescription() {\n      return taskDescription\n    },\n\n    set status(value) {\n      status = value\n    },\n    get status() {\n      return status\n    },\n\n    set dueDate(value) {\n      dueDate = value\n    },\n    get dueDate() {\n      return dueDate\n    },\n\n    set priority(value) {\n      priority = value\n    },\n    get priority() {\n      return priority\n    },\n\n    set notes(value) {\n      notes = value\n    },\n    get notes() {\n      return notes\n    },\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (task);\n\n\n//# sourceURL=webpack://to-do-list/./src/tasks.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;