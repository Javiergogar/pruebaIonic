"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6019],{6019:(x,g,i)=>{i.r(g),i.d(g,{CustomersPageModule:()=>v});var a=i(6895),m=i(433),s=i(2723),c=i(8468),h=i(4004),e=i(1571),p=i(529);function f(o,n){if(1&o&&(e.TgZ(0,"ion-item")(1,"ion-avatar",9),e._UZ(2,"img",10),e.qZA(),e.TgZ(3,"ion-avatar",11),e._UZ(4,"ion-icon",12),e.qZA(),e.TgZ(5,"ion-label")(6,"h2",7),e._uU(7),e.qZA(),e.TgZ(8,"h3"),e._uU(9),e.qZA(),e.TgZ(10,"p"),e._uU(11),e.qZA()()()),2&o){const t=n.$implicit;e.xp6(2),e.MGl("src","../../assets/img-conversaciones/",t.image,"",e.LSH),e.xp6(5),e.Oqu(t.name),e.xp6(2),e.Oqu(t.state),e.xp6(2),e.Oqu(t.description)}}function d(o,n){if(1&o&&(e.TgZ(0,"ion-list",6)(1,"ion-list-header")(2,"h2",7),e._uU(3,"Recientes"),e.qZA()(),e.YNc(4,f,12,4,"ion-item",8),e.qZA()),2&o){const t=e.oxw();e.Q6J("inset",!0),e.xp6(4),e.Q6J("ngForOf",t.searchedUser)}}function C(o,n){1&o&&(e.TgZ(0,"ion-label"),e._uU(1,"No tienes permiso para ver los clientes"),e.qZA())}const Z=[{path:"",component:(()=>{class o{constructor(t,r){this.router=t,this.http=r,this.users=[]}ngOnInit(){this.permission=!0,console.log("Hoola ngOnInit"),this.getUsers().subscribe(t=>{console.log("Res",t),this.users=t,this.searchedUser=this.users})}goToHome(){this.router.navigate(["/home"])}getUsers(){return this.http.get("assets/files/customers.json").pipe((0,h.U)(t=>t.data))}searchCustomers(t){const r=t.target.value;this.searchedUser=this.users,r&&""!=r.trim()&&(this.searchedUser=this.searchedUser.filter(l=>l.name.toLowerCase().indexOf(r.toLowerCase())>-1))}doRefresh(t){this.getUsers(),console.log("Begin async operation"),setTimeout(()=>{console.log("Async opertaion ended"),t.target.complete()},2e3)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(c.F0),e.Y36(p.eN))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-customers"]],decls:11,vars:2,consts:[["color","mycolor"],["placeholder","Buscar conversaciones","animated","",3,"ionChange"],["slot","fixed",3,"ionRefresh"],["refreshingSpinner","circles"],[3,"inset",4,"ngIf"],[4,"ngIf"],[3,"inset"],[1,"colorLila"],[4,"ngFor","ngForOf"],["slot","start"],[3,"src"],["slot","end"],["name","chatbox-ellipses-outline"]],template:function(t,r){1&t&&(e.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-title"),e._uU(3,"Perritas"),e.qZA()(),e.TgZ(4,"ion-toolbar")(5,"ion-searchbar",1),e.NdJ("ionChange",function(u){return r.searchCustomers(u)}),e.qZA()()(),e.TgZ(6,"ion-content")(7,"ion-refresher",2),e.NdJ("ionRefresh",function(u){return r.doRefresh(u)}),e._UZ(8,"ion-refresher-content",3),e.qZA(),e.YNc(9,d,5,2,"ion-list",4),e.qZA(),e.YNc(10,C,2,0,"ion-label",5)),2&t&&(e.xp6(9),e.Q6J("ngIf",r.permission),e.xp6(1),e.Q6J("ngIf",!r.permission))},dependencies:[a.sg,a.O5,s.BJ,s.W2,s.Gu,s.gu,s.Ie,s.Q$,s.q_,s.yh,s.nJ,s.Wo,s.VI,s.wd,s.sr,s.j9],styles:["ion-toolbar[_ngcontent-%COMP%]{background-color:var(--ion-color-mycolor)}.btn[_ngcontent-%COMP%]{background-color:var(--ion-color-mycolor);color:#fff;padding:20px 30px;border-radius:40px;font-size:15px}#container[_ngcontent-%COMP%]{text-align:center;position:relative;left:20px;right:20px;top:50%;padding-bottom:5%;transform:translateY(-50%)}.colorLila[_ngcontent-%COMP%]{color:var(--ion-color-mycolor)}"]}),o})()}];let P=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[c.Bz.forChild(Z),c.Bz]}),o})(),v=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[a.ez,m.u5,s.Pc,P]}),o})()}}]);