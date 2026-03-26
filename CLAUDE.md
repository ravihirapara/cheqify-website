# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Cheqify.app Marketing Website - Professional landing/marketing website for Cheqify.app, a cheque printing and lifecycle management platform for SMBs. Links to the main app at https://app.cheqify.app

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## BMAD Methodology

This project uses BMAD (Business-Methodology for AI-assisted Development) v6.0.0-alpha for structured planning and development workflows.

### Directory Structure

- `_bmad/` - BMAD framework files (agents, workflows, templates)
- `_bmad-output/` - Project artifacts generated during development
  - `planning-artifacts/` - Product briefs, PRDs, architecture docs
  - `implementation-artifacts/` - Epics, stories, sprint files

### Key BMAD Workflows

Use the `/` command to invoke BMAD workflows:
- `/workflow-status` - Check current project phase and next steps
- `/create-product-brief` - Create product briefs
- `/prd` - Create/validate/edit PRDs
- `/create-architecture` - Design system architecture
- `/create-epics-and-stories` - Break down PRD into implementation stories
- `/dev-story` - Execute a story implementation
- `/quick-dev` - Flexible development with or without tech specs

### Current Project Phase

Starting fresh - needs product brief creation first.

## Dev Commands

```bash
npm run dev    # Start dev server
npm run build  # Production build
npm run lint   # Run ESLint
```
