!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define("tile",t):(e=e||self).tile=t()}(this,function(){"use strict";var e="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};e.setTimeout,e.clearTimeout;var t=e.performance||{};t.now||t.mozNow||t.msNow||t.oNow||t.webkitNow;function n(e,t){return e(t={exports:{}},t.exports),t.exports}var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;var i=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,i,u=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var c in n=Object(arguments[s]))o.call(n,c)&&(u[c]=n[c]);if(r){i=r(n);for(var l=0;l<i.length;l++)a.call(n,i[l])&&(u[i[l]]=n[i[l]])}}return u};function u(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);!function(e,t,n,r,o,a,i,u){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,r,o,a,i,u],c=0;(e=Error(t.replace(/%s/g,function(){return s[c++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var s={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},c={};function l(e,t,n){this.props=e,this.context=t,this.refs=c,this.updater=n||s}function f(){}function p(e,t,n){this.props=e,this.context=t,this.refs=c,this.updater=n||s}l.prototype.isReactComponent={},l.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&u("85"),this.updater.enqueueSetState(this,e,t,"setState")},l.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},f.prototype=l.prototype;var d=p.prototype=new f;d.constructor=p,i(d,l.prototype),d.isPureReactComponent=!0;var y=function(){},h="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",m={},v=Function.call.bind(Object.prototype.hasOwnProperty);function g(e,t,n,r,o){for(var a in e)if(v(e,a)){var i;try{if("function"!=typeof e[a]){var u=Error((r||"React class")+": "+n+" type `"+a+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[a]+"`.");throw u.name="Invariant Violation",u}i=e[a](t,a,r,n,null,h)}catch(e){i=e}if(!i||i instanceof Error||y((r||"React class")+": type specification of "+n+" `"+a+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof i+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),i instanceof Error&&!(i.message in m)){m[i.message]=!0;var s=o?o():"";y("Failed "+n+" type: "+i.message+(null!=s?s:""))}}}y=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},g.resetWarningCache=function(){m={}};var b=g,w=n(function(e){!function(){var t=i,n=b,r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,a=r?Symbol.for("react.portal"):60106,u=r?Symbol.for("react.fragment"):60107,s=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,l=r?Symbol.for("react.provider"):60109,f=r?Symbol.for("react.context"):60110,p=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,y=r?Symbol.for("react.suspense"):60113,h=r?Symbol.for("react.memo"):60115,m=r?Symbol.for("react.lazy"):60116,v="function"==typeof Symbol&&Symbol.iterator,g="@@iterator";function w(e){if(null===e||"object"!=typeof e)return null;var t=v&&e[v]||e[g];return"function"==typeof t?t:null}var _=function(){};function C(e,t,n,r,o,a,i,u){if(_(t),!e){var s=void 0;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,a,i,u],l=0;(s=new Error(t.replace(/%s/g,function(){return c[l++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}}_=function(e){if(void 0===e)throw new Error("invariant requires an error message argument")};var x=function(e,t){if(void 0===t)throw new Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");if(!e){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];(function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,a="Warning: "+e.replace(/%s/g,function(){return n[o++]});"undefined"!=typeof console&&console.warn(a);try{throw new Error(a)}catch(e){}}).apply(void 0,[t].concat(r))}},k=function(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];if(void 0===t)throw new Error("`warningWithoutStack(condition, format, ...args)` requires a warning message argument");if(r.length>8)throw new Error("warningWithoutStack() currently supports at most 8 arguments.");if(!e){if("undefined"!=typeof console){var a=r.map(function(e){return""+e});a.unshift("Warning: "+t),Function.prototype.apply.call(console.error,console,a)}try{var i=0,u="Warning: "+t.replace(/%s/g,function(){return r[i++]});throw new Error(u)}catch(e){}}},P={};function R(e,t){var n=e.constructor,r=n&&(n.displayName||n.name)||"ReactClass",o=r+"."+t;P[o]||(k(!1,"Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",t,r),P[o]=!0)}var j={isMounted:function(e){return!1},enqueueForceUpdate:function(e,t,n){R(e,"forceUpdate")},enqueueReplaceState:function(e,t,n,r){R(e,"replaceState")},enqueueSetState:function(e,t,n,r){R(e,"setState")}},S={};function O(e,t,n){this.props=e,this.context=t,this.refs=S,this.updater=n||j}Object.freeze(S),O.prototype.isReactComponent={},O.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&C(!1,"setState(...): takes an object of state variables to update or a function which returns an object of state variables."),this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};var E={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]},$=function(e,t){Object.defineProperty(O.prototype,e,{get:function(){x(!1,"%s(...) is deprecated in plain JavaScript React classes. %s",t[0],t[1])}})};for(var T in E)E.hasOwnProperty(T)&&$(T,E[T]);function I(){}function N(e,t,n){this.props=e,this.context=t,this.refs=S,this.updater=n||j}I.prototype=O.prototype;var A=N.prototype=new I;A.constructor=N,t(A,O.prototype),A.isPureReactComponent=!0;var M={current:null},D={current:null},q=/^(.*)[\\\/]/,F=1;function U(e){if(null==e)return null;if("number"==typeof e.tag&&k(!1,"Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."),"function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case p:return"ConcurrentMode";case u:return"Fragment";case a:return"Portal";case c:return"Profiler";case s:return"StrictMode";case y:return"Suspense"}if("object"==typeof e)switch(e.$$typeof){case f:return"Context.Consumer";case l:return"Context.Provider";case d:return r=e,o=e.render,i="ForwardRef",v=o.displayName||o.name||"",r.displayName||(""!==v?i+"("+v+")":i);case h:return U(e.type);case m:var t=(n=e)._status===F?n._result:null;if(t)return U(t)}var n,r,o,i,v;return null}var H={},L=null;function W(e){L=e}H.getCurrentStack=null,H.getStackAddendum=function(){var e="";if(L){var t=U(L.type),n=L._owner;e+=function(e,t,n){var r="";if(t){var o=t.fileName,a=o.replace(q,"");if(/^index\./.test(a)){var i=o.match(q);if(i){var u=i[1];u&&(a=u.replace(q,"")+"/"+a)}}r=" (at "+a+":"+t.lineNumber+")"}else n&&(r=" (created by "+n+")");return"\n    in "+(e||"Unknown")+r}(t,L._source,n&&U(n.type))}var r=H.getCurrentStack;return r&&(e+=r()||""),e};var z={ReactCurrentDispatcher:M,ReactCurrentOwner:D,assign:t};t(z,{ReactDebugCurrentFrame:H,ReactComponentTreeHook:{}});var V=function(e,t){if(!e){for(var n=z.ReactDebugCurrentFrame.getStackAddendum(),r=arguments.length,o=Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];k.apply(void 0,[!1,t+"%s"].concat(o,[n]))}},Y=Object.prototype.hasOwnProperty,B={key:!0,ref:!0,__self:!0,__source:!0},J=void 0,X=void 0;function Z(e){if(Y.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return void 0!==e.ref}function G(e){if(Y.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return void 0!==e.key}var K=function(e,t,n,r,a,i,u){var s={$$typeof:o,type:e,key:t,ref:n,props:u,_owner:i,_store:{}};return Object.defineProperty(s._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(s,"_self",{configurable:!1,enumerable:!1,writable:!1,value:r}),Object.defineProperty(s,"_source",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.freeze&&(Object.freeze(s.props),Object.freeze(s)),s};function Q(e,t,n){var r=void 0,o={},a=null,i=null,u=null,s=null;if(null!=t)for(r in Z(t)&&(i=t.ref),G(t)&&(a=""+t.key),u=void 0===t.__self?null:t.__self,s=void 0===t.__source?null:t.__source,t)Y.call(t,r)&&!B.hasOwnProperty(r)&&(o[r]=t[r]);var c=arguments.length-2;if(1===c)o.children=n;else if(c>1){for(var l=Array(c),f=0;f<c;f++)l[f]=arguments[f+2];Object.freeze&&Object.freeze(l),o.children=l}if(e&&e.defaultProps){var p=e.defaultProps;for(r in p)void 0===o[r]&&(o[r]=p[r])}if(a||i){var d="function"==typeof e?e.displayName||e.name||"Unknown":e;a&&function(e,t){var n=function(){J||(J=!0,k(!1,"%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)",t))};n.isReactWarning=!0,Object.defineProperty(e,"key",{get:n,configurable:!0})}(o,d),i&&function(e,t){var n=function(){X||(X=!0,k(!1,"%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)",t))};n.isReactWarning=!0,Object.defineProperty(e,"ref",{get:n,configurable:!0})}(o,d)}return K(e,a,i,u,s,D.current,o)}function ee(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var te=".",ne=":";var re=!1,oe=/\/+/g;function ae(e){return(""+e).replace(oe,"$&/")}var ie=10,ue=[];function se(e,t,n,r){if(ue.length){var o=ue.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function ce(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,ue.length<ie&&ue.push(e)}function le(e,t,n){return null==e?0:function e(t,n,r,i){var u=typeof t;"undefined"!==u&&"boolean"!==u||(t=null);var s=!1;if(null===t)s=!0;else switch(u){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case o:case a:s=!0}}if(s)return r(i,t,""===n?te+fe(t,0):n),1;var c=void 0,l=0,f=""===n?te:n+ne;if(Array.isArray(t))for(var p=0;p<t.length;p++)l+=e(c=t[p],f+fe(c,p),r,i);else{var d=w(t);if("function"==typeof d){d===t.entries&&(re||V(!1,"Using Maps as children is unsupported and will likely yield unexpected results. Convert it to a sequence/iterable of keyed ReactElements instead."),re=!0);for(var y=d.call(t),h=void 0,m=0;!(h=y.next()).done;)l+=e(c=h.value,f+fe(c,m++),r,i)}else if("object"===u){var v;v=" If you meant to render a collection of children, use an array instead."+H.getStackAddendum();var g=""+t;C(!1,"Objects are not valid as a React child (found: %s).%s","[object Object]"===g?"object with keys {"+Object.keys(t).join(", ")+"}":g,v)}}return l}(e,"",t,n)}function fe(e,t){return"object"==typeof e&&null!==e&&null!=e.key?(n=e.key,r={"=":"=0",":":"=2"},"$"+(""+n).replace(/[=:]/g,function(e){return r[e]})):t.toString(36);var n,r}function pe(e,t,n){var r=e.func,o=e.context;r.call(o,t,e.count++)}function de(e,t,n){var r,o,a=e.result,i=e.keyPrefix,u=e.func,s=e.context,c=u.call(s,t,e.count++);Array.isArray(c)?ye(c,a,n,function(e){return e}):null!=c&&(ee(c)&&(r=c,o=i+(!c.key||t&&t.key===c.key?"":ae(c.key)+"/")+n,c=K(r.type,o,r.ref,r._self,r._source,r._owner,r.props)),a.push(c))}function ye(e,t,n,r,o){var a="";null!=n&&(a=ae(n)+"/");var i=se(t,a,r,o);le(e,de,i),ce(i)}function he(e){return"string"==typeof e||"function"==typeof e||e===u||e===p||e===c||e===s||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===h||e.$$typeof===l||e.$$typeof===f||e.$$typeof===d)}function me(){var e=M.current;return null===e&&C(!1,"Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem."),e}var ve=void 0;function ge(){if(D.current){var e=U(D.current.type);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}ve=!1;var be={};function we(e,t){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var n=function(e){var t=ge();if(!t){var n="string"==typeof e?e:e.displayName||e.name;n&&(t="\n\nCheck the top-level render call using <"+n+">.")}return t}(t);if(!be[n]){be[n]=!0;var r="";e&&e._owner&&e._owner!==D.current&&(r=" It was passed a child from "+U(e._owner.type)+"."),W(e),V(!1,'Each child in a list should have a unique "key" prop.%s%s See https://fb.me/react-warning-keys for more information.',n,r),W(null)}}}function _e(e,t){if("object"==typeof e)if(Array.isArray(e))for(var n=0;n<e.length;n++){var r=e[n];ee(r)&&we(r,t)}else if(ee(e))e._store&&(e._store.validated=!0);else if(e){var o=w(e);if("function"==typeof o&&o!==e.entries)for(var a=o.call(e),i=void 0;!(i=a.next()).done;)ee(i.value)&&we(i.value,t)}}function Ce(e){var t=e.type;if(null!=t&&"string"!=typeof t){var r=U(t),o=void 0;if("function"==typeof t)o=t.propTypes;else{if("object"!=typeof t||t.$$typeof!==d&&t.$$typeof!==h)return;o=t.propTypes}o?(W(e),n(o,e.props,"prop",r,H.getStackAddendum),W(null)):void 0===t.PropTypes||ve||(ve=!0,k(!1,"Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",r||"Unknown")),"function"==typeof t.getDefaultProps&&(t.getDefaultProps.isReactClassApproved||k(!1,"getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead."))}}function xe(e,t,n){var r=he(e);if(!r){var a="";(void 0===e||"object"==typeof e&&null!==e&&0===Object.keys(e).length)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var i=function(e){if(null!=e&&void 0!==e.__source){var t=e.__source;return"\n\nCheck your code at "+t.fileName.replace(/^.*[\\\/]/,"")+":"+t.lineNumber+"."}return""}(t);a+=i||ge();var s=void 0;null===e?s="null":Array.isArray(e)?s="array":void 0!==e&&e.$$typeof===o?(s="<"+(U(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):s=typeof e,V(!1,"React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",s,a)}var c=Q.apply(this,arguments);if(null==c)return c;if(r)for(var l=2;l<arguments.length;l++)_e(arguments[l],e);return e===u?function(e){W(e);for(var t=Object.keys(e.props),n=0;n<t.length;n++){var r=t[n];if("children"!==r&&"key"!==r){V(!1,"Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",r);break}}null!==e.ref&&V(!1,"Invalid attribute `ref` supplied to `React.Fragment`."),W(null)}(c):Ce(c),c}var ke={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return ye(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;var r=se(null,null,t,n);le(e,pe,r),ce(r)},count:function(e){return le(e,function(){return null},null)},toArray:function(e){var t=[];return ye(e,t,null,function(e){return e}),t},only:function(e){return ee(e)||C(!1,"React.Children.only expected to receive a single React element child."),e}},createRef:function(){var e={current:null};return Object.seal(e),e},Component:O,PureComponent:N,createContext:function(e,t){void 0===t?t=null:null!==t&&"function"!=typeof t&&k(!1,"createContext: Expected the optional second argument to be a function. Instead received: %s",t);var n={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null};n.Provider={$$typeof:l,_context:n};var r=!1,o=!1,a={$$typeof:f,_context:n,_calculateChangedBits:n._calculateChangedBits};return Object.defineProperties(a,{Provider:{get:function(){return o||(o=!0,V(!1,"Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")),n.Provider},set:function(e){n.Provider=e}},_currentValue:{get:function(){return n._currentValue},set:function(e){n._currentValue=e}},_currentValue2:{get:function(){return n._currentValue2},set:function(e){n._currentValue2=e}},_threadCount:{get:function(){return n._threadCount},set:function(e){n._threadCount=e}},Consumer:{get:function(){return r||(r=!0,V(!1,"Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")),n.Consumer}}}),n.Consumer=a,n._currentRenderer=null,n._currentRenderer2=null,n},forwardRef:function(e){return null!=e&&e.$$typeof===h?k(!1,"forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):"function"!=typeof e?k(!1,"forwardRef requires a render function but was given %s.",null===e?"null":typeof e):0!==e.length&&2!==e.length&&k(!1,"forwardRef render functions accept exactly two parameters: props and ref. %s",1===e.length?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),null!=e&&(null!=e.defaultProps||null!=e.propTypes)&&k(!1,"forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?"),{$$typeof:d,render:e}},lazy:function(e){var t={$$typeof:m,_ctor:e,_status:-1,_result:null},n=void 0,r=void 0;return Object.defineProperties(t,{defaultProps:{configurable:!0,get:function(){return n},set:function(e){V(!1,"React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),n=e,Object.defineProperty(t,"defaultProps",{enumerable:!0})}},propTypes:{configurable:!0,get:function(){return r},set:function(e){V(!1,"React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),r=e,Object.defineProperty(t,"propTypes",{enumerable:!0})}}}),t},memo:function(e,t){return he(e)||k(!1,"memo: The first argument must be a component. Instead received: %s",null===e?"null":typeof e),{$$typeof:h,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return me().useCallback(e,t)},useContext:function(e,t){var n=me();if(void 0!==t&&V(!1,"useContext() second argument is reserved for future use in React. Passing it is not supported. You passed: %s.%s",t,"number"==typeof t&&Array.isArray(arguments[2])?"\n\nDid you call array.map(useContext)? Calling Hooks inside a loop is not supported. Learn more at https://fb.me/rules-of-hooks":""),void 0!==e._context){var r=e._context;r.Consumer===e?V(!1,"Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?"):r.Provider===e&&V(!1,"Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?")}return n.useContext(e,t)},useEffect:function(e,t){return me().useEffect(e,t)},useImperativeHandle:function(e,t,n){return me().useImperativeHandle(e,t,n)},useDebugValue:function(e,t){return me().useDebugValue(e,t)},useLayoutEffect:function(e,t){return me().useLayoutEffect(e,t)},useMemo:function(e,t){return me().useMemo(e,t)},useReducer:function(e,t,n){return me().useReducer(e,t,n)},useRef:function(e){return me().useRef(e)},useState:function(e){return me().useState(e)},Fragment:u,StrictMode:s,Suspense:y,createElement:xe,cloneElement:function(e,n,r){for(var o=function(e,n,r){null==e&&C(!1,"React.cloneElement(...): The argument must be a React element, but you passed %s.",e);var o=void 0,a=t({},e.props),i=e.key,u=e.ref,s=e._self,c=e._source,l=e._owner;if(null!=n){Z(n)&&(u=n.ref,l=D.current),G(n)&&(i=""+n.key);var f=void 0;for(o in e.type&&e.type.defaultProps&&(f=e.type.defaultProps),n)Y.call(n,o)&&!B.hasOwnProperty(o)&&(void 0===n[o]&&void 0!==f?a[o]=f[o]:a[o]=n[o])}var p=arguments.length-2;if(1===p)a.children=r;else if(p>1){for(var d=Array(p),y=0;y<p;y++)d[y]=arguments[y+2];a.children=d}return K(e.type,i,u,s,c,l,a)}.apply(this,arguments),a=2;a<arguments.length;a++)_e(arguments[a],o.type);return Ce(o),o},createFactory:function(e){var t=xe.bind(null,e);return t.type=e,Object.defineProperty(t,"type",{enumerable:!1,get:function(){return x(!1,"Factory.type is deprecated. Access the class directly before passing it to createFactory."),Object.defineProperty(this,"type",{value:e}),e}}),t},isValidElement:ee,version:"16.8.6",unstable_ConcurrentMode:p,unstable_Profiler:c,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:z},Pe=Object.freeze({default:ke}),Re=Pe&&ke||Pe,je=Re.default||Re;e.exports=je}()}),_=n(function(e){e.exports=w}),C=_.Component;n(function(e){!function(){var t={}.hasOwnProperty;function n(){for(var e=[],r=0;r<arguments.length;r++){var o=arguments[r];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o)&&o.length){var i=n.apply(null,o);i&&e.push(i)}else if("object"===a)for(var u in o)t.call(o,u)&&o[u]&&e.push(u)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n}()});const x="/Users/matilde/git/tlon/urbit/pkg/interface/clock/tile/tile.js",k=234,P=218;var R=function(e,t){return{x:e*Math.cos(t),y:e*Math.sin(t)}};class j extends C{constructor(e){super(e),this.animate=this.animate.bind(this),this.hourHand=this.hourHand.bind(this),this.minuteHand=this.minuteHand.bind(this),this.secondHand=this.secondHand.bind(this),this.canvasRef=_.createRef(),this.dodecagonImg=null,this.canvas=null}componentDidMount(){this.canvas=O(this.canvasRef,{x:P,y:P},4),this.animate()}hourHand(e,t){var n=t.getMinutes()+60*t.getHours();e.fillStyle="black",e.beginPath(),e.arc(P/2,P/2,5,0,2*Math.PI),e.fill(),e.strokeStyle="black",e.beginPath(),e.moveTo(P/2,P/2);var r=Math.PI/-2+2*Math.PI/720*n,o=R(.22*P,r);o.x+=P/2,o.y+=P/2,e.lineTo(o.x,o.y),e.stroke()}minuteHand(e,t){var n=t.getSeconds()+60*t.getMinutes();e.strokeStyle="black",e.beginPath(),e.moveTo(P/2,P/2);var r=Math.PI/-2+2*Math.PI/3600*n,o=R(.35*P,r);o.x+=P/2,o.y+=P/2,e.lineTo(o.x,o.y),e.stroke()}secondHand(e,t){var n=t.getSeconds();let r={x:P/2,y:.75*P};e.fillStyle="red",e.beginPath(),e.arc(r.x,r.y,5,0,2*Math.PI),e.fill(),e.strokeStyle="red",e.beginPath();var o=Math.PI/-2+2*Math.PI/60*n,a=R(30,o),i=R(-10,o);a.x+=r.x,a.y+=r.y,i.x+=r.x,i.y+=r.y,e.moveTo(i.x,i.y),e.lineTo(a.x,a.y),e.stroke()}animate(){var e=new Date,t=this.canvas,n=t.getContext("2d");n.clearRect(0,0,t.width,t.height),n.save(),n.translate(.5,.5),this.secondHand(n,e),this.hourHand(n,e),this.minuteHand(n,e),n.restore(),window.requestAnimationFrame(this.animate)}render(){return _.createElement("div",{style:{position:"relative"},__self:this,__source:{fileName:x,lineNumber:130}},_.createElement("svg",{style:{position:"absolute"},width:"218",height:"218",viewBox:"0 0 234 234",fill:"none",xmlns:"http://www.w3.org/2000/svg",__self:this,__source:{fileName:x,lineNumber:132}},_.createElement("path",{d:"M112.859 1.10961C115.572 0.38269 118.428 0.38269 121.141 1.10961L171.359 14.5654C174.072 15.2923 176.546 16.7206 178.531 18.7065L215.293 55.4685C217.279 57.4545 218.708 59.9282 219.435 62.6411L232.89 112.859C233.617 115.572 233.617 118.428 232.89 121.141L219.435 171.359C218.708 174.072 217.279 176.546 215.293 178.531L178.531 215.293C176.546 217.279 174.072 218.708 171.359 219.435L121.141 232.89C118.428 233.617 115.572 233.617 112.859 232.89L62.6411 219.435C59.9282 218.708 57.4545 217.279 55.4685 215.293L18.7065 178.531C16.7206 176.546 15.2923 174.072 14.5654 171.359L1.10961 121.141C0.38269 118.428 0.38269 115.572 1.10961 112.859L14.5654 62.6411C15.2923 59.9282 16.7206 57.4545 18.7065 55.4685L55.4685 18.7065C57.4545 16.7206 59.9282 15.2923 62.6411 14.5654L112.859 1.10961Z",fill:"white",__self:this,__source:{fileName:x,lineNumber:133}})),_.createElement("canvas",{style:{position:"absolute"},ref:e=>this.canvasRef=e,id:"clock-canvas",__self:this,__source:{fileName:x,lineNumber:136}}))}}class S extends C{constructor(e){super(e)}renderWrapper(e){return _.createElement("div",{className:"pa2",style:{width:k,height:k,background:"rgba(0,0,0,1)"},__self:this,__source:{fileName:x,lineNumber:152}},e)}render(){this.props.data&&this.props.data;return this.renderWrapper(_.createElement(j,{__self:this,__source:{fileName:x,lineNumber:166}}))}}const O=(e,t,n)=>{const{x:r,y:o}=t;e.getContext("2d");return e.width=r*n,e.height=o*n,e.style.width=r+"px",e.style.height=o+"px",e.getContext("2d").scale(n,n),e};return window.clockTile=S,S});