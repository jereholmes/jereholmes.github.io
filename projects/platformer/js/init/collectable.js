(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.collectable = window.opspark.collectable || {};
    let collectable = window.opspark.collectable;

    let type = {
        db: {assetKey: 'db', points: 10},
        max: {assetKey: 'max', points: 20},
        steve: {assetKey: 'steve', points: 30},
        grace: {assetKey: 'grace', points: 40},
        kennedi: {assetKey: 'kennedi', points: 50}
    };
    
    /**
     * init: Initialize all collectables.
     * 
     * GOAL: Add as many collectables as necessary to make your level challenging.
     * 
     * Use the createCollectable() Function to create collectables for the level.
     * See the type Object, above, for the types of collectables and their point values.
     * 
     * createCollectable() takes these arguments:
     *      
     *      createCollectable(type, x, y, gravity, bounce);
     * 
     *      type: The type of the collectable, use the type Object above.
     *      x: The x coordineate for the collectable.
     *      y: The y coordineate for the collectable.
     *      gravity: OPTIONAL The gravitational pull on the collectable.
     *      bounce: OPTIONAL A factor effecting how much the collectable will bounce off platforms, etc.
     */ 
    function init(game) {
        let createCollectable = collectable.create;

        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        // example: 
        createCollectable(type.db, 100, 600, 6, 0.7);
        createCollectable(type.kennedi, 7, 240, 6, 0.7);
        createCollectable(type.kennedi, 550, 140, 6, 0.7);
        createCollectable(type.kennedi, 450, 140, 6, 0.7);
        createCollectable(type.grace, 650, 140, 6, 0.7);
        createCollectable(type.steve, 47, 440, 6, 0.7);
        createCollectable(type.steve, 300, 340, 6, 0.7);
        createCollectable(type.steve, 400, 340, 6, 0.7);
        createCollectable(type.db, 500, 540, 6, 0.7);
        createCollectable(type.max, 650, 540, 6, 0.7);
        createCollectable(type.max, 600, 540, 6, 0.7);
        
        
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
    collectable.init = init;
})(window);