function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e){return i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},i(e)}function o(e,t){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},o(e,t)}function u(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=i(e);if(t){var o=i(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return u(this,r)}}function c(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var a="[big.js] ",l=a+"Invalid ",h=l+"decimal places",d={},p=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;function v(e,t,r,n){var i=e.c;if(undefined===r&&(r=e.constructor.RM),0!==r&&1!==r&&2!==r&&3!==r)throw Error("[big.js] Invalid rounding mode");if(t<1)n=3===r&&(n||!!i[0])||0===t&&(1===r&&i[0]>=5||2===r&&(i[0]>5||5===i[0]&&(n||undefined!==i[1]))),i.length=1,n?(e.e=e.e-t+1,i[0]=1):i[0]=e.e=0;else if(t<i.length){if(n=1===r&&i[t]>=5||2===r&&(i[t]>5||5===i[t]&&(n||undefined!==i[t+1]||1&i[t-1]))||3===r&&(n||!!i[0]),i.length=t,n)for(;++i[--t]>9;)if(i[t]=0,0===t){++e.e,i.unshift(1);break}for(t=i.length;!i[--t];)i.pop()}return e}function g(e,t,r){var n=e.e,i=e.c.join(""),o=i.length;if(t)i=i.charAt(0)+(o>1?"."+i.slice(1):"")+(n<0?"e":"e+")+n;else if(n<0){for(;++n;)i="0"+i;i="0."+i}else if(n>0)if(++n>o)for(n-=o;n--;)i+="0";else n<o&&(i=i.slice(0,n)+"."+i.slice(n));else o>1&&(i=i.charAt(0)+"."+i.slice(1));return e.s<0&&r?"-"+i:i}d.abs=function(){var e=new this.constructor(this);return e.s=1,e},d.cmp=function(e){var t,r=this,n=r.c,i=(e=new r.constructor(e)).c,o=r.s,u=e.s,s=r.e,c=e.e;if(!n[0]||!i[0])return n[0]?o:i[0]?-u:0;if(o!=u)return o;if(t=o<0,s!=c)return s>c^t?1:-1;for(u=(s=n.length)<(c=i.length)?s:c,o=-1;++o<u;)if(n[o]!=i[o])return n[o]>i[o]^t?1:-1;return s==c?0:s>c^t?1:-1},d.div=function(e){var t=this,r=t.constructor,n=t.c,i=(e=new r(e)).c,o=t.s==e.s?1:-1,u=r.DP;if(u!==~~u||u<0||u>1e6)throw Error(h);if(!i[0])throw Error("[big.js] Division by zero");if(!n[0])return e.s=o,e.c=[e.e=0],e;var s,c,f,a,l,d=i.slice(),p=s=i.length,g=n.length,y=n.slice(0,s),b=y.length,m=e,w=m.c=[],k=0,x=u+(m.e=t.e-e.e)+1;for(m.s=o,o=x<0?0:x,d.unshift(0);b++<s;)y.push(0);do{for(f=0;f<10;f++){if(s!=(b=y.length))a=s>b?1:-1;else for(l=-1,a=0;++l<s;)if(i[l]!=y[l]){a=i[l]>y[l]?1:-1;break}if(!(a<0))break;for(c=b==s?i:d;b;){if(y[--b]<c[b]){for(l=b;l&&!y[--l];)y[l]=9;--y[l],y[b]+=10}y[b]-=c[b]}for(;!y[0];)y.shift()}w[k++]=a?f:++f,y[0]&&a?y[b]=n[p]||0:y=[n[p]]}while((p++<g||undefined!==y[0])&&o--);return w[0]||1==k||(w.shift(),m.e--,x--),k>x&&v(m,x,r.RM,undefined!==y[0]),m},d.eq=function(e){return 0===this.cmp(e)},d.gt=function(e){return this.cmp(e)>0},d.gte=function(e){return this.cmp(e)>-1},d.lt=function(e){return this.cmp(e)<0},d.lte=function(e){return this.cmp(e)<1},d.minus=d.sub=function(e){var t,r,n,i,o=this,u=o.constructor,s=o.s,c=(e=new u(e)).s;if(s!=c)return e.s=-c,o.plus(e);var f=o.c.slice(),a=o.e,l=e.c,h=e.e;if(!f[0]||!l[0])return l[0]?e.s=-c:f[0]?e=new u(o):e.s=1,e;if(s=a-h){for((i=s<0)?(s=-s,n=f):(h=a,n=l),n.reverse(),c=s;c--;)n.push(0);n.reverse()}else for(r=((i=f.length<l.length)?f:l).length,s=c=0;c<r;c++)if(f[c]!=l[c]){i=f[c]<l[c];break}if(i&&(n=f,f=l,l=n,e.s=-e.s),(c=(r=l.length)-(t=f.length))>0)for(;c--;)f[t++]=0;for(c=t;r>s;){if(f[--r]<l[r]){for(t=r;t&&!f[--t];)f[t]=9;--f[t],f[r]+=10}f[r]-=l[r]}for(;0===f[--c];)f.pop();for(;0===f[0];)f.shift(),--h;return f[0]||(e.s=1,f=[h=0]),e.c=f,e.e=h,e},d.mod=function(e){var t,r=this,n=r.constructor,i=r.s,o=(e=new n(e)).s;if(!e.c[0])throw Error("[big.js] Division by zero");return r.s=e.s=1,t=1==e.cmp(r),r.s=i,e.s=o,t?new n(r):(i=n.DP,o=n.RM,n.DP=n.RM=0,r=r.div(e),n.DP=i,n.RM=o,this.minus(r.times(e)))},d.neg=function(){var e=new this.constructor(this);return e.s=-e.s,e},d.plus=d.add=function(e){var t,r,n,i=this,o=i.constructor;if(e=new o(e),i.s!=e.s)return e.s=-e.s,i.minus(e);var u=i.e,s=i.c,c=e.e,f=e.c;if(!s[0]||!f[0])return f[0]||(s[0]?e=new o(i):e.s=i.s),e;if(s=s.slice(),t=u-c){for(t>0?(c=u,n=f):(t=-t,n=s),n.reverse();t--;)n.push(0);n.reverse()}for(s.length-f.length<0&&(n=f,f=s,s=n),t=f.length,r=0;t;s[t]%=10)r=(s[--t]=s[t]+f[t]+r)/10|0;for(r&&(s.unshift(r),++c),t=s.length;0===s[--t];)s.pop();return e.c=s,e.e=c,e},d.pow=function(e){var t=this,r=new t.constructor("1"),n=r,i=e<0;if(e!==~~e||e<-1e6||e>1e6)throw Error(l+"exponent");for(i&&(e=-e);1&e&&(n=n.times(t)),e>>=1;)t=t.times(t);return i?r.div(n):n},d.prec=function(e,t){if(e!==~~e||e<1||e>1e6)throw Error(l+"precision");return v(new this.constructor(this),e,t)},d.round=function(e,t){if(undefined===e)e=0;else if(e!==~~e||e<-1e6||e>1e6)throw Error(h);return v(new this.constructor(this),e+this.e+1,t)},d.sqrt=function(){var e,t,r,n=this,i=n.constructor,o=n.s,u=n.e,s=new i("0.5");if(!n.c[0])return new i(n);if(o<0)throw Error(a+"No square root");0===(o=Math.sqrt(n+""))||o===1/0?((t=n.c.join("")).length+u&1||(t+="0"),u=((u+1)/2|0)-(u<0||1&u),e=new i(((o=Math.sqrt(t))==1/0?"5e":(o=o.toExponential()).slice(0,o.indexOf("e")+1))+u)):e=new i(o+""),u=e.e+(i.DP+=4);do{r=e,e=s.times(r.plus(n.div(r)))}while(r.c.slice(0,u).join("")!==e.c.slice(0,u).join(""));return v(e,(i.DP-=4)+e.e+1,i.RM)},d.times=d.mul=function(e){var t,r=this,n=r.constructor,i=r.c,o=(e=new n(e)).c,u=i.length,s=o.length,c=r.e,f=e.e;if(e.s=r.s==e.s?1:-1,!i[0]||!o[0])return e.c=[e.e=0],e;for(e.e=c+f,u<s&&(t=i,i=o,o=t,f=u,u=s,s=f),t=new Array(f=u+s);f--;)t[f]=0;for(c=s;c--;){for(s=0,f=u+c;f>c;)s=t[f]+o[c]*i[f-c-1]+s,t[f--]=s%10,s=s/10|0;t[f]=s}for(s?++e.e:t.shift(),c=t.length;!t[--c];)t.pop();return e.c=t,e},d.toExponential=function(e,t){var r=this,n=r.c[0];if(undefined!==e){if(e!==~~e||e<0||e>1e6)throw Error(h);for(r=v(new r.constructor(r),++e,t);r.c.length<e;)r.c.push(0)}return g(r,!0,!!n)},d.toFixed=function(e,t){var r=this,n=r.c[0];if(undefined!==e){if(e!==~~e||e<0||e>1e6)throw Error(h);for(e=e+(r=v(new r.constructor(r),e+r.e+1,t)).e+1;r.c.length<e;)r.c.push(0)}return g(r,!1,!!n)},d[Symbol.for("nodejs.util.inspect.custom")]=d.toJSON=d.toString=function(){var e=this,t=e.constructor;return g(e,e.e<=t.NE||e.e>=t.PE,!!e.c[0])},d.toNumber=function(){var e=Number(g(this,!0,!0));if(!0===this.constructor.strict&&!this.eq(e.toString()))throw Error(a+"Imprecise conversion");return e},d.toPrecision=function(e,t){var r=this,n=r.constructor,i=r.c[0];if(undefined!==e){if(e!==~~e||e<1||e>1e6)throw Error(l+"precision");for(r=v(new n(r),e,t);r.c.length<e;)r.c.push(0)}return g(r,e<=r.e||r.e<=n.NE||r.e>=n.PE,!!i)},d.valueOf=function(){var e=this,t=e.constructor;if(!0===t.strict)throw Error(a+"valueOf disallowed");return g(e,e.e<=t.NE||e.e>=t.PE,!0)};var y=function e(){function t(r){var n=this;if(!(n instanceof t))return undefined===r?e():new t(r);if(r instanceof t)n.s=r.s,n.e=r.e,n.c=r.c.slice();else{if("string"!=typeof r){if(!0===t.strict&&"bigint"!=typeof r)throw TypeError(l+"value");r=0===r&&1/r<0?"-0":String(r)}!function(e,t){var r,n,i;if(!p.test(t))throw Error(l+"number");e.s="-"==t.charAt(0)?(t=t.slice(1),-1):1,(r=t.indexOf("."))>-1&&(t=t.replace(".",""));(n=t.search(/e/i))>0?(r<0&&(r=n),r+=+t.slice(n+1),t=t.substring(0,n)):r<0&&(r=t.length);for(i=t.length,n=0;n<i&&"0"==t.charAt(n);)++n;if(n==i)e.c=[e.e=0];else{for(;i>0&&"0"==t.charAt(--i););for(e.e=r-n-1,e.c=[],r=0;n<=i;)e.c[r++]=+t.charAt(n++)}}(n,r)}n.constructor=t}return t.prototype=d,t.DP=20,t.RM=1,t.NE=-7,t.PE=21,t.strict=false,t.roundDown=0,t.roundHalfUp=1,t.roundHalfEven=2,t.roundUp=3,t}(),b=function(){function t(){e(this,t),this.queue=[]}return r(t,[{key:"pushTask",value:function(e,t){return this.queue.push({name:t,t:e}),this}},{key:"exec",value:function(){var e=null,r=t.execBefore(this.queue),n=r.hasValid,i=r.initTask;try{for(e=this.queue.shift().t();this.queue.length;)e=this.queue.shift().t(e)}catch(r){r.toString()===t.text.err&&(this.queue=[],e=!n&&t.text.invalid)}return i&&this.pushTask(i.t,i.name),e}}],[{key:"execBefore",value:function(e){var r=t.text,n=r.isValid,i=r.init;return e.reduce((function(e,t,r){return t.name===n&&(e.hasValid=!0),0===r&&t.name===i&&(e.initTask=t),e}),{hasValid:!1,initTask:null})}}]),t}();n(b,"text",{init:"init",isValid:"isValid",invalid:"Invalid Number",err:"Error: [big.js] Invalid number"});var m=function(){function t(){e(this,t)}return r(t,null,[{key:"toBig",value:function(e){return e instanceof y?e:new y(e)}},{key:"baseExecution",value:function(e,r){return e.slice(1).reduce((function(e,t){return e[r](t)}),t.toBig(e[0]))}},{key:"isNumber",value:function(e){return t.regs.number.test(e)}},{key:"helper",value:function(e,r){var n=c(e);return n.length?t[r].bind(null,n[0]):t[r]}},{key:"init",value:function(e){return e}},{key:"sqrt",value:function(e){return t.toBig(e).sqrt()}},{key:"toNumber",value:function(e){return t.toBig(e).toNumber()}},{key:"toRound",value:function(e){return t.toBig(e).round().toNumber()}},{key:"toFixed",value:function(e,r){return t.toBig(r).toFixed(e)}},{key:"toFixedMax",value:function(e,r){return parseFloat(t.toBig(r).toFixed(e))}},{key:"toThousandth",value:function(e){var r=t.toBig(e).toNumber();if(r%1==0)return String(r).replace(t.regs.thousand,",");if(r%1!=0){var n=String(r).split(".");return n[0].replace(t.regs.thousand,",")+".".concat(n[1])}}},{key:"toStructure",value:function(e){var r=t.toBig(e);return[Math.trunc(r.toNumber()),r.mod(1).toNumber()].filter(Boolean)}},{key:"isValid",value:function(e){return t.isNumber(e)}}]),t}();n(m,"version","0.0.2"),n(m,"regs",{thousand:/(?=\B(\d{3})+$)/g,number:/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i});var w=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&o(e,t)}(i,b);var n=s(i);function i(){return e(this,i),n.call(this)}return r(i,[{key:"add",value:function(){return i.fourCalculations.call(this,arguments,"plus")}},{key:"minus",value:function(){return i.fourCalculations.call(this,arguments,"minus")}},{key:"mul",value:function(){return i.fourCalculations.call(this,arguments,"times")}},{key:"div",value:function(){return i.fourCalculations.call(this,arguments,"div")}},{key:"pow",value:function(){return i.fourCalculations.call(this,arguments,"pow")}},{key:"sqrt",value:function(){return this.pushTask(m.helper(arguments,"sqrt"),"sqrt")}},{key:"toNumber",value:function(){return this.pushTask(m.helper(arguments,"toNumber"),"toNumber").exec()}},{key:"toRound",value:function(){return this.pushTask(m.helper(arguments,"toRound"),"toRound").exec()}},{key:"toFixed",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0,r=2===arguments.length?function(){return m.toFixed(e,t)}:function(t){return m.toFixed(e,t)};return this.pushTask(r,"toFixed").exec()}},{key:"toFixedMax",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0,r=2===arguments.length?function(){return m.toFixedMax(e,t)}:function(t){return m.toFixedMax(e,t)};return this.pushTask(r,"toFixedMax").exec()}},{key:"toThousandth",value:function(){return this.pushTask(m.helper(arguments,"toThousandth"),"toThousandth").exec()}},{key:"toStructure",value:function(){return this.pushTask(m.helper(arguments,"toStructure"),"toStructure").exec()}},{key:"isValid",value:function(){return this.pushTask(m.helper(arguments,"isValid"),"isValid").exec()}}],[{key:"fourCalculations",value:function(e,t){return e.length?this.pushTask((function(){for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return m.baseExecution(n.length?[].concat(n,c(e)):c(e),t)}),t):this}},{key:"init",value:function(e){return this.pushTask(m.init.bind(null,e),"init")}}]),i}();function k(e){var t=new w;return arguments.length?w.init.call(t,e):t}export{k as default,k as n};
