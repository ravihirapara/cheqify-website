# Story 5.2: Feature Comparison Table

Status: done

## Story

As a visitor,
I want to compare features across plans side by side,
so that I can make an informed decision about upgrading.

## Acceptance Criteria

1. **Given** the visitor scrolls below the pricing cards, **When** the comparison table is visible, **Then** a detailed feature comparison table shows all features across all plans
2. **Given** the table is rendered, **When** the visitor views it, **Then** features are grouped by category (Management, Analytics, etc.)
3. **Given** the table is rendered, **When** the visitor views cells, **Then** checkmarks/values indicate feature availability per plan
4. **Given** the table is rendered on mobile, **When** viewed, **Then** the table is responsive (horizontal scroll)

## Tasks / Subtasks

- [x] Task 1: Add comparison table translation keys
- [x] Task 2: Create PricingComparison component with grouped table
- [x] Task 3: Integrate into pricing page below cards
- [x] Task 4: Build and lint verification

## Dev Notes

### Stitch Design Reference
- Table with 4 columns: Feature, Free, Professional, Team
- Category headers: uppercase tracking-widest text-primary
- Values: text, checkmarks (check_circle filled), or dashes (remove icon)
- overflow-x-auto for mobile scroll
- Categories: Management, Analytics

### References
- [Source: _bmad-output/designs/stitch/pricing/code.html]
- [Source: _bmad-output/planning-artifacts/epics.md#Epic 5 > Story 5.2]

## Dev Agent Record

### Agent Model Used
### Debug Log References
### Completion Notes List
### File List
