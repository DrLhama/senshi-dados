import{r as l,A as G}from"./destino.e68e8646.js";import{o as A,cZ as j,c_ as W,c$ as H,d0 as E,d1 as X,d2 as k,p as $,j as q,d as U,aG as J,ao as K,an as T}from"./usePlayerDice.828ca162.js";const Q={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`
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
  `},Y={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`
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
  `},ae=l.exports.forwardRef(({scale:e=10,frames:c=1/0,opacity:p=1,width:a=1,height:r=1,blur:o=1,far:h=10,resolution:v=512,smooth:g=!0,color:m="#000000",depthWrite:z=!1,renderOrder:N,...O},Z)=>{const x=l.exports.useRef(null),u=A(t=>t.scene),s=A(t=>t.gl),f=l.exports.useRef(null);a=a*(Array.isArray(e)?e[0]:e||1),r=r*(Array.isArray(e)?e[1]:e||1);const[d,F,L,i,y,M,C]=l.exports.useMemo(()=>{const t=new j(v,v),B=new j(v,v);B.texture.generateMipmaps=t.texture.generateMipmaps=!1;const b=new W(a,r).rotateX(Math.PI/2),V=new H(b),D=new E;D.depthTest=D.depthWrite=!1,D.onBeforeCompile=n=>{n.uniforms={...n.uniforms,ucolor:{value:new X(m)}},n.fragmentShader=n.fragmentShader.replace("void main() {",`uniform vec3 ucolor;
           void main() {
          `),n.fragmentShader=n.fragmentShader.replace("vec4( vec3( 1.0 - fragCoordZ ), opacity );","vec4( ucolor * fragCoordZ * 2.0, ( 1.0 - fragCoordZ ) * 1.0 );")};const I=new k(Q),_=new k(Y);return _.depthTest=I.depthTest=!1,[t,b,D,V,I,_,B]},[v,a,r,e,m]),S=t=>{i.visible=!0,i.material=y,y.uniforms.tDiffuse.value=d.texture,y.uniforms.h.value=t*1/256,s.setRenderTarget(C),s.render(i,f.current),i.material=M,M.uniforms.tDiffuse.value=C.texture,M.uniforms.v.value=t*1/256,s.setRenderTarget(d),s.render(i,f.current),i.visible=!1};let P=0,R,w;return $(()=>{f.current&&(c===1/0||P<c)&&(P++,R=u.background,w=u.overrideMaterial,x.current.visible=!1,u.background=null,u.overrideMaterial=L,s.setRenderTarget(d),s.render(u,f.current),S(o),g&&S(o*.4),s.setRenderTarget(null),x.current.visible=!0,u.overrideMaterial=w,u.background=R)}),l.exports.useImperativeHandle(Z,()=>x.current,[]),q("group",{"rotation-x":Math.PI/2,...O,ref:x,children:[U("mesh",{renderOrder:N,geometry:F,scale:[1,-1,1],rotation:[-Math.PI/2,0,0],children:U("meshBasicMaterial",{transparent:!0,map:d.texture,opacity:p,depthWrite:z})}),U("orthographicCamera",{ref:f,args:[-a/2,a/2,r/2,-r/2,0,h]})]})}),ee=Math.tan(14*Math.PI/180);function ve({roletas:e,folga:c=1}){const{width:p,height:a}=A(m=>m.size),r=p/Math.max(1,a),o=!e&&r<1,[h,v]=e?[K,T]:o?[T,G]:[G,T],g=Math.max(v,h/r)*c/(2*ee);return U(J,{makeDefault:!0,fov:28,position:[0,g,0],rotation:[-Math.PI/2,0,o?Math.PI/2:0]})}export{ae as C,ve as a};
