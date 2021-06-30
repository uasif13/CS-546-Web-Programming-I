(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[13],{"5vOu":function(e,n,t){"use strict"
var o=t("KQm4")
var r=t("1OyB")
var a=t("vuIU")
var i=t("md7G")
var l=t("foSv")
var s=t("Ji7U")
var c=t("q1tI")
var u=t.n(c)
var d=t("17x9")
var f=t.n(d)
var p=t("J2CL")
var h=t("dpqJ")
var b=t("cClk")
var v=t("4Awi")
var m=t("II2N")
var g=t("jtGx")
var y=t("BTe1")
var k=t("rW8M")
var _=t("oXx0")
var G=t("NIsp")
var M=t("8Q55")
function O(e){var n=e.colors,t=e.typography,o=e.spacing
return{fontSize:t.fontSizeMedium,fontFamily:t.fontFamily,fontWeight:t.fontWeightBold,padding:"".concat(o.xSmall," ").concat(o.small),color:n.textDarkest,background:n.backgroundLightest}}O.canvas=function(e){return{color:e["ic-brand-font-color-dark"]}}
t.d(n,"a",(function(){return B}))
var I,J,S,W,j
var x={componentId:"eoNrR",template:function(e){return"\n\n.eoNrR_bGBk{display:block}\n\n.eoNrR_JelF{list-style-type:none;margin:0 0 0 0;padding:0}\n\n.eoNrR_blJt{background:".concat(e.background||"inherit",";color:").concat(e.color||"inherit",";display:block;font-family:").concat(e.fontFamily||"inherit",";font-size:").concat(e.fontSize||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";padding:").concat(e.padding||"inherit",";text-align:start}\n\n[dir=ltr] .eoNrR_blJt{text-align:left}\n\n[dir=rtl] .eoNrR_blJt{text-align:right}")},root:"eoNrR_bGBk",items:"eoNrR_JelF",label:"eoNrR_blJt"}
var B=(I=Object(_["a"])(),J=Object(p["j"])(O,x),I(S=J(S=(j=W=function(e){Object(s["a"])(n,e)
function n(e){var t
Object(r["a"])(this,n)
t=Object(i["a"])(this,Object(l["a"])(n).call(this))
t.handleSelect=function(e,n,o,r){if(t.props.disabled){e.preventDefault()
return}t.props.selected?t.updateSelected(e,n,t.props.selected,o,r):t.setState((function(a){return{selected:t.updateSelected(e,n,a.selected,o,r)}}))}
t.updateSelected=function(e,n,r,a,i){var l=t.props.allowMultiple
var s=l?Object(o["a"])(r):[]
var c=s.indexOf(n)
true===a&&c<0?s.push(n):false===a&&-1!==c?s.splice(c,1):!l&&s.length<1&&(s=Object(o["a"])(r))
"function"===typeof t.props.onSelect&&t.props.onSelect(e,s,a,i)
return s}
"undefined"===typeof e.selected&&(t.state={selected:t.selectedFromChildren(e)||e.defaultSelected})
t._labelId=Object(y["a"])("MenuItemGroup")
return t}Object(a["a"])(n,[{key:"selectedFromChildren",value:function(e){var n=e.children,t=e.allowMultiple
var o=[]
var r=c["Children"].toArray(n).filter((function(e){return Object(v["a"])(e,[G["a"]])}))
r.forEach((function(e,n){0!==o.length&&!t||!e.props.selected&&!e.props.defaultSelected||o.push(e.props.value||n)}))
return o.length>0?o:null}},{key:"renderLabel",value:function(){var e=this.props.label
return Object(k["a"])(e)?u.a.createElement("span",{className:x.label},e):e}},{key:"renderChildren",value:function(){var e=this
var n=this.props,t=n.children,o=n.disabled,r=n.controls,a=n.allowMultiple,i=n.isTabbable,l=n.onMouseOver
var s=-1
return c["Children"].map(t,(function(n){if(Object(v["a"])(n,[G["a"]])){++s
var t=n.props.value||s
return u.a.createElement("li",{role:"none"}," ",Object(m["a"])(n,{tabIndex:i&&0===s?0:-1,controls:r,value:t,type:a?"checkbox":"radio",ref:e.props.itemRef,disabled:o||n.props.disabled,selected:e.selected.indexOf(t)>-1,onSelect:e.handleSelect,onMouseOver:l})," ")}return n}))}},{key:"render",value:function(){var e=Object(g["a"])(this.props,n.propTypes)
return u.a.createElement("span",Object.assign({},e,{className:x.root,role:"presentation"}),u.a.createElement("span",{id:this._labelId},this.renderLabel()),u.a.createElement("ul",{role:"menu",className:x.items,"aria-disabled":this.props.disabled?"true":null,"aria-labelledby":this._labelId},this.renderChildren()))}},{key:"selected",get:function(){return"undefined"===typeof this.props.selected&&"undefined"===typeof this.state.selected?[]:"undefined"===typeof this.props.selected?Object(o["a"])(this.state.selected):Object(o["a"])(this.props.selected)}}])
n.displayName="MenuItemGroup"
return n}(c["Component"]),W.propTypes={label:f.a.node.isRequired,allowMultiple:f.a.bool,children:h["a"].oneOf([G["a"],M["a"]]),selected:Object(b["a"])(f.a.array,"onSelect","defaultSelected"),defaultSelected:f.a.array,onSelect:f.a.func,onMouseOver:f.a.func,onKeyDown:f.a.func,controls:f.a.string,itemRef:f.a.func,disabled:f.a.bool,isTabbable:f.a.bool},W.defaultProps={onMouseOver:void 0,disabled:false,controls:void 0,onKeyDown:void 0,selected:void 0,children:null,isTabbable:false,allowMultiple:false,defaultSelected:[],itemRef:function(e){},onSelect:function(e,n,t,o){}},j))||S)||S)},"8Q55":function(e,n,t){"use strict"
var o=t("1OyB")
var r=t("vuIU")
var a=t("md7G")
var i=t("foSv")
var l=t("Ji7U")
var s=t("q1tI")
var c=t.n(s)
var u=t("J2CL")
var d=t("oXx0")
var f=function(e){var n=e.colors,t=e.borders,o=e.spacing
return{background:n.backgroundMedium,height:t.widthSmall,margin:"0 ".concat(o.small)}}
t.d(n,"a",(function(){return m}))
var p,h,b
var v={componentId:"dpuxe",template:function(e){return"\n\n.dpuxe_bGBk{background:".concat(e.background||"inherit",";height:").concat(e.height||"inherit",";margin:").concat(e.margin||"inherit",";overflow:hidden}")},root:"dpuxe_bGBk"}
var m=(p=Object(d["a"])(),h=Object(u["j"])(f,v),p(b=h(b=function(e){Object(l["a"])(n,e)
function n(){Object(o["a"])(this,n)
return Object(a["a"])(this,Object(i["a"])(n).apply(this,arguments))}Object(r["a"])(n,[{key:"render",value:function(){return c.a.createElement("div",Object.assign({},this.props,{role:"presentation",className:v.root}))}}])
n.displayName="MenuItemSeparator"
return n}(s["Component"]))||b)||b)},NIsp:function(e,n,t){"use strict"
var o=t("rePB")
var r=t("1OyB")
var a=t("vuIU")
var i=t("md7G")
var l=t("foSv")
var s=t("JX7q")
var c=t("Ji7U")
var u=t("q1tI")
var d=t.n(u)
var f=t("17x9")
var p=t.n(f)
var h=t("TSYQ")
var b=t.n(h)
var v=t("3zPy")
var m=t.n(v)
var g=t("ZbFs")
var y=t("rf+m")
var k=t("J2CL")
var _=t("BTe1")
var G=t("cClk")
var M=t("jtGx")
var O=t("KgFQ")
var I=t("9yTY")
var J=t("QF4Q")
var S=t("/UXv")
var W=t("oXx0")
var j=t("x0Js")
function x(e){var n=e.colors,t=e.spacing,o=e.typography
return{padding:"".concat(t.xSmall," ").concat(t.small),fontFamily:o.fontFamily,fontWeight:o.fontWeightNormal,lineHeight:o.lineHeightCondensed,fontSize:o.fontSizeMedium,labelPadding:t.large,labelColor:n.textDarkest,background:n.backgroundLightest,iconColor:n.textDarkest,iconPadding:t.small,activeBackground:n.backgroundBrand,activeLabelColor:n.textLightest,activeIconColor:n.textLightest}}x.canvas=function(e){return{labelColor:e["ic-brand-font-color-dark"],iconColor:e["ic-brand-font-color-dark"],activeBackground:e["ic-brand-primary"]}}
t.d(n,"a",(function(){return z}))
var B,w,C,T,N
var F={componentId:"sJGfW",template:function(e){return"\n\n.sJGfW_bGBk{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;background:".concat(e.background||"inherit",";border:none;border-radius:0;border-radius:initial;box-sizing:border-box;cursor:pointer;display:block;font-family:").concat(e.fontFamily||"inherit",";font-size:").concat(e.fontSize||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";line-height:").concat(e.lineHeight||"inherit",";margin:0;outline:none;padding:").concat(e.padding||"inherit",";position:relative;text-align:start;transition:background 0.2s;user-select:none;width:100%}\n\n[dir=ltr] .sJGfW_bGBk{text-align:left}\n\n[dir=rtl] .sJGfW_bGBk{text-align:right}\n\n.sJGfW_bGBk.sJGfW_eyNH .sJGfW_dnnz{inset-inline-end:").concat(e.iconPadding||"inherit",";inset-inline-start:auto}\n\n[dir=ltr] .sJGfW_bGBk.sJGfW_eyNH .sJGfW_dnnz{left:auto;right:").concat(e.iconPadding||"inherit","}\n\n[dir=rtl] .sJGfW_bGBk.sJGfW_eyNH .sJGfW_dnnz{left:").concat(e.iconPadding||"inherit",";right:auto}\n\n.sJGfW_bGBk[role=menuitemcheckbox],.sJGfW_bGBk[role=menuitemradio]{-webkit-padding-start:").concat(e.labelPadding||"inherit",";padding-inline-start:").concat(e.labelPadding||"inherit","}\n\n[dir=ltr] .sJGfW_bGBk[role=menuitemcheckbox],[dir=ltr] .sJGfW_bGBk[role=menuitemradio]{padding-left:").concat(e.labelPadding||"inherit","}\n\n[dir=rtl] .sJGfW_bGBk[role=menuitemcheckbox],[dir=rtl] .sJGfW_bGBk[role=menuitemradio]{padding-right:").concat(e.labelPadding||"inherit","}\n\n.sJGfW_bGBk[role=menuitemcheckbox] .sJGfW_dnnz,.sJGfW_bGBk[role=menuitemradio] .sJGfW_dnnz{inset-inline-end:auto;inset-inline-start:").concat(e.iconPadding||"inherit","}\n\n[dir=ltr] .sJGfW_bGBk[role=menuitemcheckbox] .sJGfW_dnnz,[dir=ltr] .sJGfW_bGBk[role=menuitemradio] .sJGfW_dnnz{left:").concat(e.iconPadding||"inherit",";right:auto}\n\n[dir=rtl] .sJGfW_bGBk[role=menuitemcheckbox] .sJGfW_dnnz,[dir=rtl] .sJGfW_bGBk[role=menuitemradio] .sJGfW_dnnz{left:auto;right:").concat(e.iconPadding||"inherit","}\n\n.sJGfW_bGBk.sJGfW_cSen,.sJGfW_bGBk:active,.sJGfW_bGBk:focus,.sJGfW_bGBk:hover,.sJGfW_bGBk[aria-expanded=true]{background:").concat(e.activeBackground||"inherit","}\n\n.sJGfW_bGBk.sJGfW_cSen .sJGfW_blJt,.sJGfW_bGBk:active .sJGfW_blJt,.sJGfW_bGBk:focus .sJGfW_blJt,.sJGfW_bGBk:hover .sJGfW_blJt,.sJGfW_bGBk[aria-expanded=true] .sJGfW_blJt{color:").concat(e.activeLabelColor||"inherit","}\n\n.sJGfW_bGBk.sJGfW_cSen .sJGfW_dnnz,.sJGfW_bGBk:active .sJGfW_dnnz,.sJGfW_bGBk:focus .sJGfW_dnnz,.sJGfW_bGBk:hover .sJGfW_dnnz,.sJGfW_bGBk[aria-expanded=true] .sJGfW_dnnz{color:").concat(e.activeIconColor||"inherit","}\n\n.sJGfW_bGBk::-moz-focus-inner{border:0;margin:0;padding:0}\n\n.sJGfW_bGBk[aria-disabled]{cursor:not-allowed;opacity:0.5;pointer-events:none}\n\n.sJGfW_blJt{color:").concat(e.labelColor||"inherit","}\n\n.sJGfW_dnnz{align-items:center;color:").concat(e.iconColor||"inherit",";display:flex;height:100%;position:absolute;top:0;width:1em}\n\na.sJGfW_bGBk,a.sJGfW_bGBk:active,a.sJGfW_bGBk:focus,a.sJGfW_bGBk:hover,a.sJGfW_bGBk:link,a.sJGfW_bGBk:visited{text-decoration:none}")},root:"sJGfW_bGBk",flyout:"sJGfW_eyNH",icon:"sJGfW_dnnz",active:"sJGfW_cSen",label:"sJGfW_blJt"}
var D=d.a.createElement(g["a"],null)
var K=d.a.createElement(y["a"],null)
var z=(B=Object(W["a"])(),w=Object(k["j"])(x,F),B(C=w(C=(N=T=function(e){Object(c["a"])(n,e)
function n(e){var t
Object(r["a"])(this,n)
t=Object(i["a"])(this,Object(l["a"])(n).call(this))
t.handleClick=function(e){var n=t.props,o=n.onSelect,r=n.onClick,a=n.disabled,i=n.value
var l=!t.selected
if(a){e.preventDefault()
return}"undefined"===typeof t.props.selected&&t.setState({selected:l})
if("function"===typeof o){e.persist()
o(e,i,l,Object(s["a"])(t))}"function"===typeof r&&r(e)}
t.handleKeyDown=function(e){var n=e.keyCode===m.a.codes.space
var o=e.keyCode===m.a.codes.enter
if(n||o){e.preventDefault()
e.stopPropagation()
o&&Object(J["a"])(t._node).click()}}
t.handleKeyUp=function(e){var n=e.keyCode===m.a.codes.space
var o=e.keyCode===m.a.codes.enter
if(n||o){e.preventDefault()
e.stopPropagation()
n&&Object(J["a"])(t._node).click()}}
t.handleMouseOver=function(e){t.focus()
"function"===typeof t.props.onMouseOver&&t.props.onMouseOver(e,Object(s["a"])(t))}
"undefined"===typeof e.selected&&(t.state={selected:e.defaultSelected})
t.labelId=Object(_["a"])("MenuItem__label")
return t}Object(a["a"])(n,[{key:"componentDidMount",value:function(){var e=j["a"].getMenuContext(this.context)
e&&e.registerMenuItem&&e.registerMenuItem(this)}},{key:"componentWillUnmount",value:function(){var e=j["a"].getMenuContext(this.context)
e&&e.registerMenuItem&&e.removeMenuItem(this)}},{key:"focus",value:function(){Object(J["a"])(this._node).focus()}},{key:"renderContent",value:function(){var e=this.props,n=e.children,t=e.type
return d.a.createElement("span",null,("checkbox"===t||"radio"===t)&&d.a.createElement("span",{className:F.icon},this.selected&&D),d.a.createElement("span",{className:F.label,id:this.labelId},n),"flyout"===t&&d.a.createElement("span",{className:F.icon},K))}},{key:"render",value:function(){var e,t=this
var r=this.props,a=r.disabled,i=r.controls,l=r.onKeyDown,s=r.onKeyUp,c=r.type,u=r.href
var f=Object(M["a"])(this.props,n.propTypes)
var p=this.elementType
var h=(e={},Object(o["a"])(e,F.root,true),Object(o["a"])(e,F.flyout,"flyout"===c),e)
return d.a.createElement(p,Object.assign({tabIndex:"-1"},f,{href:u,role:this.role,"aria-labelledby":this.labelId,"aria-disabled":a?"true":null,"aria-controls":i,"aria-checked":"checkbox"===c||"radio"===c?this.selected?"true":"false":null,onClick:this.handleClick,onKeyUp:Object(I["a"])(s,this.handleKeyUp),onKeyDown:Object(I["a"])(l,this.handleKeyDown),ref:function(e){t._node=e},className:b()(h),onMouseOver:this.handleMouseOver}),this.renderContent())}},{key:"elementType",get:function(){return Object(O["a"])(n,this.props)}},{key:"role",get:function(){switch(this.props.type){case"checkbox":return"menuitemcheckbox"
case"radio":return"menuitemradio"
case"flyout":return"button"
default:return"menuitem"}}},{key:"selected",get:function(){return"undefined"===typeof this.props.selected?this.state.selected:this.props.selected}},{key:"focused",get:function(){return Object(S["a"])(this._node)}}])
n.displayName="MenuItem"
return n}(u["Component"]),T.propTypes={children:p.a.node.isRequired,defaultSelected:p.a.bool,selected:Object(G["a"])(p.a.bool,"onSelect","defaultSelected"),onSelect:p.a.func,onClick:p.a.func,onKeyDown:p.a.func,onKeyUp:p.a.func,onMouseOver:p.a.func,controls:p.a.string,disabled:p.a.bool,as:p.a.elementType,type:p.a.oneOf(["button","checkbox","radio","flyout"]),value:p.a.oneOfType([p.a.string,p.a.number]),href:p.a.string},T.defaultProps={type:"button",disabled:false,onSelect:function(e,n,t,o){},defaultSelected:void 0,selected:void 0,onClick:void 0,onKeyDown:void 0,onKeyUp:void 0,onMouseOver:void 0,controls:void 0,value:void 0,href:void 0},T.contextTypes=j["a"].types,N))||C)||C)},sUqa:function(e,n,t){"use strict"
var o=t("1OyB")
var r=t("vuIU")
var a=t("md7G")
var i=t("foSv")
var l=t("JX7q")
var s=t("Ji7U")
t("DEX3")
var c=t("q1tI")
var u=t.n(c)
var d=t("17x9")
var f=t.n(d)
var p=t("3zPy")
var h=t.n(p)
var b=t("jsCG")
var v=t("BTe1")
var m=t("dpqJ")
var g=t("cClk")
var y=t("UCAh")
var k=t("4Awi")
var _=t("II2N")
var G=t("J2CL")
var M=t("K7t/")
var O=t("oXx0")
var I=t("x0Js")
var J=t("NIsp")
var S=t("5vOu")
var W=t("8Q55")
var j=function(e){var n=e.breakpoints,t=e.colors,o=e.borders
return{minWidth:n.xxSmall,maxWidth:n.xSmall,background:t.backgroundLightest,focusBorderStyle:o.style,focusBorderWidth:o.widthMedium,focusBorderColor:t.borderBrand,focusBorderRadius:o.radiusMedium}}
t.d(n,"a",(function(){return F}))
var x,B,w,C,T
var N={componentId:"cAqHo",template:function(e){return"\n\n.cAqHo_eAjd{background:".concat(e.background||"inherit",";display:block;list-style-type:none;margin:0;max-width:").concat(e.maxWidth||"inherit",";min-width:").concat(e.minWidth||"inherit",";padding:0.25rem 0;position:relative}\n\n.cAqHo_eAjd:before{border:").concat(e.focusBorderWidth||"inherit"," ").concat(e.focusBorderStyle||"inherit"," ").concat(e.focusBorderColor||"inherit",";border-radius:").concat(e.focusBorderRadius||"inherit",';bottom:-0.25rem;content:"";left:-0.25rem;opacity:0;pointer-events:none;position:absolute;right:-0.25rem;top:-0.25rem;transform:scale(0.9)}\n\n.cAqHo_eAjd:focus{outline:none}\n\n.cAqHo_eAjd:focus:before{opacity:1;transform:scale(1)}')},menu:"cAqHo_eAjd"}
var F=(x=Object(O["a"])(),B=Object(G["j"])(j,N),x(w=B(w=(T=C=function(e){Object(s["a"])(n,e)
function n(e){var t
Object(o["a"])(this,n)
t=Object(a["a"])(this,Object(i["a"])(n).call(this,e))
t.state={hasFocus:false}
t._rootNode=null
t._menuItems=[]
t._popover=null
t._trigger=null
t._menu=null
t._labelId=Object(v["a"])("Menu__label")
t._activeSubMenu=null
t.getMenuItemIndex=function(e){return t._menuItems.findIndex((function(n){return n===e}))}
t.handleTriggerKeyDown=function(e){if("flyout"===t.props.type&&e.keyCode===h.a.codes.right){e.persist()
t.show()}}
t.handleTriggerMouseOver=function(){"flyout"===t.props.type&&t.show()}
t.handleToggle=function(e){"function"===typeof t.props.onToggle&&t.props.onToggle(e,Object(l["a"])(t))}
t.handleMenuKeyDown=function(e){var n=e&&e.keyCode
var o=h.a.codes,r=o.down,a=o.up,i=o.pgup,l=o.pgdn,s=o.tab,c=o.left
if(n===r||n===l){e.preventDefault()
e.stopPropagation()
t.moveFocus(1)
t.hideActiveSubMenu(e)}else if(n===a||n===i){e.preventDefault()
e.stopPropagation()
t.moveFocus(-1)
t.hideActiveSubMenu(e)}else if(n===s||n===c){e.persist()
t.hide(e)}"function"===typeof t.props.onKeyDown&&t.props.onKeyDown(e)}
t.handleMenuItemSelect=function(e,n,o,r){t.props.shouldHideOnSelect&&t.hide(e)
"function"===typeof t.props.onSelect&&t.props.onSelect(e,n,o,r)}
t.handleMenuItemFocus=function(){t.setState({hasFocus:true})}
t.handleMenuItemBlur=function(){t.setState({hasFocus:t.focusedIndex>=0})}
t.handleMenuItemMouseOver=function(e,n){t._activeSubMenu&&n!==t._activeSubMenu._trigger&&t.hideActiveSubMenu(e)}
t.hideActiveSubMenu=function(e){if(t._activeSubMenu){t._activeSubMenu.hide(e)
t._activeSubMenu=null}}
t.handleSubMenuToggle=function(e,n){e&&(t._activeSubMenu=n)}
t.handleSubMenuDismiss=function(e,n){(e&&e.keyCode===h.a.codes.tab||n)&&t.hide(e)}
t.hide=function(e){t._popover&&t._popover.hide(e)}
t.show=function(e){t._popover&&t._popover.show(e)}
t._id=t.props.id||Object(v["a"])("Menu")
return t}Object(r["a"])(n,[{key:"getChildContext",value:function(){var e=this
var n=I["a"].getMenuContext(this.context)
return I["a"].makeMenuContext({registerMenuItem:function(t){var o=t.props.type
n&&n.registerMenuItem&&"flyout"===o?n.registerMenuItem(t):e.getMenuItemIndex(t)<0&&e._menuItems.push(t)},removeMenuItem:function(t){var o=t.props.type
if(n&&n.removeMenuItem&&"flyout"===o)n.removeMenuItem(t)
else{var r=e.getMenuItemIndex(t)
r>=0&&e._menuItems.splice(r,1)}}})}},{key:"focus",value:function(){if(this.shown){this._menu&&this._menu.focus
this._menu.focus()}else{this._trigger&&this._trigger.focus
this._trigger.focus()}}},{key:"focused",value:function(){return this.shown?Object(M["a"])(this._menu)||this.state.hasFocus:Object(M["a"])(this._trigger)}},{key:"moveFocus",value:function(e){var n=this.menuItems?this.menuItems.length:0
if(n<=0)return
var t=this.focusedIndex<0&&e<0?0:this.focusedIndex
var o=this.menuItems[(t+n+e)%n]
o&&o.focus
o.focus()}},{key:"renderChildren",value:function(){var e=this
var n=this.props,t=n.children,o=n.disabled
var r=0
return c["Children"].map(t,(function(n){if(!Object(k["a"])(n,["MenuItemSeparator","MenuItem","MenuItemGroup","Menu"]))return
r+=1
var t=!e.state.hasFocus&&1===r
if(Object(k["a"])(n,["MenuItemSeparator"]))return u.a.createElement("li",{role:"none"},n)
var a=n.props["aria-controls"]||n.props.controls||e.props["aria-controls"]||e.props.controls
if(Object(k["a"])(n,["MenuItem"]))return u.a.createElement("li",{role:"none"},Object(_["a"])(n,{controls:a,disabled:o||n.props.disabled,onFocus:e.handleMenuItemFocus,onBlur:e.handleMenuItemBlur,onSelect:e.handleMenuItemSelect,onMouseOver:e.handleMenuItemMouseOver,tabIndex:t?0:-1}))
if(Object(k["a"])(n,["MenuItemGroup"]))return u.a.createElement("li",{role:"none"},Object(_["a"])(n,{controls:a,disabled:o||n.props.disabled,onFocus:e.handleMenuItemFocus,onBlur:e.handleMenuItemBlur,onSelect:e.handleMenuItemSelect,onMouseOver:e.handleMenuItemMouseOver,isTabbable:t}))
if(Object(k["a"])(n,["Menu"])){var i=o||n.props.disabled
return u.a.createElement("li",{role:"none"},Object(_["a"])(n,{type:"flyout",controls:a,disabled:i,onSelect:e.handleMenuItemSelect,placement:"end top",offsetX:-5,offsetY:5,withArrow:false,onToggle:e.handleSubMenuToggle,onDismiss:e.handleSubMenuDismiss,trigger:u.a.createElement(J["a"],{onMouseOver:e.handleMenuItemMouseOver,onFocus:e.handleMenuItemFocus,onBlur:e.handleMenuItemBlur,tabIndex:t?0:-1,type:"flyout",disabled:i},n.props.title||n.props.label)}))}}))}},{key:"renderMenu",value:function(){var e=this
var n=this.props,t=n.menuRef,o=n.disabled,r=n.label,a=n.trigger,i=n.onKeyUp,l=n.contentRef
var s=this.props["aria-labelledby"]
var c=this.props["aria-controls"]
return u.a.createElement("ul",{role:"menu","aria-label":r,tabIndex:"0",className:N.menu,"aria-labelledby":s||a&&this._labelId,"aria-controls":c,"aria-disabled":o?"true":null,onKeyDown:this.handleMenuKeyDown,onKeyUp:i,ref:function(n){e._menu=n
"function"===typeof t&&t(n)
"function"===typeof l&&l(n)}},this.renderChildren())}},{key:"render",value:function(){var e=this
var n=this.props,t=n.show,o=n.defaultShow,r=n.placement,a=n.withArrow,i=n.trigger,l=n.mountNode,s=n.popoverRef,c=n.disabled,d=n.onDismiss,f=n.onFocus,p=n.onMouseOver
return i?u.a.createElement(b["a"],{isShowingContent:t,defaultIsShowingContent:o,onHideContent:function(n,t){var o=t.documentClick
d(n,o)
e.handleToggle(false)},onShowContent:function(){return e.handleToggle(true)},mountNode:l,placement:r,withArrow:a,id:this._id,on:["click"],shouldContainFocus:true,shouldReturnFocus:true,onFocus:f,onMouseOver:p,ref:function(n){e._popover=n
"function"===typeof s&&s(n)},renderTrigger:Object(_["a"])(i,{ref:function(n){e._trigger=n},"aria-haspopup":true,id:this._labelId,onMouseOver:this.handleTriggerMouseOver,onKeyDown:this.handleTriggerKeyDown,disabled:i.props.disabled||c})},this.renderMenu()):this.renderMenu()}},{key:"menuItems",get:function(){return this._menuItems}},{key:"focusedIndex",get:function(){return this.menuItems.findIndex((function(e){return e&&true===e.focused}))}},{key:"shown",get:function(){return!this._popover||this._popover.shown}}])
n.displayName="Menu"
return n}(c["Component"]),C.propTypes={children:m["a"].oneOf(["MenuItem","MenuItemGroup","MenuItemSeparator","Menu"]),label:f.a.string,disabled:f.a.bool,trigger:f.a.node,placement:y["a"].placement,defaultShow:f.a.bool,show:Object(g["a"])(f.a.bool,"onToggle","defaultShow"),onToggle:f.a.func,onSelect:f.a.func,onDismiss:f.a.func,onBlur:f.a.func,onFocus:f.a.func,onMouseOver:f.a.func,onKeyDown:f.a.func,onKeyUp:f.a.func,menuRef:f.a.func,popoverRef:f.a.func,mountNode:y["a"].mountNode,constrain:y["a"].constrain,liveRegion:f.a.oneOfType([f.a.arrayOf(f.a.element),f.a.element,f.a.func]),shouldHideOnSelect:f.a.bool,shouldFocusTriggerOnClose:f.a.bool,type:f.a.oneOf(["flyout"]),id:f.a.string,withArrow:f.a.bool},C.defaultProps={children:null,label:null,disabled:false,trigger:null,placement:"bottom center",defaultShow:false,onToggle:function(e,n){},onSelect:function(e,n,t,o){},onDismiss:function(e,n){},onBlur:function(e){},onFocus:function(e){},onMouseOver:function(e){},onKeyDown:function(e){},onKeyUp:function(e){},menuRef:function(e){},popoverRef:function(e){},mountNode:null,constrain:"window",liveRegion:null,shouldHideOnSelect:true,shouldFocusTriggerOnClose:true,show:void 0,id:void 0,type:void 0,withArrow:true},C.Item=J["a"],C.Group=S["a"],C.Separator=W["a"],C.childContextTypes=I["a"].types,C.contextTypes=I["a"].types,T))||w)||w)},x0Js:function(e,n,t){"use strict"
t.d(n,"a",(function(){return l}))
var o=t("rePB")
var r=t("17x9")
var a=t.n(r)
var i="@@menu"
var l={types:Object(o["a"])({},i,a.a.shape({registerMenuItem:a.a.func,removeMenuItem:a.a.func})),makeMenuContext:function(e){var n=e.registerMenuItem,t=e.removeMenuItem
return Object(o["a"])({},i,{registerMenuItem:n,removeMenuItem:t})},getMenuContext:function(e){if(e)return e[i]}}}}])

//# sourceMappingURL=13-c-781c7b63f2.js.map