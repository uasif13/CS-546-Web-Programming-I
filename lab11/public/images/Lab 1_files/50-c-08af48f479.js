(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[50],{"13m+":function(e,t,o){"use strict"
var c=o("17x9")
var l=o.n(c)
var a=o("v0Tn")
const i=l.a.shape,n=l.a.string,_=l.a.arrayOf,r=l.a.oneOf,s=l.a.bool,u=l.a.instanceOf
const k={}
k.migrationState=r(a["a"].statesList)
k.term=i({id:n.isRequired,name:n.isRequired})
k.termList=_(k.term)
k.account=i({id:n.isRequired,name:n.isRequired})
k.accountList=_(k.account)
k.course=i({id:n.isRequired,name:n.isRequired,course_code:n.isRequired,term:k.term.isRequired,teachers:_(i({display_name:n.isRequired})),teacher_count:n,sis_course_id:n})
k.courseList=_(k.course)
k.courseInfo=i({id:n.isRequired,name:n.isRequired,enrollment_term_id:n.isRequired,sis_course_id:n})
k.lockableAttribute=r(["points","content","due_dates","availability_dates","settings","deleted"])
k.lockableAttributeList=_(k.lockableAttribute)
k.migrationException=i({course_id:n.isRequired,conflicting_changes:k.lockableAttributeList})
k.migrationExceptionList=_(k.migrationException)
k.migrationChange=i({asset_id:n.isRequired,asset_type:r(["assignment","quiz","discussion_topic","wiki_page","attachment","context_module","learning_outcome","learning_outcome_group","announcement","rubric","syllabus"]).isRequired,asset_name:n.isRequired,change_type:r(["created","updated","deleted"]).isRequired,htnl_url:n,exceptions:k.migrationExceptionList})
k.migrationChangeList=_(k.migrationChange)
k.migration=i({id:n.isRequired,workflow_state:k.migrationState.isRequired,comment:n,created_at:n.isRequired,exports_started_at:n,imports_queued_at:n,imports_completed_at:n,changes:k.migrationChangeList})
k.migrationList=_(k.migration)
k.unsyncedChange=i({asset_id:n.isRequired,asset_type:n.isRequired,asset_name:n.isRequired,change_type:n.isRequired,html_url:n.isRequired,locked:s.isRequired})
k.unsyncedChanges=_(k.unsyncedChange)
k.notification=i({id:n.isRequired,message:n.isRequired,err:u(Error)})
k.notificationList=_(k.notification)
k.itemLocks=i({content:s,points:s,due_dates:s,availability_dates:s})
k.itemLocksByObject=i({assignment:k.itemLocks,discussion_topic:k.itemLocks,wiki_page:k.itemLocks,quiz:k.itemLocks,attachment:k.itemLocks})},OAMf:function(e,t,o){"use strict"
var c=o("pQTu")
var l=o("m0r6")
Object(l["a"])(JSON.parse('{"ar":{"no_attributes_locked_611c5cc":"???? ?????? ?????????? ???? ????????"},"ca":{"no_attributes_locked_611c5cc":"cap atribut bloquejat"},"cy":{"no_attributes_locked_611c5cc":"dim priodoleddau wedi???u cloi"},"da":{"no_attributes_locked_611c5cc":"ingen attributter l??st"},"da-x-k12":{"no_attributes_locked_611c5cc":"ingen attributter l??st"},"de":{"no_attributes_locked_611c5cc":"Keine Attribute gesperrt"},"en-AU":{"no_attributes_locked_611c5cc":"no attributes locked"},"en-AU-x-unimelb":{"no_attributes_locked_611c5cc":"no attributes locked"},"en-CA":{"no_attributes_locked_611c5cc":"no attributes locked"},"en-GB":{"no_attributes_locked_611c5cc":"no attributes locked"},"en-GB-x-lbs":{"no_attributes_locked_611c5cc":"no attributes locked"},"en-GB-x-ukhe":{"no_attributes_locked_611c5cc":"no attributes locked"},"es":{"no_attributes_locked_611c5cc":"no se han bloqueado atributos"},"fa":{"no_attributes_locked_611c5cc":"?????? ?????????? ?????? ????????"},"fi":{"no_attributes_locked_611c5cc":"ei lukittuja m????ritteit??"},"fr":{"no_attributes_locked_611c5cc":"aucun attribut verrouill??"},"fr-CA":{"no_attributes_locked_611c5cc":"aucun attribut verrouill??"},"ht":{"no_attributes_locked_611c5cc":"Pa gen okenn atribi ki bloke"},"is":{"no_attributes_locked_611c5cc":"engir l??stir eiginleikar"},"it":{"no_attributes_locked_611c5cc":"nessun attributo bloccato"},"ja":{"no_attributes_locked_611c5cc":"???????????????????????????????????????"},"mi":{"no_attributes_locked_611c5cc":"K??ore ng?? huanga i te raka"},"nb":{"no_attributes_locked_611c5cc":"ingen l??ste attributter"},"nb-x-k12":{"no_attributes_locked_611c5cc":"ingen l??ste attributter"},"nl":{"no_attributes_locked_611c5cc":"geen vergrendelde eigenschappen"},"nn":{"no_attributes_locked_611c5cc":"ingen attributt er l??ste"},"pl":{"no_attributes_locked_611c5cc":"brak zablokowanych atrybut??w"},"pt":{"no_attributes_locked_611c5cc":"Sem atributos bloqueados"},"pt-BR":{"no_attributes_locked_611c5cc":"nenhum atributo bloqueado"},"ru":{"no_attributes_locked_611c5cc":"?????? ?????????????????????????????? ??????????????????"},"sl":{"no_attributes_locked_611c5cc":"ni zaklenjenih atributov"},"sv":{"no_attributes_locked_611c5cc":"inga attribut l??sta"},"sv-x-k12":{"no_attributes_locked_611c5cc":"inga attribut l??sta"},"uk":{"no_attributes_locked_611c5cc":"?????????? ???????????????????????? ??????????????????"},"zh-Hans":{"no_attributes_locked_611c5cc":"?????????????????????"},"zh-Hant":{"no_attributes_locked_611c5cc":"??????????????????"}}'))
o("jQeR")
o("0sPK")
var a=c["default"].scoped("blueprint_LockItemFormat")
var i=o("3sT6")
o.d(t,"a",(function(){return _}))
function n(e){const t=e.map(e=>i["e"][e])
switch(t.length){case 0:return a.t("no attributes locked")
case 1:return t[0]
default:return"".concat(t.slice(0,-1).join(", ")," & ").concat(t.slice(-1)[0])}}function _(e){const t=Object.keys(e).filter(t=>e[t])
return n(t)}},kC3k:function(e,t,o){"use strict"
o.d(t,"a",(function(){return k}))
var c=o("VTBJ")
var l=o("1OyB")
var a=o("vuIU")
var i=o("Ji7U")
var n=o("LK+K")
var _=o("q1tI")
var r=o.n(_)
var s=o("hPGw")
var u=r.a.createElement("path",{d:"M790.5886,1750.588 L790.5886,1807.059 L847.0586,1807.059 L847.0586,1920 L677.6466,1920 L677.6466,1750.588 L790.5886,1750.588 Z M1208.383,1807.059 L1208.383,1920 L1027.721,1920 L1027.721,1807.059 L1208.383,1807.059 Z M1569.816,1807.059 L1569.816,1920 L1389.154,1920 L1389.154,1807.059 L1569.816,1807.059 Z M1920,1750.588 L1920,1920 L1750.588,1920 L1750.588,1807.059 L1807.059,1807.059 L1807.059,1750.588 L1920,1750.588 Z M1581.1771,338.8238 L1581.1771,564.7058 L1468.2351,564.7058 L1468.2351,451.7648 L451.7651,451.7648 L451.7651,1468.2358 L564.7061,1468.2358 L564.7061,1581.1768 L338.8241,1581.1768 L338.8241,338.8238 L1581.1771,338.8238 Z M1920,1389.265 L1920,1569.927 L1807.059,1569.927 L1807.059,1389.265 L1920,1389.265 Z M790.588,1389.154 L790.588,1569.816 L677.647,1569.816 L677.647,1389.154 L790.588,1389.154 Z M1242.353,0.0004 L1242.353,225.8824 L1129.412,225.8824 L1129.412,112.9414 L112.941,112.9414 L112.941,1129.4124 L225.882,1129.4124 L225.882,1242.3524 L5.68434189e-14,1242.3524 L5.68434189e-14,0.0004 L1242.353,0.0004 Z M1920,1027.831 L1920,1208.492 L1807.059,1208.492 L1807.059,1027.831 L1920,1027.831 Z M790.588,1027.721 L790.588,1208.383 L677.647,1208.383 L677.647,1027.721 L790.588,1027.721 Z M1920,677.6466 L1920,847.0586 L1807.059,847.0586 L1807.059,790.5886 L1750.588,790.5886 L1750.588,677.6466 L1920,677.6466 Z M847.0584,677.6466 L847.0584,790.5886 L790.5884,790.5886 L790.5884,847.0586 L677.6474,847.0586 L677.6474,677.6466 L847.0584,677.6466 Z M1208.492,677.647 L1208.492,790.588 L1027.831,790.588 L1027.831,677.647 L1208.492,677.647 Z M1569.927,677.647 L1569.927,790.588 L1389.265,790.588 L1389.265,677.647 L1569.927,677.647 Z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var k=function(e){Object(i["a"])(o,e)
var t=Object(n["a"])(o)
function o(){Object(l["a"])(this,o)
return t.apply(this,arguments)}Object(a["a"])(o,[{key:"render",value:function(){return r.a.createElement(s["a"],Object.assign({},this.props,{name:"IconBlueprint",viewBox:"0 0 1920 1920"}),u)}}])
o.displayName="IconBlueprintSolid"
return o}(_["Component"])
k.glyphName="blueprint"
k.variant="Solid"
k.propTypes=Object(c["a"])({},s["a"].propTypes)},lubD:function(e,t,o){"use strict"
var c=o("x1Tw")
var l=o("pREb")
var a=o("v0Tn")
const i={_depaginate(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Infinity
let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[]
return c["a"].get(e).then(e=>{const c=o.concat(e.data)
const a=t-1
if(e.headers.link&&a>0){const t=Object(l["a"])(e)
if(t.next)return this._depaginate(t.next,a,c)}e.data=c
return e})},_queryString:e=>e.map(e=>{const t=Object.keys(e)[0]
const o=e[t]
return o?"".concat(t,"=").concat(o):null}).filter(e=>!!e).join("&"),getCourses(e){let t=e.accountId
let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=o.search,l=void 0===c?"":c,a=o.term,i=void 0===a?"":a,n=o.subAccount,_=void 0===n?"":n
const r=this._queryString([{per_page:"100"},{blueprint:"false"},{blueprint_associated:"false"},{"include[]":"term"},{"include[]":"teachers"},{teacher_limit:"5"},{search_term:l},{enrollment_term_id:i}])
return this._depaginate("/api/v1/accounts/".concat(_||t,"/courses?").concat(r),1)},getAssociations(e){let t=e.masterCourse
const o=this._queryString([{per_page:"100"},{teacher_limit:"5"}])
return this._depaginate("/api/v1/courses/".concat(t.id,"/blueprint_templates/default/associated_courses?").concat(o))},saveAssociations(e){let t=e.masterCourse,o=e.addedAssociations,l=e.removedAssociations
return c["a"].put("/api/v1/courses/".concat(t.id,"/blueprint_templates/default/update_associations"),{course_ids_to_add:o.map(e=>e.id),course_ids_to_remove:l.map(e=>e.id)})},getMigrations(e){let t=e.masterCourse
return c["a"].get("/api/v1/courses/".concat(t.id,"/blueprint_templates/default/migrations"))},beginMigration(e){let t=e.masterCourse,o=e.willSendNotification,l=e.willIncludeCustomNotificationMessage,a=e.notificationMessage,i=e.willIncludeCourseSettings,n=e.willPublishCourses
const _={send_notification:o}
i&&(_.copy_settings=true)
l&&a&&(_.comment=a)
n&&(_.publish_after_initial_sync=true)
return c["a"].post("/api/v1/courses/".concat(t.id,"/blueprint_templates/default/migrations"),_)},checkMigration(e){return this.getMigrations(e).then(e=>{let t=a["a"].void
e.data[0]&&(t=e.data[0].workflow_state)
e.data=t
return e})},getMigration(e,t){let o=e.course
let l=t.blueprintType,a=void 0===l?"blueprint_templates":l,i=t.templateId,n=void 0===i?"default":i,_=t.changeId
return c["a"].get("/api/v1/courses/".concat(o.id,"/").concat(a,"/").concat(n,"/migrations/").concat(_))},getMigrationDetails(e,t){let o=e.course
let l=t.blueprintType,a=void 0===l?"blueprint_templates":l,i=t.templateId,n=void 0===i?"default":i,_=t.changeId
return c["a"].get("/api/v1/courses/".concat(o.id,"/").concat(a,"/").concat(n,"/migrations/").concat(_,"/details"))},getFullMigration(e,t){let o=e.course
return this.getMigration({course:o},t).then(e=>{let c=e.data
return this.getMigrationDetails({course:o},t).then(e=>Object.assign(c,{changeId:t.changeId,changes:e.data}))})},getSyncHistory(e){let t=e.masterCourse
return this.getMigrations({masterCourse:t}).then(e=>{let o=e.data
return Promise.all(o.slice(0,5).map(e=>this.getMigrationDetails({course:t},{changeId:e.id}).then(t=>Object.assign(e,{changes:t.data}))))})},toggleLocked(e){let t=e.courseId,o=e.itemType,l=e.itemId,a=e.isLocked
return c["a"].put("/api/v1/courses/".concat(t,"/blueprint_templates/default/restrict_item"),{content_type:o,content_id:l,restricted:a})},loadUnsyncedChanges(e){let t=e.masterCourse
return c["a"].get("/api/v1/courses/".concat(t.id,"/blueprint_templates/default/unsynced_changes"))}}
t["a"]=i},pREb:function(e,t,o){"use strict"
const c=/<(http.*?)>; rel="([a-z]*)"/g
const l=e=>{const t={}
const o=e.headers?e.headers.link:null
if(!o)return t
let l=c.exec(o)
while(l){t[l[2]]=l[1]
l=c.exec(o)}return t}
t["a"]=l},v0Tn:function(e,t,o){"use strict"
const c=["queued","exporting","imports_queued"]
const l=["completed","exports_failed","imports_failed"]
const a=["void","unknown",...c,...l]
const i={statesList:a,states:a.reduce((e,t)=>Object.assign(e,{[t]:t}),{})}
i.isEndState=e=>l.includes(e)
i.isLoadingState=e=>c.includes(e)
i.getLoadingValue=e=>c.indexOf(e)+1
i.isSuccessful=e=>"completed"===e
i.maxLoadingValue=c.length+1
t["a"]=i},y8OA:function(e,t,o){"use strict"
o.r(t)
var c=o("An8g")
var l=o("VTBJ")
var a=o("pQTu")
var i=o("m0r6")
Object(i["a"])(JSON.parse('{"ar":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"???????? ?????????? ?????????? ?????????? ?????? ??????????????."},"ca":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"S\'ha produ??t un problema en commutar el bloqueig del contingut."},"cy":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"Problem wrth doglo???r clo cynnwys."},"da":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"Der opstod et problem, da indholdsl??sen blev sl??et til eller fra."},"da-x-k12":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"Der opstod et problem, da indholdsl??sen blev sl??et til eller fra."},"de":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"Es gab ein Problem beim Umschalten der Content-Sperre."},"en-AU":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"There was a problem toggling the content lock."},"en-AU-x-unimelb":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"There was a problem toggling the content lock."},"en-CA":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"There was a problem toggling the content lock."},"en-GB":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"There was a problem toggling the content lock."},"en-GB-x-lbs":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"There was a problem toggling the content lock."},"en-GB-x-ukhe":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"There was a problem toggling the content lock."},"es":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"Hubo un problema al cambiar el bloqueo de contenido."},"fa":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"???? ?????????? ?????????? ?????????? ?????? ???????????? ?????????? ???? ??????."},"fi":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"Sis??ll??n lukon kanssa ilmeni ongelma."},"fr":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"L\'activation/d??sactivation du verrou sur le contenu a rencontr?? un probl??me."},"fr-CA":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"Un probl??me est survenu lors du basculement du verrouillage de contenu."},"ht":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"Te gen yon pwobl??m pou regle blokaj kontni an."},"is":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"Vandam??l kom upp vi?? a?? v??xla efnisl??s."},"it":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"Si ?? verificato un problema durante l\'abilitazione/disabilitazione del blocco dei contenuti."},"ja":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"?????????????????????????????????????????????????????????????????????????????????"},"mi":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"He raruraru i te w?? e takahuri ana i te raka ihirangi"},"nb":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"Det oppstod et problem med veksling av innholdsl??sen."},"nb-x-k12":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"Det oppstod et problem med veksling av innholdsl??sen."},"nl":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"Er is een probleem met het in- en uitschakelen van de inhoudsvergrendeling."},"nn":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"Kunne ikkje sl?? av/p?? innhaldsl??s"},"pl":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"Wyst??pi?? problem podczas prze????czania blokowania tre??ci."},"pt":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"Houve um problema ao alternar o bloqueio de conte??do."},"pt-BR":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"Houve um problema ao alternar o bloqueio de conte??do."},"ru":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"?????? ????????????????????/?????????????????????????? ?????????????????????? ???????????????? ????????????????."},"sl":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"Pri??lo je do te??ave pri preklopu zaklepanja vsebine."},"sv":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"Det uppstod ett problem med att v??xla inneh??llsl??set."},"sv-x-k12":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"Det uppstod ett problem med att v??xla inneh??llsl??set."},"uk":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"?????????????? ???????????????? ?? ???????????????????????? ???????????????????? ?????????? ????????????????"},"zh-Hans":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"????????????????????????????????????"},"zh-Hant":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"????????????????????????????????????"}}'))
o("jQeR")
o("0sPK")
var n=a["default"].scoped("blueprint_coursesLockManageer")
var _=o("ouhR")
var r=o.n(_)
var s=o("q1tI")
var u=o("i8i4")
var k=o.n(u)
o("p6Wi")
var d=o("mwIZ")
var b=o.n(d)
const p=e=>Object.assign({assignment:{toggleWrapperSelector:{show:".assignment-buttons",edit:".header-bar .header-bar-right .header-group-left"}[e.page],itemIdPath:{show:"ASSIGNMENT_ID",edit:"ASSIGNMENT.id"}[e.page]},quiz:{toggleWrapperSelector:{show:".header-group-left",edit:".header-bar .header-bar-right .header-group-left"}[e.page],toggleWrapperChildIndex:{edit:2}[e.page],itemIdPath:"QUIZ.id"},discussion_topic:{toggleWrapperSelector:{show:".form-inline .pull-right",edit:".discussion-edit-header .text-right"}[e.page],itemIdPath:{show:"DISCUSSION.TOPIC.ID",edit:"DISCUSSION_TOPIC.ATTRIBUTES.id"}[e.page]},wiki_page:{toggleWrapperSelector:{show:".blueprint-label"}[e.page],itemIdPath:"WIKI_PAGE.page_id"}}[e.itemType],e)
var g=p
var f=o("lubD")
Object(i["a"])(JSON.parse('{"ar":{"attributes_locked_1a1a0f46":"%{attributes} ??????????","locked_796957c7":"??????????:"},"ca":{"attributes_locked_1a1a0f46":"%{attributes} bloquejats","locked_796957c7":"Bloquejat:"},"cy":{"attributes_locked_1a1a0f46":"%{attributes} wedi\'u cloi","locked_796957c7":"Wedi Cloi:"},"da":{"attributes_locked_1a1a0f46":"%{attributes} l??st","locked_796957c7":"L??st:"},"da-x-k12":{"attributes_locked_1a1a0f46":"%{attributes} l??st","locked_796957c7":"L??st:"},"de":{"attributes_locked_1a1a0f46":"%{attributes} gesperrt","locked_796957c7":"Gesperrt:"},"en-AU":{"attributes_locked_1a1a0f46":"%{attributes} locked","locked_796957c7":"Locked:"},"en-AU-x-unimelb":{"attributes_locked_1a1a0f46":"%{attributes} locked","locked_796957c7":"Locked:"},"en-CA":{"attributes_locked_1a1a0f46":"%{attributes} locked","locked_796957c7":"Locked:"},"en-GB":{"attributes_locked_1a1a0f46":"%{attributes} locked","locked_796957c7":"Locked:"},"en-GB-x-lbs":{"attributes_locked_1a1a0f46":"%{attributes} locked","locked_796957c7":"Locked:"},"en-GB-x-ukhe":{"attributes_locked_1a1a0f46":"%{attributes} locked","locked_796957c7":"Locked:"},"es":{"attributes_locked_1a1a0f46":"%{attributes} bloqueado","locked_796957c7":"Bloqueado:"},"fa":{"attributes_locked_1a1a0f46":"%{attributes} ?????? ??????","locked_796957c7":"?????? ??????:"},"fi":{"attributes_locked_1a1a0f46":"%{attributes} lukittu","locked_796957c7":"Lukittu:"},"fr":{"attributes_locked_1a1a0f46":"%{attributes} verrouill??","locked_796957c7":"Verrouill?? :"},"fr-CA":{"attributes_locked_1a1a0f46":"%{attributes} verrouill??","locked_796957c7":"Verrouill?? :"},"he":{"attributes_locked_1a1a0f46":"%{attributes} ????????","locked_796957c7":"????????:"},"ht":{"attributes_locked_1a1a0f46":"%{attributes} bloke","locked_796957c7":"Bbloke:"},"hu":{"attributes_locked_1a1a0f46":"%{attributes}z??rolva"},"is":{"attributes_locked_1a1a0f46":"%{attributes} l??st","locked_796957c7":"L??st:"},"it":{"attributes_locked_1a1a0f46":"%{attributes} bloccato","locked_796957c7":"Bloccato:"},"ja":{"attributes_locked_1a1a0f46":"%{attributes} ???????????????????????????","locked_796957c7":"???????????????????????????"},"mi":{"attributes_locked_1a1a0f46":"%{attributes} Kua rakaina","locked_796957c7":"Kua rakaina:"},"nb":{"attributes_locked_1a1a0f46":"%{attributes} l??st","locked_796957c7":"L??st:"},"nb-x-k12":{"attributes_locked_1a1a0f46":"%{attributes} l??st","locked_796957c7":"L??st:"},"nl":{"attributes_locked_1a1a0f46":"%{attributes} vergrendeld","locked_796957c7":"Vergrendeld:"},"nn":{"attributes_locked_1a1a0f46":"%{attributes} l??ste","locked_796957c7":"L??st:"},"pl":{"attributes_locked_1a1a0f46":"%{attributes} zblokowane","locked_796957c7":"Zblokowane:"},"pt":{"attributes_locked_1a1a0f46":"%{attributes} Bloqueado","locked_796957c7":"Bloqueado:"},"pt-BR":{"attributes_locked_1a1a0f46":"%{attributes} bloqueado(a)","locked_796957c7":"Bloqueado(a):"},"ru":{"attributes_locked_1a1a0f46":"%{attributes} ??????????????????????????","locked_796957c7":"??????????????????????????:"},"sl":{"attributes_locked_1a1a0f46":"%{attributes} zaklenjeno","locked_796957c7":"Zaklenjeno:"},"sv":{"attributes_locked_1a1a0f46":"%{attributes} l??st","locked_796957c7":"L??st:"},"sv-x-k12":{"attributes_locked_1a1a0f46":"%{attributes} l??st","locked_796957c7":"L??st:"},"tr":{"attributes_locked_1a1a0f46":"%{attributes} kilitli"},"uk":{"attributes_locked_1a1a0f46":"%{attributes} ??????????????????????","locked_796957c7":"??????????????????????:"},"zh-Hans":{"attributes_locked_1a1a0f46":"%{attributes} ?????????","locked_796957c7":"????????????"},"zh-Hant":{"attributes_locked_1a1a0f46":"%{attributes} ?????????","locked_796957c7":"????????????"}}'))
var h=a["default"].scoped("blueprint_coursesLockBanner")
o("17x9")
var m=o("L+/K")
var L=o("5JRF")
o("MWZS")
var v=o("OAMf")
o("13m+")
class C extends s["Component"]{static setupRootNode(){const e=document.createElement("div")
e.id="blueprint-lock-banner"
e.setAttribute("style","margin-bottom: 2em")
const t=document.querySelector("#content")
return t.insertBefore(e,t.firstChild)}componentDidUpdate(e){this.props.isLocked&&!e.isLocked&&r.a.screenReaderFlashMessage(h.t("%{attributes} locked",{attributes:Object(v["a"])(this.props.itemLocks)}))}render(){if(this.props.isLocked)return Object(c["a"])(m["a"],{},void 0,Object(c["a"])(L["a"],{weight:"bold",size:"small"},void 0,h.t("Locked:"),"??"),Object(c["a"])(L["a"],{size:"small"},void 0,Object(v["a"])(this.props.itemLocks)))
return null}}C.defaultProps={itemLocks:{content:false,points:false,settings:false,due_dates:false,availability_dates:false}}
Object(i["a"])(JSON.parse('{"ar":{"blueprint_5cca2ef":"????????????","lock_c341af13":"??????????","locked_762f138b":"???? ??????????????","locked_click_to_unlock_50747e11":"??????????. ???????? ???????????? ??????????????.","unlock_f6196bf5":"?????????? ??????????????","unlocked_click_to_lock_53262ce7":"?????? ??????????. ???????? ??????????????."},"ca":{"blueprint_5cca2ef":"Plantilla","lock_c341af13":"Bloqueja","locked_762f138b":"Bloquejat","locked_click_to_unlock_50747e11":"Bloquejat. Feu clic per desbloquejar.","unlock_f6196bf5":"Desbloqueja","unlocked_click_to_lock_53262ce7":"Desbloquejat. Feu clic per bloquejar."},"cy":{"blueprint_5cca2ef":"Glasbrint","lock_c341af13":"Cloi","locked_762f138b":"Wedi Cloi","locked_click_to_unlock_50747e11":"Wedi Cloi. Cliciwch i ddatgloi.","unlock_f6196bf5":"Datgloi","unlocked_click_to_lock_53262ce7":"Wedi Datgloi. Cliciwch i???w gloi."},"da":{"blueprint_5cca2ef":"Blueprint","lock_c341af13":"L??s","locked_762f138b":"L??st","locked_click_to_unlock_50747e11":"L??st. Klik for at l??se op.","unlock_f6196bf5":"L??s op","unlocked_click_to_lock_53262ce7":"L??st op. Klik for at l??se."},"da-x-k12":{"blueprint_5cca2ef":"Blueprint","lock_c341af13":"L??s","locked_762f138b":"L??st","locked_click_to_unlock_50747e11":"L??st. Klik for at l??se op.","unlock_f6196bf5":"L??s op","unlocked_click_to_lock_53262ce7":"L??st op. Klik for at l??se."},"de":{"blueprint_5cca2ef":"Muster","lock_c341af13":"Sperre","locked_762f138b":"Gesperrt","locked_click_to_unlock_50747e11":"Gesperrt. Zum Entsperren klicken","unlock_f6196bf5":"Entsperren","unlocked_click_to_lock_53262ce7":"Entsperrt Zum Sperren klicken"},"el":{"locked_762f138b":"????????????????????"},"en-AU":{"blueprint_5cca2ef":"Blueprint","lock_c341af13":"Lock","locked_762f138b":"Locked","locked_click_to_unlock_50747e11":"Locked. Click to unlock.","unlock_f6196bf5":"Unlock","unlocked_click_to_lock_53262ce7":"Unlocked. Click to lock."},"en-AU-x-unimelb":{"blueprint_5cca2ef":"Blueprint","lock_c341af13":"Lock","locked_762f138b":"Locked","locked_click_to_unlock_50747e11":"Locked. Click to unlock.","unlock_f6196bf5":"Unlock","unlocked_click_to_lock_53262ce7":"Unlocked. Click to lock."},"en-CA":{"blueprint_5cca2ef":"Blueprint","lock_c341af13":"Lock","locked_762f138b":"Locked","locked_click_to_unlock_50747e11":"Locked. Click to unlock.","unlock_f6196bf5":"Unlock","unlocked_click_to_lock_53262ce7":"Unlocked. Click to lock."},"en-GB":{"blueprint_5cca2ef":"Blueprint","lock_c341af13":"Lock","locked_762f138b":"Locked","locked_click_to_unlock_50747e11":"Locked. Click to unlock.","unlock_f6196bf5":"Unlock","unlocked_click_to_lock_53262ce7":"Unlocked. Click to lock."},"en-GB-x-lbs":{"blueprint_5cca2ef":"Blueprint","lock_c341af13":"Lock","locked_762f138b":"Locked","locked_click_to_unlock_50747e11":"Locked. Click to unlock.","unlock_f6196bf5":"Unlock","unlocked_click_to_lock_53262ce7":"Unlocked. Click to lock."},"en-GB-x-ukhe":{"blueprint_5cca2ef":"Blueprint","lock_c341af13":"Lock","locked_762f138b":"Locked","locked_click_to_unlock_50747e11":"Locked. Click to unlock.","unlock_f6196bf5":"Unlock","unlocked_click_to_lock_53262ce7":"Unlocked. Click to lock."},"es":{"blueprint_5cca2ef":"Proyecto","lock_c341af13":"Bloquear","locked_762f138b":"Bloqueado","locked_click_to_unlock_50747e11":"Bloqueado. Hacer clic para desbloquear.","unlock_f6196bf5":"Desbloquear","unlocked_click_to_lock_53262ce7":"Desbloqueado. Hacer clic para bloquear."},"fa":{"blueprint_5cca2ef":"??????","lock_c341af13":"?????? ????????","locked_762f138b":"?????? ??????","locked_click_to_unlock_50747e11":"?????? ??????. ???????? ?????? ?????????? ???????? ????????.","unlock_f6196bf5":"?????? ??????????","unlocked_click_to_lock_53262ce7":"?????? ?????????? ??????. ???????? ?????? ???????? ???????? ????????."},"fi":{"blueprint_5cca2ef":"Blueprint","lock_c341af13":"Lukitse","locked_762f138b":"Lukittu","locked_click_to_unlock_50747e11":"Lukittu. Poista lukitus napsauttamalla.","unlock_f6196bf5":"Poista lukitus.","unlocked_click_to_lock_53262ce7":"Lukitus poistettu. Lukitse napsauttamalla."},"fr":{"blueprint_5cca2ef":"Projet","lock_c341af13":"Verrouiller","locked_762f138b":"Verrouill??(e)","locked_click_to_unlock_50747e11":"Verrouill??. Cliquez pour d??verrouiller.","unlock_f6196bf5":"D??verrouiller","unlocked_click_to_lock_53262ce7":"D??verrouill??. Cliquez pour verrouiller."},"fr-CA":{"blueprint_5cca2ef":"Mod??le","lock_c341af13":"Verrouiller","locked_762f138b":"Verrouill??","locked_click_to_unlock_50747e11":"Verrouill??. Cliquez pour d??verrouiller.","unlock_f6196bf5":"D??verrouiller","unlocked_click_to_lock_53262ce7":"D??verrouill??. Cliquez pour verrouiller."},"he":{"blueprint_5cca2ef":"?????????? ??????????","lock_c341af13":"??????????","locked_762f138b":"????????","locked_click_to_unlock_50747e11":"????????: ??????/?? ?????????? ??????????"},"ht":{"blueprint_5cca2ef":"Blueprint","lock_c341af13":"Bloke","locked_762f138b":"Bloke","locked_click_to_unlock_50747e11":"Bloke. Klike pou debloke.","unlock_f6196bf5":"Debloke","unlocked_click_to_lock_53262ce7":"Debloke. Klike pou bloke."},"hu":{"blueprint_5cca2ef":"Blueprint","lock_c341af13":"Z??rol??s","locked_762f138b":"Z??rolt","locked_click_to_unlock_50747e11":"Z??rolva. Kattintson a z??rol??s felold??s??hoz.","unlock_f6196bf5":"Z??rol??s felold??sa","unlocked_click_to_lock_53262ce7":"Z??rol??s feloldva. Kattintson a z??rol??shoz."},"hy":{"locked_762f138b":"???????????????????????? ??"},"is":{"blueprint_5cca2ef":"Blueprint","lock_c341af13":"L??sa","locked_762f138b":"L??st ","locked_click_to_unlock_50747e11":"L??st. Smelli?? til a?? opna.","unlock_f6196bf5":"Afl??sa","unlocked_click_to_lock_53262ce7":"Afl??st. Smelltu til a?? l??sa."},"it":{"blueprint_5cca2ef":"Modello di base","lock_c341af13":"Blocca","locked_762f138b":"Bloccato","locked_click_to_unlock_50747e11":"Bloccato. Fai clic per sbloccare.","unlock_f6196bf5":"Sblocca","unlocked_click_to_lock_53262ce7":"Sbloccato. Fai clic per bloccare."},"ja":{"blueprint_5cca2ef":"?????????","lock_c341af13":"?????????","locked_762f138b":"???????????????????????????","locked_click_to_unlock_50747e11":"????????????????????????????????????????????????????????????????????????","unlock_f6196bf5":"?????????????????????","unlocked_click_to_lock_53262ce7":"??????????????????????????????????????????????????????"},"mi":{"blueprint_5cca2ef":"T??tauira","lock_c341af13":"raka","locked_762f138b":"Kua rakaina","locked_click_to_unlock_50747e11":"Kua rakaina: P??whiri ki te huaki","unlock_f6196bf5":"Huaki","unlocked_click_to_lock_53262ce7":"Kua Huakina P??whiri ki te huaki"},"nb":{"blueprint_5cca2ef":"Blueprint","lock_c341af13":"L??s","locked_762f138b":"L??st","locked_click_to_unlock_50747e11":"L??st. Klikk for ?? l??se opp.","unlock_f6196bf5":"L??s opp","unlocked_click_to_lock_53262ce7":"L??st opp. Klikk for ?? l??se."},"nb-x-k12":{"blueprint_5cca2ef":"Fagmal","lock_c341af13":"L??s","locked_762f138b":"L??st","locked_click_to_unlock_50747e11":"L??st. Klikk for ?? l??se opp.","unlock_f6196bf5":"L??s opp","unlocked_click_to_lock_53262ce7":"L??st opp. Klikk for ?? l??se."},"nl":{"blueprint_5cca2ef":"Blauwdruk","lock_c341af13":"Vergrendelen","locked_762f138b":"Vergrendeld","locked_click_to_unlock_50747e11":"Vergrendeld. Klik om te ontgrendelen.","unlock_f6196bf5":"Ontgrendelen","unlocked_click_to_lock_53262ce7":"Ontgrendeld. Klik om te vergrendelen."},"nn":{"blueprint_5cca2ef":"Blueprint","lock_c341af13":"L??s","locked_762f138b":"L??st","locked_click_to_unlock_50747e11":"L??st. Klikk for ?? opne.","unlock_f6196bf5":"L??s opp","unlocked_click_to_lock_53262ce7":"Ul??st. Klikk for ?? opne. "},"pl":{"blueprint_5cca2ef":"Wzorzec","lock_c341af13":"Zablokuj","locked_762f138b":"Zablokowany","locked_click_to_unlock_50747e11":"Zblokowane. Kliknij, aby odblokowa??.","unlock_f6196bf5":"Odblokuj","unlocked_click_to_lock_53262ce7":"Odblokowane. Kliknij, aby zablokowa??."},"pt":{"blueprint_5cca2ef":"Blueprint","lock_c341af13":"Bloquear","locked_762f138b":"Travada","locked_click_to_unlock_50747e11":"Bloqueado, Clique para desbloquear.","unlock_f6196bf5":"Desbloquear","unlocked_click_to_lock_53262ce7":"Desbloqueado. Clique para bloquear."},"pt-BR":{"blueprint_5cca2ef":"Modelo","lock_c341af13":"Bloquear","locked_762f138b":"Bloqueado(a)","locked_click_to_unlock_50747e11":"Bloqueado. Clique para desbloquear.","unlock_f6196bf5":"Desbloquear","unlocked_click_to_lock_53262ce7":"Desbloqueado. Clique para bloquear."},"ru":{"blueprint_5cca2ef":"????????????","lock_c341af13":"??????????????????????????","locked_762f138b":"??????????????????????????","locked_click_to_unlock_50747e11":"??????????????????????????. ??????????????, ?????????? ????????????????????????????.","unlock_f6196bf5":"????????????????????????????","unlocked_click_to_lock_53262ce7":"????????????????????????????. ??????????????, ?????????? ??????????????????????????."},"sl":{"blueprint_5cca2ef":"??ablona","lock_c341af13":"Zakleni","locked_762f138b":"Zaklenjeno","locked_click_to_unlock_50747e11":"Zaklenjeno. Kliknite, da odklenete.","unlock_f6196bf5":"Odkleni","unlocked_click_to_lock_53262ce7":"Odklenjeno. Kliknite, da zaklenete."},"sv":{"blueprint_5cca2ef":"Modell","lock_c341af13":"L??s","locked_762f138b":"L??st","locked_click_to_unlock_50747e11":"L??st. Klicka f??r att l??sa upp.","unlock_f6196bf5":"L??s upp","unlocked_click_to_lock_53262ce7":"Ol??st. Klicka f??r att l??sa."},"sv-x-k12":{"blueprint_5cca2ef":"Modell","lock_c341af13":"L??s","locked_762f138b":"L??st","locked_click_to_unlock_50747e11":"L??st. Klicka f??r att l??sa upp.","unlock_f6196bf5":"L??s upp","unlocked_click_to_lock_53262ce7":"Ol??st. Klicka f??r att l??sa."},"tr":{"blueprint_5cca2ef":"??ablon","locked_762f138b":"Kilitli"},"uk":{"blueprint_5cca2ef":"????????????","lock_c341af13":"??????????????????????","locked_762f138b":"??????????????????????","locked_click_to_unlock_50747e11":"??????????????????????. ????????????????, ?????? ????????????????????????.","unlock_f6196bf5":"????????????????????????","unlocked_click_to_lock_53262ce7":"????????????????????????. ??????????????????, ?????? ??????????????????????."},"zh-Hans":{"blueprint_5cca2ef":"??????","lock_c341af13":"??????","locked_762f138b":"?????????","locked_click_to_unlock_50747e11":"??????????????????????????????","unlock_f6196bf5":"??????","unlocked_click_to_lock_53262ce7":"??????????????????????????????"},"zh-Hant":{"blueprint_5cca2ef":"??????","lock_c341af13":"??????","locked_762f138b":"?????????","locked_click_to_unlock_50747e11":"???????????????????????????","unlock_f6196bf5":"????????????","unlocked_click_to_lock_53262ce7":"?????????????????????????????????"}}'))
var w=a["default"].scoped("blueprint_coursesLockToggle")
var q=o("Xx/m")
var O=o("Zgll")
var E=o("5Shj")
var j=o("4Pkj")
var A=o("WfMV")
var B=o("o/ft")
var S=o("kC3k")
var I=o("tsv7")
const T={ADMIN_LOCKED:{label:w.t("Locked"),icon:B["a"],tooltip:w.t("Unlock"),variant:"primary"},ADMIN_UNLOCKED:{label:w.t("Blueprint"),icon:S["a"],tooltip:w.t("Lock"),variant:"default"},ADMIN_WILLUNLOCK:{label:w.t("Blueprint"),icon:S["a"],tooltip:w.t("Unlock"),variant:"default"},ADMIN_WILLLOCK:{label:w.t("Locked"),icon:B["a"],tooltip:w.t("Lock"),variant:"primary"},TEACH_LOCKED:{label:w.t("Locked"),icon:B["a"]},TEACH_UNLOCKED:{label:w.t("Blueprint"),icon:S["a"]}}
class M extends s["Component"]{static setupRootNode(e,t,o){const c=document.createElement("span")
const l=setInterval(()=>{const a=document.querySelector(e)
if(a){clearInterval(l)
a.insertBefore(c,a.childNodes[t])
o(c)}},200)}constructor(e){super(e)
this.onEnter=()=>{this.props.isToggleable&&this.setState({mode:this.props.isLocked?T.ADMIN_WILLUNLOCK:T.ADMIN_WILLLOCK})}
this.onExit=()=>{this.props.isToggleable&&this.setState({mode:this.props.isLocked?T.ADMIN_LOCKED:T.ADMIN_UNLOCKED})}
this.state={}
e.isToggleable?this.state.mode=e.isLocked?T.ADMIN_LOCKED:T.ADMIN_UNLOCKED:this.state.mode=e.isLocked?T.TEACH_LOCKED:T.TEACH_UNLOCKED}render(){const e=this.state.mode.icon
const t=Object(c["a"])("span",{className:"bpc-lock-toggle__label"},void 0,this.state.mode.label||"-")
let o=null
if(this.props.isToggleable){const l=this.state.mode.variant
const a=this.state.mode.tooltip
const i=this.props.isLocked?w.t("Locked. Click to unlock."):w.t("Unlocked. Click to lock.")
o=Object(c["a"])(E["a"],{tip:a,placement:"top",variant:"inverse",on:["hover","focus"]},void 0,this.props.breakpoints.miniTablet?Object(c["a"])(q["a"],{variant:l,onClick:this.props.onClick,onFocus:this.onEnter,onBlur:this.onExit,onMouseEnter:this.onEnter,onMouseLeave:this.onExit,"aria-pressed":this.props.isLocked},void 0,Object(c["a"])(e,{}),Object(c["a"])(j["a"],{},void 0,t),Object(c["a"])(A["a"],{},void 0,i)):Object(c["a"])(O["a"],{color:"primary"===l?l:null,onClick:this.props.onClick,onFocus:this.onEnter,onBlur:this.onExit,onMouseEnter:this.onEnter,onMouseLeave:this.onExit,"aria-pressed":this.props.isLocked,screenReaderLabel:i},void 0,Object(c["a"])(e,{})))}else o=Object(c["a"])("span",{className:"bpc__lock-no__toggle"},void 0,Object(c["a"])("span",{className:"bpc__lock-no__toggle-icon"},void 0,Object(c["a"])(e,{})),Object(c["a"])(L["a"],{size:"small"},void 0,t))
return Object(c["a"])("span",{className:"bpc-lock-toggle"},void 0,o)}}M.defaultProps={isToggleable:false,onClick:()=>{},breakpoints:{}}
const R=Object(I["a"])(M)
R.setupRootNode=M.setupRootNode
var y=R
o.d(t,"default",(function(){return D}))
class D{constructor(){this.toggleLocked=()=>{const e=this.props.itemType
const t=this.state,o=t.courseId,c=t.isLocked,l=t.itemId
f["a"].toggleLocked({courseId:o,itemType:e,itemId:l,isLocked:!c}).then(e=>{e.data.success?this.setState({isLocked:!c}):this.showToggleError()}).catch(()=>{this.showToggleError()})}
this.state={isLocked:false,itemLocks:[],isMasterContent:false,isChildContent:false,itemId:""}}init(e){if(!this.shouldInit())return
this.props=g(e)
this.setupState()
void 0!==this.state.itemId&&this.render()}shouldInit(){return ENV.MASTER_COURSE_DATA&&(ENV.MASTER_COURSE_DATA.is_master_course_master_content||ENV.MASTER_COURSE_DATA.is_master_course_child_content)}setupState(){this.state={isLocked:ENV.MASTER_COURSE_DATA.restricted_by_master_course,itemLocks:ENV.MASTER_COURSE_DATA.master_course_restrictions||ENV.MASTER_COURSE_DATA.default_restrictions,isMasterContent:ENV.MASTER_COURSE_DATA.is_master_course_master_content,isChildContent:ENV.MASTER_COURSE_DATA.is_master_course_child_content,courseId:ENV.COURSE_ID,itemId:b()(ENV,this.props.itemIdPath)}}setState(e){this.state=Object.assign(this.state,e)
this.render()}getItemLocks(){return Object(l["a"])({},this.state.itemLocks)}isMasterContent(){return this.state.isMasterContent}isChildContent(){return this.state.isChildContent}showToggleError(){r.a.flashError(n.t("There was a problem toggling the content lock."))}setupToggle(e){if(!this.props.toggleWrapperSelector)return
this.toggleNode?e():y.setupRootNode(this.props.toggleWrapperSelector,this.props.toggleWrapperChildIndex||0,t=>{this.toggleNode=t
e()})}renderLockToggle(){if(!this.props.toggleWrapperSelector)return
this.setupToggle(()=>{k.a.render(Object(c["a"])(y,{isLocked:this.state.isLocked,isToggleable:"show"===this.props.page&&this.state.isMasterContent,onClick:this.toggleLocked}),this.toggleNode)})}renderBanner(){this.bannerNode||(this.bannerNode=C.setupRootNode())
k.a.render(Object(c["a"])(C,{isLocked:this.state.isLocked,itemLocks:this.state.itemLocks}),this.bannerNode)}render(){this.renderBanner()
this.renderLockToggle()}}}}])

//# sourceMappingURL=50-c-08af48f479.js.map