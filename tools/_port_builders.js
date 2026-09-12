// SNAPSHOT, NOT SOURCE. These are the landmark builders as they were injected by tools/_port.py.
// masala-dabba.html is the source of truth and has diverged since (the Chinese fishing nets were
// rebuilt there). Kept only as the record of the port; editing this file changes nothing.
// ============================================================ LANDMARK BUILDERS (local: +Y up, origin at ground)
// Primitives only, one per region. Mountains and river valleys are in the terrain already, so a
// builder never adds a fake peak; it adds the thing people would recognise from a photograph.
const B = {};
B.dal = g => {                                   // Dal Lake: shikara, chinar, a Mughal garden terrace
  const water = new THREE.Mesh(new THREE.CircleGeometry(3.1, 28), mat(0x4d7f93, {roughness:0.35}));
  water.rotation.x = -Math.PI/2; water.position.y = 0.02; g.add(water);
  const boat = new THREE.Group();
  boat.add(box(1.5,0.16,0.42,0x6b4a30,0,0,0));
  boat.add(prism(0.42,0.34,0.3,0x6b4a30,0.82,0,0).rotateY(Math.PI/2));
  boat.add(box(0.72,0.04,0.46,0xd9c9a8,-0.1,0.44,0));
  for(const x of [-0.42,0.22]) for(const z of [-0.2,0.2]) boat.add(cyl(0.02,0.02,0.44,0xd9c9a8,x,0.16,z,6));
  boat.position.set(0.4,0.06,0.7); boat.rotation.y = -0.35; g.add(boat);
  for(const [x,z,s] of [[-1.5,-0.9,1],[-2.1,-0.2,0.8],[1.7,-1.1,0.9]]){    // chinar trees
    g.add(cyl(0.08*s,0.11*s,0.5*s,0x6b5540,x,0.02,z,8));
    g.add(sph(0.42*s,0x4e7a44,x,0.5*s+0.32*s,z,10,8));
  }
  const pav = new THREE.Group();                 // the garden pavilion above the water
  pav.add(box(1.5,0.22,1.0,0xbcae96,0,0,0));
  pav.add(box(1.2,0.16,0.8,0xbcae96,0,0.22,0));
  for(const x of [-0.48,0.48]) for(const z of [-0.28,0.28]) pav.add(cyl(0.06,0.06,0.6,0xe3d9c4,x,0.38,z,8));
  pav.add(box(1.25,0.1,0.85,0xd6c9ad,0,0.98,0));
  pav.add(pyr(0.5,0.42,0x8a6f52,0,1.08,0));
  pav.position.set(-1.0,0.12,-1.9); g.add(pav);
};
B.harmandir = g => {                             // the Golden Temple in its tank, with the causeway
  const tank = new THREE.Mesh(new THREE.CircleGeometry(2.9, 4), mat(0x3f7488, {roughness:0.3}));
  tank.rotation.x = -Math.PI/2; tank.rotation.z = Math.PI/4; tank.position.y = 0.02; g.add(tank);
  g.add(box(6.0,0.24,6.0,0xe8e2d4,0,-0.24,0));    // the marble parikrama all round
  const T = new THREE.Group();
  T.add(box(1.5,0.18,1.5,0xe8e2d4,0,0,0));
  T.add(box(1.25,0.85,1.25,0xd9a93f,0,0.18,0));
  T.add(box(1.35,0.1,1.35,0xc8942f,0,1.03,0));
  T.add(box(0.85,0.5,0.85,0xd9a93f,0,1.13,0));
  T.add(dome(0.5,0xe0b44a,0,1.63,0));
  T.add(cyl(0.05,0.07,0.3,0xe0b44a,0,2.1,0,8)); T.add(sph(0.07,0xf0d489,0,2.42,0,8,6));
  for(const [x,z] of [[-0.62,-0.62],[0.62,-0.62],[-0.62,0.62],[0.62,0.62]]){
    T.add(cyl(0.14,0.15,0.32,0xd9a93f,x,1.03,z,10)); T.add(dome(0.2,0xe0b44a,x,1.35,z));
  }
  g.add(T);
  const cw = box(2.4,0.12,0.5,0xe8e2d4,-1.9,0.05,0); g.add(cw);   // the causeway to the north gate
  g.add(box(0.8,0.9,0.8,0xe8e2d4,-3.3,0,0)); g.add(dome(0.35,0xe0b44a,-3.3,0.9,0));
};
B.mehrangarh = g => {                            // fort on its cliff, seen from the blue city
  g.add(peak(2.6,1.5,0xa9937a,0,-0.25,0,7,false));
  g.add(cyl(1.55,1.75,0.9,0xbfa584,0,0.95,0,10));          // the rampart
  for(let i=0;i<10;i++){ const a=i/10*Math.PI*2; g.add(box(0.22,0.2,0.2,0xbfa584,Math.cos(a)*1.6,1.85,Math.sin(a)*1.6)); }
  g.add(box(1.7,0.9,1.2,0xd3bb98,0,1.85,-0.1));            // the palace above it
  g.add(box(1.4,0.5,0.95,0xdfc9a6,0,2.75,-0.1));
  for(const x of [-0.55,0.55]) { g.add(cyl(0.2,0.22,1.1,0xd3bb98,x,1.85,0.55,10)); g.add(dome(0.28,0xb08a5c,x,2.95,0.55)); }
  for(let i=0;i<5;i++) g.add(box(0.26,0.26,0.1,0xe6d5b8,-0.6+i*0.3,2.2,0.62));   // jharokha balconies
  for(let i=0;i<6;i++){ const a = -0.4+i*0.42; g.add(box(0.45,0.45,0.45,0x5c7fa8,Math.cos(a)*2.3,-0.15,Math.sin(a)*2.3+0.6)); }  // blue houses below
};
B.imambara = g => {                              // Bara Imambara: the long arcade and the great hall
  g.add(box(4.4,0.3,2.0,0xd8c8a6,0,0,0));
  g.add(box(4.2,1.0,1.7,0xe6d8ba,0,0.3,0));
  for(let i=0;i<9;i++) g.add(box(0.22,0.9,0.12,0xc9b795,-1.8+i*0.45,0.3,0.86));
  g.add(box(2.0,0.9,1.5,0xe6d8ba,0,1.3,0));
  g.add(box(2.2,0.14,1.7,0xd8c8a6,0,2.2,0));
  g.add(dome(0.72,0xe6d8ba,0,2.34,0));
  g.add(cyl(0.05,0.07,0.34,0xd9b46a,0,3.06,0,8)); g.add(sph(0.07,0xd9b46a,0,3.44,0,8,6));
  for(const x of [-1.55,1.55]){ g.add(cyl(0.2,0.22,1.5,0xe6d8ba,x,1.3,0,10)); g.add(dome(0.26,0xd8c8a6,x,2.8,0)); g.add(cyl(0.03,0.04,0.2,0xd9b46a,x,3.06,0,6)); }
};
B.stepwell = g => {                              // Rani ki Vav: seven storeys cut downwards
  g.add(box(4.2,0.2,3.0,0xc9b189,0,-0.2,0));
  for(let i=0;i<7;i++){                                     // each storey narrower and deeper
    const w = 2.6 - i*0.3, d = 1.9 - i*0.22, y = -0.2 - i*0.26;
    g.add(box(w,0.26,d,0xdcc79f,0.5+i*0.16,y,0));
  }
  for(let i=0;i<4;i++){                                     // the pillared galleries down one wall
    const z = -0.75, x = -0.9 + i*0.5, y = -0.35 - i*0.24;
    g.add(cyl(0.07,0.08,0.5,0xe8d7b3,x,y,z,8)); g.add(cyl(0.07,0.08,0.5,0xe8d7b3,x,y,-z,8));
    g.add(box(0.42,0.08,1.8,0xd2bb92,x,y+0.5,0));
  }
  g.add(cyl(0.55,0.6,0.7,0xdcc79f,1.65,-0.2,0,14));         // the well shaft at the far end
  g.add(cyl(0.42,0.42,0.12,0x3f7488,1.65,0.45,0,14));
};
B.gateway = g => {                               // Gateway of India
  g.add(box(3.0,0.35,2.0,0xb9ad93,0,-0.35,0));
  const A = new THREE.Group();
  A.add(box(2.4,2.3,1.5,0xcfc2a4,0,0,0));
  const hole = new THREE.Mesh(new THREE.CylinderGeometry(0.62,0.62,1.6,20,1,false,0,Math.PI), mat(0x6b6353));
  hole.rotation.x = Math.PI/2; hole.rotation.z = Math.PI; hole.position.set(0,1.35,0); A.add(hole);
  A.add(box(1.24,1.35,1.6,0x6b6353,0,0,0));
  A.add(box(2.7,0.24,1.8,0xdcd0b2,0,2.3,0));
  A.add(dome(0.62,0xcfc2a4,0,2.54,0));
  A.add(cyl(0.04,0.05,0.24,0xd9b46a,0,3.16,0,6));
  for(const x of [-1.05,1.05]) for(const z of [-0.62,0.62]){ A.add(cyl(0.16,0.18,0.5,0xcfc2a4,x,2.3,z,10)); A.add(dome(0.2,0xbfb197,x,2.8,z)); }
  g.add(A);
  for(let i=0;i<5;i++) g.add(box(0.3,0.06,0.3,0x4d7f93,-1.2+i*0.6,-0.4,1.6));   // the harbour water in front
};
B.bomjesus = g => {                              // Basilica of Bom Jesus, laterite and lime
  g.add(box(1.9,2.3,3.4,0xb1806a,0,0,0));
  g.add(prism(1.9,0.5,3.4,0x8f6a55,0,2.3,0).rotateY(Math.PI/2));
  const F = new THREE.Group();                            // the façade, taller than the nave
  F.add(box(2.1,2.9,0.3,0xc99a7c,0,0,0));
  F.add(prism(2.1,0.7,0.3,0xc99a7c,0,2.9,0));
  for(let r=0;r<3;r++) for(let i=0;i<3;i++) F.add(box(0.2,0.45,0.08,0x6f4e3f,-0.65+i*0.65,0.35+r*0.8,0.18));
  F.position.set(0,0,1.85); g.add(F);
  g.add(box(0.75,3.3,0.75,0xc99a7c,1.1,0,1.5));           // bell tower
  g.add(pyr(0.55,0.6,0x7d5a49,1.1,3.3,1.5));
  g.add(box(0.06,0.5,0.06,0xd9b46a,1.1,3.9,1.5)); g.add(box(0.3,0.06,0.06,0xd9b46a,1.1,4.22,1.5));
  for(let i=0;i<3;i++) g.add(sph(0.42,0x3f6b3f,-1.9,0.5,-1.2+i*1.2,10,8));
};
B.sanchi = g => {                                // the Great Stupa and its four gateways
  g.add(cyl(2.0,2.1,0.55,0xc9b48d,0,0,0,28));
  const d = new THREE.Mesh(new THREE.SphereGeometry(1.65, 24, 14, 0, Math.PI*2, 0, Math.PI/2), mat(0xd8c6a0));
  d.position.y = 0.55; g.add(sh(d));
  g.add(box(0.62,0.3,0.62,0xc9b48d,0,2.2,0));             // harmika
  g.add(cyl(0.05,0.06,0.3,0xc9b48d,0,2.5,0,8));
  for(let i=0;i<3;i++) g.add(cyl(0.34-i*0.08,0.34-i*0.08,0.06,0xd8c6a0,0,2.72+i*0.16,0,16));   // the chhatra
  for(let k=0;k<4;k++){                                    // four toranas
    const a = k/4*Math.PI*2, r = 2.45;
    const T = new THREE.Group();
    for(const s of [-1,1]) T.add(cyl(0.09,0.1,1.5,0xd0bb92,s*0.42,0,0,8));
    for(let b=0;b<3;b++) T.add(box(1.3,0.1,0.12,0xd0bb92,0,1.5+b*0.26,0));
    T.position.set(Math.cos(a)*r, 0, Math.sin(a)*r); T.rotation.y = -a;
    g.add(T);
  }
};
B.howrah = g => {                                // Howrah Bridge: two towers and the riveted span
  const st = 0x8e8b80;
  for(const x of [-1.8,1.8]){
    for(const z of [-0.5,0.5]){ g.add(box(0.22,2.9,0.22,st,x,0,z)); g.add(box(0.18,2.4,0.18,st,x+(x<0?0.5:-0.5),0,z)); }
    for(let i=0;i<4;i++) g.add(box(0.8,0.12,0.12,st,x+(x<0?0.25:-0.25),0.6+i*0.7,-0.5));
    for(let i=0;i<4;i++) g.add(box(0.8,0.12,0.12,st,x+(x<0?0.25:-0.25),0.6+i*0.7,0.5));
    g.add(box(1.0,0.16,1.2,st,x+(x<0?0.25:-0.25),2.9,0));
  }
  g.add(box(4.6,0.16,1.3,0x6f6a5e,0,0.75,0));              // the deck
  for(const z of [-0.55,0.55]) for(let i=0;i<9;i++){       // the sagging upper chords, as straight segments
    const t = i/8, x = -1.8 + t*3.6, h = 2.9 - Math.sin(t*Math.PI)*0.85;
    g.add(box(0.46,0.1,0.1,st,x,h,z));
    g.add(box(0.08,h-0.85,0.08,st,x,0.9,z));
  }
  g.add(box(6.6,0.1,2.4,0x4d7f93,0,-0.12,0));              // the Hooghly under it
};
B.rootbridge = g => {                            // a living root bridge over a gorge
  for(const [x,z,s] of [[-2.0,0.2,1.15],[2.0,-0.2,1.0]]){
    g.add(cyl(0.16*s,0.3*s,1.5*s,0x6d5744,x,0,z,10));
    for(let i=0;i<4;i++){ const a=i/4*Math.PI*2; g.add(cyl(0.05,0.09,0.5,0x6d5744,x+Math.cos(a)*0.22,0,z+Math.sin(a)*0.22,6)); }
    g.add(sph(0.85*s,0x3f7a46,x,1.5*s+0.5,z,12,9)); g.add(sph(0.55*s,0x4e8c52,x+0.4,1.5*s+0.95,z-0.3,10,8));
  }
  for(let i=0;i<13;i++){                                   // the woven span, dipping in the middle
    const t = i/12, x = -1.75 + t*3.5, y = 1.15 - Math.sin(t*Math.PI)*0.4;
    g.add(cyl(0.05,0.05,0.34,0x7a6248,x,y,0,6));
    if(i%2===0){ g.add(cyl(0.035,0.035,0.5,0x6d5744,x,y+0.1,-0.19,6)); g.add(cyl(0.035,0.035,0.5,0x6d5744,x,y+0.1,0.19,6)); }
  }
  for(let i=0;i<7;i++){ const t=i/6, x=-1.7+t*3.4; g.add(box(0.5,0.05,0.42,0x8a7355,x,1.1-Math.sin(t*Math.PI)*0.4,0)); }
  g.add(box(5.2,0.08,0.8,0x4d7f93,0,-0.6,0));              // the river below
};
B.mysore = g => {                                // Mysore Palace
  g.add(box(4.2,0.3,2.4,0xd7c7a4,0,-0.3,0));
  g.add(box(3.8,1.0,2.0,0xe3d5b6,0,0,0));
  for(let i=0;i<11;i++) g.add(box(0.14,0.9,0.1,0xcbb894,-1.6+i*0.32,0,1.02));
  g.add(box(3.6,0.16,2.1,0xd7c7a4,0,1.0,0));
  g.add(box(1.5,0.8,1.4,0xe3d5b6,0,1.16,0));
  const d = dome(0.62,0xc06a4a,0,1.96,0); g.add(d);
  g.add(cyl(0.05,0.06,0.3,0xd9b46a,0,2.58,0,8)); g.add(sph(0.07,0xd9b46a,0,2.92,0,8,6));
  for(const x of [-1.35,1.35]){
    g.add(box(0.8,1.5,0.8,0xe3d5b6,x,1.0,0)); g.add(dome(0.42,0xc06a4a,x,2.5,0));
    g.add(cyl(0.03,0.04,0.2,0xd9b46a,x,2.92,0,6));
  }
  for(const x of [-1.85,1.85]) for(const z of [-0.9,0.9]){ g.add(cyl(0.13,0.14,0.5,0xe3d5b6,x,1.0,z,10)); g.add(dome(0.17,0xc06a4a,x,1.5,z)); }
};
B.charminar = g => {                             // four minarets over four arches
  g.add(box(2.3,0.25,2.3,0xc9b997,0,-0.25,0));
  g.add(box(2.1,1.6,2.1,0xdccdaa,0,0,0));
  for(const [ax,az] of [[1,0],[-1,0],[0,1],[0,-1]]){        // the four openings
    const h = new THREE.Mesh(new THREE.CylinderGeometry(0.4,0.4,2.2,16,1,false,0,Math.PI), mat(0x6d6350));
    h.rotation.x = Math.PI/2; h.rotation.z = Math.PI; h.position.set(0,1.0,0);
    if(az){ h.rotation.y = Math.PI/2; }
    g.add(h);
  }
  g.add(box(1.0,1.6,1.0,0x6d6350,0,0,0));
  g.add(box(2.35,0.18,2.35,0xc9b997,0,1.6,0));
  for(let i=0;i<7;i++) for(const z of [-1.18,1.18]) g.add(box(0.14,0.22,0.08,0xe4d6b6,-0.9+i*0.3,1.78,z));
  for(const [x,z] of [[-0.86,-0.86],[0.86,-0.86],[-0.86,0.86],[0.86,0.86]]){   // the minarets
    g.add(cyl(0.2,0.26,2.1,0xdccdaa,x,1.6,z,12));
    g.add(cyl(0.3,0.3,0.1,0xc9b997,x,2.95,z,12));           // the balcony
    g.add(cyl(0.17,0.2,0.8,0xdccdaa,x,3.7,z,12));
    g.add(dome(0.24,0xc4a05e,x,4.5,z));
    g.add(cyl(0.03,0.04,0.22,0xd9b46a,x,4.74,z,6));
  }
  g.add(box(1.3,0.7,1.3,0xdccdaa,0,1.78,0)); g.add(dome(0.5,0xc4a05e,0,2.48,0));
};
B.thanjavur = g => {                             // Brihadisvara: the vimana, and a gopuram in front
  g.add(box(3.6,0.3,3.0,0xc2b18e,0,-0.3,0));
  const V = new THREE.Group();
  V.add(box(2.0,0.9,2.0,0xd6c6a2,0,0,0));
  for(let i=0;i<11;i++){                                    // the tapering tiers
    const s = 1.75 - i*0.14, y = 0.9 + i*0.24;
    V.add(box(s,0.2,s,i%2 ? 0xd6c6a2 : 0xcabb96,0,y,0));
    if(i%2===0) for(const [dx,dz] of [[1,1],[1,-1],[-1,1],[-1,-1]]) V.add(box(0.12,0.14,0.12,0xe0d2b0,dx*s*0.42,y+0.2,dz*s*0.42));
  }
  V.add(dome(0.42,0xbfa87c,0,3.62,0));
  V.add(cyl(0.05,0.06,0.34,0xd9b46a,0,4.04,0,8)); V.add(sph(0.08,0xd9b46a,0,4.42,0,8,6));
  V.position.set(0.5,0,0); g.add(V);
  const G = new THREE.Group();                              // the gopuram gateway, wider and lower
  G.add(box(1.7,0.8,0.9,0xd6c6a2,0,0,0));
  for(let i=0;i<5;i++) G.add(box(1.55-i*0.2,0.24,0.8-i*0.08,i%2 ? 0xcabb96 : 0xd6c6a2,0,0.8+i*0.26,0));
  G.add(box(0.9,0.12,0.5,0xe0d2b0,0,2.1,0));
  G.add(box(0.5,0.8,0.95,0x6f6450,0,0,0));
  G.position.set(-1.9,0,0); g.add(G);
};
B.cheenavala = g => {                            // the Chinese fishing nets of Fort Kochi
  g.add(box(7.0,0.1,3.0,0x4d7f93,0,-0.14,0));               // the backwater
  for(const [px,rot] of [[-1.7,0],[1.6,Math.PI]]){
    const N = new THREE.Group();
    N.add(box(1.5,0.14,1.2,0x6b5540,0,0,0));                // the platform
    for(const z of [-0.45,0.45]){                           // the A-frame
      const a = box(0.11,2.5,0.11,0x7a6248,0.2,0,z); a.rotation.z = 0.28; N.add(a);
      const b = box(0.11,2.5,0.11,0x7a6248,-0.4,0,z); b.rotation.z = -0.22; N.add(b);
    }
    N.add(box(1.5,0.1,1.1,0x7a6248,-0.1,2.35,0));
    const arm = box(3.4,0.12,0.12,0x7a6248,1.3,2.3,0); arm.rotation.z = -0.34; N.add(arm);   // the cantilever
    for(let i=0;i<5;i++){                                   // the net hanging from its tip
      const t = i/4, x = 2.35 + t*0.5, y = 1.7 - t*0.85;
      N.add(cyl(0.025,0.025,1.1,0xd8d2c0,x,y,0,5));
    }
    N.add(cyl(0.5,0.02,0.05,0xcfc9b6,2.6,1.05,0,14));
    const tail = box(1.4,0.1,0.1,0x7a6248,-1.6,2.4,0); tail.rotation.z = 0.3; N.add(tail);
    for(let i=0;i<4;i++) N.add(sph(0.16,0x6e6a60,-2.3-i*0.05,1.55-i*0.3,0,8,6));             // the counterweight stones
    N.position.set(px,0.05,0); N.rotation.y = rot; g.add(N);
  }
  for(let i=0;i<3;i++) g.add(sph(0.45,0x3f7a46,-3.2+i*3.2,0.1,-1.4,10,8));                   // palms behind
};
