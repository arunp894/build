import {
  AUTO_STYLE,
  animate,
  animateChild,
  animation,
  group,
  keyframes,
  query,
  state,
  style,
  transition,
  trigger,
  useAnimation
} from "./chunk-DLTSML4M.js";
import "./chunk-JDU4VVT4.js";
import "./chunk-XBOXCF77.js";
import "./chunk-KOIB4TPY.js";
import "./chunk-HM5YLMWO.js";
import "./chunk-TXDUYLVM.js";

// node_modules/angular-animations/fesm2015/angular-animations.js
function useAnimationIncludingChildren(animation2, options) {
  return [...options && options.animateChildren === "before" ? [query("@*", animateChild(), {
    optional: true
  })] : [], group([useAnimation(animation2), ...!options || !options.animateChildren || options.animateChildren === "together" ? [query("@*", animateChild(), {
    optional: true
  })] : []]), ...options && options.animateChildren === "after" ? [query("@*", animateChild(), {
    optional: true
  })] : []];
}
var bounce = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  visibility: AUTO_STYLE,
  transform: "translate3d(0, 0, 0)",
  easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  offset: 0
}), style({
  transform: "translate3d(0, 0, 0)",
  easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  offset: 0.2
}), style({
  transform: "translate3d(0, -30px, 0)",
  easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  offset: 0.4
}), style({
  transform: "translate3d(0, -30px, 0)",
  easing: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  offset: 0.43
}), style({
  transform: "translate3d(0, 0, 0)",
  easing: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  offset: 0.53
}), style({
  transform: "translate3d(0, -15px, 0)",
  easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  offset: 0.7
}), style({
  transform: "translate3d(0, 0, 0)",
  easing: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  offset: 0.8
}), style({
  transform: "translate3d(0, -4px, 0)",
  easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  offset: 0.9
}), style({
  transform: "translate3d(0, 0, 0)",
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION = 1e3;
function bounceAnimation(options) {
  return trigger(options && options.anchor || "bounce", [transition(`0 ${options && options.direction || "<=>"} 1`, [style({
    "transform-origin": "center bottom"
  }), ...useAnimationIncludingChildren(bounce(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION
    }
  })]);
}
function bounceOnEnterAnimation(options) {
  return trigger(options && options.anchor || "bounceOnEnter", [transition(":enter", [style({
    visibility: "hidden"
  }), style({
    "transform-origin": "center bottom"
  }), ...useAnimationIncludingChildren(bounce(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION
    }
  })]);
}
var flash = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  visibility: AUTO_STYLE,
  opacity: 1,
  easing: "ease",
  offset: 0
}), style({
  opacity: 0,
  easing: "ease",
  offset: 0.25
}), style({
  opacity: 1,
  easing: "ease",
  offset: 0.5
}), style({
  opacity: 0,
  easing: "ease",
  offset: 0.75
}), style({
  opacity: 1,
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION$1 = 1e3;
function flashAnimation(options) {
  return trigger(options && options.anchor || "flash", [transition(`0 ${options && options.direction || "<=>"} 1`, [...useAnimationIncludingChildren(flash(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$1
    }
  })]);
}
function flashOnEnterAnimation(options) {
  return trigger(options && options.anchor || "flashOnEnter", [transition(":enter", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(flash(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$1
    }
  })]);
}
var headShake = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  visibility: AUTO_STYLE,
  transform: "translateX(0)",
  easing: "ease-in-out",
  offset: 0
}), style({
  transform: "translateX(-6px) rotateY(-9deg)",
  easing: "ease-in-out",
  offset: 0.065
}), style({
  transform: "translateX(5px) rotateY(7deg)",
  easing: "ease-in-out",
  offset: 0.185
}), style({
  transform: "translateX(-3px) rotateY(-5deg)",
  easing: "ease-in-out",
  offset: 0.315
}), style({
  transform: "translateX(2px) rotateY(3deg)",
  easing: "ease-in-out",
  offset: 0.435
}), style({
  transform: "translateX(0)",
  easing: "ease-in-out",
  offset: 0.5
})]))]);
var DEFAULT_DURATION$2 = 1e3;
function headShakeAnimation(options) {
  return trigger(options && options.anchor || "headShake", [transition(`0 ${options && options.direction || "<=>"} 1`, [...useAnimationIncludingChildren(headShake(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$2
    }
  })]);
}
function headShakeOnEnterAnimation(options) {
  return trigger(options && options.anchor || "headShakeOnEnter", [transition(":enter", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(headShake(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$2
    }
  })]);
}
var heartBeat = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  visibility: AUTO_STYLE,
  transform: "scale(1)",
  easing: "ease-in-out",
  offset: 0
}), style({
  transform: "scale({{scale}})",
  easing: "ease-in-out",
  offset: 0.14
}), style({
  transform: "scale(1)",
  easing: "ease-in-out",
  offset: 0.28
}), style({
  transform: "scale({{scale}})",
  easing: "ease-in-out",
  offset: 0.42
}), style({
  transform: "scale(1)",
  easing: "ease-in-out",
  offset: 0.7
})]))]);
var DEFAULT_DURATION$3 = 1300;
var DEFAULT_SCALE = 1.3;
function heartBeatAnimation(options) {
  return trigger(options && options.anchor || "heartBeat", [transition(`0 ${options && options.direction || "<=>"} 1`, [...useAnimationIncludingChildren(heartBeat(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$3,
      scale: options && options.scale || DEFAULT_SCALE
    }
  })]);
}
function heartBeatOnEnterAnimation(options) {
  return trigger(options && options.anchor || "heartBeatOnEnter", [transition(":enter", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(heartBeat(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$3,
      scale: options && options.scale || DEFAULT_SCALE
    }
  })]);
}
var jello = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  visibility: AUTO_STYLE,
  transform: "translate3d(0, 0, 0)",
  easing: "ease",
  offset: 0
}), style({
  transform: "translate3d(0, 0, 0)",
  easing: "ease",
  offset: 0.111
}), style({
  transform: "skewX(-12.5deg) skewY(-12.5deg)",
  easing: "ease",
  offset: 0.222
}), style({
  transform: "skewX(6.25deg) skewY(6.25deg)",
  easing: "ease",
  offset: 0.333
}), style({
  transform: "skewX(-3.125deg) skewY(-3.125deg)",
  easing: "ease",
  offset: 0.444
}), style({
  transform: "skewX(1.5625deg) skewY(1.5625deg)",
  easing: "ease",
  offset: 0.555
}), style({
  transform: "skewX(-0.78125deg) skewY(-0.78125deg)",
  easing: "ease",
  offset: 0.666
}), style({
  transform: "skewX(0.390625deg) skewY(0.390625deg)",
  easing: "ease",
  offset: 0.777
}), style({
  transform: "skewX(-0.1953125deg) skewY(-0.1953125deg)",
  easing: "ease",
  offset: 0.888
}), style({
  transform: "skewX(0deg) skewY(0deg)",
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION$4 = 1e3;
function jelloAnimation(options) {
  return trigger(options && options.anchor || "jello", [transition(`0 ${options && options.direction || "<=>"} 1`, [style({
    "transform-origin": "center"
  }), ...useAnimationIncludingChildren(jello(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$4
    }
  })]);
}
function jelloOnEnterAnimation(options) {
  return trigger(options && options.anchor || "jelloOnEnter", [transition(":enter", [style({
    visibility: "hidden"
  }), style({
    "transform-origin": "center"
  }), ...useAnimationIncludingChildren(jello(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$4
    }
  })]);
}
var pulse = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  visibility: AUTO_STYLE,
  transform: "scale3d(1, 1, 1)",
  easing: "ease",
  offset: 0
}), style({
  transform: "scale3d({{scale}}, {{scale}}, {{scale}})",
  easing: "ease",
  offset: 0.5
}), style({
  transform: "scale3d(1, 1, 1)",
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION$5 = 1e3;
function pulseAnimation(options) {
  return trigger(options && options.anchor || "pulse", [transition(`0 ${options && options.direction || "<=>"} 1`, [...useAnimationIncludingChildren(pulse(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$5,
      scale: options && options.scale || 1.05
    }
  })]);
}
function pulseOnEnterAnimation(options) {
  return trigger(options && options.anchor || "pulseOnEnter", [transition(":enter", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(pulse(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$5,
      scale: options && options.scale || 1.05
    }
  })]);
}
var rubberBand = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  visibility: AUTO_STYLE,
  transform: "scale3d(1, 1, 1)",
  easing: "ease",
  offset: 0
}), style({
  transform: "scale3d(1.25, 0.75, 1)",
  easing: "ease",
  offset: 0.3
}), style({
  transform: "scale3d(0.75, 1.25, 1)",
  easing: "ease",
  offset: 0.4
}), style({
  transform: "scale3d(1.15, 0.85, 1)",
  easing: "ease",
  offset: 0.5
}), style({
  transform: "scale3d(0.95, 1.05, 1)",
  easing: "ease",
  offset: 0.65
}), style({
  transform: "scale3d(1.05, 0.95, 1)",
  easing: "ease",
  offset: 0.75
}), style({
  transform: "scale3d(1, 1, 1)",
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION$6 = 1e3;
function rubberBandAnimation(options) {
  return trigger(options && options.anchor || "rubberBand", [transition(`0 ${options && options.direction || "<=>"} 1`, [...useAnimationIncludingChildren(rubberBand(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$6
    }
  })]);
}
function rubberBandOnEnterAnimation(options) {
  return trigger(options && options.anchor || "rubberBandOnEnter", [transition(":enter", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(rubberBand(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$6
    }
  })]);
}
var shake = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  visibility: AUTO_STYLE,
  transform: "translate3d(0, 0, 0)",
  easing: "ease",
  offset: 0
}), style({
  transform: "translate3d(-{{translate}}, 0, 0)",
  easing: "ease",
  offset: 0.1
}), style({
  transform: "translate3d({{translate}}, 0, 0)",
  easing: "ease",
  offset: 0.2
}), style({
  transform: "translate3d(-{{translate}}, 0, 0)",
  easing: "ease",
  offset: 0.3
}), style({
  transform: "translate3d({{translate}}, 0, 0)",
  easing: "ease",
  offset: 0.4
}), style({
  transform: "translate3d(-{{translate}}, 0, 0)",
  easing: "ease",
  offset: 0.5
}), style({
  transform: "translate3d({{translate}}, 0, 0)",
  easing: "ease",
  offset: 0.6
}), style({
  transform: "translate3d(-{{translate}}, 0, 0)",
  easing: "ease",
  offset: 0.7
}), style({
  transform: "translate3d({{translate}}, 0, 0)",
  easing: "ease",
  offset: 0.8
}), style({
  transform: "translate3d(-{{translate}}, 0, 0)",
  easing: "ease",
  offset: 0.9
}), style({
  transform: "translate3d(0, 0, 0)",
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION$7 = 1e3;
function shakeAnimation(options) {
  return trigger(options && options.anchor || "shake", [transition(`0 ${options && options.direction || "<=>"} 1`, [...useAnimationIncludingChildren(shake(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$7,
      translate: options && options.translate || "10px"
    }
  })]);
}
function shakeOnEnterAnimation(options) {
  return trigger(options && options.anchor || "shakeOnEnter", [transition(":enter", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(shake(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$7,
      translate: options && options.translate || "10px"
    }
  })]);
}
var swing = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  "transform-origin": "top center",
  offset: 0
}), style({
  visibility: AUTO_STYLE,
  transform: "rotate3d(0, 0, 1, 0deg)",
  easing: "ease",
  offset: 0
}), style({
  transform: "rotate3d(0, 0, 1, 15deg)",
  easing: "ease",
  offset: 0.2
}), style({
  transform: "rotate3d(0, 0, 1, -10deg)",
  easing: "ease",
  offset: 0.4
}), style({
  transform: "rotate3d(0, 0, 1, 5deg)",
  easing: "ease",
  offset: 0.6
}), style({
  transform: "rotate3d(0, 0, 1, -5deg)",
  easing: "ease",
  offset: 0.8
}), style({
  transform: "rotate3d(0, 0, 1, 0deg)",
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION$8 = 1e3;
function swingAnimation(options) {
  return trigger(options && options.anchor || "swing", [transition(`0 ${options && options.direction || "<=>"} 1`, [...useAnimationIncludingChildren(swing(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$8
    }
  })]);
}
function swingOnEnterAnimation(options) {
  return trigger(options && options.anchor || "swingOnEnter", [transition(":enter", [style({
    visibility: "hidden"
  }), style({
    "transform-origin": "top center"
  }), ...useAnimationIncludingChildren(swing(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$8
    }
  })]);
}
var tada = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  visibility: AUTO_STYLE,
  transform: "scale3d(1, 1, 1)",
  easing: "ease",
  offset: 0
}), style({
  transform: "scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)",
  easing: "ease",
  offset: 0.1
}), style({
  transform: "scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)",
  easing: "ease",
  offset: 0.2
}), style({
  transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
  easing: "ease",
  offset: 0.3
}), style({
  transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
  easing: "ease",
  offset: 0.4
}), style({
  transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
  easing: "ease",
  offset: 0.5
}), style({
  transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
  easing: "ease",
  offset: 0.6
}), style({
  transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
  easing: "ease",
  offset: 0.7
}), style({
  transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
  easing: "ease",
  offset: 0.8
}), style({
  transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
  easing: "ease",
  offset: 0.9
}), style({
  transform: "scale3d(1, 1, 1)",
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION$9 = 1e3;
function tadaAnimation(options) {
  return trigger(options && options.anchor || "tada", [transition(`0 ${options && options.direction || "<=>"} 1`, [...useAnimationIncludingChildren(tada(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$9
    }
  })]);
}
function tadaOnEnterAnimation(options) {
  return trigger(options && options.anchor || "tadaOnEnter", [transition(":enter", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(tada(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$9
    }
  })]);
}
var wobble = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  visibility: AUTO_STYLE,
  transform: "translate3d(0, 0, 0)",
  easing: "ease",
  offset: 0
}), style({
  transform: "translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)",
  easing: "ease",
  offset: 0.15
}), style({
  transform: "translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)",
  easing: "ease",
  offset: 0.3
}), style({
  transform: "translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)",
  easing: "ease",
  offset: 0.45
}), style({
  transform: "translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)",
  easing: "ease",
  offset: 0.6
}), style({
  transform: "translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)",
  easing: "ease",
  offset: 0.75
}), style({
  transform: "translate3d(0, 0, 0)",
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION$a = 1e3;
function wobbleAnimation(options) {
  return trigger(options && options.anchor || "wobble", [transition(`0 ${options && options.direction || "<=>"} 1`, [...useAnimationIncludingChildren(wobble(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$a
    }
  })]);
}
function wobbleOnEnterAnimation(options) {
  return trigger(options && options.anchor || "wobbleOnEnter", [transition(":enter", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(wobble(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$a
    }
  })]);
}
var bounceInDown = () => animation(group([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  transform: "translate3d(0, -{{translate}}, 0)",
  easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  offset: 0
}), style({
  transform: "translate3d(0, 25px, 0)",
  easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  offset: 0.6
}), style({
  transform: "translate3d(0, -10px, 0)",
  easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  offset: 0.75
}), style({
  transform: "translate3d(0, 5px, 0)",
  easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  offset: 0.9
}), style({
  transform: "translate3d(0, 0, 0)",
  easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  offset: 1
})])), animate("{{duration}}ms {{delay}}ms", keyframes([style({
  visibility: "visible",
  opacity: 0,
  easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  offset: 0
}), style({
  opacity: 1,
  easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  offset: 0.6
}), style({
  opacity: 1,
  easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  offset: 1
})]))]));
var DEFAULT_DURATION$b = 1e3;
function bounceInDownAnimation(options) {
  return trigger(options && options.anchor || "bounceInDown", [transition("0 => 1", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(bounceInDown(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$b,
      translate: options && options.translate || "3000px"
    }
  })]);
}
function bounceInDownOnEnterAnimation(options) {
  return trigger(options && options.anchor || "bounceInDownOnEnter", [transition(":enter", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(bounceInDown(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$b,
      translate: options && options.translate || "3000px"
    }
  })]);
}
var bounceInLeft = () => animation(group([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  transform: "translate3d(-{{translate}}, 0, 0)",
  easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  offset: 0
}), style({
  transform: "translate3d(25px, 0, 0)",
  easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  offset: 0.6
}), style({
  transform: "translate3d(-10px, 0, 0)",
  easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  offset: 0.75
}), style({
  transform: "translate3d(5px, 0, 0)",
  easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  offset: 0.9
}), style({
  transform: "translate3d(0, 0, 0)",
  easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  offset: 1
})])), animate("{{duration}}ms {{delay}}ms", keyframes([style({
  visibility: "visible",
  opacity: 0,
  easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  offset: 0
}), style({
  opacity: 1,
  easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  offset: 0.6
}), style({
  opacity: 1,
  easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  offset: 1
})]))]));
var DEFAULT_DURATION$c = 1e3;
function bounceInLeftAnimation(options) {
  return trigger(options && options.anchor || "bounceInLeft", [transition("0 => 1", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(bounceInLeft(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$c,
      translate: options && options.translate || "3000px"
    }
  })]);
}
function bounceInLeftOnEnterAnimation(options) {
  return trigger(options && options.anchor || "bounceInLeftOnEnter", [transition(":enter", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(bounceInLeft(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$c,
      translate: options && options.translate || "3000px"
    }
  })]);
}
var bounceInRight = () => animation(group([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  transform: "translate3d({{translate}}, 0, 0)",
  easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  offset: 0
}), style({
  transform: "translate3d(-25px, 0, 0)",
  easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  offset: 0.6
}), style({
  transform: "translate3d(10px, 0, 0)",
  easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  offset: 0.75
}), style({
  transform: "translate3d(-5px, 0, 0)",
  easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  offset: 0.9
}), style({
  transform: "translate3d(0, 0, 0)",
  easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  offset: 1
})])), animate("{{duration}}ms {{delay}}ms", keyframes([style({
  visibility: "visible",
  opacity: 0,
  easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  offset: 0
}), style({
  opacity: 1,
  easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  offset: 0.6
}), style({
  opacity: 1,
  easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  offset: 1
})]))]));
var DEFAULT_DURATION$d = 1e3;
function bounceInRightAnimation(options) {
  return trigger(options && options.anchor || "bounceInRight", [transition("0 => 1", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(bounceInRight(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$d,
      translate: options && options.translate || "3000px"
    }
  })]);
}
function bounceInRightOnEnterAnimation(options) {
  return trigger(options && options.anchor || "bounceInRightOnEnter", [transition(":enter", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(bounceInRight(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$d,
      translate: options && options.translate || "3000px"
    }
  })]);
}
var bounceInUp = () => animation(group([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  transform: "translate3d(0, {{translate}}, 0)",
  easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  offset: 0
}), style({
  transform: "translate3d(0, -20px, 0)",
  easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  offset: 0.6
}), style({
  transform: "translate3d(0, 10px, 0)",
  easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  offset: 0.75
}), style({
  transform: "translate3d(0, -5px, 0)",
  easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  offset: 0.9
}), style({
  transform: "translate3d(0, -5px, 0)",
  easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  offset: 1
})])), animate("{{duration}}ms {{delay}}ms", keyframes([style({
  visibility: "visible",
  opacity: 0,
  easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  offset: 0
}), style({
  opacity: 1,
  easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  offset: 0.6
}), style({
  opacity: 1,
  easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  offset: 1
})]))]));
var DEFAULT_DURATION$e = 1e3;
function bounceInUpAnimation(options) {
  return trigger(options && options.anchor || "bounceInUp", [transition("0 => 1", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(bounceInUp(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$e,
      translate: options && options.translate || "3000px"
    }
  })]);
}
function bounceInUpOnEnterAnimation(options) {
  return trigger(options && options.anchor || "bounceInUpOnEnter", [transition(":enter", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(bounceInUp(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$e,
      translate: options && options.translate || "3000px"
    }
  })]);
}
var bounceIn = () => animation(group([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  transform: "scale3d(0.3, 0.3, 0.3)",
  easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  offset: 0
}), style({
  transform: "scale3d(1.1, 1.1, 1.1)",
  easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  offset: 0.2
}), style({
  transform: "scale3d(0.9, 0.9, 0.9)",
  easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  offset: 0.4
}), style({
  transform: "scale3d(1.03, 1.03, 1.03)",
  easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  offset: 0.6
}), style({
  transform: "scale3d(0.97, 0.97, 0.97)",
  easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  offset: 0.8
}), style({
  transform: "scale3d(1, 1, 1)",
  easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  offset: 1
})])), animate("{{duration}}ms {{delay}}ms", keyframes([style({
  visibility: "visible",
  opacity: 1,
  easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  offset: 0
}), style({
  opacity: 1,
  easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  offset: 0.6
}), style({
  opacity: 1,
  easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  offset: 1
})]))]));
var DEFAULT_DURATION$f = 750;
function bounceInAnimation(options) {
  return trigger(options && options.anchor || "bounceIn", [transition("0 => 1", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(bounceIn(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$f
    }
  })]);
}
function bounceInOnEnterAnimation(options) {
  return trigger(options && options.anchor || "bounceInOnEnter", [transition(":enter", animation([style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(bounceIn(), options)]), {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$f
    }
  })]);
}
var bounceOutDown = () => animation(group([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  transform: "translate3d(0, 0, 0)",
  easing: "ease",
  offset: 0
}), style({
  transform: "translate3d(0, 10px, 0)",
  easing: "ease",
  offset: 0.2
}), style({
  transform: "translate3d(0, -20px, 0)",
  easing: "ease",
  offset: 0.4
}), style({
  transform: "translate3d(0, -20px, 0)",
  easing: "ease",
  offset: 0.45
}), style({
  transform: "translate3d(0, {{translate}}, 0)",
  easing: "ease",
  offset: 1
})])), animate("{{duration}}ms {{delay}}ms", keyframes([style({
  opacity: 1,
  easing: "ease",
  offset: 0
}), style({
  opacity: 1,
  easing: "ease",
  offset: 0.45
}), style({
  opacity: 0,
  easing: "ease",
  offset: 1
})]))]));
var DEFAULT_DURATION$g = 1e3;
function bounceOutDownAnimation(options) {
  return trigger(options && options.anchor || "bounceOutDown", [transition("0 => 1", [...useAnimationIncludingChildren(bounceOutDown(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$g,
      translate: options && options.translate || "2000px"
    }
  })]);
}
function bounceOutDownOnLeaveAnimation(options) {
  return trigger(options && options.anchor || "bounceOutDownOnLeave", [transition(":leave", [...useAnimationIncludingChildren(bounceOutDown(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$g,
      translate: options && options.translate || "2000px"
    }
  })]);
}
var bounceOutLeft = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  opacity: 1,
  transform: "translate3d(0, 0, 0)",
  easing: "ease",
  offset: 0
}), style({
  opacity: 1,
  transform: "translate3d(20px, 0, 0)",
  easing: "ease",
  offset: 0.2
}), style({
  opacity: 0,
  transform: "translate3d(-{{translate}}, 0, 0)",
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION$h = 1e3;
function bounceOutLeftAnimation(options) {
  return trigger(options && options.anchor || "bounceOutLeft", [transition("0 => 1", [...useAnimationIncludingChildren(bounceOutLeft(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$h,
      translate: options && options.translate || "2000px"
    }
  })]);
}
function bounceOutLeftOnLeaveAnimation(options) {
  return trigger(options && options.anchor || "bounceOutLeftOnLeave", [transition(":leave", [...useAnimationIncludingChildren(bounceOutLeft(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$h,
      translate: options && options.translate || "2000px"
    }
  })]);
}
var bounceOutRight = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  opacity: 1,
  transform: "translate3d(0, 0, 0)",
  easing: "ease",
  offset: 0
}), style({
  opacity: 1,
  transform: "translate3d(-20px, 0, 0)",
  easing: "ease",
  offset: 0.2
}), style({
  opacity: 0,
  transform: "translate3d({{translate}}, 0, 0)",
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION$i = 1e3;
function bounceOutRightAnimation(options) {
  return trigger(options && options.anchor || "bounceOutRight", [transition("0 => 1", [...useAnimationIncludingChildren(bounceOutRight(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$i,
      translate: options && options.translate || "2000px"
    }
  })]);
}
function bounceOutRightOnLeaveAnimation(options) {
  return trigger(options && options.anchor || "bounceOutRightOnLeave", [transition(":leave", [...useAnimationIncludingChildren(bounceOutRight(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$i,
      translate: options && options.translate || "2000px"
    }
  })]);
}
var bounceOutUp = () => animation(group([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  transform: "translate3d(0, 0, 0)",
  easing: "ease",
  offset: 0
}), style({
  transform: "translate3d(0, -10px, 0)",
  easing: "ease",
  offset: 0.2
}), style({
  transform: "translate3d(0, 20px, 0)",
  easing: "ease",
  offset: 0.4
}), style({
  transform: "translate3d(0, 20px, 0)",
  easing: "ease",
  offset: 0.45
}), style({
  transform: "translate3d(0, -{{translate}}, 0)",
  easing: "ease",
  offset: 1
})])), animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  opacity: 1,
  easing: "ease",
  offset: 0
}), style({
  opacity: 1,
  easing: "ease",
  offset: 0.45
}), style({
  opacity: 0,
  easing: "ease",
  offset: 1
})]))])]));
var DEFAULT_DURATION$j = 1e3;
function bounceOutUpAnimation(options) {
  return trigger(options && options.anchor || "bounceOutUp", [transition("0 => 1", [...useAnimationIncludingChildren(bounceOutUp(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$j,
      translate: options && options.translate || "2000px"
    }
  })]);
}
function bounceOutUpOnLeaveAnimation(options) {
  return trigger(options && options.anchor || "bounceOutUpOnLeave", [transition(":leave", [...useAnimationIncludingChildren(bounceOutUp(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$j,
      translate: options && options.translate || "2000px"
    }
  })]);
}
var bounceOut = () => animation(group([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  transform: "scale3d(1, 1, 1)",
  easing: "ease",
  offset: 0
}), style({
  transform: "scale3d(0.9, 0.9, 0.9)",
  easing: "ease",
  offset: 0.2
}), style({
  transform: "scale3d(1.1, 1.1, 1.1)",
  easing: "ease",
  offset: 0.5
}), style({
  transform: "scale3d(1.1, 1.1, 1.1)",
  easing: "ease",
  offset: 0.55
}), style({
  transform: "scale3d(0.3, 0.3, 0.3)",
  easing: "ease",
  offset: 1
})])), animate("{{duration}}ms {{delay}}ms", keyframes([style({
  opacity: 1,
  easing: "ease",
  offset: 0
}), style({
  opacity: 1,
  easing: "ease",
  offset: 0.55
}), style({
  opacity: 0,
  easing: "ease",
  offset: 1
})]))]));
var DEFAULT_DURATION$k = 750;
function bounceOutAnimation(options) {
  return trigger(options && options.anchor || "bounceOut", [transition("0 => 1", [...useAnimationIncludingChildren(bounceOut(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$k
    }
  })]);
}
function bounceOutOnLeaveAnimation(options) {
  return trigger(options && options.anchor || "bounceOutOnLeave", [transition(":leave", [...useAnimationIncludingChildren(bounceOut(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$k
    }
  })]);
}
var fadeInDownBig = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  visibility: "visible",
  opacity: 0,
  transform: "translate3d(0, -{{translate}}, 0)",
  easing: "ease",
  offset: 0
}), style({
  opacity: 1,
  transform: "translate3d(0, 0, 0)",
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION$l = 1e3;
function fadeInDownBigAnimation(options) {
  return trigger(options && options.anchor || "fadeInDownBig", [transition("0 => 1", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(fadeInDownBig(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$l,
      translate: options && options.translate || "2000px"
    }
  })]);
}
function fadeInDownBigOnEnterAnimation(options) {
  return trigger(options && options.anchor || "fadeInDownBigOnEnter", [transition(":enter", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(fadeInDownBig(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$l,
      translate: options && options.translate || "2000px"
    }
  })]);
}
var fadeInDown = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  visibility: "visible",
  opacity: 0,
  transform: "translate3d(0, -{{translate}}, 0)",
  easing: "ease",
  offset: 0
}), style({
  opacity: 1,
  transform: "translate3d(0, 0, 0)",
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION$m = 1e3;
function fadeInDownAnimation(options) {
  return trigger(options && options.anchor || "fadeInDown", [transition("0 => 1", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(fadeInDown(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$m,
      translate: options && options.translate || "100%"
    }
  })]);
}
function fadeInDownOnEnterAnimation(options) {
  return trigger(options && options.anchor || "fadeInDownOnEnter", [transition(":enter", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(fadeInDown(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$m,
      translate: options && options.translate || "100%"
    }
  })]);
}
var fadeInLeftBig = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  visibility: "visible",
  opacity: 0,
  transform: "translate3d(-{{translate}}, 0, 0)",
  easing: "ease",
  offset: 0
}), style({
  opacity: 1,
  transform: "translate3d(0, 0, 0)",
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION$n = 1e3;
function fadeInLeftBigAnimation(options) {
  return trigger(options && options.anchor || "fadeInLeftBig", [transition("0 => 1", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(fadeInLeftBig(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$n,
      translate: options && options.translate || "2000px"
    }
  })]);
}
function fadeInLeftBigOnEnterAnimation(options) {
  return trigger(options && options.anchor || "fadeInLeftBigOnEnter", [transition(":enter", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(fadeInLeftBig(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$n,
      translate: options && options.translate || "2000px"
    }
  })]);
}
var fadeInLeft = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  visibility: "visible",
  opacity: 0,
  transform: "translate3d(-{{translate}}, 0, 0)",
  easing: "ease",
  offset: 0
}), style({
  opacity: 1,
  transform: "translate3d(0, 0, 0)",
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION$o = 1e3;
function fadeInLeftAnimation(options) {
  return trigger(options && options.anchor || "fadeInLeft", [transition("0 => 1", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(fadeInLeft(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$o,
      translate: options && options.translate || "100%"
    }
  })]);
}
function fadeInLeftOnEnterAnimation(options) {
  return trigger(options && options.anchor || "fadeInLeftOnEnter", [transition(":enter", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(fadeInLeft(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$o,
      translate: options && options.translate || "100%"
    }
  })]);
}
var fadeInRightBig = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  visibility: "visible",
  opacity: 0,
  transform: "translate3d({{translate}}, 0, 0)",
  easing: "ease",
  offset: 0
}), style({
  opacity: 1,
  transform: "translate3d(0, 0, 0)",
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION$p = 1e3;
function fadeInRightBigAnimation(options) {
  return trigger(options && options.anchor || "fadeInRightBig", [transition("0 => 1", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(fadeInRightBig(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$p,
      translate: options && options.translate || "2000px"
    }
  })]);
}
function fadeInRightBigOnEnterAnimation(options) {
  return trigger(options && options.anchor || "fadeInRightBigOnEnter", [transition(":enter", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(fadeInRightBig(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$p,
      translate: options && options.translate || "2000px"
    }
  })]);
}
var fadeInRight = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  visibility: "visible",
  opacity: 0,
  transform: "translate3d({{translate}}, 0, 0)",
  easing: "ease",
  offset: 0
}), style({
  opacity: 1,
  transform: "translate3d(0, 0, 0)",
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION$q = 1e3;
function fadeInRightAnimation(options) {
  return trigger(options && options.anchor || "fadeInRight", [transition("0 => 1", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(fadeInRight(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$q,
      translate: options && options.translate || "100%"
    }
  })]);
}
function fadeInRightOnEnterAnimation(options) {
  return trigger(options && options.anchor || "fadeInRightOnEnter", [transition(":enter", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(fadeInRight(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$q,
      translate: options && options.translate || "100%"
    }
  })]);
}
var fadeInUpBig = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  visibility: "visible",
  opacity: 0,
  transform: "translate3d(0, {{translate}}, 0)",
  easing: "ease",
  offset: 0
}), style({
  opacity: 1,
  transform: "translate3d(0, 0, 0)",
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION$r = 1e3;
function fadeInUpBigAnimation(options) {
  return trigger(options && options.anchor || "fadeInUpBig", [transition("0 => 1", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(fadeInUpBig(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$r,
      translate: options && options.translate || "2000px"
    }
  })]);
}
function fadeInUpBigOnEnterAnimation(options) {
  return trigger(options && options.anchor || "fadeInUpBigOnEnter", [transition(":enter", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(fadeInUpBig(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$r,
      translate: options && options.translate || "2000px"
    }
  })]);
}
var fadeInUp = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  visibility: "visible",
  opacity: 0,
  transform: "translate3d(0, {{translate}}, 0)",
  easing: "ease",
  offset: 0
}), style({
  opacity: 1,
  transform: "translate3d(0, 0, 0)",
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION$s = 1e3;
function fadeInUpAnimation(options) {
  return trigger(options && options.anchor || "fadeInUp", [transition("0 => 1", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(fadeInUp(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$s,
      translate: options && options.translate || "100%"
    }
  })]);
}
function fadeInUpOnEnterAnimation(options) {
  return trigger(options && options.anchor || "fadeInUpOnEnter", [transition(":enter", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(fadeInUp(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$s,
      translate: options && options.translate || "100%"
    }
  })]);
}
var fadeIn = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  visibility: "visible",
  opacity: 0,
  easing: "ease",
  offset: 0
}), style({
  opacity: 1,
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION$t = 1e3;
function fadeInAnimation(options) {
  return trigger(options && options.anchor || "fadeIn", [transition("0 => 1", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(fadeIn(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$t
    }
  })]);
}
function fadeInOnEnterAnimation(options) {
  return trigger(options && options.anchor || "fadeInOnEnter", [transition(":enter", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(fadeIn(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$t
    }
  })]);
}
var fadeOutDownBig = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  opacity: 1,
  transform: "translate3d(0, 0, 0)",
  easing: "ease",
  offset: 0
}), style({
  opacity: 0,
  transform: "translate3d(0, {{translate}}, 0)",
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION$u = 1e3;
function fadeOutDownBigAnimation(options) {
  return trigger(options && options.anchor || "fadeOutDownBig", [transition("0 => 1", [...useAnimationIncludingChildren(fadeOutDownBig(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$u,
      translate: options && options.translate || "2000px"
    }
  })]);
}
function fadeOutDownBigOnLeaveAnimation(options) {
  return trigger(options && options.anchor || "fadeOutDownBigOnLeave", [transition(":leave", [...useAnimationIncludingChildren(fadeOutDownBig(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$u,
      translate: options && options.translate || "2000px"
    }
  })]);
}
var fadeOutDown = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  opacity: 1,
  transform: "translate3d(0, 0, 0)",
  easing: "ease",
  offset: 0
}), style({
  opacity: 0,
  transform: "translate3d(0, {{translate}}, 0)",
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION$v = 1e3;
function fadeOutDownAnimation(options) {
  return trigger(options && options.anchor || "fadeOutDown", [transition("0 => 1", [...useAnimationIncludingChildren(fadeOutDown(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$v,
      translate: options && options.translate || "100%"
    }
  })]);
}
function fadeOutDownOnLeaveAnimation(options) {
  return trigger(options && options.anchor || "fadeOutDownOnLeave", [transition(":leave", [...useAnimationIncludingChildren(fadeOutDown(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$v,
      translate: options && options.translate || "100%"
    }
  })]);
}
var fadeOutLeftBig = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  opacity: 1,
  transform: "translate3d(0, 0, 0)",
  easing: "ease",
  offset: 0
}), style({
  opacity: 0,
  transform: "translate3d(-{{translate}}, 0, 0)",
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION$w = 1e3;
function fadeOutLeftBigAnimation(options) {
  return trigger(options && options.anchor || "fadeOutLeftBig", [transition("0 => 1", [...useAnimationIncludingChildren(fadeOutLeftBig(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$w,
      translate: options && options.translate || "2000px"
    }
  })]);
}
function fadeOutLeftBigOnLeaveAnimation(options) {
  return trigger(options && options.anchor || "fadeOutLeftBigOnLeave", [transition(":leave", [...useAnimationIncludingChildren(fadeOutLeftBig(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$w,
      translate: options && options.translate || "2000px"
    }
  })]);
}
var fadeOutLeft = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  opacity: 1,
  transform: "translate3d(0, 0, 0)",
  easing: "ease",
  offset: 0
}), style({
  opacity: 0,
  transform: "translate3d(-{{translate}}, 0, 0)",
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION$x = 1e3;
function fadeOutLeftAnimation(options) {
  return trigger(options && options.anchor || "fadeOutLeft", [transition("0 => 1", [...useAnimationIncludingChildren(fadeOutLeft(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$x,
      translate: options && options.translate || "100%"
    }
  })]);
}
function fadeOutLeftOnLeaveAnimation(options) {
  return trigger(options && options.anchor || "fadeOutLeftOnLeave", [transition(":leave", [...useAnimationIncludingChildren(fadeOutLeft(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$x,
      translate: options && options.translate || "100%"
    }
  })]);
}
var fadeOutRightBig = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  opacity: 1,
  transform: "translate3d(0, 0, 0)",
  easing: "ease",
  offset: 0
}), style({
  opacity: 0,
  transform: "translate3d({{translate}}, 0, 0)",
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION$y = 1e3;
function fadeOutRightBigAnimation(options) {
  return trigger(options && options.anchor || "fadeOutRightBig", [transition("0 => 1", [...useAnimationIncludingChildren(fadeOutRightBig(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$y,
      translate: options && options.translate || "2000px"
    }
  })]);
}
function fadeOutRightBigOnLeaveAnimation(options) {
  return trigger(options && options.anchor || "fadeOutRightBigOnLeave", [transition(":leave", [...useAnimationIncludingChildren(fadeOutRightBig(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$y,
      translate: options && options.translate || "2000px"
    }
  })]);
}
var fadeOutRight = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  opacity: 1,
  transform: "translate3d(0, 0, 0)",
  easing: "ease",
  offset: 0
}), style({
  opacity: 0,
  transform: "translate3d({{translate}}, 0, 0)",
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION$z = 1e3;
function fadeOutRightAnimation(options) {
  return trigger(options && options.anchor || "fadeOutRight", [transition("0 => 1", [...useAnimationIncludingChildren(fadeOutRight(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$z,
      translate: options && options.translate || "100%"
    }
  })]);
}
function fadeOutRightOnLeaveAnimation(options) {
  return trigger(options && options.anchor || "fadeOutRightOnLeave", [transition(":leave", [...useAnimationIncludingChildren(fadeOutRight(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$z,
      translate: options && options.translate || "100%"
    }
  })]);
}
var fadeOutUpBig = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  opacity: 1,
  transform: "translate3d(0, 0, 0)",
  easing: "ease",
  offset: 0
}), style({
  opacity: 0,
  transform: "translate3d(0, -{{translate}}, 0)",
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION$A = 1e3;
function fadeOutUpBigAnimation(options) {
  return trigger(options && options.anchor || "fadeOutUpBig", [transition("0 => 1", [...useAnimationIncludingChildren(fadeOutUpBig(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$A,
      translate: options && options.translate || "2000px"
    }
  })]);
}
function fadeOutUpBigOnLeaveAnimation(options) {
  return trigger(options && options.anchor || "fadeOutUpBigOnLeave", [transition(":leave", [...useAnimationIncludingChildren(fadeOutUpBig(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$A,
      translate: options && options.translate || "2000px"
    }
  })]);
}
var fadeOutUp = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  opacity: 1,
  transform: "translate3d(0, 0, 0)",
  easing: "ease",
  offset: 0
}), style({
  opacity: 0,
  transform: "translate3d(0, -{{translate}}, 0)",
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION$B = 1e3;
function fadeOutUpAnimation(options) {
  return trigger(options && options.anchor || "fadeOutUp", [transition("0 => 1", [...useAnimationIncludingChildren(fadeOutUp(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$B,
      translate: options && options.translate || "100%"
    }
  })]);
}
function fadeOutUpOnLeaveAnimation(options) {
  return trigger(options && options.anchor || "fadeOutUpOnLeave", [transition(":leave", [...useAnimationIncludingChildren(fadeOutUp(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$B,
      translate: options && options.translate || "100%"
    }
  })]);
}
var fadeOut = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  opacity: 1,
  easing: "ease",
  offset: 0
}), style({
  opacity: 0,
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION$C = 1e3;
function fadeOutAnimation(options) {
  return trigger(options && options.anchor || "fadeOut", [transition("0 => 1", [...useAnimationIncludingChildren(fadeOut(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$C
    }
  })]);
}
function fadeOutOnLeaveAnimation(options) {
  return trigger(options && options.anchor || "fadeOutOnLeave", [transition(":leave", [...useAnimationIncludingChildren(fadeOut(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$C
    }
  })]);
}
var flipInX = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  visibility: "visible",
  transform: "perspective(400px) rotate3d(1, 0, 0, {{degrees}}deg)",
  opacity: 0,
  easing: "ease-in",
  offset: 0
}), style({
  transform: "perspective(400px) rotate3d(1, 0, 0, -20deg)",
  opacity: 0.5,
  easing: "ease-in",
  offset: 0.4
}), style({
  transform: "perspective(400px) rotate3d(1, 0, 0, 10deg)",
  opacity: 1,
  easing: "ease-in",
  offset: 0.6
}), style({
  transform: "perspective(400px) rotate3d(1, 0, 0, -5deg)",
  easing: "ease",
  offset: 0.8
}), style({
  transform: "perspective(400px)",
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION$D = 1e3;
function flipInXAnimation(options) {
  return trigger(options && options.anchor || "flipInX", [transition("0 => 1", [style({
    visibility: "hidden"
  }), style({
    "backface-visibility": "visible"
  }), ...useAnimationIncludingChildren(flipInX(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$D,
      degrees: options && options.degrees || 90
    }
  })]);
}
function flipInXOnEnterAnimation(options) {
  return trigger(options && options.anchor || "flipInXOnEnter", [transition(":enter", [style({
    visibility: "hidden"
  }), style({
    "backface-visibility": "visible"
  }), ...useAnimationIncludingChildren(flipInX(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$D,
      degrees: options && options.degrees || 90
    }
  })]);
}
var flipInY = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  visibility: "visible",
  transform: "perspective(400px) rotate3d(0, 1, 0, {{degrees}}deg)",
  opacity: 0,
  easing: "ease-in",
  offset: 0
}), style({
  transform: "perspective(400px) rotate3d(0, 1, 0, -20deg)",
  opacity: 0.5,
  easing: "ease-in",
  offset: 0.4
}), style({
  transform: "perspective(400px) rotate3d(0, 1, 0, 10deg)",
  opacity: 1,
  easing: "ease-in",
  offset: 0.6
}), style({
  transform: "perspective(400px) rotate3d(0, 1, 0, -5deg)",
  easing: "ease",
  offset: 0.8
}), style({
  transform: "perspective(400px)",
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION$E = 1e3;
function flipInYAnimation(options) {
  return trigger(options && options.anchor || "flipInY", [transition("0 => 1", [style({
    visibility: "hidden"
  }), style({
    "backface-visibility": "visible"
  }), ...useAnimationIncludingChildren(flipInY(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$E,
      degrees: options && options.degrees || 90
    }
  })]);
}
function flipInYOnEnterAnimation(options) {
  return trigger(options && options.anchor || "flipInYOnEnter", [transition(":enter", [style({
    visibility: "hidden"
  }), style({
    "backface-visibility": "visible"
  }), ...useAnimationIncludingChildren(flipInY(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$E,
      degrees: options && options.degrees || 90
    }
  })]);
}
var flipOutX = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  transform: "perspective(400px)",
  opacity: 1,
  easing: "ease",
  offset: 0
}), style({
  transform: "perspective(400px) rotate3d(1, 0, 0, -20deg)",
  opacity: 1,
  easing: "ease",
  offset: 0.3
}), style({
  transform: "perspective(400px) rotate3d(1, 0, 0, {{degrees}}deg)",
  opacity: 0,
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION$F = 750;
function flipOutXAnimation(options) {
  return trigger(options && options.anchor || "flipOutX", [transition("0 => 1", [style({
    "backface-visibility": "visible"
  }), ...useAnimationIncludingChildren(flipOutX(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$F,
      degrees: options && options.degrees || 90
    }
  })]);
}
function flipOutXOnLeaveAnimation(options) {
  return trigger(options && options.anchor || "flipOutXOnLeave", [transition(":leave", [style({
    "backface-visibility": "visible"
  }), ...useAnimationIncludingChildren(flipOutX(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$F,
      degrees: options && options.degrees || 90
    }
  })]);
}
var flipOutY = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  transform: "perspective(400px)",
  opacity: 1,
  easing: "ease",
  offset: 0
}), style({
  transform: "perspective(400px) rotate3d(0, 1, 0, -15deg)",
  opacity: 1,
  easing: "ease",
  offset: 0.3
}), style({
  transform: "perspective(400px) rotate3d(0, 1, 0, {{degrees}}deg)",
  opacity: 0,
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION$G = 750;
function flipOutYAnimation(options) {
  return trigger(options && options.anchor || "flipOutY", [transition("0 => 1", [style({
    "backface-visibility": "visible"
  }), ...useAnimationIncludingChildren(flipOutY(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$G,
      degrees: options && options.degrees || 90
    }
  })]);
}
function flipOutYOnLeaveAnimation(options) {
  return trigger(options && options.anchor || "flipOutYOnLeave", [transition(":leave", [style({
    "backface-visibility": "visible"
  }), ...useAnimationIncludingChildren(flipOutY(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$G,
      degrees: options && options.degrees || 90
    }
  })]);
}
var flip = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  transform: "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",
  easing: "ease-out",
  offset: 0
}), style({
  transform: "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)",
  easing: "ease-out",
  offset: 0.4
}), style({
  transform: "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)",
  easing: "ease-out",
  offset: 0.5
}), style({
  transform: "perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",
  easing: "ease-in",
  offset: 0.8
}), style({
  transform: "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",
  easing: "ease-in",
  offset: 1
})]))]);
var DEFAULT_DURATION$H = 1e3;
function flipAnimation(options) {
  return trigger(options && options.anchor || "flip", [transition("0 <=> 1", [style({
    "backface-visibility": "visible"
  }), ...useAnimationIncludingChildren(flip(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$H
    }
  })]);
}
function flipOnEnterAnimation(options) {
  return trigger(options && options.anchor || "flipOnEnter", [transition(":enter", [style({
    "backface-visibility": "visible"
  }), ...useAnimationIncludingChildren(flip(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$H
    }
  })]);
}
var lightSpeedIn = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  visibility: "visible",
  opacity: 0,
  transform: "translate3d({{translate}}, 0, 0) skewX(-30deg)",
  easing: "ease-out",
  offset: 0
}), style({
  opacity: 1,
  transform: "skewX(20deg)",
  easing: "ease-out",
  offset: 0.6
}), style({
  opacity: 1,
  transform: "skewX(-5deg)",
  easing: "ease-out",
  offset: 0.8
}), style({
  opacity: 1,
  transform: "translate3d(0, 0, 0)",
  easing: "ease-out",
  offset: 1
})]))]);
var DEFAULT_DURATION$I = 1e3;
function lightSpeedInAnimation(options) {
  return trigger(options && options.anchor || "lightSpeedIn", [transition("0 => 1", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(lightSpeedIn(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$I,
      translate: options && options.translate || "100%"
    }
  })]);
}
function lightSpeedInOnEnterAnimation(options) {
  return trigger(options && options.anchor || "lightSpeedInOnEnter", [transition(":enter", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(lightSpeedIn(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$I,
      translate: options && options.translate || "100%"
    }
  })]);
}
var lightSpeedOut = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  opacity: 1,
  easing: "ease-in",
  offset: 0
}), style({
  opacity: 0,
  transform: "translate3d({{translate}}, 0, 0) skewX(30deg)",
  easing: "ease-in",
  offset: 1
})]))]);
var DEFAULT_DURATION$J = 1e3;
function lightSpeedOutAnimation(options) {
  return trigger(options && options.anchor || "lightSpeedOut", [transition("0 => 1", [...useAnimationIncludingChildren(lightSpeedOut(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$J,
      translate: options && options.translate || "100%"
    }
  })]);
}
function lightSpeedOutOnLeaveAnimation(options) {
  return trigger(options && options.anchor || "lightSpeedOutOnLeave", [transition(":leave", [...useAnimationIncludingChildren(lightSpeedOut(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$J,
      translate: options && options.translate || "100%"
    }
  })]);
}
var rotateInDownLeft = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  visibility: "visible",
  opacity: 0,
  transform: "rotate3d(0, 0, 1, {{degrees}}deg)",
  easing: "ease",
  offset: 0
}), style({
  opacity: 1,
  transform: "rotate3d(0, 0, 1, 0deg)",
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION$K = 1e3;
function rotateInDownLeftAnimation(options) {
  return trigger(options && options.anchor || "rotateInDownLeft", [transition("0 => 1", [style({
    visibility: "hidden"
  }), style({
    "transform-origin": "left bottom"
  }), ...useAnimationIncludingChildren(rotateInDownLeft(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$K,
      degrees: options && options.degrees || -45
    }
  })]);
}
function rotateInDownLeftOnEnterAnimation(options) {
  return trigger(options && options.anchor || "rotateInDownLeftOnEnter", [transition(":enter", [style({
    visibility: "hidden"
  }), style({
    "transform-origin": "left bottom"
  }), ...useAnimationIncludingChildren(rotateInDownLeft(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$K,
      degrees: options && options.degrees || -45
    }
  })]);
}
var rotateInDownRight = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  visibility: "visible",
  opacity: 0,
  transform: "rotate3d(0, 0, 1, {{degrees}}deg)",
  easing: "ease",
  offset: 0
}), style({
  opacity: 1,
  transform: "rotate3d(0, 0, 1, 0deg)",
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION$L = 1e3;
function rotateInDownRightAnimation(options) {
  return trigger(options && options.anchor || "rotateInDownRight", [transition("0 => 1", [style({
    visibility: "hidden"
  }), style({
    "transform-origin": "right bottom"
  }), ...useAnimationIncludingChildren(rotateInDownRight(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$L,
      degrees: options && options.degrees || 45
    }
  })]);
}
function rotateInDownRightOnEnterAnimation(options) {
  return trigger(options && options.anchor || "rotateInDownRightOnEnter", [transition(":enter", [style({
    visibility: "hidden"
  }), style({
    "transform-origin": "right bottom"
  }), ...useAnimationIncludingChildren(rotateInDownRight(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$L,
      degrees: options && options.degrees || 45
    }
  })]);
}
var rotateInUpLeft = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  visibility: "visible",
  opacity: 0,
  transform: "rotate3d(0, 0, 1, {{degrees}}deg)",
  easing: "ease",
  offset: 0
}), style({
  opacity: 1,
  transform: "rotate3d(0, 0, 1, 0deg)",
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION$M = 1e3;
function rotateInUpLeftAnimation(options) {
  return trigger(options && options.anchor || "rotateInUpLeft", [transition("0 => 1", [style({
    visibility: "hidden"
  }), style({
    "transform-origin": "left bottom"
  }), ...useAnimationIncludingChildren(rotateInUpLeft(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$M,
      degrees: options && options.degrees || 45
    }
  })]);
}
function rotateInUpLeftOnEnterAnimation(options) {
  return trigger(options && options.anchor || "rotateInUpLeftOnEnter", [transition(":enter", [style({
    visibility: "hidden"
  }), style({
    "transform-origin": "left bottom"
  }), ...useAnimationIncludingChildren(rotateInUpLeft(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$M,
      degrees: options && options.degrees || 45
    }
  })]);
}
var rotateInUpRight = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  visibility: "visible",
  opacity: 0,
  transform: "rotate3d(0, 0, 1, {{degrees}}deg)",
  easing: "ease",
  offset: 0
}), style({
  opacity: 1,
  transform: "rotate3d(0, 0, 1, 0deg)",
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION$N = 1e3;
function rotateInUpRightAnimation(options) {
  return trigger(options && options.anchor || "rotateInUpRight", [transition("0 => 1", [style({
    visibility: "hidden"
  }), style({
    "transform-origin": "right bottom"
  }), ...useAnimationIncludingChildren(rotateInUpRight(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$N,
      degrees: options && options.degrees || -90
    }
  })]);
}
function rotateInUpRightOnEnterAnimation(options) {
  return trigger(options && options.anchor || "rotateInUpRightOnEnter", [transition(":enter", [style({
    visibility: "hidden"
  }), style({
    "transform-origin": "right bottom"
  }), ...useAnimationIncludingChildren(rotateInUpRight(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$N,
      degrees: options && options.degrees || -90
    }
  })]);
}
var rotateIn = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  visibility: "visible",
  opacity: 0,
  transform: "rotate({{degrees}}deg)",
  easing: "ease",
  offset: 0
}), style({
  opacity: 1,
  transform: "rotate(0deg)",
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION$O = 1e3;
function rotateInAnimation(options) {
  return trigger(options && options.anchor || "rotateIn", [transition("0 => 1", [style({
    visibility: "hidden"
  }), style({
    "transform-origin": "center"
  }), ...useAnimationIncludingChildren(rotateIn(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$O,
      degrees: options && options.degrees || -200
    }
  })]);
}
function rotateInOnEnterAnimation(options) {
  return trigger(options && options.anchor || "rotateInOnEnter", [transition(":enter", [style({
    visibility: "hidden"
  }), style({
    "transform-origin": "center"
  }), ...useAnimationIncludingChildren(rotateIn(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$O,
      degrees: options && options.degrees || -200
    }
  })]);
}
var rotateOutDownLeft = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  opacity: 1,
  easing: "ease",
  offset: 0
}), style({
  opacity: 0,
  transform: "rotate3d(0, 0, 1, {{degrees}}deg)",
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION$P = 1e3;
function rotateOutDownLeftAnimation(options) {
  return trigger(options && options.anchor || "rotateOutDownLeft", [transition("0 => 1", [style({
    "transform-origin": "left bottom"
  }), ...useAnimationIncludingChildren(rotateOutDownLeft(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$P,
      degrees: options && options.degrees || 45
    }
  })]);
}
function rotateOutDownLeftOnLeaveAnimation(options) {
  return trigger(options && options.anchor || "rotateOutDownLeftOnLeave", [transition(":leave", [style({
    "transform-origin": "left bottom"
  }), ...useAnimationIncludingChildren(rotateOutDownLeft(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$P,
      degrees: options && options.degrees || 45
    }
  })]);
}
var rotateOutDownRight = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  opacity: 1,
  easing: "ease",
  offset: 0
}), style({
  opacity: 0,
  transform: "rotate3d(0, 0, 1, {{degrees}}deg)",
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION$Q = 1e3;
function rotateOutDownRightAnimation(options) {
  return trigger(options && options.anchor || "rotateOutDownRight", [transition("0 => 1", [style({
    "transform-origin": "right bottom"
  }), ...useAnimationIncludingChildren(rotateOutDownRight(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$Q,
      degrees: options && options.degrees || -45
    }
  })]);
}
function rotateOutDownRightOnLeaveAnimation(options) {
  return trigger(options && options.anchor || "rotateOutDownRightOnLeave", [transition(":leave", [style({
    "transform-origin": "right bottom"
  }), ...useAnimationIncludingChildren(rotateOutDownRight(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$Q,
      degrees: options && options.degrees || -45
    }
  })]);
}
var rotateOutUpLeft = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  opacity: 1,
  easing: "ease",
  offset: 0
}), style({
  opacity: 0,
  transform: "rotate3d(0, 0, 1, {{degrees}}deg)",
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION$R = 1e3;
function rotateOutUpLeftAnimation(options) {
  return trigger(options && options.anchor || "rotateOutUpLeft", [transition("0 => 1", [style({
    "transform-origin": "left bottom"
  }), ...useAnimationIncludingChildren(rotateOutUpLeft(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$R,
      degrees: options && options.degrees || -45
    }
  })]);
}
function rotateOutUpLeftOnLeaveAnimation(options) {
  return trigger(options && options.anchor || "rotateOutUpLeftOnLeave", [transition(":leave", [style({
    "transform-origin": "left bottom"
  }), ...useAnimationIncludingChildren(rotateOutUpLeft(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$R,
      degrees: options && options.degrees || -45
    }
  })]);
}
var rotateOutUpRight = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  opacity: 1,
  easing: "ease",
  offset: 0
}), style({
  opacity: 0,
  transform: "rotate3d(0, 0, 1, {{degrees}}deg)",
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION$S = 1e3;
function rotateOutUpRightAnimation(options) {
  return trigger(options && options.anchor || "rotateOutUpRight", [transition("0 => 1", [style({
    "transform-origin": "right bottom"
  }), ...useAnimationIncludingChildren(rotateOutUpRight(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$S,
      degrees: options && options.degrees || 90
    }
  })]);
}
function rotateOutUpRightOnLeaveAnimation(options) {
  return trigger(options && options.anchor || "rotateOutUpRightOnLeave", [transition(":leave", [style({
    "transform-origin": "right bottom"
  }), ...useAnimationIncludingChildren(rotateOutUpRight(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$S,
      degrees: options && options.degrees || 90
    }
  })]);
}
var rotateOut = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  opacity: 1,
  easing: "ease",
  offset: 0
}), style({
  opacity: 0,
  transform: "rotate({{degrees}}deg)",
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION$T = 1e3;
function rotateOutAnimation(options) {
  return trigger(options && options.anchor || "rotateOut", [transition("0 => 1", [style({
    "transform-origin": "center"
  }), ...useAnimationIncludingChildren(rotateOut(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$T,
      degrees: options && options.degrees || 200
    }
  })]);
}
function rotateOutOnLeaveAnimation(options) {
  return trigger(options && options.anchor || "rotateOutOnLeave", [transition(":leave", [style({
    "transform-origin": "center"
  }), ...useAnimationIncludingChildren(rotateOut(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$T,
      degrees: options && options.degrees || 200
    }
  })]);
}
var slideInDown = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  visibility: "visible",
  transform: "translate3d(0, -{{translate}}, 0)",
  easing: "ease",
  offset: 0
}), style({
  transform: "translate3d(0, 0, 0)",
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION$U = 1e3;
function slideInDownAnimation(options) {
  return trigger(options && options.anchor || "slideInDown", [transition("0 => 1", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(slideInDown(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$U,
      translate: options && options.translate || "100%"
    }
  })]);
}
function slideInDownOnEnterAnimation(options) {
  return trigger(options && options.anchor || "slideInDownOnEnter", [transition(":enter", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(slideInDown(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$U,
      translate: options && options.translate || "100%"
    }
  })]);
}
var slideInLeft = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  visibility: "visible",
  transform: "translate3d(-{{translate}}, 0, 0)",
  easing: "ease",
  offset: 0
}), style({
  transform: "translate3d(0, 0, 0)",
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION$V = 1e3;
function slideInLeftAnimation(options) {
  return trigger(options && options.anchor || "slideInLeft", [transition("0 => 1", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(slideInLeft(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$V,
      translate: options && options.translate || "100%"
    }
  })]);
}
function slideInLeftOnEnterAnimation(options) {
  return trigger(options && options.anchor || "slideInLeftOnEnter", [transition(":enter", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(slideInLeft(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$V,
      translate: options && options.translate || "100%"
    }
  })]);
}
var slideInRight = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  visibility: "visible",
  transform: "translate3d({{translate}}, 0, 0)",
  easing: "ease",
  offset: 0
}), style({
  transform: "translate3d(0, 0, 0)",
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION$W = 1e3;
function slideInRightAnimation(options) {
  return trigger(options && options.anchor || "slideInRight", [transition("0 => 1", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(slideInRight(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$W,
      translate: options && options.translate || "100%"
    }
  })]);
}
function slideInRightOnEnterAnimation(options) {
  return trigger(options && options.anchor || "slideInRightOnEnter", [transition(":enter", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(slideInRight(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$W,
      translate: options && options.translate || "100%"
    }
  })]);
}
var slideInUp = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  visibility: "visible",
  transform: "translate3d(0, {{translate}}, 0)",
  easing: "ease",
  offset: 0
}), style({
  transform: "translate3d(0, 0, 0)",
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION$X = 1e3;
function slideInUpAnimation(options) {
  return trigger(options && options.anchor || "slideInUp", [transition("0 => 1", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(slideInUp(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$X,
      translate: options && options.translate || "100%"
    }
  })]);
}
function slideInUpOnEnterAnimation(options) {
  return trigger(options && options.anchor || "slideInUpOnEnter", [transition(":enter", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(slideInUp(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$X,
      translate: options && options.translate || "100%"
    }
  })]);
}
var slideOutDown = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  transform: "translate3d(0, 0, 0)",
  easing: "ease",
  offset: 0
}), style({
  transform: "translate3d(0, {{translate}}, 0)",
  visibility: "hidden",
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION$Y = 1e3;
function slideOutDownAnimation(options) {
  return trigger(options && options.anchor || "slideOutDown", [transition("0 => 1", [...useAnimationIncludingChildren(slideOutDown(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$Y,
      translate: options && options.translate || "100%"
    }
  })]);
}
function slideOutDownOnLeaveAnimation(options) {
  return trigger(options && options.anchor || "slideOutDownOnLeave", [transition(":leave", [...useAnimationIncludingChildren(slideOutDown(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$Y,
      translate: options && options.translate || "100%"
    }
  })]);
}
var slideOutLeft = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  transform: "translate3d(0, 0, 0)",
  easing: "ease",
  offset: 0
}), style({
  transform: "translate3d(-{{translate}}, 0, 0)",
  visibility: "hidden",
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION$Z = 1e3;
function slideOutLeftAnimation(options) {
  return trigger(options && options.anchor || "slideOutLeft", [transition("0 => 1", [...useAnimationIncludingChildren(slideOutLeft(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$Z,
      translate: options && options.translate || "100%"
    }
  })]);
}
function slideOutLeftOnLeaveAnimation(options) {
  return trigger(options && options.anchor || "slideOutLeftOnLeave", [transition(":leave", [...useAnimationIncludingChildren(slideOutLeft(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$Z,
      translate: options && options.translate || "100%"
    }
  })]);
}
var slideOutRight = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  transform: "translate3d(0, 0, 0)",
  easing: "ease",
  offset: 0
}), style({
  transform: "translate3d({{translate}}, 0, 0)",
  visibility: "hidden",
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION$_ = 1e3;
function slideOutRightAnimation(options) {
  return trigger(options && options.anchor || "slideOutRight", [transition("0 => 1", [...useAnimationIncludingChildren(slideOutRight(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$_,
      translate: options && options.translate || "100%"
    }
  })]);
}
function slideOutRightOnLeaveAnimation(options) {
  return trigger(options && options.anchor || "slideOutRightOnLeave", [transition(":leave", [...useAnimationIncludingChildren(slideOutRight(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$_,
      translate: options && options.translate || "100%"
    }
  })]);
}
var slideOutUp = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  transform: "translate3d(0, 0, 0)",
  easing: "ease",
  offset: 0
}), style({
  transform: "translate3d(0, -{{translate}}, 0)",
  visibility: "hidden",
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION$$ = 1e3;
function slideOutUpAnimation(options) {
  return trigger(options && options.anchor || "slideOutUp", [transition("0 => 1", [...useAnimationIncludingChildren(slideOutUp(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$$,
      translate: options && options.translate || "100%"
    }
  })]);
}
function slideOutUpOnLeaveAnimation(options) {
  return trigger(options && options.anchor || "slideOutUpOnLeave", [transition(":leave", [...useAnimationIncludingChildren(slideOutUp(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$$,
      translate: options && options.translate || "100%"
    }
  })]);
}
var zoomInDown = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  visibility: "visible",
  opacity: 0,
  transform: "scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",
  easing: "ease",
  offset: 0
}), style({
  opacity: 1,
  transform: "scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",
  easing: "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
  offset: 0.6
}), style({
  opacity: 1,
  transform: "scale3d(1, 1, 1) translate3d(0, 0, 0)",
  easing: "cubic-bezier(0.175, 0.885, 0.32, 1)",
  offset: 1
})]))]);
var DEFAULT_DURATION$10 = 1e3;
function zoomInDownAnimation(options) {
  return trigger(options && options.anchor || "zoomInDown", [transition("0 => 1", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(zoomInDown(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$10
    }
  })]);
}
function zoomInDownOnEnterAnimation(options) {
  return trigger(options && options.anchor || "zoomInDownOnEnter", [transition(":enter", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(zoomInDown(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$10
    }
  })]);
}
var zoomInLeft = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  visibility: "visible",
  opacity: 0,
  transform: "scale3d(0.1, 0.1, 0.1) translate3d(-3000px, 0, 0)",
  easing: "ease",
  offset: 0
}), style({
  opacity: 1,
  transform: "scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",
  easing: "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
  offset: 0.6
}), style({
  opacity: 1,
  transform: "scale3d(1, 1, 1) translate3d(0, 0, 0)",
  easing: "cubic-bezier(0.175, 0.885, 0.32, 1)",
  offset: 1
})]))]);
var DEFAULT_DURATION$11 = 1e3;
function zoomInLeftAnimation(options) {
  return trigger(options && options.anchor || "zoomInLeft", [transition("0 => 1", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(zoomInLeft(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$11
    }
  })]);
}
function zoomInLeftOnEnterAnimation(options) {
  return trigger(options && options.anchor || "zoomInLeftOnEnter", [transition(":enter", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(zoomInLeft(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$11
    }
  })]);
}
var zoomInRight = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  visibility: "visible",
  opacity: 0,
  transform: "scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",
  easing: "ease",
  offset: 0
}), style({
  opacity: 1,
  transform: "scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",
  easing: "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
  offset: 0.6
}), style({
  opacity: 1,
  transform: "scale3d(1, 1, 1) translate3d(0, 0, 0)",
  easing: "cubic-bezier(0.175, 0.885, 0.32, 1)",
  offset: 1
})]))]);
var DEFAULT_DURATION$12 = 1e3;
function zoomInRightAnimation(options) {
  return trigger(options && options.anchor || "zoomInRight", [transition("0 => 1", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(zoomInRight(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$12
    }
  })]);
}
function zoomInRightOnEnterAnimation(options) {
  return trigger(options && options.anchor || "zoomInRightOnEnter", [transition(":enter", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(zoomInRight(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$12
    }
  })]);
}
var zoomInUp = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  visibility: "visible",
  opacity: 0,
  transform: "scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",
  easing: "ease",
  offset: 0
}), style({
  opacity: 1,
  transform: "scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",
  easing: "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
  offset: 0.6
}), style({
  opacity: 1,
  transform: "scale3d(1, 1, 1) translate3d(0, 0, 0)",
  easing: "cubic-bezier(0.175, 0.885, 0.32, 1)",
  offset: 1
})]))]);
var DEFAULT_DURATION$13 = 1e3;
function zoomInUpAnimation(options) {
  return trigger(options && options.anchor || "zoomInUp", [transition("0 => 1", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(zoomInUp(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$13
    }
  })]);
}
function zoomInUpOnEnterAnimation(options) {
  return trigger(options && options.anchor || "zoomInUpOnEnter", [transition(":enter", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(zoomInUp(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$13
    }
  })]);
}
var zoomIn = () => animation(group([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  opacity: 0,
  easing: "ease",
  offset: 0
}), style({
  opacity: 1,
  easing: "ease",
  offset: 0.5
}), style({
  opacity: 1,
  easing: "ease",
  offset: 1
})])), animate("{{duration}}ms {{delay}}ms", keyframes([style({
  visibility: "visible",
  transform: "scale3d(0.3, 0.3, 0.3)",
  easing: "ease",
  offset: 0
}), style({
  transform: "scale3d(1, 1, 1)",
  easing: "ease",
  offset: 1
})]))]));
var DEFAULT_DURATION$14 = 1e3;
function zoomInAnimation(options) {
  return trigger(options && options.anchor || "zoomIn", [transition("0 => 1", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(zoomIn(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$14
    }
  })]);
}
function zoomInOnEnterAnimation(options) {
  return trigger(options && options.anchor || "zoomInOnEnter", [transition(":enter", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(zoomIn(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$14
    }
  })]);
}
var zoomOutDown = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  "transform-origin": "center bottom",
  opacity: 1,
  transform: "scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",
  easing: "ease",
  offset: 0.4
}), style({
  "transform-origin": "center bottom",
  opacity: 0,
  transform: "scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",
  easing: "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
  offset: 1
})]))]);
var DEFAULT_DURATION$15 = 1e3;
function zoomOutDownAnimation(options) {
  return trigger(options && options.anchor || "zoomOutDown", [transition("0 => 1", [...useAnimationIncludingChildren(zoomOutDown(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$15
    }
  })]);
}
function zoomOutDownOnLeaveAnimation(options) {
  return trigger(options && options.anchor || "zoomOutDownOnLeave", [transition(":leave", [...useAnimationIncludingChildren(zoomOutDown(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$15
    }
  })]);
}
var zoomOutLeft = () => animation(group([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  opacity: 1,
  transform: "scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)",
  easing: "ease",
  offset: 0.4
}), style({
  opacity: 0,
  transform: "scale3d(0.1, 0.1, 0.1) translate3d(-2000px, 0, 0)",
  easing: "ease",
  offset: 1
})])), animate("{{duration}}ms {{delay}}ms", keyframes([style({
  "transform-origin": "center center",
  offset: 0
}), style({
  "transform-origin": "left center",
  offset: 0.4
})]))]));
var DEFAULT_DURATION$16 = 1e3;
function zoomOutLeftAnimation(options) {
  return trigger(options && options.anchor || "zoomOutLeft", [transition("0 => 1", [...useAnimationIncludingChildren(zoomOutLeft(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$16
    }
  })]);
}
function zoomOutLeftOnLeaveAnimation(options) {
  return trigger(options && options.anchor || "zoomOutLeftOnLeave", [transition(":leave", [...useAnimationIncludingChildren(zoomOutLeft(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$16
    }
  })]);
}
var zoomOutRight = () => animation(group([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  opacity: 1,
  transform: "scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)",
  easing: "ease",
  offset: 0.4
}), style({
  opacity: 0,
  transform: "scale3d(0.1, 0.1, 0.1) translate3d(2000px, 0, 0)",
  easing: "ease",
  offset: 1
})])), animate("{{duration}}ms {{delay}}ms", keyframes([style({
  "transform-origin": "center center",
  offset: 0
}), style({
  "transform-origin": "right center",
  offset: 0.4
})]))]));
var DEFAULT_DURATION$17 = 1e3;
function zoomOutRightAnimation(options) {
  return trigger(options && options.anchor || "zoomOutRight", [transition("0 => 1", [...useAnimationIncludingChildren(zoomOutRight(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$17
    }
  })]);
}
function zoomOutRightOnLeaveAnimation(options) {
  return trigger(options && options.anchor || "zoomOutRightOnLeave", [transition(":leave", [...useAnimationIncludingChildren(zoomOutRight(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$17
    }
  })]);
}
var zoomOutUp = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  "transform-origin": "center bottom",
  opacity: 1,
  transform: "scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",
  easing: "ease",
  offset: 0.4
}), style({
  "transform-origin": "center bottom",
  opacity: 0,
  transform: "scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",
  easing: "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
  offset: 1
})]))]);
var DEFAULT_DURATION$18 = 1e3;
function zoomOutUpAnimation(options) {
  return trigger(options && options.anchor || "zoomOutUp", [transition("0 => 1", [...useAnimationIncludingChildren(zoomOutUp(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$18
    }
  })]);
}
function zoomOutUpOnLeaveAnimation(options) {
  return trigger(options && options.anchor || "zoomOutUpOnLeave", [transition(":leave", [...useAnimationIncludingChildren(zoomOutUp(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$18
    }
  })]);
}
var zoomOut = () => animation(group([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  opacity: 1,
  transform: "scale3d(1, 1, 1)",
  easing: "ease",
  offset: 0
}), style({
  opacity: 0,
  transform: "scale3d(0.3, 0.3, 0.3)",
  easing: "ease",
  offset: 0.5
}), style({
  opacity: 0,
  easing: "ease",
  offset: 1
})])), animate("{{duration}}ms {{delay}}ms", keyframes([style({
  transform: "scale3d(1, 1, 1)",
  easing: "ease",
  offset: 0
}), style({
  transform: "scale3d(0.3, 0.3, 0.3)",
  easing: "ease",
  offset: 0.5
})]))]));
var DEFAULT_DURATION$19 = 1e3;
function zoomOutAnimation(options) {
  return trigger(options && options.anchor || "zoomOut", [transition("0 => 1", [...useAnimationIncludingChildren(zoomOut(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$19
    }
  })]);
}
function zoomOutOnLeaveAnimation(options) {
  return trigger(options && options.anchor || "zoomOutOnLeave", [transition(":leave", [...useAnimationIncludingChildren(zoomOut(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$19
    }
  })]);
}
var hinge = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  opacity: 1,
  "transform-origin": "top left",
  transform: "translate3d(0, 0, 0)",
  easing: "ease-in-out",
  offset: 0
}), style({
  opacity: 1,
  "transform-origin": "top left",
  transform: "rotate3d(0, 0, 1, 80deg)",
  easing: "ease-in-out",
  offset: 0.2
}), style({
  opacity: 1,
  "transform-origin": "top left",
  transform: "rotate3d(0, 0, 1, 60deg)",
  easing: "ease-in-out",
  offset: 0.4
}), style({
  opacity: 1,
  "transform-origin": "top left",
  transform: "rotate3d(0, 0, 1, 80deg)",
  easing: "ease-in-out",
  offset: 0.6
}), style({
  opacity: 1,
  "transform-origin": "top left",
  transform: "rotate3d(0, 0, 1, 60deg)",
  easing: "ease-in-out",
  offset: 0.8
}), style({
  opacity: 0,
  "transform-origin": "top left",
  transform: "translate3d(0, 700px, 0)",
  easing: "ease-in-out",
  offset: 1
})]))]);
var DEFAULT_DURATION$1a = 2e3;
function hingeAnimation(options) {
  return trigger(options && options.anchor || "hinge", [transition("0 => 1", [...useAnimationIncludingChildren(hinge(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$1a
    }
  })]);
}
function hingeOnLeaveAnimation(options) {
  return trigger(options && options.anchor || "hingeOnLeave", [transition(":leave", [...useAnimationIncludingChildren(hinge(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$1a
    }
  })]);
}
var jackInTheBox = () => animation(group([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  "transform-origin": "center bottom",
  transform: "scale(0.1) rotate(30deg)",
  easing: "ease",
  offset: 0
}), style({
  "transform-origin": "center bottom",
  transform: "rotate(-10deg)",
  easing: "ease",
  offset: 0.5
}), style({
  "transform-origin": "center bottom",
  transform: "rotate(3deg)",
  easing: "ease",
  offset: 0.7
}), style({
  "transform-origin": "center bottom",
  transform: "scale(1)",
  easing: "ease",
  offset: 1
})])), animate("{{duration}}ms {{delay}}ms", keyframes([style({
  visibility: "visible",
  opacity: 0,
  offset: 0
}), style({
  opacity: 1,
  offset: 1
})]))]));
var DEFAULT_DURATION$1b = 1e3;
function jackInTheBoxAnimation(options) {
  return trigger(options && options.anchor || "jackInTheBox", [transition("0 => 1", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(jackInTheBox(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$1b
    }
  })]);
}
function jackInTheBoxOnEnterAnimation(options) {
  return trigger(options && options.anchor || "jackInTheBoxOnEnter", [transition(":enter", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(jackInTheBox(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$1b
    }
  })]);
}
var rollIn = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  visibility: "visible",
  opacity: 0,
  transform: "translate3d({{translate}}, 0, 0) rotate3d(0, 0, 1, {{degrees}}deg)",
  easing: "ease",
  offset: 0
}), style({
  opacity: 1,
  transform: "translate3d(0, 0, 0) rotate3d(0, 0, 1, 0deg)",
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION$1c = 1e3;
function rollInAnimation(options) {
  return trigger(options && options.anchor || "rollIn", [transition("0 => 1", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(rollIn(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$1c,
      degrees: options && options.degrees || -120,
      translate: options && options.translate || "-100%"
    }
  })]);
}
function rollInOnEnterAnimation(options) {
  return trigger(options && options.anchor || "rollInOnEnter", [transition(":enter", [style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(rollIn(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$1c,
      degrees: options && options.degrees || -120,
      translate: options && options.translate || "-100%"
    }
  })]);
}
var rollOut = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  opacity: 1,
  transform: "translate3d(0, 0, 0) rotate3d(0, 0, 1, 0deg)",
  easing: "ease",
  offset: 0
}), style({
  opacity: 0,
  transform: "translate3d({{translate}}, 0, 0) rotate3d(0, 0, 1, {{degrees}}deg)",
  easing: "ease",
  offset: 1
})]))]);
var DEFAULT_DURATION$1d = 1e3;
function rollOutAnimation(options) {
  return trigger(options && options.anchor || "rollOut", [transition("0 => 1", [...useAnimationIncludingChildren(rollOut(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$1d,
      degrees: options && options.degrees || 120,
      translate: options && options.translate || "100%"
    }
  })]);
}
function rollOutOnLeaveAnimation(options) {
  return trigger(options && options.anchor || "rollOutOnLeave", [transition(":leave", [...useAnimationIncludingChildren(rollOut(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$1d,
      degrees: options && options.degrees || 120,
      translate: options && options.translate || "100%"
    }
  })]);
}
function animateChildrenOnLeaveAnimation(options) {
  return trigger(options && options.anchor || "animateChildrenOnLeave", [transition(":leave", [query("@*", animateChild(), {
    optional: true
  })])]);
}
function animateIncludingChildren(easing, options) {
  return [...options && options.animateChildren === "before" ? [query("@*", animateChild(), {
    optional: true
  })] : [], group([group([query("@*", animateChild(), {
    optional: true
  }), animate("{{duration}}ms {{delay}}ms " + easing)]), ...!options || !options.animateChildren || options.animateChildren === "together" ? [query("@*", animateChild(), {
    optional: true
  })] : []]), ...options && options.animateChildren === "after" ? [query("@*", animateChild(), {
    optional: true
  })] : []];
}
var DEFAULT_DURATION$1e = 200;
function collapseAnimation(options) {
  return trigger(options && options.anchor || "collapse", [state("1", style({
    height: "0",
    visibility: "hidden",
    overflow: "hidden"
  })), state("0", style({
    height: AUTO_STYLE,
    visibility: AUTO_STYLE,
    overflow: "hidden"
  })), transition("0 => 1", [...animateIncludingChildren("ease-in", options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$1e
    }
  }), transition("1 => 0", [...animateIncludingChildren("ease-out", options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$1e
    }
  })]);
}
function collapseHorizontallyAnimation(options) {
  return trigger(options && options.anchor || "collapseHorizontally", [state("1", style({
    width: "0",
    visibility: "hidden",
    overflow: "hidden"
  })), state("0", style({
    width: AUTO_STYLE,
    visibility: AUTO_STYLE,
    overflow: "hidden"
  })), transition("0 => 1", [...animateIncludingChildren("ease-in", options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$1e
    }
  }), transition("1 => 0", [...animateIncludingChildren("ease-out", options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$1e
    }
  })]);
}
var expand = () => animation(animate("{{duration}}ms {{delay}}ms", keyframes([style({
  height: "0",
  visibility: "hidden",
  overflow: "hidden",
  easing: "ease-out",
  offset: 0
}), style({
  height: AUTO_STYLE,
  visibility: AUTO_STYLE,
  overflow: "hidden",
  easing: "ease-out",
  offset: 1
})])));
var expandRight = () => animation(animate("{{duration}}ms {{delay}}ms", keyframes([style({
  width: "0",
  visibility: "hidden",
  overflow: "hidden",
  easing: "ease-out",
  offset: 0
}), style({
  width: AUTO_STYLE,
  visibility: AUTO_STYLE,
  overflow: "hidden",
  easing: "ease-out",
  offset: 1
})])));
var fadeInExpand = () => animation(animate("{{duration}}ms {{delay}}ms", keyframes([style({
  height: "0",
  opacity: 0,
  visibility: "hidden",
  overflow: "hidden",
  easing: "ease-out",
  offset: 0
}), style({
  height: AUTO_STYLE,
  opacity: AUTO_STYLE,
  visibility: AUTO_STYLE,
  overflow: "hidden",
  easing: "ease-out",
  offset: 1
})])));
var fadeInExpandRight = () => animation(animate("{{duration}}ms {{delay}}ms", keyframes([style({
  width: "0",
  opacity: 0,
  visibility: "hidden",
  overflow: "hidden",
  easing: "ease-out",
  offset: 0
}), style({
  width: AUTO_STYLE,
  opacity: AUTO_STYLE,
  visibility: AUTO_STYLE,
  overflow: "hidden",
  easing: "ease-out",
  offset: 1
})])));
var collapse = () => animation(animate("{{duration}}ms {{delay}}ms", keyframes([style({
  height: AUTO_STYLE,
  visibility: AUTO_STYLE,
  overflow: "hidden",
  easing: "ease-in",
  offset: 0
}), style({
  height: "0",
  visibility: "hidden",
  overflow: "hidden",
  easing: "ease-in",
  offset: 1
})])));
var collapseLeft = () => animation(animate("{{duration}}ms {{delay}}ms", keyframes([style({
  width: AUTO_STYLE,
  visibility: AUTO_STYLE,
  overflow: "hidden",
  easing: "ease-in",
  offset: 0
}), style({
  width: "0",
  visibility: "hidden",
  overflow: "hidden",
  easing: "ease-in",
  offset: 1
})])));
var fadeOutCollapse = () => animation(animate("{{duration}}ms {{delay}}ms", keyframes([style({
  height: AUTO_STYLE,
  opacity: AUTO_STYLE,
  visibility: AUTO_STYLE,
  overflow: "hidden",
  easing: "ease-in",
  offset: 0
}), style({
  height: "0",
  opacity: 0,
  visibility: "hidden",
  overflow: "hidden",
  easing: "ease-in",
  offset: 1
})])));
var fadeOutCollapseLeft = () => animation(animate("{{duration}}ms {{delay}}ms", keyframes([style({
  width: AUTO_STYLE,
  opacity: AUTO_STYLE,
  visibility: AUTO_STYLE,
  overflow: "hidden",
  easing: "ease-in",
  offset: 0
}), style({
  width: "0",
  opacity: 0,
  visibility: "hidden",
  overflow: "hidden",
  easing: "ease-in",
  offset: 1
})])));
function expandOnEnterAnimation(options) {
  return trigger(options && options.anchor || "expandOnEnter", [transition(":enter", animation([style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(expand(), options)]), {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$1e
    }
  })]);
}
function expandRightOnEnterAnimation(options) {
  return trigger(options && options.anchor || "expandRightOnEnter", [transition(":enter", animation([style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(expandRight(), options)]), {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$1e
    }
  })]);
}
function collapseOnLeaveAnimation(options) {
  return trigger(options && options.anchor || "collapseOnLeave", [transition(":leave", [...useAnimationIncludingChildren(collapse(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$1e
    }
  })]);
}
function collapseLeftOnLeaveAnimation(options) {
  return trigger(options && options.anchor || "collapseLeftOnLeave", [transition(":leave", [...useAnimationIncludingChildren(collapseLeft(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$1e
    }
  })]);
}
function fadeInExpandOnEnterAnimation(options) {
  return trigger(options && options.anchor || "fadeInExpandOnEnter", [transition(":enter", animation([style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(fadeInExpand(), options)]), {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$1e
    }
  })]);
}
function fadeInExpandRightOnEnterAnimation(options) {
  return trigger(options && options.anchor || "fadeInExpandRightOnEnter", [transition(":enter", animation([style({
    visibility: "hidden"
  }), ...useAnimationIncludingChildren(fadeInExpandRight(), options)]), {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$1e
    }
  })]);
}
function fadeOutCollapseOnLeaveAnimation(options) {
  return trigger(options && options.anchor || "fadeOutCollapseOnLeave", [transition(":leave", [...useAnimationIncludingChildren(fadeOutCollapse(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$1e
    }
  })]);
}
function fadeOutCollapseLeftOnLeaveAnimation(options) {
  return trigger(options && options.anchor || "fadeOutCollapseLeftOnLeave", [transition(":leave", [...useAnimationIncludingChildren(fadeOutCollapseLeft(), options)], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$1e
    }
  })]);
}
var hueRotate = () => animation([animate("{{duration}}ms {{delay}}ms", keyframes([style({
  filter: "hue-rotate(0deg)",
  offset: 0
}), style({
  filter: "hue-rotate(-360deg)",
  offset: 1
})]))]);
var DEFAULT_DURATION$1f = 3e3;
function hueRotateAnimation(options) {
  return trigger(options && options.anchor || "hueRotate", [transition("0 <=> 1", group([query("@*", animateChild(), {
    optional: true
  }), useAnimation(hueRotate())]), {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$1f
    }
  })]);
}
var DEFAULT_DURATION$1g = 200;
function rotateAnimation(options) {
  return trigger(options && options.anchor || "rotate", [state("0", style({
    transform: "rotate(0deg)"
  })), state("1", style({
    transform: "rotate({{degrees}}deg)"
  }), {
    params: {
      degrees: options && options.degrees || 180
    }
  }), transition("0 => 1", [...options && options.animateChildren === "before" ? [query("@*", animateChild(), {
    optional: true
  })] : [], group([group([query("@*", animateChild(), {
    optional: true
  }), animate("{{duration}}ms {{delay}}ms ease")]), ...!options || !options.animateChildren || options.animateChildren === "together" ? [query("@*", animateChild(), {
    optional: true
  })] : []]), ...options && options.animateChildren === "after" ? [query("@*", animateChild(), {
    optional: true
  })] : []], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$1g
    }
  }), transition("1 => 0", [...options && options.animateChildren === "before" ? [query("@*", animateChild(), {
    optional: true
  })] : [], group([group([query("@*", animateChild(), {
    optional: true
  }), animate("{{duration}}ms {{delay}}ms ease")]), ...!options || !options.animateChildren || options.animateChildren === "together" ? [query("@*", animateChild(), {
    optional: true
  })] : []]), ...options && options.animateChildren === "after" ? [query("@*", animateChild(), {
    optional: true
  })] : []], {
    params: {
      delay: options && options.delay || 0,
      duration: options && options.duration || DEFAULT_DURATION$1g
    }
  })]);
}
export {
  animateChildrenOnLeaveAnimation,
  bounceAnimation,
  bounceInAnimation,
  bounceInDownAnimation,
  bounceInDownOnEnterAnimation,
  bounceInLeftAnimation,
  bounceInLeftOnEnterAnimation,
  bounceInOnEnterAnimation,
  bounceInRightAnimation,
  bounceInRightOnEnterAnimation,
  bounceInUpAnimation,
  bounceInUpOnEnterAnimation,
  bounceOnEnterAnimation,
  bounceOutAnimation,
  bounceOutDownAnimation,
  bounceOutDownOnLeaveAnimation,
  bounceOutLeftAnimation,
  bounceOutLeftOnLeaveAnimation,
  bounceOutOnLeaveAnimation,
  bounceOutRightAnimation,
  bounceOutRightOnLeaveAnimation,
  bounceOutUpAnimation,
  bounceOutUpOnLeaveAnimation,
  collapseAnimation,
  collapseHorizontallyAnimation,
  collapseLeftOnLeaveAnimation,
  collapseOnLeaveAnimation,
  expandOnEnterAnimation,
  expandRightOnEnterAnimation,
  fadeInAnimation,
  fadeInDownAnimation,
  fadeInDownBigAnimation,
  fadeInDownBigOnEnterAnimation,
  fadeInDownOnEnterAnimation,
  fadeInExpandOnEnterAnimation,
  fadeInExpandRightOnEnterAnimation,
  fadeInLeftAnimation,
  fadeInLeftBigAnimation,
  fadeInLeftBigOnEnterAnimation,
  fadeInLeftOnEnterAnimation,
  fadeInOnEnterAnimation,
  fadeInRightAnimation,
  fadeInRightBigAnimation,
  fadeInRightBigOnEnterAnimation,
  fadeInRightOnEnterAnimation,
  fadeInUpAnimation,
  fadeInUpBigAnimation,
  fadeInUpBigOnEnterAnimation,
  fadeInUpOnEnterAnimation,
  fadeOutAnimation,
  fadeOutCollapseLeftOnLeaveAnimation,
  fadeOutCollapseOnLeaveAnimation,
  fadeOutDownAnimation,
  fadeOutDownBigAnimation,
  fadeOutDownBigOnLeaveAnimation,
  fadeOutDownOnLeaveAnimation,
  fadeOutLeftAnimation,
  fadeOutLeftBigAnimation,
  fadeOutLeftBigOnLeaveAnimation,
  fadeOutLeftOnLeaveAnimation,
  fadeOutOnLeaveAnimation,
  fadeOutRightAnimation,
  fadeOutRightBigAnimation,
  fadeOutRightBigOnLeaveAnimation,
  fadeOutRightOnLeaveAnimation,
  fadeOutUpAnimation,
  fadeOutUpBigAnimation,
  fadeOutUpBigOnLeaveAnimation,
  fadeOutUpOnLeaveAnimation,
  flashAnimation,
  flashOnEnterAnimation,
  flipAnimation,
  flipInXAnimation,
  flipInXOnEnterAnimation,
  flipInYAnimation,
  flipInYOnEnterAnimation,
  flipOnEnterAnimation,
  flipOutXAnimation,
  flipOutXOnLeaveAnimation,
  flipOutYAnimation,
  flipOutYOnLeaveAnimation,
  headShakeAnimation,
  headShakeOnEnterAnimation,
  heartBeatAnimation,
  heartBeatOnEnterAnimation,
  hingeAnimation,
  hingeOnLeaveAnimation,
  hueRotateAnimation,
  jackInTheBoxAnimation,
  jackInTheBoxOnEnterAnimation,
  jelloAnimation,
  jelloOnEnterAnimation,
  lightSpeedInAnimation,
  lightSpeedInOnEnterAnimation,
  lightSpeedOutAnimation,
  lightSpeedOutOnLeaveAnimation,
  pulseAnimation,
  pulseOnEnterAnimation,
  rollInAnimation,
  rollInOnEnterAnimation,
  rollOutAnimation,
  rollOutOnLeaveAnimation,
  rotateAnimation,
  rotateInAnimation,
  rotateInDownLeftAnimation,
  rotateInDownLeftOnEnterAnimation,
  rotateInDownRightAnimation,
  rotateInDownRightOnEnterAnimation,
  rotateInOnEnterAnimation,
  rotateInUpLeftAnimation,
  rotateInUpLeftOnEnterAnimation,
  rotateInUpRightAnimation,
  rotateInUpRightOnEnterAnimation,
  rotateOutAnimation,
  rotateOutDownLeftAnimation,
  rotateOutDownLeftOnLeaveAnimation,
  rotateOutDownRightAnimation,
  rotateOutDownRightOnLeaveAnimation,
  rotateOutOnLeaveAnimation,
  rotateOutUpLeftAnimation,
  rotateOutUpLeftOnLeaveAnimation,
  rotateOutUpRightAnimation,
  rotateOutUpRightOnLeaveAnimation,
  rubberBandAnimation,
  rubberBandOnEnterAnimation,
  shakeAnimation,
  shakeOnEnterAnimation,
  slideInDownAnimation,
  slideInDownOnEnterAnimation,
  slideInLeftAnimation,
  slideInLeftOnEnterAnimation,
  slideInRightAnimation,
  slideInRightOnEnterAnimation,
  slideInUpAnimation,
  slideInUpOnEnterAnimation,
  slideOutDownAnimation,
  slideOutDownOnLeaveAnimation,
  slideOutLeftAnimation,
  slideOutLeftOnLeaveAnimation,
  slideOutRightAnimation,
  slideOutRightOnLeaveAnimation,
  slideOutUpAnimation,
  slideOutUpOnLeaveAnimation,
  swingAnimation,
  swingOnEnterAnimation,
  tadaAnimation,
  tadaOnEnterAnimation,
  wobbleAnimation,
  wobbleOnEnterAnimation,
  zoomInAnimation,
  zoomInDownAnimation,
  zoomInDownOnEnterAnimation,
  zoomInLeftAnimation,
  zoomInLeftOnEnterAnimation,
  zoomInOnEnterAnimation,
  zoomInRightAnimation,
  zoomInRightOnEnterAnimation,
  zoomInUpAnimation,
  zoomInUpOnEnterAnimation,
  zoomOutAnimation,
  zoomOutDownAnimation,
  zoomOutDownOnLeaveAnimation,
  zoomOutLeftAnimation,
  zoomOutLeftOnLeaveAnimation,
  zoomOutOnLeaveAnimation,
  zoomOutRightAnimation,
  zoomOutRightOnLeaveAnimation,
  zoomOutUpAnimation,
  zoomOutUpOnLeaveAnimation
};
//# sourceMappingURL=angular-animations.js.map
