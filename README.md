# KAMS Middle School Science - Cycle 3 Curriculum
## December 1-19, 2025 | Grades 7 & 8

---

## Quick Navigation

### For Teaching This Week

| Task | Grade 7 | Grade 8 |
|------|---------|---------|
| **Lesson Plan** | [Week 1 Plan](grade7/cycle3/week1/lesson-plan.md) | [Week 1 Plan](grade8/cycle3/week1/lesson-plan.md) |
| **Student Page** | [Canvas HTML](grade7/cycle3/week1/student-page.html) | [Canvas HTML](grade8/cycle3/week1/student-page.html) |
| **Forms Script** | [G7 Forms](grade7/cycle3/week1/forms.gs) | [G8 Forms](grade8/cycle3/week1/forms.gs) |

### For Planning & Assessment

| Resource | Grade 7 | Grade 8 |
|----------|---------|---------|
| **Curriculum Design** | [G7 Cycle 3](grade7/cycle3/curriculum-design.md) | [G8 Cycle 3](grade8/cycle3/curriculum-design.md) |
| **Rubrics** | [G7 Rubrics](grade7/cycle3/rubrics.md) | [G8 Rubrics](grade8/cycle3/rubrics.md) |

### Framework & Technical

| Document | Purpose |
|----------|---------|
| [Pedagogical Approach](framework/pedagogical-approach.md) | Research-based methodology, 3D learning framework, differentiation |
| [Technical Reference](framework/technical-reference.md) | Google Forms API rules, Canvas integration, troubleshooting |
| [FormUtils.gs](shared/FormUtils.gs) | Shared utility functions for form creation |
| [Science Hub](shared/KAMS-Science-Hub.xlsx) | Master gradebook and data aggregation |

---

## Repository Structure

```
C3.Repo/
├── README.md                              # You are here
├── framework/                             # Foundational documents
│   ├── pedagogical-approach.md            # Teaching philosophy & methods
│   └── technical-reference.md             # Forms API & Canvas setup
├── grade7/                                # All Grade 7 content
│   └── cycle3/
│       ├── curriculum-design.md           # Standards, learning targets, station details
│       ├── rubrics.md                     # Scoring guides for all assessments
│       └── week1/
│           ├── lesson-plan.md             # Daily implementation guide
│           ├── student-page.html          # Canvas-embedded lesson page
│           └── forms.gs                   # Google Forms creation script
├── grade8/                                # All Grade 8 content
│   └── cycle3/
│       ├── curriculum-design.md
│       ├── rubrics.md
│       └── week1/
│           ├── lesson-plan.md
│           ├── student-page.html
│           └── forms.gs
├── shared/                                # Cross-grade resources
│   ├── FormUtils.gs                       # Shared form utilities
│   └── KAMS-Science-Hub.xlsx              # Master data hub
└── archive/                               # Supplementary/reference files
    └── KAMS_Cycle3_Hub_Additions.xlsx
```

---

## Cycle 3 Overview

### Grade 7: Climate Change & Energy Flow
**Phenomenon:** "Why does a car get hot inside but not outside?"

| Week | Topic | Focus |
|------|-------|-------|
| 1 | Greenhouse Effect Mystery | Molecular vibration, carbon cycle, thermal trap design |
| 2 | Feedback Loops | Albedo effect, carbon sinks, system optimization |
| 3 | Synthesis | Review, interim assessment |

**NGSS:** MS-ESS3-5 (Climate) + Spiral MS-PS1-5, MS-PS1-6 (Chemistry)

### Grade 8: Natural Selection & Forces
**Phenomenon:** "If cheetahs are fastest, why haven't gazelles gone extinct?"

| Week | Topic | Focus |
|------|-------|-------|
| 1 | Cheetah-Gazelle Arms Race | N3L in predation, trait variation, organism design |
| 2 | Evidence of Evolution | Homologous structures, fossil record, adaptation |
| 3 | Synthesis | Review, interim assessment |

**NGSS:** MS-LS4-4 (Evolution) + Spiral MS-PS2-1, MS-PS2-2 (Forces)

---

## Teacher Workflow

### Before the Cycle (Setup)
1. Review [Curriculum Design](grade7/cycle3/curriculum-design.md) for learning targets
2. Run [Forms Script](grade7/cycle3/week1/forms.gs) in Google Apps Script
3. Upload [Student Page](grade7/cycle3/week1/student-page.html) to Canvas
4. Gather physical materials (see lesson plan checklist)

### During Each Week (Teaching)
1. Follow daily schedule in [Lesson Plan](grade7/cycle3/week1/lesson-plan.md)
2. Use probing questions from lesson plan
3. Monitor form responses for misconception patterns
4. Provide differentiation as needed

### After Each Week (Assessment)
1. Export form responses to [Science Hub](shared/KAMS-Science-Hub.xlsx)
2. Apply [Rubrics](grade7/cycle3/rubrics.md) to open-response items
3. Sync grades to Canvas
4. Identify students needing follow-up

---

## Key Features

### "Weaponizing the Gaps" Approach
Rather than re-teaching Cycle 2 content directly, we design tasks where misconceptions cause visible failures:
- **Misconception traps** force cognitive revision
- **Interleaved retrieval** requires prior knowledge application
- **3D integration** connects SEP + DCI + CCC in every assessment

### Station-Based Model
Each week follows consistent rotation:
1. **Hook** - Phenomenon engagement (12 pts)
2. **Station 1** - Core concept + interleaved retrieval (20 pts)
3. **Station 2** - Application with manipulatives (20 pts)
4. **Station 3** - Engineering design challenge (25 pts)
5. **Exit Ticket** - Mixed assessment (23 pts)

### Assessment Balance
- ~35% auto-gradable (MCQ, checkbox, calculation)
- ~65% rubric-scored (explanations, designs, integrations)
- 0-point confidence diagnostics for metacognition
- SEP-1 question generators on exit tickets

---

## Technical Integration

### Platform Stack
- **LMS:** Canvas (modules, assignments, gradebook)
- **Assessment:** Google Forms (embedded via LTI)
- **Data:** Google Sheets (IMPORTRANGE aggregation)
- **Simulations:** PhET (Chromebook-friendly)

### Data Flow
```
Student submits form → Response sheet → Hub aggregation → Canvas gradebook
```

### Form Creation
1. Open Google Apps Script
2. Paste content from grade-specific `forms.gs`
3. Also paste `FormUtils.gs` for utilities
4. Run `createAllForms()` function
5. Configure quiz settings manually in Forms UI

---

## Support Resources

### Common Issues
| Problem | Solution |
|---------|----------|
| Form won't embed | Check LTI settings in Canvas admin |
| Scores not syncing | Verify IMPORTRANGE permissions |
| Script errors | See [Technical Reference](framework/technical-reference.md) |

### Differentiation
See [Pedagogical Approach](framework/pedagogical-approach.md) for:
- IEP/504 accommodations
- ELL supports (sentence frames, glossaries)
- Extension opportunities
- Recovery paths for absent students

---

## Version History

| Date | Change |
|------|--------|
| 2025-12-04 | Reorganized repository for teaching/learning utility |
| 2025-12-01 | Added cross-pollination improvements from audit |
| 2025-11-30 | Initial Cycle 3 curriculum design |

---

*KAMS Middle School Science | Cycle 3 | December 2025*
