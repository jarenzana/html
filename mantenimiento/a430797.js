(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{444:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var o=r(60),n=r(0),l=Object(n.j)("v-toolbar__title"),d=Object(n.j)("v-toolbar__items");o.a},470:function(e,t,r){"use strict";r.r(t);var o=r(21),n=(r(64),r(176),r(5),r(77),r(118)),l={data:function(){return{dialog:!1,dialogConfirm:!1,confirmTitle:"",confirmMensj:"",search:"",dialogDelete:!1,headers:[{text:"Profesor",align:"start",sortable:!1,value:"nombre_completo"},{text:"Rol",value:"rol"},{text:"Quitar profesor",value:"acciones",sortable:!1}],editedIndex:-1,editedItem:{id_profesor_departamento:null,id_profesor:null,id_departamento:null,id_rol:null,nombre_completo:"",rol:""},defaultItem:{id_profesor_departamento:null,id_profesor:null,id_departamento:null,id_rol:null,nombre_completo:"",rol:""}}},watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},methods:{editItem:function(e){this.editedIndex=this.prof_dep.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){this.editedIndex=this.prof_dep.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm:function(){this.delProfDep(),this.prof_dep.splice(this.editedIndex,1),this.closeDelete()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){this.editedIndex>-1?this.updateProfDep():this.addProfDep(),this.close()},addProfDep:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.editedItem.id_departamento=e.id_departamento,r=e.editedItem,o=e.$store.state.usuario.access_token,t.next=5,n.a.postCrearProfDep(r,o);case 5:201==t.sent.status?(e.confirmTitle="Añadir profesor",e.confirmMensj="Profesor/a añadido/a con éxito",e.dialogConfirm=!0,e.$parent.cargarProfDep(e.id_departamento)):e.errorMsg();case 7:case"end":return t.stop()}}),t)})))()},updateProfDep:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.editedItem.id_departamento=e.id_departamento,r=e.editedItem,o=e.$store.state.usuario.access_token,t.next=5,n.a.postUpdateProfDep(r,o);case 5:201==t.sent.status?(e.confirmTitle="Editar profesor/a",e.confirmMensj="Profesor/a modificado/a con éxito",e.dialogConfirm=!0,e.$parent.cargarProfDep(e.id_departamento)):e.errorMsg();case 7:case"end":return t.stop()}}),t)})))()},delProfDep:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.editedItem.id_departamento=e.id_departamento,r=e.editedItem,o=e.$store.state.usuario.access_token,t.next=5,n.a.postDelProfDep(r,o);case 5:201==t.sent.status?(e.confirmTitle="Eliminar profesor/a",e.confirmMensj="Profesor/a eliminado/a",e.dialogConfirm=!0,e.$parent.cargarProfDep(e.id_departamento)):e.errorMsg();case 7:case"end":return t.stop()}}),t)})))()},filtroBuscar:function(e,t,r){return t=t.toLowerCase(),t=removeAccents(t),null!=e&&null!=t&&"string"==typeof e&&-1!==removeAccents(e).toString().toLowerCase().indexOf(t)},cerrarConfirm:function(){this.dialogConfirm=!1},errorMsg:function(){this.confirmTitle="Error",this.confirmMensj="Se ha producido un error.",this.dialogConfirm=!0}},props:{id_departamento:null,tit_dep:{type:String,default:""},prof_dep:{type:Array,default:[{id_profesor_departamento:null,id_profesor:null,nombre_completo:"",id_rol:null,rol:""}]},prof_nom:{type:Array,default:[{id_profesor:null,nombre_completo:""}]},prof_rol:{type:Array,default:[{id_rol:null,rol:""}]},loadingBarProf:{default:!1}}},d=r(52),c=r(76),f=r.n(c),m=r(435),v=r(232),_=r(205),h=r(75),x=r(610),C=r(442),I=r(615),k=r(532),D=r(204),w=r(611),P=r(567),j=r(440),y=r(60),V=r(444),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("v-app",{staticStyle:{"background-color":"#3480B8"},attrs:{id:"inspire"}},[r("v-card",{staticClass:"mx-auto rounded-xl",staticStyle:{"margin-bottom":"60px"},attrs:{light:"",elevation:"24"}},[r("v-card-title",[e._v("\n        "+e._s(e.tit_dep)+"\n      ")]),e._v(" "),r("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.prof_dep,height:"500px",search:e.search,"custom-filter":e.filtroBuscar,loading:e.loadingBarProf,"loading-text":"Cargando datos..."},scopedSlots:e._u([{key:"top",fn:function(){return[r("v-toolbar",{attrs:{flat:""}},[r("v-toolbar-title",[e._v("Profesores asignados")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,n=t.attrs;return[r("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",n,!1),o),[e._v("\n                Asignar nuevo\n              ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),r("v-card",[r("v-card-title",[r("span",{staticClass:"headline"},[e._v("Asignar profesor")])]),e._v(" "),r("v-card-text",[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-select",{attrs:{items:e.prof_nom,"item-text":"nombre_completo","item-value":"id_profesor",label:"Profesor"},model:{value:e.editedItem.id_profesor,callback:function(t){e.$set(e.editedItem,"id_profesor",t)},expression:"editedItem.id_profesor"}})],1),e._v(" "),r("v-spacer"),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-select",{attrs:{items:e.prof_rol,"item-text":"rol","item-value":"id_rol",label:"Rol"},model:{value:e.editedItem.id_rol,callback:function(t){e.$set(e.editedItem,"id_rol",t)},expression:"editedItem.id_rol"}})],1)],1)],1)],1),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("\n                  Cancelar\n                ")]),e._v(" "),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("\n                  Aceptar\n                ")])],1)],1)],1),e._v(" "),r("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[e._v("Eliminar")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-card-subtitle",{staticClass:"headline"},[e._v("¿Estás seguro de quitar al profesor?")]),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancelar")]),e._v(" "),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("Aceptar")]),e._v(" "),r("v-spacer")],1)],1)],1),e._v(" "),r("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogConfirm,callback:function(t){e.dialogConfirm=t},expression:"dialogConfirm"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[e._v(e._s(e.confirmTitle))]),e._v(" "),r("v-spacer"),e._v(" "),r("v-card-subtitle",{staticClass:"headline"},[e._v(e._s(e.confirmMensj))]),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.cerrarConfirm}},[e._v("Aceptar")]),e._v(" "),r("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.acciones",fn:function(t){var o=t.item;return[r("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(o)}}},[e._v("\n          mdi-pencil\n        ")]),e._v(" "),r("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(o)}}},[e._v("\n          mdi-delete\n        ")])]}},{key:"no-data",fn:function(){},proxy:!0}])})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{VApp:m.a,VBtn:v.a,VCard:_.a,VCardActions:h.a,VCardSubtitle:h.b,VCardText:h.c,VCardTitle:h.d,VCol:x.a,VContainer:C.a,VDataTable:I.a,VDialog:k.a,VIcon:D.a,VRow:w.a,VSelect:P.a,VSpacer:j.a,VToolbar:y.a,VToolbarTitle:V.a})}}]);