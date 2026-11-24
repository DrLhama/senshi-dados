import{O as S}from"./getPluginId.ae619b2b.js";import{r as n,d as ue,C as ze,K as Re,g as we,s as Ee,I as G,L as Q}from"./destino.bc18aec2.js";import{c$ as fe,d8 as pe,d9 as me,da as ve,db as de,c_ as xe,V as he,Q as qe,dc as ge,o as Y,dd as X,cY as Pe,cX as Ae,p as Z,d as u,D as ne,j as W,de as Ce,d3 as Ie,aU as De,aS as Fe,a0 as Oe,aO as Ne,df as Le,ak as We,ao as Ke,d0 as He,az as je,aA as $e,aB as Ve,aC as _e,y as Be,z as Ge,aD as Ue,aj as Qe,dg as Xe}from"./usePlayerDice.d0e3f510.js";import{U as Je,W as Ye}from"./tela.3c9b908f.js";import{a as Ze}from"./tipos.bbb321c6.js";import{C as e0,a as a0}from"./Camera.d40060fc.js";import"./canais.d6385a90.js";const t0={UNIVERSO:0,PRIMORDIAL:1,BREU:2,SERAFIM:3,ALMAS:4,INFERNO:5,SUMIE:6,PARADOXO:7,TIRANO:8,TITAN:9,NEVE:10},ie=11,D=(a,t,o)=>{const e=Math.min(1,Math.max(0,(o-a)/(t-a)));return e*e*(3-2*e)};function s0(a,t,o){const e={lado:1,alto:1,sobe:0,x:0,gira:0};if(a===1||a===2||a===6||a===8){const s=D(.02,.5,t);e.alto=1-s,e.lado=t>.5?0:1+.25*Math.sin(s*Math.PI)-.5*s*s}else if(a===0){const s=D(0,.5,t);e.lado=e.alto=1-s*s,e.gira=s*s*9}else if(a===3)e.lado=e.alto=1-D(.25,.65,t),e.sobe=.22*D(0,.6,t);else if(a===4)e.lado=1-D(.1,.5,t),e.alto=1+.6*t,e.sobe=.12*t,e.x=Math.sin(o*.02)*.006;else if(a===5)e.lado=e.alto=1-D(.42,.6,t),e.x=t<.45?Math.sin(o*.09)*.004*t:0;else if(a===7){const s=Math.floor(o/70),i=Math.abs(Math.sin(s*12.9898)*43758.5453)%1;e.lado=e.alto=t>.72||i<t*.75?0:1,e.x=(i-.5)*.12*t}else a===9?(e.x=t<.35?Math.sin(o*.11)*.006:0,e.lado=e.alto=1-D(.3,.42,t)):a===10?e.lado=e.alto=t<.28?1+.06*t:0:e.lado=e.alto=1-D(0,.5,t);return e}const o0=`
varying vec2 vP;
uniform float uR;
void main() { vP = position.xy / uR; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,r0=`
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
}`,le=.92,n0=(a,t,o,e=.115)=>new fe({vertexShader:o0,fragmentShader:r0,transparent:!0,depthWrite:!1,depthTest:!1,toneMapped:!1,blending:pe,blendSrc:me,blendDst:ve,uniforms:{uRuido:{value:de()},uK:{value:0},uT:{value:0},uTipo:{value:a},uS:{value:t},uR:{value:e},uCor:{value:new xe(o).convertLinearToSRGB()}}}),i0=450,ce=new qe,l0=new he,U=new he;function c0({die:a,position:t,quaternion:o,...e}){const s=n.exports.useContext(ge),i=Y(m=>m.invalidate),l=n.exports.useRef(null),v=n.exports.useRef(null),p=n.exports.useRef({t:0,x:0,z:0}),f=ue(a.style),c=n.exports.useMemo(()=>{if(!t)return null;const m=n0(ie,(Number(a.id)*7.31+3.7)%50||3.7,X(a.style)),x=new Pe(new Ae(le,le),m);return x.rotation.x=-Math.PI/2,x.renderOrder=12,x.visible=!1,x},[a.id,a.style,Boolean(t)]);if(n.exports.useEffect(()=>()=>{c==null||c.geometry.dispose(),c==null||c.material.dispose()},[c]),Z(()=>{const m=performance.now(),x=l.current,h=v.current,b=s==null?void 0:s.current.origem[a.id];if(x&&!t&&b&&x.parent){const w=p.current;w.t||(x.parent.getWorldPosition(U),Object.assign(w,{t:m,x:b[0]-U.x,z:b[1]-U.z}));const O=Math.min(1,(m-w.t)/i0),P=(1-O)*(1-O);x.parent.getWorldQuaternion(ce).invert(),x.position.copy(l0.set(w.x,0,w.z).multiplyScalar(P).applyQuaternion(ce)),x.scale.setScalar(.12+.88*Math.min(1,O*1.6))}if(!t||!h||!c)return;const y=Ce(s,m),V=f&&!(s!=null&&s.current.simples)?t0[f]:ie;if(c.visible=y>0,!y)return;const k=s0(V,y,m),H=c.material.uniforms;h.scale.set(Math.max(k.lado,1e-4),Math.max(k.alto,1e-4),Math.max(k.lado,1e-4)),h.visible=k.lado>.001&&k.alto>.001,h.position.set(k.x,k.sobe,0),h.rotation.y=k.gira,H.uTipo.value=V,H.uK.value=y,H.uT.value=m/1e3%600,y<1&&i()}),!t)return u("group",{ref:l,children:u(ne,{die:a,...e})});const[q,F,R]=t;return W("group",{position:[q,0,R],...e,children:[u("group",{ref:v,children:u(ne,{die:a,position:[0,F,0],quaternion:o})}),c&&u("primitive",{object:c,position:[0,.02,0]})]})}const u0=.9,f0=`
varying vec2 vP;
void main() { vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,p0=`
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
}`;function m0({x:a,z:t,cor:o}){const e=Y(v=>v.invalidate),s=n.exports.useRef(0),i=n.exports.useRef(null),l=n.exports.useMemo(()=>new fe({vertexShader:f0,fragmentShader:p0,transparent:!0,depthWrite:!1,depthTest:!1,toneMapped:!1,blending:pe,blendSrc:me,blendDst:ve,uniforms:{uRuido:{value:de()},uK:{value:0},uS:{value:(a*37+t*91+100)%50},uCor:{value:new xe(o).convertLinearToSRGB()}}}),[o]);return n.exports.useEffect(()=>()=>l.dispose(),[l]),Z(()=>{const v=performance.now()/1e3;s.current||(s.current=v);const p=(v-s.current)/u0;l.uniforms.uK.value=Math.min(1,p),i.current&&(i.current.visible=p<1),p<1&&e()}),u("mesh",{ref:i,position:[a,.03,t],rotation:[-Math.PI/2,0,0],renderOrder:3,material:l,children:u("planeGeometry",{args:[1.2,1.2]})})}const v0=360,d0=600,x0=new BroadcastChannel(ze),J=a=>x0.postMessage(a);function h0(){const[a,t]=n.exports.useState(null),[o,e]=n.exports.useState([]);return n.exports.useEffect(()=>{Promise.all([S.player.getConnectionId(),S.player.getMetadata(),S.player.getName(),S.player.getColor()]).then(([i,l,v,p])=>t(f=>f!=null?f:{connectionId:i,metadata:l,name:v,color:p})).catch(console.warn),S.party.getPlayers().then(e).catch(console.warn);const s=[S.player.onChange(t),S.party.onChange(e)];return()=>s.forEach(i=>i())},[]),n.exports.useMemo(()=>a?[a,...o]:o,[a,o])}function g0(a){var s;const[t,o]=n.exports.useState(null),e=(s=a==null?void 0:a.join())!=null?s:"";return n.exports.useEffect(()=>{const i=e?e.split(","):[];if(!i.length){o([]);return}let l=!0,v=0,p=0,f=!1,c=[],q="";const F=m=>{const x=JSON.stringify(m);l&&x!==q&&o(m),q=x};async function R(){try{if(p++%8===0){p===1&&(f=await S.player.getRole()==="GM");const h=await S.scene.isReady()?(await S.scene.items.getItems(i)).filter(b=>b.visible||f):[];c=await Promise.all(i.flatMap(b=>h.some(y=>y.id===b)?[S.scene.items.getItemBounds([b])]:[]))}const[m,x]=c.length?await Promise.all([S.viewport.transformPoint({x:0,y:0}),S.viewport.transformPoint({x:1e3,y:1e3})]):[];F(m&&x?c.map(h=>{const b=(x.x-m.x)/1e3,y=(x.y-m.y)/1e3;return{x:Math.round(m.x+(h.min.x+h.max.x)/2*b),y:Math.round(m.y+(h.min.y+h.max.y)/2*y),w:Math.round((h.max.x-h.min.x)*b),h:Math.round((h.max.y-h.min.y)*y)}}):[])}catch(m){console.warn(m),F([])}l&&(v=window.setTimeout(R,60))}return R(),()=>{l=!1,clearTimeout(v)}},[e]),t}function y0(a){const t=Math.min(...a.map(i=>i.x-i.w/2)),o=Math.max(...a.map(i=>i.x+i.w/2)),e=Math.min(...a.map(i=>i.y-i.h/2)),s=Math.max(...a.map(i=>i.y+i.h/2));if(a.length>1&&(o-t>innerWidth*.9||s-e>innerHeight*.9||o<0||s<0||t>innerWidth||e>innerHeight)){const i=l=>Math.hypot(l.x-innerWidth/2,l.y-innerHeight/2);return a.reduce((l,v)=>i(v)<i(l)?v:l)}return{x:(t+o)/2,y:(e+s)/2,w:o-t,h:s-e}}const K=(a,t,o)=>o<t?(t+o)/2:Math.min(Math.max(t,a),o),b0=Math.tan(14*Math.PI/180);function S0(a,t){const o=Math.max(170,Math.min(innerHeight*.4,innerWidth/2.5)),e=Q/2*o,s=.96*o;return{s:o,cx:K(a.x,e,innerWidth-e),cy:K(a.y,s+(t?.85*o:0),innerHeight-s)}}function M0({pontos:a,cor:t}){const o=[...a].sort((e,s)=>e.x-s.x||e.y-s.y);return W("svg",{className:"fio",style:{"--fio":t},children:[u("polyline",{points:o.map(e=>`${e.x},${e.y}`).join(" ")}),o.map((e,s)=>u("circle",{cx:e.x,cy:e.y,r:Math.max(e.w,e.h)*.56},s))]})}function k0({palco:a}){const t=n.exports.useRef({antes:0,n:0,lentos:0});return Z(()=>{const o=performance.now(),e=o-t.current.antes,s=t.current;s.antes=o,!(e>500||a.current.sumiu!==null)&&(s.n++,e>42&&s.lentos++,a.current.simples=s.n>30&&s.lentos/s.n>.5)}),null}function T0({chave:a}){return n.exports.useEffect(()=>J({tipo:"pronta",chave:a}),[a]),null}function z0({palco:a,skins:t}){const o=Y(s=>s.invalidate),e=Qe();return n.exports.useEffect(()=>{if(a.current.sumiu=performance.now(),e)for(const s of new Set(t))Xe(e.context,e.getInput(),s);o()},[]),null}function R0({pessoa:a,chave:t,onFim:o}){var oe,re;const{diceRoll:e,rollThrows:s,finishedRollTransforms:i,finishedRollValues:l,finishedRolling:v,finalValue:p,rollTransforms:f}=Ne(a),c=n.exports.useMemo(()=>e?we(e):[],[e]),[q]=n.exports.useState(()=>Object.fromEntries(Object.entries(v?{}:f!=null?f:{}).filter(([,r])=>r))),F=n.exports.useRef(q),R=n.exports.useRef({origem:{},sumiu:null,simples:!1}),[m,x]=n.exports.useState([]),[h,b]=n.exports.useState(!1),[y,V]=n.exports.useState(!1),[k,H]=n.exports.useState(!1),[w,O]=n.exports.useState(!1),P=(e==null?void 0:e.tela)==="cheia",A=Ee(c),N=c.filter(r=>!Ze(r.type)),ye=!A&&N.length<c.length;n.exports.useEffect(()=>{const r=setTimeout(()=>b(!0),14e3),d=setTimeout(()=>O(!0),6e4);return()=>[r,d].forEach(clearTimeout)},[]);const C=v&&(h||c.every(r=>q[r.id]||m.includes(r.id))),B=n.exports.useRef({dice:c,finishedRollValues:l,onFim:o});B.current={dice:c,finishedRollValues:l,onFim:o},n.exports.useEffect(()=>{if(!C)return;const{dice:r,finishedRollValues:d}=B.current,T=Je(r,d||{}),E=Ye(r.map(Te=>Te.id)),z=E+(T?T.efeito.dur*1e3:0),I=A?4200:P?3400:2900,_=setTimeout(()=>V(!0),E),Me=setTimeout(()=>H(!0),z+I),ke=setTimeout(()=>O(!0),z+I+(A?0:Le-250));return()=>[_,Me,ke].forEach(clearTimeout)},[C]),n.exports.useEffect(()=>{if(!w)return;const r=setTimeout(()=>B.current.onFim(),d0);return()=>clearTimeout(r)},[w]),n.exports.useEffect(()=>c.forEach(r=>{const d=ue(r.style);d&&We(d,Ke.getContext().sampleRate)}),[]);const L=g0(e==null?void 0:e.tokens);if(!e||!s||!i||!L)return null;const g=L.length?y0(L):null,j=P?"cheia":e.tela==="explosao"&&g?"explosao":"token",M=j==="explosao"&&g?S0(g,ye):null,be=r=>{if(M)return[(r.x-M.cx)/M.s,(r.y-M.cy)/M.s];if(!P||innerWidth<innerHeight)return null;const d=Math.min(innerHeight/1.92,innerWidth/G);return[(r.x-innerWidth/2)/d,(r.y-innerHeight/2)/d]},$=L.map(be);C||N.forEach((r,d)=>{var E,z,I,_;const T=$.length?$[((E=r.de)!=null?E:d)%$.length]:null;T&&!q[r.id]&&((_=(z=R.current.origem)[I=r.id])!=null||(z[I]=T))});const ee=X(c[0].style);let ae={},te={};if(j==="token"){const r=g?Math.min(420,Math.max(240,Math.min(g.w,g.h*2)*2.4)):266,d=g?g.y-g.h/2-r-6:0,T=g?K(g.x-r/2,6,innerWidth-r-6):innerWidth-r-16,E=g?K(d>=6?d:g.y+g.h/2+6,6,innerHeight-r-6):innerHeight-r-16,z=r/v0;ae={left:Math.round(T),top:Math.round(E),transform:`scale(${z})`,"--k":z}}else if(M&&g){const r=g.y-g.h/2-10;te={left:K(g.x,110,innerWidth-110),top:K(r,56,innerHeight-20)}}const Se=(oe=e.como)!=null?oe:a.name,se=C&&y&&l&&(((re=e.pedidos)==null?void 0:re.length)||0)>1?He(e,l).map(({linha:r,total:d})=>`${r.rotulo||r.formula} ${d}`).join(", "):e.rotulo;return W("div",{className:`lance ${j}${j==="token"&&!A?" solta":""}${w?" sai":""}${C&&y?" lida":""}`,style:{...ae,"--cor":e.como?ee:a.color},children:[L.length>1&&j!=="token"&&u(M0,{pontos:L,cor:ee}),u("div",{className:"quadro",children:u(je,{frameloop:"demand",dpr:[1,1.5],resize:{offsetSize:!0},children:u(n.exports.Suspense,{fallback:null,children:u($e,{volume:.6,children:W(ge.Provider,{value:R,children:[u(T0,{chave:t}),u(k0,{palco:R}),u(Ve,{files:_e}),!A&&u(e0,{resolution:512,width:P?G:Q,height:2,position:[0,.002,0],blur:.6,opacity:.75,far:1,color:"#000000"}),!A&&$.map((r,d)=>{var T;return r&&u(m0,{x:r[0],z:r[1],cor:X(((T=N.find((E,z)=>{var I;return((I=E.de)!=null?I:z)%$.length===d}))!=null?T:N[0]).style)},d)}),u(Be,{roll:e,rollThrows:s,finishedTransforms:C?i:void 0,transformsRef:F,onRollFinished:r=>x(d=>[...d,r]),Dice:c0}),k&&N.length>0&&u(z0,{palco:R,skins:N.map(r=>r.style)}),C&&l&&u(Ge,{roll:e,values:l}),M?u(Ue,{makeDefault:!0,fov:28,position:[-(M.cx-innerWidth/2)/M.s,innerHeight/(2*M.s*b0),-(M.cy-innerHeight/2)/M.s],rotation:[-Math.PI/2,0,0]}):u(a0,{roletas:A,largura:P?G:Q,folga:P?1:A?c.length>1?1:.8:1.12})]})})})})}),W("div",{className:"placa",style:te,children:[W("span",{children:[Se,se?` \xB7 ${se}`:""]}),C&&y&&u("b",{children:p})]})]})}function w0(){const a=h0(),[t]=n.exports.useState(()=>new URLSearchParams(location.search).get("k")),o=n.exports.useRef(new Map),[e,s]=n.exports.useState([]),i=a.flatMap(p=>{const f=Re(p);return f?(o.current.has(f.chave)||o.current.set(f.chave,!f.acabou||f.chave===t),o.current.get(f.chave)&&!e.includes(f.chave)?[{p,chave:f.chave}]:[]):[]}),l=i.length===0,v=n.exports.useRef(!1);return l||(v.current=!0),n.exports.useEffect(()=>{const p=setInterval(()=>J({tipo:"viva"}),1e3);return()=>clearInterval(p)},[]),n.exports.useEffect(()=>{if(!l)return;const p=()=>J({tipo:"acabou",chaves:[...o.current.keys(),t!=null?t:""]}),f=setTimeout(p,v.current?0:3e3),c=setInterval(p,4e3);return()=>{clearTimeout(f),clearInterval(c)}},[l,e]),u(Oe,{children:i.map(({p,chave:f})=>u(R0,{chave:f,pessoa:p,onFim:()=>s(c=>[...c,f])},f))})}Ie();De.createRoot(document.getElementById("root")).render(u(Fe,{children:u(w0,{})}));
