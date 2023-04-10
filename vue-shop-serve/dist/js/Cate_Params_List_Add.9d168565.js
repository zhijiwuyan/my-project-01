"use strict";(self["webpackChunkvue_shop"]=self["webpackChunkvue_shop"]||[]).push([[653],{1883:function(t,e,a){a.r(e),a.d(e,{default:function(){return d}});var s=function(){var t=this,e=t._self._c;return e("div",[e("el-breadcrumb",{attrs:{separator:"/"}},[e("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[t._v("首页")]),e("el-breadcrumb-item",[t._v("商品管理")]),e("el-breadcrumb-item",[t._v("商品分类")])],1),e("el-card",{staticClass:"box-card"},[e("div",[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:6}},[e("el-button",{attrs:{type:"primary"},on:{click:t.addCateDialog}},[t._v("添加分类")])],1)],1)],1),e("tree-table",{staticClass:"treeTable",attrs:{data:t.catelist,columns:t.columns,"selection-type":!1,"expand-type":!1,"show-index":!0,"index-text":"#",border:"","show-row-hover":""},scopedSlots:t._u([{key:"isok",fn:function(t){return[!1===t.row.cat_deleted?e("i",{staticClass:"el-icon-success",staticStyle:{color:"lightgreen"}}):e("i",{staticClass:"el-icon-error",staticStyle:{color:"red"}})]}},{key:"order",fn:function(a){return[0===a.row.cat_level?e("el-tag",{attrs:{size:"mini"}},[t._v("一级")]):1===a.row.cat_level?e("el-tag",{attrs:{size:"mini",type:"success"}},[t._v("二级")]):e("el-tag",{attrs:{size:"mini",type:"warning"}},[t._v("三级")])]}},{key:"opt",fn:function(a){return[e("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(e){return t.editCateDialog(a.row.cat_id)}}},[t._v("编辑")]),e("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(e){return t.removeCateById(a.row.cat_id)}}},[t._v("删除")])]}}])}),e("el-pagination",{attrs:{"current-page":t.queryInfo.pagenum,"page-sizes":[3,5,10,15],"page-size":t.queryInfo.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),e("el-dialog",{attrs:{title:"添加分类",visible:t.addCateDialogVisible,width:"30%"},on:{"update:visible":function(e){t.addCateDialogVisible=e},close:t.addCateDialogClosed}},[e("el-form",{ref:"addCateFormRef",attrs:{model:t.addCateForm,rules:t.addCateFormRules,"label-width":"100px"}},[e("el-form-item",{attrs:{label:"分类名称：",prop:"cat_name"}},[e("el-input",{model:{value:t.addCateForm.cat_name,callback:function(e){t.$set(t.addCateForm,"cat_name",e)},expression:"addCateForm.cat_name"}})],1),e("el-form-item",{attrs:{label:"父级分类："}},[e("el-cascader",{attrs:{options:t.parentCateList,props:t.cascaderProps,clearable:""},on:{change:t.parentCateChange},model:{value:t.selectedKeys,callback:function(e){t.selectedKeys=e},expression:"selectedKeys"}})],1)],1),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){t.addCateDialogVisible=!1}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:t.addCate}},[t._v("确 定")])],1)],1),e("el-dialog",{attrs:{title:"提示",visible:t.editCateDialogVisible,width:"50%"},on:{"update:visible":function(e){t.editCateDialogVisible=e}}},[e("el-form",{ref:"editCateFormRef",attrs:{model:t.editCateForm,rules:t.editCateFormRules,"label-width":"100px"},on:{close:t.editCateDialogClosed}},[e("el-form-item",{attrs:{label:"分类名称：",prop:"cat_name"}},[e("el-input",{on:{change:t.editCateFormChanged},model:{value:t.editCateForm.cat_name,callback:function(e){t.$set(t.editCateForm,"cat_name",e)},expression:"editCateForm.cat_name"}})],1)],1),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){t.editCateDialogVisible=!1}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:t.editCate}},[t._v("确 定")])],1)],1)],1)},i=[],r={data(){return{queryInfo:{type:3,pagenum:1,pagesize:5},catelist:[],total:0,columns:[{label:"分类名称",prop:"cat_name"},{label:"是否有效",type:"template",template:"isok"},{label:"排序",type:"template",template:"order"},{label:"操作",type:"template",template:"opt"}],addCateDialogVisible:!1,editCateDialogVisible:!1,addCateForm:{cat_name:"",cat_pid:0,cat_level:0},addCateFormRules:{cat_name:[{required:!0,message:"请输入分类名称",trigger:"blur"}]},editCateForm:{},editCateFormRules:{cat_name:[{required:!0,message:"请输入分类名称",trigger:"blur"}]},parentCateList:[],cascaderProps:{value:"cat_id",label:"cat_name",children:"children",expandTrigger:"hover"},selectedKeys:[]}},methods:{async getCateList(){const{data:t}=await this.$http.get("categories",{params:this.queryInfo});if(200!==t.meta.status)return this.$message.error("获取数据失败！");this.catelist=t.data.result,this.total=t.data.total},addCateDialog(){this.getParentCateList(),this.addCateDialogVisible=!0},handleSizeChange(t){this.queryInfo.pagesize=t,this.getCateList()},handleCurrentChange(t){this.queryInfo.pagenum=t,this.getCateList()},async getParentCateList(){const{data:t}=await this.$http.get("categories",{params:{type:2}});if(200!==t.meta.status)return this.$message.error("获取数据失败！");this.parentCateList=t.data},parentCateChange(){if(this.selectedKeys.length>0)return this.addCateForm.cat_pid=this.selectedKeys[this.selectedKeys.length-1],void(this.addCateForm.cat_level=this.selectedKeys.length);this.addCateForm.cat_pid=0,this.addCateForm.cat_level=0},addCate(){this.$refs.addCateFormRef.validate((async t=>{if(!t)return;const{data:e}=await this.$http.post("categories",this.addCateForm);if(201!=e.meta.status)return this.$message.error("创建分类失败");this.addCateDialogVisible=!1,this.getCateList(),this.$message.success("创建分类成功")}))},addCateDialogClosed(){this.$refs.addCateFormRef.resetFields(),this.selectedKeys=[],this.addCateForm.cat_pid=0,this.addCateForm.cat_level=0},async editCateDialog(t){const{data:e}=await this.$http.get("categories/"+t);if(200!=e.meta.status)return this.$message.error("获取分类失败");this.$message.success("获取分类成功"),this.editCateForm=e.data,this.editCateDialogVisible=!0},editCateFormChanged(){},editCate(){this.$refs.editCateFormRef.validate((async t=>{if(!t)return;const{data:e}=await this.$http.put("categories/"+this.editCateForm.cat_id,{cat_name:this.editCateForm.cat_name});if(200!=e.meta.status)return this.$message.error("更新分类失败");this.editCateDialogVisible=!1,this.getCateList(),this.$message.success("更新分类成功")}))},editCateDialogClosed(){this.$refs.editCateFormRef.resetFields(),this.editCateForm.cat_name=""},async removeCateById(t){const e=await this.$confirm("此操作将永久删除该分类, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch((t=>t));if("confirm"!==e)return this.$message.info("已取消删除");const{data:a}=await this.$http.delete("categories/"+t);if(200!=a.meta.status)return this.$message.error("删除失败");this.$message.success("删除成功"),this.getCateList()}},created(){this.getCateList()}},o=r,l=a(1001),n=(0,l.Z)(o,s,i,!1,null,"45f2a4ed",null),d=n.exports},27:function(t,e,a){a.r(e),a.d(e,{default:function(){return d}});var s=function(){var t=this,e=t._self._c;return e("div",[e("el-breadcrumb",{attrs:{separator:"/"}},[e("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[t._v("首页")]),e("el-breadcrumb-item",[t._v("商品管理")]),e("el-breadcrumb-item",[t._v("商品列表")])],1),e("el-card",[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:8}},[e("el-input",{attrs:{placeholder:"请输入内容"},on:{click:t.getGoodList},model:{value:t.queryInfo.query,callback:function(e){t.$set(t.queryInfo,"query",e)},expression:"queryInfo.query"}},[e("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.getGoodList},slot:"append"})],1)],1),e("el-col",{attrs:{span:4}},[e("el-button",{attrs:{type:"primary"},on:{click:t.goAddPage}},[t._v("添加商品")])],1)],1),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.goodsList,border:"",stripe:""}},[e("el-table-column",{attrs:{type:"index",label:"#"}}),e("el-table-column",{attrs:{prop:"goods_name",label:"商品名称"}}),e("el-table-column",{attrs:{prop:"goods_price",label:"商品价格(元)",width:"95px"}}),e("el-table-column",{attrs:{prop:"goods_weight",label:"商品重量",width:"95px"}}),e("el-table-column",{attrs:{prop:"add_time",label:"创建时间",width:"200px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t._f("dateForamt")(e.row.add_time))+" ")]}}])}),e("el-table-column",{attrs:{label:"操作",width:"150px"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"}}),e("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(e){return t.removeById(a.row.goods_id)}}})]}}])})],1),e("el-pagination",{attrs:{"current-page":t.queryInfo.pagenum,"page-sizes":[5,10,15,20],"page-size":t.queryInfo.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:t.total,background:""},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},i=[],r=(a(7658),{data(){return{queryInfo:{query:"",pagenum:1,pagesize:10},total:0,goodsList:[]}},methods:{async getGoodList(){const{data:t}=await this.$http.get("goods",{params:this.queryInfo});if(200!==t.meta.status)return this.$message.error("获取商品列表失败");this.$message.success("获取商品列表成功"),this.goodsList=t.data.goods,this.total=t.data.total},handleSizeChange(t){this.queryInfo.pagesize=t,this.getGoodList()},handleCurrentChange(t){this.queryInfo.pagenum=t,this.getGoodList()},async removeById(t){const e=await this.$confirm("此操作将永久删除该商品, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch((t=>t));if("confirm"!==e)return this.$message.info("已取消删除");const{data:a}=await this.$http.delete(`goods/${t}`);if(200!==a.meta.status)return this.$message.error("删除失败");this.$message.success("删除成功"),this.getGoodList()},goAddPage(){this.$router.push("/goods/add")}},created(){this.getGoodList()}}),o=r,l=a(1001),n=(0,l.Z)(o,s,i,!1,null,"2f3a217c",null),d=n.exports},3274:function(t,e,a){a.r(e),a.d(e,{default:function(){return d}});var s=function(){var t=this,e=t._self._c;return e("div",[e("el-breadcrumb",{attrs:{separator:"/"}},[e("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[t._v("首页")]),e("el-breadcrumb-item",[t._v("商品管理")]),e("el-breadcrumb-item",[t._v("分类参数")])],1),e("el-card",{staticClass:"box-card"},[e("el-alert",{attrs:{"show-icon":"",title:"注意：只允许为第三级分类设置相关参数！",type:"warning"}}),e("el-row",{staticClass:"cat_opt"},[e("el-col",[e("span",[t._v("选择商品分类：")]),e("el-cascader",{attrs:{"append-to-body":!1,options:t.catelist,props:t.cascaderProps,clearable:"",size:"medium"},on:{change:t.handleChange},model:{value:t.selectedKey,callback:function(e){t.selectedKey=e},expression:"selectedKey"}})],1)],1),e("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:"动态参数",name:"many"}},[e("el-button",{attrs:{type:"primary",disabled:t.isBtnDisabled},on:{click:function(e){t.addDialogVisible=!0}}},[t._v("添加参数")]),e("el-table",{attrs:{data:t.manyTableDate,border:"",stripe:""}},[e("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._l(a.row.attr_vals,(function(s,i){return e("el-tag",{key:i,attrs:{closable:""},on:{close:function(e){return t.handleclose(i,a.row)}}},[t._v(" "+t._s(s)+" ")])})),a.row.inputVisible?e("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:function(e){return t.handleInputConfirm(a.row)}},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleInputConfirm(a.row)}},model:{value:a.row.inputValue,callback:function(e){t.$set(a.row,"inputValue",e)},expression:"scope.row.inputValue"}}):e("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:function(e){return t.showInput(a.row)}}},[t._v("+ New Tag")])]}}])}),e("el-table-column",{attrs:{type:"index",label:"#"}}),e("el-table-column",{attrs:{label:"动态参数",prop:"attr_name"}}),e("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-edit"},on:{click:function(e){return t.showEditDialog(a.row.attr_id)}}},[t._v("修改")]),e("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete"},on:{click:function(e){return t.removeParams(a.row.attr_id)}}},[t._v("删除")])]}}])})],1)],1),e("el-tab-pane",{attrs:{label:"静态属性",name:"only"}},[e("el-button",{attrs:{type:"primary",disabled:t.isBtnDisabled},on:{click:function(e){t.addDialogVisible=!0}}},[t._v("添加属性")]),e("el-table",{attrs:{data:t.onlyTableDate,border:"",stripe:""}},[e("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._l(a.row.attr_vals,(function(s,i){return e("el-tag",{key:i,attrs:{closable:""},on:{close:function(e){return t.handleclose(i,a.row)}}},[t._v(" "+t._s(s)+" ")])})),a.row.inputVisible?e("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:function(e){return t.handleInputConfirm(a.row)}},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleInputConfirm(a.row)}},model:{value:a.row.inputValue,callback:function(e){t.$set(a.row,"inputValue",e)},expression:"scope.row.inputValue"}}):e("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:function(e){return t.showInput(a.row)}}},[t._v("+ New Tag")])]}}])}),e("el-table-column",{attrs:{type:"index",label:"#"}}),e("el-table-column",{attrs:{label:"静态属性",prop:"attr_name"}}),e("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-edit"},on:{click:function(e){return t.showEditDialog(a.row.attr_id)}}},[t._v("修改")]),e("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete"},on:{click:function(e){return t.removeParams(a.row.attr_id)}}},[t._v("删除")])]}}])})],1)],1)],1)],1),e("el-dialog",{attrs:{title:"添加"+t.titleText,visible:t.addDialogVisible,width:"30%"},on:{"update:visible":function(e){t.addDialogVisible=e},close:t.addDialogVisibleClosed}},[e("el-form",{ref:"addFormRef",attrs:{model:t.addForm,"label-width":"80px",rules:t.addFormRules}},[e("el-form-item",{attrs:{label:t.titleText,prop:"attr_name"}},[e("el-input",{model:{value:t.addForm.attr_name,callback:function(e){t.$set(t.addForm,"attr_name",e)},expression:"addForm.attr_name"}})],1)],1),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){t.addDialogVisible=!1}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:t.addParams}},[t._v("确 定")])],1)],1),e("el-dialog",{attrs:{title:"修改"+t.titleText,visible:t.editDialogVisible,width:"30%"},on:{"update:visible":function(e){t.editDialogVisible=e},close:t.editDialogVisibleClosed}},[e("el-form",{ref:"editFormRef",attrs:{model:t.editForm,"label-width":"80px",rules:t.editFormRules}},[e("el-form-item",{attrs:{label:t.titleText,prop:"attr_name"}},[e("el-input",{model:{value:t.editForm.attr_name,callback:function(e){t.$set(t.editForm,"attr_name",e)},expression:"editForm.attr_name"}})],1)],1),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){t.editDialogVisible=!1}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:t.editParams}},[t._v("确 定")])],1)],1)],1)},i=[],r=(a(7658),{data(){return{catelist:[],cascaderProps:{value:"cat_id",label:"cat_name",children:"children",expandTrigger:"hover"},selectedKey:[],activeName:"many",onlyTableDate:[],manyTableDate:[],addDialogVisible:!1,addForm:{attr_name:"",attr_sel:"",attr_vals:""},addFormRules:{attr_name:[{required:!0,message:"请输入商品参数",trigger:"blur"}]},editDialogVisible:!1,editForm:{},editFormRules:{attr_name:[{required:!0,message:"请输入商品参数",trigger:"blur"}]}}},methods:{async getCateList(){const{data:t}=await this.$http.get("categories",{params:{type:3}});if(200!==t.meta.status)return this.$message.error("获取数据失败！");this.catelist=t.data},handleChange(){this.getParamsData()},handleClick(){this.getParamsData()},async getParamsData(){if(3!==this.selectedKey.length)return this.selectedKey=[],this.manyTableDate=[],void(this.onlyTableDate=[]);const{data:t}=await this.$http.get(`categories/${this.cateId}/attributes`,{params:{sel:this.activeName}});if(t.data.forEach((t=>{t.attr_vals=t.attr_vals?t.attr_vals.split(" "):[],t.inputVisible=!1,t.inputValue=""})),200!==t.meta.status)return this.$message.error("获取参数失败！");"many"==this.activeName?this.manyTableDate=t.data:this.onlyTableDate=t.data},addDialogVisibleClosed(){this.$refs.addFormRef.resetFields()},addParams(){this.$refs.addFormRef.validate((async t=>{if(!t)return;const{data:e}=await this.$http.post(`categories/${this.cateId}/attributes`,{attr_name:this.addForm.attr_name,attr_sel:this.activeName});if(201!=e.meta.status)return this.$message.error("添加参数失败");this.$message.success("添加参数成功"),this.addDialogVisible=!1,this.getParamsData()}))},async showEditDialog(t){const{data:e}=await this.$http.get(`categories/${this.cateId}/attributes/${t}`);if(200!==e.meta.status)return this.$message.error("获取参数失败");this.$message.success("获取数据成功"),this.editForm=e.data,this.editDialogVisible=!0},editDialogVisibleClosed(){this.$refs.editFormRef.resetFields()},editParams(){this.$refs.editFormRef.validate((async t=>{if(!t)return;const{data:e}=await this.$http.put(`categories/${this.cateId}/attributes/${this.editForm.attr_id}`,{attr_name:this.editForm.attr_name,attr_sel:this.activeName});if(200!=e.meta.status)return this.$message.error("修改参数失败");this.getParamsData(),this.editDialogVisible=!1}))},async removeParams(t){const e=await this.$confirm("此操作将永久删除该参数, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch((t=>t));if("confirm"!==e)return this.$message.info("已取消删除");const{data:a}=await this.$http.delete(`categories/${this.cateId}/attributes/${t}`);if(200!==a.meta.status)return this.$message.error("删除失败");this.$message.success("删除成功"),this.getParamsData()},async handleInputConfirm(t){if(0==t.inputValue.trim().length)return t.inputValue="",void(t.inputVisible=!1);t.attr_vals.push(t.inputValue.trim()),t.inputValue="",t.inputVisible=!1,this.saveAttrVal(t)},async saveAttrVal(t){const{data:e}=await this.$http.put(`categories/${this.cateId}/attributes/${t.attr_id}`,{attr_name:t.attr_name,attr_sel:t.attr_sel,attr_vals:t.attr_vals.join(" ")});if(200!=e.meta.status)return this.$message.error("更新参数失败");this.$message.success("更新参数项成功"),this.getParamsData()},handleclose(t,e){e.attr_vals.splice(t,1),this.saveAttrVal(e)},showInput(t){t.inputVisible=!0,this.$nextTick((t=>{this.$refs.saveTagInput.$refs.input.focus()}))}},created(){this.getCateList()},computed:{isBtnDisabled(){return 3!==this.selectedKey.length},cateId(){return 3===this.selectedKey.length?this.selectedKey[2]:null},titleText(){return"many"==this.activeName?"动态参数":"静态参数"}}}),o=r,l=a(1001),n=(0,l.Z)(o,s,i,!1,null,"af2dee16",null),d=n.exports},3077:function(t,e,a){a.r(e),a.d(e,{default:function(){return u}});var s=function(){var t=this,e=t._self._c;return e("div",[e("el-breadcrumb",{attrs:{separator:"/"}},[e("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[t._v("首页")]),e("el-breadcrumb-item",[t._v("商品管理")]),e("el-breadcrumb-item",[t._v("添加商品")])],1),e("el-card",[e("el-alert",{attrs:{title:"添加商品信息",type:"info",center:"","show-icon":""}}),e("el-steps",{attrs:{active:t.activeIndex-0,"align-center":"",space:200,"finish-status":"success"}},[e("el-step",{attrs:{title:"基本信息"}}),e("el-step",{attrs:{title:"商品参数"}}),e("el-step",{attrs:{title:"商品属性"}}),e("el-step",{attrs:{title:"商品图片"}}),e("el-step",{attrs:{title:"商品内容"}}),e("el-step",{attrs:{title:"完成"}})],1),e("el-form",{ref:"addFormRef",attrs:{model:t.addForm,rules:t.addFormRules,"label-position":"top","label-width":"100px"}},[e("el-tabs",{attrs:{"tab-position":t.tabPosition,"before-leave":t.beforeLeave},on:{"tab-click":t.tabClickd},model:{value:t.activeIndex,callback:function(e){t.activeIndex=e},expression:"activeIndex"}},[e("el-tab-pane",{attrs:{label:"基本信息",name:"0"}},[e("el-form-item",{attrs:{label:"商品名称",prop:"goods_name"}},[e("el-input",{model:{value:t.addForm.goods_name,callback:function(e){t.$set(t.addForm,"goods_name",e)},expression:"addForm.goods_name"}})],1),e("el-form-item",{attrs:{label:"商品价格",prop:"goods_price"}},[e("el-input",{attrs:{type:"number"},model:{value:t.addForm.goods_price,callback:function(e){t.$set(t.addForm,"goods_price",e)},expression:"addForm.goods_price"}})],1),e("el-form-item",{attrs:{label:"商品重量",prop:"goods_weight"}},[e("el-input",{attrs:{type:"number"},model:{value:t.addForm.goods_weight,callback:function(e){t.$set(t.addForm,"goods_weight",e)},expression:"addForm.goods_weight"}})],1),e("el-form-item",{attrs:{label:"商品数量",prop:"goods_number"}},[e("el-input",{attrs:{type:"number"},model:{value:t.addForm.goods_number,callback:function(e){t.$set(t.addForm,"goods_number",e)},expression:"addForm.goods_number"}})],1),e("el-form-item",{attrs:{label:"商品分类",prop:"goods_cat"}},[e("el-cascader",{staticStyle:{width:"200px"},attrs:{options:t.cateList,props:t.cateProps},on:{change:t.handleChange},model:{value:t.addForm.goods_cat,callback:function(e){t.$set(t.addForm,"goods_cat",e)},expression:"addForm.goods_cat"}})],1)],1),e("el-tab-pane",{attrs:{label:"商品参数",name:"1"}},t._l(t.manyTableDate,(function(a){return e("el-form-item",{key:a.attr_id,attrs:{label:a.attr_name}},[e("el-checkbox-group",{model:{value:a.attr_vals,callback:function(e){t.$set(a,"attr_vals",e)},expression:"item.attr_vals"}},t._l(a.attr_vals,(function(t,a){return e("el-checkbox",{key:a,attrs:{border:"",label:t}})})),1)],1)})),1),e("el-tab-pane",{attrs:{label:"商品属性",name:"2"}},t._l(t.onlyTableDate,(function(a){return e("el-form-item",{key:a.att_id,attrs:{label:a.attr_name}},[e("el-input",{model:{value:a.attr_vals,callback:function(e){t.$set(a,"attr_vals",e)},expression:"item.attr_vals"}})],1)})),1),e("el-tab-pane",{attrs:{label:"商品图片",name:"3"}},[e("el-upload",{attrs:{action:t.uploadURL,"on-preview":t.handlePreview,"on-remove":t.handleRemove,"list-type":"picture",headers:t.headersObj,"on-success":t.handleSuccess}},[e("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")])],1)],1),e("el-tab-pane",{attrs:{label:"商品内容",name:"4"}},[e("quill-editor",{model:{value:t.addForm.goods_introduce,callback:function(e){t.$set(t.addForm,"goods_introduce",e)},expression:"addForm.goods_introduce"}}),e("el-button",{staticClass:"btnAdd",attrs:{type:"primary"},on:{click:t.add}},[t._v("添加商品")])],1)],1)],1)],1),e("el-dialog",{attrs:{title:"图片预览",visible:t.previewDialogVisible,width:"50%"},on:{"update:visible":function(e){t.previewDialogVisible=e}}},[e("img",{staticClass:"previewImg",attrs:{src:t.previewPic,alt:""}})])],1)},i=[],r=(a(7658),a(2611)),o=a.n(r),l={data(){return{tabPosition:"left",activeIndex:"0",addForm:{goods_name:"",goods_price:0,goods_weight:0,goods_number:0,goods_cat:[],pics:[],goods_introduce:"",attrs:[]},addFormRules:{goods_name:[{required:!0,message:"请输入商品名称",trigger:"blur"}],goods_price:[{required:!0,message:"请输入商品价格",trigger:"blur"}],goods_weight:[{required:!0,message:"请输入商品重量",trigger:"blur"}],goods_price:[{required:!0,message:"请输入商品价格",trigger:"blur"}],goods_number:[{required:!0,message:"请输入商品数量",trigger:"blur"}],goods_cat:[{required:!0,message:"请输入商品分类",trigger:"blur"}]},cateList:[],cateProps:{label:"cat_name",value:"cat_id",children:"children",expandTrigger:"hover"},manyTableDate:[],onlyTableDate:[],uploadURL:"http://127.0.0.1:8888/api/private/v1/upload",headersObj:{Authorization:window.sessionStorage.getItem("token")},previewPic:"",previewDialogVisible:!1}},methods:{async getCateList(){const{data:t}=await this.$http.get("categories");if(200!==t.meta.status)return this.$message.error("获取分类数据失败");this.cateList=t.data},handleChange(){3!==this.addForm.goods_cat.length&&(this.addForm.goods_cat=[])},beforeLeave(t,e){if("0"===e&&3!==this.addForm.goods_cat.length)return this.$message.error("请先选择商品分类"),!1},async tabClickd(){if("1"===this.activeIndex){const{data:t}=await this.$http.get(`categories/${this.cateId}/attributes`,{params:{sel:"many"}});if(200!==t.meta.status)return this.$message.error("获取数据失败");t.data.forEach((t=>{t.attr_vals=0===t.attr_vals?[]:t.attr_vals.split(" ")})),this.manyTableDate=t.data}else if("2"===this.activeIndex){const{data:t}=await this.$http.get(`categories/${this.cateId}/attributes`,{params:{sel:"only"}});if(200!==t.meta.status)return this.$message.error("获取数据失败");this.onlyTableDate=t.data}},handlePreview(t){this.previewPic=t.response.data.url,this.previewDialogVisible=!0},handleRemove(t){t.response.data.tmp_path;let e=this.addForm.pics.findIndex((t=>{t.pic}));this.addForm.pics.splice(e,1)},handleSuccess(t){let e={pic:t.data.tmp_path};this.addForm.pics.push(e)},async add(){this.$refs.addFormRef.validate((async t=>{if(!t)return this.$message.error("请填写必要的表单项！");const e=o().cloneDeep(this.addForm);e.goods_cat=e.goods_cat.join(","),this.manyTableDate.forEach((t=>{const e={attr_id:t.attr_id,attr_vals:t.attr_vals.join(" ")};this.addForm.attrs.push(e)})),this.onlyTableDate.forEach((t=>{const e={attr_id:t.attr_id,attr_vals:t.attr_vals};this.addForm.attrs.push(e)})),e.attrs=this.addForm.attrs;const{data:a}=await this.$http.post("goods",e);if(201!==a.meta.status)return this.$message.error("添加商品失败!");this.$message.success("添加商品成功"),this.$router.push("/goods")}))}},created(){this.getCateList()},computed:{cateId(){return 3===this.addForm.goods_cat.length?this.addForm.goods_cat[2]:null}}},n=l,d=a(1001),c=(0,d.Z)(n,s,i,!1,null,"d30ecf02",null),u=c.exports}}]);
//# sourceMappingURL=Cate_Params_List_Add.9d168565.js.map