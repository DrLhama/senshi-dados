import{t as z,c as R,n as q,s as y,r as x,d as I}from"./getPluginId.d47e8c74.js";const B=`
attribute vec2 pos;
uniform vec2 uTela;
varying vec2 vP;
void main() { vP = pos * 0.5 * uTela / min(uTela.x, uTela.y); gl_Position = vec4(pos, 0.0, 1.0); }`,F=`
uniform vec2 uTela;
varying vec2 vP;
void main() { vP = position.xy / min(uTela.x, uTela.y); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,w=`
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
// olho pequeno: x ao longo do anel, y atrav\xE9s. Devolve (branco, iris, pupila, contorno)
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
    vec2 q = (p - c) * rot(uT * (0.5 + g) * 1.3 + fi);
    q.x /= 0.35 + 0.65 * abs(cos(uT * (0.7 + h) + fi));            // gira no espa\xE7o: afina e abre
    float tam = 0.016 + 0.034 * g * g;
    vec2 k = q / tam;
    float d = max(max(dot(k, vec2(0.87, 0.5)), dot(k, vec2(-0.80, 0.6))), max(dot(k, vec2(0.10, -1.0)), dot(k, vec2(-0.9, -0.4)))) - 1.0;
    float dentro = smoothstep(0.06, -0.06, d), aro = exp(-abs(d) * 14.0);
    vec3 c3 = mix(uA, vec3(1.0), 0.35) * (0.10 + 0.55 * pow(0.5 + 0.5 * sin(dot(k, vec2(2.0, 3.0)) + uT * 3.0 + fi), 4.0));
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
  luz += asas(p, abreAsas) * presenca * (0.85 + 0.9 * soco);
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
      float hol = h11(ia + q * 9.0), vivo = uIdle > 0.5 ? step(0.8, sin(uT * 0.8 + hol * 30.0)) * 0.7 : max(step(0.93, sin(uT * 1.6 + hol * 40.0)) * 0.5 * pr, revel * (1.0 - exp(-max(tv, 0.0) * 7.0 * (0.5 + hol))));
      vec4 o = olho(vec2(fa, v * 0.80), vivo, vec2(0.0, -0.6));
      cor = mix(cor, vec3(0.93, 0.90, 0.84) * (0.55 + 0.6 * soco), o.x);
      cor = mix(cor, uA * 1.1, o.y); cor = mix(cor, vec3(0.01), o.z);
      cor += uB * o.w * vivo * 0.5;
      cor += mix(uA, vec3(1.0), 0.5) * clar * 0.6;
    }
    luz = mix(luz, cor, presenca);
  }

  luz += soltos(p, uIdle > 0.5 ? -1.0 : tv).rgb * presenca;
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
      if (on > 0.0) luz += mix(uB, vec3(1.0), 0.5 - 0.2 * fi) * exp(-abs(r - on) * (20.0 - 4.0 * fi)) * exp(-tv * 1.7) * 1.2;
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
}`;function S(o,i,s,u){var d;const e=o.getContext("webgl",{alpha:!0,premultipliedAlpha:!0,antialias:!1,powerPreference:"high-performance"});if(!e)return null;const n=(t,c)=>{const f=e.createShader(t);return e.shaderSource(f,c),e.compileShader(f),e.getShaderParameter(f,e.COMPILE_STATUS)||console.error(e.getShaderInfoLog(f)),f},r=e.createProgram();if(e.attachShader(r,n(e.VERTEX_SHADER,B)),e.attachShader(r,n(e.FRAGMENT_SHADER,w)),e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS))return null;e.useProgram(r),e.bindBuffer(e.ARRAY_BUFFER,e.createBuffer()),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),e.STATIC_DRAW);const p=e.getAttribLocation(r,"pos");e.enableVertexAttribArray(p),e.vertexAttribPointer(p,2,e.FLOAT,!1,0,0);const a=t=>e.getUniformLocation(r,t),l=z(i),[h,b]=R(i),T=(d=window.matchMedia)==null?void 0:d.call(window,"(prefers-reduced-motion: reduce)").matches;e.uniform1f(a("uRev"),l.rev),e.uniform1f(a("uFim"),l.fim),e.uniform1f(a("uNivel"),q(i)),e.uniform1f(a("uAneis"),l.aneis),e.uniform1f(a("uSorte"),s.length===1?y(i,s[0]):0),e.uniform1f(a("uSem"),u%977/10),e.uniform1f(a("uClarao"),T?.1:.85),e.uniform1fv(a("uTrava[0]"),l.travas),e.uniform3f(a("uA"),...x(h)),e.uniform3f(a("uB"),...x(b));const g=a("uT"),A=a("uTela"),m=document.createElement("canvas"),E=e.createTexture();e.bindTexture(e.TEXTURE_2D,E),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0);for(const[t,c]of[[e.TEXTURE_MIN_FILTER,e.LINEAR],[e.TEXTURE_MAG_FILTER,e.LINEAR],[e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE],[e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE]])e.texParameteri(e.TEXTURE_2D,t,c);let v="";return{tempos:l,quadro(t){const c=_(t,l.rev,i,s);c!==v&&(v=c,I(m,c),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,m)),e.viewport(0,0,o.width,o.height),e.uniform2f(A,o.width,o.height),e.uniform1f(g,t),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.TRIANGLES,0,3)}}}function _(o,i,s,u){if(o>=i-.06)return u.join(" \xB7 ");const e=Math.floor(o/Math.max(.05,.16-.02*o));return u.map((n,r)=>1+Math.abs(Math.imul(e*7919+r*104729+31,2654435761)>>>8)%s).join(" \xB7 ")}export{w as F,F as V,S as c,_ as n};
