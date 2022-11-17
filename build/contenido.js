const materials = {
    'shiny': new THREE.MeshStandardMaterial( { color: 0x550000, envMap: reflectionCube, roughness: 0.1, metalness: 1.0 } ),
    'chrome': new THREE.MeshLambertMaterial( { color: 0xffffff, envMap: reflectionCube } ),
    'liquid': new THREE.MeshLambertMaterial( { color: 0xffffff, envMap: refractionCube, refractionRatio: 0.85 } ),
    'matte': new THREE.MeshPhongMaterial( { specular: 0x111111, shininess: 1 } ),
    'flat': new THREE.MeshLambertMaterial( { /*TODO flatShading: true */ } ),
    'textured': new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x111111, shininess: 1, map: texture } ),
    'colors': new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0xffffff, shininess: 2, vertexColors: true } ),
    'multiColors': new THREE.MeshPhongMaterial( { shininess: 2, vertexColors: true } ),
    'plastic': new THREE.MeshPhongMaterial( { specular: 0x888888, shininess: 250 } ),
    'toon1': toonMaterial1,
    'toon2': toonMaterial2,
    'hatching': hatchingMaterial,
    'dotted': dottedMaterial
};
