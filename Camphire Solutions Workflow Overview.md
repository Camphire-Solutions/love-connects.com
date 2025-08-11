# 🚦 Developer Workflow: Assignment to Delivery

```
[Assignment Sheet]
        ↓
 [Solution Proposal]
        ↓
  ┌────────────────────────────┐
  │    For Each Module:        │
  │  ┌───────────────┐         │
  │  │   Stubs &     │         │
  │  │  Interfaces   │         │
  │  └──────┬────────┘         │
  │         ↓                  │
  │   [Core Logic]             │
  │         ↓                  │
  │ [Unit Tests & Docs]        │
  │         ↓                  │
  │     [Review]               │
  └─────────┴──────────────────┘
        ↓
[Repeat for all modules]
```

---
### **Step-by-step Breakdown**

**1. Assignment Sheet:**  
    We start with a clear problem statement and detailed requirements. If anything’s unclear, just ask - we’ll work together to update the Assignment Sheet so we’re all on the same page.
    
**2. Solution Proposal:**  
    You define your approach by outlining the planned modules, overall architecture, and strategy for testing and design. This step ensures your plan is clear, structured, and ready for smooth execution.
    
**3. For Each Module, follow this loop (🔁 FORLOOP):**
- **Stubs & Interfaces:** Outline the function/class structure - just signatures and docstrings, no logic yet.
- **Core Logic:** Implement the main functionality.
- **Unit Tests & Docs:** Create tests to verify correctness and add clear documentation.
- **Review:** Submit for feedback and refine as needed.
- **Repeat** until every module is delivered and approved.
    
**4. User Testing & Handover:**  
Integrate all modules and run full end-to-end tests. Conduct key user tests to validate real-world functionality. Deliver clear, well-structured documentation explaining how all components work together, including setup, usage, and maintenance guidelines.


## **✅ Required in Every Solution Proposal**

 **Overview**
- In a few sentences, summarize your understanding of the assignment.
- Ask questions regarding the Assignment when necessary.

**Tech Stack & Style Guide**
- Define the languages, frameworks, and coding standards to be used, with brief reasoning for each choice.
- Consider user context, hardware requirements, and future scalability. Plan for MVP delivery with a clear path to scale and harden the system without major rewrites.
    
**Infrastructure Plan**
- Specify the hardware or services (cloud, on-premises, hybrid) your solution will run on.
- Account for performance and scalability implications.
    
**Module Breakdown**
- List all modules to be developed, each with a one-line description of its role.
- Briefly outline how the modules will connect and interact.
    
**Architecture & Data Flow**
- Briefly explain how data and control flow between modules. Include a rough diagram or sketch if helpful.
    
**For Each Module:**
- **Inputs/Outputs:**
    - Describe what data comes in and what goes out (include data types if possible).
        
- **Testing Plan:**
    - Describe which testing framework(s) will be used, target coverage, and how coverage will be measured.
        
- **Timeline:**
    - Provide an estimated delivery time for this module alone or phase.
        
- **Open Questions or Risks:**
    - List anything you’re unsure about or potential challenges you foresee.

---
**Got an idea to improve the assignment? Don’t hold back - speak up.**
Keep it focused, keep it lean - share only what’s essential and cut the rest.  
We’re not here to slow you down - just to keep chaos out with minimal structure.

## **⭐️ If You Have Extra Value to Add**

- Propose tools, libraries, or workflows that can speed up development or improve quality.
- Recommend relevant open-source projects that could be reused or adapted.
- Link to essential documentation or code samples for complex components.
- Include diagrams or architecture sketches where they help explain your approach.
- Suggest alternatives or fallback options for high-risk or experimental parts.
- !!! Share which AI coding assistant you use and your experience with it - we strongly encourage AI-assisted coding to boost speed and productivity.

---


