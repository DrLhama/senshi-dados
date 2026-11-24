import{c as Gh,t as ud,n as fd,s as dd,r as ol,d as pd}from"./getPluginId.77401bdc.js";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ga="153",md={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},gd={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Wh=0,So=1,qh=2,xd=3,vd=0,uc=1,Xh=2,an=3,Cn=0,It=1,on=2,_d=2,wn=0,mi=1,To=2,Eo=3,Ao=4,Yh=5,li=100,Zh=101,Jh=102,wo=103,Ro=104,$h=200,Kh=201,jh=202,Qh=203,fc=204,dc=205,eu=206,tu=207,nu=208,iu=209,su=210,ru=0,au=1,ou=2,fa=3,cu=4,lu=5,hu=6,uu=7,Js=0,fu=1,du=2,un=0,pu=1,mu=2,gu=3,xu=4,vu=5,xa=300,Hn=301,Gn=302,Ps=303,Ls=304,ss=306,Is=1e3,Et=1001,Us=1002,ut=1003,da=1004,yd=1004,Es=1005,Md=1005,ft=1006,pc=1007,bd=1007,Wn=1008,Sd=1008,Rn=1009,_u=1010,yu=1011,va=1012,mc=1013,An=1014,ln=1015,es=1016,gc=1017,xc=1018,zn=1020,Mu=1021,kt=1023,bu=1024,Su=1025,Bn=1026,_i=1027,Tu=1028,vc=1029,Eu=1030,_c=1031,yc=1033,na=33776,ia=33777,sa=33778,ra=33779,Co=35840,Po=35841,Lo=35842,Io=35843,Au=36196,Uo=37492,Do=37496,No=37808,Fo=37809,Oo=37810,zo=37811,Bo=37812,ko=37813,Vo=37814,Ho=37815,Go=37816,Wo=37817,qo=37818,Xo=37819,Yo=37820,Zo=37821,aa=36492,wu=36283,Jo=36284,$o=36285,Ko=36286,Ru=2200,Cu=2201,Pu=2202,Ds=2300,Ns=2301,oa=2302,ui=2400,fi=2401,Fs=2402,_a=2500,Mc=2501,Td=0,Ed=1,Ad=2,bc=3e3,kn=3001,Lu=3200,Iu=3201,Xn=0,Uu=1,Vn="",Oe="srgb",Qt="srgb-linear",Sc="display-p3",wd=0,ca=7680,Rd=7681,Cd=7682,Pd=7683,Ld=34055,Id=34056,Ud=5386,Dd=512,Nd=513,Fd=514,Od=515,zd=516,Bd=517,kd=518,Du=519,Nu=512,Fu=513,Ou=514,zu=515,Bu=516,ku=517,Vu=518,Hu=519,Os=35044,Vd=35048,Hd=35040,Gd=35045,Wd=35049,qd=35041,Xd=35046,Yd=35050,Zd=35042,Jd="100",jo="300 es",pa=1035,hn=2e3,zs=2001;class Ln{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let cl=1234567;const gi=Math.PI/180,ts=180/Math.PI;function Ht(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(St[r&255]+St[r>>8&255]+St[r>>16&255]+St[r>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]).toLowerCase()}function ct(r,e,t){return Math.max(e,Math.min(t,r))}function Tc(r,e){return(r%e+e)%e}function $d(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Kd(r,e,t){return r!==e?(t-r)/(e-r):0}function As(r,e,t){return(1-t)*r+t*e}function jd(r,e,t,n){return As(r,e,1-Math.exp(-t*n))}function Qd(r,e=1){return e-Math.abs(Tc(r,e*2)-e)}function ep(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function tp(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function np(r,e){return r+Math.floor(Math.random()*(e-r+1))}function ip(r,e){return r+Math.random()*(e-r)}function sp(r){return r*(.5-Math.random())}function rp(r){r!==void 0&&(cl=r);let e=cl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ap(r){return r*gi}function op(r){return r*ts}function Qo(r){return(r&r-1)===0&&r!==0}function Gu(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function ma(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function cp(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),h=a((e+n)/2),f=s((e-n)/2),u=a((e-n)/2),d=s((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":r.set(o*h,c*f,c*u,o*l);break;case"YZY":r.set(c*u,o*h,c*f,o*l);break;case"ZXZ":r.set(c*f,c*u,o*h,o*l);break;case"XZX":r.set(o*h,c*m,c*d,o*l);break;case"YXY":r.set(c*d,o*h,c*m,o*l);break;case"ZYZ":r.set(c*m,c*d,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Vt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ve(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const lp={DEG2RAD:gi,RAD2DEG:ts,generateUUID:Ht,clamp:ct,euclideanModulo:Tc,mapLinear:$d,inverseLerp:Kd,lerp:As,damp:jd,pingpong:Qd,smoothstep:ep,smootherstep:tp,randInt:np,randFloat:ip,randFloatSpread:sp,seededRandom:rp,degToRad:ap,radToDeg:op,isPowerOfTwo:Qo,ceilPowerOfTwo:Gu,floorPowerOfTwo:ma,setQuaternionFromProperEuler:cp,normalize:Ve,denormalize:Vt};class Z{constructor(e=0,t=0){Z.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,n,i,s,a,o,c,l){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l)}set(e,t,n,i,s,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],f=n[7],u=n[2],d=n[5],m=n[8],x=i[0],g=i[3],p=i[6],_=i[1],v=i[4],y=i[7],S=i[2],A=i[5],C=i[8];return s[0]=a*x+o*_+c*S,s[3]=a*g+o*v+c*A,s[6]=a*p+o*y+c*C,s[1]=l*x+h*_+f*S,s[4]=l*g+h*v+f*A,s[7]=l*p+h*y+f*C,s[2]=u*x+d*_+m*S,s[5]=u*g+d*v+m*A,s[8]=u*p+d*y+m*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+i*s*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=h*a-o*l,u=o*c-h*s,d=l*s-a*c,m=t*f+n*u+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return e[0]=f*x,e[1]=(i*l-h*n)*x,e[2]=(o*n-i*a)*x,e[3]=u*x,e[4]=(h*t-i*c)*x,e[5]=(i*s-o*t)*x,e[6]=d*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Va.makeScale(e,t)),this}rotate(e){return this.premultiply(Va.makeRotation(-e)),this}translate(e,t){return this.premultiply(Va.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Va=new ke;function Wu(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}const hp={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Zi(r,e){return new hp[r](e)}function Bs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}const ll={};function ws(r){r in ll||(ll[r]=!0,console.warn(r))}function ji(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ha(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const up=new ke().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),fp=new ke().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function dp(r){return r.convertSRGBToLinear().applyMatrix3(fp)}function pp(r){return r.applyMatrix3(up).convertLinearToSRGB()}const mp={[Qt]:r=>r,[Oe]:r=>r.convertSRGBToLinear(),[Sc]:dp},gp={[Qt]:r=>r,[Oe]:r=>r.convertLinearToSRGB(),[Sc]:pp},qt={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return Qt},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=mp[e],i=gp[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let Ai;class Ec{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ai===void 0&&(Ai=Bs("canvas")),Ai.width=e.width,Ai.height=e.height;const n=Ai.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ai}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Bs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=ji(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ji(t[n]/255)*255):t[n]=ji(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xp=0;class di{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=Ht(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Ga(i[a].image)):s.push(Ga(i[a]))}else s=Ga(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ga(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ec.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vp=0;class dt extends Ln{constructor(e=dt.DEFAULT_IMAGE,t=dt.DEFAULT_MAPPING,n=Et,i=Et,s=ft,a=Wn,o=kt,c=Rn,l=dt.DEFAULT_ANISOTROPY,h=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=Ht(),this.name="",this.source=new di(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Z(0,0),this.repeat=new Z(1,1),this.center=new Z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===kn?Oe:Vn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xa)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Is:e.x=e.x-Math.floor(e.x);break;case Et:e.x=e.x<0?0:1;break;case Us:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Is:e.y=e.y-Math.floor(e.y);break;case Et:e.y=e.y<0?0:1;break;case Us:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Oe?kn:bc}set encoding(e){ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===kn?Oe:Vn}}dt.DEFAULT_IMAGE=null;dt.DEFAULT_MAPPING=xa;dt.DEFAULT_ANISOTROPY=1;class $e{constructor(e=0,t=0,n=0,i=1){$e.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],h=c[4],f=c[8],u=c[1],d=c[5],m=c[9],x=c[2],g=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+x)<.1&&Math.abs(m+g)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,y=(d+1)/2,S=(p+1)/2,A=(h+u)/4,C=(f+x)/4,P=(m+g)/4;return v>y&&v>S?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=A/n,s=C/n):y>S?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=A/i,s=P/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=C/s,i=P/s),this.set(n,i,s,t),this}let _=Math.sqrt((g-m)*(g-m)+(f-x)*(f-x)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(f-x)/_,this.z=(u-h)/_,this.w=Math.acos((l+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class en extends Ln{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $e(0,0,e,t),this.scissorTest=!1,this.viewport=new $e(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(ws("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===kn?Oe:Vn),this.texture=new dt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ft,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new di(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ya extends dt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ut,this.minFilter=ut,this.wrapR=Et,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _p extends en{constructor(e=1,t=1,n=1){super(e,t),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new ya(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Ac extends dt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ut,this.minFilter=ut,this.wrapR=Et,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yp extends en{constructor(e=1,t=1,n=1){super(e,t),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Ac(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Mp extends en{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLMultipleRenderTargets=!0;const s=this.texture;this.texture=[];for(let a=0;a<n;a++)this.texture[a]=s.clone(),this.texture[a].isRenderTargetTexture=!0}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.texture.length;i<s;i++)this.texture[i].image.width=e,this.texture[i].image.height=t,this.texture[i].image.depth=n;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone(),this.texture[t].isRenderTargetTexture=!0;return this}}class Ft{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],f=n[i+3];const u=s[a+0],d=s[a+1],m=s[a+2],x=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f;return}if(o===1){e[t+0]=u,e[t+1]=d,e[t+2]=m,e[t+3]=x;return}if(f!==x||c!==u||l!==d||h!==m){let g=1-o;const p=c*u+l*d+h*m+f*x,_=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const S=Math.sqrt(v),A=Math.atan2(S,p*_);g=Math.sin(g*A)/S,o=Math.sin(o*A)/S}const y=o*_;if(c=c*g+u*y,l=l*g+d*y,h=h*g+m*y,f=f*g+x*y,g===1-o){const S=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=S,l*=S,h*=S,f*=S}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],f=s[a],u=s[a+1],d=s[a+2],m=s[a+3];return e[t]=o*m+h*f+c*d-l*u,e[t+1]=c*m+h*u+l*f-o*d,e[t+2]=l*m+h*d+o*u-c*f,e[t+3]=h*m-o*f-c*u-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),f=o(s/2),u=c(n/2),d=c(i/2),m=c(s/2);switch(a){case"XYZ":this._x=u*h*f+l*d*m,this._y=l*d*f-u*h*m,this._z=l*h*m+u*d*f,this._w=l*h*f-u*d*m;break;case"YXZ":this._x=u*h*f+l*d*m,this._y=l*d*f-u*h*m,this._z=l*h*m-u*d*f,this._w=l*h*f+u*d*m;break;case"ZXY":this._x=u*h*f-l*d*m,this._y=l*d*f+u*h*m,this._z=l*h*m+u*d*f,this._w=l*h*f-u*d*m;break;case"ZYX":this._x=u*h*f-l*d*m,this._y=l*d*f+u*h*m,this._z=l*h*m-u*d*f,this._w=l*h*f+u*d*m;break;case"YZX":this._x=u*h*f+l*d*m,this._y=l*d*f+u*h*m,this._z=l*h*m-u*d*f,this._w=l*h*f-u*d*m;break;case"XZY":this._x=u*h*f-l*d*m,this._y=l*d*f-u*h*m,this._z=l*h*m+u*d*f,this._w=l*h*f+u*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],f=t[10],u=n+o+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-c)*d,this._y=(s-l)*d,this._z=(a-i)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(h-c)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+l)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(s-l)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-i)/d,this._x=(s+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-s*c,this._y=i*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),f=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=a*f+this._w*u,this._x=n*f+this._x*u,this._y=i*f+this._y*u,this._z=s*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(e=0,t=0,n=0){T.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=c*t+a*i-o*n,h=c*n+o*t-s*i,f=c*i+s*n-a*t,u=-s*t-a*n-o*i;return this.x=l*c+u*-s+h*-o-f*-a,this.y=h*c+u*-a+f*-s-l*-o,this.z=f*c+u*-o+l*-a-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Wa.copy(this).projectOnVector(e),this.sub(Wa)}reflect(e){return this.sub(Wa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wa=new T,hl=new Ft;class pn{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),wi.copy(e.boundingBox),wi.applyMatrix4(e.matrixWorld),this.union(wi);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let a=0,o=s.count;a<o;a++)vn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(vn)}else i.boundingBox===null&&i.computeBoundingBox(),wi.copy(i.boundingBox),wi.applyMatrix4(e.matrixWorld),this.union(wi)}const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ds),pr.subVectors(this.max,ds),Ri.subVectors(e.a,ds),Ci.subVectors(e.b,ds),Pi.subVectors(e.c,ds),Un.subVectors(Ci,Ri),Dn.subVectors(Pi,Ci),Qn.subVectors(Ri,Pi);let t=[0,-Un.z,Un.y,0,-Dn.z,Dn.y,0,-Qn.z,Qn.y,Un.z,0,-Un.x,Dn.z,0,-Dn.x,Qn.z,0,-Qn.x,-Un.y,Un.x,0,-Dn.y,Dn.x,0,-Qn.y,Qn.x,0];return!qa(t,Ri,Ci,Pi,pr)||(t=[1,0,0,0,1,0,0,0,1],!qa(t,Ri,Ci,Pi,pr))?!1:(mr.crossVectors(Un,Dn),t=[mr.x,mr.y,mr.z],qa(t,Ri,Ci,Pi,pr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xn=[new T,new T,new T,new T,new T,new T,new T,new T],vn=new T,wi=new pn,Ri=new T,Ci=new T,Pi=new T,Un=new T,Dn=new T,Qn=new T,ds=new T,pr=new T,mr=new T,ei=new T;function qa(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){ei.fromArray(r,s);const o=i.x*Math.abs(ei.x)+i.y*Math.abs(ei.y)+i.z*Math.abs(ei.z),c=e.dot(ei),l=t.dot(ei),h=n.dot(ei);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const bp=new pn,ps=new T,Xa=new T;class tn{constructor(e=new T,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):bp.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ps.subVectors(e,this.center);const t=ps.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ps,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ps.copy(e.center).add(Xa)),this.expandByPoint(ps.copy(e.center).sub(Xa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _n=new T,Ya=new T,gr=new T,Nn=new T,Za=new T,xr=new T,Ja=new T;class rs{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_n.copy(this.origin).addScaledVector(this.direction,t),_n.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ya.copy(e).add(t).multiplyScalar(.5),gr.copy(t).sub(e).normalize(),Nn.copy(this.origin).sub(Ya);const s=e.distanceTo(t)*.5,a=-this.direction.dot(gr),o=Nn.dot(this.direction),c=-Nn.dot(gr),l=Nn.lengthSq(),h=Math.abs(1-a*a);let f,u,d,m;if(h>0)if(f=a*c-o,u=a*o-c,m=s*h,f>=0)if(u>=-m)if(u<=m){const x=1/h;f*=x,u*=x,d=f*(f+a*u+2*o)+u*(a*f+u+2*c)+l}else u=s,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;else u=-s,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;else u<=-m?(f=Math.max(0,-(-a*s+o)),u=f>0?-s:Math.min(Math.max(-s,-c),s),d=-f*f+u*(u+2*c)+l):u<=m?(f=0,u=Math.min(Math.max(-s,-c),s),d=u*(u+2*c)+l):(f=Math.max(0,-(a*s+o)),u=f>0?s:Math.min(Math.max(-s,-c),s),d=-f*f+u*(u+2*c)+l);else u=a>0?-s:s,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Ya).addScaledVector(gr,u),d}intersectSphere(e,t){_n.subVectors(e.center,this.origin);const n=_n.dot(this.direction),i=_n.dot(_n)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),f>=0?(o=(e.min.z-u.z)*f,c=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,c=(e.min.z-u.z)*f),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,_n)!==null}intersectTriangle(e,t,n,i,s){Za.subVectors(t,e),xr.subVectors(n,e),Ja.crossVectors(Za,xr);let a=this.direction.dot(Ja),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Nn.subVectors(this.origin,e);const c=o*this.direction.dot(xr.crossVectors(Nn,xr));if(c<0)return null;const l=o*this.direction.dot(Za.cross(Nn));if(l<0||c+l>a)return null;const h=-o*Nn.dot(Ja);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class De{constructor(e,t,n,i,s,a,o,c,l,h,f,u,d,m,x,g){De.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l,h,f,u,d,m,x,g)}set(e,t,n,i,s,a,o,c,l,h,f,u,d,m,x,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new De().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Li.setFromMatrixColumn(e,0).length(),s=1/Li.setFromMatrixColumn(e,1).length(),a=1/Li.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const u=a*h,d=a*f,m=o*h,x=o*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=d+m*l,t[5]=u-x*l,t[9]=-o*c,t[2]=x-u*l,t[6]=m+d*l,t[10]=a*c}else if(e.order==="YXZ"){const u=c*h,d=c*f,m=l*h,x=l*f;t[0]=u+x*o,t[4]=m*o-d,t[8]=a*l,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=d*o-m,t[6]=x+u*o,t[10]=a*c}else if(e.order==="ZXY"){const u=c*h,d=c*f,m=l*h,x=l*f;t[0]=u-x*o,t[4]=-a*f,t[8]=m+d*o,t[1]=d+m*o,t[5]=a*h,t[9]=x-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const u=a*h,d=a*f,m=o*h,x=o*f;t[0]=c*h,t[4]=m*l-d,t[8]=u*l+x,t[1]=c*f,t[5]=x*l+u,t[9]=d*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const u=a*c,d=a*l,m=o*c,x=o*l;t[0]=c*h,t[4]=x-u*f,t[8]=m*f+d,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=d*f+m,t[10]=u-x*f}else if(e.order==="XZY"){const u=a*c,d=a*l,m=o*c,x=o*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=u*f+x,t[5]=a*h,t[9]=d*f-m,t[2]=m*f-d,t[6]=o*h,t[10]=x*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sp,e,Tp)}lookAt(e,t,n){const i=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),Fn.crossVectors(n,zt),Fn.lengthSq()===0&&(Math.abs(n.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),Fn.crossVectors(n,zt)),Fn.normalize(),vr.crossVectors(zt,Fn),i[0]=Fn.x,i[4]=vr.x,i[8]=zt.x,i[1]=Fn.y,i[5]=vr.y,i[9]=zt.y,i[2]=Fn.z,i[6]=vr.z,i[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],f=n[5],u=n[9],d=n[13],m=n[2],x=n[6],g=n[10],p=n[14],_=n[3],v=n[7],y=n[11],S=n[15],A=i[0],C=i[4],P=i[8],M=i[12],w=i[1],F=i[5],J=i[9],N=i[13],O=i[2],z=i[6],$=i[10],q=i[14],Y=i[3],K=i[7],Q=i[11],fe=i[15];return s[0]=a*A+o*w+c*O+l*Y,s[4]=a*C+o*F+c*z+l*K,s[8]=a*P+o*J+c*$+l*Q,s[12]=a*M+o*N+c*q+l*fe,s[1]=h*A+f*w+u*O+d*Y,s[5]=h*C+f*F+u*z+d*K,s[9]=h*P+f*J+u*$+d*Q,s[13]=h*M+f*N+u*q+d*fe,s[2]=m*A+x*w+g*O+p*Y,s[6]=m*C+x*F+g*z+p*K,s[10]=m*P+x*J+g*$+p*Q,s[14]=m*M+x*N+g*q+p*fe,s[3]=_*A+v*w+y*O+S*Y,s[7]=_*C+v*F+y*z+S*K,s[11]=_*P+v*J+y*$+S*Q,s[15]=_*M+v*N+y*q+S*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],f=e[6],u=e[10],d=e[14],m=e[3],x=e[7],g=e[11],p=e[15];return m*(+s*c*f-i*l*f-s*o*u+n*l*u+i*o*d-n*c*d)+x*(+t*c*d-t*l*u+s*a*u-i*a*d+i*l*h-s*c*h)+g*(+t*l*f-t*o*d-s*a*f+n*a*d+s*o*h-n*l*h)+p*(-i*o*h-t*c*f+t*o*u+i*a*f-n*a*u+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=e[9],u=e[10],d=e[11],m=e[12],x=e[13],g=e[14],p=e[15],_=f*g*l-x*u*l+x*c*d-o*g*d-f*c*p+o*u*p,v=m*u*l-h*g*l-m*c*d+a*g*d+h*c*p-a*u*p,y=h*x*l-m*f*l+m*o*d-a*x*d-h*o*p+a*f*p,S=m*f*c-h*x*c-m*o*u+a*x*u+h*o*g-a*f*g,A=t*_+n*v+i*y+s*S;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=_*C,e[1]=(x*u*s-f*g*s-x*i*d+n*g*d+f*i*p-n*u*p)*C,e[2]=(o*g*s-x*c*s+x*i*l-n*g*l-o*i*p+n*c*p)*C,e[3]=(f*c*s-o*u*s-f*i*l+n*u*l+o*i*d-n*c*d)*C,e[4]=v*C,e[5]=(h*g*s-m*u*s+m*i*d-t*g*d-h*i*p+t*u*p)*C,e[6]=(m*c*s-a*g*s-m*i*l+t*g*l+a*i*p-t*c*p)*C,e[7]=(a*u*s-h*c*s+h*i*l-t*u*l-a*i*d+t*c*d)*C,e[8]=y*C,e[9]=(m*f*s-h*x*s-m*n*d+t*x*d+h*n*p-t*f*p)*C,e[10]=(a*x*s-m*o*s+m*n*l-t*x*l-a*n*p+t*o*p)*C,e[11]=(h*o*s-a*f*s-h*n*l+t*f*l+a*n*d-t*o*d)*C,e[12]=S*C,e[13]=(h*x*i-m*f*i+m*n*u-t*x*u-h*n*g+t*f*g)*C,e[14]=(m*o*i-a*x*i-m*n*c+t*x*c+a*n*g-t*o*g)*C,e[15]=(a*f*i-h*o*i+h*n*c-t*f*c-a*n*u+t*o*u)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,f=o+o,u=s*l,d=s*h,m=s*f,x=a*h,g=a*f,p=o*f,_=c*l,v=c*h,y=c*f,S=n.x,A=n.y,C=n.z;return i[0]=(1-(x+p))*S,i[1]=(d+y)*S,i[2]=(m-v)*S,i[3]=0,i[4]=(d-y)*A,i[5]=(1-(u+p))*A,i[6]=(g+_)*A,i[7]=0,i[8]=(m+v)*C,i[9]=(g-_)*C,i[10]=(1-(u+x))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Li.set(i[0],i[1],i[2]).length();const a=Li.set(i[4],i[5],i[6]).length(),o=Li.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Zt.copy(this);const l=1/s,h=1/a,f=1/o;return Zt.elements[0]*=l,Zt.elements[1]*=l,Zt.elements[2]*=l,Zt.elements[4]*=h,Zt.elements[5]*=h,Zt.elements[6]*=h,Zt.elements[8]*=f,Zt.elements[9]*=f,Zt.elements[10]*=f,t.setFromRotationMatrix(Zt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=hn){const c=this.elements,l=2*s/(t-e),h=2*s/(n-i),f=(t+e)/(t-e),u=(n+i)/(n-i);let d,m;if(o===hn)d=-(a+s)/(a-s),m=-2*a*s/(a-s);else if(o===zs)d=-a/(a-s),m=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=hn){const c=this.elements,l=1/(t-e),h=1/(n-i),f=1/(a-s),u=(t+e)*l,d=(n+i)*h;let m,x;if(o===hn)m=(a+s)*f,x=-2*f;else if(o===zs)m=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=x,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Li=new T,Zt=new De,Sp=new T(0,0,0),Tp=new T(1,1,1),Fn=new T,vr=new T,zt=new T,ul=new De,fl=new Ft;class $s{constructor(e=0,t=0,n=0,i=$s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],f=i[2],u=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ct(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ct(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ul.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ul,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fl.setFromEuler(this),this.setFromQuaternion(fl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$s.DEFAULT_ORDER="XYZ";class Ma{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ep=0;const dl=new T,Ii=new Ft,yn=new De,_r=new T,ms=new T,Ap=new T,wp=new Ft,pl=new T(1,0,0),ml=new T(0,1,0),gl=new T(0,0,1),Rp={type:"added"},xl={type:"removed"};class Je extends Ln{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=Ht(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Je.DEFAULT_UP.clone();const e=new T,t=new $s,n=new Ft,i=new T(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new De},normalMatrix:{value:new ke}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=Je.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ma,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ii.setFromAxisAngle(e,t),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(e,t){return Ii.setFromAxisAngle(e,t),this.quaternion.premultiply(Ii),this}rotateX(e){return this.rotateOnAxis(pl,e)}rotateY(e){return this.rotateOnAxis(ml,e)}rotateZ(e){return this.rotateOnAxis(gl,e)}translateOnAxis(e,t){return dl.copy(e).applyQuaternion(this.quaternion),this.position.add(dl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pl,e)}translateY(e){return this.translateOnAxis(ml,e)}translateZ(e){return this.translateOnAxis(gl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_r.copy(e):_r.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(ms,_r,this.up):yn.lookAt(_r,ms,this.up),this.quaternion.setFromRotationMatrix(yn),i&&(yn.extractRotation(i.matrixWorld),Ii.setFromRotationMatrix(yn),this.quaternion.premultiply(Ii.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Rp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(xl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(yn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,e,Ap),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,wp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),d=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Je.DEFAULT_UP=new T(0,1,0);Je.DEFAULT_MATRIX_AUTO_UPDATE=!0;Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jt=new T,Mn=new T,$a=new T,bn=new T,Ui=new T,Di=new T,vl=new T,Ka=new T,ja=new T,Qa=new T;let yr=!1;class Lt{constructor(e=new T,t=new T,n=new T){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Jt.subVectors(e,t),i.cross(Jt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Jt.subVectors(i,t),Mn.subVectors(n,t),$a.subVectors(e,t);const a=Jt.dot(Jt),o=Jt.dot(Mn),c=Jt.dot($a),l=Mn.dot(Mn),h=Mn.dot($a),f=a*l-o*o;if(f===0)return s.set(-2,-1,-1);const u=1/f,d=(l*c-o*h)*u,m=(a*h-o*c)*u;return s.set(1-d-m,m,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,bn),bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getUV(e,t,n,i,s,a,o,c){return yr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),yr=!0),this.getInterpolation(e,t,n,i,s,a,o,c)}static getInterpolation(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,bn),c.setScalar(0),c.addScaledVector(s,bn.x),c.addScaledVector(a,bn.y),c.addScaledVector(o,bn.z),c}static isFrontFacing(e,t,n,i){return Jt.subVectors(n,t),Mn.subVectors(e,t),Jt.cross(Mn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jt.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),Jt.cross(Mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Lt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Lt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return yr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),yr=!0),Lt.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return Lt.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Lt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Lt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Ui.subVectors(i,n),Di.subVectors(s,n),Ka.subVectors(e,n);const c=Ui.dot(Ka),l=Di.dot(Ka);if(c<=0&&l<=0)return t.copy(n);ja.subVectors(e,i);const h=Ui.dot(ja),f=Di.dot(ja);if(h>=0&&f<=h)return t.copy(i);const u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Ui,a);Qa.subVectors(e,s);const d=Ui.dot(Qa),m=Di.dot(Qa);if(m>=0&&d<=m)return t.copy(s);const x=d*l-c*m;if(x<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(Di,o);const g=h*m-d*f;if(g<=0&&f-h>=0&&d-m>=0)return vl.subVectors(s,i),o=(f-h)/(f-h+(d-m)),t.copy(i).addScaledVector(vl,o);const p=1/(g+x+u);return a=x*p,o=u*p,t.copy(n).addScaledVector(Ui,a).addScaledVector(Di,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Cp=0;class At extends Ln{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=Ht(),this.name="",this.type="Material",this.blending=mi,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=fc,this.blendDst=dc,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=fa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Du,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ca,this.stencilZFail=ca,this.stencilZPass=ca,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==mi&&(n.blending=this.blending),this.side!==Cn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const qu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$t={h:0,s:0,l:0},Mr={h:0,s:0,l:0};function eo(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class de{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Oe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=qt.workingColorSpace){return this.r=e,this.g=t,this.b=n,qt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=qt.workingColorSpace){if(e=Tc(e,1),t=ct(t,0,1),n=ct(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=eo(a,s,e+1/3),this.g=eo(a,s,e),this.b=eo(a,s,e-1/3)}return qt.toWorkingColorSpace(this,i),this}setStyle(e,t=Oe){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Oe){const n=qu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}copyLinearToSRGB(e){return this.r=Ha(e.r),this.g=Ha(e.g),this.b=Ha(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Oe){return qt.fromWorkingColorSpace(Tt.copy(this),e),Math.round(ct(Tt.r*255,0,255))*65536+Math.round(ct(Tt.g*255,0,255))*256+Math.round(ct(Tt.b*255,0,255))}getHexString(e=Oe){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qt.workingColorSpace){qt.fromWorkingColorSpace(Tt.copy(this),t);const n=Tt.r,i=Tt.g,s=Tt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(i-s)/f+(i<s?6:0);break;case i:c=(s-n)/f+2;break;case s:c=(n-i)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=qt.workingColorSpace){return qt.fromWorkingColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=Oe){qt.fromWorkingColorSpace(Tt.copy(this),e);const t=Tt.r,n=Tt.g,i=Tt.b;return e!==Oe?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL($t),$t.h+=e,$t.s+=t,$t.l+=n,this.setHSL($t.h,$t.s,$t.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($t),e.getHSL(Mr);const n=As($t.h,Mr.h,t),i=As($t.s,Mr.s,t),s=As($t.l,Mr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tt=new de;de.NAMES=qu;class Yn extends At{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Js,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const En=Pp();function Pp(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;(l&8388608)===0;)l<<=1,h-=8388608;l&=-8388609,h+=947912704,s[c]=l|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}function Dt(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=ct(r,-65504,65504),En.floatView[0]=r;const e=En.uint32View[0],t=e>>23&511;return En.baseTable[t]+((e&8388607)>>En.shiftTable[t])}function Ss(r){const e=r>>10;return En.uint32View[0]=En.mantissaTable[En.offsetTable[e]+(r&1023)]+En.exponentTable[e],En.floatView[0]}const Lp={toHalfFloat:Dt,fromHalfFloat:Ss},gt=new T,br=new Z;class je{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Os,this.updateRange={offset:0,count:-1},this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyMatrix3(e),this.setXY(t,br.x,br.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ve(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ve(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ve(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ve(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ve(t,this.array),n=Ve(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ve(t,this.array),n=Ve(n,this.array),i=Ve(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ve(t,this.array),n=Ve(n,this.array),i=Ve(i,this.array),s=Ve(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Os&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ip extends je{constructor(e,t,n){super(new Int8Array(e),t,n)}}class Up extends je{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class Dp extends je{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class Np extends je{constructor(e,t,n){super(new Int16Array(e),t,n)}}class wc extends je{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Fp extends je{constructor(e,t,n){super(new Int32Array(e),t,n)}}class Rc extends je{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Op extends je{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=Ss(this.array[e*this.itemSize]);return this.normalized&&(t=Vt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ve(t,this.array)),this.array[e*this.itemSize]=Dt(t),this}getY(e){let t=Ss(this.array[e*this.itemSize+1]);return this.normalized&&(t=Vt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ve(t,this.array)),this.array[e*this.itemSize+1]=Dt(t),this}getZ(e){let t=Ss(this.array[e*this.itemSize+2]);return this.normalized&&(t=Vt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ve(t,this.array)),this.array[e*this.itemSize+2]=Dt(t),this}getW(e){let t=Ss(this.array[e*this.itemSize+3]);return this.normalized&&(t=Vt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ve(t,this.array)),this.array[e*this.itemSize+3]=Dt(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ve(t,this.array),n=Ve(n,this.array)),this.array[e+0]=Dt(t),this.array[e+1]=Dt(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ve(t,this.array),n=Ve(n,this.array),i=Ve(i,this.array)),this.array[e+0]=Dt(t),this.array[e+1]=Dt(n),this.array[e+2]=Dt(i),this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ve(t,this.array),n=Ve(n,this.array),i=Ve(i,this.array),s=Ve(s,this.array)),this.array[e+0]=Dt(t),this.array[e+1]=Dt(n),this.array[e+2]=Dt(i),this.array[e+3]=Dt(s),this}}class xe extends je{constructor(e,t,n){super(new Float32Array(e),t,n)}}class zp extends je{constructor(e,t,n){super(new Float64Array(e),t,n)}}let Bp=0;const Wt=new De,to=new Je,Ni=new T,Bt=new pn,gs=new pn,yt=new T;class He extends Ln{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=Ht(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wu(e)?Rc:wc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wt.makeRotationFromQuaternion(e),this.applyMatrix4(Wt),this}rotateX(e){return Wt.makeRotationX(e),this.applyMatrix4(Wt),this}rotateY(e){return Wt.makeRotationY(e),this.applyMatrix4(Wt),this}rotateZ(e){return Wt.makeRotationZ(e),this.applyMatrix4(Wt),this}translate(e,t,n){return Wt.makeTranslation(e,t,n),this.applyMatrix4(Wt),this}scale(e,t,n){return Wt.makeScale(e,t,n),this.applyMatrix4(Wt),this}lookAt(e){return to.lookAt(e),to.updateMatrix(),this.applyMatrix4(to.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new xe(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Bt.setFromBufferAttribute(s),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new T,1/0);return}if(e){const n=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];gs.setFromBufferAttribute(o),this.morphTargetsRelative?(yt.addVectors(Bt.min,gs.min),Bt.expandByPoint(yt),yt.addVectors(Bt.max,gs.max),Bt.expandByPoint(yt)):(Bt.expandByPoint(gs.min),Bt.expandByPoint(gs.max))}Bt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)yt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(yt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)yt.fromBufferAttribute(o,l),c&&(Ni.fromBufferAttribute(e,l),yt.add(Ni)),i=Math.max(i,n.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new je(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let w=0;w<o;w++)l[w]=new T,h[w]=new T;const f=new T,u=new T,d=new T,m=new Z,x=new Z,g=new Z,p=new T,_=new T;function v(w,F,J){f.fromArray(i,w*3),u.fromArray(i,F*3),d.fromArray(i,J*3),m.fromArray(a,w*2),x.fromArray(a,F*2),g.fromArray(a,J*2),u.sub(f),d.sub(f),x.sub(m),g.sub(m);const N=1/(x.x*g.y-g.x*x.y);!isFinite(N)||(p.copy(u).multiplyScalar(g.y).addScaledVector(d,-x.y).multiplyScalar(N),_.copy(d).multiplyScalar(x.x).addScaledVector(u,-g.x).multiplyScalar(N),l[w].add(p),l[F].add(p),l[J].add(p),h[w].add(_),h[F].add(_),h[J].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let w=0,F=y.length;w<F;++w){const J=y[w],N=J.start,O=J.count;for(let z=N,$=N+O;z<$;z+=3)v(n[z+0],n[z+1],n[z+2])}const S=new T,A=new T,C=new T,P=new T;function M(w){C.fromArray(s,w*3),P.copy(C);const F=l[w];S.copy(F),S.sub(C.multiplyScalar(C.dot(F))).normalize(),A.crossVectors(P,F);const N=A.dot(h[w])<0?-1:1;c[w*4]=S.x,c[w*4+1]=S.y,c[w*4+2]=S.z,c[w*4+3]=N}for(let w=0,F=y.length;w<F;++w){const J=y[w],N=J.start,O=J.count;for(let z=N,$=N+O;z<$;z+=3)M(n[z+0]),M(n[z+1]),M(n[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new je(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const i=new T,s=new T,a=new T,o=new T,c=new T,l=new T,h=new T,f=new T;if(e)for(let u=0,d=e.count;u<d;u+=3){const m=e.getX(u+0),x=e.getX(u+1),g=e.getX(u+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),h.subVectors(a,s),f.subVectors(i,s),h.cross(f),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let u=0,d=t.count;u<d;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),f.subVectors(i,s),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,f=o.normalized,u=new l.constructor(c.length*h);let d=0,m=0;for(let x=0,g=c.length;x<g;x++){o.isInterleavedBufferAttribute?d=c[x]*o.data.stride+o.offset:d=c[x]*h;for(let p=0;p<h;p++)u[m++]=l[d++]}return new je(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new He,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,f=l.length;h<f;h++){const u=l[h],d=e(u,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){const d=l[f];h.push(d.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],f=s[l];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _l=new De,ti=new rs,Sr=new tn,yl=new T,Fi=new T,Oi=new T,zi=new T,no=new T,Tr=new T,Er=new Z,Ar=new Z,wr=new Z,Ml=new T,bl=new T,Sl=new T,Rr=new T,Cr=new T;class bt extends Je{constructor(e=new He,t=new Yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Tr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],f=s[c];h!==0&&(no.fromBufferAttribute(f,e),a?Tr.addScaledVector(no,h):Tr.addScaledVector(no.sub(t),h))}t.add(Tr)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(s),ti.copy(e.ray).recast(e.near),!(Sr.containsPoint(ti.origin)===!1&&(ti.intersectSphere(Sr,yl)===null||ti.origin.distanceToSquared(yl)>(e.far-e.near)**2))&&(_l.copy(s).invert(),ti.copy(e.ray).applyMatrix4(_l),!(n.boundingBox!==null&&ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ti)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=u.length;m<x;m++){const g=u[m],p=a[g.materialIndex],_=Math.max(g.start,d.start),v=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let y=_,S=v;y<S;y+=3){const A=o.getX(y),C=o.getX(y+1),P=o.getX(y+2);i=Pr(this,p,e,n,l,h,f,A,C,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){const _=o.getX(g),v=o.getX(g+1),y=o.getX(g+2);i=Pr(this,a,e,n,l,h,f,_,v,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,x=u.length;m<x;m++){const g=u[m],p=a[g.materialIndex],_=Math.max(g.start,d.start),v=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let y=_,S=v;y<S;y+=3){const A=y,C=y+1,P=y+2;i=Pr(this,p,e,n,l,h,f,A,C,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){const _=g,v=g+1,y=g+2;i=Pr(this,a,e,n,l,h,f,_,v,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function kp(r,e,t,n,i,s,a,o){let c;if(e.side===It?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,e.side===Cn,o),c===null)return null;Cr.copy(o),Cr.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Cr);return l<t.near||l>t.far?null:{distance:l,point:Cr.clone(),object:r}}function Pr(r,e,t,n,i,s,a,o,c,l){r.getVertexPosition(o,Fi),r.getVertexPosition(c,Oi),r.getVertexPosition(l,zi);const h=kp(r,e,t,n,Fi,Oi,zi,Rr);if(h){i&&(Er.fromBufferAttribute(i,o),Ar.fromBufferAttribute(i,c),wr.fromBufferAttribute(i,l),h.uv=Lt.getInterpolation(Rr,Fi,Oi,zi,Er,Ar,wr,new Z)),s&&(Er.fromBufferAttribute(s,o),Ar.fromBufferAttribute(s,c),wr.fromBufferAttribute(s,l),h.uv1=Lt.getInterpolation(Rr,Fi,Oi,zi,Er,Ar,wr,new Z),h.uv2=h.uv1),a&&(Ml.fromBufferAttribute(a,o),bl.fromBufferAttribute(a,c),Sl.fromBufferAttribute(a,l),h.normal=Lt.getInterpolation(Rr,Fi,Oi,zi,Ml,bl,Sl,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new T,materialIndex:0};Lt.getNormal(Fi,Oi,zi,f.normal),h.face=f}return h}class Zn extends He{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],f=[];let u=0,d=0;m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new xe(l,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(f,2));function m(x,g,p,_,v,y,S,A,C,P,M){const w=y/C,F=S/P,J=y/2,N=S/2,O=A/2,z=C+1,$=P+1;let q=0,Y=0;const K=new T;for(let Q=0;Q<$;Q++){const fe=Q*F-N;for(let k=0;k<z;k++){const ee=k*w-J;K[x]=ee*_,K[g]=fe*v,K[p]=O,l.push(K.x,K.y,K.z),K[x]=0,K[g]=0,K[p]=A>0?1:-1,h.push(K.x,K.y,K.z),f.push(k/C),f.push(1-Q/P),q+=1}}for(let Q=0;Q<P;Q++)for(let fe=0;fe<C;fe++){const k=u+fe+z*Q,ee=u+fe+z*(Q+1),te=u+(fe+1)+z*(Q+1),me=u+(fe+1)+z*Q;c.push(k,ee,me),c.push(ee,te,me),Y+=6}o.addGroup(d,Y,M),d+=Y,u+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ns(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Pt(r){const e={};for(let t=0;t<r.length;t++){const n=ns(r[t]);for(const i in n)e[i]=n[i]}return e}function Vp(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Xu(r){return r.getRenderTarget()===null?r.outputColorSpace:Qt}const Yu={clone:ns,merge:Pt};var Hp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dn extends At{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hp,this.fragmentShader=Gp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ns(e.uniforms),this.uniformsGroups=Vp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ba extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=hn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Mt extends ba{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ts*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ts*2*Math.atan(Math.tan(gi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(gi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Bi=-90,ki=1;class Zu extends Je{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const i=new Mt(Bi,ki,e,t);i.layers=this.layers,this.add(i);const s=new Mt(Bi,ki,e,t);s.layers=this.layers,this.add(s);const a=new Mt(Bi,ki,e,t);a.layers=this.layers,this.add(a);const o=new Mt(Bi,ki,e,t);o.layers=this.layers,this.add(o);const c=new Mt(Bi,ki,e,t);c.layers=this.layers,this.add(c);const l=new Mt(Bi,ki,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===hn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,s,a,o,c,l]=this.children,h=e.getRenderTarget(),f=e.toneMapping,u=e.xr.enabled;e.toneMapping=un,e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(h),e.toneMapping=f,e.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class Ks extends dt{constructor(e,t,n,i,s,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Hn,super(e,t,n,i,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ju extends en{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(ws("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===kn?Oe:Vn),this.texture=new Ks(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ft}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Zn(5,5,5),s=new dn({name:"CubemapFromEquirect",uniforms:ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:It,blending:wn});s.uniforms.tEquirect.value=t;const a=new bt(i,s),o=t.minFilter;return t.minFilter===Wn&&(t.minFilter=ft),new Zu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const io=new T,Wp=new T,qp=new ke;class Tn{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=io.subVectors(n,t).cross(Wp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(io),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||qp.getNormalMatrix(e),i=this.coplanarPoint(io).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ni=new tn,Lr=new T;class Sa{constructor(e=new Tn,t=new Tn,n=new Tn,i=new Tn,s=new Tn,a=new Tn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hn){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],f=i[6],u=i[7],d=i[8],m=i[9],x=i[10],g=i[11],p=i[12],_=i[13],v=i[14],y=i[15];if(n[0].setComponents(c-s,u-l,g-d,y-p).normalize(),n[1].setComponents(c+s,u+l,g+d,y+p).normalize(),n[2].setComponents(c+a,u+h,g+m,y+_).normalize(),n[3].setComponents(c-a,u-h,g-m,y-_).normalize(),n[4].setComponents(c-o,u-f,g-x,y-v).normalize(),t===hn)n[5].setComponents(c+o,u+f,g+x,y+v).normalize();else if(t===zs)n[5].setComponents(o,f,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(e){return ni.center.set(0,0,0),ni.radius=.7071067811865476,ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Lr.x=i.normal.x>0?e.max.x:e.min.x,Lr.y=i.normal.y>0?e.max.y:e.min.y,Lr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Lr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $u(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Xp(r,e){const t=e.isWebGL2,n=new WeakMap;function i(l,h){const f=l.array,u=l.usage,d=r.createBuffer();r.bindBuffer(h,d),r.bufferData(h,f,u),l.onUploadCallback();let m;if(f instanceof Float32Array)m=r.FLOAT;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)m=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else m=r.UNSIGNED_SHORT;else if(f instanceof Int16Array)m=r.SHORT;else if(f instanceof Uint32Array)m=r.UNSIGNED_INT;else if(f instanceof Int32Array)m=r.INT;else if(f instanceof Int8Array)m=r.BYTE;else if(f instanceof Uint8Array)m=r.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)m=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:d,type:m,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version}}function s(l,h,f){const u=h.array,d=h.updateRange;r.bindBuffer(f,l),d.count===-1?r.bufferSubData(f,0,u):(t?r.bufferSubData(f,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count):r.bufferSubData(f,d.offset*u.BYTES_PER_ELEMENT,u.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(r.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const u=n.get(l);(!u||u.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=n.get(l);f===void 0?n.set(l,i(l,h)):f.version<l.version&&(s(f.buffer,l,h),f.version=l.version)}return{get:a,remove:o,update:c}}class as extends He{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,f=e/o,u=t/c,d=[],m=[],x=[],g=[];for(let p=0;p<h;p++){const _=p*u-a;for(let v=0;v<l;v++){const y=v*f-s;m.push(y,-_,0),x.push(0,0,1),g.push(v/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<o;_++){const v=_+l*p,y=_+l*(p+1),S=_+1+l*(p+1),A=_+1+l*p;d.push(v,y,A),d.push(y,S,A)}this.setIndex(d),this.setAttribute("position",new xe(m,3)),this.setAttribute("normal",new xe(x,3)),this.setAttribute("uv",new xe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new as(e.width,e.height,e.widthSegments,e.heightSegments)}}var Yp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,$p=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qp="vec3 transformed = vec3( position );",em=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nm=`#ifdef USE_IRIDESCENCE
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
#endif`,im=`#ifdef USE_BUMPMAP
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
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,um=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,fm=`#define PI 3.141592653589793
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
} // validated`,dm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pm=`vec3 transformedNormal = objectNormal;
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
#endif`,mm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_m="gl_FragColor = linearToOutputTexel( gl_FragColor );",ym=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mm=`#ifdef USE_ENVMAP
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
#endif`,bm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sm=`#ifdef USE_ENVMAP
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
#endif`,Tm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Em=`#ifdef USE_ENVMAP
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
#endif`,Am=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pm=`#ifdef USE_GRADIENTMAP
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
}`,Lm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Im=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Um=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nm=`uniform bool receiveShadow;
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
#endif`,Fm=`#ifdef USE_ENVMAP
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
#endif`,Om=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vm=`PhysicalMaterial material;
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
#endif`,Hm=`struct PhysicalMaterial {
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
}`,Gm=`
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
#endif`,Wm=`#if defined( RE_IndirectDiffuse )
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
#endif`,qm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Xm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ym=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Jm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,$m=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Km=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qm=`#if defined( USE_POINTS_UV )
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
#endif`,e0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,t0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,n0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,i0=`#ifdef USE_MORPHNORMALS
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
#endif`,s0=`#ifdef USE_MORPHTARGETS
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
#endif`,r0=`#ifdef USE_MORPHTARGETS
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
#endif`,a0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,o0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,c0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,u0=`#ifdef USE_NORMALMAP
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
#endif`,f0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,d0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,p0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,m0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,g0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,x0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,v0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,y0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,M0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,b0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,S0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,T0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,E0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,A0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,w0=`float getShadowMask() {
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
}`,R0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,C0=`#ifdef USE_SKINNING
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
#endif`,P0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,L0=`#ifdef USE_SKINNING
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
#endif`,I0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,U0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,D0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,N0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,F0=`#ifdef USE_TRANSMISSION
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
#endif`,O0=`#ifdef USE_TRANSMISSION
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
#endif`,z0=`#ifdef USE_UV
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
#endif`,B0=`#ifdef USE_UV
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
#endif`,k0=`#ifdef USE_UV
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
#endif`,V0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const H0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,G0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,X0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Z0=`#include <common>
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
}`,J0=`#if DEPTH_PACKING == 3200
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
}`,$0=`#define DISTANCE
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
}`,K0=`#define DISTANCE
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
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Q0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,eg=`uniform float scale;
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
}`,tg=`uniform vec3 diffuse;
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
}`,ng=`#include <common>
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
}`,ig=`uniform vec3 diffuse;
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
}`,sg=`#define LAMBERT
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
}`,rg=`#define LAMBERT
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
}`,ag=`#define MATCAP
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
}`,og=`#define MATCAP
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
}`,cg=`#define NORMAL
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
}`,lg=`#define NORMAL
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
}`,hg=`#define PHONG
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
}`,ug=`#define PHONG
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
}`,fg=`#define STANDARD
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
}`,dg=`#define STANDARD
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
}`,pg=`#define TOON
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
}`,mg=`#define TOON
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
}`,gg=`uniform float size;
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
}`,xg=`uniform vec3 diffuse;
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
}`,vg=`#include <common>
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
}`,_g=`uniform vec3 color;
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
}`,yg=`uniform float rotation;
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
}`,Mg=`uniform vec3 diffuse;
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
}`,Be={alphamap_fragment:Yp,alphamap_pars_fragment:Zp,alphatest_fragment:Jp,alphatest_pars_fragment:$p,aomap_fragment:Kp,aomap_pars_fragment:jp,begin_vertex:Qp,beginnormal_vertex:em,bsdfs:tm,iridescence_fragment:nm,bumpmap_pars_fragment:im,clipping_planes_fragment:sm,clipping_planes_pars_fragment:rm,clipping_planes_pars_vertex:am,clipping_planes_vertex:om,color_fragment:cm,color_pars_fragment:lm,color_pars_vertex:hm,color_vertex:um,common:fm,cube_uv_reflection_fragment:dm,defaultnormal_vertex:pm,displacementmap_pars_vertex:mm,displacementmap_vertex:gm,emissivemap_fragment:xm,emissivemap_pars_fragment:vm,encodings_fragment:_m,encodings_pars_fragment:ym,envmap_fragment:Mm,envmap_common_pars_fragment:bm,envmap_pars_fragment:Sm,envmap_pars_vertex:Tm,envmap_physical_pars_fragment:Fm,envmap_vertex:Em,fog_vertex:Am,fog_pars_vertex:wm,fog_fragment:Rm,fog_pars_fragment:Cm,gradientmap_pars_fragment:Pm,lightmap_fragment:Lm,lightmap_pars_fragment:Im,lights_lambert_fragment:Um,lights_lambert_pars_fragment:Dm,lights_pars_begin:Nm,lights_toon_fragment:Om,lights_toon_pars_fragment:zm,lights_phong_fragment:Bm,lights_phong_pars_fragment:km,lights_physical_fragment:Vm,lights_physical_pars_fragment:Hm,lights_fragment_begin:Gm,lights_fragment_maps:Wm,lights_fragment_end:qm,logdepthbuf_fragment:Xm,logdepthbuf_pars_fragment:Ym,logdepthbuf_pars_vertex:Zm,logdepthbuf_vertex:Jm,map_fragment:$m,map_pars_fragment:Km,map_particle_fragment:jm,map_particle_pars_fragment:Qm,metalnessmap_fragment:e0,metalnessmap_pars_fragment:t0,morphcolor_vertex:n0,morphnormal_vertex:i0,morphtarget_pars_vertex:s0,morphtarget_vertex:r0,normal_fragment_begin:a0,normal_fragment_maps:o0,normal_pars_fragment:c0,normal_pars_vertex:l0,normal_vertex:h0,normalmap_pars_fragment:u0,clearcoat_normal_fragment_begin:f0,clearcoat_normal_fragment_maps:d0,clearcoat_pars_fragment:p0,iridescence_pars_fragment:m0,output_fragment:g0,packing:x0,premultiplied_alpha_fragment:v0,project_vertex:_0,dithering_fragment:y0,dithering_pars_fragment:M0,roughnessmap_fragment:b0,roughnessmap_pars_fragment:S0,shadowmap_pars_fragment:T0,shadowmap_pars_vertex:E0,shadowmap_vertex:A0,shadowmask_pars_fragment:w0,skinbase_vertex:R0,skinning_pars_vertex:C0,skinning_vertex:P0,skinnormal_vertex:L0,specularmap_fragment:I0,specularmap_pars_fragment:U0,tonemapping_fragment:D0,tonemapping_pars_fragment:N0,transmission_fragment:F0,transmission_pars_fragment:O0,uv_pars_fragment:z0,uv_pars_vertex:B0,uv_vertex:k0,worldpos_vertex:V0,background_vert:H0,background_frag:G0,backgroundCube_vert:W0,backgroundCube_frag:q0,cube_vert:X0,cube_frag:Y0,depth_vert:Z0,depth_frag:J0,distanceRGBA_vert:$0,distanceRGBA_frag:K0,equirect_vert:j0,equirect_frag:Q0,linedashed_vert:eg,linedashed_frag:tg,meshbasic_vert:ng,meshbasic_frag:ig,meshlambert_vert:sg,meshlambert_frag:rg,meshmatcap_vert:ag,meshmatcap_frag:og,meshnormal_vert:cg,meshnormal_frag:lg,meshphong_vert:hg,meshphong_frag:ug,meshphysical_vert:fg,meshphysical_frag:dg,meshtoon_vert:pg,meshtoon_frag:mg,points_vert:gg,points_frag:xg,shadow_vert:vg,shadow_frag:_g,sprite_vert:yg,sprite_frag:Mg},oe={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Z(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new Z(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},jt={basic:{uniforms:Pt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Pt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new de(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Pt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Pt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Pt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new de(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Pt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Pt([oe.points,oe.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Pt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Pt([oe.common,oe.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Pt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Pt([oe.sprite,oe.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Pt([oe.common,oe.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Pt([oe.lights,oe.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};jt.physical={uniforms:Pt([jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Z(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Z},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Ir={r:0,b:0,g:0};function bg(r,e,t,n,i,s,a){const o=new de(0);let c=s===!0?0:1,l,h,f=null,u=0,d=null;function m(g,p){let _=!1,v=p.isScene===!0?p.background:null;switch(v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?x(o,c):v&&v.isColor&&(x(v,1),_=!0),r.xr.getEnvironmentBlendMode()){case"opaque":_=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,a),_=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,a),_=!0;break}(r.autoClear||_)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ss)?(h===void 0&&(h=new bt(new Zn(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:ns(jt.backgroundCube.uniforms),vertexShader:jt.backgroundCube.vertexShader,fragmentShader:jt.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=v.colorSpace!==Oe,(f!==v||u!==v.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,f=v,u=v.version,d=r.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new bt(new as(2,2),new dn({name:"BackgroundMaterial",uniforms:ns(jt.background.uniforms),vertexShader:jt.background.vertexShader,fragmentShader:jt.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=v.colorSpace!==Oe,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||u!==v.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,f=v,u=v.version,d=r.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function x(g,p){g.getRGB(Ir,Xu(r)),n.buffers.color.setClear(Ir.r,Ir.g,Ir.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(g,p=1){o.set(g),c=p,x(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,x(o,c)},render:m}}function Sg(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},c=g(null);let l=c,h=!1;function f(O,z,$,q,Y){let K=!1;if(a){const Q=x(q,$,z);l!==Q&&(l=Q,d(l.object)),K=p(O,q,$,Y),K&&_(O,q,$,Y)}else{const Q=z.wireframe===!0;(l.geometry!==q.id||l.program!==$.id||l.wireframe!==Q)&&(l.geometry=q.id,l.program=$.id,l.wireframe=Q,K=!0)}Y!==null&&t.update(Y,r.ELEMENT_ARRAY_BUFFER),(K||h)&&(h=!1,P(O,z,$,q),Y!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function u(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(O){return n.isWebGL2?r.bindVertexArray(O):s.bindVertexArrayOES(O)}function m(O){return n.isWebGL2?r.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function x(O,z,$){const q=$.wireframe===!0;let Y=o[O.id];Y===void 0&&(Y={},o[O.id]=Y);let K=Y[z.id];K===void 0&&(K={},Y[z.id]=K);let Q=K[q];return Q===void 0&&(Q=g(u()),K[q]=Q),Q}function g(O){const z=[],$=[],q=[];for(let Y=0;Y<i;Y++)z[Y]=0,$[Y]=0,q[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:$,attributeDivisors:q,object:O,attributes:{},index:null}}function p(O,z,$,q){const Y=l.attributes,K=z.attributes;let Q=0;const fe=$.getAttributes();for(const k in fe)if(fe[k].location>=0){const te=Y[k];let me=K[k];if(me===void 0&&(k==="instanceMatrix"&&O.instanceMatrix&&(me=O.instanceMatrix),k==="instanceColor"&&O.instanceColor&&(me=O.instanceColor)),te===void 0||te.attribute!==me||me&&te.data!==me.data)return!0;Q++}return l.attributesNum!==Q||l.index!==q}function _(O,z,$,q){const Y={},K=z.attributes;let Q=0;const fe=$.getAttributes();for(const k in fe)if(fe[k].location>=0){let te=K[k];te===void 0&&(k==="instanceMatrix"&&O.instanceMatrix&&(te=O.instanceMatrix),k==="instanceColor"&&O.instanceColor&&(te=O.instanceColor));const me={};me.attribute=te,te&&te.data&&(me.data=te.data),Y[k]=me,Q++}l.attributes=Y,l.attributesNum=Q,l.index=q}function v(){const O=l.newAttributes;for(let z=0,$=O.length;z<$;z++)O[z]=0}function y(O){S(O,0)}function S(O,z){const $=l.newAttributes,q=l.enabledAttributes,Y=l.attributeDivisors;$[O]=1,q[O]===0&&(r.enableVertexAttribArray(O),q[O]=1),Y[O]!==z&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,z),Y[O]=z)}function A(){const O=l.newAttributes,z=l.enabledAttributes;for(let $=0,q=z.length;$<q;$++)z[$]!==O[$]&&(r.disableVertexAttribArray($),z[$]=0)}function C(O,z,$,q,Y,K,Q){Q===!0?r.vertexAttribIPointer(O,z,$,Y,K):r.vertexAttribPointer(O,z,$,q,Y,K)}function P(O,z,$,q){if(n.isWebGL2===!1&&(O.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const Y=q.attributes,K=$.getAttributes(),Q=z.defaultAttributeValues;for(const fe in K){const k=K[fe];if(k.location>=0){let ee=Y[fe];if(ee===void 0&&(fe==="instanceMatrix"&&O.instanceMatrix&&(ee=O.instanceMatrix),fe==="instanceColor"&&O.instanceColor&&(ee=O.instanceColor)),ee!==void 0){const te=ee.normalized,me=ee.itemSize,ge=t.get(ee);if(ge===void 0)continue;const be=ge.buffer,Ne=ge.type,Ce=ge.bytesPerElement,Ke=n.isWebGL2===!0&&(Ne===r.INT||Ne===r.UNSIGNED_INT||ee.gpuType===mc);if(ee.isInterleavedBufferAttribute){const Le=ee.data,L=Le.stride,se=ee.offset;if(Le.isInstancedInterleavedBuffer){for(let X=0;X<k.locationSize;X++)S(k.location+X,Le.meshPerAttribute);O.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Le.meshPerAttribute*Le.count)}else for(let X=0;X<k.locationSize;X++)y(k.location+X);r.bindBuffer(r.ARRAY_BUFFER,be);for(let X=0;X<k.locationSize;X++)C(k.location+X,me/k.locationSize,Ne,te,L*Ce,(se+me/k.locationSize*X)*Ce,Ke)}else{if(ee.isInstancedBufferAttribute){for(let Le=0;Le<k.locationSize;Le++)S(k.location+Le,ee.meshPerAttribute);O.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Le=0;Le<k.locationSize;Le++)y(k.location+Le);r.bindBuffer(r.ARRAY_BUFFER,be);for(let Le=0;Le<k.locationSize;Le++)C(k.location+Le,me/k.locationSize,Ne,te,me*Ce,me/k.locationSize*Le*Ce,Ke)}}else if(Q!==void 0){const te=Q[fe];if(te!==void 0)switch(te.length){case 2:r.vertexAttrib2fv(k.location,te);break;case 3:r.vertexAttrib3fv(k.location,te);break;case 4:r.vertexAttrib4fv(k.location,te);break;default:r.vertexAttrib1fv(k.location,te)}}}}A()}function M(){J();for(const O in o){const z=o[O];for(const $ in z){const q=z[$];for(const Y in q)m(q[Y].object),delete q[Y];delete z[$]}delete o[O]}}function w(O){if(o[O.id]===void 0)return;const z=o[O.id];for(const $ in z){const q=z[$];for(const Y in q)m(q[Y].object),delete q[Y];delete z[$]}delete o[O.id]}function F(O){for(const z in o){const $=o[z];if($[O.id]===void 0)continue;const q=$[O.id];for(const Y in q)m(q[Y].object),delete q[Y];delete $[O.id]}}function J(){N(),h=!0,l!==c&&(l=c,d(l.object))}function N(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:J,resetDefaultState:N,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:F,initAttributes:v,enableAttribute:y,disableUnusedAttributes:A}}function Tg(r,e,t,n){const i=n.isWebGL2;let s;function a(l){s=l}function o(l,h){r.drawArrays(s,l,h),t.update(h,s,1)}function c(l,h,f){if(f===0)return;let u,d;if(i)u=r,d="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[d](s,l,h,f),t.update(h,s,f)}this.setMode=a,this.render=o,this.renderInstances=c}function Eg(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),g=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),_=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=u>0,y=a||e.has("OES_texture_float"),S=v&&y,A=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:m,maxAttributes:x,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:S,maxSamples:A}}function Ag(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Tn,o=new ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||i;return i=u,n=f.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){const m=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,p=r.get(f);if(!i||m===null||m.length===0||s&&!g)s?h(null):l();else{const _=s?0:n,v=_*4;let y=p.clippingState||null;c.value=y,y=h(m,u,v,d);for(let S=0;S!==v;++S)y[S]=t[S];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,d,m){const x=f!==null?f.length:0;let g=null;if(x!==0){if(g=c.value,m!==!0||g===null){const p=d+x*4,_=u.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,y=d;v!==x;++v,y+=4)a.copy(f[v]).applyMatrix4(_,o),a.normal.toArray(g,y),g[y+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function wg(r){let e=new WeakMap;function t(a,o){return o===Ps?a.mapping=Hn:o===Ls&&(a.mapping=Gn),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Ps||o===Ls)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Ju(c.height/2);return l.fromEquirectangularTexture(r,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Ta extends ba{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ji=4,Tl=[.125,.215,.35,.446,.526,.582],hi=20,so=new Ta,El=new de;let ro=null;const ci=(1+Math.sqrt(5))/2,Vi=1/ci,Al=[new T(1,1,1),new T(-1,1,1),new T(1,1,-1),new T(-1,1,-1),new T(0,ci,Vi),new T(0,ci,-Vi),new T(Vi,0,ci),new T(-Vi,0,ci),new T(ci,Vi,0),new T(-ci,Vi,0)];class ec{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ro=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ro),e.scissorTest=!1,Ur(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hn||e.mapping===Gn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ro=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ft,minFilter:ft,generateMipmaps:!1,type:es,format:kt,colorSpace:Qt,depthBuffer:!1},i=wl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rg(s)),this._blurMaterial=Cg(s,e,t)}return i}_compileMaterial(e){const t=new bt(this._lodPlanes[0],e);this._renderer.compile(t,so)}_sceneToCubeUV(e,t,n,i){const o=new Mt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(El),h.toneMapping=un,h.autoClear=!1;const d=new Yn({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),m=new bt(new Zn,d);let x=!1;const g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,x=!0):(d.color.copy(El),x=!0);for(let p=0;p<6;p++){const _=p%3;_===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):_===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const v=this._cubeSize;Ur(i,_*v,p>2?v:0,v,v),h.setRenderTarget(i),x&&h.render(m,o),h.render(e,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=u,h.autoClear=f,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Hn||e.mapping===Gn;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rl());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new bt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Ur(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,so)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Al[(i-1)%Al.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new bt(this._lodPlanes[i],l),u=l.uniforms,d=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*hi-1),x=s/m,g=isFinite(s)?1+Math.floor(h*x):hi;g>hi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${hi}`);const p=[];let _=0;for(let C=0;C<hi;++C){const P=C/x,M=Math.exp(-P*P/2);p.push(M),C===0?_+=M:C<g&&(_+=2*M)}for(let C=0;C<p.length;C++)p[C]=p[C]/_;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:v}=this;u.dTheta.value=m,u.mipInt.value=v-n;const y=this._sizeLods[i],S=3*y*(i>v-Ji?i-v+Ji:0),A=4*(this._cubeSize-y);Ur(t,S,A,3*y,2*y),c.setRenderTarget(t),c.render(f,so)}}function Rg(r){const e=[],t=[],n=[];let i=r;const s=r-Ji+1+Tl.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>r-Ji?c=Tl[a-r+Ji-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,f=1+l,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,m=6,x=3,g=2,p=1,_=new Float32Array(x*m*d),v=new Float32Array(g*m*d),y=new Float32Array(p*m*d);for(let A=0;A<d;A++){const C=A%3*2/3-1,P=A>2?0:-1,M=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];_.set(M,x*m*A),v.set(u,g*m*A);const w=[A,A,A,A,A,A];y.set(w,p*m*A)}const S=new He;S.setAttribute("position",new je(_,x)),S.setAttribute("uv",new je(v,g)),S.setAttribute("faceIndex",new je(y,p)),e.push(S),i>Ji&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function wl(r,e,t){const n=new en(r,e,t);return n.texture.mapping=ss,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ur(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Cg(r,e,t){const n=new Float32Array(hi),i=new T(0,1,0);return new dn({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Cc(),fragmentShader:`

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
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Rl(){return new dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cc(),fragmentShader:`

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
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Cl(){return new dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Cc(){return`

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
	`}function Pg(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Ps||c===Ls,h=c===Hn||c===Gn;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new ec(r)),f=l?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(l&&f&&f.height>0||h&&f&&i(f)){t===null&&(t=new ec(r));const u=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,u),o.addEventListener("dispose",s),u.texture}else return null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Lg(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ig(r,e,t,n){const i={},s=new WeakMap;function a(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const m in u.attributes)e.remove(u.attributes[m]);for(const m in u.morphAttributes){const x=u.morphAttributes[m];for(let g=0,p=x.length;g<p;g++)e.remove(x[g])}u.removeEventListener("dispose",a),delete i[u.id];const d=s.get(u);d&&(e.remove(d),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function c(f){const u=f.attributes;for(const m in u)e.update(u[m],r.ARRAY_BUFFER);const d=f.morphAttributes;for(const m in d){const x=d[m];for(let g=0,p=x.length;g<p;g++)e.update(x[g],r.ARRAY_BUFFER)}}function l(f){const u=[],d=f.index,m=f.attributes.position;let x=0;if(d!==null){const _=d.array;x=d.version;for(let v=0,y=_.length;v<y;v+=3){const S=_[v+0],A=_[v+1],C=_[v+2];u.push(S,A,A,C,C,S)}}else{const _=m.array;x=m.version;for(let v=0,y=_.length/3-1;v<y;v+=3){const S=v+0,A=v+1,C=v+2;u.push(S,A,A,C,C,S)}}const g=new(Wu(u)?Rc:wc)(u,1);g.version=x;const p=s.get(f);p&&e.remove(p),s.set(f,g)}function h(f){const u=s.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function Ug(r,e,t,n){const i=n.isWebGL2;let s;function a(u){s=u}let o,c;function l(u){o=u.type,c=u.bytesPerElement}function h(u,d){r.drawElements(s,d,o,u*c),t.update(d,s,1)}function f(u,d,m){if(m===0)return;let x,g;if(i)x=r,g="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[g](s,d,o,u*c,m),t.update(d,s,m)}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=f}function Dg(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Ng(r,e){return r[0]-e[0]}function Fg(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Og(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new $e,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,f){const u=l.morphTargetInfluences;if(e.isWebGL2===!0){const d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=d!==void 0?d.length:0;let x=s.get(h);if(x===void 0||x.count!==m){let O=function(){J.dispose(),s.delete(h),h.removeEventListener("dispose",O)};x!==void 0&&x.texture.dispose();const _=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],C=h.morphAttributes.color||[];let P=0;_===!0&&(P=1),v===!0&&(P=2),y===!0&&(P=3);let M=h.attributes.position.count*P,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const F=new Float32Array(M*w*4*m),J=new ya(F,M,w,m);J.type=ln,J.needsUpdate=!0;const N=P*4;for(let z=0;z<m;z++){const $=S[z],q=A[z],Y=C[z],K=M*w*4*z;for(let Q=0;Q<$.count;Q++){const fe=Q*N;_===!0&&(a.fromBufferAttribute($,Q),F[K+fe+0]=a.x,F[K+fe+1]=a.y,F[K+fe+2]=a.z,F[K+fe+3]=0),v===!0&&(a.fromBufferAttribute(q,Q),F[K+fe+4]=a.x,F[K+fe+5]=a.y,F[K+fe+6]=a.z,F[K+fe+7]=0),y===!0&&(a.fromBufferAttribute(Y,Q),F[K+fe+8]=a.x,F[K+fe+9]=a.y,F[K+fe+10]=a.z,F[K+fe+11]=Y.itemSize===4?a.w:1)}}x={count:m,texture:J,size:new Z(M,w)},s.set(h,x),h.addEventListener("dispose",O)}let g=0;for(let _=0;_<u.length;_++)g+=u[_];const p=h.morphTargetsRelative?1:1-g;f.getUniforms().setValue(r,"morphTargetBaseInfluence",p),f.getUniforms().setValue(r,"morphTargetInfluences",u),f.getUniforms().setValue(r,"morphTargetsTexture",x.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}else{const d=u===void 0?0:u.length;let m=n[h.id];if(m===void 0||m.length!==d){m=[];for(let v=0;v<d;v++)m[v]=[v,0];n[h.id]=m}for(let v=0;v<d;v++){const y=m[v];y[0]=v,y[1]=u[v]}m.sort(Fg);for(let v=0;v<8;v++)v<d&&m[v][1]?(o[v][0]=m[v][0],o[v][1]=m[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(Ng);const x=h.morphAttributes.position,g=h.morphAttributes.normal;let p=0;for(let v=0;v<8;v++){const y=o[v],S=y[0],A=y[1];S!==Number.MAX_SAFE_INTEGER&&A?(x&&h.getAttribute("morphTarget"+v)!==x[S]&&h.setAttribute("morphTarget"+v,x[S]),g&&h.getAttribute("morphNormal"+v)!==g[S]&&h.setAttribute("morphNormal"+v,g[S]),i[v]=A,p+=A):(x&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),g&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}const _=h.morphTargetsRelative?1:1-p;f.getUniforms().setValue(r,"morphTargetBaseInfluence",_),f.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function zg(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,f=e.get(c,h);return i.get(f)!==l&&(e.update(f),i.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER)),f}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const Ku=new dt,ju=new ya,Qu=new Ac,ef=new Ks,Pl=[],Ll=[],Il=new Float32Array(16),Ul=new Float32Array(9),Dl=new Float32Array(4);function os(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Pl[i];if(s===void 0&&(s=new Float32Array(i),Pl[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function xt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function vt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Ea(r,e){let t=Ll[e];t===void 0&&(t=new Int32Array(e),Ll[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Bg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function kg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;r.uniform2fv(this.addr,e),vt(t,e)}}function Vg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;r.uniform3fv(this.addr,e),vt(t,e)}}function Hg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;r.uniform4fv(this.addr,e),vt(t,e)}}function Gg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,n))return;Dl.set(n),r.uniformMatrix2fv(this.addr,!1,Dl),vt(t,n)}}function Wg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,n))return;Ul.set(n),r.uniformMatrix3fv(this.addr,!1,Ul),vt(t,n)}}function qg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,n))return;Il.set(n),r.uniformMatrix4fv(this.addr,!1,Il),vt(t,n)}}function Xg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Yg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;r.uniform2iv(this.addr,e),vt(t,e)}}function Zg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;r.uniform3iv(this.addr,e),vt(t,e)}}function Jg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;r.uniform4iv(this.addr,e),vt(t,e)}}function $g(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Kg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;r.uniform2uiv(this.addr,e),vt(t,e)}}function jg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;r.uniform3uiv(this.addr,e),vt(t,e)}}function Qg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;r.uniform4uiv(this.addr,e),vt(t,e)}}function ex(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Ku,i)}function tx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Qu,i)}function nx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ef,i)}function ix(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ju,i)}function sx(r){switch(r){case 5126:return Bg;case 35664:return kg;case 35665:return Vg;case 35666:return Hg;case 35674:return Gg;case 35675:return Wg;case 35676:return qg;case 5124:case 35670:return Xg;case 35667:case 35671:return Yg;case 35668:case 35672:return Zg;case 35669:case 35673:return Jg;case 5125:return $g;case 36294:return Kg;case 36295:return jg;case 36296:return Qg;case 35678:case 36198:case 36298:case 36306:case 35682:return ex;case 35679:case 36299:case 36307:return tx;case 35680:case 36300:case 36308:case 36293:return nx;case 36289:case 36303:case 36311:case 36292:return ix}}function rx(r,e){r.uniform1fv(this.addr,e)}function ax(r,e){const t=os(e,this.size,2);r.uniform2fv(this.addr,t)}function ox(r,e){const t=os(e,this.size,3);r.uniform3fv(this.addr,t)}function cx(r,e){const t=os(e,this.size,4);r.uniform4fv(this.addr,t)}function lx(r,e){const t=os(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function hx(r,e){const t=os(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function ux(r,e){const t=os(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function fx(r,e){r.uniform1iv(this.addr,e)}function dx(r,e){r.uniform2iv(this.addr,e)}function px(r,e){r.uniform3iv(this.addr,e)}function mx(r,e){r.uniform4iv(this.addr,e)}function gx(r,e){r.uniform1uiv(this.addr,e)}function xx(r,e){r.uniform2uiv(this.addr,e)}function vx(r,e){r.uniform3uiv(this.addr,e)}function _x(r,e){r.uniform4uiv(this.addr,e)}function yx(r,e,t){const n=this.cache,i=e.length,s=Ea(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),vt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Ku,s[a])}function Mx(r,e,t){const n=this.cache,i=e.length,s=Ea(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),vt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Qu,s[a])}function bx(r,e,t){const n=this.cache,i=e.length,s=Ea(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),vt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||ef,s[a])}function Sx(r,e,t){const n=this.cache,i=e.length,s=Ea(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),vt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||ju,s[a])}function Tx(r){switch(r){case 5126:return rx;case 35664:return ax;case 35665:return ox;case 35666:return cx;case 35674:return lx;case 35675:return hx;case 35676:return ux;case 5124:case 35670:return fx;case 35667:case 35671:return dx;case 35668:case 35672:return px;case 35669:case 35673:return mx;case 5125:return gx;case 36294:return xx;case 36295:return vx;case 36296:return _x;case 35678:case 36198:case 36298:case 36306:case 35682:return yx;case 35679:case 36299:case 36307:return Mx;case 35680:case 36300:case 36308:case 36293:return bx;case 36289:case 36303:case 36311:case 36292:return Sx}}class Ex{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=sx(t.type)}}class Ax{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Tx(t.type)}}class wx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const ao=/(\w+)(\])?(\[|\.)?/g;function Nl(r,e){r.seq.push(e),r.map[e.id]=e}function Rx(r,e,t){const n=r.name,i=n.length;for(ao.lastIndex=0;;){const s=ao.exec(n),a=ao.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Nl(t,l===void 0?new Ex(o,r,e):new Ax(o,r,e));break}else{let f=t.map[o];f===void 0&&(f=new wx(o),Nl(t,f)),t=f}}}class la{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);Rx(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Fl(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let Cx=0;function Px(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Lx(r){switch(r){case Qt:return["Linear","( value )"];case Oe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),["Linear","( value )"]}}function Ol(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Px(r.getShaderSource(e),a)}else return i}function Ix(r,e){const t=Lx(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Ux(r,e){let t;switch(e){case pu:t="Linear";break;case mu:t="Reinhard";break;case gu:t="OptimizedCineon";break;case xu:t="ACESFilmic";break;case vu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Dx(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ts).join(`
`)}function Nx(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Fx(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Ts(r){return r!==""}function zl(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bl(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ox=/^[ \t]*#include +<([\w\d./]+)>/gm;function tc(r){return r.replace(Ox,zx)}function zx(r,e){const t=Be[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return tc(t)}const Bx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kl(r){return r.replace(Bx,kx)}function kx(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Vl(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Vx(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===uc?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Xh?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===an&&(e="SHADOWMAP_TYPE_VSM"),e}function Hx(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Hn:case Gn:e="ENVMAP_TYPE_CUBE";break;case ss:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Gx(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Gn:e="ENVMAP_MODE_REFRACTION";break}return e}function Wx(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Js:e="ENVMAP_BLENDING_MULTIPLY";break;case fu:e="ENVMAP_BLENDING_MIX";break;case du:e="ENVMAP_BLENDING_ADD";break}return e}function qx(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Xx(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Vx(t),l=Hx(t),h=Gx(t),f=Wx(t),u=qx(t),d=t.isWebGL2?"":Dx(t),m=Nx(s),x=i.createProgram();let g,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ts).join(`
`),g.length>0&&(g+=`
`),p=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ts).join(`
`),p.length>0&&(p+=`
`)):(g=[Vl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),p=[d,Vl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==un?"#define TONE_MAPPING":"",t.toneMapping!==un?Be.tonemapping_pars_fragment:"",t.toneMapping!==un?Ux("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.encodings_pars_fragment,Ix("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ts).join(`
`)),a=tc(a),a=zl(a,t),a=Bl(a,t),o=tc(o),o=zl(o,t),o=Bl(o,t),a=kl(a),o=kl(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===jo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=_+g+a,y=_+p+o,S=Fl(i,i.VERTEX_SHADER,v),A=Fl(i,i.FRAGMENT_SHADER,y);if(i.attachShader(x,S),i.attachShader(x,A),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x),r.debug.checkShaderErrors){const M=i.getProgramInfoLog(x).trim(),w=i.getShaderInfoLog(S).trim(),F=i.getShaderInfoLog(A).trim();let J=!0,N=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,x,S,A);else{const O=Ol(i,S,"vertex"),z=Ol(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+O+`
`+z)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(w===""||F==="")&&(N=!1);N&&(this.diagnostics={runnable:J,programLog:M,vertexShader:{log:w,prefix:g},fragmentShader:{log:F,prefix:p}})}i.deleteShader(S),i.deleteShader(A);let C;this.getUniforms=function(){return C===void 0&&(C=new la(i,x)),C};let P;return this.getAttributes=function(){return P===void 0&&(P=Fx(i,x)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cx++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=A,this}let Yx=0;class Zx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Jx(e),t.set(e,n)),n}}class Jx{constructor(e){this.id=Yx++,this.code=e,this.usedTimes=0}}function $x(r,e,t,n,i,s,a){const o=new Ma,c=new Zx,l=[],h=i.isWebGL2,f=i.logarithmicDepthBuffer,u=i.vertexTextures;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function g(M,w,F,J,N){const O=J.fog,z=N.geometry,$=M.isMeshStandardMaterial?J.environment:null,q=(M.isMeshStandardMaterial?t:e).get(M.envMap||$),Y=!!q&&q.mapping===ss?q.image.height:null,K=m[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const Q=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,fe=Q!==void 0?Q.length:0;let k=0;z.morphAttributes.position!==void 0&&(k=1),z.morphAttributes.normal!==void 0&&(k=2),z.morphAttributes.color!==void 0&&(k=3);let ee,te,me,ge;if(K){const pt=jt[K];ee=pt.vertexShader,te=pt.fragmentShader}else ee=M.vertexShader,te=M.fragmentShader,c.update(M),me=c.getVertexShaderID(M),ge=c.getFragmentShaderID(M);const be=r.getRenderTarget(),Ne=N.isInstancedMesh===!0,Ce=!!M.map,Ke=!!M.matcap,Le=!!q,L=!!M.aoMap,se=!!M.lightMap,X=!!M.bumpMap,re=!!M.normalMap,j=!!M.displacementMap,Se=!!M.emissiveMap,pe=!!M.metalnessMap,ve=!!M.roughnessMap,Ue=M.anisotropy>0,qe=M.clearcoat>0,it=M.iridescence>0,R=M.sheen>0,b=M.transmission>0,V=Ue&&!!M.anisotropyMap,ne=qe&&!!M.clearcoatMap,ie=qe&&!!M.clearcoatNormalMap,ce=qe&&!!M.clearcoatRoughnessMap,Te=it&&!!M.iridescenceMap,le=it&&!!M.iridescenceThicknessMap,W=R&&!!M.sheenColorMap,Ee=R&&!!M.sheenRoughnessMap,Ae=!!M.specularMap,Re=!!M.specularColorMap,ye=!!M.specularIntensityMap,Me=b&&!!M.transmissionMap,Ge=b&&!!M.thicknessMap,Qe=!!M.gradientMap,I=!!M.alphaMap,he=M.alphaTest>0,B=!!M.extensions,ae=!!z.attributes.uv1,ue=!!z.attributes.uv2,Ze=!!z.attributes.uv3;return{isWebGL2:h,shaderID:K,shaderType:M.type,shaderName:M.name,vertexShader:ee,fragmentShader:te,defines:M.defines,customVertexShaderID:me,customFragmentShaderID:ge,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,instancing:Ne,instancingColor:Ne&&N.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:be===null?r.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Qt,map:Ce,matcap:Ke,envMap:Le,envMapMode:Le&&q.mapping,envMapCubeUVHeight:Y,aoMap:L,lightMap:se,bumpMap:X,normalMap:re,displacementMap:u&&j,emissiveMap:Se,normalMapObjectSpace:re&&M.normalMapType===Uu,normalMapTangentSpace:re&&M.normalMapType===Xn,metalnessMap:pe,roughnessMap:ve,anisotropy:Ue,anisotropyMap:V,clearcoat:qe,clearcoatMap:ne,clearcoatNormalMap:ie,clearcoatRoughnessMap:ce,iridescence:it,iridescenceMap:Te,iridescenceThicknessMap:le,sheen:R,sheenColorMap:W,sheenRoughnessMap:Ee,specularMap:Ae,specularColorMap:Re,specularIntensityMap:ye,transmission:b,transmissionMap:Me,thicknessMap:Ge,gradientMap:Qe,opaque:M.transparent===!1&&M.blending===mi,alphaMap:I,alphaTest:he,combine:M.combine,mapUv:Ce&&x(M.map.channel),aoMapUv:L&&x(M.aoMap.channel),lightMapUv:se&&x(M.lightMap.channel),bumpMapUv:X&&x(M.bumpMap.channel),normalMapUv:re&&x(M.normalMap.channel),displacementMapUv:j&&x(M.displacementMap.channel),emissiveMapUv:Se&&x(M.emissiveMap.channel),metalnessMapUv:pe&&x(M.metalnessMap.channel),roughnessMapUv:ve&&x(M.roughnessMap.channel),anisotropyMapUv:V&&x(M.anisotropyMap.channel),clearcoatMapUv:ne&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:ie&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:le&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:W&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&x(M.sheenRoughnessMap.channel),specularMapUv:Ae&&x(M.specularMap.channel),specularColorMapUv:Re&&x(M.specularColorMap.channel),specularIntensityMapUv:ye&&x(M.specularIntensityMap.channel),transmissionMapUv:Me&&x(M.transmissionMap.channel),thicknessMapUv:Ge&&x(M.thicknessMap.channel),alphaMapUv:I&&x(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(re||Ue),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:ae,vertexUv2s:ue,vertexUv3s:Ze,pointsUvs:N.isPoints===!0&&!!z.attributes.uv&&(Ce||I),fog:!!O,useFog:M.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:N.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:k,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:M.toneMapped?r.toneMapping:un,useLegacyLights:r.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===on,flipSided:M.side===It,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:B&&M.extensions.derivatives===!0,extensionFragDepth:B&&M.extensions.fragDepth===!0,extensionDrawBuffers:B&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:B&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const F in M.defines)w.push(F),w.push(M.defines[F]);return M.isRawShaderMaterial===!1&&(_(w,M),v(w,M),w.push(r.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function _(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function v(M,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),M.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),M.push(o.mask)}function y(M){const w=m[M.type];let F;if(w){const J=jt[w];F=Yu.clone(J.uniforms)}else F=M.uniforms;return F}function S(M,w){let F;for(let J=0,N=l.length;J<N;J++){const O=l[J];if(O.cacheKey===w){F=O,++F.usedTimes;break}}return F===void 0&&(F=new Xx(r,w,M,s),l.push(F)),F}function A(M){if(--M.usedTimes===0){const w=l.indexOf(M);l[w]=l[l.length-1],l.pop(),M.destroy()}}function C(M){c.remove(M)}function P(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:S,releaseProgram:A,releaseShaderCache:C,programs:l,dispose:P}}function Kx(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function jx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Hl(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Gl(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(f,u,d,m,x,g){let p=r[e];return p===void 0?(p={id:f.id,object:f,geometry:u,material:d,groupOrder:m,renderOrder:f.renderOrder,z:x,group:g},r[e]=p):(p.id=f.id,p.object=f,p.geometry=u,p.material=d,p.groupOrder=m,p.renderOrder=f.renderOrder,p.z=x,p.group=g),e++,p}function o(f,u,d,m,x,g){const p=a(f,u,d,m,x,g);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function c(f,u,d,m,x,g){const p=a(f,u,d,m,x,g);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function l(f,u){t.length>1&&t.sort(f||jx),n.length>1&&n.sort(u||Hl),i.length>1&&i.sort(u||Hl)}function h(){for(let f=e,u=r.length;f<u;f++){const d=r[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:h,sort:l}}function Qx(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Gl,r.set(n,[a])):i>=s.length?(a=new Gl,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function ev(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new de};break;case"SpotLight":t={position:new T,direction:new T,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new de,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new de,groundColor:new de};break;case"RectAreaLight":t={color:new de,position:new T,halfWidth:new T,halfHeight:new T};break}return r[e.id]=t,t}}}function tv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let nv=0;function iv(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function sv(r,e){const t=new ev,n=tv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new T);const s=new T,a=new De,o=new De;function c(h,f){let u=0,d=0,m=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let x=0,g=0,p=0,_=0,v=0,y=0,S=0,A=0,C=0,P=0;h.sort(iv);const M=f===!0?Math.PI:1;for(let F=0,J=h.length;F<J;F++){const N=h[F],O=N.color,z=N.intensity,$=N.distance,q=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=O.r*z*M,d+=O.g*z*M,m+=O.b*z*M;else if(N.isLightProbe)for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(N.sh.coefficients[Y],z);else if(N.isDirectionalLight){const Y=t.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity*M),N.castShadow){const K=N.shadow,Q=n.get(N);Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,i.directionalShadow[x]=Q,i.directionalShadowMap[x]=q,i.directionalShadowMatrix[x]=N.shadow.matrix,y++}i.directional[x]=Y,x++}else if(N.isSpotLight){const Y=t.get(N);Y.position.setFromMatrixPosition(N.matrixWorld),Y.color.copy(O).multiplyScalar(z*M),Y.distance=$,Y.coneCos=Math.cos(N.angle),Y.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Y.decay=N.decay,i.spot[p]=Y;const K=N.shadow;if(N.map&&(i.spotLightMap[C]=N.map,C++,K.updateMatrices(N),N.castShadow&&P++),i.spotLightMatrix[p]=K.matrix,N.castShadow){const Q=n.get(N);Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,i.spotShadow[p]=Q,i.spotShadowMap[p]=q,A++}p++}else if(N.isRectAreaLight){const Y=t.get(N);Y.color.copy(O).multiplyScalar(z),Y.halfWidth.set(N.width*.5,0,0),Y.halfHeight.set(0,N.height*.5,0),i.rectArea[_]=Y,_++}else if(N.isPointLight){const Y=t.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity*M),Y.distance=N.distance,Y.decay=N.decay,N.castShadow){const K=N.shadow,Q=n.get(N);Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,Q.shadowCameraNear=K.camera.near,Q.shadowCameraFar=K.camera.far,i.pointShadow[g]=Q,i.pointShadowMap[g]=q,i.pointShadowMatrix[g]=N.shadow.matrix,S++}i.point[g]=Y,g++}else if(N.isHemisphereLight){const Y=t.get(N);Y.skyColor.copy(N.color).multiplyScalar(z*M),Y.groundColor.copy(N.groundColor).multiplyScalar(z*M),i.hemi[v]=Y,v++}}_>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=m;const w=i.hash;(w.directionalLength!==x||w.pointLength!==g||w.spotLength!==p||w.rectAreaLength!==_||w.hemiLength!==v||w.numDirectionalShadows!==y||w.numPointShadows!==S||w.numSpotShadows!==A||w.numSpotMaps!==C)&&(i.directional.length=x,i.spot.length=p,i.rectArea.length=_,i.point.length=g,i.hemi.length=v,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=A+C-P,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=P,w.directionalLength=x,w.pointLength=g,w.spotLength=p,w.rectAreaLength=_,w.hemiLength=v,w.numDirectionalShadows=y,w.numPointShadows=S,w.numSpotShadows=A,w.numSpotMaps=C,i.version=nv++)}function l(h,f){let u=0,d=0,m=0,x=0,g=0;const p=f.matrixWorldInverse;for(let _=0,v=h.length;_<v;_++){const y=h[_];if(y.isDirectionalLight){const S=i.directional[u];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),u++}else if(y.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),m++}else if(y.isRectAreaLight){const S=i.rectArea[x];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),o.identity(),a.copy(y.matrixWorld),a.premultiply(p),o.extractRotation(a),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const S=i.hemi[g];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:c,setupView:l,state:i}}function Wl(r,e){const t=new sv(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(f){n.push(f)}function o(f){i.push(f)}function c(f){t.setup(n,f)}function l(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function rv(r,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let c;return o===void 0?(c=new Wl(r,e),t.set(s,[c])):a>=o.length?(c=new Wl(r,e),o.push(c)):c=o[a],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class Pc extends At{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Lc extends At{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const av=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ov=`uniform sampler2D shadow_pass;
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
}`;function cv(r,e,t){let n=new Sa;const i=new Z,s=new Z,a=new $e,o=new Pc({depthPacking:Iu}),c=new Lc,l={},h=t.maxTextureSize,f={[Cn]:It,[It]:Cn,[on]:on},u=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Z},radius:{value:4}},vertexShader:av,fragmentShader:ov}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const m=new He;m.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new bt(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uc;let p=this.type;this.render=function(S,A,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;const P=r.getRenderTarget(),M=r.getActiveCubeFace(),w=r.getActiveMipmapLevel(),F=r.state;F.setBlending(wn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const J=p!==an&&this.type===an,N=p===an&&this.type!==an;for(let O=0,z=S.length;O<z;O++){const $=S[O],q=$.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const Y=q.getFrameExtents();if(i.multiply(Y),s.copy(q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Y.x),i.x=s.x*Y.x,q.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Y.y),i.y=s.y*Y.y,q.mapSize.y=s.y)),q.map===null||J===!0||N===!0){const Q=this.type!==an?{minFilter:ut,magFilter:ut}:{};q.map!==null&&q.map.dispose(),q.map=new en(i.x,i.y,Q),q.map.texture.name=$.name+".shadowMap",q.camera.updateProjectionMatrix()}r.setRenderTarget(q.map),r.clear();const K=q.getViewportCount();for(let Q=0;Q<K;Q++){const fe=q.getViewport(Q);a.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),F.viewport(a),q.updateMatrices($,Q),n=q.getFrustum(),y(A,C,q.camera,$,this.type)}q.isPointLightShadow!==!0&&this.type===an&&_(q,C),q.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(P,M,w)};function _(S,A){const C=e.update(x);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new en(i.x,i.y)),u.uniforms.shadow_pass.value=S.map.texture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,r.setRenderTarget(S.mapPass),r.clear(),r.renderBufferDirect(A,null,C,u,x,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,r.setRenderTarget(S.map),r.clear(),r.renderBufferDirect(A,null,C,d,x,null)}function v(S,A,C,P){let M=null;const w=C.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(w!==void 0)M=w;else if(M=C.isPointLight===!0?c:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const F=M.uuid,J=A.uuid;let N=l[F];N===void 0&&(N={},l[F]=N);let O=N[J];O===void 0&&(O=M.clone(),N[J]=O),M=O}if(M.visible=A.visible,M.wireframe=A.wireframe,P===an?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:f[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const F=r.properties.get(M);F.light=C}return M}function y(S,A,C,P,M){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===an)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,S.matrixWorld);const J=e.update(S),N=S.material;if(Array.isArray(N)){const O=J.groups;for(let z=0,$=O.length;z<$;z++){const q=O[z],Y=N[q.materialIndex];if(Y&&Y.visible){const K=v(S,Y,P,M);r.renderBufferDirect(C,null,J,K,S,q)}}}else if(N.visible){const O=v(S,N,P,M);r.renderBufferDirect(C,null,J,O,S,null)}}const F=S.children;for(let J=0,N=F.length;J<N;J++)y(F[J],A,C,P,M)}}function lv(r,e,t){const n=t.isWebGL2;function i(){let I=!1;const he=new $e;let B=null;const ae=new $e(0,0,0,0);return{setMask:function(ue){B!==ue&&!I&&(r.colorMask(ue,ue,ue,ue),B=ue)},setLocked:function(ue){I=ue},setClear:function(ue,Ze,st,pt,$n){$n===!0&&(ue*=pt,Ze*=pt,st*=pt),he.set(ue,Ze,st,pt),ae.equals(he)===!1&&(r.clearColor(ue,Ze,st,pt),ae.copy(he))},reset:function(){I=!1,B=null,ae.set(-1,0,0,0)}}}function s(){let I=!1,he=null,B=null,ae=null;return{setTest:function(ue){ue?be(r.DEPTH_TEST):Ne(r.DEPTH_TEST)},setMask:function(ue){he!==ue&&!I&&(r.depthMask(ue),he=ue)},setFunc:function(ue){if(B!==ue){switch(ue){case ru:r.depthFunc(r.NEVER);break;case au:r.depthFunc(r.ALWAYS);break;case ou:r.depthFunc(r.LESS);break;case fa:r.depthFunc(r.LEQUAL);break;case cu:r.depthFunc(r.EQUAL);break;case lu:r.depthFunc(r.GEQUAL);break;case hu:r.depthFunc(r.GREATER);break;case uu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}B=ue}},setLocked:function(ue){I=ue},setClear:function(ue){ae!==ue&&(r.clearDepth(ue),ae=ue)},reset:function(){I=!1,he=null,B=null,ae=null}}}function a(){let I=!1,he=null,B=null,ae=null,ue=null,Ze=null,st=null,pt=null,$n=null;return{setTest:function(rt){I||(rt?be(r.STENCIL_TEST):Ne(r.STENCIL_TEST))},setMask:function(rt){he!==rt&&!I&&(r.stencilMask(rt),he=rt)},setFunc:function(rt,rn,wt){(B!==rt||ae!==rn||ue!==wt)&&(r.stencilFunc(rt,rn,wt),B=rt,ae=rn,ue=wt)},setOp:function(rt,rn,wt){(Ze!==rt||st!==rn||pt!==wt)&&(r.stencilOp(rt,rn,wt),Ze=rt,st=rn,pt=wt)},setLocked:function(rt){I=rt},setClear:function(rt){$n!==rt&&(r.clearStencil(rt),$n=rt)},reset:function(){I=!1,he=null,B=null,ae=null,ue=null,Ze=null,st=null,pt=null,$n=null}}}const o=new i,c=new s,l=new a,h=new WeakMap,f=new WeakMap;let u={},d={},m=new WeakMap,x=[],g=null,p=!1,_=null,v=null,y=null,S=null,A=null,C=null,P=null,M=!1,w=null,F=null,J=null,N=null,O=null;const z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,q=0;const Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(Y)[1]),$=q>=1):Y.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),$=q>=2);let K=null,Q={};const fe=r.getParameter(r.SCISSOR_BOX),k=r.getParameter(r.VIEWPORT),ee=new $e().fromArray(fe),te=new $e().fromArray(k);function me(I,he,B,ae){const ue=new Uint8Array(4),Ze=r.createTexture();r.bindTexture(I,Ze),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let st=0;st<B;st++)n&&(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)?r.texImage3D(he,0,r.RGBA,1,1,ae,0,r.RGBA,r.UNSIGNED_BYTE,ue):r.texImage2D(he+st,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ue);return Ze}const ge={};ge[r.TEXTURE_2D]=me(r.TEXTURE_2D,r.TEXTURE_2D,1),ge[r.TEXTURE_CUBE_MAP]=me(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ge[r.TEXTURE_2D_ARRAY]=me(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ge[r.TEXTURE_3D]=me(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),be(r.DEPTH_TEST),c.setFunc(fa),j(!1),Se(So),be(r.CULL_FACE),X(wn);function be(I){u[I]!==!0&&(r.enable(I),u[I]=!0)}function Ne(I){u[I]!==!1&&(r.disable(I),u[I]=!1)}function Ce(I,he){return d[I]!==he?(r.bindFramebuffer(I,he),d[I]=he,n&&(I===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=he),I===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=he)),!0):!1}function Ke(I,he){let B=x,ae=!1;if(I)if(B=m.get(he),B===void 0&&(B=[],m.set(he,B)),I.isWebGLMultipleRenderTargets){const ue=I.texture;if(B.length!==ue.length||B[0]!==r.COLOR_ATTACHMENT0){for(let Ze=0,st=ue.length;Ze<st;Ze++)B[Ze]=r.COLOR_ATTACHMENT0+Ze;B.length=ue.length,ae=!0}}else B[0]!==r.COLOR_ATTACHMENT0&&(B[0]=r.COLOR_ATTACHMENT0,ae=!0);else B[0]!==r.BACK&&(B[0]=r.BACK,ae=!0);ae&&(t.isWebGL2?r.drawBuffers(B):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(B))}function Le(I){return g!==I?(r.useProgram(I),g=I,!0):!1}const L={[li]:r.FUNC_ADD,[Zh]:r.FUNC_SUBTRACT,[Jh]:r.FUNC_REVERSE_SUBTRACT};if(n)L[wo]=r.MIN,L[Ro]=r.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(L[wo]=I.MIN_EXT,L[Ro]=I.MAX_EXT)}const se={[$h]:r.ZERO,[Kh]:r.ONE,[jh]:r.SRC_COLOR,[fc]:r.SRC_ALPHA,[su]:r.SRC_ALPHA_SATURATE,[nu]:r.DST_COLOR,[eu]:r.DST_ALPHA,[Qh]:r.ONE_MINUS_SRC_COLOR,[dc]:r.ONE_MINUS_SRC_ALPHA,[iu]:r.ONE_MINUS_DST_COLOR,[tu]:r.ONE_MINUS_DST_ALPHA};function X(I,he,B,ae,ue,Ze,st,pt){if(I===wn){p===!0&&(Ne(r.BLEND),p=!1);return}if(p===!1&&(be(r.BLEND),p=!0),I!==Yh){if(I!==_||pt!==M){if((v!==li||A!==li)&&(r.blendEquation(r.FUNC_ADD),v=li,A=li),pt)switch(I){case mi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case To:r.blendFunc(r.ONE,r.ONE);break;case Eo:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ao:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case mi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case To:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Eo:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ao:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}y=null,S=null,C=null,P=null,_=I,M=pt}return}ue=ue||he,Ze=Ze||B,st=st||ae,(he!==v||ue!==A)&&(r.blendEquationSeparate(L[he],L[ue]),v=he,A=ue),(B!==y||ae!==S||Ze!==C||st!==P)&&(r.blendFuncSeparate(se[B],se[ae],se[Ze],se[st]),y=B,S=ae,C=Ze,P=st),_=I,M=!1}function re(I,he){I.side===on?Ne(r.CULL_FACE):be(r.CULL_FACE);let B=I.side===It;he&&(B=!B),j(B),I.blending===mi&&I.transparent===!1?X(wn):X(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),c.setFunc(I.depthFunc),c.setTest(I.depthTest),c.setMask(I.depthWrite),o.setMask(I.colorWrite);const ae=I.stencilWrite;l.setTest(ae),ae&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ve(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?be(r.SAMPLE_ALPHA_TO_COVERAGE):Ne(r.SAMPLE_ALPHA_TO_COVERAGE)}function j(I){w!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),w=I)}function Se(I){I!==Wh?(be(r.CULL_FACE),I!==F&&(I===So?r.cullFace(r.BACK):I===qh?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ne(r.CULL_FACE),F=I}function pe(I){I!==J&&($&&r.lineWidth(I),J=I)}function ve(I,he,B){I?(be(r.POLYGON_OFFSET_FILL),(N!==he||O!==B)&&(r.polygonOffset(he,B),N=he,O=B)):Ne(r.POLYGON_OFFSET_FILL)}function Ue(I){I?be(r.SCISSOR_TEST):Ne(r.SCISSOR_TEST)}function qe(I){I===void 0&&(I=r.TEXTURE0+z-1),K!==I&&(r.activeTexture(I),K=I)}function it(I,he,B){B===void 0&&(K===null?B=r.TEXTURE0+z-1:B=K);let ae=Q[B];ae===void 0&&(ae={type:void 0,texture:void 0},Q[B]=ae),(ae.type!==I||ae.texture!==he)&&(K!==B&&(r.activeTexture(B),K=B),r.bindTexture(I,he||ge[I]),ae.type=I,ae.texture=he)}function R(){const I=Q[K];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function b(){try{r.compressedTexImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function V(){try{r.compressedTexImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{r.texSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{r.texSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{r.texStorage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function W(){try{r.texStorage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{r.texImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{r.texImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(I){ee.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),ee.copy(I))}function ye(I){te.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),te.copy(I))}function Me(I,he){let B=f.get(he);B===void 0&&(B=new WeakMap,f.set(he,B));let ae=B.get(I);ae===void 0&&(ae=r.getUniformBlockIndex(he,I.name),B.set(I,ae))}function Ge(I,he){const ae=f.get(he).get(I);h.get(he)!==ae&&(r.uniformBlockBinding(he,ae,I.__bindingPointIndex),h.set(he,ae))}function Qe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},K=null,Q={},d={},m=new WeakMap,x=[],g=null,p=!1,_=null,v=null,y=null,S=null,A=null,C=null,P=null,M=!1,w=null,F=null,J=null,N=null,O=null,ee.set(0,0,r.canvas.width,r.canvas.height),te.set(0,0,r.canvas.width,r.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:be,disable:Ne,bindFramebuffer:Ce,drawBuffers:Ke,useProgram:Le,setBlending:X,setMaterial:re,setFlipSided:j,setCullFace:Se,setLineWidth:pe,setPolygonOffset:ve,setScissorTest:Ue,activeTexture:qe,bindTexture:it,unbindTexture:R,compressedTexImage2D:b,compressedTexImage3D:V,texImage2D:Ee,texImage3D:Ae,updateUBOMapping:Me,uniformBlockBinding:Ge,texStorage2D:le,texStorage3D:W,texSubImage2D:ne,texSubImage3D:ie,compressedTexSubImage2D:ce,compressedTexSubImage3D:Te,scissor:Re,viewport:ye,reset:Qe}}function hv(r,e,t,n,i,s,a){const o=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,h=i.maxTextureSize,f=i.maxSamples,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new WeakMap;let x;const g=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,b){return p?new OffscreenCanvas(R,b):Bs("canvas")}function v(R,b,V,ne){let ie=1;if((R.width>ne||R.height>ne)&&(ie=ne/Math.max(R.width,R.height)),ie<1||b===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ce=b?ma:Math.floor,Te=ce(ie*R.width),le=ce(ie*R.height);x===void 0&&(x=_(Te,le));const W=V?_(Te,le):x;return W.width=Te,W.height=le,W.getContext("2d").drawImage(R,0,0,Te,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Te+"x"+le+")."),W}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function y(R){return Qo(R.width)&&Qo(R.height)}function S(R){return o?!1:R.wrapS!==Et||R.wrapT!==Et||R.minFilter!==ut&&R.minFilter!==ft}function A(R,b){return R.generateMipmaps&&b&&R.minFilter!==ut&&R.minFilter!==ft}function C(R){r.generateMipmap(R)}function P(R,b,V,ne,ie=!1){if(o===!1)return b;if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ce=b;return b===r.RED&&(V===r.FLOAT&&(ce=r.R32F),V===r.HALF_FLOAT&&(ce=r.R16F),V===r.UNSIGNED_BYTE&&(ce=r.R8)),b===r.RG&&(V===r.FLOAT&&(ce=r.RG32F),V===r.HALF_FLOAT&&(ce=r.RG16F),V===r.UNSIGNED_BYTE&&(ce=r.RG8)),b===r.RGBA&&(V===r.FLOAT&&(ce=r.RGBA32F),V===r.HALF_FLOAT&&(ce=r.RGBA16F),V===r.UNSIGNED_BYTE&&(ce=ne===Oe&&ie===!1?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT_4_4_4_4&&(ce=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(ce=r.RGB5_A1)),(ce===r.R16F||ce===r.R32F||ce===r.RG16F||ce===r.RG32F||ce===r.RGBA16F||ce===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function M(R,b,V){return A(R,V)===!0||R.isFramebufferTexture&&R.minFilter!==ut&&R.minFilter!==ft?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function w(R){return R===ut||R===da||R===Es?r.NEAREST:r.LINEAR}function F(R){const b=R.target;b.removeEventListener("dispose",F),N(b),b.isVideoTexture&&m.delete(b)}function J(R){const b=R.target;b.removeEventListener("dispose",J),z(b)}function N(R){const b=n.get(R);if(b.__webglInit===void 0)return;const V=R.source,ne=g.get(V);if(ne){const ie=ne[b.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&O(R),Object.keys(ne).length===0&&g.delete(V)}n.remove(R)}function O(R){const b=n.get(R);r.deleteTexture(b.__webglTexture);const V=R.source,ne=g.get(V);delete ne[b.__cacheKey],a.memory.textures--}function z(R){const b=R.texture,V=n.get(R),ne=n.get(b);if(ne.__webglTexture!==void 0&&(r.deleteTexture(ne.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)r.deleteFramebuffer(V.__webglFramebuffer[ie]),V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer[ie]);else{if(r.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&r.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let ie=0;ie<V.__webglColorRenderbuffer.length;ie++)V.__webglColorRenderbuffer[ie]&&r.deleteRenderbuffer(V.__webglColorRenderbuffer[ie]);V.__webglDepthRenderbuffer&&r.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ie=0,ce=b.length;ie<ce;ie++){const Te=n.get(b[ie]);Te.__webglTexture&&(r.deleteTexture(Te.__webglTexture),a.memory.textures--),n.remove(b[ie])}n.remove(b),n.remove(R)}let $=0;function q(){$=0}function Y(){const R=$;return R>=c&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+c),$+=1,R}function K(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function Q(R,b){const V=n.get(R);if(R.isVideoTexture&&qe(R),R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){const ne=R.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(V,R,b);return}}t.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+b)}function fe(R,b){const V=n.get(R);if(R.version>0&&V.__version!==R.version){Ce(V,R,b);return}t.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+b)}function k(R,b){const V=n.get(R);if(R.version>0&&V.__version!==R.version){Ce(V,R,b);return}t.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+b)}function ee(R,b){const V=n.get(R);if(R.version>0&&V.__version!==R.version){Ke(V,R,b);return}t.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+b)}const te={[Is]:r.REPEAT,[Et]:r.CLAMP_TO_EDGE,[Us]:r.MIRRORED_REPEAT},me={[ut]:r.NEAREST,[da]:r.NEAREST_MIPMAP_NEAREST,[Es]:r.NEAREST_MIPMAP_LINEAR,[ft]:r.LINEAR,[pc]:r.LINEAR_MIPMAP_NEAREST,[Wn]:r.LINEAR_MIPMAP_LINEAR},ge={[Nu]:r.NEVER,[Hu]:r.ALWAYS,[Fu]:r.LESS,[zu]:r.LEQUAL,[Ou]:r.EQUAL,[Vu]:r.GEQUAL,[Bu]:r.GREATER,[ku]:r.NOTEQUAL};function be(R,b,V){if(V?(r.texParameteri(R,r.TEXTURE_WRAP_S,te[b.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,te[b.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,te[b.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,me[b.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,me[b.minFilter])):(r.texParameteri(R,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(R,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(b.wrapS!==Et||b.wrapT!==Et)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(R,r.TEXTURE_MAG_FILTER,w(b.magFilter)),r.texParameteri(R,r.TEXTURE_MIN_FILTER,w(b.minFilter)),b.minFilter!==ut&&b.minFilter!==ft&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,ge[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===ut||b.minFilter!==Es&&b.minFilter!==Wn||b.type===ln&&e.has("OES_texture_float_linear")===!1||o===!1&&b.type===es&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(r.texParameterf(R,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function Ne(R,b){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",F));const ne=b.source;let ie=g.get(ne);ie===void 0&&(ie={},g.set(ne,ie));const ce=K(b);if(ce!==R.__cacheKey){ie[ce]===void 0&&(ie[ce]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,V=!0),ie[ce].usedTimes++;const Te=ie[R.__cacheKey];Te!==void 0&&(ie[R.__cacheKey].usedTimes--,Te.usedTimes===0&&O(b)),R.__cacheKey=ce,R.__webglTexture=ie[ce].texture}return V}function Ce(R,b,V){let ne=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ne=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ne=r.TEXTURE_3D);const ie=Ne(R,b),ce=b.source;t.bindTexture(ne,R.__webglTexture,r.TEXTURE0+V);const Te=n.get(ce);if(ce.version!==Te.__version||ie===!0){t.activeTexture(r.TEXTURE0+V),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const le=S(b)&&y(b.image)===!1;let W=v(b.image,le,!1,h);W=it(b,W);const Ee=y(W)||o,Ae=s.convert(b.format,b.colorSpace);let Re=s.convert(b.type),ye=P(b.internalFormat,Ae,Re,b.colorSpace);be(ne,b,Ee);let Me;const Ge=b.mipmaps,Qe=o&&b.isVideoTexture!==!0,I=Te.__version===void 0||ie===!0,he=M(b,W,Ee);if(b.isDepthTexture)ye=r.DEPTH_COMPONENT,o?b.type===ln?ye=r.DEPTH_COMPONENT32F:b.type===An?ye=r.DEPTH_COMPONENT24:b.type===zn?ye=r.DEPTH24_STENCIL8:ye=r.DEPTH_COMPONENT16:b.type===ln&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Bn&&ye===r.DEPTH_COMPONENT&&b.type!==va&&b.type!==An&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=An,Re=s.convert(b.type)),b.format===_i&&ye===r.DEPTH_COMPONENT&&(ye=r.DEPTH_STENCIL,b.type!==zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=zn,Re=s.convert(b.type))),I&&(Qe?t.texStorage2D(r.TEXTURE_2D,1,ye,W.width,W.height):t.texImage2D(r.TEXTURE_2D,0,ye,W.width,W.height,0,Ae,Re,null));else if(b.isDataTexture)if(Ge.length>0&&Ee){Qe&&I&&t.texStorage2D(r.TEXTURE_2D,he,ye,Ge[0].width,Ge[0].height);for(let B=0,ae=Ge.length;B<ae;B++)Me=Ge[B],Qe?t.texSubImage2D(r.TEXTURE_2D,B,0,0,Me.width,Me.height,Ae,Re,Me.data):t.texImage2D(r.TEXTURE_2D,B,ye,Me.width,Me.height,0,Ae,Re,Me.data);b.generateMipmaps=!1}else Qe?(I&&t.texStorage2D(r.TEXTURE_2D,he,ye,W.width,W.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,W.width,W.height,Ae,Re,W.data)):t.texImage2D(r.TEXTURE_2D,0,ye,W.width,W.height,0,Ae,Re,W.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Qe&&I&&t.texStorage3D(r.TEXTURE_2D_ARRAY,he,ye,Ge[0].width,Ge[0].height,W.depth);for(let B=0,ae=Ge.length;B<ae;B++)Me=Ge[B],b.format!==kt?Ae!==null?Qe?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,B,0,0,0,Me.width,Me.height,W.depth,Ae,Me.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,B,ye,Me.width,Me.height,W.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?t.texSubImage3D(r.TEXTURE_2D_ARRAY,B,0,0,0,Me.width,Me.height,W.depth,Ae,Re,Me.data):t.texImage3D(r.TEXTURE_2D_ARRAY,B,ye,Me.width,Me.height,W.depth,0,Ae,Re,Me.data)}else{Qe&&I&&t.texStorage2D(r.TEXTURE_2D,he,ye,Ge[0].width,Ge[0].height);for(let B=0,ae=Ge.length;B<ae;B++)Me=Ge[B],b.format!==kt?Ae!==null?Qe?t.compressedTexSubImage2D(r.TEXTURE_2D,B,0,0,Me.width,Me.height,Ae,Me.data):t.compressedTexImage2D(r.TEXTURE_2D,B,ye,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?t.texSubImage2D(r.TEXTURE_2D,B,0,0,Me.width,Me.height,Ae,Re,Me.data):t.texImage2D(r.TEXTURE_2D,B,ye,Me.width,Me.height,0,Ae,Re,Me.data)}else if(b.isDataArrayTexture)Qe?(I&&t.texStorage3D(r.TEXTURE_2D_ARRAY,he,ye,W.width,W.height,W.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,W.width,W.height,W.depth,Ae,Re,W.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,ye,W.width,W.height,W.depth,0,Ae,Re,W.data);else if(b.isData3DTexture)Qe?(I&&t.texStorage3D(r.TEXTURE_3D,he,ye,W.width,W.height,W.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,W.width,W.height,W.depth,Ae,Re,W.data)):t.texImage3D(r.TEXTURE_3D,0,ye,W.width,W.height,W.depth,0,Ae,Re,W.data);else if(b.isFramebufferTexture){if(I)if(Qe)t.texStorage2D(r.TEXTURE_2D,he,ye,W.width,W.height);else{let B=W.width,ae=W.height;for(let ue=0;ue<he;ue++)t.texImage2D(r.TEXTURE_2D,ue,ye,B,ae,0,Ae,Re,null),B>>=1,ae>>=1}}else if(Ge.length>0&&Ee){Qe&&I&&t.texStorage2D(r.TEXTURE_2D,he,ye,Ge[0].width,Ge[0].height);for(let B=0,ae=Ge.length;B<ae;B++)Me=Ge[B],Qe?t.texSubImage2D(r.TEXTURE_2D,B,0,0,Ae,Re,Me):t.texImage2D(r.TEXTURE_2D,B,ye,Ae,Re,Me);b.generateMipmaps=!1}else Qe?(I&&t.texStorage2D(r.TEXTURE_2D,he,ye,W.width,W.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ae,Re,W)):t.texImage2D(r.TEXTURE_2D,0,ye,Ae,Re,W);A(b,Ee)&&C(ne),Te.__version=ce.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function Ke(R,b,V){if(b.image.length!==6)return;const ne=Ne(R,b),ie=b.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+V);const ce=n.get(ie);if(ie.version!==ce.__version||ne===!0){t.activeTexture(r.TEXTURE0+V),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const Te=b.isCompressedTexture||b.image[0].isCompressedTexture,le=b.image[0]&&b.image[0].isDataTexture,W=[];for(let B=0;B<6;B++)!Te&&!le?W[B]=v(b.image[B],!1,!0,l):W[B]=le?b.image[B].image:b.image[B],W[B]=it(b,W[B]);const Ee=W[0],Ae=y(Ee)||o,Re=s.convert(b.format,b.colorSpace),ye=s.convert(b.type),Me=P(b.internalFormat,Re,ye,b.colorSpace),Ge=o&&b.isVideoTexture!==!0,Qe=ce.__version===void 0||ne===!0;let I=M(b,Ee,Ae);be(r.TEXTURE_CUBE_MAP,b,Ae);let he;if(Te){Ge&&Qe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,I,Me,Ee.width,Ee.height);for(let B=0;B<6;B++){he=W[B].mipmaps;for(let ae=0;ae<he.length;ae++){const ue=he[ae];b.format!==kt?Re!==null?Ge?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,ae,0,0,ue.width,ue.height,Re,ue.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,ae,Me,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,ae,0,0,ue.width,ue.height,Re,ye,ue.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,ae,Me,ue.width,ue.height,0,Re,ye,ue.data)}}}else{he=b.mipmaps,Ge&&Qe&&(he.length>0&&I++,t.texStorage2D(r.TEXTURE_CUBE_MAP,I,Me,W[0].width,W[0].height));for(let B=0;B<6;B++)if(le){Ge?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,W[B].width,W[B].height,Re,ye,W[B].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,Me,W[B].width,W[B].height,0,Re,ye,W[B].data);for(let ae=0;ae<he.length;ae++){const Ze=he[ae].image[B].image;Ge?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,ae+1,0,0,Ze.width,Ze.height,Re,ye,Ze.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,ae+1,Me,Ze.width,Ze.height,0,Re,ye,Ze.data)}}else{Ge?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,Re,ye,W[B]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,Me,Re,ye,W[B]);for(let ae=0;ae<he.length;ae++){const ue=he[ae];Ge?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,ae+1,0,0,Re,ye,ue.image[B]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,ae+1,Me,Re,ye,ue.image[B])}}}A(b,Ae)&&C(r.TEXTURE_CUBE_MAP),ce.__version=ie.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function Le(R,b,V,ne,ie){const ce=s.convert(V.format,V.colorSpace),Te=s.convert(V.type),le=P(V.internalFormat,ce,Te,V.colorSpace);n.get(b).__hasExternalTextures||(ie===r.TEXTURE_3D||ie===r.TEXTURE_2D_ARRAY?t.texImage3D(ie,0,le,b.width,b.height,b.depth,0,ce,Te,null):t.texImage2D(ie,0,le,b.width,b.height,0,ce,Te,null)),t.bindFramebuffer(r.FRAMEBUFFER,R),Ue(b)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ne,ie,n.get(V).__webglTexture,0,ve(b)):(ie===r.TEXTURE_2D||ie>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ne,ie,n.get(V).__webglTexture,0),t.bindFramebuffer(r.FRAMEBUFFER,null)}function L(R,b,V){if(r.bindRenderbuffer(r.RENDERBUFFER,R),b.depthBuffer&&!b.stencilBuffer){let ne=r.DEPTH_COMPONENT16;if(V||Ue(b)){const ie=b.depthTexture;ie&&ie.isDepthTexture&&(ie.type===ln?ne=r.DEPTH_COMPONENT32F:ie.type===An&&(ne=r.DEPTH_COMPONENT24));const ce=ve(b);Ue(b)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ce,ne,b.width,b.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ce,ne,b.width,b.height)}else r.renderbufferStorage(r.RENDERBUFFER,ne,b.width,b.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,R)}else if(b.depthBuffer&&b.stencilBuffer){const ne=ve(b);V&&Ue(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ne,r.DEPTH24_STENCIL8,b.width,b.height):Ue(b)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ne,r.DEPTH24_STENCIL8,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,R)}else{const ne=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ie=0;ie<ne.length;ie++){const ce=ne[ie],Te=s.convert(ce.format,ce.colorSpace),le=s.convert(ce.type),W=P(ce.internalFormat,Te,le,ce.colorSpace),Ee=ve(b);V&&Ue(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ee,W,b.width,b.height):Ue(b)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ee,W,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,W,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function se(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Q(b.depthTexture,0);const ne=n.get(b.depthTexture).__webglTexture,ie=ve(b);if(b.depthTexture.format===Bn)Ue(b)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ne,0,ie):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ne,0);else if(b.depthTexture.format===_i)Ue(b)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ne,0,ie):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function X(R){const b=n.get(R),V=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");se(b.__webglFramebuffer,R)}else if(V){b.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[ne]),b.__webglDepthbuffer[ne]=r.createRenderbuffer(),L(b.__webglDepthbuffer[ne],R,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=r.createRenderbuffer(),L(b.__webglDepthbuffer,R,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function re(R,b,V){const ne=n.get(R);b!==void 0&&Le(ne.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D),V!==void 0&&X(R)}function j(R){const b=R.texture,V=n.get(R),ne=n.get(b);R.addEventListener("dispose",J),R.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=r.createTexture()),ne.__version=b.version,a.memory.textures++);const ie=R.isWebGLCubeRenderTarget===!0,ce=R.isWebGLMultipleRenderTargets===!0,Te=y(R)||o;if(ie){V.__webglFramebuffer=[];for(let le=0;le<6;le++)V.__webglFramebuffer[le]=r.createFramebuffer()}else{if(V.__webglFramebuffer=r.createFramebuffer(),ce)if(i.drawBuffers){const le=R.texture;for(let W=0,Ee=le.length;W<Ee;W++){const Ae=n.get(le[W]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&Ue(R)===!1){const le=ce?b:[b];V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let W=0;W<le.length;W++){const Ee=le[W];V.__webglColorRenderbuffer[W]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[W]);const Ae=s.convert(Ee.format,Ee.colorSpace),Re=s.convert(Ee.type),ye=P(Ee.internalFormat,Ae,Re,Ee.colorSpace,R.isXRRenderTarget===!0),Me=ve(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Me,ye,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+W,r.RENDERBUFFER,V.__webglColorRenderbuffer[W])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),L(V.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ie){t.bindTexture(r.TEXTURE_CUBE_MAP,ne.__webglTexture),be(r.TEXTURE_CUBE_MAP,b,Te);for(let le=0;le<6;le++)Le(V.__webglFramebuffer[le],R,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le);A(b,Te)&&C(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){const le=R.texture;for(let W=0,Ee=le.length;W<Ee;W++){const Ae=le[W],Re=n.get(Ae);t.bindTexture(r.TEXTURE_2D,Re.__webglTexture),be(r.TEXTURE_2D,Ae,Te),Le(V.__webglFramebuffer,R,Ae,r.COLOR_ATTACHMENT0+W,r.TEXTURE_2D),A(Ae,Te)&&C(r.TEXTURE_2D)}t.unbindTexture()}else{let le=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?le=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,ne.__webglTexture),be(le,b,Te),Le(V.__webglFramebuffer,R,b,r.COLOR_ATTACHMENT0,le),A(b,Te)&&C(le),t.unbindTexture()}R.depthBuffer&&X(R)}function Se(R){const b=y(R)||o,V=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ne=0,ie=V.length;ne<ie;ne++){const ce=V[ne];if(A(ce,b)){const Te=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,le=n.get(ce).__webglTexture;t.bindTexture(Te,le),C(Te),t.unbindTexture()}}}function pe(R){if(o&&R.samples>0&&Ue(R)===!1){const b=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],V=R.width,ne=R.height;let ie=r.COLOR_BUFFER_BIT;const ce=[],Te=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,le=n.get(R),W=R.isWebGLMultipleRenderTargets===!0;if(W)for(let Ee=0;Ee<b.length;Ee++)t.bindFramebuffer(r.FRAMEBUFFER,le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let Ee=0;Ee<b.length;Ee++){ce.push(r.COLOR_ATTACHMENT0+Ee),R.depthBuffer&&ce.push(Te);const Ae=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(Ae===!1&&(R.depthBuffer&&(ie|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ie|=r.STENCIL_BUFFER_BIT)),W&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,le.__webglColorRenderbuffer[Ee]),Ae===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Te]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Te])),W){const Re=n.get(b[Ee]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Re,0)}r.blitFramebuffer(0,0,V,ne,0,0,V,ne,ie,r.NEAREST),d&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),W)for(let Ee=0;Ee<b.length;Ee++){t.bindFramebuffer(r.FRAMEBUFFER,le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.RENDERBUFFER,le.__webglColorRenderbuffer[Ee]);const Ae=n.get(b[Ee]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.TEXTURE_2D,Ae,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function ve(R){return Math.min(f,R.samples)}function Ue(R){const b=n.get(R);return o&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function qe(R){const b=a.render.frame;m.get(R)!==b&&(m.set(R,b),R.update())}function it(R,b){const V=R.colorSpace,ne=R.format,ie=R.type;return R.isCompressedTexture===!0||R.format===pa||V!==Qt&&V!==Vn&&(V===Oe?o===!1?e.has("EXT_sRGB")===!0&&ne===kt?(R.format=pa,R.minFilter=ft,R.generateMipmaps=!1):b=Ec.sRGBToLinear(b):(ne!==kt||ie!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),b}this.allocateTextureUnit=Y,this.resetTextureUnits=q,this.setTexture2D=Q,this.setTexture2DArray=fe,this.setTexture3D=k,this.setTextureCube=ee,this.rebindTextures=re,this.setupRenderTarget=j,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=X,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=Ue}function tf(r,e,t){const n=t.isWebGL2;function i(s,a=Vn){let o;if(s===Rn)return r.UNSIGNED_BYTE;if(s===gc)return r.UNSIGNED_SHORT_4_4_4_4;if(s===xc)return r.UNSIGNED_SHORT_5_5_5_1;if(s===_u)return r.BYTE;if(s===yu)return r.SHORT;if(s===va)return r.UNSIGNED_SHORT;if(s===mc)return r.INT;if(s===An)return r.UNSIGNED_INT;if(s===ln)return r.FLOAT;if(s===es)return n?r.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Mu)return r.ALPHA;if(s===kt)return r.RGBA;if(s===bu)return r.LUMINANCE;if(s===Su)return r.LUMINANCE_ALPHA;if(s===Bn)return r.DEPTH_COMPONENT;if(s===_i)return r.DEPTH_STENCIL;if(s===pa)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Tu)return r.RED;if(s===vc)return r.RED_INTEGER;if(s===Eu)return r.RG;if(s===_c)return r.RG_INTEGER;if(s===yc)return r.RGBA_INTEGER;if(s===na||s===ia||s===sa||s===ra)if(a===Oe)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===na)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ia)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===sa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ra)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===na)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ia)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===sa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ra)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Co||s===Po||s===Lo||s===Io)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Co)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Po)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Lo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Io)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Au)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Uo||s===Do)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Uo)return a===Oe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Do)return a===Oe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===No||s===Fo||s===Oo||s===zo||s===Bo||s===ko||s===Vo||s===Ho||s===Go||s===Wo||s===qo||s===Xo||s===Yo||s===Zo)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===No)return a===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Fo)return a===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Oo)return a===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===zo)return a===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Bo)return a===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ko)return a===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Vo)return a===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ho)return a===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Go)return a===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Wo)return a===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===qo)return a===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Xo)return a===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Yo)return a===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Zo)return a===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===aa)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===aa)return a===Oe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===wu||s===Jo||s===$o||s===Ko)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===aa)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Jo)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===$o)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ko)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===zn?n?r.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class nf extends Mt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class $i extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uv={type:"move"};class oo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const x of e.hand.values()){const g=t.getJointPose(x,n),p=this._getHandJoint(l,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,m=.005;l.inputState.pinching&&u>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(uv)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new $i;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class sf extends dt{constructor(e,t,n,i,s,a,o,c,l,h){if(h=h!==void 0?h:Bn,h!==Bn&&h!==_i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Bn&&(n=An),n===void 0&&h===_i&&(n=zn),super(null,i,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:ut,this.minFilter=c!==void 0?c:ut,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class fv extends Ln{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,u=null,d=null,m=null;const x=t.getContextAttributes();let g=null,p=null;const _=[],v=[];let y=null;const S=new Mt;S.layers.enable(1),S.viewport=new $e;const A=new Mt;A.layers.enable(2),A.viewport=new $e;const C=[S,A],P=new nf;P.layers.enable(1),P.layers.enable(2);let M=null,w=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(k){y=k},this.getController=function(k){let ee=_[k];return ee===void 0&&(ee=new oo,_[k]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(k){let ee=_[k];return ee===void 0&&(ee=new oo,_[k]=ee),ee.getGripSpace()},this.getHand=function(k){let ee=_[k];return ee===void 0&&(ee=new oo,_[k]=ee),ee.getHandSpace()};function F(k){const ee=v.indexOf(k.inputSource);if(ee===-1)return;const te=_[ee];te!==void 0&&(te.update(k.inputSource,k.frame,l||a),te.dispatchEvent({type:k.type,data:k.inputSource}))}function J(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",J),i.removeEventListener("inputsourceschange",N);for(let k=0;k<_.length;k++){const ee=v[k];ee!==null&&(v[k]=null,_[k].disconnect(ee))}M=null,w=null,e.setRenderTarget(g),d=null,u=null,f=null,i=null,p=null,fe.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",J),i.addEventListener("inputsourceschange",N),x.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ee={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,ee),i.updateRenderState({baseLayer:d}),p=new en(d.framebufferWidth,d.framebufferHeight,{format:kt,type:Rn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ee=null,te=null,me=null;x.depth&&(me=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=x.stencil?_i:Bn,te=x.stencil?zn:An);const ge={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};f=new XRWebGLBinding(i,t),u=f.createProjectionLayer(ge),i.updateRenderState({layers:[u]}),p=new en(u.textureWidth,u.textureHeight,{format:kt,type:Rn,depthTexture:new sf(u.textureWidth,u.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const be=e.properties.get(p);be.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),fe.setContext(i),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function N(k){for(let ee=0;ee<k.removed.length;ee++){const te=k.removed[ee],me=v.indexOf(te);me>=0&&(v[me]=null,_[me].disconnect(te))}for(let ee=0;ee<k.added.length;ee++){const te=k.added[ee];let me=v.indexOf(te);if(me===-1){for(let be=0;be<_.length;be++)if(be>=v.length){v.push(te),me=be;break}else if(v[be]===null){v[be]=te,me=be;break}if(me===-1)break}const ge=_[me];ge&&ge.connect(te)}}const O=new T,z=new T;function $(k,ee,te){O.setFromMatrixPosition(ee.matrixWorld),z.setFromMatrixPosition(te.matrixWorld);const me=O.distanceTo(z),ge=ee.projectionMatrix.elements,be=te.projectionMatrix.elements,Ne=ge[14]/(ge[10]-1),Ce=ge[14]/(ge[10]+1),Ke=(ge[9]+1)/ge[5],Le=(ge[9]-1)/ge[5],L=(ge[8]-1)/ge[0],se=(be[8]+1)/be[0],X=Ne*L,re=Ne*se,j=me/(-L+se),Se=j*-L;ee.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Se),k.translateZ(j),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const pe=Ne+j,ve=Ce+j,Ue=X-Se,qe=re+(me-Se),it=Ke*Ce/ve*pe,R=Le*Ce/ve*pe;k.projectionMatrix.makePerspective(Ue,qe,it,R,pe,ve),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function q(k,ee){ee===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(ee.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCameraXR=function(k){if(i===null)return k;y&&(k=y),P.near=A.near=S.near=k.near,P.far=A.far=S.far=k.far,(M!==P.near||w!==P.far)&&(i.updateRenderState({depthNear:P.near,depthFar:P.far}),M=P.near,w=P.far);const ee=k.parent,te=P.cameras;q(P,ee);for(let me=0;me<te.length;me++)q(te[me],ee);return te.length===2?$(P,S,A):P.projectionMatrix.copy(S.projectionMatrix),y&&Y(P,ee),P};function Y(k,ee){const te=y;ee===null?te.matrix.copy(k.matrixWorld):(te.matrix.copy(ee.matrixWorld),te.matrix.invert(),te.matrix.multiply(k.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0);const me=te.children;for(let ge=0,be=me.length;ge<be;ge++)me[ge].updateMatrixWorld(!0);te.projectionMatrix.copy(k.projectionMatrix),te.projectionMatrixInverse.copy(k.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=ts*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(k){c=k,u!==null&&(u.fixedFoveation=k),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=k)};let K=null;function Q(k,ee){if(h=ee.getViewerPose(l||a),m=ee,h!==null){const te=h.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let me=!1;te.length!==P.cameras.length&&(P.cameras.length=0,me=!0);for(let ge=0;ge<te.length;ge++){const be=te[ge];let Ne=null;if(d!==null)Ne=d.getViewport(be);else{const Ke=f.getViewSubImage(u,be);Ne=Ke.viewport,ge===0&&(e.setRenderTargetTextures(p,Ke.colorTexture,u.ignoreDepthValues?void 0:Ke.depthStencilTexture),e.setRenderTarget(p))}let Ce=C[ge];Ce===void 0&&(Ce=new Mt,Ce.layers.enable(ge),Ce.viewport=new $e,C[ge]=Ce),Ce.matrix.fromArray(be.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(be.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),ge===0&&(P.matrix.copy(Ce.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),me===!0&&P.cameras.push(Ce)}}for(let te=0;te<_.length;te++){const me=v[te],ge=_[te];me!==null&&ge!==void 0&&ge.update(me,ee,l||a)}K&&K(k,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),m=null}const fe=new $u;fe.setAnimationLoop(Q),this.setAnimationLoop=function(k){K=k},this.dispose=function(){}}}function dv(r,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Xu(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,_,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),f(g,p)):p.isMeshPhongMaterial?(s(g,p),h(g,p)):p.isMeshStandardMaterial?(s(g,p),u(g,p),p.isMeshPhysicalMaterial&&d(g,p,y)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),x(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,_,v):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===It&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===It&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(g.envMap.value=_,g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;const v=r.useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,_,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*_,g.scale.value=v*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),e.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,_){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===It&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){const _=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function pv(r,e,t,n){let i={},s={},a=[];const o=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(_,v){const y=v.program;n.uniformBlockBinding(_,y)}function l(_,v){let y=i[_.id];y===void 0&&(m(_),y=h(_),i[_.id]=y,_.addEventListener("dispose",g));const S=v.program;n.updateUBOMapping(_,S);const A=e.render.frame;s[_.id]!==A&&(u(_),s[_.id]=A)}function h(_){const v=f();_.__bindingPointIndex=v;const y=r.createBuffer(),S=_.__size,A=_.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,S,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,y),y}function f(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const v=i[_.id],y=_.uniforms,S=_.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let A=0,C=y.length;A<C;A++){const P=y[A];if(d(P,A,S)===!0){const M=P.__offset,w=Array.isArray(P.value)?P.value:[P.value];let F=0;for(let J=0;J<w.length;J++){const N=w[J],O=x(N);typeof N=="number"?(P.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,M+F,P.__data)):N.isMatrix3?(P.__data[0]=N.elements[0],P.__data[1]=N.elements[1],P.__data[2]=N.elements[2],P.__data[3]=N.elements[0],P.__data[4]=N.elements[3],P.__data[5]=N.elements[4],P.__data[6]=N.elements[5],P.__data[7]=N.elements[0],P.__data[8]=N.elements[6],P.__data[9]=N.elements[7],P.__data[10]=N.elements[8],P.__data[11]=N.elements[0]):(N.toArray(P.__data,F),F+=O.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,M,P.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(_,v,y){const S=_.value;if(y[v]===void 0){if(typeof S=="number")y[v]=S;else{const A=Array.isArray(S)?S:[S],C=[];for(let P=0;P<A.length;P++)C.push(A[P].clone());y[v]=C}return!0}else if(typeof S=="number"){if(y[v]!==S)return y[v]=S,!0}else{const A=Array.isArray(y[v])?y[v]:[y[v]],C=Array.isArray(S)?S:[S];for(let P=0;P<A.length;P++){const M=A[P];if(M.equals(C[P])===!1)return M.copy(C[P]),!0}}return!1}function m(_){const v=_.uniforms;let y=0;const S=16;let A=0;for(let C=0,P=v.length;C<P;C++){const M=v[C],w={boundary:0,storage:0},F=Array.isArray(M.value)?M.value:[M.value];for(let J=0,N=F.length;J<N;J++){const O=F[J],z=x(O);w.boundary+=z.boundary,w.storage+=z.storage}if(M.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=y,C>0){A=y%S;const J=S-A;A!==0&&J-w.boundary<0&&(y+=S-A,M.__offset=y)}y+=w.storage}return A=y%S,A>0&&(y+=S-A),_.__size=y,_.__cache={},this}function x(_){const v={boundary:0,storage:0};return typeof _=="number"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function g(_){const v=_.target;v.removeEventListener("dispose",g);const y=a.indexOf(v.__bindingPointIndex);a.splice(y,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function p(){for(const _ in i)r.deleteBuffer(i[_]);a=[],i={},s={}}return{bind:c,update:l,dispose:p}}function mv(){const r=Bs("canvas");return r.style.display="block",r}class rf{constructor(e={}){const{canvas:t=mv(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=a;const d=new Uint32Array(4),m=new Int32Array(4);let x=null,g=null;const p=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Oe,this.useLegacyLights=!0,this.toneMapping=un,this.toneMappingExposure=1;const v=this;let y=!1,S=0,A=0,C=null,P=-1,M=null;const w=new $e,F=new $e;let J=null;const N=new de(0);let O=0,z=t.width,$=t.height,q=1,Y=null,K=null;const Q=new $e(0,0,z,$),fe=new $e(0,0,z,$);let k=!1;const ee=new Sa;let te=!1,me=!1,ge=null;const be=new De,Ne=new Z,Ce=new T,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Le(){return C===null?q:1}let L=n;function se(E,D){for(let H=0;H<E.length;H++){const U=E[H],G=t.getContext(U,D);if(G!==null)return G}return null}try{const E={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ga}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",B,!1),t.addEventListener("webglcontextcreationerror",ae,!1),L===null){const D=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&D.shift(),L=se(D,E),L===null)throw se(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}L instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let X,re,j,Se,pe,ve,Ue,qe,it,R,b,V,ne,ie,ce,Te,le,W,Ee,Ae,Re,ye,Me,Ge;function Qe(){X=new Lg(L),re=new Eg(L,X,e),X.init(re),ye=new tf(L,X,re),j=new lv(L,X,re),Se=new Dg(L),pe=new Kx,ve=new hv(L,X,j,pe,re,ye,Se),Ue=new wg(v),qe=new Pg(v),it=new Xp(L,re),Me=new Sg(L,X,it,re),R=new Ig(L,it,Se,Me),b=new zg(L,R,it,Se),Ee=new Og(L,re,ve),Te=new Ag(pe),V=new $x(v,Ue,qe,X,re,Me,Te),ne=new dv(v,pe),ie=new Qx,ce=new rv(X,re),W=new bg(v,Ue,qe,j,b,u,c),le=new cv(v,b,re),Ge=new pv(L,Se,re,j),Ae=new Tg(L,X,Se,re),Re=new Ug(L,X,Se,re),Se.programs=V.programs,v.capabilities=re,v.extensions=X,v.properties=pe,v.renderLists=ie,v.shadowMap=le,v.state=j,v.info=Se}Qe();const I=new fv(v,L);this.xr=I,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=X.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=X.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(E){E!==void 0&&(q=E,this.setSize(z,$,!1))},this.getSize=function(E){return E.set(z,$)},this.setSize=function(E,D,H=!0){if(I.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=E,$=D,t.width=Math.floor(E*q),t.height=Math.floor(D*q),H===!0&&(t.style.width=E+"px",t.style.height=D+"px"),this.setViewport(0,0,E,D)},this.getDrawingBufferSize=function(E){return E.set(z*q,$*q).floor()},this.setDrawingBufferSize=function(E,D,H){z=E,$=D,q=H,t.width=Math.floor(E*H),t.height=Math.floor(D*H),this.setViewport(0,0,E,D)},this.getCurrentViewport=function(E){return E.copy(w)},this.getViewport=function(E){return E.copy(Q)},this.setViewport=function(E,D,H,U){E.isVector4?Q.set(E.x,E.y,E.z,E.w):Q.set(E,D,H,U),j.viewport(w.copy(Q).multiplyScalar(q).floor())},this.getScissor=function(E){return E.copy(fe)},this.setScissor=function(E,D,H,U){E.isVector4?fe.set(E.x,E.y,E.z,E.w):fe.set(E,D,H,U),j.scissor(F.copy(fe).multiplyScalar(q).floor())},this.getScissorTest=function(){return k},this.setScissorTest=function(E){j.setScissorTest(k=E)},this.setOpaqueSort=function(E){Y=E},this.setTransparentSort=function(E){K=E},this.getClearColor=function(E){return E.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor.apply(W,arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha.apply(W,arguments)},this.clear=function(E=!0,D=!0,H=!0){let U=0;if(E){let G=!1;if(C!==null){const _e=C.texture.format;G=_e===yc||_e===_c||_e===vc}if(G){const _e=C.texture.type,we=_e===Rn||_e===An||_e===va||_e===zn||_e===gc||_e===xc,Pe=W.getClearColor(),Ie=W.getClearAlpha(),We=Pe.r,Fe=Pe.g,ze=Pe.b,et=pe.get(C).__webglFramebuffer;we?(d[0]=We,d[1]=Fe,d[2]=ze,d[3]=Ie,L.clearBufferuiv(L.COLOR,et,d)):(m[0]=We,m[1]=Fe,m[2]=ze,m[3]=Ie,L.clearBufferiv(L.COLOR,et,m))}else U|=L.COLOR_BUFFER_BIT}D&&(U|=L.DEPTH_BUFFER_BIT),H&&(U|=L.STENCIL_BUFFER_BIT),L.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",B,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),ie.dispose(),ce.dispose(),pe.dispose(),Ue.dispose(),qe.dispose(),b.dispose(),Me.dispose(),Ge.dispose(),V.dispose(),I.dispose(),I.removeEventListener("sessionstart",rt),I.removeEventListener("sessionend",rn),ge&&(ge.dispose(),ge=null),wt.stop()};function he(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const E=Se.autoReset,D=le.enabled,H=le.autoUpdate,U=le.needsUpdate,G=le.type;Qe(),Se.autoReset=E,le.enabled=D,le.autoUpdate=H,le.needsUpdate=U,le.type=G}function ae(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ue(E){const D=E.target;D.removeEventListener("dispose",ue),Ze(D)}function Ze(E){st(E),pe.remove(E)}function st(E){const D=pe.get(E).programs;D!==void 0&&(D.forEach(function(H){V.releaseProgram(H)}),E.isShaderMaterial&&V.releaseShaderCache(E))}this.renderBufferDirect=function(E,D,H,U,G,_e){D===null&&(D=Ke);const we=G.isMesh&&G.matrixWorld.determinant()<0,Pe=od(E,D,H,U,G);j.setMaterial(U,we);let Ie=H.index,We=1;U.wireframe===!0&&(Ie=R.getWireframeAttribute(H),We=2);const Fe=H.drawRange,ze=H.attributes.position;let et=Fe.start*We,lt=(Fe.start+Fe.count)*We;_e!==null&&(et=Math.max(et,_e.start*We),lt=Math.min(lt,(_e.start+_e.count)*We)),Ie!==null?(et=Math.max(et,0),lt=Math.min(lt,Ie.count)):ze!=null&&(et=Math.max(et,0),lt=Math.min(lt,ze.count));const Yt=lt-et;if(Yt<0||Yt===1/0)return;Me.setup(G,U,Pe,H,Ie);let gn,mt=Ae;if(Ie!==null&&(gn=it.get(Ie),mt=Re,mt.setIndex(gn)),G.isMesh)U.wireframe===!0?(j.setLineWidth(U.wireframeLinewidth*Le()),mt.setMode(L.LINES)):mt.setMode(L.TRIANGLES);else if(G.isLine){let Xe=U.linewidth;Xe===void 0&&(Xe=1),j.setLineWidth(Xe*Le()),G.isLineSegments?mt.setMode(L.LINES):G.isLineLoop?mt.setMode(L.LINE_LOOP):mt.setMode(L.LINE_STRIP)}else G.isPoints?mt.setMode(L.POINTS):G.isSprite&&mt.setMode(L.TRIANGLES);if(G.isInstancedMesh)mt.renderInstances(et,Yt,G.count);else if(H.isInstancedBufferGeometry){const Xe=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Oa=Math.min(H.instanceCount,Xe);mt.renderInstances(et,Yt,Oa)}else mt.render(et,Yt)},this.compile=function(E,D){function H(U,G,_e){U.transparent===!0&&U.side===on&&U.forceSinglePass===!1?(U.side=It,U.needsUpdate=!0,dr(U,G,_e),U.side=Cn,U.needsUpdate=!0,dr(U,G,_e),U.side=on):dr(U,G,_e)}g=ce.get(E),g.init(),_.push(g),E.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(g.pushLight(U),U.castShadow&&g.pushShadow(U))}),g.setupLights(v.useLegacyLights),E.traverse(function(U){const G=U.material;if(G)if(Array.isArray(G))for(let _e=0;_e<G.length;_e++){const we=G[_e];H(we,E,U)}else H(G,E,U)}),_.pop(),g=null};let pt=null;function $n(E){pt&&pt(E)}function rt(){wt.stop()}function rn(){wt.start()}const wt=new $u;wt.setAnimationLoop($n),typeof self<"u"&&wt.setContext(self),this.setAnimationLoop=function(E){pt=E,I.setAnimationLoop(E),E===null?wt.stop():wt.start()},I.addEventListener("sessionstart",rt),I.addEventListener("sessionend",rn),this.render=function(E,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),I.enabled===!0&&I.isPresenting===!0&&(D=I.updateCameraXR(D)),E.isScene===!0&&E.onBeforeRender(v,E,D,C),g=ce.get(E,_.length),g.init(),_.push(g),be.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),ee.setFromProjectionMatrix(be),me=this.localClippingEnabled,te=Te.init(this.clippingPlanes,me),x=ie.get(E,p.length),x.init(),p.push(x),tl(E,D,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(Y,K),te===!0&&Te.beginShadows();const H=g.state.shadowsArray;if(le.render(H,E,D),te===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,W.render(x,E),g.setupLights(v.useLegacyLights),D.isArrayCamera){const U=D.cameras;for(let G=0,_e=U.length;G<_e;G++){const we=U[G];nl(x,E,we,we.viewport)}}else nl(x,E,D);C!==null&&(ve.updateMultisampleRenderTarget(C),ve.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(v,E,D),Me.resetDefaultState(),P=-1,M=null,_.pop(),_.length>0?g=_[_.length-1]:g=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function tl(E,D,H,U){if(E.visible===!1)return;if(E.layers.test(D.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(D);else if(E.isLight)g.pushLight(E),E.castShadow&&g.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ee.intersectsSprite(E)){U&&Ce.setFromMatrixPosition(E.matrixWorld).applyMatrix4(be);const we=b.update(E),Pe=E.material;Pe.visible&&x.push(E,we,Pe,H,Ce.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ee.intersectsObject(E))){E.isSkinnedMesh&&E.skeleton.frame!==Se.render.frame&&(E.skeleton.update(),E.skeleton.frame=Se.render.frame);const we=b.update(E),Pe=E.material;if(U&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ce.copy(E.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Ce.copy(we.boundingSphere.center)),Ce.applyMatrix4(E.matrixWorld).applyMatrix4(be)),Array.isArray(Pe)){const Ie=we.groups;for(let We=0,Fe=Ie.length;We<Fe;We++){const ze=Ie[We],et=Pe[ze.materialIndex];et&&et.visible&&x.push(E,we,et,H,Ce.z,ze)}}else Pe.visible&&x.push(E,we,Pe,H,Ce.z,null)}}const _e=E.children;for(let we=0,Pe=_e.length;we<Pe;we++)tl(_e[we],D,H,U)}function nl(E,D,H,U){const G=E.opaque,_e=E.transmissive,we=E.transparent;g.setupLightsView(H),te===!0&&Te.setGlobalState(v.clippingPlanes,H),_e.length>0&&ad(G,_e,D,H),U&&j.viewport(w.copy(U)),G.length>0&&fr(G,D,H),_e.length>0&&fr(_e,D,H),we.length>0&&fr(we,D,H),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function ad(E,D,H,U){const G=re.isWebGL2;ge===null&&(ge=new en(1,1,{generateMipmaps:!0,type:X.has("EXT_color_buffer_half_float")?es:Rn,minFilter:Wn,samples:G&&o===!0?4:0})),v.getDrawingBufferSize(Ne),G?ge.setSize(Ne.x,Ne.y):ge.setSize(ma(Ne.x),ma(Ne.y));const _e=v.getRenderTarget();v.setRenderTarget(ge),v.getClearColor(N),O=v.getClearAlpha(),O<1&&v.setClearColor(16777215,.5),v.clear();const we=v.toneMapping;v.toneMapping=un,fr(E,H,U),ve.updateMultisampleRenderTarget(ge),ve.updateRenderTargetMipmap(ge);let Pe=!1;for(let Ie=0,We=D.length;Ie<We;Ie++){const Fe=D[Ie],ze=Fe.object,et=Fe.geometry,lt=Fe.material,Yt=Fe.group;if(lt.side===on&&ze.layers.test(U.layers)){const gn=lt.side;lt.side=It,lt.needsUpdate=!0,il(ze,H,U,et,lt,Yt),lt.side=gn,lt.needsUpdate=!0,Pe=!0}}Pe===!0&&(ve.updateMultisampleRenderTarget(ge),ve.updateRenderTargetMipmap(ge)),v.setRenderTarget(_e),v.setClearColor(N,O),v.toneMapping=we}function fr(E,D,H){const U=D.isScene===!0?D.overrideMaterial:null;for(let G=0,_e=E.length;G<_e;G++){const we=E[G],Pe=we.object,Ie=we.geometry,We=U===null?we.material:U,Fe=we.group;Pe.layers.test(H.layers)&&il(Pe,D,H,Ie,We,Fe)}}function il(E,D,H,U,G,_e){E.onBeforeRender(v,D,H,U,G,_e),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),G.onBeforeRender(v,D,H,U,E,_e),G.transparent===!0&&G.side===on&&G.forceSinglePass===!1?(G.side=It,G.needsUpdate=!0,v.renderBufferDirect(H,D,U,G,E,_e),G.side=Cn,G.needsUpdate=!0,v.renderBufferDirect(H,D,U,G,E,_e),G.side=on):v.renderBufferDirect(H,D,U,G,E,_e),E.onAfterRender(v,D,H,U,G,_e)}function dr(E,D,H){D.isScene!==!0&&(D=Ke);const U=pe.get(E),G=g.state.lights,_e=g.state.shadowsArray,we=G.state.version,Pe=V.getParameters(E,G.state,_e,D,H),Ie=V.getProgramCacheKey(Pe);let We=U.programs;U.environment=E.isMeshStandardMaterial?D.environment:null,U.fog=D.fog,U.envMap=(E.isMeshStandardMaterial?qe:Ue).get(E.envMap||U.environment),We===void 0&&(E.addEventListener("dispose",ue),We=new Map,U.programs=We);let Fe=We.get(Ie);if(Fe!==void 0){if(U.currentProgram===Fe&&U.lightsStateVersion===we)return sl(E,Pe),Fe}else Pe.uniforms=V.getUniforms(E),E.onBuild(H,Pe,v),E.onBeforeCompile(Pe,v),Fe=V.acquireProgram(Pe,Ie),We.set(Ie,Fe),U.uniforms=Pe.uniforms;const ze=U.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ze.clippingPlanes=Te.uniform),sl(E,Pe),U.needsLights=ld(E),U.lightsStateVersion=we,U.needsLights&&(ze.ambientLightColor.value=G.state.ambient,ze.lightProbe.value=G.state.probe,ze.directionalLights.value=G.state.directional,ze.directionalLightShadows.value=G.state.directionalShadow,ze.spotLights.value=G.state.spot,ze.spotLightShadows.value=G.state.spotShadow,ze.rectAreaLights.value=G.state.rectArea,ze.ltc_1.value=G.state.rectAreaLTC1,ze.ltc_2.value=G.state.rectAreaLTC2,ze.pointLights.value=G.state.point,ze.pointLightShadows.value=G.state.pointShadow,ze.hemisphereLights.value=G.state.hemi,ze.directionalShadowMap.value=G.state.directionalShadowMap,ze.directionalShadowMatrix.value=G.state.directionalShadowMatrix,ze.spotShadowMap.value=G.state.spotShadowMap,ze.spotLightMatrix.value=G.state.spotLightMatrix,ze.spotLightMap.value=G.state.spotLightMap,ze.pointShadowMap.value=G.state.pointShadowMap,ze.pointShadowMatrix.value=G.state.pointShadowMatrix);const et=Fe.getUniforms(),lt=la.seqWithValue(et.seq,ze);return U.currentProgram=Fe,U.uniformsList=lt,Fe}function sl(E,D){const H=pe.get(E);H.outputColorSpace=D.outputColorSpace,H.instancing=D.instancing,H.skinning=D.skinning,H.morphTargets=D.morphTargets,H.morphNormals=D.morphNormals,H.morphColors=D.morphColors,H.morphTargetsCount=D.morphTargetsCount,H.numClippingPlanes=D.numClippingPlanes,H.numIntersection=D.numClipIntersection,H.vertexAlphas=D.vertexAlphas,H.vertexTangents=D.vertexTangents,H.toneMapping=D.toneMapping}function od(E,D,H,U,G){D.isScene!==!0&&(D=Ke),ve.resetTextureUnits();const _e=D.fog,we=U.isMeshStandardMaterial?D.environment:null,Pe=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Qt,Ie=(U.isMeshStandardMaterial?qe:Ue).get(U.envMap||we),We=U.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Fe=!!H.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),ze=!!H.morphAttributes.position,et=!!H.morphAttributes.normal,lt=!!H.morphAttributes.color,Yt=U.toneMapped?v.toneMapping:un,gn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,mt=gn!==void 0?gn.length:0,Xe=pe.get(U),Oa=g.state.lights;if(te===!0&&(me===!0||E!==M)){const Ot=E===M&&U.id===P;Te.setState(U,E,Ot)}let _t=!1;U.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Oa.state.version||Xe.outputColorSpace!==Pe||G.isInstancedMesh&&Xe.instancing===!1||!G.isInstancedMesh&&Xe.instancing===!0||G.isSkinnedMesh&&Xe.skinning===!1||!G.isSkinnedMesh&&Xe.skinning===!0||Xe.envMap!==Ie||U.fog===!0&&Xe.fog!==_e||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Te.numPlanes||Xe.numIntersection!==Te.numIntersection)||Xe.vertexAlphas!==We||Xe.vertexTangents!==Fe||Xe.morphTargets!==ze||Xe.morphNormals!==et||Xe.morphColors!==lt||Xe.toneMapping!==Yt||re.isWebGL2===!0&&Xe.morphTargetsCount!==mt)&&(_t=!0):(_t=!0,Xe.__version=U.version);let Kn=Xe.currentProgram;_t===!0&&(Kn=dr(U,D,G));let rl=!1,fs=!1,za=!1;const Rt=Kn.getUniforms(),jn=Xe.uniforms;if(j.useProgram(Kn.program)&&(rl=!0,fs=!0,za=!0),U.id!==P&&(P=U.id,fs=!0),rl||M!==E){if(Rt.setValue(L,"projectionMatrix",E.projectionMatrix),re.logarithmicDepthBuffer&&Rt.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),M!==E&&(M=E,fs=!0,za=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const Ot=Rt.map.cameraPosition;Ot!==void 0&&Ot.setValue(L,Ce.setFromMatrixPosition(E.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Rt.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||G.isSkinnedMesh)&&Rt.setValue(L,"viewMatrix",E.matrixWorldInverse)}if(G.isSkinnedMesh){Rt.setOptional(L,G,"bindMatrix"),Rt.setOptional(L,G,"bindMatrixInverse");const Ot=G.skeleton;Ot&&(re.floatVertexTextures?(Ot.boneTexture===null&&Ot.computeBoneTexture(),Rt.setValue(L,"boneTexture",Ot.boneTexture,ve),Rt.setValue(L,"boneTextureSize",Ot.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ba=H.morphAttributes;if((Ba.position!==void 0||Ba.normal!==void 0||Ba.color!==void 0&&re.isWebGL2===!0)&&Ee.update(G,H,Kn),(fs||Xe.receiveShadow!==G.receiveShadow)&&(Xe.receiveShadow=G.receiveShadow,Rt.setValue(L,"receiveShadow",G.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(jn.envMap.value=Ie,jn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),fs&&(Rt.setValue(L,"toneMappingExposure",v.toneMappingExposure),Xe.needsLights&&cd(jn,za),_e&&U.fog===!0&&ne.refreshFogUniforms(jn,_e),ne.refreshMaterialUniforms(jn,U,q,$,ge),la.upload(L,Xe.uniformsList,jn,ve)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(la.upload(L,Xe.uniformsList,jn,ve),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Rt.setValue(L,"center",G.center),Rt.setValue(L,"modelViewMatrix",G.modelViewMatrix),Rt.setValue(L,"normalMatrix",G.normalMatrix),Rt.setValue(L,"modelMatrix",G.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const Ot=U.uniformsGroups;for(let ka=0,hd=Ot.length;ka<hd;ka++)if(re.isWebGL2){const al=Ot[ka];Ge.update(al,Kn),Ge.bind(al,Kn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Kn}function cd(E,D){E.ambientLightColor.needsUpdate=D,E.lightProbe.needsUpdate=D,E.directionalLights.needsUpdate=D,E.directionalLightShadows.needsUpdate=D,E.pointLights.needsUpdate=D,E.pointLightShadows.needsUpdate=D,E.spotLights.needsUpdate=D,E.spotLightShadows.needsUpdate=D,E.rectAreaLights.needsUpdate=D,E.hemisphereLights.needsUpdate=D}function ld(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,D,H){pe.get(E.texture).__webglTexture=D,pe.get(E.depthTexture).__webglTexture=H;const U=pe.get(E);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=H===void 0,U.__autoAllocateDepthBuffer||X.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,D){const H=pe.get(E);H.__webglFramebuffer=D,H.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(E,D=0,H=0){C=E,S=D,A=H;let U=!0,G=null,_e=!1,we=!1;if(E){const Ie=pe.get(E);Ie.__useDefaultFramebuffer!==void 0?(j.bindFramebuffer(L.FRAMEBUFFER,null),U=!1):Ie.__webglFramebuffer===void 0?ve.setupRenderTarget(E):Ie.__hasExternalTextures&&ve.rebindTextures(E,pe.get(E.texture).__webglTexture,pe.get(E.depthTexture).__webglTexture);const We=E.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(we=!0);const Fe=pe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(G=Fe[D],_e=!0):re.isWebGL2&&E.samples>0&&ve.useMultisampledRTT(E)===!1?G=pe.get(E).__webglMultisampledFramebuffer:G=Fe,w.copy(E.viewport),F.copy(E.scissor),J=E.scissorTest}else w.copy(Q).multiplyScalar(q).floor(),F.copy(fe).multiplyScalar(q).floor(),J=k;if(j.bindFramebuffer(L.FRAMEBUFFER,G)&&re.drawBuffers&&U&&j.drawBuffers(E,G),j.viewport(w),j.scissor(F),j.setScissorTest(J),_e){const Ie=pe.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+D,Ie.__webglTexture,H)}else if(we){const Ie=pe.get(E.texture),We=D||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ie.__webglTexture,H||0,We)}P=-1},this.readRenderTargetPixels=function(E,D,H,U,G,_e,we){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=pe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&we!==void 0&&(Pe=Pe[we]),Pe){j.bindFramebuffer(L.FRAMEBUFFER,Pe);try{const Ie=E.texture,We=Ie.format,Fe=Ie.type;if(We!==kt&&ye.convert(We)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=Fe===es&&(X.has("EXT_color_buffer_half_float")||re.isWebGL2&&X.has("EXT_color_buffer_float"));if(Fe!==Rn&&ye.convert(Fe)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Fe===ln&&(re.isWebGL2||X.has("OES_texture_float")||X.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=E.width-U&&H>=0&&H<=E.height-G&&L.readPixels(D,H,U,G,ye.convert(We),ye.convert(Fe),_e)}finally{const Ie=C!==null?pe.get(C).__webglFramebuffer:null;j.bindFramebuffer(L.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(E,D,H=0){const U=Math.pow(2,-H),G=Math.floor(D.image.width*U),_e=Math.floor(D.image.height*U);ve.setTexture2D(D,0),L.copyTexSubImage2D(L.TEXTURE_2D,H,0,0,E.x,E.y,G,_e),j.unbindTexture()},this.copyTextureToTexture=function(E,D,H,U=0){const G=D.image.width,_e=D.image.height,we=ye.convert(H.format),Pe=ye.convert(H.type);ve.setTexture2D(H,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,H.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,H.unpackAlignment),D.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,U,E.x,E.y,G,_e,we,Pe,D.image.data):D.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,U,E.x,E.y,D.mipmaps[0].width,D.mipmaps[0].height,we,D.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,U,E.x,E.y,we,Pe,D.image),U===0&&H.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),j.unbindTexture()},this.copyTextureToTexture3D=function(E,D,H,U,G=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=E.max.x-E.min.x+1,we=E.max.y-E.min.y+1,Pe=E.max.z-E.min.z+1,Ie=ye.convert(U.format),We=ye.convert(U.type);let Fe;if(U.isData3DTexture)ve.setTexture3D(U,0),Fe=L.TEXTURE_3D;else if(U.isDataArrayTexture)ve.setTexture2DArray(U,0),Fe=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const ze=L.getParameter(L.UNPACK_ROW_LENGTH),et=L.getParameter(L.UNPACK_IMAGE_HEIGHT),lt=L.getParameter(L.UNPACK_SKIP_PIXELS),Yt=L.getParameter(L.UNPACK_SKIP_ROWS),gn=L.getParameter(L.UNPACK_SKIP_IMAGES),mt=H.isCompressedTexture?H.mipmaps[0]:H.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,mt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,mt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,E.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,E.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,E.min.z),H.isDataTexture||H.isData3DTexture?L.texSubImage3D(Fe,G,D.x,D.y,D.z,_e,we,Pe,Ie,We,mt.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(Fe,G,D.x,D.y,D.z,_e,we,Pe,Ie,mt.data)):L.texSubImage3D(Fe,G,D.x,D.y,D.z,_e,we,Pe,Ie,We,mt),L.pixelStorei(L.UNPACK_ROW_LENGTH,ze),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,et),L.pixelStorei(L.UNPACK_SKIP_PIXELS,lt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Yt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,gn),G===0&&U.generateMipmaps&&L.generateMipmap(Fe),j.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?ve.setTextureCube(E,0):E.isData3DTexture?ve.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ve.setTexture2DArray(E,0):ve.setTexture2D(E,0),j.unbindTexture()},this.resetState=function(){S=0,A=0,C=null,j.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Oe?kn:bc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===kn?Oe:Qt}}class af extends rf{}af.prototype.isWebGL1Renderer=!0;class Aa{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new de(e),this.density=t}clone(){return new Aa(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class wa{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new de(e),this.near=t,this.far=n}clone(){return new wa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class of extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Ra{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Os,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Ht()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ht()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ht()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ct=new T;class yi{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}setX(e,t){return this.normalized&&(t=Ve(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ve(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ve(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ve(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Vt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Vt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Vt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Vt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ve(t,this.array),n=Ve(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ve(t,this.array),n=Ve(n,this.array),i=Ve(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ve(t,this.array),n=Ve(n,this.array),i=Ve(i,this.array),s=Ve(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new je(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new yi(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ic extends At{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Hi;const xs=new T,Gi=new T,Wi=new T,qi=new Z,vs=new Z,cf=new De,Dr=new T,_s=new T,Nr=new T,ql=new Z,co=new Z,Xl=new Z;class lf extends Je{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",Hi===void 0){Hi=new He;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ra(t,5);Hi.setIndex([0,1,2,0,2,3]),Hi.setAttribute("position",new yi(n,3,0,!1)),Hi.setAttribute("uv",new yi(n,2,3,!1))}this.geometry=Hi,this.material=e!==void 0?e:new Ic,this.center=new Z(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gi.setFromMatrixScale(this.matrixWorld),cf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Wi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gi.multiplyScalar(-Wi.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;Fr(Dr.set(-.5,-.5,0),Wi,a,Gi,i,s),Fr(_s.set(.5,-.5,0),Wi,a,Gi,i,s),Fr(Nr.set(.5,.5,0),Wi,a,Gi,i,s),ql.set(0,0),co.set(1,0),Xl.set(1,1);let o=e.ray.intersectTriangle(Dr,_s,Nr,!1,xs);if(o===null&&(Fr(_s.set(-.5,.5,0),Wi,a,Gi,i,s),co.set(0,1),o=e.ray.intersectTriangle(Dr,Nr,_s,!1,xs),o===null))return;const c=e.ray.origin.distanceTo(xs);c<e.near||c>e.far||t.push({distance:c,point:xs.clone(),uv:Lt.getInterpolation(xs,Dr,_s,Nr,ql,co,Xl,new Z),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Fr(r,e,t,n,i,s){qi.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(vs.x=s*qi.x-i*qi.y,vs.y=i*qi.x+s*qi.y):vs.copy(qi),r.copy(e),r.x+=vs.x,r.y+=vs.y,r.applyMatrix4(cf)}const Or=new T,Yl=new T;class hf extends Je{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const s=t[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let s;for(s=0;s<i.length&&!(t<i[s].distance);s++);return i.splice(s,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let s=t[n].distance;if(t[n].object.visible&&(s-=s*t[n].hysteresis),e<s)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Or.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(Or);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Or.setFromMatrixPosition(e.matrixWorld),Yl.setFromMatrixPosition(this.matrixWorld);const n=Or.distanceTo(Yl)/e.zoom;t[0].object.visible=!0;let i,s;for(i=1,s=t.length;i<s;i++){let a=t[i].distance;if(t[i].object.visible&&(a-=a*t[i].hysteresis),n>=a)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<s;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,s=n.length;i<s;i++){const a=n[i];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}const Zl=new T,Jl=new $e,$l=new $e,gv=new T,Kl=new De,Xi=new T,lo=new tn,jl=new De,ho=new rs;class uf extends bt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new De,this.bindMatrixInverse=new De,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new pn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Xi.fromBufferAttribute(t,n),this.applyBoneTransform(n,Xi),this.boundingBox.expandByPoint(Xi)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new tn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Xi.fromBufferAttribute(t,n),this.applyBoneTransform(n,Xi),this.boundingSphere.expandByPoint(Xi)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lo.copy(this.boundingSphere),lo.applyMatrix4(i),e.ray.intersectsSphere(lo)!==!1&&(jl.copy(i).invert(),ho.copy(e.ray).applyMatrix4(jl),!(this.boundingBox!==null&&ho.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ho)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new $e,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Jl.fromBufferAttribute(i.attributes.skinIndex,e),$l.fromBufferAttribute(i.attributes.skinWeight,e),Zl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=$l.getComponent(s);if(a!==0){const o=Jl.getComponent(s);Kl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(gv.copy(Zl).applyMatrix4(Kl),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Uc extends Je{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Qi extends dt{constructor(e=null,t=1,n=1,i,s,a,o,c,l=ut,h=ut,f,u){super(null,a,o,c,l,h,i,s,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ql=new De,xv=new De;class Ca{constructor(e=[],t=[]){this.uuid=Ht(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new De)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new De;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:xv;Ql.multiplyMatrices(o,t[s]),Ql.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ca(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Gu(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Qi(t,e,e,kt,ln);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Uc),this.bones.push(a),this.boneInverses.push(new De().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class is extends je{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Yi=new De,eh=new De,zr=[],th=new pn,vv=new De,ys=new bt,Ms=new tn;class ff extends bt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new is(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,vv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new pn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Yi),th.copy(e.boundingBox).applyMatrix4(Yi),this.boundingBox.union(th)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new tn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Yi),Ms.copy(e.boundingSphere).applyMatrix4(Yi),this.boundingSphere.union(Ms)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ys.geometry=this.geometry,ys.material=this.material,ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ms.copy(this.boundingSphere),Ms.applyMatrix4(n),e.ray.intersectsSphere(Ms)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Yi),eh.multiplyMatrices(n,Yi),ys.matrixWorld=eh,ys.raycast(e,zr);for(let a=0,o=zr.length;a<o;a++){const c=zr[a];c.instanceId=s,c.object=this,t.push(c)}zr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new is(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Ut extends At{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new de(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const nh=new T,ih=new T,sh=new De,uo=new rs,Br=new tn;class qn extends Je{constructor(e=new He,t=new Ut){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)nh.fromBufferAttribute(t,i-1),ih.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=nh.distanceTo(ih);e.setAttribute("lineDistance",new xe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(i),Br.radius+=s,e.ray.intersectsSphere(Br)===!1)return;sh.copy(i).invert(),uo.copy(e.ray).applyMatrix4(sh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new T,h=new T,f=new T,u=new T,d=this.isLineSegments?2:1,m=n.index,g=n.attributes.position;if(m!==null){const p=Math.max(0,a.start),_=Math.min(m.count,a.start+a.count);for(let v=p,y=_-1;v<y;v+=d){const S=m.getX(v),A=m.getX(v+1);if(l.fromBufferAttribute(g,S),h.fromBufferAttribute(g,A),uo.distanceSqToSegment(l,h,u,f)>c)continue;u.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(u);P<e.near||P>e.far||t.push({distance:P,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),_=Math.min(g.count,a.start+a.count);for(let v=p,y=_-1;v<y;v+=d){if(l.fromBufferAttribute(g,v),h.fromBufferAttribute(g,v+1),uo.distanceSqToSegment(l,h,u,f)>c)continue;u.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(u);A<e.near||A>e.far||t.push({distance:A,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const rh=new T,ah=new T;class mn extends qn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)rh.fromBufferAttribute(t,i),ah.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+rh.distanceTo(ah);e.setAttribute("lineDistance",new xe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class df extends qn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Dc extends At{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const oh=new De,nc=new rs,kr=new tn,Vr=new T;class pf extends Je{constructor(e=new He,t=new Dc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(i),kr.radius+=s,e.ray.intersectsSphere(kr)===!1)return;oh.copy(i).invert(),nc.copy(e.ray).applyMatrix4(oh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){const u=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let m=u,x=d;m<x;m++){const g=l.getX(m);Vr.fromBufferAttribute(f,g),ch(Vr,g,c,i,e,t,this)}}else{const u=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let m=u,x=d;m<x;m++)Vr.fromBufferAttribute(f,m),ch(Vr,m,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ch(r,e,t,n,i,s,a){const o=nc.distanceSqToPoint(r);if(o<t){const c=new T;nc.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}class _v extends dt{constructor(e,t,n,i,s,a,o,c,l){super(e,t,n,i,s,a,o,c,l),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:ft,this.magFilter=s!==void 0?s:ft,this.generateMipmaps=!1;const h=this;function f(){h.needsUpdate=!0,e.requestVideoFrameCallback(f)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(f)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class yv extends dt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=ut,this.minFilter=ut,this.generateMipmaps=!1,this.needsUpdate=!0}}class Nc extends dt{constructor(e,t,n,i,s,a,o,c,l,h,f,u){super(null,a,o,c,l,h,i,s,f,u),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class Mv extends Nc{constructor(e,t,n,i,s,a){super(e,t,n,s,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=Et}}class bv extends dt{constructor(e,t,n,i,s,a,o,c,l){super(e,t,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class nn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(s-1);const h=n[i],u=n[i+1]-h,d=(a-h)/u;return(i+d)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),c=t||(a.isVector2?new Z:new T);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new T,i=[],s=[],a=[],o=new T,c=new De;for(let d=0;d<=e;d++){const m=d/e;i[d]=this.getTangentAt(m,new T)}s[0]=new T,a[0]=new T;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),f=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(ct(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(o,m))}a[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(ct(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let m=1;m<=e;m++)s[m].applyMatrix4(c.makeRotationAxis(i[m],d*m)),a[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Pa extends nn{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t){const n=t||new Z,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=c-this.aX,d=l-this.aY;c=u*h-d*f+this.aX,l=u*f+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class mf extends Pa{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Fc(){let r=0,e=0,t=0,n=0;function i(s,a,o,c){r=s,e=o,t=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){i(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,f){let u=(a-s)/l-(o-s)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+f)+(c-o)/f;u*=h,d*=h,i(a,o,u,d)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+n*o}}}const Hr=new T,fo=new Fc,po=new Fc,mo=new Fc;class gf extends nn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new T){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%s]:(Hr.subVectors(i[0],i[1]).add(i[0]),l=Hr);const f=i[o%s],u=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(Hr.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Hr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(h),d);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),fo.initNonuniformCatmullRom(l.x,f.x,u.x,h.x,m,x,g),po.initNonuniformCatmullRom(l.y,f.y,u.y,h.y,m,x,g),mo.initNonuniformCatmullRom(l.z,f.z,u.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(fo.initCatmullRom(l.x,f.x,u.x,h.x,this.tension),po.initCatmullRom(l.y,f.y,u.y,h.y,this.tension),mo.initCatmullRom(l.z,f.z,u.z,h.z,this.tension));return n.set(fo.calc(c),po.calc(c),mo.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new T().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function lh(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,o=r*r,c=r*o;return(2*t-2*n+s+a)*c+(-3*t+3*n-2*s-a)*o+s*r+t}function Sv(r,e){const t=1-r;return t*t*e}function Tv(r,e){return 2*(1-r)*r*e}function Ev(r,e){return r*r*e}function Rs(r,e,t,n){return Sv(r,e)+Tv(r,t)+Ev(r,n)}function Av(r,e){const t=1-r;return t*t*t*e}function wv(r,e){const t=1-r;return 3*t*t*r*e}function Rv(r,e){return 3*(1-r)*r*r*e}function Cv(r,e){return r*r*r*e}function Cs(r,e,t,n,i){return Av(r,e)+wv(r,t)+Rv(r,n)+Cv(r,i)}class Oc extends nn{constructor(e=new Z,t=new Z,n=new Z,i=new Z){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Z){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Cs(e,i.x,s.x,a.x,o.x),Cs(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class xf extends nn{constructor(e=new T,t=new T,n=new T,i=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new T){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Cs(e,i.x,s.x,a.x,o.x),Cs(e,i.y,s.y,a.y,o.y),Cs(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class La extends nn{constructor(e=new Z,t=new Z){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Z){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vf extends nn{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zc extends nn{constructor(e=new Z,t=new Z,n=new Z){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Z){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Rs(e,i.x,s.x,a.x),Rs(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bc extends nn{constructor(e=new T,t=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new T){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Rs(e,i.x,s.x,a.x),Rs(e,i.y,s.y,a.y),Rs(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kc extends nn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Z){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],f=i[a>i.length-3?i.length-1:a+2];return n.set(lh(o,c.x,l.x,h.x,f.x),lh(o,c.y,l.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Z().fromArray(i))}return this}}var Vc=Object.freeze({__proto__:null,ArcCurve:mf,CatmullRomCurve3:gf,CubicBezierCurve:Oc,CubicBezierCurve3:xf,EllipseCurve:Pa,LineCurve:La,LineCurve3:vf,QuadraticBezierCurve:zc,QuadraticBezierCurve3:Bc,SplineCurve:kc});class _f extends nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new La(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Vc[i.type]().fromJSON(i))}return this}}class ks extends _f{constructor(e){super(),this.type="Path",this.currentPoint=new Z,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new La(this.currentPoint.clone(),new Z(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new zc(this.currentPoint.clone(),new Z(e,t),new Z(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){const o=new Oc(this.currentPoint.clone(),new Z(e,t),new Z(n,i),new Z(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new kc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,s,a,o,c),this}absellipse(e,t,n,i,s,a,o,c){const l=new Pa(e,t,n,i,s,a,o,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class cs extends He{constructor(e=[new Z(0,-.5),new Z(.5,0),new Z(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=ct(i,0,Math.PI*2);const s=[],a=[],o=[],c=[],l=[],h=1/t,f=new T,u=new Z,d=new T,m=new T,x=new T;let g=0,p=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:g=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,d.x=p*1,d.y=-g,d.z=p*0,x.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:g=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),c.push(d.x,d.y,d.z),x.copy(m)}for(let _=0;_<=t;_++){const v=n+_*h*i,y=Math.sin(v),S=Math.cos(v);for(let A=0;A<=e.length-1;A++){f.x=e[A].x*y,f.y=e[A].y,f.z=e[A].x*S,a.push(f.x,f.y,f.z),u.x=_/t,u.y=A/(e.length-1),o.push(u.x,u.y);const C=c[3*A+0]*y,P=c[3*A+1],M=c[3*A+0]*S;l.push(C,P,M)}}for(let _=0;_<t;_++)for(let v=0;v<e.length-1;v++){const y=v+_*e.length,S=y,A=y+e.length,C=y+e.length+1,P=y+1;s.push(S,A,P),s.push(C,P,A)}this.setIndex(s),this.setAttribute("position",new xe(a,3)),this.setAttribute("uv",new xe(o,2)),this.setAttribute("normal",new xe(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cs(e.points,e.segments,e.phiStart,e.phiLength)}}class js extends cs{constructor(e=1,t=1,n=4,i=8){const s=new ks;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new js(e.radius,e.length,e.capSegments,e.radialSegments)}}class Qs extends He{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],a=[],o=[],c=[],l=new T,h=new Z;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){const d=n+f/t*i;l.x=e*Math.cos(d),l.y=e*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,c.push(h.x,h.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new xe(a,3)),this.setAttribute("normal",new xe(o,3)),this.setAttribute("uv",new xe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qs(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Si extends He{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],f=[],u=[],d=[];let m=0;const x=[],g=n/2;let p=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new xe(f,3)),this.setAttribute("normal",new xe(u,3)),this.setAttribute("uv",new xe(d,2));function _(){const y=new T,S=new T;let A=0;const C=(t-e)/n;for(let P=0;P<=s;P++){const M=[],w=P/s,F=w*(t-e)+e;for(let J=0;J<=i;J++){const N=J/i,O=N*c+o,z=Math.sin(O),$=Math.cos(O);S.x=F*z,S.y=-w*n+g,S.z=F*$,f.push(S.x,S.y,S.z),y.set(z,C,$).normalize(),u.push(y.x,y.y,y.z),d.push(N,1-w),M.push(m++)}x.push(M)}for(let P=0;P<i;P++)for(let M=0;M<s;M++){const w=x[M][P],F=x[M+1][P],J=x[M+1][P+1],N=x[M][P+1];h.push(w,F,N),h.push(F,J,N),A+=6}l.addGroup(p,A,0),p+=A}function v(y){const S=m,A=new Z,C=new T;let P=0;const M=y===!0?e:t,w=y===!0?1:-1;for(let J=1;J<=i;J++)f.push(0,g*w,0),u.push(0,w,0),d.push(.5,.5),m++;const F=m;for(let J=0;J<=i;J++){const O=J/i*c+o,z=Math.cos(O),$=Math.sin(O);C.x=M*$,C.y=g*w,C.z=M*z,f.push(C.x,C.y,C.z),u.push(0,w,0),A.x=z*.5+.5,A.y=$*.5*w+.5,d.push(A.x,A.y),m++}for(let J=0;J<i;J++){const N=S+J,O=F+J;y===!0?h.push(O,O+1,N):h.push(O+1,O,N),P+=3}l.addGroup(p,P,y===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Si(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class er extends Si{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new er(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class In extends He{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],a=[];o(i),l(n),h(),this.setAttribute("position",new xe(s,3)),this.setAttribute("normal",new xe(s.slice(),3)),this.setAttribute("uv",new xe(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(_){const v=new T,y=new T,S=new T;for(let A=0;A<t.length;A+=3)d(t[A+0],v),d(t[A+1],y),d(t[A+2],S),c(v,y,S,_)}function c(_,v,y,S){const A=S+1,C=[];for(let P=0;P<=A;P++){C[P]=[];const M=_.clone().lerp(y,P/A),w=v.clone().lerp(y,P/A),F=A-P;for(let J=0;J<=F;J++)J===0&&P===A?C[P][J]=M:C[P][J]=M.clone().lerp(w,J/F)}for(let P=0;P<A;P++)for(let M=0;M<2*(A-P)-1;M++){const w=Math.floor(M/2);M%2===0?(u(C[P][w+1]),u(C[P+1][w]),u(C[P][w])):(u(C[P][w+1]),u(C[P+1][w+1]),u(C[P+1][w]))}}function l(_){const v=new T;for(let y=0;y<s.length;y+=3)v.x=s[y+0],v.y=s[y+1],v.z=s[y+2],v.normalize().multiplyScalar(_),s[y+0]=v.x,s[y+1]=v.y,s[y+2]=v.z}function h(){const _=new T;for(let v=0;v<s.length;v+=3){_.x=s[v+0],_.y=s[v+1],_.z=s[v+2];const y=g(_)/2/Math.PI+.5,S=p(_)/Math.PI+.5;a.push(y,1-S)}m(),f()}function f(){for(let _=0;_<a.length;_+=6){const v=a[_+0],y=a[_+2],S=a[_+4],A=Math.max(v,y,S),C=Math.min(v,y,S);A>.9&&C<.1&&(v<.2&&(a[_+0]+=1),y<.2&&(a[_+2]+=1),S<.2&&(a[_+4]+=1))}}function u(_){s.push(_.x,_.y,_.z)}function d(_,v){const y=_*3;v.x=e[y+0],v.y=e[y+1],v.z=e[y+2]}function m(){const _=new T,v=new T,y=new T,S=new T,A=new Z,C=new Z,P=new Z;for(let M=0,w=0;M<s.length;M+=9,w+=6){_.set(s[M+0],s[M+1],s[M+2]),v.set(s[M+3],s[M+4],s[M+5]),y.set(s[M+6],s[M+7],s[M+8]),A.set(a[w+0],a[w+1]),C.set(a[w+2],a[w+3]),P.set(a[w+4],a[w+5]),S.copy(_).add(v).add(y).divideScalar(3);const F=g(S);x(A,w+0,_,F),x(C,w+2,v,F),x(P,w+4,y,F)}}function x(_,v,y,S){S<0&&_.x===1&&(a[v]=_.x-1),y.x===0&&y.z===0&&(a[v]=S/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new In(e.vertices,e.indices,e.radius,e.details)}}class tr extends In{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new tr(e.radius,e.detail)}}const Gr=new T,Wr=new T,go=new T,qr=new Lt;class yf extends He{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(gi*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],f=new Array(3),u={},d=[];for(let m=0;m<c;m+=3){a?(l[0]=a.getX(m),l[1]=a.getX(m+1),l[2]=a.getX(m+2)):(l[0]=m,l[1]=m+1,l[2]=m+2);const{a:x,b:g,c:p}=qr;if(x.fromBufferAttribute(o,l[0]),g.fromBufferAttribute(o,l[1]),p.fromBufferAttribute(o,l[2]),qr.getNormal(go),f[0]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,f[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,f[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let _=0;_<3;_++){const v=(_+1)%3,y=f[_],S=f[v],A=qr[h[_]],C=qr[h[v]],P=`${y}_${S}`,M=`${S}_${y}`;M in u&&u[M]?(go.dot(u[M].normal)<=s&&(d.push(A.x,A.y,A.z),d.push(C.x,C.y,C.z)),u[M]=null):P in u||(u[P]={index0:l[_],index1:l[v],normal:go.clone()})}}for(const m in u)if(u[m]){const{index0:x,index1:g}=u[m];Gr.fromBufferAttribute(o,x),Wr.fromBufferAttribute(o,g),d.push(Gr.x,Gr.y,Gr.z),d.push(Wr.x,Wr.y,Wr.z)}this.setAttribute("position",new xe(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class xi extends ks{constructor(e){super(e),this.uuid=Ht(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new ks().fromJSON(i))}return this}}const Pv={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=Mf(r,0,i,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,c,l,h,f,u,d;if(n&&(s=Nv(r,e,s,t)),r.length>80*t){o=l=r[0],c=h=r[1];for(let m=t;m<i;m+=t)f=r[m],u=r[m+1],f<o&&(o=f),u<c&&(c=u),f>l&&(l=f),u>h&&(h=u);d=Math.max(l-o,h-c),d=d!==0?32767/d:0}return Vs(s,a,t,o,c,d,0),a}};function Mf(r,e,t,n,i){let s,a;if(i===Xv(r,e,t,n)>0)for(s=e;s<t;s+=n)a=hh(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=hh(s,r[s],r[s+1],a);return a&&Ia(a,a.next)&&(Gs(a),a=a.next),a}function Mi(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Ia(t,t.next)||nt(t.prev,t,t.next)===0)){if(Gs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Vs(r,e,t,n,i,s,a){if(!r)return;!a&&s&&kv(r,n,i,s);let o=r,c,l;for(;r.prev!==r.next;){if(c=r.prev,l=r.next,s?Iv(r,n,i,s):Lv(r)){e.push(c.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),Gs(r),r=l.next,o=l.next;continue}if(r=l,r===o){a?a===1?(r=Uv(Mi(r),e,t),Vs(r,e,t,n,i,s,2)):a===2&&Dv(r,e,t,n,i,s):Vs(Mi(r),e,t,n,i,s,1);break}}}function Lv(r){const e=r.prev,t=r,n=r.next;if(nt(e,t,n)>=0)return!1;const i=e.x,s=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=i<s?i<a?i:a:s<a?s:a,f=o<c?o<l?o:l:c<l?c:l,u=i>s?i>a?i:a:s>a?s:a,d=o>c?o>l?o:l:c>l?c:l;let m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=u&&m.y>=f&&m.y<=d&&Ki(i,o,s,c,a,l,m.x,m.y)&&nt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Iv(r,e,t,n){const i=r.prev,s=r,a=r.next;if(nt(i,s,a)>=0)return!1;const o=i.x,c=s.x,l=a.x,h=i.y,f=s.y,u=a.y,d=o<c?o<l?o:l:c<l?c:l,m=h<f?h<u?h:u:f<u?f:u,x=o>c?o>l?o:l:c>l?c:l,g=h>f?h>u?h:u:f>u?f:u,p=ic(d,m,e,t,n),_=ic(x,g,e,t,n);let v=r.prevZ,y=r.nextZ;for(;v&&v.z>=p&&y&&y.z<=_;){if(v.x>=d&&v.x<=x&&v.y>=m&&v.y<=g&&v!==i&&v!==a&&Ki(o,h,c,f,l,u,v.x,v.y)&&nt(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=d&&y.x<=x&&y.y>=m&&y.y<=g&&y!==i&&y!==a&&Ki(o,h,c,f,l,u,y.x,y.y)&&nt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=x&&v.y>=m&&v.y<=g&&v!==i&&v!==a&&Ki(o,h,c,f,l,u,v.x,v.y)&&nt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=_;){if(y.x>=d&&y.x<=x&&y.y>=m&&y.y<=g&&y!==i&&y!==a&&Ki(o,h,c,f,l,u,y.x,y.y)&&nt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Uv(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!Ia(i,s)&&bf(i,n,n.next,s)&&Hs(i,s)&&Hs(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Gs(n),Gs(n.next),n=r=s),n=n.next}while(n!==r);return Mi(n)}function Dv(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Gv(a,o)){let c=Sf(a,o);a=Mi(a,a.next),c=Mi(c,c.next),Vs(a,e,t,n,i,s,0),Vs(c,e,t,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function Nv(r,e,t,n){const i=[];let s,a,o,c,l;for(s=0,a=e.length;s<a;s++)o=e[s]*n,c=s<a-1?e[s+1]*n:r.length,l=Mf(r,o,c,n,!1),l===l.next&&(l.steiner=!0),i.push(Hv(l));for(i.sort(Fv),s=0;s<i.length;s++)t=Ov(i[s],t);return t}function Fv(r,e){return r.x-e.x}function Ov(r,e){const t=zv(r,e);if(!t)return e;const n=Sf(t,r);return Mi(n,n.next),Mi(t,t.next)}function zv(r,e){let t=e,n=-1/0,i;const s=r.x,a=r.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const u=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=s&&u>n&&(n=u,i=t.x<t.next.x?t:t.next,u===s))return i}t=t.next}while(t!==e);if(!i)return null;const o=i,c=i.x,l=i.y;let h=1/0,f;t=i;do s>=t.x&&t.x>=c&&s!==t.x&&Ki(a<l?s:n,a,c,l,a<l?n:s,a,t.x,t.y)&&(f=Math.abs(a-t.y)/(s-t.x),Hs(t,r)&&(f<h||f===h&&(t.x>i.x||t.x===i.x&&Bv(i,t)))&&(i=t,h=f)),t=t.next;while(t!==o);return i}function Bv(r,e){return nt(r.prev,r,e.prev)<0&&nt(e.next,r,r.next)<0}function kv(r,e,t,n){let i=r;do i.z===0&&(i.z=ic(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Vv(i)}function Vv(r){let e,t,n,i,s,a,o,c,l=1;do{for(t=r,r=null,s=null,a=0;t;){for(a++,n=t,o=0,e=0;e<l&&(o++,n=n.nextZ,!!n);e++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,c--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,l*=2}while(a>1);return r}function ic(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function Hv(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Ki(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function Gv(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!Wv(r,e)&&(Hs(r,e)&&Hs(e,r)&&qv(r,e)&&(nt(r.prev,r,e.prev)||nt(r,e.prev,e))||Ia(r,e)&&nt(r.prev,r,r.next)>0&&nt(e.prev,e,e.next)>0)}function nt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Ia(r,e){return r.x===e.x&&r.y===e.y}function bf(r,e,t,n){const i=Yr(nt(r,e,t)),s=Yr(nt(r,e,n)),a=Yr(nt(t,n,r)),o=Yr(nt(t,n,e));return!!(i!==s&&a!==o||i===0&&Xr(r,t,e)||s===0&&Xr(r,n,e)||a===0&&Xr(t,r,n)||o===0&&Xr(t,e,n))}function Xr(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Yr(r){return r>0?1:r<0?-1:0}function Wv(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&bf(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Hs(r,e){return nt(r.prev,r,r.next)<0?nt(r,e,r.next)>=0&&nt(r,r.prev,e)>=0:nt(r,e,r.prev)<0||nt(r,r.next,e)<0}function qv(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function Sf(r,e){const t=new sc(r.i,r.x,r.y),n=new sc(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function hh(r,e,t,n){const i=new sc(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Gs(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function sc(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Xv(r,e,t,n){let i=0;for(let s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class fn{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return fn.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];uh(e),fh(n,e);let a=e.length;t.forEach(uh);for(let c=0;c<t.length;c++)i.push(a),a+=t[c].length,fh(n,t[c]);const o=Pv.triangulate(n,i);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}}function uh(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function fh(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class nr extends He{constructor(e=new xi([new Z(.5,.5),new Z(-.5,.5),new Z(-.5,-.5),new Z(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let o=0,c=e.length;o<c;o++){const l=e[o];a(l)}this.setAttribute("position",new xe(i,3)),this.setAttribute("uv",new xe(s,2)),this.computeVertexNormals();function a(o){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:Yv;let v,y=!1,S,A,C,P;p&&(v=p.getSpacedPoints(h),y=!0,u=!1,S=p.computeFrenetFrames(h,!1),A=new T,C=new T,P=new T),u||(g=0,d=0,m=0,x=0);const M=o.extractPoints(l);let w=M.shape;const F=M.holes;if(!fn.isClockWise(w)){w=w.reverse();for(let L=0,se=F.length;L<se;L++){const X=F[L];fn.isClockWise(X)&&(F[L]=X.reverse())}}const N=fn.triangulateShape(w,F),O=w;for(let L=0,se=F.length;L<se;L++){const X=F[L];w=w.concat(X)}function z(L,se,X){return se||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(se,X)}const $=w.length,q=N.length;function Y(L,se,X){let re,j,Se;const pe=L.x-se.x,ve=L.y-se.y,Ue=X.x-L.x,qe=X.y-L.y,it=pe*pe+ve*ve,R=pe*qe-ve*Ue;if(Math.abs(R)>Number.EPSILON){const b=Math.sqrt(it),V=Math.sqrt(Ue*Ue+qe*qe),ne=se.x-ve/b,ie=se.y+pe/b,ce=X.x-qe/V,Te=X.y+Ue/V,le=((ce-ne)*qe-(Te-ie)*Ue)/(pe*qe-ve*Ue);re=ne+pe*le-L.x,j=ie+ve*le-L.y;const W=re*re+j*j;if(W<=2)return new Z(re,j);Se=Math.sqrt(W/2)}else{let b=!1;pe>Number.EPSILON?Ue>Number.EPSILON&&(b=!0):pe<-Number.EPSILON?Ue<-Number.EPSILON&&(b=!0):Math.sign(ve)===Math.sign(qe)&&(b=!0),b?(re=-ve,j=pe,Se=Math.sqrt(it)):(re=pe,j=ve,Se=Math.sqrt(it/2))}return new Z(re/Se,j/Se)}const K=[];for(let L=0,se=O.length,X=se-1,re=L+1;L<se;L++,X++,re++)X===se&&(X=0),re===se&&(re=0),K[L]=Y(O[L],O[X],O[re]);const Q=[];let fe,k=K.concat();for(let L=0,se=F.length;L<se;L++){const X=F[L];fe=[];for(let re=0,j=X.length,Se=j-1,pe=re+1;re<j;re++,Se++,pe++)Se===j&&(Se=0),pe===j&&(pe=0),fe[re]=Y(X[re],X[Se],X[pe]);Q.push(fe),k=k.concat(fe)}for(let L=0;L<g;L++){const se=L/g,X=d*Math.cos(se*Math.PI/2),re=m*Math.sin(se*Math.PI/2)+x;for(let j=0,Se=O.length;j<Se;j++){const pe=z(O[j],K[j],re);be(pe.x,pe.y,-X)}for(let j=0,Se=F.length;j<Se;j++){const pe=F[j];fe=Q[j];for(let ve=0,Ue=pe.length;ve<Ue;ve++){const qe=z(pe[ve],fe[ve],re);be(qe.x,qe.y,-X)}}}const ee=m+x;for(let L=0;L<$;L++){const se=u?z(w[L],k[L],ee):w[L];y?(C.copy(S.normals[0]).multiplyScalar(se.x),A.copy(S.binormals[0]).multiplyScalar(se.y),P.copy(v[0]).add(C).add(A),be(P.x,P.y,P.z)):be(se.x,se.y,0)}for(let L=1;L<=h;L++)for(let se=0;se<$;se++){const X=u?z(w[se],k[se],ee):w[se];y?(C.copy(S.normals[L]).multiplyScalar(X.x),A.copy(S.binormals[L]).multiplyScalar(X.y),P.copy(v[L]).add(C).add(A),be(P.x,P.y,P.z)):be(X.x,X.y,f/h*L)}for(let L=g-1;L>=0;L--){const se=L/g,X=d*Math.cos(se*Math.PI/2),re=m*Math.sin(se*Math.PI/2)+x;for(let j=0,Se=O.length;j<Se;j++){const pe=z(O[j],K[j],re);be(pe.x,pe.y,f+X)}for(let j=0,Se=F.length;j<Se;j++){const pe=F[j];fe=Q[j];for(let ve=0,Ue=pe.length;ve<Ue;ve++){const qe=z(pe[ve],fe[ve],re);y?be(qe.x,qe.y+v[h-1].y,v[h-1].x+X):be(qe.x,qe.y,f+X)}}}te(),me();function te(){const L=i.length/3;if(u){let se=0,X=$*se;for(let re=0;re<q;re++){const j=N[re];Ne(j[2]+X,j[1]+X,j[0]+X)}se=h+g*2,X=$*se;for(let re=0;re<q;re++){const j=N[re];Ne(j[0]+X,j[1]+X,j[2]+X)}}else{for(let se=0;se<q;se++){const X=N[se];Ne(X[2],X[1],X[0])}for(let se=0;se<q;se++){const X=N[se];Ne(X[0]+$*h,X[1]+$*h,X[2]+$*h)}}n.addGroup(L,i.length/3-L,0)}function me(){const L=i.length/3;let se=0;ge(O,se),se+=O.length;for(let X=0,re=F.length;X<re;X++){const j=F[X];ge(j,se),se+=j.length}n.addGroup(L,i.length/3-L,1)}function ge(L,se){let X=L.length;for(;--X>=0;){const re=X;let j=X-1;j<0&&(j=L.length-1);for(let Se=0,pe=h+g*2;Se<pe;Se++){const ve=$*Se,Ue=$*(Se+1),qe=se+re+ve,it=se+j+ve,R=se+j+Ue,b=se+re+Ue;Ce(qe,it,R,b)}}}function be(L,se,X){c.push(L),c.push(se),c.push(X)}function Ne(L,se,X){Ke(L),Ke(se),Ke(X);const re=i.length/3,j=_.generateTopUV(n,i,re-3,re-2,re-1);Le(j[0]),Le(j[1]),Le(j[2])}function Ce(L,se,X,re){Ke(L),Ke(se),Ke(re),Ke(se),Ke(X),Ke(re);const j=i.length/3,Se=_.generateSideWallUV(n,i,j-6,j-3,j-2,j-1);Le(Se[0]),Le(Se[1]),Le(Se[3]),Le(Se[1]),Le(Se[2]),Le(Se[3])}function Ke(L){i.push(c[L*3+0]),i.push(c[L*3+1]),i.push(c[L*3+2])}function Le(L){s.push(L.x),s.push(L.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Zv(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Vc[i.type]().fromJSON(i)),new nr(n,e.options)}}const Yv={generateTopUV:function(r,e,t,n,i){const s=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[i*3],h=e[i*3+1];return[new Z(s,a),new Z(o,c),new Z(l,h)]},generateSideWallUV:function(r,e,t,n,i,s){const a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],f=e[n*3+2],u=e[i*3],d=e[i*3+1],m=e[i*3+2],x=e[s*3],g=e[s*3+1],p=e[s*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new Z(a,1-c),new Z(l,1-f),new Z(u,1-m),new Z(x,1-p)]:[new Z(o,1-c),new Z(h,1-f),new Z(d,1-m),new Z(g,1-p)]}};function Zv(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ir extends In{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ir(e.radius,e.detail)}}class ls extends In{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ls(e.radius,e.detail)}}class sr extends He{constructor(e=.5,t=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],l=[],h=[];let f=e;const u=(t-e)/i,d=new T,m=new Z;for(let x=0;x<=i;x++){for(let g=0;g<=n;g++){const p=s+g/n*a;d.x=f*Math.cos(p),d.y=f*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),m.x=(d.x/t+1)/2,m.y=(d.y/t+1)/2,h.push(m.x,m.y)}f+=u}for(let x=0;x<i;x++){const g=x*(n+1);for(let p=0;p<n;p++){const _=p+g,v=_,y=_+n+1,S=_+n+2,A=_+1;o.push(v,y,A),o.push(y,S,A)}}this.setIndex(o),this.setAttribute("position",new xe(c,3)),this.setAttribute("normal",new xe(l,3)),this.setAttribute("uv",new xe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class rr extends He{constructor(e=new xi([new Z(0,.5),new Z(-.5,-.5),new Z(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],a=[];let o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new xe(i,3)),this.setAttribute("normal",new xe(s,3)),this.setAttribute("uv",new xe(a,2));function l(h){const f=i.length/3,u=h.extractPoints(t);let d=u.shape;const m=u.holes;fn.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,p=m.length;g<p;g++){const _=m[g];fn.isClockWise(_)===!0&&(m[g]=_.reverse())}const x=fn.triangulateShape(d,m);for(let g=0,p=m.length;g<p;g++){const _=m[g];d=d.concat(_)}for(let g=0,p=d.length;g<p;g++){const _=d[g];i.push(_.x,_.y,0),s.push(0,0,1),a.push(_.x,_.y)}for(let g=0,p=x.length;g<p;g++){const _=x[g],v=_[0]+f,y=_[1]+f,S=_[2]+f;n.push(v,y,S),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Jv(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const a=t[e.shapes[i]];n.push(a)}return new rr(n,e.curveSegments)}}function Jv(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class hs extends He{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],f=new T,u=new T,d=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){const _=[],v=p/n;let y=0;p===0&&a===0?y=.5/t:p===n&&c===Math.PI&&(y=-.5/t);for(let S=0;S<=t;S++){const A=S/t;f.x=-e*Math.cos(i+A*s)*Math.sin(a+v*o),f.y=e*Math.cos(a+v*o),f.z=e*Math.sin(i+A*s)*Math.sin(a+v*o),m.push(f.x,f.y,f.z),u.copy(f).normalize(),x.push(u.x,u.y,u.z),g.push(A+y,1-v),_.push(l++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<t;_++){const v=h[p][_+1],y=h[p][_],S=h[p+1][_],A=h[p+1][_+1];(p!==0||a>0)&&d.push(v,y,A),(p!==n-1||c<Math.PI)&&d.push(y,S,A)}this.setIndex(d),this.setAttribute("position",new xe(m,3)),this.setAttribute("normal",new xe(x,3)),this.setAttribute("uv",new xe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ar extends In{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ar(e.radius,e.detail)}}class or extends He{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],l=[],h=new T,f=new T,u=new T;for(let d=0;d<=n;d++)for(let m=0;m<=i;m++){const x=m/i*s,g=d/n*Math.PI*2;f.x=(e+t*Math.cos(g))*Math.cos(x),f.y=(e+t*Math.cos(g))*Math.sin(x),f.z=t*Math.sin(g),o.push(f.x,f.y,f.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),u.subVectors(f,h).normalize(),c.push(u.x,u.y,u.z),l.push(m/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=i;m++){const x=(i+1)*d+m-1,g=(i+1)*(d-1)+m-1,p=(i+1)*(d-1)+m,_=(i+1)*d+m;a.push(x,g,_),a.push(g,p,_)}this.setIndex(a),this.setAttribute("position",new xe(o,3)),this.setAttribute("normal",new xe(c,3)),this.setAttribute("uv",new xe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new or(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class cr extends He{constructor(e=1,t=.4,n=64,i=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:a},n=Math.floor(n),i=Math.floor(i);const o=[],c=[],l=[],h=[],f=new T,u=new T,d=new T,m=new T,x=new T,g=new T,p=new T;for(let v=0;v<=n;++v){const y=v/n*s*Math.PI*2;_(y,s,a,e,d),_(y+.01,s,a,e,m),g.subVectors(m,d),p.addVectors(m,d),x.crossVectors(g,p),p.crossVectors(x,g),x.normalize(),p.normalize();for(let S=0;S<=i;++S){const A=S/i*Math.PI*2,C=-t*Math.cos(A),P=t*Math.sin(A);f.x=d.x+(C*p.x+P*x.x),f.y=d.y+(C*p.y+P*x.y),f.z=d.z+(C*p.z+P*x.z),c.push(f.x,f.y,f.z),u.subVectors(f,d).normalize(),l.push(u.x,u.y,u.z),h.push(v/n),h.push(S/i)}}for(let v=1;v<=n;v++)for(let y=1;y<=i;y++){const S=(i+1)*(v-1)+(y-1),A=(i+1)*v+(y-1),C=(i+1)*v+y,P=(i+1)*(v-1)+y;o.push(S,A,P),o.push(A,C,P)}this.setIndex(o),this.setAttribute("position",new xe(c,3)),this.setAttribute("normal",new xe(l,3)),this.setAttribute("uv",new xe(h,2));function _(v,y,S,A,C){const P=Math.cos(v),M=Math.sin(v),w=S/y*v,F=Math.cos(w);C.x=A*(2+F)*.5*P,C.y=A*(2+F)*M*.5,C.z=A*Math.sin(w)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cr(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class lr extends He{constructor(e=new Bc(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new T,c=new T,l=new Z;let h=new T;const f=[],u=[],d=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new xe(f,3)),this.setAttribute("normal",new xe(u,3)),this.setAttribute("uv",new xe(d,2));function x(){for(let v=0;v<t;v++)g(v);g(s===!1?t:0),_(),p()}function g(v){h=e.getPointAt(v/t,h);const y=a.normals[v],S=a.binormals[v];for(let A=0;A<=i;A++){const C=A/i*Math.PI*2,P=Math.sin(C),M=-Math.cos(C);c.x=M*y.x+P*S.x,c.y=M*y.y+P*S.y,c.z=M*y.z+P*S.z,c.normalize(),u.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,f.push(o.x,o.y,o.z)}}function p(){for(let v=1;v<=t;v++)for(let y=1;y<=i;y++){const S=(i+1)*(v-1)+(y-1),A=(i+1)*v+(y-1),C=(i+1)*v+y,P=(i+1)*(v-1)+y;m.push(S,A,P),m.push(A,C,P)}}function _(){for(let v=0;v<=t;v++)for(let y=0;y<=i;y++)l.x=v/t,l.y=y/i,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new lr(new Vc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Tf extends He{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new T,s=new T;if(e.index!==null){const a=e.attributes.position,o=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){const f=c[l],u=f.start,d=f.count;for(let m=u,x=u+d;m<x;m+=3)for(let g=0;g<3;g++){const p=o.getX(m+g),_=o.getX(m+(g+1)%3);i.fromBufferAttribute(a,p),s.fromBufferAttribute(a,_),dh(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{const a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){const h=3*o+l,f=3*o+(l+1)%3;i.fromBufferAttribute(a,h),s.fromBufferAttribute(a,f),dh(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new xe(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function dh(r,e,t){const n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var ph=Object.freeze({__proto__:null,BoxGeometry:Zn,CapsuleGeometry:js,CircleGeometry:Qs,ConeGeometry:er,CylinderGeometry:Si,DodecahedronGeometry:tr,EdgesGeometry:yf,ExtrudeGeometry:nr,IcosahedronGeometry:ir,LatheGeometry:cs,OctahedronGeometry:ls,PlaneGeometry:as,PolyhedronGeometry:In,RingGeometry:sr,ShapeGeometry:rr,SphereGeometry:hs,TetrahedronGeometry:ar,TorusGeometry:or,TorusKnotGeometry:cr,TubeGeometry:lr,WireframeGeometry:Tf});class Ef extends At{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new de(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Af extends dn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Hc extends At{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xn,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class wf extends Hc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Z(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new de(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new de(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new de(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Rf extends At{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new de(16777215),this.specular=new de(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xn,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Js,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Cf extends At{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new de(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xn,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Pf extends At{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xn,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Lf extends At{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xn,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Js,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class If extends At{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new de(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xn,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Uf extends Ut{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Xt(r,e,t){return Gc(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)}function pi(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Gc(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Df(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function rc(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let c=0;c!==e;++c)i[a++]=r[o+c]}return i}function Wc(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}function $v(r,e,t,n,i=30){const s=r.clone();s.name=e;const a=[];for(let c=0;c<s.tracks.length;++c){const l=s.tracks[c],h=l.getValueSize(),f=[],u=[];for(let d=0;d<l.times.length;++d){const m=l.times[d]*i;if(!(m<t||m>=n)){f.push(l.times[d]);for(let x=0;x<h;++x)u.push(l.values[d*h+x])}}f.length!==0&&(l.times=pi(f,l.times.constructor),l.values=pi(u,l.values.constructor),a.push(l))}s.tracks=a;let o=1/0;for(let c=0;c<s.tracks.length;++c)o>s.tracks[c].times[0]&&(o=s.tracks[c].times[0]);for(let c=0;c<s.tracks.length;++c)s.tracks[c].shift(-1*o);return s.resetDuration(),s}function Kv(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let a=0;a<i;++a){const o=t.tracks[a],c=o.ValueTypeName;if(c==="bool"||c==="string")continue;const l=r.tracks.find(function(p){return p.name===o.name&&p.ValueTypeName===c});if(l===void 0)continue;let h=0;const f=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=f/3);let u=0;const d=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=d/3);const m=o.times.length-1;let x;if(s<=o.times[0]){const p=h,_=f-h;x=Xt(o.values,p,_)}else if(s>=o.times[m]){const p=m*f+h,_=p+f-h;x=Xt(o.values,p,_)}else{const p=o.createInterpolant(),_=h,v=f-h;p.evaluate(s),x=Xt(p.resultBuffer,_,v)}c==="quaternion"&&new Ft().fromArray(x).normalize().conjugate().toArray(x);const g=l.times.length;for(let p=0;p<g;++p){const _=p*d+u;if(c==="quaternion")Ft.multiplyQuaternionsFlat(l.values,_,x,0,l.values,_);else{const v=d-u*2;for(let y=0;y<v;++y)l.values[_+y]-=x[y]}}}return r.blendMode=Mc,r}const jv={arraySlice:Xt,convertArray:pi,isTypedArray:Gc,getKeyframeOrder:Df,sortedArray:rc,flattenJSON:Wc,subclip:$v,makeClipAdditive:Kv};class hr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Nf extends hr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ui,endingEnd:ui}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case fi:s=e,o=2*t-n;break;case Fs:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case fi:a=e,c=2*n-t;break;case Fs:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,m=(n-t)/(i-t),x=m*m,g=x*m,p=-u*g+2*u*x-u*m,_=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*m+1,v=(-1-d)*g+(1.5+d)*x+.5*m,y=d*g-d*x;for(let S=0;S!==o;++S)s[S]=p*a[h+S]+_*a[l+S]+v*a[c+S]+y*a[f+S];return s}}class qc extends hr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),f=1-h;for(let u=0;u!==o;++u)s[u]=a[l+u]*f+a[c+u]*h;return s}}class Ff extends hr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class sn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=pi(t,this.TimeBufferType),this.values=pi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:pi(e.times,Array),values:pi(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ff(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new qc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Nf(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ds:t=this.InterpolantFactoryMethodDiscrete;break;case Ns:t=this.InterpolantFactoryMethodLinear;break;case oa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ds;case this.InterpolantFactoryMethodLinear:return Ns;case this.InterpolantFactoryMethodSmooth:return oa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=Xt(n,s,a),this.values=Xt(this.values,s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&Gc(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=Xt(this.times),t=Xt(this.values),n=this.getValueSize(),i=this.getInterpolation()===oa,s=e.length-1;let a=1;for(let o=1;o<s;++o){let c=!1;const l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{const f=o*n,u=f-n,d=f+n;for(let m=0;m!==n;++m){const x=t[f+m];if(x!==t[u+m]||x!==t[d+m]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const f=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[f+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=Xt(e,0,a),this.values=Xt(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=Xt(this.times,0),t=Xt(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}sn.prototype.TimeBufferType=Float32Array;sn.prototype.ValueBufferType=Float32Array;sn.prototype.DefaultInterpolation=Ns;class Ti extends sn{}Ti.prototype.ValueTypeName="bool";Ti.prototype.ValueBufferType=Array;Ti.prototype.DefaultInterpolation=Ds;Ti.prototype.InterpolantFactoryMethodLinear=void 0;Ti.prototype.InterpolantFactoryMethodSmooth=void 0;class Xc extends sn{}Xc.prototype.ValueTypeName="color";class Ws extends sn{}Ws.prototype.ValueTypeName="number";class Of extends hr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let h=l+o;l!==h;l+=4)Ft.slerpFlat(s,0,a,l-o,a,l,c);return s}}class us extends sn{InterpolantFactoryMethodLinear(e){return new Of(this.times,this.values,this.getValueSize(),e)}}us.prototype.ValueTypeName="quaternion";us.prototype.DefaultInterpolation=Ns;us.prototype.InterpolantFactoryMethodSmooth=void 0;class Ei extends sn{}Ei.prototype.ValueTypeName="string";Ei.prototype.ValueBufferType=Array;Ei.prototype.DefaultInterpolation=Ds;Ei.prototype.InterpolantFactoryMethodLinear=void 0;Ei.prototype.InterpolantFactoryMethodSmooth=void 0;class qs extends sn{}qs.prototype.ValueTypeName="vector";class Xs{constructor(e,t=-1,n,i=_a){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ht(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(e_(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(sn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);const h=Df(c);c=rc(c,1,h),l=rc(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new Ws(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],h=l.name.match(s);if(h&&h.length>1){const f=h[1];let u=i[f];u||(i[f]=u=[]),u.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,u,d,m,x){if(d.length!==0){const g=[],p=[];Wc(d,g,p,m),g.length!==0&&x.push(new f(u,g,p))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let f=0;f<l.length;f++){const u=l[f].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const d={};let m;for(m=0;m<u.length;m++)if(u[m].morphTargets)for(let x=0;x<u[m].morphTargets.length;x++)d[u[m].morphTargets[x]]=-1;for(const x in d){const g=[],p=[];for(let _=0;_!==u[m].morphTargets.length;++_){const v=u[m];g.push(v.time),p.push(v.morphTarget===x?1:0)}i.push(new Ws(".morphTargetInfluence["+x+"]",g,p))}c=d.length*a}else{const d=".bones["+t[f].name+"]";n(qs,d+".position",u,"pos",i),n(us,d+".quaternion",u,"rot",i),n(qs,d+".scale",u,"scl",i)}}return i.length===0?null:new this(s,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Qv(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ws;case"vector":case"vector2":case"vector3":case"vector4":return qs;case"color":return Xc;case"quaternion":return us;case"bool":case"boolean":return Ti;case"string":return Ei}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function e_(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Qv(r.type);if(r.times===void 0){const t=[],n=[];Wc(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const bi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Yc{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){const f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=l.length;f<u;f+=2){const d=l[f],m=l[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null}}}const zf=new Yc;class Gt{constructor(e){this.manager=e!==void 0?e:zf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Sn={};class t_ extends Error{constructor(e,t){super(e),this.response=t}}class Pn extends Gt{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=bi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Sn[e]!==void 0){Sn[e].push({onLoad:t,onProgress:n,onError:i});return}Sn[e]=[],Sn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Sn[e],f=l.body.getReader(),u=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),d=u?parseInt(u):0,m=d!==0;let x=0;const g=new ReadableStream({start(p){_();function _(){f.read().then(({done:v,value:y})=>{if(v)p.close();else{x+=y.byteLength;const S=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:d});for(let A=0,C=h.length;A<C;A++){const P=h[A];P.onProgress&&P.onProgress(S)}p.enqueue(y),_()}})}}});return new Response(g)}else throw new t_(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),u=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(u);return l.arrayBuffer().then(m=>d.decode(m))}}}).then(l=>{bi.add(e,l);const h=Sn[e];delete Sn[e];for(let f=0,u=h.length;f<u;f++){const d=h[f];d.onLoad&&d.onLoad(l)}}).catch(l=>{const h=Sn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Sn[e];for(let f=0,u=h.length;f<u;f++){const d=h[f];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class n_ extends Gt{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new Pn(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=Xs.parse(e[n]);t.push(i)}return t}}class i_ extends Gt{constructor(e){super(e)}load(e,t,n,i){const s=this,a=[],o=new Nc,c=new Pn(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(s.withCredentials);let l=0;function h(f){c.load(e[f],function(u){const d=s.parse(u,!0);a[f]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},l+=1,l===6&&(d.mipmapCount===1&&(o.minFilter=ft),o.image=a,o.format=d.format,o.needsUpdate=!0,t&&t(o))},n,i)}if(Array.isArray(e))for(let f=0,u=e.length;f<u;++f)h(f);else c.load(e,function(f){const u=s.parse(f,!0);if(u.isCubemap){const d=u.mipmaps.length/u.mipmapCount;for(let m=0;m<d;m++){a[m]={mipmaps:[]};for(let x=0;x<u.mipmapCount;x++)a[m].mipmaps.push(u.mipmaps[m*u.mipmapCount+x]),a[m].format=u.format,a[m].width=u.width,a[m].height=u.height}o.image=a}else o.image.width=u.width,o.image.height=u.height,o.mipmaps=u.mipmaps;u.mipmapCount===1&&(o.minFilter=ft),o.format=u.format,o.needsUpdate=!0,t&&t(o)},n,i);return o}}class Ys extends Gt{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=bi.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Bs("img");function c(){h(),bi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(f){h(),i&&i(f),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class s_ extends Gt{constructor(e){super(e)}load(e,t,n,i){const s=new Ks;s.colorSpace=Oe;const a=new Ys(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function c(l){a.load(e[l],function(h){s.images[l]=h,o++,o===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let l=0;l<e.length;++l)c(l);return s}}class r_ extends Gt{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new Qi,o=new Pn(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(c){const l=s.parse(c);!l||(l.image!==void 0?a.image=l.image:l.data!==void 0&&(a.image.width=l.width,a.image.height=l.height,a.image.data=l.data),a.wrapS=l.wrapS!==void 0?l.wrapS:Et,a.wrapT=l.wrapT!==void 0?l.wrapT:Et,a.magFilter=l.magFilter!==void 0?l.magFilter:ft,a.minFilter=l.minFilter!==void 0?l.minFilter:ft,a.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0?a.colorSpace=l.colorSpace:l.encoding!==void 0&&(a.encoding=l.encoding),l.flipY!==void 0&&(a.flipY=l.flipY),l.format!==void 0&&(a.format=l.format),l.type!==void 0&&(a.type=l.type),l.mipmaps!==void 0&&(a.mipmaps=l.mipmaps,a.minFilter=Wn),l.mipmapCount===1&&(a.minFilter=ft),l.generateMipmaps!==void 0&&(a.generateMipmaps=l.generateMipmaps),a.needsUpdate=!0,t&&t(a,l))},n,i),a}}class a_ extends Gt{constructor(e){super(e)}load(e,t,n,i){const s=new dt,a=new Ys(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Jn extends Je{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new de(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Bf extends Jn{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.groundColor=new de(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const xo=new De,mh=new T,gh=new T;class Zc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Z(512,512),this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sa,this._frameExtents=new Z(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;mh.setFromMatrixPosition(e.matrixWorld),t.position.copy(mh),gh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gh),t.updateMatrixWorld(),xo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class o_ extends Zc{constructor(){super(new Mt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ts*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class kf extends Jn{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new o_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const xh=new De,bs=new T,vo=new T;class c_ extends Zc{constructor(){super(new Mt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Z(4,2),this._viewportCount=6,this._viewports=[new $e(2,1,1,1),new $e(0,1,1,1),new $e(3,1,1,1),new $e(1,1,1,1),new $e(3,0,1,1),new $e(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),bs.setFromMatrixPosition(e.matrixWorld),n.position.copy(bs),vo.copy(n.position),vo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(vo),n.updateMatrixWorld(),i.makeTranslation(-bs.x,-bs.y,-bs.z),xh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xh)}}class Vf extends Jn{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new c_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class l_ extends Zc{constructor(){super(new Ta(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hf extends Jn{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.shadow=new l_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Gf extends Jn{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Wf extends Jn{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class qf{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new T)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*s),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*i)),t.addScaledVector(a[5],1.092548*(i*s)),t.addScaledVector(a[6],.315392*(3*s*s-1)),t.addScaledVector(a[7],1.092548*(n*s)),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*i),t.addScaledVector(a[2],2*.511664*s),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*i),t.addScaledVector(a[5],2*.429043*i*s),t.addScaledVector(a[6],.743125*s*s-.247708),t.addScaledVector(a[7],2*.429043*n*s),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}class Ua extends Jn{constructor(e=new qf,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class Da extends Gt{constructor(e){super(e),this.textures={}}load(e,t,n,i){const s=this,a=new Pn(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(s){return t[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),t[s]}const i=Da.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new de().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==1&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const s in e.uniforms){const a=e.uniforms[s];switch(i.uniforms[s]={},a.type){case"t":i.uniforms[s].value=n(a.value);break;case"c":i.uniforms[s].value=new de().setHex(a.value);break;case"v2":i.uniforms[s].value=new Z().fromArray(a.value);break;case"v3":i.uniforms[s].value=new T().fromArray(a.value);break;case"v4":i.uniforms[s].value=new $e().fromArray(a.value);break;case"m3":i.uniforms[s].value=new ke().fromArray(a.value);break;case"m4":i.uniforms[s].value=new De().fromArray(a.value);break;default:i.uniforms[s].value=a.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)i.extensions[s]=e.extensions[s];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),i.normalScale=new Z().fromArray(s)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new Z().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}static createMaterialFromType(e){const t={ShadowMaterial:Ef,SpriteMaterial:Ic,RawShaderMaterial:Af,ShaderMaterial:dn,PointsMaterial:Dc,MeshPhysicalMaterial:wf,MeshStandardMaterial:Hc,MeshPhongMaterial:Rf,MeshToonMaterial:Cf,MeshNormalMaterial:Pf,MeshLambertMaterial:Lf,MeshDepthMaterial:Pc,MeshDistanceMaterial:Lc,MeshBasicMaterial:Yn,MeshMatcapMaterial:If,LineDashedMaterial:Uf,LineBasicMaterial:Ut,Material:At};return new t[e]}}class ac{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Xf extends He{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Yf extends Gt{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new Pn(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(d,m){if(t[m]!==void 0)return t[m];const g=d.interleavedBuffers[m],p=s(d,g.buffer),_=Zi(g.type,p),v=new Ra(_,g.stride);return v.uuid=g.uuid,t[m]=v,v}function s(d,m){if(n[m]!==void 0)return n[m];const g=d.arrayBuffers[m],p=new Uint32Array(g).buffer;return n[m]=p,p}const a=e.isInstancedBufferGeometry?new Xf:new He,o=e.data.index;if(o!==void 0){const d=Zi(o.type,o.array);a.setIndex(new je(d,1))}const c=e.data.attributes;for(const d in c){const m=c[d];let x;if(m.isInterleavedBufferAttribute){const g=i(e.data,m.data);x=new yi(g,m.itemSize,m.offset,m.normalized)}else{const g=Zi(m.type,m.array),p=m.isInstancedBufferAttribute?is:je;x=new p(g,m.itemSize,m.normalized)}m.name!==void 0&&(x.name=m.name),m.usage!==void 0&&x.setUsage(m.usage),m.updateRange!==void 0&&(x.updateRange.offset=m.updateRange.offset,x.updateRange.count=m.updateRange.count),a.setAttribute(d,x)}const l=e.data.morphAttributes;if(l)for(const d in l){const m=l[d],x=[];for(let g=0,p=m.length;g<p;g++){const _=m[g];let v;if(_.isInterleavedBufferAttribute){const y=i(e.data,_.data);v=new yi(y,_.itemSize,_.offset,_.normalized)}else{const y=Zi(_.type,_.array);v=new je(y,_.itemSize,_.normalized)}_.name!==void 0&&(v.name=_.name),x.push(v)}a.morphAttributes[d]=x}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const f=e.data.groups||e.data.drawcalls||e.data.offsets;if(f!==void 0)for(let d=0,m=f.length;d!==m;++d){const x=f[d];a.addGroup(x.start,x.count,x.materialIndex)}const u=e.data.boundingSphere;if(u!==void 0){const d=new T;u.center!==void 0&&d.fromArray(u.center),a.boundingSphere=new tn(d,u.radius)}return e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}class h_ extends Gt{constructor(e){super(e)}load(e,t,n,i){const s=this,a=this.path===""?ac.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;const o=new Pn(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(c){let l=null;try{l=JSON.parse(c)}catch(f){i!==void 0&&i(f),console.error("THREE:ObjectLoader: Can't parse "+e+".",f.message);return}const h=l.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}s.parse(l,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?ac.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const s=new Pn(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const a=await s.loadAsync(e,t),o=JSON.parse(a),c=o.metadata;if(c===void 0||c.type===void 0||c.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(o)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,i),a=this.parseImages(e.images,function(){t!==void 0&&t(l)}),o=this.parseTextures(e.textures,a),c=this.parseMaterials(e.materials,o),l=this.parseObject(e.object,s,c,o,n),h=this.parseSkeletons(e.skeletons,l);if(this.bindSkeletons(l,h),t!==void 0){let f=!1;for(const u in a)if(a[u].data instanceof HTMLImageElement){f=!0;break}f===!1&&t(l)}return l}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),s=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,s),o=this.parseMaterials(e.materials,a),c=this.parseObject(e.object,i,o,a,t),l=this.parseSkeletons(e.skeletons,c);return this.bindSkeletons(c,l),c}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const s=new xi().fromJSON(e[n]);t[s.uuid]=s}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(s){s.isBone&&(i[s.uuid]=s)}),e!==void 0)for(let s=0,a=e.length;s<a;s++){const o=new Ca().fromJSON(e[s],i);n[o.uuid]=o}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new Yf;for(let s=0,a=e.length;s<a;s++){let o;const c=e[s];switch(c.type){case"BufferGeometry":case"InstancedBufferGeometry":o=i.parse(c);break;default:c.type in ph?o=ph[c.type].fromJSON(c,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${c.type}"`)}o.uuid=c.uuid,c.name!==void 0&&(o.name=c.name),c.userData!==void 0&&(o.userData=c.userData),n[c.uuid]=o}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const s=new Da;s.setTextures(t);for(let a=0,o=e.length;a<o;a++){const c=e[a];n[c.uuid]===void 0&&(n[c.uuid]=s.parse(c)),i[c.uuid]=n[c.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],s=Xs.parse(i);t[s.uuid]=s}return t}parseImages(e,t){const n=this,i={};let s;function a(c){return n.manager.itemStart(c),s.load(c,function(){n.manager.itemEnd(c)},void 0,function(){n.manager.itemError(c),n.manager.itemEnd(c)})}function o(c){if(typeof c=="string"){const l=c,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:n.resourcePath+l;return a(h)}else return c.data?{data:Zi(c.type,c.data),width:c.width,height:c.height}:null}if(e!==void 0&&e.length>0){const c=new Yc(t);s=new Ys(c),s.setCrossOrigin(this.crossOrigin);for(let l=0,h=e.length;l<h;l++){const f=e[l],u=f.url;if(Array.isArray(u)){const d=[];for(let m=0,x=u.length;m<x;m++){const g=u[m],p=o(g);p!==null&&(p instanceof HTMLImageElement?d.push(p):d.push(new Qi(p.data,p.width,p.height)))}i[f.uuid]=new di(d)}else{const d=o(f.url);i[f.uuid]=new di(d)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function s(a){if(typeof a=="string"){const o=a,c=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await i.loadAsync(c)}else return a.data?{data:Zi(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){i=new Ys(this.manager),i.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){const c=e[a],l=c.url;if(Array.isArray(l)){const h=[];for(let f=0,u=l.length;f<u;f++){const d=l[f],m=await s(d);m!==null&&(m instanceof HTMLImageElement?h.push(m):h.push(new Qi(m.data,m.width,m.height)))}n[c.uuid]=new di(h)}else{const h=await s(c.url);n[c.uuid]=new di(h)}}}return n}parseTextures(e,t){function n(s,a){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),a[s])}const i={};if(e!==void 0)for(let s=0,a=e.length;s<a;s++){const o=e[s];o.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",o.image);const c=t[o.image],l=c.data;let h;Array.isArray(l)?(h=new Ks,l.length===6&&(h.needsUpdate=!0)):(l&&l.data?h=new Qi:h=new dt,l&&(h.needsUpdate=!0)),h.source=c,h.uuid=o.uuid,o.name!==void 0&&(h.name=o.name),o.mapping!==void 0&&(h.mapping=n(o.mapping,u_)),o.channel!==void 0&&(h.channel=o.channel),o.offset!==void 0&&h.offset.fromArray(o.offset),o.repeat!==void 0&&h.repeat.fromArray(o.repeat),o.center!==void 0&&h.center.fromArray(o.center),o.rotation!==void 0&&(h.rotation=o.rotation),o.wrap!==void 0&&(h.wrapS=n(o.wrap[0],vh),h.wrapT=n(o.wrap[1],vh)),o.format!==void 0&&(h.format=o.format),o.internalFormat!==void 0&&(h.internalFormat=o.internalFormat),o.type!==void 0&&(h.type=o.type),o.colorSpace!==void 0&&(h.colorSpace=o.colorSpace),o.encoding!==void 0&&(h.encoding=o.encoding),o.minFilter!==void 0&&(h.minFilter=n(o.minFilter,_h)),o.magFilter!==void 0&&(h.magFilter=n(o.magFilter,_h)),o.anisotropy!==void 0&&(h.anisotropy=o.anisotropy),o.flipY!==void 0&&(h.flipY=o.flipY),o.generateMipmaps!==void 0&&(h.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(h.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(h.compareFunction=o.compareFunction),o.userData!==void 0&&(h.userData=o.userData),i[o.uuid]=h}return i}parseObject(e,t,n,i,s){let a;function o(u){return t[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",u),t[u]}function c(u){if(u!==void 0){if(Array.isArray(u)){const d=[];for(let m=0,x=u.length;m<x;m++){const g=u[m];n[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),d.push(n[g])}return d}return n[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",u),n[u]}}function l(u){return i[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",u),i[u]}let h,f;switch(e.type){case"Scene":a=new of,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new de(e.background):a.background=l(e.background)),e.environment!==void 0&&(a.environment=l(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new wa(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new Aa(e.fog.color,e.fog.density))),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity);break;case"PerspectiveCamera":a=new Mt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new Ta(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new Gf(e.color,e.intensity);break;case"DirectionalLight":a=new Hf(e.color,e.intensity);break;case"PointLight":a=new Vf(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new Wf(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new kf(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":a=new Bf(e.color,e.groundColor,e.intensity);break;case"LightProbe":a=new Ua().fromJSON(e);break;case"SkinnedMesh":h=o(e.geometry),f=c(e.material),a=new uf(h,f),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":h=o(e.geometry),f=c(e.material),a=new bt(h,f);break;case"InstancedMesh":h=o(e.geometry),f=c(e.material);const u=e.count,d=e.instanceMatrix,m=e.instanceColor;a=new ff(h,f,u),a.instanceMatrix=new is(new Float32Array(d.array),16),m!==void 0&&(a.instanceColor=new is(new Float32Array(m.array),m.itemSize));break;case"LOD":a=new hf;break;case"Line":a=new qn(o(e.geometry),c(e.material));break;case"LineLoop":a=new df(o(e.geometry),c(e.material));break;case"LineSegments":a=new mn(o(e.geometry),c(e.material));break;case"PointCloud":case"Points":a=new pf(o(e.geometry),c(e.material));break;case"Sprite":a=new lf(c(e.material));break;case"Group":a=new $i;break;case"Bone":a=new Uc;break;default:a=new Je}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){const u=e.children;for(let d=0;d<u.length;d++)a.add(this.parseObject(u[d],t,n,i,s))}if(e.animations!==void 0){const u=e.animations;for(let d=0;d<u.length;d++){const m=u[d];a.animations.push(s[m])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);const u=e.levels;for(let d=0;d<u.length;d++){const m=u[d],x=a.getObjectByProperty("uuid",m.object);x!==void 0&&a.addLevel(x,m.distance,m.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}}const u_={UVMapping:xa,CubeReflectionMapping:Hn,CubeRefractionMapping:Gn,EquirectangularReflectionMapping:Ps,EquirectangularRefractionMapping:Ls,CubeUVReflectionMapping:ss},vh={RepeatWrapping:Is,ClampToEdgeWrapping:Et,MirroredRepeatWrapping:Us},_h={NearestFilter:ut,NearestMipmapNearestFilter:da,NearestMipmapLinearFilter:Es,LinearFilter:ft,LinearMipmapNearestFilter:pc,LinearMipmapLinearFilter:Wn};class f_ extends Gt{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=bi.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){bi.add(e,c),t&&t(c),s.manager.itemEnd(e)}).catch(function(c){i&&i(c),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}let Zr;class Jc{static getContext(){return Zr===void 0&&(Zr=new(window.AudioContext||window.webkitAudioContext)),Zr}static setContext(e){Zr=e}}class d_ extends Gt{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new Pn(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){try{const l=c.slice(0);Jc.getContext().decodeAudioData(l,function(f){t(f)},o)}catch(l){o(l)}},n,i);function o(c){i?i(c):console.error(c),s.manager.itemError(e)}}}class p_ extends Ua{constructor(e,t,n=1){super(void 0,n),this.isHemisphereLightProbe=!0;const i=new de().set(e),s=new de().set(t),a=new T(i.r,i.g,i.b),o=new T(s.r,s.g,s.b),c=Math.sqrt(Math.PI),l=c*Math.sqrt(.75);this.sh.coefficients[0].copy(a).add(o).multiplyScalar(c),this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(l)}}class m_ extends Ua{constructor(e,t=1){super(void 0,t),this.isAmbientLightProbe=!0;const n=new de().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}const yh=new De,Mh=new De,ii=new De;class g_{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Mt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Mt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,ii.copy(e.projectionMatrix);const i=t.eyeSep/2,s=i*t.near/t.focus,a=t.near*Math.tan(gi*t.fov*.5)/t.zoom;let o,c;Mh.elements[12]=-i,yh.elements[12]=i,o=-a*t.aspect+s,c=a*t.aspect+s,ii.elements[0]=2*t.near/(c-o),ii.elements[8]=(c+o)/(c-o),this.cameraL.projectionMatrix.copy(ii),o=-a*t.aspect-s,c=a*t.aspect-s,ii.elements[0]=2*t.near/(c-o),ii.elements[8]=(c+o)/(c-o),this.cameraR.projectionMatrix.copy(ii)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Mh),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(yh)}}class Zf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=bh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=bh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function bh(){return(typeof performance>"u"?Date:performance).now()}const si=new T,Sh=new Ft,x_=new T,ri=new T;class v_ extends Je{constructor(){super(),this.type="AudioListener",this.context=Jc.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Zf}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(si,Sh,x_),ri.set(0,0,-1).applyQuaternion(Sh),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(si.x,i),t.positionY.linearRampToValueAtTime(si.y,i),t.positionZ.linearRampToValueAtTime(si.z,i),t.forwardX.linearRampToValueAtTime(ri.x,i),t.forwardY.linearRampToValueAtTime(ri.y,i),t.forwardZ.linearRampToValueAtTime(ri.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(si.x,si.y,si.z),t.setOrientation(ri.x,ri.y,ri.z,n.x,n.y,n.z)}}class Jf extends Je{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const ai=new T,Th=new Ft,__=new T,oi=new T;class y_ extends Jf{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(ai,Th,__),oi.set(0,0,1).applyQuaternion(Th);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(ai.x,n),t.positionY.linearRampToValueAtTime(ai.y,n),t.positionZ.linearRampToValueAtTime(ai.z,n),t.orientationX.linearRampToValueAtTime(oi.x,n),t.orientationY.linearRampToValueAtTime(oi.y,n),t.orientationZ.linearRampToValueAtTime(oi.z,n)}else t.setPosition(ai.x,ai.y,ai.z),t.setOrientation(oi.x,oi.y,oi.z)}}class M_{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class $f{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,a;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Ft.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const a=this._workIndex*s;Ft.multiplyQuaternionsFlat(e,a,e,t,e,n),Ft.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){const a=1-i;for(let o=0;o!==s;++o){const c=t+o;e[c]=e[c]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const $c="\\[\\]\\.:\\/",b_=new RegExp("["+$c+"]","g"),Kc="[^"+$c+"]",S_="[^"+$c.replace("\\.","")+"]",T_=/((?:WC+[\/:])*)/.source.replace("WC",Kc),E_=/(WCOD+)?/.source.replace("WCOD",S_),A_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kc),w_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kc),R_=new RegExp("^"+T_+E_+A_+w_+"$"),C_=["material","materials","bones","map"];class P_{constructor(e,t,n){const i=n||Ye.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ye{constructor(e,t,n){this.path=t,this.parsedPath=n||Ye.parseTrackName(t),this.node=Ye.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ye.Composite(e,t,n):new Ye(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(b_,"")}static parseTrackName(e){const t=R_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);C_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Ye.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[i];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ye.Composite=P_;Ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ye.prototype.GetterByBindingType=[Ye.prototype._getValue_direct,Ye.prototype._getValue_array,Ye.prototype._getValue_arrayElement,Ye.prototype._getValue_toArray];Ye.prototype.SetterByBindingTypeAndVersioning=[[Ye.prototype._setValue_direct,Ye.prototype._setValue_direct_setNeedsUpdate,Ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_array,Ye.prototype._setValue_array_setNeedsUpdate,Ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_arrayElement,Ye.prototype._setValue_arrayElement_setNeedsUpdate,Ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_fromArray,Ye.prototype._setValue_fromArray_setNeedsUpdate,Ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class L_{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Ht(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,s=this._bindings,a=s.length;let o,c=e.length,l=this.nCachedObjects_;for(let h=0,f=arguments.length;h!==f;++h){const u=arguments[h],d=u.uuid;let m=t[d];if(m===void 0){m=c++,t[d]=m,e.push(u);for(let x=0,g=a;x!==g;++x)s[x].push(new Ye(u,n[x],i[x]))}else if(m<l){o=e[m];const x=--l,g=e[x];t[g.uuid]=m,e[m]=g,t[d]=x,e[x]=u;for(let p=0,_=a;p!==_;++p){const v=s[p],y=v[x];let S=v[m];v[m]=y,S===void 0&&(S=new Ye(u,n[p],i[p])),v[x]=S}}else e[m]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){const c=arguments[a],l=c.uuid,h=t[l];if(h!==void 0&&h>=s){const f=s++,u=e[f];t[u.uuid]=h,e[h]=u,t[l]=f,e[f]=c;for(let d=0,m=i;d!==m;++d){const x=n[d],g=x[f],p=x[h];x[h]=g,x[f]=p}}}this.nCachedObjects_=s}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_,a=e.length;for(let o=0,c=arguments.length;o!==c;++o){const l=arguments[o],h=l.uuid,f=t[h];if(f!==void 0)if(delete t[h],f<s){const u=--s,d=e[u],m=--a,x=e[m];t[d.uuid]=f,e[f]=d,t[x.uuid]=u,e[u]=x,e.pop();for(let g=0,p=i;g!==p;++g){const _=n[g],v=_[u],y=_[m];_[f]=v,_[u]=y,_.pop()}}else{const u=--a,d=e[u];u>0&&(t[d.uuid]=f),e[f]=d,e.pop();for(let m=0,x=i;m!==x;++m){const g=n[m];g[f]=g[u],g.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const s=this._bindings;if(i!==void 0)return s[i];const a=this._paths,o=this._parsedPaths,c=this._objects,l=c.length,h=this.nCachedObjects_,f=new Array(l);i=s.length,n[e]=i,a.push(e),o.push(t),s.push(f);for(let u=h,d=c.length;u!==d;++u){const m=c[u];f[u]=new Ye(m,e,t)}return f}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,s=this._parsedPaths,a=this._bindings,o=a.length-1,c=a[o],l=e[o];t[l]=n,a[n]=c,a.pop(),s[n]=s[o],s.pop(),i[n]=i[o],i.pop()}}}class Kf{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,a=s.length,o=new Array(a),c={endingStart:ui,endingEnd:ui};for(let l=0;l!==a;++l){const h=s[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Cu,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,a=s/i,o=i/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=s,c[1]=s+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Mc:for(let h=0,f=c.length;h!==f;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case _a:default:for(let h=0,f=c.length;h!==f;++h)c[h].evaluate(a),l[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;n!==null&&(t*=n.evaluate(e)[0],e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const a=n===Pu;if(e===0)return s===-1?i:a&&(s&1)===1?t-i:i;if(n===Ru){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=fi,i.endingEnd=fi):(e?i.endingStart=this.zeroSlopeAtStart?fi:ui:i.endingStart=Fs,t?i.endingEnd=this.zeroSlopeAtEnd?fi:ui:i.endingEnd=Fs)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=s,c[0]=t,o[1]=s+e,c[1]=n,this}}const I_=new Float32Array(1);class U_ extends Ln{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let f=0;f!==s;++f){const u=i[f],d=u.name;let m=h[d];if(m!==void 0)++m.referenceCount,a[f]=m;else{if(m=a[f],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,d));continue}const x=t&&t._propertyBindings[f].binding.parsedPath;m=new $f(Ye.create(n,d,x),u.ValueTypeName,u.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,d),a[f]=m}o[f].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,o=a[s],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;const f=o.actionByRoot,u=(e._localRoot||this._root).uuid;delete f[u],c.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new qc(new Float32Array(2),new Float32Array(2),1,I_),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let a=typeof e=="string"?Xs.findByName(i,e):e;const o=a!==null?a.uuid:e,c=this._actionsByClip[o];let l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=_a),c!==void 0){const f=c.actionByRoot[s];if(f!==void 0&&f.blendMode===n)return f;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;const h=new Kf(this,a,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,s),h}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?Xs.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,s,a);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const a=s.knownActions;for(let o=0,c=a.length;o!==c;++o){const l=a[o];this._deactivateAction(l);const h=l._cacheIndex,f=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,f._cacheIndex=h,t[h]=f,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class jc{constructor(e){this.value=e}clone(){return new jc(this.value.clone===void 0?this.value:this.value.clone())}}let D_=0;class N_ extends Ln{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:D_++}),this.name="",this.usage=Os,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++)this.uniforms.push(t[n].clone());return this}clone(){return new this.constructor().copy(this)}}class F_ extends Ra{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class O_{constructor(e,t,n,i,s){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}class z_{constructor(e,t,n=0,i=1/0){this.ray=new rs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ma,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return oc(e,this,n,t),n.sort(Eh),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)oc(e[i],this,n,t);return n.sort(Eh),n}}function Eh(r,e){return r.distance-e.distance}function oc(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,a=i.length;s<a;s++)oc(i[s],e,t,!0)}}class B_{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ct(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class k_{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}const Ah=new Z;class V_{constructor(e=new Z(1/0,1/0),t=new Z(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ah.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ah).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wh=new T,Jr=new T;class jf{constructor(e=new T,t=new T){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){wh.subVectors(e,this.start),Jr.subVectors(this.end,this.start);const n=Jr.dot(Jr);let s=Jr.dot(wh)/n;return t&&(s=ct(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Rh=new T;class H_ extends Je{constructor(e,t){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new He,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,c=32;a<c;a++,o++){const l=a/c*Math.PI*2,h=o/c*Math.PI*2;i.push(Math.cos(l),Math.sin(l),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new xe(i,3));const s=new Ut({fog:!1,toneMapped:!1});this.cone=new mn(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Rh.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Rh),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const On=new T,$r=new De,_o=new De;class G_ extends mn{constructor(e){const t=Qf(e),n=new He,i=[],s=[],a=new de(0,0,1),o=new de(0,1,0);for(let l=0;l<t.length;l++){const h=t[l];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(a.r,a.g,a.b),s.push(o.r,o.g,o.b))}n.setAttribute("position",new xe(i,3)),n.setAttribute("color",new xe(s,3));const c=new Ut({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,c),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");_o.copy(this.root.matrixWorld).invert();for(let s=0,a=0;s<t.length;s++){const o=t[s];o.parent&&o.parent.isBone&&($r.multiplyMatrices(_o,o.matrixWorld),On.setFromMatrixPosition($r),i.setXYZ(a,On.x,On.y,On.z),$r.multiplyMatrices(_o,o.parent.matrixWorld),On.setFromMatrixPosition($r),i.setXYZ(a+1,On.x,On.y,On.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function Qf(r){const e=[];r.isBone===!0&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,Qf(r.children[t]));return e}class W_ extends bt{constructor(e,t,n){const i=new hs(t,4,2),s=new Yn({wireframe:!0,fog:!1,toneMapped:!1});super(i,s),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const q_=new T,Ch=new de,Ph=new de;class X_ extends Je{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new ls(t);i.rotateY(Math.PI*.5),this.material=new Yn({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=i.getAttribute("position"),a=new Float32Array(s.count*3);i.setAttribute("color",new je(a,3)),this.add(new bt(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");Ch.copy(this.light.color),Ph.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const s=n<i/2?Ch:Ph;t.setXYZ(n,s.r,s.g,s.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(q_.setFromMatrixPosition(this.light.matrixWorld).negate())}}class Y_ extends mn{constructor(e=10,t=10,n=4473924,i=8947848){n=new de(n),i=new de(i);const s=t/2,a=e/t,o=e/2,c=[],l=[];for(let u=0,d=0,m=-o;u<=t;u++,m+=a){c.push(-o,0,m,o,0,m),c.push(m,0,-o,m,0,o);const x=u===s?n:i;x.toArray(l,d),d+=3,x.toArray(l,d),d+=3,x.toArray(l,d),d+=3,x.toArray(l,d),d+=3}const h=new He;h.setAttribute("position",new xe(c,3)),h.setAttribute("color",new xe(l,3));const f=new Ut({vertexColors:!0,toneMapped:!1});super(h,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Z_ extends mn{constructor(e=10,t=16,n=8,i=64,s=4473924,a=8947848){s=new de(s),a=new de(a);const o=[],c=[];if(t>1)for(let f=0;f<t;f++){const u=f/t*(Math.PI*2),d=Math.sin(u)*e,m=Math.cos(u)*e;o.push(0,0,0),o.push(d,0,m);const x=f&1?s:a;c.push(x.r,x.g,x.b),c.push(x.r,x.g,x.b)}for(let f=0;f<n;f++){const u=f&1?s:a,d=e-e/n*f;for(let m=0;m<i;m++){let x=m/i*(Math.PI*2),g=Math.sin(x)*d,p=Math.cos(x)*d;o.push(g,0,p),c.push(u.r,u.g,u.b),x=(m+1)/i*(Math.PI*2),g=Math.sin(x)*d,p=Math.cos(x)*d,o.push(g,0,p),c.push(u.r,u.g,u.b)}}const l=new He;l.setAttribute("position",new xe(o,3)),l.setAttribute("color",new xe(c,3));const h=new Ut({vertexColors:!0,toneMapped:!1});super(l,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Lh=new T,Kr=new T,Ih=new T;class J_ extends Je{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new He;i.setAttribute("position",new xe([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new Ut({fog:!1,toneMapped:!1});this.lightPlane=new qn(i,s),this.add(this.lightPlane),i=new He,i.setAttribute("position",new xe([0,0,0,0,0,1],3)),this.targetLine=new qn(i,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Lh.setFromMatrixPosition(this.light.matrixWorld),Kr.setFromMatrixPosition(this.light.target.matrixWorld),Ih.subVectors(Kr,Lh),this.lightPlane.lookAt(Kr),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Kr),this.targetLine.scale.z=Ih.length()}}const jr=new T,at=new ba;class $_ extends mn{constructor(e){const t=new He,n=new Ut({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],s=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(m,x){c(m),c(x)}function c(m){i.push(0,0,0),s.push(0,0,0),a[m]===void 0&&(a[m]=[]),a[m].push(i.length/3-1)}t.setAttribute("position",new xe(i,3)),t.setAttribute("color",new xe(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const l=new de(16755200),h=new de(16711680),f=new de(43775),u=new de(16777215),d=new de(3355443);this.setColors(l,h,f,u,d)}setColors(e,t,n,i,s){const o=this.geometry.getAttribute("color");o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,i.r,i.g,i.b),o.setXYZ(39,i.r,i.g,i.b),o.setXYZ(40,s.r,s.g,s.b),o.setXYZ(41,s.r,s.g,s.b),o.setXYZ(42,s.r,s.g,s.b),o.setXYZ(43,s.r,s.g,s.b),o.setXYZ(44,s.r,s.g,s.b),o.setXYZ(45,s.r,s.g,s.b),o.setXYZ(46,s.r,s.g,s.b),o.setXYZ(47,s.r,s.g,s.b),o.setXYZ(48,s.r,s.g,s.b),o.setXYZ(49,s.r,s.g,s.b),o.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;at.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),ht("c",t,e,at,0,0,-1),ht("t",t,e,at,0,0,1),ht("n1",t,e,at,-n,-i,-1),ht("n2",t,e,at,n,-i,-1),ht("n3",t,e,at,-n,i,-1),ht("n4",t,e,at,n,i,-1),ht("f1",t,e,at,-n,-i,1),ht("f2",t,e,at,n,-i,1),ht("f3",t,e,at,-n,i,1),ht("f4",t,e,at,n,i,1),ht("u1",t,e,at,n*.7,i*1.1,-1),ht("u2",t,e,at,-n*.7,i*1.1,-1),ht("u3",t,e,at,0,i*2,-1),ht("cf1",t,e,at,-n,0,1),ht("cf2",t,e,at,n,0,1),ht("cf3",t,e,at,0,-i,1),ht("cf4",t,e,at,0,i,1),ht("cn1",t,e,at,-n,0,-1),ht("cn2",t,e,at,n,0,-1),ht("cn3",t,e,at,0,-i,-1),ht("cn4",t,e,at,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function ht(r,e,t,n,i,s,a){jr.set(i,s,a).unproject(n);const o=e[r];if(o!==void 0){const c=t.getAttribute("position");for(let l=0,h=o.length;l<h;l++)c.setXYZ(o[l],jr.x,jr.y,jr.z)}}const Qr=new pn;class K_ extends mn{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),s=new He;s.setIndex(new je(n,1)),s.setAttribute("position",new je(i,3)),super(s,new Ut({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Qr.setFromObject(this.object),Qr.isEmpty())return;const t=Qr.min,n=Qr.max,i=this.geometry.attributes.position,s=i.array;s[0]=n.x,s[1]=n.y,s[2]=n.z,s[3]=t.x,s[4]=n.y,s[5]=n.z,s[6]=t.x,s[7]=t.y,s[8]=n.z,s[9]=n.x,s[10]=t.y,s[11]=n.z,s[12]=n.x,s[13]=n.y,s[14]=t.z,s[15]=t.x,s[16]=n.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=n.x,s[22]=t.y,s[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class j_ extends mn{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new He;s.setIndex(new je(n,1)),s.setAttribute("position",new xe(i,3)),super(s,new Ut({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class Q_ extends qn{constructor(e,t=1,n=16776960){const i=n,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new He;a.setAttribute("position",new xe(s,3)),a.computeBoundingSphere(),super(a,new Ut({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],c=new He;c.setAttribute("position",new xe(o,3)),c.computeBoundingSphere(),this.add(new bt(c,new Yn({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const Uh=new T;let ea,yo;class ey extends Je{constructor(e=new T(0,0,1),t=new T(0,0,0),n=1,i=16776960,s=n*.2,a=s*.2){super(),this.type="ArrowHelper",ea===void 0&&(ea=new He,ea.setAttribute("position",new xe([0,0,0,0,1,0],3)),yo=new Si(0,.5,1,5,1),yo.translate(0,-.5,0)),this.position.copy(t),this.line=new qn(ea,new Ut({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new bt(yo,new Yn({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Uh.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Uh,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class ty extends mn{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new He;i.setAttribute("position",new xe(t,3)),i.setAttribute("color",new xe(n,3));const s=new Ut({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new de,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class ny{constructor(){this.type="ShapePath",this.color=new de,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new ks,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,a){return this.currentPath.bezierCurveTo(e,t,n,i,s,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const _=[];for(let v=0,y=p.length;v<y;v++){const S=p[v],A=new xi;A.curves=S.curves,_.push(A)}return _}function n(p,_){const v=_.length;let y=!1;for(let S=v-1,A=0;A<v;S=A++){let C=_[S],P=_[A],M=P.x-C.x,w=P.y-C.y;if(Math.abs(w)>Number.EPSILON){if(w<0&&(C=_[A],M=-M,P=_[S],w=-w),p.y<C.y||p.y>P.y)continue;if(p.y===C.y){if(p.x===C.x)return!0}else{const F=w*(p.x-C.x)-M*(p.y-C.y);if(F===0)return!0;if(F<0)continue;y=!y}}else{if(p.y!==C.y)continue;if(P.x<=p.x&&p.x<=C.x||C.x<=p.x&&p.x<=P.x)return!0}}return y}const i=fn.isClockWise,s=this.subPaths;if(s.length===0)return[];let a,o,c;const l=[];if(s.length===1)return o=s[0],c=new xi,c.curves=o.curves,l.push(c),l;let h=!i(s[0].getPoints());h=e?!h:h;const f=[],u=[];let d=[],m=0,x;u[m]=void 0,d[m]=[];for(let p=0,_=s.length;p<_;p++)o=s[p],x=o.getPoints(),a=i(x),a=e?!a:a,a?(!h&&u[m]&&m++,u[m]={s:new xi,p:x},u[m].s.curves=o.curves,h&&m++,d[m]=[]):d[m].push({h:o,p:x[0]});if(!u[0])return t(s);if(u.length>1){let p=!1,_=0;for(let v=0,y=u.length;v<y;v++)f[v]=[];for(let v=0,y=u.length;v<y;v++){const S=d[v];for(let A=0;A<S.length;A++){const C=S[A];let P=!0;for(let M=0;M<u.length;M++)n(C.p,u[M].p)&&(v!==M&&_++,P?(P=!1,f[M].push(C)):p=!0);P&&f[v].push(C)}}_>0&&p===!1&&(d=f)}let g;for(let p=0,_=u.length;p<_;p++){c=u[p].s,l.push(c),g=d[p];for(let v=0,y=g.length;v<y;v++)c.holes.push(g[v].h)}return l}}class iy extends Zn{constructor(e,t,n,i,s,a){console.warn("THREE.BoxBufferGeometry has been renamed to THREE.BoxGeometry."),super(e,t,n,i,s,a)}}class sy extends js{constructor(e,t,n,i){console.warn("THREE.CapsuleBufferGeometry has been renamed to THREE.CapsuleGeometry."),super(e,t,n,i)}}class ry extends Qs{constructor(e,t,n,i){console.warn("THREE.CircleBufferGeometry has been renamed to THREE.CircleGeometry."),super(e,t,n,i)}}class ay extends er{constructor(e,t,n,i,s,a,o){console.warn("THREE.ConeBufferGeometry has been renamed to THREE.ConeGeometry."),super(e,t,n,i,s,a,o)}}class oy extends Si{constructor(e,t,n,i,s,a,o,c){console.warn("THREE.CylinderBufferGeometry has been renamed to THREE.CylinderGeometry."),super(e,t,n,i,s,a,o,c)}}class cy extends tr{constructor(e,t){console.warn("THREE.DodecahedronBufferGeometry has been renamed to THREE.DodecahedronGeometry."),super(e,t)}}class ly extends nr{constructor(e,t){console.warn("THREE.ExtrudeBufferGeometry has been renamed to THREE.ExtrudeGeometry."),super(e,t)}}class hy extends ir{constructor(e,t){console.warn("THREE.IcosahedronBufferGeometry has been renamed to THREE.IcosahedronGeometry."),super(e,t)}}class uy extends cs{constructor(e,t,n,i){console.warn("THREE.LatheBufferGeometry has been renamed to THREE.LatheGeometry."),super(e,t,n,i)}}class fy extends ls{constructor(e,t){console.warn("THREE.OctahedronBufferGeometry has been renamed to THREE.OctahedronGeometry."),super(e,t)}}class dy extends as{constructor(e,t,n,i){console.warn("THREE.PlaneBufferGeometry has been renamed to THREE.PlaneGeometry."),super(e,t,n,i)}}class py extends In{constructor(e,t,n,i){console.warn("THREE.PolyhedronBufferGeometry has been renamed to THREE.PolyhedronGeometry."),super(e,t,n,i)}}class my extends sr{constructor(e,t,n,i,s,a){console.warn("THREE.RingBufferGeometry has been renamed to THREE.RingGeometry."),super(e,t,n,i,s,a)}}class gy extends rr{constructor(e,t){console.warn("THREE.ShapeBufferGeometry has been renamed to THREE.ShapeGeometry."),super(e,t)}}class xy extends hs{constructor(e,t,n,i,s,a,o){console.warn("THREE.SphereBufferGeometry has been renamed to THREE.SphereGeometry."),super(e,t,n,i,s,a,o)}}class vy extends ar{constructor(e,t){console.warn("THREE.TetrahedronBufferGeometry has been renamed to THREE.TetrahedronGeometry."),super(e,t)}}class _y extends or{constructor(e,t,n,i,s){console.warn("THREE.TorusBufferGeometry has been renamed to THREE.TorusGeometry."),super(e,t,n,i,s)}}class yy extends cr{constructor(e,t,n,i,s,a){console.warn("THREE.TorusKnotBufferGeometry has been renamed to THREE.TorusKnotGeometry."),super(e,t,n,i,s,a)}}class My extends lr{constructor(e,t,n,i,s){console.warn("THREE.TubeBufferGeometry has been renamed to THREE.TubeGeometry."),super(e,t,n,i,s)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ga}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ga);const rM=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:xu,AddEquation:li,AddOperation:du,AdditiveAnimationBlendMode:Mc,AdditiveBlending:To,AlphaFormat:Mu,AlwaysCompare:Hu,AlwaysDepth:au,AlwaysStencilFunc:Du,AmbientLight:Gf,AmbientLightProbe:m_,AnimationAction:Kf,AnimationClip:Xs,AnimationLoader:n_,AnimationMixer:U_,AnimationObjectGroup:L_,AnimationUtils:jv,ArcCurve:mf,ArrayCamera:nf,ArrowHelper:ey,Audio:Jf,AudioAnalyser:M_,AudioContext:Jc,AudioListener:v_,AudioLoader:d_,AxesHelper:ty,BackSide:It,BasicDepthPacking:Lu,BasicShadowMap:vd,Bone:Uc,BooleanKeyframeTrack:Ti,Box2:V_,Box3:pn,Box3Helper:j_,BoxBufferGeometry:iy,BoxGeometry:Zn,BoxHelper:K_,BufferAttribute:je,BufferGeometry:He,BufferGeometryLoader:Yf,ByteType:_u,Cache:bi,Camera:ba,CameraHelper:$_,CanvasTexture:bv,CapsuleBufferGeometry:sy,CapsuleGeometry:js,CatmullRomCurve3:gf,CineonToneMapping:gu,CircleBufferGeometry:ry,CircleGeometry:Qs,ClampToEdgeWrapping:Et,Clock:Zf,Color:de,ColorKeyframeTrack:Xc,ColorManagement:qt,CompressedArrayTexture:Mv,CompressedTexture:Nc,CompressedTextureLoader:i_,ConeBufferGeometry:ay,ConeGeometry:er,CubeCamera:Zu,CubeReflectionMapping:Hn,CubeRefractionMapping:Gn,CubeTexture:Ks,CubeTextureLoader:s_,CubeUVReflectionMapping:ss,CubicBezierCurve:Oc,CubicBezierCurve3:xf,CubicInterpolant:Nf,CullFaceBack:So,CullFaceFront:qh,CullFaceFrontBack:xd,CullFaceNone:Wh,Curve:nn,CurvePath:_f,CustomBlending:Yh,CustomToneMapping:vu,CylinderBufferGeometry:oy,CylinderGeometry:Si,Cylindrical:k_,Data3DTexture:Ac,DataArrayTexture:ya,DataTexture:Qi,DataTextureLoader:r_,DataUtils:Lp,DecrementStencilOp:Pd,DecrementWrapStencilOp:Id,DefaultLoadingManager:zf,DepthFormat:Bn,DepthStencilFormat:_i,DepthTexture:sf,DirectionalLight:Hf,DirectionalLightHelper:J_,DiscreteInterpolant:Ff,DisplayP3ColorSpace:Sc,DodecahedronBufferGeometry:cy,DodecahedronGeometry:tr,DoubleSide:on,DstAlphaFactor:eu,DstColorFactor:nu,DynamicCopyUsage:Yd,DynamicDrawUsage:Vd,DynamicReadUsage:Wd,EdgesGeometry:yf,EllipseCurve:Pa,EqualCompare:Ou,EqualDepth:cu,EqualStencilFunc:Fd,EquirectangularReflectionMapping:Ps,EquirectangularRefractionMapping:Ls,Euler:$s,EventDispatcher:Ln,ExtrudeBufferGeometry:ly,ExtrudeGeometry:nr,FileLoader:Pn,Float16BufferAttribute:Op,Float32BufferAttribute:xe,Float64BufferAttribute:zp,FloatType:ln,Fog:wa,FogExp2:Aa,FramebufferTexture:yv,FrontSide:Cn,Frustum:Sa,GLBufferAttribute:O_,GLSL1:Jd,GLSL3:jo,GreaterCompare:Bu,GreaterDepth:hu,GreaterEqualCompare:Vu,GreaterEqualDepth:lu,GreaterEqualStencilFunc:kd,GreaterStencilFunc:zd,GridHelper:Y_,Group:$i,HalfFloatType:es,HemisphereLight:Bf,HemisphereLightHelper:X_,HemisphereLightProbe:p_,IcosahedronBufferGeometry:hy,IcosahedronGeometry:ir,ImageBitmapLoader:f_,ImageLoader:Ys,ImageUtils:Ec,IncrementStencilOp:Cd,IncrementWrapStencilOp:Ld,InstancedBufferAttribute:is,InstancedBufferGeometry:Xf,InstancedInterleavedBuffer:F_,InstancedMesh:ff,Int16BufferAttribute:Np,Int32BufferAttribute:Fp,Int8BufferAttribute:Ip,IntType:mc,InterleavedBuffer:Ra,InterleavedBufferAttribute:yi,Interpolant:hr,InterpolateDiscrete:Ds,InterpolateLinear:Ns,InterpolateSmooth:oa,InvertStencilOp:Ud,KeepStencilOp:ca,KeyframeTrack:sn,LOD:hf,LatheBufferGeometry:uy,LatheGeometry:cs,Layers:Ma,LessCompare:Fu,LessDepth:ou,LessEqualCompare:zu,LessEqualDepth:fa,LessEqualStencilFunc:Od,LessStencilFunc:Nd,Light:Jn,LightProbe:Ua,Line:qn,Line3:jf,LineBasicMaterial:Ut,LineCurve:La,LineCurve3:vf,LineDashedMaterial:Uf,LineLoop:df,LineSegments:mn,LinearEncoding:bc,LinearFilter:ft,LinearInterpolant:qc,LinearMipMapLinearFilter:Sd,LinearMipMapNearestFilter:bd,LinearMipmapLinearFilter:Wn,LinearMipmapNearestFilter:pc,LinearSRGBColorSpace:Qt,LinearToneMapping:pu,Loader:Gt,LoaderUtils:ac,LoadingManager:Yc,LoopOnce:Ru,LoopPingPong:Pu,LoopRepeat:Cu,LuminanceAlphaFormat:Su,LuminanceFormat:bu,MOUSE:md,Material:At,MaterialLoader:Da,MathUtils:lp,Matrix3:ke,Matrix4:De,MaxEquation:Ro,Mesh:bt,MeshBasicMaterial:Yn,MeshDepthMaterial:Pc,MeshDistanceMaterial:Lc,MeshLambertMaterial:Lf,MeshMatcapMaterial:If,MeshNormalMaterial:Pf,MeshPhongMaterial:Rf,MeshPhysicalMaterial:wf,MeshStandardMaterial:Hc,MeshToonMaterial:Cf,MinEquation:wo,MirroredRepeatWrapping:Us,MixOperation:fu,MultiplyBlending:Ao,MultiplyOperation:Js,NearestFilter:ut,NearestMipMapLinearFilter:Md,NearestMipMapNearestFilter:yd,NearestMipmapLinearFilter:Es,NearestMipmapNearestFilter:da,NeverCompare:Nu,NeverDepth:ru,NeverStencilFunc:Dd,NoBlending:wn,NoColorSpace:Vn,NoToneMapping:un,NormalAnimationBlendMode:_a,NormalBlending:mi,NotEqualCompare:ku,NotEqualDepth:uu,NotEqualStencilFunc:Bd,NumberKeyframeTrack:Ws,Object3D:Je,ObjectLoader:h_,ObjectSpaceNormalMap:Uu,OctahedronBufferGeometry:fy,OctahedronGeometry:ls,OneFactor:Kh,OneMinusDstAlphaFactor:tu,OneMinusDstColorFactor:iu,OneMinusSrcAlphaFactor:dc,OneMinusSrcColorFactor:Qh,OrthographicCamera:Ta,PCFShadowMap:uc,PCFSoftShadowMap:Xh,PMREMGenerator:ec,Path:ks,PerspectiveCamera:Mt,Plane:Tn,PlaneBufferGeometry:dy,PlaneGeometry:as,PlaneHelper:Q_,PointLight:Vf,PointLightHelper:W_,Points:pf,PointsMaterial:Dc,PolarGridHelper:Z_,PolyhedronBufferGeometry:py,PolyhedronGeometry:In,PositionalAudio:y_,PropertyBinding:Ye,PropertyMixer:$f,QuadraticBezierCurve:zc,QuadraticBezierCurve3:Bc,Quaternion:Ft,QuaternionKeyframeTrack:us,QuaternionLinearInterpolant:Of,RED_GREEN_RGTC2_Format:$o,RED_RGTC1_Format:wu,REVISION:ga,RGBADepthPacking:Iu,RGBAFormat:kt,RGBAIntegerFormat:yc,RGBA_ASTC_10x10_Format:Xo,RGBA_ASTC_10x5_Format:Go,RGBA_ASTC_10x6_Format:Wo,RGBA_ASTC_10x8_Format:qo,RGBA_ASTC_12x10_Format:Yo,RGBA_ASTC_12x12_Format:Zo,RGBA_ASTC_4x4_Format:No,RGBA_ASTC_5x4_Format:Fo,RGBA_ASTC_5x5_Format:Oo,RGBA_ASTC_6x5_Format:zo,RGBA_ASTC_6x6_Format:Bo,RGBA_ASTC_8x5_Format:ko,RGBA_ASTC_8x6_Format:Vo,RGBA_ASTC_8x8_Format:Ho,RGBA_BPTC_Format:aa,RGBA_ETC2_EAC_Format:Do,RGBA_PVRTC_2BPPV1_Format:Io,RGBA_PVRTC_4BPPV1_Format:Lo,RGBA_S3TC_DXT1_Format:ia,RGBA_S3TC_DXT3_Format:sa,RGBA_S3TC_DXT5_Format:ra,RGB_ETC1_Format:Au,RGB_ETC2_Format:Uo,RGB_PVRTC_2BPPV1_Format:Po,RGB_PVRTC_4BPPV1_Format:Co,RGB_S3TC_DXT1_Format:na,RGFormat:Eu,RGIntegerFormat:_c,RawShaderMaterial:Af,Ray:rs,Raycaster:z_,RectAreaLight:Wf,RedFormat:Tu,RedIntegerFormat:vc,ReinhardToneMapping:mu,RepeatWrapping:Is,ReplaceStencilOp:Rd,ReverseSubtractEquation:Jh,RingBufferGeometry:my,RingGeometry:sr,SIGNED_RED_GREEN_RGTC2_Format:Ko,SIGNED_RED_RGTC1_Format:Jo,SRGBColorSpace:Oe,Scene:of,ShaderChunk:Be,ShaderLib:jt,ShaderMaterial:dn,ShadowMaterial:Ef,Shape:xi,ShapeBufferGeometry:gy,ShapeGeometry:rr,ShapePath:ny,ShapeUtils:fn,ShortType:yu,Skeleton:Ca,SkeletonHelper:G_,SkinnedMesh:uf,Source:di,Sphere:tn,SphereBufferGeometry:xy,SphereGeometry:hs,Spherical:B_,SphericalHarmonics3:qf,SplineCurve:kc,SpotLight:kf,SpotLightHelper:H_,Sprite:lf,SpriteMaterial:Ic,SrcAlphaFactor:fc,SrcAlphaSaturateFactor:su,SrcColorFactor:jh,StaticCopyUsage:Xd,StaticDrawUsage:Os,StaticReadUsage:Gd,StereoCamera:g_,StreamCopyUsage:Zd,StreamDrawUsage:Hd,StreamReadUsage:qd,StringKeyframeTrack:Ei,SubtractEquation:Zh,SubtractiveBlending:Eo,TOUCH:gd,TangentSpaceNormalMap:Xn,TetrahedronBufferGeometry:vy,TetrahedronGeometry:ar,Texture:dt,TextureLoader:a_,TorusBufferGeometry:_y,TorusGeometry:or,TorusKnotBufferGeometry:yy,TorusKnotGeometry:cr,Triangle:Lt,TriangleFanDrawMode:Ad,TriangleStripDrawMode:Ed,TrianglesDrawMode:Td,TubeBufferGeometry:My,TubeGeometry:lr,TwoPassDoubleSide:_d,UVMapping:xa,Uint16BufferAttribute:wc,Uint32BufferAttribute:Rc,Uint8BufferAttribute:Up,Uint8ClampedBufferAttribute:Dp,Uniform:jc,UniformsGroup:N_,UniformsLib:oe,UniformsUtils:Yu,UnsignedByteType:Rn,UnsignedInt248Type:zn,UnsignedIntType:An,UnsignedShort4444Type:gc,UnsignedShort5551Type:xc,UnsignedShortType:va,VSMShadowMap:an,Vector2:Z,Vector3:T,Vector4:$e,VectorKeyframeTrack:qs,VideoTexture:_v,WebGL1Renderer:af,WebGL3DRenderTarget:yp,WebGLArrayRenderTarget:_p,WebGLCoordinateSystem:hn,WebGLCubeRenderTarget:Ju,WebGLMultipleRenderTargets:Mp,WebGLRenderTarget:en,WebGLRenderer:rf,WebGLUtils:tf,WebGPUCoordinateSystem:zs,WireframeGeometry:Tf,WrapAroundEnding:Fs,ZeroCurvatureEnding:ui,ZeroFactor:$h,ZeroSlopeEnding:fi,ZeroStencilOp:wd,_SRGBAFormat:pa,sRGBEncoding:kn},Symbol.toStringTag,{value:"Module"})),ha=0,by=1,Sy=new T,Dh=new jf,Mo=new Tn,Nh=new T,ta=new Lt;class Ty{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new Fh,this.unassigned=new Fh,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.vertices.push(new Ey(e[t]));this.compute()}return this}setFromObject(e){const t=[];return e.updateMatrixWorld(!0),e.traverse(function(n){const i=n.geometry;if(i!==void 0){const s=i.attributes.position;if(s!==void 0)for(let a=0,o=s.count;a<o;a++){const c=new T;c.fromBufferAttribute(s,a).applyMatrix4(n.matrixWorld),t.push(c)}}}),this.setFromPoints(t)}containsPoint(e){const t=this.faces;for(let n=0,i=t.length;n<i;n++)if(t[n].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,t){const n=this.faces;let i=-1/0,s=1/0;for(let a=0,o=n.length;a<o;a++){const c=n[a],l=c.distanceToPoint(e.origin),h=c.normal.dot(e.direction);if(l>0&&h>=0)return null;const f=h!==0?-l/h:0;if(!(f<=0)&&(h>0?s=Math.min(f,s):i=Math.max(f,i),i>s))return null}return i!==-1/0?e.at(i,t):e.at(s,t),t}intersectsRay(e){return this.intersectRay(e,Sy)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}addVertexToFace(e,t){return e.face=t,t.outside===null?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}removeVertexFromFace(e,t){return e===t.outside&&(e.next!==null&&e.next.face===t?t.outside=e.next:t.outside=null),this.assigned.remove(e),this}removeAllVerticesFromFace(e){if(e.outside!==null){const t=e.outside;let n=e.outside;for(;n.next!==null&&n.next.face===e;)n=n.next;return this.assigned.removeSubList(t,n),t.prev=n.next=null,e.outside=null,t}}deleteFaceVertices(e,t){const n=this.removeAllVerticesFromFace(e);if(n!==void 0)if(t===void 0)this.unassigned.appendChain(n);else{let i=n;do{const s=i.next;t.distanceToPoint(i.point)>this.tolerance?this.addVertexToFace(i,t):this.unassigned.append(i),i=s}while(i!==null)}return this}resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let t=this.unassigned.first();do{const n=t.next;let i=this.tolerance,s=null;for(let a=0;a<e.length;a++){const o=e[a];if(o.mark===ha){const c=o.distanceToPoint(t.point);if(c>i&&(i=c,s=o),i>1e3*this.tolerance)break}}s!==null&&this.addVertexToFace(t,s),t=n}while(t!==null)}return this}computeExtremes(){const e=new T,t=new T,n=[],i=[];for(let s=0;s<3;s++)n[s]=i[s]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(let s=0,a=this.vertices.length;s<a;s++){const o=this.vertices[s],c=o.point;for(let l=0;l<3;l++)c.getComponent(l)<e.getComponent(l)&&(e.setComponent(l,c.getComponent(l)),n[l]=o);for(let l=0;l<3;l++)c.getComponent(l)>t.getComponent(l)&&(t.setComponent(l,c.getComponent(l)),i[l]=o)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:n,max:i}}computeInitialHull(){const e=this.vertices,t=this.computeExtremes(),n=t.min,i=t.max;let s=0,a=0;for(let u=0;u<3;u++){const d=i[u].point.getComponent(u)-n[u].point.getComponent(u);d>s&&(s=d,a=u)}const o=n[a],c=i[a];let l,h;s=0,Dh.set(o.point,c.point);for(let u=0,d=this.vertices.length;u<d;u++){const m=e[u];if(m!==o&&m!==c){Dh.closestPointToPoint(m.point,!0,Nh);const x=Nh.distanceToSquared(m.point);x>s&&(s=x,l=m)}}s=-1,Mo.setFromCoplanarPoints(o.point,c.point,l.point);for(let u=0,d=this.vertices.length;u<d;u++){const m=e[u];if(m!==o&&m!==c&&m!==l){const x=Math.abs(Mo.distanceToPoint(m.point));x>s&&(s=x,h=m)}}const f=[];if(Mo.distanceToPoint(h.point)<0){f.push(Kt.create(o,c,l),Kt.create(h,c,o),Kt.create(h,l,c),Kt.create(h,o,l));for(let u=0;u<3;u++){const d=(u+1)%3;f[u+1].getEdge(2).setTwin(f[0].getEdge(d)),f[u+1].getEdge(1).setTwin(f[d+1].getEdge(0))}}else{f.push(Kt.create(o,l,c),Kt.create(h,o,c),Kt.create(h,c,l),Kt.create(h,l,o));for(let u=0;u<3;u++){const d=(u+1)%3;f[u+1].getEdge(2).setTwin(f[0].getEdge((3-u)%3)),f[u+1].getEdge(0).setTwin(f[d+1].getEdge(1))}}for(let u=0;u<4;u++)this.faces.push(f[u]);for(let u=0,d=e.length;u<d;u++){const m=e[u];if(m!==o&&m!==c&&m!==l&&m!==h){s=this.tolerance;let x=null;for(let g=0;g<4;g++){const p=this.faces[g].distanceToPoint(m.point);p>s&&(s=p,x=this.faces[g])}x!==null&&this.addVertexToFace(m,x)}}return this}reindexFaces(){const e=[];for(let t=0;t<this.faces.length;t++){const n=this.faces[t];n.mark===ha&&e.push(n)}return this.faces=e,this}nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,t=0;const n=this.assigned.first().face;let i=n.outside;do{const s=n.distanceToPoint(i.point);s>t&&(t=s,e=i),i=i.next}while(i!==null&&i.face===n);return e}}computeHorizon(e,t,n,i){this.deleteFaceVertices(n),n.mark=by;let s;t===null?s=t=n.getEdge(0):s=t.next;do{const a=s.twin,o=a.face;o.mark===ha&&(o.distanceToPoint(e)>this.tolerance?this.computeHorizon(e,a,o,i):i.push(s)),s=s.next}while(s!==t);return this}addAdjoiningFace(e,t){const n=Kt.create(e,t.tail(),t.head());return this.faces.push(n),n.getEdge(-1).setTwin(t.twin),n.getEdge(0)}addNewFaces(e,t){this.newFaces=[];let n=null,i=null;for(let s=0;s<t.length;s++){const a=t[s],o=this.addAdjoiningFace(e,a);n===null?n=o:o.next.setTwin(i),this.newFaces.push(o.face),i=o}return n.next.setTwin(i),this}addVertexToHull(e){const t=[];return this.unassigned.clear(),this.removeVertexFromFace(e,e.face),this.computeHorizon(e.point,null,e.face,t),this.addNewFaces(e,t),this.resolveUnassignedPoints(this.newFaces),this}cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}compute(){let e;for(this.computeInitialHull();(e=this.nextVertexToAdd())!==void 0;)this.addVertexToHull(e);return this.reindexFaces(),this.cleanup(),this}}class Kt{constructor(){this.normal=new T,this.midpoint=new T,this.area=0,this.constant=0,this.outside=null,this.mark=ha,this.edge=null}static create(e,t,n){const i=new Kt,s=new bo(e,i),a=new bo(t,i),o=new bo(n,i);return s.next=o.prev=a,a.next=s.prev=o,o.next=a.prev=s,i.edge=s,i.compute()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}compute(){const e=this.edge.tail(),t=this.edge.head(),n=this.edge.next.head();return ta.set(e.point,t.point,n.point),ta.getNormal(this.normal),ta.getMidpoint(this.midpoint),this.area=ta.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}}class bo{constructor(e,t){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=t}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){const e=this.head(),t=this.tail();return t!==null?t.point.distanceTo(e.point):-1}lengthSquared(){const e=this.head(),t=this.tail();return t!==null?t.point.distanceToSquared(e.point):-1}setTwin(e){return this.twin=e,e.twin=this,this}}class Ey{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}}class Fh{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,t){return t.prev=e.prev,t.next=e,t.prev===null?this.head=t:t.prev.next=t,e.prev=t,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next===null?this.tail=t:t.next.prev=t,e.next=t,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,t){return e.prev===null?this.head=t.next:e.prev.next=t.next,t.next===null?this.tail=e.prev:t.next.prev=e.prev,this}isEmpty(){return this.head===null}}const Ay=[4,6,8,10,12,20,100],aM=2,oM=1e5,cM=[100,1e3,1e4],Na=r=>parseInt(r.slice(1),10),wy=r=>r>=100,ed=r=>/^E\d+$/.test(r),Ry=r=>ed(r)||/^D\d+$/.test(r)&&wy(Na(r)),lM=r=>Ry(r)?60:Na(r),hM=r=>/^D\d+$/.test(r)&&!Ay.includes(Na(r)),tt=(r,e)=>[r[0]-e[0],r[1]-e[1],r[2]-e[2]],vi=(r,e)=>[r[0]+e[0],r[1]+e[1],r[2]+e[2]],Nt=(r,e)=>[r[0]*e,r[1]*e,r[2]*e],ot=(r,e)=>r[0]*e[0]+r[1]*e[1]+r[2]*e[2],cn=(r,e)=>[r[1]*e[2]-r[2]*e[1],r[2]*e[0]-r[0]*e[2],r[0]*e[1]-r[1]*e[0]],ur=r=>Math.sqrt(ot(r,r)),Zs=r=>Nt(r,1/(ur(r)||1));function cc(r,e){let t=1/0,n=!0;for(let i=0;i<e.length;i++){const s=e[i],a=e[(i+1)%e.length],o=a[0]-s[0],c=a[1]-s[1],l=o*o+c*c||1;o*(r[1]-s[1])-c*(r[0]-s[0])<0&&(n=!1);const h=Math.max(0,Math.min(1,((r[0]-s[0])*o+(r[1]-s[1])*c)/l));t=Math.min(t,Math.hypot(r[0]-s[0]-h*o,r[1]-s[1]-h*c))}return n?t:-t}function Cy(r,e){let t=e,n=cc(t,r),i=Math.max(...r.map(s=>Math.hypot(s[0],s[1])))*.25;for(let s=0;s<80&&i>1e-5;s++){let a=!1;for(let o=0;o<8;o++){const c=[t[0]+Math.cos(o*Math.PI/4)*i,t[1]+Math.sin(o*Math.PI/4)*i],l=cc(c,r);l>n+1e-9&&(t=c,n=l,a=!0)}a||(i*=.5)}return{c:t,d:n}}function ua(r,e,t,n){const i=r.reduce((m,x)=>vi(m,x),[0,0,0]),s=Nt(i,1/r.length);let a=Zs(cn(tt(r[1],r[0]),tt(r[2],r[0])));ot(a,s)<0&&(a=Nt(a,-1),r=[...r].reverse());const o=ur(cn(t,a))<.2?[0,0,1]:t,c=Zs(tt(o,Nt(a,ot(o,a)))),l=cn(c,a);let h=n!=null?n:s;const u=Cy((m=>r.map(x=>[ot(tt(x,m),l),ot(tt(x,m),c)]))(h),[0,0]);h=vi(vi(h,Nt(l,u.c[0])),Nt(c,u.c[1]));const d=Math.max(...r.map(m=>Math.hypot(ot(tt(m,h),l),ot(tt(m,h),c))))||1;return{number:e,normal:a,center:h,dist:ot(a,h),verts:r,u:l,v:c,fit:d,inr:Math.max(u.d,.001)}}const Qc=r=>{const e=[];for(const t of r)for(const n of t.verts)e.some(i=>ur(tt(n,i))<1e-4)||e.push(n);return e};function Py(){const n=o=>Array.from({length:40},(c,l)=>[1*Math.cos(2*Math.PI*l/40),o,1*Math.sin(2*Math.PI*l/40)]),i=n(.1),s=n(-.2/2),a=[ua(i,2,[0,0,-1]),ua(s,1,[0,0,-1])];for(let o=0;o<40;o++){const c=(o+1)%40;a.push(ua([s[o],s[c],i[c],i[o]],0,[0,1,0]))}return{vertices:Qc(a),faces:a}}function Ly(r){const e=Math.PI*(3-Math.sqrt(5));let t=[];for(let i=0;i<r;i++){const s=1-2*(i+.5)/r,a=Math.sqrt(1-s*s);t.push([Math.cos(e*i)*a,s,Math.sin(e*i)*a])}const n=r>300?25:r>120?80:250;for(let i=0;i<n;i++){const s=t.map(()=>[0,0,0]);for(let o=0;o<r;o++)for(let c=o+1;c<r;c++){const l=tt(t[o],t[c]),h=ot(l,l)+1e-9,f=1/(h*Math.sqrt(h));s[o]=vi(s[o],Nt(l,f)),s[c]=tt(s[c],Nt(l,f))}const a=.06*(1-i/n)+.002;t=t.map((o,c)=>{const l=tt(s[c],Nt(o,ot(s[c],o))),h=ur(l);return Zs(vi(o,Nt(l,Math.min(h,1)*a/(h||1))))})}return t}function Iy(r){const e=.85*Math.cbrt(Math.max(r,20)/20),t=Ly(r),n=t.map(l=>new T(l[0],l[1],l[2])),i=new Map(n.map((l,h)=>[l,h])),s=new Ty().setFromPoints(n),a=[];for(const l of s.faces){const h=[];let f=l.edge;do h.push(i.get(f.head().point)),f=f.next;while(f!==l.edge);const[u,d,m]=h.map(p=>t[p]),x=ot(u,cn(d,m));if(Math.abs(x)<1e-9)continue;const g=Nt(vi(vi(cn(d,m),cn(m,u)),cn(u,d)),e/x);a.push({ids:h,v:g})}const o=t.map(()=>[]);for(const{ids:l,v:h}of a)for(const f of l)o[f].push(h);const c=[];for(let l=0;l<r;l++){const h=t[l],f=Nt(h,e),u=Math.abs(h[1])<.95?[0,1,0]:[0,0,-1],d=Zs(tt(u,Nt(h,ot(u,h)))),m=cn(d,h),x=o[l].map(_=>({p:_,ang:Math.atan2(ot(tt(_,f),d),ot(tt(_,f),m))})).sort((_,v)=>_.ang-v.ang).map(_=>_.p).filter((_,v,y)=>v===0||ur(tt(_,y[v-1]))>1e-4);if(x.length<3)continue;const g=Math.max(...x.map(_=>Math.hypot(ot(tt(_,f),m),ot(tt(_,f),d)))),p=cc([0,0],x.map(_=>[ot(tt(_,f),m),ot(tt(_,f),d)]));c.push({number:c.length+1,normal:h,center:f,dist:e,verts:x,u:m,v:d,fit:g,inr:Math.max(p,.001)})}return{vertices:Qc(c),faces:c}}function Oh(r,e){const t=x=>2*Math.PI*x/r,n=x=>{const g=[1,x,0],p=[Math.cos(t(1)),x,Math.sin(t(1))],_=[Math.cos(t(.5)),-x,Math.sin(t(.5))],v=cn(tt(p,g),tt(_,g));return ot(v,g)/v[1]};let i=.3,s=1/0;for(let x=.04;x<.95;x+=.01){const g=n(x);if(!isFinite(g)||g<=x)continue;const p=Math.abs(g-(r===3?1.0607:1.2));p<s&&(s=p,i=x)}const a=n(i),o=[0,a,0],c=[0,-a,0],l=x=>[Math.cos(t(x)),i,Math.sin(t(x))],h=x=>[Math.cos(t(x+.5)),-i,Math.sin(t(x+.5))],f=[];for(let x=0;x<r;x++){const g=(x+(r+1)/2)%r;f.push({verts:[o,l(x),h(x),l(x+1)],numero:e?x+1:2*x+1}),f.push({verts:[c,h(x),l(x+1),h(x+1)],numero:e?g%r+1:2*x+2})}const u=ot(Zs(cn(tt(f[0].verts[1],f[0].verts[0]),tt(f[0].verts[2],f[0].verts[0]))),f[0].verts[1]),d=.7,m=f.map(x=>ua(x.verts.map(g=>Nt(g,d/Math.abs(u))),x.numero,[0,1,0]));return{vertices:Qc(m),faces:m}}const zh=new Map;function uM(r){const e=zh.get(r);if(e)return e;const t=r===2?Py():[3,5,7,9].includes(r)?Oh(r,!0):[14,16,18].includes(r)?Oh(r/2,!1):Iy(r);return zh.set(r,t),t}const Uy=r=>{const e=Math.max(0,...r.faces.map(s=>s.number)),t=r.faces.some(s=>s.number===0),n=e+(t?1:0),i=Math.ceil(Math.sqrt(n));return{numbered:e,cols:i,rows:Math.ceil(n/i),cellOf:s=>s.number>0?s.number-1:e}};function fM(r){const{cols:e,rows:t,cellOf:n}=Uy(r),i=[],s=[],a=[];for(const c of r.faces){const l=n(c),h=(l%e+.5)/e,f=1-(Math.floor(l/e)+.5)/t,u=d=>{i.push(...d),s.push(...c.normal);const m=ot(tt(d,c.center),c.u)/c.fit,x=ot(tt(d,c.center),c.v)/c.fit;a.push(h+m*.49/e,f+x*.49/t)};for(let d=1;d<c.verts.length-1;d++)u(c.verts[0]),u(c.verts[d]),u(c.verts[d+1])}const o=new He;return o.setAttribute("position",new xe(i,3)),o.setAttribute("normal",new xe(s,3)),o.setAttribute("uv",new xe(a,2)),o}const td=[1.2,2,2.8],Dy=[.9,2,3.1,4.2,5.3],Bh=6.7;function nd(r,e){if(r<100)return null;const t=r>=1e4?3:r>=1e3?2:1;if(e===69696)return{tipo:"ordem",cosmico:!0,absoluto:!0,nivel:t,titulo:"ORDEM ABSOLUTA",prio:11,dur:11};if(e===77777)return{tipo:"caos",cosmico:!0,absoluto:!0,nivel:t,titulo:"CAOS ABSOLUTO",prio:10,dur:11};if(e===6969)return{tipo:"ordem",cosmico:!0,nivel:t,titulo:"ORDEM C\xD3SMICA",prio:9,dur:8.5};if(e===7777)return{tipo:"caos",cosmico:!0,nivel:t,titulo:"CAOS C\xD3SMICO",prio:8,dur:8};if(e===777)return{tipo:"caos",cosmico:!1,roda:!0,nivel:t,titulo:"A RODA DO DESTINO",prio:7.5,dur:6.4};if(e===r){const n=["ACERTO CR\xCDTICO","CR\xCDTICO LEND\xC1RIO","CR\xCDTICO DIVINO"][t-1];return{tipo:"crit",cosmico:!1,nivel:t,titulo:n,prio:3+t,dur:3.4+t}}if(e===1){const n=["FALHA CR\xCDTICA","RU\xCDNA","O ABISMO TE VIU"][t-1];return{tipo:"falha",cosmico:!1,nivel:t,titulo:n,prio:1.5+t,dur:3.4+t}}return e===69?{tipo:"ordem",cosmico:!1,nivel:t,titulo:"ORDEM PERFEITA",prio:7,dur:5.5}:e===77?{tipo:"caos",cosmico:!1,duplo:!0,nivel:t,titulo:"DESTINO DUPLO",prio:6,dur:5.6}:e===7?{tipo:"caos",cosmico:!1,nivel:t,titulo:"O INESPERADO",prio:5.5,dur:4.6}:null}const Ny={7:"A ENTIDADE SORRI",77:"A ENTIDADE RI",777:"A RODA DA ENTIDADE",7777:"CAOS PRIMORDIAL",69:"HARMONIA DIVINA",6969:"ORDEM PRIMORDIAL"};function Fy(r,e){const t=nd(r,e);return!t||t.tipo==="crit"||t.tipo==="falha"?null:{...t,entidade:Gh(r),titulo:Ny[e]||t.titulo,dur:t.dur+1}}function dM(r,e){let t=null;for(const n of r){const i=e[n.id];if(i==null)continue;const s=(ed(n.type)?Fy:nd)(Na(n.type),i);s&&(!t||s.prio>t.efeito.prio)&&(t={efeito:s,die:n,valor:i})}return t}function pM(r,e){if(r.tipo==="ordem")return 0;const t=.012*(r.cosmico?3:r.nivel)*Math.exp(-e*2.2);if(r.absoluto){let i=t+.0015;for(const s of Dy)e>=s&&(i+=.03*Math.exp(-(e-s)*6));return i+(e>=Bh?.09*Math.exp(-(e-Bh)*1.6):0)}const n=r.roda?td.reduce((i,s,a)=>i+(e>=s?(.012+.008*a)*Math.exp(-(e-s)*7):0),0):0;return t+n+(r.cosmico?.035*Math.exp(-Math.abs(e-r.dur*.6)*4):0)+(r.tipo==="caos"?.0015:0)}function mM(r,e){return r.tipo==="crit"?["#ffae2b","#fff4cf","#a98a56"]:r.tipo==="falha"?["#4d000c","#ff1d1d","#3a3034"]:r.tipo==="ordem"?["#ffd685","#ffffff","#8c94a6"]:Math.sin(Math.floor(e*1.7)*12.9898)>0?["#22e0a4","#fff0b0","#5d7a78"]:["#e01550","#d08cff","#6b4a64"]}const id=`
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
`,Oy=`
attribute vec2 pos;
uniform vec2 uTela;
varying vec2 vP;
void main() { vP = pos * 0.5 * uTela / min(uTela.x, uTela.y); gl_Position = vec4(pos, 0.0, 1.0); }`,gM=`
uniform vec2 uTela;
varying vec2 vP;
void main() { vP = position.xy / min(uTela.x, uTela.y); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,zy=`
precision highp float;
varying vec2 vP;
uniform vec2 uTela;
uniform sampler2D uTexto;
uniform float uT, uRev, uFim, uNivel, uAneis, uSorte, uIdle, uForca, uSem, uClarao;
uniform float uTrava[6];
uniform vec3 uA, uB;
#define TAU 6.2831853

float h11(float n) { return fract(sin(n * 91.17) * 4373.13); }
float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
vec2 h22(vec2 p) { return vec2(h21(p), h21(p + 17.7)); }
float ruido(vec2 p) {
  vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1, 0)), f.x), mix(h21(i + vec2(0, 1)), h21(i + vec2(1, 1)), f.x), f.y);
}
float fbm(vec2 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 4; i++) { s += a * ruido(p); p = mat2(1.6, 1.2, -1.2, 1.6) * p + 3.7; a *= 0.5; } return s; }
mat2 rot(float a) { float c = cos(a), s = sin(a); return mat2(c, -s, s, c); }
float fio(float d, float w) { return smoothstep(w, w * 0.2, abs(d)) + 0.35 * exp(-abs(d) / (w * 4.0)); }

mat3 M[6];
float R[6];
float preso[6];
float spin[6];

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
  for (int i = 0; i < 6; i++) {
    if (float(i) >= uAneis) break;
    float a = anel(M[i] * p, R[i]);
    if (a < d) { d = a; qual = float(i); }
  }
  return d;
}

// runas: sigilos de tra\xE7o fino, sorteados por casa
float seg(vec2 p, vec2 a, vec2 b) { vec2 pa = p - a, ba = b - a; return length(pa - ba * clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0)); }
${id}// olho pequeno: x ao longo do anel, y atrav\xE9s. Devolve (branco, iris, pupila, contorno)
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
  if (r < 0.66) {
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
      vec3 lp = m * pos;
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
}`,By=`
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
}`,ky=`
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
}`,Vy=`
vec4 veu(vec2 p) { return cena(p); }`,Hy=`
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
}`,Gy=`
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
}`,Wy=`
vec4 cenaFinal(vec2 p) { return veu(p); }`,kh=r=>{const e=parseInt(r.slice(1),16);return`vec3(${[e>>16,e>>8&255,e&255].map(t=>(t/255).toFixed(3)).join(", ")})`},qy=r=>(r.duplo?Hy:Vy)+(r.entidade?`
const vec3 EA = ${kh(r.entidade[0])};
const vec3 EB = ${kh(r.entidade[1])};`+id+Gy:Wy),xM=`
varying vec2 vP;
void main() { vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,Xy=`
attribute vec2 pos;
uniform vec2 uTela;
varying vec2 vP;
void main() { vP = pos * 0.82 * uTela / min(uTela.x, uTela.y); gl_Position = vec4(pos, 0.0, 1.0); }`,Yy=`
precision highp float;
varying vec2 vP;
uniform sampler2D uTexto;
uniform vec2 uCentro, uNumBox, uTitBox, uTitPos;
uniform float uT, uDur, uNivel, uSemente, uClarao;
#define TAU 6.2831853

float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float h11(float n) { return fract(sin(n * 91.17) * 4373.13); }
float ruido(vec2 p) {
  vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1, 0)), f.x), mix(h21(i + vec2(0, 1)), h21(i + vec2(1, 1)), f.x), f.y);
}
float fbm(vec2 p) {
  float s = 0.0, a = 0.5;
  for (int i = 0; i < 5; i++) { s += a * ruido(p); p = mat2(1.6, 1.2, -1.2, 1.6) * p + 3.7; a *= 0.5; }
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
`,Vh=`
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
}`,Hh=`
// olho de p\xE1lpebras carnudas. Devolve rgb + cobertura
vec4 olho(vec2 q, float L, float abre, vec2 mira, float fenda) {
  float perfil = pow(max(1.0 - pow(abs(q.x) / L, 2.0), 0.0), 0.85);
  float borda = fbm(q * 3.0 / L + uSemente) * 0.05 * L;
  float cima = perfil * L * 0.56 * abre + borda * abre, baixo = -perfil * L * 0.44 * abre - borda * abre;
  float dentro = min(cima - q.y, q.y - baixo);
  vec2 m = q - mira;
  float r = length(m) / L, a = atan(m.y, m.x);
  vec3 esclera = mix(vec3(0.34, 0.06, 0.05), vec3(0.10, 0.01, 0.02), smoothstep(0.35, 0.95, abs(q.x) / L));
  float veia = smoothstep(0.05, 0.0, abs(fbm(q * 9.0 / L + uSemente) - 0.5)) * smoothstep(0.35, 0.7, r);
  vec3 c = esclera + vec3(0.4, 0.0, 0.02) * veia;
  // \xEDris: fibras radiais em brasa (amostradas em c\xEDrculo para n\xE3o ter emenda)
  vec2 dr = vec2(cos(a), sin(a));
  float fib = fbm(dr * 9.0 + r * 1.5 + fbm(dr * 4.0 + r * 7.0) * 1.4);
  float iris = smoothstep(0.43, 0.40, r);
  vec3 ci = mix(vec3(0.95, 0.10, 0.03), vec3(1.0, 0.62, 0.12), smoothstep(0.34, 0.08, r)) * (0.20 + 1.35 * fib);
  ci *= smoothstep(0.43, 0.32, r) * 0.85 + 0.15;
  c = mix(c, ci, iris);
  // pupila em fenda vertical
  vec2 pu = m / L / vec2(0.075 * fenda * (1.0 + 0.10 * sin(uT * 3.0)), 0.37);
  c += vec3(1.0, 0.45, 0.08) * exp(-max(length(pu) - 1.0, 0.0) * 5.0) * iris * 0.45;
  c = mix(c, vec3(0.0), smoothstep(1.06, 0.94, length(pu)));
  // umidade e sombra da p\xE1lpebra
  c += vec3(1.0, 0.8, 0.7) * smoothstep(0.07, 0.0, length(m / L - vec2(-0.15, 0.18))) * 0.55;
  c *= 0.15 + 0.85 * smoothstep(0.0, 0.20 * L, cima - q.y);
  float cob = smoothstep(0.0, 0.006, dentro) * step(0.02, abre);
  // pele enrugada em volta
  float fora = length(vec2(max(abs(q.x) - L * 0.97, 0.0) * 1.6, max(-dentro, 0.0)));
  float ruga = 0.5 + 0.5 * sin(fora / L * 46.0 + fbm(q * 7.0 / L) * 7.0);
  vec3 pele = (vec3(0.13, 0.018, 0.024) * (0.25 + 0.75 * ruga) + vec3(0.65, 0.04, 0.03) * exp(-fora / L * 16.0)) * exp(-fora / L * 4.2);
  float cobP = exp(-fora / L * 3.0) * step(0.02, abre);
  return vec4(mix(pele, c, cob), max(cob, cobP));
}
vec4 cena(vec2 p) {
  vec2 q = p - uCentro;
  float r = length(q), e = env(), ab = step(2.5, uNivel);
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
    // a ponta para perto do n\xFAmero e respira com o cora\xE7\xE3o; no d10000 ficam atr\xE1s do olho
    float alvo = mix(0.215, 0.54, ab) + 0.17 * h * (1.0 - 0.15 * uNivel) + (3.0 - fc) * 0.040 - 0.014 * pulsa;
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
  luz += vec3(0.85, 0.04, 0.03) * exp(-r * 7.5) * (0.22 + 0.45 * pulsa) * (1.0 - ab);
  alfa = max(alfa, exp(-r * 3.0) * 0.75 * entra * e);

  vec3 t;
  if (ab > 0.5) {
    // olhinhos que piscam na escurid\xE3o
    for (int i = 0; i < 9; i++) {
      float fi = float(i), h = h11(fi + uSemente), g = h11(fi + 20.0);
      vec2 c = vec2((h - 0.5) * 0.86, (fi + 0.5) / 9.0 * 1.84 - 0.92);
      if (length((c - uCentro) * vec2(0.8, 1.0)) < 0.34) c.y += c.y > uCentro.y ? 0.30 : -0.30;
      float pisca = fract(uT * 0.4 + g);
      float ap = smoothstep(1.3 + g * 1.6, 1.7 + g * 1.6, uT) * (1.0 - smoothstep(0.93, 0.96, pisca) * (1.0 - smoothstep(0.97, 1.0, pisca)));
      ap *= 1.0 - smoothstep(uDur - 1.8, uDur - 1.2, uT);
      vec4 o = olho((p - c) * rot((g - 0.5) * 0.9), 0.045 + 0.05 * g, ap, normalize(uCentro - c) * 0.006, 1.0);
      luz = mix(luz, o.rgb * 0.8, o.a);
      alfa = max(alfa, o.a * e);
    }
    // o grande olho: abre, procura e crava em voc\xEA
    float abre = smoothstep(0.55, 1.5, uT) * (1.0 - smoothstep(uDur - 1.35, uDur - 0.8, uT));
    abre *= 1.0 - 0.95 * exp(-pow((uT - 3.1) * 9.0, 2.0));
    float procura = smoothstep(1.5, 1.7, uT) - 2.0 * smoothstep(2.1, 2.3, uT) + smoothstep(2.75, 2.95, uT);
    vec2 mira = vec2(procura * 0.085, -0.01);
    vec4 o = olho(q, 0.46, abre, mira, 1.75);
    luz = mix(luz, o.rgb, o.a);
    alfa = max(alfa, o.a * e);
    luz += vec3(0.9, 0.08, 0.02) * exp(-r * 4.0) * abre * 0.18 * (0.6 + pulsa);
    t = texto(p - mira, 0.72);
    t.rg *= smoothstep(0.35, 0.9, abre);
    t.b = texto(p, 1.0).b;
    luz = mix(luz, vec3(1.0, 0.16, 0.08) * (0.75 + 0.5 * pulsa), t.r);
    luz += vec3(0.9, 0.05, 0.02) * t.g * 0.25;
  } else {
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
}`,Fa=`
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
}`,Zy=Fa+`
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
}`,Jy=Fa+`
float trava(int i) { return ${td.map((r,e)=>`i == ${e} ? ${r.toFixed(2)} : `).join("")}9.0; }
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
}`,$y=Fa+`
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
}`,el=`
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
}`,Ky=el+`
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
}`,jy=el+`
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
}`,Qy=`
void main() {
  vec4 c = cenaFinal(vP);
  // clar\xE3o de abertura (menor para quem pediu menos movimento no sistema)
  c.rgb += vec3(1.0, 0.97, 0.92) * exp(-uT * 9.0) * uClarao;
  // granulado fino, para os degrad\xEAs n\xE3o fazerem faixas
  c.rgb += (h21(vP * 900.0 + fract(uT)) - 0.5) * 0.012 * c.a;
  gl_FragColor = vec4(max(c.rgb, 0.0), clamp(c.a, 0.0, 1.0));
}`,eM={crit:[Vh,Vh],falha:[Hh,Hh],caos:[Zy,$y],ordem:[Ky,jy]},tM=r=>r.absoluto?r.tipo==="caos"?Fa+By:el+ky:r.roda?Jy:eM[r.tipo][r.cosmico?1:0],nM=r=>Yy+tM(r)+qy(r)+Qy,lc=[.4,.2],hc=[.47,.06];function iM(r,e){const t=document.createElement("canvas"),n=1024,i=1024;t.width=n,t.height=i;const s=t.getContext("2d"),a='"Palatino Linotype", Palatino, "Book Antiqua", "Times New Roman", serif';s.fillStyle="#000",s.fillRect(0,0,n,i),s.globalCompositeOperation="lighter",s.textAlign="center",s.textBaseline="middle";const o=String(r),c=n/(2*lc[0]),l=i/2/(2*lc[1])/c;s.save(),s.translate(n/2,i/4),s.scale(1,l),s.font=`700 ${Math.min(.2,.72/o.length)*c}px ${a}`,s.fillStyle="#f00",s.shadowColor="#0f0",s.shadowBlur=46,s.fillText(o,0,8),s.fillText(o,0,8),s.restore();const h=n/(2*hc[0]),f=i/2/(2*hc[1])/h;s.save(),s.translate(n/2,i*3/4),s.scale(1,f);let u=.066*h;const d=[...e],m=()=>{s.font=`700 ${u}px ${a}`;const _=u*.16;return{esp:_,larg:d.reduce((v,y)=>v+s.measureText(y).width,0)+_*(d.length-1)}};let x=m();x.larg>n*.86&&(u*=n*.86/x.larg,x=m()),s.fillStyle="#00f",s.textAlign="left";let g=-x.larg/2;for(const _ of d)s.fillText(_,g,0),g+=s.measureText(_).width+x.esp;const p=(n-x.larg)/2-34;if(p>12)for(const _ of[-1,1])s.fillRect(_*(x.larg/2+22)-(_<0?p:0),-1,p,2.5);return s.restore(),t}function sd(r,e,t){const n=r.getContext("webgl",{alpha:!0,premultipliedAlpha:!0,antialias:!1,powerPreference:"high-performance"});if(!n)return null;const i=(h,f)=>{const u=n.createShader(h);return n.shaderSource(u,f),n.compileShader(u),n.getShaderParameter(u,n.COMPILE_STATUS)||console.error(n.getShaderInfoLog(u)),u},s=n.createProgram();if(n.attachShader(s,i(n.VERTEX_SHADER,e)),n.attachShader(s,i(n.FRAGMENT_SHADER,t)),n.linkProgram(s),!n.getProgramParameter(s,n.LINK_STATUS))return null;n.useProgram(s),n.bindBuffer(n.ARRAY_BUFFER,n.createBuffer()),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),n.STATIC_DRAW);const a=n.getAttribLocation(s,"pos");n.enableVertexAttribArray(a),n.vertexAttribPointer(a,2,n.FLOAT,!1,0,0),n.bindTexture(n.TEXTURE_2D,n.createTexture()),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0);for(const[h,f]of[[n.TEXTURE_MIN_FILTER,n.LINEAR],[n.TEXTURE_MAG_FILTER,n.LINEAR],[n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE],[n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE]])n.texParameteri(n.TEXTURE_2D,h,f);const o=h=>n.getUniformLocation(s,h),c=o("uT"),l=o("uTela");return{gl:n,u:o,imagem:h=>n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,h),desenhar(h){n.viewport(0,0,r.width,r.height),n.uniform2f(l,r.width,r.height),n.uniform1f(c,h),n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT),n.drawArrays(n.TRIANGLES,0,3)}}}function vM(r,e,t,n,i=0){var x;const s=sd(r,Oy,zy);if(!s)return null;const{gl:a,u:o}=s,c=ud(e),l={...c,fim:Math.max(c.fim,i)},[h,f]=Gh(e),u=(x=window.matchMedia)==null?void 0:x.call(window,"(prefers-reduced-motion: reduce)").matches;a.uniform1f(o("uRev"),l.rev),a.uniform1f(o("uFim"),l.fim),a.uniform1f(o("uNivel"),fd(e)),a.uniform1f(o("uAneis"),l.aneis),a.uniform1f(o("uSorte"),t.length===1?dd(e,t[0]):0),a.uniform1f(o("uSem"),n%977/10),a.uniform1f(o("uClarao"),u?.1:.85),a.uniform1fv(o("uTrava[0]"),l.travas),a.uniform3f(o("uA"),...ol(h)),a.uniform3f(o("uB"),...ol(f));const d=document.createElement("canvas");let m="";return{tempos:l,quadro(g){const p=rd(g,l.rev,e,t);p!==m&&(m=p,pd(d,p),s.imagem(d)),s.desenhar(g)}}}function _M(r,e,t){var o;const n=sd(r,Xy,nM(e));if(!n)return null;const{gl:i,u:s}=n,a=(o=window.matchMedia)==null?void 0:o.call(window,"(prefers-reduced-motion: reduce)").matches;return i.uniform2f(s("uCentro"),0,0),i.uniform2f(s("uNumBox"),...lc),i.uniform2f(s("uTitBox"),...hc),i.uniform2f(s("uTitPos"),0,-.56),i.uniform1f(s("uDur"),e.dur),i.uniform1f(s("uNivel"),e.nivel),i.uniform1f(s("uSemente"),t*7.31%50),i.uniform1f(s("uClarao"),a?.15:e.tipo==="ordem"?.35:.8),n.imagem(iM(t,e.titulo)),n}function rd(r,e,t,n){if(n.length>3)return rd(r,e,t*n.length,[n.reduce((s,a)=>s+a,0)]);if(r>=e-.06)return n.join(" \xB7 ");const i=Math.floor(r/Math.max(.05,.16-.02*r));return n.map((s,a)=>1+Math.abs(Math.imul(i*7919+a*104729+31,2654435761)>>>8)%t).join(" \xB7 ")}export{Hf as $,xu as A,He as B,de as C,rM as D,Ln as E,Td as F,Ad as G,Ed as H,ir as I,on as J,Gt as K,ft as L,md as M,un as N,Ta as O,Mt as P,Ft as Q,z_ as R,B_ as S,gd as T,Rn as U,T as V,en as W,ac as X,Pn as Y,kf as Z,Vf as _,Z as a,Qi as a$,Yn as a0,wf as a1,De as a2,ff as a3,Je as a4,ga as a5,a_ as a6,f_ as a7,je as a8,Ra as a9,qs as aA,us as aB,Ws as aC,pn as aD,tn as aE,hr as aF,r_ as aG,es as aH,ln as aI,Lp as aJ,Tu as aK,sf as aL,s_ as aM,Hn as aN,Ps as aO,Ju as aP,$s as aQ,Vd as aR,Oe as aS,Qt as aT,Uy as aU,uM as aV,lM as aW,fM as aX,Jc as aY,v_ as aZ,d_ as a_,yi as aa,Wn as ab,Is as ac,Dc as ad,Ut as ae,Hc as af,Ye as ag,uf as ah,mn as ai,qn as aj,df as ak,pf as al,$i as am,lp as an,Ca as ao,Ns as ap,Xs as aq,Uc as ar,ut as as,da as at,pc as au,Es as av,Et as aw,Us as ax,Ds as ay,Cn as az,as as b,Yh as b0,Kh as b1,dc as b2,$h as b3,tr as b4,nd as b5,mM as b6,td as b7,Dy as b8,Bh as b9,gM as ba,zy as bb,rd as bc,dM as bd,xM as be,nM as bf,lc as bg,hc as bh,pM as bi,iM as bj,wy as bk,cM as bl,Ay as bm,Fy as bn,vM as bo,_M as bp,bt as c,Pc as d,dn as e,Ry as f,hM as g,Na as h,ed as i,bv as j,y_ as k,aM as l,oM as m,Ma as n,dt as o,kt as p,At as q,of as r,kn as s,Xh as t,Zf as u,rf as v,ba as w,vd as x,uc as y,an as z};
