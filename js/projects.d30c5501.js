(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["projects"],{"5ab7":function(e,t,a){e.exports=a.p+"img/jumjump.1c500808.webp"},"7ff1":function(e,t,a){"use strict";a("a0aa")},"83fd":function(e,t,a){e.exports=a.p+"img/kindred_preview.c22a6236.webp"},"96bf":function(e,t,a){"use strict";a.r(t);var c=a("7a23");function o(e,t,a,o,s,r){const l=Object(c["D"])("Projects"),d=Object(c["D"])("BaseView");return Object(c["u"])(),Object(c["e"])(d,null,{view:Object(c["J"])(()=>[Object(c["i"])(l)]),_:1})}var s=a("4bbf");const r=Object(c["h"])("div",{class:"grid grid-cols-12"},[Object(c["h"])("p",{class:"text-theme1 mb-8 col-span-10"}," His palms spaghetti, knees weak, arms spaghetti There's vomit on his sweater spaghetti, mom's spaghetti He's nervous, but on the surface he looks calm spaghetti to drop bombs, But he keeps on spaghetti what he wrote down, The whole crowd goes spaghetti He opens his mouth, but spaghetti won't come out He's choking how, everybody's joking now spaghetti run out, time's up, over, bloah! Snap back to spaghetti, Oh there goes spaghetti Oh, there goes spaghetti, bloah ")],-1),l={class:"grid grid-cols-12"},d={class:"col-start-1 col-span-10 grid grid-cols-3 gap-4 justify-items-start"};function i(e,t,a,o,s,i){const p=Object(c["D"])("Project"),b=Object(c["D"])("BaseSection");return Object(c["u"])(),Object(c["e"])(b,{title:"Projects"},{"section-body":Object(c["J"])(()=>[r,Object(c["h"])("div",l,[Object(c["h"])("div",d,[(Object(c["u"])(!0),Object(c["g"])(c["a"],null,Object(c["B"])(e.projectList,(e,t)=>(Object(c["u"])(),Object(c["e"])(p,{key:t,projectObj:e},null,8,["projectObj"]))),128))])])]),_:1})}var p=a("7c19");const b=e=>(Object(c["x"])("data-v-232bf4cf"),e=e(),Object(c["v"])(),e),m={class:"media"},n=["src","alt"],u={class:"m-auto"},j={class:"grid grid-rows-12 h-full"},h={class:"row-start-1 row-span-1 grid grid-cols-7"},O={class:"text-3xl col-start-4 mt-3"},w=b(()=>Object(c["h"])("p",{class:"row-start-2 row-span-1"},"Yampampampampamasdasdsad",-1)),f={class:"row-start-3 row-span-7"},g={key:0,class:"h-full"},v=["src"],y={key:1,class:"h-full"},M={width:"320",height:"240",controls:"",class:"m-auto"},x=["src"],S=b(()=>Object(c["h"])("p",{class:"row-start-11 row-span-2 summary"}," pam pam pam pam pam pam pam pam pam pam pam pam pam pam pam pam pam pam pam pam pam pam pam pam pam pam pam pam pam pam ",-1));function k(e,t,a,o,s,r){return Object(c["u"])(),Object(c["g"])(c["a"],null,[Object(c["h"])("div",m,[Object(c["h"])("img",{src:e.src,alt:e.labelText,onMouseover:t[0]||(t[0]=(...t)=>e.onHover&&e.onHover(...t)),onMouseout:t[1]||(t[1]=(...t)=>e.outHover&&e.outHover(...t)),onClick:t[2]||(t[2]=t=>e.showModal=!0)},null,40,n),Object(c["h"])("div",{class:"w-full text text-theme1 font-bold media-title flex justify-center align-center",style:Object(c["p"])({"background-color":e.labelColor})},[Object(c["h"])("p",u,Object(c["F"])(e.labelText),1)],4)]),Object(c["i"])(c["b"],{name:"fade",appear:""},{default:Object(c["J"])(()=>[e.showModal?(Object(c["u"])(),Object(c["g"])("div",{key:0,class:"modal-overlay",onClick:t[3]||(t[3]=t=>e.showModal=!1)})):Object(c["f"])("",!0)]),_:1}),Object(c["i"])(c["b"],{name:"popOut",appear:""},{default:Object(c["J"])(()=>[e.showModal?(Object(c["u"])(),Object(c["g"])("div",{key:0,class:Object(c["o"])({pop:e.showModal,modal:!0,"bg-theme1":!0}),role:"dialog"},[Object(c["h"])("div",j,[Object(c["h"])("div",h,[Object(c["h"])("h1",O,Object(c["F"])(e.labelText),1),Object(c["h"])("button",{onClick:t[4]||(t[4]=t=>e.showModal=!1),class:"close-btn col-start-7"}," x ")]),w,Object(c["h"])("div",f,["embed"===e.modalMeditaType?(Object(c["u"])(),Object(c["g"])("div",g,[Object(c["h"])("iframe",{class:"iframe m-auto",src:e.modalMediaSrc,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,8,v)])):Object(c["f"])("",!0),"video"===e.modalMeditaType?(Object(c["u"])(),Object(c["g"])("div",y,[Object(c["h"])("video",M,[Object(c["h"])("source",{src:e.modalMediaSrc,type:"video/mp4"},null,8,x)])])):Object(c["f"])("",!0)]),S])],2)):Object(c["f"])("",!0)]),_:1})],64)}const T=100;var H=Object(c["j"])({name:"Project",props:{projectObj:{type:Object,required:!0}},setup(e){const{projectObj:t}=Object(c["G"])(e),a=Object(c["A"])(t.value.media.splashSrc),o=t.value.label.text,s=t.value.label.color,r=t.value.media.modalMedia.type,l=t.value.media.modalMedia.src,d=Object(c["A"])(0);return{src:a,labelText:o,labelColor:s,timeoutId:d,showModal:Object(c["A"])(!1),modalMeditaType:r,modalMediaSrc:l}},methods:{onHover(){this.timeoutId=setTimeout(()=>{this.src=this.projectObj.media.fullMediaSrc},T)},outHover(){this.src=this.projectObj.media.splashSrc,clearTimeout(this.timeoutId)}}}),Q=(a("7ff1"),a("6b0d")),P=a.n(Q);const _=P()(H,[["render",k],["__scopeId","data-v-232bf4cf"]]);var B=_;const J=.5,K=[{media:{splashSrc:a("dc89"),fullMediaSrc:a("83fd"),modalMedia:{type:"embed",src:"https://www.youtube.com/embed/dQw4w9WgXcQ"}},label:{text:"Kindred",color:`rgba(102, 0, 255, ${J})`}},{media:{splashSrc:a("dc89"),fullMediaSrc:a("83fd"),modalMedia:{type:"embed",src:"https://www.youtube.com/embed/IcQ21z4XDS8"}},label:{text:"Kindred",color:`rgba(255, 102, 0, ${J})`}},{media:{splashSrc:a("dc89"),fullMediaSrc:a("dc89"),modalMedia:{type:"embed",src:"https://www.youtube.com/embed/dQw4w9WgXcQ"}},label:{text:"Kindred",color:`rgba(102, 0, 255, ${J})`}},{media:{splashSrc:a("ef71"),fullMediaSrc:a("5ab7"),modalMedia:{type:"video",src:a("cf8c")}},label:{text:"Kindred",color:`rgba(255, 102, 0, ${J})`}},{media:{splashSrc:a("dc89"),fullMediaSrc:a("83fd"),modalMedia:{type:"embed",src:"https://www.youtube.com/embed/dQw4w9WgXcQ"}},label:{text:"Kindred",color:`rgba(102, 0, 255, ${J})`}},{media:{splashSrc:a("dc89"),fullMediaSrc:a("83fd"),modalMedia:{type:"embed",src:"https://www.youtube.com/embed/dQw4w9WgXcQ"}},label:{text:"Kindred",color:`rgba(255, 102, 0, ${J})`}}];var $=K,C=Object(c["j"])({name:"Projects",components:{BaseSection:p["a"],Project:B},setup(){return{projectList:Object(c["z"])($)}}});const D=P()(C,[["render",i]]);var I=D,X=Object(c["j"])({name:"PorjectsView",components:{BaseView:s["a"],Projects:I}});const W=P()(X,[["render",o]]);t["default"]=W},a0aa:function(e,t,a){},cf8c:function(e,t,a){e.exports=a.p+"media/jumjump.ea5a7f07.mp4"},dc89:function(e,t,a){e.exports=a.p+"img/kindred_splash.167aef2e.png"},ef71:function(e,t,a){e.exports=a.p+"img/jumjump.a1446f0d.png"}}]);
//# sourceMappingURL=projects.d30c5501.js.map