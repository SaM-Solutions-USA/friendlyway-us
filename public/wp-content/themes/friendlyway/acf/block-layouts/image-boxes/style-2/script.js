(function($) {
    
    $('.block-image-boxes_style_2').each(function(event) {
        const $block = $(this),
              $items = $block.find('.block-image-boxes__items'),
              $itemsChild = $items.children('.block-image-boxes__item');
              
        /* ====================================================================================================== */
        
        $itemsChild.each(function(index) {
            const $item = $(this);
                  $model = $item.find('.block-image-boxes__item-model');

            /* ================================================================================================== */

            if($model.length && $model.data('src')) {
                const scene  = new THREE.Scene();
                const camera = new THREE.PerspectiveCamera(70, $model.width() / $model.height(), 0.1, 1000);
                
                camera.position.z = 2;
                camera.position.x = 0;
                
                /* ============================================================================================== */
                
                const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
                
                renderer.toneMapping = THREE.ACESFilmicToneMapping;
                renderer.toneMappingExposure = 1.5;
                renderer.setSize(735, 682);
                
                $model.append(renderer.domElement);
                
                /* ============================================================================================== */
                
                const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
                
                directionalLight.position.set(0, 2, 2);
                directionalLight.intensity = 1.5;
                scene.add(directionalLight);
                
                const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
                
                scene.add(ambientLight);
                
                /* ============================================================================================== */
                
                let model;
                let autoRotate = false;
                
                /* ============================================================================================== */
                
                const controls = new THREE.OrbitControls(camera, renderer.domElement);
                
                controls.enableDamping = true;
                controls.enableZoom = false;
                controls.enablePan = false;
                controls.enableRotate = false;
                
                controls.minPolarAngle = Math.PI / 2;
                controls.maxPolarAngle = Math.PI / 2;

                /* ============================================================================================== */

                function animate() {
                    requestAnimationFrame(animate);
                    
                    if(autoRotate && model) {
                        model.rotation.y += 0.01;
                    }
                    
                    controls.update();
                    renderer.render(scene, camera);
                }

                // const loader = new THREE.GLTFLoader();
                // loader.load(
                //     $model.data('src'),
                //     (gltf) => {
                //         model = gltf.scene;
                //         model.position.y -= 0.85;
                //         scene.add(model);
                //         animate();
                //     },
                //     undefined,
                //     (error) => {
                //         console.error('Ошибка загрузки модели:', error);
                //     }
                // );
                
                /* ============================================================================================== */

                let isInteracting = false;
                
                $item.on({
                    'mouseover': function(event) {
                        if(event.target.tagName === 'CANVAS') {
                            autoRotate = false;
                            isInteracting = true;
                            controls.enableRotate = true; 
                        } else {
                            autoRotate = true;
                            isInteracting = false;
                            controls.enableRotate = false; 
                        }
                    },
                    'mouseleave': function(event) {
                        if(event.target.tagName !== 'CANVAS') {
                            autoRotate = false;
                        }

                        controls.enableRotate = false;
                    }
                });
                
                /* ============================================================================================== */
                
                $item.on('click', 'a.block-image-boxes__item-inner', function(event) {
                    if(isInteracting) event.preventDefault(); event.stopPropagation();
                });
            }
        });
    });
        
})(jQuery);