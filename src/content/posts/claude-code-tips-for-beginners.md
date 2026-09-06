---
title: 'Claude Code Tips That Matter After Install'
description: 'Install guides are everywhere. These are the habits that matter in week two: CLAUDE.md, plan mode, context discipline, verification, push-back.'
pubDate: 2026-09-06
tags: ['ai tools', 'claude code', 'workflow']
query: 'claude code tips for beginners'
---

<div class="answer-box">
<strong>Quick answer</strong>
<p>The install is the easy part. The habits that make Claude Code work long-term: write a concise <strong>CLAUDE.md</strong>, start non-trivial tasks in <strong>plan mode</strong>, <strong>/clear</strong> context between unrelated tasks, <strong>verify</strong> results like a code reviewer, and <strong>push back</strong> when the first suggestion is wrong. Everything else builds on those five.</p>
</div>

Search for Claude Code tips and you mostly find install walkthroughs — how to get the tool
running, what to type first. That skips the part where beginners actually get stuck: week two,
when the novelty is gone and results depend on how you *work* with the agent. These are the
eight habits that survive that week, in the order we would teach them.

## 1. Write a CLAUDE.md — and keep it short

`CLAUDE.md` is your project's standing instruction file, loaded into every session. Put in it:
build/test/lint commands, architecture in three lines, code conventions, and — most valuable
of all — the things you do **not** want ("never use class components", "no new dependencies
without asking"). Keep it concise; a bloated file spends context every session and dilutes
attention. Start at ten lines, grow when you catch the agent making the same wrong assumption
twice.

## 2. Plan before you execute

For anything beyond a one-file change, start in **plan mode** (Shift+Tab in the session). The
agent reads the code and proposes an approach without touching files. A wrong plan costs
seconds to correct; a wrong implementation costs an hour of unwinding. Review the plan like a
spec, not a formality — the implementation will match what you approved, not what you meant.

## 3. Manage context like a budget

Context is the agent's working memory, and everything in it competes for quality:

- `/clear` between unrelated tasks — stale context from task A contaminates task B.
- `/compact` during long sessions to summarize and reclaim space.
- Reference files directly (`@src/lib/api.ts`) instead of letting the agent hunt.

This is the single highest-leverage habit on the list. Most "the AI got dumber" reports are
context hygiene failures, not model failures.

## 4. Verify like a reviewer, not a spectator

When the agent says "done", your job starts: run the tests, run the build, read the diff. Ask
it to prove the change works ("run the test suite and show me the results"). The failure mode
is not the agent writing bad code — it is you shipping code you did not read. You own what
ships; treat every change like a pull request from a talented teammate you still review.

## 5. Push back

"I don't like this approach — use X instead" is a complete sentence the agent handles well.
The best sessions are dialogues: the first suggestion is a draft, not a verdict. Beginners who
accept everything get average results from a great tool; beginners who argue get great ones.

## 6. Commit in small checkpoints

Let the agent work in small, verifiable steps and commit after each one that passes. Git
history becomes your undo log. A session that ends in ten clean commits beats one that ends in
a forty-file mega-diff you are afraid to review.

## 7. Be specific about what "done" means

"Add validation to the signup form" gets you whatever validation the agent imagines. "Add
email format validation to the signup form, show the error under the field, and add a test for
the invalid case" gets you the thing. Specificity is not prompt-engineering theater — it is a
spec, and the agent is a spec-follower.

## 8. Add tools (MCP) only when a task demands them

Model Context Protocol servers connect the agent to databases, browsers, and APIs. Powerful —
and a day-one trap. Every connection adds context surface and permission complexity. Add one
when a real task needs it, learn its behavior, then add the next.

## What we deliberately left out

Install steps (the official docs cover them and stay current), power-user tricks (hooks,
subagents, background tasks — valuable, but week-three material), and any productivity
multiplier claims. We have not run controlled measurements of our own, and the internet is
full of numbers that describe someone else's workflow. [Our method](/method/) is to show
reasoning and sources, not borrowed benchmarks.

## FAQ

**Does CLAUDE.md replace good prompts?**
No — it removes repetition, not thinking. The file holds the standing rules; the specific task
still needs a specific request.

**Is plan mode slower?**
It feels slower for ten seconds and saves the hour that a wrong approach costs. Use it for
anything multi-file or architectural; skip it for a one-line fix.

**How do I know if my context is polluted?**
Symptoms: the agent forgets constraints you set earlier, re-reads files unnecessarily, or
drifts from your conventions mid-task. `/clear` and restart the task with a fresh, specific
prompt.

## Sources

- Claude Code official docs and quickstart: docs.anthropic.com (claude code section)
- CLAUDE.md guidance reflects the official documentation's recommended structure as of
  September 2026 — verify specifics there before standardizing your team's setup.
