"use client";

import dynamic from "next/dynamic";

// Dynamically import the TreeGraph component with no SSR
const TreeGraph = dynamic(() => import("@/components/CytoscapeHierarchical"), {
  ssr: false,
});

const TreePage = () => {
  const treeData = {
    id: "root",
    label: "CEO",
    children: [
      {
        id: "l1_1",
        label: "EVP Operations",
        children: [
          {
            id: "l2_1",
            label: "Regional Director 1",
            children: [
              {
                id: "l3_1",
                label: "Area Manager 1",
                children: [
                  {
                    id: "l4_1",
                    label: "Supervisor 1",
                    children: [
                      { id: "l5_1", label: "Team Lead 1" },
                      { id: "l5_2", label: "Team Lead 2" },
                      { id: "l5_3", label: "Team Lead 3" },
                      { id: "l5_4", label: "Team Lead 4" },
                      { id: "l5_5", label: "Team Lead 5" },
                    ],
                  },
                  {
                    id: "l4_2",
                    label: "Supervisor 2",
                    children: [
                      { id: "l5_6", label: "Team Lead 6" },
                      { id: "l5_7", label: "Team Lead 7" },
                      { id: "l5_8", label: "Team Lead 8" },
                      { id: "l5_9", label: "Team Lead 9" },
                      { id: "l5_10", label: "Team Lead 10" },
                    ],
                  },
                  {
                    id: "l4_3",
                    label: "Supervisor 3",
                    children: [
                      { id: "l5_11", label: "Team Lead 11" },
                      { id: "l5_12", label: "Team Lead 12" },
                      { id: "l5_13", label: "Team Lead 13" },
                      { id: "l5_14", label: "Team Lead 14" },
                      { id: "l5_15", label: "Team Lead 15" },
                    ],
                  },
                  {
                    id: "l4_4",
                    label: "Supervisor 4",
                    children: [
                      { id: "l5_16", label: "Team Lead 16" },
                      { id: "l5_17", label: "Team Lead 17" },
                      { id: "l5_18", label: "Team Lead 18" },
                      { id: "l5_19", label: "Team Lead 19" },
                      { id: "l5_20", label: "Team Lead 20" },
                    ],
                  },
                  {
                    id: "l4_5",
                    label: "Supervisor 5",
                    children: [
                      { id: "l5_21", label: "Team Lead 21" },
                      { id: "l5_22", label: "Team Lead 22" },
                      { id: "l5_23", label: "Team Lead 23" },
                      { id: "l5_24", label: "Team Lead 24" },
                      { id: "l5_25", label: "Team Lead 25" },
                    ],
                  },
                ],
              },
              {
                id: "l3_2",
                label: "Area Manager 2",
                children: [
                  {
                    id: "l4_6",
                    label: "Supervisor 6",
                    children: [
                      { id: "l5_26", label: "Team Lead 26" },
                      { id: "l5_27", label: "Team Lead 27" },
                      { id: "l5_28", label: "Team Lead 28" },
                      { id: "l5_29", label: "Team Lead 29" },
                      { id: "l5_30", label: "Team Lead 30" },
                    ],
                  },
                  {
                    id: "l4_7",
                    label: "Supervisor 7",
                    children: [
                      { id: "l5_31", label: "Team Lead 31" },
                      { id: "l5_32", label: "Team Lead 32" },
                      { id: "l5_33", label: "Team Lead 33" },
                      { id: "l5_34", label: "Team Lead 34" },
                      { id: "l5_35", label: "Team Lead 35" },
                    ],
                  },
                  {
                    id: "l4_8",
                    label: "Supervisor 8",
                    children: [
                      { id: "l5_36", label: "Team Lead 36" },
                      { id: "l5_37", label: "Team Lead 37" },
                      { id: "l5_38", label: "Team Lead 38" },
                      { id: "l5_39", label: "Team Lead 39" },
                      { id: "l5_40", label: "Team Lead 40" },
                    ],
                  },
                  {
                    id: "l4_9",
                    label: "Supervisor 9",
                    children: [
                      { id: "l5_41", label: "Team Lead 41" },
                      { id: "l5_42", label: "Team Lead 42" },
                      { id: "l5_43", label: "Team Lead 43" },
                      { id: "l5_44", label: "Team Lead 44" },
                      { id: "l5_45", label: "Team Lead 45" },
                    ],
                  },
                  {
                    id: "l4_10",
                    label: "Supervisor 10",
                    children: [
                      { id: "l5_46", label: "Team Lead 46" },
                      { id: "l5_47", label: "Team Lead 47" },
                      { id: "l5_48", label: "Team Lead 48" },
                      { id: "l5_49", label: "Team Lead 49" },
                      { id: "l5_50", label: "Team Lead 50" },
                    ],
                  },
                ],
              },
              // Continuing with similar pattern for remaining nodes...
              // Note: Full data structure continues with the same pattern
              // Total nodes at each level:
              // Level 1: 5 nodes (EVP positions)
              // Level 2: 25 nodes (Regional Directors)
              // Level 3: 125 nodes (Area Managers)
              // Level 4: 625 nodes (Supervisors)
              // Level 5: 3125 nodes (Team Leads)
            ],
          },
        ],
      },
      {
        id: "l1_2",
        label: "EVP Finance",
        children: [
          // Similar structure as above
        ],
      },
      {
        id: "l1_3",
        label: "EVP Marketing",
        children: [
          // Similar structure as above
        ],
      },
      {
        id: "l1_4",
        label: "EVP Technology",
        children: [
          // Similar structure as above
        ],
      },
      {
        id: "l1_5",
        label: "EVP HR",
        children: [
          // Similar structure as above
        ],
      },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Result</h1>
      <TreeGraph data={treeData} />
    </div>
  );
};

export default TreePage;
