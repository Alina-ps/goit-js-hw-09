import"./assets/styles-196b21f4.js";const e=document.querySelector(".feedback-form"),l="feedback-form-state";let t={email:"",message:""};const r=JSON.parse(localStorage.getItem(l));r&&(t=r,e.elements.email.value=t.email,e.elements.message.value=t.message);e.addEventListener("input",a=>{t[a.target.name]=a.target.value.trim(),localStorage.setItem(l,JSON.stringify(t))});e.addEventListener("submit",a=>{a.preventDefault();const s=e.elements.email.value.trim(),m=e.elements.message.value.trim();if(s===""||m===""){alert("Fill please all fields");return}t={email:s,message:m},console.log(t),localStorage.removeItem(l),e.reset()});
//# sourceMappingURL=commonHelpers2.js.map