import{r as c,K as W}from"./destino.aa411f3a.js";import{aI as j,bf as Z,y as H,bV as E,k as K,z}from"./tela.bce4250c.js";import{n as S,o as X,j as q,d as p,ao as J,a9 as Q,a8 as C}from"./usePlayerDice.ceb1d17f.js";const Y={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`
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
  `},$={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`
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
  `},ve=c.exports.forwardRef(({scale:e=10,frames:o=1/0,opacity:h=1,width:t=1,height:a=1,blur:f=1,far:m=10,resolution:v=512,smooth:y=!0,color:x="#000000",depthWrite:g=!1,renderOrder:G,...N},O)=>{const d=c.exports.useRef(null),u=S(r=>r.scene),s=S(r=>r.gl),l=c.exports.useRef(null);t=t*(Array.isArray(e)?e[0]:e||1),a=a*(Array.isArray(e)?e[1]:e||1);const[D,V,F,i,M,T,A]=c.exports.useMemo(()=>{const r=new j(v,v),B=new j(v,v);B.texture.generateMipmaps=r.texture.generateMipmaps=!1;const I=new Z(t,a).rotateX(Math.PI/2),L=new H(I),U=new E;U.depthTest=U.depthWrite=!1,U.onBeforeCompile=n=>{n.uniforms={...n.uniforms,ucolor:{value:new K(x)}},n.fragmentShader=n.fragmentShader.replace("void main() {",`uniform vec3 ucolor;
           void main() {
          `),n.fragmentShader=n.fragmentShader.replace("vec4( vec3( 1.0 - fragCoordZ ), opacity );","vec4( ucolor * fragCoordZ * 2.0, ( 1.0 - fragCoordZ ) * 1.0 );")};const k=new z(Y),_=new z($);return _.depthTest=k.depthTest=!1,[r,I,U,L,k,_,B]},[v,t,a,e,x]),P=r=>{i.visible=!0,i.material=M,M.uniforms.tDiffuse.value=D.texture,M.uniforms.h.value=r*1/256,s.setRenderTarget(A),s.render(i,l.current),i.material=T,T.uniforms.tDiffuse.value=A.texture,T.uniforms.v.value=r*1/256,s.setRenderTarget(D),s.render(i,l.current),i.visible=!1};let R=0,b,w;return X(()=>{l.current&&(o===1/0||R<o)&&(R++,b=u.background,w=u.overrideMaterial,d.current.visible=!1,u.background=null,u.overrideMaterial=F,s.setRenderTarget(D),s.render(u,l.current),P(f),y&&P(f*.4),s.setRenderTarget(null),d.current.visible=!0,u.overrideMaterial=w,u.background=b)}),c.exports.useImperativeHandle(O,()=>d.current,[]),q("group",{"rotation-x":Math.PI/2,...N,ref:d,children:[p("mesh",{renderOrder:G,geometry:V,scale:[1,-1,1],rotation:[-Math.PI/2,0,0],children:p("meshBasicMaterial",{transparent:!0,map:D.texture,opacity:h,depthWrite:g})}),p("orthographicCamera",{ref:l,args:[-t/2,t/2,a/2,-a/2,0,m]})]})}),ee=Math.tan(14*Math.PI/180);function ue({roletas:e,largura:o=W,folga:h=1}){const{width:t,height:a}=S(g=>g.size),f=t/Math.max(1,a),m=!e&&f<1,[v,y]=e?[Q,C]:m?[C,o]:[o,C],x=Math.max(y,v/f)*h/(2*ee);return p(J,{makeDefault:!0,fov:28,position:[0,x,0],rotation:[-Math.PI/2,0,m?Math.PI/2:0]})}export{ve as C,ue as a};
