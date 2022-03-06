System.register("chunks:///_virtual/Rotate.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,i,r,o,n,s,a,c;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,r=t.initializerDefineProperty,o=t.assertThisInitialized,n=t.defineProperty},function(t){s=t.cclegacy,a=t._decorator,c=t.Component}],execute:function(){var p,u,l;s._RF.push({},"77fc5Vi/fJLII4wMiHhIUNO","Rotate",void 0);var h=a.ccclass,f=a.property;t("Rotate",h("Rotate")((l=e((u=function(t){function e(){for(var e,i=arguments.length,s=new Array(i),a=0;a<i;a++)s[a]=arguments[a];return e=t.call.apply(t,[this].concat(s))||this,r(o(e),"speed",l,o(e)),n(o(e),"x",0),n(o(e),"y",0),n(o(e),"z",0),e}return i(e,t),e.prototype.update=function(t){this.x+=this.speed*t,this.y+=this.speed*t,this.z+=this.speed*t,this.node.setRotationFromEuler(this.x,this.y,this.z)},e}(c)).prototype,"speed",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),p=u))||p);s._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Rotate.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});