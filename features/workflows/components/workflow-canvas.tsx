"use client"

import { useTheme } from "next-themes"
import { useCallback, useSyncExternalStore } from "react"

const emptySubscribe = () => () => {}
import {
  ReactFlow,
  Controls,
  Background,
  addEdge,
  Node,
  Edge,
  Connection,
  useNodesState,
  useEdgesState,
  ConnectionLineType,
  ColorMode,
} from "@xyflow/react"
import "@xyflow/react/dist/style.css"

const initialNodes: Node[] = [
  {
    id: "1",
    type: "input",
    data: { label: "Start" },
    position: { x: 250, y: 25 },
  },
  {
    id: "2",
    data: { label: "Do Something" },
    position: { x: 250, y: 150 },
  },
]

const initialEdges: Edge[] = [{ id: "e1-2", source: "1", target: "2" }]

export function WorkflowCanvas() {
  const { resolvedTheme } = useTheme()
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  )

  const [nodes, , setNodes] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  // const onNodesChange = useCallback(
  //   (changes: NodeChange[]) =>
  //     setNodes((nds) => applyNodeChanges(changes, nds)),
  //   [setNodes]
  // )

  // const onEdgesChange = useCallback(
  //   (changes: EdgeChange[]) =>
  //     setEdges((eds) => applyEdgeChanges(changes, eds)),
  //   [setEdges]
  // )

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  )

  return (
    <div className="size-full">
      <ReactFlow
        colorMode={mounted ? (resolvedTheme as ColorMode) : "light"}
        nodes={nodes}
        edges={edges}
        onNodesChange={setNodes}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        connectionLineType={ConnectionLineType.SmoothStep}
        connectionLineStyle={{ stroke: "var( -- border)" }}
        defaultEdgeOptions={{
          type: "smoothstep",
          style: { stroke: "var( -- border)" },
        }}
        style={
          {
            "--xy-background-color": "var(--background)",
            "--xy-edge-stroke-width": 2,
            "--xy-connectionline-stroke-width": 2,
          } as React.CSSProperties
        }
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  )
}
