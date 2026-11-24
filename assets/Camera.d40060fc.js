import{r as l,I as L}from"./destino.bc18aec2.js";import{o as S,cW as k,cX as V,cY as H,cZ as X,c_ as E,c$ as G,p as Y,j as $,d as p,aD as q,am as J,al as C}from"./usePlayerDice.d0e3f510.js";const K={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`
      varying vec2 vUv;

      void main() {

        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

      }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float h;

    varying vec2 vUv;

    void main() {

    	vec4 sum = vec4( 0.0 );

    	sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

    	gl_FragColor = sum;

    }
  `},Q={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`
    varying vec2 vUv;

    void main() {

      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
  `,fragmentShader:`

  uniform sampler2D tDiffuse;
  uniform float v;

  varying vec2 vUv;

  void main() {

    vec4 sum = vec4( 0.0 );

    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

    gl_FragColor = sum;

  }
  `},ae=l.exports.forwardRef(({scale:e=10,frames:o=1/0,opacity:h=1,width:t=1,height:a=1,blur:f=1,far:m=10,resolution:v=512,smooth:g=!0,color:x="#000000",depthWrite:y=!1,renderOrder:z,...N},O)=>{const d=l.exports.useRef(null),u=S(r=>r.scene),s=S(r=>r.gl),c=l.exports.useRef(null);t=t*(Array.isArray(e)?e[0]:e||1),a=a*(Array.isArray(e)?e[1]:e||1);const[D,W,Z,i,M,T,A]=l.exports.useMemo(()=>{const r=new k(v,v),I=new k(v,v);I.texture.generateMipmaps=r.texture.generateMipmaps=!1;const b=new V(t,a).rotateX(Math.PI/2),F=new H(b),U=new X;U.depthTest=U.depthWrite=!1,U.onBeforeCompile=n=>{n.uniforms={...n.uniforms,ucolor:{value:new E(x)}},n.fragmentShader=n.fragmentShader.replace("void main() {",`uniform vec3 ucolor;
           void main() {
          `),n.fragmentShader=n.fragmentShader.replace("vec4( vec3( 1.0 - fragCoordZ ), opacity );","vec4( ucolor * fragCoordZ * 2.0, ( 1.0 - fragCoordZ ) * 1.0 );")};const _=new G(K),j=new G(Q);return j.depthTest=_.depthTest=!1,[r,b,U,F,_,j,I]},[v,t,a,e,x]),P=r=>{i.visible=!0,i.material=M,M.uniforms.tDiffuse.value=D.texture,M.uniforms.h.value=r*1/256,s.setRenderTarget(A),s.render(i,c.current),i.material=T,T.uniforms.tDiffuse.value=A.texture,T.uniforms.v.value=r*1/256,s.setRenderTarget(D),s.render(i,c.current),i.visible=!1};let R=0,w,B;return Y(()=>{c.current&&(o===1/0||R<o)&&(R++,w=u.background,B=u.overrideMaterial,d.current.visible=!1,u.background=null,u.overrideMaterial=Z,s.setRenderTarget(D),s.render(u,c.current),P(f),g&&P(f*.4),s.setRenderTarget(null),d.current.visible=!0,u.overrideMaterial=B,u.background=w)}),l.exports.useImperativeHandle(O,()=>d.current,[]),$("group",{"rotation-x":Math.PI/2,...N,ref:d,children:[p("mesh",{renderOrder:z,geometry:W,scale:[1,-1,1],rotation:[-Math.PI/2,0,0],children:p("meshBasicMaterial",{transparent:!0,map:D.texture,opacity:h,depthWrite:y})}),p("orthographicCamera",{ref:c,args:[-t/2,t/2,a/2,-a/2,0,m]})]})}),ee=Math.tan(14*Math.PI/180);function ve({roletas:e,largura:o=L,folga:h=1}){const{width:t,height:a}=S(y=>y.size),f=t/Math.max(1,a),m=!e&&f<1,[v,g]=e?[J,C]:m?[C,o]:[o,C],x=Math.max(g,v/f)*h/(2*ee);return p(q,{makeDefault:!0,fov:28,position:[0,x,0],rotation:[-Math.PI/2,0,m?Math.PI/2:0]})}export{ae as C,ve as a};
