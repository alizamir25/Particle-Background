document.addEventListener("DOMContentLoaded", function() {

    const grassField = document.getElementById('grass-field');

    // Generate multiple grass blades dynamically

    for (let i = 0; i < 500; i++) {

        let blade = document.createElement('div');

        blade.className = 'blade';

        // Set random position, animation delay, and rotation

        blade.style.left = `${Math.random() * 100}vw`;

        blade.style.animationDelay = `${Math.random() * 5}s`;

        blade.style.transform = `scale(${Math.random() * 1.5 + 0.5}) rotate(${Math.random() * 360}deg)`;

        grassField.appendChild(blade);

    }

    // GSAP animation for blades

    gsap.to(".blade", {

        rotation: "random(-10, 10)",  // Mengayun secara acak

        duration: "random(2, 4)",     // Durasi acak

        repeat: -1,                   // Ulangi terus

        yoyo: true,                   // Bolak-balik animasi

        ease: "power1.inOut"          // Efek easing

    });

    // Particles.js for adding particle effects

    particlesJS("grass-field", {

        "particles": {

            "number": {

                "value": 100,

                "density": {

                    "enable": true,

                    "value_area": 800

                }

            },

            "color": {

                "value": "#ffffff"

            },

            "shape": {

                "type": "circle",

                "stroke": {

                    "width": 0,

                    "color": "#000000"

                },

            },

            "opacity": {

                "value": 0.5,

                "random": false,

            },

            "size": {

                "value": 3,

                "random": true,

            },

            "line_linked": {

                "enable": true,

                "distance": 150,

                "color": "#ffffff",

                "opacity": 0.4,

                "width": 1

            },

            "move": {

                "enable": true,

                "speed": 2,

                "direction": "none",

                "random": false,

                "straight": false,

                "out_mode": "out",

                "bounce": false,

                "attract": {

                    "enable": false,

                    "rotateX": 600,

                    "rotateY": 1200

                }

            }

        }

    });

    // Parallax effect

    const scene = document.getElementById('grass-field');

    new Parallax(scene);

    // ScrollMagic for triggering animations on scroll

    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({

        duration: 5000,

        triggerHook: 0,

        triggerElement: "#grass-field"

    })

    .setTween(gsap.to(".blade", {rotation: 360, ease: "linear"}))

    .addTo(controller);

});