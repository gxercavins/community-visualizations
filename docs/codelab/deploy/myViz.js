!function(e,R){"object"==typeof exports&&"object"==typeof module?module.exports=R():"function"==typeof define&&define.amd?define("dscc",[],R):"object"==typeof exports?exports.dscc=R():e.dscc=R()}(window,function(){return function(e){var R={};function t(C){if(R[C])return R[C].exports;var n=R[C]={i:C,l:!1,exports:{}};return e[C].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=e,t.c=R,t.d=function(e,R,C){t.o(e,R)||Object.defineProperty(e,R,{configurable:!1,enumerable:!0,get:C})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var R=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(R,"a",R),R},t.o=function(e,R){return Object.prototype.hasOwnProperty.call(e,R)},t.p="",t(t.s="./src/index.ts")}({"./node_modules/querystringify/index.js":function(e,R,t){"use strict";var C=Object.prototype.hasOwnProperty;function n(e){return decodeURIComponent(e.replace(/\+/g," "))}R.stringify=function(e,R){R=R||"";var t=[];for(var n in"string"!=typeof R&&(R="?"),e)C.call(e,n)&&t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t.length?R+t.join("&"):""},R.parse=function(e){for(var R,t=/([^=?&]+)=?([^&]*)/g,C={};R=t.exec(e);){var o=n(R[1]),r=n(R[2]);o in C||(C[o]=r)}return C}},"./node_modules/requires-port/index.js":function(e,R,t){"use strict";e.exports=function(e,R){if(R=R.split(":")[0],!(e=+e))return!1;switch(R){case"http":case"ws":return 80!==e;case"https":case"wss":return 443!==e;case"ftp":return 21!==e;case"gopher":return 70!==e;case"file":return!1}return 0!==e}},"./node_modules/url-parse/index.js":function(e,R,t){"use strict";(function(R){var C=t("./node_modules/requires-port/index.js"),n=t("./node_modules/querystringify/index.js"),o=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,r=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,E=[["#","hash"],["?","query"],["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],s={hash:1,query:1};function N(e){var t,C={},n=typeof(e=e||R.location||{});if("blob:"===e.protocol)C=new _(unescape(e.pathname),{});else if("string"===n)for(t in C=new _(e,{}),s)delete C[t];else if("object"===n){for(t in e)t in s||(C[t]=e[t]);void 0===C.slashes&&(C.slashes=r.test(e.href))}return C}function a(e){var R=o.exec(e);return{protocol:R[1]?R[1].toLowerCase():"",slashes:!!R[2],rest:R[3]}}function _(e,R,t){if(!(this instanceof _))return new _(e,R,t);var o,r,s,i,U,Y,c=E.slice(),u=typeof R,p=this,l=0;for("object"!==u&&"string"!==u&&(t=R,R=null),t&&"function"!=typeof t&&(t=n.parse),R=N(R),o=!(r=a(e||"")).protocol&&!r.slashes,p.slashes=r.slashes||o&&R.slashes,p.protocol=r.protocol||R.protocol||"",e=r.rest,r.slashes||(c[2]=[/(.*)/,"pathname"]);l<c.length;l++)s=(i=c[l])[0],Y=i[1],s!=s?p[Y]=e:"string"==typeof s?~(U=e.indexOf(s))&&("number"==typeof i[2]?(p[Y]=e.slice(0,U),e=e.slice(U+i[2])):(p[Y]=e.slice(U),e=e.slice(0,U))):(U=s.exec(e))&&(p[Y]=U[1],e=e.slice(0,U.index)),p[Y]=p[Y]||o&&i[3]&&R[Y]||"",i[4]&&(p[Y]=p[Y].toLowerCase());t&&(p.query=t(p.query)),o&&R.slashes&&"/"!==p.pathname.charAt(0)&&(""!==p.pathname||""!==R.pathname)&&(p.pathname=function(e,R){for(var t=(R||"/").split("/").slice(0,-1).concat(e.split("/")),C=t.length,n=t[C-1],o=!1,r=0;C--;)"."===t[C]?t.splice(C,1):".."===t[C]?(t.splice(C,1),r++):r&&(0===C&&(o=!0),t.splice(C,1),r--);return o&&t.unshift(""),"."!==n&&".."!==n||t.push(""),t.join("/")}(p.pathname,R.pathname)),C(p.port,p.protocol)||(p.host=p.hostname,p.port=""),p.username=p.password="",p.auth&&(i=p.auth.split(":"),p.username=i[0]||"",p.password=i[1]||""),p.origin=p.protocol&&p.host&&"file:"!==p.protocol?p.protocol+"//"+p.host:"null",p.href=p.toString()}_.prototype={set:function(e,R,t){var o=this;switch(e){case"query":"string"==typeof R&&R.length&&(R=(t||n.parse)(R)),o[e]=R;break;case"port":o[e]=R,C(R,o.protocol)?R&&(o.host=o.hostname+":"+R):(o.host=o.hostname,o[e]="");break;case"hostname":o[e]=R,o.port&&(R+=":"+o.port),o.host=R;break;case"host":o[e]=R,/:\d+$/.test(R)?(R=R.split(":"),o.port=R.pop(),o.hostname=R.join(":")):(o.hostname=R,o.port="");break;case"protocol":o.protocol=R.toLowerCase(),o.slashes=!t;break;case"pathname":case"hash":if(R){var r="pathname"===e?"/":"#";o[e]=R.charAt(0)!==r?r+R:R}else o[e]=R;break;default:o[e]=R}for(var s=0;s<E.length;s++){var N=E[s];N[4]&&(o[N[1]]=o[N[1]].toLowerCase())}return o.origin=o.protocol&&o.host&&"file:"!==o.protocol?o.protocol+"//"+o.host:"null",o.href=o.toString(),o},toString:function(e){e&&"function"==typeof e||(e=n.stringify);var R,t=this,C=t.protocol;C&&":"!==C.charAt(C.length-1)&&(C+=":");var o=C+(t.slashes?"//":"");return t.username&&(o+=t.username,t.password&&(o+=":"+t.password),o+="@"),o+=t.host+t.pathname,(R="object"==typeof t.query?e(t.query):t.query)&&(o+="?"!==R.charAt(0)?"?"+R:R),t.hash&&(o+=t.hash),o}},_.extractProtocol=a,_.location=N,_.qs=n,e.exports=_}).call(this,t("./node_modules/webpack/buildin/global.js"))},"./node_modules/webpack/buildin/global.js":function(e,R){var t;t=function(){return this}();try{t=t||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(t=window)}e.exports=t},"./src/index.ts":function(e,R,t){"use strict";Object.defineProperty(R,"__esModule",{value:!0});var C=t("./node_modules/url-parse/index.js"),n=t("./src/types.ts");!function(e){for(var t in e)R.hasOwnProperty(t)||(R[t]=e[t])}(t("./src/types.ts")),R.getWidth=function(){return document.body.clientWidth},R.getHeight=function(){return document.documentElement.clientHeight};R.parseImage=function(e){var R=e.split("  "),t=R[0],C=R[1];return{altText:R[2],originalUrl:t,proxiedUrl:C}},R.fieldsById=function(e){return e.fields.reduce(function(e,R){return e[R.id]=R,e},{})};var o=function(e,t,C,o){var E=function(e,t,C){var o,r;return(r=t,(o=C).length<r.length?o.map(function(e,R){return[e,r[R]]}):r.map(function(e,R){return[o[R],e]})).reduce(function(t,C){var o=C[0],r=C[1],E=e[o].type===n.FieldType.IMAGE?R.parseImage(r):r;return t[o]=E,t},{})}(t,o,C);return e.config.data.reduce(function(e,R){return e.concat(R.elements)},[]).filter(r).reduce(function(e,R){var t=R.value.map(function(e){return E[e]});return e[R.id]=t,e},{})},r=function(e){return e.type===n.ConfigDataElementType.DIMENSION||e.type===n.ConfigDataElementType.METRIC};R.rowsByConfigId=function(e){var t,C,r=R.fieldsById(e);(t={})[n.TableType.COMPARISON]=[],t[n.TableType.DEFAULT]=[],t[n.TableType.SUMMARY]=[];return e.dataResponse.tables.reduce(function(R,t){var C=t.rows.map(function(R){return o(e,r,t.fields,R)});return R[t.id]=C,R},((C={})[n.TableType.COMPARISON]=[],C[n.TableType.DEFAULT]=[],C[n.TableType.SUMMARY]=[],C))},R.subscribeToData=function(e){var R=function(R){R.data.type===n.MessageType.RENDER?e(R.data):console.error("MessageType: "+R.data.type+" is not supported by this version of the library.")};window.addEventListener("message",R);var t=C(window.parent.location.href,!0).query.componentId;return window.parent.postMessage({componentId:t,type:"vizReady"},"*"),function(){return window.removeEventListener("message",R)}}},"./src/types.ts":function(e,R,t){"use strict";Object.defineProperty(R,"__esModule",{value:!0}),function(e){e.RENDER="RENDER"}(R.MessageType||(R.MessageType={})),function(e){e.YEAR="YEAR",e.YEAR_QUARTER="YEAR_QUARTER",e.YEAR_MONTH="YEAR_MONTH",e.YEAR_WEEK="YEAR_WEEK",e.YEAR_MONTH_DAY="YEAR_MONTH_DAY",e.YEAR_MONTH_DAY_HOUR="YEAR_MONTH_DAY_HOUR",e.QUARTER="QUARTER",e.MONTH="MONTH",e.WEEK="WEEK",e.MONTH_DAY="MONTH_DAY",e.DAY_OF_WEEK="DAY_OF_WEEK",e.DAY="DAY",e.HOUR="HOUR",e.MINUTE="MINUTE",e.DURATION="DURATION",e.COUNTRY="COUNTRY",e.COUNTRY_CODE="COUNTRY_CODE",e.CONTINENT="CONTINENT",e.CONTINENT_CODE="CONTINENT_CODE",e.SUB_CONTINENT="SUB_CONTINENT",e.SUB_CONTINENT_CODE="SUB_CONTINENT_CODE",e.REGION="REGION",e.REGION_CODE="REGION_CODE",e.CITY="CITY",e.CITY_CODE="CITY_CODE",e.METRO_CODE="METRO_CODE",e.LATITUDE_LONGITUDE="LATITUDE_LONGITUDE",e.NUMBER="NUMBER",e.PERCENT="PERCENT",e.TEXT="TEXT",e.BOOLEAN="BOOLEAN",e.URL="URL",e.IMAGE="IMAGE",e.CURRENCY_AED="CURRENCY_AED",e.CURRENCY_ALL="CURRENCY_ALL",e.CURRENCY_ARS="CURRENCY_ARS",e.CURRENCY_AUD="CURRENCY_AUD",e.CURRENCY_BDT="CURRENCY_BDT",e.CURRENCY_BGN="CURRENCY_BGN",e.CURRENCY_BOB="CURRENCY_BOB",e.CURRENCY_BRL="CURRENCY_BRL",e.CURRENCY_CAD="CURRENCY_CAD",e.CURRENCY_CDF="CURRENCY_CDF",e.CURRENCY_CHF="CURRENCY_CHF",e.CURRENCY_CLP="CURRENCY_CLP",e.CURRENCY_CNY="CURRENCY_CNY",e.CURRENCY_COP="CURRENCY_COP",e.CURRENCY_CRC="CURRENCY_CRC",e.CURRENCY_CZK="CURRENCY_CZK",e.CURRENCY_DKK="CURRENCY_DKK",e.CURRENCY_DOP="CURRENCY_DOP",e.CURRENCY_EGP="CURRENCY_EGP",e.CURRENCY_ETB="CURRENCY_ETB",e.CURRENCY_EUR="CURRENCY_EUR",e.CURRENCY_GBP="CURRENCY_GBP",e.CURRENCY_HKD="CURRENCY_HKD",e.CURRENCY_HRK="CURRENCY_HRK",e.CURRENCY_HUF="CURRENCY_HUF",e.CURRENCY_IDR="CURRENCY_IDR",e.CURRENCY_ILS="CURRENCY_ILS",e.CURRENCY_INR="CURRENCY_INR",e.CURRENCY_IRR="CURRENCY_IRR",e.CURRENCY_ISK="CURRENCY_ISK",e.CURRENCY_JMD="CURRENCY_JMD",e.CURRENCY_JPY="CURRENCY_JPY",e.CURRENCY_KRW="CURRENCY_KRW",e.CURRENCY_LKR="CURRENCY_LKR",e.CURRENCY_LTL="CURRENCY_LTL",e.CURRENCY_MNT="CURRENCY_MNT",e.CURRENCY_MVR="CURRENCY_MVR",e.CURRENCY_MXN="CURRENCY_MXN",e.CURRENCY_MYR="CURRENCY_MYR",e.CURRENCY_NOK="CURRENCY_NOK",e.CURRENCY_NZD="CURRENCY_NZD",e.CURRENCY_PAB="CURRENCY_PAB",e.CURRENCY_PEN="CURRENCY_PEN",e.CURRENCY_PHP="CURRENCY_PHP",e.CURRENCY_PKR="CURRENCY_PKR",e.CURRENCY_PLN="CURRENCY_PLN",e.CURRENCY_RON="CURRENCY_RON",e.CURRENCY_RSD="CURRENCY_RSD",e.CURRENCY_RUB="CURRENCY_RUB",e.CURRENCY_SAR="CURRENCY_SAR",e.CURRENCY_SEK="CURRENCY_SEK",e.CURRENCY_SGD="CURRENCY_SGD",e.CURRENCY_THB="CURRENCY_THB",e.CURRENCY_TRY="CURRENCY_TRY",e.CURRENCY_TWD="CURRENCY_TWD",e.CURRENCY_TZS="CURRENCY_TZS",e.CURRENCY_UAH="CURRENCY_UAH",e.CURRENCY_USD="CURRENCY_USD",e.CURRENCY_UYU="CURRENCY_UYU",e.CURRENCY_VEF="CURRENCY_VEF",e.CURRENCY_VND="CURRENCY_VND",e.CURRENCY_YER="CURRENCY_YER",e.CURRENCY_ZAR="CURRENCY_ZAR"}(R.FieldType||(R.FieldType={})),function(e){e.DEFAULT="DEFAULT",e.COMPARISON="COMPARISON",e.SUMMARY="SUMMARY"}(R.TableType||(R.TableType={})),function(e){e[e.METRIC=2]="METRIC",e[e.DIMENSION=1]="DIMENSION",e.SORT="SORT",e[e.MAX_RESULTS=3]="MAX_RESULTS"}(R.ConfigDataElementType||(R.ConfigDataElementType={})),function(e){e[e.TEXTINPUT=1]="TEXTINPUT",e[e.SELECT_SINGLE=2]="SELECT_SINGLE",e[e.CHECKBOX=3]="CHECKBOX",e[e.FONT_COLOR=4]="FONT_COLOR",e[e.FONT_SIZE=5]="FONT_SIZE",e[e.FONT_FAMILY=6]="FONT_FAMILY",e[e.FILL_COLOR=7]="FILL_COLOR",e[e.BORDER_COLOR=8]="BORDER_COLOR",e[e.AXIS_COLOR=9]="AXIS_COLOR",e[e.GRID_COLOR=10]="GRID_COLOR",e[e.OPACITY=11]="OPACITY",e[e.LINE_WEIGHT=12]="LINE_WEIGHT",e[e.LINE_STYLE=13]="LINE_STYLE",e[e.BORDER_RADIUS=14]="BORDER_RADIUS",e[e.INTERVAL=15]="INTERVAL",e[e.SELECT_RADIO=16]="SELECT_RADIO"}(R.ConfigStyleElementType||(R.ConfigStyleElementType={}))}})});var canvasElement = document.createElement("canvas");
var ctx = canvasElement.getContext("2d");
ctx.canvas.width = dscc.getWidth() - 20;
ctx.canvas.height = dscc.getHeight() - 100;
canvasElement.id = "myViz";
document.body.appendChild(canvasElement);

var barWidth = 50;
var barGap = 10;
var maxBarHeight = 300;
var canvasPadding = 50;

function drawViz(vizData) {
  var data = dscc.rowsByConfigId(vizData).DEFAULT;
  // Place the canvas element on the page.
  var ctx = canvasElement.getContext("2d");

  // Clear the canvas.
  ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);

  // 'barMetric' comes from the id defined in myViz.json
  var rowsTotal = data.reduce(function(acc, row){
    return acc += row["barMetric"][0]
  }, 0);

  // parse the style to an object with keys "configId": "value"
  var parsedStyle = {};
  var flattenedStyle = vizData.config.style.reduce(function(acc, section){
    return acc.concat(section.elements);
  }, []);

  flattenedStyle.forEach(function(d){
    parsedStyle[d.id] = d.value;
  });

  // Use the Bar Color style element value to set the rectangle color.
  ctx.fillStyle = parsedStyle.barColor.color;


  var textYOffset = 20;

  // Calculate height and draw bars for each row of data.
  for (var i = 0; i < data.length; i++) {
    var barHeight = Math.round(
      -1 * maxBarHeight * (data[i]["barMetric"][0] / rowsTotal)
    );
    var barX = (ctx.canvas.width / data.length) * i + barWidth / 2;
    // Draw bars.
    ctx.fillRect(barX, maxBarHeight, barWidth, barHeight);

    // Add dimension labels below bars.
    // 'barDimension' comes from the id defined in myViz.json
    ctx.fillText(
      data[i]["barDimension"][0],
      barX + barWidth / 4,
      maxBarHeight + textYOffset
    );
  }
}

// Subscribe to Data and Style changes.
dscc.subscribeToData(drawViz);
