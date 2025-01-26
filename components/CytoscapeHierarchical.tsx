"use client";
import React, { useEffect, useRef } from "react";
import cytoscape, { Core } from "cytoscape";
import dagre from "cytoscape-dagre";

interface TreeNode {
  id: string;
  label: string;
  children?: TreeNode[];
}

interface TreeGraphProps {
  data: TreeNode;
}

const TreeGraph: React.FC<TreeGraphProps> = ({ data }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cyRef = useRef<Core | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Convert tree data to cytoscape format
    const elements = convertTreeToCytoscape(data);

    cytoscape.use(dagre);

    const cy = cytoscape({
      container: containerRef.current,
      elements: elements,
      style: [
        {
          selector: "node",
          style: {
            "background-color": "#6366f1",
            label: "data(label)",
            color: "#000000",
            "text-valign": "center",
            "text-halign": "center",
            "font-size": "12px",
            width: "80px",
            height: "80px",
            "border-width": 2,
            "border-color": "#4338ca",
          },
        },
        {
          selector: "edge",
          style: {
            width: 2,
            "line-color": "#94a3b8",
            "target-arrow-color": "#94a3b8",
            "target-arrow-shape": "triangle",
            "curve-style": "bezier",
          },
        },
      ],
      layout: {
        name: "dagre",
      },
    });

    cyRef.current = cy;

    // Add zoom controls
    cy.on("tap", "node", (evt) => {
      const node = evt.target;
      cy.fit(node, 50);
    });

    return () => {
      if (cyRef.current) {
        cyRef.current.destroy();
      }
    };
  }, [data]);

  return (
    <div
      className="relative w-full h-[600px] border border-gray-200 rounded-lg overflow-hidden"
      style={{ contain: "strict" }}
    >
      <div ref={containerRef} className="absolute inset-0" />
    </div>
  );
};

// Helper function to convert tree data to cytoscape format
function convertTreeToCytoscape(node: TreeNode) {
  const elements: any[] = [];

  function traverse(currentNode: TreeNode, parent?: string) {
    // Add node
    elements.push({
      data: {
        id: currentNode.id,
        label: currentNode.label,
      },
    });

    // Add edge from parent if exists
    if (parent) {
      elements.push({
        data: {
          source: parent,
          target: currentNode.id,
        },
      });
    }

    // Process children
    if (currentNode.children) {
      currentNode.children.forEach((child) => traverse(child, currentNode.id));
    }
  }

  traverse(node);
  return elements;
}

export default TreeGraph;
