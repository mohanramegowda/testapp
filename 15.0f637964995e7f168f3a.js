(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"1rOE":function(n,l,e){"use strict";e.r(l);var a=e("CcnG"),t=function(){return function(){}}(),b=e("NcP4"),i=e("xYTU"),u=e("t68o"),o=e("zbXB"),c=e("pMnS"),r=e("zyo+"),d=e("ZbIm"),s=e("/WpX"),E=e("21Lb"),f=e("OzfB"),p=e("Fzqc"),m=e("bujt"),g=e("UodH"),y=e("lLAP"),h=e("wFw1"),w=e("Mr+X"),x=e("SMsm"),A=e("vAft"),k=function(){function n(n){this.dialog=n,this.fields=[{name:"UserName",type:"Textbox",label:"User Name",defaultValue:"",validation:[{name:"required",message:"User Name is Required"}]},{name:"Password",type:"Password",label:"Password",defaultValue:"",validation:[{name:"required",message:"Password is Required"}]},{name:"Email",type:"EmailBox",label:"Email",defaultValue:"",validation:[{name:"required",message:"Password is Required"},{name:"pattern",value:"^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$",message:"Invalid Email"}]},{name:"Country",type:"Dropdown",label:"Country",defaultValue:"",validation:[{name:"required",message:"Country is Required"}]}]}return n.prototype.ngOnInit=function(){},n.prototype.OnAddNewField=function(){var n=this;this.dialog.open(A.a).afterClosed().subscribe((function(l){l&&n.fields.push(l)}))},n.prototype.OnActions=function(n){if(n)switch(n.mode){case"Edit":this.editTemplate(n.field);break;case"Delete":this.fields.splice(this.fields.indexOf(n.field),1)}},n.prototype.editTemplate=function(n){var l=this,e=this.fields.indexOf(n);this.dialog.open(A.a,{data:n}).afterClosed().subscribe((function(n){n&&(l.fields[e]=n)}))},n}(),v=e("o3x0"),L=a.sb({encapsulation:0,styles:[[""]],data:{}});function j(n){return a.Pb(0,[(n()(),a.ub(0,0,null,null,13,"div",[["class","full-height"]],null,null,null,null,null)),(n()(),a.ub(1,0,null,null,1,"app-field-configuration-engine",[],null,[[null,"emitter"]],(function(n,l,e){var a=!0;return"emitter"===l&&(a=!1!==n.component.OnActions(e)&&a),a}),d.b,d.a)),a.tb(2,114688,null,0,s.a,[],{fields:[0,"fields"]},{emitter:"emitter"}),(n()(),a.ub(3,0,null,null,10,"div",[["fxLayout","row wrap"],["fxLayoutAlign","center center"],["fxLayoutGap","20px"]],null,null,null,null,null)),a.tb(4,671744,null,0,E.c,[a.k,f.i,[2,E.k],f.f],{fxLayout:[0,"fxLayout"]},null),a.tb(5,1720320,null,0,E.d,[a.k,a.A,p.b,f.i,[2,E.j],f.f],{fxLayoutGap:[0,"fxLayoutGap"]},null),a.tb(6,671744,null,0,E.b,[a.k,f.i,[2,E.i],f.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(n()(),a.ub(7,0,null,null,6,"button",[["class","stroked-button"],["fxLayoutAlign","center center"],["mat-stroked-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(n,l,e){var a=!0;return"click"===l&&(a=!1!==n.component.OnAddNewField()&&a),a}),m.d,m.b)),a.tb(8,671744,null,0,E.b,[a.k,f.i,[2,E.i],f.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),a.tb(9,180224,null,0,g.b,[a.k,y.h,[2,h.a]],null,null),(n()(),a.ub(10,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,w.b,w.a)),a.tb(11,9158656,null,0,x.b,[a.k,x.d,[8,null],[2,x.a],[2,a.l]],null,null),(n()(),a.Nb(-1,0,["add"])),(n()(),a.Nb(-1,0,[" Add Field "]))],(function(n,l){n(l,2,0,l.component.fields),n(l,4,0,"row wrap"),n(l,5,0,"20px"),n(l,6,0,"center center"),n(l,8,0,"center center"),n(l,11,0)}),(function(n,l){n(l,7,0,a.Gb(l,9).disabled||null,"NoopAnimations"===a.Gb(l,9)._animationMode),n(l,10,0,a.Gb(l,11).inline,"primary"!==a.Gb(l,11).color&&"accent"!==a.Gb(l,11).color&&"warn"!==a.Gb(l,11).color)}))}function q(n){return a.Pb(0,[(n()(),a.ub(0,0,null,null,1,"app-login-registration",[],null,null,null,j,L)),a.tb(1,114688,null,0,k,[v.e],null,null)],(function(n,l){n(l,1,0)}),null)}var N=a.qb("app-login-registration",k,q,{},{},[]),P=e("Ip0R"),C=e("gIcY"),G=e("eDkP"),O=e("mVsa"),Z=e("M2Lx"),z=e("uGex"),V=e("Wf4p"),F=e("v9Dh"),M=e("ZYjt"),R=e("jQLj"),Y=e("dWZg"),S=e("S8NE"),U=e("hUWP"),B=e("3pJQ"),D=e("V9q+"),I=e("8mMr"),W=e("4c35"),T=e("qAlS"),_=e("seP3"),J=e("La40"),Q=e("/VYK"),X=e("b716"),K=e("Blfk"),H=e("/dO6"),$=e("Nsh5"),nn=e("de3e"),ln=e("FVSy"),en=e("LC5p"),an=e("0/Q6"),tn=e("vARd"),bn=e("kWGw"),un=e("w+lc"),on=e("YhbO"),cn=e("jlZm"),rn=e("5dmV"),dn=e("ZYCi"),sn=e("PCNd"),En=function(){return function(){}}(),fn=e("YSh2");e.d(l,"LoginRegistrationModuleNgFactory",(function(){return pn}));var pn=a.rb(t,[],(function(n){return a.Db([a.Eb(512,a.j,a.cb,[[8,[b.a,i.a,i.b,u.a,o.b,o.a,c.a,r.a,N]],[3,a.j],a.y]),a.Eb(4608,P.m,P.l,[a.v,[2,P.B]]),a.Eb(4608,C.u,C.u,[]),a.Eb(4608,C.e,C.e,[]),a.Eb(5120,a.b,(function(n,l){return[f.j(n,l)]}),[P.d,a.C]),a.Eb(4608,G.c,G.c,[G.i,G.e,a.j,G.h,G.f,a.r,a.A,P.d,p.b,[2,P.g]]),a.Eb(5120,G.j,G.k,[G.c]),a.Eb(5120,O.c,O.j,[G.c]),a.Eb(4608,Z.c,Z.c,[]),a.Eb(5120,z.a,z.b,[G.c]),a.Eb(4608,V.b,V.b,[]),a.Eb(5120,F.b,F.c,[G.c]),a.Eb(4608,M.e,V.c,[[2,V.g],[2,V.l]]),a.Eb(5120,v.c,v.d,[G.c]),a.Eb(135680,v.e,v.e,[G.c,a.r,[2,P.g],[2,v.b],v.c,[3,v.e],G.e]),a.Eb(4608,R.h,R.h,[]),a.Eb(5120,R.a,R.b,[G.c]),a.Eb(4608,V.a,V.v,[[2,V.f],Y.a]),a.Eb(1073742336,P.c,P.c,[]),a.Eb(1073742336,C.t,C.t,[]),a.Eb(1073742336,C.j,C.j,[]),a.Eb(1073742336,S.d,S.d,[]),a.Eb(1073742336,C.q,C.q,[]),a.Eb(1073742336,f.c,f.c,[]),a.Eb(1073742336,p.a,p.a,[]),a.Eb(1073742336,E.g,E.g,[]),a.Eb(1073742336,U.b,U.b,[]),a.Eb(1073742336,B.a,B.a,[]),a.Eb(1073742336,D.a,D.a,[[2,f.g],a.C]),a.Eb(1073742336,V.l,V.l,[[2,V.d],[2,M.f]]),a.Eb(1073742336,Y.b,Y.b,[]),a.Eb(1073742336,V.u,V.u,[]),a.Eb(1073742336,g.c,g.c,[]),a.Eb(1073742336,I.b,I.b,[]),a.Eb(1073742336,W.g,W.g,[]),a.Eb(1073742336,T.c,T.c,[]),a.Eb(1073742336,G.g,G.g,[]),a.Eb(1073742336,O.i,O.i,[]),a.Eb(1073742336,O.f,O.f,[]),a.Eb(1073742336,V.s,V.s,[]),a.Eb(1073742336,V.q,V.q,[]),a.Eb(1073742336,Z.d,Z.d,[]),a.Eb(1073742336,_.e,_.e,[]),a.Eb(1073742336,z.d,z.d,[]),a.Eb(1073742336,y.a,y.a,[]),a.Eb(1073742336,J.j,J.j,[]),a.Eb(1073742336,Q.c,Q.c,[]),a.Eb(1073742336,X.b,X.b,[]),a.Eb(1073742336,K.a,K.a,[]),a.Eb(1073742336,H.b,H.b,[]),a.Eb(1073742336,$.h,$.h,[]),a.Eb(1073742336,nn.b,nn.b,[]),a.Eb(1073742336,nn.a,nn.a,[]),a.Eb(1073742336,ln.c,ln.c,[]),a.Eb(1073742336,V.m,V.m,[]),a.Eb(1073742336,en.b,en.b,[]),a.Eb(1073742336,an.c,an.c,[]),a.Eb(1073742336,x.c,x.c,[]),a.Eb(1073742336,F.e,F.e,[]),a.Eb(1073742336,tn.d,tn.d,[]),a.Eb(1073742336,bn.b,bn.b,[]),a.Eb(1073742336,bn.a,bn.a,[]),a.Eb(1073742336,un.a,un.a,[]),a.Eb(1073742336,v.k,v.k,[]),a.Eb(1073742336,R.i,R.i,[]),a.Eb(1073742336,V.w,V.w,[]),a.Eb(1073742336,V.n,V.n,[]),a.Eb(1073742336,on.c,on.c,[]),a.Eb(1073742336,cn.c,cn.c,[]),a.Eb(1073742336,rn.a,rn.a,[]),a.Eb(1073742336,dn.n,dn.n,[[2,dn.s],[2,dn.l]]),a.Eb(1073742336,sn.a,sn.a,[]),a.Eb(1073742336,En,En,[]),a.Eb(1073742336,t,t,[]),a.Eb(256,H.a,{separatorKeyCodes:[fn.f]},[]),a.Eb(256,V.e,V.i,[]),a.Eb(1024,dn.j,(function(){return[[{path:"",component:k}]]}),[])])}))}}]);