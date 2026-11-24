import{M as a}from"./regras.11055626.js";const o=11,e=[1.56,1.17],t=`
precision highp float;
varying vec2 vP;
uniform sampler2D uAtlas, uRuido;
uniform vec2 uGrade, uMeio, uTremor;
uniform vec4 uP[${a}], uE[${a}];
uniform vec3 uC[${a}], uVence;
uniform int uN;
uniform float uT, uVeu, uFenda, uChoque, uClarao, uRaio, uTrava, uSem, uLinha, uMapa;
uniform vec2 uLado;

float h11(float n) { return fract(sin(n * 91.17) * 4373.13); }
float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
mat2 rot(float a) { float c = cos(a), s = sin(a); return mat2(c, -s, s, c); }
float ruido(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return textureLod(uRuido, (i + f + 0.5) / 256.0, 0.0).r; }
float fbm(vec2 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 4; i++) { s += a * ruido(p); p = mat2(1.6, 1.2, -1.2, 1.6) * p + 3.7; a *= 0.5; } return s; }
float fbm3(vec2 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 3; i++) { s += a * ruido(p); p = mat2(1.6, 1.2, -1.2, 1.6) * p + 3.7; a *= 0.5; } return s; }
float fio(float d, float w) { return smoothstep(w, w * 0.25, abs(d)) + 0.35 * exp(-abs(d) / (w * 4.0)); }

// raio que treme entre dois pontos
float raio(vec2 p, vec2 a, vec2 b, float s) {
  vec2 d = b - a; float L = max(length(d), 1e-3); d /= L;
  vec2 q = vec2(dot(p - a, d), dot(p - a, vec2(-d.y, d.x)));
  float k = q.x / L, env = sin(clamp(k, 0.0, 1.0) * 3.1416), salto = floor(uT * 20.0) * 3.7 + s;
  float n = (ruido(vec2(q.x * 8.0 + s, salto)) - 0.5) * 0.20 + (ruido(vec2(q.x * 30.0, salto * 1.3)) - 0.5) * 0.06, w = abs(q.y - n * env);
  return step(0.0, k) * step(k, 1.0) * (smoothstep(0.006, 0.0, w) + 0.22 * exp(-w * 42.0));
}

// beirada quebrada da cratera numa dire\xE7\xE3o
float beirada(vec2 d, float s) { return 0.80 + 0.22 * (ruido(d * 1.6 + s) - 0.5) + 0.15 * (ruido(d * 4.6 + s * 1.7) - 0.5) + 0.07 * (ruido(d * 13.0 + s) - 0.5); }

// a fenda do lado i no ponto q (em raios dela): luz e cobertura
vec4 fenda(vec2 q, int i, float racha) {
  vec4 P = uP[i], E = uE[i];
  vec3 C = uC[i], quente = mix(C, vec3(1.0), 0.62);
  float s = float(i) * 17.3 + uSem, r = length(q), ab = P.w, R = 1e-3, pulsa = 0.85 + 0.15 * sin(uT * 2.6 + s);
  vec2 d = q / max(r, 1e-3);
  R = beirada(d, s) * ab;
  float e = r - R, viva = (0.7 + 0.5 * E.y) * pulsa;
  vec3 col = vec3(0.0);
  float a = 0.0;
  if (e < 0.0) {
    // paredes em degraus que descem, e magma correndo no fundo
    float prof = 0.0, quina = 0.0;
    for (int k = 1; k < 5; k++) {
      float fk = float(k), rk = beirada(d, s + fk * 2.9) * ab * (1.0 - 0.115 * fk);
      prof += smoothstep(0.012, -0.012, r - rk);
      quina += fio(r - rk, 0.011) * (1.0 - 0.16 * fk);
    }
    vec2 m = q * (1.0 + 0.22 * prof);
    float pedra = fbm3(m * 7.0 + s), veio = 1.0 - abs(2.0 * fbm(m * 2.1 + vec2(s, -uT * 0.13)) - 1.0), fundo = smoothstep(0.5, 4.0, prof);
    float lava = pow(veio, 7.0);
    col = C * (0.05 + 0.20 * pedra * pedra) * (1.15 - 0.22 * prof);
    col += C * quina * 0.34 * viva;
    col += (C * lava * 1.1 + quente * pow(lava, 2.2) * 1.2) * (0.16 + fundo * 0.9) * viva;
    col += C * 0.20 * fundo * viva * (0.5 + ruido(m * 3.0 - uT * 0.4));
    // o n\xFAmero respira no escuro
    col *= 1.0 - 0.72 * exp(-dot(q * vec2(0.9, 1.7), q * vec2(0.9, 1.7)) * 3.2);
    a = 1.0;
  } else {
    // o ch\xE3o em volta racha, tanto mais quanto maior o n\xFAmero
    float len = R + (0.22 + 0.95 * E.z) * ab, luz = 0.0;
    for (int k = 0; k < 2; k++) {
      float fk = float(k), n = abs(ruido(d * (3.1 + fk * 3.4) + s + fk * 9.0 + (ruido(q * 2.7 + s) - 0.5) * 1.1) - 0.5);
      float larg = 0.030 * (1.0 - 0.35 * fk) * smoothstep(len, R, r);
      luz = max(luz, smoothstep(larg, larg * 0.15, n) * smoothstep(len, mix(R, len, 0.55), r));
    }
    col += mix(C, quente, luz) * luz * 1.25 * viva;
    a = max(a, luz * 0.85);
    col += C * 0.30 * exp(-e * 4.6) * ab * viva;
  }
  col += mix(C, vec3(1.0), 0.5) * fio(e, 0.016) * ab * viva * 1.1;
  // anel que gira, gravado em runas
  float an = abs(r - 1.17 * ab), ang = atan(q.y, q.x) + uT * 0.25 * (mod(float(i), 2.0) * 2.0 - 1.0);
  float runa = step(0.42, ruido(vec2(floor(ang * 14.0), floor((r - 1.11) * 46.0)) + s * 3.0));
  col += C * (fio(an, 0.006) * 0.55 + runa * smoothstep(0.050, 0.044, an) * 0.22) * ab * (0.5 + E.y) * (1.0 - racha);
  // n\xFAmero em brasa
  vec2 uv = q / vec2(${e[0]}, ${e[1]}) + 0.5;
  if (uv.x > 0.0 && uv.x < 1.0 && uv.y > 0.0 && uv.y < 1.0) {
    vec2 cel = (vec2(mod(float(i), uGrade.x), uGrade.y - 1.0 - floor(float(i) / uGrade.x)) + uv) / uGrade;
    float g = textureLod(uAtlas, cel, 0.0).r, h = textureLod(uAtlas, cel, 3.0).r, h2 = textureLod(uAtlas, cel, 4.6).r;
    col = mix(col, mix(vec3(1.0), quente, 0.22 + 0.30 * uv.y) * (1.0 + 0.25 * E.y), g * ab);
    col += C * (h * 0.75 + h2 * 0.7) * (1.0 - g) * (0.7 + 0.6 * E.y) * ab;
    a = max(a, g * ab);
  }
  // rachaduras que anunciam a quebra
  if (racha > 0.0) {
    float n = abs(fbm3(q * 3.1 + s * 1.3) - 0.5);
    col += vec3(1.0) * smoothstep(0.030 * racha, 0.0, n) * step(r, R) * racha;
  }
  return vec4(col, a);
}

void main() {
  // no mapa: um peda\xE7o do cen\xE1rio que se desfaz nas bordas, sem v\xE9u na tela
  float some = 1.0;
  if (uMapa > 0.0) {
    vec2 lado = vP / uLado, dir = normalize(vP + 1e-4);
    some = smoothstep(1.02, 0.64, length(lado) + 0.17 * ruido(dir * 3.0 + uSem) + 0.08 * ruido(dir * 10.0 - uSem));
    if (some <= 0.0) discard;
  }
  vec2 p = vP + uTremor;
  float nevoa = fbm3(p * 2.4 + vec2(uT * 0.07, -uT * 0.05) + uSem);
  vec3 tinta = vec3(0.0);
  for (int i = 0; i < uN; i++) {
    vec2 o = p - uP[i].xy;
    tinta += uC[i] * uP[i].w * exp(-dot(o, o) * 7.0) * (1.0 - 0.85 * min(uE[i].x, 1.0)) * (0.7 + 0.5 * uE[i].y);
  }
  vec3 col = (vec3(0.010, 0.009, 0.020) + tinta * (0.07 + 0.42 * nevoa * nevoa)) * uVeu;
  float al = uVeu * (0.90 - 0.22 * smoothstep(0.30, 0.62, abs(p.y)));

  // a linha que liga todos, como a da b\xFAssola
  if (uLinha > 0.0) {
    float y = p.y - uMeio.y, n = (ruido(vec2(p.x * 5.0 - uT * 0.9, 3.0)) - 0.5) * 0.03;
    col += (tinta + 0.12) * fio(y - n, 0.0035) * uLinha;
  }
  // o mundo se parte entre os dois
  if (uFenda > 0.0) {
    vec2 q = rot(0.20) * (p - uMeio);
    float x = q.x + (fbm3(vec2(q.y * 3.4, uSem)) - 0.45) * 0.16 + (ruido(vec2(q.y * 17.0, uSem)) - 0.5) * 0.03;
    float larg = uFenda * (0.012 + 0.030 * ruido(vec2(q.y * 5.0, uSem + 4.0))) * smoothstep(0.75 * uFenda + 0.02, 0.0, abs(q.y) * 0.9), d = abs(x) - larg;
    vec3 lado = mix(uC[0], uC[uN - 1], smoothstep(-0.02, 0.02, x));
    float fervor = fbm3(vec2(x * 14.0, q.y * 5.0 - uT * 1.3));
    if (d < 0.0) { col = mix(lado, vec3(1.0), 0.35 + 0.6 * fervor) * (0.7 + 0.9 * fervor); al = 1.0; }
    col += lado * (0.65 * exp(-max(d, 0.0) * 26.0) + 0.18 * exp(-max(d, 0.0) * 6.0)) * uFenda * (0.7 + 0.5 * fervor);
  }
  // brasas que sobem
  for (int k = 0; k < 3; k++) {
    float fk = float(k), esc = 13.0 + fk * 8.0;
    vec2 q = p * esc + vec2(fk * 7.3 + sin(uT * 0.7 + p.y * 3.0) * 0.6, -uT * (1.5 + fk * 0.9)), c = floor(q), f = fract(q) - 0.5;
    float h = h21(c + fk * 13.0);
    if (h > 0.83) col += (tinta * 1.6 + 0.10) * smoothstep(0.13, 0.0, length(f - (vec2(h21(c + 1.7), h21(c + 5.1)) - 0.5) * 0.6)) * (0.5 + 0.5 * sin(uT * 5.0 + h * 60.0)) * uVeu;
  }

  for (int i = 0; i < uN; i++) {
    vec4 P = uP[i], E = uE[i];
    if (P.w <= 0.0) continue;
    vec2 q = (p - P.xy) / P.z;
    if (dot(q, q) > (E.x > 0.0 ? 18.0 : 5.6)) continue;
    vec4 f;
    if (E.x <= 0.0) f = fenda(q, i, max(0.0, -E.x));
    else {
      // cada caco voa para um lado, gira e cai no abismo
      f = vec4(0.0);
      float u = E.x;
      for (int c = 0; c < ${o}; c++) {
        float fc = float(c), an = fc * 2.39996 + h11(fc + uSem) * 0.8, rr = sqrt((fc + 0.5) / ${o}.0) * 0.98;
        vec2 S = vec2(cos(an), sin(an)) * rr, off = S * u * (0.35 + 1.0 * h11(fc + 3.0)) + vec2(E.w * (0.35 + 0.9 * h11(fc + 5.0)) * u, (0.5 * h11(fc + 8.0)) * u - 2.5 * u * u);
        vec2 qs = rot((h11(fc + 11.0) - 0.5) * 5.0 * u) * (q - S - off) + S;
        if (dot(qs, qs) > 3.2) continue;
        float perto = 1e3, seg = 1e3;
        int dono = -1;
        for (int k = 0; k < ${o}; k++) {
          float fk = float(k), ak = fk * 2.39996 + h11(fk + uSem) * 0.8, dd = length(qs - vec2(cos(ak), sin(ak)) * sqrt((fk + 0.5) / ${o}.0) * 0.98);
          if (dd < perto) { seg = perto; perto = dd; dono = k; } else seg = min(seg, dd);
        }
        if (dono != c) continue;
        float some = smoothstep(1.05, 0.45, u + 0.25 * h11(fc + 21.0));
        f = fenda(qs, i, 0.0);
        f.rgb = f.rgb * (1.0 - 0.45 * u) + mix(uC[i], vec3(1.0), 0.6) * smoothstep(0.055, 0.0, seg - perto) * step(length(qs), 0.9) * 1.5 * exp(-u * 2.2);
        f *= some;
        break;
      }
    }
    col = col * (1.0 - f.a) + f.rgb;
    al = max(al, f.a);
  }

  // raios antes do choque
  if (uRaio > 0.0) for (int i = 0; i < uN - 1; i++) {
    vec2 A = uP[i].xy, B = uP[uN - 1].xy;
    float l = raio(p, A, B, float(i) * 5.1) + 0.7 * raio(p, A, B, float(i) * 5.1 + 2.3);
    col += mix(mix(uC[i], uC[uN - 1], smoothstep(0.0, 1.0, dot(p - A, B - A) / dot(B - A, B - A))), vec3(1.0), 0.45) * l * uRaio;
  }
  // os dois travados no empate
  if (uTrava > 0.0) {
    float d = length((p - uMeio) * vec2(1.6, 0.8));
    col += (vec3(1.0, 0.94, 0.8) * exp(-d * 16.0) + (uC[0] + uC[uN - 1]) * 0.35 * exp(-d * 5.0)) * uTrava * (0.8 + 0.4 * ruido(vec2(uT * 30.0, 1.0)));
  }
  // o choque: clar\xE3o, duas ondas e estilha\xE7os de luz
  if (uChoque > 0.0) {
    vec2 o = p - uMeio;
    float d = length(o), ang = atan(o.y, o.x);
    col += mix(uVence, vec3(1.0), 0.6) * uClarao * (exp(-uChoque * 6.5) * exp(-d * 2.2) * 1.6 + exp(-uChoque * 11.0) * 0.55);
    for (int k = 0; k < 2; k++) {
      float Rr = (uChoque - float(k) * 0.10) * 1.35, w = (d - Rr + 0.02 * (ruido(vec2(ang * 4.0, uSem)) - 0.5)) * 26.0;
      if (Rr > 0.0) col += mix(uVence, vec3(1.0), 0.35) * exp(-w * w) * exp(-uChoque * 3.0) * (1.0 - 0.45 * float(k));
    }
    float n = floor((ang + 3.1416) * 11.0), h = h11(n + uSem), L = uChoque * (0.35 + 1.25 * h), fa = fract((ang + 3.1416) * 11.0) - 0.5;
    col += mix(uVence, vec3(1.0), h) * smoothstep(0.30, 0.0, abs(fa)) * smoothstep(L, L - 0.02, d) * smoothstep(L - 0.16 * exp(-uChoque * 2.0), L, d) * exp(-uChoque * 2.4) * 1.5;
    // raios de luz do vencedor
    float g = ruido(normalize(o + 1e-4) * 5.0 + uT * 0.25) * 0.65 + ruido(normalize(o + 1e-4) * 11.0 - uT * 0.35) * 0.5;
    col += uVence * pow(g, 3.2) * exp(-d * 2.4) * 0.55 * smoothstep(0.0, 0.3, uChoque);
  }
  gl_FragColor = vec4(col * step(0.001, uVeu), al) * some;
}`;export{t as F};
