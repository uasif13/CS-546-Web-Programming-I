(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[70,739],{As2g:function(e,t,n){"use strict"
var r=n("FIFq")
var i=n("ouhR")
var o=n.n(i)
var s=function(e,t){return function(){return e.apply(t,arguments)}},a=function(e,t){for(var n in t)l.call(t,n)&&(e[n]=t[n])
function r(){this.constructor=e}r.prototype=t.prototype
e.prototype=new r
e.__super__=t.prototype
return e},l={}.hasOwnProperty,c=[].indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(t in this&&this[t]===e)return t
return-1}
t["a"]=function(e){a(t,e)
function t(){this.onPoll=s(this.onPoll,this)
this.poll=s(this.poll,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.defaults={completion:0,url:null,timeout:1e3}
t.prototype.pollStates=["queued","running"]
t.prototype.isPolling=function(){var e
return e=this.get("workflow_state"),c.call(this.pollStates,e)>=0}
t.prototype.isSuccess=function(){return"completed"===this.get("workflow_state")}
t.prototype.initialize=function(){this.pollDfd=new o.a.Deferred
this.on("change:url",(e=this,function(){if(e.isPolling())return e.poll()}))
var e
return o()(window).on("beforeunload",function(e){return function(){return clearTimeout(e.timeout)}}(this))}
t.prototype.url=function(){return this.get("url")}
t.prototype.poll=function(){this.fetch().then(this.onPoll,(e=this,function(){return e.pollDfd.rejectWith(e,arguments)}))
var e
return this.pollDfd}
t.prototype.onPoll=function(e){this.pollDfd.notify(e)
if(this.isPolling())return this.timeout=setTimeout(this.poll,this.get("timeout"))
this.pollDfd[this.isSuccess()?"resolve":"reject"](e)
return this.trigger("complete")}
return t}(r["Model"])},N40E:function(e,t,n){"use strict"
var r=n("ouhR")
var i=n.n(r)
var o=n("GLiE")
var s=n.n(o)
var a=n("pPlI")
var l=n("3O+N")
var c=n.n(l)
var h=n("pQTu")
var p=n("m0r6")
Object(p["a"])(JSON.parse('{"ar":{"paginated_collection":{"no_items":"لا توجد عناصر."}},"ca":{"paginated_collection":{"no_items":"No hi ha elements."}},"cy":{"paginated_collection":{"no_items":"Dim eitemau."}},"da":{"paginated_collection":{"no_items":"Ingen elementer."}},"da-x-k12":{"paginated_collection":{"no_items":"Ingen elementer."}},"de":{"paginated_collection":{"no_items":"Keine Elemente"}},"el":{"paginated_collection":{"no_items":"Δεν υπάρχουν στοιχεία."}},"en-AU":{"paginated_collection":{"no_items":"No items."}},"en-AU-x-unimelb":{"paginated_collection":{"no_items":"No items."}},"en-CA":{"paginated_collection":{"no_items":"No items."}},"en-GB":{"paginated_collection":{"no_items":"No items."}},"en-GB-x-lbs":{"paginated_collection":{"no_items":"No items."}},"en-GB-x-ukhe":{"paginated_collection":{"no_items":"No items."}},"es":{"paginated_collection":{"no_items":"No hay items."}},"fa":{"paginated_collection":{"no_items":"هیچ موردی یافت نشد."}},"fi":{"paginated_collection":{"no_items":"Ei kohteita."}},"fr":{"paginated_collection":{"no_items":"Aucun élément"}},"fr-CA":{"paginated_collection":{"no_items":"Aucun élément"}},"he":{"paginated_collection":{"no_items":"אין פריטים"}},"ht":{"paginated_collection":{"no_items":"Okenn eleman."}},"hu":{"paginated_collection":{"no_items":"Nincsenek elemek."}},"hy":{"paginated_collection":{"no_items":"Տարրերը բացակայում են:"}},"is":{"paginated_collection":{"no_items":"Engin atriði."}},"it":{"paginated_collection":{"no_items":"Nessun elemento."}},"ja":{"paginated_collection":{"no_items":"アイテムがありません。"}},"ko":{"paginated_collection":{"no_items":"항목이 없습니다."}},"mi":{"paginated_collection":{"no_items":"Kāore he tūemi."}},"nb":{"paginated_collection":{"no_items":"Ingen elementer."}},"nb-x-k12":{"paginated_collection":{"no_items":"Ingen elementer."}},"nl":{"paginated_collection":{"no_items":"Geen items."}},"nn":{"paginated_collection":{"no_items":"Ingen element."}},"pl":{"paginated_collection":{"no_items":"Brak elementów."}},"pt":{"paginated_collection":{"no_items":"Nenhum item."}},"pt-BR":{"paginated_collection":{"no_items":"Nenhum item."}},"ru":{"paginated_collection":{"no_items":"Элементы отсутствуют."}},"sl":{"paginated_collection":{"no_items":"Ni elementov."}},"sv":{"paginated_collection":{"no_items":"Inga objekt."}},"sv-x-k12":{"paginated_collection":{"no_items":"Inga objekt."}},"tr":{"paginated_collection":{"no_items":"Öğe bulunamadı."}},"uk":{"paginated_collection":{"no_items":"Елементи не знайдено"}},"zh-Hans":{"paginated_collection":{"no_items":"没有项目。"}},"zh-Hant":{"paginated_collection":{"no_items":"沒有項目。"}}}'))
n("jQeR")
n("0sPK")
h["default"].scoped("paginated_collection")
n("DfGn")
var u=c.a.default
var d=u.template,f=u.templates=u.templates||{}
var _="paginatedCollection"
f[_]=d((function(e,t,n,r,i){this.compilerInfo=[4,">= 1.0.0"]
n=this.merge(n,e.helpers)
i=i||{}
var o,s="",a=n.helperMissing,l=this.escapeExpression,c=this
function h(e,t){return'\n<ul class="collectionViewItems"></ul>\n'}function p(e,t){var r,i,o=""
o+="\n<p>\n  "+l((r=n.t||e&&e.t,i={hash:{scope:"paginated_collection"},data:t},r?r.call(e,"no_items","No items.",i):a.call(e,"t","no_items","No items.",i)))+"\n</p>\n"
return o}o=n["if"].call(t,(o=t&&t.collection,null==o||false===o?o:o.length),{hash:{},inverse:c.program(3,p,i),fn:c.program(1,h,i),data:i});(o||0===o)&&(s+=o)
s+='\n\n<div class="paginatedLoadingIndicator">Loading</div>\n\n'
return s}))
var m=f[_]
var g=function(e,t){return function(){return e.apply(t,arguments)}},v=function(e,t){for(var n in t)y.call(t,n)&&(e[n]=t[n])
function r(){this.constructor=e}r.prototype=t.prototype
e.prototype=new r
e.__super__=t.prototype
return e},y={}.hasOwnProperty
t["a"]=function(e){v(t,e)
function t(){this.showLoadingIndicator=g(this.showLoadingIndicator,this)
this.hideLoadingIndicator=g(this.hideLoadingIndicator,this)
this.checkScroll=g(this.checkScroll,this)
this.detachScroll=g(this.detachScroll,this)
this.attachScroll=g(this.attachScroll,this)
this.resetScrollContainer=g(this.resetScrollContainer,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.defaults={buffer:500,scrollContainer:window}
t.prototype.els=s.a.extend({},a["a"].prototype.els,{".paginatedLoadingIndicator":"$loadingIndicator"})
t.optionProperty("scrollableElement")
t.optionProperty("scrollContainer")
t.optionProperty("autoFetch")
t.optionProperty("fetchItAll")
t.prototype.template=m
t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
return this.initScrollContainer()}
t.prototype.resetScrollContainer=function(e){this.detachScroll()
this.scrollContainer=e
this.initScrollContainer()
return this.attachScroll()}
t.prototype.attachCollection=function(){t.__super__.attachCollection.apply(this,arguments)
this.listenTo(this.collection,"reset",this.attachScroll)
this.listenTo(this.collection,"fetched:last",this.detachScroll)
this.listenTo(this.collection,"beforeFetch",this.showLoadingIndicator)
return this.autoFetch||this.fetchItAll?this.listenTo(this.collection,"fetch",(e=this,function(){return setTimeout(e.checkScroll)})):this.listenTo(this.collection,"fetch",this.hideLoadingIndicator)
var e}
t.prototype.initScrollContainer=function(){this.$scrollableElement=this.scrollableElement?i()(this.scrollableElement):this.$el
this.scrollContainer=i()(this.scrollContainer)
return this.heightContainer=this.scrollContainer[0]===window?i()(document.body):this.scrollContainer}
t.prototype.attachScroll=function(){var e,t
t="scroll.pagination:"+this.cid
e="resize.pagination:"+this.cid
this.scrollContainer.on(t,this.checkScroll)
return this.scrollContainer.on(e,this.checkScroll)}
t.prototype.detachScroll=function(){return this.scrollContainer.off(".pagination:"+this.cid)}
t.prototype.checkScroll=function(){var e,t,n,r
if(this.collection.fetchingPage||this.collection.fetchingNextPage||!this.$el.length)return
t=((null!=(n=this.$scrollableElement.position())?n.top:void 0)||0)+this.$scrollableElement.height()-(null!=(r=this.heightContainer.position())?r.top:void 0)
e=t-this.scrollContainer.scrollTop()-this.scrollContainer.height()
return(this.fetchItAll||e<this.options.buffer)&&this.collection.canFetch("next")?this.collection.fetch({page:"next"}):this.hideLoadingIndicator()}
t.prototype.remove=function(){this.detachScroll()
return t.__super__.remove.apply(this,arguments)}
t.prototype.afterRender=function(){t.__super__.afterRender.apply(this,arguments)
if(!this.collection.fetchingPage)return this.hideLoadingIndicator()}
t.prototype.hideLoadingIndicator=function(){var e
return null!=(e=this.$loadingIndicator)?e.hide():void 0}
t.prototype.showLoadingIndicator=function(){var e
return null!=(e=this.$loadingIndicator)?e.show():void 0}
return t}(a["a"])},VAoc:function(e,t,n){"use strict"
var r=n("pQTu")
var i=n("m0r6")
Object(i["a"])(JSON.parse('{"ar":{"selected_subtree_a7693937":"%{subtree} محددة"},"ca":{"selected_subtree_a7693937":"%{subtree} seleccionat"},"cy":{"selected_subtree_a7693937":"Wedi dewis %{subtree}"},"da":{"selected_subtree_a7693937":"Valgt %{subtree}"},"da-x-k12":{"selected_subtree_a7693937":"Valgt %{subtree}"},"de":{"selected_subtree_a7693937":"Ausgewählter %{subtree}"},"el":{"selected_subtree_a7693937":"Επιλεγμένο %{subtree}"},"en-AU":{"selected_subtree_a7693937":"Selected %{subtree}"},"en-AU-x-unimelb":{"selected_subtree_a7693937":"Selected %{subtree}"},"en-CA":{"selected_subtree_a7693937":"Selected %{subtree}"},"en-GB":{"selected_subtree_a7693937":"Selected %{subtree}"},"en-GB-x-lbs":{"selected_subtree_a7693937":"Selected %{subtree}"},"en-GB-x-ukhe":{"selected_subtree_a7693937":"Selected %{subtree}"},"es":{"selected_subtree_a7693937":"%{subtree} seleccionado"},"fa":{"selected_subtree_a7693937":"%{subtree} انتخاب شده"},"fi":{"selected_subtree_a7693937":"Valittu %{subtree}"},"fr":{"selected_subtree_a7693937":"%{subtree} sélectionné"},"fr-CA":{"selected_subtree_a7693937":"%{subtree} sélectionné"},"he":{"selected_subtree_a7693937":"%{subtree} נבחר"},"ht":{"selected_subtree_a7693937":"Seleksyone %{subtree}"},"hu":{"selected_subtree_a7693937":"%{subtree} kiválasztva"},"hy":{"selected_subtree_a7693937":"Ընտրված %{subtree}"},"is":{"selected_subtree_a7693937":"Valið %{subtree}"},"it":{"selected_subtree_a7693937":"Selezionato %{subtree}"},"ja":{"selected_subtree_a7693937":"選択された %{subtree}"},"mi":{"selected_subtree_a7693937":"Tīpakohia %{subtree}"},"nb":{"selected_subtree_a7693937":"Valgt %{subtree}"},"nb-x-k12":{"selected_subtree_a7693937":"Valgt %{subtree}"},"nl":{"selected_subtree_a7693937":"Geselecteerd %{subtree}"},"nn":{"selected_subtree_a7693937":"Valt %{subtree}"},"pl":{"selected_subtree_a7693937":"Wybrane %{subtree}"},"pt":{"selected_subtree_a7693937":"%{subtree} selecionado"},"pt-BR":{"selected_subtree_a7693937":"Selecionado %{subtree}"},"ru":{"selected_subtree_a7693937":"Выбранное %{subtree}"},"sl":{"selected_subtree_a7693937":"Izbrano %{subtree}"},"sv":{"selected_subtree_a7693937":"Markerade %{subtree}"},"sv-x-k12":{"selected_subtree_a7693937":"Markerade %{subtree}"},"tr":{"selected_subtree_a7693937":"Seçili %{subtree}"},"uk":{"selected_subtree_a7693937":"Обраний %{subtree}"},"zh-Hans":{"selected_subtree_a7693937":"已选定 %{subtree}"},"zh-Hant":{"selected_subtree_a7693937":"已選定 %{subtree}"}}'))
n("jQeR")
n("0sPK")
var o=r["default"].scoped("treeBrowser")
var s=n("FIFq")
var a=n.n(s)
var l=n("GLiE")
var c=n.n(l)
var h=n("3O+N")
var p=n.n(h)
Object(i["a"])(JSON.parse('{"ar":{"folder_browsing_tree_1f00a3ae":"شجرة استعراض المجلدات"},"ca":{"folder_browsing_tree_1f00a3ae":"Arbre de navegació de carpetes"},"cy":{"folder_browsing_tree_1f00a3ae":"Coeden Pori drwy Ffolderi"},"da":{"folder_browsing_tree_1f00a3ae":"Mappestruktur"},"da-x-k12":{"folder_browsing_tree_1f00a3ae":"Mappestruktur"},"de":{"folder_browsing_tree_1f00a3ae":"Baumstruktur zum Durchsuchen von Ordnern"},"el":{"folder_browsing_tree_1f00a3ae":"Δέντρο Προσπέλασης Φακέλου"},"en-AU":{"folder_browsing_tree_1f00a3ae":"Folder Browsing Tree"},"en-AU-x-unimelb":{"folder_browsing_tree_1f00a3ae":"Folder Browsing Tree"},"en-CA":{"folder_browsing_tree_1f00a3ae":"Folder Browsing Tree"},"en-GB":{"folder_browsing_tree_1f00a3ae":"Folder Browsing Tree"},"en-GB-x-lbs":{"folder_browsing_tree_1f00a3ae":"Folder Browsing Tree"},"en-GB-x-ukhe":{"folder_browsing_tree_1f00a3ae":"Folder Browsing Tree"},"es":{"folder_browsing_tree_1f00a3ae":"Árbol de navegación de carpetas"},"fa":{"folder_browsing_tree_1f00a3ae":"درخت مرور پوشه"},"fi":{"folder_browsing_tree_1f00a3ae":"Kansion selauspuu"},"fr":{"folder_browsing_tree_1f00a3ae":"Arborescence du dossier"},"fr-CA":{"folder_browsing_tree_1f00a3ae":"Arborescence du dossier"},"he":{"folder_browsing_tree_1f00a3ae":"עץ דפדוף בתיקיות"},"ht":{"folder_browsing_tree_1f00a3ae":"Navigasyon Dosye"},"hu":{"folder_browsing_tree_1f00a3ae":"Mappaböngészés fanézetben"},"is":{"folder_browsing_tree_1f00a3ae":"Möpputré"},"it":{"folder_browsing_tree_1f00a3ae":"Struttura di esplorazione cartelle"},"ja":{"folder_browsing_tree_1f00a3ae":"フォルダ参照ツリー"},"mi":{"folder_browsing_tree_1f00a3ae":"Kōpaki Pūtirotiro Rākau"},"nb":{"folder_browsing_tree_1f00a3ae":"Mappens Rangordning"},"nb-x-k12":{"folder_browsing_tree_1f00a3ae":"Mappens Rangordning"},"nl":{"folder_browsing_tree_1f00a3ae":"Structuur voor bladeren door mappen"},"nn":{"folder_browsing_tree_1f00a3ae":"Bla gjennom mappetre"},"pl":{"folder_browsing_tree_1f00a3ae":"Przeglądanie folderu"},"pt":{"folder_browsing_tree_1f00a3ae":"Árvore de navegação de pastas"},"pt-BR":{"folder_browsing_tree_1f00a3ae":"Árvore de navegação de pastas"},"ru":{"folder_browsing_tree_1f00a3ae":"Просмотр дерева папки"},"sl":{"folder_browsing_tree_1f00a3ae":"Prikaz imenikov"},"sv":{"folder_browsing_tree_1f00a3ae":"Träd för bläddring i mappar"},"sv-x-k12":{"folder_browsing_tree_1f00a3ae":"Träd för bläddring i mappar"},"tr":{"folder_browsing_tree_1f00a3ae":"Dizin Görüntüleme Ağacı"},"uk":{"folder_browsing_tree_1f00a3ae":"Дерево перегляду тек"},"zh-Hans":{"folder_browsing_tree_1f00a3ae":"文件夹浏览树"},"zh-Hant":{"folder_browsing_tree_1f00a3ae":"文件夾瀏覽樹"}}'))
r["default"].scoped("tree_browser")
n("DfGn")
var u=n("EvX+")
var d=p.a.default
var f=d.template,_=d.templates=d.templates||{}
var m="TreeBrowser"
_[m]=f((function(e,t,n,r,i){this.compilerInfo=[4,">= 1.0.0"]
n=this.merge(n,e.helpers)
i=i||{}
var o,s,a="",l=n.helperMissing,c=this.escapeExpression
a+='<ul role="tree" tabindex="0" activedescendent="" class="tree"\n  aria-label="'+c((o=n.t||t&&t.t,s={hash:{i18n_inferred_key:true},data:i},o?o.call(t,"folder_browsing_tree_1f00a3ae","Folder Browsing Tree",s):l.call(t,"t","folder_browsing_tree_1f00a3ae","Folder Browsing Tree",s)))+'"\n></ul>'
return a}))
u["a"].loadStylesheet("jst/TreeBrowser",{new_styles_normal_contrast:{combinedChecksum:"486bca8feb"},new_styles_high_contrast:{combinedChecksum:"3f80f1d2d4"},responsive_layout_normal_contrast:{combinedChecksum:"486bca8feb"},responsive_layout_high_contrast:{combinedChecksum:"3f80f1d2d4"},new_styles_normal_contrast_rtl:{combinedChecksum:"5733fe07d7"},new_styles_high_contrast_rtl:{combinedChecksum:"069ef64d42"},responsive_layout_normal_contrast_rtl:{combinedChecksum:"5733fe07d7"},responsive_layout_high_contrast_rtl:{combinedChecksum:"069ef64d42"}}[u["a"].getCssVariant()])
var g=_[m]
var v=n("ouhR")
var y=n.n(v)
var b=n("N40E")
var w=p.a.default
var C=w.template,I=w.templates=w.templates||{}
var S="TreeItem"
I[S]=C((function(e,t,n,r,i){this.compilerInfo=[4,">= 1.0.0"]
n=this.merge(n,e.helpers)
i=i||{}
var o,s,a="",l="function",c=this.escapeExpression,h=this
function p(e,t){var r,i,o=""
o+='\n    <span class="preview-thumbnail-holder">\n      <img class="preview-thumbnail" src="'
if(i=n.thumbnail_url)r=i.call(e,{hash:{},data:t})
else{i=e&&e.thumbnail_url
r=typeof i===l?i.call(e,{hash:{},data:t}):i}o+=c(r)+'">\n    </span>\n  '
return o}function u(e,t){return'\n    <i class="icon-document"></i>\n  '}a+='<a href="#" data-fullsize="'
if(s=n.rce_preview_url)o=s.call(t,{hash:{},data:i})
else{s=t&&t.rce_preview_url
o=typeof s===l?s.call(t,{hash:{},data:i}):s}a+=c(o)+'" role="presentation" tabindex="-1" class="treeFile ellipsis" title="'
if(s=n.display_name)o=s.call(t,{hash:{},data:i})
else{s=t&&t.display_name
o=typeof s===l?s.call(t,{hash:{},data:i}):s}a+=c(o)+'">\n  '
o=n["if"].call(t,t&&t.thumbnail_url,{hash:{},inverse:h.program(3,u,i),fn:h.program(1,p,i),data:i});(o||0===o)&&(a+=o)
a+="\n  "
if(s=n.display_name)o=s.call(t,{hash:{},data:i})
else{s=t&&t.display_name
o=typeof s===l?s.call(t,{hash:{},data:i}):s}a+=c(o)+"\n</a>\n"
return a}))
var k=I[S]
var x=function(e,t){for(var n in t)V.call(t,n)&&(e[n]=t[n])
function r(){this.constructor=e}r.prototype=t.prototype
e.prototype=new r
e.__super__=t.prototype
return e},V={}.hasOwnProperty
var F=function(e){x(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.tagName="li"
t.prototype.template=k
t.optionProperty("nestingLevel")
t.prototype.attributes=function(){return{role:"treeitem",id:c.a.uniqueId("treenode-")}}
t.prototype.afterRender=function(){return this.$el.attr("aria-level",this.nestingLevel)}
return t}(a.a.View)
var O=p.a.default
var P=O.template,N=O.templates=O.templates||{}
var A="TreeCollection"
N[A]=P((function(e,t,n,r,i){this.compilerInfo=[4,">= 1.0.0"]
n=this.merge(n,e.helpers)
i=i||{}
var o,s="",a=this
function l(e,t){return'\n<ul class="collectionViewItems"></ul>\n'}o=n["if"].call(t,(o=t&&t.collection,null==o||false===o?o:o.length),{hash:{},inverse:a.noop,fn:a.program(1,l,i),data:i});(o||0===o)&&(s+=o)
s+='\n\n<div class="paginatedLoadingIndicator">Loading</div>\n\n'
return s}))
var z=N[A]
var L=n("5Ky4")
var T=function(e,t){for(var n in t)B.call(t,n)&&(e[n]=t[n])
function r(){this.constructor=e}r.prototype=t.prototype
e.prototype=new r
e.__super__=t.prototype
return e},B={}.hasOwnProperty
var R=function(e){T(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.tagName="li"
t.optionProperty("nestingLevel")
t.optionProperty("onlyShowSubtrees")
t.optionProperty("onClick")
t.optionProperty("dndOptions")
t.optionProperty("href")
t.optionProperty("focusStyleClass")
t.optionProperty("selectedStyleClass")
t.optionProperty("autoFetch")
t.optionProperty("fetchItAll")
t.prototype.defaults={nestingLevel:1}
t.prototype.attributes=function(){return{role:"treeitem","data-id":this.model.id,"aria-expanded":""+!!this.model.isExpanded,"aria-level":this.nestingLevel,"aria-label":this.model.get("custom_name")||this.model.get("name")||this.model.get("title"),id:this.tagId}}
t.prototype.events={"click .treeLabel":"toggle","selectItem .treeFile, .treeLabel":"selectItem"}
t.prototype.initialize=function(){var e
this.tagId=c.a.uniqueId("treenode-")
this.render=c.a.debounce(this.render)
this.model.on("all",this.render,this)
this.model.getItems().on("all",this.render,this)
this.model.getSubtrees().on("all",this.render,this)
e=t.__super__.initialize.apply(this,arguments)
this.render()
return e}
t.prototype.render=function(){this.renderSelf()
return this.renderContents()}
t.prototype.toggle=function(e){e.preventDefault()
e.stopPropagation()
this.model.toggle({onlyShowSubtrees:this.onlyShowSubtrees})
return this.$el.attr(this.attributes())}
t.prototype.selectItem=function(e){var t
t=y()(e.target).find("span")
return t.trigger("click")}
t.prototype.title_text=function(){return this.model.get("custom_name")||this.model.get("name")||this.model.get("title")}
t.prototype.renderSelf=function(){if(this.model.isNew())return
this.$el.attr(this.attributes())
this.$label||(this.$label=(e=this,function(){var t,n,r
e.$labelInner=y()("<span>").click((function(t){if(e.selectedStyleClass){y()("."+e.selectedStyleClass).each((function(t,n){return y()(n).removeClass(e.selectedStyleClass)}))
y()(t.target).addClass(e.selectedStyleClass)}return"function"===typeof e.onClick?e.onClick(t,e.model):void 0}))
n=e.model.get("for_submissions")?"icon-folder-locked":"icon-folder"
t=y()('<a\n  class="treeLabel"\n  role="presentation"\n  tabindex="-1"\n>\n  <i class="icon-mini-arrow-right"></i>\n  <i class="'+Object(L["a"])(n)+'"></i>\n</a>').append(e.$labelInner).prependTo(e.$el)
if(e.dndOptions&&!e.model.get("for_submissions")){r=function(e){return function(){return t.toggleClass("activeDragTarget",e)}}
t.on({"dragenter dragover":function(t){return e.dndOptions.onItemDragEnterOrOver(t.originalEvent,r(true))},"dragleave dragend":function(t){return e.dndOptions.onItemDragLeaveOrEnd(t.originalEvent,r(false))},drop:function(t){return e.dndOptions.onItemDrop(t.originalEvent,e.model,r(false))}})}return t})())
var e
this.$labelInner.text(this.title_text())
this.$label.attr("href",("function"===typeof this.href?this.href(this.model):void 0)||"#").toggleClass("expanded",!!this.model.isExpanded).toggleClass("loading after",!!this.model.isExpanding)
if(this.selectedStyleClass)return this.$label.toggleClass(this.selectedStyleClass,window.location.pathname===("function"===typeof this.href?this.href(this.model):void 0))}
t.prototype.renderContents=function(){var e,n
if(this.model.isExpanded){if(!this.$treeContents){this.$treeContents=y()("<ul role='group' class='treeContents'/>").appendTo(this.$el)
n=new b["a"]({collection:this.model.getSubtrees(),itemView:t,itemViewOptions:{nestingLevel:this.nestingLevel+1,onlyShowSubtrees:this.onlyShowSubtrees,onClick:this.onClick,dndOptions:this.dndOptions,href:this.href,focusStyleClass:this.focusStyleClass,selectedStyleClass:this.selectedStyleClass,autoFetch:this.autoFetch,fetchItAll:this.fetchItAll},tagName:"li",className:"subtrees",template:z,scrollContainer:this.$treeContents.closest("div[role=tabpanel]"),autoFetch:this.autoFetch,fetchItAll:this.fetchItAll})
this.$treeContents.append(n.render().el)
if(!this.onlyShowSubtrees){e=new b["a"]({collection:this.model.getItems(),itemView:F,itemViewOptions:{nestingLevel:this.nestingLevel+1},tagName:"li",className:"items",template:z,scrollContainer:this.$treeContents.closest("div[role=tabpanel]")})
this.$treeContents.append(e.render().el)}}return this.$("> .treeContents").removeClass("hidden")}return this.$("> .treeContents").addClass("hidden")}
return t}(a.a.View)
var j=function(e,t){return function(){return e.apply(t,arguments)}},E=function(e,t){for(var n in t)G.call(t,n)&&(e[n]=t[n])
function r(){this.constructor=e}r.prototype=t.prototype
e.prototype=new r
e.__super__=t.prototype
return e},G={}.hasOwnProperty
t["a"]=function(e){E(t,e)
function t(){this.focusOnOpen=j(this.focusOnOpen,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.template=g
t.optionProperty("rootModelsFinder")
t.optionProperty("onlyShowSubtrees")
t.optionProperty("onClick")
t.optionProperty("dndOptions")
t.optionProperty("href")
t.optionProperty("focusStyleClass")
t.optionProperty("selectedStyleClass")
t.optionProperty("autoFetch")
t.optionProperty("fetchItAll")
t.prototype.events={"keydown .tree[role=tree]":function(e){var t,n,r
switch(e.which){case 35:r="end"
break
case 36:r="home"
break
case 37:r="left"
break
case 38:r="up"
break
case 39:r="right"
break
case 40:r="down"
break
case 13:case 32:r="enter"
break
default:return true}e.preventDefault()
e.stopPropagation()
n=this.$tree.attr("aria-activedescendant")
if(!n)return this.focusFirst()
t=this.$tree.find("#"+n)
switch(r){case"up":return this.focusPrev(t)
case"down":return this.focusNext(t)
case"left":return this.collapseCurrent(t)
case"right":return this.expandCurrent(t)
case"home":return this.focusFirst()
case"end":return this.focusLast(t)
case"enter":return this.activateCurrent(t)}}}
t.prototype.setActiveTree=function(e,t){return t.activeTree=e}
t.prototype.afterRender=function(){var e,n,r,i
this.$tree=this.$el.children(".tree")
r=this.rootModelsFinder.find()
for(e=0,n=r.length;e<n;e++){i=r[e]
i&&new R({model:i,onlyShowSubtrees:this.onlyShowSubtrees,onClick:this.onClick,dndOptions:this.dndOptions,href:this.href,selectedStyleClass:this.selectedStyleClass,autoFetch:this.autoFetch,fetchItAll:this.fetchItAll}).$el.appendTo(this.$tree)}return t.__super__.afterRender.apply(this,arguments)}
t.prototype.destroyView=function(){this.undelegateEvents()
this.$el.removeData().unbind()
this.remove()
return a.a.View.prototype.remove.call(this)}
t.prototype.setFocus=function(e,t){var n,r
if(!(null!=e?e.length:void 0)||(null!=t&&"function"===typeof t.is?t.is(e):void 0))return
this.$tree.find("[role=treeitem]").not(e).attr("aria-selected",false).removeClass(this.focusStyleClass)
e.attr("aria-selected",true)
e.addClass(this.focusStyleClass);(n=e.attr("aria-label"))&&$.screenReaderFlashMessageExclusive(n)
r=e.attr("id")
if(!r){r=c.a.uniqueId("treenode-")
e.attr("id",r)}this.$tree.attr("aria-activedescendant",r)
return e[0].scrollIntoViewIfNeeded?e[0].scrollIntoViewIfNeeded():e[0].scrollIntoView()}
t.prototype.focusFirst=function(){return this.setFocus(this.$tree.find("[role=treeitem]:first"))}
t.prototype.focusLast=function(e){var t,n
t=this.$tree.find("[role=treeitem][aria-level=1]")
n=1
while(this.ariaPropIsTrue(t,"aria-expanded")&&t.find("[role=treeitem]:first").length){n++
t=t.find("[role=treeitem][aria-level="+n+"]:last")}this.setFocus(t,e)
return this.setFocus(this.$tree.find("[role=treeitem]:first"))}
t.prototype.focusNext=function(e){var t,n,r,i
if(this.ariaPropIsTrue(e,"aria-expanded")){n=e.find("[role=treeitem]:first")
if(n.length)return this.setFocus(n,e)}n=null
t=e
r=parseInt(e.attr("aria-level"),10)
while(r>0){i="[role=treeitem][aria-level="+r+"]"
n=t.parentsUntil("[role=treeitem],[role=tree]").andSelf().nextAll().find(i).andSelf().filter(i).first()
if(null!=n?n.length:void 0)return this.setFocus(n,e)
r--
t=t.parent().closest("[role=treeitem][aria-level="+r+"]")}}
t.prototype.focusPrev=function(e){var t,n,r
n=parseInt(e.attr("aria-level"),10)
r="[role=treeitem][aria-level="+n+"]"
t=e.parentsUntil("[role=treeitem],[role=tree]").andSelf().prevAll().find(r).andSelf().filter(r).last()
if(!t.length){t=e.parent().closest("[role=treeitem]")
return this.setFocus(t,e)}while(this.ariaPropIsTrue(t,"aria-expanded")&&t.find("[role=treeitem]:first").length){n++
t=t.find("[role=treeitem][aria-level="+n+"]:last")}return this.setFocus(t,e)}
t.prototype.expandCurrent=function(e){if(this.ariaPropIsTrue(e,"aria-expanded"))return this.setFocus(e.find("[role=treeitem]:first"),e)
e.find(".treeLabel:first").click()
return this.$tree.focus()}
t.prototype.collapseCurrent=function(e){if(this.ariaPropIsTrue(e,"aria-expanded")){e.find(".treeLabel:first").click()
return this.$tree.focus()}return this.setFocus(e.parent().closest("[role=treeitem]"),e)}
t.prototype.activateCurrent=function(e){e.find("a:first").trigger("selectItem")
return $.screenReaderFlashMessage(o.t("Selected %{subtree}",{subtree:e.attr("aria-label")}))}
t.prototype.ariaPropIsTrue=function(e,t){var n
return"true"===(null!=(n=e.attr(t))&&"function"===typeof n.toLowerCase?n.toLowerCase():void 0)}
t.prototype.focusOnOpen=function(){return this.$tree.focus()}
return t}(a.a.View)},btHx:function(e,t,n){"use strict"
var r=n("ouhR")
var i=n.n(r)
var o=n("FIFq")
var s=n.n(o)
var a=n("GLiE")
var l=n.n(a)
var c,h=function(e,t){return function(){return e.apply(t,arguments)}},p=function(e,t){for(var n in t)u.call(t,n)&&(e[n]=t[n])
function r(){this.constructor=e}r.prototype=t.prototype
e.prototype=new r
e.__super__=t.prototype
return e},u={}.hasOwnProperty,d=[].slice,f=[].indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(t in this&&this[t]===e)return t
return-1}
c=function(e){null==e&&(e="")
return e.charAt(0).toUpperCase()+e.substring(1).toLowerCase()}
t["a"]=function(e){p(t,e)
function t(){this._setStateAfterFetch=h(this._setStateAfterFetch,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.nameRegex=/rel="([a-z]+)/
t.prototype.linkRegex=/^<([^>]+)/
t.prototype.pageRegex=/\Wpage=(\d+)/
t.prototype.perPageRegex=/\Wper_page=(\d+)/
t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
return this.urls={}}
t.prototype.fetch=function(e){var n,r,o,s
null==e&&(e={})
e=l.a.clone(e)
this.loadedAll=false
r="fetching"+c(e.page)+"Page"
this[r]=true
if(null!=e.page){null==e.remove&&(e.remove=false)
if(null!=(o=this.urls)?o[e.page]:void 0){e.url=this.urls[e.page]
e.data=""}}else null==e.reset&&(e.reset=true)
null!=e.fetchOptions&&(e.data=e.fetchOptions)
this.trigger("beforeFetch",this,e)
null!=e.page&&this.trigger("beforeFetch:"+e.page,this,e)
s=null
e.dataFilter=(a=this,function(t){a[r]=false
a._setStateAfterFetch(s,e)
return t})
var a
n=e.dfd||i.a.Deferred()
s=t.__super__.fetch.call(this,e).done(function(t){return function(r,i,o){var s
t.trigger("fetch",t,r,e)
null!=e.page&&t.trigger("fetch:"+e.page,t,r,e);(null!=(s=t.urls)?s.next:void 0)||t.trigger.apply(t,["fetched:last"].concat(d.call(arguments)))
return t.loadAll&&null!=t.urls.next?setTimeout((function(){return t.fetch({page:"next",dfd:n})})):n.resolve(r,i,o)}}(this))
n.abort=s.abort
n.success=n.done
n.error=n.fail
return n}
t.prototype.canFetch=function(e){return null!=this.urls&&null!=this.urls[e]}
t.prototype._setStateAfterFetch=function(e,t){var n,r,i,o,s,a,l,c,h,p,u,d,_,m
null==this._urlCache&&(this._urlCache=[])
m=(a=t.url,f.call(this._urlCache,a)<0)
m||this._urlCache.push(t.url)
r=!this.atLeastOnePageFetched
u=r||("next"===(l=t.page)||"bottom"===l)&&m
d=r||("prev"===(c=t.page)||"top"===c)&&m
o=this.urls
this.urls=this._parsePageLinks(e)
u&&null!=this.urls.next?this.urls.bottom=this.urls.next:this.urls.next?this.urls.bottom=o.bottom:delete this.urls.bottom
d&&null!=this.urls.prev?this.urls.top=this.urls.prev:this.urls.prev?this.urls.top=o.top:delete this.urls.top
_=null!=(h=this.urls.first)?h:this.urls.next
if(null!=_){s=parseInt(_.match(this.perPageRegex)[1],10);(null!=(n=null!=this.options?this.options:this.options={}).params?n.params:n.params={}).per_page=s}this.urls.last&&(i=this.urls.last.match(this.pageRegex))&&(this.totalPages=parseInt(i[1],10));(null!=(p=this.urls)?p.next:void 0)||(this.loadedAll=true)
return this.atLeastOnePageFetched=true}
t.prototype._parsePageLinks=function(e){var t,n
t=null!=(n=e.getResponseHeader("link"))?n.split(","):void 0
null==t&&(t=[])
return l.a.reduce(t,(r=this,function(e,t){var n,i
n=t.match(r.nameRegex)[1]
i=t.match(r.linkRegex)[1]
e[n]=i
return e}),{})
var r}
return t}(s.a.Collection)},"gSD+":function(e,t,n){"use strict"
var r=n("rePB")
var i=n("1OyB")
var o=n("vuIU")
var s=n("md7G")
var a=n("foSv")
var l=n("Ji7U")
var c=n("q1tI")
var h=n.n(c)
var p=n("17x9")
var u=n.n(p)
var d=n("TSYQ")
var f=n.n(d)
var _=n("n12J")
var m=n("J2CL")
var g=n("RhCJ")
var v=n("nAyT")
var y=n("KgFQ")
var b=n("jtGx")
var w=n("oXx0")
function C(e){var t=e.borders,n=e.colors,r=e.spacing,i=e.typography
return{fontFamily:i.fontFamily,fontWeight:i.fontWeightNormal,lineHeight:i.lineHeightFit,h1FontSize:i.fontSizeXXLarge,h1FontWeight:i.fontWeightLight,h2FontSize:i.fontSizeXLarge,h2FontWeight:i.fontWeightNormal,h3FontSize:i.fontSizeLarge,h3FontWeight:i.fontWeightBold,h4FontSize:i.fontSizeMedium,h4FontWeight:i.fontWeightBold,h5FontSize:i.fontSizeSmall,h5FontWeight:i.fontWeightNormal,primaryInverseColor:n.textLightest,primaryColor:n.textDarkest,secondaryColor:n.textDark,secondaryInverseColor:n.textLight,brandColor:n.textBrand,warningColor:n.textWarning,errorColor:n.textDanger,successColor:n.textSuccess,borderPadding:r.xxxSmall,borderColor:n.borderMedium,borderWidth:t.widthSmall,borderStyle:t.style}}C.canvas=function(e){return{primaryColor:e["ic-brand-font-color-dark"],brandColor:e["ic-brand-primary"]}}
n.d(t,"a",(function(){return P}))
var I,S,k,x,V,F
var O={componentId:"emyav",template:function(e){return"\n\n.emyav_bGBk{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:".concat(e.fontFamily||"inherit",";line-height:").concat(e.lineHeight||"inherit",";margin:0;text-rendering:optimizeLegibility}\n\ninput.emyav_bGBk[type]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;border-radius:0;box-shadow:none;box-sizing:border-box;color:inherit;display:block;height:auto;line-height:inherit;margin:-6px 0 0 0;outline:0;padding:0;text-align:start;width:100%}\n\n[dir=ltr] input.emyav_bGBk[type]{text-align:left}\n\n[dir=rtl] input.emyav_bGBk[type]{text-align:right}\n\ninput.emyav_bGBk[type]:focus{outline:none}\n\n.emyav_fIqS{font-size:").concat(e.h1FontSize||"inherit",";font-weight:").concat(e.h1FontWeight||"inherit","}\n\n.emyav_eABG{font-size:").concat(e.h2FontSize||"inherit",";font-weight:").concat(e.h2FontWeight||"inherit","}\n\n.emyav_dlZd{font-size:").concat(e.h3FontSize||"inherit",";font-weight:").concat(e.h3FontWeight||"inherit","}\n\n.emyav_bAmB{font-size:").concat(e.h4FontSize||"inherit",";font-weight:").concat(e.h4FontWeight||"inherit","}\n\n.emyav_eRZv{font-size:").concat(e.h5FontSize||"inherit",";font-weight:").concat(e.h5FontWeight||"inherit","}\n\n.emyav_dTMd{border-top:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";padding-top:").concat(e.borderPadding||"inherit","}\n\n.emyav_evMo{border-bottom:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";padding-bottom:").concat(e.borderPadding||"inherit","}\n\n.emyav_fAVi{color:inherit}\n\n.emyav_qFsi{color:").concat(e.primaryColor||"inherit","}\n\n.emyav_bLsb{color:").concat(e.secondaryColor||"inherit","}\n\n.emyav_ezBQ{color:").concat(e.primaryInverseColor||"inherit","}\n\n.emyav_dlnd{color:").concat(e.secondaryInverseColor||"inherit","}\n\n.emyav_ZpoW{font-size:inherit;font-weight:inherit;line-height:inherit;margin:0}\n\n.emyav_bOQC{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}")},root:"emyav_bGBk",h1:"emyav_fIqS",h2:"emyav_eABG",h3:"emyav_dlZd",h4:"emyav_bAmB",h5:"emyav_eRZv","border-top":"emyav_dTMd","border-bottom":"emyav_evMo","color-inherit":"emyav_fAVi","color-primary":"emyav_qFsi","color-secondary":"emyav_bLsb","color-primary-inverse":"emyav_ezBQ","color-secondary-inverse":"emyav_dlnd",reset:"emyav_ZpoW",ellipsis:"emyav_bOQC"}
var P=(I=Object(v["a"])("7.0.0",null,"Use Heading from ui-heading instead."),S=Object(w["a"])(),k=Object(m["j"])(C,O),I(x=S(x=k(x=(F=V=function(e){Object(l["a"])(t,e)
function t(){Object(i["a"])(this,t)
return Object(s["a"])(this,Object(a["a"])(t).apply(this,arguments))}Object(o["a"])(t,[{key:"render",value:function(){var e
var n=this.props,i=n.border,o=n.children,s=n.color,a=n.level,l=n.ellipsis,c=n.margin,p=n.elementRef
var u=Object(y["a"])(t,this.props,(function(){return"reset"===a?"span":a}))
var d=_["a"].omitViewProps(Object(b["a"])(this.props,t.propTypes),t)
return h.a.createElement(_["a"],Object.assign({},d,{className:f()((e={},Object(r["a"])(e,O.root,true),Object(r["a"])(e,O[a],true),Object(r["a"])(e,O["color-".concat(s)],s),Object(r["a"])(e,O["border-".concat(i)],"none"!==i),Object(r["a"])(e,O.ellipsis,l),e)),as:u,margin:c,elementRef:p}),o)}}])
t.displayName="Heading"
return t}(c["Component"]),V.propTypes={border:u.a.oneOf(["none","top","bottom"]),children:g["a"],color:u.a.oneOf(["primary","secondary","primary-inverse","secondary-inverse","inherit"]),level:u.a.oneOf(["h1","h2","h3","h4","h5","reset"]),as:u.a.elementType,ellipsis:u.a.bool,margin:m["c"].spacing,elementRef:u.a.func},V.defaultProps={children:null,margin:void 0,elementRef:void 0,border:"none",color:"inherit",level:"h2",ellipsis:false},F))||x)||x)||x)},pPlI:function(e,t,n){"use strict"
var r=n("pQTu")
var i=n("m0r6")
Object(i["a"])(JSON.parse('{"ar":{"CollectionView":{"no_items":"لا توجد عناصر."}},"ca":{"CollectionView":{"no_items":"No hi ha elements."}},"cy":{"CollectionView":{"no_items":"Dim eitemau."}},"da":{"CollectionView":{"no_items":"Ingen elementer."}},"da-x-k12":{"CollectionView":{"no_items":"Ingen elementer."}},"de":{"CollectionView":{"no_items":"Keine Elemente"}},"el":{"CollectionView":{"no_items":"Δεν υπάρχουν στοιχεία."}},"en-AU":{"CollectionView":{"no_items":"No items."}},"en-AU-x-unimelb":{"CollectionView":{"no_items":"No items."}},"en-CA":{"CollectionView":{"no_items":"No items."}},"en-GB":{"CollectionView":{"no_items":"No items."}},"en-GB-x-ukhe":{"CollectionView":{"no_items":"No items."}},"es":{"CollectionView":{"no_items":"No hay items."}},"fa":{"CollectionView":{"no_items":"هیچ موردی یافت نشد."}},"fi":{"CollectionView":{"no_items":"Ei kohteita."}},"fr":{"CollectionView":{"no_items":"Aucun élément"}},"fr-CA":{"CollectionView":{"no_items":"Aucun élément"}},"he":{"CollectionView":{"no_items":"אין פריטים"}},"ht":{"CollectionView":{"no_items":"Okenn eleman."}},"hu":{"CollectionView":{"no_items":"Nincsenek elemek."}},"hy":{"CollectionView":{"no_items":"Տարրերը բացակայում են:"}},"is":{"CollectionView":{"no_items":"Engin atriði."}},"it":{"CollectionView":{"no_items":"Nessun elemento."}},"ja":{"CollectionView":{"no_items":"アイテムがありません。"}},"ko":{"CollectionView":{"no_items":"항목이 없습니다."}},"mi":{"CollectionView":{"no_items":"Kāore he tūemi."}},"nb":{"CollectionView":{"no_items":"Ingen elementer."}},"nb-x-k12":{"CollectionView":{"no_items":"Ingen elementer."}},"nl":{"CollectionView":{"no_items":"Geen items."}},"nn":{"CollectionView":{"no_items":"Ingen element."}},"pl":{"CollectionView":{"no_items":"Brak elementów."}},"pt":{"CollectionView":{"no_items":"Nenhum item."}},"pt-BR":{"CollectionView":{"no_items":"Nenhum item."}},"ru":{"CollectionView":{"no_items":"Элементы отсутствуют."}},"sv":{"CollectionView":{"no_items":"Inga objekt."}},"sv-x-k12":{"CollectionView":{"no_items":"Inga objekt."}},"tr":{"CollectionView":{"no_items":"Öğe bulunamadı."}},"zh-Hans":{"CollectionView":{"no_items":"没有项目。"}},"zh-Hant":{"CollectionView":{"no_items":"沒有項目。"}}}'))
n("jQeR")
n("0sPK")
var o=r["default"].scoped("CollectionView")
var s=n("ouhR")
var a=n.n(s)
var l=n("GLiE")
var c=n.n(l)
var h=n("FIFq")
var p=n.n(h)
var u=n("3O+N")
var d=n.n(u)
n("DfGn")
var f=d.a.default
var _=f.template,m=f.templates=f.templates||{}
var g="collectionView"
m[g]=_((function(e,t,n,r,i){this.compilerInfo=[4,">= 1.0.0"]
n=this.merge(n,e.helpers)
i=i||{}
var o,s="",a="function",l=this.escapeExpression,c=this
function h(e,t){var r,i,o=""
o+='\n<ul class="collectionViewItems '
if(i=n.listClassName)r=i.call(e,{hash:{},data:t})
else{i=e&&e.listClassName
r=typeof i===a?i.call(e,{hash:{},data:t}):i}o+=l(r)+'"></ul>\n'
return o}function p(e,t){var r,i,o=""
o+='\n<p class="emptyMessage">'
if(i=n.emptyMessage)r=i.call(e,{hash:{},data:t})
else{i=e&&e.emptyMessage
r=typeof i===a?i.call(e,{hash:{},data:t}):i}o+=l(r)+"</p>\n"
return o}o=n["if"].call(t,(o=t&&t.collection,null==o||false===o?o:o.length),{hash:{},inverse:c.program(3,p,i),fn:c.program(1,h,i),data:i});(o||0===o)&&(s+=o)
s+="\n"
return s}))
var v=m[g]
var y=n("cbNQ")
var b=function(e,t){return function(){return e.apply(t,arguments)}},w=function(e,t){for(var n in t)C.call(t,n)&&(e[n]=t[n])
function r(){this.constructor=e}r.prototype=t.prototype
e.prototype=new r
e.__super__=t.prototype
return e},C={}.hasOwnProperty
t["a"]=function(e){w(t,e)
function t(){this.renderItem=b(this.renderItem,this)
this.renderOnAdd=b(this.renderOnAdd,this)
this.removeItem=b(this.removeItem,this)
this.renderOnReset=b(this.renderOnReset,this)
this.removePreviousItems=b(this.removePreviousItems,this)
this.reorder=b(this.reorder,this)
this.render=b(this.render,this)
return t.__super__.constructor.apply(this,arguments)}t.optionProperty("itemView")
t.optionProperty("itemViewOptions")
t.optionProperty("emptyMessage")
t.optionProperty("listClassName")
t.prototype.className="collectionView"
t.prototype.els={".collectionViewItems":"$list"}
t.prototype.defaults=Object(y["b"])({itemViewOptions:{}},{emptyMessage:function(){return o.t("no_items","No items.")}})
t.prototype.template=v
t.prototype.initialize=function(e){t.__super__.initialize.apply(this,arguments)
return this.attachCollection()}
t.prototype.render=function(){t.__super__.render.apply(this,arguments)
this.empty||this.renderItems()
return this}
t.prototype.toJSON=function(){return c.a.extend(this.options,{emptyMessage:this.emptyMessage,listClassName:this.listClassName,ENV:ENV})}
t.prototype.reorder=function(){var e,t,n
this.collection.sort()
this.$list.children().detach()
e=function(){var e,n,r,i
r=this.collection.models
i=[]
for(e=0,n=r.length;e<n;e++){t=r[e]
i.push(t.itemView.$el)}return i}.call(this)
return(n=this.$list).append.apply(n,e)}
t.prototype.attachCollection=function(){this.listenTo(this.collection,"reset",this.renderOnReset)
this.listenTo(this.collection,"add",this.renderOnAdd)
this.listenTo(this.collection,"remove",this.removeItem)
return this.empty=!this.collection.length}
t.prototype.detachCollection=function(){return this.stopListening(this.collection)}
t.prototype.switchCollection=function(e){this.detachCollection()
this.collection=e
return this.attachCollection()}
t.prototype.removePreviousItems=function(e){var t,n,r,i,o
o=[]
for(t=0,n=e.length;t<n;t++){r=e[t]
o.push(null!=(i=r.view)?i.remove():void 0)}return o}
t.prototype.renderOnReset=function(e,t){this.empty=!this.collection.length
this.removePreviousItems(t.previousModels)
return this.render()}
t.prototype.renderItems=function(){this.collection.each(this.renderItem.bind(this))
return this.trigger("renderedItems")}
t.prototype.removeItem=function(e){this.empty=!this.collection.length
return this.empty?this.render():e.view.remove()}
t.prototype.renderOnAdd=function(e){this.empty&&this.render()
this.empty=false
return this.renderItem(e)}
t.prototype.renderItem=function(e){var t
t=this.createItemView(e)
t.render()
"function"===typeof this.attachItemView&&this.attachItemView(e,t)
return this.insertView(t)}
t.prototype.createItemView=function(e){var t
t=new this.itemView(a.a.extend({},this.itemViewOptions||{},{model:e}))
e.itemView=t
return t}
t.prototype.insertView=function(e){var t
t=this.collection.indexOf(e.model)
return 0===t?this.prependView(e):t===this.collection.length-1?this.appendView(e):this.insertViewAtIndex(e,t)}
t.prototype.insertViewAtIndex=function(e,t){var n
n=this.$list.children().eq(t)
return n.length?n.before(e.el):this.$list.append(e.el)}
t.prototype.prependView=function(e){return this.$list.prepend(e.el)}
t.prototype.appendView=function(e){return this.$list.append(e.el)}
return t}(p.a.View)}}])

//# sourceMappingURL=70-c-65d38718ba.js.map