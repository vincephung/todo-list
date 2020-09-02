!function(e){var t={};function n(l){if(t[l])return t[l].exports;var r=t[l]={i:l,l:!1,exports:{}};return e[l].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(l,r,function(t){return e[t]}.bind(null,r));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const l=e=>{const t=document.querySelector(".task-list");let n=document.createElement("div");n.classList.add("taskDiv"),n.classList.add(e.projectId+"-task"),t.appendChild(n);let l=document.createElement("p"),r=document.createElement("p"),o=document.createElement("p"),a=document.createElement("p"),c=document.createElement("button");c.innerHTML="X",c.className="deleteTaskBtn",l.textContent="Task: "+e.title,r.textContent="Due Date : "+e.date,o.textContent="Description : "+e.description,a.textContent="Priority : "+e.priority,n.appendChild(l),n.appendChild(r),n.appendChild(o),n.appendChild(a),n.appendChild(c),c.addEventListener("click",l=>{let r=JSON.parse(localStorage.getItem(e.projectId));console.log(r);for(let l=0;l<r.items.length;l++)e.title===r.items[l].title&&(r.items.splice(l,1),localStorage.removeItem(r.id),localStorage.setItem(r.id,JSON.stringify(r)),t.removeChild(n))})},r=document.querySelector(".task-section"),o=e=>{let t=document.createElement("div"),n=document.createElement("div");t.className="taskModal",n.className="modalContent",r.appendChild(t),t.appendChild(n),t.style.display="block";let o=document.createElement("h1");o.textContent="Create a new task",n.appendChild(o);let a=document.createElement("form");a.className="taskForm",n.appendChild(a);let c=document.createElement("input");c.setAttribute("type","text"),c.setAttribute("name","taskName"),c.setAttribute("id","taskName"),c.setAttribute("placeholder","Task Name:"),c.className="formItem",a.appendChild(c);let d=document.createElement("textarea");d.setAttribute("type","text"),d.setAttribute("name","taskDescription "),d.setAttribute("id","taskDescription"),d.setAttribute("placeholder","Task Description:"),d.className="formItem",a.appendChild(d);let i=document.createElement("input");i.setAttribute("type","date"),i.setAttribute("name","taskDate"),i.setAttribute("id","taskDate"),i.setAttribute("placeholder","Task Date:"),i.setAttribute("value","yyyy-dd-mm"),i.className="formItem",a.appendChild(i);let s=document.createElement("select");s.setAttribute("name","taskPriority"),s.setAttribute("id","taskPriority"),s.className="formItem",a.appendChild(s);let m=document.createElement("option"),u=document.createElement("option"),p=document.createElement("option"),y=document.createElement("option");m.innerHTML="Low",u.innerHTML="Medium",p.innerHTML="High",y.innerHTML="Top",s.appendChild(m),s.appendChild(u),s.appendChild(p),s.appendChild(y);let h=document.createElement("div");h.className="closeOptions",a.appendChild(h);let b=document.createElement("button"),C=document.createElement("button");b.className="submitModalBTN",C.className="cancelModalBTN",b.setAttribute("type","button"),C.setAttribute("type","button"),b.innerHTML="Submit",C.innerHTML="Cancel",h.appendChild(b),h.appendChild(C),document.querySelector(".submitModalBTN").addEventListener("click",()=>{l((e=>{const t=document.querySelector("#taskName"),n=document.querySelector("#taskDescription"),l=document.querySelector("#taskDate"),r=document.querySelector("#taskPriority"),o=e;let a=(e=>{let t=e.title,n=e.description,l=e.date,r=e.priority,o=e.projectId;return{title:t,description:n,date:l,priority:r,projectId:o,getTitle:()=>t,getDescription:()=>n,getDate:()=>l,getPriority:()=>r,getProjectId:()=>o}})({title:t.value,description:n.value,date:l.value,priority:r.value,projectId:o.id});return e.items.push(a),localStorage.removeItem(e.id),localStorage.setItem(e.id,JSON.stringify(e)),a})(e)),t.style.display="none",t.removeChild(n)}),document.querySelector(".cancelModalBTN").addEventListener("click",()=>{t.style.display="none",t.removeChild(n)})},a=(e,t)=>{let n,l=e,r=l.replace(/\s/g,"-");n=null!==t?[...t]:[];return{getName:()=>l,getItems:()=>n,getId:()=>r,addItem:e=>{n.push(e)},name:l,items:n,id:r}},c=(()=>{let e=[];return{addProject:t=>{e.push(t)},getList:()=>e,getProject:t=>{let n;return e.forEach(e=>{e.id===t&&(n=e)}),n},deleteProject:()=>{}}})(),d={storeData:e=>{localStorage.setItem(e.getId(),JSON.stringify(e))},deleteProject:e=>{localStorage.removeItem(e)}},i=e=>{const t=document.querySelector(".project-list");let n=document.createElement("div");n.classList.add("projectDiv"),t.appendChild(n);let l=document.createElement("button");l.innerHTML="X",l.className="deleteProjectBtn",n.id=""+e.id,n.classList.add("not-selected"),n.textContent=""+e.name,n.appendChild(l),l.addEventListener("click",l=>{let r=JSON.parse(localStorage.getItem(e.id));localStorage.removeItem(r.id),t.removeChild(n)})},s=(()=>{const e=document.querySelector(".project-list").childNodes,t=()=>{e.forEach(e=>{e.style.border="",e.classList.remove("selected"),e.classList.contains("not-selected")})},n=()=>{let t="";return e.forEach(e=>{e.classList.contains("selected")&&(t=c.getProject(e.id))}),t},l=()=>{let e=document.querySelector(".task-list").childNodes,t=n();e.forEach(e=>{e.classList.contains(t.id)||(e.style.display="none")})},r=()=>{let e=document.querySelector(".task-list").childNodes,t=n();e.forEach(e=>{e.classList.contains(t.id+"-task")&&(e.style.display="block")})};return{setUpProjects:()=>{e.forEach(e=>{e.addEventListener("click",e=>{t(),e.target.style.border="1px solid black",e.target.classList.add("selected"),l(),r()})})},removeOtherTasks:l,checkSelected:()=>{let t=!1;return e.forEach(e=>{e.classList.contains("selected")&&(t=!0)}),t},getSelected:n}})(),m=document.querySelector(".project-section"),u=document.querySelector(".create-task"),p=document.querySelector(".create-project");if(0!==localStorage.length){let e=localStorage;for(let t in e)if(e.hasOwnProperty(t)){let n=JSON.parse(e.getItem(t));if(console.log(n),n.hasOwnProperty("id")){i(n),c.addProject(n);let e=n.items.length;for(let t=0;t<e;t++)l(n.items[t]);s.removeOtherTasks()}}}else(()=>{const e=a("Default Project",null);i(e);const t=document.querySelector("#"+e.getId());t.classList.add("selected"),t.style.border="1px solid black",c.addProject(e)})();s.setUpProjects(),u.addEventListener("click",()=>{s.checkSelected()&&o(s.getSelected())}),p.addEventListener("click",()=>{let e=document.createElement("div"),t=document.createElement("div");e.className="projectModal",t.className="projectModalContent",m.appendChild(e),e.appendChild(t),e.style.display="block";let n=document.createElement("h1");n.textContent="Create a new project",t.appendChild(n);let l=document.createElement("input");l.setAttribute("type","text"),l.setAttribute("name","projectName"),l.setAttribute("id","projectName"),l.setAttribute("placeholder","Project Name:"),t.appendChild(l);let r=document.createElement("div");r.className="closeOptions",t.appendChild(r);let o=document.createElement("button"),u=document.createElement("button");o.className="submitModalBTN",u.className="cancelModalBTN",o.setAttribute("type","button"),u.setAttribute("type","button"),o.innerHTML="Submit",u.innerHTML="Cancel",r.appendChild(o),r.appendChild(u),document.querySelector(".submitModalBTN").addEventListener("click",()=>{i((()=>{const e=document.querySelector("#projectName");let t=a(e.value,null);return c.addProject(t),d.storeData(t),t})()),s.setUpProjects(),e.style.display="none",e.removeChild(t)}),document.querySelector(".cancelModalBTN").addEventListener("click",()=>{e.style.display="none",e.removeChild(t)})})}]);