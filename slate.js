// Use a constant "mash" keyboard chord as modal switch.
var MODAL = ':ctrl,alt,cmd,space';


// Configure globals.
S.configAll({
    'keyboardLayout': 'dvorak'
});


// Quick relaunching during trial and error phase.
S.bind('r' + MODAL, S.op('relaunch'));


// Generally, I do not want Slate to mess with Emacs.
var ignoreEmacs = function(win, f) {
    if (!/emacs/i.test(win.app().name())) {
        f.apply(this, arguments);
    }
};


/*
 * Push bindings.
 */
S.bind('right' + MODAL, function(win) {
    ignoreEmacs(win, function() {
        win.doOperation(S.op('push', {
            'direction': 'right',
            'style': 'bar-resize:screenSizeX/1.7'
        }));
    });
});


S.bind('left' + MODAL, function(win) {
    ignoreEmacs(win, function() {
        win.doOperation(S.op('push', {
            'direction': 'left',
            'style': 'bar-resize:screenSizeX/2.5'
        }));
    });
});


/*
 * Move bindings.
 */
S.bind('c' + MODAL, function(win) {
    ignoreEmacs(win, function() {
        win.doOperation(S.op('move', {
            'x': '(screenSizeX / 2) - (windowSizeX / 2)',
            'y': 'screenOriginY',
            'width': 'windowSizeX',
            'height': 'windowSizeY'
        }));
    });
});


/*
 * Window hints, Dvorak-style.
 */
S.bind('h' + MODAL, function(win) {
    win.doOperation(S.op('hint', { 'characters': 'aoeusnthid' }));
});


/*
 * Grid settings for my laptop and 1080p monitors.
 */
S.bind('g' + MODAL, function(win) {
    ignoreEmacs(win, function() {
        win.doOperation(S.op('grid', {
            'grids': {
                '1366x768': {
                    'width': 6,
                    'height': 3
                },
                '1680x1050': {
                    'width': 8,
                    'height': 5
                },
                '1920x1080': {
                    'width': 8,
                    'height': 5
                }
            },
            'padding': 5
        }));
    });
});
