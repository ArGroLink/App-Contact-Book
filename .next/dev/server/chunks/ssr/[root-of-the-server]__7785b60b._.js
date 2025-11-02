module.exports = [
"[externals]/@reduxjs/toolkit [external] (@reduxjs/toolkit, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@reduxjs/toolkit", () => require("@reduxjs/toolkit"));

module.exports = mod;
}),
"[externals]/uuid [external] (uuid, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("uuid");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/src/store/reducer.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "addContact",
    ()=>addContact,
    "default",
    ()=>__TURBOPACK__default__export__,
    "deleteContact",
    ()=>deleteContact,
    "editContact",
    ()=>editContact
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@reduxjs/toolkit [external] (@reduxjs/toolkit, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$uuid__$5b$external$5d$__$28$uuid$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/uuid [external] (uuid, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$uuid__$5b$external$5d$__$28$uuid$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$uuid__$5b$external$5d$__$28$uuid$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const initialState = {
    contactList: []
};
const contactSlice = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__cjs$29$__["createSlice"])({
    name: "contacts",
    initialState,
    reducers: {
        addContact: (state, action)=>{
            state.contactList.unshift({
                ...action.payload,
                id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$uuid__$5b$external$5d$__$28$uuid$2c$__esm_import$29$__["v4"])()
            });
        },
        editContact: (state, action)=>{
            const index = state.contactList.findIndex((c)=>c.id === action.payload.id);
            if (index !== -1) state.contactList[index] = action.payload;
        },
        deleteContact: (state, action)=>{
            state.contactList = state.contactList.filter((c)=>c.id !== action.payload);
        }
    }
});
const { addContact, editContact, deleteContact } = contactSlice.actions;
const __TURBOPACK__default__export__ = contactSlice.reducer;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/pages/_app.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "makeStore",
    ()=>makeStore
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@reduxjs/toolkit [external] (@reduxjs/toolkit, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$reducer$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/reducer.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$reducer$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$reducer$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
            contacts: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$reducer$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
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
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7785b60b._.js.map