webpackJsonp([0],{130:function(e,t,a){(function(e,t,r,n){var i=a(7),o=a(24),d=a(23),c=a(21),f=a(20),s=a(25),u=a(13),m=a(28),p=a(27),h=a(22),l=a(29),y=a(19),g=a(44),v=a(10);e.get("id")?e.get("projectId")||(location.href="../project/project.html"):location.href="../login/login.html";new t({el:"#app",data:{session:r.clone(e.raw()),savePending:!1,mockUrl:v.baseUrl+"/mock/"+e.get("projectId")},store:g,components:{mainnav:i,interfacelist:o,inparamquery:d,inparamheader:c,inparambody:f,outparam:s,valuelist:u,restparam:m,rawtext:p,inparaminject:h,encrypt:y,run:l},watch:{preview:function(e){g.commit("changePreview",e)},"interfaceEdit.url":function(e){/http\:\/\/|https\:\/\//i.test(e)&&r.tip("请不要在路径里面包含baseUrl",0)}},computed:{preview:function(){return g.state.preview},drawMix:function(){return g.state.drawMix},interfaceEdit:function(){return g.state.interfaceEdit},interfaceList:function(){return g.state.interfaceList},outInfo:function(){return g.state.outInfo},bodyInfo:function(){return g.state.bodyInfo},param:function(){return g.state.param},querySave:function(){return g.getters.querySave},headerSave:function(){return g.getters.headerSave},bodySave:function(){return g.getters.bodySave},paramTab:function(){return"Param ("+g.getters.paramCount+")"},queryTab:function(){return"Query ("+g.getters.queryCount+")"},headerTab:function(){return"Header ("+g.getters.headerCount+")"},bodyTab:function(){return"Body ("+(0==g.state.bodyInfo.type?g.getters.bodyCount:"Raw")+")"},editInfo:function(){return this.interfaceEdit?this.interfaceEdit.createdAt?(this.interfaceEdit.owner?this.interfaceEdit.owner.name:"")+"在"+this.interfaceEdit.createdAt+"创建，最近修改被"+(this.interfaceEdit.editor?this.interfaceEdit.editor.name:"")+"在"+this.interfaceEdit.updatedAt+"改动":"接口尚未保存":""},rawMock:function(){return g.getters.rawMock}},methods:{addGroup:function(){r.input("请输入分组名称",function(t){if(!t.value)return r.tip("请输入分组名称",0),!1;var a={};a.id=e.get("projectId"),a.name=t.value,r.startHud("#body"),g.dispatch("addGroup",a).then(function(e){r.stopHud(),200==e.code?r.notify("新建成功",1):r.notify(e.msg,0)})})},importJSON:function(){r.inputMul(this,"请输入JSON",function(e){if(!e)return r.tip("请输入JSON",0),!1;var t;try{t=JSON.parse(e)}catch(e){return r.tip("JSON不符合格式",0),!1}return g.commit("importResult",t),!0})},importQuery:function(){r.inputMul(this,"请输入Query字符串，比如:name=sx&pwd=111",function(e){return e?(g.commit("importQuery",e),!0):(r.tip("请输入Query字符串",0),!1)})},importHeader:function(){r.inputMul(this,"请输入HTTP Header字符串，以回车分割，比如:\nRequest Method:GET\nStatus Code:200",function(e){return e?(g.commit("importHeader",e),!0):(r.tip("请输入HTTP Header字符串",0),!1)})},importBody:function(){r.inputMul(this,"请输入Body Key-Value字符串,文件类型的值用[FILE]代替,比如:name=sx&pwd=111&file=[FILE]",function(e){return e?(g.commit("importBody",e),!0):(r.tip("请输入Body Key-Value字符串",0),!1)})},changeMethod:function(){g.commit("changeMethod")},save:function(){if(!this.interfaceEdit.name)return void r.tip("请填入接口名称",0);if(!this.interfaceEdit.url)return void r.tip("请填入接口地址",0);this.savePending=!0;var e=this;g.dispatch("save").then(function(t){e.savePending=!1,200==t.code?r.notify("保存成功",1):r.notify(t.msg,0)})},changeUrl:function(e){g.commit("changeUrl",e)},changePreview:function(e){g.commit("setPreview",e)},run:function(){e.set("interfaceId",this.interfaceEdit._id),e.set("groupId",this.interfaceEdit.group._id),r.showBox(this,"run",{interfaceEdit:r.clone(this.interfaceEdit),baseUrls:r.clone(g.state.baseUrls)}).$on("save",function(){g.dispatch("newInterface")})},methodColor:function(e){return n.methodColor(e)},paste:function(){setTimeout(function(){var e=g.state.interfaceEdit.url,t=g.state.query;t.splice(0,t.length);var a=e.indexOf("?");if(a>-1){var r=e.split("?");if(r[1])for(var n=r[1],i=n.split("&"),o=0;o<i.length;o++)if(i[o]){var d=i[o].split("=");t.push({name:d[0],value:d[1]?[decodeURIComponent(d[1])]:[],must:1,remark:""})}g.state.interfaceEdit.url=g.state.interfaceEdit.url.substring(0,a)}else t.push({name:"",must:0,remark:""});g.state.interfaceEdit.queryParam=t},100)}},created:function(){g.dispatch("getAllInterface").then(function(){r.stopLoading()})}});r.ready(function(){r.startLoading()})}).call(t,a(3),a(0),a(2),a(9))},44:function(e,t,a){(function(t,a,r,n,i,o){e.exports=new t.Store({state:{interfaceList:[],interface:null,interfaceEdit:null,baseUrls:[],query:[{name:"",must:0,remark:""}],header:[{name:"",value:"",remark:""}],body:[{name:"",type:0,must:0,remark:""}],param:[],bodyInfo:{type:0,rawType:0,rawTextRemark:"",rawFileRemark:"",rawText:""},outInfo:{type:0,rawRemark:"",rawMock:""},result:[{name:"",must:0,type:0,remark:"",show:0,mock:"",drag:1}],preview:"",drawMix:[],objCopy:null},getters:{querySave:function(e,t){return e.query.filter(function(e){return!!e.name})},headerSave:function(e,t){return e.header.filter(function(e){return!!e.name})},bodySave:function(e,t){return e.body.filter(function(e){return!!e.name})},queryCount:function(e,t){return t.querySave.length},headerCount:function(e,t){return t.headerSave.length},bodyCount:function(e,t){return t.bodySave.length},paramCount:function(e,t){return e.param.length},rawMock:function(e){return a.mock(e.outInfo.rawMock)}},mutations:{initInterfaceList:function(e,t){for(var a=[],r=0;r<t.length;r++){t[r].show=0;for(var n=0;n<t[r].data.length;n++)t[r].data[n].select=0;a.push(t[r])}e.interfaceList=a},setBaseUrls:function(e,t){e.baseUrls=t},setPreview:function(e,t){e.preview=t},setDrawMix:function(e,t){e.drawMix=t},setInterface:function(e,t){e.interface=t},setInterfaceEdit:function(e,t){e.interfaceEdit=t},setInterfaceList:function(e,t){e.interfaceList=t},setObjCopy:function(e,t){e.objCopy=t},initParam:function(e,t){e.query.splice(0,e.query.length),e.header.splice(0,e.header.length),e.body.splice(0,e.body.length),e.result.splice(0,e.result.length),e.param.splice(0,e.param.length),e.query.push({name:"",must:0,remark:""}),e.header.push({name:"",value:"",remark:""}),e.body.push({name:"",type:0,must:0,remark:""}),e.result.push({name:"",must:1,type:0,remark:"",show:1,drag:1,mock:""}),e.bodyInfo={type:0,rawType:0,rawTextRemark:"",rawFileRemark:"",rawText:""},e.outInfo={type:0,rawRemark:"",rawMock:""}},initInterface:function(e,t){e.interfaceEdit.queryParam.length>0&&(e.query=e.interfaceEdit.queryParam),e.interfaceEdit.bodyParam.length>0&&(e.body=e.interfaceEdit.bodyParam),e.interfaceEdit.header.length>0&&(e.header=e.interfaceEdit.header),e.interfaceEdit.outParam.length>0&&(a.initResultShow(e.interfaceEdit.outParam),e.result=e.interfaceEdit.outParam),e.interfaceEdit.restParam.length>0&&(e.param=e.interfaceEdit.restParam),e.interfaceEdit.bodyInfo&&(e.bodyInfo=e.interfaceEdit.bodyInfo,void 0===e.bodyInfo.rawText&&r.set(e.bodyInfo,"rawText",""),void 0===e.bodyInfo.rawTextRemark&&r.set(e.bodyInfo,"rawTextRemark",""),void 0===e.bodyInfo.rawFileRemark&&r.set(e.bodyInfo,"rawFileRemark","")),e.interfaceEdit.outInfo&&(e.outInfo=e.interfaceEdit.outInfo)},moveInterface:function(e,t){e.interfaceEdit&&(e.interfaceEdit.group._id=t)},importResult:function(e,t){var r=[];for(var n in t)a.handleResultData(n,t[n],r,null,1);e.result=r},importQuery:function(e,t){for(var a=decodeURI(n.trim(t)),r=[],i=a.split("&"),o=0;o<i.length;o++){var d=i[o].split("=");d.length>0&&r.push({name:d[0],must:1,remark:"",value:d[1]?[decodeURIComponent(d[1])]:[]})}e.query=r,e.interfaceEdit.queryParam=r},importHeader:function(e,t){for(var a=n.trim(t).split("\n"),r=[],i=0;i<a.length;i++){var o=n.trim(a[i]),d=o.indexOf(":"),c="",f="";d==-1?c=o:(c=n.trim(o.substr(0,d)),f=n.trim(o.substr(d+1))),c&&r.push({name:c,value:f,remark:""})}0==r.length&&r.push({name:"",value:"",remark:""}),e.header=r,e.interfaceEdit.header=r},importBody:function(e,t){for(var a=decodeURI(n.trim(t)),r=[],i=a.split("&"),o=0;o<i.length;o++){var d=i[o].split("=");d.length>0&&r.push({name:d[0],type:"[FILE]"==d[1]?1:0,must:1,remark:"",value:"[FILE]"!=d[1]&&d[1]?[decodeURIComponent(d[1])]:[]})}e.body=r,e.interfaceEdit.bodyParam=r},changeMethod:function(e){if("POST"==e.interfaceEdit.method||"PUT"==e.interfaceEdit.method)if(1!=e.header.length||e.header[0].name){for(var t=!1,a=0;a<e.header.length;a++){var r=e.header[a];if("Content-Type"==r.name){t=!0;break}}t||e.header.push({name:"Content-Type",value:"application/x-www-form-urlencoded",remark:""})}else e.header[0].name="Content-Type",e.header[0].value="application/x-www-form-urlencoded";else for(var a=0;a<e.header.length;a++){var r=e.header[a];if("Content-Type"==r.name){e.header.length>1?e.header.splice(a,1):(e.header[0].name="",e.header[0].value="",e.header[0].remark="");break}}},changeUrl:function(e,t){if(t){var a=[],r=t.match(/\{([^\s]+?)\}/g);if(r)for(var n=0;n<r.length;n++){for(var i=r[n].substr(1,r[n].length-2),o=!1,d=0;d<e.param.length;d++)if(i==e.param[d].name){o=!0,a.push(e.param[d]);break}o||a.push({name:i,remark:"",value:[]})}e.param=a,e.interfaceEdit.restParam=e.param}},changePreview:function(e,t){if(1==t&&0==i.get("role")){var r={},n=a.resultSave(e.result);a.convertToJSON(n,r),e.drawMix=a.format(JSON.stringify(r),1,n).draw}}},actions:{add:function(e,t){e.state.interface&&(t.id||t.item&&!t.item._id)&&(e.state.interface.select=0,e.commit("setInterface",null)),e.commit("initParam"),t.item?e.commit("setInterfaceEdit",t.item):e.commit("setInterfaceEdit",{name:"",group:{_id:t.id},url:"",remark:"",method:"GET",finish:0,outParam:[{name:"",must:0,type:0,remark:"",show:0,mock:"",drag:1}],bodyParam:[{name:"",type:0,must:0,remark:""}],queryParam:[{name:"",must:0,remark:""}],header:[{name:"",value:"",remark:""}],bodyInfo:{type:0,rawType:0,rawTextRemark:"",rawFileRemark:"",rawText:""},outInfo:{type:0,rawRemark:"",rawMock:""},restParam:[],before:"",after:""}),e.commit("initInterface")},getAllInterface:function(e){return o.get("/project/interface",{id:i.get("projectId")}).then(function(t){200==t.code?(e.commit("initInterfaceList",t.data.data),e.commit("setBaseUrls",t.data.baseUrl)):setTimeout(function(){window.close()},1200)})},refreshData:function(e,t){e.commit("setInterfaceList",a.refreshInterface(e.state.interfaceList,t)),e.state.interface&&(e.state.interface.select=0),e.commit("setInterface",null),e.commit("setInterfaceEdit",null)},refresh:function(e){return o.get("/project/interface",{id:i.get("projectId")}).then(function(t){return 200==t.code&&(e.dispatch("refreshData",t.data.data),e.commit("setBaseUrls",t.data.baseUrl)),t})},renameGroup:function(e,t){return o.post("/group/create",t,{"content-type":"application/x-www-form-urlencoded"}).then(function(t){return 200==t.code&&e.dispatch("refreshData",t.data),t})},removeGroup:function(e,t){return o.delete("/group/item",t).then(function(t){return 200==t.code&&e.dispatch("refreshData",t.data),t})},clear:function(e){return o.delete("/project/clear",{id:i.get("projectId")}).then(function(t){return 200==t.code&&e.dispatch("refreshData",t.data),t})},removeInterface:function(e,t){return o.delete("/interface/item",{id:t}).then(function(t){return 200==t.code&&e.dispatch("refreshData",t.data),t})},destroyInterface:function(e,t){return o.delete("/interface/destroyitem",{id:t}).then(function(t){return 200==t.code&&e.dispatch("refreshData",t.data),t})},info:function(e,t){var a;return o.get("/interface/item",{id:t.item1._id,group:t.item._id}).then(function(r){if(200==r.code){if(t.item1.name=r.data.name,t.item1.method=r.data.method,t.item1.finish=r.data.finish,a=r.data,r.data.change)return o.get("/project/interface",{id:i.get("projectId")}).then(function(t){return 200==t.code&&(e.dispatch("refreshData",t.data.data),e.commit("setBaseUrls",t.data.baseUrl),e.dispatch("showInfo",{data:a._id,data1:a})),t});e.dispatch("showInfo",{data:r.data,data1:t.item1})}else item.splice(t.index,1),e.dispatch("showInfo",{data:null,data1:null});return r})},showInfo:function(e,t){if(e.state.interface&&(e.state.interface.select=0),null==t.data)e.commit("setInterface",null);else if("string"==typeof t.data)for(var r=0;r<e.state.interfaceList.length;r++){for(var n=e.state.interfaceList[r],o=!1,d=0;d<n.data.length;d++){var c=n.data[d];if(c._id==t.data){n.show=1,e.commit("setInterface",c),c.select=1,e.commit("setInterfaceEdit",t.data1),o=!0;break}}if(o)break}else e.commit("setInterface",t.data1),e.state.interface.select=1,e.commit("setInterfaceEdit",t.data);if(e.commit("initParam"),e.state.interface?e.commit("initInterface"):e.commit("setInterfaceEdit",null),0==i.get("role"))e.commit("setPreview",0);else{e.commit("setPreview",1);var n={},f=a.resultSave(e.state.result);a.convertToJSON(f,n),e.commit("setDrawMix",a.format(JSON.stringify(n),1,f).draw)}},move:function(e,t){return o.put("/interface/move",{id:t.obj.id,group:t.group._id},{"content-type":"application/x-www-form-urlencoded"}).then(function(a){if(200==a.code){t.group.show=1;for(var r=0;r<e.state.interfaceList.length;r++){var n=e.state.interfaceList[r];if(n._id==t.obj.group){var i=n.data[t.obj.index];i.select&&e.commit("moveInterface",t.group._id),n.data.splice(t.obj.index,1),t.group.data.push(i);break}}}return a})},addGroup:function(e,t){return o.post("/group/create",t,{"content-type":"application/x-www-form-urlencoded"}).then(function(t){return 200==t.code&&e.commit("initInterfaceList",t.data),t})},save:function(e){var t={name:e.state.interfaceEdit.name,url:e.state.interfaceEdit.url,group:e.state.interfaceEdit.group._id,remark:e.state.interfaceEdit.remark,project:i.get("projectId"),method:e.state.interfaceEdit.method,finish:e.state.interfaceEdit.finish,before:e.state.interfaceEdit.before,after:e.state.interfaceEdit.after};if(e.state.interfaceEdit._id&&(t.id=e.state.interfaceEdit._id),t.header=JSON.stringify(e.getters.headerSave),t.queryparam=JSON.stringify(e.getters.querySave),"POST"==e.state.interfaceEdit.method||"PUT"==e.state.interfaceEdit.method){0==e.state.bodyInfo.type?t.bodyparam=JSON.stringify(e.getters.bodySave):t.bodyparam="[]";var d=n.clone(e.state.bodyInfo);1==d.type&&(0==d.rawType?d.rawFileRemark="":(d.rawText="",d.rawTextRemark="")),t.bodyinfo=JSON.stringify(d)}if(0==e.state.outInfo.type){t.outparam=JSON.stringify(a.resultSave(e.state.result));var c=n.clone(e.state.outInfo);c.rawRemark="",c.rawMock="",t.outinfo=JSON.stringify(c)}else t.outparam="[]",t.outinfo=JSON.stringify(e.state.outInfo);return t.restparam=JSON.stringify(e.state.param),o.post("/interface/create",t,{"content-type":"application/x-www-form-urlencoded"}).then(function(t){if(200==t.code)if("string"==typeof t.data)e.state.interface.name=e.state.interfaceEdit.name,e.state.interface.method=e.state.interfaceEdit.method,e.state.interface.finish=e.state.interfaceEdit.finish,r.set(e.state.interfaceEdit,"editor",{name:i.get("name")}),r.set(e.state.interfaceEdit,"updatedAt",n.getNowFormatDate("yyyy-MM-dd hh:mm:ss"));else if(t.data instanceof Array){r.set(e.state.interfaceEdit,"editor",{name:i.get("name")}),r.set(e.state.interfaceEdit,"updatedAt",n.getNowFormatDate("yyyy-MM-dd hh:mm:ss")),e.state.interfaceList=a.refreshInterface(e.state.interfaceList,t.data);for(var o=0;o<e.state.interfaceList.length;o++){for(var d=e.state.interfaceList[o],c=!1,f=0;f<d.data.length;f++){var s=d.data[f];if(s._id==e.state.interfaceEdit._id){d.show=1,e.state.interface=s,s.select=1,c=!0;break}}if(c)break}}else{e.state.interfaceEdit._id=t.data._id,r.set(e.state.interfaceEdit,"owner",{name:i.get("name")}),r.set(e.state.interfaceEdit,"editor",{name:i.get("name")}),r.set(e.state.interfaceEdit,"createdAt",t.data.createdAt),r.set(e.state.interfaceEdit,"updatedAt",t.data.updatedAt);for(var o=0;o<e.state.interfaceList.length;o++){var d=e.state.interfaceList[o];if(d._id==e.state.interfaceEdit.group._id){var u={_id:t.data._id,name:t.data.name,method:t.data.method,finish:t.data.finish,select:1};d.data.push(u),d.show=1,e.state.interface=u;break}}}return t})},copy:function(e,t){return o.get("/interface/item",{id:t.item1._id,group:t.item._id}).then(function(t){if(200==t.code){var a=t.data.method,r=n.trim(t.data.url),i=n.trim(t.data.name)+"(副本)",o=t.data.restParam,d=t.data.queryParam,c=t.data.header,f=t.data.bodyParam,s=t.data.outParam,u=t.data.outInfo,m={method:a,url:r,queryParam:d,header:c,bodyParam:f,outParam:s,restParam:o,group:{_id:t.data.group._id},name:i,remark:t.data.remark,owner:"",editor:"",createdAt:"",updatedAt:"",finish:0,outInfo:u,before:t.data.before,after:t.data.after};"POST"!=a&&"PUT"!=a||(m.bodyInfo=t.data.bodyInfo),e.state.objCopy=m}return t})},newInterface:function(e){if(i.get("newInterface")){var t=JSON.parse(i.get("newInterface"));e.dispatch("add",{id:null,item:t}),i.remove("newInterface")}}}})}).call(t,a(14),a(9),a(0),a(2),a(3),a(5))}},[130]);