import{ew as r,d5 as t,cK as n,l as a}from"./card-6e3f6345.js";const e=async(e,s,i,l)=>{if(!i.sign)return i.endpoint;let c;try{c=await r(s,i.endpoint,l)}catch(r){return t(r),null}return c?c.replace(/^http/i,"ws"):(n(e,a("error.failed_sign")),null)};export{e as g};
