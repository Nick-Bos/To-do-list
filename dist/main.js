(()=>{"use strict";class e{constructor(e,t,n){this.title=e,this.description=t,this.date=n}}const t=[];class n{constructor(e){this.name=e}}const d=[],l=[];(()=>{const n=document.getElementById("taskBtn");n.addEventListener("click",(()=>{const d=document.getElementById("taskAddContainer");if(document.contains(d))return;(function(){const d=document.querySelector(".side"),l=document.createElement("div"),a=document.createElement("p"),c=document.createElement("input"),i=document.createElement("p"),o=document.createElement("textarea"),s=document.createElement("button"),r=document.createElement("button");d.appendChild(l),l.appendChild(a),l.appendChild(c),l.appendChild(i),l.appendChild(o),l.appendChild(s),l.appendChild(r),l.id="taskAddContainer",a.innerHTML="Title",i.innerHTML="Description",o.id="descInput",o.rows="5",o.cols="22",s.innerHTML="Add",s.id="taskAdd",r.innerHTML="Cancel",s.addEventListener("click",(()=>{if(""===c.value)alert("Please enter a task Title");else{const n=new e(c.value,o.value);t.push(n),(e=>{const t=e,n=document.querySelector(".tasks"),d=document.createElement("div");d.id="tasksContainer";const l=document.createElement("li");l.id="listItems";const a=document.createElement("a"),c=document.createElement("div");c.classList.add("tfDiv");const i=document.createElement("h3"),o=document.createElement("p"),s=document.createElement("textarea"),r=document.createElement("input");r.type="date",r.classList.add("dateInput");const m=document.createElement("button"),p=document.createElement("button");n.appendChild(d),d.appendChild(l),l.appendChild(a),function(e){for(let t=0;t<e.length;t++){let n=e[t].title;a.id=[t],a.innerHTML=n}}(t),a.addEventListener("click",(e=>{for(let e=0;e<t.length;e++)a.id==[e]&&(n.removeChild(d),n.appendChild(c),c.appendChild(i),i.innerHTML=t[e].title,c.appendChild(o),c.appendChild(s),s.rows="5",s.cols="22",c.appendChild(r),c.appendChild(p),c.appendChild(m),o.innerHTML="Description",s.innerHTML=String(t[e].description),p.innerHTML="Close",m.innerHTML="Delete",m.addEventListener("click",(()=>{n.removeChild(c),n.removeChild(d),t.splice(e,1,0)})),p.addEventListener("click",(()=>{n.removeChild(c),n.appendChild(d)})))}))})(t),c.value="",o.value=""}})),r.addEventListener("click",(()=>{d.removeChild(l),n.classList.remove("add-task-toggle"),n.classList.add("button");const e=document.getElementById("projBtn");e.classList.remove("add-task-toggle"),e.classList.add("projBtn")}))})(),n.classList.remove(),n.classList.add("add-task-toggle");const l=document.getElementById("projBtn");l.classList.remove("projBtn"),l.classList.add("add-task-toggle")}))})(),(()=>{const t=document.getElementById("taskBtn"),a=document.getElementById("projBtn"),c=document.querySelector(".side"),i=document.createElement("div"),o=document.createElement("p"),s=document.createElement("input"),r=document.createElement("button"),m=document.createElement("button");let p=-1;o.innerHTML="Project Name",r.innerHTML="Add",m.innerHTML="Cancel",i.id="projContainer",a.addEventListener("click",(()=>{const e=document.getElementById("projContainer");if(!document.contains(e)){c.appendChild(i),i.appendChild(o),i.appendChild(s),i.appendChild(r),i.appendChild(m),t.classList.remove(),t.classList.add("add-task-toggle");const e=document.getElementById("projBtn");e.classList.remove("projBtn"),e.classList.add("add-task-toggle")}})),r.addEventListener("click",(()=>{if(""===s.value)alert("Please enter a Project Name");else{const t=document.querySelector(".projects"),a=document.createElement("div");a.classList.add("projectsContainer");const c=document.createElement("ul"),i=document.createElement("a"),o=new n(s.value);function r(e){for(let t=0;t<e.length;t++){let n=e[t].name;i.id=[t],i.innerHTML=n}}d.push(o),t.appendChild(a),a.appendChild(c),c.appendChild(i),r(d),s.value="",i.addEventListener("click",(()=>{for(let t=0;t<d.length;t++)if(i.id==[t]){const t=document.createElement("div"),n=document.createElement("li"),d=document.createElement("a"),c=document.createElement("p"),i=document.createElement("input"),o=document.createElement("p"),s=document.createElement("textarea"),r=document.createElement("button"),m=document.createElement("button");a.appendChild(t),t.appendChild(c),t.appendChild(i),t.appendChild(o),t.appendChild(s),t.appendChild(r),t.appendChild(m),c.innerHTML="Task Title",o.innerHTML="Description",s.id="descInput",s.rows="5",s.cols="22",r.innerHTML="Add",r.id="taskAdd",m.innerHTML="Cancel",r.addEventListener("click",(()=>{if(p++,console.log(p),""===i.value)alert("Please enter a task Title");else{const t=new e(i.value,s.value);a.appendChild(n),n.appendChild(d),l.push(t);for(let e=0;e<l.length;e++){let t=l[e].title;d.id=p,d.innerHTML=t}}console.log(l),console.log(d.id),a.removeChild(t)})),m.addEventListener("click",(()=>{a.removeChild(t)})),d.addEventListener("click",(e=>{for(let e=0;e<l.length;e++)d.id==[e]&&console.log(l[e])}))}}))}})),m.addEventListener("click",(()=>{c.removeChild(i),t.classList.remove("add-task-toggle"),t.classList.add("button");const e=document.getElementById("projBtn");e.classList.remove("add-task-toggle"),e.classList.add("projBtn"),s.value=""}))})()})();