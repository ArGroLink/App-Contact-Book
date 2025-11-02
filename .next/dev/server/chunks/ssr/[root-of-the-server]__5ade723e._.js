module.exports = [
"[externals]/@reduxjs/toolkit [external] (@reduxjs/toolkit, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@reduxjs/toolkit", () => require("@reduxjs/toolkit"));

module.exports = mod;
}),
"[project]/src/pages/_app.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "makeStore",
    ()=>makeStore
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@reduxjs/toolkit [external] (@reduxjs/toolkit, cjs)");
(()=>{
    const e = new Error("Cannot find module './reducer'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
// Функция для загрузки состояния из LocalStorage (только на клиенте)
const loadState = ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        return {
            contactList: []
        };
    }
    //TURBOPACK unreachable
    ;
};
const makeStore = ()=>{
    const store = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__cjs$29$__["configureStore"])({
        reducer: {
            contacts: contactReducer
        },
        preloadedState: {
            contacts: loadState()
        }
    });
    // Сохраняем в localStorage при изменениях
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return store;
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5ade723e._.js.map