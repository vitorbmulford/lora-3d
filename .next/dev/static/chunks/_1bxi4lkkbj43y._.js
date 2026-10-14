(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/LabScene.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LabScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$ContactShadows$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/ContactShadows.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Environment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/web/Html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/OrbitControls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Text.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assembly$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/assembly-data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function Silk({ children, position, size = 0.075, color = '#e4dbbc' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
        position: position,
        rotation: [
            -Math.PI / 2,
            0,
            0
        ],
        fontSize: size,
        color: color,
        anchorX: "center",
        anchorY: "middle",
        outlineWidth: 0.001,
        outlineColor: "#0b1111",
        children: children
    }, void 0, false, {
        fileName: "[project]/components/LabScene.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Silk;
function Pin({ position, active, label }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        position: position,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0.04,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.13,
                            0.045,
                            0.13
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 17,
                        columnNumber: 35
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: active ? '#dfaa45' : '#202020',
                        roughness: 0.55
                    }, void 0, false, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 17,
                        columnNumber: 77
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 17,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0.12,
                    0
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.045,
                            0.17,
                            0.045
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 18,
                        columnNumber: 46
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#cdd4d4",
                        metalness: 0.9,
                        roughness: 0.18
                    }, void 0, false, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 18,
                        columnNumber: 89
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 18,
                columnNumber: 5
            }, this),
            active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        position: [
                            0,
                            0.215,
                            0
                        ],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                                args: [
                                    0.056,
                                    16,
                                    12
                                ]
                            }, void 0, false, {
                                fileName: "[project]/components/LabScene.tsx",
                                lineNumber: 19,
                                columnNumber: 49
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                color: "#f1bd51",
                                emissive: "#d87b27",
                                emissiveIntensity: 1.55
                            }, void 0, false, {
                                fileName: "[project]/components/LabScene.tsx",
                                lineNumber: 19,
                                columnNumber: 90
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 19,
                        columnNumber: 18
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Silk, {
                        position: [
                            0,
                            0.26,
                            0
                        ],
                        size: 0.055,
                        color: "#ffe0a2",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 19,
                        columnNumber: 181
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 19,
                columnNumber: 16
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/LabScene.tsx",
        lineNumber: 16,
        columnNumber: 10
    }, this);
}
_c1 = Pin;
function Board({ component, activePins, children }) {
    const boardSize = component.id === 'esp32' ? [
        1.55,
        1.9
    ] : component.id === 'lora' ? [
        1.46,
        2.04
    ] : component.id === 'sensor' ? [
        1.38,
        2.08
    ] : [
        1.42,
        1.14
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        position: component.worldPosition,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                castShadow: true,
                receiveShadow: true,
                position: [
                    0,
                    0.025,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            boardSize[0],
                            0.055,
                            boardSize[1]
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 26,
                        columnNumber: 61
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: component.boardColor,
                        roughness: 0.47,
                        metalness: 0.15
                    }, void 0, false, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 26,
                        columnNumber: 119
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 26,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0.058,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            boardSize[0] - 0.04,
                            0.01,
                            boardSize[1] - 0.04
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 27,
                        columnNumber: 36
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: component.boardColor,
                        roughness: 0.6
                    }, void 0, false, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 27,
                        columnNumber: 107
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 27,
                columnNumber: 5
            }, this),
            children,
            component.pins.map((pin)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Pin, {
                    position: pin.local3d,
                    label: pin.label,
                    active: activePins.has(`${component.id}:${pin.id}`)
                }, pin.id, false, {
                    fileName: "[project]/components/LabScene.tsx",
                    lineNumber: 29,
                    columnNumber: 34
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/components/LabScene.tsx",
        lineNumber: 25,
        columnNumber: 10
    }, this);
}
_c2 = Board;
function Chip({ position, size, label }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        position: position,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: size
                    }, void 0, false, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 34,
                        columnNumber: 54
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#202426",
                        roughness: 0.38,
                        metalness: 0.26
                    }, void 0, false, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 34,
                        columnNumber: 81
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 34,
                columnNumber: 37
            }, this),
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Silk, {
                position: [
                    0,
                    size[1] / 2 + 0.005,
                    0
                ],
                size: 0.055,
                color: "#87918f",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 34,
                columnNumber: 172
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/LabScene.tsx",
        lineNumber: 34,
        columnNumber: 10
    }, this);
}
_c3 = Chip;
function Esp32Model({ component, activePins }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Board, {
        component: component,
        activePins: activePins,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                position: [
                    0,
                    0.12,
                    -0.78
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        castShadow: true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                                args: [
                                    0.58,
                                    0.20,
                                    0.32
                                ]
                            }, void 0, false, {
                                fileName: "[project]/components/LabScene.tsx",
                                lineNumber: 39,
                                columnNumber: 57
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                color: "#bbc6c9",
                                metalness: 0.9,
                                roughness: 0.19
                            }, void 0, false, {
                                fileName: "[project]/components/LabScene.tsx",
                                lineNumber: 39,
                                columnNumber: 98
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 39,
                        columnNumber: 40
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        position: [
                            0,
                            0,
                            -0.165
                        ],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                                args: [
                                    0.43,
                                    0.1,
                                    0.016
                                ]
                            }, void 0, false, {
                                fileName: "[project]/components/LabScene.tsx",
                                lineNumber: 39,
                                columnNumber: 210
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                color: "#171a1b"
                            }, void 0, false, {
                                fileName: "[project]/components/LabScene.tsx",
                                lineNumber: 39,
                                columnNumber: 251
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 39,
                        columnNumber: 178
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        position: [
                            0,
                            0.006,
                            -0.177
                        ],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                                args: [
                                    0.22,
                                    0.022,
                                    0.014
                                ]
                            }, void 0, false, {
                                fileName: "[project]/components/LabScene.tsx",
                                lineNumber: 39,
                                columnNumber: 334
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                color: "#d8bd82",
                                metalness: 0.75
                            }, void 0, false, {
                                fileName: "[project]/components/LabScene.tsx",
                                lineNumber: 39,
                                columnNumber: 377
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 39,
                        columnNumber: 298
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 39,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Chip, {
                position: [
                    0,
                    0.13,
                    -0.14
                ],
                size: [
                    0.55,
                    0.12,
                    0.55
                ],
                label: "ESP32"
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 40,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Chip, {
                position: [
                    -0.46,
                    0.10,
                    0.30
                ],
                size: [
                    0.13,
                    0.05,
                    0.13
                ]
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 40,
                columnNumber: 81
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Chip, {
                position: [
                    0.44,
                    0.10,
                    0.30
                ],
                size: [
                    0.13,
                    0.05,
                    0.13
                ]
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 40,
                columnNumber: 146
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0.08,
                    0.77
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.83,
                            0.026,
                            0.22
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 41,
                        columnNumber: 38
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#e8dfbe",
                        roughness: 0.62
                    }, void 0, false, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 41,
                        columnNumber: 80
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 41,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Silk, {
                position: [
                    0,
                    0.1,
                    0.73
                ],
                size: 0.09,
                children: "ESP32-C3"
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 41,
                columnNumber: 144
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Silk, {
                position: [
                    0,
                    0.1,
                    0.57
                ],
                size: 0.06,
                color: "#91a9a3",
                children: "SUPER MINI"
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 41,
                columnNumber: 203
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/LabScene.tsx",
        lineNumber: 38,
        columnNumber: 10
    }, this);
}
_c4 = Esp32Model;
function SpringAntenna() {
    _s();
    const curve = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SpringAntenna.useMemo[curve]": ()=>{
            const points = [];
            for(let index = 0; index < 96; index += 1){
                const t = index / 95;
                const a = t * Math.PI * 15;
                points.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0.14 + Math.cos(a) * 0.12, 0.23 + t * 1.52, -0.18 + Math.sin(a) * 0.12));
            }
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CatmullRomCurve3"](points);
        }
    }["SpringAntenna.useMemo[curve]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
        castShadow: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tubeGeometry", {
                args: [
                    curve,
                    96,
                    0.022,
                    9,
                    false
                ]
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 47,
                columnNumber: 27
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                color: "#e2e8e7",
                metalness: 0.93,
                roughness: 0.16
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 47,
                columnNumber: 79
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/LabScene.tsx",
        lineNumber: 47,
        columnNumber: 10
    }, this);
}
_s(SpringAntenna, "N6iySpP440gGdCyLu5MMP79ZPiE=");
_c5 = SpringAntenna;
function LoraModel({ component, activePins }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Board, {
        component: component,
        activePins: activePins,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Chip, {
                position: [
                    0.05,
                    0.13,
                    0.08
                ],
                size: [
                    0.55,
                    0.11,
                    0.56
                ],
                label: "SX1278"
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 52,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Chip, {
                position: [
                    0.42,
                    0.10,
                    -0.42
                ],
                size: [
                    0.26,
                    0.045,
                    0.13
                ]
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 52,
                columnNumber: 84
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Chip, {
                position: [
                    -0.36,
                    0.10,
                    -0.50
                ],
                size: [
                    0.18,
                    0.05,
                    0.10
                ]
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 52,
                columnNumber: 150
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0.08,
                    -0.89
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                        args: [
                            0.11,
                            0.11,
                            0.06,
                            16
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 53,
                        columnNumber: 39
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#d9d2aa",
                        metalness: 0.66
                    }, void 0, false, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 53,
                        columnNumber: 89
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 53,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SpringAntenna, {}, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 53,
                columnNumber: 153
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Silk, {
                position: [
                    0,
                    0.09,
                    0.84
                ],
                size: 0.065,
                color: "#dce9e8",
                children: "Ra-02 · 433 MHz"
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 53,
                columnNumber: 170
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/LabScene.tsx",
        lineNumber: 51,
        columnNumber: 10
    }, this);
}
_c6 = LoraModel;
function SensorCable() {
    _s1();
    const curve = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SensorCable.useMemo[curve]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CatmullRomCurve3"]([
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1.92, 0.19, -0.55),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](2.25, 0.45, -0.64),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](2.62, 0.38, -0.82),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](3.05, 0.12, -0.58)
            ])
    }["SensorCable.useMemo[curve]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
        castShadow: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tubeGeometry", {
                args: [
                    curve,
                    48,
                    0.045,
                    10,
                    false
                ]
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 57,
                columnNumber: 265
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                color: "#171b1d",
                roughness: 0.62
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 57,
                columnNumber: 318
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/LabScene.tsx",
        lineNumber: 57,
        columnNumber: 248
    }, this);
}
_s1(SensorCable, "N6iySpP440gGdCyLu5MMP79ZPiE=");
_c7 = SensorCable;
function SensorModel({ component, activePins }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Board, {
                component: component,
                activePins: activePins,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                        position: [
                            -0.42,
                            0.12,
                            -0.65
                        ],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                                castShadow: true,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                                        args: [
                                            0.38,
                                            0.16,
                                            0.26
                                        ]
                                    }, void 0, false, {
                                        fileName: "[project]/components/LabScene.tsx",
                                        lineNumber: 60,
                                        columnNumber: 121
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                        color: "#e3e3dc",
                                        roughness: 0.4
                                    }, void 0, false, {
                                        fileName: "[project]/components/LabScene.tsx",
                                        lineNumber: 60,
                                        columnNumber: 162
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/LabScene.tsx",
                                lineNumber: 60,
                                columnNumber: 104
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                                position: [
                                    0,
                                    0.025,
                                    -0.14
                                ],
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                                        args: [
                                            0.23,
                                            0.08,
                                            0.035
                                        ]
                                    }, void 0, false, {
                                        fileName: "[project]/components/LabScene.tsx",
                                        lineNumber: 60,
                                        columnNumber: 260
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                        color: "#1d2020"
                                    }, void 0, false, {
                                        fileName: "[project]/components/LabScene.tsx",
                                        lineNumber: 60,
                                        columnNumber: 302
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/LabScene.tsx",
                                lineNumber: 60,
                                columnNumber: 225
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 60,
                        columnNumber: 65
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Chip, {
                        position: [
                            0.07,
                            0.125,
                            0.05
                        ],
                        size: [
                            0.38,
                            0.105,
                            0.38
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 60,
                        columnNumber: 357
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        position: [
                            0.35,
                            0.13,
                            -0.37
                        ],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                                args: [
                                    0.10,
                                    0.10,
                                    0.16,
                                    22
                                ]
                            }, void 0, false, {
                                fileName: "[project]/components/LabScene.tsx",
                                lineNumber: 60,
                                columnNumber: 460
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                color: "#1e2427",
                                metalness: 0.4
                            }, void 0, false, {
                                fileName: "[project]/components/LabScene.tsx",
                                lineNumber: 60,
                                columnNumber: 510
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 60,
                        columnNumber: 423
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Silk, {
                        position: [
                            -0.1,
                            0.095,
                            -0.32
                        ],
                        size: 0.064,
                        color: "#e1e7df",
                        children: "JSN-SR04T"
                    }, void 0, false, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 60,
                        columnNumber: 573
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 60,
                columnNumber: 12
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SensorCable, {}, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 60,
                columnNumber: 664
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                position: [
                    3.05,
                    0.1,
                    -0.58
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        castShadow: true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                                args: [
                                    0.31,
                                    0.33,
                                    0.32,
                                    48
                                ]
                            }, void 0, false, {
                                fileName: "[project]/components/LabScene.tsx",
                                lineNumber: 60,
                                columnNumber: 733
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                color: "#20272a",
                                roughness: 0.32,
                                metalness: 0.45
                            }, void 0, false, {
                                fileName: "[project]/components/LabScene.tsx",
                                lineNumber: 60,
                                columnNumber: 783
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 60,
                        columnNumber: 716
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        position: [
                            0,
                            0.18,
                            0
                        ],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                                args: [
                                    0.26,
                                    0.26,
                                    0.06,
                                    48
                                ]
                            }, void 0, false, {
                                fileName: "[project]/components/LabScene.tsx",
                                lineNumber: 60,
                                columnNumber: 894
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                color: "#738185",
                                metalness: 0.88,
                                roughness: 0.2
                            }, void 0, false, {
                                fileName: "[project]/components/LabScene.tsx",
                                lineNumber: 60,
                                columnNumber: 944
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 60,
                        columnNumber: 864
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 60,
                columnNumber: 679
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/LabScene.tsx",
        lineNumber: 60,
        columnNumber: 10
    }, this);
}
_c8 = SensorModel;
function LevelModel({ component, activePins }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Board, {
        component: component,
        activePins: activePins,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Chip, {
                position: [
                    0,
                    0.13,
                    0
                ],
                size: [
                    0.55,
                    0.10,
                    0.42
                ]
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 64,
                columnNumber: 63
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Silk, {
                position: [
                    0,
                    0.1,
                    -0.43
                ],
                size: 0.062,
                color: "#e6cf42",
                children: "LOGIC LEVEL"
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 64,
                columnNumber: 121
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Silk, {
                position: [
                    0,
                    0.1,
                    -0.32
                ],
                size: 0.05,
                color: "#e6cf42",
                children: "CONVERTER"
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 64,
                columnNumber: 201
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/LabScene.tsx",
        lineNumber: 64,
        columnNumber: 10
    }, this);
}
_c9 = LevelModel;
function Wire({ from, to, color, selected, visible }) {
    _s2();
    const curve = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Wire.useMemo[curve]": ()=>{
            const a = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](...from);
            const b = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](...to);
            const lift = selected ? 1.15 : 0.72;
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CatmullRomCurve3"]([
                a,
                a.clone().add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, lift, 0.10)),
                b.clone().add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, lift, -0.10)),
                b
            ]);
        }
    }["Wire.useMemo[curve]"], [
        from,
        to,
        selected
    ]);
    if (!visible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
        castShadow: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tubeGeometry", {
                args: [
                    curve,
                    64,
                    selected ? 0.041 : 0.027,
                    9,
                    false
                ]
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 70,
                columnNumber: 27
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                color: color,
                emissive: selected ? color : '#000000',
                emissiveIntensity: selected ? 0.35 : 0,
                roughness: 0.37,
                metalness: 0.16
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 70,
                columnNumber: 98
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/LabScene.tsx",
        lineNumber: 70,
        columnNumber: 10
    }, this);
}
_s2(Wire, "N6iySpP440gGdCyLu5MMP79ZPiE=");
_c10 = Wire;
function Room({ selectedConnectionId, isolate }) {
    const selectedConnection = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assembly$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["connections"].find((connection)=>connection.id === selectedConnectionId);
    const involved = selectedConnection ? new Set([
        selectedConnection.source.componentId,
        selectedConnection.target.componentId
    ]) : new Set(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assembly$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hardware"].map((component)=>component.id));
    const activePins = new Set(selectedConnection ? [
        `${selectedConnection.source.componentId}:${selectedConnection.source.pinId}`,
        `${selectedConnection.target.componentId}:${selectedConnection.target.pinId}`
    ] : []);
    const renderComponent = (componentId)=>!isolate || !selectedConnection || involved.has(componentId);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("color", {
                attach: "background",
                args: [
                    '#101416'
                ]
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 78,
                columnNumber: 12
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fog", {
                attach: "fog",
                args: [
                    '#101416',
                    9,
                    22
                ]
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 78,
                columnNumber: 60
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                intensity: 0.72
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 78,
                columnNumber: 106
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                position: [
                    3,
                    7,
                    4
                ],
                intensity: 2.8,
                castShadow: true,
                "shadow-mapSize": [
                    1024,
                    1024
                ]
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 78,
                columnNumber: 139
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                position: [
                    -4,
                    2,
                    -2
                ],
                intensity: 24,
                color: "#2eaa8e"
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 78,
                columnNumber: 237
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                position: [
                    4,
                    3,
                    2
                ],
                intensity: 20,
                color: "#d68e46"
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 78,
                columnNumber: 305
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                rotation: [
                    -Math.PI / 2,
                    0,
                    0
                ],
                position: [
                    0,
                    -0.18,
                    0
                ],
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                        args: [
                            30,
                            30
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 78,
                        columnNumber: 448
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#252b2c",
                        roughness: 0.84
                    }, void 0, false, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 78,
                        columnNumber: 481
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 78,
                columnNumber: 371
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("gridHelper", {
                args: [
                    12,
                    24,
                    '#3b4544',
                    '#293130'
                ],
                position: [
                    0,
                    -0.17,
                    0
                ]
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 78,
                columnNumber: 545
            }, this),
            renderComponent('esp32') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Esp32Model, {
                component: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assembly$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["componentById"])('esp32'),
                activePins: activePins
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 79,
                columnNumber: 34
            }, this),
            renderComponent('lora') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LoraModel, {
                component: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assembly$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["componentById"])('lora'),
                activePins: activePins
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 79,
                columnNumber: 136
            }, this),
            renderComponent('sensor') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SensorModel, {
                component: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assembly$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["componentById"])('sensor'),
                activePins: activePins
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 79,
                columnNumber: 238
            }, this),
            renderComponent('level') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LevelModel, {
                component: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assembly$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["componentById"])('level'),
                activePins: activePins
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 79,
                columnNumber: 343
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assembly$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["connections"].map((connection)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Wire, {
                    from: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assembly$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["worldPinPosition"])(connection.source.componentId, connection.source.pinId),
                    to: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assembly$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["worldPinPosition"])(connection.target.componentId, connection.target.pinId),
                    color: connection.color,
                    selected: selectedConnectionId === connection.id,
                    visible: !selectedConnection || selectedConnectionId === connection.id
                }, connection.id, false, {
                    fileName: "[project]/components/LabScene.tsx",
                    lineNumber: 80,
                    columnNumber: 38
                }, this)),
            selectedConnection && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                position: [
                    0,
                    1.8,
                    -0.1
                ],
                center: true,
                distanceFactor: 6,
                className: "part-tag",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: selectedConnection.signal
                    }, void 0, false, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 81,
                        columnNumber: 107
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 81,
                        columnNumber: 141
                    }, this),
                    selectedConnection.validationNote
                ]
            }, void 0, true, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 81,
                columnNumber: 28
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$ContactShadows$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactShadows"], {
                position: [
                    0,
                    -0.16,
                    0
                ],
                opacity: 0.38,
                scale: 10,
                blur: 2.4,
                far: 3
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 82,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Environment"], {
                preset: "city"
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 82,
                columnNumber: 93
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/LabScene.tsx",
        lineNumber: 78,
        columnNumber: 10
    }, this);
}
_c11 = Room;
function LabScene({ selectedConnectionId, isolate }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
        shadows: true,
        camera: {
            position: [
                0.2,
                5.35,
                8.7
            ],
            fov: 39
        },
        gl: {
            antialias: true,
            preserveDrawingBuffer: true
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: null,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Room, {
                    selectedConnectionId: selectedConnectionId,
                    isolate: isolate
                }, void 0, false, {
                    fileName: "[project]/components/LabScene.tsx",
                    lineNumber: 87,
                    columnNumber: 155
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 87,
                columnNumber: 129
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitControls"], {
                makeDefault: true,
                minDistance: 4.2,
                maxDistance: 14,
                maxPolarAngle: Math.PI * 0.48,
                target: [
                    0,
                    0,
                    0
                ],
                enableDamping: true,
                dampingFactor: 0.08
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 87,
                columnNumber: 236
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/LabScene.tsx",
        lineNumber: 87,
        columnNumber: 10
    }, this);
}
_c12 = LabScene;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;
__turbopack_context__.k.register(_c, "Silk");
__turbopack_context__.k.register(_c1, "Pin");
__turbopack_context__.k.register(_c2, "Board");
__turbopack_context__.k.register(_c3, "Chip");
__turbopack_context__.k.register(_c4, "Esp32Model");
__turbopack_context__.k.register(_c5, "SpringAntenna");
__turbopack_context__.k.register(_c6, "LoraModel");
__turbopack_context__.k.register(_c7, "SensorCable");
__turbopack_context__.k.register(_c8, "SensorModel");
__turbopack_context__.k.register(_c9, "LevelModel");
__turbopack_context__.k.register(_c10, "Wire");
__turbopack_context__.k.register(_c11, "Room");
__turbopack_context__.k.register(_c12, "LabScene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/LabScene.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/components/LabScene.tsx [app-client] (ecmascript)"));
}),
"[project]/lib/assembly-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "componentById",
    ()=>componentById,
    "connections",
    ()=>connections,
    "hardware",
    ()=>hardware,
    "pinById",
    ()=>pinById,
    "worldPinPosition",
    ()=>worldPinPosition
]);
const espOffsets = [
    -0.57,
    -0.41,
    -0.25,
    -0.09,
    0.09,
    0.25,
    0.41,
    0.57
];
const loraOffsets = [
    -0.63,
    -0.45,
    -0.27,
    -0.09,
    0.09,
    0.27,
    0.45,
    0.63
];
const levelOffsets = [
    -0.43,
    -0.21,
    0.01,
    0.23,
    0.45
];
function twoRows(component, offsets, leftX, rightX, labels) {
    return offsets.flatMap((z, index)=>[
            {
                id: `${component}-left-${index + 1}`,
                label: labels[index] ?? `L${index + 1}`,
                side: 'left',
                index,
                local3d: [
                    leftX,
                    0.25,
                    z
                ],
                description: 'Terminal físico; serigrafia e função elétrica ainda precisam ser confirmadas na placa real.',
                verification: 'pending'
            },
            {
                id: `${component}-right-${index + 1}`,
                label: labels[index] ?? `R${index + 1}`,
                side: 'right',
                index,
                local3d: [
                    rightX,
                    0.25,
                    z
                ],
                description: 'Terminal físico; serigrafia e função elétrica ainda precisam ser confirmadas na placa real.',
                verification: 'pending'
            }
        ]);
}
const hardware = [
    {
        id: 'esp32',
        name: 'ESP32-C3 Super Mini',
        shortName: 'ESP32-C3',
        modelStatus: 'parametric-reference',
        boardColor: '#192523',
        modelNote: 'Modelo paramétrico baseado na fotografia fornecida; dimensões e revisão precisam ser confirmadas por medição ou documentação do fabricante.',
        dimensionsMm: {
            width: 18,
            height: 22,
            thickness: 1.6,
            verified: false
        },
        worldPosition: [
            -2.35,
            0,
            -0.15
        ],
        map: {
            x: 70,
            y: 188,
            width: 196,
            height: 248
        },
        pins: twoRows('esp32', espOffsets, -0.83, 0.83, [
            'L1',
            'L2',
            'L3',
            'L4',
            'L5',
            'L6',
            'L7',
            'L8'
        ])
    },
    {
        id: 'lora',
        name: 'LoRa SX1278 / Ra-02 433 MHz',
        shortName: 'SX1278',
        modelStatus: 'parametric-reference',
        boardColor: '#19528d',
        modelNote: 'A fotografia sugere um módulo Ra-02/SX1278, mas o fabricante, a revisão e a serigrafia dos pads não foram confirmados.',
        dimensionsMm: {
            width: 16,
            height: 31,
            thickness: 1.6,
            verified: false
        },
        worldPosition: [
            -0.45,
            0,
            -0.12
        ],
        map: {
            x: 375,
            y: 138,
            width: 184,
            height: 286
        },
        pins: twoRows('lora', loraOffsets, -0.81, 0.81, [
            'P1',
            'P2',
            'P3',
            'P4',
            'P5',
            'P6',
            'P7',
            'P8'
        ])
    },
    {
        id: 'sensor',
        name: 'Controlador JSN-SR04T',
        shortName: 'JSN-SR04T',
        modelStatus: 'parametric-reference',
        boardColor: '#1d568f',
        modelNote: 'O módulo e o transdutor foram modelados como conjuntos separados a partir da fotografia. A ordem dos quatro sinais não está confirmada.',
        dimensionsMm: {
            width: 20,
            height: 45,
            thickness: 1.6,
            verified: false
        },
        worldPosition: [
            1.62,
            0,
            0.1
        ],
        map: {
            x: 705,
            y: 154,
            width: 178,
            height: 274
        },
        pins: [
            {
                id: 'sensor-sig-1',
                label: 'SIG 1',
                side: 'right',
                index: 0,
                local3d: [
                    0.78,
                    0.25,
                    0.48
                ],
                description: 'Terminal do conector de quatro vias. Serigrafia não confirmada.',
                verification: 'pending'
            },
            {
                id: 'sensor-sig-2',
                label: 'SIG 2',
                side: 'right',
                index: 1,
                local3d: [
                    0.78,
                    0.25,
                    0.22
                ],
                description: 'Terminal do conector de quatro vias. Serigrafia não confirmada.',
                verification: 'pending'
            },
            {
                id: 'sensor-sig-3',
                label: 'SIG 3',
                side: 'right',
                index: 2,
                local3d: [
                    0.78,
                    0.25,
                    -0.04
                ],
                description: 'Terminal do conector de quatro vias. Serigrafia não confirmada.',
                verification: 'pending'
            },
            {
                id: 'sensor-sig-4',
                label: 'SIG 4',
                side: 'right',
                index: 3,
                local3d: [
                    0.78,
                    0.25,
                    -0.30
                ],
                description: 'Terminal do conector de quatro vias. Serigrafia não confirmada.',
                verification: 'pending'
            }
        ]
    },
    {
        id: 'level',
        name: 'Conversor de nível lógico bidirecional',
        shortName: 'Level shifter',
        modelStatus: 'parametric-reference',
        boardColor: '#1b1b1b',
        modelNote: 'Modelo paramétrico da placa de quatro canais mostrada na foto. A orientação da serigrafia deve ser confirmada na peça real.',
        dimensionsMm: {
            width: 15,
            height: 13,
            thickness: 1.6,
            verified: false
        },
        worldPosition: [
            -0.05,
            0,
            1.7
        ],
        map: {
            x: 404,
            y: 515,
            width: 186,
            height: 148
        },
        pins: twoRows('level', levelOffsets, -0.57, 0.57, [
            'A',
            'B',
            'C',
            'D',
            'E'
        ])
    }
];
const connections = [
    {
        id: 'candidate-lora-power',
        source: {
            componentId: 'esp32',
            pinId: 'esp32-right-1'
        },
        target: {
            componentId: 'lora',
            pinId: 'lora-left-1'
        },
        signal: 'Alimentação LoRa — candidato',
        color: '#f0a84b',
        description: 'Candidato de alimentação entre o controlador e o rádio. Não montar antes de confirmar a serigrafia e o limite do regulador da ESP32-C3.',
        validation: 'pending',
        validationNote: 'A fotografia não permite confirmar os pads ou a capacidade de corrente.'
    },
    {
        id: 'candidate-lora-clock',
        source: {
            componentId: 'esp32',
            pinId: 'esp32-right-3'
        },
        target: {
            componentId: 'lora',
            pinId: 'lora-left-3'
        },
        signal: 'SPI clock — candidato',
        color: '#60a5fa',
        description: 'Candidato de sinal SPI. O GPIO da ESP32 e a ordem dos pads do rádio aguardam validação.',
        validation: 'pending',
        validationNote: 'Mapeamento SPI não confirmado para a revisão fotografada.'
    },
    {
        id: 'candidate-lora-select',
        source: {
            componentId: 'esp32',
            pinId: 'esp32-right-5'
        },
        target: {
            componentId: 'lora',
            pinId: 'lora-left-5'
        },
        signal: 'SPI select — candidato',
        color: '#8b7cf6',
        description: 'Candidato de seleção do rádio. Apresentado apenas para testar o fluxo visual de montagem.',
        validation: 'pending',
        validationNote: 'NSS e o GPIO correspondente ainda não foram confirmados.'
    },
    {
        id: 'candidate-sensor-echo',
        source: {
            componentId: 'sensor',
            pinId: 'sensor-sig-3'
        },
        target: {
            componentId: 'level',
            pinId: 'level-left-3'
        },
        signal: 'ECHO → conversão — candidato',
        color: '#e879a7',
        description: 'Candidato de passagem do retorno ECHO pelo conversor de nível. O nível de tensão e a ordem dos pinos estão pendentes.',
        validation: 'pending',
        validationNote: 'É necessário confirmar se o ECHO opera em 5 V e se o conversor é adequado ao sinal.'
    }
];
function componentById(id) {
    return hardware.find((component)=>component.id === id);
}
function pinById(componentId, pinId) {
    return componentById(componentId).pins.find((pin)=>pin.id === pinId);
}
function worldPinPosition(componentId, pinId) {
    const component = componentById(componentId);
    const pin = pinById(componentId, pinId);
    return [
        component.worldPosition[0] + pin.local3d[0],
        component.worldPosition[1] + pin.local3d[1],
        component.worldPosition[2] + pin.local3d[2]
    ];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1bxi4lkkbj43y._.js.map