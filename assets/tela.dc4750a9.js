import{O as w}from"./getPluginId.ae619b2b.js";import{r as n,d as Be,K as at,C as st,J as ot,g as rt,s as nt,o as it,L as ct,M as lt}from"./destino.a3a8310b.js";import{c$ as Ve,d8 as _e,d9 as He,da as We,db as Ge,c_ as Ue,V as Qe,Q as ut,dc as Je,o as ie,dd as de,cY as ft,cX as pt,p as ce,d as p,D as Fe,de as Oe,j as O,df as mt,d3 as dt,aU as xt,aS as vt,a0 as Xe,aO as ht,dg as gt,ak as yt,ao as bt,d0 as kt,az as St,aA as Mt,aB as Rt,aC as Tt,y as zt,z as wt,aD as Et,aj as qt,dh as Pt}from"./usePlayerDice.d1542b78.js";import{U as At,W as Ct}from"./tela.3c9b908f.js";import{a as me}from"./tipos.bbb321c6.js";import{g as It}from"./canais.be18a895.js";import{C as Dt,a as Ft}from"./Camera.b438b902.js";const Ot={UNIVERSO:0,PRIMORDIAL:1,BREU:2,SERAFIM:3,ALMAS:4,INFERNO:5,SUMIE:6,PARADOXO:7,TIRANO:8,TITAN:9,NEVE:10},Ne=11,_=(e,s,r)=>{const t=Math.min(1,Math.max(0,(r-e)/(s-e)));return t*t*(3-2*t)};function Nt(e,s,r){const t={lado:1,alto:1,sobe:0,x:0,gira:0};if(e===1||e===2||e===6||e===8){const a=_(.02,.5,s);t.alto=1-a,t.lado=s>.5?0:1+.25*Math.sin(a*Math.PI)-.5*a*a}else if(e===0){const a=_(0,.5,s);t.lado=t.alto=1-a*a,t.gira=a*a*9}else if(e===3)t.lado=t.alto=1-_(.25,.65,s),t.sobe=.22*_(0,.6,s);else if(e===4)t.lado=1-_(.1,.5,s),t.alto=1+.6*s,t.sobe=.12*s,t.x=Math.sin(r*.02)*.006;else if(e===5)t.lado=t.alto=1-_(.42,.6,s),t.x=s<.45?Math.sin(r*.09)*.004*s:0;else if(e===7){const a=Math.floor(r/70),i=Math.abs(Math.sin(a*12.9898)*43758.5453)%1;t.lado=t.alto=s>.72||i<s*.75?0:1,t.x=(i-.5)*.12*s}else e===9?(t.x=s<.35?Math.sin(r*.11)*.006:0,t.lado=t.alto=1-_(.3,.42,s)):e===10?t.lado=t.alto=s<.28?1+.06*s:0:t.lado=t.alto=1-_(0,.5,s);return t}const Lt=`
varying vec2 vP;
uniform float uR;
void main() { vP = position.xy / uR; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,$t=`
precision highp float;
varying vec2 vP;
uniform sampler2D uRuido;
uniform float uK, uTipo, uS, uT;
uniform vec3 uCor;
float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float ruido(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return textureLod(uRuido, (i + f + 0.5) / 256.0, 0.0).r; }
float fbm(vec2 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 4; i++) { s += a * ruido(p); p = mat2(1.6, 1.2, -1.2, 1.6) * p + 3.7; a *= 0.5; } return s; }
float ss(float a, float b, float v) { return smoothstep(a, b, v); }
// a po\xE7a: cresce enquanto o dado amolece, e o ch\xE3o a bebe pelas beiradas
float poca(vec2 p, out float alt) {
  float r = length(p), cresce = ss(0.04, 0.55, uK), R = 0.4 + 1.75 * cresce;
  vec2 d = p / max(r, 1e-3);
  float borda = R * (0.72 + 0.42 * ruido(d * 1.9 + uS)) , m = ss(0.10, -0.10, r - borda) * ss(0.0, 0.10, uK);
  // gotas em volta
  for (int i = 0; i < 7; i++) {
    float fi = float(i), a = fi * 0.897 + uS, dist = (1.25 + 0.9 * h21(vec2(fi, uS))) * cresce * 1.25, g = (0.10 + 0.16 * h21(vec2(uS, fi + 3.0))) * cresce;
    m = max(m, ss(g, g - 0.07, length(p - vec2(cos(a), sin(a)) * dist)));
  }
  float bebe = mix(0.05, 0.95, clamp((uK - 0.56) / 0.42, 0.0, 1.0));
  m *= ss(bebe - 0.16, bebe + 0.02, fbm(p * 1.3 + uS) * 0.75 + 0.42 * (1.0 - r / 3.0) + 0.06);
  alt = m * (1.0 - 0.5 * r / max(borda, 0.1)) + 0.12 * fbm(p * 2.4 + vec2(0.0, uT * 0.25) + uS);
  return m;
}
void main() {
  vec2 p = vP;
  float r = length(p), k = uK, a = atan(p.y, p.x), alfa = 0.0;
  vec2 d = p / max(r, 1e-3);
  vec3 luz = vec3(0.0), corpo = vec3(0.0);
  if (uTipo < 0.5) {
    // implode num ponto preto; sobra um anel de luz
    float rd = k < 0.52 ? 1.25 * ss(0.0, 0.12, k) * (1.0 - ss(0.18, 0.52, k)) : 0.0, gira = ruido(vec2(a * 2.2 + log(r + 0.05) * 3.2 + k * 15.0, log(r + 0.05) * 2.4 + k * 9.0) + uS);
    float gas = pow(gira, 2.2) * exp(-abs(r - rd * 1.5) * 1.1) * ss(0.0, 0.15, k) * (1.0 - ss(0.40, 0.56, k));
    luz += mix(vec3(0.30, 0.06, 0.85), vec3(0.95, 0.78, 1.0), gas) * gas * 1.6 + vec3(0.9, 0.75, 1.0) * exp(-abs(r - rd) * 22.0) * step(0.02, rd);
    alfa = ss(rd + 0.04, rd - 0.04, r) * step(0.02, rd);
    float q = ss(0.50, 1.0, k), on = q * 3.4;
    luz += (vec3(0.72, 0.48, 1.0) * exp(-abs(r - on) * 9.0) + vec3(1.0) * exp(-r * r * 14.0) * exp(-q * 9.0) * 2.0 + vec3(1.0) * exp(-abs(p.y) * 26.0) * exp(-abs(p.x) * 1.4) * exp(-q * 8.0)) * (1.0 - q) * step(0.5, k);
    float e = step(0.975, h21(floor(p * 9.0 + uS))) * exp(-abs(r - on * 0.7) * 2.0) * (1.0 - q) * step(0.5, k);
    luz += vec3(0.95, 0.88, 1.0) * e;
  } else if (uTipo < 1.5 || (uTipo > 1.5 && uTipo < 2.5) || (uTipo > 5.5 && uTipo < 6.5) || (uTipo > 7.5 && uTipo < 8.5)) {
    float alt, alt2, alt3, m = poca(p, alt);
    poca(p + vec2(0.05, 0.0), alt2);
    poca(p + vec2(0.0, 0.05), alt3);
    vec3 n = normalize(vec3((alt - alt2) * 7.0, (alt - alt3) * 7.0, 1.0)), L = normalize(vec3(-0.45, 0.62, 0.65));
    float esp = pow(max(dot(reflect(-L, n), vec3(0.0, 0.0, 1.0)), 0.0), 26.0), dif = max(dot(n, L), 0.0);
    alfa = m;
    if (uTipo < 1.5) {
      corpo = mix(vec3(0.50, 0.01, 0.018), vec3(0.16, 0.0, 0.008), ss(0.3, 0.9, alt)) * (0.5 + 0.7 * dif);
      luz += vec3(1.0, 0.78, 0.76) * esp * 0.8 * m;
      alfa *= 0.96;
    } else if (uTipo < 2.5) {
      corpo = vec3(0.012, 0.013, 0.017) * (0.6 + 0.7 * dif);
      luz += vec3(0.85, 0.92, 1.0) * (esp * 0.9 + ss(0.75, 0.2, m) * m * 0.35) * m;
      // a \xFAltima bolha
      float b = ss(0.50, 0.70, k) * 0.62, rb = length(p - vec2(0.12, 0.05)), viva = step(0.5, k) * step(k, 0.72), q = ss(0.72, 0.86, k);
      luz += vec3(0.7, 0.78, 0.9) * (exp(-abs(rb - b) * 22.0) * 0.8 + exp(-length(p - vec2(0.12, 0.05) - vec2(-0.35, 0.38) * b) * 16.0)) * viva;
      luz += vec3(0.7, 0.78, 0.9) * exp(-abs(rb - 0.62 - q * 0.9) * 14.0) * (1.0 - q) * step(0.72, k);
    } else if (uTipo < 6.5) {
      // a tinta seca at\xE9 virar papel
      float cerda = fbm(vec2(p.x * 3.0 + p.y * 1.2, p.y * 0.7 - p.x * 0.8) * 2.0 + uS), seca = ss(0.45, 0.80, k + 0.25 * (cerda - 0.5));
      vec3 papel = mix(vec3(0.60, 0.51, 0.36), vec3(0.88, 0.81, 0.65), cerda);
      corpo = mix(vec3(0.022, 0.021, 0.027), papel, max(seca, ss(0.55, 0.15, m + 0.4 * (cerda - 0.5))));
      luz += vec3(0.7, 0.75, 0.85) * esp * 0.25 * m * (1.0 - seca);
    } else {
      corpo = mix(vec3(0.46, 0.27, 0.05), vec3(1.0, 0.80, 0.32), dif) * (0.55 + 0.5 * alt);
      luz += vec3(1.0, 0.93, 0.70) * esp * 1.2 * m;
      // moedas de luz
      for (int i = 0; i < 10; i++) {
        float fi = float(i), t = clamp((k - 0.42 - 0.02 * fi) / 0.5, 0.0, 1.0), an = fi * 2.399 + uS;
        vec2 c = p - vec2(cos(an), sin(an)) * (0.5 + 1.1 * t) - vec2(0.0, t * 1.1);
        c.x /= max(0.22, abs(cos(t * 9.0 + fi)));
        float rm = length(c);
        luz += (vec3(1.0, 0.74, 0.22) * ss(0.21, 0.17, rm) * (0.55 + 0.45 * ss(0.10, 0.14, rm)) + vec3(1.0, 0.8, 0.4) * exp(-rm * 7.0) * 0.5) * ss(0.0, 0.12, t) * (1.0 - ss(0.55, 1.0, t));
      }
    }
  } else if (uTipo < 3.5) {
    // penas e luz subindo
    luz += vec3(1.0, 0.86, 0.52) * exp(-r * r * 1.1) * ss(0.0, 0.2, k) * (1.0 - ss(0.35, 0.8, k)) * 0.9;
    luz += vec3(1.0, 0.93, 0.75) * exp(-abs(p.x) * 3.2) * ss(-0.9, 0.2, p.y) * ss(3.6, 0.4, p.y) * ss(0.1, 0.4, k) * (1.0 - ss(0.5, 0.95, k)) * 0.55;
    for (int i = 0; i < 9; i++) {
      float fi = float(i), t = clamp((k - 0.05 * fi * 0.6) / 0.72, 0.0, 1.0), lado = h21(vec2(fi, uS)) * 2.0 - 1.0, an = sin(k * 7.0 + fi * 1.9) * 0.7 + lado;
      vec2 c = p - vec2(lado * (0.5 + 0.9 * t) + sin(k * 6.0 + fi) * 0.22, -0.4 + 2.7 * t);
      c = mat2(cos(an), -sin(an), sin(an), cos(an)) * c;
      c.x += c.y * c.y * 0.8;
      float pena = ss(0.13 * (1.0 - abs(c.y) / 0.46), 0.0, abs(c.x)) * step(abs(c.y), 0.46), fio = exp(-abs(c.x) * 46.0) * step(abs(c.y), 0.46), v = ss(0.0, 0.15, t) * (1.0 - ss(0.65, 1.0, t));
      luz += (vec3(1.0, 0.95, 0.84) * pena * (0.75 + 0.25 * sin(c.y * 50.0 + c.x * 40.0)) + vec3(1.0, 0.8, 0.4) * fio * 0.5) * v * 0.85;
      alfa = max(alfa, pena * v * 0.35);
    }
  } else if (uTipo < 4.5) {
    // fuma\xE7a verde que sobe, com rostos
    float sobe = ss(0.0, 1.0, k), larg = 0.55 + 0.35 * max(p.y, 0.0);
    vec2 q = vec2(p.x + (fbm(vec2(p.y * 1.4 - k * 5.0, uS)) - 0.5) * 1.1 * max(p.y, 0.0), p.y);
    float f = fbm(q * 1.7 - vec2(0.0, k * 4.5) + uS), col = exp(-q.x * q.x / (larg * larg)) * ss(-0.9, -0.1, q.y) * ss(0.4 + 3.6 * sobe, 0.1 + 2.0 * sobe, q.y), fum = ss(0.30, 0.75, f) * col * ss(0.0, 0.18, k) * (1.0 - ss(0.6, 1.0, k));
    luz += mix(vec3(0.02, 0.55, 0.32), vec3(0.75, 1.0, 0.88), fum) * fum * 1.15;
    alfa = fum * 0.45;
    for (int i = 0; i < 3; i++) {
      float fi = float(i), t = clamp((k - 0.14 * fi) / 0.66, 0.0, 1.0), v = ss(0.05, 0.3, t) * (1.0 - ss(0.6, 1.0, t)), z = 0.85 - 0.12 * fi;
      vec2 c = (q - vec2((fi - 1.0) * 0.55, 0.2 + 2.3 * t)) / z;
      float face = ss(0.62, 0.40, length(c * vec2(1.15, 0.85))), olho = ss(0.17, 0.10, length((vec2(abs(c.x) - 0.23, c.y - 0.12)) * vec2(1.0, 0.75))), boca = ss(0.16, 0.10, length((c + vec2(0.0, 0.34)) * vec2(1.1, 0.5)));
      luz += vec3(0.45, 1.0, 0.75) * face * (1.0 - max(olho, boca)) * v * 0.5;
      alfa = max(alfa, face * max(olho, boca) * v * 0.6);
    }
  } else if (uTipo < 5.5) {
    // racha em lava, e a cinza vai com o vento
    float veio = pow(1.0 - abs(2.0 * fbm(p * 2.1 + uS) - 1.0), 5.0), dentro = ss(1.12, 0.85, r), q = ss(0.40, 1.0, k);
    luz += mix(vec3(0.9, 0.10, 0.01), vec3(1.0, 0.75, 0.25), veio) * veio * dentro * ss(0.02, 0.36, k) * (1.0 - ss(0.44, 0.6, k)) * 2.2;
    luz += vec3(1.0, 0.36, 0.06) * exp(-r * 1.5) * ss(0.1, 0.42, k) * (1.0 - ss(0.42, 0.7, k)) * 1.1;
    vec2 w = p - vec2(q * 2.3 * (0.6 + 0.8 * ruido(p * 2.0 + uS)), q * 0.7);
    float massa = ss(1.7, 0.3, length(w)), grao = ss(0.35 + 0.5 * q, 0.45 + 0.5 * q, ruido(w * 8.0 + uS)), cinza = massa * grao * ss(0.38, 0.5, k) * (1.0 - ss(0.75, 1.0, k));
    corpo = vec3(0.10, 0.085, 0.08) * (0.6 + 0.6 * ruido(w * 17.0));
    alfa = cinza * 0.9;
    luz += vec3(1.0, 0.45, 0.08) * step(0.86, ruido(w * 13.0 + 7.0)) * massa * ss(0.38, 0.5, k) * (1.0 - ss(0.5, 0.95, k)) * 1.1;
  } else if (uTipo < 7.5) {
    // fatias que falham e desacontecem
    float passo = floor(uT * 15.0), faixa = floor(p.y * 4.0), sorte = h21(vec2(faixa, passo + uS)), ox = (sorte - 0.5) * 2.6 * ss(0.0, 0.5, k);
    float liga = step(k * 0.9, sorte + 0.25) * (1.0 - ss(0.72, 0.86, k));
    vec2 q = vec2(p.x - ox, p.y);
    float anel = exp(-abs(length(q) - 1.0) * 14.0), cheio = ss(1.05, 0.9, length(q));
    luz += (vec3(0.0, 0.95, 1.0) * exp(-abs(length(q + vec2(0.13, 0.0)) - 1.0) * 14.0) + vec3(1.0, 0.1, 0.75) * exp(-abs(length(q - vec2(0.13, 0.0)) - 1.0) * 14.0) + vec3(0.7) * anel * 0.4) * liga * 0.9;
    luz += vec3(0.55, 0.85, 1.0) * cheio * step(0.80, h21(floor(q * 16.0) + passo)) * liga * k * 0.8;
    corpo = vec3(0.0);
    alfa = cheio * liga * ss(0.15, 0.5, k) * 0.55;
    float z = ss(0.70, 1.0, k), lin = exp(-abs(p.y) * (10.0 + 60.0 * z)) * ss(2.6 * (1.0 - z), 0.0, abs(p.x)) * step(0.70, k);
    luz += vec3(0.85, 0.97, 1.0) * lin * (1.0 - z) * 2.4;
  } else if (uTipo < 9.5) {
    // pedra que trinca, desmorona e vira p\xF3
    float q = clamp((k - 0.30) / 0.66, 0.0, 1.0);
    float tr = ss(0.10, 0.02, abs(fbm(p * 2.6 + uS) - 0.5)) * ss(1.1, 0.8, r) * ss(0.0, 0.25, k) * (1.0 - ss(0.3, 0.42, k));
    luz += vec3(1.0, 0.62, 0.15) * tr * 1.3;
    for (int i = 0; i < 12; i++) {
      float fi = float(i), an = fi * 2.399 + uS, tam = (0.26 + 0.26 * h21(vec2(fi, uS))) * (1.0 - ss(0.72, 1.0, q)), dist = (0.25 + 0.55 * h21(vec2(uS, fi))) * (0.7 + 2.1 * (1.0 - exp(-q * 3.0)));
      vec2 c = p - vec2(cos(an), sin(an)) * dist;
      float gira = fi + q * 3.0;
      c = mat2(cos(gira), -sin(gira), sin(gira), cos(gira)) * c;
      float lasca = max(max(abs(c.x) * 1.1, abs(c.y)), dot(abs(c), vec2(0.72))), m = ss(tam, tam - 0.03, lasca) * step(0.30, k);
      corpo = mix(corpo, vec3(0.30, 0.265, 0.21) * (0.55 + 0.75 * ss(-tam, tam, c.y - c.x)) * (0.7 + 0.6 * ruido(c * 9.0 + fi)), m);
      alfa = max(alfa, m);
    }
    float po = fbm(p * 1.3 + uS - d * q * 0.8) * exp(-abs(r - 2.0 * q) * 1.2) * step(0.3, k) * (1.0 - q);
    corpo = mix(corpo, vec3(0.42, 0.37, 0.29), po * (1.0 - alfa));
    alfa = max(alfa, po * 0.75);
  } else if (uTipo < 10.5) {
    // congela, estilha\xE7a e derrete em geada
    float gelo = ss(1.15, 0.9, r) * ss(0.0, 0.2, k) * step(k, 0.28), q = ss(0.28, 0.62, k), fim = 1.0 - ss(0.68, 1.0, k);
    luz += vec3(0.55, 0.82, 1.0) * gelo * (0.25 + 0.75 * pow(1.0 - abs(2.0 * fbm(p * 3.0 + uS) - 1.0), 6.0));
    luz += vec3(0.9, 0.97, 1.0) * exp(-r * 1.6) * exp(-max(k - 0.28, 0.0) * 16.0) * step(0.28, k) * 1.6;
    for (int i = 0; i < 13; i++) {
      float fi = float(i), an = fi * 2.399 + uS, comp = 0.26 + 0.30 * h21(vec2(fi, uS));
      vec2 dir = vec2(cos(an), sin(an)), c = p - dir * (0.3 + (0.6 + 1.3 * h21(vec2(uS, fi))) * (1.0 - exp(-q * 4.0)));
      vec2 e = vec2(dot(c, dir), dot(c, vec2(-dir.y, dir.x)));
      float m = ss(0.02, -0.01, abs(e.y) - 0.13 * (1.0 - abs(e.x) / comp)) * step(abs(e.x), comp) * step(0.28, k) * fim;
      luz += mix(vec3(0.22, 0.55, 0.85), vec3(0.95, 0.99, 1.0), ss(-0.02, 0.10, e.y)) * m * 0.75;
      alfa = max(alfa, m * 0.45);
    }
    float geada = pow(1.0 - abs(2.0 * fbm(p * 2.2 + uS) - 1.0), 4.0) * (1.0 - ss(0.2, 0.4 + 2.2 * q, r)) * step(0.28, k) * fim;
    luz += vec3(0.75, 0.90, 1.0) * geada * 0.55;
  } else {
    luz += uCor * (exp(-r * r * 1.4) * ss(0.0, 0.15, k) * (1.0 - ss(0.2, 0.7, k)) * 1.2 + exp(-abs(r - k * 2.6) * 8.0) * (1.0 - k) * (1.0 - k) * 0.8);
    float e = step(0.95, h21(floor(p * 7.0 + uS))) * exp(-abs(r - k * 2.2) * 2.5) * (1.0 - k);
    luz += (uCor + 0.4) * e * 0.7;
  }
  // nada chega \xE0 beira do quadrado
  float beira = ss(3.95, 2.6, r);
  gl_FragColor = vec4(corpo * alfa + luz, clamp(alfa, 0.0, 1.0)) * beira;
}`,Le=.92,Kt=(e,s,r,t=.115)=>new Ve({vertexShader:Lt,fragmentShader:$t,transparent:!0,depthWrite:!1,depthTest:!1,toneMapped:!1,blending:_e,blendSrc:He,blendDst:We,uniforms:{uRuido:{value:Ge()},uK:{value:0},uT:{value:0},uTipo:{value:e},uS:{value:s},uR:{value:t},uCor:{value:new Ue(r).convertLinearToSRGB()}}}),jt=450,$e=[0,0],Ke=new ut,Bt=new Qe,te=new Qe;function Vt({die:e,position:s,quaternion:r,...t}){var z;const a=n.exports.useContext(Je),i=ie(x=>x.invalidate),u=n.exports.useRef(null),m=n.exports.useRef(null),c=n.exports.useRef({t:0,x:0,z:0}),f=Be(e.style),l=n.exports.useMemo(()=>{if(!s)return null;const x=Kt(Ne,(Number(e.id)*7.31+3.7)%50||3.7,de(e.style)),h=new ft(new pt(Le,Le),x);return h.rotation.x=-Math.PI/2,h.renderOrder=12,h.visible=!1,h},[e.id,e.style,Boolean(s)]);if(n.exports.useEffect(()=>()=>{l==null||l.geometry.dispose(),l==null||l.material.dispose()},[l]),ce(()=>{var $;const x=performance.now(),h=u.current,y=m.current,S=a==null?void 0:a.current.origem[e.id],[E,U]=($=a==null?void 0:a.current.desvio[e.id])!=null?$:$e,L=a!=null&&a.current.desvio[e.id]?Oe:1;if(h&&!s&&(S||E||U)&&h.parent){const F=c.current;h.parent.getWorldPosition(te),F.t||Object.assign(F,{t:x,x:S?S[0]-te.x*L-E:0,z:S?S[1]-te.z*L-U:0});const W=Math.min(1,(x-F.t)/jt),Q=(1-W)*(1-W);h.parent.getWorldQuaternion(Ke).invert(),h.position.copy(Bt.set(F.x*Q+E+(L-1)*te.x,0,F.z*Q+U+(L-1)*te.z).applyQuaternion(Ke)),S&&h.scale.setScalar(.12+.88*Math.min(1,W*1.6))}if(!s||!y||!l)return;const b=mt(a,x),j=f&&!(a!=null&&a.current.simples)?Ot[f]:Ne;if(l.visible=b>0,!b)return;const g=Nt(j,b,x),H=l.material.uniforms;y.scale.set(Math.max(g.lado,1e-4),Math.max(g.alto,1e-4),Math.max(g.lado,1e-4)),y.visible=g.lado>.001&&g.alto>.001,y.position.set(g.x,g.sobe,0),y.rotation.y=g.gira,H.uTipo.value=j,H.uK.value=b,H.uT.value=x/1e3%600,b<1&&i()}),!s)return p("group",{ref:u,children:p(Fe,{die:e,...t})});const[P,N,M]=s,[I,D]=(z=a==null?void 0:a.current.desvio[e.id])!=null?z:$e,v=a!=null&&a.current.desvio[e.id]?Oe:1;return O("group",{position:[P*v+I,0,M*v+D],...t,children:[p("group",{ref:m,children:p(Fe,{die:e,position:[0,N,0],quaternion:r})}),l&&p("primitive",{object:l,position:[0,.02,0]})]})}const _t=.9,Ht=`
varying vec2 vP;
void main() { vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,Wt=`
precision highp float;
varying vec2 vP;
uniform sampler2D uRuido;
uniform float uK, uS;
uniform vec3 uCor;
float ruido(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return textureLod(uRuido, (i + f + 0.5) / 256.0, 0.0).r; }
void main() {
  float r = length(vP) / 0.6, a = atan(vP.y, vP.x), sai = 1.0 - exp(-uK * 4.5), morre = (1.0 - uK) * (1.0 - uK);
  vec2 d = vec2(cos(a), sin(a));
  float raio = pow(ruido(d * 5.0 + uS), 3.0) * 1.6 + pow(ruido(d * 13.0 - uS), 5.0) * 2.0;
  float anel = exp(-abs(r - sai * 0.95) * 13.0), miolo = exp(-r * r * 9.0) * exp(-uK * 6.0), feixe = raio * exp(-r * 2.4) * smoothstep(sai * 1.2 + 0.05, sai * 0.4, r);
  vec3 luz = uCor * (anel * 0.8 + feixe * 1.5) * morre + mix(uCor, vec3(1.0), 0.6) * miolo * 0.8;
  luz *= smoothstep(1.0, 0.8, r);
  gl_FragColor = vec4(luz, 0.0);
}`;function Gt({x:e,z:s,cor:r}){const t=ie(m=>m.invalidate),a=n.exports.useRef(0),i=n.exports.useRef(null),u=n.exports.useMemo(()=>new Ve({vertexShader:Ht,fragmentShader:Wt,transparent:!0,depthWrite:!1,depthTest:!1,toneMapped:!1,blending:_e,blendSrc:He,blendDst:We,uniforms:{uRuido:{value:Ge()},uK:{value:0},uS:{value:(e*37+s*91+100)%50},uCor:{value:new Ue(r).convertLinearToSRGB()}}}),[r]);return n.exports.useEffect(()=>()=>u.dispose(),[u]),ce(()=>{const m=performance.now()/1e3;a.current||(a.current=m);const c=(m-a.current)/_t;u.uniforms.uK.value=Math.min(1,c),i.current&&(i.current.visible=c<1),c<1&&t()}),p("mesh",{ref:i,position:[e,.03,s],rotation:[-Math.PI/2,0,0],renderOrder:3,material:u,children:p("planeGeometry",{args:[1.2,1.2]})})}function Ut(e){var m;const[s,r]=n.exports.useState(null),t=(m=e==null?void 0:e.join())!=null?m:"",a=n.exports.useRef(null),i=n.exports.useRef(new Set);n.exports.useEffect(()=>{const c=t?t.split(","):[];if(!c.length){r([]);return}let f=!0,l=0,P=0,N="";async function M(){const[v,z]=await Promise.all([w.viewport.transformPoint({x:0,y:0}),w.viewport.transformPoint({x:1e3,y:0})]),x={x:v.x,y:v.y,k:(z.x-v.x)/1e3},h=a.current;!f||h&&h.x===x.x&&h.y===x.y&&h.k===x.k||(a.current=x,i.current.forEach(y=>y(x)))}const I=()=>{const v=()=>{f&&(P=requestAnimationFrame(I))};M().then(v,v)};async function D(v){let z;try{const h=await w.scene.isReady()?(await w.scene.items.getItems(c)).filter(y=>y.visible||v):[];z=await Promise.all(h.map(async y=>{const{min:S,max:E}=await w.scene.items.getItemBounds([y.id]);return{i:c.indexOf(y.id),nome:at(y),x:(S.x+E.x)/2,y:(S.y+E.y)/2,w:E.x-S.x,h:E.y-S.y}})),z.sort((y,S)=>y.i-S.i)}catch(h){if(console.warn(h),!f)return;N||r([]),l=window.setTimeout(D,400,v);return}const x=JSON.stringify(z);!f||(x!==N&&r(z),N=x,l=window.setTimeout(D,400,v))}return Promise.all([w.player.getRole(),M()]).then(([v])=>D(v==="GM"),v=>{console.warn(v),f&&r([])}).finally(I),()=>{f=!1,clearTimeout(l),cancelAnimationFrame(P)}},[t]);const u=n.exports.useCallback(c=>(i.current.add(c),()=>void i.current.delete(c)),[]);return{caixas:s,vista:a,ouvir:u}}const xe=(e,s)=>({x:e.x+s.x*e.k,y:e.y+s.y*e.k,w:s.w*e.k,h:s.h*e.k}),ae=(e,s,r)=>r<s?(s+r)/2:Math.min(Math.max(s,e),r);function je(e){const s=Math.min(...e.map(i=>i.x-i.w/2)),r=Math.max(...e.map(i=>i.x+i.w/2)),t=Math.min(...e.map(i=>i.y-i.h/2)),a=Math.max(...e.map(i=>i.y+i.h/2));return{x:(s+r)/2,y:(t+a)/2,w:r-s,h:a-t}}const Qt=e=>e.x>0&&e.x<innerWidth&&e.y>0&&e.y<innerHeight;function Jt(e,s,r,t,a){const i=Math.max(120,Math.min(innerHeight*(a?.23:t?.36:.3),innerWidth/(r+.1))),u=r/2*i,m=.96*i,c=Qt(s)&&!a,f=c?ae(s.x,u,innerWidth-u):s.x,l=c?ae(s.y,m,innerHeight-m):s.y;return{x:(f-e.x)/e.k,y:(l-e.y)/e.k,escala:i/e.k}}function Xt(e,s,r,t,a){const i=r.escala*e.k,u=s.length>1;return s.map(m=>{const c=xe(e,m),f=Math.min(c.w,c.h*2),l=c.y-c.h/2,P=innerHeight-c.y-c.h/2,N=Math.max(l,P)/1.06,M=u?Math.min(240,Math.max(140,f*1.8)):t?Math.min(560,innerHeight*.55):Math.min(400,Math.max(210,f*2)),I=Math.min(M,Math.max(130,N)),D=l>=I*1.06||l>=P,v=I*.5+8,z=D?l-v:c.y+c.h/2+v;return{token:m.i,acima:D,x:(c.x-(e.x+r.x*e.k))/i,z:(z-(e.y+r.y*e.k))/i,escala:I/1.6/i*Math.min(1.5,.75+.25*a)}})}const ne=360,Yt=600,Zt=new BroadcastChannel(st),ve=e=>Zt.postMessage(e);function ea(){const[e,s]=n.exports.useState(null),[r,t]=n.exports.useState([]);return n.exports.useEffect(()=>{Promise.all([w.player.getConnectionId(),w.player.getMetadata(),w.player.getName(),w.player.getColor()]).then(([i,u,m,c])=>s(f=>f!=null?f:{connectionId:i,metadata:u,name:m,color:c})).catch(console.warn),w.party.getPlayers().then(t).catch(console.warn);const a=[w.player.onChange(s),w.party.onChange(t)];return()=>a.forEach(i=>i())},[]),n.exports.useMemo(()=>e?[e,...r]:r,[e,r])}function ta({caixas:e,cor:s,grupoRef:r}){const t=[...e].sort((a,i)=>a.x-i.x||a.y-i.y);return p("svg",{className:"fio",style:{"--fio":s},children:O("g",{ref:r,children:[p("polyline",{points:t.map(a=>`${a.x},${a.y}`).join(" ")}),t.map((a,i)=>p("circle",{cx:a.x,cy:a.y,r:Math.max(a.w,a.h)*.56},i))]})})}const aa=Math.tan(14*Math.PI/180);function sa({arena:e,vista:s,ouvir:r}){const t=n.exports.useRef(null),a=ie(u=>u.invalidate),i=()=>{const u=s.current,m=t.current;if(!u||!m)return;const c=e.escala*u.k;m.position.set(-(u.x+e.x*u.k-innerWidth/2)/c,innerHeight/(2*c*aa),-(u.y+e.y*u.k-innerHeight/2)/c)};return n.exports.useLayoutEffect(i,[e]),n.exports.useEffect(()=>r(()=>a()),[r]),ce(i),p(Et,{ref:t,makeDefault:!0,fov:28,rotation:[-Math.PI/2,0,0]})}function oa({palco:e}){const s=n.exports.useRef({antes:0,n:0,lentos:0});return ce(()=>{const r=performance.now(),t=r-s.current.antes,a=s.current;a.antes=r,!(t>500||e.current.sumiu!==null)&&(a.n++,t>42&&a.lentos++,e.current.simples=a.n>30&&a.lentos/a.n>.5)}),null}function ra({chave:e}){return n.exports.useEffect(()=>ve({tipo:"pronta",chave:e}),[e]),null}function na({palco:e,skins:s}){const r=ie(a=>a.invalidate),t=qt();return n.exports.useEffect(()=>{if(e.current.sumiu=performance.now(),t)for(const a of new Set(s))Pt(t.context,t.getInput(),a);r()},[]),null}function ia({pessoa:e,chave:s,onFim:r}){var Re,Te,ze,we,Ee,qe,Pe;const{diceRoll:t,rollThrows:a,finishedRollTransforms:i,finishedRollValues:u,finishedRolling:m,finalValue:c,rollTransforms:f}=ht(e),l=n.exports.useMemo(()=>t?rt(t):[],[t]),[P]=n.exports.useState(()=>Object.fromEntries(Object.entries(m?{}:f!=null?f:{}).filter(([,o])=>o))),N=n.exports.useRef(P),M=n.exports.useRef({origem:{},desvio:{},sumiu:null,simples:!1}),[I,D]=n.exports.useState([]),[v,z]=n.exports.useState(!1),[x,h]=n.exports.useState(!1),[y,S]=n.exports.useState(!1),[E,U]=n.exports.useState(!1),L=(t==null?void 0:t.tela)==="cheia",b=nt(l),j=l.filter(o=>!me(o.type));!b&&j.length<l.length,n.exports.useEffect(()=>{const o=setTimeout(()=>z(!0),14e3),d=setTimeout(()=>U(!0),6e4);return()=>[o,d].forEach(clearTimeout)},[]);const g=m&&(v||l.every(o=>P[o.id]||I.includes(o.id))),H=n.exports.useRef({dice:l,finishedRollValues:u,onFim:r});H.current={dice:l,finishedRollValues:u,onFim:r},n.exports.useEffect(()=>{if(!g)return;const{dice:o,finishedRollValues:d}=H.current,k=At(o,d||{}),R=Ct(o.map(B=>B.id)),T=R+(k?k.efeito.dur*1e3:0),K=b?4200:L?3400:2900,G=setTimeout(()=>h(!0),R),J=setTimeout(()=>S(!0),T+K),C=setTimeout(()=>U(!0),T+K+(b?0:gt-250));return()=>[G,J,C].forEach(clearTimeout)},[g]),n.exports.useEffect(()=>{if(!E)return;const o=setTimeout(()=>H.current.onFim(),Yt);return()=>clearTimeout(o)},[E]),n.exports.useEffect(()=>l.forEach(o=>{const d=Be(o.style);d&&yt(d,bt.getContext().sampleRate)}),[]);const{caixas:$,vista:F,ouvir:W}=Ut(t==null?void 0:t.tokens),Q=n.exports.useRef(new Map),he=n.exports.useRef(null),X=n.exports.useRef(null),Y=n.exports.useRef([]),q=n.exports.useRef([]),le=o=>{var k,R;const d=q.current.length===1;for(const[T,K]of Q.current){const G=T<0?je(q.current):q.current.find(V=>V.i===T);if(!G)continue;const J=b&&T>=0&&((k=Y.current.find(V=>V.token===T))==null?void 0:k.acima),C=xe(o,G),B=J?C.y+C.h/2+6+K.offsetHeight:C.y-C.h/2-8;K.style.left=`${d||T<0?ae(C.x,110,innerWidth-110):C.x}px`,K.style.top=`${T<0?ae(B-46-(b?Math.max(0,...Y.current.map(V=>{var Z,ee;return V.escala*1.7*((ee=(Z=X.current)==null?void 0:Z.escala)!=null?ee:0)*o.k})):0),88,innerHeight-20):d?ae(B,56,innerHeight-20):B}px`}(R=he.current)==null||R.setAttribute("transform",`matrix(${o.k} 0 0 ${o.k} ${o.x} ${o.y})`)},ue=o=>d=>{d?Q.current.set(o,d):Q.current.delete(o)},ge=n.exports.useRef(le);if(ge.current=le,n.exports.useEffect(()=>W(o=>ge.current(o)),[W]),n.exports.useLayoutEffect(()=>{F.current&&le(F.current)}),!t||!a||!i||!$)return null;const se=F.current,fe=(Re=it(t))!=null?Re:ct,Ye=$.length>1;se&&$.length&&!L&&!X.current&&(q.current=$,X.current=Jt(se,je($.map(o=>xe(se,o))),fe,Boolean(t.grande),Ye),Y.current=Xt(se,$,X.current,Boolean(t.grande),Math.max(1,l.length-j.length)));const A=X.current,oe=L?"cheia":A?"explosao":"token",pe=(ze=(Te=t.tokens)==null?void 0:Te.length)!=null?ze:0,ye=A?q.current.map(o=>[(o.x-A.x)/A.escala,(o.y-A.y)/A.escala]):[],be=(o,d)=>Math.max(0,q.current.findIndex(k=>{var R;return k.i===((R=o.de)!=null?R:d%Math.max(1,pe))}));A&&!g&&l.forEach((o,d)=>{var K,G,J,C,B,V,Z,ee,Ae,Ce,Ie,De;if(o.de!==void 0&&!q.current.some(tt=>tt.i===o.de)){(J=(K=M.current.desvio)[G=o.id])!=null||(K[G]=[500,500]);return}const k=be(o,d),R=ye[k],T=Y.current[k];me(o.type)?(V=(C=M.current.desvio)[B=o.id])!=null||(C[B]=[T.x,T.z]):(P[o.id]||(Ae=(Z=M.current.origem)[ee=o.id])!=null||(Z[ee]=R),pe>1&&((De=(Ce=M.current.desvio)[Ie=o.id])!=null||(Ce[Ie]=R)))});const ke=l.some(o=>o.de!==void 0),Ze=o=>u?It({...t,bonus:0,dice:t.dice.filter(d=>{var k;return((k=lt(d)[0])==null?void 0:k.de)===o})},u):null,Se=de(l[0].style),et=oe!=="token"?{}:{width:ne,height:ne,left:innerWidth-282,top:innerHeight-282,transform:`scale(${266/ne})`,"--k":266/ne},Me=(we=t.como)!=null?we:e.name,re=g&&x&&u&&(((Ee=t.pedidos)==null?void 0:Ee.length)||0)>1?kt(t,u).map(({linha:o,total:d})=>`${o.rotulo||o.formula} ${d}`).join(", "):t.rotulo;return O("div",{className:`lance ${oe}${oe==="token"&&!b?" solta":""}${E?" sai":""}${g&&x?" lida":""}`,style:{...et,"--cor":t.como?Se:e.color},children:[q.current.length>1&&oe==="explosao"&&p(ta,{caixas:q.current,cor:Se,grupoRef:he}),p("div",{className:"quadro",children:p(St,{frameloop:"demand",dpr:[1,1.5],resize:{offsetSize:!0},children:p(n.exports.Suspense,{fallback:null,children:p(Mt,{volume:.6,children:O(Je.Provider,{value:M,children:[p(ra,{chave:s}),p(oa,{palco:M}),p(Rt,{files:Tt}),!b&&pe<2&&p(Dt,{resolution:512,width:fe,height:2,position:[0,.002,0],blur:.6,opacity:.75,far:1,color:"#000000"}),!b&&ye.map((o,d)=>{var k;return p(Gt,{x:o[0],z:o[1],cor:de(((k=l.find((R,T)=>be(R,T)===d&&!me(R.type)))!=null?k:j[0]).style)},d)}),p(zt,{roll:t,rollThrows:a,finishedTransforms:g?i:void 0,transformsRef:N,onRollFinished:o=>D(d=>[...d,o]),Dice:Vt,lugares:A?Y.current:void 0}),y&&j.length>0&&p(na,{palco:M,skins:j.map(o=>o.style)}),g&&u&&p(wt,{roll:t,values:u}),A?p(sa,{arena:A,vista:F,ouvir:W}):p(Ft,{roletas:b,largura:fe,folga:L?1:b?l.length>1?1:.8:1.12})]})})})})}),A&&q.current.length>1?O(Xe,{children:[q.current.map(o=>O("div",{ref:ue(o.i),className:"placa",children:[p("span",{children:o.nome}),g&&x&&p("b",{children:ke?Ze(o.i):c})]},o.i)),ke&&O("div",{ref:ue(-1),className:"placa total",children:[O("span",{children:[Me,re?` \xB7 ${re}`:""]}),g&&x&&p("b",{children:c})]})]}):O("div",{ref:ue((Pe=(qe=q.current[0])==null?void 0:qe.i)!=null?Pe:0),className:"placa",children:[O("span",{children:[Me,re?` \xB7 ${re}`:""]}),g&&x&&p("b",{children:c})]})]})}function ca(){const e=ea(),[s]=n.exports.useState(()=>new URLSearchParams(location.search).get("k")),r=n.exports.useRef(new Map),[t,a]=n.exports.useState([]),i=e.flatMap(c=>{const f=ot(c);return f?(r.current.has(f.chave)||r.current.set(f.chave,!f.acabou||f.chave===s),r.current.get(f.chave)&&!t.includes(f.chave)?[{p:c,chave:f.chave}]:[]):[]}),u=i.length===0,m=n.exports.useRef(!1);return u||(m.current=!0),n.exports.useEffect(()=>{const c=setInterval(()=>ve({tipo:"viva"}),1e3);return()=>clearInterval(c)},[]),n.exports.useEffect(()=>{if(!u)return;const c=()=>ve({tipo:"acabou",chaves:[...r.current.keys(),s!=null?s:""]}),f=setTimeout(c,m.current?0:3e3),l=setInterval(c,4e3);return()=>{clearTimeout(f),clearInterval(l)}},[u,t]),p(Xe,{children:i.map(({p:c,chave:f})=>p(ia,{chave:f,pessoa:c,onFim:()=>a(l=>[...l,f])},f))})}dt();xt.createRoot(document.getElementById("root")).render(p(vt,{children:p(ca,{})}));
