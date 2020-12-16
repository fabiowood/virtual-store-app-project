(this["webpackJsonpvirtual-store-app-project"]=this["webpackJsonpvirtual-store-app-project"]||[]).push([[0],{112:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(29),i=n.n(c),o=n(20),l=n(9),u=n(16),s=n(31),m=(n(72),n(52)),p=n.n(m),d=n(10),f={SIGN_UP_START:"SIGN_UP_START",SIGN_UP_SUCCESS:"SIGN_UP_SUCCESS",SIGN_UP_FAILURE:"SIGN_UP_FAILURE",GOOGLE_SIGN_IN_START:"GOOGLE_SIGN_IN_START",EMAIL_SIGN_IN_START:"EMAIL_SIGN_IN_START",SIGN_IN_SUCCESS:"SIGN_IN_SUCCESS",SIGN_IN_FAILURE:"SIGN_IN_FAILURE",CHECK_USER_SESSION:"CHECK_USER_SESSION",SIGN_OUT_START:"SIGN_OUT_START",SIGN_OUT_SUCCESS:"SIGN_OUT_SUCCESS",SIGN_OUT_FAILURE:"SIGN_OUT_FAILURE"},b={currentUser:null,error:null},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.SIGN_UP_SUCCESS:case f.SIGN_IN_SUCCESS:return Object(d.a)({},e,{currentUser:t.payload,error:null});case f.SIGN_UP_FAILURE:case f.SIGN_IN_FAILURE:case f.SIGN_OUT_FAILURE:return Object(d.a)({},e,{error:t.payload});case f.SIGN_OUT_SUCCESS:return Object(d.a)({},e,{currentUser:null,error:null});default:return e}},O="TOOGLE_CART_DISPLAY",h="ADD_ITEM_TO_CART",v="REMOVE_ITEM_FROM_CART",g="REMOVE_QUANTITY_FROM_ITEM",S="CLEAR_CART",j=n(59),y=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(d.a)({},e,{quantity:e.quantity+1}):Object(d.a)({},e)})):[].concat(Object(j.a)(e),[Object(d.a)({},t,{quantity:1})])},I=function(e,t){return e.filter((function(e){return e.id!==t.id}))},_=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?I(e,t):e.map((function(e){return e.id===t.id?Object(d.a)({},e,{quantity:e.quantity-1}):Object(d.a)({},e)}))},x={hiddenDropdown:!0,cartItems:[]},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(d.a)({},e,{hiddenDropdown:!e.hiddenDropdown});case h:return Object(d.a)({},e,{cartItems:y(e.cartItems,t.payload)});case v:return Object(d.a)({},e,{cartItems:I(e.cartItems,t.payload)});case g:return Object(d.a)({},e,{cartItems:_(e.cartItems,t.payload)});case S:return Object(d.a)({},e,{cartItems:[]});default:return e}},C={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"women",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/women"},{title:"men",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/men"}]},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;return t.type,e},k={FETCH_COLLECTIONS_START:"FETCH_COLLECTIONS_START",FETCH_COLLECTIONS_SUCCESS:"FETCH_COLLECTIONS_SUCCESS",FETCH_COLLECTIONS_FAILURE:"FETCH_COLLECTIONS_FAILURE"},T={collections:null,isFetching:!1,errorMessage:""},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k.FETCH_COLLECTIONS_START:return Object(d.a)({},e,{isFetching:!0});case k.FETCH_COLLECTIONS_SUCCESS:return Object(d.a)({},e,{isFetching:!1,collections:t.payload});case k.FETCH_COLLECTIONS_FAILURE:return Object(d.a)({},e,{isFetching:!1,errorMessage:t.payload});default:return e}},L={key:"root",storage:p.a,whitelist:["cart"]},A=Object(u.c)({user:E,cart:N,directory:w,shop:U}),R=Object(s.a)(L,A),G=n(60),F=n(2),P=n.n(F),H=n(5),D=n(26),M=n.n(D),q=(n(76),n(79),function(e,t){var n,a,r,c,i,o,l;return P.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:if(e){u.next=2;break}return u.abrupt("return");case 2:return n=z.doc("users/".concat(e.uid)),u.next=5,P.a.awrap(n.get());case 5:return a=u.sent,r=z.collection("users"),u.next=9,P.a.awrap(r.get());case 9:if(c=u.sent,console.log({collectionSnapshot:c}),console.log({collection:c.docs.map((function(e){return e.data()}))}),a.exists){u.next=23;break}return i=e.displayName,o=e.email,l=new Date,u.prev=15,u.next=18,P.a.awrap(n.set(Object(d.a)({displayName:i,email:o,createdAt:l},t)));case 18:u.next=23;break;case 20:u.prev=20,u.t0=u.catch(15),console.log("error creating the user",u.t0.message);case 23:return u.abrupt("return",n);case 24:case"end":return u.stop()}}),null,null,[[15,20]])});M.a.initializeApp({apiKey:"AIzaSyCoNjZVMVAPZeHpirLllqd6K-L7PsShr4c",authDomain:"virtual-store-app-project.firebaseapp.com",databaseURL:"https://virtual-store-app-project.firebaseio.com",projectId:"virtual-store-app-project",storageBucket:"virtual-store-app-project.appspot.com",messagingSenderId:"200336094879",appId:"1:200336094879:web:4daaccdfc466236ee0d4aa",measurementId:"G-8B3MXMQG3X"});var V=M.a.auth(),z=M.a.firestore(),B=new M.a.auth.GoogleAuthProvider;B.setCustomParameters({prompt:"select_account"});M.a;var Q=function(e){var t=e.docs.map((function(e){var t=e.data(),n=t.title,a=t.items;return{routeName:encodeURI(n.toLowerCase()),id:e.id,title:n,items:a}}));return console.log(t),t.reduce((function(e,t){return e[t.title.toLowerCase()]=t,e}),{})},K=function(){return new Promise((function(e,t){var n=V.onAuthStateChanged((function(t){n(),e(t)}),t)}))},W=function(){return{type:k.FETCH_COLLECTIONS_START}},X=function(e){return{type:k.FETCH_COLLECTIONS_SUCCESS,payload:e}},$=function(e){return{type:k.FETCH_COLLECTIONS_FAILURE,payload:e}},J=P.a.mark(ee),Y=P.a.mark(te),Z=P.a.mark(ne);function ee(){var e,t,n;return P.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,e=z.collection("collections"),a.next=4,e.get();case 4:return t=a.sent,a.next=7,Object(H.b)(Q,t);case 7:return n=a.sent,a.next=10,Object(H.c)(X(n));case 10:a.next=16;break;case 12:return a.prev=12,a.t0=a.catch(0),a.next=16,Object(H.c)($(a.t0.message));case 16:case"end":return a.stop()}}),J,null,[[0,12]])}function te(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(H.d)(k.FETCH_COLLECTIONS_START,ee);case 2:case"end":return e.stop()}}),Y)}function ne(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(H.a)([Object(H.b)(te)]);case 2:case"end":return e.stop()}}),Z)}var ae=function(e){return{type:f.SIGN_IN_SUCCESS,payload:e}},re=function(e){return{type:f.SIGN_IN_FAILURE,payload:e}},ce=function(){return{type:f.SIGN_OUT_SUCCESS}},ie=function(e){return{type:f.SIGN_OUT_FAILURE,payload:e}},oe=function(e){var t=e.user,n=e.additionalData;return{type:f.SIGN_UP_SUCCESS,payload:{user:t,additionalData:n}}},le=function(e){return{type:f.SIGN_UP_FAILURE,payload:e}},ue=P.a.mark(ye),se=P.a.mark(Ie),me=P.a.mark(_e),pe=P.a.mark(xe),de=P.a.mark(Ne),fe=P.a.mark(Ce),be=P.a.mark(we),Ee=P.a.mark(ke),Oe=P.a.mark(Te),he=P.a.mark(Ue),ve=P.a.mark(Le),ge=P.a.mark(Ae),Se=P.a.mark(Re),je=P.a.mark(Ge);function ye(e,t){var n,a;return P.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(H.b)(q,e,t);case 3:return n=r.sent,r.next=6,n.get();case 6:return a=r.sent,r.next=9,Object(H.c)(ae(Object(d.a)({id:a.id},a.data())));case 9:r.next=15;break;case 11:return r.prev=11,r.t0=r.catch(0),r.next=15,Object(H.c)(re(r.t0));case 15:case"end":return r.stop()}}),ue,null,[[0,11]])}function Ie(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(H.d)(f.SIGN_UP_START,_e);case 2:case"end":return e.stop()}}),se)}function _e(e){var t,n,a,r,c,i;return P.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload,n=t.email,a=t.password,r=t.displayName,o.prev=1,o.next=4,V.createUserWithEmailAndPassword(n,a);case 4:return c=o.sent,i=c.user,o.next=8,Object(H.c)(oe({user:i,additionalData:{displayName:r}}));case 8:o.next=14;break;case 10:return o.prev=10,o.t0=o.catch(1),o.next=14,Object(H.c)(le(o.t0));case 14:case"end":return o.stop()}}),me,null,[[1,10]])}function xe(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(H.d)(f.SIGN_UP_SUCCESS,Ne);case 2:case"end":return e.stop()}}),pe)}function Ne(e){var t,n,a;return P.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,n=t.user,a=t.additionalData,r.next=3,ye(n,a);case 3:case"end":return r.stop()}}),de)}function Ce(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(H.d)(f.GOOGLE_SIGN_IN_START,we);case 2:case"end":return e.stop()}}),fe)}function we(){var e,t;return P.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,V.signInWithPopup(B);case 3:return e=n.sent,t=e.user,n.next=7,ye(t);case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(H.c)(re(n.t0));case 13:case"end":return n.stop()}}),be,null,[[0,9]])}function ke(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(H.d)(f.EMAIL_SIGN_IN_START,Te);case 2:case"end":return e.stop()}}),Ee)}function Te(e){var t,n,a,r,c;return P.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,n=t.email,a=t.password,i.prev=1,i.next=4,V.signInWithEmailAndPassword(n,a);case 4:return r=i.sent,c=r.user,i.next=8,ye(c);case 8:i.next=14;break;case 10:return i.prev=10,i.t0=i.catch(1),i.next=14,Object(H.c)(re(i.t0));case 14:case"end":return i.stop()}}),Oe,null,[[1,10]])}function Ue(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(H.d)(f.CHECK_USER_SESSION,Le);case 2:case"end":return e.stop()}}),he)}function Le(){var e;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,K();case 3:if(e=t.sent){t.next=8;break}return t.abrupt("return");case 8:return t.next=10,ye(e);case 10:t.next=16;break;case 12:return t.prev=12,t.t0=t.catch(0),t.next=16,Object(H.c)(re(t.t0));case 16:case"end":return t.stop()}}),ve,null,[[0,12]])}function Ae(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(H.d)(f.SIGN_OUT_START,Re);case 2:case"end":return e.stop()}}),ge)}function Re(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V.signOut();case 3:return e.next=5,Object(H.c)(ce());case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,Object(H.c)(ie(e.t0));case 11:case"end":return e.stop()}}),Se,null,[[0,7]])}function Ge(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(H.a)([Object(H.b)(Ce),Object(H.b)(ke),Object(H.b)(Ue),Object(H.b)(Ae),Object(H.b)(Ie),Object(H.b)(xe)]);case 2:case"end":return e.stop()}}),je)}var Fe=function(){return{type:O}},Pe=function(e){return{type:h,payload:e}},He=function(){return{type:S}},De=P.a.mark(Ve),Me=P.a.mark(ze),qe=P.a.mark(Be);function Ve(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(H.c)(He());case 2:case"end":return e.stop()}}),De)}function ze(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(H.d)(f.SIGN_OUT_SUCCESS,Ve);case 2:case"end":return e.stop()}}),Me)}function Be(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(H.a)([Object(H.b)(ze)]);case 2:case"end":return e.stop()}}),qe)}var Qe=P.a.mark(Ke);function Ke(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(H.a)([Object(H.b)(ne),Object(H.b)(Ge),Object(H.b)(Be)]);case 2:case"end":return e.stop()}}),Qe)}var We=Object(G.a)(),Xe=[We];var $e=Object(u.e)(R,u.a.apply(void 0,Xe));We.run(Ke);var Je=Object(s.b)($e),Ye=n(53),Ze=(n(81),n(23)),et=n(8),tt=n(13),nt=n(14);function at(){var e=Object(tt.a)(['\n  body {\n    font-family: "Open Sans Condensed";\n    padding: 20px 50px;\n\n    @media screen and (max-width: 800px) {\n      padding: 10px;\n    }\n  }\n\n  a {\n    text-decoration: none;\n    color: black;\n    font-weight: 600;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n']);return at=function(){return e},e}var rt=Object(nt.a)(at()),ct=n(22),it=Object(et.a)([function(e){return e.directory}],(function(e){return e.sections})),ot=(n(82),n(83),Object(Ze.f)((function(e){var t=e.title,n=e.imageUrl,a=e.size,c=e.linkUrl,i=e.history,o=e.match;return r.a.createElement("article",{className:"menu-item ".concat(a),onClick:function(){return i.push("".concat(o.url).concat(c))}},r.a.createElement("div",{style:{backgroundImage:"url(".concat(n,")")},className:"background-image"}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("span",{className:"subtitle"},"SHOP NOW")))}))),lt=Object(et.b)({sections:it}),ut=Object(l.b)(lt)((function(e){var t=e.sections;return r.a.createElement("section",{className:"directory-menu"},t.map((function(e){var t=e.id,n=Object(ct.a)(e,["id"]);return r.a.createElement(ot,Object.assign({key:t},n))})))}));function st(){var e=Object(tt.a)(["\ndisplay: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px 80px;\n"]);return st=function(){return e},e}var mt=nt.c.section(st()),pt=function(){return r.a.createElement(mt,null,r.a.createElement(ut,null))},dt=function(e){return e.shop},ft=Object(et.a)([dt],(function(e){return e.collections})),bt=Object(et.a)([ft],(function(e){return e?Object.keys(e).map((function(t){return e[t]})):[]})),Et=(Object(et.a)([dt],(function(e){return e.isFetching})),Object(et.a)([dt],(function(e){return!!e.collections}))),Ot=(n(85),n(86),n(87),n(88),n(89),function(e){var t=e.children,n=e.isGoogleSignIn,a=e.hoverAddToCart,c=Object(ct.a)(e,["children","isGoogleSignIn","hoverAddToCart"]);return r.a.createElement("button",Object.assign({className:"".concat(n?"google-sign-in":""," ").concat(a?"inverted":""," custom-button")},c),t)}),ht=Object(l.b)(null,(function(e){return{addItem:function(t){return e(Pe(t))}}}))((function(e){var t=e.item,n=e.addItem,a=t.name,c=t.imageUrl,i=t.price;return r.a.createElement("article",{className:"collection-item"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(c,")")}}),r.a.createElement("div",{className:"collection-footer"},r.a.createElement("span",{className:"name"},a),r.a.createElement("span",{className:"price"},"$",i)),r.a.createElement(Ot,{hoverAddToCart:!0,onClick:function(){return n(t)}},"Add to Cart"))})),vt=function(e){var t=e.title,n=e.items;return r.a.createElement("section",{className:"collection-preview"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("div",{className:"preview"},n.filter((function(e,t){return t<4})).map((function(e){return r.a.createElement(ht,{key:e.id,item:e})}))))},gt=Object(et.b)({collections:bt}),St=Object(l.b)(gt)((function(e){var t=e.collections;return r.a.createElement("section",{className:"collections-overview"},t.map((function(e){var t=e.id,n=Object(ct.a)(e,["id"]);return r.a.createElement(vt,Object.assign({key:t},n))})))})),jt=(n(90),Object(l.b)((function(e,t){return{collection:(n=t.match.params.collectionId,Object(et.a)([ft],(function(e){return e?e[n]:null})))(e)};var n}))((function(e){var t=e.match,n=e.collection;console.log(t),console.log(t.params.collectionId),console.log(n);var a=n.title,c=n.items;return r.a.createElement("section",{className:"collection-page"},r.a.createElement("h2",{className:"title"},a),r.a.createElement("div",{className:"items"},c.map((function(e){return r.a.createElement(ht,{key:e.id,item:e})}))))})));function yt(){var e=Object(tt.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]);return yt=function(){return e},e}function It(){var e=Object(tt.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return It=function(){return e},e}var _t=nt.c.div(It()),xt=nt.c.div(yt()),Nt=function(e){return function(t){var n=t.isLoading,a=Object(ct.a)(t,["isLoading"]);return n?r.a.createElement(_t,null,r.a.createElement(xt,null)):r.a.createElement(e,a)}},Ct=Nt(St),wt=Nt(jt),kt=Object(et.b)({isCollectionLoaded:Et}),Tt=Object(l.b)(kt,(function(e){return{fetchCollectionsStart:function(){return e(W())}}}))((function(e){var t=e.fetchCollectionsStart,n=e.match,c=e.isCollectionLoaded;return Object(a.useEffect)((function(){t()}),[t]),r.a.createElement("section",{className:"shop-page"},r.a.createElement(Ze.a,{exact:!0,path:"".concat(n.path),render:function(e){return r.a.createElement(Ct,Object.assign({isLoading:!c},e))}}),r.a.createElement(Ze.a,{path:"".concat(n.path,"/:collectionId"),render:function(e){return r.a.createElement(wt,Object.assign({isLoading:!c},e))}}))}));function Ut(){return(Ut=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Lt(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var At=r.a.createElement("title",null,"Group"),Rt=r.a.createElement("desc",null,"Created with Sketch."),Gt=r.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),Ft=function(e){var t=e.svgRef,n=e.title,a=Lt(e,["svgRef","title"]);return r.a.createElement("svg",Ut({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},a),void 0===n?At:n?r.a.createElement("title",null,n):null,Rt,Gt)},Pt=r.a.forwardRef((function(e,t){return r.a.createElement(Ft,Ut({svgRef:t},e))}));n.p;function Ht(){return(Ht=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Dt(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Mt=r.a.createElement("g",null),qt=r.a.createElement("g",null),Vt=r.a.createElement("g",null),zt=r.a.createElement("g",null),Bt=r.a.createElement("g",null),Qt=r.a.createElement("g",null),Kt=r.a.createElement("g",null),Wt=r.a.createElement("g",null),Xt=r.a.createElement("g",null),$t=r.a.createElement("g",null),Jt=r.a.createElement("g",null),Yt=r.a.createElement("g",null),Zt=r.a.createElement("g",null),en=r.a.createElement("g",null),tn=r.a.createElement("g",null),nn=function(e){var t=e.svgRef,n=e.title,a=Dt(e,["svgRef","title"]);return r.a.createElement("svg",Ht({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},a),n?r.a.createElement("title",null,n):null,r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),Mt,qt,Vt,zt,Bt,Qt,Kt,Wt,Xt,$t,Jt,Yt,Zt,en,tn)},an=r.a.forwardRef((function(e,t){return r.a.createElement(nn,Ht({svgRef:t},e))})),rn=(n.p,function(e){return e.cart}),cn=Object(et.a)([rn],(function(e){return e.cartItems})),on=Object(et.a)([cn],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),ln=Object(et.a)([rn],(function(e){return e.hiddenDropdown})),un=Object(et.a)([cn],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),sn=(n(91),Object(et.b)({iconCount:on})),mn=Object(l.b)(sn,(function(e){return{setCartDropdownDisplay:function(){return e(Fe())}}}))((function(e){var t=e.setCartDropdownDisplay,n=e.iconCount;return r.a.createElement("section",{className:"cart-icon",onClick:t},r.a.createElement(an,{className:"shopping-icon"}),r.a.createElement("span",{className:"item-count"},n))})),pn=(n(92),n(93),function(e){var t=e.item,n=t.imageUrl,a=t.name,c=t.price,i=t.quantity;return r.a.createElement("section",{className:"cart-item"},r.a.createElement("img",{src:n,alt:"item added to the shop cart"}),r.a.createElement("div",{className:"item-details"},r.a.createElement("span",{className:"name"},a),r.a.createElement("span",{className:"price"},i," x $",c)))}),dn=Object(et.b)({cartItems:cn}),fn=Object(Ze.f)(Object(l.b)(dn)((function(e){var t=e.cartItems,n=e.history,a=e.dispatch;return r.a.createElement("section",{className:"cart-dropdown"},r.a.createElement("div",{className:"cart-items"},t.length?t.map((function(e){return r.a.createElement(pn,{key:e.id,item:e})})):r.a.createElement("span",{className:"empty-message"},"Your cart is empty")),r.a.createElement(Ot,{onClick:function(){n.push("/checkout"),a(Fe())}},"Go to Checkout"))}))),bn=Object(et.a)([function(e){return e.user}],(function(e){return e.currentUser}));function En(){var e=Object(tt.a)(["\n  ","\n"]);return En=function(){return e},e}function On(){var e=Object(tt.a)(["\n  ","\n"]);return On=function(){return e},e}function hn(){var e=Object(tt.a)(["\n  width: 50%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n\n  @media screen and (max-width: 800px) {\n      width: 80%;\n    }\n"]);return hn=function(){return e},e}function vn(){var e=Object(tt.a)(["\n  height: 100%;\n  width: 70px;\n  padding: 25px;\n\n  @media screen and (max-width: 800px) {\n     height: 40px;\n     padding: 0;\n    }\n"]);return vn=function(){return e},e}function gn(){var e=Object(tt.a)(["\n  height: 70px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 25px;\n\n  @media screen and (max-width: 800px) {\n      height: 60px;\n      padding: 10px;\n      margin-bottom: 20px;\n    }\n"]);return gn=function(){return e},e}function Sn(){var e=Object(tt.a)(["\n  padding: 10px 15px;\n  cursor: pointer;\n  font-weight: 600;\n"]);return Sn=function(){return e},e}var jn=Object(nt.b)(Sn()),yn=nt.c.header(gn()),In=Object(nt.c)(o.b)(vn()),_n=nt.c.nav(hn()),xn=(nt.c.div(On(),jn),Object(nt.c)(o.b)(En(),jn)),Nn=Object(et.b)({currentUser:bn,hiddenDropdown:ln}),Cn=Object(l.b)(Nn,(function(e){return{signOutStart:function(){return e({type:f.SIGN_OUT_START})}}}))((function(e){e.currentUser;var t=e.hiddenDropdown;e.signOutStart;return r.a.createElement(yn,null,r.a.createElement(In,{to:"/",alt:"shop logo"},r.a.createElement(Pt,{className:"logo"})),r.a.createElement(_n,null,r.a.createElement(xn,{to:"/shop"},"LOJA"),r.a.createElement(xn,null,r.a.createElement("a",{href:"mailto:fabgmad@gmail.com"},"CONTATO")),r.a.createElement(mn,null)),t?null:r.a.createElement(fn,null))})),wn=(n(94),n(95),Object(l.b)(null,(function(e){return{addItem:function(t){return e(Pe(t))},removeItem:function(t){return e(function(e){return{type:v,payload:e}}(t))},removeQuantityFromItem:function(t){return e(function(e){return{type:g,payload:e}}(t))}}}))((function(e){var t=e.cartItem,n=e.addItem,a=e.removeItem,c=e.removeQuantityFromItem,i=t.imageUrl,o=t.name,l=t.quantity,u=t.price;return r.a.createElement("article",{className:"checkout-item"},r.a.createElement("picture",{className:"image-container"},r.a.createElement("img",{src:i,alt:"item in your checkout ready to buy"})),r.a.createElement("div",{className:"name"},o),r.a.createElement("div",{className:"quantity"},r.a.createElement("div",{className:"arrow",onClick:function(){return c(t)}},"\u276e"),r.a.createElement("span",{className:"value"},l),r.a.createElement("div",{className:"arrow",onClick:function(){return n(t)}},"\u276f")),r.a.createElement("div",{className:"price"},"$",u),r.a.createElement("div",{className:"remove-button",onClick:function(){return a(t)}},"\u2715"))}))),kn=n(57),Tn=n.n(kn),Un=n(58),Ln=n.n(Un),An=function(e){var t=e.price,n=100*t;return r.a.createElement(Tn.a,{label:"Pay Now",name:"Virtual Clothing Ltd.",billingAddress:!0,shippingAddress:!0,image:"https://sendeyo.com/up/d/f3eb2117da",description:"Your total is $".concat(t),amount:n,panelLabel:"Pay Now",token:function(e){Ln()({url:"payment",method:"post",data:{amount:n,token:e}}).then((function(e){alert("Payment successfully completed")})).catch((function(e){console.log("Payment error: ",e),alert("There was a problem with the payment. Please make sure to use the correct credit card.")}))},stripeKey:"pk_test_bxIFqEFOlSBXLGQkxxJcTUHm00XhXqInQA"})},Rn=Object(et.b)({cartItems:cn,cartTotalValue:un}),Gn=Object(l.b)(Rn)((function(e){var t=e.cartItems,n=e.cartTotalValue;return r.a.createElement("section",{className:"checkout-page"},r.a.createElement("header",{className:"checkout-header"},r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Product")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Description")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Quantity")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Price")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Remove"))),r.a.createElement("div",null,t.map((function(e){return r.a.createElement(wn,{key:e.id,cartItem:e})}))),r.a.createElement("div",{className:"total"},"TOTAL: $",n),r.a.createElement("div",{className:"test-warning"},"*Please use the following test credit card for payments*",r.a.createElement("br",null),"4242 4242 4242 4242 - Exp: 01/20 - CVV: 123"),r.a.createElement(An,{price:n}))})),Fn=Object(et.b)({currentUser:bn}),Pn=Object(l.b)(Fn,(function(e){return{checkUserSession:function(){return e({type:f.CHECK_USER_SESSION})}}}))((function(e){var t=e.checkUserSession;e.currentUser;return Object(a.useEffect)((function(){t()}),[t]),r.a.createElement("div",null,r.a.createElement(rt,null),r.a.createElement(Cn,null),r.a.createElement(Ze.c,null,r.a.createElement(Ze.a,{exact:!0,path:"/",component:pt}),r.a.createElement(Ze.a,{path:"/shop",component:Tt}),r.a.createElement(Ze.a,{path:"/checkout",component:Gn})))}));i.a.render(r.a.createElement(l.a,{store:$e},r.a.createElement(o.a,null,r.a.createElement(Ye.a,{persistor:Je},r.a.createElement(Pn,null)))),document.getElementById("root"))},63:function(e,t,n){e.exports=n(112)},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){}},[[63,1,2]]]);
//# sourceMappingURL=main.f5e35481.chunk.js.map