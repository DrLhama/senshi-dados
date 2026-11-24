import{k as i}from"./tela.bce4250c.js";import{cR as p,cS as f}from"./usePlayerDice.8136433c.js";const m={UNIVERSO:0,PRIMORDIAL:1,BREU:2,SERAFIM:3,ALMAS:4,INFERNO:5,SUMIE:6,PARADOXO:7,TIRANO:8,TITAN:9,NEVE:10},n=11,l=(s,e,c)=>{const a=Math.min(1,Math.max(0,(c-s)/(e-s)));return a*a*(3-2*a)};function x(s,e,c){const a={lado:1,alto:1,sobe:0,x:0,gira:0};if(s===1||s===2||s===6||s===8){const o=l(.02,.5,e);a.alto=1-o,a.lado=e>.5?0:1+.25*Math.sin(o*Math.PI)-.5*o*o}else if(s===0){const o=l(0,.5,e);a.lado=a.alto=1-o*o,a.gira=o*o*9}else if(s===3)a.lado=a.alto=1-l(.25,.65,e),a.sobe=.22*l(0,.6,e);else if(s===4)a.lado=1-l(.1,.5,e),a.alto=1+.6*e,a.sobe=.12*e,a.x=Math.sin(c*.02)*.006;else if(s===5)a.lado=a.alto=1-l(.42,.6,e),a.x=e<.45?Math.sin(c*.09)*.004*e:0;else if(s===7){const o=Math.floor(c/70),t=Math.abs(Math.sin(o*12.9898)*43758.5453)%1;a.lado=a.alto=e>.72||t<e*.75?0:1,a.x=(t-.5)*.12*e}else s===9?(a.x=e<.35?Math.sin(c*.11)*.006:0,a.lado=a.alto=1-l(.3,.42,e)):s===10?a.lado=a.alto=e<.28?1+.06*e:0:a.lado=a.alto=1-l(0,.5,e);return a}const r=`
precision highp float;
varying vec2 vP;
uniform sampler2D uRuido;
uniform float uK, uTipo, uS, uT, uR;
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
  vec2 p = vP / uR;
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
}`,d=.92,b=(s,e,c,a=.115)=>p(r,{uRuido:{value:f()},uK:{value:0},uT:{value:0},uTipo:{value:s},uS:{value:e},uR:{value:a},uCor:{value:new i(c).convertLinearToSRGB()}});export{r as F,d as L,m as T,n as a,x as c,b as m};
