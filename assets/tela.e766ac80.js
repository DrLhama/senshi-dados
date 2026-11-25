import{i as Md,f as bd}from"./tipos.bbb321c6.js";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _a="153",Sd={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Td={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},qu=0,Ao=1,Xu=2,Ed=3,Ad=0,pc=1,Yu=2,tn=3,En=0,Ct=1,nn=2,wd=2,Sn=0,pi=1,wo=2,Ro=3,Co=4,Zu=5,oi=100,Ju=101,$u=102,Po=103,Lo=104,Ku=200,Qu=201,ju=202,eh=203,mc=204,gc=205,th=206,nh=207,ih=208,sh=209,rh=210,ah=0,oh=1,ch=2,da=3,lh=4,uh=5,hh=6,fh=7,$s=0,dh=1,ph=2,an=0,mh=1,gh=2,xh=3,vh=4,_h=5,ya=300,kn=301,Vn=302,Ls=303,Is=304,ss=306,Us=1e3,St=1001,Ds=1002,ut=1003,pa=1004,Rd=1004,As=1005,Cd=1005,at=1006,xc=1007,Pd=1007,Gn=1008,Ld=1008,Tn=1009,yh=1010,Mh=1011,Ma=1012,vc=1013,bn=1014,sn=1015,_i=1016,_c=1017,yc=1018,On=1020,bh=1021,Ut=1023,Sh=1024,Th=1025,Fn=1026,yi=1027,Eh=1028,Mc=1029,Ah=1030,bc=1031,Sc=1033,ra=33776,aa=33777,oa=33778,ca=33779,Io=35840,Uo=35841,Do=35842,No=35843,wh=36196,Oo=37492,Fo=37496,zo=37808,Bo=37809,ko=37810,Vo=37811,Go=37812,Ho=37813,Wo=37814,qo=37815,Xo=37816,Yo=37817,Zo=37818,Jo=37819,$o=37820,Ko=37821,la=36492,Rh=36283,Qo=36284,jo=36285,ec=36286,Ch=2200,Ph=2201,Lh=2202,Ns=2300,Os=2301,ua=2302,li=2400,ui=2401,Fs=2402,ba=2500,Tc=2501,Id=0,Ud=1,Dd=2,Ec=3e3,zn=3001,Ih=3200,Uh=3201,Wn=0,Dh=1,Bn="",Fe="srgb",Jt="srgb-linear",Ac="display-p3",Nd=0,ha=7680,Od=7681,Fd=7682,zd=7683,Bd=34055,kd=34056,Vd=5386,Gd=512,Hd=513,Wd=514,qd=515,Xd=516,Yd=517,Zd=518,Nh=519,Oh=512,Fh=513,zh=514,Bh=515,kh=516,Vh=517,Gh=518,Hh=519,zs=35044,Jd=35048,$d=35040,Kd=35045,Qd=35049,jd=35041,ep=35046,tp=35050,np=35042,ip="100",tc="300 es",ma=1035,rn=2e3,Bs=2001;class wn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hl=1234567;const mi=Math.PI/180,ts=180/Math.PI;function Bt(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mt[s&255]+Mt[s>>8&255]+Mt[s>>16&255]+Mt[s>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[t&63|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[n&255]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]).toLowerCase()}function ot(s,e,t){return Math.max(e,Math.min(t,s))}function wc(s,e){return(s%e+e)%e}function sp(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function rp(s,e,t){return s!==e?(t-s)/(e-s):0}function ws(s,e,t){return(1-t)*s+t*e}function ap(s,e,t,n){return ws(s,e,1-Math.exp(-t*n))}function op(s,e=1){return e-Math.abs(wc(s,e*2)-e)}function cp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function lp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function up(s,e){return s+Math.floor(Math.random()*(e-s+1))}function hp(s,e){return s+Math.random()*(e-s)}function fp(s){return s*(.5-Math.random())}function dp(s){s!==void 0&&(hl=s);let e=hl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function pp(s){return s*mi}function mp(s){return s*ts}function nc(s){return(s&s-1)===0&&s!==0}function Wh(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ga(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function gp(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),u=a((e+n)/2),f=r((e-n)/2),h=a((e-n)/2),d=r((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":s.set(o*u,c*f,c*h,o*l);break;case"YZY":s.set(c*h,o*u,c*f,o*l);break;case"ZXZ":s.set(c*f,c*h,o*u,o*l);break;case"XZX":s.set(o*u,c*m,c*d,o*l);break;case"YXY":s.set(c*d,o*u,c*m,o*l);break;case"ZYZ":s.set(c*m,c*d,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function zt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ve(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const xp={DEG2RAD:mi,RAD2DEG:ts,generateUUID:Bt,clamp:ot,euclideanModulo:wc,mapLinear:sp,inverseLerp:rp,lerp:ws,damp:ap,pingpong:op,smoothstep:cp,smootherstep:lp,randInt:up,randFloat:hp,randFloatSpread:fp,seededRandom:dp,degToRad:pp,radToDeg:mp,isPowerOfTwo:nc,ceilPowerOfTwo:Wh,floorPowerOfTwo:ga,setQuaternionFromProperEuler:gp,normalize:Ve,denormalize:zt};class K{constructor(e=0,t=0){K.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,n,i,r,a,o,c,l){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],d=n[5],m=n[8],x=i[0],g=i[3],p=i[6],_=i[1],v=i[4],y=i[7],T=i[2],b=i[5],C=i[8];return r[0]=a*x+o*_+c*T,r[3]=a*g+o*v+c*b,r[6]=a*p+o*y+c*C,r[1]=l*x+u*_+f*T,r[4]=l*g+u*v+f*b,r[7]=l*p+u*y+f*C,r[2]=h*x+d*_+m*T,r[5]=h*g+d*v+m*b,r[8]=h*p+d*y+m*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+i*r*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=u*a-o*l,h=o*c-u*r,d=l*r-a*c,m=t*f+n*h+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return e[0]=f*x,e[1]=(i*l-u*n)*x,e[2]=(o*n-i*a)*x,e[3]=h*x,e[4]=(u*t-i*c)*x,e[5]=(i*r-o*t)*x,e[6]=d*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Wa.makeScale(e,t)),this}rotate(e){return this.premultiply(Wa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wa=new ke;function qh(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}const vp={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function $i(s,e){return new vp[s](e)}function ks(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}const fl={};function Rs(s){s in fl||(fl[s]=!0,console.warn(s))}function es(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function qa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const _p=new ke().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),yp=new ke().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Mp(s){return s.convertSRGBToLinear().applyMatrix3(yp)}function bp(s){return s.applyMatrix3(_p).convertLinearToSRGB()}const Sp={[Jt]:s=>s,[Fe]:s=>s.convertSRGBToLinear(),[Ac]:Mp},Tp={[Jt]:s=>s,[Fe]:s=>s.convertLinearToSRGB(),[Ac]:bp},Gt={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return Jt},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Sp[e],i=Tp[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}};let Ri;class Rc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ri===void 0&&(Ri=ks("canvas")),Ri.width=e.width,Ri.height=e.height;const n=Ri.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ri}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ks("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=es(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(es(t[n]/255)*255):t[n]=es(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ep=0;class hi{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=Bt(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Xa(i[a].image)):r.push(Xa(i[a]))}else r=Xa(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Xa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Rc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ap=0;class ht extends wn{constructor(e=ht.DEFAULT_IMAGE,t=ht.DEFAULT_MAPPING,n=St,i=St,r=at,a=Gn,o=Ut,c=Tn,l=ht.DEFAULT_ANISOTROPY,u=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=Bt(),this.name="",this.source=new hi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new K(0,0),this.repeat=new K(1,1),this.center=new K(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Rs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===zn?Fe:Bn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ya)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Us:e.x=e.x-Math.floor(e.x);break;case St:e.x=e.x<0?0:1;break;case Ds:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Us:e.y=e.y-Math.floor(e.y);break;case St:e.y=e.y<0?0:1;break;case Ds:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Rs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Fe?zn:Ec}set encoding(e){Rs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===zn?Fe:Bn}}ht.DEFAULT_IMAGE=null;ht.DEFAULT_MAPPING=ya;ht.DEFAULT_ANISOTROPY=1;class $e{constructor(e=0,t=0,n=0,i=1){$e.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],m=c[9],x=c[2],g=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(m+g)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,y=(d+1)/2,T=(p+1)/2,b=(u+h)/4,C=(f+x)/4,P=(m+g)/4;return v>y&&v>T?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=b/n,r=C/n):y>T?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=b/i,r=P/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=C/r,i=P/r),this.set(n,i,r,t),this}let _=Math.sqrt((g-m)*(g-m)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(f-x)/_,this.z=(h-u)/_,this.w=Math.acos((l+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $t extends wn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $e(0,0,e,t),this.scissorTest=!1,this.viewport=new $e(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Rs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===zn?Fe:Bn),this.texture=new ht(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:at,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new hi(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sa extends ht{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ut,this.minFilter=ut,this.wrapR=St,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wp extends $t{constructor(e=1,t=1,n=1){super(e,t),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Sa(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Cc extends ht{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ut,this.minFilter=ut,this.wrapR=St,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rp extends $t{constructor(e=1,t=1,n=1){super(e,t),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Cc(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Cp extends $t{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLMultipleRenderTargets=!0;const r=this.texture;this.texture=[];for(let a=0;a<n;a++)this.texture[a]=r.clone(),this.texture[a].isRenderTargetTexture=!0}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.texture.length;i<r;i++)this.texture[i].image.width=e,this.texture[i].image.height=t,this.texture[i].image.depth=n;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone(),this.texture[t].isRenderTargetTexture=!0;return this}}class Dt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],u=n[i+2],f=n[i+3];const h=r[a+0],d=r[a+1],m=r[a+2],x=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=d,e[t+2]=m,e[t+3]=x;return}if(f!==x||c!==h||l!==d||u!==m){let g=1-o;const p=c*h+l*d+u*m+f*x,_=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const T=Math.sqrt(v),b=Math.atan2(T,p*_);g=Math.sin(g*b)/T,o=Math.sin(o*b)/T}const y=o*_;if(c=c*g+h*y,l=l*g+d*y,u=u*g+m*y,f=f*g+x*y,g===1-o){const T=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=T,l*=T,u*=T,f*=T}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],u=n[i+3],f=r[a],h=r[a+1],d=r[a+2],m=r[a+3];return e[t]=o*m+u*f+c*d-l*h,e[t+1]=c*m+u*h+l*f-o*d,e[t+2]=l*m+u*d+o*h-c*f,e[t+3]=u*m-o*f-c*h-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(i/2),f=o(r/2),h=c(n/2),d=c(i/2),m=c(r/2);switch(a){case"XYZ":this._x=h*u*f+l*d*m,this._y=l*d*f-h*u*m,this._z=l*u*m+h*d*f,this._w=l*u*f-h*d*m;break;case"YXZ":this._x=h*u*f+l*d*m,this._y=l*d*f-h*u*m,this._z=l*u*m-h*d*f,this._w=l*u*f+h*d*m;break;case"ZXY":this._x=h*u*f-l*d*m,this._y=l*d*f+h*u*m,this._z=l*u*m+h*d*f,this._w=l*u*f-h*d*m;break;case"ZYX":this._x=h*u*f-l*d*m,this._y=l*d*f+h*u*m,this._z=l*u*m-h*d*f,this._w=l*u*f+h*d*m;break;case"YZX":this._x=h*u*f+l*d*m,this._y=l*d*f+h*u*m,this._z=l*u*m-h*d*f,this._w=l*u*f-h*d*m;break;case"XZY":this._x=h*u*f-l*d*m,this._y=l*d*f-h*u*m,this._z=l*u*m+h*d*f,this._w=l*u*f+h*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(a-i)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(u-c)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+l)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(r-l)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-i)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+i*l-r*c,this._y=i*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-i*o,this._w=a*u-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),f=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=a*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(e=0,t=0,n=0){w.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=c*t+a*i-o*n,u=c*n+o*t-r*i,f=c*i+r*n-a*t,h=-r*t-a*n-o*i;return this.x=l*c+h*-r+u*-o-f*-a,this.y=u*c+h*-a+f*-r-l*-o,this.z=f*c+h*-o+l*-a-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ya.copy(this).projectOnVector(e),this.sub(Ya)}reflect(e){return this.sub(Ya.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ya=new w,dl=new Dt;class ln{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Ci.copy(e.boundingBox),Ci.applyMatrix4(e.matrixWorld),this.union(Ci);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const r=i.attributes.position;for(let a=0,o=r.count;a<o;a++)dn.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(dn)}else i.boundingBox===null&&i.computeBoundingBox(),Ci.copy(i.boundingBox),Ci.applyMatrix4(e.matrixWorld),this.union(Ci)}const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ds),pr.subVectors(this.max,ds),Pi.subVectors(e.a,ds),Li.subVectors(e.b,ds),Ii.subVectors(e.c,ds),Cn.subVectors(Li,Pi),Pn.subVectors(Ii,Li),Kn.subVectors(Pi,Ii);let t=[0,-Cn.z,Cn.y,0,-Pn.z,Pn.y,0,-Kn.z,Kn.y,Cn.z,0,-Cn.x,Pn.z,0,-Pn.x,Kn.z,0,-Kn.x,-Cn.y,Cn.x,0,-Pn.y,Pn.x,0,-Kn.y,Kn.x,0];return!Za(t,Pi,Li,Ii,pr)||(t=[1,0,0,0,1,0,0,0,1],!Za(t,Pi,Li,Ii,pr))?!1:(mr.crossVectors(Cn,Pn),t=[mr.x,mr.y,mr.z],Za(t,Pi,Li,Ii,pr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fn=[new w,new w,new w,new w,new w,new w,new w,new w],dn=new w,Ci=new ln,Pi=new w,Li=new w,Ii=new w,Cn=new w,Pn=new w,Kn=new w,ds=new w,pr=new w,mr=new w,Qn=new w;function Za(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Qn.fromArray(s,r);const o=i.x*Math.abs(Qn.x)+i.y*Math.abs(Qn.y)+i.z*Math.abs(Qn.z),c=e.dot(Qn),l=t.dot(Qn),u=n.dot(Qn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Pp=new ln,ps=new w,Ja=new w;class Kt{constructor(e=new w,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Pp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ps.subVectors(e,this.center);const t=ps.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ps,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ja.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ps.copy(e.center).add(Ja)),this.expandByPoint(ps.copy(e.center).sub(Ja))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pn=new w,$a=new w,gr=new w,Ln=new w,Ka=new w,xr=new w,Qa=new w;class rs{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pn.copy(this.origin).addScaledVector(this.direction,t),pn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){$a.copy(e).add(t).multiplyScalar(.5),gr.copy(t).sub(e).normalize(),Ln.copy(this.origin).sub($a);const r=e.distanceTo(t)*.5,a=-this.direction.dot(gr),o=Ln.dot(this.direction),c=-Ln.dot(gr),l=Ln.lengthSq(),u=Math.abs(1-a*a);let f,h,d,m;if(u>0)if(f=a*c-o,h=a*o-c,m=r*u,f>=0)if(h>=-m)if(h<=m){const x=1/u;f*=x,h*=x,d=f*(f+a*h+2*o)+h*(a*f+h+2*c)+l}else h=r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;else h<=-m?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l):h<=m?(f=0,h=Math.min(Math.max(-r,-c),r),d=h*(h+2*c)+l):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy($a).addScaledVector(gr,h),d}intersectSphere(e,t){pn.subVectors(e.center,this.origin);const n=pn.dot(this.direction),i=pn.dot(pn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,i=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,i=(e.min.x-h.x)*l),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),f>=0?(o=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,pn)!==null}intersectTriangle(e,t,n,i,r){Ka.subVectors(t,e),xr.subVectors(n,e),Qa.crossVectors(Ka,xr);let a=this.direction.dot(Qa),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ln.subVectors(this.origin,e);const c=o*this.direction.dot(xr.crossVectors(Ln,xr));if(c<0)return null;const l=o*this.direction.dot(Ka.cross(Ln));if(l<0||c+l>a)return null;const u=-o*Ln.dot(Qa);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class De{constructor(e,t,n,i,r,a,o,c,l,u,f,h,d,m,x,g){De.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,u,f,h,d,m,x,g)}set(e,t,n,i,r,a,o,c,l,u,f,h,d,m,x,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new De().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ui.setFromMatrixColumn(e,0).length(),r=1/Ui.setFromMatrixColumn(e,1).length(),a=1/Ui.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=a*u,d=a*f,m=o*u,x=o*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=d+m*l,t[5]=h-x*l,t[9]=-o*c,t[2]=x-h*l,t[6]=m+d*l,t[10]=a*c}else if(e.order==="YXZ"){const h=c*u,d=c*f,m=l*u,x=l*f;t[0]=h+x*o,t[4]=m*o-d,t[8]=a*l,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-m,t[6]=x+h*o,t[10]=a*c}else if(e.order==="ZXY"){const h=c*u,d=c*f,m=l*u,x=l*f;t[0]=h-x*o,t[4]=-a*f,t[8]=m+d*o,t[1]=d+m*o,t[5]=a*u,t[9]=x-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const h=a*u,d=a*f,m=o*u,x=o*f;t[0]=c*u,t[4]=m*l-d,t[8]=h*l+x,t[1]=c*f,t[5]=x*l+h,t[9]=d*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,d=a*l,m=o*c,x=o*l;t[0]=c*u,t[4]=x-h*f,t[8]=m*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=d*f+m,t[10]=h-x*f}else if(e.order==="XZY"){const h=a*c,d=a*l,m=o*c,x=o*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=h*f+x,t[5]=a*u,t[9]=d*f-m,t[2]=m*f-d,t[6]=o*u,t[10]=x*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lp,e,Ip)}lookAt(e,t,n){const i=this.elements;return Ot.subVectors(e,t),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),In.crossVectors(n,Ot),In.lengthSq()===0&&(Math.abs(n.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),In.crossVectors(n,Ot)),In.normalize(),vr.crossVectors(Ot,In),i[0]=In.x,i[4]=vr.x,i[8]=Ot.x,i[1]=In.y,i[5]=vr.y,i[9]=Ot.y,i[2]=In.z,i[6]=vr.z,i[10]=Ot.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],d=n[13],m=n[2],x=n[6],g=n[10],p=n[14],_=n[3],v=n[7],y=n[11],T=n[15],b=i[0],C=i[4],P=i[8],M=i[12],E=i[1],D=i[5],$=i[9],N=i[13],F=i[2],z=i[6],Y=i[10],V=i[14],X=i[3],J=i[7],Q=i[11],he=i[15];return r[0]=a*b+o*E+c*F+l*X,r[4]=a*C+o*D+c*z+l*J,r[8]=a*P+o*$+c*Y+l*Q,r[12]=a*M+o*N+c*V+l*he,r[1]=u*b+f*E+h*F+d*X,r[5]=u*C+f*D+h*z+d*J,r[9]=u*P+f*$+h*Y+d*Q,r[13]=u*M+f*N+h*V+d*he,r[2]=m*b+x*E+g*F+p*X,r[6]=m*C+x*D+g*z+p*J,r[10]=m*P+x*$+g*Y+p*Q,r[14]=m*M+x*N+g*V+p*he,r[3]=_*b+v*E+y*F+T*X,r[7]=_*C+v*D+y*z+T*J,r[11]=_*P+v*$+y*Y+T*Q,r[15]=_*M+v*N+y*V+T*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],f=e[6],h=e[10],d=e[14],m=e[3],x=e[7],g=e[11],p=e[15];return m*(+r*c*f-i*l*f-r*o*h+n*l*h+i*o*d-n*c*d)+x*(+t*c*d-t*l*h+r*a*h-i*a*d+i*l*u-r*c*u)+g*(+t*l*f-t*o*d-r*a*f+n*a*d+r*o*u-n*l*u)+p*(-i*o*u-t*c*f+t*o*h+i*a*f-n*a*h+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],d=e[11],m=e[12],x=e[13],g=e[14],p=e[15],_=f*g*l-x*h*l+x*c*d-o*g*d-f*c*p+o*h*p,v=m*h*l-u*g*l-m*c*d+a*g*d+u*c*p-a*h*p,y=u*x*l-m*f*l+m*o*d-a*x*d-u*o*p+a*f*p,T=m*f*c-u*x*c-m*o*h+a*x*h+u*o*g-a*f*g,b=t*_+n*v+i*y+r*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=_*C,e[1]=(x*h*r-f*g*r-x*i*d+n*g*d+f*i*p-n*h*p)*C,e[2]=(o*g*r-x*c*r+x*i*l-n*g*l-o*i*p+n*c*p)*C,e[3]=(f*c*r-o*h*r-f*i*l+n*h*l+o*i*d-n*c*d)*C,e[4]=v*C,e[5]=(u*g*r-m*h*r+m*i*d-t*g*d-u*i*p+t*h*p)*C,e[6]=(m*c*r-a*g*r-m*i*l+t*g*l+a*i*p-t*c*p)*C,e[7]=(a*h*r-u*c*r+u*i*l-t*h*l-a*i*d+t*c*d)*C,e[8]=y*C,e[9]=(m*f*r-u*x*r-m*n*d+t*x*d+u*n*p-t*f*p)*C,e[10]=(a*x*r-m*o*r+m*n*l-t*x*l-a*n*p+t*o*p)*C,e[11]=(u*o*r-a*f*r-u*n*l+t*f*l+a*n*d-t*o*d)*C,e[12]=T*C,e[13]=(u*x*i-m*f*i+m*n*h-t*x*h-u*n*g+t*f*g)*C,e[14]=(m*o*i-a*x*i-m*n*c+t*x*c+a*n*g-t*o*g)*C,e[15]=(a*f*i-u*o*i+u*n*c-t*f*c-a*n*h+t*o*h)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,u*o+n,u*c-i*a,0,l*c-i*o,u*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,f=o+o,h=r*l,d=r*u,m=r*f,x=a*u,g=a*f,p=o*f,_=c*l,v=c*u,y=c*f,T=n.x,b=n.y,C=n.z;return i[0]=(1-(x+p))*T,i[1]=(d+y)*T,i[2]=(m-v)*T,i[3]=0,i[4]=(d-y)*b,i[5]=(1-(h+p))*b,i[6]=(g+_)*b,i[7]=0,i[8]=(m+v)*C,i[9]=(g-_)*C,i[10]=(1-(h+x))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ui.set(i[0],i[1],i[2]).length();const a=Ui.set(i[4],i[5],i[6]).length(),o=Ui.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],qt.copy(this);const l=1/r,u=1/a,f=1/o;return qt.elements[0]*=l,qt.elements[1]*=l,qt.elements[2]*=l,qt.elements[4]*=u,qt.elements[5]*=u,qt.elements[6]*=u,qt.elements[8]*=f,qt.elements[9]*=f,qt.elements[10]*=f,t.setFromRotationMatrix(qt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=rn){const c=this.elements,l=2*r/(t-e),u=2*r/(n-i),f=(t+e)/(t-e),h=(n+i)/(n-i);let d,m;if(o===rn)d=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Bs)d=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=rn){const c=this.elements,l=1/(t-e),u=1/(n-i),f=1/(a-r),h=(t+e)*l,d=(n+i)*u;let m,x;if(o===rn)m=(a+r)*f,x=-2*f;else if(o===Bs)m=r*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=x,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ui=new w,qt=new De,Lp=new w(0,0,0),Ip=new w(1,1,1),In=new w,vr=new w,Ot=new w,pl=new De,ml=new Dt;class Ks{constructor(e=0,t=0,n=0,i=Ks.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ot(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ot(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return pl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ml.setFromEuler(this),this.setFromQuaternion(ml,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ks.DEFAULT_ORDER="XYZ";class Ta{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Up=0;const gl=new w,Di=new Dt,mn=new De,_r=new w,ms=new w,Dp=new w,Np=new Dt,xl=new w(1,0,0),vl=new w(0,1,0),_l=new w(0,0,1),Op={type:"added"},yl={type:"removed"};class Je extends wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=Bt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Je.DEFAULT_UP.clone();const e=new w,t=new Ks,n=new Dt,i=new w(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new De},normalMatrix:{value:new ke}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=Je.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ta,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.multiply(Di),this}rotateOnWorldAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.premultiply(Di),this}rotateX(e){return this.rotateOnAxis(xl,e)}rotateY(e){return this.rotateOnAxis(vl,e)}rotateZ(e){return this.rotateOnAxis(_l,e)}translateOnAxis(e,t){return gl.copy(e).applyQuaternion(this.quaternion),this.position.add(gl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xl,e)}translateY(e){return this.translateOnAxis(vl,e)}translateZ(e){return this.translateOnAxis(_l,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_r.copy(e):_r.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(ms,_r,this.up):mn.lookAt(_r,ms,this.up),this.quaternion.setFromRotationMatrix(mn),i&&(mn.extractRotation(i.matrixWorld),Di.setFromRotationMatrix(mn),this.quaternion.premultiply(Di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Op)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(yl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(mn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,e,Dp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,Np,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Je.DEFAULT_UP=new w(0,1,0);Je.DEFAULT_MATRIX_AUTO_UPDATE=!0;Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xt=new w,gn=new w,ja=new w,xn=new w,Ni=new w,Oi=new w,Ml=new w,eo=new w,to=new w,no=new w;let yr=!1;class It{constructor(e=new w,t=new w,n=new w){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Xt.subVectors(e,t),i.cross(Xt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Xt.subVectors(i,t),gn.subVectors(n,t),ja.subVectors(e,t);const a=Xt.dot(Xt),o=Xt.dot(gn),c=Xt.dot(ja),l=gn.dot(gn),u=gn.dot(ja),f=a*l-o*o;if(f===0)return r.set(-2,-1,-1);const h=1/f,d=(l*c-o*u)*h,m=(a*u-o*c)*h;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,xn),xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getUV(e,t,n,i,r,a,o,c){return yr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),yr=!0),this.getInterpolation(e,t,n,i,r,a,o,c)}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,xn),c.setScalar(0),c.addScaledVector(r,xn.x),c.addScaledVector(a,xn.y),c.addScaledVector(o,xn.z),c}static isFrontFacing(e,t,n,i){return Xt.subVectors(n,t),gn.subVectors(e,t),Xt.cross(gn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xt.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),Xt.cross(gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return It.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return It.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return yr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),yr=!0),It.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return It.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return It.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return It.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Ni.subVectors(i,n),Oi.subVectors(r,n),eo.subVectors(e,n);const c=Ni.dot(eo),l=Oi.dot(eo);if(c<=0&&l<=0)return t.copy(n);to.subVectors(e,i);const u=Ni.dot(to),f=Oi.dot(to);if(u>=0&&f<=u)return t.copy(i);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Ni,a);no.subVectors(e,r);const d=Ni.dot(no),m=Oi.dot(no);if(m>=0&&d<=m)return t.copy(r);const x=d*l-c*m;if(x<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(Oi,o);const g=u*m-d*f;if(g<=0&&f-u>=0&&d-m>=0)return Ml.subVectors(r,i),o=(f-u)/(f-u+(d-m)),t.copy(i).addScaledVector(Ml,o);const p=1/(g+x+h);return a=x*p,o=h*p,t.copy(n).addScaledVector(Ni,a).addScaledVector(Oi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Fp=0;class Tt extends wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=Bt(),this.name="",this.type="Material",this.blending=pi,this.side=En,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=mc,this.blendDst=gc,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=da,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ha,this.stencilZFail=ha,this.stencilZPass=ha,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pi&&(n.blending=this.blending),this.side!==En&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Xh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yt={h:0,s:0,l:0},Mr={h:0,s:0,l:0};function io(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class pe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Fe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Gt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Gt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Gt.workingColorSpace){if(e=wc(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=io(a,r,e+1/3),this.g=io(a,r,e),this.b=io(a,r,e-1/3)}return Gt.toWorkingColorSpace(this,i),this}setStyle(e,t=Fe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Fe){const n=Xh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=es(e.r),this.g=es(e.g),this.b=es(e.b),this}copyLinearToSRGB(e){return this.r=qa(e.r),this.g=qa(e.g),this.b=qa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fe){return Gt.fromWorkingColorSpace(bt.copy(this),e),Math.round(ot(bt.r*255,0,255))*65536+Math.round(ot(bt.g*255,0,255))*256+Math.round(ot(bt.b*255,0,255))}getHexString(e=Fe){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Gt.workingColorSpace){Gt.fromWorkingColorSpace(bt.copy(this),t);const n=bt.r,i=bt.g,r=bt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case n:c=(i-r)/f+(i<r?6:0);break;case i:c=(r-n)/f+2;break;case r:c=(n-i)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Gt.workingColorSpace){return Gt.fromWorkingColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=Fe){Gt.fromWorkingColorSpace(bt.copy(this),e);const t=bt.r,n=bt.g,i=bt.b;return e!==Fe?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Yt),Yt.h+=e,Yt.s+=t,Yt.l+=n,this.setHSL(Yt.h,Yt.s,Yt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yt),e.getHSL(Mr);const n=ws(Yt.h,Mr.h,t),i=ws(Yt.s,Mr.s,t),r=ws(Yt.l,Mr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bt=new pe;pe.NAMES=Xh;class qn extends Tt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$s,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _n=zp();function zp(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,u=0;for(;(l&8388608)===0;)l<<=1,u-=8388608;l&=-8388609,u+=947912704,r[c]=l|u}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function Lt(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=ot(s,-65504,65504),_n.floatView[0]=s;const e=_n.uint32View[0],t=e>>23&511;return _n.baseTable[t]+((e&8388607)>>_n.shiftTable[t])}function Ts(s){const e=s>>10;return _n.uint32View[0]=_n.mantissaTable[_n.offsetTable[e]+(s&1023)]+_n.exponentTable[e],_n.floatView[0]}const ic={toHalfFloat:Lt,fromHalfFloat:Ts},pt=new w,br=new K;class Qe{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zs,this.updateRange={offset:0,count:-1},this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyMatrix3(e),this.setXY(t,br.x,br.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ve(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ve(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ve(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ve(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ve(t,this.array),n=Ve(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ve(t,this.array),n=Ve(n,this.array),i=Ve(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ve(t,this.array),n=Ve(n,this.array),i=Ve(i,this.array),r=Ve(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zs&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Bp extends Qe{constructor(e,t,n){super(new Int8Array(e),t,n)}}class kp extends Qe{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class Vp extends Qe{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class Gp extends Qe{constructor(e,t,n){super(new Int16Array(e),t,n)}}class Pc extends Qe{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Hp extends Qe{constructor(e,t,n){super(new Int32Array(e),t,n)}}class Lc extends Qe{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Wp extends Qe{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=Ts(this.array[e*this.itemSize]);return this.normalized&&(t=zt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ve(t,this.array)),this.array[e*this.itemSize]=Lt(t),this}getY(e){let t=Ts(this.array[e*this.itemSize+1]);return this.normalized&&(t=zt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ve(t,this.array)),this.array[e*this.itemSize+1]=Lt(t),this}getZ(e){let t=Ts(this.array[e*this.itemSize+2]);return this.normalized&&(t=zt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ve(t,this.array)),this.array[e*this.itemSize+2]=Lt(t),this}getW(e){let t=Ts(this.array[e*this.itemSize+3]);return this.normalized&&(t=zt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ve(t,this.array)),this.array[e*this.itemSize+3]=Lt(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ve(t,this.array),n=Ve(n,this.array)),this.array[e+0]=Lt(t),this.array[e+1]=Lt(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ve(t,this.array),n=Ve(n,this.array),i=Ve(i,this.array)),this.array[e+0]=Lt(t),this.array[e+1]=Lt(n),this.array[e+2]=Lt(i),this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ve(t,this.array),n=Ve(n,this.array),i=Ve(i,this.array),r=Ve(r,this.array)),this.array[e+0]=Lt(t),this.array[e+1]=Lt(n),this.array[e+2]=Lt(i),this.array[e+3]=Lt(r),this}}class ye extends Qe{constructor(e,t,n){super(new Float32Array(e),t,n)}}class qp extends Qe{constructor(e,t,n){super(new Float64Array(e),t,n)}}let Xp=0;const Vt=new De,so=new Je,Fi=new w,Ft=new ln,gs=new ln,vt=new w;class Ge extends wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=Bt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qh(e)?Lc:Pc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vt.makeRotationFromQuaternion(e),this.applyMatrix4(Vt),this}rotateX(e){return Vt.makeRotationX(e),this.applyMatrix4(Vt),this}rotateY(e){return Vt.makeRotationY(e),this.applyMatrix4(Vt),this}rotateZ(e){return Vt.makeRotationZ(e),this.applyMatrix4(Vt),this}translate(e,t,n){return Vt.makeTranslation(e,t,n),this.applyMatrix4(Vt),this}scale(e,t,n){return Vt.makeScale(e,t,n),this.applyMatrix4(Vt),this}lookAt(e){return so.lookAt(e),so.updateMatrix(),this.applyMatrix4(so.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ye(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ln);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Ft.setFromBufferAttribute(r),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new w,1/0);return}if(e){const n=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];gs.setFromBufferAttribute(o),this.morphTargetsRelative?(vt.addVectors(Ft.min,gs.min),Ft.expandByPoint(vt),vt.addVectors(Ft.max,gs.max),Ft.expandByPoint(vt)):(Ft.expandByPoint(gs.min),Ft.expandByPoint(gs.max))}Ft.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)vt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(vt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)vt.fromBufferAttribute(o,l),c&&(Fi.fromBufferAttribute(e,l),vt.add(Fi)),i=Math.max(i,n.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qe(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let E=0;E<o;E++)l[E]=new w,u[E]=new w;const f=new w,h=new w,d=new w,m=new K,x=new K,g=new K,p=new w,_=new w;function v(E,D,$){f.fromArray(i,E*3),h.fromArray(i,D*3),d.fromArray(i,$*3),m.fromArray(a,E*2),x.fromArray(a,D*2),g.fromArray(a,$*2),h.sub(f),d.sub(f),x.sub(m),g.sub(m);const N=1/(x.x*g.y-g.x*x.y);!isFinite(N)||(p.copy(h).multiplyScalar(g.y).addScaledVector(d,-x.y).multiplyScalar(N),_.copy(d).multiplyScalar(x.x).addScaledVector(h,-g.x).multiplyScalar(N),l[E].add(p),l[D].add(p),l[$].add(p),u[E].add(_),u[D].add(_),u[$].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let E=0,D=y.length;E<D;++E){const $=y[E],N=$.start,F=$.count;for(let z=N,Y=N+F;z<Y;z+=3)v(n[z+0],n[z+1],n[z+2])}const T=new w,b=new w,C=new w,P=new w;function M(E){C.fromArray(r,E*3),P.copy(C);const D=l[E];T.copy(D),T.sub(C.multiplyScalar(C.dot(D))).normalize(),b.crossVectors(P,D);const N=b.dot(u[E])<0?-1:1;c[E*4]=T.x,c[E*4+1]=T.y,c[E*4+2]=T.z,c[E*4+3]=N}for(let E=0,D=y.length;E<D;++E){const $=y[E],N=$.start,F=$.count;for(let z=N,Y=N+F;z<Y;z+=3)M(n[z+0]),M(n[z+1]),M(n[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qe(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new w,r=new w,a=new w,o=new w,c=new w,l=new w,u=new w,f=new w;if(e)for(let h=0,d=e.count;h<d;h+=3){const m=e.getX(h+0),x=e.getX(h+1),g=e.getX(h+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),u.subVectors(a,r),f.subVectors(i,r),u.cross(f),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),o.add(u),c.add(u),l.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let h=0,d=t.count;h<d;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),f.subVectors(i,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,f=o.normalized,h=new l.constructor(c.length*u);let d=0,m=0;for(let x=0,g=c.length;x<g;x++){o.isInterleavedBufferAttribute?d=c[x]*o.data.stride+o.offset:d=c[x]*u;for(let p=0;p<u;p++)h[m++]=l[d++]}return new Qe(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ge,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,f=l.length;u<f;u++){const h=l[u],d=e(h,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const d=l[f];u.push(d.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],f=r[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bl=new De,jn=new rs,Sr=new Kt,Sl=new w,zi=new w,Bi=new w,ki=new w,ro=new w,Tr=new w,Er=new K,Ar=new K,wr=new K,Tl=new w,El=new w,Al=new w,Rr=new w,Cr=new w;class yt extends Je{constructor(e=new Ge,t=new qn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Tr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],f=r[c];u!==0&&(ro.fromBufferAttribute(f,e),a?Tr.addScaledVector(ro,u):Tr.addScaledVector(ro.sub(t),u))}t.add(Tr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(r),jn.copy(e.ray).recast(e.near),!(Sr.containsPoint(jn.origin)===!1&&(jn.intersectSphere(Sr,Sl)===null||jn.origin.distanceToSquared(Sl)>(e.far-e.near)**2))&&(bl.copy(r).invert(),jn.copy(e.ray).applyMatrix4(bl),!(n.boundingBox!==null&&jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,jn)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=h.length;m<x;m++){const g=h[m],p=a[g.materialIndex],_=Math.max(g.start,d.start),v=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let y=_,T=v;y<T;y+=3){const b=o.getX(y),C=o.getX(y+1),P=o.getX(y+2);i=Pr(this,p,e,n,l,u,f,b,C,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){const _=o.getX(g),v=o.getX(g+1),y=o.getX(g+2);i=Pr(this,a,e,n,l,u,f,_,v,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,x=h.length;m<x;m++){const g=h[m],p=a[g.materialIndex],_=Math.max(g.start,d.start),v=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let y=_,T=v;y<T;y+=3){const b=y,C=y+1,P=y+2;i=Pr(this,p,e,n,l,u,f,b,C,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){const _=g,v=g+1,y=g+2;i=Pr(this,a,e,n,l,u,f,_,v,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function Yp(s,e,t,n,i,r,a,o){let c;if(e.side===Ct?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===En,o),c===null)return null;Cr.copy(o),Cr.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Cr);return l<t.near||l>t.far?null:{distance:l,point:Cr.clone(),object:s}}function Pr(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,zi),s.getVertexPosition(c,Bi),s.getVertexPosition(l,ki);const u=Yp(s,e,t,n,zi,Bi,ki,Rr);if(u){i&&(Er.fromBufferAttribute(i,o),Ar.fromBufferAttribute(i,c),wr.fromBufferAttribute(i,l),u.uv=It.getInterpolation(Rr,zi,Bi,ki,Er,Ar,wr,new K)),r&&(Er.fromBufferAttribute(r,o),Ar.fromBufferAttribute(r,c),wr.fromBufferAttribute(r,l),u.uv1=It.getInterpolation(Rr,zi,Bi,ki,Er,Ar,wr,new K),u.uv2=u.uv1),a&&(Tl.fromBufferAttribute(a,o),El.fromBufferAttribute(a,c),Al.fromBufferAttribute(a,l),u.normal=It.getInterpolation(Rr,zi,Bi,ki,Tl,El,Al,new w),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new w,materialIndex:0};It.getNormal(zi,Bi,ki,f.normal),u.face=f}return u}class Xn extends Ge{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],f=[];let h=0,d=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ye(l,3)),this.setAttribute("normal",new ye(u,3)),this.setAttribute("uv",new ye(f,2));function m(x,g,p,_,v,y,T,b,C,P,M){const E=y/C,D=T/P,$=y/2,N=T/2,F=b/2,z=C+1,Y=P+1;let V=0,X=0;const J=new w;for(let Q=0;Q<Y;Q++){const he=Q*D-N;for(let B=0;B<z;B++){const ee=B*E-$;J[x]=ee*_,J[g]=he*v,J[p]=F,l.push(J.x,J.y,J.z),J[x]=0,J[g]=0,J[p]=b>0?1:-1,u.push(J.x,J.y,J.z),f.push(B/C),f.push(1-Q/P),V+=1}}for(let Q=0;Q<P;Q++)for(let he=0;he<C;he++){const B=h+he+z*Q,ee=h+he+z*(Q+1),te=h+(he+1)+z*(Q+1),de=h+(he+1)+z*Q;c.push(B,ee,de),c.push(ee,te,de),X+=6}o.addGroup(d,X,M),d+=X,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ns(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Rt(s){const e={};for(let t=0;t<s.length;t++){const n=ns(s[t]);for(const i in n)e[i]=n[i]}return e}function Zp(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Yh(s){return s.getRenderTarget()===null?s.outputColorSpace:Jt}const Zh={clone:ns,merge:Rt};var Jp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$p=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cn extends Tt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jp,this.fragmentShader=$p,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ns(e.uniforms),this.uniformsGroups=Zp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ea extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=rn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class _t extends Ea{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ts*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(mi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ts*2*Math.atan(Math.tan(mi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(mi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Vi=-90,Gi=1;class Jh extends Je{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const i=new _t(Vi,Gi,e,t);i.layers=this.layers,this.add(i);const r=new _t(Vi,Gi,e,t);r.layers=this.layers,this.add(r);const a=new _t(Vi,Gi,e,t);a.layers=this.layers,this.add(a);const o=new _t(Vi,Gi,e,t);o.layers=this.layers,this.add(o);const c=new _t(Vi,Gi,e,t);c.layers=this.layers,this.add(c);const l=new _t(Vi,Gi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===rn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,r,a,o,c,l]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=an,e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class Qs extends ht{constructor(e,t,n,i,r,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:kn,super(e,t,n,i,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $h extends $t{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Rs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===zn?Fe:Bn),this.texture=new Qs(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:at}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Xn(5,5,5),r=new cn({name:"CubemapFromEquirect",uniforms:ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ct,blending:Sn});r.uniforms.tEquirect.value=t;const a=new yt(i,r),o=t.minFilter;return t.minFilter===Gn&&(t.minFilter=at),new Jh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const ao=new w,Kp=new w,Qp=new ke;class Dn{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ao.subVectors(n,t).cross(Kp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ao),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Qp.getNormalMatrix(e),i=this.coplanarPoint(ao).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ei=new Kt,Lr=new w;class Aa{constructor(e=new Dn,t=new Dn,n=new Dn,i=new Dn,r=new Dn,a=new Dn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=rn){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],u=i[5],f=i[6],h=i[7],d=i[8],m=i[9],x=i[10],g=i[11],p=i[12],_=i[13],v=i[14],y=i[15];if(n[0].setComponents(c-r,h-l,g-d,y-p).normalize(),n[1].setComponents(c+r,h+l,g+d,y+p).normalize(),n[2].setComponents(c+a,h+u,g+m,y+_).normalize(),n[3].setComponents(c-a,h-u,g-m,y-_).normalize(),n[4].setComponents(c-o,h-f,g-x,y-v).normalize(),t===rn)n[5].setComponents(c+o,h+f,g+x,y+v).normalize();else if(t===Bs)n[5].setComponents(o,f,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(e){return ei.center.set(0,0,0),ei.radius=.7071067811865476,ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Lr.x=i.normal.x>0?e.max.x:e.min.x,Lr.y=i.normal.y>0?e.max.y:e.min.y,Lr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Lr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kh(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function jp(s,e){const t=e.isWebGL2,n=new WeakMap;function i(l,u){const f=l.array,h=l.usage,d=s.createBuffer();s.bindBuffer(u,d),s.bufferData(u,f,h),l.onUploadCallback();let m;if(f instanceof Float32Array)m=s.FLOAT;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)m=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else m=s.UNSIGNED_SHORT;else if(f instanceof Int16Array)m=s.SHORT;else if(f instanceof Uint32Array)m=s.UNSIGNED_INT;else if(f instanceof Int32Array)m=s.INT;else if(f instanceof Int8Array)m=s.BYTE;else if(f instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:d,type:m,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version}}function r(l,u,f){const h=u.array,d=u.updateRange;s.bindBuffer(f,l),d.count===-1?s.bufferSubData(f,0,h):(t?s.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):s.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(s.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const h=n.get(l);(!h||h.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=n.get(l);f===void 0?n.set(l,i(l,u)):f.version<l.version&&(r(f.buffer,l,u),f.version=l.version)}return{get:a,remove:o,update:c}}class as extends Ge{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,u=c+1,f=e/o,h=t/c,d=[],m=[],x=[],g=[];for(let p=0;p<u;p++){const _=p*h-a;for(let v=0;v<l;v++){const y=v*f-r;m.push(y,-_,0),x.push(0,0,1),g.push(v/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<o;_++){const v=_+l*p,y=_+l*(p+1),T=_+1+l*(p+1),b=_+1+l*p;d.push(v,y,b),d.push(y,T,b)}this.setIndex(d),this.setAttribute("position",new ye(m,3)),this.setAttribute("normal",new ye(x,3)),this.setAttribute("uv",new ye(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new as(e.width,e.height,e.widthSegments,e.heightSegments)}}var em=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,im=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,am="vec3 transformed = vec3( position );",om=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lm=`#ifdef USE_IRIDESCENCE
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
#endif`,um=`#ifdef USE_BUMPMAP
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
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,vm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,_m=`#define PI 3.141592653589793
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
} // validated`,ym=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mm=`vec3 transformedNormal = objectNormal;
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
#endif`,bm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Em=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Am="gl_FragColor = linearToOutputTexel( gl_FragColor );",wm=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rm=`#ifdef USE_ENVMAP
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
#endif`,Cm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pm=`#ifdef USE_ENVMAP
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
#endif`,Lm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Im=`#ifdef USE_ENVMAP
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
#endif`,Um=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Om=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fm=`#ifdef USE_GRADIENTMAP
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
}`,zm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Bm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,km=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gm=`uniform bool receiveShadow;
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
#endif`,Hm=`#ifdef USE_ENVMAP
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
#endif`,Wm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zm=`PhysicalMaterial material;
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
#endif`,Jm=`struct PhysicalMaterial {
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
}`,$m=`
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
#endif`,Km=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,jm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,e0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,n0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,i0=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,s0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,r0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,a0=`#if defined( USE_POINTS_UV )
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
#endif`,o0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,c0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,l0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,u0=`#ifdef USE_MORPHNORMALS
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
#endif`,h0=`#ifdef USE_MORPHTARGETS
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
#endif`,f0=`#ifdef USE_MORPHTARGETS
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
#endif`,d0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,p0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,m0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,v0=`#ifdef USE_NORMALMAP
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
#endif`,_0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,y0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,M0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,b0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,S0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,T0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,E0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,A0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,w0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,R0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,C0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,P0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,L0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,I0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,U0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,D0=`float getShadowMask() {
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
}`,N0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,O0=`#ifdef USE_SKINNING
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
#endif`,F0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,z0=`#ifdef USE_SKINNING
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
#endif`,B0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,k0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,V0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,G0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,H0=`#ifdef USE_TRANSMISSION
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
#endif`,W0=`#ifdef USE_TRANSMISSION
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
#endif`,q0=`#ifdef USE_UV
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
#endif`,X0=`#ifdef USE_UV
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
#endif`,Y0=`#ifdef USE_UV
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
#endif`,Z0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const J0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,K0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,tg=`#include <common>
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
}`,ng=`#if DEPTH_PACKING == 3200
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
}`,ig=`#define DISTANCE
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
}`,sg=`#define DISTANCE
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
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ag=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,og=`uniform float scale;
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
}`,cg=`uniform vec3 diffuse;
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
}`,lg=`#include <common>
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
}`,ug=`uniform vec3 diffuse;
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
}`,hg=`#define LAMBERT
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
}`,fg=`#define LAMBERT
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
}`,dg=`#define MATCAP
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
}`,pg=`#define MATCAP
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
}`,mg=`#define NORMAL
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
}`,gg=`#define NORMAL
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
}`,xg=`#define PHONG
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
}`,vg=`#define PHONG
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
}`,_g=`#define STANDARD
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
}`,yg=`#define STANDARD
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
}`,Mg=`#define TOON
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
}`,bg=`#define TOON
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
}`,Sg=`uniform float size;
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
}`,Tg=`uniform vec3 diffuse;
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
}`,Eg=`#include <common>
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
}`,Ag=`uniform vec3 color;
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
}`,wg=`uniform float rotation;
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
}`,Rg=`uniform vec3 diffuse;
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
}`,Be={alphamap_fragment:em,alphamap_pars_fragment:tm,alphatest_fragment:nm,alphatest_pars_fragment:im,aomap_fragment:sm,aomap_pars_fragment:rm,begin_vertex:am,beginnormal_vertex:om,bsdfs:cm,iridescence_fragment:lm,bumpmap_pars_fragment:um,clipping_planes_fragment:hm,clipping_planes_pars_fragment:fm,clipping_planes_pars_vertex:dm,clipping_planes_vertex:pm,color_fragment:mm,color_pars_fragment:gm,color_pars_vertex:xm,color_vertex:vm,common:_m,cube_uv_reflection_fragment:ym,defaultnormal_vertex:Mm,displacementmap_pars_vertex:bm,displacementmap_vertex:Sm,emissivemap_fragment:Tm,emissivemap_pars_fragment:Em,encodings_fragment:Am,encodings_pars_fragment:wm,envmap_fragment:Rm,envmap_common_pars_fragment:Cm,envmap_pars_fragment:Pm,envmap_pars_vertex:Lm,envmap_physical_pars_fragment:Hm,envmap_vertex:Im,fog_vertex:Um,fog_pars_vertex:Dm,fog_fragment:Nm,fog_pars_fragment:Om,gradientmap_pars_fragment:Fm,lightmap_fragment:zm,lightmap_pars_fragment:Bm,lights_lambert_fragment:km,lights_lambert_pars_fragment:Vm,lights_pars_begin:Gm,lights_toon_fragment:Wm,lights_toon_pars_fragment:qm,lights_phong_fragment:Xm,lights_phong_pars_fragment:Ym,lights_physical_fragment:Zm,lights_physical_pars_fragment:Jm,lights_fragment_begin:$m,lights_fragment_maps:Km,lights_fragment_end:Qm,logdepthbuf_fragment:jm,logdepthbuf_pars_fragment:e0,logdepthbuf_pars_vertex:t0,logdepthbuf_vertex:n0,map_fragment:i0,map_pars_fragment:s0,map_particle_fragment:r0,map_particle_pars_fragment:a0,metalnessmap_fragment:o0,metalnessmap_pars_fragment:c0,morphcolor_vertex:l0,morphnormal_vertex:u0,morphtarget_pars_vertex:h0,morphtarget_vertex:f0,normal_fragment_begin:d0,normal_fragment_maps:p0,normal_pars_fragment:m0,normal_pars_vertex:g0,normal_vertex:x0,normalmap_pars_fragment:v0,clearcoat_normal_fragment_begin:_0,clearcoat_normal_fragment_maps:y0,clearcoat_pars_fragment:M0,iridescence_pars_fragment:b0,output_fragment:S0,packing:T0,premultiplied_alpha_fragment:E0,project_vertex:A0,dithering_fragment:w0,dithering_pars_fragment:R0,roughnessmap_fragment:C0,roughnessmap_pars_fragment:P0,shadowmap_pars_fragment:L0,shadowmap_pars_vertex:I0,shadowmap_vertex:U0,shadowmask_pars_fragment:D0,skinbase_vertex:N0,skinning_pars_vertex:O0,skinning_vertex:F0,skinnormal_vertex:z0,specularmap_fragment:B0,specularmap_pars_fragment:k0,tonemapping_fragment:V0,tonemapping_pars_fragment:G0,transmission_fragment:H0,transmission_pars_fragment:W0,uv_pars_fragment:q0,uv_pars_vertex:X0,uv_vertex:Y0,worldpos_vertex:Z0,background_vert:J0,background_frag:$0,backgroundCube_vert:K0,backgroundCube_frag:Q0,cube_vert:j0,cube_frag:eg,depth_vert:tg,depth_frag:ng,distanceRGBA_vert:ig,distanceRGBA_frag:sg,equirect_vert:rg,equirect_frag:ag,linedashed_vert:og,linedashed_frag:cg,meshbasic_vert:lg,meshbasic_frag:ug,meshlambert_vert:hg,meshlambert_frag:fg,meshmatcap_vert:dg,meshmatcap_frag:pg,meshnormal_vert:mg,meshnormal_frag:gg,meshphong_vert:xg,meshphong_frag:vg,meshphysical_vert:_g,meshphysical_frag:yg,meshtoon_vert:Mg,meshtoon_frag:bg,points_vert:Sg,points_frag:Tg,shadow_vert:Eg,shadow_frag:Ag,sprite_vert:wg,sprite_frag:Rg},oe={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new K(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new K(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Zt={basic:{uniforms:Rt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Rt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new pe(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Rt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Rt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Rt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new pe(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Rt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Rt([oe.points,oe.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Rt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Rt([oe.common,oe.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Rt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Rt([oe.sprite,oe.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Rt([oe.common,oe.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Rt([oe.lights,oe.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Zt.physical={uniforms:Rt([Zt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new K(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new K},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new K},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Ir={r:0,b:0,g:0};function Cg(s,e,t,n,i,r,a){const o=new pe(0);let c=r===!0?0:1,l,u,f=null,h=0,d=null;function m(g,p){let _=!1,v=p.isScene===!0?p.background:null;switch(v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?x(o,c):v&&v.isColor&&(x(v,1),_=!0),s.xr.getEnvironmentBlendMode()){case"opaque":_=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,a),_=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,a),_=!0;break}(s.autoClear||_)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ss)?(u===void 0&&(u=new yt(new Xn(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:ns(Zt.backgroundCube.uniforms),vertexShader:Zt.backgroundCube.vertexShader,fragmentShader:Zt.backgroundCube.fragmentShader,side:Ct,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=v.colorSpace!==Fe,(f!==v||h!==v.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,f=v,h=v.version,d=s.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new yt(new as(2,2),new cn({name:"BackgroundMaterial",uniforms:ns(Zt.background.uniforms),vertexShader:Zt.background.vertexShader,fragmentShader:Zt.background.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=v.colorSpace!==Fe,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,f=v,h=v.version,d=s.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function x(g,p){g.getRGB(Ir,Yh(s)),n.buffers.color.setClear(Ir.r,Ir.g,Ir.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(g,p=1){o.set(g),c=p,x(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,x(o,c)},render:m}}function Pg(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=g(null);let l=c,u=!1;function f(F,z,Y,V,X){let J=!1;if(a){const Q=x(V,Y,z);l!==Q&&(l=Q,d(l.object)),J=p(F,V,Y,X),J&&_(F,V,Y,X)}else{const Q=z.wireframe===!0;(l.geometry!==V.id||l.program!==Y.id||l.wireframe!==Q)&&(l.geometry=V.id,l.program=Y.id,l.wireframe=Q,J=!0)}X!==null&&t.update(X,s.ELEMENT_ARRAY_BUFFER),(J||u)&&(u=!1,P(F,z,Y,V),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function h(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(F){return n.isWebGL2?s.bindVertexArray(F):r.bindVertexArrayOES(F)}function m(F){return n.isWebGL2?s.deleteVertexArray(F):r.deleteVertexArrayOES(F)}function x(F,z,Y){const V=Y.wireframe===!0;let X=o[F.id];X===void 0&&(X={},o[F.id]=X);let J=X[z.id];J===void 0&&(J={},X[z.id]=J);let Q=J[V];return Q===void 0&&(Q=g(h()),J[V]=Q),Q}function g(F){const z=[],Y=[],V=[];for(let X=0;X<i;X++)z[X]=0,Y[X]=0,V[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:Y,attributeDivisors:V,object:F,attributes:{},index:null}}function p(F,z,Y,V){const X=l.attributes,J=z.attributes;let Q=0;const he=Y.getAttributes();for(const B in he)if(he[B].location>=0){const te=X[B];let de=J[B];if(de===void 0&&(B==="instanceMatrix"&&F.instanceMatrix&&(de=F.instanceMatrix),B==="instanceColor"&&F.instanceColor&&(de=F.instanceColor)),te===void 0||te.attribute!==de||de&&te.data!==de.data)return!0;Q++}return l.attributesNum!==Q||l.index!==V}function _(F,z,Y,V){const X={},J=z.attributes;let Q=0;const he=Y.getAttributes();for(const B in he)if(he[B].location>=0){let te=J[B];te===void 0&&(B==="instanceMatrix"&&F.instanceMatrix&&(te=F.instanceMatrix),B==="instanceColor"&&F.instanceColor&&(te=F.instanceColor));const de={};de.attribute=te,te&&te.data&&(de.data=te.data),X[B]=de,Q++}l.attributes=X,l.attributesNum=Q,l.index=V}function v(){const F=l.newAttributes;for(let z=0,Y=F.length;z<Y;z++)F[z]=0}function y(F){T(F,0)}function T(F,z){const Y=l.newAttributes,V=l.enabledAttributes,X=l.attributeDivisors;Y[F]=1,V[F]===0&&(s.enableVertexAttribArray(F),V[F]=1),X[F]!==z&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,z),X[F]=z)}function b(){const F=l.newAttributes,z=l.enabledAttributes;for(let Y=0,V=z.length;Y<V;Y++)z[Y]!==F[Y]&&(s.disableVertexAttribArray(Y),z[Y]=0)}function C(F,z,Y,V,X,J,Q){Q===!0?s.vertexAttribIPointer(F,z,Y,X,J):s.vertexAttribPointer(F,z,Y,V,X,J)}function P(F,z,Y,V){if(n.isWebGL2===!1&&(F.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const X=V.attributes,J=Y.getAttributes(),Q=z.defaultAttributeValues;for(const he in J){const B=J[he];if(B.location>=0){let ee=X[he];if(ee===void 0&&(he==="instanceMatrix"&&F.instanceMatrix&&(ee=F.instanceMatrix),he==="instanceColor"&&F.instanceColor&&(ee=F.instanceColor)),ee!==void 0){const te=ee.normalized,de=ee.itemSize,me=t.get(ee);if(me===void 0)continue;const _e=me.buffer,Ne=me.type,Ce=me.bytesPerElement,Ke=n.isWebGL2===!0&&(Ne===s.INT||Ne===s.UNSIGNED_INT||ee.gpuType===vc);if(ee.isInterleavedBufferAttribute){const Le=ee.data,L=Le.stride,se=ee.offset;if(Le.isInstancedInterleavedBuffer){for(let Z=0;Z<B.locationSize;Z++)T(B.location+Z,Le.meshPerAttribute);F.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Le.meshPerAttribute*Le.count)}else for(let Z=0;Z<B.locationSize;Z++)y(B.location+Z);s.bindBuffer(s.ARRAY_BUFFER,_e);for(let Z=0;Z<B.locationSize;Z++)C(B.location+Z,de/B.locationSize,Ne,te,L*Ce,(se+de/B.locationSize*Z)*Ce,Ke)}else{if(ee.isInstancedBufferAttribute){for(let Le=0;Le<B.locationSize;Le++)T(B.location+Le,ee.meshPerAttribute);F.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Le=0;Le<B.locationSize;Le++)y(B.location+Le);s.bindBuffer(s.ARRAY_BUFFER,_e);for(let Le=0;Le<B.locationSize;Le++)C(B.location+Le,de/B.locationSize,Ne,te,de*Ce,de/B.locationSize*Le*Ce,Ke)}}else if(Q!==void 0){const te=Q[he];if(te!==void 0)switch(te.length){case 2:s.vertexAttrib2fv(B.location,te);break;case 3:s.vertexAttrib3fv(B.location,te);break;case 4:s.vertexAttrib4fv(B.location,te);break;default:s.vertexAttrib1fv(B.location,te)}}}}b()}function M(){$();for(const F in o){const z=o[F];for(const Y in z){const V=z[Y];for(const X in V)m(V[X].object),delete V[X];delete z[Y]}delete o[F]}}function E(F){if(o[F.id]===void 0)return;const z=o[F.id];for(const Y in z){const V=z[Y];for(const X in V)m(V[X].object),delete V[X];delete z[Y]}delete o[F.id]}function D(F){for(const z in o){const Y=o[z];if(Y[F.id]===void 0)continue;const V=Y[F.id];for(const X in V)m(V[X].object),delete V[X];delete Y[F.id]}}function $(){N(),u=!0,l!==c&&(l=c,d(l.object))}function N(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:$,resetDefaultState:N,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:D,initAttributes:v,enableAttribute:y,disableUnusedAttributes:b}}function Lg(s,e,t,n){const i=n.isWebGL2;let r;function a(l){r=l}function o(l,u){s.drawArrays(r,l,u),t.update(u,r,1)}function c(l,u,f){if(f===0)return;let h,d;if(i)h=s,d="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[d](r,l,u,f),t.update(u,r,f)}this.setMode=a,this.render=o,this.renderInstances=c}function Ig(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),h=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),g=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,y=a||e.has("OES_texture_float"),T=v&&y,b=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:m,maxAttributes:x,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:T,maxSamples:b}}function Ug(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Dn,o=new ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||i;return i=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const m=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,p=s.get(f);if(!i||m===null||m.length===0||r&&!g)r?u(null):l();else{const _=r?0:n,v=_*4;let y=p.clippingState||null;c.value=y,y=u(m,h,v,d);for(let T=0;T!==v;++T)y[T]=t[T];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,m){const x=f!==null?f.length:0;let g=null;if(x!==0){if(g=c.value,m!==!0||g===null){const p=d+x*4,_=h.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,y=d;v!==x;++v,y+=4)a.copy(f[v]).applyMatrix4(_,o),a.normal.toArray(g,y),g[y+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function Dg(s){let e=new WeakMap;function t(a,o){return o===Ls?a.mapping=kn:o===Is&&(a.mapping=Vn),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Ls||o===Is)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new $h(c.height/2);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class wa extends Ea{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ki=4,wl=[.125,.215,.35,.446,.526,.582],ci=20,oo=new wa,Rl=new pe;let co=null;const ai=(1+Math.sqrt(5))/2,Hi=1/ai,Cl=[new w(1,1,1),new w(-1,1,1),new w(1,1,-1),new w(-1,1,-1),new w(0,ai,Hi),new w(0,ai,-Hi),new w(Hi,0,ai),new w(-Hi,0,ai),new w(ai,Hi,0),new w(-ai,Hi,0)];class sc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){co=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Il(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ll(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(co),e.scissorTest=!1,Ur(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===kn||e.mapping===Vn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),co=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:at,minFilter:at,generateMipmaps:!1,type:_i,format:Ut,colorSpace:Jt,depthBuffer:!1},i=Pl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ng(r)),this._blurMaterial=Og(r,e,t)}return i}_compileMaterial(e){const t=new yt(this._lodPlanes[0],e);this._renderer.compile(t,oo)}_sceneToCubeUV(e,t,n,i){const o=new _t(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Rl),u.toneMapping=an,u.autoClear=!1;const d=new qn({name:"PMREM.Background",side:Ct,depthWrite:!1,depthTest:!1}),m=new yt(new Xn,d);let x=!1;const g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,x=!0):(d.color.copy(Rl),x=!0);for(let p=0;p<6;p++){const _=p%3;_===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):_===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const v=this._cubeSize;Ur(i,_*v,p>2?v:0,v,v),u.setRenderTarget(i),x&&u.render(m,o),u.render(e,o)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===kn||e.mapping===Vn;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Il()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ll());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new yt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Ur(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,oo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Cl[(i-1)%Cl.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new yt(this._lodPlanes[i],l),h=l.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ci-1),x=r/m,g=isFinite(r)?1+Math.floor(u*x):ci;g>ci&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ci}`);const p=[];let _=0;for(let C=0;C<ci;++C){const P=C/x,M=Math.exp(-P*P/2);p.push(M),C===0?_+=M:C<g&&(_+=2*M)}for(let C=0;C<p.length;C++)p[C]=p[C]/_;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:v}=this;h.dTheta.value=m,h.mipInt.value=v-n;const y=this._sizeLods[i],T=3*y*(i>v-Ki?i-v+Ki:0),b=4*(this._cubeSize-y);Ur(t,T,b,3*y,2*y),c.setRenderTarget(t),c.render(f,oo)}}function Ng(s){const e=[],t=[],n=[];let i=s;const r=s-Ki+1+wl.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>s-Ki?c=wl[a-s+Ki-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,m=6,x=3,g=2,p=1,_=new Float32Array(x*m*d),v=new Float32Array(g*m*d),y=new Float32Array(p*m*d);for(let b=0;b<d;b++){const C=b%3*2/3-1,P=b>2?0:-1,M=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];_.set(M,x*m*b),v.set(h,g*m*b);const E=[b,b,b,b,b,b];y.set(E,p*m*b)}const T=new Ge;T.setAttribute("position",new Qe(_,x)),T.setAttribute("uv",new Qe(v,g)),T.setAttribute("faceIndex",new Qe(y,p)),e.push(T),i>Ki&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Pl(s,e,t){const n=new $t(s,e,t);return n.texture.mapping=ss,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ur(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Og(s,e,t){const n=new Float32Array(ci),i=new w(0,1,0);return new cn({name:"SphericalGaussianBlur",defines:{n:ci,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ic(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Ll(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ic(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Il(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Ic(){return`

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
	`}function Fg(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Ls||c===Is,u=c===kn||c===Vn;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new sc(s)),f=l?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(l&&f&&f.height>0||u&&f&&i(f)){t===null&&(t=new sc(s));const h=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",r),h.texture}else return null}}}return o}function i(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function zg(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Bg(s,e,t,n){const i={},r=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const m in h.attributes)e.remove(h.attributes[m]);for(const m in h.morphAttributes){const x=h.morphAttributes[m];for(let g=0,p=x.length;g<p;g++)e.remove(x[g])}h.removeEventListener("dispose",a),delete i[h.id];const d=r.get(h);d&&(e.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function c(f){const h=f.attributes;for(const m in h)e.update(h[m],s.ARRAY_BUFFER);const d=f.morphAttributes;for(const m in d){const x=d[m];for(let g=0,p=x.length;g<p;g++)e.update(x[g],s.ARRAY_BUFFER)}}function l(f){const h=[],d=f.index,m=f.attributes.position;let x=0;if(d!==null){const _=d.array;x=d.version;for(let v=0,y=_.length;v<y;v+=3){const T=_[v+0],b=_[v+1],C=_[v+2];h.push(T,b,b,C,C,T)}}else{const _=m.array;x=m.version;for(let v=0,y=_.length/3-1;v<y;v+=3){const T=v+0,b=v+1,C=v+2;h.push(T,b,b,C,C,T)}}const g=new(qh(h)?Lc:Pc)(h,1);g.version=x;const p=r.get(f);p&&e.remove(p),r.set(f,g)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function kg(s,e,t,n){const i=n.isWebGL2;let r;function a(h){r=h}let o,c;function l(h){o=h.type,c=h.bytesPerElement}function u(h,d){s.drawElements(r,d,o,h*c),t.update(d,r,1)}function f(h,d,m){if(m===0)return;let x,g;if(i)x=s,g="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[g](r,d,o,h*c,m),t.update(d,r,m)}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=f}function Vg(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Gg(s,e){return s[0]-e[0]}function Hg(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Wg(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new $e,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,f){const h=l.morphTargetInfluences;if(e.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=d!==void 0?d.length:0;let x=r.get(u);if(x===void 0||x.count!==m){let F=function(){$.dispose(),r.delete(u),u.removeEventListener("dispose",F)};x!==void 0&&x.texture.dispose();const _=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,T=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let P=0;_===!0&&(P=1),v===!0&&(P=2),y===!0&&(P=3);let M=u.attributes.position.count*P,E=1;M>e.maxTextureSize&&(E=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const D=new Float32Array(M*E*4*m),$=new Sa(D,M,E,m);$.type=sn,$.needsUpdate=!0;const N=P*4;for(let z=0;z<m;z++){const Y=T[z],V=b[z],X=C[z],J=M*E*4*z;for(let Q=0;Q<Y.count;Q++){const he=Q*N;_===!0&&(a.fromBufferAttribute(Y,Q),D[J+he+0]=a.x,D[J+he+1]=a.y,D[J+he+2]=a.z,D[J+he+3]=0),v===!0&&(a.fromBufferAttribute(V,Q),D[J+he+4]=a.x,D[J+he+5]=a.y,D[J+he+6]=a.z,D[J+he+7]=0),y===!0&&(a.fromBufferAttribute(X,Q),D[J+he+8]=a.x,D[J+he+9]=a.y,D[J+he+10]=a.z,D[J+he+11]=X.itemSize===4?a.w:1)}}x={count:m,texture:$,size:new K(M,E)},r.set(u,x),u.addEventListener("dispose",F)}let g=0;for(let _=0;_<h.length;_++)g+=h[_];const p=u.morphTargetsRelative?1:1-g;f.getUniforms().setValue(s,"morphTargetBaseInfluence",p),f.getUniforms().setValue(s,"morphTargetInfluences",h),f.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}else{const d=h===void 0?0:h.length;let m=n[u.id];if(m===void 0||m.length!==d){m=[];for(let v=0;v<d;v++)m[v]=[v,0];n[u.id]=m}for(let v=0;v<d;v++){const y=m[v];y[0]=v,y[1]=h[v]}m.sort(Hg);for(let v=0;v<8;v++)v<d&&m[v][1]?(o[v][0]=m[v][0],o[v][1]=m[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(Gg);const x=u.morphAttributes.position,g=u.morphAttributes.normal;let p=0;for(let v=0;v<8;v++){const y=o[v],T=y[0],b=y[1];T!==Number.MAX_SAFE_INTEGER&&b?(x&&u.getAttribute("morphTarget"+v)!==x[T]&&u.setAttribute("morphTarget"+v,x[T]),g&&u.getAttribute("morphNormal"+v)!==g[T]&&u.setAttribute("morphNormal"+v,g[T]),i[v]=b,p+=b):(x&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),g&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const _=u.morphTargetsRelative?1:1-p;f.getUniforms().setValue(s,"morphTargetBaseInfluence",_),f.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function qg(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,f=e.get(c,u);return i.get(f)!==l&&(e.update(f),i.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER)),f}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const Qh=new ht,jh=new Sa,ef=new Cc,tf=new Qs,Ul=[],Dl=[],Nl=new Float32Array(16),Ol=new Float32Array(9),Fl=new Float32Array(4);function os(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Ul[i];if(r===void 0&&(r=new Float32Array(i),Ul[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function mt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function gt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ra(s,e){let t=Dl[e];t===void 0&&(t=new Int32Array(e),Dl[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Xg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Yg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;s.uniform2fv(this.addr,e),gt(t,e)}}function Zg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;s.uniform3fv(this.addr,e),gt(t,e)}}function Jg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;s.uniform4fv(this.addr,e),gt(t,e)}}function $g(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;Fl.set(n),s.uniformMatrix2fv(this.addr,!1,Fl),gt(t,n)}}function Kg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;Ol.set(n),s.uniformMatrix3fv(this.addr,!1,Ol),gt(t,n)}}function Qg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;Nl.set(n),s.uniformMatrix4fv(this.addr,!1,Nl),gt(t,n)}}function jg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function ex(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;s.uniform2iv(this.addr,e),gt(t,e)}}function tx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;s.uniform3iv(this.addr,e),gt(t,e)}}function nx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;s.uniform4iv(this.addr,e),gt(t,e)}}function ix(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function sx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;s.uniform2uiv(this.addr,e),gt(t,e)}}function rx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;s.uniform3uiv(this.addr,e),gt(t,e)}}function ax(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;s.uniform4uiv(this.addr,e),gt(t,e)}}function ox(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Qh,i)}function cx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ef,i)}function lx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||tf,i)}function ux(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||jh,i)}function hx(s){switch(s){case 5126:return Xg;case 35664:return Yg;case 35665:return Zg;case 35666:return Jg;case 35674:return $g;case 35675:return Kg;case 35676:return Qg;case 5124:case 35670:return jg;case 35667:case 35671:return ex;case 35668:case 35672:return tx;case 35669:case 35673:return nx;case 5125:return ix;case 36294:return sx;case 36295:return rx;case 36296:return ax;case 35678:case 36198:case 36298:case 36306:case 35682:return ox;case 35679:case 36299:case 36307:return cx;case 35680:case 36300:case 36308:case 36293:return lx;case 36289:case 36303:case 36311:case 36292:return ux}}function fx(s,e){s.uniform1fv(this.addr,e)}function dx(s,e){const t=os(e,this.size,2);s.uniform2fv(this.addr,t)}function px(s,e){const t=os(e,this.size,3);s.uniform3fv(this.addr,t)}function mx(s,e){const t=os(e,this.size,4);s.uniform4fv(this.addr,t)}function gx(s,e){const t=os(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function xx(s,e){const t=os(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function vx(s,e){const t=os(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function _x(s,e){s.uniform1iv(this.addr,e)}function yx(s,e){s.uniform2iv(this.addr,e)}function Mx(s,e){s.uniform3iv(this.addr,e)}function bx(s,e){s.uniform4iv(this.addr,e)}function Sx(s,e){s.uniform1uiv(this.addr,e)}function Tx(s,e){s.uniform2uiv(this.addr,e)}function Ex(s,e){s.uniform3uiv(this.addr,e)}function Ax(s,e){s.uniform4uiv(this.addr,e)}function wx(s,e,t){const n=this.cache,i=e.length,r=Ra(t,i);mt(n,r)||(s.uniform1iv(this.addr,r),gt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Qh,r[a])}function Rx(s,e,t){const n=this.cache,i=e.length,r=Ra(t,i);mt(n,r)||(s.uniform1iv(this.addr,r),gt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||ef,r[a])}function Cx(s,e,t){const n=this.cache,i=e.length,r=Ra(t,i);mt(n,r)||(s.uniform1iv(this.addr,r),gt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||tf,r[a])}function Px(s,e,t){const n=this.cache,i=e.length,r=Ra(t,i);mt(n,r)||(s.uniform1iv(this.addr,r),gt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||jh,r[a])}function Lx(s){switch(s){case 5126:return fx;case 35664:return dx;case 35665:return px;case 35666:return mx;case 35674:return gx;case 35675:return xx;case 35676:return vx;case 5124:case 35670:return _x;case 35667:case 35671:return yx;case 35668:case 35672:return Mx;case 35669:case 35673:return bx;case 5125:return Sx;case 36294:return Tx;case 36295:return Ex;case 36296:return Ax;case 35678:case 36198:case 36298:case 36306:case 35682:return wx;case 35679:case 36299:case 36307:return Rx;case 35680:case 36300:case 36308:case 36293:return Cx;case 36289:case 36303:case 36311:case 36292:return Px}}class Ix{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=hx(t.type)}}class Ux{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Lx(t.type)}}class Dx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const lo=/(\w+)(\])?(\[|\.)?/g;function zl(s,e){s.seq.push(e),s.map[e.id]=e}function Nx(s,e,t){const n=s.name,i=n.length;for(lo.lastIndex=0;;){const r=lo.exec(n),a=lo.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){zl(t,l===void 0?new Ix(o,s,e):new Ux(o,s,e));break}else{let f=t.map[o];f===void 0&&(f=new Dx(o),zl(t,f)),t=f}}}class fa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Nx(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Bl(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let Ox=0;function Fx(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function zx(s){switch(s){case Jt:return["Linear","( value )"];case Fe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),["Linear","( value )"]}}function kl(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Fx(s.getShaderSource(e),a)}else return i}function Bx(s,e){const t=zx(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function kx(s,e){let t;switch(e){case mh:t="Linear";break;case gh:t="Reinhard";break;case xh:t="OptimizedCineon";break;case vh:t="ACESFilmic";break;case _h:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Vx(s){return[s.extensionDerivatives||!!s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Es).join(`
`)}function Gx(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Hx(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Es(s){return s!==""}function Vl(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gl(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Wx=/^[ \t]*#include +<([\w\d./]+)>/gm;function rc(s){return s.replace(Wx,qx)}function qx(s,e){const t=Be[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return rc(t)}const Xx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hl(s){return s.replace(Xx,Yx)}function Yx(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Wl(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Zx(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===pc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Yu?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===tn&&(e="SHADOWMAP_TYPE_VSM"),e}function Jx(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case kn:case Vn:e="ENVMAP_TYPE_CUBE";break;case ss:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $x(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Vn:e="ENVMAP_MODE_REFRACTION";break}return e}function Kx(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case $s:e="ENVMAP_BLENDING_MULTIPLY";break;case dh:e="ENVMAP_BLENDING_MIX";break;case ph:e="ENVMAP_BLENDING_ADD";break}return e}function Qx(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function jx(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Zx(t),l=Jx(t),u=$x(t),f=Kx(t),h=Qx(t),d=t.isWebGL2?"":Vx(t),m=Gx(r),x=i.createProgram();let g,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Es).join(`
`),g.length>0&&(g+=`
`),p=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Es).join(`
`),p.length>0&&(p+=`
`)):(g=[Wl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Es).join(`
`),p=[d,Wl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==an?"#define TONE_MAPPING":"",t.toneMapping!==an?Be.tonemapping_pars_fragment:"",t.toneMapping!==an?kx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.encodings_pars_fragment,Bx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Es).join(`
`)),a=rc(a),a=Vl(a,t),a=Gl(a,t),o=rc(o),o=Vl(o,t),o=Gl(o,t),a=Hl(a),o=Hl(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===tc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=_+g+a,y=_+p+o,T=Bl(i,i.VERTEX_SHADER,v),b=Bl(i,i.FRAGMENT_SHADER,y);if(i.attachShader(x,T),i.attachShader(x,b),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x),s.debug.checkShaderErrors){const M=i.getProgramInfoLog(x).trim(),E=i.getShaderInfoLog(T).trim(),D=i.getShaderInfoLog(b).trim();let $=!0,N=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,T,b);else{const F=kl(i,T,"vertex"),z=kl(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+F+`
`+z)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(E===""||D==="")&&(N=!1);N&&(this.diagnostics={runnable:$,programLog:M,vertexShader:{log:E,prefix:g},fragmentShader:{log:D,prefix:p}})}i.deleteShader(T),i.deleteShader(b);let C;this.getUniforms=function(){return C===void 0&&(C=new fa(i,x)),C};let P;return this.getAttributes=function(){return P===void 0&&(P=Hx(i,x)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ox++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=b,this}let ev=0;class tv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new nv(e),t.set(e,n)),n}}class nv{constructor(e){this.id=ev++,this.code=e,this.usedTimes=0}}function iv(s,e,t,n,i,r,a){const o=new Ta,c=new tv,l=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,h=i.vertexTextures;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function g(M,E,D,$,N){const F=$.fog,z=N.geometry,Y=M.isMeshStandardMaterial?$.environment:null,V=(M.isMeshStandardMaterial?t:e).get(M.envMap||Y),X=!!V&&V.mapping===ss?V.image.height:null,J=m[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const Q=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,he=Q!==void 0?Q.length:0;let B=0;z.morphAttributes.position!==void 0&&(B=1),z.morphAttributes.normal!==void 0&&(B=2),z.morphAttributes.color!==void 0&&(B=3);let ee,te,de,me;if(J){const ft=Zt[J];ee=ft.vertexShader,te=ft.fragmentShader}else ee=M.vertexShader,te=M.fragmentShader,c.update(M),de=c.getVertexShaderID(M),me=c.getFragmentShaderID(M);const _e=s.getRenderTarget(),Ne=N.isInstancedMesh===!0,Ce=!!M.map,Ke=!!M.matcap,Le=!!V,L=!!M.aoMap,se=!!M.lightMap,Z=!!M.bumpMap,re=!!M.normalMap,j=!!M.displacementMap,Se=!!M.emissiveMap,ge=!!M.metalnessMap,xe=!!M.roughnessMap,Ue=M.anisotropy>0,qe=M.clearcoat>0,nt=M.iridescence>0,R=M.sheen>0,S=M.transmission>0,G=Ue&&!!M.anisotropyMap,ne=qe&&!!M.clearcoatMap,ie=qe&&!!M.clearcoatNormalMap,ce=qe&&!!M.clearcoatRoughnessMap,Te=nt&&!!M.iridescenceMap,le=nt&&!!M.iridescenceThicknessMap,q=R&&!!M.sheenColorMap,Ee=R&&!!M.sheenRoughnessMap,Ae=!!M.specularMap,Re=!!M.specularColorMap,Me=!!M.specularIntensityMap,be=S&&!!M.transmissionMap,He=S&&!!M.thicknessMap,je=!!M.gradientMap,I=!!M.alphaMap,ue=M.alphaTest>0,k=!!M.extensions,ae=!!z.attributes.uv1,fe=!!z.attributes.uv2,Ze=!!z.attributes.uv3;return{isWebGL2:u,shaderID:J,shaderType:M.type,shaderName:M.name,vertexShader:ee,fragmentShader:te,defines:M.defines,customVertexShaderID:de,customFragmentShaderID:me,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,instancing:Ne,instancingColor:Ne&&N.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:_e===null?s.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Jt,map:Ce,matcap:Ke,envMap:Le,envMapMode:Le&&V.mapping,envMapCubeUVHeight:X,aoMap:L,lightMap:se,bumpMap:Z,normalMap:re,displacementMap:h&&j,emissiveMap:Se,normalMapObjectSpace:re&&M.normalMapType===Dh,normalMapTangentSpace:re&&M.normalMapType===Wn,metalnessMap:ge,roughnessMap:xe,anisotropy:Ue,anisotropyMap:G,clearcoat:qe,clearcoatMap:ne,clearcoatNormalMap:ie,clearcoatRoughnessMap:ce,iridescence:nt,iridescenceMap:Te,iridescenceThicknessMap:le,sheen:R,sheenColorMap:q,sheenRoughnessMap:Ee,specularMap:Ae,specularColorMap:Re,specularIntensityMap:Me,transmission:S,transmissionMap:be,thicknessMap:He,gradientMap:je,opaque:M.transparent===!1&&M.blending===pi,alphaMap:I,alphaTest:ue,combine:M.combine,mapUv:Ce&&x(M.map.channel),aoMapUv:L&&x(M.aoMap.channel),lightMapUv:se&&x(M.lightMap.channel),bumpMapUv:Z&&x(M.bumpMap.channel),normalMapUv:re&&x(M.normalMap.channel),displacementMapUv:j&&x(M.displacementMap.channel),emissiveMapUv:Se&&x(M.emissiveMap.channel),metalnessMapUv:ge&&x(M.metalnessMap.channel),roughnessMapUv:xe&&x(M.roughnessMap.channel),anisotropyMapUv:G&&x(M.anisotropyMap.channel),clearcoatMapUv:ne&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:ie&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:le&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:q&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&x(M.sheenRoughnessMap.channel),specularMapUv:Ae&&x(M.specularMap.channel),specularColorMapUv:Re&&x(M.specularColorMap.channel),specularIntensityMapUv:Me&&x(M.specularIntensityMap.channel),transmissionMapUv:be&&x(M.transmissionMap.channel),thicknessMapUv:He&&x(M.thicknessMap.channel),alphaMapUv:I&&x(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(re||Ue),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:ae,vertexUv2s:fe,vertexUv3s:Ze,pointsUvs:N.isPoints===!0&&!!z.attributes.uv&&(Ce||I),fog:!!F,useFog:M.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:N.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:B,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:M.toneMapped?s.toneMapping:an,useLegacyLights:s.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===nn,flipSided:M.side===Ct,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:k&&M.extensions.derivatives===!0,extensionFragDepth:k&&M.extensions.fragDepth===!0,extensionDrawBuffers:k&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:k&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)E.push(D),E.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(_(E,M),v(E,M),E.push(s.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function _(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function v(M,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),M.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),M.push(o.mask)}function y(M){const E=m[M.type];let D;if(E){const $=Zt[E];D=Zh.clone($.uniforms)}else D=M.uniforms;return D}function T(M,E){let D;for(let $=0,N=l.length;$<N;$++){const F=l[$];if(F.cacheKey===E){D=F,++D.usedTimes;break}}return D===void 0&&(D=new jx(s,E,M,r),l.push(D)),D}function b(M){if(--M.usedTimes===0){const E=l.indexOf(M);l[E]=l[l.length-1],l.pop(),M.destroy()}}function C(M){c.remove(M)}function P(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:T,releaseProgram:b,releaseShaderCache:C,programs:l,dispose:P}}function sv(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function rv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function ql(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Xl(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(f,h,d,m,x,g){let p=s[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:m,renderOrder:f.renderOrder,z:x,group:g},s[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=m,p.renderOrder=f.renderOrder,p.z=x,p.group=g),e++,p}function o(f,h,d,m,x,g){const p=a(f,h,d,m,x,g);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function c(f,h,d,m,x,g){const p=a(f,h,d,m,x,g);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function l(f,h){t.length>1&&t.sort(f||rv),n.length>1&&n.sort(h||ql),i.length>1&&i.sort(h||ql)}function u(){for(let f=e,h=s.length;f<h;f++){const d=s[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:u,sort:l}}function av(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Xl,s.set(n,[a])):i>=r.length?(a=new Xl,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function ov(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new pe};break;case"SpotLight":t={position:new w,direction:new w,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":t={color:new pe,position:new w,halfWidth:new w,halfHeight:new w};break}return s[e.id]=t,t}}}function cv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let lv=0;function uv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function hv(s,e){const t=new ov,n=cv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new w);const r=new w,a=new De,o=new De;function c(u,f){let h=0,d=0,m=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let x=0,g=0,p=0,_=0,v=0,y=0,T=0,b=0,C=0,P=0;u.sort(uv);const M=f===!0?Math.PI:1;for(let D=0,$=u.length;D<$;D++){const N=u[D],F=N.color,z=N.intensity,Y=N.distance,V=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=F.r*z*M,d+=F.g*z*M,m+=F.b*z*M;else if(N.isLightProbe)for(let X=0;X<9;X++)i.probe[X].addScaledVector(N.sh.coefficients[X],z);else if(N.isDirectionalLight){const X=t.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity*M),N.castShadow){const J=N.shadow,Q=n.get(N);Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,i.directionalShadow[x]=Q,i.directionalShadowMap[x]=V,i.directionalShadowMatrix[x]=N.shadow.matrix,y++}i.directional[x]=X,x++}else if(N.isSpotLight){const X=t.get(N);X.position.setFromMatrixPosition(N.matrixWorld),X.color.copy(F).multiplyScalar(z*M),X.distance=Y,X.coneCos=Math.cos(N.angle),X.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),X.decay=N.decay,i.spot[p]=X;const J=N.shadow;if(N.map&&(i.spotLightMap[C]=N.map,C++,J.updateMatrices(N),N.castShadow&&P++),i.spotLightMatrix[p]=J.matrix,N.castShadow){const Q=n.get(N);Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,i.spotShadow[p]=Q,i.spotShadowMap[p]=V,b++}p++}else if(N.isRectAreaLight){const X=t.get(N);X.color.copy(F).multiplyScalar(z),X.halfWidth.set(N.width*.5,0,0),X.halfHeight.set(0,N.height*.5,0),i.rectArea[_]=X,_++}else if(N.isPointLight){const X=t.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity*M),X.distance=N.distance,X.decay=N.decay,N.castShadow){const J=N.shadow,Q=n.get(N);Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,Q.shadowCameraNear=J.camera.near,Q.shadowCameraFar=J.camera.far,i.pointShadow[g]=Q,i.pointShadowMap[g]=V,i.pointShadowMatrix[g]=N.shadow.matrix,T++}i.point[g]=X,g++}else if(N.isHemisphereLight){const X=t.get(N);X.skyColor.copy(N.color).multiplyScalar(z*M),X.groundColor.copy(N.groundColor).multiplyScalar(z*M),i.hemi[v]=X,v++}}_>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=m;const E=i.hash;(E.directionalLength!==x||E.pointLength!==g||E.spotLength!==p||E.rectAreaLength!==_||E.hemiLength!==v||E.numDirectionalShadows!==y||E.numPointShadows!==T||E.numSpotShadows!==b||E.numSpotMaps!==C)&&(i.directional.length=x,i.spot.length=p,i.rectArea.length=_,i.point.length=g,i.hemi.length=v,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=b+C-P,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=P,E.directionalLength=x,E.pointLength=g,E.spotLength=p,E.rectAreaLength=_,E.hemiLength=v,E.numDirectionalShadows=y,E.numPointShadows=T,E.numSpotShadows=b,E.numSpotMaps=C,i.version=lv++)}function l(u,f){let h=0,d=0,m=0,x=0,g=0;const p=f.matrixWorldInverse;for(let _=0,v=u.length;_<v;_++){const y=u[_];if(y.isDirectionalLight){const T=i.directional[h];T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),h++}else if(y.isSpotLight){const T=i.spot[m];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),m++}else if(y.isRectAreaLight){const T=i.rectArea[x];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(p),o.identity(),a.copy(y.matrixWorld),a.premultiply(p),o.extractRotation(a),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){const T=i.point[d];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const T=i.hemi[g];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(p),g++}}}return{setup:c,setupView:l,state:i}}function Yl(s,e){const t=new hv(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(f){n.push(f)}function o(f){i.push(f)}function c(f){t.setup(n,f)}function l(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function fv(s,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let c;return o===void 0?(c=new Yl(s,e),t.set(r,[c])):a>=o.length?(c=new Yl(s,e),o.push(c)):c=o[a],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class Uc extends Tt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ih,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Dc extends Tt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const dv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pv=`uniform sampler2D shadow_pass;
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
}`;function mv(s,e,t){let n=new Aa;const i=new K,r=new K,a=new $e,o=new Uc({depthPacking:Uh}),c=new Dc,l={},u=t.maxTextureSize,f={[En]:Ct,[Ct]:En,[nn]:nn},h=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new K},radius:{value:4}},vertexShader:dv,fragmentShader:pv}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const m=new Ge;m.setAttribute("position",new Qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new yt(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pc;let p=this.type;this.render=function(T,b,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const P=s.getRenderTarget(),M=s.getActiveCubeFace(),E=s.getActiveMipmapLevel(),D=s.state;D.setBlending(Sn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const $=p!==tn&&this.type===tn,N=p===tn&&this.type!==tn;for(let F=0,z=T.length;F<z;F++){const Y=T[F],V=Y.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const X=V.getFrameExtents();if(i.multiply(X),r.copy(V.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/X.x),i.x=r.x*X.x,V.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/X.y),i.y=r.y*X.y,V.mapSize.y=r.y)),V.map===null||$===!0||N===!0){const Q=this.type!==tn?{minFilter:ut,magFilter:ut}:{};V.map!==null&&V.map.dispose(),V.map=new $t(i.x,i.y,Q),V.map.texture.name=Y.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const J=V.getViewportCount();for(let Q=0;Q<J;Q++){const he=V.getViewport(Q);a.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),D.viewport(a),V.updateMatrices(Y,Q),n=V.getFrustum(),y(b,C,V.camera,Y,this.type)}V.isPointLightShadow!==!0&&this.type===tn&&_(V,C),V.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(P,M,E)};function _(T,b){const C=e.update(x);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new $t(i.x,i.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(b,null,C,h,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(b,null,C,d,x,null)}function v(T,b,C,P){let M=null;const E=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(E!==void 0)M=E;else if(M=C.isPointLight===!0?c:o,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const D=M.uuid,$=b.uuid;let N=l[D];N===void 0&&(N={},l[D]=N);let F=N[$];F===void 0&&(F=M.clone(),N[$]=F),M=F}if(M.visible=b.visible,M.wireframe=b.wireframe,P===tn?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:f[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const D=s.properties.get(M);D.light=C}return M}function y(T,b,C,P,M){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===tn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);const $=e.update(T),N=T.material;if(Array.isArray(N)){const F=$.groups;for(let z=0,Y=F.length;z<Y;z++){const V=F[z],X=N[V.materialIndex];if(X&&X.visible){const J=v(T,X,P,M);s.renderBufferDirect(C,null,$,J,T,V)}}}else if(N.visible){const F=v(T,N,P,M);s.renderBufferDirect(C,null,$,F,T,null)}}const D=T.children;for(let $=0,N=D.length;$<N;$++)y(D[$],b,C,P,M)}}function gv(s,e,t){const n=t.isWebGL2;function i(){let I=!1;const ue=new $e;let k=null;const ae=new $e(0,0,0,0);return{setMask:function(fe){k!==fe&&!I&&(s.colorMask(fe,fe,fe,fe),k=fe)},setLocked:function(fe){I=fe},setClear:function(fe,Ze,it,ft,Zn){Zn===!0&&(fe*=ft,Ze*=ft,it*=ft),ue.set(fe,Ze,it,ft),ae.equals(ue)===!1&&(s.clearColor(fe,Ze,it,ft),ae.copy(ue))},reset:function(){I=!1,k=null,ae.set(-1,0,0,0)}}}function r(){let I=!1,ue=null,k=null,ae=null;return{setTest:function(fe){fe?_e(s.DEPTH_TEST):Ne(s.DEPTH_TEST)},setMask:function(fe){ue!==fe&&!I&&(s.depthMask(fe),ue=fe)},setFunc:function(fe){if(k!==fe){switch(fe){case ah:s.depthFunc(s.NEVER);break;case oh:s.depthFunc(s.ALWAYS);break;case ch:s.depthFunc(s.LESS);break;case da:s.depthFunc(s.LEQUAL);break;case lh:s.depthFunc(s.EQUAL);break;case uh:s.depthFunc(s.GEQUAL);break;case hh:s.depthFunc(s.GREATER);break;case fh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}k=fe}},setLocked:function(fe){I=fe},setClear:function(fe){ae!==fe&&(s.clearDepth(fe),ae=fe)},reset:function(){I=!1,ue=null,k=null,ae=null}}}function a(){let I=!1,ue=null,k=null,ae=null,fe=null,Ze=null,it=null,ft=null,Zn=null;return{setTest:function(st){I||(st?_e(s.STENCIL_TEST):Ne(s.STENCIL_TEST))},setMask:function(st){ue!==st&&!I&&(s.stencilMask(st),ue=st)},setFunc:function(st,en,Et){(k!==st||ae!==en||fe!==Et)&&(s.stencilFunc(st,en,Et),k=st,ae=en,fe=Et)},setOp:function(st,en,Et){(Ze!==st||it!==en||ft!==Et)&&(s.stencilOp(st,en,Et),Ze=st,it=en,ft=Et)},setLocked:function(st){I=st},setClear:function(st){Zn!==st&&(s.clearStencil(st),Zn=st)},reset:function(){I=!1,ue=null,k=null,ae=null,fe=null,Ze=null,it=null,ft=null,Zn=null}}}const o=new i,c=new r,l=new a,u=new WeakMap,f=new WeakMap;let h={},d={},m=new WeakMap,x=[],g=null,p=!1,_=null,v=null,y=null,T=null,b=null,C=null,P=null,M=!1,E=null,D=null,$=null,N=null,F=null;const z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,V=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(X)[1]),Y=V>=1):X.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Y=V>=2);let J=null,Q={};const he=s.getParameter(s.SCISSOR_BOX),B=s.getParameter(s.VIEWPORT),ee=new $e().fromArray(he),te=new $e().fromArray(B);function de(I,ue,k,ae){const fe=new Uint8Array(4),Ze=s.createTexture();s.bindTexture(I,Ze),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let it=0;it<k;it++)n&&(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)?s.texImage3D(ue,0,s.RGBA,1,1,ae,0,s.RGBA,s.UNSIGNED_BYTE,fe):s.texImage2D(ue+it,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,fe);return Ze}const me={};me[s.TEXTURE_2D]=de(s.TEXTURE_2D,s.TEXTURE_2D,1),me[s.TEXTURE_CUBE_MAP]=de(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(me[s.TEXTURE_2D_ARRAY]=de(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),me[s.TEXTURE_3D]=de(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),_e(s.DEPTH_TEST),c.setFunc(da),j(!1),Se(Ao),_e(s.CULL_FACE),Z(Sn);function _e(I){h[I]!==!0&&(s.enable(I),h[I]=!0)}function Ne(I){h[I]!==!1&&(s.disable(I),h[I]=!1)}function Ce(I,ue){return d[I]!==ue?(s.bindFramebuffer(I,ue),d[I]=ue,n&&(I===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=ue),I===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=ue)),!0):!1}function Ke(I,ue){let k=x,ae=!1;if(I)if(k=m.get(ue),k===void 0&&(k=[],m.set(ue,k)),I.isWebGLMultipleRenderTargets){const fe=I.texture;if(k.length!==fe.length||k[0]!==s.COLOR_ATTACHMENT0){for(let Ze=0,it=fe.length;Ze<it;Ze++)k[Ze]=s.COLOR_ATTACHMENT0+Ze;k.length=fe.length,ae=!0}}else k[0]!==s.COLOR_ATTACHMENT0&&(k[0]=s.COLOR_ATTACHMENT0,ae=!0);else k[0]!==s.BACK&&(k[0]=s.BACK,ae=!0);ae&&(t.isWebGL2?s.drawBuffers(k):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(k))}function Le(I){return g!==I?(s.useProgram(I),g=I,!0):!1}const L={[oi]:s.FUNC_ADD,[Ju]:s.FUNC_SUBTRACT,[$u]:s.FUNC_REVERSE_SUBTRACT};if(n)L[Po]=s.MIN,L[Lo]=s.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(L[Po]=I.MIN_EXT,L[Lo]=I.MAX_EXT)}const se={[Ku]:s.ZERO,[Qu]:s.ONE,[ju]:s.SRC_COLOR,[mc]:s.SRC_ALPHA,[rh]:s.SRC_ALPHA_SATURATE,[ih]:s.DST_COLOR,[th]:s.DST_ALPHA,[eh]:s.ONE_MINUS_SRC_COLOR,[gc]:s.ONE_MINUS_SRC_ALPHA,[sh]:s.ONE_MINUS_DST_COLOR,[nh]:s.ONE_MINUS_DST_ALPHA};function Z(I,ue,k,ae,fe,Ze,it,ft){if(I===Sn){p===!0&&(Ne(s.BLEND),p=!1);return}if(p===!1&&(_e(s.BLEND),p=!0),I!==Zu){if(I!==_||ft!==M){if((v!==oi||b!==oi)&&(s.blendEquation(s.FUNC_ADD),v=oi,b=oi),ft)switch(I){case pi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case wo:s.blendFunc(s.ONE,s.ONE);break;case Ro:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Co:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case pi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case wo:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ro:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Co:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}y=null,T=null,C=null,P=null,_=I,M=ft}return}fe=fe||ue,Ze=Ze||k,it=it||ae,(ue!==v||fe!==b)&&(s.blendEquationSeparate(L[ue],L[fe]),v=ue,b=fe),(k!==y||ae!==T||Ze!==C||it!==P)&&(s.blendFuncSeparate(se[k],se[ae],se[Ze],se[it]),y=k,T=ae,C=Ze,P=it),_=I,M=!1}function re(I,ue){I.side===nn?Ne(s.CULL_FACE):_e(s.CULL_FACE);let k=I.side===Ct;ue&&(k=!k),j(k),I.blending===pi&&I.transparent===!1?Z(Sn):Z(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),c.setFunc(I.depthFunc),c.setTest(I.depthTest),c.setMask(I.depthWrite),o.setMask(I.colorWrite);const ae=I.stencilWrite;l.setTest(ae),ae&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),xe(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?_e(s.SAMPLE_ALPHA_TO_COVERAGE):Ne(s.SAMPLE_ALPHA_TO_COVERAGE)}function j(I){E!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),E=I)}function Se(I){I!==qu?(_e(s.CULL_FACE),I!==D&&(I===Ao?s.cullFace(s.BACK):I===Xu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ne(s.CULL_FACE),D=I}function ge(I){I!==$&&(Y&&s.lineWidth(I),$=I)}function xe(I,ue,k){I?(_e(s.POLYGON_OFFSET_FILL),(N!==ue||F!==k)&&(s.polygonOffset(ue,k),N=ue,F=k)):Ne(s.POLYGON_OFFSET_FILL)}function Ue(I){I?_e(s.SCISSOR_TEST):Ne(s.SCISSOR_TEST)}function qe(I){I===void 0&&(I=s.TEXTURE0+z-1),J!==I&&(s.activeTexture(I),J=I)}function nt(I,ue,k){k===void 0&&(J===null?k=s.TEXTURE0+z-1:k=J);let ae=Q[k];ae===void 0&&(ae={type:void 0,texture:void 0},Q[k]=ae),(ae.type!==I||ae.texture!==ue)&&(J!==k&&(s.activeTexture(k),J=k),s.bindTexture(I,ue||me[I]),ae.type=I,ae.texture=ue)}function R(){const I=Q[J];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function S(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function G(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(I){ee.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),ee.copy(I))}function Me(I){te.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),te.copy(I))}function be(I,ue){let k=f.get(ue);k===void 0&&(k=new WeakMap,f.set(ue,k));let ae=k.get(I);ae===void 0&&(ae=s.getUniformBlockIndex(ue,I.name),k.set(I,ae))}function He(I,ue){const ae=f.get(ue).get(I);u.get(ue)!==ae&&(s.uniformBlockBinding(ue,ae,I.__bindingPointIndex),u.set(ue,ae))}function je(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},J=null,Q={},d={},m=new WeakMap,x=[],g=null,p=!1,_=null,v=null,y=null,T=null,b=null,C=null,P=null,M=!1,E=null,D=null,$=null,N=null,F=null,ee.set(0,0,s.canvas.width,s.canvas.height),te.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:_e,disable:Ne,bindFramebuffer:Ce,drawBuffers:Ke,useProgram:Le,setBlending:Z,setMaterial:re,setFlipSided:j,setCullFace:Se,setLineWidth:ge,setPolygonOffset:xe,setScissorTest:Ue,activeTexture:qe,bindTexture:nt,unbindTexture:R,compressedTexImage2D:S,compressedTexImage3D:G,texImage2D:Ee,texImage3D:Ae,updateUBOMapping:be,uniformBlockBinding:He,texStorage2D:le,texStorage3D:q,texSubImage2D:ne,texSubImage3D:ie,compressedTexSubImage2D:ce,compressedTexSubImage3D:Te,scissor:Re,viewport:Me,reset:je}}function xv(s,e,t,n,i,r,a){const o=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,f=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new WeakMap;let x;const g=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,S){return p?new OffscreenCanvas(R,S):ks("canvas")}function v(R,S,G,ne){let ie=1;if((R.width>ne||R.height>ne)&&(ie=ne/Math.max(R.width,R.height)),ie<1||S===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ce=S?ga:Math.floor,Te=ce(ie*R.width),le=ce(ie*R.height);x===void 0&&(x=_(Te,le));const q=G?_(Te,le):x;return q.width=Te,q.height=le,q.getContext("2d").drawImage(R,0,0,Te,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Te+"x"+le+")."),q}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function y(R){return nc(R.width)&&nc(R.height)}function T(R){return o?!1:R.wrapS!==St||R.wrapT!==St||R.minFilter!==ut&&R.minFilter!==at}function b(R,S){return R.generateMipmaps&&S&&R.minFilter!==ut&&R.minFilter!==at}function C(R){s.generateMipmap(R)}function P(R,S,G,ne,ie=!1){if(o===!1)return S;if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ce=S;return S===s.RED&&(G===s.FLOAT&&(ce=s.R32F),G===s.HALF_FLOAT&&(ce=s.R16F),G===s.UNSIGNED_BYTE&&(ce=s.R8)),S===s.RG&&(G===s.FLOAT&&(ce=s.RG32F),G===s.HALF_FLOAT&&(ce=s.RG16F),G===s.UNSIGNED_BYTE&&(ce=s.RG8)),S===s.RGBA&&(G===s.FLOAT&&(ce=s.RGBA32F),G===s.HALF_FLOAT&&(ce=s.RGBA16F),G===s.UNSIGNED_BYTE&&(ce=ne===Fe&&ie===!1?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(ce=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(ce=s.RGB5_A1)),(ce===s.R16F||ce===s.R32F||ce===s.RG16F||ce===s.RG32F||ce===s.RGBA16F||ce===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function M(R,S,G){return b(R,G)===!0||R.isFramebufferTexture&&R.minFilter!==ut&&R.minFilter!==at?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function E(R){return R===ut||R===pa||R===As?s.NEAREST:s.LINEAR}function D(R){const S=R.target;S.removeEventListener("dispose",D),N(S),S.isVideoTexture&&m.delete(S)}function $(R){const S=R.target;S.removeEventListener("dispose",$),z(S)}function N(R){const S=n.get(R);if(S.__webglInit===void 0)return;const G=R.source,ne=g.get(G);if(ne){const ie=ne[S.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&F(R),Object.keys(ne).length===0&&g.delete(G)}n.remove(R)}function F(R){const S=n.get(R);s.deleteTexture(S.__webglTexture);const G=R.source,ne=g.get(G);delete ne[S.__cacheKey],a.memory.textures--}function z(R){const S=R.texture,G=n.get(R),ne=n.get(S);if(ne.__webglTexture!==void 0&&(s.deleteTexture(ne.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)s.deleteFramebuffer(G.__webglFramebuffer[ie]),G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer[ie]);else{if(s.deleteFramebuffer(G.__webglFramebuffer),G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&s.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let ie=0;ie<G.__webglColorRenderbuffer.length;ie++)G.__webglColorRenderbuffer[ie]&&s.deleteRenderbuffer(G.__webglColorRenderbuffer[ie]);G.__webglDepthRenderbuffer&&s.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ie=0,ce=S.length;ie<ce;ie++){const Te=n.get(S[ie]);Te.__webglTexture&&(s.deleteTexture(Te.__webglTexture),a.memory.textures--),n.remove(S[ie])}n.remove(S),n.remove(R)}let Y=0;function V(){Y=0}function X(){const R=Y;return R>=c&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+c),Y+=1,R}function J(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function Q(R,S){const G=n.get(R);if(R.isVideoTexture&&qe(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){const ne=R.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(G,R,S);return}}t.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+S)}function he(R,S){const G=n.get(R);if(R.version>0&&G.__version!==R.version){Ce(G,R,S);return}t.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+S)}function B(R,S){const G=n.get(R);if(R.version>0&&G.__version!==R.version){Ce(G,R,S);return}t.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+S)}function ee(R,S){const G=n.get(R);if(R.version>0&&G.__version!==R.version){Ke(G,R,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+S)}const te={[Us]:s.REPEAT,[St]:s.CLAMP_TO_EDGE,[Ds]:s.MIRRORED_REPEAT},de={[ut]:s.NEAREST,[pa]:s.NEAREST_MIPMAP_NEAREST,[As]:s.NEAREST_MIPMAP_LINEAR,[at]:s.LINEAR,[xc]:s.LINEAR_MIPMAP_NEAREST,[Gn]:s.LINEAR_MIPMAP_LINEAR},me={[Oh]:s.NEVER,[Hh]:s.ALWAYS,[Fh]:s.LESS,[Bh]:s.LEQUAL,[zh]:s.EQUAL,[Gh]:s.GEQUAL,[kh]:s.GREATER,[Vh]:s.NOTEQUAL};function _e(R,S,G){if(G?(s.texParameteri(R,s.TEXTURE_WRAP_S,te[S.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,te[S.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,te[S.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,de[S.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,de[S.minFilter])):(s.texParameteri(R,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(R,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(S.wrapS!==St||S.wrapT!==St)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(R,s.TEXTURE_MAG_FILTER,E(S.magFilter)),s.texParameteri(R,s.TEXTURE_MIN_FILTER,E(S.minFilter)),S.minFilter!==ut&&S.minFilter!==at&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,me[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===ut||S.minFilter!==As&&S.minFilter!==Gn||S.type===sn&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===_i&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(s.texParameterf(R,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function Ne(R,S){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",D));const ne=S.source;let ie=g.get(ne);ie===void 0&&(ie={},g.set(ne,ie));const ce=J(S);if(ce!==R.__cacheKey){ie[ce]===void 0&&(ie[ce]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,G=!0),ie[ce].usedTimes++;const Te=ie[R.__cacheKey];Te!==void 0&&(ie[R.__cacheKey].usedTimes--,Te.usedTimes===0&&F(S)),R.__cacheKey=ce,R.__webglTexture=ie[ce].texture}return G}function Ce(R,S,G){let ne=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ne=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ne=s.TEXTURE_3D);const ie=Ne(R,S),ce=S.source;t.bindTexture(ne,R.__webglTexture,s.TEXTURE0+G);const Te=n.get(ce);if(ce.version!==Te.__version||ie===!0){t.activeTexture(s.TEXTURE0+G),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const le=T(S)&&y(S.image)===!1;let q=v(S.image,le,!1,u);q=nt(S,q);const Ee=y(q)||o,Ae=r.convert(S.format,S.colorSpace);let Re=r.convert(S.type),Me=P(S.internalFormat,Ae,Re,S.colorSpace);_e(ne,S,Ee);let be;const He=S.mipmaps,je=o&&S.isVideoTexture!==!0,I=Te.__version===void 0||ie===!0,ue=M(S,q,Ee);if(S.isDepthTexture)Me=s.DEPTH_COMPONENT,o?S.type===sn?Me=s.DEPTH_COMPONENT32F:S.type===bn?Me=s.DEPTH_COMPONENT24:S.type===On?Me=s.DEPTH24_STENCIL8:Me=s.DEPTH_COMPONENT16:S.type===sn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Fn&&Me===s.DEPTH_COMPONENT&&S.type!==Ma&&S.type!==bn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=bn,Re=r.convert(S.type)),S.format===yi&&Me===s.DEPTH_COMPONENT&&(Me=s.DEPTH_STENCIL,S.type!==On&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=On,Re=r.convert(S.type))),I&&(je?t.texStorage2D(s.TEXTURE_2D,1,Me,q.width,q.height):t.texImage2D(s.TEXTURE_2D,0,Me,q.width,q.height,0,Ae,Re,null));else if(S.isDataTexture)if(He.length>0&&Ee){je&&I&&t.texStorage2D(s.TEXTURE_2D,ue,Me,He[0].width,He[0].height);for(let k=0,ae=He.length;k<ae;k++)be=He[k],je?t.texSubImage2D(s.TEXTURE_2D,k,0,0,be.width,be.height,Ae,Re,be.data):t.texImage2D(s.TEXTURE_2D,k,Me,be.width,be.height,0,Ae,Re,be.data);S.generateMipmaps=!1}else je?(I&&t.texStorage2D(s.TEXTURE_2D,ue,Me,q.width,q.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,q.width,q.height,Ae,Re,q.data)):t.texImage2D(s.TEXTURE_2D,0,Me,q.width,q.height,0,Ae,Re,q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){je&&I&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ue,Me,He[0].width,He[0].height,q.depth);for(let k=0,ae=He.length;k<ae;k++)be=He[k],S.format!==Ut?Ae!==null?je?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,k,0,0,0,be.width,be.height,q.depth,Ae,be.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,k,Me,be.width,be.height,q.depth,0,be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage3D(s.TEXTURE_2D_ARRAY,k,0,0,0,be.width,be.height,q.depth,Ae,Re,be.data):t.texImage3D(s.TEXTURE_2D_ARRAY,k,Me,be.width,be.height,q.depth,0,Ae,Re,be.data)}else{je&&I&&t.texStorage2D(s.TEXTURE_2D,ue,Me,He[0].width,He[0].height);for(let k=0,ae=He.length;k<ae;k++)be=He[k],S.format!==Ut?Ae!==null?je?t.compressedTexSubImage2D(s.TEXTURE_2D,k,0,0,be.width,be.height,Ae,be.data):t.compressedTexImage2D(s.TEXTURE_2D,k,Me,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage2D(s.TEXTURE_2D,k,0,0,be.width,be.height,Ae,Re,be.data):t.texImage2D(s.TEXTURE_2D,k,Me,be.width,be.height,0,Ae,Re,be.data)}else if(S.isDataArrayTexture)je?(I&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ue,Me,q.width,q.height,q.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,Ae,Re,q.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Me,q.width,q.height,q.depth,0,Ae,Re,q.data);else if(S.isData3DTexture)je?(I&&t.texStorage3D(s.TEXTURE_3D,ue,Me,q.width,q.height,q.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,Ae,Re,q.data)):t.texImage3D(s.TEXTURE_3D,0,Me,q.width,q.height,q.depth,0,Ae,Re,q.data);else if(S.isFramebufferTexture){if(I)if(je)t.texStorage2D(s.TEXTURE_2D,ue,Me,q.width,q.height);else{let k=q.width,ae=q.height;for(let fe=0;fe<ue;fe++)t.texImage2D(s.TEXTURE_2D,fe,Me,k,ae,0,Ae,Re,null),k>>=1,ae>>=1}}else if(He.length>0&&Ee){je&&I&&t.texStorage2D(s.TEXTURE_2D,ue,Me,He[0].width,He[0].height);for(let k=0,ae=He.length;k<ae;k++)be=He[k],je?t.texSubImage2D(s.TEXTURE_2D,k,0,0,Ae,Re,be):t.texImage2D(s.TEXTURE_2D,k,Me,Ae,Re,be);S.generateMipmaps=!1}else je?(I&&t.texStorage2D(s.TEXTURE_2D,ue,Me,q.width,q.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ae,Re,q)):t.texImage2D(s.TEXTURE_2D,0,Me,Ae,Re,q);b(S,Ee)&&C(ne),Te.__version=ce.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Ke(R,S,G){if(S.image.length!==6)return;const ne=Ne(R,S),ie=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+G);const ce=n.get(ie);if(ie.version!==ce.__version||ne===!0){t.activeTexture(s.TEXTURE0+G),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const Te=S.isCompressedTexture||S.image[0].isCompressedTexture,le=S.image[0]&&S.image[0].isDataTexture,q=[];for(let k=0;k<6;k++)!Te&&!le?q[k]=v(S.image[k],!1,!0,l):q[k]=le?S.image[k].image:S.image[k],q[k]=nt(S,q[k]);const Ee=q[0],Ae=y(Ee)||o,Re=r.convert(S.format,S.colorSpace),Me=r.convert(S.type),be=P(S.internalFormat,Re,Me,S.colorSpace),He=o&&S.isVideoTexture!==!0,je=ce.__version===void 0||ne===!0;let I=M(S,Ee,Ae);_e(s.TEXTURE_CUBE_MAP,S,Ae);let ue;if(Te){He&&je&&t.texStorage2D(s.TEXTURE_CUBE_MAP,I,be,Ee.width,Ee.height);for(let k=0;k<6;k++){ue=q[k].mipmaps;for(let ae=0;ae<ue.length;ae++){const fe=ue[ae];S.format!==Ut?Re!==null?He?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,ae,0,0,fe.width,fe.height,Re,fe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,ae,be,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,ae,0,0,fe.width,fe.height,Re,Me,fe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,ae,be,fe.width,fe.height,0,Re,Me,fe.data)}}}else{ue=S.mipmaps,He&&je&&(ue.length>0&&I++,t.texStorage2D(s.TEXTURE_CUBE_MAP,I,be,q[0].width,q[0].height));for(let k=0;k<6;k++)if(le){He?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,q[k].width,q[k].height,Re,Me,q[k].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,be,q[k].width,q[k].height,0,Re,Me,q[k].data);for(let ae=0;ae<ue.length;ae++){const Ze=ue[ae].image[k].image;He?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,ae+1,0,0,Ze.width,Ze.height,Re,Me,Ze.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,ae+1,be,Ze.width,Ze.height,0,Re,Me,Ze.data)}}else{He?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,Re,Me,q[k]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,be,Re,Me,q[k]);for(let ae=0;ae<ue.length;ae++){const fe=ue[ae];He?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,ae+1,0,0,Re,Me,fe.image[k]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,ae+1,be,Re,Me,fe.image[k])}}}b(S,Ae)&&C(s.TEXTURE_CUBE_MAP),ce.__version=ie.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Le(R,S,G,ne,ie){const ce=r.convert(G.format,G.colorSpace),Te=r.convert(G.type),le=P(G.internalFormat,ce,Te,G.colorSpace);n.get(S).__hasExternalTextures||(ie===s.TEXTURE_3D||ie===s.TEXTURE_2D_ARRAY?t.texImage3D(ie,0,le,S.width,S.height,S.depth,0,ce,Te,null):t.texImage2D(ie,0,le,S.width,S.height,0,ce,Te,null)),t.bindFramebuffer(s.FRAMEBUFFER,R),Ue(S)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ne,ie,n.get(G).__webglTexture,0,xe(S)):(ie===s.TEXTURE_2D||ie>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ne,ie,n.get(G).__webglTexture,0),t.bindFramebuffer(s.FRAMEBUFFER,null)}function L(R,S,G){if(s.bindRenderbuffer(s.RENDERBUFFER,R),S.depthBuffer&&!S.stencilBuffer){let ne=s.DEPTH_COMPONENT16;if(G||Ue(S)){const ie=S.depthTexture;ie&&ie.isDepthTexture&&(ie.type===sn?ne=s.DEPTH_COMPONENT32F:ie.type===bn&&(ne=s.DEPTH_COMPONENT24));const ce=xe(S);Ue(S)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ce,ne,S.width,S.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ce,ne,S.width,S.height)}else s.renderbufferStorage(s.RENDERBUFFER,ne,S.width,S.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,R)}else if(S.depthBuffer&&S.stencilBuffer){const ne=xe(S);G&&Ue(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ne,s.DEPTH24_STENCIL8,S.width,S.height):Ue(S)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ne,s.DEPTH24_STENCIL8,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,R)}else{const ne=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ie=0;ie<ne.length;ie++){const ce=ne[ie],Te=r.convert(ce.format,ce.colorSpace),le=r.convert(ce.type),q=P(ce.internalFormat,Te,le,ce.colorSpace),Ee=xe(S);G&&Ue(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ee,q,S.width,S.height):Ue(S)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ee,q,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,q,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function se(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Q(S.depthTexture,0);const ne=n.get(S.depthTexture).__webglTexture,ie=xe(S);if(S.depthTexture.format===Fn)Ue(S)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ne,0,ie):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ne,0);else if(S.depthTexture.format===yi)Ue(S)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ne,0,ie):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Z(R){const S=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");se(S.__webglFramebuffer,R)}else if(G){S.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[ne]),S.__webglDepthbuffer[ne]=s.createRenderbuffer(),L(S.__webglDepthbuffer[ne],R,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=s.createRenderbuffer(),L(S.__webglDepthbuffer,R,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function re(R,S,G){const ne=n.get(R);S!==void 0&&Le(ne.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D),G!==void 0&&Z(R)}function j(R){const S=R.texture,G=n.get(R),ne=n.get(S);R.addEventListener("dispose",$),R.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=s.createTexture()),ne.__version=S.version,a.memory.textures++);const ie=R.isWebGLCubeRenderTarget===!0,ce=R.isWebGLMultipleRenderTargets===!0,Te=y(R)||o;if(ie){G.__webglFramebuffer=[];for(let le=0;le<6;le++)G.__webglFramebuffer[le]=s.createFramebuffer()}else{if(G.__webglFramebuffer=s.createFramebuffer(),ce)if(i.drawBuffers){const le=R.texture;for(let q=0,Ee=le.length;q<Ee;q++){const Ae=n.get(le[q]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&Ue(R)===!1){const le=ce?S:[S];G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let q=0;q<le.length;q++){const Ee=le[q];G.__webglColorRenderbuffer[q]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[q]);const Ae=r.convert(Ee.format,Ee.colorSpace),Re=r.convert(Ee.type),Me=P(Ee.internalFormat,Ae,Re,Ee.colorSpace,R.isXRRenderTarget===!0),be=xe(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,be,Me,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+q,s.RENDERBUFFER,G.__webglColorRenderbuffer[q])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),L(G.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ie){t.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture),_e(s.TEXTURE_CUBE_MAP,S,Te);for(let le=0;le<6;le++)Le(G.__webglFramebuffer[le],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le);b(S,Te)&&C(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){const le=R.texture;for(let q=0,Ee=le.length;q<Ee;q++){const Ae=le[q],Re=n.get(Ae);t.bindTexture(s.TEXTURE_2D,Re.__webglTexture),_e(s.TEXTURE_2D,Ae,Te),Le(G.__webglFramebuffer,R,Ae,s.COLOR_ATTACHMENT0+q,s.TEXTURE_2D),b(Ae,Te)&&C(s.TEXTURE_2D)}t.unbindTexture()}else{let le=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?le=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,ne.__webglTexture),_e(le,S,Te),Le(G.__webglFramebuffer,R,S,s.COLOR_ATTACHMENT0,le),b(S,Te)&&C(le),t.unbindTexture()}R.depthBuffer&&Z(R)}function Se(R){const S=y(R)||o,G=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ne=0,ie=G.length;ne<ie;ne++){const ce=G[ne];if(b(ce,S)){const Te=R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,le=n.get(ce).__webglTexture;t.bindTexture(Te,le),C(Te),t.unbindTexture()}}}function ge(R){if(o&&R.samples>0&&Ue(R)===!1){const S=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],G=R.width,ne=R.height;let ie=s.COLOR_BUFFER_BIT;const ce=[],Te=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=n.get(R),q=R.isWebGLMultipleRenderTargets===!0;if(q)for(let Ee=0;Ee<S.length;Ee++)t.bindFramebuffer(s.FRAMEBUFFER,le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let Ee=0;Ee<S.length;Ee++){ce.push(s.COLOR_ATTACHMENT0+Ee),R.depthBuffer&&ce.push(Te);const Ae=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(Ae===!1&&(R.depthBuffer&&(ie|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ie|=s.STENCIL_BUFFER_BIT)),q&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,le.__webglColorRenderbuffer[Ee]),Ae===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Te]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Te])),q){const Re=n.get(S[Ee]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Re,0)}s.blitFramebuffer(0,0,G,ne,0,0,G,ne,ie,s.NEAREST),d&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),q)for(let Ee=0;Ee<S.length;Ee++){t.bindFramebuffer(s.FRAMEBUFFER,le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,le.__webglColorRenderbuffer[Ee]);const Ae=n.get(S[Ee]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,Ae,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function xe(R){return Math.min(f,R.samples)}function Ue(R){const S=n.get(R);return o&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function qe(R){const S=a.render.frame;m.get(R)!==S&&(m.set(R,S),R.update())}function nt(R,S){const G=R.colorSpace,ne=R.format,ie=R.type;return R.isCompressedTexture===!0||R.format===ma||G!==Jt&&G!==Bn&&(G===Fe?o===!1?e.has("EXT_sRGB")===!0&&ne===Ut?(R.format=ma,R.minFilter=at,R.generateMipmaps=!1):S=Rc.sRGBToLinear(S):(ne!==Ut||ie!==Tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}this.allocateTextureUnit=X,this.resetTextureUnits=V,this.setTexture2D=Q,this.setTexture2DArray=he,this.setTexture3D=B,this.setTextureCube=ee,this.rebindTextures=re,this.setupRenderTarget=j,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=Z,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=Ue}function nf(s,e,t){const n=t.isWebGL2;function i(r,a=Bn){let o;if(r===Tn)return s.UNSIGNED_BYTE;if(r===_c)return s.UNSIGNED_SHORT_4_4_4_4;if(r===yc)return s.UNSIGNED_SHORT_5_5_5_1;if(r===yh)return s.BYTE;if(r===Mh)return s.SHORT;if(r===Ma)return s.UNSIGNED_SHORT;if(r===vc)return s.INT;if(r===bn)return s.UNSIGNED_INT;if(r===sn)return s.FLOAT;if(r===_i)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===bh)return s.ALPHA;if(r===Ut)return s.RGBA;if(r===Sh)return s.LUMINANCE;if(r===Th)return s.LUMINANCE_ALPHA;if(r===Fn)return s.DEPTH_COMPONENT;if(r===yi)return s.DEPTH_STENCIL;if(r===ma)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Eh)return s.RED;if(r===Mc)return s.RED_INTEGER;if(r===Ah)return s.RG;if(r===bc)return s.RG_INTEGER;if(r===Sc)return s.RGBA_INTEGER;if(r===ra||r===aa||r===oa||r===ca)if(a===Fe)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===ra)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===aa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===oa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ca)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===ra)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===aa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===oa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ca)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Io||r===Uo||r===Do||r===No)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Io)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Uo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Do)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===No)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===wh)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Oo||r===Fo)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Oo)return a===Fe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Fo)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===zo||r===Bo||r===ko||r===Vo||r===Go||r===Ho||r===Wo||r===qo||r===Xo||r===Yo||r===Zo||r===Jo||r===$o||r===Ko)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===zo)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Bo)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ko)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Vo)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Go)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ho)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Wo)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===qo)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Xo)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Yo)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Zo)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Jo)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===$o)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ko)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===la)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===la)return a===Fe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===Rh||r===Qo||r===jo||r===ec)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===la)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Qo)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===jo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ec)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===On?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class sf extends _t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Qi extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vv={type:"move"};class uo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const x of e.hand.values()){const g=t.getJointPose(x,n),p=this._getHandJoint(l,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,m=.005;l.inputState.pinching&&h>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vv)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Qi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class rf extends ht{constructor(e,t,n,i,r,a,o,c,l,u){if(u=u!==void 0?u:Fn,u!==Fn&&u!==yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Fn&&(n=bn),n===void 0&&u===yi&&(n=On),super(null,i,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:ut,this.minFilter=c!==void 0?c:ut,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class _v extends wn{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,m=null;const x=t.getContextAttributes();let g=null,p=null;const _=[],v=[];let y=null;const T=new _t;T.layers.enable(1),T.viewport=new $e;const b=new _t;b.layers.enable(2),b.viewport=new $e;const C=[T,b],P=new sf;P.layers.enable(1),P.layers.enable(2);let M=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(B){y=B},this.getController=function(B){let ee=_[B];return ee===void 0&&(ee=new uo,_[B]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(B){let ee=_[B];return ee===void 0&&(ee=new uo,_[B]=ee),ee.getGripSpace()},this.getHand=function(B){let ee=_[B];return ee===void 0&&(ee=new uo,_[B]=ee),ee.getHandSpace()};function D(B){const ee=v.indexOf(B.inputSource);if(ee===-1)return;const te=_[ee];te!==void 0&&(te.update(B.inputSource,B.frame,l||a),te.dispatchEvent({type:B.type,data:B.inputSource}))}function $(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",N);for(let B=0;B<_.length;B++){const ee=v[B];ee!==null&&(v[B]=null,_[B].disconnect(ee))}M=null,E=null,e.setRenderTarget(g),d=null,h=null,f=null,i=null,p=null,he.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",$),i.addEventListener("inputsourceschange",N),x.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ee={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,ee),i.updateRenderState({baseLayer:d}),p=new $t(d.framebufferWidth,d.framebufferHeight,{format:Ut,type:Tn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ee=null,te=null,de=null;x.depth&&(de=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=x.stencil?yi:Fn,te=x.stencil?On:bn);const me={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};f=new XRWebGLBinding(i,t),h=f.createProjectionLayer(me),i.updateRenderState({layers:[h]}),p=new $t(h.textureWidth,h.textureHeight,{format:Ut,type:Tn,depthTexture:new rf(h.textureWidth,h.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const _e=e.properties.get(p);_e.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),he.setContext(i),he.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function N(B){for(let ee=0;ee<B.removed.length;ee++){const te=B.removed[ee],de=v.indexOf(te);de>=0&&(v[de]=null,_[de].disconnect(te))}for(let ee=0;ee<B.added.length;ee++){const te=B.added[ee];let de=v.indexOf(te);if(de===-1){for(let _e=0;_e<_.length;_e++)if(_e>=v.length){v.push(te),de=_e;break}else if(v[_e]===null){v[_e]=te,de=_e;break}if(de===-1)break}const me=_[de];me&&me.connect(te)}}const F=new w,z=new w;function Y(B,ee,te){F.setFromMatrixPosition(ee.matrixWorld),z.setFromMatrixPosition(te.matrixWorld);const de=F.distanceTo(z),me=ee.projectionMatrix.elements,_e=te.projectionMatrix.elements,Ne=me[14]/(me[10]-1),Ce=me[14]/(me[10]+1),Ke=(me[9]+1)/me[5],Le=(me[9]-1)/me[5],L=(me[8]-1)/me[0],se=(_e[8]+1)/_e[0],Z=Ne*L,re=Ne*se,j=de/(-L+se),Se=j*-L;ee.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Se),B.translateZ(j),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const ge=Ne+j,xe=Ce+j,Ue=Z-Se,qe=re+(de-Se),nt=Ke*Ce/xe*ge,R=Le*Ce/xe*ge;B.projectionMatrix.makePerspective(Ue,qe,nt,R,ge,xe),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function V(B,ee){ee===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(ee.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCameraXR=function(B){if(i===null)return B;y&&(B=y),P.near=b.near=T.near=B.near,P.far=b.far=T.far=B.far,(M!==P.near||E!==P.far)&&(i.updateRenderState({depthNear:P.near,depthFar:P.far}),M=P.near,E=P.far);const ee=B.parent,te=P.cameras;V(P,ee);for(let de=0;de<te.length;de++)V(te[de],ee);return te.length===2?Y(P,T,b):P.projectionMatrix.copy(T.projectionMatrix),y&&X(P,ee),P};function X(B,ee){const te=y;ee===null?te.matrix.copy(B.matrixWorld):(te.matrix.copy(ee.matrixWorld),te.matrix.invert(),te.matrix.multiply(B.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0);const de=te.children;for(let me=0,_e=de.length;me<_e;me++)de[me].updateMatrixWorld(!0);te.projectionMatrix.copy(B.projectionMatrix),te.projectionMatrixInverse.copy(B.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=ts*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(B){c=B,h!==null&&(h.fixedFoveation=B),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=B)};let J=null;function Q(B,ee){if(u=ee.getViewerPose(l||a),m=ee,u!==null){const te=u.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let de=!1;te.length!==P.cameras.length&&(P.cameras.length=0,de=!0);for(let me=0;me<te.length;me++){const _e=te[me];let Ne=null;if(d!==null)Ne=d.getViewport(_e);else{const Ke=f.getViewSubImage(h,_e);Ne=Ke.viewport,me===0&&(e.setRenderTargetTextures(p,Ke.colorTexture,h.ignoreDepthValues?void 0:Ke.depthStencilTexture),e.setRenderTarget(p))}let Ce=C[me];Ce===void 0&&(Ce=new _t,Ce.layers.enable(me),Ce.viewport=new $e,C[me]=Ce),Ce.matrix.fromArray(_e.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(_e.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),me===0&&(P.matrix.copy(Ce.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),de===!0&&P.cameras.push(Ce)}}for(let te=0;te<_.length;te++){const de=v[te],me=_[te];de!==null&&me!==void 0&&me.update(de,ee,l||a)}J&&J(B,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),m=null}const he=new Kh;he.setAnimationLoop(Q),this.setAnimationLoop=function(B){J=B},this.dispose=function(){}}}function yv(s,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Yh(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,_,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),f(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p)):p.isMeshStandardMaterial?(r(g,p),h(g,p),p.isMeshPhysicalMaterial&&d(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,_,v):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ct&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ct&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(g.envMap.value=_,g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;const v=s.useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,_,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*_,g.scale.value=v*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),e.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,_){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ct&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){const _=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Mv(s,e,t,n){let i={},r={},a=[];const o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(_,v){const y=v.program;n.uniformBlockBinding(_,y)}function l(_,v){let y=i[_.id];y===void 0&&(m(_),y=u(_),i[_.id]=y,_.addEventListener("dispose",g));const T=v.program;n.updateUBOMapping(_,T);const b=e.render.frame;r[_.id]!==b&&(h(_),r[_.id]=b)}function u(_){const v=f();_.__bindingPointIndex=v;const y=s.createBuffer(),T=_.__size,b=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,T,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,y),y}function f(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const v=i[_.id],y=_.uniforms,T=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let b=0,C=y.length;b<C;b++){const P=y[b];if(d(P,b,T)===!0){const M=P.__offset,E=Array.isArray(P.value)?P.value:[P.value];let D=0;for(let $=0;$<E.length;$++){const N=E[$],F=x(N);typeof N=="number"?(P.__data[0]=N,s.bufferSubData(s.UNIFORM_BUFFER,M+D,P.__data)):N.isMatrix3?(P.__data[0]=N.elements[0],P.__data[1]=N.elements[1],P.__data[2]=N.elements[2],P.__data[3]=N.elements[0],P.__data[4]=N.elements[3],P.__data[5]=N.elements[4],P.__data[6]=N.elements[5],P.__data[7]=N.elements[0],P.__data[8]=N.elements[6],P.__data[9]=N.elements[7],P.__data[10]=N.elements[8],P.__data[11]=N.elements[0]):(N.toArray(P.__data,D),D+=F.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,M,P.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(_,v,y){const T=_.value;if(y[v]===void 0){if(typeof T=="number")y[v]=T;else{const b=Array.isArray(T)?T:[T],C=[];for(let P=0;P<b.length;P++)C.push(b[P].clone());y[v]=C}return!0}else if(typeof T=="number"){if(y[v]!==T)return y[v]=T,!0}else{const b=Array.isArray(y[v])?y[v]:[y[v]],C=Array.isArray(T)?T:[T];for(let P=0;P<b.length;P++){const M=b[P];if(M.equals(C[P])===!1)return M.copy(C[P]),!0}}return!1}function m(_){const v=_.uniforms;let y=0;const T=16;let b=0;for(let C=0,P=v.length;C<P;C++){const M=v[C],E={boundary:0,storage:0},D=Array.isArray(M.value)?M.value:[M.value];for(let $=0,N=D.length;$<N;$++){const F=D[$],z=x(F);E.boundary+=z.boundary,E.storage+=z.storage}if(M.__data=new Float32Array(E.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=y,C>0){b=y%T;const $=T-b;b!==0&&$-E.boundary<0&&(y+=T-b,M.__offset=y)}y+=E.storage}return b=y%T,b>0&&(y+=T-b),_.__size=y,_.__cache={},this}function x(_){const v={boundary:0,storage:0};return typeof _=="number"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function g(_){const v=_.target;v.removeEventListener("dispose",g);const y=a.indexOf(v.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(const _ in i)s.deleteBuffer(i[_]);a=[],i={},r={}}return{bind:c,update:l,dispose:p}}function bv(){const s=ks("canvas");return s.style.display="block",s}class af{constructor(e={}){const{canvas:t=bv(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=a;const d=new Uint32Array(4),m=new Int32Array(4);let x=null,g=null;const p=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Fe,this.useLegacyLights=!0,this.toneMapping=an,this.toneMappingExposure=1;const v=this;let y=!1,T=0,b=0,C=null,P=-1,M=null;const E=new $e,D=new $e;let $=null;const N=new pe(0);let F=0,z=t.width,Y=t.height,V=1,X=null,J=null;const Q=new $e(0,0,z,Y),he=new $e(0,0,z,Y);let B=!1;const ee=new Aa;let te=!1,de=!1,me=null;const _e=new De,Ne=new K,Ce=new w,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Le(){return C===null?V:1}let L=n;function se(A,O){for(let H=0;H<A.length;H++){const U=A[H],W=t.getContext(U,O);if(W!==null)return W}return null}try{const A={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_a}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",k,!1),t.addEventListener("webglcontextcreationerror",ae,!1),L===null){const O=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&O.shift(),L=se(O,A),L===null)throw se(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}L instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Z,re,j,Se,ge,xe,Ue,qe,nt,R,S,G,ne,ie,ce,Te,le,q,Ee,Ae,Re,Me,be,He;function je(){Z=new zg(L),re=new Ig(L,Z,e),Z.init(re),Me=new nf(L,Z,re),j=new gv(L,Z,re),Se=new Vg(L),ge=new sv,xe=new xv(L,Z,j,ge,re,Me,Se),Ue=new Dg(v),qe=new Fg(v),nt=new jp(L,re),be=new Pg(L,Z,nt,re),R=new Bg(L,nt,Se,be),S=new qg(L,R,nt,Se),Ee=new Wg(L,re,xe),Te=new Ug(ge),G=new iv(v,Ue,qe,Z,re,be,Te),ne=new yv(v,ge),ie=new av,ce=new fv(Z,re),q=new Cg(v,Ue,qe,j,S,h,c),le=new mv(v,S,re),He=new Mv(L,Se,re,j),Ae=new Lg(L,Z,Se,re),Re=new kg(L,Z,Se,re),Se.programs=G.programs,v.capabilities=re,v.extensions=Z,v.properties=ge,v.renderLists=ie,v.shadowMap=le,v.state=j,v.info=Se}je();const I=new _v(v,L);this.xr=I,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const A=Z.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Z.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(A){A!==void 0&&(V=A,this.setSize(z,Y,!1))},this.getSize=function(A){return A.set(z,Y)},this.setSize=function(A,O,H=!0){if(I.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=A,Y=O,t.width=Math.floor(A*V),t.height=Math.floor(O*V),H===!0&&(t.style.width=A+"px",t.style.height=O+"px"),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(z*V,Y*V).floor()},this.setDrawingBufferSize=function(A,O,H){z=A,Y=O,V=H,t.width=Math.floor(A*H),t.height=Math.floor(O*H),this.setViewport(0,0,A,O)},this.getCurrentViewport=function(A){return A.copy(E)},this.getViewport=function(A){return A.copy(Q)},this.setViewport=function(A,O,H,U){A.isVector4?Q.set(A.x,A.y,A.z,A.w):Q.set(A,O,H,U),j.viewport(E.copy(Q).multiplyScalar(V).floor())},this.getScissor=function(A){return A.copy(he)},this.setScissor=function(A,O,H,U){A.isVector4?he.set(A.x,A.y,A.z,A.w):he.set(A,O,H,U),j.scissor(D.copy(he).multiplyScalar(V).floor())},this.getScissorTest=function(){return B},this.setScissorTest=function(A){j.setScissorTest(B=A)},this.setOpaqueSort=function(A){X=A},this.setTransparentSort=function(A){J=A},this.getClearColor=function(A){return A.copy(q.getClearColor())},this.setClearColor=function(){q.setClearColor.apply(q,arguments)},this.getClearAlpha=function(){return q.getClearAlpha()},this.setClearAlpha=function(){q.setClearAlpha.apply(q,arguments)},this.clear=function(A=!0,O=!0,H=!0){let U=0;if(A){let W=!1;if(C!==null){const ve=C.texture.format;W=ve===Sc||ve===bc||ve===Mc}if(W){const ve=C.texture.type,we=ve===Tn||ve===bn||ve===Ma||ve===On||ve===_c||ve===yc,Pe=q.getClearColor(),Ie=q.getClearAlpha(),We=Pe.r,Oe=Pe.g,ze=Pe.b,et=ge.get(C).__webglFramebuffer;we?(d[0]=We,d[1]=Oe,d[2]=ze,d[3]=Ie,L.clearBufferuiv(L.COLOR,et,d)):(m[0]=We,m[1]=Oe,m[2]=ze,m[3]=Ie,L.clearBufferiv(L.COLOR,et,m))}else U|=L.COLOR_BUFFER_BIT}O&&(U|=L.DEPTH_BUFFER_BIT),H&&(U|=L.STENCIL_BUFFER_BIT),L.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",k,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),ie.dispose(),ce.dispose(),ge.dispose(),Ue.dispose(),qe.dispose(),S.dispose(),be.dispose(),He.dispose(),G.dispose(),I.dispose(),I.removeEventListener("sessionstart",st),I.removeEventListener("sessionend",en),me&&(me.dispose(),me=null),Et.stop()};function ue(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const A=Se.autoReset,O=le.enabled,H=le.autoUpdate,U=le.needsUpdate,W=le.type;je(),Se.autoReset=A,le.enabled=O,le.autoUpdate=H,le.needsUpdate=U,le.type=W}function ae(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function fe(A){const O=A.target;O.removeEventListener("dispose",fe),Ze(O)}function Ze(A){it(A),ge.remove(A)}function it(A){const O=ge.get(A).programs;O!==void 0&&(O.forEach(function(H){G.releaseProgram(H)}),A.isShaderMaterial&&G.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,H,U,W,ve){O===null&&(O=Ke);const we=W.isMesh&&W.matrixWorld.determinant()<0,Pe=xd(A,O,H,U,W);j.setMaterial(U,we);let Ie=H.index,We=1;U.wireframe===!0&&(Ie=R.getWireframeAttribute(H),We=2);const Oe=H.drawRange,ze=H.attributes.position;let et=Oe.start*We,ct=(Oe.start+Oe.count)*We;ve!==null&&(et=Math.max(et,ve.start*We),ct=Math.min(ct,(ve.start+ve.count)*We)),Ie!==null?(et=Math.max(et,0),ct=Math.min(ct,Ie.count)):ze!=null&&(et=Math.max(et,0),ct=Math.min(ct,ze.count));const Wt=ct-et;if(Wt<0||Wt===1/0)return;be.setup(W,U,Pe,H,Ie);let hn,dt=Ae;if(Ie!==null&&(hn=nt.get(Ie),dt=Re,dt.setIndex(hn)),W.isMesh)U.wireframe===!0?(j.setLineWidth(U.wireframeLinewidth*Le()),dt.setMode(L.LINES)):dt.setMode(L.TRIANGLES);else if(W.isLine){let Xe=U.linewidth;Xe===void 0&&(Xe=1),j.setLineWidth(Xe*Le()),W.isLineSegments?dt.setMode(L.LINES):W.isLineLoop?dt.setMode(L.LINE_LOOP):dt.setMode(L.LINE_STRIP)}else W.isPoints?dt.setMode(L.POINTS):W.isSprite&&dt.setMode(L.TRIANGLES);if(W.isInstancedMesh)dt.renderInstances(et,Wt,W.count);else if(H.isInstancedBufferGeometry){const Xe=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,ka=Math.min(H.instanceCount,Xe);dt.renderInstances(et,Wt,ka)}else dt.render(et,Wt)},this.compile=function(A,O){function H(U,W,ve){U.transparent===!0&&U.side===nn&&U.forceSinglePass===!1?(U.side=Ct,U.needsUpdate=!0,dr(U,W,ve),U.side=En,U.needsUpdate=!0,dr(U,W,ve),U.side=nn):dr(U,W,ve)}g=ce.get(A),g.init(),_.push(g),A.traverseVisible(function(U){U.isLight&&U.layers.test(O.layers)&&(g.pushLight(U),U.castShadow&&g.pushShadow(U))}),g.setupLights(v.useLegacyLights),A.traverse(function(U){const W=U.material;if(W)if(Array.isArray(W))for(let ve=0;ve<W.length;ve++){const we=W[ve];H(we,A,U)}else H(W,A,U)}),_.pop(),g=null};let ft=null;function Zn(A){ft&&ft(A)}function st(){Et.stop()}function en(){Et.start()}const Et=new Kh;Et.setAnimationLoop(Zn),typeof self<"u"&&Et.setContext(self),this.setAnimationLoop=function(A){ft=A,I.setAnimationLoop(A),A===null?Et.stop():Et.start()},I.addEventListener("sessionstart",st),I.addEventListener("sessionend",en),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),I.enabled===!0&&I.isPresenting===!0&&(O=I.updateCameraXR(O)),A.isScene===!0&&A.onBeforeRender(v,A,O,C),g=ce.get(A,_.length),g.init(),_.push(g),_e.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ee.setFromProjectionMatrix(_e),de=this.localClippingEnabled,te=Te.init(this.clippingPlanes,de),x=ie.get(A,p.length),x.init(),p.push(x),rl(A,O,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(X,J),te===!0&&Te.beginShadows();const H=g.state.shadowsArray;if(le.render(H,A,O),te===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,q.render(x,A),g.setupLights(v.useLegacyLights),O.isArrayCamera){const U=O.cameras;for(let W=0,ve=U.length;W<ve;W++){const we=U[W];al(x,A,we,we.viewport)}}else al(x,A,O);C!==null&&(xe.updateMultisampleRenderTarget(C),xe.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(v,A,O),be.resetDefaultState(),P=-1,M=null,_.pop(),_.length>0?g=_[_.length-1]:g=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function rl(A,O,H,U){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)H=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ee.intersectsSprite(A)){U&&Ce.setFromMatrixPosition(A.matrixWorld).applyMatrix4(_e);const we=S.update(A),Pe=A.material;Pe.visible&&x.push(A,we,Pe,H,Ce.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ee.intersectsObject(A))){A.isSkinnedMesh&&A.skeleton.frame!==Se.render.frame&&(A.skeleton.update(),A.skeleton.frame=Se.render.frame);const we=S.update(A),Pe=A.material;if(U&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ce.copy(A.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Ce.copy(we.boundingSphere.center)),Ce.applyMatrix4(A.matrixWorld).applyMatrix4(_e)),Array.isArray(Pe)){const Ie=we.groups;for(let We=0,Oe=Ie.length;We<Oe;We++){const ze=Ie[We],et=Pe[ze.materialIndex];et&&et.visible&&x.push(A,we,et,H,Ce.z,ze)}}else Pe.visible&&x.push(A,we,Pe,H,Ce.z,null)}}const ve=A.children;for(let we=0,Pe=ve.length;we<Pe;we++)rl(ve[we],O,H,U)}function al(A,O,H,U){const W=A.opaque,ve=A.transmissive,we=A.transparent;g.setupLightsView(H),te===!0&&Te.setGlobalState(v.clippingPlanes,H),ve.length>0&&gd(W,ve,O,H),U&&j.viewport(E.copy(U)),W.length>0&&fr(W,O,H),ve.length>0&&fr(ve,O,H),we.length>0&&fr(we,O,H),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function gd(A,O,H,U){const W=re.isWebGL2;me===null&&(me=new $t(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")?_i:Tn,minFilter:Gn,samples:W&&o===!0?4:0})),v.getDrawingBufferSize(Ne),W?me.setSize(Ne.x,Ne.y):me.setSize(ga(Ne.x),ga(Ne.y));const ve=v.getRenderTarget();v.setRenderTarget(me),v.getClearColor(N),F=v.getClearAlpha(),F<1&&v.setClearColor(16777215,.5),v.clear();const we=v.toneMapping;v.toneMapping=an,fr(A,H,U),xe.updateMultisampleRenderTarget(me),xe.updateRenderTargetMipmap(me);let Pe=!1;for(let Ie=0,We=O.length;Ie<We;Ie++){const Oe=O[Ie],ze=Oe.object,et=Oe.geometry,ct=Oe.material,Wt=Oe.group;if(ct.side===nn&&ze.layers.test(U.layers)){const hn=ct.side;ct.side=Ct,ct.needsUpdate=!0,ol(ze,H,U,et,ct,Wt),ct.side=hn,ct.needsUpdate=!0,Pe=!0}}Pe===!0&&(xe.updateMultisampleRenderTarget(me),xe.updateRenderTargetMipmap(me)),v.setRenderTarget(ve),v.setClearColor(N,F),v.toneMapping=we}function fr(A,O,H){const U=O.isScene===!0?O.overrideMaterial:null;for(let W=0,ve=A.length;W<ve;W++){const we=A[W],Pe=we.object,Ie=we.geometry,We=U===null?we.material:U,Oe=we.group;Pe.layers.test(H.layers)&&ol(Pe,O,H,Ie,We,Oe)}}function ol(A,O,H,U,W,ve){A.onBeforeRender(v,O,H,U,W,ve),A.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(v,O,H,U,A,ve),W.transparent===!0&&W.side===nn&&W.forceSinglePass===!1?(W.side=Ct,W.needsUpdate=!0,v.renderBufferDirect(H,O,U,W,A,ve),W.side=En,W.needsUpdate=!0,v.renderBufferDirect(H,O,U,W,A,ve),W.side=nn):v.renderBufferDirect(H,O,U,W,A,ve),A.onAfterRender(v,O,H,U,W,ve)}function dr(A,O,H){O.isScene!==!0&&(O=Ke);const U=ge.get(A),W=g.state.lights,ve=g.state.shadowsArray,we=W.state.version,Pe=G.getParameters(A,W.state,ve,O,H),Ie=G.getProgramCacheKey(Pe);let We=U.programs;U.environment=A.isMeshStandardMaterial?O.environment:null,U.fog=O.fog,U.envMap=(A.isMeshStandardMaterial?qe:Ue).get(A.envMap||U.environment),We===void 0&&(A.addEventListener("dispose",fe),We=new Map,U.programs=We);let Oe=We.get(Ie);if(Oe!==void 0){if(U.currentProgram===Oe&&U.lightsStateVersion===we)return cl(A,Pe),Oe}else Pe.uniforms=G.getUniforms(A),A.onBuild(H,Pe,v),A.onBeforeCompile(Pe,v),Oe=G.acquireProgram(Pe,Ie),We.set(Ie,Oe),U.uniforms=Pe.uniforms;const ze=U.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ze.clippingPlanes=Te.uniform),cl(A,Pe),U.needsLights=_d(A),U.lightsStateVersion=we,U.needsLights&&(ze.ambientLightColor.value=W.state.ambient,ze.lightProbe.value=W.state.probe,ze.directionalLights.value=W.state.directional,ze.directionalLightShadows.value=W.state.directionalShadow,ze.spotLights.value=W.state.spot,ze.spotLightShadows.value=W.state.spotShadow,ze.rectAreaLights.value=W.state.rectArea,ze.ltc_1.value=W.state.rectAreaLTC1,ze.ltc_2.value=W.state.rectAreaLTC2,ze.pointLights.value=W.state.point,ze.pointLightShadows.value=W.state.pointShadow,ze.hemisphereLights.value=W.state.hemi,ze.directionalShadowMap.value=W.state.directionalShadowMap,ze.directionalShadowMatrix.value=W.state.directionalShadowMatrix,ze.spotShadowMap.value=W.state.spotShadowMap,ze.spotLightMatrix.value=W.state.spotLightMatrix,ze.spotLightMap.value=W.state.spotLightMap,ze.pointShadowMap.value=W.state.pointShadowMap,ze.pointShadowMatrix.value=W.state.pointShadowMatrix);const et=Oe.getUniforms(),ct=fa.seqWithValue(et.seq,ze);return U.currentProgram=Oe,U.uniformsList=ct,Oe}function cl(A,O){const H=ge.get(A);H.outputColorSpace=O.outputColorSpace,H.instancing=O.instancing,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function xd(A,O,H,U,W){O.isScene!==!0&&(O=Ke),xe.resetTextureUnits();const ve=O.fog,we=U.isMeshStandardMaterial?O.environment:null,Pe=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Jt,Ie=(U.isMeshStandardMaterial?qe:Ue).get(U.envMap||we),We=U.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Oe=!!H.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),ze=!!H.morphAttributes.position,et=!!H.morphAttributes.normal,ct=!!H.morphAttributes.color,Wt=U.toneMapped?v.toneMapping:an,hn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,dt=hn!==void 0?hn.length:0,Xe=ge.get(U),ka=g.state.lights;if(te===!0&&(de===!0||A!==M)){const Nt=A===M&&U.id===P;Te.setState(U,A,Nt)}let xt=!1;U.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==ka.state.version||Xe.outputColorSpace!==Pe||W.isInstancedMesh&&Xe.instancing===!1||!W.isInstancedMesh&&Xe.instancing===!0||W.isSkinnedMesh&&Xe.skinning===!1||!W.isSkinnedMesh&&Xe.skinning===!0||Xe.envMap!==Ie||U.fog===!0&&Xe.fog!==ve||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Te.numPlanes||Xe.numIntersection!==Te.numIntersection)||Xe.vertexAlphas!==We||Xe.vertexTangents!==Oe||Xe.morphTargets!==ze||Xe.morphNormals!==et||Xe.morphColors!==ct||Xe.toneMapping!==Wt||re.isWebGL2===!0&&Xe.morphTargetsCount!==dt)&&(xt=!0):(xt=!0,Xe.__version=U.version);let Jn=Xe.currentProgram;xt===!0&&(Jn=dr(U,O,W));let ll=!1,fs=!1,Va=!1;const At=Jn.getUniforms(),$n=Xe.uniforms;if(j.useProgram(Jn.program)&&(ll=!0,fs=!0,Va=!0),U.id!==P&&(P=U.id,fs=!0),ll||M!==A){if(At.setValue(L,"projectionMatrix",A.projectionMatrix),re.logarithmicDepthBuffer&&At.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),M!==A&&(M=A,fs=!0,Va=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const Nt=At.map.cameraPosition;Nt!==void 0&&Nt.setValue(L,Ce.setFromMatrixPosition(A.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&At.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||W.isSkinnedMesh)&&At.setValue(L,"viewMatrix",A.matrixWorldInverse)}if(W.isSkinnedMesh){At.setOptional(L,W,"bindMatrix"),At.setOptional(L,W,"bindMatrixInverse");const Nt=W.skeleton;Nt&&(re.floatVertexTextures?(Nt.boneTexture===null&&Nt.computeBoneTexture(),At.setValue(L,"boneTexture",Nt.boneTexture,xe),At.setValue(L,"boneTextureSize",Nt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ga=H.morphAttributes;if((Ga.position!==void 0||Ga.normal!==void 0||Ga.color!==void 0&&re.isWebGL2===!0)&&Ee.update(W,H,Jn),(fs||Xe.receiveShadow!==W.receiveShadow)&&(Xe.receiveShadow=W.receiveShadow,At.setValue(L,"receiveShadow",W.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&($n.envMap.value=Ie,$n.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),fs&&(At.setValue(L,"toneMappingExposure",v.toneMappingExposure),Xe.needsLights&&vd($n,Va),ve&&U.fog===!0&&ne.refreshFogUniforms($n,ve),ne.refreshMaterialUniforms($n,U,V,Y,me),fa.upload(L,Xe.uniformsList,$n,xe)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(fa.upload(L,Xe.uniformsList,$n,xe),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&At.setValue(L,"center",W.center),At.setValue(L,"modelViewMatrix",W.modelViewMatrix),At.setValue(L,"normalMatrix",W.normalMatrix),At.setValue(L,"modelMatrix",W.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const Nt=U.uniformsGroups;for(let Ha=0,yd=Nt.length;Ha<yd;Ha++)if(re.isWebGL2){const ul=Nt[Ha];He.update(ul,Jn),He.bind(ul,Jn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Jn}function vd(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function _d(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,O,H){ge.get(A.texture).__webglTexture=O,ge.get(A.depthTexture).__webglTexture=H;const U=ge.get(A);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=H===void 0,U.__autoAllocateDepthBuffer||Z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,O){const H=ge.get(A);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(A,O=0,H=0){C=A,T=O,b=H;let U=!0,W=null,ve=!1,we=!1;if(A){const Ie=ge.get(A);Ie.__useDefaultFramebuffer!==void 0?(j.bindFramebuffer(L.FRAMEBUFFER,null),U=!1):Ie.__webglFramebuffer===void 0?xe.setupRenderTarget(A):Ie.__hasExternalTextures&&xe.rebindTextures(A,ge.get(A.texture).__webglTexture,ge.get(A.depthTexture).__webglTexture);const We=A.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(we=!0);const Oe=ge.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(W=Oe[O],ve=!0):re.isWebGL2&&A.samples>0&&xe.useMultisampledRTT(A)===!1?W=ge.get(A).__webglMultisampledFramebuffer:W=Oe,E.copy(A.viewport),D.copy(A.scissor),$=A.scissorTest}else E.copy(Q).multiplyScalar(V).floor(),D.copy(he).multiplyScalar(V).floor(),$=B;if(j.bindFramebuffer(L.FRAMEBUFFER,W)&&re.drawBuffers&&U&&j.drawBuffers(A,W),j.viewport(E),j.scissor(D),j.setScissorTest($),ve){const Ie=ge.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ie.__webglTexture,H)}else if(we){const Ie=ge.get(A.texture),We=O||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ie.__webglTexture,H||0,We)}P=-1},this.readRenderTargetPixels=function(A,O,H,U,W,ve,we){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=ge.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&we!==void 0&&(Pe=Pe[we]),Pe){j.bindFramebuffer(L.FRAMEBUFFER,Pe);try{const Ie=A.texture,We=Ie.format,Oe=Ie.type;if(We!==Ut&&Me.convert(We)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=Oe===_i&&(Z.has("EXT_color_buffer_half_float")||re.isWebGL2&&Z.has("EXT_color_buffer_float"));if(Oe!==Tn&&Me.convert(Oe)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Oe===sn&&(re.isWebGL2||Z.has("OES_texture_float")||Z.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-U&&H>=0&&H<=A.height-W&&L.readPixels(O,H,U,W,Me.convert(We),Me.convert(Oe),ve)}finally{const Ie=C!==null?ge.get(C).__webglFramebuffer:null;j.bindFramebuffer(L.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(A,O,H=0){const U=Math.pow(2,-H),W=Math.floor(O.image.width*U),ve=Math.floor(O.image.height*U);xe.setTexture2D(O,0),L.copyTexSubImage2D(L.TEXTURE_2D,H,0,0,A.x,A.y,W,ve),j.unbindTexture()},this.copyTextureToTexture=function(A,O,H,U=0){const W=O.image.width,ve=O.image.height,we=Me.convert(H.format),Pe=Me.convert(H.type);xe.setTexture2D(H,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,H.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,H.unpackAlignment),O.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,U,A.x,A.y,W,ve,we,Pe,O.image.data):O.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,U,A.x,A.y,O.mipmaps[0].width,O.mipmaps[0].height,we,O.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,U,A.x,A.y,we,Pe,O.image),U===0&&H.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),j.unbindTexture()},this.copyTextureToTexture3D=function(A,O,H,U,W=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ve=A.max.x-A.min.x+1,we=A.max.y-A.min.y+1,Pe=A.max.z-A.min.z+1,Ie=Me.convert(U.format),We=Me.convert(U.type);let Oe;if(U.isData3DTexture)xe.setTexture3D(U,0),Oe=L.TEXTURE_3D;else if(U.isDataArrayTexture)xe.setTexture2DArray(U,0),Oe=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const ze=L.getParameter(L.UNPACK_ROW_LENGTH),et=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ct=L.getParameter(L.UNPACK_SKIP_PIXELS),Wt=L.getParameter(L.UNPACK_SKIP_ROWS),hn=L.getParameter(L.UNPACK_SKIP_IMAGES),dt=H.isCompressedTexture?H.mipmaps[0]:H.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,dt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,dt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,A.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,A.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,A.min.z),H.isDataTexture||H.isData3DTexture?L.texSubImage3D(Oe,W,O.x,O.y,O.z,ve,we,Pe,Ie,We,dt.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(Oe,W,O.x,O.y,O.z,ve,we,Pe,Ie,dt.data)):L.texSubImage3D(Oe,W,O.x,O.y,O.z,ve,we,Pe,Ie,We,dt),L.pixelStorei(L.UNPACK_ROW_LENGTH,ze),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,et),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ct),L.pixelStorei(L.UNPACK_SKIP_ROWS,Wt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,hn),W===0&&U.generateMipmaps&&L.generateMipmap(Oe),j.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?xe.setTextureCube(A,0):A.isData3DTexture?xe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?xe.setTexture2DArray(A,0):xe.setTexture2D(A,0),j.unbindTexture()},this.resetState=function(){T=0,b=0,C=null,j.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Fe?zn:Ec}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===zn?Fe:Jt}}class of extends af{}of.prototype.isWebGL1Renderer=!0;class Ca{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new pe(e),this.density=t}clone(){return new Ca(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class Pa{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new pe(e),this.near=t,this.far=n}clone(){return new Pa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class cf extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class La{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=zs,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Bt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const wt=new w;class Mi{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}setX(e,t){return this.normalized&&(t=Ve(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ve(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ve(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ve(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=zt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=zt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=zt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=zt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ve(t,this.array),n=Ve(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ve(t,this.array),n=Ve(n,this.array),i=Ve(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ve(t,this.array),n=Ve(n,this.array),i=Ve(i,this.array),r=Ve(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Qe(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Mi(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Nc extends Tt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Wi;const xs=new w,qi=new w,Xi=new w,Yi=new K,vs=new K,lf=new De,Dr=new w,_s=new w,Nr=new w,Zl=new K,ho=new K,Jl=new K;class uf extends Je{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",Wi===void 0){Wi=new Ge;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new La(t,5);Wi.setIndex([0,1,2,0,2,3]),Wi.setAttribute("position",new Mi(n,3,0,!1)),Wi.setAttribute("uv",new Mi(n,2,3,!1))}this.geometry=Wi,this.material=e!==void 0?e:new Nc,this.center=new K(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qi.setFromMatrixScale(this.matrixWorld),lf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Xi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qi.multiplyScalar(-Xi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;Or(Dr.set(-.5,-.5,0),Xi,a,qi,i,r),Or(_s.set(.5,-.5,0),Xi,a,qi,i,r),Or(Nr.set(.5,.5,0),Xi,a,qi,i,r),Zl.set(0,0),ho.set(1,0),Jl.set(1,1);let o=e.ray.intersectTriangle(Dr,_s,Nr,!1,xs);if(o===null&&(Or(_s.set(-.5,.5,0),Xi,a,qi,i,r),ho.set(0,1),o=e.ray.intersectTriangle(Dr,Nr,_s,!1,xs),o===null))return;const c=e.ray.origin.distanceTo(xs);c<e.near||c>e.far||t.push({distance:c,point:xs.clone(),uv:It.getInterpolation(xs,Dr,_s,Nr,Zl,ho,Jl,new K),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Or(s,e,t,n,i,r){Yi.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(vs.x=r*Yi.x-i*Yi.y,vs.y=i*Yi.x+r*Yi.y):vs.copy(Yi),s.copy(e),s.x+=vs.x,s.y+=vs.y,s.applyMatrix4(lf)}const Fr=new w,$l=new w;class hf extends Je{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let r;for(r=0;r<i.length&&!(t<i[r].distance);r++);return i.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Fr.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(Fr);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Fr.setFromMatrixPosition(e.matrixWorld),$l.setFromMatrixPosition(this.matrixWorld);const n=Fr.distanceTo($l)/e.zoom;t[0].object.visible=!0;let i,r;for(i=1,r=t.length;i<r;i++){let a=t[i].distance;if(t[i].object.visible&&(a-=a*t[i].hysteresis),n>=a)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const a=n[i];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}const Kl=new w,Ql=new $e,jl=new $e,Sv=new w,eu=new De,Zi=new w,fo=new Kt,tu=new De,po=new rs;class ff extends yt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new De,this.bindMatrixInverse=new De,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ln),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Zi.fromBufferAttribute(t,n),this.applyBoneTransform(n,Zi),this.boundingBox.expandByPoint(Zi)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Kt),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Zi.fromBufferAttribute(t,n),this.applyBoneTransform(n,Zi),this.boundingSphere.expandByPoint(Zi)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fo.copy(this.boundingSphere),fo.applyMatrix4(i),e.ray.intersectsSphere(fo)!==!1&&(tu.copy(i).invert(),po.copy(e.ray).applyMatrix4(tu),!(this.boundingBox!==null&&po.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,po)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new $e,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Ql.fromBufferAttribute(i.attributes.skinIndex,e),jl.fromBufferAttribute(i.attributes.skinWeight,e),Kl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=jl.getComponent(r);if(a!==0){const o=Ql.getComponent(r);eu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Sv.copy(Kl).applyMatrix4(eu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Oc extends Je{constructor(){super(),this.isBone=!0,this.type="Bone"}}class gi extends ht{constructor(e=null,t=1,n=1,i,r,a,o,c,l=ut,u=ut,f,h){super(null,a,o,c,l,u,i,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const nu=new De,Tv=new De;class Ia{constructor(e=[],t=[]){this.uuid=Bt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new De)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new De;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Tv;nu.multiplyMatrices(o,t[r]),nu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ia(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Wh(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new gi(t,e,e,Ut,sn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Oc),this.bones.push(a),this.boneInverses.push(new De().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class is extends Qe{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ji=new De,iu=new De,zr=[],su=new ln,Ev=new De,ys=new yt,Ms=new Kt;class df extends yt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new is(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Ev)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ln),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ji),su.copy(e.boundingBox).applyMatrix4(Ji),this.boundingBox.union(su)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Kt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ji),Ms.copy(e.boundingSphere).applyMatrix4(Ji),this.boundingSphere.union(Ms)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ys.geometry=this.geometry,ys.material=this.material,ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ms.copy(this.boundingSphere),Ms.applyMatrix4(n),e.ray.intersectsSphere(Ms)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ji),iu.multiplyMatrices(n,Ji),ys.matrixWorld=iu,ys.raycast(e,zr);for(let a=0,o=zr.length;a<o;a++){const c=zr[a];c.instanceId=r,c.object=this,t.push(c)}zr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new is(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Pt extends Tt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ru=new w,au=new w,ou=new De,mo=new rs,Br=new Kt;class Hn extends Je{constructor(e=new Ge,t=new Pt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ru.fromBufferAttribute(t,i-1),au.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ru.distanceTo(au);e.setAttribute("lineDistance",new ye(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(i),Br.radius+=r,e.ray.intersectsSphere(Br)===!1)return;ou.copy(i).invert(),mo.copy(e.ray).applyMatrix4(ou);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new w,u=new w,f=new w,h=new w,d=this.isLineSegments?2:1,m=n.index,g=n.attributes.position;if(m!==null){const p=Math.max(0,a.start),_=Math.min(m.count,a.start+a.count);for(let v=p,y=_-1;v<y;v+=d){const T=m.getX(v),b=m.getX(v+1);if(l.fromBufferAttribute(g,T),u.fromBufferAttribute(g,b),mo.distanceSqToSegment(l,u,h,f)>c)continue;h.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(h);P<e.near||P>e.far||t.push({distance:P,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),_=Math.min(g.count,a.start+a.count);for(let v=p,y=_-1;v<y;v+=d){if(l.fromBufferAttribute(g,v),u.fromBufferAttribute(g,v+1),mo.distanceSqToSegment(l,u,h,f)>c)continue;h.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(h);b<e.near||b>e.far||t.push({distance:b,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const cu=new w,lu=new w;class un extends Hn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)cu.fromBufferAttribute(t,i),lu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+cu.distanceTo(lu);e.setAttribute("lineDistance",new ye(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class pf extends Hn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Fc extends Tt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const uu=new De,ac=new rs,kr=new Kt,Vr=new w;class mf extends Je{constructor(e=new Ge,t=new Fc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(i),kr.radius+=r,e.ray.intersectsSphere(kr)===!1)return;uu.copy(i).invert(),ac.copy(e.ray).applyMatrix4(uu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){const h=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let m=h,x=d;m<x;m++){const g=l.getX(m);Vr.fromBufferAttribute(f,g),hu(Vr,g,c,i,e,t,this)}}else{const h=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let m=h,x=d;m<x;m++)Vr.fromBufferAttribute(f,m),hu(Vr,m,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function hu(s,e,t,n,i,r,a){const o=ac.distanceSqToPoint(s);if(o<t){const c=new w;ac.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}class Av extends ht{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:at,this.magFilter=r!==void 0?r:at,this.generateMipmaps=!1;const u=this;function f(){u.needsUpdate=!0,e.requestVideoFrameCallback(f)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(f)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class wv extends ht{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=ut,this.minFilter=ut,this.generateMipmaps=!1,this.needsUpdate=!0}}class zc extends ht{constructor(e,t,n,i,r,a,o,c,l,u,f,h){super(null,a,o,c,l,u,i,r,f,h),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class Rv extends zc{constructor(e,t,n,i,r,a){super(e,t,n,r,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=St}}class Cv extends ht{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);const u=n[i],h=n[i+1]-u,d=(a-u)/h;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),c=t||(a.isVector2?new K:new w);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new w,i=[],r=[],a=[],o=new w,c=new De;for(let d=0;d<=e;d++){const m=d/e;i[d]=this.getTangentAt(m,new w)}r[0]=new w,a[0]=new w;let l=Number.MAX_VALUE;const u=Math.abs(i[0].x),f=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),h<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(ot(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,m))}a[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(ot(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(i[m],d*m)),a[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ua extends Qt{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t){const n=t||new K,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,d=l-this.aY;c=h*u-d*f+this.aX,l=h*f+d*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class gf extends Ua{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Bc(){let s=0,e=0,t=0,n=0;function i(r,a,o,c){s=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,f){let h=(a-r)/l-(o-r)/(l+u)+(o-a)/u,d=(o-a)/u-(c-a)/(u+f)+(c-o)/f;h*=u,d*=u,i(a,o,h,d)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+n*o}}}const Gr=new w,go=new Bc,xo=new Bc,vo=new Bc;class xf extends Qt{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new w){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=i[(o-1)%r]:(Gr.subVectors(i[0],i[1]).add(i[0]),l=Gr);const f=i[o%r],h=i[(o+1)%r];if(this.closed||o+2<r?u=i[(o+2)%r]:(Gr.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Gr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(u),d);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),go.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,m,x,g),xo.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,m,x,g),vo.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,m,x,g)}else this.curveType==="catmullrom"&&(go.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),xo.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),vo.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return n.set(go.calc(c),xo.calc(c),vo.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new w().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function fu(s,e,t,n,i){const r=(n-e)*.5,a=(i-t)*.5,o=s*s,c=s*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*s+t}function Pv(s,e){const t=1-s;return t*t*e}function Lv(s,e){return 2*(1-s)*s*e}function Iv(s,e){return s*s*e}function Cs(s,e,t,n){return Pv(s,e)+Lv(s,t)+Iv(s,n)}function Uv(s,e){const t=1-s;return t*t*t*e}function Dv(s,e){const t=1-s;return 3*t*t*s*e}function Nv(s,e){return 3*(1-s)*s*s*e}function Ov(s,e){return s*s*s*e}function Ps(s,e,t,n,i){return Uv(s,e)+Dv(s,t)+Nv(s,n)+Ov(s,i)}class kc extends Qt{constructor(e=new K,t=new K,n=new K,i=new K){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new K){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ps(e,i.x,r.x,a.x,o.x),Ps(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class vf extends Qt{constructor(e=new w,t=new w,n=new w,i=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new w){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ps(e,i.x,r.x,a.x,o.x),Ps(e,i.y,r.y,a.y,o.y),Ps(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Da extends Qt{constructor(e=new K,t=new K){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new K){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new K){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _f extends Qt{constructor(e=new w,t=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vc extends Qt{constructor(e=new K,t=new K,n=new K){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new K){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Cs(e,i.x,r.x,a.x),Cs(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gc extends Qt{constructor(e=new w,t=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new w){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Cs(e,i.x,r.x,a.x),Cs(e,i.y,r.y,a.y),Cs(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hc extends Qt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new K){const n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],l=i[a],u=i[a>i.length-2?i.length-1:a+1],f=i[a>i.length-3?i.length-1:a+2];return n.set(fu(o,c.x,l.x,u.x,f.x),fu(o,c.y,l.y,u.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new K().fromArray(i))}return this}}var Wc=Object.freeze({__proto__:null,ArcCurve:gf,CatmullRomCurve3:xf,CubicBezierCurve:kc,CubicBezierCurve3:vf,EllipseCurve:Ua,LineCurve:Da,LineCurve3:_f,QuadraticBezierCurve:Vc,QuadraticBezierCurve3:Gc,SplineCurve:Hc});class yf extends Qt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Da(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Wc[i.type]().fromJSON(i))}return this}}class Vs extends yf{constructor(e){super(),this.type="Path",this.currentPoint=new K,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Da(this.currentPoint.clone(),new K(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Vc(this.currentPoint.clone(),new K(e,t),new K(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){const o=new kc(this.currentPoint.clone(),new K(e,t),new K(n,i),new K(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Hc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,i,r,a,o,c),this}absellipse(e,t,n,i,r,a,o,c){const l=new Ua(e,t,n,i,r,a,o,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class cs extends Ge{constructor(e=[new K(0,-.5),new K(.5,0),new K(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=ot(i,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],u=1/t,f=new w,h=new K,d=new w,m=new w,x=new w;let g=0,p=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:g=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,d.x=p*1,d.y=-g,d.z=p*0,x.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:g=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),c.push(d.x,d.y,d.z),x.copy(m)}for(let _=0;_<=t;_++){const v=n+_*u*i,y=Math.sin(v),T=Math.cos(v);for(let b=0;b<=e.length-1;b++){f.x=e[b].x*y,f.y=e[b].y,f.z=e[b].x*T,a.push(f.x,f.y,f.z),h.x=_/t,h.y=b/(e.length-1),o.push(h.x,h.y);const C=c[3*b+0]*y,P=c[3*b+1],M=c[3*b+0]*T;l.push(C,P,M)}}for(let _=0;_<t;_++)for(let v=0;v<e.length-1;v++){const y=v+_*e.length,T=y,b=y+e.length,C=y+e.length+1,P=y+1;r.push(T,b,P),r.push(C,P,b)}this.setIndex(r),this.setAttribute("position",new ye(a,3)),this.setAttribute("uv",new ye(o,2)),this.setAttribute("normal",new ye(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cs(e.points,e.segments,e.phiStart,e.phiLength)}}class js extends cs{constructor(e=1,t=1,n=4,i=8){const r=new Vs;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new js(e.radius,e.length,e.capSegments,e.radialSegments)}}class er extends Ge{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new w,u=new K;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,h=3;f<=t;f++,h+=3){const d=n+f/t*i;l.x=e*Math.cos(d),l.y=e*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,c.push(u.x,u.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new ye(a,3)),this.setAttribute("normal",new ye(o,3)),this.setAttribute("uv",new ye(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new er(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ei extends Ge{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const u=[],f=[],h=[],d=[];let m=0;const x=[],g=n/2;let p=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new ye(f,3)),this.setAttribute("normal",new ye(h,3)),this.setAttribute("uv",new ye(d,2));function _(){const y=new w,T=new w;let b=0;const C=(t-e)/n;for(let P=0;P<=r;P++){const M=[],E=P/r,D=E*(t-e)+e;for(let $=0;$<=i;$++){const N=$/i,F=N*c+o,z=Math.sin(F),Y=Math.cos(F);T.x=D*z,T.y=-E*n+g,T.z=D*Y,f.push(T.x,T.y,T.z),y.set(z,C,Y).normalize(),h.push(y.x,y.y,y.z),d.push(N,1-E),M.push(m++)}x.push(M)}for(let P=0;P<i;P++)for(let M=0;M<r;M++){const E=x[M][P],D=x[M+1][P],$=x[M+1][P+1],N=x[M][P+1];u.push(E,D,N),u.push(D,$,N),b+=6}l.addGroup(p,b,0),p+=b}function v(y){const T=m,b=new K,C=new w;let P=0;const M=y===!0?e:t,E=y===!0?1:-1;for(let $=1;$<=i;$++)f.push(0,g*E,0),h.push(0,E,0),d.push(.5,.5),m++;const D=m;for(let $=0;$<=i;$++){const F=$/i*c+o,z=Math.cos(F),Y=Math.sin(F);C.x=M*Y,C.y=g*E,C.z=M*z,f.push(C.x,C.y,C.z),h.push(0,E,0),b.x=z*.5+.5,b.y=Y*.5*E+.5,d.push(b.x,b.y),m++}for(let $=0;$<i;$++){const N=T+$,F=D+$;y===!0?u.push(F,F+1,N):u.push(F+1,F,N),P+=3}l.addGroup(p,P,y===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ei(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class tr extends Ei{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new tr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Rn extends Ge{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),l(n),u(),this.setAttribute("position",new ye(r,3)),this.setAttribute("normal",new ye(r.slice(),3)),this.setAttribute("uv",new ye(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(_){const v=new w,y=new w,T=new w;for(let b=0;b<t.length;b+=3)d(t[b+0],v),d(t[b+1],y),d(t[b+2],T),c(v,y,T,_)}function c(_,v,y,T){const b=T+1,C=[];for(let P=0;P<=b;P++){C[P]=[];const M=_.clone().lerp(y,P/b),E=v.clone().lerp(y,P/b),D=b-P;for(let $=0;$<=D;$++)$===0&&P===b?C[P][$]=M:C[P][$]=M.clone().lerp(E,$/D)}for(let P=0;P<b;P++)for(let M=0;M<2*(b-P)-1;M++){const E=Math.floor(M/2);M%2===0?(h(C[P][E+1]),h(C[P+1][E]),h(C[P][E])):(h(C[P][E+1]),h(C[P+1][E+1]),h(C[P+1][E]))}}function l(_){const v=new w;for(let y=0;y<r.length;y+=3)v.x=r[y+0],v.y=r[y+1],v.z=r[y+2],v.normalize().multiplyScalar(_),r[y+0]=v.x,r[y+1]=v.y,r[y+2]=v.z}function u(){const _=new w;for(let v=0;v<r.length;v+=3){_.x=r[v+0],_.y=r[v+1],_.z=r[v+2];const y=g(_)/2/Math.PI+.5,T=p(_)/Math.PI+.5;a.push(y,1-T)}m(),f()}function f(){for(let _=0;_<a.length;_+=6){const v=a[_+0],y=a[_+2],T=a[_+4],b=Math.max(v,y,T),C=Math.min(v,y,T);b>.9&&C<.1&&(v<.2&&(a[_+0]+=1),y<.2&&(a[_+2]+=1),T<.2&&(a[_+4]+=1))}}function h(_){r.push(_.x,_.y,_.z)}function d(_,v){const y=_*3;v.x=e[y+0],v.y=e[y+1],v.z=e[y+2]}function m(){const _=new w,v=new w,y=new w,T=new w,b=new K,C=new K,P=new K;for(let M=0,E=0;M<r.length;M+=9,E+=6){_.set(r[M+0],r[M+1],r[M+2]),v.set(r[M+3],r[M+4],r[M+5]),y.set(r[M+6],r[M+7],r[M+8]),b.set(a[E+0],a[E+1]),C.set(a[E+2],a[E+3]),P.set(a[E+4],a[E+5]),T.copy(_).add(v).add(y).divideScalar(3);const D=g(T);x(b,E+0,_,D),x(C,E+2,v,D),x(P,E+4,y,D)}}function x(_,v,y,T){T<0&&_.x===1&&(a[v]=_.x-1),y.x===0&&y.z===0&&(a[v]=T/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rn(e.vertices,e.indices,e.radius,e.details)}}class nr extends Rn{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new nr(e.radius,e.detail)}}const Hr=new w,Wr=new w,_o=new w,qr=new It;class Mf extends Ge{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(mi*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],u=["a","b","c"],f=new Array(3),h={},d=[];for(let m=0;m<c;m+=3){a?(l[0]=a.getX(m),l[1]=a.getX(m+1),l[2]=a.getX(m+2)):(l[0]=m,l[1]=m+1,l[2]=m+2);const{a:x,b:g,c:p}=qr;if(x.fromBufferAttribute(o,l[0]),g.fromBufferAttribute(o,l[1]),p.fromBufferAttribute(o,l[2]),qr.getNormal(_o),f[0]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,f[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,f[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let _=0;_<3;_++){const v=(_+1)%3,y=f[_],T=f[v],b=qr[u[_]],C=qr[u[v]],P=`${y}_${T}`,M=`${T}_${y}`;M in h&&h[M]?(_o.dot(h[M].normal)<=r&&(d.push(b.x,b.y,b.z),d.push(C.x,C.y,C.z)),h[M]=null):P in h||(h[P]={index0:l[_],index1:l[v],normal:_o.clone()})}}for(const m in h)if(h[m]){const{index0:x,index1:g}=h[m];Hr.fromBufferAttribute(o,x),Wr.fromBufferAttribute(o,g),d.push(Hr.x,Hr.y,Hr.z),d.push(Wr.x,Wr.y,Wr.z)}this.setAttribute("position",new ye(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class xi extends Vs{constructor(e){super(e),this.uuid=Bt(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Vs().fromJSON(i))}return this}}const Fv={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=bf(s,0,i,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l,u,f,h,d;if(n&&(r=Gv(s,e,r,t)),s.length>80*t){o=l=s[0],c=u=s[1];for(let m=t;m<i;m+=t)f=s[m],h=s[m+1],f<o&&(o=f),h<c&&(c=h),f>l&&(l=f),h>u&&(u=h);d=Math.max(l-o,u-c),d=d!==0?32767/d:0}return Gs(r,a,t,o,c,d,0),a}};function bf(s,e,t,n,i){let r,a;if(i===jv(s,e,t,n)>0)for(r=e;r<t;r+=n)a=du(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=du(r,s[r],s[r+1],a);return a&&Na(a,a.next)&&(Ws(a),a=a.next),a}function bi(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Na(t,t.next)||tt(t.prev,t,t.next)===0)){if(Ws(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Gs(s,e,t,n,i,r,a){if(!s)return;!a&&r&&Yv(s,n,i,r);let o=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?Bv(s,n,i,r):zv(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),Ws(s),s=l.next,o=l.next;continue}if(s=l,s===o){a?a===1?(s=kv(bi(s),e,t),Gs(s,e,t,n,i,r,2)):a===2&&Vv(s,e,t,n,i,r):Gs(bi(s),e,t,n,i,r,1);break}}}function zv(s){const e=s.prev,t=s,n=s.next;if(tt(e,t,n)>=0)return!1;const i=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,u=i<r?i<a?i:a:r<a?r:a,f=o<c?o<l?o:l:c<l?c:l,h=i>r?i>a?i:a:r>a?r:a,d=o>c?o>l?o:l:c>l?c:l;let m=n.next;for(;m!==e;){if(m.x>=u&&m.x<=h&&m.y>=f&&m.y<=d&&ji(i,o,r,c,a,l,m.x,m.y)&&tt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Bv(s,e,t,n){const i=s.prev,r=s,a=s.next;if(tt(i,r,a)>=0)return!1;const o=i.x,c=r.x,l=a.x,u=i.y,f=r.y,h=a.y,d=o<c?o<l?o:l:c<l?c:l,m=u<f?u<h?u:h:f<h?f:h,x=o>c?o>l?o:l:c>l?c:l,g=u>f?u>h?u:h:f>h?f:h,p=oc(d,m,e,t,n),_=oc(x,g,e,t,n);let v=s.prevZ,y=s.nextZ;for(;v&&v.z>=p&&y&&y.z<=_;){if(v.x>=d&&v.x<=x&&v.y>=m&&v.y<=g&&v!==i&&v!==a&&ji(o,u,c,f,l,h,v.x,v.y)&&tt(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=d&&y.x<=x&&y.y>=m&&y.y<=g&&y!==i&&y!==a&&ji(o,u,c,f,l,h,y.x,y.y)&&tt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=x&&v.y>=m&&v.y<=g&&v!==i&&v!==a&&ji(o,u,c,f,l,h,v.x,v.y)&&tt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=_;){if(y.x>=d&&y.x<=x&&y.y>=m&&y.y<=g&&y!==i&&y!==a&&ji(o,u,c,f,l,h,y.x,y.y)&&tt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function kv(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!Na(i,r)&&Sf(i,n,n.next,r)&&Hs(i,r)&&Hs(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Ws(n),Ws(n.next),n=s=r),n=n.next}while(n!==s);return bi(n)}function Vv(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&$v(a,o)){let c=Tf(a,o);a=bi(a,a.next),c=bi(c,c.next),Gs(a,e,t,n,i,r,0),Gs(c,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function Gv(s,e,t,n){const i=[];let r,a,o,c,l;for(r=0,a=e.length;r<a;r++)o=e[r]*n,c=r<a-1?e[r+1]*n:s.length,l=bf(s,o,c,n,!1),l===l.next&&(l.steiner=!0),i.push(Jv(l));for(i.sort(Hv),r=0;r<i.length;r++)t=Wv(i[r],t);return t}function Hv(s,e){return s.x-e.x}function Wv(s,e){const t=qv(s,e);if(!t)return e;const n=Tf(t,s);return bi(n,n.next),bi(t,t.next)}function qv(s,e){let t=e,n=-1/0,i;const r=s.x,a=s.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const h=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=r&&h>n&&(n=h,i=t.x<t.next.x?t:t.next,h===r))return i}t=t.next}while(t!==e);if(!i)return null;const o=i,c=i.x,l=i.y;let u=1/0,f;t=i;do r>=t.x&&t.x>=c&&r!==t.x&&ji(a<l?r:n,a,c,l,a<l?n:r,a,t.x,t.y)&&(f=Math.abs(a-t.y)/(r-t.x),Hs(t,s)&&(f<u||f===u&&(t.x>i.x||t.x===i.x&&Xv(i,t)))&&(i=t,u=f)),t=t.next;while(t!==o);return i}function Xv(s,e){return tt(s.prev,s,e.prev)<0&&tt(e.next,s,s.next)<0}function Yv(s,e,t,n){let i=s;do i.z===0&&(i.z=oc(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Zv(i)}function Zv(s){let e,t,n,i,r,a,o,c,l=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<l&&(o++,n=n.nextZ,!!n);e++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(a>1);return s}function oc(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Jv(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function ji(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function $v(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Kv(s,e)&&(Hs(s,e)&&Hs(e,s)&&Qv(s,e)&&(tt(s.prev,s,e.prev)||tt(s,e.prev,e))||Na(s,e)&&tt(s.prev,s,s.next)>0&&tt(e.prev,e,e.next)>0)}function tt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Na(s,e){return s.x===e.x&&s.y===e.y}function Sf(s,e,t,n){const i=Yr(tt(s,e,t)),r=Yr(tt(s,e,n)),a=Yr(tt(t,n,s)),o=Yr(tt(t,n,e));return!!(i!==r&&a!==o||i===0&&Xr(s,t,e)||r===0&&Xr(s,n,e)||a===0&&Xr(t,s,n)||o===0&&Xr(t,e,n))}function Xr(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Yr(s){return s>0?1:s<0?-1:0}function Kv(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Sf(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Hs(s,e){return tt(s.prev,s,s.next)<0?tt(s,e,s.next)>=0&&tt(s,s.prev,e)>=0:tt(s,e,s.prev)<0||tt(s,s.next,e)<0}function Qv(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Tf(s,e){const t=new cc(s.i,s.x,s.y),n=new cc(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function du(s,e,t,n){const i=new cc(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ws(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function cc(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function jv(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class on{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return on.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];pu(e),mu(n,e);let a=e.length;t.forEach(pu);for(let c=0;c<t.length;c++)i.push(a),a+=t[c].length,mu(n,t[c]);const o=Fv.triangulate(n,i);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function pu(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function mu(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class ir extends Ge{constructor(e=new xi([new K(.5,.5),new K(-.5,.5),new K(-.5,-.5),new K(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let o=0,c=e.length;o<c;o++){const l=e[o];a(l)}this.setAttribute("position",new ye(i,3)),this.setAttribute("uv",new ye(r,2)),this.computeVertexNormals();function a(o){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:e_;let v,y=!1,T,b,C,P;p&&(v=p.getSpacedPoints(u),y=!0,h=!1,T=p.computeFrenetFrames(u,!1),b=new w,C=new w,P=new w),h||(g=0,d=0,m=0,x=0);const M=o.extractPoints(l);let E=M.shape;const D=M.holes;if(!on.isClockWise(E)){E=E.reverse();for(let L=0,se=D.length;L<se;L++){const Z=D[L];on.isClockWise(Z)&&(D[L]=Z.reverse())}}const N=on.triangulateShape(E,D),F=E;for(let L=0,se=D.length;L<se;L++){const Z=D[L];E=E.concat(Z)}function z(L,se,Z){return se||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(se,Z)}const Y=E.length,V=N.length;function X(L,se,Z){let re,j,Se;const ge=L.x-se.x,xe=L.y-se.y,Ue=Z.x-L.x,qe=Z.y-L.y,nt=ge*ge+xe*xe,R=ge*qe-xe*Ue;if(Math.abs(R)>Number.EPSILON){const S=Math.sqrt(nt),G=Math.sqrt(Ue*Ue+qe*qe),ne=se.x-xe/S,ie=se.y+ge/S,ce=Z.x-qe/G,Te=Z.y+Ue/G,le=((ce-ne)*qe-(Te-ie)*Ue)/(ge*qe-xe*Ue);re=ne+ge*le-L.x,j=ie+xe*le-L.y;const q=re*re+j*j;if(q<=2)return new K(re,j);Se=Math.sqrt(q/2)}else{let S=!1;ge>Number.EPSILON?Ue>Number.EPSILON&&(S=!0):ge<-Number.EPSILON?Ue<-Number.EPSILON&&(S=!0):Math.sign(xe)===Math.sign(qe)&&(S=!0),S?(re=-xe,j=ge,Se=Math.sqrt(nt)):(re=ge,j=xe,Se=Math.sqrt(nt/2))}return new K(re/Se,j/Se)}const J=[];for(let L=0,se=F.length,Z=se-1,re=L+1;L<se;L++,Z++,re++)Z===se&&(Z=0),re===se&&(re=0),J[L]=X(F[L],F[Z],F[re]);const Q=[];let he,B=J.concat();for(let L=0,se=D.length;L<se;L++){const Z=D[L];he=[];for(let re=0,j=Z.length,Se=j-1,ge=re+1;re<j;re++,Se++,ge++)Se===j&&(Se=0),ge===j&&(ge=0),he[re]=X(Z[re],Z[Se],Z[ge]);Q.push(he),B=B.concat(he)}for(let L=0;L<g;L++){const se=L/g,Z=d*Math.cos(se*Math.PI/2),re=m*Math.sin(se*Math.PI/2)+x;for(let j=0,Se=F.length;j<Se;j++){const ge=z(F[j],J[j],re);_e(ge.x,ge.y,-Z)}for(let j=0,Se=D.length;j<Se;j++){const ge=D[j];he=Q[j];for(let xe=0,Ue=ge.length;xe<Ue;xe++){const qe=z(ge[xe],he[xe],re);_e(qe.x,qe.y,-Z)}}}const ee=m+x;for(let L=0;L<Y;L++){const se=h?z(E[L],B[L],ee):E[L];y?(C.copy(T.normals[0]).multiplyScalar(se.x),b.copy(T.binormals[0]).multiplyScalar(se.y),P.copy(v[0]).add(C).add(b),_e(P.x,P.y,P.z)):_e(se.x,se.y,0)}for(let L=1;L<=u;L++)for(let se=0;se<Y;se++){const Z=h?z(E[se],B[se],ee):E[se];y?(C.copy(T.normals[L]).multiplyScalar(Z.x),b.copy(T.binormals[L]).multiplyScalar(Z.y),P.copy(v[L]).add(C).add(b),_e(P.x,P.y,P.z)):_e(Z.x,Z.y,f/u*L)}for(let L=g-1;L>=0;L--){const se=L/g,Z=d*Math.cos(se*Math.PI/2),re=m*Math.sin(se*Math.PI/2)+x;for(let j=0,Se=F.length;j<Se;j++){const ge=z(F[j],J[j],re);_e(ge.x,ge.y,f+Z)}for(let j=0,Se=D.length;j<Se;j++){const ge=D[j];he=Q[j];for(let xe=0,Ue=ge.length;xe<Ue;xe++){const qe=z(ge[xe],he[xe],re);y?_e(qe.x,qe.y+v[u-1].y,v[u-1].x+Z):_e(qe.x,qe.y,f+Z)}}}te(),de();function te(){const L=i.length/3;if(h){let se=0,Z=Y*se;for(let re=0;re<V;re++){const j=N[re];Ne(j[2]+Z,j[1]+Z,j[0]+Z)}se=u+g*2,Z=Y*se;for(let re=0;re<V;re++){const j=N[re];Ne(j[0]+Z,j[1]+Z,j[2]+Z)}}else{for(let se=0;se<V;se++){const Z=N[se];Ne(Z[2],Z[1],Z[0])}for(let se=0;se<V;se++){const Z=N[se];Ne(Z[0]+Y*u,Z[1]+Y*u,Z[2]+Y*u)}}n.addGroup(L,i.length/3-L,0)}function de(){const L=i.length/3;let se=0;me(F,se),se+=F.length;for(let Z=0,re=D.length;Z<re;Z++){const j=D[Z];me(j,se),se+=j.length}n.addGroup(L,i.length/3-L,1)}function me(L,se){let Z=L.length;for(;--Z>=0;){const re=Z;let j=Z-1;j<0&&(j=L.length-1);for(let Se=0,ge=u+g*2;Se<ge;Se++){const xe=Y*Se,Ue=Y*(Se+1),qe=se+re+xe,nt=se+j+xe,R=se+j+Ue,S=se+re+Ue;Ce(qe,nt,R,S)}}}function _e(L,se,Z){c.push(L),c.push(se),c.push(Z)}function Ne(L,se,Z){Ke(L),Ke(se),Ke(Z);const re=i.length/3,j=_.generateTopUV(n,i,re-3,re-2,re-1);Le(j[0]),Le(j[1]),Le(j[2])}function Ce(L,se,Z,re){Ke(L),Ke(se),Ke(re),Ke(se),Ke(Z),Ke(re);const j=i.length/3,Se=_.generateSideWallUV(n,i,j-6,j-3,j-2,j-1);Le(Se[0]),Le(Se[1]),Le(Se[3]),Le(Se[1]),Le(Se[2]),Le(Se[3])}function Ke(L){i.push(c[L*3+0]),i.push(c[L*3+1]),i.push(c[L*3+2])}function Le(L){r.push(L.x),r.push(L.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return t_(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Wc[i.type]().fromJSON(i)),new ir(n,e.options)}}const e_={generateTopUV:function(s,e,t,n,i){const r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[i*3],u=e[i*3+1];return[new K(r,a),new K(o,c),new K(l,u)]},generateSideWallUV:function(s,e,t,n,i,r){const a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],f=e[n*3+2],h=e[i*3],d=e[i*3+1],m=e[i*3+2],x=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new K(a,1-c),new K(l,1-f),new K(h,1-m),new K(x,1-p)]:[new K(o,1-c),new K(u,1-f),new K(d,1-m),new K(g,1-p)]}};function t_(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class sr extends Rn{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new sr(e.radius,e.detail)}}class ls extends Rn{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ls(e.radius,e.detail)}}class rr extends Ge{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],l=[],u=[];let f=e;const h=(t-e)/i,d=new w,m=new K;for(let x=0;x<=i;x++){for(let g=0;g<=n;g++){const p=r+g/n*a;d.x=f*Math.cos(p),d.y=f*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),m.x=(d.x/t+1)/2,m.y=(d.y/t+1)/2,u.push(m.x,m.y)}f+=h}for(let x=0;x<i;x++){const g=x*(n+1);for(let p=0;p<n;p++){const _=p+g,v=_,y=_+n+1,T=_+n+2,b=_+1;o.push(v,y,b),o.push(y,T,b)}}this.setIndex(o),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(l,3)),this.setAttribute("uv",new ye(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ar extends Ge{constructor(e=new xi([new K(0,.5),new K(-.5,-.5),new K(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],a=[];let o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(o,c,u),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new ye(i,3)),this.setAttribute("normal",new ye(r,3)),this.setAttribute("uv",new ye(a,2));function l(u){const f=i.length/3,h=u.extractPoints(t);let d=h.shape;const m=h.holes;on.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,p=m.length;g<p;g++){const _=m[g];on.isClockWise(_)===!0&&(m[g]=_.reverse())}const x=on.triangulateShape(d,m);for(let g=0,p=m.length;g<p;g++){const _=m[g];d=d.concat(_)}for(let g=0,p=d.length;g<p;g++){const _=d[g];i.push(_.x,_.y,0),r.push(0,0,1),a.push(_.x,_.y)}for(let g=0,p=x.length;g<p;g++){const _=x[g],v=_[0]+f,y=_[1]+f,T=_[2]+f;n.push(v,y,T),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return n_(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const a=t[e.shapes[i]];n.push(a)}return new ar(n,e.curveSegments)}}function n_(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class us extends Ge{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],f=new w,h=new w,d=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){const _=[],v=p/n;let y=0;p===0&&a===0?y=.5/t:p===n&&c===Math.PI&&(y=-.5/t);for(let T=0;T<=t;T++){const b=T/t;f.x=-e*Math.cos(i+b*r)*Math.sin(a+v*o),f.y=e*Math.cos(a+v*o),f.z=e*Math.sin(i+b*r)*Math.sin(a+v*o),m.push(f.x,f.y,f.z),h.copy(f).normalize(),x.push(h.x,h.y,h.z),g.push(b+y,1-v),_.push(l++)}u.push(_)}for(let p=0;p<n;p++)for(let _=0;_<t;_++){const v=u[p][_+1],y=u[p][_],T=u[p+1][_],b=u[p+1][_+1];(p!==0||a>0)&&d.push(v,y,b),(p!==n-1||c<Math.PI)&&d.push(y,T,b)}this.setIndex(d),this.setAttribute("position",new ye(m,3)),this.setAttribute("normal",new ye(x,3)),this.setAttribute("uv",new ye(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new us(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class or extends Rn{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new or(e.radius,e.detail)}}class cr extends Ge{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],l=[],u=new w,f=new w,h=new w;for(let d=0;d<=n;d++)for(let m=0;m<=i;m++){const x=m/i*r,g=d/n*Math.PI*2;f.x=(e+t*Math.cos(g))*Math.cos(x),f.y=(e+t*Math.cos(g))*Math.sin(x),f.z=t*Math.sin(g),o.push(f.x,f.y,f.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),h.subVectors(f,u).normalize(),c.push(h.x,h.y,h.z),l.push(m/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=i;m++){const x=(i+1)*d+m-1,g=(i+1)*(d-1)+m-1,p=(i+1)*(d-1)+m,_=(i+1)*d+m;a.push(x,g,_),a.push(g,p,_)}this.setIndex(a),this.setAttribute("position",new ye(o,3)),this.setAttribute("normal",new ye(c,3)),this.setAttribute("uv",new ye(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class lr extends Ge{constructor(e=1,t=.4,n=64,i=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:a},n=Math.floor(n),i=Math.floor(i);const o=[],c=[],l=[],u=[],f=new w,h=new w,d=new w,m=new w,x=new w,g=new w,p=new w;for(let v=0;v<=n;++v){const y=v/n*r*Math.PI*2;_(y,r,a,e,d),_(y+.01,r,a,e,m),g.subVectors(m,d),p.addVectors(m,d),x.crossVectors(g,p),p.crossVectors(x,g),x.normalize(),p.normalize();for(let T=0;T<=i;++T){const b=T/i*Math.PI*2,C=-t*Math.cos(b),P=t*Math.sin(b);f.x=d.x+(C*p.x+P*x.x),f.y=d.y+(C*p.y+P*x.y),f.z=d.z+(C*p.z+P*x.z),c.push(f.x,f.y,f.z),h.subVectors(f,d).normalize(),l.push(h.x,h.y,h.z),u.push(v/n),u.push(T/i)}}for(let v=1;v<=n;v++)for(let y=1;y<=i;y++){const T=(i+1)*(v-1)+(y-1),b=(i+1)*v+(y-1),C=(i+1)*v+y,P=(i+1)*(v-1)+y;o.push(T,b,P),o.push(b,C,P)}this.setIndex(o),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(l,3)),this.setAttribute("uv",new ye(u,2));function _(v,y,T,b,C){const P=Math.cos(v),M=Math.sin(v),E=T/y*v,D=Math.cos(E);C.x=b*(2+D)*.5*P,C.y=b*(2+D)*M*.5,C.z=b*Math.sin(E)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lr(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class ur extends Ge{constructor(e=new Gc(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new w,c=new w,l=new K;let u=new w;const f=[],h=[],d=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new ye(f,3)),this.setAttribute("normal",new ye(h,3)),this.setAttribute("uv",new ye(d,2));function x(){for(let v=0;v<t;v++)g(v);g(r===!1?t:0),_(),p()}function g(v){u=e.getPointAt(v/t,u);const y=a.normals[v],T=a.binormals[v];for(let b=0;b<=i;b++){const C=b/i*Math.PI*2,P=Math.sin(C),M=-Math.cos(C);c.x=M*y.x+P*T.x,c.y=M*y.y+P*T.y,c.z=M*y.z+P*T.z,c.normalize(),h.push(c.x,c.y,c.z),o.x=u.x+n*c.x,o.y=u.y+n*c.y,o.z=u.z+n*c.z,f.push(o.x,o.y,o.z)}}function p(){for(let v=1;v<=t;v++)for(let y=1;y<=i;y++){const T=(i+1)*(v-1)+(y-1),b=(i+1)*v+(y-1),C=(i+1)*v+y,P=(i+1)*(v-1)+y;m.push(T,b,P),m.push(b,C,P)}}function _(){for(let v=0;v<=t;v++)for(let y=0;y<=i;y++)l.x=v/t,l.y=y/i,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ur(new Wc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Ef extends Ge{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new w,r=new w;if(e.index!==null){const a=e.attributes.position,o=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){const f=c[l],h=f.start,d=f.count;for(let m=h,x=h+d;m<x;m+=3)for(let g=0;g<3;g++){const p=o.getX(m+g),_=o.getX(m+(g+1)%3);i.fromBufferAttribute(a,p),r.fromBufferAttribute(a,_),gu(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{const a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){const u=3*o+l,f=3*o+(l+1)%3;i.fromBufferAttribute(a,u),r.fromBufferAttribute(a,f),gu(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new ye(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function gu(s,e,t){const n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var xu=Object.freeze({__proto__:null,BoxGeometry:Xn,CapsuleGeometry:js,CircleGeometry:er,ConeGeometry:tr,CylinderGeometry:Ei,DodecahedronGeometry:nr,EdgesGeometry:Mf,ExtrudeGeometry:ir,IcosahedronGeometry:sr,LatheGeometry:cs,OctahedronGeometry:ls,PlaneGeometry:as,PolyhedronGeometry:Rn,RingGeometry:rr,ShapeGeometry:ar,SphereGeometry:us,TetrahedronGeometry:or,TorusGeometry:cr,TorusKnotGeometry:lr,TubeGeometry:ur,WireframeGeometry:Ef});class Af extends Tt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new pe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class wf extends cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class qc extends Tt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wn,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Rf extends qc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new K(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Cf extends Tt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new pe(16777215),this.specular=new pe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wn,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$s,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Pf extends Tt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new pe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wn,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Lf extends Tt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wn,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class If extends Tt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wn,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$s,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Uf extends Tt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new pe(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wn,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Df extends Pt{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Ht(s,e,t){return Xc(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)}function fi(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Xc(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Nf(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function lc(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function Yc(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}function i_(s,e,t,n,i=30){const r=s.clone();r.name=e;const a=[];for(let c=0;c<r.tracks.length;++c){const l=r.tracks[c],u=l.getValueSize(),f=[],h=[];for(let d=0;d<l.times.length;++d){const m=l.times[d]*i;if(!(m<t||m>=n)){f.push(l.times[d]);for(let x=0;x<u;++x)h.push(l.values[d*u+x])}}f.length!==0&&(l.times=fi(f,l.times.constructor),l.values=fi(h,l.values.constructor),a.push(l))}r.tracks=a;let o=1/0;for(let c=0;c<r.tracks.length;++c)o>r.tracks[c].times[0]&&(o=r.tracks[c].times[0]);for(let c=0;c<r.tracks.length;++c)r.tracks[c].shift(-1*o);return r.resetDuration(),r}function s_(s,e=0,t=s,n=30){n<=0&&(n=30);const i=t.tracks.length,r=e/n;for(let a=0;a<i;++a){const o=t.tracks[a],c=o.ValueTypeName;if(c==="bool"||c==="string")continue;const l=s.tracks.find(function(p){return p.name===o.name&&p.ValueTypeName===c});if(l===void 0)continue;let u=0;const f=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=f/3);let h=0;const d=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=d/3);const m=o.times.length-1;let x;if(r<=o.times[0]){const p=u,_=f-u;x=Ht(o.values,p,_)}else if(r>=o.times[m]){const p=m*f+u,_=p+f-u;x=Ht(o.values,p,_)}else{const p=o.createInterpolant(),_=u,v=f-u;p.evaluate(r),x=Ht(p.resultBuffer,_,v)}c==="quaternion"&&new Dt().fromArray(x).normalize().conjugate().toArray(x);const g=l.times.length;for(let p=0;p<g;++p){const _=p*d+h;if(c==="quaternion")Dt.multiplyQuaternionsFlat(l.values,_,x,0,l.values,_);else{const v=d-h*2;for(let y=0;y<v;++y)l.values[_+y]-=x[y]}}}return s.blendMode=Tc,s}const r_={arraySlice:Ht,convertArray:fi,isTypedArray:Xc,getKeyframeOrder:Nf,sortedArray:lc,flattenJSON:Yc,subclip:i_,makeClipAdditive:s_};class hr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Of extends hr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:li,endingEnd:li}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case ui:r=e,o=2*t-n;break;case Fs:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ui:a=e,c=2*n-t;break;case Fs:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,m=(n-t)/(i-t),x=m*m,g=x*m,p=-h*g+2*h*x-h*m,_=(1+h)*g+(-1.5-2*h)*x+(-.5+h)*m+1,v=(-1-d)*g+(1.5+d)*x+.5*m,y=d*g-d*x;for(let T=0;T!==o;++T)r[T]=p*a[u+T]+_*a[l+T]+v*a[c+T]+y*a[f+T];return r}}class Zc extends hr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(i-t),f=1-u;for(let h=0;h!==o;++h)r[h]=a[l+h]*f+a[c+h]*u;return r}}class Ff extends hr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class jt{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=fi(t,this.TimeBufferType),this.values=fi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:fi(e.times,Array),values:fi(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ff(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Zc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Of(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ns:t=this.InterpolantFactoryMethodDiscrete;break;case Os:t=this.InterpolantFactoryMethodLinear;break;case ua:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ns;case this.InterpolantFactoryMethodLinear:return Os;case this.InterpolantFactoryMethodSmooth:return ua}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=Ht(n,r,a),this.values=Ht(this.values,r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&Xc(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=Ht(this.times),t=Ht(this.values),n=this.getValueSize(),i=this.getInterpolation()===ua,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(i)c=!0;else{const f=o*n,h=f-n,d=f+n;for(let m=0;m!==n;++m){const x=t[f+m];if(x!==t[h+m]||x!==t[d+m]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const f=o*n,h=a*n;for(let d=0;d!==n;++d)t[h+d]=t[f+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=Ht(e,0,a),this.values=Ht(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=Ht(this.times,0),t=Ht(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}jt.prototype.TimeBufferType=Float32Array;jt.prototype.ValueBufferType=Float32Array;jt.prototype.DefaultInterpolation=Os;class Ai extends jt{}Ai.prototype.ValueTypeName="bool";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=Ns;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;class Jc extends jt{}Jc.prototype.ValueTypeName="color";class qs extends jt{}qs.prototype.ValueTypeName="number";class zf extends hr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let u=l+o;l!==u;l+=4)Dt.slerpFlat(r,0,a,l-o,a,l,c);return r}}class hs extends jt{InterpolantFactoryMethodLinear(e){return new zf(this.times,this.values,this.getValueSize(),e)}}hs.prototype.ValueTypeName="quaternion";hs.prototype.DefaultInterpolation=Os;hs.prototype.InterpolantFactoryMethodSmooth=void 0;class wi extends jt{}wi.prototype.ValueTypeName="string";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=Ns;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;class Xs extends jt{}Xs.prototype.ValueTypeName="vector";class Ys{constructor(e,t=-1,n,i=ba){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Bt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(o_(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(jt.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const u=Nf(c);c=lc(c,1,u),l=lc(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new qs(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],u=l.name.match(r);if(u&&u.length>1){const f=u[1];let h=i[f];h||(i[f]=h=[]),h.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,h,d,m,x){if(d.length!==0){const g=[],p=[];Yc(d,g,p,m),g.length!==0&&x.push(new f(h,g,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let f=0;f<l.length;f++){const h=l[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const d={};let m;for(m=0;m<h.length;m++)if(h[m].morphTargets)for(let x=0;x<h[m].morphTargets.length;x++)d[h[m].morphTargets[x]]=-1;for(const x in d){const g=[],p=[];for(let _=0;_!==h[m].morphTargets.length;++_){const v=h[m];g.push(v.time),p.push(v.morphTarget===x?1:0)}i.push(new qs(".morphTargetInfluence["+x+"]",g,p))}c=d.length*a}else{const d=".bones["+t[f].name+"]";n(Xs,d+".position",h,"pos",i),n(hs,d+".quaternion",h,"rot",i),n(Xs,d+".scale",h,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function a_(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return qs;case"vector":case"vector2":case"vector3":case"vector4":return Xs;case"color":return Jc;case"quaternion":return hs;case"bool":case"boolean":return Ai;case"string":return wi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function o_(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=a_(s.type);if(s.times===void 0){const t=[],n=[];Yc(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Si={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class $c{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){const d=l[f],m=l[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null}}}const Bf=new $c;class kt{constructor(e){this.manager=e!==void 0?e:Bf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const vn={};class c_ extends Error{constructor(e,t){super(e),this.response=t}}class An extends kt{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Si.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(vn[e]!==void 0){vn[e].push({onLoad:t,onProgress:n,onError:i});return}vn[e]=[],vn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=vn[e],f=l.body.getReader(),h=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),d=h?parseInt(h):0,m=d!==0;let x=0;const g=new ReadableStream({start(p){_();function _(){f.read().then(({done:v,value:y})=>{if(v)p.close();else{x+=y.byteLength;const T=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:d});for(let b=0,C=u.length;b<C;b++){const P=u[b];P.onProgress&&P.onProgress(T)}p.enqueue(y),_()}})}}});return new Response(g)}else throw new c_(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o===void 0)return l.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return l.arrayBuffer().then(m=>d.decode(m))}}}).then(l=>{Si.add(e,l);const u=vn[e];delete vn[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(l)}}).catch(l=>{const u=vn[e];if(u===void 0)throw this.manager.itemError(e),l;delete vn[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class l_ extends kt{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new An(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=Ys.parse(e[n]);t.push(i)}return t}}class u_ extends kt{constructor(e){super(e)}load(e,t,n,i){const r=this,a=[],o=new zc,c=new An(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(r.withCredentials);let l=0;function u(f){c.load(e[f],function(h){const d=r.parse(h,!0);a[f]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},l+=1,l===6&&(d.mipmapCount===1&&(o.minFilter=at),o.image=a,o.format=d.format,o.needsUpdate=!0,t&&t(o))},n,i)}if(Array.isArray(e))for(let f=0,h=e.length;f<h;++f)u(f);else c.load(e,function(f){const h=r.parse(f,!0);if(h.isCubemap){const d=h.mipmaps.length/h.mipmapCount;for(let m=0;m<d;m++){a[m]={mipmaps:[]};for(let x=0;x<h.mipmapCount;x++)a[m].mipmaps.push(h.mipmaps[m*h.mipmapCount+x]),a[m].format=h.format,a[m].width=h.width,a[m].height=h.height}o.image=a}else o.image.width=h.width,o.image.height=h.height,o.mipmaps=h.mipmaps;h.mipmapCount===1&&(o.minFilter=at),o.format=h.format,o.needsUpdate=!0,t&&t(o)},n,i);return o}}class Zs extends kt{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Si.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=ks("img");function c(){u(),Si.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(f){u(),i&&i(f),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class h_ extends kt{constructor(e){super(e)}load(e,t,n,i){const r=new Qs;r.colorSpace=Fe;const a=new Zs(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function c(l){a.load(e[l],function(u){r.images[l]=u,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let l=0;l<e.length;++l)c(l);return r}}class f_ extends kt{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new gi,o=new An(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(c){const l=r.parse(c);!l||(l.image!==void 0?a.image=l.image:l.data!==void 0&&(a.image.width=l.width,a.image.height=l.height,a.image.data=l.data),a.wrapS=l.wrapS!==void 0?l.wrapS:St,a.wrapT=l.wrapT!==void 0?l.wrapT:St,a.magFilter=l.magFilter!==void 0?l.magFilter:at,a.minFilter=l.minFilter!==void 0?l.minFilter:at,a.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0?a.colorSpace=l.colorSpace:l.encoding!==void 0&&(a.encoding=l.encoding),l.flipY!==void 0&&(a.flipY=l.flipY),l.format!==void 0&&(a.format=l.format),l.type!==void 0&&(a.type=l.type),l.mipmaps!==void 0&&(a.mipmaps=l.mipmaps,a.minFilter=Gn),l.mipmapCount===1&&(a.minFilter=at),l.generateMipmaps!==void 0&&(a.generateMipmaps=l.generateMipmaps),a.needsUpdate=!0,t&&t(a,l))},n,i),a}}class d_ extends kt{constructor(e){super(e)}load(e,t,n,i){const r=new ht,a=new Zs(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Yn extends Je{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class kf extends Yn{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const yo=new De,vu=new w,_u=new w;class Kc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new K(512,512),this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Aa,this._frameExtents=new K(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;vu.setFromMatrixPosition(e.matrixWorld),t.position.copy(vu),_u.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_u),t.updateMatrixWorld(),yo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(yo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class p_ extends Kc{constructor(){super(new _t(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ts*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Vf extends Yn{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new p_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const yu=new De,bs=new w,Mo=new w;class m_ extends Kc{constructor(){super(new _t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new K(4,2),this._viewportCount=6,this._viewports=[new $e(2,1,1,1),new $e(0,1,1,1),new $e(3,1,1,1),new $e(1,1,1,1),new $e(3,0,1,1),new $e(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),bs.setFromMatrixPosition(e.matrixWorld),n.position.copy(bs),Mo.copy(n.position),Mo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Mo),n.updateMatrixWorld(),i.makeTranslation(-bs.x,-bs.y,-bs.z),yu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yu)}}class Gf extends Yn{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new m_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class g_ extends Kc{constructor(){super(new wa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hf extends Yn{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.shadow=new g_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Wf extends Yn{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class qf extends Yn{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class Xf{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new w)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*r),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*i)),t.addScaledVector(a[5],1.092548*(i*r)),t.addScaledVector(a[6],.315392*(3*r*r-1)),t.addScaledVector(a[7],1.092548*(n*r)),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*i),t.addScaledVector(a[2],2*.511664*r),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*i),t.addScaledVector(a[5],2*.429043*i*r),t.addScaledVector(a[6],.743125*r*r-.247708),t.addScaledVector(a[7],2*.429043*n*r),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}}class Oa extends Yn{constructor(e=new Xf,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class Fa extends kt{constructor(e){super(e),this.textures={}}load(e,t,n,i){const r=this,a=new An(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(r){return t[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),t[r]}const i=Fa.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new pe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==1&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const r in e.uniforms){const a=e.uniforms[r];switch(i.uniforms[r]={},a.type){case"t":i.uniforms[r].value=n(a.value);break;case"c":i.uniforms[r].value=new pe().setHex(a.value);break;case"v2":i.uniforms[r].value=new K().fromArray(a.value);break;case"v3":i.uniforms[r].value=new w().fromArray(a.value);break;case"v4":i.uniforms[r].value=new $e().fromArray(a.value);break;case"m3":i.uniforms[r].value=new ke().fromArray(a.value);break;case"m4":i.uniforms[r].value=new De().fromArray(a.value);break;default:i.uniforms[r].value=a.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)i.extensions[r]=e.extensions[r];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new K().fromArray(r)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new K().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}static createMaterialFromType(e){const t={ShadowMaterial:Af,SpriteMaterial:Nc,RawShaderMaterial:wf,ShaderMaterial:cn,PointsMaterial:Fc,MeshPhysicalMaterial:Rf,MeshStandardMaterial:qc,MeshPhongMaterial:Cf,MeshToonMaterial:Pf,MeshNormalMaterial:Lf,MeshLambertMaterial:If,MeshDepthMaterial:Uc,MeshDistanceMaterial:Dc,MeshBasicMaterial:qn,MeshMatcapMaterial:Uf,LineDashedMaterial:Df,LineBasicMaterial:Pt,Material:Tt};return new t[e]}}class uc{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Yf extends Ge{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Zf extends kt{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new An(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(d,m){if(t[m]!==void 0)return t[m];const g=d.interleavedBuffers[m],p=r(d,g.buffer),_=$i(g.type,p),v=new La(_,g.stride);return v.uuid=g.uuid,t[m]=v,v}function r(d,m){if(n[m]!==void 0)return n[m];const g=d.arrayBuffers[m],p=new Uint32Array(g).buffer;return n[m]=p,p}const a=e.isInstancedBufferGeometry?new Yf:new Ge,o=e.data.index;if(o!==void 0){const d=$i(o.type,o.array);a.setIndex(new Qe(d,1))}const c=e.data.attributes;for(const d in c){const m=c[d];let x;if(m.isInterleavedBufferAttribute){const g=i(e.data,m.data);x=new Mi(g,m.itemSize,m.offset,m.normalized)}else{const g=$i(m.type,m.array),p=m.isInstancedBufferAttribute?is:Qe;x=new p(g,m.itemSize,m.normalized)}m.name!==void 0&&(x.name=m.name),m.usage!==void 0&&x.setUsage(m.usage),m.updateRange!==void 0&&(x.updateRange.offset=m.updateRange.offset,x.updateRange.count=m.updateRange.count),a.setAttribute(d,x)}const l=e.data.morphAttributes;if(l)for(const d in l){const m=l[d],x=[];for(let g=0,p=m.length;g<p;g++){const _=m[g];let v;if(_.isInterleavedBufferAttribute){const y=i(e.data,_.data);v=new Mi(y,_.itemSize,_.offset,_.normalized)}else{const y=$i(_.type,_.array);v=new Qe(y,_.itemSize,_.normalized)}_.name!==void 0&&(v.name=_.name),x.push(v)}a.morphAttributes[d]=x}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const f=e.data.groups||e.data.drawcalls||e.data.offsets;if(f!==void 0)for(let d=0,m=f.length;d!==m;++d){const x=f[d];a.addGroup(x.start,x.count,x.materialIndex)}const h=e.data.boundingSphere;if(h!==void 0){const d=new w;h.center!==void 0&&d.fromArray(h.center),a.boundingSphere=new Kt(d,h.radius)}return e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}class x_ extends kt{constructor(e){super(e)}load(e,t,n,i){const r=this,a=this.path===""?uc.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;const o=new An(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(c){let l=null;try{l=JSON.parse(c)}catch(f){i!==void 0&&i(f),console.error("THREE:ObjectLoader: Can't parse "+e+".",f.message);return}const u=l.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}r.parse(l,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?uc.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const r=new An(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const a=await r.loadAsync(e,t),o=JSON.parse(a),c=o.metadata;if(c===void 0||c.type===void 0||c.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(o)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,i),a=this.parseImages(e.images,function(){t!==void 0&&t(l)}),o=this.parseTextures(e.textures,a),c=this.parseMaterials(e.materials,o),l=this.parseObject(e.object,r,c,o,n),u=this.parseSkeletons(e.skeletons,l);if(this.bindSkeletons(l,u),t!==void 0){let f=!1;for(const h in a)if(a[h].data instanceof HTMLImageElement){f=!0;break}f===!1&&t(l)}return l}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),r=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,r),o=this.parseMaterials(e.materials,a),c=this.parseObject(e.object,i,o,a,t),l=this.parseSkeletons(e.skeletons,c);return this.bindSkeletons(c,l),c}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const r=new xi().fromJSON(e[n]);t[r.uuid]=r}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),e!==void 0)for(let r=0,a=e.length;r<a;r++){const o=new Ia().fromJSON(e[r],i);n[o.uuid]=o}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new Zf;for(let r=0,a=e.length;r<a;r++){let o;const c=e[r];switch(c.type){case"BufferGeometry":case"InstancedBufferGeometry":o=i.parse(c);break;default:c.type in xu?o=xu[c.type].fromJSON(c,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${c.type}"`)}o.uuid=c.uuid,c.name!==void 0&&(o.name=c.name),c.userData!==void 0&&(o.userData=c.userData),n[c.uuid]=o}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const r=new Fa;r.setTextures(t);for(let a=0,o=e.length;a<o;a++){const c=e[a];n[c.uuid]===void 0&&(n[c.uuid]=r.parse(c)),i[c.uuid]=n[c.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],r=Ys.parse(i);t[r.uuid]=r}return t}parseImages(e,t){const n=this,i={};let r;function a(c){return n.manager.itemStart(c),r.load(c,function(){n.manager.itemEnd(c)},void 0,function(){n.manager.itemError(c),n.manager.itemEnd(c)})}function o(c){if(typeof c=="string"){const l=c,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:n.resourcePath+l;return a(u)}else return c.data?{data:$i(c.type,c.data),width:c.width,height:c.height}:null}if(e!==void 0&&e.length>0){const c=new $c(t);r=new Zs(c),r.setCrossOrigin(this.crossOrigin);for(let l=0,u=e.length;l<u;l++){const f=e[l],h=f.url;if(Array.isArray(h)){const d=[];for(let m=0,x=h.length;m<x;m++){const g=h[m],p=o(g);p!==null&&(p instanceof HTMLImageElement?d.push(p):d.push(new gi(p.data,p.width,p.height)))}i[f.uuid]=new hi(d)}else{const d=o(f.url);i[f.uuid]=new hi(d)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function r(a){if(typeof a=="string"){const o=a,c=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await i.loadAsync(c)}else return a.data?{data:$i(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){i=new Zs(this.manager),i.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){const c=e[a],l=c.url;if(Array.isArray(l)){const u=[];for(let f=0,h=l.length;f<h;f++){const d=l[f],m=await r(d);m!==null&&(m instanceof HTMLImageElement?u.push(m):u.push(new gi(m.data,m.width,m.height)))}n[c.uuid]=new hi(u)}else{const u=await r(c.url);n[c.uuid]=new hi(u)}}}return n}parseTextures(e,t){function n(r,a){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),a[r])}const i={};if(e!==void 0)for(let r=0,a=e.length;r<a;r++){const o=e[r];o.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",o.image);const c=t[o.image],l=c.data;let u;Array.isArray(l)?(u=new Qs,l.length===6&&(u.needsUpdate=!0)):(l&&l.data?u=new gi:u=new ht,l&&(u.needsUpdate=!0)),u.source=c,u.uuid=o.uuid,o.name!==void 0&&(u.name=o.name),o.mapping!==void 0&&(u.mapping=n(o.mapping,v_)),o.channel!==void 0&&(u.channel=o.channel),o.offset!==void 0&&u.offset.fromArray(o.offset),o.repeat!==void 0&&u.repeat.fromArray(o.repeat),o.center!==void 0&&u.center.fromArray(o.center),o.rotation!==void 0&&(u.rotation=o.rotation),o.wrap!==void 0&&(u.wrapS=n(o.wrap[0],Mu),u.wrapT=n(o.wrap[1],Mu)),o.format!==void 0&&(u.format=o.format),o.internalFormat!==void 0&&(u.internalFormat=o.internalFormat),o.type!==void 0&&(u.type=o.type),o.colorSpace!==void 0&&(u.colorSpace=o.colorSpace),o.encoding!==void 0&&(u.encoding=o.encoding),o.minFilter!==void 0&&(u.minFilter=n(o.minFilter,bu)),o.magFilter!==void 0&&(u.magFilter=n(o.magFilter,bu)),o.anisotropy!==void 0&&(u.anisotropy=o.anisotropy),o.flipY!==void 0&&(u.flipY=o.flipY),o.generateMipmaps!==void 0&&(u.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(u.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(u.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(u.compareFunction=o.compareFunction),o.userData!==void 0&&(u.userData=o.userData),i[o.uuid]=u}return i}parseObject(e,t,n,i,r){let a;function o(h){return t[h]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",h),t[h]}function c(h){if(h!==void 0){if(Array.isArray(h)){const d=[];for(let m=0,x=h.length;m<x;m++){const g=h[m];n[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),d.push(n[g])}return d}return n[h]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",h),n[h]}}function l(h){return i[h]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",h),i[h]}let u,f;switch(e.type){case"Scene":a=new cf,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new pe(e.background):a.background=l(e.background)),e.environment!==void 0&&(a.environment=l(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new Pa(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new Ca(e.fog.color,e.fog.density))),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity);break;case"PerspectiveCamera":a=new _t(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new wa(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new Wf(e.color,e.intensity);break;case"DirectionalLight":a=new Hf(e.color,e.intensity);break;case"PointLight":a=new Gf(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new qf(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new Vf(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":a=new kf(e.color,e.groundColor,e.intensity);break;case"LightProbe":a=new Oa().fromJSON(e);break;case"SkinnedMesh":u=o(e.geometry),f=c(e.material),a=new ff(u,f),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":u=o(e.geometry),f=c(e.material),a=new yt(u,f);break;case"InstancedMesh":u=o(e.geometry),f=c(e.material);const h=e.count,d=e.instanceMatrix,m=e.instanceColor;a=new df(u,f,h),a.instanceMatrix=new is(new Float32Array(d.array),16),m!==void 0&&(a.instanceColor=new is(new Float32Array(m.array),m.itemSize));break;case"LOD":a=new hf;break;case"Line":a=new Hn(o(e.geometry),c(e.material));break;case"LineLoop":a=new pf(o(e.geometry),c(e.material));break;case"LineSegments":a=new un(o(e.geometry),c(e.material));break;case"PointCloud":case"Points":a=new mf(o(e.geometry),c(e.material));break;case"Sprite":a=new uf(c(e.material));break;case"Group":a=new Qi;break;case"Bone":a=new Oc;break;default:a=new Je}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){const h=e.children;for(let d=0;d<h.length;d++)a.add(this.parseObject(h[d],t,n,i,r))}if(e.animations!==void 0){const h=e.animations;for(let d=0;d<h.length;d++){const m=h[d];a.animations.push(r[m])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);const h=e.levels;for(let d=0;d<h.length;d++){const m=h[d],x=a.getObjectByProperty("uuid",m.object);x!==void 0&&a.addLevel(x,m.distance,m.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}}const v_={UVMapping:ya,CubeReflectionMapping:kn,CubeRefractionMapping:Vn,EquirectangularReflectionMapping:Ls,EquirectangularRefractionMapping:Is,CubeUVReflectionMapping:ss},Mu={RepeatWrapping:Us,ClampToEdgeWrapping:St,MirroredRepeatWrapping:Ds},bu={NearestFilter:ut,NearestMipmapNearestFilter:pa,NearestMipmapLinearFilter:As,LinearFilter:at,LinearMipmapNearestFilter:xc,LinearMipmapLinearFilter:Gn};class __ extends kt{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Si.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){Si.add(e,c),t&&t(c),r.manager.itemEnd(e)}).catch(function(c){i&&i(c),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}let Zr;class Qc{static getContext(){return Zr===void 0&&(Zr=new(window.AudioContext||window.webkitAudioContext)),Zr}static setContext(e){Zr=e}}class y_ extends kt{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new An(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){try{const l=c.slice(0);Qc.getContext().decodeAudioData(l,function(f){t(f)},o)}catch(l){o(l)}},n,i);function o(c){i?i(c):console.error(c),r.manager.itemError(e)}}}class M_ extends Oa{constructor(e,t,n=1){super(void 0,n),this.isHemisphereLightProbe=!0;const i=new pe().set(e),r=new pe().set(t),a=new w(i.r,i.g,i.b),o=new w(r.r,r.g,r.b),c=Math.sqrt(Math.PI),l=c*Math.sqrt(.75);this.sh.coefficients[0].copy(a).add(o).multiplyScalar(c),this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(l)}}class b_ extends Oa{constructor(e,t=1){super(void 0,t),this.isAmbientLightProbe=!0;const n=new pe().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}const Su=new De,Tu=new De,ti=new De;class S_{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new _t,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new _t,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,ti.copy(e.projectionMatrix);const i=t.eyeSep/2,r=i*t.near/t.focus,a=t.near*Math.tan(mi*t.fov*.5)/t.zoom;let o,c;Tu.elements[12]=-i,Su.elements[12]=i,o=-a*t.aspect+r,c=a*t.aspect+r,ti.elements[0]=2*t.near/(c-o),ti.elements[8]=(c+o)/(c-o),this.cameraL.projectionMatrix.copy(ti),o=-a*t.aspect-r,c=a*t.aspect-r,ti.elements[0]=2*t.near/(c-o),ti.elements[8]=(c+o)/(c-o),this.cameraR.projectionMatrix.copy(ti)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Tu),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(Su)}}class Jf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Eu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Eu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Eu(){return(typeof performance>"u"?Date:performance).now()}const ni=new w,Au=new Dt,T_=new w,ii=new w;class E_ extends Je{constructor(){super(),this.type="AudioListener",this.context=Qc.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Jf}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(ni,Au,T_),ii.set(0,0,-1).applyQuaternion(Au),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(ni.x,i),t.positionY.linearRampToValueAtTime(ni.y,i),t.positionZ.linearRampToValueAtTime(ni.z,i),t.forwardX.linearRampToValueAtTime(ii.x,i),t.forwardY.linearRampToValueAtTime(ii.y,i),t.forwardZ.linearRampToValueAtTime(ii.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(ni.x,ni.y,ni.z),t.setOrientation(ii.x,ii.y,ii.z,n.x,n.y,n.z)}}class $f extends Je{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const si=new w,wu=new Dt,A_=new w,ri=new w;class w_ extends $f{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(si,wu,A_),ri.set(0,0,1).applyQuaternion(wu);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(si.x,n),t.positionY.linearRampToValueAtTime(si.y,n),t.positionZ.linearRampToValueAtTime(si.z,n),t.orientationX.linearRampToValueAtTime(ri.x,n),t.orientationY.linearRampToValueAtTime(ri.y,n),t.orientationZ.linearRampToValueAtTime(ri.z,n)}else t.setPosition(si.x,si.y,si.z),t.setOrientation(ri.x,ri.y,ri.z)}}class R_{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class Kf{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Dt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const a=this._workIndex*r;Dt.multiplyQuaternionsFlat(e,a,e,t,e,n),Dt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const c=t+o;e[c]=e[c]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const jc="\\[\\]\\.:\\/",C_=new RegExp("["+jc+"]","g"),el="[^"+jc+"]",P_="[^"+jc.replace("\\.","")+"]",L_=/((?:WC+[\/:])*)/.source.replace("WC",el),I_=/(WCOD+)?/.source.replace("WCOD",P_),U_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",el),D_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",el),N_=new RegExp("^"+L_+I_+U_+D_+"$"),O_=["material","materials","bones","map"];class F_{constructor(e,t,n){const i=n||Ye.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ye{constructor(e,t,n){this.path=t,this.parsedPath=n||Ye.parseTrackName(t),this.node=Ye.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ye.Composite(e,t,n):new Ye(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(C_,"")}static parseTrackName(e){const t=N_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);O_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Ye.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[i];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ye.Composite=F_;Ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ye.prototype.GetterByBindingType=[Ye.prototype._getValue_direct,Ye.prototype._getValue_array,Ye.prototype._getValue_arrayElement,Ye.prototype._getValue_toArray];Ye.prototype.SetterByBindingTypeAndVersioning=[[Ye.prototype._setValue_direct,Ye.prototype._setValue_direct_setNeedsUpdate,Ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_array,Ye.prototype._setValue_array_setNeedsUpdate,Ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_arrayElement,Ye.prototype._setValue_arrayElement_setNeedsUpdate,Ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_fromArray,Ye.prototype._setValue_fromArray_setNeedsUpdate,Ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class z_{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Bt(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,a=r.length;let o,c=e.length,l=this.nCachedObjects_;for(let u=0,f=arguments.length;u!==f;++u){const h=arguments[u],d=h.uuid;let m=t[d];if(m===void 0){m=c++,t[d]=m,e.push(h);for(let x=0,g=a;x!==g;++x)r[x].push(new Ye(h,n[x],i[x]))}else if(m<l){o=e[m];const x=--l,g=e[x];t[g.uuid]=m,e[m]=g,t[d]=x,e[x]=h;for(let p=0,_=a;p!==_;++p){const v=r[p],y=v[x];let T=v[m];v[m]=y,T===void 0&&(T=new Ye(h,n[p],i[p])),v[x]=T}}else e[m]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){const c=arguments[a],l=c.uuid,u=t[l];if(u!==void 0&&u>=r){const f=r++,h=e[f];t[h.uuid]=u,e[u]=h,t[l]=f,e[f]=c;for(let d=0,m=i;d!==m;++d){const x=n[d],g=x[f],p=x[u];x[u]=g,x[f]=p}}}this.nCachedObjects_=r}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,a=e.length;for(let o=0,c=arguments.length;o!==c;++o){const l=arguments[o],u=l.uuid,f=t[u];if(f!==void 0)if(delete t[u],f<r){const h=--r,d=e[h],m=--a,x=e[m];t[d.uuid]=f,e[f]=d,t[x.uuid]=h,e[h]=x,e.pop();for(let g=0,p=i;g!==p;++g){const _=n[g],v=_[h],y=_[m];_[f]=v,_[h]=y,_.pop()}}else{const h=--a,d=e[h];h>0&&(t[d.uuid]=f),e[f]=d,e.pop();for(let m=0,x=i;m!==x;++m){const g=n[m];g[f]=g[h],g.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const r=this._bindings;if(i!==void 0)return r[i];const a=this._paths,o=this._parsedPaths,c=this._objects,l=c.length,u=this.nCachedObjects_,f=new Array(l);i=r.length,n[e]=i,a.push(e),o.push(t),r.push(f);for(let h=u,d=c.length;h!==d;++h){const m=c[h];f[h]=new Ye(m,e,t)}return f}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,r=this._parsedPaths,a=this._bindings,o=a.length-1,c=a[o],l=e[o];t[l]=n,a[n]=c,a.pop(),r[n]=r[o],r.pop(),i[n]=i[o],i.pop()}}}class Qf{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,a=r.length,o=new Array(a),c={endingStart:li,endingEnd:li};for(let l=0;l!==a;++l){const u=r[l].createInterpolant(null);o[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Ph,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Tc:for(let u=0,f=c.length;u!==f;++u)c[u].evaluate(a),l[u].accumulateAdditive(o);break;case ba:default:for(let u=0,f=c.length;u!==f;++u)c[u].evaluate(a),l[u].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;n!==null&&(t*=n.evaluate(e)[0],e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const a=n===Lh;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===Ch){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=ui,i.endingEnd=ui):(e?i.endingStart=this.zeroSlopeAtStart?ui:li:i.endingStart=Fs,t?i.endingEnd=this.zeroSlopeAtEnd?ui:li:i.endingEnd=Fs)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}}const B_=new Float32Array(1);class k_ extends wn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let f=0;f!==r;++f){const h=i[f],d=h.name;let m=u[d];if(m!==void 0)++m.referenceCount,a[f]=m;else{if(m=a[f],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,d));continue}const x=t&&t._propertyBindings[f].binding.parsedPath;m=new Kf(Ye.create(n,d,x),h.ValueTypeName,h.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,d),a[f]=m}o[f].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;const f=o.actionByRoot,h=(e._localRoot||this._root).uuid;delete f[h],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Zc(new Float32Array(2),new Float32Array(2),1,B_),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let a=typeof e=="string"?Ys.findByName(i,e):e;const o=a!==null?a.uuid:e,c=this._actionsByClip[o];let l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=ba),c!==void 0){const f=c.actionByRoot[r];if(f!==void 0&&f.blendMode===n)return f;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;const u=new Qf(this,a,t,n);return this._bindAction(u,l),this._addInactiveAction(u,o,r),u}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?Ys.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,a);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){const l=a[o];this._deactivateAction(l);const u=l._cacheIndex,f=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,f._cacheIndex=u,t[u]=f,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class tl{constructor(e){this.value=e}clone(){return new tl(this.value.clone===void 0?this.value:this.value.clone())}}let V_=0;class G_ extends wn{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:V_++}),this.name="",this.usage=zs,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++)this.uniforms.push(t[n].clone());return this}clone(){return new this.constructor().copy(this)}}class H_ extends La{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class W_{constructor(e,t,n,i,r){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}class q_{constructor(e,t,n=0,i=1/0){this.ray=new rs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ta,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return hc(e,this,n,t),n.sort(Ru),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)hc(e[i],this,n,t);return n.sort(Ru),n}}function Ru(s,e){return s.distance-e.distance}function hc(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,a=i.length;r<a;r++)hc(i[r],e,t,!0)}}class X_{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ot(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Y_{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}const Cu=new K;class Z_{constructor(e=new K(1/0,1/0),t=new K(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Cu.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cu).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pu=new w,Jr=new w;class J_{constructor(e=new w,t=new w){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Pu.subVectors(e,this.start),Jr.subVectors(this.end,this.start);const n=Jr.dot(Jr);let r=Jr.dot(Pu)/n;return t&&(r=ot(r,0,1)),r}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Lu=new w;class $_ extends Je{constructor(e,t){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new Ge,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,c=32;a<c;a++,o++){const l=a/c*Math.PI*2,u=o/c*Math.PI*2;i.push(Math.cos(l),Math.sin(l),1,Math.cos(u),Math.sin(u),1)}n.setAttribute("position",new ye(i,3));const r=new Pt({fog:!1,toneMapped:!1});this.cone=new un(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Lu.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Lu),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Un=new w,$r=new De,bo=new De;class K_ extends un{constructor(e){const t=jf(e),n=new Ge,i=[],r=[],a=new pe(0,0,1),o=new pe(0,1,0);for(let l=0;l<t.length;l++){const u=t[l];u.parent&&u.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(a.r,a.g,a.b),r.push(o.r,o.g,o.b))}n.setAttribute("position",new ye(i,3)),n.setAttribute("color",new ye(r,3));const c=new Pt({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,c),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");bo.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<t.length;r++){const o=t[r];o.parent&&o.parent.isBone&&($r.multiplyMatrices(bo,o.matrixWorld),Un.setFromMatrixPosition($r),i.setXYZ(a,Un.x,Un.y,Un.z),$r.multiplyMatrices(bo,o.parent.matrixWorld),Un.setFromMatrixPosition($r),i.setXYZ(a+1,Un.x,Un.y,Un.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function jf(s){const e=[];s.isBone===!0&&e.push(s);for(let t=0;t<s.children.length;t++)e.push.apply(e,jf(s.children[t]));return e}class Q_ extends yt{constructor(e,t,n){const i=new us(t,4,2),r=new qn({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const j_=new w,Iu=new pe,Uu=new pe;class ey extends Je{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new ls(t);i.rotateY(Math.PI*.5),this.material=new qn({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=i.getAttribute("position"),a=new Float32Array(r.count*3);i.setAttribute("color",new Qe(a,3)),this.add(new yt(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");Iu.copy(this.light.color),Uu.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const r=n<i/2?Iu:Uu;t.setXYZ(n,r.r,r.g,r.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(j_.setFromMatrixPosition(this.light.matrixWorld).negate())}}class ty extends un{constructor(e=10,t=10,n=4473924,i=8947848){n=new pe(n),i=new pe(i);const r=t/2,a=e/t,o=e/2,c=[],l=[];for(let h=0,d=0,m=-o;h<=t;h++,m+=a){c.push(-o,0,m,o,0,m),c.push(m,0,-o,m,0,o);const x=h===r?n:i;x.toArray(l,d),d+=3,x.toArray(l,d),d+=3,x.toArray(l,d),d+=3,x.toArray(l,d),d+=3}const u=new Ge;u.setAttribute("position",new ye(c,3)),u.setAttribute("color",new ye(l,3));const f=new Pt({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class ny extends un{constructor(e=10,t=16,n=8,i=64,r=4473924,a=8947848){r=new pe(r),a=new pe(a);const o=[],c=[];if(t>1)for(let f=0;f<t;f++){const h=f/t*(Math.PI*2),d=Math.sin(h)*e,m=Math.cos(h)*e;o.push(0,0,0),o.push(d,0,m);const x=f&1?r:a;c.push(x.r,x.g,x.b),c.push(x.r,x.g,x.b)}for(let f=0;f<n;f++){const h=f&1?r:a,d=e-e/n*f;for(let m=0;m<i;m++){let x=m/i*(Math.PI*2),g=Math.sin(x)*d,p=Math.cos(x)*d;o.push(g,0,p),c.push(h.r,h.g,h.b),x=(m+1)/i*(Math.PI*2),g=Math.sin(x)*d,p=Math.cos(x)*d,o.push(g,0,p),c.push(h.r,h.g,h.b)}}const l=new Ge;l.setAttribute("position",new ye(o,3)),l.setAttribute("color",new ye(c,3));const u=new Pt({vertexColors:!0,toneMapped:!1});super(l,u),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Du=new w,Kr=new w,Nu=new w;class iy extends Je{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new Ge;i.setAttribute("position",new ye([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const r=new Pt({fog:!1,toneMapped:!1});this.lightPlane=new Hn(i,r),this.add(this.lightPlane),i=new Ge,i.setAttribute("position",new ye([0,0,0,0,0,1],3)),this.targetLine=new Hn(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Du.setFromMatrixPosition(this.light.matrixWorld),Kr.setFromMatrixPosition(this.light.target.matrixWorld),Nu.subVectors(Kr,Du),this.lightPlane.lookAt(Kr),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Kr),this.targetLine.scale.z=Nu.length()}}const Qr=new w,rt=new Ea;class sy extends un{constructor(e){const t=new Ge,n=new Pt({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(m,x){c(m),c(x)}function c(m){i.push(0,0,0),r.push(0,0,0),a[m]===void 0&&(a[m]=[]),a[m].push(i.length/3-1)}t.setAttribute("position",new ye(i,3)),t.setAttribute("color",new ye(r,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const l=new pe(16755200),u=new pe(16711680),f=new pe(43775),h=new pe(16777215),d=new pe(3355443);this.setColors(l,u,f,h,d)}setColors(e,t,n,i,r){const o=this.geometry.getAttribute("color");o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,i.r,i.g,i.b),o.setXYZ(39,i.r,i.g,i.b),o.setXYZ(40,r.r,r.g,r.b),o.setXYZ(41,r.r,r.g,r.b),o.setXYZ(42,r.r,r.g,r.b),o.setXYZ(43,r.r,r.g,r.b),o.setXYZ(44,r.r,r.g,r.b),o.setXYZ(45,r.r,r.g,r.b),o.setXYZ(46,r.r,r.g,r.b),o.setXYZ(47,r.r,r.g,r.b),o.setXYZ(48,r.r,r.g,r.b),o.setXYZ(49,r.r,r.g,r.b),o.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;rt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),lt("c",t,e,rt,0,0,-1),lt("t",t,e,rt,0,0,1),lt("n1",t,e,rt,-n,-i,-1),lt("n2",t,e,rt,n,-i,-1),lt("n3",t,e,rt,-n,i,-1),lt("n4",t,e,rt,n,i,-1),lt("f1",t,e,rt,-n,-i,1),lt("f2",t,e,rt,n,-i,1),lt("f3",t,e,rt,-n,i,1),lt("f4",t,e,rt,n,i,1),lt("u1",t,e,rt,n*.7,i*1.1,-1),lt("u2",t,e,rt,-n*.7,i*1.1,-1),lt("u3",t,e,rt,0,i*2,-1),lt("cf1",t,e,rt,-n,0,1),lt("cf2",t,e,rt,n,0,1),lt("cf3",t,e,rt,0,-i,1),lt("cf4",t,e,rt,0,i,1),lt("cn1",t,e,rt,-n,0,-1),lt("cn2",t,e,rt,n,0,-1),lt("cn3",t,e,rt,0,-i,-1),lt("cn4",t,e,rt,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function lt(s,e,t,n,i,r,a){Qr.set(i,r,a).unproject(n);const o=e[s];if(o!==void 0){const c=t.getAttribute("position");for(let l=0,u=o.length;l<u;l++)c.setXYZ(o[l],Qr.x,Qr.y,Qr.z)}}const jr=new ln;class ry extends un{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),r=new Ge;r.setIndex(new Qe(n,1)),r.setAttribute("position",new Qe(i,3)),super(r,new Pt({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&jr.setFromObject(this.object),jr.isEmpty())return;const t=jr.min,n=jr.max,i=this.geometry.attributes.position,r=i.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=t.x,r[4]=n.y,r[5]=n.z,r[6]=t.x,r[7]=t.y,r[8]=n.z,r[9]=n.x,r[10]=t.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=t.z,r[15]=t.x,r[16]=n.y,r[17]=t.z,r[18]=t.x,r[19]=t.y,r[20]=t.z,r[21]=n.x,r[22]=t.y,r[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class ay extends un{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Ge;r.setIndex(new Qe(n,1)),r.setAttribute("position",new ye(i,3)),super(r,new Pt({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class oy extends Hn{constructor(e,t=1,n=16776960){const i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new Ge;a.setAttribute("position",new ye(r,3)),a.computeBoundingSphere(),super(a,new Pt({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],c=new Ge;c.setAttribute("position",new ye(o,3)),c.computeBoundingSphere(),this.add(new yt(c,new qn({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const Ou=new w;let ea,So;class cy extends Je{constructor(e=new w(0,0,1),t=new w(0,0,0),n=1,i=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",ea===void 0&&(ea=new Ge,ea.setAttribute("position",new ye([0,0,0,0,1,0],3)),So=new Ei(0,.5,1,5,1),So.translate(0,-.5,0)),this.position.copy(t),this.line=new Hn(ea,new Pt({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new yt(So,new qn({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Ou.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Ou,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class ly extends un{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Ge;i.setAttribute("position",new ye(t,3)),i.setAttribute("color",new ye(n,3));const r=new Pt({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(e,t,n){const i=new pe,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class uy{constructor(){this.type="ShapePath",this.color=new pe,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Vs,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,a){return this.currentPath.bezierCurveTo(e,t,n,i,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const _=[];for(let v=0,y=p.length;v<y;v++){const T=p[v],b=new xi;b.curves=T.curves,_.push(b)}return _}function n(p,_){const v=_.length;let y=!1;for(let T=v-1,b=0;b<v;T=b++){let C=_[T],P=_[b],M=P.x-C.x,E=P.y-C.y;if(Math.abs(E)>Number.EPSILON){if(E<0&&(C=_[b],M=-M,P=_[T],E=-E),p.y<C.y||p.y>P.y)continue;if(p.y===C.y){if(p.x===C.x)return!0}else{const D=E*(p.x-C.x)-M*(p.y-C.y);if(D===0)return!0;if(D<0)continue;y=!y}}else{if(p.y!==C.y)continue;if(P.x<=p.x&&p.x<=C.x||C.x<=p.x&&p.x<=P.x)return!0}}return y}const i=on.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,c;const l=[];if(r.length===1)return o=r[0],c=new xi,c.curves=o.curves,l.push(c),l;let u=!i(r[0].getPoints());u=e?!u:u;const f=[],h=[];let d=[],m=0,x;h[m]=void 0,d[m]=[];for(let p=0,_=r.length;p<_;p++)o=r[p],x=o.getPoints(),a=i(x),a=e?!a:a,a?(!u&&h[m]&&m++,h[m]={s:new xi,p:x},h[m].s.curves=o.curves,u&&m++,d[m]=[]):d[m].push({h:o,p:x[0]});if(!h[0])return t(r);if(h.length>1){let p=!1,_=0;for(let v=0,y=h.length;v<y;v++)f[v]=[];for(let v=0,y=h.length;v<y;v++){const T=d[v];for(let b=0;b<T.length;b++){const C=T[b];let P=!0;for(let M=0;M<h.length;M++)n(C.p,h[M].p)&&(v!==M&&_++,P?(P=!1,f[M].push(C)):p=!0);P&&f[v].push(C)}}_>0&&p===!1&&(d=f)}let g;for(let p=0,_=h.length;p<_;p++){c=h[p].s,l.push(c),g=d[p];for(let v=0,y=g.length;v<y;v++)c.holes.push(g[v].h)}return l}}class hy extends Xn{constructor(e,t,n,i,r,a){console.warn("THREE.BoxBufferGeometry has been renamed to THREE.BoxGeometry."),super(e,t,n,i,r,a)}}class fy extends js{constructor(e,t,n,i){console.warn("THREE.CapsuleBufferGeometry has been renamed to THREE.CapsuleGeometry."),super(e,t,n,i)}}class dy extends er{constructor(e,t,n,i){console.warn("THREE.CircleBufferGeometry has been renamed to THREE.CircleGeometry."),super(e,t,n,i)}}class py extends tr{constructor(e,t,n,i,r,a,o){console.warn("THREE.ConeBufferGeometry has been renamed to THREE.ConeGeometry."),super(e,t,n,i,r,a,o)}}class my extends Ei{constructor(e,t,n,i,r,a,o,c){console.warn("THREE.CylinderBufferGeometry has been renamed to THREE.CylinderGeometry."),super(e,t,n,i,r,a,o,c)}}class gy extends nr{constructor(e,t){console.warn("THREE.DodecahedronBufferGeometry has been renamed to THREE.DodecahedronGeometry."),super(e,t)}}class xy extends ir{constructor(e,t){console.warn("THREE.ExtrudeBufferGeometry has been renamed to THREE.ExtrudeGeometry."),super(e,t)}}class vy extends sr{constructor(e,t){console.warn("THREE.IcosahedronBufferGeometry has been renamed to THREE.IcosahedronGeometry."),super(e,t)}}class _y extends cs{constructor(e,t,n,i){console.warn("THREE.LatheBufferGeometry has been renamed to THREE.LatheGeometry."),super(e,t,n,i)}}class yy extends ls{constructor(e,t){console.warn("THREE.OctahedronBufferGeometry has been renamed to THREE.OctahedronGeometry."),super(e,t)}}class My extends as{constructor(e,t,n,i){console.warn("THREE.PlaneBufferGeometry has been renamed to THREE.PlaneGeometry."),super(e,t,n,i)}}class by extends Rn{constructor(e,t,n,i){console.warn("THREE.PolyhedronBufferGeometry has been renamed to THREE.PolyhedronGeometry."),super(e,t,n,i)}}class Sy extends rr{constructor(e,t,n,i,r,a){console.warn("THREE.RingBufferGeometry has been renamed to THREE.RingGeometry."),super(e,t,n,i,r,a)}}class Ty extends ar{constructor(e,t){console.warn("THREE.ShapeBufferGeometry has been renamed to THREE.ShapeGeometry."),super(e,t)}}class Ey extends us{constructor(e,t,n,i,r,a,o){console.warn("THREE.SphereBufferGeometry has been renamed to THREE.SphereGeometry."),super(e,t,n,i,r,a,o)}}class Ay extends or{constructor(e,t){console.warn("THREE.TetrahedronBufferGeometry has been renamed to THREE.TetrahedronGeometry."),super(e,t)}}class wy extends cr{constructor(e,t,n,i,r){console.warn("THREE.TorusBufferGeometry has been renamed to THREE.TorusGeometry."),super(e,t,n,i,r)}}class Ry extends lr{constructor(e,t,n,i,r,a){console.warn("THREE.TorusKnotBufferGeometry has been renamed to THREE.TorusKnotGeometry."),super(e,t,n,i,r,a)}}class Cy extends ur{constructor(e,t,n,i,r){console.warn("THREE.TubeBufferGeometry has been renamed to THREE.TubeGeometry."),super(e,t,n,i,r)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_a}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_a);const bM=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:vh,AddEquation:oi,AddOperation:ph,AdditiveAnimationBlendMode:Tc,AdditiveBlending:wo,AlphaFormat:bh,AlwaysCompare:Hh,AlwaysDepth:oh,AlwaysStencilFunc:Nh,AmbientLight:Wf,AmbientLightProbe:b_,AnimationAction:Qf,AnimationClip:Ys,AnimationLoader:l_,AnimationMixer:k_,AnimationObjectGroup:z_,AnimationUtils:r_,ArcCurve:gf,ArrayCamera:sf,ArrowHelper:cy,Audio:$f,AudioAnalyser:R_,AudioContext:Qc,AudioListener:E_,AudioLoader:y_,AxesHelper:ly,BackSide:Ct,BasicDepthPacking:Ih,BasicShadowMap:Ad,Bone:Oc,BooleanKeyframeTrack:Ai,Box2:Z_,Box3:ln,Box3Helper:ay,BoxBufferGeometry:hy,BoxGeometry:Xn,BoxHelper:ry,BufferAttribute:Qe,BufferGeometry:Ge,BufferGeometryLoader:Zf,ByteType:yh,Cache:Si,Camera:Ea,CameraHelper:sy,CanvasTexture:Cv,CapsuleBufferGeometry:fy,CapsuleGeometry:js,CatmullRomCurve3:xf,CineonToneMapping:xh,CircleBufferGeometry:dy,CircleGeometry:er,ClampToEdgeWrapping:St,Clock:Jf,Color:pe,ColorKeyframeTrack:Jc,ColorManagement:Gt,CompressedArrayTexture:Rv,CompressedTexture:zc,CompressedTextureLoader:u_,ConeBufferGeometry:py,ConeGeometry:tr,CubeCamera:Jh,CubeReflectionMapping:kn,CubeRefractionMapping:Vn,CubeTexture:Qs,CubeTextureLoader:h_,CubeUVReflectionMapping:ss,CubicBezierCurve:kc,CubicBezierCurve3:vf,CubicInterpolant:Of,CullFaceBack:Ao,CullFaceFront:Xu,CullFaceFrontBack:Ed,CullFaceNone:qu,Curve:Qt,CurvePath:yf,CustomBlending:Zu,CustomToneMapping:_h,CylinderBufferGeometry:my,CylinderGeometry:Ei,Cylindrical:Y_,Data3DTexture:Cc,DataArrayTexture:Sa,DataTexture:gi,DataTextureLoader:f_,DataUtils:ic,DecrementStencilOp:zd,DecrementWrapStencilOp:kd,DefaultLoadingManager:Bf,DepthFormat:Fn,DepthStencilFormat:yi,DepthTexture:rf,DirectionalLight:Hf,DirectionalLightHelper:iy,DiscreteInterpolant:Ff,DisplayP3ColorSpace:Ac,DodecahedronBufferGeometry:gy,DodecahedronGeometry:nr,DoubleSide:nn,DstAlphaFactor:th,DstColorFactor:ih,DynamicCopyUsage:tp,DynamicDrawUsage:Jd,DynamicReadUsage:Qd,EdgesGeometry:Mf,EllipseCurve:Ua,EqualCompare:zh,EqualDepth:lh,EqualStencilFunc:Wd,EquirectangularReflectionMapping:Ls,EquirectangularRefractionMapping:Is,Euler:Ks,EventDispatcher:wn,ExtrudeBufferGeometry:xy,ExtrudeGeometry:ir,FileLoader:An,Float16BufferAttribute:Wp,Float32BufferAttribute:ye,Float64BufferAttribute:qp,FloatType:sn,Fog:Pa,FogExp2:Ca,FramebufferTexture:wv,FrontSide:En,Frustum:Aa,GLBufferAttribute:W_,GLSL1:ip,GLSL3:tc,GreaterCompare:kh,GreaterDepth:hh,GreaterEqualCompare:Gh,GreaterEqualDepth:uh,GreaterEqualStencilFunc:Zd,GreaterStencilFunc:Xd,GridHelper:ty,Group:Qi,HalfFloatType:_i,HemisphereLight:kf,HemisphereLightHelper:ey,HemisphereLightProbe:M_,IcosahedronBufferGeometry:vy,IcosahedronGeometry:sr,ImageBitmapLoader:__,ImageLoader:Zs,ImageUtils:Rc,IncrementStencilOp:Fd,IncrementWrapStencilOp:Bd,InstancedBufferAttribute:is,InstancedBufferGeometry:Yf,InstancedInterleavedBuffer:H_,InstancedMesh:df,Int16BufferAttribute:Gp,Int32BufferAttribute:Hp,Int8BufferAttribute:Bp,IntType:vc,InterleavedBuffer:La,InterleavedBufferAttribute:Mi,Interpolant:hr,InterpolateDiscrete:Ns,InterpolateLinear:Os,InterpolateSmooth:ua,InvertStencilOp:Vd,KeepStencilOp:ha,KeyframeTrack:jt,LOD:hf,LatheBufferGeometry:_y,LatheGeometry:cs,Layers:Ta,LessCompare:Fh,LessDepth:ch,LessEqualCompare:Bh,LessEqualDepth:da,LessEqualStencilFunc:qd,LessStencilFunc:Hd,Light:Yn,LightProbe:Oa,Line:Hn,Line3:J_,LineBasicMaterial:Pt,LineCurve:Da,LineCurve3:_f,LineDashedMaterial:Df,LineLoop:pf,LineSegments:un,LinearEncoding:Ec,LinearFilter:at,LinearInterpolant:Zc,LinearMipMapLinearFilter:Ld,LinearMipMapNearestFilter:Pd,LinearMipmapLinearFilter:Gn,LinearMipmapNearestFilter:xc,LinearSRGBColorSpace:Jt,LinearToneMapping:mh,Loader:kt,LoaderUtils:uc,LoadingManager:$c,LoopOnce:Ch,LoopPingPong:Lh,LoopRepeat:Ph,LuminanceAlphaFormat:Th,LuminanceFormat:Sh,MOUSE:Sd,Material:Tt,MaterialLoader:Fa,MathUtils:xp,Matrix3:ke,Matrix4:De,MaxEquation:Lo,Mesh:yt,MeshBasicMaterial:qn,MeshDepthMaterial:Uc,MeshDistanceMaterial:Dc,MeshLambertMaterial:If,MeshMatcapMaterial:Uf,MeshNormalMaterial:Lf,MeshPhongMaterial:Cf,MeshPhysicalMaterial:Rf,MeshStandardMaterial:qc,MeshToonMaterial:Pf,MinEquation:Po,MirroredRepeatWrapping:Ds,MixOperation:dh,MultiplyBlending:Co,MultiplyOperation:$s,NearestFilter:ut,NearestMipMapLinearFilter:Cd,NearestMipMapNearestFilter:Rd,NearestMipmapLinearFilter:As,NearestMipmapNearestFilter:pa,NeverCompare:Oh,NeverDepth:ah,NeverStencilFunc:Gd,NoBlending:Sn,NoColorSpace:Bn,NoToneMapping:an,NormalAnimationBlendMode:ba,NormalBlending:pi,NotEqualCompare:Vh,NotEqualDepth:fh,NotEqualStencilFunc:Yd,NumberKeyframeTrack:qs,Object3D:Je,ObjectLoader:x_,ObjectSpaceNormalMap:Dh,OctahedronBufferGeometry:yy,OctahedronGeometry:ls,OneFactor:Qu,OneMinusDstAlphaFactor:nh,OneMinusDstColorFactor:sh,OneMinusSrcAlphaFactor:gc,OneMinusSrcColorFactor:eh,OrthographicCamera:wa,PCFShadowMap:pc,PCFSoftShadowMap:Yu,PMREMGenerator:sc,Path:Vs,PerspectiveCamera:_t,Plane:Dn,PlaneBufferGeometry:My,PlaneGeometry:as,PlaneHelper:oy,PointLight:Gf,PointLightHelper:Q_,Points:mf,PointsMaterial:Fc,PolarGridHelper:ny,PolyhedronBufferGeometry:by,PolyhedronGeometry:Rn,PositionalAudio:w_,PropertyBinding:Ye,PropertyMixer:Kf,QuadraticBezierCurve:Vc,QuadraticBezierCurve3:Gc,Quaternion:Dt,QuaternionKeyframeTrack:hs,QuaternionLinearInterpolant:zf,RED_GREEN_RGTC2_Format:jo,RED_RGTC1_Format:Rh,REVISION:_a,RGBADepthPacking:Uh,RGBAFormat:Ut,RGBAIntegerFormat:Sc,RGBA_ASTC_10x10_Format:Jo,RGBA_ASTC_10x5_Format:Xo,RGBA_ASTC_10x6_Format:Yo,RGBA_ASTC_10x8_Format:Zo,RGBA_ASTC_12x10_Format:$o,RGBA_ASTC_12x12_Format:Ko,RGBA_ASTC_4x4_Format:zo,RGBA_ASTC_5x4_Format:Bo,RGBA_ASTC_5x5_Format:ko,RGBA_ASTC_6x5_Format:Vo,RGBA_ASTC_6x6_Format:Go,RGBA_ASTC_8x5_Format:Ho,RGBA_ASTC_8x6_Format:Wo,RGBA_ASTC_8x8_Format:qo,RGBA_BPTC_Format:la,RGBA_ETC2_EAC_Format:Fo,RGBA_PVRTC_2BPPV1_Format:No,RGBA_PVRTC_4BPPV1_Format:Do,RGBA_S3TC_DXT1_Format:aa,RGBA_S3TC_DXT3_Format:oa,RGBA_S3TC_DXT5_Format:ca,RGB_ETC1_Format:wh,RGB_ETC2_Format:Oo,RGB_PVRTC_2BPPV1_Format:Uo,RGB_PVRTC_4BPPV1_Format:Io,RGB_S3TC_DXT1_Format:ra,RGFormat:Ah,RGIntegerFormat:bc,RawShaderMaterial:wf,Ray:rs,Raycaster:q_,RectAreaLight:qf,RedFormat:Eh,RedIntegerFormat:Mc,ReinhardToneMapping:gh,RepeatWrapping:Us,ReplaceStencilOp:Od,ReverseSubtractEquation:$u,RingBufferGeometry:Sy,RingGeometry:rr,SIGNED_RED_GREEN_RGTC2_Format:ec,SIGNED_RED_RGTC1_Format:Qo,SRGBColorSpace:Fe,Scene:cf,ShaderChunk:Be,ShaderLib:Zt,ShaderMaterial:cn,ShadowMaterial:Af,Shape:xi,ShapeBufferGeometry:Ty,ShapeGeometry:ar,ShapePath:uy,ShapeUtils:on,ShortType:Mh,Skeleton:Ia,SkeletonHelper:K_,SkinnedMesh:ff,Source:hi,Sphere:Kt,SphereBufferGeometry:Ey,SphereGeometry:us,Spherical:X_,SphericalHarmonics3:Xf,SplineCurve:Hc,SpotLight:Vf,SpotLightHelper:$_,Sprite:uf,SpriteMaterial:Nc,SrcAlphaFactor:mc,SrcAlphaSaturateFactor:rh,SrcColorFactor:ju,StaticCopyUsage:ep,StaticDrawUsage:zs,StaticReadUsage:Kd,StereoCamera:S_,StreamCopyUsage:np,StreamDrawUsage:$d,StreamReadUsage:jd,StringKeyframeTrack:wi,SubtractEquation:Ju,SubtractiveBlending:Ro,TOUCH:Td,TangentSpaceNormalMap:Wn,TetrahedronBufferGeometry:Ay,TetrahedronGeometry:or,Texture:ht,TextureLoader:d_,TorusBufferGeometry:wy,TorusGeometry:cr,TorusKnotBufferGeometry:Ry,TorusKnotGeometry:lr,Triangle:It,TriangleFanDrawMode:Dd,TriangleStripDrawMode:Ud,TrianglesDrawMode:Id,TubeBufferGeometry:Cy,TubeGeometry:ur,TwoPassDoubleSide:wd,UVMapping:ya,Uint16BufferAttribute:Pc,Uint32BufferAttribute:Lc,Uint8BufferAttribute:kp,Uint8ClampedBufferAttribute:Vp,Uniform:tl,UniformsGroup:G_,UniformsLib:oe,UniformsUtils:Zh,UnsignedByteType:Tn,UnsignedInt248Type:On,UnsignedIntType:bn,UnsignedShort4444Type:_c,UnsignedShort5551Type:yc,UnsignedShortType:Ma,VSMShadowMap:tn,Vector2:K,Vector3:w,Vector4:$e,VectorKeyframeTrack:Xs,VideoTexture:Av,WebGL1Renderer:of,WebGL3DRenderTarget:Rp,WebGLArrayRenderTarget:wp,WebGLCoordinateSystem:rn,WebGLCubeRenderTarget:$h,WebGLMultipleRenderTargets:Cp,WebGLRenderTarget:$t,WebGLRenderer:af,WebGLUtils:nf,WebGPUCoordinateSystem:Bs,WireframeGeometry:Ef,WrapAroundEnding:Fs,ZeroCurvatureEnding:li,ZeroFactor:Ku,ZeroSlopeEnding:ui,ZeroStencilOp:Nd,_SRGBAFormat:ma,sRGBEncoding:zn},Symbol.toStringTag,{value:"Module"})),SM=window.location.pathname.endsWith("/tela.html"),TM=/Mobi|Android|iPhone|iPad/.test(navigator.userAgent),Py=(s,e)=>`mix(1.0, smoothstep(1.02, 0.62, length(${s} / uMeia) + 0.16 * ruido(normalize(${s} + 1e-4) * 3.0 + ${e}) + 0.10 * ruido(normalize(${s} + 1e-4) * 9.0 + ${e})), uFora)`,di=300,ta=.12;function Ly(s,e,t,n){let i=[s,e],r=Math.hypot(e[0]-s[0],e[1]-s[1])*n;for(let a=0;a<5;a++){const o=[i[0]];for(let c=1;c<i.length;c++){const l=i[c-1],u=i[c],f=Math.hypot(u[0]-l[0],u[1]-l[1])||1,h=(t()-.5)*2*r,d=.35+t()*.3;o.push([l[0]+(u[0]-l[0])*d-(u[1]-l[1])/f*h,l[1]+(u[1]-l[1])*d+(u[0]-l[0])/f*h],u)}i=o,r*=.52}return i}function Fu(s,e,t){const n=Math.max(e,t),i=new Float32Array(n),r=new Int32Array(n),a=new Float32Array(n+1),o=new Float32Array(n),c=(l,u,f)=>{for(let d=0;d<l;d++)o[d]=s[u+d*f];let h=0;r[0]=0,a[0]=-1e20,a[1]=1e20;for(let d=1;d<l;d++){let m=(o[d]+d*d-o[r[h]]-r[h]*r[h])/(2*d-2*r[h]);for(;m<=a[h];)h--,m=(o[d]+d*d-o[r[h]]-r[h]*r[h])/(2*d-2*r[h]);r[++h]=d,a[h]=m,a[h+1]=1e20}h=0;for(let d=0;d<l;d++){for(;a[h+1]<d;)h++;i[d]=(d-r[h])*(d-r[h])+o[r[h]]}for(let d=0;d<l;d++)s[u+d*f]=i[d]};for(let l=0;l<e;l++)c(t,l,e);for(let l=0;l<t;l++)c(e,l*e,1)}function zu(s,e,t){const n=document.createElement("canvas");n.width=s,n.height=e;const i=n.getContext("2d",{willReadFrequently:!0});i.setTransform(di,0,0,-di,s/2,e/2),i.fillStyle="#fff",t(i);const r=i.getImageData(0,0,s,e).data,a=s*e,o=new Float32Array(a),c=new Float32Array(a),l=new Float32Array(a);for(let u=0;u<a;u++){const f=r[u*4+3]>127;o[u]=f?1e8:0,c[u]=f?0:1e8}Fu(o,s,e),Fu(c,s,e);for(let u=0;u<e;u++)for(let f=0;f<s;f++){const h=u*s+f,d=o[h]>0?Math.sqrt(o[h])-.5:.5-Math.sqrt(c[h]);l[(e-1-u)*s+f]=Math.max(-2,Math.min(2,d/di))}return l}function EM(s,e,t,n,i,r){const a=e+ta,o=t+ta,c=Math.round(a*2*di),l=Math.round(o*2*di),u=[],f=[],h=(b,C,P,M)=>{const E=Ly(b,C,s,M===0?.11:.15),D=[],$=[],N=E.length-1;if(E.forEach((Y,V)=>{const X=V/N,J=E[Math.max(0,V-1)],Q=E[Math.min(N,V+1)],he=Math.hypot(Q[0]-J[0],Q[1]-J[1])||1,B=-(Q[1]-J[1])/he,ee=(Q[0]-J[0])/he,te=r?Math.min(1,Math.max(0,(t-.02-Math.abs(Y[1]))/.12)):1,de=P*Math.pow(1-X,.75)*te,me=de*(.55+s()*.9),_e=de*(.55+s()*.9);D.push([Y[0]+B*me,Y[1]+ee*me]),$.push([Y[0]-B*_e,Y[1]-ee*_e]),te>.3&&u.push(Y)}),f.push([...D,...$.reverse()]),M>=i.prof)return;const F=Math.hypot(C[0]-b[0],C[1]-b[1]),z=Math.atan2(C[1]-b[1],C[0]-b[0]);for(let Y=0;Y<i.ramos;Y++){const V=.28+(Y+s())/i.ramos*.5,X=E[Math.floor(V*N)],J=z+(Y%2?1:-1)*(.45+s()*.55),Q=F*(.28+s()*.25)*(1-V*.4);h(X,[X[0]+Math.cos(J)*Q,X[1]+Math.sin(J)*Q],P*Math.pow(1-V,.75)*.7,M+1)}},d=s()*6.28;for(let b=0;b<i.principais;b++){const C=d+(b+(s()-.5)*.5)*Math.PI*2/i.principais,P=Math.cos(C),M=Math.sin(C),D=Math.min((e+ta)/Math.max(.001,Math.abs(P)),(t+(r?0:ta))/Math.max(.001,Math.abs(M)))*i.alcance*(.75+s()*.3);h([0,0],[P*D,M*D],i.larg*(.75+s()*.5),0)}const m=[],x=34;for(let b=0;b<x;b++){const C=(b+(s()-.5)*.7)/x*Math.PI*2,P=1+(s()-.4)*.2,M=Math.cos(C),E=Math.sin(C),D=Math.pow(Math.pow(Math.abs(M),2.6)+Math.pow(Math.abs(E),2.6),-1/2.6);m.push([M*D*n[0]*P,E*D*n[1]*P])}const g=(b,C)=>{b.beginPath(),C.forEach(([P,M],E)=>E?b.lineTo(P,M):b.moveTo(P,M)),b.closePath(),b.fill()},p=zu(c,l,b=>f.forEach(C=>g(b,C))),_=zu(c,l,b=>g(b,m)),v=new Uint16Array(c*l*4);for(let b=0;b<c*l;b++)v[b*4]=ic.toHalfFloat(p[b]),v[b*4+1]=ic.toHalfFloat(_[b]);const y=new gi(v,c,l,Ut,_i);return y.minFilter=y.magFilter=at,y.needsUpdate=!0,{tex:y,hx:a,hy:o,sd:(b,C)=>{const P=Math.min(c-1,Math.max(0,Math.round((b+a)*di)))+Math.min(l-1,Math.max(0,Math.round((C+o)*di)))*c;return Math.max(p[P],_[P])},pontos:u.length?u:m}}const ed=s=>String(s).length-2,yn={ini:.35,ritmo:4.6,silabas:8,periodo:2.1},na=.46,Mn=s=>s.toFixed(3),td=`
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
`,Iy=td+`
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
  float g = t - ${Mn(yn.ini)};
  if (g < 0.0 || t > fim) return 0.0;
  g = mod(g, ${Mn(yn.periodo)});
  return g < ${Mn(yn.silabas/yn.ritmo)} ? pow(abs(sin(g * ${Mn(Math.PI*yn.ritmo)})), 0.6) : 0.0;
}
`,Uy=s=>`
#define NIVEL ${s}
const float ND = ${Mn(s)};
${Iy}
vec4 veu(vec2 p) {
  float e = env(), limpo = 1.0 - 0.9 * tituloSombra(p), risada = gargalhada(uT, uDur - 0.6), fecha = 1.0 - smoothstep(uDur - 1.0, uDur - 0.75, uT);
  vec2 q = p - uCentro;
  float r = length(q), a = atan(q.y, q.x), treme = floor(uT * 26.0);
  // primeiro o n\xFAmero; de repente, todos olham para voc\xEA
  float encara = 1.0 - smoothstep(uDur * ${Mn(na)}, uDur * ${Mn(na)} + 0.10, uT), susto = exp(-abs(uT - uDur * ${Mn(na)} - 0.05) * 9.0);
  vec4 c = cena(p);
  c.a = max(c.a, e * 0.96);
  float nevoa = pow(fbm(vec2(q.x * 4.0, q.y * 3.0 - uT * (1.2 + 0.4 * ND))), 2.0);
  c.rgb += mix(vec3(0.16, 0.02, 0.22), vec3(0.60, 0.03, 0.06), nevoa) * nevoa * (0.30 + 0.12 * ND) * e;
  vec2 po = p + (vec2(h11(treme), h11(treme + 5.0)) - 0.5) * (0.006 * risada + 0.012 * susto);
  float abrem = smoothstep(0.0, 0.75, uT);
#if NIVEL > 1
  // o grande olho, com o 1 na pupila
  float gr = 0.36 + 0.025 * ND, ab = smoothstep(0.30, 0.62, uT) * fecha * (1.0 - 0.96 * exp(-pow((uT - uDur * ${Mn(na)}) * 11.0, 2.0))) * (1.0 + 0.10 * susto);
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
}`,AM=`
uniform vec2 uMeia, uCaixa;
uniform float uRiso, uQueda, uFim, uNd, uFora;
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
  gl_FragColor = vec4(max(c.rgb, 0.0), clamp(c.a, 0.0, 1.0)) * (1.0 - uFim) * (uRaio > 0.0 ? smoothstep(uRaio, uRaio * 0.55, r) : ${Py("p","1.7")});
}`,Dy={100:.3,1e3:.11,1e4:.1},Ny={100:.9,1e3:.89,1e4:.9},Bu=1,ia=2600,wM=2e4,Oy=s=>s<=1e3?Math.max(0,(s-100)/900):s<=1e4?1+(s-1e3)/9e3:2+Math.min(1,Math.log10(s/1e4)),RM=(s,e,t,n)=>{const i=Oy(s);return i<=1?e+(t-e)*i:i<=2?t+(n-t)*(i-1):n*(1+.3*(i-2))},Fy=s=>s>=1e4?1e4:s>=1e3?1e3:100,Js=.72,nd=1-Js,xa=4,id=1/(Js**3+3*Js**2*nd/xa),zy=3*id*Js**2/(xa*nd**(xa-1)),sd=s=>s<=0?0:s>=1?1:s<Js?id*s**3:1-zy*(1-s)**xa,vi=s=>Math.min(1,Math.max(0,s)),sa=s=>vi(s)*vi(s)*(3-2*vi(s)),By=s=>s%1e3/999,rd=s=>1+3*s;function ky(s,e,t,n,i){const r=s,a=t+n,o=a+1e3*rd(i),c=m=>m<a?1+(r-1)*sd((m-t)/n):r,l=m=>m<=t?0:m>=a?1:Math.pow(vi(c(m)/s),.8);if(e===s)return{voltas:0,ini:t,fim:o,queda:1/0,toque:a,pos:c,forca:l};if(e===s-1){const m=o+ia,x=p=>{if(p<o)return c(p);const _=(p-o)/ia,v=.018*Math.sin(p/12);if(_>=1)return r-1;if(_<.3)return r-.26*sa(_/.3)+v;if(_<.5)return r-.26+.22*sa((_-.3)/.2)+v;if(_<.8)return r-.04-.43*sa((_-.5)/.3)+v*1.4;const y=(_-.8)/.2;return r-.47-.53*(y*y*(1+.35*Math.sin(y*Math.PI)))},g=p=>p<o?l(p):1-.72*sa((p-o)/ia);return{voltas:0,ini:t,fim:m,queda:1/0,toque:a,vira:o,some:o+ia*.5,quase:o,pos:x,forca:g}}const u=ed(s),f=o+800+100*u,h=f+700+150*u;return{voltas:0,ini:t,fim:h,queda:f,toque:a,vira:o,some:f,riso:o,pos:m=>{if(m<o)return c(m);if(m<f){const x=(m-o)/(f-o);return r-(.4*x*Math.abs(Math.sin(x*9.42))+.05*Math.sin(m/16))*4*x*(1-x)}return r-(r-1)*Math.pow(vi((m-f)/(h-f)),2.6)},forca:l}}function CM(s,e,t,n,i=.3){if(s>=100&&(e===1||e>=s-1))return ky(s,e,t,n,i);const r=Fy(s),a=e<Math.round(Dy[r]*s),o=a?Bu:e>Math.round(Ny[r]*s)?Bu-1:0,c=o*s+e-1,l=t+n,u=m=>1+c*sd((m-t)/n);let f=1/0;if(a){let m=t,x=l;for(let g=0;g<40;g++){const p=(m+x)/2;u(p)>o*s+.5?x=p:m=p}f=x}const h=m=>Math.pow(vi(m/s),.8);return{voltas:o,ini:t,fim:l,queda:f,pos:u,forca:m=>{const x=m<=t?0:h(u(m));if(m<f)return x;const g=vi((m-f)/450);return 1+(h(e)-1)*g*g*(3-2*g)}}}const Nn=new Map;function PM(s,e,t=1/0){const n=Nn.get(s);if(n)return n.ini;Nn.size>60&&Nn.delete(Nn.keys().next().value);const i=performance.now();return Nn.set(s,{ini:i,fim:i+e,efeito:i+t}),i}const LM=s=>{var e,t;return Math.max(0,(performance.now()-((t=(e=Nn.get(s))==null?void 0:e.efeito)!=null?t:1/0))/1e3)},IM=s=>{var e;return(e=Nn.get(s))==null?void 0:e.ini},UM=s=>Math.max(0,...s.map(e=>{var t,n;return((n=(t=Nn.get(e))==null?void 0:t.fim)!=null?n:0)-performance.now()})),nl=[5,10,20,50,100,200,500,1e3,2e3,5e3,1e4],DM=12,ad=20,NM=[{pe:1,faces:5,bonus:1},{pe:2,faces:5,bonus:2},{pe:3,faces:5,bonus:3},{pe:4,faces:5,bonus:4},{pe:5,faces:10,bonus:1},{pe:6,faces:20,bonus:1},{pe:7,faces:50,bonus:1},{pe:8,faces:100,bonus:1},{pe:9,faces:200,bonus:1},{pe:10,faces:500,bonus:1},{pe:11,faces:1e3,bonus:1},{pe:12,faces:2e3,bonus:1},{pe:13,faces:5e3,bonus:1},{pe:14,faces:1e4,bonus:1}],od=s=>{const e=nl.findIndex(t=>s<=t);return Math.min(1,e<0?1:e/7)},Vy=1.4,Ti=s=>{const e=rd(By(s));return{riso:e,queda:e+.8,fim:e+Gy}},Gy=3.4,Hy=s=>Array.from({length:s},(e,t)=>.8+t*1.9/s),Wy=(s,e,t,n,i)=>za(t,n)&&s>e+Ti(i).riso?s-e-Ti(i).riso:-1,za=(s,e)=>s>=100&&e.length===1&&e[0]===1,qy=(s,e)=>s>=100&&e.length===1&&e[0]===s,OM=(s,e,t)=>za(s,e)?Ti(t).fim+.3:qy(s,e)?Ti(t).riso+1:Vy;function cd(s){const e=s>=ad,t=od(s),n=e?3+Math.round(t*3):2,i=e?5.4+2.4*t:3.6,r=e?2.5:1.7,a=i-(e?1.15:.9),o=Array.from({length:6},(c,l)=>l<n?r+(a-r)*Math.pow(n>1?l/(n-1):1,.8):99);return{aneis:n,travas:o,rev:i,fim:i+5.2+.8*t}}const Xy=[["#6fe6ff","#ffe2a0"],["#7f92ff","#ffd0f0"],["#b86bff","#ffdf8a"],["#ff5ecb","#9af4ff"],["#ffa63d","#fff0c8"],["#ff4a4a","#ffe0c0"],["#c9b6ff","#8affea"],["#ffffff","#ffcf4a"],["#3affc8","#ffffff"],["#ff3ad0","#ffe23a"],["#b98cff","#ffffff"]],ld=s=>Xy[Math.max(0,nl.indexOf(s))],Yy=(s,e)=>(e>=s?1:e<=1?-1:0)*(s>=ad?1:.35),Zy=(s,e,t,n,i)=>za(t,n)?1-2*Math.min(1,Math.max(0,(s-e-Ti(i).riso)/.8)):n.length===1?Yy(t,n[0]):0,ku=s=>{const e=parseInt(s.slice(1),16);return[(e>>16)/255,(e>>8&255)/255,(e&255)/255]},To=(s,e,t)=>Number.isFinite(s)?Math.min(t,Math.max(e,Math.floor(s))):e,Eo=(s,e)=>typeof s=="string"?s.slice(0,e):"";function FM(s){const e=s;return!e||!Array.isArray(e.valores)||!e.valores.length||!nl.includes(e.faces)?null:{id:Eo(e.id,60),faces:e.faces,valores:e.valores.slice(0,8).map(t=>To(t,1,e.faces)),bonus:To(e.bonus,-99999,99999),nome:Eo(e.nome,40),rotulo:Eo(e.rotulo,90),semente:To(e.semente,0,1e5),parcial:e.parcial===!0}}function Jy(s,e){s.width!==768&&(s.width=768,s.height=384);const t=s.getContext("2d");t.globalCompositeOperation="source-over",t.fillStyle="#000",t.fillRect(0,0,768,384),t.globalCompositeOperation="lighter",t.textAlign="center",t.textBaseline="middle",t.font=`700 ${Math.min(300,1150/Math.max(2,e.length))}px "Palatino Linotype", Palatino, "Book Antiqua", "Times New Roman", serif`,t.fillStyle="#f00",t.shadowColor="#0f0",t.shadowBlur=56,t.fillText(e,384,204),t.fillText(e,384,204),t.shadowBlur=0}const ud=[1.2,2,2.8],$y=[.9,2,3.1,4.2,5.3],Vu=6.7;function hd(s,e){if(s<100)return null;const t=s>=1e4?3:s>=1e3?2:1;if(e===69696)return{tipo:"ordem",cosmico:!0,absoluto:!0,nivel:t,titulo:"ORDEM ABSOLUTA",prio:11,dur:11};if(e===77777)return{tipo:"caos",cosmico:!0,absoluto:!0,nivel:t,titulo:"CAOS ABSOLUTO",prio:10,dur:11};if(e===6969)return{tipo:"ordem",cosmico:!0,nivel:t,titulo:"ORDEM C\xD3SMICA",prio:9,dur:8.5};if(e===7777)return{tipo:"caos",cosmico:!0,nivel:t,titulo:"CAOS C\xD3SMICO",prio:8,dur:8};if(e===777)return{tipo:"caos",cosmico:!1,roda:!0,nivel:t,titulo:"A RODA DO DESTINO",prio:7.5,dur:6.4};if(e===s){const n=["ACERTO CR\xCDTICO","CR\xCDTICO LEND\xC1RIO","CR\xCDTICO DIVINO"][t-1];return{tipo:"crit",cosmico:!1,nivel:t,titulo:n,prio:3+t,dur:3.4+t}}if(e===1){const n=ed(s),i=["O ABISMO RIU DE VOC\xCA","ACORRENTADO AO ABISMO","O ABISMO TE ARRASTOU","O ABISMO TE ENGOLIU"][n-1];return{tipo:"falha",cosmico:!1,demonio:n,nivel:t,titulo:i,prio:3.2+t,dur:3+.5*n}}return e===69?{tipo:"ordem",cosmico:!1,nivel:t,titulo:"ORDEM PERFEITA",prio:7,dur:5.5}:e===77?{tipo:"caos",cosmico:!1,duplo:!0,nivel:t,titulo:"DESTINO DUPLO",prio:6,dur:5.6}:e===7?{tipo:"caos",cosmico:!1,nivel:t,titulo:"O INESPERADO",prio:5.5,dur:4.6}:null}const Ky={1:"A ENTIDADE TE ARRASTOU",7:"A ENTIDADE SORRI",77:"A ENTIDADE RI",777:"A RODA DA ENTIDADE",7777:"CAOS PRIMORDIAL",69:"HARMONIA DIVINA",6969:"ORDEM PRIMORDIAL"};function Qy(s,e){const t=hd(s,e);return!t||t.tipo==="crit"?null:{...t,entidade:ld(s),titulo:Ky[e]||t.titulo,dur:t.dur+(t.demonio?0:1)}}function zM(s,e){let t=null;for(const n of s){const i=e[n.id];if(i==null)continue;const r=(Md(n.type)?Qy:hd)(bd(n.type),i);r&&(!t||r.prio>t.efeito.prio)&&(t={efeito:r,die:n,valor:i})}return t}function BM(s,e){if(s.tipo==="ordem")return 0;const t=.012*(s.cosmico?3:s.nivel)*Math.exp(-e*2.2);if(s.demonio){const i=e-yn.ini,r=i>0&&i%yn.periodo<yn.silabas/yn.ritmo&&e<s.dur-1;return t+.02*s.demonio*Math.exp(-e*4)+(r?.0015*s.demonio:0)}if(s.absoluto){let i=t+.0015;for(const r of $y)e>=r&&(i+=.03*Math.exp(-(e-r)*6));return i+(e>=Vu?.09*Math.exp(-(e-Vu)*1.6):0)}const n=s.roda?ud.reduce((i,r,a)=>i+(e>=r?(.012+.008*a)*Math.exp(-(e-r)*7):0),0):0;return t+n+(s.cosmico?.035*Math.exp(-Math.abs(e-s.dur*.6)*4):0)+(s.tipo==="caos"?.0015:0)}function kM(s,e){return s.tipo==="crit"?["#ffae2b","#fff4cf","#a98a56"]:s.tipo==="falha"?["#4d000c","#ff1d1d","#3a3034"]:s.tipo==="ordem"?["#ffd685","#ffffff","#8c94a6"]:Math.sin(Math.floor(e*1.7)*12.9898)>0?["#22e0a4","#fff0b0","#5d7a78"]:["#e01550","#d08cff","#6b4a64"]}const jy=`
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
}`,eM=`
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
}`,fd=`
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
`,dd=`
attribute vec2 pos;
uniform vec2 uTela;
varying vec2 vP;
void main() { vP = pos * 0.5 * uTela / min(uTela.x, uTela.y); gl_Position = vec4(pos, 0.0, 1.0); }`,VM=`
uniform vec2 uTela;
varying vec2 vP;
void main() { vP = position.xy / min(uTela.x, uTela.y); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,pd=`
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

${td}
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
${fd}// olho pequeno: x ao longo do anel, y atrav\xE9s. Devolve (branco, iris, pupila, contorno)
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
}`,tM=`
vec4 veu(vec2 p) { return cena(p); }`,nM=`
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
}`,iM=`
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
}`,sM=`
vec4 cenaFinal(vec2 p) { return veu(p); }`,Gu=s=>{const e=parseInt(s.slice(1),16);return`vec3(${[e>>16,e>>8&255,e&255].map(t=>(t/255).toFixed(3)).join(", ")})`},rM=s=>(s.demonio?Uy(s.demonio):s.duplo?nM:tM)+(s.entidade?`
const vec3 EA = ${Gu(s.entidade[0])};
const vec3 EB = ${Gu(s.entidade[1])};`+fd+iM:sM),GM=`
varying vec2 vP;
void main() { vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,aM=`
attribute vec2 pos;
uniform vec2 uTela;
varying vec2 vP;
void main() { vP = pos * 0.82 * uTela / min(uTela.x, uTela.y); gl_Position = vec4(pos, 0.0, 1.0); }`,oM=`
precision highp float;
varying vec2 vP;
uniform sampler2D uTexto, uRuido;
uniform vec2 uCentro, uNumBox, uTitBox, uTitPos;
uniform float uT, uDur, uNivel, uSemente, uClarao, uRaio;
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
`,Hu=`
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
}`,Wu=`
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
}`,Ba=`
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
}`,cM=Ba+`
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
}`,lM=Ba+`
float trava(int i) { return ${ud.map((s,e)=>`i == ${e} ? ${s.toFixed(2)} : `).join("")}9.0; }
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
}`,uM=Ba+`
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
}`,il=`
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
}`,hM=il+`
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
}`,fM=il+`
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
}`,dM=`
void main() {
  vec4 c = cenaFinal(vP);
  // clar\xE3o de abertura (menor para quem pediu menos movimento no sistema)
  c.rgb += vec3(1.0, 0.97, 0.92) * exp(-uT * 9.0) * uClarao;
  // granulado fino, para os degrad\xEAs n\xE3o fazerem faixas
  c.rgb += (h21(vP * 900.0 + fract(uT)) - 0.5) * 0.012 * c.a;
  // em miniatura, acaba num c\xEDrculo macio
  float miniatura = uRaio > 0.0 ? smoothstep(uRaio, uRaio * 0.6, length(vP)) : 1.0;
  gl_FragColor = vec4(max(c.rgb, 0.0), clamp(c.a, 0.0, 1.0)) * miniatura;
}`,pM={crit:[Hu,Hu],falha:[Wu,Wu],caos:[cM,uM],ordem:[hM,fM]},mM=s=>s.absoluto?s.tipo==="caos"?Ba+jy:il+eM:s.roda?lM:pM[s.tipo][s.cosmico?1:0],gM=s=>oM+mM(s)+rM(s)+dM,fc=[.4,.2],dc=[.47,.06];function xM(s,e){const t=document.createElement("canvas"),n=1024,i=1024;t.width=n,t.height=i;const r=t.getContext("2d"),a='"Palatino Linotype", Palatino, "Book Antiqua", "Times New Roman", serif';r.fillStyle="#000",r.fillRect(0,0,n,i),r.globalCompositeOperation="lighter",r.textAlign="center",r.textBaseline="middle";const o=String(s),c=n/(2*fc[0]),l=i/2/(2*fc[1])/c;r.save(),r.translate(n/2,i/4),r.scale(1,l),r.font=`700 ${Math.min(.2,.72/o.length)*c}px ${a}`,r.fillStyle="#f00",r.shadowColor="#0f0",r.shadowBlur=46,r.fillText(o,0,8),r.fillText(o,0,8),r.restore();const u=n/(2*dc[0]),f=i/2/(2*dc[1])/u;r.save(),r.translate(n/2,i*3/4),r.scale(1,f);let h=.066*u;const d=[...e],m=()=>{r.font=`700 ${h}px ${a}`;const _=h*.16;return{esp:_,larg:d.reduce((v,y)=>v+r.measureText(y).width,0)+_*(d.length-1)}};let x=m();x.larg>n*.86&&(h*=n*.86/x.larg,x=m()),r.fillStyle="#00f",r.textAlign="left";let g=-x.larg/2;for(const _ of d)r.fillText(_,g,0),g+=r.measureText(_).width+x.esp;const p=(n-x.larg)/2-34;if(p>12)for(const _ of[-1,1])r.fillRect(_*(x.larg/2+22)-(_<0?p:0),-1,p,2.5);return r.restore(),t}const va=256;let Ss=null;function vM(){if(!Ss){Ss=new Uint8Array(va*va);for(let s=0;s<Ss.length;s++)Ss[s]=Math.random()*256}return Ss}const _M=`#version 300 es
#define attribute in
#define varying out
`,yM=`#version 300 es
#define varying in
#define texture2D texture
#define gl_FragColor corFinal
out highp vec4 corFinal;
`;function sl(s,e,t,n){const i=s.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,powerPreference:"high-performance"});if(!i)return null;const r=(d,m)=>{const x=i.createShader(d);return i.shaderSource(x,(d===i.VERTEX_SHADER?_M:yM)+m),i.compileShader(x),x},a=i.createProgram();i.attachShader(a,r(i.VERTEX_SHADER,e)),i.attachShader(a,r(i.FRAGMENT_SHADER,t)),i.linkProgram(a);const o=i.getExtension("KHR_parallel_shader_compile"),c=d=>i.getUniformLocation(a,d);let l=0,u,f;const h=()=>{if(!i.getProgramParameter(a,i.LINK_STATUS))return console.error(i.getProgramInfoLog(a)),2;i.useProgram(a),i.bindBuffer(i.ARRAY_BUFFER,i.createBuffer()),i.bufferData(i.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),i.STATIC_DRAW);const d=i.getAttribLocation(a,"pos");i.enableVertexAttribArray(d),i.vertexAttribPointer(d,2,i.FLOAT,!1,0,0);const m=x=>{i.bindTexture(i.TEXTURE_2D,i.createTexture());for(const[g,p]of[[i.TEXTURE_MIN_FILTER,i.LINEAR],[i.TEXTURE_MAG_FILTER,i.LINEAR],[i.TEXTURE_WRAP_S,x],[i.TEXTURE_WRAP_T,x]])i.texParameteri(i.TEXTURE_2D,g,p)};return i.activeTexture(i.TEXTURE1),m(i.REPEAT),i.texImage2D(i.TEXTURE_2D,0,i.R8,va,va,0,i.RED,i.UNSIGNED_BYTE,vM()),i.uniform1i(c("uRuido"),1),i.activeTexture(i.TEXTURE0),m(i.CLAMP_TO_EDGE),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!0),u=c("uT"),f=c("uTela"),n(i,c),1};return{gl:i,u:c,pronta(){return!l&&(!o||i.getProgramParameter(a,o.COMPLETION_STATUS_KHR))&&(l=h()),l===1},imagem:d=>i.texImage2D(i.TEXTURE_2D,0,i.RGBA,i.RGBA,i.UNSIGNED_BYTE,d),desenhar(d){i.viewport(0,0,s.width,s.height),i.uniform2f(f,s.width,s.height),i.uniform1f(u,d),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLES,0,3)}}}function HM(s=pd){const e=sl(document.createElement("canvas"),dd,s,()=>{}),t=setInterval(()=>{var n;e&&!e.pronta()||(clearInterval(t),(n=e==null?void 0:e.gl.getExtension("WEBGL_lose_context"))==null||n.loseContext())},250)}function WM(s,e,t,n,i=0){var x;const r=cd(e),a={...r,fim:Math.max(r.fim,i)},[o,c]=ld(e),l=(x=window.matchMedia)==null?void 0:x.call(window,"(prefers-reduced-motion: reduce)").matches;let u=null,f=null;const h=sl(s,dd,pd,(g,p)=>{g.uniform1f(p("uRev"),a.rev),g.uniform1f(p("uFim"),a.fim),g.uniform1f(p("uNivel"),od(e)),g.uniform1f(p("uAneis"),a.aneis),g.uniform1f(p("uSem"),n%977/10),g.uniform1f(p("uClarao"),l?.1:.85),g.uniform1fv(p("uTrava[0]"),a.travas),g.uniform3f(p("uA"),...ku(o)),g.uniform3f(p("uB"),...ku(c)),u=p("uSorte"),f=p("uQuebra")});if(!h)return null;const d=document.createElement("canvas");let m="";return{tempos:a,quadro(g){if(!h.pronta())return;const p=md(g,a.rev,e,t,n);p!==m&&(m=p,Jy(d,p),h.imagem(d)),h.gl.uniform1f(u,Zy(g,a.rev,e,t,n)),h.gl.uniform1f(f,Wy(g,a.rev,e,t,n)),h.desenhar(g)}}}function qM(s,e,t){var r;const n=(r=window.matchMedia)==null?void 0:r.call(window,"(prefers-reduced-motion: reduce)").matches,i=sl(s,aM,gM(e),(a,o)=>{a.uniform2f(o("uCentro"),0,0),a.uniform2f(o("uNumBox"),...fc),a.uniform2f(o("uTitBox"),...dc),a.uniform2f(o("uTitPos"),0,-.56),a.uniform1f(o("uDur"),e.dur),a.uniform1f(o("uNivel"),e.nivel),a.uniform1f(o("uSemente"),t*7.31%50),a.uniform1f(o("uClarao"),n?.15:e.tipo==="ordem"?.35:.8),a.texImage2D(a.TEXTURE_2D,0,a.RGBA,a.RGBA,a.UNSIGNED_BYTE,xM(t,e.titulo))});return i&&{pronta:i.pronta,desenhar:a=>i.pronta()&&i.desenhar(a)}}function md(s,e,t,n,i){if(n.length>3)return md(s,e,t*n.length,[n.reduce((a,o)=>a+o,0)],i);if(za(t,n)&&s>=e-.06&&s<e+Ti(i).fim){const a=Hy(cd(t).aneis),o=a.reduce((c,l)=>c+Math.min(1,Math.max(0,(s-e-Ti(i).riso-l)/.2)),0)/a.length;return String(Math.round(Math.pow(t,1-o)))}if(s>=e-.06)return n.join(" \xB7 ");const r=Math.floor(s/Math.max(.05,.16-.02*s));return n.map((a,o)=>1+Math.abs(Math.imul(r*7919+o*104729+31,2654435761)>>>8)%t).join(" \xB7 ")}export{De as $,Qc as A,Ge as B,Cv as C,nn as D,wn as E,kt as F,ad as G,uc as H,sr as I,An as J,Vf as K,at as L,Sd as M,an as N,wa as O,_t as P,Dt as Q,q_ as R,X_ as S,Td as T,Tn as U,w as V,af as W,Gf as X,Hf as Y,qn as Z,Rf as _,K as a,Zu as a$,df as a0,Je as a1,_a as a2,d_ as a3,__ as a4,Qe as a5,La as a6,Mi as a7,Gn as a8,Us as a9,ln as aA,Kt as aB,hr as aC,f_ as aD,_i as aE,sn as aF,ic as aG,Eh as aH,$t as aI,rf as aJ,h_ as aK,kn as aL,Ls as aM,$h as aN,Ks as aO,Jd as aP,Fe as aQ,Jt as aR,GM as aS,gi as aT,vM as aU,va as aV,fc as aW,dc as aX,gM as aY,wf as aZ,tc as a_,Fc as aa,Pt as ab,qc as ac,Ye as ad,ff as ae,un as af,Hn as ag,pf as ah,mf as ai,Qi as aj,xp as ak,Ia as al,Os as am,Ys as an,Oc as ao,ut as ap,pa as aq,xc as ar,As as as,St as at,Ds as au,Ns as av,En as aw,Xs as ax,hs as ay,qs as az,NM as b,WM as b$,Qu as b0,gc as b1,xM as b2,J_ as b3,Dn as b4,It as b5,ye as b6,ke as b7,tr as b8,E_ as b9,PM as bA,OM as bB,Qy as bC,za as bD,Ti as bE,Yy as bF,od as bG,Hy as bH,Wy as bI,Vy as bJ,cd as bK,Jy as bL,VM as bM,pd as bN,ku as bO,Zy as bP,md as bQ,Gy as bR,$e as bS,zM as bT,UM as bU,LM as bV,BM as bW,nl as bX,Uc as bY,HM as bZ,FM as b_,y_ as ba,Od as bb,Yd as bc,Py as bd,wM as be,Fy as bf,Oy as bg,CM as bh,RM as bi,as as bj,Ku as bk,hd as bl,SM as bm,ed as bn,oM as bo,Iy as bp,AM as bq,nr as br,kM as bs,EM as bt,ud as bu,$y as bv,yn as bw,Vu as bx,na as by,IM as bz,ld as c,qy as c0,qM as c1,sl as c2,dd as c3,DM as d,zn as e,TM as f,Ta as g,ht as h,Ut as i,Tt as j,pe as k,cf as l,Yu as m,vh as n,Jf as o,Ea as p,Ad as q,pc as r,By as s,tn as t,bM as u,Id as v,Dd as w,Ud as x,yt as y,cn as z};
