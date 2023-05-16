const fs = require('fs');

let res = '';

function add_macro(name, binding) {
    res += `macro_${name}: macro_${name}{\n`;
    res += `compatible = "zmk,behavior-macro";\n`;
    res += `label = "macro_${name}";\n`;
    res += `#binding-cells = <0>;\n`;
    res += `bindings = <${binding}>;\n`;
    res += `};\n`;
};

function add_kp_macro(key) {
    add_macro(key.toLowerCase(), `&kp ${key}`);
}

function add_shift_macro(key) {
    add_macro(`shift_${key.toLowerCase()}`, `&kp LS(${key})`);
}


const keys = [];

// Loop through letters
for (i = 65; i <= 90; i++) {
    keys.push(String.fromCharCode(i));
}

for (i = 0; i < 10; i++) {
    keys.push('N' + i);
}

keys.push('SQT');
keys.push('LBKT');
keys.push('RBKT');
keys.push('EQUAL');
keys.push('COMMA');
keys.push('DOT');
keys.push('BSLH');
keys.push('FSLH');

keys.push('SEMI');

keys.push('DOLLAR');
keys.push('GRAVE');
keys.push('SEMI');
keys.push('HASH');
keys.push('MINUS');
keys.push('PLUS');
keys.push('UNDERSCORE');
keys.push('COLON');
keys.push('QUESTION');
keys.push('LESS_THAN');
keys.push('GREATER_THAN');
keys.push('FSLH');
keys.push('CARET');

res += `
macro_quotes: macro_quotes{
compatible = "zmk,behavior-macro";
label = "macro_quotes";
#binding-cells = <0>;
bindings = <&kp SQT>, <&kp SQT>, <&kp LEFT>;
};
macro_dquotes: macro_dquotes{
compatible = "zmk,behavior-macro";
label = "macro_dquotes";
#binding-cells = <0>;
bindings = <&kp DQT>, <&kp DQT>, <&kp LEFT>;
};
macro_braces: macro_braces{
compatible = "zmk,behavior-macro";
label = "macro_braces";
#binding-cells = <0>;
bindings = <&kp LBRC>, <&kp RBRC>, <&kp LEFT>;
};
macro_parens: macro_parens{
compatible = "zmk,behavior-macro";
label = "macro_parens";
#binding-cells = <0>;
bindings = <&kp LPAR>, <&kp RPAR>, <&kp LEFT>;
};
macro_brackets: macro_brackets{
compatible = "zmk,behavior-macro";
label = "macro_brackets";
#binding-cells = <0>;
bindings = <&kp LBKT>, <&kp RBKT>, <&kp LEFT>;
};
macro_kinesis: macro_kinesis{
compatible = "zmk,behavior-macro";
label = "macro_kinesis";
#binding-cells = <0>;
bindings = <&kp LS(K)>, <&kp I>, <&kp N>, <&kp E>, <&kp S>, <&kp I>, <&kp S>;
};
macro_ctrl_f11: macro_ctrl_f11{
compatible = "zmk,behavior-macro";
label = "macro_ctrl_f11";
#binding-cells = <0>;
bindings = <&kp LC(F11)>;
};
macro_zmk: macro_zmk{
label = "macro_zmk";
compatible = "zmk,behavior-macro";
#binding-cells = <0>;
bindings = <&macro_press &kp LSHFT> , <&macro_tap &kp Z &kp M &kp K> , <&macro_release &kp LSHFT> ;
};
macro_grave_lshft: macro_grave_lshft{
label = "macro_grave_lshft";
compatible = "zmk,behavior-macro";
#binding-cells = <0>;
bindings = <&macro_release &kp LSHFT> , <&macro_tap &kp GRAVE> , <&macro_press &kp LSHFT> ;
};
macro_grave_rshft: macro_grave_rshft{
label = "macro_grave_rshft";
compatible = "zmk,behavior-macro";
#binding-cells = <0>;
bindings = <&macro_release &kp RSHFT> , <&macro_tap &kp GRAVE> , <&macro_press &kp RSHFT> ;
};
macro_zmk_rel: macro_zmk_rel{
label = "macro_zmk_rel";
compatible = "zmk,behavior-macro";
#binding-cells = <0>;
bindings = <&macro_release &kp LSHFT> , <&macro_tap &kp Z &kp M &kp K> , <&macro_press &kp LSHFT> ;
};
macro_zmk_rel_only: macro_zmk_rel_only{
label = "macro_zmk_rel_only";
compatible = "zmk,behavior-macro";
#binding-cells = <0>;
bindings = <&macro_release &kp LSHFT> , <&macro_tap &kp Z &kp M &kp K> ;
};
macro_lctrl_mo_1: macro_lctrl_mo_1{
label = "macro_lctrl_mo_1";
compatible = "zmk,behavior-macro";
#binding-cells = <0>;
wait-ms = <0>;
bindings
    = <&macro_press &mo 1 &kp LCTRL>
    , <&macro_pause_for_release>
    , <&macro_release &mo 1 &kp LCTRL>;
};
macro_rctrl_mo_1: macro_rctrl_mo_1{
label = "macro_rctrl_mo_1";
compatible = "zmk,behavior-macro";
#binding-cells = <0>;
wait-ms = <0>;
bindings
    = <&macro_press &mo 1 &kp RCTRL>
    , <&macro_pause_for_release>
    , <&macro_release &mo 1 &kp RCTRL>;
};
macro_lalt_mo_1: macro_lalt_mo_1{
label = "macro_lalt_mo_1";
compatible = "zmk,behavior-macro";
#binding-cells = <0>;
wait-ms = <0>;
bindings
    = <&macro_press &mo 1 &kp LALT>
    , <&macro_pause_for_release>
    , <&macro_release &mo 1 &kp LALT>;
};
macro_ralt_mo_1: macro_ralt_mo_1{
label = "macro_ralt_mo_1";
compatible = "zmk,behavior-macro";
#binding-cells = <0>;
wait-ms = <0>;
bindings
    = <&macro_press &mo 1 &kp RALT>
    , <&macro_pause_for_release>
    , <&macro_release &mo 1 &kp RALT>;
};
macro_lgui_mo_1: macro_lgui_mo_1{
label = "macro_lgui_mo_1";
compatible = "zmk,behavior-macro";
#binding-cells = <0>;
wait-ms = <0>;
bindings
    = <&macro_press &mo 1 &kp LGUI>
    , <&macro_pause_for_release>
    , <&macro_release &mo 1 &kp LGUI>;
};
macro_rgui_mo_1: macro_rgui_mo_1{
label = "macro_rgui_mo_1";
compatible = "zmk,behavior-macro";
#binding-cells = <0>;
wait-ms = <0>;
bindings
    = <&macro_press &mo 1 &kp RGUI>
    , <&macro_pause_for_release>
    , <&macro_release &mo 1 &kp RGUI>;
};
macro_lshift_mo_6: macro_lshift_mo_6{
label = "macro_lshift_mo_6";
compatible = "zmk,behavior-macro";
#binding-cells = <0>;
wait-ms = <0>;
bindings
    = <&macro_press &mo 6 &kp LSHIFT>
    , <&macro_pause_for_release>
    , <&macro_release &mo 6 &kp LSHIFT>;
};
macro_rshift_mo_7: macro_rshift_mo_7{
label = "macro_rshift_mo_7";
compatible = "zmk,behavior-macro";
#binding-cells = <0>;
wait-ms = <0>;
bindings
    = <&macro_press &mo 7 &kp RSHIFT>
    , <&macro_pause_for_release>
    , <&macro_release &mo 7 &kp RSHIFT>;
};
macro_o_dqt: macro_o_dqt{
label = "macro_o_dqt";
compatible = "zmk,behavior-macro";
#binding-cells = <0>;
wait-ms = <40>;
tap-ms = <40>;
bindings
    = <&macro_tap &kp F3 &kp DQT &kp O>
};
`;

keys.forEach(key => {
    add_kp_macro(key);
    add_shift_macro(key);
});


fs.writeFileSync('config/macros.dtsi', res);
