(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const aa="153",dm={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},fm={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bd=0,bc=1,Td=2,pm=3,mm=0,xl=1,Sd=2,gn=3,Gn=0,zt=1,_n=2,gm=2,zn=0,Li=1,Tc=2,Sc=3,Ac=4,Ad=5,Ti=100,wd=101,Rd=102,wc=103,Rc=104,Cd=200,Id=201,Ld=202,Pd=203,yl=204,Ml=205,Od=206,Ud=207,Dd=208,Nd=209,Bd=210,Fd=0,zd=1,kd=2,ea=3,Gd=4,Vd=5,Hd=6,Wd=7,Rr=0,qd=1,Xd=2,Mn=0,Yd=1,Zd=2,$d=3,Jd=4,Kd=5,ca=300,ti=301,ni=302,rr=303,or=304,Cs=306,ar=1e3,Ct=1001,cr=1002,dt=1003,ta=1004,_m=1004,js=1005,vm=1005,ft=1006,El=1007,xm=1007,ii=1008,ym=1008,kn=1009,jd=1010,Qd=1011,la=1012,bl=1013,Fn=1014,xn=1015,Ts=1016,Tl=1017,Sl=1018,Jn=1020,ef=1021,Yt=1023,tf=1024,nf=1025,Kn=1026,Di=1027,sf=1028,Al=1029,rf=1030,wl=1031,Rl=1033,Ho=33776,Wo=33777,qo=33778,Xo=33779,Cc=35840,Ic=35841,Lc=35842,Pc=35843,of=36196,Oc=37492,Uc=37496,Dc=37808,Nc=37809,Bc=37810,Fc=37811,zc=37812,kc=37813,Gc=37814,Vc=37815,Hc=37816,Wc=37817,qc=37818,Xc=37819,Yc=37820,Zc=37821,Yo=36492,af=36283,$c=36284,Jc=36285,Kc=36286,cf=2200,lf=2201,uf=2202,lr=2300,ur=2301,Zo=2302,Ai=2400,wi=2401,hr=2402,ua=2500,Cl=2501,Mm=0,Em=1,bm=2,Il=3e3,jn=3001,hf=3200,df=3201,oi=0,ff=1,Qn="",Be="srgb",un="srgb-linear",Ll="display-p3",Tm=0,$o=7680,Sm=7681,Am=7682,wm=7683,Rm=34055,Cm=34056,Im=5386,Lm=512,Pm=513,Om=514,Um=515,Dm=516,Nm=517,Bm=518,pf=519,mf=512,gf=513,_f=514,vf=515,xf=516,yf=517,Mf=518,Ef=519,dr=35044,Fm=35048,zm=35040,km=35045,Gm=35049,Vm=35041,Hm=35046,Wm=35050,qm=35042,Xm="100",jc="300 es",na=1035,yn=2e3,fr=2001;class Hn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Su=1234567;const Pi=Math.PI/180,Ss=180/Math.PI;function $t(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wt[s&255]+wt[s>>8&255]+wt[s>>16&255]+wt[s>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]).toLowerCase()}function lt(s,e,t){return Math.max(e,Math.min(t,s))}function Pl(s,e){return(s%e+e)%e}function Ym(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Zm(s,e,t){return s!==e?(t-s)/(e-s):0}function Qs(s,e,t){return(1-t)*s+t*e}function $m(s,e,t,n){return Qs(s,e,1-Math.exp(-t*n))}function Jm(s,e=1){return e-Math.abs(Pl(s,e*2)-e)}function Km(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function jm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Qm(s,e){return s+Math.floor(Math.random()*(e-s+1))}function e0(s,e){return s+Math.random()*(e-s)}function t0(s){return s*(.5-Math.random())}function n0(s){s!==void 0&&(Su=s);let e=Su+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function i0(s){return s*Pi}function s0(s){return s*Ss}function Qc(s){return(s&s-1)===0&&s!==0}function bf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ia(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function r0(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":s.set(a*u,c*h,c*d,a*l);break;case"YZY":s.set(c*d,a*u,c*h,a*l);break;case"ZXZ":s.set(c*h,c*d,a*u,a*l);break;case"XZX":s.set(a*u,c*m,c*f,a*l);break;case"YXY":s.set(c*f,a*u,c*m,a*l);break;case"ZYZ":s.set(c*m,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Zt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ge(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const o0={DEG2RAD:Pi,RAD2DEG:Ss,generateUUID:$t,clamp:lt,euclideanModulo:Pl,mapLinear:Ym,inverseLerp:Zm,lerp:Qs,damp:$m,pingpong:Jm,smoothstep:Km,smootherstep:jm,randInt:Qm,randFloat:e0,randFloatSpread:t0,seededRandom:n0,degToRad:i0,radToDeg:s0,isPowerOfTwo:Qc,ceilPowerOfTwo:bf,floorPowerOfTwo:ia,setQuaternionFromProperEuler:r0,normalize:Ge,denormalize:Zt};class Z{constructor(e=0,t=0){Z.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,n,i,r,o,a,c,l){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],m=n[8],_=i[0],g=i[3],p=i[6],x=i[1],v=i[4],y=i[7],b=i[2],T=i[5],C=i[8];return r[0]=o*_+a*x+c*b,r[3]=o*g+a*v+c*T,r[6]=o*p+a*y+c*C,r[1]=l*_+u*x+h*b,r[4]=l*g+u*v+h*T,r[7]=l*p+u*y+h*C,r[2]=d*_+f*x+m*b,r[5]=d*g+f*v+m*T,r[8]=d*p+f*y+m*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,m=t*h+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=h*_,e[1]=(i*l-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(u*t-i*c)*_,e[5]=(i*r-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Da.makeScale(e,t)),this}rotate(e){return this.premultiply(Da.makeRotation(-e)),this}translate(e,t){return this.premultiply(Da.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Da=new ke;function Tf(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}const a0={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function _s(s,e){return new a0[s](e)}function pr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}const Au={};function er(s){s in Au||(Au[s]=!0,console.warn(s))}function Ms(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Na(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const c0=new ke().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),l0=new ke().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function u0(s){return s.convertSRGBToLinear().applyMatrix3(l0)}function h0(s){return s.applyMatrix3(c0).convertLinearToSRGB()}const d0={[un]:s=>s,[Be]:s=>s.convertSRGBToLinear(),[Ll]:u0},f0={[un]:s=>s,[Be]:s=>s.convertLinearToSRGB(),[Ll]:h0},en={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return un},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=d0[e],i=f0[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}};let qi;class Ol{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qi===void 0&&(qi=pr("canvas")),qi.width=e.width,qi.height=e.height;const n=qi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=qi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=pr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ms(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ms(t[n]/255)*255):t[n]=Ms(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let p0=0;class Ri{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=$t(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ba(i[o].image)):r.push(Ba(i[o]))}else r=Ba(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ba(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ol.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let m0=0;class pt extends Hn{constructor(e=pt.DEFAULT_IMAGE,t=pt.DEFAULT_MAPPING,n=Ct,i=Ct,r=ft,o=ii,a=Yt,c=kn,l=pt.DEFAULT_ANISOTROPY,u=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=$t(),this.name="",this.source=new Ri(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Z(0,0),this.repeat=new Z(1,1),this.center=new Z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(er("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===jn?Be:Qn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ca)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ar:e.x=e.x-Math.floor(e.x);break;case Ct:e.x=e.x<0?0:1;break;case cr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ar:e.y=e.y-Math.floor(e.y);break;case Ct:e.y=e.y<0?0:1;break;case cr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return er("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Be?jn:Il}set encoding(e){er("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===jn?Be:Qn}}pt.DEFAULT_IMAGE=null;pt.DEFAULT_MAPPING=ca;pt.DEFAULT_ANISOTROPY=1;class Je{constructor(e=0,t=0,n=0,i=1){Je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,y=(f+1)/2,b=(p+1)/2,T=(u+d)/4,C=(h+_)/4,I=(m+g)/4;return v>y&&v>b?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=T/n,r=C/n):y>b?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=T/i,r=I/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=C/r,i=I/r),this.set(n,i,r,t),this}let x=Math.sqrt((g-m)*(g-m)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(h-_)/x,this.z=(d-u)/x,this.w=Math.acos((l+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hn extends Hn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Je(0,0,e,t),this.scissorTest=!1,this.viewport=new Je(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(er("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===jn?Be:Qn),this.texture=new pt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ft,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ri(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ha extends pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=dt,this.minFilter=dt,this.wrapR=Ct,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class g0 extends hn{constructor(e=1,t=1,n=1){super(e,t),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new ha(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Ul extends pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=dt,this.minFilter=dt,this.wrapR=Ct,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _0 extends hn{constructor(e=1,t=1,n=1){super(e,t),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Ul(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class v0 extends hn{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLMultipleRenderTargets=!0;const r=this.texture;this.texture=[];for(let o=0;o<n;o++)this.texture[o]=r.clone(),this.texture[o].isRenderTargetTexture=!0}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.texture.length;i<r;i++)this.texture[i].image.width=e,this.texture[i].image.height=t,this.texture[i].image.depth=n;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone(),this.texture[t].isRenderTargetTexture=!0;return this}}class Ht{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const d=r[o+0],f=r[o+1],m=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=_;return}if(h!==_||c!==d||l!==f||u!==m){let g=1-a;const p=c*d+l*f+u*m+h*_,x=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const b=Math.sqrt(v),T=Math.atan2(b,p*x);g=Math.sin(g*T)/b,a=Math.sin(a*T)/b}const y=a*x;if(c=c*g+d*y,l=l*g+f*y,u=u*g+m*y,h=h*g+_*y,g===1-a){const b=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=b,l*=b,u*=b,h*=b}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+u*h+c*f-l*d,e[t+1]=c*m+u*d+l*h-a*f,e[t+2]=l*m+u*f+a*d-c*h,e[t+3]=u*m-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(r/2),d=c(n/2),f=c(i/2),m=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h+d*f*m;break;case"YZX":this._x=d*u*h+l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h-d*f*m;break;case"XZY":this._x=d*u*h-l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class S{constructor(e=0,t=0,n=0){S.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*i-a*n,u=c*n+a*t-r*i,h=c*i+r*n-o*t,d=-r*t-o*n-a*i;return this.x=l*c+d*-r+u*-a-h*-o,this.y=u*c+d*-o+h*-r-l*-a,this.z=h*c+d*-a+l*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fa.copy(this).projectOnVector(e),this.sub(Fa)}reflect(e){return this.sub(Fa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fa=new S,wu=new Ht;class Tn{constructor(e=new S(1/0,1/0,1/0),t=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Xi.copy(e.boundingBox),Xi.applyMatrix4(e.matrixWorld),this.union(Xi);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const r=i.attributes.position;for(let o=0,a=r.count;o<a;o++)Rn.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Rn)}else i.boundingBox===null&&i.computeBoundingBox(),Xi.copy(i.boundingBox),Xi.applyMatrix4(e.matrixWorld),this.union(Xi)}const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zs),Zr.subVectors(this.max,zs),Yi.subVectors(e.a,zs),Zi.subVectors(e.b,zs),$i.subVectors(e.c,zs),qn.subVectors(Zi,Yi),Xn.subVectors($i,Zi),fi.subVectors(Yi,$i);let t=[0,-qn.z,qn.y,0,-Xn.z,Xn.y,0,-fi.z,fi.y,qn.z,0,-qn.x,Xn.z,0,-Xn.x,fi.z,0,-fi.x,-qn.y,qn.x,0,-Xn.y,Xn.x,0,-fi.y,fi.x,0];return!za(t,Yi,Zi,$i,Zr)||(t=[1,0,0,0,1,0,0,0,1],!za(t,Yi,Zi,$i,Zr))?!1:($r.crossVectors(qn,Xn),t=[$r.x,$r.y,$r.z],za(t,Yi,Zi,$i,Zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wn=[new S,new S,new S,new S,new S,new S,new S,new S],Rn=new S,Xi=new Tn,Yi=new S,Zi=new S,$i=new S,qn=new S,Xn=new S,fi=new S,zs=new S,Zr=new S,$r=new S,pi=new S;function za(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){pi.fromArray(s,r);const a=i.x*Math.abs(pi.x)+i.y*Math.abs(pi.y)+i.z*Math.abs(pi.z),c=e.dot(pi),l=t.dot(pi),u=n.dot(pi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const x0=new Tn,ks=new S,ka=new S;class dn{constructor(e=new S,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):x0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ks.subVectors(e,this.center);const t=ks.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ks,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ka.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ks.copy(e.center).add(ka)),this.expandByPoint(ks.copy(e.center).sub(ka))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Cn=new S,Ga=new S,Jr=new S,Yn=new S,Va=new S,Kr=new S,Ha=new S;class Is{constructor(e=new S,t=new S(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cn.copy(this.origin).addScaledVector(this.direction,t),Cn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ga.copy(e).add(t).multiplyScalar(.5),Jr.copy(t).sub(e).normalize(),Yn.copy(this.origin).sub(Ga);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Jr),a=Yn.dot(this.direction),c=-Yn.dot(Jr),l=Yn.lengthSq(),u=Math.abs(1-o*o);let h,d,f,m;if(u>0)if(h=o*c-a,d=o*a-c,m=r*u,h>=0)if(d>=-m)if(d<=m){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-m?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=m?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Ga).addScaledVector(Jr,d),f}intersectSphere(e,t){Cn.subVectors(e.center,this.origin);const n=Cn.dot(this.direction),i=Cn.dot(Cn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Cn)!==null}intersectTriangle(e,t,n,i,r){Va.subVectors(t,e),Kr.subVectors(n,e),Ha.crossVectors(Va,Kr);let o=this.direction.dot(Ha),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yn.subVectors(this.origin,e);const c=a*this.direction.dot(Kr.crossVectors(Yn,Kr));if(c<0)return null;const l=a*this.direction.dot(Va.cross(Yn));if(l<0||c+l>o)return null;const u=-a*Yn.dot(Ha);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ue{constructor(e,t,n,i,r,o,a,c,l,u,h,d,f,m,_,g){Ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,u,h,d,f,m,_,g)}set(e,t,n,i,r,o,a,c,l,u,h,d,f,m,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ue().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ji.setFromMatrixColumn(e,0).length(),r=1/Ji.setFromMatrixColumn(e,1).length(),o=1/Ji.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,m=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+m*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=m+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,m=l*u,_=l*h;t[0]=d+_*a,t[4]=m*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-m,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,m=l*u,_=l*h;t[0]=d-_*a,t[4]=-o*h,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,f=o*h,m=a*u,_=a*h;t[0]=c*u,t[4]=m*l-f,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=f*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,m=a*c,_=a*l;t[0]=c*u,t[4]=_-d*h,t[8]=m*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+m,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*c,f=o*l,m=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-m,t[2]=m*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(y0,e,M0)}lookAt(e,t,n){const i=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),Zn.crossVectors(n,qt),Zn.lengthSq()===0&&(Math.abs(n.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),Zn.crossVectors(n,qt)),Zn.normalize(),jr.crossVectors(qt,Zn),i[0]=Zn.x,i[4]=jr.x,i[8]=qt.x,i[1]=Zn.y,i[5]=jr.y,i[9]=qt.y,i[2]=Zn.z,i[6]=jr.z,i[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],x=n[3],v=n[7],y=n[11],b=n[15],T=i[0],C=i[4],I=i[8],M=i[12],w=i[1],N=i[5],$=i[9],D=i[13],B=i[2],F=i[6],J=i[10],q=i[14],Y=i[3],K=i[7],Q=i[11],de=i[15];return r[0]=o*T+a*w+c*B+l*Y,r[4]=o*C+a*N+c*F+l*K,r[8]=o*I+a*$+c*J+l*Q,r[12]=o*M+a*D+c*q+l*de,r[1]=u*T+h*w+d*B+f*Y,r[5]=u*C+h*N+d*F+f*K,r[9]=u*I+h*$+d*J+f*Q,r[13]=u*M+h*D+d*q+f*de,r[2]=m*T+_*w+g*B+p*Y,r[6]=m*C+_*N+g*F+p*K,r[10]=m*I+_*$+g*J+p*Q,r[14]=m*M+_*D+g*q+p*de,r[3]=x*T+v*w+y*B+b*Y,r[7]=x*C+v*N+y*F+b*K,r[11]=x*I+v*$+y*J+b*Q,r[15]=x*M+v*D+y*q+b*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],m=e[3],_=e[7],g=e[11],p=e[15];return m*(+r*c*h-i*l*h-r*a*d+n*l*d+i*a*f-n*c*f)+_*(+t*c*f-t*l*d+r*o*d-i*o*f+i*l*u-r*c*u)+g*(+t*l*h-t*a*f-r*o*h+n*o*f+r*a*u-n*l*u)+p*(-i*a*u-t*c*h+t*a*d+i*o*h-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],m=e[12],_=e[13],g=e[14],p=e[15],x=h*g*l-_*d*l+_*c*f-a*g*f-h*c*p+a*d*p,v=m*d*l-u*g*l-m*c*f+o*g*f+u*c*p-o*d*p,y=u*_*l-m*h*l+m*a*f-o*_*f-u*a*p+o*h*p,b=m*h*c-u*_*c-m*a*d+o*_*d+u*a*g-o*h*g,T=t*x+n*v+i*y+r*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=x*C,e[1]=(_*d*r-h*g*r-_*i*f+n*g*f+h*i*p-n*d*p)*C,e[2]=(a*g*r-_*c*r+_*i*l-n*g*l-a*i*p+n*c*p)*C,e[3]=(h*c*r-a*d*r-h*i*l+n*d*l+a*i*f-n*c*f)*C,e[4]=v*C,e[5]=(u*g*r-m*d*r+m*i*f-t*g*f-u*i*p+t*d*p)*C,e[6]=(m*c*r-o*g*r-m*i*l+t*g*l+o*i*p-t*c*p)*C,e[7]=(o*d*r-u*c*r+u*i*l-t*d*l-o*i*f+t*c*f)*C,e[8]=y*C,e[9]=(m*h*r-u*_*r-m*n*f+t*_*f+u*n*p-t*h*p)*C,e[10]=(o*_*r-m*a*r+m*n*l-t*_*l-o*n*p+t*a*p)*C,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*f-t*a*f)*C,e[12]=b*C,e[13]=(u*_*i-m*h*i+m*n*d-t*_*d-u*n*g+t*h*g)*C,e[14]=(m*a*i-o*_*i-m*n*c+t*_*c+o*n*g-t*a*g)*C,e[15]=(o*h*i-u*a*i+u*n*c-t*h*c-o*n*d+t*a*d)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,m=r*h,_=o*u,g=o*h,p=a*h,x=c*l,v=c*u,y=c*h,b=n.x,T=n.y,C=n.z;return i[0]=(1-(_+p))*b,i[1]=(f+y)*b,i[2]=(m-v)*b,i[3]=0,i[4]=(f-y)*T,i[5]=(1-(d+p))*T,i[6]=(g+x)*T,i[7]=0,i[8]=(m+v)*C,i[9]=(g-x)*C,i[10]=(1-(d+_))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ji.set(i[0],i[1],i[2]).length();const o=Ji.set(i[4],i[5],i[6]).length(),a=Ji.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],sn.copy(this);const l=1/r,u=1/o,h=1/a;return sn.elements[0]*=l,sn.elements[1]*=l,sn.elements[2]*=l,sn.elements[4]*=u,sn.elements[5]*=u,sn.elements[6]*=u,sn.elements[8]*=h,sn.elements[9]*=h,sn.elements[10]*=h,t.setFromRotationMatrix(sn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=yn){const c=this.elements,l=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let f,m;if(a===yn)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===fr)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=yn){const c=this.elements,l=1/(t-e),u=1/(n-i),h=1/(o-r),d=(t+e)*l,f=(n+i)*u;let m,_;if(a===yn)m=(o+r)*h,_=-2*h;else if(a===fr)m=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ji=new S,sn=new Ue,y0=new S(0,0,0),M0=new S(1,1,1),Zn=new S,jr=new S,qt=new S,Ru=new Ue,Cu=new Ht;class Cr{constructor(e=0,t=0,n=0,i=Cr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-lt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(lt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ru.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ru,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cu.setFromEuler(this),this.setFromQuaternion(Cu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cr.DEFAULT_ORDER="XYZ";class da{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let E0=0;const Iu=new S,Ki=new Ht,In=new Ue,Qr=new S,Gs=new S,b0=new S,T0=new Ht,Lu=new S(1,0,0),Pu=new S(0,1,0),Ou=new S(0,0,1),S0={type:"added"},Uu={type:"removed"};class $e extends Hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=$t(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$e.DEFAULT_UP.clone();const e=new S,t=new Cr,n=new Ht,i=new S(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ue},normalMatrix:{value:new ke}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=$e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new da,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.premultiply(Ki),this}rotateX(e){return this.rotateOnAxis(Lu,e)}rotateY(e){return this.rotateOnAxis(Pu,e)}rotateZ(e){return this.rotateOnAxis(Ou,e)}translateOnAxis(e,t){return Iu.copy(e).applyQuaternion(this.quaternion),this.position.add(Iu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lu,e)}translateY(e){return this.translateOnAxis(Pu,e)}translateZ(e){return this.translateOnAxis(Ou,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qr.copy(e):Qr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(Gs,Qr,this.up):In.lookAt(Qr,Gs,this.up),this.quaternion.setFromRotationMatrix(In),i&&(In.extractRotation(i.matrixWorld),Ki.setFromRotationMatrix(In),this.quaternion.premultiply(Ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(S0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Uu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Uu)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),In.multiply(e.parent.matrixWorld)),e.applyMatrix4(In),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,e,b0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,T0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}$e.DEFAULT_UP=new S(0,1,0);$e.DEFAULT_MATRIX_AUTO_UPDATE=!0;$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new S,Ln=new S,Wa=new S,Pn=new S,ji=new S,Qi=new S,Du=new S,qa=new S,Xa=new S,Ya=new S;let eo=!1;class Ft{constructor(e=new S,t=new S,n=new S){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),rn.subVectors(e,t),i.cross(rn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){rn.subVectors(i,t),Ln.subVectors(n,t),Wa.subVectors(e,t);const o=rn.dot(rn),a=rn.dot(Ln),c=rn.dot(Wa),l=Ln.dot(Ln),u=Ln.dot(Wa),h=o*l-a*a;if(h===0)return r.set(-2,-1,-1);const d=1/h,f=(l*c-a*u)*d,m=(o*u-a*c)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Pn),Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getUV(e,t,n,i,r,o,a,c){return eo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),eo=!0),this.getInterpolation(e,t,n,i,r,o,a,c)}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,Pn),c.setScalar(0),c.addScaledVector(r,Pn.x),c.addScaledVector(o,Pn.y),c.addScaledVector(a,Pn.z),c}static isFrontFacing(e,t,n,i){return rn.subVectors(n,t),Ln.subVectors(e,t),rn.cross(Ln).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),rn.cross(Ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ft.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ft.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return eo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),eo=!0),Ft.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return Ft.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Ft.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ft.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;ji.subVectors(i,n),Qi.subVectors(r,n),qa.subVectors(e,n);const c=ji.dot(qa),l=Qi.dot(qa);if(c<=0&&l<=0)return t.copy(n);Xa.subVectors(e,i);const u=ji.dot(Xa),h=Qi.dot(Xa);if(u>=0&&h<=u)return t.copy(i);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(ji,o);Ya.subVectors(e,r);const f=ji.dot(Ya),m=Qi.dot(Ya);if(m>=0&&f<=m)return t.copy(r);const _=f*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(n).addScaledVector(Qi,a);const g=u*m-f*h;if(g<=0&&h-u>=0&&f-m>=0)return Du.subVectors(r,i),a=(h-u)/(h-u+(f-m)),t.copy(i).addScaledVector(Du,a);const p=1/(g+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(ji,o).addScaledVector(Qi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let A0=0;class Lt extends Hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=$t(),this.name="",this.type="Material",this.blending=Li,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=yl,this.blendDst=Ml,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ea,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$o,this.stencilZFail=$o,this.stencilZPass=$o,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Li&&(n.blending=this.blending),this.side!==Gn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Sf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},on={h:0,s:0,l:0},to={h:0,s:0,l:0};function Za(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Be){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,en.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=en.workingColorSpace){return this.r=e,this.g=t,this.b=n,en.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=en.workingColorSpace){if(e=Pl(e,1),t=lt(t,0,1),n=lt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Za(o,r,e+1/3),this.g=Za(o,r,e),this.b=Za(o,r,e-1/3)}return en.toWorkingColorSpace(this,i),this}setStyle(e,t=Be){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Be){const n=Sf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}copyLinearToSRGB(e){return this.r=Na(e.r),this.g=Na(e.g),this.b=Na(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Be){return en.fromWorkingColorSpace(Rt.copy(this),e),Math.round(lt(Rt.r*255,0,255))*65536+Math.round(lt(Rt.g*255,0,255))*256+Math.round(lt(Rt.b*255,0,255))}getHexString(e=Be){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=en.workingColorSpace){en.fromWorkingColorSpace(Rt.copy(this),t);const n=Rt.r,i=Rt.g,r=Rt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=en.workingColorSpace){return en.fromWorkingColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=Be){en.fromWorkingColorSpace(Rt.copy(this),e);const t=Rt.r,n=Rt.g,i=Rt.b;return e!==Be?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(on),on.h+=e,on.s+=t,on.l+=n,this.setHSL(on.h,on.s,on.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(on),e.getHSL(to);const n=Qs(on.h,to.h,t),i=Qs(on.s,to.s,t),r=Qs(on.l,to.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rt=new fe;fe.NAMES=Sf;class ai extends Lt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Rr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dn=w0();function w0(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,u=0;for(;(l&8388608)===0;)l<<=1,u-=8388608;l&=-8388609,u+=947912704,r[c]=l|u}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function Gt(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=lt(s,-65504,65504),Dn.floatView[0]=s;const e=Dn.uint32View[0],t=e>>23&511;return Dn.baseTable[t]+((e&8388607)>>Dn.shiftTable[t])}function Js(s){const e=s>>10;return Dn.uint32View[0]=Dn.mantissaTable[Dn.offsetTable[e]+(s&1023)]+Dn.exponentTable[e],Dn.floatView[0]}const R0={toHalfFloat:Gt,fromHalfFloat:Js},_t=new S,no=new Z;class Qe{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=dr,this.updateRange={offset:0,count:-1},this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)no.fromBufferAttribute(this,t),no.applyMatrix3(e),this.setXY(t,no.x,no.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ge(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ge(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ge(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ge(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ge(t,this.array),n=Ge(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ge(t,this.array),n=Ge(n,this.array),i=Ge(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ge(t,this.array),n=Ge(n,this.array),i=Ge(i,this.array),r=Ge(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dr&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class C0 extends Qe{constructor(e,t,n){super(new Int8Array(e),t,n)}}class I0 extends Qe{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class L0 extends Qe{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class P0 extends Qe{constructor(e,t,n){super(new Int16Array(e),t,n)}}class Dl extends Qe{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class O0 extends Qe{constructor(e,t,n){super(new Int32Array(e),t,n)}}class Nl extends Qe{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class U0 extends Qe{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=Js(this.array[e*this.itemSize]);return this.normalized&&(t=Zt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ge(t,this.array)),this.array[e*this.itemSize]=Gt(t),this}getY(e){let t=Js(this.array[e*this.itemSize+1]);return this.normalized&&(t=Zt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ge(t,this.array)),this.array[e*this.itemSize+1]=Gt(t),this}getZ(e){let t=Js(this.array[e*this.itemSize+2]);return this.normalized&&(t=Zt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ge(t,this.array)),this.array[e*this.itemSize+2]=Gt(t),this}getW(e){let t=Js(this.array[e*this.itemSize+3]);return this.normalized&&(t=Zt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ge(t,this.array)),this.array[e*this.itemSize+3]=Gt(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ge(t,this.array),n=Ge(n,this.array)),this.array[e+0]=Gt(t),this.array[e+1]=Gt(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ge(t,this.array),n=Ge(n,this.array),i=Ge(i,this.array)),this.array[e+0]=Gt(t),this.array[e+1]=Gt(n),this.array[e+2]=Gt(i),this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ge(t,this.array),n=Ge(n,this.array),i=Ge(i,this.array),r=Ge(r,this.array)),this.array[e+0]=Gt(t),this.array[e+1]=Gt(n),this.array[e+2]=Gt(i),this.array[e+3]=Gt(r),this}}class _e extends Qe{constructor(e,t,n){super(new Float32Array(e),t,n)}}class D0 extends Qe{constructor(e,t,n){super(new Float64Array(e),t,n)}}let N0=0;const jt=new Ue,$a=new $e,es=new S,Xt=new Tn,Vs=new Tn,Mt=new S;class Ve extends Hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=$t(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tf(e)?Nl:Dl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,n){return jt.makeTranslation(e,t,n),this.applyMatrix4(jt),this}scale(e,t,n){return jt.makeScale(e,t,n),this.applyMatrix4(jt),this}lookAt(e){return $a.lookAt(e),$a.updateMatrix(),this.applyMatrix4($a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new _e(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Xt.setFromBufferAttribute(r),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new S,1/0);return}if(e){const n=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Vs.setFromBufferAttribute(a),this.morphTargetsRelative?(Mt.addVectors(Xt.min,Vs.min),Xt.expandByPoint(Mt),Mt.addVectors(Xt.max,Vs.max),Xt.expandByPoint(Mt)):(Xt.expandByPoint(Vs.min),Xt.expandByPoint(Vs.max))}Xt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Mt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Mt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Mt.fromBufferAttribute(a,l),c&&(es.fromBufferAttribute(e,l),Mt.add(es)),i=Math.max(i,n.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qe(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let w=0;w<a;w++)l[w]=new S,u[w]=new S;const h=new S,d=new S,f=new S,m=new Z,_=new Z,g=new Z,p=new S,x=new S;function v(w,N,$){h.fromArray(i,w*3),d.fromArray(i,N*3),f.fromArray(i,$*3),m.fromArray(o,w*2),_.fromArray(o,N*2),g.fromArray(o,$*2),d.sub(h),f.sub(h),_.sub(m),g.sub(m);const D=1/(_.x*g.y-g.x*_.y);!isFinite(D)||(p.copy(d).multiplyScalar(g.y).addScaledVector(f,-_.y).multiplyScalar(D),x.copy(f).multiplyScalar(_.x).addScaledVector(d,-g.x).multiplyScalar(D),l[w].add(p),l[N].add(p),l[$].add(p),u[w].add(x),u[N].add(x),u[$].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let w=0,N=y.length;w<N;++w){const $=y[w],D=$.start,B=$.count;for(let F=D,J=D+B;F<J;F+=3)v(n[F+0],n[F+1],n[F+2])}const b=new S,T=new S,C=new S,I=new S;function M(w){C.fromArray(r,w*3),I.copy(C);const N=l[w];b.copy(N),b.sub(C.multiplyScalar(C.dot(N))).normalize(),T.crossVectors(I,N);const D=T.dot(u[w])<0?-1:1;c[w*4]=b.x,c[w*4+1]=b.y,c[w*4+2]=b.z,c[w*4+3]=D}for(let w=0,N=y.length;w<N;++w){const $=y[w],D=$.start,B=$.count;for(let F=D,J=D+B;F<J;F+=3)M(n[F+0]),M(n[F+1]),M(n[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qe(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new S,r=new S,o=new S,a=new S,c=new S,l=new S,u=new S,h=new S;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(u),c.add(u),l.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,m=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let p=0;p<u;p++)d[m++]=l[f++]}return new Qe(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ve,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nu=new Ue,mi=new Is,io=new dn,Bu=new S,ts=new S,ns=new S,is=new S,Ja=new S,so=new S,ro=new Z,oo=new Z,ao=new Z,Fu=new S,zu=new S,ku=new S,co=new S,lo=new S;class At extends $e{constructor(e=new Ve,t=new ai){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){so.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(Ja.fromBufferAttribute(h,e),o?so.addScaledVector(Ja,u):so.addScaledVector(Ja.sub(t),u))}t.add(so)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(r),mi.copy(e.ray).recast(e.near),!(io.containsPoint(mi.origin)===!1&&(mi.intersectSphere(io,Bu)===null||mi.origin.distanceToSquared(Bu)>(e.far-e.near)**2))&&(Nu.copy(r).invert(),mi.copy(e.ray).applyMatrix4(Nu),!(n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,mi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=o[g.materialIndex],x=Math.max(g.start,f.start),v=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let y=x,b=v;y<b;y+=3){const T=a.getX(y),C=a.getX(y+1),I=a.getX(y+2);i=uo(this,p,e,n,l,u,h,T,C,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const x=a.getX(g),v=a.getX(g+1),y=a.getX(g+2);i=uo(this,o,e,n,l,u,h,x,v,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=o[g.materialIndex],x=Math.max(g.start,f.start),v=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let y=x,b=v;y<b;y+=3){const T=y,C=y+1,I=y+2;i=uo(this,p,e,n,l,u,h,T,C,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const x=g,v=g+1,y=g+2;i=uo(this,o,e,n,l,u,h,x,v,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function B0(s,e,t,n,i,r,o,a){let c;if(e.side===zt?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===Gn,a),c===null)return null;lo.copy(a),lo.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(lo);return l<t.near||l>t.far?null:{distance:l,point:lo.clone(),object:s}}function uo(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,ts),s.getVertexPosition(c,ns),s.getVertexPosition(l,is);const u=B0(s,e,t,n,ts,ns,is,co);if(u){i&&(ro.fromBufferAttribute(i,a),oo.fromBufferAttribute(i,c),ao.fromBufferAttribute(i,l),u.uv=Ft.getInterpolation(co,ts,ns,is,ro,oo,ao,new Z)),r&&(ro.fromBufferAttribute(r,a),oo.fromBufferAttribute(r,c),ao.fromBufferAttribute(r,l),u.uv1=Ft.getInterpolation(co,ts,ns,is,ro,oo,ao,new Z),u.uv2=u.uv1),o&&(Fu.fromBufferAttribute(o,a),zu.fromBufferAttribute(o,c),ku.fromBufferAttribute(o,l),u.normal=Ft.getInterpolation(co,ts,ns,is,Fu,zu,ku,new S),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new S,materialIndex:0};Ft.getNormal(ts,ns,is,h.normal),u.face=h}return u}class ci extends Ve{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new _e(l,3)),this.setAttribute("normal",new _e(u,3)),this.setAttribute("uv",new _e(h,2));function m(_,g,p,x,v,y,b,T,C,I,M){const w=y/C,N=b/I,$=y/2,D=b/2,B=T/2,F=C+1,J=I+1;let q=0,Y=0;const K=new S;for(let Q=0;Q<J;Q++){const de=Q*N-D;for(let k=0;k<F;k++){const ee=k*w-$;K[_]=ee*x,K[g]=de*v,K[p]=B,l.push(K.x,K.y,K.z),K[_]=0,K[g]=0,K[p]=T>0?1:-1,u.push(K.x,K.y,K.z),h.push(k/C),h.push(1-Q/I),q+=1}}for(let Q=0;Q<I;Q++)for(let de=0;de<C;de++){const k=d+de+F*Q,ee=d+de+F*(Q+1),te=d+(de+1)+F*(Q+1),me=d+(de+1)+F*Q;c.push(k,ee,me),c.push(ee,te,me),Y+=6}a.addGroup(f,Y,M),f+=Y,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ci(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function As(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Bt(s){const e={};for(let t=0;t<s.length;t++){const n=As(s[t]);for(const i in n)e[i]=n[i]}return e}function F0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Af(s){return s.getRenderTarget()===null?s.outputColorSpace:un}const wf={clone:As,merge:Bt};var z0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,k0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends Lt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=z0,this.fragmentShader=k0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=As(e.uniforms),this.uniformsGroups=F0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class fa extends $e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=yn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class St extends fa{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ss*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ss*2*Math.atan(Math.tan(Pi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Pi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ss=-90,rs=1;class Rf extends $e{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const i=new St(ss,rs,e,t);i.layers=this.layers,this.add(i);const r=new St(ss,rs,e,t);r.layers=this.layers,this.add(r);const o=new St(ss,rs,e,t);o.layers=this.layers,this.add(o);const a=new St(ss,rs,e,t);a.layers=this.layers,this.add(a);const c=new St(ss,rs,e,t);c.layers=this.layers,this.add(c);const l=new St(ss,rs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===yn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,r,o,a,c,l]=this.children,u=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=Mn,e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=f,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Ir extends pt{constructor(e,t,n,i,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:ti,super(e,t,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Cf extends hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(er("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===jn?Be:Qn),this.texture=new Ir(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ft}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ci(5,5,5),r=new bn({name:"CubemapFromEquirect",uniforms:As(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zt,blending:zn});r.uniforms.tEquirect.value=t;const o=new At(i,r),a=t.minFilter;return t.minFilter===ii&&(t.minFilter=ft),new Rf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Ka=new S,G0=new S,V0=new ke;class Un{constructor(e=new S(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ka.subVectors(n,t).cross(G0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ka),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||V0.getNormalMatrix(e),i=this.coplanarPoint(Ka).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gi=new dn,ho=new S;class pa{constructor(e=new Un,t=new Un,n=new Un,i=new Un,r=new Un,o=new Un){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=yn){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],u=i[5],h=i[6],d=i[7],f=i[8],m=i[9],_=i[10],g=i[11],p=i[12],x=i[13],v=i[14],y=i[15];if(n[0].setComponents(c-r,d-l,g-f,y-p).normalize(),n[1].setComponents(c+r,d+l,g+f,y+p).normalize(),n[2].setComponents(c+o,d+u,g+m,y+x).normalize(),n[3].setComponents(c-o,d-u,g-m,y-x).normalize(),n[4].setComponents(c-a,d-h,g-_,y-v).normalize(),t===yn)n[5].setComponents(c+a,d+h,g+_,y+v).normalize();else if(t===fr)n[5].setComponents(a,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(e){return gi.center.set(0,0,0),gi.radius=.7071067811865476,gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ho.x=i.normal.x>0?e.max.x:e.min.x,ho.y=i.normal.y>0?e.max.y:e.min.y,ho.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ho)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function If(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function H0(s,e){const t=e.isWebGL2,n=new WeakMap;function i(l,u){const h=l.array,d=l.usage,f=s.createBuffer();s.bindBuffer(u,f),s.bufferData(u,h,d),l.onUploadCallback();let m;if(h instanceof Float32Array)m=s.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)m=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else m=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)m=s.SHORT;else if(h instanceof Uint32Array)m=s.UNSIGNED_INT;else if(h instanceof Int32Array)m=s.INT;else if(h instanceof Int8Array)m=s.BYTE;else if(h instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function r(l,u,h){const d=u.array,f=u.updateRange;s.bindBuffer(h,l),f.count===-1?s.bufferSubData(h,0,d):(t?s.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(s.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h===void 0?n.set(l,i(l,u)):h.version<l.version&&(r(h.buffer,l,u),h.version=l.version)}return{get:o,remove:a,update:c}}class Ls extends Ve{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=e/a,d=t/c,f=[],m=[],_=[],g=[];for(let p=0;p<u;p++){const x=p*d-o;for(let v=0;v<l;v++){const y=v*h-r;m.push(y,-x,0),_.push(0,0,1),g.push(v/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<a;x++){const v=x+l*p,y=x+l*(p+1),b=x+1+l*(p+1),T=x+1+l*p;f.push(v,y,T),f.push(y,b,T)}this.setIndex(f),this.setAttribute("position",new _e(m,3)),this.setAttribute("normal",new _e(_,3)),this.setAttribute("uv",new _e(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ls(e.width,e.height,e.widthSegments,e.heightSegments)}}var W0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,q0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Y0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Z0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,J0="vec3 transformed = vec3( position );",K0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,j0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Q0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,eg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,tg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,ng=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,og=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ag=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,cg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,lg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ug=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hg=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gg="gl_FragColor = linearToOutputTexel( gl_FragColor );",_g=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Mg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Eg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ag=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Rg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Cg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ig=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Og=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ug=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ng=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,zg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kg=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Vg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Hg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Xg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Yg=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Zg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$g=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Jg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,e_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,t_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,n_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,i_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,s_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,r_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,c_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,l_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,u_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,h_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,d_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,f_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,p_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,m_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,g_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,__=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,v_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,x_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,y_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,M_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,E_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,b_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,T_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,S_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,A_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,w_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,R_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,C_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,I_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,L_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,P_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,O_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,U_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,D_=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,N_=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,B_=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,F_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const z_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,k_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,G_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,H_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,q_=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,X_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Y_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Z_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,J_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,K_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,j_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Q_=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ev=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ov=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,av=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,uv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,pv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mv=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,_v=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ze={alphamap_fragment:W0,alphamap_pars_fragment:q0,alphatest_fragment:X0,alphatest_pars_fragment:Y0,aomap_fragment:Z0,aomap_pars_fragment:$0,begin_vertex:J0,beginnormal_vertex:K0,bsdfs:j0,iridescence_fragment:Q0,bumpmap_pars_fragment:eg,clipping_planes_fragment:tg,clipping_planes_pars_fragment:ng,clipping_planes_pars_vertex:ig,clipping_planes_vertex:sg,color_fragment:rg,color_pars_fragment:og,color_pars_vertex:ag,color_vertex:cg,common:lg,cube_uv_reflection_fragment:ug,defaultnormal_vertex:hg,displacementmap_pars_vertex:dg,displacementmap_vertex:fg,emissivemap_fragment:pg,emissivemap_pars_fragment:mg,encodings_fragment:gg,encodings_pars_fragment:_g,envmap_fragment:vg,envmap_common_pars_fragment:xg,envmap_pars_fragment:yg,envmap_pars_vertex:Mg,envmap_physical_pars_fragment:Og,envmap_vertex:Eg,fog_vertex:bg,fog_pars_vertex:Tg,fog_fragment:Sg,fog_pars_fragment:Ag,gradientmap_pars_fragment:wg,lightmap_fragment:Rg,lightmap_pars_fragment:Cg,lights_lambert_fragment:Ig,lights_lambert_pars_fragment:Lg,lights_pars_begin:Pg,lights_toon_fragment:Ug,lights_toon_pars_fragment:Dg,lights_phong_fragment:Ng,lights_phong_pars_fragment:Bg,lights_physical_fragment:Fg,lights_physical_pars_fragment:zg,lights_fragment_begin:kg,lights_fragment_maps:Gg,lights_fragment_end:Vg,logdepthbuf_fragment:Hg,logdepthbuf_pars_fragment:Wg,logdepthbuf_pars_vertex:qg,logdepthbuf_vertex:Xg,map_fragment:Yg,map_pars_fragment:Zg,map_particle_fragment:$g,map_particle_pars_fragment:Jg,metalnessmap_fragment:Kg,metalnessmap_pars_fragment:jg,morphcolor_vertex:Qg,morphnormal_vertex:e_,morphtarget_pars_vertex:t_,morphtarget_vertex:n_,normal_fragment_begin:i_,normal_fragment_maps:s_,normal_pars_fragment:r_,normal_pars_vertex:o_,normal_vertex:a_,normalmap_pars_fragment:c_,clearcoat_normal_fragment_begin:l_,clearcoat_normal_fragment_maps:u_,clearcoat_pars_fragment:h_,iridescence_pars_fragment:d_,output_fragment:f_,packing:p_,premultiplied_alpha_fragment:m_,project_vertex:g_,dithering_fragment:__,dithering_pars_fragment:v_,roughnessmap_fragment:x_,roughnessmap_pars_fragment:y_,shadowmap_pars_fragment:M_,shadowmap_pars_vertex:E_,shadowmap_vertex:b_,shadowmask_pars_fragment:T_,skinbase_vertex:S_,skinning_pars_vertex:A_,skinning_vertex:w_,skinnormal_vertex:R_,specularmap_fragment:C_,specularmap_pars_fragment:I_,tonemapping_fragment:L_,tonemapping_pars_fragment:P_,transmission_fragment:O_,transmission_pars_fragment:U_,uv_pars_fragment:D_,uv_pars_vertex:N_,uv_vertex:B_,worldpos_vertex:F_,background_vert:z_,background_frag:k_,backgroundCube_vert:G_,backgroundCube_frag:V_,cube_vert:H_,cube_frag:W_,depth_vert:q_,depth_frag:X_,distanceRGBA_vert:Y_,distanceRGBA_frag:Z_,equirect_vert:$_,equirect_frag:J_,linedashed_vert:K_,linedashed_frag:j_,meshbasic_vert:Q_,meshbasic_frag:ev,meshlambert_vert:tv,meshlambert_frag:nv,meshmatcap_vert:iv,meshmatcap_frag:sv,meshnormal_vert:rv,meshnormal_frag:ov,meshphong_vert:av,meshphong_frag:cv,meshphysical_vert:lv,meshphysical_frag:uv,meshtoon_vert:hv,meshtoon_frag:dv,points_vert:fv,points_frag:pv,shadow_vert:mv,shadow_frag:gv,sprite_vert:_v,sprite_frag:vv},ae={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Z(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new Z(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},ln={basic:{uniforms:Bt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Bt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new fe(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Bt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Bt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Bt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new fe(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Bt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Bt([ae.points,ae.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Bt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Bt([ae.common,ae.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Bt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Bt([ae.sprite,ae.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Bt([ae.common,ae.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Bt([ae.lights,ae.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};ln.physical={uniforms:Bt([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Z(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Z},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const fo={r:0,b:0,g:0};function xv(s,e,t,n,i,r,o){const a=new fe(0);let c=r===!0?0:1,l,u,h=null,d=0,f=null;function m(g,p){let x=!1,v=p.isScene===!0?p.background:null;switch(v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,c):v&&v.isColor&&(_(v,1),x=!0),s.xr.getEnvironmentBlendMode()){case"opaque":x=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,o),x=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,o),x=!0;break}(s.autoClear||x)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Cs)?(u===void 0&&(u=new At(new ci(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:As(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,C,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=v.colorSpace!==Be,(h!==v||d!==v.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,f=s.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new At(new Ls(2,2),new bn({name:"BackgroundMaterial",uniforms:As(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=v.colorSpace!==Be,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,f=s.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function _(g,p){g.getRGB(fo,Af(s)),n.buffers.color.setClear(fo.r,fo.g,fo.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(g,p=1){a.set(g),c=p,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,_(a,c)},render:m}}function yv(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=g(null);let l=c,u=!1;function h(B,F,J,q,Y){let K=!1;if(o){const Q=_(q,J,F);l!==Q&&(l=Q,f(l.object)),K=p(B,q,J,Y),K&&x(B,q,J,Y)}else{const Q=F.wireframe===!0;(l.geometry!==q.id||l.program!==J.id||l.wireframe!==Q)&&(l.geometry=q.id,l.program=J.id,l.wireframe=Q,K=!0)}Y!==null&&t.update(Y,s.ELEMENT_ARRAY_BUFFER),(K||u)&&(u=!1,I(B,F,J,q),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(B){return n.isWebGL2?s.bindVertexArray(B):r.bindVertexArrayOES(B)}function m(B){return n.isWebGL2?s.deleteVertexArray(B):r.deleteVertexArrayOES(B)}function _(B,F,J){const q=J.wireframe===!0;let Y=a[B.id];Y===void 0&&(Y={},a[B.id]=Y);let K=Y[F.id];K===void 0&&(K={},Y[F.id]=K);let Q=K[q];return Q===void 0&&(Q=g(d()),K[q]=Q),Q}function g(B){const F=[],J=[],q=[];for(let Y=0;Y<i;Y++)F[Y]=0,J[Y]=0,q[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:J,attributeDivisors:q,object:B,attributes:{},index:null}}function p(B,F,J,q){const Y=l.attributes,K=F.attributes;let Q=0;const de=J.getAttributes();for(const k in de)if(de[k].location>=0){const te=Y[k];let me=K[k];if(me===void 0&&(k==="instanceMatrix"&&B.instanceMatrix&&(me=B.instanceMatrix),k==="instanceColor"&&B.instanceColor&&(me=B.instanceColor)),te===void 0||te.attribute!==me||me&&te.data!==me.data)return!0;Q++}return l.attributesNum!==Q||l.index!==q}function x(B,F,J,q){const Y={},K=F.attributes;let Q=0;const de=J.getAttributes();for(const k in de)if(de[k].location>=0){let te=K[k];te===void 0&&(k==="instanceMatrix"&&B.instanceMatrix&&(te=B.instanceMatrix),k==="instanceColor"&&B.instanceColor&&(te=B.instanceColor));const me={};me.attribute=te,te&&te.data&&(me.data=te.data),Y[k]=me,Q++}l.attributes=Y,l.attributesNum=Q,l.index=q}function v(){const B=l.newAttributes;for(let F=0,J=B.length;F<J;F++)B[F]=0}function y(B){b(B,0)}function b(B,F){const J=l.newAttributes,q=l.enabledAttributes,Y=l.attributeDivisors;J[B]=1,q[B]===0&&(s.enableVertexAttribArray(B),q[B]=1),Y[B]!==F&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,F),Y[B]=F)}function T(){const B=l.newAttributes,F=l.enabledAttributes;for(let J=0,q=F.length;J<q;J++)F[J]!==B[J]&&(s.disableVertexAttribArray(J),F[J]=0)}function C(B,F,J,q,Y,K,Q){Q===!0?s.vertexAttribIPointer(B,F,J,Y,K):s.vertexAttribPointer(B,F,J,q,Y,K)}function I(B,F,J,q){if(n.isWebGL2===!1&&(B.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const Y=q.attributes,K=J.getAttributes(),Q=F.defaultAttributeValues;for(const de in K){const k=K[de];if(k.location>=0){let ee=Y[de];if(ee===void 0&&(de==="instanceMatrix"&&B.instanceMatrix&&(ee=B.instanceMatrix),de==="instanceColor"&&B.instanceColor&&(ee=B.instanceColor)),ee!==void 0){const te=ee.normalized,me=ee.itemSize,ge=t.get(ee);if(ge===void 0)continue;const Ee=ge.buffer,De=ge.type,Ce=ge.bytesPerElement,Ke=n.isWebGL2===!0&&(De===s.INT||De===s.UNSIGNED_INT||ee.gpuType===bl);if(ee.isInterleavedBufferAttribute){const Le=ee.data,L=Le.stride,se=ee.offset;if(Le.isInstancedInterleavedBuffer){for(let X=0;X<k.locationSize;X++)b(k.location+X,Le.meshPerAttribute);B.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Le.meshPerAttribute*Le.count)}else for(let X=0;X<k.locationSize;X++)y(k.location+X);s.bindBuffer(s.ARRAY_BUFFER,Ee);for(let X=0;X<k.locationSize;X++)C(k.location+X,me/k.locationSize,De,te,L*Ce,(se+me/k.locationSize*X)*Ce,Ke)}else{if(ee.isInstancedBufferAttribute){for(let Le=0;Le<k.locationSize;Le++)b(k.location+Le,ee.meshPerAttribute);B.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Le=0;Le<k.locationSize;Le++)y(k.location+Le);s.bindBuffer(s.ARRAY_BUFFER,Ee);for(let Le=0;Le<k.locationSize;Le++)C(k.location+Le,me/k.locationSize,De,te,me*Ce,me/k.locationSize*Le*Ce,Ke)}}else if(Q!==void 0){const te=Q[de];if(te!==void 0)switch(te.length){case 2:s.vertexAttrib2fv(k.location,te);break;case 3:s.vertexAttrib3fv(k.location,te);break;case 4:s.vertexAttrib4fv(k.location,te);break;default:s.vertexAttrib1fv(k.location,te)}}}}T()}function M(){$();for(const B in a){const F=a[B];for(const J in F){const q=F[J];for(const Y in q)m(q[Y].object),delete q[Y];delete F[J]}delete a[B]}}function w(B){if(a[B.id]===void 0)return;const F=a[B.id];for(const J in F){const q=F[J];for(const Y in q)m(q[Y].object),delete q[Y];delete F[J]}delete a[B.id]}function N(B){for(const F in a){const J=a[F];if(J[B.id]===void 0)continue;const q=J[B.id];for(const Y in q)m(q[Y].object),delete q[Y];delete J[B.id]}}function $(){D(),u=!0,l!==c&&(l=c,f(l.object))}function D(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:$,resetDefaultState:D,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:N,initAttributes:v,enableAttribute:y,disableUnusedAttributes:T}}function Mv(s,e,t,n){const i=n.isWebGL2;let r;function o(l){r=l}function a(l,u){s.drawArrays(r,l,u),t.update(u,r,1)}function c(l,u,h){if(h===0)return;let d,f;if(i)d=s,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](r,l,u,h),t.update(u,r,h)}this.setMode=o,this.render=a,this.renderInstances=c}function Ev(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),g=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,y=o||e.has("OES_texture_float"),b=v&&y,T=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:m,maxAttributes:_,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:b,maxSamples:T}}function bv(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Un,a=new ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const m=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,p=s.get(h);if(!i||m===null||m.length===0||r&&!g)r?u(null):l();else{const x=r?0:n,v=x*4;let y=p.clippingState||null;c.value=y,y=u(m,d,v,f);for(let b=0;b!==v;++b)y[b]=t[b];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,m){const _=h!==null?h.length:0;let g=null;if(_!==0){if(g=c.value,m!==!0||g===null){const p=f+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,y=f;v!==_;++v,y+=4)o.copy(h[v]).applyMatrix4(x,a),o.normal.toArray(g,y),g[y+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function Tv(s){let e=new WeakMap;function t(o,a){return a===rr?o.mapping=ti:a===or&&(o.mapping=ni),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===rr||a===or)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Cf(c.height/2);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class ma extends fa{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const vs=4,Gu=[.125,.215,.35,.446,.526,.582],Si=20,ja=new ma,Vu=new fe;let Qa=null;const Ei=(1+Math.sqrt(5))/2,os=1/Ei,Hu=[new S(1,1,1),new S(-1,1,1),new S(1,1,-1),new S(-1,1,-1),new S(0,Ei,os),new S(0,Ei,-os),new S(os,0,Ei),new S(-os,0,Ei),new S(Ei,os,0),new S(-Ei,os,0)];class el{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Qa=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qa),e.scissorTest=!1,po(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ti||e.mapping===ni?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qa=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ft,minFilter:ft,generateMipmaps:!1,type:Ts,format:Yt,colorSpace:un,depthBuffer:!1},i=Wu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wu(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sv(r)),this._blurMaterial=Av(r,e,t)}return i}_compileMaterial(e){const t=new At(this._lodPlanes[0],e);this._renderer.compile(t,ja)}_sceneToCubeUV(e,t,n,i){const a=new St(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Vu),u.toneMapping=Mn,u.autoClear=!1;const f=new ai({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),m=new At(new ci,f);let _=!1;const g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,_=!0):(f.color.copy(Vu),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):x===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const v=this._cubeSize;po(i,x*v,p>2?v:0,v,v),u.setRenderTarget(i),_&&u.render(m,a),u.render(e,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ti||e.mapping===ni;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qu());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new At(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;po(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,ja)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Hu[(i-1)%Hu.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new At(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Si-1),_=r/m,g=isFinite(r)?1+Math.floor(u*_):Si;g>Si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Si}`);const p=[];let x=0;for(let C=0;C<Si;++C){const I=C/_,M=Math.exp(-I*I/2);p.push(M),C===0?x+=M:C<g&&(x+=2*M)}for(let C=0;C<p.length;C++)p[C]=p[C]/x;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=m,d.mipInt.value=v-n;const y=this._sizeLods[i],b=3*y*(i>v-vs?i-v+vs:0),T=4*(this._cubeSize-y);po(t,b,T,3*y,2*y),c.setRenderTarget(t),c.render(h,ja)}}function Sv(s){const e=[],t=[],n=[];let i=s;const r=s-vs+1+Gu.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-vs?c=Gu[o-s+vs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,m=6,_=3,g=2,p=1,x=new Float32Array(_*m*f),v=new Float32Array(g*m*f),y=new Float32Array(p*m*f);for(let T=0;T<f;T++){const C=T%3*2/3-1,I=T>2?0:-1,M=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];x.set(M,_*m*T),v.set(d,g*m*T);const w=[T,T,T,T,T,T];y.set(w,p*m*T)}const b=new Ve;b.setAttribute("position",new Qe(x,_)),b.setAttribute("uv",new Qe(v,g)),b.setAttribute("faceIndex",new Qe(y,p)),e.push(b),i>vs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Wu(s,e,t){const n=new hn(s,e,t);return n.texture.mapping=Cs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function po(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Av(s,e,t){const n=new Float32Array(Si),i=new S(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function qu(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Xu(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Bl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wv(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===rr||c===or,u=c===ti||c===ni;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new el(s)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(l&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new el(s));const d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Rv(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Cv(s,e,t,n){const i={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);for(const m in d.morphAttributes){const _=d.morphAttributes[m];for(let g=0,p=_.length;g<p;g++)e.remove(_[g])}d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const m in d)e.update(d[m],s.ARRAY_BUFFER);const f=h.morphAttributes;for(const m in f){const _=f[m];for(let g=0,p=_.length;g<p;g++)e.update(_[g],s.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,m=h.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let v=0,y=x.length;v<y;v+=3){const b=x[v+0],T=x[v+1],C=x[v+2];d.push(b,T,T,C,C,b)}}else{const x=m.array;_=m.version;for(let v=0,y=x.length/3-1;v<y;v+=3){const b=v+0,T=v+1,C=v+2;d.push(b,T,T,C,C,b)}}const g=new(Tf(d)?Nl:Dl)(d,1);g.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,g)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Iv(s,e,t,n){const i=n.isWebGL2;let r;function o(d){r=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function u(d,f){s.drawElements(r,f,a,d*c),t.update(f,r,1)}function h(d,f,m){if(m===0)return;let _,g;if(i)_=s,g="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[g](r,f,a,d*c,m),t.update(f,r,m)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h}function Lv(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Pv(s,e){return s[0]-e[0]}function Ov(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Uv(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new Je,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=f!==void 0?f.length:0;let _=r.get(u);if(_===void 0||_.count!==m){let B=function(){$.dispose(),r.delete(u),u.removeEventListener("dispose",B)};_!==void 0&&_.texture.dispose();const x=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,b=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let I=0;x===!0&&(I=1),v===!0&&(I=2),y===!0&&(I=3);let M=u.attributes.position.count*I,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const N=new Float32Array(M*w*4*m),$=new ha(N,M,w,m);$.type=xn,$.needsUpdate=!0;const D=I*4;for(let F=0;F<m;F++){const J=b[F],q=T[F],Y=C[F],K=M*w*4*F;for(let Q=0;Q<J.count;Q++){const de=Q*D;x===!0&&(o.fromBufferAttribute(J,Q),N[K+de+0]=o.x,N[K+de+1]=o.y,N[K+de+2]=o.z,N[K+de+3]=0),v===!0&&(o.fromBufferAttribute(q,Q),N[K+de+4]=o.x,N[K+de+5]=o.y,N[K+de+6]=o.z,N[K+de+7]=0),y===!0&&(o.fromBufferAttribute(Y,Q),N[K+de+8]=o.x,N[K+de+9]=o.y,N[K+de+10]=o.z,N[K+de+11]=Y.itemSize===4?o.w:1)}}_={count:m,texture:$,size:new Z(M,w)},r.set(u,_),u.addEventListener("dispose",B)}let g=0;for(let x=0;x<d.length;x++)g+=d[x];const p=u.morphTargetsRelative?1:1-g;h.getUniforms().setValue(s,"morphTargetBaseInfluence",p),h.getUniforms().setValue(s,"morphTargetInfluences",d),h.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{const f=d===void 0?0:d.length;let m=n[u.id];if(m===void 0||m.length!==f){m=[];for(let v=0;v<f;v++)m[v]=[v,0];n[u.id]=m}for(let v=0;v<f;v++){const y=m[v];y[0]=v,y[1]=d[v]}m.sort(Ov);for(let v=0;v<8;v++)v<f&&m[v][1]?(a[v][0]=m[v][0],a[v][1]=m[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(Pv);const _=u.morphAttributes.position,g=u.morphAttributes.normal;let p=0;for(let v=0;v<8;v++){const y=a[v],b=y[0],T=y[1];b!==Number.MAX_SAFE_INTEGER&&T?(_&&u.getAttribute("morphTarget"+v)!==_[b]&&u.setAttribute("morphTarget"+v,_[b]),g&&u.getAttribute("morphNormal"+v)!==g[b]&&u.setAttribute("morphNormal"+v,g[b]),i[v]=T,p+=T):(_&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),g&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const x=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(s,"morphTargetBaseInfluence",x),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function Dv(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);return i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER)),h}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const Lf=new pt,Pf=new ha,Of=new Ul,Uf=new Ir,Yu=[],Zu=[],$u=new Float32Array(16),Ju=new Float32Array(9),Ku=new Float32Array(4);function Ps(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Yu[i];if(r===void 0&&(r=new Float32Array(i),Yu[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function vt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function xt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ga(s,e){let t=Zu[e];t===void 0&&(t=new Int32Array(e),Zu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Nv(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Bv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;s.uniform2fv(this.addr,e),xt(t,e)}}function Fv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;s.uniform3fv(this.addr,e),xt(t,e)}}function zv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;s.uniform4fv(this.addr,e),xt(t,e)}}function kv(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,n))return;Ku.set(n),s.uniformMatrix2fv(this.addr,!1,Ku),xt(t,n)}}function Gv(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,n))return;Ju.set(n),s.uniformMatrix3fv(this.addr,!1,Ju),xt(t,n)}}function Vv(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,n))return;$u.set(n),s.uniformMatrix4fv(this.addr,!1,$u),xt(t,n)}}function Hv(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Wv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;s.uniform2iv(this.addr,e),xt(t,e)}}function qv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;s.uniform3iv(this.addr,e),xt(t,e)}}function Xv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;s.uniform4iv(this.addr,e),xt(t,e)}}function Yv(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Zv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;s.uniform2uiv(this.addr,e),xt(t,e)}}function $v(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;s.uniform3uiv(this.addr,e),xt(t,e)}}function Jv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;s.uniform4uiv(this.addr,e),xt(t,e)}}function Kv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Lf,i)}function jv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Of,i)}function Qv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Uf,i)}function ex(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Pf,i)}function tx(s){switch(s){case 5126:return Nv;case 35664:return Bv;case 35665:return Fv;case 35666:return zv;case 35674:return kv;case 35675:return Gv;case 35676:return Vv;case 5124:case 35670:return Hv;case 35667:case 35671:return Wv;case 35668:case 35672:return qv;case 35669:case 35673:return Xv;case 5125:return Yv;case 36294:return Zv;case 36295:return $v;case 36296:return Jv;case 35678:case 36198:case 36298:case 36306:case 35682:return Kv;case 35679:case 36299:case 36307:return jv;case 35680:case 36300:case 36308:case 36293:return Qv;case 36289:case 36303:case 36311:case 36292:return ex}}function nx(s,e){s.uniform1fv(this.addr,e)}function ix(s,e){const t=Ps(e,this.size,2);s.uniform2fv(this.addr,t)}function sx(s,e){const t=Ps(e,this.size,3);s.uniform3fv(this.addr,t)}function rx(s,e){const t=Ps(e,this.size,4);s.uniform4fv(this.addr,t)}function ox(s,e){const t=Ps(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function ax(s,e){const t=Ps(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function cx(s,e){const t=Ps(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function lx(s,e){s.uniform1iv(this.addr,e)}function ux(s,e){s.uniform2iv(this.addr,e)}function hx(s,e){s.uniform3iv(this.addr,e)}function dx(s,e){s.uniform4iv(this.addr,e)}function fx(s,e){s.uniform1uiv(this.addr,e)}function px(s,e){s.uniform2uiv(this.addr,e)}function mx(s,e){s.uniform3uiv(this.addr,e)}function gx(s,e){s.uniform4uiv(this.addr,e)}function _x(s,e,t){const n=this.cache,i=e.length,r=ga(t,i);vt(n,r)||(s.uniform1iv(this.addr,r),xt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Lf,r[o])}function vx(s,e,t){const n=this.cache,i=e.length,r=ga(t,i);vt(n,r)||(s.uniform1iv(this.addr,r),xt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Of,r[o])}function xx(s,e,t){const n=this.cache,i=e.length,r=ga(t,i);vt(n,r)||(s.uniform1iv(this.addr,r),xt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Uf,r[o])}function yx(s,e,t){const n=this.cache,i=e.length,r=ga(t,i);vt(n,r)||(s.uniform1iv(this.addr,r),xt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Pf,r[o])}function Mx(s){switch(s){case 5126:return nx;case 35664:return ix;case 35665:return sx;case 35666:return rx;case 35674:return ox;case 35675:return ax;case 35676:return cx;case 5124:case 35670:return lx;case 35667:case 35671:return ux;case 35668:case 35672:return hx;case 35669:case 35673:return dx;case 5125:return fx;case 36294:return px;case 36295:return mx;case 36296:return gx;case 35678:case 36198:case 36298:case 36306:case 35682:return _x;case 35679:case 36299:case 36307:return vx;case 35680:case 36300:case 36308:case 36293:return xx;case 36289:case 36303:case 36311:case 36292:return yx}}class Ex{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=tx(t.type)}}class bx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Mx(t.type)}}class Tx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const ec=/(\w+)(\])?(\[|\.)?/g;function ju(s,e){s.seq.push(e),s.map[e.id]=e}function Sx(s,e,t){const n=s.name,i=n.length;for(ec.lastIndex=0;;){const r=ec.exec(n),o=ec.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){ju(t,l===void 0?new Ex(a,s,e):new bx(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new Tx(a),ju(t,h)),t=h}}}class Jo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Sx(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Qu(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let Ax=0;function wx(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Rx(s){switch(s){case un:return["Linear","( value )"];case Be:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),["Linear","( value )"]}}function eh(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+wx(s.getShaderSource(e),o)}else return i}function Cx(s,e){const t=Rx(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Ix(s,e){let t;switch(e){case Yd:t="Linear";break;case Zd:t="Reinhard";break;case $d:t="OptimizedCineon";break;case Jd:t="ACESFilmic";break;case Kd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Lx(s){return[s.extensionDerivatives||!!s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ks).join(`
`)}function Px(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ox(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Ks(s){return s!==""}function th(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nh(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ux=/^[ \t]*#include +<([\w\d./]+)>/gm;function tl(s){return s.replace(Ux,Dx)}function Dx(s,e){const t=ze[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return tl(t)}const Nx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ih(s){return s.replace(Nx,Bx)}function Bx(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function sh(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Fx(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===xl?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Sd?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===gn&&(e="SHADOWMAP_TYPE_VSM"),e}function zx(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ti:case ni:e="ENVMAP_TYPE_CUBE";break;case Cs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function kx(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ni:e="ENVMAP_MODE_REFRACTION";break}return e}function Gx(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Rr:e="ENVMAP_BLENDING_MULTIPLY";break;case qd:e="ENVMAP_BLENDING_MIX";break;case Xd:e="ENVMAP_BLENDING_ADD";break}return e}function Vx(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Hx(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Fx(t),l=zx(t),u=kx(t),h=Gx(t),d=Vx(t),f=t.isWebGL2?"":Lx(t),m=Px(r),_=i.createProgram();let g,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ks).join(`
`),g.length>0&&(g+=`
`),p=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ks).join(`
`),p.length>0&&(p+=`
`)):(g=[sh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),p=[f,sh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mn?"#define TONE_MAPPING":"",t.toneMapping!==Mn?ze.tonemapping_pars_fragment:"",t.toneMapping!==Mn?Ix("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.encodings_pars_fragment,Cx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ks).join(`
`)),o=tl(o),o=th(o,t),o=nh(o,t),a=tl(a),a=th(a,t),a=nh(a,t),o=ih(o),a=ih(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=x+g+o,y=x+p+a,b=Qu(i,i.VERTEX_SHADER,v),T=Qu(i,i.FRAGMENT_SHADER,y);if(i.attachShader(_,b),i.attachShader(_,T),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),s.debug.checkShaderErrors){const M=i.getProgramInfoLog(_).trim(),w=i.getShaderInfoLog(b).trim(),N=i.getShaderInfoLog(T).trim();let $=!0,D=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,b,T);else{const B=eh(i,b,"vertex"),F=eh(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+B+`
`+F)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(w===""||N==="")&&(D=!1);D&&(this.diagnostics={runnable:$,programLog:M,vertexShader:{log:w,prefix:g},fragmentShader:{log:N,prefix:p}})}i.deleteShader(b),i.deleteShader(T);let C;this.getUniforms=function(){return C===void 0&&(C=new Jo(i,_)),C};let I;return this.getAttributes=function(){return I===void 0&&(I=Ox(i,_)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ax++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=T,this}let Wx=0;class qx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Xx(e),t.set(e,n)),n}}class Xx{constructor(e){this.id=Wx++,this.code=e,this.usedTimes=0}}function Yx(s,e,t,n,i,r,o){const a=new da,c=new qx,l=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function g(M,w,N,$,D){const B=$.fog,F=D.geometry,J=M.isMeshStandardMaterial?$.environment:null,q=(M.isMeshStandardMaterial?t:e).get(M.envMap||J),Y=!!q&&q.mapping===Cs?q.image.height:null,K=m[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const Q=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,de=Q!==void 0?Q.length:0;let k=0;F.morphAttributes.position!==void 0&&(k=1),F.morphAttributes.normal!==void 0&&(k=2),F.morphAttributes.color!==void 0&&(k=3);let ee,te,me,ge;if(K){const mt=ln[K];ee=mt.vertexShader,te=mt.fragmentShader}else ee=M.vertexShader,te=M.fragmentShader,c.update(M),me=c.getVertexShaderID(M),ge=c.getFragmentShaderID(M);const Ee=s.getRenderTarget(),De=D.isInstancedMesh===!0,Ce=!!M.map,Ke=!!M.matcap,Le=!!q,L=!!M.aoMap,se=!!M.lightMap,X=!!M.bumpMap,re=!!M.normalMap,j=!!M.displacementMap,be=!!M.emissiveMap,pe=!!M.metalnessMap,ve=!!M.roughnessMap,Oe=M.anisotropy>0,qe=M.clearcoat>0,st=M.iridescence>0,R=M.sheen>0,E=M.transmission>0,G=Oe&&!!M.anisotropyMap,ne=qe&&!!M.clearcoatMap,ie=qe&&!!M.clearcoatNormalMap,ce=qe&&!!M.clearcoatRoughnessMap,Te=st&&!!M.iridescenceMap,le=st&&!!M.iridescenceThicknessMap,W=R&&!!M.sheenColorMap,Se=R&&!!M.sheenRoughnessMap,Ae=!!M.specularMap,Re=!!M.specularColorMap,ye=!!M.specularIntensityMap,Me=E&&!!M.transmissionMap,He=E&&!!M.thicknessMap,et=!!M.gradientMap,P=!!M.alphaMap,ue=M.alphaTest>0,z=!!M.extensions,oe=!!F.attributes.uv1,he=!!F.attributes.uv2,Ze=!!F.attributes.uv3;return{isWebGL2:u,shaderID:K,shaderType:M.type,shaderName:M.name,vertexShader:ee,fragmentShader:te,defines:M.defines,customVertexShaderID:me,customFragmentShaderID:ge,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,instancing:De,instancingColor:De&&D.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Ee===null?s.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:un,map:Ce,matcap:Ke,envMap:Le,envMapMode:Le&&q.mapping,envMapCubeUVHeight:Y,aoMap:L,lightMap:se,bumpMap:X,normalMap:re,displacementMap:d&&j,emissiveMap:be,normalMapObjectSpace:re&&M.normalMapType===ff,normalMapTangentSpace:re&&M.normalMapType===oi,metalnessMap:pe,roughnessMap:ve,anisotropy:Oe,anisotropyMap:G,clearcoat:qe,clearcoatMap:ne,clearcoatNormalMap:ie,clearcoatRoughnessMap:ce,iridescence:st,iridescenceMap:Te,iridescenceThicknessMap:le,sheen:R,sheenColorMap:W,sheenRoughnessMap:Se,specularMap:Ae,specularColorMap:Re,specularIntensityMap:ye,transmission:E,transmissionMap:Me,thicknessMap:He,gradientMap:et,opaque:M.transparent===!1&&M.blending===Li,alphaMap:P,alphaTest:ue,combine:M.combine,mapUv:Ce&&_(M.map.channel),aoMapUv:L&&_(M.aoMap.channel),lightMapUv:se&&_(M.lightMap.channel),bumpMapUv:X&&_(M.bumpMap.channel),normalMapUv:re&&_(M.normalMap.channel),displacementMapUv:j&&_(M.displacementMap.channel),emissiveMapUv:be&&_(M.emissiveMap.channel),metalnessMapUv:pe&&_(M.metalnessMap.channel),roughnessMapUv:ve&&_(M.roughnessMap.channel),anisotropyMapUv:G&&_(M.anisotropyMap.channel),clearcoatMapUv:ne&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:ie&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:le&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:W&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Se&&_(M.sheenRoughnessMap.channel),specularMapUv:Ae&&_(M.specularMap.channel),specularColorMapUv:Re&&_(M.specularColorMap.channel),specularIntensityMapUv:ye&&_(M.specularIntensityMap.channel),transmissionMapUv:Me&&_(M.transmissionMap.channel),thicknessMapUv:He&&_(M.thicknessMap.channel),alphaMapUv:P&&_(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(re||Oe),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:oe,vertexUv2s:he,vertexUv3s:Ze,pointsUvs:D.isPoints===!0&&!!F.attributes.uv&&(Ce||P),fog:!!B,useFog:M.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:D.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:k,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:M.toneMapped?s.toneMapping:Mn,useLegacyLights:s.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===_n,flipSided:M.side===zt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:z&&M.extensions.derivatives===!0,extensionFragDepth:z&&M.extensions.fragDepth===!0,extensionDrawBuffers:z&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:z&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const N in M.defines)w.push(N),w.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(x(w,M),v(w,M),w.push(s.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function x(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function v(M,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),M.push(a.mask)}function y(M){const w=m[M.type];let N;if(w){const $=ln[w];N=wf.clone($.uniforms)}else N=M.uniforms;return N}function b(M,w){let N;for(let $=0,D=l.length;$<D;$++){const B=l[$];if(B.cacheKey===w){N=B,++N.usedTimes;break}}return N===void 0&&(N=new Hx(s,w,M,r),l.push(N)),N}function T(M){if(--M.usedTimes===0){const w=l.indexOf(M);l[w]=l[l.length-1],l.pop(),M.destroy()}}function C(M){c.remove(M)}function I(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:b,releaseProgram:T,releaseShaderCache:C,programs:l,dispose:I}}function Zx(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function $x(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function rh(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function oh(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,f,m,_,g){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:m,renderOrder:h.renderOrder,z:_,group:g},s[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=_,p.group=g),e++,p}function a(h,d,f,m,_,g){const p=o(h,d,f,m,_,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(h,d,f,m,_,g){const p=o(h,d,f,m,_,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||$x),n.length>1&&n.sort(d||rh),i.length>1&&i.sort(d||rh)}function u(){for(let h=e,d=s.length;h<d;h++){const f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:u,sort:l}}function Jx(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new oh,s.set(n,[o])):i>=r.length?(o=new oh,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Kx(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new S,color:new fe};break;case"SpotLight":t={position:new S,direction:new S,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new S,color:new fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new S,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":t={color:new fe,position:new S,halfWidth:new S,halfHeight:new S};break}return s[e.id]=t,t}}}function jx(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Qx=0;function ey(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function ty(s,e){const t=new Kx,n=jx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new S);const r=new S,o=new Ue,a=new Ue;function c(u,h){let d=0,f=0,m=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let _=0,g=0,p=0,x=0,v=0,y=0,b=0,T=0,C=0,I=0;u.sort(ey);const M=h===!0?Math.PI:1;for(let N=0,$=u.length;N<$;N++){const D=u[N],B=D.color,F=D.intensity,J=D.distance,q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=B.r*F*M,f+=B.g*F*M,m+=B.b*F*M;else if(D.isLightProbe)for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(D.sh.coefficients[Y],F);else if(D.isDirectionalLight){const Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity*M),D.castShadow){const K=D.shadow,Q=n.get(D);Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,i.directionalShadow[_]=Q,i.directionalShadowMap[_]=q,i.directionalShadowMatrix[_]=D.shadow.matrix,y++}i.directional[_]=Y,_++}else if(D.isSpotLight){const Y=t.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(B).multiplyScalar(F*M),Y.distance=J,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,i.spot[p]=Y;const K=D.shadow;if(D.map&&(i.spotLightMap[C]=D.map,C++,K.updateMatrices(D),D.castShadow&&I++),i.spotLightMatrix[p]=K.matrix,D.castShadow){const Q=n.get(D);Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,i.spotShadow[p]=Q,i.spotShadowMap[p]=q,T++}p++}else if(D.isRectAreaLight){const Y=t.get(D);Y.color.copy(B).multiplyScalar(F),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),i.rectArea[x]=Y,x++}else if(D.isPointLight){const Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity*M),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){const K=D.shadow,Q=n.get(D);Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,Q.shadowCameraNear=K.camera.near,Q.shadowCameraFar=K.camera.far,i.pointShadow[g]=Q,i.pointShadowMap[g]=q,i.pointShadowMatrix[g]=D.shadow.matrix,b++}i.point[g]=Y,g++}else if(D.isHemisphereLight){const Y=t.get(D);Y.skyColor.copy(D.color).multiplyScalar(F*M),Y.groundColor.copy(D.groundColor).multiplyScalar(F*M),i.hemi[v]=Y,v++}}x>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=m;const w=i.hash;(w.directionalLength!==_||w.pointLength!==g||w.spotLength!==p||w.rectAreaLength!==x||w.hemiLength!==v||w.numDirectionalShadows!==y||w.numPointShadows!==b||w.numSpotShadows!==T||w.numSpotMaps!==C)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=x,i.point.length=g,i.hemi.length=v,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=T+C-I,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=I,w.directionalLength=_,w.pointLength=g,w.spotLength=p,w.rectAreaLength=x,w.hemiLength=v,w.numDirectionalShadows=y,w.numPointShadows=b,w.numSpotShadows=T,w.numSpotMaps=C,i.version=Qx++)}function l(u,h){let d=0,f=0,m=0,_=0,g=0;const p=h.matrixWorldInverse;for(let x=0,v=u.length;x<v;x++){const y=u[x];if(y.isDirectionalLight){const b=i.directional[d];b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),d++}else if(y.isSpotLight){const b=i.spot[m];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),m++}else if(y.isRectAreaLight){const b=i.rectArea[_];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),a.identity(),o.copy(y.matrixWorld),o.premultiply(p),a.extractRotation(o),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const b=i.point[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const b=i.hemi[g];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(p),g++}}}return{setup:c,setupView:l,state:i}}function ah(s,e){const t=new ty(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function ny(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let c;return a===void 0?(c=new ah(s,e),t.set(r,[c])):o>=a.length?(c=new ah(s,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class Fl extends Lt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zl extends Lt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const iy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ry(s,e,t){let n=new pa;const i=new Z,r=new Z,o=new Je,a=new Fl({depthPacking:df}),c=new zl,l={},u=t.maxTextureSize,h={[Gn]:zt,[zt]:Gn,[_n]:_n},d=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Z},radius:{value:4}},vertexShader:iy,fragmentShader:sy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Ve;m.setAttribute("position",new Qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new At(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xl;let p=this.type;this.render=function(b,T,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;const I=s.getRenderTarget(),M=s.getActiveCubeFace(),w=s.getActiveMipmapLevel(),N=s.state;N.setBlending(zn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const $=p!==gn&&this.type===gn,D=p===gn&&this.type!==gn;for(let B=0,F=b.length;B<F;B++){const J=b[B],q=J.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const Y=q.getFrameExtents();if(i.multiply(Y),r.copy(q.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/Y.x),i.x=r.x*Y.x,q.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/Y.y),i.y=r.y*Y.y,q.mapSize.y=r.y)),q.map===null||$===!0||D===!0){const Q=this.type!==gn?{minFilter:dt,magFilter:dt}:{};q.map!==null&&q.map.dispose(),q.map=new hn(i.x,i.y,Q),q.map.texture.name=J.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();const K=q.getViewportCount();for(let Q=0;Q<K;Q++){const de=q.getViewport(Q);o.set(r.x*de.x,r.y*de.y,r.x*de.z,r.y*de.w),N.viewport(o),q.updateMatrices(J,Q),n=q.getFrustum(),y(T,C,q.camera,J,this.type)}q.isPointLightShadow!==!0&&this.type===gn&&x(q,C),q.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(I,M,w)};function x(b,T){const C=e.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new hn(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(T,null,C,d,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(T,null,C,f,_,null)}function v(b,T,C,I){let M=null;const w=C.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(w!==void 0)M=w;else if(M=C.isPointLight===!0?c:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const N=M.uuid,$=T.uuid;let D=l[N];D===void 0&&(D={},l[N]=D);let B=D[$];B===void 0&&(B=M.clone(),D[$]=B),M=B}if(M.visible=T.visible,M.wireframe=T.wireframe,I===gn?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:h[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=s.properties.get(M);N.light=C}return M}function y(b,T,C,I,M){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===gn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,b.matrixWorld);const $=e.update(b),D=b.material;if(Array.isArray(D)){const B=$.groups;for(let F=0,J=B.length;F<J;F++){const q=B[F],Y=D[q.materialIndex];if(Y&&Y.visible){const K=v(b,Y,I,M);s.renderBufferDirect(C,null,$,K,b,q)}}}else if(D.visible){const B=v(b,D,I,M);s.renderBufferDirect(C,null,$,B,b,null)}}const N=b.children;for(let $=0,D=N.length;$<D;$++)y(N[$],T,C,I,M)}}function oy(s,e,t){const n=t.isWebGL2;function i(){let P=!1;const ue=new Je;let z=null;const oe=new Je(0,0,0,0);return{setMask:function(he){z!==he&&!P&&(s.colorMask(he,he,he,he),z=he)},setLocked:function(he){P=he},setClear:function(he,Ze,rt,mt,ui){ui===!0&&(he*=mt,Ze*=mt,rt*=mt),ue.set(he,Ze,rt,mt),oe.equals(ue)===!1&&(s.clearColor(he,Ze,rt,mt),oe.copy(ue))},reset:function(){P=!1,z=null,oe.set(-1,0,0,0)}}}function r(){let P=!1,ue=null,z=null,oe=null;return{setTest:function(he){he?Ee(s.DEPTH_TEST):De(s.DEPTH_TEST)},setMask:function(he){ue!==he&&!P&&(s.depthMask(he),ue=he)},setFunc:function(he){if(z!==he){switch(he){case Fd:s.depthFunc(s.NEVER);break;case zd:s.depthFunc(s.ALWAYS);break;case kd:s.depthFunc(s.LESS);break;case ea:s.depthFunc(s.LEQUAL);break;case Gd:s.depthFunc(s.EQUAL);break;case Vd:s.depthFunc(s.GEQUAL);break;case Hd:s.depthFunc(s.GREATER);break;case Wd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}z=he}},setLocked:function(he){P=he},setClear:function(he){oe!==he&&(s.clearDepth(he),oe=he)},reset:function(){P=!1,ue=null,z=null,oe=null}}}function o(){let P=!1,ue=null,z=null,oe=null,he=null,Ze=null,rt=null,mt=null,ui=null;return{setTest:function(ot){P||(ot?Ee(s.STENCIL_TEST):De(s.STENCIL_TEST))},setMask:function(ot){ue!==ot&&!P&&(s.stencilMask(ot),ue=ot)},setFunc:function(ot,mn,Pt){(z!==ot||oe!==mn||he!==Pt)&&(s.stencilFunc(ot,mn,Pt),z=ot,oe=mn,he=Pt)},setOp:function(ot,mn,Pt){(Ze!==ot||rt!==mn||mt!==Pt)&&(s.stencilOp(ot,mn,Pt),Ze=ot,rt=mn,mt=Pt)},setLocked:function(ot){P=ot},setClear:function(ot){ui!==ot&&(s.clearStencil(ot),ui=ot)},reset:function(){P=!1,ue=null,z=null,oe=null,he=null,Ze=null,rt=null,mt=null,ui=null}}}const a=new i,c=new r,l=new o,u=new WeakMap,h=new WeakMap;let d={},f={},m=new WeakMap,_=[],g=null,p=!1,x=null,v=null,y=null,b=null,T=null,C=null,I=null,M=!1,w=null,N=null,$=null,D=null,B=null;const F=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,q=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(Y)[1]),J=q>=1):Y.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),J=q>=2);let K=null,Q={};const de=s.getParameter(s.SCISSOR_BOX),k=s.getParameter(s.VIEWPORT),ee=new Je().fromArray(de),te=new Je().fromArray(k);function me(P,ue,z,oe){const he=new Uint8Array(4),Ze=s.createTexture();s.bindTexture(P,Ze),s.texParameteri(P,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(P,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let rt=0;rt<z;rt++)n&&(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)?s.texImage3D(ue,0,s.RGBA,1,1,oe,0,s.RGBA,s.UNSIGNED_BYTE,he):s.texImage2D(ue+rt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,he);return Ze}const ge={};ge[s.TEXTURE_2D]=me(s.TEXTURE_2D,s.TEXTURE_2D,1),ge[s.TEXTURE_CUBE_MAP]=me(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ge[s.TEXTURE_2D_ARRAY]=me(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ge[s.TEXTURE_3D]=me(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ee(s.DEPTH_TEST),c.setFunc(ea),j(!1),be(bc),Ee(s.CULL_FACE),X(zn);function Ee(P){d[P]!==!0&&(s.enable(P),d[P]=!0)}function De(P){d[P]!==!1&&(s.disable(P),d[P]=!1)}function Ce(P,ue){return f[P]!==ue?(s.bindFramebuffer(P,ue),f[P]=ue,n&&(P===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=ue),P===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=ue)),!0):!1}function Ke(P,ue){let z=_,oe=!1;if(P)if(z=m.get(ue),z===void 0&&(z=[],m.set(ue,z)),P.isWebGLMultipleRenderTargets){const he=P.texture;if(z.length!==he.length||z[0]!==s.COLOR_ATTACHMENT0){for(let Ze=0,rt=he.length;Ze<rt;Ze++)z[Ze]=s.COLOR_ATTACHMENT0+Ze;z.length=he.length,oe=!0}}else z[0]!==s.COLOR_ATTACHMENT0&&(z[0]=s.COLOR_ATTACHMENT0,oe=!0);else z[0]!==s.BACK&&(z[0]=s.BACK,oe=!0);oe&&(t.isWebGL2?s.drawBuffers(z):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(z))}function Le(P){return g!==P?(s.useProgram(P),g=P,!0):!1}const L={[Ti]:s.FUNC_ADD,[wd]:s.FUNC_SUBTRACT,[Rd]:s.FUNC_REVERSE_SUBTRACT};if(n)L[wc]=s.MIN,L[Rc]=s.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(L[wc]=P.MIN_EXT,L[Rc]=P.MAX_EXT)}const se={[Cd]:s.ZERO,[Id]:s.ONE,[Ld]:s.SRC_COLOR,[yl]:s.SRC_ALPHA,[Bd]:s.SRC_ALPHA_SATURATE,[Dd]:s.DST_COLOR,[Od]:s.DST_ALPHA,[Pd]:s.ONE_MINUS_SRC_COLOR,[Ml]:s.ONE_MINUS_SRC_ALPHA,[Nd]:s.ONE_MINUS_DST_COLOR,[Ud]:s.ONE_MINUS_DST_ALPHA};function X(P,ue,z,oe,he,Ze,rt,mt){if(P===zn){p===!0&&(De(s.BLEND),p=!1);return}if(p===!1&&(Ee(s.BLEND),p=!0),P!==Ad){if(P!==x||mt!==M){if((v!==Ti||T!==Ti)&&(s.blendEquation(s.FUNC_ADD),v=Ti,T=Ti),mt)switch(P){case Li:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Tc:s.blendFunc(s.ONE,s.ONE);break;case Sc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ac:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Li:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Tc:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Sc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ac:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}y=null,b=null,C=null,I=null,x=P,M=mt}return}he=he||ue,Ze=Ze||z,rt=rt||oe,(ue!==v||he!==T)&&(s.blendEquationSeparate(L[ue],L[he]),v=ue,T=he),(z!==y||oe!==b||Ze!==C||rt!==I)&&(s.blendFuncSeparate(se[z],se[oe],se[Ze],se[rt]),y=z,b=oe,C=Ze,I=rt),x=P,M=!1}function re(P,ue){P.side===_n?De(s.CULL_FACE):Ee(s.CULL_FACE);let z=P.side===zt;ue&&(z=!z),j(z),P.blending===Li&&P.transparent===!1?X(zn):X(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),c.setFunc(P.depthFunc),c.setTest(P.depthTest),c.setMask(P.depthWrite),a.setMask(P.colorWrite);const oe=P.stencilWrite;l.setTest(oe),oe&&(l.setMask(P.stencilWriteMask),l.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),l.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ve(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Ee(s.SAMPLE_ALPHA_TO_COVERAGE):De(s.SAMPLE_ALPHA_TO_COVERAGE)}function j(P){w!==P&&(P?s.frontFace(s.CW):s.frontFace(s.CCW),w=P)}function be(P){P!==bd?(Ee(s.CULL_FACE),P!==N&&(P===bc?s.cullFace(s.BACK):P===Td?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):De(s.CULL_FACE),N=P}function pe(P){P!==$&&(J&&s.lineWidth(P),$=P)}function ve(P,ue,z){P?(Ee(s.POLYGON_OFFSET_FILL),(D!==ue||B!==z)&&(s.polygonOffset(ue,z),D=ue,B=z)):De(s.POLYGON_OFFSET_FILL)}function Oe(P){P?Ee(s.SCISSOR_TEST):De(s.SCISSOR_TEST)}function qe(P){P===void 0&&(P=s.TEXTURE0+F-1),K!==P&&(s.activeTexture(P),K=P)}function st(P,ue,z){z===void 0&&(K===null?z=s.TEXTURE0+F-1:z=K);let oe=Q[z];oe===void 0&&(oe={type:void 0,texture:void 0},Q[z]=oe),(oe.type!==P||oe.texture!==ue)&&(K!==z&&(s.activeTexture(z),K=z),s.bindTexture(P,ue||ge[P]),oe.type=P,oe.texture=ue)}function R(){const P=Q[K];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function E(){try{s.compressedTexImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function G(){try{s.compressedTexImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{s.texSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{s.texSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ce(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Te(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function le(){try{s.texStorage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function W(){try{s.texStorage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Se(){try{s.texImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ae(){try{s.texImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Re(P){ee.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),ee.copy(P))}function ye(P){te.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),te.copy(P))}function Me(P,ue){let z=h.get(ue);z===void 0&&(z=new WeakMap,h.set(ue,z));let oe=z.get(P);oe===void 0&&(oe=s.getUniformBlockIndex(ue,P.name),z.set(P,oe))}function He(P,ue){const oe=h.get(ue).get(P);u.get(ue)!==oe&&(s.uniformBlockBinding(ue,oe,P.__bindingPointIndex),u.set(ue,oe))}function et(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},K=null,Q={},f={},m=new WeakMap,_=[],g=null,p=!1,x=null,v=null,y=null,b=null,T=null,C=null,I=null,M=!1,w=null,N=null,$=null,D=null,B=null,ee.set(0,0,s.canvas.width,s.canvas.height),te.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Ee,disable:De,bindFramebuffer:Ce,drawBuffers:Ke,useProgram:Le,setBlending:X,setMaterial:re,setFlipSided:j,setCullFace:be,setLineWidth:pe,setPolygonOffset:ve,setScissorTest:Oe,activeTexture:qe,bindTexture:st,unbindTexture:R,compressedTexImage2D:E,compressedTexImage3D:G,texImage2D:Se,texImage3D:Ae,updateUBOMapping:Me,uniformBlockBinding:He,texStorage2D:le,texStorage3D:W,texSubImage2D:ne,texSubImage3D:ie,compressedTexSubImage2D:ce,compressedTexSubImage3D:Te,scissor:Re,viewport:ye,reset:et}}function ay(s,e,t,n,i,r,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new WeakMap;let _;const g=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,E){return p?new OffscreenCanvas(R,E):pr("canvas")}function v(R,E,G,ne){let ie=1;if((R.width>ne||R.height>ne)&&(ie=ne/Math.max(R.width,R.height)),ie<1||E===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ce=E?ia:Math.floor,Te=ce(ie*R.width),le=ce(ie*R.height);_===void 0&&(_=x(Te,le));const W=G?x(Te,le):_;return W.width=Te,W.height=le,W.getContext("2d").drawImage(R,0,0,Te,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Te+"x"+le+")."),W}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function y(R){return Qc(R.width)&&Qc(R.height)}function b(R){return a?!1:R.wrapS!==Ct||R.wrapT!==Ct||R.minFilter!==dt&&R.minFilter!==ft}function T(R,E){return R.generateMipmaps&&E&&R.minFilter!==dt&&R.minFilter!==ft}function C(R){s.generateMipmap(R)}function I(R,E,G,ne,ie=!1){if(a===!1)return E;if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ce=E;return E===s.RED&&(G===s.FLOAT&&(ce=s.R32F),G===s.HALF_FLOAT&&(ce=s.R16F),G===s.UNSIGNED_BYTE&&(ce=s.R8)),E===s.RG&&(G===s.FLOAT&&(ce=s.RG32F),G===s.HALF_FLOAT&&(ce=s.RG16F),G===s.UNSIGNED_BYTE&&(ce=s.RG8)),E===s.RGBA&&(G===s.FLOAT&&(ce=s.RGBA32F),G===s.HALF_FLOAT&&(ce=s.RGBA16F),G===s.UNSIGNED_BYTE&&(ce=ne===Be&&ie===!1?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(ce=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(ce=s.RGB5_A1)),(ce===s.R16F||ce===s.R32F||ce===s.RG16F||ce===s.RG32F||ce===s.RGBA16F||ce===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function M(R,E,G){return T(R,G)===!0||R.isFramebufferTexture&&R.minFilter!==dt&&R.minFilter!==ft?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function w(R){return R===dt||R===ta||R===js?s.NEAREST:s.LINEAR}function N(R){const E=R.target;E.removeEventListener("dispose",N),D(E),E.isVideoTexture&&m.delete(E)}function $(R){const E=R.target;E.removeEventListener("dispose",$),F(E)}function D(R){const E=n.get(R);if(E.__webglInit===void 0)return;const G=R.source,ne=g.get(G);if(ne){const ie=ne[E.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&B(R),Object.keys(ne).length===0&&g.delete(G)}n.remove(R)}function B(R){const E=n.get(R);s.deleteTexture(E.__webglTexture);const G=R.source,ne=g.get(G);delete ne[E.__cacheKey],o.memory.textures--}function F(R){const E=R.texture,G=n.get(R),ne=n.get(E);if(ne.__webglTexture!==void 0&&(s.deleteTexture(ne.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)s.deleteFramebuffer(G.__webglFramebuffer[ie]),G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer[ie]);else{if(s.deleteFramebuffer(G.__webglFramebuffer),G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&s.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let ie=0;ie<G.__webglColorRenderbuffer.length;ie++)G.__webglColorRenderbuffer[ie]&&s.deleteRenderbuffer(G.__webglColorRenderbuffer[ie]);G.__webglDepthRenderbuffer&&s.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ie=0,ce=E.length;ie<ce;ie++){const Te=n.get(E[ie]);Te.__webglTexture&&(s.deleteTexture(Te.__webglTexture),o.memory.textures--),n.remove(E[ie])}n.remove(E),n.remove(R)}let J=0;function q(){J=0}function Y(){const R=J;return R>=c&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+c),J+=1,R}function K(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function Q(R,E){const G=n.get(R);if(R.isVideoTexture&&qe(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){const ne=R.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(G,R,E);return}}t.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+E)}function de(R,E){const G=n.get(R);if(R.version>0&&G.__version!==R.version){Ce(G,R,E);return}t.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+E)}function k(R,E){const G=n.get(R);if(R.version>0&&G.__version!==R.version){Ce(G,R,E);return}t.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+E)}function ee(R,E){const G=n.get(R);if(R.version>0&&G.__version!==R.version){Ke(G,R,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+E)}const te={[ar]:s.REPEAT,[Ct]:s.CLAMP_TO_EDGE,[cr]:s.MIRRORED_REPEAT},me={[dt]:s.NEAREST,[ta]:s.NEAREST_MIPMAP_NEAREST,[js]:s.NEAREST_MIPMAP_LINEAR,[ft]:s.LINEAR,[El]:s.LINEAR_MIPMAP_NEAREST,[ii]:s.LINEAR_MIPMAP_LINEAR},ge={[mf]:s.NEVER,[Ef]:s.ALWAYS,[gf]:s.LESS,[vf]:s.LEQUAL,[_f]:s.EQUAL,[Mf]:s.GEQUAL,[xf]:s.GREATER,[yf]:s.NOTEQUAL};function Ee(R,E,G){if(G?(s.texParameteri(R,s.TEXTURE_WRAP_S,te[E.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,te[E.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,te[E.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,me[E.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,me[E.minFilter])):(s.texParameteri(R,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(R,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(E.wrapS!==Ct||E.wrapT!==Ct)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(R,s.TEXTURE_MAG_FILTER,w(E.magFilter)),s.texParameteri(R,s.TEXTURE_MIN_FILTER,w(E.minFilter)),E.minFilter!==dt&&E.minFilter!==ft&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,ge[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===dt||E.minFilter!==js&&E.minFilter!==ii||E.type===xn&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===Ts&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(s.texParameterf(R,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function De(R,E){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",N));const ne=E.source;let ie=g.get(ne);ie===void 0&&(ie={},g.set(ne,ie));const ce=K(E);if(ce!==R.__cacheKey){ie[ce]===void 0&&(ie[ce]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ie[ce].usedTimes++;const Te=ie[R.__cacheKey];Te!==void 0&&(ie[R.__cacheKey].usedTimes--,Te.usedTimes===0&&B(E)),R.__cacheKey=ce,R.__webglTexture=ie[ce].texture}return G}function Ce(R,E,G){let ne=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ne=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ne=s.TEXTURE_3D);const ie=De(R,E),ce=E.source;t.bindTexture(ne,R.__webglTexture,s.TEXTURE0+G);const Te=n.get(ce);if(ce.version!==Te.__version||ie===!0){t.activeTexture(s.TEXTURE0+G),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const le=b(E)&&y(E.image)===!1;let W=v(E.image,le,!1,u);W=st(E,W);const Se=y(W)||a,Ae=r.convert(E.format,E.colorSpace);let Re=r.convert(E.type),ye=I(E.internalFormat,Ae,Re,E.colorSpace);Ee(ne,E,Se);let Me;const He=E.mipmaps,et=a&&E.isVideoTexture!==!0,P=Te.__version===void 0||ie===!0,ue=M(E,W,Se);if(E.isDepthTexture)ye=s.DEPTH_COMPONENT,a?E.type===xn?ye=s.DEPTH_COMPONENT32F:E.type===Fn?ye=s.DEPTH_COMPONENT24:E.type===Jn?ye=s.DEPTH24_STENCIL8:ye=s.DEPTH_COMPONENT16:E.type===xn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Kn&&ye===s.DEPTH_COMPONENT&&E.type!==la&&E.type!==Fn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Fn,Re=r.convert(E.type)),E.format===Di&&ye===s.DEPTH_COMPONENT&&(ye=s.DEPTH_STENCIL,E.type!==Jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Jn,Re=r.convert(E.type))),P&&(et?t.texStorage2D(s.TEXTURE_2D,1,ye,W.width,W.height):t.texImage2D(s.TEXTURE_2D,0,ye,W.width,W.height,0,Ae,Re,null));else if(E.isDataTexture)if(He.length>0&&Se){et&&P&&t.texStorage2D(s.TEXTURE_2D,ue,ye,He[0].width,He[0].height);for(let z=0,oe=He.length;z<oe;z++)Me=He[z],et?t.texSubImage2D(s.TEXTURE_2D,z,0,0,Me.width,Me.height,Ae,Re,Me.data):t.texImage2D(s.TEXTURE_2D,z,ye,Me.width,Me.height,0,Ae,Re,Me.data);E.generateMipmaps=!1}else et?(P&&t.texStorage2D(s.TEXTURE_2D,ue,ye,W.width,W.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,W.width,W.height,Ae,Re,W.data)):t.texImage2D(s.TEXTURE_2D,0,ye,W.width,W.height,0,Ae,Re,W.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){et&&P&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ue,ye,He[0].width,He[0].height,W.depth);for(let z=0,oe=He.length;z<oe;z++)Me=He[z],E.format!==Yt?Ae!==null?et?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,z,0,0,0,Me.width,Me.height,W.depth,Ae,Me.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,z,ye,Me.width,Me.height,W.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?t.texSubImage3D(s.TEXTURE_2D_ARRAY,z,0,0,0,Me.width,Me.height,W.depth,Ae,Re,Me.data):t.texImage3D(s.TEXTURE_2D_ARRAY,z,ye,Me.width,Me.height,W.depth,0,Ae,Re,Me.data)}else{et&&P&&t.texStorage2D(s.TEXTURE_2D,ue,ye,He[0].width,He[0].height);for(let z=0,oe=He.length;z<oe;z++)Me=He[z],E.format!==Yt?Ae!==null?et?t.compressedTexSubImage2D(s.TEXTURE_2D,z,0,0,Me.width,Me.height,Ae,Me.data):t.compressedTexImage2D(s.TEXTURE_2D,z,ye,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?t.texSubImage2D(s.TEXTURE_2D,z,0,0,Me.width,Me.height,Ae,Re,Me.data):t.texImage2D(s.TEXTURE_2D,z,ye,Me.width,Me.height,0,Ae,Re,Me.data)}else if(E.isDataArrayTexture)et?(P&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ue,ye,W.width,W.height,W.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,W.width,W.height,W.depth,Ae,Re,W.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,ye,W.width,W.height,W.depth,0,Ae,Re,W.data);else if(E.isData3DTexture)et?(P&&t.texStorage3D(s.TEXTURE_3D,ue,ye,W.width,W.height,W.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,W.width,W.height,W.depth,Ae,Re,W.data)):t.texImage3D(s.TEXTURE_3D,0,ye,W.width,W.height,W.depth,0,Ae,Re,W.data);else if(E.isFramebufferTexture){if(P)if(et)t.texStorage2D(s.TEXTURE_2D,ue,ye,W.width,W.height);else{let z=W.width,oe=W.height;for(let he=0;he<ue;he++)t.texImage2D(s.TEXTURE_2D,he,ye,z,oe,0,Ae,Re,null),z>>=1,oe>>=1}}else if(He.length>0&&Se){et&&P&&t.texStorage2D(s.TEXTURE_2D,ue,ye,He[0].width,He[0].height);for(let z=0,oe=He.length;z<oe;z++)Me=He[z],et?t.texSubImage2D(s.TEXTURE_2D,z,0,0,Ae,Re,Me):t.texImage2D(s.TEXTURE_2D,z,ye,Ae,Re,Me);E.generateMipmaps=!1}else et?(P&&t.texStorage2D(s.TEXTURE_2D,ue,ye,W.width,W.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ae,Re,W)):t.texImage2D(s.TEXTURE_2D,0,ye,Ae,Re,W);T(E,Se)&&C(ne),Te.__version=ce.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Ke(R,E,G){if(E.image.length!==6)return;const ne=De(R,E),ie=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+G);const ce=n.get(ie);if(ie.version!==ce.__version||ne===!0){t.activeTexture(s.TEXTURE0+G),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const Te=E.isCompressedTexture||E.image[0].isCompressedTexture,le=E.image[0]&&E.image[0].isDataTexture,W=[];for(let z=0;z<6;z++)!Te&&!le?W[z]=v(E.image[z],!1,!0,l):W[z]=le?E.image[z].image:E.image[z],W[z]=st(E,W[z]);const Se=W[0],Ae=y(Se)||a,Re=r.convert(E.format,E.colorSpace),ye=r.convert(E.type),Me=I(E.internalFormat,Re,ye,E.colorSpace),He=a&&E.isVideoTexture!==!0,et=ce.__version===void 0||ne===!0;let P=M(E,Se,Ae);Ee(s.TEXTURE_CUBE_MAP,E,Ae);let ue;if(Te){He&&et&&t.texStorage2D(s.TEXTURE_CUBE_MAP,P,Me,Se.width,Se.height);for(let z=0;z<6;z++){ue=W[z].mipmaps;for(let oe=0;oe<ue.length;oe++){const he=ue[oe];E.format!==Yt?Re!==null?He?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+z,oe,0,0,he.width,he.height,Re,he.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+z,oe,Me,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+z,oe,0,0,he.width,he.height,Re,ye,he.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+z,oe,Me,he.width,he.height,0,Re,ye,he.data)}}}else{ue=E.mipmaps,He&&et&&(ue.length>0&&P++,t.texStorage2D(s.TEXTURE_CUBE_MAP,P,Me,W[0].width,W[0].height));for(let z=0;z<6;z++)if(le){He?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,W[z].width,W[z].height,Re,ye,W[z].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,Me,W[z].width,W[z].height,0,Re,ye,W[z].data);for(let oe=0;oe<ue.length;oe++){const Ze=ue[oe].image[z].image;He?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+z,oe+1,0,0,Ze.width,Ze.height,Re,ye,Ze.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+z,oe+1,Me,Ze.width,Ze.height,0,Re,ye,Ze.data)}}else{He?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,Re,ye,W[z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,Me,Re,ye,W[z]);for(let oe=0;oe<ue.length;oe++){const he=ue[oe];He?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+z,oe+1,0,0,Re,ye,he.image[z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+z,oe+1,Me,Re,ye,he.image[z])}}}T(E,Ae)&&C(s.TEXTURE_CUBE_MAP),ce.__version=ie.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Le(R,E,G,ne,ie){const ce=r.convert(G.format,G.colorSpace),Te=r.convert(G.type),le=I(G.internalFormat,ce,Te,G.colorSpace);n.get(E).__hasExternalTextures||(ie===s.TEXTURE_3D||ie===s.TEXTURE_2D_ARRAY?t.texImage3D(ie,0,le,E.width,E.height,E.depth,0,ce,Te,null):t.texImage2D(ie,0,le,E.width,E.height,0,ce,Te,null)),t.bindFramebuffer(s.FRAMEBUFFER,R),Oe(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ne,ie,n.get(G).__webglTexture,0,ve(E)):(ie===s.TEXTURE_2D||ie>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ne,ie,n.get(G).__webglTexture,0),t.bindFramebuffer(s.FRAMEBUFFER,null)}function L(R,E,G){if(s.bindRenderbuffer(s.RENDERBUFFER,R),E.depthBuffer&&!E.stencilBuffer){let ne=s.DEPTH_COMPONENT16;if(G||Oe(E)){const ie=E.depthTexture;ie&&ie.isDepthTexture&&(ie.type===xn?ne=s.DEPTH_COMPONENT32F:ie.type===Fn&&(ne=s.DEPTH_COMPONENT24));const ce=ve(E);Oe(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ce,ne,E.width,E.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ce,ne,E.width,E.height)}else s.renderbufferStorage(s.RENDERBUFFER,ne,E.width,E.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,R)}else if(E.depthBuffer&&E.stencilBuffer){const ne=ve(E);G&&Oe(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ne,s.DEPTH24_STENCIL8,E.width,E.height):Oe(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ne,s.DEPTH24_STENCIL8,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,R)}else{const ne=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ie=0;ie<ne.length;ie++){const ce=ne[ie],Te=r.convert(ce.format,ce.colorSpace),le=r.convert(ce.type),W=I(ce.internalFormat,Te,le,ce.colorSpace),Se=ve(E);G&&Oe(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Se,W,E.width,E.height):Oe(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Se,W,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,W,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function se(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Q(E.depthTexture,0);const ne=n.get(E.depthTexture).__webglTexture,ie=ve(E);if(E.depthTexture.format===Kn)Oe(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ne,0,ie):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ne,0);else if(E.depthTexture.format===Di)Oe(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ne,0,ie):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function X(R){const E=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");se(E.__webglFramebuffer,R)}else if(G){E.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[ne]),E.__webglDepthbuffer[ne]=s.createRenderbuffer(),L(E.__webglDepthbuffer[ne],R,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=s.createRenderbuffer(),L(E.__webglDepthbuffer,R,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function re(R,E,G){const ne=n.get(R);E!==void 0&&Le(ne.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D),G!==void 0&&X(R)}function j(R){const E=R.texture,G=n.get(R),ne=n.get(E);R.addEventListener("dispose",$),R.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=s.createTexture()),ne.__version=E.version,o.memory.textures++);const ie=R.isWebGLCubeRenderTarget===!0,ce=R.isWebGLMultipleRenderTargets===!0,Te=y(R)||a;if(ie){G.__webglFramebuffer=[];for(let le=0;le<6;le++)G.__webglFramebuffer[le]=s.createFramebuffer()}else{if(G.__webglFramebuffer=s.createFramebuffer(),ce)if(i.drawBuffers){const le=R.texture;for(let W=0,Se=le.length;W<Se;W++){const Ae=n.get(le[W]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&Oe(R)===!1){const le=ce?E:[E];G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let W=0;W<le.length;W++){const Se=le[W];G.__webglColorRenderbuffer[W]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[W]);const Ae=r.convert(Se.format,Se.colorSpace),Re=r.convert(Se.type),ye=I(Se.internalFormat,Ae,Re,Se.colorSpace,R.isXRRenderTarget===!0),Me=ve(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Me,ye,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+W,s.RENDERBUFFER,G.__webglColorRenderbuffer[W])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),L(G.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ie){t.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture),Ee(s.TEXTURE_CUBE_MAP,E,Te);for(let le=0;le<6;le++)Le(G.__webglFramebuffer[le],R,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le);T(E,Te)&&C(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){const le=R.texture;for(let W=0,Se=le.length;W<Se;W++){const Ae=le[W],Re=n.get(Ae);t.bindTexture(s.TEXTURE_2D,Re.__webglTexture),Ee(s.TEXTURE_2D,Ae,Te),Le(G.__webglFramebuffer,R,Ae,s.COLOR_ATTACHMENT0+W,s.TEXTURE_2D),T(Ae,Te)&&C(s.TEXTURE_2D)}t.unbindTexture()}else{let le=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?le=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,ne.__webglTexture),Ee(le,E,Te),Le(G.__webglFramebuffer,R,E,s.COLOR_ATTACHMENT0,le),T(E,Te)&&C(le),t.unbindTexture()}R.depthBuffer&&X(R)}function be(R){const E=y(R)||a,G=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ne=0,ie=G.length;ne<ie;ne++){const ce=G[ne];if(T(ce,E)){const Te=R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,le=n.get(ce).__webglTexture;t.bindTexture(Te,le),C(Te),t.unbindTexture()}}}function pe(R){if(a&&R.samples>0&&Oe(R)===!1){const E=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],G=R.width,ne=R.height;let ie=s.COLOR_BUFFER_BIT;const ce=[],Te=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=n.get(R),W=R.isWebGLMultipleRenderTargets===!0;if(W)for(let Se=0;Se<E.length;Se++)t.bindFramebuffer(s.FRAMEBUFFER,le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let Se=0;Se<E.length;Se++){ce.push(s.COLOR_ATTACHMENT0+Se),R.depthBuffer&&ce.push(Te);const Ae=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(Ae===!1&&(R.depthBuffer&&(ie|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ie|=s.STENCIL_BUFFER_BIT)),W&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,le.__webglColorRenderbuffer[Se]),Ae===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Te]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Te])),W){const Re=n.get(E[Se]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Re,0)}s.blitFramebuffer(0,0,G,ne,0,0,G,ne,ie,s.NEAREST),f&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),W)for(let Se=0;Se<E.length;Se++){t.bindFramebuffer(s.FRAMEBUFFER,le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.RENDERBUFFER,le.__webglColorRenderbuffer[Se]);const Ae=n.get(E[Se]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.TEXTURE_2D,Ae,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function ve(R){return Math.min(h,R.samples)}function Oe(R){const E=n.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function qe(R){const E=o.render.frame;m.get(R)!==E&&(m.set(R,E),R.update())}function st(R,E){const G=R.colorSpace,ne=R.format,ie=R.type;return R.isCompressedTexture===!0||R.format===na||G!==un&&G!==Qn&&(G===Be?a===!1?e.has("EXT_sRGB")===!0&&ne===Yt?(R.format=na,R.minFilter=ft,R.generateMipmaps=!1):E=Ol.sRGBToLinear(E):(ne!==Yt||ie!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}this.allocateTextureUnit=Y,this.resetTextureUnits=q,this.setTexture2D=Q,this.setTexture2DArray=de,this.setTexture3D=k,this.setTextureCube=ee,this.rebindTextures=re,this.setupRenderTarget=j,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=X,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=Oe}function Df(s,e,t){const n=t.isWebGL2;function i(r,o=Qn){let a;if(r===kn)return s.UNSIGNED_BYTE;if(r===Tl)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Sl)return s.UNSIGNED_SHORT_5_5_5_1;if(r===jd)return s.BYTE;if(r===Qd)return s.SHORT;if(r===la)return s.UNSIGNED_SHORT;if(r===bl)return s.INT;if(r===Fn)return s.UNSIGNED_INT;if(r===xn)return s.FLOAT;if(r===Ts)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===ef)return s.ALPHA;if(r===Yt)return s.RGBA;if(r===tf)return s.LUMINANCE;if(r===nf)return s.LUMINANCE_ALPHA;if(r===Kn)return s.DEPTH_COMPONENT;if(r===Di)return s.DEPTH_STENCIL;if(r===na)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===sf)return s.RED;if(r===Al)return s.RED_INTEGER;if(r===rf)return s.RG;if(r===wl)return s.RG_INTEGER;if(r===Rl)return s.RGBA_INTEGER;if(r===Ho||r===Wo||r===qo||r===Xo)if(o===Be)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Ho)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Wo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===qo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Xo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ho)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Wo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===qo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Xo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Cc||r===Ic||r===Lc||r===Pc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Cc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ic)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Lc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Pc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===of)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Oc||r===Uc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Oc)return o===Be?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Uc)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Dc||r===Nc||r===Bc||r===Fc||r===zc||r===kc||r===Gc||r===Vc||r===Hc||r===Wc||r===qc||r===Xc||r===Yc||r===Zc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Dc)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Nc)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Bc)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Fc)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===zc)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===kc)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Gc)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Vc)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Hc)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Wc)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===qc)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Xc)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Yc)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Zc)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Yo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Yo)return o===Be?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===af||r===$c||r===Jc||r===Kc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Yo)return a.COMPRESSED_RED_RGTC1_EXT;if(r===$c)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Jc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Kc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Jn?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Nf extends St{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xs extends $e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cy={type:"move"};class tc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),p=this._getHandJoint(l,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cy)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new xs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Bf extends pt{constructor(e,t,n,i,r,o,a,c,l,u){if(u=u!==void 0?u:Kn,u!==Kn&&u!==Di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Kn&&(n=Fn),n===void 0&&u===Di&&(n=Jn),super(null,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:dt,this.minFilter=c!==void 0?c:dt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ly extends Hn{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,m=null;const _=t.getContextAttributes();let g=null,p=null;const x=[],v=[];let y=null;const b=new St;b.layers.enable(1),b.viewport=new Je;const T=new St;T.layers.enable(2),T.viewport=new Je;const C=[b,T],I=new Nf;I.layers.enable(1),I.layers.enable(2);let M=null,w=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(k){y=k},this.getController=function(k){let ee=x[k];return ee===void 0&&(ee=new tc,x[k]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(k){let ee=x[k];return ee===void 0&&(ee=new tc,x[k]=ee),ee.getGripSpace()},this.getHand=function(k){let ee=x[k];return ee===void 0&&(ee=new tc,x[k]=ee),ee.getHandSpace()};function N(k){const ee=v.indexOf(k.inputSource);if(ee===-1)return;const te=x[ee];te!==void 0&&(te.update(k.inputSource,k.frame,l||o),te.dispatchEvent({type:k.type,data:k.inputSource}))}function $(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",D);for(let k=0;k<x.length;k++){const ee=v[k];ee!==null&&(v[k]=null,x[k].disconnect(ee))}M=null,w=null,e.setRenderTarget(g),f=null,d=null,h=null,i=null,p=null,de.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",$),i.addEventListener("inputsourceschange",D),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ee={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,ee),i.updateRenderState({baseLayer:f}),p=new hn(f.framebufferWidth,f.framebufferHeight,{format:Yt,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ee=null,te=null,me=null;_.depth&&(me=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=_.stencil?Di:Kn,te=_.stencil?Jn:Fn);const ge={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(ge),i.updateRenderState({layers:[d]}),p=new hn(d.textureWidth,d.textureHeight,{format:Yt,type:kn,depthTexture:new Bf(d.textureWidth,d.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ee=e.properties.get(p);Ee.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),de.setContext(i),de.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function D(k){for(let ee=0;ee<k.removed.length;ee++){const te=k.removed[ee],me=v.indexOf(te);me>=0&&(v[me]=null,x[me].disconnect(te))}for(let ee=0;ee<k.added.length;ee++){const te=k.added[ee];let me=v.indexOf(te);if(me===-1){for(let Ee=0;Ee<x.length;Ee++)if(Ee>=v.length){v.push(te),me=Ee;break}else if(v[Ee]===null){v[Ee]=te,me=Ee;break}if(me===-1)break}const ge=x[me];ge&&ge.connect(te)}}const B=new S,F=new S;function J(k,ee,te){B.setFromMatrixPosition(ee.matrixWorld),F.setFromMatrixPosition(te.matrixWorld);const me=B.distanceTo(F),ge=ee.projectionMatrix.elements,Ee=te.projectionMatrix.elements,De=ge[14]/(ge[10]-1),Ce=ge[14]/(ge[10]+1),Ke=(ge[9]+1)/ge[5],Le=(ge[9]-1)/ge[5],L=(ge[8]-1)/ge[0],se=(Ee[8]+1)/Ee[0],X=De*L,re=De*se,j=me/(-L+se),be=j*-L;ee.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(be),k.translateZ(j),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const pe=De+j,ve=Ce+j,Oe=X-be,qe=re+(me-be),st=Ke*Ce/ve*pe,R=Le*Ce/ve*pe;k.projectionMatrix.makePerspective(Oe,qe,st,R,pe,ve),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function q(k,ee){ee===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(ee.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCameraXR=function(k){if(i===null)return k;y&&(k=y),I.near=T.near=b.near=k.near,I.far=T.far=b.far=k.far,(M!==I.near||w!==I.far)&&(i.updateRenderState({depthNear:I.near,depthFar:I.far}),M=I.near,w=I.far);const ee=k.parent,te=I.cameras;q(I,ee);for(let me=0;me<te.length;me++)q(te[me],ee);return te.length===2?J(I,b,T):I.projectionMatrix.copy(b.projectionMatrix),y&&Y(I,ee),I};function Y(k,ee){const te=y;ee===null?te.matrix.copy(k.matrixWorld):(te.matrix.copy(ee.matrixWorld),te.matrix.invert(),te.matrix.multiply(k.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0);const me=te.children;for(let ge=0,Ee=me.length;ge<Ee;ge++)me[ge].updateMatrixWorld(!0);te.projectionMatrix.copy(k.projectionMatrix),te.projectionMatrixInverse.copy(k.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Ss*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(k){c=k,d!==null&&(d.fixedFoveation=k),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=k)};let K=null;function Q(k,ee){if(u=ee.getViewerPose(l||o),m=ee,u!==null){const te=u.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let me=!1;te.length!==I.cameras.length&&(I.cameras.length=0,me=!0);for(let ge=0;ge<te.length;ge++){const Ee=te[ge];let De=null;if(f!==null)De=f.getViewport(Ee);else{const Ke=h.getViewSubImage(d,Ee);De=Ke.viewport,ge===0&&(e.setRenderTargetTextures(p,Ke.colorTexture,d.ignoreDepthValues?void 0:Ke.depthStencilTexture),e.setRenderTarget(p))}let Ce=C[ge];Ce===void 0&&(Ce=new St,Ce.layers.enable(ge),Ce.viewport=new Je,C[ge]=Ce),Ce.matrix.fromArray(Ee.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(Ee.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(De.x,De.y,De.width,De.height),ge===0&&(I.matrix.copy(Ce.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),me===!0&&I.cameras.push(Ce)}}for(let te=0;te<x.length;te++){const me=v[te],ge=x[te];me!==null&&ge!==void 0&&ge.update(me,ee,l||o)}K&&K(k,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),m=null}const de=new If;de.setAnimationLoop(Q),this.setAnimationLoop=function(k){K=k},this.dispose=function(){}}}function uy(s,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Af(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,x,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,x,v):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===zt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===zt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=e.get(p).envMap;if(x&&(g.envMap.value=x,g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;const v=s.useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,x,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=v*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),e.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===zt&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const x=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function hy(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,v){const y=v.program;n.uniformBlockBinding(x,y)}function l(x,v){let y=i[x.id];y===void 0&&(m(x),y=u(x),i[x.id]=y,x.addEventListener("dispose",g));const b=v.program;n.updateUBOMapping(x,b);const T=e.render.frame;r[x.id]!==T&&(d(x),r[x.id]=T)}function u(x){const v=h();x.__bindingPointIndex=v;const y=s.createBuffer(),b=x.__size,T=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,b,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,y),y}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=i[x.id],y=x.uniforms,b=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let T=0,C=y.length;T<C;T++){const I=y[T];if(f(I,T,b)===!0){const M=I.__offset,w=Array.isArray(I.value)?I.value:[I.value];let N=0;for(let $=0;$<w.length;$++){const D=w[$],B=_(D);typeof D=="number"?(I.__data[0]=D,s.bufferSubData(s.UNIFORM_BUFFER,M+N,I.__data)):D.isMatrix3?(I.__data[0]=D.elements[0],I.__data[1]=D.elements[1],I.__data[2]=D.elements[2],I.__data[3]=D.elements[0],I.__data[4]=D.elements[3],I.__data[5]=D.elements[4],I.__data[6]=D.elements[5],I.__data[7]=D.elements[0],I.__data[8]=D.elements[6],I.__data[9]=D.elements[7],I.__data[10]=D.elements[8],I.__data[11]=D.elements[0]):(D.toArray(I.__data,N),N+=B.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,M,I.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,v,y){const b=x.value;if(y[v]===void 0){if(typeof b=="number")y[v]=b;else{const T=Array.isArray(b)?b:[b],C=[];for(let I=0;I<T.length;I++)C.push(T[I].clone());y[v]=C}return!0}else if(typeof b=="number"){if(y[v]!==b)return y[v]=b,!0}else{const T=Array.isArray(y[v])?y[v]:[y[v]],C=Array.isArray(b)?b:[b];for(let I=0;I<T.length;I++){const M=T[I];if(M.equals(C[I])===!1)return M.copy(C[I]),!0}}return!1}function m(x){const v=x.uniforms;let y=0;const b=16;let T=0;for(let C=0,I=v.length;C<I;C++){const M=v[C],w={boundary:0,storage:0},N=Array.isArray(M.value)?M.value:[M.value];for(let $=0,D=N.length;$<D;$++){const B=N[$],F=_(B);w.boundary+=F.boundary,w.storage+=F.storage}if(M.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=y,C>0){T=y%b;const $=b-T;T!==0&&$-w.boundary<0&&(y+=b-T,M.__offset=y)}y+=w.storage}return T=y%b,T>0&&(y+=b-T),x.__size=y,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function g(x){const v=x.target;v.removeEventListener("dispose",g);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(const x in i)s.deleteBuffer(i[x]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}function dy(){const s=pr("canvas");return s.style.display="block",s}class Ff{constructor(e={}){const{canvas:t=dy(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const f=new Uint32Array(4),m=new Int32Array(4);let _=null,g=null;const p=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Be,this.useLegacyLights=!0,this.toneMapping=Mn,this.toneMappingExposure=1;const v=this;let y=!1,b=0,T=0,C=null,I=-1,M=null;const w=new Je,N=new Je;let $=null;const D=new fe(0);let B=0,F=t.width,J=t.height,q=1,Y=null,K=null;const Q=new Je(0,0,F,J),de=new Je(0,0,F,J);let k=!1;const ee=new pa;let te=!1,me=!1,ge=null;const Ee=new Ue,De=new Z,Ce=new S,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Le(){return C===null?q:1}let L=n;function se(A,U){for(let V=0;V<A.length;V++){const O=A[V],H=t.getContext(O,U);if(H!==null)return H}return null}try{const A={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${aa}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",z,!1),t.addEventListener("webglcontextcreationerror",oe,!1),L===null){const U=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&U.shift(),L=se(U,A),L===null)throw se(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}L instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let X,re,j,be,pe,ve,Oe,qe,st,R,E,G,ne,ie,ce,Te,le,W,Se,Ae,Re,ye,Me,He;function et(){X=new Rv(L),re=new Ev(L,X,e),X.init(re),ye=new Df(L,X,re),j=new oy(L,X,re),be=new Lv(L),pe=new Zx,ve=new ay(L,X,j,pe,re,ye,be),Oe=new Tv(v),qe=new wv(v),st=new H0(L,re),Me=new yv(L,X,st,re),R=new Cv(L,st,be,Me),E=new Dv(L,R,st,be),Se=new Uv(L,re,ve),Te=new bv(pe),G=new Yx(v,Oe,qe,X,re,Me,Te),ne=new uy(v,pe),ie=new Jx,ce=new ny(X,re),W=new xv(v,Oe,qe,j,E,d,c),le=new ry(v,E,re),He=new hy(L,be,re,j),Ae=new Mv(L,X,be,re),Re=new Iv(L,X,be,re),be.programs=G.programs,v.capabilities=re,v.extensions=X,v.properties=pe,v.renderLists=ie,v.shadowMap=le,v.state=j,v.info=be}et();const P=new ly(v,L);this.xr=P,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const A=X.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=X.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(A){A!==void 0&&(q=A,this.setSize(F,J,!1))},this.getSize=function(A){return A.set(F,J)},this.setSize=function(A,U,V=!0){if(P.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=A,J=U,t.width=Math.floor(A*q),t.height=Math.floor(U*q),V===!0&&(t.style.width=A+"px",t.style.height=U+"px"),this.setViewport(0,0,A,U)},this.getDrawingBufferSize=function(A){return A.set(F*q,J*q).floor()},this.setDrawingBufferSize=function(A,U,V){F=A,J=U,q=V,t.width=Math.floor(A*V),t.height=Math.floor(U*V),this.setViewport(0,0,A,U)},this.getCurrentViewport=function(A){return A.copy(w)},this.getViewport=function(A){return A.copy(Q)},this.setViewport=function(A,U,V,O){A.isVector4?Q.set(A.x,A.y,A.z,A.w):Q.set(A,U,V,O),j.viewport(w.copy(Q).multiplyScalar(q).floor())},this.getScissor=function(A){return A.copy(de)},this.setScissor=function(A,U,V,O){A.isVector4?de.set(A.x,A.y,A.z,A.w):de.set(A,U,V,O),j.scissor(N.copy(de).multiplyScalar(q).floor())},this.getScissorTest=function(){return k},this.setScissorTest=function(A){j.setScissorTest(k=A)},this.setOpaqueSort=function(A){Y=A},this.setTransparentSort=function(A){K=A},this.getClearColor=function(A){return A.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor.apply(W,arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha.apply(W,arguments)},this.clear=function(A=!0,U=!0,V=!0){let O=0;if(A){let H=!1;if(C!==null){const xe=C.texture.format;H=xe===Rl||xe===wl||xe===Al}if(H){const xe=C.texture.type,we=xe===kn||xe===Fn||xe===la||xe===Jn||xe===Tl||xe===Sl,Ie=W.getClearColor(),Pe=W.getClearAlpha(),We=Ie.r,Ne=Ie.g,Fe=Ie.b,tt=pe.get(C).__webglFramebuffer;we?(f[0]=We,f[1]=Ne,f[2]=Fe,f[3]=Pe,L.clearBufferuiv(L.COLOR,tt,f)):(m[0]=We,m[1]=Ne,m[2]=Fe,m[3]=Pe,L.clearBufferiv(L.COLOR,tt,m))}else O|=L.COLOR_BUFFER_BIT}U&&(O|=L.DEPTH_BUFFER_BIT),V&&(O|=L.STENCIL_BUFFER_BIT),L.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",z,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),ie.dispose(),ce.dispose(),pe.dispose(),Oe.dispose(),qe.dispose(),E.dispose(),Me.dispose(),He.dispose(),G.dispose(),P.dispose(),P.removeEventListener("sessionstart",ot),P.removeEventListener("sessionend",mn),ge&&(ge.dispose(),ge=null),Pt.stop()};function ue(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function z(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const A=be.autoReset,U=le.enabled,V=le.autoUpdate,O=le.needsUpdate,H=le.type;et(),be.autoReset=A,le.enabled=U,le.autoUpdate=V,le.needsUpdate=O,le.type=H}function oe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function he(A){const U=A.target;U.removeEventListener("dispose",he),Ze(U)}function Ze(A){rt(A),pe.remove(A)}function rt(A){const U=pe.get(A).programs;U!==void 0&&(U.forEach(function(V){G.releaseProgram(V)}),A.isShaderMaterial&&G.releaseShaderCache(A))}this.renderBufferDirect=function(A,U,V,O,H,xe){U===null&&(U=Ke);const we=H.isMesh&&H.matrixWorld.determinant()<0,Ie=cm(A,U,V,O,H);j.setMaterial(O,we);let Pe=V.index,We=1;O.wireframe===!0&&(Pe=R.getWireframeAttribute(V),We=2);const Ne=V.drawRange,Fe=V.attributes.position;let tt=Ne.start*We,ut=(Ne.start+Ne.count)*We;xe!==null&&(tt=Math.max(tt,xe.start*We),ut=Math.min(ut,(xe.start+xe.count)*We)),Pe!==null?(tt=Math.max(tt,0),ut=Math.min(ut,Pe.count)):Fe!=null&&(tt=Math.max(tt,0),ut=Math.min(ut,Fe.count));const nn=ut-tt;if(nn<0||nn===1/0)return;Me.setup(H,O,Ie,V,Pe);let An,gt=Ae;if(Pe!==null&&(An=st.get(Pe),gt=Re,gt.setIndex(An)),H.isMesh)O.wireframe===!0?(j.setLineWidth(O.wireframeLinewidth*Le()),gt.setMode(L.LINES)):gt.setMode(L.TRIANGLES);else if(H.isLine){let Xe=O.linewidth;Xe===void 0&&(Xe=1),j.setLineWidth(Xe*Le()),H.isLineSegments?gt.setMode(L.LINES):H.isLineLoop?gt.setMode(L.LINE_LOOP):gt.setMode(L.LINE_STRIP)}else H.isPoints?gt.setMode(L.POINTS):H.isSprite&&gt.setMode(L.TRIANGLES);if(H.isInstancedMesh)gt.renderInstances(tt,nn,H.count);else if(V.isInstancedBufferGeometry){const Xe=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,La=Math.min(V.instanceCount,Xe);gt.renderInstances(tt,nn,La)}else gt.render(tt,nn)},this.compile=function(A,U){function V(O,H,xe){O.transparent===!0&&O.side===_n&&O.forceSinglePass===!1?(O.side=zt,O.needsUpdate=!0,Yr(O,H,xe),O.side=Gn,O.needsUpdate=!0,Yr(O,H,xe),O.side=_n):Yr(O,H,xe)}g=ce.get(A),g.init(),x.push(g),A.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(g.pushLight(O),O.castShadow&&g.pushShadow(O))}),g.setupLights(v.useLegacyLights),A.traverse(function(O){const H=O.material;if(H)if(Array.isArray(H))for(let xe=0;xe<H.length;xe++){const we=H[xe];V(we,A,O)}else V(H,A,O)}),x.pop(),g=null};let mt=null;function ui(A){mt&&mt(A)}function ot(){Pt.stop()}function mn(){Pt.start()}const Pt=new If;Pt.setAnimationLoop(ui),typeof self<"u"&&Pt.setContext(self),this.setAnimationLoop=function(A){mt=A,P.setAnimationLoop(A),A===null?Pt.stop():Pt.start()},P.addEventListener("sessionstart",ot),P.addEventListener("sessionend",mn),this.render=function(A,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),P.enabled===!0&&P.isPresenting===!0&&(U=P.updateCameraXR(U)),A.isScene===!0&&A.onBeforeRender(v,A,U,C),g=ce.get(A,x.length),g.init(),x.push(g),Ee.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ee.setFromProjectionMatrix(Ee),me=this.localClippingEnabled,te=Te.init(this.clippingPlanes,me),_=ie.get(A,p.length),_.init(),p.push(_),xu(A,U,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(Y,K),te===!0&&Te.beginShadows();const V=g.state.shadowsArray;if(le.render(V,A,U),te===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,W.render(_,A),g.setupLights(v.useLegacyLights),U.isArrayCamera){const O=U.cameras;for(let H=0,xe=O.length;H<xe;H++){const we=O[H];yu(_,A,we,we.viewport)}}else yu(_,A,U);C!==null&&(ve.updateMultisampleRenderTarget(C),ve.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(v,A,U),Me.resetDefaultState(),I=-1,M=null,x.pop(),x.length>0?g=x[x.length-1]:g=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function xu(A,U,V,O){if(A.visible===!1)return;if(A.layers.test(U.layers)){if(A.isGroup)V=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(U);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ee.intersectsSprite(A)){O&&Ce.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ee);const we=E.update(A),Ie=A.material;Ie.visible&&_.push(A,we,Ie,V,Ce.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ee.intersectsObject(A))){A.isSkinnedMesh&&A.skeleton.frame!==be.render.frame&&(A.skeleton.update(),A.skeleton.frame=be.render.frame);const we=E.update(A),Ie=A.material;if(O&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ce.copy(A.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Ce.copy(we.boundingSphere.center)),Ce.applyMatrix4(A.matrixWorld).applyMatrix4(Ee)),Array.isArray(Ie)){const Pe=we.groups;for(let We=0,Ne=Pe.length;We<Ne;We++){const Fe=Pe[We],tt=Ie[Fe.materialIndex];tt&&tt.visible&&_.push(A,we,tt,V,Ce.z,Fe)}}else Ie.visible&&_.push(A,we,Ie,V,Ce.z,null)}}const xe=A.children;for(let we=0,Ie=xe.length;we<Ie;we++)xu(xe[we],U,V,O)}function yu(A,U,V,O){const H=A.opaque,xe=A.transmissive,we=A.transparent;g.setupLightsView(V),te===!0&&Te.setGlobalState(v.clippingPlanes,V),xe.length>0&&am(H,xe,U,V),O&&j.viewport(w.copy(O)),H.length>0&&Xr(H,U,V),xe.length>0&&Xr(xe,U,V),we.length>0&&Xr(we,U,V),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function am(A,U,V,O){const H=re.isWebGL2;ge===null&&(ge=new hn(1,1,{generateMipmaps:!0,type:X.has("EXT_color_buffer_half_float")?Ts:kn,minFilter:ii,samples:H&&a===!0?4:0})),v.getDrawingBufferSize(De),H?ge.setSize(De.x,De.y):ge.setSize(ia(De.x),ia(De.y));const xe=v.getRenderTarget();v.setRenderTarget(ge),v.getClearColor(D),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear();const we=v.toneMapping;v.toneMapping=Mn,Xr(A,V,O),ve.updateMultisampleRenderTarget(ge),ve.updateRenderTargetMipmap(ge);let Ie=!1;for(let Pe=0,We=U.length;Pe<We;Pe++){const Ne=U[Pe],Fe=Ne.object,tt=Ne.geometry,ut=Ne.material,nn=Ne.group;if(ut.side===_n&&Fe.layers.test(O.layers)){const An=ut.side;ut.side=zt,ut.needsUpdate=!0,Mu(Fe,V,O,tt,ut,nn),ut.side=An,ut.needsUpdate=!0,Ie=!0}}Ie===!0&&(ve.updateMultisampleRenderTarget(ge),ve.updateRenderTargetMipmap(ge)),v.setRenderTarget(xe),v.setClearColor(D,B),v.toneMapping=we}function Xr(A,U,V){const O=U.isScene===!0?U.overrideMaterial:null;for(let H=0,xe=A.length;H<xe;H++){const we=A[H],Ie=we.object,Pe=we.geometry,We=O===null?we.material:O,Ne=we.group;Ie.layers.test(V.layers)&&Mu(Ie,U,V,Pe,We,Ne)}}function Mu(A,U,V,O,H,xe){A.onBeforeRender(v,U,V,O,H,xe),A.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(v,U,V,O,A,xe),H.transparent===!0&&H.side===_n&&H.forceSinglePass===!1?(H.side=zt,H.needsUpdate=!0,v.renderBufferDirect(V,U,O,H,A,xe),H.side=Gn,H.needsUpdate=!0,v.renderBufferDirect(V,U,O,H,A,xe),H.side=_n):v.renderBufferDirect(V,U,O,H,A,xe),A.onAfterRender(v,U,V,O,H,xe)}function Yr(A,U,V){U.isScene!==!0&&(U=Ke);const O=pe.get(A),H=g.state.lights,xe=g.state.shadowsArray,we=H.state.version,Ie=G.getParameters(A,H.state,xe,U,V),Pe=G.getProgramCacheKey(Ie);let We=O.programs;O.environment=A.isMeshStandardMaterial?U.environment:null,O.fog=U.fog,O.envMap=(A.isMeshStandardMaterial?qe:Oe).get(A.envMap||O.environment),We===void 0&&(A.addEventListener("dispose",he),We=new Map,O.programs=We);let Ne=We.get(Pe);if(Ne!==void 0){if(O.currentProgram===Ne&&O.lightsStateVersion===we)return Eu(A,Ie),Ne}else Ie.uniforms=G.getUniforms(A),A.onBuild(V,Ie,v),A.onBeforeCompile(Ie,v),Ne=G.acquireProgram(Ie,Pe),We.set(Pe,Ne),O.uniforms=Ie.uniforms;const Fe=O.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Fe.clippingPlanes=Te.uniform),Eu(A,Ie),O.needsLights=um(A),O.lightsStateVersion=we,O.needsLights&&(Fe.ambientLightColor.value=H.state.ambient,Fe.lightProbe.value=H.state.probe,Fe.directionalLights.value=H.state.directional,Fe.directionalLightShadows.value=H.state.directionalShadow,Fe.spotLights.value=H.state.spot,Fe.spotLightShadows.value=H.state.spotShadow,Fe.rectAreaLights.value=H.state.rectArea,Fe.ltc_1.value=H.state.rectAreaLTC1,Fe.ltc_2.value=H.state.rectAreaLTC2,Fe.pointLights.value=H.state.point,Fe.pointLightShadows.value=H.state.pointShadow,Fe.hemisphereLights.value=H.state.hemi,Fe.directionalShadowMap.value=H.state.directionalShadowMap,Fe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Fe.spotShadowMap.value=H.state.spotShadowMap,Fe.spotLightMatrix.value=H.state.spotLightMatrix,Fe.spotLightMap.value=H.state.spotLightMap,Fe.pointShadowMap.value=H.state.pointShadowMap,Fe.pointShadowMatrix.value=H.state.pointShadowMatrix);const tt=Ne.getUniforms(),ut=Jo.seqWithValue(tt.seq,Fe);return O.currentProgram=Ne,O.uniformsList=ut,Ne}function Eu(A,U){const V=pe.get(A);V.outputColorSpace=U.outputColorSpace,V.instancing=U.instancing,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function cm(A,U,V,O,H){U.isScene!==!0&&(U=Ke),ve.resetTextureUnits();const xe=U.fog,we=O.isMeshStandardMaterial?U.environment:null,Ie=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:un,Pe=(O.isMeshStandardMaterial?qe:Oe).get(O.envMap||we),We=O.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ne=!!V.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Fe=!!V.morphAttributes.position,tt=!!V.morphAttributes.normal,ut=!!V.morphAttributes.color,nn=O.toneMapped?v.toneMapping:Mn,An=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,gt=An!==void 0?An.length:0,Xe=pe.get(O),La=g.state.lights;if(te===!0&&(me===!0||A!==M)){const Wt=A===M&&O.id===I;Te.setState(O,A,Wt)}let yt=!1;O.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==La.state.version||Xe.outputColorSpace!==Ie||H.isInstancedMesh&&Xe.instancing===!1||!H.isInstancedMesh&&Xe.instancing===!0||H.isSkinnedMesh&&Xe.skinning===!1||!H.isSkinnedMesh&&Xe.skinning===!0||Xe.envMap!==Pe||O.fog===!0&&Xe.fog!==xe||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Te.numPlanes||Xe.numIntersection!==Te.numIntersection)||Xe.vertexAlphas!==We||Xe.vertexTangents!==Ne||Xe.morphTargets!==Fe||Xe.morphNormals!==tt||Xe.morphColors!==ut||Xe.toneMapping!==nn||re.isWebGL2===!0&&Xe.morphTargetsCount!==gt)&&(yt=!0):(yt=!0,Xe.__version=O.version);let hi=Xe.currentProgram;yt===!0&&(hi=Yr(O,U,H));let bu=!1,Fs=!1,Pa=!1;const Ot=hi.getUniforms(),di=Xe.uniforms;if(j.useProgram(hi.program)&&(bu=!0,Fs=!0,Pa=!0),O.id!==I&&(I=O.id,Fs=!0),bu||M!==A){if(Ot.setValue(L,"projectionMatrix",A.projectionMatrix),re.logarithmicDepthBuffer&&Ot.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),M!==A&&(M=A,Fs=!0,Pa=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const Wt=Ot.map.cameraPosition;Wt!==void 0&&Wt.setValue(L,Ce.setFromMatrixPosition(A.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Ot.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||H.isSkinnedMesh)&&Ot.setValue(L,"viewMatrix",A.matrixWorldInverse)}if(H.isSkinnedMesh){Ot.setOptional(L,H,"bindMatrix"),Ot.setOptional(L,H,"bindMatrixInverse");const Wt=H.skeleton;Wt&&(re.floatVertexTextures?(Wt.boneTexture===null&&Wt.computeBoneTexture(),Ot.setValue(L,"boneTexture",Wt.boneTexture,ve),Ot.setValue(L,"boneTextureSize",Wt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Oa=V.morphAttributes;if((Oa.position!==void 0||Oa.normal!==void 0||Oa.color!==void 0&&re.isWebGL2===!0)&&Se.update(H,V,hi),(Fs||Xe.receiveShadow!==H.receiveShadow)&&(Xe.receiveShadow=H.receiveShadow,Ot.setValue(L,"receiveShadow",H.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(di.envMap.value=Pe,di.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),Fs&&(Ot.setValue(L,"toneMappingExposure",v.toneMappingExposure),Xe.needsLights&&lm(di,Pa),xe&&O.fog===!0&&ne.refreshFogUniforms(di,xe),ne.refreshMaterialUniforms(di,O,q,J,ge),Jo.upload(L,Xe.uniformsList,di,ve)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Jo.upload(L,Xe.uniformsList,di,ve),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Ot.setValue(L,"center",H.center),Ot.setValue(L,"modelViewMatrix",H.modelViewMatrix),Ot.setValue(L,"normalMatrix",H.normalMatrix),Ot.setValue(L,"modelMatrix",H.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Wt=O.uniformsGroups;for(let Ua=0,hm=Wt.length;Ua<hm;Ua++)if(re.isWebGL2){const Tu=Wt[Ua];He.update(Tu,hi),He.bind(Tu,hi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return hi}function lm(A,U){A.ambientLightColor.needsUpdate=U,A.lightProbe.needsUpdate=U,A.directionalLights.needsUpdate=U,A.directionalLightShadows.needsUpdate=U,A.pointLights.needsUpdate=U,A.pointLightShadows.needsUpdate=U,A.spotLights.needsUpdate=U,A.spotLightShadows.needsUpdate=U,A.rectAreaLights.needsUpdate=U,A.hemisphereLights.needsUpdate=U}function um(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,U,V){pe.get(A.texture).__webglTexture=U,pe.get(A.depthTexture).__webglTexture=V;const O=pe.get(A);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=V===void 0,O.__autoAllocateDepthBuffer||X.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,U){const V=pe.get(A);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(A,U=0,V=0){C=A,b=U,T=V;let O=!0,H=null,xe=!1,we=!1;if(A){const Pe=pe.get(A);Pe.__useDefaultFramebuffer!==void 0?(j.bindFramebuffer(L.FRAMEBUFFER,null),O=!1):Pe.__webglFramebuffer===void 0?ve.setupRenderTarget(A):Pe.__hasExternalTextures&&ve.rebindTextures(A,pe.get(A.texture).__webglTexture,pe.get(A.depthTexture).__webglTexture);const We=A.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(we=!0);const Ne=pe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(H=Ne[U],xe=!0):re.isWebGL2&&A.samples>0&&ve.useMultisampledRTT(A)===!1?H=pe.get(A).__webglMultisampledFramebuffer:H=Ne,w.copy(A.viewport),N.copy(A.scissor),$=A.scissorTest}else w.copy(Q).multiplyScalar(q).floor(),N.copy(de).multiplyScalar(q).floor(),$=k;if(j.bindFramebuffer(L.FRAMEBUFFER,H)&&re.drawBuffers&&O&&j.drawBuffers(A,H),j.viewport(w),j.scissor(N),j.setScissorTest($),xe){const Pe=pe.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,Pe.__webglTexture,V)}else if(we){const Pe=pe.get(A.texture),We=U||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Pe.__webglTexture,V||0,We)}I=-1},this.readRenderTargetPixels=function(A,U,V,O,H,xe,we){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=pe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&we!==void 0&&(Ie=Ie[we]),Ie){j.bindFramebuffer(L.FRAMEBUFFER,Ie);try{const Pe=A.texture,We=Pe.format,Ne=Pe.type;if(We!==Yt&&ye.convert(We)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=Ne===Ts&&(X.has("EXT_color_buffer_half_float")||re.isWebGL2&&X.has("EXT_color_buffer_float"));if(Ne!==kn&&ye.convert(Ne)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===xn&&(re.isWebGL2||X.has("OES_texture_float")||X.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=A.width-O&&V>=0&&V<=A.height-H&&L.readPixels(U,V,O,H,ye.convert(We),ye.convert(Ne),xe)}finally{const Pe=C!==null?pe.get(C).__webglFramebuffer:null;j.bindFramebuffer(L.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(A,U,V=0){const O=Math.pow(2,-V),H=Math.floor(U.image.width*O),xe=Math.floor(U.image.height*O);ve.setTexture2D(U,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,A.x,A.y,H,xe),j.unbindTexture()},this.copyTextureToTexture=function(A,U,V,O=0){const H=U.image.width,xe=U.image.height,we=ye.convert(V.format),Ie=ye.convert(V.type);ve.setTexture2D(V,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,V.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,V.unpackAlignment),U.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,O,A.x,A.y,H,xe,we,Ie,U.image.data):U.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,O,A.x,A.y,U.mipmaps[0].width,U.mipmaps[0].height,we,U.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,O,A.x,A.y,we,Ie,U.image),O===0&&V.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),j.unbindTexture()},this.copyTextureToTexture3D=function(A,U,V,O,H=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=A.max.x-A.min.x+1,we=A.max.y-A.min.y+1,Ie=A.max.z-A.min.z+1,Pe=ye.convert(O.format),We=ye.convert(O.type);let Ne;if(O.isData3DTexture)ve.setTexture3D(O,0),Ne=L.TEXTURE_3D;else if(O.isDataArrayTexture)ve.setTexture2DArray(O,0),Ne=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const Fe=L.getParameter(L.UNPACK_ROW_LENGTH),tt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ut=L.getParameter(L.UNPACK_SKIP_PIXELS),nn=L.getParameter(L.UNPACK_SKIP_ROWS),An=L.getParameter(L.UNPACK_SKIP_IMAGES),gt=V.isCompressedTexture?V.mipmaps[0]:V.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,gt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,gt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,A.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,A.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,A.min.z),V.isDataTexture||V.isData3DTexture?L.texSubImage3D(Ne,H,U.x,U.y,U.z,xe,we,Ie,Pe,We,gt.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(Ne,H,U.x,U.y,U.z,xe,we,Ie,Pe,gt.data)):L.texSubImage3D(Ne,H,U.x,U.y,U.z,xe,we,Ie,Pe,We,gt),L.pixelStorei(L.UNPACK_ROW_LENGTH,Fe),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,tt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ut),L.pixelStorei(L.UNPACK_SKIP_ROWS,nn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,An),H===0&&O.generateMipmaps&&L.generateMipmap(Ne),j.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?ve.setTextureCube(A,0):A.isData3DTexture?ve.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ve.setTexture2DArray(A,0):ve.setTexture2D(A,0),j.unbindTexture()},this.resetState=function(){b=0,T=0,C=null,j.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Be?jn:Il}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===jn?Be:un}}class zf extends Ff{}zf.prototype.isWebGL1Renderer=!0;class _a{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new fe(e),this.density=t}clone(){return new _a(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class va{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new fe(e),this.near=t,this.far=n}clone(){return new va(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class kf extends $e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class xa{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=dr,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=$t()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$t()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$t()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ut=new S;class Ni{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}setX(e,t){return this.normalized&&(t=Ge(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ge(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ge(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ge(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Zt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Zt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Zt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Zt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ge(t,this.array),n=Ge(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ge(t,this.array),n=Ge(n,this.array),i=Ge(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ge(t,this.array),n=Ge(n,this.array),i=Ge(i,this.array),r=Ge(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Qe(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ni(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class kl extends Lt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let as;const Hs=new S,cs=new S,ls=new S,us=new Z,Ws=new Z,Gf=new Ue,mo=new S,qs=new S,go=new S,ch=new Z,nc=new Z,lh=new Z;class Vf extends $e{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",as===void 0){as=new Ve;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new xa(t,5);as.setIndex([0,1,2,0,2,3]),as.setAttribute("position",new Ni(n,3,0,!1)),as.setAttribute("uv",new Ni(n,2,3,!1))}this.geometry=as,this.material=e!==void 0?e:new kl,this.center=new Z(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cs.setFromMatrixScale(this.matrixWorld),Gf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ls.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cs.multiplyScalar(-ls.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;_o(mo.set(-.5,-.5,0),ls,o,cs,i,r),_o(qs.set(.5,-.5,0),ls,o,cs,i,r),_o(go.set(.5,.5,0),ls,o,cs,i,r),ch.set(0,0),nc.set(1,0),lh.set(1,1);let a=e.ray.intersectTriangle(mo,qs,go,!1,Hs);if(a===null&&(_o(qs.set(-.5,.5,0),ls,o,cs,i,r),nc.set(0,1),a=e.ray.intersectTriangle(mo,go,qs,!1,Hs),a===null))return;const c=e.ray.origin.distanceTo(Hs);c<e.near||c>e.far||t.push({distance:c,point:Hs.clone(),uv:Ft.getInterpolation(Hs,mo,qs,go,ch,nc,lh,new Z),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function _o(s,e,t,n,i,r){us.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Ws.x=r*us.x-i*us.y,Ws.y=i*us.x+r*us.y):Ws.copy(us),s.copy(e),s.x+=Ws.x,s.y+=Ws.y,s.applyMatrix4(Gf)}const vo=new S,uh=new S;class Hf extends $e{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let r;for(r=0;r<i.length&&!(t<i[r].distance);r++);return i.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){vo.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(vo);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){vo.setFromMatrixPosition(e.matrixWorld),uh.setFromMatrixPosition(this.matrixWorld);const n=vo.distanceTo(uh)/e.zoom;t[0].object.visible=!0;let i,r;for(i=1,r=t.length;i<r;i++){let o=t[i].distance;if(t[i].object.visible&&(o-=o*t[i].hysteresis),n>=o)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const o=n[i];t.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return t}}const hh=new S,dh=new Je,fh=new Je,fy=new S,ph=new Ue,hs=new S,ic=new dn,mh=new Ue,sc=new Is;class Wf extends At{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ue,this.bindMatrixInverse=new Ue,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Tn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)hs.fromBufferAttribute(t,n),this.applyBoneTransform(n,hs),this.boundingBox.expandByPoint(hs)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new dn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)hs.fromBufferAttribute(t,n),this.applyBoneTransform(n,hs),this.boundingSphere.expandByPoint(hs)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ic.copy(this.boundingSphere),ic.applyMatrix4(i),e.ray.intersectsSphere(ic)!==!1&&(mh.copy(i).invert(),sc.copy(e.ray).applyMatrix4(mh),!(this.boundingBox!==null&&sc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,sc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Je,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;dh.fromBufferAttribute(i.attributes.skinIndex,e),fh.fromBufferAttribute(i.attributes.skinWeight,e),hh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=fh.getComponent(r);if(o!==0){const a=dh.getComponent(r);ph.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(fy.copy(hh).applyMatrix4(ph),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Gl extends $e{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Es extends pt{constructor(e=null,t=1,n=1,i,r,o,a,c,l=dt,u=dt,h,d){super(null,o,a,c,l,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gh=new Ue,py=new Ue;class ya{constructor(e=[],t=[]){this.uuid=$t(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ue)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ue;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:py;gh.multiplyMatrices(a,t[r]),gh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ya(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=bf(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Es(t,e,e,Yt,xn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Gl),this.bones.push(o),this.boneInverses.push(new Ue().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class ws extends Qe{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ds=new Ue,_h=new Ue,xo=[],vh=new Tn,my=new Ue,Xs=new At,Ys=new dn;class qf extends At{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ws(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,my)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Tn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ds),vh.copy(e.boundingBox).applyMatrix4(ds),this.boundingBox.union(vh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new dn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ds),Ys.copy(e.boundingSphere).applyMatrix4(ds),this.boundingSphere.union(Ys)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Xs.geometry=this.geometry,Xs.material=this.material,Xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ys.copy(this.boundingSphere),Ys.applyMatrix4(n),e.ray.intersectsSphere(Ys)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ds),_h.multiplyMatrices(n,ds),Xs.matrixWorld=_h,Xs.raycast(e,xo);for(let o=0,a=xo.length;o<a;o++){const c=xo[o];c.instanceId=r,c.object=this,t.push(c)}xo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ws(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class kt extends Lt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const xh=new S,yh=new S,Mh=new Ue,rc=new Is,yo=new dn;class si extends $e{constructor(e=new Ve,t=new kt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)xh.fromBufferAttribute(t,i-1),yh.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=xh.distanceTo(yh);e.setAttribute("lineDistance",new _e(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yo.copy(n.boundingSphere),yo.applyMatrix4(i),yo.radius+=r,e.ray.intersectsSphere(yo)===!1)return;Mh.copy(i).invert(),rc.copy(e.ray).applyMatrix4(Mh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new S,u=new S,h=new S,d=new S,f=this.isLineSegments?2:1,m=n.index,g=n.attributes.position;if(m!==null){const p=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let v=p,y=x-1;v<y;v+=f){const b=m.getX(v),T=m.getX(v+1);if(l.fromBufferAttribute(g,b),u.fromBufferAttribute(g,T),rc.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(d);I<e.near||I>e.far||t.push({distance:I,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let v=p,y=x-1;v<y;v+=f){if(l.fromBufferAttribute(g,v),u.fromBufferAttribute(g,v+1),rc.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(d);T<e.near||T>e.far||t.push({distance:T,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Eh=new S,bh=new S;class Sn extends si{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Eh.fromBufferAttribute(t,i),bh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Eh.distanceTo(bh);e.setAttribute("lineDistance",new _e(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Xf extends si{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Vl extends Lt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Th=new Ue,nl=new Is,Mo=new dn,Eo=new S;class Yf extends $e{constructor(e=new Ve,t=new Vl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mo.copy(n.boundingSphere),Mo.applyMatrix4(i),Mo.radius+=r,e.ray.intersectsSphere(Mo)===!1)return;Th.copy(i).invert(),nl.copy(e.ray).applyMatrix4(Th);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let m=d,_=f;m<_;m++){const g=l.getX(m);Eo.fromBufferAttribute(h,g),Sh(Eo,g,c,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let m=d,_=f;m<_;m++)Eo.fromBufferAttribute(h,m),Sh(Eo,m,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Sh(s,e,t,n,i,r,o){const a=nl.distanceSqToPoint(s);if(a<t){const c=new S;nl.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class gy extends pt{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:ft,this.magFilter=r!==void 0?r:ft,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class _y extends pt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=dt,this.minFilter=dt,this.generateMipmaps=!1,this.needsUpdate=!0}}class Hl extends pt{constructor(e,t,n,i,r,o,a,c,l,u,h,d){super(null,o,a,c,l,u,i,r,h,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class vy extends Hl{constructor(e,t,n,i,r,o){super(e,t,n,r,o),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=Ct}}class xy extends pt{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const u=n[i],d=n[i+1]-u,f=(o-u)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new Z:new S);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new S,i=[],r=[],o=[],a=new S,c=new Ue;for(let f=0;f<=e;f++){const m=f/e;i[f]=this.getTangentAt(m,new S)}r[0]=new S,o[0]=new S;let l=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(lt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(lt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ma extends fn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){const n=t||new Z,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Zf extends Ma{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Wl(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let d=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const bo=new S,oc=new Wl,ac=new Wl,cc=new Wl;class $f extends fn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new S){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=i[(a-1)%r]:(bo.subVectors(i[0],i[1]).add(i[0]),l=bo);const h=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(bo.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=bo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),oc.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,m,_,g),ac.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,m,_,g),cc.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,m,_,g)}else this.curveType==="catmullrom"&&(oc.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),ac.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),cc.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(oc.calc(c),ac.calc(c),cc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new S().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ah(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function yy(s,e){const t=1-s;return t*t*e}function My(s,e){return 2*(1-s)*s*e}function Ey(s,e){return s*s*e}function tr(s,e,t,n){return yy(s,e)+My(s,t)+Ey(s,n)}function by(s,e){const t=1-s;return t*t*t*e}function Ty(s,e){const t=1-s;return 3*t*t*s*e}function Sy(s,e){return 3*(1-s)*s*s*e}function Ay(s,e){return s*s*s*e}function nr(s,e,t,n,i){return by(s,e)+Ty(s,t)+Sy(s,n)+Ay(s,i)}class ql extends fn{constructor(e=new Z,t=new Z,n=new Z,i=new Z){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Z){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(nr(e,i.x,r.x,o.x,a.x),nr(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Jf extends fn{constructor(e=new S,t=new S,n=new S,i=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new S){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(nr(e,i.x,r.x,o.x,a.x),nr(e,i.y,r.y,o.y,a.y),nr(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ea extends fn{constructor(e=new Z,t=new Z){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Z){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Kf extends fn{constructor(e=new S,t=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new S){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new S){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xl extends fn{constructor(e=new Z,t=new Z,n=new Z){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Z){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(tr(e,i.x,r.x,o.x),tr(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yl extends fn{constructor(e=new S,t=new S,n=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new S){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(tr(e,i.x,r.x,o.x),tr(e,i.y,r.y,o.y),tr(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zl extends fn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Z){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(Ah(a,c.x,l.x,u.x,h.x),Ah(a,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Z().fromArray(i))}return this}}var $l=Object.freeze({__proto__:null,ArcCurve:Zf,CatmullRomCurve3:$f,CubicBezierCurve:ql,CubicBezierCurve3:Jf,EllipseCurve:Ma,LineCurve:Ea,LineCurve3:Kf,QuadraticBezierCurve:Xl,QuadraticBezierCurve3:Yl,SplineCurve:Zl});class jf extends fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Ea(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new $l[i.type]().fromJSON(i))}return this}}class mr extends jf{constructor(e){super(),this.type="Path",this.currentPoint=new Z,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Ea(this.currentPoint.clone(),new Z(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Xl(this.currentPoint.clone(),new Z(e,t),new Z(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new ql(this.currentPoint.clone(),new Z(e,t),new Z(n,i),new Z(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Zl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,i,r,o,a,c),this}absellipse(e,t,n,i,r,o,a,c){const l=new Ma(e,t,n,i,r,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Os extends Ve{constructor(e=[new Z(0,-.5),new Z(.5,0),new Z(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=lt(i,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/t,h=new S,d=new Z,f=new S,m=new S,_=new S;let g=0,p=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:g=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-g,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:g=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(m)}for(let x=0;x<=t;x++){const v=n+x*u*i,y=Math.sin(v),b=Math.cos(v);for(let T=0;T<=e.length-1;T++){h.x=e[T].x*y,h.y=e[T].y,h.z=e[T].x*b,o.push(h.x,h.y,h.z),d.x=x/t,d.y=T/(e.length-1),a.push(d.x,d.y);const C=c[3*T+0]*y,I=c[3*T+1],M=c[3*T+0]*b;l.push(C,I,M)}}for(let x=0;x<t;x++)for(let v=0;v<e.length-1;v++){const y=v+x*e.length,b=y,T=y+e.length,C=y+e.length+1,I=y+1;r.push(b,T,I),r.push(C,I,T)}this.setIndex(r),this.setAttribute("position",new _e(o,3)),this.setAttribute("uv",new _e(a,2)),this.setAttribute("normal",new _e(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Os(e.points,e.segments,e.phiStart,e.phiLength)}}class Lr extends Os{constructor(e=1,t=1,n=4,i=8){const r=new mr;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new Lr(e.radius,e.length,e.capSegments,e.radialSegments)}}class Pr extends Ve{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new S,u=new Z;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=n+h/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new _e(o,3)),this.setAttribute("normal",new _e(a,3)),this.setAttribute("uv",new _e(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Vi extends Ve{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],d=[],f=[];let m=0;const _=[],g=n/2;let p=0;x(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new _e(h,3)),this.setAttribute("normal",new _e(d,3)),this.setAttribute("uv",new _e(f,2));function x(){const y=new S,b=new S;let T=0;const C=(t-e)/n;for(let I=0;I<=r;I++){const M=[],w=I/r,N=w*(t-e)+e;for(let $=0;$<=i;$++){const D=$/i,B=D*c+a,F=Math.sin(B),J=Math.cos(B);b.x=N*F,b.y=-w*n+g,b.z=N*J,h.push(b.x,b.y,b.z),y.set(F,C,J).normalize(),d.push(y.x,y.y,y.z),f.push(D,1-w),M.push(m++)}_.push(M)}for(let I=0;I<i;I++)for(let M=0;M<r;M++){const w=_[M][I],N=_[M+1][I],$=_[M+1][I+1],D=_[M][I+1];u.push(w,N,D),u.push(N,$,D),T+=6}l.addGroup(p,T,0),p+=T}function v(y){const b=m,T=new Z,C=new S;let I=0;const M=y===!0?e:t,w=y===!0?1:-1;for(let $=1;$<=i;$++)h.push(0,g*w,0),d.push(0,w,0),f.push(.5,.5),m++;const N=m;for(let $=0;$<=i;$++){const B=$/i*c+a,F=Math.cos(B),J=Math.sin(B);C.x=M*J,C.y=g*w,C.z=M*F,h.push(C.x,C.y,C.z),d.push(0,w,0),T.x=F*.5+.5,T.y=J*.5*w+.5,f.push(T.x,T.y),m++}for(let $=0;$<i;$++){const D=b+$,B=N+$;y===!0?u.push(B,B+1,D):u.push(B+1,B,D),I+=3}l.addGroup(p,I,y===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Or extends Vi{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Or(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wn extends Ve{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];a(i),l(n),u(),this.setAttribute("position",new _e(r,3)),this.setAttribute("normal",new _e(r.slice(),3)),this.setAttribute("uv",new _e(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const v=new S,y=new S,b=new S;for(let T=0;T<t.length;T+=3)f(t[T+0],v),f(t[T+1],y),f(t[T+2],b),c(v,y,b,x)}function c(x,v,y,b){const T=b+1,C=[];for(let I=0;I<=T;I++){C[I]=[];const M=x.clone().lerp(y,I/T),w=v.clone().lerp(y,I/T),N=T-I;for(let $=0;$<=N;$++)$===0&&I===T?C[I][$]=M:C[I][$]=M.clone().lerp(w,$/N)}for(let I=0;I<T;I++)for(let M=0;M<2*(T-I)-1;M++){const w=Math.floor(M/2);M%2===0?(d(C[I][w+1]),d(C[I+1][w]),d(C[I][w])):(d(C[I][w+1]),d(C[I+1][w+1]),d(C[I+1][w]))}}function l(x){const v=new S;for(let y=0;y<r.length;y+=3)v.x=r[y+0],v.y=r[y+1],v.z=r[y+2],v.normalize().multiplyScalar(x),r[y+0]=v.x,r[y+1]=v.y,r[y+2]=v.z}function u(){const x=new S;for(let v=0;v<r.length;v+=3){x.x=r[v+0],x.y=r[v+1],x.z=r[v+2];const y=g(x)/2/Math.PI+.5,b=p(x)/Math.PI+.5;o.push(y,1-b)}m(),h()}function h(){for(let x=0;x<o.length;x+=6){const v=o[x+0],y=o[x+2],b=o[x+4],T=Math.max(v,y,b),C=Math.min(v,y,b);T>.9&&C<.1&&(v<.2&&(o[x+0]+=1),y<.2&&(o[x+2]+=1),b<.2&&(o[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,v){const y=x*3;v.x=e[y+0],v.y=e[y+1],v.z=e[y+2]}function m(){const x=new S,v=new S,y=new S,b=new S,T=new Z,C=new Z,I=new Z;for(let M=0,w=0;M<r.length;M+=9,w+=6){x.set(r[M+0],r[M+1],r[M+2]),v.set(r[M+3],r[M+4],r[M+5]),y.set(r[M+6],r[M+7],r[M+8]),T.set(o[w+0],o[w+1]),C.set(o[w+2],o[w+3]),I.set(o[w+4],o[w+5]),b.copy(x).add(v).add(y).divideScalar(3);const N=g(b);_(T,w+0,x,N),_(C,w+2,v,N),_(I,w+4,y,N)}}function _(x,v,y,b){b<0&&x.x===1&&(o[v]=x.x-1),y.x===0&&y.z===0&&(o[v]=b/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wn(e.vertices,e.indices,e.radius,e.details)}}class Ur extends Wn{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ur(e.radius,e.detail)}}const To=new S,So=new S,lc=new S,Ao=new Ft;class Qf extends Ve{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(Pi*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let m=0;m<c;m+=3){o?(l[0]=o.getX(m),l[1]=o.getX(m+1),l[2]=o.getX(m+2)):(l[0]=m,l[1]=m+1,l[2]=m+2);const{a:_,b:g,c:p}=Ao;if(_.fromBufferAttribute(a,l[0]),g.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),Ao.getNormal(lc),h[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,h[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,h[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let x=0;x<3;x++){const v=(x+1)%3,y=h[x],b=h[v],T=Ao[u[x]],C=Ao[u[v]],I=`${y}_${b}`,M=`${b}_${y}`;M in d&&d[M]?(lc.dot(d[M].normal)<=r&&(f.push(T.x,T.y,T.z),f.push(C.x,C.y,C.z)),d[M]=null):I in d||(d[I]={index0:l[x],index1:l[v],normal:lc.clone()})}}for(const m in d)if(d[m]){const{index0:_,index1:g}=d[m];To.fromBufferAttribute(a,_),So.fromBufferAttribute(a,g),f.push(To.x,To.y,To.z),f.push(So.x,So.y,So.z)}this.setAttribute("position",new _e(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Oi extends mr{constructor(e){super(e),this.uuid=$t(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new mr().fromJSON(i))}return this}}const wy={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=ep(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,h,d,f;if(n&&(r=Py(s,e,r,t)),s.length>80*t){a=l=s[0],c=u=s[1];for(let m=t;m<i;m+=t)h=s[m],d=s[m+1],h<a&&(a=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);f=Math.max(l-a,u-c),f=f!==0?32767/f:0}return gr(r,o,t,a,c,f,0),o}};function ep(s,e,t,n,i){let r,o;if(i===Hy(s,e,t,n)>0)for(r=e;r<t;r+=n)o=wh(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=wh(r,s[r],s[r+1],o);return o&&ba(o,o.next)&&(vr(o),o=o.next),o}function Bi(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(ba(t,t.next)||it(t.prev,t,t.next)===0)){if(vr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function gr(s,e,t,n,i,r,o){if(!s)return;!o&&r&&By(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?Cy(s,n,i,r):Ry(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),vr(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=Iy(Bi(s),e,t),gr(s,e,t,n,i,r,2)):o===2&&Ly(s,e,t,n,i,r):gr(Bi(s),e,t,n,i,r,1);break}}}function Ry(s){const e=s.prev,t=s,n=s.next;if(it(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=i<r?i<o?i:o:r<o?r:o,h=a<c?a<l?a:l:c<l?c:l,d=i>r?i>o?i:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let m=n.next;for(;m!==e;){if(m.x>=u&&m.x<=d&&m.y>=h&&m.y<=f&&ys(i,a,r,c,o,l,m.x,m.y)&&it(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Cy(s,e,t,n){const i=s.prev,r=s,o=s.next;if(it(i,r,o)>=0)return!1;const a=i.x,c=r.x,l=o.x,u=i.y,h=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,m=u<h?u<d?u:d:h<d?h:d,_=a>c?a>l?a:l:c>l?c:l,g=u>h?u>d?u:d:h>d?h:d,p=il(f,m,e,t,n),x=il(_,g,e,t,n);let v=s.prevZ,y=s.nextZ;for(;v&&v.z>=p&&y&&y.z<=x;){if(v.x>=f&&v.x<=_&&v.y>=m&&v.y<=g&&v!==i&&v!==o&&ys(a,u,c,h,l,d,v.x,v.y)&&it(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&ys(a,u,c,h,l,d,y.x,y.y)&&it(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=_&&v.y>=m&&v.y<=g&&v!==i&&v!==o&&ys(a,u,c,h,l,d,v.x,v.y)&&it(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=x;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&ys(a,u,c,h,l,d,y.x,y.y)&&it(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Iy(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!ba(i,r)&&tp(i,n,n.next,r)&&_r(i,r)&&_r(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),vr(n),vr(n.next),n=s=r),n=n.next}while(n!==s);return Bi(n)}function Ly(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ky(o,a)){let c=np(o,a);o=Bi(o,o.next),c=Bi(c,c.next),gr(o,e,t,n,i,r,0),gr(c,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Py(s,e,t,n){const i=[];let r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=ep(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(zy(l));for(i.sort(Oy),r=0;r<i.length;r++)t=Uy(i[r],t);return t}function Oy(s,e){return s.x-e.x}function Uy(s,e){const t=Dy(s,e);if(!t)return e;const n=np(t,s);return Bi(n,n.next),Bi(t,t.next)}function Dy(s,e){let t=e,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===r))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,c=i.x,l=i.y;let u=1/0,h;t=i;do r>=t.x&&t.x>=c&&r!==t.x&&ys(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),_r(t,s)&&(h<u||h===u&&(t.x>i.x||t.x===i.x&&Ny(i,t)))&&(i=t,u=h)),t=t.next;while(t!==a);return i}function Ny(s,e){return it(s.prev,s,e.prev)<0&&it(e.next,s,s.next)<0}function By(s,e,t,n){let i=s;do i.z===0&&(i.z=il(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Fy(i)}function Fy(s){let e,t,n,i,r,o,a,c,l=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(o>1);return s}function il(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function zy(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function ys(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function ky(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Gy(s,e)&&(_r(s,e)&&_r(e,s)&&Vy(s,e)&&(it(s.prev,s,e.prev)||it(s,e.prev,e))||ba(s,e)&&it(s.prev,s,s.next)>0&&it(e.prev,e,e.next)>0)}function it(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function ba(s,e){return s.x===e.x&&s.y===e.y}function tp(s,e,t,n){const i=Ro(it(s,e,t)),r=Ro(it(s,e,n)),o=Ro(it(t,n,s)),a=Ro(it(t,n,e));return!!(i!==r&&o!==a||i===0&&wo(s,t,e)||r===0&&wo(s,n,e)||o===0&&wo(t,s,n)||a===0&&wo(t,e,n))}function wo(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Ro(s){return s>0?1:s<0?-1:0}function Gy(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&tp(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function _r(s,e){return it(s.prev,s,s.next)<0?it(s,e,s.next)>=0&&it(s,s.prev,e)>=0:it(s,e,s.prev)<0||it(s,s.next,e)<0}function Vy(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function np(s,e){const t=new sl(s.i,s.x,s.y),n=new sl(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function wh(s,e,t,n){const i=new sl(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function vr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function sl(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Hy(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class En{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return En.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Rh(e),Ch(n,e);let o=e.length;t.forEach(Rh);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,Ch(n,t[c]);const a=wy.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Rh(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Ch(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Dr extends Ve{constructor(e=new Oi([new Z(.5,.5),new Z(-.5,.5),new Z(-.5,-.5),new Z(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new _e(i,3)),this.setAttribute("uv",new _e(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:Wy;let v,y=!1,b,T,C,I;p&&(v=p.getSpacedPoints(u),y=!0,d=!1,b=p.computeFrenetFrames(u,!1),T=new S,C=new S,I=new S),d||(g=0,f=0,m=0,_=0);const M=a.extractPoints(l);let w=M.shape;const N=M.holes;if(!En.isClockWise(w)){w=w.reverse();for(let L=0,se=N.length;L<se;L++){const X=N[L];En.isClockWise(X)&&(N[L]=X.reverse())}}const D=En.triangulateShape(w,N),B=w;for(let L=0,se=N.length;L<se;L++){const X=N[L];w=w.concat(X)}function F(L,se,X){return se||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(se,X)}const J=w.length,q=D.length;function Y(L,se,X){let re,j,be;const pe=L.x-se.x,ve=L.y-se.y,Oe=X.x-L.x,qe=X.y-L.y,st=pe*pe+ve*ve,R=pe*qe-ve*Oe;if(Math.abs(R)>Number.EPSILON){const E=Math.sqrt(st),G=Math.sqrt(Oe*Oe+qe*qe),ne=se.x-ve/E,ie=se.y+pe/E,ce=X.x-qe/G,Te=X.y+Oe/G,le=((ce-ne)*qe-(Te-ie)*Oe)/(pe*qe-ve*Oe);re=ne+pe*le-L.x,j=ie+ve*le-L.y;const W=re*re+j*j;if(W<=2)return new Z(re,j);be=Math.sqrt(W/2)}else{let E=!1;pe>Number.EPSILON?Oe>Number.EPSILON&&(E=!0):pe<-Number.EPSILON?Oe<-Number.EPSILON&&(E=!0):Math.sign(ve)===Math.sign(qe)&&(E=!0),E?(re=-ve,j=pe,be=Math.sqrt(st)):(re=pe,j=ve,be=Math.sqrt(st/2))}return new Z(re/be,j/be)}const K=[];for(let L=0,se=B.length,X=se-1,re=L+1;L<se;L++,X++,re++)X===se&&(X=0),re===se&&(re=0),K[L]=Y(B[L],B[X],B[re]);const Q=[];let de,k=K.concat();for(let L=0,se=N.length;L<se;L++){const X=N[L];de=[];for(let re=0,j=X.length,be=j-1,pe=re+1;re<j;re++,be++,pe++)be===j&&(be=0),pe===j&&(pe=0),de[re]=Y(X[re],X[be],X[pe]);Q.push(de),k=k.concat(de)}for(let L=0;L<g;L++){const se=L/g,X=f*Math.cos(se*Math.PI/2),re=m*Math.sin(se*Math.PI/2)+_;for(let j=0,be=B.length;j<be;j++){const pe=F(B[j],K[j],re);Ee(pe.x,pe.y,-X)}for(let j=0,be=N.length;j<be;j++){const pe=N[j];de=Q[j];for(let ve=0,Oe=pe.length;ve<Oe;ve++){const qe=F(pe[ve],de[ve],re);Ee(qe.x,qe.y,-X)}}}const ee=m+_;for(let L=0;L<J;L++){const se=d?F(w[L],k[L],ee):w[L];y?(C.copy(b.normals[0]).multiplyScalar(se.x),T.copy(b.binormals[0]).multiplyScalar(se.y),I.copy(v[0]).add(C).add(T),Ee(I.x,I.y,I.z)):Ee(se.x,se.y,0)}for(let L=1;L<=u;L++)for(let se=0;se<J;se++){const X=d?F(w[se],k[se],ee):w[se];y?(C.copy(b.normals[L]).multiplyScalar(X.x),T.copy(b.binormals[L]).multiplyScalar(X.y),I.copy(v[L]).add(C).add(T),Ee(I.x,I.y,I.z)):Ee(X.x,X.y,h/u*L)}for(let L=g-1;L>=0;L--){const se=L/g,X=f*Math.cos(se*Math.PI/2),re=m*Math.sin(se*Math.PI/2)+_;for(let j=0,be=B.length;j<be;j++){const pe=F(B[j],K[j],re);Ee(pe.x,pe.y,h+X)}for(let j=0,be=N.length;j<be;j++){const pe=N[j];de=Q[j];for(let ve=0,Oe=pe.length;ve<Oe;ve++){const qe=F(pe[ve],de[ve],re);y?Ee(qe.x,qe.y+v[u-1].y,v[u-1].x+X):Ee(qe.x,qe.y,h+X)}}}te(),me();function te(){const L=i.length/3;if(d){let se=0,X=J*se;for(let re=0;re<q;re++){const j=D[re];De(j[2]+X,j[1]+X,j[0]+X)}se=u+g*2,X=J*se;for(let re=0;re<q;re++){const j=D[re];De(j[0]+X,j[1]+X,j[2]+X)}}else{for(let se=0;se<q;se++){const X=D[se];De(X[2],X[1],X[0])}for(let se=0;se<q;se++){const X=D[se];De(X[0]+J*u,X[1]+J*u,X[2]+J*u)}}n.addGroup(L,i.length/3-L,0)}function me(){const L=i.length/3;let se=0;ge(B,se),se+=B.length;for(let X=0,re=N.length;X<re;X++){const j=N[X];ge(j,se),se+=j.length}n.addGroup(L,i.length/3-L,1)}function ge(L,se){let X=L.length;for(;--X>=0;){const re=X;let j=X-1;j<0&&(j=L.length-1);for(let be=0,pe=u+g*2;be<pe;be++){const ve=J*be,Oe=J*(be+1),qe=se+re+ve,st=se+j+ve,R=se+j+Oe,E=se+re+Oe;Ce(qe,st,R,E)}}}function Ee(L,se,X){c.push(L),c.push(se),c.push(X)}function De(L,se,X){Ke(L),Ke(se),Ke(X);const re=i.length/3,j=x.generateTopUV(n,i,re-3,re-2,re-1);Le(j[0]),Le(j[1]),Le(j[2])}function Ce(L,se,X,re){Ke(L),Ke(se),Ke(re),Ke(se),Ke(X),Ke(re);const j=i.length/3,be=x.generateSideWallUV(n,i,j-6,j-3,j-2,j-1);Le(be[0]),Le(be[1]),Le(be[3]),Le(be[1]),Le(be[2]),Le(be[3])}function Ke(L){i.push(c[L*3+0]),i.push(c[L*3+1]),i.push(c[L*3+2])}function Le(L){r.push(L.x),r.push(L.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return qy(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new $l[i.type]().fromJSON(i)),new Dr(n,e.options)}}const Wy={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[i*3],u=e[i*3+1];return[new Z(r,o),new Z(a,c),new Z(l,u)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[i*3],f=e[i*3+1],m=e[i*3+2],_=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new Z(o,1-c),new Z(l,1-h),new Z(d,1-m),new Z(_,1-p)]:[new Z(a,1-c),new Z(u,1-h),new Z(f,1-m),new Z(g,1-p)]}};function qy(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Nr extends Wn{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Nr(e.radius,e.detail)}}class Us extends Wn{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Us(e.radius,e.detail)}}class Br extends Ve{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],u=[];let h=e;const d=(t-e)/i,f=new S,m=new Z;for(let _=0;_<=i;_++){for(let g=0;g<=n;g++){const p=r+g/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,u.push(m.x,m.y)}h+=d}for(let _=0;_<i;_++){const g=_*(n+1);for(let p=0;p<n;p++){const x=p+g,v=x,y=x+n+1,b=x+n+2,T=x+1;a.push(v,y,T),a.push(y,b,T)}}this.setIndex(a),this.setAttribute("position",new _e(c,3)),this.setAttribute("normal",new _e(l,3)),this.setAttribute("uv",new _e(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Br(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Fr extends Ve{constructor(e=new Oi([new Z(0,.5),new Z(-.5,-.5),new Z(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new _e(i,3)),this.setAttribute("normal",new _e(r,3)),this.setAttribute("uv",new _e(o,2));function l(u){const h=i.length/3,d=u.extractPoints(t);let f=d.shape;const m=d.holes;En.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){const x=m[g];En.isClockWise(x)===!0&&(m[g]=x.reverse())}const _=En.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){const x=m[g];f=f.concat(x)}for(let g=0,p=f.length;g<p;g++){const x=f[g];i.push(x.x,x.y,0),r.push(0,0,1),o.push(x.x,x.y)}for(let g=0,p=_.length;g<p;g++){const x=_[g],v=x[0]+h,y=x[1]+h,b=x[2]+h;n.push(v,y,b),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Xy(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const o=t[e.shapes[i]];n.push(o)}return new Fr(n,e.curveSegments)}}function Xy(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class Ds extends Ve{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new S,d=new S,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const x=[],v=p/n;let y=0;p===0&&o===0?y=.5/t:p===n&&c===Math.PI&&(y=-.5/t);for(let b=0;b<=t;b++){const T=b/t;h.x=-e*Math.cos(i+T*r)*Math.sin(o+v*a),h.y=e*Math.cos(o+v*a),h.z=e*Math.sin(i+T*r)*Math.sin(o+v*a),m.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),g.push(T+y,1-v),x.push(l++)}u.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const v=u[p][x+1],y=u[p][x],b=u[p+1][x],T=u[p+1][x+1];(p!==0||o>0)&&f.push(v,y,T),(p!==n-1||c<Math.PI)&&f.push(y,b,T)}this.setIndex(f),this.setAttribute("position",new _e(m,3)),this.setAttribute("normal",new _e(_,3)),this.setAttribute("uv",new _e(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ds(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class zr extends Wn{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new zr(e.radius,e.detail)}}class kr extends Ve{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],u=new S,h=new S,d=new S;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){const _=m/i*r,g=f/n*Math.PI*2;h.x=(e+t*Math.cos(g))*Math.cos(_),h.y=(e+t*Math.cos(g))*Math.sin(_),h.z=t*Math.sin(g),a.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(m/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){const _=(i+1)*f+m-1,g=(i+1)*(f-1)+m-1,p=(i+1)*(f-1)+m,x=(i+1)*f+m;o.push(_,g,x),o.push(g,p,x)}this.setIndex(o),this.setAttribute("position",new _e(a,3)),this.setAttribute("normal",new _e(c,3)),this.setAttribute("uv",new _e(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Gr extends Ve{constructor(e=1,t=.4,n=64,i=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:o},n=Math.floor(n),i=Math.floor(i);const a=[],c=[],l=[],u=[],h=new S,d=new S,f=new S,m=new S,_=new S,g=new S,p=new S;for(let v=0;v<=n;++v){const y=v/n*r*Math.PI*2;x(y,r,o,e,f),x(y+.01,r,o,e,m),g.subVectors(m,f),p.addVectors(m,f),_.crossVectors(g,p),p.crossVectors(_,g),_.normalize(),p.normalize();for(let b=0;b<=i;++b){const T=b/i*Math.PI*2,C=-t*Math.cos(T),I=t*Math.sin(T);h.x=f.x+(C*p.x+I*_.x),h.y=f.y+(C*p.y+I*_.y),h.z=f.z+(C*p.z+I*_.z),c.push(h.x,h.y,h.z),d.subVectors(h,f).normalize(),l.push(d.x,d.y,d.z),u.push(v/n),u.push(b/i)}}for(let v=1;v<=n;v++)for(let y=1;y<=i;y++){const b=(i+1)*(v-1)+(y-1),T=(i+1)*v+(y-1),C=(i+1)*v+y,I=(i+1)*(v-1)+y;a.push(b,T,I),a.push(T,C,I)}this.setIndex(a),this.setAttribute("position",new _e(c,3)),this.setAttribute("normal",new _e(l,3)),this.setAttribute("uv",new _e(u,2));function x(v,y,b,T,C){const I=Math.cos(v),M=Math.sin(v),w=b/y*v,N=Math.cos(w);C.x=T*(2+N)*.5*I,C.y=T*(2+N)*M*.5,C.z=T*Math.sin(w)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gr(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Vr extends Ve{constructor(e=new Yl(new S(-1,-1,0),new S(-1,1,0),new S(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new S,c=new S,l=new Z;let u=new S;const h=[],d=[],f=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new _e(h,3)),this.setAttribute("normal",new _e(d,3)),this.setAttribute("uv",new _e(f,2));function _(){for(let v=0;v<t;v++)g(v);g(r===!1?t:0),x(),p()}function g(v){u=e.getPointAt(v/t,u);const y=o.normals[v],b=o.binormals[v];for(let T=0;T<=i;T++){const C=T/i*Math.PI*2,I=Math.sin(C),M=-Math.cos(C);c.x=M*y.x+I*b.x,c.y=M*y.y+I*b.y,c.z=M*y.z+I*b.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,h.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=t;v++)for(let y=1;y<=i;y++){const b=(i+1)*(v-1)+(y-1),T=(i+1)*v+(y-1),C=(i+1)*v+y,I=(i+1)*(v-1)+y;m.push(b,T,I),m.push(T,C,I)}}function x(){for(let v=0;v<=t;v++)for(let y=0;y<=i;y++)l.x=v/t,l.y=y/i,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Vr(new $l[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class ip extends Ve{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new S,r=new S;if(e.index!==null){const o=e.attributes.position,a=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){const h=c[l],d=h.start,f=h.count;for(let m=d,_=d+f;m<_;m+=3)for(let g=0;g<3;g++){const p=a.getX(m+g),x=a.getX(m+(g+1)%3);i.fromBufferAttribute(o,p),r.fromBufferAttribute(o,x),Ih(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{const o=e.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){const u=3*a+l,h=3*a+(l+1)%3;i.fromBufferAttribute(o,u),r.fromBufferAttribute(o,h),Ih(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new _e(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Ih(s,e,t){const n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var Lh=Object.freeze({__proto__:null,BoxGeometry:ci,CapsuleGeometry:Lr,CircleGeometry:Pr,ConeGeometry:Or,CylinderGeometry:Vi,DodecahedronGeometry:Ur,EdgesGeometry:Qf,ExtrudeGeometry:Dr,IcosahedronGeometry:Nr,LatheGeometry:Os,OctahedronGeometry:Us,PlaneGeometry:Ls,PolyhedronGeometry:Wn,RingGeometry:Br,ShapeGeometry:Fr,SphereGeometry:Ds,TetrahedronGeometry:zr,TorusGeometry:kr,TorusKnotGeometry:Gr,TubeGeometry:Vr,WireframeGeometry:ip});class sp extends Lt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new fe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class rp extends bn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Jl extends Lt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oi,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class op extends Jl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Z(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ap extends Lt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new fe(16777215),this.specular=new fe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oi,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Rr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cp extends Lt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new fe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oi,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class lp extends Lt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oi,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class up extends Lt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oi,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Rr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hp extends Lt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new fe(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oi,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class dp extends kt{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function tn(s,e,t){return Kl(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)}function Ci(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Kl(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function fp(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function rl(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function jl(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}function Yy(s,e,t,n,i=30){const r=s.clone();r.name=e;const o=[];for(let c=0;c<r.tracks.length;++c){const l=r.tracks[c],u=l.getValueSize(),h=[],d=[];for(let f=0;f<l.times.length;++f){const m=l.times[f]*i;if(!(m<t||m>=n)){h.push(l.times[f]);for(let _=0;_<u;++_)d.push(l.values[f*u+_])}}h.length!==0&&(l.times=Ci(h,l.times.constructor),l.values=Ci(d,l.values.constructor),o.push(l))}r.tracks=o;let a=1/0;for(let c=0;c<r.tracks.length;++c)a>r.tracks[c].times[0]&&(a=r.tracks[c].times[0]);for(let c=0;c<r.tracks.length;++c)r.tracks[c].shift(-1*a);return r.resetDuration(),r}function Zy(s,e=0,t=s,n=30){n<=0&&(n=30);const i=t.tracks.length,r=e/n;for(let o=0;o<i;++o){const a=t.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;const l=s.tracks.find(function(p){return p.name===a.name&&p.ValueTypeName===c});if(l===void 0)continue;let u=0;const h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let d=0;const f=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const m=a.times.length-1;let _;if(r<=a.times[0]){const p=u,x=h-u;_=tn(a.values,p,x)}else if(r>=a.times[m]){const p=m*h+u,x=p+h-u;_=tn(a.values,p,x)}else{const p=a.createInterpolant(),x=u,v=h-u;p.evaluate(r),_=tn(p.resultBuffer,x,v)}c==="quaternion"&&new Ht().fromArray(_).normalize().conjugate().toArray(_);const g=l.times.length;for(let p=0;p<g;++p){const x=p*f+d;if(c==="quaternion")Ht.multiplyQuaternionsFlat(l.values,x,_,0,l.values,x);else{const v=f-d*2;for(let y=0;y<v;++y)l.values[x+y]-=_[y]}}}return s.blendMode=Cl,s}const $y={arraySlice:tn,convertArray:Ci,isTypedArray:Kl,getKeyframeOrder:fp,sortedArray:rl,flattenJSON:jl,subclip:Yy,makeClipAdditive:Zy};class Hr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class pp extends Hr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ai,endingEnd:Ai}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case wi:r=e,a=2*t-n;break;case hr:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case wi:o=e,c=2*n-t;break;case hr:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),_=m*m,g=_*m,p=-d*g+2*d*_-d*m,x=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*m+1,v=(-1-f)*g+(1.5+f)*_+.5*m,y=f*g-f*_;for(let b=0;b!==a;++b)r[b]=p*o[u+b]+x*o[l+b]+v*o[c+b]+y*o[h+b];return r}}class Ql extends Hr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}}class mp extends Hr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class pn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ci(t,this.TimeBufferType),this.values=Ci(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ci(e.times,Array),values:Ci(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new mp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ql(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new pp(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case lr:t=this.InterpolantFactoryMethodDiscrete;break;case ur:t=this.InterpolantFactoryMethodLinear;break;case Zo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return lr;case this.InterpolantFactoryMethodLinear:return ur;case this.InterpolantFactoryMethodSmooth:return Zo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=tn(n,r,o),this.values=tn(this.values,r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&Kl(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=tn(this.times),t=tn(this.values),n=this.getValueSize(),i=this.getInterpolation()===Zo,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(i)c=!0;else{const h=a*n,d=h-n,f=h+n;for(let m=0;m!==n;++m){const _=t[h+m];if(_!==t[d+m]||_!==t[f+m]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=tn(e,0,o),this.values=tn(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=tn(this.times,0),t=tn(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}pn.prototype.TimeBufferType=Float32Array;pn.prototype.ValueBufferType=Float32Array;pn.prototype.DefaultInterpolation=ur;class Hi extends pn{}Hi.prototype.ValueTypeName="bool";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=lr;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;class eu extends pn{}eu.prototype.ValueTypeName="color";class xr extends pn{}xr.prototype.ValueTypeName="number";class gp extends Hr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let u=l+a;l!==u;l+=4)Ht.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Ns extends pn{InterpolantFactoryMethodLinear(e){return new gp(this.times,this.values,this.getValueSize(),e)}}Ns.prototype.ValueTypeName="quaternion";Ns.prototype.DefaultInterpolation=ur;Ns.prototype.InterpolantFactoryMethodSmooth=void 0;class Wi extends pn{}Wi.prototype.ValueTypeName="string";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=lr;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;class yr extends pn{}yr.prototype.ValueTypeName="vector";class Mr{constructor(e,t=-1,n,i=ua){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=$t(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Ky(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(pn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=fp(c);c=rl(c,1,u),l=rl(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new xr(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,m,_){if(f.length!==0){const g=[],p=[];jl(f,g,p,m),g.length!==0&&_.push(new h(d,g,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let _=0;_<d[m].morphTargets.length;_++)f[d[m].morphTargets[_]]=-1;for(const _ in f){const g=[],p=[];for(let x=0;x!==d[m].morphTargets.length;++x){const v=d[m];g.push(v.time),p.push(v.morphTarget===_?1:0)}i.push(new xr(".morphTargetInfluence["+_+"]",g,p))}c=f.length*o}else{const f=".bones["+t[h].name+"]";n(yr,f+".position",d,"pos",i),n(Ns,f+".quaternion",d,"rot",i),n(yr,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Jy(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return xr;case"vector":case"vector2":case"vector3":case"vector4":return yr;case"color":return eu;case"quaternion":return Ns;case"bool":case"boolean":return Hi;case"string":return Wi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Ky(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Jy(s.type);if(s.times===void 0){const t=[],n=[];jl(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Fi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class tu{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],m=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null}}}const _p=new tu;class Kt{constructor(e){this.manager=e!==void 0?e:_p,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const On={};class jy extends Error{constructor(e,t){super(e),this.response=t}}class Vn extends Kt{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Fi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(On[e]!==void 0){On[e].push({onLoad:t,onProgress:n,onError:i});return}On[e]=[],On[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=On[e],h=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),f=d?parseInt(d):0,m=f!==0;let _=0;const g=new ReadableStream({start(p){x();function x(){h.read().then(({done:v,value:y})=>{if(v)p.close();else{_+=y.byteLength;const b=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let T=0,C=u.length;T<C;T++){const I=u[T];I.onProgress&&I.onProgress(b)}p.enqueue(y),x()}})}}});return new Response(g)}else throw new jy(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{Fi.add(e,l);const u=On[e];delete On[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=On[e];if(u===void 0)throw this.manager.itemError(e),l;delete On[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Qy extends Kt{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new Vn(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=Mr.parse(e[n]);t.push(i)}return t}}class eM extends Kt{constructor(e){super(e)}load(e,t,n,i){const r=this,o=[],a=new Hl,c=new Vn(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(r.withCredentials);let l=0;function u(h){c.load(e[h],function(d){const f=r.parse(d,!0);o[h]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},l+=1,l===6&&(f.mipmapCount===1&&(a.minFilter=ft),a.image=o,a.format=f.format,a.needsUpdate=!0,t&&t(a))},n,i)}if(Array.isArray(e))for(let h=0,d=e.length;h<d;++h)u(h);else c.load(e,function(h){const d=r.parse(h,!0);if(d.isCubemap){const f=d.mipmaps.length/d.mipmapCount;for(let m=0;m<f;m++){o[m]={mipmaps:[]};for(let _=0;_<d.mipmapCount;_++)o[m].mipmaps.push(d.mipmaps[m*d.mipmapCount+_]),o[m].format=d.format,o[m].width=d.width,o[m].height=d.height}a.image=o}else a.image.width=d.width,a.image.height=d.height,a.mipmaps=d.mipmaps;d.mipmapCount===1&&(a.minFilter=ft),a.format=d.format,a.needsUpdate=!0,t&&t(a)},n,i);return a}}class Er extends Kt{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Fi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=pr("img");function c(){u(),Fi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class tM extends Kt{constructor(e){super(e)}load(e,t,n,i){const r=new Ir;r.colorSpace=Be;const o=new Er(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function c(l){o.load(e[l],function(u){r.images[l]=u,a++,a===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let l=0;l<e.length;++l)c(l);return r}}class nM extends Kt{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new Es,a=new Vn(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(c){const l=r.parse(c);!l||(l.image!==void 0?o.image=l.image:l.data!==void 0&&(o.image.width=l.width,o.image.height=l.height,o.image.data=l.data),o.wrapS=l.wrapS!==void 0?l.wrapS:Ct,o.wrapT=l.wrapT!==void 0?l.wrapT:Ct,o.magFilter=l.magFilter!==void 0?l.magFilter:ft,o.minFilter=l.minFilter!==void 0?l.minFilter:ft,o.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0?o.colorSpace=l.colorSpace:l.encoding!==void 0&&(o.encoding=l.encoding),l.flipY!==void 0&&(o.flipY=l.flipY),l.format!==void 0&&(o.format=l.format),l.type!==void 0&&(o.type=l.type),l.mipmaps!==void 0&&(o.mipmaps=l.mipmaps,o.minFilter=ii),l.mipmapCount===1&&(o.minFilter=ft),l.generateMipmaps!==void 0&&(o.generateMipmaps=l.generateMipmaps),o.needsUpdate=!0,t&&t(o,l))},n,i),o}}class iM extends Kt{constructor(e){super(e)}load(e,t,n,i){const r=new pt,o=new Er(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class li extends $e{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class vp extends li{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const uc=new Ue,Ph=new S,Oh=new S;class nu{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Z(512,512),this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pa,this._frameExtents=new Z(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ph.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ph),Oh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Oh),t.updateMatrixWorld(),uc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(uc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class sM extends nu{constructor(){super(new St(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ss*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class xp extends li{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new sM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Uh=new Ue,Zs=new S,hc=new S;class rM extends nu{constructor(){super(new St(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Z(4,2),this._viewportCount=6,this._viewports=[new Je(2,1,1,1),new Je(0,1,1,1),new Je(3,1,1,1),new Je(1,1,1,1),new Je(3,0,1,1),new Je(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Zs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Zs),hc.copy(n.position),hc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(hc),n.updateMatrixWorld(),i.makeTranslation(-Zs.x,-Zs.y,-Zs.z),Uh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uh)}}class yp extends li{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new rM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class oM extends nu{constructor(){super(new ma(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mp extends li{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.shadow=new oM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ep extends li{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class bp extends li{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class Tp{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new S)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,r=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*i),t.addScaledVector(o[2],.488603*r),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*i)),t.addScaledVector(o[5],1.092548*(i*r)),t.addScaledVector(o[6],.315392*(3*r*r-1)),t.addScaledVector(o[7],1.092548*(n*r)),t.addScaledVector(o[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,r=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*i),t.addScaledVector(o[2],2*.511664*r),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*i),t.addScaledVector(o[5],2*.429043*i*r),t.addScaledVector(o[6],.743125*r*r-.247708),t.addScaledVector(o[7],2*.429043*n*r),t.addScaledVector(o[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}}class Ta extends li{constructor(e=new Tp,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class Sa extends Kt{constructor(e){super(e),this.textures={}}load(e,t,n,i){const r=this,o=new Vn(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(r){return t[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),t[r]}const i=Sa.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new fe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==1&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(i.uniforms[r]={},o.type){case"t":i.uniforms[r].value=n(o.value);break;case"c":i.uniforms[r].value=new fe().setHex(o.value);break;case"v2":i.uniforms[r].value=new Z().fromArray(o.value);break;case"v3":i.uniforms[r].value=new S().fromArray(o.value);break;case"v4":i.uniforms[r].value=new Je().fromArray(o.value);break;case"m3":i.uniforms[r].value=new ke().fromArray(o.value);break;case"m4":i.uniforms[r].value=new Ue().fromArray(o.value);break;default:i.uniforms[r].value=o.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)i.extensions[r]=e.extensions[r];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new Z().fromArray(r)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new Z().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}static createMaterialFromType(e){const t={ShadowMaterial:sp,SpriteMaterial:kl,RawShaderMaterial:rp,ShaderMaterial:bn,PointsMaterial:Vl,MeshPhysicalMaterial:op,MeshStandardMaterial:Jl,MeshPhongMaterial:ap,MeshToonMaterial:cp,MeshNormalMaterial:lp,MeshLambertMaterial:up,MeshDepthMaterial:Fl,MeshDistanceMaterial:zl,MeshBasicMaterial:ai,MeshMatcapMaterial:hp,LineDashedMaterial:dp,LineBasicMaterial:kt,Material:Lt};return new t[e]}}class ol{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Sp extends Ve{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Ap extends Kt{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new Vn(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(f,m){if(t[m]!==void 0)return t[m];const g=f.interleavedBuffers[m],p=r(f,g.buffer),x=_s(g.type,p),v=new xa(x,g.stride);return v.uuid=g.uuid,t[m]=v,v}function r(f,m){if(n[m]!==void 0)return n[m];const g=f.arrayBuffers[m],p=new Uint32Array(g).buffer;return n[m]=p,p}const o=e.isInstancedBufferGeometry?new Sp:new Ve,a=e.data.index;if(a!==void 0){const f=_s(a.type,a.array);o.setIndex(new Qe(f,1))}const c=e.data.attributes;for(const f in c){const m=c[f];let _;if(m.isInterleavedBufferAttribute){const g=i(e.data,m.data);_=new Ni(g,m.itemSize,m.offset,m.normalized)}else{const g=_s(m.type,m.array),p=m.isInstancedBufferAttribute?ws:Qe;_=new p(g,m.itemSize,m.normalized)}m.name!==void 0&&(_.name=m.name),m.usage!==void 0&&_.setUsage(m.usage),m.updateRange!==void 0&&(_.updateRange.offset=m.updateRange.offset,_.updateRange.count=m.updateRange.count),o.setAttribute(f,_)}const l=e.data.morphAttributes;if(l)for(const f in l){const m=l[f],_=[];for(let g=0,p=m.length;g<p;g++){const x=m[g];let v;if(x.isInterleavedBufferAttribute){const y=i(e.data,x.data);v=new Ni(y,x.itemSize,x.offset,x.normalized)}else{const y=_s(x.type,x.array);v=new Qe(y,x.itemSize,x.normalized)}x.name!==void 0&&(v.name=x.name),_.push(v)}o.morphAttributes[f]=_}e.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);const h=e.data.groups||e.data.drawcalls||e.data.offsets;if(h!==void 0)for(let f=0,m=h.length;f!==m;++f){const _=h[f];o.addGroup(_.start,_.count,_.materialIndex)}const d=e.data.boundingSphere;if(d!==void 0){const f=new S;d.center!==void 0&&f.fromArray(d.center),o.boundingSphere=new dn(f,d.radius)}return e.name&&(o.name=e.name),e.userData&&(o.userData=e.userData),o}}class aM extends Kt{constructor(e){super(e)}load(e,t,n,i){const r=this,o=this.path===""?ol.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||o;const a=new Vn(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){let l=null;try{l=JSON.parse(c)}catch(h){i!==void 0&&i(h),console.error("THREE:ObjectLoader: Can't parse "+e+".",h.message);return}const u=l.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}r.parse(l,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?ol.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const r=new Vn(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const o=await r.loadAsync(e,t),a=JSON.parse(o),c=a.metadata;if(c===void 0||c.type===void 0||c.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(a)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,i),o=this.parseImages(e.images,function(){t!==void 0&&t(l)}),a=this.parseTextures(e.textures,o),c=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,r,c,a,n),u=this.parseSkeletons(e.skeletons,l);if(this.bindSkeletons(l,u),t!==void 0){let h=!1;for(const d in o)if(o[d].data instanceof HTMLImageElement){h=!0;break}h===!1&&t(l)}return l}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),r=await this.parseImagesAsync(e.images),o=this.parseTextures(e.textures,r),a=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,i,a,o,t),l=this.parseSkeletons(e.skeletons,c);return this.bindSkeletons(c,l),c}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const r=new Oi().fromJSON(e[n]);t[r.uuid]=r}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),e!==void 0)for(let r=0,o=e.length;r<o;r++){const a=new ya().fromJSON(e[r],i);n[a.uuid]=a}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new Ap;for(let r=0,o=e.length;r<o;r++){let a;const c=e[r];switch(c.type){case"BufferGeometry":case"InstancedBufferGeometry":a=i.parse(c);break;default:c.type in Lh?a=Lh[c.type].fromJSON(c,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${c.type}"`)}a.uuid=c.uuid,c.name!==void 0&&(a.name=c.name),c.userData!==void 0&&(a.userData=c.userData),n[c.uuid]=a}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const r=new Sa;r.setTextures(t);for(let o=0,a=e.length;o<a;o++){const c=e[o];n[c.uuid]===void 0&&(n[c.uuid]=r.parse(c)),i[c.uuid]=n[c.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],r=Mr.parse(i);t[r.uuid]=r}return t}parseImages(e,t){const n=this,i={};let r;function o(c){return n.manager.itemStart(c),r.load(c,function(){n.manager.itemEnd(c)},void 0,function(){n.manager.itemError(c),n.manager.itemEnd(c)})}function a(c){if(typeof c=="string"){const l=c,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:n.resourcePath+l;return o(u)}else return c.data?{data:_s(c.type,c.data),width:c.width,height:c.height}:null}if(e!==void 0&&e.length>0){const c=new tu(t);r=new Er(c),r.setCrossOrigin(this.crossOrigin);for(let l=0,u=e.length;l<u;l++){const h=e[l],d=h.url;if(Array.isArray(d)){const f=[];for(let m=0,_=d.length;m<_;m++){const g=d[m],p=a(g);p!==null&&(p instanceof HTMLImageElement?f.push(p):f.push(new Es(p.data,p.width,p.height)))}i[h.uuid]=new Ri(f)}else{const f=a(h.url);i[h.uuid]=new Ri(f)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function r(o){if(typeof o=="string"){const a=o,c=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:t.resourcePath+a;return await i.loadAsync(c)}else return o.data?{data:_s(o.type,o.data),width:o.width,height:o.height}:null}if(e!==void 0&&e.length>0){i=new Er(this.manager),i.setCrossOrigin(this.crossOrigin);for(let o=0,a=e.length;o<a;o++){const c=e[o],l=c.url;if(Array.isArray(l)){const u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h],m=await r(f);m!==null&&(m instanceof HTMLImageElement?u.push(m):u.push(new Es(m.data,m.width,m.height)))}n[c.uuid]=new Ri(u)}else{const u=await r(c.url);n[c.uuid]=new Ri(u)}}}return n}parseTextures(e,t){function n(r,o){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),o[r])}const i={};if(e!==void 0)for(let r=0,o=e.length;r<o;r++){const a=e[r];a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),t[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);const c=t[a.image],l=c.data;let u;Array.isArray(l)?(u=new Ir,l.length===6&&(u.needsUpdate=!0)):(l&&l.data?u=new Es:u=new pt,l&&(u.needsUpdate=!0)),u.source=c,u.uuid=a.uuid,a.name!==void 0&&(u.name=a.name),a.mapping!==void 0&&(u.mapping=n(a.mapping,cM)),a.channel!==void 0&&(u.channel=a.channel),a.offset!==void 0&&u.offset.fromArray(a.offset),a.repeat!==void 0&&u.repeat.fromArray(a.repeat),a.center!==void 0&&u.center.fromArray(a.center),a.rotation!==void 0&&(u.rotation=a.rotation),a.wrap!==void 0&&(u.wrapS=n(a.wrap[0],Dh),u.wrapT=n(a.wrap[1],Dh)),a.format!==void 0&&(u.format=a.format),a.internalFormat!==void 0&&(u.internalFormat=a.internalFormat),a.type!==void 0&&(u.type=a.type),a.colorSpace!==void 0&&(u.colorSpace=a.colorSpace),a.encoding!==void 0&&(u.encoding=a.encoding),a.minFilter!==void 0&&(u.minFilter=n(a.minFilter,Nh)),a.magFilter!==void 0&&(u.magFilter=n(a.magFilter,Nh)),a.anisotropy!==void 0&&(u.anisotropy=a.anisotropy),a.flipY!==void 0&&(u.flipY=a.flipY),a.generateMipmaps!==void 0&&(u.generateMipmaps=a.generateMipmaps),a.premultiplyAlpha!==void 0&&(u.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(u.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(u.compareFunction=a.compareFunction),a.userData!==void 0&&(u.userData=a.userData),i[a.uuid]=u}return i}parseObject(e,t,n,i,r){let o;function a(d){return t[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",d),t[d]}function c(d){if(d!==void 0){if(Array.isArray(d)){const f=[];for(let m=0,_=d.length;m<_;m++){const g=d[m];n[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),f.push(n[g])}return f}return n[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",d),n[d]}}function l(d){return i[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",d),i[d]}let u,h;switch(e.type){case"Scene":o=new kf,e.background!==void 0&&(Number.isInteger(e.background)?o.background=new fe(e.background):o.background=l(e.background)),e.environment!==void 0&&(o.environment=l(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?o.fog=new va(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(o.fog=new _a(e.fog.color,e.fog.density))),e.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(o.backgroundIntensity=e.backgroundIntensity);break;case"PerspectiveCamera":o=new St(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(o.focus=e.focus),e.zoom!==void 0&&(o.zoom=e.zoom),e.filmGauge!==void 0&&(o.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(o.filmOffset=e.filmOffset),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"OrthographicCamera":o=new ma(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(o.zoom=e.zoom),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"AmbientLight":o=new Ep(e.color,e.intensity);break;case"DirectionalLight":o=new Mp(e.color,e.intensity);break;case"PointLight":o=new yp(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":o=new bp(e.color,e.intensity,e.width,e.height);break;case"SpotLight":o=new xp(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":o=new vp(e.color,e.groundColor,e.intensity);break;case"LightProbe":o=new Ta().fromJSON(e);break;case"SkinnedMesh":u=a(e.geometry),h=c(e.material),o=new Wf(u,h),e.bindMode!==void 0&&(o.bindMode=e.bindMode),e.bindMatrix!==void 0&&o.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(o.skeleton=e.skeleton);break;case"Mesh":u=a(e.geometry),h=c(e.material),o=new At(u,h);break;case"InstancedMesh":u=a(e.geometry),h=c(e.material);const d=e.count,f=e.instanceMatrix,m=e.instanceColor;o=new qf(u,h,d),o.instanceMatrix=new ws(new Float32Array(f.array),16),m!==void 0&&(o.instanceColor=new ws(new Float32Array(m.array),m.itemSize));break;case"LOD":o=new Hf;break;case"Line":o=new si(a(e.geometry),c(e.material));break;case"LineLoop":o=new Xf(a(e.geometry),c(e.material));break;case"LineSegments":o=new Sn(a(e.geometry),c(e.material));break;case"PointCloud":case"Points":o=new Yf(a(e.geometry),c(e.material));break;case"Sprite":o=new Vf(c(e.material));break;case"Group":o=new xs;break;case"Bone":o=new Gl;break;default:o=new $e}if(o.uuid=e.uuid,e.name!==void 0&&(o.name=e.name),e.matrix!==void 0?(o.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=e.matrixAutoUpdate),o.matrixAutoUpdate&&o.matrix.decompose(o.position,o.quaternion,o.scale)):(e.position!==void 0&&o.position.fromArray(e.position),e.rotation!==void 0&&o.rotation.fromArray(e.rotation),e.quaternion!==void 0&&o.quaternion.fromArray(e.quaternion),e.scale!==void 0&&o.scale.fromArray(e.scale)),e.up!==void 0&&o.up.fromArray(e.up),e.castShadow!==void 0&&(o.castShadow=e.castShadow),e.receiveShadow!==void 0&&(o.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.bias!==void 0&&(o.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(o.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(o.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(o.visible=e.visible),e.frustumCulled!==void 0&&(o.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(o.renderOrder=e.renderOrder),e.userData!==void 0&&(o.userData=e.userData),e.layers!==void 0&&(o.layers.mask=e.layers),e.children!==void 0){const d=e.children;for(let f=0;f<d.length;f++)o.add(this.parseObject(d[f],t,n,i,r))}if(e.animations!==void 0){const d=e.animations;for(let f=0;f<d.length;f++){const m=d[f];o.animations.push(r[m])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(o.autoUpdate=e.autoUpdate);const d=e.levels;for(let f=0;f<d.length;f++){const m=d[f],_=o.getObjectByProperty("uuid",m.object);_!==void 0&&o.addLevel(_,m.distance,m.hysteresis)}}return o}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}}const cM={UVMapping:ca,CubeReflectionMapping:ti,CubeRefractionMapping:ni,EquirectangularReflectionMapping:rr,EquirectangularRefractionMapping:or,CubeUVReflectionMapping:Cs},Dh={RepeatWrapping:ar,ClampToEdgeWrapping:Ct,MirroredRepeatWrapping:cr},Nh={NearestFilter:dt,NearestMipmapNearestFilter:ta,NearestMipmapLinearFilter:js,LinearFilter:ft,LinearMipmapNearestFilter:El,LinearMipmapLinearFilter:ii};class lM extends Kt{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Fi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){Fi.add(e,c),t&&t(c),r.manager.itemEnd(e)}).catch(function(c){i&&i(c),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}let Co;class iu{static getContext(){return Co===void 0&&(Co=new(window.AudioContext||window.webkitAudioContext)),Co}static setContext(e){Co=e}}class uM extends Kt{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new Vn(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(c){try{const l=c.slice(0);iu.getContext().decodeAudioData(l,function(h){t(h)},a)}catch(l){a(l)}},n,i);function a(c){i?i(c):console.error(c),r.manager.itemError(e)}}}class hM extends Ta{constructor(e,t,n=1){super(void 0,n),this.isHemisphereLightProbe=!0;const i=new fe().set(e),r=new fe().set(t),o=new S(i.r,i.g,i.b),a=new S(r.r,r.g,r.b),c=Math.sqrt(Math.PI),l=c*Math.sqrt(.75);this.sh.coefficients[0].copy(o).add(a).multiplyScalar(c),this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(l)}}class dM extends Ta{constructor(e,t=1){super(void 0,t),this.isAmbientLightProbe=!0;const n=new fe().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}const Bh=new Ue,Fh=new Ue,_i=new Ue;class fM{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new St,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new St,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,_i.copy(e.projectionMatrix);const i=t.eyeSep/2,r=i*t.near/t.focus,o=t.near*Math.tan(Pi*t.fov*.5)/t.zoom;let a,c;Fh.elements[12]=-i,Bh.elements[12]=i,a=-o*t.aspect+r,c=o*t.aspect+r,_i.elements[0]=2*t.near/(c-a),_i.elements[8]=(c+a)/(c-a),this.cameraL.projectionMatrix.copy(_i),a=-o*t.aspect-r,c=o*t.aspect-r,_i.elements[0]=2*t.near/(c-a),_i.elements[8]=(c+a)/(c-a),this.cameraR.projectionMatrix.copy(_i)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Fh),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(Bh)}}class wp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=zh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=zh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function zh(){return(typeof performance>"u"?Date:performance).now()}const vi=new S,kh=new Ht,pM=new S,xi=new S;class mM extends $e{constructor(){super(),this.type="AudioListener",this.context=iu.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new wp}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(vi,kh,pM),xi.set(0,0,-1).applyQuaternion(kh),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(vi.x,i),t.positionY.linearRampToValueAtTime(vi.y,i),t.positionZ.linearRampToValueAtTime(vi.z,i),t.forwardX.linearRampToValueAtTime(xi.x,i),t.forwardY.linearRampToValueAtTime(xi.y,i),t.forwardZ.linearRampToValueAtTime(xi.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(vi.x,vi.y,vi.z),t.setOrientation(xi.x,xi.y,xi.z,n.x,n.y,n.z)}}class Rp extends $e{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const yi=new S,Gh=new Ht,gM=new S,Mi=new S;class _M extends Rp{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(yi,Gh,gM),Mi.set(0,0,1).applyQuaternion(Gh);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(yi.x,n),t.positionY.linearRampToValueAtTime(yi.y,n),t.positionZ.linearRampToValueAtTime(yi.z,n),t.orientationX.linearRampToValueAtTime(Mi.x,n),t.orientationY.linearRampToValueAtTime(Mi.y,n),t.orientationZ.linearRampToValueAtTime(Mi.z,n)}else t.setPosition(yi.x,yi.y,yi.z),t.setOrientation(Mi.x,Mi.y,Mi.z)}}class vM{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class Cp{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Ht.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;Ht.multiplyQuaternionsFlat(e,o,e,t,e,n),Ht.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const su="\\[\\]\\.:\\/",xM=new RegExp("["+su+"]","g"),ru="[^"+su+"]",yM="[^"+su.replace("\\.","")+"]",MM=/((?:WC+[\/:])*)/.source.replace("WC",ru),EM=/(WCOD+)?/.source.replace("WCOD",yM),bM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ru),TM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ru),SM=new RegExp("^"+MM+EM+bM+TM+"$"),AM=["material","materials","bones","map"];class wM{constructor(e,t,n){const i=n||Ye.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ye{constructor(e,t,n){this.path=t,this.parsedPath=n||Ye.parseTrackName(t),this.node=Ye.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ye.Composite(e,t,n):new Ye(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(xM,"")}static parseTrackName(e){const t=SM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);AM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Ye.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ye.Composite=wM;Ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ye.prototype.GetterByBindingType=[Ye.prototype._getValue_direct,Ye.prototype._getValue_array,Ye.prototype._getValue_arrayElement,Ye.prototype._getValue_toArray];Ye.prototype.SetterByBindingTypeAndVersioning=[[Ye.prototype._setValue_direct,Ye.prototype._setValue_direct_setNeedsUpdate,Ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_array,Ye.prototype._setValue_array_setNeedsUpdate,Ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_arrayElement,Ye.prototype._setValue_arrayElement_setNeedsUpdate,Ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_fromArray,Ye.prototype._setValue_fromArray_setNeedsUpdate,Ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class RM{constructor(){this.isAnimationObjectGroup=!0,this.uuid=$t(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,o=r.length;let a,c=e.length,l=this.nCachedObjects_;for(let u=0,h=arguments.length;u!==h;++u){const d=arguments[u],f=d.uuid;let m=t[f];if(m===void 0){m=c++,t[f]=m,e.push(d);for(let _=0,g=o;_!==g;++_)r[_].push(new Ye(d,n[_],i[_]))}else if(m<l){a=e[m];const _=--l,g=e[_];t[g.uuid]=m,e[m]=g,t[f]=_,e[_]=d;for(let p=0,x=o;p!==x;++p){const v=r[p],y=v[_];let b=v[m];v[m]=y,b===void 0&&(b=new Ye(d,n[p],i[p])),v[_]=b}}else e[m]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){const c=arguments[o],l=c.uuid,u=t[l];if(u!==void 0&&u>=r){const h=r++,d=e[h];t[d.uuid]=u,e[u]=d,t[l]=h,e[h]=c;for(let f=0,m=i;f!==m;++f){const _=n[f],g=_[h],p=_[u];_[u]=g,_[h]=p}}}this.nCachedObjects_=r}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,o=e.length;for(let a=0,c=arguments.length;a!==c;++a){const l=arguments[a],u=l.uuid,h=t[u];if(h!==void 0)if(delete t[u],h<r){const d=--r,f=e[d],m=--o,_=e[m];t[f.uuid]=h,e[h]=f,t[_.uuid]=d,e[d]=_,e.pop();for(let g=0,p=i;g!==p;++g){const x=n[g],v=x[d],y=x[m];x[h]=v,x[d]=y,x.pop()}}else{const d=--o,f=e[d];d>0&&(t[f.uuid]=h),e[h]=f,e.pop();for(let m=0,_=i;m!==_;++m){const g=n[m];g[h]=g[d],g.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const r=this._bindings;if(i!==void 0)return r[i];const o=this._paths,a=this._parsedPaths,c=this._objects,l=c.length,u=this.nCachedObjects_,h=new Array(l);i=r.length,n[e]=i,o.push(e),a.push(t),r.push(h);for(let d=u,f=c.length;d!==f;++d){const m=c[d];h[d]=new Ye(m,e,t)}return h}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,r=this._parsedPaths,o=this._bindings,a=o.length-1,c=o[a],l=e[a];t[l]=n,o[n]=c,o.pop(),r[n]=r[a],r.pop(),i[n]=i[a],i.pop()}}}class Ip{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,o=r.length,a=new Array(o),c={endingStart:Ai,endingEnd:Ai};for(let l=0;l!==o;++l){const u=r[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=lf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Cl:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case ua:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;n!==null&&(t*=n.evaluate(e)[0],e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===uf;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===cf){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=wi,i.endingEnd=wi):(e?i.endingStart=this.zeroSlopeAtStart?wi:Ai:i.endingStart=hr,t?i.endingEnd=this.zeroSlopeAtEnd?wi:Ai:i.endingEnd=hr)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}}const CM=new Float32Array(1);class IM extends Hn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==r;++h){const d=i[h],f=d.name;let m=u[f];if(m!==void 0)++m.referenceCount,o[h]=m;else{if(m=o[h],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,f));continue}const _=t&&t._propertyBindings[h].binding.parsedPath;m=new Cp(Ye.create(n,f,_),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,f),o[h]=m}a[h].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Ql(new Float32Array(2),new Float32Array(2),1,CM),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?Mr.findByName(i,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=ua),c!==void 0){const h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const u=new Ip(this,o,t,n);return this._bindAction(u,l),this._addInactiveAction(u,a,r),u}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?Mr.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class ou{constructor(e){this.value=e}clone(){return new ou(this.value.clone===void 0?this.value:this.value.clone())}}let LM=0;class PM extends Hn{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:LM++}),this.name="",this.usage=dr,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++)this.uniforms.push(t[n].clone());return this}clone(){return new this.constructor().copy(this)}}class OM extends xa{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class UM{constructor(e,t,n,i,r){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}class DM{constructor(e,t,n=0,i=1/0){this.ray=new Is(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new da,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return al(e,this,n,t),n.sort(Vh),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)al(e[i],this,n,t);return n.sort(Vh),n}}function Vh(s,e){return s.distance-e.distance}function al(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)al(i[r],e,t,!0)}}class NM{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(lt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class BM{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}const Hh=new Z;class FM{constructor(e=new Z(1/0,1/0),t=new Z(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Hh.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hh).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wh=new S,Io=new S;class Lp{constructor(e=new S,t=new S){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Wh.subVectors(e,this.start),Io.subVectors(this.end,this.start);const n=Io.dot(Io);let r=Io.dot(Wh)/n;return t&&(r=lt(r,0,1)),r}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const qh=new S;class zM extends $e{constructor(e,t){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new Ve,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,c=32;o<c;o++,a++){const l=o/c*Math.PI*2,u=a/c*Math.PI*2;i.push(Math.cos(l),Math.sin(l),1,Math.cos(u),Math.sin(u),1)}n.setAttribute("position",new _e(i,3));const r=new kt({fog:!1,toneMapped:!1});this.cone=new Sn(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),qh.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(qh),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const $n=new S,Lo=new Ue,dc=new Ue;class kM extends Sn{constructor(e){const t=Pp(e),n=new Ve,i=[],r=[],o=new fe(0,0,1),a=new fe(0,1,0);for(let l=0;l<t.length;l++){const u=t[l];u.parent&&u.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(o.r,o.g,o.b),r.push(a.r,a.g,a.b))}n.setAttribute("position",new _e(i,3)),n.setAttribute("color",new _e(r,3));const c=new kt({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,c),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");dc.copy(this.root.matrixWorld).invert();for(let r=0,o=0;r<t.length;r++){const a=t[r];a.parent&&a.parent.isBone&&(Lo.multiplyMatrices(dc,a.matrixWorld),$n.setFromMatrixPosition(Lo),i.setXYZ(o,$n.x,$n.y,$n.z),Lo.multiplyMatrices(dc,a.parent.matrixWorld),$n.setFromMatrixPosition(Lo),i.setXYZ(o+1,$n.x,$n.y,$n.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function Pp(s){const e=[];s.isBone===!0&&e.push(s);for(let t=0;t<s.children.length;t++)e.push.apply(e,Pp(s.children[t]));return e}class GM extends At{constructor(e,t,n){const i=new Ds(t,4,2),r=new ai({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const VM=new S,Xh=new fe,Yh=new fe;class HM extends $e{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new Us(t);i.rotateY(Math.PI*.5),this.material=new ai({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=i.getAttribute("position"),o=new Float32Array(r.count*3);i.setAttribute("color",new Qe(o,3)),this.add(new At(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");Xh.copy(this.light.color),Yh.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const r=n<i/2?Xh:Yh;t.setXYZ(n,r.r,r.g,r.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(VM.setFromMatrixPosition(this.light.matrixWorld).negate())}}class WM extends Sn{constructor(e=10,t=10,n=4473924,i=8947848){n=new fe(n),i=new fe(i);const r=t/2,o=e/t,a=e/2,c=[],l=[];for(let d=0,f=0,m=-a;d<=t;d++,m+=o){c.push(-a,0,m,a,0,m),c.push(m,0,-a,m,0,a);const _=d===r?n:i;_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3}const u=new Ve;u.setAttribute("position",new _e(c,3)),u.setAttribute("color",new _e(l,3));const h=new kt({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class qM extends Sn{constructor(e=10,t=16,n=8,i=64,r=4473924,o=8947848){r=new fe(r),o=new fe(o);const a=[],c=[];if(t>1)for(let h=0;h<t;h++){const d=h/t*(Math.PI*2),f=Math.sin(d)*e,m=Math.cos(d)*e;a.push(0,0,0),a.push(f,0,m);const _=h&1?r:o;c.push(_.r,_.g,_.b),c.push(_.r,_.g,_.b)}for(let h=0;h<n;h++){const d=h&1?r:o,f=e-e/n*h;for(let m=0;m<i;m++){let _=m/i*(Math.PI*2),g=Math.sin(_)*f,p=Math.cos(_)*f;a.push(g,0,p),c.push(d.r,d.g,d.b),_=(m+1)/i*(Math.PI*2),g=Math.sin(_)*f,p=Math.cos(_)*f,a.push(g,0,p),c.push(d.r,d.g,d.b)}}const l=new Ve;l.setAttribute("position",new _e(a,3)),l.setAttribute("color",new _e(c,3));const u=new kt({vertexColors:!0,toneMapped:!1});super(l,u),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Zh=new S,Po=new S,$h=new S;class XM extends $e{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new Ve;i.setAttribute("position",new _e([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const r=new kt({fog:!1,toneMapped:!1});this.lightPlane=new si(i,r),this.add(this.lightPlane),i=new Ve,i.setAttribute("position",new _e([0,0,0,0,0,1],3)),this.targetLine=new si(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Zh.setFromMatrixPosition(this.light.matrixWorld),Po.setFromMatrixPosition(this.light.target.matrixWorld),$h.subVectors(Po,Zh),this.lightPlane.lookAt(Po),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Po),this.targetLine.scale.z=$h.length()}}const Oo=new S,at=new fa;class YM extends Sn{constructor(e){const t=new Ve,n=new kt({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(m,_){c(m),c(_)}function c(m){i.push(0,0,0),r.push(0,0,0),o[m]===void 0&&(o[m]=[]),o[m].push(i.length/3-1)}t.setAttribute("position",new _e(i,3)),t.setAttribute("color",new _e(r,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();const l=new fe(16755200),u=new fe(16711680),h=new fe(43775),d=new fe(16777215),f=new fe(3355443);this.setColors(l,u,h,d,f)}setColors(e,t,n,i,r){const a=this.geometry.getAttribute("color");a.setXYZ(0,e.r,e.g,e.b),a.setXYZ(1,e.r,e.g,e.b),a.setXYZ(2,e.r,e.g,e.b),a.setXYZ(3,e.r,e.g,e.b),a.setXYZ(4,e.r,e.g,e.b),a.setXYZ(5,e.r,e.g,e.b),a.setXYZ(6,e.r,e.g,e.b),a.setXYZ(7,e.r,e.g,e.b),a.setXYZ(8,e.r,e.g,e.b),a.setXYZ(9,e.r,e.g,e.b),a.setXYZ(10,e.r,e.g,e.b),a.setXYZ(11,e.r,e.g,e.b),a.setXYZ(12,e.r,e.g,e.b),a.setXYZ(13,e.r,e.g,e.b),a.setXYZ(14,e.r,e.g,e.b),a.setXYZ(15,e.r,e.g,e.b),a.setXYZ(16,e.r,e.g,e.b),a.setXYZ(17,e.r,e.g,e.b),a.setXYZ(18,e.r,e.g,e.b),a.setXYZ(19,e.r,e.g,e.b),a.setXYZ(20,e.r,e.g,e.b),a.setXYZ(21,e.r,e.g,e.b),a.setXYZ(22,e.r,e.g,e.b),a.setXYZ(23,e.r,e.g,e.b),a.setXYZ(24,t.r,t.g,t.b),a.setXYZ(25,t.r,t.g,t.b),a.setXYZ(26,t.r,t.g,t.b),a.setXYZ(27,t.r,t.g,t.b),a.setXYZ(28,t.r,t.g,t.b),a.setXYZ(29,t.r,t.g,t.b),a.setXYZ(30,t.r,t.g,t.b),a.setXYZ(31,t.r,t.g,t.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,i.r,i.g,i.b),a.setXYZ(39,i.r,i.g,i.b),a.setXYZ(40,r.r,r.g,r.b),a.setXYZ(41,r.r,r.g,r.b),a.setXYZ(42,r.r,r.g,r.b),a.setXYZ(43,r.r,r.g,r.b),a.setXYZ(44,r.r,r.g,r.b),a.setXYZ(45,r.r,r.g,r.b),a.setXYZ(46,r.r,r.g,r.b),a.setXYZ(47,r.r,r.g,r.b),a.setXYZ(48,r.r,r.g,r.b),a.setXYZ(49,r.r,r.g,r.b),a.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;at.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),ht("c",t,e,at,0,0,-1),ht("t",t,e,at,0,0,1),ht("n1",t,e,at,-n,-i,-1),ht("n2",t,e,at,n,-i,-1),ht("n3",t,e,at,-n,i,-1),ht("n4",t,e,at,n,i,-1),ht("f1",t,e,at,-n,-i,1),ht("f2",t,e,at,n,-i,1),ht("f3",t,e,at,-n,i,1),ht("f4",t,e,at,n,i,1),ht("u1",t,e,at,n*.7,i*1.1,-1),ht("u2",t,e,at,-n*.7,i*1.1,-1),ht("u3",t,e,at,0,i*2,-1),ht("cf1",t,e,at,-n,0,1),ht("cf2",t,e,at,n,0,1),ht("cf3",t,e,at,0,-i,1),ht("cf4",t,e,at,0,i,1),ht("cn1",t,e,at,-n,0,-1),ht("cn2",t,e,at,n,0,-1),ht("cn3",t,e,at,0,-i,-1),ht("cn4",t,e,at,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function ht(s,e,t,n,i,r,o){Oo.set(i,r,o).unproject(n);const a=e[s];if(a!==void 0){const c=t.getAttribute("position");for(let l=0,u=a.length;l<u;l++)c.setXYZ(a[l],Oo.x,Oo.y,Oo.z)}}const Uo=new Tn;class ZM extends Sn{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),r=new Ve;r.setIndex(new Qe(n,1)),r.setAttribute("position",new Qe(i,3)),super(r,new kt({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Uo.setFromObject(this.object),Uo.isEmpty())return;const t=Uo.min,n=Uo.max,i=this.geometry.attributes.position,r=i.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=t.x,r[4]=n.y,r[5]=n.z,r[6]=t.x,r[7]=t.y,r[8]=n.z,r[9]=n.x,r[10]=t.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=t.z,r[15]=t.x,r[16]=n.y,r[17]=t.z,r[18]=t.x,r[19]=t.y,r[20]=t.z,r[21]=n.x,r[22]=t.y,r[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class $M extends Sn{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Ve;r.setIndex(new Qe(n,1)),r.setAttribute("position",new _e(i,3)),super(r,new kt({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class JM extends si{constructor(e,t=1,n=16776960){const i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new Ve;o.setAttribute("position",new _e(r,3)),o.computeBoundingSphere(),super(o,new kt({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],c=new Ve;c.setAttribute("position",new _e(a,3)),c.computeBoundingSphere(),this.add(new At(c,new ai({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const Jh=new S;let Do,fc;class KM extends $e{constructor(e=new S(0,0,1),t=new S(0,0,0),n=1,i=16776960,r=n*.2,o=r*.2){super(),this.type="ArrowHelper",Do===void 0&&(Do=new Ve,Do.setAttribute("position",new _e([0,0,0,0,1,0],3)),fc=new Vi(0,.5,1,5,1),fc.translate(0,-.5,0)),this.position.copy(t),this.line=new si(Do,new kt({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new At(fc,new ai({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Jh.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Jh,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class jM extends Sn{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Ve;i.setAttribute("position",new _e(t,3)),i.setAttribute("color",new _e(n,3));const r=new kt({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(e,t,n){const i=new fe,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class QM{constructor(){this.type="ShapePath",this.color=new fe,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new mr,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,o){return this.currentPath.bezierCurveTo(e,t,n,i,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const x=[];for(let v=0,y=p.length;v<y;v++){const b=p[v],T=new Oi;T.curves=b.curves,x.push(T)}return x}function n(p,x){const v=x.length;let y=!1;for(let b=v-1,T=0;T<v;b=T++){let C=x[b],I=x[T],M=I.x-C.x,w=I.y-C.y;if(Math.abs(w)>Number.EPSILON){if(w<0&&(C=x[T],M=-M,I=x[b],w=-w),p.y<C.y||p.y>I.y)continue;if(p.y===C.y){if(p.x===C.x)return!0}else{const N=w*(p.x-C.x)-M*(p.y-C.y);if(N===0)return!0;if(N<0)continue;y=!y}}else{if(p.y!==C.y)continue;if(I.x<=p.x&&p.x<=C.x||C.x<=p.x&&p.x<=I.x)return!0}}return y}const i=En.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,c;const l=[];if(r.length===1)return a=r[0],c=new Oi,c.curves=a.curves,l.push(c),l;let u=!i(r[0].getPoints());u=e?!u:u;const h=[],d=[];let f=[],m=0,_;d[m]=void 0,f[m]=[];for(let p=0,x=r.length;p<x;p++)a=r[p],_=a.getPoints(),o=i(_),o=e?!o:o,o?(!u&&d[m]&&m++,d[m]={s:new Oi,p:_},d[m].s.curves=a.curves,u&&m++,f[m]=[]):f[m].push({h:a,p:_[0]});if(!d[0])return t(r);if(d.length>1){let p=!1,x=0;for(let v=0,y=d.length;v<y;v++)h[v]=[];for(let v=0,y=d.length;v<y;v++){const b=f[v];for(let T=0;T<b.length;T++){const C=b[T];let I=!0;for(let M=0;M<d.length;M++)n(C.p,d[M].p)&&(v!==M&&x++,I?(I=!1,h[M].push(C)):p=!0);I&&h[v].push(C)}}x>0&&p===!1&&(f=h)}let g;for(let p=0,x=d.length;p<x;p++){c=d[p].s,l.push(c),g=f[p];for(let v=0,y=g.length;v<y;v++)c.holes.push(g[v].h)}return l}}class eE extends ci{constructor(e,t,n,i,r,o){console.warn("THREE.BoxBufferGeometry has been renamed to THREE.BoxGeometry."),super(e,t,n,i,r,o)}}class tE extends Lr{constructor(e,t,n,i){console.warn("THREE.CapsuleBufferGeometry has been renamed to THREE.CapsuleGeometry."),super(e,t,n,i)}}class nE extends Pr{constructor(e,t,n,i){console.warn("THREE.CircleBufferGeometry has been renamed to THREE.CircleGeometry."),super(e,t,n,i)}}class iE extends Or{constructor(e,t,n,i,r,o,a){console.warn("THREE.ConeBufferGeometry has been renamed to THREE.ConeGeometry."),super(e,t,n,i,r,o,a)}}class sE extends Vi{constructor(e,t,n,i,r,o,a,c){console.warn("THREE.CylinderBufferGeometry has been renamed to THREE.CylinderGeometry."),super(e,t,n,i,r,o,a,c)}}class rE extends Ur{constructor(e,t){console.warn("THREE.DodecahedronBufferGeometry has been renamed to THREE.DodecahedronGeometry."),super(e,t)}}class oE extends Dr{constructor(e,t){console.warn("THREE.ExtrudeBufferGeometry has been renamed to THREE.ExtrudeGeometry."),super(e,t)}}class aE extends Nr{constructor(e,t){console.warn("THREE.IcosahedronBufferGeometry has been renamed to THREE.IcosahedronGeometry."),super(e,t)}}class cE extends Os{constructor(e,t,n,i){console.warn("THREE.LatheBufferGeometry has been renamed to THREE.LatheGeometry."),super(e,t,n,i)}}class lE extends Us{constructor(e,t){console.warn("THREE.OctahedronBufferGeometry has been renamed to THREE.OctahedronGeometry."),super(e,t)}}class uE extends Ls{constructor(e,t,n,i){console.warn("THREE.PlaneBufferGeometry has been renamed to THREE.PlaneGeometry."),super(e,t,n,i)}}class hE extends Wn{constructor(e,t,n,i){console.warn("THREE.PolyhedronBufferGeometry has been renamed to THREE.PolyhedronGeometry."),super(e,t,n,i)}}class dE extends Br{constructor(e,t,n,i,r,o){console.warn("THREE.RingBufferGeometry has been renamed to THREE.RingGeometry."),super(e,t,n,i,r,o)}}class fE extends Fr{constructor(e,t){console.warn("THREE.ShapeBufferGeometry has been renamed to THREE.ShapeGeometry."),super(e,t)}}class pE extends Ds{constructor(e,t,n,i,r,o,a){console.warn("THREE.SphereBufferGeometry has been renamed to THREE.SphereGeometry."),super(e,t,n,i,r,o,a)}}class mE extends zr{constructor(e,t){console.warn("THREE.TetrahedronBufferGeometry has been renamed to THREE.TetrahedronGeometry."),super(e,t)}}class gE extends kr{constructor(e,t,n,i,r){console.warn("THREE.TorusBufferGeometry has been renamed to THREE.TorusGeometry."),super(e,t,n,i,r)}}class _E extends Gr{constructor(e,t,n,i,r,o){console.warn("THREE.TorusKnotBufferGeometry has been renamed to THREE.TorusKnotGeometry."),super(e,t,n,i,r,o)}}class vE extends Vr{constructor(e,t,n,i,r){console.warn("THREE.TubeBufferGeometry has been renamed to THREE.TubeGeometry."),super(e,t,n,i,r)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:aa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=aa);const Bb=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Jd,AddEquation:Ti,AddOperation:Xd,AdditiveAnimationBlendMode:Cl,AdditiveBlending:Tc,AlphaFormat:ef,AlwaysCompare:Ef,AlwaysDepth:zd,AlwaysStencilFunc:pf,AmbientLight:Ep,AmbientLightProbe:dM,AnimationAction:Ip,AnimationClip:Mr,AnimationLoader:Qy,AnimationMixer:IM,AnimationObjectGroup:RM,AnimationUtils:$y,ArcCurve:Zf,ArrayCamera:Nf,ArrowHelper:KM,Audio:Rp,AudioAnalyser:vM,AudioContext:iu,AudioListener:mM,AudioLoader:uM,AxesHelper:jM,BackSide:zt,BasicDepthPacking:hf,BasicShadowMap:mm,Bone:Gl,BooleanKeyframeTrack:Hi,Box2:FM,Box3:Tn,Box3Helper:$M,BoxBufferGeometry:eE,BoxGeometry:ci,BoxHelper:ZM,BufferAttribute:Qe,BufferGeometry:Ve,BufferGeometryLoader:Ap,ByteType:jd,Cache:Fi,Camera:fa,CameraHelper:YM,CanvasTexture:xy,CapsuleBufferGeometry:tE,CapsuleGeometry:Lr,CatmullRomCurve3:$f,CineonToneMapping:$d,CircleBufferGeometry:nE,CircleGeometry:Pr,ClampToEdgeWrapping:Ct,Clock:wp,Color:fe,ColorKeyframeTrack:eu,ColorManagement:en,CompressedArrayTexture:vy,CompressedTexture:Hl,CompressedTextureLoader:eM,ConeBufferGeometry:iE,ConeGeometry:Or,CubeCamera:Rf,CubeReflectionMapping:ti,CubeRefractionMapping:ni,CubeTexture:Ir,CubeTextureLoader:tM,CubeUVReflectionMapping:Cs,CubicBezierCurve:ql,CubicBezierCurve3:Jf,CubicInterpolant:pp,CullFaceBack:bc,CullFaceFront:Td,CullFaceFrontBack:pm,CullFaceNone:bd,Curve:fn,CurvePath:jf,CustomBlending:Ad,CustomToneMapping:Kd,CylinderBufferGeometry:sE,CylinderGeometry:Vi,Cylindrical:BM,Data3DTexture:Ul,DataArrayTexture:ha,DataTexture:Es,DataTextureLoader:nM,DataUtils:R0,DecrementStencilOp:wm,DecrementWrapStencilOp:Cm,DefaultLoadingManager:_p,DepthFormat:Kn,DepthStencilFormat:Di,DepthTexture:Bf,DirectionalLight:Mp,DirectionalLightHelper:XM,DiscreteInterpolant:mp,DisplayP3ColorSpace:Ll,DodecahedronBufferGeometry:rE,DodecahedronGeometry:Ur,DoubleSide:_n,DstAlphaFactor:Od,DstColorFactor:Dd,DynamicCopyUsage:Wm,DynamicDrawUsage:Fm,DynamicReadUsage:Gm,EdgesGeometry:Qf,EllipseCurve:Ma,EqualCompare:_f,EqualDepth:Gd,EqualStencilFunc:Om,EquirectangularReflectionMapping:rr,EquirectangularRefractionMapping:or,Euler:Cr,EventDispatcher:Hn,ExtrudeBufferGeometry:oE,ExtrudeGeometry:Dr,FileLoader:Vn,Float16BufferAttribute:U0,Float32BufferAttribute:_e,Float64BufferAttribute:D0,FloatType:xn,Fog:va,FogExp2:_a,FramebufferTexture:_y,FrontSide:Gn,Frustum:pa,GLBufferAttribute:UM,GLSL1:Xm,GLSL3:jc,GreaterCompare:xf,GreaterDepth:Hd,GreaterEqualCompare:Mf,GreaterEqualDepth:Vd,GreaterEqualStencilFunc:Bm,GreaterStencilFunc:Dm,GridHelper:WM,Group:xs,HalfFloatType:Ts,HemisphereLight:vp,HemisphereLightHelper:HM,HemisphereLightProbe:hM,IcosahedronBufferGeometry:aE,IcosahedronGeometry:Nr,ImageBitmapLoader:lM,ImageLoader:Er,ImageUtils:Ol,IncrementStencilOp:Am,IncrementWrapStencilOp:Rm,InstancedBufferAttribute:ws,InstancedBufferGeometry:Sp,InstancedInterleavedBuffer:OM,InstancedMesh:qf,Int16BufferAttribute:P0,Int32BufferAttribute:O0,Int8BufferAttribute:C0,IntType:bl,InterleavedBuffer:xa,InterleavedBufferAttribute:Ni,Interpolant:Hr,InterpolateDiscrete:lr,InterpolateLinear:ur,InterpolateSmooth:Zo,InvertStencilOp:Im,KeepStencilOp:$o,KeyframeTrack:pn,LOD:Hf,LatheBufferGeometry:cE,LatheGeometry:Os,Layers:da,LessCompare:gf,LessDepth:kd,LessEqualCompare:vf,LessEqualDepth:ea,LessEqualStencilFunc:Um,LessStencilFunc:Pm,Light:li,LightProbe:Ta,Line:si,Line3:Lp,LineBasicMaterial:kt,LineCurve:Ea,LineCurve3:Kf,LineDashedMaterial:dp,LineLoop:Xf,LineSegments:Sn,LinearEncoding:Il,LinearFilter:ft,LinearInterpolant:Ql,LinearMipMapLinearFilter:ym,LinearMipMapNearestFilter:xm,LinearMipmapLinearFilter:ii,LinearMipmapNearestFilter:El,LinearSRGBColorSpace:un,LinearToneMapping:Yd,Loader:Kt,LoaderUtils:ol,LoadingManager:tu,LoopOnce:cf,LoopPingPong:uf,LoopRepeat:lf,LuminanceAlphaFormat:nf,LuminanceFormat:tf,MOUSE:dm,Material:Lt,MaterialLoader:Sa,MathUtils:o0,Matrix3:ke,Matrix4:Ue,MaxEquation:Rc,Mesh:At,MeshBasicMaterial:ai,MeshDepthMaterial:Fl,MeshDistanceMaterial:zl,MeshLambertMaterial:up,MeshMatcapMaterial:hp,MeshNormalMaterial:lp,MeshPhongMaterial:ap,MeshPhysicalMaterial:op,MeshStandardMaterial:Jl,MeshToonMaterial:cp,MinEquation:wc,MirroredRepeatWrapping:cr,MixOperation:qd,MultiplyBlending:Ac,MultiplyOperation:Rr,NearestFilter:dt,NearestMipMapLinearFilter:vm,NearestMipMapNearestFilter:_m,NearestMipmapLinearFilter:js,NearestMipmapNearestFilter:ta,NeverCompare:mf,NeverDepth:Fd,NeverStencilFunc:Lm,NoBlending:zn,NoColorSpace:Qn,NoToneMapping:Mn,NormalAnimationBlendMode:ua,NormalBlending:Li,NotEqualCompare:yf,NotEqualDepth:Wd,NotEqualStencilFunc:Nm,NumberKeyframeTrack:xr,Object3D:$e,ObjectLoader:aM,ObjectSpaceNormalMap:ff,OctahedronBufferGeometry:lE,OctahedronGeometry:Us,OneFactor:Id,OneMinusDstAlphaFactor:Ud,OneMinusDstColorFactor:Nd,OneMinusSrcAlphaFactor:Ml,OneMinusSrcColorFactor:Pd,OrthographicCamera:ma,PCFShadowMap:xl,PCFSoftShadowMap:Sd,PMREMGenerator:el,Path:mr,PerspectiveCamera:St,Plane:Un,PlaneBufferGeometry:uE,PlaneGeometry:Ls,PlaneHelper:JM,PointLight:yp,PointLightHelper:GM,Points:Yf,PointsMaterial:Vl,PolarGridHelper:qM,PolyhedronBufferGeometry:hE,PolyhedronGeometry:Wn,PositionalAudio:_M,PropertyBinding:Ye,PropertyMixer:Cp,QuadraticBezierCurve:Xl,QuadraticBezierCurve3:Yl,Quaternion:Ht,QuaternionKeyframeTrack:Ns,QuaternionLinearInterpolant:gp,RED_GREEN_RGTC2_Format:Jc,RED_RGTC1_Format:af,REVISION:aa,RGBADepthPacking:df,RGBAFormat:Yt,RGBAIntegerFormat:Rl,RGBA_ASTC_10x10_Format:Xc,RGBA_ASTC_10x5_Format:Hc,RGBA_ASTC_10x6_Format:Wc,RGBA_ASTC_10x8_Format:qc,RGBA_ASTC_12x10_Format:Yc,RGBA_ASTC_12x12_Format:Zc,RGBA_ASTC_4x4_Format:Dc,RGBA_ASTC_5x4_Format:Nc,RGBA_ASTC_5x5_Format:Bc,RGBA_ASTC_6x5_Format:Fc,RGBA_ASTC_6x6_Format:zc,RGBA_ASTC_8x5_Format:kc,RGBA_ASTC_8x6_Format:Gc,RGBA_ASTC_8x8_Format:Vc,RGBA_BPTC_Format:Yo,RGBA_ETC2_EAC_Format:Uc,RGBA_PVRTC_2BPPV1_Format:Pc,RGBA_PVRTC_4BPPV1_Format:Lc,RGBA_S3TC_DXT1_Format:Wo,RGBA_S3TC_DXT3_Format:qo,RGBA_S3TC_DXT5_Format:Xo,RGB_ETC1_Format:of,RGB_ETC2_Format:Oc,RGB_PVRTC_2BPPV1_Format:Ic,RGB_PVRTC_4BPPV1_Format:Cc,RGB_S3TC_DXT1_Format:Ho,RGFormat:rf,RGIntegerFormat:wl,RawShaderMaterial:rp,Ray:Is,Raycaster:DM,RectAreaLight:bp,RedFormat:sf,RedIntegerFormat:Al,ReinhardToneMapping:Zd,RepeatWrapping:ar,ReplaceStencilOp:Sm,ReverseSubtractEquation:Rd,RingBufferGeometry:dE,RingGeometry:Br,SIGNED_RED_GREEN_RGTC2_Format:Kc,SIGNED_RED_RGTC1_Format:$c,SRGBColorSpace:Be,Scene:kf,ShaderChunk:ze,ShaderLib:ln,ShaderMaterial:bn,ShadowMaterial:sp,Shape:Oi,ShapeBufferGeometry:fE,ShapeGeometry:Fr,ShapePath:QM,ShapeUtils:En,ShortType:Qd,Skeleton:ya,SkeletonHelper:kM,SkinnedMesh:Wf,Source:Ri,Sphere:dn,SphereBufferGeometry:pE,SphereGeometry:Ds,Spherical:NM,SphericalHarmonics3:Tp,SplineCurve:Zl,SpotLight:xp,SpotLightHelper:zM,Sprite:Vf,SpriteMaterial:kl,SrcAlphaFactor:yl,SrcAlphaSaturateFactor:Bd,SrcColorFactor:Ld,StaticCopyUsage:Hm,StaticDrawUsage:dr,StaticReadUsage:km,StereoCamera:fM,StreamCopyUsage:qm,StreamDrawUsage:zm,StreamReadUsage:Vm,StringKeyframeTrack:Wi,SubtractEquation:wd,SubtractiveBlending:Sc,TOUCH:fm,TangentSpaceNormalMap:oi,TetrahedronBufferGeometry:mE,TetrahedronGeometry:zr,Texture:pt,TextureLoader:iM,TorusBufferGeometry:gE,TorusGeometry:kr,TorusKnotBufferGeometry:_E,TorusKnotGeometry:Gr,Triangle:Ft,TriangleFanDrawMode:bm,TriangleStripDrawMode:Em,TrianglesDrawMode:Mm,TubeBufferGeometry:vE,TubeGeometry:Vr,TwoPassDoubleSide:gm,UVMapping:ca,Uint16BufferAttribute:Dl,Uint32BufferAttribute:Nl,Uint8BufferAttribute:I0,Uint8ClampedBufferAttribute:L0,Uniform:ou,UniformsGroup:PM,UniformsLib:ae,UniformsUtils:wf,UnsignedByteType:kn,UnsignedInt248Type:Jn,UnsignedIntType:Fn,UnsignedShort4444Type:Tl,UnsignedShort5551Type:Sl,UnsignedShortType:la,VSMShadowMap:gn,Vector2:Z,Vector3:S,Vector4:Je,VectorKeyframeTrack:yr,VideoTexture:gy,WebGL1Renderer:zf,WebGL3DRenderTarget:_0,WebGLArrayRenderTarget:g0,WebGLCoordinateSystem:yn,WebGLCubeRenderTarget:Cf,WebGLMultipleRenderTargets:v0,WebGLRenderTarget:hn,WebGLRenderer:Ff,WebGLUtils:Df,WebGPUCoordinateSystem:fr,WireframeGeometry:ip,WrapAroundEnding:hr,ZeroCurvatureEnding:Ai,ZeroFactor:Cd,ZeroSlopeEnding:wi,ZeroStencilOp:Tm,_SRGBAFormat:na,sRGBEncoding:jn},Symbol.toStringTag,{value:"Module"})),Ko=0,xE=1,yE=new S,Kh=new Lp,pc=new Un,jh=new S,No=new Ft;class ME{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new Qh,this.unassigned=new Qh,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.vertices.push(new EE(e[t]));this.compute()}return this}setFromObject(e){const t=[];return e.updateMatrixWorld(!0),e.traverse(function(n){const i=n.geometry;if(i!==void 0){const r=i.attributes.position;if(r!==void 0)for(let o=0,a=r.count;o<a;o++){const c=new S;c.fromBufferAttribute(r,o).applyMatrix4(n.matrixWorld),t.push(c)}}}),this.setFromPoints(t)}containsPoint(e){const t=this.faces;for(let n=0,i=t.length;n<i;n++)if(t[n].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,t){const n=this.faces;let i=-1/0,r=1/0;for(let o=0,a=n.length;o<a;o++){const c=n[o],l=c.distanceToPoint(e.origin),u=c.normal.dot(e.direction);if(l>0&&u>=0)return null;const h=u!==0?-l/u:0;if(!(h<=0)&&(u>0?r=Math.min(h,r):i=Math.max(h,i),i>r))return null}return i!==-1/0?e.at(i,t):e.at(r,t),t}intersectsRay(e){return this.intersectRay(e,yE)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}addVertexToFace(e,t){return e.face=t,t.outside===null?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}removeVertexFromFace(e,t){return e===t.outside&&(e.next!==null&&e.next.face===t?t.outside=e.next:t.outside=null),this.assigned.remove(e),this}removeAllVerticesFromFace(e){if(e.outside!==null){const t=e.outside;let n=e.outside;for(;n.next!==null&&n.next.face===e;)n=n.next;return this.assigned.removeSubList(t,n),t.prev=n.next=null,e.outside=null,t}}deleteFaceVertices(e,t){const n=this.removeAllVerticesFromFace(e);if(n!==void 0)if(t===void 0)this.unassigned.appendChain(n);else{let i=n;do{const r=i.next;t.distanceToPoint(i.point)>this.tolerance?this.addVertexToFace(i,t):this.unassigned.append(i),i=r}while(i!==null)}return this}resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let t=this.unassigned.first();do{const n=t.next;let i=this.tolerance,r=null;for(let o=0;o<e.length;o++){const a=e[o];if(a.mark===Ko){const c=a.distanceToPoint(t.point);if(c>i&&(i=c,r=a),i>1e3*this.tolerance)break}}r!==null&&this.addVertexToFace(t,r),t=n}while(t!==null)}return this}computeExtremes(){const e=new S,t=new S,n=[],i=[];for(let r=0;r<3;r++)n[r]=i[r]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(let r=0,o=this.vertices.length;r<o;r++){const a=this.vertices[r],c=a.point;for(let l=0;l<3;l++)c.getComponent(l)<e.getComponent(l)&&(e.setComponent(l,c.getComponent(l)),n[l]=a);for(let l=0;l<3;l++)c.getComponent(l)>t.getComponent(l)&&(t.setComponent(l,c.getComponent(l)),i[l]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:n,max:i}}computeInitialHull(){const e=this.vertices,t=this.computeExtremes(),n=t.min,i=t.max;let r=0,o=0;for(let d=0;d<3;d++){const f=i[d].point.getComponent(d)-n[d].point.getComponent(d);f>r&&(r=f,o=d)}const a=n[o],c=i[o];let l,u;r=0,Kh.set(a.point,c.point);for(let d=0,f=this.vertices.length;d<f;d++){const m=e[d];if(m!==a&&m!==c){Kh.closestPointToPoint(m.point,!0,jh);const _=jh.distanceToSquared(m.point);_>r&&(r=_,l=m)}}r=-1,pc.setFromCoplanarPoints(a.point,c.point,l.point);for(let d=0,f=this.vertices.length;d<f;d++){const m=e[d];if(m!==a&&m!==c&&m!==l){const _=Math.abs(pc.distanceToPoint(m.point));_>r&&(r=_,u=m)}}const h=[];if(pc.distanceToPoint(u.point)<0){h.push(cn.create(a,c,l),cn.create(u,c,a),cn.create(u,l,c),cn.create(u,a,l));for(let d=0;d<3;d++){const f=(d+1)%3;h[d+1].getEdge(2).setTwin(h[0].getEdge(f)),h[d+1].getEdge(1).setTwin(h[f+1].getEdge(0))}}else{h.push(cn.create(a,l,c),cn.create(u,a,c),cn.create(u,c,l),cn.create(u,l,a));for(let d=0;d<3;d++){const f=(d+1)%3;h[d+1].getEdge(2).setTwin(h[0].getEdge((3-d)%3)),h[d+1].getEdge(0).setTwin(h[f+1].getEdge(1))}}for(let d=0;d<4;d++)this.faces.push(h[d]);for(let d=0,f=e.length;d<f;d++){const m=e[d];if(m!==a&&m!==c&&m!==l&&m!==u){r=this.tolerance;let _=null;for(let g=0;g<4;g++){const p=this.faces[g].distanceToPoint(m.point);p>r&&(r=p,_=this.faces[g])}_!==null&&this.addVertexToFace(m,_)}}return this}reindexFaces(){const e=[];for(let t=0;t<this.faces.length;t++){const n=this.faces[t];n.mark===Ko&&e.push(n)}return this.faces=e,this}nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,t=0;const n=this.assigned.first().face;let i=n.outside;do{const r=n.distanceToPoint(i.point);r>t&&(t=r,e=i),i=i.next}while(i!==null&&i.face===n);return e}}computeHorizon(e,t,n,i){this.deleteFaceVertices(n),n.mark=xE;let r;t===null?r=t=n.getEdge(0):r=t.next;do{const o=r.twin,a=o.face;a.mark===Ko&&(a.distanceToPoint(e)>this.tolerance?this.computeHorizon(e,o,a,i):i.push(r)),r=r.next}while(r!==t);return this}addAdjoiningFace(e,t){const n=cn.create(e,t.tail(),t.head());return this.faces.push(n),n.getEdge(-1).setTwin(t.twin),n.getEdge(0)}addNewFaces(e,t){this.newFaces=[];let n=null,i=null;for(let r=0;r<t.length;r++){const o=t[r],a=this.addAdjoiningFace(e,o);n===null?n=a:a.next.setTwin(i),this.newFaces.push(a.face),i=a}return n.next.setTwin(i),this}addVertexToHull(e){const t=[];return this.unassigned.clear(),this.removeVertexFromFace(e,e.face),this.computeHorizon(e.point,null,e.face,t),this.addNewFaces(e,t),this.resolveUnassignedPoints(this.newFaces),this}cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}compute(){let e;for(this.computeInitialHull();(e=this.nextVertexToAdd())!==void 0;)this.addVertexToHull(e);return this.reindexFaces(),this.cleanup(),this}}class cn{constructor(){this.normal=new S,this.midpoint=new S,this.area=0,this.constant=0,this.outside=null,this.mark=Ko,this.edge=null}static create(e,t,n){const i=new cn,r=new mc(e,i),o=new mc(t,i),a=new mc(n,i);return r.next=a.prev=o,o.next=r.prev=a,a.next=o.prev=r,i.edge=r,i.compute()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}compute(){const e=this.edge.tail(),t=this.edge.head(),n=this.edge.next.head();return No.set(e.point,t.point,n.point),No.getNormal(this.normal),No.getMidpoint(this.midpoint),this.area=No.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}}class mc{constructor(e,t){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=t}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){const e=this.head(),t=this.tail();return t!==null?t.point.distanceTo(e.point):-1}lengthSquared(){const e=this.head(),t=this.tail();return t!==null?t.point.distanceToSquared(e.point):-1}setTwin(e){return this.twin=e,e.twin=this,this}}class EE{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}}class Qh{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,t){return t.prev=e.prev,t.next=e,t.prev===null?this.head=t:t.prev.next=t,e.prev=t,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next===null?this.tail=t:t.next.prev=t,e.next=t,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,t){return e.prev===null?this.head=t.next:e.prev.next=t.next,t.next===null?this.tail=e.prev:t.next.prev=e.prev,this}isEmpty(){return this.head===null}}const bE=[4,6,8,10,12,20,100],Fb=2,zb=1e5,kb=[100,1e3,1e4],Aa=s=>parseInt(s.slice(1),10),TE=s=>s>=100,Op=s=>/^E\d+$/.test(s),SE=s=>Op(s)||/^D\d+$/.test(s)&&TE(Aa(s)),Gb=s=>SE(s)?60:Aa(s),Vb=s=>/^D\d+$/.test(s)&&!bE.includes(Aa(s)),nt=(s,e)=>[s[0]-e[0],s[1]-e[1],s[2]-e[2]],Ui=(s,e)=>[s[0]+e[0],s[1]+e[1],s[2]+e[2]],Vt=(s,e)=>[s[0]*e,s[1]*e,s[2]*e],ct=(s,e)=>s[0]*e[0]+s[1]*e[1]+s[2]*e[2],vn=(s,e)=>[s[1]*e[2]-s[2]*e[1],s[2]*e[0]-s[0]*e[2],s[0]*e[1]-s[1]*e[0]],Wr=s=>Math.sqrt(ct(s,s)),br=s=>Vt(s,1/(Wr(s)||1));function cl(s,e){let t=1/0,n=!0;for(let i=0;i<e.length;i++){const r=e[i],o=e[(i+1)%e.length],a=o[0]-r[0],c=o[1]-r[1],l=a*a+c*c||1;a*(s[1]-r[1])-c*(s[0]-r[0])<0&&(n=!1);const u=Math.max(0,Math.min(1,((s[0]-r[0])*a+(s[1]-r[1])*c)/l));t=Math.min(t,Math.hypot(s[0]-r[0]-u*a,s[1]-r[1]-u*c))}return n?t:-t}function AE(s,e){let t=e,n=cl(t,s),i=Math.max(...s.map(r=>Math.hypot(r[0],r[1])))*.25;for(let r=0;r<80&&i>1e-5;r++){let o=!1;for(let a=0;a<8;a++){const c=[t[0]+Math.cos(a*Math.PI/4)*i,t[1]+Math.sin(a*Math.PI/4)*i],l=cl(c,s);l>n+1e-9&&(t=c,n=l,o=!0)}o||(i*=.5)}return{c:t,d:n}}function jo(s,e,t,n){const i=s.reduce((m,_)=>Ui(m,_),[0,0,0]),r=Vt(i,1/s.length);let o=br(vn(nt(s[1],s[0]),nt(s[2],s[0])));ct(o,r)<0&&(o=Vt(o,-1),s=[...s].reverse());const a=Wr(vn(t,o))<.2?[0,0,1]:t,c=br(nt(a,Vt(o,ct(a,o)))),l=vn(c,o);let u=n!=null?n:r;const d=AE((m=>s.map(_=>[ct(nt(_,m),l),ct(nt(_,m),c)]))(u),[0,0]);u=Ui(Ui(u,Vt(l,d.c[0])),Vt(c,d.c[1]));const f=Math.max(...s.map(m=>Math.hypot(ct(nt(m,u),l),ct(nt(m,u),c))))||1;return{number:e,normal:o,center:u,dist:ct(o,u),verts:s,u:l,v:c,fit:f,inr:Math.max(d.d,.001)}}const au=s=>{const e=[];for(const t of s)for(const n of t.verts)e.some(i=>Wr(nt(n,i))<1e-4)||e.push(n);return e};function wE(){const n=a=>Array.from({length:40},(c,l)=>[1*Math.cos(2*Math.PI*l/40),a,1*Math.sin(2*Math.PI*l/40)]),i=n(.1),r=n(-.2/2),o=[jo(i,2,[0,0,-1]),jo(r,1,[0,0,-1])];for(let a=0;a<40;a++){const c=(a+1)%40;o.push(jo([r[a],r[c],i[c],i[a]],0,[0,1,0]))}return{vertices:au(o),faces:o}}function RE(s){const e=Math.PI*(3-Math.sqrt(5));let t=[];for(let i=0;i<s;i++){const r=1-2*(i+.5)/s,o=Math.sqrt(1-r*r);t.push([Math.cos(e*i)*o,r,Math.sin(e*i)*o])}const n=s>300?25:s>120?80:250;for(let i=0;i<n;i++){const r=t.map(()=>[0,0,0]);for(let a=0;a<s;a++)for(let c=a+1;c<s;c++){const l=nt(t[a],t[c]),u=ct(l,l)+1e-9,h=1/(u*Math.sqrt(u));r[a]=Ui(r[a],Vt(l,h)),r[c]=nt(r[c],Vt(l,h))}const o=.06*(1-i/n)+.002;t=t.map((a,c)=>{const l=nt(r[c],Vt(a,ct(r[c],a))),u=Wr(l);return br(Ui(a,Vt(l,Math.min(u,1)*o/(u||1))))})}return t}function CE(s){const e=.85*Math.cbrt(Math.max(s,20)/20),t=RE(s),n=t.map(l=>new S(l[0],l[1],l[2])),i=new Map(n.map((l,u)=>[l,u])),r=new ME().setFromPoints(n),o=[];for(const l of r.faces){const u=[];let h=l.edge;do u.push(i.get(h.head().point)),h=h.next;while(h!==l.edge);const[d,f,m]=u.map(p=>t[p]),_=ct(d,vn(f,m));if(Math.abs(_)<1e-9)continue;const g=Vt(Ui(Ui(vn(f,m),vn(m,d)),vn(d,f)),e/_);o.push({ids:u,v:g})}const a=t.map(()=>[]);for(const{ids:l,v:u}of o)for(const h of l)a[h].push(u);const c=[];for(let l=0;l<s;l++){const u=t[l],h=Vt(u,e),d=Math.abs(u[1])<.95?[0,1,0]:[0,0,-1],f=br(nt(d,Vt(u,ct(d,u)))),m=vn(f,u),_=a[l].map(x=>({p:x,ang:Math.atan2(ct(nt(x,h),f),ct(nt(x,h),m))})).sort((x,v)=>x.ang-v.ang).map(x=>x.p).filter((x,v,y)=>v===0||Wr(nt(x,y[v-1]))>1e-4);if(_.length<3)continue;const g=Math.max(..._.map(x=>Math.hypot(ct(nt(x,h),m),ct(nt(x,h),f)))),p=cl([0,0],_.map(x=>[ct(nt(x,h),m),ct(nt(x,h),f)]));c.push({number:c.length+1,normal:u,center:h,dist:e,verts:_,u:m,v:f,fit:g,inr:Math.max(p,.001)})}return{vertices:au(c),faces:c}}function ed(s,e){const t=_=>2*Math.PI*_/s,n=_=>{const g=[1,_,0],p=[Math.cos(t(1)),_,Math.sin(t(1))],x=[Math.cos(t(.5)),-_,Math.sin(t(.5))],v=vn(nt(p,g),nt(x,g));return ct(v,g)/v[1]};let i=.3,r=1/0;for(let _=.04;_<.95;_+=.01){const g=n(_);if(!isFinite(g)||g<=_)continue;const p=Math.abs(g-(s===3?1.0607:1.2));p<r&&(r=p,i=_)}const o=n(i),a=[0,o,0],c=[0,-o,0],l=_=>[Math.cos(t(_)),i,Math.sin(t(_))],u=_=>[Math.cos(t(_+.5)),-i,Math.sin(t(_+.5))],h=[];for(let _=0;_<s;_++){const g=(_+(s+1)/2)%s;h.push({verts:[a,l(_),u(_),l(_+1)],numero:e?_+1:2*_+1}),h.push({verts:[c,u(_),l(_+1),u(_+1)],numero:e?g%s+1:2*_+2})}const d=ct(br(vn(nt(h[0].verts[1],h[0].verts[0]),nt(h[0].verts[2],h[0].verts[0]))),h[0].verts[1]),f=.7,m=h.map(_=>jo(_.verts.map(g=>Vt(g,f/Math.abs(d))),_.numero,[0,1,0]));return{vertices:au(m),faces:m}}const td=new Map;function Hb(s){const e=td.get(s);if(e)return e;const t=s===2?wE():[3,5,7,9].includes(s)?ed(s,!0):[14,16,18].includes(s)?ed(s/2,!1):CE(s);return td.set(s,t),t}const IE=s=>{const e=Math.max(0,...s.faces.map(r=>r.number)),t=s.faces.some(r=>r.number===0),n=e+(t?1:0),i=Math.ceil(Math.sqrt(n));return{numbered:e,cols:i,rows:Math.ceil(n/i),cellOf:r=>r.number>0?r.number-1:e}};function Wb(s){const{cols:e,rows:t,cellOf:n}=IE(s),i=[],r=[],o=[];for(const c of s.faces){const l=n(c),u=(l%e+.5)/e,h=1-(Math.floor(l/e)+.5)/t,d=f=>{i.push(...f),r.push(...c.normal);const m=ct(nt(f,c.center),c.u)/c.fit,_=ct(nt(f,c.center),c.v)/c.fit;o.push(u+m*.49/e,h+_*.49/t)};for(let f=1;f<c.verts.length-1;f++)d(c.verts[0]),d(c.verts[f]),d(c.verts[f+1])}const a=new Ve;return a.setAttribute("position",new _e(i,3)),a.setAttribute("normal",new _e(r,3)),a.setAttribute("uv",new _e(o,2)),a}const cu=[5,10,20,50,100,200,500,1e3,2e3,5e3,1e4],qb=12,Up=20,Xb=[{pe:1,faces:5,bonus:1},{pe:2,faces:5,bonus:2},{pe:3,faces:5,bonus:3},{pe:4,faces:5,bonus:4},{pe:5,faces:10,bonus:1},{pe:6,faces:20,bonus:1},{pe:7,faces:50,bonus:1},{pe:8,faces:100,bonus:1},{pe:9,faces:200,bonus:1},{pe:10,faces:500,bonus:1},{pe:11,faces:1e3,bonus:1},{pe:12,faces:2e3,bonus:1},{pe:13,faces:5e3,bonus:1},{pe:14,faces:1e4,bonus:1}],Dp=s=>{const e=cu.findIndex(t=>s<=t);return Math.min(1,e<0?1:e/7)},LE=1.4,ei={riso:1.7,queda:2.5,fim:5.1},PE=s=>Array.from({length:s},(e,t)=>.8+t*1.9/s),OE=(s,e,t,n)=>wa(t,n)&&s>e+ei.riso?s-e-ei.riso:-1,wa=(s,e)=>s>=100&&e.length===1&&e[0]===1,Yb=(s,e)=>wa(s,e)?ei.fim+.3:LE;function Np(s){const e=s>=Up,t=Dp(s),n=e?3+Math.round(t*3):2,i=e?5.4+2.4*t:3.6,r=e?2.5:1.7,o=i-(e?1.15:.9),a=Array.from({length:6},(c,l)=>l<n?r+(o-r)*Math.pow(n>1?l/(n-1):1,.8):99);return{aneis:n,travas:a,rev:i,fim:i+5.2+.8*t}}const UE=[["#6fe6ff","#ffe2a0"],["#7f92ff","#ffd0f0"],["#b86bff","#ffdf8a"],["#ff5ecb","#9af4ff"],["#ffa63d","#fff0c8"],["#ff4a4a","#ffe0c0"],["#c9b6ff","#8affea"],["#ffffff","#ffcf4a"],["#3affc8","#ffffff"],["#ff3ad0","#ffe23a"],["#b98cff","#ffffff"]],Bp=s=>UE[Math.max(0,cu.indexOf(s))],DE=(s,e)=>(e>=s?1:e<=1?-1:0)*(s>=Up?1:.35),NE=(s,e,t,n)=>wa(t,n)?1-2*Math.min(1,Math.max(0,(s-e-ei.riso)/(ei.queda-ei.riso))):n.length===1?DE(t,n[0]):0,nd=s=>{const e=parseInt(s.slice(1),16);return[(e>>16)/255,(e>>8&255)/255,(e&255)/255]},gc=(s,e,t)=>Number.isFinite(s)?Math.min(t,Math.max(e,Math.floor(s))):e,_c=(s,e)=>typeof s=="string"?s.slice(0,e):"";function Zb(s){const e=s;return!e||!Array.isArray(e.valores)||!e.valores.length||!cu.includes(e.faces)?null:{id:_c(e.id,60),faces:e.faces,valores:e.valores.slice(0,8).map(t=>gc(t,1,e.faces)),bonus:gc(e.bonus,-99999,99999),nome:_c(e.nome,40),rotulo:_c(e.rotulo,90),semente:gc(e.semente,0,1e5),parcial:e.parcial===!0}}function BE(s,e){s.width!==768&&(s.width=768,s.height=384);const t=s.getContext("2d");t.globalCompositeOperation="source-over",t.fillStyle="#000",t.fillRect(0,0,768,384),t.globalCompositeOperation="lighter",t.textAlign="center",t.textBaseline="middle",t.font=`700 ${Math.min(300,1150/Math.max(2,e.length))}px "Palatino Linotype", Palatino, "Book Antiqua", "Times New Roman", serif`,t.fillStyle="#f00",t.shadowColor="#0f0",t.shadowBlur=56,t.fillText(e,384,204),t.fillText(e,384,204),t.shadowBlur=0}const FE=s=>String(s).length-2,Nn={ini:.35,ritmo:4.6,silabas:8,periodo:2.1},Bo=.46,Bn=s=>s.toFixed(3),Fp=`
// olho em brasa, de pupila em fenda; mira = para onde a pupila aponta
void olhoBrasa(vec2 q, float L, float gira, float ab, vec2 mira, inout vec3 cor) {
  vec2 v = q * rot(gira) / L, m = v - mira;
  float r = length(v), rm = length(m), d = abs(v.y + 0.10) - 0.48 * ab * max(1.0 - v.x * v.x, 0.0);
  float dentro = smoothstep(0.05, -0.05, d) * step(abs(v.x), 1.0);
  cor *= 1.0 - 0.9 * exp(-max(d, 0.0) * 5.0) * smoothstep(1.7, 0.9, r);
  vec3 brasa = mix(vec3(1.0, 0.93, 0.80), vec3(0.95, 0.05, 0.03), smoothstep(0.08, 0.72, rm)) * (0.70 + 0.55 * ruido(m / (rm + 1e-3) * 7.0 + rm * 2.5));
  brasa *= 1.0 - smoothstep(1.1, 0.8, length(m / vec2(0.10, 0.5)));
  cor = mix(cor, brasa * 1.5, dentro);
  cor += vec3(0.95, 0.06, 0.04) * exp(-r * 2.3) * 0.60 * ab;
}
// campo de olhos, um por casa: abrem onde a frente j\xE1 passou, e miram o alvo (encara = 1) ou quem olha a tela (0)
void campo(inout vec4 c, vec2 p, vec2 alvo, float esc, float dens, float frente, float encara, float peso) {
  vec2 tam = vec2(0.22, 0.24) * esc, puxa = vec2(fract(floor(p.y / tam.y) * 0.618 + esc) * tam.x, 0.0), casa = floor((p + puxa) / tam), meio = (casa + 0.5) * tam - puxa;
  float h = h21(casa + esc * 31.0), g = h21(casa + 7.7 + esc * 13.0), k = h21(casa + 31.0);
  if (h > dens || peso < 0.002) return;
  float ab = smoothstep(0.0, 0.14, length(meio - alvo) - frente - 0.10 * k) * (1.0 - smoothstep(0.0, 0.05, sin(uT * (0.8 + k) + h * 70.0) - 0.95));
  vec2 v = p - meio - (vec2(g, k) - 0.5) * 0.075 * esc;
  vec3 cor = c.rgb;
  float gira = 0.5 * (g - 0.5);
  olhoBrasa(v, (0.030 + 0.042 * k) * esc, gira, ab, normalize(alvo - meio + 1e-4) * rot(gira) * vec2(0.30, 0.14) * encara, cor);
  float perto = smoothstep(0.098, 0.06, max(abs(v.x), abs(v.y)) / esc) * step(0.001, ab) * peso;
  c.rgb = mix(c.rgb, cor, perto);
  c.a = max(c.a, perto);
}
`,zE=Fp+`
// elos de ferro, um de frente e um de perfil; o vetor u aponta para fora e a corrente come\xE7a em ponta
vec4 corrente(vec2 p, vec2 u, float ponta, float w, float desl) {
  float x = dot(p, u), y = dot(p, vec2(-u.y, u.x)), per = w * 2.2;
  float xa = mod(x + desl, per * 2.0) - per, xb = mod(x + desl + per, per * 2.0) - per;
  float da = abs(length(vec2(max(abs(xa) - per * 0.42, 0.0), y)) - w * 0.62) - w * 0.21, db = length(vec2(max(abs(xb) - per * 0.5, 0.0), y)) - w * 0.24;
  float d = min(da, db), m = smoothstep(0.004, -0.002, d) * step(ponta, x);
  float alt = da < db ? (length(vec2(max(abs(xa) - per * 0.42, 0.0), y)) - w * 0.62) / (w * 0.21) : y / (w * 0.24);
  vec3 c = vec3(0.050, 0.044, 0.052) + vec3(0.62, 0.56, 0.60) * exp(-pow((alt * sign(y + 1e-4) - 0.35) / 0.33, 2.0)) * (0.35 + 0.65 * ruido(p * 90.0)) + vec3(0.55, 0.03, 0.04) * smoothstep(0.2, 1.0, -alt * sign(y + 1e-4));
  return vec4(c, m);
}
// sombra embaixo da corrente
void porCorrente(inout vec4 c, vec2 p, vec2 u, float ponta, float w, float desl, float k) {
  float y = dot(p - vec2(0.008, -0.012), vec2(-u.y, u.x));
  c.rgb *= 1.0 - 0.75 * k * smoothstep(w * 1.3, w * 0.3, abs(y)) * step(ponta, dot(p, u));
  vec4 e = corrente(p, u, ponta, w, desl) * vec4(1.0, 1.0, 1.0, k);
  c.rgb = mix(c.rgb, e.rgb, e.a);
  c.a = max(c.a, e.a);
}
float gargalhada(float t, float fim) {
  float g = t - ${Bn(Nn.ini)};
  if (g < 0.0 || t > fim) return 0.0;
  g = mod(g, ${Bn(Nn.periodo)});
  return g < ${Bn(Nn.silabas/Nn.ritmo)} ? pow(abs(sin(g * ${Bn(Math.PI*Nn.ritmo)})), 0.6) : 0.0;
}
`,kE=s=>`
#define NIVEL ${s}
const float ND = ${Bn(s)};
${zE}
vec4 veu(vec2 p) {
  float e = env(), limpo = 1.0 - 0.9 * tituloSombra(p), risada = gargalhada(uT, uDur - 0.6), fecha = 1.0 - smoothstep(uDur - 1.0, uDur - 0.75, uT);
  vec2 q = p - uCentro;
  float r = length(q), a = atan(q.y, q.x), treme = floor(uT * 26.0);
  // primeiro o n\xFAmero; de repente, todos olham para voc\xEA
  float encara = 1.0 - smoothstep(uDur * ${Bn(Bo)}, uDur * ${Bn(Bo)} + 0.10, uT), susto = exp(-abs(uT - uDur * ${Bn(Bo)} - 0.05) * 9.0);
  vec4 c = cena(p);
  c.a = max(c.a, e * 0.96);
  float nevoa = pow(fbm(vec2(q.x * 4.0, q.y * 3.0 - uT * (1.2 + 0.4 * ND))), 2.0);
  c.rgb += mix(vec3(0.16, 0.02, 0.22), vec3(0.60, 0.03, 0.06), nevoa) * nevoa * (0.30 + 0.12 * ND) * e;
  vec2 po = p + (vec2(h11(treme), h11(treme + 5.0)) - 0.5) * (0.006 * risada + 0.012 * susto);
  float abrem = smoothstep(0.0, 0.75, uT);
#if NIVEL > 1
  // o grande olho, com o 1 na pupila
  float gr = 0.36 + 0.025 * ND, ab = smoothstep(0.30, 0.62, uT) * fecha * (1.0 - 0.96 * exp(-pow((uT - uDur * ${Bn(Bo)}) * 11.0, 2.0))) * (1.0 + 0.10 * susto);
  vec3 cor = c.rgb;
  vec2 go = po - uCentro, gd = go / (r + 1e-3);
  olhoBrasa(go - vec2(0.0, 0.10 * gr), gr, 0.0, ab, vec2(0.0, -0.10), cor);
  // fibras, veias e a fenda onde cabe o n\xFAmero
  float globo = smoothstep(0.02, -0.02, abs(go.y) - 0.48 * gr * ab * max(1.0 - go.x * go.x / (gr * gr), 0.0)) * step(abs(go.x), gr), rg = r / gr;
  float fibra = fbm3(gd * 10.0 + rg * 2.0 - uT * 0.15), veia = pow(1.0 - abs(2.0 * fbm3(go * 16.0) - 1.0), 8.0);
  cor *= mix(1.0, (0.30 + 1.15 * fibra) * mix(0.72, 1.0, smoothstep(0.35, 0.0, rg)), globo);
  cor = mix(cor, vec3(0.28, 0.0, 0.02), globo * veia * smoothstep(0.35, 0.8, rg) * 0.9);
  cor *= 1.0 - globo * smoothstep(0.80, 0.0, 0.48 * ab * (1.0 - rg * rg) - abs(go.y) / gr) * 0.45;
  cor *= 1.0 - globo * smoothstep(1.12, 0.92, length(go / vec2(0.072 * (1.0 - 0.15 * susto), 0.47 * gr)));
  c.rgb = mix(c.rgb, cor, smoothstep(1.5, 1.1, r / gr) * e * limpo);
  float frente = mix(1.5, gr * 1.02, abrem);
#else
  float frente = mix(1.5, 0.26, abrem);
#endif
  frente += 3.0 * (1.0 - fecha);
  campo(c, po, uCentro, 1.75, 0.40 + 0.10 * ND, frente, encara, limpo * e);
  campo(c, po, uCentro, 0.95, 0.50 + 0.11 * ND, frente, encara, limpo * e);
#if NIVEL > 2
  campo(c, po, uCentro, 0.62, 0.55 + 0.08 * ND, frente + 0.03, encara, limpo * e);
#endif
  // correntes: cada ponto s\xF3 olha a do seu setor
  float n = 4.0 + 2.0 * ND, setor = mod(floor((a - 0.4) / TAU * n), n), hs = h11(setor + 7.0), th = (setor + 0.5 + (hs - 0.5) * 0.3) / n * TAU + 0.4;
  porCorrente(c, q, vec2(cos(th), sin(th)), mix(1.5, NIVEL > 1 ? 0.30 : 0.19, smoothstep(0.0, 0.25, uT - 0.03 * setor)), 0.019 + 0.009 * hs, (0.02 + 0.006 * sin(uT * 40.0)) * risada, fecha * limpo * e);
  vec3 t = texto(p, 1.0 + 0.08 * risada + 0.10 * susto);
  c.rgb *= 1.0 - 0.75 * t.g;
  c.rgb = mix(c.rgb, vec3(1.0, 0.90, 0.75), t.r * e);
  c.rgb += vec3(1.0, 0.10, 0.02) * t.g * 0.5 * e;
  c.rgb += vec3(1.0, 0.15, 0.04) * exp(-abs(r - uT * 1.5) * 14.0) * exp(-uT * 2.0) * e;
  c.rgb = mix(c.rgb, vec3(1.0, 0.20, 0.10), texto(p, 1.0).b * tituloVis(p));
  return c;
}`,$b=`
uniform vec2 uMeia, uCaixa;
uniform float uRiso, uQueda, uFim, uNd;
void main() {
  vec2 p = vP;
  float livre = smoothstep(0.75, 1.35, length(p / uCaixa)), r = length(p);
  vec4 c = vec4(vec3(0.07, 0.0, 0.015) * smoothstep(0.1, 0.9, r), 1.0) * uRiso * smoothstep(0.05, 0.5, r) * 0.9;
  // o escuro abre os olhos, cada vez mais perto do n\xFAmero
  float esc = min(1.0, uMeia.y * 1.05);
  campo(c, p, vec2(0.0), esc, 0.55 + 0.08 * uNd, mix(1.3, 0.27, clamp(uRiso * 0.65 + uQueda * 0.6, 0.0, 1.0)), 1.0, step(0.01, uRiso) * livre);
  vec2 par = vec2(abs(p.x), p.y) / esc - vec2(0.185, 0.34);
  vec3 cor = c.rgb;
  olhoBrasa(par, 0.135 * (0.9 + 0.35 * uQueda), -0.45, smoothstep(0.15, 0.7, uRiso) * (1.0 + 0.2 * uQueda), vec2(-0.10, -0.12), cor);
  float perto = smoothstep(0.34, 0.2, length(par)) * smoothstep(0.1, 0.3, uRiso) * livre;
  c = vec4(mix(c.rgb, cor, perto), max(c.a, perto * 0.95));
  float n = 3.0 + uNd, fi = clamp(floor((atan(p.y, p.x) + 1.5708) * n * 0.5 + n * 0.5), 0.0, n - 1.0), th = -1.5708 + (fi - (n - 1.0) * 0.5) * 2.0 / n, k = smoothstep(0.12 * fi / n, 0.12 * fi / n + 0.35, uRiso);
  porCorrente(c, p, vec2(cos(th), sin(th)), mix(1.6, uCaixa.y * 0.75, k * k), 0.020 + 0.006 * h11(fi), 0.012 * sin(uT * 60.0 + fi) - uQueda * uQueda * 5.0, step(0.01, uRiso));
  if (uQueda > 0.0) {
    float v = uQueda * uQueda;
    // o mundo passa para cima
    for (int i = 0; i < 2; i++) {
      float fi = float(i), esp = 34.0 + 30.0 * fi, id = floor(p.x * esp), h = h11(id + fi * 31.0);
      float y = fract(p.y * (0.5 + 0.4 * h) - uT * (2.5 + 3.0 * h) + h * 9.0), risco = pow(1.0 - y, 5.0) * smoothstep(0.5, 0.1, abs(fract(p.x * esp) - 0.5));
      c.rgb += mix(vec3(0.9, 0.03, 0.04), vec3(0.75, 0.60, 0.70), h) * risco * step(0.55, h) * v * 0.9 * livre;
    }
    // rastro de fogo em cima do n\xFAmero e onda de choque embaixo
    float lg = uCaixa.x * 0.75 * (1.0 + 0.3 * sin(uT * 40.0)) / (1.0 + max(p.y, 0.0) * 2.5);
    float pluma = exp(-pow(p.x / lg, 2.0)) * smoothstep(0.0, 0.08, p.y) * exp(-p.y * 1.6) * (0.35 + 1.1 * fbm3(vec2(p.x * 9.0, p.y * 5.0 - uT * 11.0)));
    c.rgb += mix(vec3(0.9, 0.04, 0.04), vec3(1.0, 0.70, 0.60), pluma) * pluma * v * 1.5 * livre;
    float proa = p.y + uCaixa.y * 1.05 - 1.4 * p.x * p.x;
    c.rgb += vec3(1.0, 0.20, 0.15) * exp(-abs(proa) * 45.0) * smoothstep(0.5, 0.1, abs(p.x)) * v * 0.9;
  }
  gl_FragColor = vec4(max(c.rgb, 0.0), clamp(c.a, 0.0, 1.0)) * (1.0 - uFim);
}`,zp=[1.2,2,2.8],GE=[.9,2,3.1,4.2,5.3],id=6.7;function kp(s,e){if(s<100)return null;const t=s>=1e4?3:s>=1e3?2:1;if(e===69696)return{tipo:"ordem",cosmico:!0,absoluto:!0,nivel:t,titulo:"ORDEM ABSOLUTA",prio:11,dur:11};if(e===77777)return{tipo:"caos",cosmico:!0,absoluto:!0,nivel:t,titulo:"CAOS ABSOLUTO",prio:10,dur:11};if(e===6969)return{tipo:"ordem",cosmico:!0,nivel:t,titulo:"ORDEM C\xD3SMICA",prio:9,dur:8.5};if(e===7777)return{tipo:"caos",cosmico:!0,nivel:t,titulo:"CAOS C\xD3SMICO",prio:8,dur:8};if(e===777)return{tipo:"caos",cosmico:!1,roda:!0,nivel:t,titulo:"A RODA DO DESTINO",prio:7.5,dur:6.4};if(e===s){const n=["ACERTO CR\xCDTICO","CR\xCDTICO LEND\xC1RIO","CR\xCDTICO DIVINO"][t-1];return{tipo:"crit",cosmico:!1,nivel:t,titulo:n,prio:3+t,dur:3.4+t}}if(e===1){const n=FE(s),i=["O ABISMO RIU DE VOC\xCA","ACORRENTADO AO ABISMO","O ABISMO TE ARRASTOU","O ABISMO TE ENGOLIU"][n-1];return{tipo:"falha",cosmico:!1,demonio:n,nivel:t,titulo:i,prio:3.2+t,dur:3+.5*n}}return e===69?{tipo:"ordem",cosmico:!1,nivel:t,titulo:"ORDEM PERFEITA",prio:7,dur:5.5}:e===77?{tipo:"caos",cosmico:!1,duplo:!0,nivel:t,titulo:"DESTINO DUPLO",prio:6,dur:5.6}:e===7?{tipo:"caos",cosmico:!1,nivel:t,titulo:"O INESPERADO",prio:5.5,dur:4.6}:null}const VE={1:"A ENTIDADE TE ARRASTOU",7:"A ENTIDADE SORRI",77:"A ENTIDADE RI",777:"A RODA DA ENTIDADE",7777:"CAOS PRIMORDIAL",69:"HARMONIA DIVINA",6969:"ORDEM PRIMORDIAL"};function HE(s,e){const t=kp(s,e);return!t||t.tipo==="crit"?null:{...t,entidade:Bp(s),titulo:VE[e]||t.titulo,dur:t.dur+(t.demonio?0:1)}}function Jb(s,e){let t=null;for(const n of s){const i=e[n.id];if(i==null)continue;const r=(Op(n.type)?HE:kp)(Aa(n.type),i);r&&(!t||r.prio>t.efeito.prio)&&(t={efeito:r,die:n,valor:i})}return t}function Kb(s,e){if(s.tipo==="ordem")return 0;const t=.012*(s.cosmico?3:s.nivel)*Math.exp(-e*2.2);if(s.demonio){const i=e-Nn.ini,r=i>0&&i%Nn.periodo<Nn.silabas/Nn.ritmo&&e<s.dur-1;return t+.02*s.demonio*Math.exp(-e*4)+(r?.0015*s.demonio:0)}if(s.absoluto){let i=t+.0015;for(const r of GE)e>=r&&(i+=.03*Math.exp(-(e-r)*6));return i+(e>=id?.09*Math.exp(-(e-id)*1.6):0)}const n=s.roda?zp.reduce((i,r,o)=>i+(e>=r?(.012+.008*o)*Math.exp(-(e-r)*7):0),0):0;return t+n+(s.cosmico?.035*Math.exp(-Math.abs(e-s.dur*.6)*4):0)+(s.tipo==="caos"?.0015:0)}function jb(s,e){return s.tipo==="crit"?["#ffae2b","#fff4cf","#a98a56"]:s.tipo==="falha"?["#4d000c","#ff1d1d","#3a3034"]:s.tipo==="ordem"?["#ffd685","#ffffff","#8c94a6"]:Math.sin(Math.floor(e*1.7)*12.9898)>0?["#22e0a4","#fff0b0","#5d7a78"]:["#e01550","#d08cff","#6b4a64"]}const WE=`
vec3 mundo(float k, float x) {
  vec3 a = k < 0.5 ? MAL2 : k < 1.5 ? BEM : k < 2.5 ? MAL : k < 3.5 ? BEM2 : k < 4.5 ? vec3(0.25, 0.45, 1.0) : mix(MAL, BEM, 0.5 + 0.5 * sin(x * 3.0 + uT));
  vec3 b = k < 0.5 ? MAL : k < 1.5 ? BEM2 : k < 2.5 ? MAL2 : k < 3.5 ? MAL : k < 4.5 ? vec3(1.0) : mix(BEM2, MAL2, 0.5 + 0.5 * sin(x * 2.0 - uT));
  return mix(a, b, 0.5 + 0.5 * sin(x));
}
vec4 cena(vec2 p0) {
  float e = env(), n = 0.0, soco = 0.0, ult = 0.0, fim = 6.7, df = uT - fim;
  for (int i = 0; i < 5; i++) {
    float ti = 0.9 + 1.1 * float(i), d = uT - ti;
    if (d > 0.0) { n += 1.0; soco = exp(-d * 4.0); ult = ti; }
  }
  float implode = smoothstep(fim - 1.0, fim - 0.04, uT) * (1.0 - step(fim, uT)), boom = step(0.0, df) * exp(-max(df, 0.0) * 1.8);
  vec2 p = rasgo(p0, 0.5 + 1.8 * soco + 2.0 * boom), q = p - uCentro;
  q *= 1.0 + 1.6 * implode * implode - 0.18 * soco;
  float r = length(q), ang = atan(q.y, q.x);
  // caleidosc\xF3pio de sete lados: o espa\xE7o dobrado sobre si mesmo
  float k = TAU / 7.0, a = ang + uT * 0.16 + n * 0.8 + 0.8 * implode / (r + 0.25) + 0.25 * sin(r * 5.0 - uT * 1.4);
  a = abs(mod(a, k) - k * 0.5);
  vec2 z = r * vec2(cos(a), sin(a)) * (1.5 + 0.22 * n);
  float esc = 1.0, linha = 1e3, trama = 1e3;
  for (int i = 0; i < 7; i++) {
    z = abs(z) - vec2(0.40 + 0.05 * sin(uT * 0.31 + n), 0.19 + 0.05 * cos(uT * 0.23 + n * 2.0));
    z *= rot(0.52 + 0.21 * n + uT * 0.035) * 1.33;
    esc *= 1.33;
    linha = min(linha, abs(z.x) / esc);
    trama = min(trama, dot(z, z));
  }
  float lg = log(trama + 0.002), fio1 = exp(-linha * 150.0), brilho = exp(-linha * 26.0);
  vec3 luz = mundo(n, lg + r * 4.0 - uT * 0.8) * (brilho * 0.55 + 0.10 * pow(0.5 + 0.5 * sin(lg * 3.0 + uT), 2.0)) + vec3(1.0, 0.97, 1.0) * fio1 * 0.65;
  luz += mundo(n, 1.0 + r * 3.0) * raios(q, 8.0, 0.35) * exp(-r * 1.2) * (0.7 + 2.0 * soco);
  luz *= 0.28 + 0.72 * smoothstep(0.16, 0.62, r);
  // sete olhos-estrela em volta, um para cada possibilidade
  luz += mundo(n, 2.0) * fio(hepta(q * rot(uT * 0.3 + n), 0.60), 0.002) * 0.7 + mundo(n, 4.0) * fio(hepta(q * rot(-uT * 0.45 - n), 0.44), 0.0016) * 0.6;
  luz += vec3(1.0) * (fio(r - 0.62, 0.0014) + fio(r - 0.42, 0.001)) * 0.3;
  // frente de choque de cada pancada
  float on = (uT - ult) * 1.9;
  if (n > 0.5) luz += mix(vec3(1.0), mundo(n, 0.0), 0.4) * (exp(-abs(r - on) * 18.0) * 1.4 + exp(-abs(abs(q.x * 0.7 + q.y * 0.7) ) * 30.0) * 0.5) * soco;
  luz += vec3(1.0, 0.97, 1.0) * soco * soco * 0.30 * uClarao;
  // o colapso e o que sobra: tudo ao mesmo tempo
  luz *= 1.0 - 0.94 * implode * implode;
  luz += vec3(1.0) * implode * (exp(-r * mix(5.0, 90.0, implode)) * 1.6 + exp(-abs(q.y) * mix(20.0, 260.0, implode)) * exp(-abs(q.x) * 1.4) * 0.9);
  if (df > 0.0) {
    for (int i = 0; i < 4; i++) {
      float fi = float(i), w = (df - fi * 0.16) * (2.0 - 0.3 * fi);
      if (w > 0.0) luz += mundo(fi, 0.3) * exp(-abs(r - w) * 14.0) * exp(-df * 1.2) * 1.6;
    }
    luz += vec3(1.0, 0.98, 1.0) * exp(-df * 3.0) * 1.2 * uClarao + raios(q, 13.0, 0.5) * mundo(5.0, ang * 3.5) * exp(-r * 0.8) * exp(-df * 0.5) * 2.0;
    float lado = step(0.0, sin(ang * 3.5 + uT * 0.9 + destino() * 2.0));
    luz += mix(MAL, BEM, lado) * (0.10 + 0.22 * brilho) * smoothstep(0.0, 1.0, df);
  }
  luz += vec3(1.0) * poeira(q * rot(uT * 0.5), 17.0, 0.6, 0.80) * 0.9;
  // cada 7 s\xF3 existe depois da sua pancada
  float esc2 = 1.45 + 0.35 * soco + 0.25 * boom, idx = floor(((p.x - uCentro.x) / (0.365 * esc2) + 0.5) * 5.0);
  float ve = step(clamp(idx, 0.0, 4.0) + 0.5, n);
  float sep = 0.004 + 0.020 * soco + 0.03 * boom;
  luz *= 1.0 - 0.72 * smoothstep(0.34, 0.12, length(q * vec2(0.75, 1.5)));
  vec3 tx = texto(p, esc2), ta = texto(p + vec2(sep, 0.0), esc2), tc = texto(p - vec2(sep, 0.0), esc2);
  float corte = smoothstep(-0.02, 0.02, q.x + q.y * 0.4 + (fbm(q * 16.0 + uT) - 0.5) * 0.2 + destino() * 0.1);
  luz += mundo(n, idx) * tx.g * 0.6 * ve;
  luz = mix(luz, mix(vec3(1.0, 0.45, 0.62), vec3(0.75, 1.0, 0.92), corte), tx.r * ve);
  luz += vec3(ta.r, 0.0, tc.r) * (1.0 - tx.r) * 0.85 * ve;
  float tv = tituloVis(p) * step(0.0, df);
  luz *= 1.0 - 0.75 * tituloSombra(p) * step(0.0, df);
  luz = mix(luz, vec3(1.0), tx.b * tv) + vec3(ta.b, 0.0, tc.b) * (1.0 - tx.b) * tv * 0.8;
  return vec4(luz * e, e * smoothstep(0.0, 0.35, uT));
}`,qE=`
float quadro(vec2 p, float R) { vec2 d = abs(p) - R; return max(d.x, d.y); }
vec4 cena(vec2 p) {
  vec2 q = p - uCentro;
  float r = length(q), e = env(), ang = atan(q.y, q.x), alinha = uDur * 0.60, da = uT - alinha;
  float silencio = smoothstep(alinha - 1.3, alinha - 0.25, uT) * (1.0 - step(alinha, uT)), gloria = step(0.0, da) * exp(-max(da, 0.0) * 0.55), soco = step(0.0, da) * exp(-max(da, 0.0) * 2.4);
  float alcance = smoothstep(0.1, 3.2, uT) * 1.7, vis = smoothstep(alcance, alcance - 0.2, r);
  vec3 luz = NOITE * 0.9 + MARFIM * estrelas(abs(q), 11.0) * 0.6;
  // mandala infinita: cada coroa \xE9 a anterior, maior
  float lr = log(r + 1e-3) / 0.40 - uT * 0.16, coroa = floor(lr), f = fract(lr);
  float par = mod(coroa, 2.0), lados = 12.0 + 12.0 * par, sent = par < 0.5 ? 1.0 : -1.0;
  float pa = (fract(ang / TAU * lados + sent * uT * 0.02 * lados / 12.0 + 0.5 * par) - 0.5) * 2.0;
  float petala = f - (0.28 + 0.62 * sqrt(max(1.0 - pa * pa, 0.0))), larg = 0.012 + 0.010 * exp(-r);
  float miolo = length(vec2(pa * 0.9, (f - 0.42) * 2.0));
  vec3 tinta = mix(OURO, CEU, par);
  luz += tinta * smoothstep(0.02, -0.25, petala) * (0.05 + 0.16 * smoothstep(0.9, 0.0, miolo)) * vis;
  luz += mix(tinta, MARFIM, 0.35) * fio(petala, larg) * 0.50 * vis;
  luz += MARFIM * fio(f - 0.02, 0.012) * 0.32 * vis + OURO * fio(miolo - 0.34, 0.03) * 0.30 * vis;
  luz += MARFIM * exp(-miolo * miolo * 90.0) * 0.8 * vis;
  luz += OURO * smoothstep(0.10, 0.0, abs(pa)) * step(0.30, f) * 0.10 * vis;
  luz *= 0.35 + 0.65 * smoothstep(0.14, 0.50, r);
  // flor da vida ao fundo
  luz += CEU * fio(flor(q * rot(uT * 0.03), 0.21), 0.0012) * exp(-r * 1.1) * 0.28 * vis;
  // nave de luz: raios espelhados que respiram
  float nave = pow(0.5 + 0.5 * cos(24.0 * ang), 8.0) * 0.5 + pow(0.5 + 0.5 * cos(12.0 * ang + TAU * 0.5), 14.0);
  luz += mix(OURO, MARFIM, 0.4) * nave * exp(-r * 1.5) * (0.22 + 1.3 * gloria) * smoothstep(0.5, 2.5, uT);
  // cinco quadrados, um por algarismo, que se encaixam no alinhamento
  for (int i = 0; i < 5; i++) {
    float fi = float(i), surge = smoothstep(0.7 + 0.55 * fi, 1.5 + 0.55 * fi, uT), par2 = mod(fi, 2.0);
    float falta = max(alinha - uT, 0.0), giro = (par2 < 0.5 ? 1.0 : -1.0) * (0.12 + 0.05 * fi) * falta * falta * 0.35 + TAU / 8.0 * par2;
    float Rq = 0.30 + 0.072 * fi, d = quadro(q * rot(giro), Rq * 0.80);
    luz += mix(OURO, CEU, par2) * fio(d, 0.0020) * surge * (0.75 + 1.3 * gloria);
    luz += MARFIM * exp(-abs(d) * 40.0) * surge * (0.08 + 0.5 * soco);
  }
  // quatro selos menores em torno do maior: 6 9 [6] 9 6
  for (int i = 0; i < 4; i++) {
    float th = TAU * 0.125 + float(i) * TAU * 0.25 + 0.10 * max(alinha - uT, 0.0) * max(alinha - uT, 0.0);
    vec2 c = 0.50 * vec2(cos(th), sin(th));
    float Rs = 0.062 * smoothstep(1.6, 3.0, uT);
    vec2 ty = taiji((q - c) * rot(-uT * 0.4 + th * 2.0), Rs);
    luz = mix(luz, mix(vec3(0.018, 0.030, 0.070), MARFIM, ty.x), ty.y);
    float dc = length(q - c);
    luz += OURO * (fio(dc - Rs - 0.012, 0.0014) * 0.8 + exp(-max(dc - Rs, 0.0) * 34.0) * 0.4 * step(Rs, dc)) * smoothstep(1.6, 3.0, uT);
    luz += MARFIM * smoothstep(0.0022, 0.0, seg(q, c, vec2(0.0))) * (0.15 + gloria) * smoothstep(2.4, 3.6, uT);
  }
  // o sil\xEAncio, e ent\xE3o a cruz de luz
  luz *= 1.0 - 0.86 * silencio;
  luz += MARFIM * (exp(-abs(q.x) * mix(160.0, 22.0, gloria)) + exp(-abs(q.y) * mix(160.0, 30.0, gloria))) * gloria * 1.0 * smoothstep(0.20, 0.32, r);
  luz += OURO * exp(-r * 1.4) * gloria * 0.45 + MARFIM * soco * 0.35 * (0.4 + uClarao);
  for (int i = 0; i < 4; i++) {
    float w = (da - 0.22 * float(i)) * 0.9;
    if (w > 0.0) luz += mix(MARFIM, OURO, float(i) / 4.0) * exp(-abs(r - w) * 26.0) * exp(-da * 1.0) * 1.2;
  }
  luz += MARFIM * poeira(q * rot(-uT * 0.05), 14.0, 0.25, 0.80) * (0.25 + gloria);
  // sol central
  float R = 0.262 * smoothstep(0.1, 1.5, uT), x = max(r - R, 0.0);
  luz += (OURO * exp(-x * 14.0) * 0.8 + MARFIM * exp(-x * 70.0)) * step(R, r) * (0.9 + gloria);
  luz += OURO * pontos(r, ang + TAU + uT * 0.12, R + 0.034, 69.0, 0.0034) * smoothstep(1.0, 2.0, uT) + CEU * pontos(r, ang + TAU - uT * 0.12, R + 0.050, 96.0, 0.0026) * smoothstep(1.3, 2.3, uT);
  luz = disco69(luz, p, q, R, uT * 0.16, smoothstep(0.1, 0.7, uT));
  luz += MARFIM * gloria * exp(-r * 3.0) * 0.18;
  luz *= 1.0 - 0.75 * tituloSombra(p);
  luz = mix(luz, MARFIM, texto(p, 1.0).b * tituloVis(p));
  return vec4(luz * e, e * smoothstep(0.0, 0.5, uT));
}`,Gp=`
float runa(vec2 uv, float semente) {
  if (uv.y < 0.0 || uv.y > 1.0) return 0.0;
  vec2 c = floor(uv), f = (fract(uv) - 0.5) * vec2(1.0, 1.15);
  f.y += 0.0;
  float h = h11(c.x * 1.7 + semente * 13.0 + c.y * 5.0), d = 9.0;
  vec2 g = vec2(abs(f.x), f.y);
  if (h > 0.22) d = min(d, seg(f, vec2(0.0, -0.36), vec2(0.0, 0.36)));
  if (fract(h * 7.0) > 0.45) d = min(d, abs(length(f - vec2(0.0, (fract(h * 23.0) - 0.5) * 0.5)) - 0.15));
  if (fract(h * 11.0) > 0.40) d = min(d, seg(g, vec2(0.0, 0.34), vec2(0.27, 0.10)));
  if (fract(h * 17.0) > 0.50) d = min(d, seg(g, vec2(0.0, -0.10), vec2(0.27, -0.32)));
  if (fract(h * 29.0) > 0.60) d = min(d, seg(f, vec2(-0.26, 0.02), vec2(0.26, 0.02)));
  if (fract(h * 41.0) > 0.55) d = min(d, length(g - vec2(0.26, 0.28)) - 0.02);
  return smoothstep(0.075, 0.03, d);
}
`,Vp=`
attribute vec2 pos;
uniform vec2 uTela;
varying vec2 vP;
void main() { vP = pos * 0.5 * uTela / min(uTela.x, uTela.y); gl_Position = vec4(pos, 0.0, 1.0); }`,Qb=`
uniform vec2 uTela;
varying vec2 vP;
void main() { vP = position.xy / min(uTela.x, uTela.y); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,Hp=`
precision highp float;
varying vec2 vP;
uniform vec2 uTela;
uniform sampler2D uTexto, uRuido;
uniform float uT, uRev, uFim, uNivel, uAneis, uSorte, uIdle, uForca, uSem, uClarao;
uniform float uTrava[6], uQuebra;
uniform vec3 uA, uB;
#define TAU 6.2831853

float h11(float n) { return fract(sin(n * 91.17) * 4373.13); }
float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
vec2 h22(vec2 p) { return vec2(h21(p), h21(p + 17.7)); }
float ruido(vec2 p) {
  vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return textureLod(uRuido, (i + f + 0.5) / 256.0, 0.0).r;
}
float fbm(vec2 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 4; i++) { s += a * ruido(p); p = mat2(1.6, 1.2, -1.2, 1.6) * p + 3.7; a *= 0.5; } return s; }
mat2 rot(float a) { float c = cos(a), s = sin(a); return mat2(c, -s, s, c); }
float fio(float d, float w) { return smoothstep(w, w * 0.2, abs(d)) + 0.35 * exp(-abs(d) / (w * 4.0)); }

${Fp}
mat3 M[6];
float R[6];
float preso[6];
float spin[6];
float Q[6];
vec3 gDesl;

mat3 rx(float a) { float c = cos(a), s = sin(a); return mat3(1, 0, 0, 0, c, s, 0, -s, c); }
mat3 ry(float a) { float c = cos(a), s = sin(a); return mat3(c, 0, -s, 0, 1, 0, s, 0, c); }

// quanto falta girar: chega a zero na trava, com um coice de metal
float giroAte(float tk, float vel) {
  float x = tk - uT;
  if (uIdle > 0.5) return uT * vel * 0.25;
  return x > 0.0 ? vel * (0.9 * x + 0.28 * x * x) : exp(x * 8.0) * sin(-x * 44.0) * 0.07;
}
void preparar() {
  for (int i = 0; i < 6; i++) {
    float fi = float(i), s = mod(fi, 2.0) < 0.5 ? 1.0 : -1.0, tk = uTrava[i];
    R[i] = 0.232 + 0.043 * fi;
    // a roda de fora quebra primeiro
    Q[i] = uQuebra < 0.0 ? 0.0 : clamp((uQuebra - 0.8 - (uAneis - 1.0 - fi) * 1.9 / uAneis) / 0.85, 0.0, 1.0);
    preso[i] = uIdle > 0.5 ? 0.0 : smoothstep(tk - 0.02, tk + 0.05, uT);
    float g = giroAte(tk, s * (1.15 - 0.09 * fi));
    M[i] = rx(g * (0.8 + 0.35 * h11(fi + 2.0)) + (uIdle > 0.5 ? fi * 0.9 : 0.0)) * ry(g * (0.6 + 0.5 * h11(fi + 7.0)) + (uIdle > 0.5 ? fi * 1.7 : 0.0));
    spin[i] = g * 1.3 + s * uT * 0.05;
  }
}
float anel(vec3 q, float r) {
  vec2 d = abs(vec2(length(q.xy) - r, q.z)) - vec2(0.0165, 0.013);
  return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0) - 0.0015;
}
float mapa(vec3 p, out float qual) {
  float d = length(p) - 0.178;
  qual = -1.0;
  gDesl = vec3(0.0);
  for (int i = 0; i < 6; i++) {
    if (float(i) >= uAneis) break;
    if (Q[i] >= 1.0) continue;
    vec3 l = M[i] * p, ds = vec3(0.0);
    float a;
    if (Q[i] > 0.0) {
      // cada peda\xE7o voa para fora da roda e encolhe
      float fi = float(i), nc = 7.0 + fi, id = floor(atan(l.y, l.x) / TAU * nc), ac = (id + 0.5) / nc * TAU, e = 1.0 - (1.0 - Q[i]) * (1.0 - Q[i]);
      vec2 u = vec2(cos(ac), sin(ac));
      ds = vec3(u * e * (0.10 + 0.38 * h21(vec2(id, fi))), (h21(vec2(id + 9.0, fi)) - 0.5) * e * 0.8);
      l -= ds;
      a = max(anel(l, R[i]), abs(dot(l.xy, vec2(-u.y, u.x))) - R[i] * sin(3.14159 / nc) * (0.97 - 0.30 * e)) + max(e - 0.55, 0.0) * 0.06;
    } else a = anel(l, R[i]);
    if (a < d) { d = a; qual = float(i); gDesl = ds; }
  }
  return d;
}

// runas: sigilos de tra\xE7o fino, sorteados por casa
float seg(vec2 p, vec2 a, vec2 b) { vec2 pa = p - a, ba = b - a; return length(pa - ba * clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0)); }
${Gp}// olho pequeno: x ao longo do anel, y atrav\xE9s. Devolve (branco, iris, pupila, contorno)
vec4 olho(vec2 e, float abre, vec2 mira) {
  float lado = 1.0 - e.x * e.x;
  float borda = lado * 0.62 * abre;
  float dentro = smoothstep(0.0, 0.09, borda - abs(e.y)) * step(abs(e.x), 1.0);
  vec2 q = e - mira * 0.30;
  float r = length(q);
  return vec4(dentro, dentro * smoothstep(0.50, 0.44, r), dentro * smoothstep(0.24, 0.18, length(q * vec2(1.5, 0.85))), smoothstep(0.12, 0.02, abs(abs(e.y) - borda)) * step(abs(e.x), 1.0));
}

float estrelas(vec2 p, float esc) {
  float s = 0.0;
  for (int k = 0; k < 3; k++) {
    vec2 q = p * esc * (1.0 + float(k) * 0.8) + float(k) * 11.0, c = floor(q), f = fract(q) - 0.5 - (h22(c) - 0.5) * 0.7;
    float h = h21(c + 3.0);
    if (h > 0.70) s += exp(-dot(f, f) * 190.0) * (h - 0.70) * 6.0 * (0.6 + 0.4 * sin(uT * 2.2 + h * 90.0));
  }
  return s;
}
vec3 abismo(vec2 p) {
  float r = length(p) + 1e-4, a = atan(p.y, p.x);
  // o espa\xE7o escorre em espiral para o centro
  vec2 q = p * rot(0.9 / (r + 0.25) + uT * 0.05);
  vec2 w = q * 1.7 + uSem;
  w += 0.8 * vec2(fbm(w + uT * 0.06), fbm(w + 5.2 - uT * 0.05));
  float n = fbm(w * 1.3), m = fbm(w * 2.1 + 9.0);
  vec3 c = vec3(0.006, 0.005, 0.014) + uA * 0.55 * pow(n, 3.2) + uB * 0.35 * pow(m, 4.2) + vec3(0.35, 0.10, 0.55) * 0.35 * pow(1.0 - n, 5.0);
  c += vec3(0.9, 0.95, 1.0) * (0.8 * estrelas(p * rot(uT * 0.03), 9.0) + 0.5 * estrelas(q * rot(0.4), 17.0));
  // corredor infinito de portais
  for (int i = 0; i < 4; i++) {
    float z = fract(float(i) / 4.0 + uT * 0.045), rr = 0.30 + 1.5 * z * z;
    c += mix(uA, uB, z) * fio(r - rr, 0.0016 + 0.002 * z) * 0.30 * z * (0.5 + 0.5 * step(0.5, fract(a / TAU * (24.0 + 12.0 * float(i)) + uT * 0.03)));
  }
  return c;
}
// seis asas de luz, feitas de penas, que se abrem
vec3 asas(vec2 p, float abre) {
  vec3 c = vec3(0.0);
  vec2 q = vec2(abs(p.x), p.y);
  float r = length(q), desperta = uIdle > 0.5 ? 0.0 : smoothstep(uRev - 0.1, uRev + 0.25, uT);
  for (int i = 0; i < 3; i++) {
    float fi = float(i);
    if (fi > 0.5 + 2.2 * uNivel) break;
    float eixo = (i == 0 ? 0.36 : i == 1 ? 1.02 : -0.42) + 0.05 * sin(uT * 1.1 + fi * 1.7);
    float th = atan(q.y, q.x) - eixo * mix(0.25, 1.0, abre) + (r - 0.3) * (0.55 - 0.35 * fi) * 0.8;
    float larg = 0.50 * abre, x = th / max(larg, 0.02);
    if (abs(x) > 1.0) continue;
    float np = 10.0, id = floor((x * 0.5 + 0.5) * np), f = fract((x * 0.5 + 0.5) * np) - 0.5;
    float comp = (0.62 + 0.48 * abre) * (1.0 - 0.46 * abs(x)) * (0.90 + 0.10 * h11(id + fi * 20.0)) * (1.0 - 0.12 * fi);
    float u = (r - 0.20) / comp;
    if (u < 0.0 || u > 1.0) continue;
    float larga = 0.56 * pow(1.0 - u, 0.42) * smoothstep(-0.05, 0.14, u);
    float pena = smoothstep(larga, larga - 0.16, abs(f));
    float raque = smoothstep(0.07, 0.0, abs(f)) * 0.9, barbas = 0.65 + 0.35 * sin((u * 42.0 - abs(f) * 26.0) + id);
    float luz = pena * (0.24 + 0.42 * (1.0 - u)) * barbas * (0.55 + 0.45 * smoothstep(0.55, 0.0, abs(f))) + raque * (1.0 - u) * 0.45 + smoothstep(0.10, 0.0, abs(abs(f) - larga)) * 0.34 * (1.0 - u * 0.5);
    float varre = exp(-pow((u - fract(uT * 0.35 + fi * 0.3)) * 5.0, 2.0)) * 0.35 * pena;
    c += mix(uB, uA, u * 0.9 + 0.1 * fi) * (luz + varre) * abre;
    // um olho na ponta de algumas penas
    if (mod(id + fi, 3.0) < 0.5) {
      vec4 o = olho(vec2((u - 0.72) * comp * 30.0, f * 2.4), desperta, vec2(0.0));
      c = mix(c, vec3(0.95, 0.93, 0.88) * 0.8, o.x * abre); c = mix(c, uA * 0.9, o.y * abre); c = mix(c, vec3(0.0), o.z * abre);
    }
  }
  return c;
}

// peda\xE7os da realidade que ficaram soltos, orbitando; o veredito os arremessa
vec4 soltos(vec2 p, float tv) {
  vec4 o = vec4(0.0);
  for (int i = 0; i < 16; i++) {
    float fi = float(i), h = h11(fi + uSem), g = h11(fi * 3.1 + 5.0);
    float raio = 0.50 + 0.50 * h + (tv > 0.0 ? 1.6 * (1.0 - exp(-tv * (0.8 + g))) : 0.0), th = h * TAU * 3.0 + uT * (0.10 + 0.16 * g) * (g > 0.5 ? 1.0 : -1.0);
    vec2 c = raio * vec2(cos(th), sin(th) * (0.55 + 0.35 * h));
    vec2 q = (p - c) * rot(uT * (0.2 + 0.3 * g) + fi);
    q.x /= 0.82 + 0.18 * cos(uT * (0.5 + 0.4 * h) + fi);
    float tam = 0.016 + 0.034 * g * g;
    vec2 k = q / tam;
    float d = max(max(dot(k, vec2(0.87, 0.5)), dot(k, vec2(-0.80, 0.6))), max(dot(k, vec2(0.10, -1.0)), dot(k, vec2(-0.9, -0.4)))) - 1.0;
    float dentro = smoothstep(0.06, -0.06, d), aro = exp(-abs(d) * 14.0);
    vec3 c3 = mix(uA, vec3(1.0), 0.35) * (0.10 + 0.55 * pow(0.5 + 0.5 * sin(dot(k, vec2(2.0, 3.0)) + uT * 0.9 + fi), 4.0));
    o.rgb += (c3 * dentro + mix(uB, vec3(1.0), 0.5) * aro * 0.7) * (1.0 - smoothstep(1.6, 2.6, raio));
  }
  return o;
}
vec3 texto(vec2 p, float esc) {
  vec2 n = p / (2.0 * vec2(0.34, 0.17) * esc) + 0.5;
  if (any(lessThan(n, vec2(0.0))) || any(greaterThan(n, vec2(1.0)))) return vec3(0.0);
  return texture2D(uTexto, n).rgb;
}

vec3 entidade(vec2 p0, float presenca) {
  float tv = uT - uRev, implode = uIdle > 0.5 ? 0.0 : smoothstep(uRev - 0.75, uRev - 0.06, uT) * (1.0 - step(uRev, uT));
  float revel = uIdle > 0.5 ? 0.0 : step(0.0, tv), soco = revel * exp(-max(tv, 0.0) * 4.2);
  vec2 p = p0 * (1.03 + 0.42 * implode - 0.10 * soco);
  p += 0.006 * implode * (h22(vec2(floor(uT * 60.0), 3.0)) - 0.5) * 2.0;
  float r = length(p), a = atan(p.y, p.x);
  float abreAsas = uIdle > 0.5 ? 0.35 + 0.35 * uForca : smoothstep(1.2, 2.6, uT) * (0.62 + 0.38 * smoothstep(uRev - 0.05, uRev + 0.5, uT));

  vec3 luz = abismo(p0 * (1.0 + 0.25 * implode));
  // aur\xE9ola e raios por tr\xE1s
  vec2 dir = vec2(cos(a), sin(a));
  float ray = ruido(dir * 6.0 + uSem + uT * 0.12) * 0.6 + ruido(dir * 15.0 - uT * 0.2) * 0.5;
  luz += mix(uB, uA, smoothstep(0.1, 0.8, r)) * pow(ray, 2.6) * exp(-r * 2.2) * (0.35 + 1.6 * revel * exp(-max(tv, 0.0) * 0.35) + 0.5 * uForca) * presenca;
  // d5 e d10 (dois an\xE9is): sem asas, e o choque \xE9 curto
  float grande = step(2.5, uAneis);
  if (grande > 0.5) luz += asas(p, abreAsas) * presenca * (0.85 + 0.9 * soco);
  float Rh = 0.252 + 0.043 * uAneis;
  luz += mix(uA, uB, 0.5) * (fio(r - Rh, 0.0018) + 0.7 * fio(r - Rh - 0.014, 0.0010)) * presenca;
  luz += uB * runa(vec2(a / TAU * 96.0 + uT * 0.8, (r - Rh - 0.018) / 0.026), 3.0) * step(0.0, r - Rh - 0.018) * step(r - Rh - 0.018, 0.026) * 0.55 * presenca;

  // ---- o corpo
  vec3 ro = vec3(0.0, 0.0, 3.0), rd = normalize(vec3(p, -3.0));
  float t = 2.42, q = -1.0, d = 1.0, brilho = 0.0;
  bool bateu = false;
  if (r < (uQuebra > 0.0 ? 1.0 : 0.66)) {
    for (int i = 0; i < 52; i++) {
      d = mapa(ro + rd * t, q);
      brilho += exp(-max(d, 0.0) * 46.0) * 0.016;
      if (d < 0.0009) { bateu = true; break; }
      t += max(d * 0.86, 0.0011);
      if (t > 3.62) break;
    }
  }
  luz += mix(uA, uB, 0.45) * brilho * (0.8 + 1.2 * soco) * presenca;

  if (bateu) {
    vec3 pos = ro + rd * t, n, cor = vec3(0.0);
    if (q < -0.5) {
      // ---- o olho
      n = normalize(pos);
      float abre = uIdle > 0.5 ? 0.05 + 0.05 * sin(uT * 0.9) + 0.22 * uForca : revel * (1.0 - exp(-max(tv, 0.0) * 9.0));
      vec2 fuga = uIdle > 0.5 ? 0.12 * vec2(sin(uT * 0.7), cos(uT * 0.9)) : vec2(0.0);
      vec2 e = n.xy - fuga;
      float re = length(e), ae = atan(e.y, e.x), palp = abre * 1.02 * (1.0 - 0.55 * e.x * e.x);
      float dentro = smoothstep(0.0, 0.03, palp - abs(e.y));
      // p\xE1lpebra de pedra negra com veios acesos e a fenda em brasa
      float veio = pow(1.0 - abs(2.0 * fbm(e * 5.0 + uSem) - 1.0), 9.0);
      float ro2 = fbm(e * 9.0 + 3.0);
      vec3 pedra = vec3(0.020, 0.017, 0.024) * (0.6 + 1.2 * ro2) + mix(uA, uB, ro2) * veio * (0.55 + 0.9 * implode + 0.35 * sin(uT * 2.0 + re * 8.0));
      pedra += vec3(0.5) * pow(max(dot(reflect(rd, n), normalize(vec3(-0.4, 0.7, 0.8))), 0.0), 22.0) * 0.5;
      float fenda = exp(-abs(abs(e.y) - palp) * 26.0);
      pedra += mix(uB, vec3(1.0), 0.35) * fenda * (0.35 + 1.4 * implode + 1.2 * uForca + soco);
      // \xEDris: uma gal\xE1xia
      float tor = ae + 2.2 / (re + 0.22) + uT * 0.35;
      float fil = fbm(vec2(cos(tor), sin(tor)) * 3.0 + re * 2.5) * 0.7 + 0.5 * pow(0.5 + 0.5 * sin(ae * 60.0 + fbm(e * 8.0) * 9.0), 3.0) * smoothstep(0.95, 0.5, re);
      float pupila = 0.66 + 0.10 * exp(-max(tv, 0.0) * 2.0) * sin(tv * 16.0);
      vec3 iris = mix(uB, uA, smoothstep(0.5, 0.95, re)) * (0.25 + 1.25 * fil) * smoothstep(1.0, 0.80, re);
      iris += vec3(1.0, 0.95, 0.85) * exp(-abs(re - pupila) * 30.0) * 0.9;
      iris *= smoothstep(pupila - 0.05, pupila + 0.03, re);
      iris += uB * smoothstep(pupila, 0.0, re) * 0.04;
      cor = mix(pedra, iris * (1.0 + 1.5 * soco), dentro);
    } else {
      // ---- um anel
      int k = int(q + 0.5);
      float rr = 0.0, pr = 0.0, sp = 0.0, dt = 0.0;
      mat3 m = M[0];
      for (int i = 0; i < 6; i++) if (i == k) { m = M[i]; rr = R[i]; pr = preso[i]; sp = spin[i]; dt = uT - uTrava[i]; }
      vec3 lp = m * pos - gDesl;
      float rad = length(lp.xy), ang = atan(lp.y, lp.x) + sp;
      bool face = abs(lp.z) > 0.0125;
      vec3 ln = face ? vec3(0.0, 0.0, sign(lp.z)) : vec3(normalize(lp.xy) * sign(rad - rr), 0.0);
      n = ln * m;                                              // m \xE9 ortogonal: multiplicar pela esquerda desfaz o giro
      float v = face ? (rad - rr) / 0.0165 : lp.z / 0.013;     // -1..1 atrav\xE9s do anel
      float s = ang * rr / 0.027;
      vec3 metal = mix(mix(vec3(0.15, 0.11, 0.07), uB * 0.20, 0.5), vec3(0.17, 0.15, 0.19), h11(q + 4.0)) * (0.7 + 0.6 * fbm(vec2(s * 3.0, v * 2.0)));
      float diff = max(dot(n, -normalize(pos)), 0.0), borda = pow(1.0 - max(dot(n, -rd), 0.0), 3.0);
      float cava = smoothstep(0.86, 0.70, abs(v));
      cor = metal * (0.50 - 0.26 * cava + 1.6 * diff * (0.5 + soco)) + uB * borda * 0.25 + vec3(1.0, 0.9, 0.75) * pow(max(dot(reflect(rd, n), normalize(vec3(-0.5, 0.8, 0.6))), 0.0), 18.0) * 0.8;
      cor += mix(uB, vec3(1.0), 0.4) * smoothstep(0.80, 0.98, abs(v)) * (0.22 + 0.5 * pr);
      float run = runa(vec2(s, v * 0.5 + 0.5), q + 1.0);
      float casa = h11(floor(s) + q * 31.0), pisca = 0.5 + 0.5 * sin(uT * 3.0 + casa * 40.0);
      float foco = uIdle > 0.5 ? 0.35 + 0.8 * uForca : mix(0.35, 1.0, pr);
      float clar = uIdle > 0.5 ? 0.0 : step(0.0, dt) * exp(-max(dt, 0.0) * 3.2);
      cor += mix(uA, uB, casa) * run * (0.5 + 0.8 * pisca) * foco * (1.0 + 2.5 * clar);
      // olhos espalhados pelo anel, que se abrem todos juntos
      float no = 5.0 + 2.0 * q, sa = ang / TAU * no, ia = floor(sa), fa = (fract(sa) - 0.5) * TAU / no * rr / 0.024;
      float hol = h11(ia + q * 9.0), vivo = uIdle > 0.5 ? smoothstep(0.60, 0.95, sin(uT * 0.6 + hol * 30.0)) * 0.7 : max(smoothstep(0.75, 0.98, sin(uT * 1.2 + hol * 40.0)) * 0.5 * pr, revel * (1.0 - exp(-max(tv, 0.0) * 7.0 * (0.5 + hol))));
      vec4 o = olho(vec2(fa, v * 0.80), vivo, vec2(0.0, -0.6));
      cor = mix(cor, vec3(0.93, 0.90, 0.84) * (0.55 + 0.6 * soco), o.x);
      cor = mix(cor, uA * 1.1, o.y); cor = mix(cor, vec3(0.01), o.z);
      cor += uB * o.w * vivo * 0.5;
      cor += mix(uA, vec3(1.0), 0.5) * clar * 0.6;
      if (uQuebra > 0.0) {
        // antes de quebrar, a roda racha em brasa
        float calor = smoothstep(-0.75, 0.0, uQuebra - 0.8 - (uAneis - 1.0 - q) * 1.9 / uAneis), nc = 7.0 + q, emenda = abs(fract(atan(lp.y, lp.x) / TAU * nc + 0.5) - 0.5) / nc * TAU * rr;
        cor = mix(cor, vec3(dot(cor, vec3(0.4))) * vec3(1.0, 0.10, 0.08), calor * 0.8);
        cor += vec3(1.0, 0.20, 0.08) * (exp(-(emenda + 0.008 * fbm(vec2(s * 2.0, v * 3.0))) * 170.0) * 2.2 + borda * 0.5) * calor;
      }
    }
    luz = mix(luz, cor, presenca);
  }

  if (uIdle < 0.5) luz += soltos(p, tv).rgb * presenca;
  // raios que ligam o olho aos an\xE9is: enquanto se segura a invoca\xE7\xE3o e na implos\xE3o
  float eletr = max(implode, uIdle * uForca);
  if (eletr > 0.02) for (int i = 0; i < 5; i++) {
    float fi = float(i), q3 = floor(uT * 17.0) + fi * 7.0, az = h11(q3) * TAU;
    float da = mod(a - az + TAU * 1.5, TAU) - TAU * 0.5 + (fbm(vec2(r * 16.0, q3)) - 0.5) * 0.9 * smoothstep(0.1, 0.4, r);
    luz += mix(uA, vec3(1.0), 0.6) * exp(-abs(da) * r * 110.0) * step(0.17, r) * smoothstep(0.75, 0.3, r) * eletr * 1.3 * step(0.35, h11(q3 + 3.0));
  }

  // ---- travas: um clar\xE3o corre pelo c\xEDrculo de cada anel
  if (uIdle < 0.5) for (int i = 0; i < 6; i++) {
    if (float(i) >= uAneis) break;
    float dt = uT - uTrava[i];
    if (dt > 0.0 && dt < 2.0) luz += mix(uA, vec3(1.0), 0.4) * (exp(-abs(r - R[i] - dt * 0.9) * 34.0) * exp(-dt * 3.4) * 0.9 + exp(-abs(r - R[i]) * 60.0) * exp(-dt * 5.0));
  }
  if (uQuebra > 0.0) for (int i = 0; i < 6; i++) {
    if (float(i) >= uAneis) break;
    float dt = uQuebra - 0.8 - (uAneis - 1.0 - float(i)) * 1.9 / uAneis;
    if (dt > 0.0 && dt < 1.5) luz += vec3(1.0, 0.35, 0.20) * (exp(-abs(r - R[i] - dt * 1.1) * 26.0) * exp(-dt * 3.0) * 1.2 + exp(-dt * 14.0) * 0.25);
  }
  luz *= 1.0 - 0.90 * implode * implode;
  luz += mix(uB, vec3(1.0), 0.6) * implode * exp(-r * mix(6.0, 60.0, implode)) * 1.2;

  // ---- o veredito
  if (revel > 0.5) {
    luz += vec3(1.0, 0.97, 0.92) * exp(-tv * 5.0) * uClarao;
    for (int i = 0; i < 3; i++) {
      float fi = float(i), on = (tv - fi * 0.13) * (1.5 - 0.25 * fi);
      if (on > 0.0) luz += mix(uB, vec3(1.0), 0.5 - 0.2 * fi) * exp(-abs(r - on) * (20.0 - 4.0 * fi)) * exp(-tv * 1.7) * (0.35 + 0.85 * grande);
    }
    // os dois extremos mudam o mundo: apoteose ou vazio
    float alto = max(uSorte, 0.0), baixo = max(-uSorte, 0.0), q2 = smoothstep(0.0, 0.8, tv);
    float feixe = exp(-abs(p.x) * 13.0) * 0.7 + exp(-abs(p.y) * 20.0) * 0.35;
    luz += vec3(1.0, 0.84, 0.45) * alto * q2 * (feixe * smoothstep(0.14, 0.30, r) + 0.20 * exp(-r * 1.6) + pow(ray, 2.0) * 0.55 * exp(-r));
    float g = dot(luz, vec3(0.30, 0.59, 0.11));
    luz = mix(luz, vec3(g * 1.1, g * 0.05, g * 0.10) + vec3(0.16, 0.0, 0.015) * pow(ray, 2.0) * exp(-r), baixo * q2 * 0.92);

    float cresce = 1.0 + 1.3 * exp(-tv * 7.0) + 0.02 * sin(tv * 2.4), sep = 0.012 * exp(-tv * 3.0);
    vec3 tx = texto(p0, cresce), ta = texto(p0 + vec2(sep, 0.0), cresce), tc = texto(p0 - vec2(sep, 0.0), cresce);
    vec3 tinta = mix(mix(vec3(1.0, 0.97, 0.90), vec3(1.0, 0.90, 0.55), alto), vec3(1.0, 0.16, 0.18), baixo);
    luz *= 1.0 - 0.80 * smoothstep(0.0, 0.5, tx.g) * (1.0 - tx.r);
    luz += mix(uB, tinta, 0.5) * tx.g * 0.7;
    luz = mix(luz, tinta * 1.22, tx.r);
    luz += vec3(ta.r, 0.0, tc.r) * (1.0 - tx.r) * 0.9;
    if (uQuebra > 0.0) {
      // os olhos engolem tudo, de fora para dentro, at\xE9 sobrar s\xF3 o n\xFAmero
      float lim = mix(1.35, 0.235, smoothstep(0.5, 3.2, uQuebra)), beira = r + (fbm(dir * 2.5 + vec2(uT * 0.5, r * 3.0)) - 0.45) * 0.20 - lim, carne = smoothstep(0.0, 0.14, beira) * presenca;
      luz = mix(luz, vec3(0.10, 0.004, 0.012) * (0.3 + 1.6 * pow(fbm(p0 * 7.0 - dir * uT * 0.5), 2.0)), carne * 0.97);
      luz += vec3(0.95, 0.05, 0.05) * exp(-abs(beira) * 24.0) * 0.9 * presenca;
      vec4 c4 = vec4(luz, 1.0);
      campo(c4, p0, vec2(0.0), 1.55, 0.75, lim + 0.09, 1.0, presenca);
      campo(c4, p0, vec2(0.0), 0.95, 0.80, lim + 0.04, 1.0, presenca);
      campo(c4, p0, vec2(0.0), 0.52, 0.90, lim + 0.02, 1.0, presenca);
      luz = c4.rgb;
    }
  } else if (uIdle < 0.5) {
    // antes do veredito, n\xFAmeros piscam presos na p\xE1lpebra
    vec3 tx = texto(p, 0.62);
    float vis = smoothstep(uTrava[0] - 0.2, uTrava[0] + 0.3, uT) * (1.0 - implode) * (0.35 + 0.65 * step(0.35, h11(floor(uT * 24.0))));
    luz += mix(uB, vec3(1.0), 0.3) * (tx.r * 0.8 + tx.g * 0.45) * vis;
  }
  return luz;
}

// ---- a realidade partida: dist\xE2ncia \xE0 borda do caco e sorteio do caco
vec3 cacos(vec2 x) {
  vec2 n = floor(x), f = fract(x), mg = vec2(0.0), mr = vec2(0.0), id = vec2(0.0);
  float md = 8.0;
  for (int j = -1; j <= 1; j++) for (int i = -1; i <= 1; i++) {
    vec2 g = vec2(float(i), float(j)), r = g + h22(n + g + uSem) - f;
    float d = dot(r, r);
    if (d < md) { md = d; mr = r; mg = g; id = n + g; }
  }
  md = 8.0;
  for (int j = -2; j <= 2; j++) for (int i = -2; i <= 2; i++) {
    vec2 g = mg + vec2(float(i), float(j)), r = g + h22(n + g + uSem) - f;
    if (dot(mr - r, mr - r) > 0.00001) md = min(md, dot(0.5 * (mr + r), normalize(r - mr)));
  }
  return vec3(md, h21(id + 4.0), length(mr));
}

void main() {
  preparar();
  vec2 p = vP;
  float r = length(p);
  // cacos menores perto do centro
  vec2 pc = p * (6.5 / (0.55 + r));
  vec3 k = cacos(pc);
  float nasce = 0.15 + r * 0.75 + k.y * 0.30;
  float abre = uIdle > 0.5 ? 1.0 : clamp((uT - nasce - 0.35) / 0.75, 0.0, 1.0);
  float cura = clamp((uT - (uFim - 1.7) - (0.85 - min(r, 0.85)) * 0.35 - k.y * 0.35) / 0.8, 0.0, 1.0);
  if (uIdle < 0.5) abre = min(abre * abre, 1.0 - smoothstep(0.0, 1.0, cura));
  float corte = abre * 0.62 - 0.012;
  float m = smoothstep(corte + 0.012, corte - 0.012, k.x);
  if (uIdle > 0.5) m = 1.0;

  float racha = uIdle > 0.5 ? 0.0 : clamp((uT - nasce) / 0.22, 0.0, 1.0) * (1.0 - cura);
  float linha = exp(-k.x * 70.0) * racha * (1.0 - smoothstep(0.75, 1.0, abre));
  float presenca = uIdle > 0.5 ? 1.0 : smoothstep(1.0, 2.2, uT) * (1.0 - smoothstep(uFim - 1.5, uFim - 0.6, uT));

  vec3 cor = vec3(0.0);
  float alfa = 0.0;
  if (m > 0.001) {
    vec3 c = entidade(p, presenca);
    cor = c * m;
    alfa = m;
  }
  // o que ainda \xE9 realidade escurece, com fio de luz na borda de cada caco
  float escuro = uIdle > 0.5 ? 0.0 : smoothstep(0.0, 0.9, uT) * (1.0 - smoothstep(uFim - 1.0, uFim, uT)) * 0.62;
  alfa = max(alfa, (1.0 - m) * escuro);
  float vidro = (1.0 - m) * racha * (exp(-abs(k.x - corte) * 55.0) * abre * 1.3 + 0.05 * h11(floor(k.y * 90.0)) * step(0.6, k.y));
  vec3 fioCor = mix(uA, vec3(1.0), 0.55);
  float acende = 0.6 + 0.9 * exp(-max(uT - nasce, 0.0) * 4.0);
  cor += fioCor * (linha * acende + vidro);
  alfa = max(alfa, min(1.0, linha * 0.9 + vidro * 0.6));

  cor += (h21(vP * 900.0 + fract(uT)) - 0.5) * 0.014 * alfa;
  // vinheta para a tela grande n\xE3o vazar luz na borda
  vec2 q = abs(vP) * min(uTela.x, uTela.y) / uTela * 2.0;
  cor *= 1.0 - 0.35 * smoothstep(0.75, 1.1, max(q.x, q.y)) * m;
  cor = max(cor, 0.0);
  cor = cor / (1.0 + 0.16 * cor);
  gl_FragColor = vec4(cor, clamp(alfa, 0.0, 1.0));
}`,XE=`
vec4 veu(vec2 p) { return cena(p); }`,YE=`
vec4 veu(vec2 p) {
  vec4 c = cena(p);
  vec2 q = p - uCentro;
  float bat = uT * 1.9, soco = exp(-fract(bat) * 5.0) * step(0.5, uT), lado0 = h11(floor(bat) + uSemente) * 2.0 - 1.0;
  float d = dot(q, vec2(cos(0.6 + 0.25 * sin(uT)), sin(0.6 + 0.25 * sin(uT)))) + (fbm(q * 7.0 + uT) - 0.5) * 0.14 + 0.16 * lado0 * smoothstep(0.0, 0.3, fract(bat));
  float lado = smoothstep(-0.006, 0.006, d);
  // do outro lado, a mesma cena com o destino trocado
  c.rgb = mix(c.rgb, c.brg * vec3(1.15, 0.95, 1.05), lado);
  c.rgb += vec3(1.0, 0.96, 1.0) * exp(-abs(d) * 90.0) * env() * (0.5 + 1.3 * soco);
  c.rgb += mix(vec3(0.95, 0.07, 0.30), vec3(0.20, 0.95, 0.72), lado) * exp(-abs(d) * 12.0) * env() * (0.25 + 0.5 * soco);
  for (int i = 0; i < 2; i++) {
    float s = i == 0 ? -1.0 : 1.0, r2 = length(q - s * vec2(0.22, 0.14));
    c.rgb += (s < 0.0 ? vec3(0.95, 0.07, 0.30) : vec3(0.20, 0.95, 0.72)) * (fio(r2 - 0.30 - 0.05 * sin(uT * 2.0 + s), 0.0018) * 0.6 + exp(-abs(r2 - fract(bat) * 1.2) * 24.0) * soco) * env();
  }
  c.a = max(c.a, min(1.0, exp(-abs(d) * 60.0)) * env());
  return c;
}`,ZE=`
vec4 cenaFinal(vec2 p) {
  vec4 c = veu(p);
  vec2 q = p - uCentro;
  float r = length(q), a = atan(q.y, q.x), e = env(), abre = smoothstep(0.2, 1.8, uT);
  vec3 luz = vec3(0.0);
  // o mundo toma a cor da Entidade
  float g = dot(c.rgb, vec3(0.30, 0.59, 0.11));
  c.rgb = mix(c.rgb, mix(EA, EB, smoothstep(0.15, 0.8, g)) * g * 1.5, 0.30 * smoothstep(0.25, 0.6, r));
  // seis asas de luz
  float lado = abs(q.x), an = atan(q.y, lado + 1e-4);
  for (int i = 0; i < 3; i++) {
    float fi = float(i), centro = 0.85 - 0.75 * fi + 0.05 * sin(uT * 1.2 + fi), lw = 0.10 + 0.22 * abre;
    float pena = 0.5 + 0.5 * cos((an - centro) * 70.0), dentro = smoothstep(lw, 0.0, abs(an - centro - 0.25 * r));
    luz += mix(EA, EB, r) * dentro * (0.10 + 0.50 * pow(pena, 4.0)) * smoothstep(0.34, 0.50, r) * exp(-max(r - 0.45, 0.0) * 2.2) * abre;
  }
  // tr\xEAs an\xE9is de runas em contra-rota\xE7\xE3o
  for (int i = 0; i < 3; i++) {
    float fi = float(i), R = (0.46 + 0.085 * fi) * (0.6 + 0.4 * abre), larg = 0.052, nc = 52.0 + 10.0 * fi;
    float s = (a / TAU + 0.5) * nc + uT * (0.9 - 0.2 * fi) * (mod(fi, 2.0) < 0.5 ? 1.0 : -1.0), casa = mod(floor(s), nc);
    vec2 f = vec2(fract(s), (r - R) / larg + 0.5);
    float banda = step(0.0, f.y) * step(f.y, 1.0) * (1.0 - 0.95 * tituloSombra(p));
    c.rgb *= 1.0 - 0.62 * banda * abre;
    luz += mix(EA, EB, h11(casa + fi)) * runa(vec2(casa + f.x, f.y), fi + 3.0) * banda * (0.45 + 0.55 * sin(uT * 2.0 + casa)) * 0.95 * abre;
    luz += EB * fio(abs(r - R) - larg * 0.5, 0.0014) * 0.55 * abre * (1.0 - tituloSombra(p));
  }
  // olhos que se abrem em volta e encaram quem rolou
  for (int i = 0; i < 7; i++) {
    float th = TAU * (float(i) / 7.0 + 0.25) - uT * 0.06, op = smoothstep(0.9 + 0.16 * float(i), 1.7 + 0.16 * float(i), uT) * (1.0 - smoothstep(0.0, 0.06, sin(uT * 0.9 + float(i) * 2.0) - 0.94));
    vec2 v = (q - 0.79 * vec2(cos(th), sin(th))) * rot(th - TAU * 0.25) / 0.085;
    float borda = 0.55 * op * (1.0 - v.x * v.x), dn = smoothstep(0.03, -0.03, abs(v.y) - borda) * step(abs(v.x), 1.0), ir = length(v - vec2(0.0, -0.05));
    c.rgb *= 1.0 - dn * 0.95;
    luz = mix(luz, EB * 0.75 + 0.15, dn);
    luz = mix(luz, EA * 0.9, dn * smoothstep(0.46, 0.40, ir));
    luz = mix(luz, vec3(0.01), dn * smoothstep(0.22, 0.16, length(v * vec2(1.6, 0.9))));
    luz += EB * exp(-abs(abs(v.y) - borda) * 14.0) * step(abs(v.x), 1.0) * 0.5 * abre;
  }
  // a chegada estilha\xE7a o ar
  float racha = abs(ruido(q * 5.0 + uSemente) - 0.5) + 0.35 * abs(ruido(q * 13.0 - uSemente) - 0.5);
  luz += mix(EA, vec3(1.0), 0.6) * exp(-racha * 60.0) * exp(-uT * 1.6) * 1.2;
  luz *= 1.0 - 0.85 * tituloSombra(p);
  c.rgb += luz * e;
  c.a = max(c.a, e * min(1.0, 0.75 + max(luz.r, max(luz.g, luz.b))) * abre);
  return c;
}`,$E=`
vec4 cenaFinal(vec2 p) { return veu(p); }`,sd=s=>{const e=parseInt(s.slice(1),16);return`vec3(${[e>>16,e>>8&255,e&255].map(t=>(t/255).toFixed(3)).join(", ")})`},JE=s=>(s.demonio?kE(s.demonio):s.duplo?YE:XE)+(s.entidade?`
const vec3 EA = ${sd(s.entidade[0])};
const vec3 EB = ${sd(s.entidade[1])};`+Gp+ZE:$E),eT=`
varying vec2 vP;
void main() { vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,KE=`
attribute vec2 pos;
uniform vec2 uTela;
varying vec2 vP;
void main() { vP = pos * 0.82 * uTela / min(uTela.x, uTela.y); gl_Position = vec4(pos, 0.0, 1.0); }`,jE=`
precision highp float;
varying vec2 vP;
uniform sampler2D uTexto, uRuido;
uniform vec2 uCentro, uNumBox, uTitBox, uTitPos;
uniform float uT, uDur, uNivel, uSemente, uClarao;
#define TAU 6.2831853

float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float h11(float n) { return fract(sin(n * 91.17) * 4373.13); }
float ruido(vec2 p) {
  vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return textureLod(uRuido, (i + f + 0.5) / 256.0, 0.0).r;
}
float fbm(vec2 p) {
  float s = 0.0, a = 0.5;
  for (int i = 0; i < 5; i++) { s += a * ruido(p); p = mat2(1.6, 1.2, -1.2, 1.6) * p + 3.7; a *= 0.5; }
  return s;
}
float fbm3(vec2 p) {
  float s = 0.0, a = 0.5;
  for (int i = 0; i < 3; i++) { s += a * ruido(p); p = mat2(1.6, 1.2, -1.2, 1.6) * p + 3.7; a *= 0.5; }
  return s;
}
mat2 rot(float a) { float c = cos(a), s = sin(a); return mat2(c, -s, s, c); }
// linha fina com brilho em volta
float fio(float d, float w) { return smoothstep(w, w * 0.25, abs(d)) + 0.35 * exp(-abs(d) / (w * 4.0)); }
float seg(vec2 p, vec2 a, vec2 b) { vec2 pa = p - a, ba = b - a; return length(pa - ba * clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0)); }
// poeira cintilante que deriva
float poeira(vec2 p, float esc, float vel, float lim) {
  float s = 0.0;
  for (int k = 0; k < 3; k++) {
    float fk = float(k);
    vec2 q = p * esc * (1.0 + fk * 0.6) + vec2(fk * 7.3, -uT * vel * (1.0 + fk * 0.4));
    vec2 c = floor(q), f = fract(q) - 0.5;
    float h = h21(c + fk * 13.0);
    if (h > lim) {
      vec2 o = (vec2(h21(c + 1.7), h21(c + 5.1)) - 0.5) * 0.6;
      float pisca = 0.5 + 0.5 * sin(uT * (3.0 + h * 6.0) + h * 60.0);
      s += smoothstep(0.16, 0.0, length(f - o)) * pisca * pisca;
    }
  }
  return s;
}
float estrelas(vec2 p, float esc) {
  float s = 0.0;
  for (int k = 0; k < 2; k++) {
    vec2 q = p * esc * (1.0 + float(k) * 0.9) + float(k) * 11.0;
    vec2 c = floor(q), f = fract(q) - 0.5;
    float h = h21(c);
    vec2 o = f - (vec2(h21(c + 2.0), h21(c + 4.0)) - 0.5) * 0.7;
    if (h > 0.72) s += exp(-dot(o, o) * 160.0) * (h - 0.72) * 5.0 * (0.7 + 0.3 * sin(uT * 2.0 + h * 90.0));
  }
  return s;
}
// raios de luz saindo do centro, sem emenda no \xE2ngulo
float raios(vec2 p, float k, float v) {
  vec2 d = normalize(p + 1e-5);
  float a = ruido(d * k + uSemente + vec2(uT * v, -uT * v * 0.7));
  float b = ruido(d * k * 2.3 - uSemente + vec2(-uT * v * 1.3, uT * v));
  return pow(a * 0.65 + b * 0.55, 3.0);
}
// c\xEDrculos entrela\xE7ados (flor da vida): dist\xE2ncia \xE0 circunfer\xEAncia mais pr\xF3xima
float flor(vec2 p, float R) {
  float d = 1e3;
  vec2 b1 = vec2(R, 0.0), b2 = vec2(0.5 * R, 0.8660254 * R);
  float j = floor(p.y / b2.y), i = floor((p.x - j * b2.x) / R);
  for (int y = -1; y <= 2; y++) for (int x = -1; x <= 2; x++)
    d = min(d, abs(length(p - ((i + float(x)) * b1 + (j + float(y)) * b2)) - R));
  return d;
}
vec3 texto(vec2 p, float esc) {
  vec2 n = (p - uCentro) / (2.0 * uNumBox * esc) + 0.5;
  vec2 t = (p - uTitPos) / (2.0 * uTitBox) + 0.5;
  vec3 r = vec3(0.0);
  if (all(greaterThan(n, vec2(0.0))) && all(lessThan(n, vec2(1.0)))) r.rg = texture2D(uTexto, vec2(n.x, 0.5 + n.y * 0.5)).rg;
  if (all(greaterThan(t, vec2(0.0))) && all(lessThan(t, vec2(1.0)))) r.b = texture2D(uTexto, vec2(t.x, t.y * 0.5)).b;
  return r;
}
// o t\xEDtulo se revela do meio para as pontas e se desfaz em brasa no fim
float tituloVis(vec2 p) {
  float ent = smoothstep(0.35, 1.25, uT), sai = smoothstep(uDur - 1.2, uDur - 0.2, uT);
  float n = fbm(p * 26.0);
  float v = smoothstep(0.0, 0.12, ent * 1.25 - abs(p.x - uTitPos.x) / uTitBox.x + (n - 0.5) * 0.25);
  return v * smoothstep(sai * 1.2 - 0.1, sai * 1.2, n + 0.12);
}
// sombra discreta atr\xE1s do t\xEDtulo
float tituloSombra(vec2 p) {
  return exp(-pow((p.y - uTitPos.y) / uTitBox.y, 2.0) * 1.5) * smoothstep(uTitBox.x * 1.25, uTitBox.x * 0.7, abs(p.x - uTitPos.x));
}
float env() { return smoothstep(0.0, 0.22, uT) * (1.0 - smoothstep(uDur - 1.1, uDur, uT)); }
`,rd=`
vec4 cena(vec2 p) {
  vec2 q = p - uCentro;
  float r = length(q), e = env();
  vec3 ouro = vec3(1.0, 0.70, 0.24), claro = vec3(1.0, 0.95, 0.80), brasa = vec3(0.95, 0.36, 0.06);
  float abre = 1.0 - exp(-uT * 3.0);
  float ecl = step(2.5, uNivel);
  float raio = mix(0.0, 0.25, ecl) * abre;

  vec3 luz = vec3(0.0);
  float alfa = e * mix(0.62, 0.90, ecl) * smoothstep(0.02, 0.45, r + 0.12);

  // feixes: dois sistemas girando em sentidos opostos, com poeira correndo para fora
  float f1 = raios(q * rot(uT * 0.10), 7.0, 0.05), f2 = raios(q * rot(-uT * 0.07), 15.0, 0.08);
  float corre = 0.65 + 0.5 * fbm(normalize(q + 1e-5) * 5.0 + vec2(r * 5.0 - uT * 1.6, uSemente));
  float forca = 0.95 + 0.18 * uNivel;
  float feixe = (f1 * 1.1 + f2 * 0.6) * corre * exp(-r * (2.5 - 0.22 * uNivel)) * forca * abre;
  luz += mix(ouro, claro, min(feixe * 0.8, 1.0)) * feixe * 1.35;
  luz += ouro * exp(-r * 6.5) * 0.55 * abre + brasa * exp(-r * 2.2) * 0.16;

  // aur\xE9olas finas desenhadas como gravura
  float ang = atan(q.y, q.x);
  for (int k = 0; k < 3; k++) {
    float fk = float(k);
    if (fk > uNivel - 0.5) break;
    float R = (0.30 + fk * 0.055) * abre, giro = uT * (0.22 - 0.16 * fk) * (mod(fk, 2.0) < 0.5 ? 1.0 : -1.0);
    float traco = smoothstep(fk * 0.25 + 0.2, fk * 0.25 + 1.2, uT) * TAU;
    float vis = step(mod(ang + giro + TAU, TAU), traco);
    luz += claro * fio(r - R, 0.0024) * vis * 0.85;
    // dentes da coroa
    float n = 24.0 + fk * 12.0, a = (fract((ang + giro) / TAU * n) - 0.5) * TAU / n * R;
    float alt = (0.018 + 0.030 * step(0.75, fract((ang + giro) / TAU * n * 0.25))) * (1.0 - abs(a) / (TAU / n * R * 0.22));
    luz += mix(claro, ouro, clamp((r - R) * 22.0, 0.0, 1.0)) * smoothstep(0.003, 0.0, r - R - max(alt, 0.0)) * step(R, r) * vis * 0.5;
  }

  // eclipse: disco negro com coroa turbulenta
  if (ecl > 0.5) {
    vec2 d = q / max(r, 1e-4);
    float t1 = fbm(d * 3.0 + vec2(r * 4.0 - uT * 0.9, uT * 0.15)), t2 = fbm(d * 8.0 + vec2(r * 9.0 - uT * 1.5, -uT * 0.2));
    float x = max(r - raio, 0.0);
    float coroa = exp(-x * (13.0 - 6.0 * t1)) * (0.30 + 0.95 * t2) + exp(-x * 70.0) * 1.1;
    luz += (mix(brasa, ouro, min(t1 * 1.2, 1.0)) * coroa * 1.15 + claro * pow(coroa, 2.2) * 0.6) * step(raio, r);
    float lab = fbm(d * 5.0 + uT * 0.25) * 0.10;
    luz += brasa * smoothstep(0.02, 0.0, abs(x - lab)) * 0.5 * step(0.045, lab) * step(raio, r);
    float disco = smoothstep(raio + 0.003, raio - 0.003, r);
    luz *= 1.0 - disco;
    luz += vec3(0.05, 0.022, 0.006) * disco * (0.4 + fbm(q * 14.0));
    alfa = max(alfa, disco * e);
    // anel de diamante
    vec2 dia = uCentro + raio * vec2(0.62, 0.78);
    float dd = length(p - dia), br = 0.75 + 0.25 * sin(uT * 2.6);
    luz += claro * (exp(-dd * 42.0) * 2.0 + exp(-abs(p.y - dia.y) * 260.0) * exp(-abs(p.x - dia.x) * 5.0) * 0.9 + exp(-abs(p.x - dia.x) * 320.0) * exp(-abs(p.y - dia.y) * 7.0) * 0.7) * br * abre;
  }

  luz += claro * poeira(p, 13.0, 0.9, 0.80) * (0.5 + 0.2 * uNivel) * smoothstep(0.10, 0.4, r);
  // onda que abre a cena
  luz += claro * exp(-abs(r - uT * 1.5) * 26.0) * exp(-uT * 2.6) * 1.4;

  vec3 t = texto(p, 1.0 + 0.05 * exp(-uT * 4.0));
  // penumbra para o n\xFAmero
  // medalh\xE3o escuro dentro da aur\xE9ola
  float med = smoothstep(0.288, 0.255, r) * (1.0 - ecl) * abre;
  luz *= 1.0 - 0.84 * med;
  luz += vec3(0.10, 0.05, 0.012) * med * (0.4 + 0.6 * fbm(q * 12.0)) + ouro * med * exp(-abs(r - 0.262) * 120.0) * 0.5;
  alfa = max(alfa, med * 0.92 * e);
  luz *= 1.0 - 0.75 * t.g;
  vec3 metal = mix(vec3(0.78, 0.42, 0.08), vec3(1.0, 0.96, 0.78), smoothstep(-0.5, 0.6, q.y / uNumBox.y + 0.25 * sin(q.x * 9.0 - uT * 2.5)));
  luz += ouro * t.g * 0.55;
  luz = mix(luz, metal, t.r);
  luz *= 1.0 - 0.88 * tituloSombra(p);
  luz = mix(luz, claro, t.b * tituloVis(p));
  return vec4(luz * e, max(alfa, t.r * e));
}`,od=`
vec4 cena(vec2 p) {
  vec2 q = p - uCentro;
  float r = length(q), e = env();
  // batimento: tum-tum
  float bt = fract(uT * 1.05), pulsa = exp(-bt * 9.0) + 0.7 * exp(-max(bt - 0.22, 0.0) * 11.0) * step(0.22, bt);
  float entra = 1.0 - exp(-uT * 1.7);

  // tinta que escorre das bordas para o centro
  vec2 d = normalize(q + 1e-5);
  vec2 w = p * 2.6 + d * uT * 0.35 + uSemente;
  w += 1.1 * vec2(fbm(w * 1.3 + uT * 0.12), fbm(w * 1.3 + 8.0 - uT * 0.10));
  float tinta = fbm(w * 1.5);
  float frente = smoothstep(0.0, 0.35, r - mix(1.15, 0.16, entra) + (tinta - 0.5) * 0.7);
  float alfa = e * clamp(0.35 * entra + frente, 0.0, 1.0) * 0.96;
  vec3 luz = vec3(0.10, 0.004, 0.012) * pow(tinta, 2.0) * frente;
  // filetes de sangue na tinta
  float veio = pow(1.0 - abs(2.0 * fbm(w * 2.3 + 4.0) - 1.0), 9.0);
  luz += vec3(0.85, 0.03, 0.05) * veio * frente * (0.22 + 0.55 * pulsa);

  // mand\xEDbula: camadas de espinhos de obsidiana que se fecham sobre o n\xFAmero
  float ang = atan(q.y, q.x) / TAU;
  for (int c = 0; c < 4; c++) {
    float fc = float(c);
    if (fc > 1.5 + uNivel * 0.8) break;
    float n = 13.0 + fc * 4.0, x = ang * n + fc * 0.37 + uSemente;
    float idx = mod(floor(x), n), u = fract(x) - 0.5;
    float h = h21(vec2(idx, fc * 7.0 + 3.0)), chega = smoothstep(fc * 0.16, fc * 0.16 + 0.55, uT) ;
    // a ponta para perto do n\xFAmero e respira com o cora\xE7\xE3o
    float alvo = 0.215 + 0.17 * h * (1.0 - 0.15 * uNivel) + (3.0 - fc) * 0.040 - 0.014 * pulsa;
    float ponta = mix(1.35, alvo, 1.0 - pow(1.0 - chega, 3.0));
    float torto = (h - 0.5) * 0.45 * smoothstep(1.0, 0.2, r) + (fbm(vec2(r * 13.0, idx)) - 0.5) * 0.10;
    float meia = 0.56 * pow(clamp((r - ponta) / 0.42, 0.0, 1.0), 0.72);
    float du = abs(u - torto) - meia, w = du * r * TAU / n;
    float dentro = smoothstep(0.0025, -0.0015, w) * step(ponta, r);
    float faceta = step(0.0, u - torto) * 0.75 + 0.25;
    float nervo = exp(-abs(u - torto) * r * 70.0);
    float prof = 0.35 + fc * 0.22;
    vec3 obs = vec3(0.028, 0.010, 0.014) * prof + vec3(0.42, 0.035, 0.045) * faceta * prof * (0.22 + 1.5 * pow(fbm(vec2(u * 6.0 + idx, r * 16.0)), 2.0)) * exp(-(r - ponta) * 2.6);
    obs += vec3(1.0, 0.26, 0.18) * nervo * exp(-(r - ponta) * 9.0) * 0.5 * prof;
    obs += vec3(0.95, 0.10, 0.07) * smoothstep(-0.006, -0.001, w) * exp(-(r - ponta) * 5.0) * (0.22 + 0.5 * pulsa) * prof;
    luz = mix(luz, obs, dentro);
    alfa = max(alfa, dentro * e);
    // clar\xE3o vermelho entre uma camada e outra
    luz += vec3(0.75, 0.03, 0.04) * exp(-max(w, 0.0) * 55.0) * (1.0 - dentro) * 0.055 * smoothstep(0.95, 0.25, r) * (0.5 + pulsa);
  }
  // po\xE7o que pulsa no centro
  luz += vec3(0.85, 0.04, 0.03) * exp(-r * 7.5) * (0.22 + 0.45 * pulsa);
  alfa = max(alfa, exp(-r * 3.0) * 0.75 * entra * e);

  vec3 t;
  {
    vec2 trem = vec2(h11(floor(uT * 24.0)) - 0.5, h11(floor(uT * 24.0) + 5.0) - 0.5) * 0.010 * pulsa;
    t = texto(p + trem, 1.0 + 0.07 * pulsa);
    t.b = texto(p, 1.0).b;
    luz *= 1.0 - 0.7 * t.g;
    alfa = max(alfa, t.g * 0.85 * e);
    luz += vec3(0.8, 0.02, 0.03) * t.g * (0.35 + 0.5 * pulsa);
    luz = mix(luz, mix(vec3(0.55, 0.0, 0.02), vec3(1.0, 0.30, 0.24), smoothstep(-0.4, 0.5, q.y / uNumBox.y)), t.r);
  }
  float tv = tituloVis(p);
  luz *= 1.0 - 0.85 * tituloSombra(p);
  luz = mix(luz, vec3(1.0, 0.40, 0.32), t.b * tv);
  return vec4(luz * e, max(alfa, max(t.r, t.b * tv) * e));
}`,Ra=`
const vec3 BEM = vec3(0.20, 0.95, 0.72);
const vec3 BEM2 = vec3(1.0, 0.90, 0.52);
const vec3 MAL = vec3(0.95, 0.07, 0.30);
const vec3 MAL2 = vec3(0.55, 0.16, 1.0);
// o lado que domina muda aos trancos, sem padr\xE3o
float destino() {
  float b = uT * 2.1, i = floor(b), f = smoothstep(0.0, 0.16, fract(b));
  return mix(h11(i + uSemente), h11(i + 1.0 + uSemente), f) * 2.0 - 1.0;
}
// estrela de sete pontas {7/3}
float hepta(vec2 p, float R) {
  float d = 1e3;
  for (int i = 0; i < 7; i++) {
    float a = float(i) * TAU / 7.0, b = float(i + 3) * TAU / 7.0;
    d = min(d, seg(p, R * vec2(sin(a), cos(a)), R * vec2(sin(b), cos(b))));
  }
  return d;
}
// fatias da realidade que escorregam
vec2 rasgo(vec2 p, float forca) {
  float q = floor(uT * 11.0), y = floor((p.y + h11(q) * 0.2) * (9.0 + 14.0 * h11(q + 3.0)));
  float liga = step(0.62, h11(q * 1.7 + 2.0)) * step(0.55, h21(vec2(y, q)));
  return p + vec2((h21(vec2(y, q + 7.0)) - 0.5) * 0.16 * forca * liga, 0.0);
}`,QE=Ra+`
vec3 selo(vec2 q, float dest) {
  float abre = 1.0 - exp(-uT * 2.4);
  float giro = uT * 0.35 + 0.9 * sin(uT * 1.3) + dest * 0.35;
  float a = hepta(q * rot(giro), 0.36 * abre), b = hepta(q * rot(-giro * 0.7 + 0.4), 0.27 * abre);
  float an = length(q) - 0.375 * abre, an2 = length(q) - 0.40 * abre;
  return vec3(fio(a, 0.0026), fio(b, 0.0018), fio(an, 0.0018) + fio(an2, 0.001));
}
vec4 cena(vec2 p0) {
  float e = env(), dest = destino();
  vec2 p = rasgo(p0, 1.0), q = p - uCentro;
  float r = length(q);
  float entra = 1.0 - exp(-uT * 2.0);
  // espiral: quanto mais perto do centro, mais torcida
  vec2 s = q * rot(1.1 / (r + 0.16) * (0.5 + 0.35 * sin(uT * 0.8)) + uT * 0.5);
  vec2 w = s * 2.4 + uSemente;
  w += 0.9 * vec2(fbm(w + uT * 0.25), fbm(w + 6.0 - uT * 0.22));
  float f = fbm(w * 1.4);
  float linha = s.x * 0.55 + (f - 0.5) * 0.75 + dest * 0.10;
  float lado = smoothstep(-0.09, 0.09, linha), front = exp(-abs(linha) * 26.0);
  float fil = pow(1.0 - abs(2.0 * fbm(w * 2.2 + uT * 0.2) - 1.0), 4.0);
  vec3 bem = BEM * (0.07 + 0.30 * f) + mix(BEM, BEM2, f) * fil * 0.50;
  vec3 mal = MAL * (0.05 + 0.22 * f) + mix(MAL, MAL2, f) * fil * 0.55;
  vec3 luz = mix(mal, bem, lado);
  // na fronteira as duas se anulam em luz branca, com descargas
  luz += vec3(1.0, 0.96, 1.0) * front * (0.25 + 0.75 * pow(ruido(s * 30.0 + uT * 9.0), 3.0));
  luz *= (0.35 + 0.65 * smoothstep(1.2, 0.2, r)) * entra;
  float alfa = e * 0.86 * entra;

  // selo com separa\xE7\xE3o de cores, que treme quando o destino vira
  float sep = 0.004 + 0.012 * abs(dest) * step(0.5, h11(floor(uT * 13.0)));
  vec3 sa = selo(q + vec2(sep, 0.0), dest), sb = selo(q, dest), sc = selo(q - vec2(sep, 0.0), dest);
  vec3 corA = mix(BEM2, MAL, lado), corB = mix(MAL2, BEM, lado);
  luz += vec3(sa.x, sb.x, sc.x) * mix(vec3(1.0), corA, 0.45) * 0.75 + corB * vec3(sa.y, sb.y, sc.y) * 0.55 + vec3(0.9) * sb.z * 0.45;
  luz += mix(MAL2, BEM2, lado) * poeira(q * rot(uT * 0.4), 15.0, 0.4, 0.82) * 0.8;

  // miolo escuro para o n\xFAmero, partido ao meio entre as duas for\xE7as
  luz *= 1.0 - 0.80 * smoothstep(0.24, 0.10, length(q * vec2(0.85, 1.35)));
  float esc = 1.0 + 0.04 * dest;
  vec3 t = texto(p, esc), ta = texto(p + vec2(sep * 1.6, 0.0), esc), tc = texto(p - vec2(sep * 1.6, 0.0), esc);
  float corte = smoothstep(-0.012, 0.012, q.x * 0.9 + q.y * 0.35 + (fbm(q * 18.0 + uT) - 0.5) * 0.12 + dest * 0.05);
  luz += mix(MAL, BEM, corte) * t.g * 0.5;
  luz = mix(luz, mix(vec3(1.0, 0.36, 0.50), vec3(0.70, 1.0, 0.90), corte), t.r);
  luz += vec3(ta.r, 0.0, tc.r) * (1.0 - t.r) * 0.8;
  float tv = tituloVis(p);
  luz *= 1.0 - 0.65 * tituloSombra(p);
  luz = mix(luz, vec3(1.0), t.b * tv) + vec3(ta.b, 0.0, tc.b) * (1.0 - t.b) * tv * 0.7;
  return vec4(luz * e, max(alfa, t.r * e));
}`,e1=Ra+`
float trava(int i) { return ${zp.map((s,e)=>`i == ${e} ? ${s.toFixed(2)} : `).join("")}9.0; }
vec4 cena(vec2 p0) {
  float e = env(), dest = destino(), choque = 0.0;
  for (int i = 0; i < 3; i++) choque += step(trava(i), uT) * exp(-max(uT - trava(i), 0.0) * 6.0) * (0.5 + 0.25 * float(i));
  vec2 p = rasgo(p0, 0.25 + choque * 1.5), q = p - uCentro;
  float r = length(q), an = atan(q.x, q.y), abre = 1.0 - exp(-uT * 3.0), fim = trava(2);
  float tudo = smoothstep(fim - 0.02, fim + 0.10, uT);
  float lado = smoothstep(-0.14, 0.14, q.x + (fbm(q * 6.0 + uT * 0.4) - 0.5) * 0.35 + dest * 0.16);
  // fundo: veludo escuro que as duas for\xE7as invadem quando a \xFAltima roda trava
  float n = fbm(q * 3.0 + uSemente + uT * 0.12);
  vec3 luz = mix(MAL2 * 0.10, BEM * 0.07, n) * (0.4 + n) * exp(-r * 0.9);
  luz += mix(MAL, BEM, lado) * raios(q, 7.0, 0.35) * exp(-r * 1.3) * (0.12 + 1.15 * tudo);
  // sete feixes, um por ponta da estrela
  float ponta = abs(fract(an / TAU * 7.0 + 0.5) - 0.5) * TAU / 7.0 * r;
  luz += mix(MAL, BEM2, lado) * exp(-ponta * 26.0) * exp(-r * 1.5) * tudo * (0.65 + 0.35 * sin(uT * 13.0 + dest * 3.0));

  float sep = 0.003 + 0.018 * choque;
  for (int i = 0; i < 3; i++) {
    float fi = float(i), tk = trava(i), falta = max(tk - uT, 0.0), sinal = mod(fi, 2.0) < 0.5 ? 1.0 : -1.0;
    float R = (0.315 + 0.145 * fi) * abre, larg = 0.056;
    // chega a zero exatamente na trava, com um pequeno coice
    float bate = uT > tk ? exp(-(uT - tk) * 9.0) * sin((uT - tk) * 42.0) * 0.05 : 0.0;
    float giro = sinal * (7.5 * pow(falta, 1.7) + bate), preso = smoothstep(tk - 0.01, tk + 0.06, uT);
    float st = (an + giro) / TAU * 7.0 + 0.5, idx = mod(floor(st), 7.0), dentro = abs(fract(st) - 0.5);
    float sorte = step(0.5, h11(idx * 3.7 + fi * 11.0 + uSemente));
    vec3 cor = mix(mix(MAL, MAL2, 0.35 * h11(idx + fi)), mix(BEM, BEM2, 0.45 * h11(idx + 4.0)), sorte);
    float banda = smoothstep(larg, larg - 0.008, abs(r - R));
    float casa = smoothstep(0.5, 0.47, dentro);
    float borrao = smoothstep(0.05, 0.9, falta);
    cor = mix(cor, mix(MAL, BEM, 0.5) * 0.8, borrao * 0.7);
    // relevo: miolo mais claro e chanfro nas bordas
    float relevo = 0.55 + 0.45 * smoothstep(larg, 0.0, abs(r - R)) + 0.25 * exp(-abs(abs(r - R) - larg) * 160.0);
    float alvo = exp(-dentro * dentro * 14.0) * step(idx, 0.5) * preso;
    luz = mix(luz, cor * relevo * mix(casa, 0.85, borrao) * (0.20 + 0.30 * preso + 1.1 * alvo + 0.20 * preso * sin(uT * 6.0 + idx * 2.4 + fi)), banda * 0.94);
    luz += vec3(1.0, 0.92, 0.75) * (fio(abs(r - R) - larg, 0.0022) * 0.75) * abre;
    // estrela de sete pontas que liga as casas
    vec2 g = q * rot(giro);
    luz += vec3(fio(hepta(g + vec2(sep, 0.0), R - larg), 0.0015), fio(hepta(g, R - larg), 0.0015), fio(hepta(g - vec2(sep, 0.0), R - larg), 0.0015)) * (0.10 + 0.42 * preso) * smoothstep(0.16, 0.26, r);
    // pino no alto de cada roda
    float pino = smoothstep(0.012, 0.004, abs(q.x) + max(0.0, abs(q.y - R) - larg) * 0.8);
    luz = mix(luz, vec3(1.0, 0.95, 0.82), pino * step(0.0, q.y) * abre);
    // clar\xE3o e onda da trava
    float d = uT - tk;
    if (d > 0.0) {
      luz += vec3(1.0, 0.97, 0.9) * banda * exp(-d * 6.0) * 0.8;
      luz += mix(MAL2, BEM2, sorte) * exp(-abs(r - R - d * 1.3) * 30.0) * exp(-d * 3.2) * 1.3;
    }
  }
  // moedas e brasas caem juntas depois da \xFAltima trava
  luz += (BEM2 * poeira(vec2(q.x, -q.y), 13.0, 1.1, 0.80) * lado + MAL * poeira(q, 13.0, 0.9, 0.80) * (1.0 - lado)) * tudo * 1.2;
  luz += vec3(1.0, 0.97, 0.92) * exp(-pow((uT - fim) * 7.0, 2.0)) * exp(-r * 1.6) * 0.9 * uClarao;

  luz *= 1.0 - 0.86 * smoothstep(0.26, 0.15, length(q * vec2(0.92, 1.2)));
  float esc = 1.0 + 0.05 * dest * tudo + 0.10 * choque;
  vec2 sp = vec2(sep * 1.5, 0.0);
  vec3 t = texto(p, esc), ta = texto(p + sp, esc), tc = texto(p - sp, esc);
  float corte = smoothstep(-0.012, 0.012, q.x * 0.9 + q.y * 0.35 + (fbm(q * 18.0 + uT) - 0.5) * 0.12 + dest * 0.06);
  vec3 tinta = mix(vec3(0.92, 0.88, 0.80), mix(vec3(1.0, 0.36, 0.50), vec3(0.70, 1.0, 0.90), corte), 0.25 + 0.75 * tudo);
  luz += mix(MAL, BEM, corte) * t.g * 0.5;
  luz = mix(luz, tinta, t.r);
  luz += vec3(ta.r, 0.0, tc.r) * (1.0 - t.r) * 0.8;
  float tv = tituloVis(p);
  luz *= 1.0 - 0.75 * tituloSombra(p);
  luz = mix(luz, vec3(1.0), t.b * tv) + vec3(ta.b, 0.0, tc.b) * (1.0 - t.b) * tv * 0.7;
  return vec4(luz * e, e * 0.95 * smoothstep(0.0, 0.3, uT));
}`,t1=Ra+`
const float RS = 0.215;
vec3 espaco(vec2 p) {
  float n = fbm(p * 2.2 + uSemente), m = fbm(p * 3.1 + 9.0 + n);
  vec3 c = vec3(0.006, 0.006, 0.018) + MAL2 * 0.42 * pow(n, 3.0) + BEM * 0.30 * pow(m, 3.6) + MAL * 0.25 * pow(1.0 - n, 4.5);
  return c + vec3(0.9, 0.95, 1.0) * estrelas(p, 13.0);
}
vec3 forcaCor(float x, float calor) {
  return mix(mix(MAL, MAL2, calor * 0.7), mix(BEM, BEM2, calor), smoothstep(-0.18, 0.18, x));
}
vec4 cena(vec2 p0) {
  float e = env(), dest = destino();
  float nova = uDur * 0.60, vira = smoothstep(nova - 0.03, nova + 0.05, uT) * 2.0 - 1.0;
  float treme = exp(-abs(uT - nova) * 5.0);
  vec2 p = rasgo(p0, 0.45 + treme * 1.3), q = p - uCentro;
  // ondas gravitacionais
  float r0 = length(q);
  q += normalize(q + 1e-5) * sin(r0 * 34.0 - uT * 9.0) * 0.006 * smoothstep(0.2, 0.5, r0) * (0.5 + 2.0 * treme);
  float r = length(q), abre = 1.0 - exp(-uT * 1.5);
  float rs = RS * (0.35 + 0.65 * abre);
  // lente: a luz do fundo \xE9 curvada em volta do horizonte
  vec2 lente = q * (1.0 - rs * rs * 1.25 / (r * r + 0.002));
  lente *= rot(uT * 0.05 + 0.5 * rs / (r + 0.05));
  vec3 luz = espaco(lente * 1.1 + uCentro);

  // disco de acre\xE7\xE3o, inclinado e mais longo no sentido da bandeja
  vec2 k = q * rot(0.95);
  float lado = k.x * -vira;
  vec2 dq = vec2(k.x, k.y / 0.27);
  float dr = length(dq), da = atan(dq.y, dq.x), vel = 1.5 / pow(dr + 0.12, 1.4);
  vec2 dd = vec2(cos(da + uT * vel * 0.55), sin(da + uT * vel * 0.55));
  float turb = fbm(dd * 3.2 + vec2(dr * 14.0, 0.0)) * 0.6 + fbm(dd * 8.0 + vec2(dr * 34.0, 4.0)) * 0.55;
  float faixa = smoothstep(rs * 1.18, rs * 1.45, dr) * smoothstep(0.98, 0.36, dr);
  float den = faixa * pow(turb, 1.7) * 3.4;
  float calor = smoothstep(0.85, rs * 1.2, dr);
  float dop = 1.0 + 0.75 * k.x / (dr + 0.05);
  vec3 disco = forcaCor(lado, calor) * den * (0.35 + 1.1 * calor) * mix(1.0, dop, 0.5) + vec3(1.0, 0.97, 0.92) * pow(den * calor, 2.0) * 0.30;

  disco = 1.0 - exp(-disco * vec3(1.15, 1.05, 1.15));
  // imagem do disco dobrada por cima e por baixo do horizonte
  float arco = smoothstep(rs * 0.98, rs * 1.08, r) * smoothstep(rs * 1.62, rs * 1.10, r);
  float aa = atan(k.y, k.x) + uT * 1.6;
  float at = fbm(vec2(cos(aa), sin(aa)) * 4.0 + vec2(r * 30.0, 2.0));
  vec3 dobra = forcaCor(lado, 0.9) * arco * (0.25 + 1.2 * at * at) * 0.95;
  float foton = exp(-abs(r - rs * 1.03) * 210.0) * 1.5 + exp(-abs(r - rs * 1.03) * 45.0) * 0.4;
  float horizonte = smoothstep(rs + 0.003, rs - 0.004, r);
  float atras = step(0.0, k.y);
  luz += disco * atras + dobra;
  luz *= 1.0 - horizonte;
  luz += vec3(1.0, 0.95, 0.9) * foton * 0.85 * (1.0 - horizonte * 0.6);
  // a frente do disco passa diante do horizonte, mas some no miolo para o n\xFAmero respirar
  luz += disco * (1.0 - atras) * mix(1.0, 0.16, smoothstep(rs * 1.02, rs * 0.72, r));

  // heptagramas aninhados, em contra-rota\xE7\xE3o
  for (int i = 0; i < 3; i++) {
    float fi = float(i), R = (0.40 + fi * 0.145) * abre, sep = 0.004 + 0.02 * treme;
    mat2 g = rot(uT * (0.22 - fi * 0.05) * (mod(fi, 2.0) < 0.5 ? 1.0 : -1.0) + dest * 0.2 + treme * 2.0);
    vec3 c3 = vec3(fio(hepta((q + vec2(sep, 0.0)) * g, R), 0.0016), fio(hepta(q * g, R), 0.0016), fio(hepta((q - vec2(sep, 0.0)) * g, R), 0.0016));
    luz += c3 * mix(vec3(1.0), forcaCor(q.x * vira, 0.5), 0.5) * (0.34 - fi * 0.07) * smoothstep(rs * 1.1, rs * 1.5, r);
  }
  // supernova: rasga a tela e troca os lados
  float dn = uT - nova;
  if (dn > -0.25) {
    float on2 = max(dn, 0.0) * 1.9;
    luz += vec3(1.0, 0.98, 1.0) * (exp(-abs(r - on2) * 20.0) * exp(-max(dn, 0.0) * 2.2) * 1.8 + exp(-dn * dn * 70.0) * 0.75 * uClarao);
    luz += raios(q, 11.0, 0.3) * exp(-r * 1.5) * exp(-max(dn, 0.0) * 2.5) * 1.3 * step(0.0, dn);
  }

  vec2 sp = vec2(0.004 + 0.02 * treme, 0.0);
  vec3 t = texto(p, 1.0), ta = texto(p + sp, 1.0), tc = texto(p - sp, 1.0);
  float corte = smoothstep(-0.015, 0.015, lado + (fbm(q * 16.0 + uT) - 0.5) * 0.14 + dest * 0.05);
  luz *= 1.0 - 0.55 * t.g;
  luz += mix(MAL, BEM, corte) * t.g * 0.45;
  luz = mix(luz, mix(vec3(1.0, 0.44, 0.62), vec3(0.74, 1.0, 0.92), corte), t.r);
  luz += vec3(ta.r, 0.0, tc.r) * (1.0 - t.r) * 0.8;
  float tv = tituloVis(p);
  luz *= 1.0 - 0.7 * tituloSombra(p);
  luz = mix(luz, vec3(1.0), t.b * tv) + vec3(ta.b, 0.0, tc.b) * (1.0 - t.b) * tv * 0.8;
  return vec4(luz * e, e * smoothstep(0.0, 0.35, uT));
}`,lu=`
const vec3 MARFIM = vec3(1.0, 0.95, 0.84);
const vec3 OURO = vec3(1.0, 0.78, 0.38);
const vec3 CEU = vec3(0.45, 0.78, 1.0);
const vec3 NOITE = vec3(0.012, 0.022, 0.055);
// yin-yang: o pr\xF3prio 69. x = lado claro (0..1), y = dentro do disco
vec2 taiji(vec2 q, float R) {
  float w = 0.004;
  float l = smoothstep(-w, w, q.x);
  l = mix(l, 1.0, smoothstep(R * 0.5 + w, R * 0.5 - w, length(q - vec2(0.0, R * 0.5))));
  l = mix(l, 0.0, smoothstep(R * 0.5 + w, R * 0.5 - w, length(q + vec2(0.0, R * 0.5))));
  return vec2(l, smoothstep(R + 0.003, R - 0.003, length(q)));
}
float pontos(float r, float ang, float R, float n, float tam) {
  float a = (fract(ang / TAU * n) - 0.5) * TAU / n * R;
  return smoothstep(tam, tam * 0.35, length(vec2(a, r - R)));
}
float poli(vec2 p, float n, float R) { float a = atan(p.x, p.y), k = TAU / n; return cos(floor(0.5 + a / k) * k - a) * length(p) - R; }
vec3 disco69(vec3 luz, vec2 p, vec2 q, float R, float giro, float vis) {
  vec2 ty = taiji(q * rot(giro), R);
  vec3 claro = MARFIM * (0.93 + 0.07 * fbm(q * 9.0)), escuro = vec3(0.018, 0.030, 0.070) + CEU * 0.05 * fbm(q * 11.0);
  luz = mix(luz, mix(escuro, claro, ty.x), ty.y * vis);
  // o n\xFAmero \xE9 sempre o avesso do lado em que est\xE1
  vec3 t = texto(p, 1.0);
  return mix(luz, mix(MARFIM, vec3(0.03, 0.045, 0.10), ty.x * ty.y * vis), t.r * vis);
}`,n1=lu+`
vec4 cena(vec2 p) {
  vec2 q = p - uCentro;
  float r = length(q), ang = atan(q.y, q.x) + TAU, e = env();
  float ent = smoothstep(0.0, 1.0, uT / 0.9);
  // a ordem se espalha do centro, num raio que cresce suave
  float alcance = smoothstep(0.2, 2.6, uT) * 1.25, vis = smoothstep(alcance, alcance - 0.10, r);
  vec3 luz = NOITE * (0.6 + 0.8 * exp(-r * 2.2));
  float alfa = e * 0.93 * ent;

  float resp = 0.85 + 0.15 * sin(uT * 1.6);
  float f = flor(q * rot(TAU / 12.0), 0.13);
  luz += mix(OURO, CEU, smoothstep(0.1, 0.75, r)) * fio(f, 0.0016) * vis * exp(-r * 1.5) * 0.75 * resp;
  // frente de luz que desenha
  luz += MARFIM * exp(-abs(r - alcance) * 34.0) * (1.0 - smoothstep(1.8, 2.6, uT)) * 0.7;

  float g = uT * 0.16;
  luz += MARFIM * (fio(r - 0.300, 0.0022) + fio(r - 0.318, 0.0010)) * vis * 0.9;
  luz += OURO * pontos(r, ang + g, 0.342, 36.0, 0.0055) * vis;
  luz += OURO * (fio(poli(q * rot(g), 6.0, 0.372), 0.0018) + fio(poli(q * rot(-g + TAU / 12.0), 6.0, 0.372), 0.0018)) * vis * 0.75;
  luz += CEU * (fio(r - 0.432, 0.0016) * 0.7 + pontos(r, ang - g, 0.455, 72.0, 0.0038)) * vis;
  luz += MARFIM * fio(r - 0.478, 0.0022) * vis * 0.8;
  // p\xE9talas externas
  float n = 12.0, pa = (fract((ang - g * 0.5) / TAU * n) - 0.5) * TAU / n;
  vec2 pq = r * vec2(sin(pa), cos(pa)) - vec2(0.0, 0.60);
  luz += OURO * fio(length(pq * vec2(1.0, 0.62)) - 0.074, 0.0018) * vis * 0.6;
  luz += CEU * fio(r - 0.725, 0.0016) * vis * 0.5 + MARFIM * pontos(r, ang + g, 0.75, 48.0, 0.0045) * vis * 0.6;
  // luz calma
  luz += OURO * exp(-abs(r - 0.25) * 11.0) * 0.16 * resp * ent + CEU * exp(-r * 2.6) * 0.10;
  float cruz = exp(-abs(q.x) * 150.0) * exp(-abs(q.y) * 2.2) + exp(-abs(q.y) * 150.0) * exp(-abs(q.x) * 3.0);
  luz += MARFIM * cruz * 0.35 * smoothstep(1.6, 2.4, uT) * resp * smoothstep(0.24, 0.30, r);
  luz += MARFIM * poeira(vec2(abs(q.x), q.y), 11.0, 0.25, 0.84) * 0.55 * vis;

  luz = disco69(luz, p, q, 0.235 * smoothstep(0.1, 1.2, uT), g * 1.4, smoothstep(0.1, 0.6, uT));
  luz *= 1.0 - 0.72 * tituloSombra(p);
  luz = mix(luz, MARFIM, texto(p, 1.0).b * tituloVis(p));
  return vec4(luz * e, alfa);
}`,i1=lu+`
vec4 cena(vec2 p) {
  vec2 q = p - uCentro;
  float r = length(q), e = env(), ang = atan(q.y, q.x) + TAU;
  float alinha = uDur * 0.62, resp = 0.88 + 0.12 * sin(uT * 1.4);
  float alcance = smoothstep(0.2, 3.0, uT) * 1.4, vis = smoothstep(alcance, alcance - 0.15, r);
  vec3 luz = NOITE * 0.8 + MARFIM * estrelas(vec2(abs(q.x), q.y * sign(q.x + 1e-5)), 12.0) * 0.8;

  // gal\xE1xia de dois bra\xE7os id\xEAnticos (simetria de 180 graus, como o 69)
  vec2 g = q * rot(0.5);
  float gr = length(g), ga = atan(g.y, g.x) - uT * 0.10;
  float braco = 0.5 + 0.5 * cos(2.0 * (ga - 2.7 * log(gr + 0.05)));
  vec2 gs = vec2(cos(2.0 * ga), sin(2.0 * ga)) * gr;
  float den = pow(braco, 2.6) * (0.25 + 1.1 * fbm(gs * 5.0 + gr * 3.0)) * exp(-gr * 1.75) * smoothstep(0.16, 0.36, gr);
  luz += (mix(OURO, CEU, smoothstep(0.15, 0.75, gr)) * den * 0.95 + MARFIM * pow(den, 2.5) * 0.9) * vis;
  luz += MARFIM * pow(braco, 3.0) * poeira(gs, 26.0, 0.0, 0.72) * exp(-gr * 1.2) * 0.8 * vis;
  // auroras espelhadas nas laterais
  float ax = abs(q.x), cort = fbm(vec2(q.y * 2.2 + uT * 0.12, ax * 1.5)), faixa = smoothstep(0.20, 0.56, ax + (cort - 0.5) * 0.35);
  luz += mix(vec3(0.15, 0.85, 0.65), CEU, cort) * faixa * pow(ruido(vec2(q.y * 11.0 + cort * 5.0, uT * 0.3)), 2.0) * 0.22 * smoothstep(0.8, 2.2, uT);

  // geometria ao fundo
  luz += OURO * fio(flor(q * rot(TAU / 12.0), 0.175), 0.0013) * exp(-r * 1.2) * 0.26 * vis;

  // sistema: seis \xF3rbitas, todas alinhadas no mesmo instante
  float luzAl = exp(-pow((uT - alinha) * 1.7, 2.0));
  for (int i = 0; i < 6; i++) {
    float fi = float(i), R = 0.335 + fi * 0.098, k = 6.0 - fi;
    float th = TAU * 0.25 + (uT - alinha) * k * 0.30 * (1.0 - 0.80 * luzAl) + step(0.5, mod(fi, 2.0)) * TAU * 0.5;
    vec2 c = R * vec2(cos(th), sin(th));
    // rastro atr\xE1s de cada um dos dois planetas opostos da \xF3rbita
    float dif = mod(th - atan(q.y, q.x) + TAU * 4.0, TAU * 0.5);
    luz += MARFIM * fio(r - R, 0.0011) * (0.20 + 0.85 * exp(-dif * 2.2)) * vis * 0.62;
    luz += OURO * pontos(r, ang, R, 12.0 * (fi + 1.0), 0.0022) * 0.35 * vis;
    float pr = 0.013 + 0.006 * h11(fi + 3.0) + 0.0016 * fi;
    vec3 cor = mix(OURO, CEU, fi / 5.0);
    for (int s = 0; s < 2; s++) {
      vec2 cc = s == 0 ? c : -c, nn = (q - cc) / pr;
      float dp = length(q - cc), esf = smoothstep(pr + 0.0015, pr - 0.0015, dp);
      float ilum = clamp(dot(vec3(nn, sqrt(max(1.0 - dot(nn, nn), 0.0))), normalize(vec3(normalize(-cc), 0.55))), 0.0, 1.0);
      luz = mix(luz, cor * (0.10 + 1.15 * ilum) + MARFIM * pow(ilum, 6.0) * 0.5, esf * vis);
      luz += cor * exp(-dp * 46.0) * 0.5 * vis * (1.0 + luzAl);
      // na conjun\xE7\xE3o, um fio liga cada planeta ao centro
      luz += MARFIM * smoothstep(0.0022, 0.0, seg(q, cc, vec2(0.0))) * luzAl * 0.5;
    }
  }
  // alinhamento: a coluna de luz atravessa a bandeja
  luz += MARFIM * exp(-abs(q.x) * mix(230.0, 34.0, luzAl)) * luzAl * 1.15 * smoothstep(0.20, 0.30, r);
  luz += OURO * exp(-abs(q.x) * 9.0) * luzAl * 0.32;
  float oa = (uT - alinha) * 1.1;
  luz += MARFIM * exp(-abs(r - oa) * 22.0) * exp(-max(uT - alinha, 0.0) * 1.7) * step(0.0, oa) * 1.1;

  // sol central com o selo 69
  float R = 0.228 * smoothstep(0.1, 1.4, uT);
  float x = max(r - R, 0.0), cor6 = 0.5 + 0.5 * cos(12.0 * ang + uT * 0.4), cor24 = 0.5 + 0.5 * cos(24.0 * ang - uT * 0.6);
  luz += (OURO * exp(-x * 15.0) * 0.85 + MARFIM * exp(-x * 60.0) * 0.9) * step(R, r) * resp * (1.0 + luzAl);
  luz += OURO * exp(-x * mix(34.0, 8.5, cor6 * cor24)) * 0.42 * step(R, r) * (1.0 + 1.3 * luzAl);
  luz += MARFIM * fio(r - R - 0.022, 0.0018) * 0.8 * smoothstep(0.6, 1.4, uT);
  luz += OURO * pontos(r, ang + uT * 0.2, R + 0.038, 69.0, 0.0036) * smoothstep(1.0, 2.0, uT);
  luz = disco69(luz, p, q, R, uT * 0.20, smoothstep(0.1, 0.7, uT));
  luz += MARFIM * luzAl * exp(-r * 3.0) * 0.20;

  luz *= 1.0 - 0.75 * tituloSombra(p);
  luz = mix(luz, MARFIM, texto(p, 1.0).b * tituloVis(p));
  return vec4(luz * e, e * smoothstep(0.0, 0.5, uT));
}`,s1=`
void main() {
  vec4 c = cenaFinal(vP);
  // clar\xE3o de abertura (menor para quem pediu menos movimento no sistema)
  c.rgb += vec3(1.0, 0.97, 0.92) * exp(-uT * 9.0) * uClarao;
  // granulado fino, para os degrad\xEAs n\xE3o fazerem faixas
  c.rgb += (h21(vP * 900.0 + fract(uT)) - 0.5) * 0.012 * c.a;
  gl_FragColor = vec4(max(c.rgb, 0.0), clamp(c.a, 0.0, 1.0));
}`,r1={crit:[rd,rd],falha:[od,od],caos:[QE,t1],ordem:[n1,i1]},o1=s=>s.absoluto?s.tipo==="caos"?Ra+WE:lu+qE:s.roda?e1:r1[s.tipo][s.cosmico?1:0],a1=s=>jE+o1(s)+JE(s)+s1,ll=[.4,.2],ul=[.47,.06];function c1(s,e){const t=document.createElement("canvas"),n=1024,i=1024;t.width=n,t.height=i;const r=t.getContext("2d"),o='"Palatino Linotype", Palatino, "Book Antiqua", "Times New Roman", serif';r.fillStyle="#000",r.fillRect(0,0,n,i),r.globalCompositeOperation="lighter",r.textAlign="center",r.textBaseline="middle";const a=String(s),c=n/(2*ll[0]),l=i/2/(2*ll[1])/c;r.save(),r.translate(n/2,i/4),r.scale(1,l),r.font=`700 ${Math.min(.2,.72/a.length)*c}px ${o}`,r.fillStyle="#f00",r.shadowColor="#0f0",r.shadowBlur=46,r.fillText(a,0,8),r.fillText(a,0,8),r.restore();const u=n/(2*ul[0]),h=i/2/(2*ul[1])/u;r.save(),r.translate(n/2,i*3/4),r.scale(1,h);let d=.066*u;const f=[...e],m=()=>{r.font=`700 ${d}px ${o}`;const x=d*.16;return{esp:x,larg:f.reduce((v,y)=>v+r.measureText(y).width,0)+x*(f.length-1)}};let _=m();_.larg>n*.86&&(d*=n*.86/_.larg,_=m()),r.fillStyle="#00f",r.textAlign="left";let g=-_.larg/2;for(const x of f)r.fillText(x,g,0),g+=r.measureText(x).width+_.esp;const p=(n-_.larg)/2-34;if(p>12)for(const x of[-1,1])r.fillRect(x*(_.larg/2+22)-(x<0?p:0),-1,p,2.5);return r.restore(),t}const sa=256;let $s=null;function l1(){if(!$s){$s=new Uint8Array(sa*sa);for(let s=0;s<$s.length;s++)$s[s]=Math.random()*256}return $s}const u1=`#version 300 es
#define attribute in
#define varying out
`,h1=`#version 300 es
#define varying in
#define texture2D texture
#define gl_FragColor corFinal
out highp vec4 corFinal;
`;function uu(s,e,t,n){const i=s.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,powerPreference:"high-performance"});if(!i)return null;const r=(f,m)=>{const _=i.createShader(f);return i.shaderSource(_,(f===i.VERTEX_SHADER?u1:h1)+m),i.compileShader(_),_},o=i.createProgram();i.attachShader(o,r(i.VERTEX_SHADER,e)),i.attachShader(o,r(i.FRAGMENT_SHADER,t)),i.linkProgram(o);const a=i.getExtension("KHR_parallel_shader_compile"),c=f=>i.getUniformLocation(o,f);let l=0,u,h;const d=()=>{if(!i.getProgramParameter(o,i.LINK_STATUS))return console.error(i.getProgramInfoLog(o)),2;i.useProgram(o),i.bindBuffer(i.ARRAY_BUFFER,i.createBuffer()),i.bufferData(i.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),i.STATIC_DRAW);const f=i.getAttribLocation(o,"pos");i.enableVertexAttribArray(f),i.vertexAttribPointer(f,2,i.FLOAT,!1,0,0);const m=_=>{i.bindTexture(i.TEXTURE_2D,i.createTexture());for(const[g,p]of[[i.TEXTURE_MIN_FILTER,i.LINEAR],[i.TEXTURE_MAG_FILTER,i.LINEAR],[i.TEXTURE_WRAP_S,_],[i.TEXTURE_WRAP_T,_]])i.texParameteri(i.TEXTURE_2D,g,p)};return i.activeTexture(i.TEXTURE1),m(i.REPEAT),i.texImage2D(i.TEXTURE_2D,0,i.R8,sa,sa,0,i.RED,i.UNSIGNED_BYTE,l1()),i.uniform1i(c("uRuido"),1),i.activeTexture(i.TEXTURE0),m(i.CLAMP_TO_EDGE),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!0),u=c("uT"),h=c("uTela"),n(i,c),1};return{gl:i,u:c,pronta(){return!l&&(!a||i.getProgramParameter(o,a.COMPLETION_STATUS_KHR))&&(l=d()),l===1},imagem:f=>i.texImage2D(i.TEXTURE_2D,0,i.RGBA,i.RGBA,i.UNSIGNED_BYTE,f),desenhar(f){i.viewport(0,0,s.width,s.height),i.uniform2f(h,s.width,s.height),i.uniform1f(u,f),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLES,0,3)}}}function tT(){const s=uu(document.createElement("canvas"),Vp,Hp,()=>{}),e=setInterval(()=>{var t;s&&!s.pronta()||(clearInterval(e),(t=s==null?void 0:s.gl.getExtension("WEBGL_lose_context"))==null||t.loseContext())},250)}function nT(s,e,t,n,i=0){var _;const r=Np(e),o={...r,fim:Math.max(r.fim,i)},[a,c]=Bp(e),l=(_=window.matchMedia)==null?void 0:_.call(window,"(prefers-reduced-motion: reduce)").matches;let u=null,h=null;const d=uu(s,Vp,Hp,(g,p)=>{g.uniform1f(p("uRev"),o.rev),g.uniform1f(p("uFim"),o.fim),g.uniform1f(p("uNivel"),Dp(e)),g.uniform1f(p("uAneis"),o.aneis),g.uniform1f(p("uSem"),n%977/10),g.uniform1f(p("uClarao"),l?.1:.85),g.uniform1fv(p("uTrava[0]"),o.travas),g.uniform3f(p("uA"),...nd(a)),g.uniform3f(p("uB"),...nd(c)),u=p("uSorte"),h=p("uQuebra")});if(!d)return null;const f=document.createElement("canvas");let m="";return{tempos:o,quadro(g){if(!d.pronta())return;const p=Wp(g,o.rev,e,t);p!==m&&(m=p,BE(f,p),d.imagem(f)),d.gl.uniform1f(u,NE(g,o.rev,e,t)),d.gl.uniform1f(h,OE(g,o.rev,e,t)),d.desenhar(g)}}}function iT(s,e,t){var r;const n=(r=window.matchMedia)==null?void 0:r.call(window,"(prefers-reduced-motion: reduce)").matches,i=uu(s,KE,a1(e),(o,a)=>{o.uniform2f(a("uCentro"),0,0),o.uniform2f(a("uNumBox"),...ll),o.uniform2f(a("uTitBox"),...ul),o.uniform2f(a("uTitPos"),0,-.56),o.uniform1f(a("uDur"),e.dur),o.uniform1f(a("uNivel"),e.nivel),o.uniform1f(a("uSemente"),t*7.31%50),o.uniform1f(a("uClarao"),n?.15:e.tipo==="ordem"?.35:.8),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,o.RGBA,o.UNSIGNED_BYTE,c1(t,e.titulo))});return i&&{pronta:i.pronta,desenhar:o=>i.pronta()&&i.desenhar(o)}}function Wp(s,e,t,n){if(n.length>3)return Wp(s,e,t*n.length,[n.reduce((r,o)=>r+o,0)]);if(wa(t,n)&&s>=e-.06&&s<e+ei.fim){const r=PE(Np(t).aneis),o=r.reduce((a,c)=>a+Math.min(1,Math.max(0,(s-e-ei.riso-c)/.2)),0)/r.length;return String(Math.round(Math.pow(t,1-o)))}if(s>=e-.06)return n.join(" \xB7 ");const i=Math.floor(s/Math.max(.05,.16-.02*s));return n.map((r,o)=>1+Math.abs(Math.imul(i*7919+o*104729+31,2654435761)>>>8)%t).join(" \xB7 ")}var Dt=globalThis&&globalThis.__awaiter||function(s,e,t,n){function i(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function a(u){try{l(n.next(u))}catch(h){o(h)}}function c(u){try{l(n.throw(u))}catch(h){o(h)}}function l(u){u.done?r(u.value):i(u.value).then(a,c)}l((n=n.apply(s,e||[])).next())})};class d1{constructor(e){this.messageBus=e}get id(){if(!this.messageBus.userId)throw Error("Unable to get user ID: not ready");return this.messageBus.userId}getSelection(){return Dt(this,void 0,void 0,function*(){const{selection:e}=yield this.messageBus.sendAsync("OBR_PLAYER_GET_SELECTION",{});return e})}select(e,t){return Dt(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_PLAYER_SELECT",{items:e,replace:t})})}deselect(e){return Dt(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_PLAYER_DESELECT",{items:e})})}getName(){return Dt(this,void 0,void 0,function*(){const{name:e}=yield this.messageBus.sendAsync("OBR_PLAYER_GET_NAME",{});return e})}setName(e){return Dt(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_PLAYER_SET_NAME",{name:e})})}getColor(){return Dt(this,void 0,void 0,function*(){const{color:e}=yield this.messageBus.sendAsync("OBR_PLAYER_GET_COLOR",{});return e})}setColor(e){return Dt(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_PLAYER_SET_COLOR",{color:e})})}getSyncView(){return Dt(this,void 0,void 0,function*(){const{syncView:e}=yield this.messageBus.sendAsync("OBR_PLAYER_GET_SYNC_VIEW",{});return e})}setSyncView(e){return Dt(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_PLAYER_SET_SYNC_VIEW",{syncView:e})})}getId(){return Dt(this,void 0,void 0,function*(){const{id:e}=yield this.messageBus.sendAsync("OBR_PLAYER_GET_ID",{});return e})}getRole(){return Dt(this,void 0,void 0,function*(){const{role:e}=yield this.messageBus.sendAsync("OBR_PLAYER_GET_ROLE",{});return e})}getMetadata(){return Dt(this,void 0,void 0,function*(){const{metadata:e}=yield this.messageBus.sendAsync("OBR_PLAYER_GET_METADATA",{});return e})}setMetadata(e){return Dt(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_PLAYER_SET_METADATA",{update:e})})}hasPermission(e){return Dt(this,void 0,void 0,function*(){if((yield this.getRole())==="GM")return!0;const{permissions:n}=yield this.messageBus.sendAsync("OBR_ROOM_GET_PERMISSIONS",{});return n.indexOf(e)>-1})}getConnectionId(){return Dt(this,void 0,void 0,function*(){const{connectionId:e}=yield this.messageBus.sendAsync("OBR_PLAYER_GET_CONNECTION_ID",{});return e})}onChange(e){const t=n=>{e(n.player)};return this.messageBus.send("OBR_PLAYER_SUBSCRIBE",{}),this.messageBus.on("OBR_PLAYER_EVENT_CHANGE",t),()=>{this.messageBus.send("OBR_PLAYER_UNSUBSCRIBE",{}),this.messageBus.off("OBR_PLAYER_EVENT_CHANGE",t)}}}var an=globalThis&&globalThis.__awaiter||function(s,e,t,n){function i(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function a(u){try{l(n.next(u))}catch(h){o(h)}}function c(u){try{l(n.throw(u))}catch(h){o(h)}}function l(u){u.done?r(u.value):i(u.value).then(a,c)}l((n=n.apply(s,e||[])).next())})};class f1{constructor(e){this.messageBus=e}reset(){return an(this,void 0,void 0,function*(){const{transform:e}=yield this.messageBus.sendAsync("OBR_VIEWPORT_RESET",{});return e})}animateTo(e){return an(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_VIEWPORT_ANIMATE_TO",{transform:e})})}animateToBounds(e){return an(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_VIEWPORT_ANIMATE_TO_BOUNDS",{bounds:e})})}getPosition(){return an(this,void 0,void 0,function*(){const{position:e}=yield this.messageBus.sendAsync("OBR_VIEWPORT_GET_POSITION",{});return e})}setPosition(e){return an(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_VIEWPORT_SET_POSITION",{position:e})})}getScale(){return an(this,void 0,void 0,function*(){const{scale:e}=yield this.messageBus.sendAsync("OBR_VIEWPORT_GET_SCALE",{});return e})}setScale(e){return an(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_VIEWPORT_SET_SCALE",{scale:e})})}getWidth(){return an(this,void 0,void 0,function*(){const{width:e}=yield this.messageBus.sendAsync("OBR_VIEWPORT_GET_WIDTH",{});return e})}getHeight(){return an(this,void 0,void 0,function*(){const{height:e}=yield this.messageBus.sendAsync("OBR_VIEWPORT_GET_HEIGHT",{});return e})}transformPoint(e){return an(this,void 0,void 0,function*(){const{point:t}=yield this.messageBus.sendAsync("OBR_VIEWPORT_TRANSFORM_POINT",{point:e});return t})}inverseTransformPoint(e){return an(this,void 0,void 0,function*(){const{point:t}=yield this.messageBus.sendAsync("OBR_VIEWPORT_INVERSE_TRANSFORM_POINT",{point:e});return t})}}function p1(s){return typeof s.id=="string"}var hu={exports:{}},bs=typeof Reflect=="object"?Reflect:null,ad=bs&&typeof bs.apply=="function"?bs.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)},Qo;bs&&typeof bs.ownKeys=="function"?Qo=bs.ownKeys:Object.getOwnPropertySymbols?Qo=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Qo=function(e){return Object.getOwnPropertyNames(e)};function m1(s){console&&console.warn&&console.warn(s)}var qp=Number.isNaN||function(e){return e!==e};function je(){je.init.call(this)}hu.exports=je;hu.exports.once=x1;je.EventEmitter=je;je.prototype._events=void 0;je.prototype._eventsCount=0;je.prototype._maxListeners=void 0;var cd=10;function Ca(s){if(typeof s!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof s)}Object.defineProperty(je,"defaultMaxListeners",{enumerable:!0,get:function(){return cd},set:function(s){if(typeof s!="number"||s<0||qp(s))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+s+".");cd=s}});je.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};je.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||qp(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function Xp(s){return s._maxListeners===void 0?je.defaultMaxListeners:s._maxListeners}je.prototype.getMaxListeners=function(){return Xp(this)};je.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var i=e==="error",r=this._events;if(r!==void 0)i=i&&r.error===void 0;else if(!i)return!1;if(i){var o;if(t.length>0&&(o=t[0]),o instanceof Error)throw o;var a=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw a.context=o,a}var c=r[e];if(c===void 0)return!1;if(typeof c=="function")ad(c,this,t);else for(var l=c.length,u=Kp(c,l),n=0;n<l;++n)ad(u[n],this,t);return!0};function Yp(s,e,t,n){var i,r,o;if(Ca(t),r=s._events,r===void 0?(r=s._events=Object.create(null),s._eventsCount=0):(r.newListener!==void 0&&(s.emit("newListener",e,t.listener?t.listener:t),r=s._events),o=r[e]),o===void 0)o=r[e]=t,++s._eventsCount;else if(typeof o=="function"?o=r[e]=n?[t,o]:[o,t]:n?o.unshift(t):o.push(t),i=Xp(s),i>0&&o.length>i&&!o.warned){o.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");a.name="MaxListenersExceededWarning",a.emitter=s,a.type=e,a.count=o.length,m1(a)}return s}je.prototype.addListener=function(e,t){return Yp(this,e,t,!1)};je.prototype.on=je.prototype.addListener;je.prototype.prependListener=function(e,t){return Yp(this,e,t,!0)};function g1(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function Zp(s,e,t){var n={fired:!1,wrapFn:void 0,target:s,type:e,listener:t},i=g1.bind(n);return i.listener=t,n.wrapFn=i,i}je.prototype.once=function(e,t){return Ca(t),this.on(e,Zp(this,e,t)),this};je.prototype.prependOnceListener=function(e,t){return Ca(t),this.prependListener(e,Zp(this,e,t)),this};je.prototype.removeListener=function(e,t){var n,i,r,o,a;if(Ca(t),i=this._events,i===void 0)return this;if(n=i[e],n===void 0)return this;if(n===t||n.listener===t)--this._eventsCount===0?this._events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeListener",e,n.listener||t));else if(typeof n!="function"){for(r=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){a=n[o].listener,r=o;break}if(r<0)return this;r===0?n.shift():_1(n,r),n.length===1&&(i[e]=n[0]),i.removeListener!==void 0&&this.emit("removeListener",e,a||t)}return this};je.prototype.off=je.prototype.removeListener;je.prototype.removeAllListeners=function(e){var t,n,i;if(n=this._events,n===void 0)return this;if(n.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):n[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete n[e]),this;if(arguments.length===0){var r=Object.keys(n),o;for(i=0;i<r.length;++i)o=r[i],o!=="removeListener"&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(t=n[e],typeof t=="function")this.removeListener(e,t);else if(t!==void 0)for(i=t.length-1;i>=0;i--)this.removeListener(e,t[i]);return this};function $p(s,e,t){var n=s._events;if(n===void 0)return[];var i=n[e];return i===void 0?[]:typeof i=="function"?t?[i.listener||i]:[i]:t?v1(i):Kp(i,i.length)}je.prototype.listeners=function(e){return $p(this,e,!0)};je.prototype.rawListeners=function(e){return $p(this,e,!1)};je.listenerCount=function(s,e){return typeof s.listenerCount=="function"?s.listenerCount(e):Jp.call(s,e)};je.prototype.listenerCount=Jp;function Jp(s){var e=this._events;if(e!==void 0){var t=e[s];if(typeof t=="function")return 1;if(t!==void 0)return t.length}return 0}je.prototype.eventNames=function(){return this._eventsCount>0?Qo(this._events):[]};function Kp(s,e){for(var t=new Array(e),n=0;n<e;++n)t[n]=s[n];return t}function _1(s,e){for(;e+1<s.length;e++)s[e]=s[e+1];s.pop()}function v1(s){for(var e=new Array(s.length),t=0;t<e.length;++t)e[t]=s[t].listener||s[t];return e}function x1(s,e){return new Promise(function(t,n){function i(o){s.removeListener(e,r),n(o)}function r(){typeof s.removeListener=="function"&&s.removeListener("error",i),t([].slice.call(arguments))}jp(s,e,r,{once:!0}),e!=="error"&&y1(s,i,{once:!0})})}function y1(s,e,t){typeof s.on=="function"&&jp(s,"error",e,t)}function jp(s,e,t,n){if(typeof s.on=="function")n.once?s.once(e,t):s.on(e,t);else if(typeof s.addEventListener=="function")s.addEventListener(e,function i(r){n.once&&s.removeEventListener(e,i),t(r)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof s)}let Fo;const M1=new Uint8Array(16);function E1(){if(!Fo&&(Fo=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Fo))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Fo(M1)}const Tt=[];for(let s=0;s<256;++s)Tt.push((s+256).toString(16).slice(1));function b1(s,e=0){return(Tt[s[e+0]]+Tt[s[e+1]]+Tt[s[e+2]]+Tt[s[e+3]]+"-"+Tt[s[e+4]]+Tt[s[e+5]]+"-"+Tt[s[e+6]]+Tt[s[e+7]]+"-"+Tt[s[e+8]]+Tt[s[e+9]]+"-"+Tt[s[e+10]]+Tt[s[e+11]]+Tt[s[e+12]]+Tt[s[e+13]]+Tt[s[e+14]]+Tt[s[e+15]]).toLowerCase()}const T1=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),ld={randomUUID:T1};function S1(s,e,t){if(ld.randomUUID&&!e&&!s)return ld.randomUUID();s=s||{};const n=s.random||(s.rng||E1)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,e){t=t||0;for(let i=0;i<16;++i)e[t+i]=n[i];return e}return b1(n)}class A1 extends hu.exports.EventEmitter{constructor(e,t){super(),this.ready=!1,this.userId=null,this.ref=null,this.handleMessage=n=>{const i=n.data;if(n.origin===this.targetOrigin&&p1(i)){if(i.id==="OBR_READY"){this.ready=!0;const r=i.data;this.ref=r.ref,this.userId=r.userId}this.emit(i.id,i.data)}},this.send=(n,i,r)=>{var o;if(!this.ref)throw Error("Unable to send message: not ready");(o=window.parent)===null||o===void 0||o.postMessage({id:n,data:i,ref:this.ref,nonce:r},this.targetOrigin)},this.sendAsync=(n,i,r=5e3)=>{const o=`_${S1()}`;return this.send(n,i,o),Promise.race([new Promise((a,c)=>{const l=this;function u(d){l.off(`${n}_RESPONSE${o}`,u),l.off(`${n}_ERROR${o}`,h),a(d)}function h(d){l.off(`${n}_RESPONSE${o}`,u),l.off(`${n}_ERROR${o}`,h),c(d)}this.on(`${n}_RESPONSE${o}`,u),this.on(`${n}_ERROR${o}`,h)}),...r>0?[new Promise((a,c)=>window.setTimeout(()=>c(new Error(`Message ${n} took longer than ${r}ms to get a result`)),r))]:[]])},this.roomId=t,this.targetOrigin=e,window.addEventListener("message",this.handleMessage),this.setMaxListeners(100)}destroy(){window.removeEventListener("message",this.handleMessage)}}var ud=globalThis&&globalThis.__awaiter||function(s,e,t,n){function i(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function a(u){try{l(n.next(u))}catch(h){o(h)}}function c(u){try{l(n.throw(u))}catch(h){o(h)}}function l(u){u.done?r(u.value):i(u.value).then(a,c)}l((n=n.apply(s,e||[])).next())})};class w1{constructor(e){this.messageBus=e}show(e,t){return ud(this,void 0,void 0,function*(){const{id:n}=yield this.messageBus.sendAsync("OBR_NOTIFICATION_SHOW",{message:e,variant:t});return n})}close(e){return ud(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_NOTIFICATION_CLOSE",{id:e})})}}var fs=globalThis&&globalThis.__awaiter||function(s,e,t,n){function i(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function a(u){try{l(n.next(u))}catch(h){o(h)}}function c(u){try{l(n.throw(u))}catch(h){o(h)}}function l(u){u.done?r(u.value):i(u.value).then(a,c)}l((n=n.apply(s,e||[])).next())})};class R1{constructor(e){this.messageBus=e}getColor(){return fs(this,void 0,void 0,function*(){const{color:e}=yield this.messageBus.sendAsync("OBR_SCENE_FOG_GET_COLOR",{});return e})}setColor(e){return fs(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_SCENE_FOG_SET_COLOR",{color:e})})}getStrokeWidth(){return fs(this,void 0,void 0,function*(){const{strokeWidth:e}=yield this.messageBus.sendAsync("OBR_SCENE_FOG_GET_STROKE_WIDTH",{});return e})}setStrokeWidth(e){return fs(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_SCENE_FOG_SET_STROKE_WIDTH",{strokeWidth:e})})}getFilled(){return fs(this,void 0,void 0,function*(){const{filled:e}=yield this.messageBus.sendAsync("OBR_SCENE_FOG_GET_FILLED",{});return e})}setFilled(e){return fs(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_SCENE_FOG_SET_FILLED",{filled:e})})}onChange(e){const t=n=>{e(n.fog)};return this.messageBus.send("OBR_SCENE_FOG_SUBSCRIBE",{}),this.messageBus.on("OBR_SCENE_FOG_EVENT_CHANGE",t),()=>{this.messageBus.send("OBR_SCENE_FOG_UNSUBSCRIBE",{}),this.messageBus.off("OBR_SCENE_FOG_EVENT_CHANGE",t)}}}var bt=globalThis&&globalThis.__awaiter||function(s,e,t,n){function i(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function a(u){try{l(n.next(u))}catch(h){o(h)}}function c(u){try{l(n.throw(u))}catch(h){o(h)}}function l(u){u.done?r(u.value):i(u.value).then(a,c)}l((n=n.apply(s,e||[])).next())})};class C1{constructor(e){this.messageBus=e}getDpi(){return bt(this,void 0,void 0,function*(){const{dpi:e}=yield this.messageBus.sendAsync("OBR_SCENE_GRID_GET_DPI",{});return e})}getScale(){return bt(this,void 0,void 0,function*(){return yield this.messageBus.sendAsync("OBR_SCENE_GRID_GET_SCALE",{})})}setScale(e){return bt(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_SCENE_GRID_SET_SCALE",{scale:e})})}getColor(){return bt(this,void 0,void 0,function*(){const{color:e}=yield this.messageBus.sendAsync("OBR_SCENE_GRID_GET_COLOR",{});return e})}setColor(e){return bt(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_SCENE_GRID_SET_COLOR",{color:e})})}getOpacity(){return bt(this,void 0,void 0,function*(){const{opacity:e}=yield this.messageBus.sendAsync("OBR_SCENE_GRID_GET_OPACITY",{});return e})}setOpacity(e){return bt(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_SCENE_GRID_SET_OPACITY",{opacity:e})})}getType(){return bt(this,void 0,void 0,function*(){const{type:e}=yield this.messageBus.sendAsync("OBR_SCENE_GRID_GET_TYPE",{});return e})}setType(e){return bt(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_SCENE_GRID_SET_TYPE",{type:e})})}getLineType(){return bt(this,void 0,void 0,function*(){const{lineType:e}=yield this.messageBus.sendAsync("OBR_SCENE_GRID_GET_LINE_TYPE",{});return e})}setLineType(e){return bt(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_SCENE_GRID_SET_LINE_TYPE",{lineType:e})})}getMeasurement(){return bt(this,void 0,void 0,function*(){const{measurement:e}=yield this.messageBus.sendAsync("OBR_SCENE_GRID_GET_MEASUREMENT",{});return e})}setMeasurement(e){return bt(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_SCENE_GRID_SET_MEASUREMENT",{measurement:e})})}getLineWidth(){return bt(this,void 0,void 0,function*(){const{lineWidth:e}=yield this.messageBus.sendAsync("OBR_SCENE_GRID_GET_LINE_WIDTH",{});return e})}setLineWidth(e){return bt(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_SCENE_GRID_SET_LINE_WIDTH",{lineWidth:e})})}snapPosition(e,t,n,i){return bt(this,void 0,void 0,function*(){const{position:r}=yield this.messageBus.sendAsync("OBR_SCENE_GRID_SNAP_POSITION",{position:e,snappingSensitivity:t,useCorners:n,useCenter:i});return r})}getDistance(e,t){return bt(this,void 0,void 0,function*(){const{distance:n}=yield this.messageBus.sendAsync("OBR_SCENE_GRID_GET_DISTANCE",{from:e,to:t});return n})}onChange(e){const t=n=>{e(n.grid)};return this.messageBus.send("OBR_SCENE_GRID_SUBSCRIBE",{}),this.messageBus.on("OBR_SCENE_GRID_EVENT_CHANGE",t),()=>{this.messageBus.send("OBR_SCENE_GRID_UNSUBSCRIBE",{}),this.messageBus.off("OBR_SCENE_GRID_EVENT_CHANGE",t)}}}var zo=globalThis&&globalThis.__awaiter||function(s,e,t,n){function i(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function a(u){try{l(n.next(u))}catch(h){o(h)}}function c(u){try{l(n.throw(u))}catch(h){o(h)}}function l(u){u.done?r(u.value):i(u.value).then(a,c)}l((n=n.apply(s,e||[])).next())})};class I1{constructor(e){this.messageBus=e}undo(){return zo(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_SCENE_HISTORY_UNDO",{})})}redo(){return zo(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_SCENE_HISTORY_REDO",{})})}canUndo(){return zo(this,void 0,void 0,function*(){const{canUndo:e}=yield this.messageBus.sendAsync("OBR_SCENE_HISTORY_CAN_UNDO",{});return e})}canRedo(){return zo(this,void 0,void 0,function*(){const{canRedo:e}=yield this.messageBus.sendAsync("OBR_SCENE_HISTORY_CAN_REDO",{});return e})}}var L1=Object.defineProperty,hd=Object.getOwnPropertySymbols,P1=Object.prototype.hasOwnProperty,O1=Object.prototype.propertyIsEnumerable,dd=(s,e,t)=>e in s?L1(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,U1=(s,e)=>{for(var t in e||(e={}))P1.call(e,t)&&dd(s,t,e[t]);if(hd)for(var t of hd(e))O1.call(e,t)&&dd(s,t,e[t]);return s},du=Symbol.for("immer-nothing"),ir=Symbol.for("immer-draftable"),Jt=Symbol.for("immer-state");function It(s,...e){throw new Error(`[Immer] minified error nr: ${s}. Full error at: https://bit.ly/3cXEKWf`)}var Rs=Object.getPrototypeOf;function zi(s){return!!s&&!!s[Jt]}function ri(s){var e;return s?Qp(s)||Array.isArray(s)||!!s[ir]||!!((e=s.constructor)!=null&&e[ir])||Bs(s)||qr(s):!1}var D1=Object.prototype.constructor.toString(),fd=new WeakMap;function Qp(s){if(!s||typeof s!="object")return!1;const e=Object.getPrototypeOf(s);if(e===null||e===Object.prototype)return!0;const t=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;if(t===Object)return!0;if(typeof t!="function")return!1;let n=fd.get(t);return n===void 0&&(n=Function.toString.call(t),fd.set(t,n)),n===D1}function Tr(s,e,t=!0){ki(s)===0?(t?Reflect.ownKeys(s):Object.keys(s)).forEach(i=>{e(i,s[i],s)}):s.forEach((n,i)=>e(i,n,s))}function ki(s){const e=s[Jt];return e?e.type_:Array.isArray(s)?1:Bs(s)?2:qr(s)?3:0}function Sr(s,e){return ki(s)===2?s.has(e):Object.prototype.hasOwnProperty.call(s,e)}function vc(s,e){return ki(s)===2?s.get(e):s[e]}function em(s,e,t){const n=ki(s);n===2?s.set(e,t):n===3?s.add(t):s[e]=t}function N1(s,e){return s===e?s!==0||1/s===1/e:s!==s&&e!==e}function Bs(s){return s instanceof Map}function qr(s){return s instanceof Set}function bi(s){return s.copy_||s.base_}function hl(s,e){if(Bs(s))return new Map(s);if(qr(s))return new Set(s);if(Array.isArray(s))return Array.prototype.slice.call(s);const t=Qp(s);if(e===!0||e==="class_only"&&!t){const n=Object.getOwnPropertyDescriptors(s);delete n[Jt];let i=Reflect.ownKeys(n);for(let r=0;r<i.length;r++){const o=i[r],a=n[o];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(n[o]={configurable:!0,writable:!0,enumerable:a.enumerable,value:s[o]})}return Object.create(Rs(s),n)}else{const n=Rs(s);if(n!==null&&t)return U1({},s);const i=Object.create(n);return Object.assign(i,s)}}function fu(s,e=!1){return Ia(s)||zi(s)||!ri(s)||(ki(s)>1&&Object.defineProperties(s,{set:ko,add:ko,clear:ko,delete:ko}),Object.freeze(s),e&&Object.values(s).forEach(t=>fu(t,!0))),s}function B1(){It(2)}var ko={value:B1};function Ia(s){return s===null||typeof s!="object"?!0:Object.isFrozen(s)}var dl={};function Gi(s){const e=dl[s];return e||It(0,s),e}function F1(s,e){dl[s]||(dl[s]=e)}var Ar;function tm(){return Ar}function z1(s,e){return{drafts_:[],parent_:s,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function pd(s,e){e&&(Gi("Patches"),s.patches_=[],s.inversePatches_=[],s.patchListener_=e)}function fl(s){pl(s),s.drafts_.forEach(k1),s.drafts_=null}function pl(s){s===Ar&&(Ar=s.parent_)}function md(s){return Ar=z1(Ar,s)}function k1(s){const e=s[Jt];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function gd(s,e){e.unfinalizedDrafts_=e.drafts_.length;const t=e.drafts_[0];return s!==void 0&&s!==t?(t[Jt].modified_&&(fl(e),It(4)),ri(s)&&(s=ra(e,s),e.parent_||oa(e,s)),e.patches_&&Gi("Patches").generateReplacementPatches_(t[Jt].base_,s,e.patches_,e.inversePatches_)):s=ra(e,t,[]),fl(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),s!==du?s:void 0}function ra(s,e,t){if(Ia(e))return e;const n=s.immer_.shouldUseStrictIteration(),i=e[Jt];if(!i)return Tr(e,(r,o)=>_d(s,i,e,r,o,t),n),e;if(i.scope_!==s)return e;if(!i.modified_)return oa(s,i.base_,!0),i.base_;if(!i.finalized_){i.finalized_=!0,i.scope_.unfinalizedDrafts_--;const r=i.copy_;let o=r,a=!1;i.type_===3&&(o=new Set(r),r.clear(),a=!0),Tr(o,(c,l)=>_d(s,i,r,c,l,t,a),n),oa(s,r,!1),t&&s.patches_&&Gi("Patches").generatePatches_(i,t,s.patches_,s.inversePatches_)}return i.copy_}function _d(s,e,t,n,i,r,o){if(i==null||typeof i!="object"&&!o)return;const a=Ia(i);if(!(a&&!o)){if(zi(i)){const c=r&&e&&e.type_!==3&&!Sr(e.assigned_,n)?r.concat(n):void 0,l=ra(s,i,c);if(em(t,n,l),zi(l))s.canAutoFreeze_=!1;else return}else o&&t.add(i);if(ri(i)&&!a){if(!s.immer_.autoFreeze_&&s.unfinalizedDrafts_<1||e&&e.base_&&e.base_[n]===i&&a)return;ra(s,i),(!e||!e.scope_.parent_)&&typeof n!="symbol"&&(Bs(t)?t.has(n):Object.prototype.propertyIsEnumerable.call(t,n))&&oa(s,i)}}}function oa(s,e,t=!1){!s.parent_&&s.immer_.autoFreeze_&&s.canAutoFreeze_&&fu(e,t)}function G1(s,e){const t=Array.isArray(s),n={type_:t?1:0,scope_:e?e.scope_:tm(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:s,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=n,r=pu;t&&(i=[n],r=wr);const{revoke:o,proxy:a}=Proxy.revocable(i,r);return n.draft_=a,n.revoke_=o,a}var pu={get(s,e){if(e===Jt)return s;const t=bi(s);if(!Sr(t,e))return V1(s,t,e);const n=t[e];return s.finalized_||!ri(n)?n:n===xc(s.base_,e)?(yc(s),s.copy_[e]=gl(n,s)):n},has(s,e){return e in bi(s)},ownKeys(s){return Reflect.ownKeys(bi(s))},set(s,e,t){const n=nm(bi(s),e);if(n!=null&&n.set)return n.set.call(s.draft_,t),!0;if(!s.modified_){const i=xc(bi(s),e),r=i==null?void 0:i[Jt];if(r&&r.base_===t)return s.copy_[e]=t,s.assigned_[e]=!1,!0;if(N1(t,i)&&(t!==void 0||Sr(s.base_,e)))return!0;yc(s),ml(s)}return s.copy_[e]===t&&(t!==void 0||e in s.copy_)||Number.isNaN(t)&&Number.isNaN(s.copy_[e])||(s.copy_[e]=t,s.assigned_[e]=!0),!0},deleteProperty(s,e){return xc(s.base_,e)!==void 0||e in s.base_?(s.assigned_[e]=!1,yc(s),ml(s)):delete s.assigned_[e],s.copy_&&delete s.copy_[e],!0},getOwnPropertyDescriptor(s,e){const t=bi(s),n=Reflect.getOwnPropertyDescriptor(t,e);return n&&{writable:!0,configurable:s.type_!==1||e!=="length",enumerable:n.enumerable,value:t[e]}},defineProperty(){It(11)},getPrototypeOf(s){return Rs(s.base_)},setPrototypeOf(){It(12)}},wr={};Tr(pu,(s,e)=>{wr[s]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});wr.deleteProperty=function(s,e){return wr.set.call(this,s,e,void 0)};wr.set=function(s,e,t){return pu.set.call(this,s[0],e,t,s[0])};function xc(s,e){const t=s[Jt];return(t?bi(t):s)[e]}function V1(s,e,t){var n;const i=nm(e,t);return i?"value"in i?i.value:(n=i.get)==null?void 0:n.call(s.draft_):void 0}function nm(s,e){if(!(e in s))return;let t=Rs(s);for(;t;){const n=Object.getOwnPropertyDescriptor(t,e);if(n)return n;t=Rs(t)}}function ml(s){s.modified_||(s.modified_=!0,s.parent_&&ml(s.parent_))}function yc(s){s.copy_||(s.copy_=hl(s.base_,s.scope_.immer_.useStrictShallowCopy_))}var H1=class{constructor(s){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!0,this.produce=(e,t,n)=>{if(typeof e=="function"&&typeof t!="function"){const r=t;t=e;const o=this;return function(c=r,...l){return o.produce(c,u=>t.call(this,u,...l))}}typeof t!="function"&&It(6),n!==void 0&&typeof n!="function"&&It(7);let i;if(ri(e)){const r=md(this),o=gl(e,void 0);let a=!0;try{i=t(o),a=!1}finally{a?fl(r):pl(r)}return pd(r,n),gd(i,r)}else if(!e||typeof e!="object"){if(i=t(e),i===void 0&&(i=e),i===du&&(i=void 0),this.autoFreeze_&&fu(i,!0),n){const r=[],o=[];Gi("Patches").generateReplacementPatches_(e,i,r,o),n(r,o)}return i}else It(1,e)},this.produceWithPatches=(e,t)=>{if(typeof e=="function")return(o,...a)=>this.produceWithPatches(o,c=>e(c,...a));let n,i;return[this.produce(e,t,(o,a)=>{n=o,i=a}),n,i]},typeof(s==null?void 0:s.autoFreeze)=="boolean"&&this.setAutoFreeze(s.autoFreeze),typeof(s==null?void 0:s.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(s.useStrictShallowCopy),typeof(s==null?void 0:s.useStrictIteration)=="boolean"&&this.setUseStrictIteration(s.useStrictIteration)}createDraft(s){ri(s)||It(8),zi(s)&&(s=W1(s));const e=md(this),t=gl(s,void 0);return t[Jt].isManual_=!0,pl(e),t}finishDraft(s,e){const t=s&&s[Jt];(!t||!t.isManual_)&&It(9);const{scope_:n}=t;return pd(n,e),gd(void 0,n)}setAutoFreeze(s){this.autoFreeze_=s}setUseStrictShallowCopy(s){this.useStrictShallowCopy_=s}setUseStrictIteration(s){this.useStrictIteration_=s}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(s,e){let t;for(t=e.length-1;t>=0;t--){const i=e[t];if(i.path.length===0&&i.op==="replace"){s=i.value;break}}t>-1&&(e=e.slice(t+1));const n=Gi("Patches").applyPatches_;return zi(s)?n(s,e):this.produce(s,i=>n(i,e))}};function gl(s,e){const t=Bs(s)?Gi("MapSet").proxyMap_(s,e):qr(s)?Gi("MapSet").proxySet_(s,e):G1(s,e);return(e?e.scope_:tm()).drafts_.push(t),t}function W1(s){return zi(s)||It(10,s),im(s)}function im(s){if(!ri(s)||Ia(s))return s;const e=s[Jt];let t,n=!0;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,t=hl(s,e.scope_.immer_.useStrictShallowCopy_),n=e.scope_.immer_.shouldUseStrictIteration()}else t=hl(s,!0);return Tr(t,(i,r)=>{em(t,i,im(r))},n),e&&(e.finalized_=!1),t}function mu(){const e="replace",t="add",n="remove";function i(d,f,m,_){switch(d.type_){case 0:case 2:return o(d,f,m,_);case 1:return r(d,f,m,_);case 3:return a(d,f,m,_)}}function r(d,f,m,_){let{base_:g,assigned_:p}=d,x=d.copy_;x.length<g.length&&([g,x]=[x,g],[m,_]=[_,m]);for(let v=0;v<g.length;v++)if(p[v]&&x[v]!==g[v]){const y=f.concat([v]);m.push({op:e,path:y,value:h(x[v])}),_.push({op:e,path:y,value:h(g[v])})}for(let v=g.length;v<x.length;v++){const y=f.concat([v]);m.push({op:t,path:y,value:h(x[v])})}for(let v=x.length-1;g.length<=v;--v){const y=f.concat([v]);_.push({op:n,path:y})}}function o(d,f,m,_){const{base_:g,copy_:p}=d;Tr(d.assigned_,(x,v)=>{const y=vc(g,x),b=vc(p,x),T=v?Sr(g,x)?e:t:n;if(y===b&&T===e)return;const C=f.concat(x);m.push(T===n?{op:T,path:C}:{op:T,path:C,value:b}),_.push(T===t?{op:n,path:C}:T===n?{op:t,path:C,value:h(y)}:{op:e,path:C,value:h(y)})})}function a(d,f,m,_){let{base_:g,copy_:p}=d,x=0;g.forEach(v=>{if(!p.has(v)){const y=f.concat([x]);m.push({op:n,path:y,value:v}),_.unshift({op:t,path:y,value:v})}x++}),x=0,p.forEach(v=>{if(!g.has(v)){const y=f.concat([x]);m.push({op:t,path:y,value:v}),_.unshift({op:n,path:y,value:v})}x++})}function c(d,f,m,_){m.push({op:e,path:[],value:f===du?void 0:f}),_.push({op:e,path:[],value:d})}function l(d,f){return f.forEach(m=>{const{path:_,op:g}=m;let p=d;for(let b=0;b<_.length-1;b++){const T=ki(p);let C=_[b];typeof C!="string"&&typeof C!="number"&&(C=""+C),(T===0||T===1)&&(C==="__proto__"||C==="constructor")&&It(16+3),typeof p=="function"&&C==="prototype"&&It(16+3),p=vc(p,C),typeof p!="object"&&It(16+2,_.join("/"))}const x=ki(p),v=u(m.value),y=_[_.length-1];switch(g){case e:switch(x){case 2:return p.set(y,v);case 3:It(16);default:return p[y]=v}case t:switch(x){case 1:return y==="-"?p.push(v):p.splice(y,0,v);case 2:return p.set(y,v);case 3:return p.add(v);default:return p[y]=v}case n:switch(x){case 1:return p.splice(y,1);case 2:return p.delete(y);case 3:return p.delete(m.value);default:return delete p[y]}default:It(16+1,g)}}),d}function u(d){if(!ri(d))return d;if(Array.isArray(d))return d.map(u);if(Bs(d))return new Map(Array.from(d.entries()).map(([m,_])=>[m,u(_)]));if(qr(d))return new Set(Array.from(d).map(u));const f=Object.create(Rs(d));for(const m in d)f[m]=u(d[m]);return Sr(d,ir)&&(f[ir]=d[ir]),f}function h(d){return zi(d)?u(d):d}F1("Patches",{applyPatches_:l,generatePatches_:i,generateReplacementPatches_:c})}var _l=new H1;_l.produce;var gu=_l.produceWithPatches.bind(_l),ps=globalThis&&globalThis.__awaiter||function(s,e,t,n){function i(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function a(u){try{l(n.next(u))}catch(h){o(h)}}function c(u){try{l(n.throw(u))}catch(h){o(h)}}function l(u){u.done?r(u.value):i(u.value).then(a,c)}l((n=n.apply(s,e||[])).next())})};mu();class q1{constructor(e){this.messageBus=e}getItems(e){return ps(this,void 0,void 0,function*(){if(Array.isArray(e)){const{items:t}=yield this.messageBus.sendAsync("OBR_SCENE_ITEMS_GET_ITEMS",{ids:e});return t}else if(e){const{items:t}=yield this.messageBus.sendAsync("OBR_SCENE_ITEMS_GET_ALL_ITEMS",{});return t.filter(e)}else{const{items:t}=yield this.messageBus.sendAsync("OBR_SCENE_ITEMS_GET_ALL_ITEMS",{});return t}})}isItemArray(e){return Array.isArray(e)&&e.every(t=>typeof t!="string")}updateItems(e,t){return ps(this,void 0,void 0,function*(){let n;this.isItemArray(e)?n=e:n=yield this.getItems(e);const[i,r]=gu(n,t),o=i.map(c=>({id:c.id,type:c.type}));for(const c of r){const[l,u]=c.path;typeof l=="number"&&typeof u=="string"&&(o[l][u]=i[l][u])}const a=o.filter(c=>Object.keys(c).length>2);a.length!==0&&(yield this.messageBus.sendAsync("OBR_SCENE_ITEMS_UPDATE_ITEMS",{updates:a}))})}addItems(e){return ps(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_SCENE_ITEMS_ADD_ITEMS",{items:e})})}deleteItems(e){return ps(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_SCENE_ITEMS_DELETE_ITEMS",{ids:e})})}getItemAttachments(e){return ps(this,void 0,void 0,function*(){const{items:t}=yield this.messageBus.sendAsync("OBR_SCENE_ITEMS_GET_ITEM_ATTACHMENTS",{ids:e});return t})}getItemBounds(e){return ps(this,void 0,void 0,function*(){const{bounds:t}=yield this.messageBus.sendAsync("OBR_SCENE_ITEMS_GET_ITEM_BOUNDS",{ids:e});return t})}onChange(e){const t=n=>{e(n.items)};return this.messageBus.send("OBR_SCENE_ITEMS_SUBSCRIBE",{}),this.messageBus.on("OBR_SCENE_ITEMS_EVENT_CHANGE",t),()=>{this.messageBus.send("OBR_SCENE_ITEMS_UNSUBSCRIBE",{}),this.messageBus.off("OBR_SCENE_ITEMS_EVENT_CHANGE",t)}}}var ms=globalThis&&globalThis.__awaiter||function(s,e,t,n){function i(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function a(u){try{l(n.next(u))}catch(h){o(h)}}function c(u){try{l(n.throw(u))}catch(h){o(h)}}function l(u){u.done?r(u.value):i(u.value).then(a,c)}l((n=n.apply(s,e||[])).next())})};mu();class X1{constructor(e){this.messageBus=e}getItems(e){return ms(this,void 0,void 0,function*(){if(Array.isArray(e)){const{items:t}=yield this.messageBus.sendAsync("OBR_SCENE_LOCAL_GET_ITEMS",{ids:e});return t}else if(e){const{items:t}=yield this.messageBus.sendAsync("OBR_SCENE_LOCAL_GET_ALL_ITEMS",{});return t.filter(e)}else{const{items:t}=yield this.messageBus.sendAsync("OBR_SCENE_LOCAL_GET_ALL_ITEMS",{});return t}})}isItemArray(e){return Array.isArray(e)&&e.every(t=>typeof t!="string")}updateItems(e,t,n){return ms(this,void 0,void 0,function*(){let i;this.isItemArray(e)?i=e:i=yield this.getItems(e);const[r,o]=gu(i,t),a=r.map(l=>({id:l.id,type:l.type}));for(const l of o){const[u,h]=l.path;typeof u=="number"&&typeof h=="string"&&(a[u][h]=r[u][h])}const c=a.filter(l=>Object.keys(l).length>2);c.length!==0&&(yield this.messageBus.sendAsync("OBR_SCENE_LOCAL_UPDATE_ITEMS",{updates:c,fastUpdate:n}))})}addItems(e){return ms(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_SCENE_LOCAL_ADD_ITEMS",{items:e})})}deleteItems(e){return ms(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_SCENE_LOCAL_DELETE_ITEMS",{ids:e})})}getItemAttachments(e){return ms(this,void 0,void 0,function*(){const{items:t}=yield this.messageBus.sendAsync("OBR_SCENE_LOCAL_GET_ITEM_ATTACHMENTS",{ids:e});return t})}getItemBounds(e){return ms(this,void 0,void 0,function*(){const{bounds:t}=yield this.messageBus.sendAsync("OBR_SCENE_LOCAL_GET_ITEM_BOUNDS",{ids:e});return t})}onChange(e){const t=n=>{e(n.items)};return this.messageBus.send("OBR_SCENE_LOCAL_SUBSCRIBE",{}),this.messageBus.on("OBR_SCENE_LOCAL_EVENT_CHANGE",t),()=>{this.messageBus.send("OBR_SCENE_LOCAL_UNSUBSCRIBE",{}),this.messageBus.off("OBR_SCENE_LOCAL_EVENT_CHANGE",t)}}}var Mc=globalThis&&globalThis.__awaiter||function(s,e,t,n){function i(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function a(u){try{l(n.next(u))}catch(h){o(h)}}function c(u){try{l(n.throw(u))}catch(h){o(h)}}function l(u){u.done?r(u.value):i(u.value).then(a,c)}l((n=n.apply(s,e||[])).next())})};class Y1{constructor(e){this.messageBus=e,this.grid=new C1(e),this.fog=new R1(e),this.history=new I1(e),this.items=new q1(e),this.local=new X1(e)}isReady(){return Mc(this,void 0,void 0,function*(){const{ready:e}=yield this.messageBus.sendAsync("OBR_SCENE_IS_READY",{});return e})}onReadyChange(e){const t=n=>{e(n.ready)};return this.messageBus.send("OBR_SCENE_READY_SUBSCRIBE",{}),this.messageBus.on("OBR_SCENE_EVENT_READY_CHANGE",t),()=>{this.messageBus.send("OBR_SCENE_READY_UNSUBSCRIBE",{}),this.messageBus.off("OBR_SCENE_EVENT_READY_CHANGE",t)}}getMetadata(){return Mc(this,void 0,void 0,function*(){const{metadata:e}=yield this.messageBus.sendAsync("OBR_SCENE_GET_METADATA",{});return e})}setMetadata(e){return Mc(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_SCENE_SET_METADATA",{update:e})})}onMetadataChange(e){const t=n=>{e(n.metadata)};return this.messageBus.send("OBR_SCENE_METADATA_SUBSCRIBE",{}),this.messageBus.on("OBR_SCENE_METADATA_EVENT_CHANGE",t),()=>{this.messageBus.send("OBR_SCENE_METADATA_UNSUBSCRIBE",{}),this.messageBus.off("OBR_SCENE_METADATA_EVENT_CHANGE",t)}}}function sm(s){return s.startsWith("http")?s:`${window.location.origin}${s}`}function sr(s){return s.map(e=>Object.assign(Object.assign({},e),{icon:sm(e.icon)}))}function _u(s){return Object.assign(Object.assign({},s),{url:sm(s.url)})}var vd=globalThis&&globalThis.__awaiter||function(s,e,t,n){function i(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function a(u){try{l(n.next(u))}catch(h){o(h)}}function c(u){try{l(n.throw(u))}catch(h){o(h)}}function l(u){u.done?r(u.value):i(u.value).then(a,c)}l((n=n.apply(s,e||[])).next())})};class Z1{constructor(e){this.contextMenus={},this.handleClick=t=>{var n;const i=this.contextMenus[t.id];i&&((n=i.onClick)===null||n===void 0||n.call(i,t.context,t.elementId))},this.messageBus=e,e.on("OBR_CONTEXT_MENU_EVENT_CLICK",this.handleClick)}create(e){return vd(this,void 0,void 0,function*(){this.messageBus.sendAsync("OBR_CONTEXT_MENU_CREATE",{id:e.id,shortcut:e.shortcut,icons:sr(e.icons),embed:e.embed&&_u(e.embed)}),this.contextMenus[e.id]=e})}remove(e){return vd(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_CONTEXT_MENU_REMOVE",{id:e}),delete this.contextMenus[e]})}}var Qt=globalThis&&globalThis.__awaiter||function(s,e,t,n){function i(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function a(u){try{l(n.next(u))}catch(h){o(h)}}function c(u){try{l(n.throw(u))}catch(h){o(h)}}function l(u){u.done?r(u.value):i(u.value).then(a,c)}l((n=n.apply(s,e||[])).next())})};class $1{constructor(e){this.tools={},this.toolActions={},this.toolModes={},this.handleToolClick=t=>{const n=this.tools[t.id];if(n)if(n.onClick){const i=n.onClick(t.context,t.elementId);Promise.resolve(i).then(r=>{r&&this.messageBus.send("OBR_TOOL_ACTIVATE",{id:t.id})})}else this.messageBus.send("OBR_TOOL_ACTIVATE",{id:t.id})},this.handleToolActionClick=t=>{var n;const i=this.toolActions[t.id];i&&((n=i.onClick)===null||n===void 0||n.call(i,t.context,t.elementId))},this.handleToolModeClick=t=>{const n=this.toolModes[t.id];if(n)if(n.onClick){const i=n.onClick(t.context,t.elementId);Promise.resolve(i).then(r=>{r&&this.messageBus.send("OBR_TOOL_MODE_ACTIVATE",{toolId:t.context.activeTool,modeId:t.id})})}else this.messageBus.send("OBR_TOOL_MODE_ACTIVATE",{toolId:t.context.activeTool,modeId:t.id})},this.handleToolModeToolClick=t=>{const n=this.toolModes[t.id];if(n)if(n.onToolClick){const i=n.onToolClick(t.context,t.event);Promise.resolve(i).then(r=>{r&&t.event.target&&!t.event.target.locked&&this.messageBus.sendAsync("OBR_PLAYER_SELECT",{items:[t.event.target.id]})})}else t.event.target&&!t.event.target.locked&&this.messageBus.sendAsync("OBR_PLAYER_SELECT",{items:[t.event.target.id]})},this.handleToolModeToolDoubleClick=t=>{const n=this.toolModes[t.id];if(n)if(n.onToolDoubleClick){const i=n.onToolDoubleClick(t.context,t.event);Promise.resolve(i).then(r=>{r&&t.event.target&&this.messageBus.sendAsync("OBR_PLAYER_SELECT",{items:[t.event.target.id]})})}else t.event.target&&this.messageBus.sendAsync("OBR_PLAYER_SELECT",{items:[t.event.target.id]})},this.handleToolModeToolDown=t=>{var n;const i=this.toolModes[t.id];i&&((n=i.onToolDown)===null||n===void 0||n.call(i,t.context,t.event))},this.handleToolModeToolMove=t=>{var n;const i=this.toolModes[t.id];i&&((n=i.onToolMove)===null||n===void 0||n.call(i,t.context,t.event))},this.handleToolModeToolUp=t=>{var n;const i=this.toolModes[t.id];i&&((n=i.onToolUp)===null||n===void 0||n.call(i,t.context,t.event))},this.handleToolModeToolDragStart=t=>{var n;const i=this.toolModes[t.id];i&&((n=i.onToolDragStart)===null||n===void 0||n.call(i,t.context,t.event))},this.handleToolModeToolDragMove=t=>{var n;const i=this.toolModes[t.id];i&&((n=i.onToolDragMove)===null||n===void 0||n.call(i,t.context,t.event))},this.handleToolModeToolDragEnd=t=>{var n;const i=this.toolModes[t.id];i&&((n=i.onToolDragEnd)===null||n===void 0||n.call(i,t.context,t.event))},this.handleToolModeToolDragCancel=t=>{var n;const i=this.toolModes[t.id];i&&((n=i.onToolDragCancel)===null||n===void 0||n.call(i,t.context,t.event))},this.handleToolModeKeyDown=t=>{var n;const i=this.toolModes[t.id];i&&((n=i.onKeyDown)===null||n===void 0||n.call(i,t.context,t.event))},this.handleToolModeKeyUp=t=>{var n;const i=this.toolModes[t.id];i&&((n=i.onKeyUp)===null||n===void 0||n.call(i,t.context,t.event))},this.handleToolModeActivate=t=>{var n;const i=this.toolModes[t.id];i&&((n=i.onActivate)===null||n===void 0||n.call(i,t.context))},this.handleToolModeDeactivate=t=>{var n;const i=this.toolModes[t.id];i&&((n=i.onDeactivate)===null||n===void 0||n.call(i,t.context))},this.messageBus=e,e.on("OBR_TOOL_EVENT_CLICK",this.handleToolClick),e.on("OBR_TOOL_ACTION_EVENT_CLICK",this.handleToolActionClick),e.on("OBR_TOOL_MODE_EVENT_CLICK",this.handleToolModeClick),e.on("OBR_TOOL_MODE_EVENT_TOOL_CLICK",this.handleToolModeToolClick),e.on("OBR_TOOL_MODE_EVENT_TOOL_DOUBLE_CLICK",this.handleToolModeToolDoubleClick),e.on("OBR_TOOL_MODE_EVENT_TOOL_DOWN",this.handleToolModeToolDown),e.on("OBR_TOOL_MODE_EVENT_TOOL_MOVE",this.handleToolModeToolMove),e.on("OBR_TOOL_MODE_EVENT_TOOL_UP",this.handleToolModeToolUp),e.on("OBR_TOOL_MODE_EVENT_TOOL_DRAG_START",this.handleToolModeToolDragStart),e.on("OBR_TOOL_MODE_EVENT_TOOL_DRAG_MOVE",this.handleToolModeToolDragMove),e.on("OBR_TOOL_MODE_EVENT_TOOL_DRAG_END",this.handleToolModeToolDragEnd),e.on("OBR_TOOL_MODE_EVENT_TOOL_DRAG_CANCEL",this.handleToolModeToolDragCancel),e.on("OBR_TOOL_MODE_EVENT_KEY_DOWN",this.handleToolModeKeyDown),e.on("OBR_TOOL_MODE_EVENT_KEY_UP",this.handleToolModeKeyUp),e.on("OBR_TOOL_MODE_EVENT_ACTIVATE",this.handleToolModeActivate),e.on("OBR_TOOL_MODE_EVENT_DEACTIVATE",this.handleToolModeDeactivate)}create(e){return Qt(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_TOOL_CREATE",{id:e.id,shortcut:e.shortcut,defaultMode:e.defaultMode,defaultMetadata:e.defaultMetadata,icons:sr(e.icons),disabled:e.disabled}),this.tools[e.id]=e})}remove(e){return Qt(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_TOOL_REMOVE",{id:e}),delete this.tools[e]})}activateTool(e){return Qt(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_TOOL_ACTIVATE",{id:e})})}getActiveTool(){return Qt(this,void 0,void 0,function*(){const{id:e}=yield this.messageBus.sendAsync("OBR_TOOL_GET_ACTIVE",{});return e})}onToolChange(e){const t=n=>{e(n.id)};return this.messageBus.send("OBR_TOOL_ACTIVE_SUBSCRIBE",{}),this.messageBus.on("OBR_TOOL_ACTIVE_EVENT_CHANGE",t),()=>{this.messageBus.send("OBR_TOOL_ACTIVE_UNSUBSCRIBE",{}),this.messageBus.off("OBR_TOOL_ACTIVE_EVENT_CHANGE",t)}}getMetadata(e){return Qt(this,void 0,void 0,function*(){const{metadata:t}=yield this.messageBus.sendAsync("OBR_TOOL_GET_METADATA",{id:e});return t})}setMetadata(e,t){return Qt(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_TOOL_SET_METADATA",{toolId:e,update:t})})}createAction(e){return Qt(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_TOOL_ACTION_CREATE",{id:e.id,shortcut:e.shortcut,icons:sr(e.icons),disabled:e.disabled}),this.toolActions[e.id]=e})}removeAction(e){return Qt(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_TOOL_ACTION_REMOVE",{id:e}),delete this.tools[e]})}createMode(e){return Qt(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_TOOL_MODE_CREATE",{id:e.id,shortcut:e.shortcut,icons:sr(e.icons),preventDrag:e.preventDrag,disabled:e.disabled,cursors:e.cursors}),this.toolModes[e.id]=e})}removeMode(e){return Qt(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_TOOL_MODE_REMOVE",{id:e}),delete this.tools[e]})}activateMode(e,t){return Qt(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_TOOL_MODE_ACTIVATE",{toolId:e,modeId:t})})}getActiveToolMode(){return Qt(this,void 0,void 0,function*(){const{id:e}=yield this.messageBus.sendAsync("OBR_TOOL_MODE_GET_ACTIVE",{});return e})}onToolModeChange(e){const t=n=>{e(n.id)};return this.messageBus.send("OBR_TOOL_MODE_ACTIVE_SUBSCRIBE",{}),this.messageBus.on("OBR_TOOL_MODE_ACTIVE_EVENT_CHANGE",t),()=>{this.messageBus.send("OBR_TOOL_MODE_ACTIVE_UNSUBSCRIBE",{}),this.messageBus.off("OBR_TOOL_MODE_ACTIVE_EVENT_CHANGE",t)}}}var gs=globalThis&&globalThis.__awaiter||function(s,e,t,n){function i(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function a(u){try{l(n.next(u))}catch(h){o(h)}}function c(u){try{l(n.throw(u))}catch(h){o(h)}}function l(u){u.done?r(u.value):i(u.value).then(a,c)}l((n=n.apply(s,e||[])).next())})};class J1{constructor(e){this.messageBus=e}open(e){return gs(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_POPOVER_OPEN",Object.assign({},_u(e)))})}close(e){return gs(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_POPOVER_CLOSE",{id:e})})}getWidth(e){return gs(this,void 0,void 0,function*(){const{width:t}=yield this.messageBus.sendAsync("OBR_POPOVER_GET_WIDTH",{id:e});return t})}setWidth(e,t){return gs(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_POPOVER_SET_WIDTH",{id:e,width:t})})}getHeight(e){return gs(this,void 0,void 0,function*(){const{height:t}=yield this.messageBus.sendAsync("OBR_POPOVER_GET_HEIGHT",{id:e});return t})}setHeight(e,t){return gs(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_POPOVER_SET_HEIGHT",{id:e,height:t})})}}var xd=globalThis&&globalThis.__awaiter||function(s,e,t,n){function i(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function a(u){try{l(n.next(u))}catch(h){o(h)}}function c(u){try{l(n.throw(u))}catch(h){o(h)}}function l(u){u.done?r(u.value):i(u.value).then(a,c)}l((n=n.apply(s,e||[])).next())})};class K1{constructor(e){this.messageBus=e}open(e){return xd(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_MODAL_OPEN",Object.assign({},_u(e)))})}close(e){return xd(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_MODAL_CLOSE",{id:e})})}}var Nt=globalThis&&globalThis.__awaiter||function(s,e,t,n){function i(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function a(u){try{l(n.next(u))}catch(h){o(h)}}function c(u){try{l(n.throw(u))}catch(h){o(h)}}function l(u){u.done?r(u.value):i(u.value).then(a,c)}l((n=n.apply(s,e||[])).next())})};class j1{constructor(e){this.messageBus=e}getWidth(){return Nt(this,void 0,void 0,function*(){const{width:e}=yield this.messageBus.sendAsync("OBR_ACTION_GET_WIDTH",{});return e})}setWidth(e){return Nt(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_ACTION_SET_WIDTH",{width:e})})}getHeight(){return Nt(this,void 0,void 0,function*(){const{height:e}=yield this.messageBus.sendAsync("OBR_ACTION_GET_HEIGHT",{});return e})}setHeight(e){return Nt(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_ACTION_SET_HEIGHT",{height:e})})}getBadgeText(){return Nt(this,void 0,void 0,function*(){const{badgeText:e}=yield this.messageBus.sendAsync("OBR_ACTION_GET_BADGE_TEXT",{});return e})}setBadgeText(e){return Nt(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_ACTION_SET_BADGE_TEXT",{badgeText:e})})}getBadgeBackgroundColor(){return Nt(this,void 0,void 0,function*(){const{badgeBackgroundColor:e}=yield this.messageBus.sendAsync("OBR_ACTION_GET_BADGE_BACKGROUND_COLOR",{});return e})}setBadgeBackgroundColor(e){return Nt(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_ACTION_SET_BADGE_BACKGROUND_COLOR",{badgeBackgroundColor:e})})}getIcon(){return Nt(this,void 0,void 0,function*(){const{icon:e}=yield this.messageBus.sendAsync("OBR_ACTION_GET_ICON",{});return e})}setIcon(e){return Nt(this,void 0,void 0,function*(){const t=sr([{icon:e}]);yield this.messageBus.sendAsync("OBR_ACTION_SET_ICON",{icon:t[0].icon})})}getTitle(){return Nt(this,void 0,void 0,function*(){const{title:e}=yield this.messageBus.sendAsync("OBR_ACTION_GET_TITLE",{});return e})}setTitle(e){return Nt(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_ACTION_SET_TITLE",{title:e})})}isOpen(){return Nt(this,void 0,void 0,function*(){const{isOpen:e}=yield this.messageBus.sendAsync("OBR_ACTION_GET_IS_OPEN",{});return e})}open(){return Nt(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_ACTION_OPEN",{})})}close(){return Nt(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_ACTION_CLOSE",{})})}onOpenChange(e){const t=n=>{e(n.isOpen)};return this.messageBus.send("OBR_ACTION_IS_OPEN_SUBSCRIBE",{}),this.messageBus.on("OBR_ACTION_IS_OPEN_EVENT_CHANGE",t),()=>{this.messageBus.send("OBR_IS_OPEN_ACTION_UNSUBSCRIBE",{}),this.messageBus.off("OBR_ACTION_IS_OPEN_EVENT_CHANGE",t)}}}var Q1=globalThis&&globalThis.__awaiter||function(s,e,t,n){function i(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function a(u){try{l(n.next(u))}catch(h){o(h)}}function c(u){try{l(n.throw(u))}catch(h){o(h)}}function l(u){u.done?r(u.value):i(u.value).then(a,c)}l((n=n.apply(s,e||[])).next())})};mu();class eb{constructor(e){this.messageBus=e}startItemInteraction(e){return Q1(this,void 0,void 0,function*(){const{id:t}=yield this.messageBus.sendAsync("OBR_INTERACTION_START_ITEM_INTERACTION",{baseState:e});let n=e;return[o=>{const[a,c]=gu(n,o);return n=a,this.messageBus.send("OBR_INTERACTION_UPDATE_ITEM_INTERACTION",{id:t,patches:c}),a},()=>{this.messageBus.send("OBR_INTERACTION_STOP_ITEM_INTERACTION",{id:t})}]})}}var tb=globalThis&&globalThis.__awaiter||function(s,e,t,n){function i(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function a(u){try{l(n.next(u))}catch(h){o(h)}}function c(u){try{l(n.throw(u))}catch(h){o(h)}}function l(u){u.done?r(u.value):i(u.value).then(a,c)}l((n=n.apply(s,e||[])).next())})};class nb{constructor(e){this.messageBus=e}getPlayers(){return tb(this,void 0,void 0,function*(){const{players:e}=yield this.messageBus.sendAsync("OBR_PARTY_GET_PLAYERS",{});return e})}onChange(e){const t=n=>{e(n.players)};return this.messageBus.send("OBR_PARTY_SUBSCRIBE",{}),this.messageBus.on("OBR_PARTY_EVENT_CHANGE",t),()=>{this.messageBus.send("OBR_PARTY_UNSUBSCRIBE",{}),this.messageBus.off("OBR_PARTY_EVENT_CHANGE",t)}}}var Ec=globalThis&&globalThis.__awaiter||function(s,e,t,n){function i(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function a(u){try{l(n.next(u))}catch(h){o(h)}}function c(u){try{l(n.throw(u))}catch(h){o(h)}}function l(u){u.done?r(u.value):i(u.value).then(a,c)}l((n=n.apply(s,e||[])).next())})};class ib{constructor(e){this.messageBus=e}get id(){return this.messageBus.roomId}getPermissions(){return Ec(this,void 0,void 0,function*(){const{permissions:e}=yield this.messageBus.sendAsync("OBR_ROOM_GET_PERMISSIONS",{});return e})}getMetadata(){return Ec(this,void 0,void 0,function*(){const{metadata:e}=yield this.messageBus.sendAsync("OBR_ROOM_GET_METADATA",{});return e})}setMetadata(e){return Ec(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_ROOM_SET_METADATA",{update:e})})}onMetadataChange(e){const t=n=>{e(n.metadata)};return this.messageBus.send("OBR_ROOM_METADATA_SUBSCRIBE",{}),this.messageBus.on("OBR_ROOM_METADATA_EVENT_CHANGE",t),()=>{this.messageBus.send("OBR_METADATA_ROOM_UNSUBSCRIBE",{}),this.messageBus.off("OBR_ROOM_METADATA_EVENT_CHANGE",t)}}onPermissionsChange(e){const t=n=>{e(n.permissions)};return this.messageBus.send("OBR_ROOM_PERMISSIONS_SUBSCRIBE",{}),this.messageBus.on("OBR_ROOM_PERMISSIONS_EVENT_CHANGE",t),()=>{this.messageBus.send("OBR_PERMISSIONS_ROOM_UNSUBSCRIBE",{}),this.messageBus.off("OBR_ROOM_PERMISSIONS_EVENT_CHANGE",t)}}}var sb=globalThis&&globalThis.__awaiter||function(s,e,t,n){function i(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function a(u){try{l(n.next(u))}catch(h){o(h)}}function c(u){try{l(n.throw(u))}catch(h){o(h)}}function l(u){u.done?r(u.value):i(u.value).then(a,c)}l((n=n.apply(s,e||[])).next())})};class rb{constructor(e){this.messageBus=e}getTheme(){return sb(this,void 0,void 0,function*(){const{theme:e}=yield this.messageBus.sendAsync("OBR_THEME_GET_THEME",{});return e})}onChange(e){const t=n=>{e(n.theme)};return this.messageBus.send("OBR_THEME_SUBSCRIBE",{}),this.messageBus.on("OBR_THEME_EVENT_CHANGE",t),()=>{this.messageBus.send("OBR_THEME_UNSUBSCRIBE",{}),this.messageBus.off("OBR_THEME_EVENT_CHANGE",t)}}}var Go=globalThis&&globalThis.__awaiter||function(s,e,t,n){function i(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function a(u){try{l(n.next(u))}catch(h){o(h)}}function c(u){try{l(n.throw(u))}catch(h){o(h)}}function l(u){u.done?r(u.value):i(u.value).then(a,c)}l((n=n.apply(s,e||[])).next())})};class ob{constructor(e){this.messageBus=e}uploadImages(e,t){return Go(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_ASSETS_UPLOAD_IMAGES",{images:e,typeHint:t})})}uploadScenes(e,t){return Go(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_ASSETS_UPLOAD_SCENES",{scenes:e,disableShowScenes:t})})}downloadImages(e,t,n){return Go(this,void 0,void 0,function*(){const{images:i}=yield this.messageBus.sendAsync("OBR_ASSETS_DOWNLOAD_IMAGES",{multiple:e,defaultSearch:t,typeHint:n},-1);return i})}downloadScenes(e,t){return Go(this,void 0,void 0,function*(){const{scenes:n}=yield this.messageBus.sendAsync("OBR_ASSETS_DOWNLOAD_SCENES",{multiple:e,defaultSearch:t},-1);return n})}}var ab=globalThis&&globalThis.__awaiter||function(s,e,t,n){function i(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function a(u){try{l(n.next(u))}catch(h){o(h)}}function c(u){try{l(n.throw(u))}catch(h){o(h)}}function l(u){u.done?r(u.value):i(u.value).then(a,c)}l((n=n.apply(s,e||[])).next())})};class cb{constructor(e){this.messageBus=e}sendMessage(e,t,n){return ab(this,void 0,void 0,function*(){yield this.messageBus.sendAsync("OBR_BROADCAST_SEND_MESSAGE",{channel:e,data:t,options:n})})}onMessage(e,t){return this.messageBus.send("OBR_BROADCAST_SUBSCRIBE",{channel:e}),this.messageBus.on(`OBR_BROADCAST_MESSAGE_${e}`,t),()=>{this.messageBus.send("OBR_BROADCAST_UNSUBSCRIBE",{channel:e}),this.messageBus.off(`OBR_BROADCAST_MESSAGE_${e}`,t)}}}const lb=typeof atob=="function",vu=typeof Buffer=="function",yd=typeof TextDecoder=="function"?new TextDecoder:void 0;typeof TextEncoder=="function"&&new TextEncoder;const ub="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",hb=Array.prototype.slice.call(ub),Vo=(s=>{let e={};return s.forEach((t,n)=>e[t]=n),e})(hb),db=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,Ii=String.fromCharCode.bind(String),Md=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):s=>new Uint8Array(Array.prototype.slice.call(s,0)),rm=s=>s.replace(/[^A-Za-z0-9\+\/]/g,""),fb=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,pb=s=>{switch(s.length){case 4:var e=(7&s.charCodeAt(0))<<18|(63&s.charCodeAt(1))<<12|(63&s.charCodeAt(2))<<6|63&s.charCodeAt(3),t=e-65536;return Ii((t>>>10)+55296)+Ii((t&1023)+56320);case 3:return Ii((15&s.charCodeAt(0))<<12|(63&s.charCodeAt(1))<<6|63&s.charCodeAt(2));default:return Ii((31&s.charCodeAt(0))<<6|63&s.charCodeAt(1))}},mb=s=>s.replace(fb,pb),gb=s=>{if(s=s.replace(/\s+/g,""),!db.test(s))throw new TypeError("malformed base64.");s+="==".slice(2-(s.length&3));let e,t="",n,i;for(let r=0;r<s.length;)e=Vo[s.charAt(r++)]<<18|Vo[s.charAt(r++)]<<12|(n=Vo[s.charAt(r++)])<<6|(i=Vo[s.charAt(r++)]),t+=n===64?Ii(e>>16&255):i===64?Ii(e>>16&255,e>>8&255):Ii(e>>16&255,e>>8&255,e&255);return t},om=lb?s=>atob(rm(s)):vu?s=>Buffer.from(s,"base64").toString("binary"):gb,_b=vu?s=>Md(Buffer.from(s,"base64")):s=>Md(om(s).split("").map(e=>e.charCodeAt(0))),vb=vu?s=>Buffer.from(s,"base64").toString("utf8"):yd?s=>yd.decode(_b(s)):s=>mb(om(s)),xb=s=>rm(s.replace(/[-_]/g,e=>e=="-"?"+":"/")),yb=s=>vb(xb(s));function Mb(){const e=new URLSearchParams(window.location.search).get("obrref");let t="",n="";if(e){const r=yb(e).split(" ");r.length===2&&(t=r[0],n=r[1])}return{origin:t,roomId:n}}var Ed;(function(s){s[s.MOVE=0]="MOVE",s[s.LINE=1]="LINE",s[s.QUAD=2]="QUAD",s[s.CONIC=3]="CONIC",s[s.CUBIC=4]="CUBIC",s[s.CLOSE=5]="CLOSE"})(Ed||(Ed={}));const vl=Mb(),Et=new A1(vl.origin,vl.roomId),Eb=new f1(Et),bb=new d1(Et),Tb=new nb(Et),Sb=new w1(Et),Ab=new Y1(Et),wb=new Z1(Et),Rb=new $1(Et),Cb=new J1(Et),Ib=new K1(Et),Lb=new j1(Et),Pb=new eb(Et),Ob=new ib(Et),Ub=new rb(Et),Db=new ob(Et),Nb=new cb(Et),sT={onReady:s=>{Et.ready?s():Et.once("OBR_READY",()=>s())},get isReady(){return Et.ready},viewport:Eb,player:bb,party:Tb,notification:Sb,scene:Ab,contextMenu:wb,tool:Rb,popover:Cb,modal:Ib,action:Lb,interaction:Pb,room:Ob,theme:Ub,assets:Db,broadcast:Nb,isAvailable:Boolean(vl.origin)};function rT(s){return`senshi.dados/${s}`}export{_n as $,Jd as A,Ve as B,fe as C,Ff as D,Hn as E,fa as F,Up as G,mm as H,xl as I,gn as J,Bb as K,ft as L,dm as M,Mn as N,ma as O,St as P,Ht as Q,DM as R,NM as S,fm as T,kn as U,S as V,hn as W,Mm as X,bm as Y,Em as Z,Nr as _,Z as a,Hb as a$,Kt as a0,ol as a1,Vn as a2,xp as a3,yp as a4,Mp as a5,ai as a6,op as a7,Ue as a8,qf as a9,El as aA,js as aB,Ct as aC,cr as aD,lr as aE,Gn as aF,yr as aG,Ns as aH,xr as aI,Tn as aJ,dn as aK,Hr as aL,nM as aM,Ts as aN,xn as aO,R0 as aP,sf as aQ,Bf as aR,tM as aS,ti as aT,rr as aU,Cf as aV,Cr as aW,Fm as aX,Be as aY,un as aZ,IE as a_,$e as aa,aa as ab,iM as ac,lM as ad,Qe as ae,xa as af,Ni as ag,ii as ah,ar as ai,Vl as aj,kt as ak,Jl as al,Ye as am,Wf as an,Sn as ao,si as ap,Xf as aq,Yf as ar,xs as as,o0 as at,ya as au,ur as av,Mr as aw,Gl as ax,dt as ay,ta as az,Ls as b,Gb as b0,Wb as b1,iu as b2,mM as b3,uM as b4,Es as b5,ll as b6,ul as b7,a1 as b8,rp as b9,nd as bA,OE as bB,NE as bC,Wp as bD,Yb as bE,HE as bF,wa as bG,ei as bH,DE as bI,PE as bJ,LE as bK,Jb as bL,Kb as bM,cu as bN,TE as bO,kb as bP,bE as bQ,tT as bR,Zb as bS,nT as bT,iT as bU,jc as ba,eT as bb,Ad as bc,Id as bd,Ml as be,l1 as bf,sa as bg,c1 as bh,FE as bi,Cd as bj,jE as bk,zE as bl,$b as bm,kp as bn,Ur as bo,jb as bp,zp as bq,GE as br,Nn as bs,id as bt,Bo as bu,Np as bv,BE as bw,Qb as bx,Hp as by,Dp as bz,At as c,Fl as d,bn as e,SE as f,Vb as g,Aa as h,Op as i,Bp as j,Xb as k,sT as l,qb as m,xy as n,_M as o,Fb as p,zb as q,rT as r,jn as s,da as t,pt as u,Yt as v,Lt as w,kf as x,Sd as y,wp as z};
