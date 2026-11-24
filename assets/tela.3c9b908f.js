import{i as u0,f as f0}from"./tipos.bbb321c6.js";const H=o=>String(o).length-2,T={ini:.35,ritmo:4.6,silabas:8,periodo:2.1},I=.46,A=o=>o.toFixed(3),Y=`
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
`,p0=Y+`
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
  float g = t - ${A(T.ini)};
  if (g < 0.0 || t > fim) return 0.0;
  g = mod(g, ${A(T.periodo)});
  return g < ${A(T.silabas/T.ritmo)} ? pow(abs(sin(g * ${A(Math.PI*T.ritmo)})), 0.6) : 0.0;
}
`,m0=o=>`
#define NIVEL ${o}
const float ND = ${A(o)};
${p0}
vec4 veu(vec2 p) {
  float e = env(), limpo = 1.0 - 0.9 * tituloSombra(p), risada = gargalhada(uT, uDur - 0.6), fecha = 1.0 - smoothstep(uDur - 1.0, uDur - 0.75, uT);
  vec2 q = p - uCentro;
  float r = length(q), a = atan(q.y, q.x), treme = floor(uT * 26.0);
  // primeiro o n\xFAmero; de repente, todos olham para voc\xEA
  float encara = 1.0 - smoothstep(uDur * ${A(I)}, uDur * ${A(I)} + 0.10, uT), susto = exp(-abs(uT - uDur * ${A(I)} - 0.05) * 9.0);
  vec4 c = cena(p);
  c.a = max(c.a, e * 0.96);
  float nevoa = pow(fbm(vec2(q.x * 4.0, q.y * 3.0 - uT * (1.2 + 0.4 * ND))), 2.0);
  c.rgb += mix(vec3(0.16, 0.02, 0.22), vec3(0.60, 0.03, 0.06), nevoa) * nevoa * (0.30 + 0.12 * ND) * e;
  vec2 po = p + (vec2(h11(treme), h11(treme + 5.0)) - 0.5) * (0.006 * risada + 0.012 * susto);
  float abrem = smoothstep(0.0, 0.75, uT);
#if NIVEL > 1
  // o grande olho, com o 1 na pupila
  float gr = 0.36 + 0.025 * ND, ab = smoothstep(0.30, 0.62, uT) * fecha * (1.0 - 0.96 * exp(-pow((uT - uDur * ${A(I)}) * 11.0, 2.0))) * (1.0 + 0.10 * susto);
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
}`,ao=`
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
}`,d0={100:.3,1e3:.11,1e4:.1},v0={100:.9,1e3:.89,1e4:.9},V=1,w=2600,to=2e4,x0=o=>o<=1e3?Math.max(0,(o-100)/900):o<=1e4?1+(o-1e3)/9e3:2+Math.min(1,Math.log10(o/1e4)),ro=(o,e,t,r)=>{const a=x0(o);return a<=1?e+(t-e)*a:a<=2?t+(r-t)*(a-1):r*(1+.3*(a-2))},h0=o=>o>=1e4?1e4:o>=1e3?1e3:100,y=.72,K=1-y,U=4,W=1/(y**3+3*y**2*K/U),b0=3*W*y**2/(U*K**(U-1)),J=o=>o<=0?0:o>=1?1:o<y?W*o**3:1-b0*(1-o)**U,q=o=>Math.min(1,Math.max(0,o)),O=o=>q(o)*q(o)*(3-2*q(o)),g0=o=>o%1e3/999,Z=o=>1+3*o;function T0(o,e,t,r,a){const s=o,i=t+r,c=i+1e3*Z(a),d=u=>u<i?1+(s-1)*J((u-t)/r):s,x=u=>u<=t?0:u>=i?1:Math.pow(q(d(u)/o),.8);if(e===o)return{voltas:0,ini:t,fim:c,queda:1/0,toque:i,pos:d,forca:x};if(e===o-1){const u=c+w,f=l=>{if(l<c)return d(l);const m=(l-c)/w,g=.018*Math.sin(l/12);if(m>=1)return s-1;if(m<.3)return s-.26*O(m/.3)+g;if(m<.5)return s-.26+.22*O((m-.3)/.2)+g;if(m<.8)return s-.04-.43*O((m-.5)/.3)+g*1.4;const E=(m-.8)/.2;return s-.47-.53*(E*E*(1+.35*Math.sin(E*Math.PI)))},n=l=>l<c?x(l):1-.72*O((l-c)/w);return{voltas:0,ini:t,fim:u,queda:1/0,toque:i,vira:c,some:c+w*.5,quase:c,pos:f,forca:n}}const b=H(o),h=c+800+100*b,v=h+700+150*b;return{voltas:0,ini:t,fim:v,queda:h,toque:i,vira:c,some:h,riso:c,pos:u=>{if(u<c)return d(u);if(u<h){const f=(u-c)/(h-c);return s-(.4*f*Math.abs(Math.sin(f*9.42))+.05*Math.sin(u/16))*4*f*(1-f)}return s-(s-1)*Math.pow(q((u-h)/(v-h)),2.6)},forca:x}}function so(o,e,t,r,a,s=.3){if(o>=100&&(e===1||e>=o-1))return T0(o,e,t,a,s);const i=h0(o),c=e<Math.round(d0[i]*o),d=c?V:e>Math.round(v0[i]*o)?V-1:0,x=d*o+e-1,b=d?a:r+(a-r)*Math.sqrt(e/o),h=t+b,v=n=>1+x*J((n-t)/b);let p=1/0;if(c){let n=t,l=h;for(let m=0;m<40;m++){const g=(n+l)/2;v(g)>d*o+.5?l=g:n=g}p=l}const u=n=>Math.pow(q(n/o),.8);return{voltas:d,ini:t,fim:h,queda:p,pos:v,forca:n=>{const l=n<=t?0:u(v(n));if(n<p)return l;const m=q((n-p)/450);return 1+(u(e)-1)*m*m*(3-2*m)}}}const z=new Map;function io(o,e,t=1/0){const r=z.get(o);if(r)return r.ini;z.size>60&&z.delete(z.keys().next().value);const a=performance.now();return z.set(o,{ini:a,fim:a+e,efeito:a+t}),a}const co=o=>{var e,t;return Math.max(0,(performance.now()-((t=(e=z.get(o))==null?void 0:e.efeito)!=null?t:1/0))/1e3)},lo=o=>{var e;return(e=z.get(o))==null?void 0:e.ini},no=o=>Math.max(0,...o.map(e=>{var t,r;return((r=(t=z.get(e))==null?void 0:t.fim)!=null?r:0)-performance.now()})),L=[5,10,20,50,100,200,500,1e3,2e3,5e3,1e4],uo=12,o0=20,fo=[{pe:1,faces:5,bonus:1},{pe:2,faces:5,bonus:2},{pe:3,faces:5,bonus:3},{pe:4,faces:5,bonus:4},{pe:5,faces:10,bonus:1},{pe:6,faces:20,bonus:1},{pe:7,faces:50,bonus:1},{pe:8,faces:100,bonus:1},{pe:9,faces:200,bonus:1},{pe:10,faces:500,bonus:1},{pe:11,faces:1e3,bonus:1},{pe:12,faces:2e3,bonus:1},{pe:13,faces:5e3,bonus:1},{pe:14,faces:1e4,bonus:1}],e0=o=>{const e=L.findIndex(t=>o<=t);return Math.min(1,e<0?1:e/7)},A0=1.4,R=o=>{const e=Z(g0(o));return{riso:e,queda:e+.8,fim:e+z0}},z0=3.4,q0=o=>Array.from({length:o},(e,t)=>.8+t*1.9/o),R0=(o,e,t,r,a)=>k(t,r)&&o>e+R(a).riso?o-e-R(a).riso:-1,k=(o,e)=>o>=100&&e.length===1&&e[0]===1,E0=(o,e)=>o>=100&&e.length===1&&e[0]===o,po=(o,e,t)=>k(o,e)?R(t).fim+.3:E0(o,e)?R(t).riso+1:A0;function a0(o){const e=o>=o0,t=e0(o),r=e?3+Math.round(t*3):2,a=e?5.4+2.4*t:3.6,s=e?2.5:1.7,i=a-(e?1.15:.9),c=Array.from({length:6},(d,x)=>x<r?s+(i-s)*Math.pow(r>1?x/(r-1):1,.8):99);return{aneis:r,travas:c,rev:a,fim:a+5.2+.8*t}}const M0=[["#6fe6ff","#ffe2a0"],["#7f92ff","#ffd0f0"],["#b86bff","#ffdf8a"],["#ff5ecb","#9af4ff"],["#ffa63d","#fff0c8"],["#ff4a4a","#ffe0c0"],["#c9b6ff","#8affea"],["#ffffff","#ffcf4a"],["#3affc8","#ffffff"],["#ff3ad0","#ffe23a"],["#b98cff","#ffffff"]],t0=o=>M0[Math.max(0,L.indexOf(o))],y0=(o,e)=>(e>=o?1:e<=1?-1:0)*(o>=o0?1:.35),I0=(o,e,t,r,a)=>k(t,r)?1-2*Math.min(1,Math.max(0,(o-e-R(a).riso)/.8)):r.length===1?y0(t,r[0]):0,Q=o=>{const e=parseInt(o.slice(1),16);return[(e>>16)/255,(e>>8&255)/255,(e&255)/255]},B=(o,e,t)=>Number.isFinite(o)?Math.min(t,Math.max(e,Math.floor(o))):e,S=(o,e)=>typeof o=="string"?o.slice(0,e):"";function mo(o){const e=o;return!e||!Array.isArray(e.valores)||!e.valores.length||!L.includes(e.faces)?null:{id:S(e.id,60),faces:e.faces,valores:e.valores.slice(0,8).map(t=>B(t,1,e.faces)),bonus:B(e.bonus,-99999,99999),nome:S(e.nome,40),rotulo:S(e.rotulo,90),semente:B(e.semente,0,1e5),parcial:e.parcial===!0}}function w0(o,e){o.width!==768&&(o.width=768,o.height=384);const t=o.getContext("2d");t.globalCompositeOperation="source-over",t.fillStyle="#000",t.fillRect(0,0,768,384),t.globalCompositeOperation="lighter",t.textAlign="center",t.textBaseline="middle",t.font=`700 ${Math.min(300,1150/Math.max(2,e.length))}px "Palatino Linotype", Palatino, "Book Antiqua", "Times New Roman", serif`,t.fillStyle="#f00",t.shadowColor="#0f0",t.shadowBlur=56,t.fillText(e,384,204),t.fillText(e,384,204),t.shadowBlur=0}const r0=[1.2,2,2.8],O0=[.9,2,3.1,4.2,5.3],j=6.7;function s0(o,e){if(o<100)return null;const t=o>=1e4?3:o>=1e3?2:1;if(e===69696)return{tipo:"ordem",cosmico:!0,absoluto:!0,nivel:t,titulo:"ORDEM ABSOLUTA",prio:11,dur:11};if(e===77777)return{tipo:"caos",cosmico:!0,absoluto:!0,nivel:t,titulo:"CAOS ABSOLUTO",prio:10,dur:11};if(e===6969)return{tipo:"ordem",cosmico:!0,nivel:t,titulo:"ORDEM C\xD3SMICA",prio:9,dur:8.5};if(e===7777)return{tipo:"caos",cosmico:!0,nivel:t,titulo:"CAOS C\xD3SMICO",prio:8,dur:8};if(e===777)return{tipo:"caos",cosmico:!1,roda:!0,nivel:t,titulo:"A RODA DO DESTINO",prio:7.5,dur:6.4};if(e===o){const r=["ACERTO CR\xCDTICO","CR\xCDTICO LEND\xC1RIO","CR\xCDTICO DIVINO"][t-1];return{tipo:"crit",cosmico:!1,nivel:t,titulo:r,prio:3+t,dur:3.4+t}}if(e===1){const r=H(o),a=["O ABISMO RIU DE VOC\xCA","ACORRENTADO AO ABISMO","O ABISMO TE ARRASTOU","O ABISMO TE ENGOLIU"][r-1];return{tipo:"falha",cosmico:!1,demonio:r,nivel:t,titulo:a,prio:3.2+t,dur:3+.5*r}}return e===69?{tipo:"ordem",cosmico:!1,nivel:t,titulo:"ORDEM PERFEITA",prio:7,dur:5.5}:e===77?{tipo:"caos",cosmico:!1,duplo:!0,nivel:t,titulo:"DESTINO DUPLO",prio:6,dur:5.6}:e===7?{tipo:"caos",cosmico:!1,nivel:t,titulo:"O INESPERADO",prio:5.5,dur:4.6}:null}const U0={1:"A ENTIDADE TE ARRASTOU",7:"A ENTIDADE SORRI",77:"A ENTIDADE RI",777:"A RODA DA ENTIDADE",7777:"CAOS PRIMORDIAL",69:"HARMONIA DIVINA",6969:"ORDEM PRIMORDIAL"};function D0(o,e){const t=s0(o,e);return!t||t.tipo==="crit"?null:{...t,entidade:t0(o),titulo:U0[e]||t.titulo,dur:t.dur+(t.demonio?0:1)}}function vo(o,e){let t=null;for(const r of o){const a=e[r.id];if(a==null)continue;const s=(u0(r.type)?D0:s0)(f0(r.type),a);s&&(!t||s.prio>t.efeito.prio)&&(t={efeito:s,die:r,valor:a})}return t}function xo(o,e){if(o.tipo==="ordem")return 0;const t=.012*(o.cosmico?3:o.nivel)*Math.exp(-e*2.2);if(o.demonio){const a=e-T.ini,s=a>0&&a%T.periodo<T.silabas/T.ritmo&&e<o.dur-1;return t+.02*o.demonio*Math.exp(-e*4)+(s?.0015*o.demonio:0)}if(o.absoluto){let a=t+.0015;for(const s of O0)e>=s&&(a+=.03*Math.exp(-(e-s)*6));return a+(e>=j?.09*Math.exp(-(e-j)*1.6):0)}const r=o.roda?r0.reduce((a,s,i)=>a+(e>=s?(.012+.008*i)*Math.exp(-(e-s)*7):0),0):0;return t+r+(o.cosmico?.035*Math.exp(-Math.abs(e-o.dur*.6)*4):0)+(o.tipo==="caos"?.0015:0)}function ho(o,e){return o.tipo==="crit"?["#ffae2b","#fff4cf","#a98a56"]:o.tipo==="falha"?["#4d000c","#ff1d1d","#3a3034"]:o.tipo==="ordem"?["#ffd685","#ffffff","#8c94a6"]:Math.sin(Math.floor(e*1.7)*12.9898)>0?["#22e0a4","#fff0b0","#5d7a78"]:["#e01550","#d08cff","#6b4a64"]}const k0=`
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
}`,C0=`
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
}`,i0=`
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
`,c0=`
attribute vec2 pos;
uniform vec2 uTela;
varying vec2 vP;
void main() { vP = pos * 0.5 * uTela / min(uTela.x, uTela.y); gl_Position = vec4(pos, 0.0, 1.0); }`,bo=`
uniform vec2 uTela;
varying vec2 vP;
void main() { vP = position.xy / min(uTela.x, uTela.y); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,l0=`
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

${Y}
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
${i0}// olho pequeno: x ao longo do anel, y atrav\xE9s. Devolve (branco, iris, pupila, contorno)
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
}`,B0=`
vec4 veu(vec2 p) { return cena(p); }`,S0=`
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
}`,F0=`
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
}`,N0=`
vec4 cenaFinal(vec2 p) { return veu(p); }`,$=o=>{const e=parseInt(o.slice(1),16);return`vec3(${[e>>16,e>>8&255,e&255].map(t=>(t/255).toFixed(3)).join(", ")})`},L0=o=>(o.demonio?m0(o.demonio):o.duplo?S0:B0)+(o.entidade?`
const vec3 EA = ${$(o.entidade[0])};
const vec3 EB = ${$(o.entidade[1])};`+i0+F0:N0),go=`
varying vec2 vP;
void main() { vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,_0=`
attribute vec2 pos;
uniform vec2 uTela;
varying vec2 vP;
void main() { vP = pos * 0.82 * uTela / min(uTela.x, uTela.y); gl_Position = vec4(pos, 0.0, 1.0); }`,P0=`
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
`,G=`
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
}`,X=`
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
}`,C=`
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
}`,V0=C+`
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
}`,Q0=C+`
float trava(int i) { return ${r0.map((o,e)=>`i == ${e} ? ${o.toFixed(2)} : `).join("")}9.0; }
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
}`,j0=C+`
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
}`,_=`
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
}`,$0=_+`
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
}`,G0=_+`
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
}`,X0=`
void main() {
  vec4 c = cenaFinal(vP);
  // clar\xE3o de abertura (menor para quem pediu menos movimento no sistema)
  c.rgb += vec3(1.0, 0.97, 0.92) * exp(-uT * 9.0) * uClarao;
  // granulado fino, para os degrad\xEAs n\xE3o fazerem faixas
  c.rgb += (h21(vP * 900.0 + fract(uT)) - 0.5) * 0.012 * c.a;
  gl_FragColor = vec4(max(c.rgb, 0.0), clamp(c.a, 0.0, 1.0));
}`,H0={crit:[G,G],falha:[X,X],caos:[V0,j0],ordem:[$0,G0]},Y0=o=>o.absoluto?o.tipo==="caos"?C+k0:_+C0:o.roda?Q0:H0[o.tipo][o.cosmico?1:0],K0=o=>P0+Y0(o)+L0(o)+X0,F=[.4,.2],N=[.47,.06];function W0(o,e){const t=document.createElement("canvas"),r=1024,a=1024;t.width=r,t.height=a;const s=t.getContext("2d"),i='"Palatino Linotype", Palatino, "Book Antiqua", "Times New Roman", serif';s.fillStyle="#000",s.fillRect(0,0,r,a),s.globalCompositeOperation="lighter",s.textAlign="center",s.textBaseline="middle";const c=String(o),d=r/(2*F[0]),x=a/2/(2*F[1])/d;s.save(),s.translate(r/2,a/4),s.scale(1,x),s.font=`700 ${Math.min(.2,.72/c.length)*d}px ${i}`,s.fillStyle="#f00",s.shadowColor="#0f0",s.shadowBlur=46,s.fillText(c,0,8),s.fillText(c,0,8),s.restore();const b=r/(2*N[0]),h=a/2/(2*N[1])/b;s.save(),s.translate(r/2,a*3/4),s.scale(1,h);let v=.066*b;const p=[...e],u=()=>{s.font=`700 ${v}px ${i}`;const m=v*.16;return{esp:m,larg:p.reduce((g,E)=>g+s.measureText(E).width,0)+m*(p.length-1)}};let f=u();f.larg>r*.86&&(v*=r*.86/f.larg,f=u()),s.fillStyle="#00f",s.textAlign="left";let n=-f.larg/2;for(const m of p)s.fillText(m,n,0),n+=s.measureText(m).width+f.esp;const l=(r-f.larg)/2-34;if(l>12)for(const m of[-1,1])s.fillRect(m*(f.larg/2+22)-(m<0?l:0),-1,l,2.5);return s.restore(),t}const D=256;let M=null;function J0(){if(!M){M=new Uint8Array(D*D);for(let o=0;o<M.length;o++)M[o]=Math.random()*256}return M}const Z0=`#version 300 es
#define attribute in
#define varying out
`,oo=`#version 300 es
#define varying in
#define texture2D texture
#define gl_FragColor corFinal
out highp vec4 corFinal;
`;function P(o,e,t,r){const a=o.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,powerPreference:"high-performance"});if(!a)return null;const s=(p,u)=>{const f=a.createShader(p);return a.shaderSource(f,(p===a.VERTEX_SHADER?Z0:oo)+u),a.compileShader(f),f},i=a.createProgram();a.attachShader(i,s(a.VERTEX_SHADER,e)),a.attachShader(i,s(a.FRAGMENT_SHADER,t)),a.linkProgram(i);const c=a.getExtension("KHR_parallel_shader_compile"),d=p=>a.getUniformLocation(i,p);let x=0,b,h;const v=()=>{if(!a.getProgramParameter(i,a.LINK_STATUS))return console.error(a.getProgramInfoLog(i)),2;a.useProgram(i),a.bindBuffer(a.ARRAY_BUFFER,a.createBuffer()),a.bufferData(a.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),a.STATIC_DRAW);const p=a.getAttribLocation(i,"pos");a.enableVertexAttribArray(p),a.vertexAttribPointer(p,2,a.FLOAT,!1,0,0);const u=f=>{a.bindTexture(a.TEXTURE_2D,a.createTexture());for(const[n,l]of[[a.TEXTURE_MIN_FILTER,a.LINEAR],[a.TEXTURE_MAG_FILTER,a.LINEAR],[a.TEXTURE_WRAP_S,f],[a.TEXTURE_WRAP_T,f]])a.texParameteri(a.TEXTURE_2D,n,l)};return a.activeTexture(a.TEXTURE1),u(a.REPEAT),a.texImage2D(a.TEXTURE_2D,0,a.R8,D,D,0,a.RED,a.UNSIGNED_BYTE,J0()),a.uniform1i(d("uRuido"),1),a.activeTexture(a.TEXTURE0),u(a.CLAMP_TO_EDGE),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!0),b=d("uT"),h=d("uTela"),r(a,d),1};return{gl:a,u:d,pronta(){return!x&&(!c||a.getProgramParameter(i,c.COMPLETION_STATUS_KHR))&&(x=v()),x===1},imagem:p=>a.texImage2D(a.TEXTURE_2D,0,a.RGBA,a.RGBA,a.UNSIGNED_BYTE,p),desenhar(p){a.viewport(0,0,o.width,o.height),a.uniform2f(h,o.width,o.height),a.uniform1f(b,p),a.clearColor(0,0,0,0),a.clear(a.COLOR_BUFFER_BIT),a.drawArrays(a.TRIANGLES,0,3)}}}function To(o=l0){const e=P(document.createElement("canvas"),c0,o,()=>{}),t=setInterval(()=>{var r;e&&!e.pronta()||(clearInterval(t),(r=e==null?void 0:e.gl.getExtension("WEBGL_lose_context"))==null||r.loseContext())},250)}function Ao(o,e,t,r,a=0){var f;const s=a0(e),i={...s,fim:Math.max(s.fim,a)},[c,d]=t0(e),x=(f=window.matchMedia)==null?void 0:f.call(window,"(prefers-reduced-motion: reduce)").matches;let b=null,h=null;const v=P(o,c0,l0,(n,l)=>{n.uniform1f(l("uRev"),i.rev),n.uniform1f(l("uFim"),i.fim),n.uniform1f(l("uNivel"),e0(e)),n.uniform1f(l("uAneis"),i.aneis),n.uniform1f(l("uSem"),r%977/10),n.uniform1f(l("uClarao"),x?.1:.85),n.uniform1fv(l("uTrava[0]"),i.travas),n.uniform3f(l("uA"),...Q(c)),n.uniform3f(l("uB"),...Q(d)),b=l("uSorte"),h=l("uQuebra")});if(!v)return null;const p=document.createElement("canvas");let u="";return{tempos:i,quadro(n){if(!v.pronta())return;const l=n0(n,i.rev,e,t,r);l!==u&&(u=l,w0(p,l),v.imagem(p)),v.gl.uniform1f(b,I0(n,i.rev,e,t,r)),v.gl.uniform1f(h,R0(n,i.rev,e,t,r)),v.desenhar(n)}}}function zo(o,e,t){var s;const r=(s=window.matchMedia)==null?void 0:s.call(window,"(prefers-reduced-motion: reduce)").matches,a=P(o,_0,K0(e),(i,c)=>{i.uniform2f(c("uCentro"),0,0),i.uniform2f(c("uNumBox"),...F),i.uniform2f(c("uTitBox"),...N),i.uniform2f(c("uTitPos"),0,-.56),i.uniform1f(c("uDur"),e.dur),i.uniform1f(c("uNivel"),e.nivel),i.uniform1f(c("uSemente"),t*7.31%50),i.uniform1f(c("uClarao"),r?.15:e.tipo==="ordem"?.35:.8),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,i.RGBA,i.UNSIGNED_BYTE,W0(t,e.titulo))});return a&&{pronta:a.pronta,desenhar:i=>a.pronta()&&a.desenhar(i)}}function n0(o,e,t,r,a){if(r.length>3)return n0(o,e,t*r.length,[r.reduce((i,c)=>i+c,0)],a);if(k(t,r)&&o>=e-.06&&o<e+R(a).fim){const i=q0(a0(t).aneis),c=i.reduce((d,x)=>d+Math.min(1,Math.max(0,(o-e-R(a).riso-x)/.2)),0)/i.length;return String(Math.round(Math.pow(t,1-c)))}if(o>=e-.06)return r.join(" \xB7 ");const s=Math.floor(o/Math.max(.05,.16-.02*o));return r.map((i,c)=>1+Math.abs(Math.imul(s*7919+c*104729+31,2654435761)>>>8)%t).join(" \xB7 ")}export{mo as $,A0 as A,P0 as B,j as C,a0 as D,I as E,ao as F,o0 as G,w0 as H,bo as I,l0 as J,Q as K,D as L,uo as M,F as N,I0 as O,fo as P,n0 as Q,T as R,z0 as S,N as T,vo as U,go as V,no as W,co as X,xo as Y,L as Z,To as _,W0 as a,Ao as a0,E0 as a1,zo as a2,P as a3,c0 as a4,to as b,t0 as c,J0 as d,x0 as e,K0 as f,so as g,ro as h,s0 as i,H as j,p0 as k,r0 as l,O0 as m,lo as n,io as o,h0 as p,po as q,D0 as r,g0 as s,ho as t,k as u,R as v,y0 as w,e0 as x,q0 as y,R0 as z};
