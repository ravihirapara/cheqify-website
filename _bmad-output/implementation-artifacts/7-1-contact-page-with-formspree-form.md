# Story 7.1: Contact Page with Formspree Form

Status: in-progress

## Story

As a visitor,
I want to submit a contact inquiry,
so that I can get help or ask about enterprise needs.

## Acceptance Criteria

1. **Given** the visitor navigates to /contact, **When** the page loads, **Then** a contact form with Full Name, Email, Subject (dropdown), Message fields is displayed
2. **Given** the form is rendered, **When** the visitor views the page, **Then** support contact info (email addresses) is displayed
3. **Given** the form is rendered, **When** the visitor views below form, **Then** average response time is shown
4. **Given** the visitor fills the form, **When** they submit, **Then** form submits to Formspree
5. **Given** successful submission, **When** response received, **Then** success message shown
6. **Given** failed submission, **When** error occurs, **Then** error message shown
7. **Given** the visitor submits, **When** fields are empty, **Then** required field validation prevents submission

## Dev Notes

- Content from PRD: FR29, FR30, FR31, FR32
- Layout from Stitch: centered hero + 2-column grid (info cards left, form right)
- @formspree/react already in package.json
- Form states: idle, submitting, success, error (from project-context.md)
- Support emails: support@cheqify.app, hello@cheqify.app
- Subject options: General Inquiry, Technical Support, Enterprise/Business, Feedback
- Env variable needed: NEXT_PUBLIC_FORMSPREE_ID

## Dev Agent Record
### Agent Model Used
### Completion Notes List
### File List
