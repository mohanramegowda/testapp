(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{sFDi:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=function(){return function(){}}(),a=u("pMnS"),o=u("Ip0R"),i=function(){function l(){this.sortings=["Sort by Default","Best match","Lowest first","Highest first"],this.counts=[12,24,36]}return l.prototype.ngOnInit=function(){this.count=this.counts[0],this.sort=this.sortings[0]},l.prototype.changeCount=function(l){this.count=l},l.prototype.changeSorting=function(l){this.sort=l},l.prototype.changeViewType=function(l){this.viewType=l},l}(),r=t.nb({encapsulation:0,styles:[[".btn-group[_ngcontent-%COMP%]{float:left;margin-left:15px;cursor:pointer}.menu-container[_ngcontent-%COMP%]{float:right;margin-left:15px;margin-bottom:10px;cursor:pointer;color:#757575}.btn-group[_ngcontent-%COMP%], .dropdown-item[_ngcontent-%COMP%]{font-size:13px;font-weight:600;letter-spacing:0;color:#757575}"]],data:{}});function p(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"button",[["class","dropdown-item"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.changeSorting(l.context.$implicit)&&t),t},null,null)),(l()(),t.Db(1,null,[" "," "]))],null,function(l,n){l(n,1,0,n.context.$implicit)})}function c(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"button",[["class","dropdown-item"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.changeCount(l.context.$implicit)&&t),t},null,null)),(l()(),t.Db(1,null,[" "," "]))],null,function(l,n){l(n,1,0,n.context.$implicit)})}function s(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,19,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,18,"div",[["class","col-md-12 col-lg-12"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,17,"div",[["class","block-pricing"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,16,"div",[["class","table"]],null,null,null,null,null)),(l()(),t.pb(4,0,null,null,5,"div",[["class","btn-group"]],null,null,null,null,null)),(l()(),t.pb(5,0,null,null,1,"a",[["class","dropdown-toggle"],["data-toggle","dropdown"]],null,null,null,null,null)),(l()(),t.Db(6,null,[" "," "])),(l()(),t.pb(7,0,null,null,2,"div",[["class","dropdown-menu"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,p)),t.ob(9,278528,null,0,o.i,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.pb(10,0,null,null,5,"div",[["class","btn-group"]],null,null,null,null,null)),(l()(),t.pb(11,0,null,null,1,"a",[["class","dropdown-toggle"],["data-toggle","dropdown"]],null,null,null,null,null)),(l()(),t.Db(12,null,[" Show "," "])),(l()(),t.pb(13,0,null,null,2,"div",[["class","dropdown-menu"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,c)),t.ob(15,278528,null,0,o.i,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.pb(16,0,null,null,1,"span",[["class","menu-container"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.changeViewType("grid")&&t),t},null,null)),(l()(),t.pb(17,0,null,null,0,"i",[["class","fa fa-th"]],null,null,null,null,null)),(l()(),t.pb(18,0,null,null,1,"span",[["class","menu-container"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.changeViewType("list")&&t),t},null,null)),(l()(),t.pb(19,0,null,null,0,"i",[["class","fa fa-list"]],null,null,null,null,null))],function(l,n){var u=n.component;l(n,9,0,u.sortings),l(n,15,0,u.counts)},function(l,n){var u=n.component;l(n,6,0,u.sort),l(n,12,0,u.count)})}var b=u("xkgV"),g=t.nb({encapsulation:2,styles:["\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\xab';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\xbb';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  "],data:{}});function f(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,3,"a",[["tabindex","0"]],[[1,"aria-label",0]],[[null,"keyup.enter"],[null,"click"]],function(l,n,u){var e=!0;return"keyup.enter"===n&&(e=!1!==t.xb(l.parent.parent.parent,1).previous()&&e),"click"===n&&(e=!1!==t.xb(l.parent.parent.parent,1).previous()&&e),e},null,null)),(l()(),t.Db(1,null,[" "," "])),(l()(),t.pb(2,0,null,null,1,"span",[["class","show-for-sr"]],null,null,null,null,null)),(l()(),t.Db(3,null,["",""]))],null,function(l,n){var u=n.component;l(n,0,0,u.previousLabel+" "+u.screenReaderPageLabel),l(n,1,0,u.previousLabel),l(n,3,0,u.screenReaderPageLabel)})}function d(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),t.Db(1,null,[" "," "])),(l()(),t.pb(2,0,null,null,1,"span",[["class","show-for-sr"]],null,null,null,null,null)),(l()(),t.Db(3,null,["",""]))],null,function(l,n){var u=n.component;l(n,1,0,u.previousLabel),l(n,3,0,u.screenReaderPageLabel)})}function x(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,4,"li",[["class","pagination-previous"]],[[2,"disabled",null]],null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,f)),t.ob(2,16384,null,0,o.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,d)),t.ob(4,16384,null,0,o.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,2,0,1<t.xb(n.parent.parent,1).getCurrent()),l(n,4,0,t.xb(n.parent.parent,1).isFirstPage())},function(l,n){l(n,0,0,t.xb(n.parent.parent,1).isFirstPage())})}function m(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,4,"a",[["tabindex","0"]],null,[[null,"keyup.enter"],[null,"click"]],function(l,n,u){var e=!0;return"keyup.enter"===n&&(e=!1!==t.xb(l.parent.parent.parent,1).setCurrent(l.parent.context.$implicit.value)&&e),"click"===n&&(e=!1!==t.xb(l.parent.parent.parent,1).setCurrent(l.parent.context.$implicit.value)&&e),e},null,null)),(l()(),t.pb(1,0,null,null,1,"span",[["class","show-for-sr"]],null,null,null,null,null)),(l()(),t.Db(2,null,[""," "])),(l()(),t.pb(3,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Db(4,null,["",""]))],null,function(l,n){l(n,2,0,n.component.screenReaderPageLabel),l(n,4,0,n.parent.context.$implicit.label)})}function v(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),t.pb(1,0,null,null,1,"span",[["class","show-for-sr"]],null,null,null,null,null)),(l()(),t.Db(2,null,[""," "])),(l()(),t.pb(3,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Db(4,null,["",""]))],null,function(l,n){l(n,2,0,n.component.screenReaderCurrentLabel),l(n,4,0,n.parent.context.$implicit.label)})}function h(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,4,"li",[],[[2,"current",null],[2,"ellipsis",null]],null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,m)),t.ob(2,16384,null,0,o.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,v)),t.ob(4,16384,null,0,o.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,2,0,t.xb(n.parent.parent,1).getCurrent()!==n.context.$implicit.value),l(n,4,0,t.xb(n.parent.parent,1).getCurrent()===n.context.$implicit.value)},function(l,n){l(n,0,0,t.xb(n.parent.parent,1).getCurrent()===n.context.$implicit.value,"..."===n.context.$implicit.label)})}function w(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,3,"a",[["tabindex","0"]],[[1,"aria-label",0]],[[null,"keyup.enter"],[null,"click"]],function(l,n,u){var e=!0;return"keyup.enter"===n&&(e=!1!==t.xb(l.parent.parent.parent,1).next()&&e),"click"===n&&(e=!1!==t.xb(l.parent.parent.parent,1).next()&&e),e},null,null)),(l()(),t.Db(1,null,[" "," "])),(l()(),t.pb(2,0,null,null,1,"span",[["class","show-for-sr"]],null,null,null,null,null)),(l()(),t.Db(3,null,["",""]))],null,function(l,n){var u=n.component;l(n,0,0,u.nextLabel+" "+u.screenReaderPageLabel),l(n,1,0,u.nextLabel),l(n,3,0,u.screenReaderPageLabel)})}function k(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),t.Db(1,null,[" "," "])),(l()(),t.pb(2,0,null,null,1,"span",[["class","show-for-sr"]],null,null,null,null,null)),(l()(),t.Db(3,null,["",""]))],null,function(l,n){var u=n.component;l(n,1,0,u.nextLabel),l(n,3,0,u.screenReaderPageLabel)})}function L(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,4,"li",[["class","pagination-next"]],[[2,"disabled",null]],null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,w)),t.ob(2,16384,null,0,o.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,k)),t.ob(4,16384,null,0,o.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,2,0,!t.xb(n.parent.parent,1).isLastPage()),l(n,4,0,t.xb(n.parent.parent,1).isLastPage())},function(l,n){l(n,0,0,t.xb(n.parent.parent,1).isLastPage())})}function y(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,8,"ul",[["class","ngx-pagination"],["role","navigation"]],[[1,"aria-label",0],[2,"responsive",null]],null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,x)),t.ob(2,16384,null,0,o.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(3,0,null,null,1,"li",[["class","small-screen"]],null,null,null,null,null)),(l()(),t.Db(4,null,[" "," / "," "])),(l()(),t.gb(16777216,null,null,1,null,h)),t.ob(6,278528,null,0,o.i,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.gb(16777216,null,null,1,null,L)),t.ob(8,16384,null,0,o.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.directionLinks),l(n,6,0,t.xb(n.parent,1).pages),l(n,8,0,u.directionLinks)},function(l,n){var u=n.component;l(n,0,0,u.screenReaderPaginationLabel,u.responsive),l(n,4,0,t.xb(n.parent,1).getCurrent(),t.xb(n.parent,1).getLastPage())})}function D(l){return t.Fb(2,[(l()(),t.pb(0,0,null,null,3,"pagination-template",[],null,[[null,"pageChange"]],function(l,n,u){var t=!0;return"pageChange"===n&&(t=!1!==l.component.pageChange.emit(u)&&t),t},null,null)),t.ob(1,737280,[["p",4]],0,b.d,[b.e,t.h],{id:[0,"id"],maxSize:[1,"maxSize"]},{pageChange:"pageChange"}),(l()(),t.gb(16777216,null,null,1,null,y)),t.ob(3,16384,null,0,o.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,1,0,u.id,u.maxSize),l(n,3,0,!(u.autoHide&&t.xb(n,1).pages.length<=1))},null)}var F=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),O=t.nb({encapsulation:2,styles:[[""]],data:{}});function P(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,4,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,3,"div",[["class","col-md-12 col-lg-12"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,2,"div",[["class","product-pagination"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,1,"pagination-controls",[["autoHide","true"],["maxSize","5"]],null,null,null,D,g)),t.ob(4,49152,null,0,b.c,[],{maxSize:[0,"maxSize"],autoHide:[1,"autoHide"]},null)],function(l,n){l(n,4,0,"5","true")},null)}var C=function(){function l(){this.products=[1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9],this.counts=[12,24,36]}return l.prototype.ngOnInit=function(){this.count=this.counts[0]},l}(),I=t.nb({encapsulation:0,styles:[[""]],data:{}});function S(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,27,"div",[["class","col-md-6 col-lg-3"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,26,"div",[["class","block-pricing"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,25,"div",[["class","table"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),t.Db(-1,null,["basic"])),(l()(),t.pb(5,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Db(-1,null,["$29"])),(l()(),t.pb(7,0,null,null,16,"ul",[["class","list-unstyled"]],null,null,null,null,null)),(l()(),t.pb(8,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.pb(9,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Db(-1,null,["4 GB"])),(l()(),t.Db(-1,null,[" Ram"])),(l()(),t.pb(12,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.pb(13,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Db(-1,null,["7/24"])),(l()(),t.Db(-1,null,[" Tech Support"])),(l()(),t.pb(16,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.pb(17,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Db(-1,null,["40 GB"])),(l()(),t.Db(-1,null,[" SSD Cloud Storage"])),(l()(),t.pb(20,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.Db(-1,null,["Monthly Backups"])),(l()(),t.pb(22,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.Db(-1,null,["Palo Protection"])),(l()(),t.pb(24,0,null,null,3,"div",[["class","table_btn"]],null,null,null,null,null)),(l()(),t.pb(25,0,null,null,2,"a",[["class","btn"],["href","#"]],null,null,null,null,null)),(l()(),t.pb(26,0,null,null,0,"i",[["class","fa fa-shopping-cart"]],null,null,null,null,null)),(l()(),t.Db(-1,null,[" Buy Now"]))],null,null)}function $(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,10,"section",[["class","padd-section text-center"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,9,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,1,"items-toolbar",[],null,null,null,s,r)),t.ob(3,114688,null,0,i,[],null,null),(l()(),t.pb(4,0,null,null,4,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,3,null,S)),t.ob(6,278528,null,0,o.i,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),t.Ab(7,{itemsPerPage:0,currentPage:1}),t.zb(0,b.b,[b.e]),(l()(),t.pb(9,0,null,null,1,"paginate",[],null,null,null,P,O)),t.ob(10,114688,null,0,F,[],null,null)],function(l,n){var u=n.component;l(n,3,0);var e=t.Eb(n,6,0,t.xb(n,8).transform(u.products,l(n,7,0,u.count,u.page)));l(n,6,0,e),l(n,10,0)},null)}function j(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"products",[],null,null,null,$,I)),t.ob(1,114688,null,0,C,[],null,null)],function(l,n){l(n,1,0)},null)}var R=t.lb("products",C,j,{},{},[]),z=u("PCNd"),M=u("ZYCi");u.d(n,"ProductsModuleNgFactory",function(){return B});var B=t.mb(e,[],function(l){return t.vb([t.wb(512,t.j,t.bb,[[8,[a.a,R]],[3,t.j],t.x]),t.wb(4608,o.l,o.k,[t.u,[2,o.r]]),t.wb(4608,b.e,b.e,[]),t.wb(1073742336,o.b,o.b,[]),t.wb(1073742336,b.a,b.a,[]),t.wb(1073742336,z.a,z.a,[]),t.wb(1073742336,M.o,M.o,[[2,M.u],[2,M.l]]),t.wb(1073742336,e,e,[]),t.wb(1024,M.j,function(){return[[{path:"",component:C}]]},[])])})}}]);