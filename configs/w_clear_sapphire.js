export const MODEL_CONFIG = {
  name: 'Clear_Sapphire',
  
  glb: './models/Standard_Wayfarer.glb',

	frame: {
	  baseColor: [0.02, 0.02, 0.02],
	  roughness: 0.1,
	  metalness: 0.0,
	  trans: true,          
	  opacity: 0.5, 
	  reflectivity: 1.0 			
	},

	nose: {
	  baseColor: [0.02, 0.02, 0.02],
	  roughness: 0.5,
	  metalness: 0.1,
	  trans: false
	},
	armsText: {
		overlay: './textures/Temples_wayfarer_standard_2k.png',
		color: [0.1, 0.1, 0.1]
	},

	glass: {
		color: [0.020, 0.03, 0.06],
		roughness: 0.1,
		metalness: 0.5,
		opacity: 0.9, 
		
		animate: false,
		gradient: false,
		animateCamera: 'Cam_Lenses'
	},

	fake: {
	  texture: './textures/w_interior_fake.jpg'
	},

	logo: {
	  texture: './textures/Standard_alpha_clear.png',
	  opacity: 1.0
	},
	
	barrel: {
	  chrome: true
	},

	startCamera: 'Cam_Front',
	freeCamera: 'Cam_Free'
	
};
