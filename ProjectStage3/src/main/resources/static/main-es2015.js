(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/admin/admin.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/admin/admin.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    Welcome To You're Coupon System Administrator\n</div>\n<div>\n  \n \n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/company/company.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/company/company.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    Welcome To You're Coupon System Company\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/customer/customer.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/customer/customer.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    Welcome To You're Coupon System Customer\n\n</div>\n<div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <p>Made by Yoav Calderon, all rights reserved &copy;</p>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/header/header.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n<nav *ngIf=\"navChooser=='ADMINISTRATOR'\">\n    <a (click)= \"logout()\">Log Out</a>\n    <a routerLink=\"add-company\"> Add A Company</a>\n    <a routerLink=\"add-customer\"> Add A Customer</a>\n    <a routerLink=\"get-all-companies\"> My Companies</a>\n    <a routerLink=\"get-all-customers\"> My Customers</a>\n    <!-- <a routerLink=\"get-one-company\"> Show A Company</a>\n    <a routerLink=\"get-one-customer\"> Show A Customer</a> -->\n\n\n</nav>\n<nav *ngIf=\"navChooser=='COMPANY'\">\n    <a (click)= \"logout()\">Log Out</a>\n    <a routerLink=\"add-coupon\">Add coupon</a>\n    <a routerLink=\"get-company-coupons\">My Company Coupons</a>\n\n\n</nav>\n<nav *ngIf=\"navChooser=='CUSTOMER'\">\n        <a (click)= \"logout()\">Log Out</a>\n        <a routerLink=\"get-customer-coupons\">My Coupons</a>\n        <a routerLink=\"get-customer-details\">Show my info</a>\n        <a routerLink=\"purchase-coupon\">Purchase Coupon</a>\n    \n\n</nav>\n<nav *ngIf=\"!navChooser\">\n<a routerLink=\"login\">Please Log in</a>\n    \n\n</nav>\n\n\n\n\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/layout/layout.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/layout/layout.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n    <header>\n<app-header></app-header>  \n      <link href=\"https://fonts.googleapis.com/css?family=Aguafina+Script|Aladin|Almendra|Almendra+SC|Amiri|Arbutus|Averia+Serif+Libre|Bilbo+Swash+Caps|Butcherman|Caesar+Dressing|Cantata+One|Ceviche+One|Charm|Chela+One|Condiment|Cookie|Creepster|Damion|Dr+Sugiyama|Eagle+Lake|Eater|Engagement|Ewert|Fredericka+the+Great|Frijole|Great+Vibes|Hanalei+Fill|IM+Fell+DW+Pica|IM+Fell+DW+Pica+SC|IM+Fell+English+SC|Inknut+Antiqua|Italianno|Kaushan+Script|Knewave|Luckiest+Guy|Marck+Script|MedievalSharp|Metal+Mania|Mirza|Modak|Monoton|Mr+Dafoe|New+Rocker|Niconne|Noto+Sans+TC|Oleo+Script|Oleo+Script+Swash+Caps|Pacifico|Pirata+One|Rakkas|Redressed|Romanesco|Rye|Sancreek|Seaweed+Script|Shojumaru|Shrikhand|Special+Elite|UnifrakturCook:700|UnifrakturMaguntia&display=swap\" rel=\"stylesheet\"> \n    </header>\n    <main><router-outlet></router-outlet></main>\n    <footer><app-footer></app-footer></footer>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    Welcome To Our Coupon System, Today is {{currentDate| date: 'EEE, MMM dd, yyyy'}}\n        <h1></h1>\n    <form>\n            <div>\n                 <br/><br/>\n                </div>\n        <input type=\"text\" name=\"email\" placeholder=\"email\" [(ngModel)]=\"emailVar\" required/><br />\n        <input type=\"text\" name=\"password\" placeholder=\"password\" [(ngModel)]=\"passwordVar\" required/><br />\n        <select name=\"type\" [(ngModel)]=\"typeVar\">\n            <option value=\"ADMINISTRATOR\">Admin</option>\n            <option value=\"CUSTOMER\">Customer</option>\n            <option value=\"COMPANY\">Company</option>\n        </select>\n        <input type=\"button\" value=\"login\" (click)=\"login()\" />\n    </form>\n\n    <br/><br/>\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/main/main.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/main/main.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>main works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/methods/adminMethods/add-company/add-company.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/methods/adminMethods/add-company/add-company.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <form>\n        <input type=\"name\" name=\"compName\" placeholder=\"Company Name\" [(ngModel)]=\"company.name\"/><br/>\n        <input type=\"email\" name=\"compEmail\" placeholder=\"Company Email\" [(ngModel)]=\"company.email\"/><br/>\n        <input type=\"password\" name=\"password\" placeholder=\"password\" [(ngModel)]=\"company.password\"/><br/>\n        <input type=\"button\" value=\"Add Company\" (click)=\"createCompany()\" /><br/>\n        \n    </form>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/methods/adminMethods/add-customer/add-customer.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/methods/adminMethods/add-customer/add-customer.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n        <form>\n            <input type=\"firstName\" name=\"custFirstName\" placeholder=\"Customer First Name\" [(ngModel)]=\"customer.firstName\"/><br/>\n            <input type=\"lastName\" name=\"custLastName\" placeholder=\"Customer Last Name\" [(ngModel)]=\"customer.lastName\"/><br/>\n            <input type=\"email\" name=\"custEmail\" placeholder=\"Customer email\" [(ngModel)]=\"customer.email\"/><br/>\n            <input type=\"password\" name=\"custPass\" placeholder=\"Customer password\" [(ngModel)]=\"customer.password\"/><br/>\n            <input type=\"button\" value=\"Add Customer\" (click)=\"createCustomer()\" /><br/>\n            \n        </form>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/methods/adminMethods/delete-company/delete-company.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/methods/adminMethods/delete-company/delete-company.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n        <form>     \n            <td>\n            <input type=\"id\" name=\"Id\" placeholder=\"Company Id\" [(ngModel)]=\"company.id\"/><br/>\n            <input type=\"button\" value=\"delete\" #id (click)=\"deleteCompany(company.id)\"/><br/>\n        \n                </td>\n        </form>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/methods/adminMethods/delete-customer/delete-customer.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/methods/adminMethods/delete-customer/delete-customer.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n        <form>     \n            <td>\n            <input type=\"id\" name=\"Id\" placeholder=\"Customer Id\" [(ngModel)]=\"customer.id\"/><br/>\n            <input type=\"button\" value=\"delete\" #id (click)=\"deleteCustomer(customer.id)\"/><br/>\n        \n                </td>\n        </form>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/methods/adminMethods/get-all-companies/get-all-companies.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/methods/adminMethods/get-all-companies/get-all-companies.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <table *ngIf= \"companies\">\n        <tr>\n            <th>Name</th>\n            <th>Email</th>\n            <th></th>\n        </tr>\n        <tr *ngFor=\"let company of companies\">\n            <td>{{company.name}}</td>\n            <td>{{company.email}}</td>\n            <td><input type=\"button\" value=\"delete\"  (click)=\"deleteCompany(company.id)\"/><br/></td>\n            <td><input type=\"button\" value=\"update\" name=\"update\" (click)=\"editorEnabler(company)\"></td>\n        </tr>\n        <tr *ngIf = \"updater==true\">\n            <td>\n                    <form>\n                            <input type=\"text\" name=\"companyName\"  [(ngModel)]=\"company.name\"/><br/>\n                            <input type=\"email\" name=\"companyEmail\"  [(ngModel)]=\"company.email\"/><br/>\n                            <input type=\"password\" name=\"companyPassword\" placeholder=\"Company password\" [(ngModel)]=\"company.password\"/><br/>\n                            <input type=\"button\" value=\"Update Company\" (click)=\"updateCompany(company)\" /><br/>\n                        </form>\n            </td>\n        </tr>\n\n    </table>\n     \n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/methods/adminMethods/get-all-customers/get-all-customers.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/methods/adminMethods/get-all-customers/get-all-customers.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n        <table *ngIf= \"customers\">\n            <tr>\n                <th>First Name</th><br/>\n                <th>Last Name</th><br/>\n                <th>Email</th><br/>\n                <th></th>\n            </tr>\n            <tr *ngFor=\"let customer of customers\">\n                <td>{{customer.firstName}}</td><br/>\n                <td>{{customer.lastName}}</td><br/>\n                <td>{{customer.email}}</td><br/>\n                <td><input type=\"button\" value=\"delete\" name=\"delete\" (click)=\"deleteCustomer(customer)\"/><br/></td>\n                <td><input type=\"button\" value=\"update\" name=\"update\" (click)=\"editorEnabler(customer)\"></td>\n\n            </tr>\n            <tr *ngIf= \"updater == true\">\n                <td>\n                        <form>\n                                <input type=\"text\" name=\"custFirstName\" placeholder=\"Customer First Name\" [(ngModel)]=\"customer.firstName\"/><br/>\n                                <input type=\"text\" name=\"custLastName\" placeholder=\"Customer Last Name\" [(ngModel)]=\"customer.lastName\"/><br/>\n                                <input type=\"email\" name=\"custEmail\" placeholder=\"Customer Email\" [(ngModel)]=\"customer.email\"/><br/>\n                                <input type=\"password\" name=\"custPasswrod\" placeholder=\"Customer password\" [(ngModel)]=\"customer.password\"/><br/>\n                                <input type=\"button\" value=\"Update Customer\" (click)=\"updateCustomer(customer)\" /><br/>\n                                \n                            </form>\n                </td>\n            </tr>\n    \n        </table>\n    </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/methods/adminMethods/get-one-company/get-one-company.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/methods/adminMethods/get-one-company/get-one-company.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <form>\n        <input type=\"id\" name=\"companyId\" placeholder=\"Company Id\" [(ngModel)]=\"company.id\" /><br />\n        <input type=\"button\" value=\"Get One Company\" (click)=\"getOneCompany()\" /><br />\n\n    </form>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/methods/adminMethods/get-one-customer/get-one-customer.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/methods/adminMethods/get-one-customer/get-one-customer.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n        <form>\n            <input type=\"id\" name=\"customerId\" placeholder=\"Customer Id\" [(ngModel)]=\"customer.id\" /><br />\n            <input type=\"button\" value=\"Get One Customer\" (click)=\"getOneCustomer()\" /><br />\n    \n        </form>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/methods/adminMethods/update-company/update-company.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/methods/adminMethods/update-company/update-company.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n        <input type=\"number\" #id placeholder=\"Company Id\" name=\"compId\">\n        <input type=\"button\" value=\"enter id\" (click)=\"loadComp(id.value)\" /><br/>\n        <form>\n            <input type=\"text\" name=\"companyName\"  [(ngModel)]=\"company.name\"/><br/>\n            <input type=\"email\" name=\"companyEmail\"  [(ngModel)]=\"company.email\"/><br/>\n            <input type=\"password\" name=\"companyPassword\" placeholder=\"Company password\" [(ngModel)]=\"company.password\"/><br/>\n            <input type=\"button\" value=\"Update Company\" (click)=\"updateCompany(company)\" /><br/>\n        </form>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/methods/adminMethods/update-customer/update-customer.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/methods/adminMethods/update-customer/update-customer.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n        <form>\n            <input type=\"number\" placeholder=\"Customer Id\" name=\"custId\"[(ngModel)]= customer.id>\n            <input type=\"text\" name=\"custFirstName\" placeholder=\"Customer First Name\" [(ngModel)]=\"customer.firstName\"/><br/>\n            <input type=\"text\" name=\"custLastName\" placeholder=\"Customer Last Name\" [(ngModel)]=\"customer.lastName\"/><br/>\n            <input type=\"email\" name=\"custEmail\" placeholder=\"Customer Email\" [(ngModel)]=\"customer.email\"/><br/>\n            <input type=\"password\" name=\"custPasswrod\" placeholder=\"Customer password\" [(ngModel)]=\"customer.password\"/><br/>\n            <input type=\"button\" value=\"Update Customer\" (click)=\"updateCustomer(customer)\" /><br/>\n            \n        </form>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/methods/companyMethods/add-coupon/add-coupon.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/methods/companyMethods/add-coupon/add-coupon.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n        <form>\n            Coupon Description: <br/> <input type=\"description\" name=\"coupDescription\" placeholder=\"Coupon Description\" [(ngModel)]=\"coupon.description\"/><br/>\n            Coupon Category:<br/> <select name=\"type\" [(ngModel)]=\"coupon.category\">\n                <option value=\"ELECTRICITY\">Electricity</option>\n                <option value=\"RESTURANT\">Resturant</option>\n                <option value=\"VACATION\">Vacation</option>\n                <option value=\"FOOD\">Food</option>\n                <option value=\"HOME\">Home</option>\n                <option value=\"CAMPING\">Camping</option>\n                <option value=\"MEDICAL\">Medical</option>\n            </select>\n            <br/>\n            \n            \n         \n            Coupon Title:    <br/><input type=\"title\" name=\"title\" placeholder=\"Title\" [(ngModel)]=\"coupon.title\"/><br/>\n            Coupon Price:    <br/><input type=\"number\" name=\"price\" placeholder=\"coupon price\" [(ngModel)]=\"coupon.price\"/><br/>\n            Coupon image:   <br/> <input type=\"string\" name=\"image\" placeholder=\"coupon image\" [(ngModel)]=\"coupon.image\"/><br/>\n            Coupon amount:   <br/> <input type=\"number\" name=\"amount\" placeholder=\"coupon amount\" [(ngModel)]=\"coupon.amount\"/><br/>\n            Start Date:      <br/><input type=\"date\" name=\"startDate\"  [(ngModel)]=\"coupon.startDate\" /><br/>\n            End Date:        <br/><input type=\"date\" name=\"endDate\"  [(ngModel)]=\"coupon.endDate\" /><br/>\n            <input type=\"button\" value=\"Add Coupon\" (click)=\"createCoupon()\" /><br/>\n            \n        </form>\n    </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/methods/companyMethods/delete-coupon/delete-coupon.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/methods/companyMethods/delete-coupon/delete-coupon.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n        <form>     \n            <td>\n            <input type=\"id\" name=\"Id\" placeholder=\"Coupon Id\" [(ngModel)]=\"coupon.id\"/><br/>\n            <input type=\"button\" value=\"delete\" #id (click)=\"deleteCoupon(coupon.id)\"/><br/>\n        \n                </td>\n        </form>\n    </div>\n    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/methods/companyMethods/get-company-coupons-category/get-company-coupons-category.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/methods/companyMethods/get-company-coupons-category/get-company-coupons-category.component.html ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n        <table *ngIf= \"companies\">\n            <tr>\n                <th>title</th>\n                <th>category</th>\n                <th>description</th>\n                <th>startDate</th>\n                <th>endDate</th>\n                <th>amount</th>\n                <th>price</th>\n                <th>image</th>\n            </tr>\n            <tr *ngFor=\"let coupon of coupons\">\n                <td>{{coupon.title}}</td>\n                <td>{{coupon.category}}</td>\n                <td>{{coupon.description}}</td>\n                <td>{{coupon.startDate}}</td>\n                <td>{{coupon.endDate}}</td>\n                <td>{{coupon.amount}}</td>\n                <td>{{coupon.price}}</td>\n                <td>{{coupon.image}}</td>\n         <td>\n                <input type=\"button\" value=\"delete\" #id (click)=\"deleteCoupon(coupon.id)\"/><br/>\n         </td>\n    \n            </tr>\n    \n        </table>\n         \n        </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/methods/companyMethods/get-company-coupons-price/get-company-coupons-price.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/methods/companyMethods/get-company-coupons-price/get-company-coupons-price.component.html ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n        <table *ngIf= \"companies\">\n            <tr>\n                <th>title</th>\n                <th>category</th>\n                <th>description</th>\n                <th>startDate</th>\n                <th>endDate</th>\n                <th>amount</th>\n                <th>price</th>\n                <th>image</th>\n            </tr>\n            <tr *ngFor=\"let coupon of coupons\">\n                <td>{{coupon.title}}</td>\n                <td>{{coupon.category}}</td>\n                <td>{{coupon.description}}</td>\n                <td>{{coupon.startDate}}</td>\n                <td>{{coupon.endDate}}</td>\n                <td>{{coupon.amount}}</td>\n                <td>{{coupon.price}}</td>\n                <td>{{coupon.image}}</td>\n         <td>\n                <input type=\"button\" value=\"delete\" #id (click)=\"deleteCoupon(coupon.id)\"/><br/>\n         </td>\n    \n            </tr>\n    \n        </table>\n         \n        </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/methods/companyMethods/get-company-coupons/get-company-coupons.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/methods/companyMethods/get-company-coupons/get-company-coupons.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n    <table *ngIf=\"coupons\">\n        <tr class=\"form-group\">\n           <br/> Min-Price: <input type=\"number\" class=\"form-control\" placeholder=\"search by price\"\n                [(ngModel)]=\"searchPrice\" />\n        <tr class=\"form-group\">\n            Category filter: <select type=\"category\" class=\"form-control\" placeholder=\"search by category\"\n                [(ngModel)]=\"searchTerm\">\n                <option value=\"ELECTRICITY\">Electricity</option>\n                <option value=\"RESTURANT\">Resturant</option>\n                <option value=\"VACATION\">Vacation</option>\n                <option value=\"FOOD\">Food</option>\n                <option value=\"HOME\">Home</option>\n                <option value=\"CAMPING\">Camping</option>\n                <option value=\"MEDICAL\">Medical</option>\n            </select>\n        </tr>\n        <tr>\n            <th>Title</th>\n            <th>Category</th>\n            <th>Description</th>\n            <th>Start date</th>\n            <th>End date</th>\n            <th>Amount</th>\n            <th>Price</th>\n            <th>Image</th>\n            <th></th>\n        </tr>\n\n\n        <tr *ngFor=\"let coupon of coupons| priceFilter:searchPrice| categoryFilter:searchTerm\">\n            <td>{{coupon.title}}</td>\n            <td>{{coupon.category}}</td>\n            <td>{{coupon.description}}</td>\n            <td>{{coupon.startDate}}</td>\n            <td>{{coupon.endDate}}</td>\n            <td>{{coupon.amount}}</td>\n            <td>{{coupon.price}}</td>\n            <td>{{coupon.image}}</td>\n            <td><input type=\"button\" value=\"delete\" (click)=\"deleteCoupon(coupon.id)\" /><br /></td>\n            <td><input type=\"button\" value=\"update\" name=\"update\" (click)=\"editorEnabler(coupon)\"></td>\n        </tr>\n        <tr *ngIf=\"updater==true\">\n            <td>\n                <form>\n                    <input type=\"description\" name=\"coupDescription\" placeholder=\"Description\"\n                        [(ngModel)]=\"coupon.description\" /><br />\n                    <select name=\"category\" [(ngModel)]=\"coupon.category\">\n                        <option value=\"ELECTRICITY\">Electricity</option>\n                        <option value=\"RESTURANT\">Resturant</option>\n                        <option value=\"VACATION\">Vacation</option>\n                        <option value=\"FOOD\">Food</option>\n                        <option value=\"HOME\">Home</option>\n                        <option value=\"CAMPING\">Camping</option>\n                        <option value=\"MEDICAL\">Medical</option>\n                    </select>\n                    <input type=\"description\" name=\"description\" placeholder=\"description\"\n                        [(ngModel)]=\"coupon.description\" /><br />\n                    <input type=\"title\" name=\"title\" placeholder=\"Title\" [(ngModel)]=\"coupon.title\" /><br />\n                    <input type=\"date\" name=\"startDate\" placeholder=\"startDate\" [(ngModel)]=\"coupon.startDate\" /><br />\n                    <input type=\"date\" name=\"endDate\" placeholder=\"endDate\" [(ngModel)]=\"coupon.endDate\" /><br />\n                    <input type=\"number\" name=\"price\" placeholder=\"price\" [(ngModel)]=\"coupon.price\" /><br />\n                    <input type=\"string\" name=\"image\" placeholder=\"image\" [(ngModel)]=\"coupon.image\" /><br />\n                    <input type=\"button\" value=\"Update Coupon\" (click)=\"updateCoupon(coupon)\" /><br />\n\n                </form>\n            </td>\n        </tr>\n\n    </table>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/methods/companyMethods/update-coupon/update-coupon.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/methods/companyMethods/update-coupon/update-coupon.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n        <form>\n            <input type=\"description\" name=\"coupDescription\" placeholder=\"Description\" [(ngModel)]=\"coupon.description\"/><br/>\n            <input type=\"category\" name=\"category\" placeholder=\"Category\" [(ngModel)]=\"coupon.category\"/><br/>\n            <input type=\"title\" name=\"title\" placeholder=\"Title\" [(ngModel)]=\"coupon.title\"/><br/>\n            <input type=\"date\" value=\"startDate\" (click)=\"coupon.startDate()\" /><br/>\n            <input type=\"date\" name=\"endDate\" (click)=\"coupon.endDate()\" /><br/>\n            <input type=\"number\" name=\"price\" (click)=\"coupon.price()\" /><br/>\n            <input type=\"string\" name=\"image\" (click)=\"coupon.image()\" /><br/>\n            \n        </form>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/methods/customerMethods/get-all-coupons/get-all-coupons.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/methods/customerMethods/get-all-coupons/get-all-coupons.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <table *ngIf=\"coupons\">\r\n            <tr class=\"form-group\">\r\n               <br/> Min-Price: <input type=\"number\" class=\"form-control\" placeholder=\"search by price\"\r\n                    [(ngModel)]=\"searchPrice\" />\r\n            <tr class=\"form-group\">\r\n                Category filter: <select type=\"category\" class=\"form-control\" placeholder=\"search by category\"\r\n                    [(ngModel)]=\"searchTerm\">\r\n                    <option value=\"ELECTRICITY\">Electricity</option>\r\n                    <option value=\"RESTURANT\">Resturant</option>\r\n                    <option value=\"VACATION\">Vacation</option>\r\n                    <option value=\"FOOD\">Food</option>\r\n                    <option value=\"HOME\">Home</option>\r\n                    <option value=\"CAMPING\">Camping</option>\r\n                    <option value=\"MEDICAL\">Medical</option>\r\n                </select>\r\n            </tr>\r\n            <tr>\r\n                <th>Title</th>\r\n                <th>Category</th>\r\n                <th>Description</th>\r\n                <th>Start date</th>\r\n                <th>End date</th>\r\n                <th>Amount</th>\r\n                <th>Price</th>\r\n                <th>Image</th>\r\n                <th></th>\r\n            </tr>\r\n    \r\n    \r\n            <tr *ngFor=\"let coupon of coupons| priceFilter:searchPrice| categoryFilter:searchTerm\">\r\n                <td>{{coupon.title}}</td>\r\n                <td>{{coupon.category}}</td>\r\n                <td>{{coupon.description}}</td>\r\n                <td>{{coupon.startDate}}</td>\r\n                <td>{{coupon.endDate}}</td>\r\n                <td>{{coupon.amount}}</td>\r\n                <td>{{coupon.price}}</td>\r\n                <td>{{coupon.image}}</td>\r\n                <td><input type=\"button\" value=\"delete\" (click)=\"deleteCoupon(coupon.id)\" /><br /></td>\r\n                <td><input type=\"button\" value=\"update\" name=\"update\" (click)=\"editorEnabler(coupon)\"></td>\r\n            </tr>\r\n\r\n    </table>\r\n     \r\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/methods/customerMethods/get-customer-coupons-category/get-customer-coupons-category.component.html":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/methods/customerMethods/get-customer-coupons-category/get-customer-coupons-category.component.html ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n        <table *ngIf= \"customers\">\n            <tr>\n                <th>title</th>\n                <th>category</th>\n                <th>description</th>\n                <th>startDate</th>\n                <th>endDate</th>\n                <th>amount</th>\n                <th>price</th>\n                <th>image</th>\n            </tr>\n            <tr *ngFor=\"let customer of customers\">\n                <td>{{coupon.title}}</td>\n                <td>{{coupon.category}}</td>\n                <td>{{coupon.description}}</td>\n                <td>{{coupon.startDate}}</td>\n                <td>{{coupon.endDate}}</td>\n                <td>{{coupon.amount}}</td>\n                <td>{{coupon.price}}</td>\n                <td>{{coupon.image}}</td>\n\n    \n            </tr>\n    \n        </table>\n         \n        </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/methods/customerMethods/get-customer-coupons-price/get-customer-coupons-price.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/methods/customerMethods/get-customer-coupons-price/get-customer-coupons-price.component.html ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n        <table *ngIf= \"customers\">\n            <tr>\n                <th>title</th>\n                <th>category</th>\n                <th>description</th>\n                <th>startDate</th>\n                <th>endDate</th>\n                <th>amount</th>\n                <th>price</th>\n                <th>image</th>\n            </tr>\n            <tr *ngFor=\"let customer of customers\">\n                <td>{{coupon.title}}</td>\n                <td>{{coupon.category}}</td>\n                <td>{{coupon.description}}</td>\n                <td>{{coupon.startDate}}</td>\n                <td>{{coupon.endDate}}</td>\n                <td>{{coupon.amount}}</td>\n                <td>{{coupon.price}}</td>\n                <td>{{coupon.image}}</td>\n\n    \n            </tr>\n    \n        </table>\n         \n        </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/methods/customerMethods/get-customer-coupons/get-customer-coupons.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/methods/customerMethods/get-customer-coupons/get-customer-coupons.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n        <table *ngIf=\"coupons\">\n                <tr class=\"form-group\">\n                   <br/> Min-Price: <input type=\"number\" placeholder=\"search by price\"\n                        [(ngModel)]=\"searchPrice\" />\n                <tr class=\"form-group\">\n                    Category filter: <select type=\"category\" placeholder=\"search by category\"\n                        [(ngModel)]=\"searchTerm\">\n                        <option value=\"ELECTRICITY\">Electricity</option>\n                        <option value=\"RESTURANT\">Resturant</option>\n                        <option value=\"VACATION\">Vacation</option>\n                        <option value=\"FOOD\">Food</option>\n                        <option value=\"HOME\">Home</option>\n                        <option value=\"CAMPING\">Camping</option>\n                        <option value=\"MEDICAL\">Medical</option>\n                    </select>\n                </tr>\n                <tr>\n                    <th>Title</th>\n                    <th>Category</th>\n                    <th>Description</th>\n                    <th>Start date</th>\n                    <th>End date</th>\n                    <th>Amount</th>\n                    <th>Price</th>\n                    <th>Image</th>\n                    <th></th>\n                </tr>\n        \n        \n                <tr *ngFor=\"let coupon of coupons| priceFilter:searchPrice| categoryFilter:searchTerm\">\n                    <td>{{coupon.title}}</td>\n                    <td>{{coupon.category}}</td>\n                    <td>{{coupon.description}}</td>\n                    <td>{{coupon.startDate}}</td>\n                    <td>{{coupon.endDate}}</td>\n                    <td>{{coupon.amount}}</td>\n                    <td>{{coupon.price}}</td>\n                    <td>{{coupon.image}}</td>\n                </tr>\n    \n        </table>\n         \n        </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/methods/customerMethods/get-customer-details/get-customer-details.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/methods/customerMethods/get-customer-details/get-customer-details.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div >\n        <tr *ngIf=\"customer\">\n              <br/><br/>  <td >{{customer.email}}</td>  <br/> \n              <br/><br/>  <td>{{customer.firstName}}</td>  <br/><br/>  \n              <br/><br/>  <td>{{customer.lastName}}</td>  <br/><br/>  \n              <br/><br/>  <td>{{customer.password}}</td>  <br/><br/>  \n              <br/><br/>  <td>{{customer.id}}</td>  <br/><br/>  \n      \n            </tr>\n            </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/methods/customerMethods/purchase-coupon/purchase-coupon.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/methods/customerMethods/purchase-coupon/purchase-coupon.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n    <table *ngIf=\"coupons\">\n        <tr class=\"form-group\">\n            <br /> Min-Price: <input type=\"number\" class=\"form-control\" placeholder=\"search by price\"\n                [(ngModel)]=\"searchPrice\" />\n        <tr class=\"form-group\">\n            Category filter: <select type=\"category\" class=\"form-control\" placeholder=\"search by category\"\n                [(ngModel)]=\"searchTerm\">\n                <option value=\"ELECTRICITY\">Electricity</option>\n                <option value=\"RESTURANT\">Resturant</option>\n                <option value=\"VACATION\">Vacation</option>\n                <option value=\"FOOD\">Food</option>\n                <option value=\"HOME\">Home</option>\n                <option value=\"CAMPING\">Camping</option>\n                <option value=\"MEDICAL\">Medical</option>\n            </select>\n        </tr>\n        <tr>\n            <th>Title</th>\n            <th>Category</th>\n            <th>Description</th>\n            <th>Start date</th>\n            <th>End date</th>\n            <th>Amount</th>\n            <th>Price</th>\n            <th>Image</th>\n            <th></th>\n        </tr>\n\n\n        <tr *ngFor=\"let coupon of coupons| priceFilter:searchPrice| categoryFilter:searchTerm\">\n            <td>{{coupon.title}}</td>\n            <td>{{coupon.category}}</td>\n            <td>{{coupon.description}}</td>\n            <td>{{coupon.startDate}}</td>\n            <td>{{coupon.endDate}}</td>\n            <td>{{coupon.amount}}</td>\n            <td>{{coupon.price}}</td>\n            <td>{{coupon.image}}</td>\n            <td><input type=\"button\" value=\"purchaseCoupon\" (click)=\"purchaseCoupon(coupon)\" /><br /></td>\n        </tr>\n\n    </table>\n\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/customer/customer.component */ "./src/app/components/customer/customer.component.ts");
/* harmony import */ var _components_company_company_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/company/company.component */ "./src/app/components/company/company.component.ts");
/* harmony import */ var _components_methods_adminMethods_get_all_companies_get_all_companies_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/methods/adminMethods/get-all-companies/get-all-companies.component */ "./src/app/components/methods/adminMethods/get-all-companies/get-all-companies.component.ts");
/* harmony import */ var _components_methods_adminMethods_get_all_customers_get_all_customers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/methods/adminMethods/get-all-customers/get-all-customers.component */ "./src/app/components/methods/adminMethods/get-all-customers/get-all-customers.component.ts");
/* harmony import */ var _components_methods_adminMethods_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/methods/adminMethods/add-company/add-company.component */ "./src/app/components/methods/adminMethods/add-company/add-company.component.ts");
/* harmony import */ var _components_methods_adminMethods_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/methods/adminMethods/add-customer/add-customer.component */ "./src/app/components/methods/adminMethods/add-customer/add-customer.component.ts");
/* harmony import */ var _components_methods_adminMethods_delete_company_delete_company_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/methods/adminMethods/delete-company/delete-company.component */ "./src/app/components/methods/adminMethods/delete-company/delete-company.component.ts");
/* harmony import */ var _components_methods_adminMethods_delete_customer_delete_customer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/methods/adminMethods/delete-customer/delete-customer.component */ "./src/app/components/methods/adminMethods/delete-customer/delete-customer.component.ts");
/* harmony import */ var _components_methods_adminMethods_get_one_company_get_one_company_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/methods/adminMethods/get-one-company/get-one-company.component */ "./src/app/components/methods/adminMethods/get-one-company/get-one-company.component.ts");
/* harmony import */ var _components_methods_adminMethods_update_company_update_company_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/methods/adminMethods/update-company/update-company.component */ "./src/app/components/methods/adminMethods/update-company/update-company.component.ts");
/* harmony import */ var _components_methods_adminMethods_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/methods/adminMethods/update-customer/update-customer.component */ "./src/app/components/methods/adminMethods/update-customer/update-customer.component.ts");
/* harmony import */ var _components_methods_adminMethods_get_one_customer_get_one_customer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/methods/adminMethods/get-one-customer/get-one-customer.component */ "./src/app/components/methods/adminMethods/get-one-customer/get-one-customer.component.ts");
/* harmony import */ var _components_methods_companyMethods_add_coupon_add_coupon_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/methods/companyMethods/add-coupon/add-coupon.component */ "./src/app/components/methods/companyMethods/add-coupon/add-coupon.component.ts");
/* harmony import */ var _components_methods_companyMethods_delete_coupon_delete_coupon_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/methods/companyMethods/delete-coupon/delete-coupon.component */ "./src/app/components/methods/companyMethods/delete-coupon/delete-coupon.component.ts");
/* harmony import */ var _components_methods_companyMethods_get_company_coupons_get_company_coupons_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/methods/companyMethods/get-company-coupons/get-company-coupons.component */ "./src/app/components/methods/companyMethods/get-company-coupons/get-company-coupons.component.ts");
/* harmony import */ var _components_methods_companyMethods_get_company_coupons_category_get_company_coupons_category_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/methods/companyMethods/get-company-coupons-category/get-company-coupons-category.component */ "./src/app/components/methods/companyMethods/get-company-coupons-category/get-company-coupons-category.component.ts");
/* harmony import */ var _components_methods_companyMethods_get_company_coupons_price_get_company_coupons_price_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/methods/companyMethods/get-company-coupons-price/get-company-coupons-price.component */ "./src/app/components/methods/companyMethods/get-company-coupons-price/get-company-coupons-price.component.ts");
/* harmony import */ var _components_methods_companyMethods_update_coupon_update_coupon_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/methods/companyMethods/update-coupon/update-coupon.component */ "./src/app/components/methods/companyMethods/update-coupon/update-coupon.component.ts");
/* harmony import */ var _components_methods_customerMethods_get_customer_coupons_get_customer_coupons_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/methods/customerMethods/get-customer-coupons/get-customer-coupons.component */ "./src/app/components/methods/customerMethods/get-customer-coupons/get-customer-coupons.component.ts");
/* harmony import */ var _components_methods_customerMethods_get_customer_coupons_category_get_customer_coupons_category_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/methods/customerMethods/get-customer-coupons-category/get-customer-coupons-category.component */ "./src/app/components/methods/customerMethods/get-customer-coupons-category/get-customer-coupons-category.component.ts");
/* harmony import */ var _components_methods_customerMethods_get_customer_coupons_price_get_customer_coupons_price_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/methods/customerMethods/get-customer-coupons-price/get-customer-coupons-price.component */ "./src/app/components/methods/customerMethods/get-customer-coupons-price/get-customer-coupons-price.component.ts");
/* harmony import */ var _components_methods_customerMethods_get_customer_details_get_customer_details_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/methods/customerMethods/get-customer-details/get-customer-details.component */ "./src/app/components/methods/customerMethods/get-customer-details/get-customer-details.component.ts");
/* harmony import */ var _components_methods_customerMethods_purchase_coupon_purchase_coupon_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/methods/customerMethods/purchase-coupon/purchase-coupon.component */ "./src/app/components/methods/customerMethods/purchase-coupon/purchase-coupon.component.ts");
/* harmony import */ var _components_methods_customerMethods_get_all_coupons_get_all_coupons_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/methods/customerMethods/get-all-coupons/get-all-coupons.component */ "./src/app/components/methods/customerMethods/get-all-coupons/get-all-coupons.component.ts");





























const routes = [
    { path: 'admin', component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"] },
    { path: 'company', component: _components_company_company_component__WEBPACK_IMPORTED_MODULE_6__["CompanyComponent"] },
    { path: 'customer', component: _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_5__["CustomerComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'add-company', component: _components_methods_adminMethods_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_9__["AddCompanyComponent"] },
    { path: 'add-customer', component: _components_methods_adminMethods_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_10__["AddCustomerComponent"] },
    { path: 'delete-company', component: _components_methods_adminMethods_delete_company_delete_company_component__WEBPACK_IMPORTED_MODULE_11__["DeleteCompanyComponent"] },
    { path: 'delete-customer', component: _components_methods_adminMethods_delete_customer_delete_customer_component__WEBPACK_IMPORTED_MODULE_12__["DeleteCustomerComponent"] },
    { path: 'get-one-customer', component: _components_methods_adminMethods_get_one_customer_get_one_customer_component__WEBPACK_IMPORTED_MODULE_16__["GetOneCustomerComponent"] },
    { path: 'get-one-company', component: _components_methods_adminMethods_get_one_company_get_one_company_component__WEBPACK_IMPORTED_MODULE_13__["GetOneCompanyComponent"] },
    { path: 'update-company', component: _components_methods_adminMethods_update_company_update_company_component__WEBPACK_IMPORTED_MODULE_14__["UpdateCompanyComponent"] },
    { path: 'update-customer', component: _components_methods_adminMethods_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_15__["UpdateCustomerComponent"] },
    { path: 'get-all-companies', component: _components_methods_adminMethods_get_all_companies_get_all_companies_component__WEBPACK_IMPORTED_MODULE_7__["GetAllCompaniesComponent"] },
    { path: 'get-all-customers', component: _components_methods_adminMethods_get_all_customers_get_all_customers_component__WEBPACK_IMPORTED_MODULE_8__["GetAllCustomersComponent"] },
    { path: 'add-coupon', component: _components_methods_companyMethods_add_coupon_add_coupon_component__WEBPACK_IMPORTED_MODULE_17__["AddCouponComponent"] },
    { path: 'delete-coupon', component: _components_methods_companyMethods_delete_coupon_delete_coupon_component__WEBPACK_IMPORTED_MODULE_18__["DeleteCouponComponent"] },
    { path: 'get-company-coupons', component: _components_methods_companyMethods_get_company_coupons_get_company_coupons_component__WEBPACK_IMPORTED_MODULE_19__["GetCompanyCouponsComponent"] },
    { path: 'get-company-coupons-price', component: _components_methods_companyMethods_get_company_coupons_price_get_company_coupons_price_component__WEBPACK_IMPORTED_MODULE_21__["GetCompanyCouponsPriceComponent"] },
    { path: 'get-company-coupons-category', component: _components_methods_companyMethods_get_company_coupons_category_get_company_coupons_category_component__WEBPACK_IMPORTED_MODULE_20__["GetCompanyCouponsCategoryComponent"] },
    { path: 'update-coupon', component: _components_methods_companyMethods_update_coupon_update_coupon_component__WEBPACK_IMPORTED_MODULE_22__["UpdateCouponComponent"] },
    { path: 'get-customer-coupons', component: _components_methods_customerMethods_get_customer_coupons_get_customer_coupons_component__WEBPACK_IMPORTED_MODULE_23__["GetCustomerCouponsComponent"] },
    { path: 'get-customer-coupons-category', component: _components_methods_customerMethods_get_customer_coupons_category_get_customer_coupons_category_component__WEBPACK_IMPORTED_MODULE_24__["GetCustomerCouponsCategoryComponent"] },
    { path: 'get-customer-coupons-price', component: _components_methods_customerMethods_get_customer_coupons_price_get_customer_coupons_price_component__WEBPACK_IMPORTED_MODULE_25__["GetCustomerCouponsPriceComponent"] },
    { path: 'get-customer-details', component: _components_methods_customerMethods_get_customer_details_get_customer_details_component__WEBPACK_IMPORTED_MODULE_26__["GetCustomerDetailsComponent"] },
    { path: 'purchase-coupon', component: _components_methods_customerMethods_purchase_coupon_purchase_coupon_component__WEBPACK_IMPORTED_MODULE_27__["PurchaseCouponComponent"] },
    { path: 'get-all-coupons', component: _components_methods_customerMethods_get_all_coupons_get_all_coupons_component__WEBPACK_IMPORTED_MODULE_28__["GetAllCouponsComponent"] },
    { path: "", redirectTo: "login", pathMatch: "full" }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/layout/layout.component */ "./src/app/components/layout/layout.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/customer/customer.component */ "./src/app/components/customer/customer.component.ts");
/* harmony import */ var _components_company_company_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/company/company.component */ "./src/app/components/company/company.component.ts");
/* harmony import */ var _components_methods_adminMethods_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/methods/adminMethods/add-company/add-company.component */ "./src/app/components/methods/adminMethods/add-company/add-company.component.ts");
/* harmony import */ var _components_methods_adminMethods_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/methods/adminMethods/add-customer/add-customer.component */ "./src/app/components/methods/adminMethods/add-customer/add-customer.component.ts");
/* harmony import */ var _components_methods_adminMethods_delete_customer_delete_customer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/methods/adminMethods/delete-customer/delete-customer.component */ "./src/app/components/methods/adminMethods/delete-customer/delete-customer.component.ts");
/* harmony import */ var _components_methods_adminMethods_delete_company_delete_company_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/methods/adminMethods/delete-company/delete-company.component */ "./src/app/components/methods/adminMethods/delete-company/delete-company.component.ts");
/* harmony import */ var _components_methods_adminMethods_get_all_companies_get_all_companies_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/methods/adminMethods/get-all-companies/get-all-companies.component */ "./src/app/components/methods/adminMethods/get-all-companies/get-all-companies.component.ts");
/* harmony import */ var _components_methods_adminMethods_get_all_customers_get_all_customers_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/methods/adminMethods/get-all-customers/get-all-customers.component */ "./src/app/components/methods/adminMethods/get-all-customers/get-all-customers.component.ts");
/* harmony import */ var _components_methods_adminMethods_get_one_company_get_one_company_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/methods/adminMethods/get-one-company/get-one-company.component */ "./src/app/components/methods/adminMethods/get-one-company/get-one-company.component.ts");
/* harmony import */ var _components_methods_adminMethods_get_one_customer_get_one_customer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/methods/adminMethods/get-one-customer/get-one-customer.component */ "./src/app/components/methods/adminMethods/get-one-customer/get-one-customer.component.ts");
/* harmony import */ var _components_methods_adminMethods_update_company_update_company_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/methods/adminMethods/update-company/update-company.component */ "./src/app/components/methods/adminMethods/update-company/update-company.component.ts");
/* harmony import */ var _components_methods_adminMethods_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/methods/adminMethods/update-customer/update-customer.component */ "./src/app/components/methods/adminMethods/update-customer/update-customer.component.ts");
/* harmony import */ var _components_methods_companyMethods_get_company_coupons_get_company_coupons_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/methods/companyMethods/get-company-coupons/get-company-coupons.component */ "./src/app/components/methods/companyMethods/get-company-coupons/get-company-coupons.component.ts");
/* harmony import */ var _components_methods_companyMethods_add_coupon_add_coupon_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/methods/companyMethods/add-coupon/add-coupon.component */ "./src/app/components/methods/companyMethods/add-coupon/add-coupon.component.ts");
/* harmony import */ var _components_methods_companyMethods_delete_coupon_delete_coupon_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/methods/companyMethods/delete-coupon/delete-coupon.component */ "./src/app/components/methods/companyMethods/delete-coupon/delete-coupon.component.ts");
/* harmony import */ var _components_methods_companyMethods_get_company_coupons_category_get_company_coupons_category_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/methods/companyMethods/get-company-coupons-category/get-company-coupons-category.component */ "./src/app/components/methods/companyMethods/get-company-coupons-category/get-company-coupons-category.component.ts");
/* harmony import */ var _components_methods_companyMethods_get_company_coupons_price_get_company_coupons_price_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/methods/companyMethods/get-company-coupons-price/get-company-coupons-price.component */ "./src/app/components/methods/companyMethods/get-company-coupons-price/get-company-coupons-price.component.ts");
/* harmony import */ var _components_methods_companyMethods_update_coupon_update_coupon_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/methods/companyMethods/update-coupon/update-coupon.component */ "./src/app/components/methods/companyMethods/update-coupon/update-coupon.component.ts");
/* harmony import */ var _components_methods_customerMethods_get_customer_coupons_get_customer_coupons_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/methods/customerMethods/get-customer-coupons/get-customer-coupons.component */ "./src/app/components/methods/customerMethods/get-customer-coupons/get-customer-coupons.component.ts");
/* harmony import */ var _components_methods_customerMethods_get_customer_coupons_category_get_customer_coupons_category_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/methods/customerMethods/get-customer-coupons-category/get-customer-coupons-category.component */ "./src/app/components/methods/customerMethods/get-customer-coupons-category/get-customer-coupons-category.component.ts");
/* harmony import */ var _components_methods_customerMethods_get_customer_coupons_price_get_customer_coupons_price_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/methods/customerMethods/get-customer-coupons-price/get-customer-coupons-price.component */ "./src/app/components/methods/customerMethods/get-customer-coupons-price/get-customer-coupons-price.component.ts");
/* harmony import */ var _components_methods_customerMethods_get_customer_details_get_customer_details_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/methods/customerMethods/get-customer-details/get-customer-details.component */ "./src/app/components/methods/customerMethods/get-customer-details/get-customer-details.component.ts");
/* harmony import */ var _components_methods_customerMethods_purchase_coupon_purchase_coupon_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/methods/customerMethods/purchase-coupon/purchase-coupon.component */ "./src/app/components/methods/customerMethods/purchase-coupon/purchase-coupon.component.ts");
/* harmony import */ var _components_methods_category_filter_pipe__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/methods/category-filter.pipe */ "./src/app/components/methods/category-filter.pipe.ts");
/* harmony import */ var _components_methods_price_filter_pipe__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/methods/price-filter.pipe */ "./src/app/components/methods/price-filter.pipe.ts");
/* harmony import */ var _components_methods_customerMethods_get_all_coupons_get_all_coupons_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/methods/customerMethods/get-all-coupons/get-all-coupons.component */ "./src/app/components/methods/customerMethods/get-all-coupons/get-all-coupons.component.ts");






































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
            _components_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
            _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_11__["AdminComponent"],
            _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_12__["CustomerComponent"],
            _components_company_company_component__WEBPACK_IMPORTED_MODULE_13__["CompanyComponent"],
            _components_methods_adminMethods_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_14__["AddCompanyComponent"],
            _components_methods_adminMethods_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_15__["AddCustomerComponent"],
            _components_methods_adminMethods_delete_customer_delete_customer_component__WEBPACK_IMPORTED_MODULE_16__["DeleteCustomerComponent"],
            _components_methods_adminMethods_delete_company_delete_company_component__WEBPACK_IMPORTED_MODULE_17__["DeleteCompanyComponent"],
            _components_methods_adminMethods_get_all_companies_get_all_companies_component__WEBPACK_IMPORTED_MODULE_18__["GetAllCompaniesComponent"],
            _components_methods_adminMethods_get_all_customers_get_all_customers_component__WEBPACK_IMPORTED_MODULE_19__["GetAllCustomersComponent"],
            _components_methods_adminMethods_get_one_company_get_one_company_component__WEBPACK_IMPORTED_MODULE_20__["GetOneCompanyComponent"],
            _components_methods_adminMethods_get_one_customer_get_one_customer_component__WEBPACK_IMPORTED_MODULE_21__["GetOneCustomerComponent"],
            _components_methods_adminMethods_update_company_update_company_component__WEBPACK_IMPORTED_MODULE_22__["UpdateCompanyComponent"],
            _components_methods_adminMethods_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_23__["UpdateCustomerComponent"],
            _components_methods_companyMethods_get_company_coupons_get_company_coupons_component__WEBPACK_IMPORTED_MODULE_24__["GetCompanyCouponsComponent"],
            _components_methods_companyMethods_add_coupon_add_coupon_component__WEBPACK_IMPORTED_MODULE_25__["AddCouponComponent"],
            _components_methods_companyMethods_delete_coupon_delete_coupon_component__WEBPACK_IMPORTED_MODULE_26__["DeleteCouponComponent"],
            _components_methods_companyMethods_get_company_coupons_category_get_company_coupons_category_component__WEBPACK_IMPORTED_MODULE_27__["GetCompanyCouponsCategoryComponent"],
            _components_methods_companyMethods_get_company_coupons_price_get_company_coupons_price_component__WEBPACK_IMPORTED_MODULE_28__["GetCompanyCouponsPriceComponent"],
            _components_methods_companyMethods_update_coupon_update_coupon_component__WEBPACK_IMPORTED_MODULE_29__["UpdateCouponComponent"],
            _components_methods_customerMethods_get_customer_coupons_get_customer_coupons_component__WEBPACK_IMPORTED_MODULE_30__["GetCustomerCouponsComponent"],
            _components_methods_customerMethods_get_customer_coupons_category_get_customer_coupons_category_component__WEBPACK_IMPORTED_MODULE_31__["GetCustomerCouponsCategoryComponent"],
            _components_methods_customerMethods_get_customer_coupons_price_get_customer_coupons_price_component__WEBPACK_IMPORTED_MODULE_32__["GetCustomerCouponsPriceComponent"],
            _components_methods_customerMethods_get_customer_details_get_customer_details_component__WEBPACK_IMPORTED_MODULE_33__["GetCustomerDetailsComponent"],
            _components_methods_customerMethods_purchase_coupon_purchase_coupon_component__WEBPACK_IMPORTED_MODULE_34__["PurchaseCouponComponent"],
            _components_methods_category_filter_pipe__WEBPACK_IMPORTED_MODULE_35__["categoryFilterPipe"],
            _components_methods_price_filter_pipe__WEBPACK_IMPORTED_MODULE_36__["priceFilterPipe"],
            _components_methods_customerMethods_get_all_coupons_get_all_coupons_component__WEBPACK_IMPORTED_MODULE_37__["GetAllCouponsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/admin/admin.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/admin/admin.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminComponent = class AdminComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/admin/admin.component.html"),
        styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/components/admin/admin.component.css")]
    })
], AdminComponent);



/***/ }),

/***/ "./src/app/components/company/company.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/company/company.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGFueS9jb21wYW55LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/company/company.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/company/company.component.ts ***!
  \*********************************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CompanyComponent = class CompanyComponent {
    constructor() { }
    ngOnInit() {
    }
};
CompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-company',
        template: __webpack_require__(/*! raw-loader!./company.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/company/company.component.html"),
        styles: [__webpack_require__(/*! ./company.component.css */ "./src/app/components/company/company.component.css")]
    })
], CompanyComponent);



/***/ }),

/***/ "./src/app/components/customer/customer.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/customer/customer.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VzdG9tZXIvY3VzdG9tZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/customer/customer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/customer/customer.component.ts ***!
  \***********************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CustomerComponent = class CustomerComponent {
    constructor() { }
    ngOnInit() {
    }
};
CustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customer',
        template: __webpack_require__(/*! raw-loader!./customer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/customer/customer.component.html"),
        styles: [__webpack_require__(/*! ./customer.component.css */ "./src/app/components/customer/customer.component.css")]
    })
], CustomerComponent);



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div{\r\n    height: 100%;\r\n}\r\np{\r\n    margin: 0;\r\n    color:midnightblue;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxTQUFTO0lBQ1Qsa0JBQWtCOztBQUV0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2e1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbnB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjptaWRuaWdodGJsdWU7XHJcblxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a{\r\n    font-size: 5vh;\r\n    color: black;\r\n    margin: 0 10px;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    -webkit-transform: translateY(50%);\r\n            transform: translateY(50%);\r\n}\r\na:hover{\r\n    color:midnightblue;\r\n    -webkit-animation: fade 8s;\r\n            animation: fade 8s;\r\n}\r\ndiv{\r\n    border: 3px black;\r\n}\r\n@-webkit-keyframes fade{\r\n\r\n    from {opacity:0.6;}\r\n    to {opacity:1;}\r\n}\r\n@keyframes fade{\r\n\r\n    from {opacity:0.6;}\r\n    to {opacity:1;}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGtDQUEwQjtZQUExQiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQiwwQkFBa0I7WUFBbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFJQTs7SUFFSSxNQUFNLFdBQVcsQ0FBQztJQUNsQixJQUFJLFNBQVMsQ0FBQztBQUNsQjtBQUpBOztJQUVJLE1BQU0sV0FBVyxDQUFDO0lBQ2xCLElBQUksU0FBUyxDQUFDO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhe1xyXG4gICAgZm9udC1zaXplOiA1dmg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xyXG59XHJcbmE6aG92ZXJ7XHJcbiAgICBjb2xvcjptaWRuaWdodGJsdWU7XHJcbiAgICBhbmltYXRpb246IGZhZGUgOHM7XHJcbn1cclxuZGl2e1xyXG4gICAgYm9yZGVyOiAzcHggYmxhY2s7XHJcbn1cclxuXHJcblxyXG5cclxuQGtleWZyYW1lcyBmYWRle1xyXG5cclxuICAgIGZyb20ge29wYWNpdHk6MC42O31cclxuICAgIHRvIHtvcGFjaXR5OjE7fVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let HeaderComponent = class HeaderComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
    }
    ngDoCheck() {
        this.navChooser = sessionStorage.typeVar;
    }
    ngOnInit() {
        this.navChooser = sessionStorage.typeVar;
    }
    logout() {
        sessionStorage.token = null;
        sessionStorage.typeVar = null;
        this.router.navigate(['login']);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/layout/layout.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/layout/layout.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section{\r\n    height: 100vh;\r\n    background-color: rgb(218, 218, 218);\r\n    text-align: center;\r\n    box-sizing: border-box;\r\n    display: grid;\r\n    grid-template-rows: 23% 70% 7%;\r\n    grid-auto-columns: repeat(12, 1fr)\r\n}\r\nheader{\r\n    grid-column: span 12;\r\n    border: 2px solid black;\r\n    font-family: 'UnifrakturCook', cursive;\r\n}\r\nmain{\r\n    grid-column: span 12;\r\n    border: 2px solid black;\r\n    font-family: 'Pirata One', cursive;\r\n    \r\n    \r\n}\r\nfooter{\r\n    grid-column: span 12;\r\n    border: 2px solid black;\r\n    font-family: 'UnifrakturMaguntia', cursive;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QjtBQUNKO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLHNDQUFzQztBQUMxQztBQUlBO0lBQ0ksb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixrQ0FBa0M7OztBQUd0QztBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QiwwQ0FBMEM7O0FBRTlDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9ue1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTgsIDIxOCwgMjE4KTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMyUgNzAlIDclO1xyXG4gICAgZ3JpZC1hdXRvLWNvbHVtbnM6IHJlcGVhdCgxMiwgMWZyKVxyXG59XHJcbmhlYWRlcntcclxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDEyO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBmb250LWZhbWlseTogJ1VuaWZyYWt0dXJDb29rJywgY3Vyc2l2ZTtcclxufVxyXG5cclxuICAgIFxyXG5cclxubWFpbntcclxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDEyO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBmb250LWZhbWlseTogJ1BpcmF0YSBPbmUnLCBjdXJzaXZlO1xyXG4gICAgXHJcbiAgICBcclxufVxyXG5mb290ZXJ7XHJcbiAgICBncmlkLWNvbHVtbjogc3BhbiAxMjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6ICdVbmlmcmFrdHVyTWFndW50aWEnLCBjdXJzaXZlO1xyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/layout/layout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/layout/layout.component.ts ***!
  \*******************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LayoutComponent = class LayoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-layout',
        template: __webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/layout/layout.component.html"),
        styles: [__webpack_require__(/*! ./layout.component.css */ "./src/app/components/layout/layout.component.css")]
    })
], LayoutComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a{\r\n    font-size: x-large;\r\n    color: black;\r\n    margin: 10px;\r\n    display: block;\r\n}\r\na:hover{\r\n    color: midnightblue;\r\n    -webkit-animation: fade 1s;\r\n            animation: fade 1s;\r\n}\r\n@-webkit-keyframes fade{\r\n    from {opacity:0.8;}\r\n    to {opacity:1;}\r\n}\r\n@keyframes fade{\r\n    from {opacity:0.8;}\r\n    to {opacity:1;}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osY0FBYztBQUNsQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLDBCQUFrQjtZQUFsQixrQkFBa0I7QUFDdEI7QUFHQTtJQUNJLE1BQU0sV0FBVyxDQUFDO0lBQ2xCLElBQUksU0FBUyxDQUFDO0FBQ2xCO0FBSEE7SUFDSSxNQUFNLFdBQVcsQ0FBQztJQUNsQixJQUFJLFNBQVMsQ0FBQztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImF7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5hOmhvdmVye1xyXG4gICAgY29sb3I6IG1pZG5pZ2h0Ymx1ZTtcclxuICAgIGFuaW1hdGlvbjogZmFkZSAxcztcclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgZmFkZXtcclxuICAgIGZyb20ge29wYWNpdHk6MC44O31cclxuICAgIHRvIHtvcGFjaXR5OjE7fVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LoginComponent = class LoginComponent {
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    login() {
        this.loginService.login(this.emailVar, this.passwordVar, this.typeVar).subscribe(response => {
            if (response.token) {
                sessionStorage.token = response.token;
                sessionStorage.typeVar = this.typeVar;
                this.routeToUser(sessionStorage.typeVar);
            }
        });
    }
    ngOnInit() {
        if (sessionStorage.typeVar) {
            this.routeToUser(sessionStorage.typeVar);
        }
        this.currentDate = new Date();
    }
    routeToUser(typeVar) {
        switch (typeVar) {
            case "ADMINISTRATOR":
                this.router.navigate(["/admin"]);
                break;
            case "CUSTOMER":
                this.router.navigate(["/customer"]);
                break;
            case "COMPANY":
                this.router.navigate(["/company"]);
                break;
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], LoginComponent.prototype, "transferName", void 0);
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/main/main.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/main/main.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/main/main.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainComponent = class MainComponent {
    constructor() { }
    ngOnInit() {
    }
};
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: __webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/main/main.component.html"),
        styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/components/main/main.component.css")]
    })
], MainComponent);



/***/ }),

/***/ "./src/app/components/methods/adminMethods/add-company/add-company.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/methods/adminMethods/add-company/add-company.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWV0aG9kcy9hZG1pbk1ldGhvZHMvYWRkLWNvbXBhbnkvYWRkLWNvbXBhbnkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/methods/adminMethods/add-company/add-company.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/methods/adminMethods/add-company/add-company.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AddCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCompanyComponent", function() { return AddCompanyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var src_app_models_Company__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/Company */ "./src/app/models/Company.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let AddCompanyComponent = class AddCompanyComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.company = new src_app_models_Company__WEBPACK_IMPORTED_MODULE_3__["Company"]();
    }
    ngOnInit() {
    }
    createCompany() {
        this.service.addCompany(this.company).subscribe(comp => {
            if (comp) {
                alert(comp.name + " has been added");
            }
            else {
                alert(comp.name + " the company has not been added");
            }
        });
    }
};
AddCompanyComponent.ctorParameters = () => [
    { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AddCompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-company',
        template: __webpack_require__(/*! raw-loader!./add-company.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/methods/adminMethods/add-company/add-company.component.html"),
        styles: [__webpack_require__(/*! ./add-company.component.css */ "./src/app/components/methods/adminMethods/add-company/add-company.component.css")]
    })
], AddCompanyComponent);



/***/ }),

/***/ "./src/app/components/methods/adminMethods/add-customer/add-customer.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/methods/adminMethods/add-customer/add-customer.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWV0aG9kcy9hZG1pbk1ldGhvZHMvYWRkLWN1c3RvbWVyL2FkZC1jdXN0b21lci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/methods/adminMethods/add-customer/add-customer.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/methods/adminMethods/add-customer/add-customer.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AddCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCustomerComponent", function() { return AddCustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_models_Customer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/Customer */ "./src/app/models/Customer.ts");





let AddCustomerComponent = class AddCustomerComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.customer = new src_app_models_Customer__WEBPACK_IMPORTED_MODULE_4__["Customer"];
    }
    ngOnInit() {
    }
    createCustomer() {
        this.service.addCustomer(this.customer).subscribe(cust => {
            if (cust) {
                alert(cust.firstName + "customer has been added");
            }
            else {
                alert(cust.firstName + " has not been added");
            }
        });
    }
    ;
};
AddCustomerComponent.ctorParameters = () => [
    { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AddCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-customer',
        template: __webpack_require__(/*! raw-loader!./add-customer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/methods/adminMethods/add-customer/add-customer.component.html"),
        styles: [__webpack_require__(/*! ./add-customer.component.css */ "./src/app/components/methods/adminMethods/add-customer/add-customer.component.css")]
    })
], AddCustomerComponent);



/***/ }),

/***/ "./src/app/components/methods/adminMethods/delete-company/delete-company.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/methods/adminMethods/delete-company/delete-company.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWV0aG9kcy9hZG1pbk1ldGhvZHMvZGVsZXRlLWNvbXBhbnkvZGVsZXRlLWNvbXBhbnkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/methods/adminMethods/delete-company/delete-company.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/methods/adminMethods/delete-company/delete-company.component.ts ***!
  \********************************************************************************************/
/*! exports provided: DeleteCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteCompanyComponent", function() { return DeleteCompanyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var src_app_models_Company__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/Company */ "./src/app/models/Company.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let DeleteCompanyComponent = class DeleteCompanyComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.company = new src_app_models_Company__WEBPACK_IMPORTED_MODULE_3__["Company"]();
    }
    ngOnInit() {
    }
    deleteCompany(id) {
        var result = confirm("are you sure you want to delete" + this.company.name + "?");
        if (result) {
            this.service.deleteCompany(id).subscribe(() => {
                this.ngOnInit();
            });
        }
    }
    ;
};
DeleteCompanyComponent.ctorParameters = () => [
    { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
DeleteCompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-delete-company',
        template: __webpack_require__(/*! raw-loader!./delete-company.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/methods/adminMethods/delete-company/delete-company.component.html"),
        styles: [__webpack_require__(/*! ./delete-company.component.css */ "./src/app/components/methods/adminMethods/delete-company/delete-company.component.css")]
    })
], DeleteCompanyComponent);



/***/ }),

/***/ "./src/app/components/methods/adminMethods/delete-customer/delete-customer.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/methods/adminMethods/delete-customer/delete-customer.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWV0aG9kcy9hZG1pbk1ldGhvZHMvZGVsZXRlLWN1c3RvbWVyL2RlbGV0ZS1jdXN0b21lci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/methods/adminMethods/delete-customer/delete-customer.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/methods/adminMethods/delete-customer/delete-customer.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: DeleteCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteCustomerComponent", function() { return DeleteCustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_models_Customer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/Customer */ "./src/app/models/Customer.ts");





let DeleteCustomerComponent = class DeleteCustomerComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.customer = new src_app_models_Customer__WEBPACK_IMPORTED_MODULE_4__["Customer"]();
    }
    ngOnInit() {
    }
    deleteCustomer(customer) {
        var result = confirm("are you sure you want to delete" + this.customer.firstName + "?");
        if (result) {
            this.service.deleteCustomer(this.customer).subscribe(() => {
                this.ngOnInit();
            });
        }
    }
    ;
};
DeleteCustomerComponent.ctorParameters = () => [
    { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
DeleteCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-delete-customer',
        template: __webpack_require__(/*! raw-loader!./delete-customer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/methods/adminMethods/delete-customer/delete-customer.component.html"),
        styles: [__webpack_require__(/*! ./delete-customer.component.css */ "./src/app/components/methods/adminMethods/delete-customer/delete-customer.component.css")]
    })
], DeleteCustomerComponent);



/***/ }),

/***/ "./src/app/components/methods/adminMethods/get-all-companies/get-all-companies.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/methods/adminMethods/get-all-companies/get-all-companies.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWV0aG9kcy9hZG1pbk1ldGhvZHMvZ2V0LWFsbC1jb21wYW5pZXMvZ2V0LWFsbC1jb21wYW5pZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/methods/adminMethods/get-all-companies/get-all-companies.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/methods/adminMethods/get-all-companies/get-all-companies.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: GetAllCompaniesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllCompaniesComponent", function() { return GetAllCompaniesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let GetAllCompaniesComponent = class GetAllCompaniesComponent {
    constructor(service, route) {
        this.service = service;
        this.route = route;
    }
    ngOnInit() {
        this.service.getAllCompanies().subscribe((comp) => {
            this.companies = comp;
        });
    }
    deleteCompany(id) {
        this.service.deleteCompany(id).subscribe(() => {
            alert("press once more to delete");
        });
        this.ngOnInit();
    }
    updateCompany(company) {
        this.service.updateCompany(this.company).subscribe((comp) => {
            alert("press once more to update");
        });
        this.ngOnInit();
    }
    editorEnabler(company) {
        this.company = company;
        if (this.updater == false) {
            this.updater = true;
        }
        else {
            this.updater = false;
        }
    }
};
GetAllCompaniesComponent.ctorParameters = () => [
    { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
GetAllCompaniesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-get-all-companies',
        template: __webpack_require__(/*! raw-loader!./get-all-companies.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/methods/adminMethods/get-all-companies/get-all-companies.component.html"),
        styles: [__webpack_require__(/*! ./get-all-companies.component.css */ "./src/app/components/methods/adminMethods/get-all-companies/get-all-companies.component.css")]
    })
], GetAllCompaniesComponent);



/***/ }),

/***/ "./src/app/components/methods/adminMethods/get-all-customers/get-all-customers.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/methods/adminMethods/get-all-customers/get-all-customers.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWV0aG9kcy9hZG1pbk1ldGhvZHMvZ2V0LWFsbC1jdXN0b21lcnMvZ2V0LWFsbC1jdXN0b21lcnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/methods/adminMethods/get-all-customers/get-all-customers.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/methods/adminMethods/get-all-customers/get-all-customers.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: GetAllCustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllCustomersComponent", function() { return GetAllCustomersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let GetAllCustomersComponent = class GetAllCustomersComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
    }
    ngOnInit() {
        this.service.getAllCustomers().subscribe((cust) => {
            this.customers = cust;
        });
    }
    deleteCustomer(customer) {
        this.service.deleteCustomer(customer).subscribe(() => {
            this.ngOnInit();
            alert("press once more to delete");
        });
        this.ngOnInit();
    }
    // public deleteCustomer(customer: Customer): void{
    //     this.service.deleteCustomer(customer).subscribe(()=>{this.ngOnInit();{
    //     } }); 
    //   }
    updateCustomer(customer) {
        this.service.updateCustomer(this.customer).subscribe((cust) => {
            alert("press once more to delete");
        });
        this.ngOnInit();
    }
    editorEnabler(customer) {
        this.customer = customer;
        if (this.updater == false) {
            this.updater = true;
        }
        else {
            this.updater = false;
        }
    }
};
GetAllCustomersComponent.ctorParameters = () => [
    { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
GetAllCustomersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-get-all-customers',
        template: __webpack_require__(/*! raw-loader!./get-all-customers.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/methods/adminMethods/get-all-customers/get-all-customers.component.html"),
        styles: [__webpack_require__(/*! ./get-all-customers.component.css */ "./src/app/components/methods/adminMethods/get-all-customers/get-all-customers.component.css")]
    })
], GetAllCustomersComponent);



/***/ }),

/***/ "./src/app/components/methods/adminMethods/get-one-company/get-one-company.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/methods/adminMethods/get-one-company/get-one-company.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWV0aG9kcy9hZG1pbk1ldGhvZHMvZ2V0LW9uZS1jb21wYW55L2dldC1vbmUtY29tcGFueS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/methods/adminMethods/get-one-company/get-one-company.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/methods/adminMethods/get-one-company/get-one-company.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: GetOneCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetOneCompanyComponent", function() { return GetOneCompanyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_Company__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/Company */ "./src/app/models/Company.ts");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let GetOneCompanyComponent = class GetOneCompanyComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.company = new src_app_models_Company__WEBPACK_IMPORTED_MODULE_2__["Company"]();
    }
    ngOnInit() {
    }
    getOneCompany(id) {
        this.service.getOneCompany(id).subscribe(comp => {
            if (comp) {
                alert(comp);
            }
            else {
                alert("company has not found");
            }
        });
    }
};
GetOneCompanyComponent.ctorParameters = () => [
    { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
GetOneCompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-get-one-company',
        template: __webpack_require__(/*! raw-loader!./get-one-company.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/methods/adminMethods/get-one-company/get-one-company.component.html"),
        styles: [__webpack_require__(/*! ./get-one-company.component.css */ "./src/app/components/methods/adminMethods/get-one-company/get-one-company.component.css")]
    })
], GetOneCompanyComponent);



/***/ }),

/***/ "./src/app/components/methods/adminMethods/get-one-customer/get-one-customer.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/methods/adminMethods/get-one-customer/get-one-customer.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWV0aG9kcy9hZG1pbk1ldGhvZHMvZ2V0LW9uZS1jdXN0b21lci9nZXQtb25lLWN1c3RvbWVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/methods/adminMethods/get-one-customer/get-one-customer.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/components/methods/adminMethods/get-one-customer/get-one-customer.component.ts ***!
  \************************************************************************************************/
/*! exports provided: GetOneCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetOneCustomerComponent", function() { return GetOneCustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_Customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/Customer */ "./src/app/models/Customer.ts");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let GetOneCustomerComponent = class GetOneCustomerComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.customer = new src_app_models_Customer__WEBPACK_IMPORTED_MODULE_2__["Customer"]();
    }
    ngOnInit() {
    }
    getOneCustomer(id) {
        this.service.getOneCustomer(this.customer.id).subscribe(cust => {
            if (cust) {
                alert(cust);
            }
            else {
                alert("customer not found");
            }
        });
    }
};
GetOneCustomerComponent.ctorParameters = () => [
    { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
GetOneCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-get-one-customer',
        template: __webpack_require__(/*! raw-loader!./get-one-customer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/methods/adminMethods/get-one-customer/get-one-customer.component.html"),
        styles: [__webpack_require__(/*! ./get-one-customer.component.css */ "./src/app/components/methods/adminMethods/get-one-customer/get-one-customer.component.css")]
    })
], GetOneCustomerComponent);



/***/ }),

/***/ "./src/app/components/methods/adminMethods/update-company/update-company.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/methods/adminMethods/update-company/update-company.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWV0aG9kcy9hZG1pbk1ldGhvZHMvdXBkYXRlLWNvbXBhbnkvdXBkYXRlLWNvbXBhbnkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/methods/adminMethods/update-company/update-company.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/methods/adminMethods/update-company/update-company.component.ts ***!
  \********************************************************************************************/
/*! exports provided: UpdateCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCompanyComponent", function() { return UpdateCompanyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_Company__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/Company */ "./src/app/models/Company.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");





let UpdateCompanyComponent = class UpdateCompanyComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.company = new src_app_models_Company__WEBPACK_IMPORTED_MODULE_2__["Company"]();
    }
    ngOnInit() {
    }
    updateCompany(company) {
        this.service.updateCompany(company).subscribe(comp => {
            alert("the company has been updated");
        });
    }
    loadComp(id) {
        this.service.getOneCompany(id).subscribe(comp => { this.company = comp; });
    }
};
UpdateCompanyComponent.ctorParameters = () => [
    { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
UpdateCompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-company',
        template: __webpack_require__(/*! raw-loader!./update-company.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/methods/adminMethods/update-company/update-company.component.html"),
        styles: [__webpack_require__(/*! ./update-company.component.css */ "./src/app/components/methods/adminMethods/update-company/update-company.component.css")]
    })
], UpdateCompanyComponent);



/***/ }),

/***/ "./src/app/components/methods/adminMethods/update-customer/update-customer.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/methods/adminMethods/update-customer/update-customer.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWV0aG9kcy9hZG1pbk1ldGhvZHMvdXBkYXRlLWN1c3RvbWVyL3VwZGF0ZS1jdXN0b21lci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/methods/adminMethods/update-customer/update-customer.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/methods/adminMethods/update-customer/update-customer.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: UpdateCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCustomerComponent", function() { return UpdateCustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_Customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/Customer */ "./src/app/models/Customer.ts");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let UpdateCustomerComponent = class UpdateCustomerComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.customer = new src_app_models_Customer__WEBPACK_IMPORTED_MODULE_2__["Customer"]();
    }
    ngOnInit() {
    }
    updateCustomer(customer) {
        this.service.updateCustomer(customer).subscribe(cust => {
            if (cust) {
                this.router.navigate(["/getAllCustomers"]);
            }
        });
    }
};
UpdateCustomerComponent.ctorParameters = () => [
    { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
UpdateCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-customer',
        template: __webpack_require__(/*! raw-loader!./update-customer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/methods/adminMethods/update-customer/update-customer.component.html"),
        styles: [__webpack_require__(/*! ./update-customer.component.css */ "./src/app/components/methods/adminMethods/update-customer/update-customer.component.css")]
    })
], UpdateCustomerComponent);



/***/ }),

/***/ "./src/app/components/methods/category-filter.pipe.ts":
/*!************************************************************!*\
  !*** ./src/app/components/methods/category-filter.pipe.ts ***!
  \************************************************************/
/*! exports provided: categoryFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoryFilterPipe", function() { return categoryFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let categoryFilterPipe = class categoryFilterPipe {
    transform(coupons, searchTerm) {
        if (!coupons || !searchTerm) {
            return coupons;
        }
        return coupons.filter(coup => coup.category.toLowerCase().indexOf(searchTerm.toLowerCase()) == 0);
    }
};
categoryFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'categoryFilter'
    })
], categoryFilterPipe);



/***/ }),

/***/ "./src/app/components/methods/companyMethods/add-coupon/add-coupon.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/methods/companyMethods/add-coupon/add-coupon.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWV0aG9kcy9jb21wYW55TWV0aG9kcy9hZGQtY291cG9uL2FkZC1jb3Vwb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/methods/companyMethods/add-coupon/add-coupon.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/methods/companyMethods/add-coupon/add-coupon.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AddCouponComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCouponComponent", function() { return AddCouponComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_Coupon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/Coupon */ "./src/app/models/Coupon.ts");
/* harmony import */ var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/company.service */ "./src/app/services/company.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let AddCouponComponent = class AddCouponComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.coupon = new src_app_models_Coupon__WEBPACK_IMPORTED_MODULE_2__["Coupon"];
    }
    ngOnInit() {
    }
    createCoupon() {
        this.coupon.company = this.company;
        this.service.addCoupon(this.coupon).subscribe(coup => {
            if (coup) {
                coup.company = this.company;
                alert(coup.title + " coupon has been added");
            }
            else {
                alert(" the coupon has not been added");
            }
        });
    }
};
AddCouponComponent.ctorParameters = () => [
    { type: src_app_services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AddCouponComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-coupon',
        template: __webpack_require__(/*! raw-loader!./add-coupon.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/methods/companyMethods/add-coupon/add-coupon.component.html"),
        styles: [__webpack_require__(/*! ./add-coupon.component.css */ "./src/app/components/methods/companyMethods/add-coupon/add-coupon.component.css")]
    })
], AddCouponComponent);



/***/ }),

/***/ "./src/app/components/methods/companyMethods/delete-coupon/delete-coupon.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/methods/companyMethods/delete-coupon/delete-coupon.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWV0aG9kcy9jb21wYW55TWV0aG9kcy9kZWxldGUtY291cG9uL2RlbGV0ZS1jb3Vwb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/methods/companyMethods/delete-coupon/delete-coupon.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/methods/companyMethods/delete-coupon/delete-coupon.component.ts ***!
  \********************************************************************************************/
/*! exports provided: DeleteCouponComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteCouponComponent", function() { return DeleteCouponComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_Coupon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/Coupon */ "./src/app/models/Coupon.ts");
/* harmony import */ var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/company.service */ "./src/app/services/company.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let DeleteCouponComponent = class DeleteCouponComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.coupon = new src_app_models_Coupon__WEBPACK_IMPORTED_MODULE_2__["Coupon"]();
    }
    ngOnInit() {
    }
    deleteCompany(id) {
        var result = confirm("are you sure you want to delete" + this.coupon.title + "?");
        if (result) {
            this.service.deleteCoupon(id).subscribe(() => {
                this.ngOnInit();
            });
        }
    }
    ;
};
DeleteCouponComponent.ctorParameters = () => [
    { type: src_app_services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
DeleteCouponComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-delete-coupon',
        template: __webpack_require__(/*! raw-loader!./delete-coupon.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/methods/companyMethods/delete-coupon/delete-coupon.component.html"),
        styles: [__webpack_require__(/*! ./delete-coupon.component.css */ "./src/app/components/methods/companyMethods/delete-coupon/delete-coupon.component.css")]
    })
], DeleteCouponComponent);



/***/ }),

/***/ "./src/app/components/methods/companyMethods/get-company-coupons-category/get-company-coupons-category.component.css":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/components/methods/companyMethods/get-company-coupons-category/get-company-coupons-category.component.css ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWV0aG9kcy9jb21wYW55TWV0aG9kcy9nZXQtY29tcGFueS1jb3Vwb25zLWNhdGVnb3J5L2dldC1jb21wYW55LWNvdXBvbnMtY2F0ZWdvcnkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/methods/companyMethods/get-company-coupons-category/get-company-coupons-category.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/components/methods/companyMethods/get-company-coupons-category/get-company-coupons-category.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: GetCompanyCouponsCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCompanyCouponsCategoryComponent", function() { return GetCompanyCouponsCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/company.service */ "./src/app/services/company.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let GetCompanyCouponsCategoryComponent = class GetCompanyCouponsCategoryComponent {
    constructor(service, route) {
        this.service = service;
        this.route = route;
    }
    ngOnInit() {
        // this.service.getCompanyCoupons(this.category).subscribe((coup)=>{
        this.service.getCompanyCoupons().subscribe((coup) => {
            this.coupons = coup;
        });
    }
    deleteCoupon(id) {
        var result = confirm("Are you sure you would like to delete this Coupon?");
        if (result) {
            this.service.deleteCoupon(id).subscribe(() => {
                this.ngOnInit();
            });
        }
    }
};
GetCompanyCouponsCategoryComponent.ctorParameters = () => [
    { type: src_app_services_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
GetCompanyCouponsCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-get-company-coupons-category',
        template: __webpack_require__(/*! raw-loader!./get-company-coupons-category.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/methods/companyMethods/get-company-coupons-category/get-company-coupons-category.component.html"),
        styles: [__webpack_require__(/*! ./get-company-coupons-category.component.css */ "./src/app/components/methods/companyMethods/get-company-coupons-category/get-company-coupons-category.component.css")]
    })
], GetCompanyCouponsCategoryComponent);



/***/ }),

/***/ "./src/app/components/methods/companyMethods/get-company-coupons-price/get-company-coupons-price.component.css":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/components/methods/companyMethods/get-company-coupons-price/get-company-coupons-price.component.css ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWV0aG9kcy9jb21wYW55TWV0aG9kcy9nZXQtY29tcGFueS1jb3Vwb25zLXByaWNlL2dldC1jb21wYW55LWNvdXBvbnMtcHJpY2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/methods/companyMethods/get-company-coupons-price/get-company-coupons-price.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/components/methods/companyMethods/get-company-coupons-price/get-company-coupons-price.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: GetCompanyCouponsPriceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCompanyCouponsPriceComponent", function() { return GetCompanyCouponsPriceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/company.service */ "./src/app/services/company.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let GetCompanyCouponsPriceComponent = class GetCompanyCouponsPriceComponent {
    constructor(service, route) {
        this.service = service;
        this.route = route;
    }
    ngOnInit() {
        this.service.getCouponsByPrice(this.price).subscribe((coup) => {
            this.coupons = coup;
        });
    }
    deleteCoupon(id) {
        var result = confirm("Are you sure you would like to delete this Coupon?");
        if (result) {
            this.service.deleteCoupon(id).subscribe(() => {
                this.ngOnInit();
            });
        }
    }
};
GetCompanyCouponsPriceComponent.ctorParameters = () => [
    { type: src_app_services_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
GetCompanyCouponsPriceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-get-company-coupons-price',
        template: __webpack_require__(/*! raw-loader!./get-company-coupons-price.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/methods/companyMethods/get-company-coupons-price/get-company-coupons-price.component.html"),
        styles: [__webpack_require__(/*! ./get-company-coupons-price.component.css */ "./src/app/components/methods/companyMethods/get-company-coupons-price/get-company-coupons-price.component.css")]
    })
], GetCompanyCouponsPriceComponent);



/***/ }),

/***/ "./src/app/components/methods/companyMethods/get-company-coupons/get-company-coupons.component.css":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/methods/companyMethods/get-company-coupons/get-company-coupons.component.css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWV0aG9kcy9jb21wYW55TWV0aG9kcy9nZXQtY29tcGFueS1jb3Vwb25zL2dldC1jb21wYW55LWNvdXBvbnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/methods/companyMethods/get-company-coupons/get-company-coupons.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/components/methods/companyMethods/get-company-coupons/get-company-coupons.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: GetCompanyCouponsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCompanyCouponsComponent", function() { return GetCompanyCouponsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/company.service */ "./src/app/services/company.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let GetCompanyCouponsComponent = class GetCompanyCouponsComponent {
    constructor(service, route) {
        this.service = service;
        this.route = route;
    }
    ngOnInit() {
        this.service.getCompanyCoupons().subscribe((coup) => {
            this.coupons = coup;
        });
    }
    deleteCoupon(id) {
        this.service.deleteCoupon(id).subscribe(() => {
        });
        this.ngOnInit();
        {
            alert("press one more time to delete");
        }
    }
    updateCoupon(coupon) {
        this.service.updateCoupon(this.coupon).subscribe((coup) => {
        });
        this.ngOnInit();
    }
    editorEnabler(coupon) {
        this.coupon = coupon;
        if (this.updater == false) {
            this.updater = true;
        }
        else {
            this.updater = false;
        }
    }
    categoryFilter(category) {
        this.service.getCouponsByCategory(category).subscribe((cat) => {
        });
        this.ngOnInit();
    }
    priceFilter(price) {
        this.service.getCouponsByPrice(price).subscribe((price) => {
        });
        this.ngOnInit();
    }
};
GetCompanyCouponsComponent.ctorParameters = () => [
    { type: src_app_services_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
GetCompanyCouponsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-get-company-coupons',
        template: __webpack_require__(/*! raw-loader!./get-company-coupons.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/methods/companyMethods/get-company-coupons/get-company-coupons.component.html"),
        styles: [__webpack_require__(/*! ./get-company-coupons.component.css */ "./src/app/components/methods/companyMethods/get-company-coupons/get-company-coupons.component.css")]
    })
], GetCompanyCouponsComponent);



/***/ }),

/***/ "./src/app/components/methods/companyMethods/update-coupon/update-coupon.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/methods/companyMethods/update-coupon/update-coupon.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWV0aG9kcy9jb21wYW55TWV0aG9kcy91cGRhdGUtY291cG9uL3VwZGF0ZS1jb3Vwb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/methods/companyMethods/update-coupon/update-coupon.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/methods/companyMethods/update-coupon/update-coupon.component.ts ***!
  \********************************************************************************************/
/*! exports provided: UpdateCouponComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCouponComponent", function() { return UpdateCouponComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_Coupon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/Coupon */ "./src/app/models/Coupon.ts");
/* harmony import */ var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/company.service */ "./src/app/services/company.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let UpdateCouponComponent = class UpdateCouponComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.coupon = new src_app_models_Coupon__WEBPACK_IMPORTED_MODULE_2__["Coupon"]();
    }
    ngOnInit() {
    }
    updateCompany(company) {
        this.service.updateCoupon(this.coupon).subscribe(coup => {
        });
    }
};
UpdateCouponComponent.ctorParameters = () => [
    { type: src_app_services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
UpdateCouponComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-coupon',
        template: __webpack_require__(/*! raw-loader!./update-coupon.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/methods/companyMethods/update-coupon/update-coupon.component.html"),
        styles: [__webpack_require__(/*! ./update-coupon.component.css */ "./src/app/components/methods/companyMethods/update-coupon/update-coupon.component.css")]
    })
], UpdateCouponComponent);



/***/ }),

/***/ "./src/app/components/methods/customerMethods/get-all-coupons/get-all-coupons.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/methods/customerMethods/get-all-coupons/get-all-coupons.component.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWV0aG9kcy9jdXN0b21lck1ldGhvZHMvZ2V0LWFsbC1jb3Vwb25zL2dldC1hbGwtY291cG9ucy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/methods/customerMethods/get-all-coupons/get-all-coupons.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/methods/customerMethods/get-all-coupons/get-all-coupons.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: GetAllCouponsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllCouponsComponent", function() { return GetAllCouponsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/customer.service */ "./src/app/services/customer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let GetAllCouponsComponent = class GetAllCouponsComponent {
    constructor(service, route) {
        this.service = service;
        this.route = route;
    }
    ngOnInit() {
        this.service.getAllCoupons().subscribe((coup) => {
            this.coupons = coup;
        });
    }
};
GetAllCouponsComponent.ctorParameters = () => [
    { type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
GetAllCouponsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-get-all-coupons',
        template: __webpack_require__(/*! raw-loader!./get-all-coupons.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/methods/customerMethods/get-all-coupons/get-all-coupons.component.html"),
        styles: [__webpack_require__(/*! ./get-all-coupons.component.css */ "./src/app/components/methods/customerMethods/get-all-coupons/get-all-coupons.component.css")]
    })
], GetAllCouponsComponent);



/***/ }),

/***/ "./src/app/components/methods/customerMethods/get-customer-coupons-category/get-customer-coupons-category.component.css":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/components/methods/customerMethods/get-customer-coupons-category/get-customer-coupons-category.component.css ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWV0aG9kcy9jdXN0b21lck1ldGhvZHMvZ2V0LWN1c3RvbWVyLWNvdXBvbnMtY2F0ZWdvcnkvZ2V0LWN1c3RvbWVyLWNvdXBvbnMtY2F0ZWdvcnkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/methods/customerMethods/get-customer-coupons-category/get-customer-coupons-category.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/components/methods/customerMethods/get-customer-coupons-category/get-customer-coupons-category.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: GetCustomerCouponsCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCustomerCouponsCategoryComponent", function() { return GetCustomerCouponsCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/customer.service */ "./src/app/services/customer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let GetCustomerCouponsCategoryComponent = class GetCustomerCouponsCategoryComponent {
    constructor(service, route) {
        this.service = service;
        this.route = route;
    }
    ngOnInit() {
        this.service.getCustomerCouponsByCategory(this.category).subscribe((coup) => {
            this.coupons = coup;
        });
    }
};
GetCustomerCouponsCategoryComponent.ctorParameters = () => [
    { type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
GetCustomerCouponsCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-get-customer-coupons-category',
        template: __webpack_require__(/*! raw-loader!./get-customer-coupons-category.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/methods/customerMethods/get-customer-coupons-category/get-customer-coupons-category.component.html"),
        styles: [__webpack_require__(/*! ./get-customer-coupons-category.component.css */ "./src/app/components/methods/customerMethods/get-customer-coupons-category/get-customer-coupons-category.component.css")]
    })
], GetCustomerCouponsCategoryComponent);



/***/ }),

/***/ "./src/app/components/methods/customerMethods/get-customer-coupons-price/get-customer-coupons-price.component.css":
/*!************************************************************************************************************************!*\
  !*** ./src/app/components/methods/customerMethods/get-customer-coupons-price/get-customer-coupons-price.component.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWV0aG9kcy9jdXN0b21lck1ldGhvZHMvZ2V0LWN1c3RvbWVyLWNvdXBvbnMtcHJpY2UvZ2V0LWN1c3RvbWVyLWNvdXBvbnMtcHJpY2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/methods/customerMethods/get-customer-coupons-price/get-customer-coupons-price.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/components/methods/customerMethods/get-customer-coupons-price/get-customer-coupons-price.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: GetCustomerCouponsPriceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCustomerCouponsPriceComponent", function() { return GetCustomerCouponsPriceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/customer.service */ "./src/app/services/customer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let GetCustomerCouponsPriceComponent = class GetCustomerCouponsPriceComponent {
    constructor(service, route) {
        this.service = service;
        this.route = route;
    }
    ngOnInit() {
        this.service.getCustomerCouponsByPrice(this.price).subscribe((coup) => {
            this.coupons = coup;
        });
    }
};
GetCustomerCouponsPriceComponent.ctorParameters = () => [
    { type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
GetCustomerCouponsPriceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-get-customer-coupons-price',
        template: __webpack_require__(/*! raw-loader!./get-customer-coupons-price.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/methods/customerMethods/get-customer-coupons-price/get-customer-coupons-price.component.html"),
        styles: [__webpack_require__(/*! ./get-customer-coupons-price.component.css */ "./src/app/components/methods/customerMethods/get-customer-coupons-price/get-customer-coupons-price.component.css")]
    })
], GetCustomerCouponsPriceComponent);



/***/ }),

/***/ "./src/app/components/methods/customerMethods/get-customer-coupons/get-customer-coupons.component.css":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/methods/customerMethods/get-customer-coupons/get-customer-coupons.component.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWV0aG9kcy9jdXN0b21lck1ldGhvZHMvZ2V0LWN1c3RvbWVyLWNvdXBvbnMvZ2V0LWN1c3RvbWVyLWNvdXBvbnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/methods/customerMethods/get-customer-coupons/get-customer-coupons.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/methods/customerMethods/get-customer-coupons/get-customer-coupons.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: GetCustomerCouponsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCustomerCouponsComponent", function() { return GetCustomerCouponsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/customer.service */ "./src/app/services/customer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let GetCustomerCouponsComponent = class GetCustomerCouponsComponent {
    constructor(service, route) {
        this.service = service;
        this.route = route;
    }
    ngOnInit() {
        this.service.getCustomerCoupons().subscribe((coup) => {
            this.coupons = coup;
        });
    }
};
GetCustomerCouponsComponent.ctorParameters = () => [
    { type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
GetCustomerCouponsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-get-customer-coupons',
        template: __webpack_require__(/*! raw-loader!./get-customer-coupons.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/methods/customerMethods/get-customer-coupons/get-customer-coupons.component.html"),
        styles: [__webpack_require__(/*! ./get-customer-coupons.component.css */ "./src/app/components/methods/customerMethods/get-customer-coupons/get-customer-coupons.component.css")]
    })
], GetCustomerCouponsComponent);



/***/ }),

/***/ "./src/app/components/methods/customerMethods/get-customer-details/get-customer-details.component.css":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/methods/customerMethods/get-customer-details/get-customer-details.component.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWV0aG9kcy9jdXN0b21lck1ldGhvZHMvZ2V0LWN1c3RvbWVyLWRldGFpbHMvZ2V0LWN1c3RvbWVyLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/methods/customerMethods/get-customer-details/get-customer-details.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/methods/customerMethods/get-customer-details/get-customer-details.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: GetCustomerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCustomerDetailsComponent", function() { return GetCustomerDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_Customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/Customer */ "./src/app/models/Customer.ts");
/* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/customer.service */ "./src/app/services/customer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let GetCustomerDetailsComponent = class GetCustomerDetailsComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.customer = new src_app_models_Customer__WEBPACK_IMPORTED_MODULE_2__["Customer"]();
    }
    ngOnInit() {
        this.service.getCustomerDetails().subscribe(cust => {
            this.customer = cust;
            // (cust.id);
            // (cust.email);
            // (cust.firstName);
            // (cust.lastName);
            // (cust.password);
        });
    }
};
GetCustomerDetailsComponent.ctorParameters = () => [
    { type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
GetCustomerDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-get-customer-details',
        template: __webpack_require__(/*! raw-loader!./get-customer-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/methods/customerMethods/get-customer-details/get-customer-details.component.html"),
        styles: [__webpack_require__(/*! ./get-customer-details.component.css */ "./src/app/components/methods/customerMethods/get-customer-details/get-customer-details.component.css")]
    })
], GetCustomerDetailsComponent);



/***/ }),

/***/ "./src/app/components/methods/customerMethods/purchase-coupon/purchase-coupon.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/methods/customerMethods/purchase-coupon/purchase-coupon.component.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    overflow: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZXRob2RzL2N1c3RvbWVyTWV0aG9kcy9wdXJjaGFzZS1jb3Vwb24vcHVyY2hhc2UtY291cG9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tZXRob2RzL2N1c3RvbWVyTWV0aG9kcy9wdXJjaGFzZS1jb3Vwb24vcHVyY2hhc2UtY291cG9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/methods/customerMethods/purchase-coupon/purchase-coupon.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/methods/customerMethods/purchase-coupon/purchase-coupon.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: PurchaseCouponComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseCouponComponent", function() { return PurchaseCouponComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/customer.service */ "./src/app/services/customer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let PurchaseCouponComponent = class PurchaseCouponComponent {
    constructor(service, route) {
        this.service = service;
        this.route = route;
    }
    ngOnInit() {
        this.service.getAllCoupons().subscribe(coup => {
            this.coupons = coup;
        });
    }
    purchaseCoupon(coupon) {
        this.service.purchaseCoupon(coupon).subscribe(() => {
        });
        this.ngOnInit();
        {
            alert("purchased");
        }
    }
    categoryFilter(category) {
        this.service.getCustomerCouponsByCategory(category).subscribe((cat) => {
        });
        this.ngOnInit();
    }
    priceFilter(price) {
        this.service.getCustomerCouponsByPrice(price).subscribe((price) => {
        });
        this.ngOnInit();
    }
};
PurchaseCouponComponent.ctorParameters = () => [
    { type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
PurchaseCouponComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-purchase-coupon',
        template: __webpack_require__(/*! raw-loader!./purchase-coupon.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/methods/customerMethods/purchase-coupon/purchase-coupon.component.html"),
        styles: [__webpack_require__(/*! ./purchase-coupon.component.css */ "./src/app/components/methods/customerMethods/purchase-coupon/purchase-coupon.component.css")]
    })
], PurchaseCouponComponent);



/***/ }),

/***/ "./src/app/components/methods/price-filter.pipe.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/methods/price-filter.pipe.ts ***!
  \*********************************************************/
/*! exports provided: priceFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "priceFilterPipe", function() { return priceFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let priceFilterPipe = class priceFilterPipe {
    transform(coupons, searchPrice) {
        if (!coupons || !searchPrice) {
            return coupons;
        }
        return coupons.filter(coup => coup.price > searchPrice);
    }
};
priceFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'priceFilter'
    })
], priceFilterPipe);



/***/ }),

/***/ "./src/app/models/Company.ts":
/*!***********************************!*\
  !*** ./src/app/models/Company.ts ***!
  \***********************************/
/*! exports provided: Company */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Company", function() { return Company; });
class Company {
    constructor(id, name, email, password, coupons) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.coupons = coupons;
    }
}
Company.ctorParameters = () => [
    { type: Number },
    { type: String },
    { type: String },
    { type: String },
    { type: Array }
];


/***/ }),

/***/ "./src/app/models/Coupon.ts":
/*!**********************************!*\
  !*** ./src/app/models/Coupon.ts ***!
  \**********************************/
/*! exports provided: Coupon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coupon", function() { return Coupon; });
/* harmony import */ var _Company__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Company */ "./src/app/models/Company.ts");

class Coupon {
    constructor(id, company, category, title, description, startDate, endDate, amount, price, image) {
        this.id = id;
        this.company = company;
        this.category = category;
        this.title = title;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.amount = amount;
        this.price = price;
        this.image = image;
    }
}
Coupon.ctorParameters = () => [
    { type: Number },
    { type: _Company__WEBPACK_IMPORTED_MODULE_0__["Company"] },
    { type: String },
    { type: String },
    { type: String },
    { type: Date },
    { type: Date },
    { type: Number },
    { type: Number },
    { type: String }
];


/***/ }),

/***/ "./src/app/models/Customer.ts":
/*!************************************!*\
  !*** ./src/app/models/Customer.ts ***!
  \************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
class Customer {
    constructor(id, firstName, lastName, email, password, coupons) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.coupons = coupons;
    }
}
Customer.ctorParameters = () => [
    { type: Number },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: Array }
];


/***/ }),

/***/ "./src/app/services/admin.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/admin.service.ts ***!
  \*******************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AdminService = class AdminService {
    constructor(client) {
        this.client = client;
    }
    addCompany(company) {
        return this.client.post("http://localhost:8080/admin/addCompany/" + sessionStorage.token, company);
    }
    addCustomer(customer) {
        return this.client.post("http://localhost:8080/admin/addCustomer/" + sessionStorage.token, customer);
    }
    deleteCompany(id) {
        return this.client.delete("http://localhost:8080/admin/deleteCompany/" + id + "/" + sessionStorage.token);
    }
    deleteCustomer(customer) {
        return this.client.post("http://localhost:8080/admin/deleteCustomer/" + sessionStorage.token, customer);
    }
    getAllCompanies() {
        return this.client.get("http://localhost:8080/admin/getAllComp/" + sessionStorage.token);
    }
    getAllCustomers() {
        return this.client.get("http://localhost:8080/admin/getAllCus/" + sessionStorage.token);
    }
    getOneCompany(id) {
        return this.client.get("http://localhost:8080/admin/getOneCompany/" + sessionStorage.token + "/" + id + "/");
    }
    getOneCustomer(id) {
        return this.client.get("http://localhost:8080/admin/getOneCustomer/" + sessionStorage.token + "/" + id + "/");
    }
    updateCompany(company) {
        return this.client.put("http://localhost:8080/admin/updateCompany/" + sessionStorage.token, company);
    }
    updateCustomer(customer) {
        return this.client.put("http://localhost:8080/admin/updateCustomer/" + sessionStorage.token, customer);
    }
};
AdminService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AdminService);



/***/ }),

/***/ "./src/app/services/company.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/company.service.ts ***!
  \*********************************************/
/*! exports provided: CompanyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyService", function() { return CompanyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CompanyService = class CompanyService {
    constructor(client) {
        this.client = client;
    }
    getCompanyCoupons() {
        return this.client.get("http://localhost:8080/company/getCompanyCoupons/" + sessionStorage.token);
    }
    addCoupon(coupon) {
        return this.client.post("http://localhost:8080/company/addCoupon/" + sessionStorage.token, coupon);
    }
    deleteCoupon(id) {
        return this.client.delete("http://localhost:8080/company/deleteCoupon/" + sessionStorage.token + "/" + id + "/");
    }
    getCouponsByCategory(category) {
        return this.client.get("http://localhost:8080/company/getCompanyCouponsByCat/" + sessionStorage.token + "/" + category + "/");
    }
    getCouponsByPrice(price) {
        return this.client.get("http://localhost:8080/company/getCompanyCouponsPrice/" + sessionStorage.token + "/" + price + "/");
    }
    updateCoupon(coupon) {
        return this.client.put("http://localhost:8080/company/updateCoupon/" + sessionStorage.token, coupon);
    }
    getCompanyDetails(company) {
        return this.client.get("http://localhost:8080/company/getCompanyDetails/" + sessionStorage.token + "/");
    }
};
CompanyService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CompanyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CompanyService);



/***/ }),

/***/ "./src/app/services/customer.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/customer.service.ts ***!
  \**********************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CustomerService = class CustomerService {
    constructor(client) {
        this.client = client;
    }
    getCustomerCoupons() {
        return this.client.get("http://localhost:8080/customer/getCustomerCoupons/" + sessionStorage.token);
    }
    getCustomerCouponsByCategory(category) {
        return this.client.get("http://localhost:8080/customer/getCustomerCouponsCat/" + sessionStorage.token + "/" + category + "/");
    }
    getCustomerCouponsByPrice(price) {
        return this.client.get("http://localhost:8080/customer/getCustomerCouponsPrice/" + sessionStorage.token + "/" + price + "/");
    }
    getCustomerDetails() {
        return this.client.get("http://localhost:8080/customer/getCustomerDetails/" + sessionStorage.token);
    }
    purchaseCoupon(coupon) {
        return this.client.post("http://localhost:8080/customer/purchaseCoupon/" + sessionStorage.token, coupon);
    }
    getAllCoupons() {
        return this.client.get("http://localhost:8080/customer/getAllCoupons/" + sessionStorage.token);
    }
};
CustomerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CustomerService);



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let LoginService = class LoginService {
    constructor(client) {
        this.client = client;
    }
    login(email, password, type) {
        return this.client.post("http://localhost:8080/login?email=" + email + "&password="
            + password + "&type=" + type, "");
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Angular\CouponProject3\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map