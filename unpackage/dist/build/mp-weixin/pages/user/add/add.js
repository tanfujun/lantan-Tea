(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/add/add"],{"021e":function(e,s,a){"use strict";(function(e){var s=a("4ea4");a("6e79"),a("a9ff");s(a("66fd"));var t=s(a("2d68"));wx.__webpack_require_UNI_MP_PLUGIN__=a,e(t.default)}).call(this,a("543d")["createPage"])},"04a1":function(e,s,a){},"2d68":function(e,s,a){"use strict";a.r(s);var t=a("a2df"),n=a("73c0");for(var d in n)["default"].indexOf(d)<0&&function(e){a.d(s,e,(function(){return n[e]}))}(d);a("f57b"),a("4833");var r=a("f0c5"),u=Object(r["a"])(n["default"],t["b"],t["c"],!1,null,"62bd4471",null,!1,t["a"],void 0);s["default"]=u.exports},4833:function(e,s,a){"use strict";var t=a("5d66"),n=a.n(t);n.a},"5d66":function(e,s,a){},"73c0":function(e,s,a){"use strict";a.r(s);var t=a("aa95"),n=a.n(t);for(var d in t)["default"].indexOf(d)<0&&function(e){a.d(s,e,(function(){return t[e]}))}(d);s["default"]=n.a},a2df:function(e,s,a){"use strict";a.d(s,"b",(function(){return n})),a.d(s,"c",(function(){return d})),a.d(s,"a",(function(){return t}));var t={uToast:function(){return a.e("uni_modules/uview-ui/components/u-toast/u-toast").then(a.bind(null,"0d7a"))}},n=function(){var e=this.$createElement;this._self._c},d=[]},aa95:function(e,s,a){"use strict";(function(e,t){var n=a("4ea4");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var d=n(a("a34a")),r=n(a("c973")),u=e.importObject("address"),i={components:{tanInput:function(){a.e("pages/user/add/tanInput").then(function(){return resolve(a("cb3e"))}.bind(null,a)).catch(a.oe)}},computed:{sexTitle:function(){return 1===this.address.sex?"男":"女"}},data:function(){return{isChecked:!0,address:{name:"",sex:"",phone:"",address:"",isdefault:0,user_id:""},isMan:!1,isWoman:!1,address_id:""}},methods:{update:function(){var e=this;return(0,r.default)(d.default.mark((function s(){var a,n;return d.default.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(a=getCurrentPages(),n=a[a.length-2],e.address.user_id=t.getStorageSync("openid"),s.prev=3,!e.address_id){s.next=16;break}if(""!=e.address.address&&""!=e.address.name&&""!=e.address.phone&&""!=e.address.sex){s.next=9;break}e.$refs.uToast.show({type:"error",icon:!1,message:"请将信息补全！",iconUrl:"https://cdn.uviewui.com/uview/demo/toast/error.png"}),s.next=14;break;case 9:return console.log(e.address,e.address_id),s.next=12,u.updateAddress(e.address,e.address_id);case 12:t.showToast({title:"保存成功！"}),t.navigateBack({success:function(){n.onLoad()}});case 14:s.next=24;break;case 16:if(""!=e.address.address&&""!=e.address.name&&""!=e.address.phone&&""!=e.address.sex){s.next=20;break}e.$refs.uToast.show({type:"error",icon:!1,message:"请将信息补全！",iconUrl:"https://cdn.uviewui.com/uview/demo/toast/error.png"}),s.next=24;break;case 20:return s.next=22,u.updateAddress(e.address);case 22:t.navigateBack({success:function(){n.onLoad()}}),t.showToast({title:"保存成功！"});case 24:s.next=29;break;case 26:s.prev=26,s.t0=s["catch"](3),t.showToast({title:"保存失败！"});case 29:case"end":return s.stop()}}),s,null,[[3,26]])})))()},updateSex:function(e){this.address.sex=e.detail.value,console.log(e.detail.value)},changeDefault:function(){this.address.isdefault?this.address.isdefault=0:this.address.isdefault=1}},onLoad:function(e){var s=this;return(0,r.default)(d.default.mark((function a(){var t;return d.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!e.address_id){a.next=13;break}return a.next=3,u.getAddress(e.address_id);case 3:t=a.sent,s.address_id=e.address_id,s.address.name=t[0].name,s.address.phone=t[0].phone,s.address.sex=t[0].sex,s.address.user_id=t[0].user_id,s.address.isdefault=t[0].isdefault,s.address.address=t[0].address,console.log(t[0].sex,1===t[0].sex),1==t[0].sex?s.isMan=!0:s.isWoman=!0;case 13:case"end":return a.stop()}}),a)})))()}};s.default=i}).call(this,a("a9ff")["default"],a("543d")["default"])},f57b:function(e,s,a){"use strict";var t=a("04a1"),n=a.n(t);n.a}},[["021e","common/runtime","common/vendor"]]]);