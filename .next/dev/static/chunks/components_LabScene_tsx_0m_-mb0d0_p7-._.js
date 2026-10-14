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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/OrbitControls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Text.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assembly$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/assembly-data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Silk({ children, position, size = 0.075, color = "#e4dbbc", rotation = [
    -Math.PI / 2,
    0,
    0
] }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
        position: position,
        rotation: rotation,
        fontSize: size,
        color: color,
        anchorX: "center",
        anchorY: "middle",
        outlineWidth: 0.0018,
        outlineColor: "#0b1111",
        renderOrder: 3,
        "material-depthTest": false,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/LabScene.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = Silk;
function Pin({ position, active, label, contact, side }) {
    const labelPosition = side === "left" ? [
        -0.19,
        0.27,
        0
    ] : side === "right" ? [
        0.19,
        0.27,
        0
    ] : side === "top" ? [
        0,
        0.27,
        -0.17
    ] : [
        0,
        0.27,
        0.17
    ];
    const verticalLabel = contact === "castellated-pad" && side === "bottom";
    const labelRotation = verticalLabel ? [
        -Math.PI / 2,
        0,
        Math.PI / 2
    ] : [
        -Math.PI / 2,
        0,
        0
    ];
    const labelSize = contact === "castellated-pad" ? 0.042 : 0.055;
    const labelColor = active ? "#ffe0a2" : "#f4ecd0";
    if (contact === "castellated-pad") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        position: position,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0.025,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.1,
                            0.025,
                            0.1
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: active ? "#f1bd51" : "#d3b45d",
                        metalness: 0.8,
                        roughness: 0.22
                    }, void 0, false, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 85,
                columnNumber: 9
            }, this),
            active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0.07,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            0.052,
                            16,
                            12
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 95,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#f1bd51",
                        emissive: "#d87b27",
                        emissiveIntensity: 1.55
                    }, void 0, false, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 96,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 94,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Silk, {
                position: labelPosition,
                size: labelSize,
                color: labelColor,
                rotation: labelRotation,
                children: label
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 103,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/LabScene.tsx",
        lineNumber: 84,
        columnNumber: 7
    }, this);
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
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: active ? "#dfaa45" : "#202020",
                        roughness: 0.55
                    }, void 0, false, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 115,
                columnNumber: 7
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
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#cdd4d4",
                        metalness: 0.9,
                        roughness: 0.18
                    }, void 0, false, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
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
                        lineNumber: 132,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#f1bd51",
                        emissive: "#d87b27",
                        emissiveIntensity: 1.55
                    }, void 0, false, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 131,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Silk, {
                position: labelPosition,
                size: labelSize,
                color: labelColor,
                children: label
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/LabScene.tsx",
        lineNumber: 114,
        columnNumber: 5
    }, this);
}
_c1 = Pin;
function Board({ component, activePins, children }) {
    const boardSize = component.threeSize;
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
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: component.boardColor,
                        roughness: 0.47,
                        metalness: 0.15
                    }, void 0, false, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 159,
                columnNumber: 7
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
                        lineNumber: 168,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: component.boardColor,
                        roughness: 0.6
                    }, void 0, false, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            children,
            component.pins.map((pin)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Pin, {
                    position: pin.local3d,
                    label: pin.label,
                    side: pin.side,
                    contact: pin.contact,
                    active: activePins.has(`${component.id}:${pin.id}`)
                }, pin.id, false, {
                    fileName: "[project]/components/LabScene.tsx",
                    lineNumber: 173,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/components/LabScene.tsx",
        lineNumber: 158,
        columnNumber: 5
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
                        lineNumber: 198,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#202426",
                        roughness: 0.38,
                        metalness: 0.26
                    }, void 0, false, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 197,
                columnNumber: 7
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
                lineNumber: 206,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/LabScene.tsx",
        lineNumber: 196,
        columnNumber: 5
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
                                    0.2,
                                    0.32
                                ]
                            }, void 0, false, {
                                fileName: "[project]/components/LabScene.tsx",
                                lineNumber: 229,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                color: "#bbc6c9",
                                metalness: 0.9,
                                roughness: 0.19
                            }, void 0, false, {
                                fileName: "[project]/components/LabScene.tsx",
                                lineNumber: 230,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 228,
                        columnNumber: 9
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
                                lineNumber: 237,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                color: "#171a1b"
                            }, void 0, false, {
                                fileName: "[project]/components/LabScene.tsx",
                                lineNumber: 238,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 236,
                        columnNumber: 9
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
                                lineNumber: 241,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                color: "#d8bd82",
                                metalness: 0.75
                            }, void 0, false, {
                                fileName: "[project]/components/LabScene.tsx",
                                lineNumber: 242,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 240,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 227,
                columnNumber: 7
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
                lineNumber: 245,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Chip, {
                position: [
                    -0.46,
                    0.1,
                    0.3
                ],
                size: [
                    0.13,
                    0.05,
                    0.13
                ]
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 250,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Chip, {
                position: [
                    0.44,
                    0.1,
                    0.3
                ],
                size: [
                    0.13,
                    0.05,
                    0.13
                ]
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 251,
                columnNumber: 7
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
                        lineNumber: 253,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#e8dfbe",
                        roughness: 0.62
                    }, void 0, false, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 254,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 252,
                columnNumber: 7
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
                lineNumber: 256,
                columnNumber: 7
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
                lineNumber: 259,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Silk, {
                position: [
                    0,
                    0.29,
                    -0.98
                ],
                size: 0.055,
                color: "#d7e5df",
                children: "USB-C · ENTRADA 5V"
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 262,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/LabScene.tsx",
        lineNumber: 226,
        columnNumber: 5
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
                points.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](Math.cos(a) * 0.12, 0.16 + t * 1.52, Math.sin(a) * 0.12));
            }
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CatmullRomCurve3"](points);
        }
    }["SpringAntenna.useMemo[curve]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        position: [
            0.69,
            0,
            -0.66
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
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
                    lineNumber: 288,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                    color: "#e2e8e7",
                    metalness: 0.93,
                    roughness: 0.16
                }, void 0, false, {
                    fileName: "[project]/components/LabScene.tsx",
                    lineNumber: 289,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/LabScene.tsx",
            lineNumber: 287,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/LabScene.tsx",
        lineNumber: 286,
        columnNumber: 5
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
                lineNumber: 308,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Chip, {
                position: [
                    0.42,
                    0.1,
                    -0.42
                ],
                size: [
                    0.26,
                    0.045,
                    0.13
                ]
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 313,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Chip, {
                position: [
                    -0.36,
                    0.1,
                    -0.5
                ],
                size: [
                    0.18,
                    0.05,
                    0.1
                ]
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 314,
                columnNumber: 7
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
                        lineNumber: 316,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#d9d2aa",
                        metalness: 0.66
                    }, void 0, false, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 317,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 315,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SpringAntenna, {}, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 319,
                columnNumber: 7
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
                lineNumber: 320,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/LabScene.tsx",
        lineNumber: 307,
        columnNumber: 5
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
                lineNumber: 340,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                color: "#171b1d",
                roughness: 0.62
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 341,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/LabScene.tsx",
        lineNumber: 339,
        columnNumber: 5
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
                            -0.26
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
                                        lineNumber: 358,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                        color: "#e3e3dc",
                                        roughness: 0.4
                                    }, void 0, false, {
                                        fileName: "[project]/components/LabScene.tsx",
                                        lineNumber: 359,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/LabScene.tsx",
                                lineNumber: 357,
                                columnNumber: 11
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
                                        lineNumber: 362,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                        color: "#1d2020"
                                    }, void 0, false, {
                                        fileName: "[project]/components/LabScene.tsx",
                                        lineNumber: 363,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/LabScene.tsx",
                                lineNumber: 361,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 356,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Chip, {
                        position: [
                            0.07,
                            0.125,
                            0.04
                        ],
                        size: [
                            0.38,
                            0.105,
                            0.38
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 366,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        position: [
                            0.55,
                            0.13,
                            -0.22
                        ],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                                args: [
                                    0.1,
                                    0.1,
                                    0.16,
                                    22
                                ]
                            }, void 0, false, {
                                fileName: "[project]/components/LabScene.tsx",
                                lineNumber: 368,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                color: "#1e2427",
                                metalness: 0.4
                            }, void 0, false, {
                                fileName: "[project]/components/LabScene.tsx",
                                lineNumber: 369,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 367,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Silk, {
                        position: [
                            -0.05,
                            0.095,
                            -0.33
                        ],
                        size: 0.064,
                        color: "#e1e7df",
                        children: "JSN-SR04T"
                    }, void 0, false, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 371,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 355,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SensorCable, {}, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 375,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                position: [
                    3.35,
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
                                lineNumber: 378,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                color: "#20272a",
                                roughness: 0.32,
                                metalness: 0.45
                            }, void 0, false, {
                                fileName: "[project]/components/LabScene.tsx",
                                lineNumber: 379,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 377,
                        columnNumber: 9
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
                                lineNumber: 386,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                color: "#738185",
                                metalness: 0.88,
                                roughness: 0.2
                            }, void 0, false, {
                                fileName: "[project]/components/LabScene.tsx",
                                lineNumber: 387,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 385,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 376,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/LabScene.tsx",
        lineNumber: 354,
        columnNumber: 5
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
                    0.1,
                    0.42
                ]
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 407,
                columnNumber: 7
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
                lineNumber: 408,
                columnNumber: 7
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
                lineNumber: 411,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/LabScene.tsx",
        lineNumber: 406,
        columnNumber: 5
    }, this);
}
_c9 = LevelModel;
function Wire({ from, to, via, color, selected, hovered, muted, lane, onSelect, onHover }) {
    _s2();
    const curve = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Wire.useMemo[curve]": ()=>{
            const a = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](...from);
            const b = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](...to);
            const lift = selected ? 1.15 : 0.56 + lane % 5 * 0.09;
            const shift = (lane % 4 - 1.5) * 0.12;
            const middle = via ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](...via).add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0.2, 0)) : null;
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CatmullRomCurve3"](middle ? [
                a,
                a.clone().add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](shift, lift, 0.1)),
                middle,
                b.clone().add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-shift, lift, -0.1)),
                b
            ] : [
                a,
                a.clone().add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](shift, lift, 0.1)),
                b.clone().add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-shift, lift, -0.1)),
                b
            ]);
        }
    }["Wire.useMemo[curve]"], [
        from,
        to,
        via,
        selected,
        lane
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
        castShadow: true,
        onClick: (event)=>{
            event.stopPropagation();
            onSelect();
        },
        onPointerOver: (event)=>{
            event.stopPropagation();
            onHover(true);
        },
        onPointerOut: ()=>onHover(false),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tubeGeometry", {
                args: [
                    curve,
                    64,
                    selected || hovered ? 0.046 : 0.034,
                    9,
                    false
                ]
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 479,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                color: color,
                transparent: true,
                opacity: muted ? 0.16 : 1,
                emissive: selected || hovered ? color : "#000000",
                emissiveIntensity: selected || hovered ? 0.42 : 0,
                roughness: 0.37,
                metalness: 0.16
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 482,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/LabScene.tsx",
        lineNumber: 467,
        columnNumber: 5
    }, this);
}
_s2(Wire, "N6iySpP440gGdCyLu5MMP79ZPiE=");
_c10 = Wire;
function Junction({ position, color, label }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        position: position,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                        args: [
                            0.1,
                            0.1,
                            0.09,
                            18
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 507,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: color,
                        metalness: 0.42,
                        roughness: 0.28
                    }, void 0, false, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 508,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 506,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0.065,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                        args: [
                            0.046,
                            0.046,
                            0.025,
                            16
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 511,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#f0d17a",
                        metalness: 0.82,
                        roughness: 0.18
                    }, void 0, false, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 512,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 510,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Silk, {
                position: [
                    0,
                    0.13,
                    0
                ],
                size: 0.05,
                color: "#fff1bf",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 518,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/LabScene.tsx",
        lineNumber: 505,
        columnNumber: 5
    }, this);
}
_c11 = Junction;
function Room({ selectedConnectionId, hoveredConnectionId, isolate, onSelectConnection, onHoverConnection }) {
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
                    "#101416"
                ]
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 559,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fog", {
                attach: "fog",
                args: [
                    "#101416",
                    9,
                    22
                ]
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 560,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                intensity: 0.72
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 561,
                columnNumber: 7
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
                lineNumber: 562,
                columnNumber: 7
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
                lineNumber: 568,
                columnNumber: 7
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
                lineNumber: 569,
                columnNumber: 7
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
                        lineNumber: 575,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#252b2c",
                        roughness: 0.84
                    }, void 0, false, {
                        fileName: "[project]/components/LabScene.tsx",
                        lineNumber: 576,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 570,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("gridHelper", {
                args: [
                    12,
                    24,
                    "#3b4544",
                    "#293130"
                ],
                position: [
                    0,
                    -0.17,
                    0
                ]
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 578,
                columnNumber: 7
            }, this),
            renderComponent("esp32") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Esp32Model, {
                component: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assembly$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["componentById"])("esp32"),
                activePins: activePins
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 583,
                columnNumber: 9
            }, this),
            renderComponent("lora") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LoraModel, {
                component: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assembly$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["componentById"])("lora"),
                activePins: activePins
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 589,
                columnNumber: 9
            }, this),
            renderComponent("sensor") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SensorModel, {
                component: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assembly$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["componentById"])("sensor"),
                activePins: activePins
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 592,
                columnNumber: 9
            }, this),
            renderComponent("level") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LevelModel, {
                component: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assembly$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["componentById"])("level"),
                activePins: activePins
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 598,
                columnNumber: 9
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assembly$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["powerJunctions"].map((junction)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Junction, {
                    position: junction.worldPosition,
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assembly$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["connections"].find((entry)=>entry.category === junction.category)?.color ?? "#d9d9d9",
                    label: junction.label
                }, junction.id, false, {
                    fileName: "[project]/components/LabScene.tsx",
                    lineNumber: 604,
                    columnNumber: 9
                }, this)),
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assembly$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["connections"].map((connection, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Wire, {
                    from: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assembly$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["worldPinPosition"])(connection.source.componentId, connection.source.pinId),
                    to: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assembly$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["worldPinPosition"])(connection.target.componentId, connection.target.pinId),
                    via: connection.junctionId ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assembly$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["powerJunctions"].find((junction)=>junction.id === connection.junctionId)?.worldPosition : undefined,
                    color: connection.color,
                    selected: selectedConnectionId === connection.id,
                    hovered: hoveredConnectionId === connection.id,
                    muted: Boolean(selectedConnection && selectedConnectionId !== connection.id && hoveredConnectionId !== connection.id),
                    lane: index,
                    onSelect: ()=>onSelectConnection(connection.id),
                    onHover: (active)=>onHoverConnection(active ? connection.id : null)
                }, connection.id, false, {
                    fileName: "[project]/components/LabScene.tsx",
                    lineNumber: 615,
                    columnNumber: 9
                }, this)),
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
                lineNumber: 645,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Environment"], {
                preset: "city"
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 652,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/LabScene.tsx",
        lineNumber: 558,
        columnNumber: 5
    }, this);
}
_c12 = Room;
function LabScene({ selectedConnectionId, hoveredConnectionId, isolate, onSelectConnection, onHoverConnection }) {
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
                    hoveredConnectionId: hoveredConnectionId,
                    isolate: isolate,
                    onSelectConnection: onSelectConnection,
                    onHoverConnection: onHoverConnection
                }, void 0, false, {
                    fileName: "[project]/components/LabScene.tsx",
                    lineNumber: 677,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/LabScene.tsx",
                lineNumber: 676,
                columnNumber: 7
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
                lineNumber: 685,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/LabScene.tsx",
        lineNumber: 671,
        columnNumber: 5
    }, this);
}
_c13 = LabScene;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13;
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
__turbopack_context__.k.register(_c11, "Junction");
__turbopack_context__.k.register(_c12, "Room");
__turbopack_context__.k.register(_c13, "LabScene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/LabScene.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/components/LabScene.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_LabScene_tsx_0m_-mb0d0_p7-._.js.map