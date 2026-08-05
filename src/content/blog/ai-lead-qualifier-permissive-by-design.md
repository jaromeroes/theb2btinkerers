---
title: "I Built an AI That Qualifies Leads. The Best Decision Was Letting It Say Yes Too Often."
description: "A first-person build story about AI lead qualification: why a permissive classifier beats a strict one, why database labels lie, and why the ICP criteria belong in prose."
excerpt: "Most people build the strict version of an AI qualifier and quietly delete their own pipeline. A false negative is invisible and permanent. A false positive costs one call. That asymmetry changes the whole design."
slug: "ai-lead-qualifier-permissive-by-design"
author: "The B2B Tinkerers"
date: 2026-10-22
tag: "AI & Marketing"
readTime: "7 min read"
image: "../../assets/blog/ai-qualifier-cover.webp"
translationKey: "ai-qualifier-permissive"
---

Somewhere in the building, usually the newest SDR or whoever lost the argument, someone is working through a spreadsheet. A few hundred rows, each one a company, pulled out of a contact database because somebody applied a filter. Their job is to read those rows one at a time and decide which companies are worth a call.

Open the website. Squint at it. Guess, and move on to the next row.

That's where AI lead qualification actually earns its keep, and it's also where most outbound quietly dies. Not in the pitch, not in the sequence. In the two hours a week nobody wants to spend checking whether a list of companies has anything to do with your ICP.

I've been working as a fractional CMO for a B2B SaaS platform in industrial logistics. They sell to mid-market manufacturers, through a micro-committee of logistics, IT and procurement, on a pure outbound motion. No inbound safety net to catch the mistakes. If the list is wrong, the quarter is wrong.

The manual process had all three of the classic problems. It was slow. It was inconsistent, because two people qualified the same company differently, and the same person qualified differently at 6pm on Friday than at 10am on Tuesday. And it never finished. It just got abandoned every time something more urgent showed up, which is the real failure mode. Not bad qualification. No qualification.

So I built a small script. What makes it work isn't the code or the model but three design decisions, one of which sounds like a bug.

## What It Actually Does

For each company on the list, the script asks a frontier model with web search to go find out what that company *actually does* in the real world. Not what the database says. What it does. Then it classifies that against the ICP model and writes a row to a spreadsheet: the verdict, the reasoning behind it, the sources it consulted, and a note for the rep who's going to make the call.

It checkpoints after each company, so if the run dies at company 63 of 100, it picks up at 64 instead of starting over. Boring detail, saves your afternoon.

That's the whole thing: a loop, a prompt and a CSV. No agent swarm, no platform.

## Decision 1: It Says Yes Too Often, On Purpose

![One shape fading silently into nothing while another bounces off a barrier and carries on](../../assets/blog/ai-qualifier-01.webp)

Here's the decision I'd defend hardest, and the one everybody argues with first.

When the evidence is ambiguous, the classifier answers **yes**. It doesn't hedge, it doesn't abstain, it doesn't drop the company into a "maybe" bucket that nobody ever opens. It says yes, and it attaches a note telling the rep exactly what to verify on the call.

That's not sloppiness. It's arithmetic on the cost of being wrong.

Think about what each error actually costs you. A false positive means a rep makes one call that goes nowhere. Annoying, visible, and over in fifteen minutes. Somebody will tell you about it, probably that same day.

A false negative costs you a customer, and you will never know it happened. That company gets silently deleted from your world. It doesn't appear in a report. Nobody complains about it. It's not in a rejected pile you can review, because the whole point of rejecting it was to not look at it again. The error is invisible and it's permanent.

Those two things are not the same size, and yet almost everyone builds as if they were. The instinct is to make the classifier strict, because a strict classifier feels rigorous. It gives you a clean list. It looks like judgement. And what it's actually doing is deleting your pipeline in a way that never shows up on a dashboard, so you get to feel precise while your reachable market quietly shrinks.

The mental model I keep coming back to: **the human is the filter, the machine is the funnel.** The machine's job is to be wide and cheap and tireless. The rep's job is to be the one who decides, on the call, with a human on the other end. Ask the machine to do the deciding and you've handed your most consequential judgement to the part of the system that can't ask a follow-up question.

So when the model can't tell, it says yes and it says *here's what I couldn't tell*. The ambiguity gets passed forward to the person who can resolve it, instead of being resolved by a guess in a script.

## Decision 2: The Label Lies

The second decision came from an obvious thing that nobody acts on: the industry label in your contact database is fiction.

I've watched a database confidently tag an industrial manufacturer as "Retail." Not a fringe case, not an unusual company. Just wrong, sitting there in a column, being trusted. That label came from a scrape, or a self-declared field on a form, or a category system designed for someone else's purposes years ago. It's metadata about a company. It is not the company.

If you filter on it, you inherit every error in it. And errors in a filter don't fail loudly. They fail as absence.

So the classifier doesn't trust the label. It goes and looks. It reads what the company says about itself right now, on the live web, and it cites the sources it used. That last part matters more than it sounds like. The output isn't a verdict, it's an argument with references attached, which means a rep who disagrees can open the sources and check the reasoning in thirty seconds.

An AI that hands you a yes/no is asking for faith. An AI that hands you a yes/no plus its working is handing you something you can audit. Only one of those survives contact with a sales team, because sales teams are professionally skeptical and they should be.

Qualify against reality, not against metadata.

## Decision 3: The Criteria Lives in Prose, Not in Code

![Layered document panels stacked in versioned sequence over a plain grid field](../../assets/blog/ai-qualifier-02.webp)

The ICP model doesn't live inside the script. It lives in a plain-language document, a prompt file, versioned like any other document, written in sentences a human can read.

This sounds like a technical detail. It's actually the political one.

The moment your ICP criteria are expressed as code, ownership of the ICP moves to whoever can edit the code. Marketing wants to sharpen a criterion, marketing files a ticket. Marketing waits. The definition of who you sell to, which is arguably the single most important judgement in the company, now has a queue in front of it.

When it's prose, changing the criteria means editing a paragraph. The person who owns the ICP owns the file. No ticket, no sprint, no translation layer between the thinking and the system. That file has already been through several versions as the criteria sharpened, and every one of those revisions took minutes, because sharpening an ICP is a marketing act and it should feel like writing, not like deploying.

If you're building anything like this, put the judgement in language and keep the code dumb. The code should be plumbing. The thinking should be readable by the person doing the thinking. That's the same principle behind most of the [AI strategy work](/services/ai-strategy) I do: the leverage isn't automating the decision, it's putting the decision somewhere the right human can reach it.

## What It Costs, and How We'll Know It Works

The operating numbers are unglamorous, which is the point.

Each company takes roughly 15 to 30 seconds and costs about $0.03–0.06 (€0.03–0.05). A batch of around 100 companies runs in 30 to 50 minutes for roughly $5–8 (€4.50–7). That's the whole economics. You can run it on the coffee budget.

Now the honest part.

I can't tell you it works yet. We set a bar before we started, which is the only order that means anything: agreement above 85% against a reference set of 64 companies that were classified by hand. That validation is still running. It has not concluded. I don't have a number for you, and if I did have a number this soon you should be suspicious of it.

I'm telling you this because the alternative is the thing I dislike most about how AI gets written about in B2B marketing. Somebody builds a tool, describes it in confident prose, and lets the absence of a stated bar imply that it cleared one. What I have is a design I believe in and a test I haven't finished. Those are different things and I'd rather say so than pad this piece with a number I invented.

If it clears 85% it ships as the default, and if it doesn't the prompt file gets another version and we run it again.

## The Leverage Wasn't the Model

Here's what I want you to take from this.

The model I used is available to everyone reading this, at the same price, today. Your competitor has it. Your intern has it. There is no advantage in the model, and anyone selling you one is selling you access to something you already have.

The advantage, if there is one here, is in three decisions that took an afternoon of thinking and no engineering talent whatsoever. Be permissive, because your errors aren't symmetrical. Verify against the world, because your database is lying to you. Keep the criteria in prose, because the person who owns the judgement should own the file.

None of that is technology. All of it is marketing judgement, applied to a tool that will do exactly what you tell it and has no opinion about whether what you told it was smart.

---

*At The B2B Tinkerers, we help B2B teams put AI where it actually creates leverage, and keep it away from the decisions that need a human. If you want a second opinion on what you're building, [let's talk](#contact). Or see how we work as a [fractional CMO](/services/fractional-cmo).*
